// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * The book's three words for what can happen ("chắc chắn", "có thể", "không
 * thể"), shared by the chance questions of grades 2 and 3. The word for an
 * event comes from going through every way things can turn out. Pure and
 * DOM-free.
 */

/** The three words, in the order the options show them. */
export const CHANCES = /** @type {const} */ (['Chắc chắn', 'Có thể', 'Không thể']);

/** @typedef {(typeof CHANCES)[number]} Chance */

/**
 * The word for an event, given every way things can turn out.
 * @template T
 * @param {readonly T[]} outcomes
 * @param {(outcome: T) => boolean} holds
 * @returns {Chance}
 */
export function wordOf(outcomes, holds) {
  const hits = outcomes.filter(holds).length;
  if (hits === 0) return 'Không thể';
  return hits === outcomes.length ? 'Chắc chắn' : 'Có thể';
}
