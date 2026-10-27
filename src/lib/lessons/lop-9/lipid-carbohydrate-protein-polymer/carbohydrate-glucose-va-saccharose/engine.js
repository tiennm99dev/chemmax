/**
 * The virtual test tubes of the glucose and saccharose lesson. A tube holds
 * one sample; it may first be heated with dilute acid (hydrolysis, then the
 * acid is neutralised), and then the silver-mirror reagent (AgNO3 in NH3) is
 * added and the tube warmed. Only glucose gives the mirror; saccharose gives
 * it only after it has been hydrolysed into glucose and fructose.
 */

/** Book molar masses, g/mol. */
export const MOLAR_MASS = { glucose: 180, saccharose: 342, ethanol: 46, ag: 108, co2: 44 };

/** Volume of one mole of gas at standard conditions (25 °C, 1 bar), L. */
export const MOLAR_VOLUME = 24.79;

export const EQUATIONS = {
  mirror: 'C6H12O6 + Ag2O → C6H12O7 + 2Ag↓',
  hydrolysis: 'C12H22O11 + H2O → C6H12O6 + C6H12O6',
  fermentation: 'C6H12O6 → 2C2H5OH + 2CO2↑',
};

/** @typedef {'glucose' | 'saccharose' | 'water'} SampleId */

/**
 * @typedef {{ id: SampleId, name: string, formula: string | null }} Sample
 */

/** @type {Sample[]} */
export const SAMPLES = [
  { id: 'glucose', name: 'Dung dịch glucose', formula: 'C6H12O6' },
  { id: 'saccharose', name: 'Dung dịch saccharose', formula: 'C12H22O11' },
  { id: 'water', name: 'Nước cất', formula: null },
];

/**
 * What is dissolved in the tube, and whether glucose is among it.
 * @param {SampleId} sample
 * @param {boolean} hydrolysed whether the tube was heated with dilute acid first
 */
export function tubeContents(sample, hydrolysed) {
  if (sample === 'glucose') return { solutes: ['glucose'], hasGlucose: true, changed: false };
  if (sample === 'saccharose') {
    return hydrolysed
      ? { solutes: ['glucose', 'fructose'], hasGlucose: true, changed: true }
      : { solutes: ['saccharose'], hasGlucose: false, changed: false };
  }
  return { solutes: [], hasGlucose: false, changed: false };
}

/**
 * Whether a silver mirror forms when the silver-mirror reagent is added and
 * the tube is warmed.
 * @param {SampleId} sample
 * @param {boolean} hydrolysed
 */
export function silverMirror(sample, hydrolysed) {
  return tubeContents(sample, hydrolysed).hasGlucose;
}

/**
 * Silver (g) deposited by `grams` of glucose: 1 mol glucose gives 2 mol Ag.
 * @param {number} grams
 */
export function silverFromGlucose(grams) {
  return round4((grams / MOLAR_MASS.glucose) * 2 * MOLAR_MASS.ag);
}

/**
 * Ethylic alcohol (g) and CO2 (L, standard conditions) from fermenting
 * `grams` of glucose with the given yield in percent.
 * @param {number} grams
 * @param {number} yieldPercent
 */
export function fermentation(grams, yieldPercent) {
  const mol = ((grams / MOLAR_MASS.glucose) * 2 * yieldPercent) / 100;
  return {
    ethanolMol: round4(mol),
    ethanolGrams: round4(mol * MOLAR_MASS.ethanol),
    co2Litres: round4(mol * MOLAR_VOLUME),
  };
}

/** @param {number} x */
function round4(x) {
  return Math.round(x * 10_000) / 10_000;
}
