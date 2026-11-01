import { describe, expect, it } from 'vitest';
import { RIDDLES, candidates, clueText, judgeGuess, points } from './engine.js';

describe('riddles', () => {
  it('each has exactly its answer once every clue is open', () => {
    const bad = RIDDLES.filter((r) => {
      const left = candidates(r.clues);
      return left.length !== 1 || left[0] !== r.answer;
    }).map((r) => r.answer);
    expect(bad).toEqual([]);
  });

  it('needs more than the first clue', () => {
    const tooEasy = RIDDLES.filter((r) => candidates(r.clues.slice(0, 1)).length < 2).map(
      (r) => r.answer,
    );
    expect(tooEasy).toEqual([]);
  });

  it('writes every clue', () => {
    const blank = RIDDLES.flatMap((r) => r.clues).filter((c) => !clueText(c));
    expect(blank).toEqual([]);
    expect(clueText({ kind: 'oxide', value: 5 })).toBe(
      'Là nguyên tố nhóm A, oxide cao nhất có dạng R₂O₅.',
    );
  });

  it('judges oxide, hydroxide and outer-shell clues by the chemistry, not by the data table', () => {
    const [p, s, ca] = [15, 16, 20].map(
      (z) => /** @type {import('./engine.js').Riddle} */ (RIDDLES.find((r) => r.answer === z)),
    );
    // As2O5 is the highest oxide of arsenic and H2SeO4 is an acid: both fit, only the period rules them out.
    expect(candidates(p.clues.slice(0, 1))).toEqual([7, 15, 33]);
    expect(candidates(s.clues.slice(0, 2))).toEqual([16, 34]);
    expect(judgeGuess(s, 2, 34).text).toContain('Mở thêm');
    // Iron has two electrons in its outer shell (4s2); only the block clue rules it out.
    expect(judgeGuess(ca, 2, 26).text).toContain('Mở thêm');
    expect(judgeGuess(ca, 3, 26).text).toContain('nguyên tố s');
  });

  it('coaches a wrong guess and scores by clues used', () => {
    const al = /** @type {import('./engine.js').Riddle} */ (RIDDLES[0]);
    expect(judgeGuess(al, 2, 13).ok).toBe(true);
    expect(judgeGuess(al, 1, 12).text).toContain('Mở thêm');
    expect(judgeGuess(al, 2, 5).text).toContain('chưa khớp');
    expect(points(al, 1)).toBe(2);
    expect(points(al, 2)).toBe(1);
  });
});
