// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import { describe, expect, it } from 'vitest';
import {
  askFor,
  carriesOf,
  columnWords,
  divWords,
  noCarry,
  planOf,
  sheetAt,
  stepsOf,
  wrongFor,
} from './column-steps.js';

/** @param {string} text */
const plain = (text) => text.replace(/\u202f/g, ' ');

describe('column calculations of any length', () => {
  it('reads additions, subtractions and multiplications the book way', () => {
    expect(plain(columnWords(45637, 28485, '+'))).toBe(
      '7 cộng 5 bằng 12, viết 2, nhớ 1. 3 cộng 8 bằng 11, thêm 1 bằng 12, viết 2, nhớ 1. 6 cộng 4 bằng 10, thêm 1 bằng 11, viết 1, nhớ 1. 5 cộng 8 bằng 13, thêm 1 bằng 14, viết 4, nhớ 1. 4 cộng 2 bằng 6, thêm 1 bằng 7, viết 7. Vậy 45 637 + 28 485 = 74 122.',
    );
    expect(stepsOf(6378, 2549, '-')[0].say).toBe(
      '8 không trừ được 9, lấy 18 trừ 9 bằng 9, viết 9, nhớ 1',
    );
    expect(stepsOf(1427, 3, '×').at(-1)?.digit).toBe(4);
    expect(carriesOf(367859, 541728, '+')).toBe(3);
    expect(noCarry(31504, 3, '×')).toBe(93502);
  });

  it('leaves a leading zero of a difference unwritten', () => {
    const last = stepsOf(1000, 999, '-').at(-1);
    expect(last?.blank).toBe(true);
    expect(planOf(1000, 999, '-').filter((a) => a.type === 'digit').length).toBe(1);
  });

  it('fills a board of at least the given columns', () => {
    expect(sheetAt(23285, 12967, '-', 0, 5).written.length).toBe(6);
    expect(sheetAt(12, 3, '×', 0, 5).written.length).toBe(5);
    const sheet = sheetAt(31504, 3, '×', 1, 5);
    expect(sheet.written[0]).toBe('2');
    expect(sheet.carries[1]).toBe(1);
  });

  it('asks and nudges column by column', () => {
    const steps = stepsOf(31504, 3, '×');
    expect(askFor({ type: 'digit', step: steps[1] }, '×')).toBe(
      'Hàng chục: 3 nhân 0, rồi thêm 1 đã nhớ. Em viết chữ số nào?',
    );
    expect(wrongFor(steps[1], '×', 0, 1)).toBe('Em quên thêm 1 đã nhớ rồi.');
  });

  it('reads a division and drops "được" for a one-digit part', () => {
    expect(plain(divWords(1276, 4))).toBe(
      '12 chia 4 được 3, viết 3; 3 nhân 4 bằng 12; 12 trừ 12 bằng 0. Hạ 7. 7 chia 4 được 1, viết 1; 1 nhân 4 bằng 4; 7 trừ 4 bằng 3. Hạ 6, được 36. 36 chia 4 được 9, viết 9; 9 nhân 4 bằng 36; 36 trừ 36 bằng 0. Vậy 1 276 : 4 = 319.',
    );
  });
});
