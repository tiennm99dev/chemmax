/**
 * Generated drill skills for the review of the chemical bonding chapter:
 * electrons of an ion, electrons a non-metal lacks, |Δχ|, counting polar bonds,
 * and σ and π bonds.
 */
import { pick, shuffle } from '#lib/core/drill.js';
import { numTex } from '#lib/core/number-format.js';
import { outerElectrons } from '#lib/domain/elements.js';
import { molecule } from '#lib/domain/molecule.js';
import { BOND_LABELS, bondType, chi, deltaChi, sigmaPi } from './bonds.js';

/** @type {Array<{ tex: string, z: number, charge: number }>} */
const IONS = [
  { tex: 'Na^+', z: 11, charge: 1 },
  { tex: 'K^+', z: 19, charge: 1 },
  { tex: 'Mg^{2+}', z: 12, charge: 2 },
  { tex: 'Ca^{2+}', z: 20, charge: 2 },
  { tex: 'Al^{3+}', z: 13, charge: 3 },
  { tex: 'F^-', z: 9, charge: -1 },
  { tex: 'Cl^-', z: 17, charge: -1 },
  { tex: 'O^{2-}', z: 8, charge: -2 },
  { tex: 'S^{2-}', z: 16, charge: -2 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const ionElectronsSkill = {
  id: 'electron-ion',
  label: 'Bài 11. Số electron của ion',
  make(rand) {
    const ion = pick(rand, IONS);
    const electrons = ion.z - ion.charge;
    const size = Math.abs(ion.charge);
    return {
      prompt: `Ion $\\mathrm{${ion.tex}}$ (nguyên tố có $Z = ${ion.z}$) có bao nhiêu electron?`,
      answer: electrons,
      hints: ['Ion dương đã nhường electron, ion âm đã nhận electron.'],
      steps: [
        `Nguyên tử có ${ion.z} electron.`,
        ion.charge > 0
          ? `Ion dương đã nhường ${size} electron: $${ion.z} - ${size} = ${electrons}$.`
          : `Ion âm đã nhận ${size} electron: $${ion.z} + ${size} = ${electrons}$.`,
      ],
    };
  },
};

/** @type {Array<{ symbol: string, z: number }>} */
const NONMETALS = [
  { symbol: 'F', z: 9 },
  { symbol: 'Cl', z: 17 },
  { symbol: 'O', z: 8 },
  { symbol: 'S', z: 16 },
  { symbol: 'N', z: 7 },
  { symbol: 'P', z: 15 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const octetNeedSkill = {
  id: 'octet',
  label: 'Bài 10. Số electron còn thiếu',
  make(rand) {
    const { symbol, z } = pick(rand, NONMETALS);
    const outer = outerElectrons(z);
    return {
      prompt: `Nguyên tử ${symbol} ($Z = ${z}$) cần thêm bao nhiêu electron để đạt octet?`,
      answer: 8 - outer,
      hints: ['Đếm số electron lớp ngoài cùng từ cấu hình electron.'],
      steps: [`${symbol} có ${outer} electron lớp ngoài cùng.`, `$8 - ${outer} = ${8 - outer}$.`],
    };
  },
};

const PAIRS = [
  ['H', 'Cl'],
  ['H', 'Br'],
  ['H', 'O'],
  ['H', 'N'],
  ['H', 'S'],
  ['C', 'O'],
  ['C', 'H'],
  ['N', 'O'],
  ['Na', 'Cl'],
  ['K', 'F'],
  ['Mg', 'O'],
  ['Al', 'Cl'],
  ['Ca', 'O'],
];

/** @type {import('#lib/core/drill.js').Skill} */
export const deltaChiSkill = {
  id: 'hieu-do-am-dien',
  label: 'Bài 12. Hiệu độ âm điện',
  make(rand) {
    const [a, b] = pick(rand, PAIRS);
    const big = Math.max(chi(a), chi(b));
    const small = Math.min(chi(a), chi(b));
    const delta = deltaChi(a, b);
    return {
      prompt: `Cho độ âm điện của ${a} là $${numTex(chi(a))}$, của ${b} là $${numTex(chi(b))}$. Tính hiệu độ âm điện $|\\Delta\\chi|$ của liên kết ${a}–${b}.`,
      answer: delta,
      hints: ['Lấy độ âm điện lớn trừ độ âm điện nhỏ.'],
      steps: [`$|\\Delta\\chi| = ${numTex(big)} - ${numTex(small)} = ${numTex(delta)}$.`],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const polarCountSkill = {
  id: 'dem-phan-cuc',
  label: 'Bài 12. Nhận biết liên kết phân cực',
  make(rand) {
    const chosen = shuffle(rand, PAIRS).slice(0, 4);
    const lines = chosen.map(([a, b]) => {
      const delta = deltaChi(a, b);
      return { a, b, delta, type: bondType(delta) };
    });
    const count = lines.filter((l) => l.type === 'polar').length;
    const symbols = [...new Set(lines.flatMap((l) => [l.a, l.b]))];
    const given = symbols.map((s) => `${s}: $${numTex(chi(s))}$`).join('; ');
    return {
      prompt: `Trong các liên kết ${lines.map((l) => `${l.a}–${l.b}`).join(', ')}, có bao nhiêu liên kết cộng hoá trị phân cực? Độ âm điện: ${given}.`,
      answer: count,
      hints: ['Liên kết cộng hoá trị phân cực có $0{,}4 \\le |\\Delta\\chi| < 1{,}7$.'],
      steps: [
        ...lines.map(
          (l) =>
            `${l.a}–${l.b}: $|\\Delta\\chi| = ${numTex(l.delta)}$, ${BOND_LABELS[l.type].toLowerCase()}.`,
        ),
        `Có ${count} liên kết cộng hoá trị phân cực.`,
      ],
    };
  },
};

/** @type {Array<{ id: string, tex: string }>} */
const COUNTED = [
  { id: 'n2', tex: 'N_2' },
  { id: 'o2', tex: 'O_2' },
  { id: 'co2', tex: 'CO_2' },
  { id: 'c2h4', tex: 'C_2H_4' },
  { id: 'c2h2', tex: 'C_2H_2' },
  { id: 'nh3', tex: 'NH_3' },
  { id: 'ch4', tex: 'CH_4' },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const sigmaPiSkill = {
  id: 'sigma-pi',
  label: 'Bài 12. Liên kết σ và π',
  make(rand) {
    const { id, tex } = pick(rand, COUNTED);
    const mol = /** @type {import('#lib/domain/molecule.js').Molecule} */ (molecule(id));
    const { sigma, pi } = sigmaPi(mol);
    const wantSigma = rand() < 0.5;
    return {
      prompt: `Phân tử $\\mathrm{${tex}}$ có bao nhiêu liên kết ${wantSigma ? 'σ' : 'π'}?`,
      answer: wantSigma ? sigma : pi,
      hints: ['Liên kết đơn có 1σ, liên kết đôi có 1σ và 1π, liên kết ba có 1σ và 2π.'],
      steps: [
        `Phân tử có ${mol.bonds.length} cặp nguyên tử liên kết với nhau, nên có ${sigma} liên kết σ.`,
        `Các cặp electron chung thêm vào cho ${pi} liên kết π.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  octetNeedSkill,
  ionElectronsSkill,
  deltaChiSkill,
  polarCountSkill,
  sigmaPiSkill,
];
