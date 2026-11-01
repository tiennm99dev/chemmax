import { describe, expect, it } from 'vitest';
import {
  PAIRS,
  atomsAfter,
  halfReactions,
  latticeIons,
  neighbourText,
  neighbours,
  nobleWith,
  speciesFormula,
  totalTransfers,
  transferNote,
} from './engine.js';

describe('electron transfer', () => {
  it('leaves every ion of every pair with a noble gas count of electrons', () => {
    const wrong = PAIRS.flatMap((p) => {
      const end = atomsAfter(p, totalTransfers(p));
      return [...end.metals, ...end.nonmetals]
        .filter((a) => nobleWith(a.electrons) === null)
        .map(() => p.formula);
    });
    expect(wrong).toEqual([]);
  });

  it('keeps the compound neutral once the transfer ends', () => {
    const charged = PAIRS.filter((p) => {
      const end = atomsAfter(p, totalTransfers(p));
      return [...end.metals, ...end.nonmetals].reduce((n, a) => n + a.charge, 0) !== 0;
    }).map((p) => p.formula);
    expect(charged).toEqual([]);
  });

  it('empties and fills atoms in turn', () => {
    const mgcl2 = PAIRS[3];
    expect(totalTransfers(mgcl2)).toBe(2);
    const one = atomsAfter(mgcl2, 1);
    expect(one.metals[0].electrons).toBe(11);
    expect(one.nonmetals.map((a) => a.charge)).toEqual([-1, 0]);
    const na2o = PAIRS[4];
    expect(atomsAfter(na2o, 1).metals.map((a) => a.charge)).toEqual([1, 0]);
    expect(atomsAfter(na2o, 2).nonmetals[0].electrons).toBe(10);
  });

  it('writes species and half-reactions', () => {
    expect(speciesFormula(12, 2)).toBe('Mg^2+');
    expect(speciesFormula(8, -2)).toBe('O^2-');
    expect(speciesFormula(17, -1)).toBe('Cl^-');
    expect(halfReactions(PAIRS[2])).toEqual([
      { left: ['Mg'], right: ['Mg^2+', '2e'] },
      { left: ['O', '2e'], right: ['O^2-'] },
    ]);
  });
});

describe('transfer note', () => {
  it('names the noble gases once the transfer ends', () => {
    const end = transferNote(PAIRS[0], 1);
    expect(end).toContain('giống Ne');
    expect(end).toContain('giống Ar');
    expect(transferNote(PAIRS[3], 1)).toContain('1/2');
  });
});

describe('sodium chloride block', () => {
  const ions = latticeIons();

  it('alternates the two ions: every neighbour has the other charge', () => {
    const bad = ions.filter((i) => neighbours(i, ions).some((n) => n.kind === i.kind));
    expect(ions).toHaveLength(27);
    expect(bad).toEqual([]);
  });

  it('gives the book count of 6 at the centre and fewer on the cut surface', () => {
    const count = (/** @type {string} */ place) => {
      const ion = ions.find((i) => i.place === place);
      if (!ion) throw new Error(place);
      return neighbours(ion, ions).length;
    };
    expect([count('tam'), count('mat'), count('canh'), count('dinh')]).toEqual([6, 5, 4, 3]);
  });

  it('says a cut-off ion still has 6 neighbours in the real crystal', () => {
    const corner = ions.find((i) => i.place === 'dinh');
    if (!corner) throw new Error('corner');
    expect(neighbourText(corner, ions)).toContain('6 ion');
    const centre = ions.find((i) => i.place === 'tam');
    if (!centre) throw new Error('centre');
    expect(centre.kind).toBe('Na');
    expect(neighbourText(centre, ions)).toContain('đúng 6 ion Cl⁻');
  });
});
