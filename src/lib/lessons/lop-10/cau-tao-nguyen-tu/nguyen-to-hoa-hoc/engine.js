/**
 * Isotopes and the average atomic mass. As in the textbook, the atomic mass
 * of each isotope is taken equal to its mass number, so the average atomic
 * mass of an element with isotopes A₁, A₂ in shares x₁ %, x₂ % is
 * (A₁·x₁ + A₂·x₂) / 100.
 */

/**
 * @typedef {object} TwoIsotopes
 * @property {string} symbol
 * @property {string} name
 * @property {number} z
 * @property {[number, number]} massNumbers lighter isotope first
 * @property {number} natural share of the lighter isotope in nature, in %
 */

/** Elements with two stable isotopes, with their natural shares (in %). */
export const PRESETS = /** @type {TwoIsotopes[]} */ ([
  { symbol: 'Cl', name: 'chlorine', z: 17, massNumbers: [35, 37], natural: 75.77 },
  { symbol: 'Cu', name: 'copper', z: 29, massNumbers: [63, 65], natural: 69.15 },
  { symbol: 'Br', name: 'bromine', z: 35, massNumbers: [79, 81], natural: 50.69 },
  { symbol: 'B', name: 'boron', z: 5, massNumbers: [10, 11], natural: 19.9 },
]);

/**
 * Average atomic mass from mass numbers and their shares in percent.
 * @param {number[]} massNumbers
 * @param {number[]} percents
 */
export function averageMass(massNumbers, percents) {
  return massNumbers.reduce((sum, a, i) => sum + (a * percents[i]) / 100, 0);
}

/**
 * Share (in %) of the lighter of two isotopes that gives the average `avg`:
 * x = (A₂ − avg) / (A₂ − A₁) · 100.
 * @param {number} avg
 * @param {number} a1
 * @param {number} a2
 */
export function lighterShare(avg, a1, a2) {
  return ((a2 - avg) / (a2 - a1)) * 100;
}

/**
 * Feedback on the average for a share `x` of the lighter isotope: which
 * isotope it lies nearer to, and whether it matches nature.
 * @param {TwoIsotopes} preset
 * @param {number} x
 */
export function averageNote(preset, x) {
  const [a1, a2] = preset.massNumbers;
  const avg = averageMass([a1, a2], [x, 100 - x]);
  const natural = averageMass([a1, a2], [preset.natural, 100 - preset.natural]);
  if (Math.abs(avg - natural) < 0.005) {
    return { tone: /** @type {const} */ ('ok'), kind: 'natural', avg };
  }
  if (x === 100 || x === 0) return { tone: /** @type {const} */ ('info'), kind: 'single', avg };
  if (Math.abs(x - 50) < 1e-9) return { tone: /** @type {const} */ ('info'), kind: 'middle', avg };
  return { tone: /** @type {const} */ ('info'), kind: x > 50 ? 'lighter' : 'heavier', avg };
}

/**
 * @typedef {object} Isotope
 * @property {number} a mass number
 * @property {string} [name] its own name, when it has one
 */

/** Isotopes to explore in the isotope widget, by element. */
export const ISOTOPE_SETS =
  /** @type {Array<{ symbol: string, name: string, z: number, isotopes: Isotope[] }>} */ ([
    {
      symbol: 'H',
      name: 'hydrogen',
      z: 1,
      isotopes: [
        { a: 1, name: 'protium' },
        { a: 2, name: 'deuterium' },
        { a: 3, name: 'tritium' },
      ],
    },
    { symbol: 'C', name: 'carbon', z: 6, isotopes: [{ a: 12 }, { a: 13 }, { a: 14 }] },
    { symbol: 'O', name: 'oxygen', z: 8, isotopes: [{ a: 16 }, { a: 17 }, { a: 18 }] },
    { symbol: 'Cl', name: 'chlorine', z: 17, isotopes: [{ a: 35 }, { a: 37 }] },
  ]);

/**
 * Particle counts of the neutral atom with atomic number `z` and mass number `a`.
 * @param {number} z
 * @param {number} a
 */
export function particles(z, a) {
  return { protons: z, electrons: z, neutrons: a - z };
}

/**
 * TeX for the atomic symbol with its mass number and atomic number.
 * @param {string} symbol
 * @param {number} z
 * @param {number} a
 */
export function notationTex(symbol, z, a) {
  return `{}^{${a}}_{${z}}\\mathrm{${symbol}}`;
}
