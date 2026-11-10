/**
 * The esterification equilibrium
 *   CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O
 * with the equilibrium constant of about 4 found for this reaction. Starting
 * from `acid` mol of acid, `alcohol` mol of alcohol and `water` mol of
 * water, x mol of ester forms, where
 *   K = x(water + x) / ((acid − x)(alcohol − x)).
 * The yield is x over the amount of the limiting reactant.
 */

export const K_ESTER = 4;

/**
 * Moles of ester at equilibrium.
 * @param {number} acid
 * @param {number} alcohol
 * @param {number} [water]
 * @param {number} [k]
 */
export function esterAtEquilibrium(acid, alcohol, water = 0, k = K_ESTER) {
  const limit = Math.min(acid, alcohol);
  if (limit <= 0) return 0;
  // f falls from k·acid·alcohol > 0 at x = 0 to a negative value at x = limit.
  const f = (/** @type {number} */ x) => k * (acid - x) * (alcohol - x) - x * (water + x);
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
 * Amounts at equilibrium and the yield (0 to 1).
 * @param {number} acid
 * @param {number} alcohol
 * @param {number} [water]
 */
export function equilibrium(acid, alcohol, water = 0) {
  const x = esterAtEquilibrium(acid, alcohol, water);
  const limit = Math.min(acid, alcohol);
  return {
    acid: acid - x,
    alcohol: alcohol - x,
    ester: x,
    water: water + x,
    yield: limit > 0 ? x / limit : 0,
  };
}
