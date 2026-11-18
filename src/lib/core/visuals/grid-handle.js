// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
/**
 * Drag options for `use:draggable` on a handle that snaps to the grid points
 * of a plane scale (math coordinates, y up). The handle reports the grid point
 * it moved to through `onmove`; arrow keys move it one grid step.
 */
import { clamp, snap } from '#lib/core/visuals/svg-math.js';

/** @typedef {{ x: number, y: number }} V */

/**
 * The nearest grid point to an SVG point, kept on the plane.
 * @param {import('#lib/core/visuals/svg-math.js').PlaneScale} plane
 * @param {V} p SVG point
 * @param {number} [step]
 * @returns {V}
 */
export function toGrid(plane, p, step = 1) {
  return {
    x: clamp(snap(plane.toX(p.x), step), plane.xMin, plane.xMax),
    y: clamp(snap(plane.toY(p.y), step), plane.yMin, plane.yMax),
  };
}

/**
 * @param {{
 *   at: V,
 *   plane: import('#lib/core/visuals/svg-math.js').PlaneScale,
 *   svg: () => SVGSVGElement | null,
 *   onmove: (g: V) => void,
 *   step?: number,
 * }} options
 * @returns {import('#lib/actions/draggable.svelte.js').DraggableParams}
 */
export function gridHandle({ at, plane, svg, onmove, step = 1 }) {
  const point = { x: plane.mx(at.x), y: plane.my(at.y) };
  return {
    point,
    svg,
    viewBox: { w: plane.width, h: plane.height },
    pad: 0,
    keyStep: plane.unit * step,
    keyShiftStep: plane.unit * step * 2,
    projector: (p) => {
      const g = toGrid(plane, p, step);
      return { x: plane.mx(g.x), y: plane.my(g.y) };
    },
    onChange: () => onmove(toGrid(plane, point, step)),
  };
}
