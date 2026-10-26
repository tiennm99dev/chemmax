import { describe, expect, it } from 'vitest';
import {
  METHODS,
  MIXTURES,
  TAP_TOLERANCE,
  WATER_SHARE,
  judge,
  judgeTap,
  mixtureById,
} from './engine.js';

describe('choosing a separation method', () => {
  it('accepts filtering for sand in water, evaporating for sea water and the funnel for oil', () => {
    expect(judge('nuoc-cat', 0, 'loc').ok).toBe(true);
    expect(judge('nuoc-bien', 0, 'co-can').ok).toBe(true);
    expect(judge('dau-nuoc', 0, 'chiet').ok).toBe(true);
    expect(judge('phan-nuoc', 0, 'loc').ok).toBe(true);
  });

  it('separates salt from sand by dissolving, filtering, then evaporating', () => {
    expect(mixtureById('muoi-cat').steps.map((s) => s.method)).toEqual([
      'hoa-tan',
      'loc',
      'co-can',
    ]);
    expect(judge('muoi-cat', 0, 'hoa-tan')).toMatchObject({ ok: true, done: false });
    expect(judge('muoi-cat', 2, 'co-can')).toMatchObject({ ok: true, done: true });
    expect(judge('muoi-cat', 0, 'loc').ok).toBe(false);
  });

  it('explains every wrong choice with its own reason', () => {
    for (const m of MIXTURES) {
      m.steps.forEach((step, i) => {
        for (const method of METHODS) {
          const r = judge(m.id, i, method.id);
          expect(r.ok).toBe(method.id === step.method);
          if (!r.ok) {
            expect(r.message).not.toBe('Cách này không phù hợp.');
            expect(r.done).toBe(false);
          }
        }
      });
    }
  });

  it('says salt passes through filter paper', () => {
    expect(judge('nuoc-bien', 0, 'loc').message).toContain('giấy lọc');
  });

  it('rejects unknown mixtures and steps', () => {
    expect(() => mixtureById('xang')).toThrow();
    expect(() => judge('nuoc-cat', 1, 'loc')).toThrow();
  });
});

describe('closing the tap of the separating funnel', () => {
  it('passes when closed at the boundary between the layers', () => {
    expect(judgeTap(WATER_SHARE).ok).toBe(true);
    expect(judgeTap(WATER_SHARE + TAP_TOLERANCE / 2).ok).toBe(true);
    expect(judgeTap(WATER_SHARE - TAP_TOLERANCE / 2).ok).toBe(true);
  });

  it('tells apart closing too early and too late', () => {
    expect(judgeTap(0.3).message).toContain('sớm');
    expect(judgeTap(0.9).message).toContain('muộn');
  });
});
