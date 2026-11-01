/**
 * Hydrogen bonds on a flat board: molecules with a central atom and hydrogens
 * at fixed directions, a geometric test for H…X contacts and the turning that
 * makes polar molecules point H at a neighbouring lone pair. Also the boiling
 * point series of the lesson.
 */
import { angleAt, dist } from '#lib/geom-engine/plane.js';
import { MINUS, formatNumber } from '#lib/core/number-format.js';

/**
 * @typedef {object} Substance
 * @property {string} id
 * @property {string} center symbol of the central atom
 * @property {number[]} hydrogens directions of the H atoms, degrees
 * @property {number} lonePairs lone pairs of the central atom open to a hydrogen bond
 * @property {boolean} forms whether the molecule forms hydrogen bonds at all
 * @property {string} note
 */

/** @typedef {{ x: number, y: number, angle: number }} Placed */
/** @typedef {{ donor: number, hydrogen: number, acceptor: number }} HBond */

export const BOARD = { w: 360, h: 320 };
export const BOND_LENGTH = 26;
/** Closest distance between two central atoms. */
const MIN_CENTERS = 52;
/** Range of the H…X distance for a hydrogen bond. */
const MIN_CONTACT = 18;
const MAX_CONTACT = 50;
/** Smallest X–H…X angle: a hydrogen bond is close to a straight line. */
const MIN_ANGLE = 130;

/** @type {Substance[]} */
export const SUBSTANCES = [
  {
    id: 'H2O',
    center: 'O',
    hydrogens: [-52, 52],
    lonePairs: 2,
    forms: true,
    note: 'Mỗi phân tử nước có 2 nguyên tử H và 2 cặp electron riêng trên O, nên tạo được tối đa 4 liên kết hydrogen.',
  },
  {
    id: 'NH3',
    center: 'N',
    hydrogens: [0, 120, 240],
    lonePairs: 1,
    forms: true,
    note: 'Mỗi nguyên tử N chỉ có 1 cặp electron riêng, nên ít liên kết hydrogen hơn nước.',
  },
  {
    id: 'HF',
    center: 'F',
    hydrogens: [0],
    lonePairs: 3,
    forms: true,
    note: 'Mỗi phân tử HF có 1 nguyên tử H nên các phân tử nối với nhau thành chuỗi.',
  },
  {
    id: 'CH4',
    center: 'C',
    hydrogens: [0, 90, 180, 270],
    lonePairs: 0,
    forms: false,
    note: 'Liên kết C–H gần như không phân cực và C không có cặp electron riêng, nên giữa các phân tử $\\mathrm{CH_4}$ không có liên kết hydrogen, chỉ có tương tác van der Waals yếu.',
  },
];

/** Starting places, far enough apart that no hydrogen bond exists yet. */
export const START = [
  { x: 70, y: 70 },
  { x: 290, y: 70 },
  { x: 180, y: 160 },
  { x: 70, y: 250 },
  { x: 290, y: 250 },
];

/**
 * @param {Placed} m @param {Substance} s
 * @returns {{ x: number, y: number }[]}
 */
export function hydrogenSpots(m, s) {
  return s.hydrogens.map((d) => {
    const t = ((m.angle + d) * Math.PI) / 180;
    return { x: m.x + BOND_LENGTH * Math.cos(t), y: m.y + BOND_LENGTH * Math.sin(t) };
  });
}

/**
 * The hydrogen bonds on the board. Every hydrogen makes one bond at most and
 * every central atom accepts at most one per lone pair; the closest contacts win.
 * @param {Placed[]} mols @param {Substance} s
 * @returns {HBond[]}
 */
