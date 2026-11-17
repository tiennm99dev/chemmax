import { describe, expect, it } from 'vitest';
import { frameProblems } from '../_shared/frame-check.js';
import {
  RADICAL_FRAMES,
  SE_FRAMES,
  SN1_FRAMES,
  SN2_FRAMES,
  productShares,
  rateFactor,
  ringAtoms,
} from './engine.js';

describe('substitution mechanisms', () => {
  it('has consistent frames', () => {
    for (const frames of [RADICAL_FRAMES, SN2_FRAMES, SN1_FRAMES, SE_FRAMES]) {
      expect(frameProblems(frames)).toEqual([]);
    }
  });

  it('draws a regular hexagon', () => {
    const ring = ringAtoms(0, 0, 10);
    expect(ring).toHaveLength(6);
    for (const a of ring) expect(Math.hypot(a.x, a.y)).toBeCloseTo(10, 1);
  });

  it('follows the rate laws of SN1 and SN2', () => {
    expect(rateFactor('sn2', 2, 2)).toBe(4);
    expect(rateFactor('sn2', 1, 3)).toBe(3);
    expect(rateFactor('sn1', 2, 3)).toBe(2);
    expect(rateFactor('sn1', 1, 3)).toBe(1);
  });

  it('shares the chlorination products of propane by H count and reactivity', () => {
    const [p1, p2] = productShares([
      { name: '1-chloropropane', hydrogens: 6, reactivity: 1 },
      { name: '2-chloropropane', hydrogens: 2, reactivity: 3.8 },
    ]);
    expect(p1.share).toBeCloseTo(44.1, 1);
    expect(p2.share).toBeCloseTo(55.9, 1);
    const [a, b] = productShares([
      { name: '1-chloro-2-methylpropane', hydrogens: 9, reactivity: 1 },
      { name: '2-chloro-2-methylpropane', hydrogens: 1, reactivity: 5 },
    ]);
    expect(a.share).toBeCloseTo(64.3, 1);
    expect(b.share).toBeCloseTo(35.7, 1);
  });
});
