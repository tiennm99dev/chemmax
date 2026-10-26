import { describe, expect, it } from 'vitest';
import { parseFormula } from '#lib/domain/formula.js';
import { isBalanced, parseEquation } from '#lib/domain/equation.js';
import {
  REACTIONS,
  atomTally,
  bondsAt,
  groups,
  nextStop,
  phaseAt,
  positionsAt,
  prevStop,
  speciesAt,
} from './engine.js';

/**
 * Sorted formulas of the molecules the bonds join, e.g. ["H2", "H2", "O2"].
 * @param {import('./engine.js').Reaction} r
 * @param {import('./engine.js').RxBond[]} bonds
 */
function moleculeKeys(r, bonds) {
  return groups(r.atoms.length, bonds)
    .map((g) => {
      /** @type {Record<string, number>} */
      const c = {};
      for (const i of g) c[r.atoms[i].el] = (c[r.atoms[i].el] ?? 0) + 1;
      return JSON.stringify(Object.entries(c).sort());
    })
    .sort();
}

/** @param {import('./engine.js').RxSpecies[]} list */
function speciesKeys(list) {
  return list
    .flatMap((s) =>
      Array.from({ length: s.count }, () =>
        JSON.stringify(Object.entries(parseFormula(s.formula).atoms).sort()),
      ),
    )
    .sort();
}

describe.each(REACTIONS)('$id', (r) => {
  it('is a balanced equation whose coefficients are the molecule counts', () => {
    const eq = parseEquation(r.equation);
    const coefficients = [...r.before, ...r.after].map((s) => s.count);
    expect(isBalanced(eq, coefficients)).toBe(true);
    expect(eq.reactants.map((s) => s.formula)).toEqual(r.before.map((s) => s.formula));
    expect(eq.products.map((s) => s.formula)).toEqual(r.after.map((s) => s.formula));
  });

  it('draws the reactant molecules before and the product molecules after', () => {
    expect(moleculeKeys(r, bondsAt(r, 0))).toEqual(speciesKeys(r.before));
    expect(moleculeKeys(r, bondsAt(r, 1))).toEqual(speciesKeys(r.after));
    expect(bondsAt(r, 0.5)).toEqual([]);
  });

  it('keeps every atom and ends at the product positions', () => {
    const total = atomTally(r).reduce((s, x) => s + x.count, 0);
    for (const t of [0, 0.3, 0.6, 1]) expect(positionsAt(r, t)).toHaveLength(total);
    expect(positionsAt(r, 1)).toEqual(r.atoms.map((a) => a.end));
    expect(positionsAt(r, 0)).toEqual(r.atoms.map((a) => a.start));
  });

  it('lists no molecules while the atoms are apart', () => {
    expect(speciesAt(r, 0)).toBe(r.before);
    expect(speciesAt(r, 0.5)).toEqual([]);
    expect(speciesAt(r, 1)).toBe(r.after);
  });
});

describe('phases and stops', () => {
  it('runs through the four stages in order', () => {
    expect([0, 0.3, 0.6, 0.9].map(phaseAt)).toEqual(['truoc', 'pha-vo', 'sap-xep', 'sau']);
  });

  it('steps forward and back through one stop per stage', () => {
    const forward = [0];
    while (forward[forward.length - 1] < 1) forward.push(nextStop(forward[forward.length - 1]));
    expect(forward.map(phaseAt)).toEqual(['truoc', 'pha-vo', 'sap-xep', 'sau']);
    expect(prevStop(1)).toBe(forward[2]);
    expect(prevStop(0)).toBe(0);
  });
});
