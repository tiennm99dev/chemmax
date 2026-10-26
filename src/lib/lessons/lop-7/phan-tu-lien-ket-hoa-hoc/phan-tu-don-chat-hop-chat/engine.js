/**
 * Molecule kit for the lesson on molecules, elements and compounds: the
 * learner puts atom balls together, and the kit names the formula, sorts the
 * substance into đơn chất or hợp chất and adds up the molecular mass in amu
 * with the book's rounded atomic masses.
 */
import { MOLECULES } from '#lib/domain/molecule.js';
import { bookMass } from '../_shared/book-masses.js';

/** Elements in the kit, in the order the palette shows them. */
export const KIT = ['H', 'C', 'N', 'O', 'S', 'Cl'];

/** Most atoms of one element the kit holds. */
export const MAX_EACH = 6;

/**
 * Order of the symbols when writing a formula from counts. It reproduces the
 * usual school formulas of the kit's molecules: CH4, CO2, NH3, H2O, H2S,
 * HCl, SO2, CCl4.
 */
const WRITE_ORDER = ['C', 'N', 'H', 'S', 'Cl', 'O'];

/** @typedef {Record<string, number>} Counts element symbol → number of atoms */

/**
 * Elements present, in writing order, with their counts.
 * @param {Counts} counts
 * @returns {Array<[string, number]>}
 */
export function present(counts) {
  return WRITE_ORDER.filter((s) => (counts[s] ?? 0) > 0).map((s) => [s, counts[s]]);
}

/**
 * Formula as plain text with digits for subscripts: { H: 2, O: 1 } → "H2O".
 * @param {Counts} counts
 */
export function formulaOf(counts) {
  return present(counts)
    .map(([s, n]) => (n === 1 ? s : `${s}${n}`))
    .join('');
}

/** @param {Counts} counts */
export function totalAtoms(counts) {
  return Object.values(counts).reduce((s, n) => s + n, 0);
}

/**
 * Đơn chất when every atom belongs to one element, hợp chất when two or
 * more elements make it up, null for an empty kit.
 * @param {Counts} counts
 * @returns {'don-chat' | 'hop-chat' | null}
 */
export function classify(counts) {
  const kinds = present(counts).length;
  if (kinds === 0) return null;
  return kinds === 1 ? 'don-chat' : 'hop-chat';
}

/**
 * Molecular mass as the book writes the sum: terms per element and the total.
 * @param {Counts} counts
 */
export function massBreakdown(counts) {
  const terms = present(counts).map(([symbol, n]) => ({ symbol, n, mass: bookMass(symbol) }));
  const total = Math.round(terms.reduce((s, t) => s + t.n * t.mass, 0) * 1000) / 1000;
  return { terms, total };
}

/** Ozone is not in the domain list; drawn bent, one double and one single bond. */
const OZONE = /** @type {import('#lib/domain/molecule.js').Molecule} */ ({
  id: 'o3',
  name: 'Ozone',
  formula: 'O3',
  atoms: [
    { el: 'O', x: 0, y: 0.45 },
    { el: 'O', x: -1.09, y: -0.22 },
    { el: 'O', x: 1.09, y: -0.22 },
  ],
  bonds: [
    { a: 0, b: 1, order: 2 },
    { a: 0, b: 2, order: 1 },
  ],
});

/** Hydrogen sulfide, bent like water. */
const H2S = /** @type {import('#lib/domain/molecule.js').Molecule} */ ({
  id: 'h2s',
  name: 'Hydrogen sulfide',
  formula: 'H2S',
  atoms: [
    { el: 'S', x: 0, y: 0.3 },
    { el: 'H', x: -0.97, y: -0.6 },
    { el: 'H', x: 0.97, y: -0.6 },
  ],
  bonds: [
    { a: 0, b: 1, order: 1 },
    { a: 0, b: 2, order: 1 },
  ],
});

/** Vietnamese names the book uses for the kit's molecules. */
const NAMES = /** @type {Record<string, string>} */ ({
  H2: 'hydrogen',
  O2: 'oxygen',
  N2: 'nitrogen',
  Cl2: 'chlorine',
  O3: 'ozone',
  HCl: 'hydrogen chloride',
  H2O: 'nước',
  CO2: 'carbon dioxide',
  SO2: 'sulfur dioxide',
  NH3: 'ammonia',
  CH4: 'methane',
  H2S: 'hydrogen sulfide',
});

