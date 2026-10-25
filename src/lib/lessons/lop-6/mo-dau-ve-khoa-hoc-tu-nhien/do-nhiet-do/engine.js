/**
 * Measuring temperature with liquid thermometers, the way the KNTT book
 * teaches it: choose a thermometer whose range covers the temperature, put
 * the bulb in contact with what is measured, wait until the liquid column
 * stops moving, read the nearest mark and convert to kelvin with
 * T (K) = t (°C) + 273.
 *
 * The bulb warms or cools towards the temperature around it exponentially;
 * the medical thermometer keeps its highest reading (the narrow neck above
 * the bulb) until it is shaken down.
 */

import { formatFixed, formatNumber } from '#lib/core/number-format.js';

export const KELVIN_OFFSET = 273;

/** Air temperature of the room, °C. */
export const AIR = 28;

/**
 * @typedef {{ id: string, name: string, min: number, max: number, dcnn: number,
 *   labelEvery: number, tau: number, keepsMax: boolean, liquid: string }} Thermometer
 * `labelEvery`: °C between numbered marks; `tau`: time constant in seconds.
 * @typedef {{ id: string, name: string, temp: number }} Target
 */

/** @type {Thermometer[]} */
export const THERMOMETERS = [
  {
    id: 'y-te',
    name: 'Nhiệt kế y tế',
    min: 35,
    max: 42,
    dcnn: 0.1,
    labelEvery: 1,
    tau: 25,
    keepsMax: true,
    liquid: 'thuỷ ngân',
  },
  {
    id: 'ruou',
    name: 'Nhiệt kế rượu',
    min: -30,
    max: 50,
    dcnn: 1,
    labelEvery: 10,
    tau: 6,
    keepsMax: false,
    liquid: 'rượu',
  },
  {
    id: 'thuy-ngan',
    name: 'Nhiệt kế thuỷ ngân',
    min: -10,
    max: 110,
    dcnn: 1,
    labelEvery: 10,
    tau: 6,
    keepsMax: false,
    liquid: 'thuỷ ngân',
  },
];

/** @type {Target[]} */
export const TARGETS = [
  { id: 'nach', name: 'Nách (thân nhiệt)', temp: 36.8 },
  { id: 'nuoc-da', name: 'Nước đá đang tan', temp: 0 },
  { id: 'nuoc-may', name: 'Nước máy', temp: 24 },
  { id: 'nuoc-nong', name: 'Nước nóng', temp: 72 },
  { id: 'nuoc-soi', name: 'Nước đang sôi', temp: 100 },
];

/** Where the medical thermometer's mercury sits before it is shaken down. */
export const LEFT_OVER = 37.6;

/** Below the first mark of the medical thermometer, after shaking it down. */
export const SHAKEN = 34;

/**
 * @param {number} celsius
 */
export function toKelvin(celsius) {
  return celsius + KELVIN_OFFSET;
}

/**
 * @param {number} kelvin
 */
export function toCelsius(kelvin) {
  return kelvin - KELVIN_OFFSET;
}

/**
 * Bulb temperature `t` seconds after it was put where the temperature is
 * `to`, starting from `from`.
 * @param {number} from
 * @param {number} to
 * @param {number} tau
 * @param {number} t
 */
export function settle(from, to, tau, t) {
  if (t <= 0) return from;
  return to + (from - to) * Math.exp(-t / tau);
}

/**
 * Where the liquid column stands, in °C of the scale, and whether it has run
 * off either end of the scale.
 * @param {Thermometer} th
 * @param {number} bulb bulb temperature
 * @param {number} peak highest bulb temperature since the last shake (medical only)
 */
export function column(th, bulb, peak) {
  const raw = th.keepsMax ? Math.max(bulb, peak) : bulb;
  return {
    level: Math.max(th.min - 1, Math.min(th.max, raw)),
    over: raw > th.max,
    under: raw < th.min,
  };
}

/**
 * Round to the nearest mark of the thermometer, avoiding float noise.
 * @param {number} celsius
 * @param {number} dcnn
 */
export function nearestMark(celsius, dcnn) {
  const tenths = Math.round(dcnn * 10);
  return (Math.round(Math.round(celsius * 10) / tenths) * tenths) / 10;
}

/** The column counts as still once the bulb is this close to the target, in ĐCNN. */
export const STILL = 0.3;

/**
 * Whether the column has stopped moving.
 * @param {Thermometer} th
 * @param {number} bulb
 * @param {number} target
 */
export function isStill(th, bulb, target) {
  return Math.abs(bulb - target) < STILL * th.dcnn;
}

/**
 * The best thermometer for a temperature: range covers it, smallest ĐCNN.
 * @param {number} temp
 */
