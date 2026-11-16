import { describe, expect, it } from 'vitest';
import { FEEDS, M_WATER, join } from './engine.js';

describe('joining monomers into a polymer', () => {
  it('forms a polymer only by the method the structure allows', () => {
    const expected = /** @type {Record<string, string | null>} */ ({
      ethylene: 'trung-hop',
      propylene: 'trung-hop',
      'vinyl-chloride': 'trung-hop',
      styrene: 'trung-hop',
      caprolactam: 'trung-hop',
      aminocaproic: 'trung-ngung',
      nylon: 'trung-ngung',
      pet: 'trung-ngung',
      ethanol: null,
    });
    const bad = [];
    for (const f of FEEDS) {
      for (const method of /** @type {const} */ (['trung-hop', 'trung-ngung'])) {
        if (join(f.id, method, 2).ok !== (expected[f.id] === method)) bad.push([f.id, method]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('keeps mass: monomers in equal chain plus water out', () => {
    const bad = [];
    for (const f of FEEDS) {
      for (const method of /** @type {const} */ (['trung-hop', 'trung-ngung'])) {
        for (const units of [1, 3, 4]) {
          const o = join(f.id, method, units);
          if (o.ok && o.monomerMass !== o.chainMass + o.water * M_WATER) bad.push([f.id, units]);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('counts the molecules and the water the book way', () => {
    const nylon = join('nylon', 'trung-ngung', 3);
    expect(nylon.before).toEqual([
      'C₆H₁₆N₂',
      'C₆H₁₀O₄',
      'C₆H₁₆N₂',
      'C₆H₁₀O₄',
      'C₆H₁₆N₂',
      'C₆H₁₀O₄',
    ]);
    expect(nylon.chain.slice(0, 2)).toEqual(['NH[CH₂]₆NH', 'CO[CH₂]₄CO']);
    expect(join('ethanol', 'trung-ngung', 2).chain).toEqual([]);
    expect(nylon.water).toBe(6);
    expect(nylon.chainMass).toBe(678);
    const pe = join('ethylene', 'trung-hop', 4);
    expect(pe.water).toBe(0);
    expect(pe.chainMass).toBe(112);
    expect(join('ethylene', 'trung-ngung', 4).message).toContain('không trùng ngưng được');
    expect(join('aminocaproic', 'trung-hop', 4).message).toContain('không trùng hợp được');
    expect(join('ethanol', 'trung-hop', 2).message).toContain('cũng không trùng ngưng');
  });
});
