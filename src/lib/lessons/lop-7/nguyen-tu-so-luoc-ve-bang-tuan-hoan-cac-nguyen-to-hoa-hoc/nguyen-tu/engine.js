/**
 * Build-an-atom logic for the grade 7 atom lesson: the Rutherford–Bohr
 * picture with electrons on shells (2 on the first, at most 8 on each of the
 * next two for the first 20 elements), the charge from protons minus
 * electrons and the mass in amu.
 */
import { element } from '#lib/domain/elements.js';

/** Most protons the builder allows: the first 20 elements of the book. */
export const MAX_PROTONS = 20;

/** Most neutrons the builder allows (calcium-40 needs 20). */
export const MAX_NEUTRONS = 22;

/** Most electrons the builder allows. */
export const MAX_ELECTRONS = 20;

/** Masses of the particles in amu, as the book rounds them. */
export const MASS_AMU = { proton: 1, neutron: 1, electron: 0.00055 };

/** Electron capacity of the shells used for the first 20 elements. */
const SHELL_LIMITS = [2, 8, 8, 8];

/**
 * Electrons per shell, filled from the innermost shell outwards: 2, then up
 * to 8, then up to 8, then the rest (potassium 2, 8, 8, 1). Valid for the
 * first 20 elements, which is all the lesson uses.
 * @param {number} electrons
 * @returns {number[]}
 */
export function shellsFor(electrons) {
  /** @type {number[]} */
  const shells = [];
  let left = Math.max(0, Math.floor(electrons));
  for (const limit of SHELL_LIMITS) {
    if (left <= 0) break;
    const k = Math.min(limit, left);
    shells.push(k);
    left -= k;
  }
  return shells;
}

/**
 * Everything the builder reports about a set of particles.
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function describeAtom(protons, neutrons, electrons) {
  const el = protons > 0 ? element(protons) : undefined;
  const charge = protons - electrons;
  const shells = shellsFor(electrons);
  return {
    name: el?.name ?? null,
    symbol: el?.symbol ?? null,
    charge,
    neutral: charge === 0,
    /** Mass with the electrons counted, in amu. */
    massAmu:
      protons * MASS_AMU.proton + neutrons * MASS_AMU.neutron + electrons * MASS_AMU.electron,
    /** Mass of the nucleus, the usual value of the atom's mass: p + n amu. */
    nucleusAmu: protons + neutrons,
    shells,
    outer: shells.length ? shells[shells.length - 1] : 0,
  };
}

/**
 * @typedef {object} Target
 * @property {string} task what to build, as the learner reads it
 * @property {number} protons
 * @property {number} neutrons
 * @property {number} electrons
 * @property {string} clue how to work out the proton count from the task
 */

/** Atoms to build, from a named atom to one known only by its shells. */
export const TARGETS = /** @type {Target[]} */ ([
  {
    task: 'Lắp nguyên tử hydrogen: hạt nhân chỉ có 1 proton, không có neutron',
    protons: 1,
    neutrons: 0,
    electrons: 1,
    clue: 'Hạt nhân hydrogen có đúng 1 proton.',
  },
  {
    task: 'Lắp nguyên tử carbon (6 proton) có khối lượng 12 amu',
    protons: 6,
    neutrons: 6,
    electrons: 6,
    clue: 'Nguyên tử carbon có 6 proton.',
  },
  {
    task: 'Lắp nguyên tử có 2 lớp electron, lớp ngoài cùng có 5 electron, khối lượng 14 amu',
    protons: 7,
    neutrons: 7,
    electrons: 7,
    clue: 'Lớp thứ nhất có 2 electron, lớp thứ hai có 5 electron: cộng lại được số electron, cũng là số proton.',
  },
  {
    task: 'Lắp nguyên tử oxygen (8 proton) có khối lượng 16 amu',
    protons: 8,
    neutrons: 8,
    electrons: 8,
    clue: 'Nguyên tử oxygen có 8 proton.',
  },
  {
    task: 'Lắp nguyên tử có 3 lớp electron, lớp ngoài cùng có 1 electron, khối lượng 23 amu',
    protons: 11,
    neutrons: 12,
    electrons: 11,
    clue: 'Ba lớp electron: 2, 8 và 1. Tổng số electron bằng số proton.',
  },
  {
    task: 'Lắp nguyên tử có 3 lớp electron, lớp ngoài cùng có 2 electron, khối lượng 24 amu',
    protons: 12,
    neutrons: 12,
    electrons: 12,
    clue: 'Ba lớp electron: 2, 8 và 2. Tổng số electron bằng số proton.',
  },
  {
    task: 'Lắp nguyên tử có 4 lớp electron, lớp ngoài cùng có 2 electron, khối lượng 40 amu',
    protons: 20,
    neutrons: 20,
    electrons: 20,
    clue: 'Bốn lớp electron: 2, 8, 8 và 2. Tổng số electron bằng số proton.',
  },
]);

/**
 * @param {Target} target
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function matchesTarget(target, protons, neutrons, electrons) {
  return (
    target.protons === protons && target.neutrons === neutrons && target.electrons === electrons
  );
}

/**
 * The next thing to fix, checked in the order the learner should reason:
 * protons (which atom), then electrons (neutral), then neutrons (mass).
 * Names the direction, never the missing count.
 * @param {Target} target
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function targetHint(target, protons, neutrons, electrons) {
  if (protons !== target.protons) {
    const way = protons < target.protons ? 'Cần thêm proton.' : 'Đang thừa proton.';
    return `${target.clue} ${way}`;
  }
  if (electrons !== protons) {
    const way = electrons < protons ? 'thêm electron' : 'bớt electron';
    return `Đúng số proton rồi. Nguyên tử trung hoà về điện: số electron phải bằng số proton, hãy ${way}.`;
  }
  if (neutrons !== target.neutrons) {
    const way = neutrons < target.neutrons ? 'thêm neutron' : 'bớt neutron';
    return `Đúng số proton và electron. Khối lượng nguyên tử ≈ số proton + số neutron (amu), hãy ${way}.`;
  }
  return 'Đã xong.';
}
