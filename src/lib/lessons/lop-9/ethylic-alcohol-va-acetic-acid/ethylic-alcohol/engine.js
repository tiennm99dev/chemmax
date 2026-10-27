/**
 * Alcohol content (độ cồn) and the reaction of ethylic alcohol with sodium.
 * Độ cồn is the number of mL of pure ethylic alcohol in 100 mL of the
 * mixture. As in the book's exercises, the volume of the mixture is taken
 * as the sum of the two volumes (the small contraction on mixing is ignored).
 */

/** Density of ethylic alcohol at 20 °C, in g/mL (book value). */
export const ETHANOL_DENSITY = 0.789;

/**
 * Alcohol content in degrees of a mixture of pure ethylic alcohol and water.
 * @param {number} ethanolMl
 * @param {number} waterMl
 */
export function alcoholDegree(ethanolMl, waterMl) {
  const total = ethanolMl + waterMl;
  return total === 0 ? 0 : (ethanolMl / total) * 100;
}

/**
 * Pure ethylic alcohol in `volumeMl` of a `degree`° mixture.
 * @param {number} degree
 * @param {number} volumeMl
 */
export function ethanolIn(degree, volumeMl) {
  return (degree * volumeMl) / 100;
}

/**
 * Volumes of pure ethylic alcohol and water that make `volumeMl` of a
 * `degree`° mixture.
 * @param {number} degree
 * @param {number} volumeMl
 */
export function recipe(degree, volumeMl) {
  const ethanol = ethanolIn(degree, volumeMl);
  return { ethanol, water: volumeMl - ethanol };
}

/** Mixing tasks for the challenge mode, all reachable with 5 mL steps. */
export const TASKS = [
  { degree: 70, volume: 200, use: 'cồn sát khuẩn' },
  { degree: 40, volume: 250, use: 'dung dịch ngâm dược liệu' },
  { degree: 25, volume: 400, use: 'dung dịch pha loãng' },
];

/**
 * A short label for the kind of mixture a content falls into.
 * @param {number} degree
 */
export function mixtureKind(degree) {
  if (degree === 0) return 'nước, chưa có ethylic alcohol';
  if (degree <= 8) return 'gần độ cồn của bia (khoảng 3° đến 8°)';
  if (degree <= 15) return 'gần độ cồn của rượu vang (khoảng 10° đến 15°)';
  if (degree < 60) return 'gần độ cồn của các loại rượu mạnh (khoảng 30° đến 50°)';
  if (degree < 90) return 'gần độ cồn sát khuẩn (70° đến 75°)';
  if (degree < 100) return 'cồn có độ cồn cao, dùng làm dung môi, nhiên liệu';
  return 'ethylic alcohol nguyên chất (cồn tuyệt đối)';
}

/**
 * Structural drawing of CH3–CH2–OH for the sodium widget: plane positions
 * and which atom each hydrogen is bonded to. Only the hydrogen of the –OH
 * group is replaced by sodium.
 * @typedef {{ id: string, el: 'C' | 'O' | 'H', x: number, y: number, on?: string }} DrawnAtom
 */

/** @type {DrawnAtom[]} */
export const ETHANOL_ATOMS = [
  { id: 'c1', el: 'C', x: 60, y: 0 },
  { id: 'c2', el: 'C', x: 120, y: 0 },
  { id: 'o', el: 'O', x: 180, y: 0 },
  { id: 'h1', el: 'H', x: 60, y: -38, on: 'c1' },
  { id: 'h2', el: 'H', x: 20, y: 0, on: 'c1' },
  { id: 'h3', el: 'H', x: 60, y: 38, on: 'c1' },
  { id: 'h4', el: 'H', x: 120, y: -38, on: 'c2' },
  { id: 'h5', el: 'H', x: 120, y: 38, on: 'c2' },
  { id: 'h6', el: 'H', x: 230, y: 0, on: 'o' },
];

/** Bonds of the drawing, as pairs of atom ids. */
export const ETHANOL_BONDS = [
  ['c1', 'c2'],
  ['c2', 'o'],
  ...ETHANOL_ATOMS.filter((a) => a.on).map((a) => [/** @type {string} */ (a.on), a.id]),
];

/**
 * What happens when sodium is offered a hydrogen atom of ethylic alcohol.
 * @param {string} atomId
 * @returns {'replaced' | 'c-h' | 'not-h'}
 */
export function trySodium(atomId) {
  const atom = ETHANOL_ATOMS.find((a) => a.id === atomId);
  if (!atom || atom.el !== 'H') return 'not-h';
  return atom.on === 'o' ? 'replaced' : 'c-h';
}

/**
 * Products after `replaced` molecules (out of `molecules`) have reacted:
 * each gives one C2H5ONa and half a molecule of H2.
 * @param {number} replaced
 */
export function sodiumProducts(replaced) {
  return { ethylate: replaced, hydrogenAtoms: replaced, h2: Math.floor(replaced / 2) };
}

/** Molar volume of a gas at standard conditions (25 °C, 1 bar), in L/mol. */
export const MOLAR_VOLUME = 24.79;
