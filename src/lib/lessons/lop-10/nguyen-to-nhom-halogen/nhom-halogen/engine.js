/**
 * The halogens as the lesson's two widgets use them: which state each element
 * is in at a temperature, and what happens when a halogen water meets a halide
 * salt solution, which is decided by the order of oxidising strength.
 */
import { intText } from '#lib/core/number-format.js';
import { prettyFormula } from '#lib/domain/formula.js';

/**
 * Melting and boiling points in °C, rounded to whole degrees.
 * @typedef {{ formula: string, name: string, melt: number, boil: number, color: string, colorName: string }} Halogen
 */

/** @type {Halogen[]} */
export const HALOGENS = [
  {
    formula: 'F2',
    name: 'Fluorine',
    melt: -220,
    boil: -188,
    color: '#bef264',
    colorName: 'lục nhạt',
  },
  {
    formula: 'Cl2',
    name: 'Chlorine',
    melt: -101,
    boil: -34,
    color: '#a3a635',
    colorName: 'vàng lục',
  },
  { formula: 'Br2', name: 'Bromine', melt: -7, boil: 59, color: '#9a3412', colorName: 'nâu đỏ' },
  { formula: 'I2', name: 'Iodine', melt: 114, boil: 184, color: '#5b21b6', colorName: 'tím đen' },
];

/** @typedef {'rắn' | 'lỏng' | 'khí'} MatterState */

/**
 * @param {Halogen} halogen
 * @param {number} t temperature in °C
 * @returns {MatterState}
 */
export function stateAt(halogen, t) {
  if (t < halogen.melt) return 'rắn';
  return t < halogen.boil ? 'lỏng' : 'khí';
}

/**
 * Says which halogens are in which state at a temperature.
 * @param {number} t
 */
export function statesLine(t) {
  /** @type {MatterState[]} */
  const order = ['khí', 'lỏng', 'rắn'];
  const parts = order
    .map((state) => ({
      state,
      names: HALOGENS.filter((h) => stateAt(h, t) === state).map((h) => prettyFormula(h.formula)),
    }))
    .filter((p) => p.names.length > 0)
    .map((p) => `${p.names.join(', ')} ở thể ${p.state}`);
  return `Ở ${intText(t)} °C: ${parts.join('; ')}.`;
}

const CLEAR = '#e0f2fe';
const STARCH_BLUE = '#3730a3';

/**
 * The three halogen waters, strongest oxidant first. Fluorine is left out: it
 * reacts with water, so there is no fluorine water.
 * @typedef {{ formula: string, name: string, salt: string, atom: string, water: string, waterName: string }} HalogenWater
 */

/** @type {HalogenWater[]} */
export const WATERS = [
  {
    formula: 'Cl2',
    name: 'chlorine',
    salt: 'NaCl',
    atom: 'Cl',
    water: '#d9f99d',
    waterName: 'vàng lục nhạt',
  },
  {
    formula: 'Br2',
    name: 'bromine',
    salt: 'NaBr',
    atom: 'Br',
    water: '#fbbf24',
    waterName: 'vàng cam',
  },
  {
    formula: 'I2',
    name: 'iodine',
    salt: 'NaI',
    atom: 'I',
    water: '#a16207',
    waterName: 'vàng nâu',
  },
];

export const SALT_COLOR = CLEAR;

/** @param {string} text */
const cap = (text) => text[0].toUpperCase() + text.slice(1);

/**
 * @typedef {object} Mixture
 * @property {boolean} reacts
 * @property {string} [equation] book-style equation when it reacts
 * @property {string} color liquid colour after mixing
 * @property {string} colorName
 * @property {boolean} hasIodine whether free I2 is in the tube afterwards
 * @property {string} why the reason, for the feedback line
 */

/**
 * Mixes a halogen water with a salt solution. A halogen only pushes out a
 * weaker one, so the stronger oxidant of the pair must be the free element.
 * @param {string} water formula, a key of `WATERS`
 * @param {string} salt 'NaCl', 'NaBr' or 'NaI'
 * @returns {Mixture}
 */
export function mix(water, salt) {
  const w = WATERS.findIndex((x) => x.formula === water);
  const s = WATERS.findIndex((x) => x.salt === salt);
  if (w < 0 || s < 0) throw new Error(`Không có cặp ${water}, ${salt}`);
  const free = WATERS[w];
  const bound = WATERS[s];
  if (w < s) {
    return {
      reacts: true,
      equation: `${free.formula} + 2${bound.salt} → 2${free.salt} + ${bound.formula}`,
      color: bound.water,
      colorName: bound.waterName,
      hasIodine: bound.atom === 'I',
      why: `${cap(free.name)} có tính oxi hoá mạnh hơn ${bound.name} nên đẩy được ${bound.name} ra khỏi dung dịch muối. Màu ${free.waterName} của nước ${free.name} đổi thành màu ${bound.waterName} của ${bound.name} vừa sinh ra.`,
    };
  }
  const reason =
    w === s
      ? 'Halogen và muối có cùng một nguyên tố nên không có gì để đẩy.'
      : `${cap(free.name)} có tính oxi hoá yếu hơn ${bound.name} nên không đẩy được ${bound.name} ra khỏi muối.`;
  return {
    reacts: false,
    color: free.water,
    colorName: free.waterName,
    hasIodine: free.atom === 'I',
    why: `${reason} Màu ${free.waterName} trong ống vẫn chỉ là màu của nước ${free.name} đã nhỏ vào.`,
  };
}

/**
 * The tube's colour once starch solution is added: free iodine turns it
 * blue-violet.
 * @param {Mixture} mixture
 */
export function starchColor(mixture) {
  return mixture.hasIodine ? STARCH_BLUE : mixture.color;
}

/**
 * What the starch test shows for this tube.
 * @param {Mixture} mixture
 * @param {string} water formula of the halogen water used
 */
export function starchReply(mixture, water) {
  if (!mixture.hasIodine) {
    return 'Hồ tinh bột không chuyển sang màu xanh tím: trong ống không có iodine.';
  }
  return water === 'I2'
    ? 'Hồ tinh bột chuyển sang màu xanh tím, nhưng iodine này vốn có sẵn trong nước iodine đã nhỏ vào, không phải do phản ứng sinh ra.'
    : 'Hồ tinh bột chuyển sang màu xanh tím: phản ứng đã sinh ra iodine.';
}

/** Every pair the lab can try. */
export const PAIRS = WATERS.flatMap((w) => WATERS.map((s) => `${w.formula}|${s.salt}`));

/**
 * @param {string} water
 * @param {string} salt
 */
export const pairKey = (water, salt) => `${water}|${salt}`;

/**
 * The feedback for a prediction.
 * @param {Mixture} mixture
 * @param {boolean} predicted whether the learner expected a reaction
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function predictionReply(mixture, predicted) {
  const right = predicted === mixture.reacts;
  const verdict = mixture.reacts ? 'Có phản ứng.' : 'Không có phản ứng.';
  return {
    tone: right ? 'ok' : 'warn',
    text: `${right ? 'Dự đoán đúng.' : 'Chưa đúng.'} ${verdict} ${mixture.why}`,
  };
}
