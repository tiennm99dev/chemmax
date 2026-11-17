import { describe, expect, it } from 'vitest';
import { frameProblems } from './frame-check.js';
import { askFeedback, askOrder } from './player.js';
import { arrowPath, bondLines, endPoint, labelSpans, sceneText } from './scene.js';

/** @type {import('./scene.js').Scene} */
const SCENE = {
  atoms: [
    { id: 'C', x: 100, y: 100, label: 'CH3' },
    { id: 'Br', x: 160, y: 100, label: 'Br', charge: 'δ-' },
    { id: 'r', x: 40, y: 100, label: '' },
  ],
  bonds: [
    { a: 'C', b: 'Br' },
    { a: 'r', b: 'C', order: 2 },
  ],
  arrows: [{ from: 'C~Br', to: 'Br' }],
};

describe('mechanism scene', () => {
  it('resolves arrow ends to atoms, bond midpoints and points', () => {
    expect(endPoint(SCENE, 'C~Br')).toEqual({ x: 130, y: 100, atom: false });
    expect(endPoint(SCENE, 'Br').atom).toBe(true);
    expect(endPoint(SCENE, 'r').atom).toBe(false);
    expect(endPoint(SCENE, { x: 1, y: 2 })).toEqual({ x: 1, y: 2, atom: false });
    expect(() => endPoint(SCENE, 'Cl')).toThrow();
  });

  it('bends an arrow to the left of its travel and stops short of a label', () => {
    const path = arrowPath(SCENE, { from: 'C~Br', to: 'Br' });
    expect(path.startsWith('M 130 100 Q 145 72')).toBe(true);
    const end = path.split(' ').slice(-2).map(Number);
    expect(Math.hypot(end[0] - 160, end[1] - 100)).toBeCloseTo(13, 1);
  });

  it('draws a double bond as two parallel strokes', () => {
    const lines = bondLines(SCENE, { a: 'r', b: 'C', order: 2 });
    expect(lines).toHaveLength(2);
    expect(lines[0].y1).not.toBe(lines[1].y1);
    expect(lines[0].x1).toBe(40);
  });

  it('lowers subscripts and raises the text after them', () => {
    expect(labelSpans('(CH3)3C')).toEqual([
      { text: '(CH', small: false, dy: 0 },
      { text: '3', small: true, dy: 4 },
      { text: ')', small: false, dy: -4 },
      { text: '3', small: true, dy: 4 },
      { text: 'C', small: false, dy: -4 },
    ]);
    expect(labelSpans('')).toEqual([]);
  });

  it('reads the scene aloud', () => {
    expect(sceneText(SCENE)).toContain('CH₃–Br liên kết bậc 1');
    expect(sceneText(SCENE)).toContain('Br (δ−)');
  });

  it('checks frames and predictions', () => {
    const ask = { prompt: 'p', options: ['a', 'b'], answer: 1, hint: 'h', why: 'w' };
    expect(frameProblems([{ scene: SCENE, caption: 'c', ask }])).toEqual([]);
    expect(
      frameProblems([{ scene: SCENE, caption: 'c', ask: { ...ask, answer: 2 } }]),
    ).toHaveLength(1);
    expect(askFeedback(ask, 1).tone).toBe('ok');
    expect(askFeedback(ask, 0).text).toContain('h');
  });
});

describe('prediction order', () => {
  it('shows every option once, in a stable seeded order', () => {
    const ask = {
      prompt: 'Liên kết đứt theo kiểu nào?',
      options: ['Đồng li', 'Dị li', 'Không đứt'],
      answer: 0,
      hint: 'h',
      why: 'w',
    };
    const order = askOrder(ask);
    expect([...order].sort()).toEqual([0, 1, 2]);
    expect(askOrder(ask)).toEqual(order);
  });
});
