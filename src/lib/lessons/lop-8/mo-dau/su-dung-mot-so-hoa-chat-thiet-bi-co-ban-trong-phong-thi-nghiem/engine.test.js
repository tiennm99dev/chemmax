import { describe, expect, it } from 'vitest';
import {
  GROUPS,
  ITEMS,
  SHELVES,
  TASKS,
  firstTryScore,
  itemById,
  judgeTask,
  shelfGroups,
} from './engine.js';

describe('lab shelf items', () => {
  it('uses unique ids and known shelves and groups', () => {
    expect(new Set(ITEMS.map((i) => i.id)).size).toBe(ITEMS.length);
    for (const it of ITEMS) {
      expect(SHELVES[it.shelf], it.id).toBeDefined();
      expect(GROUPS[it.group], it.id).toBeDefined();
      for (const field of [it.name, it.use, it.howTo, it.careful]) {
        expect(field.trim().length, it.id).toBeGreaterThan(0);
      }
    }
  });

  it('puts the four electrical groups of the book on the electrical shelf', () => {
    const groups = shelfGroups('thiet-bi-dien').map((g) => g.group);
    expect(groups).toEqual(['nguon', 'do-dien', 'su-dung-dien', 'ho-tro']);
    const count = shelfGroups('dung-cu').reduce((n, g) => n + g.items.length, 0);
    expect(count + shelfGroups('thiet-bi-dien').reduce((n, g) => n + g.items.length, 0)).toBe(
      ITEMS.length,
    );
  });

  it('states the book rules on the test-tube clamp and the alcohol lamp', () => {
    expect(itemById('kep-ong-nghiem')?.howTo).toMatch(/1\/3 ống nghiệm tính từ miệng/);
    expect(itemById('den-con')?.howTo).toMatch(/2\/3 ngọn lửa/);
    expect(itemById('den-con')?.careful).toMatch(/đậy nắp/);
    expect(itemById('ampe-ke')?.howTo).toMatch(/nối tiếp/);
    expect(itemById('von-ke')?.howTo).toMatch(/song song/);
  });
});

describe('challenge tasks', () => {
  it('points every task at an existing item, each task id once', () => {
    expect(new Set(TASKS.map((t) => t.id)).size).toBe(TASKS.length);
    for (const t of TASKS) expect(itemById(t.answer), t.id).toBeDefined();
  });

  it('accepts the right item and explains a wrong one', () => {
    const t = TASKS.find((x) => x.id === 'lay-1-ml');
    if (!t) throw new Error('missing task');
    expect(judgeTask(t, 'ong-hut')).toEqual({
      ok: true,
      text: 'Đúng: Ống hút nhỏ giọt, vì lấy lượng nhỏ chất lỏng thì dùng ống hút nhỏ giọt.',
    });
    const wrong = judgeTask(t, 'ong-dong');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toMatch(/^Chưa đúng: Ống đong dùng để đong một thể tích/);
    expect(judgeTask(t, 'khong-co')).toEqual({ ok: false, text: '' });
  });

  it('explains a near miss instead of calling its use wrong', () => {
    const t = TASKS.find((x) => x.id === 'do-cuong-do');
    if (!t) throw new Error('missing task');
    const near = judgeTask(t, 'joulemeter');
    expect(near.ok).toBe(false);
    expect(near.text).toMatch(
      /^Chưa đúng: joulemeter cũng hiện được dòng điện .* mắc nối tiếp với bóng đèn\. Hãy chọn lại\.$/,
    );
  });

  it('names only existing items in near-miss notes', () => {
    for (const t of TASKS) {
      for (const id of Object.keys(t.near ?? {})) {
        expect(itemById(id), `${t.id} ${id}`).toBeDefined();
        expect(id, t.id).not.toBe(t.answer);
      }
    }
  });

  it('scores only first picks that were right', () => {
    expect(firstTryScore({})).toBe(0);
    expect(
      firstTryScore({ 'lay-1-ml': 'ong-hut', 'lay-bot': 'panh', 'do-cuong-do': 'ampe-ke' }),
    ).toBe(2);
  });
});
