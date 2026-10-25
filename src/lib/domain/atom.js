/**
 * Atoms and ions in the Bohr picture: particle data, the electron
 * configuration of an ion, electrons per shell and where to draw them.
 */
import {
  FILLING_ORDER,
  electronConfiguration,
  element,
  shellCounts,
  subshellCapacity,
} from './elements.js';

/** @typedef {import('./elements.js').Subshell} Subshell */

/** Elementary charge, in coulombs. */
export const ELEMENTARY_CHARGE = 1.602e-19;

/** Atomic mass unit, in kilograms. */
export const AMU_KG = 1.6605e-27;

/**
 * The three particles of the atom, rounded to four significant figures: mass in
 * kilograms and in amu, charge in coulombs and in units of the elementary
 * charge.
 */
export const PARTICLES = {
  proton: { name: 'proton', symbol: 'p', massKg: 1.673e-27, massAmu: 1, charge: 1 },
  neutron: { name: 'neutron', symbol: 'n', massKg: 1.675e-27, massAmu: 1, charge: 0 },
  electron: { name: 'electron', symbol: 'e', massKg: 9.109e-31, massAmu: 0.00055, charge: -1 },
};

/**
 * Electron configuration of the ion of element `z` with charge `charge`.
 * A cation loses electrons from the outermost shell first (Fe²⁺ loses 4s
 * before 3d); an anion gains them in filling order (Cl⁻ fills 3p).
 * @param {number} z
 * @param {number} [charge]
 * @returns {Subshell[]}
 */
export function ionConfiguration(z, charge = 0) {
  const config = electronConfiguration(z).map((s) => ({ ...s }));
  if (charge > 0) {
    let left = Math.min(charge, z);
    while (left > 0) {
      const outer = config.filter((s) => s.electrons > 0).sort((a, b) => b.n - a.n || b.l - a.l)[0];
      const k = Math.min(left, outer.electrons);
      outer.electrons -= k;
      left -= k;
    }
    return config.filter((s) => s.electrons > 0);
  }
  let left = -charge;
  for (const f of FILLING_ORDER) {
    if (left <= 0) break;
    let s = config.find((c) => c.n === f.n && c.l === f.l);
    if (!s) {
      s = { ...f, electrons: 0 };
      config.push(s);
    }
    const room = subshellCapacity(f.l) - s.electrons;
    const k = Math.min(left, room);
    s.electrons += k;
    left -= k;
  }
  return config;
}

/**
 * Electrons per shell for an atom or ion: Na → [2, 8, 1], Na⁺ → [2, 8].
 * @param {number} z
 * @param {number} [charge]
 */
export function atomShells(z, charge = 0) {
  return shellCounts(ionConfiguration(z, charge));
}

/**
 * Charge written as a superscript would read: 0 → '', 1 → '+', 2 → '2+',
 * -1 → '−', -3 → '3−'.
 * @param {number} charge
 */
export function chargeLabel(charge) {
  if (charge === 0) return '';
  const size = Math.abs(charge) === 1 ? '' : String(Math.abs(charge));
  return `${size}${charge > 0 ? '+' : '−'}`;
}

/**
 * Identifies the atom or ion made of the given particles: the element from
 * the proton count, the mass number A = Z + N and the charge from protons
 * minus electrons. Masses are in amu and kilograms.
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function identify(protons, neutrons, electrons) {
  const el = protons > 0 ? element(protons) : undefined;
  const charge = protons - electrons;
  const massAmu =
    protons * PARTICLES.proton.massAmu +
    neutrons * PARTICLES.neutron.massAmu +
    electrons * PARTICLES.electron.massAmu;
  const massKg =
    protons * PARTICLES.proton.massKg +
    neutrons * PARTICLES.neutron.massKg +
    electrons * PARTICLES.electron.massKg;
  return {
    element: el ?? null,
    z: protons,
    massNumber: protons + neutrons,
    charge,
    kind: charge === 0 ? 'atom' : charge > 0 ? 'cation' : 'anion',
    massAmu,
    massKg,
    /** Share of the mass in the nucleus, from 0 to 1. */
    nucleusShare: massAmu > 0 ? (massAmu - electrons * PARTICLES.electron.massAmu) / massAmu : 0,
  };
}

/**
 * Positions of the electrons on concentric shells around (cx, cy): shell k
 * (from 0) has radius `r0 + k·dr`; its electrons are spread evenly, starting
 * from the top and turned a little per shell so they do not line up.
 * @param {number[]} shells electrons per shell
 * @param {{ cx: number, cy: number, r0: number, dr: number }} geometry
 * @returns {Array<{ shell: number, index: number, x: number, y: number }>}
 */
export function electronPositions(shells, { cx, cy, r0, dr }) {
  return shells.flatMap((count, shell) => {
    const r = r0 + shell * dr;
    const offset = shell * 0.35;
    return Array.from({ length: count }, (_, index) => {
      const a = -Math.PI / 2 + offset + (2 * Math.PI * index) / count;
      return { shell, index, x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    });
  });
}

/**
 * The mass number nearest the atomic weight, a stand-in isotope for drawing
 * a nucleus: Cl → 35, Fe → 56. It is not always the most abundant isotope
 * (Cu → 64, while ⁶³Cu is the commoner one).
 * @param {number} z
 */
export function typicalMassNumber(z) {
  const el = element(z);
  return el ? Math.round(el.mass) : 0;
}
