// Walking mode helpers: blocky avatars, collision, joystick and keyboard input.
import * as THREE from "three";

export const SKINS = ["#f1c7a4", "#e0b790", "#c99b78", "#a6714f", "#7a4a30", "#4a2e20"];
export const HAIR_COLORS = ["#1d1b1a", "#4a3020", "#8a5a2a", "#c8a050", "#a02a2a", "#9a9a9a"];
export const SHIRTS = ["#c0392b", "#d98a2b", "#c9b03a", "#3f9a5a", "#2f8fbf", "#5a4fbf", "#b04f9a", "#cfd6e0"];
export const HAIR_STYLES = ["none", "short", "spiky", "cap", "long"];
export const FACES = ["smile", "grin", "cool", "wink"];

export function defaultLook() {
  return { skin: SKINS[1], hair: "short", hairColor: HAIR_COLORS[0], shirt: null, pants: "#2a3040", face: "smile" };
}

export function loadLook() {
  try { return Object.assign(defaultLook(), JSON.parse(localStorage.getItem("uc.look") || "{}")); } catch { return defaultLook(); }
}
export function saveLook(look) { try { localStorage.setItem("uc.look", JSON.stringify(look)); } catch {} }

function faceTexture(look) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = look.skin; g.fillRect(0, 0, 64, 64);
  g.fillStyle = "#1a1412";
  const eye = (x, y, w, h) => g.fillRect(x, y, w, h);
  if (look.face === "cool") { g.fillStyle = "#101418"; g.fillRect(10, 22, 20, 10); g.fillRect(34, 22, 20, 10); g.fillRect(30, 25, 4, 3); }
  else if (look.face === "wink") { eye(14, 24, 8, 10); g.fillRect(38, 29, 12, 4); }
  else { eye(14, 24, 8, 10); eye(42, 24, 8, 10); }
  g.strokeStyle = "#1a1412"; g.lineWidth = 4; g.lineCap = "round";
  g.beginPath();
  if (look.face === "grin") { g.fillStyle = "#fff"; g.fillRect(20, 42, 24, 9); g.strokeRect(20, 42, 24, 9); }
  else { g.arc(32, 40, 11, 0.25 * Math.PI, 0.75 * Math.PI); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.NearestFilter;
  return t;
}

function labelSprite(text, color) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 64;
  const g = c.getContext("2d");
  g.font = "bold 30px system-ui, sans-serif";
  g.textAlign = "center"; g.textBaseline = "middle";
  const w = Math.min(244, g.measureText(text).width + 28);
  g.fillStyle = "#0b0d12cc"; g.beginPath(); g.roundRect((256 - w) / 2, 8, w, 48, 14); g.fill();
  g.fillStyle = color || "#fff"; g.fillText(text, 128, 33, 232);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
  sp.scale.set(0.9, 0.225, 1);
  sp.renderOrder = 40;
  return sp;
}

const mat = (hex) => new THREE.MeshStandardMaterial({ color: new THREE.Color(hex), roughness: 0.75, metalness: 0, emissive: new THREE.Color(hex), emissiveIntensity: 0.32 });

