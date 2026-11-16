/**
 * An amine built by putting hydrocarbon groups on the three places of the
 * nitrogen atom of ammonia. The first place takes H, CH3, C2H5 or C6H5; the
 * other two take H, CH3 or C2H5, so a built amine has at most one benzene
 * ring, as in the book.
 *
 * - The order (bậc) is the number of hydrocarbon groups on N.
 * - The radical-function name (tên gốc chức) lists the groups in alphabetical
 *   order with di-/tri- for repeats, then "amine": ethylmethylamine.
 * - The substitution name (tên thay thế) takes the longest alkyl group as the
 *   parent chain (methanamine, ethanamine) and names the other groups on N
 *   with the locant N; with a benzene ring the parent is benzenamine.
 * - Base strength is compared by the pKa of the conjugate acid R3NH⁺ (25 °C,
 *   common reference values): the larger it is, the stronger the base. The
 *   lesson shows how many times Kb is larger or smaller than for ammonia.
 */

/** @typedef {'H' | 'CH3' | 'C2H5' | 'C6H5'} Group */

/** @type {Record<Group, { name: string, carbons: number, hydrogens: number, tex: string }>} */
export const GROUPS = {
  H: { name: '', carbons: 0, hydrogens: 1, tex: 'H' },
  CH3: { name: 'methyl', carbons: 1, hydrogens: 3, tex: 'CH_3' },
  C2H5: { name: 'ethyl', carbons: 2, hydrogens: 5, tex: 'C_2H_5' },
  C6H5: { name: 'phenyl', carbons: 6, hydrogens: 5, tex: 'C_6H_5' },
};

/** @type {Group[]} */
export const FIRST_PLACE = ['CH3', 'C2H5', 'C6H5', 'H'];
/** @type {Group[]} */
export const OTHER_PLACES = ['H', 'CH3', 'C2H5'];

/** pKa of R3NH⁺ by the sorted list of groups on N ('' is ammonia). */
const PKA = /** @type {Record<string, number>} */ ({
  '': 9.25,
  CH3: 10.64,
  C2H5: 10.75,
  C6H5: 4.6,
  'CH3,CH3': 10.73,
  'C2H5,C2H5': 10.98,
  'CH3,CH3,CH3': 9.8,
  'C2H5,C2H5,C2H5': 10.75,
  'C6H5,CH3': 4.85,
  'C6H5,CH3,CH3': 5.07,
  'C6H5,C2H5': 5.12,
});

export const AMMONIA_PKA = PKA[''];

const MULTIPLIER = ['', '', 'di', 'tri'];
const SIZE = { CH3: 1, C2H5: 2, C6H5: 6, H: 0 };

/**
 * The hydrocarbon groups on N, sorted: phenyl first, then the larger alkyl.
 * @param {Group[]} places
 * @returns {Group[]}
 */
export function radicals(places) {
  return places.filter((g) => g !== 'H').sort((a, b) => SIZE[b] - SIZE[a]);
}

/**
 * @param {Group[]} rs
 */
function key(rs) {
  return [...rs].sort().join(',');
}

/**
 * Prefixes in alphabetical order with di-/tri- for repeats.
 * @param {Group[]} rs
 * @param {(name: string, count: number) => string} each
 */
function grouped(rs, each) {
  /** @type {Map<string, number>} */
  const count = new Map();
  for (const g of rs) count.set(GROUPS[g].name, (count.get(GROUPS[g].name) ?? 0) + 1);
  return [...count.keys()].sort().map((name) => each(name, count.get(name) ?? 0));
}

/**
 * @typedef {object} Amine
 * @property {boolean} isAmine false for ammonia itself
 * @property {number} order bậc: number of hydrocarbon groups on N
 * @property {'alkylamine' | 'arylamine' | ''} type
 * @property {string} formulaTex condensed formula, TeX inside \mathrm{}
 * @property {string} molecularTex molecular formula, TeX inside \mathrm{}
 * @property {string} radicalName tên gốc chức
 * @property {string} substitutionName tên thay thế
 * @property {string} commonName tên thông thường, if any
 * @property {number | null} pka pKa of the conjugate acid, null when not tabulated
 */

/**
 * @param {Group[]} places the three places on N
 * @returns {Amine}
 */
export function describe(places) {
  const rs = radicals(places);
  const order = rs.length;
  const carbons = rs.reduce((s, g) => s + GROUPS[g].carbons, 0);
  const hydrogens = rs.reduce((s, g) => s + GROUPS[g].hydrogens, 0) + (3 - order);
  const pka = PKA[key(rs)] ?? null;
  const molecularTex =
    order === 0 ? 'NH_3' : `C${carbons > 1 ? `_{${carbons}}` : ''}H_{${hydrogens}}N`;
  if (order === 0) {
    return {
      isAmine: false,
      order,
      type: '',
      formulaTex: 'NH_3',
      molecularTex,
      radicalName: 'ammonia',
      substitutionName: 'ammonia',
      commonName: '',
      pka,
    };
  }
  const tex = rs.map((g) => GROUPS[g].tex);
  const formulaTex =
    order === 1
      ? `${tex[0]}NH_2`
      : order === 2
        ? `${tex[0]}{-}NH{-}${tex[1]}`
        : `${tex[0]}{-}N(${tex[2]}){-}${tex[1]}`;

  const radicalName = grouped(rs, (name, n) => `${MULTIPLIER[n]}${name}`).join('') + 'amine';

  const aryl = rs[0] === 'C6H5';
  const parent = aryl ? 'benzenamine' : rs[0] === 'C2H5' ? 'ethanamine' : 'methanamine';
  const onN = rs.slice(1);
  const prefix = grouped(
    onN,
    (name, n) => `${Array(n).fill('N').join(',')}-${MULTIPLIER[n]}${name}`,
  ).join('-');
  const substitutionName = prefix ? `${prefix}${parent}` : parent;

  return {
    isAmine: true,
    order,
    type: aryl ? 'arylamine' : 'alkylamine',
    formulaTex,
    molecularTex,
    radicalName,
    substitutionName,
    commonName: aryl && order === 1 ? 'aniline' : '',
    pka,
  };
}

/**
 * How many times Kb is larger than that of ammonia (below 1 when weaker).
 * @param {number} pka
 */
export function kbRatio(pka) {
  return 10 ** (pka - AMMONIA_PKA);
}

/**
 * The colour litmus takes in the amine's solution, the book's way:
 * alkylamines turn it blue, aniline leaves it unchanged.
 * @param {Amine} a
 */
export function litmus(a) {
  if (!a.isAmine) return 'xanh';
  return a.type === 'alkylamine' ? 'xanh' : 'không đổi màu';
}
