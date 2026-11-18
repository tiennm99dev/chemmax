// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * A chain of calculations to follow along arrows ("tính theo mũi tên"): a
 * start number, then one calculation per arrow, each starting from the
 * result of the one before. `number-chain.svelte` draws it. Pure and DOM-free.
 */
import { resultOf, signOf, signWord } from './column.js';

/**
 * One arrow of a chain: the sign as printed, its word as read aloud, the
 * number it takes and the value it leads to.
 * @typedef {{ sign: string, word: string, n: number, value: number }} ChainStep
 */

/**
 * The arrows of an addition and subtraction chain.
 * @param {number} start
 * @param {ReadonlyArray<{ op: import('./column.js').Op, n: number }>} calcs
 * @returns {ChainStep[]}
 */
export function chainSteps(start, calcs) {
  let value = start;
  return calcs.map(({ op, n }) => {
    value = resultOf(value, n, op);
    return { sign: signOf(op), word: signWord(op), n, value };
  });
}
