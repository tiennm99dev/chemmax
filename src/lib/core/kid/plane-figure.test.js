// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, expect, it } from 'vitest';
import {
  arch,
  areCollinear,
  figureText,
  lineThrough,
  polylineFigure,
  shapeAt,
  zigzag,
} from './plane-figure.js';

describe('plane figures', () => {
  it('tells collinear points from others', () => {
    expect(areCollinear({ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 6 })).toBe(true);
    expect(areCollinear({ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 5 })).toBe(false);
    expect(areCollinear({ x: 40, y: 10 }, { x: 40, y: 20 }, { x: 40, y: 90 })).toBe(true);
  });

  it('runs a line through two points to the edges of the drawing', () => {
    expect(lineThrough({ x: 10, y: 20 }, { x: 50, y: 20 }, 100, 40)).toEqual([
      { x: 0, y: 20 },
      { x: 100, y: 20 },
    ]);
    expect(lineThrough({ x: 30, y: 10 }, { x: 30, y: 30 }, 100, 40)).toEqual([
      { x: 30, y: 0 },
      { x: 30, y: 40 },
    ]);
    const [p, q] = lineThrough({ x: 10, y: 10 }, { x: 20, y: 20 }, 100, 40);
    expect(p).toEqual({ x: 0, y: 0 });
    expect(q).toEqual({ x: 40, y: 40 });
  });

  it('draws a longer polyline part longer and keeps it inside the drawing', () => {
    const lengths = [3, 6, 4];
    const pts = zigzag(lengths);
    const drawn = lengths.map((_, i) =>
      Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y),
    );
    expect(drawn[0]).toBeLessThan(drawn[2]);
    expect(drawn[2]).toBeLessThan(drawn[1]);
    const out = pts.filter((p) => p.x < 0 || p.x > 320 || p.y < 0 || p.y > 150);
    expect(out).toEqual([]);
  });

  it('keeps a short part readable and every length label inside the drawing', () => {
    const bad = [];
    for (const lengths of [
      [2, 9],
      [9, 2],
      [9, 2, 9],
      [2, 2, 9],
      [9, 2, 2],
      [9, 9, 9],
    ]) {
      const f = polylineFigure('ABCD'.slice(0, lengths.length + 1), lengths);
      const dots = f.dots ?? [];
      for (let i = 0; i + 1 < dots.length; i++) {
        if (Math.hypot(dots[i + 1].x - dots[i].x, dots[i + 1].y - dots[i].y) < 40) {
          bad.push([lengths, 'short', i]);
        }
      }
      for (const t of f.texts ?? []) {
        if (t.x < 20 || t.x > 300 || t.y < 14 || t.y > 148) bad.push([lengths, t]);
      }
    }
    expect(bad).toEqual([]);
  });

  it('names a polyline letter by letter', () => {
    const f = polylineFigure('MNP', [4, 7]);
    expect(f.segments).toEqual([
      ['M', 'N'],
      ['N', 'P'],
    ]);
    expect(f.texts?.map((t) => t.text)).toEqual(['4 cm', '7 cm']);
  });

  it('puts every other name below its dot and says the polyline in words', () => {
    const f = polylineFigure('ABC', [3, 5]);
    expect(f.dots?.map((d) => d.below)).toEqual([true, false, true]);
    expect(f.say).toBe('Đường gấp khúc ABC. Đoạn AB dài 3 cm, Đoạn BC dài 5 cm.');
  });

  it('bends a curve towards a point', () => {
    expect(arch({ x: 30, y: 20 }, { x: 75, y: 70 }, { x: 30, y: 120 })).toBe(
      'M 30 20 Q 75 70 30 120',
    );
  });

  it('moves a closed shape and reads a figure in words', () => {
    expect(shapeAt('hexagon', 10, 5)).toHaveLength(6);
    expect(shapeAt('triangle', 10, 5)[0]).toEqual({ x: 45, y: 9 });
    const words = figureText({
      w: 100,
      h: 70,
      dots: [
        { name: 'C', x: 32, y: 44 },
        { name: 'D', x: 68, y: 44 },
      ],
      lines: [['C', 'D']],
      curves: [{ d: arch({ x: 0, y: 0 }, { x: 5, y: 5 }, { x: 10, y: 0 }) }],
    });
    expect(words).toBe(
      'Các điểm C, D. đường thẳng đi qua C và D, kéo dài về hai phía; đường uốn cong.',
    );
  });
});
