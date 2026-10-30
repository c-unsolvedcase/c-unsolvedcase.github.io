// Audio: recorded character voice lines (assets/audio/<key>.mp3), plus a small generated noir ambience
// and UI sound effects (WebAudio, no files to download). Ambience ducks while a character speaks.
import { ctx } from "./ctx.js";

let ac = null, master = null, ambGain = null, moodGain = null, sfxGain = null, started = false, mood = "explore";
let line = null, lineToken = 0, noteTimer = null, filter = null, delay = null;
let bed = null, pendingBed = null; // location ambience bed (see setBed)
const missing = new Set();

function ensure() {
  if (ac) return ac;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ac = new AC();
  master = ac.createGain(); master.gain.value = 1; master.connect(ac.destination);
  ambGain = ac.createGain(); ambGain.gain.value = 0; ambGain.connect(master);
  moodGain = ac.createGain(); moodGain.gain.value = 1; moodGain.connect(ambGain);
  sfxGain = ac.createGain(); sfxGain.gain.value = 0.5; sfxGain.connect(master);
  return ac;
}

// I2 — heartbeat: a low lub-dub under a confrontation. All thumps are
// scheduled up-front with gain envelopes (no timers), so the same code path
// renders offline for the sample harness. Volume is modest by design: it is
// tension under the dialogue, not a jump scare.
let hbNodes = [];
function thump(at, vol) {
  if (!ac || !sfxGain) return;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(62, at);
  o.frequency.exponentialRampToValueAtTime(38, at + 0.11);
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(vol, at + 0.018);
  g.gain.exponentialRampToValueAtTime(0.0001, at + 0.17);
  o.connect(g); g.connect(sfxGain);
  o.start(at); o.stop(at + 0.22);
  hbNodes.push(o);
}
function stopHeartbeat() { for (const o of hbNodes) { try { o.stop(); } catch {} } hbNodes = []; }
function scheduleHeartbeat(seconds, vol = 0.3) {
  if (!ac) return;
  stopHeartbeat();
  const t0 = ac.currentTime + 0.03, period = 0.84;
  for (let t = t0; t < t0 + seconds; t += period) { thump(t, vol); thump(t + 0.17, vol * 0.7); }
}

