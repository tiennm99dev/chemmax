/**
 * The Gibbs free energy change ΔG = ΔH − TΔS, with ΔH in kJ and ΔS in J/K as
 * the book writes them, treated as constant over temperature.
 */

/**
 * ΔG in kJ at temperature T.
 * @param {number} dH kJ
 * @param {number} dS J/K
 * @param {number} t K
 */
export const gibbs = (dH, dS, t) => dH - (t * dS) / 1000;

/**
 * The temperature at which ΔG = 0, in K, or null when ΔS = 0.
 * @param {number} dH kJ
 * @param {number} dS J/K
 */
export const balanceTemperature = (dH, dS) => (dS === 0 ? null : (dH * 1000) / dS);

/**
 * The temperature spans in [0, tMax] on which ΔG < 0.
 * @param {number} dH
 * @param {number} dS
 * @param {number} tMax
 * @returns {Array<[number, number]>}
 */
export function spontaneousSpans(dH, dS, tMax) {
  const tc = balanceTemperature(dH, dS);
  if (tc === null) return dH < 0 ? [[0, tMax]] : [];
  const lo = dS > 0 ? Math.max(0, tc) : 0;
  const hi = dS > 0 ? tMax : Math.min(tMax, tc);
  return hi > lo ? [[lo, hi]] : [];
}

/**
 * Which of the book's four sign cases a reaction falls in, null when a sign is zero.
 * @param {number} dH
 * @param {number} dS
 * @returns {'always' | 'never' | 'hot' | 'cold' | null}
 */
export function signCase(dH, dS) {
  if (dH === 0 || dS === 0) return null;
  if (dH < 0) return dS > 0 ? 'always' : 'cold';
  return dS > 0 ? 'hot' : 'never';
}

/**
 * A round scale for the ΔG axis covering both ends of the line.
 * @param {number} dH
 * @param {number} dS
 * @param {number} tMax
 * @returns {{ min: number, max: number, ticks: number[] }}
 */
export function gibbsAxis(dH, dS, tMax) {
  const a = gibbs(dH, dS, 0);
  const b = gibbs(dH, dS, tMax);
  const span = Math.max(a, b, 0) - Math.min(a, b, 0) || 1;
  const step = [10, 20, 50, 100, 200, 500, 1000, 2000].find((s) => span / s <= 5) ?? 5000;
  const min = Math.floor(Math.min(a, b, 0) / step) * step;
  const max = Math.ceil(Math.max(a, b, 0) / step) * step;
  /** @type {number[]} */
  const ticks = [];
  for (let v = min; v <= max; v += step) ticks.push(v);
  return { min, max, ticks };
}
