/**
 * A teaching model of how buried organic matter turns into an oil or gas
 * field, and the API gravity classification of crude oil. The burial rate,
 * geothermal gradient and conversion rates are round teaching figures: real
 * basins differ, but the order of the stages is the same.
 */
import { tidy } from '#lib/core/number-format.js';

/** Temperature at the sea floor, in °C. */
export const SURFACE_T = 10;
/** Temperature rise per kilometre of depth, in °C/km. */
export const GRADIENT = 25;
/** How fast the source layer sinks under new sediment, in km per million years. */
export const BURIAL = 0.04;
/** Length of the timeline, in million years. */
export const MAX_TIME = 150;
/** Start and end of the oil window, in °C. */
export const OIL_WINDOW = /** @type {const} */ ([60, 120]);

/** Share of the starting kerogen turned into oil per million years in the oil window. */
const OIL_RATE = 2.5;
/** Share of the starting kerogen turned straight into gas per million years above the window. */
const GAS_RATE = 2;
/** Fraction of the oil cracked into gas per million years above the window. */
const CRACK_RATE = 0.05;

/** Depth of the source layer at time t, in km. @param {number} t */
export const depthAt = (t) => tidy(BURIAL * t);

/** Temperature of the source layer at time t, in °C. @param {number} t */
export const tempAt = (t) => tidy(SURFACE_T + GRADIENT * depthAt(t));

/** @typedef {'deposit' | 'kerogen' | 'oil' | 'gas'} Stage */

/**
 * The stage the source layer is in at time t.
 * @param {number} t
 * @returns {Stage}
 */
export function stageAt(t) {
  const T = tempAt(t);
  if (depthAt(t) < 0.5) return 'deposit';
  if (T < OIL_WINDOW[0]) return 'kerogen';
  if (T < OIL_WINDOW[1]) return 'oil';
  return 'gas';
}

/** What happens in each stage. @type {Record<Stage, { name: string, text: string }>} */
export const STAGES = {
  deposit: {
    name: 'Lắng đọng',
    text: 'Xác sinh vật phù du (tảo, động vật nhỏ) chìm xuống đáy biển, bị bùn, cát vùi lấp trong môi trường thiếu oxygen nên không bị phân huỷ hết.',
  },
  kerogen: {
    name: 'Tạo kerogen',
    text: 'Bị vùi sâu dần, dưới tác dụng của vi khuẩn kị khí, nhiệt độ và áp suất, chất hữu cơ biến thành kerogen, một chất rắn chưa phải dầu.',
  },
  oil: {
    name: 'Sinh dầu',
    text: 'Trong khoảng $60$ – $120\\ ^\\circ\\mathrm{C}$ ("cửa sổ dầu"), kerogen bị phân cắt thành các hydrocarbon lỏng: dầu mỏ được sinh ra.',
  },
  gas: {
    name: 'Sinh khí',
    text: 'Trên khoảng $120\\ ^\\circ\\mathrm{C}$, kerogen còn lại và cả dầu bị cracking thành phân tử nhỏ, chủ yếu là methane: lớp đá sinh ra khí.',
  },
};

/**
 * Amounts, in percent of the starting kerogen, after t million years.
 * @param {number} t
 * @returns {{ kerogen: number, oil: number, gas: number }}
 */
export function simulate(t) {
  let kerogen = 100;
  let oil = 0;
  let gas = 0;
  const steps = Math.floor(Math.min(Math.max(t, 0), MAX_TIME));
  for (let i = 0; i < steps; i++) {
    const T = tempAt(i + 0.5);
    if (T >= OIL_WINDOW[0] && T < OIL_WINDOW[1]) {
      const d = Math.min(kerogen, OIL_RATE);
      kerogen -= d;
      oil += d;
    } else if (T >= OIL_WINDOW[1]) {
      const d = Math.min(kerogen, GAS_RATE);
      kerogen -= d;
      const crack = oil * CRACK_RATE;
      oil -= crack;
      gas += d + crack;
    }
  }
  return { kerogen: tidy(kerogen, 1), oil: tidy(oil, 1), gas: tidy(gas, 1) };
}

