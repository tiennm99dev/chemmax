// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { facesViewer } from '#lib/geom-engine/solid.js';
import {
  P,
  angleFan,
  commonPerpendicular,
  cube,
  dist3,
  footOnLine,
  footOnPlane,
  isHidden,
  lineAngle,
  linePlaneAngle,
  lineRelation,
  meetLines,
  orientFaces,
  planeThrough,
} from './space.js';

const GROUND = /** @type {import('./space.js').Plane} */ (planeThrough(P(0, 0), P(1, 0), P(0, 1)));

describe('perpendicular relations in space', () => {
  it('measures the angle between two lines from 0° to 90°', () => {
    expect(lineAngle(P(1, 0, 0), P(-1, 1, 0))).toBeCloseTo(45);
    expect(lineAngle(P(1, 0, 0), P(0, 0, 2))).toBeCloseTo(90);
    expect(lineAngle(P(1, 1, 0), P(-2, -2, 0))).toBeCloseTo(0);
  });

  it('measures the angle between a line and a plane', () => {
    expect(linePlaneAngle(P(1, 0, 1), GROUND)).toBeCloseTo(45);
    expect(linePlaneAngle(P(0, 0, 3), GROUND)).toBeCloseTo(90);
    expect(linePlaneAngle(P(2, 1, 0), GROUND)).toBeCloseTo(0);
  });

  it('drops perpendiculars on a plane and on a line', () => {
    const h = footOnPlane(P(2, -1, 5), GROUND);
    expect([h.x, h.y, h.z]).toEqual([2, -1, 0]);
    const k = footOnLine(P(1, 3, 0), P(0, 0, 0), P(4, 0, 0));
    expect(dist3(k, P(1, 0, 0))).toBeCloseTo(0);
  });

  it('finds the common perpendicular of two skew lines in a cube', () => {
    const { points: c } = cube(1);
    const ab = commonPerpendicular(c.A, c.B, c.C, c["C'"]);
    expect(ab?.d).toBeCloseTo(1);
    expect(ab?.s).toBeCloseTo(1);
    expect(ab?.t).toBeCloseTo(0);
    const bd = commonPerpendicular(c.B, c.D, c.C, c["D'"]);
    expect(bd?.d).toBeCloseTo(1 / Math.sqrt(3));
    expect(bd?.s).toBeCloseTo(2 / 3);
    expect(bd?.t).toBeCloseTo(1 / 3);
    expect(commonPerpendicular(c.A, c.B, c.D, c.C)).toBeNull();
  });

  it('tells how two lines lie and where crossing lines meet', () => {
    expect(lineRelation(P(0, 0), P(1, 0), P(0, 1, 1), P(0, 2, 1))).toBe('cheo');
    const m = meetLines(P(0, 0), P(1, 0), P(0, 1), P(1, 2));
    expect(m?.x).toBeCloseTo(-1);
  });

  it('draws an angle fan between its two sides', () => {
    const fan = angleFan(P(), P(1, 0, 0), P(0, 1, 0), 1, 4);
    expect(fan).toHaveLength(6);
    expect(dist3(fan[1], P(1, 0, 0))).toBeCloseTo(0);
    expect(dist3(fan[5], P(0, 1, 0))).toBeCloseTo(0);
    expect(angleFan(P(), P(1, 0, 0), P(2, 0, 0), 1)).toEqual([]);
  });

  it('dashes the hidden edges of a cube seen from above the front', () => {
    const { points: pts, faces: names } = cube(1);
    const faces = orientFaces(pts, names);
    const view = { yaw: -20, pitch: 25 };
    const front = faces.map((f) => facesViewer(f.pts, view));
    expect(isHidden(pts.D, pts["D'"], faces, front)).toBe(true);
    expect(isHidden(pts["A'"], pts["B'"], faces, front)).toBe(false);
    expect(isHidden(pts.A, pts["C'"], faces, front)).toBe(true);
  });
});
