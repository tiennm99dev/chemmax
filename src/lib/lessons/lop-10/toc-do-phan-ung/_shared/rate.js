/**
 * The formulas of the reaction rate chapter: the average rate from two
 * readings, the rate law of a simple reaction and the Van't Hoff temperature
 * factor.
 */
import { tidy } from '#lib/core/number-format.js';

/**
 * Average rate between two readings of one species. Always positive: a reactant
 * falls and a product rises, and the rate is divided by the species' coefficient.
 * @param {number} from reading at `t1`
 * @param {number} to reading at `t2`
 * @param {number} t1
 * @param {number} t2
 * @param {number} [coefficient]
 */
export function averageRate(from, to, t1, t2, coefficient = 1) {
  return tidy(Math.abs(to - from) / (coefficient * (t2 - t1)));
}

/**
 * Rate of a simple reaction: v = k · C₁^a · C₂^b …
 * @param {number} k rate constant
 * @param {Array<[number, number]>} factors `[concentration, order]` of each reactant
 */
export function rateLaw(k, factors) {
  return tidy(factors.reduce((v, [c, order]) => v * c ** order, k));
}

/**
 * How many times the rate grows on heating by `rise` degrees: γ^(rise/10).
 * @param {number} gamma Van't Hoff coefficient
 * @param {number} rise T₂ − T₁ in °C
 */
export function vantHoff(gamma, rise) {
  return tidy(gamma ** (rise / 10));
}
