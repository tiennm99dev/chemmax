import { describe, expect, it } from 'vitest';
import { GRAPHS, allTasks, judge, solutionText, taskRate } from './engine.js';

describe('reading rates off graphs', () => {
  it('keeps every reading on a grid crossing, so it can be read exactly', () => {
    const bad = [];
    for (const g of GRAPHS) {
      for (const [t, y] of g.points) {
        if (Math.abs(t / g.tStep - Math.round(t / g.tStep)) > 1e-9) bad.push([g.id, t]);
        if (Math.abs(y / g.yStep - Math.round(y / g.yStep)) > 1e-9) bad.push([g.id, y]);
        if (t > g.tMax || y > g.yMax) bad.push([g.id, t, y]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('draws curves whose rate falls over time', () => {
    const bad = [];
    for (const graph of GRAPHS) {
      for (let from = 0; from + 2 < graph.points.length; from++) {
        const now = taskRate({ graph, from, to: from + 1 });
        const next = taskRate({ graph, from: from + 1, to: from + 2 });
        if (next >= now) bad.push([graph.id, from]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('computes the book values', () => {
    const [oxygen, n2o5, hcl, ab] = GRAPHS;
    expect(taskRate({ graph: oxygen, from: 2, to: 3 })).toBeCloseTo(10 / 15, 9);
    expect(taskRate({ graph: n2o5, from: 0, to: 1 })).toBe(0.001);
    expect(taskRate({ graph: hcl, from: 1, to: 2 })).toBe(0.05);
    expect(taskRate({ graph: ab, from: 0, to: 2 })).toBe(0.01);
  });

  it('accepts a rounded answer and names the common slips', () => {
    const oxygen = { graph: GRAPHS[0], from: 0, to: 1 };
    expect(judge(oxygen, 1.07)).toBe('right');
    expect(judge(oxygen, 1.067)).toBe('right');
    expect(judge(oxygen, 1.1)).toBe('wrong');
    const n2o5 = { graph: GRAPHS[1], from: 0, to: 1 };
    expect(judge(n2o5, 0.001)).toBe('right');
    expect(judge(n2o5, -0.001)).toBe('negative');
    expect(judge(n2o5, 0.002)).toBe('coefficient');
    expect(judge(n2o5, null)).toBe('invalid');
  });

  it('writes a solution for every task and offers them all', () => {
    const tasks = allTasks();
    expect(tasks.length).toBe(GRAPHS.length * 7);
    const bad = tasks.filter((t) => !solutionText(t).includes('\\overline{v}') || taskRate(t) <= 0);
    expect(bad).toEqual([]);
  });
});
