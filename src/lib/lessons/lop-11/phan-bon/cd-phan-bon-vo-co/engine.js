/**
 * Nutrient grades of inorganic fertilisers. A grade is the mass percentage of
 * N for a nitrogen fertiliser, of P2O5 for a phosphate fertiliser and of K2O
 * for a potash fertiliser, so the P and K of a salt are counted as if they
 * were the oxides. Masses use the book's rounded atomic masses.
 */
import { atomCounts, moleculeMassAmu } from '#lib/domain/book-mass.js';
import { tidy } from '#lib/core/number-format.js';

/** @typedef {'N' | 'P2O5' | 'K2O'} Nutrient */

/** The three nutrients a grade is written in, in label order. */
export const NUTRIENTS = /** @type {const} */ (['N', 'P2O5', 'K2O']);

/** TeX for each nutrient. */
export const NUTRIENT_TEX = /** @type {Record<Nutrient, string>} */ ({
  N: '\\mathrm{N}',
  P2O5: '\\mathrm{P_2O_5}',
  K2O: '\\mathrm{K_2O}',
});

/** Plain-text names for screen readers and labels. */
export const NUTRIENT_TEXT = /** @type {Record<Nutrient, string>} */ ({
  N: 'N',
  P2O5: 'P₂O₅',
  K2O: 'K₂O',
});

/**
 * How many grams of the counted nutrient one mole of the compound holds,
 * written as TeX for the worked fraction, together with its value.
 * @param {string} formula
 * @param {Nutrient} nutrient
 * @returns {{ grams: number, tex: string }}
 */
export function nutrientGrams(formula, nutrient) {
  const counts = Object.fromEntries(atomCounts(formula));
  if (nutrient === 'N') {
    const n = counts.N ?? 0;
    return { grams: 14 * n, tex: n === 1 ? '14' : `${n} \\cdot 14` };
  }
  const element = nutrient === 'P2O5' ? 'P' : 'K';
  const oxide = nutrient === 'P2O5' ? 142 : 94;
  const n = counts[element] ?? 0;
  const moles = n / 2;
  const tex =
    moles === 1
      ? `${oxide}`
      : n === 1
        ? `\\dfrac{1}{2} \\cdot ${oxide}`
        : `${moles} \\cdot ${oxide}`;
  return { grams: moles * oxide, tex };
}

/**
 * Theoretical grade of a pure compound for one nutrient, in percent.
 * @param {string} formula
 * @param {Nutrient} nutrient
 */
export function theoreticalGrade(formula, nutrient) {
  return tidy((nutrientGrams(formula, nutrient).grams / moleculeMassAmu(formula)) * 100);
}

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   formula: string,
 *   kind: string,
 *   counts: Nutrient[],
 *   market: string,
 * }} Compound
 */

/** Pure compounds whose grade the learner can work out. @type {Compound[]} */
export const COMPOUNDS = [
  {
    id: 'urea',
    name: 'Urea',
    formula: '(NH2)2CO',
    kind: 'Phân đạm',
    counts: ['N'],
    market: 'khoảng $46\\%$ N',
  },
  {
    id: 'an',
    name: 'Ammonium nitrate',
    formula: 'NH4NO3',
    kind: 'Phân đạm',
    counts: ['N'],
    market: 'khoảng $33$ – $34\\%$ N',
  },
  {
    id: 'sa',
    name: 'Ammonium sulfate (SA)',
    formula: '(NH4)2SO4',
    kind: 'Phân đạm',
    counts: ['N'],
    market: 'khoảng $20$ – $21\\%$ N',
  },
  {
    id: 'nh4cl',
    name: 'Ammonium chloride',
    formula: 'NH4Cl',
    kind: 'Phân đạm',
    counts: ['N'],
    market: 'khoảng $24$ – $25\\%$ N',
  },
  {
    id: 'super1',
    name: 'Superphosphate đơn',
    formula: 'Ca(H2PO4)2·2CaSO4',
    kind: 'Phân lân',
    counts: ['P2O5'],
    market: 'khoảng $16$ – $20\\%$ $\\mathrm{P_2O_5}$',
  },
  {
    id: 'super2',
    name: 'Superphosphate kép',
    formula: 'Ca(H2PO4)2',
    kind: 'Phân lân',
    counts: ['P2O5'],
    market: 'khoảng $40$ – $50\\%$ $\\mathrm{P_2O_5}$',
  },
  {
    id: 'kcl',
    name: 'Potassium chloride',
    formula: 'KCl',
    kind: 'Phân kali',
    counts: ['K2O'],
    market: 'khoảng $60\\%$ $\\mathrm{K_2O}$',
  },
  {
    id: 'k2so4',
    name: 'Potassium sulfate',
    formula: 'K2SO4',
    kind: 'Phân kali',
    counts: ['K2O'],
    market: 'khoảng $50\\%$ $\\mathrm{K_2O}$',
  },
  {
    id: 'map',
    name: 'Ammonium dihydrogen phosphate (MAP)',
    formula: 'NH4H2PO4',
    kind: 'Phân phức hợp',
    counts: ['N', 'P2O5'],
    market: 'khoảng $11$ – $12\\%$ N, $52$ – $61\\%$ $\\mathrm{P_2O_5}$',
  },
  {
    id: 'dap',
    name: 'Diammonium hydrogen phosphate (DAP)',
    formula: '(NH4)2HPO4',
    kind: 'Phân phức hợp',
    counts: ['N', 'P2O5'],
    market: 'khoảng $18\\%$ N, $46\\%$ $\\mathrm{P_2O_5}$',
  },
  {
    id: 'kno3',
    name: 'Potassium nitrate',
    formula: 'KNO3',
    kind: 'Phân phức hợp',
    counts: ['N', 'K2O'],
    market: 'khoảng $13\\%$ N, $46\\%$ $\\mathrm{K_2O}$',
  },
];

