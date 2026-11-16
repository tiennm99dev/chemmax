/**
 * A lock-and-key model of an enzyme, for the lesson on enzymes as
 * biological catalysts.
 *
 * - Selectivity: each enzyme has an active site shaped for one substrate
 *   (amylase for starch, pepsin for proteins, lipase for fats); any other
 *   substrate does not fit and nothing happens.
 * - Temperature: the rate rises with temperature up to the optimum near body
 *   temperature (37 °C), doubling for every 10 °C, then falls quickly as the
 *   protein loses its shape; at 60 °C or above the enzyme is denatured.
 * - pH: each enzyme works best near its own pH (pepsin in the acidic stomach
 *   near pH 2, salivary amylase near 6,8, pancreatic lipase near 8); far
 *   from it the rate falls to almost nothing.
 * Heat denaturing does not undo itself when the temperature comes back. The
 * numbers are a teaching model, not measured data.
 */

/** @typedef {'amylase' | 'pepsin' | 'lipase'} EnzymeId */
/** @typedef {'tinh-bot' | 'protein' | 'chat-beo'} SubstrateId */
/** @typedef {'circle' | 'triangle' | 'square'} Shape */

/** @type {{ id: EnzymeId, name: string, where: string, substrate: SubstrateId, pH: number, shape: Shape }[]} */
export const ENZYMES = [
  {
    id: 'amylase',
    name: 'amylase',
    where: 'nước bọt',
    substrate: 'tinh-bot',
    pH: 6.8,
    shape: 'circle',
  },
  { id: 'pepsin', name: 'pepsin', where: 'dạ dày', substrate: 'protein', pH: 2, shape: 'triangle' },
  { id: 'lipase', name: 'lipase', where: 'tuỵ', substrate: 'chat-beo', pH: 8, shape: 'square' },
];

/** @type {{ id: SubstrateId, name: string, shape: Shape, products: string }[]} */
export const SUBSTRATES = [
  { id: 'tinh-bot', name: 'tinh bột', shape: 'circle', products: 'maltose' },
  { id: 'protein', name: 'protein', shape: 'triangle', products: 'các peptide ngắn hơn' },
  { id: 'chat-beo', name: 'chất béo', shape: 'square', products: 'acid béo và glycerol' },
];

export const OPTIMUM_T = 37;
export const DENATURE_T = 60;
const PH_WIDTH = 1.5;

/** @param {EnzymeId} id */
export function enzyme(id) {
  const e = ENZYMES.find((x) => x.id === id);
  if (!e) throw new Error(`unknown enzyme ${id}`);
  return e;
}

/** @param {SubstrateId} id */
export function substrate(id) {
  const s = SUBSTRATES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown substrate ${id}`);
  return s;
}

/**
 * Share of the best rate from temperature alone, 0 to 1.
 * @param {number} t °C
 */
export function temperatureFactor(t) {
  if (t >= DENATURE_T) return 0;
  if (t <= OPTIMUM_T) return 2 ** ((t - OPTIMUM_T) / 10);
  const x = (t - OPTIMUM_T) / (DENATURE_T - OPTIMUM_T);
  return 1 - x * x;
}

/**
 * Share of the best rate from pH alone, 0 to 1.
 * @param {EnzymeId} id
 * @param {number} pH
 */
export function phFactor(id, pH) {
  const d = (pH - enzyme(id).pH) / PH_WIDTH;
  return Math.exp(-d * d);
}

/**
 * Whether this temperature denatures the enzyme.
 * @param {number} t
 */
export function denatures(t) {
  return t >= DENATURE_T;
}

/**
 * Whether the substrate fits the active site.
 * @param {EnzymeId} id
 * @param {SubstrateId} sub
 */
export function fits(id, sub) {
  return enzyme(id).substrate === sub;
}

/**
 * Rate as a percentage of the best rate of this enzyme.
 * @param {EnzymeId} id
 * @param {SubstrateId} sub
 * @param {number} t
 * @param {number} pH
 * @param {boolean} denatured
 */
export function activity(id, sub, t, pH, denatured) {
  if (!fits(id, sub) || denatured || denatures(t)) return 0;
  return 100 * temperatureFactor(t) * phFactor(id, pH);
}

/**
 * Points of the rate against temperature at this pH, for a plot.
 * @param {EnzymeId} id
 * @param {number} pH
 * @returns {Array<[number, number]>}
 */
export function curve(id, pH) {
  /** @type {Array<[number, number]>} */
  const pts = [];
  for (let t = 0; t <= 80; t += 1) {
    pts.push([t, denatures(t) ? 0 : 100 * temperatureFactor(t) * phFactor(id, pH)]);
  }
  return pts;
}
