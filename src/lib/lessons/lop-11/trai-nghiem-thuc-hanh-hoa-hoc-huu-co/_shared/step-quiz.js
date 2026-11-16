/**
 * A laboratory procedure walked through one step at a time: at each step the
 * learner picks what to do (a reagent, a condition, a safe action) among a
 * few options. A wrong pick is explained and greyed out; the right pick
 * shows what happens and opens the next step. Pure state, no DOM.
 */

/**
 * @typedef {object} StepOption
 * @property {string} label what the learner may do (rich text)
 * @property {boolean} [ok] true for the one right action of the step
 * @property {string} why what happens with this choice (rich text)
 */

/**
 * @typedef {object} Step
 * @property {string} title short name of the step
 * @property {string} question what the learner has to decide (rich text)
 * @property {StepOption[]} options at least two, exactly one with `ok`
 * @property {string} result what the step achieves once done (rich text)
 */

/**
 * @typedef {object} QuizState
 * @property {number} index current step; equals the step count when finished
 * @property {number[]} wrong option indices already tried wrongly at this step
 * @property {number} misses wrong picks over the whole procedure
 * @property {string} message feedback of the last pick (rich text)
 * @property {'ok' | 'warn' | 'info'} tone
 */

/**
 * Check a procedure: every step has one right option among two or more.
 * @param {Step[]} steps
 */
export function validSteps(steps) {
  return (
    steps.length > 0 &&
    steps.every((s) => s.options.length >= 2 && s.options.filter((o) => o.ok).length === 1)
  );
}

/** @returns {QuizState} */
export function startQuiz() {
  return {
    index: 0,
    wrong: [],
    misses: 0,
    message: 'Chọn cách làm đúng cho bước đầu tiên.',
    tone: 'info',
  };
}

/**
 * Apply one pick at the current step.
 * @param {Step[]} steps
 * @param {QuizState} state
 * @param {number} choice option index
 * @returns {QuizState}
 */
export function pick(steps, state, choice) {
  const step = steps[state.index];
  if (!step || state.wrong.includes(choice)) return state;
  const option = step.options[choice];
  if (!option) return state;
  if (!option.ok) {
    return {
      ...state,
      wrong: [...state.wrong, choice],
      misses: state.misses + 1,
      message: `Chưa đúng. ${option.why}`,
      tone: 'warn',
    };
  }
  return {
    index: state.index + 1,
    wrong: [],
    misses: state.misses,
    message: `Đúng. ${option.why} ${step.result}`,
    tone: 'ok',
  };
}

/**
 * Whether every step of the procedure is done.
 * @param {Step[]} steps
 * @param {QuizState} state
 */
export function finished(steps, state) {
  return state.index >= steps.length;
}
