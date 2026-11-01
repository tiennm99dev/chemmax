/**
 * The electron transfer between metal and non-metal atoms, one electron at a
 * time, and the ions of a rock-salt lattice in a turning view.
 */
import { chargeLabel } from '#lib/domain/atom.js';
import { outerElectrons, element } from '#lib/domain/elements.js';

/**
 * @typedef {object} IonPair
 * @property {string} formula
 * @property {number} metal atomic number
 * @property {number} metals how many metal atoms
 * @property {number} nonmetal atomic number
 * @property {number} nonmetals how many non-metal atoms
 */

/** @type {IonPair[]} */
export const PAIRS = [
  { formula: 'NaCl', metal: 11, metals: 1, nonmetal: 17, nonmetals: 1 },
  { formula: 'KF', metal: 19, metals: 1, nonmetal: 9, nonmetals: 1 },
  { formula: 'MgO', metal: 12, metals: 1, nonmetal: 8, nonmetals: 1 },
  { formula: 'MgCl2', metal: 12, metals: 1, nonmetal: 17, nonmetals: 2 },
  { formula: 'Na2O', metal: 11, metals: 2, nonmetal: 8, nonmetals: 1 },
];

const NOBLE = /** @type {Record<number, string>} */ ({ 2: 'He', 10: 'Ne', 18: 'Ar', 36: 'Kr' });

/**
 * The noble gas with this many electrons, if any.
 * @param {number} electrons
 */
export const nobleWith = (electrons) => NOBLE[electrons] ?? null;

/** @param {IonPair} pair */
export const metalOuter = (pair) => outerElectrons(pair.metal);

/** @param {IonPair} pair */
export const totalTransfers = (pair) => pair.metals * metalOuter(pair);

/**
 * Atoms after `done` electrons have moved: each metal atom is emptied in turn
 * and each non-metal atom filled in turn.
 * @param {IonPair} pair @param {number} done
 */
export function atomsAfter(pair, done) {
  const give = metalOuter(pair);
  const take = 8 - outerElectrons(pair.nonmetal);
  const metals = Array.from({ length: pair.metals }, (_, i) => {
    const lost = Math.min(give, Math.max(0, done - i * give));
    return { z: pair.metal, electrons: pair.metal - lost, charge: lost };
  });
  const nonmetals = Array.from({ length: pair.nonmetals }, (_, i) => {
    const got = Math.min(take, Math.max(0, done - i * take));
    return { z: pair.nonmetal, electrons: pair.nonmetal + got, charge: 0 - got };
  });
  return { metals, nonmetals };
}

/**
 * The species as a formula for the formula renderer: "Na", "Mg^2+", "O^2-".
 * @param {number} z @param {number} charge
 */
export function speciesFormula(z, charge) {
  const symbol = element(z)?.symbol ?? '';
  if (charge === 0) return symbol;
  return `${symbol}^${chargeLabel(charge).replace('−', '-')}`;
}

/**
 * The half-reactions of the finished transfer, as parts for the renderer.
 * @param {IonPair} pair
 */
export function halfReactions(pair) {
  const give = metalOuter(pair);
  const take = 8 - outerElectrons(pair.nonmetal);
  return [
    {
      left: [speciesFormula(pair.metal, 0)],
      right: [speciesFormula(pair.metal, give), `${give}e`],
    },
    {
      left: [speciesFormula(pair.nonmetal, 0), `${take}e`],
      right: [speciesFormula(pair.nonmetal, -take)],
    },
  ];
}

/**
 * What the transfer has done so far, for the live feedback line.
 * @param {IonPair} pair @param {number} done
 */
export function transferNote(pair, done) {
  const metal = element(pair.metal)?.symbol;
  const nonmetal = element(pair.nonmetal)?.symbol;
  const total = totalTransfers(pair);
  if (done === 0) {
    return `${metal} có ${metalOuter(pair)} electron lớp ngoài cùng, ${nonmetal} có ${outerElectrons(pair.nonmetal)}. Bấm để chuyển từng electron từ ${metal} sang ${nonmetal}.`;
  }
  if (done < total) {
    return `Đã chuyển ${done}/${total} electron. Vẫn còn nguyên tử chưa có lớp vỏ giống khí hiếm.`;
  }
  const end = atomsAfter(pair, total);
  return `Xong! Ion ${metal} có ${end.metals[0].electrons} electron giống ${nobleWith(end.metals[0].electrons)}, ion ${nonmetal} có ${end.nonmetals[0].electrons} electron giống ${nobleWith(end.nonmetals[0].electrons)}. Các ion trái dấu hút nhau bằng lực hút tĩnh điện: đó là liên kết ion.`;
}

/** @typedef {{ x: number, y: number, z: number, kind: 'Na' | 'Cl', place: Place }} LatticeIon */
/** @typedef {'tam' | 'mat' | 'canh' | 'dinh'} Place */

const PLACES = /** @type {Place[]} */ (['tam', 'mat', 'canh', 'dinh']);

export const PLACE_LABELS = /** @type {Record<Place, string>} */ ({
  tam: 'Ở tâm',
  mat: 'Giữa mặt',
  canh: 'Giữa cạnh',
  dinh: 'Ở đỉnh',
});

/**
 * A 3 × 3 × 3 block of the sodium chloride lattice, centred on the origin,
 * with ions of the two kinds alternating along every axis and Na⁺ at the centre.
 * @returns {LatticeIon[]}
 */
export function latticeIons() {
  /** @type {LatticeIon[]} */
  const ions = [];
  for (const x of [-1, 0, 1]) {
    for (const y of [-1, 0, 1]) {
      for (const z of [-1, 0, 1]) {
        const steps = Math.abs(x) + Math.abs(y) + Math.abs(z);
        ions.push({ x, y, z, kind: steps % 2 === 0 ? 'Na' : 'Cl', place: PLACES[steps] });
      }
    }
  }
  return ions;
}

/**
 * The ions one lattice step from `ion`.
 * @param {LatticeIon} ion @param {LatticeIon[]} ions
 */
export function neighbours(ion, ions) {
  return ions.filter(
    (o) => Math.abs(o.x - ion.x) + Math.abs(o.y - ion.y) + Math.abs(o.z - ion.z) === 1,
  );
}

/** @param {'Na' | 'Cl'} kind */
export const ionName = (kind) => (kind === 'Na' ? 'Na⁺' : 'Cl⁻');

/**
 * What the selected ion shows: how many neighbours it has in the drawn block
 * and how many it has in a real, unbroken crystal.
 * @param {LatticeIon} ion @param {LatticeIon[]} ions
 */
export function neighbourText(ion, ions) {
  const near = neighbours(ion, ions);
  const other = ionName(ion.kind === 'Na' ? 'Cl' : 'Na');
  const self = ionName(ion.kind);
  if (near.length === 6) {
    return `Ion ${self} ở tâm khối có đúng 6 ion ${other} gần nhất, ở cả sáu hướng.`;
  }
  return `Trong khối cắt này, ion ${self} chỉ thấy ${near.length} ion ${other} gần nhất vì ${6 - near.length} ion còn lại nằm ở phần tinh thể bị cắt đi. Trong tinh thể thật, nó vẫn có 6 ion ${other} bao quanh.`;
}
