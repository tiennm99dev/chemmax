/**
 * Fats (chất béo) as triesters of glycerol, and their saponification
 * (RCOO)3C3H5 + 3NaOH → 3RCOONa + C3H5(OH)3. Each molecule of NaOH cuts one
 * ester bond: the fatty-acid part leaves as a sodium salt (soap) and the
 * glycerol keeps an –OH in its place.
 */
import { moleculeMassAmu } from '#lib/domain/book-mass.js';

/**
 * A fatty acid R–COOH, by its R group.
 * @typedef {{ id: string, name: string, r: string, source: string }} FattyAcid
 */

/** @type {FattyAcid[]} */
export const FATTY_ACIDS = [
  { id: 'stearic', name: 'Stearic acid', r: 'C17H35', source: 'mỡ động vật' },
  { id: 'palmitic', name: 'Palmitic acid', r: 'C15H31', source: 'dầu cọ, mỡ động vật' },
  { id: 'oleic', name: 'Oleic acid', r: 'C17H33', source: 'dầu ô liu, dầu lạc' },
  { id: 'linoleic', name: 'Linoleic acid', r: 'C17H31', source: 'dầu hướng dương, dầu đậu nành' },
];

/** Book molar masses, g/mol. */
export const MOLAR_MASS = { naoh: 40, glycerol: 92 };

/** @param {string} r */
export const acidFormula = (r) => `${r}COOH`;
/** @param {string} r */
export const saltFormula = (r) => `${r}COONa`;

/**
 * Fatty acid by id.
 * @param {string} id
 * @returns {FattyAcid}
 */
export function fattyAcid(id) {
  const a = FATTY_ACIDS.find((x) => x.id === id);
  if (!a) throw new Error(`Unknown fatty acid ${id}`);
  return a;
}

/**
 * Condensed formula of the fat with these three R groups, written the book's
 * way when the three are the same: (C17H35COO)3C3H5. Mixed fats list each
 * group: C17H35COO–, C15H31COO–, … on C3H5, as "(C17H35COO)(C15H31COO)(…)C3H5".
 * @param {string[]} rs three R groups
 */
export function fatFormula(rs) {
  if (rs.every((r) => r === rs[0])) return `(${rs[0]}COO)3C3H5`;
  return `${rs.map((r) => `(${r}COO)`).join('')}C3H5`;
}

/**
 * Molar mass of the fat, g/mol.
 * @param {string[]} rs
 */
export function fatMass(rs) {
  return moleculeMassAmu(fatFormula(rs));
}

/**
 * Masses for one mole of fat saponified completely, g: the left side
 * (fat + 3 NaOH) always equals the right side (salts + glycerol).
 * @param {string[]} rs
 */
export function saponifyMasses(rs) {
  const fat = fatMass(rs);
  const naoh = 3 * MOLAR_MASS.naoh;
  const salts = rs.reduce((s, r) => s + moleculeMassAmu(saltFormula(r)), 0);
  return { fat, naoh, salts, glycerol: MOLAR_MASS.glycerol };
}

/**
 * State of the fat molecule after `cuts` molecules of NaOH have reacted
 * (0 to 3): which ester bonds are cut and which salts have left.
 * @param {string[]} rs
 * @param {number} cuts
 */
export function saponifyStep(rs, cuts) {
  const n = Math.max(0, Math.min(3, Math.floor(cuts)));
  return {
    cut: rs.map((_, i) => i < n),
    salts: rs.slice(0, n).map(saltFormula),
    naoh: n,
    done: n === 3,
  };
}

/**
 * The different sodium salts the fat gives, each with how many moles one mole
 * of fat releases, in the order the R groups first appear.
 * @param {string[]} rs
 * @returns {{ r: string, count: number }[]}
 */
export function saltCounts(rs) {
  /** @type {{ r: string, count: number }[]} */
  const out = [];
  for (const r of rs) {
    const hit = out.find((x) => x.r === r);
    if (hit) hit.count += 1;
    else out.push({ r, count: 1 });
  }
  return out;
}

/**
 * Book-style equation of the saponification. A mixed fat lists each salt
 * with its own coefficient.
 * @param {string[]} rs
 */
export function saponifyEquation(rs) {
  const salts = saltCounts(rs)
    .map(({ r, count }) => `${count > 1 ? count : ''}${saltFormula(r)}`)
    .join(' + ');
  return `${fatFormula(rs)} + 3NaOH → ${salts} + C3H5(OH)3`;
}
