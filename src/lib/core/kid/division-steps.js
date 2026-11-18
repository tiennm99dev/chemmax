// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Dividing a natural number by a divisor, from the left, the way the grade 3
 * and 4 books set it out: each round asks for a quotient digit and what is
 * left, and the child brings the next digit down. The sheet
 * (`division-sheet.svelte`) is built from the steps done so far, set out in
 * columns as the book prints it, as wide as the dividend;
 * `division-worker.svelte` is the board a child works it on. Pure and
 * DOM-free.
 */
import { numberDivide } from '#lib/algebra-engine/long-division.js';
import { checkText, divText } from './column-steps.js';
import { PLACE_NAMES } from './whole-numbers.js';

/** @typedef {{ n: number, d: number }} Task */

/**
 * One step of the division.
 * @typedef {object} Step
 * @property {'digit' | 'rest' | 'down'} kind
 * @property {number} round which round of the division it belongs to
 * @property {number} partial the number being divided in that round
 * @property {number} digit the quotient digit of that round
 * @property {number} product the digit times the divisor
 * @property {number} rest what is left after that round
 * @property {number} end the column of the dividend the round stops at
 * @property {number} answer the number to pick; for `down`, the digit brought down
 */

/**
 * One line of the sheet. `cells` holds the dividend's columns from the left,
 * `line` rules a line under it, `active` tints those columns and `fly` is the
 * column whose digit has just come down from the dividend.
 * @typedef {{ cells: string[], line?: boolean, active?: number[], fly?: number }} Row
 */

/**
 * The place name of a dividend column, counted from the left.
 * @param {Task} task
 * @param {number} col
 */
export const placeOf = ({ n }, col) => PLACE_NAMES[String(n).length - 1 - col];

/**
 * The steps of a task, in order.
 * @param {Task} task
 * @returns {Step[]}
 */
export function stepsOf({ n, d }) {
  const digits = String(n).split('').map(Number);
  const { rounds } = numberDivide(n, d);
  return rounds.flatMap((r, round) => {
    const base = { round, ...r };
    /** @type {Step[]} */
    const steps = [
      { ...base, kind: 'digit', answer: r.digit },
      { ...base, kind: 'rest', answer: r.rest },
    ];
    if (round < rounds.length - 1) {
      steps.push({ ...base, kind: 'down', answer: digits[r.end + 1] });
    }
    return steps;
  });
}

/**
 * A number written so that its last digit sits in column `end`.
 * @param {number} value
 * @param {number} end
 * @param {number} width
 */
function cellsEnding(value, end, width) {
  const cells = Array.from({ length: width }, () => '');
  String(value)
    .split('')
    .reverse()
    .forEach((digit, i) => {
      cells[end - i] = digit;
    });
  return cells;
}

/**
 * The columns a number being divided takes up.
 * @param {number} partial
 * @param {number} end
 */
function columnsOf(partial, end) {
  const length = String(partial).length;
  return Array.from({ length }, (_, i) => end - length + 1 + i);
}

/**
 * The lines of the sheet after `stage` steps.
 * @param {Task} task
 * @param {number} stage
 * @returns {Row[]}
 */
export function sheetRows(task, stage) {
  const width = String(task.n).length;
  const steps = stepsOf(task);
  /** @type {Row[]} */
  const rows = [{ cells: String(task.n).split('') }];
  /** Which line holds the number the current round divides. */
  let partialRow = 0;
  steps.slice(0, stage).forEach((step) => {
    if (step.kind === 'digit') {
      rows.push({ cells: cellsEnding(step.product, step.end, width), line: true });
    } else if (step.kind === 'rest') {
      rows.push({ cells: cellsEnding(step.rest, step.end, width) });
    } else {
      const last = rows[rows.length - 1];
      last.cells[step.end + 1] = String(step.answer);
      last.fly = step.end + 1;
      partialRow = rows.length - 1;
    }
  });
  const next = steps[stage];
  if (next?.kind === 'down') {
    rows[0] = { ...rows[0], active: [next.end + 1] };
  } else if (next) {
    const row = rows[partialRow];
    rows[partialRow] = { ...row, active: columnsOf(next.partial, next.end) };
  }
  return rows;
}

