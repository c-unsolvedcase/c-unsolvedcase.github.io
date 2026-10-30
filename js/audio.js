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

export const audio = {
  unlock() {
    const a = ensure();
    if (a && a.state === "suspended") a.resume().catch(() => {});
    if (!started && a) { started = true; buildAmbience(); }
    this.applyVolume();
    if (pendingBed) { const p = pendingBed; pendingBed = null; this.setBed(p); }
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
    stop() {
      out.gain.setTargetAtTime(0, ac.currentTime, 0.25);
      for (const t of timers) clearInterval(t);
      setTimeout(() => { for (const n of nodes) { try { n.stop && n.stop(); } catch {} try { n.disconnect(); } catch {} } try { out.disconnect(); } catch {} }, 700);
    }
  };
}

ctx.audio = audio;
