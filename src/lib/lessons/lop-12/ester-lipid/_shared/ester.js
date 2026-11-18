/**
 * Simple esters RCOOR' built from an acid part (the carboxylate RCOO–) and
 * an alcohol part (the hydrocarbon group R'), named the book's way: the name
 * of R' followed by the name of the carboxylate ("ethyl acetate"). Each
 * ester knows its molecular formula, its molar mass (C = 12, H = 1,
 * O = 16, Na = 23, as the book counts) and the products of its hydrolysis
 * in acid and in a sodium hydroxide solution.
 */

/**
 * @typedef {object} AcidPart
 * @property {string} id
 * @property {string} r condensed formula of R, written before COO
 * @property {number} c carbon atoms in R
 * @property {number} h hydrogen atoms in R
 * @property {string} name carboxylate name used in the ester name
 * @property {string} acid name of the carboxylic acid
 * @property {string} salt name of the sodium salt
 */

/**
 * @typedef {object} AlcoholPart
 * @property {string} id
 * @property {string} r condensed formula of R', written after COO
 * @property {number} c carbon atoms in R'
 * @property {number} h hydrogen atoms in R'
 * @property {string} name name of the group R'
 * @property {string} alcohol name of the alcohol R'OH
 * @property {string} formula condensed formula of the alcohol
 */

/** @type {AcidPart[]} */
export const ACID_PARTS = [
  {
    id: 'formate',
    r: 'H',
    c: 0,
    h: 1,
    name: 'formate',
    acid: 'formic acid',
    salt: 'sodium formate',
  },
  {
    id: 'acetate',
    r: 'CH3',
    c: 1,
    h: 3,
    name: 'acetate',
    acid: 'acetic acid',
    salt: 'sodium acetate',
  },
  {
    id: 'propionate',
    r: 'C2H5',
    c: 2,
    h: 5,
    name: 'propionate',
    acid: 'propionic acid',
    salt: 'sodium propionate',
  },
  {
    id: 'butyrate',
    r: 'CH3CH2CH2',
    c: 3,
    h: 7,
    name: 'butyrate',
    acid: 'butyric acid',
    salt: 'sodium butyrate',
  },
  {
    id: 'acrylate',
    r: 'CH2=CH',
    c: 2,
    h: 3,
    name: 'acrylate',
    acid: 'acrylic acid',
    salt: 'sodium acrylate',
  },
  {
    id: 'benzoate',
    r: 'C6H5',
    c: 6,
    h: 5,
    name: 'benzoate',
    acid: 'benzoic acid',
    salt: 'sodium benzoate',
  },
];

/** @type {AlcoholPart[]} */
export const ALCOHOL_PARTS = [
  { id: 'methyl', r: 'CH3', c: 1, h: 3, name: 'methyl', alcohol: 'methanol', formula: 'CH3OH' },
  { id: 'ethyl', r: 'C2H5', c: 2, h: 5, name: 'ethyl', alcohol: 'ethanol', formula: 'C2H5OH' },
  {
    id: 'propyl',
    r: 'CH2CH2CH3',
    c: 3,
    h: 7,
    name: 'propyl',
    alcohol: 'propan-1-ol',
    formula: 'CH3CH2CH2OH',
  },
  {
    id: 'isoamyl',
    r: 'CH2CH2CH(CH3)2',
    c: 5,
    h: 11,
    name: 'isoamyl',
    alcohol: 'isoamyl alcohol',
    formula: '(CH3)2CHCH2CH2OH',
  },
  {
    id: 'benzyl',
    r: 'CH2C6H5',
    c: 7,
    h: 7,
    name: 'benzyl',
    alcohol: 'benzyl alcohol',
    formula: 'C6H5CH2OH',
  },
];

/** Smells of a few esters, as the book describes them. */
const SMELLS = /** @type {Record<string, string>} */ ({
  'isoamyl-acetate': 'mùi chuối chín',
  'benzyl-acetate': 'mùi hoa nhài',
  'ethyl-butyrate': 'mùi dứa',
  'ethyl-propionate': 'mùi dứa',
  'ethyl-acetate': 'mùi thơm nhẹ, dùng làm dung môi',
});

