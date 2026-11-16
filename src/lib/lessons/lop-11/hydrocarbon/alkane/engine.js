/**
 * The alkane naming bench of this lesson: how long the drawn chain may be and
 * a random bench for the "Đề mới" button. The naming itself is
 * `#lib/domain/alkane-name.js`.
 */
import { branchKey } from '#lib/domain/alkane-name.js';

/** @typedef {import('#lib/domain/alkane-name.js').Branches} Branches */

export const MIN_LENGTH = 3;
export const MAX_LENGTH = 7;
/**
 * A random bench for the "Đề mới" button: 4 to 6 carbons drawn, one to three
 * branches.
 * @param {() => number} rand
 * @returns {{ length: number, branches: Branches }}
 */
export function randomBench(rand) {
  const length = 4 + Math.floor(rand() * 3);
  /** @type {Branches} */
  const branches = {};
  const count = 1 + Math.floor(rand() * 3);
  for (let k = 0; k < count; k++) {
    const index = 1 + Math.floor(rand() * (length - 2));
    const side = rand() < 0.5 ? 'up' : 'down';
    branches[branchKey(index, side)] = rand() < 0.7 ? 1 : 2;
  }
  return { length, branches };
}
