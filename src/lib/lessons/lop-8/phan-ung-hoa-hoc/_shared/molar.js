/**
 * Molar quantities the way the grade 8 KNTT book computes them: rounded
 * atomic masses (H 1, O 16, Cl 35,5), the Avogadro number 6,022 × 10²³ and
 * the molar volume of a gas at standard conditions (25 °C, 1 bar), 24,79 L.
 * The domain element table holds precise atomic weights (O 15,999), which
 * give answers that differ from the book's in the last digits.
 */
import { parseFormula } from '#lib/domain/formula.js';
import { formatNumber } from '#lib/core/number-format.js';

/** Avogadro number N_A, particles per mol. */
export const AVOGADRO = 6.022e23;

/** Volume of 1 mol of any gas at 25 °C and 1 bar, in litres. */
export const MOLAR_VOLUME = 24.79;

/** Mean molar mass of air used by the book, g/mol. */
export const AIR_MOLAR_MASS = 29;

/** Rounded atomic masses (amu, so also g/mol) used by the book. */
export const BOOK_MASS = /** @type {Record<string, number>} */ ({
  H: 1,
  He: 4,
  C: 12,
  N: 14,
  O: 16,
  F: 19,
  Ne: 20,
  Na: 23,
  Mg: 24,
  Al: 27,
  P: 31,
  S: 32,
  Cl: 35.5,
  Ar: 40,
  K: 39,
  Ca: 40,
  Mn: 55,
  Fe: 56,
  Cu: 64,
  Zn: 65,
  Ag: 108,
  Ba: 137,
});

/**
 * Removes float noise from a computed value: 36.49999999 → 36.5.
 * @param {number} v
 * @param {number} [digits] significant decimals kept
 */
export function clean(v, digits = 9) {
  const f = 10 ** digits;
  return Math.round(v * f) / f;
}

/**
 * Molar mass in g/mol with the book's atomic masses: H2O → 18, HCl → 36,5.
 * @param {string} formula
 */
export function molarMass(formula) {
  const { atoms } = parseFormula(formula);
  let m = 0;
  for (const [symbol, n] of Object.entries(atoms)) {
    const a = BOOK_MASS[symbol];
    if (a === undefined) throw new Error(`No book mass for ${symbol}`);
    m += a * n;
  }
  return clean(m, 6);
}

/**
 * A large count in Vietnamese scientific notation with the mantissa in
 * [1, 10): 1.2044e24 → "1,2044 × 10²⁴".
 * @param {number} value
 * @param {number} [decimals] decimals kept in the mantissa
 */
export function sciText(value, decimals = 4) {
  if (value === 0) return '0';
  let exp = Math.floor(Math.log10(Math.abs(value)));
  let mant = clean(value / 10 ** exp, decimals);
  if (Math.abs(mant) >= 10) {
    mant = clean(mant / 10, decimals);
    exp += 1;
  }
  if (exp === 0) return formatNumber(mant, decimals);
  const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const e = String(Math.abs(exp))
    .split('')
    .map((d) => sup[Number(d)])
    .join('');
  return `${formatNumber(mant, decimals)} × 10${exp < 0 ? '⁻' : ''}${e}`;
}