// A blocky character about 1.55 units tall. Origin is at the feet.
export function makeAvatar(look, shirtFallback, name) {
  look = Object.assign(defaultLook(), look || {});
  const shirt = look.shirt || shirtFallback || "#2f8fbf";
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);
  const skin = mat(look.skin), shirtM = mat(shirt), pantsM = mat(look.pants);
  const box = (w, h, d, m, x, y, z, parent) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); (parent || body).add(b); return b; };
  box(0.5, 0.6, 0.28, shirtM, 0, 0.85, 0);                                 // torso
  const legL = new THREE.Group(), legR = new THREE.Group();
  legL.position.set(-0.13, 0.55, 0); legR.position.set(0.13, 0.55, 0);
  box(0.23, 0.55, 0.26, pantsM, 0, -0.275, 0, legL); box(0.23, 0.55, 0.26, pantsM, 0, -0.275, 0, legR);
  body.add(legL, legR);
  const armL = new THREE.Group(), armR = new THREE.Group();
  armL.position.set(-0.37, 1.12, 0); armR.position.set(0.37, 1.12, 0);
  box(0.2, 0.34, 0.22, shirtM, 0, -0.17, 0, armL); box(0.2, 0.26, 0.22, skin, 0, -0.47, 0, armL);
  box(0.2, 0.34, 0.22, shirtM, 0, -0.17, 0, armR); box(0.2, 0.26, 0.22, skin, 0, -0.47, 0, armR);
  body.add(armL, armR);
  const head = new THREE.Group();
  head.position.set(0, 1.45, 0);
  body.add(head);
  const tex = faceTexture(look);
  const faceMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, emissive: new THREE.Color(0xffffff), emissiveMap: tex, emissiveIntensity: 0.35 });
  const hb = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), [skin, skin, skin, skin, faceMat, skin]); // +z is the face
  head.add(hb);
  const hc = mat(look.hairColor);
  if (look.hair === "short") { box(0.36, 0.1, 0.36, hc, 0, 0.2, 0, head); box(0.36, 0.2, 0.08, hc, 0, 0.05, -0.15, head); }
  if (look.hair === "spiky") for (let i = 0; i < 5; i++) box(0.08, 0.14, 0.08, hc, -0.12 + (i % 3) * 0.12, 0.23, -0.08 + (i > 2 ? 0.14 : 0), head);
  if (look.hair === "cap") { box(0.37, 0.12, 0.37, mat("#2f4a8a"), 0, 0.2, 0, head); box(0.3, 0.04, 0.16, mat("#2f4a8a"), 0, 0.15, 0.25, head); }
  if (look.hair === "long") { box(0.36, 0.1, 0.36, hc, 0, 0.2, 0, head); box(0.36, 0.5, 0.08, hc, 0, -0.05, -0.15, head); box(0.06, 0.3, 0.2, hc, -0.18, 0, -0.05, head); box(0.06, 0.3, 0.2, hc, 0.18, 0, -0.05, head); }
  const label = labelSprite(name || "", "#fff");
  label.position.set(0, 2.0, 0);
  g.add(label);
  g.userData = { body, armL, armR, legL, legR, head, label, name, phase: 0, speed: 0 };
  return g;
}

export function animateAvatar(av, dt, speed) {
  const u = av.userData;
  u.phase += dt * (6 + speed * 6);
  const k = Math.min(1, speed);
  const sw = Math.sin(u.phase) * 0.8 * k;
  u.legL.rotation.x = sw; u.legR.rotation.x = -sw;
  u.armL.rotation.x = -sw * 0.8; u.armR.rotation.x = sw * 0.8;
  u.body.position.y = Math.abs(Math.sin(u.phase)) * 0.03 * k;
}

// Axis-aligned obstacles from the scene's meshes, plus the walkable room bounds.
export function buildCollision(root) {
  root.updateMatrixWorld(true);
  const all = new THREE.Box3().setFromObject(root);
  const boxes = [];
  const bound = { minX: all.min.x, maxX: all.max.x, minZ: all.min.z, maxZ: all.max.z };
  const area = (bound.maxX - bound.minX) * (bound.maxZ - bound.minZ);
  const b = new THREE.Box3(), s = new THREE.Vector3();
  root.traverse((o) => {
    if (!o.isMesh || (o.name || "").startsWith("P_")) return;
    b.setFromObject(o); b.getSize(s);
    if (s.y < 0.3 || b.min.y > 1.0 || b.max.y < 0.3) return;                 // floor items, trim, anything overhead
    if (s.x * s.z > area * 0.5) return;                                       // room shell pieces
    boxes.push({ minX: b.min.x, maxX: b.max.x, minZ: b.min.z, maxZ: b.max.z });
  });
  return { boxes, bound };
}

