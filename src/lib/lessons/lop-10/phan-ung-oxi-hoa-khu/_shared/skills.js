/**
 * Generated drill skills for the review of the redox chapter: oxidation
 * numbers, electrons of one half-reaction, coefficients and electrons of a
 * balanced equation, and amounts from the electron balance.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import {
  OX_CASES,
  REACTIONS,
  allSpecies,
  equationTex,
  formulaTex,
  halfElectrons,
  halfTex,
  onText,
  oxSumTex,
  schemeTex,
  solveOx,
  totalElectrons,
} from './redox.js';

/**
 * The two half-reactions of a reaction with their multipliers, as worked steps.
 * @param {import('./redox.js').Reaction} r
 */
function halfSteps(r) {
  return [
    `Quá trình oxi hoá: $${halfTex(r.lose, 'lose', halfElectrons(r.lose))}$, nhân với $${r.lose.times}$.`,
    `Quá trình khử: $${halfTex(r.gain, 'gain', halfElectrons(r.gain))}$, nhân với $${r.gain.times}$.`,
  ];
}

/** @type {import('#lib/core/drill.js').Skill} */
export const oxNumberSkill = {
  id: 'so-oxi-hoa',
  label: 'Số oxi hoá trong chất, ion',
  make(rand) {
    const c = pick(
      rand,
      OX_CASES.filter((x) => x.formula !== 'Cl2'),
    );
    const x = solveOx(c);
    return {
      prompt: `Tính số oxi hoá của ${c.target} trong $${formulaTex(c.formula)}$. Số âm thì viết cả dấu trừ, ví dụ $-3$.`,
      answer: x,
      hints: [
        'Tổng số oxi hoá của các nguyên tử bằng $0$ với phân tử, bằng điện tích với ion.',
        `Đặt $x$ là số oxi hoá của ${c.target}: $${oxSumTex(c, null)}$.`,
      ],
      steps: [
        `Đặt $x$ là số oxi hoá của ${c.target}, ta có tổng: $${oxSumTex(c, null)}$.`,
        `Giải ra $x = ${x > 0 ? '+' : ''}${x}$: số oxi hoá của ${c.target} là ${onText(x)}.`,
      ],
    };
  },
};

