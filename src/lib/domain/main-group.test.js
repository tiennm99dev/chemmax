import { describe, expect, it } from 'vitest';
import { COMPOUNDS, compoundsOf, oxideFormula, roman } from './compounds.js';
import { MAIN_GROUP, atom, valueOf } from './main-group.js';

describe('main-group atoms', () => {
  it('numbers groups by their A group', () => {
    const groups = MAIN_GROUP.filter((a) => a.group < 1 || a.group > 8);
    expect(groups).toEqual([]);
    expect(atom(11)?.group).toBe(1);
    expect(atom(17)?.group).toBe(7);
  });

  it('shrinks the radius along a period and reads a property by name', () => {
    const na = /** @type {import('./main-group.js').MainGroupAtom} */ (atom(11));
    const cl = /** @type {import('./main-group.js').MainGroupAtom} */ (atom(17));
    expect(valueOf(na, 'radius')).toBeGreaterThan(valueOf(cl, 'radius') ?? 0);
  });
});

describe('highest compounds', () => {
  it('gives each element a valence equal to its A group', () => {
    const bad = COMPOUNDS.filter((c) => atom(c.z)?.group !== c.valence);
    expect(bad).toEqual([]);
  });

  it('writes the book forms', () => {
    expect(compoundsOf(13)?.hydroxide).toBe('Al(OH)3');
    expect(roman(4)).toBe('IV');
    expect(oxideFormula('Al', 3)).toBe('Al2O3');
  });
});
