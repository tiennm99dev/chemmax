/**
 * The three common metal lattices of the book (lập phương tâm khối,
 * lập phương tâm mặt, lục phương): the atoms of one cell, the cell's edges,
 * and an atom with its nearest neighbours, so the coordination number can be
 * counted in a turning 3D view. Lengths are in units of the cell edge (cubic)
 * or of the atom spacing in a layer (hexagonal); z points up.
 *
 * The electron sea: positive ions on a grid and free electrons that wander at
 * random, drifting one way while a voltage is applied.
 */

import { dot3, sub3 } from '#lib/geom-engine/solid.js';

/** @typedef {{ x: number, y: number, z: number }} P3 */
/** @typedef {'bcc' | 'fcc' | 'hcp'} LatticeId */

/**
 * @typedef {object} Lattice
 * @property {LatticeId} id
 * @property {string} name
 * @property {number} packing độ đặc khít, %
 * @property {number} coordination số phối trí
 * @property {string} examples metals the book lists
 */

/** @type {Lattice[]} */
export const LATTICES = [
  {
    id: 'bcc',
    name: 'Lập phương tâm khối',
    packing: 68,
    coordination: 8,
    examples: 'Li, Na, K, Ba',
  },
  {
    id: 'fcc',
    name: 'Lập phương tâm mặt',
    packing: 74,
    coordination: 12,
    examples: 'Ca, Sr, Cu',
  },
  { id: 'hcp', name: 'Lục phương', packing: 74, coordination: 12, examples: 'Be, Mg' },
];

/** @param {LatticeId} id */
export function lattice(id) {
  return /** @type {Lattice} */ (LATTICES.find((l) => l.id === id));
}

/** Height of the hexagonal cell for touching spheres of spacing 1: √(8/3). */
export const HEX_C = Math.sqrt(8 / 3);

const CORNERS = [0, 1].flatMap((x) => [0, 1].flatMap((y) => [0, 1].map((z) => ({ x, y, z }))));

/** @param {P3} p */
const centred = (p) => ({ x: p.x - 0.5, y: p.y - 0.5, z: p.z - 0.5 });

/** Six corners of a hexagon of radius 1 at height z. @param {number} z */
const hexagon = (z) =>
  Array.from({ length: 6 }, (_, i) => ({
    x: Math.cos((i * Math.PI) / 3),
    y: Math.sin((i * Math.PI) / 3),
    z,
  }));

/**
 * The atoms of one cell, centred on the origin.
 * @param {LatticeId} id
 * @returns {P3[]}
 */
export function cellAtoms(id) {
  if (id === 'bcc') return [...CORNERS, { x: 0.5, y: 0.5, z: 0.5 }].map(centred);
  if (id === 'fcc')
    return [
      ...CORNERS,
      { x: 0.5, y: 0.5, z: 0 },
      { x: 0.5, y: 0.5, z: 1 },
      { x: 0.5, y: 0, z: 0.5 },
      { x: 0.5, y: 1, z: 0.5 },
      { x: 0, y: 0.5, z: 0.5 },
      { x: 1, y: 0.5, z: 0.5 },
    ].map(centred);
  const h = HEX_C / 2;
  // The middle layer sits over the centres of alternate triangles of the hexagon.
  const middle = [0, 1, 2].map((i) => {
    const a = Math.PI / 6 + (i * 2 * Math.PI) / 3;
    return { x: Math.cos(a) / Math.sqrt(3), y: Math.sin(a) / Math.sqrt(3), z: 0 };
  });
  return [...hexagon(-h), { x: 0, y: 0, z: -h }, ...middle, ...hexagon(h), { x: 0, y: 0, z: h }];
}

/**
 * Edges of the cell outline as pairs of points.
 * @param {LatticeId} id
 * @returns {Array<[P3, P3]>}
 */
