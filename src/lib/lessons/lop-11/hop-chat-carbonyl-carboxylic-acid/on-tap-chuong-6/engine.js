/**
 * A conversion map of the two-carbon organic compounds of grade 11:
 * acetylene, ethylene, ethane, bromoethane, ethanol, acetaldehyde, acetic
 * acid, ethyl acetate and sodium acetate. Each reaction turns one compound
 * into another with one reagent; `route` finds the shortest chain of
 * reactions between two compounds.
 */

/** @typedef {'C2H2' | 'C2H4' | 'C2H6' | 'C2H5Br' | 'C2H5OH' | 'CH3CHO' | 'CH3COOH' | 'CH3COOC2H5' | 'CH3COONa'} CompoundId */
/** @typedef {'H2-Pd' | 'H2-Ni' | 'NaBH4' | 'H2O' | 'Br2-light' | 'HBr' | 'NaOH' | 'H2SO4-170' | 'CuO' | 'O2-Pd' | 'Br2-water' | 'O2-enzyme' | 'C2H5OH' | 'HCl'} ReagentId */

/** @type {{ id: CompoundId, name: string, formula: string, family: string }[]} */
export const COMPOUNDS = [
  { id: 'C2H2', name: 'acetylene', formula: 'CH≡CH', family: 'alkyne' },
  { id: 'C2H4', name: 'ethylene', formula: 'CH2=CH2', family: 'alkene' },
  { id: 'C2H6', name: 'ethane', formula: 'CH3–CH3', family: 'alkane' },
  { id: 'C2H5Br', name: 'bromoethane', formula: 'CH3–CH2Br', family: 'dẫn xuất halogen' },
  { id: 'C2H5OH', name: 'ethanol', formula: 'CH3–CH2OH', family: 'alcohol' },
  { id: 'CH3CHO', name: 'acetaldehyde', formula: 'CH3CHO', family: 'aldehyde' },
  { id: 'CH3COOH', name: 'acetic acid', formula: 'CH3COOH', family: 'carboxylic acid' },
  { id: 'CH3COOC2H5', name: 'ethyl acetate', formula: 'CH3COOC2H5', family: 'ester' },
  { id: 'CH3COONa', name: 'sodium acetate', formula: 'CH3COONa', family: 'muối carboxylate' },
];

/** @type {{ id: ReagentId, label: string }[]} */
export const REAGENTS = [
  { id: 'H2-Pd', label: 'H₂, Pd/PbCO₃, t°' },
  { id: 'H2-Ni', label: 'H₂, Ni, t°' },
  { id: 'NaBH4', label: 'NaBH₄' },
  { id: 'H2O', label: 'H₂O, xúc tác' },
  { id: 'Br2-light', label: 'Br₂, ánh sáng' },
  { id: 'HBr', label: 'HBr' },
  { id: 'NaOH', label: 'dung dịch NaOH' },
  { id: 'H2SO4-170', label: 'H₂SO₄ đặc, 170 °C' },
  { id: 'CuO', label: 'CuO, t°' },
  { id: 'O2-Pd', label: 'O₂, PdCl₂/CuCl₂' },
  { id: 'Br2-water', label: 'nước bromine' },
  { id: 'O2-enzyme', label: 'O₂, men giấm' },
  { id: 'C2H5OH', label: 'C₂H₅OH, H₂SO₄ đặc, t°' },
  { id: 'HCl', label: 'dung dịch HCl' },
];

