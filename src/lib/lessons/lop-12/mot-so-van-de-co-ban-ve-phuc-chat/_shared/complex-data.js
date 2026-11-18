/**
 * Complexes of the topic: central ions, ligands with their denticity
 * (dung lượng phối trí), and the formula, charge, coordination number and
 * IUPAC name of a complex built from them. Formulas use the `ChemFormula`
 * notation ("[CoCl2(en)2]^+"); names follow the IUPAC 2005 rules the book
 * uses (ligands in alphabetical order, "-ido" anions, "-ate" anionic
 * complexes, oxidation number in Roman numerals).
 */
import { roman } from '#lib/domain/compounds.js';
import {
  CENTRE_BASE,
  LIGAND_BASE,
  chargeSup,
  complexCharge as chargeOf,
} from '#lib/domain/complex.js';

export { chargeSup, roman };
export { formulaTex } from '#lib/domain/formula.js';

/**
 * @typedef {object} Ligand
 * @property {string} id
 * @property {string} formula as written inside the brackets ("NH3", "en")
 * @property {string} ion the free ligand as a formula ("Cl^-", "C2O4^2-")
 * @property {string} name the IUPAC ligand name ("ammine", "chlorido")
 * @property {number} charge
 * @property {number} dentate how many donor atoms bind the centre
 * @property {string} donor the donor atom
 * @property {boolean} [complexName] a long name counted with bis, tris
 */

/** @type {Ligand[]} */
export const LIGANDS = [
  { ...LIGAND_BASE.NH3, name: 'ammine', dentate: 1 },
  { ...LIGAND_BASE.H2O, name: 'aqua', dentate: 1 },
  { ...LIGAND_BASE.Cl, name: 'chlorido', dentate: 1 },
  { id: 'F', formula: 'F', ion: 'F^-', name: 'fluorido', charge: -1, dentate: 1, donor: 'F' },
  { ...LIGAND_BASE.OH, name: 'hydroxido', dentate: 1 },
  { ...LIGAND_BASE.CN, name: 'cyanido', dentate: 1 },
  {
    id: 'en',
    formula: 'en',
    ion: 'en',
    name: 'ethylenediamine',
    charge: 0,
    dentate: 2,
    donor: 'N',
    complexName: true,
  },
  {
    id: 'C2O4',
    formula: 'C2O4',
    ion: 'C2O4^2-',
    name: 'oxalato',
    charge: -2,
    dentate: 2,
    donor: 'O',
  },
];

/** @param {string} id */
export function ligand(id) {
  const l = LIGANDS.find((x) => x.id === id);
  if (!l) throw new Error(`Không có phối tử ${id}`);
  return l;
}

/**
 * @typedef {object} Centre
 * @property {string} id
 * @property {string} symbol
 * @property {number} charge
 * @property {string} name English element name, for a cation or neutral complex
 * @property {string} anion stem with -ate, for an anionic complex
 */

/** @type {Centre[]} */
export const CENTRES = [
  { id: 'Ag1', symbol: 'Ag', charge: 1, name: 'silver', anion: 'argentate' },
  { ...CENTRE_BASE.Cu2, name: 'copper', anion: 'cuprate' },
  { ...CENTRE_BASE.Zn2, name: 'zinc', anion: 'zincate' },
  { ...CENTRE_BASE.Ni2, name: 'nickel', anion: 'nickelate' },
  { ...CENTRE_BASE.Pt2, name: 'platinum', anion: 'platinate' },
  { ...CENTRE_BASE.Fe2, name: 'iron', anion: 'ferrate' },
  { ...CENTRE_BASE.Fe3, name: 'iron', anion: 'ferrate' },
  { ...CENTRE_BASE.Co3, name: 'cobalt', anion: 'cobaltate' },
  { id: 'Cr3', symbol: 'Cr', charge: 3, name: 'chromium', anion: 'chromate' },
];

/** @param {string} id */
export function centre(id) {
  const c = CENTRES.find((x) => x.id === id);
  if (!c) throw new Error(`Không có nguyên tử trung tâm ${id}`);
  return c;
}

