/**
 * Radioactive decay of a sample nucleus by nucleus, and the bookkeeping of
 * nuclear equations. Each nucleus draws its own lifetime, so the count left is
 * a real random run that scatters around the N₀/2^(t/T) curve.
 */
import { rng } from '#lib/core/drill.js';
import { ELEMENTS } from '#lib/domain/elements.js';

/**
 * The count expected to be left after time t, for half-life T.
 * @param {number} n0
 * @param {number} t
 * @param {number} halfLife
 */
export const expectedLeft = (n0, t, halfLife) => n0 / 2 ** (t / halfLife);

/**
 * Random lifetimes of `count` nuclei, measured in half-lives. A nucleus
 * survives each half-life with probability one half.
 * @param {number} count
 * @param {number} seed
 * @returns {number[]}
 */
export function lifetimes(count, seed) {
  const rand = rng(seed);
  return Array.from({ length: count }, () => -Math.log2(1 - rand()));
}

/**
 * How many nuclei are left after `halves` half-lives.
 * @param {number[]} lives
 * @param {number} halves
 */
export const countLeft = (lives, halves) => lives.filter((l) => l > halves).length;

/** @typedef {{ a: number, z: number, symbol: string, count?: number }} Nuclide `count` copies of the nuclide in an equation. */

/**
 * The particle or element that a mass number and a charge number stand for,
 * written the book's way.
 * @param {number} a
 * @param {number} z
 * @returns {string}
 */
export function nuclideName(a, z) {
  if (a === 4 && z === 2) return 'hạt α (hạt nhân helium)';
  if (a === 0 && z === -1) return 'hạt β (electron)';
  if (a === 0 && z === 1) return 'positron (electron dương)';
  if (a === 1 && z === 0) return 'neutron';
  if (a === 1 && z === 1) return 'proton (hạt nhân hydrogen)';
  const el = z >= 1 ? ELEMENTS[z - 1] : undefined;
  return el ? `hạt nhân ${el.name}-${a}` : 'một hạt không có thật';
}

/**
 * TeX of a nuclide, with its count in front when an equation holds several.
 * @param {Nuclide} p
 */
export const nuclideTex = (p) =>
  `${p.count ? p.count : ''}{}^{${p.a}}_{${p.z}}\\mathrm{${p.symbol}}`;

const nu = (/** @type {number} */ a, /** @type {number} */ z, /** @type {string} */ symbol) => ({
  a,
  z,
  symbol,
});
const ALPHA = nu(4, 2, 'He');
const BETA = nu(0, -1, 'e');
const NEUTRON = nu(1, 0, 'n');

/**
 * Equations with one unknown term: `right` lists the other terms, the unknown X
 * always goes last on the right-hand side, and `answer` is X.
 * @type {Array<{ id: string, title: string, left: Nuclide[], right: Nuclide[], answer: Nuclide }>}
 */
export const EQUATIONS = [
  {
    id: 'u238',
    title: 'Phóng xạ α của uranium-238',
    left: [nu(238, 92, 'U')],
    right: [ALPHA],
    answer: nu(234, 90, 'Th'),
  },
  {
    id: 'c14',
    title: 'Phóng xạ β của carbon-14',
    left: [nu(14, 6, 'C')],
    right: [BETA],
    answer: nu(14, 7, 'N'),
  },
  {
    id: 'n14',
    title: 'Neutron trong tia vũ trụ bắn vào nitrogen-14',
    left: [nu(14, 7, 'N'), NEUTRON],
    right: [nu(14, 6, 'C')],
    answer: nu(1, 1, 'H'),
  },
  {
    id: 'al27',
    title: 'Vợ chồng Joliot-Curie tạo phóng xạ nhân tạo (1934)',
    left: [nu(27, 13, 'Al'), ALPHA],
    right: [nu(30, 15, 'P')],
    answer: NEUTRON,
  },
  {
    id: 'p30',
    title: 'Phosphorus-30 nhân tạo phóng xạ',
    left: [nu(30, 15, 'P')],
    right: [nu(30, 14, 'Si')],
    answer: nu(0, 1, 'e'),
  },
  {
    id: 'u235',
    title: 'Phân hạch uranium-235 (sinh 3 neutron)',
    left: [nu(235, 92, 'U'), NEUTRON],
    right: [nu(141, 56, 'Ba'), { ...NEUTRON, count: 3 }],
    answer: nu(92, 36, 'Kr'),
  },
  {
    id: 'dt',
    title: 'Tổng hợp hạt nhân từ deuterium và tritium',
    left: [nu(2, 1, 'H'), nu(3, 1, 'H')],
    right: [ALPHA],
    answer: NEUTRON,
  },
];

/**
 * Compares a typed X with what the two conservation laws require.
 * @param {{ left: Nuclide[], right: Nuclide[], answer: Nuclide }} eq
 * @param {number} a typed mass number
 * @param {number} z typed charge number
 * @returns {{ ok: boolean, sumA: number, sumZ: number, needA: number, needZ: number }}
 */
export function checkUnknown(eq, a, z) {
  const sum = (/** @type {Nuclide[]} */ list, /** @type {'a' | 'z'} */ key) =>
    list.reduce((s, p) => s + p[key] * (p.count ?? 1), 0);
  const sumA = sum(eq.left, 'a');
  const sumZ = sum(eq.left, 'z');
  const needA = sumA - sum(eq.right, 'a');
  const needZ = sumZ - sum(eq.right, 'z');
  return { ok: a === needA && z === needZ, sumA, sumZ, needA, needZ };
}

/**
 * Reads a typed whole number, allowing the book's minus sign.
 * @param {string} text
 * @returns {number | null}
 */
export function readWhole(text) {
  const t = text.trim().replace('−', '-');
  return /^-?\d+$/.test(t) ? Number(t) : null;
}
