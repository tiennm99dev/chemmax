import { describe, expect, it } from 'vitest';
import { validSteps } from '../_shared/step-quiz.js';
import { FATS, SOAP_STEPS, baseFor, makeBatch, sapOf, verdict } from './engine.js';

describe('saponification value', () => {
  it('works out the value of pure triglycerides', () => {
    expect(sapOf(890)).toBeCloseTo(188.76, 2);
    expect(sapOf(806)).toBeCloseTo(208.44, 2);
  });

  it('turns a value into the NaOH for a mass of fat', () => {
    const coconut = baseFor(257, 50);
    expect(coconut.koh).toBeCloseTo(12.85, 6);
    expect(coconut.naoh).toBeCloseTo(9.18, 2);
    expect(coconut.ml).toBeCloseTo(22.9, 1);
    expect(baseFor(198, 1).naoh * 1000).toBeCloseTo(141.43, 2);
    expect(FATS.every((f) => f.sap > 180 && f.sap < 270)).toBe(true);
  });
});

describe('a batch of soap', () => {
  it('conserves mass when the base is just enough', () => {
    const b = makeBatch({ sap: sapOf(890), fat: 89, percent: 100 });
    expect(b.naoh).toBeCloseTo(12, 6);
    expect(b.glycerol).toBeCloseTo(9.2, 6);
    expect(b.soap).toBeCloseTo(91.8, 6);
    expect(b.leftoverFat).toBe(0);
    expect(b.leftoverNaoh).toBe(0);
  });

  it('leaves fat with too little base and base with too much', () => {
    expect(makeBatch({ sap: 200, fat: 100, percent: 90 }).leftoverFat).toBeCloseTo(10, 6);
    expect(makeBatch({ sap: 200, fat: 100, percent: 110 }).leftoverNaoh).toBeCloseTo(1.4286, 3);
    expect(verdict(110).tone).toBe('warn');
    expect(verdict(85).tone).toBe('warn');
    expect(verdict(95).tone).toBe('ok');
    expect(verdict(100).tone).toBe('ok');
  });

  it('has one right action at each step of the procedure', () => {
    expect(validSteps(SOAP_STEPS)).toBe(true);
  });
});
