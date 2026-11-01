/**
 * The electronegativity bar: which pairs of elements can be tried, how far the
 * shared pair leans for a given difference, and the verdict on a guess.
 */
import { numTex } from '#lib/core/number-format.js';
import { BOND_LABELS, ION_LIMIT, bondType, chi, deltaChi } from '../_shared/bonds.js';

/** @typedef {import('../_shared/bonds.js').BondType} BondType */

export const FIRST_ATOMS = ['H', 'C', 'N', 'P', 'S', 'Si', 'Cl', 'Al', 'Mg', 'Ca', 'Na', 'K'];
const SECOND_ATOMS = ['H', 'C', 'N', 'O', 'F', 'S', 'Cl', 'Br', 'I'];
const METALS = new Set(['Al', 'Mg', 'Ca', 'Na', 'K']);

/** Right end of the bar: the largest difference among the elements offered is K–F. */
export const BAR_MAX = 3.3;

/**
 * Partners offered for the first atom. A metal only pairs with a typical
 * non-metal here: its bonds to H or C are not in this grade's scope.
 * @param {string} a
 */
export const partnersOf = (a) =>
  METALS.has(a) ? SECOND_ATOMS.filter((s) => s !== 'H' && s !== 'C') : SECOND_ATOMS;

/**
 * Everything the bar shows for a pair of atoms.
 * @param {string} a @param {string} b
 */
export function pairFacts(a, b) {
  const delta = deltaChi(a, b);
  const type = bondType(delta);
  const big = chi(a) >= chi(b) ? a : b;
  const small = big === a ? b : a;
  return { delta, type, big, small, lean: leanOf(delta) * (chi(b) >= chi(a) ? 1 : -1) };
}

/**
 * How far the shared pair moves off-centre, 0 to 1 (1: fully on the other atom).
 * The ion limit is the jump to a whole electron moved, so polar bonds stay below it.
 * @param {number} delta
 */
export function leanOf(delta) {
  return delta >= ION_LIMIT ? 1 : (delta / ION_LIMIT) * 0.8;
}

/**
 * Marker position on the bar, in percent.
 * @param {number} delta
 */
export const barPercent = (delta) => Math.min(100, (delta / BAR_MAX) * 100);

/**
 * The sentence for a pair: the arithmetic and what it means for the electrons.
 * @param {string} a @param {string} b
 */
export function pairSentence(a, b) {
  const f = pairFacts(a, b);
  const calc = `$|\\Delta\\chi| = ${numTex(f.delta)}$`;
  if (a !== b && [a, b].includes('H') && [a, b].includes('F')) {
    return `${calc}: từ $1{,}7$ trở lên nên theo ngưỡng thì xếp vào liên kết ion. Thực tế HF là phân tử cộng hoá trị phân cực rất mạnh: các ngưỡng chỉ là quy ước gần đúng.`;
  }
  if (f.type === 'nonpolar') {
    return `${calc}: nhỏ hơn $0{,}4$, cặp electron chung gần như nằm giữa hai nguyên tử ${a} và ${b}. Đây là liên kết cộng hoá trị không phân cực.`;
  }
  if (f.type === 'polar') {
    return `${calc}: từ $0{,}4$ đến dưới $1{,}7$, cặp electron chung lệch về phía ${f.big}, nguyên tử có độ âm điện lớn hơn. Đây là liên kết cộng hoá trị phân cực.`;
  }
  return `${calc}: từ $1{,}7$ trở lên, ${f.small} nhường hẳn electron cho ${f.big}, tạo các ion trái dấu. Đây là liên kết ion.`;
}

/**
 * The verdict on a guess at the kind of bond.
 * @param {string} a @param {string} b @param {BondType} guess
 */
export function judgeGuess(a, b, guess) {
  const type = pairFacts(a, b).type;
  return {
    ok: guess === type,
    text:
      guess === type
        ? `Đúng! ${pairSentence(a, b)}`
        : `Chưa đúng, không phải "${BOND_LABELS[guess]}". ${pairSentence(a, b)}`,
  };
}

/** Molecules whose σ and π bonds the learner counts, simple to hardest. */
export const COUNT_MOLECULES = [
  'h2',
  'hcl',
  'h2o',
  'nh3',
  'ch4',
  'o2',
  'n2',
  'co2',
  'c2h4',
  'c2h2',
];
