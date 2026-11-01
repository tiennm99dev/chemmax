import { describe, expect, it } from 'vitest';
import { MAIN_GROUP, atom } from '../_shared/main-group.js';
import { atomAt, heat, lineThrough, trend, valueText } from './engine.js';

const at = (/** @type {number} */ z) =>
  /** @type {import('../_shared/main-group.js').MainGroupAtom} */ (atom(z));

describe('main-group table', () => {
  it('places atoms by period and A group', () => {
    expect(atomAt(3, 7)?.symbol).toBe('Cl');
    expect(atomAt(4, 3)?.symbol).toBe('Ga');
    expect(atomAt(6, 3)).toBeUndefined();
    expect(new Set(MAIN_GROUP.map((a) => `${a.period}-${a.group}`)).size).toBe(MAIN_GROUP.length);
  });

  it('writes values the Vietnamese way', () => {
    expect(valueText(at(1), 'ionization')).toBe('1 312 kJ/mol');
    expect(valueText(at(3), 'electronegativity')).toBe('0,98');
    expect(valueText(at(10), 'electronegativity')).toBe('không xét');
  });

  it('colours higher values deeper', () => {
    expect(heat(at(55), 'radius')).not.toBe(heat(at(9), 'radius'));
    expect(heat(at(10), 'electronegativity')).toBe('#e2e8f0');
  });
});

describe('trend', () => {
  it('radius grows down every group and shrinks across every period', () => {
    const broken = [];
    for (const a of MAIN_GROUP) {
      if (trend(a, 'group', 'radius').against.length) broken.push(`g${a.symbol}`);
      if (trend(a, 'period', 'radius').against.length) broken.push(`p${a.symbol}`);
    }
    expect(broken).toEqual([]);
  });

  it('reads group IA from lithium, without hydrogen', () => {
    expect(lineThrough(at(11), 'group', 'radius').map((a) => a.symbol)).toEqual([
      'Li',
      'Na',
      'K',
      'Rb',
      'Cs',
    ]);
    expect(trend(at(1), 'group', 'radius').sentence).toContain('Hydrogen');
  });

  it('names the steps against the trend', () => {
    const period2 = trend(at(3), 'period', 'ionization');
    expect(period2.against.map(([a, b]) => `${a.symbol}${b.symbol}`)).toEqual(['BeB', 'NO']);
    expect(trend(at(13), 'group', 'electronegativity').against.map(([, b]) => b.symbol)).toEqual([
      'Ga',
    ]);
    expect(trend(at(17), 'period', 'electronegativity').sentence).toContain('từ Na đến Cl');
  });

  it('leaves the noble gases out of electronegativity', () => {
    expect(trend(at(18), 'group', 'electronegativity').line).toEqual([]);
  });
});
