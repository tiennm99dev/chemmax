import { describe, expect, it } from 'vitest';
import { ELECTRODE_COUPLES, electrodeCouple } from './electrode-potentials.js';

describe('electrode potentials', () => {
  it('lists the couples in rising E°', () => {
    const E = ELECTRODE_COUPLES.map((c) => c.E);
    expect(E).toEqual([...E].sort((a, b) => a - b));
  });

  it('keeps the book values', () => {
    const table = Object.fromEntries(ELECTRODE_COUPLES.map((c) => [c.id, c.E]));
    expect(table).toEqual({
      K: -2.924,
      Na: -2.713,
      Mg: -2.356,
      Al: -1.676,
      Zn: -0.762,
      Fe: -0.44,
      Ni: -0.257,
      Sn: -0.137,
      Pb: -0.126,
      H: 0,
      Cu: 0.34,
      Ag: 0.799,
    });
  });

  it('finds a couple by id and rejects an unknown one', () => {
    expect(electrodeCouple('Zn').charge).toBe(2);
    expect(() => electrodeCouple('Xx')).toThrow();
  });
});
