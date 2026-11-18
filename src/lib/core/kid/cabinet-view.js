// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Boxes of unit cubes drawn the way the primary books draw them: a cabinet
 * view seen from the front, a little from the right and from above, so the
 * front, top and right faces show. Model space counts in cube edges: x to the
 * right, y away from the viewer, z up; screen points are in edge units, y
 * down. `cabinet(depth)` fixes how far one step away from the viewer shifts a
 * point right and up. Pure and DOM-free.
 */

/** @typedef {{ x0: number, x1: number, y0: number, y1: number, z0: number, z1: number }} Box */
/** @typedef {{ x: number, y: number }} Point screen point in edge units, y down */
/** @typedef {{ kind: 'front' | 'top' | 'right', pts: Point[] }} Face */

/**
 * The projection and box drawings of a cabinet view with the given depth.
 * @param {number} depth
 */
export function cabinet(depth) {
  /**
   * The screen point of a model point.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Point}
   */
  const project = (x, y, z) => ({ x: x + depth * y, y: -(z + depth * y) });

  /**
   * The three faces that show of a box: front (y = y0), top (z = z1) and
   * right (x = x1).
   * @param {Box} b
   * @returns {Face[]}
   */
  function boxFaces(b) {
    return [
      {
        kind: 'front',
        pts: [
          project(b.x0, b.y0, b.z0),
          project(b.x1, b.y0, b.z0),
          project(b.x1, b.y0, b.z1),
          project(b.x0, b.y0, b.z1),
        ],
      },
      {
        kind: 'top',
        pts: [
          project(b.x0, b.y0, b.z1),
          project(b.x1, b.y0, b.z1),
          project(b.x1, b.y1, b.z1),
          project(b.x0, b.y1, b.z1),
        ],
      },
      {
        kind: 'right',
        pts: [
          project(b.x1, b.y0, b.z0),
          project(b.x1, b.y1, b.z0),
          project(b.x1, b.y1, b.z1),
          project(b.x1, b.y0, b.z1),
        ],
      },
    ];
  }

  /**
   * The cube edges on the shown faces of a box, so a box of many cubes still
   * shows each cube.
   * @param {Box} b
   * @returns {[Point, Point][]}
   */
  function boxGrid(b) {
    /** @type {[Point, Point][]} */
    const lines = [];
    for (let x = b.x0 + 1; x < b.x1; x++) {
      lines.push([project(x, b.y0, b.z0), project(x, b.y0, b.z1)]);
      lines.push([project(x, b.y0, b.z1), project(x, b.y1, b.z1)]);
    }
    for (let z = b.z0 + 1; z < b.z1; z++) {
      lines.push([project(b.x0, b.y0, z), project(b.x1, b.y0, z)]);
      lines.push([project(b.x1, b.y0, z), project(b.x1, b.y1, z)]);
    }
    for (let y = b.y0 + 1; y < b.y1; y++) {
      lines.push([project(b.x0, y, b.z1), project(b.x1, y, b.z1)]);
      lines.push([project(b.x1, y, b.z0), project(b.x1, y, b.z1)]);
    }
    return lines;
  }

  return { project, boxFaces, boxGrid };
}
