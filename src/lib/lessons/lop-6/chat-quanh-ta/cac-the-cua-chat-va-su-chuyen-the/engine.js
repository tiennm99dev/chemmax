/**
 * A schematic model of heating (or cooling) water from ice at -30 °C to steam
 * at 120 °C. The heat axis is in arbitrary units and not to scale; what the
 * model keeps right is the order of the stages and that the temperature stays
 * at 0 °C while ice melts and at 100 °C while water boils.
 */

/** Number of particles drawn. */
export const N = 30;
export const MELT = 0;
export const BOIL = 100;
export const HEAT_MAX = 100;

/** Heat values (arbitrary units) where each stage starts and ends. */
export const STAGE_BOUNDS = { meltStart: 15, meltEnd: 35, boilStart: 60, boilEnd: 90 };

/** @typedef {'ran' | 'nong-chay' | 'long' | 'soi' | 'khi'} Stage */
/**
 * @typedef {{ heat: number, temp: number, stage: Stage, solid: number, liquid: number, gas: number }} WaterState
 */

/**
 * Particles of liquid water that have evaporated from the surface at a given
 * temperature (0 to 4): evaporation happens at every temperature and faster
 * when the water is hotter.
 * @param {number} temp °C, between 0 and 100
 */
export function evaporated(temp) {
  return Math.round(Math.min(Math.max(temp, MELT), BOIL) / 25);
}

/**
 * The state of the water after `heat` units of heat.
 * @param {number} heat between 0 and HEAT_MAX
 * @returns {WaterState}
 */
export function stateAt(heat) {
  const q = Math.min(Math.max(heat, 0), HEAT_MAX);
  const { meltStart, meltEnd, boilStart, boilEnd } = STAGE_BOUNDS;
  if (q < meltStart) {
    return { heat: q, temp: -30 + (30 * q) / meltStart, stage: 'ran', solid: N, liquid: 0, gas: 0 };
  }
  if (q < meltEnd) {
    const solid = Math.round((1 - (q - meltStart) / (meltEnd - meltStart)) * N);
    return { heat: q, temp: MELT, stage: 'nong-chay', solid, liquid: N - solid, gas: 0 };
  }
  if (q < boilStart) {
    const temp = ((q - meltEnd) / (boilStart - meltEnd)) * BOIL;
    const gas = evaporated(temp);
    return { heat: q, temp, stage: 'long', solid: 0, liquid: N - gas, gas };
  }
  if (q < boilEnd) {
    const start = evaporated(BOIL);
    const gas = start + Math.round(((q - boilStart) / (boilEnd - boilStart)) * (N - start));
    return { heat: q, temp: BOIL, stage: 'soi', solid: 0, liquid: N - gas, gas };
  }
  const temp = BOIL + ((q - boilEnd) / (HEAT_MAX - boilEnd)) * 20;
  return { heat: q, temp, stage: 'khi', solid: 0, liquid: 0, gas: N };
}

/**
 * The name of what is happening, given whether the water is being heated
 * (`up`) or cooled.
 * @param {Stage} stage @param {boolean} up
 */
export function processName(stage, up) {
  switch (stage) {
    case 'ran':
      return up ? 'Nước đá nóng lên' : 'Nước đá lạnh đi';
    case 'nong-chay':
      return up ? 'Nóng chảy (rắn → lỏng)' : 'Đông đặc (lỏng → rắn)';
    case 'long':
      return up
        ? 'Bay hơi trên bề mặt chất lỏng (lỏng → hơi)'
        : 'Nước lỏng lạnh đi, ít hạt bay hơi hơn';
    case 'soi':
      return up ? 'Sôi (bay hơi cả trong lòng và trên bề mặt chất lỏng)' : 'Ngưng tụ (hơi → lỏng)';
    default:
      return up ? 'Hơi nước nóng lên' : 'Hơi nước lạnh đi';
  }
}

/**
 * Plain description of the particles in the state shown, given whether the
 * water is being heated (`up`) or cooled.
 * @param {WaterState} s @param {boolean} [up]
 */
