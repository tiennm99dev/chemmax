/**
 * A two-pan balance around three classroom experiments. The left pan holds
 * the reaction vessel; the right pan holds weights equal to its mass before
 * the reaction. In a closed vessel nothing enters or leaves, so the beam
 * stays level (mass is conserved). In an open vessel a gas product escapes
 * (the pan gets lighter) or a gas reactant comes in from the air (the pan
 * gets heavier), although the law still holds for all substances together.
 *
 * Also the equation-balancing game: a list of equations to balance with the
 * lowest whole-number coefficients.
 */
import { balance, isBalanced, parseEquation } from '#lib/domain/equation.js';
import { clean } from '../_shared/molar.js';

/** @typedef {{ formula: string, name: string, mass: number, gas?: boolean }} Part */
/**
 * @typedef {object} Experiment
 * @property {string} id
 * @property {string} label
 * @property {string} equation balanced equation with formulas
 * @property {string} words
 * @property {Part[]} reactants masses that react exactly
 * @property {Part[]} products
 * @property {string} sign what the learner sees happen
 */

/** @type {Experiment[]} */
export const EXPERIMENTS = [
  {
    id: 'bari',
    label: 'Barium chloride + sodium sulfate',
    equation: 'BaCl2 + Na2SO4 -> BaSO4 + 2NaCl',
    words: 'Barium chloride + Sodium sulfate → Barium sulfate + Sodium chloride',
    reactants: [
      { formula: 'BaCl2', name: 'barium chloride', mass: 20.8 },
      { formula: 'Na2SO4', name: 'sodium sulfate', mass: 14.2 },
    ],
    products: [
      { formula: 'BaSO4', name: 'barium sulfate', mass: 23.3 },
      { formula: 'NaCl', name: 'sodium chloride', mass: 11.7 },
    ],
    sign: 'Xuất hiện chất rắn màu trắng không tan (kết tủa barium sulfate).',
  },
  {
    id: 'da-voi',
    label: 'Đá vôi + hydrochloric acid',
    equation: 'CaCO3 + 2HCl -> CaCl2 + CO2 + H2O',
    words: 'Calcium carbonate + Hydrochloric acid → Calcium chloride + Carbon dioxide + Nước',
    reactants: [
      { formula: 'CaCO3', name: 'calcium carbonate', mass: 10 },
      { formula: 'HCl', name: 'hydrogen chloride', mass: 7.3 },
    ],
    products: [
      { formula: 'CaCl2', name: 'calcium chloride', mass: 11.1 },
      { formula: 'CO2', name: 'carbon dioxide', mass: 4.4, gas: true },
      { formula: 'H2O', name: 'nước', mass: 1.8 },
    ],
    sign: 'Đá vôi tan dần, sủi bọt khí carbon dioxide.',
  },
  {
    id: 'magnesium',
    label: 'Đốt magnesium trong không khí',
    equation: '2Mg + O2 -> 2MgO',
    words: 'Magnesium + Oxygen → Magnesium oxide',
    reactants: [
      { formula: 'Mg', name: 'magnesium', mass: 4.8 },
      { formula: 'O2', name: 'oxygen', mass: 3.2, gas: true },
    ],
    products: [{ formula: 'MgO', name: 'magnesium oxide', mass: 8 }],
    sign: 'Magnesium cháy sáng chói, tạo ra bột màu trắng magnesium oxide.',
  },
];

/**
 * @param {string} id
 * @returns {Experiment}
 */
export function experiment(id) {
  return EXPERIMENTS.find((e) => e.id === id) ?? EXPERIMENTS[0];
}

/** @param {Part[]} parts */
export const total = (parts) => clean(parts.reduce((s, p) => s + p.mass, 0));

/**
 * What the left pan carries before and after the reaction. In an open
 * vessel the gas reactants come from the air (not on the pan before) and
 * the gas products escape (not on the pan after).
 * @param {Experiment} e
 * @param {boolean} closed
 */
export function panMasses(e, closed) {
  const before = closed ? total(e.reactants) : total(e.reactants.filter((p) => !p.gas));
  const after = closed ? total(e.products) : total(e.products.filter((p) => !p.gas));
  return { before, after, change: clean(after - before) };
}

/** Largest tilt of the beam, in degrees. */
export const MAX_TILT = 14;

/**
 * Beam angle in degrees, clockwise positive (left pan up) when the left pan
 * is lighter than the weights.
 * @param {number} left mass on the left pan
 * @param {number} right mass on the right pan
 */
export function tilt(left, right) {
  const d = right - left;
  if (Math.abs(d) < 1e-9) return 0;
  return Math.sign(d) * Math.min(MAX_TILT, 4 + Math.abs(d) * 2);
}

/** Equations of the balancing game, as written before balancing. */
export const GAME = [
  'Al + O2 -> Al2O3',
  'Fe + Cl2 -> FeCl3',
  'Na + H2O -> NaOH + H2',
  'P + O2 -> P2O5',
  'Al + HCl -> AlCl3 + H2',
  'NaOH + H2SO4 -> Na2SO4 + H2O',
  'Fe2O3 + CO -> Fe + CO2',
  'CH4 + O2 -> CO2 + H2O',
];

/** @param {number} a @param {number} b @returns {number} */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

/**
 * Judges the learner's coefficients for an equation.
 * @param {string} equation
 * @param {number[]} coefficients
 * @returns {'dung' | 'chua-toi-gian' | 'chua-can-bang'}
 */
export function judge(equation, coefficients) {
  const eq = parseEquation(equation);
  if (!isBalanced(eq, coefficients)) return 'chua-can-bang';
  return coefficients.reduce(gcd) === 1 ? 'dung' : 'chua-toi-gian';
}

/**
 * Lowest whole-number coefficients of an equation.
 * @param {string} equation
 * @returns {number[]}
 */
export function solution(equation) {
  const r = balance(parseEquation(equation));
  if (!r.ok) throw new Error(r.message);
  return r.coefficients;
}
