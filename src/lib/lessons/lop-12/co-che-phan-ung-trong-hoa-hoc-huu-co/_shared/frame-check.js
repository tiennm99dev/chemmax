/**
 * A consistency check for hand-written mechanism frames, for tests: every
 * arrow end and bond names an atom of its scene, and every prediction has a
 * valid answer.
 */

import { arrowPath, bondLines } from './scene.js';

/**
 * Returns the problems found in a list of frames (empty when all is well).
 * @param {import('./player.js').Frame[]} frames
 * @returns {string[]}
 */
export function frameProblems(frames) {
  /** @type {string[]} */
  const problems = [];
  frames.forEach((frame, i) => {
    const ids = frame.scene.atoms.map((a) => a.id);
    if (new Set(ids).size !== ids.length) problems.push(`frame ${i}: repeated atom id`);
    try {
      for (const bond of frame.scene.bonds ?? []) bondLines(frame.scene, bond);
      for (const arrow of frame.scene.arrows ?? []) arrowPath(frame.scene, arrow);
    } catch (error) {
      problems.push(`frame ${i}: ${/** @type {Error} */ (error).message}`);
    }
    if (!frame.caption) problems.push(`frame ${i}: no caption`);
    const ask = frame.ask;
    if (ask && (ask.answer < 0 || ask.answer >= ask.options.length || ask.options.length < 2))
      problems.push(`frame ${i}: bad prediction answer`);
  });
  return problems;
}
