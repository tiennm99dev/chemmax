/**
 * The pH placing game: each everyday solution has a typical pH (from the
 * domain table); the learner sets a pH on the scale and a guess counts when
 * it lies within `TOLERANCE` of the real value, since real samples vary.
 */
import { formatNumber } from '#lib/core/number-format.js';
import { SUBSTANCES, litmus, medium, phenolphthalein } from '#lib/domain/ph.js';

/** How far a placement may be from the typical pH and still count. */
export const TOLERANCE = 1;

const PICKED = [
  'Dịch vị dạ dày',
  'Nước chanh',
  'Giấm ăn',
  'Cà phê đen',
  'Sữa bò',
  'Nước cất',
  'Máu',
  'Nước xà phòng',
  'Nước vôi trong',
];

/** @typedef {{ name: string, ph: number }} Sample */

/** @type {Sample[]} */
export const SAMPLES = SUBSTANCES.filter((s) => PICKED.includes(s.name));

/**
 * @typedef {object} Verdict
 * @property {boolean} ok
 * @property {'ok' | 'more-acidic' | 'more-basic'} direction where the real pH lies from the guess
 * @property {string} text feedback in Vietnamese
 */

/**
 * Judges a placement of `sample` at `guess`.
 * @param {Sample} sample
 * @param {number} guess
 * @returns {Verdict}
 */
export function judge(sample, guess) {
  const diff = sample.ph - guess;
  if (Math.abs(diff) <= TOLERANCE + 1e-9) {
    return { ok: true, direction: 'ok', text: `${sample.name}: ${describe(sample.ph)}` };
  }
  if (diff < 0) {
    return {
      ok: false,
      direction: 'more-acidic',
      text: `Chưa đúng: ${sample.name.toLowerCase()} có pH nhỏ hơn, tức là có tính acid mạnh hơn (hoặc tính base yếu hơn). Kéo vạch sang trái.`,
    };
  }
  return {
    ok: false,
    direction: 'more-basic',
    text: `Chưa đúng: ${sample.name.toLowerCase()} có pH lớn hơn, tức là có tính acid yếu hơn (hoặc tính base mạnh hơn). Kéo vạch sang phải.`,
  };
}

/**
 * "pH ≈ 2,4: môi trường acid; quỳ tím hoá đỏ; phenolphthalein không màu."
 * @param {number} ph
 */
export function describe(ph) {
  const env = {
    acid: 'môi trường acid',
    neutral: 'môi trường trung tính',
    base: 'môi trường base',
  }[medium(ph)];
  const paper = litmus(ph).name;
  const phth = phenolphthalein(ph).name;
  return `pH ≈ ${formatNumber(ph, 2)}, ${env}; quỳ tím ${paper === 'tím' ? 'không đổi màu' : `hoá ${paper}`}; phenolphthalein ${phth === 'hồng' ? 'chuyển màu hồng' : 'không màu'}.`;
}
