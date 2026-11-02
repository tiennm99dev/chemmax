/**
 * Generated drill skills for the chapter review: K_C from equilibrium
 * concentrations, the pH of strong acids and bases, and titration results.
 * Every question is built from values that give a short exact answer.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

/** @type {import('#lib/core/drill.js').Skill} */
export const constantSkill = {
  id: 'hang-so-can-bang',
  label: 'Tính hằng số cân bằng',
  make(rand) {
    const hi = pick(rand, [0.2, 0.4, 0.6, 0.8]);
    const h2 = pick(rand, [0.1, 0.2, 0.4, 0.5]);
    const i2 = pick(rand, [0.1, 0.2, 0.4, 0.5]);
    return {
      prompt: `Cân bằng $\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}$ có $[\\mathrm{H_2}] = ${numTex(h2)}$ M, $[\\mathrm{I_2}] = ${numTex(i2)}$ M, $[\\mathrm{HI}] = ${numTex(hi)}$ M. Tính $K_C$.`,
      answer: tidy((hi * hi) / (h2 * i2)),
      hints: [
        'Nồng độ $\\mathrm{HI}$ có số mũ bằng hệ số của nó trong phương trình.',
        '$K_C = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}$.',
      ],
      steps: [
        '$K_C = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}$.',
        `$K_C = \\dfrac{${numTex(hi)}^2}{${numTex(h2)} \\cdot ${numTex(i2)}} = ${numTex(tidy((hi * hi) / (h2 * i2)))}$.`,
      ],
    };
  },
};

const ACIDS = [
  { tex: '\\mathrm{HCl}', protons: 1 },
  { tex: '\\mathrm{HNO_3}', protons: 1 },
  { tex: '\\mathrm{H_2SO_4}', protons: 2 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const acidSkill = {
  id: 'ph-acid',
  label: 'Tính pH của dung dịch acid mạnh',
  make(rand) {
    const acid = pick(rand, ACIDS);
    const ph = pick(rand, [1, 2, 3]);
    const h = tidy(10 ** -ph);
    const c = tidy(h / acid.protons);
    const note = acid.protons === 2 ? ' (coi acid phân li hoàn toàn cả hai nấc)' : '';
    return {
      prompt: `Tính pH của dung dịch $${acid.tex}$ $${numTex(c)}$ M${note}.`,
      answer: ph,
      hints: [
        'Acid mạnh phân li hoàn toàn; tính $[\\mathrm{H^+}]$ trước.',
        'Viết $[\\mathrm{H^+}]$ dưới dạng $10^{-a}$, khi đó $\\mathrm{pH} = a$.',
      ],
      steps: [
        `$[\\mathrm{H^+}] = ${acid.protons === 1 ? '' : `${acid.protons} \\cdot `}${numTex(c)} = 10^{-${ph}}$ M.`,
        `$\\mathrm{pH} = ${ph}$.`,
      ],
    };
  },
};

const BASES = [
  { tex: '\\mathrm{NaOH}', hydroxides: 1 },
  { tex: '\\mathrm{KOH}', hydroxides: 1 },
  { tex: '\\mathrm{Ba(OH)_2}', hydroxides: 2 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const baseSkill = {
  id: 'ph-base',
  label: 'Tính pH của dung dịch base mạnh',
  make(rand) {
    const base = pick(rand, BASES);
    const power = pick(rand, [1, 2, 3]);
    const oh = tidy(10 ** -power);
    const c = tidy(oh / base.hydroxides);
    return {
      prompt: `Tính pH của dung dịch $${base.tex}$ $${numTex(c)}$ M.`,
      answer: 14 - power,
      hints: [
        'Tính $[\\mathrm{OH^-}]$ trước.',
        'Dùng $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$ để tìm $[\\mathrm{H^+}]$.',
      ],
      steps: [
        `$[\\mathrm{OH^-}] = ${base.hydroxides === 1 ? '' : `${base.hydroxides} \\cdot `}${numTex(c)} = 10^{-${power}}$ M.`,
        `$[\\mathrm{H^+}] = \\dfrac{10^{-14}}{10^{-${power}}} = 10^{-${14 - power}}$ M, nên $\\mathrm{pH} = ${14 - power}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const titrationSkill = {
  id: 'chuan-do',
  label: 'Tính kết quả chuẩn độ',
  make(rand) {
    const va = pick(rand, [10, 20, 25]);
    const cb = pick(rand, [0.1, 0.2]);
    const vb = pick(rand, [5, 8, 10, 12, 15]);
    const ca = tidy((cb * vb) / va);
    return {
      prompt: `Chuẩn độ $${va}$ mL dung dịch $\\mathrm{HCl}$ cần vừa đủ $${vb}$ mL dung dịch $\\mathrm{NaOH}$ $${numTex(cb)}$ M. Tính nồng độ dung dịch $\\mathrm{HCl}$, theo M.`,
      answer: ca,
      unit: 'M',
      hints: [
        'Tại điểm tương đương, số mol $\\mathrm{HCl}$ bằng số mol $\\mathrm{NaOH}$.',
        '$C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
      ],
      steps: [
        '$C_{\\mathrm{HCl}} = \\dfrac{C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}}{V_{\\mathrm{HCl}}}$.',
        `$C_{\\mathrm{HCl}} = \\dfrac{${numTex(cb)} \\cdot ${vb}}{${va}} = ${numTex(ca)}$ M.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [constantSkill, acidSkill, baseSkill, titrationSkill];
