/**
 * Electrochemistry of the grade 12 chapter "Pin điện và điện phân": the
 * book's standard electrode potentials of metal couples, the Galvani cell made
 * from two of them (anode, cathode, half-reactions, overall reaction and
 * E°pin = E°cathode − E°anode), the α rule, the order of discharge at the
 * electrodes of an electrolysis cell and the amount of product carried by a
 * charge (n_e = It/F).
 */
import { numTex, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {object} Couple
 * @property {string} id the metal symbol, or 'H' for 2H+/H2
 * @property {string} ion TeX of the oxidised form, without \mathrm
 * @property {string} metal TeX of the reduced form, without \mathrm
 * @property {number} charge electrons in the half-reaction of one ion
 * @property {number} E standard electrode potential in volts
 * @property {string} name Vietnamese name of the reduced form
 * @property {number} molar molar mass of the reduced form, g/mol
 */

/**
 * The couples of the book's table, in the order of the electrochemical
 * series (E° rising). Values as printed in the KNTT book, 25 °C.
 * @type {Couple[]}
 */
export const COUPLES = [
  { id: 'K', ion: 'K^+', metal: 'K', charge: 1, E: -2.924, name: 'potassium', molar: 39 },
  { id: 'Na', ion: 'Na^+', metal: 'Na', charge: 1, E: -2.713, name: 'sodium', molar: 23 },
  { id: 'Mg', ion: 'Mg^{2+}', metal: 'Mg', charge: 2, E: -2.356, name: 'magnesium', molar: 24 },
  { id: 'Al', ion: 'Al^{3+}', metal: 'Al', charge: 3, E: -1.676, name: 'aluminium', molar: 27 },
  { id: 'Zn', ion: 'Zn^{2+}', metal: 'Zn', charge: 2, E: -0.762, name: 'zinc', molar: 65 },
  { id: 'Fe', ion: 'Fe^{2+}', metal: 'Fe', charge: 2, E: -0.44, name: 'iron', molar: 56 },
  { id: 'Ni', ion: 'Ni^{2+}', metal: 'Ni', charge: 2, E: -0.257, name: 'nickel', molar: 59 },
  { id: 'Sn', ion: 'Sn^{2+}', metal: 'Sn', charge: 2, E: -0.137, name: 'tin', molar: 119 },
  { id: 'Pb', ion: 'Pb^{2+}', metal: 'Pb', charge: 2, E: -0.126, name: 'lead', molar: 207 },
  { id: 'H', ion: '2H^+', metal: 'H_2', charge: 2, E: 0, name: 'hydrogen', molar: 2 },
  { id: 'Cu', ion: 'Cu^{2+}', metal: 'Cu', charge: 2, E: 0.34, name: 'copper', molar: 64 },
  { id: 'Ag', ion: 'Ag^+', metal: 'Ag', charge: 1, E: 0.799, name: 'silver', molar: 108 },
];

/** Electrodes a Galvani cell of the widget can be built from (H is the standard hydrogen electrode). */
export const CELL_METALS = ['Mg', 'Al', 'Zn', 'Fe', 'Ni', 'Sn', 'Pb', 'H', 'Cu', 'Ag'];

/** Faraday constant, C/mol, as the book rounds it. */
export const FARADAY = 96500;

/** Molar volume of a gas at standard conditions (25 °C, 1 bar), L/mol. */
export const MOLAR_VOLUME = 24.79;

/** @param {string} id */
export function couple(id) {
  const c = COUPLES.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown couple ${id}`);
  return c;
}

/** `\mathrm{Zn^{2+}/Zn}`. @param {Couple} c */
export const coupleTex = (c) => `\\mathrm{${c.ion}/${c.metal}}`;

/** A potential the book's way: `-0{,}762`, `+0{,}340`. @param {number} E */
export function potentialTex(E) {
  if (E === 0) return '0{,}000';
  const text = numTex(Math.abs(E), 3);
  const [whole, dec = ''] = text.split('{,}');
  return `${E < 0 ? '-' : '+'}${whole}{,}${dec.padEnd(3, '0')}`;
}

/** @param {number} a @param {number} b @returns {number} */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

/** A coefficient in front of a species, empty for 1. @param {number} k */
const coef = (k) => (k === 1 ? '' : String(k));

/** `Zn -> Zn^{2+} + 2e`. @param {Couple} c */
export const oxidationTex = (c) =>
  `\\mathrm{${c.metal}} \\longrightarrow \\mathrm{${c.ion}} + ${c.charge}e`;

/** `Cu^{2+} + 2e -> Cu`. @param {Couple} c */
export const reductionTex = (c) =>
  `\\mathrm{${c.ion}} + ${c.charge}e \\longrightarrow \\mathrm{${c.metal}}`;

/**
 * The overall reaction of a reducer metal with the ion of an oxidant couple:
 * `3Mg + 2Al^{3+} -> 3Mg^{2+} + 2Al`.
 * @param {Couple} reducer
 * @param {Couple} oxidant
 */
export function overallTex(reducer, oxidant) {
  const g = gcd(reducer.charge, oxidant.charge);
  const r = oxidant.charge / g;
  const o = reducer.charge / g;
  // 2H+/H2 is written per H+ ion, so it takes twice as many ions as H2.
  const ion = oxidant.id === 'H' ? 'H^+' : oxidant.ion;
  const ions = oxidant.id === 'H' ? o * 2 : o;
  return `${coef(r)}\\mathrm{${reducer.metal}} + ${coef(ions)}\\mathrm{${ion}} \\longrightarrow ${coef(r)}\\mathrm{${reducer.ion}} + ${coef(o)}\\mathrm{${oxidant.metal}}`;
}

/**
 * The α rule: the reducer of the couple with the lower E° reacts with the
 * oxidant of the couple with the higher E°.
 * @param {string} reducerId the metal (reduced form)
 * @param {string} oxidantId the couple whose oxidised form is offered
 */
export function reacts(reducerId, oxidantId) {
  return couple(reducerId).E < couple(oxidantId).E;
}

/**
 * @typedef {object} Cell
 * @property {Couple} anode the negative electrode, oxidised
 * @property {Couple} cathode the positive electrode, reduced at
 * @property {number} emf E°pin in volts
 * @property {string} emfTex the working `E°pin = ... = 1,102 V`
 * @property {string} overall TeX of the overall reaction
 */

/**
 * The Galvani cell of two metal couples, or null for the same couple twice.
 * @param {string} aId
 * @param {string} bId
 * @returns {Cell | null}
 */
export function cell(aId, bId) {
  if (aId === bId) return null;
  const a = couple(aId);
  const b = couple(bId);
  const [anode, cathode] = a.E < b.E ? [a, b] : [b, a];
  const emf = tidy(cathode.E - anode.E, 3);
  const minus = anode.E < 0 ? `(${potentialTex(anode.E)})` : potentialTex(anode.E);
  return {
    anode,
    cathode,
    emf,
    emfTex: `E^\\circ_{\\text{pin}} = E^\\circ_{\\mathrm{${cathode.ion}/${cathode.metal}}} - E^\\circ_{\\mathrm{${anode.ion}/${anode.metal}}} = ${potentialTex(cathode.E)} - ${minus} = ${numTex(emf, 3)}\\ \\text{V}`,
    overall: overallTex(anode, cathode),
  };
}

/* ---------------- Electrolysis ---------------- */

/**
 * @typedef {object} Species
 * @property {string} id
 * @property {string} tex TeX of the species, without \mathrm
 * @property {string} half TeX of its half-reaction at the electrode
 * @property {string} product TeX of the product
 * @property {string} productName Vietnamese words for the product
 * @property {number} electrons electrons per mole of product
 * @property {'solid' | 'gas' | 'liquid'} state state of the product
 * @property {number} molar molar mass of the product
 */

/**
 * Cations and water at the cathode, strongest oxidant first. In a solution
 * the ions after water (K+, Na+, Mg2+, Al3+) are never reduced: water is.
 * @type {Species[]}
 */
export const CATHODE_ORDER = [
  {
    id: 'Ag+',
    tex: 'Ag^+',
    half: '\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}',
    product: 'Ag',
    productName: 'kim loại silver',
    electrons: 1,
    state: 'solid',
    molar: 108,
  },
  {
    id: 'Cu2+',
    tex: 'Cu^{2+}',
    half: '\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}',
    product: 'Cu',
    productName: 'kim loại copper',
    electrons: 2,
    state: 'solid',
    molar: 64,
  },
  {
    id: 'H2O',
    tex: 'H_2O',
    half: '2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}',
    product: 'H_2',
    productName: 'khí hydrogen',
    electrons: 2,
    state: 'gas',
    molar: 2,
  },
  {
    id: 'Al3+',
    tex: 'Al^{3+}',
    half: '\\mathrm{Al^{3+}} + 3e \\longrightarrow \\mathrm{Al}',
    product: 'Al',
    productName: 'kim loại aluminium',
    electrons: 3,
    state: 'liquid',
    molar: 27,
  },
  {
    id: 'Mg2+',
    tex: 'Mg^{2+}',
    half: '\\mathrm{Mg^{2+}} + 2e \\longrightarrow \\mathrm{Mg}',
    product: 'Mg',
    productName: 'kim loại magnesium',
    electrons: 2,
    state: 'liquid',
    molar: 24,
  },
  {
    id: 'Na+',
    tex: 'Na^+',
    half: '\\mathrm{Na^+} + 1e \\longrightarrow \\mathrm{Na}',
    product: 'Na',
    productName: 'kim loại sodium',
    electrons: 1,
    state: 'liquid',
    molar: 23,
  },
];

/**
 * Anions and water at an inert anode, strongest reducer first. In a solution
 * the ions after water (SO4 2-, NO3-) are not oxidised: water is.
 * @type {Species[]}
 */
export const ANODE_ORDER = [
  {
    id: 'Cl-',
    tex: 'Cl^-',
    half: '2\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2e',
    product: 'Cl_2',
    productName: 'khí chlorine',
    electrons: 2,
    state: 'gas',
    molar: 71,
  },
  {
    id: 'H2O',
    tex: 'H_2O',
    half: '2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e',
    product: 'O_2',
    productName: 'khí oxygen',
    electrons: 4,
    state: 'gas',
    molar: 32,
  },
  {
    id: 'O2-',
    tex: 'O^{2-}',
    half: '2\\mathrm{O^{2-}} \\longrightarrow \\mathrm{O_2} + 4e',
    product: 'O_2',
    productName: 'khí oxygen',
    electrons: 4,
    state: 'gas',
    molar: 32,
  },
  {
    id: 'SO4 2-',
    tex: 'SO_4^{2-}',
    half: '',
    product: '',
    productName: '',
    electrons: 0,
    state: 'gas',
    molar: 0,
  },
  {
    id: 'NO3-',
    tex: 'NO_3^-',
    half: '',
    product: '',
    productName: '',
    electrons: 0,
    state: 'gas',
    molar: 0,
  },
];

/**
 * @typedef {object} Electrolyte
 * @property {string} id
 * @property {string} label short label for a picker (plain text)
 * @property {string} tex TeX of the electrolyte, without \mathrm
 * @property {'molten' | 'solution'} medium
 * @property {string} cation id in CATHODE_ORDER
 * @property {string} anion id in ANODE_ORDER
 * @property {string} overall TeX of the overall equation
 * @property {string} [note] what else the book says about this cell
 */

/** @type {Electrolyte[]} */
export const ELECTROLYTES = [
  {
    id: 'nacl-nc',
    label: 'NaCl nóng chảy',
    tex: 'NaCl',
    medium: 'molten',
    cation: 'Na+',
    anion: 'Cl-',
    overall: '2\\mathrm{NaCl} \\xrightarrow{\\text{đpnc}} 2\\mathrm{Na} + \\mathrm{Cl_2}',
  },
  {
    id: 'al2o3-nc',
    label: 'Al₂O₃ nóng chảy',
    tex: 'Al_2O_3',
    medium: 'molten',
    cation: 'Al3+',
    anion: 'O2-',
    overall:
      '2\\mathrm{Al_2O_3} \\xrightarrow{\\text{đpnc, cryolite}} 4\\mathrm{Al} + 3\\mathrm{O_2}',
    note: 'Trong công nghiệp, anode bằng than chì bị oxygen sinh ra đốt cháy dần thành CO và CO₂, nên phải thay anode định kì.',
  },
  {
    id: 'mgcl2-nc',
    label: 'MgCl₂ nóng chảy',
    tex: 'MgCl_2',
    medium: 'molten',
    cation: 'Mg2+',
    anion: 'Cl-',
    overall: '\\mathrm{MgCl_2} \\xrightarrow{\\text{đpnc}} \\mathrm{Mg} + \\mathrm{Cl_2}',
  },
  {
    id: 'nacl-dd',
    label: 'dung dịch NaCl',
    tex: 'NaCl',
    medium: 'solution',
    cation: 'Na+',
    anion: 'Cl-',
    overall:
      '2\\mathrm{NaCl} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd, có màng ngăn}} 2\\mathrm{NaOH} + \\mathrm{H_2} + \\mathrm{Cl_2}',
    note: 'Không có màng ngăn, chlorine sinh ra ở anode tác dụng với NaOH sinh ra ở cathode, tạo nước Javel.',
  },
  {
    id: 'cuso4-dd',
    label: 'dung dịch CuSO₄',
    tex: 'CuSO_4',
    medium: 'solution',
    cation: 'Cu2+',
    anion: 'SO4 2-',
    overall:
      '2\\mathrm{CuSO_4} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd}} 2\\mathrm{Cu} + \\mathrm{O_2} + 2\\mathrm{H_2SO_4}',
  },
  {
    id: 'cucl2-dd',
    label: 'dung dịch CuCl₂',
    tex: 'CuCl_2',
    medium: 'solution',
    cation: 'Cu2+',
    anion: 'Cl-',
    overall: '\\mathrm{CuCl_2} \\xrightarrow{\\text{đpdd}} \\mathrm{Cu} + \\mathrm{Cl_2}',
  },
  {
    id: 'agno3-dd',
    label: 'dung dịch AgNO₃',
    tex: 'AgNO_3',
    medium: 'solution',
    cation: 'Ag+',
    anion: 'NO3-',
    overall:
      '4\\mathrm{AgNO_3} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd}} 4\\mathrm{Ag} + \\mathrm{O_2} + 4\\mathrm{HNO_3}',
  },
  {
    id: 'nano3-dd',
    label: 'dung dịch NaNO₃',
    tex: 'NaNO_3',
    medium: 'solution',
    cation: 'Na+',
    anion: 'NO3-',
    overall: '2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd}} 2\\mathrm{H_2} + \\mathrm{O_2}',
    note: 'Cả Na⁺ và NO₃⁻ đều không bị điện phân trong dung dịch: thực chất là điện phân nước.',
  },
  {
    id: 'na2so4-dd',
    label: 'dung dịch Na₂SO₄',
    tex: 'Na_2SO_4',
    medium: 'solution',
    cation: 'Na+',
    anion: 'SO4 2-',
    overall: '2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd}} 2\\mathrm{H_2} + \\mathrm{O_2}',
    note: 'Thực chất là điện phân nước; Na₂SO₄ chỉ làm dung dịch dẫn điện tốt hơn.',
  },
];

/** @param {string} id */
export function electrolyte(id) {
  const e = ELECTROLYTES.find((x) => x.id === id);
  if (!e) throw new Error(`Unknown electrolyte ${id}`);
  return e;
}

/** @param {Species[]} order @param {string} id */
const speciesIn = (order, id) => {
  const s = order.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown species ${id}`);
  return s;
};

