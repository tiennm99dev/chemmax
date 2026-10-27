/**
 * Structural-formula builder: the atoms of a molecular formula are laid out
 * on a board and the learner joins them with single or double bonds. A
 * structure is valid when every atom uses exactly its valence (C IV, O II,
 * H I, Cl I) and all atoms form one molecule. Valid structures are written
 * back as condensed formulas ("CH3–CH2–OH") and named.
 */

/** @typedef {'C' | 'H' | 'O' | 'Cl'} El */
/** @typedef {{ a: number, b: number, order: 1 | 2 }} Bond */
/** @typedef {{ el: El, x: number, y: number }} PlacedAtom */
/**
 * @typedef {{
 *   id: string;
 *   formula: string;
 *   heavy: El[];
 *   hydrogens: number;
 *   answers: Array<Array<[number, number, 1 | 2]>>;
 * }} Target
 */

/** @type {Record<El, number>} */
export const VALENCE = { C: 4, H: 1, O: 2, Cl: 1 };

/** @type {Record<El, string>} */
export const ELEMENT_NAMES = { C: 'carbon', H: 'hydrogen', O: 'oxygen', Cl: 'chlorine' };

/**
 * Molecular formulas to build. `answers` lists the bonds between the heavy
 * atoms (indices into `heavy`) of every valid structure.
 * @type {Target[]}
 */
export const TARGETS = [
  { id: 'ch4', formula: 'CH4', heavy: ['C'], hydrogens: 4, answers: [[]] },
  { id: 'ch3cl', formula: 'CH3Cl', heavy: ['C', 'Cl'], hydrogens: 3, answers: [[[0, 1, 1]]] },
  { id: 'c2h6', formula: 'C2H6', heavy: ['C', 'C'], hydrogens: 6, answers: [[[0, 1, 1]]] },
  { id: 'c2h4', formula: 'C2H4', heavy: ['C', 'C'], hydrogens: 4, answers: [[[0, 1, 2]]] },
  { id: 'ch4o', formula: 'CH4O', heavy: ['C', 'O'], hydrogens: 4, answers: [[[0, 1, 1]]] },
  {
    id: 'c2h6o',
    formula: 'C2H6O',
    heavy: ['C', 'C', 'O'],
    hydrogens: 6,
    answers: [
      [
        [0, 1, 1],
        [1, 2, 1],
      ],
      [
        [0, 2, 1],
        [1, 2, 1],
      ],
    ],
  },
  {
    id: 'c3h8',
    formula: 'C3H8',
    heavy: ['C', 'C', 'C'],
    hydrogens: 8,
    answers: [
      [
        [0, 1, 1],
        [1, 2, 1],
      ],
    ],
  },
];

/** Names of the compounds a valid structure can be, by condensed formula. */
export const NAMES = /** @type {Record<string, { name: string, kind: string }>} */ ({
  CH4: { name: 'methane', kind: 'hydrocarbon' },
  'CH3–Cl': { name: 'chloromethane', kind: 'dẫn xuất của hydrocarbon' },
  'CH3–CH3': { name: 'ethane', kind: 'hydrocarbon' },
  'CH2=CH2': { name: 'ethylene', kind: 'hydrocarbon' },
  'CH3–OH': { name: 'methanol', kind: 'dẫn xuất của hydrocarbon' },
  'CH3–CH2–OH': { name: 'ethylic alcohol (ethanol)', kind: 'dẫn xuất của hydrocarbon' },
  'CH3–O–CH3': { name: 'dimethyl ether', kind: 'dẫn xuất của hydrocarbon' },
  'CH3–CH2–CH3': { name: 'propane', kind: 'hydrocarbon' },
});

export const BOARD = { width: 360, height: 260 };

/** @param {string} id */
export function target(id) {
  const t = TARGETS.find((x) => x.id === id);
  if (!t) throw new Error(`Không có công thức ${id}`);
  return t;
}

/**
 * Places the heavy atoms in a zigzag deep enough that a bond between the two ends clears the middle atom, in the middle of the board and
 * the hydrogen atoms on an ellipse around them.
 * @param {Target} t
 * @returns {PlacedAtom[]}
 */
export function placeAtoms(t) {
  const SPOTS = [
    [[180, 130]],
    [
      [140, 130],
      [220, 130],
    ],
    [
      [110, 154],
      [180, 96],
      [250, 154],
    ],
  ][t.heavy.length - 1];
  /** @type {PlacedAtom[]} */
  const atoms = t.heavy.map((el, i) => ({ el, x: SPOTS[i][0], y: SPOTS[i][1] }));
  for (let k = 0; k < t.hydrogens; k++) {
    const angle = Math.PI / 2 + (2 * Math.PI * (k + 0.5)) / t.hydrogens;
    atoms.push({
      el: 'H',
      x: Math.round(180 + 150 * Math.cos(angle)),
      y: Math.round(130 - 100 * Math.sin(angle)),
    });
  }
  return atoms;
}

/** @param {number} a @param {number} b */
export function bondKey(a, b) {
  return a < b ? `${a}-${b}` : `${b}-${a}`;
}

/**
 * Highest bond order allowed between two elements: a double bond needs two
 * atoms of valence two or more.
 * @param {El} p
 * @param {El} q
 */
export function maxOrder(p, q) {
  return VALENCE[p] >= 2 && VALENCE[q] >= 2 ? 2 : 1;
}

