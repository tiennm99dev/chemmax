/**
 * Alcohols drawn as a carbon chain: each carbon has its number of hydrogens,
 * a count of CH3 branches and whether it carries an OH group.
 *
 * - The order (bậc) of an alcohol is the order of the carbon carrying the OH:
 *   how many carbons that carbon is bonded to. Methanol counts as order I.
 * - Mild oxidation by CuO, heated: order I gives an aldehyde, order II a
 *   ketone, order III does not react.
 * - Copper(II) hydroxide dissolves into a deep blue solution only with an
 *   alcohol having OH groups on two neighbouring carbons.
 */

/** @typedef {{ h: number, branches?: number, oh?: boolean }} Carbon */
/**
 * @typedef {object} Alcohol
 * @property {string} id
 * @property {string} name
 * @property {string} text condensed formula
 * @property {Carbon[]} chain
 * @property {string} [oxidised] product of CuO, as text, when there is one
 * @property {string} [oxidisedName]
 */

/** @type {Alcohol[]} */
export const ALCOHOLS = [
  {
    id: 'methanol',
    name: 'methanol',
    text: 'CH3OH',
    chain: [{ h: 3, oh: true }],
    oxidised: 'HCHO',
    oxidisedName: 'formaldehyde (aldehyde)',
  },
  {
    id: 'ethanol',
    name: 'ethanol',
    text: 'CH3–CH2OH',
    chain: [{ h: 3 }, { h: 2, oh: true }],
    oxidised: 'CH3CHO',
    oxidisedName: 'acetaldehyde (aldehyde)',
  },
  {
    id: 'propan-1-ol',
    name: 'propan-1-ol',
    text: 'CH3–CH2–CH2OH',
    chain: [{ h: 3 }, { h: 2 }, { h: 2, oh: true }],
    oxidised: 'CH3–CH2–CHO',
    oxidisedName: 'propanal (aldehyde)',
  },
  {
    id: 'propan-2-ol',
    name: 'propan-2-ol',
    text: 'CH3–CH(OH)–CH3',
    chain: [{ h: 3 }, { h: 1, oh: true }, { h: 3 }],
    oxidised: 'CH3–CO–CH3',
    oxidisedName: 'acetone (ketone)',
  },
  {
    id: 'butan-2-ol',
    name: 'butan-2-ol',
    text: 'CH3–CH(OH)–CH2–CH3',
    chain: [{ h: 3 }, { h: 1, oh: true }, { h: 2 }, { h: 3 }],
    oxidised: 'CH3–CO–CH2–CH3',
    oxidisedName: 'butanone (ketone)',
  },
  {
    id: '2-methylpropan-1-ol',
    name: '2-methylpropan-1-ol',
    text: 'CH3–CH(CH3)–CH2OH',
    chain: [{ h: 3 }, { h: 1, branches: 1 }, { h: 2, oh: true }],
    oxidised: 'CH3–CH(CH3)–CHO',
    oxidisedName: '2-methylpropanal (aldehyde)',
  },
  {
    id: '2-methylpropan-2-ol',
    name: '2-methylpropan-2-ol',
    text: 'CH3–C(CH3)(OH)–CH3',
    chain: [{ h: 3 }, { h: 0, branches: 1, oh: true }, { h: 3 }],
  },
  {
    id: '2-methylbutan-2-ol',
    name: '2-methylbutan-2-ol',
    text: 'CH3–C(CH3)(OH)–CH2–CH3',
    chain: [{ h: 3 }, { h: 0, branches: 1, oh: true }, { h: 2 }, { h: 3 }],
  },
];

/**
 * How many carbons carbon `i` is bonded to.
 * @param {Carbon[]} chain
 * @param {number} i
 */
export function carbonOrder(chain, i) {
  return (i > 0 ? 1 : 0) + (i < chain.length - 1 ? 1 : 0) + (chain[i].branches ?? 0);
}

/**
 * The order of a mono-alcohol, 1 to 3 (methanol counts as 1).
 * @param {Alcohol} alcohol
 */
export function alcoholOrder(alcohol) {
  const i = alcohol.chain.findIndex((c) => c.oh);
  return Math.max(1, carbonOrder(alcohol.chain, i));
}

/**
 * The CuO oxidation equation, or null for a tertiary alcohol.
 * @param {Alcohol} alcohol
 */
export function oxidation(alcohol) {
  if (!alcohol.oxidised) return null;
  return `${alcohol.text} + CuO → ${alcohol.oxidised} + Cu + H2O`;
}

/**
 * @typedef {object} Polyol
 * @property {string} id
 * @property {string} name
 * @property {string} text
 * @property {number[]} oh carbon numbers (from 1) that carry an OH
 * @property {string} [equation] the reaction with Cu(OH)2, when it dissolves
 */

/** @type {Polyol[]} */
export const POLYOLS = [
  { id: 'ethanol', name: 'ethanol', text: 'CH3–CH2OH', oh: [1] },
  {
    id: 'ethylene-glycol',
    name: 'ethylene glycol',
    text: 'HOCH2–CH2OH',
    oh: [1, 2],
    equation: '2C2H4(OH)2 + Cu(OH)2 → [C2H4(OH)O]2Cu + 2H2O',
  },
  {
    id: 'glycerol',
    name: 'glycerol',
    text: 'HOCH2–CH(OH)–CH2OH',
    oh: [1, 2, 3],
    equation: '2C3H5(OH)3 + Cu(OH)2 → [C3H5(OH)2O]2Cu + 2H2O',
  },
  { id: 'propane-1-3-diol', name: 'propane-1,3-diol', text: 'HOCH2–CH2–CH2OH', oh: [1, 3] },
  { id: 'propan-2-ol', name: 'propan-2-ol', text: 'CH3–CH(OH)–CH3', oh: [2] },
];

/**
 * Whether the alcohol has OH groups on two neighbouring carbons, so it
 * dissolves Cu(OH)2 into a deep blue solution.
 * @param {Polyol} p
 */
export const dissolvesCopperHydroxide = (p) => p.oh.some((n) => p.oh.includes(n + 1));