export function hydrogenBonds(mols, s) {
  if (!s.forms) return [];
  const contacts = [];
  for (let i = 0; i < mols.length; i++) {
    const spots = hydrogenSpots(mols[i], s);
    for (let h = 0; h < spots.length; h++) {
      for (let j = 0; j < mols.length; j++) {
        if (j === i) continue;
        const d = dist(spots[h], mols[j]);
        if (d < MIN_CONTACT || d > MAX_CONTACT) continue;
        if (angleAt(spots[h], mols[i], mols[j]) < MIN_ANGLE) continue;
        contacts.push({ donor: i, hydrogen: h, acceptor: j, d });
      }
    }
  }
  contacts.sort((p, q) => p.d - q.d);
  /** @type {HBond[]} */
  const bonds = [];
  const usedH = new Set();
  const load = mols.map(() => 0);
  for (const c of contacts) {
    const key = `${c.donor}-${c.hydrogen}`;
    if (usedH.has(key) || load[c.acceptor] >= s.lonePairs) continue;
    usedH.add(key);
    load[c.acceptor] += 1;
    bonds.push({ donor: c.donor, hydrogen: c.hydrogen, acceptor: c.acceptor });
  }
  return bonds;
}

/**
 * How well molecule `i` sits: its hydrogen bonds first, then how close its
 * nearest hydrogen is to a neighbour, so it turns towards one before touching.
 * @param {Placed[]} mols @param {Substance} s @param {number} i
 */
function fitness(mols, s, i) {
  const own = hydrogenBonds(mols, s).filter((b) => b.donor === i || b.acceptor === i).length;
  let nearest = Infinity;
  for (const spot of hydrogenSpots(mols[i], s)) {
    for (let j = 0; j < mols.length; j++) {
      if (j !== i) nearest = Math.min(nearest, dist(spot, mols[j]));
    }
  }
  return own * 1000 - nearest;
}

/**
 * Turns each molecule, in steps of 15°, to where it fits best. Polar molecules
 * orient like this because opposite partial charges attract. Non-polar ones do
 * not turn.
 * @param {Placed[]} mols @param {Substance} s
 * @returns {Placed[]}
 */
export function orient(mols, s) {
  const out = mols.map((m) => ({ ...m }));
  if (!s.forms) return out;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < out.length; i++) {
      const keep = out[i].angle;
      let best = keep;
      let bestScore = fitness(out, s, i);
      for (let a = 0; a < 360; a += 15) {
        out[i].angle = a;
        const score = fitness(out, s, i);
        if (score > bestScore + 1e-6) {
          bestScore = score;
          best = a;
        }
      }
      out[i].angle = best;
    }
  }
  return out;
}

/**
 * Keeps the moved molecule from overlapping the others: pushed straight out to
 * the closest allowed distance.
 * @param {{ x: number, y: number }} p @param {{ x: number, y: number }[]} others
 */
export function pushOut(p, others) {
  let { x, y } = p;
  for (const o of others) {
    const d = Math.hypot(x - o.x, y - o.y);
    if (d >= MIN_CENTERS) continue;
    const ux = d > 0 ? (x - o.x) / d : 1;
    const uy = d > 0 ? (y - o.y) / d : 0;
    x = o.x + ux * MIN_CENTERS;
    y = o.y + uy * MIN_CENTERS;
  }
  return { x, y };
}

/**
 * Live feedback on the board.
 * @param {Substance} s @param {number} count
 */
export function boardText(s, count) {
  if (!s.forms) return s.note;
  if (count === 0) {
    return 'Kéo các phân tử lại gần nhau: chúng sẽ tự xoay để H hướng về cặp electron riêng của phân tử bên cạnh.';
  }
  return `Đang có ${count} liên kết hydrogen. ${s.note}`;
}

/**
 * @typedef {object} BoilingSeries
 * @property {string} id
 * @property {string} label
 * @property {Array<{ formula: string, t: number }>} items boiling points in °C at 1 atm
 * @property {string} explanation
 */

