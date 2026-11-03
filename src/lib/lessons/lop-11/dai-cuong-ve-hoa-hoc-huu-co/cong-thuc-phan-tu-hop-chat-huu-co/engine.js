/**
 * From mass percentages and a mass spectrum to a molecular formula, the way the
 * book does it: divide each percentage by the atomic mass, reduce to the
 * smallest whole-number ratio, then find n from the molecular mass. Peak heights
 * are rounded from published spectra and only matter for how the chart looks.
 */
import { BOOK_MASS, massOfCounts } from '#lib/domain/book-mass.js';

/** @typedef {'C' | 'H' | 'N' | 'O'} El */
/** @typedef {Partial<Record<El, number>>} Percent */
/** @typedef {[number, number]} MsPeak m/z and relative height (0 – 100) */
/**
 * @typedef {object} Sample
 * @property {string} id
 * @property {string} name
 * @property {Percent} percent
 * @property {MsPeak[]} peaks ascending m/z
 * @property {string} formula the molecular formula
 */

/** Hill order, the way a molecular formula is written. @type {El[]} */
export const ELEMENTS = ['C', 'H', 'N', 'O'];

/** @type {Sample[]} */
export const SAMPLES = [
  {
    id: 'acetic-acid',
    name: 'Acetic acid',
    percent: { C: 40, H: 6.67, O: 53.33 },
    peaks: [
      [15, 30],
      [43, 100],
      [45, 90],
      [60, 70],
    ],
    formula: 'C2H4O2',
  },
  {
    id: 'benzene',
    name: 'Benzene',
    percent: { C: 92.31, H: 7.69 },
    peaks: [
      [39, 12],
      [51, 18],
      [52, 20],
      [77, 15],
      [78, 100],
    ],
    formula: 'C6H6',
  },
  {
    id: 'ethyl-acetate',
    name: 'Ethyl acetate',
    percent: { C: 54.55, H: 9.09, O: 36.36 },
    peaks: [
      [29, 40],
      [43, 100],
      [45, 20],
      [61, 25],
      [70, 15],
      [88, 10],
    ],
    formula: 'C4H8O2',
  },
  {
    id: 'camphor',
    name: 'Camphor',
    percent: { C: 78.94, H: 10.53, O: 10.53 },
    peaks: [
      [41, 50],
      [81, 80],
      [95, 100],
      [108, 45],
      [152, 25],
    ],
    formula: 'C10H16O',
  },
  {
    id: 'eugenol',
    name: 'Eugenol',
    percent: { C: 73.17, H: 7.31, O: 19.52 },
    peaks: [
      [77, 20],
      [103, 25],
      [131, 25],
      [149, 35],
      [164, 100],
    ],
    formula: 'C10H12O2',
  },
  {
    id: 'glycine',
    name: 'Glycine',
    percent: { C: 32, H: 6.67, N: 18.67, O: 42.66 },
    peaks: [
      [28, 15],
      [30, 100],
      [45, 15],
      [75, 20],
    ],
    formula: 'C2H5NO2',
  },
];

/**
 * The elements present, each with its percent, its share (percent ÷ atomic mass)
 * and that share divided by the smallest one.
 * @param {Percent} percent
 * @returns {{ el: El, percent: number, share: number, relative: number }[]}
 */
export function ratioRows(percent) {
  const rows = ELEMENTS.flatMap((el) => {
    const p = percent[el] ?? 0;
    return p > 0 ? [{ el, percent: p, share: p / BOOK_MASS[el] }] : [];
  });
  const least = Math.min(...rows.map((r) => r.share));
  return rows.map((r) => ({ ...r, relative: r.share / least }));
}

/** How far a scaled ratio may sit from a whole number, for percentages rounded to two decimals. */
const WHOLE_TOLERANCE = 0.08;
const MAX_MULTIPLIER = 10;

/**
 * Lowest whole-number ratio of the atoms, or null when no small multiplier
 * brings the ratio close to whole numbers.
 * @param {Percent} percent
 * @returns {{ counts: Partial<Record<El, number>>, multiplier: number } | null}
 */
export function simplestCounts(percent) {
  const rows = ratioRows(percent);
  if (rows.length === 0) return null;
  for (let multiplier = 1; multiplier <= MAX_MULTIPLIER; multiplier++) {
    const scaled = rows.map((r) => r.relative * multiplier);
    if (scaled.every((v) => Math.abs(v - Math.round(v)) <= WHOLE_TOLERANCE)) {
      return {
        counts: Object.fromEntries(rows.map((r, i) => [r.el, Math.round(scaled[i])])),
        multiplier,
      };
    }
  }
  return null;
}

/**
 * Writes atom counts in Hill order: { C: 2, H: 4, O: 2 } → 'C2H4O2'.
 * @param {Partial<Record<El, number>>} counts
 */
export function formulaText(counts) {
  return ELEMENTS.map((el) => {
    const n = counts[el] ?? 0;
    if (n === 0) return '';
    return n === 1 ? el : `${el}${n}`;
  }).join('');
}

/** Allows a molecular mass given to one decimal, but not a fragment one unit off. */
const WHOLE_MASS_TOLERANCE = 0.015;

/**
 * The factor n and, when it is whole, the molecular formula.
 * @param {Partial<Record<El, number>>} counts the simplest formula
 * @param {number} molecularMass
 * @returns {{ unit: number, ratio: number, n: number | null, formula: string | null }}
 */
export function molecularFrom(counts, molecularMass) {
  const unit = massOfCounts(Object.entries(counts));
  const ratio = molecularMass / unit;
  const n = Math.round(ratio);
  if (n < 1 || Math.abs(ratio - n) > WHOLE_MASS_TOLERANCE)
    return { unit, ratio, n: null, formula: null };
  const scaled = Object.fromEntries(Object.entries(counts).map(([el, c]) => [el, c * n]));
  return { unit, ratio, n, formula: formulaText(scaled) };
}

/**
 * The molecular ion of a simple compound: the peak with the largest m/z.
 * @param {MsPeak[]} peaks
 */
export function molecularIon(peaks) {
  return Math.max(...peaks.map((p) => p[0]));
}

/**
 * The share of oxygen left once the other elements are given, null when they
 * already exceed 100 % or one of them is negative.
 * @param {number} c
 * @param {number} h
 * @param {number} n
 */
export function oxygenLeft(c, h, n) {
  const rest = 100 - c - h - n;
  if (rest < -0.005 || c < 0 || h < 0 || n < 0) return null;
  return Math.max(0, Math.round(rest * 100) / 100);
}