export const M_NAOH = 40;
export const M_GLYCEROL = 92;

/**
 * Molar mass with the book's whole-number atomic masses.
 * @param {number} c
 * @param {number} h
 * @param {number} o
 * @param {number} [na]
 */
export function massOf(c, h, o, na = 0) {
  return 12 * c + h + 16 * o + 23 * na;
}

/** @param {string} id @returns {AcidPart} */
export function acidPart(id) {
  const p = ACID_PARTS.find((x) => x.id === id);
  if (!p) throw new Error(`Không có gốc acid ${id}`);
  return p;
}

/** @param {string} id @returns {AlcoholPart} */
export function alcoholPart(id) {
  const p = ALCOHOL_PARTS.find((x) => x.id === id);
  if (!p) throw new Error(`Không có gốc alcohol ${id}`);
  return p;
}

/**
 * An ester with its name, formulas, molar masses and hydrolysis products.
 * @param {string} acidId
 * @param {string} alcoholId
 */
export function ester(acidId, alcoholId) {
  const a = acidPart(acidId);
  const b = alcoholPart(alcoholId);
  const c = a.c + 1 + b.c;
  const h = a.h + b.h;
  const acidFormula = `${a.r}COOH`;
  const saltFormula = `${a.r}COONa`;
  const formula = `${a.r}COO${b.r}`;
  return {
    acid: a,
    alcohol: b,
    name: `${b.name} ${a.name}`,
    formula,
    molecular: `C${c}H${h}O2`,
    c,
    h,
    molar: massOf(c, h, 2),
    acidFormula,
    saltFormula,
    acidMolar: massOf(a.c + 1, a.h + 1, 2),
    saltMolar: massOf(a.c + 1, a.h, 2, 1),
    alcoholMolar: massOf(b.c, b.h + 1, 1),
    /** No C=C bond and no ring: the ester belongs to CnH2nO2. */
    saturated: h === 2 * c,
    smell: SMELLS[`${b.id}-${a.id}`] ?? '',
    acidEquation: `${formula} + H2O ⇌ ${acidFormula} + ${b.formula}`,
    baseEquation: `${formula} + NaOH → ${saltFormula} + ${b.formula}`,
  };
}

/** @typedef {ReturnType<typeof ester>} Ester */

/** Every ester the two part lists can build. */
export function allEsters() {
  return ACID_PARTS.flatMap((a) => ALCOHOL_PARTS.map((b) => ester(a.id, b.id)));
}

/**
 * Triglycerides of one fatty acid, the fats the book uses in its examples.
 * `acid` is R of the fatty acid RCOOH and `double` its C=C bonds.
 */
export const FATS = [
  {
    id: 'tristearin',
    name: 'tristearin',
    acid: 'stearic acid',
    r: 'C17H35',
    double: 0,
    formula: '(C17H35COO)3C3H5',
    molar: 890,
    salt: 'C17H35COONa',
    saltMolar: 306,
  },
  {
    id: 'tripalmitin',
    name: 'tripalmitin',
    acid: 'palmitic acid',
    r: 'C15H31',
    double: 0,
    formula: '(C15H31COO)3C3H5',
    molar: 806,
    salt: 'C15H31COONa',
    saltMolar: 278,
  },
  {
    id: 'triolein',
    name: 'triolein',
    acid: 'oleic acid',
    r: 'C17H33',
    double: 1,
    formula: '(C17H33COO)3C3H5',
    molar: 884,
    salt: 'C17H33COONa',
    saltMolar: 304,
  },
  {
    id: 'trilinolein',
    name: 'trilinolein',
    acid: 'linoleic acid',
    r: 'C17H31',
    double: 2,
    formula: '(C17H31COO)3C3H5',
    molar: 878,
    salt: 'C17H31COONa',
    saltMolar: 302,
  },
];

/** A condensed formula as TeX, `\mathrm{CH_{2}{=}CHCOONa}`. */
export { formulaTex as texFormula } from '#lib/domain/formula.js';
