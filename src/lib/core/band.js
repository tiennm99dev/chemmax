// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Age bands: the look of a page follows the school level of its grade. A band
 * changes surface, shape, scale, density and decoration (tokens in `app.css`
 * under `[data-band=…]`), never the indigo interaction colour.
 */

/** Highest grade of tiểu học, which also uses the kid lesson layout. */
export const KID_MAX_GRADE = 5;

/** Highest grade of trung học cơ sở. */
export const THCS_MAX_GRADE = 9;

/** @typedef {'tieu-hoc' | 'thcs' | 'thpt' | 'chung'} Band */

/** @type {readonly Band[]} */
export const BANDS = ['tieu-hoc', 'thcs', 'thpt', 'chung'];

/**
 * The band of a grade; a page with no grade (home, strand hub, error) is `chung`.
 * @param {number | undefined | null} [grade]
 * @returns {Band}
 */
export function bandOf(grade) {
  if (grade === undefined || grade === null) return 'chung';
  if (grade <= KID_MAX_GRADE) return 'tieu-hoc';
  if (grade <= THCS_MAX_GRADE) return 'thcs';
  return 'thpt';
}
