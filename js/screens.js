// Full-screen views: entry, lobby, chapter briefing / report overlays, and the result screen.
import { h, clear } from "./dom.js";
import { ctx } from "./ctx.js";
import { sheet, shareInvite, partySheet, settingsSheet, howToSheet, lineBtn, voiceControls } from "./sheets.js";
import { loadProgress, totalStars, rankFor, fmtTime, recordResult } from "./progress.js";
import { buildShareCard, shareResultCard, downloadResultCard, DIFF_LABEL } from "./sharecard.js";
import { replayOverlay } from "./replay.js";
import { prologueOverlay } from "./prologue.js";

export function entryScreen({ code, cases, difficulties, onCreate, onJoin }) {
  const saved = (() => { try { return localStorage.getItem("uc.name") || ""; } catch { return ""; } })();
  const name = h("input", { type: "text", maxlength: 16, placeholder: "Your name", value: saved, "aria-label": "Your name", autocomplete: "nickname" });
  const codeIn = h("input", { type: "text", maxlength: 6, placeholder: "CODE", value: code || "", "aria-label": "Party code", class: "code-in", autocapitalize: "characters", autocomplete: "off" });
  const err = h("p", { class: "form-err", role: "alert" });
  const go = (fn) => () => {
    const n = name.value.trim();
    if (!n) { err.textContent = "Pick a name first."; name.focus(); return; }
    try { localStorage.setItem("uc.name", n); } catch {}
    fn(n);
  };
  // Case + difficulty picker (create flow only — guests join by code and play
  // whatever the host picked). The fallback list is Case 1, so before the
  // catalogue loads — or if it cannot be fetched — the screen behaves exactly
  // as it always did.
  const list = (cases && cases.length) ? cases : [{ id: "case1", title: "The Last Ferry", teaser: "Ten years ago a woman vanished. The pier says she jumped. The page says otherwise.", difficulty: "Standard", players: "1–4", chapters: 5, suspects: 5 }];
  const diffs = (difficulties && difficulties.length) ? difficulties : [{ id: "standard", label: "Standard" }];
  let selCase = list[0].id, selDiff = "standard";
  const tag = h("p", { class: "tag" }, "");
  const caseBox = h("div", { class: "stack" });
  const diffBox = h("div", { class: "seg", role: "radiogroup", "aria-label": "Difficulty" });
  const prog = loadProgress();
  function paint() {
    const cur = list.find((c) => c.id === selCase) || list[0];
    tag.textContent = `Case ${list.indexOf(cur) + 1}: ${cur.title}`;
    clear(caseBox);
    list.forEach((c, i) => {
      const best = prog.best[c.id] || 0, arch = prog.archive[c.id];
      caseBox.append(h("button", { class: "choice" + (c.id === selCase ? " on" : ""), "aria-pressed": c.id === selCase ? "true" : "false", onclick: () => { selCase = c.id; paint(); } },
        h("strong", {}, `Case ${i + 1}: ${c.title}`), h("br"), h("small", {}, c.teaser || ""), h("br"),
        h("small", {}, `${c.difficulty} · ${c.chapters} chapters · ${c.suspects} suspects · ${c.players} players`),
        best ? h("span", { class: "case-stars", "aria-label": "Best: " + best + " stars" }, " " + "★".repeat(best) + "☆".repeat(5 - best)) : null,
        arch && arch.badges && arch.badges.length ? h("span", { class: "case-badges" }, " " + arch.badges.map((b) => b.icon).join(" ")) : null));
    });
    clear(diffBox);
    diffs.forEach((d) => diffBox.append(h("button", { class: d.id === selDiff ? "on" : "", "aria-pressed": d.id === selDiff ? "true" : "false", onclick: () => { selDiff = d.id; paint(); } }, d.label)));
  }
  paint();
  return h("main", { class: "screen entry" },
    h("div", { class: "title-block" }, h("p", { class: "eyebrow" }, "A co-op mystery for 1–4 detectives"), h("h1", {}, "Unsolved Case"), tag),
    h("div", { class: "card-box" }, name,
      code
        ? h("div", {}, h("p", { class: "muted" }, "You've been invited to party ", h("strong", {}, code), "."), h("button", { class: "btn big", onclick: go((n) => onJoin(code, n)) }, "Join the investigation"))
        : h("div", { class: "stack" },
            h("p", { class: "muted" }, "Choose a case"), caseBox,
            h("p", { class: "muted" }, "Difficulty"), diffBox,
            h("button", { class: "btn big", onclick: go((n) => onCreate(n, selCase, selDiff)) }, "Start a new party"),
            h("div", { class: "or" }, "or join friends"),
            h("div", { class: "row" }, codeIn, h("button", { class: "btn", onclick: go((n) => { const c = codeIn.value.trim().toUpperCase(); if (c.length < 4) { err.textContent = "Enter the party code."; return; } onJoin(c, n); }) }, "Join"))),
      err),
    (() => {
      const total = totalStars(prog), rank = rankFor(total);
      return h("div", { class: "rank-line", "aria-label": "Your detective rank" },
        h("span", { class: "rank-badge" }, "🎖"), h("strong", {}, rank.name),
        h("small", {}, ` ${total} star${total === 1 ? "" : "s"} earned` + (rank.next ? ` · ${rank.next.at - total} to ${rank.next.name}` : " · the highest rank")));
    })(),
    (() => {
      const solved = Object.values(prog.archive);
      if (!solved.length) return null;
      return h("div", { class: "card-box archive" }, h("h3", {}, "Case archive"),
        h("p", { class: "muted" }, "Cases you have closed. Reopen one to replay the night."),
        ...solved.map((e) => h("button", { class: "choice archive-row", onclick: () => archiveSheet(e) },
          h("strong", {}, e.title), h("br"),
          h("small", {}, `${"★".repeat(e.stars)}${"☆".repeat(5 - e.stars)} · ${DIFF_LABEL[e.difficulty] || "Standard"}${e.timeSec != null ? " · " + fmtTime(e.timeSec) : ""}`),
          e.badges && e.badges.length ? h("span", { class: "case-badges" }, " " + e.badges.map((b) => b.icon).join(" ")) : null)));
    })(),
    h("div", { class: "row center" }, h("button", { class: "btn ghost small", onclick: howToSheet }, "How to play"), h("button", { class: "btn ghost small", onclick: settingsSheet }, "Settings")));
}

