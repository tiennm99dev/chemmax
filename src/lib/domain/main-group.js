/**
 * Atomic properties of the main-group (A) elements of periods 1-5, plus
 * caesium and barium: the calculated atomic radius (pm, Clementi et al.,
 * which also covers the noble gases on one scale) and the first ionisation
 * energy (kJ/mol). Electronegativity comes from `elements.js`.
 */
import { element } from './elements.js';

/** z → [radius in pm, first ionisation energy in kJ/mol] */
const DATA = /** @type {Record<number, [number, number]>} */ ({
  1: [53, 1312],
  2: [31, 2372],
  3: [167, 520],
  4: [112, 900],
  5: [87, 801],
  6: [67, 1086],
  7: [56, 1402],
  8: [48, 1314],
  9: [42, 1681],
  10: [38, 2081],
  11: [190, 496],
  12: [145, 738],
  13: [118, 578],
  14: [111, 787],
  15: [98, 1012],
  16: [88, 1000],
  17: [79, 1251],
  18: [71, 1521],
  19: [243, 419],
  20: [194, 590],
  31: [136, 579],
  32: [125, 762],
  33: [114, 947],
  34: [103, 941],
  35: [94, 1140],
  36: [88, 1351],
  37: [265, 403],
  38: [219, 549],
  49: [156, 558],
  50: [145, 709],
  51: [133, 834],
  52: [123, 869],
  53: [115, 1008],
  54: [108, 1170],
  55: [298, 376],
  56: [253, 503],
});

/** @typedef {'radius' | 'electronegativity' | 'ionization'} Property */

/**
 * @typedef {object} MainGroupAtom
 * @property {number} z
 * @property {string} symbol
 * @property {number} period
 * @property {number} group 1-8, the A group number
 * @property {number} radius pm
 * @property {number} ionization kJ/mol
 * @property {number | null} electronegativity
 */

/** @type {MainGroupAtom[]} */
export const MAIN_GROUP = Object.entries(DATA).map(([key, [radius, ionization]]) => {
  const el = /** @type {import('#lib/domain/elements.js').Element} */ (element(Number(key)));
  const column = /** @type {number} */ (el.group);
  return {
    z: el.z,
    symbol: el.symbol,
    period: el.period,
    group: column <= 2 ? column : column - 10,
    radius,
    ionization,
    electronegativity: el.electronegativity,
  };
});

/** @param {number} z */
export function atom(z) {
  return MAIN_GROUP.find((a) => a.z === z);
}

/**
 * @param {MainGroupAtom} a
 * @param {Property} property
 */
export function valueOf(a, property) {
  if (property === 'radius') return a.radius;
  if (property === 'ionization') return a.ionization;
  return a.electronegativity;
}
