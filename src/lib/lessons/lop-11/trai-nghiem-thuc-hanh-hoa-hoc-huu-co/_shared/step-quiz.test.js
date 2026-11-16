import { describe, expect, it } from 'vitest';
import { finished, pick, startQuiz, validSteps } from './step-quiz.js';

/** @type {import('./step-quiz.js').Step[]} */
const STEPS = [
  {
    title: 'Một',
    question: 'Chọn?',
    options: [
      { label: 'A', why: 'Sai vì A.' },
      { label: 'B', ok: true, why: 'B đúng.' },
    ],
    result: 'Xong bước một.',
  },
  {
    title: 'Hai',
    question: 'Chọn?',
    options: [
      { label: 'C', ok: true, why: 'C đúng.' },
      { label: 'D', why: 'Sai vì D.' },
    ],
    result: 'Xong bước hai.',
  },
];

describe('step quiz', () => {
  it('accepts a procedure with one right option per step', () => {
    expect(validSteps(STEPS)).toBe(true);
    expect(validSteps([{ ...STEPS[0], options: [STEPS[0].options[0]] }])).toBe(false);
  });

  it('explains and blocks a wrong pick, then moves on after the right one', () => {
    let q = startQuiz();
    q = pick(STEPS, q, 0);
    expect(q.index).toBe(0);
    expect(q.wrong).toEqual([0]);
    expect(q.tone).toBe('warn');
    expect(q.message).toContain('Sai vì A.');
    expect(pick(STEPS, q, 0)).toBe(q);
    q = pick(STEPS, q, 1);
    expect(q.index).toBe(1);
    expect(q.wrong).toEqual([]);
    expect(q.message).toContain('Xong bước một.');
    q = pick(STEPS, q, 0);
    expect(finished(STEPS, q)).toBe(true);
    expect(q.misses).toBe(1);
    expect(pick(STEPS, q, 0)).toBe(q);
  });
});
