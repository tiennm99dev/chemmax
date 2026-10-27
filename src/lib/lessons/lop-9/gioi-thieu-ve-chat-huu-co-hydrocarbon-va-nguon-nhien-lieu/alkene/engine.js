/**
 * Bromine-water test and polyethylene chain. Gas is bubbled into bromine
 * water in fixed portions: ethylene adds Br2 one to one
 * (CH2=CH2 + Br2 → BrCH2–CH2Br) until the bromine is used up, while methane
 * passes through without reacting. Amounts are kept in micromoles so the
 * arithmetic stays exact.
 */

/** @typedef {'ch4' | 'c2h4'} Gas */

/** Bromine in the tube: 0,01 mol. */
export const BROMINE_UMOL = 10_000;
/** Gas in one portion: 0,002 mol. */
export const PORTION_UMOL = 2_000;
/** Volume of 1 mol of gas at standard conditions (25 °C, 1 bar), in litres. */
export const MOLAR_VOLUME = 24.79;

export const GASES = /** @type {const} */ ({
  ch4: { name: 'methane', formula: 'CH4', reacts: false },
  c2h4: { name: 'ethylene', formula: 'C2H4', reacts: true },
});

/**
 * State of the tube after `portions` portions of a gas.
 * @param {Gas} gas
 * @param {number} portions
 */
export function bromineTest(gas, portions) {
  const fed = portions * PORTION_UMOL;
  const reacted = GASES[gas].reacts ? Math.min(fed, BROMINE_UMOL) : 0;
  return {
    fed,
    reacted,
    bromineLeft: BROMINE_UMOL - reacted,
    escaped: fed - reacted,
    product: reacted,
    /** share of the starting orange colour left, 0 to 1 */
    colour: (BROMINE_UMOL - reacted) / BROMINE_UMOL,
  };
}

/** @param {number} umol */
export function mol(umol) {
  return umol / 1_000_000;
}

/** Portions of ethylene that use up all the bromine. */
export const PORTIONS_TO_CLEAR = Math.ceil(BROMINE_UMOL / PORTION_UMOL);

/**
 * Bromine-water colour for a remaining share: orange fading to almost clear.
 * @param {number} share 0 to 1
 */
export function bromineColour(share) {
  const from = [254, 249, 231];
  const to = [234, 120, 20];
  const c = from.map((f, i) => Math.round(f + (to[i] - f) * share));
  return `rgb(${c.join(', ')})`;
}

/**
 * Molecular mass in amu of a polyethylene chain of n units (end groups
 * ignored, as in the book's (–CH2–CH2–)n).
 * @param {number} n
 */
export function chainMass(n) {
  return 28 * n;
}
