import { describe, expect, it } from 'vitest';
import { build, hydrolysisProducts, hydrolysisTex, silverMol } from './engine.js';

describe('disaccharides from two units', () => {
  it('builds saccharose and maltose only from the book bonds', () => {
    expect(build('fructose', 2)).toMatchObject({
      id: 'saccharose',
      bond: 'α-1,2-glycoside',
      freeHemi: false,
    });
    expect(build('glucose', 4)).toMatchObject({
      id: 'maltose',
      bond: 'α-1,4-glycoside',
      freeHemi: true,
    });
    expect(build('fructose', 4).id).toBeNull();
    expect(build('glucose', 2).id).toBeNull();
  });

  it('hydrolyses into the right monosaccharides', () => {
    expect(hydrolysisProducts('saccharose')).toEqual(['glucose', 'fructose']);
    expect(hydrolysisProducts('maltose')).toEqual(['glucose', 'glucose']);
    expect(hydrolysisTex('maltose')).toContain('2\\underset');
  });

  it('counts the silver before and after hydrolysis', () => {
    expect(silverMol('saccharose', false, 0.1)).toBe(0);
    expect(silverMol('maltose', false, 0.1)).toBeCloseTo(0.2);
    expect(silverMol('saccharose', true, 0.1)).toBeCloseTo(0.4);
    expect(silverMol('maltose', true, 0.1)).toBeCloseTo(0.4);
  });
});
