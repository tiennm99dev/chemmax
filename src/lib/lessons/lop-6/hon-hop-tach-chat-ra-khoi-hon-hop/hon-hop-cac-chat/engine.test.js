import { describe, expect, it } from 'vitest';
import { SUBSTANCES, dissolve, observe, substanceById } from './engine.js';

describe('dissolving in 100 g of water', () => {
  it('dissolves salt up to its limit and leaves the rest', () => {
    expect(dissolve('muoi', 30, 'lanh')).toEqual({ dissolved: 30, excess: 0 });
    expect(dissolve('muoi', 50, 'lanh')).toEqual({ dissolved: 36, excess: 14 });
    expect(dissolve('muoi', 50, 'nong')).toEqual({ dissolved: 38, excess: 12 });
  });

  it('dissolves more of a solid in hot water than in cold', () => {
    for (const s of SUBSTANCES.filter((x) => x.limit)) {
      const cold = dissolve(s.id, s.max, 'lanh').dissolved;
      const hot = dissolve(s.id, s.max, 'nong').dissolved;
      expect(hot).toBeGreaterThan(cold);
    }
  });

  it('mixes vinegar completely and dissolves no sand', () => {
    expect(dissolve('giam', 30, 'lanh')).toEqual({ dissolved: 30, excess: 0 });
    expect(dissolve('cat', 20, 'nong')).toEqual({ dissolved: 0, excess: 20 });
  });

  it('rejects an unknown substance', () => {
    expect(() => substanceById('vang')).toThrow();
  });
});

describe('what the cup shows', () => {
  it('gives a homogeneous solution once salt has dissolved', () => {
    const o = observe('muoi', 20, 'lanh', 'khuay');
    expect(o.kind).toBe('dung-dich');
    expect(o.homogeneous).toBe(true);
  });

  it('keeps undissolved salt at the bottom, not a suspension', () => {
    const o = observe('muoi', 50, 'lanh', 'khuay');
    expect(o.kind).toBe('dung-dich-du');
    expect(o.text).toContain('14 g');
    expect(observe('muoi', 50, 'nong', 'khuay').text).toContain('12 g');
  });

  it('turns chalk into a suspension that settles on standing', () => {
    expect(observe('phan', 10, 'lanh', 'khuay').kind).toBe('huyen-phu');
    expect(observe('phan', 10, 'lanh', 'de-yen').kind).toBe('lang');
  });

  it('turns oil into an emulsion that separates on standing', () => {
    expect(observe('dau', 10, 'lanh', 'them').kind).toBe('tach-lop');
    expect(observe('dau', 10, 'lanh', 'khuay').kind).toBe('nhu-tuong');
    expect(observe('dau', 10, 'lanh', 'de-yen').kind).toBe('tach-lop');
  });

  it('lets sand settle at once and vinegar form a solution', () => {
    expect(observe('cat', 10, 'lanh', 'khuay').kind).toBe('lang');
    expect(observe('giam', 10, 'lanh', 'them').kind).toBe('dung-dich');
  });

  it('calls only solutions homogeneous', () => {
    for (const s of SUBSTANCES) {
      for (const phase of /** @type {const} */ (['them', 'khuay', 'de-yen'])) {
        const o = observe(s.id, s.step, 'lanh', phase);
        expect(o.homogeneous).toBe(o.kind === 'dung-dich');
      }
    }
  });

  it('shows plain water when nothing is added', () => {
    expect(observe('dau', 0, 'lanh', 'khuay').homogeneous).toBeNull();
  });
});
