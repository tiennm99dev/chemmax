/**
 * Mixing two salt or base solutions: the ions swap partners, and a new
 * pair that the solubility table marks K (không tan) comes out as a
 * precipitate. The table uses the book's marks: T tan, I ít tan, K không
 * tan, "–" không tồn tại hoặc bị nước phân huỷ.
 */
import { balance, formatEquation, parseEquation } from '#lib/domain/equation.js';
import { prettyFormula } from '#lib/domain/formula.js';

/** @typedef {'T' | 'I' | 'K' | '–'} Solubility */
/** @typedef {{ id: string, formula: string, charge: number, name: string }} Ion */

/** @type {Ion[]} */
export const CATIONS = [
  { id: 'Na', formula: 'Na', charge: 1, name: 'sodium' },
  { id: 'K', formula: 'K', charge: 1, name: 'potassium' },
  { id: 'Ba', formula: 'Ba', charge: 2, name: 'barium' },
  { id: 'Ca', formula: 'Ca', charge: 2, name: 'calcium' },
  { id: 'Mg', formula: 'Mg', charge: 2, name: 'magnesium' },
  { id: 'Ag', formula: 'Ag', charge: 1, name: 'silver' },
  { id: 'Cu', formula: 'Cu', charge: 2, name: 'copper(II)' },
  { id: 'Fe3', formula: 'Fe', charge: 3, name: 'iron(III)' },
];

/** @type {Ion[]} */
export const ANIONS = [
  { id: 'OH', formula: 'OH', charge: 1, name: 'hydroxide' },
  { id: 'Cl', formula: 'Cl', charge: 1, name: 'chloride' },
  { id: 'NO3', formula: 'NO3', charge: 1, name: 'nitrate' },
  { id: 'SO4', formula: 'SO4', charge: 2, name: 'sulfate' },
  { id: 'CO3', formula: 'CO3', charge: 2, name: 'carbonate' },
  { id: 'PO4', formula: 'PO4', charge: 3, name: 'phosphate' },
];

/** Solubility in water, `TABLE[anion][cation]`. */
export const TABLE = /** @type {Record<string, Record<string, Solubility>>} */ ({
  OH: { Na: 'T', K: 'T', Ba: 'T', Ca: 'I', Mg: 'K', Ag: '–', Cu: 'K', Fe3: 'K' },
  Cl: { Na: 'T', K: 'T', Ba: 'T', Ca: 'T', Mg: 'T', Ag: 'K', Cu: 'T', Fe3: 'T' },
  NO3: { Na: 'T', K: 'T', Ba: 'T', Ca: 'T', Mg: 'T', Ag: 'T', Cu: 'T', Fe3: 'T' },
  SO4: { Na: 'T', K: 'T', Ba: 'K', Ca: 'I', Mg: 'T', Ag: 'I', Cu: 'T', Fe3: 'T' },
  CO3: { Na: 'T', K: 'T', Ba: 'K', Ca: 'K', Mg: 'K', Ag: 'K', Cu: '–', Fe3: '–' },
  PO4: { Na: 'T', K: 'T', Ba: 'K', Ca: 'K', Mg: 'K', Ag: 'K', Cu: 'K', Fe3: 'K' },
});

/** Colours of the precipitates that can form here. */
const COLOURS = /** @type {Record<string, string>} */ ({
  'Mg-OH': 'trắng',
  'Cu-OH': 'xanh lam',
  'Fe3-OH': 'nâu đỏ',
  'Ag-Cl': 'trắng',
  'Ba-SO4': 'trắng',
  'Ba-CO3': 'trắng',
  'Ca-CO3': 'trắng',
  'Mg-CO3': 'trắng',
  'Ag-CO3': 'vàng nhạt',
  'Ba-PO4': 'trắng',
  'Ca-PO4': 'trắng',
  'Ag-PO4': 'vàng',
  'Mg-PO4': 'trắng',
  'Cu-PO4': 'xanh lam',
  'Fe3-PO4': 'vàng nhạt',
});

/** Drawing colours for the precipitate names above. */
export const SWATCH = /** @type {Record<string, string>} */ ({
  trắng: '#f8fafc',
  'xanh lam': '#38bdf8',
  'nâu đỏ': '#9a3412',
  'vàng nhạt': '#fef08a',
  vàng: '#facc15',
});

/** @param {number} a @param {number} b @returns {number} */
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

/**
 * Formula of the compound of a cation and an anion: "Fe2(SO4)3", "CuCl2".
 * @param {Ion} c
 * @param {Ion} a
 */
export function compound(c, a) {
  const g = gcd(c.charge, a.charge);
  const nc = a.charge / g;
  const na = c.charge / g;
  const many = /[A-Z][a-z]?.*[A-Z]|\d/.test(a.formula);
  const anion = na === 1 ? a.formula : many ? `(${a.formula})${na}` : `${a.formula}${na}`;
  return `${c.formula}${nc === 1 ? '' : nc}${anion}`;
}

/**
 * Name of the compound: "copper(II) sulfate", "iron(III) hydroxide".
 * @param {Ion} c
 * @param {Ion} a
 */
export function compoundName(c, a) {
  return `${c.name} ${a.name}`;
}

/** @typedef {{ id: string, cation: string, anion: string }} Solution */

