/**
 * Generated drill skills for the review of the chemical energy chapter: the
 * enthalpy change from enthalpies of formation or bond energies, the heat of a
 * given amount, and a missing enthalpy of formation.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import {
  BOND_ENERGY,
  BOND_REACTIONS,
  FORMATION_REACTIONS,
  bondSteps,
  bondTotals,
  equationTex,
  formationOf,
  formationSteps,
  fromBonds,
  fromFormation,
  signedTex,
  speciesTex,
} from './energy.js';

/** @type {import('#lib/core/drill.js').Skill} */
export const formationSkill = {
  id: 'nhiet-tao-thanh',
  label: 'Tính biến thiên enthalpy theo nhiệt tạo thành',
  make(rand) {
    const r = pick(rand, FORMATION_REACTIONS);
    const species = [...new Set([...r.left, ...r.right].map((t) => t.s))];
    const data = species.map((s) => `$${speciesTex(s)}$: $${numTex(formationOf(s))}$`).join('; ');
    const steps = formationSteps(r);
    return {
      prompt: `Tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $${equationTex(r)}$. Nhiệt tạo thành chuẩn (kJ/mol): ${data}.`,
      answer: fromFormation(r),
      unit: 'kJ',
      hints: [
        'Lấy tổng nhiệt tạo thành của các sản phẩm trừ tổng nhiệt tạo thành của các chất đầu, nhân mỗi giá trị với hệ số của chất.',
        steps[0],
      ],
      steps,
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const bondSkill = {
  id: 'nang-luong-lien-ket',
  label: 'Tính biến thiên enthalpy theo năng lượng liên kết',
  make(rand) {
    const r = pick(rand, BOND_REACTIONS);
    const bonds = [...bondTotals(r.left), ...bondTotals(r.right)].map((b) => b.bond);
    const data = [...new Set(bonds)].map((b) => `${b}: ${BOND_ENERGY[b]}`).join('; ');
    const steps = bondSteps(r);
    return {
      prompt: `Tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $${equationTex(r)}$. Năng lượng liên kết (kJ/mol): ${data}.`,
      answer: fromBonds(r),
      unit: 'kJ',
      hints: [
        'Với năng lượng liên kết, lấy tổng của các chất đầu trừ tổng của các sản phẩm.',
        steps[0],
      ],
      steps,
    };
  },
};

const FUELS = [
  { s: 'CO(g)', name: 'carbon monoxide', dH: -283 },
  { s: 'CH4(g)', name: 'methane', dH: -890.3 },
  { s: 'C2H6(g)', name: 'ethane', dH: -1559.7 },
  { s: 'C3H8(g)', name: 'propane', dH: -2220 },
  { s: 'C4H10(g)', name: 'butane', dH: -2874 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const heatSkill = {
  id: 'nhiet-luong',
  label: 'Tính nhiệt lượng theo lượng chất',
  make(rand) {
    const fuel = pick(rand, FUELS);
    const n = pick(rand, [0.1, 0.2, 0.5, 2, 3]);
    const byVolume = n < 1 && rand() < 0.5;
    const volume = tidy(n * 24.79, 6);
    const amount = byVolume ? `$${numTex(volume)}$ L (đkc)` : `$${numTex(n)}$ mol`;
    const heat = tidy(n * -fuel.dH, 6);
    const steps = [
      ...(byVolume ? [`Số mol khí: $n = ${numTex(volume)} : 24{,}79 = ${numTex(n)}$ mol.`] : []),
      `Đốt cháy $1$ mol ${fuel.name} toả ra $${numTex(-fuel.dH)}$ kJ, nên nhiệt lượng toả ra là $${numTex(n)} \\cdot ${numTex(-fuel.dH)} = ${numTex(heat)}$ kJ.`,
    ];
    return {
      prompt: `Đốt cháy hoàn toàn $1$ mol khí ${fuel.name} $${speciesTex(fuel.s)}$ có $\\Delta_r H^\\circ_{298} = ${numTex(fuel.dH)}$ kJ. Đốt cháy hoàn toàn ${amount} khí này toả ra bao nhiêu kJ nhiệt?`,
      answer: heat,
      unit: 'kJ',
      hints: [
        'Nhiệt lượng tỉ lệ thuận với lượng chất phản ứng.',
        byVolume
          ? 'Đổi thể tích ra số mol: ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.'
          : 'Nhân số mol với độ lớn của $\\Delta_r H^\\circ_{298}$.',
      ],
      steps,
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const unknownSkill = {
  id: 'tim-nhiet-tao-thanh',
  label: 'Tìm nhiệt tạo thành từ biến thiên enthalpy',
  make(rand) {
    const r = pick(rand, FORMATION_REACTIONS);
    const terms = [
      ...r.left.map((t) => ({ ...t, side: 'left' })),
      ...r.right.map((t) => ({ ...t, side: 'right' })),
    ];
    const target = pick(
      rand,
      terms.filter((t) => formationOf(t.s) !== 0),
    );
    const others = terms.filter((t) => t !== target);
    const known = others.map((t) => `$${speciesTex(t.s)}$: $${numTex(formationOf(t.s))}$`);
    const dH = fromFormation(r);
    const sign = (/** @type {string} */ side) => (side === 'right' ? 1 : -1);
    const rest = tidy(
      others.reduce((sum, t) => sum + sign(t.side) * t.n * formationOf(t.s), 0),
      6,
    );
    const answer = tidy((dH - rest) / (sign(target.side) * target.n), 6);
    const coef = target.n === 1 ? '' : numTex(target.n);
    return {
      prompt: `Phản ứng $${equationTex(r)}$ có $\\Delta_r H^\\circ_{298} = ${signedTex(dH)}$ kJ. Biết nhiệt tạo thành chuẩn (kJ/mol) ${known.join('; ')}. Tìm nhiệt tạo thành chuẩn của $${speciesTex(target.s)}$ (kJ/mol).`,
      answer,
      unit: 'kJ/mol',
      hints: [
        'Viết $\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(\\text{sp}) - \\sum \\Delta_f H^\\circ_{298}(\\text{cđ})$ rồi đặt ẩn cho chất cần tìm.',
        'Đơn chất bền có nhiệt tạo thành bằng $0$. Nhớ nhân với hệ số của chất cần tìm.',
      ],
      steps: [
        `Gọi $x$ là nhiệt tạo thành cần tìm: $${numTex(dH)} = ${numTex(rest)} ${target.side === 'left' ? '-' : '+'} ${coef}x$.`,
        `Giải ra $x = ${numTex(answer)}$ kJ/mol.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [formationSkill, bondSkill, heatSkill, unknownSkill];
