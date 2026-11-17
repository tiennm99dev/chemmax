/**
 * The complex builder: ligand positions of the three shapes of the lesson
 * (tetrahedral, square planar, octahedral) around a centre at the origin,
 * the outline edges of each shape, and the check of a built complex
 * against a target formula.
 */
import { dot3, sub3 } from '#lib/geom-engine/solid.js';
import { tidy } from '#lib/core/number-format.js';
import {
  GEOMETRIES,
  KNOWN,
  centre,
  complexCharge,
  complexFormula,
  formulaTex,
  ligand,
} from '../_shared/complexes.js';

/** @param {P3} a @param {P3} b */
const dist3 = (a, b) => Math.sqrt(dot3(sub3(a, b), sub3(a, b)));

/** @typedef {import('../_shared/complexes.js').Geometry} Geometry */
/** @typedef {{ x: number, y: number, z: number }} P3 */

const T = 1 / Math.sqrt(3);

/** Unit vectors from the centre to each ligand. @type {Record<Geometry, P3[]>} */
export const POSITIONS = {
  'tu-dien': [
    { x: T, y: T, z: T },
    { x: T, y: -T, z: -T },
    { x: -T, y: T, z: -T },
    { x: -T, y: -T, z: T },
  ],
  'vuong-phang': [
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: -1, z: 0 },
  ],
  'bat-dien': [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: -1 },
  ],
};

/**
 * Outline edges of a shape: the pairs of ligands nearest to each other.
 * @param {Geometry} g
 * @returns {Array<[number, number]>}
 */
export function outlineEdges(g) {
  const pts = POSITIONS[g];
  /** @type {Array<[number, number, number]>} */
  const pairs = [];
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) pairs.push([i, j, dist3(pts[i], pts[j])]);
  const shortest = Math.min(...pairs.map((p) => p[2]));
  return pairs.filter((p) => p[2] < shortest + 1e-9).map(([i, j]) => [i, j]);
}

/** Angle between two neighbouring ligands at the centre, in degrees. @param {Geometry} g */
export function bondAngle(g) {
  const [i, j] = outlineEdges(g)[0];
  const cos = dot3(POSITIONS[g][i], POSITIONS[g][j]);
  return tidy((Math.acos(cos) * 180) / Math.PI, 1);
}

/**
 * @typedef {object} Build
 * @property {string} centre a CENTRES id
 * @property {string} ligand a LIGANDS id
 * @property {Geometry} geometry
 */

/** The formula of a build. @param {Build} b */
export function buildFormula(b) {
  const c = centre(b.centre);
  return complexFormula(c.symbol, c.charge, [
    { ligand: b.ligand, count: GEOMETRIES[b.geometry].count },
  ]);
}

/** The charge of a build. @param {Build} b */
export function buildCharge(b) {
  return complexCharge(centre(b.centre).charge, [
    { ligand: b.ligand, count: GEOMETRIES[b.geometry].count },
  ]);
}

/** Targets of the challenge: known complexes with one kind of ligand. */
export const TARGETS = KNOWN.filter((k) => k.parts.length === 1);

/**
 * Checks a build against a target, naming the first thing to fix.
 * @param {import('../_shared/complexes.js').Known} target
 * @param {Build} b
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeBuild(target, b) {
  const want = centre(target.centre);
  const got = centre(b.centre);
  const part = target.parts[0];
  const L = ligand(part.ligand);
  if (got.symbol !== want.symbol)
    return {
      ok: false,
      text: `Nguyên tử trung tâm là kim loại đứng đầu trong móc vuông: ${want.symbol}.`,
    };
  if (b.ligand !== part.ligand)
    return {
      ok: false,
      text: `Phối tử là phần đứng sau kim loại trong móc vuông; phức chất này không có phối tử $${formulaTex(ligand(b.ligand).ion)}$.`,
    };
  if (GEOMETRIES[b.geometry].count !== part.count)
    return {
      ok: false,
      text: `Đếm lại số phối tử $${formulaTex(L.ion)}$ trong công thức: chọn dạng hình học có đúng ${part.count} phối tử.`,
    };
  if (got.charge !== want.charge) {
    const sum = complexCharge(0, [part]);
    return {
      ok: false,
      text: `Điện tích ion trung tâm chưa đúng. Tổng điện tích của ${part.count} phối tử là $${sum}$, mà điện tích phức chất bằng điện tích ion trung tâm cộng tổng điện tích các phối tử: hãy tính lại.`,
    };
  }
  if (b.geometry !== target.geometry)
    return {
      ok: false,
      text: `Đúng công thức, nhưng phức chất này có dạng ${GEOMETRIES[target.geometry].name}, không phải ${GEOMETRIES[b.geometry].name}.`,
    };
  return {
    ok: true,
    text: `Đúng! Ion trung tâm $\\mathrm{${got.symbol}^{${got.charge}+}}$ nhận ${part.count} cặp electron từ ${part.count} phối tử (nguyên tử cho là ${L.donor}), tạo ${part.count} liên kết cho – nhận; phức chất có dạng ${GEOMETRIES[target.geometry].name}.`,
  };
}
