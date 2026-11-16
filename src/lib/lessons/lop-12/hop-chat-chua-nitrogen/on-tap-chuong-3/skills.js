/**
 * Generated drill skills for the chapter review: salts of amines, salts of
 * amino acids, the mass of a peptide and its hydrolysis, and the number of
 * units of one amino acid in a protein. Amounts are drawn so every answer is
 * a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import { M_WATER, amino, peptideMass, peptideName } from '../_shared/amino.js';

const M_HCL = 36.5;
const M_NA_GAIN = 22;

const AMINES = [
  { name: 'methylamine', formula: '\\mathrm{CH_3NH_2}', salt: '\\mathrm{CH_3NH_3Cl}', molar: 31 },
  {
    name: 'ethylamine',
    formula: '\\mathrm{C_2H_5NH_2}',
    salt: '\\mathrm{C_2H_5NH_3Cl}',
    molar: 45,
  },
  { name: 'aniline', formula: '\\mathrm{C_6H_5NH_2}', salt: '\\mathrm{C_6H_5NH_3Cl}', molar: 93 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const amineSaltSkill = {
  id: 'muoi-amine',
  label: 'Amine tác dụng với HCl',
  make(rand) {
    const a = pick(rand, AMINES);
    const n = pick(rand, [0.05, 0.1, 0.2, 0.3]);
    const m = tidy(n * a.molar);
    const salt = tidy(a.molar + M_HCL);
    const answer = tidy(n * salt);
    return {
      prompt: `Cho $${numTex(m)}$ g ${a.name} tác dụng hết với dung dịch HCl dư. Tính khối lượng muối thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        `$${a.formula} + \\mathrm{HCl} \\rightarrow ${a.salt}$: tỉ lệ mol $1 : 1$.`,
        'Khối lượng muối bằng khối lượng amine cộng khối lượng HCl đã phản ứng.',
      ],
      steps: [
        `$n_{${a.formula}} = \\dfrac{${numTex(m)}}{${a.molar}} = ${numTex(n)}$ mol $= n_{\\mathrm{HCl}}$.`,
        `$M_{${a.salt}} = ${a.molar} + 36{,}5 = ${numTex(salt)}$ g/mol.`,
        `$m_{\\text{muối}} = ${numTex(n)} \\cdot ${numTex(salt)} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const aminoSaltSkill = {
  id: 'muoi-amino-acid',
  label: 'Tính lưỡng tính của amino acid',
  make(rand) {
    const a = amino(pick(rand, ['gly', 'ala', 'val']));
    const n = pick(rand, [0.05, 0.1, 0.15, 0.2]);
    const withAcid = rand() < 0.5;
    const m = tidy(n * a.molar);
    const salt = tidy(a.molar + (withAcid ? M_HCL : M_NA_GAIN));
    const answer = tidy(n * salt);
    const reagent = withAcid ? 'HCl' : 'NaOH';
    return {
      prompt: `Cho $${numTex(m)}$ g ${a.name} tác dụng vừa đủ với dung dịch ${reagent}. Tính khối lượng muối thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        withAcid
          ? 'Nhóm $\\mathrm{{-}NH_2}$ cộng một phân tử HCl: $M_{\\text{muối}} = M + 36{,}5$.'
          : 'Nhóm $\\mathrm{{-}COOH}$ đổi H thành Na: $M_{\\text{muối}} = M + 22$.',
        `$M_{\\text{${a.name}}} = ${a.molar}$ g/mol.`,
      ],
      steps: [
        `$n = \\dfrac{${numTex(m)}}{${a.molar}} = ${numTex(n)}$ mol.`,
        `$M_{\\text{muối}} = ${a.molar} + ${withAcid ? '36{,}5' : '22'} = ${numTex(salt)}$ g/mol.`,
        `$m_{\\text{muối}} = ${numTex(n)} \\cdot ${numTex(salt)} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const peptideSkill = {
  id: 'peptide',
  label: 'Phân tử khối và thuỷ phân peptide',
  make(rand) {
    const k = pick(rand, [2, 3, 4]);
    /** @type {import('../_shared/amino.js').AminoId[]} */
    const ids = Array.from({ length: k }, () =>
      pick(rand, /** @type {const} */ (['gly', 'ala', 'val'])),
    );
    const name = peptideName(ids);
    const M = peptideMass(ids);
    const sum = ids.reduce((s, id) => s + amino(id).molar, 0);
    const sumTex = ids.map((id) => amino(id).molar).join(' + ');
    if (rand() < 0.5) {
      return {
        prompt: `Tính phân tử khối của peptide ${name}.`,
        answer: M,
        hints: [
          `Peptide có ${k} gốc nên có ${k - 1} liên kết peptide.`,
          'Mỗi liên kết peptide tách ra một phân tử nước ($18$).',
        ],
        steps: [
          `Tổng phân tử khối các amino acid: $${sumTex} = ${sum}$.`,
          `$M = ${sum} - ${k - 1} \\cdot 18 = ${M}$.`,
        ],
      };
    }
    const n = pick(rand, [0.05, 0.1, 0.2]);
    const m = tidy(n * M);
    const answer = tidy(n * sum);
    return {
      prompt: `Thuỷ phân hoàn toàn $${numTex(m)}$ g peptide ${name}. Tính tổng khối lượng amino acid thu được (theo g).`,
      answer,
      unit: 'g',
      hints: [
        `$M_{\\text{${name}}} = ${sum} - ${k - 1} \\cdot 18 = ${M}$.`,
        `Mỗi mol peptide cần ${k - 1} mol nước; bảo toàn khối lượng.`,
      ],
      steps: [
        `$M = ${sum} - ${k - 1} \\cdot 18 = ${M}$, $n = \\dfrac{${numTex(m)}}{${M}} = ${numTex(n)}$ mol.`,
        `$m_{\\mathrm{H_2O}} = ${numTex(n)} \\cdot ${k - 1} \\cdot 18 = ${numTex(tidy(n * (k - 1) * M_WATER))}$ g.`,
        `$m_{\\text{amino acid}} = ${numTex(m)} + ${numTex(tidy(n * (k - 1) * M_WATER))} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const unitsSkill = {
  id: 'mat-xich',
  label: 'Số mắt xích trong protein',
  make(rand) {
    const a = amino(pick(rand, ['gly', 'ala', 'val']));
    const M = pick(rand, [40000, 50000, 80000, 100000]);
    const units = pick(rand, [50, 100, 120, 150, 200, 250]);
    const nX = pick(rand, [0.005, 0.01, 0.02]);
    const m = tidy(nX * M);
    const mAa = tidy(nX * units * a.molar);
    return {
      prompt: `Thuỷ phân hoàn toàn $${numTex(m)}$ g protein X (phân tử khối $${numTex(M)}$) thu được $${numTex(mAa)}$ g ${a.name}. Tính số mắt xích ${a.name} trong một phân tử X.`,
      answer: units,
      hints: [
        'Tính số mol X và số mol amino acid.',
        'Số mắt xích bằng số mol amino acid chia số mol X.',
      ],
      steps: [
        `$n_X = \\dfrac{${numTex(m)}}{${numTex(M)}} = ${numTex(nX)}$ mol.`,
        `$n_{\\text{${a.name}}} = \\dfrac{${numTex(mAa)}}{${a.molar}} = ${numTex(tidy(nX * units))}$ mol.`,
        `Số mắt xích $= \\dfrac{${numTex(tidy(nX * units))}}{${numTex(nX)}} = ${units}$.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [amineSaltSkill, aminoSaltSkill, peptideSkill, unitsSkill];
