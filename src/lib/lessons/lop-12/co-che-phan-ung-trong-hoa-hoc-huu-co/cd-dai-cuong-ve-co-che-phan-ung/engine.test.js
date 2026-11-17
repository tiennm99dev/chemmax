import { describe, expect, it } from 'vitest';
import { BONDS, cleave } from './engine.js';

/** @param {string} id */
const bond = (id) => {
  const found = BONDS.find((b) => b.id === id);
  if (!found) throw new Error(id);
  return found;
};

describe('bond cleavage', () => {
  it('gives two radicals on homolysis', () => {
    const r = cleave(bond('cl-cl'), 'homo');
    expect(r.left.radical && r.right.radical).toBe(true);
    expect(r.left.tex).toBe('\\mathrm{Cl}{\\cdot}');
    expect(r.tone).toBe('ok');
    expect(cleave(bond('ch3-h'), 'homo').left.kind).toMatch(/gốc tự do/);
  });

  it('sends the pair to the more electronegative atom', () => {
    const r = cleave(bond('tbu-br'), 'hetero', 'right');
    expect(r.left.kind).toBe('carbocation');
    expect(r.left.tex).toBe('\\mathrm{(CH_3)_3C}^{+}');
    expect(r.right.charge).toBe('-');
    expect(r.tone).toBe('ok');
    expect(cleave(bond('tbu-br'), 'hetero', 'left').tone).toBe('warn');
  });

  it('makes a carbanion when carbon is the more electronegative atom', () => {
    const r = cleave(bond('ch3-li'), 'hetero', 'left');
    expect(r.left.kind).toBe('carbanion');
    expect(r.right.kind).toBe('cation');
    expect(r.tone).toBe('ok');
    expect(cleave(bond('ch3-h'), 'hetero', 'left').tone).toBe('ok');
  });

  it('flags heterolysis of a non-polar bond and homolysis of a polar one', () => {
    expect(cleave(bond('cl-cl'), 'hetero', 'right').tone).toBe('info');
    expect(cleave(bond('ch3-li'), 'homo').tone).toBe('info');
  });
});
