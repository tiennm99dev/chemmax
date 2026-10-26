/**
 * Atomic masses in amu rounded the way the grade 7 KNTT book prints them
 * (H 1, O 16, Cl 35,5, …), and molecular masses built from them. The domain
 * element table holds precise atomic weights (O 15,999), which give answers
 * that differ from the book's in the last digits.
 */
import { parseFormula } from '#lib/domain/formula.js';

/** Rounded atomic masses (amu) of the elements the chapter uses. */
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
  Si: 28,
  P: 31,
  S: 32,
  Cl: 35.5,
  Ar: 40,
  K: 39,
  Ca: 40,
  Fe: 56,
  Cu: 64,
  Zn: 65,
  Ag: 108,
  Ba: 137,
});

/**
 * Book atomic mass of an element.
 * @param {string} symbol
 * @returns {number}
 */
export function bookMass(symbol) {
  const m = BOOK_MASS[symbol];
  if (m === undefined) throw new Error(`No book mass for ${symbol}`);
  return m;
}

/**
 * Atom counts of a formula, in the order the elements first appear.
 * @param {string} formula
 * @returns {Array<[string, number]>}
 */
export function atomCounts(formula) {
  return Object.entries(parseFormula(formula).atoms);
}

/**
 * Molecular mass (amu) from atom counts, kept free of float noise: 36,5, not 36,499999.
 * @param {Array<[string, number]>} counts
 */
export function massOfCounts(counts) {
  const m = counts.reduce((s, [symbol, n]) => s + bookMass(symbol) * n, 0);
  return Math.round(m * 1000) / 1000;
}

/**
 * Molecular mass (amu) of a formula with the book's atomic masses: H2O → 18.
 * @param {string} formula
 */
export function moleculeMassAmu(formula) {
  return massOfCounts(atomCounts(formula));
}

/**
 * Mass share of each element in a compound, in percent (unrounded).
 * @param {string} formula
 * @returns {Array<{ symbol: string, count: number, mass: number, percent: number }>}
 */
export function percentComposition(formula) {
  const counts = atomCounts(formula);
  const total = massOfCounts(counts);
  return counts.map(([symbol, count]) => {
    const mass = Math.round(bookMass(symbol) * count * 1000) / 1000;
    return { symbol, count, mass, percent: (mass / total) * 100 };
  });
}