/**
 * The bond list after tapping atoms `a` and `b`: no bond becomes single,
 * single becomes double where allowed, and the highest order is removed.
 * @param {PlacedAtom[]} atoms
 * @param {Bond[]} bonds
 * @param {number} a
 * @param {number} b
 * @returns {Bond[]}
 */
export function cycleBond(atoms, bonds, a, b) {
  if (a === b) return bonds;
  const key = bondKey(a, b);
  const old = bonds.find((x) => bondKey(x.a, x.b) === key);
  const rest = bonds.filter((x) => x !== old);
  const top = maxOrder(atoms[a].el, atoms[b].el);
  if (!old) return [...rest, { a: Math.min(a, b), b: Math.max(a, b), order: 1 }];
  if (old.order < top) return [...rest, { ...old, order: 2 }];
  return rest;
}

/**
 * Number of shared electron pairs each atom takes part in.
 * @param {number} count
 * @param {Bond[]} bonds
 */
export function usedValence(count, bonds) {
  const used = Array.from({ length: count }, () => 0);
  for (const b of bonds) {
    used[b.a] += b.order;
    used[b.b] += b.order;
  }
  return used;
}

/**
 * @param {number} count
 * @param {Bond[]} bonds
 */
function isConnected(count, bonds) {
  const seen = new Set([0]);
  const stack = [0];
  while (stack.length) {
    const i = /** @type {number} */ (stack.pop());
    for (const b of bonds) {
      const j = b.a === i ? b.b : b.b === i ? b.a : -1;
      if (j >= 0 && !seen.has(j)) {
        seen.add(j);
        stack.push(j);
      }
    }
  }
  return seen.size === count;
}

/**
 * Checks a structure.
 * @param {PlacedAtom[]} atoms
 * @param {Bond[]} bonds
 * @returns {{ status: 'ok' | 'over' | 'missing' | 'split', over: number[], missing: number[] }}
 */
export function checkStructure(atoms, bonds) {
  const used = usedValence(atoms.length, bonds);
  const over = atoms.flatMap((a, i) => (used[i] > VALENCE[a.el] ? [i] : []));
  const missing = atoms.flatMap((a, i) => (used[i] < VALENCE[a.el] ? [i] : []));
  if (over.length) return { status: 'over', over, missing };
  if (missing.length) return { status: 'missing', over, missing };
  if (!isConnected(atoms.length, bonds)) return { status: 'split', over, missing };
  return { status: 'ok', over, missing };
}

/**
 * Condensed structural formula of a valid structure whose heavy atoms form
 * a chain, read from a carbon end: "CH3–CH2–OH", "CH2=CH2", "CH4".
 * @param {PlacedAtom[]} atoms
 * @param {Bond[]} bonds
 */
export function condensed(atoms, bonds) {
  const heavy = atoms.flatMap((a, i) => (a.el === 'H' ? [] : [i]));
  const hCount = heavy.map(
    (i) =>
      bonds.filter((b) => (b.a === i || b.b === i) && atoms[b.a === i ? b.b : b.a].el === 'H')
        .length,
  );
  const group = (/** @type {number} */ k) => {
    const n = hCount[k];
    return atoms[heavy[k]].el + (n === 0 ? '' : n === 1 ? 'H' : `H${n}`);
  };
  const links = bonds.filter((b) => atoms[b.a].el !== 'H' && atoms[b.b].el !== 'H');
  const degree = heavy.map((i) => links.filter((b) => b.a === i || b.b === i).length);
  if (heavy.length === 1) return group(0);
  const ends = heavy.flatMap((_, k) => (degree[k] === 1 ? [k] : []));
  if (ends.length !== 2 || degree.some((d) => d > 2)) return null;
  let k = atoms[heavy[ends[0]]].el === 'C' ? ends[0] : ends[1];
  let prev = -1;
  let text = group(k);
  for (let step = 1; step < heavy.length; step++) {
    const i = heavy[k];
    const next = links.find((b) => (b.a === i || b.b === i) && (b.a === i ? b.b : b.a) !== prev);
    if (!next) return null;
    const j = next.a === i ? next.b : next.a;
    prev = i;
    k = heavy.indexOf(j);
    text += (next.order === 2 ? '=' : '–') + group(k);
  }
  return text;
}

/**
 * A full bond list for one answer of a target: the heavy-atom bonds, then
 * each hydrogen joined to the nearest heavy atom that still has a free bond.
 * @param {Target} t
 * @param {PlacedAtom[]} atoms
 * @param {number} [which]
 * @returns {Bond[]}
 */
export function answerBonds(t, atoms, which = 0) {
  /** @type {Bond[]} */
  const bonds = t.answers[which].map(([a, b, order]) => ({ a, b, order }));
  const free = t.heavy.map((el, i) => VALENCE[el] - usedValence(atoms.length, bonds)[i]);
  for (let h = t.heavy.length; h < atoms.length; h++) {
    let best = -1;
    let bestDist = Infinity;
    free.forEach((f, i) => {
      const d = Math.hypot(atoms[h].x - atoms[i].x, atoms[h].y - atoms[i].y);
      if (f > 0 && d < bestDist) [best, bestDist] = [i, d];
    });
    if (best < 0) throw new Error(`Thừa hydrogen trong ${t.formula}`);
    free[best] -= 1;
    bonds.push({ a: best, b: h, order: 1 });
  }
  return bonds;
}