/** @type {BoilingSeries[]} */
export const SERIES = [
  {
    id: 'via',
    label: 'Hydride nhóm VIA',
    items: [
      { formula: 'H2O', t: 100 },
      { formula: 'H2S', t: -60.3 },
      { formula: 'H2Se', t: -41.3 },
      { formula: 'H2Te', t: -2 },
    ],
    explanation:
      'Nước sôi ở $100\\ ^\\circ\\mathrm{C}$, cao bất thường so với xu hướng của dãy, vì các phân tử nước liên kết với nhau bằng liên kết hydrogen.',
  },
  {
    id: 'viia',
    label: 'Hydride nhóm VIIA',
    items: [
      { formula: 'HF', t: 19.5 },
      { formula: 'HCl', t: -85 },
      { formula: 'HBr', t: -67 },
      { formula: 'HI', t: -35.4 },
    ],
    explanation:
      'HF sôi cao bất thường vì giữa các phân tử HF có liên kết hydrogen. Từ HCl đến HI, nhiệt độ sôi tăng dần do tương tác van der Waals mạnh dần.',
  },
  {
    id: 'va',
    label: 'Hydride nhóm VA',
    items: [
      { formula: 'NH3', t: -33.3 },
      { formula: 'PH3', t: -87.7 },
      { formula: 'AsH3', t: -62.5 },
      { formula: 'SbH3', t: -17 },
    ],
    explanation:
      '$\\mathrm{NH_3}$ sôi cao hơn $\\mathrm{PH_3}$ và $\\mathrm{AsH_3}$ dù nhẹ hơn, vì giữa các phân tử $\\mathrm{NH_3}$ có liên kết hydrogen.',
  },
  {
    id: 'iva',
    label: 'Hydride nhóm IVA',
    items: [
      { formula: 'CH4', t: -161.6 },
      { formula: 'SiH4', t: -111.9 },
      { formula: 'GeH4', t: -88.5 },
      { formula: 'SnH4', t: -52 },
    ],
    explanation:
      'Dãy này không có chất nào bất thường: các phân tử không tạo liên kết hydrogen, nhiệt độ sôi tăng đều theo khối lượng phân tử do tương tác van der Waals mạnh dần.',
  },
  {
    id: 'halogen',
    label: 'Đơn chất halogen',
    items: [
      { formula: 'F2', t: -188 },
      { formula: 'Cl2', t: -34 },
      { formula: 'Br2', t: 59 },
      { formula: 'I2', t: 184 },
    ],
    explanation:
      'Không có chất nào bất thường: số electron và khối lượng phân tử tăng từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, tương tác van der Waals mạnh dần nên nhiệt độ sôi tăng đều.',
  },
  {
    id: 'noble',
    label: 'Khí hiếm',
    items: [
      { formula: 'He', t: -269 },
      { formula: 'Ne', t: -246 },
      { formula: 'Ar', t: -186 },
      { formula: 'Kr', t: -153 },
      { formula: 'Xe', t: -108 },
    ],
    explanation:
      'Không có chất nào bất thường: nguyên tử khí hiếm chỉ hút nhau bằng tương tác van der Waals, càng nhiều electron thì tương tác càng mạnh.',
  },
];

/**
 * The member that breaks the trend: the first one, when it boils above the
 * second although it is the lightest. Null when the series rises steadily.
 * @param {BoilingSeries} series
 */
export function outlier(series) {
  const [first, second] = series.items;
  return first.t > second.t ? first.formula : null;
}

/**
 * The verdict on the pick of the unusual member; `none` means no member.
 * @param {BoilingSeries} series @param {string} pick
 */
export function judgeOutlier(series, pick) {
  const out = outlier(series) ?? 'none';
  return {
    ok: pick === out,
    text: `${pick === out ? 'Đúng!' : 'Chưa đúng.'} ${series.explanation}`,
  };
}

/**
 * A temperature as the book writes it.
 * @param {number} t
 */
export function tempText(t) {
  return `${t < 0 ? MINUS : ''}${formatNumber(Math.abs(t))} °C`;
}