export function cellEdges(id) {
  if (id !== 'hcp') {
    const c = CORNERS.map(centred);
    /** @type {Array<[P3, P3]>} */
    const out = [];
    for (let i = 0; i < c.length; i++)
      for (let j = i + 1; j < c.length; j++) {
        const d = Math.abs(c[i].x - c[j].x) + Math.abs(c[i].y - c[j].y) + Math.abs(c[i].z - c[j].z);
        if (d === 1) out.push([c[i], c[j]]);
      }
    return out;
  }
  const h = HEX_C / 2;
  const low = hexagon(-h);
  const high = hexagon(h);
  return [
    ...low.map((p, i) => /** @type {[P3, P3]} */ ([p, low[(i + 1) % 6]])),
    ...high.map((p, i) => /** @type {[P3, P3]} */ ([p, high[(i + 1) % 6]])),
    ...low.map((p, i) => /** @type {[P3, P3]} */ ([p, high[i]])),
  ];
}

/** @param {P3} a @param {P3} b */
const dist = (a, b) => Math.sqrt(dot3(sub3(a, b), sub3(a, b)));

/**
 * A patch of the lattice around the origin, which is an atom.
 * @param {LatticeId} id
 * @returns {P3[]}
 */
export function patch(id) {
  /** @type {P3[]} */
  const out = [];
  const R = [-2, -1, 0, 1, 2];
  if (id === 'bcc' || id === 'fcc') {
    const basis =
      id === 'bcc'
        ? [
            { x: 0, y: 0, z: 0 },
            { x: 0.5, y: 0.5, z: 0.5 },
          ]
        : [
            { x: 0, y: 0, z: 0 },
            { x: 0.5, y: 0.5, z: 0 },
            { x: 0.5, y: 0, z: 0.5 },
            { x: 0, y: 0.5, z: 0.5 },
          ];
    for (const i of R)
      for (const j of R)
        for (const k of R) for (const b of basis) out.push({ x: i + b.x, y: j + b.y, z: k + b.z });
    return out;
  }
  // Layers A (z = 0, ±c) and B (z = ±c/2), shifted by (1/2, √3/6).
  for (const layer of [-2, -1, 0, 1, 2]) {
    const z = (layer * HEX_C) / 2;
    const shift = layer % 2 === 0 ? { x: 0, y: 0 } : { x: 0.5, y: Math.sqrt(3) / 6 };
    for (const m of R)
      for (const n of R)
        out.push({ x: m + n / 2 + shift.x, y: (n * Math.sqrt(3)) / 2 + shift.y, z });
  }
  return out;
}

/**
 * The nearest neighbours of the atom at the origin.
 * @param {LatticeId} id
 * @returns {P3[]}
 */
export function neighbours(id) {
  const atoms = patch(id).filter((p) => dist(p, { x: 0, y: 0, z: 0 }) > 1e-9);
  const nearest = Math.min(...atoms.map((p) => dist(p, { x: 0, y: 0, z: 0 })));
  return atoms.filter((p) => dist(p, { x: 0, y: 0, z: 0 }) < nearest + 1e-6);
}

/* ---------------- Electron sea ---------------- */

/** @typedef {{ x: number, y: number, vx: number, vy: number }} Electron */

/** Field of the electron sea, in drawing units. */
export const SEA = { width: 320, height: 160 };

/**
 * Free electrons at seeded random places and speeds.
 * @param {number} count
 * @param {() => number} rand values in [0, 1)
 * @returns {Electron[]}
 */
export function seedElectrons(count, rand) {
  return Array.from({ length: count }, () => {
    const a = rand() * Math.PI * 2;
    const speed = 30 + rand() * 30;
    return {
      x: rand() * SEA.width,
      y: rand() * SEA.height,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed,
    };
  });
}

/**
 * Moves the electrons on by `dt` seconds. They bounce off the top and bottom
 * edges and come back on the other side when they leave left or right; with a
 * voltage they also drift towards the positive pole on the right.
 * @param {Electron[]} electrons
 * @param {number} dt
 * @param {boolean} voltage
 * @returns {Electron[]}
 */
export function stepElectrons(electrons, dt, voltage) {
  const drift = voltage ? 45 : 0;
  return electrons.map((e) => {
    let x = e.x + (e.vx + drift) * dt;
    let y = e.y + e.vy * dt;
    let vy = e.vy;
    if (y < 0) {
      y = -y;
      vy = -vy;
    } else if (y > SEA.height) {
      y = 2 * SEA.height - y;
      vy = -vy;
    }
    x = ((x % SEA.width) + SEA.width) % SEA.width;
    return { x, y, vx: e.vx, vy };
  });
}
