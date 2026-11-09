import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  branchKey,
  buildSkeleton,
  carbonLabel,
  judgeName,
  nameAlkane,
  parentName,
  randomBench,
  writeName,
} from './engine.js';

/** @param {number} length @param {import('./engine.js').Branches} branches */
const nameOf = (length, branches = {}) => nameAlkane(buildSkeleton(length, branches))?.name;

/** Every bench with `length` carbons drawn, each branch slot empty, CH3 or C2H5. */
function* benches(/** @type {number} */ length) {
  const slots = [];
  for (let i = 1; i < length - 1; i++) slots.push(branchKey(i, 'up'), branchKey(i, 'down'));
  for (let c = 0; c < 3 ** slots.length; c++) {
    let x = c;
    /** @type {import('./engine.js').Branches} */
    const branches = {};
    for (const s of slots) {
      branches[s] = /** @type {0 | 1 | 2} */ (x % 3);
      x = Math.floor(x / 3);
    }
    yield branches;
  }
}

describe('alkane naming', () => {
  it('names straight chains', () => {
    expect([3, 4, 5, 6, 7].map((n) => nameOf(n))).toEqual([
      'propane',
      'butane',
      'pentane',
      'hexane',
      'heptane',
    ]);
    expect(parentName(10)).toBe('decane');
  });

  it('follows the book examples', () => {
    expect(nameOf(3, { '1:up': 1 })).toBe('2-methylpropane');
    expect(nameOf(3, { '1:up': 1, '1:down': 1 })).toBe('2,2-dimethylpropane');
    expect(nameOf(4, { '1:up': 1 })).toBe('2-methylbutane');
    expect(nameOf(4, { '2:down': 1 })).toBe('2-methylbutane');
    expect(nameOf(5, { '1:up': 1, '2:up': 1 })).toBe('2,3-dimethylpentane');
    expect(nameOf(5, { '1:up': 1, '1:down': 1, '3:up': 1 })).toBe('2,2,4-trimethylpentane');
  });

  it('finds a main chain longer than the drawn one', () => {
    expect(nameOf(3, { '1:up': 2 })).toBe('2-methylbutane');
    expect(nameOf(4, { '1:up': 2 })).toBe('3-methylpentane');
    expect(nameOf(5, { '2:up': 2, '2:down': 2 })).toBe('3,3-diethylpentane');
  });

  it('cites branches in alphabetical order and breaks locant ties by it', () => {
    expect(nameOf(5, { '1:up': 1, '2:down': 2 })).toBe('3-ethyl-2-methylpentane');
    expect(nameOf(6, { '2:up': 1, '3:down': 2 })).toBe('3-ethyl-4-methylhexane');
    expect(
      writeName(6, [
        { locant: 4, name: 'methyl' },
        { locant: 3, name: 'ethyl' },
      ]),
    ).toBe('3-ethyl-4-methylhexane');
  });

  it('names every bench up to five drawn carbons, the same from either end', () => {
    const wrong = [];
    for (const length of [3, 4, 5]) {
      for (const branches of benches(length)) {
        const skeleton = buildSkeleton(length, branches);
        const result = nameAlkane(skeleton);
        // number the nodes the other way round: the name must not change
        const n = skeleton.adj.length;
        const relabelled = nameAlkane({
          spots: skeleton.spots,
          adj: skeleton.adj.map((_, i) => skeleton.adj[n - 1 - i].map((j) => n - 1 - j)),
        });
        if (!result || relabelled?.name !== result.name) wrong.push(branches);
        else if (result.chain.length < length) wrong.push(branches);
      }
    }
    expect(wrong).toEqual([]);
  });

  it('keeps carbon 1 at an end of the main chain and every locant inside it', () => {
    const wrong = [];
    for (const branches of benches(5)) {
      const r = nameAlkane(buildSkeleton(5, branches));
      if (!r || r.substituents.some((s) => s.locant <= 1 || s.locant >= r.chain.length))
        wrong.push(branches);
    }
    expect(wrong).toEqual([]);
  });

  it('writes condensed carbon labels by valence', () => {
    expect([1, 2, 3, 4].map(carbonLabel)).toEqual(['CH3', 'CH2', 'CH', 'C']);
  });

  it('makes random benches that always have a name', () => {
    const rand = rng(7);
    const missing = Array.from({ length: 60 }, () => randomBench(rand)).filter(
      (b) => !nameAlkane(buildSkeleton(b.length, b.branches)),
    );
    expect(missing).toEqual([]);
  });
});

describe('judging a typed name', () => {
  const right = /** @type {import('./engine.js').AlkaneName} */ (
    nameAlkane(buildSkeleton(5, { '1:up': 1, '2:down': 2 }))
  );

  it('accepts the name with any case, spaces or dash', () => {
    expect(judgeName('3-Ethyl-2-methyl pentane', right)).toBe('right');
    expect(judgeName('3–ethyl–2–methylpentane', right)).toBe('right');
  });

  it('names the rule that was broken', () => {
    expect(judgeName('2-methyl-3-ethylpentane', right)).toBe('order');
    expect(judgeName('3-ethyl-4-methylpentane', right)).toBe('numbering');
    expect(judgeName('2,3-dimethylpentane', right)).toBe('branches');
    expect(judgeName('2-methyl-3-ethylbutane', right)).toBe('parent');
  });
});
