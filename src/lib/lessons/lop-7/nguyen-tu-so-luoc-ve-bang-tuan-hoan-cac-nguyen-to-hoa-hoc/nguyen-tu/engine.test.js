import { describe, expect, it } from 'vitest';
import { atomShells } from '#lib/domain/atom.js';
import {
  MAX_ELECTRONS,
  MAX_NEUTRONS,
  MAX_PROTONS,
  TARGETS,
  describeAtom,
  matchesTarget,
  shellsFor,
  targetHint,
} from './engine.js';

describe('shellsFor', () => {
  it('fills 2 electrons, then up to 8 per shell', () => {
    expect(shellsFor(0)).toEqual([]);
    expect(shellsFor(1)).toEqual([1]);
    expect(shellsFor(6)).toEqual([2, 4]);
    expect(shellsFor(11)).toEqual([2, 8, 1]);
    expect(shellsFor(18)).toEqual([2, 8, 8]);
    expect(shellsFor(20)).toEqual([2, 8, 8, 2]);
  });

  it('agrees with the Bohr shells of the first 20 neutral atoms', () => {
    for (let z = 1; z <= 20; z++) expect(shellsFor(z), `Z = ${z}`).toEqual(atomShells(z));
  });
});

describe('describeAtom', () => {
  it('names the element from the protons and reports a neutral atom', () => {
    const a = describeAtom(7, 7, 7);
    expect(a.name).toBe('nitrogen');
    expect(a.symbol).toBe('N');
    expect(a.neutral).toBe(true);
    expect(a.nucleusAmu).toBe(14);
    expect(a.massAmu).toBeCloseTo(14.00385, 5);
    expect(a.shells).toEqual([2, 5]);
    expect(a.outer).toBe(5);
  });

  it('gives the charge as protons minus electrons', () => {
    expect(describeAtom(11, 12, 10).charge).toBe(1);
    expect(describeAtom(8, 8, 10).charge).toBe(-2);
  });
});

describe('targets', () => {
  it('are neutral atoms within the builder limits whose tasks match their shells', () => {
    for (const t of TARGETS) {
      expect(t.electrons, t.task).toBe(t.protons);
      expect(t.protons).toBeLessThanOrEqual(MAX_PROTONS);
      expect(t.neutrons).toBeLessThanOrEqual(MAX_NEUTRONS);
      expect(t.electrons).toBeLessThanOrEqual(MAX_ELECTRONS);
      const mass = t.task.match(/khối lượng (\d+) amu/);
      if (mass) expect(t.protons + t.neutrons, t.task).toBe(Number(mass[1]));
      const shells = t.task.match(/có (\d) lớp electron, lớp ngoài cùng có (\d) electron/);
      if (shells) {
        const s = shellsFor(t.electrons);
        expect(s.length, t.task).toBe(Number(shells[1]));
        expect(s.at(-1), t.task).toBe(Number(shells[2]));
      }
    }
  });

  it('checks the exact particle counts', () => {
    const c = TARGETS[1];
    expect(matchesTarget(c, 6, 6, 6)).toBe(true);
    expect(matchesTarget(c, 6, 7, 6)).toBe(false);
  });

  it('hints protons first, then electrons, then neutrons, without the count', () => {
    const na = TARGETS[4];
    expect(targetHint(na, 3, 0, 3)).toMatch(/thêm proton/);
    expect(targetHint(na, 11, 0, 3)).toMatch(/thêm electron/);
    expect(targetHint(na, 11, 14, 11)).toMatch(/bớt neutron/);
    expect(targetHint(na, 11, 0, 3)).not.toMatch(/12/);
  });
});
