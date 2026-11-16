/**
 * Coarse 3D models of the three polysaccharide chains, one ball per glucose
 * unit, and what iodine does with each:
 * - amylose: α-glucose units joined by α-1,4-glycoside bonds; the chain
 *   coils into a helix of about six units a turn, with room inside for
 *   iodine molecules, which gives the blue-violet colour;
 * - amylopectin: the same helical α-1,4 segments, branched every 20 to 30
 *   units by α-1,6-glycoside bonds (drawn shorter here);
 * - cellulose: β-glucose units joined by β-1,4-glycoside bonds; every unit
 *   is turned over against the last, so the chain stays straight, and
 *   neighbouring chains hold together by hydrogen bonds into fibres. There
 *   is no helix, so iodine gives no colour.
 * Heating a starch–iodine mixture loosens the helix and frees the iodine, so
 * the colour fades; on cooling the helix and the colour come back.
 *
 * Model space: the chain runs along x, z points up.
 */

/** @typedef {import('#lib/geom-engine/solid.js').P3} P3 */
/** @typedef {'amylose' | 'amylopectin' | 'cellulose'} ChainId */

/**
 * @typedef {object} Unit
 * @property {P3} p
 * @property {boolean} flipped turned over against the previous unit (β-1,4)
 * @property {boolean} branch on a side chain
 *
 * @typedef {{ a: number, b: number, kind: '1,4' | '1,6' | 'H' }} Link
 */

export const CHAINS = /** @type {const} */ ({
  amylose: {
    name: 'Amylose',
    unit: 'α-glucose',
    bonds: 'α-1,4-glycoside',
    shape: 'mạch không phân nhánh, xoắn lò xo',
    share: 'khoảng $20$ đến $30\\%$ khối lượng tinh bột',
  },
  amylopectin: {
    name: 'Amylopectin',
    unit: 'α-glucose',
    bonds: 'α-1,4-glycoside và α-1,6-glycoside (ở chỗ phân nhánh)',
    shape: 'mạch phân nhánh, các đoạn mạch xoắn',
    share: 'khoảng $70$ đến $80\\%$ khối lượng tinh bột',
  },
  cellulose: {
    name: 'Cellulose',
    unit: 'β-glucose',
    bonds: 'β-1,4-glycoside',
    shape: 'mạch không phân nhánh, không xoắn, duỗi thẳng thành sợi',
    share: 'thành phần chính của thành tế bào thực vật, bông nõn gần $98\\%$',
  },
});

export const PER_TURN = 6;
export const HELIX_RADIUS = 0.9;
const RISE = 0.27;

/**
 * Points of a helix along x.
 * @param {number} count
 * @param {P3} start axis point of the first unit
 * @param {number} radius
 * @param {number} [phase] degrees
 * @returns {P3[]}
 */
function helix(count, start, radius, phase = 0) {
  return Array.from({ length: count }, (_, i) => {
    const a = ((phase + (i * 360) / PER_TURN) * Math.PI) / 180;
    return {
      x: start.x + i * RISE,
      y: start.y + radius * Math.cos(a),
      z: start.z + radius * Math.sin(a),
    };
  });
}

/**
 * A heated chain: the helix loosens into an irregular strand.
 * @param {P3[]} pts
 * @param {P3} start
 */
function loosen(pts, start) {
  return pts.map((p, i) => ({
    x: p.x,
    y: start.y + 0.25 * Math.sin(i * 1.7),
    z: start.z + 0.35 * Math.cos(i * 1.1) + 0.15 * Math.sin(i * 2.3),
  }));
}

/**
 * The model of a chain, heated or not, with iodine added or not.
 * @param {ChainId} id
 * @param {{ heated?: boolean, iodine?: boolean }} [state]
 */
