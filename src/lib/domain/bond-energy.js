/**
 * Average bond energies (E_b) in kJ/mol, as the KNTT Hoá học 10 book gives them
 * in Bảng 12.2 and the enthalpy exercises (O=O is 494 there). Lessons print and
 * calculate from these numbers, so every chapter agrees. H–F, H–Br and H–I
 * could not be checked against Bảng 12.2: they are common reference values
 * (other tables give 565-570, 362-370 and 295-299), and the lessons that print
 * them label them as such.
 * @type {Record<string, number>}
 */
export const BOND_ENERGY = {
  'H–H': 436,
  'H–F': 567,
  'H–Cl': 431,
  'H–Br': 366,
  'H–I': 299,
  'Cl–Cl': 243,
  'O=O': 494,
  'N≡N': 945,
  'N–H': 386,
  'N=O': 607,
  'C–H': 418,
  'C–C': 346,
  'C=C': 612,
  'C=O': 732,
  'O–H': 459,
};