/** Solutions offered for mixing: every one is a soluble salt or base. */
export const SOLUTIONS = /** @type {Solution[]} */ (
  [
    ['Na', 'Cl'],
    ['K', 'NO3'],
    ['Na', 'SO4'],
    ['Na', 'CO3'],
    ['Na', 'OH'],
    ['K', 'PO4'],
    ['Ba', 'Cl'],
    ['Mg', 'Cl'],
    ['Ag', 'NO3'],
    ['Cu', 'SO4'],
    ['Fe3', 'Cl'],
  ].map(([cation, anion]) => ({ id: `${cation}-${anion}`, cation, anion }))
);

/** @param {string} id */
export const cation = (id) => /** @type {Ion} */ (CATIONS.find((c) => c.id === id));
/** @param {string} id */
export const anion = (id) => /** @type {Ion} */ (ANIONS.find((a) => a.id === id));

/** @param {Solution} s */
export function formulaOf(s) {
  return compound(cation(s.cation), anion(s.anion));
}

/**
 * @typedef {object} Product
 * @property {string} cation
 * @property {string} anion
 * @property {string} formula
 * @property {string} name
 * @property {Solubility} solubility
 * @property {string} [colour] colour of the precipitate, when it is one
 */

/**
 * @typedef {object} MixResult
 * @property {'precipitate' | 'none' | 'slight' | 'unstable'} outcome
 * @property {Product[]} products the two new ion pairs (empty when nothing can swap)
 * @property {string | null} equation balanced book-style equation, with ↓
 * @property {string} text
 */

/**
 * What happens when the two solutions are poured together.
 * @param {Solution} a
 * @param {Solution} b
 * @returns {MixResult}
 */
export function mix(a, b) {
  if (a.cation === b.cation || a.anion === b.anion) {
    return {
      outcome: 'none',
      products: [],
      equation: null,
      text: 'Hai dung dịch có chung ion nên không có cặp ion mới: không xảy ra phản ứng, không có kết tủa.',
    };
  }
  const products = [
    [a.cation, b.anion],
    [b.cation, a.anion],
  ].map(([c, an]) => {
    const solubility = TABLE[an][c];
    const key = `${c}-${an}`;
    return {
      cation: c,
      anion: an,
      formula: compound(cation(c), anion(an)),
      name: compoundName(cation(c), anion(an)),
      solubility,
      ...(solubility === 'K' ? { colour: COLOURS[key] } : {}),
    };
  });

  const solid = products.filter((p) => p.solubility === 'K');
  if (solid.length) {
    const equation = writeEquation(a, b, products);
    const list = solid
      .map((p) => `${prettyFormula(p.formula)} (${p.name}) màu ${p.colour}`)
      .join(' và ');
    return {
      outcome: 'precipitate',
      products,
      equation,
      text: `Có kết tủa: ${list}, vì theo bảng tính tan chất này không tan (K).`,
    };
  }
  if (products.some((p) => p.solubility === '–')) {
    return {
      outcome: 'unstable',
      products,
      equation: null,
      text: 'Một sản phẩm có dấu “–” trong bảng tính tan (không tồn tại hoặc bị nước phân huỷ). Cặp này không dùng bảng tính tan để dự đoán được, nên không xét ở đây.',
    };
  }
  if (products.some((p) => p.solubility === 'I')) {
    const p = /** @type {Product} */ (products.find((x) => x.solubility === 'I'));
    return {
      outcome: 'slight',
      products,
      equation: null,
      text: `${prettyFormula(p.formula)} ít tan (I): dung dịch có thể hơi vẩn đục nếu nồng độ đủ lớn. Bảng tính tan chưa cho câu trả lời chắc chắn.`,
    };
  }
  return {
    outcome: 'none',
    products,
    equation: null,
    text: 'Cả hai chất mới đều tan (T): các ion vẫn ở trong dung dịch, không có kết tủa, không xảy ra phản ứng.',
  };
}

/**
 * Balanced equation for a mix that gives a precipitate, marked with ↓.
 * @param {Solution} a
 * @param {Solution} b
 * @param {Product[]} products
 */
function writeEquation(a, b, products) {
  const text = `${formulaOf(a)} + ${formulaOf(b)} -> ${products.map((p) => p.formula).join(' + ')}`;
  const eq = parseEquation(text);
  const r = balance(eq);
  if (!r.ok) return null;
  const plain = formatEquation(eq, r.coefficients);
  const [left, right] = plain.split(' → ');
  const marked = right
    .split(' + ')
    .map((t, i) => (products[i].solubility === 'K' ? `${t}↓` : t))
    .join(' + ');
  return `${left} → ${marked}`;
}

/**
 * A fair game question: a pair that is clearly a precipitate or clearly
 * nothing (no "ít tan" or "–" products), picked by `rand` in [0, 1).
 * @param {() => number} rand
 */
export function randomPair(rand) {
  for (;;) {
    const i = Math.floor(rand() * SOLUTIONS.length);
    const j = Math.floor(rand() * SOLUTIONS.length);
    if (i === j) continue;
    const r = mix(SOLUTIONS[i], SOLUTIONS[j]);
    if (r.outcome === 'precipitate' || r.outcome === 'none') return [SOLUTIONS[i], SOLUTIONS[j]];
  }
}
