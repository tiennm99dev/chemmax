import { describe, expect, it } from 'vitest';
import {
  MATERIAL_BINS,
  MATERIAL_CARDS,
  MONOMERS,
  polymerMass,
  unitMass,
  unitsIn,
} from './engine.js';

describe('monomers and polymers', () => {
  it('has the book masses of the monomers', () => {
    expect(unitMass('ethylene')).toBe(28);
    expect(unitMass('propylene')).toBe(42);
    expect(unitMass('vinyl-chloride')).toBe(62.5);
  });

  it('multiplies the unit mass by the number of units', () => {
    expect(polymerMass('ethylene', 1000)).toBe(28_000);
    expect(polymerMass('vinyl-chloride', 4000)).toBe(250_000);
    expect(unitsIn('ethylene', 420_000)).toBe(15_000);
    expect(unitsIn('vinyl-chloride', 250_000)).toBe(4000);
  });

  it('keeps every monomer a C=C compound', () => {
    for (const m of MONOMERS) expect(m.monomer).toContain('=');
  });
});

describe('material cards', () => {
  it('puts every card in a known bin and fills every bin', () => {
    const bins = new Set(MATERIAL_BINS.map((b) => b.id));
    for (const c of MATERIAL_CARDS) expect(bins.has(c.bin), c.id).toBe(true);
    for (const b of MATERIAL_BINS) expect(MATERIAL_CARDS.some((c) => c.bin === b.id)).toBe(true);
    expect(new Set(MATERIAL_CARDS.map((c) => c.id)).size).toBe(MATERIAL_CARDS.length);
  });
});
