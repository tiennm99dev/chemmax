/**
 * Generated drill skills for the chapter review: silver from a sugar and
 * the Tollens reagent, fermenting glucose, hydrolysing starch and making
 * cellulose trinitrate. Amounts are drawn so every answer is a short exact
 * decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import {
  M_AG,
  M_CO2,
  M_DISACCHARIDE,
  M_ETHANOL,
  M_GLUCOSE,
  M_TRINITRATE,
  M_UNIT,
} from '../_shared/sugars.js';

const SILVER_CASES = [
  { name: 'glucose', molar: M_GLUCOSE, ag: 2, how: 'tác dụng với lượng dư thuốc thử Tollens' },
  { name: 'fructose', molar: M_GLUCOSE, ag: 2, how: 'tác dụng với lượng dư thuốc thử Tollens' },
  { name: 'maltose', molar: M_DISACCHARIDE, ag: 2, how: 'tác dụng với lượng dư thuốc thử Tollens' },
  {
    name: 'saccharose',
    molar: M_DISACCHARIDE,
    ag: 4,
    how: 'thuỷ phân hoàn toàn trong môi trường acid, trung hoà acid rồi cho tác dụng với lượng dư thuốc thử Tollens',
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const silverSkill = {
  id: 'trang-bac',
  label: 'Phản ứng với thuốc thử Tollens',
  make(rand) {
    const c = pick(rand, SILVER_CASES);
    const n = pick(rand, [0.02, 0.05, 0.1, 0.15]);
    const m = tidy(n * c.molar);
    const ag = tidy(c.ag * n * M_AG);
    const why =
      c.name === 'saccharose'
        ? 'Mỗi mol saccharose thuỷ phân tạo $1$ mol glucose và $1$ mol fructose, mỗi mol monosaccharide tạo $2$ mol Ag.'
        : c.name === 'maltose'
          ? 'Mỗi phân tử maltose có một nhóm OH hemiacetal mở vòng được: $1$ mol maltose tạo $2$ mol Ag.'
          : `Mỗi mol ${c.name} tạo $2$ mol Ag.`;
    return {
      prompt: `Cho dung dịch chứa $${numTex(m)}$ g ${c.name} ${c.how}. Tính khối lượng bạc thu được (theo g).`,
      answer: ag,
      unit: 'g',
      hints: [why, `$M_{\\text{${c.name}}} = ${c.molar}$ g/mol, $M_{\\mathrm{Ag}} = 108$ g/mol.`],
      steps: [
        `$n_{\\text{${c.name}}} = \\dfrac{${numTex(m)}}{${c.molar}} = ${numTex(n)}$ mol.`,
        `$n_{\\mathrm{Ag}} = ${c.ag} \\cdot ${numTex(n)} = ${numTex(tidy(c.ag * n))}$ mol.`,
        `$m_{\\mathrm{Ag}} = ${numTex(tidy(c.ag * n))} \\cdot 108 = ${numTex(ag)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const fermentSkill = {
  id: 'len-men',
  label: 'Lên men glucose',
  make(rand) {
    const n = pick(rand, [0.1, 0.2, 0.5, 1]);
    const h = pick(rand, [50, 60, 75, 80, 90]);
    const askEthanol = rand() < 0.5;
    const m = tidy(n * M_GLUCOSE);
    const got = tidy((2 * n * h) / 100);
    const molar = askEthanol ? M_ETHANOL : M_CO2;
    const what = askEthanol ? 'ethanol' : 'khí $\\mathrm{CO_2}$';
    const sym = askEthanol ? '\\mathrm{C_2H_5OH}' : '\\mathrm{CO_2}';
    const answer = tidy(got * molar);
    return {
      prompt: `Lên men $${numTex(m)}$ g glucose thành ethanol với hiệu suất $${h}\\%$. Tính khối lượng ${what} thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        '$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$.',
        'Nhân số mol tính theo phương trình với hiệu suất.',
      ],
      steps: [
        `$n_{\\text{glucose}} = \\dfrac{${numTex(m)}}{180} = ${numTex(n)}$ mol.`,
        `$n_{${sym}} = 2 \\cdot ${numTex(n)} \\cdot ${numTex(h / 100)} = ${numTex(got)}$ mol.`,
        `$m = ${numTex(got)} \\cdot ${molar} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const starchSkill = {
  id: 'thuy-phan-tinh-bot',
  label: 'Thuỷ phân tinh bột',
  make(rand) {
    const n = pick(rand, [0.1, 0.2, 0.5, 1, 2]);
    const h = pick(rand, [60, 75, 80, 90, 100]);
    const m = tidy(n * M_UNIT);
    const got = tidy((n * h) / 100);
    const answer = tidy(got * M_GLUCOSE);
    return {
      prompt: `Thuỷ phân $${numTex(m)}$ g tinh bột với hiệu suất $${h}\\%$. Tính khối lượng glucose thu được (theo g).`,
      answer,
      unit: 'g',
      hints: ['Mỗi gốc $\\mathrm{C_6H_{10}O_5}$ ($M = 162$) tạo một phân tử glucose ($M = 180$).'],
      steps: [
        `$n_{\\mathrm{C_6H_{10}O_5}} = \\dfrac{${numTex(m)}}{162} = ${numTex(n)}$ mol.`,
        `$n_{\\text{glucose}} = ${numTex(n)} \\cdot ${numTex(h / 100)} = ${numTex(got)}$ mol.`,
        `$m_{\\text{glucose}} = ${numTex(got)} \\cdot 180 = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const trinitrateSkill = {
  id: 'cellulose-trinitrate',
  label: 'Cellulose trinitrate',
  make(rand) {
    const n = pick(rand, [0.1, 0.2, 0.3, 0.5]);
    const h = pick(rand, [60, 80, 90, 100]);
    const m = tidy(n * M_UNIT);
    const got = tidy((n * h) / 100);
    const answer = tidy(got * M_TRINITRATE);
    return {
      prompt: `Cho $${numTex(m)}$ g cellulose tác dụng với nitric acid dư (xúc tác $\\mathrm{H_2SO_4}$ đặc), hiệu suất $${h}\\%$. Tính khối lượng cellulose trinitrate thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        'Mỗi gốc $\\mathrm{C_6H_7O_2(OH)_3}$ ($162$) tạo một gốc $\\mathrm{C_6H_7O_2(ONO_2)_3}$ ($297$).',
      ],
      steps: [
        `$n_{\\text{gốc}} = \\dfrac{${numTex(m)}}{162} = ${numTex(n)}$ mol.`,
        `Số mol gốc trinitrate: $${numTex(n)} \\cdot ${numTex(h / 100)} = ${numTex(got)}$ mol.`,
        `$m = ${numTex(got)} \\cdot 297 = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [silverSkill, fermentSkill, starchSkill, trinitrateSkill];
