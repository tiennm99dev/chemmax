import { describe, expect, it } from 'vitest';
import { HELIX_RADIUS, chainModel, iodineNote } from './engine.js';

describe('polysaccharide chain models', () => {
  it('coils amylose into a helix around the x axis', () => {
    const m = chainModel('amylose');
    const off = m.units.filter((u) => Math.abs(Math.hypot(u.p.y, u.p.z) - HELIX_RADIUS) > 1e-9);
    expect(m.units.length).toBe(18);
    expect(off).toEqual([]);
    expect(m.links.every((l) => l.kind === '1,4')).toBe(true);
  });

  it('branches amylopectin with one α-1,6 bond', () => {
    const m = chainModel('amylopectin');
    expect(m.links.filter((l) => l.kind === '1,6').length).toBe(1);
    expect(m.units.some((u) => u.branch)).toBe(true);
  });

  it('keeps cellulose straight, every other unit turned over, chains held by hydrogen bonds', () => {
    const m = chainModel('cellulose');
    expect(m.units.every((u) => u.p.z === 0)).toBe(true);
    expect(m.units.filter((u) => u.flipped).length).toBe(21);
    expect(m.links.some((l) => l.kind === 'H')).toBe(true);
    expect(m.links.some((l) => l.kind === '1,6')).toBe(false);
  });

  it('colours only cold starch with iodine', () => {
    expect(chainModel('amylose', { iodine: true }).colour).toBe(true);
    expect(chainModel('amylopectin', { iodine: true }).colour).toBe(true);
    expect(chainModel('amylose', { iodine: true, heated: true }).colour).toBe(false);
    expect(chainModel('cellulose', { iodine: true }).colour).toBe(false);
    expect(chainModel('amylose').colour).toBe(false);
  });

  it('puts the iodine inside the cold helix only', () => {
    const cold = chainModel('amylose', { iodine: true });
    expect(cold.iodines.every((p) => p.y === 0 && p.z === 0)).toBe(true);
    const hot = chainModel('amylose', { iodine: true, heated: true });
    expect(hot.iodines.every((p) => Math.abs(p.y) > HELIX_RADIUS)).toBe(true);
  });

  it('explains each case', () => {
    expect(iodineNote('amylose', true, true)).toContain('nguội');
    expect(iodineNote('cellulose', false, true)).toContain('không xoắn');
  });
});
