import { describe, expect, it } from 'vitest';
import { balloonIn, convert, dotCount, relativeDensity } from './engine.js';

describe('convert', () => {
  it('goes from an amount to mass, particles and gas volume', () => {
    const r = convert('CO2', 'n', 0.5);
    expect(r?.M).toBe(44);
    expect(r?.m).toBe(22);
    expect(r?.N).toBeCloseTo(3.011e23, -18);
    expect(r?.V).toBeCloseTo(12.395, 9);
  });

  it('goes from a mass back to the amount', () => {
    expect(convert('H2O', 'm', 9)?.n).toBe(0.5);
    expect(convert('Fe', 'm', 28)?.n).toBe(0.5);
    expect(convert('CaCO3', 'm', 25)?.n).toBe(0.25);
  });

  it('goes from a gas volume and from a particle count', () => {
    expect(convert('O2', 'V', 49.58)?.n).toBe(2);
    expect(convert('O2', 'V', 49.58)?.m).toBe(64);
    expect(convert('N2', 'N', 1.2044e24)?.n).toBe(2);
  });

  it('gives no volume for solids and liquids', () => {
    expect(convert('NaCl', 'n', 1)?.V).toBeNull();
    expect(convert('H2O', 'V', 24.79)).toBeNull();
  });

  it('rejects negative or missing values', () => {
    expect(convert('O2', 'n', -1)).toBeNull();
    expect(convert('O2', 'n', NaN)).toBeNull();
  });
});

describe('relative density', () => {
  it('compares molar masses', () => {
    expect(relativeDensity('O2', 'H2')).toBe(16);
    expect(relativeDensity('CO2', 'kk')).toBeCloseTo(1.517, 3);
    expect(relativeDensity('SO2', 'O2')).toBe(2);
  });

  it('tells whether a balloon rises or sinks in air', () => {
    expect(balloonIn('H2')).toBe('bay-len');
    expect(balloonIn('CH4')).toBe('bay-len');
    expect(balloonIn('CO2')).toBe('chim-xuong');
    expect(balloonIn('N2')).toBe('lo-lung');
  });
});

describe('dotCount', () => {
  it('draws one dot per 0,1 mol, capped at sixty', () => {
    expect(dotCount(0.5)).toBe(5);
    expect(dotCount(2)).toBe(20);
    expect(dotCount(100)).toBe(60);
  });
});
