/**
 * The first transition series, Sc (Z = 21) to Cu (Z = 29): electron
 * configurations of the atoms and their ions, the physical constants the
 * lesson compares, the common oxidation states and the colour of a typical
 * species in each state. An ion loses its 4s electrons first, then 3d ones.
 */
import { electronConfiguration } from '#lib/domain/elements.js';

/**
 * @typedef {object} State
 * @property {number} ox the oxidation state
 * @property {string} species a typical ion or compound, as a formula ("Cr2O7^2-")
 * @property {'dd' | 'rắn'} form in solution or a solid
 * @property {string} colour the colour in words
 * @property {string} hex the colour drawn
 */

/**
 * @typedef {object} Metal
 * @property {number} z
 * @property {string} symbol
 * @property {string} name the book's name
 * @property {number} melting melting point, °C
 * @property {number} density g/cm³
 * @property {State[]} states common oxidation states, lowest first
 * @property {number[]} usual the most common states
 */

/** Colour of a colourless solution as drawn. */
export const COLOURLESS = '#e2f3fb';

/** @type {Metal[]} */
export const METALS = [
  {
    z: 21,
    symbol: 'Sc',
    name: 'scandium',
    melting: 1541,
    density: 2.99,
    states: [{ ox: 3, species: 'Sc^3+', form: 'dd', colour: 'không màu', hex: COLOURLESS }],
    usual: [3],
  },
  {
    z: 22,
    symbol: 'Ti',
    name: 'titanium',
    melting: 1668,
    density: 4.51,
    states: [
      { ox: 2, species: 'TiCl2', form: 'rắn', colour: 'đen', hex: '#27272a' },
      { ox: 3, species: 'Ti^3+', form: 'dd', colour: 'tím', hex: '#a78bfa' },
      { ox: 4, species: 'TiO2', form: 'rắn', colour: 'trắng', hex: '#ffffff' },
    ],
    usual: [4],
  },
  {
    z: 23,
    symbol: 'V',
    name: 'vanadium',
    melting: 1910,
    density: 6.11,
    states: [
      { ox: 2, species: 'V^2+', form: 'dd', colour: 'tím', hex: '#8b5cf6' },
      { ox: 3, species: 'V^3+', form: 'dd', colour: 'xanh lục', hex: '#65a30d' },
      { ox: 4, species: 'VO^2+', form: 'dd', colour: 'xanh lam', hex: '#3b82f6' },
      { ox: 5, species: 'VO2^+', form: 'dd', colour: 'vàng', hex: '#facc15' },
    ],
    usual: [4, 5],
  },
  {
    z: 24,
    symbol: 'Cr',
    name: 'chromium',
    melting: 1907,
    density: 7.19,
    states: [
      { ox: 2, species: 'Cr^2+', form: 'dd', colour: 'xanh lam', hex: '#60a5fa' },
      { ox: 3, species: 'Cr^3+', form: 'dd', colour: 'xanh tím', hex: '#7c6fd6' },
      { ox: 6, species: 'Cr2O7^2-', form: 'dd', colour: 'da cam', hex: '#f97316' },
    ],
    usual: [3, 6],
  },
  {
    z: 25,
    symbol: 'Mn',
    name: 'manganese',
    melting: 1246,
    density: 7.44,
    states: [
      { ox: 2, species: 'Mn^2+', form: 'dd', colour: 'hồng nhạt', hex: '#fbcfe8' },
      { ox: 4, species: 'MnO2', form: 'rắn', colour: 'đen', hex: '#1f2937' },
      { ox: 6, species: 'MnO4^2-', form: 'dd', colour: 'xanh lục', hex: '#16a34a' },
      { ox: 7, species: 'MnO4^-', form: 'dd', colour: 'tím', hex: '#7e22ce' },
    ],
    usual: [2, 4, 7],
  },
  {
    z: 26,
    symbol: 'Fe',
    name: 'sắt',
    melting: 1535,
    density: 7.86,
    states: [
      { ox: 2, species: 'Fe^2+', form: 'dd', colour: 'lục nhạt', hex: '#bbf7d0' },
      { ox: 3, species: 'Fe^3+', form: 'dd', colour: 'vàng nhạt', hex: '#fde68a' },
    ],
    usual: [2, 3],
  },
  {
    z: 27,
    symbol: 'Co',
    name: 'cobalt',
    melting: 1495,
    density: 8.9,
    states: [
      { ox: 2, species: 'Co^2+', form: 'dd', colour: 'hồng đỏ', hex: '#f472b6' },
      { ox: 3, species: '[Co(NH3)6]^3+', form: 'dd', colour: 'vàng cam', hex: '#f59e0b' },
    ],
    usual: [2, 3],
  },
  {
    z: 28,
    symbol: 'Ni',
    name: 'nickel',
    melting: 1455,
    density: 8.91,
    states: [{ ox: 2, species: 'Ni^2+', form: 'dd', colour: 'xanh lục', hex: '#22c55e' }],
    usual: [2],
  },
  {
    z: 29,
    symbol: 'Cu',
    name: 'đồng',
    melting: 1084,
    density: 8.96,
    states: [
      { ox: 1, species: 'Cu2O', form: 'rắn', colour: 'đỏ gạch', hex: '#b91c1c' },
      { ox: 2, species: 'Cu^2+', form: 'dd', colour: 'xanh lam', hex: '#38bdf8' },
    ],
    usual: [2],
  },
];

