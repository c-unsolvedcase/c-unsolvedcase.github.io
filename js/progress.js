// Detective career progression — client-only, localStorage "uc.progress.v1".
// Best stars per case feed the rank ladder; every solved case is archived
// locally with its awards, badges and true timeline so the verdict replay
// can be reopened from the entry screen. Nothing here leaves the device.

const KEY = "uc.progress.v1";

// 6 cases × 5 stars = 30: a full clear reaches the top rank.
export const RANKS = [
  [0, "Rookie"], [6, "Constable"], [12, "Sergeant"],
  [18, "Inspector"], [24, "Chief Inspector"], [30, "Master Detective"]
];

export function loadProgress() {
  try {
    const p = JSON.parse(localStorage.getItem(KEY) || "null");
    if (p && p.best && p.archive) {
      p.pb = p.pb || {};       // I8 personal bests (seconds per case)
      p.keys = p.keys || {};   // I1 collected brass keys per case
      p.play = p.play || null; // I6 streak { last: "YYYY-MM-DD", streak: n }
      return p;
    }
  } catch {}
  return { best: {}, archive: {}, pb: {}, keys: {}, play: null };
}

export function saveProgress(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {}
}

export function totalStars(p) {
  return Object.values(p.best || {}).reduce((a, b) => a + (b || 0), 0);
}

export function rankFor(total) {
  let cur = RANKS[0], next = null;
  for (let i = 0; i < RANKS.length; i++) {
    if (total >= RANKS[i][0]) { cur = RANKS[i]; next = RANKS[i + 1] || null; }
  }
  return { name: cur[1], at: cur[0], next: next ? { name: next[1], at: next[0] } : null };
}

export function fmtTime(sec) {
  if (sec == null) return "";
  const m = Math.floor(sec / 60), s = sec % 60;
  return m >= 60 ? `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")}m` : `${m}m ${String(s).padStart(2, "0")}s`;
}

// Mastery badges for one solved run, from the server results payload.
export function badgesFor(r) {
  if (!r || !r.solved) return [];
  const b = [];
  if (r.hintsUsed === 0) b.push({ id: "nohints", label: "No Hints", icon: "🧠" });
  if (r.wrongLinks === 0) b.push({ id: "clean", label: "Clean Board", icon: "✨" });
  if (r.stars === 5) b.push({ id: "flawless", label: "Flawless", icon: "⭐" });
  if (r.difficulty === "master") b.push({ id: "mastermind", label: "Mastermind", icon: "👑" });
  if (r.earlyBonus) b.push({ id: "earlycall", label: "Early Call", icon: "⏱" }); // I9
  return b;
}

// Record a solved result (best run per case wins the archive slot; best
// stars always count toward rank). Returns this run's badges + entry.
// I3: a MODIFIED run (challenge modifiers) is flagged and never touches the
// rank bests or the canonical archive entry — standard runs are untouched.
// I8: personal-best times are kept per case (unmodified runs, plus runs
// carrying the speedrun modifier — those exist to be timed).
export function recordResult(info, s) {
  const r = s.result;
  if (!r || !r.solved || !r.caseId) return null;
  const p = loadProgress();
  const badges = badgesFor(r);
  const modified = Array.isArray(r.modified) && r.modified.length ? [...r.modified] : null;
  const entry = {
    caseId: r.caseId,
    title: (info && info.meta && info.meta.title) || r.caseId,
    stars: r.stars,
    difficulty: r.difficulty || "standard",
    timeSec: r.timeSec != null ? r.timeSec : null,
    hintsUsed: r.hintsUsed, wrongLinks: r.wrongLinks,
    awards: r.awards || [],
    badges,
    players: s.players.map((x) => x.name),
    truth: r.truth || null,
    text: r.text || "",
    timeline: r.timeline || null,
    solvedAt: Date.now(),
    modified
  };
  if (!modified) {
    const prev = p.archive[r.caseId];
    if (!prev || entry.stars >= prev.stars) p.archive[r.caseId] = entry;
    if ((p.best[r.caseId] || 0) < r.stars) p.best[r.caseId] = r.stars;
  }
  if (r.timeSec != null && (!modified || modified.includes("speedrun"))) {
    if (!p.pb[r.caseId] || r.timeSec < p.pb[r.caseId]) p.pb[r.caseId] = r.timeSec;
  }
  saveProgress(p);
  return { progress: p, badges, entry: modified ? entry : p.archive[r.caseId] };
}

// ---- I1: brass-key collection (local mirror of the hunts you joined) ----
export const TOTAL_KEYS = 28; // one per scene across all six cases

export function recordKey(caseId, sceneId) {
  const p = loadProgress();
  const list = p.keys[caseId] || (p.keys[caseId] = []);
  if (!list.includes(sceneId)) { list.push(sceneId); saveProgress(p); }
  return keyProgress(p);
}

export function keyProgress(p) {
  const found = Object.values(p.keys || {}).reduce((a, l) => a + (l ? l.length : 0), 0);
  return { found, total: TOTAL_KEYS, complete: found >= TOTAL_KEYS };
}

// ---- I6: daily spotlight + play streak ----
const dayStr = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function dailyCaseId(cases, now = new Date()) {
  if (!cases || !cases.length) return null;
  const day = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  return cases[((day % cases.length) + cases.length) % cases.length].id;
}

export function markPlayedToday(now = new Date()) {
  const p = loadProgress();
  const today = dayStr(now);
  if (!p.play || p.play.last !== today) {
    const y = new Date(now); y.setDate(y.getDate() - 1);
    const streak = p.play && p.play.last === dayStr(y) ? (p.play.streak || 0) + 1 : 1;
    p.play = { last: today, streak };
    saveProgress(p);
  }
  return p.play;
}
