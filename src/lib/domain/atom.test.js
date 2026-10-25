import { describe, expect, it } from 'vitest';
import { formatConfiguration } from './elements.js';
import {
  PARTICLES,
  atomShells,
  chargeLabel,
  electronPositions,
  identify,
  ionConfiguration,
  typicalMassNumber,
} from './atom.js';

describe('atom engine', () => {
  it('keeps the particle table of the textbook', () => {
    expect(PARTICLES.proton.charge).toBe(1);
    expect(PARTICLES.electron.charge).toBe(-1);
    expect(PARTICLES.neutron.charge).toBe(0);
    expect(PARTICLES.proton.massKg / PARTICLES.electron.massKg).toBeCloseTo(1836.7, 0);
  });

  it('draws atoms and ions shell by shell', () => {
    expect(atomShells(11)).toEqual([2, 8, 1]);
    expect(atomShells(11, 1)).toEqual([2, 8]);
    expect(atomShells(8, -2)).toEqual([2, 8]);
    expect(atomShells(17, -1)).toEqual([2, 8, 8]);
    expect(atomShells(20, 2)).toEqual([2, 8, 8]);
    expect(atomShells(1, 1)).toEqual([]);
  });

  it('removes the outermost electrons first from a cation', () => {
    const write = (/** @type {number} */ z, /** @type {number} */ q) =>
      formatConfiguration(ionConfiguration(z, q), { core: true });
    expect(write(26, 2)).toBe('[Ar]3d⁶');
    expect(write(26, 3)).toBe('[Ar]3d⁵');
    expect(write(29, 1)).toBe('[Ar]3d¹⁰');
    expect(write(17, -1)).toBe('[Ne]3s²3p⁶');
    expect(write(7, -3)).toBe('[He]2s²2p⁶');
  });

  it('writes ion charges as superscripts read', () => {
    expect(chargeLabel(0)).toBe('');
    expect(chargeLabel(1)).toBe('+');
    expect(chargeLabel(3)).toBe('3+');
    expect(chargeLabel(-1)).toBe('−');
    expect(chargeLabel(-2)).toBe('2−');
  });

  it('identifies an atom or ion from its particles', () => {
    const na = identify(11, 12, 11);
    expect(na.element?.symbol).toBe('Na');
    expect(na.massNumber).toBe(23);
    expect(na.charge).toBe(0);
    expect(na.kind).toBe('atom');
    expect(na.massAmu).toBeCloseTo(23.006, 3);
    expect(na.nucleusShare).toBeGreaterThan(0.999);
    expect(identify(17, 18, 18)).toMatchObject({ charge: -1, kind: 'anion', massNumber: 35 });
    expect(identify(12, 12, 10)).toMatchObject({ charge: 2, kind: 'cation' });
    expect(identify(0, 1, 0).element).toBeNull();
  });

  it('spreads electrons evenly on each shell', () => {
    const dots = electronPositions([2, 8], { cx: 0, cy: 0, r0: 10, dr: 10 });
    expect(dots).toHaveLength(10);
    const first = dots[0];
    expect(first.x).toBeCloseTo(0, 9);
    expect(first.y).toBeCloseTo(-10, 9);
    expect(dots[1].y).toBeCloseTo(10, 9);
    for (const d of dots.slice(2)) expect(Math.hypot(d.x, d.y)).toBeCloseTo(20, 9);
  });

  it('picks a stand-in mass number from the atomic weight', () => {
    expect(typicalMassNumber(1)).toBe(1);
    expect(typicalMassNumber(17)).toBe(35);
    expect(typicalMassNumber(26)).toBe(56);
    expect(typicalMassNumber(0)).toBe(0);
  });
});
