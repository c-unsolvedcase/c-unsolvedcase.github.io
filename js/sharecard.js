// The result share card: the solved case rendered to a 1080×1350 PNG on a
// canvas — case title, stars, difficulty, time, the detectives, their
// awards and badges, and the game's name/URL. Shared with navigator.share
// (file) where available, else downloaded.
import { fmtTime } from "./progress.js";

export const DIFF_LABEL = { casual: "Casual", standard: "Standard", master: "Master" };
export const GAME_URL = "c-unsolvedcase.github.io";

function wrap(g, text, cx, y, maxW, lh) {
  const words = String(text).split(/\s+/);
  let line = "", n = 0;
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (g.measureText(t).width > maxW && line) { g.fillText(line, cx, y + n * lh); line = w; n++; }
    else line = t;
  }
  if (line) g.fillText(line, cx, y + n * lh);
  return y + (n + 1) * lh;
}

export function buildShareCard(d) {
  const W = 1080, H = 1350;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#171a26"); grad.addColorStop(1, "#0c0d12");
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  g.strokeStyle = "#e0a458"; g.lineWidth = 5; g.strokeRect(30, 30, W - 60, H - 60);
  g.strokeStyle = "#2c3040"; g.lineWidth = 2; g.strokeRect(48, 48, W - 96, H - 96);
  g.textAlign = "center";

  g.fillStyle = "#e0a458";
  g.font = "700 46px Georgia, 'Times New Roman', serif";
  g.fillText("U N S O L V E D   C A S E", W / 2, 138);
  g.fillStyle = "#9a9aa6";
  g.font = "600 30px system-ui, sans-serif";
  g.fillText("—  C A S E   C L O S E D  —", W / 2, 196);

  g.fillStyle = "#ece7dc";
  g.font = "700 74px Georgia, 'Times New Roman', serif";
  let y = wrap(g, d.title, W / 2, 300, W - 200, 84);

  // stars: grey outline row, gold filled stars over its left edge
  g.font = "92px Georgia, serif";
  const full = "★★★★★";
  const sw = g.measureText(full).width;
  g.fillStyle = "#3a3f52"; g.fillText("☆☆☆☆☆", W / 2, y + 96);
  g.fillStyle = "#e0a458"; g.textAlign = "left";
  g.fillText("★".repeat(Math.max(0, Math.min(5, d.stars))), W / 2 - sw / 2, y + 96);
  g.textAlign = "center";
  y += 150;

  g.fillStyle = "#9a9aa6";
  g.font = "34px system-ui, sans-serif";
  const meta = [DIFF_LABEL[d.difficulty] || "Standard", d.timeSec != null ? fmtTime(d.timeSec) : null].filter(Boolean).join("   ·   ");
  g.fillText(meta, W / 2, y + 30);
  y += 100;

  const left = 130, right = W - 130;
  g.textAlign = "left";
  const section = (label) => {
    g.fillStyle = "#e0a458"; g.font = "700 30px system-ui, sans-serif";
    g.fillText(label.toUpperCase(), left, y); y += 14;
    g.strokeStyle = "#2c3040"; g.beginPath(); g.moveTo(left, y); g.lineTo(right, y); g.stroke(); y += 52;
  };
  const row = (text, size) => {
    g.fillStyle = "#ece7dc"; g.font = `${size || 36}px system-ui, sans-serif`;
    y = wrap(g, text, left, y, right - left, (size || 36) + 10) + 6;
  };

  section("The detectives");
  row(d.players.join("  ·  ") || "A lone detective");

  if (d.awards && d.awards.length) {
    section("Honours");
    for (const a of d.awards) row(`${a.icon}  ${a.label} — ${a.name}`);
  }
  if (d.badges && d.badges.length) {
    section("Mastery");
    row(d.badges.map((b) => `${b.icon} ${b.label}`).join("    "));
  }

  g.textAlign = "center";
  g.fillStyle = "#9a9aa6";
  g.font = "32px system-ui, sans-serif";
  g.fillText("Play it with your friends:", W / 2, H - 128);
  g.fillStyle = "#e0a458";
  g.font = "700 38px system-ui, sans-serif";
  g.fillText(GAME_URL, W / 2, H - 76);
  return c;
}

function cardFile(d) {
  return new Promise((resolve) => {
    buildShareCard(d).toBlob(async (blob) => {
      if (!blob) return resolve(null);
      resolve(new File([blob], "unsolved-case-result.png", { type: "image/png" }));
    }, "image/png");
  });
}

export async function shareResultCard(d) {
  const file = await cardFile(d);
  if (!file) return false;
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      await navigator.share({ files: [file], title: "Unsolved Case — case closed", text: `${d.title}: solved with ${d.stars} stars on Unsolved Case.` });
      return true;
    }
  } catch { return false; }
  return downloadResultCard(d);
}

export function downloadResultCard(d) {
  const c = buildShareCard(d);
  const a = document.createElement("a");
  a.download = "unsolved-case-result.png";
  a.href = c.toDataURL("image/png");
  document.body.append(a);
  a.click();
  a.remove();
  return true;
}
