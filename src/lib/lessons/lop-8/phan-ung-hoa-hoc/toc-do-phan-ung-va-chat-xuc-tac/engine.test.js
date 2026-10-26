import { describe, expect, it } from 'vitest';
import {
  axisTop,
  changes,
  compareRuns,
  concentrationText,
  defaultRun,
  finalVolume,
  gasRate,
  gasVolume,
  rateConstant,
  remaining,
} from './engine.js';

const limestone = defaultRun('da-voi');
const peroxide = defaultRun('oxi-gia');

describe('finalVolume', () => {
  it('collects 0,001 mol of CO2 from 0,1 g of limestone', () => {
    expect(finalVolume(limestone)).toBeCloseTo(24.79, 9);
    expect(finalVolume({ ...limestone, concentration: 2, surface: 'bot' })).toBeCloseTo(24.79, 9);
  });

  it('collects O2 in proportion to the amount of H2O2', () => {
    // 5 g of 3% solution: 0,15 g H2O2 = 0,15 / 34 mol, giving half as much O2.
    expect(finalVolume(peroxide)).toBeCloseTo((0.15 / 34 / 2) * 24790, 6);
    expect(finalVolume({ ...peroxide, concentration: 6 })).toBeCloseTo(
      2 * finalVolume(peroxide),
      9,
    );
  });

  it('does not depend on the catalyst', () => {
    expect(finalVolume({ ...peroxide, catalyst: true })).toBe(finalVolume(peroxide));
  });
});

describe('rateConstant', () => {
  it('doubles for every 10 °C', () => {
    expect(rateConstant({ ...limestone, temperature: 35 })).toBeCloseTo(
      2 * rateConstant(limestone),
      12,
    );
  });

  it('grows with acid concentration and contact surface', () => {
    const k = rateConstant(limestone);
    expect(rateConstant({ ...limestone, concentration: 2 })).toBeGreaterThan(k);
    expect(rateConstant({ ...limestone, surface: 'manh' })).toBeGreaterThan(k);
    expect(rateConstant({ ...limestone, surface: 'bot' })).toBeGreaterThan(
      rateConstant({ ...limestone, surface: 'manh' }),
    );
  });

  it('is far larger with MnO2', () => {
    expect(rateConstant({ ...peroxide, catalyst: true })).toBeGreaterThan(
      50 * rateConstant(peroxide),
    );
  });
});

describe('gasVolume, gasRate and remaining', () => {
  it('starts at zero and approaches the final volume', () => {
    const run = { ...limestone, surface: /** @type {const} */ ('bot') };
    expect(gasVolume(run, 0)).toBe(0);
    expect(gasVolume(run, 1000)).toBeCloseTo(finalVolume(run), 6);
    expect(remaining(run, 0)).toBe(1);
    expect(gasVolume(run, 20) / finalVolume(run) + remaining(run, 20)).toBeCloseTo(1, 12);
  });

  it('slows down as the reactant runs out', () => {
    expect(gasRate(limestone, 30)).toBeLessThan(gasRate(limestone, 0));
  });
});

describe('changes and compareRuns', () => {
  it('names one changed factor and says the reaction got faster', () => {
    const hot = { ...limestone, temperature: 45 };
    expect(changes(limestone, hot).map((c) => c.factor)).toEqual(['nhiet-do']);
    const r = compareRuns(limestone, hot);
    expect(r.tone).toBe('ok');
    expect(r.text).toContain('nhanh hơn');
    expect(r.text).toContain('từ 25 °C lên 45 °C');
  });

  it('says slower when the concentration drops', () => {
    const r = compareRuns(limestone, { ...limestone, concentration: 0.5 });
    expect(r.text).toContain('chậm hơn');
    expect(r.text).toContain('từ 1 M xuống 0,5 M');
  });

  it('asks for a fair test when two factors change', () => {
    const r = compareRuns(peroxide, { ...peroxide, catalyst: true, temperature: 40 });
    expect(r.tone).toBe('warn');
    expect(r.text).toContain('2 yếu tố');
  });

  it('explains the catalyst', () => {
    const r = compareRuns(peroxide, { ...peroxide, catalyst: true });
    expect(r.text).toContain('chất xúc tác');
    expect(r.text).toContain('nhanh hơn');
  });

  it('only invites a comparison on the first run or a new reaction', () => {
    expect(compareRuns(null, limestone).tone).toBe('info');
    expect(compareRuns(limestone, peroxide).tone).toBe('info');
    expect(compareRuns(limestone, { ...limestone }).text).toContain('không đổi');
  });

  it('ignores the controls the reaction does not use', () => {
    expect(changes(limestone, { ...limestone, catalyst: true })).toEqual([]);
    expect(changes(peroxide, { ...peroxide, surface: 'bot' })).toEqual([]);
  });
});

describe('labels', () => {
  it('writes concentrations the book way', () => {
    expect(concentrationText({ ...limestone, concentration: 1.5 })).toBe('1,5 M');
    expect(concentrationText(peroxide)).toBe('3%');
  });

  it('rounds the volume axis up', () => {
    expect(axisTop(24.79)).toBe(25);
    expect(axisTop(54.7)).toBe(75);
    expect(axisTop(109.4)).toBe(125);
  });
});
