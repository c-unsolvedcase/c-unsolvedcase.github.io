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
    if (p && p.best && p.archive) return p;
  } catch {}
  return { best: {}, archive: {} };
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
  return b;
}

// Record a solved result (best run per case wins the archive slot; best
// stars always count toward rank). Returns this run's badges + entry.
export function recordResult(info, s) {
  const r = s.result;
  if (!r || !r.solved || !r.caseId) return null;
  const p = loadProgress();
  const badges = badgesFor(r);
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
    solvedAt: Date.now()
  };
  const prev = p.archive[r.caseId];
  if (!prev || entry.stars >= prev.stars) p.archive[r.caseId] = entry;
  if ((p.best[r.caseId] || 0) < r.stars) p.best[r.caseId] = r.stars;
  saveProgress(p);
  return { progress: p, badges, entry: p.archive[r.caseId] };
}
