/**
 * Generated drill skills for the chapter review: the degree of polymerisation
 * of an addition polymer, the number of units in a condensation polymer, and
 * the mass of polymer made by addition (with a yield) and by condensation
 * (water split off). Amounts are drawn so every answer is a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import { M_WATER, monomerMolar, polymer, polymerTex } from '../_shared/polymers.js';

const ADDITION = ['pe', 'pp', 'pvc', 'ps', 'nitron', 'buna'];
const CONDENSATION = ['nylon-6', 'nylon-6-6', 'pet'];

/** @param {import('../_shared/polymers.js').Polymer} p */
const nameOf = (p) => (p.abbr ? `${p.name} (${p.abbr})` : `${p.name} (${p.material})`);

/** @type {import('#lib/core/drill.js').Skill} */
export const degreeSkill = {
  id: 'he-so-polymer-hoa',
  label: 'Hệ số polymer hoá',
  make(rand) {
    const p = polymer(pick(rand, ADDITION));
    const n = pick(rand, [500, 800, 1000, 1200, 1500, 2000, 2500]);
    const M = tidy(n * p.unitMolar);
    return {
      prompt: `Một loại ${nameOf(p)} có phân tử khối trung bình là $${numTex(M)}$. Tính hệ số polymer hoá.`,
      answer: n,
      hints: [
        `Mắt xích của polymer: $${polymerTex(p)}$.`,
        '$n = \\dfrac{M_{\\text{polymer}}}{M_{\\text{mắt xích}}}$.',
      ],
      steps: [
        `$M_{\\text{mắt xích}} = ${numTex(p.unitMolar)}$.`,
        `$n = \\dfrac{${numTex(M)}}{${numTex(p.unitMolar)}} = ${numTex(n)}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const unitsSkill = {
  id: 'mat-xich-trung-ngung',
  label: 'Số mắt xích của polymer trùng ngưng',
  make(rand) {
    const p = polymer(pick(rand, CONDENSATION));
    const n = pick(rand, [100, 120, 150, 200, 250]);
    const M = n * p.unitMolar;
    const sum = p.monomers.map((m) => m.molar).join(' + ');
    return {
      prompt: `Một loại ${nameOf(p)} có phân tử khối là $${numTex(M)}$. Tính số mắt xích trong một phân tử.`,
      answer: n,
      hints: [
        `Mắt xích $${polymerTex(p)}$ bằng các monomer trừ ${p.water === 1 ? 'một' : 'hai'} phân tử nước.`,
        `$M_{\\text{mắt xích}} = ${sum} - ${p.water} \\cdot 18$.`,
      ],
      steps: [
        `$M_{\\text{mắt xích}} = ${sum} - ${p.water} \\cdot 18 = ${p.unitMolar}$.`,
        `Số mắt xích $= \\dfrac{${numTex(M)}}{${p.unitMolar}} = ${n}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const additionMassSkill = {
  id: 'khoi-luong-trung-hop',
  label: 'Khối lượng polymer trùng hợp',
  make(rand) {
    const p = polymer(pick(rand, ADDITION));
    const m = pick(rand, [2, 4, 5, 8, 10, 12.5]);
    const h = pick(rand, [60, 75, 80, 90]);
    const answer = tidy((m * h) / 100);
    const monomer = p.monomers[0].name;
    return {
      prompt: `Trùng hợp $${numTex(m)}$ tấn ${monomer} với hiệu suất $${h}\\%$. Tính khối lượng ${p.abbr ?? p.name} thu được (theo tấn).`,
      answer,
      unit: 'tấn',
      hints: [
        'Phản ứng trùng hợp không tách ra phân tử nhỏ nào.',
        'Khối lượng polymer bằng khối lượng monomer đã phản ứng.',
      ],
      steps: [
        'Trùng hợp không tách phân tử nhỏ: $m_{\\text{polymer}} = m_{\\text{monomer phản ứng}}$.',
        `$m = ${numTex(m)} \\cdot ${h}\\% = ${numTex(answer)}$ tấn.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const condensationMassSkill = {
  id: 'khoi-luong-trung-ngung',
  label: 'Khối lượng polymer trùng ngưng',
  make(rand) {
    const p = polymer(pick(rand, CONDENSATION));
    const n = pick(rand, [0.1, 0.2, 0.5, 1]);
    const first = p.monomers[0];
    const m = tidy(n * first.molar);
    const answer = tidy(n * p.unitMolar);
    const water = tidy(n * p.water * M_WATER);
    const partner = p.monomers.length > 1 ? ` với lượng vừa đủ ${p.monomers[1].name}` : '';
    const monomerSum = tidy(n * monomerMolar(p));
    return {
      prompt: `Trùng ngưng hoàn toàn $${numTex(m)}$ kg ${first.name}${partner} thu được ${p.name}. Tính khối lượng polymer (theo kg), bỏ qua hai đầu mạch.`,
      answer,
      unit: 'kg',
      hints: [
        `Số mol ${first.name}: $\\dfrac{${numTex(m)}}{${first.molar}}$ kmol; mỗi mắt xích tách ra ${p.water === 1 ? 'một' : 'hai'} phân tử nước.`,
        `$M_{\\text{mắt xích}} = ${p.unitMolar}$.`,
      ],
      steps: [
        `$n = \\dfrac{${numTex(m)}}{${first.molar}} = ${numTex(n)}$ kmol, tạo $${numTex(n)}$ kmol mắt xích.`,
        `Khối lượng monomer phản ứng $${numTex(monomerSum)}$ kg, nước tách ra $${numTex(water)}$ kg.`,
        `$m_{\\text{polymer}} = ${numTex(n)} \\cdot ${p.unitMolar} = ${numTex(answer)}$ kg.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [degreeSkill, unitsSkill, additionMassSkill, condensationMassSkill];
