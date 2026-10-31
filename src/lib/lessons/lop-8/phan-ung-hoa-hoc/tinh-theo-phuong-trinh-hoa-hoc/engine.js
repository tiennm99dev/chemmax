/**
 * Amounts in a reaction aA + bB → products. The reactant with the smaller
 * ratio n / coefficient runs out (chất phản ứng hết); the other is left over
 * (chất dư). The reaction goes as far as the limiting reactant allows: its
 * extent is min(n_A / a, n_B / b), and each species changes by
 * coefficient × extent. A yield H below 100% scales the products.
 */
import { molarMass } from '../_shared/molar.js';
import { tidy } from '#lib/core/number-format.js';

/** @typedef {{ formula: string, coef: number }} Term */
/** @typedef {{ id: string, equation: string, reactants: [Term, Term], products: Term[] }} Reaction */

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    id: 'nuoc',
    equation: '2H2 + O2 → 2H2O',
    reactants: [
      { formula: 'H2', coef: 2 },
      { formula: 'O2', coef: 1 },
    ],
    products: [{ formula: 'H2O', coef: 2 }],
  },
  {
    id: 'ammonia',
    equation: 'N2 + 3H2 → 2NH3',
    reactants: [
      { formula: 'N2', coef: 1 },
      { formula: 'H2', coef: 3 },
    ],
    products: [{ formula: 'NH3', coef: 2 }],
  },
  {
    id: 'kem',
    equation: 'Zn + 2HCl → ZnCl2 + H2',
    reactants: [
      { formula: 'Zn', coef: 1 },
      { formula: 'HCl', coef: 2 },
    ],
    products: [
      { formula: 'ZnCl2', coef: 1 },
      { formula: 'H2', coef: 1 },
    ],
  },
];

/**
 * @param {string} id
 * @returns {Reaction}
 */
export function reaction(id) {
  return REACTIONS.find((r) => r.id === id) ?? REACTIONS[0];
}

/**
 * Runs the reaction to completion from the given amounts (mol).
 * `limiting` is the index of the reactant that runs out, 'vua-du' when both
 * run out together, or null when a reactant is missing.
 * @param {Reaction} r
 * @param {[number, number]} amounts
 */
export function simulate(r, amounts) {
  const ratios = r.reactants.map((t, i) => amounts[i] / t.coef);
  const extent = Math.min(...ratios);
  /** @type {0 | 1 | 'vua-du' | null} */
  let limiting;
  if (extent <= 0) limiting = null;
  else if (Math.abs(ratios[0] - ratios[1]) < 1e-9) limiting = 'vua-du';
  else limiting = ratios[0] < ratios[1] ? 0 : 1;
  return {
    ratios: ratios.map((x) => tidy(x)),
    extent: tidy(extent),
    limiting,
    used: r.reactants.map((t) => tidy(t.coef * extent)),
    left: r.reactants.map((t, i) => tidy(amounts[i] - t.coef * extent)),
    formed: r.products.map((t) => tidy(t.coef * extent)),
  };
}

/**
 * Actual amount of a product for a yield in percent.
 * @param {number} theoretical
 * @param {number} percent
 */
export function actual(theoretical, percent) {
  return tidy((theoretical * percent) / 100);
}

/**
 * Yield in percent from actual and theoretical amounts (or masses).
 * @param {number} actualAmount
 * @param {number} theoretical
 */
export function yieldPercent(actualAmount, theoretical) {
  return theoretical > 0 ? tidy((actualAmount / theoretical) * 100) : 0;
}

/**
 * Mass in grams of an amount of a substance.
 * @param {string} formula
 * @param {number} n
 */
export function massOf(formula, n) {
  return tidy(n * molarMass(formula));
}
