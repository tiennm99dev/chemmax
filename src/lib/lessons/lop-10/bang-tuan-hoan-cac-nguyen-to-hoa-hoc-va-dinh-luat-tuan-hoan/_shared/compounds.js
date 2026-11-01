/**
 * Highest oxides and their hydroxides of the main-group elements Li–Ca
 * (oxygen, fluorine and the noble gases have none), as the KNTT Hoá học 10
 * book lists them for period 3, with the acid–base character of each.
 */

/** @typedef {'base' | 'luong-tinh' | 'acid'} Nature */

/**
 * @typedef {object} HighestCompounds
 * @property {number} z
 * @property {number} valence highest valence with oxygen (= group number A)
 * @property {string} oxide formula of the highest oxide, as typed ("Al2O3")
 * @property {Nature} oxideNature
 * @property {string} hydroxide formula of the matching hydroxide ("Al(OH)3")
 * @property {Nature} hydroxideNature
 * @property {string} strength the book's wording: "base mạnh (kiềm)", "acid yếu"
 */

/** @type {HighestCompounds[]} */
export const COMPOUNDS = [
  c(3, 1, 'Li2O', 'base', 'LiOH', 'base', 'base mạnh (kiềm)'),
  c(4, 2, 'BeO', 'luong-tinh', 'Be(OH)2', 'luong-tinh', 'hydroxide lưỡng tính'),
  c(5, 3, 'B2O3', 'acid', 'H3BO3', 'acid', 'acid rất yếu'),
  c(6, 4, 'CO2', 'acid', 'H2CO3', 'acid', 'acid yếu'),
  c(7, 5, 'N2O5', 'acid', 'HNO3', 'acid', 'acid mạnh'),
  c(11, 1, 'Na2O', 'base', 'NaOH', 'base', 'base mạnh (kiềm)'),
  c(12, 2, 'MgO', 'base', 'Mg(OH)2', 'base', 'base yếu'),
  c(13, 3, 'Al2O3', 'luong-tinh', 'Al(OH)3', 'luong-tinh', 'hydroxide lưỡng tính'),
  c(14, 4, 'SiO2', 'acid', 'H2SiO3', 'acid', 'acid yếu'),
  c(15, 5, 'P2O5', 'acid', 'H3PO4', 'acid', 'acid trung bình'),
  c(16, 6, 'SO3', 'acid', 'H2SO4', 'acid', 'acid mạnh'),
  c(17, 7, 'Cl2O7', 'acid', 'HClO4', 'acid', 'acid rất mạnh'),
  c(19, 1, 'K2O', 'base', 'KOH', 'base', 'base mạnh (kiềm)'),
  c(20, 2, 'CaO', 'base', 'Ca(OH)2', 'base', 'base mạnh (kiềm)'),
];

/**
 * @param {number} z
 * @param {number} valence
 * @param {string} oxide
 * @param {Nature} oxideNature
 * @param {string} hydroxide
 * @param {Nature} hydroxideNature
 * @param {string} strength
 * @returns {HighestCompounds}
 */
function c(z, valence, oxide, oxideNature, hydroxide, hydroxideNature, strength) {
  return { z, valence, oxide, oxideNature, hydroxide, hydroxideNature, strength };
}

/** @param {number} z */
export function compoundsOf(z) {
  return COMPOUNDS.find((x) => x.z === z);
}

/** @type {Record<Nature, string>} */
export const OXIDE_NATURE = {
  base: 'oxide base',
  'luong-tinh': 'oxide lưỡng tính',
  acid: 'oxide acid',
};

/** @type {Record<Nature, string>} */
export const HYDROXIDE_NATURE = {
  base: 'base',
  'luong-tinh': 'hydroxide lưỡng tính',
  acid: 'acid',
};

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

/** @param {number} n 1-8 */
export function roman(n) {
  return ROMAN[n] ?? String(n);
}

/**
 * The formula of the highest oxide of an element R of group `valence`A,
 * written R2On for odd n and ROn/2 for even n ("R2O5", "RO3").
 * @param {string} symbol
 * @param {number} valence 1-7
 */
export function oxideFormula(symbol, valence) {
  const count = (/** @type {number} */ n) => (n === 1 ? '' : String(n));
  if (valence % 2 === 1) return `${symbol}2O${count(valence)}`;
  return `${symbol}O${count(valence / 2)}`;
}

/**
 * Inline TeX for a formula typed as plain text: "Al2(SO4)3" →
 * "$\mathrm{Al_{2}(SO_{4})_{3}}$", so feedback lines show real subscripts.
 * @param {string} formula
 */
export function formulaTex(formula) {
  return `$\\mathrm{${formula.replace(/([A-Za-z)\]])(\d+)/g, '$1_{$2}')}}$`;
}
