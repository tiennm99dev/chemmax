import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { buildSkeleton, nameAlkane } from '#lib/domain/alkane-name.js';
import { randomBench } from './engine.js';

describe('the alkane bench', () => {
  it('makes random benches that always have a name', () => {
    const rand = rng(7);
    const missing = Array.from({ length: 60 }, () => randomBench(rand)).filter(
      (b) => !nameAlkane(buildSkeleton(b.length, b.branches)),
    );
    expect(missing).toEqual([]);
  });
});
