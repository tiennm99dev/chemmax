/**
 * Proteins as chains of amino acids joined by peptide bonds –CO–NH–. Joining
 * two amino acids gives off one molecule of water, so a chain of n amino
 * acids has n − 1 peptide bonds, and hydrolysis takes the same n − 1 waters
 * back. Also the coagulation of egg white by heat, acid or alcohol.
 */
import { moleculeMassAmu } from '#lib/domain/book-mass.js';

/**
 * @typedef {{ id: string, name: string, short: string, formula: string, condensed: string, color: string }} AminoAcid
 */

/** @type {AminoAcid[]} */
export const AMINO_ACIDS = [
  {
    id: 'gly',
    name: 'Glycine',
    short: 'Gly',
    formula: 'C2H5NO2',
    condensed: 'H₂N–CH₂–COOH',
    color: '#0ea5e9',
  },
  {
    id: 'ala',
    name: 'Alanine',
    short: 'Ala',
    formula: 'C3H7NO2',
    condensed: 'H₂N–CH(CH₃)–COOH',
    color: '#f97316',
  },
  {
    id: 'ser',
    name: 'Serine',
    short: 'Ser',
    formula: 'C3H7NO3',
    condensed: 'H₂N–CH(CH₂OH)–COOH',
    color: '#a855f7',
  },
  {
    id: 'val',
    name: 'Valine',
    short: 'Val',
    formula: 'C5H11NO2',
    condensed: 'H₂N–CH(C₃H₇)–COOH',
    color: '#22c55e',
  },
];

/** Longest chain the bead builder holds. */
export const MAX_CHAIN = 12;

/** @param {string} id */
export function aminoAcid(id) {
  const a = AMINO_ACIDS.find((x) => x.id === id);
  if (!a) throw new Error(`Unknown amino acid ${id}`);
  return a;
}

/** @param {string} id */
export function aminoMass(id) {
  return moleculeMassAmu(aminoAcid(id).formula);
}

/**
 * Peptide bonds and waters given off in a chain of `n` amino acids.
 * @param {number} n
 */
export function peptideBonds(n) {
  return Math.max(0, n - 1);
}

/**
 * Molecular mass of the chain built from these amino acids, amu: the sum of
 * the amino acids minus one water (18) per peptide bond.
 * @param {string[]} ids
 */
export function chainMass(ids) {
  const sum = ids.reduce((s, id) => s + aminoMass(id), 0);
  return sum - 18 * peptideBonds(ids.length);
}

/** @typedef {'none' | 'lemon' | 'alcohol'} Additive */

/**
 * How far egg white has coagulated, from 0 (clear liquid) to 1 (firm white):
 * heat sets it from about 60 °C to 80 °C; acid (lemon juice) or alcohol
 * coagulates it without heating.
 * @param {number} celsius
 * @param {Additive} additive
 */
export function coagulation(celsius, additive) {
  if (additive !== 'none') return 1;
  const t = (celsius - 60) / 20;
  return Math.max(0, Math.min(1, t));
}
