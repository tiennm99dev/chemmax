import { describe, expect, it } from 'vitest';
import { CENTRE_BASE, LIGAND_BASE, chargeSup, complexCharge } from './complex.js';

const ligandOf = (/** @type {string} */ id) =>
  /** @type {Record<string, { charge: number }>} */ (LIGAND_BASE)[id];

describe('shared complex data', () => {
  it('writes a charge as a superscript', () => {
    expect(chargeSup(2)).toBe('2+');
    expect(chargeSup(-1)).toBe('-');
    expect(chargeSup(-4)).toBe('4-');
    expect(chargeSup(0)).toBe('');
  });

  it('adds the ligand charges to the centre charge', () => {
    expect(complexCharge(3, [{ ligand: 'NH3', count: 6 }], ligandOf)).toBe(3);
    expect(complexCharge(2, [{ ligand: 'CN', count: 6 }], ligandOf)).toBe(-4);
    expect(
      complexCharge(
        2,
        [
          { ligand: 'Cl', count: 2 },
          { ligand: 'NH3', count: 2 },
        ],
        ligandOf,
      ),
    ).toBe(0);
  });

  it('keys every entry by its own id', () => {
    for (const [key, l] of Object.entries(LIGAND_BASE)) expect(l.id).toBe(key);
    for (const [key, c] of Object.entries(CENTRE_BASE)) expect(c.id).toBe(key);
  });
});
