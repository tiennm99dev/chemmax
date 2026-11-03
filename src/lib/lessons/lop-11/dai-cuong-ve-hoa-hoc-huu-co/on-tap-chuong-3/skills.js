/**
 * Generated drill skills for the chapter review: finding n from the simplest
 * formula, counting carbons from a mass percentage, the mass of carbon in the
 * carbon dioxide from burning a sample, and counting structural isomers. All
 * answers come from a table of real compounds, so they are short and exact.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

/** A compound with its simplest formula, as TeX, and the masses that link them. */
const FORMULAS = [
  { simple: '\\mathrm{CH_2O}', unit: 30, mass: 60, molecular: '\\mathrm{C_2H_4O_2}' },
  { simple: '\\mathrm{CH_2O}', unit: 30, mass: 180, molecular: '\\mathrm{C_6H_{12}O_6}' },
  { simple: '\\mathrm{CH}', unit: 13, mass: 78, molecular: '\\mathrm{C_6H_6}' },
  { simple: '\\mathrm{CH_2}', unit: 14, mass: 56, molecular: '\\mathrm{C_4H_8}' },
  { simple: '\\mathrm{C_2H_5}', unit: 29, mass: 58, molecular: '\\mathrm{C_4H_{10}}' },
  { simple: '\\mathrm{C_5H_6O}', unit: 82, mass: 164, molecular: '\\mathrm{C_{10}H_{12}O_2}' },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const factorSkill = {
  id: 'tim-n',
  label: 'Tìm n từ công thức đơn giản nhất',
  make(rand) {
    const f = pick(rand, FORMULAS);
    const n = f.mass / f.unit;
    return {
      prompt: `Một chất có công thức đơn giản nhất là $${f.simple}$. Trên phổ MS, peak có m/z lớn nhất là $${f.mass}$. Công thức phân tử có dạng $(${f.simple})_n$. Tìm $n$.`,
      answer: n,
      hints: [
        'Peak có m/z lớn nhất cho biết phân tử khối.',
        `Khối lượng của $${f.simple}$ là $${f.unit}$. Lấy phân tử khối chia cho số này.`,
      ],
      steps: [
        `Phân tử khối bằng $${f.mass}$; khối lượng của $${f.simple}$ là $${f.unit}$.`,
        `$n = \\dfrac{${f.mass}}{${f.unit}} = ${n}$, công thức phân tử là $${f.molecular}$.`,
      ],
    };
  },
};

/** Percent carbon rounded to two decimals, with the carbons it stands for. */
const CARBON_SHARES = [
  { name: 'Hợp chất X', percent: 92.31, mass: 78, carbons: 6 },
  { name: 'Hợp chất X', percent: 52.17, mass: 46, carbons: 2 },
  { name: 'Hợp chất X', percent: 40, mass: 60, carbons: 2 },
  { name: 'Hợp chất X', percent: 40, mass: 180, carbons: 6 },
  { name: 'Eugenol', percent: 73.17, mass: 164, carbons: 10 },
  { name: 'Hợp chất X', percent: 85.71, mass: 42, carbons: 3 },
  { name: 'Hợp chất X', percent: 82.76, mass: 58, carbons: 4 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const carbonSkill = {
  id: 'dem-carbon',
  label: 'Số nguyên tử C từ phần trăm khối lượng',
  make(rand) {
    const c = pick(rand, CARBON_SHARES);
    const carbonMass = c.carbons * 12;
    return {
      prompt: `${c.name} có $${numTex(c.percent)}\\%$ khối lượng là carbon, phân tử khối là $${c.mass}$. Một phân tử có bao nhiêu nguyên tử carbon?`,
      answer: c.carbons,
      hints: [
        'Tính khối lượng carbon trong một phân tử, rồi chia cho $12$.',
        `Khối lượng carbon bằng $${c.mass} \\cdot \\dfrac{${numTex(c.percent)}}{100}$.`,
      ],
      steps: [
        `Khối lượng carbon trong một phân tử: $${c.mass} \\cdot \\dfrac{${numTex(c.percent)}}{100} \\approx ${carbonMass}$.`,
        `Số nguyên tử C: $\\dfrac{${carbonMass}}{12} = ${c.carbons}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const burningSkill = {
  id: 'dot-chay',
  label: 'Khối lượng C từ khí CO₂ thu được',
  make(rand) {
    const mass = pick(rand, [4.4, 8.8, 13.2, 17.6, 22]);
    const moles = tidy(mass / 44);
    const carbon = tidy(moles * 12);
    return {
      prompt: `Đốt cháy hoàn toàn một mẫu chất hữu cơ, thu được $${numTex(mass)}$ g $\\mathrm{CO_2}$. Tính khối lượng carbon có trong mẫu, theo g.`,
      answer: carbon,
      unit: 'g',
      hints: [
        'Mọi nguyên tử carbon trong mẫu đều chuyển vào $\\mathrm{CO_2}$.',
        '$44$ g $\\mathrm{CO_2}$ chứa $12$ g C.',
      ],
      steps: [
        `$n_{\\mathrm{CO_2}} = \\dfrac{${numTex(mass)}}{44} = ${numTex(moles)}$ mol.`,
        `$m_{\\mathrm{C}} = ${numTex(moles)} \\cdot 12 = ${numTex(carbon)}$ g.`,
      ],
    };
  },
};

const ISOMER_COUNTS = [
  {
    formula: '\\mathrm{C_4H_{10}}',
    count: 2,
    list: '$\\mathrm{CH_3CH_2CH_2CH_3}$ và $\\mathrm{CH_3CH(CH_3)CH_3}$',
  },
  {
    formula: '\\mathrm{C_5H_{12}}',
    count: 3,
    list: 'mạch $5$ carbon, mạch $4$ carbon có một nhánh và mạch $3$ carbon có hai nhánh',
  },
  {
    formula: '\\mathrm{C_6H_{14}}',
    count: 5,
    list: 'mạch $6$ carbon; hai mạch $5$ carbon có một nhánh; hai mạch $4$ carbon có hai nhánh',
  },
  {
    formula: '\\mathrm{C_2H_6O}',
    count: 2,
    list: '$\\mathrm{CH_3CH_2OH}$ và $\\mathrm{CH_3OCH_3}$',
  },
  {
    formula: '\\mathrm{C_3H_8O}',
    count: 3,
    list: 'hai alcohol $\\mathrm{CH_3CH_2CH_2OH}$, $\\mathrm{CH_3CH(OH)CH_3}$ và một ether $\\mathrm{CH_3OCH_2CH_3}$',
  },
  {
    formula: '\\mathrm{C_4H_{10}O}',
    count: 7,
    list: 'bốn alcohol và ba ether',
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const isomerSkill = {
  id: 'dong-phan',
  label: 'Đếm đồng phân cấu tạo',
  make(rand) {
    const s = pick(rand, ISOMER_COUNTS);
    return {
      prompt: `Công thức $${s.formula}$ có bao nhiêu đồng phân cấu tạo mạch hở?`,
      answer: s.count,
      hints: [
        'Xét lần lượt các mạch carbon, từ dài nhất trở xuống.',
        'Nếu có O, xét cả nhóm –OH (alcohol) và cầu –O– (ether).',
      ],
      steps: [`Các đồng phân gồm: ${s.list}.`, `Tổng cộng $${s.count}$ đồng phân cấu tạo.`],
    };
  },
};

export const REVIEW_SKILLS = [factorSkill, carbonSkill, burningSkill, isomerSkill];
