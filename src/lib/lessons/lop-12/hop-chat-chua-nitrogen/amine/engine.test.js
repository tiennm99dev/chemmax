import { describe as group, expect, it } from 'vitest';
import { describe, kbRatio, litmus } from './engine.js';

group('building an amine on the nitrogen atom', () => {
  it('names the amines of the book both ways', () => {
    const cases = [
      [['CH3', 'H', 'H'], 'methylamine', 'methanamine', 1],
      [['C2H5', 'H', 'H'], 'ethylamine', 'ethanamine', 1],
      [['CH3', 'CH3', 'H'], 'dimethylamine', 'N-methylmethanamine', 2],
      [['CH3', 'H', 'C2H5'], 'ethylmethylamine', 'N-methylethanamine', 2],
      [['CH3', 'CH3', 'CH3'], 'trimethylamine', 'N,N-dimethylmethanamine', 3],
      [['C2H5', 'C2H5', 'CH3'], 'diethylmethylamine', 'N-ethyl-N-methylethanamine', 3],
      [['C6H5', 'H', 'H'], 'phenylamine', 'benzenamine', 1],
      [['C6H5', 'CH3', 'H'], 'methylphenylamine', 'N-methylbenzenamine', 2],
      [['C6H5', 'CH3', 'CH3'], 'dimethylphenylamine', 'N,N-dimethylbenzenamine', 3],
    ];
    const bad = [];
    for (const [places, radical, substitution, order] of cases) {
      const a = describe(/** @type {any} */ (places));
      if (a.radicalName !== radical || a.substitutionName !== substitution || a.order !== order)
        bad.push([places, a.radicalName, a.substitutionName, a.order]);
    }
    expect(bad).toEqual([]);
  });

  it('writes the formulas', () => {
    expect(describe(['CH3', 'H', 'H']).molecularTex).toBe('CH_{5}N');
    expect(describe(['C2H5', 'CH3', 'H']).molecularTex).toBe('C_{3}H_{9}N');
    expect(describe(['C6H5', 'H', 'H']).formulaTex).toBe('C_6H_5NH_2');
    expect(describe(['CH3', 'CH3', 'CH3']).formulaTex).toBe('CH_3{-}N(CH_3){-}CH_3');
    expect(describe(['C6H5', 'H', 'H']).commonName).toBe('aniline');
  });

  it('treats ammonia apart and ranks the base strength', () => {
    expect(describe(['H', 'H', 'H']).isAmine).toBe(false);
    const pka = (/** @type {any} */ p) => describe(p).pka ?? NaN;
    const aniline = pka(['C6H5', 'H', 'H']);
    const methyl = pka(['CH3', 'H', 'H']);
    expect(aniline).toBeLessThan(pka(['H', 'H', 'H']));
    expect(methyl).toBeGreaterThan(pka(['H', 'H', 'H']));
    expect(kbRatio(methyl)).toBeGreaterThan(20);
    expect(kbRatio(aniline)).toBeLessThan(1e-4);
    expect(describe(['C2H5', 'CH3', 'H']).pka).toBeNull();
  });

  it('turns litmus blue only for alkylamines', () => {
    expect(litmus(describe(['CH3', 'H', 'H']))).toBe('làm quỳ tím hoá xanh');
    expect(litmus(describe(['C6H5', 'H', 'H']))).toBe('không làm quỳ tím đổi màu');
  });
});