export const audio = {
  unlock() {
    const a = ensure();
    if (a && a.state === "suspended") a.resume().catch(() => {});
    if (!started && a) { started = true; buildAmbience(); }
    this.applyVolume();
    if (pendingBed) { const p = pendingBed; pendingBed = null; this.setBed(p); }
    if (pendingChatter) { const p = pendingChatter; pendingChatter = null; this.setChatter(p); }
  },

  // Location ambience: a procedural WebAudio bed per scene (rain, wind,
  // water, train, hush, room — no audio files). Beds route through the same
  // ambience gain as the noir bed, so the existing music toggle, volume and
  // voice ducking all apply. Starts on scene entry, stops on exit.
  setBed(id) {
    if (!ac) { pendingBed = id; return; }
    if (bed && bed.id === id) return;
    if (bed) { bed.stop(); bed = null; }
    if (id) bed = buildBed(id);
  },

  // I10: the chatter layer follows the scene like the bed does.
  setChatter(kind) {
    if (!ac) { pendingChatter = kind; return; }
    if (chatter && chatter.id === kind) return;
    if (chatter) { chatter.stop(); chatter = null; }
    if (kind) chatter = buildChatter(kind);
  },

  // I5: rain/wind swell (no-op for beds without weather).
  swellBed() { if (bed && bed.swell) bed.swell(); },

  // The composed mood ambience (drone/wash/notes) sits on its own bus under
  // the ambience gain, so location beds can be auditioned on their own (used
  // by the sound-sample harness). Default 1 = unchanged in play.
  setMoodLevel(v) { if (moodGain) moodGain.gain.value = v; },

  applyVolume() {
    if (!ac) return;
    const target = ctx.settings.music ? 0.18 * ctx.settings.musicVol * (line ? 0.35 : 1) : 0;
    ambGain.gain.setTargetAtTime(target, ac.currentTime, 0.4);
  },

  setMood(m) {
    mood = m;
    if (!ac || !filter) return;
    const cut = { explore: 700, tense: 1100, board: 520, victory: 1400, lobby: 450 }[m] || 700;
    filter.frequency.setTargetAtTime(cut, ac.currentTime, 1.2);
  },

  // Play a recorded line. Resolves true if it played, false if there is no recording (text still shows as subtitles).
  playLine(key, text, speaker) {
    this.stopLine();
    if (!ctx.settings.voiceLines || !key) return Promise.resolve(false);
    const token = ++lineToken;
    return new Promise((resolve) => {
      if (missing.has(key)) return resolve(this._device(text, speaker, token, resolve));
      const el = new Audio(`assets/audio/${key}.mp3`);
      el.volume = Math.min(1, ctx.settings.voiceVol);
      line = el;
      this.applyVolume();
      el.onended = () => { if (token === lineToken) { line = null; this.applyVolume(); } resolve(true); };
      el.onerror = () => { missing.add(key); if (token === lineToken) { line = null; this.applyVolume(); } resolve(this._device(text, speaker, token, resolve)); };
      el.play().catch(() => { if (token === lineToken) { line = null; this.applyVolume(); } resolve(false); });
    });
  },

  // optional fallback: the device's own voice, only if the player turned it on and no recording exists
  _device(text) {
    if (!ctx.settings.deviceVoiceFallback || !("speechSynthesis" in window) || !text) return false;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.95; u.volume = Math.min(1, ctx.settings.voiceVol);
      speechSynthesis.speak(u);
      return true;
    } catch { return false; }
  },

  stopLine() {
    lineToken++;
    if (line) { try { line.pause(); } catch {} line = null; }
    try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch {}
    this.applyVolume();
  },

  // I2: sustained heartbeat for a confrontation beat (~8 s by default).
  heartbeat(durMs = 8000) {
    if (!ac || ac.state !== "running" || !ctx.settings.music) return;
    scheduleHeartbeat(Math.max(1, durMs / 1000), 0.3);
  },
  stopHeartbeat() { stopHeartbeat(); },
  linePlaying() { return !!line; }, // I5 guard: atmosphere events never overlap dialogue

  sfx(name) {
    if (!ac || ac.state !== "running" || !ctx.settings.music) return;
    const t = ac.currentTime;
    const blip = (f, at, dur, type, vol) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type || "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + at);
      g.gain.exponentialRampToValueAtTime(vol || 0.25, t + at + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur);
      o.connect(g); g.connect(sfxGain);
      o.start(t + at); o.stop(t + at + dur + 0.05);
    };
    switch (name) {
      case "found": blip(660, 0, 0.18); blip(990, 0.09, 0.25); break;
      case "share": blip(520, 0, 0.12, "triangle"); blip(780, 0.07, 0.18, "triangle"); break;
      case "link": [392, 494, 587, 784].forEach((f, i) => blip(f, i * 0.06, 0.9, "sine", 0.18)); break;
      case "bad": blip(180, 0, 0.25, "sawtooth", 0.08); break;
      case "chapter": [440, 554, 659, 880].forEach((f, i) => blip(f, i * 0.14, 0.8, "triangle", 0.2)); break;
      case "msg": blip(900, 0, 0.06, "sine", 0.08); break;
      case "ping": blip(1200, 0, 0.12, "sine", 0.15); blip(900, 0.1, 0.2, "sine", 0.1); break;
      case "lab": blip(300, 0, 0.1, "square", 0.05); blip(600, 0.08, 0.3, "triangle", 0.15); break;
      case "win": [523, 659, 784, 1046].forEach((f, i) => blip(f, i * 0.18, 1.4, "triangle", 0.22)); break;
      // Conclusion sting: a board link just proved a conclusion — a short
      // minor-key figure, plus a softer variant for chapter completion.
      case "sting": [220, 261.63, 311.13, 440].forEach((f, i) => blip(f, i * 0.09, 1.1, "triangle", 0.2)); blip(110, 0, 1.3, "sine", 0.12); break;
      case "heartbeat": scheduleHeartbeat(2.6, 0.3); break; // I2 sample/short form
      // I5 one-shots. Slam: a distant door — low thump + muffled noise burst
      // + a fainter repeat as the corridor answers.
      case "slam": {
        const th = (at, vol) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = "sine"; o.frequency.setValueAtTime(96, t + at); o.frequency.exponentialRampToValueAtTime(46, t + at + 0.16); g.gain.setValueAtTime(0.0001, t + at); g.gain.exponentialRampToValueAtTime(vol, t + at + 0.014); g.gain.exponentialRampToValueAtTime(0.0001, t + at + 0.34); o.connect(g); g.connect(sfxGain); o.start(t + at); o.stop(t + at + 0.4); };
        th(0, 0.5); th(0.38, 0.16);
        blip(240, 0, 0.1, "sawtooth", 0.05);
        break;
      }
      // Flicker hum: a sick fluorescent tube buzzing for ~0.7 s.
      case "flicker": {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = "square"; o.frequency.value = 118;
        g.gain.setValueAtTime(0.0001, t);
        [0.05, 0.1, 0.07, 0.16, 0.05, 0.12, 0.05].reduce((acc2, d2) => { g.gain.exponentialRampToValueAtTime(0.085, acc2 + 0.008); g.gain.exponentialRampToValueAtTime(0.01, acc2 + d2); return acc2 + d2; }, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
        o.connect(g); g.connect(sfxGain); o.start(t); o.stop(t + 0.8);
        break;
      }
      case "sting_chapter": [330, 392, 494].forEach((f, i) => blip(f, i * 0.12, 0.9, "sine", 0.13)); break;
      default: blip(700, 0, 0.08);
    }
  }
};

