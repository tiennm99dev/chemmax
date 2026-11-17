/**
 * Generated drill skills for the chapter review: the 3d electrons of a
 * transition metal ion, the charge of a complex, the charge of its central
 * atom, titrating iron(II) with permanganate, and dissolving silver chloride
 * in ammonia. Every answer is an integer or a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import {
  CENTRES,
  GEOMETRIES,
  LIGANDS,
  complexCharge,
  complexFormula,
  formulaTex,
} from '../_shared/complexes.js';
import { METALS, ionTex, ionValence, valenceOf, valenceTex } from '../_shared/transition.js';

/** @param {number} q */
const signed = (q) => (q > 0 ? `+${q}` : String(q));

/** @type {import('#lib/core/drill.js').Skill} */
export const dElectronSkill = {
  id: 'electron-3d-cua-ion',
  label: 'Electron 3d của ion',
  make(rand) {
    const m = pick(rand, METALS);
    const ox = pick(
      rand,
      m.states.map((s) => s.ox),
    );
    const atom = valenceOf(m.z);
    const ion = ionValence(m.z, ox);
    return {
      prompt: `Nguyên tử ${m.symbol} ($Z = ${m.z}$) có cấu hình $${valenceTex(atom)}$. Ion $\\mathrm{${ionTex(m.symbol, ox)}}$ có bao nhiêu electron ở phân lớp 3d?`,
      answer: ion.d,
      hints: ['Khi tạo ion, electron 4s bị nhường trước, sau đó mới đến electron 3d.'],
      steps: [
        `Nhường ${Math.min(ox, atom.s)} electron 4s${ox > atom.s ? ` rồi ${ox - atom.s} electron 3d` : ''}.`,
        `$\\mathrm{${ionTex(m.symbol, ox)}}$: $${valenceTex(ion)}$, có ${ion.d} electron 3d.`,
      ],
    };
  },
};

/** Ligand counts drawn with the shapes of the lesson. */
const COUNTS = [...new Set(Object.values(GEOMETRIES).map((g) => g.count))];

/** @type {import('#lib/core/drill.js').Skill} */
export const complexChargeSkill = {
  id: 'dien-tich-phuc-chat',
  label: 'Điện tích phức chất',
  make(rand) {
    const c = pick(rand, CENTRES);
    const l = pick(rand, LIGANDS);
    const n = pick(rand, COUNTS);
    const q = complexCharge(c.charge, [{ ligand: l.id, count: n }]);
    return {
      prompt: `Ion $\\mathrm{${c.symbol}^{${c.charge}+}}$ liên kết với ${n} phối tử $${formulaTex(l.ion)}$ tạo thành phức chất. Tính điện tích của phức chất.`,
      answer: q,
      hints: ['Điện tích phức chất = điện tích nguyên tử trung tâm + tổng điện tích các phối tử.'],
      steps: [
        `$(+${c.charge}) + ${n} \\cdot (${l.charge}) = ${q}$.`,
        `Phức chất $${formulaTex(complexFormula(c.symbol, c.charge, [{ ligand: l.id, count: n }]))}$ có điện tích $${signed(q)}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const centreChargeSkill = {
  id: 'dien-tich-nguyen-tu-trung-tam',
  label: 'Điện tích nguyên tử trung tâm',
  make(rand) {
    const c = pick(rand, CENTRES);
    const l = pick(
      rand,
      LIGANDS.filter((x) => x.charge !== 0),
    );
    const n = pick(rand, COUNTS);
    const formula = complexFormula(c.symbol, c.charge, [{ ligand: l.id, count: n }]);
    const q = complexCharge(c.charge, [{ ligand: l.id, count: n }]);
    return {
      prompt: `Tính điện tích (số oxi hoá) của nguyên tử trung tâm ${c.symbol} trong phức chất $${formulaTex(formula)}$.`,
      answer: c.charge,
      hints: [`Mỗi phối tử $${formulaTex(l.ion)}$ mang điện tích $${l.charge}$.`],
      steps: [
        `Gọi điện tích của ${c.symbol} là $x$: $x + ${n} \\cdot (${l.charge}) = ${q}$.`,
        `$x = ${q} + ${n} = ${c.charge}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const titrationSkill = {
  id: 'chuan-do-fe2',
  label: 'Chuẩn độ Fe²⁺ bằng KMnO₄',
  make(rand) {
    const vFe = pick(rand, [5, 10]);
    const c = 0.02;
    const vMn = pick(rand, [4, 4.5, 5, 6, 7.5, 8, 9.5, 10]);
    const answer = tidy((5 * c * vMn) / vFe);
    return {
      prompt: `Chuẩn độ $${numTex(vFe)}$ mL dung dịch $\\mathrm{FeSO_4}$ (môi trường $\\mathrm{H_2SO_4}$) cần $${numTex(vMn)}$ mL dung dịch $\\mathrm{KMnO_4}$ $0{,}02$ M. Tính nồng độ mol của dung dịch $\\mathrm{FeSO_4}$ (M).`,
      answer,
      unit: 'M',
      hints: [
        '$\\mathrm{MnO_4^- + 5Fe^{2+} + 8H^+ \\longrightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O}$.',
        '$n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{KMnO_4}}$.',
      ],
      steps: [
        `$n_{\\mathrm{KMnO_4}} = 0{,}02 \\cdot ${numTex(tidy(vMn / 1000))} = ${numTex(tidy((c * vMn) / 1000))}$ mol.`,
        `$n_{\\mathrm{Fe^{2+}}} = 5 \\cdot ${numTex(tidy((c * vMn) / 1000))} = ${numTex(tidy((5 * c * vMn) / 1000))}$ mol.`,
        `$C_M = \\dfrac{${numTex(tidy((5 * c * vMn) / 1000))}}{${numTex(tidy(vFe / 1000))}} = ${numTex(answer)}$ M.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const silverSkill = {
  id: 'hoa-tan-agcl',
  label: 'Hoà tan AgCl bằng NH₃',
  make(rand) {
    const n = pick(rand, [0.01, 0.02, 0.03, 0.04, 0.05]);
    const mass = tidy(n * 143.5);
    const answer = tidy(2 * n);
    return {
      prompt: `Tính số mol $\\mathrm{NH_3}$ tối thiểu cần để hoà tan hết $${numTex(mass)}$ g AgCl (mol). (Ag = 108, Cl = 35,5)`,
      answer,
      unit: 'mol',
      hints: ['$\\mathrm{AgCl + 2NH_3 \\longrightarrow [Ag(NH_3)_2]^+ + Cl^-}$.'],
      steps: [
        `$n_{\\mathrm{AgCl}} = \\dfrac{${numTex(mass)}}{143{,}5} = ${numTex(n)}$ mol.`,
        `$n_{\\mathrm{NH_3}} = 2 \\cdot ${numTex(n)} = ${numTex(answer)}$ mol.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [
  dElectronSkill,
  complexChargeSkill,
  centreChargeSkill,
  titrationSkill,
  silverSkill,
];
