/**
 * Measuring a length with a ruler, the way the KNTT book teaches it: choose a
 * ruler whose GHĐ covers the object and whose ĐCNN is small enough, put the
 * 0 mark at one end, look square on at the other end, read the nearest mark
 * and write the result to the ĐCNN.
 *
 * Lengths are in centimetres. Positions are compared in whole hundredths of
 * a centimetre so float noise never turns a right answer wrong.
 */

/**
 * @typedef {{ id: string, name: string, ghd: number, dcnn: number, labelEvery: number }} Ruler
 * `labelEvery`: number of ĐCNN between two numbered marks.
 * @typedef {{ id: string, name: string, length: number }} Thing
 * @typedef {'trai' | 'vuong' | 'phai'} Eye
 */

/** @type {Ruler[]} */
export const RULERS = [
  { id: 'thuoc-ke', name: 'Thước kẻ', ghd: 20, dcnn: 0.1, labelEvery: 10 },
  { id: 'thuoc-thang', name: 'Thước thẳng', ghd: 50, dcnn: 0.5, labelEvery: 2 },
  { id: 'thuoc-day', name: 'Thước dây', ghd: 150, dcnn: 1, labelEvery: 10 },
];

/** @type {Thing[]} */
export const THINGS = [
  { id: 'but-chi', name: 'Bút chì', length: 14.32 },
  { id: 'cuc-tay', name: 'Cục tẩy', length: 4.47 },
  { id: 'quyen-sach', name: 'Quyển sách', length: 26.4 },
  { id: 'mat-ban', name: 'Mặt bàn học', length: 119.8 },
];

/** @param {number} x */
const hundredths = (x) => Math.round(x * 100);

/**
 * Round to the nearest ĐCNN, as the reading of the nearest mark.
 * @param {number} value
 * @param {number} dcnn
 */
export function toNearestMark(value, dcnn) {
  const step = hundredths(dcnn);
  return (Math.round(hundredths(value) / step) * step) / 100;
}

/**
 * The best ruler for an object: one measurement (GHĐ at least the length)
 * with the smallest ĐCNN.
 * @param {number} length
 * @param {Ruler[]} [rulers]
 */
export function bestRuler(length, rulers = RULERS) {
  const fits = rulers.filter((r) => r.ghd >= length);
  if (fits.length === 0) return null;
  return fits.reduce((a, b) => (b.dcnn < a.dcnn ? b : a));
}

/**
 * The recorded result of a correct measurement.
 * @param {number} length
 * @param {Ruler} ruler
 */
export function expectedReading(length, ruler) {
  return toNearestMark(length, ruler.dcnn);
}

/** Apparent shift of the far end, in ĐCNN, when the eye looks slanted. */
export const SLANT_SHIFT = 1.5;

/**
 * Where on the ruler the far end of the object appears, in cm of the scale.
 * `offset` is the position of the ruler's 0 mark relative to the near end of
 * the object (positive: the 0 mark is past the end, inside the object).
 * @param {number} length
 * @param {number} offset
 * @param {Eye} eye
 * @param {Ruler} ruler
 */
export function apparentEnd(length, offset, eye, ruler) {
  const shift = eye === 'trai' ? -SLANT_SHIFT : eye === 'phai' ? SLANT_SHIFT : 0;
  return length - offset + shift * ruler.dcnn;
}

/** How close (cm) the 0 mark must be to the end of the object. */
export const ALIGN_TOLERANCE = 0.02;

/**
 * @param {number} offset
 */
export function aligned(offset) {
  return Math.abs(offset) <= ALIGN_TOLERANCE;
}

/**
 * Check one recorded measurement and say what went wrong, in the order the
 * steps are taught.
 * @param {{ thing: Thing, ruler: Ruler, offset: number, eye: Eye, value: number }} m
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judge({ thing, ruler, offset, eye, value }) {
  /** @type {string[]} */
  const messages = [];
  if (!Number.isFinite(value)) {
    return { ok: false, messages: ['Hãy nhập số đo, ví dụ 12,5.'] };
  }
  if (ruler.ghd < thing.length) {
    messages.push(
      `GHĐ của ${ruler.name.toLowerCase()} (${fmt(ruler.ghd)} cm) nhỏ hơn chiều dài vật: phải đo nhiều lần, dễ sai. Hãy chọn thước có GHĐ lớn hơn.`,
    );
  } else {
    const best = bestRuler(thing.length);
    if (best && best.dcnn < ruler.dcnn) {
      messages.push(
        `Thước này đo được nhưng ĐCNN ${fmt(ruler.dcnn)} cm còn lớn; ${best.name.toLowerCase()} (ĐCNN ${fmt(best.dcnn)} cm) cho kết quả chính xác hơn.`,
      );
    }
  }
  if (!aligned(offset)) {
    messages.push('Vạch số 0 của thước chưa ngang bằng với một đầu của vật.');
  }
  if (eye !== 'vuong') {
    messages.push('Mắt đang nhìn chếch: phải đặt mắt nhìn theo hướng vuông góc với cạnh thước.');
  }
  const step = hundredths(ruler.dcnn);
  if (hundredths(value) % step !== 0) {
    messages.push(`Kết quả phải ghi theo ĐCNN của thước (${fmt(ruler.dcnn)} cm).`);
  }
  const right = expectedReading(thing.length, ruler);
  if (messages.length === 0 && hundredths(value) !== hundredths(right)) {
    messages.push('Số đọc chưa đúng: đọc giá trị của vạch chia gần nhất với đầu kia của vật.');
  }
  if (messages.length === 0) {
    return {
      ok: true,
      messages: [
        `Chính xác! ${thing.name} dài ${fmt(right)} cm (đo bằng ${ruler.name.toLowerCase()}).`,
      ],
    };
  }
  return { ok: false, messages };
}

/**
 * Marks of a ruler between two scale values, each with its kind, for drawing.
 * @param {Ruler} ruler
 * @param {number} from
 * @param {number} to
 */
export function marks(ruler, from, to) {
  const step = hundredths(ruler.dcnn);
  const first = Math.max(0, Math.ceil(hundredths(from) / step));
  const last = Math.min(
    Math.round(hundredths(ruler.ghd) / step),
    Math.floor(hundredths(to) / step),
  );
  /** @type {Array<{ value: number, kind: 'label' | 'half' | 'tick' }>} */
  const out = [];
  for (let i = first; i <= last; i++) {
    const kind =
      i % ruler.labelEvery === 0 ? 'label' : (2 * i) % ruler.labelEvery === 0 ? 'half' : 'tick';
    out.push({ value: (i * step) / 100, kind });
  }
  return out;
}

/**
 * Vietnamese decimal comma.
 * @param {number} x
 */
export function fmt(x) {
  return String(Math.round(x * 100) / 100).replace('.', ',');
}
