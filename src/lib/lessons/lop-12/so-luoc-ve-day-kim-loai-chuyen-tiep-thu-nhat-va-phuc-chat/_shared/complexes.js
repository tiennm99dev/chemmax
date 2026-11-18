/**
 * Complexes [MLn]: a central metal ion M and n ligands L, each ligand giving
 * one lone pair to M (a dative bond). The charge of the complex is the
 * charge of M plus the charges of the ligands. Formulas are written the way
 * `ChemFormula` reads them: "[Cu(NH3)4(H2O)2]^2+".
 */
import {
  CENTRE_BASE,
  LIGAND_BASE,
  chargeSup,
  complexCharge as chargeOf,
} from '#lib/domain/complex.js';

export { chargeSup };
export { formulaTex } from '#lib/domain/formula.js';

/**
 * A ligand of the shared table with the drawn colour of its donor atom.
 * @typedef {import('#lib/domain/complex.js').LigandBase & { colour: string }} Ligand
 */

/** @type {Ligand[]} */
export const LIGANDS = [
  { ...LIGAND_BASE.H2O, colour: '#ef4444' },
  { ...LIGAND_BASE.NH3, colour: '#3b82f6' },
  { ...LIGAND_BASE.Cl, colour: '#22c55e' },
  { ...LIGAND_BASE.OH, colour: '#f97316' },
  { ...LIGAND_BASE.CN, colour: '#475569' },
];

/** @param {string} id */
export function ligand(id) {
  const l = LIGANDS.find((x) => x.id === id);
  if (!l) throw new Error(`Không có phối tử ${id}`);
  return l;
}

/** @typedef {import('#lib/domain/complex.js').CentreBase} Centre */

/** @type {Centre[]} */
export const CENTRES = Object.values(CENTRE_BASE);

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
 * One ligand inside the brackets, with its count: "(NH3)4", "Cl4", "(OH)4".
 * @param {Ligand} l
 * @param {number} n
 */
function ligandPart(l, n) {
  const multi = /[A-Z].*[A-Z]|\d/.test(l.formula);
  const body = multi ? `(${l.formula})` : l.formula;
  return n === 1 ? body : `${body}${n}`;
}

/** @typedef {import('#lib/domain/complex.js').Part} Part */

/**
 * The charge of the complex: the centre's charge plus every ligand's.
 * @param {number} centreCharge
 * @param {Part[]} parts
 */
export const complexCharge = (centreCharge, parts) => chargeOf(centreCharge, parts, ligand);

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
