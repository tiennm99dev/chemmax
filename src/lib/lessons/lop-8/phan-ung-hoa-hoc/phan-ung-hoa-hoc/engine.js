/**
 * The course of a reaction at molecule level, as an animation driven by a
 * progress value t from 0 to 1: the reactant molecules sit still, then their
 * bonds break and the atoms drift apart, then the same atoms move to new
 * places and bond again into the product molecules. Atoms are never created
 * or destroyed, only re-linked.
 */

/** @typedef {{ el: string, start: [number, number], end: [number, number] }} RxAtom */
/** @typedef {[number, number]} RxBond atom indices */
/** @typedef {{ formula: string, count: number }} RxSpecies */
/**
 * @typedef {object} Reaction
 * @property {string} id
 * @property {string} label
 * @property {string} words word equation, as in the book
 * @property {string} equation equation with formulas for the domain parser
 * @property {RxAtom[]} atoms
 * @property {RxBond[]} startBonds
 * @property {RxBond[]} endBonds
 * @property {RxSpecies[]} before
 * @property {RxSpecies[]} after
 */

/** @typedef {'truoc' | 'pha-vo' | 'sap-xep' | 'sau'} Phase */

/** Progress at which the reactant bonds break. */
export const BREAK_AT = 0.25;
/** Progress at which the separated atoms start moving to their new places. */
export const MOVE_AT = 0.45;
/** Progress at which the product bonds form. */
export const FORM_AT = 0.85;

/** @param {string} el @param {[number, number]} start @param {[number, number]} end @returns {RxAtom} */
const atom = (el, start, end) => ({ el, start, end });

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    id: 'h2o',
    label: 'Hydrogen cháy trong oxygen',
    words: 'Hydrogen + Oxygen → Nước',
    equation: '2H2 + O2 -> 2H2O',
    atoms: [
      atom('H', [50, 50], [196, 80]),
      atom('H', [82, 50], [264, 80]),
      atom('H', [50, 150], [196, 172]),
      atom('H', [82, 150], [264, 172]),
      atom('O', [92, 100], [230, 58]),
      atom('O', [128, 100], [230, 150]),
    ],
    startBonds: [
      [0, 1],
      [2, 3],
      [4, 5],
    ],
    endBonds: [
      [4, 0],
      [4, 1],
      [5, 2],
      [5, 3],
    ],
    before: [
      { formula: 'H2', count: 2 },
      { formula: 'O2', count: 1 },
    ],
    after: [{ formula: 'H2O', count: 2 }],
  },
  {
    id: 'hcl',
    label: 'Hydrogen cháy trong chlorine',
    words: 'Hydrogen + Chlorine → Hydrogen chloride',
    equation: 'H2 + Cl2 -> 2HCl',
    atoms: [
      atom('H', [56, 60], [200, 60]),
      atom('H', [88, 60], [200, 140]),
      atom('Cl', [56, 140], [242, 60]),
      atom('Cl', [100, 140], [242, 140]),
    ],
    startBonds: [
      [0, 1],
      [2, 3],
    ],
    endBonds: [
      [0, 2],
      [1, 3],
    ],
    before: [
      { formula: 'H2', count: 1 },
      { formula: 'Cl2', count: 1 },
    ],
    after: [{ formula: 'HCl', count: 2 }],
  },
  {
    id: 'co2',
    label: 'Carbon cháy trong oxygen',
    words: 'Carbon + Oxygen → Carbon dioxide',
    equation: 'C + O2 -> CO2',
    atoms: [
      atom('C', [64, 70], [236, 100]),
      atom('O', [62, 140], [196, 100]),
      atom('O', [98, 140], [276, 100]),
    ],
    startBonds: [[1, 2]],
    endBonds: [
      [1, 0],
      [0, 2],
    ],
    before: [
      { formula: 'C', count: 1 },
      { formula: 'O2', count: 1 },
    ],
    after: [{ formula: 'CO2', count: 1 }],
  },
];

/**
 * @param {string} id
 * @returns {Reaction}
 */
export function reactionById(id) {
  return REACTIONS.find((r) => r.id === id) ?? REACTIONS[0];
}

/**
 * The stage of the reaction at progress t.
 * @param {number} t
 * @returns {Phase}
 */
export function phaseAt(t) {
  if (t < BREAK_AT) return 'truoc';
  if (t < MOVE_AT) return 'pha-vo';
  if (t < FORM_AT) return 'sap-xep';
  return 'sau';
}

