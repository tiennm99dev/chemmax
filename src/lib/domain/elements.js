/**
 * The 118 chemical elements: symbol, IUPAC name (as KNTT writes it), standard
 * atomic weight and Pauling electronegativity, plus everything derived from
 * the atomic number: period, group, block, category, state at 25 °C and the
 * ground-state electron configuration.
 *
 * Atomic weights are the IUPAC conventional values rounded to at most five
 * significant figures. Elements with no stable isotope and no characteristic
 * terrestrial composition carry the mass number of their longest-lived
 * isotope instead, flagged `massNumberOnly` (shown in brackets: [98]).
 */

/**
 * @typedef {'alkali-metal' | 'alkaline-earth-metal' | 'transition-metal'
 *   | 'post-transition-metal' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas'
 *   | 'lanthanide' | 'actinide'} Category
 */
/** @typedef {'s' | 'p' | 'd' | 'f'} Block */
/** @typedef {'solid' | 'liquid' | 'gas' | 'unknown'} State */
/** @typedef {{ n: number, l: number, electrons: number }} Subshell */

/**
 * @typedef {object} Element
 * @property {number} z atomic number
 * @property {string} symbol
 * @property {string} name IUPAC name, lowercase as written in running text
 * @property {string | null} viName traditional Vietnamese name, when one is in common use
 * @property {number} mass standard atomic weight, or a mass number when `massNumberOnly`
 * @property {boolean} massNumberOnly
 * @property {number | null} electronegativity Pauling scale; null when not established
 * @property {number} period
 * @property {number | null} group 1-18; null for the f-block rows (Ce–Lu, Th–Lr)
 * @property {Block} block
 * @property {Category} category
 * @property {State} state at 25 °C and 1 bar
 */

