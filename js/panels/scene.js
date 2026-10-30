// The 3D investigation view.
import { h, clear } from "../dom.js";
import { ctx } from "../ctx.js";
import { SceneView } from "../scene3d.js";
import { sheet, toast } from "../sheets.js";

// I10: chatter bed per ambience bed (location type). Wind gets none — a
// research station's mast has no crowd to murmur.
const CHATTER_FOR_BED = { rain: "station", hush: "hush", train: "train", water: "harbour", room: "murmur", wind: null };

export function createScenePanel() {
  const canvas = h("canvas", { class: "scene-canvas", "aria-label": "3D location. Tap glowing markers to investigate." });
  const loading = h("div", { class: "loading hidden" }, "Loading location…");
  const chips = h("div", { class: "scene-chips" });
  const roleBadge = h("div", { class: "role-badge" });
  const pingBtn = h("button", { class: "btn small ghost ping-btn", "aria-pressed": "false", onclick: () => setPing(!pingMode) }, "📍 Ping");
  const uvBtn = h("button", { class: "btn small ghost uv-btn", "aria-pressed": "false", "aria-label": "UV light", onclick: () => setUV(!uvMode) }, "🔦 UV");
  const tip = h("div", { class: "scene-tip" }, "Drag to look · pinch to zoom · tap a marker");
  const el = h("div", { class: "panel scene-panel" }, canvas, chips, roleBadge, pingBtn, uvBtn, tip, loading);

  let view = null, cur = null, shown = false, pingMode = false, uvMode = false, lastKey = "";

  // UV mode shows only UV-layer hotspots; normal mode hides them. Anyone may
  // toggle — solo players hold every role, so no find is ever gated by it.
  const visHotspots = (list) => list.filter((x) => (uvMode ? !!x.uv : !x.uv));

  function setUV(on) {
    uvMode = on;
    uvBtn.classList.toggle("on", on);
    uvBtn.setAttribute("aria-pressed", on ? "true" : "false");
    tip.textContent = on ? "UV light: some traces only show in the dark" : "Drag to look · pinch to zoom · tap a marker";
    if (view) view.setUV(on);
    lastKey = "";
    if (ctx.state && cur) {
      const sc = ctx.state.scenes.find((x) => x.id === cur);
      if (sc && view) view.setHotspots(visHotspots(sc.hotspots));
    }
  }

  const sceneInfo = (id) => ctx.info.scenes.find((s) => s.id === id);

  function setPing(on) {
    pingMode = on;
    pingBtn.classList.toggle("on", on);
    pingBtn.setAttribute("aria-pressed", on ? "true" : "false");
    tip.textContent = on ? "Tap a marker to point it out to your party" : "Drag to look · pinch to zoom · tap a marker";
  }

  function ensureView() {
    if (view) return view;
    view = new SceneView(canvas, {
      quality: ctx.settings.quality, fps: ctx.settings.fps,
      onLoading: (on, name) => { loading.classList.toggle("hidden", !on); if (on) loading.textContent = "Loading " + name + "…"; },
      onTap: (hs) => {
        if (hs.key) { ctx.send({ t: "key", scene: cur }); return; } // I1
        if (pingMode) { ctx.send({ t: "ping", scene: cur, pos: hs.pos }); setPing(false); return; }
        if (hs.state === "taken") { toast(`${hs.by || "A teammate"} already examined this. Ask them to share it.`); return; }
        ctx.send({ t: "inspect", id: hs.id });
      }
    });
    ctx.scene = view;
    ctx.on("settings", () => view && view.setQuality(ctx.settings.quality, ctx.settings.fps));
    return view;
  }

  async function select(id) {
    cur = id;
    const s = ctx.state;
    const sc = s.scenes.find((x) => x.id === id);
    if (!sc) return;
    // R2: no UV layer in this case (Case 1) -> no UV button at all. If UV was
    // somehow on, turn it off so the layer filter can't hide every hotspot.
    const hasUV = !ctx.info.features || ctx.info.features.hasUV !== false;
    uvBtn.classList.toggle("hidden", !hasUV);
    if (!hasUV && uvMode) setUV(false);
    if (ctx.me() && ctx.me().scene !== id) ctx.send({ t: "scene", id });
    const amb = (ctx.info.features && ctx.info.features.ambience) || {};
    ctx.audio.setBed(amb[id] || null);
    // I10: the chatter layer follows the location type (derived from its bed).
    ctx.audio.setChatter(CHATTER_FOR_BED[amb[id]] || null);
    const v = ensureView();
    await v.show(sceneInfo(id));
    v.setHotspots(visHotspots(sc.hotspots));
    applyKeys(s);
    v.setDark((s.modifiers || []).includes("lightsout")); // I3
    lastKey = "";
    drawChips();
  }

  // I1: place (or clear) this scene's hidden brass key from the party state.
  function applyKeys(s) {
    if (!view || !s || !s.keys) return;
    const pos = cur && s.keys.map[cur] && !s.keys.found.includes(cur) ? s.keys.map[cur] : null;
    view.setKey(pos);
    if (!uvMode && !pingMode) tip.textContent = pos ? "Drag to look · pinch to zoom · tap a marker — 🗝 a brass key hides somewhere here" : "Drag to look · pinch to zoom · tap a marker";
  }

  function drawChips() {
    clear(chips);
    const s = ctx.state;
    for (const sc of s.scenes) {
      const here = s.players.filter((p) => p.scene === sc.id && p.id !== s.you && p.connected);
      chips.append(h("button", { class: "chip" + (sc.id === cur ? " on" : ""), onclick: () => select(sc.id) },
        sc.name, here.map((p) => h("span", { class: "dot", title: p.name, style: { background: p.color } }))));
    }
  }

  function update(s) {
    if (!s.scenes.length) return;
    const me = ctx.me();
    roleBadge.textContent = "You: " + (me ? me.roleNames.join(" + ") : "");
    if (!cur || !s.scenes.some((x) => x.id === cur)) {
      const want = me && s.scenes.some((x) => x.id === me.scene) ? me.scene : s.scenes[0].id;
      if (shown) select(want); else cur = want;
      return;
    }
    if (!shown || !view) return;
    const sc = s.scenes.find((x) => x.id === cur);
    applyKeys(s);
    const key = JSON.stringify(sc.hotspots.map((x) => [x.id, x.state])) + s.scenes.length + "|" + s.players.map((p) => p.scene).join() + "|uv" + uvMode;
    if (key !== lastKey) {
      lastKey = key;
      view.setHotspots(visHotspots(sc.hotspots));
      drawChips();
    }
  }

  // I5 — atmosphere events: rare, quiet, and never rude. A self-rescheduling
  // timer fires every ~45–90 s; the beat is skipped while a voice line plays,
  // while any sheet is open, outside the play phase, or in UV mode. Beats:
  // a light flicker (+ tube hum), a distant door slam, a weather swell.
  let atmoTimer = null;
  function scheduleAtmo() {
    clearTimeout(atmoTimer);
    atmoTimer = setTimeout(fireAtmo, 45000 + Math.random() * 45000);
  }
  function fireAtmo() {
    scheduleAtmo();
    const s = ctx.state;
    if (!shown || !s || s.phase !== "play" || uvMode) return;
    if (ctx.audio.linePlaying()) return;
    if (document.querySelector(".sheet-wrap, .overlay")) return;
    const amb = (ctx.info.features && ctx.info.features.ambience) || {};
    const bedHere = amb[cur];
    const roll = Math.random();
    if (roll < 0.4 && view) { view.flicker(); ctx.audio.sfx("flicker"); }
    else if (roll < 0.7) ctx.audio.sfx("slam");
    else if (bedHere === "rain" || bedHere === "water" || bedHere === "wind") ctx.audio.swellBed();
    else if (view) { view.flicker(); ctx.audio.sfx("flicker"); }
  }

  ctx.on("msg:ping", (m) => {
    const p = ctx.player(m.pid);
    if (!p || ctx.muted.has(m.pid)) return;
    ctx.audio.sfx("ping");
    if (m.scene === cur && shown && view) view.ping(m.pos, p.color);
    else toast(`${p.name} pointed something out in ${(sceneInfo(m.scene) || {}).name || "another location"}.`);
  });

  ctx.on("msg:flavor", (m) => {
    sheet({ title: "Look closer", render: (b) => b.append(h("div", { class: "typewriter" }, m.text)) });
  });

  return {
    el, update,
    show() {
      shown = true;
      ensureView();
      view.resize();
      view.start();
      if (ctx.state) select(cur || ctx.state.scenes[0].id);
      ctx.audio.setMood("explore");
      scheduleAtmo();
    },
    hide() { shown = false; if (view) view.stop(); setPing(false); ctx.audio.setBed(null); ctx.audio.setChatter(null); clearTimeout(atmoTimer); }
  };
}