export function bestThermometer(temp) {
  const fits = THERMOMETERS.filter((th) => th.min <= temp && temp <= th.max);
  return fits.reduce((a, b) => (b.dcnn < a.dcnn ? b : a), fits[0]);
}

/** @param {number} x */
const c = (x) => formatNumber(x, 1);

/**
 * Check a recorded temperature, naming each broken step in book order.
 * @param {{ th: Thermometer, target: Target, inContact: boolean, still: boolean,
 *   peak: number, celsius: number, kelvin: number }} m
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judge({ th, target, inContact, still, peak, celsius, kelvin }) {
  if (target.temp > th.max) {
    const extra = th.keepsMax
      ? ' Nhiệt kế y tế chỉ dùng đo thân nhiệt; nhúng vào nước nóng có thể làm vỡ nhiệt kế.'
      : '';
    return {
      ok: false,
      messages: [
        `${target.name} nóng hơn số lớn nhất ghi trên ${th.name.toLowerCase()} (${c(th.max)} °C): không đo được.${extra} Hãy chọn nhiệt kế khác.`,
      ],
    };
  }
  if (target.temp < th.min) {
    return {
      ok: false,
      messages: [
        `${target.name} lạnh hơn số nhỏ nhất ghi trên ${th.name.toLowerCase()} (${c(th.min)} °C): ${th.liquid} tụt xuống dưới vạch đầu tiên, không đọc được. Hãy chọn nhiệt kế khác.`,
      ],
    };
  }
  if (!inContact) {
    return {
      ok: false,
      messages: ['Bầu nhiệt kế chưa tiếp xúc với vật cần đo: hãy đặt bầu nhiệt kế vào rồi chờ.'],
    };
  }
  /** @type {string[]} */
  const messages = [];
  if (th.keepsMax && peak > target.temp + th.dcnn / 2) {
    messages.push(
      'Chưa vẩy nhiệt kế: thuỷ ngân còn dừng ở mức của lần đo trước. Lấy nhiệt kế ra, vẩy cho thuỷ ngân tụt xuống dưới vạch 35 °C rồi đo lại.',
    );
  } else if (!still) {
    messages.push(
      'Mực chất lỏng còn đang dâng lên hoặc tụt xuống: chờ đến khi nó đứng yên rồi mới đọc.',
    );
  }
  if (!Number.isFinite(celsius)) {
    messages.push('Hãy nhập nhiệt độ theo độ C, ví dụ 36,8.');
  }
  if (messages.length > 0) return { ok: false, messages };
  const right = nearestMark(target.temp, th.dcnn);
  if (Math.round(celsius * 10) !== Math.round(right * 10)) {
    return {
      ok: false,
      messages: [
        `Số đọc chưa đúng: đọc vạch chia gần nhất với mực ${th.liquid} (ĐCNN ${c(th.dcnn)} °C).`,
      ],
    };
  }
  if (!Number.isFinite(kelvin) || Math.round(kelvin * 10) !== Math.round(toKelvin(right) * 10)) {
    return {
      ok: false,
      messages: [`Đọc đúng ${c(right)} °C. Đổi sang kelvin chưa đúng: T (K) = t (°C) + 273.`],
    };
  }
  const best = bestThermometer(target.temp);
  const tip =
    best.dcnn < th.dcnn
      ? ` Dùng ${best.name.toLowerCase()} (ĐCNN ${c(best.dcnn)} °C) sẽ đo chính xác hơn.`
      : '';
  return {
    ok: true,
    messages: [
      `Chính xác! ${target.name}: ${c(right)} °C = ${formatNumber(toKelvin(right), 1)} K.${tip}`,
    ],
  };
}

/**
 * Marks of a thermometer scale between two values, for drawing.
 * @param {Thermometer} th
 * @param {number} from
 * @param {number} to
 */
export function marks(th, from, to) {
  const step = Math.round(th.dcnn * 10);
  const first = Math.max(Math.round(th.min * 10), Math.ceil((from * 10) / step) * step);
  const last = Math.min(Math.round(th.max * 10), Math.floor((to * 10) / step) * step);
  const label = Math.round(th.labelEvery * 10);
  /** @type {Array<{ value: number, kind: 'label' | 'half' | 'tick' }>} */
  const out = [];
  for (let i = first; i <= last; i += step) {
    const kind = i % label === 0 ? 'label' : (2 * i) % label === 0 ? 'half' : 'tick';
    out.push({ value: i / 10, kind });
  }
  return out;
}

/**
 * A temperature with the scale's decimals: 36,8 on the medical thermometer.
 * @param {number} celsius
 * @param {Thermometer} th
 */
export function tempText(celsius, th) {
  return formatFixed(celsius, th.dcnn < 1 ? 1 : 0);
}