/** [symbol, name, atomic weight, Pauling electronegativity], index = Z - 1. */
const DATA = /** @type {Array<[string, string, number, number | null]>} */ ([
  ['H', 'hydrogen', 1.008, 2.2],
  ['He', 'helium', 4.0026, null],
  ['Li', 'lithium', 6.94, 0.98],
  ['Be', 'beryllium', 9.0122, 1.57],
  ['B', 'boron', 10.81, 2.04],
  ['C', 'carbon', 12.011, 2.55],
  ['N', 'nitrogen', 14.007, 3.04],
  ['O', 'oxygen', 15.999, 3.44],
  ['F', 'fluorine', 18.998, 3.98],
  ['Ne', 'neon', 20.18, null],
  ['Na', 'sodium', 22.99, 0.93],
  ['Mg', 'magnesium', 24.305, 1.31],
  ['Al', 'aluminium', 26.982, 1.61],
  ['Si', 'silicon', 28.085, 1.9],
  ['P', 'phosphorus', 30.974, 2.19],
  ['S', 'sulfur', 32.06, 2.58],
  ['Cl', 'chlorine', 35.45, 3.16],
  ['Ar', 'argon', 39.95, null],
  ['K', 'potassium', 39.098, 0.82],
  ['Ca', 'calcium', 40.078, 1.0],
  ['Sc', 'scandium', 44.956, 1.36],
  ['Ti', 'titanium', 47.867, 1.54],
  ['V', 'vanadium', 50.942, 1.63],
  ['Cr', 'chromium', 51.996, 1.66],
  ['Mn', 'manganese', 54.938, 1.55],
  ['Fe', 'iron', 55.845, 1.83],
  ['Co', 'cobalt', 58.933, 1.88],
  ['Ni', 'nickel', 58.693, 1.91],
  ['Cu', 'copper', 63.546, 1.9],
  ['Zn', 'zinc', 65.38, 1.65],
  ['Ga', 'gallium', 69.723, 1.81],
  ['Ge', 'germanium', 72.63, 2.01],
  ['As', 'arsenic', 74.922, 2.18],
  ['Se', 'selenium', 78.971, 2.55],
  ['Br', 'bromine', 79.904, 2.96],
  ['Kr', 'krypton', 83.798, 3.0],
  ['Rb', 'rubidium', 85.468, 0.82],
  ['Sr', 'strontium', 87.62, 0.95],
  ['Y', 'yttrium', 88.906, 1.22],
  ['Zr', 'zirconium', 91.224, 1.33],
  ['Nb', 'niobium', 92.906, 1.6],
  ['Mo', 'molybdenum', 95.95, 2.16],
  ['Tc', 'technetium', 98, 1.9],
  ['Ru', 'ruthenium', 101.07, 2.2],
  ['Rh', 'rhodium', 102.91, 2.28],
  ['Pd', 'palladium', 106.42, 2.2],
  ['Ag', 'silver', 107.87, 1.93],
  ['Cd', 'cadmium', 112.41, 1.69],
  ['In', 'indium', 114.82, 1.78],
  ['Sn', 'tin', 118.71, 1.96],
  ['Sb', 'antimony', 121.76, 2.05],
  ['Te', 'tellurium', 127.6, 2.1],
  ['I', 'iodine', 126.9, 2.66],
  ['Xe', 'xenon', 131.29, 2.6],
  ['Cs', 'caesium', 132.91, 0.79],
  ['Ba', 'barium', 137.33, 0.89],
  ['La', 'lanthanum', 138.91, 1.1],
  ['Ce', 'cerium', 140.12, 1.12],
  ['Pr', 'praseodymium', 140.91, 1.13],
  ['Nd', 'neodymium', 144.24, 1.14],
  ['Pm', 'promethium', 145, 1.13],
  ['Sm', 'samarium', 150.36, 1.17],
  ['Eu', 'europium', 151.96, 1.2],
  ['Gd', 'gadolinium', 157.25, 1.2],
  ['Tb', 'terbium', 158.93, 1.1],
  ['Dy', 'dysprosium', 162.5, 1.22],
  ['Ho', 'holmium', 164.93, 1.23],
  ['Er', 'erbium', 167.26, 1.24],
  ['Tm', 'thulium', 168.93, 1.25],
  ['Yb', 'ytterbium', 173.05, 1.1],
  ['Lu', 'lutetium', 174.97, 1.27],
  ['Hf', 'hafnium', 178.49, 1.3],
  ['Ta', 'tantalum', 180.95, 1.5],
  ['W', 'tungsten', 183.84, 2.36],
  ['Re', 'rhenium', 186.21, 1.9],
  ['Os', 'osmium', 190.23, 2.2],
  ['Ir', 'iridium', 192.22, 2.2],
  ['Pt', 'platinum', 195.08, 2.28],
  ['Au', 'gold', 196.97, 2.54],
  ['Hg', 'mercury', 200.59, 2.0],
  ['Tl', 'thallium', 204.38, 1.62],
  ['Pb', 'lead', 207.2, 2.33],
  ['Bi', 'bismuth', 208.98, 2.02],
  ['Po', 'polonium', 209, 2.0],
  ['At', 'astatine', 210, 2.2],
  ['Rn', 'radon', 222, 2.2],
  ['Fr', 'francium', 223, 0.7],
  ['Ra', 'radium', 226, 0.9],
  ['Ac', 'actinium', 227, 1.1],
  ['Th', 'thorium', 232.04, 1.3],
  ['Pa', 'protactinium', 231.04, 1.5],
  ['U', 'uranium', 238.03, 1.38],
  ['Np', 'neptunium', 237, 1.36],
  ['Pu', 'plutonium', 244, 1.28],
  ['Am', 'americium', 243, 1.3],
  ['Cm', 'curium', 247, 1.3],
  ['Bk', 'berkelium', 247, 1.3],
  ['Cf', 'californium', 251, 1.3],
  ['Es', 'einsteinium', 252, 1.3],
  ['Fm', 'fermium', 257, 1.3],
  ['Md', 'mendelevium', 258, 1.3],
  ['No', 'nobelium', 259, 1.3],
  ['Lr', 'lawrencium', 266, 1.3],
  ['Rf', 'rutherfordium', 267, null],
  ['Db', 'dubnium', 268, null],
  ['Sg', 'seaborgium', 269, null],
  ['Bh', 'bohrium', 270, null],
  ['Hs', 'hassium', 269, null],
  ['Mt', 'meitnerium', 278, null],
  ['Ds', 'darmstadtium', 281, null],
  ['Rg', 'roentgenium', 282, null],
  ['Cn', 'copernicium', 285, null],
  ['Nh', 'nihonium', 286, null],
  ['Fl', 'flerovium', 289, null],
  ['Mc', 'moscovium', 290, null],
  ['Lv', 'livermorium', 293, null],
  ['Ts', 'tennessine', 294, null],
  ['Og', 'oganesson', 294, null],
]);