function buildAmbience() {
  // low drone
  const drone = (f, type, vol) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = f; g.gain.value = vol;
    o.connect(g); g.connect(filter);
    o.start();
  };
  filter = ac.createBiquadFilter(); filter.type = "lowpass"; filter.frequency.value = 700; filter.Q.value = 0.6;
  filter.connect(moodGain);
  drone(55, "sine", 0.5); drone(82.41, "triangle", 0.22); drone(110.4, "sine", 0.12);
  // slow tremolo on the drone
  const lfo = ac.createOscillator(), lg = ac.createGain();
  lfo.frequency.value = 0.07; lg.gain.value = 0.06; lfo.connect(lg); lg.connect(ambGain.gain); lfo.start();
  // soft brown noise: harbour / rain bed
  const len = ac.sampleRate * 4, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
  const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
  const bp = ac.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 500; bp.Q.value = 0.4;
  const ng = ac.createGain(); ng.gain.value = 0.25;
  src.connect(bp); bp.connect(ng); ng.connect(moodGain); src.start();
  // echoing sparse notes
  delay = ac.createDelay(1); delay.delayTime.value = 0.42;
  const fb = ac.createGain(); fb.gain.value = 0.35; delay.connect(fb); fb.connect(delay);
  delay.connect(moodGain);
  scheduleNote();
}

const SCALE = [220, 261.63, 293.66, 329.63, 392, 440, 523.25];
function scheduleNote() {
  const rate = { explore: [4200, 9000], tense: [1800, 4200], board: [6000, 12000], victory: [900, 1800], lobby: [5000, 9000] }[mood] || [4200, 9000];
  noteTimer = setTimeout(() => {
    if (ac && ac.state === "running" && ctx.settings.music) {
      const f = SCALE[Math.floor(Math.random() * SCALE.length)] * (mood === "tense" && Math.random() < 0.3 ? 1.0595 : 1);
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.type = "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
      o.connect(g); g.connect(filter); g.connect(delay);
      o.start(t); o.stop(t + 2.4);
    }
    scheduleNote();
  }, rate[0] + Math.random() * (rate[1] - rate[0]));
}

// ------------------------------------------------------------ location beds
// Fully procedural: filtered noise, LFO movement and, for the train, a
// lookahead scheduler laying down the classic ta-tak… ta-tak rail rhythm.
function noiseBuffer(seconds, brown) {
  const len = Math.floor(ac.sampleRate * seconds), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    else d[i] = w;
  }
  return buf;
}

