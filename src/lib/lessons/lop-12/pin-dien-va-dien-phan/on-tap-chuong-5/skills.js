/**
 * Generated drill skills for the chapter review: the standard emf of a
 * Galvani cell, the standard potential of an unknown anode from the emf, the
 * mass of metal plated at the cathode (n_e = It/F) and the time an
 * electrolysis needs. Currents and times are drawn so the charge is a whole
 * tenth of a faraday and every answer is a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';
import {
  CELL_METALS,
  FARADAY,
  cell,
  couple,
  coupleTex,
  potentialTex,
} from '../_shared/electrochem.js';

/** Currents (A) that divide 0,1 F into a whole number of seconds. */
const CURRENTS = [2.5, 5, 9.65, 10];
/** Moles of electrons, tenths of a faraday. */
const CHARGES = [0.1, 0.2, 0.3, 0.4];

/** Metals plated at the cathode from their salt solution. */
const PLATED = [
  { id: 'Cu', salt: 'CuSO_4', electrons: 2, molar: 64 },
  { id: 'Ag', salt: 'AgNO_3', electrons: 1, molar: 108 },
];

/** @param {() => number} rand */
function twoCouples(rand) {
  const a = pick(rand, CELL_METALS);
  const b = pick(
    rand,
    CELL_METALS.filter((x) => x !== a),
  );
  const c = cell(a, b);
  if (!c) throw new Error('same couple twice');
  return c;
}

/** @type {import('#lib/core/drill.js').Skill} */
export const emfSkill = {
  id: 'suc-dien-dong',
  label: 'Sức điện động chuẩn của pin',
  make(rand) {
    const c = twoCouples(rand);
    const { anode, cathode } = c;
    return {
      prompt: `Tính sức điện động chuẩn (V) của pin Galvani tạo bởi hai cặp $${coupleTex(anode)}$ ($E^\\circ = ${potentialTex(anode.E)}$ V) và $${coupleTex(cathode)}$ ($E^\\circ = ${potentialTex(cathode.E)}$ V).`,
      answer: c.emf,
      unit: 'V',
      hints: [
        'Cặp có thế điện cực chuẩn nhỏ hơn là anode.',
        '$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$.',
      ],
      steps: [`Anode: $${coupleTex(anode)}$; cathode: $${coupleTex(cathode)}$.`, `$${c.emfTex}$.`],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const unknownSkill = {
  id: 'the-dien-cuc-chua-biet',
  label: 'Thế điện cực chuẩn từ sức điện động',
  make(rand) {
    // Anodes with at least one cathode 0,2 V or more above them.
    const metals = ['Mg', 'Al', 'Zn', 'Fe', 'Ni', 'Sn', 'Pb'];
    const anodeId = pick(rand, metals);
    const cathodeId = pick(
      rand,
      CELL_METALS.filter((x) => couple(x).E - couple(anodeId).E >= 0.2),
    );
    const c = cell(anodeId, cathodeId);
    if (!c) throw new Error('same couple twice');
    const { anode, cathode } = c;
    const ion = `X^{${anode.charge > 1 ? anode.charge : ''}+}/X`;
    return {
      prompt: `Pin Galvani gồm điện cực $\\mathrm{${ion}}$ (anode) và điện cực $${coupleTex(cathode)}$ ($E^\\circ = ${potentialTex(cathode.E)}$ V) có sức điện động chuẩn $${numTex(c.emf, 3)}$ V. Tính thế điện cực chuẩn (V) của cặp chứa X.`,
      answer: anode.E,
      unit: 'V',
      hints: [
        'X là anode: $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{X}}$.',
        `$E^\\circ_{\\text{X}} = ${potentialTex(cathode.E)} - ${numTex(c.emf, 3)}$.`,
      ],
      steps: [
        `$E^\\circ_{\\text{X}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{pin}} = ${potentialTex(cathode.E)} - ${numTex(c.emf, 3)} = ${potentialTex(anode.E)}$ V.`,
        `Đó là thế điện cực chuẩn của cặp $${coupleTex(anode)}$.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const massSkill = {
  id: 'khoi-luong-kim-loai',
  label: 'Khối lượng kim loại bám vào cathode',
  make(rand) {
    const metal = pick(rand, PLATED);
    const I = pick(rand, CURRENTS);
    const ne = pick(rand, CHARGES);
    const t = Math.round((ne * FARADAY) / I);
    const mol = tidy(ne / metal.electrons);
    const answer = tidy(mol * metal.molar);
    const name = couple(metal.id).name;
    return {
      prompt: `Điện phân dung dịch $\\mathrm{${metal.salt}}$ dư bằng điện cực trơ với dòng điện $${numTex(I)}$ A trong $${numTex(t)}$ giây ($F = 96\\,500$ C/mol). Tính khối lượng ${name} bám vào cathode (g).`,
      answer,
      unit: 'g',
      hints: [
        '$n_e = \\dfrac{It}{F}$.',
        `Ở cathode: $\\mathrm{${metal.id}^{${metal.electrons > 1 ? metal.electrons : ''}+}} + ${metal.electrons}e \\longrightarrow \\mathrm{${metal.id}}$.`,
      ],
      steps: [
        `$n_e = \\dfrac{${numTex(I)} \\cdot ${numTex(t)}}{96\\,500} = ${numTex(ne)}$ mol.`,
        `$n_{\\mathrm{${metal.id}}} = \\dfrac{${numTex(ne)}}{${metal.electrons}} = ${numTex(mol)}$ mol.`,
        `$m = ${numTex(mol)} \\cdot ${metal.molar} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const timeSkill = {
  id: 'thoi-gian-dien-phan',
  label: 'Thời gian điện phân',
  make(rand) {
    const metal = pick(rand, PLATED);
    const I = pick(rand, CURRENTS);
    const ne = pick(rand, CHARGES);
    const answer = Math.round((ne * FARADAY) / I);
    const mol = tidy(ne / metal.electrons);
    const m = tidy(mol * metal.molar);
    const name = couple(metal.id).name;
    return {
      prompt: `Điện phân dung dịch $\\mathrm{${metal.salt}}$ dư bằng điện cực trơ với dòng điện $${numTex(I)}$ A ($F = 96\\,500$ C/mol). Cần bao nhiêu giây để thu được $${numTex(m)}$ g ${name} ở cathode?`,
      answer,
      unit: 's',
      hints: [`Tính số mol ${name}, rồi số mol electron cần dùng.`, '$t = \\dfrac{n_e F}{I}$.'],
      steps: [
        `$n_{\\mathrm{${metal.id}}} = \\dfrac{${numTex(m)}}{${metal.molar}} = ${numTex(mol)}$ mol, $n_e = ${metal.electrons} \\cdot ${numTex(mol)} = ${numTex(ne)}$ mol.`,
        `$t = \\dfrac{${numTex(ne)} \\cdot 96\\,500}{${numTex(I)}} = ${numTex(answer)}$ s.`,
      ],
    };
  },
};

export const REVIEW_SKILLS = [emfSkill, unknownSkill, massSkill, timeSkill];