/** Traditional Vietnamese names still used alongside the IUPAC ones. */
const VI_NAMES = /** @type {Record<string, string>} */ ({
  Na: 'natri',
  Al: 'nhôm',
  K: 'kali',
  Fe: 'sắt',
  Cu: 'đồng',
  Zn: 'kẽm',
  Ag: 'bạc',
  Sn: 'thiếc',
  Au: 'vàng',
  Hg: 'thuỷ ngân',
  Pb: 'chì',
});

/** Elements whose `mass` is the mass number of the longest-lived isotope. */
const MASS_NUMBER_ONLY = new Set([43, 61, ...range(84, 89), ...range(93, 118)]);

const NONMETALS = new Set([1, 6, 7, 8, 15, 16, 34]);
const HALOGENS = new Set([9, 17, 35, 53, 85, 117]);
const NOBLE_GASES = new Set([2, 10, 18, 36, 54, 86, 118]);
const METALLOIDS = new Set([5, 14, 32, 33, 51, 52]);
const POST_TRANSITION = new Set([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116]);
const GASES = new Set([1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86]);
const LIQUIDS = new Set([35, 80]);

/** Last atomic number of each period. */
const PERIOD_ENDS = [2, 10, 18, 36, 54, 86, 118];

/** Subshell letters by azimuthal quantum number l. */
export const SUBSHELL_LETTERS = ['s', 'p', 'd', 'f'];

/**
 * Ground-state configurations that break the Madelung (n + l) filling order,
 * written as the subshells that differ from it: Cr is 3d⁵4s¹, not 3d⁴4s².
 * @type {Record<number, Record<string, number>>}
 */
const CONFIG_EXCEPTIONS = {
  24: { '3d': 5, '4s': 1 },
  29: { '3d': 10, '4s': 1 },
  41: { '4d': 4, '5s': 1 },
  42: { '4d': 5, '5s': 1 },
  44: { '4d': 7, '5s': 1 },
  45: { '4d': 8, '5s': 1 },
  46: { '4d': 10, '5s': 0 },
  47: { '4d': 10, '5s': 1 },
  57: { '4f': 0, '5d': 1 },
  58: { '4f': 1, '5d': 1 },
  64: { '4f': 7, '5d': 1 },
  78: { '5d': 9, '6s': 1 },
  79: { '5d': 10, '6s': 1 },
  89: { '5f': 0, '6d': 1 },
  90: { '5f': 0, '6d': 2 },
  91: { '5f': 2, '6d': 1 },
  92: { '5f': 3, '6d': 1 },
  93: { '5f': 4, '6d': 1 },
  96: { '5f': 7, '6d': 1 },
  103: { '6d': 0, '7p': 1 },
};

/**
 * @param {number} from
 * @param {number} to
 */
