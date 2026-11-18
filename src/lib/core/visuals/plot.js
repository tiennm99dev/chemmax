// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Drawing function graphs in a window of the plane, x and y scaled
 * separately (so a window can zoom in around a point): the window mapped to
 * an SVG box, round tick values, the path of a graph that lifts the pen where
 * the function jumps or is undefined, the closed path of a region between two
 * graphs, a numeric integral to check exact answers against, and computed
 * values written the book's way with "≈" when rounded. `graph-box.svelte`
 * draws with these.
 */

import { niceStep } from '#lib/stats-engine/ticks.js';
import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{ xMin: number, xMax: number, yMin: number, yMax: number }} Window
 * @typedef {{
 *   width: number, height: number, left: number, right: number, top: number, bottom: number,
 *   sx: (x: number) => number, sy: (y: number) => number, ix: (px: number) => number,
 * }} Frame
 * @typedef {(x: number) => number} Fn
 */

/** Room under the plot for the x tick labels. */
const FOOT = 26;

/**
 * The SVG frame of a window: `sx` and `sy` map math values to page
 * coordinates inside a box of `width` × `height` with the given margins
 * (`left` holds the y tick labels), and `ix` maps a page x back to a math x.
 * @param {Window} win
 * @param {{ width?: number, height?: number, pad?: number, left?: number }} [opts]
 * @returns {Frame}
 */
export function frameOf(win, opts = {}) {
  const { width = 420, height = 280, pad = 14, left = 44 } = opts;
  const right = width - pad;
  const top = pad;
  const bottom = height - FOOT;
  const kx = (right - left) / (win.xMax - win.xMin);
  const ky = (bottom - top) / (win.yMax - win.yMin);
  return {
    width,
    height,
    left,
    right,
    top,
    bottom,
    sx: (x) => left + (x - win.xMin) * kx,
    sy: (y) => bottom - (y - win.yMin) * ky,
    ix: (px) => win.xMin + (px - left) / kx,
  };
}

/**
 * The box height that gives x and y the same scale in a box of `width` with
 * the default margins of `frameOf`, so a reflection in the line y = x looks
 * like one.
 * @param {Window} win @param {number} [width]
 */
export function squareHeight(win, width = 420) {
  const pad = 14;
  const left = 44;
  const unit = (width - pad - left) / (win.xMax - win.xMin);
  return Math.round(unit * (win.yMax - win.yMin) + pad + FOOT);
}

/**
 * Round tick values inside [lo, hi], about `count` of them.
 * @param {number} lo @param {number} hi @param {number} [count]
 */
export function ticksIn(lo, hi, count = 5) {
  const step = niceStep(hi - lo, count);
  const places = Math.max(0, -Math.floor(Math.log10(step)) + 1);
  const out = [];
  for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + step * 1e-9; v += step) {
    out.push(tidy(v, places + 2));
  }
  return out;
}

/**
 * Tick label in the book's notation: comma decimals, true minus sign.
 * @param {number} v
 */
export const tickText = (v) => formatNumber(v, 6);

/**
 * Sample points of y = f(x) on [from, to], `samples` + 1 of them.
 * @param {Fn} f @param {number} from @param {number} to @param {number} [samples]
 */
export function sample(f, from, to, samples = 160) {
  const out = [];
  for (let i = 0; i <= samples; i++) {
    const x = from + ((to - from) * i) / samples;
    out.push({ x, y: f(x) });
  }
  return out;
}

/**
 * SVG path of y = f(x) for x in [win.xMin, win.xMax], or in [from, to]. The
 * pen lifts where f is undefined (NaN or ±Infinity), outside the window
 * widened by half its height, and across every x listed in `breaks` (a jump,
 * a hole or an asymptote), so a jump or an asymptote is never drawn as a
 * steep line. With `refine`, extra samples close in on each break
 * geometrically, so a branch running off to infinity is drawn right up to
 * the edge of the window instead of stopping at the last even sample.
 * @param {Fn} f
 * @param {Window} win
 * @param {Frame} frame
 * @param {{ breaks?: number[], refine?: boolean, samples?: number, from?: number, to?: number }} [opts]
 */
export function graphPath(f, win, frame, opts = {}) {
  const { breaks = [], refine = false, samples = 240 } = opts;
  const from = Math.max(win.xMin, opts.from ?? win.xMin);
  const to = Math.min(win.xMax, opts.to ?? win.xMax);
  if (!(to > from)) return '';
  const margin = (win.yMax - win.yMin) / 2;
  const lo = win.yMin - margin;
  const hi = win.yMax + margin;
  const span = to - from;
  const eps = span * 1e-6;
  /** @type {number[]} */
  const xs = [];
  for (let i = 0; i <= samples; i++) xs.push(from + (span * i) / samples);
  /** @param {number} x */
  const add = (x) => {
    if (x >= from && x <= to) xs.push(x);
  };
  // Each break is approached from both sides.
  for (const b of breaks) {
    if (!(b > from && b < to)) continue;
    for (let h = span / 64; refine && h > eps; h /= 2) {
      add(b - h);
      add(b + h);
    }
    add(b - eps);
    add(b + eps);
  }
  xs.sort((a, b) => a - b);
  let d = '';
  let pen = false;
  let prev = -Infinity;
  for (const x of xs) {
    const crossed = breaks.some((b) => prev < b && x > b);
    const y = breaks.includes(x) ? NaN : f(x);
    prev = x;
    if (!Number.isFinite(y) || y < lo || y > hi) {
      pen = false;
      continue;
    }
    const cmd = pen && !crossed ? 'L' : 'M';
    d += `${cmd} ${frame.sx(x).toFixed(2)} ${frame.sy(y).toFixed(2)} `;
    pen = true;
  }
  return d.trim();
}

/**
 * Closed SVG path of the region between y = f(x) and y = g(x) (the x-axis
 * when g is left out) for x in [from, to]: along f to the right, back along
 * g to the left.
 * @param {Fn} f
 * @param {Fn | undefined} g
 * @param {number} from @param {number} to
 * @param {Frame} frame
 */
export function regionPath(f, g, from, to, frame) {
  if (!(to > from)) return '';
  const lower = g ?? (() => 0);
  const top = sample(f, from, to, 120);
  const bottom = sample(lower, from, to, 120).reverse();
  const pts = [...top, ...bottom].map(
    (p) => `${frame.sx(p.x).toFixed(2)} ${frame.sy(p.y).toFixed(2)}`,
  );
  return `M ${pts.join(' L ')} Z`;
}

/**
 * A numeric integral of f on [a, b] by Simpson's rule, to check exact
 * values against.
 * @param {Fn} f @param {number} a @param {number} b @param {number} [n] even
 */
export function simpson(f, a, b, n = 2000) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
}

/**
 * A value read off a graph, written to at most `places` decimals, with
 * "≈ " in front when rounding changed it: 2.5 → '2,5', 1/3 → '≈ 0,33'.
 * @param {number} v @param {number} [places]
 */
export function approxText(v, places = 2) {
  const r = tidy(v, places);
  return `${tidy(v, 9) === r ? '' : '≈ '}${formatNumber(r, places)}`;
}

/**
 * The same as TeX: the relation sign ('=' or '\approx') and the number, for
 * writing "f(x) = …" in live TeX.
 * @param {number} v @param {number} [places]
 */
export function approxTex(v, places = 2) {
  const r = tidy(v, places);
  return `${tidy(v, 9) === r ? '=' : '\\approx'} ${numTex(r, places)}`;
}