/**
 * @typedef {object} ElectrodeResult
 * @property {Species[]} present the species near the electrode, in order of priority
 * @property {Species} chosen the species that reacts first
 * @property {string} why Vietnamese reason, rich text
 */

/**
 * What reacts first at each electrode of an electrolysis with inert
 * electrodes: the strongest oxidant at the cathode, the strongest reducer at
 * the anode. In a molten salt there is no water.
 * @param {Electrolyte} e
 * @returns {{ cathode: ElectrodeResult, anode: ElectrodeResult }}
 */
export function discharge(e) {
  const water = e.medium === 'solution';
  const rank = (/** @type {Species[]} */ order, /** @type {string[]} */ ids) =>
    order.filter((s) => ids.includes(s.id));

  const cathodePresent = rank(CATHODE_ORDER, water ? [e.cation, 'H2O'] : [e.cation]);
  const anodePresent = rank(ANODE_ORDER, water ? [e.anion, 'H2O'] : [e.anion]);
  const cathode = cathodePresent[0];
  const anode = anodePresent.find((s) => s.electrons > 0);
  if (!anode) throw new Error(`Nothing oxidised in ${e.id}`);

  const cation = speciesIn(CATHODE_ORDER, e.cation);
  const anion = speciesIn(ANODE_ORDER, e.anion);
  const m = (/** @type {string} */ t) => `$\\mathrm{${t}}$`;

  let cathodeWhy;
  if (!water) cathodeWhy = `Chất nóng chảy không có nước: ion ${m(cation.tex)} bị khử.`;
  else if (cathode.id === 'H2O')
    cathodeWhy = `Ion ${m(cation.tex)} có tính oxi hoá yếu hơn $\\mathrm{H_2O}$, không bị khử trong dung dịch: $\\mathrm{H_2O}$ bị khử.`;
  else
    cathodeWhy = `Ion ${m(cation.tex)} có tính oxi hoá mạnh hơn $\\mathrm{H_2O}$ nên bị khử trước.`;

  let anodeWhy;
  if (!water) anodeWhy = `Chất nóng chảy không có nước: ion ${m(anion.tex)} bị oxi hoá.`;
  else if (anode.id === 'H2O')
    anodeWhy = `Ion ${m(anion.tex)} không bị oxi hoá trong dung dịch: $\\mathrm{H_2O}$ bị oxi hoá.`;
  else anodeWhy = `Ion ${m(anion.tex)} có tính khử mạnh hơn $\\mathrm{H_2O}$ nên bị oxi hoá trước.`;

  return {
    cathode: { present: cathodePresent, chosen: cathode, why: cathodeWhy },
    anode: { present: anodePresent, chosen: anode, why: anodeWhy },
  };
}

