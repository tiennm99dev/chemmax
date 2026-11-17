/**
 * The flame test of the alkali metal ions: which colour a salt gives a flame,
 * and what an observer sees through blue cobalt glass. The colour comes from
 * the metal ion, never from the anion, so NaCl, Na2CO3 and NaHCO3 all colour
 * the flame yellow. Sodium's yellow is so bright that it hides the pale
 * violet of potassium; cobalt glass absorbs the yellow, so potassium shows
 * through it.
 */

/** @typedef {'Li' | 'Na' | 'K'} Cation */

/**
 * @typedef {object} CationInfo
 * @property {Cation} id
 * @property {string} ion the ion as a formula, "Li^+"
 * @property {string} name the element's name
 * @property {string} colour the book's word for the flame colour
 * @property {string} hex the drawn colour
 */

/** @type {Record<Cation, CationInfo>} */
export const CATIONS = {
  Li: { id: 'Li', ion: 'Li^+', name: 'lithium', colour: 'đỏ tía', hex: '#c81e5a' },
  Na: { id: 'Na', ion: 'Na^+', name: 'sodium', colour: 'vàng', hex: '#facc15' },
  K: { id: 'K', ion: 'K^+', name: 'potassium', colour: 'tím nhạt', hex: '#b48ae6' },
};

/** The colour of the burner's own flame, with no salt in it. */
export const BLANK_FLAME = '#93c5fd';

/**
 * @typedef {object} Sample
 * @property {string} id
 * @property {string} label the formula or mixture as shown, "NaCl + KCl"
 * @property {Cation[]} cations
 */

/** The salts on the bench. @type {Sample[]} */
export const SAMPLES = [
  { id: 'LiCl', label: 'LiCl', cations: ['Li'] },
  { id: 'Li2CO3', label: 'Li2CO3', cations: ['Li'] },
  { id: 'NaCl', label: 'NaCl', cations: ['Na'] },
  { id: 'Na2CO3', label: 'Na2CO3', cations: ['Na'] },
  { id: 'NaHCO3', label: 'NaHCO3', cations: ['Na'] },
  { id: 'KCl', label: 'KCl', cations: ['K'] },
  { id: 'KNO3', label: 'KNO3', cations: ['K'] },
  { id: 'NaCl-KCl', label: 'NaCl + KCl', cations: ['Na', 'K'] },
];

/** @param {string} id */
export function sample(id) {
  const s = SAMPLES.find((x) => x.id === id);
  if (!s) throw new Error(`Không có mẫu ${id}`);
  return s;
}

/**
 * @typedef {object} Flame
 * @property {string} hex the colour drawn
 * @property {Cation | null} shown the ion whose colour the observer sees
 * @property {string} text what the observer sees, in words
 */

/**
 * What the flame looks like with a sample on the wire (null: a clean wire).
 * @param {Sample | null} s
 * @param {boolean} cobalt seen through blue cobalt glass
 * @returns {Flame}
 */
export function flameOf(s, cobalt) {
  if (!s) return { hex: BLANK_FLAME, shown: null, text: 'ngọn lửa đèn khí gần như không màu' };
  const seen = cobalt ? s.cations.filter((c) => c !== 'Na') : s.cations;
  if (seen.length === 0)
    return {
      hex: BLANK_FLAME,
      shown: null,
      text: 'gần như không thấy màu: kính cobalt đã hấp thụ ánh vàng của sodium',
    };
  // Without the glass, sodium's yellow outshines every other colour.
  const shown = seen.includes('Na') ? 'Na' : seen[0];
  return { hex: CATIONS[shown].hex, shown, text: `ngọn lửa màu ${CATIONS[shown].colour}` };
}

/** The answers offered for an unknown sample. */
export const GUESSES = /** @type {const} */ ([
  { id: 'Li', ions: ['Li'] },
  { id: 'Na', ions: ['Na'] },
  { id: 'K', ions: ['K'] },
  { id: 'Na-K', ions: ['Na', 'K'] },
]);

/** The unknown samples, in the order the game hands them out. */
export const UNKNOWNS = ['KNO3', 'Na2CO3', 'LiCl', 'NaCl-KCl', 'KCl', 'NaHCO3'];

/**
 * Judges a guess of the ions in an unknown sample.
 * @param {Sample} s
 * @param {string} guessId
 * @param {boolean} usedCobalt whether the learner looked through the glass
 */
export function judge(s, guessId, usedCobalt) {
  const guess = GUESSES.find((g) => g.id === guessId);
  if (!guess) throw new Error(`Không có lựa chọn ${guessId}`);
  const ok =
    guess.ions.length === s.cations.length && guess.ions.every((c) => s.cations.includes(c));
  const why =
    s.cations.length === 2
      ? 'Ngọn lửa vàng cho biết có $\\mathrm{Na^+}$; qua kính cobalt vẫn thấy màu tím nhạt nên còn có $\\mathrm{K^+}$.'
      : `Màu ${CATIONS[s.cations[0]].colour} là màu đặc trưng của ion $\\mathrm{${texIon(s.cations[0])}}$.`;
  if (ok) return { ok, final: true, text: `Đúng! Mẫu là ${sampleTex(s)}. ${why}` };
  if (s.cations.length === 2 && !usedCobalt)
    return {
      ok,
      final: false,
      text: 'Chưa đúng. Màu vàng của sodium có thể che khuất màu khác: hãy nhìn ngọn lửa qua kính cobalt rồi chọn lại.',
    };
  return { ok, final: true, text: `Chưa đúng. Mẫu là ${sampleTex(s)}. ${why}` };
}

/** "Na^{+}" for TeX. @param {Cation} c */
export const texIon = (c) => `${c}^{+}`;

/** A sample's formula as inline TeX, "$\\mathrm{Na_2CO_3}$". @param {Sample} s */
export const sampleTex = (s) => `$\\mathrm{${s.label.replace(/(\d+)/g, '_$1')}}$`;
