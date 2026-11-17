// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
/**
 * The quadrilaterals of the grade 4 geometry reviews: where their corners go on a
 * small grid, their names, and the side and angle facts the book teaches
 * (a rectangle has four right angles; a parallelogram has two pairs of
 * parallel opposite sides of equal length; a rhombus has two pairs of
 * parallel sides and four equal sides). Pure and DOM-free.
 *
 * @typedef {'chu-nhat' | 'binh-hanh' | 'thoi'} QuadShape
 * @typedef {{ x: number, y: number }} Pt
 */

/** Grid size of a quadrilateral picture, in grid units. */
export const GRID = { w: 8, h: 5 };

/** The corners of each shape in grid units, going round from the top left. */
export const CORNERS = /** @type {Record<QuadShape, readonly Pt[]>} */ ({
  'chu-nhat': [
    { x: 1, y: 1 },
    { x: 7, y: 1 },
    { x: 7, y: 4 },
    { x: 1, y: 4 },
  ],
  'binh-hanh': [
    { x: 2.5, y: 1 },
    { x: 7, y: 1 },
    { x: 5.5, y: 4 },
    { x: 1, y: 4 },
  ],
  thoi: [
    { x: 4, y: 0.5 },
    { x: 6.5, y: 2.5 },
    { x: 4, y: 4.5 },
    { x: 1.5, y: 2.5 },
  ],
});

/** What each shape is called. */
export const SHAPE_NAME = /** @type {Record<QuadShape, string>} */ ({
  'chu-nhat': 'hình chữ nhật',
  'binh-hanh': 'hình bình hành',
  thoi: 'hình thoi',
});

/** Vertex names the book uses, in the order they go round. */
export const VERTEX_SETS = /** @type {const} */ ([
  ['A', 'B', 'C', 'D'],
  ['M', 'N', 'P', 'Q'],
  ['E', 'G', 'H', 'K'],
]);

/**
 * The name of side `i` (from corner `i` to the next one), written as the
 * book writes the sides of ABCD: AB, BC, DC, AD.
 * @param {readonly string[]} names
 * @param {number} i
 */
export function sideName(names, i) {
  if (i === 0) return `${names[0]}${names[1]}`;
  if (i === 1) return `${names[1]}${names[2]}`;
  if (i === 2) return `${names[3]}${names[2]}`;
  return `${names[0]}${names[3]}`;
}

/**
 * The side opposite side `i`.
 * @param {number} i
 */
export const oppositeSide = (i) => (i + 2) % 4;

/**
 * The two sides that meet at corner `i`: the side ending there and the side
 * starting there.
 * @param {number} i
 * @returns {[number, number]}
 */
export const sidesAt = (i) => [(i + 3) % 4, i];

/**
 * What a screen reader hears for a picture: the kind of four-sided figure and
 * its vertex names, never the name of the shape the question asks for.
 * @param {readonly string[]} names
 */
export const quadLabel = (names) => `Hình tứ giác ${names.join('')}.`;
