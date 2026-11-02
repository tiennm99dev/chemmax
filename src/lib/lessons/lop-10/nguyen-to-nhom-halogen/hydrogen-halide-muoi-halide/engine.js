/**
 * The two experiments of the lesson: telling halide ions apart with silver
 * nitrate, and how far each halide reduces concentrated sulfuric acid.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {object} Halide
 * @property {string} id
 * @property {string} ion formula with a caret charge
 * @property {string} salt
 * @property {string | null} precipitate formula of the silver halide, null when it dissolves
 * @property {string} seen what the tube shows
 * @property {string | null} color colour of the precipitate
 * @property {string | null} equation
 */

/** @type {Halide[]} */
export const HALIDES = [
  {
    id: 'F',
    ion: 'F^-',
    salt: 'NaF',
    precipitate: null,
    seen: 'không có kết tủa',
    color: null,
    equation: null,
  },
  {
    id: 'Cl',
    ion: 'Cl^-',
    salt: 'NaCl',
    precipitate: 'AgCl',
    seen: 'kết tủa trắng',
    color: '#f8fafc',
    equation: 'NaCl + AgNO3 → AgCl↓ + NaNO3',
  },
  {
    id: 'Br',
    ion: 'Br^-',
    salt: 'NaBr',
    precipitate: 'AgBr',
    seen: 'kết tủa vàng nhạt',
    color: '#fef08a',
    equation: 'NaBr + AgNO3 → AgBr↓ + NaNO3',
  },
  {
    id: 'I',
    ion: 'I^-',
    salt: 'NaI',
    precipitate: 'AgI',
    seen: 'kết tủa vàng',
    color: '#eab308',
    equation: 'NaI + AgNO3 → AgI↓ + NaNO3',
  },
];

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Four tubes A to D, each hiding one halide, in an order set by the seed.
 * @param {number} seed
 * @returns {Array<{ letter: string, halide: Halide }>}
 */
export function makeTubes(seed) {
  return shuffle(rng(seed), HALIDES).map((halide, i) => ({ letter: LETTERS[i], halide }));
}

/**
 * The reply to naming the ion in a tube.
 * @param {Halide} halide what the tube holds
 * @param {string} guess id of the named ion
 * @returns {{ right: boolean, text: string }}
 */
export function judgeTube(halide, guess) {
  if (guess === halide.id) {
    return {
      right: true,
      text: halide.precipitate
        ? `Đúng: ${halide.seen} là ${halide.precipitate}, nên ống này chứa ion ${halide.id}⁻.`
        : `Đúng: AgF tan trong nước nên không có kết tủa; ống này chứa ion F⁻.`,
    };
  }
  return {
    right: false,
    text: `Chưa đúng. Ống này cho ${halide.seen}; đối chiếu với bảng màu rồi chọn lại.`,
  };
}

/**
 * @typedef {object} Reduction
 * @property {string} salt
 * @property {string} ion
 * @property {number} sulfur oxidation number of S in the sulfur product
 * @property {string} equation
 * @property {string} text
 */

/**
 * Concentrated sulfuric acid with a solid halide, as the book writes them.
 * @type {Reduction[]}
 */
export const REDUCTIONS = [
  {
    salt: 'NaCl',
    ion: 'Cl^-',
    sulfur: 6,
    equation: 'NaCl + H2SO4 → NaHSO4 + HCl↑',
    text: 'Cl⁻ không khử được $\\mathrm{H_2SO_4}$ đặc: đây chỉ là phản ứng trao đổi, S vẫn có số oxi hoá $+6$.',
  },
  {
    salt: 'NaBr',
    ion: 'Br^-',
    sulfur: 4,
    equation: '2NaBr + 3H2SO4 → 2NaHSO4 + Br2 + SO2↑ + 2H2O',
    text: 'Br⁻ bị oxi hoá thành $\\mathrm{Br_2}$ và khử S từ $+6$ xuống $+4$ trong $\\mathrm{SO_2}$.',
  },
  {
    salt: 'NaI',
    ion: 'I^-',
    sulfur: -2,
    equation: '8NaI + 9H2SO4 → 8NaHSO4 + 4I2 + H2S↑ + 4H2O',
    text: 'I⁻ bị oxi hoá thành $\\mathrm{I_2}$ và khử S từ $+6$ xuống tận $-2$ trong $\\mathrm{H_2S}$.',
  },
];

/** The sulfur steps on the ladder, highest oxidation number first. */
export const SULFUR_STEPS = [
  { sulfur: 6, formula: 'H2SO4', label: 'S không đổi số oxi hoá' },
  { sulfur: 4, formula: 'SO2', label: 'S nhận $2$ electron' },
  { sulfur: -2, formula: 'H2S', label: 'S nhận $8$ electron' },
];
