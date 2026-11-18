// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { describe, expect, it } from 'vitest';
import { facesViewer } from '#lib/geom-engine/solid.js';
import {
  angle3,
  isHidden,
  lineRelation,
  meetLines,
  meetPlane,
  orientFaces,
  planeThrough,
  projectAlong,
  rayDirection,
} from './space.js';

const P = (x = 0, y = 0, z = 0) => ({ x, y, z });
const GROUND = /** @type {import('./space.js').Plane} */ (planeThrough(P(0, 0), P(1, 0), P(0, 1)));

describe('planes and lines in space', () => {
  it('finds no plane through three points on one line', () => {
    expect(planeThrough(P(0, 0, 0), P(1, 1, 1), P(2, 2, 2))).toBeNull();
  });

  it('meets a plane where the line crosses it and never when parallel', () => {
    const hit = meetPlane(P(0, 0, 2), P(1, 0, 1), GROUND);
    expect(hit?.t).toBeCloseTo(2);
    expect(hit?.point.x).toBeCloseTo(2);
    expect(meetPlane(P(0, 0, 2), P(3, 1, 2), GROUND)).toBeNull();
  });

  it('tells the four positions of two lines', () => {
    expect(lineRelation(P(0, 0), P(1, 0), P(0, 1), P(2, 1))).toBe('song-song');
    expect(lineRelation(P(0, 0), P(1, 0), P(2, 0), P(5, 0))).toBe('trung');
    expect(lineRelation(P(0, 0), P(1, 0), P(0, 1), P(1, 2))).toBe('cat');
    expect(lineRelation(P(0, 0), P(1, 0), P(0, 1, 1), P(0, 2, 1))).toBe('cheo');
    const m = meetLines(P(0, 0), P(1, 0), P(0, 1), P(1, 2));
    expect(m?.x).toBeCloseTo(-1);
    expect(meetLines(P(0, 0), P(1, 0), P(0, 1, 1), P(0, 2, 1))).toBeNull();
  });

  it('projects along a direction onto a plane', () => {
    const d = rayDirection(0, 45);
    const p = projectAlong(P(0, 0, 2), d, GROUND);
    expect(p?.x).toBeCloseTo(2);
    expect(p?.z).toBeCloseTo(0);
    expect(projectAlong(P(0, 0, 2), P(1, 0, 0), GROUND)).toBeNull();
    expect(angle3(P(1, 0), P(0, 0), P(0, 1))).toBeCloseTo(90);
  });

  it('dashes the hidden edges of a cube seen from above the front', () => {
    const pts = {
      A: P(0, 0, 0),
      B: P(1, 0, 0),
      C: P(1, 1, 0),
      D: P(0, 1, 0),
      E: P(0, 0, 1),
      F: P(1, 0, 1),
      G: P(1, 1, 1),
      H: P(0, 1, 1),
    };
    const faces = orientFaces(pts, [
      ['A', 'B', 'C', 'D'],
      ['E', 'F', 'G', 'H'],
      ['A', 'B', 'F', 'E'],
      ['B', 'C', 'G', 'F'],
      ['C', 'D', 'H', 'G'],
      ['D', 'A', 'E', 'H'],
    ]);
    // Seen from in front (y < 0), slightly from the right and above.
    const view = { yaw: -20, pitch: 25 };
    const front = faces.map((f) => facesViewer(f.pts, view));
    expect(front).toEqual([false, true, true, true, false, false]);
    // DH is between the back and the left faces: hidden. EF is on top: seen.
    expect(isHidden(pts.D, pts.H, faces, front)).toBe(true);
    expect(isHidden(pts.E, pts.F, faces, front)).toBe(false);
    // A diagonal of the bottom is hidden, a diagonal through the inside too.
    expect(isHidden(pts.A, pts.C, faces, front)).toBe(true);
    expect(isHidden(pts.A, pts.G, faces, front)).toBe(true);
    expect(isHidden(pts.F, pts.H, faces, front)).toBe(false);
  });
});
