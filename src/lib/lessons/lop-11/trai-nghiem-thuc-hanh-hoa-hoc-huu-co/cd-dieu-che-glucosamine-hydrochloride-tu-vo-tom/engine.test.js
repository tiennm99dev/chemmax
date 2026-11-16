import { describe, expect, it } from 'vitest';
import { validSteps } from '../_shared/step-quiz.js';
import { GLUCOSAMINE_STEPS, SHELL, acidFor, co2From, glucosamineFrom, stageOf } from './engine.js';

describe('masses', () => {
  it('uses a composition that adds up to 100 g', () => {
    expect(SHELL.caco3 + SHELL.protein + SHELL.chitin + SHELL.pigment).toBe(100);
  });

  it('works out the gas, the acid and the product', () => {
    expect(co2From(30)).toBeCloseTo(7.437, 6);
    expect(co2From(35)).toBeCloseTo(8.6765, 6);
    expect(acidFor(30, 10)).toBeCloseTo(219, 6);
    expect(glucosamineFrom(20.3)).toBeCloseTo(21.55, 6);
    expect(glucosamineFrom(20)).toBeCloseTo(21.23, 2);
  });
});

describe('stages', () => {
  it('removes one part at each purification step and keeps the chitin', () => {
    expect(stageOf(0, 100, 60).parts).toHaveLength(4);
    expect(stageOf(1, 100, 60).parts.map((p) => p.key)).not.toContain('caco3');
    expect(stageOf(3, 100, 60).parts).toEqual([{ key: 'chitin', mass: 22 }]);
  });

  it('turns the chitin into glucosamine hydrochloride and applies the yield at the end', () => {
    expect(stageOf(4, 100, 60).parts[0].mass).toBeCloseTo(23.355, 3);
    expect(stageOf(6, 100, 50).parts[0].mass).toBeCloseTo(11.677, 3);
    expect(stageOf(6, 200, 50).parts[0].mass).toBeCloseTo(23.355, 3);
  });

  it('has one right action at each step', () => {
    expect(validSteps(GLUCOSAMINE_STEPS)).toBe(true);
    expect(GLUCOSAMINE_STEPS).toHaveLength(6);
  });
});