// The archive sheet: one solved case — stars, honours, badges, the epilogue,
// and the door back into the verdict replay. Local data only; unsolved cases
// never appear here, so nothing can be spoiled.
export function archiveSheet(e) {
  return sheet({ title: e.title, render: (b) => {
    b.append(
      h("div", { class: "stars", "aria-label": e.stars + " stars" }, [1, 2, 3, 4, 5].map((i) => h("span", { class: i <= e.stars ? "on" : "" }, "★"))),
      h("p", { class: "muted center" }, `${DIFF_LABEL[e.difficulty] || "Standard"}${e.timeSec != null ? " · solved in " + fmtTime(e.timeSec) : ""} · ${e.players.join(", ")}`),
      e.awards && e.awards.length ? h("div", {}, h("h3", {}, "Honours"), ...e.awards.map((a) => h("div", { class: "award-row" }, h("span", { class: "award-ico" }, a.icon), h("span", {}, h("strong", {}, a.label), " — ", a.name)))) : null,
      e.badges && e.badges.length ? h("div", {}, h("h3", {}, "Mastery"), h("div", { class: "row" }, e.badges.map((x) => h("span", { class: "badge-chip" }, x.icon + " " + x.label)))) : null,
      e.truth ? h("div", {}, h("h3", {}, "What really happened"), h("div", { class: "typewriter" }, e.truth)) : null,
      e.timeline && e.timeline.length ? h("div", { class: "row center" }, h("button", { class: "btn", onclick: () => replayOverlay({ title: e.title, steps: e.timeline, scenes: null }) }, "🎬 Replay the night")) : null);
  } });
}

