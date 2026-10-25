import { describe, expect, it } from 'vitest';
import { KIND_ORDER, SCENARIOS, SIGNS, SIGN_KINDS, judgeAction, judgeSign } from './engine.js';

describe('lab safety situations', () => {
  it('gives every situation exactly one safe action', () => {
    for (const s of SCENARIOS) {
      expect(
        s.actions.filter((a) => a.safe),
        s.id,
      ).toHaveLength(1);
      expect(s.actions.length, s.id).toBeGreaterThanOrEqual(2);
    }
  });

  it('uses unique ids', () => {
    expect(new Set(SCENARIOS.map((s) => s.id)).size).toBe(SCENARIOS.length);
    expect(new Set(SIGNS.map((s) => s.id)).size).toBe(SIGNS.length);
  });

  it('judges the safe action as safe and explains why', () => {
    const s = SCENARIOS.find((x) => x.id === 'den-con');
    if (!s) throw new Error('missing scenario');
    const safe = s.actions.findIndex((a) => a.safe);
    expect(judgeAction(s, safe).ok).toBe(true);
    expect(judgeAction(s, safe).text).toMatch(/^An toàn: .*nắp/);
    expect(judgeAction(s, 0).ok).toBe(false);
    expect(judgeAction(s, 9)).toEqual({ ok: false, text: '' });
  });
});

describe('safety signs', () => {
  it('has signs of every kind and only known kinds', () => {
    for (const kind of KIND_ORDER) {
      expect(
        SIGNS.some((s) => s.kind === kind),
        kind,
      ).toBe(true);
    }
    for (const s of SIGNS) expect(SIGN_KINDS[s.kind], s.id).toBeDefined();
  });

  it('describes each family by the shape and colours the book gives', () => {
    expect(SIGN_KINDS.cam.look).toMatch(/hình tròn.*viền đỏ.*nền trắng/);
    expect(SIGN_KINDS['nguy-hiem'].look).toMatch(/tam giác đều.*nền vàng/);
    expect(SIGN_KINDS['hoa-chat'].look).toMatch(/hình vuông.*viền đen.*nền đỏ cam/);
    expect(SIGN_KINDS['chi-dan'].look).toMatch(/hình chữ nhật.*nền xanh/);
  });

  it('tells the same flame apart by the shape of its sign', () => {
    const flames = SIGNS.filter((s) => s.picture === 'lua').map((s) => s.kind);
    expect(new Set(flames)).toEqual(new Set(['cam', 'nguy-hiem', 'hoa-chat']));
  });

  it('names the right kind when the learner is wrong', () => {
    const fire = SIGNS[0];
    expect(judgeSign(fire, 'cam').ok).toBe(true);
    const wrong = judgeSign(fire, 'chi-dan');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('kí hiệu cảnh báo cấm');
    expect(wrong.text).toContain(fire.meaning);
  });
});
