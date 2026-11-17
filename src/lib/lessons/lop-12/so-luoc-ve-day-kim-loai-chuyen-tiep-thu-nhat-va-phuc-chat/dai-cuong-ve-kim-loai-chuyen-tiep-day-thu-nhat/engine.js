/**
 * The "count the 3d electrons" challenge: an ion of the first transition
 * series is shown with its atom's configuration, and the learner gives how
 * many 3d electrons the ion keeps, remembering that 4s empties first.
 */
import { formatNumber } from '#lib/core/number-format.js';
import { ionTex, ionValence, metal, valenceOf, valenceTex } from '../_shared/transition.js';

/** The ions of the challenge, in order: [symbol, charge]. */
export const CHALLENGES = /** @type {const} */ ([
  ['Fe', 3],
  ['Cr', 3],
  ['Mn', 2],
  ['Cu', 2],
  ['Ti', 4],
  ['Co', 2],
  ['V', 3],
  ['Cu', 1],
  ['Ni', 2],
  ['Fe', 2],
]);

/**
 * Judges a guess of the 3d electrons of an ion.
 * @param {string} symbol
 * @param {number} charge
 * @param {number} guess
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeD(symbol, charge, guess) {
  const m = metal(symbol);
  const atom = valenceOf(m.z);
  const ion = ionValence(m.z, charge);
  const fromS = atom.s - ion.s;
  const fromD = charge - fromS;
  const ionName = `$\\mathrm{${ionTex(symbol, charge)}}$`;
  const how =
    fromD === 0
      ? `${symbol} $(${valenceTex(atom)})$ nhường ${formatNumber(fromS)} electron 4s`
      : `${symbol} $(${valenceTex(atom)})$ nhường ${formatNumber(fromS)} electron 4s trước, rồi ${formatNumber(fromD)} electron 3d`;
  const result = `${how}, nên ${ionName} là $${valenceTex(ion)}$: còn ${formatNumber(ion.d)} electron 3d.`;
  if (guess === ion.d) return { ok: true, text: `Đúng! ${result}` };
  const slip =
    guess === atom.d - charge
      ? ' Em đã lấy electron từ 3d trước; hãy nhớ electron 4s bị nhường trước.'
      : '';
  return { ok: false, text: `Chưa đúng.${slip} ${result}` };
}
