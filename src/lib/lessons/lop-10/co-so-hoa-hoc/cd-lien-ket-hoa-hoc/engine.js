/**
 * VSEPR models in 3D: the central atom A sits at the origin with n bonded atoms
 * X and m lone pairs E around it. Bond directions reproduce the measured bond
 * angles, so the angle a learner reads off the turning model is the real one.
 */
import { dot3 } from '#lib/geom-engine/solid.js';

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */

/**
 * @typedef {object} VseprModel
 * @property {number} n bonded atoms
 * @property {number} m lone pairs on the central atom
 * @property {'sp' | 'sp^2' | 'sp^3'} hybrid
 * @property {string} shape the book's name of the molecule's shape
 * @property {number} angle measured X–A–X angle of the example, in degrees
 * @property {string} center
 * @property {string} ligand
 * @property {string} formula TeX of the example
 * @property {P3[]} bonds unit vectors towards the bonded atoms
 * @property {P3[]} lones unit vectors along the lone pairs
 */

const rad = (/** @type {number} */ deg) => (deg * Math.PI) / 180;

/** @param {number} angle degrees between the two bonds */
function bentBonds(angle) {
  const h = rad(angle / 2);
  return [
    { x: Math.sin(h), y: 0, z: -Math.cos(h) },
    { x: -Math.sin(h), y: 0, z: -Math.cos(h) },
  ];
}

/**
 * Three bonds pointing down and spread evenly, with `angle` between any two.
 * @param {number} angle
 */
function pyramidBonds(angle) {
  const c2 = (Math.cos(rad(angle)) + 0.5) / 1.5;
  const c = Math.sqrt(c2);
  const s = Math.sqrt(1 - c2);
  return [90, 210, 330].map((phi) => ({
    x: s * Math.cos(rad(phi)),
    y: s * Math.sin(rad(phi)),
    z: -c,
  }));
}

const UP = { x: 0, y: 0, z: 1 };

/** @type {VseprModel[]} */
export const MODELS = [
  {
    n: 2,
    m: 0,
    hybrid: 'sp',
    shape: 'đường thẳng',
    angle: 180,
    center: 'Be',
    ligand: 'H',
    formula: '\\mathrm{BeH_2}',
    bonds: [
      { x: 1, y: 0, z: 0 },
      { x: -1, y: 0, z: 0 },
    ],
    lones: [],
  },
  {
    n: 3,
    m: 0,
    hybrid: 'sp^2',
    shape: 'tam giác phẳng',
    angle: 120,
    center: 'B',
    ligand: 'F',
    formula: '\\mathrm{BF_3}',
    bonds: [90, 210, 330].map((t) => ({ x: Math.cos(rad(t)), y: 0, z: Math.sin(rad(t)) })),
    lones: [],
  },
  {
    n: 2,
    m: 1,
    hybrid: 'sp^2',
    shape: 'góc',
    angle: 119,
    center: 'S',
    ligand: 'O',
    formula: '\\mathrm{SO_2}',
    bonds: bentBonds(119),
    lones: [UP],
  },
  {
    n: 4,
    m: 0,
    hybrid: 'sp^3',
    shape: 'tứ diện',
    angle: 109.5,
    center: 'C',
    ligand: 'H',
    formula: '\\mathrm{CH_4}',
    bonds: [UP, ...pyramidBonds((Math.acos(-1 / 3) * 180) / Math.PI)],
    lones: [],
  },
  {
    n: 3,
    m: 1,
    hybrid: 'sp^3',
    shape: 'tháp tam giác',
    angle: 107,
    center: 'N',
    ligand: 'H',
    formula: '\\mathrm{NH_3}',
    bonds: pyramidBonds(107),
    lones: [UP],
  },
  {
    n: 2,
    m: 2,
    hybrid: 'sp^3',
    shape: 'góc',
    angle: 104.5,
    center: 'O',
    ligand: 'H',
    formula: '\\mathrm{H_2O}',
    bonds: bentBonds(104.5),
    lones: [
      { x: 0, y: Math.sin(rad(57.5)), z: Math.cos(rad(57.5)) },
      { x: 0, y: -Math.sin(rad(57.5)), z: Math.cos(rad(57.5)) },
    ],
  },
];

/**
 * The model with n bonded atoms and m lone pairs, or null when this lesson has none.
 * @param {number} n
 * @param {number} m
 */
export function modelFor(n, m) {
  return MODELS.find((x) => x.n === n && x.m === m) ?? null;
}

/**
 * The formula of a model the way the book writes it, as TeX.
 * @param {number} n
 * @param {number} m
 */
export function vseprTex(n, m) {
  const e = m === 0 ? '' : m === 1 ? '\\mathrm{E}' : `\\mathrm{E_${m}}`;
  return `\\mathrm{AX_${n}}${e}`;
}

/**
 * The angle between two directions, in degrees.
 * @param {P3} a
 * @param {P3} b
 */
export function angleBetween(a, b) {
  const c = dot3(a, b) / Math.sqrt(dot3(a, a) * dot3(b, b));
  return (Math.acos(Math.max(-1, Math.min(1, c))) * 180) / Math.PI;
}

