import { describe, expect, it } from 'vitest';
import { STEP_REACTIONS } from '../_shared/redox.js';
import { electronCheck, roleResult, seedIsBalanced, tapResult } from './engine.js';

const byId = (/** @type {string} */ id) => {
  const r = STEP_REACTIONS.find((x) => x.id === id);
  if (!r) throw new Error(id);
  return r;
};

describe('electron balance steps', () => {
  it('tells apart the changing atoms from the others', () => {
    const r = byId('mg-hno3');
    expect(tapResult(r, 'Mg', 0, 'left').change).toBe('lose');
    expect(tapResult(r, 'N', 2, 'right').change).toBe('gain');
    expect(tapResult(r, 'N', 5, 'right').change).toBe(null);
    expect(tapResult(r, 'O', -2, 'left').text).toContain('không đổi');
    expect(tapResult(r, 'N', 5, 'left').text).toContain('giảm từ +5 thành +2');
  });

  it('judges the agents from the reaction', () => {
    const r = byId('kmno4-hcl');
    expect(roleResult(r, 'reducer', 'HCl').ok).toBe(true);
    expect(roleResult(r, 'reducer', 'KMnO4').ok).toBe(false);
    expect(roleResult(r, 'oxidant', 'KMnO4').ok).toBe(true);
  });

  it('counts electrons for all the atoms written in a half-reaction', () => {
    const r = byId('fe-h2so4');
    expect(electronCheck(r, 6, 2).ok).toBe(true);
    const short = electronCheck(r, 3, 2);
    expect(short.ok).toBe(false);
    expect(short.text).toContain('2 nguyên tử Fe');
  });

  it('knows when the placed multipliers already balance the scheme', () => {
    const balanced = STEP_REACTIONS.filter(seedIsBalanced).map((r) => r.id);
    expect(balanced).toEqual(['fe2o3-co', 'n2-h2']);
  });
});
