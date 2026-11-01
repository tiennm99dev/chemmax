/**
 * The cards of the sorting board: each reaction is drawn as an energy diagram
 * without numbers, so the learner sorts it by reading the two levels.
 */

/** @typedef {{ id: string, tex: string, text: string, dH: number }} DiagramCard */

/** @type {DiagramCard[]} */
export const DIAGRAMS = [
  {
    id: 'caco3',
    tex: '\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}',
    text: 'CaCO₃(s) → CaO(s) + CO₂(g)',
    dH: 176,
  },
  {
    id: 'co',
    tex: '\\mathrm{CO(g)} + \\frac{1}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}',
    text: 'CO(g) + 1/2 O₂(g) → CO₂(g)',
    dH: -283,
  },
  {
    id: 'hydrogenation',
    tex: '\\mathrm{C_2H_4(g)} + \\mathrm{H_2(g)} \\rightarrow \\mathrm{C_2H_6(g)}',
    text: 'C₂H₄(g) + H₂(g) → C₂H₆(g)',
    dH: -137,
  },
  {
    id: 'water-gas',
    tex: '\\mathrm{C(s)} + \\mathrm{H_2O(g)} \\rightarrow \\mathrm{CO(g)} + \\mathrm{H_2(g)}',
    text: 'C(s) + H₂O(g) → CO(g) + H₂(g)',
    dH: 131.3,
  },
  {
    id: 'no',
    tex: '\\mathrm{N_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2NO(g)}',
    text: 'N₂(g) + O₂(g) → 2NO(g)',
    dH: 180.6,
  },
  {
    id: 'thermite',
    tex: '\\mathrm{Fe_2O_3(s)} + \\mathrm{2Al(s)} \\rightarrow \\mathrm{Al_2O_3(s)} + \\mathrm{2Fe(s)}',
    text: 'Fe₂O₃(s) + 2Al(s) → Al₂O₃(s) + 2Fe(s)',
    dH: -851.5,
  },
  {
    id: 'phosphorus',
    tex: '\\text{P(s, đỏ)} \\rightarrow \\text{P(s, trắng)}',
    text: 'P(s, đỏ) → P(s, trắng)',
    dH: 17.6,
  },
  {
    id: 'carbon',
    tex: '\\text{C(kim cương)} \\rightarrow \\text{C(graphite)}',
    text: 'C(kim cương) → C(graphite)',
    dH: -1.9,
  },
];

export const BINS = [
  { id: 'toa', label: 'Phản ứng toả nhiệt' },
  { id: 'thu', label: 'Phản ứng thu nhiệt' },
];

/**
 * A diagram as a card of the sorter. Its label tells a screen reader what the
 * diagram shows, level against level.
 * @param {DiagramCard} d
 */
export function asCard(d) {
  const lower = d.dH < 0;
  return {
    id: d.id,
    label: `${d.text}; mức sản phẩm ${lower ? 'thấp' : 'cao'} hơn mức chất đầu`,
    bin: lower ? 'toa' : 'thu',
    why: lower
      ? 'Mức sản phẩm thấp hơn mức chất đầu: biến thiên enthalpy âm, phản ứng toả nhiệt.'
      : 'Mức sản phẩm cao hơn mức chất đầu: biến thiên enthalpy dương, phản ứng thu nhiệt.',
  };
}
