/**
 * The equilibrium 2NO2(g) ⇌ N2O4(g), forward direction exothermic, in a
 * cylinder with a piston, and the book's H2(g) + I2(g) ⇌ 2HI(g) at 445 °C.
 * Concentrations are in mol/L, volume in L, temperature in °C.
 */

/** K_C of 2NO2 ⇌ N2O4 at 25 °C, from standard Gibbs energies of formation. */
export const K_AT_25 = 167;
/** Enthalpy of N2O4 → 2NO2 over the gas constant, in kelvin (57,2 kJ/mol). */
const DH_OVER_R = 57200 / 8.314;
/** Gas constant in L·bar/(mol·K). */
const R_BAR = 0.08314;
/** Time constant of the return to equilibrium, in seconds. */
const TAU = 1.2;
/** Largest difference from equilibrium, in mol/L, still drawn as settled. */
const SETTLED = 2e-5;

/** @param {number} tC */
export function kc(tC) {
  return K_AT_25 * Math.exp(DH_OVER_R * (1 / (tC + 273.15) - 1 / 298.15));
}

/**
 * [NO2] at equilibrium when the gas holds `total` mol/L of NO2 units, that
 * is [NO2] + 2[N2O4] = total and [N2O4] = K[NO2]².
 * @param {number} total
 * @param {number} k
 */
export function equilibriumNo2(total, k) {
  return (2 * total) / (1 + Math.sqrt(1 + 8 * k * total));
}

/**
 * @typedef {object} GasState
 * @property {number} tC
 * @property {number} volume
 * @property {number} no2 [NO2]
 * @property {number} n2o4 [N2O4]
 */

/**
 * The gas at equilibrium from `moles` of NO2 units.
 * @param {number} tC
 * @param {number} volume
 * @param {number} moles
 * @returns {GasState}
 */
export function settled(tC, volume, moles) {
  const total = moles / volume;
  const no2 = equilibriumNo2(total, kc(tC));
  return { tC, volume, no2, n2o4: (total - no2) / 2 };
}

/** @param {GasState} s */
export const unitsOf = (s) => (s.no2 + 2 * s.n2o4) * s.volume;

/**
 * Compressing or expanding changes every concentration at once.
 * @param {GasState} s
 * @param {number} volume
 * @returns {GasState}
 */
export function setVolume(s, volume) {
  const f = s.volume / volume;
  return { ...s, volume, no2: s.no2 * f, n2o4: s.n2o4 * f };
}

/**
 * Pumps `moles` of one gas in, the volume staying the same.
 * @param {GasState} s
 * @param {'no2' | 'n2o4'} gas
 * @param {number} moles
 * @returns {GasState}
 */
export function addGas(s, gas, moles) {
  return { ...s, [gas]: s[gas] + moles / s.volume };
}

/**
 * The gas `dt` seconds later, closer to equilibrium; N atoms are conserved.
 * @param {GasState} s
 * @param {number} dt
 * @returns {GasState}
 */
export function relax(s, dt) {
  const total = s.no2 + 2 * s.n2o4;
  const target = equilibriumNo2(total, kc(s.tC));
  const gap = (s.no2 - target) * Math.exp(-dt / TAU);
  const no2 = Math.abs(gap) < SETTLED ? target : target + gap;
  return { ...s, no2, n2o4: (total - no2) / 2 };
}

/** @param {GasState} s */
export function isSettled(s) {
  return Math.abs(s.no2 - equilibriumNo2(s.no2 + 2 * s.n2o4, kc(s.tC))) < SETTLED;
}

/**
 * Which way the reaction runs now: 'thuan' makes N2O4, 'nghich' makes NO2.
 * @param {GasState} s
 * @returns {'thuan' | 'nghich' | 'can-bang'}
 */
export function direction(s) {
  if (isSettled(s)) return 'can-bang';
  return s.n2o4 / (s.no2 * s.no2) < kc(s.tC) ? 'thuan' : 'nghich';
}