/** @type {Record<Phase, string>} */
export const PHASE_TEXT = {
  truoc:
    'Trước phản ứng: các phân tử chất phản ứng còn nguyên, các nguyên tử trong mỗi phân tử liên kết với nhau.',
  'pha-vo':
    'Liên kết giữa các nguyên tử trong phân tử chất phản ứng bị phá vỡ, các nguyên tử tách rời nhau.',
  'sap-xep':
    'Các nguyên tử sắp xếp lại và liên kết với nhau theo cách khác: phân tử mới đang hình thành.',
  sau: 'Sau phản ứng: chỉ còn phân tử sản phẩm. Số nguyên tử mỗi nguyên tố vẫn giữ nguyên.',
};

/**
 * Groups atoms into the molecules the bonds join (connected components).
 * @param {number} n
 * @param {RxBond[]} bonds
 * @returns {number[][]}
 */
export function groups(n, bonds) {
  const parent = Array.from({ length: n }, (_, i) => i);
  /** @param {number} i @returns {number} */
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  for (const [a, b] of bonds) parent[find(a)] = find(b);
  /** @type {Map<number, number[]>} */
  const out = new Map();
  for (let i = 0; i < n; i++) {
    const r = find(i);
    out.set(r, [...(out.get(r) ?? []), i]);
  }
  return [...out.values()];
}

/**
 * Where each atom sits once its bonds broke: pushed away from the centre of
 * its reactant molecule.
 * @param {Reaction} r
 * @returns {Array<[number, number]>}
 */
export function separated(r) {
  /** @type {Array<[number, number]>} */
  const out = r.atoms.map((a) => [a.start[0], a.start[1]]);
  for (const g of groups(r.atoms.length, r.startBonds)) {
    if (g.length < 2) continue;
    const cx = g.reduce((s, i) => s + r.atoms[i].start[0], 0) / g.length;
    const cy = g.reduce((s, i) => s + r.atoms[i].start[1], 0) / g.length;
    for (const i of g) {
      const [x, y] = r.atoms[i].start;
      out[i] = [x + (x - cx) * 0.9, y + (y - cy) * 0.9];
    }
  }
  return out;
}

/** @param {number} u */
const ease = (u) => u * u * (3 - 2 * u);

/**
 * Atom positions at progress t.
 * @param {Reaction} r
 * @param {number} t
 * @returns {Array<[number, number]>}
 */
export function positionsAt(r, t) {
  const apart = separated(r);
  return r.atoms.map((a, i) => {
    if (t <= BREAK_AT) return [a.start[0], a.start[1]];
    if (t <= MOVE_AT) {
      const u = ease((t - BREAK_AT) / (MOVE_AT - BREAK_AT));
      return [
        a.start[0] + (apart[i][0] - a.start[0]) * u,
        a.start[1] + (apart[i][1] - a.start[1]) * u,
      ];
    }
    if (t >= FORM_AT) return [a.end[0], a.end[1]];
    const u = ease((t - MOVE_AT) / (FORM_AT - MOVE_AT));
    return [apart[i][0] + (a.end[0] - apart[i][0]) * u, apart[i][1] + (a.end[1] - apart[i][1]) * u];
  });
}

/**
 * The bonds drawn at progress t.
 * @param {Reaction} r
 * @param {number} t
 * @returns {RxBond[]}
 */
export function bondsAt(r, t) {
  const phase = phaseAt(t);
  if (phase === 'truoc') return r.startBonds;
  if (phase === 'sau') return r.endBonds;
  return [];
}

/**
 * Atoms of each element in the drawing, in order of first appearance. The
 * count is the same at every t: atoms are only re-linked.
 * @param {Reaction} r
 * @returns {Array<{ el: string, count: number }>}
 */
export function atomTally(r) {
  /** @type {Array<{ el: string, count: number }>} */
  const out = [];
  for (const a of r.atoms) {
    const row = out.find((x) => x.el === a.el);
    if (row) row.count += 1;
    else out.push({ el: a.el, count: 1 });
  }
  return out;
}

/**
 * Which molecules are present at progress t; empty while the atoms are apart.
 * @param {Reaction} r
 * @param {number} t
 * @returns {RxSpecies[]}
 */
export function speciesAt(r, t) {
  const phase = phaseAt(t);
  if (phase === 'truoc') return r.before;
  if (phase === 'sau') return r.after;
  return [];
}

/**
 * The next stop of the step buttons after progress t.
 * @param {number} t
 */
export function nextStop(t) {
  const stops = [0, (BREAK_AT + MOVE_AT) / 2, (MOVE_AT + FORM_AT) / 2, 1];
  return stops.find((s) => s > t + 1e-9) ?? 1;
}

/**
 * The previous stop of the step buttons before progress t.
 * @param {number} t
 */
export function prevStop(t) {
  const stops = [0, (BREAK_AT + MOVE_AT) / 2, (MOVE_AT + FORM_AT) / 2, 1];
  return [...stops].reverse().find((s) => s < t - 1e-9) ?? 0;
}
