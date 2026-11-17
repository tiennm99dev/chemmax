/**
 * Generated drill skills for the chapter review: an alkali metal in water,
 * heating sodium hydrogencarbonate, carbon dioxide into limewater, burning
 * limestone with a yield, and the soda that softens hard water. Amounts are
 * drawn so every answer is a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

/** Molar volume of a gas at standard conditions (đkc: 25 °C, 1 bar), L/mol. */
export const MOLAR_VOLUME = 24.79;

const ALKALI = [
  { id: 'Na', molar: 23 },
  { id: 'K', molar: 39 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const waterSkill = {
  id: 'kim-loai-kiem-tac-dung-nuoc',
  label: 'Kim loại kiềm tác dụng với nước',
  make(rand) {
    const m = pick(rand, ALKALI);
    const n = pick(rand, [0.2, 0.4, 0.6, 0.8]);
    const mass = tidy(n * m.molar);
    const nH2 = tidy(n / 2);
    const answer = tidy(nH2 * MOLAR_VOLUME);
    return {
      prompt: `Cho $${numTex(mass)}$ g ${m.id} tác dụng hết với nước dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở đkc (L). (${m.id} = ${m.molar})`,
      answer,
      unit: 'L',
      hints: [
        `$2\\mathrm{${m.id}} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{${m.id}OH} + \\mathrm{H_2}$.`,
        '$n_{\\mathrm{H_2}} = \\dfrac{1}{2} n_{\\text{kim loại}}$; $V = n \\cdot 24{,}79$.',
      ],
      steps: [
        `$n_{\\mathrm{${m.id}}} = \\dfrac{${numTex(mass)}}{${m.molar}} = ${numTex(n)}$ mol.`,
        `$n_{\\mathrm{H_2}} = \\dfrac{${numTex(n)}}{2} = ${numTex(nH2)}$ mol.`,
        `$V = ${numTex(nH2)} \\cdot 24{,}79 = ${numTex(answer)}$ L.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const bakingSodaSkill = {
  id: 'nhiet-phan-nahco3',
  label: 'Nhiệt phân NaHCO₃',
  make(rand) {
    const n = pick(rand, [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
    const mass = tidy(n * 84);
    const answer = tidy((n / 2) * 106);
    return {
      prompt: `Nung $${numTex(mass)}$ g $\\mathrm{NaHCO_3}$ đến khối lượng không đổi. Tính khối lượng chất rắn còn lại (g). (Na = 23, C = 12, O = 16, H = 1)`,
      answer,
      unit: 'g',
      hints: [
        '$2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$.',
        'Chất rắn còn lại là $\\mathrm{Na_2CO_3}$, $M = 106$ g/mol.',
      ],
      steps: [
        `$n_{\\mathrm{NaHCO_3}} = \\dfrac{${numTex(mass)}}{84} = ${numTex(n)}$ mol.`,
        `$n_{\\mathrm{Na_2CO_3}} = \\dfrac{${numTex(n)}}{2} = ${numTex(tidy(n / 2))}$ mol.`,
        `$m = ${numTex(tidy(n / 2))} \\cdot 106 = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const limewaterSkill = {
  id: 'co2-vao-nuoc-voi',
  label: 'CO₂ tác dụng với nước vôi trong',
  make(rand) {
    const n = pick(rand, [0.1, 0.2, 0.3, 0.4]);
    const V = tidy(n * MOLAR_VOLUME);
    const answer = tidy(n * 100);
    return {
      prompt: `Dẫn $${numTex(V)}$ L khí $\\mathrm{CO_2}$ (đkc) vào dung dịch $\\mathrm{Ca(OH)_2}$ dư. Tính khối lượng kết tủa thu được (g). (Ca = 40, C = 12, O = 16)`,
      answer,
      unit: 'g',
      hints: [
        '$\\mathrm{Ca(OH)_2}$ dư nên chỉ tạo $\\mathrm{CaCO_3}$: $\\mathrm{CO_2} + \\mathrm{Ca(OH)_2} \\longrightarrow \\mathrm{CaCO_3}\\downarrow + \\mathrm{H_2O}$.',
      ],
      steps: [
        `$n_{\\mathrm{CO_2}} = \\dfrac{${numTex(V)}}{24{,}79} = ${numTex(n)}$ mol $= n_{\\mathrm{CaCO_3}}$.`,
        `$m_{\\mathrm{CaCO_3}} = ${numTex(n)} \\cdot 100 = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const limeKilnSkill = {
  id: 'nung-da-voi',
  label: 'Nung đá vôi',
  make(rand) {
    const mass = pick(rand, [10, 20, 25, 50]);
    const yieldPct = pick(rand, [80, 90, 100]);
    const answer = tidy((mass * 56 * yieldPct) / 10000);
    return {
      prompt: `Nung $${mass}$ tấn $\\mathrm{CaCO_3}$ với hiệu suất $${yieldPct}\\%$. Tính khối lượng vôi sống CaO thu được (tấn).`,
      answer,
      unit: 'tấn',
      hints: [
        '$\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$: 100 tấn $\\mathrm{CaCO_3}$ cho 56 tấn CaO.',
        'Nhân lượng lí thuyết với hiệu suất.',
      ],
      steps: [
        `Lí thuyết: $m_{\\mathrm{CaO}} = ${mass} \\cdot \\dfrac{56}{100} = ${numTex(tidy((mass * 56) / 100))}$ tấn.`,
        `Thực tế: $${numTex(tidy((mass * 56) / 100))} \\cdot ${yieldPct}\\% = ${numTex(answer)}$ tấn.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const softeningSkill = {
  id: 'lam-mem-nuoc-cung',
  label: 'Làm mềm nước cứng bằng Na₂CO₃',
  make(rand) {
    const ca = pick(rand, [0.01, 0.02, 0.03, 0.04]);
    const mg = pick(rand, [0.01, 0.02, 0.03]);
    const total = tidy(ca + mg);
    const answer = tidy(total * 106);
    return {
      prompt: `Một mẫu nước cứng chứa $${numTex(ca)}$ mol $\\mathrm{Ca^{2+}}$ và $${numTex(mg)}$ mol $\\mathrm{Mg^{2+}}$. Tính khối lượng $\\mathrm{Na_2CO_3}$ tối thiểu cần để làm mềm mẫu nước (g). (Na = 23, C = 12, O = 16)`,
      answer,
      unit: 'g',
      hints: [
        '$\\mathrm{Ca^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{CaCO_3}\\downarrow$ và $\\mathrm{Mg^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{MgCO_3}\\downarrow$.',
        '$n_{\\mathrm{Na_2CO_3}} = n_{\\mathrm{Ca^{2+}}} + n_{\\mathrm{Mg^{2+}}}$.',
      ],
      steps: [
        `$n_{\\mathrm{Na_2CO_3}} = ${numTex(ca)} + ${numTex(mg)} = ${numTex(total)}$ mol.`,
        `$m = ${numTex(total)} \\cdot 106 = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  waterSkill,
  bakingSodaSkill,
  limewaterSkill,
  limeKilnSkill,
  softeningSkill,
];
