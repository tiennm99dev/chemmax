/**
 * Acid strength on a pKa scale (25 °C, rounded): the smaller the pKa, the
 * stronger the acid. An acid reacts with the salt (or base) of a weaker
 * acid, the one with the larger pKa: HA + B⁻ → A⁻ + HB when pKa(HA) <
 * pKa(HB). This explains why phenol dissolves in NaOH while ethanol does
 * not, and why CO2 in water frees phenol from sodium phenoxide.
 */

/**
 * @typedef {object} Acid
 * @property {string} id
 * @property {string} name
 * @property {string} formula how it is written as a reactant
 * @property {number} pKa
 * @property {string} label short label on the scale
 */

/** @type {Acid[]} */
export const ACIDS = [
  { id: 'acetic', name: 'Acetic acid', formula: 'CH3COOH', pKa: 4.76, label: 'CH₃COOH' },
  {
    id: 'carbonic',
    name: 'Carbonic acid (CO₂ + H₂O)',
    formula: 'CO2 + H2O',
    pKa: 6.35,
    label: 'H₂CO₃',
  },
  { id: 'phenol', name: 'Phenol', formula: 'C6H5OH', pKa: 10.0, label: 'C₆H₅OH' },
  {
    id: 'hydrogencarbonate',
    name: 'Ion hydrogencarbonate',
    formula: 'HCO3^-',
    pKa: 10.33,
    label: 'HCO₃⁻',
  },
  { id: 'water', name: 'Nước', formula: 'H2O', pKa: 15.7, label: 'H₂O' },
  { id: 'ethanol', name: 'Ethanol', formula: 'C2H5OH', pKa: 15.9, label: 'C₂H₅OH' },
];

/** Acids the learner may pour in; HCO3⁻ only appears as the partner of Na2CO3. */
export const ACID_CHOICES = ['acetic', 'carbonic', 'phenol', 'water', 'ethanol'];

/**
 * @typedef {object} Base
 * @property {string} id
 * @property {string} formula
 * @property {string} partner id of its conjugate acid in ACIDS
 */

/** @type {Base[]} */
export const BASES = [
  { id: 'NaOH', formula: 'NaOH', partner: 'water' },
  { id: 'C2H5ONa', formula: 'C2H5ONa', partner: 'ethanol' },
  { id: 'C6H5ONa', formula: 'C6H5ONa', partner: 'phenol' },
  { id: 'Na2CO3', formula: 'Na2CO3', partner: 'hydrogencarbonate' },
  { id: 'NaHCO3', formula: 'NaHCO3', partner: 'carbonic' },
  { id: 'CH3COONa', formula: 'CH3COONa', partner: 'acetic' },
];

/** Equations of the pairs that react, keyed `acid|base`. */
const EQUATIONS = /** @type {Record<string, string>} */ ({
  'acetic|NaOH': 'CH3COOH + NaOH → CH3COONa + H2O',
  'acetic|C2H5ONa': 'CH3COOH + C2H5ONa → CH3COONa + C2H5OH',
  'acetic|C6H5ONa': 'CH3COOH + C6H5ONa → CH3COONa + C6H5OH',
  'acetic|Na2CO3': 'CH3COOH + Na2CO3 → CH3COONa + NaHCO3',
  'acetic|NaHCO3': 'CH3COOH + NaHCO3 → CH3COONa + CO2↑ + H2O',
  'carbonic|NaOH': 'CO2 + NaOH → NaHCO3',
  'carbonic|C2H5ONa': 'CO2 + H2O + C2H5ONa → C2H5OH + NaHCO3',
  'carbonic|C6H5ONa': 'CO2 + H2O + C6H5ONa → C6H5OH + NaHCO3',
  'carbonic|Na2CO3': 'CO2 + H2O + Na2CO3 → 2NaHCO3',
  'phenol|NaOH': 'C6H5OH + NaOH → C6H5ONa + H2O',
  'phenol|C2H5ONa': 'C6H5OH + C2H5ONa → C6H5ONa + C2H5OH',
  'phenol|Na2CO3': 'C6H5OH + Na2CO3 → C6H5ONa + NaHCO3',
  'water|C2H5ONa': 'H2O + C2H5ONa → C2H5OH + NaOH',
});

/** @param {string} id */
export function acid(id) {
  const a = ACIDS.find((x) => x.id === id);
  if (!a) throw new Error(`unknown acid ${id}`);
  return a;
}

/** @param {string} id */
export function base(id) {
  const b = BASES.find((x) => x.id === id);
  if (!b) throw new Error(`unknown base ${id}`);
  return b;
}

/**
 * What happens when an acid meets a base.
 * @param {string} acidId
 * @param {string} baseId
 * @returns {{ result: 'same' | 'yes' | 'no', acid: Acid, partner: Acid, equation: string | null }}
 */
export function react(acidId, baseId) {
  const a = acid(acidId);
  const partner = acid(base(baseId).partner);
  if (a.id === partner.id) return { result: 'same', acid: a, partner, equation: null };
  if (a.pKa < partner.pKa) {
    const equation = EQUATIONS[`${acidId}|${baseId}`];
    if (!equation) throw new Error(`missing equation for ${acidId}|${baseId}`);
    return { result: 'yes', acid: a, partner, equation };
  }
  return { result: 'no', acid: a, partner, equation: null };
}

/** Every pair that the scale says reacts. */
export const REACTING_PAIRS = Object.keys(EQUATIONS);

/**
 * Spreads label positions apart so that neighbours are at least `gap` apart,
 * keeping their order and staying within [min, max] when they fit.
 * @param {number[]} ys ascending positions
 * @param {number} gap
 * @param {number} min
 * @param {number} max
 */
export function spread(ys, gap, min, max) {
  /** @type {number[]} */
  const out = [];
  for (const y of ys)
    out.push(Math.max(y, min, out.length ? out[out.length - 1] + gap : -Infinity));
  const over = out.length ? out[out.length - 1] - max : 0;
  if (over > 0) {
    for (let i = out.length - 1; i >= 0; i--) {
      const limit = i === out.length - 1 ? max : out[i + 1] - gap;
      out[i] = Math.min(out[i], limit);
    }
  }
  return out;
}
