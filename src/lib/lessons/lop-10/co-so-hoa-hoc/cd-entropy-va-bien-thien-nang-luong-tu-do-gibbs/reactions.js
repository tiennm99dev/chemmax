/**
 * Reactions for the Gibbs calculator, with ΔH°298 in kJ and ΔS°298 in J/K worked
 * out from Table 4.1 of the book. `left` and `right` list [coefficient, table key]
 * so the test can recompute both from the table.
 *
 * @typedef {object} GibbsReaction
 * @property {string} id
 * @property {string} label
 * @property {string} tex
 * @property {number} dH
 * @property {number} dS
 * @property {Array<[number, string]>} left
 * @property {Array<[number, string]>} right
 */

/** @type {GibbsReaction[]} */
export const REACTIONS = [
  {
    id: 'caco3',
    label: 'Nung đá vôi',
    tex: '\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}',
    dH: 178.3,
    dS: 159,
    left: [[1, 'CaCO3']],
    right: [
      [1, 'CaO'],
      [1, 'CO2'],
    ],
  },
  {
    id: 'kclo3',
    label: 'Nhiệt phân potassium chlorate',
    tex: '\\mathrm{KClO_3(s)} \\rightarrow \\mathrm{KCl(s)} + \\frac{3}{2}\\mathrm{O_2(g)}',
    dH: -39,
    dS: 247,
    left: [[1, 'KClO3']],
    right: [
      [1, 'KCl'],
      [1.5, 'O2'],
    ],
  },
  {
    id: 'n2o4',
    label: 'Phân li dinitrogen tetroxide',
    tex: '\\mathrm{N_2O_4(g)} \\rightarrow \\mathrm{2NO_2(g)}',
    dH: 57.2,
    dS: 175.5,
    left: [[1, 'N2O4']],
    right: [[2, 'NO2']],
  },
  {
    id: 'no2',
    label: 'Nhị hợp nitrogen dioxide',
    tex: '\\mathrm{2NO_2(g)} \\rightarrow \\mathrm{N_2O_4(g)}',
    dH: -57.2,
    dS: -175.5,
    left: [[2, 'NO2']],
    right: [[1, 'N2O4']],
  },
  {
    id: 'so3',
    label: 'Oxi hoá sulfur dioxide',
    tex: '\\mathrm{SO_2(g)} + \\frac{1}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{SO_3(g)}',
    dH: -99.2,
    dS: -93.9,
    left: [
      [1, 'SO2'],
      [0.5, 'O2'],
    ],
    right: [[1, 'SO3']],
  },
  {
    id: 'fe2o3',
    label: 'Dùng carbon khử iron(III) oxide',
    tex: '\\mathrm{3C(graphite)} + \\mathrm{2Fe_2O_3(s)} \\rightarrow \\mathrm{4Fe(s)} + \\mathrm{3CO_2(g)}',
    dH: 470.5,
    dS: 558.4,
    left: [
      [3, 'C(graphite)'],
      [2, 'Fe2O3'],
    ],
    right: [
      [4, 'Fe'],
      [3, 'CO2'],
    ],
  },
  {
    id: 'co',
    label: 'Phân huỷ carbon monoxide',
    tex: '\\mathrm{CO(g)} \\rightarrow \\mathrm{C(graphite)} + \\frac{1}{2}\\mathrm{O_2(g)}',
    dH: 110.5,
    dS: -89.3,
    left: [[1, 'CO']],
    right: [
      [1, 'C(graphite)'],
      [0.5, 'O2'],
    ],
  },
];
