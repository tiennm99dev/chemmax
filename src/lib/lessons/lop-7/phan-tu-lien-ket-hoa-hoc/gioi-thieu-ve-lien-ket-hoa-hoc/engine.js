/**
 * Bond-forming logic for the grade 7 lesson on chemical bonds. Atoms reach
 * the outer shell of a noble gas (2 electrons like helium, or 8): a metal
 * atom gives electrons to a non-metal atom (ionic bond), or two non-metal
 * atoms share electron pairs (covalent bond).
 */
import { atomShells, chargeLabel, electronPositions } from '#lib/domain/atom.js';
import { element } from '#lib/domain/elements.js';

/** Noble gases by their shells, as the first three periods show them. */
const NOBLE_SHELLS = [
  { symbol: 'He', name: 'helium', shells: [2] },
  { symbol: 'Ne', name: 'neon', shells: [2, 8] },
  { symbol: 'Ar', name: 'argon', shells: [2, 8, 8] },
];

/**
 * The noble gas whose shells these are, or null.
 * @param {number[]} shells
 */
export function nobleLike(shells) {
  return NOBLE_SHELLS.find((g) => g.shells.join() === shells.join()) ?? null;
}

/* ---------------------------------------------------------------- ionic -- */

/**
 * @typedef {object} IonicPair
 * @property {string} id
 * @property {number} metal atomic number of the atom that gives electrons
 * @property {number} nonmetal atomic number of the atom that takes them
 * @property {number} transfer electrons moved to reach noble-gas shells
 * @property {string} product formula of the ionic compound
 * @property {string} name its name
 */

/** @type {IonicPair[]} */
export const IONIC_PAIRS = [
  { id: 'nacl', metal: 11, nonmetal: 17, transfer: 1, product: 'NaCl', name: 'sodium chloride' },
  { id: 'mgo', metal: 12, nonmetal: 8, transfer: 2, product: 'MgO', name: 'magnesium oxide' },
  { id: 'cao', metal: 20, nonmetal: 8, transfer: 2, product: 'CaO', name: 'calcium oxide' },
];

/**
 * Symbol of an atom or ion with its charge: (11, 1) → "Na⁺".
 * @param {number} z
 * @param {number} charge
 */
export function ionSymbol(z, charge) {
  const sup = /** @type {Record<string, string>} */ ({
    2: '²',
    3: '³',
    '+': '⁺',
    '−': '⁻',
  });
  const label = chargeLabel(charge);
  return `${element(z)?.symbol ?? '?'}${[...label].map((c) => sup[c] ?? c).join('')}`;
}

/**
 * Both particles after `moved` electrons went from the metal to the non-metal.
 * @param {IonicPair} pair
 * @param {number} moved
 */
export function ionicState(pair, moved) {
  const m = Math.max(0, Math.min(pair.transfer, moved));
  const metalShells = atomShells(pair.metal, m);
  const nonShells = atomShells(pair.nonmetal, -m);
  return {
    moved: m,
    done: m === pair.transfer,
    metal: {
      z: pair.metal,
      charge: m,
      symbol: ionSymbol(pair.metal, m),
      shells: metalShells,
      outer: metalShells[metalShells.length - 1],
      noble: nobleLike(metalShells),
    },
    nonmetal: {
      z: pair.nonmetal,
      charge: -m,
      symbol: ionSymbol(pair.nonmetal, -m),
      shells: nonShells,
      outer: nonShells[nonShells.length - 1],
      noble: nobleLike(nonShells),
    },
  };
}

/**
 * What the learner reads after each move, without saying the count left.
 * @param {IonicPair} pair
 * @param {number} moved
 */
export function ionicMessage(pair, moved) {
  const s = ionicState(pair, moved);
  const metal = element(pair.metal);
  const non = element(pair.nonmetal);
  if (!metal || !non) return '';
  if (s.moved === 0) {
    return `Nguyên tử ${metal.symbol} có ${s.metal.outer} electron ở lớp ngoài cùng, nguyên tử ${non.symbol} có ${s.nonmetal.outer}. Chưa nguyên tử nào có lớp ngoài cùng bền như khí hiếm.`;
  }
  if (!s.done) {
    return `Đã chuyển ${s.moved} electron: ${s.metal.symbol} còn ${s.metal.outer} electron ngoài cùng, ${s.nonmetal.symbol} có ${s.nonmetal.outer}. Chưa bền, tiếp tục chuyển electron.`;
  }
  return `${metal.symbol} đã nhường ${s.moved} electron thành ion dương ${s.metal.symbol} (lớp vỏ giống ${s.metal.noble?.name}); ${non.symbol} đã nhận ${s.moved} electron thành ion âm ${s.nonmetal.symbol} (giống ${s.nonmetal.noble?.name}). Hai ion trái dấu hút nhau tạo liên kết ion trong ${pair.name}.`;
}

