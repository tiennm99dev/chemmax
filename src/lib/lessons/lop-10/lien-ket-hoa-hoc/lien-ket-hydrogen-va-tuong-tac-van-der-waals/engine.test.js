import { describe, expect, it } from 'vitest';
import {
  SERIES,
  START,
  SUBSTANCES,
  boardText,
  hydrogenBonds,
  judgeOutlier,
  orient,
  outlier,
  pushOut,
  tempText,
} from './engine.js';

/** @param {string} id */
const substance = (id) => {
  const s = SUBSTANCES.find((x) => x.id === id);
  if (!s) throw new Error(id);
  return s;
};

/** @param {Array<[number, number]>} places */
const placed = (places) => places.map(([x, y]) => ({ x, y, angle: 0 }));

describe('hydrogen bond board', () => {
  it('starts with no bonds', () => {
    const start = START.map((p) => ({ ...p, angle: 0 }));
    expect(SUBSTANCES.flatMap((s) => hydrogenBonds(orient(start, s), s))).toEqual([]);
  });

  it('forms a bond when two water molecules come close', () => {
    const s = substance('H2O');
    const pair = orient(
      placed([
        [100, 100],
        [165, 100],
      ]),
      s,
    );
    expect(hydrogenBonds(pair, s).length).toBeGreaterThanOrEqual(1);
  });

  it('forms no bond in methane at any distance', () => {
    const s = substance('CH4');
    expect(
      hydrogenBonds(
        orient(
          placed([
            [100, 100],
            [152, 100],
          ]),
          s,
        ),
        s,
      ),
    ).toEqual([]);
  });

  it('gives no more than 4 bonds per water molecule', () => {
    const s = substance('H2O');
    const cross = orient(
      placed([
        [180, 160],
        [180, 95],
        [245, 160],
        [180, 225],
        [115, 160],
      ]),
      s,
    );
    const bonds = hydrogenBonds(cross, s);
    const onCentre = bonds.filter((b) => b.donor === 0 || b.acceptor === 0).length;
    expect(onCentre).toBeGreaterThan(0);
    expect(onCentre).toBeLessThanOrEqual(4);
  });

  it('caps acceptors by their lone pairs', () => {
    const s = substance('NH3');
    const crowd = orient(
      placed([
        [180, 160],
        [180, 95],
        [245, 160],
        [115, 160],
      ]),
      s,
    );
    const load = crowd.map(
      (_, i) => hydrogenBonds(crowd, s).filter((b) => b.acceptor === i).length,
    );
    expect(Math.max(...load)).toBeLessThanOrEqual(1);
  });

  it('never leaves molecules overlapping', () => {
    const p = pushOut({ x: 100, y: 100 }, [{ x: 110, y: 100 }]);
    expect(Math.hypot(p.x - 110, p.y - 100)).toBeCloseTo(52);
    expect(pushOut({ x: 110, y: 100 }, [{ x: 110, y: 100 }]).x).toBeCloseTo(162);
  });

  it('explains methane without counting bonds', () => {
    expect(boardText(substance('CH4'), 0)).toContain('van der Waals');
    expect(boardText(substance('H2O'), 2)).toContain('2 liên kết hydrogen');
  });
});

describe('boiling series', () => {
  it('singles out the molecules with hydrogen bonds', () => {
    const out = Object.fromEntries(SERIES.map((s) => [s.id, outlier(s)]));
    expect(out).toEqual({
      via: 'H2O',
      viia: 'HF',
      va: 'NH3',
      iva: null,
      halogen: null,
      noble: null,
    });
  });

  it('rises steadily in the series with only van der Waals forces', () => {
    const uneven = SERIES.filter((s) => outlier(s) === null).filter((s) =>
      s.items.some((it, i) => i > 0 && it.t <= s.items[i - 1].t),
    );
    expect(uneven).toEqual([]);
  });

  it('judges the pick and writes temperatures with a comma and minus sign', () => {
    expect(judgeOutlier(SERIES[0], 'H2O').ok).toBe(true);
    expect(judgeOutlier(SERIES[3], 'none').ok).toBe(true);
    expect(judgeOutlier(SERIES[3], 'CH4').ok).toBe(false);
    expect(tempText(-60.3)).toBe('−60,3 °C');
    expect(tempText(100)).toBe('100 °C');
  });
});