/**
 * @typedef {object} Amount
 * @property {number} mol moles of product
 * @property {number} mass grams of product
 * @property {number} volume litres of gas at standard conditions (0 for a metal)
 */

/**
 * Moles of electrons carried by a current I (A) for t seconds: n_e = It/F.
 * @param {number} current
 * @param {number} seconds
 */
export const electronMoles = (current, seconds) => (current * seconds) / FARADAY;

/**
 * How much product a species gives for some moles of electrons.
 * @param {Species} s
 * @param {number} ne
 * @returns {Amount}
 */
export function amountOf(s, ne) {
  const mol = ne / s.electrons;
  return {
    mol,
    mass: mol * s.molar,
    volume: s.state === 'gas' ? mol * MOLAR_VOLUME : 0,
  };
}

const SUP = /** @type {Record<string, string>} */ ({ '+': '⁺', '-': '⁻', 2: '²', 3: '³' });
const SUB = /** @type {Record<string, string>} */ ({ 2: '₂', 3: '₃', 4: '₄' });

/**
 * Plain Unicode text of a species written in TeX, for SVG labels and screen
 * readers: "Cu^{2+}" gives "Cu²⁺", "SO_4^{2-}" gives "SO₄²⁻".
 * @param {string} tex
 */
export function plain(tex) {
  /** @param {Record<string, string>} map */
  const swap =
    (map) => (/** @type {string} */ _, /** @type {string} */ a, /** @type {string} */ b) =>
      [...(a ?? b)].map((ch) => map[ch] ?? ch).join('');
  return tex.replace(/_\{([^}]*)\}|_(.)/g, swap(SUB)).replace(/\^\{([^}]*)\}|\^(.)/g, swap(SUP));
}
