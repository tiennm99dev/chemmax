import { describe, expect, it } from 'vitest';
import { element } from '#lib/domain/elements.js';
import {
  ISOTOPE_SETS,
  PRESETS,
  averageMass,
  averageNote,
  lighterShare,
  notationTex,
  particles,
} from './engine.js';

describe('average atomic mass', () => {
  it('weights mass numbers by their shares', () => {
    expect(averageMass([35, 37], [75.77, 24.23])).toBeCloseTo(35.4846, 4);
    expect(averageMass([63, 65], [69.15, 30.85])).toBeCloseTo(63.617, 4);
    expect(averageMass([20, 21, 22], [90.9, 0.3, 8.8])).toBeCloseTo(20.179, 4);
    expect(averageMass([24, 25, 26], [78.99, 10, 11.01])).toBeCloseTo(24.3202, 4);
  });

  it('finds the share of the lighter isotope back from the average', () => {
    expect(lighterShare(63.546, 63, 65)).toBeCloseTo(72.7, 6);
    expect(lighterShare(79.91, 79, 81)).toBeCloseTo(54.5, 6);
    expect(lighterShare(10.81, 10, 11)).toBeCloseTo(19, 6);
  });

  it('keeps every preset close to the table value of its element', () => {
    const off = PRESETS.filter((p) => {
      const el = element(p.z);
      const avg = averageMass(p.massNumbers, [p.natural, 100 - p.natural]);
      return el?.symbol !== p.symbol || el.name !== p.name || Math.abs(avg - el.mass) > 0.1;
    });
    expect(off).toEqual([]);
  });

  it('says where the average lies', () => {
    const cl = PRESETS[0];
    expect(averageNote(cl, cl.natural).kind).toBe('natural');
    expect(averageNote(cl, 100).kind).toBe('single');
    expect(averageNote(cl, 50).kind).toBe('middle');
    expect(averageNote(cl, 60).kind).toBe('lighter');
    expect(averageNote(cl, 30).kind).toBe('heavier');
  });
});

describe('isotopes', () => {
  it('counts particles from Z and A', () => {
    expect(particles(17, 37)).toEqual({ protons: 17, electrons: 17, neutrons: 20 });
    expect(particles(1, 1).neutrons).toBe(0);
  });

  it('lists isotopes of real elements with a neutron count of zero or more', () => {
    const bad = ISOTOPE_SETS.filter(
      (s) => element(s.z)?.symbol !== s.symbol || s.isotopes.some((i) => i.a < s.z),
    );
    expect(bad).toEqual([]);
  });

  it('writes the atomic symbol', () => {
    expect(notationTex('Cl', 17, 35)).toBe('{}^{35}_{17}\\mathrm{Cl}');
  });
});
