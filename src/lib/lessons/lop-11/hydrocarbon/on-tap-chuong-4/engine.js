/**
 * The virtual reagent bench of the chapter review: five unlabelled
 * hydrocarbons (methane, ethylene, acetylene, benzene, toluene), four
 * reagents, and what each pair shows in the test tube. Each sample also
 * shows its state, so methane (gas) and benzene (liquid), which react with
 * none of the reagents, can still be told apart.
 */

/** @typedef {'methane' | 'ethylene' | 'acetylene' | 'benzene' | 'toluene'} SampleId */
/** @typedef {'bromine' | 'kmno4' | 'kmno4-hot' | 'agno3'} ReagentId */
/** @typedef {{ liquid: string, precipitate: string | null, text: string, changed: boolean }} Observation */

/** @type {{ id: SampleId, name: string, formula: string, state: 'Khí' | 'Lỏng' }[]} */
export const SAMPLES = [
  { id: 'methane', name: 'Methane', formula: 'CH4', state: 'Khí' },
  { id: 'ethylene', name: 'Ethylene', formula: 'C2H4', state: 'Khí' },
  { id: 'acetylene', name: 'Acetylene', formula: 'C2H2', state: 'Khí' },
  { id: 'benzene', name: 'Benzene', formula: 'C6H6', state: 'Lỏng' },
  { id: 'toluene', name: 'Toluene', formula: 'C7H8', state: 'Lỏng' },
];

/** @type {{ id: ReagentId, name: string, liquid: string }[]} */
export const REAGENTS = [
  { id: 'bromine', name: 'Nước bromine', liquid: '#f59e0b' },
  { id: 'kmno4', name: 'Dung dịch KMnO₄', liquid: '#7e22ce' },
  { id: 'kmno4-hot', name: 'KMnO₄, đun nóng', liquid: '#7e22ce' },
  { id: 'agno3', name: 'AgNO₃ trong NH₃', liquid: '#f1f5f9' },
];

const CLEAR = '#f1f5f9';
const BROWN = '#3f2a1d';
const PALE_YELLOW = '#fde68a';

/**
 * What the test tube shows when a sample meets a reagent.
 * @param {SampleId} sample
 * @param {ReagentId} reagent
 * @returns {Observation}
 */
export function observe(sample, reagent) {
  const base = /** @type {string} */ (REAGENTS.find((r) => r.id === reagent)?.liquid);
  const unsaturated = sample === 'ethylene' || sample === 'acetylene';
  const nothing = { liquid: base, precipitate: null, text: 'Không có hiện tượng', changed: false };
  if (reagent === 'bromine') {
    if (unsaturated) {
      return { liquid: CLEAR, precipitate: null, text: 'Nước bromine mất màu', changed: true };
    }
    if (sample === 'benzene' || sample === 'toluene') {
      return {
        ...nothing,
        text: 'Không mất màu; chất lỏng không tan, tách thành lớp riêng',
      };
    }
    return nothing;
  }
  if (reagent === 'agno3') {
    return sample === 'acetylene'
      ? { liquid: CLEAR, precipitate: PALE_YELLOW, text: 'Kết tủa vàng nhạt', changed: true }
      : nothing;
  }
  if (unsaturated || (reagent === 'kmno4-hot' && sample === 'toluene')) {
    return {
      liquid: CLEAR,
      precipitate: BROWN,
      text: 'Mất màu tím, có kết tủa nâu đen',
      changed: true,
    };
  }
  return nothing;
}

/**
 * The observation pattern of a sample over every reagent, with its state.
 * @param {SampleId} sample
 */
export function signature(sample) {
  const state = SAMPLES.find((s) => s.id === sample)?.state ?? '';
  return [state, ...REAGENTS.map((r) => (observe(sample, r.id).changed ? 'y' : 'n'))].join('');
}

/**
 * Hands the samples out as X1 to X5 in a seeded order.
 * @param {() => number} rand
 * @returns {SampleId[]} index i is sample X(i+1)
 */
export function dealSamples(rand) {
  const ids = SAMPLES.map((s) => s.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}
