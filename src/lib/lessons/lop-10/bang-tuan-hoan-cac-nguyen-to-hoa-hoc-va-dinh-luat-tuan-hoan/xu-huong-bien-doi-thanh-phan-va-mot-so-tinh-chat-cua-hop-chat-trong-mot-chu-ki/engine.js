/**
 * Period 3 from sodium to chlorine: the highest oxide and hydroxide of each
 * element, their acid–base character and equations that show it, and the
 * check of a learner's guess of that character.
 */
import { element } from '#lib/domain/elements.js';
import { COMPOUNDS, OXIDE_NATURE, formulaTex, roman } from '../_shared/compounds.js';

/** @typedef {import('../_shared/compounds.js').Nature} Nature */
/** @typedef {import('../_shared/compounds.js').HighestCompounds} HighestCompounds */

/**
 * @typedef {HighestCompounds & {
 *   symbol: string,
 *   name: string,
 *   scale: number,
 *   equations: string[],
 *   note: string,
 * }} Period3Entry
 */

/**
 * Position on the base → acid scale (−3 strong base … +4 very strong acid),
 * equations showing the character, and a remark, per element.
 * @type {Record<number, { scale: number, equations: string[], note: string }>}
 */
const EXTRA = {
  11: {
    scale: -3,
    equations: ['Na2O + H2O → 2NaOH', 'NaOH + HCl → NaCl + H2O'],
    note: '$\\mathrm{Na_2O}$ tan trong nước tạo dung dịch kiềm; $\\mathrm{NaOH}$ là base mạnh.',
  },
  12: {
    scale: -2,
    equations: ['MgO + 2HCl → MgCl2 + H2O', 'Mg(OH)2 + 2HCl → MgCl2 + 2H2O'],
    note: '$\\mathrm{MgO}$ và $\\mathrm{Mg(OH)_2}$ tác dụng với acid; $\\mathrm{Mg(OH)_2}$ là base yếu, yếu hơn $\\mathrm{NaOH}$.',
  },
  13: {
    scale: 0,
    equations: [
      'Al2O3 + 6HCl → 2AlCl3 + 3H2O',
      'Al2O3 + 2NaOH + 3H2O → 2Na[Al(OH)4]',
      'Al(OH)3 + 3HCl → AlCl3 + 3H2O',
      'Al(OH)3 + NaOH → Na[Al(OH)4]',
    ],
    note: '$\\mathrm{Al_2O_3}$ và $\\mathrm{Al(OH)_3}$ tác dụng được với cả dung dịch acid và dung dịch base: chúng lưỡng tính.',
  },
  14: {
    scale: 1,
    equations: ['SiO2 + 2NaOH → Na2SiO3 + H2O'],
    note: '$\\mathrm{SiO_2}$ tác dụng với base ($\\mathrm{NaOH}$ đặc, nóng); $\\mathrm{H_2SiO_3}$ là acid yếu.',
  },
  15: {
    scale: 2,
    equations: ['P2O5 + 3H2O → 2H3PO4', 'H3PO4 + 3NaOH → Na3PO4 + 3H2O'],
    note: '$\\mathrm{P_2O_5}$ tác dụng với nước tạo $\\mathrm{H_3PO_4}$, một acid trung bình.',
  },
  16: {
    scale: 3,
    equations: ['SO3 + H2O → H2SO4', 'SO3 + 2NaOH → Na2SO4 + H2O'],
    note: '$\\mathrm{SO_3}$ tác dụng với nước tạo $\\mathrm{H_2SO_4}$, một acid mạnh.',
  },
  17: {
    scale: 4,
    equations: ['Cl2O7 + H2O → 2HClO4'],
    note: '$\\mathrm{Cl_2O_7}$ tác dụng với nước tạo $\\mathrm{HClO_4}$, acid mạnh nhất trong dãy.',
  },
};

/** Na to Cl, in the order of the period. */
export const PERIOD3 = /** @type {Period3Entry[]} */ (
  COMPOUNDS.filter((c) => c.z >= 11 && c.z <= 17).map((c) => {
    const el = /** @type {import('#lib/domain/elements.js').Element} */ (element(c.z));
    return { ...c, symbol: el.symbol, name: el.name, ...EXTRA[c.z] };
  })
);

/** Guess options for the oxide's character. */
export const NATURE_CHOICES = /** @type {Array<{ value: Nature, label: string }>} */ ([
  { value: 'base', label: 'Oxide base' },
  { value: 'luong-tinh', label: 'Oxide lưỡng tính' },
  { value: 'acid', label: 'Oxide acid' },
]);

/**
 * @param {Period3Entry} entry
 * @param {Nature} guess
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeNature(entry, guess) {
  const right = OXIDE_NATURE[entry.oxideNature];
  if (guess === entry.oxideNature) {
    return {
      ok: true,
      text: `Đúng: ${formulaTex(entry.oxide)} là ${right}; hydroxide tương ứng ${formulaTex(entry.hydroxide)} là ${entry.strength}.`,
    };
  }
  const hint =
    entry.z <= 12
      ? 'Ở đầu chu kì là kim loại mạnh: oxide của chúng tác dụng với acid.'
      : entry.z === 13
        ? 'Aluminium ở ranh giới kim loại – phi kim: oxide của nó tác dụng được với cả acid và base.'
        : 'Phi kim ở cuối chu kì có oxide tác dụng với nước hoặc base, tạo ra acid hoặc muối.';
  return { ok: false, text: `Chưa đúng: ${formulaTex(entry.oxide)} là ${right}. ${hint}` };
}

/**
 * The trend sentence for the part of the period up to `entry`.
 * @param {Period3Entry} entry
 */
export function periodSentence(entry) {
  return `Hoá trị cao nhất của ${entry.symbol} với oxygen là ${roman(entry.valence)}, bằng số thứ tự nhóm ${roman(entry.valence)}A. Đi từ Na sang Cl, hoá trị này tăng từ I đến VII, tính base của oxide và hydroxide giảm dần, tính acid tăng dần.`;
}
