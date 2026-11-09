/**
 * Adding HX (or water) to the double bond of an alkene, carbon by carbon.
 * An alkene is a chain of carbons, each with its number of hydrogens and an
 * optional CH3 branch, and the index of the first carbon of its C=C bond.
 * The learner picks the double-bond carbon that takes the H; the other one
 * takes X. Markovnikov's rule: the main product comes when H goes to the
 * carbon that already has more hydrogens.
 */

/** @typedef {{ h: number, branch?: string }} Carbon */
/**
 * @typedef {object} Alkene
 * @property {string} id
 * @property {string} name
 * @property {Carbon[]} chain
 * @property {number} double index of the first carbon of the C=C bond
 * @property {Record<string, [string, string]>} products product names, X on the first or on the second double-bond carbon
 */
/** @typedef {{ id: string, formula: string, h: string, x: string, condition: string }} Reagent */

/** @type {Reagent[]} */
export const REAGENTS = [
  { id: 'HBr', formula: 'HBr', h: 'H', x: 'Br', condition: '' },
  { id: 'HCl', formula: 'HCl', h: 'H', x: 'Cl', condition: '' },
  { id: 'H2O', formula: 'H2O', h: 'H', x: 'OH', condition: 'xúc tác acid, đun nóng' },
];

/** @type {Alkene[]} */
export const ALKENES = [
  {
    id: 'propene',
    name: 'propene',
    chain: [{ h: 2 }, { h: 1 }, { h: 3 }],
    double: 0,
    products: {
      HBr: ['1-bromopropane', '2-bromopropane'],
      HCl: ['1-chloropropane', '2-chloropropane'],
      H2O: ['propan-1-ol', 'propan-2-ol'],
    },
  },
  {
    id: 'but-1-ene',
    name: 'but-1-ene',
    chain: [{ h: 2 }, { h: 1 }, { h: 2 }, { h: 3 }],
    double: 0,
    products: {
      HBr: ['1-bromobutane', '2-bromobutane'],
      HCl: ['1-chlorobutane', '2-chlorobutane'],
      H2O: ['butan-1-ol', 'butan-2-ol'],
    },
  },
  {
    id: '2-methylprop-1-ene',
    name: '2-methylprop-1-ene',
    chain: [{ h: 2 }, { h: 0, branch: 'CH3' }, { h: 3 }],
    double: 0,
    products: {
      HBr: ['1-bromo-2-methylpropane', '2-bromo-2-methylpropane'],
      HCl: ['1-chloro-2-methylpropane', '2-chloro-2-methylpropane'],
      H2O: ['2-methylpropan-1-ol', '2-methylpropan-2-ol'],
    },
  },
  {
    id: 'but-2-ene',
    name: 'but-2-ene',
    chain: [{ h: 3 }, { h: 1 }, { h: 1 }, { h: 3 }],
    double: 1,
    products: {
      HBr: ['2-bromobutane', '2-bromobutane'],
      HCl: ['2-chlorobutane', '2-chlorobutane'],
      H2O: ['butan-2-ol', 'butan-2-ol'],
    },
  },
];

/**
 * The condensed label of one carbon.
 * @param {Carbon} c
 * @param {string} [x] group added to it
 * @param {boolean} [last] whether it is written last in the chain
 */
function label(c, x = '', last = false) {
  const h = c.h === 0 ? '' : c.h === 1 ? 'H' : `H${c.h}`;
  const added = x === 'OH' && !last ? '(OH)' : x;
  return `C${h}${added}${c.branch ? `(${c.branch})` : ''}`;
}

/**
 * A chain written as text, with the double bond marked when `double` is set.
 * @param {Carbon[]} chain
 * @param {number} double index of the C=C bond, or -1 for none
 * @param {Record<number, string>} [added] groups added by carbon index
 */
function chainText(chain, double, added = {}) {
  return chain
    .map((c, i) => {
      const bond = i === 0 ? '' : i - 1 === double ? '=' : '–';
      return `${bond}${label(c, added[i], i === chain.length - 1)}`;
    })
    .join('');
}

/** @param {Alkene} alkene */
export const alkeneText = (alkene) => chainText(alkene.chain, alkene.double);

/**
 * The carbon of the double bond that takes H in the main product, or -1 when
 * both carbons have the same number of hydrogens.
 * @param {Alkene} alkene
 */
export function markovnikovCarbon(alkene) {
  const a = alkene.double;
  const b = a + 1;
  const ha = alkene.chain[a].h;
  const hb = alkene.chain[b].h;
  if (ha === hb) return -1;
  return ha > hb ? a : b;
}

/**
 * The product when H goes to carbon `hAt` (one of the two double-bond carbons).
 * @param {Alkene} alkene
 * @param {Reagent} reagent
 * @param {number} hAt
 */
export function addAcross(alkene, reagent, hAt) {
  const a = alkene.double;
  if (hAt !== a && hAt !== a + 1) throw new Error('H must go to a carbon of the double bond');
  const xAt = hAt === a ? a + 1 : a;
  const chain = alkene.chain.map((c, i) => (i === hAt ? { ...c, h: c.h + 1 } : { ...c }));
  // write the chain so that the added group sits as far right as it can
  const flip = xAt < chain.length - 1 - xAt;
  const ordered = flip ? [...chain].reverse() : chain;
  const at = flip ? chain.length - 1 - xAt : xAt;
  const text = chainText(ordered, -1, { [at]: reagent.x });
  const name = alkene.products[reagent.id][xAt === a ? 0 : 1];
  const main = markovnikovCarbon(alkene);
  return {
    text,
    name,
    equation: `${alkeneText(alkene)} + ${reagent.formula} → ${text}`,
    kind: /** @type {'main' | 'minor' | 'only'} */ (
      main === -1 ? 'only' : main === hAt ? 'main' : 'minor'
    ),
  };
}
