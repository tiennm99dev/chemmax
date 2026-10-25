/**
 * Weighing the way the KNTT book teaches it, on two virtual scales.
 *
 * Dial scale (cân đồng hồ): choose a scale whose GHĐ covers the object, turn
 * the adjusting screw so the needle sits on 0 while the pan is empty, put the
 * object on, look square on at the needle tip and read the nearest mark.
 *
 * Electronic scale (cân điện tử): put the empty container on, press the tare
 * button so the display shows 0, add the substance and read its own mass.
 *
 * Masses are whole grams, so no float noise reaches a comparison.
 */

import { formatFixed, formatNumber } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, name: string, mass: number }} Thing mass in g
 * @typedef {'trai' | 'vuong' | 'phai'} Eye
 */

/** The dial scale: 0 to 5 kg, one division is 50 g, numbered every 0,5 kg. */
export const DIAL = { ghd: 5000, dcnn: 50, labelEvery: 10 };

/** Things for the dial scale, in grams. */
/** @type {Thing[]} */
export const DIAL_THINGS = [
  { id: 'tui-tao', name: 'Túi táo', mass: 1415 },
  { id: 'qua-bi', name: 'Quả bí đỏ', mass: 2680 },
  { id: 'tui-gao', name: 'Túi gạo', mass: 4960 },
  { id: 'bao-gao', name: 'Bao gạo 10 kg', mass: 10050 },
];

/** Smallest screw turn, in grams of needle shift. */
export const SCREW_STEP = 25;

/** Apparent needle shift, in divisions, when the eye looks slanted. */
export const SLANT_SHIFT = 1.4;

/**
 * Round to the nearest mark of the dial: the reading taught in the book.
 * @param {number} grams
 * @param {number} [dcnn]
 */
export function nearestMark(grams, dcnn = DIAL.dcnn) {
  return Math.round(grams / dcnn) * dcnn;
}

/**
 * Where the needle points, in grams of the dial: the load plus the zero
 * error, stopped at the ends of the dial.
 * @param {number} load grams on the pan
 * @param {number} zeroError where the needle sits with an empty pan
 */
export function needle(load, zeroError) {
  return Math.max(0, Math.min(DIAL.ghd, load + zeroError));
}

/**
 * The value the eye sees at the needle tip.
 * @param {number} pointing grams the needle points at
 * @param {Eye} eye
 */
export function apparent(pointing, eye) {
  const shift = eye === 'trai' ? -SLANT_SHIFT : eye === 'phai' ? SLANT_SHIFT : 0;
  return pointing + shift * DIAL.dcnn;
}

/**
 * Check one recorded weighing on the dial scale, naming every broken step in
 * the order the book lists them.
 * @param {{ thing: Thing, zeroError: number, eye: Eye, kilograms: number }} m
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judgeDial({ thing, zeroError, eye, kilograms }) {
  if (!Number.isFinite(kilograms)) {
    return { ok: false, messages: ['Hãy nhập khối lượng theo kilôgam, ví dụ 1,25.'] };
  }
  if (thing.mass > DIAL.ghd) {
    return {
      ok: false,
      messages: [
        `${thing.name} nặng hơn GHĐ của cân (${formatNumber(DIAL.ghd / 1000)} kg): kim chỉ quá vạch cuối, không đọc được. Phải chọn cân có GHĐ lớn hơn, như cân bàn hoặc cân đòn.`,
      ],
    };
  }
  /** @type {string[]} */
  const messages = [];
  if (zeroError !== 0) {
    messages.push(
      'Khi đĩa cân còn trống, kim chưa chỉ đúng vạch số 0: phải vặn ốc điều chỉnh trước khi đặt vật.',
    );
  }
  if (eye !== 'vuong') {
    messages.push('Mắt đang nhìn chếch: phải nhìn vuông góc với vạch chia ở đầu kim cân.');
  }
  const grams = Math.round(kilograms * 1000);
  if (grams % DIAL.dcnn !== 0) {
    messages.push(
      `Kết quả phải ghi theo ĐCNN của cân (${DIAL.dcnn} g = ${formatNumber(DIAL.dcnn / 1000)} kg).`,
    );
  }
  const right = nearestMark(thing.mass);
  if (messages.length === 0 && grams !== right) {
    messages.push('Số đọc chưa đúng: đọc vạch chia gần nhất với đầu kim cân.');
  }
  if (messages.length > 0) return { ok: false, messages };
  return {
    ok: true,
    messages: [`Chính xác! ${thing.name} có khối lượng ${formatNumber(right / 1000)} kg.`],
  };
}