const SHAPES = [...MOLECULES.filter((m) => NAMES[m.formula]), OZONE, H2S];

/**
 * The real molecule the counts make, when the kit knows its shape.
 * @param {Counts} counts
 */
export function knownMolecule(counts) {
  const formula = formulaOf(counts);
  const shape = SHAPES.find((m) => m.formula === formula);
  if (!shape) return null;
  return { formula, name: NAMES[formula], shape: { ...shape, name: NAMES[formula] } };
}

/**
 * @typedef {object} Target
 * @property {string} task what to build, as the learner reads it
 * @property {Counts} counts the molecule that answers it
 * @property {string} clue how to reason towards it
 */

/** Molecules to build, from a named one to one known only by its mass. */
export const TARGETS = /** @type {Target[]} */ ([
  {
    task: 'Lắp phân tử nước: hợp chất của hydrogen và oxygen, khối lượng phân tử 18 amu',
    counts: { H: 2, O: 1 },
    clue: 'Một nguyên tử O nặng 16 amu; phần còn lại là hydrogen, mỗi nguyên tử 1 amu.',
  },
  {
    task: 'Lắp phân tử một đơn chất khí của oxygen có khối lượng phân tử 32 amu',
    counts: { O: 2 },
    clue: 'Đơn chất chỉ có một nguyên tố. Mỗi nguyên tử O nặng 16 amu.',
  },
  {
    task: 'Lắp phân tử ozone: đơn chất khác của oxygen, khối lượng phân tử 48 amu',
    counts: { O: 3 },
    clue: 'Chia khối lượng phân tử cho khối lượng một nguyên tử O (16 amu).',
  },
  {
    task: 'Lắp phân tử carbon dioxide: 1 nguyên tử C và một số nguyên tử O, khối lượng 44 amu',
    counts: { C: 1, O: 2 },
    clue: 'Lấy 44 trừ 12 (một C) rồi chia cho 16.',
  },
  {
    task: 'Lắp phân tử methane: 1 nguyên tử C và một số nguyên tử H, khối lượng 16 amu',
    counts: { C: 1, H: 4 },
    clue: 'Lấy 16 trừ 12 (một C): phần còn lại là các nguyên tử H, mỗi nguyên tử 1 amu.',
  },
  {
    task: 'Lắp phân tử ammonia: 1 nguyên tử N và một số nguyên tử H, khối lượng 17 amu',
    counts: { N: 1, H: 3 },
    clue: 'Lấy 17 trừ 14 (một N), phần còn lại là hydrogen.',
  },
  {
    task: 'Lắp phân tử hợp chất của hydrogen và chlorine có khối lượng 36,5 amu',
    counts: { H: 1, Cl: 1 },
    clue: 'Một nguyên tử Cl nặng 35,5 amu.',
  },
  {
    task: 'Lắp phân tử đơn chất chlorine: phân tử gồm 2 nguyên tử, khối lượng 71 amu',
    counts: { Cl: 2 },
    clue: 'Đơn chất chlorine chỉ có nguyên tố Cl; 71 = 2 × 35,5.',
  },
]);

/**
 * @param {Target} target
 * @param {Counts} counts
 */
export function matchesTarget(target, counts) {
  return KIT.every((s) => (counts[s] ?? 0) === (target.counts[s] ?? 0));
}

/**
 * The next thing to fix: first the elements, then the number of atoms of
 * each. Names the element and the direction, never the missing count.
 * @param {Target} target
 * @param {Counts} counts
 */
export function targetHint(target, counts) {
  const extra = KIT.filter((s) => (counts[s] ?? 0) > 0 && !target.counts[s]);
  if (extra.length) return `${target.clue} Phân tử này không có nguyên tố ${extra.join(', ')}.`;
  const missing = KIT.filter((s) => target.counts[s] && !(counts[s] ?? 0));
  if (missing.length) return `${target.clue} Còn thiếu nguyên tố ${missing.join(', ')}.`;
  for (const s of KIT) {
    const want = target.counts[s] ?? 0;
    const have = counts[s] ?? 0;
    if (have < want) return `${target.clue} Đúng nguyên tố rồi; cần thêm nguyên tử ${s}.`;
    if (have > want) return `${target.clue} Đúng nguyên tố rồi; đang thừa nguyên tử ${s}.`;
  }
  return 'Đã xong.';
}
