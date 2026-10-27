import { describe, expect, it } from 'vitest';
import { moleculeMassAmu } from '#lib/domain/book-mass.js';
import {
  KIT,
  MAX_EACH,
  TARGETS,
  classify,
  formulaOf,
  knownMolecule,
  massBreakdown,
  matchesTarget,
  targetHint,
} from './engine.js';

describe('formulaOf', () => {
  it('writes the school formulas of the kit molecules', () => {
    expect(formulaOf({ H: 2, O: 1 })).toBe('H2O');
    expect(formulaOf({ C: 1, O: 2 })).toBe('CO2');
    expect(formulaOf({ N: 1, H: 3 })).toBe('NH3');
    expect(formulaOf({ H: 4, C: 1 })).toBe('CH4');
    expect(formulaOf({ H: 1, Cl: 1 })).toBe('HCl');
    expect(formulaOf({ H: 2, S: 1 })).toBe('H2S');
    expect(formulaOf({ S: 1, O: 2 })).toBe('SO2');
    expect(formulaOf({ O: 3 })).toBe('O3');
    expect(formulaOf({ H: 0 })).toBe('');
  });
});

describe('classify', () => {
  it('sorts by the number of elements', () => {
    expect(classify({})).toBeNull();
    expect(classify({ O: 2 })).toBe('don-chat');
    expect(classify({ S: 1 })).toBe('don-chat');
    expect(classify({ H: 2, O: 1 })).toBe('hop-chat');
    expect(classify({ C: 1, H: 4, O: 1 })).toBe('hop-chat');
  });
});

describe('massBreakdown', () => {
  it('adds the book masses', () => {
    expect(massBreakdown({ H: 2, O: 1 }).total).toBe(18);
    expect(massBreakdown({ H: 1, Cl: 1 }).total).toBe(36.5);
    expect(massBreakdown({ Cl: 2 }).total).toBe(71);
    expect(massBreakdown({ C: 1, O: 2 }).terms).toEqual([
      { symbol: 'C', n: 1, mass: 12 },
      { symbol: 'O', n: 2, mass: 16 },
    ]);
  });
});

describe('knownMolecule', () => {
  it('finds a shape for every target and for the common gases', () => {
    for (const t of TARGETS) expect(knownMolecule(t.counts), formulaOf(t.counts)).not.toBeNull();
    /** @type {Array<Record<string, number>>} */
    const more = [{ H: 2 }, { N: 2 }, { H: 2, S: 1 }, { S: 1, O: 2 }];
    for (const c of more) {
      expect(knownMolecule(c)).not.toBeNull();
    }
    expect(knownMolecule({ H: 5 })).toBeNull();
  });

  it('draws the atoms the formula counts', () => {
    const m = knownMolecule({ O: 3 });
    expect(m?.shape.atoms.length).toBe(3);
    expect(m?.name).toBe('ozone');
  });
});

describe('targets', () => {
  it('fit in the kit and match their stated mass', () => {
    for (const t of TARGETS) {
      for (const [s, n] of Object.entries(t.counts)) {
        expect(KIT).toContain(s);
        expect(n).toBeLessThanOrEqual(MAX_EACH);
      }
      const mass = moleculeMassAmu(formulaOf(t.counts));
      expect(t.task.replace(/(\d),(\d)/, '$1.$2'), t.task).toContain(`${mass} amu`);
    }
  });

  it('hint without giving the count and finish on a match', () => {
    const water = TARGETS[0];
    expect(matchesTarget(water, { H: 2, O: 1 })).toBe(true);
    expect(matchesTarget(water, { H: 2, O: 1, C: 0 })).toBe(true);
    expect(targetHint(water, { C: 1 })).toContain('không có nguyên tố C');
    expect(targetHint(water, { H: 2 })).toContain('thiếu nguyên tố O');
    expect(targetHint(water, { H: 1, O: 1 })).toContain('cần thêm nguyên tử H');
    expect(targetHint(water, { H: 3, O: 1 })).toContain('thừa nguyên tử H');
    expect(targetHint(water, { H: 2, O: 1 })).toBe('Đã xong.');
  });
});