export function lobbyScreen() {
  const el = h("main", { class: "screen lobby" });
  function update(s) {
    clear(el);
    const host = ctx.isHost();
    const meta = (ctx.info && ctx.info.meta) || {};
    const diffLabel = { casual: "Casual", standard: "Standard", master: "Master" }[s.difficulty] || "Standard";
    el.append(
      h("p", { class: "eyebrow" }, meta.title || "Unsolved Case"), h("h1", {}, "Gather your team"),
      meta.tagline ? h("p", { class: "muted center" }, meta.tagline) : null,
      h("div", { class: "code-big", "aria-label": "Party code " + s.code.split("").join(" ") }, s.code),
      h("p", { class: "muted center" }, "Difficulty: " + diffLabel),
      h("div", { class: "row center" }, h("button", { class: "btn", onclick: shareInvite }, "Invite friends")),
      h("div", { class: "card-box" }, ...s.players.map((p) => h("div", { class: "player-row" },
        h("span", { class: "dot", style: { background: p.color } }),
        h("div", { class: "grow" }, h("strong", {}, p.name, p.id === s.you ? " (you)" : "", p.id === s.host ? " ★" : ""), h("small", {}, p.connected ? p.roleNames.join(" + ") : "offline")),
        host && p.id !== s.you ? h("button", { class: "btn ghost small", onclick: () => ctx.send({ t: "kick", target: p.id }) }, "Remove") : null))),
      h("p", { class: "muted center" }, s.players.length === 1 ? "Playing solo? You'll hold every role. Friends can join any time with the code." : "Roles are shared out by party size. Everyone sees different things in the scenes."),
      h("div", { class: "card-box" }, h("h3", {}, "Voice chat"), voiceControls()),
      h("div", { class: "row center" },
        host ? h("button", { class: "btn big", onclick: () => beginCase(s) }, "Begin the case") : h("p", { class: "muted" }, "Waiting for the host to begin…"),
        host && s.players.length > 1 ? h("button", { class: "btn ghost", onclick: () => ctx.send({ t: "rotate" }) }, "Shuffle roles") : null),
      h("div", { class: "row center" }, h("button", { class: "btn ghost small", onclick: howToSheet }, "How to play"), h("button", { class: "btn ghost small", onclick: settingsSheet }, "Settings")));
  }
  return { el, update };
}

// Cases 2–6 open with a skippable cold open: the host sees the prologue
// first, and only when it ends (or is skipped) does the case actually start.
const prologueSeen = new Set();
function beginCase(s) {
  const cold = ctx.info && ctx.info.features && ctx.info.features.coldOpen;
  if (cold && !prologueSeen.has(s.code)) {
    prologueSeen.add(s.code);
    prologueOverlay(cold, () => ctx.send({ t: "start" }));
  } else ctx.send({ t: "start" });
}

// Live twist interlude (Cases 2–6): a scripted beat at a chapter boundary.
export function twistOverlay(m) {
  const close = () => { ctx.audio.stopLine(); o.remove(); };
  const o = h("div", { class: "overlay twist", role: "dialog", "aria-modal": "true", "aria-label": "Meanwhile" },
    h("div", { class: "brief-card twist-card" },
      h("p", { class: "eyebrow" }, "Meanwhile…"),
      h("p", { class: "muted" }, ctx.speakerName(m.speaker)),
      h("p", { class: "brief-text" }, m.text),
      m.testimony ? h("p", { class: "muted" }, "New testimony is on the board.") : null,
      h("div", { class: "row center" }, lineBtn(m.audio, m.text, m.speaker, "Listen"), h("button", { class: "btn", onclick: close }, "Continue"))));
  document.body.append(o);
  ctx.audio.sfx("sting_chapter");
  if (!ctx.settings.dataSaver) ctx.audio.playLine(m.audio, m.text, m.speaker);
  return { close };
}

// Briefing at the start of each chapter: typewriter text + spoken line.
export function briefingOverlay(m) {
  const text = h("p", { class: "brief-text" }, m.text);
  const close = () => { ctx.audio.stopLine(); o.remove(); };
  const o = h("div", { class: "overlay briefing", role: "dialog", "aria-modal": "true", "aria-label": "Briefing" },
    h("div", { class: "brief-card" },
      h("p", { class: "eyebrow" }, `Chapter ${m.chapter + 1}`), h("h2", {}, m.title),
      h("p", { class: "muted" }, ctx.speakerName(m.speaker)), text,
      h("div", { class: "row center" }, lineBtn(m.audio, m.text, m.speaker, "Listen"), h("button", { class: "btn", onclick: close }, "Start investigating"))));
  document.body.append(o);
  ctx.audio.sfx("chapter");
  if (!ctx.settings.dataSaver) ctx.audio.playLine(m.audio, m.text, m.speaker);
  return { close };
}

export function reportOverlay() {
  const el = h("div", { class: "overlay report", role: "dialog", "aria-modal": "true" });
  let rotate = false;
  function update(s) {
    clear(el);
    const host = ctx.isHost();
    el.append(h("div", { class: "brief-card" },
      h("p", { class: "eyebrow" }, "Chapter complete"), h("h2", {}, s.chapter.title),
      h("p", {}, "You've proven what this chapter needed. The next locations and people are waiting."),
      h("div", { class: "stats" }, ...s.players.map((p) => h("div", {}, h("span", { class: "dot", style: { background: p.color } }), h("strong", {}, p.name), h("small", {}, `${p.found} finds · ${p.links} links · ${p.asked} questions`)))),
      host
        ? h("div", { class: "stack" },
            s.players.length > 1 ? h("label", { class: "check" }, h("input", { type: "checkbox", checked: rotate, onchange: (e) => (rotate = e.target.checked) }), " Swap roles for the next chapter") : null,
            h("button", { class: "btn big", onclick: () => ctx.send({ t: "next", rotate }) }, "Continue"))
        : h("p", { class: "muted" }, "Waiting for the host to continue…")));
  }
  return { el, update };
}

