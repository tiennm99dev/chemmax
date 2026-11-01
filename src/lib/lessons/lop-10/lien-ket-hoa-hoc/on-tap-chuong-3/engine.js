/**
 * The decision path from a difference in electronegativity to a kind of bond:
 * two yes/no questions, walked by the learner.
 */
import { formatNumber } from '#lib/core/number-format.js';
import { ION_LIMIT, NONPOLAR_LIMIT, bondType, chi, deltaChi } from '../_shared/bonds.js';

/** @typedef {import('../_shared/bonds.js').BondType} BondType */
/** @typedef {{ compound: string, a: string, b: string, note?: string }} TreeItem */

/** @type {TreeItem[]} */
export const ITEMS = [
  { compound: 'NaCl', a: 'Na', b: 'Cl' },
  { compound: 'HCl', a: 'H', b: 'Cl' },
  { compound: 'Cl2', a: 'Cl', b: 'Cl' },
  { compound: 'H2O', a: 'H', b: 'O' },
  { compound: 'MgO', a: 'Mg', b: 'O' },
  { compound: 'CH4', a: 'C', b: 'H' },
  { compound: 'KF', a: 'K', b: 'F' },
  { compound: 'CO2', a: 'C', b: 'O' },
  { compound: 'N2', a: 'N', b: 'N' },
  {
    compound: 'H2S',
    a: 'H',
    b: 'S',
    note: 'Hiệu độ âm điện rất gần ngưỡng 0,4 nên liên kết H–S chỉ phân cực rất yếu.',
  },
  {
    compound: 'AlCl3',
    a: 'Al',
    b: 'Cl',
    note: 'Al là kim loại nhưng hiệu độ âm điện dưới 1,7, nên theo tiêu chí này liên kết là cộng hoá trị phân cực.',
  },
];

export const QUESTIONS = [
  { limit: ION_LIMIT, text: '$|\\Delta\\chi| \\ge 1{,}7$?' },
  { limit: NONPOLAR_LIMIT, text: '$|\\Delta\\chi| \\ge 0{,}4$?' },
];

/**
 * The right answer at step `step` of the path: is the difference at least the limit?
 * @param {TreeItem} item @param {number} step
 */
export function rightAnswer(item, step) {
  return deltaChi(item.a, item.b) >= QUESTIONS[step].limit;
}

/**
 * The next step after a correct answer, or the leaf the path ends on.
 * @param {number} step @param {boolean} yes
 * @returns {number | BondType}
 */
export function nextStep(step, yes) {
  if (step === 0) return yes ? 'ion' : 1;
  return yes ? 'polar' : 'nonpolar';
}

/** @param {TreeItem} item */
export const itemType = (item) => bondType(deltaChi(item.a, item.b));

/**
 * The arithmetic for a pair, with the book's decimal comma.
 * @param {TreeItem} item
 */
export function deltaLine(item) {
  const big = Math.max(chi(item.a), chi(item.b));
  const small = Math.min(chi(item.a), chi(item.b));
  return `|Δχ| = ${formatNumber(big)} − ${formatNumber(small)} = ${formatNumber(deltaChi(item.a, item.b))}`;
}
