/**
 * Generated drill skills for the review of the reaction rate chapter: the
 * average rate from a change in concentration, the rate law, the effect of
 * compressing a gas mixture, and the Van't Hoff temperature factor.
 */
import { int, pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import { averageRate, rateLaw, vantHoff } from './rate.js';

/**
 * @typedef {{ tex: string, species: Array<{ tex: string, coefficient: number, reactant: boolean }> }} Equation
 */

/** @type {Equation[]} */
const EQUATIONS = [
  {
    tex: '2\\mathrm{N_2O_5} \\rightarrow 4\\mathrm{NO_2} + \\mathrm{O_2}',
    species: [
      { tex: '\\mathrm{N_2O_5}', coefficient: 2, reactant: true },
      { tex: '\\mathrm{NO_2}', coefficient: 4, reactant: false },
      { tex: '\\mathrm{O_2}', coefficient: 1, reactant: false },
    ],
  },
  {
    tex: '\\mathrm{H_2} + \\mathrm{Cl_2} \\rightarrow 2\\mathrm{HCl}',
    species: [
      { tex: '\\mathrm{H_2}', coefficient: 1, reactant: true },
      { tex: '\\mathrm{HCl}', coefficient: 2, reactant: false },
    ],
  },
  {
    tex: '2\\mathrm{NO} + 2\\mathrm{H_2} \\rightarrow \\mathrm{N_2} + 2\\mathrm{H_2O}',
    species: [
      { tex: '\\mathrm{NO}', coefficient: 2, reactant: true },
      { tex: '\\mathrm{N_2}', coefficient: 1, reactant: false },
      { tex: '\\mathrm{H_2O}', coefficient: 2, reactant: false },
    ],
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const averageRateSkill = {
  id: 'toc-do-trung-binh',
  label: 'Tính tốc độ trung bình',
  make(rand) {
    const eq = pick(rand, EQUATIONS);
    const s = pick(rand, eq.species);
    const dt = pick(rand, [10, 20, 40, 50]);
    const thousandths = pick(rand, [1, 2, 3, 4, 5]);
    const rate = tidy(thousandths / 1000);
    const change = tidy(rate * s.coefficient * dt);
    const c1 = s.reactant ? tidy(change + pick(rand, [0.1, 0.2, 0.5])) : 0;
    const c2 = s.reactant ? tidy(c1 - change) : change;
    const fall = s.reactant
      ? `giảm từ $${numTex(c1)}$ M xuống $${numTex(c2)}$ M`
      : `tăng từ $0$ lên $${numTex(c2)}$ M`;
    const over = s.coefficient === 1 ? '' : `\\dfrac{1}{${s.coefficient}} \\cdot `;
    const sign = s.reactant ? '-' : '';
    return {
      prompt: `Phản ứng $${eq.tex}$. Sau $${dt}$ s, nồng độ $${s.tex}$ ${fall}. Tính tốc độ trung bình của phản ứng, theo mol/(L·s).`,
      answer: averageRate(c1, c2, 0, dt, s.coefficient),
      unit: 'mol/(L·s)',
      hints: [
        'Nhớ chia biến thiên nồng độ cho hệ số của chất trong phương trình.',
        s.reactant
          ? 'Chất đầu giảm nên công thức có dấu trừ, tốc độ vẫn dương.'
          : 'Sản phẩm tăng nên công thức không có dấu trừ.',
      ],
      steps: [
        `$\\Delta C = ${numTex(c2)} - ${numTex(c1)} = ${numTex(tidy(c2 - c1))}$ M, $\\Delta t = ${dt}$ s.`,
        `$\\overline{v} = ${sign}${over}\\dfrac{\\Delta C}{\\Delta t} = ${numTex(rate)}$ mol/(L·s).`,
      ],
    };
  },
};

const LAWS = [
  {
    tex: '\\mathrm{X} + \\mathrm{Y} \\rightarrow \\mathrm{XY}',
    a: 1,
    b: 1,
    first: 'X',
    second: 'Y',
  },
  {
    tex: '2\\mathrm{X} + \\mathrm{Y} \\rightarrow \\mathrm{X_2Y}',
    a: 2,
    b: 1,
    first: 'X',
    second: 'Y',
  },
  {
    tex: '\\mathrm{X} + 2\\mathrm{Y} \\rightarrow \\mathrm{XY_2}',
    a: 1,
    b: 2,
    first: 'X',
    second: 'Y',
  },
];

/** @param {string} species @param {number} order */
const powerTex = (species, order) =>
  order === 1 ? `C_{\\mathrm{${species}}}` : `C_{\\mathrm{${species}}}^{${order}}`;

/** @type {import('#lib/core/drill.js').Skill} */
export const rateLawSkill = {
  id: 'bieu-thuc-toc-do',
  label: 'Tính tốc độ theo định luật tác dụng khối lượng',
  make(rand) {
    const law = pick(rand, LAWS);
    const k = pick(rand, [0.2, 0.5, 2, 2.5, 4]);
    const cA = pick(rand, [0.1, 0.2, 0.3, 0.5]);
    const cB = pick(rand, [0.1, 0.2, 0.4, 0.5]);
    const v = rateLaw(k, [
      [cA, law.a],
      [cB, law.b],
    ]);
    const expression = `v = k \\cdot ${powerTex(law.first, law.a)} \\cdot ${powerTex(law.second, law.b)}`;
    return {
      prompt: `Phản ứng đơn giản $${law.tex}$ có hằng số tốc độ $k = ${numTex(k)}$ (đơn vị phù hợp). Tính tốc độ phản ứng khi $C_{\\mathrm{X}} = ${numTex(cA)}$ M và $C_{\\mathrm{Y}} = ${numTex(cB)}$ M, theo mol/(L·s).`,
      answer: v,
      unit: 'mol/(L·s)',
      hints: [
        'Số mũ của mỗi nồng độ bằng hệ số của chất đó trong phương trình.',
        `$${expression}$`,
      ],
      steps: [
        `$${expression}$.`,
        `$v = ${numTex(k)} \\cdot ${numTex(cA)}${law.a === 1 ? '' : `^${law.a}`} \\cdot ${numTex(cB)}${law.b === 1 ? '' : `^${law.b}`} = ${numTex(v, 6)}$ mol/(L·s).`,
      ],
    };
  },
};

const GAS_REACTIONS = [
  {
    tex: '2\\mathrm{NO} + \\mathrm{O_2} \\rightarrow 2\\mathrm{NO_2}',
    total: 3,
    law: 'C_{\\mathrm{NO}}^2 \\cdot C_{\\mathrm{O_2}}',
  },
  {
    tex: '2\\mathrm{SO_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{SO_3}',
    total: 3,
    law: 'C_{\\mathrm{SO_2}}^2 \\cdot C_{\\mathrm{O_2}}',
  },
  {
    tex: '\\mathrm{H_2} + \\mathrm{I_2} \\rightarrow 2\\mathrm{HI}',
    total: 2,
    law: 'C_{\\mathrm{H_2}} \\cdot C_{\\mathrm{I_2}}',
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const compressionSkill = {
  id: 'nen-khi',
  label: 'Tăng nồng độ hoặc áp suất bằng cách nén khí',
  make(rand) {
    const r = pick(rand, GAS_REACTIONS);
    const times = int(rand, 2, 4);
    const factor = times ** r.total;
    return {
      prompt: `Coi $${r.tex}$ (các chất đều ở thể khí) là phản ứng đơn giản. Nén hỗn hợp khí để thể tích giảm $${times}$ lần, nhiệt độ không đổi. Tốc độ phản ứng tăng bao nhiêu lần?`,
      answer: factor,
      hints: [
        'Thể tích giảm bao nhiêu lần thì nồng độ mỗi khí tăng bấy nhiêu lần.',
        `Biểu thức tốc độ: $v = k \\cdot ${r.law}$.`,
      ],
      steps: [
        `Nồng độ mỗi khí tăng $${times}$ lần; biểu thức $v = k \\cdot ${r.law}$ có tổng số mũ là $${r.total}$.`,
        `Tốc độ tăng $${times}^{${r.total}} = ${factor}$ lần.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const heatingSkill = {
  id: 'he-so-nhiet-do',
  label: "Dùng hệ số nhiệt độ Van't Hoff để tính tốc độ",
  make(rand) {
    const gamma = int(rand, 2, 4);
    const rise = pick(rand, [10, 20, 30]);
    const t1 = pick(rand, [20, 25, 30, 40]);
    const factor = vantHoff(gamma, rise);
    const v1 = pick(rand, [0.01, 0.02, 0.05, 0.1]);
    const v2 = tidy(v1 * factor);
    return {
      prompt: `Một phản ứng có hệ số nhiệt độ Van't Hoff $\\gamma = ${gamma}$. Ở $${t1}\\,^\\circ\\mathrm{C}$, tốc độ phản ứng là $${numTex(v1)}$ mol/(L·s). Tính tốc độ phản ứng ở $${t1 + rise}\\,^\\circ\\mathrm{C}$, theo mol/(L·s).`,
      answer: v2,
      unit: 'mol/(L·s)',
      hints: [
        'Cứ tăng $10\\,^\\circ\\mathrm{C}$ thì tốc độ nhân với $\\gamma$.',
        `Nhiệt độ tăng $${rise}\\,^\\circ\\mathrm{C}$.`,
      ],
      steps: [
        `$\\dfrac{v_2}{v_1} = ${gamma}^{\\frac{${rise}}{10}} = ${numTex(factor)}$.`,
        `$v_2 = ${numTex(v1)} \\cdot ${numTex(factor)} = ${numTex(v2)}$ mol/(L·s).`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const temperatureSkill = {
  id: 'tim-nhiet-do',
  label: 'Tìm nhiệt độ để đạt một tốc độ',
  make(rand) {
    const gamma = int(rand, 2, 3);
    const tens = pick(rand, [1, 2, 3]);
    const t1 = pick(rand, [45, 50, 55, 60]);
    const v2 = pick(rand, [0.002, 0.004, 0.005, 0.01]);
    const v1 = tidy(v2 * gamma ** tens);
    const t2 = t1 - 10 * tens;
    return {
      prompt: `Một phản ứng ở $${t1}\\,^\\circ\\mathrm{C}$ có tốc độ $${numTex(v1)}$ mol/(L·phút), hệ số nhiệt độ Van't Hoff $\\gamma = ${gamma}$. Phải hạ xuống nhiệt độ bao nhiêu (theo $^\\circ\\mathrm{C}$) để tốc độ còn $${numTex(v2)}$ mol/(L·phút)?`,
      answer: t2,
      unit: '°C',
      hints: [
        'Lập tỉ số hai tốc độ.',
        `Tìm số mũ $n$ để $${gamma}^n$ bằng tỉ số đó; mỗi $n$ ứng với $10\\,^\\circ\\mathrm{C}$.`,
      ],
      steps: [
        `$\\dfrac{${numTex(v1)}}{${numTex(v2)}} = ${gamma ** tens} = ${gamma}^{${tens}}$.`,
        `Cần giảm $${tens} \\cdot 10 = ${10 * tens}\\,^\\circ\\mathrm{C}$, tức còn $${t1} - ${10 * tens} = ${t2}\\,^\\circ\\mathrm{C}$.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  averageRateSkill,
  rateLawSkill,
  compressionSkill,
  heatingSkill,
  temperatureSkill,
];