/**
 * Forward and reverse rates as shares of the larger one, for the two bars.
 * They reach 1 and 1 exactly when the gas is at equilibrium.
 * @param {GasState} s
 */
export function rateShares(s) {
  const forward = s.no2 * s.no2 * kc(s.tC);
  const reverse = s.n2o4;
  if (isSettled(s)) return { forward: 1, reverse: 1 };
  const top = Math.max(forward, reverse);
  return { forward: forward / top, reverse: reverse / top };
}

/**
 * Pressure of the gas mixture, in bar.
 * @param {GasState} s
 */
export function pressure(s) {
  return (s.no2 + s.n2o4) * R_BAR * (s.tC + 273.15);
}

/**
 * How brown the gas looks: more NO2 absorbs more light.
 * @param {number} no2
 */
export function brownness(no2) {
  return 1 - Math.exp(-no2 / 0.03);
}

/** @typedef {'heat' | 'cool' | 'compress' | 'expand' | 'add-no2' | 'add-n2o4'} GasAction */

/** The direction Le Chatelier's principle gives for each action. */
export const ACTION_SHIFT = /** @type {Record<GasAction, 'thuan' | 'nghich'>} */ ({
  heat: 'nghich',
  cool: 'thuan',
  compress: 'thuan',
  expand: 'nghich',
  'add-no2': 'thuan',
  'add-n2o4': 'nghich',
});

/** What Le Chatelier's principle says about each action. */
export const ACTION_NOTES = /** @type {Record<GasAction, string>} */ ({
  heat: 'Tăng nhiệt độ: cân bằng chuyển dịch theo chiều nghịch, chiều thu nhiệt, để giảm tác động. Màu nâu đậm lên và $K_C$ giảm.',
  cool: 'Giảm nhiệt độ: cân bằng chuyển dịch theo chiều thuận, chiều toả nhiệt, để giảm tác động. Màu nâu nhạt đi và $K_C$ tăng.',
  compress:
    'Nén khí làm áp suất tăng: màu đậm lên ngay vì khí bị dồn lại, rồi cân bằng chuyển dịch theo chiều thuận, chiều làm giảm số mol khí, nên màu nhạt bớt. $K_C$ không đổi.',
  expand:
    'Giãn khí làm áp suất giảm: màu nhạt đi ngay, rồi cân bằng chuyển dịch theo chiều nghịch, chiều làm tăng số mol khí, nên màu đậm lại phần nào. $K_C$ không đổi.',
  'add-no2':
    'Thêm $\\mathrm{NO_2}$: cân bằng chuyển dịch theo chiều thuận để giảm bớt $\\mathrm{NO_2}$. $K_C$ không đổi.',
  'add-n2o4':
    'Thêm $\\mathrm{N_2O_4}$: cân bằng chuyển dịch theo chiều nghịch để giảm bớt $\\mathrm{N_2O_4}$. $K_C$ không đổi.',
});

/** K_C of H2(g) + I2(g) ⇌ 2HI(g) at 445 °C, from the book's experiment. */
export const HI_K = 64;

/**
 * Equilibrium of H2 + I2 ⇌ 2HI from any start, or null when nothing can
 * react (no HI and one of H2, I2 missing).
 * @param {number} h2
 * @param {number} i2
 * @param {number} hi
 * @returns {{ h2: number, i2: number, hi: number } | null}
 */
export function hiEquilibrium(h2, i2, hi) {
  if (hi <= 0 && (h2 <= 0 || i2 <= 0)) return null;
  // K(h2 − z)(i2 − z) = (hi + 2z)², the root that keeps every amount positive.
  const a = HI_K - 4;
  const b = HI_K * (h2 + i2) + 4 * hi;
  const c = HI_K * h2 * i2 - hi * hi;
  const z = (2 * c) / (b + Math.sqrt(b * b - 4 * a * c));
  return { h2: h2 - z, i2: i2 - z, hi: hi + 2 * z };
}
