/**
 * Bond facts shared by the chapter: the book's electronegativity thresholds
 * for the three kinds of bond, and counting σ and π bonds in a drawn molecule.
 */
import { tidy } from '#lib/core/number-format.js';
import { element } from '#lib/domain/elements.js';

/** @typedef {'nonpolar' | 'polar' | 'ion'} BondType */

/** Below this difference the bond is non-polar covalent. */
export const NONPOLAR_LIMIT = 0.4;
/** From this difference on the bond is ionic. */
export const ION_LIMIT = 1.7;

export const BOND_LABELS = /** @type {Record<BondType, string>} */ ({
  nonpolar: 'Cộng hoá trị không phân cực',
  polar: 'Cộng hoá trị phân cực',
  ion: 'Liên kết ion',
});

/** @type {BondType[]} */
export const BOND_ORDER = ['nonpolar', 'polar', 'ion'];

/** @param {string} symbol */
export function chi(symbol) {
  const value = element(symbol)?.electronegativity;
  if (value === null || value === undefined) throw new Error(`no electronegativity: ${symbol}`);
  return value;
}

/**
 * |Δχ| of two elements, exact to the table's two decimals.
 * @param {string} a @param {string} b
 */
export const deltaChi = (a, b) => tidy(Math.abs(chi(a) - chi(b)), 2);

/**
 * The kind of bond for a difference in electronegativity.
 * @param {number} delta
 * @returns {BondType}
 */
export function bondType(delta) {
  if (delta >= ION_LIMIT) return 'ion';
  return delta >= NONPOLAR_LIMIT ? 'polar' : 'nonpolar';
}

/**
 * σ and π bonds of a drawn molecule: every bond has one σ bond, each further
 * shared pair is a π bond.
 * @param {import('#lib/domain/molecule.js').Molecule} mol
 */
export function sigmaPi(mol) {
  return {
    sigma: mol.bonds.length,
    pi: mol.bonds.reduce((sum, b) => sum + b.order - 1, 0),
  };
}
