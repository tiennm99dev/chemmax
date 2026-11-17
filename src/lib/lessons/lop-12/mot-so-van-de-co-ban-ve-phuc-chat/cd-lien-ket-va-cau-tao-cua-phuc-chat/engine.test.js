import { describe, expect, it } from 'vitest';
import {
  COMPLEXES,
  HYBRIDS,
  POSITIONS,
  configTex,
  hund,
  isomerOf,
  orbitals,
  outlineEdges,
} from './engine.js';

/** @param {string} f */
const byFormula = (f) => {
  const c = COMPLEXES.find((x) => x.formula === f);
  if (!c) throw new Error(f);
  return c;
};

describe('orbital boxes', () => {
  it('fills by Hund rule', () => {
    expect(hund(8, 5)).toEqual([2, 2, 2, 1, 1]);
    expect(hund(8, 4)).toEqual([2, 2, 2, 2]);
    expect(hund(5, 3)).toEqual([2, 2, 1]);
    expect(() => hund(7, 3)).toThrow();
  });

  it('gives every complex as many hybrid orbitals as ligands and the known unpaired electrons', () => {
    /** @type {Record<string, [number, number]>} */
    const want = {
      '[Ag(NH3)2]^+': [0, 0],
      '[Zn(NH3)4]^2+': [0, 0],
      '[NiCl4]^2-': [2, 2],
      '[Ni(CN)4]^2-': [2, 0],
      '[PtCl4]^2-': [2, 0],
      '[Ti(H2O)6]^3+': [1, 1],
      '[Co(NH3)6]^3+': [4, 0],
      '[Fe(CN)6]^3-': [5, 1],
      '[FeF6]^3-': [5, 5],
      '[CoF6]^3-': [4, 4],
    };
    const bad = [];
    for (const c of COMPLEXES) {
      const o = orbitals(c);
      const size = POSITIONS[HYBRIDS[c.hybrid].shape].length;
      if (
        o.ligands !== size ||
        o.unpairedFree !== want[c.formula][0] ||
        o.unpaired !== want[c.formula][1]
      )
        bad.push(c.formula);
    }
    expect(bad).toEqual([]);
  });

  it('labels shells and writes the configuration', () => {
    const pt = orbitals(byFormula('[PtCl4]^2-'));
    expect(pt.bound.map((r) => r.label)).toEqual(['5d', '6s', '6p']);
    expect(orbitals(byFormula('[FeF6]^3-')).bound.map((r) => r.label)).toEqual([
      '3d',
      '4s',
      '4p',
      '4d',
    ]);
    expect(configTex(byFormula('[NiCl4]^2-'))).toBe('[\\mathrm{Ar}]3d^{8}');
  });
});

describe('shapes and isomers', () => {
  it('draws the outline of each shape', () => {
    expect(outlineEdges('thang')).toEqual([]);
    expect(outlineEdges('tu-dien')).toHaveLength(6);
    expect(outlineEdges('vuong-phang')).toHaveLength(4);
    expect(outlineEdges('bat-dien')).toHaveLength(12);
  });

  it('tells cis from trans', () => {
    expect(isomerOf('vuong-phang', [0, 1]).kind).toBe('cis');
    expect(isomerOf('vuong-phang', [0, 2]).kind).toBe('trans');
    expect(isomerOf('bat-dien', [4, 5]).kind).toBe('trans');
    expect(isomerOf('bat-dien', [1, 4]).kind).toBe('cis');
    expect(isomerOf('bat-dien', [1]).kind).toBe(null);
  });
});
