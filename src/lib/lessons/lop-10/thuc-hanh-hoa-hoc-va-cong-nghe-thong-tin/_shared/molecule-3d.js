/**
 * Small molecules with real 3D geometry, built from experimental gas-phase
 * bond lengths and angles, next to the flat drawing of the same atoms. Measuring
 * both shows what a structural formula does not tell: its angles are only a
 * way of writing. Lengths are in ångström, angles in degrees; z points up.
 */
import { molecule } from '#lib/domain/molecule.js';
import { add3, cross3, dot3, mul3, sub3 } from '#lib/geom-engine/solid.js';

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */
/** @typedef {import('#lib/domain/molecule.js').Bond} Bond */
/**
 * @typedef {object} Model3d
 * @property {string} id
 * @property {string} name
 * @property {string} formula
 * @property {string} shape dạng hình học, in the book's words
 * @property {string} tip what is worth measuring on this molecule
 * @property {string[]} els element of each atom
 * @property {P3[]} solid 3D positions
 * @property {P3[]} flat positions on the structural-formula drawing (z = 0)
 * @property {Bond[]} bonds
 */
/** @typedef {'3d' | '2d'} DrawMode */
/**
 * @typedef {object} Measurement
 * @property {'none' | 'length' | 'angle'} kind
 * @property {number} value ångström or degrees; 0 for 'none'
 * @property {boolean} bonded every pair along the measurement is bonded
 * @property {string} name such as 'C–H' or 'H–C–H'
 */

/**
 * Experimental gas-phase geometry the lessons of this chapter print and
 * compare against.
 */
export const GEOMETRY = {
  h2o: { oh: 0.958, hoh: 104.5 },
  nh3: { nh: 1.012, hnh: 106.7 },
  ch4: { ch: 1.087, hch: 109.47 },
  c2h6: { cc: 1.536, ch: 1.091, hcc: 111.2 },
  c2h4: { cc: 1.339, ch: 1.086, hcc: 121.3 },
  c2h2: { cc: 1.203, ch: 1.06 },
  h2so4: { sdo: 1.422, so: 1.574, oh: 0.97, ose: 123.3, oso: 101.3, soh: 108.5, tau: 90.9 },
};

const RAD = Math.PI / 180;

/** @param {P3} p */
const unit = (p) => mul3(p, 1 / Math.hypot(p.x, p.y, p.z));

/**
 * Atoms around `center`, at `polar` degrees from +z, one per azimuth.
 * @param {P3} center @param {number} r @param {number} polar @param {number[]} azimuths
 * @returns {P3[]}
 */
function fan(center, r, polar, azimuths) {
  return azimuths.map((a) =>
    add3(center, {
      x: r * Math.sin(polar * RAD) * Math.cos(a * RAD),
      y: r * Math.sin(polar * RAD) * Math.sin(a * RAD),
      z: r * Math.cos(polar * RAD),
    }),
  );
}

/**
 * The atom D with |CD| = r, angle B–C–D and dihedral A–B–C–D given.
 * @param {P3} a @param {P3} b @param {P3} c @param {number} r @param {number} angle @param {number} dihedral
 */
function attach(a, b, c, r, angle, dihedral) {
  const bc = unit(sub3(c, b));
  const n = unit(cross3(sub3(b, a), bc));
  const m = cross3(n, bc);
  const along = -r * Math.cos(angle * RAD);
  const side = r * Math.sin(angle * RAD);
  return add3(
    c,
    add3(
      mul3(bc, along),
      add3(mul3(m, side * Math.cos(dihedral * RAD)), mul3(n, side * Math.sin(dihedral * RAD))),
    ),
  );
}

/**
 * The polar angle of the arms of a C3v pyramid whose arms make `between`
 * degrees with each other, measured from the axis.
 * @param {number} between
 */
const pyramidTilt = (between) =>
  Math.asin(Math.sin((between * RAD) / 2) / (Math.sqrt(3) / 2)) / RAD;

const ORIGIN = { x: 0, y: 0, z: 0 };
const TRIO = [90, 210, 330];
const OPPOSITE_TRIO = [30, 150, 270];

/** @returns {P3[]} */
function water() {
  const { oh, hoh } = GEOMETRY.h2o;
  return [ORIGIN, ...fan(ORIGIN, oh, 180 - hoh / 2, [0, 180])];
}

/** @returns {P3[]} */
function ammonia() {
  const { nh, hnh } = GEOMETRY.nh3;
  return [ORIGIN, ...fan(ORIGIN, nh, 180 - pyramidTilt(hnh), TRIO)];
}

