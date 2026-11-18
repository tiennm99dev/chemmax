/**
 * Complexes [MLn] shared by the chapters that teach them: the ligands and
 * central ions both chapters use, with the facts that must agree between
 * them (formula, free-ion formula, charge, donor atom), and the charge of a
 * complex. Each chapter adds its own fields (drawn colours, IUPAC names,
 * denticity) on top of these entries.
 */

/**
 * @typedef {object} LigandBase
 * @property {string} id
 * @property {string} formula as written inside the brackets ("NH3", "Cl")
 * @property {string} ion the free ligand as a formula ("NH3", "Cl^-")
 * @property {number} charge
 * @property {string} donor the atom that gives the lone pair
 */

/** @type {Record<'H2O' | 'NH3' | 'Cl' | 'OH' | 'CN', LigandBase>} */
export const LIGAND_BASE = {
  H2O: { id: 'H2O', formula: 'H2O', ion: 'H2O', charge: 0, donor: 'O' },
  NH3: { id: 'NH3', formula: 'NH3', ion: 'NH3', charge: 0, donor: 'N' },
  Cl: { id: 'Cl', formula: 'Cl', ion: 'Cl^-', charge: -1, donor: 'Cl' },
  OH: { id: 'OH', formula: 'OH', ion: 'OH^-', charge: -1, donor: 'O' },
  CN: { id: 'CN', formula: 'CN', ion: 'CN^-', charge: -1, donor: 'C' },
};

/**
 * @typedef {object} CentreBase
 * @property {string} id
 * @property {string} symbol
 * @property {number} charge
 */

/** @type {Record<'Cu2' | 'Zn2' | 'Fe2' | 'Fe3' | 'Co3' | 'Ni2' | 'Pt2', CentreBase>} */
export const CENTRE_BASE = {
  Cu2: { id: 'Cu2', symbol: 'Cu', charge: 2 },
  Zn2: { id: 'Zn2', symbol: 'Zn', charge: 2 },
  Fe2: { id: 'Fe2', symbol: 'Fe', charge: 2 },
  Fe3: { id: 'Fe3', symbol: 'Fe', charge: 3 },
  Co3: { id: 'Co3', symbol: 'Co', charge: 3 },
  Ni2: { id: 'Ni2', symbol: 'Ni', charge: 2 },
  Pt2: { id: 'Pt2', symbol: 'Pt', charge: 2 },
};

/** @typedef {{ ligand: string, count: number }} Part */

/**
 * A charge as the superscript of a formula: 2 → "2+", −1 → "-", 0 → "".
 * @param {number} q
 */
export function chargeSup(q) {
  if (q === 0) return '';
  const size = Math.abs(q) === 1 ? '' : String(Math.abs(q));
  return `${size}${q > 0 ? '+' : '-'}`;
}

/**
 * The charge of a complex: the centre's charge plus every ligand's, each
 * ligand looked up in the chapter's own table by `ligandOf`.
 * @param {number} centreCharge
 * @param {Part[]} parts
 * @param {(id: string) => { charge: number }} ligandOf
 */
export const complexCharge = (centreCharge, parts, ligandOf) =>
  parts.reduce((q, p) => q + p.count * ligandOf(p.ligand).charge, centreCharge);
