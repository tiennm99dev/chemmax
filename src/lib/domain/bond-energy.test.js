import { describe, expect, it } from 'vitest';
import bonds from '#lib/lessons/lop-10/lien-ket-hoa-hoc/lien-ket-cong-hoa-tri/content.vi.js';
import { BOND_ENERGY } from './bond-energy.js';

/** Every "bond, value" pair of the two-column table in the covalent bond lesson. */
function printedPairs() {
  const table = bonds.sections
    .flatMap((s) => s.blocks)
    .find((b) => b.type === 'table' && b.rows.some((r) => r[0] === 'H–H'));
  if (table?.type !== 'table') throw new Error('bond table not found');
  return table.rows.flatMap((r) => [
    [r[0], Number(r[1])],
    [r[2], Number(r[3])],
  ]);
}

describe('bond energies', () => {
  it('uses the book value for O=O', () => {
    expect(BOND_ENERGY['O=O']).toBe(494);
  });

  it('agrees with the table the covalent bond lesson prints', () => {
    const differ = printedPairs().filter(([bond, value]) => BOND_ENERGY[bond] !== value);
    expect(differ).toEqual([]);
  });
});