const CHANGES = [
  { el: 'S', from: 6, to: 4 },
  { el: 'S', from: -2, to: 4 },
  { el: 'N', from: 5, to: 2 },
  { el: 'N', from: 5, to: 4 },
  { el: 'N', from: -3, to: 2 },
  { el: 'Mn', from: 7, to: 2 },
  { el: 'Fe', from: 3, to: 2 },
  { el: 'Fe', from: 0, to: 3 },
  { el: 'Al', from: 0, to: 3 },
  { el: 'Cr', from: 6, to: 3 },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const electronsSkill = {
  id: 'electron-nguyen-tu',
  label: 'Số electron nhường, nhận',
  make(rand) {
    const { el, from, to } = pick(rand, CHANGES);
    const n = Math.abs(from - to);
    return {
      prompt: `Khi số oxi hoá của ${el} đổi từ ${onText(from)} thành ${onText(to)}, mỗi nguyên tử ${el} trao đổi bao nhiêu electron?`,
      answer: n,
      hints: ['Số electron trao đổi bằng độ chênh lệch giữa hai số oxi hoá.'],
      steps: [
        to > from
          ? `Số oxi hoá tăng nên nguyên tử ${el} nhường electron.`
          : `Số oxi hoá giảm nên nguyên tử ${el} nhận electron.`,
        `Độ chênh lệch là ${n}, vậy mỗi nguyên tử trao đổi ${n} electron.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const coefficientSkill = {
  id: 'he-so',
  label: 'Hệ số trong phương trình',
  make(rand) {
    const r = pick(rand, REACTIONS);
    const list = allSpecies(r);
    const i = Math.floor(rand() * list.length);
    return {
      prompt: `Lập phương trình của phản ứng $${schemeTex(r)}$ với các hệ số nguyên, tối giản. Hệ số của $${formulaTex(list[i].formula)}$ là bao nhiêu?`,
      answer: r.final[i],
      hints: [
        'Xác định hai nguyên tố đổi số oxi hoá, viết quá trình oxi hoá và quá trình khử.',
        `Chọn hệ số để tổng electron nhường bằng tổng electron nhận: $${totalElectrons(r)}$ electron.`,
      ],
      steps: [...halfSteps(r), `Phương trình: $${equationTex(r)}$.`],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const totalElectronsSkill = {
  id: 'tong-electron',
  label: 'Tổng electron trao đổi',
  make(rand) {
    const r = pick(rand, REACTIONS);
    return {
      prompt: `Trong phương trình đã cân bằng với hệ số tối giản $${equationTex(r)}$, tổng số electron chất khử nhường là bao nhiêu?`,
      answer: totalElectrons(r),
      hints: [
        `Tìm hệ số của quá trình của nguyên tố ${r.lose.el} rồi nhân với số electron của quá trình đó.`,
      ],
      steps: [
        ...halfSteps(r),
        `Tổng electron nhường: $${r.lose.times} \\cdot ${halfElectrons(r.lose)} = ${totalElectrons(r)}$.`,
      ],
    };
  },
};

/**
 * Metals reacting with an acid: every amount gives a finite decimal answer.
 * @type {Array<{ metal: string, valence: number, acid: string, gas: string, drop: number, mols: number[] }>}
 */
const METALS = [
  { metal: 'Mg', valence: 2, acid: 'HNO3 loãng', gas: 'NO', drop: 3, mols: [0.15, 0.3, 0.6] },
  { metal: 'Al', valence: 3, acid: 'HNO3 loãng', gas: 'NO', drop: 3, mols: [0.1, 0.2, 0.4] },
  { metal: 'Cu', valence: 2, acid: 'HNO3 đặc', gas: 'NO2', drop: 1, mols: [0.1, 0.25, 0.5] },
  { metal: 'Cu', valence: 2, acid: 'H2SO4 đặc, nóng', gas: 'SO2', drop: 2, mols: [0.1, 0.2, 0.5] },
  { metal: 'Al', valence: 3, acid: 'H2SO4 đặc, nóng', gas: 'SO2', drop: 2, mols: [0.1, 0.2, 0.4] },
  { metal: 'Fe', valence: 3, acid: 'H2SO4 đặc, nóng', gas: 'SO2', drop: 2, mols: [0.1, 0.2, 0.4] },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const gasMolSkill = {
  id: 'so-mol-khi',
  label: 'Tính số mol theo electron',
  make(rand) {
    const m = pick(rand, METALS);
    const mol = pick(rand, m.mols);
    const electrons = tidy(mol * m.valence);
    const answer = tidy(electrons / m.drop);
    const acid = m.acid.split(' ');
    const rest = acid.slice(1).join(' ');
    return {
      prompt: `Cho $${numTex(mol)}$ mol ${m.metal} tác dụng hoàn toàn với dung dịch $${formulaTex(acid[0])}$ ${rest}, dư, sản phẩm khử duy nhất là khí $${formulaTex(m.gas)}$. Tính số mol khí thu được.`,
      answer,
      unit: 'mol',
      hints: [
        `Mỗi nguyên tử ${m.metal} nhường ${m.valence} electron; số mol electron nhường là $${numTex(mol)} \\cdot ${m.valence}$.`,
        `Mỗi phân tử $${formulaTex(m.gas)}$ tạo thành ứng với ${m.drop} electron nhận.`,
      ],
      steps: [
        `Số mol electron nhường: $${numTex(mol)} \\cdot ${m.valence} = ${numTex(electrons)}$ mol.`,
        `Tổng electron nhường bằng tổng electron nhận, nên số mol $${formulaTex(m.gas)}$ là $${numTex(electrons)} : ${m.drop} = ${numTex(answer)}$ mol.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  oxNumberSkill,
  electronsSkill,
  coefficientSkill,
  totalElectronsSkill,
  gasMolSkill,
];
