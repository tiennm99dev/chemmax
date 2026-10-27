import { describe, expect, it } from 'vitest';
import { isBalancedText } from '../_shared/reaction.js';
import { METALS, REAGENTS, outcome } from './engine.js';

describe('outcome', () => {
  it('gives a balanced equation exactly when something reacts', () => {
    for (const m of METALS) {
      for (const r of REAGENTS) {
        const o = outcome(m.id, r.id);
        expect(o.seen.length, `${m.id} ${r.id}`).toBeGreaterThan(0);
        expect(o.why.length).toBeGreaterThan(0);
        if (o.reacts) {
          expect(o.equation, `${m.id} ${r.id}`).not.toBeNull();
          expect(isBalancedText(/** @type {string} */ (o.equation)), o.equation ?? '').toBe(true);
        } else {
          expect(o.equation).toBeNull();
        }
      }
    }
  });

  it('keeps silver from burning and copper and silver out of hydrochloric acid', () => {
    expect(outcome('Ag', 'O2').reacts).toBe(false);
    expect(outcome('Cu', 'HCl').reacts).toBe(false);
    expect(outcome('Ag', 'HCl').reacts).toBe(false);
    expect(outcome('Fe', 'HCl').equation).toBe('Fe + 2HCl → FeCl2 + H2↑');
  });

  it('lets only sodium react with water at room temperature', () => {
    const reacting = METALS.filter((m) => outcome(m.id, 'H2O').reacts).map((m) => m.id);
    expect(reacting).toEqual(['Na']);
  });

  it('displaces a weaker metal from its salt but never the reverse', () => {
    expect(outcome('Fe', 'CuSO4').equation).toBe('Fe + CuSO4 → FeSO4 + Cu');
    expect(outcome('Fe', 'CuSO4').sign).toBe('coat');
    expect(outcome('Cu', 'AgNO3').reacts).toBe(true);
    expect(outcome('Cu', 'CuSO4').reacts).toBe(false);
    expect(outcome('Ag', 'CuSO4').reacts).toBe(false);
  });

  it('shows sodium reacting with the water of a salt solution instead', () => {
    const o = outcome('Na', 'CuSO4');
    expect(o.equation).toBe('2Na + 2H2O → 2NaOH + H2↑');
    expect(o.sign).toBe('gas');
  });

  it('uses iron(III) with chlorine and Fe3O4 with oxygen', () => {
    expect(outcome('Fe', 'Cl2').equation).toBe('2Fe + 3Cl2 → 2FeCl3');
    expect(outcome('Fe', 'O2').equation).toBe('3Fe + 2O2 → Fe3O4');
    expect(outcome('Fe', 'O2').heated).toBe(true);
  });
});
