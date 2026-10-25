/**
 * Small molecules as 2D ball-and-stick drawings: atoms with plane
 * coordinates (ångström-like units, y up) and bonds with their order. The
 * drawings follow the textbook structural formulas, so they are flat
 * projections, not 3D geometry.
 */
import { element } from './elements.js';

/** @typedef {{ el: string, x: number, y: number }} Atom */
/** @typedef {{ a: number, b: number, order: 1 | 2 | 3 }} Bond */
/** @typedef {{ id: string, name: string, formula: string, atoms: Atom[], bonds: Bond[] }} Molecule */

/** @param {string} el @param {number} x @param {number} y @returns {Atom} */
const at = (el, x, y) => ({ el, x, y });
/** @param {number} a @param {number} b @param {1 | 2 | 3} [order] @returns {Bond} */
const bond = (a, b, order = 1) => ({ a, b, order });

/** @type {Molecule[]} */
export const MOLECULES = [
  {
    id: 'h2',
    name: 'Hydrogen',
    formula: 'H2',
    atoms: [at('H', -0.37, 0), at('H', 0.37, 0)],
    bonds: [bond(0, 1)],
  },
  {
    id: 'o2',
    name: 'Oxygen',
    formula: 'O2',
    atoms: [at('O', -0.6, 0), at('O', 0.6, 0)],
    bonds: [bond(0, 1, 2)],
  },
  {
    id: 'n2',
    name: 'Nitrogen',
    formula: 'N2',
    atoms: [at('N', -0.55, 0), at('N', 0.55, 0)],
    bonds: [bond(0, 1, 3)],
  },
  {
    id: 'cl2',
    name: 'Chlorine',
    formula: 'Cl2',
    atoms: [at('Cl', -1, 0), at('Cl', 1, 0)],
    bonds: [bond(0, 1)],
  },
  {
    id: 'hcl',
    name: 'Hydrogen chloride',
    formula: 'HCl',
    atoms: [at('H', -0.75, 0), at('Cl', 0.75, 0)],
    bonds: [bond(0, 1)],
  },
  {
    id: 'h2o',
    name: 'Nước',
    formula: 'H2O',
    atoms: [at('O', 0, 0.2), at('H', -0.76, -0.39), at('H', 0.76, -0.39)],
    bonds: [bond(0, 1), bond(0, 2)],
  },
  {
    id: 'co2',
    name: 'Carbon dioxide',
    formula: 'CO2',
    atoms: [at('C', 0, 0), at('O', -1.16, 0), at('O', 1.16, 0)],
    bonds: [bond(0, 1, 2), bond(0, 2, 2)],
  },
  {
    id: 'so2',
    name: 'Sulfur dioxide',
    formula: 'SO2',
    atoms: [at('S', 0, 0.25), at('O', -1.24, -0.45), at('O', 1.24, -0.45)],
    bonds: [bond(0, 1, 2), bond(0, 2, 2)],
  },
  {
    id: 'nh3',
    name: 'Ammonia',
    formula: 'NH3',
    atoms: [at('N', 0, 0.25), at('H', -0.95, -0.25), at('H', 0.95, -0.25), at('H', 0, -0.85)],
    bonds: [bond(0, 1), bond(0, 2), bond(0, 3)],
  },
  {
    id: 'ch4',
    name: 'Methane',
    formula: 'CH4',
    atoms: [
      at('C', 0, 0),
      at('H', 0, 1.09),
      at('H', 1.09, 0),
      at('H', 0, -1.09),
      at('H', -1.09, 0),
    ],
    bonds: [bond(0, 1), bond(0, 2), bond(0, 3), bond(0, 4)],
  },
  {
    id: 'c2h6',
    name: 'Ethane',
    formula: 'C2H6',
    atoms: [
      at('C', -0.77, 0),
      at('C', 0.77, 0),
      at('H', -0.77, 1.09),
      at('H', -1.86, 0),
      at('H', -0.77, -1.09),
      at('H', 0.77, 1.09),
      at('H', 1.86, 0),
      at('H', 0.77, -1.09),
    ],
    bonds: [bond(0, 1), bond(0, 2), bond(0, 3), bond(0, 4), bond(1, 5), bond(1, 6), bond(1, 7)],
  },
  {
    id: 'c2h4',
    name: 'Ethylene',
    formula: 'C2H4',
    atoms: [
      at('C', -0.67, 0),
      at('C', 0.67, 0),
      at('H', -1.23, 0.92),
      at('H', -1.23, -0.92),
      at('H', 1.23, 0.92),
      at('H', 1.23, -0.92),
    ],
    bonds: [bond(0, 1, 2), bond(0, 2), bond(0, 3), bond(1, 4), bond(1, 5)],
  },
  {
    id: 'c2h2',
    name: 'Acetylene',
    formula: 'C2H2',
    atoms: [at('C', -0.6, 0), at('C', 0.6, 0), at('H', -1.66, 0), at('H', 1.66, 0)],
    bonds: [bond(0, 1, 3), bond(0, 2), bond(1, 3)],
  },
  {
    id: 'c2h5oh',
    name: 'Ethanol',
    formula: 'C2H5OH',
    atoms: [
      at('C', -1.3, 0),
      at('C', 0.2, 0),
      at('O', 1.6, 0),
      at('H', 2.4, 0.6),
      at('H', -1.3, 1.09),
      at('H', -2.39, 0),
      at('H', -1.3, -1.09),
      at('H', 0.2, 1.09),
      at('H', 0.2, -1.09),
    ],
    bonds: [
      bond(0, 1),
      bond(1, 2),
      bond(2, 3),
      bond(0, 4),
      bond(0, 5),
      bond(0, 6),
      bond(1, 7),
      bond(1, 8),
    ],
  },
  {
    id: 'ch3cooh',
    name: 'Acetic acid',
    formula: 'CH3COOH',
    atoms: [
      at('C', -0.75, 0),
      at('C', 0.75, 0),
      at('O', 1.45, 1.05),
      at('O', 1.45, -1.05),
      at('H', 2.4, -1.05),
      at('H', -0.75, 1.09),
      at('H', -1.84, 0),
      at('H', -0.75, -1.09),
    ],
    bonds: [bond(0, 1), bond(1, 2, 2), bond(1, 3), bond(3, 4), bond(0, 5), bond(0, 6), bond(0, 7)],
  },
  {
    id: 'c6h6',
    name: 'Benzene',
    formula: 'C6H6',
    atoms: [
      ...Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i + Math.PI / 2;
        return at('C', round(1.39 * Math.cos(a)), round(1.39 * Math.sin(a)));
      }),
      ...Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i + Math.PI / 2;
        return at('H', round(2.48 * Math.cos(a)), round(2.48 * Math.sin(a)));
      }),
    ],
    bonds: [
      bond(0, 1, 2),
      bond(1, 2),
      bond(2, 3, 2),
      bond(3, 4),
      bond(4, 5, 2),
      bond(5, 0),
      ...Array.from({ length: 6 }, (_, i) => bond(i, i + 6)),
    ],
  },
];

