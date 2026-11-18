// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Angles measured with a protractor and sorted by kind, shared by the grade 4
 * and grade 6 lessons on angles. Directions are whole degrees measured the
 * mathematical way: 0° points right and angles grow counter-clockwise. The
 * protractor lies on the upper half plane with its centre on the vertex; its
 * inner scale counts from 0 on the right, its outer scale from 0 on the left
 * (`protractor.svelte` draws it). Pure and DOM-free.
 *
 * @typedef {'nhon' | 'vuong' | 'tu' | 'bet'} AngleKind
 * @typedef {'phai' | 'trai'} Side where the first side of the angle lies on the protractor
 */

/** The kinds in the book's order. */
export const KINDS = /** @type {const} */ (['nhon', 'vuong', 'tu', 'bet']);

/** Vietnamese names of the kinds. */
export const KIND_NAME = /** @type {Record<AngleKind, string>} */ ({
  nhon: 'góc nhọn',
  vuong: 'góc vuông',
  tu: 'góc tù',
  bet: 'góc bẹt',
});

/**
 * Kind of an angle by its measure, 0° < m ≤ 180°.
 * @param {number} m
 * @returns {AngleKind}
 */
export function kindOf(m) {
  if (m === 180) return 'bet';
  if (m === 90) return 'vuong';
  return m < 90 ? 'nhon' : 'tu';
}

/**
 * Direction of the second side for an angle of measure `m` whose first side
 * points right (`phai`, direction 0°) or left (`trai`, direction 180°).
 * @param {number} m
 * @param {Side} side
 */
export const rayDirection = (m, side) => (side === 'phai' ? m : 180 - m);

/**
 * Measure of the angle from the direction of its second side.
 * @param {number} dir
 * @param {Side} side
 */
export const measureFrom = (dir, side) => (side === 'phai' ? dir : 180 - dir);

/**
 * The direction of a pointer seen from the centre, folded onto the upper
 * half plane where the protractor lies: directions below the base line go to
 * the nearer end.
 * @param {number} dir whole degrees in [0, 360)
 */
export function foldUpper(dir) {
  if (dir <= 180) return dir;
  return dir < 270 ? 180 : 0;
}

/**
 * The angle between the two hands of a clock at `h` o'clock sharp (1 to 12),
 * from 0° to 180°.
 * @param {number} h
 */
export function clockAngle(h) {
  const turn = (30 * h) % 360;
  return turn <= 180 ? turn : 360 - turn;
}
