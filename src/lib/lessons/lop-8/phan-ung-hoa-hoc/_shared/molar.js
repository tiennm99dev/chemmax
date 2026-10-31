/**
 * Molar quantities the way the grade 8 KNTT book computes them: rounded
 * atomic masses (H 1, O 16, Cl 35,5, from `#lib/domain/book-mass.js`), the
 * Avogadro number 6,022 × 10²³ and the molar volume of a gas at standard
 * conditions (25 °C, 1 bar), 24,79 L.
 */
import { parseFormula } from '#lib/domain/formula.js';
import { formatNumber, tidy } from '#lib/core/number-format.js';
import { BOOK_MASS } from '#lib/domain/book-mass.js';

/** Avogadro number N_A, particles per mol. */
export const AVOGADRO = 6.022e23;

/** Volume of 1 mol of any gas at 25 °C and 1 bar, in litres. */
export const MOLAR_VOLUME = 24.79;

/** Mean molar mass of air used by the book, g/mol. */
export const AIR_MOLAR_MASS = 29;

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
  return tidy(m, 6);
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
  let mant = tidy(value / 10 ** exp, decimals);
  if (Math.abs(mant) >= 10) {
    mant = tidy(mant / 10, decimals);
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