/**
 * Every electron of the pair with a stable id and its place, so a drawing
 * can move the transferred electrons from one atom to the other. The
 * metal's outermost electrons are the ones that move.
 * @param {IonicPair} pair
 * @param {number} moved
 * @param {{ metal: { cx: number, cy: number }, nonmetal: { cx: number, cy: number }, r0: number, dr: number }} geometry
 */
export function ionicElectrons(pair, moved, geometry) {
  const s = ionicState(pair, moved);
  const { r0, dr } = geometry;
  const metalSpots = electronPositions(s.metal.shells, { ...geometry.metal, r0, dr });
  const nonSpots = electronPositions(s.nonmetal.shells, { ...geometry.nonmetal, r0, dr });
  const kept = pair.metal - s.moved;
  /** @type {Array<{ id: string, x: number, y: number, moved: boolean }>} */
  const out = [];
  for (let i = 0; i < kept; i++) out.push({ id: `m${i}`, ...xy(metalSpots[i]), moved: false });
  for (let i = 0; i < pair.nonmetal; i++)
    out.push({ id: `n${i}`, ...xy(nonSpots[i]), moved: false });
  for (let k = 0; k < s.moved; k++) {
    out.push({ id: `m${kept + k}`, ...xy(nonSpots[pair.nonmetal + k]), moved: true });
  }
  return out;
}

/** @param {{ x: number, y: number }} p */
function xy(p) {
  return { x: Math.round(p.x * 100) / 100, y: Math.round(p.y * 100) / 100 };
}

/* ------------------------------------------------------------- covalent -- */

/** Outer-shell electrons of the atoms the covalent models use. */
export const OUTER = /** @type {Record<string, number>} */ ({ H: 1, C: 4, N: 5, O: 6, Cl: 7 });

/** @param {string} el */
export const fullShell = (el) => (el === 'H' ? 2 : 8);

/**
 * @typedef {object} CovalentMolecule
 * @property {string} id
 * @property {string} formula
 * @property {string} name
 * @property {Array<{ el: string, x: number, y: number }>} atoms drawing positions
 * @property {Array<{ a: number, b: number, order: number }>} bonds with the right number of shared pairs
 */

/** @type {CovalentMolecule[]} */
export const COVALENT = [
  {
    id: 'h2',
    formula: 'H2',
    name: 'hydrogen',
    atoms: [
      { el: 'H', x: 125, y: 110 },
      { el: 'H', x: 235, y: 110 },
    ],
    bonds: [{ a: 0, b: 1, order: 1 }],
  },
  {
    id: 'h2o',
    formula: 'H2O',
    name: 'nước',
    atoms: [
      { el: 'O', x: 180, y: 85 },
      { el: 'H', x: 90, y: 160 },
      { el: 'H', x: 270, y: 160 },
    ],
    bonds: [
      { a: 0, b: 1, order: 1 },
      { a: 0, b: 2, order: 1 },
    ],
  },
  {
    id: 'hcl',
    formula: 'HCl',
    name: 'hydrogen chloride',
    atoms: [
      { el: 'H', x: 120, y: 110 },
      { el: 'Cl', x: 240, y: 110 },
    ],
    bonds: [{ a: 0, b: 1, order: 1 }],
  },
  {
    id: 'o2',
    formula: 'O2',
    name: 'oxygen',
    atoms: [
      { el: 'O', x: 120, y: 110 },
      { el: 'O', x: 240, y: 110 },
    ],
    bonds: [{ a: 0, b: 1, order: 2 }],
  },
  {
    id: 'n2',
    formula: 'N2',
    name: 'nitrogen',
    atoms: [
      { el: 'N', x: 120, y: 110 },
      { el: 'N', x: 240, y: 110 },
    ],
    bonds: [{ a: 0, b: 1, order: 3 }],
  },
  {
    id: 'nh3',
    formula: 'NH3',
    name: 'ammonia',
    atoms: [
      { el: 'N', x: 180, y: 95 },
      { el: 'H', x: 75, y: 95 },
      { el: 'H', x: 285, y: 95 },
      { el: 'H', x: 180, y: 190 },
    ],
    bonds: [
      { a: 0, b: 1, order: 1 },
      { a: 0, b: 2, order: 1 },
      { a: 0, b: 3, order: 1 },
    ],
  },
  {
    id: 'ch4',
    formula: 'CH4',
    name: 'methane',
    atoms: [
      { el: 'C', x: 180, y: 110 },
      { el: 'H', x: 180, y: 25 },
      { el: 'H', x: 285, y: 110 },
      { el: 'H', x: 180, y: 195 },
      { el: 'H', x: 75, y: 110 },
    ],
    bonds: [
      { a: 0, b: 1, order: 1 },
      { a: 0, b: 2, order: 1 },
      { a: 0, b: 3, order: 1 },
      { a: 0, b: 4, order: 1 },
    ],
  },
];

/** Most pairs two atoms can share. */
export const MAX_PAIRS = 3;

