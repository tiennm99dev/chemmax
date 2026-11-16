/**
 * The bench of the chapter review: four unlabelled samples (glucose,
 * fructose, saccharose and starch paste) to tell apart with the reagents of
 * the chapter. The chemistry comes from the shared table in sugars.js; the
 * table cells show its short wording.
 */
import { shuffle } from '#lib/core/drill.js';
import { REAGENTS, observe as observeTube, sugar } from '../_shared/sugars.js';

/** @typedef {import('../_shared/sugars.js').SugarId} SugarId */
/** @typedef {import('../_shared/sugars.js').ReagentId} ReagentId */

/** @type {SugarId[]} */
const IDS = ['glucose', 'fructose', 'saccharose', 'tinh-bot'];

export const SAMPLES = IDS.map((id) => ({ id, name: sugar(id).name, state: sugar(id).state }));

/** @type {ReagentId[]} */
const REAGENT_IDS = ['iodine', 'tollens', 'bromine', 'cu-oh2'];

export const BENCH_REAGENTS = REAGENT_IDS.map((id) => {
  const r = REAGENTS.find((x) => x.id === id);
  if (!r) throw new Error(`unknown reagent ${id}`);
  return r;
});

/**
 * The samples under labels A to D.
 * @param {() => number} rand
 */
export function dealSamples(rand) {
  return shuffle(rand, IDS);
}

/**
 * What a test shows, in the form the sample bench takes.
 * @param {SugarId} id
 * @param {ReagentId} reagent
 */
export function observe(id, reagent) {
  const o = observeTube(id, reagent);
  return { text: o.short, liquid: o.liquid, precipitate: o.precipitate, amount: o.amount };
}

/**
 * The fewest tests that name every sample: iodine finds the starch, the
 * Tollens reagent splits the reducing sugars from saccharose, bromine water
 * splits glucose from fructose.
 */
export const PLAN = /** @type {const} */ ([
  ['iodine', 'tinh-bot'],
  ['tollens', 'saccharose'],
  ['bromine', 'glucose'],
]);
