/**
 * Reading an element's place in the periodic table from its electron
 * configuration, the way the book does it for periods 1-4: the number of
 * shells gives the period, the subshell the last electron fills gives the
 * block, and the valence electrons give the group.
 */
import { rng, shuffle } from '#lib/core/drill.js';
import {
  electronConfiguration,
  element,
  formatConfiguration,
  groupLabel,
  shellCounts,
  subshellName,
} from '#lib/domain/elements.js';

/** Highest atomic number the step-by-step reading covers (end of period 4). */
export const LAST_Z = 36;

/**
 * @typedef {object} Placement
 * @property {number} z
 * @property {string} symbol
 * @property {string} config full configuration in shell order, Unicode superscripts
 * @property {number} period
 * @property {'s' | 'p' | 'd' | 'f'} block
 * @property {number} valence valence electrons
 * @property {string} group A/B label ("VIA", "VIIIB")
 * @property {string[]} steps the reasoning, one sentence each
 */

/**
 * @param {number} z 1-36
 * @returns {Placement | null}
 */
export function place(z) {
  const el = element(z);
  if (!el || z > LAST_Z) return null;
  const config = electronConfiguration(z);
  const shells = shellCounts(config);
  const period = shells.length;
  const last = config[config.length - 1];
  const block = /** @type {Placement['block']} */ (['s', 'p', 'd', 'f'][last.l]);
  const outer = shells[period - 1];
  const dElectrons = config.find((s) => s.n === period - 1 && s.l === 2)?.electrons ?? 0;
  const valence = block === 'd' ? outer + dElectrons : outer;
  const group = groupLabel(el);
  const text = formatConfiguration(config);

  const steps = [
    `${el.symbol} có Z = ${z}, nên nằm ở ô số ${z} và có ${z} electron: ${text}.`,
    `Nguyên tử có ${period} lớp electron (số electron mỗi lớp: ${shells.join(', ')}), nên ${el.symbol} thuộc chu kì ${period}.`,
    `Electron cuối cùng điền vào phân lớp ${subshellName(last)}, nên ${el.symbol} là nguyên tố ${block}.`,
  ];
  if (z === 2) {
    steps.push(
      'He có 2 electron lớp ngoài cùng, đã bão hoà như các khí hiếm, nên xếp ở nhóm VIIIA.',
    );
  } else if (block === 'd') {
    const n = period;
    const eight = valence >= 8 && valence <= 10 ? ' (8, 9 hoặc 10 electron hoá trị)' : '';
    const note = `nên thuộc nhóm ${group}${eight}`;
    steps.push(
      `Nguyên tố d thuộc nhóm B. Electron hoá trị là electron ${n}s và ${n - 1}d: ${outer} + ${dElectrons} = ${valence}, ${note}.`,
    );
  } else {
    steps.push(
      `Nguyên tố ${block} thuộc nhóm A. Lớp ngoài cùng có ${valence} electron, nên ${el.symbol} thuộc nhóm ${group}.`,
    );
  }
  return { z, symbol: el.symbol, config: text, period, block, valence, group, steps };
}

/**
 * The challenge order: every element of periods 1-4 once, shuffled the same
 * way for every visitor.
 * @param {number} [seed]
 */
export function challengeOrder(seed = 5) {
  const all = Array.from({ length: LAST_Z }, (_, i) => i + 1);
  return shuffle(rng(seed), all);
}

/**
 * Feedback for a tap in "find the element" mode.
 * @param {number} target atomic number asked for
 * @param {number} chosen atomic number tapped
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeTap(target, chosen) {
  const want = /** @type {Placement} */ (place(target));
  const el = element(chosen);
  if (!el) return { ok: false, text: 'Hãy chọn một ô nguyên tố.' };
  if (chosen === target) {
    return {
      ok: true,
      text: `Đúng! Ô số ${target} là ${want.symbol} (${want.config}): chu kì ${want.period}, nhóm ${want.group}.`,
    };
  }
  const where = el.group === null ? 'họ f' : `nhóm ${groupLabel(el)}`;
  const samePeriod = el.period === want.period;
  const sameGroup = el.group !== null && groupLabel(el) === want.group;
  const advice = samePeriod
    ? `Đúng chu kì rồi, hãy tìm cột của nhóm ${want.group} trong hàng này.`
    : sameGroup
      ? `Đúng nhóm rồi, hãy đi theo cột này tới hàng thứ ${want.period}.`
      : `Chu kì là số thứ tự của hàng; hàng ${want.period} từ trên xuống.`;
  return {
    ok: false,
    text: `Ô em chọn là ${el.symbol}, ở chu kì ${el.period}, ${where}. ${advice}`,
  };
}
