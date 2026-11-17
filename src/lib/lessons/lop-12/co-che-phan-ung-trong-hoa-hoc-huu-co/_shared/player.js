/**
 * Frames of a mechanism walk-through and the check of a prediction asked on
 * a frame.
 */

import { choiceOrder } from '#lib/core/practice-state.js';

/**
 * @typedef {object} FrameAsk
 * @property {string} prompt rich text
 * @property {string[]} options rich text
 * @property {number} answer index of the right option
 * @property {string} hint rich text: a nudge shown after a wrong pick
 * @property {string} why rich text: the reason, shown with the right answer
 */

/**
 * @typedef {object} Frame
 * @property {import('./scene.js').Scene} scene
 * @property {string} caption rich text: what happens in this step
 * @property {FrameAsk} [ask] a prediction to make before the next step
 */

/**
 * The feedback line for a picked option.
 * @param {FrameAsk} ask @param {number} picked
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function askFeedback(ask, picked) {
  if (picked === ask.answer) return { tone: 'ok', text: `Đúng. ${ask.why}` };
  return { tone: 'warn', text: `Chưa đúng, thử lại. Gợi ý: ${ask.hint}` };
}

/**
 * Display order of a prediction's options: `order[row]` is the authored option
 * index shown on that row. Seeded from the prediction like a choice exercise,
 * so the right option does not always sit where the author wrote it and the
 * prerendered page and the browser agree.
 * @param {FrameAsk} ask
 * @returns {number[]}
 */
export function askOrder(ask) {
  return choiceOrder({
    type: 'choice',
    prompt: ask.prompt,
    options: ask.options,
    answer: ask.answer,
    hints: [ask.hint],
    solution: ask.why,
  });
}
