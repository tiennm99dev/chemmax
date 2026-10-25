/**
 * A thin-lens model of a hand magnifier held a fixed distance from the eye.
 * The learner moves the lens away from a small object; the image grows, and
 * it is sharp only while the virtual image sits farther from the eye than the
 * near point. Past the focal point the image turns upside down and blurs.
 *
 * All lengths are in centimetres.
 */

/** Focal length: a "5x" magnifier, since 25 / 5 = 5. */
export const FOCAL = 5;
/** Distance from the eye to the lens. */
export const EYE_TO_LENS = 10;
/** Nearest distance a young eye sees sharply. */
export const NEAR_POINT = 25;
export const MIN_DISTANCE = 0.5;
export const MAX_DISTANCE = 8;

/**
 * Distance from the lens to the virtual image, for an object inside the
 * focal length; Infinity at or beyond it.
 * @param {number} d lens-to-object distance
 */
export function imageDistance(d) {
  return d < FOCAL ? (d * FOCAL) / (FOCAL - d) : Infinity;
}

/**
 * How many times bigger the object looks than when seen with the naked eye
 * at the near point. Inside the focal length the image subtends
 * h·f / (L·f + d·(f − L)) at the eye.
 * @param {number} d
 */
export function apparentMagnification(d) {
  const dd = Math.min(d, FOCAL);
  return (NEAR_POINT * FOCAL) / (EYE_TO_LENS * FOCAL + dd * (FOCAL - EYE_TO_LENS));
}

/** Smallest lens-to-object distance that gives a sharp image. */
export const SHARP_FROM = (FOCAL * (NEAR_POINT - EYE_TO_LENS)) / (FOCAL + NEAR_POINT - EYE_TO_LENS);

/**
 * @param {number} d
 * @returns {'gan-qua' | 'ro-net' | 'xa-qua'}
 */
export function viewState(d) {
  if (d >= FOCAL) return 'xa-qua';
  return d + 1e-9 >= SHARP_FROM ? 'ro-net' : 'gan-qua';
}

/**
 * Blur radius in px for the drawing: 0 while sharp, growing with the miss.
 * @param {number} d
 */
export function blur(d) {
  const s = viewState(d);
  if (s === 'ro-net') return 0;
  if (s === 'gan-qua') {
    const fromEye = imageDistance(d) + EYE_TO_LENS;
    return Math.min(8, 1 + (8 * (NEAR_POINT - fromEye)) / NEAR_POINT);
  }
  return Math.min(10, 4 + 3 * (d - FOCAL));
}

/**
 * The image is upside down once the object is beyond the focal point.
 * @param {number} d
 */
export function inverted(d) {
  return d > FOCAL;
}

/** @type {Record<ReturnType<typeof viewState>, string>} */
export const STATE_TEXT = {
  'gan-qua': 'Kính còn quá gần vật: ảnh nhỏ và mờ. Từ từ đưa kính ra xa vật.',
  'ro-net': 'Ảnh rõ nét! Giữ kính ở vị trí này để quan sát.',
  'xa-qua': 'Kính đã quá xa vật: ảnh bị mờ (và lộn ngược). Đưa kính lại gần vật hơn.',
};
