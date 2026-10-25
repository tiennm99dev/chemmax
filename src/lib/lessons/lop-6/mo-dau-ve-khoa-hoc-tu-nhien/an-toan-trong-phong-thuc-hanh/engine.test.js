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

  it('describes the prohibition sign as a red-bordered circle', () => {
    expect(SIGN_KINDS.cam.look).toMatch(/hình tròn.*viền đỏ/);
    expect(SIGN_KINDS['nguy-hiem'].look).toMatch(/tam giác.*nền vàng/);
  });

  it('names the right kind when the learner is wrong', () => {
    const fire = SIGNS[0];
    expect(judgeSign(fire, 'cam').ok).toBe(true);
    const wrong = judgeSign(fire, 'chi-dan');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('biển báo cấm');
    expect(wrong.text).toContain(fire.meaning);
  });
});
