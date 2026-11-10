/**
 * The virtual test-tube bench for carbonyl compounds: four unlabelled
 * samples (acetaldehyde, propanal, acetone, pentan-3-one) and three
 * reagents.
 *
 * - Tollens' reagent and Cu(OH)2/NaOH, heated, oxidise only aldehydes: a
 *   silver mirror, or a brick-red Cu2O precipitate.
 * - I2 in NaOH gives the yellow iodoform precipitate CHI3 only with a CH3CO–
 *   group (acetaldehyde and methyl ketones).
 *
 * The four samples cover every pair of answers to "aldehyde?" and "has
 * CH3CO–?", so two tests tell them all apart.
 */

/** @typedef {'acetaldehyde' | 'propanal' | 'acetone' | 'pentan-3-one'} SampleId */
/** @typedef {'tollens' | 'copper' | 'iodoform'} ReagentId */
/**
 * @typedef {object} Observation
 * @property {string} liquid
 * @property {string | null} precipitate
 * @property {number} amount height of the precipitate layer, 0 to 1
 * @property {string} text what is seen
 * @property {boolean} changed
 * @property {string | null} equation book-style equation when it reacts
 */

/**
 * @typedef {object} Sample
 * @property {SampleId} id
 * @property {string} name
 * @property {string} formula condensed structural formula
 * @property {'aldehyde' | 'ketone'} family
 * @property {boolean} methylCarbonyl has a CH3CO– group
 * @property {string} acid the carboxylate part after oxidation, without the metal
 */

/** @type {Sample[]} */
export const SAMPLES = [
  {
    id: 'acetaldehyde',
    name: 'Acetaldehyde',
    formula: 'CH3CHO',
    family: 'aldehyde',
    methylCarbonyl: true,
    acid: 'CH3COO',
  },
  {
    id: 'propanal',
    name: 'Propanal',
    formula: 'CH3–CH2–CHO',
    family: 'aldehyde',
    methylCarbonyl: false,
    acid: 'CH3–CH2–COO',
  },
  {
    id: 'acetone',
    name: 'Acetone',
    formula: 'CH3–CO–CH3',
    family: 'ketone',
    methylCarbonyl: true,
    acid: '',
  },
  {
    id: 'pentan-3-one',
    name: 'Pentan-3-one',
    formula: 'CH3–CH2–CO–CH2–CH3',
    family: 'ketone',
    methylCarbonyl: false,
    acid: '',
  },
];

/** @type {{ id: ReagentId, name: string, liquid: string, precipitate: string | null }[]} */
export const REAGENTS = [
  { id: 'tollens', name: 'Thuốc thử Tollens, t°', liquid: '#f1f5f9', precipitate: null },
  { id: 'copper', name: 'Cu(OH)₂/NaOH, t°', liquid: '#e0f2fe', precipitate: '#7dd3fc' },
  { id: 'iodoform', name: 'I₂/NaOH', liquid: '#fef3c7', precipitate: null },
];

const SILVER = '#94a3b8';
const SILVER_LIQUID = '#cbd5e1';
const BRICK = '#b4532a';
const YELLOW = '#facc15';

/** @param {SampleId} id */
export function sample(id) {
  const s = SAMPLES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown sample ${id}`);
  return s;
}

/**
 * The iodoform equation of a compound with a CH3CO– group. The rest R of
 * CH3CO–R ends up as the carboxylate RCOONa.
 * @param {Sample} s
 */
function iodoformEquation(s) {
  if (s.id === 'acetaldehyde') return 'CH3CHO + 3I2 + 4NaOH → HCOONa + CHI3↓ + 3NaI + 3H2O';
  return 'CH3–CO–CH3 + 3I2 + 4NaOH → CH3COONa + CHI3↓ + 3NaI + 3H2O';
}

/**
 * What the test tube shows when a sample meets a reagent.
 * @param {SampleId} id
 * @param {ReagentId} reagent
 * @returns {Observation}
 */
export function observe(id, reagent) {
  const s = sample(id);
  const r = /** @type {(typeof REAGENTS)[number]} */ (REAGENTS.find((x) => x.id === reagent));
  /** @type {Observation} */
  const nothing = {
    liquid: r.liquid,
    precipitate: r.precipitate,
    amount: r.precipitate ? 0.4 : 0,
    text: 'Không có hiện tượng',
    changed: false,
    equation: null,
  };
  if (reagent === 'iodoform') {
    if (!s.methylCarbonyl) return nothing;
    return {
      liquid: '#fef9c3',
      precipitate: YELLOW,
      amount: 0.45,
      text: 'Kết tủa vàng iodoform',
      changed: true,
      equation: iodoformEquation(s),
    };
  }
  if (s.family === 'ketone') {
    return reagent === 'copper'
      ? { ...nothing, text: 'Kết tủa xanh nhạt không chuyển màu đỏ gạch' }
      : nothing;
  }
  if (reagent === 'tollens') {
    return {
      liquid: SILVER_LIQUID,
      precipitate: SILVER,
      amount: 0.2,
      text: 'Lớp bạc sáng bám trên thành ống nghiệm',
      changed: true,
      equation: `${s.formula} + 2[Ag(NH3)2]OH → ${s.acid}NH4 + 2Ag↓ + 3NH3 + H2O`,
    };
  }
  return {
    liquid: '#f1f5f9',
    precipitate: BRICK,
    amount: 0.4,
    text: 'Kết tủa đỏ gạch',
    changed: true,
    equation: `${s.formula} + 2Cu(OH)2 + NaOH → ${s.acid}Na + Cu2O↓ + 3H2O`,
  };
}

/**
 * Hands the samples out as A to D in a seeded order.
 * @param {() => number} rand
 * @returns {SampleId[]} index i is sample i (A, B, ...)
 */
export function dealSamples(rand) {
  const ids = SAMPLES.map((s) => s.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}
