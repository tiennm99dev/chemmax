/**
 * Pure logic for sorting cards into bins: which placements are right, what is
 * left to do and the feedback line a learner hears after each move.
 */

/**
 * @typedef {{ id: string, text: string, bin: string, why: string }} SortCard
 * @typedef {{ id: string, label: string }} SortBin
 * @typedef {Record<string, string>} Placements card id -> bin id
 */

/**
 * @param {SortCard[]} cards
 * @param {Placements} placed
 */
export function tally(cards, placed) {
  let right = 0;
  let wrong = 0;
  for (const card of cards) {
    const bin = placed[card.id];
    if (bin === undefined) continue;
    if (bin === card.bin) right++;
    else wrong++;
  }
  return { right, wrong, left: cards.length - right - wrong, done: right === cards.length };
}

/**
 * Place one card and return the new placements (the input is not changed).
 * @param {Placements} placed
 * @param {string} cardId
 * @param {string} binId
 * @returns {Placements}
 */
export function place(placed, cardId, binId) {
  return { ...placed, [cardId]: binId };
}

/**
 * Take back every card placed in the wrong bin.
 * @param {SortCard[]} cards
 * @param {Placements} placed
 * @returns {Placements}
 */
export function clearWrong(cards, placed) {
  /** @type {Placements} */
  const next = {};
  for (const card of cards) {
    if (placed[card.id] === card.bin) next[card.id] = card.bin;
  }
  return next;
}

/**
 * Feedback for one move.
 * @param {SortCard} card
 * @param {string} binId
 * @param {SortBin[]} bins
 */
export function moveFeedback(card, binId, bins) {
  const name = (/** @type {string} */ id) => bins.find((b) => b.id === id)?.label ?? id;
  return card.bin === binId
    ? `Đúng: "${card.text}" thuộc ${name(binId)}. ${card.why}`
    : `Chưa đúng: "${card.text}" không thuộc ${name(binId)}. Gợi ý: ${card.why}`;
}
