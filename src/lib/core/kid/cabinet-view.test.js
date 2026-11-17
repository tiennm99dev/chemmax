// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { cabinet } from './cabinet-view.js';

describe('cabinet view', () => {
  const { project, boxFaces, boxGrid } = cabinet(0.5);

  it('shifts a point away from the viewer right and up by the depth', () => {
    expect(project(1, 2, 3)).toEqual({ x: 2, y: -4 });
    expect(cabinet(0.45).project(0, 1, 0)).toEqual({ x: 0.45, y: -0.45 });
  });

  it('draws the front, top and right faces of a box', () => {
    const faces = boxFaces({ x0: 0, x1: 2, y0: 0, y1: 1, z0: 0, z1: 1 });
    expect(faces.map((f) => f.kind)).toEqual(['front', 'top', 'right']);
    expect(faces[0].pts).toEqual([
      { x: 0, y: -0 },
      { x: 2, y: -0 },
      { x: 2, y: -1 },
      { x: 0, y: -1 },
    ]);
  });

  it('draws one line per inner cube edge on each shown face', () => {
    expect(boxGrid({ x0: 0, x1: 1, y0: 0, y1: 1, z0: 0, z1: 1 })).toEqual([]);
    expect(boxGrid({ x0: 0, x1: 3, y0: 0, y1: 2, z0: 0, z1: 2 })).toHaveLength(8);
  });
});
