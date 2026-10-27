/**
 * Acetic acid: its reactions as an acid, and the esterification
 * CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O. In the ester-building game the
 * learner cuts one piece off the –COOH group of the acid and one off the
 * –OH group of the alcohol; the two pieces must make water, and the acid
 * gives up its –OH while the alcohol gives up the H of its –OH.
 */

/** @typedef {'OH' | 'H'} Piece */

/**
 * Outcome of cutting `acidPiece` off CH3–CO–OH and `alcoholPiece` off
 * H–O–C2H5 and joining the rest.
 * @param {Piece} acidPiece
 * @param {Piece} alcoholPiece
 * @returns {{ status: 'ester' | 'swapped' | 'no-water', leaving: string }}
 */
export function esterify(acidPiece, alcoholPiece) {
  if (acidPiece === alcoholPiece) {
    return { status: 'no-water', leaving: acidPiece === 'H' ? 'H2' : 'H2O2' };
  }
  return { status: acidPiece === 'OH' ? 'ester' : 'swapped', leaving: 'H2O' };
}

/** Book molar masses, g/mol. */
export const MOLAR_MASS = { acid: 60, alcohol: 46, ester: 88, water: 18 };

/**
 * Ethyl acetate from given amounts in hundredths of a mole and a yield in
 * percent. The reaction goes one to one, so the smaller amount limits it.
 * @param {number} acidCmol
 * @param {number} alcoholCmol
 * @param {number} yieldPercent
 */
export function esterYield(acidCmol, alcoholCmol, yieldPercent) {
  const limiting = acidCmol <= alcoholCmol ? 'acid' : 'alcohol';
  const theoreticalCmol = Math.min(acidCmol, alcoholCmol);
  const molEster = (theoreticalCmol * yieldPercent) / 10_000;
  return {
    limiting,
    theoreticalMol: theoreticalCmol / 100,
    molEster,
    massEster: Math.round(molEster * MOLAR_MASS.ester * 10_000) / 10_000,
  };
}

/**
 * Reagents for the acid-properties bench: what is seen and the equation,
 * in book-style text.
 * @typedef {{
 *   id: string,
 *   name: string,
 *   kind: string,
 *   reacts: boolean,
 *   sign: string,
 *   equation?: string,
 *   rule: string,
 *   before?: string,
 *   liquid: string,
 *   solid?: string,
 *   gas?: boolean,
 * }} Reagent
 */

/** @type {Reagent[]} */
export const REAGENTS = [
  {
    id: 'litmus',
    name: 'Giấy quỳ tím',
    kind: 'Chất chỉ thị',
    reacts: true,
    sign: 'Quỳ tím chuyển sang màu đỏ.',
    rule: 'Acetic acid làm quỳ tím hoá đỏ như các acid khác.',
    liquid: '#f1f5f9',
    solid: '#dc2626',
  },
  {
    id: 'mg',
    name: 'Magnesium (Mg)',
    kind: 'Kim loại',
    reacts: true,
    sign: 'Mảnh Mg tan dần, có bọt khí không màu thoát ra.',
    equation: '2CH3COOH + Mg → (CH3COO)2Mg + H2↑',
    rule: 'Acid + kim loại (đứng trước H) → muối + hydrogen.',
    liquid: '#f1f5f9',
    solid: '#94a3b8',
    gas: true,
  },
  {
    id: 'cuo',
    name: 'Copper(II) oxide (CuO)',
    kind: 'Oxide base',
    reacts: true,
    sign: 'Chất rắn màu đen tan dần, dung dịch chuyển sang màu xanh lam.',
    equation: '2CH3COOH + CuO → (CH3COO)2Cu + H2O',
    rule: 'Acid + oxide base → muối + nước.',
    liquid: '#7dd3fc',
    solid: '#1e293b',
  },
  {
    id: 'naoh',
    name: 'Sodium hydroxide (NaOH) có phenolphthalein',
    kind: 'Base',
    reacts: true,
    sign: 'Dung dịch NaOH có phenolphthalein màu hồng nhạt dần rồi mất màu khi acid trung hoà hết base.',
    equation: 'CH3COOH + NaOH → CH3COONa + H2O',
    rule: 'Acid + base → muối + nước (phản ứng trung hoà).',
    before: '#f9a8d4',
    liquid: '#f8fafc',
  },
  {
    id: 'caco3',
    name: 'Đá vôi (CaCO₃)',
    kind: 'Muối carbonate',
    reacts: true,
    sign: 'Đá vôi tan dần, sủi bọt khí carbon dioxide.',
    equation: '2CH3COOH + CaCO3 → (CH3COO)2Ca + CO2↑ + H2O',
    rule: 'Acid + muối carbonate → muối mới + CO₂ + nước.',
    liquid: '#f1f5f9',
    solid: '#e7e5e4',
    gas: true,
  },
  {
    id: 'cu',
    name: 'Copper (Cu)',
    kind: 'Kim loại',
    reacts: false,
    sign: 'Không có hiện tượng gì.',
    rule: 'Copper đứng sau hydrogen trong dãy hoạt động hoá học nên không tác dụng với acetic acid.',
    liquid: '#f1f5f9',
    solid: '#b45309',
  },
];