export function resultScreen() {
  const el = h("main", { class: "screen result" });
  let played = false, recordedKey = null;
  function update(s) {
    const r = s.result;
    if (!r) return;
    clear(el);
    const host = ctx.isHost();
    // Persist the run locally (rank, badges, archive) — once per result.
    let runBadges = [];
    if (r.solved) {
      const key = [s.code, r.stars, r.hintsUsed, r.wrongLinks, r.wrongAccusations, r.difficulty].join("|");
      if (recordedKey !== key) {
        recordedKey = key;
        const rec = recordResult(ctx.info, s);
        if (rec) runBadges = rec.badges;
      } else {
        const p = loadProgress();
        runBadges = (p.archive[r.caseId] && p.archive[r.caseId].badges) || [];
      }
    }
    const shareData = {
      title: (ctx.info && ctx.info.meta && ctx.info.meta.title) || "Unsolved Case",
      stars: r.stars, difficulty: r.difficulty || s.difficulty, timeSec: r.timeSec,
      players: s.players.map((p) => p.name), awards: r.awards || [], badges: runBadges
    };
    el.append(
      h("p", { class: "eyebrow" }, r.solved ? "Case closed" : "The accusation fell apart"),
      h("div", { class: "stars", "aria-label": r.stars + " stars" }, [1, 2, 3, 4, 5].map((i) => h("span", { class: i <= r.stars ? "on" : "" }, "★"))),
      h("p", { class: "result-text" }, r.text),
      r.truth ? h("div", { class: "card-box truth" }, h("h3", {}, "What really happened"), h("p", {}, r.truth), lineBtn(r.truthAudio, r.truth, "narrator", "Listen")) : null,
      h("ul", { class: "checks" },
        h("li", { class: r.culpritOk ? "ok" : "no" }, "Culprit"),
        "accompliceOk" in r ? h("li", { class: r.accompliceOk ? "ok" : "no" }, "Accomplice") : null,
        h("li", { class: r.motiveOk ? "ok" : "no" }, "Motive"),
        h("li", { class: r.methodOk ? "ok" : "no" }, "Method"), h("li", { class: r.proofOk ? "ok" : "no" }, "Proof")),
      h("p", { class: "muted center" }, `Hints used: ${r.hintsUsed} · Wrong links: ${r.wrongLinks} · Failed accusations: ${r.wrongAccusations}`),
      h("p", { class: "muted center" }, `${DIFF_LABEL[r.difficulty || s.difficulty] || "Standard"}${r.timeSec != null ? " · " + fmtTime(r.timeSec) : ""}`),
      r.solved && r.awards && r.awards.length
        ? h("div", { class: "card-box awards" }, h("h3", {}, "Honours"),
            ...r.awards.map((a) => h("div", { class: "award-row" }, h("span", { class: "award-ico" }, a.icon), h("span", {}, h("strong", {}, a.label), " — ", a.name))))
        : null,
      r.solved && runBadges.length
        ? h("div", { class: "row center badges-row" }, runBadges.map((b) => h("span", { class: "badge-chip" }, b.icon + " " + b.label)))
        : null,
      r.solved
        ? h("div", { class: "row center" },
            h("button", { class: "btn", onclick: async () => { const okShare = await shareResultCard(shareData); if (okShare) ctx.audio.sfx("share"); } }, "📤 Share result"),
            h("button", { class: "btn ghost", onclick: () => downloadResultCard(shareData) }, "🖼 Save card image"))
        : null,
      r.solved && r.timeline && r.timeline.length
        ? h("div", { class: "row center" }, h("button", { class: "btn ghost", onclick: () => replayOverlay({ title: shareData.title, steps: r.timeline, scenes: ctx.info.scenes }) }, "🎬 Replay the night"))
        : null,
      host
        ? h("div", { class: "row center" }, !r.solved ? h("button", { class: "btn big", onclick: () => ctx.send({ t: "retry" }) }, "Reopen the case") : null, h("button", { class: "btn" + (r.solved ? " big" : " ghost"), onclick: () => ctx.send({ t: "restart" }) }, "Play again"))
        : h("p", { class: "muted center" }, "The host decides what happens next."));
    if (!played && r.solved) { played = true; ctx.audio.sfx("win"); ctx.audio.setMood("victory"); }
    if (!r.solved) played = false;
  }
  return { el, update };
}
