/**
 * Generated drill skills for the review of the atomic structure chapter:
 * particle counts from a total and a difference, neutrons from an atomic
 * symbol, the share of an isotope from the average atomic mass, and the
 * outer and unpaired electrons of the first 20 elements.
 */
import { int, pick } from '#lib/core/drill.js';
import { numTex } from '#lib/core/number-format.js';
import {
  electronConfiguration,
  element,
  outerElectrons,
  subshellCapacity,
} from '#lib/domain/elements.js';

/** Common isotopes as [Z, N], one per element. */
export const NUCLIDES = /** @type {Array<[number, number]>} */ ([
  [8, 8],
  [9, 10],
  [11, 12],
  [12, 12],
  [13, 14],
  [15, 16],
  [16, 16],
  [17, 18],
  [19, 20],
  [20, 20],
  [26, 30],
  [29, 34],
  [30, 35],
]);

/** @param {number} z */
const symbol = (z) => element(z)?.symbol ?? '?';

/**
 * Unpaired electrons of a ground-state atom, by Hund's rule in each subshell.
 * @param {number} z
 */
export function unpairedElectrons(z) {
  return electronConfiguration(z).reduce((n, s) => {
    const orbitals = subshellCapacity(s.l) / 2;
    return n + (s.electrons <= orbitals ? s.electrons : 2 * orbitals - s.electrons);
  }, 0);
}

/** Configuration as upright TeX: 1s²2s²2p³ → \mathrm{1s^{2}2s^{2}2p^{3}}. @param {number} z */
export function configTex(z) {
  const text = electronConfiguration(z)
    .sort((a, b) => a.n - b.n || a.l - b.l)
    .map((s) => `${s.n}${'spdf'[s.l]}^{${s.electrons}}`)
    .join('');
  return `\\mathrm{${text}}`;
}

/** @type {import('#lib/core/drill.js').Skill} */
export const particleSkill = {
  id: 'hat',
  label: 'Bài 1. Số hạt trong nguyên tử',
  make(rand) {
    const [z, n] = pick(rand, NUCLIDES);
    const total = 2 * z + n;
    const diff = 2 * z - n;
    const askZ = rand() < 0.5;
    return {
      prompt: `Nguyên tử X có tổng số hạt proton, neutron và electron là $${total}$; số hạt mang điện nhiều hơn số hạt không mang điện là $${diff}$. ${askZ ? 'Tìm số proton của X.' : 'Tìm số neutron của X.'}`,
      answer: askZ ? z : n,
      hints: [
        'Gọi số proton là $Z$ (cũng là số electron) và số neutron là $N$.',
        `Lập hệ $2Z + N = ${total}$ và $2Z - N = ${diff}$.`,
      ],
      steps: [
        `Gọi $Z$ là số proton (bằng số electron), $N$ là số neutron: $2Z + N = ${total}$ và $2Z - N = ${diff}$.`,
        `Cộng hai phương trình: $4Z = ${total + diff}$, nên $Z = ${z}$.`,
        `$N = ${total} - 2 \\cdot ${z} = ${n}$. Nguyên tử X là ${symbol(z)}.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const neutronSkill = {
  id: 'ki-hieu',
  label: 'Bài 2. Kí hiệu nguyên tử',
  make(rand) {
    const [z, n] = pick(rand, NUCLIDES);
    const a = z + n;
    const tex = `{}^{${a}}_{${z}}\\mathrm{${symbol(z)}}`;
    const askN = rand() < 0.6;
    return askN
      ? {
          prompt: `Nguyên tử $${tex}$ có bao nhiêu neutron?`,
          answer: n,
          hints: ['Số trên là số khối $A$, số dưới là $Z$.'],
          steps: [`$N = A - Z = ${a} - ${z} = ${n}$.`],
        }
      : {
          prompt: `Nguyên tử $${tex}$ có tổng số hạt proton, neutron và electron là bao nhiêu?`,
          answer: 2 * z + n,
          hints: ['Số proton bằng số electron bằng $Z$; số neutron bằng $A - Z$.'],
          steps: [
            `Số p $=$ số e $= ${z}$; số n $= ${a} - ${z} = ${n}$.`,
            `Tổng: $${z} + ${z} + ${n} = ${2 * z + n}$.`,
          ],
        };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const isotopeShareSkill = {
  id: 'dong-vi',
  label: 'Bài 2. Phần trăm đồng vị',
  make(rand) {
    const a1 = int(rand, 10, 80);
    const k = pick(rand, [1, 2]);
    const a2 = a1 + k;
    const x = int(rand, 11, 89);
    const sum = a1 * x + a2 * (100 - x);
    const avg = sum / 100;
    const kx = k === 1 ? 'x' : `${k}x`;
    return {
      prompt: `Nguyên tố X có hai đồng vị ${'$'}{}^{${a1}}\\mathrm{X}$ và ${'$'}{}^{${a2}}\\mathrm{X}$; nguyên tử khối trung bình của X là $${numTex(avg, 2)}$. Đồng vị ${'$'}{}^{${a1}}\\mathrm{X}$ chiếm bao nhiêu phần trăm số nguyên tử?`,
      answer: x,
      unit: '%',
      hints: [
        `Gọi $x$ là phần trăm của ${'$'}{}^{${a1}}\\mathrm{X}$; đồng vị kia chiếm $(100 - x)\\%$.`,
        `Giải $\\dfrac{${a1}x + ${a2}(100 - x)}{100} = ${numTex(avg, 2)}$.`,
      ],
      steps: [
        `$\\dfrac{${a1}x + ${a2}(100 - x)}{100} = ${numTex(avg, 2)}$, tức $${numTex(a2 * 100)} - ${kx} = ${numTex(sum)}$.`,
        k === 1 ? `Vậy $x = ${x}$.` : `$${kx} = ${numTex(a2 * 100 - sum)}$, nên $x = ${x}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const shellSkill = {
  id: 'cau-hinh',
  label: 'Bài 3. Cấu hình electron',
  make(rand) {
    const z = int(rand, 3, 20);
    const askOuter = rand() < 0.5;
    const config = configTex(z);
    const name = element(z)?.name ?? '';
    return askOuter
      ? {
          prompt: `Nguyên tử ${name} có $Z = ${z}$. Lớp ngoài cùng của nguyên tử này có bao nhiêu electron?`,
          answer: outerElectrons(z),
          hints: ['Viết cấu hình electron theo trật tự mức năng lượng (4s trước 3d).'],
          steps: [`Cấu hình: $${config}$.`, `Lớp ngoài cùng có $${outerElectrons(z)}$ electron.`],
        }
      : {
          prompt: `Nguyên tử ${name} có $Z = ${z}$. Ở trạng thái cơ bản, nguyên tử này có bao nhiêu electron độc thân?`,
          answer: unpairedElectrons(z),
          hints: [
            'Viết cấu hình electron, rồi biểu diễn phân lớp cuối cùng bằng ô orbital.',
            'Quy tắc Hund: mỗi ô nhận một electron trước rồi mới ghép đôi.',
          ],
          steps: [
            `Cấu hình: $${config}$.`,
            `Theo quy tắc Hund, số electron độc thân là $${unpairedElectrons(z)}$.`,
          ],
        };
  },
};

export const REVIEW_SKILLS = [particleSkill, neutronSkill, isotopeShareSkill, shellSkill];
