// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
export { lineFromPoints, lineFromSlope, yAt, linePoints } from './linear.js';
export { solveSystem, clipToBox, constantThrough, isDegenerate, EPSILON_COEF } from './system.js';
export {
  trim,
  collect,
  degree,
  coef,
  add as addPoly,
  sub as subPoly,
  mul as mulPoly,
  evaluate,
  termsOf,
  polyTex,
  polyText,
  termTex,
  termText,
} from './polynomial.js';
export { divideTerm, lead, longDivide, numberDivide } from './long-division.js';
