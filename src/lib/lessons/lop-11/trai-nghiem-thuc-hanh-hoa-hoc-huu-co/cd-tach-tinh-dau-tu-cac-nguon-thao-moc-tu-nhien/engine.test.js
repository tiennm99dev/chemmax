import { describe, expect, it } from 'vitest';
import {
  ATM,
  MATERIALS,
  PARTS,
  boilingTogether,
  oilPressure,
  placePart,
  runAdvice,
  runDistillation,
  waterPressure,
} from './engine.js';

const [sa, buoi] = MATERIALS;

describe('boiling together', () => {
  it('gives water about 1 atm at 100 °C and each oil 1 atm at its own boiling point', () => {
    expect(waterPressure(100)).toBeCloseTo(ATM, 0);
    expect(oilPressure(sa, sa.boil)).toBeCloseTo(ATM, 6);
    expect(oilPressure(buoi, buoi.boil)).toBeCloseTo(ATM, 6);
  });

  it('distils water with an oil below 100 °C, lower for the more volatile limonene', () => {
    const tSa = boilingTogether(sa);
    const tBuoi = boilingTogether(buoi);
    expect(tSa).toBeLessThan(100);
    expect(tSa).toBeGreaterThan(99);
    expect(tBuoi).toBeCloseTo(97, 0);
    expect(waterPressure(tBuoi) + oilPressure(buoi, tBuoi)).toBeCloseTo(ATM, 0);
  });
});

describe('assembling the set-up', () => {
  it('accepts the parts only in the order the steam flows', () => {
    let placed = /** @type {string[]} */ ([]);
    const wrong = placePart(placed, 'sinh-han');
    expect(wrong.ok).toBe(false);
    expect(wrong.placed).toEqual([]);
    for (const p of PARTS) {
      const r = placePart(placed, p.id);
      expect(r.ok).toBe(true);
      placed = r.placed;
    }
    expect(placed).toEqual(PARTS.map((p) => p.id));
    expect(placePart(placed, 'cap-hoi').ok).toBe(false);
  });
});

describe('running the still', () => {
  const good = {
    material: sa,
    cut: /** @type {const} */ ('cat-nho'),
    coolant: /** @type {const} */ ('duoi-len'),
  };

  it('collects nothing before heating and nearly all the oil after an hour and a half', () => {
    expect(runDistillation({ ...good, minutes: 0 }).oilG).toBe(0);
    const r = runDistillation({ ...good, minutes: 90 });
    expect(r.recovered).toBeGreaterThan(0.95);
    expect(r.oilG).toBeCloseTo(0.97, 2);
    expect(r.yieldPct).toBeCloseTo(0.49, 2);
    expect(r.temp).toBeLessThan(100);
    expect(runAdvice({ ...good, minutes: 90 }).ok).toBe(true);
  });

  it('loses oil when crushed or when the condenser runs the wrong way', () => {
    const best = runDistillation({ ...good, minutes: 90 }).oilG;
    expect(runDistillation({ ...good, cut: 'gia-nat', minutes: 90 }).oilG).toBeLessThan(
      best * 0.75,
    );
    expect(runDistillation({ ...good, coolant: 'tren-xuong', minutes: 90 }).oilG).toBeLessThan(
      best * 0.65,
    );
    expect(runDistillation({ ...good, cut: 'dai', minutes: 90 }).recovered).toBeLessThan(0.7);
    expect(runAdvice({ ...good, coolant: 'tren-xuong', minutes: 30 }).ok).toBe(false);
  });
});
