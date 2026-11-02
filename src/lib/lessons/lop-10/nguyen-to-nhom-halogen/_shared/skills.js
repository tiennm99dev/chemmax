/**
 * Generated drill skills for the review of the halogen chapter. Masses and
 * volumes come out as short exact decimals, so typed answers can be compared
 * exactly.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

const GAS = 24.79;

const OX_CASES = [
  {
    tex: 'HClO',
    target: 'Cl',
    others: [
      ['H', 1, 1],
      ['O', 1, -2],
    ],
  },
  {
    tex: 'HClO_2',
    target: 'Cl',
    others: [
      ['H', 1, 1],
      ['O', 2, -2],
    ],
  },
  {
    tex: 'HClO_3',
    target: 'Cl',
    others: [
      ['H', 1, 1],
      ['O', 3, -2],
    ],
  },
  {
    tex: 'HClO_4',
    target: 'Cl',
    others: [
      ['H', 1, 1],
      ['O', 4, -2],
    ],
  },
  {
    tex: 'NaClO',
    target: 'Cl',
    others: [
      ['Na', 1, 1],
      ['O', 1, -2],
    ],
  },
  {
    tex: 'KClO_3',
    target: 'Cl',
    others: [
      ['K', 1, 1],
      ['O', 3, -2],
    ],
  },
  {
    tex: 'HBrO',
    target: 'Br',
    others: [
      ['H', 1, 1],
      ['O', 1, -2],
    ],
  },
  {
    tex: 'KBrO_3',
    target: 'Br',
    others: [
      ['K', 1, 1],
      ['O', 3, -2],
    ],
  },
  {
    tex: 'HIO_3',
    target: 'I',
    others: [
      ['H', 1, 1],
      ['O', 3, -2],
    ],
  },
  {
    tex: 'NaIO_4',
    target: 'I',
    others: [
      ['Na', 1, 1],
      ['O', 4, -2],
    ],
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const oxNumberSkill = {
  id: 'so-oxi-hoa-halogen',
  label: 'Số oxi hoá của halogen trong hợp chất',
  make(rand) {
    const c = pick(rand, OX_CASES);
    const sum = c.others.reduce((total, [, count, ox]) => total + Number(count) * Number(ox), 0);
    const answer = -sum;
    const terms = c.others.map(([, count, ox]) => {
      const value = Number(ox) < 0 ? `(${ox})` : `(+${ox})`;
      return count === 1 ? value : `${count} \\cdot ${value}`;
    });
    return {
      prompt: `Tính số oxi hoá của ${c.target} trong $\\mathrm{${c.tex}}$.`,
      answer,
      hints: [
        'Tổng số oxi hoá của các nguyên tử trong phân tử bằng $0$.',
        'H, Na, K có số oxi hoá $+1$; O có số oxi hoá $-2$.',
      ],
      steps: [
        `Đặt $x$ là số oxi hoá của ${c.target}: $${terms[0]} + x + ${terms[1]} = 0$.`,
        `Giải ra $x = +${answer}$.`,
      ],
    };
  },
};

const SILVER_CASES = [
  { salt: 'NaCl', solid: 'AgCl', saltMass: 58.5, solidMass: 143.5, color: 'trắng' },
  { salt: 'NaBr', solid: 'AgBr', saltMass: 103, solidMass: 188, color: 'vàng nhạt' },
  { salt: 'NaI', solid: 'AgI', saltMass: 150, solidMass: 235, color: 'vàng' },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const precipitateSkill = {
  id: 'khoi-luong-ket-tua',
  label: 'Khối lượng kết tủa silver halide',
  make(rand) {
    const c = pick(rand, SILVER_CASES);
    const n = pick(rand, [0.05, 0.1, 0.2, 0.3]);
    const given = tidy(n * c.saltMass);
    const answer = tidy(n * c.solidMass);
    return {
      prompt: `Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch chứa $${numTex(given)}$ g $\\mathrm{${c.salt}}$. Tính khối lượng kết tủa ${c.color} thu được, theo g. Cho $M_{\\mathrm{${c.salt}}} = ${numTex(c.saltMass)}$ g/mol, $M_{\\mathrm{${c.solid}}} = ${numTex(c.solidMass)}$ g/mol.`,
      answer,
      unit: 'g',
      hints: ['Muối ban đầu và kết tủa có cùng số mol, vì tỉ lệ phản ứng là $1 : 1$.'],
      steps: [
        `$n = \\dfrac{${numTex(given)}}{${numTex(c.saltMass)}} = ${numTex(n)}$ mol.`,
        `$m_{\\mathrm{${c.solid}}} = ${numTex(n)} \\cdot ${numTex(c.solidMass)} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

const OXIDANTS = [
  {
    tex: 'MnO_2',
    mass: 87,
    equation:
      '\\mathrm{MnO_2} + 4\\mathrm{HCl} \\rightarrow \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}',
    perMol: 1,
    amounts: [0.1, 0.2, 0.3, 0.4],
    ratio: '$1$ mol $\\mathrm{MnO_2}$ tạo $1$ mol $\\mathrm{Cl_2}$',
  },
  {
    tex: 'KMnO_4',
    mass: 158,
    equation:
      '2\\mathrm{KMnO_4} + 16\\mathrm{HCl} \\rightarrow 2\\mathrm{KCl} + 2\\mathrm{MnCl_2} + 5\\mathrm{Cl_2} + 8\\mathrm{H_2O}',
    perMol: 2.5,
    amounts: [0.04, 0.08, 0.12, 0.16],
    ratio: '$2$ mol $\\mathrm{KMnO_4}$ tạo $5$ mol $\\mathrm{Cl_2}$',
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const chlorineSkill = {
  id: 'dieu-che-chlorine',
  label: 'Thể tích chlorine điều chế được',
  make(rand) {
    const o = pick(rand, OXIDANTS);
    const n = pick(rand, o.amounts);
    const given = tidy(n * o.mass);
    const chlorine = tidy(n * o.perMol);
    const answer = tidy(chlorine * GAS);
    return {
      prompt: `Cho $${numTex(given)}$ g $\\mathrm{${o.tex}}$ tác dụng hết với dung dịch HCl đặc. Tính thể tích khí $\\mathrm{Cl_2}$ thu được ở điều kiện chuẩn, theo L. Cho $M_{\\mathrm{${o.tex}}} = ${o.mass}$ g/mol, $1$ mol khí chiếm $24{,}79$ L.`,
      answer,
      unit: 'L',
      hints: [`Viết phương trình: ${o.ratio}.`],
      steps: [
        `$${o.equation}$.`,
        `$n_{\\mathrm{${o.tex}}} = ${numTex(n)}$ mol, nên $n_{\\mathrm{Cl_2}} = ${numTex(chlorine)}$ mol.`,
        `$V = ${numTex(chlorine)} \\cdot 24{,}79 = ${numTex(answer)}$ L.`,
      ],
    };
  },
};

const DISPLACEMENTS = [
  { free: 'Cl_2', salt: 'NaBr', saltMass: 103, out: 'Br_2', outMass: 160, left: 'NaCl' },
  { free: 'Cl_2', salt: 'NaI', saltMass: 150, out: 'I_2', outMass: 254, left: 'NaCl' },
  { free: 'Br_2', salt: 'NaI', saltMass: 150, out: 'I_2', outMass: 254, left: 'NaBr' },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const displacementSkill = {
  id: 'phan-ung-day',
  label: 'Phản ứng đẩy halogen',
  make(rand) {
    const d = pick(rand, DISPLACEMENTS);
    const n = pick(rand, [0.1, 0.2, 0.4]);
    const given = tidy(n * d.saltMass);
    const half = tidy(n / 2);
    const answer = tidy(half * d.outMass);
    return {
      prompt: `Cho $\\mathrm{${d.free}}$ vừa đủ tác dụng hoàn toàn với dung dịch chứa $${numTex(given)}$ g $\\mathrm{${d.salt}}$. Tính khối lượng $\\mathrm{${d.out}}$ sinh ra, theo g. Cho $M_{\\mathrm{${d.salt}}} = ${d.saltMass}$ g/mol, $M_{\\mathrm{${d.out}}} = ${d.outMass}$ g/mol.`,
      answer,
      unit: 'g',
      hints: ['$2$ mol muối sinh ra $1$ mol halogen đơn chất.'],
      steps: [
        `$\\mathrm{${d.free}} + 2\\mathrm{${d.salt}} \\rightarrow 2\\mathrm{${d.left}} + \\mathrm{${d.out}}$.`,
        `$n_{\\mathrm{${d.salt}}} = ${numTex(n)}$ mol, nên $n_{\\mathrm{${d.out}}} = ${numTex(half)}$ mol.`,
        `$m = ${numTex(half)} \\cdot ${d.outMass} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

const METALS = [
  { symbol: 'Zn', mass: 65, salt: 'ZnCl_2' },
  { symbol: 'Fe', mass: 56, salt: 'FeCl_2' },
  { symbol: 'Mg', mass: 24, salt: 'MgCl_2' },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const metalAcidSkill = {
  id: 'kim-loai-voi-hcl',
  label: 'Kim loại tác dụng với hydrochloric acid',
  make(rand) {
    const m = pick(rand, METALS);
    const n = pick(rand, [0.1, 0.2, 0.3]);
    const given = tidy(n * m.mass);
    const answer = tidy(n * GAS);
    return {
      prompt: `Hoà tan hết $${numTex(given)}$ g ${m.symbol} trong dung dịch HCl dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở điều kiện chuẩn, theo L. Cho $M_{\\mathrm{${m.symbol}}} = ${m.mass}$ g/mol, $1$ mol khí chiếm $24{,}79$ L.`,
      answer,
      unit: 'L',
      hints: ['Kim loại và $\\mathrm{H_2}$ có cùng số mol.'],
      steps: [
        `$\\mathrm{${m.symbol}} + 2\\mathrm{HCl} \\rightarrow \\mathrm{${m.salt}} + \\mathrm{H_2}$.`,
        `$n_{\\mathrm{H_2}} = n_{\\mathrm{${m.symbol}}} = ${numTex(n)}$ mol.`,
        `$V = ${numTex(n)} \\cdot 24{,}79 = ${numTex(answer)}$ L.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const mixtureSkill = {
  id: 'hon-hop-naf-nacl',
  label: 'Hỗn hợp NaF và NaCl với silver nitrate',
  make(rand) {
    const percent = pick(rand, [25, 40, 50, 60, 75]);
    const n = pick(rand, [0.1, 0.2]);
    const chloride = tidy(n * 58.5);
    const total = tidy((chloride * 100) / percent);
    const solid = tidy(n * 143.5);
    return {
      prompt: `Hỗn hợp NaF và NaCl có khối lượng $${numTex(total)}$ g. Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch hỗn hợp, thu được $${numTex(solid)}$ g kết tủa. Tính phần trăm khối lượng NaCl trong hỗn hợp. Cho $M_{\\mathrm{NaCl}} = 58{,}5$ g/mol, $M_{\\mathrm{AgCl}} = 143{,}5$ g/mol.`,
      answer: percent,
      unit: '%',
      hints: [
        'Ion $\\mathrm{F^-}$ không tạo kết tủa với $\\mathrm{AgNO_3}$, nên kết tủa chỉ có AgCl.',
      ],
      steps: [
        `$n_{\\mathrm{AgCl}} = \\dfrac{${numTex(solid)}}{143{,}5} = ${numTex(n)}$ mol, nên $m_{\\mathrm{NaCl}} = ${numTex(chloride)}$ g.`,
        `$\\%m_{\\mathrm{NaCl}} = \\dfrac{${numTex(chloride)}}{${numTex(total)}} \\cdot 100\\% = ${percent}\\%$.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  oxNumberSkill,
  precipitateSkill,
  chlorineSkill,
  displacementSkill,
  metalAcidSkill,
  mixtureSkill,
];