/**
 * Electron bookkeeping of every atom for the shared pairs chosen per bond:
 * each atom counts its own unshared electrons plus both electrons of every
 * pair it shares.
 * @param {CovalentMolecule} mol
 * @param {number[]} pairs shared pairs per bond, same order as `mol.bonds`
 */
export function covalentState(mol, pairs) {
  const atoms = mol.atoms.map((a, i) => {
    const shared = mol.bonds.reduce((s, b, k) => s + (b.a === i || b.b === i ? pairs[k] : 0), 0);
    const outer = OUTER[a.el];
    const count = outer + shared;
    const full = fullShell(a.el);
    return {
      el: a.el,
      shared,
      lone: outer - shared,
      count,
      full,
      status: /** @type {'thieu' | 'du' | 'thua'} */ (
        count < full ? 'thieu' : count === full ? 'du' : 'thua'
      ),
    };
  });
  return { atoms, done: atoms.every((a) => a.status === 'du') };
}

/**
 * Whether one more pair can be shared on bond `k`: each atom puts one of its
 * own unshared electrons into the pair.
 * @param {CovalentMolecule} mol
 * @param {number[]} pairs
 * @param {number} k
 */
export function canShareMore(mol, pairs, k) {
  if (pairs[k] >= MAX_PAIRS) return false;
  const { atoms } = covalentState(mol, pairs);
  const b = mol.bonds[k];
  return atoms[b.a].lone > 0 && atoms[b.b].lone > 0;
}

/**
 * Feedback on the current sharing, naming the atoms still short or over.
 * @param {CovalentMolecule} mol
 * @param {number[]} pairs
 */
export function covalentMessage(mol, pairs) {
  const s = covalentState(mol, pairs);
  if (s.done) {
    const like = [...new Set(s.atoms.map((a) => `${a.el} giống ${noblePeer(a.el)}`))].join(', ');
    const total = pairs.reduce((x, y) => x + y, 0);
    return `Bền rồi! Mỗi nguyên tử đều có lớp ngoài cùng bền như khí hiếm (${like}). Phân tử ${mol.name} có ${total} cặp electron dùng chung.`;
  }
  const over = s.atoms.filter((a) => a.status === 'thua');
  if (over.length) {
    return `Nguyên tử ${over[0].el} đang có ${over[0].count} electron ở lớp ngoài cùng, nhiều hơn ${over[0].full}: bớt cặp dùng chung.`;
  }
  const short = s.atoms.find((a) => a.status === 'thieu');
  return short
    ? `Nguyên tử ${short.el} mới có ${short.count} electron ở lớp ngoài cùng, cần ${short.full} để bền như ${noblePeer(short.el)}: góp thêm electron dùng chung.`
    : '';
}

/** @param {string} el */
function noblePeer(el) {
  return el === 'H' ? 'helium' : el === 'Cl' ? 'argon' : 'neon';
}

/**
 * Spots for the unshared outer electrons of an atom, kept away from its
 * bonds and grouped in pairs where possible.
 * @param {{ x: number, y: number }} at atom centre
 * @param {number[]} bondAngles directions of its bonds, in radians
 * @param {number} count unshared electrons
 * @param {number} r distance from the centre
 * @returns {Array<{ x: number, y: number }>}
 */
export function loneSpots(at, bondAngles, count, r) {
  if (count <= 0) return [];
  const step = Math.PI / 18;
  const free = Array.from({ length: 36 }, (_, i) => -Math.PI / 2 + i * step).filter((a) =>
    bondAngles.every((b) => {
      const d = Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
      return d > Math.PI / 4;
    }),
  );
  const slots = Math.ceil(count / 2);
  const picks = Array.from(
    { length: slots },
    (_, i) => free[Math.floor(((i + 0.5) * free.length) / slots)],
  );
  /** @type {Array<{ x: number, y: number }>} */
  const out = [];
  picks.forEach((a, i) => {
    const two = count - 2 * i >= 2;
    const spread = two ? [-0.2, 0.2] : [0];
    for (const d of spread) {
      out.push({ x: at.x + r * Math.cos(a + d), y: at.y + r * Math.sin(a + d) });
    }
  });
  return out;
}

/**
 * Dots of the shared pairs on one bond: pairs side by side across the bond,
 * the two electrons of a pair along it.
 * @param {{ x: number, y: number }} p
 * @param {{ x: number, y: number }} q
 * @param {number} pairs
 * @param {number} gap
 */
export function sharedSpots(p, q, pairs, gap) {
  const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
  const ux = (q.x - p.x) / len;
  const uy = (q.y - p.y) / len;
  const mx = (p.x + q.x) / 2;
  const my = (p.y + q.y) / 2;
  /** @type {Array<{ x: number, y: number }>} */
  const out = [];
  for (let j = 0; j < pairs; j++) {
    const off = (j - (pairs - 1) / 2) * gap;
    const cx = mx - uy * off;
    const cy = my + ux * off;
    out.push({ x: cx - ux * 4.5, y: cy - uy * 4.5 }, { x: cx + ux * 4.5, y: cy + uy * 4.5 });
  }
  return out;
}
