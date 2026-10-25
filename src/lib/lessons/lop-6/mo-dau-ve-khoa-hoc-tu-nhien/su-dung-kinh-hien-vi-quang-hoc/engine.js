/**
 * A virtual light microscope. The gap between the objective and the slide is
 * kept as a whole number of hundredths of a millimetre, so knob turns never
 * collect float error. Each objective has its own working distance and a
 * depth of field that shrinks as the magnification grows: the 4x objective
 * focuses with the coarse knob alone, the 40x one needs the fine knob.
 */

/** Magnification of the eyepiece (thị kính). */
export const EYEPIECE = 10;

/**
 * @typedef {{ mag: number, focus: number, depth: number }} Objective
 * `focus` and `depth` in hundredths of a millimetre.
 */

/** @type {Objective[]} */
export const OBJECTIVES = [
  { mag: 4, focus: 1700, depth: 40 },
  { mag: 10, focus: 700, depth: 12 },
  { mag: 40, focus: 60, depth: 4 },
];

/** One step of the coarse knob (ốc to): 1 mm. */
export const COARSE_STEP = 100;
/** One step of the fine knob (ốc nhỏ): 0,05 mm. */
export const FINE_STEP = 5;
/** Highest gap the stage allows. */
export const MAX_GAP = 3000;
/** Gap when the lesson starts: stage lowered. */
export const START_GAP = 2530;

/**
 * Total magnification: objective times eyepiece.
 * @param {number} objectiveMag
 * @param {number} [eyepieceMag]
 */
export function totalMagnification(objectiveMag, eyepieceMag = EYEPIECE) {
  return objectiveMag * eyepieceMag;
}

/**
 * Turn a knob. Positive `steps` raise the gap (stage goes down). The gap
 * stops at 0: the objective is touching the slide.
 * @param {number} gap
 * @param {'coarse' | 'fine'} knob
 * @param {number} steps
 */
export function turn(gap, knob, steps) {
  const size = knob === 'coarse' ? COARSE_STEP : FINE_STEP;
  return Math.max(0, Math.min(MAX_GAP, gap + steps * size));
}

/**
 * @param {Objective} objective
 * @param {number} gap
 * @returns {'cham' | 'net' | 'gan-net' | 'mo' | 'khong-thay'}
 */
export function focusState(objective, gap) {
  if (gap === 0) return 'cham';
  const miss = Math.abs(gap - objective.focus);
  if (miss <= objective.depth) return 'net';
  if (miss <= objective.depth * 6) return 'gan-net';
  if (miss <= objective.depth * 15) return 'mo';
  return 'khong-thay';
}

/**
 * Blur radius for the drawing, in px.
 * @param {Objective} objective
 * @param {number} gap
 */
export function blurRadius(objective, gap) {
  const miss = Math.abs(gap - objective.focus);
  if (miss <= objective.depth) return 0;
  return Math.min(14, 0.6 + (miss - objective.depth) / (objective.depth * 1.5));
}

/**
 * Light reaching the eye, from the diaphragm opening (0 to 100). Higher
 * magnification needs more light.
 * @param {Objective} objective
 * @param {number} light
 * @returns {'toi' | 'vua' | 'choi'}
 */
export function lightState(objective, light) {
  const need = objective.mag >= 40 ? 70 : objective.mag >= 10 ? 45 : 25;
  if (light < need - 20) return 'toi';
  if (light > need + 25) return 'choi';
  return 'vua';
}

/** @type {Record<ReturnType<typeof focusState>, string>} */
export const FOCUS_TEXT = {
  cham: 'Dừng lại! Vật kính đã chạm vào lá kính, có thể làm vỡ tiêu bản và hỏng vật kính. Khi hạ vật kính sát tiêu bản phải nhìn từ bên ngoài.',
  net: 'Ảnh rõ nét: em thấy rõ các tế bào.',
  'gan-net': 'Đã thấy mẫu vật nhưng còn hơi mờ: vặn ốc nhỏ thật chậm để lấy nét.',
  mo: 'Ảnh rất mờ: vật kính còn cách xa vị trí lấy nét.',
  'khong-thay': 'Chưa thấy mẫu vật.',
};

/** @type {Record<ReturnType<typeof lightState>, string>} */
export const LIGHT_TEXT = {
  toi: 'Thị trường quá tối: mở rộng màn chắn để tăng ánh sáng.',
  vua: 'Ánh sáng vừa đủ.',
  choi: 'Ánh sáng quá chói, ảnh bị nhạt: thu hẹp màn chắn.',
};

/**
 * The focus message, telling which way to move the objective when the sample
 * is far out of focus: down when the gap is above the focusing distance, up
 * when the objective is already too close to the slide.
 * @param {Objective} objective
 * @param {number} gap
 */
export function focusMessage(objective, gap) {
  const state = focusState(objective, gap);
  if (state !== 'mo' && state !== 'khong-thay') return FOCUS_TEXT[state];
  const head = state === 'mo' ? 'Ảnh rất mờ' : 'Chưa thấy mẫu vật';
  return gap > objective.focus
    ? `${head}: vật kính còn xa tiêu bản. Nhìn từ bên ngoài, hạ dần vật kính xuống.`
    : `${head}: vật kính đã quá gần tiêu bản. Nhìn vào thị kính, nâng dần vật kính lên.`;
}

/**
 * Gap in millimetres for display.
 * @param {number} gap
 */
export function gapMm(gap) {
  return gap / 100;
}
