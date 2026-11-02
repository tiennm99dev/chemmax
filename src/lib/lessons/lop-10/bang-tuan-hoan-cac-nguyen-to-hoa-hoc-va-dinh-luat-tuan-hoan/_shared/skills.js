/**
 * Generated drill skills for the review of the periodic table chapter:
 * the period of an element from Z, Z from a position, the highest valence
 * with oxygen, and the atomic mass of R from the share of oxygen in its
 * highest oxide.
 */
import { int, pick } from '#lib/core/drill.js';
import { formatFixed, texNumber, tidy } from '#lib/core/number-format.js';
import {
  ELEMENTS,
  configTex,
  element,
  groupLabel,
  shellCounts,
  electronConfiguration,
} from '#lib/domain/elements.js';
import { COMPOUNDS, formulaTex, oxideFormula, roman } from '#lib/domain/compounds.js';

/** @param {number} z */
const el = (z) => /** @type {import('#lib/domain/elements.js').Element} */ (element(z));

/** Elements used for "which period" questions: periods 1-4. */
const PERIOD_POOL = [1, 3, 5, 8, 11, 13, 15, 17, 19, 20, 24, 26, 29, 31, 35];

/** @type {import('#lib/core/drill.js').Skill} */
export const periodSkill = {
  id: 'chu-ki',
  label: 'Bài 5. Chu kì từ cấu hình',
  make(rand) {
    const z = pick(rand, PERIOD_POOL);
    const shells = shellCounts(electronConfiguration(z));
    return {
      prompt: `Nguyên tố ${el(z).symbol} có $Z = ${z}$. Nguyên tố này thuộc chu kì mấy?`,
      answer: shells.length,
      hints: ['Viết cấu hình electron rồi đếm số lớp electron.'],
      steps: [
        `Cấu hình: $${configTex(z)}$.`,
        `Số electron mỗi lớp: ${shells.join(', ')}, tức ${shells.length} lớp electron.`,
        `Số thứ tự chu kì bằng số lớp electron: chu kì ${shells.length}.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const positionSkill = {
  id: 'vi-tri',
  label: 'Bài 8. Số hiệu từ vị trí',
  make(rand) {
    const period = int(rand, 2, 4);
    const group = int(rand, 1, 7);
    const label = `${roman(group)}A`;
    const found = /** @type {import('#lib/domain/elements.js').Element} */ (
      ELEMENTS.find((e) => e.period === period && e.group !== null && groupLabel(e) === label)
    );
    const outer = group <= 2 ? `${period}s^${group}` : `${period}s^2${period}p^${group - 2}`;
    return {
      prompt: `Nguyên tố X ở chu kì ${period}, nhóm ${label}. Số hiệu nguyên tử của X là bao nhiêu?`,
      answer: found.z,
      hints: [
        `Chu kì ${period}: có ${period} lớp electron; nhóm ${label}: có ${group} electron lớp ngoài cùng.`,
        `Lớp ngoài cùng là $\\mathrm{${outer}}$; viết đủ các lớp bên trong.`,
      ],
      steps: [
        `Cấu hình electron của X: $${configTex(found.z)}$.`,
        `Tổng số electron là ${found.z}, nên $Z = ${found.z}$ (X là ${found.symbol}).`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const valenceSkill = {
  id: 'hoa-tri',
  label: 'Bài 7. Hoá trị cao nhất với oxygen',
  make(rand) {
    const c = pick(rand, COMPOUNDS);
    return {
      prompt: `Nguyên tố ${el(c.z).symbol} có $Z = ${c.z}$. Hoá trị cao nhất của nó với oxygen là bao nhiêu? (Ghi bằng chữ số.)`,
      answer: c.valence,
      hints: [
        'Viết cấu hình và tìm số thứ tự nhóm A.',
        'Hoá trị cao nhất với oxygen bằng số thứ tự nhóm A.',
      ],
      steps: [
        `Cấu hình: $${configTex(c.z)}$, nên ${el(c.z).symbol} thuộc nhóm ${roman(c.valence)}A.`,
        `Hoá trị cao nhất với oxygen là ${roman(c.valence)} (${c.valence}); oxide cao nhất ${formulaTex(c.oxide)}.`,
      ],
    };
  },
};

/** Elements with a whole-number atomic mass as the book rounds it, by group A. */
const MASS_POOL = /** @type {Array<[number, number]>} */ ([
  [11, 23],
  [19, 39],
  [12, 24],
  [20, 40],
  [13, 27],
  [6, 12],
  [14, 28],
  [7, 14],
  [15, 31],
  [16, 32],
]);

/** @type {import('#lib/core/drill.js').Skill} */
export const oxideMassSkill = {
  id: 'oxide',
  label: 'Bài 7. Tìm nguyên tố từ oxide cao nhất',
  make(rand) {
    const [z, mass] = pick(rand, MASS_POOL);
    const c = /** @type {import('#lib/domain/compounds.js').HighestCompounds} */ (
      COMPOUNDS.find((x) => x.z === z)
    );
    const v = c.valence;
    const r = v % 2 === 1 ? 2 : 1;
    const o = v % 2 === 1 ? v : v / 2;
    const share = (100 * 16 * o) / (r * mass + 16 * o);
    const p = texNumber(formatFixed(share, 2));
    const generic = formulaTex(oxideFormula('R', v));
    const rest = `${r === 2 ? '2R' : 'R'} + ${16 * o}`;
    const whole = (1600 * o) / tidy(share, 2);
    return {
      prompt: `Nguyên tố R thuộc nhóm ${roman(v)}A. Trong oxide cao nhất của R, oxygen chiếm $${p}\\%$ về khối lượng. Tính nguyên tử khối của R (làm tròn đến hàng đơn vị).`,
      answer: mass,
      hints: [
        `Nhóm ${roman(v)}A nên oxide cao nhất có dạng ${generic}.`,
        `Lập phương trình $\\dfrac{${16 * o}}{${rest}} = \\dfrac{${p}}{100}$.`,
      ],
      steps: [
        `Oxide cao nhất: ${generic}, có ${o} nguyên tử O (${16 * o} g/mol).`,
        `$\\dfrac{${16 * o}}{${rest}} = \\dfrac{${p}}{100}$, nên $${rest} \\approx ${texNumber(formatFixed(whole, 1))}$.`,
        `Giải ra $R \\approx ${mass}$: R là ${el(z).symbol}.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [periodSkill, positionSkill, valenceSkill, oxideMassSkill];