/** @returns {P3[]} */
function methane() {
  const { ch, hch } = GEOMETRY.ch4;
  return [ORIGIN, ...fan(ORIGIN, ch, 0, [0]), ...fan(ORIGIN, ch, hch, TRIO)];
}

/** @returns {P3[]} */
function ethane() {
  const { cc, ch, hcc } = GEOMETRY.c2h6;
  const low = { x: 0, y: 0, z: -cc / 2 };
  const high = { x: 0, y: 0, z: cc / 2 };
  return [low, high, ...fan(low, ch, hcc, TRIO), ...fan(high, ch, 180 - hcc, OPPOSITE_TRIO)];
}

/** @returns {P3[]} */
function ethene() {
  const { cc, ch, hcc } = GEOMETRY.c2h4;
  const low = { x: 0, y: 0, z: -cc / 2 };
  const high = { x: 0, y: 0, z: cc / 2 };
  return [low, high, ...fan(low, ch, hcc, [0, 180]), ...fan(high, ch, 180 - hcc, [0, 180])];
}

/** @returns {P3[]} */
function ethyne() {
  const { cc, ch } = GEOMETRY.c2h2;
  return [
    { x: 0, y: 0, z: -cc / 2 },
    { x: 0, y: 0, z: cc / 2 },
    { x: 0, y: 0, z: -cc / 2 - ch },
    { x: 0, y: 0, z: cc / 2 + ch },
  ];
}

/** @returns {P3[]} */
function sulfuricAcid() {
  const { sdo, so, oh, ose, oso, soh, tau } = GEOMETRY.h2so4;
  const [o1, o2] = fan(ORIGIN, sdo, ose / 2, [0, 180]);
  const [o3, o4] = fan(ORIGIN, so, 180 - oso / 2, [90, 270]);
  return [
    ORIGIN,
    o1,
    o2,
    o3,
    o4,
    attach(o4, ORIGIN, o3, oh, soh, tau),
    attach(o3, ORIGIN, o4, oh, soh, tau),
  ];
}

/**
 * The structural formula of H₂SO₄: the book draws it with S(VI).
 * @type {import('#lib/domain/molecule.js').Molecule}
 */
const SULFURIC_ACID_DRAWING = {
  id: 'h2so4',
  name: 'Sulfuric acid',
  formula: 'H2SO4',
  atoms: [
    { el: 'S', x: 0, y: 0 },
    { el: 'O', x: 0, y: 1.45 },
    { el: 'O', x: 0, y: -1.45 },
    { el: 'O', x: -1.55, y: 0 },
    { el: 'O', x: 1.55, y: 0 },
    { el: 'H', x: -2.5, y: 0 },
    { el: 'H', x: 2.5, y: 0 },
  ],
  bonds: [
    { a: 0, b: 1, order: 2 },
    { a: 0, b: 2, order: 2 },
    { a: 0, b: 3, order: 1 },
    { a: 0, b: 4, order: 1 },
    { a: 3, b: 5, order: 1 },
    { a: 4, b: 6, order: 1 },
  ],
};

/**
 * @param {import('#lib/domain/molecule.js').Molecule | undefined} drawing
 * @param {P3[]} solid
 * @param {string} shape
 * @param {string} tip
 * @returns {Model3d}
 */
function model(drawing, solid, shape, tip) {
  if (!drawing) throw new Error('A molecule of this chapter has no drawing');
  return {
    id: drawing.id,
    name: drawing.name,
    formula: drawing.formula,
    shape,
    tip,
    els: drawing.atoms.map((a) => a.el),
    solid,
    flat: drawing.atoms.map((a) => ({ x: a.x, y: a.y, z: 0 })),
    bonds: drawing.bonds,
  };
}

/** @type {Model3d[]} */
export const MODELS = [
  model(
    molecule('ch4'),
    methane(),
    'tứ diện đều',
    'Chạm H, rồi C, rồi một H khác để đo góc H–C–H, sau đó đổi giữa 3D và 2D.',
  ),
  model(
    molecule('nh3'),
    ammonia(),
    'chóp tam giác',
    'Đo góc H–N–H rồi so với góc H–C–H của methane.',
  ),
  model(
    molecule('h2o'),
    water(),
    'gấp khúc (chữ V)',
    'Đo góc H–O–H: có hai cặp electron chưa liên kết nên góc nhỏ hơn cả.',
  ),
  model(
    molecule('c2h6'),
    ethane(),
    'mỗi carbon ở tâm một tứ diện',
    'Đo C–C, rồi so với C=C của ethene và C≡C của ethyne.',
  ),
  model(
    molecule('c2h4'),
    ethene(),
    'phẳng',
    'Đo C=C và góc H–C=C. Xoay ngang để thấy cả sáu nguyên tử cùng một mặt phẳng.',
  ),
  model(
    molecule('c2h2'),
    ethyne(),
    'đường thẳng',
    'Đo C≡C và góc H–C≡C: bốn nguyên tử nằm trên một đường thẳng.',
  ),
  model(
    SULFURIC_ACID_DRAWING,
    sulfuricAcid(),
    'bốn nguyên tử O quanh S theo kiểu tứ diện lệch',
    'So sánh độ dài S=O với S–O, rồi đo góc O=S=O.',
  ),
];

