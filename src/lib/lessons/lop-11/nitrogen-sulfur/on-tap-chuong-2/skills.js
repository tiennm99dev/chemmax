/**
 * Generated drill skills for the chapter review: the gas a metal gives with a
 * concentrated or dilute acid, ammonia from ammonium salts, sulfuric acid made
 * from its raw materials, and the sulfur dioxide from burning coal. Every
 * question is built from values that give a short exact answer.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

/** Molar volume of a gas at standard conditions (25 °C, 1 bar), in L/mol. */
const MOLAR_VOLUME = 24.79;

/** Moles of gas per mole of copper for each acid. */
const COPPER_ACIDS = [
  {
    acid: 'dung dịch $\\mathrm{HNO_3}$ đặc',
    gas: '\\mathrm{NO_2}',
    equation:
      '\\mathrm{Cu} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{2NO_2} + \\mathrm{2H_2O}',
    copper: 1,
    made: 2,
  },
  {
    acid: 'dung dịch $\\mathrm{HNO_3}$ loãng',
    gas: '\\mathrm{NO}',
    equation:
      '\\mathrm{3Cu} + \\mathrm{8HNO_3} \\rightarrow \\mathrm{3Cu(NO_3)_2} + \\mathrm{2NO} + \\mathrm{4H_2O}',
    copper: 3,
    made: 2,
  },
  {
    acid: 'dung dịch $\\mathrm{H_2SO_4}$ đặc, nóng',
    gas: '\\mathrm{SO_2}',
    equation:
      '\\mathrm{Cu} + \\mathrm{2H_2SO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{SO_2} + \\mathrm{2H_2O}',
    copper: 1,
    made: 1,
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const copperSkill = {
  id: 'kim-loai-acid',
  label: 'Thể tích khí khi Cu tác dụng với acid',
  make(rand) {
    const c = pick(rand, COPPER_ACIDS);
    const gas = pick(rand, [0.1, 0.2, 0.3, 0.4]);
    const copper = tidy((gas * c.copper) / c.made);
    const mass = tidy(copper * 64);
    const volume = tidy(gas * MOLAR_VOLUME);
    return {
      prompt: `Cho $${numTex(mass)}$ g Cu tác dụng hết với ${c.acid}, dư. Tính thể tích khí $${c.gas}$ duy nhất ở điều kiện chuẩn, theo L.`,
      answer: volume,
      unit: 'L',
      hints: [
        'Viết phương trình để biết sản phẩm khử và tỉ lệ số mol.',
        `$${c.equation}$; ở điều kiện chuẩn, thể tích mol khí là $24{,}79$ L/mol.`,
      ],
      steps: [
        `$n_{\\mathrm{Cu}} = \\dfrac{${numTex(mass)}}{64} = ${numTex(copper)}$ mol.`,
        `$${c.equation}$, nên $n_{${c.gas}} = ${numTex(gas)}$ mol.`,
        `$V = ${numTex(gas)} \\cdot 24{,}79 = ${numTex(volume)}$ L.`,
      ],
    };
  },
};

const AMMONIUM_SALTS = [
  { tex: '\\mathrm{NH_4Cl}', molar: 53.5, ammonia: 1 },
  { tex: '\\mathrm{NH_4NO_3}', molar: 80, ammonia: 1 },
  { tex: '\\mathrm{(NH_4)_2SO_4}', molar: 132, ammonia: 2 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const ammoniumSkill = {
  id: 'muoi-ammonium',
  label: 'Thể tích ammonia từ muối ammonium',
  make(rand) {
    const salt = pick(rand, AMMONIUM_SALTS);
    const ammonia = pick(rand, [0.1, 0.2, 0.4]);
    const moles = tidy(ammonia / salt.ammonia);
    const mass = tidy(moles * salt.molar);
    const volume = tidy(ammonia * MOLAR_VOLUME);
    return {
      prompt: `Đun $${numTex(mass)}$ g $${salt.tex}$ với dung dịch NaOH dư đến khi phản ứng hoàn toàn. Tính thể tích khí $\\mathrm{NH_3}$ thu được ở điều kiện chuẩn, theo L.`,
      answer: volume,
      unit: 'L',
      hints: [
        `Mỗi đơn vị công thức $${salt.tex}$ có $${salt.ammonia}$ ion $\\mathrm{NH_4^+}$.`,
        '$\\mathrm{NH_4^+} + \\mathrm{OH^-} \\rightarrow \\mathrm{NH_3} + \\mathrm{H_2O}$.',
      ],
      steps: [
        `$M = ${numTex(salt.molar)}$ g/mol nên $n_{\\text{muối}} = \\dfrac{${numTex(mass)}}{${numTex(salt.molar)}} = ${numTex(moles)}$ mol.`,
        `$n_{\\mathrm{NH_3}} = ${salt.ammonia === 1 ? '' : `${salt.ammonia} \\cdot `}${numTex(moles)} = ${numTex(ammonia)}$ mol.`,
        `$V = ${numTex(ammonia)} \\cdot 24{,}79 = ${numTex(volume)}$ L.`,
      ],
    };
  },
};

const RAW_MATERIALS = [
  { tex: '\\mathrm{S}', name: 'sulfur', molar: 32, acid: 1, masses: [1.6, 3.2, 6.4] },
  { tex: '\\mathrm{FeS_2}', name: 'pyrite', molar: 120, acid: 2, masses: [1.2, 2.4, 6] },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const acidSkill = {
  id: 'san-xuat-acid',
  label: 'Khối lượng acid sản xuất được',
  make(rand) {
    const raw = pick(rand, RAW_MATERIALS);
    const mass = pick(rand, raw.masses);
    const percent = pick(rand, [50, 75, 80]);
    const full = tidy((mass * raw.acid * 98) / raw.molar);
    const made = tidy((full * percent) / 100);
    return {
      prompt: `Từ $${numTex(mass)}$ tấn ${raw.name} $${raw.tex}$, sản xuất $\\mathrm{H_2SO_4}$ với hiệu suất toàn quá trình $${percent}\\%$. Tính khối lượng $\\mathrm{H_2SO_4}$ thu được, theo tấn.`,
      answer: made,
      unit: 'tấn',
      hints: [
        `Bảo toàn nguyên tố S: mỗi $${raw.tex}$ cho $${raw.acid}$ phân tử $\\mathrm{H_2SO_4}$.`,
        'Tính khối lượng theo lí thuyết rồi nhân với hiệu suất.',
      ],
      steps: [
        `Theo lí thuyết: $m = ${numTex(mass)} \\cdot \\dfrac{${raw.acid === 1 ? '' : `${raw.acid} \\cdot `}98}{${raw.molar}} = ${numTex(full)}$ tấn.`,
        `Với hiệu suất $${percent}\\%$: $${numTex(full)} \\cdot ${numTex(percent / 100)} = ${numTex(made)}$ tấn.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const coalSkill = {
  id: 'dot-than',
  label: 'Lượng sulfur dioxide khi đốt than',
  make(rand) {
    const coal = pick(rand, [100, 200, 500, 1000]);
    const percent = pick(rand, [1, 2, 3]);
    const sulfur = (coal * percent) / 100;
    const dioxide = sulfur * 2;
    return {
      prompt: `Một nhà máy đốt $${numTex(coal)}$ tấn than chứa $${percent}\\%$ sulfur về khối lượng. Nếu không xử lí khí thải, khối lượng $\\mathrm{SO_2}$ thải ra là bao nhiêu tấn?`,
      answer: dioxide,
      unit: 'tấn',
      hints: [
        'Tính khối lượng sulfur trong than trước.',
        '$M_{\\mathrm{SO_2}} = 64$ và $M_{\\mathrm{S}} = 32$.',
      ],
      steps: [
        `Khối lượng S: $${numTex(coal)} \\cdot ${percent}\\% = ${numTex(sulfur)}$ tấn.`,
        `$m_{\\mathrm{SO_2}} = ${numTex(sulfur)} \\cdot \\dfrac{64}{32} = ${numTex(dioxide)}$ tấn.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [copperSkill, ammoniumSkill, acidSkill, coalSkill];
