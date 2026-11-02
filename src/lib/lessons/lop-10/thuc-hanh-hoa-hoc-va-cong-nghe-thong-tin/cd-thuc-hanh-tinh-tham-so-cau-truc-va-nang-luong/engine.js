/**
 * Computed against measured values for small molecules, and the geometry
 * optimisation that a MOPAC run performs. AM1 results for water are the ones
 * in the lesson's own output file; the others are the published AM1 values.
 * Measured heats of formation are gas-phase values at 298 K in kJ/mol.
 */
import { GEOMETRY } from '../_shared/molecule-3d.js';

/** 1 kcal in kJ, the factor MOPAC prints its heat of formation with. */
export const KJ_PER_KCAL = 4.184;

/** @typedef {'length' | 'angle' | 'heat'} ParamKind */
/**
 * @typedef {object} ParamRow
 * @property {string} id
 * @property {string} formula
 * @property {string} what what is compared, such as 'O–H'
 * @property {number} calc
 * @property {number} exp
 */

/** @type {Record<ParamKind, { label: string, unit: string, digits: number }>} */
export const PARAM_KINDS = {
  length: { label: 'Độ dài liên kết', unit: 'Å', digits: 3 },
  angle: { label: 'Góc liên kết', unit: '°', digits: 1 },
  heat: { label: 'Nhiệt tạo thành', unit: 'kJ/mol', digits: 1 },
};

/** @type {Record<ParamKind, ParamRow[]>} */
export const PARAMS = {
  length: [
    { id: 'h2o', formula: 'H2O', what: 'O–H', calc: 0.961, exp: GEOMETRY.h2o.oh },
    { id: 'nh3', formula: 'NH3', what: 'N–H', calc: 0.998, exp: GEOMETRY.nh3.nh },
    { id: 'ch4', formula: 'CH4', what: 'C–H', calc: 1.112, exp: GEOMETRY.ch4.ch },
    { id: 'c2h6', formula: 'C2H6', what: 'C–C', calc: 1.5, exp: GEOMETRY.c2h6.cc },
    { id: 'c2h4', formula: 'C2H4', what: 'C=C', calc: 1.326, exp: GEOMETRY.c2h4.cc },
    { id: 'c2h2', formula: 'C2H2', what: 'C≡C', calc: 1.195, exp: GEOMETRY.c2h2.cc },
  ],
  angle: [
    { id: 'h2o', formula: 'H2O', what: 'H–O–H', calc: 103.5, exp: GEOMETRY.h2o.hoh },
    { id: 'nh3', formula: 'NH3', what: 'H–N–H', calc: 109.1, exp: GEOMETRY.nh3.hnh },
    { id: 'ch4', formula: 'CH4', what: 'H–C–H', calc: 109.5, exp: 109.5 },
  ],
  heat: [
    { id: 'h2o', formula: 'H2O', what: 'thể khí', calc: -247.9, exp: -241.8 },
    { id: 'nh3', formula: 'NH3', what: 'thể khí', calc: -30.5, exp: -45.9 },
    { id: 'ch4', formula: 'CH4', what: 'thể khí', calc: -36.8, exp: -74.6 },
    { id: 'c2h6', formula: 'C2H6', what: 'thể khí', calc: -72.8, exp: -84 },
    { id: 'c2h4', formula: 'C2H4', what: 'thể khí', calc: 69, exp: 52.4 },
    { id: 'c2h2', formula: 'C2H2', what: 'thể khí', calc: 229.3, exp: 227.4 },
  ],
};

/**
 * Relative error of a computed value, in percent.
 * @param {ParamRow} row
 */
export const relativeError = (row) => (Math.abs(row.calc - row.exp) / Math.abs(row.exp)) * 100;

/**
 * The row furthest from experiment.
 * @param {ParamRow[]} rows
 */
export function worstRow(rows) {
  return rows.reduce((worst, r) => (relativeError(r) > relativeError(worst) ? r : worst));
}

/** Minimum of the AM1 surface for water, read from the output file. */
export const WATER_MINIMUM = { r: 0.96127244, angle: 103.5266356, heat: -59.2505 };
/** Near the minimum, kcal/mol per Å² for both O–H bonds together. */
const K_BOND = 1150;
/** Near the minimum, kcal/mol per degree². */
const K_ANGLE = 0.0305;
/** Each step goes this share of the way to the minimum, as a damped optimiser does. */
const DAMPING = 0.5;
/** Tolerances that count as converged: Å and degrees. */
const TOL_R = 1e-4;
const TOL_ANGLE = 0.05;

/**
 * @typedef {object} OptState
 * @property {number} r O–H length, Å
 * @property {number} angle H–O–H, degrees
 * @property {boolean} freeR the optimise flag of r is 1
 * @property {boolean} freeAngle the optimise flag of the angle is 1
 * @property {number} steps
 */

/**
 * Heat of formation in kcal/mol near the minimum, a spring model of the AM1
 * surface: good enough to show what an optimiser does, not a real AM1 run.
 * @param {number} r @param {number} angle
 */
export function waterHeat(r, angle) {
  const dr = r - WATER_MINIMUM.r;
  const da = angle - WATER_MINIMUM.angle;
  return WATER_MINIMUM.heat + K_BOND * dr * dr + 0.5 * K_ANGLE * da * da;
}

/**
 * One optimisation step: only the coordinates flagged 1 move.
 * @param {OptState} s
 * @returns {OptState}
 */
export function optimiseStep(s) {
  return {
    ...s,
    r: s.freeR ? s.r + (WATER_MINIMUM.r - s.r) * DAMPING : s.r,
    angle: s.freeAngle ? s.angle + (WATER_MINIMUM.angle - s.angle) * DAMPING : s.angle,
    steps: s.steps + 1,
  };
}

/**
 * Whether the optimiser has nothing left to do: every free coordinate is at the
 * minimum within tolerance. Fixed coordinates do not count, so a wrong fixed
 * value still "converges" on a heat above the real minimum.
 * @param {OptState} s
 */
export function hasConverged(s) {
  const r = !s.freeR || Math.abs(s.r - WATER_MINIMUM.r) < TOL_R;
  const a = !s.freeAngle || Math.abs(s.angle - WATER_MINIMUM.angle) < TOL_ANGLE;
  return r && a;
}

/**
 * The MOPAC input file for this water molecule. It is a computer file, so its
 * numbers keep their decimal points. Each value is followed by 1 (optimise) or
 * 0 (keep fixed), then come the atoms it is measured from.
 * @param {OptState} s
 */
export function inputFile(s) {
  const r = s.r.toFixed(3);
  const a = s.angle.toFixed(1);
  const fr = s.freeR ? 1 : 0;
  const fa = s.freeAngle ? 1 : 0;
  return [
    'AM1 OPT ENPART',
    'Toi uu hoa cau truc phan tu H2O',
    '',
    'O   0.000 0     0.0 0   0.0 0   0 0 0',
    `H   ${r} ${fr}     0.0 0   0.0 0   1 0 0`,
    `H   ${r} ${fr}   ${a} ${fa}   0.0 0   1 2 0`,
  ].join('\n');
}
