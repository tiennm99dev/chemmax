/**
 * Formula builder for the grade 7 lesson on valence: pick an element and a
 * partner (element or group of atoms), give each its valence, choose the
 * subscripts and check the valence rule a·x = b·y of the formula AxBy.
 * Valences follow the KNTT table of common elements and groups.
 */
import { percentComposition, moleculeMassAmu } from '../_shared/book-masses.js';

/** Roman numerals the book writes valences with. */
export const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

/** Highest valence the builder offers. */
export const MAX_VALENCE = 6;

/** Largest subscript the builder offers. */
export const MAX_INDEX = 6;

/**
 * @typedef {object} Part
 * @property {string} id
 * @property {string} symbol as written in the formula
 * @property {string} name
 * @property {number[]} valences from the book's valence table
 * @property {boolean} [group] a group of atoms, bracketed when its subscript is above 1
 */

/** First part of the formula: metals, hydrogen and some non-metals. */
export const FIRST = /** @type {Part[]} */ ([
  { id: 'H', symbol: 'H', name: 'hydrogen', valences: [1] },
  { id: 'Na', symbol: 'Na', name: 'sodium', valences: [1] },
  { id: 'K', symbol: 'K', name: 'potassium', valences: [1] },
  { id: 'Ag', symbol: 'Ag', name: 'silver', valences: [1] },
  { id: 'Mg', symbol: 'Mg', name: 'magnesium', valences: [2] },
  { id: 'Ca', symbol: 'Ca', name: 'calcium', valences: [2] },
  { id: 'Ba', symbol: 'Ba', name: 'barium', valences: [2] },
  { id: 'Zn', symbol: 'Zn', name: 'zinc', valences: [2] },
  { id: 'Cu', symbol: 'Cu', name: 'copper', valences: [1, 2] },
  { id: 'Fe', symbol: 'Fe', name: 'iron', valences: [2, 3] },
  { id: 'Al', symbol: 'Al', name: 'aluminium', valences: [3] },
  { id: 'C', symbol: 'C', name: 'carbon', valences: [2, 4] },
  { id: 'S', symbol: 'S', name: 'sulfur', valences: [2, 4, 6] },
  { id: 'P', symbol: 'P', name: 'phosphorus', valences: [3, 5] },
]);

/** Second part: non-metals and groups of atoms. */
export const SECOND = /** @type {Part[]} */ ([
  { id: 'O', symbol: 'O', name: 'oxygen', valences: [2] },
  { id: 'Cl', symbol: 'Cl', name: 'chlorine', valences: [1] },
  { id: 'S2', symbol: 'S', name: 'sulfur', valences: [2] },
  { id: 'OH', symbol: 'OH', name: 'nhóm OH', valences: [1], group: true },
  { id: 'NO3', symbol: 'NO3', name: 'nhóm NO₃', valences: [1], group: true },
  { id: 'SO4', symbol: 'SO4', name: 'nhóm SO₄', valences: [2], group: true },
  { id: 'CO3', symbol: 'CO3', name: 'nhóm CO₃', valences: [2], group: true },
  { id: 'PO4', symbol: 'PO4', name: 'nhóm PO₄', valences: [3], group: true },
]);

/** Partners each non-metal first part combines with; metals take every partner. */
const NONMETAL_PARTNERS = /** @type {Record<string, string[]>} */ ({
  H: ['O', 'Cl', 'S2', 'NO3', 'SO4', 'CO3', 'PO4'],
  C: ['O'],
  S: ['O'],
  P: ['O', 'Cl'],
});

/**
 * Formulas that obey the valence rule but name substances that do not exist
 * or break down at once; the builder says so instead of presenting them.
 */
const UNSTABLE = new Set([
  'AgOH',
  'CuOH',
  'CuNO3',
  'Cu2CO3',
  'Al2(CO3)3',
  'Fe2(CO3)3',
  'Fe2S3',
  'H2CO3',
  'SO',
]);

/** @param {string} id */
export const firstPart = (id) => FIRST.find((p) => p.id === id) ?? FIRST[0];
/** @param {string} id */
export const secondPart = (id) => SECOND.find((p) => p.id === id) ?? SECOND[0];

/**
 * Partners the first part can be combined with.
 * @param {string} firstId
 */
