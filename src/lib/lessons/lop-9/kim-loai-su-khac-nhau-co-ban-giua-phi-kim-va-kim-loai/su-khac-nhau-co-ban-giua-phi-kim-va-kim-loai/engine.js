/**
 * Electron transfer between a metal and a nonmetal: metal atoms give away
 * their outer electrons and become positive ions, nonmetal atoms take them
 * until their outer shell holds 8 and become negative ions. The numbers of
 * atoms are the smallest that make the electrons given equal the electrons
 * taken, which is also the formula of the compound.
 */

/** @typedef {'Na' | 'K' | 'Mg' | 'Ca' | 'Al'} MetalId */
/** @typedef {'Cl' | 'O' | 'S'} NonmetalId */

/** Outer-shell electrons a metal atom gives away (its ion charge). */
export const METAL_LOSS = /** @type {Record<MetalId, number>} */ ({
  Na: 1,
  K: 1,
  Mg: 2,
  Ca: 2,
  Al: 3,
});

/** Outer-shell electrons of a nonmetal atom. */
export const NONMETAL_OUTER = /** @type {Record<NonmetalId, number>} */ ({ Cl: 7, O: 6, S: 6 });

/** Atoms in one molecule of the element as it is written in equations. */
const MOLECULE = /** @type {Record<NonmetalId, number>} */ ({ Cl: 2, O: 2, S: 1 });

/** @param {number} a @param {number} b @returns {number} */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/** @param {NonmetalId} n electrons a nonmetal atom takes to reach 8 */
export function gain(n) {
  return 8 - NONMETAL_OUTER[n];
}

const SUPERSCRIPT = /** @type {Record<string, string>} */ ({
  1: '',
  2: '²',
  3: '³',
});

/**
 * Ion symbol in plain Unicode: "Na⁺", "Al³⁺", "O²⁻".
 * @param {string} symbol @param {number} charge signed
 */
export function ionText(symbol, charge) {
  return `${symbol}${SUPERSCRIPT[Math.abs(charge)]}${charge > 0 ? '⁺' : '⁻'}`;
}

/**
 * @typedef {object} Compound
 * @property {number} metals metal atoms in one formula unit
 * @property {number} nonmetals nonmetal atoms in one formula unit
 * @property {number} electrons electrons moved in one formula unit
 * @property {string} formula e.g. "Al2O3"
 * @property {string} equation book-style equation of its formation from the elements
 */

/**
 * @param {MetalId} m
 * @param {NonmetalId} n
 * @returns {Compound}
 */
export function compound(m, n) {
  const lose = METAL_LOSS[m];
  const take = gain(n);
  const l = (lose * take) / gcd(lose, take);
  const x = l / lose;
  const y = l / take;
  const sub = (/** @type {number} */ k) => (k === 1 ? '' : String(k));
  const formula = `${m}${sub(x)}${n}${sub(y)}`;
  const k = MOLECULE[n];
  let c = k / gcd(k, y);
  let a = c * x;
  let b = (c * y) / k;
  const g = gcd(gcd(a, b), c);
  [a, b, c] = [a / g, b / g, c / g];
  const element = k === 1 ? n : `${n}${k}`;
  return {
    metals: x,
    nonmetals: y,
    electrons: l,
    formula,
    equation: `${sub(a)}${m} + ${sub(b)}${element} → ${sub(c)}${formula}`,
  };
}

/**
 * @typedef {object} Transfer
 * @property {number[]} lost electrons each metal atom has given so far
 * @property {number[]} gained electrons each nonmetal atom has taken so far
 * @property {Array<[number, number]>} moves which metal atom gave to which nonmetal atom, in order
 * @property {boolean} done
 */

/**
 * The state after `steps` electrons have moved. Electrons leave the first
 * metal atom that still has one and go to the first nonmetal atom that still
 * needs one.
 * @param {MetalId} m
 * @param {NonmetalId} n
 * @param {number} steps
 * @returns {Transfer}
 */
export function transfer(m, n, steps) {
  const c = compound(m, n);
  const lose = METAL_LOSS[m];
  const take = gain(n);
  const lost = Array(c.metals).fill(0);
  const gained = Array(c.nonmetals).fill(0);
  /** @type {Array<[number, number]>} */
  const moves = [];
  const k = Math.max(0, Math.min(c.electrons, Math.floor(steps)));
  for (let s = 0; s < k; s++) {
    const i = lost.findIndex((v) => v < lose);
    const j = gained.findIndex((v) => v < take);
    lost[i] += 1;
    gained[j] += 1;
    moves.push([i, j]);
  }
  return { lost, gained, moves, done: k === c.electrons };
}
