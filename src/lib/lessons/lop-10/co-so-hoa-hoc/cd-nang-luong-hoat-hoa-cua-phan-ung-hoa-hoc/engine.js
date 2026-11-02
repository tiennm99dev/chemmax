/**
 * The Arrhenius equation k = A·e^(−Ea/RT) and the energy profile drawn for it.
 * Activation energies are in kJ/mol; `R` and the exponents work in joules.
 */
import { numTex } from '#lib/core/number-format.js';

/** Gas constant, in J/(mol·K). */
export const R = 8.314;

/**
 * The fraction e^(−Ea/RT).
 * @param {number} ea activation energy, kJ/mol
 * @param {number} t temperature, K
 */
export const boltzmannShare = (ea, t) => Math.exp((-ea * 1000) / (R * t));

/**
 * The rate constant from the Arrhenius equation.
 * @param {number} a pre-exponential factor
 * @param {number} ea kJ/mol
 * @param {number} t K
 */
export const arrhenius = (a, ea, t) => a * boltzmannShare(ea, t);

/**
 * k₂/k₁ for one reaction going from temperature t1 to t2.
 * @param {number} ea kJ/mol
 * @param {number} t1 K
 * @param {number} t2 K
 */
export const ratioOnHeating = (ea, t1, t2) => Math.exp(((ea * 1000) / R) * (1 / t1 - 1 / t2));

/**
 * The activation energy, in kJ/mol, that gives the ratio k₂/k₁ between t1 and t2.
 * @param {number} ratio
 * @param {number} t1 K
 * @param {number} t2 K
 */
export const activationFromRatio = (ratio, t1, t2) =>
  (R * Math.log(ratio)) / (1 / t1 - 1 / t2) / 1000;

/**
 * How many times a catalyst speeds a reaction at temperature t, the factor A unchanged.
 * @param {number} ea without catalyst, kJ/mol
 * @param {number} eaCatalyst with catalyst, kJ/mol
 * @param {number} t K
 */
export const catalystGain = (ea, eaCatalyst, t) => Math.exp(((ea - eaCatalyst) * 1000) / (R * t));

/**
 * The energy along the reaction path, in kJ/mol: flat at 0 for the reactants,
 * up to `ea`, then down to `dH` for the products.
 * @param {number} ea
 * @param {number} dH
 * @param {number} [steps]
 * @returns {Array<{ s: number, e: number }>} s runs from 0 to 1
 */
export function energyProfile(ea, dH, steps = 60) {
  const start = 0.14;
  const peak = 0.46;
  const end = 0.78;
  /** @type {Array<{ s: number, e: number }>} */
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const s = i / steps;
    /** @type {number} */
    let e;
    if (s <= start) e = 0;
    else if (s <= peak) e = (ea * (1 - Math.cos((Math.PI * (s - start)) / (peak - start)))) / 2;
    else if (s <= end) {
      const u = (1 - Math.cos((Math.PI * (s - peak)) / (end - peak))) / 2;
      e = ea + (dH - ea) * u;
    } else e = dH;
    out.push({ s, e });
  }
  return out;
}

/**
 * A positive number as TeX in the book's scientific notation: 5.87e-4 →
 * `5{,}87 \cdot 10^{-4}`; numbers from 0,01 up to 1000 stay plain.
 * @param {number} x
 * @param {number} [digits] decimals of the mantissa
 */
export function sciTex(x, digits = 2) {
  if (x >= 0.01 && x < 1000) return numTex(x, digits);
  let exp = Math.floor(Math.log10(x));
  let mantissa = Number((x / 10 ** exp).toFixed(digits));
  if (mantissa >= 10) {
    mantissa /= 10;
    exp += 1;
  }
  return `${numTex(mantissa, digits)} \\cdot 10^{${exp}}`;
}