const R = 0.24;
function hits(c, x, z) {
  for (const b of c.boxes) if (x > b.minX - R && x < b.maxX + R && z > b.minZ - R && z < b.maxZ + R) return true;
  return false;
}
export function clampToRoom(c, x, z) {
  const m = 0.32, bd = c.bound;
  return [Math.max(bd.minX + m, Math.min(bd.maxX - m, x)), Math.max(bd.minZ + m, Math.min(bd.maxZ - m, z))];
}
export function stepMove(c, x, z, dx, dz) {
  let nx = x + dx, nz = z;
  [nx, nz] = clampToRoom(c, nx, nz);
  if (hits(c, nx, nz)) nx = x;
  let tz = z + dz;
  [nx, tz] = clampToRoom(c, nx, tz);
  if (hits(c, nx, tz)) tz = z;
  return [nx, tz];
}
export function findSpawn(c, ix) {
  const bd = c.bound, cx = (bd.minX + bd.maxX) / 2;
  for (let ring = 0; ring < 30; ring++) {
    for (let k = 0; k < 8; k++) {
      const x = cx + ((ix + k + ring) % 5 - 2) * 0.5 + ring * 0.05 * (k % 2 ? 1 : -1), z = bd.maxZ - 0.9 - ring * 0.25;
      const [px, pz] = clampToRoom(c, x, z);
      if (!hits(c, px, pz)) return [px, pz];
    }
  }
  return [cx, bd.maxZ - 0.9];
}

// On-screen joystick plus WASD / arrow keys. read() returns {x, y} in -1..1 (y up = forward).
export class Controls {
  constructor(host) {
    this.vec = { x: 0, y: 0 };
    this.keys = new Set();
    this.base = document.createElement("div");
    this.base.className = "joy"; this.base.setAttribute("aria-label", "Move joystick");
    this.knob = document.createElement("div"); this.knob.className = "joy-knob";
    this.base.append(this.knob);
    host.append(this.base);
    let id = null;
    const set = (e) => {
      const r = this.base.getBoundingClientRect();
      let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const max = r.width / 2 - 8, d = Math.hypot(dx, dy);
      if (d > max) { dx = dx / d * max; dy = dy / d * max; }
      this.knob.style.transform = `translate(${dx}px,${dy}px)`;
      this.vec = { x: dx / max, y: -dy / max };
    };
    this.base.addEventListener("pointerdown", (e) => { id = e.pointerId; this.base.setPointerCapture(id); set(e); e.preventDefault(); });
    this.base.addEventListener("pointermove", (e) => { if (e.pointerId === id) set(e); });
    const end = (e) => { if (e.pointerId !== id) return; id = null; this.vec = { x: 0, y: 0 }; this.knob.style.transform = ""; };
    this.base.addEventListener("pointerup", end); this.base.addEventListener("pointercancel", end);
    this.kd = (e) => { if (/INPUT|TEXTAREA/.test((e.target || {}).tagName || "")) return; this.keys.add(e.key.toLowerCase()); };
    this.ku = (e) => this.keys.delete(e.key.toLowerCase());
    window.addEventListener("keydown", this.kd); window.addEventListener("keyup", this.ku);
  }
  read() {
    let x = this.vec.x, y = this.vec.y;
    const k = this.keys;
    if (k.has("w") || k.has("arrowup")) y += 1;
    if (k.has("s") || k.has("arrowdown")) y -= 1;
    if (k.has("a") || k.has("arrowleft")) x -= 1;
    if (k.has("d") || k.has("arrowright")) x += 1;
    const m = Math.hypot(x, y);
    if (m > 1) { x /= m; y /= m; }
    return { x, y };
  }
  show(on) { this.base.style.display = on ? "" : "none"; if (!on) { this.vec = { x: 0, y: 0 }; this.keys.clear(); } }
}