export function particleNote(s, up = true) {
  switch (s.stage) {
    case 'ran':
      return 'Thể rắn: các hạt liên kết chặt chẽ, xếp khít nhau và chỉ dao động tại chỗ, nên nước đá có hình dạng và thể tích xác định.';
    case 'nong-chay':
      return up
        ? 'Một phần hạt thoát khỏi khối rắn và trượt lên nhau thành chất lỏng. Nhiệt độ đứng yên ở 0 °C cho đến khi nước đá tan hết.'
        : 'Các hạt lỏng chậm dần, xếp lại khít nhau thành nước đá. Nhiệt độ đứng yên ở 0 °C cho đến khi nước đông đặc hết.';
    case 'long':
      return 'Thể lỏng: các hạt liên kết không chặt chẽ, trượt lên nhau, nên nước chảy được và có hình dạng của vật chứa. Một vài hạt ở bề mặt thoát ra thành hơi: đó là sự bay hơi.';
    case 'soi':
      return up
        ? 'Bọt hơi tạo thành ngay trong lòng chất lỏng. Nhiệt độ đứng yên ở 100 °C cho đến khi nước hoá hơi hết.'
        : 'Các hạt hơi chậm lại, gặp nhau và tụ lại thành giọt nước lỏng. Nhiệt độ đứng yên ở 100 °C cho đến khi hơi ngưng tụ hết.';
    default:
      return 'Thể khí: các hạt ở rất xa nhau, chuyển động tự do và hỗn loạn về mọi phía, nên chất khí chiếm đầy bình chứa và dễ bị nén.';
  }
}

/** Box the particles live in (SVG units). */
export const BOX = { left: 10, right: 310, top: 10, bottom: 210 };
const R = 6;
const GAP = 16;
const ROWS = 5;
const LIQUID_AREA = 330;

/** @param {number} u */
const tri = (u) => {
  const m = ((u % 2) + 2) % 2;
  return 1 - Math.abs(m - 1);
};

/**
 * Fixed per-particle numbers, so every visitor sees the same motion.
 * @param {number} i
 */
function seeds(i) {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12345.6789;
  const fa = a - Math.floor(a);
  const fb = b - Math.floor(b);
  return { px: fa * 2, py: fb * 2, fx: 0.6 + fa * 0.5, fy: 0.5 + fb * 0.6 };
}

/**
 * The height of the liquid in the box.
 * @param {WaterState} s
 */
export function liquidLevel(s) {
  if (s.liquid === 0) return 0;
  const left = BOX.left + Math.ceil(s.solid / ROWS) * GAP;
  return Math.max(2 * R + 4, (s.liquid * LIQUID_AREA) / (BOX.right - left));
}

/**
 * Where each particle is drawn at time `t` (seconds). Solid particles sit on
 * a lattice in the bottom left and shake more as the ice warms; liquid
 * particles wander in a band next to the solid; gas particles bounce through
 * the space above the liquid, faster when hotter.
 * @param {WaterState} s @param {number} t
 * @returns {Array<{ x: number, y: number, phase: 'solid' | 'liquid' | 'gas' }>}
 */
export function layout(s, t) {
  /** @type {Array<{ x: number, y: number, phase: 'solid' | 'liquid' | 'gas' }>} */
  const out = [];
  const shake = 0.6 + ((Math.min(s.temp, MELT) + 30) / 30) * 1.6;
  for (let k = 0; k < s.solid; k++) {
    const { px, py } = seeds(k);
    const col = Math.floor(k / ROWS);
    const row = k % ROWS;
    out.push({
      x: BOX.left + R + 2 + col * GAP + shake * Math.sin(t * 9 + px * Math.PI),
      y: BOX.bottom - R - 2 - row * GAP + shake * Math.sin(t * 11 + py * Math.PI),
      phase: 'solid',
    });
  }
  const level = liquidLevel(s);
  const lx0 = BOX.left + Math.ceil(s.solid / ROWS) * GAP + R;
  const lx1 = BOX.right - R;
  const ly0 = BOX.bottom - level + R;
  const ly1 = BOX.bottom - R;
  for (let k = 0; k < s.liquid; k++) {
    const { px, py, fx, fy } = seeds(100 + k);
    const v = 0.08 + Math.max(s.temp, 0) / 600;
    out.push({
      x: lx0 + (lx1 - lx0) * tri(px + t * v * fx),
      y: ly0 + Math.max(0, ly1 - ly0) * tri(py + t * v * fy * 2),
      phase: 'liquid',
    });
  }
  const gy1 = BOX.bottom - level - R;
  for (let k = 0; k < s.gas; k++) {
    const { px, py, fx, fy } = seeds(200 + k);
    const v = 0.35 + Math.max(s.temp, 0) / 300;
    out.push({
      x: BOX.left + R + (BOX.right - BOX.left - 2 * R) * tri(px + t * v * fx),
      y: BOX.top + R + Math.max(0, gy1 - BOX.top - R) * tri(py + t * v * fy),
      phase: 'gas',
    });
  }
  return out;
}

/** Corner points of the heating curve: [heat, temperature]. */
export const CURVE = [
  [0, -30],
  [STAGE_BOUNDS.meltStart, MELT],
  [STAGE_BOUNDS.meltEnd, MELT],
  [STAGE_BOUNDS.boilStart, BOIL],
  [STAGE_BOUNDS.boilEnd, BOIL],
  [HEAT_MAX, 120],
];
