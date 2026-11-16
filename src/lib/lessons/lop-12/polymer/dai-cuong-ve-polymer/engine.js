/**
 * The monomer joiner: pick a monomer (or a pair of monomers) and a method,
 * trùng hợp or trùng ngưng, and see whether a polymer forms. A monomer
 * polymerises by addition when it has a C=C double bond or a strained ring,
 * and by condensation when it has (with its partner) two functional groups
 * that react, splitting off water.
 */
import { M_WATER, equationTex, monomerMolar, polymer } from '../_shared/polymers.js';

/** @typedef {import('../_shared/polymers.js').Method} Method */
/** @typedef {import('../_shared/polymers.js').Polymer} Polymer */

/**
 * @typedef {object} Feed
 * @property {string} id
 * @property {string} label     what the learner picks, plain text
 * @property {string} feature   what in the structure decides the method
 * @property {string | null} makes the polymer id, or null when none forms
 * @property {string[]} molecules Unicode formulas of the monomer molecules
 * @property {string[]} residues  what each molecule becomes inside the chain
 */

/** @type {Feed[]} */
export const FEEDS = [
  {
    id: 'ethylene',
    label: 'ethylene',
    feature: 'có liên kết đôi C=C',
    makes: 'pe',
    molecules: ['C₂H₄'],
    residues: ['CH₂–CH₂'],
  },
  {
    id: 'propylene',
    label: 'propylene',
    feature: 'có liên kết đôi C=C',
    makes: 'pp',
    molecules: ['C₃H₆'],
    residues: ['CH₂–CH(CH₃)'],
  },
  {
    id: 'vinyl-chloride',
    label: 'vinyl chloride',
    feature: 'có liên kết đôi C=C',
    makes: 'pvc',
    molecules: ['C₂H₃Cl'],
    residues: ['CH₂–CHCl'],
  },
  {
    id: 'styrene',
    label: 'styrene',
    feature: 'có liên kết đôi C=C ở nhánh vinyl',
    makes: 'ps',
    molecules: ['C₈H₈'],
    residues: ['CH₂–CH(C₆H₅)'],
  },
  {
    id: 'caprolactam',
    label: 'caprolactam',
    feature: 'là vòng kém bền',
    makes: 'capron',
    molecules: ['C₆H₁₁NO'],
    residues: ['NH[CH₂]₅CO'],
  },
  {
    id: 'aminocaproic',
    label: 'ε-aminocaproic acid',
    feature: 'có hai nhóm chức −NH₂ và −COOH',
    makes: 'nylon-6',
    molecules: ['C₆H₁₃NO₂'],
    residues: ['NH[CH₂]₅CO'],
  },
  {
    id: 'nylon',
    label: 'hexamethylenediamine + adipic acid',
    feature: 'có hai nhóm chức trên mỗi phân tử (hai nhóm −NH₂ hoặc hai nhóm −COOH)',
    makes: 'nylon-6-6',
    molecules: ['C₆H₁₆N₂', 'C₆H₁₀O₄'],
    residues: ['NH[CH₂]₆NH', 'CO[CH₂]₄CO'],
  },
  {
    id: 'pet',
    label: 'terephthalic acid + ethylene glycol',
    feature: 'có hai nhóm chức trên mỗi phân tử (hai nhóm −COOH hoặc hai nhóm −OH)',
    makes: 'pet',
    molecules: ['C₈H₆O₄', 'C₂H₆O₂'],
    residues: ['CO–C₆H₄–CO', 'O–CH₂–CH₂–O'],
  },
  {
    id: 'ethanol',
    label: 'ethanol',
    feature: 'chỉ có một nhóm −OH và không có liên kết bội',
    makes: null,
    molecules: ['C₂H₆O'],
    residues: [],
  },
];

export const METHOD_NAMES = /** @type {Record<Method, string>} */ ({
  'trung-hop': 'trùng hợp',
  'trung-ngung': 'trùng ngưng',
});

/**
 * @param {string} id
 */
export function feed(id) {
  const f = FEEDS.find((x) => x.id === id);
  if (!f) throw new Error(`Unknown monomer ${id}`);
  return f;
}

/**
 * @typedef {object} Outcome
 * @property {boolean} ok
 * @property {string} message      why it works or fails, rich text
 * @property {Polymer | null} polymer
 * @property {string[]} before     monomer molecules fed in, in joining order
 * @property {string[]} chain      their residues in the chain, in the same order
 * @property {number} units        repeat units in the chain (0 when none forms)
 * @property {number} water        water molecules split off
 * @property {number} monomerMass  total mass of the monomers fed in (g/mol units)
 * @property {number} chainMass    mass of the chain, chain ends ignored
 * @property {string} equation     TeX of the book equation, '' when none forms
 */

/**
 * What happens when `units` repeat units' worth of monomer are joined by
 * `method`. Chain ends are ignored, as in the book's equations, so the chain
 * mass is exactly units × the unit's molar mass.
 * @param {string} feedId
 * @param {Method} method
 * @param {number} units
 * @returns {Outcome}
 */
export function join(feedId, method, units) {
  const f = feed(feedId);
  const subject =
    f.molecules.length > 1 ? `Cặp ${f.label.replace(' + ', ' và ')}` : `Phân tử ${f.label}`;
  const before = Array.from({ length: units }, () => f.molecules).flat();
  const chain = Array.from({ length: units }, () => f.residues).flat();
  const p = f.makes ? polymer(f.makes) : null;
  const fail = (/** @type {string} */ message) => ({
    ok: false,
    message,
    polymer: null,
    before,
    chain: [],
    units: 0,
    water: 0,
    monomerMass: p ? units * monomerMolar(p) : 0,
    chainMass: 0,
    equation: '',
  });
  if (!p) {
    return fail(`${subject} ${f.feature}, nên không trùng hợp, cũng không trùng ngưng được.`);
  }
  if (p.method !== method) {
    return fail(
      method === 'trung-hop'
        ? `${subject} ${f.feature}, nhưng không có liên kết đôi C=C hay vòng kém bền, nên không trùng hợp được. Hãy thử trùng ngưng.`
        : `${subject} ${f.feature}, nhưng không có hai nhóm chức phản ứng được với nhau, nên không trùng ngưng được. Hãy thử trùng hợp.`,
    );
  }
  const water = units * p.water;
  const name = p.abbr ? `${p.name} (${p.abbr})` : p.name;
  const message =
    method === 'trung-hop'
      ? `Trùng hợp: ${subject.toLowerCase()} ${f.feature}${p.id === 'capron' ? ', mở vòng rồi' : ','} kết hợp liên tiếp thành ${name}. Không có phân tử nhỏ nào tách ra, nên khối lượng polymer bằng khối lượng monomer.`
      : `Trùng ngưng: ${subject.toLowerCase()} ${f.feature}; mỗi liên kết ${p.id === 'pet' ? 'ester' : 'amide'} mới tạo thành tách ra một phân tử $\\mathrm{H_2O}$. Sản phẩm là ${name}.`;
  return {
    ok: true,
    message,
    polymer: p,
    before,
    chain,
    units,
    water,
    monomerMass: units * monomerMolar(p),
    chainMass: units * p.unitMolar,
    equation: equationTex(p),
  };
}

export { M_WATER };