/**
 * @typedef {object} Reaction
 * @property {CompoundId} from
 * @property {ReagentId} reagent
 * @property {CompoundId} to
 * @property {string} equation
 * @property {string} [condition] shown beside the reagent
 * @property {string} kind type of reaction
 */

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    from: 'C2H2',
    reagent: 'H2-Pd',
    to: 'C2H4',
    equation: 'CH≡CH + H2 → CH2=CH2',
    kind: 'cộng hydrogen (xúc tác Lindlar, dừng ở alkene)',
  },
  {
    from: 'C2H2',
    reagent: 'H2-Ni',
    to: 'C2H6',
    equation: 'CH≡CH + 2H2 → CH3–CH3',
    kind: 'cộng hydrogen hoàn toàn',
  },
  {
    from: 'C2H4',
    reagent: 'H2-Ni',
    to: 'C2H6',
    equation: 'CH2=CH2 + H2 → CH3–CH3',
    kind: 'cộng hydrogen',
  },
  {
    from: 'C2H2',
    reagent: 'H2O',
    to: 'CH3CHO',
    equation: 'CH≡CH + H2O → CH3CHO',
    condition: 'HgSO₄, H₂SO₄, t°',
    kind: 'cộng nước của alkyne',
  },
  {
    from: 'C2H4',
    reagent: 'H2O',
    to: 'C2H5OH',
    equation: 'CH2=CH2 + H2O → CH3–CH2OH',
    condition: 'H₃PO₄, t°, p',
    kind: 'cộng nước (hydrate hoá)',
  },
  {
    from: 'C2H6',
    reagent: 'Br2-light',
    to: 'C2H5Br',
    equation: 'CH3–CH3 + Br2 → CH3–CH2Br + HBr',
    kind: 'thế halogen của alkane',
  },
  {
    from: 'C2H4',
    reagent: 'HBr',
    to: 'C2H5Br',
    equation: 'CH2=CH2 + HBr → CH3–CH2Br',
    kind: 'cộng hydrogen halide',
  },
  {
    from: 'C2H5Br',
    reagent: 'NaOH',
    to: 'C2H5OH',
    equation: 'CH3–CH2Br + NaOH → CH3–CH2OH + NaBr',
    condition: 'H₂O, t°',
    kind: 'thế nguyên tử halogen',
  },
  {
    from: 'C2H5OH',
    reagent: 'H2SO4-170',
    to: 'C2H4',
    equation: 'CH3–CH2OH → CH2=CH2 + H2O',
    kind: 'tách nước',
  },
  {
    from: 'C2H5OH',
    reagent: 'CuO',
    to: 'CH3CHO',
    equation: 'CH3–CH2OH + CuO → CH3CHO + Cu + H2O',
    kind: 'oxi hoá alcohol bậc I',
  },
  {
    from: 'C2H4',
    reagent: 'O2-Pd',
    to: 'CH3CHO',
    equation: '2CH2=CH2 + O2 → 2CH3CHO',
    kind: 'oxi hoá ethylene',
  },
  {
    from: 'CH3CHO',
    reagent: 'NaBH4',
    to: 'C2H5OH',
    equation: 'CH3CHO + 2[H] → CH3–CH2OH',
    kind: 'khử aldehyde',
  },
  {
    from: 'CH3CHO',
    reagent: 'Br2-water',
    to: 'CH3COOH',
    equation: 'CH3CHO + Br2 + H2O → CH3COOH + 2HBr',
    kind: 'oxi hoá aldehyde',
  },
  {
    from: 'C2H5OH',
    reagent: 'O2-enzyme',
    to: 'CH3COOH',
    equation: 'CH3–CH2OH + O2 → CH3COOH + H2O',
    kind: 'lên men giấm',
  },
  {
    from: 'CH3COOH',
    reagent: 'C2H5OH',
    to: 'CH3COOC2H5',
    equation: 'CH3COOH + CH3–CH2OH ⇌ CH3COOC2H5 + H2O',
    kind: 'ester hoá',
  },
  {
    from: 'CH3COOH',
    reagent: 'NaOH',
    to: 'CH3COONa',
    equation: 'CH3COOH + NaOH → CH3COONa + H2O',
    kind: 'trung hoà',
  },
  {
    from: 'CH3COONa',
    reagent: 'HCl',
    to: 'CH3COOH',
    equation: 'CH3COONa + HCl → CH3COOH + NaCl',
    kind: 'acid mạnh đẩy acid yếu khỏi muối',
  },
];

/** @param {CompoundId} id */
export function compound(id) {
  const c = COMPOUNDS.find((x) => x.id === id);
  if (!c) throw new Error(`unknown compound ${id}`);
  return c;
}

/**
 * The reaction of a compound with a reagent in this map, or null.
 * @param {CompoundId} from
 * @param {ReagentId} reagent
 */
export function react(from, reagent) {
  return REACTIONS.find((r) => r.from === from && r.reagent === reagent) ?? null;
}

/**
 * The shortest chain of reactions from one compound to another, or null.
 * @param {CompoundId} from
 * @param {CompoundId} to
 * @returns {Reaction[] | null}
 */
export function route(from, to) {
  /** @type {Map<CompoundId, Reaction[]>} */
  const seen = new Map([[from, []]]);
  const queue = [from];
  while (queue.length) {
    const here = /** @type {CompoundId} */ (queue.shift());
    const path = /** @type {Reaction[]} */ (seen.get(here));
    if (here === to) return path;
    for (const r of REACTIONS.filter((x) => x.from === here)) {
      if (!seen.has(r.to)) {
        seen.set(r.to, [...path, r]);
        queue.push(r.to);
      }
    }
  }
  return null;
}

/** @type {{ from: CompoundId, to: CompoundId }[]} */
export const CHALLENGES = [
  { from: 'C2H2', to: 'CH3COOC2H5' },
  { from: 'C2H6', to: 'CH3COOH' },
  { from: 'C2H4', to: 'CH3COONa' },
  { from: 'CH3CHO', to: 'C2H5Br' },
];
