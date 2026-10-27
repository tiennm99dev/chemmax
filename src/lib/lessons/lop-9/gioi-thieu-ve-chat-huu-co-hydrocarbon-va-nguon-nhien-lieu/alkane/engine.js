/**
 * The first four alkanes CnH2n+2: ball-and-stick drawings of the straight
 * chains and their combustion CnH2n+2 + O2 → CO2 + H2O, with an atom tally
 * so the learner can balance it.
 */

/** @typedef {import('#lib/domain/molecule.js').Molecule} Molecule */
/** @typedef {[number, number, number, number]} Coefficients alkane, O2, CO2, H2O */

export const ALKANES = [
  { n: 1, name: 'Methane', condensed: 'CH4', boils: -162 },
  { n: 2, name: 'Ethane', condensed: 'CH3–CH3', boils: -89 },
  { n: 3, name: 'Propane', condensed: 'CH3–CH2–CH3', boils: -42 },
  { n: 4, name: 'Butane', condensed: 'CH3–CH2–CH2–CH3', boils: -1 },
];

/** @param {number} n number of carbon atoms */
export function alkaneFormula(n) {
  return `${n === 1 ? 'C' : `C${n}`}H${2 * n + 2}`;
}

/** @param {number} n */
export function molarMass(n) {
  return 12 * n + (2 * n + 2);
}

/**
 * Straight-chain drawing as the book prints it: carbons in a row, one H
 * above and one below each carbon, one more H at each end.
 * @param {number} n
 * @returns {Molecule}
 */
export function alkaneMolecule(n) {
  const CC = 1.54;
  const CH = 1.09;
  /** @type {Molecule['atoms']} */
  const atoms = [];
  /** @type {Molecule['bonds']} */
  const bonds = [];
  for (let i = 0; i < n; i++) atoms.push({ el: 'C', x: i * CC, y: 0 });
  for (let i = 1; i < n; i++) bonds.push({ a: i - 1, b: i, order: 1 });
  /** @param {number} c @param {number} x @param {number} y */
  const h = (c, x, y) => {
    atoms.push({ el: 'H', x, y });
    bonds.push({ a: c, b: atoms.length - 1, order: 1 });
  };
  for (let i = 0; i < n; i++) {
    h(i, i * CC, CH);
    h(i, i * CC, -CH);
  }
  h(0, -CH, 0);
  h(n - 1, (n - 1) * CC + CH, 0);
  const info = ALKANES[n - 1];
  return {
    id: `alkane-${n}`,
    name: info?.name ?? `C${n}`,
    formula: alkaneFormula(n),
    atoms,
    bonds,
  };
}

/**
 * Smallest whole-number coefficients of the complete combustion.
 * @param {number} n
 * @returns {Coefficients}
 */
export function combustion(n) {
  return n % 2 === 1 ? [1, (3 * n + 1) / 2, n, n + 1] : [2, 3 * n + 1, 2 * n, 2 * n + 2];
}

/**
 * Atoms of each element on both sides for the given coefficients.
 * @param {number} n
 * @param {Coefficients} k
 */
export function tally(n, [a, o2, co2, h2o]) {
  return {
    C: [a * n, co2],
    H: [a * (2 * n + 2), 2 * h2o],
    O: [2 * o2, 2 * co2 + h2o],
  };
}

/**
 * @param {number} n
 * @param {Coefficients} k
 */
export function isBalanced(n, k) {
  return Object.values(tally(n, k)).every(([l, r]) => l === r);
}

/** @param {number[]} k */
function gcd(...k) {
  /** @type {(a: number, b: number) => number} */
  const g = (a, b) => (b ? g(b, a % b) : a);
  return k.reduce(g);
}

/**
 * Whether balanced coefficients are the smallest whole numbers.
 * @param {Coefficients} k
 */
export function isSimplest(k) {
  return gcd(...k) === 1;
}

/**
 * Book-style equation text.
 * @param {number} n
 * @param {Coefficients} k
 */
export function equationText(n, [a, o2, co2, h2o]) {
  const c = (/** @type {number} */ x) => (x === 1 ? '' : String(x));
  return `${c(a)}${alkaneFormula(n)} + ${c(o2)}O2 → ${c(co2)}CO2 + ${c(h2o)}H2O`;
}