function buildBed(id) {
  const out = ac.createGain();
  out.gain.value = 0;
  out.gain.setTargetAtTime(0.9, ac.currentTime, 0.6);
  out.connect(ambGain);
  const nodes = [], timers = [];
  const src = (buf, loop = true) => { const s = ac.createBufferSource(); s.buffer = buf; s.loop = loop; nodes.push(s); return s; };
  const filt = (type, freq, q) => { const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q; nodes.push(f); return f; };
  const gain = (v) => { const g = ac.createGain(); g.gain.value = v; nodes.push(g); return g; };
  const lfo = (freq, target, depth) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.frequency.value = freq; g.gain.value = depth;
    o.connect(g); g.connect(target); o.start(); nodes.push(o, g);
  };
  const chain = (s, ...rest) => { let n = s; for (const x of rest) { n.connect(x); n = x; } n.connect(out); s.start(); };
  const white = noiseBuffer(2, false), brown = noiseBuffer(4, true);

  if (id === "rain") {
    chain(src(white), filt("bandpass", 1600, 0.4), gain(0.16));
    const bp = filt("lowpass", 480); chain(src(brown), bp, gain(0.12));
    const patter = filt("bandpass", 2400, 0.7); chain(src(white), patter, gain(0.05)); lfo(0.13, patter.frequency, 500);
  } else if (id === "wind") {
    const lp = filt("lowpass", 300, 0.8); chain(src(brown), lp, gain(0.55)); lfo(0.07, lp.frequency, 190);
    const bp = filt("bandpass", 750, 1.2); chain(src(white), bp, gain(0.035)); lfo(0.11, bp.frequency, 260);
  } else if (id === "water") {
    const lp = filt("lowpass", 320); const g = gain(0.4); chain(src(brown), lp, g); lfo(0.07, g.gain, 0.16);
    chain(src(white), filt("highpass", 3200), gain(0.012));
  } else if (id === "train") {
    chain(src(brown), filt("lowpass", 240), gain(0.5));
    // rail clacks: two bursts per bogie pass, ~every 0.62 s
    let nextAt = ac.currentTime + 0.1;
    const burst = (at) => {
      const s = src(white, false), bp = filt("bandpass", 950, 1.1), g = ac.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.5, at + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.09);
      s.connect(bp); bp.connect(g); g.connect(out);
      s.start(at); s.stop(at + 0.12);
    };
    const iv = setInterval(() => {
      while (nextAt < ac.currentTime + 0.5) { burst(nextAt); burst(nextAt + 0.14); nextAt += 0.62; }
    }, 240);
    timers.push(iv);
  } else if (id === "hush") {
    chain(src(brown), filt("lowpass", 200), gain(0.15));
    const o = ac.createOscillator(), g = gain(0.006);
    o.type = "sine"; o.frequency.value = 110; o.connect(g); g.connect(out); o.start(); nodes.push(o);
  } else { // room
    chain(src(brown), filt("lowpass", 420), gain(0.26));
    chain(src(white), filt("lowpass", 900), gain(0.018));
  }

  return {
    id,
    swell() { // I5: a rain/wind swell — the bed breathes louder, then settles
      const t = ac.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setTargetAtTime(1.7, t, 0.6);
      out.gain.setTargetAtTime(0.9, t + 2.4, 1.4);
    },
    stop() {
      out.gain.setTargetAtTime(0, ac.currentTime, 0.25);
      for (const t of timers) clearInterval(t);
      setTimeout(() => { for (const n of nodes) { try { n.stop && n.stop(); } catch {} try { n.disconnect(); } catch {} } try { out.disconnect(); } catch {} }, 700);
    }
  };
}

// I10 — radio chatter: a second, fainter layer UNDER the location bed —
// unintelligible human murmur (or harbour texture for Case 1). It is pure
// texture: formant-ish filtered noise and muffled "voices" with syllabic
// gating, deliberately content-free. Routed through ambGain, so the music
// toggle, volume and voice ducking all apply exactly as for the bed. Every
// source is loop/LFO driven — no timers — so it renders offline too.
let chatter = null, pendingChatter = null;

