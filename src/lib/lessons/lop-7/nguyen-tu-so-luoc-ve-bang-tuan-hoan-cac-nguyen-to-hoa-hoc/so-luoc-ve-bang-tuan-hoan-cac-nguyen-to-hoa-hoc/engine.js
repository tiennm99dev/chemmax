/**
 * Reading the periodic table at grade 7: the cell (atomic number, symbol,
 * name, atomic mass), the period (number of electron shells), the group in
 * A/B notation (for an A group, the number of outer electrons) and whether
 * the element is a metal, a non-metal or a noble gas. Also the highlights
 * and the find-the-element challenges of the lesson widget.
 */
import { atomShells } from '#lib/domain/atom.js';
import { element, groupLabel, metalKind } from '#lib/domain/elements.js';

/** @typedef {import('#lib/domain/elements.js').Element} Element */

/** Vietnamese names of the three kinds of element in the lesson. */
export const KIND_LABELS = {
  'kim-loai': 'kim loại',
  'phi-kim': 'phi kim',
  'khi-hiem': 'khí hiếm',
};

/**
 * Whether the element sits in an A group (columns 1, 2 and 13-18).
 * @param {Element} el
 */
export function inGroupA(el) {
  return el.group !== null && (el.group <= 2 || el.group >= 13);
}

/**
 * Period, group and kind of an element, with the shell facts the lesson
 * links them to.
 * @param {number} z
 */
export function placeOf(z) {
  const el = /** @type {Element} */ (element(z));
  const shells = atomShells(z);
  const groupA = inGroupA(el);
  return {
    el,
    period: el.period,
    group: groupLabel(el),
    groupA,
    kind: metalKind(el),
    shells,
    outer: shells[shells.length - 1],
  };
}

/**
 * Sentences that explain where the element sits, for the info card.
 * @param {number} z
 * @returns {string[]}
 */
export function explainPlace(z) {
  const p = placeOf(z);
  const lines = [
    `Ô số ${z}: số hiệu nguyên tử Z = ${z}, nên hạt nhân có ${z} proton và nguyên tử có ${z} electron.`,
    `Chu kì ${p.period}: nguyên tử có ${p.period} lớp electron.`,
  ];
  if (z <= 20) lines.push(`Các electron xếp thành ${p.shells.length} lớp: ${p.shells.join(', ')}.`);
  if (z === 2) {
    lines.push(
      'Nhóm VIIIA: helium là khí hiếm; nguyên tử chỉ có 1 lớp với 2 electron, đó đã là lớp bền.',
    );
  } else if (p.groupA) {
    lines.push(`Nhóm ${p.group}: lớp ngoài cùng có ${p.outer} electron.`);
  } else {
    lines.push(`Nhóm ${p.group}: một nhóm B.`);
  }
  return lines;
}

/** @typedef {{ value: string, label: string, test: ((el: Element) => boolean) | null }} Highlight */

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

/** What the learner can pick out on the table: a period, an A group or a kind. */
export const HIGHLIGHTS = /** @type {Highlight[]} */ ([
  { value: 'none', label: 'Không làm nổi bật', test: null },
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => ({
    value: `p${n}`,
    label: `Chu kì ${n}`,
    test: (/** @type {Element} */ el) => el.period === n,
  })),
  ...ROMAN.map((r) => ({
    value: `g${r}A`,
    label: `Nhóm ${r}A`,
    test: (/** @type {Element} */ el) => inGroupA(el) && groupLabel(el) === `${r}A`,
  })),
  {
    value: 'kim-loai',
    label: 'Các kim loại',
    test: (/** @type {Element} */ el) => metalKind(el) === 'kim-loai',
  },
  {
    value: 'phi-kim',
    label: 'Các phi kim',
    test: (/** @type {Element} */ el) => metalKind(el) === 'phi-kim',
  },
  {
    value: 'khi-hiem',
    label: 'Các khí hiếm',
    test: (/** @type {Element} */ el) => metalKind(el) === 'khi-hiem',
  },
]);

/**
 * @typedef {object} Challenge
 * @property {string} task
 * @property {number} answer atomic number of the element to find
 * @property {string} hint
 */

/** Elements to find on the table from their position or their shells. */
export const CHALLENGES = /** @type {Challenge[]} */ ([
  {
    task: 'Tìm nguyên tố ở chu kì 3, nhóm IIA',
    answer: 12,
    hint: 'Đi theo hàng thứ ba từ trái sang, dừng ở cột thứ hai.',
  },
  {
    task: 'Tìm khí hiếm ở chu kì 3',
    answer: 18,
    hint: 'Khí hiếm nằm ở cột cuối cùng bên phải (nhóm VIIIA).',
  },
  {
    task: 'Tìm nguyên tố ở chu kì 2, nhóm VIIA',
    answer: 9,
    hint: 'Nhóm VIIA là cột ngay bên trái cột khí hiếm.',
  },
  {
    task: 'Tìm nguyên tố có 2 lớp electron, lớp ngoài cùng có 4 electron',
    answer: 6,
    hint: 'Số lớp electron là số thứ tự chu kì; số electron lớp ngoài cùng là số thứ tự nhóm A.',
  },
  {
    task: 'Tìm kim loại ở chu kì 4, nhóm IA',
    answer: 19,
    hint: 'Nhóm IA là cột đầu tiên bên trái; chu kì 4 là hàng thứ tư.',
  },
  {
    task: 'Tìm nguyên tố ở ô số 13',
    answer: 13,
    hint: 'Số thứ tự của ô bằng số hiệu nguyên tử, ghi ở góc ô. Ô số 13 nằm ở chu kì 3.',
  },
  {
    task: 'Tìm phi kim có 3 lớp electron, lớp ngoài cùng có 6 electron',
    answer: 16,
    hint: '3 lớp electron: chu kì 3. 6 electron lớp ngoài cùng: nhóm VIA.',
  },
]);

/**
 * Feedback after the learner taps element `z` for a challenge: right, or why
 * the tapped element does not fit (its own period and group).
 * @param {Challenge} challenge
 * @param {number} z
 */
export function checkPick(challenge, z) {
  const p = placeOf(z);
  const where = `chu kì ${p.period}, nhóm ${p.group}, là ${KIND_LABELS[p.kind]}`;
  if (z === challenge.answer) {
    return { ok: true, text: `Đúng: ${p.el.name} (${p.el.symbol}), ô số ${z}, ${where}.` };
  }
  return {
    ok: false,
    text: `Chưa đúng: ${p.el.name} (${p.el.symbol}) ở ${where}. ${challenge.hint}`,
  };
}
