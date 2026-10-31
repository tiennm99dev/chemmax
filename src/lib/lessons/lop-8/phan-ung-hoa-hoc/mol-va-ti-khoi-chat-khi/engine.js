/**
 * The four ways of measuring an amount of substance and how they convert:
 * amount n (mol), mass m = n·M (g), particles N = n·N_A, and for a gas at
 * standard conditions (25 °C, 1 bar) volume V = 24,79·n (L). Also the
 * relative density of two gases, d = M_A / M_B.
 */
import { AIR_MOLAR_MASS, AVOGADRO, MOLAR_VOLUME, molarMass } from '../_shared/molar.js';
import { tidy } from '#lib/core/number-format.js';

/** @typedef {'n' | 'm' | 'N' | 'V'} Quantity */
/** @typedef {{ formula: string, name: string, gas: boolean }} Substance */

/** @type {Substance[]} */
export const SUBSTANCES = [
  { formula: 'H2', name: 'Hydrogen', gas: true },
  { formula: 'O2', name: 'Oxygen', gas: true },
  { formula: 'N2', name: 'Nitrogen', gas: true },
  { formula: 'CO2', name: 'Carbon dioxide', gas: true },
  { formula: 'CH4', name: 'Methane', gas: true },
  { formula: 'NH3', name: 'Ammonia', gas: true },
  { formula: 'SO2', name: 'Sulfur dioxide', gas: true },
  { formula: 'Cl2', name: 'Chlorine', gas: true },
  { formula: 'H2O', name: 'Nước (lỏng)', gas: false },
  { formula: 'NaCl', name: 'Sodium chloride (rắn)', gas: false },
  { formula: 'Fe', name: 'Sắt (rắn)', gas: false },
  { formula: 'CaCO3', name: 'Calcium carbonate (rắn)', gas: false },
];

/** Gases for the relative density comparison; "kk" is air. */
export const GASES = [
  ...SUBSTANCES.filter((s) => s.gas),
  { formula: 'kk', name: 'Không khí', gas: true },
];

/**
 * @param {string} formula
 * @returns {Substance}
 */
export function substance(formula) {
  return SUBSTANCES.find((s) => s.formula === formula) ?? SUBSTANCES[0];
}

/**
 * Molar mass of a gas for the relative density, air included.
 * @param {string} formula a formula, or "kk" for air
 */
export function gasMass(formula) {
  return formula === 'kk' ? AIR_MOLAR_MASS : molarMass(formula);
}

/**
 * Every quantity from one known quantity. V is null for a substance that is
 * not a gas, since 24,79 L/mol holds only for gases.
 * @param {string} formula
 * @param {Quantity} kind
 * @param {number} value
 * @returns {{ M: number, n: number, m: number, N: number, V: number | null } | null}
 */
export function convert(formula, kind, value) {
  if (!(value >= 0) || !Number.isFinite(value)) return null;
  const s = substance(formula);
  const M = molarMass(s.formula);
  let n;
  if (kind === 'n') n = value;
  else if (kind === 'm') n = value / M;
  else if (kind === 'N') n = value / AVOGADRO;
  else {
    if (!s.gas) return null;
    n = value / MOLAR_VOLUME;
  }
  return {
    M,
    n: tidy(n),
    m: tidy(n * M),
    N: n * AVOGADRO,
    V: s.gas ? tidy(n * MOLAR_VOLUME) : null,
  };
}

/**
 * Relative density of gas A to gas B.
 * @param {string} a
 * @param {string} b
 */
export function relativeDensity(a, b) {
  return gasMass(a) / gasMass(b);
}

/**
 * How a balloon of gas A behaves in air.
 * @param {string} formula
 * @returns {'bay-len' | 'chim-xuong' | 'lo-lung'}
 */
export function balloonIn(formula) {
  const d = relativeDensity(formula, 'kk');
  if (Math.abs(d - 1) < 0.05) return 'lo-lung';
  return d < 1 ? 'bay-len' : 'chim-xuong';
}

/** Moles one dot of the particle pile stands for. */
export const MOL_PER_DOT = 0.1;
/** Largest number of dots drawn. */
export const MAX_DOTS = 60;

/**
 * Dots to draw for an amount: one per 0,1 mol, capped.
 * @param {number} n
 */
export function dotCount(n) {
  return Math.min(MAX_DOTS, Math.round(n / MOL_PER_DOT));
}