function buildChatter(kind) {
  const out = ac.createGain();
  out.gain.value = 0;
  out.connect(ambGain);
  const nodes = [];
  const gain = (v) => { const g = ac.createGain(); g.gain.value = v; nodes.push(g); return g; };
  const filt = (type, freq, q) => { const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q; nodes.push(f); return f; };
  const lfo = (freq, target, depth) => { const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = freq; g.gain.value = depth; o.connect(g); g.connect(target); o.start(); nodes.push(o, g); };
  // one muffled "voice": a low sawtooth through a tight lowpass, gated by a
  // slow square-ish LFO so it murmurs in syllable-like bursts.
  const voice = (base, syllHz, vol, pan) => {
    const o = ac.createOscillator(); o.type = "sawtooth"; o.frequency.value = base;
    const vib = ac.createOscillator(), vg = ac.createGain(); vib.frequency.value = 5.1; vg.gain.value = base * 0.012; vib.connect(vg); vg.connect(o.frequency); vib.start();
    const lp = filt("lowpass", 320, 0.7);
    const gate = gain(0);
    const sq = ac.createOscillator(), sg = ac.createGain(); sq.type = "square"; sq.frequency.value = syllHz; sg.gain.value = vol * 0.5; sq.connect(sg); sg.connect(gate.gain); sq.start();
    gate.gain.value = vol * 0.5;
    let tail = gate;
    if (pan !== undefined && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = pan; nodes.push(p); gate.connect(p); tail = p; }
    o.connect(lp); lp.connect(gate); tail.connect(out); o.start();
    nodes.push(o, vib, vg, sq, sg);
  };
  const crowd = (vol) => { // breathy crowd wash underneath the voices
    const s = ac.createBufferSource(); s.buffer = noiseBuffer(3, false); s.loop = true;
    const bp = filt("bandpass", 500, 0.5), g = gain(vol);
    lfo(0.09, bp.frequency, 120);
    s.connect(bp); bp.connect(g); g.connect(out); s.start(); nodes.push(s);
  };
  const level = (v) => out.gain.setTargetAtTime(v, ac.currentTime, 0.8);

  if (kind === "murmur") {          // hotel lobby / busy room
    level(0.22); crowd(0.5);
    voice(104, 3.1, 0.5, -0.4); voice(131, 2.6, 0.42, 0.35); voice(92, 3.7, 0.36, 0.05);
  } else if (kind === "station") {  // station hall: broader, echoing
    level(0.24); crowd(0.75);
    voice(98, 2.9, 0.5, -0.5); voice(124, 2.4, 0.45, 0.5); voice(146, 3.3, 0.3, 0);
    const s = ac.createBufferSource(); s.buffer = noiseBuffer(2, false); s.loop = true;
    const bp = filt("bandpass", 950, 0.8), g = gain(0.12); lfo(0.05, g.gain, 0.07);
    s.connect(bp); bp.connect(g); g.connect(out); s.start(); nodes.push(s);
  } else if (kind === "hush") {     // theatre / museum: barely-there whispers
    level(0.19); crowd(0.38);
    voice(118, 2.2, 0.48, -0.3); voice(96, 1.9, 0.38, 0.4);
  } else if (kind === "train") {    // compartment murmur with the sway
    level(0.19); crowd(0.5);
    voice(108, 2.8, 0.5, -0.35); voice(138, 2.5, 0.42, 0.3);
    lfo(0.45, out.gain, 0.03);
  } else if (kind === "harbour") {  // Case 1: gulls + wireless crackle, baked into a loop
    level(0.55);
    const sr = ac.sampleRate, len = sr * 8, buf = ac.createBuffer(1, len, sr), d = buf.getChannelData(0);
    let seed = 1234567; const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
    for (let c = 0; c < 6; c++) { // gull cries: falling chirps with a tremolo
      const at = Math.floor(rnd() * (len - sr)), f0 = 2100 + rnd() * 700, dur = Math.floor(sr * (0.16 + rnd() * 0.12));
      for (let i = 0; i < dur; i++) {
        const k = i / dur, f = f0 * (1 - 0.32 * k);
        d[at + i] += Math.sin(2 * Math.PI * f * (i / sr)) * 0.3 * Math.sin(Math.PI * k) * (0.7 + 0.3 * Math.sin(2 * Math.PI * 31 * (i / sr)));
      }
    }
    for (let c = 0; c < 260; c++) { // wireless crackle: sparse static ticks
      const at = Math.floor(rnd() * (len - 400)), n = 40 + Math.floor(rnd() * 160);
      for (let i = 0; i < n; i++) d[at + i] += (rnd() * 2 - 1) * 0.09 * (1 - i / n);
    }
    const s = ac.createBufferSource(); s.buffer = buf; s.loop = true;
    const hp = filt("highpass", 900), g = gain(0.8);
    s.connect(hp); hp.connect(g); g.connect(out); s.start(); nodes.push(s);
  } else {
    return null;
  }
  return {
    id: kind,
    stop() {
      out.gain.setTargetAtTime(0, ac.currentTime, 0.25);
      setTimeout(() => { for (const n of nodes) { try { n.stop && n.stop(); } catch {} try { n.disconnect(); } catch {} } try { out.disconnect(); } catch {} }, 700);
    }
  };
}

ctx.audio = audio;
