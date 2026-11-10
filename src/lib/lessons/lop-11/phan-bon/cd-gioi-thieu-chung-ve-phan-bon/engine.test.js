import { describe, expect, it } from 'vitest';
import { CASES, NUTRIENTS, caseAt, inGroup, judge, nutrient } from './engine.js';

describe('nutrient table', () => {
  it('groups N, P, K as macro, Ca, Mg, S, Si as secondary, and the rest as micro', () => {
    expect(inGroup('da').map((n) => n.symbol)).toEqual(['N', 'P', 'K']);
    expect(inGroup('trung').map((n) => n.symbol)).toEqual(['Ca', 'Mg', 'S', 'Si']);
    expect(inGroup('vi').map((n) => n.symbol)).toEqual(['Fe', 'Zn', 'B', 'Cu', 'Mn', 'Mo', 'Co']);
  });

  it('has one entry per symbol and no carbon, hydrogen or oxygen', () => {
    const symbols = NUTRIENTS.map((n) => n.symbol);
    expect(new Set(symbols).size).toBe(symbols.length);
    expect(symbols.filter((s) => ['C', 'H', 'O'].includes(s))).toEqual([]);
  });

  it('gives each diagnosis case its own symptom text', () => {
    const lacks = CASES.map((s) => nutrient(s).lack);
    expect(new Set(lacks).size).toBe(CASES.length);
  });
});

describe('diagnosis game', () => {
  it('visits every case once per cycle', () => {
    const seen = new Set(CASES.map((_, i) => caseAt(i)));
    expect(seen.size).toBe(CASES.length);
    expect(caseAt(CASES.length)).toBe(caseAt(0));
  });

  it('confirms a right guess and describes a wrong one', () => {
    expect(judge('Mg', 'Mg').ok).toBe(true);
    const miss = judge('Mg', 'Fe');
    expect(miss.ok).toBe(false);
    expect(miss.text).toContain('lá non');
  });
});
