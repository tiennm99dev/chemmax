/**
 * Valence bond (VB) picture of a complex: the orbital boxes of the free
 * central ion and of the ion in the complex, where the ligands' electron
 * pairs fill the hybrid orbitals; the shape each hybridisation gives; and
 * the cis/trans isomers of MA2B2 (square planar) and MA4B2 (octahedral).
 */
import { dot3 } from '#lib/geom-engine/solid.js';
import { tidy } from '#lib/core/number-format.js';

/** @typedef {'sp' | 'sp3' | 'dsp2' | 'd2sp3' | 'sp3d2'} Hybrid */
/** @typedef {'thang' | 'tu-dien' | 'vuong-phang' | 'bat-dien'} Shape */
/** @typedef {{ x: number, y: number, z: number }} P3 */

/**
 * Orbitals each hybridisation takes: inner d, s, p and outer d.
 * @type {Record<Hybrid, { d: number, s: number, p: number, outerD: number, shape: Shape, tex: string }>}
 */
export const HYBRIDS = {
  sp: { d: 0, s: 1, p: 1, outerD: 0, shape: 'thang', tex: 'sp' },
  sp3: { d: 0, s: 1, p: 3, outerD: 0, shape: 'tu-dien', tex: 'sp^3' },
  dsp2: { d: 1, s: 1, p: 2, outerD: 0, shape: 'vuong-phang', tex: 'dsp^2' },
  d2sp3: { d: 2, s: 1, p: 3, outerD: 0, shape: 'bat-dien', tex: 'd^2sp^3' },
  sp3d2: { d: 0, s: 1, p: 3, outerD: 2, shape: 'bat-dien', tex: 'sp^3d^2' },
};

/** @type {Record<Shape, string>} */
export const SHAPE_NAMES = {
  thang: 'đường thẳng',
  'tu-dien': 'tứ diện',
  'vuong-phang': 'vuông phẳng',
  'bat-dien': 'bát diện',
};

/**
 * @typedef {object} Complex
 * @property {string} formula ChemFormula notation
 * @property {string} ion the central ion, "Ni^2+"
 * @property {number} n shell of the d electrons (3, 4 or 5)
 * @property {number} d number of d electrons of the ion
 * @property {Hybrid} hybrid
 * @property {string} ligand the ligand as a formula
 * @property {string} donor
 */

/** The complexes of the lesson. @type {Complex[]} */
export const COMPLEXES = [
  { formula: '[Ag(NH3)2]^+', ion: 'Ag^+', n: 4, d: 10, hybrid: 'sp', ligand: 'NH3', donor: 'N' },
  { formula: '[Zn(NH3)4]^2+', ion: 'Zn^2+', n: 3, d: 10, hybrid: 'sp3', ligand: 'NH3', donor: 'N' },
  { formula: '[NiCl4]^2-', ion: 'Ni^2+', n: 3, d: 8, hybrid: 'sp3', ligand: 'Cl^-', donor: 'Cl' },
  { formula: '[Ni(CN)4]^2-', ion: 'Ni^2+', n: 3, d: 8, hybrid: 'dsp2', ligand: 'CN^-', donor: 'C' },
  { formula: '[PtCl4]^2-', ion: 'Pt^2+', n: 5, d: 8, hybrid: 'dsp2', ligand: 'Cl^-', donor: 'Cl' },
  {
    formula: '[Ti(H2O)6]^3+',
    ion: 'Ti^3+',
    n: 3,
    d: 1,
    hybrid: 'd2sp3',
    ligand: 'H2O',
    donor: 'O',
  },
  {
    formula: '[Co(NH3)6]^3+',
    ion: 'Co^3+',
    n: 3,
    d: 6,
    hybrid: 'd2sp3',
    ligand: 'NH3',
    donor: 'N',
  },
  {
    formula: '[Fe(CN)6]^3-',
    ion: 'Fe^3+',
    n: 3,
    d: 5,
    hybrid: 'd2sp3',
    ligand: 'CN^-',
    donor: 'C',
  },
  { formula: '[FeF6]^3-', ion: 'Fe^3+', n: 3, d: 5, hybrid: 'sp3d2', ligand: 'F^-', donor: 'F' },
  { formula: '[CoF6]^3-', ion: 'Co^3+', n: 3, d: 6, hybrid: 'sp3d2', ligand: 'F^-', donor: 'F' },
];

/**
 * Electrons in `boxes` orbitals by Hund's rule: one in each first, then pairs.
 * @param {number} electrons
 * @param {number} boxes
 * @returns {number[]}
 */
export function hund(electrons, boxes) {
  if (electrons > 2 * boxes) throw new Error(`${electrons} electron không đủ chỗ`);
  return Array.from(
    { length: boxes },
    (_, i) => (i < electrons ? 1 : 0) + (i < electrons - boxes ? 1 : 0),
  );
}

/**
 * @typedef {{ e: number, ligand: boolean }} Box
 * @typedef {{ label: string, boxes: Box[] }} Row
 */

