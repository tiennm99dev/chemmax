// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import { chainSteps } from './number-chain.js';

describe('number chains', () => {
  it('carries each result on to the next arrow', () => {
    expect(
      chainSteps(34, [
        { op: '+', n: 5 },
        { op: '-', n: 12 },
      ]),
    ).toEqual([
      { sign: '+', word: 'cộng', n: 5, value: 39 },
      { sign: '−', word: 'trừ', n: 12, value: 27 },
    ]);
  });
});