/** @param {string} symbol */
export function metal(symbol) {
  const m = METALS.find((x) => x.symbol === symbol);
  if (!m) throw new Error(`Không có kim loại ${symbol}`);
  return m;
}

/**
 * The 3d and 4s electrons of a neutral atom of the series.
 * @param {number} z
 */
export function valenceOf(z) {
  const config = electronConfiguration(z);
  const d = config.find((s) => s.n === 3 && s.l === 2)?.electrons ?? 0;
  const s = config.find((x) => x.n === 4 && x.l === 0)?.electrons ?? 0;
  return { d, s };
}

/**
 * The 3d and 4s electrons left in the ion M^(charge)+: the 4s electrons go
 * first, then the 3d ones.
 * @param {number} z
 * @param {number} charge
 */
export function ionValence(z, charge) {
  const { d, s } = valenceOf(z);
  if (charge < 0 || charge > d + s) throw new Error(`Không có ion ${z}^${charge}+`);
  const fromS = Math.min(s, charge);
  return { d: d - (charge - fromS), s: s - fromS };
}

/**
 * The configuration after the argon core as TeX, "[Ar]3d^{5}4s^{1}"; a
 * subshell left empty is not written, and a bare core is "[Ar]".
 * @param {{ d: number, s: number }} v
 */
export function valenceTex(v) {
  const parts = [v.d > 0 ? `3d^{${v.d}}` : '', v.s > 0 ? `4s^{${v.s}}` : ''].join('');
  return `\\mathrm{[Ar]${parts}}`;
}

/**
 * The ion's symbol as TeX, "Fe^{3+}" (the atom itself for charge 0).
 * @param {string} symbol
 * @param {number} charge
 */
export const ionTex = (symbol, charge) =>
  charge === 0 ? symbol : `${symbol}^{${charge === 1 ? '' : charge}+}`;

/**
 * Whether an ion with this many 3d electrons is coloured: an empty or a full
 * 3d subshell gives a colourless ion (Sc³⁺, Ti⁴⁺, Cu⁺, Zn²⁺).
 * @param {number} d
 */
export const colouredByD = (d) => d > 0 && d < 10;

/**
 * Writes an oxidation state the book's way: "+3".
 * @param {number} ox
 */
export const oxText = (ox) => (ox > 0 ? `+${ox}` : String(ox));
