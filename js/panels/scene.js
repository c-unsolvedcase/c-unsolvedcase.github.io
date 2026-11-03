// The 3D investigation view.
import { h, clear } from "../dom.js";
import { ctx } from "../ctx.js";
import { SceneView } from "../scene3d.js";
import { sheet, toast } from "../sheets.js";
import { Controls, SKINS, HAIR_COLORS, SHIRTS, HAIR_STYLES, FACES, loadLook, saveLook } from "../walk.js";

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
  // Walking mode (Round 3): walk by default; overview keeps the old orbit.
  const TIP_WALK = "Left stick to move · drag to look · Examine when close", TIP_ORBIT = "Drag to look · pinch to zoom · tap a marker";
  let walkOn = true;
  try { walkOn = localStorage.getItem("uc.walk") !== "0"; } catch {}
  const tip = h("div", { class: "scene-tip" }, walkOn ? TIP_WALK : TIP_ORBIT);
  const inspectBtn = h("button", { class: "btn inspect-btn hidden", onclick: () => doInspect() }, "Examine");
  const modeBtn = h("button", { class: "btn small ghost mode-btn", onclick: () => setMode(!walkOn) }, "");
  const outfitBtn = h("button", { class: "btn small ghost outfit-btn", onclick: () => outfitSheet() }, "👕 Outfit");
  const el = h("div", { class: "panel scene-panel" }, canvas, chips, roleBadge, pingBtn, uvBtn, modeBtn, outfitBtn, inspectBtn, tip, loading);

  let view = null, cur = null, shown = false, pingMode = false, uvMode = false, lastKey = "";
  let near = null, myLook = loadLook(), lookSent = false;
  const controls = new Controls(el);
  const NEAR_LABEL = { new: "Examine", flavor: "Look closer", held: "Look again", shared: "Look again" };
  const baseTip = () => (walkOn ? TIP_WALK : TIP_ORBIT);

  function setMode(on) {
    walkOn = on;
    try { localStorage.setItem("uc.walk", on ? "1" : "0"); } catch {}
    modeBtn.textContent = on ? "🎥 Overview" : "🚶 Walk";
    outfitBtn.classList.toggle("hidden", !on);
    if (!pingMode && !uvMode) tip.textContent = baseTip();
    if (view) view.setMode(on ? "walk" : "orbit");
    if (!on) inspectBtn.classList.add("hidden");
    controls.show(on && shown);
  }

  function doInspect() {
    if (!near) return;
    if (near.state === "taken") { toast(`${near.by || "A teammate"} already examined this. Ask them to share it.`); return; }
    ctx.send({ t: "inspect", id: near.id });
  }

  function onNear(hs) {
    near = hs;
    if (!hs || hs.state === "taken") { inspectBtn.classList.add("hidden"); return; }
    inspectBtn.textContent = (NEAR_LABEL[hs.state] || "Examine");
    inspectBtn.classList.remove("hidden");
  }

  function outfitSheet() {
    const sw = (list, key, label) => h("div", { class: "outfit-row" }, h("span", {}, label),
      h("div", { class: "swatches" }, list.map((c) => h("button", { class: "swatch" + (myLook[key] === c ? " on" : ""), style: { background: c }, "aria-label": label + " " + c, onclick: () => change(key, c) }))));
    const opts = (list, key, label) => h("div", { class: "outfit-row" }, h("span", {}, label),
      h("div", { class: "swatches" }, list.map((c) => h("button", { class: "chip" + (myLook[key] === c ? " on" : ""), onclick: () => change(key, c) }, c))));
    function change(k, v) {
      myLook = Object.assign({}, myLook, { [k]: v });
      saveLook(myLook);
      ctx.send({ t: "look", look: myLook });
      if (view) view.setPlayers(ctx.state.players, ctx.state.you, myLook);
      sh.render(draw);
    }
    const draw = (b) => b.append(
      sw(SKINS, "skin", "Skin"), opts(HAIR_STYLES, "hair", "Hair"), sw(HAIR_COLORS, "hairColor", "Hair colour"),
      sw(SHIRTS, "shirt", "Shirt"), opts(FACES, "face", "Face"),
      h("button", { class: "btn ghost small", onclick: () => change("shirt", null) }, "Use my party colour"));
    const sh = sheet({ title: "Your detective", render: draw });
  }

  // UV mode shows only UV-layer hotspots; normal mode hides them. Anyone may
  // toggle — solo players hold every role, so no find is ever gated by it.
  const visHotspots = (list) => list.filter((x) => (uvMode ? !!x.uv : !x.uv));

  function setUV(on) {
    uvMode = on;
    uvBtn.classList.toggle("on", on);
    uvBtn.setAttribute("aria-pressed", on ? "true" : "false");
    tip.textContent = on ? "UV light: some traces only show in the dark" : baseTip();
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
    tip.textContent = on ? "Tap a marker to point it out to your party" : baseTip();
  }

  function ensureView() {
    if (view) return view;
    view = new SceneView(canvas, {
      quality: ctx.settings.quality, fps: ctx.settings.fps,
      controls, mode: walkOn ? "walk" : "orbit", onNear,
      onMove: (x, z, ry) => ctx.send({ t: "mv", x, z, ry }),
      onLoading: (on, name) => { loading.classList.toggle("hidden", !on); if (on) loading.textContent = "Loading " + name + "…"; },
      onTap: (hs) => {
        if (hs.key) { ctx.send({ t: "key", scene: cur }); return; } // I1
        if (pingMode) { ctx.send({ t: "ping", scene: cur, pos: hs.pos }); setPing(false); return; }
        if (hs.far) { toast("Walk closer to examine that."); return; }
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
    if (!uvMode && !pingMode) tip.textContent = pos ? baseTip() + " — 🗝 a brass key hides somewhere here" : baseTip();
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
    if (me && !lookSent) { lookSent = true; ctx.send({ t: "look", look: myLook }); }
    if (view && shown) view.setPlayers(s.players, s.you, myLook);
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

  ctx.on("msg:mv", (m) => { if (view && m.pid !== ctx.pid) view.moveRemote(m.pid, m.scene, m.x, m.z, m.ry); });

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
      setMode(walkOn);
      if (ctx.state) { view.setPlayers(ctx.state.players, ctx.state.you, myLook); select(cur || ctx.state.scenes[0].id); }
      ctx.audio.setMood("explore");
      scheduleAtmo();
    },
    hide() { shown = false; if (view) view.stop(); setPing(false); controls.show(false); ctx.audio.setBed(null); ctx.audio.setChatter(null); clearTimeout(atmoTimer); }
  };
}
