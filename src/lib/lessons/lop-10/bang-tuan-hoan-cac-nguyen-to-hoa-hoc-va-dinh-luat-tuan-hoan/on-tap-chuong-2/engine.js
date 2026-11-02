/**
 * The periodic-table riddle: clues about position, structure and properties
 * that point to exactly one element among Z = 1 to 36. Each clue is data
 * with a predicate, so the tests can prove every riddle has one answer.
 */
import { ELEMENTS, element, groupLabel, metalKind, outerElectrons } from '#lib/domain/elements.js';
import { HYDROXIDE_NATURE, compoundsOf, oxideFormula } from '#lib/domain/compounds.js';
import { MAIN_GROUP } from '#lib/domain/main-group.js';

/** @typedef {import('#lib/domain/elements.js').Element} Element */

/**
 * @typedef {{ kind: 'period', value: number }
 *   | { kind: 'group', value: string }
 *   | { kind: 'block', value: 's' | 'p' | 'd' }
 *   | { kind: 'type', value: 'kim-loai' | 'phi-kim' | 'khi-hiem' }
 *   | { kind: 'outer', value: number }
 *   | { kind: 'valence-d', value: number }
 *   | { kind: 'oxide', value: number }
 *   | { kind: 'hydroxide', value: import('#lib/domain/compounds.js').Nature }
 *   | { kind: 'top-chi' }
 *   | { kind: 'largest-in-period' }} Clue
 */

/** Riddles are over the elements of periods 1-4. */
export const LAST_Z = 36;

/**
 * Character of the highest hydroxide of the period 4 p elements, which the
 * chapter's compound table (Li–Ca) leaves out.
 * @type {Record<number, import('#lib/domain/compounds.js').Nature>}
 */
const PERIOD4_P_HYDROXIDES = {
  31: 'luong-tinh',
  32: 'luong-tinh',
  33: 'acid',
  34: 'acid',
  35: 'acid',
};

/**
 * Highest valence with oxygen of a group A element (the group number), or
 * null for the elements with no highest oxide in the book's sense: d and f
 * elements, oxygen, fluorine and the noble gases.
 * @param {Element} el
 */
function oxideValence(el) {
  if (el.block !== 's' && el.block !== 'p') return null;
  if (el.z === 8 || el.z === 9 || metalKind(el) === 'khi-hiem') return null;
  const column = /** @type {number} */ (el.group);
  return column <= 2 ? column : column - 10;
}

/**
 * Character of the highest hydroxide of a group A element, or null when it
 * has none (hydrogen, oxygen, fluorine, the noble gases) or is not in group A.
 * @param {Element} el
 */
function hydroxideNature(el) {
  if (el.z === 1 || oxideValence(el) === null) return null;
  return compoundsOf(el.z)?.hydroxideNature ?? PERIOD4_P_HYDROXIDES[el.z] ?? null;
}

const TYPE_TEXT = {
  'kim-loai': 'Là kim loại.',
  'phi-kim': 'Là phi kim.',
  'khi-hiem': 'Là khí hiếm.',
};

/** @param {Clue} clue */
export function clueText(clue) {
  switch (clue.kind) {
    case 'period':
      return `Có ${clue.value} lớp electron.`;
    case 'group':
      return `Nằm ở nhóm ${clue.value}.`;
    case 'block':
      return `Là nguyên tố ${clue.value}.`;
    case 'type':
      return TYPE_TEXT[clue.value];
    case 'outer':
      return `Nguyên tử có ${clue.value} electron lớp ngoài cùng.`;
    case 'valence-d':
      return `Nguyên tử có ${clue.value} electron hoá trị (ở phân lớp (n − 1)d và ns).`;
    case 'oxide':
      return `Là nguyên tố nhóm A, oxide cao nhất có dạng ${oxideFormula('R', clue.value).replace(/(\d)/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)])}.`;
    case 'hydroxide':
      return `Là nguyên tố nhóm A, hydroxide cao nhất là ${HYDROXIDE_NATURE[clue.value]}.`;
    case 'top-chi':
      return 'Có độ âm điện lớn nhất trong bảng tuần hoàn.';
    case 'largest-in-period':
      return 'Có bán kính nguyên tử lớn nhất trong chu kì của nó.';
  }
}

/**
 * @param {Clue} clue
 * @param {Element} el
 */
