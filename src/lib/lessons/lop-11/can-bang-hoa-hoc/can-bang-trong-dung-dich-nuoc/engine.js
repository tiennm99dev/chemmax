/**
 * Titrating a hydrochloric acid sample of unknown strength with a standard
 * sodium hydroxide solution: the pH after each addition, the indicators and
 * their colours, and checking the learner's calculated concentration.
 * Volumes are in mL, concentrations in mol/L.
 */
import { strongAcidPh, strongBasePh } from '#lib/domain/ph.js';

/** Standard NaOH solution in the burette. */
export const BASE_C = 0.1;
/** Acid sample in the flask. */
export const ACID_V = 10;
/** Hidden acid concentrations to find; they keep the end point on the burette. */
export const SAMPLES = [0.12, 0.08, 0.15, 0.09, 0.11];
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

/** @param {number} ca */
export const equivalenceVolume = (ca) => (ca * ACID_V) / BASE_C;

/**
 * @typedef {object} Indicator
 * @property {string} id
 * @property {string} name
 * @property {number} low bottom of its colour change
 * @property {number} high top of its colour change
 * @property {number} endAt pH where the titration stops with it
 * @property {[number, number, number]} acidColor
 * @property {[number, number, number]} baseColor
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
    baseColor: [219, 39, 119],
    change: 'không màu sang hồng',
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

/**
 * Colour of a solution holding the indicator at a pH.
 * @param {Indicator} indicator
 * @param {number} ph
 */
export function indicatorColor(indicator, ph) {
  const t = Math.min(1, Math.max(0, (ph - indicator.low) / (indicator.high - indicator.low)));
  const [r, g, b] = indicator.acidColor.map((v, i) =>
    Math.round(v + (indicator.baseColor[i] - v) * t),
  );
  return `rgb(${r} ${g} ${b})`;
}

/**
 * The titration curve up to `upTo` mL of base, finely spaced near the jump.
 * @param {number} ca
 * @param {number} upTo
 * @returns {Array<[number, number]>}
 */
export function idealCurve(ca, upTo) {
  const eq = equivalenceVolume(ca);
  /** @type {number[]} */
  const volumes = [];
  for (let v = 0; v < upTo; v += 0.5) volumes.push(v);
  for (let d = -0.5; d <= 0.5; d += 0.02) volumes.push(eq + d);
  volumes.push(upTo);
  return volumes
    .filter((v) => v >= 0 && v <= upTo)
    .sort((a, b) => a - b)
    .map((v) => [v, phAfter(ca, ACID_V, BASE_C, v)]);
}

/**
 * Whether the titration has reached the indicator's end point.
 * @param {Indicator} indicator
 * @param {number} ph
 */
export const reachedEnd = (indicator, ph) => ph >= indicator.endAt;

/**
 * Whether the base added went clearly past the equivalence point.
 * @param {number} ca
 * @param {number} vb
 */
export const overshot = (ca, vb) => vb - equivalenceVolume(ca) > CLEAN_OVERSHOOT;

/**
 * Concentration of the acid from the volume read off the burette:
 * C(HCl)·V(HCl) = C(NaOH)·V(NaOH).
 * @param {number} vb
 */
export const acidFromVolume = (vb) => (BASE_C * vb) / ACID_V;

/**
 * Judges a typed acid concentration against the reading on the burette.
 * @param {number} ca
 * @param {number} vb
 * @param {number | null} typed
 * @param {Indicator} indicator
 * @returns {'invalid' | 'too-early' | 'overshot' | 'wrong' | 'right'}
 */
export function judgeResult(ca, vb, typed, indicator) {
  if (typed === null || !Number.isFinite(typed)) return 'invalid';
  if (!reachedEnd(indicator, phAfter(ca, ACID_V, BASE_C, vb))) return 'too-early';
  if (overshot(ca, vb)) return 'overshot';
  return Math.abs(typed - acidFromVolume(vb)) <= TOLERANCE ? 'right' : 'wrong';
}
