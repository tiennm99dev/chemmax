/**
 * The book's titration: a sodium hydroxide solution of unknown strength from
 * the burette into a standard hydrochloric acid solution in the flask. Gives
 * the pH after each addition, the indicators and their colours, and checks the
 * learner's calculated concentration.
 * Volumes are in mL, concentrations in mol/L.
 */
import { strongAcidPh, strongBasePh } from '#lib/domain/ph.js';

/** Standard HCl solution in the flask. */
export const ACID_C = 0.1;
/** Volume of standard acid taken with the pipette. */
export const ACID_V = 10;
/** Hidden NaOH concentrations to find, all near 0,1 M like the book's solution. */
export const SAMPLES = [0.08, 0.125, 0.1, 0.11, 0.09];
/** Largest volume the burette gives in one run. */
export const MAX_V = 25;
/** Allowed gap between the typed and the worked-out concentration. */
const TOLERANCE = 0.002;
/** Volume past the equivalence point still counted as a clean end point. */
const CLEAN_OVERSHOOT = 0.2;

/**
 * pH in the flask after `vb` mL of base, for a strong acid and a strong base.
 * @param {number} ca
 * @param {number} va
 * @param {number} cb
 * @param {number} vb
 */
export function phAfter(ca, va, cb, vb) {
  const excess = (ca * va - cb * vb) / (va + vb);
  if (Math.abs(excess) < 1e-12) return 7;
  return excess > 0 ? strongAcidPh(excess) : strongBasePh(-excess);
}

/** @param {number} cb */
export const equivalenceVolume = (cb) => (ACID_C * ACID_V) / cb;

/**
 * @typedef {object} Indicator
 * @property {string} id
 * @property {string} name
 * @property {number} low bottom of its colour change
 * @property {number} high top of its colour change
 * @property {number} endAt pH where the titration stops with it
 * @property {[number, number, number]} acidColor
 * @property {[number, number, number]} baseColor
 * @property {[number, number, number]} [paleColor] colour at `high` when the shade deepens further up
 * @property {string} change
 */

/** @type {Indicator[]} */
export const INDICATORS = [
  {
    id: 'phenolphthalein',
    name: 'Phenolphthalein',
    low: 8.2,
    high: 10,
    endAt: 8.2,
    acidColor: [248, 250, 252],
    paleColor: [249, 168, 212],
    baseColor: [219, 39, 119],
    change: 'không màu sang hồng nhạt',
  },
  {
    id: 'bromothymol',
    name: 'Bromothymol blue',
    low: 6,
    high: 7.6,
    endAt: 7,
    acidColor: [234, 179, 8],
    baseColor: [37, 99, 235],
    change: 'vàng sang xanh lam',
  },
  {
    id: 'methyl-orange',
    name: 'Methyl da cam',
    low: 3.1,
    high: 4.4,
    endAt: 4.4,
    acidColor: [220, 38, 38],
    baseColor: [234, 179, 8],
    change: 'đỏ sang vàng',
  },
];

/** pH units above the colour change over which a pale shade reaches its deepest. */
const DEEPEN_OVER = 2;

/**
 * @param {[number, number, number]} from
 * @param {[number, number, number]} to
 * @param {number} t
 */
function mix(from, to, t) {
  const share = Math.min(1, Math.max(0, t));
  const [r, g, b] = from.map((v, i) => Math.round(v + (to[i] - v) * share));
  return `rgb(${r} ${g} ${b})`;
}

/**
 * Colour of a solution holding the indicator at a pH. Phenolphthalein turns
 * pale pink first and deep pink only when far too much base was added, which
 * is how the book tells a good end point from an overshoot.
 * @param {Indicator} indicator
 * @param {number} ph
 */
export function indicatorColor(indicator, ph) {
  const { low, high, acidColor, paleColor, baseColor } = indicator;
  if (paleColor && ph > high) return mix(paleColor, baseColor, (ph - high) / DEEPEN_OVER);
  return mix(acidColor, paleColor ?? baseColor, (ph - low) / (high - low));
}

/**
 * The titration curve up to `upTo` mL of base, finely spaced near the jump.
 * @param {number} cb
 * @param {number} upTo
 * @returns {Array<[number, number]>}
 */
export function idealCurve(cb, upTo) {
  const eq = equivalenceVolume(cb);
  /** @type {number[]} */
  const volumes = [];
  for (let v = 0; v < upTo; v += 0.5) volumes.push(v);
  for (let d = -0.5; d <= 0.5; d += 0.02) volumes.push(eq + d);
  volumes.push(upTo);
  return volumes
    .filter((v) => v >= 0 && v <= upTo)
    .sort((a, b) => a - b)
    .map((v) => [v, phAfter(ACID_C, ACID_V, cb, v)]);
}

/**
 * Whether the titration has reached the indicator's end point.
 * @param {Indicator} indicator
 * @param {number} ph
 */
export const reachedEnd = (indicator, ph) => ph >= indicator.endAt;

/**
 * Whether the base added went clearly past the equivalence point.
 * @param {number} cb
 * @param {number} vb
 */
export const overshot = (cb, vb) => vb - equivalenceVolume(cb) > CLEAN_OVERSHOOT;

/**
 * Concentration of the base from the volume read off the burette:
 * C(HCl)·V(HCl) = C(NaOH)·V(NaOH).
 * @param {number} vb
 */
export const baseFromVolume = (vb) => (ACID_C * ACID_V) / vb;

/**
 * Judges a typed base concentration against the reading on the burette.
 * @param {number} cb
 * @param {number} vb
 * @param {number | null} typed
 * @param {Indicator} indicator
 * @returns {'invalid' | 'too-early' | 'overshot' | 'wrong' | 'right'}
 */
export function judgeResult(cb, vb, typed, indicator) {
  if (typed === null || !Number.isFinite(typed)) return 'invalid';
  if (!reachedEnd(indicator, phAfter(ACID_C, ACID_V, cb, vb))) return 'too-early';
  if (overshot(cb, vb)) return 'overshot';
  return Math.abs(typed - baseFromVolume(vb)) <= TOLERANCE ? 'right' : 'wrong';
}
