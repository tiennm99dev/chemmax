import { describe, expect, it } from 'vitest';
import {
  LEFT_OVER,
  SHAKEN,
  TARGETS,
  THERMOMETERS,
  bestThermometer,
  column,
  isStill,
  judge,
  marks,
  nearestMark,
  settle,
  tempText,
  toCelsius,
  toKelvin,
} from './engine.js';

const [yTe, ruou, thuyNgan] = THERMOMETERS;
const target = (/** @type {string} */ id) => {
  const t = TARGETS.find((x) => x.id === id);
  if (!t) throw new Error(id);
  return t;
};

describe('scales', () => {
  it('converts with T (K) = t (°C) + 273', () => {
    expect(toKelvin(0)).toBe(273);
    expect(toKelvin(100)).toBe(373);
    expect(toKelvin(-273)).toBe(0);
    expect(toCelsius(310)).toBe(37);
  });

  it('reads the nearest mark', () => {
    expect(nearestMark(36.8, 0.1)).toBe(36.8);
    expect(nearestMark(36.8, 1)).toBe(37);
    expect(nearestMark(72, 1)).toBe(72);
    expect(nearestMark(-0.3, 1)).toBe(-0);
  });

  it('draws marks inside the range of each thermometer', () => {
    const m = marks(yTe, 34, 36);
    expect(m[0]).toEqual({ value: 35, kind: 'label' });
    expect(m[5]).toEqual({ value: 35.5, kind: 'half' });
    expect(m.at(-1)?.value).toBe(36);
    expect(marks(thuyNgan, -50, 200)).toHaveLength(121);
    expect(
      marks(ruou, 0, 10)
        .filter((x) => x.kind === 'label')
        .map((x) => x.value),
    ).toEqual([0, 10]);
  });

  it('writes the scale decimals', () => {
    expect(tempText(36.8, yTe)).toBe('36,8');
    expect(tempText(37, yTe)).toBe('37,0');
    expect(tempText(24, ruou)).toBe('24');
  });

  it('picks the thermometer with the smallest ĐCNN that covers the temperature', () => {
    expect(bestThermometer(36.8)).toBe(yTe);
    expect(bestThermometer(24)).toBe(ruou);
    expect(bestThermometer(100)).toBe(thuyNgan);
  });
});

describe('the liquid column', () => {
  it('moves towards the temperature around the bulb', () => {
    expect(settle(28, 100, 6, 0)).toBe(28);
    expect(settle(28, 100, 6, 6)).toBeCloseTo(100 - 72 / Math.E, 9);
    expect(settle(28, 100, 6, 200)).toBeCloseTo(100, 6);
  });

  it('keeps the highest reading on the medical thermometer until shaken', () => {
    expect(column(yTe, 28, LEFT_OVER)).toEqual({ level: LEFT_OVER, over: false, under: false });
    expect(column(yTe, 28, SHAKEN).under).toBe(true);
    expect(column(ruou, 28, LEFT_OVER).level).toBe(28);
  });

  it('runs off the ends of the scale', () => {
    expect(column(ruou, 72, 0)).toEqual({ level: 50, over: true, under: false });
    expect(column(yTe, 0, SHAKEN).under).toBe(true);
  });

  it('is still only close to the target', () => {
    expect(isStill(yTe, 36.79, 36.8)).toBe(true);
    expect(isStill(yTe, 36.6, 36.8)).toBe(false);
    expect(isStill(ruou, 23.8, 24)).toBe(true);
  });
});

describe('judging a reading', () => {
  const base = { inContact: true, still: true, peak: SHAKEN, kelvin: NaN };

  it('accepts a right reading in °C and K', () => {
    const r = judge({
      ...base,
      th: yTe,
      target: target('nach'),
      peak: 36.8,
      celsius: 36.8,
      kelvin: 309.8,
    });
    expect(r.ok).toBe(true);
    expect(r.messages[0]).toContain('309,8 K');
    const boil = judge({
      ...base,
      th: thuyNgan,
      target: target('nuoc-soi'),
      celsius: 100,
      kelvin: 373,
    });
    expect(boil.ok).toBe(true);
  });

  it('suggests a finer thermometer', () => {
    const r = judge({ ...base, th: ruou, target: target('nach'), celsius: 37, kelvin: 310 });
    expect(r.ok).toBe(true);
    expect(r.messages[0]).toMatch(/nhiệt kế y tế/);
  });

  it('refuses a thermometer whose range misses the temperature', () => {
    expect(
      judge({ ...base, th: yTe, target: target('nuoc-nong'), celsius: 42, kelvin: 315 })
        .messages[0],
    ).toMatch(/vỡ/);
    expect(
      judge({ ...base, th: ruou, target: target('nuoc-soi'), celsius: 50, kelvin: 323 }).ok,
    ).toBe(false);
    expect(
      judge({ ...base, th: yTe, target: target('nuoc-da'), celsius: 35, kelvin: 308 }).messages[0],
    ).toMatch(/nhỏ nhất/);
    expect(
      judge({ ...base, th: yTe, target: target('nuoc-da'), celsius: 35, kelvin: 308 }).messages[0],
    ).not.toMatch(/tụt xuống/);
    expect(
      judge({
        ...base,
        th: ruou,
        target: { id: 'x', name: 'Nước muối đá', temp: -40 },
        celsius: -30,
      }).messages[0],
    ).toMatch(/tụt xuống dưới vạch đầu tiên/);
  });

  it('names an unshaken thermometer, a moving column and a wrong conversion', () => {
    const unshaken = judge({
      ...base,
      th: yTe,
      target: target('nach'),
      peak: LEFT_OVER,
      celsius: 37.6,
      kelvin: 310.6,
    });
    expect(unshaken.messages[0]).toMatch(/vẩy/);
    const moving = judge({
      ...base,
      th: thuyNgan,
      target: target('nuoc-nong'),
      still: false,
      celsius: 60,
      kelvin: 333,
    });
    expect(moving.messages[0]).toMatch(/đứng yên/);
    const kelvin = judge({
      ...base,
      th: thuyNgan,
      target: target('nuoc-nong'),
      celsius: 72,
      kelvin: 72,
    });
    expect(kelvin.ok).toBe(false);
    expect(kelvin.messages[0]).toMatch(/\+ 273/);
    expect(
      judge({
        ...base,
        th: thuyNgan,
        target: target('nuoc-nong'),
        inContact: false,
        celsius: 72,
        kelvin: 345,
      }).ok,
    ).toBe(false);
    expect(
      judge({ ...base, th: thuyNgan, target: target('nuoc-nong'), celsius: 71, kelvin: 344 })
        .messages[0],
    ).toMatch(/chưa đúng/);
  });
});
