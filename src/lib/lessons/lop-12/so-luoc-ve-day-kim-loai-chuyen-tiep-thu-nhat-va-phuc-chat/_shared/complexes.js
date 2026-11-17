/**
 * Complexes [MLn]: a central metal ion M and n ligands L, each ligand giving
 * one lone pair to M (a dative bond). The charge of the complex is the
 * charge of M plus the charges of the ligands. Formulas are written the way
 * `ChemFormula` reads them: "[Cu(NH3)4(H2O)2]^2+".
 */

/**
 * @typedef {object} Ligand
 * @property {string} id
 * @property {string} formula as written inside the brackets ("NH3", "Cl")
 * @property {string} ion the free ligand as a formula ("NH3", "Cl^-")
 * @property {number} charge
 * @property {string} donor the atom that gives the lone pair
 * @property {string} colour drawn colour of the donor atom
 */

/** @type {Ligand[]} */
export const LIGANDS = [
  { id: 'H2O', formula: 'H2O', ion: 'H2O', charge: 0, donor: 'O', colour: '#ef4444' },
  { id: 'NH3', formula: 'NH3', ion: 'NH3', charge: 0, donor: 'N', colour: '#3b82f6' },
  { id: 'Cl', formula: 'Cl', ion: 'Cl^-', charge: -1, donor: 'Cl', colour: '#22c55e' },
  { id: 'OH', formula: 'OH', ion: 'OH^-', charge: -1, donor: 'O', colour: '#f97316' },
  { id: 'CN', formula: 'CN', ion: 'CN^-', charge: -1, donor: 'C', colour: '#475569' },
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
 */

/** @type {Centre[]} */
export const CENTRES = [
  { id: 'Cu2', symbol: 'Cu', charge: 2 },
  { id: 'Zn2', symbol: 'Zn', charge: 2 },
  { id: 'Fe2', symbol: 'Fe', charge: 2 },
  { id: 'Fe3', symbol: 'Fe', charge: 3 },
  { id: 'Co3', symbol: 'Co', charge: 3 },
  { id: 'Ni2', symbol: 'Ni', charge: 2 },
  { id: 'Pt2', symbol: 'Pt', charge: 2 },
];

/** @param {string} id */
export function centre(id) {
  const c = CENTRES.find((x) => x.id === id);
  if (!c) throw new Error(`Không có ion trung tâm ${id}`);
  return c;
}

/** @typedef {'tu-dien' | 'vuong-phang' | 'bat-dien'} Geometry */

/** @type {Record<Geometry, { name: string, count: number }>} */
export const GEOMETRIES = {
  'tu-dien': { name: 'tứ diện', count: 4 },
  'vuong-phang': { name: 'vuông phẳng', count: 4 },
  'bat-dien': { name: 'bát diện', count: 6 },
};

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
 * One ligand inside the brackets, with its count: "(NH3)4", "Cl4", "(OH)4".
 * @param {Ligand} l
 * @param {number} n
 */
function ligandPart(l, n) {
  const multi = /[A-Z].*[A-Z]|\d/.test(l.formula);
  const body = multi ? `(${l.formula})` : l.formula;
  return n === 1 ? body : `${body}${n}`;
}

/**
 * @typedef {{ ligand: string, count: number }} Part
 */

/**
 * The charge of the complex: the centre's charge plus every ligand's.
 * @param {number} centreCharge
 * @param {Part[]} parts
 */
export const complexCharge = (centreCharge, parts) =>
  parts.reduce((q, p) => q + p.count * ligand(p.ligand).charge, centreCharge);

/**
 * The formula of a complex ion or molecule: "[Co(NH3)6]^3+", "[PtCl2(NH3)2]".
 * @param {string} symbol
 * @param {number} centreCharge
 * @param {Part[]} parts
 */
export function complexFormula(symbol, centreCharge, parts) {
  const inner = parts.map((p) => ligandPart(ligand(p.ligand), p.count)).join('');
  const q = complexCharge(centreCharge, parts);
  return `[${symbol}${inner}]${q === 0 ? '' : `^${chargeSup(q)}`}`;
}

/**
 * Inline TeX of a formula in the `ChemFormula` notation:
 * "[Cu(NH3)4]^2+" → "\mathrm{[Cu(NH_3)_4]^{2+}}".
 * @param {string} formula
 */
export function formulaTex(formula) {
  const [body, sup] = formula.split('^');
  const subbed = body.replace(/([A-Za-z)\]])(\d+)/g, '$1_$2');
  return `\\mathrm{${subbed}${sup ? `^{${sup}}` : ''}}`;
}

/**
 * @typedef {object} Known
 * @property {string} formula
 * @property {string} centre a CENTRES id
 * @property {Part[]} parts
 * @property {Geometry} geometry
 * @property {string} [colour] colour in solution, in words
 * @property {string} [hex]
 */

/** Complexes of the lessons, with their shape and, when known, colour. @type {Known[]} */
export const KNOWN = [
  {
    formula: '[Co(NH3)6]^3+',
    centre: 'Co3',
    parts: [{ ligand: 'NH3', count: 6 }],
    geometry: 'bat-dien',
    colour: 'vàng cam',
    hex: '#f59e0b',
  },
  {
    formula: '[Fe(H2O)6]^3+',
    centre: 'Fe3',
    parts: [{ ligand: 'H2O', count: 6 }],
    geometry: 'bat-dien',
    colour: 'vàng nhạt',
    hex: '#fde68a',
  },
  {
    formula: '[Fe(H2O)6]^2+',
    centre: 'Fe2',
    parts: [{ ligand: 'H2O', count: 6 }],
    geometry: 'bat-dien',
    colour: 'lục nhạt',
    hex: '#bbf7d0',
  },
  {
    formula: '[Fe(CN)6]^4-',
    centre: 'Fe2',
    parts: [{ ligand: 'CN', count: 6 }],
    geometry: 'bat-dien',
    colour: 'vàng',
    hex: '#fef08a',
  },
  {
    formula: '[Cu(H2O)6]^2+',
    centre: 'Cu2',
    parts: [{ ligand: 'H2O', count: 6 }],
    geometry: 'bat-dien',
    colour: 'xanh lam nhạt',
    hex: '#7dd3fc',
  },
  {
    formula: '[Cu(NH3)4(H2O)2]^2+',
    centre: 'Cu2',
    parts: [
      { ligand: 'NH3', count: 4 },
      { ligand: 'H2O', count: 2 },
    ],
    geometry: 'bat-dien',
    colour: 'xanh lam đậm',
    hex: '#1d4ed8',
  },
  {
    formula: '[PtCl4]^2-',
    centre: 'Pt2',
    parts: [{ ligand: 'Cl', count: 4 }],
    geometry: 'vuong-phang',
  },
  {
    formula: '[Ni(CN)4]^2-',
    centre: 'Ni2',
    parts: [{ ligand: 'CN', count: 4 }],
    geometry: 'vuong-phang',
  },
  {
    formula: '[Zn(OH)4]^2-',
    centre: 'Zn2',
    parts: [{ ligand: 'OH', count: 4 }],
    geometry: 'tu-dien',
    colour: 'không màu',
  },
  {
    formula: '[Zn(NH3)4]^2+',
    centre: 'Zn2',
    parts: [{ ligand: 'NH3', count: 4 }],
    geometry: 'tu-dien',
    colour: 'không màu',
  },
];
