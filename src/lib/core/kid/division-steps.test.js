// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { describe, expect, it } from 'vitest';
import { GROUP } from '#lib/core/number-format.js';
import {
  placeOf,
  quotientText,
  roundLines,
  sheetRows,
  stageMessage,
  stepsOf,
  wrongMessage,
} from './division-steps.js';

/** @param {import('./division-steps.js').Row[]} rows */
const shown = (rows) => rows.map((r) => r.cells.join('|'));

describe('dividing in columns', () => {
  const task = { n: 1276, d: 4 };

  it('asks for a digit and a rest in each round and brings digits down between', () => {
    const steps = stepsOf(task);
    expect(steps.map((s) => s.kind).join(' ')).toBe('digit rest down digit rest down digit rest');
    expect(steps.map((s) => s.answer)).toEqual([3, 0, 7, 1, 3, 6, 9, 0]);
    expect(quotientText(task, steps.length)).toBe('319');
    expect(placeOf(task, 0)).toBe('nghìn');
  });

  it('starts from two digits when the first is too small and ends with a check', () => {
    expect(stageMessage(task, 0)).toBe('1 bé hơn 4, nên em lấy 12 để chia. 12 chia 4 được mấy?');
    expect(stageMessage(task, stepsOf(task).length).replaceAll(GROUP, ' ')).toBe(
      '9 nhân 4 bằng 36; 36 trừ 36 bằng 0. Vậy 1 276 : 4 = 319. Thử lại: 319 × 4 = 1 276.',
    );
  });

  it('reads what a digit brought down makes only when something was left', () => {
    const exact = { n: 396, d: 3 };
    expect(stageMessage(exact, 3)).toBe('Hạ 9. 9 chia 3 được mấy?');
    expect(stageMessage(task, 6)).toBe('Hạ 6, được 36. 36 chia 4 được mấy?');
    expect(wrongMessage(exact, 2, 1, 2)).toBe('Em xem nhé: Hạ 9.');
  });

  it('guides a wrong number', () => {
    expect(wrongMessage(task, 0, 4, 1)).toBe('4 nhân 4 bằng 16, lớn hơn 12. Em thử số bé hơn.');
    expect(wrongMessage(task, 0, 2, 1)).toBe(
      '2 nhân 4 bằng 8, vẫn chia được nữa. Em thử số lớn hơn.',
    );
    expect(wrongMessage(task, 1, 3, 1)).toBe('Chưa đúng. Em trừ lại: 12 − 12.');
  });

  it('sets the rounds out in the dividend’s columns and reads each by its place', () => {
    expect(shown(sheetRows(task, stepsOf(task).length))).toEqual([
      '1|2|7|6',
      '1|2||',
      '|0|7|',
      '||4|',
      '||3|6',
      '||3|6',
      '|||0',
    ]);
    expect(sheetRows(task, 0)[0].active).toEqual([0, 1]);
    expect(sheetRows(task, 3)[2].fly).toBe(2);
    expect(roundLines(task, stepsOf(task).length)).toEqual([
      '12 trăm : 4 = 3 trăm',
      '7 chục : 4 = 1 chục, còn 3 chục',
      '36 đơn vị : 4 = 9 đơn vị',
    ]);
  });
});
