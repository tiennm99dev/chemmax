/**
 * The α-amino acids of the chapter and the peptides built from them.
 *
 * Each amino acid keeps its molecular formula as atom counts, its molar mass
 * and the pKa of its ionisable groups (25 °C, common textbook values), split
 * into acidic groups (–COOH, charge 0 or −1) and basic groups (–NH3⁺, charge
 * +1 or 0). The net charge at a pH is the sum of the average charges of the
 * groups, which is what drives electrophoresis.
 *
 * A peptide of n units loses n − 1 molecules of water, one per peptide bond.
 */

/** @typedef {'gly' | 'ala' | 'val' | 'glu' | 'lys'} AminoId */

/**
 * @typedef {object} AminoAcid
 * @property {AminoId} id
 * @property {string} symbol three-letter symbol
 * @property {string} name common name
 * @property {string} iupac substitution name
 * @property {string} formula condensed structural formula, TeX inside \mathrm{}
 * @property {{ C: number, H: number, N: number, O: number }} atoms
 * @property {number} molar g/mol
 * @property {number[]} acidPka pKa of the –COOH groups
 * @property {number[]} basePka pKa of the –NH3⁺ groups
 * @property {string} color lane colour
 */

/** @type {AminoAcid[]} */
export const AMINO_ACIDS = [
  {
    id: 'gly',
    symbol: 'Gly',
    name: 'glycine',
    iupac: 'aminoethanoic acid',
    formula: 'H_2N{-}CH_2{-}COOH',
    atoms: { C: 2, H: 5, N: 1, O: 2 },
    molar: 75,
    acidPka: [2.34],
    basePka: [9.6],
    color: '#0891b2',
  },
  {
    id: 'ala',
    symbol: 'Ala',
    name: 'alanine',
    iupac: '2-aminopropanoic acid',
    formula: 'CH_3{-}CH(NH_2){-}COOH',
    atoms: { C: 3, H: 7, N: 1, O: 2 },
    molar: 89,
    acidPka: [2.34],
    basePka: [9.69],
    color: '#4f46e5',
  },
  {
    id: 'val',
    symbol: 'Val',
    name: 'valine',
    iupac: '2-amino-3-methylbutanoic acid',
    formula: '(CH_3)_2CH{-}CH(NH_2){-}COOH',
    atoms: { C: 5, H: 11, N: 1, O: 2 },
    molar: 117,
    acidPka: [2.32],
    basePka: [9.62],
    color: '#059669',
  },
  {
    id: 'glu',
    symbol: 'Glu',
    name: 'glutamic acid',
    iupac: '2-aminopentanedioic acid',
    formula: 'HOOC{-}[CH_2]_2{-}CH(NH_2){-}COOH',
    atoms: { C: 5, H: 9, N: 1, O: 4 },
    molar: 147,
    acidPka: [2.19, 4.25],
    basePka: [9.67],
    color: '#dc2626',
  },
  {
    id: 'lys',
    symbol: 'Lys',
    name: 'lysine',
    iupac: '2,6-diaminohexanoic acid',
    formula: 'H_2N{-}[CH_2]_4{-}CH(NH_2){-}COOH',
    atoms: { C: 6, H: 14, N: 2, O: 2 },
    molar: 146,
    acidPka: [2.18],
    basePka: [8.95, 10.53],
    color: '#2563eb',
  },
];

export const M_WATER = 18;

/**
 * @param {string} id
 * @returns {AminoAcid}
 */
export function amino(id) {
  const a = AMINO_ACIDS.find((x) => x.id === id);
  if (!a) throw new Error(`unknown amino acid ${id}`);
  return a;
}

/**
 * Average net charge of the amino acid at this pH.
 * @param {AminoId} id
 * @param {number} pH
 */
export function netCharge(id, pH) {
  const a = amino(id);
  let q = 0;
  for (const pk of a.acidPka) q -= 1 / (1 + 10 ** (pk - pH));
  for (const pk of a.basePka) q += 1 / (1 + 10 ** (pH - pk));
  return q;
}

/**
 * The pH where the net charge is zero (isoelectric point), by bisection.
 * @param {AminoId} id
 */
export function isoelectric(id) {
  let lo = 0;
  let hi = 14;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (netCharge(id, mid) > 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Where the amino acid goes in an electric field at this pH.
 * @param {AminoId} id
 * @param {number} pH
 * @returns {'am' | 'duong' | 'dung-yen'} towards the negative pole, the positive pole, or barely moving
 */
export function drift(id, pH) {
  const q = netCharge(id, pH);
  if (q > 0.1) return 'am';
  if (q < -0.1) return 'duong';
  return 'dung-yen';
}

/**
 * The main form in solution at this pH.
 * @param {AminoId} id
 * @param {number} pH
 */
export function mainForm(id, pH) {
  const q = netCharge(id, pH);
  if (q > 0.5) return 'cation';
  if (q < -0.5) return 'anion';
  return 'ion lưỡng cực';
}

/**
 * Molar mass of the peptide built from these units, N-terminal first.
 * @param {AminoId[]} ids
 */
export function peptideMass(ids) {
  if (ids.length === 0) return 0;
  return ids.reduce((s, id) => s + amino(id).molar, 0) - M_WATER * (ids.length - 1);
}

/**
 * Molecular formula of the peptide as TeX inside \mathrm{}.
 * @param {AminoId[]} ids
 */
export function peptideFormula(ids) {
  const n = { C: 0, H: 0, N: 0, O: 0 };
  for (const id of ids) {
    const a = amino(id).atoms;
    n.C += a.C;
    n.H += a.H;
    n.N += a.N;
    n.O += a.O;
  }
  const w = Math.max(0, ids.length - 1);
  n.H -= 2 * w;
  n.O -= w;
  /** @param {string} el @param {number} k */
  const part = (el, k) => (k === 0 ? '' : k === 1 ? el : `${el}_{${k}}`);
  return `${part('C', n.C)}${part('H', n.H)}${part('N', n.N)}${part('O', n.O)}`;
}

/**
 * Short name such as "Gly-Ala-Val".
 * @param {AminoId[]} ids
 */
export function peptideName(ids) {
  return ids.map((id) => amino(id).symbol).join('-');
}

/**
 * Number of peptide bonds.
 * @param {AminoId[]} ids
 */
export function peptideBonds(ids) {
  return Math.max(0, ids.length - 1);
}

/**
 * The biuret test (violet) needs two or more peptide bonds.
 * @param {AminoId[]} ids
 */
export function biuret(ids) {
  return peptideBonds(ids) >= 2;
}

/**
 * The word for a peptide of n units.
 * @param {number} n
 */
export function peptideKind(n) {
  const words = ['', 'amino acid', 'dipeptide', 'tripeptide', 'tetrapeptide', 'pentapeptide'];
  return words[n] ?? 'polypeptide';
}

/**
 * What complete hydrolysis gives, such as "2 glycine, 1 alanine".
 * @param {AminoId[]} ids
 */
export function hydrolysisText(ids) {
  /** @type {Map<AminoId, number>} */
  const count = new Map();
  for (const id of ids) count.set(id, (count.get(id) ?? 0) + 1);
  return [...count.entries()].map(([id, k]) => `${k} ${amino(id).name}`).join(', ');
}