/**
 * @typedef {{ id: string, name: string, grade: Record<Nutrient, number>, max: number }} Product
 */

/** Market fertilisers the planner offers, with their label grades. @type {Product[]} */
export const PRODUCTS = [
  { id: 'urea', name: 'Urea 46-0-0', grade: { N: 46, P2O5: 0, K2O: 0 }, max: 400 },
  { id: 'sa', name: 'SA 21-0-0', grade: { N: 21, P2O5: 0, K2O: 0 }, max: 400 },
  { id: 'super', name: 'Supe lân 0-16-0', grade: { N: 0, P2O5: 16, K2O: 0 }, max: 700 },
  { id: 'kcl', name: 'Kali clorua 0-0-60', grade: { N: 0, P2O5: 0, K2O: 60 }, max: 200 },
  { id: 'dap', name: 'DAP 18-46-0', grade: { N: 18, P2O5: 46, K2O: 0 }, max: 300 },
  { id: 'npk', name: 'NPK 16-16-8', grade: { N: 16, P2O5: 16, K2O: 8 }, max: 700 },
];

/** @typedef {{ id: string, name: string, need: Record<Nutrient, number> }} Plan */

/**
 * Nutrient needs for one hectare, as rounded teaching figures: the right dose
 * depends on soil, variety and season.
 * @type {Plan[]}
 */
export const PLANS = [
  { id: 'lua', name: 'Lúa', need: { N: 100, P2O5: 60, K2O: 60 } },
  { id: 'ngo', name: 'Ngô', need: { N: 150, P2O5: 90, K2O: 60 } },
  { id: 'lac', name: 'Lạc', need: { N: 30, P2O5: 90, K2O: 60 } },
];

/**
 * Kilograms of each nutrient supplied by the given masses of fertiliser.
 * @param {Record<string, number>} masses product id → kg
 * @returns {Record<Nutrient, number>}
 */
export function supplied(masses) {
  /** @type {Record<Nutrient, number>} */
  const out = { N: 0, P2O5: 0, K2O: 0 };
  for (const p of PRODUCTS) {
    const m = masses[p.id] ?? 0;
    for (const k of NUTRIENTS) out[k] += (m * p.grade[k]) / 100;
  }
  for (const k of NUTRIENTS) out[k] = tidy(out[k]);
  return out;
}

/**
 * Mass of fertiliser of a given grade that holds `kg` of the nutrient.
 * @param {number} kg
 * @param {number} grade percent
 */
export const fertiliserFor = (kg, grade) => tidy((kg * 100) / grade);

/** How close a supply must come to the need to count as met (fraction). */
export const TOLERANCE = 0.05;

/**
 * Whether one nutrient is short, met (within 5 %) or over.
 * @param {number} got
 * @param {number} need
 * @returns {'short' | 'ok' | 'over'}
 */
export function verdict(got, need) {
  if (got < need * (1 - TOLERANCE)) return 'short';
  if (got > need * (1 + TOLERANCE)) return 'over';
  return 'ok';
}

/**
 * Feedback for a whole plan.
 * @param {Record<Nutrient, number>} got
 * @param {Record<Nutrient, number>} need
 * @param {(v: number) => string} format
 * @returns {{ done: boolean, text: string }}
 */
export function planFeedback(got, need, format) {
  const parts = NUTRIENTS.map((k) => ({ k, v: verdict(got[k], need[k]) }));
  if (parts.every((p) => p.v === 'ok')) {
    return {
      done: true,
      text: 'Đạt: cả ba chất dinh dưỡng đều nằm trong khoảng $\\pm 5\\%$ so với nhu cầu.',
    };
  }
  const notes = parts
    .filter((p) => p.v !== 'ok')
    .map(({ k, v }) => {
      const diff = format(Math.abs(tidy(got[k] - need[k], 1)));
      return `${v === 'short' ? 'thiếu' : 'thừa'} ${diff} kg $${NUTRIENT_TEX[k]}$`;
    });
  return { done: false, text: `Còn ${notes.join(', ')}.` };
}