/**
 * The quotient digits written after `stage` steps.
 * @param {Task} task
 * @param {number} stage
 */
export function quotientText(task, stage) {
  return stepsOf(task)
    .slice(0, stage)
    .filter((s) => s.kind === 'digit')
    .map((s) => s.digit)
    .join('');
}

/**
 * What a finished step says.
 * @param {Task} task
 * @param {Step} step
 */
function sayStep(task, step) {
  const { d } = task;
  const { kind, partial, digit, product, rest, answer } = step;
  if (kind === 'digit') {
    const hold = digit === 0 ? ` Chữ số 0 giữ chỗ hàng ${placeOf(task, step.end)}.` : '';
    return `${partial} chia ${d} được ${digit}, viết ${digit}.${hold}`;
  }
  if (kind === 'rest') {
    return `${digit} nhân ${d} bằng ${product}; ${partial} trừ ${product} bằng ${rest}.`;
  }
  return rest > 0 ? `Hạ ${answer}, được ${rest * 10 + answer}.` : `Hạ ${answer}.`;
}

/**
 * What a step asks for.
 * @param {Task} task
 * @param {Step} step
 */
function askStep({ d }, step) {
  const { kind, partial, digit, product, answer } = step;
  if (kind === 'digit') return `${partial} chia ${d} được mấy?`;
  if (kind === 'rest') {
    return `${digit} nhân ${d} bằng ${product}. ${partial} trừ ${product} bằng mấy?`;
  }
  return `Em hạ ${answer} xuống.`;
}

/**
 * The sentence for a stage: the step just finished, then the next question.
 * @param {Task} task
 * @param {number} stage
 */
export function stageMessage(task, stage) {
  const steps = stepsOf(task);
  const { n, d } = task;
  if (stage >= steps.length) {
    return `${sayStep(task, steps[steps.length - 1])} Vậy ${divText(n, d)}. ${checkText(n, d)}`;
  }
  if (stage === 0) {
    const first = steps[0];
    const start =
      first.end === 0
        ? `Em chia từ hàng ${placeOf(task, 0)}.`
        : `${String(n).slice(0, first.end)} bé hơn ${d}, nên em lấy ${first.partial} để chia.`;
    return `${start} ${askStep(task, first)}`;
  }
  return `${sayStep(task, steps[stage - 1])} ${askStep(task, steps[stage])}`;
}

/**
 * What a wrong number gets: a nudge on the first try, the working after.
 * @param {Task} task
 * @param {number} stage
 * @param {number} picked
 * @param {number} tries wrong tries on this step, this one included
 */
export function wrongMessage(task, stage, picked, tries) {
  const step = stepsOf(task)[stage];
  const { d } = task;
  if (tries >= 2) return `Em xem nhé: ${sayStep(task, step)}`;
  if (step.kind === 'rest') return `Chưa đúng. Em trừ lại: ${step.partial} − ${step.product}.`;
  return picked * d > step.partial
    ? `${picked} nhân ${d} bằng ${picked * d}, lớn hơn ${step.partial}. Em thử số bé hơn.`
    : `${picked} nhân ${d} bằng ${picked * d}, vẫn chia được nữa. Em thử số lớn hơn.`;
}

/**
 * What each finished round means, one place at a time.
 * @param {Task} task
 * @param {number} stage
 * @returns {string[]}
 */
export function roundLines(task, stage) {
  return stepsOf(task)
    .slice(0, stage)
    .filter((s) => s.kind === 'rest')
    .map(({ partial, digit, rest, end }) => {
      const place = placeOf(task, end);
      const left = rest > 0 ? `, còn ${rest} ${place}` : '';
      return `${partial} ${place} : ${task.d} = ${digit} ${place}${left}`;
    });
}
