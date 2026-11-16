/**
 * How far 1 mol of an ester is hydrolysed.
 *
 * In acid the reaction RCOOR' + H2O ⇌ RCOOH + R'OH is reversible. Its
 * constant is taken as 1/4, the inverse of the constant of about 4 found
 * for the esterification of acetic acid with ethanol, so from 1 mol of ester
 * and `water` mol of water x mol is hydrolysed where
 *   x² = (1 − x)(water − x) / 4.
 * In a sodium hydroxide solution the reaction is one-way: every mole of
 * NaOH hydrolyses one mole of ester until one of them runs out.
 *
 * Heating time is shown with a simple first-order approach to that end
 * point, so the widget can play the reaction out; only the end point
 * carries the chemistry.
 */
import { tidy } from '#lib/core/number-format.js';

export const K_HYDROLYSIS = 1 / 4;

/** Minutes for the reaction to cover about 63% of its way. */
export const TAU = 12;

/**
 * Moles of ester hydrolysed at equilibrium in acid, from 1 mol of ester.
 * @param {number} water mol of water
 * @param {number} [k]
 */
export function acidExtent(water, k = K_HYDROLYSIS) {
  const limit = Math.min(1, water);
  if (limit <= 0) return 0;
  // f falls from k·water > 0 at x = 0 to −limit² < 0 at x = limit.
  const f = (/** @type {number} */ x) => k * (1 - x) * (water - x) - x * x;
  let lo = 0;
  let hi = limit;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) > 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Moles of ester hydrolysed by NaOH, from 1 mol of ester.
 * @param {number} naoh mol of NaOH
 */
export function baseExtent(naoh) {
  return Math.max(0, Math.min(1, naoh));
}

/**
 * Amounts after heating `minutes` in the chosen medium, from 1 mol of ester.
 * @param {'acid' | 'base'} medium
 * @param {number} reagent mol of water (acid) or of NaOH (base)
 * @param {number} minutes
 */
export function hydrolysis(medium, reagent, minutes) {
  const end = medium === 'acid' ? acidExtent(reagent) : baseExtent(reagent);
  const share = minutes <= 0 ? 0 : 1 - Math.exp(-minutes / TAU);
  // Within half a percent of the end point the run counts as finished.
  const settled = end - end * share < 0.005;
  const x = settled ? end : end * share;
  return {
    end: tidy(end, 6),
    settled,
    ester: tidy(1 - x, 6),
    /** Carboxylic acid in acid, sodium carboxylate in base. */
    acidPart: tidy(x, 6),
    alcohol: tidy(x, 6),
    reagentLeft: tidy(reagent - x, 6),
  };
}
