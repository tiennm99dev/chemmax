/**
 * The bench of the chapter review: four unlabelled samples (methylamine,
 * aniline, glycine and the tripeptide Gly-Ala-Gly) to tell apart with litmus,
 * bromine water and copper(II) hydroxide in a base. The chemistry comes from
 * the shared table in lab.js.
 */
import { shuffle } from '#lib/core/drill.js';
import { observe as observeTube, reagent, substance } from '../_shared/lab.js';

/** @typedef {import('../_shared/lab.js').SubstanceId} SubstanceId */
/** @typedef {import('../_shared/lab.js').ReagentId} ReagentId */

/** @type {SubstanceId[]} */
const IDS = ['methylamine', 'aniline', 'glycine', 'gly-ala-gly'];

export const SAMPLES = IDS.map((id) => ({
  id,
  name: substance(id).name,
  state: substance(id).state,
}));

/** @type {ReagentId[]} */
const REAGENT_IDS = ['quy', 'bromine', 'biuret'];

export const BENCH_REAGENTS = REAGENT_IDS.map((id) => reagent(id));

/**
 * The samples under labels A to D.
 * @param {() => number} rand
 */
export function dealSamples(rand) {
  return shuffle(rand, IDS);
}

/**
 * What a test shows, in the form the sample bench takes.
 * @param {SubstanceId} id
 * @param {ReagentId} r
 */
export function observe(id, r) {
  const o = observeTube(id, r);
  return { text: o.short, liquid: o.liquid, precipitate: o.precipitate, amount: o.amount };
}

/**
 * The fewest tests that name every sample: litmus finds methylamine, bromine
 * water finds aniline, the biuret test splits the tripeptide from glycine.
 */
export const PLAN = /** @type {const} */ ([
  ['quy', 'methylamine'],
  ['bromine', 'aniline'],
  ['biuret', 'gly-ala-gly'],
]);
