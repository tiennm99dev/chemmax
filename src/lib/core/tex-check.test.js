// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, it, expect } from 'vitest';
import { strictTexFailures, texSpans } from './tex-check.js';

describe('strictTexFailures', () => {
  it('finds the spans of a rich text', () => {
    expect(texSpans('Số $a$ và $b^2$.')).toEqual(['a', 'b^2']);
  });

  it('passes good TeX and names what strict mode rejects', () => {
    expect(strictTexFailures(['$\\dfrac{1}{2}$', 'không có TeX'])).toEqual([]);
    const failures = strictTexFailures(['$\\notacommand$', '$\\notacommand$']);
    expect(failures).toHaveLength(1);
    expect(failures[0]).toContain('\\notacommand');
  });
});
