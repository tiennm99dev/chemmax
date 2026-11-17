import { describe, expect, it } from 'vitest';
import { GEOMETRIES, centre } from '../_shared/complexes.js';
import {
  POSITIONS,
  TARGETS,
  bondAngle,
  buildCharge,
  buildFormula,
  judgeBuild,
  outlineEdges,
} from './engine.js';

describe('the shapes of complexes', () => {
  it('places as many ligands as the shape holds, one unit from the centre', () => {
    const bad = [];
    for (const [g, pts] of Object.entries(POSITIONS)) {
      if (pts.length !== GEOMETRIES[/** @type {keyof typeof GEOMETRIES} */ (g)].count) bad.push(g);
      for (const p of pts) if (Math.abs(Math.hypot(p.x, p.y, p.z) - 1) > 1e-9) bad.push([g, p]);
    }
    expect(bad).toEqual([]);
  });

  it('outlines a tetrahedron, a square and an octahedron', () => {
    expect(outlineEdges('tu-dien')).toHaveLength(6);
    expect(outlineEdges('vuong-phang')).toHaveLength(4);
    expect(outlineEdges('bat-dien')).toHaveLength(12);
    expect(bondAngle('tu-dien')).toBe(109.5);
    expect(bondAngle('vuong-phang')).toBe(90);
    expect(bondAngle('bat-dien')).toBe(90);
  });
});

describe('building a complex', () => {
  it('writes the formula and charge of a build', () => {
    expect(buildFormula({ centre: 'Co3', ligand: 'NH3', geometry: 'bat-dien' })).toBe(
      '[Co(NH3)6]^3+',
    );
    expect(buildCharge({ centre: 'Fe2', ligand: 'CN', geometry: 'bat-dien' })).toBe(-4);
  });

  it('accepts every target built right', () => {
    const bad = TARGETS.filter(
      (t) =>
        !judgeBuild(t, { centre: t.centre, ligand: t.parts[0].ligand, geometry: t.geometry }).ok,
    );
    expect(bad).toEqual([]);
    expect(TARGETS.length).toBeGreaterThanOrEqual(6);
  });

  it('names what is wrong', () => {
    const pt = TARGETS.find((t) => t.formula === '[PtCl4]^2-');
    if (!pt) throw new Error('missing target');
    expect(judgeBuild(pt, { centre: 'Ni2', ligand: 'Cl', geometry: 'vuong-phang' }).text).toContain(
      'Pt',
    );
    expect(judgeBuild(pt, { centre: 'Pt2', ligand: 'Cl', geometry: 'bat-dien' }).text).toContain(
      '4 phối tử',
    );
    expect(judgeBuild(pt, { centre: 'Pt2', ligand: 'Cl', geometry: 'tu-dien' }).text).toContain(
      'vuông phẳng',
    );
    const fe = TARGETS.find((t) => t.formula === '[Fe(CN)6]^4-');
    if (!fe) throw new Error('missing target');
    expect(judgeBuild(fe, { centre: 'Fe3', ligand: 'CN', geometry: 'bat-dien' }).text).toContain(
      'Điện tích',
    );
    expect(centre('Fe3').charge).toBe(3);
  });
});
