// Cold open (Cases 2–6): a skippable prologue before Chapter 1, in one of
// the case's existing locations. The briefing speaker walks the host through
// a few voiced beats; the inspect spots are flavour only — nothing essential
// exists only here, and every other player simply waits in the lobby.
import { h, clear } from "./dom.js";
import { ctx } from "./ctx.js";
import { lineBtn } from "./sheets.js";

export function prologueOverlay(cold, onDone) {
  let beat = 0, finished = false;
  const sceneName = (ctx.info.scenes.find((s) => s.id === cold.scene) || {}).name || "";
  const who = h("p", { class: "muted" });
  const text = h("p", { class: "brief-text" });
  const playRow = h("div", { class: "row" });
  const spotBox = h("div", { class: "prologue-spot" });
  const next = h("button", { class: "btn", onclick: advance }, "Next");
  const o = h("div", { class: "overlay prologue", role: "dialog", "aria-modal": "true", "aria-label": "Prologue" },
    h("div", { class: "brief-card" },
      h("p", { class: "eyebrow" }, "Prologue · " + sceneName), h("h2", {}, cold.title),
      who, text, playRow,
      cold.spots && cold.spots.length ? h("div", {}, h("h3", {}, "Look around"), h("div", { class: "row prologue-spots" },
        cold.spots.map((sp) => h("button", { class: "chip", onclick: (e) => {
          clear(spotBox).append(h("p", {}, h("strong", {}, sp.label + ". "), sp.text));
          e.currentTarget.classList.add("on");
        } }, "🔍 " + sp.label))), spotBox) : null,
      h("div", { class: "row between" },
        h("button", { class: "btn ghost", onclick: () => finish() }, "Skip prologue"),
        next)));
  document.body.append(o);

  function showBeat() {
    const b = cold.beats[beat];
    who.textContent = ctx.speakerName(b.speaker);
    text.textContent = b.text;
    clear(playRow).append(lineBtn(b.audio, b.text, b.speaker, "Listen"));
    next.textContent = beat === cold.beats.length - 1 ? "Begin Chapter 1 →" : "Next";
    ctx.audio.stopLine();
    if (!ctx.settings.dataSaver) ctx.audio.playLine(b.audio, b.text, b.speaker);
  }
  function advance() {
    if (beat < cold.beats.length - 1) { beat++; showBeat(); }
    else finish();
  }
  function finish() {
    if (finished) return;
    finished = true;
    ctx.audio.stopLine();
    o.remove();
    onDone();
  }
  showBeat();
  return { finish };
}