export function fits(clue, el) {
  switch (clue.kind) {
    case 'period':
      return el.period === clue.value;
    case 'group':
      return el.group !== null && groupLabel(el) === clue.value;
    case 'block':
      return el.block === clue.value;
    case 'type':
      return metalKind(el) === clue.value;
    case 'outer':
      return outerElectrons(el.z) === clue.value;
    case 'valence-d':
      return el.block === 'd' && el.group === clue.value;
    case 'oxide':
      return oxideValence(el) === clue.value;
    case 'hydroxide':
      return hydroxideNature(el) === clue.value;
    case 'top-chi': {
      const top = Math.max(...ELEMENTS.map((e) => e.electronegativity ?? 0));
      return el.electronegativity === top;
    }
    case 'largest-in-period': {
      const row = MAIN_GROUP.filter((a) => a.period === el.period);
      const big = row.reduce((a, b) => (b.radius > a.radius ? b : a), row[0]);
      return big?.z === el.z;
    }
  }
}

/** @typedef {{ answer: number, clues: Clue[] }} Riddle */

/** @type {Riddle[]} */
export const RIDDLES = [
  {
    answer: 13,
    clues: [
      { kind: 'period', value: 3 },
      { kind: 'hydroxide', value: 'luong-tinh' },
    ],
  },
  { answer: 9, clues: [{ kind: 'type', value: 'phi-kim' }, { kind: 'top-chi' }] },
  {
    answer: 15,
    clues: [
      { kind: 'oxide', value: 5 },
      { kind: 'period', value: 3 },
    ],
  },
  {
    answer: 20,
    clues: [
      { kind: 'period', value: 4 },
      { kind: 'outer', value: 2 },
      { kind: 'block', value: 's' },
    ],
  },
  {
    answer: 26,
    clues: [
      { kind: 'block', value: 'd' },
      { kind: 'valence-d', value: 8 },
    ],
  },
  {
    answer: 10,
    clues: [
      { kind: 'type', value: 'khi-hiem' },
      { kind: 'period', value: 2 },
    ],
  },
  {
    answer: 6,
    clues: [
      { kind: 'oxide', value: 4 },
      { kind: 'period', value: 2 },
    ],
  },
  {
    answer: 35,
    clues: [
      { kind: 'type', value: 'phi-kim' },
      { kind: 'group', value: 'VIIA' },
      { kind: 'period', value: 4 },
    ],
  },
  {
    answer: 11,
    clues: [
      { kind: 'type', value: 'kim-loai' },
      { kind: 'largest-in-period' },
      { kind: 'period', value: 3 },
    ],
  },
  {
    answer: 29,
    clues: [
      { kind: 'block', value: 'd' },
      { kind: 'group', value: 'IB' },
    ],
  },
  {
    answer: 16,
    clues: [
      { kind: 'hydroxide', value: 'acid' },
      { kind: 'outer', value: 6 },
      { kind: 'period', value: 3 },
    ],
  },
  {
    answer: 12,
    clues: [
      { kind: 'type', value: 'kim-loai' },
      { kind: 'oxide', value: 2 },
      { kind: 'period', value: 3 },
    ],
  },
];

/**
 * Elements of periods 1-4 that satisfy every clue shown so far.
 * @param {Clue[]} clues
 */
export function candidates(clues) {
  return ELEMENTS.filter((e) => e.z <= LAST_Z && clues.every((c) => fits(c, e))).map((e) => e.z);
}

/**
 * Feedback for a guess after `shown` clues.
 * @param {Riddle} riddle
 * @param {number} shown how many clues are visible
 * @param {number} z the guess
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeGuess(riddle, shown, z) {
  const el = element(z);
  if (!el) return { ok: false, text: 'Hãy chọn một ô nguyên tố.' };
  const target = /** @type {Element} */ (element(riddle.answer));
  if (z === riddle.answer) {
    return {
      ok: true,
      text: `Chính xác: ${target.symbol} (${target.name}), chu kì ${target.period}, nhóm ${groupLabel(target)}.`,
    };
  }
  const broken = riddle.clues.slice(0, shown).filter((c) => !fits(c, el));
  if (broken.length === 0) {
    return {
      ok: false,
      text: `${el.symbol} khớp với các gợi ý đã mở nhưng chưa phải đáp án. Mở thêm gợi ý để thu hẹp.`,
    };
  }
  return {
    ok: false,
    text: `${el.symbol} chưa khớp gợi ý: "${clueText(broken[0])}" Thử lại.`,
  };
}

/**
 * Points for solving with `shown` clues open: fewer clues, more points.
 * @param {Riddle} riddle
 * @param {number} shown
 */
export function points(riddle, shown) {
  return Math.max(1, riddle.clues.length - shown + 1);
}
