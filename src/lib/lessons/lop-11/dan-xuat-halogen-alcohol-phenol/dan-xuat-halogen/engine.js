/**
 * The two reactions of an alkyl halide, carbon by carbon. A halide is a chain
 * of carbons, each with its number of hydrogens and an optional CH3 branch,
 * plus the index of the carbon that carries the halogen X.
 *
 * - Substitution (NaOH in water, heated): OH takes the place of X.
 * - Elimination (KOH in ethanol, heated): X leaves with one H from a
 *   neighbouring carbon and a C=C bond forms between the two. Zaitsev's rule:
 *   the main product comes when the H leaves from the neighbour of higher
 *   order (bậc), the one bonded to more carbons.
 */

/** @typedef {{ h: number, branch?: string }} Carbon */
/**
 * @typedef {object} Halide
 * @property {string} id
 * @property {string} name
 * @property {string} x the halogen symbol
 * @property {Carbon[]} chain
 * @property {number} at index of the carbon that carries X
 * @property {string} alcohol name of the substitution product
 * @property {Record<number, string>} alkenes elimination product name by the index of the carbon that loses H
 */

/** @type {Halide[]} */
export const HALIDES = [
  {
    id: 'bromoethane',
    name: 'bromoethane',
    x: 'Br',
    chain: [{ h: 3 }, { h: 2 }],
    at: 1,
    alcohol: 'ethanol',
    alkenes: { 0: 'ethene (ethylene)' },
  },
  {
    id: '2-bromopropane',
    name: '2-bromopropane',
    x: 'Br',
    chain: [{ h: 3 }, { h: 1 }, { h: 3 }],
    at: 1,
    alcohol: 'propan-2-ol',
    alkenes: { 0: 'propene', 2: 'propene' },
  },
  {
    id: '2-bromobutane',
    name: '2-bromobutane',
    x: 'Br',
    chain: [{ h: 3 }, { h: 1 }, { h: 2 }, { h: 3 }],
    at: 1,
    alcohol: 'butan-2-ol',
    alkenes: { 0: 'but-1-ene', 2: 'but-2-ene' },
  },
  {
    id: '2-chloro-2-methylbutane',
    name: '2-chloro-2-methylbutane',
    x: 'Cl',
    chain: [{ h: 3 }, { h: 0, branch: 'CH3' }, { h: 2 }, { h: 3 }],
    at: 1,
    alcohol: '2-methylbutan-2-ol',
    alkenes: { 0: '2-methylbut-1-ene', 2: '2-methylbut-2-ene' },
  },
];

/**
 * The condensed label of one carbon.
 * @param {Carbon} c
 * @param {string} [x] group bonded to it
 * @param {boolean} [last] whether it is written last in the chain
 */
function label(c, x = '', last = false) {
  const h = c.h === 0 ? '' : c.h === 1 ? 'H' : `H${c.h}`;
  const added = x === 'OH' && !(last && c.h > 0 && !c.branch) ? '(OH)' : x;
  return `C${h}${added}${c.branch ? `(${c.branch})` : ''}`;
}

/**
 * A chain written as text.
 * @param {Carbon[]} chain
 * @param {number} double index of the first carbon of a C=C bond, or -1
 * @param {Record<number, string>} [added] groups by carbon index
 */
function chainText(chain, double, added = {}) {
  return chain
    .map((c, i) => {
      const bond = i === 0 ? '' : i - 1 === double ? '=' : '–';
      return `${bond}${label(c, added[i], i === chain.length - 1)}`;
    })
    .join('');
}

/** @param {Halide} halide */
export const halideText = (halide) => chainText(halide.chain, -1, { [halide.at]: halide.x });

/**
 * Order of a carbon in the chain: how many carbons it is bonded to.
 * @param {Carbon[]} chain
 * @param {number} i
 */
export function carbonOrder(chain, i) {
  const neighbours = (i > 0 ? 1 : 0) + (i < chain.length - 1 ? 1 : 0);
  return neighbours + (chain[i].branch ? 1 : 0);
}

/**
 * The neighbours of the halogen carbon that still carry an H and so can lose
 * one in elimination.
 * @param {Halide} halide
 * @returns {number[]}
 */
export function betaCarbons(halide) {
  return [halide.at - 1, halide.at + 1].filter(
    (i) => i >= 0 && i < halide.chain.length && halide.chain[i].h > 0,
  );
}

/**
 * The substitution product with NaOH in water.
 * @param {Halide} halide
 */
export function substitute(halide) {
  const text = chainText(halide.chain, -1, { [halide.at]: 'OH' });
  return {
    text,
    name: halide.alcohol,
    equation: `${halideText(halide)} + NaOH → ${text} + Na${halide.x}`,
  };
}

/**
 * The elimination product when the H leaves from carbon `from`.
 * @param {Halide} halide
 * @param {number} from
 */
export function eliminate(halide, from) {
  if (!betaCarbons(halide).includes(from)) {
    throw new Error('H must leave from a neighbour of the halogen carbon');
  }
  const chain = halide.chain.map((c, i) => (i === from ? { ...c, h: c.h - 1 } : { ...c }));
  let double = Math.min(from, halide.at);
  let ordered = chain;
  // write the double bond as near the left end as it can go
  if (chain.length - 2 - double < double) {
    ordered = [...chain].reverse();
    double = chain.length - 2 - double;
  }
  const text = chainText(ordered, double);
  const name = halide.alkenes[from];
  const options = betaCarbons(halide);
  const names = new Set(options.map((i) => halide.alkenes[i]));
  const best = Math.max(...options.map((i) => carbonOrder(halide.chain, i)));
  const kind = /** @type {'main' | 'minor' | 'only'} */ (
    names.size === 1 ? 'only' : carbonOrder(halide.chain, from) === best ? 'main' : 'minor'
  );
  return {
    text,
    name,
    kind,
    equation: `${halideText(halide)} + KOH → ${text} + K${halide.x} + H2O`,
  };
}
