/**
 * Oxides of the grade 8 book sorted by how they react with acids and bases:
 * oxide base, oxide acid, oxide lưỡng tính and oxide trung tính, each with
 * its name and sample reactions with water, dilute HCl and NaOH solution
 * (null where no reaction happens under ordinary conditions).
 */
import { prettyFormula } from '#lib/domain/formula.js';

/** @typedef {'base' | 'acid' | 'luong-tinh' | 'trung-tinh'} OxideKind */
/** @typedef {'water' | 'acid' | 'base'} Reagent */

export const KINDS = /** @type {Array<{ id: OxideKind, label: string }>} */ ([
  { id: 'base', label: 'Oxide base' },
  { id: 'acid', label: 'Oxide acid' },
  { id: 'luong-tinh', label: 'Oxide lưỡng tính' },
  { id: 'trung-tinh', label: 'Oxide trung tính' },
]);

export const REAGENTS = /** @type {Array<{ id: Reagent, label: string, phrase: string }>} */ ([
  { id: 'water', label: 'Nước', phrase: 'nước' },
  { id: 'acid', label: 'Dung dịch HCl', phrase: 'dung dịch HCl' },
  { id: 'base', label: 'Dung dịch NaOH', phrase: 'dung dịch NaOH' },
]);

/**
 * @typedef {object} Oxide
 * @property {string} formula
 * @property {string} name
 * @property {OxideKind} kind
 * @property {Record<Reagent, string | null>} reactions
 * @property {string} why reason for its class, shown after sorting
 */

/** @type {Oxide[]} */
export const OXIDES = [
  {
    formula: 'Na2O',
    name: 'sodium oxide',
    kind: 'base',
    reactions: { water: 'Na2O + H2O → 2NaOH', acid: 'Na2O + 2HCl → 2NaCl + H2O', base: null },
    why: 'Na₂O tác dụng với acid tạo muối và nước; tan trong nước tạo base NaOH.',
  },
  {
    formula: 'CaO',
    name: 'calcium oxide',
    kind: 'base',
    reactions: {
      water: 'CaO + H2O → Ca(OH)2',
      acid: 'CaO + 2HCl → CaCl2 + H2O',
      base: null,
    },
    why: 'CaO (vôi sống) tác dụng với acid tạo muối và nước; tác dụng với nước tạo Ca(OH)₂.',
  },
  {
    formula: 'CuO',
    name: 'copper(II) oxide',
    kind: 'base',
    reactions: { water: null, acid: 'CuO + 2HCl → CuCl2 + H2O', base: null },
    why: 'CuO tác dụng với acid tạo muối copper(II) và nước, không tác dụng với base.',
  },
  {
    formula: 'Fe2O3',
    name: 'iron(III) oxide',
    kind: 'base',
    reactions: { water: null, acid: 'Fe2O3 + 6HCl → 2FeCl3 + 3H2O', base: null },
    why: 'Fe₂O₃ tác dụng với acid tạo muối iron(III) và nước, không tác dụng với base.',
  },
  {
    formula: 'CO2',
    name: 'carbon dioxide',
    kind: 'acid',
    reactions: { water: 'CO2 + H2O ⇌ H2CO3', acid: null, base: 'CO2 + 2NaOH → Na2CO3 + H2O' },
    why: 'CO₂ tác dụng với base tạo muối và nước; tan trong nước tạo carbonic acid.',
  },
  {
    formula: 'SO2',
    name: 'sulfur dioxide',
    kind: 'acid',
    reactions: { water: 'SO2 + H2O ⇌ H2SO3', acid: null, base: 'SO2 + 2NaOH → Na2SO3 + H2O' },
    why: 'SO₂ tác dụng với base tạo muối sulfite và nước.',
  },
  {
    formula: 'SO3',
    name: 'sulfur trioxide',
    kind: 'acid',
    reactions: { water: 'SO3 + H2O → H2SO4', acid: null, base: 'SO3 + 2NaOH → Na2SO4 + H2O' },
    why: 'SO₃ tác dụng với base tạo muối sulfate; tác dụng với nước tạo sulfuric acid.',
  },
  {
    formula: 'P2O5',
    name: 'diphosphorus pentoxide',
    kind: 'acid',
    reactions: {
      water: 'P2O5 + 3H2O → 2H3PO4',
      acid: null,
      base: 'P2O5 + 6NaOH → 2Na3PO4 + 3H2O',
    },
    why: 'P₂O₅ tác dụng với base tạo muối phosphate; tác dụng với nước tạo phosphoric acid.',
  },
  {
    formula: 'Al2O3',
    name: 'aluminium oxide',
    kind: 'luong-tinh',
    reactions: {
      water: null,
      acid: 'Al2O3 + 6HCl → 2AlCl3 + 3H2O',
      base: 'Al2O3 + 2NaOH → 2NaAlO2 + H2O',
    },
    why: 'Al₂O₃ tác dụng với cả acid và base, tạo muối và nước.',
  },
  {
    formula: 'ZnO',
    name: 'zinc oxide',
    kind: 'luong-tinh',
    reactions: {
      water: null,
      acid: 'ZnO + 2HCl → ZnCl2 + H2O',
      base: 'ZnO + 2NaOH → Na2ZnO2 + H2O',
    },
    why: 'ZnO tác dụng với cả acid và base, tạo muối và nước.',
  },
  {
    formula: 'CO',
    name: 'carbon monoxide',
    kind: 'trung-tinh',
    reactions: { water: null, acid: null, base: null },
    why: 'CO không tác dụng với acid, base hay nước.',
  },
  {
    formula: 'NO',
    name: 'nitrogen monoxide',
    kind: 'trung-tinh',
    reactions: { water: null, acid: null, base: null },
    why: 'NO không tác dụng với acid, base hay nước.',
  },
];

/** @param {string} formula */
export function oxide(formula) {
  return OXIDES.find((o) => o.formula === formula) ?? OXIDES[0];
}

/**
 * The class an oxide belongs to, read from which of an acid and a base it
 * reacts with: the rule the lesson teaches.
 * @param {Oxide} o
 * @returns {OxideKind}
 */
export function classify(o) {
  const withAcid = o.reactions.acid !== null;
  const withBase = o.reactions.base !== null;
  if (withAcid && withBase) return 'luong-tinh';
  if (withAcid) return 'base';
  if (withBase) return 'acid';
  return 'trung-tinh';
}

/**
 * Feedback for mixing an oxide with a reagent.
 * @param {Oxide} o
 * @param {Reagent} r
 */
export function mixText(o, r) {
  const who = `${prettyFormula(o.formula)} (${o.name})`;
  const reagent = REAGENTS.find((x) => x.id === r)?.phrase ?? r;
  if (!o.reactions[r]) return `${who} không tác dụng với ${reagent} ở điều kiện thường.`;
  if (r === 'water') {
    return `${who} tác dụng với nước tạo dung dịch ${o.kind === 'base' ? 'base' : 'acid'}.`;
  }
  return `${who} tác dụng với ${reagent}, tạo muối và nước.`;
}