/** @param {number} v */
function round(v) {
  return Math.round(v * 1000) / 1000;
}

/** @param {string} id */
export function molecule(id) {
  return MOLECULES.find((m) => m.id === id);
}

/** CPK colours used in school models. */
export const ATOM_COLORS = /** @type {Record<string, string>} */ ({
  H: '#f8fafc',
  C: '#334155',
  N: '#2563eb',
  O: '#dc2626',
  F: '#84cc16',
  Cl: '#16a34a',
  Br: '#9a3412',
  I: '#7e22ce',
  S: '#eab308',
  P: '#f97316',
});

/** Covalent radii in ångström for ball sizes; others default to 1. */
const COVALENT_RADIUS = /** @type {Record<string, number>} */ ({
  H: 0.31,
  C: 0.76,
  N: 0.71,
  O: 0.66,
  F: 0.57,
  Cl: 1.02,
  Br: 1.2,
  I: 1.39,
  S: 1.05,
  P: 1.07,
});

/** @param {string} el */
export function atomColor(el) {
  return ATOM_COLORS[el] ?? '#f472b6';
}

/** @param {string} el */
export function covalentRadius(el) {
  return COVALENT_RADIUS[el] ?? 1;
}

/**
 * Atom counts of a drawn molecule.
 * @param {Molecule} mol
 * @returns {Record<string, number>}
 */
