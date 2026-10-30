// Verdict replay — "Replay the night". A step-through of the case's true
// timeline (overlay data), reachable only after the case is solved: from
// the results screen (with the case's 3D scenes — the step's location is
// shown as you walk the night) and from the case archive (text step-through
// with the location named; the room no longer exists by then).
import { h, clear } from "./dom.js";
import { ctx } from "./ctx.js";
import { SceneView } from "./scene3d.js";

export function replayOverlay({ title, steps, scenes }) {
  let i = 0, view = null, closed = false;
  const canvas = scenes && scenes.length ? h("canvas", { class: "scene-canvas replay-canvas", "aria-label": "Location of this step" }) : null;
  const where = h("p", { class: "eyebrow" });
  const when = h("p", { class: "replay-time" });
  const head = h("h2", {});
  const body = h("p", { class: "brief-text" });
  const counter = h("span", { class: "muted replay-count" });
  const prev = h("button", { class: "btn ghost", onclick: () => go(i - 1) }, "← Earlier");
  const next = h("button", { class: "btn", onclick: () => go(i + 1) }, "Later →");
  const close = () => {
    closed = true;
    if (view) { view.stop(); view = null; }
    o.remove();
  };
  const o = h("div", { class: "overlay replay", role: "dialog", "aria-modal": "true", "aria-label": "Replay the night" },
    h("div", { class: "brief-card replay-card" },
      h("p", { class: "eyebrow" }, "Replay the night"), h("h2", { class: "replay-title" }, title),
      canvas ? h("div", { class: "replay-stage" }, canvas) : null,
      when, head, where, body,
      h("div", { class: "row between replay-nav" }, prev, counter, next),
      h("div", { class: "row center" }, h("button", { class: "btn ghost small", onclick: close }, "Close"))));
  document.body.append(o);
  if (canvas) {
    view = new SceneView(canvas, {
      quality: ctx.settings.quality, fps: ctx.settings.fps,
      onLoading: () => {}, onTap: () => {}
    });
    view.start();
    ctx.replayView = view; // test hook
  }

  async function go(n) {
    i = Math.max(0, Math.min(steps.length - 1, n));
    const st = steps[i];
    when.textContent = st.time || "";
    head.textContent = st.title || "";
    const sceneName = scenes ? (scenes.find((s) => s.id === st.scene) || {}).name : null;
    where.textContent = [st.actor, sceneName || st.scene].filter(Boolean).join(" · ");
    body.textContent = st.text || "";
    counter.textContent = `${i + 1} / ${steps.length}`;
    prev.disabled = i === 0;
    next.disabled = i === steps.length - 1;
    next.textContent = i === steps.length - 1 ? "The end" : "Later →";
    if (view && st.scene) {
      const info = scenes.find((s) => s.id === st.scene);
      if (info && !closed) { await view.show(info); if (!closed) view.setHotspots([]); }
    }
  }
  go(0);
  return { close };
}
