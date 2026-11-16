/**
 * Generated drill skills for the chapter review: saponification of an
 * ester, finding a saturated ester from the NaOH it takes, saponification
 * and hydrogenation of fats, and the yield of an esterification. Amounts are
 * drawn so every answer is a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import { FATS, M_GLYCEROL, allEsters, ester, texFormula } from '../_shared/ester.js';

const SATURATED = allEsters().filter((e) => e.saturated && e.acid.id !== 'benzoate');

/** @type {import('#lib/core/drill.js').Skill} */
export const saponifySkill = {
  id: 'xa-phong-hoa-ester',
  label: 'Xà phòng hoá ester',
  make(rand) {
    const e = pick(rand, SATURATED);
    const n = pick(rand, [0.05, 0.1, 0.15, 0.2]);
    const m = tidy(n * e.molar);
    const salt = tidy(n * e.saltMolar);
    return {
      prompt: `Xà phòng hoá hoàn toàn $${numTex(m)}$ g ${e.name} $${texFormula(e.formula)}$ bằng dung dịch NaOH vừa đủ. Tính khối lượng muối thu được (theo g).`,
      answer: salt,
      unit: 'g',
      hints: [
        `Muối là $${texFormula(e.saltFormula)}$; ester đơn chức phản ứng với NaOH theo tỉ lệ $1 : 1$.`,
        `$M_{\\text{ester}} = ${e.molar}$, $M_{\\text{muối}} = ${e.saltMolar}$ g/mol.`,
      ],
      steps: [
        `$n_{\\text{ester}} = \\dfrac{${numTex(m)}}{${e.molar}} = ${numTex(n)}$ mol $= n_{\\text{muối}}$.`,
        `$m_{\\text{muối}} = ${numTex(n)} \\cdot ${e.saltMolar} = ${numTex(salt)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const formulaSkill = {
  id: 'cong-thuc-ester',
  label: 'Tìm công thức ester no, đơn chức',
  make(rand) {
    const c = pick(rand, [2, 3, 4, 5, 6]);
    const n = pick(rand, [0.05, 0.1, 0.2]);
    const molar = 14 * c + 32;
    const m = tidy(n * molar);
    const ml = tidy(n * 1000);
    return {
      prompt: `Xà phòng hoá hoàn toàn $${numTex(m)}$ g ester no, đơn chức, mạch hở X cần vừa đủ $${numTex(ml)}$ mL dung dịch NaOH $1$ M. Phân tử X có bao nhiêu nguyên tử carbon?`,
      answer: c,
      hints: [
        '$n_{\\text{ester}} = n_{\\mathrm{NaOH}}$; từ đó tính $M$ của X.',
        'X có dạng $\\mathrm{C_nH_{2n}O_2}$, $M = 14n + 32$.',
      ],
      steps: [
        `$n_{\\mathrm{NaOH}} = ${numTex(n)} \\cdot 1 = ${numTex(n)}$ mol $= n_{\\text{X}}$.`,
        `$M_{\\text{X}} = \\dfrac{${numTex(m)}}{${numTex(n)}} = ${molar}$.`,
        `$14n + 32 = ${molar}$, nên $n = ${c}$: X là $\\mathrm{C_{${c}}H_{${2 * c}}O_2}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const fatSkill = {
  id: 'xa-phong-hoa-chat-beo',
  label: 'Xà phòng hoá chất béo',
  make(rand) {
    const fat = pick(rand, FATS);
    const n = pick(rand, [0.01, 0.02, 0.05, 0.1]);
    const m = tidy(n * fat.molar);
    const askGlycerol = rand() < 0.5;
    const answer = askGlycerol ? tidy(n * M_GLYCEROL) : tidy(3 * n * fat.saltMolar);
    const what = askGlycerol ? 'glycerol' : `muối $${texFormula(fat.salt)}$`;
    return {
      prompt: `Xà phòng hoá hoàn toàn $${numTex(m)}$ g ${fat.name} $${texFormula(fat.formula)}$ bằng dung dịch NaOH. Tính khối lượng ${what} thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        `$M_{\\text{${fat.name}}} = ${fat.molar}$ g/mol.`,
        'Một mol chất béo cho một mol glycerol và ba mol muối của acid béo.',
      ],
      steps: [
        `$n = \\dfrac{${numTex(m)}}{${fat.molar}} = ${numTex(n)}$ mol.`,
        askGlycerol
          ? `$m_{\\mathrm{C_3H_5(OH)_3}} = ${numTex(n)} \\cdot ${M_GLYCEROL} = ${numTex(answer)}$ g.`
          : `$m_{\\text{muối}} = 3 \\cdot ${numTex(n)} \\cdot ${fat.saltMolar} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const hydrogenSkill = {
  id: 'hydrogen-hoa',
  label: 'Hydrogen hoá chất béo',
  make(rand) {
    const fat = pick(
      rand,
      FATS.filter((f) => f.double > 0),
    );
    const n = pick(rand, [0.01, 0.02, 0.05, 0.1]);
    const m = tidy(n * fat.molar);
    const h2 = tidy(3 * fat.double * n);
    return {
      prompt: `Hydrogen hoá hoàn toàn $${numTex(m)}$ g ${fat.name} $${texFormula(fat.formula)}$ (xúc tác Ni, $t^\\circ$). Tính số mol $\\mathrm{H_2}$ đã phản ứng.`,
      answer: h2,
      hints: [
        `Gốc ${fat.acid} có ${fat.double} liên kết C=C; mỗi liên kết C=C cộng một phân tử $\\mathrm{H_2}$.`,
        `$M_{\\text{${fat.name}}} = ${fat.molar}$ g/mol.`,
      ],
      steps: [
        `$n = \\dfrac{${numTex(m)}}{${fat.molar}} = ${numTex(n)}$ mol.`,
        `Mỗi phân tử có $3 \\cdot ${fat.double} = ${3 * fat.double}$ liên kết C=C ở gốc acid, nên $n_{\\mathrm{H_2}} = ${3 * fat.double} \\cdot ${numTex(n)} = ${numTex(h2)}$ mol.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const yieldSkill = {
  id: 'hieu-suat-ester-hoa',
  label: 'Hiệu suất ester hoá',
  make(rand) {
    const e = ester('acetate', pick(rand, ['methyl', 'ethyl', 'isoamyl']));
    const n = pick(rand, [0.1, 0.2]);
    const h = pick(rand, [50, 60, 62.5, 75, 80]);
    const m = tidy(n * 60);
    const got = tidy((n * h * e.molar) / 100);
    return {
      prompt: `Đun nóng $${numTex(m)}$ g acetic acid với lượng dư ${e.alcohol.alcohol} (xúc tác $\\mathrm{H_2SO_4}$ đặc), thu được $${numTex(got)}$ g ${e.name}. Tính hiệu suất phản ứng ester hoá (theo %).`,
      answer: h,
      unit: '%',
      hints: [
        'Alcohol dư nên tính hiệu suất theo acetic acid.',
        `$M_{\\mathrm{CH_3COOH}} = 60$, $M_{\\text{ester}} = ${e.molar}$ g/mol.`,
      ],
      steps: [
        `$n_{\\text{acid}} = \\dfrac{${numTex(m)}}{60} = ${numTex(n)}$ mol; $n_{\\text{ester}} = \\dfrac{${numTex(got)}}{${e.molar}} = ${numTex(tidy((n * h) / 100))}$ mol.`,
        `$H = \\dfrac{${numTex(tidy((n * h) / 100))}}{${numTex(n)}} \\cdot 100\\% = ${numTex(h)}\\%$.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [saponifySkill, formulaSkill, fatSkill, hydrogenSkill, yieldSkill];
