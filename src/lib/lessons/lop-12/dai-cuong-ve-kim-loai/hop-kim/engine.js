/**
 * A toy model of why an alloy is harder than its base metal: a block of atom
 * layers pushed sideways. In a pure metal the layers are regular and slip
 * past each other under a small force; in an alloy the atoms of a different
 * size make the layers uneven and pin them, so a larger force is needed
 * before they slip. Forces are in arbitrary units from 0 to 10.
 */

/** @typedef {'pure' | 'alloy'} Kind */

/** Force at which the layers start to slip. */
export const THRESHOLD = { pure: 3, alloy: 7 };

/** Largest number of atom spacings the upper layers can slip in the drawing. */
export const MAX_SLIPS = 3;

/**
 * How the upper layers respond to a sideways force: a small elastic lean
 * (fraction of a spacing) below the threshold, whole slips above it.
 * @param {Kind} kind
 * @param {number} force 0..10
 * @returns {{ slips: number, lean: number }}
 */
export function respond(kind, force) {
  const t = THRESHOLD[kind];
  if (force < t) return { slips: 0, lean: (force / t) * 0.2 };
  return { slips: Math.min(MAX_SLIPS, 1 + Math.floor((force - t) / 1.5)), lean: 0 };
}

/**
 * Grid places of the foreign atoms in the alloy block: [row, column]. One of
 * them sits in each of the two layers next to the slip plane.
 * @type {Array<[number, number]>}
 */
export const FOREIGN = [
  [0, 5],
  [1, 2],
  [2, 6],
  [3, 1],
  [4, 4],
];
