// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * The book's three words for what can happen ("chắc chắn", "có thể", "không
 * thể"), shared by the chance questions of grades 2 and 3. The word for an
 * event comes from going through every way things can turn out. Also the
 * boxes of coloured balls those questions take balls from, drawn by
 * `ball-box.svelte`: a box is a list of ball colours, one entry per ball.
 * Pure and DOM-free.
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

/**
 * The ball colours: the name the book uses, the fill, and a letter on the ball
 * so the colours can be told apart without seeing them.
 */
export const BALL_COLORS = /** @type {const} */ ({
  xanh: { name: 'xanh', fill: '#2563eb', mark: 'X', ink: '#ffffff' },
  do: { name: 'đỏ', fill: '#dc2626', mark: 'Đ', ink: '#ffffff' },
  vang: { name: 'vàng', fill: '#facc15', mark: 'V', ink: '#334155' },
  trang: { name: 'trắng', fill: '#ffffff', mark: 'Tr', ink: '#334155' },
  nau: { name: 'nâu', fill: '#92400e', mark: 'N', ink: '#ffffff' },
  tim: { name: 'tím', fill: '#9333ea', mark: 'Tí', ink: '#ffffff' },
});

/** @typedef {keyof typeof BALL_COLORS} BallColor */

/**
 * How many balls of each colour a box has, in the order the colours first
 * appear in it.
 * @param {readonly BallColor[]} balls
 * @returns {Array<{ color: BallColor, count: number }>}
 */
export function ballCounts(balls) {
  return [...new Set(balls)].map((color) => ({
    color,
    count: balls.filter((b) => b === color).length,
  }));
}

/**
 * A box of balls, colour by colour in the order of `BALL_COLORS`: "Hộp có 2
 * bóng xanh, 1 bóng đỏ".
 * @param {readonly BallColor[]} balls
 */
export function boxText(balls) {
  const order = /** @type {BallColor[]} */ (Object.keys(BALL_COLORS));
  const parts = ballCounts(balls)
    .sort((a, b) => order.indexOf(a.color) - order.indexOf(b.color))
    .map((c) => `${c.count} bóng ${BALL_COLORS[c.color].name}`);
  return `Hộp có ${parts.join(', ')}`;
}

/**
 * Every way of taking one or two balls from a box at once.
 * @param {readonly BallColor[]} balls
 * @param {1 | 2} taken
 * @returns {BallColor[][]}
 */
export function waysToTake(balls, taken) {
  if (taken === 1) return balls.map((b) => [b]);
  return balls.flatMap((a, i) => balls.slice(i + 1).map((b) => [a, b]));
}
