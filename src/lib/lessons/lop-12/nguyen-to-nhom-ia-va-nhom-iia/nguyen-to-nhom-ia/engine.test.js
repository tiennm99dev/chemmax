import { describe, expect, it } from 'vitest';
import {
  BLANK_FLAME,
  CATIONS,
  SAMPLES,
  UNKNOWNS,
  flameOf,
  judge,
  sample,
  sampleTex,
} from './engine.js';

describe('flame colours', () => {
  it('colours the flame by the metal ion, whatever the anion', () => {
    expect(flameOf(sample('NaCl'), false).shown).toBe('Na');
    expect(flameOf(sample('Na2CO3'), false).hex).toBe(CATIONS.Na.hex);
    expect(flameOf(sample('NaHCO3'), false).hex).toBe(CATIONS.Na.hex);
    expect(flameOf(sample('KNO3'), false).text).toContain('tím nhạt');
    expect(flameOf(sample('LiCl'), false).text).toContain('đỏ tía');
  });

  it('shows a clean wire as the burner flame', () => {
    expect(flameOf(null, false)).toMatchObject({ hex: BLANK_FLAME, shown: null });
  });

  it('lets sodium hide potassium until the cobalt glass takes the yellow out', () => {
    const mix = sample('NaCl-KCl');
    expect(flameOf(mix, false).shown).toBe('Na');
    expect(flameOf(mix, true).shown).toBe('K');
    expect(flameOf(sample('NaCl'), true).shown).toBeNull();
    expect(flameOf(sample('KCl'), true).shown).toBe('K');
  });

  it('knows every unknown sample', () => {
    for (const id of UNKNOWNS) expect(() => sample(id)).not.toThrow();
    expect(SAMPLES.every((s) => s.cations.length > 0)).toBe(true);
  });
});

describe('guessing an unknown sample', () => {
  it('accepts the right ions and closes the question', () => {
    expect(judge(sample('KNO3'), 'K', false)).toMatchObject({ ok: true, final: true });
    expect(judge(sample('NaCl-KCl'), 'Na-K', true)).toMatchObject({ ok: true, final: true });
  });

  it('sends the learner to the cobalt glass when a mixture was judged by eye', () => {
    expect(judge(sample('NaCl-KCl'), 'Na', false)).toMatchObject({ ok: false, final: false });
    expect(judge(sample('NaCl-KCl'), 'Na', true)).toMatchObject({ ok: false, final: true });
  });

  it('rejects a wrong single ion and names the sample', () => {
    const v = judge(sample('LiCl'), 'Na', false);
    expect(v.ok).toBe(false);
    expect(v.text).toContain(sampleTex(sample('LiCl')));
  });

  it('writes sample formulas with subscripts', () => {
    expect(sampleTex(sample('Na2CO3'))).toBe('$\\mathrm{Na_2CO_3}$');
  });
});
