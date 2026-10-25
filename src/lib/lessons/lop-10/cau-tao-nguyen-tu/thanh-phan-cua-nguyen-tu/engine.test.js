import { describe, expect, it } from 'vitest';
import { identify } from '#lib/domain/atom.js';
import {
  SIZE_RATIO,
  TARGETS,
  ZOOM_MAX,
  ZOOM_MIN,
  formatMetres,
  matchesTarget,
  nucleonCluster,
  onScreen,
  scaledAtom,
  stage,
  targetHint,
  viewWidth,
} from './engine.js';

const VIEW = 320;

describe('zoom into the atom', () => {
  it('keeps the textbook ratio of atom to nucleus', () => {
    expect(SIZE_RATIO).toBeCloseTo(1e4, 6);
    expect(scaledAtom(0.04)).toBeCloseTo(400, 6);
    expect(scaledAtom(0.06)).toBeCloseTo(600, 6);
  });

  it('draws sizes in proportion to the view', () => {
    expect(viewWidth(10)).toBeCloseTo(1e-10, 20);
    expect(onScreen(1e-10, 10, VIEW)).toBeCloseTo(VIEW, 6);
    expect(onScreen(1e-14, 14, VIEW)).toBeCloseTo(VIEW, 6);
  });

  it('passes through every stage in order as the view narrows', () => {
    /** @type {string[]} */
    const seen = [];
    for (let e = ZOOM_MIN; e <= ZOOM_MAX + 1e-9; e += 0.05) {
      const s = stage(e, VIEW);
      if (seen.at(-1) !== s) seen.push(s);
    }
    expect(seen).toEqual(['atoms', 'atom', 'empty', 'nucleus', 'nucleons']);
  });

  it('writes lengths as powers of ten', () => {
    expect(formatMetres(1e-9)).toBe('10⁻⁹ m');
    expect(formatMetres(1e-14)).toBe('10⁻¹⁴ m');
    expect(formatMetres(3.2e-12)).toBe('3,2 × 10⁻¹² m');
  });

  it('packs twelve nucleons, six protons and six neutrons', () => {
    const cluster = nucleonCluster(12, 10);
    expect(cluster).toHaveLength(12);
    expect(cluster.filter((n) => n.kind === 'p')).toHaveLength(6);
    for (const n of cluster) expect(Math.hypot(n.x, n.y)).toBeLessThanOrEqual(20 + 1e-9);
  });
});

describe('build an atom', () => {
  it('lists neutral targets that match the element named', () => {
    const names = ['carbon', 'oxygen', 'sodium', 'aluminium'];
    TARGETS.forEach((t, i) => {
      expect(t.electrons).toBe(t.protons);
      const atom = identify(t.protons, t.neutrons, t.electrons);
      expect(atom.element?.name).toBe(names[i]);
      expect(t.task.toLowerCase()).toContain(names[i]);
    });
    expect(Math.round(identify(11, 12, 11).massAmu)).toBe(23);
    expect(Math.round(identify(13, 14, 13).massAmu)).toBe(27);
  });

  it('checks a build and hints protons, then electrons, then neutrons', () => {
    const sodium = TARGETS[2];
    expect(matchesTarget(sodium, 11, 12, 11)).toBe(true);
    expect(matchesTarget(sodium, 11, 11, 11)).toBe(false);
    expect(targetHint(sodium, 3, 0, 3)).toMatch(/thêm proton/i);
    expect(targetHint(sodium, 12, 0, 12)).toMatch(/bớt proton/i);
    expect(targetHint(sodium, 11, 0, 3)).toMatch(/electron/);
    expect(targetHint(sodium, 11, 5, 11)).toMatch(/thêm neutron/);
    expect(targetHint(sodium, 11, 20, 11)).toMatch(/bớt neutron/);
    expect(targetHint(sodium, 11, 12, 11)).toBe('Chính xác!');
  });
});
