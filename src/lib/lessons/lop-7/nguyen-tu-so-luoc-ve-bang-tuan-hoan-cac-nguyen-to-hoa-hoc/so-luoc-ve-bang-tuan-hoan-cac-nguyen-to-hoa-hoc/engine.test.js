import { describe, expect, it } from 'vitest';
import { ELEMENTS } from '#lib/domain/elements.js';
import { CHALLENGES, HIGHLIGHTS, checkPick, explainPlace, placeOf } from './engine.js';

describe('placeOf', () => {
  it('links the period to the shells and an A group to the outer electrons', () => {
    for (let z = 1; z <= 20; z++) {
      const p = placeOf(z);
      expect(p.shells.length, `Z = ${z}`).toBe(p.period);
      expect(p.groupA, `Z = ${z}`).toBe(true);
      if (z !== 2)
        expect(p.group, `Z = ${z}`).toBe(
          `${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][p.outer - 1]}A`,
        );
    }
  });

  it('classes the elements as the lesson does', () => {
    expect(placeOf(11).kind).toBe('kim-loai');
    expect(placeOf(16).kind).toBe('phi-kim');
    expect(placeOf(1).kind).toBe('phi-kim');
    expect(placeOf(18).kind).toBe('khi-hiem');
    expect(placeOf(26)).toMatchObject({
      period: 4,
      group: 'VIIIB',
      groupA: false,
      kind: 'kim-loai',
    });
  });
});

describe('explainPlace', () => {
  it('gives the shells for the first 20 and the outer electrons for an A group', () => {
    const mg = explainPlace(12).join(' ');
    expect(mg).toMatch(/Chu kì 3/);
    expect(mg).toMatch(/2, 8, 2/);
    expect(mg).toMatch(/Nhóm IIA: lớp ngoài cùng có 2 electron/);
    expect(explainPlace(2).join(' ')).toMatch(/helium/);
    expect(explainPlace(29).join(' ')).toMatch(/nhóm B/);
  });
});

describe('highlights', () => {
  it('counts 7 periods, 8 A groups and 7 noble gases', () => {
    const count = (/** @type {string} */ v) => {
      const h = HIGHLIGHTS.find((x) => x.value === v);
      return ELEMENTS.filter((el) => h?.test?.(el)).length;
    };
    expect(HIGHLIGHTS.filter((h) => /^p\d$/.test(h.value))).toHaveLength(7);
    expect(HIGHLIGHTS.filter((h) => /^g.*A$/.test(h.value))).toHaveLength(8);
    expect(count('p2')).toBe(8);
    expect(count('p3')).toBe(8);
    expect(count('p4')).toBe(18);
    expect(count('khi-hiem')).toBe(7);
    expect(count('gVIIIA')).toBe(7);
    expect(count('kim-loai')).toBeGreaterThan(90);
    expect(count('phi-kim')).toBeLessThan(20);
  });
});

describe('challenges', () => {
  it('accept their own answer and explain a wrong pick', () => {
    for (const c of CHALLENGES) expect(checkPick(c, c.answer).ok, c.task).toBe(true);
    const wrong = checkPick(CHALLENGES[0], 11);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toMatch(/sodium/);
    expect(wrong.text).toMatch(/nhóm IA/);
  });

  it('describe their answers correctly', () => {
    for (const c of CHALLENGES) {
      const p = placeOf(c.answer);
      const period = c.task.match(/chu kì (\d)/);
      if (period) expect(p.period, c.task).toBe(Number(period[1]));
      const group = c.task.match(/nhóm ([IV]+A)/);
      if (group) expect(p.group, c.task).toBe(group[1]);
      const shells = c.task.match(/(\d) lớp electron, lớp ngoài cùng có (\d) electron/);
      if (shells) {
        expect(p.shells.length, c.task).toBe(Number(shells[1]));
        expect(p.outer, c.task).toBe(Number(shells[2]));
      }
      if (/khí hiếm/.test(c.task)) expect(p.kind).toBe('khi-hiem');
      if (/phi kim/.test(c.task)) expect(p.kind).toBe('phi-kim');
      if (/kim loại/.test(c.task)) expect(p.kind).toBe('kim-loai');
    }
  });
});