/**
 * Marks of the dial between two values, each with its kind, for drawing.
 * @param {number} from grams
 * @param {number} to grams
 */
export function dialMarks(from, to) {
  const first = Math.max(0, Math.ceil(from / DIAL.dcnn));
  const last = Math.min(DIAL.ghd / DIAL.dcnn, Math.floor(to / DIAL.dcnn));
  /** @type {Array<{ value: number, kind: 'label' | 'half' | 'tick' }>} */
  const out = [];
  for (let i = first; i <= last; i++) {
    const kind =
      i % DIAL.labelEvery === 0 ? 'label' : (2 * i) % DIAL.labelEvery === 0 ? 'half' : 'tick';
    out.push({ value: i * DIAL.dcnn, kind });
  }
  return out;
}

/** The electronic scale: GHĐ 500 g, ĐCNN 0,1 g. Masses in tenths of a gram. */
export const DIGITAL = { ghd: 5000, dcnn: 1 };

/**
 * @typedef {{ id: string, name: string, tenths: number }} Item mass in 0,1 g
 */

/** @type {Item[]} */
export const CONTAINERS = [
  { id: 'coc', name: 'Cốc thuỷ tinh', tenths: 623 },
  { id: 'dia', name: 'Giấy cân', tenths: 18 },
];

/** @type {Item[]} */
export const SAMPLES = [
  { id: 'muoi', name: 'Muối ăn', tenths: 254 },
  { id: 'duong', name: 'Đường', tenths: 1137 },
];

/**
 * @typedef {{ container: Item | null, sample: Item | null, tare: number }} Digital
 * `tare`: the load, in 0,1 g, that the tare button last set to zero.
 */

/** @returns {Digital} */
export function digitalStart() {
  return { container: null, sample: null, tare: 0 };
}

/** @param {Digital} s */
export function load(s) {
  return (s.container?.tenths ?? 0) + (s.sample?.tenths ?? 0);
}

/**
 * What the display shows: a reading in 0,1 g, or 'quá tải' past the GHĐ.
 * @param {Digital} s
 * @returns {{ over: true } | { over: false, tenths: number }}
 */
export function display(s) {
  if (load(s) > DIGITAL.ghd) return { over: true };
  return { over: false, tenths: load(s) - s.tare };
}

/**
 * Press the tare button: what is on the pan now reads 0.
 * @param {Digital} s
 * @returns {Digital}
 */
export function pressTare(s) {
  return { ...s, tare: load(s) };
}

/**
 * The display text the way the scale shows it, one decimal: 62,3 g.
 * @param {number} tenths
 */
export function gramsText(tenths) {
  return formatFixed(tenths / 10, 1);
}

/**
 * Check the mass recorded for the sample on the electronic scale.
 * @param {Digital} s
 * @param {number} grams the value typed
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judgeDigital(s, grams) {
  if (!s.sample) {
    return { ok: false, messages: ['Hãy cho mẫu chất vào vật chứa trên đĩa cân rồi mới đọc.'] };
  }
  if (!s.container) {
    return {
      ok: false,
      messages: [
        'Không đặt hoá chất trực tiếp lên đĩa cân: hãy đặt cốc hoặc giấy cân lên đĩa, trừ bì rồi mới cho mẫu vào.',
      ],
    };
  }
  if (!Number.isFinite(grams)) {
    return { ok: false, messages: ['Hãy nhập khối lượng theo gam, ví dụ 25,4.'] };
  }
  /** @type {string[]} */
  const messages = [];
  if (s.tare < s.container.tenths) {
    messages.push(
      `Số chỉ trên màn hình gồm cả khối lượng ${s.container.name.toLowerCase()}: hãy bấm "Trừ bì" khi trên đĩa mới chỉ có vật chứa, để cân chỉ khối lượng của mẫu.`,
    );
  } else if (s.tare > s.container.tenths) {
    messages.push(
      'Đã bấm "Trừ bì" khi mẫu đã ở trên đĩa, nên màn hình không còn chỉ khối lượng của mẫu. Hãy làm lại: đặt vật chứa, trừ bì, rồi mới cho mẫu vào.',
    );
  }
  const typed = Math.round(grams * 10);
  if (messages.length === 0 && typed !== s.sample.tenths) {
    messages.push('Số ghi chưa khớp với số hiện trên màn hình cân.');
  }
  if (messages.length > 0) return { ok: false, messages };
  return {
    ok: true,
    messages: [
      `Chính xác! Khối lượng ${s.sample.name.toLowerCase()} là ${gramsText(s.sample.tenths)} g.`,
    ],
  };
}
