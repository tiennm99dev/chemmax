import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { OXIDES, classify, mixText, oxide } from './engine.js';

describe('oxides', () => {
  it('carry balanced sample equations', () => {
    for (const o of OXIDES) {
      for (const eq of Object.values(o.reactions)) {
        if (eq) expect(isBalancedText(eq), eq).toBe(true);
      }
    }
  });

  it('are classed by what they react with', () => {
    for (const o of OXIDES) expect(classify(o), o.formula).toBe(o.kind);
  });

  it('cover all four classes', () => {
    expect(new Set(OXIDES.map((o) => o.kind)).size).toBe(4);
  });
});

describe('mixText', () => {
  it('describes reactions and non-reactions', () => {
    expect(mixText(oxide('CaO'), 'water')).toBe(
      'CaO (calcium oxide) tác dụng với nước tạo dung dịch base.',
    );
    expect(mixText(oxide('SO3'), 'water')).toContain('tạo dung dịch acid');
    expect(mixText(oxide('CuO'), 'base')).toContain('không tác dụng với dung dịch NaOH');
    expect(mixText(oxide('ZnO'), 'base')).toContain('tạo muối và nước');
  });
});