/**
 * Points of the arc from direction a to direction b at distance r, for drawing
 * the bond angle. Uses a third helper direction when a and b are opposite.
 * @param {P3} a
 * @param {P3} b
 * @param {number} r
 * @param {number} [steps]
 * @returns {P3[]}
 */
export function arcBetween(a, b, r, steps = 16) {
  const om = rad(angleBetween(a, b));
  const opposite = Math.abs(om - Math.PI) < 1e-6;
  const via = { x: 0, y: 0, z: 1 };
  /** @type {P3[]} */
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const p = opposite
      ? {
          x: a.x * Math.cos(Math.PI * t) + via.x * Math.sin(Math.PI * t),
          y: a.y * Math.cos(Math.PI * t) + via.y * Math.sin(Math.PI * t),
          z: a.z * Math.cos(Math.PI * t) + via.z * Math.sin(Math.PI * t),
        }
      : {
          x: (a.x * Math.sin((1 - t) * om) + b.x * Math.sin(t * om)) / Math.sin(om),
          y: (a.y * Math.sin((1 - t) * om) + b.y * Math.sin(t * om)) / Math.sin(om),
          z: (a.z * Math.sin((1 - t) * om) + b.z * Math.sin(t * om)) / Math.sin(om),
        };
    out.push({ x: p.x * r, y: p.y * r, z: p.z * r });
  }
  return out;
}

/**
 * What the donor–acceptor exercise asks: which of two partners gives the
 * shared electron pair.
 * @typedef {object} DonorCase
 * @property {string} id
 * @property {string} title
 * @property {string} tex TeX of the change
 * @property {Array<{ id: string, label: string, why: string }>} partners
 * @property {string} donor id of the partner that gives the pair
 * @property {string} result rich text shown after the right pick
 */

/** @type {DonorCase[]} */
export const DONOR_CASES = [
  {
    id: 'nh4',
    title: 'Tạo ion ammonium',
    tex: '\\mathrm{NH_3 + H^+ \\rightarrow NH_4^+}',
    partners: [
      {
        id: 'n',
        label: 'Nguyên tử N của $\\mathrm{NH_3}$',
        why: 'N còn một cặp electron chưa liên kết.',
      },
      {
        id: 'h',
        label: 'Ion $\\mathrm{H^+}$',
        why: '$\\mathrm{H^+}$ không có electron nào, nó chỉ có orbital 1s trống.',
      },
    ],
    donor: 'n',
    result:
      'N cho cặp electron, $\\mathrm{H^+}$ nhận: $\\mathrm{H_3N \\rightarrow H^+}$. Sau khi tạo thành, bốn liên kết N–H trong $\\mathrm{NH_4^+}$ giống hệt nhau.',
  },
  {
    id: 'h3o',
    title: 'Tạo ion hydronium',
    tex: '\\mathrm{H_2O + H^+ \\rightarrow H_3O^+}',
    partners: [
      {
        id: 'h',
        label: 'Ion $\\mathrm{H^+}$',
        why: '$\\mathrm{H^+}$ không có electron nào để cho.',
      },
      {
        id: 'o',
        label: 'Nguyên tử O của $\\mathrm{H_2O}$',
        why: 'O còn hai cặp electron chưa liên kết.',
      },
    ],
    donor: 'o',
    result:
      'O cho một trong hai cặp electron chưa liên kết, $\\mathrm{H^+}$ nhận: $\\mathrm{H_2O \\rightarrow H^+}$.',
  },
  {
    id: 'bf3',
    title: 'Ammonia kết hợp với boron trifluoride',
    tex: '\\mathrm{NH_3 + BF_3 \\rightarrow H_3N{-}BF_3}',
    partners: [
      {
        id: 'b',
        label: 'Nguyên tử B của $\\mathrm{BF_3}$',
        why: 'B mới có 6 electron ở lớp ngoài cùng và còn một orbital 2p trống, nên B là bên nhận.',
      },
      {
        id: 'n',
        label: 'Nguyên tử N của $\\mathrm{NH_3}$',
        why: 'N còn một cặp electron chưa liên kết.',
      },
    ],
    donor: 'n',
    result: 'N cho cặp electron, B nhận và nhờ đó đạt octet: $\\mathrm{H_3N \\rightarrow BF_3}$.',
  },
  {
    id: 'so2',
    title: 'Liên kết thứ hai của S với O trong sulfur dioxide',
    tex: '\\mathrm{O{=}S \\rightarrow O}',
    partners: [
      {
        id: 's',
        label: 'Nguyên tử S trong nhóm $\\mathrm{O{=}S}$',
        why: 'Sau khi tạo liên kết đôi với một O, S đã đủ octet và còn cặp electron chưa liên kết.',
      },
      {
        id: 'o',
        label: 'Nguyên tử O thứ hai',
        why: 'O thứ hai chưa đủ octet, nó cần nhận thêm một cặp electron.',
      },
    ],
    donor: 's',
    result:
      'S cho cặp electron, O thứ hai nhận: công thức theo quy tắc octet là $\\mathrm{O{=}S \\rightarrow O}$.',
  },
];
