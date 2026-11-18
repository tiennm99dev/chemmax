// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { describe, expect, it } from 'vitest';
import { BANDS, KID_MAX_GRADE, bandOf } from './band.js';
import { KID_MAX_GRADE as SCHEMA_KID_MAX } from './content-schema.js';

describe('bandOf', () => {
  it('maps each grade to its school level', () => {
    const got = Array.from({ length: 12 }, (_, i) => bandOf(i + 1));
    expect(got).toEqual([
      ...Array(5).fill('tieu-hoc'),
      ...Array(4).fill('thcs'),
      ...Array(3).fill('thpt'),
    ]);
  });

  it('gives pages with no grade the neutral band', () => {
    expect(bandOf()).toBe('chung');
    expect(bandOf(null)).toBe('chung');
  });

  it('keeps one source for the kid grade limit', () => {
    expect(SCHEMA_KID_MAX).toBe(KID_MAX_GRADE);
    expect(bandOf(KID_MAX_GRADE)).toBe('tieu-hoc');
    expect(bandOf(KID_MAX_GRADE + 1)).toBe('thcs');
  });

  it('lists every band once', () => {
    expect(new Set(BANDS).size).toBe(4);
    for (let g = 1; g <= 12; g++) expect(BANDS).toContain(bandOf(g));
  });
});
