// Smooths the scribble Lottie's corners by aligning each anchor point's in/out
// bezier handles to a shared tangent (kills the cusp) while preserving each
// handle's length (keeps the loop sizes). Bakes the result back into the JSON
// and writes a before/after SVG preview for visual verification.
//
//   node scripts/smooth-scribble.mjs [strength 0..1]   (default 1)

import { readFileSync, writeFileSync } from "node:fs";

// Read the pristine export, write the smoothed copy — keeps re-runs idempotent.
const SRC = new URL("../screen assets/Untitled file (1).json", import.meta.url);
const OUT = new URL("../data/scribble-lottie.json", import.meta.url);
const PREVIEW = new URL(
  "../scratch-smooth-preview.html",
  import.meta.url,
);
const STRENGTH = Math.min(1, Math.max(0, Number(process.argv[2] ?? 1)));

const len = (v) => Math.hypot(v[0], v[1]);
const norm = (v) => {
  const l = len(v) || 1;
  return [v[0] / l, v[1] / l];
};
const lerp = (a, b, t) => a + (b - a) * t;

/** Align in/out handles of each interior anchor to a shared tangent. */
function smoothPath(ks) {
  const { i, o, v } = ks;
  const n = v.length;
  const outI = i.map((h) => [...h]);
  const outO = o.map((h) => [...h]);

  for (let k = 0; k < n; k++) {
    const inH = i[k]; // handle pointing "in" (relative to anchor)
    const outH = o[k]; // handle pointing "out"
    const inLen = len(inH);
    const outLen = len(outH);

    // A zero-length handle means a straight segment ends here — leave it.
    if (inLen < 1e-3 || outLen < 1e-3) continue;

    // Both handles expressed as forward-pointing directions, then averaged
    // into one tangent line through the anchor.
    const fIn = norm([-inH[0], -inH[1]]);
    const fOut = norm(outH);
    let T = [fIn[0] + fOut[0], fIn[1] + fOut[1]];
    if (len(T) < 1e-4) continue; // already opposite (degenerate) — skip
    T = norm(T);

    const smOut = [T[0] * outLen, T[1] * outLen];
    const smIn = [-T[0] * inLen, -T[1] * inLen];

    outO[k] = [lerp(outH[0], smOut[0], STRENGTH), lerp(outH[1], smOut[1], STRENGTH)];
    outI[k] = [lerp(inH[0], smIn[0], STRENGTH), lerp(inH[1], smIn[1], STRENGTH)];
  }
  return { ...ks, i: outI, o: outO };
}

/** Lottie bezier path -> SVG "d" string (for preview only). */
function toSvg(ks) {
  const { i, o, v, c } = ks;
  let d = `M ${v[0][0]} ${v[0][1]}`;
  for (let k = 0; k < v.length - 1; k++) {
    const c1 = [v[k][0] + o[k][0], v[k][1] + o[k][1]];
    const c2 = [v[k + 1][0] + i[k + 1][0], v[k + 1][1] + i[k + 1][1]];
    d += ` C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${v[k + 1][0]} ${v[k + 1][1]}`;
  }
  if (c) d += " Z";
  return d;
}

const data = JSON.parse(readFileSync(SRC, "utf8"));
const shapes = data.layers[0].shapes[0].it.filter((s) => s.ty === "sh");

const before = shapes.map((s) => toSvg(s.ks.k));
const after = [];
for (const s of shapes) {
  s.ks.k = smoothPath(s.ks.k);
  after.push(toSvg(s.ks.k));
}

writeFileSync(OUT, JSON.stringify(data));

// bounds for the preview viewBox
const all = shapes.flatMap((s) => s.ks.k.v);
const xs = all.map((p) => p[0]);
const ys = all.map((p) => p[1]);
const pad = 60;
const vb = `${Math.min(...xs) - pad} ${Math.min(...ys) - pad} ${
  Math.max(...xs) - Math.min(...xs) + pad * 2
} ${Math.max(...ys) - Math.min(...ys) + pad * 2}`;

const svg = (paths, color) =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${paths
    .map(
      (d) =>
        `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    )
    .join("")}</svg>`;

writeFileSync(
  PREVIEW,
  `<!doctype html><meta charset=utf8><style>body{margin:0;display:flex;background:#fff;font-family:sans-serif}
figure{flex:1;margin:0;padding:16px;text-align:center}svg{width:100%;height:auto}
figcaption{font:600 14px sans-serif;color:#666;letter-spacing:.1em;text-transform:uppercase}</style>
<figure><figcaption>Before</figcaption>${svg(before, "#999")}</figure>
<figure><figcaption>After (smoothed)</figcaption>${svg(after, "#0033ff")}</figure>`,
);

console.log(`Smoothed ${shapes.length} paths (strength ${STRENGTH}). Preview -> ${PREVIEW.pathname}`);
