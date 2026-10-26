import { describe, expect, it } from 'vitest';
import { approxMolarity, dissolve, molarity, shade, solute } from './engine.js';

describe('dissolve', () => {
  const nacl = solute('NaCl');

  it('gives the mass percentage of an unsaturated solution', () => {
    const r = dissolve(nacl, 15, 45);
    expect(r.saturated).toBe(false);
    expect(r.mSolution).toBe(60);
    expect(r.percent).toBeCloseTo(25, 9);
    expect(r.excess).toBe(0);
  });

  it('stops at the solubility and leaves the rest undissolved', () => {
    const r = dissolve(nacl, 50, 100);
    expect(r.saturated).toBe(true);
    expect(r.dissolved).toBe(36);
    expect(r.excess).toBe(14);
    expect(r.percent).toBeCloseTo((36 / 136) * 100, 9);
  });

  it('is saturated exactly at the solubility', () => {
    expect(dissolve(nacl, 72, 200).saturated).toBe(true);
    expect(dissolve(nacl, 72, 200).excess).toBe(0);
  });
});

describe('molarity', () => {
  it('divides moles by litres', () => {
    const r = molarity(solute('CuSO4'), 16, 200);
    expect(r.M).toBe(160);
    expect(r.n).toBe(0.1);
    expect(r.molarity).toBeCloseTo(0.5, 9);
  });

  it('is zero for no volume', () => {
    expect(molarity(solute('NaCl'), 5, 0).molarity).toBe(0);
  });
});

describe('colour', () => {
  it('clamps strength and gets darker with it', () => {
    const s = solute('CuSO4');
    expect(shade(s, 0)).toBe('rgba(37, 99, 235, 0.08)');
    expect(shade(s, 2)).toBe('rgba(37, 99, 235, 0.88)');
    expect(approxMolarity(s, 16)).toBeCloseTo(1, 9);
  });
});
