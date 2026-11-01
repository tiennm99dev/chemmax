import { describe, expect, it } from 'vitest';
import { PRESETS, canMove, dropEdge, freeSpots, judge, lewisState, sharedSpots } from './engine.js';

/** @param {string} id */
const preset = (id) => {
  const p = PRESETS.find((x) => x.id === id);
  if (!p) throw new Error(id);
  return p;
};

/**
 * The solution of a preset: `pairs` shared pairs per edge, or for an ion the
 * whole outer shell of the giver.
 * @param {import('./engine.js').LewisPreset} p @param {number[]} pairs
 */
function solve(p, pairs) {
  /** @type {import('./engine.js').Move[]} */
  const moves = [];
  p.edges.forEach((e, edge) => {
    for (let k = 0; k < pairs[edge]; k++) {
      moves.push({ atom: e.a, edge });
      if (e.kind === 'share') moves.push({ atom: e.b, edge });
    }
  });
  return moves;
}

const SOLUTIONS = /** @type {Record<string, number[]>} */ ({
  h2: [1],
  cl2: [1],
  hcl: [1],
  h2o: [1, 1],
  nh3: [1, 1, 1],
  ch4: [1, 1, 1, 1],
  o2: [2],
  n2: [3],
  co2: [2, 2],
  naf: [1],
  mgo: [2],
});

describe('Lewis board', () => {
  it('solves every preset with the book bond orders', () => {
    const wrong = PRESETS.filter((p) => !judge(p, solve(p, SOLUTIONS[p.id])).solved).map(
      (p) => p.id,
    );
    expect(wrong).toEqual([]);
  });

  it('keeps every moved electron accounted for', () => {
    const bad = PRESETS.filter((p) => {
      const s = lewisState(p, solve(p, SOLUTIONS[p.id]));
      const total = p.atoms.reduce((n, a) => n + a.valence, 0);
      const free = s.atoms.reduce((n, a) => n + a.free, 0);
      const shared = s.edges.reduce((n, e) => n + (e.pairs + e.lonely === 0 ? 0 : e.a + e.b), 0);
      return free + shared !== total;
    }).map((p) => p.id);
    expect(bad).toEqual([]);
  });

  it('does not count an unpaired electron for the other atom', () => {
    const p = preset('hcl');
    const s = lewisState(p, [{ atom: 1, edge: 0 }]);
    expect(s.edges[0].lonely).toBe(1);
    expect(s.atoms[0].count).toBe(1);
    expect(s.atoms[1].count).toBe(7);
    expect(judge(p, [{ atom: 1, edge: 0 }]).solved).toBe(false);
  });

  it('warns when a double bond pushes chlorine past eight electrons', () => {
    const p = preset('cl2');
    expect(lewisState(p, solve(p, [2])).atoms[0].count).toBe(9);
    expect(judge(p, solve(p, [2])).tone).toBe('warn');
  });

  it('turns the giver into a cation and the receiver into an anion', () => {
    const p = preset('mgo');
    const half = lewisState(p, solve(p, [1]));
    expect(half.atoms[0].ok).toBe(false);
    const s = lewisState(p, solve(p, [2]));
    expect(s.atoms[0]).toMatchObject({ charge: 2, free: 0, count: 8, ok: true });
    expect(s.atoms[1]).toMatchObject({ charge: -2, free: 8, count: 8, ok: true });
    expect(canMove(p, [], 1, 0)).toBe(false);
  });

  it('stops an atom with no free electron', () => {
    const p = preset('h2');
    expect(canMove(p, [{ atom: 0, edge: 0 }], 0, 0)).toBe(false);
  });

  it('drops on the nearest edge the atom belongs to', () => {
    const p = preset('h2o');
    expect(dropEdge(p, [], 0, { x: 130, y: 130 })).toBe(0);
    expect(dropEdge(p, [], 0, { x: 230, y: 130 })).toBe(1);
    expect(dropEdge(p, [], 0, { x: 180, y: 10 })).toBe(-1);
  });

  it('draws one spot per electron', () => {
    const p = preset('co2');
    expect(freeSpots(p, 0, 6)).toHaveLength(6);
    expect(sharedSpots(p, 0, 2, 2)).toHaveLength(4);
    expect(sharedSpots(p, 0, 2, 1).filter((s) => s.owner === 1)).toHaveLength(2);
  });
});
