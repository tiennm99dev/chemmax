/**
 * A conversion map of the two-carbon compounds of the chapter: ethylene,
 * bromoethane, 1,2-dibromoethane, ethanol, ethylene glycol, sodium ethoxide,
 * diethyl ether and acetaldehyde. Each reaction turns one compound into
 * another with one reagent; `route` finds the shortest chain of reactions
 * between two compounds.
 */

/** @typedef {'C2H4' | 'C2H5Br' | 'C2H4Br2' | 'C2H5OH' | 'C2H4(OH)2' | 'C2H5ONa' | 'C2H5OC2H5' | 'CH3CHO'} CompoundId */
/** @typedef {'HBr' | 'Br2' | 'H2O' | 'NaOH-water' | 'KOH-ethanol' | 'H2SO4-170' | 'H2SO4-140' | 'CuO' | 'Na'} ReagentId */

/** @type {{ id: CompoundId, name: string, formula: string, family: string }[]} */
export const COMPOUNDS = [
  { id: 'C2H4', name: 'ethylene', formula: 'CH2=CH2', family: 'alkene' },
  { id: 'C2H5Br', name: 'bromoethane', formula: 'CH3–CH2Br', family: 'dẫn xuất halogen' },
  { id: 'C2H4Br2', name: '1,2-dibromoethane', formula: 'BrCH2–CH2Br', family: 'dẫn xuất halogen' },
  { id: 'C2H5OH', name: 'ethanol', formula: 'CH3–CH2OH', family: 'alcohol' },
  { id: 'C2H4(OH)2', name: 'ethylene glycol', formula: 'HOCH2–CH2OH', family: 'alcohol đa chức' },
  { id: 'C2H5ONa', name: 'sodium ethoxide', formula: 'CH3–CH2ONa', family: 'muối alkoxide' },
  { id: 'C2H5OC2H5', name: 'diethyl ether', formula: 'CH3–CH2–O–CH2–CH3', family: 'ether' },
  { id: 'CH3CHO', name: 'acetaldehyde', formula: 'CH3CHO', family: 'aldehyde' },
];

/** @type {{ id: ReagentId, label: string }[]} */
export const REAGENTS = [
  { id: 'HBr', label: 'HBr' },
  { id: 'Br2', label: 'Br₂ (dung dịch)' },
  { id: 'H2O', label: 'H₂O' },
  { id: 'NaOH-water', label: 'NaOH, H₂O, t°' },
  { id: 'KOH-ethanol', label: 'KOH, C₂H₅OH, t°' },
  { id: 'H2SO4-170', label: 'H₂SO₄ đặc, 170 °C' },
  { id: 'H2SO4-140', label: 'H₂SO₄ đặc, 140 °C' },
  { id: 'CuO', label: 'CuO, t°' },
  { id: 'Na', label: 'Na' },
];

/**
 * @typedef {object} Reaction
 * @property {CompoundId} from
 * @property {ReagentId} reagent
 * @property {CompoundId} to
 * @property {string} equation
 * @property {string} [condition] shown over the arrow
 * @property {string} kind type of reaction
 */

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    from: 'C2H4',
    reagent: 'HBr',
    to: 'C2H5Br',
    equation: 'CH2=CH2 + HBr → CH3–CH2Br',
    kind: 'cộng hydrogen halide',
  },
  {
    from: 'C2H4',
    reagent: 'Br2',
    to: 'C2H4Br2',
    equation: 'CH2=CH2 + Br2 → BrCH2–CH2Br',
    kind: 'cộng bromine',
  },
  {
    from: 'C2H4',
    reagent: 'H2O',
    to: 'C2H5OH',
    equation: 'CH2=CH2 + H2O → CH3–CH2OH',
    condition: 'xúc tác H₃PO₄, t°, p',
    kind: 'cộng nước (hydrate hoá)',
  },
  {
    from: 'C2H5Br',
    reagent: 'NaOH-water',
    to: 'C2H5OH',
    equation: 'CH3–CH2Br + NaOH → CH3–CH2OH + NaBr',
    kind: 'thế nguyên tử halogen',
  },
  {
    from: 'C2H5Br',
    reagent: 'KOH-ethanol',
    to: 'C2H4',
    equation: 'CH3–CH2Br + KOH → CH2=CH2 + KBr + H2O',
    kind: 'tách hydrogen halide',
  },
  {
    from: 'C2H4Br2',
    reagent: 'NaOH-water',
    to: 'C2H4(OH)2',
    equation: 'BrCH2–CH2Br + 2NaOH → HOCH2–CH2OH + 2NaBr',
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
    reagent: 'H2SO4-140',
    to: 'C2H5OC2H5',
    equation: '2CH3–CH2OH → CH3–CH2–O–CH2–CH3 + H2O',
    kind: 'tạo ether',
  },
  {
    from: 'C2H5OH',
    reagent: 'CuO',
    to: 'CH3CHO',
    equation: 'CH3–CH2OH + CuO → CH3CHO + Cu + H2O',
    kind: 'oxi hoá không hoàn toàn',
  },
  {
    from: 'C2H5OH',
    reagent: 'Na',
    to: 'C2H5ONa',
    equation: '2CH3–CH2OH + 2Na → 2CH3–CH2ONa + H2↑',
    kind: 'thế H của nhóm OH',
  },
  {
    from: 'C2H5ONa',
    reagent: 'H2O',
    to: 'C2H5OH',
    equation: 'CH3–CH2ONa + H2O → CH3–CH2OH + NaOH',
    kind: 'thuỷ phân muối alkoxide',
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
  { from: 'C2H4', to: 'CH3CHO' },
  { from: 'C2H5Br', to: 'C2H5OC2H5' },
  { from: 'C2H4', to: 'C2H4(OH)2' },
  { from: 'C2H5ONa', to: 'C2H4Br2' },
];
