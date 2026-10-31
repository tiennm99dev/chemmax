import { describe, expect, it } from 'vitest';
import { CONCEPT_BINS, CONCEPT_CARDS } from './engine.js';

describe('concept map cards', () => {
  it('puts every card in a known bin with a reason, four per bin', () => {
    const ids = new Set(CONCEPT_BINS.map((b) => b.id));
    expect(CONCEPT_CARDS.filter((c) => !ids.has(c.bin) || !c.why)).toEqual([]);
    for (const bin of CONCEPT_BINS) {
      expect(CONCEPT_CARDS.filter((c) => c.bin === bin.id)).toHaveLength(4);
    }
    expect(new Set(CONCEPT_CARDS.map((c) => c.id)).size).toBe(CONCEPT_CARDS.length);
  });
});