export function partnersOf(firstId) {
  const ids = NONMETAL_PARTNERS[firstId];
  return ids ? SECOND.filter((p) => ids.includes(p.id)) : SECOND;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Formula text with digit subscripts: (Al, 2, SO4, 3) → "Al2(SO4)3".
 * @param {Part} A
 * @param {number} x
 * @param {Part} B
 * @param {number} y
 */
export function buildFormula(A, x, B, y) {
  const first = x === 1 ? A.symbol : `${A.symbol}${x}`;
  const second = y === 1 ? B.symbol : B.group ? `(${B.symbol})${y}` : `${B.symbol}${y}`;
  return first + second;
}

/**
 * Subscripts in lowest terms from the valences: x : y = b : a.
 * @param {number} a valence of the first part
 * @param {number} b valence of the second part
 * @returns {[number, number]}
 */
export function lowestIndexes(a, b) {
  const g = gcd(a, b);
  return [b / g, a / g];
}

/**
 * The valence rule for AxBy: a·x = b·y, and whether x : y is in lowest terms.
 * @param {number} a
 * @param {number} x
 * @param {number} b
 * @param {number} y
 */
export function valenceRule(a, x, b, y) {
  return { left: a * x, right: b * y, holds: a * x === b * y, lowest: gcd(x, y) === 1 };
}

/**
 * Valence of A worked out from a formula AxBy and the valence b of B:
 * a = b·y / x. Null when it is not a whole number.
 * @param {number} x
 * @param {number} b
 * @param {number} y
 */
export function valenceFrom(x, b, y) {
  const a = (b * y) / x;
  return Number.isInteger(a) ? a : null;
}

/**
 * Everything the builder reports for the learner's choices.
 * @param {{ first: string, second: string, a: number, b: number, x: number, y: number }} c
 */
export function evaluate(c) {
  const A = firstPart(c.first);
  const B = secondPart(c.second);
  const aOk = A.valences.includes(c.a);
  const bOk = B.valences.includes(c.b);
  const rule = valenceRule(c.a, c.x, c.b, c.y);
  const formula = buildFormula(A, c.x, B, c.y);
  const correct = aOk && bOk && rule.holds && rule.lowest;
  /** @type {'valence-a' | 'valence-b' | 'rule' | 'lowest' | 'unstable' | 'ok'} */
  let status = 'ok';
  if (!aOk) status = 'valence-a';
  else if (!bOk) status = 'valence-b';
  else if (!rule.holds) status = 'rule';
  else if (!rule.lowest) status = 'lowest';
  else if (UNSTABLE.has(formula)) status = 'unstable';
  return {
    A,
    B,
    formula,
    rule,
    status,
    correct,
    mass: correct ? moleculeMassAmu(formula) : null,
    percents: correct ? percentComposition(formula) : [],
  };
}

/**
 * Feedback sentence for an evaluation, pointing at the first thing to fix.
 * @param {ReturnType<typeof evaluate>} r
 * @param {number} a
 * @param {number} b
 */
export function feedback(r, a, b) {
  const list = (/** @type {Part} */ p) => p.valences.map((v) => ROMAN[v]).join(' hoặc ');
  switch (r.status) {
    case 'valence-a':
      return `Theo bảng hoá trị, ${r.A.name} có hoá trị ${list(r.A)}, không phải ${ROMAN[a]}.`;
    case 'valence-b':
      return `Theo bảng hoá trị, ${r.B.name} có hoá trị ${list(r.B)}, không phải ${ROMAN[b]}.`;
    case 'rule':
      return `Chưa đúng quy tắc hoá trị: ${ROMAN[a]} × ${r.rule.left / a} = ${r.rule.left} nhưng ${ROMAN[b]} × ${r.rule.right / b} = ${r.rule.right}. Thay đổi chỉ số để hai tích bằng nhau.`;
    case 'lowest':
      return `Hai tích bằng nhau (${r.rule.left} = ${r.rule.right}) nhưng chỉ số chưa tối giản: hãy chia cả hai chỉ số cho ước chung.`;
    case 'unstable':
      return `Công thức đúng quy tắc hoá trị (${r.rule.left} = ${r.rule.right}), nhưng chất này không bền hoặc không tồn tại trong thực tế. Hãy thử cặp khác.`;
    default:
      return `Đúng quy tắc hoá trị: ${ROMAN[a]} × ${r.rule.left / a} = ${ROMAN[b]} × ${r.rule.right / b} = ${r.rule.left}.`;
  }
}
