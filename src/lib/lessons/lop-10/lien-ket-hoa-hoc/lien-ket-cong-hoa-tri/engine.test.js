import { describe, expect, it } from 'vitest';
import { molecule } from '#lib/domain/molecule.js';
import { bondType, deltaChi, sigmaPi } from '../_shared/bonds.js';
import {
  BAR_MAX,
  COUNT_MOLECULES,
  FIRST_ATOMS,
  barPercent,
  judgeGuess,
  leanOf,
  pairFacts,
  pairSentence,
  partnersOf,
} from './engine.js';

/** @param {string} id */
const mol = (id) => {
  const m = molecule(id);
  if (!m) throw new Error(id);
  return m;
};

describe('electronegativity thresholds', () => {
  it('matches the worked values of the book', () => {
    expect(deltaChi('H', 'Cl')).toBe(0.96);
    expect(deltaChi('Na', 'Cl')).toBe(2.23);
    expect(bondType(deltaChi('H', 'Cl'))).toBe('polar');
    expect(bondType(deltaChi('Na', 'Cl'))).toBe('ion');
  });

  it('treats the limits as belonging to the next kind', () => {
    expect([bondType(0.39), bondType(0.4), bondType(1.69), bondType(1.7)]).toEqual([
      'nonpolar',
      'polar',
      'polar',
      'ion',
    ]);
  });

  it('classifies H–S and C–H as non-polar, Al–Cl as polar, by the rule', () => {
    expect(bondType(deltaChi('H', 'S'))).toBe('nonpolar');
    expect(bondType(deltaChi('C', 'H'))).toBe('nonpolar');
    expect(bondType(deltaChi('Al', 'Cl'))).toBe('polar');
  });
});

describe('bar', () => {
  it('fits every pair offered and leans towards the more electronegative atom', () => {
    const bad = FIRST_ATOMS.flatMap((a) =>
      partnersOf(a).filter((b) => {
        const f = pairFacts(a, b);
        return f.delta > BAR_MAX || barPercent(f.delta) > 100 || Math.abs(f.lean) > 1;
      }),
    );
    expect(bad).toEqual([]);
    expect(pairFacts('H', 'Cl').lean).toBeGreaterThan(0);
    expect(pairFacts('Cl', 'H').lean).toBeLessThan(0);
    expect(pairFacts('Cl', 'Cl').lean).toBe(0);
    expect(leanOf(1.7)).toBe(1);
    expect(leanOf(1.69)).toBeLessThan(0.8);
  });

  it('never offers a metal with H or C', () => {
    expect(partnersOf('Na')).not.toContain('H');
    expect(partnersOf('Na')).not.toContain('C');
    expect(partnersOf('O')).toContain('H');
  });

  it('writes the difference with a decimal comma', () => {
    expect(pairSentence('H', 'Cl')).toContain('0{,}96');
    expect(pairSentence('Na', 'Cl')).toContain('2{,}23');
    expect(judgeGuess('H', 'Cl', 'polar').ok).toBe(true);
    expect(judgeGuess('H', 'Cl', 'ion').ok).toBe(false);
  });
});

describe('H–F', () => {
  it('keeps the rule but says the molecule is covalent', () => {
    expect(pairFacts('H', 'F').type).toBe('ion');
    expect(pairSentence('H', 'F')).toContain('cộng hoá trị phân cực rất mạnh');
    expect(pairSentence('H', 'F')).not.toContain('nhường hẳn');
  });
});

describe('σ and π bonds', () => {
  it('counts the book molecules', () => {
    expect(sigmaPi(mol('c2h4'))).toEqual({ sigma: 5, pi: 1 });
    expect(sigmaPi(mol('c2h2'))).toEqual({ sigma: 3, pi: 2 });
    expect(sigmaPi(mol('n2'))).toEqual({ sigma: 1, pi: 2 });
    expect(sigmaPi(mol('co2'))).toEqual({ sigma: 2, pi: 2 });
  });

  it('finds every molecule of the counting widget', () => {
    expect(COUNT_MOLECULES.filter((id) => !molecule(id))).toEqual([]);
  });
});
