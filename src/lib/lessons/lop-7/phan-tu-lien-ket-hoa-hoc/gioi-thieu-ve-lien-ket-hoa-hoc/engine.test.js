import { describe, expect, it } from 'vitest';
import {
  COVALENT,
  IONIC_PAIRS,
  canShareMore,
  covalentMessage,
  covalentState,
  ionSymbol,
  ionicElectrons,
  ionicMessage,
  ionicState,
  loneSpots,
  nobleLike,
  sharedSpots,
} from './engine.js';

const GEOMETRY = { metal: { cx: 95, cy: 100 }, nonmetal: { cx: 265, cy: 100 }, r0: 20, dr: 16 };

describe('nobleLike', () => {
  it('recognises helium, neon and argon shells', () => {
    expect(nobleLike([2])?.symbol).toBe('He');
    expect(nobleLike([2, 8])?.symbol).toBe('Ne');
    expect(nobleLike([2, 8, 8])?.symbol).toBe('Ar');
    expect(nobleLike([2, 8, 1])).toBeNull();
  });
});

describe('ionic bonds', () => {
  it('writes ion symbols with superscript charges', () => {
    expect(ionSymbol(11, 1)).toBe('Na⁺');
    expect(ionSymbol(17, -1)).toBe('Cl⁻');
    expect(ionSymbol(12, 2)).toBe('Mg²⁺');
    expect(ionSymbol(8, -2)).toBe('O²⁻');
    expect(ionSymbol(8, 0)).toBe('O');
  });

  it('ends every pair with two noble-gas shells', () => {
    for (const pair of IONIC_PAIRS) {
      const start = ionicState(pair, 0);
      expect(start.metal.noble).toBeNull();
      expect(start.nonmetal.noble).toBeNull();
      expect(start.metal.outer, pair.id).toBe(pair.transfer);
      expect(8 - start.nonmetal.outer, pair.id).toBe(pair.transfer);
      const end = ionicState(pair, pair.transfer);
      expect(end.done).toBe(true);
      expect(end.metal.noble, pair.id).not.toBeNull();
      expect(end.nonmetal.noble, pair.id).not.toBeNull();
    }
  });

  it('gives Na⁺ the neon shells and Cl⁻ the argon shells', () => {
    const s = ionicState(IONIC_PAIRS[0], 1);
    expect(s.metal.shells).toEqual([2, 8]);
    expect(s.nonmetal.shells).toEqual([2, 8, 8]);
    expect(ionicMessage(IONIC_PAIRS[0], 1)).toContain('Na⁺');
    expect(ionicMessage(IONIC_PAIRS[0], 0)).toContain('1 electron ở lớp ngoài cùng');
    expect(ionicMessage(IONIC_PAIRS[1], 1)).toContain('tiếp tục');
  });

  it('keeps every electron and moves the outermost ones', () => {
    for (const pair of IONIC_PAIRS) {
      for (let k = 0; k <= pair.transfer; k++) {
        const dots = ionicElectrons(pair, k, GEOMETRY);
        expect(dots.length).toBe(pair.metal + pair.nonmetal);
        expect(new Set(dots.map((d) => d.id)).size).toBe(dots.length);
        expect(dots.filter((d) => d.moved).length).toBe(k);
        for (const d of dots) expect(Number.isFinite(d.x) && Number.isFinite(d.y)).toBe(true);
      }
      const moved = ionicElectrons(pair, pair.transfer, GEOMETRY).filter((d) => d.moved);
      for (const d of moved) expect(d.x).toBeGreaterThan(180);
      expect(moved[0].id).toBe(`m${pair.metal - pair.transfer}`);
    }
  });
});

describe('covalent bonds', () => {
  it('fills every atom exactly with the textbook pairs', () => {
    for (const mol of COVALENT) {
      const pairs = mol.bonds.map((b) => b.order);
      expect(covalentState(mol, pairs).done, mol.id).toBe(true);
      expect(covalentMessage(mol, pairs)).toContain('Bền rồi');
    }
  });

  it('starts short and blocks sharing an electron an atom no longer has', () => {
    const water = /** @type {import('./engine.js').CovalentMolecule} */ (
      COVALENT.find((m) => m.id === 'h2o')
    );
    expect(covalentState(water, [0, 0]).done).toBe(false);
    expect(covalentMessage(water, [0, 0])).toContain('cần 8');
    expect(canShareMore(water, [0, 0], 0)).toBe(true);
    expect(canShareMore(water, [1, 1], 0)).toBe(false);
  });

  it('reports an atom with too many electrons', () => {
    const o2 = /** @type {import('./engine.js').CovalentMolecule} */ (
      COVALENT.find((m) => m.id === 'o2')
    );
    expect(covalentState(o2, [3]).atoms[0].status).toBe('thua');
    expect(covalentMessage(o2, [3])).toContain('bớt');
    expect(canShareMore(o2, [3], 0)).toBe(false);
  });

  it('only finds unique answers in the models', () => {
    for (const mol of COVALENT) {
      const solutions = [];
      const n = mol.bonds.length;
      for (let code = 0; code < 4 ** n; code++) {
        const pairs = Array.from({ length: n }, (_, k) => Math.floor(code / 4 ** k) % 4);
        if (covalentState(mol, pairs).done) solutions.push(pairs.join());
      }
      expect(solutions, mol.id).toEqual([mol.bonds.map((b) => b.order).join()]);
    }
  });
});

describe('dot layout', () => {
  it('places lone electrons in pairs away from the bonds', () => {
    const spots = loneSpots({ x: 0, y: 0 }, [0], 6, 20);
    expect(spots.length).toBe(6);
    for (const s of spots) {
      expect(Math.hypot(s.x, s.y)).toBeCloseTo(20, 6);
      expect(Math.abs(Math.atan2(s.y, s.x))).toBeGreaterThan(Math.PI / 4 - 0.25);
    }
    expect(loneSpots({ x: 0, y: 0 }, [], 3, 10).length).toBe(3);
    expect(loneSpots({ x: 0, y: 0 }, [], 0, 10)).toEqual([]);
  });

  it('puts two dots per shared pair near the middle', () => {
    const dots = sharedSpots({ x: 0, y: 0 }, { x: 100, y: 0 }, 2, 12);
    expect(dots.length).toBe(4);
    for (const d of dots) expect(Math.abs(d.x - 50)).toBeLessThan(5);
  });
});
