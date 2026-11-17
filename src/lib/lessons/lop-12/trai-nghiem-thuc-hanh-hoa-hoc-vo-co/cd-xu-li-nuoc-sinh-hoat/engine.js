/**
 * A household layered water filter, in the spirit of the lesson's
 * experiment: a plastic bottle with holes in its base holds, from the bottom
 * up, cotton, gravel, sand, activated carbon and sand. Turbid, coloured
 * river water may first be treated with alum (keo tụ) and the filtrate may be
 * disinfected with chlorine.
 *
 * The model is a teaching model, not a measurement: each layer keeps a fixed
 * share of the turbidity (NTU) and colour (TCU) that reaches it, and a few
 * placement rules (cotton at the bottom, gravel under the sand, carbon under
 * a sand layer) change the result. The limits compared against are those of
 * the national drinking-water regulation QCVN 01-1:2018/BYT: turbidity at
 * most 2 NTU and colour at most 15 TCU.
 */
import { tidy } from '#lib/core/number-format.js';

export const START_TURBIDITY = 100;
export const START_COLOR = 60;
export const MAX_TURBIDITY = 2;
export const MAX_COLOR = 15;

/** @typedef {'cat' | 'than' | 'soi' | 'bong'} LayerKind */

/** @type {{ id: string, kind: LayerKind, name: string }[]} */
export const LAYERS = [
  { id: 'cat-1', kind: 'cat', name: 'Cát' },
  { id: 'than', kind: 'than', name: 'Than hoạt tính' },
  { id: 'cat-2', kind: 'cat', name: 'Cát' },
  { id: 'soi', kind: 'soi', name: 'Sỏi' },
  { id: 'bong', kind: 'bong', name: 'Bông' },
];

/** The order of the book's filter, top to bottom. */
export const BOOK_ORDER = ['cat-1', 'than', 'cat-2', 'soi', 'bong'];

/** A mixed-up starting order, top to bottom. */
export const START_ORDER = ['soi', 'cat-1', 'bong', 'than', 'cat-2'];

/** Share of turbidity and colour each kind of layer lets through. */
const PASS = {
  cat: { t: 0.3, c: 0.9 },
  than: { t: 0.8, c: 0.1 },
  soi: { t: 0.7, c: 1 },
  bong: { t: 0.8, c: 1 },
};

/** @param {string} id */
export function kindOf(id) {
  return LAYERS.find((l) => l.id === id)?.kind ?? 'cat';
}

/**
 * Move a layer one place up (−1) or down (+1) in a top-to-bottom order.
 * @param {string[]} order
 * @param {string} id
 * @param {-1 | 1} step
 */
export function moveLayer(order, id, step) {
  const i = order.indexOf(id);
  const j = i + step;
  if (i < 0 || j < 0 || j >= order.length) return order;
  const next = [...order];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}

/**
 * @typedef {object} FilterResult
 * @property {number} turbidity NTU
 * @property {number} color TCU
 * @property {boolean} germs whether disease germs may remain
 * @property {boolean} clear turbidity and colour within the limits
 * @property {boolean} safe clear and disinfected
 * @property {string[]} notes what went right or wrong (rich text)
 */

/**
 * Pour the water through the filter.
 * @param {{ order: string[], alum: boolean, chlorine: boolean }} setup
 *   order: the layers in the bottle, top to bottom
 * @returns {FilterResult}
 */
export function pour({ order, alum, chlorine }) {
  let t = START_TURBIDITY;
  let c = START_COLOR;
  /** @type {string[]} */
  const notes = [];
  const kinds = order.map(kindOf);

  if (alum) {
    t *= 0.1;
    c *= 0.5;
    notes.push(
      'Phèn tạo kết tủa keo $\\mathrm{Al(OH)_3}$ kéo các hạt lơ lửng lắng xuống, nước vào bộ lọc đã trong hơn nhiều.',
    );
  }

  if (order.length === 0) {
    notes.push('Chai không có lớp vật liệu nào: nước chảy thẳng qua lỗ, không được lọc.');
  }

  kinds.forEach((kind, i) => {
    const pass = PASS[kind];
    t *= pass.t;
    if (kind === 'than') {
      const covered = kinds.slice(0, i).includes('cat');
      c *= covered ? pass.c : 0.8;
      if (!covered) {
        notes.push(
          'Than hoạt tính không có lớp cát che phía trên: bùn đất bám kín bề mặt, bít các lỗ xốp, than hấp phụ chất màu kém hẳn.',
        );
      }
    } else {
      c *= pass.c;
    }
  });

  if (order.length > 0 && kinds[kinds.length - 1] !== 'bong') {
    t += 8;
    notes.push(
      'Đáy chai không có lớp bông: cát và bụi than lọt qua các lỗ nhỏ, nước chảy ra lại bị đục.',
    );
  }
  const gravel = kinds.indexOf('soi');
  if (gravel >= 0 && kinds.slice(gravel + 1).includes('cat')) {
    t += 3;
    notes.push(
      'Có lớp cát nằm dưới sỏi: lớp hạt to phải ở dưới để đỡ lớp hạt mịn, nếu không cát mịn lọt qua khe sỏi, cuốn theo cặn.',
    );
  }
  if (!kinds.includes('than')) {
    notes.push(
      'Không có than hoạt tính: cát, sỏi giữ được cặn nhưng gần như không khử được màu, mùi.',
    );
  }

  if (chlorine) {
    notes.push(
      t > 5
        ? 'Đã khử trùng bằng chlorine, nhưng nước còn đục: chất lơ lửng che chở vi khuẩn và tiêu tốn chlorine, phải làm trong nước trước.'
        : 'Chlorine tạo $\\mathrm{HClO}$ có tính oxi hoá mạnh, diệt vi khuẩn; giữ lượng chlorine dư nhỏ để nước không bị nhiễm lại.',
    );
  } else {
    notes.push(
      'Chưa khử trùng: lọc giữ lại cặn nhưng không diệt hết vi khuẩn, nước chưa an toàn để dùng.',
    );
  }

  const turbidity = tidy(t, 4);
  const color = tidy(c, 4);
  const clear = turbidity <= MAX_TURBIDITY && color <= MAX_COLOR;
  const germs = !chlorine || turbidity > 5;
  return { turbidity, color, germs, clear, safe: clear && !germs, notes };
}

/**
 * Fill opacity of the water in the beaker: 0 for clear water.
 * @param {number} turbidity NTU
 */
export function cloudiness(turbidity) {
  return Math.min(
    0.85,
    Math.max(0, turbidity / START_TURBIDITY) * 0.85 + (turbidity > 0 ? 0.03 : 0),
  );
}

const M_FE = 56;
const M_FEOH3 = 107;
const M_O2 = 32;

/**
 * Iron(II) in groundwater oxidised by air while aerating:
 * 4Fe²⁺ + O₂ + 10H₂O → 4Fe(OH)₃ + 8H⁺.
 * @param {number} mgPerL iron in the water (mg/L)
 * @param {number} litres volume of water
 * @returns {{ ironMol: number, oxygen: number, precipitate: number }} masses in g
 */
export function ironRemoval(mgPerL, litres) {
  const ironMol = (mgPerL * litres) / 1000 / M_FE;
  return {
    ironMol: tidy(ironMol, 9),
    oxygen: tidy((ironMol / 4) * M_O2, 6),
    precipitate: tidy(ironMol * M_FEOH3, 6),
  };
}
