/**
 * The book's table of standard electrode potentials of metal couples (and the
 * standard hydrogen electrode), shared by every lesson that quotes it, so two
 * chapters can never show different values for the same couple.
 */

/**
 * @typedef {object} Couple
 * @property {string} id the metal symbol, or 'H' for 2H+/H2
 * @property {string} ion TeX of the oxidised form, without \mathrm
 * @property {string} metal TeX of the reduced form, without \mathrm
 * @property {number} charge electrons in the half-reaction of one ion
 * @property {number} E standard electrode potential in volts
 * @property {string} name Vietnamese name of the reduced form
 * @property {number} molar molar mass of the reduced form, g/mol
 */

/**
 * The couples of the book's table, in the order of the electrochemical
 * series (E° rising). Values as printed in the KNTT book, 25 °C.
 * @type {Couple[]}
 */
export const ELECTRODE_COUPLES = [
  { id: 'K', ion: 'K^+', metal: 'K', charge: 1, E: -2.924, name: 'potassium', molar: 39 },
  { id: 'Na', ion: 'Na^+', metal: 'Na', charge: 1, E: -2.713, name: 'sodium', molar: 23 },
  { id: 'Mg', ion: 'Mg^{2+}', metal: 'Mg', charge: 2, E: -2.356, name: 'magnesium', molar: 24 },
  { id: 'Al', ion: 'Al^{3+}', metal: 'Al', charge: 3, E: -1.676, name: 'aluminium', molar: 27 },
  { id: 'Zn', ion: 'Zn^{2+}', metal: 'Zn', charge: 2, E: -0.762, name: 'zinc', molar: 65 },
  { id: 'Fe', ion: 'Fe^{2+}', metal: 'Fe', charge: 2, E: -0.44, name: 'iron', molar: 56 },
  { id: 'Ni', ion: 'Ni^{2+}', metal: 'Ni', charge: 2, E: -0.257, name: 'nickel', molar: 59 },
  { id: 'Sn', ion: 'Sn^{2+}', metal: 'Sn', charge: 2, E: -0.137, name: 'tin', molar: 119 },
  { id: 'Pb', ion: 'Pb^{2+}', metal: 'Pb', charge: 2, E: -0.126, name: 'lead', molar: 207 },
  { id: 'H', ion: '2H^+', metal: 'H_2', charge: 2, E: 0, name: 'hydrogen', molar: 2 },
  { id: 'Cu', ion: 'Cu^{2+}', metal: 'Cu', charge: 2, E: 0.34, name: 'copper', molar: 64 },
  { id: 'Ag', ion: 'Ag^+', metal: 'Ag', charge: 1, E: 0.799, name: 'silver', molar: 108 },
];

/** The couple of a metal symbol (or 'H'); throws on an unknown id. @param {string} id */
export function electrodeCouple(id) {
  const c = ELECTRODE_COUPLES.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown couple ${id}`);
  return c;
}