/** @param {number[]} es @returns {Box[]} */
const metalBoxes = (es) => es.map((e) => ({ e, ligand: false }));
/** @param {number} k @param {number} total @returns {Box[]} */
const ligandBoxes = (k, total) =>
  Array.from({ length: total }, (_, i) => ({ e: 0, ligand: i < k }));

/**
 * The boxes of the free ion and of the ion in the complex.
 * @param {Complex} c
 */
export function orbitals(c) {
  const h = HYBRIDS[c.hybrid];
  const outer = h.outerD > 0;
  const labels = [`${c.n}d`, `${c.n + 1}s`, `${c.n + 1}p`, `${c.n + 1}d`];
  /** @type {Row[]} */
  const free = [
    { label: labels[0], boxes: metalBoxes(hund(c.d, 5)) },
    { label: labels[1], boxes: ligandBoxes(0, 1) },
    { label: labels[2], boxes: ligandBoxes(0, 3) },
  ];
  const kept = 5 - h.d;
  /** @type {Row[]} */
  const bound = [
    {
      label: labels[0],
      boxes: [...metalBoxes(hund(c.d, kept)), ...ligandBoxes(h.d, h.d)],
    },
    { label: labels[1], boxes: ligandBoxes(h.s, 1) },
    { label: labels[2], boxes: ligandBoxes(h.p, 3) },
  ];
  if (outer) {
    free.push({ label: labels[3], boxes: ligandBoxes(0, 5) });
    bound.push({ label: labels[3], boxes: ligandBoxes(h.outerD, 5) });
  }
  const count = (/** @type {Row[]} */ rows) =>
    rows.flatMap((r) => r.boxes).filter((b) => b.e === 1).length;
  const ligands = bound.flatMap((r) => r.boxes).filter((b) => b.ligand).length;
  return { free, bound, unpairedFree: count(free), unpaired: count(bound), ligands };
}

const CORE = /** @type {Record<number, string>} */ ({ 3: 'Ar', 4: 'Kr', 5: 'Xe' });

/** Electron configuration of the free ion as TeX: "[\mathrm{Ar}]3d^{8}". @param {Complex} c */
export function configTex(c) {
  const f = c.n === 5 ? '4f^{14}' : '';
  return `[\\mathrm{${CORE[c.n]}}]${f}${c.n}d^{${c.d}}`;
}

const T = 1 / Math.sqrt(3);

/** Unit vectors from the centre to each ligand. @type {Record<Shape, P3[]>} */
export const POSITIONS = {
  thang: [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
  ],
  'tu-dien': [
    { x: T, y: T, z: T },
    { x: T, y: -T, z: -T },
    { x: -T, y: T, z: -T },
    { x: -T, y: -T, z: T },
  ],
  'vuong-phang': [
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: -1, z: 0 },
  ],
  'bat-dien': [
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: -1 },
  ],
};

/**
 * Angle at the centre between two ligand positions, in degrees.
 * @param {Shape} shape
 * @param {number} i
 * @param {number} j
 */
export function angleBetween(shape, i, j) {
  const cos = dot3(POSITIONS[shape][i], POSITIONS[shape][j]);
  return tidy((Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI, 1);
}

/**
 * Outline edges of a shape: the pairs of ligands nearest to each other.
 * A straight complex has none.
 * @param {Shape} shape
 * @returns {Array<[number, number]>}
 */
export function outlineEdges(shape) {
  if (shape === 'thang') return [];
  const n = POSITIONS[shape].length;
  /** @type {Array<[number, number, number]>} */
  const pairs = [];
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) pairs.push([i, j, angleBetween(shape, i, j)]);
  const least = Math.min(...pairs.map((p) => p[2]));
  return pairs.filter((p) => p[2] === least).map(([i, j]) => [i, j]);
}

/**
 * @typedef {object} IsomerSet
 * @property {string} id
 * @property {string} label
 * @property {Shape} shape
 * @property {string} a the ligand at the other positions
 * @property {string} b the two ligands the learner places
 * @property {string} centre central atom symbol
 * @property {string} charge superscript of the complex, "" when neutral
 */

/** @type {IsomerSet[]} */
export const ISOMER_SETS = [
  {
    id: 'MA2B2',
    label: 'Vuông phẳng MA₂B₂',
    shape: 'vuong-phang',
    a: 'NH3',
    b: 'Cl',
    centre: 'Pt',
    charge: '',
  },
  {
    id: 'MA4B2',
    label: 'Bát diện MA₄B₂',
    shape: 'bat-dien',
    a: 'NH3',
    b: 'Cl',
    centre: 'Co',
    charge: '+',
  },
];

/**
 * Names the isomer made by putting the two B ligands at positions i and j.
 * @param {Shape} shape
 * @param {number[]} picked
 * @returns {{ kind: 'cis' | 'trans' | null, angle: number | null }}
 */
export function isomerOf(shape, picked) {
  if (picked.length !== 2) return { kind: null, angle: null };
  const angle = angleBetween(shape, picked[0], picked[1]);
  return { kind: angle === 180 ? 'trans' : angle === 90 ? 'cis' : null, angle };
}
