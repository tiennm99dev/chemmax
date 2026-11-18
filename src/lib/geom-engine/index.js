// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
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
export {
  len3,
  dist3,
  lerp3,
  mid3,
  unit3,
  centroid3,
  planeThrough,
  side,
  onPlane,
  footOnPlane,
  footOnLine,
  lineRelation,
  meetLines,
  lineAngle,
  linePlaneAngle,
  meetPlane,
  projectAlong,
  rayDirection,
  angle3,
  commonPerpendicular,
  orientFaces,
  isHidden,
  cube,
  groundSquare,
  direction,
  angleFan,
} from './space.js';
