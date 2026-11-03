// Party voice chat: a WebRTC audio mesh (2 to 4 players), signalled through the game server.
// Newcomers call everyone already in voice. Needs a STUN server (default) and, for some mobile networks,
// a TURN server: set ICE_SERVERS on the server (see README).
import { ctx } from "./ctx.js";

const peers = new Map(); // pid -> { pc, audio, analyser, speaking, vol }
let local = null, joined = false, micOn = true, ptt = false, ice = [{ urls: "stun:stun.l.google.com:19302" }];
let acx = null;

function ac() { return acx || (acx = new (window.AudioContext || window.webkitAudioContext)()); }

function makePeer(pid) {
  if (peers.has(pid)) return peers.get(pid);
  const pc = new RTCPeerConnection({ iceServers: ice });
  // Perfect-negotiation roles: deterministic per pair (smaller pid is polite),
  // so if both sides offer at once the polite side rolls back and answers
  // instead of both offers colliding and dying in setRemoteDescription.
  const p = { pc, audio: null, speaking: false, vol: 1, state: "new", iceState: "new", makingOffer: false, polite: String(ctx.state.you || "") < String(pid), restarted: false };
  peers.set(pid, p);
  if (local) local.getTracks().forEach((t) => pc.addTrack(t, local));
  pc.onicecandidate = (e) => { if (e.candidate) ctx.send({ t: "rtc", to: pid, data: { ice: e.candidate } }); };
  pc.onconnectionstatechange = () => { p.state = pc.connectionState; if (p.state === "connected") p.restarted = false; ctx.emit("voice", null); };
  pc.oniceconnectionstatechange = () => {
    p.iceState = pc.iceConnectionState;
    ctx.emit("voice", null);
    // One automatic ICE restart from the impolite side when a mobile network
    // drops the path mid-session; the polite side just answers the new offer.
    if (pc.iceConnectionState === "failed" && !p.polite && !p.restarted && joined) {
      p.restarted = true;
      negotiate(pid, true).catch((e) => console.warn("ice restart failed", e));
    }
  };
  pc.ontrack = (e) => {
    const el = new Audio();
    el.autoplay = true;
    el.srcObject = e.streams[0];
    el.volume = Math.min(1, ctx.settings.voiceVol) * p.vol;
    el.muted = ctx.muted.has(pid);
    el.style.display = "none"; // in-DOM (but invisible): iOS Safari plays detached elements unreliably
    document.body.appendChild(el);
    p.audio = el;
    el.play().catch(() => {});
    try {
      const a = ac(); if (a.state === "suspended") a.resume().catch(() => {});
      const src = a.createMediaStreamSource(e.streams[0]);
      const an = a.createAnalyser(); an.fftSize = 256;
      src.connect(an);
      p.analyser = an;
    } catch {}
    ctx.emit("voice", null);
  };
  return p;
}

async function negotiate(pid, iceRestart = false) {
  const p = makePeer(pid);
  if (p.makingOffer) return;
  p.makingOffer = true;
  try {
    const offer = await p.pc.createOffer(iceRestart ? { iceRestart: true } : undefined);
    await p.pc.setLocalDescription(offer);
    ctx.send({ t: "rtc", to: pid, data: { sdp: p.pc.localDescription } });
  } finally { p.makingOffer = false; }
}

async function callPeer(pid) { return negotiate(pid, false); }

function dropPeer(pid) {
  const p = peers.get(pid);
  if (!p) return;
  try { p.pc.close(); } catch {}
  if (p.audio) { p.audio.srcObject = null; try { p.audio.remove(); } catch {} }
  peers.delete(pid);
  ctx.emit("voice", null);
}

export const voice = {
  get joined() { return joined; },
  get micOn() { return micOn; },
  supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.RTCPeerConnection); },
  setIce(list) { if (Array.isArray(list) && list.length) ice = list; },

  async join() {
    if (joined) return true;
    if (!this.supported()) throw new Error("Voice chat isn't supported on this browser.");
    // Create/resume the shared AudioContext synchronously inside the tap
    // handler's call chain: on iOS Safari a context born later (e.g. inside
    // ontrack) starts and stays "suspended", killing the speaking indicators.
    try { const a = ac(); if (a.state === "suspended") a.resume().catch(() => {}); } catch {}
    local = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false });
    ptt = ctx.settings.pushToTalk;
    micOn = true;
    local.getAudioTracks().forEach((t) => (t.enabled = !ptt));
    joined = true;
    ctx.send({ t: "rtc_join" });
    ctx.emit("voice", null);
    return true;
  },

  leave() {
    if (!joined) return;
    joined = false;
    ctx.send({ t: "rtc_leave" });
    for (const pid of [...peers.keys()]) dropPeer(pid);
    if (local) { local.getTracks().forEach((t) => t.stop()); local = null; }
    ctx.emit("voice", null);
  },

  setMic(on) {
    micOn = on;
    if (local) local.getAudioTracks().forEach((t) => (t.enabled = on));
    ctx.emit("voice", null);
  },

  setPtt(on) {
    ptt = on;
    if (local) local.getAudioTracks().forEach((t) => (t.enabled = !on && micOn));
  },

  talk(down) { if (local && ptt) local.getAudioTracks().forEach((t) => (t.enabled = down)); },

  setPeerVolume(pid, v) { const p = peers.get(pid); if (p) { p.vol = v; if (p.audio) p.audio.volume = Math.min(1, ctx.settings.voiceVol) * v; } },
  refreshMutes() { for (const [pid, p] of peers) if (p.audio) p.audio.muted = ctx.muted.has(pid); },
  peerState(pid) { const p = peers.get(pid); return p ? p.state : null; },

  speaking(pid) {
    const p = peers.get(pid);
    if (!p || !p.analyser) return false;
    const d = new Uint8Array(p.analyser.frequencyBinCount);
    p.analyser.getByteFrequencyData(d);
    let s = 0; for (let i = 0; i < d.length; i++) s += d[i];
    return s / d.length > 18;
  }
};

// signalling
ctx.on("msg:voice_peers", async (m) => {
  if (!joined) return;
  for (const pid of m.peers) if (pid !== ctx.state.you) { try { await callPeer(pid); } catch (e) { console.warn("voice call failed", e); } }
});
ctx.on("msg:voice_leave", (m) => dropPeer(m.pid));
ctx.on("msg:rtc", async (m) => {
  if (!joined) return;
  const p = makePeer(m.from);
  const d = m.data || {};
  try {
    if (d.sdp) {
      // Perfect negotiation: an offer that collides with our own in-flight
      // offer is ignored by the impolite side and rolled back for by the
      // polite side — previously both threw and the pair never connected.
      const collision = d.sdp.type === "offer" && (p.makingOffer || p.pc.signalingState !== "stable");
      if (collision && !p.polite) return;
      if (collision) await p.pc.setLocalDescription({ type: "rollback" });
      await p.pc.setRemoteDescription(d.sdp);
      if (d.sdp.type === "offer") {
        const ans = await p.pc.createAnswer();
        await p.pc.setLocalDescription(ans);
        ctx.send({ t: "rtc", to: m.from, data: { sdp: p.pc.localDescription } });
      }
    } else if (d.ice) await p.pc.addIceCandidate(d.ice).catch(() => {});
  } catch (e) { console.warn("rtc signal", e); }
});

ctx.voice = voice;