/**
 * Where the oil and gas end up. Oil and gas are lighter than the salt water
 * in the pores, so they rise through porous rock; a dome of tight rock (the
 * cap rock) stops them and they settle as gas on top, oil in the middle and
 * water below. Without a cap rock they leak away to the surface.
 * @param {number} t
 * @param {boolean} seal
 * @returns {{ trappedOil: number, trappedGas: number, lost: number }}
 */
export function trap(t, seal) {
  const { oil, gas } = simulate(t);
  if (!seal) return { trappedOil: 0, trappedGas: 0, lost: tidy(oil + gas, 1) };
  return { trappedOil: oil, trappedGas: gas, lost: 0 };
}

/**
 * One line of feedback on the field at time t.
 * @param {number} t
 * @param {boolean} seal
 * @param {(v: number) => string} format
 */
export function fieldText(t, seal, format) {
  const { oil, gas } = simulate(t);
  if (oil + gas < 1) return 'Chưa có dầu, khí nào được sinh ra: lớp đá mẹ còn quá nông, quá nguội.';
  if (!seal) {
    return `Đã sinh ra ${format(oil + gas)}% (dầu và khí) nhưng không có lớp đá chắn: dầu, khí nhẹ hơn nước nên nổi lên, thoát ra ngoài và mất đi. Không hình thành mỏ.`;
  }
  if (gas > oil) {
    return `Bẫy chứa ${format(oil)}% dầu và ${format(gas)}% khí: vùi càng sâu, dầu càng bị cracking thành khí, mỏ chủ yếu là khí.`;
  }
  return `Bẫy chứa ${format(oil)}% dầu và ${format(gas)}% khí: khí ở trên cùng, dầu ở giữa, nước mặn ở dưới. Đây là một mỏ dầu.`;
}

/**
 * API gravity of a crude from its specific gravity at 15,6 °C.
 * @param {number} sg
 */
export const apiGravity = (sg) => tidy(141.5 / sg - 131.5);

/** @typedef {'light' | 'medium' | 'heavy' | 'extra'} DensityClass */

/** Vietnamese names of the density classes. @type {Record<DensityClass, string>} */
export const DENSITY_NAMES = {
  light: 'dầu nhẹ',
  medium: 'dầu trung bình',
  heavy: 'dầu nặng',
  extra: 'dầu siêu nặng',
};

/**
 * Class of a crude by API gravity.
 * @param {number} api
 * @returns {DensityClass}
 */
export function densityClass(api) {
  if (api > 31.1) return 'light';
  if (api > 22.3) return 'medium';
  if (api >= 10) return 'heavy';
  return 'extra';
}

/** Sulfur content (mass %) above which a crude is called sour. */
export const SOUR_LIMIT = 0.5;

/**
 * Sweet or sour by sulfur content.
 * @param {number} sulfur mass percent
 */
export const sulfurClass = (sulfur) => (sulfur > SOUR_LIMIT ? 'dầu chua' : 'dầu ngọt');

/** @typedef {{ id: string, name: string, sg: number, sulfur: number }} Crude */

/**
 * Samples for the classifier. Bạch Hổ uses the figures the book quotes
 * (API about 36,6, sulfur 0,03 – 0,05 %); the others are made-up samples.
 * @type {Crude[]}
 */
export const CRUDES = [
  { id: 'bach-ho', name: 'Bạch Hổ', sg: 0.842, sulfur: 0.04 },
  { id: 'a', name: 'Mẫu A', sg: 0.88, sulfur: 1.2 },
  { id: 'b', name: 'Mẫu B', sg: 0.93, sulfur: 2.5 },
  { id: 'c', name: 'Mẫu C', sg: 1.01, sulfur: 4 },
];
