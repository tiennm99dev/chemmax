// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, it, expect } from 'vitest';
import {
  approxTex,
  approxText,
  frameOf,
  graphPath,
  regionPath,
  simpson,
  squareHeight,
  tickText,
  ticksIn,
} from './plot.js';

const win = { xMin: -2, xMax: 2, yMin: -3, yMax: 3 };

/** The x values of the points of a path, in order. @param {string} d @param {ReturnType<typeof frameOf>} fr */
const xsOf = (d, fr) => [...d.matchAll(/[ML] (-?[\d.]+) /g)].map((m) => fr.ix(Number(m[1])));

describe('frame and ticks', () => {
  it('maps the window corners to the box and back', () => {
    const fr = frameOf(win);
    expect([fr.sx(-2), fr.sx(2), fr.sy(-3), fr.sy(3)]).toEqual([
      fr.left,
      fr.right,
      fr.bottom,
      fr.top,
    ]);
    expect(fr.ix(fr.sx(1.25))).toBeCloseTo(1.25, 12);
  });

  it('takes the margins and the size from the options', () => {
    const fr = frameOf(win, { width: 300, height: 200, left: 40 });
    expect([fr.left, fr.right, fr.top, fr.bottom]).toEqual([40, 286, 14, 174]);
  });

  it('gives a height with equal scales on both axes', () => {
    const square = { xMin: -1, xMax: 4, yMin: -1, yMax: 4 };
    const fr = frameOf(square, { height: squareHeight(square) });
    expect(Math.abs(fr.sx(1) - fr.sx(0) - (fr.sy(0) - fr.sy(1)))).toBeLessThan(0.2);
  });

  it('picks round ticks, also for a tiny window, written with a decimal comma', () => {
    expect(ticksIn(0, 10, 5)).toEqual([0, 2, 4, 6, 8, 10]);
    expect(ticksIn(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
    expect(ticksIn(0.998, 1.002, 4)).toEqual([0.998, 0.999, 1, 1.001, 1.002]);
    expect(tickText(-0.5)).toBe('−0,5');
  });
});

describe('graph path', () => {
  const fr = frameOf(win);

  it('lifts the pen at a break', () => {
    const d = graphPath((x) => (x < 0 ? -1 : 1), win, fr, { breaks: [0] });
    expect(d.match(/M/g)?.length).toBe(2);
  });

  it('lifts the pen where f is undefined or far off', () => {
    expect(graphPath((x) => 1 / x, win, fr).match(/M/g)?.length).toBe(2);
    expect(graphPath((x) => 1 / x, win, fr, { breaks: [0] }).match(/M/g)?.length).toBe(2);
  });

  it('draws one stroke for a continuous function between from and to', () => {
    const d = graphPath((x) => x * x - 1, win, fr, { from: -1, to: 1 });
    expect(d.match(/M/g)?.length).toBe(1);
    expect(d.startsWith(`M ${fr.sx(-1).toFixed(2)}`)).toBe(true);
    const half = graphPath((x) => x, win, fr, { to: 0 });
    expect(half.endsWith(`${fr.sx(0).toFixed(2)} ${fr.sy(0).toFixed(2)}`)).toBe(true);
  });

  it('draws a branch closer to its asymptote when refined', () => {
    const f = (/** @type {number} */ x) => Math.log(Math.abs(x));
    const plain = graphPath(f, win, fr, { breaks: [0] });
    const refined = graphPath(f, win, fr, { breaks: [0], refine: true });
    const nearest = (/** @type {string} */ d) => Math.min(...xsOf(d, fr).filter((x) => x > 0));
    expect(refined.match(/M/g)?.length).toBe(2);
    expect(nearest(refined)).toBeLessThan(nearest(plain) / 2);
    // Refining changes nothing where there is no break.
    expect(graphPath(f, win, fr, { refine: true, from: 0.5 })).toBe(
      graphPath(f, win, fr, { from: 0.5 }),
    );
  });

  it('closes a region between two graphs', () => {
    const d = regionPath((x) => x * x, undefined, 0, 1, fr);
    expect(d.startsWith(`M ${fr.sx(0).toFixed(2)} ${fr.sy(0).toFixed(2)}`)).toBe(true);
    expect(d.endsWith('Z')).toBe(true);
    expect(regionPath((x) => x, undefined, 1, 1, fr)).toBe('');
  });
});

describe('numbers beside a graph', () => {
  it('integrates numerically', () => {
    expect(simpson((x) => x * x, 0, 3)).toBeCloseTo(9, 9);
  });

  it('marks rounded values with ≈', () => {
    expect(approxText(2.5)).toBe('2,5');
    expect(approxText(1 / 3)).toBe('≈ 0,33');
    expect(approxText(-4)).toBe('−4');
    expect(approxTex(1 / 3)).toBe('\\approx 0{,}33');
    expect(approxTex(-1.5)).toBe('= -1{,}5');
  });
});
