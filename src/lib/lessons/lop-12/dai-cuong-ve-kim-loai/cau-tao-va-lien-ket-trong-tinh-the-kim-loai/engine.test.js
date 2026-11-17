import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  HEX_C,
  LATTICES,
  SEA,
  cellAtoms,
  cellEdges,
  neighbours,
  seedElectrons,
  stepElectrons,
} from './engine.js';

describe('lattices', () => {
  it('finds the coordination number of each lattice', () => {
    for (const l of LATTICES) expect(neighbours(l.id).length).toBe(l.coordination);
  });

  it('draws the cells the book shows', () => {
    expect(cellAtoms('bcc').length).toBe(9);
    expect(cellAtoms('fcc').length).toBe(14);
    expect(cellAtoms('hcp').length).toBe(17);
    expect(cellEdges('bcc').length).toBe(12);
    expect(cellEdges('hcp').length).toBe(18);
  });

  it('puts the middle hexagonal layer touching the layers above and below', () => {
    const mid = cellAtoms('hcp')[7];
    const top = cellAtoms('hcp')[16];
    const d = Math.hypot(mid.x - top.x, mid.y - top.y, mid.z - top.z);
    expect(d).toBeCloseTo(1, 9);
    expect(HEX_C).toBeCloseTo(1.633, 3);
  });
});

describe('electron sea', () => {
  it('keeps electrons inside the field', () => {
    let e = seedElectrons(30, rng(7));
    for (let i = 0; i < 200; i++) e = stepElectrons(e, 0.05, i % 2 === 0);
    const outside = e.filter((p) => p.x < 0 || p.x >= SEA.width || p.y < 0 || p.y > SEA.height);
    expect(outside).toEqual([]);
  });

  it('drifts to the right only under a voltage', () => {
    const one = [{ x: 10, y: 50, vx: 0, vy: 0 }];
    expect(stepElectrons(one, 1, false)[0].x).toBe(10);
    expect(stepElectrons(one, 1, true)[0].x).toBeGreaterThan(10);
  });
});