function range(from, to) {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

/** @param {number} z */
function periodOf(z) {
  return PERIOD_ENDS.findIndex((end) => z <= end) + 1;
}

/**
 * Group 1-18 in the 18-column table, with La and Ac in group 3 and the
 * lanthanides Ce–Lu and actinides Th–Lr in their own rows (group null), as
 * in the KNTT table.
 * @param {number} z
 * @returns {number | null}
 */
function groupOf(z) {
  const period = periodOf(z);
  const start = period === 1 ? 1 : PERIOD_ENDS[period - 2] + 1;
  const i = z - start;
  if (period === 1) return z === 1 ? 1 : 18;
  if (period <= 3) return i < 2 ? i + 1 : i + 11;
  if (period <= 5) return i + 1;
  if (i < 3) return i + 1;
  if (i <= 16) return null;
  return i - 13;
}

/**
 * @param {number} z
 * @param {number | null} group
 * @returns {Block}
 */
function blockOf(z, group) {
  if (group === null) return 'f';
  if (group <= 2 || z === 2) return 's';
  if (group <= 12) return 'd';
  return 'p';
}

/**
 * @param {number} z
 * @param {number | null} group
 * @returns {Category}
 */
function categoryOf(z, group) {
  if (NOBLE_GASES.has(z)) return 'noble-gas';
  if (HALOGENS.has(z)) return 'halogen';
  if (NONMETALS.has(z)) return 'nonmetal';
  if (METALLOIDS.has(z)) return 'metalloid';
  if (z >= 57 && z <= 71) return 'lanthanide';
  if (z >= 89 && z <= 103) return 'actinide';
  if (group === 1) return 'alkali-metal';
  if (group === 2) return 'alkaline-earth-metal';
  if (POST_TRANSITION.has(z)) return 'post-transition-metal';
  return 'transition-metal';
}

/** @param {number} z @returns {State} */
function stateOf(z) {
  if (GASES.has(z)) return 'gas';
  if (LIQUIDS.has(z)) return 'liquid';
  return z >= 100 ? 'unknown' : 'solid';
}

/** @type {Element[]} */
export const ELEMENTS = DATA.map(([symbol, name, mass, electronegativity], i) => {
  const z = i + 1;
  const group = groupOf(z);
  return {
    z,
    symbol,
    name,
    viName: VI_NAMES[symbol] ?? null,
    mass,
    massNumberOnly: MASS_NUMBER_ONLY.has(z),
    electronegativity,
    period: periodOf(z),
    group,
    block: blockOf(z, group),
    category: categoryOf(z, group),
    state: stateOf(z),
  };
});

const BY_SYMBOL = new Map(ELEMENTS.map((e) => [e.symbol, e]));

/**
 * Looks an element up by atomic number or symbol (case-sensitive: "Co" is
 * cobalt, "CO" is not a symbol).
 * @param {number | string} key
 * @returns {Element | undefined}
 */
export function element(key) {
  if (typeof key === 'number') return ELEMENTS[key - 1];
  return BY_SYMBOL.get(key);
}

/** Subshells in Madelung order: by n + l, then by n. */
export const FILLING_ORDER = /** @type {Array<{ n: number, l: number }>} */ (
  range(1, 7)
    .flatMap((n) => range(0, Math.min(n - 1, 3)).map((l) => ({ n, l })))
    .sort((a, b) => a.n + a.l - (b.n + b.l) || a.n - b.n)
);

/** @param {{ n: number, l: number }} s */
export function subshellName(s) {
  return `${s.n}${SUBSHELL_LETTERS[s.l]}`;
}

/** @param {number} l */
export function subshellCapacity(l) {
  return 2 * (2 * l + 1);
}

/**
 * Fills `electrons` electrons into subshells in Madelung order.
 * @param {number} electrons
 * @returns {Subshell[]}
 */
export function aufbau(electrons) {
  /** @type {Subshell[]} */
  const out = [];
  let left = electrons;
  for (const s of FILLING_ORDER) {
    if (left <= 0) break;
    const k = Math.min(left, subshellCapacity(s.l));
    out.push({ ...s, electrons: k });
    left -= k;
  }
  return out;
}

/**
 * Ground-state electron configuration of a neutral atom, in filling order
 * (1s 2s 2p 3s 3p 4s 3d …), with the known exceptions applied.
 * @param {number} z
 * @returns {Subshell[]}
 */
export function electronConfiguration(z) {
  const config = aufbau(z);
  const fix = CONFIG_EXCEPTIONS[z];
  if (!fix) return config;
  for (const [name, electrons] of Object.entries(fix)) {
    const s = { n: Number(name[0]), l: SUBSHELL_LETTERS.indexOf(name[1]) };
    const at = config.findIndex((c) => c.n === s.n && c.l === s.l);
    if (at >= 0) config[at].electrons = electrons;
    else config.push({ ...s, electrons });
  }
  const order = (/** @type {Subshell} */ s) =>
    FILLING_ORDER.findIndex((f) => f.n === s.n && f.l === s.l);
  return config.filter((s) => s.electrons > 0).sort((a, b) => order(a) - order(b));
}

/**
 * Electrons per shell n = 1, 2, 3, … (the Bohr picture): Fe → [2, 8, 14, 2].
 * @param {Subshell[]} config
 */
export function shellCounts(config) {
  /** @type {number[]} */
  const shells = [];
  for (const s of config) shells[s.n - 1] = (shells[s.n - 1] ?? 0) + s.electrons;
  return Array.from(shells, (v) => v ?? 0);
}

/**
 * Sorts subshells by shell, then by subshell, the order the textbook writes a
 * finished configuration in: Fe is 1s²2s²2p⁶3s²3p⁶3d⁶4s², although 4s fills
 * before 3d.
 * @param {Subshell[]} config
 */
export function byShell(config) {
  return [...config].sort((a, b) => a.n - b.n || a.l - b.l);
}

/**
 * Writes a configuration as plain text with superscript digits, in shell
 * order: "1s²2s²2p⁶3s¹". With `core`, the inner noble-gas core is
 * abbreviated: "[Ne]3s¹". With `order: 'filling'`, subshells keep the order
 * given (the Madelung filling order for `electronConfiguration`).
 * @param {Subshell[]} config
 * @param {{ core?: boolean, order?: 'shell' | 'filling' }} [options]
 */
export function formatConfiguration(config, options = {}) {
  const sup = (/** @type {number} */ n) => String(n).replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
  let prefix = '';
  let rest = config;
  if (options.core) {
    const total = config.reduce((n, s) => n + s.electrons, 0);
    const gas = [...NOBLE_GASES].filter((g) => g < total).at(-1);
    if (gas) {
      const core = electronConfiguration(gas);
      const inCore = (/** @type {Subshell} */ s) =>
        core.some((c) => c.n === s.n && c.l === s.l && c.electrons === s.electrons);
      if (core.every((c) => config.some((s) => s.n === c.n && s.l === c.l))) {
        prefix = `[${element(gas)?.symbol}]`;
        rest = config.filter((s) => !inCore(s));
      }
    }
  }
  if (options.order !== 'filling') rest = byShell(rest);
  return prefix + rest.map((s) => `${subshellName(s)}${sup(s.electrons)}`).join('');
}

/**
 * Electrons in the outermost shell, the number that sets the group of a main
 * group (A) element.
 * @param {number} z
 */
export function outerElectrons(z) {
  return shellCounts(electronConfiguration(z)).at(-1) ?? 0;
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

/**
 * Group in the A/B notation of the Vietnamese textbooks: 1 → IA, 3 → IIIB,
 * 8-10 → VIIIB, 11 → IB, 13 → IIIA, 18 → VIIIA. Lanthanides and actinides
 * sit in IIIB.
 * @param {Element} el
 */
export function groupLabel(el) {
  const g = el.group ?? 3;
  if (g <= 2) return `${ROMAN[g - 1]}A`;
  if (g <= 7) return `${ROMAN[g - 1]}B`;
  if (g <= 10) return 'VIIIB';
  if (g <= 12) return `${ROMAN[g - 11]}B`;
  return `${ROMAN[g - 11]}A`;
}

/**
 * Grid cell of an element in the 18-column table: row 1-7 for the periods,
 * rows 9 and 10 for the lanthanide and actinide rows (row 8 is a gap).
 * @param {Element} el
 * @returns {{ row: number, col: number }}
 */
export function tablePosition(el) {
  if (el.group !== null) return { row: el.period, col: el.group };
  const first = el.period === 6 ? 58 : 90;
  return { row: el.period + 3, col: 4 + (el.z - first) };
}

/**
 * Formats an atomic weight for display: comma decimal, brackets around a mass
 * number ("[98]").
 * @param {Element} el
 */
export function formatMass(el) {
  if (el.massNumberOnly) return `[${el.mass}]`;
  return String(el.mass).replace('.', ',');
}

/** Vietnamese labels for the categories, as on the KNTT table legend. */
export const CATEGORY_LABELS = /** @type {Record<Category, string>} */ ({
  'alkali-metal': 'Kim loại kiềm',
  'alkaline-earth-metal': 'Kim loại kiềm thổ',
  'transition-metal': 'Kim loại chuyển tiếp',
  'post-transition-metal': 'Kim loại khác',
  metalloid: 'Á kim',
  nonmetal: 'Phi kim',
  halogen: 'Halogen',
  'noble-gas': 'Khí hiếm',
  lanthanide: 'Họ lanthanide',
  actinide: 'Họ actinide',
});

/** @type {Record<State, string>} */
export const STATE_LABELS = {
  solid: 'Rắn',
  liquid: 'Lỏng',
  gas: 'Khí',
  unknown: 'Chưa rõ',
};

/**
 * Coarse kind for grades 6-9: kim loại, phi kim (halogens and metalloids
 * included) or khí hiếm.
 * @param {Element} el
 * @returns {'kim-loai' | 'phi-kim' | 'khi-hiem'}
 */
export function metalKind(el) {
  if (el.category === 'noble-gas') return 'khi-hiem';
  if (['nonmetal', 'halogen', 'metalloid'].includes(el.category)) return 'phi-kim';
  return 'kim-loai';
}