/** @typedef {import('#lib/domain/complex.js').Part} Part */

/** A signed charge the book's way: "+3", "−2", "0". @param {number} q */
export const chargeText = (q) => (q === 0 ? '0' : q > 0 ? `+${q}` : `−${-q}`);

/** The charge of a complex: centre plus every ligand. @param {number} q @param {Part[]} parts */
export const complexCharge = (q, parts) => chargeOf(q, parts, ligand);

/** Coordination number: σ bonds to the centre, count × denticity. @param {Part[]} parts */
export const coordinationNumber = (parts) =>
  parts.reduce((s, p) => s + p.count * ligand(p.ligand).dentate, 0);

/** Anionic ligands first, then neutral, each group in table order (the book's way). */
function formulaOrder(/** @type {Part[]} */ parts) {
  const rank = (/** @type {Part} */ p) => {
    const l = ligand(p.ligand);
    return (l.charge < 0 ? 0 : 100) + LIGANDS.indexOf(l);
  };
  return parts.filter((p) => p.count > 0).sort((a, b) => rank(a) - rank(b));
}

/**
 * The formula of a complex: "[Cu(NH3)4]^2+", "[PtCl2(NH3)2]", "[CoCl2(en)2]^+".
 * @param {string} centreId
 * @param {Part[]} parts
 */
export function complexFormula(centreId, parts) {
  const c = centre(centreId);
  const inner = formulaOrder(parts)
    .map((p) => {
      const l = ligand(p.ligand);
      const multi = l.complexName || /[A-Z].*[A-Z]|\d/.test(l.formula);
      const body = multi ? `(${l.formula})` : l.formula;
      return p.count === 1 ? body : `${body}${p.count}`;
    })
    .join('');
  const q = complexCharge(c.charge, parts);
  return `[${c.symbol}${inner}]${q === 0 ? '' : `^${chargeSup(q)}`}`;
}

const SIMPLE = ['', '', 'di', 'tri', 'tetra', 'penta', 'hexa'];
const COMPLEX = ['', '', 'bis', 'tris', 'tetrakis', 'pentakis', 'hexakis'];

/**
 * One ligand with its multiplying prefix: "tetraammine", "bis(ethylenediamine)".
 * @param {Part} p
 */
export function ligandWord(p) {
  const l = ligand(p.ligand);
  if (l.complexName) return p.count === 1 ? `(${l.name})` : `${COMPLEX[p.count]}(${l.name})`;
  return `${SIMPLE[p.count]}${l.name}`;
}

/**
 * @typedef {object} Naming
 * @property {string} formula
 * @property {number} charge
 * @property {number} cn coordination number
 * @property {string[]} ligandWords in alphabetical order of the ligand names
 * @property {string} metalWord "copper" or, in an anionic complex, "cuprate"
 * @property {string} oxidation "(II)"
 * @property {string} name the complex's name without "ion"
 * @property {string} kind "cation", "anion" or "trung hoà"
 */

/**
 * Names a complex the IUPAC way.
 * @param {string} centreId
 * @param {Part[]} parts
 * @returns {Naming}
 */
export function nameComplex(centreId, parts) {
  const c = centre(centreId);
  const used = parts.filter((p) => p.count > 0);
  const charge = complexCharge(c.charge, used);
  const ligandWords = [...used]
    .sort((a, b) => ligand(a.ligand).name.localeCompare(ligand(b.ligand).name))
    .map(ligandWord);
  const metalWord = charge < 0 ? c.anion : c.name;
  const oxidation = `(${roman(c.charge)})`;
  return {
    formula: complexFormula(centreId, used),
    charge,
    cn: coordinationNumber(used),
    ligandWords,
    metalWord,
    oxidation,
    name: `${ligandWords.join('')}${metalWord}${oxidation}`,
    kind: charge > 0 ? 'cation' : charge < 0 ? 'anion' : 'trung hoà',
  };
}