export function chainModel(id, { heated = false, iodine = false } = {}) {
  /** @type {Unit[]} */
  const units = [];
  /** @type {Link[]} */
  const links = [];
  /** @type {P3[]} */
  const iodines = [];

  if (id === 'cellulose') {
    const rows = [-1.1, 0, 1.1];
    const n = 15;
    rows.forEach((y, r) => {
      for (let i = 0; i < n; i++) {
        units.push({ p: { x: -2 + i * 0.29, y, z: 0 }, flipped: i % 2 === 1, branch: false });
        if (i > 0) links.push({ a: r * n + i - 1, b: r * n + i, kind: '1,4' });
        if (r > 0 && i % 2 === 0) links.push({ a: (r - 1) * n + i, b: r * n + i, kind: 'H' });
      }
    });
    if (iodine) {
      for (let k = 0; k < 6; k++)
        iodines.push({ x: -1.8 + k * 0.75, y: k % 2 ? 1.9 : -1.9, z: 0.8 });
    }
    return { units, links, iodines, colour: false };
  }

  const mainCount = id === 'amylose' ? 18 : 13;
  const start = { x: -2.4, y: 0, z: id === 'amylose' ? 0 : -0.6 };
  const coiled = helix(mainCount, start, HELIX_RADIUS);
  const main = heated ? loosen(coiled, start) : coiled;
  main.forEach((p, i) => {
    units.push({ p, flipped: false, branch: false });
    if (i > 0) links.push({ a: i - 1, b: i, kind: '1,4' });
  });

  /** @type {{ from: P3, to: P3 }[]} */
  const axes = [{ from: start, to: { x: start.x + (mainCount - 1) * RISE, y: 0, z: start.z } }];

  if (id === 'amylopectin') {
    const at = 6;
    const base = { x: main[at].x + 0.3, y: 0, z: 1.3 };
    const count = 9;
    const coiledBranch = helix(count, base, HELIX_RADIUS * 0.8, 90);
    const side = heated ? loosen(coiledBranch, base) : coiledBranch;
    const first = units.length;
    side.forEach((p, j) => {
      units.push({ p, flipped: false, branch: true });
      if (j > 0) links.push({ a: first + j - 1, b: first + j, kind: '1,4' });
    });
    links.push({ a: at, b: first, kind: '1,6' });
    axes.push({ from: base, to: { x: base.x + (count - 1) * RISE, y: 0, z: base.z } });
  }

  if (iodine) {
    if (heated) {
      for (let k = 0; k < 6; k++) iodines.push({ x: -2 + k * 0.8, y: k % 2 ? 1.8 : -1.8, z: 1 });
    } else {
      for (const ax of axes) {
        const len = ax.to.x - ax.from.x;
        const n = Math.max(2, Math.round(len / 0.55));
        for (let k = 0; k <= n; k++) {
          iodines.push({ x: ax.from.x + (len * k) / n, y: ax.from.y, z: ax.from.z });
        }
      }
    }
  }
  return { units, links, iodines, colour: iodine && !heated };
}

/**
 * The note about the iodine test (rich text).
 * @param {ChainId} id
 * @param {boolean} heated
 * @param {boolean} iodine
 */
export function iodineNote(id, heated, iodine) {
  if (!iodine && heated) {
    return 'Đun nóng: các đoạn mạch xoắn duỗi ra. Nhỏ dung dịch iodine để xem màu, rồi để nguội và quan sát lại.';
  }
  if (!iodine) {
    return id === 'cellulose'
      ? 'Mạch cellulose duỗi thẳng; các mạch nằm song song, liên kết với nhau bằng liên kết hydrogen (nét đứt) tạo thành sợi. Nhỏ dung dịch iodine để thử.'
      : `${CHAINS[id].name}: các gốc α-glucose nối với nhau tạo đoạn mạch xoắn lò xo, khoảng $${PER_TURN}$ gốc một vòng xoắn. Nhỏ dung dịch iodine để thử.`;
  }
  if (id === 'cellulose') {
    return 'Không có màu xanh tím: mạch cellulose không xoắn nên không giữ được phân tử iodine. Dùng iodine để phân biệt tinh bột với cellulose.';
  }
  if (heated) {
    return 'Đun nóng: mạch xoắn duỗi ra, các phân tử iodine thoát ra ngoài nên màu xanh tím biến mất. Để nguội, mạch xoắn lại và màu xanh tím xuất hiện trở lại.';
  }
  return 'Màu xanh tím: các phân tử iodine nằm trong lòng các đoạn mạch xoắn của tinh bột. Đây là phản ứng dùng để nhận biết tinh bột (và nhận biết iodine).';
}
