/**
 * Frames of a mechanism walk-through and the check of a prediction asked on
 * a frame.
 */

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