export function composition(mol) {
  /** @type {Record<string, number>} */
  const out = {};
  for (const a of mol.atoms) out[a.el] = (out[a.el] ?? 0) + 1;
  return out;
}

/**
 * Sum of bond orders at each atom: the valence it shows in the drawing.
 * @param {Molecule} mol
 */
export function bondValences(mol) {
  const v = mol.atoms.map(() => 0);
  for (const b of mol.bonds) {
    v[b.a] += b.order;
    v[b.b] += b.order;
  }
  return v;
}

/**
 * Bond counts by order: { single, double, triple }.
 * @param {Molecule} mol
 */
export function bondSummary(mol) {
  const count = (/** @type {number} */ k) => mol.bonds.filter((b) => b.order === k).length;
  return { single: count(1), double: count(2), triple: count(3) };
}

/**
 * Molar mass in g/mol of the drawn atoms.
 * @param {Molecule} mol
 */
export function moleculeMass(mol) {
  const m = mol.atoms.reduce((s, a) => s + (element(a.el)?.mass ?? 0), 0);
  return Math.round(m * 1000) / 1000;
}

/**
 * Rotates the molecule by `degrees` counter-clockwise and fits it into a
 * `width` × `height` box with `pad` pixels free at the edges, flipping y for
 * SVG. Returns pixel positions, ball radii and the scale used.
 * @param {Molecule} mol
 * @param {{ width: number, height: number, pad: number, degrees?: number, maxScale?: number }} box
 */
export function layout(mol, { width, height, pad, degrees = 0, maxScale = 70 }) {
  const t = (degrees * Math.PI) / 180;
  const [c, s] = [Math.cos(t), Math.sin(t)];
  const pts = mol.atoms.map((a) => ({ x: a.x * c - a.y * s, y: a.x * s + a.y * c }));
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const span = Math.max(x1 - x0, y1 - y0, 1e-9);
  const scale = Math.min(maxScale, (Math.min(width, height) - 2 * pad) / span);
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  return {
    scale,
    atoms: mol.atoms.map((a, i) => ({
      ...a,
      px: width / 2 + (pts[i].x - mx) * scale,
      py: height / 2 - (pts[i].y - my) * scale,
      r: scale * (0.18 + 0.32 * covalentRadius(a.el)),
    })),
  };
}

/**
 * Parallel segments drawing a bond of the given order between two points,
 * `gap` pixels apart.
 * @param {{ x: number, y: number }} p
 * @param {{ x: number, y: number }} q
 * @param {1 | 2 | 3} order
 * @param {number} gap
 * @returns {Array<{ x1: number, y1: number, x2: number, y2: number }>}
 */
export function bondSegments(p, q, order, gap) {
  const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
  const nx = -(q.y - p.y) / len;
  const ny = (q.x - p.x) / len;
  const offsets = order === 1 ? [0] : order === 2 ? [-0.5, 0.5] : [-1, 0, 1];
  return offsets.map((k) => ({
    x1: p.x + nx * k * gap,
    y1: p.y + ny * k * gap,
    x2: q.x + nx * k * gap,
    y2: q.y + ny * k * gap,
  }));
}
