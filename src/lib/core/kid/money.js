// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * Vietnamese banknotes as grades 2 and 3 meet them: grade 2 uses the notes
 * from 100 to 1000 đồng, grade 3 those from 1 000 to 100 000 đồng. How a note
 * is written and read, adding notes up, paying with the fewest notes, saying
 * notes in a sentence and the note a buyer did not need. Pure and DOM-free.
 */
import { fmt } from '#lib/core/number-format.js';
import { breakdown } from '#lib/units-engine/money.js';

/** Every note `banknote.svelte` draws, smallest first. */
export const NOTES = /** @type {const} */ ([
  100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000,
]);

/** @typedef {(typeof NOTES)[number]} Note */

/** The notes of grade 2's "Giới thiệu tiền Việt Nam". */
export const GRADE2_NOTES = /** @type {const} */ ([100, 200, 500, 1000]);

/** The notes of grade 3's "Tiền Việt Nam". */
export const GRADE3_NOTES = /** @type {const} */ ([1000, 2000, 5000, 10000, 20000, 50000, 100000]);

/** How each note is read aloud. */
export const NOTE_WORDS = /** @type {const} */ ({
  100: 'một trăm đồng',
  200: 'hai trăm đồng',
  500: 'năm trăm đồng',
  1000: 'một nghìn đồng',
  2000: 'hai nghìn đồng',
  5000: 'năm nghìn đồng',
  10000: 'mười nghìn đồng',
  20000: 'hai mươi nghìn đồng',
  50000: 'năm mươi nghìn đồng',
  100000: 'một trăm nghìn đồng',
});

/**
 * Whether a number is one of `notes`.
 * @param {number} value
 * @param {readonly number[]} [notes]
 * @returns {value is Note}
 */
export function isNote(value, notes = NOTES) {
  return notes.includes(value);
}

/**
 * An amount of money as the book writes it: '25 000 đồng'. Grade 2 writes its
 * numbers to 1000 without a group space (`grouped` false): '1000 đồng'.
 * @param {number} amount
 * @param {{ grouped?: boolean }} [options]
 */
export function moneyText(amount, { grouped = true } = {}) {
  return `${grouped ? fmt(amount) : amount} đồng`;
}

/**
 * The money of some notes added up.
 * @param {readonly number[]} notes
 */
export function sumNotes(notes) {
  return notes.reduce((s, n) => s + n, 0);
}

/**
 * The fewest of `notes` that make `amount` exactly, largest first, or null
 * when they cannot.
 * @param {number} amount
 * @param {readonly Note[]} notes the notes the lesson pays with
 * @returns {Note[] | null}
 */
export function fewestNotes(amount, notes) {
  const { notes: used, rest } = breakdown(
    amount,
    [...notes].sort((a, b) => b - a),
  );
  if (rest > 0) return null;
  return /** @type {Note[]} */ (
    used.flatMap(({ value, count }) => Array.from({ length: count }, () => value))
  );
}

/**
 * Notes said in a sentence, largest first: '1 tờ 20 000 đồng và 2 tờ 5 000
 * đồng'.
 * @param {readonly number[]} notes
 * @param {{ grouped?: boolean }} [options] as in `moneyText`
 */
export function notesText(notes, options) {
  return [...new Set(notes)]
    .sort((a, b) => b - a)
    .map((v) => `${notes.filter((n) => n === v).length} tờ ${moneyText(v, options)}`)
    .join(' và ');
}

/**
 * A note among `given` the buyer did not need: the price is still paid
 * without it. Null when every note is needed.
 * @param {readonly number[]} given
 * @param {number} price
 */
export function spareNote(given, price) {
  const total = sumNotes(given);
  const spare = [...given].sort((a, b) => b - a).find((n) => total - n >= price);
  return spare ?? null;
}
