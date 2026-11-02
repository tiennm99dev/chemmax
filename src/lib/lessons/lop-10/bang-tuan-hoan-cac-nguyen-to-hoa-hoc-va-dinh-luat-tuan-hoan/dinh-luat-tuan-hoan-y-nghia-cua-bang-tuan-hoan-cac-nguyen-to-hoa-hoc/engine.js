/**
 * The "position → structure → properties" card game: a card names only a
 * period and an A group; the learner predicts the outer configuration, the
 * kind of element, the highest oxide and the character of its hydroxide,
 * then turns the card to check.
 */
import { rng, shuffle } from '#lib/core/drill.js';
import { sup } from '#lib/core/number-format.js';
import {
  electronConfiguration,
  element,
  formatConfiguration,
  metalKind,
} from '#lib/domain/elements.js';
import {
  COMPOUNDS,
  HYDROXIDE_NATURE,
  formulaTex,
  oxideFormula,
  roman,
} from '#lib/domain/compounds.js';

/**
 * @typedef {object} Question
 * @property {string} id
 * @property {string} label
 * @property {string[]} options
 * @property {number} answer index into options
 */

/**
 * @typedef {object} Card
 * @property {number} z
 * @property {number} period
 * @property {number} group A group number
 * @property {string} position "Chu kì 3, nhóm VIA"
 * @property {Question[]} questions
 * @property {string} reveal what the turned card says
 */

/**
 * Outer-shell configuration of a main-group atom, plain text: "3s²3p⁴".
 * @param {number} n period
 * @param {number} group 1-7
 */
export function outerText(n, group) {
  if (group <= 2) return `${n}s${sup(group)}`;
  return `${n}s²${n}p${sup(group - 2)}`;
}

/**
 * @param {string} id
 * @param {string} label
 * @param {string} right
 * @param {string[]} wrong
 * @param {() => number} rand
 * @returns {Question}
 */
function question(id, label, right, wrong, rand) {
  const options = shuffle(rand, [right, ...new Set(wrong.filter((w) => w !== right))].slice(0, 4));
  return { id, label, options, answer: options.indexOf(right) };
}

/**
 * @param {number} z an element with highest compounds in `COMPOUNDS`
 * @returns {Card}
 */
export function card(z) {
  const c = COMPOUNDS.find((x) => x.z === z);
  const el = element(z);
  if (!c || !el) throw new Error(`Không có thẻ cho Z = ${z}`);
  const rand = rng(z * 7 + 1);
  const n = el.period;
  const g = c.valence;
  const kind = metalKind(el) === 'kim-loai' ? 'Kim loại' : 'Phi kim';

  const config = question(
    'config',
    'Cấu hình electron lớp ngoài cùng',
    outerText(n, g),
    [
      outerText(n + 1, g),
      outerText(n, g === 7 ? 6 : g + 1),
      outerText(n > 2 || (n === 2 && g <= 2) ? n - 1 : n + 2, g),
    ],
    rand,
  );
  const type = question('kind', 'Loại nguyên tố', kind, ['Kim loại', 'Phi kim', 'Khí hiếm'], rand);
  const others = [g + 1, g - 1, g + 2, g - 2].filter((v) => v >= 1 && v <= 7).slice(0, 3);
  const oxide = question(
    'oxide',
    'Công thức oxide cao nhất (R là nguyên tố)',
    oxideFormula('R', g),
    others.map((v) => oxideFormula('R', v)),
    rand,
  );
  const nature = question(
    'nature',
    'Hydroxide cao nhất có tính',
    HYDROXIDE_NATURE[c.hydroxideNature],
    [HYDROXIDE_NATURE.base, HYDROXIDE_NATURE['luong-tinh'], HYDROXIDE_NATURE.acid],
    rand,
  );
  const full = formatConfiguration(electronConfiguration(z));
  return {
    z,
    period: n,
    group: g,
    position: `Chu kì ${n}, nhóm ${roman(g)}A`,
    questions: [config, type, oxide, nature],
    reveal: `${el.symbol} (${el.name}, $Z = ${z}$): ${full}. ${kind}; oxide cao nhất ${formulaTex(c.oxide)}; hydroxide ${formulaTex(c.hydroxide)} là ${c.strength}.`,
  };
}

/** Every card, in a fixed shuffled order. */
export const DECK = shuffle(
  rng(8),
  COMPOUNDS.map((c) => c.z),
);

/**
 * How many of the four predictions are right.
 * @param {Card} c
 * @param {Record<string, number>} picks question id → option index
 */
export function score(c, picks) {
  return c.questions.filter((q) => picks[q.id] === q.answer).length;
}
