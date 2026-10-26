/**
 * Mixing a solution in a beaker: how much of the solute dissolves (capped
 * by its solubility S, grams per 100 g of water at 20 °C), the mass
 * percentage C% = m_ct / m_dd · 100% and the molarity C_M = n / V.
 */
import { clean, molarMass } from '../_shared/molar.js';

/**
 * @typedef {object} Solute
 * @property {string} formula
 * @property {string} name
 * @property {number} solubility grams per 100 g of water at 20 °C
 * @property {[number, number, number]} rgb colour of a strong solution
 * @property {number} maxMass largest mass on the mass slider, g
 * @property {number} maxMolarity molarity drawn at full colour, mol/L
 */

/** @type {Solute[]} */
export const SOLUTES = [
  {
    formula: 'CuSO4',
    name: 'Copper(II) sulfate',
    solubility: 20.7,
    rgb: [37, 99, 235],
    maxMass: 40,
    maxMolarity: 1,
  },
  {
    formula: 'KMnO4',
    name: 'Potassium permanganate (thuốc tím)',
    solubility: 6.4,
    rgb: [126, 34, 206],
    maxMass: 15,
    maxMolarity: 0.25,
  },
  {
    formula: 'NaCl',
    name: 'Sodium chloride (muối ăn)',
    solubility: 36,
    rgb: [148, 163, 184],
    maxMass: 60,
    maxMolarity: 4,
  },
];

/**
 * @param {string} formula
 * @returns {Solute}
 */
export function solute(formula) {
  return SOLUTES.find((s) => s.formula === formula) ?? SOLUTES[0];
}

/**
 * Stirs `mSolute` grams of solute into `mWater` grams of water.
 * @param {Solute} s
 * @param {number} mSolute
 * @param {number} mWater
 */
export function dissolve(s, mSolute, mWater) {
  const capacity = (s.solubility * mWater) / 100;
  const dissolved = Math.min(mSolute, capacity);
  const mSolution = dissolved + mWater;
  return {
    capacity: clean(capacity),
    dissolved: clean(dissolved),
    excess: clean(Math.max(0, mSolute - capacity)),
    saturated: mSolute >= capacity - 1e-9,
    mSolution: clean(mSolution),
    percent: mSolution > 0 ? (dissolved / mSolution) * 100 : 0,
  };
}

/**
 * Molarity of `mSolute` grams of solute made up to `volumeMl` mL of solution.
 * @param {Solute} s
 * @param {number} mSolute
 * @param {number} volumeMl
 */
export function molarity(s, mSolute, volumeMl) {
  const M = molarMass(s.formula);
  const n = mSolute / M;
  return { M, n: clean(n), molarity: volumeMl > 0 ? n / (volumeMl / 1000) : 0 };
}

/**
 * Colour of the solution for a strength between 0 (water) and 1 (strong).
 * @param {Solute} s
 * @param {number} strength
 */
export function shade(s, strength) {
  const a = Math.max(0, Math.min(1, strength));
  const [r, g, b] = s.rgb;
  return `rgba(${r}, ${g}, ${b}, ${clean(0.08 + 0.8 * a, 3)})`;
}

/**
 * Molarity of a solution of known mass percentage, assuming its density is
 * about that of water (1 g/mL): only used to colour the C% beaker.
 * @param {Solute} s
 * @param {number} percent
 */
export function approxMolarity(s, percent) {
  return (percent * 10) / molarMass(s.formula);
}
