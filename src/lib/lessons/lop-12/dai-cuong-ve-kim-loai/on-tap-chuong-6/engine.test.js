import { describe, expect, it } from 'vitest';
import { strictTexFailures } from '#lib/core/tex-check.js';
import {
  CORROSION_CASES,
  NONE,
  QUESTIONS,
  card,
  corrosionAnswer,
  corrosionCase,
} from './engine.js';

describe('corrosion cases', () => {
  it('names the metal with the lower E° as the corroded anode', () => {
    expect(corrosionAnswer(corrosionCase('ton')).answer).toBe('Zn');
    expect(corrosionAnswer(corrosionCase('sat-tay')).answer).toBe('Fe');
    expect(corrosionAnswer(corrosionCase('noi-day')).answer).toBe('Zn');
    expect(corrosionAnswer(corrosionCase('dinh-tan')).answer).toBe('Fe');
    expect(corrosionAnswer(corrosionCase('khoi-mg')).answer).toBe('Mg');
    expect(corrosionAnswer(corrosionCase('nhom-dong')).answer).toBe('Al');
  });

  it('finds no electrochemical corrosion when a condition is missing', () => {
    expect(corrosionAnswer(corrosionCase('rieng-re')).answer).toBe(NONE);
    expect(corrosionAnswer(corrosionCase('kho')).answer).toBe(NONE);
  });
});

describe('the quiz', () => {
  it('asks every corrosion case once and keeps the right answer among the options', () => {
    const ids = QUESTIONS.flatMap((q) => (q.kind === 'corrode' ? [q.id] : []));
    expect(ids.toSorted()).toEqual(CORROSION_CASES.map((c) => c.id).toSorted());
    const bad = QUESTIONS.filter((q) => {
      const c = card(q);
      return !c.options.some((o) => o.value === c.answer);
    });
    expect(bad).toEqual([]);
  });

  it('reads reactions by the α rule', () => {
    const answers = QUESTIONS.filter((q) => q.kind === 'react').map((q) => card(q).answer);
    // Fe/CuSO4, Cu/HCl, Cu/AgNO3, Na/CuSO4, Cu/FeSO4, Al/HCl, Ag/CuSO4, Zn/FeSO4
    expect(answers).toEqual(['yes', 'no', 'yes', 'yes', 'no', 'yes', 'no', 'yes']);
  });
});

describe('the quiz text', () => {
  it('writes TeX that renders in every prompt, explanation and note', () => {
    const texts = QUESTIONS.flatMap((q) => {
      const c = card(q);
      return [c.prompt, c.why, c.note ?? ''];
    });
    expect(strictTexFailures(texts)).toEqual([]);
  });
});
