import { describe, expect, it } from 'vitest';
import {
  VESSELS,
  buretteLevel,
  buretteReading,
  dilute,
  graduations,
  innerHeight,
  levelFor,
  radiusAt,
  roundReading,
  volumeAt,
} from './glassware.js';

const cylinder = VESSELS['ong-dong'];
const flask = VESSELS['binh-tam-giac'];
const burette = VESSELS.burette;

describe('glassware engine', () => {
  it('interpolates the inner radius along the profile', () => {
    expect(radiusAt(flask, 0)).toBe(74);
    expect(radiusAt(flask, 75)).toBe(47);
    expect(radiusAt(flask, 500)).toBe(15);
  });

  it('holds the stated capacity at the top mark', () => {
    for (const v of Object.values(VESSELS)) {
      expect(volumeAt(v, v.fullHeight), v.id).toBeCloseTo(v.capacity, 9);
      expect(v.fullHeight).toBeLessThanOrEqual(innerHeight(v));
    }
    expect(volumeAt(cylinder, 0)).toBe(0);
  });

  it('fills a cylinder linearly', () => {
    expect(volumeAt(cylinder, cylinder.fullHeight / 2)).toBeCloseTo(50, 9);
    expect(levelFor(cylinder, 25)).toBeCloseTo(cylinder.fullHeight / 4, 6);
  });

  it('inverts volume to level for every shape', () => {
    for (const v of Object.values(VESSELS)) {
      for (const ml of [0.3, v.capacity / 3, v.capacity * 0.9]) {
        expect(volumeAt(v, levelFor(v, ml)), `${v.id} ${ml}`).toBeCloseTo(ml, 6);
      }
    }
    expect(levelFor(cylinder, -5)).toBe(0);
    expect(levelFor(cylinder, 1e6)).toBe(innerHeight(cylinder));
  });

  it('crowds the marks of a conical flask towards the neck', () => {
    const hs = graduations(flask).map((m) => m.h);
    const gaps = hs.slice(1).map((h, i) => h - hs[i]);
    for (let i = 1; i < gaps.length; i++) expect(gaps[i]).toBeGreaterThan(gaps[i - 1]);
  });

  it('marks a cylinder every ĐCNN and labels the major marks', () => {
    const marks = graduations(cylinder);
    expect(marks).toHaveLength(100);
    expect(marks.filter((m) => m.major).map((m) => m.value)).toEqual([
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    ]);
    expect(graduations(VESSELS['ong-nghiem'])).toEqual([]);
    expect(graduations(VESSELS['binh-dinh-muc']).map((m) => m.value)).toEqual([100]);
  });

  it('reads a burette from 0 at the top', () => {
    expect(buretteLevel(burette, 0)).toBe(240);
    expect(buretteLevel(burette, 50)).toBe(40);
    expect(buretteReading(burette, buretteLevel(burette, 12.5))).toBeCloseTo(12.5, 9);
    const marks = graduations(burette);
    expect(marks[0]).toMatchObject({ value: 0, major: true });
    expect(marks.at(-1)?.value).toBe(50);
    expect(marks[1].h).toBeLessThan(marks[0].h);
  });

  it('rounds readings to the nearest mark and dilutes by C1V1 = C2V2', () => {
    expect(roundReading(cylinder, 36.6)).toBe(37);
    expect(roundReading(VESSELS['coc-thuy-tinh'], 130)).toBe(150);
    expect(roundReading(VESSELS['ong-nghiem'], 4.26)).toBe(4.3);
    expect(dilute(2, 25, 100)).toBe(0.5);
    expect(dilute(1, 10, 0)).toBeNaN();
  });
});