/** @param {P3} a @param {P3} b */
export const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

/**
 * Angle at `b` in the path a–b–c, in degrees.
 * @param {P3} a @param {P3} b @param {P3} c
 */
export function angleAt(a, b, c) {
  const u = sub3(a, b);
  const v = sub3(c, b);
  const cos = dot3(u, v) / (Math.hypot(u.x, u.y, u.z) * Math.hypot(v.x, v.y, v.z));
  return Math.acos(Math.max(-1, Math.min(1, cos))) / RAD;
}

/**
 * The bond between two atoms, if there is one.
 * @param {Model3d} m @param {number} a @param {number} b
 */
export function bondBetween(m, a, b) {
  return m.bonds.find((x) => (x.a === a && x.b === b) || (x.a === b && x.b === a));
}

const LINK = ['', '–', '=', '≡'];

/**
 * Two atoms written with the bond between them, or a dash when there is none.
 * @param {Model3d} m @param {number} a @param {number} b
 */
function linked(m, a, b) {
  return LINK[bondBetween(m, a, b)?.order ?? 1];
}

/**
 * What the picked atoms measure: two give a distance, three give the angle at
 * the middle one.
 * @param {Model3d} m
 * @param {DrawMode} mode
 * @param {number[]} picked
 * @returns {Measurement}
 */
export function measure(m, mode, picked) {
  const at = mode === '3d' ? m.solid : m.flat;
  if (picked.length === 2) {
    const [a, b] = picked;
    return {
      kind: 'length',
      value: distance(at[a], at[b]),
      bonded: bondBetween(m, a, b) !== undefined,
      name: `${m.els[a]}${linked(m, a, b)}${m.els[b]}`,
    };
  }
  if (picked.length === 3) {
    const [a, b, c] = picked;
    return {
      kind: 'angle',
      value: angleAt(at[a], at[b], at[c]),
      bonded: bondBetween(m, a, b) !== undefined && bondBetween(m, b, c) !== undefined,
      name: `${m.els[a]}${linked(m, a, b)}${m.els[b]}${linked(m, b, c)}${m.els[c]}`,
    };
  }
  return { kind: 'none', value: 0, bonded: false, name: '' };
}

/**
 * The picked atoms after tapping `atom`: a picked atom is taken back only when
 * it is the last one, a fourth atom starts a new measurement.
 * @param {number[]} picked
 * @param {number} atom
 * @returns {number[]}
 */
export function togglePick(picked, atom) {
  if (picked[picked.length - 1] === atom) return picked.slice(0, -1);
  if (picked.includes(atom) || picked.length >= 3) return [atom];
  return [...picked, atom];
}

/**
 * Pixels per ångström that keep every atom inside a square board, whichever
 * way the molecule is turned.
 * @param {P3[]} points
 * @param {number} halfBoard
 * @param {number} maxScale
 */
export function fitScale(points, halfBoard, maxScale = 110) {
  const c = centroid(points);
  const reach = Math.max(0.01, ...points.map((p) => distance(p, c)));
  return Math.min(maxScale, halfBoard / reach);
}

/** @param {P3[]} points @returns {P3} */
export function centroid(points) {
  return mul3(
    points.reduce((s, p) => add3(s, p), ORIGIN),
    1 / points.length,
  );
}

/**
 * Index of the screen point nearest to (x, y) within `reach`, or -1. Used to
 * tell which atom a tap landed on.
 * @param {Array<{ x: number, y: number }>} points
 * @param {number} x @param {number} y @param {number} reach
 */
export function nearestAtom(points, x, y, reach) {
  let best = -1;
  let bestDistance = reach;
  points.forEach((p, i) => {
    const d = Math.hypot(p.x - x, p.y - y);
    if (d <= bestDistance) {
      best = i;
      bestDistance = d;
    }
  });
  return best;
}
