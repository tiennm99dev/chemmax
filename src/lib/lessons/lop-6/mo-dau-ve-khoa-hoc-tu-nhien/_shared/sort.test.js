import { describe, expect, it } from 'vitest';
import { clearWrong, moveFeedback, place, tally } from './sort.js';

const bins = [
  { id: 'a', label: 'nhóm A' },
  { id: 'b', label: 'nhóm B' },
];
const cards = [
  { id: '1', text: 'Một', bin: 'a', why: 'Vì một.' },
  { id: '2', text: 'Hai', bin: 'b', why: 'Vì hai.' },
  { id: '3', text: 'Ba', bin: 'a', why: 'Vì ba.' },
];

describe('sorting cards into bins', () => {
  it('counts right, wrong and unplaced cards', () => {
    expect(tally(cards, {})).toEqual({ right: 0, wrong: 0, left: 3, done: false });
    const placed = place(place({}, '1', 'a'), '2', 'a');
    expect(tally(cards, placed)).toEqual({ right: 1, wrong: 1, left: 1, done: false });
    expect(tally(cards, { 1: 'a', 2: 'b', 3: 'a' }).done).toBe(true);
  });

  it('does not change the placements it is given', () => {
    const before = { 1: 'a' };
    place(before, '2', 'b');
    expect(before).toEqual({ 1: 'a' });
  });

  it('takes back only the wrong cards', () => {
    expect(clearWrong(cards, { 1: 'a', 2: 'a', 3: 'b' })).toEqual({ 1: 'a' });
  });

  it('names the bin in its feedback', () => {
    expect(moveFeedback(cards[0], 'a', bins)).toMatch(/^Đúng: "Một" thuộc nhóm A/);
    expect(moveFeedback(cards[0], 'b', bins)).toMatch(/^Chưa đúng: .*nhóm B.*Vì một/);
  });
});
