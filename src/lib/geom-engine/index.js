// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
export {
  EPSILON_LEN,
  EPSILON_ANGLE_DEG,
  vec,
  add,
  sub,
  scale,
  dot,
  len,
  dist,
  normalize,
  approxEqualLen,
} from './vec.js';
export { triangle, sides, congruentSSS } from './triangle.js';
export { circle, projectToCircle, pointOnCircle, angleAtVertex } from './circle.js';
export { tickPositions } from './ticks.js';
export {
  translate,
  rotate,
  shear,
  compose,
  applyToPoint,
  applyToPolygon,
  approxEqualMat,
} from './transforms.js';
