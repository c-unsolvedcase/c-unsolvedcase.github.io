// Fullscreen toggle (user request 2026-11-03). One button factory shared by
// the entry masthead and the in-game top bar. Everything is feature-detected
// and failure-silent: on browsers with no element Fullscreen API at all
// (e.g. iPhone Safari) the button stays visible and clicking is a harmless
// no-op — it must never throw.
import { h } from "./dom.js";

const GLYPH_ENTER = "⛶"; // expand to full screen
const GLYPH_EXIT = "⤡";  // compress back

const live = new Set();
let lockWanted = false; // set by the in-game button: try a landscape lock once fullscreen engages
let listening = false;

export function fsElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}
export function fsActive() { return !!fsElement(); }

function paint(b, on) {
  b.textContent = on ? GLYPH_EXIT : GLYPH_ENTER;
  b.setAttribute("aria-pressed", on ? "true" : "false");
  b.setAttribute("aria-label", on ? "Exit full screen" : "Full screen");
  b.classList.toggle("on", on);
}

function sync() {
  const on = fsActive();
  for (const b of live) {
    if (!b.isConnected) { live.delete(b); continue; }
    paint(b, on);
  }
}

function tryLockLandscape() {
  try {
    const o = window.screen && screen.orientation;
    if (o && typeof o.lock === "function") {
      const p = o.lock("landscape");
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  } catch {}
}

function onFsChange() {
  sync();
  if (fsActive() && lockWanted) tryLockLandscape();
  lockWanted = false;
}

function listen() {
  if (listening) return;
  listening = true;
  document.addEventListener("fullscreenchange", onFsChange);
  document.addEventListener("webkitfullscreenchange", onFsChange);
}

export function toggleFullscreen(inGame) {
  try {
    if (fsActive()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) {
        const p = exit.call(document);
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
      return;
    }
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req) return; // unsupported browser: harmless no-op
    // Android Chrome nicety: from the in-game button, entering fullscreen
    // from a portrait viewport also tries to lock landscape. Entry-screen
    // enters never lock. Any failure is silent.
    lockWanted = !!inGame && window.innerHeight > window.innerWidth;
    const p = req.call(el);
    if (p && typeof p.catch === "function") p.catch(() => { lockWanted = false; });
  } catch { lockWanted = false; }
}

// inGame: true for the in-game top-bar button (enables the landscape-lock
// attempt), false for the entry-screen button.
export function fullscreenButton(inGame) {
  listen();
  const b = h("button", {
    class: "icon-btn fs-btn", type: "button",
    "aria-label": "Full screen", "aria-pressed": "false",
    onclick: () => toggleFullscreen(!!inGame)
  }, GLYPH_ENTER);
  // Paint the initial state directly, NOT via sync(): callers build their
  // screens as detached trees, so at factory time the button is not yet
  // connected and sync()'s stale-button pruning would drop it from the
  // registry before it ever reaches the document.
  paint(b, fsActive());
  live.add(b);
  return b;
}
