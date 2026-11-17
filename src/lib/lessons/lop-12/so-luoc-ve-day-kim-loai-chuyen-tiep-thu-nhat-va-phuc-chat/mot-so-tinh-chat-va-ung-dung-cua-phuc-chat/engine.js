/**
 * The virtual test tube of the lesson: drops of a reagent added one at a
 * time to a solution, and what the tube shows after each drop. The amounts
 * follow the equations: the tube holds 1 part of metal ion and each drop
 * brings a fixed part of reagent.
 *
 * - Cu²⁺ + NH₃: the first 2 parts of NH₃ per Cu²⁺ give the pale blue
 *   precipitate [Cu(OH)₂(H₂O)₄]; 4 more parts dissolve it to the deep blue
 *   [Cu(NH₃)₄(H₂O)₂]²⁺.
 * - Cu²⁺ + concentrated HCl: 4 parts of Cl⁻ per Cu²⁺ turn the blue aqua
 *   complex through green into yellow [CuCl₄]²⁻.
 * - AgCl + NH₃: 2 parts of NH₃ per AgCl dissolve the white precipitate to
 *   colourless [Ag(NH₃)₂]⁺.
 */
import { tidy } from '#lib/core/number-format.js';

/**
 * @typedef {object} Scenario
 * @property {string} id
 * @property {string} name
 * @property {string} start what is in the tube, as a formula
 * @property {string} reagent the reagent dropped in, as a formula
 * @property {string} reagentName in words
 * @property {number} perDrop parts of reagent per drop
 * @property {number} drops drops after which nothing changes any more
 */

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'cu-nh3',
    name: 'CuSO₄ + NH₃',
    start: 'CuSO4',
    reagent: 'NH3',
    reagentName: 'dung dịch ammonia',
    perDrop: 0.5,
    drops: 12,
  },
  {
    id: 'cu-hcl',
    name: 'CuSO₄ + HCl đặc',
    start: 'CuSO4',
    reagent: 'HCl',
    reagentName: 'dung dịch HCl đặc',
    perDrop: 0.5,
    drops: 8,
  },
  {
    id: 'agcl-nh3',
    name: 'AgCl + NH₃',
    start: 'AgCl',
    reagent: 'NH3',
    reagentName: 'dung dịch ammonia',
    perDrop: 0.5,
    drops: 4,
  },
];

/** @param {string} id */
export function scenario(id) {
  const s = SCENARIOS.find((x) => x.id === id);
  if (!s) throw new Error(`Không có thí nghiệm ${id}`);
  return s;
}

const AQUA_CU = '#7dd3fc';
const AMMINE_CU = '#1d4ed8';
const GREEN = '#4ade80';
const YELLOW = '#facc15';
const CLEAR = '#e2f3fb';
const PALE_BLUE_SOLID = '#93c5fd';
const WHITE_SOLID = '#f8fafc';

/**
 * Mixes two hex colours, t from 0 (a) to 1 (b).
 * @param {string} a
 * @param {string} b
 * @param {number} t
 */
export function mix(a, b, t) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `#${pa
    .map((v, i) =>
      Math.round(v + (pb[i] - v) * t)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}`;
}

/**
 * @typedef {object} Tube
 * @property {string} liquid colour of the solution
 * @property {string | null} precipitate colour of the precipitate, if any
 * @property {number} amount precipitate, 0 to 1
 * @property {string} seen what the learner sees, in words
 * @property {string} species the complex or precipitate now present, as rich text
 * @property {string | null} equation the reaction behind the latest change, book-style
 * @property {boolean} finished
 */

/**
 * The tube after `drops` drops.
 * @param {Scenario} s
 * @param {number} drops
 * @returns {Tube}
 */
export function tubeAfter(s, drops) {
  const n = tidy(drops * s.perDrop);
  const finished = drops >= s.drops;
  if (s.id === 'cu-nh3') {
    const solid = Math.min(1, n / 2);
    const dissolved = Math.min(1, Math.max(0, n - 2) / 4);
    const amount = tidy(solid - dissolved);
    if (n === 0)
      return {
        liquid: AQUA_CU,
        precipitate: null,
        amount: 0,
        seen: 'Dung dịch $\\mathrm{CuSO_4}$ màu xanh của phức chất aqua.',
        species: '$\\mathrm{[Cu(H_2O)_6]^{2+}}$',
        equation: null,
        finished,
      };
    if (n <= 2)
      return {
        liquid: mix(AQUA_CU, CLEAR, solid * 0.7),
        precipitate: PALE_BLUE_SOLID,
        amount,
        seen: 'Xuất hiện kết tủa màu xanh nhạt, kết tủa tăng dần.',
        species: '$\\mathrm{[Cu(OH)_2(H_2O)_4]}$',
        equation: '[Cu(H2O)6]^2+ + 2OH^- → [Cu(OH)2(H2O)4] + 2H2O',
        finished,
      };
    return {
      liquid: mix(mix(AQUA_CU, CLEAR, 0.7), AMMINE_CU, dissolved),
      precipitate: amount > 0 ? PALE_BLUE_SOLID : null,
      amount,
      seen:
        amount > 0
          ? 'Ammonia dư: kết tủa tan dần, dung dịch chuyển sang màu xanh lam đậm.'
          : 'Kết tủa tan hết, dung dịch có màu xanh lam đậm.',
      species: '$\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$',
      equation: '[Cu(OH)2(H2O)4] + 4NH3 → [Cu(NH3)4(H2O)2]^2+ + 2OH^- + 2H2O',
      finished,
    };
  }
  if (s.id === 'cu-hcl') {
    const t = Math.min(1, n / 4);
    const liquid = t <= 0.5 ? mix(AQUA_CU, GREEN, t * 2) : mix(GREEN, YELLOW, (t - 0.5) * 2);
    return {
      liquid,
      precipitate: null,
      amount: 0,
      seen:
        n === 0
          ? 'Dung dịch $\\mathrm{CuSO_4}$ màu xanh của phức chất aqua.'
          : t < 0.5
            ? 'Dung dịch chuyển dần từ xanh sang xanh lá.'
            : t < 1
              ? 'Dung dịch chuyển dần từ xanh lá sang vàng.'
              : 'Dung dịch có màu vàng.',
      species:
        n === 0
          ? '$\\mathrm{[Cu(H_2O)_6]^{2+}}$'
          : t < 1
            ? '$\\mathrm{[Cu(H_2O)_6]^{2+}}$ và $\\mathrm{[CuCl_4]^{2-}}$'
            : '$\\mathrm{[CuCl_4]^{2-}}$',
      equation: n === 0 ? null : '[Cu(H2O)6]^2+ + 4Cl^- → [CuCl4]^2- + 6H2O',
      finished,
    };
  }
  const dissolved = Math.min(1, n / 2);
  return {
    liquid: CLEAR,
    precipitate: dissolved < 1 ? WHITE_SOLID : null,
    amount: tidy(1 - dissolved),
    seen:
      n === 0
        ? 'Ống nghiệm chứa kết tủa trắng AgCl (tạo từ $\\mathrm{AgNO_3}$ và NaCl).'
        : dissolved < 1
          ? 'Kết tủa trắng tan dần.'
          : 'Kết tủa tan hết, thu được dung dịch không màu.',
    species: n === 0 ? 'kết tủa AgCl' : '$\\mathrm{[Ag(NH_3)_2]^+}$',
    equation: n === 0 ? null : 'AgCl + 2NH3 → [Ag(NH3)2]^+ + Cl^-',
    finished,
  };
}
