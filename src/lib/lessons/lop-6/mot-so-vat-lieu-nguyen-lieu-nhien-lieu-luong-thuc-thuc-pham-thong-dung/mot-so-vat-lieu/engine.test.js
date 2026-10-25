import { describe, expect, it } from 'vitest';
import { MATERIALS, PROPERTIES, THINGS, misses, suitable, suits, verdict } from './engine.js';

describe('material table', () => {
  it('gives every material a value for every property', () => {
    for (const m of MATERIALS) {
      for (const p of PROPERTIES) expect(['yes', 'no', 'some']).toContain(m.values[p.id]);
      expect(Object.keys(m.values).sort()).toEqual(PROPERTIES.map((p) => p.id).sort());
    }
  });

  it('only asks objects for properties that exist', () => {
    const ids = PROPERTIES.map((p) => p.id);
    for (const t of THINGS) for (const pid of Object.keys(t.needs)) expect(ids).toContain(pid);
  });

  it('follows the textbook: metal conducts, rubber is elastic, glass and ceramic are brittle', () => {
    const v = Object.fromEntries(MATERIALS.map((m) => [m.id, m.values]));
    expect(MATERIALS.filter((m) => m.values.dien === 'yes').map((m) => m.id)).toEqual(['kim-loai']);
    expect(MATERIALS.filter((m) => m.values.danhoi === 'yes').map((m) => m.id)).toEqual(['cao-su']);
    expect(v['thuy-tinh'].gion).toBe('yes');
    expect(v.gom.gion).toBe('yes');
    expect(v.go.chay).toBe('yes');
  });
});

describe('choosing a material', () => {
  it('finds the materials the textbook uses for each object', () => {
    /** @type {Record<string, string[]>} */
    const expected = {
      'loi-day': ['kim-loai'],
      'vo-day': ['nhua', 'cao-su'],
      'than-noi': ['kim-loai'],
      'quai-noi': ['nhua', 'go'],
      'lop-xe': ['cao-su'],
      'gang-tay': ['cao-su'],
      'bat-an': ['thuy-tinh', 'gom'],
      'ong-nghiem': ['thuy-tinh'],
    };
    for (const t of THINGS) expect(suitable(t.id), t.id).toEqual(expected[t.id]);
  });

  it('leaves every object at least one material and at least one wrong choice', () => {
    for (const t of THINGS) {
      expect(suitable(t.id).length).toBeGreaterThan(0);
      expect(suitable(t.id).length).toBeLessThan(MATERIALS.length);
    }
  });

  it('names the property a wrong material lacks', () => {
    expect(suits('loi-day', 'nhua')).toBe(false);
    expect(misses('loi-day', 'nhua').map((m) => m.property.id)).toEqual(['dien']);
    expect(verdict('loi-day', 'nhua')).toMatch(/^Chưa phù hợp: cần dẫn điện tốt/);
    expect(verdict('ong-nghiem', 'nhua')).toContain('chỉ một số loại trong suốt');
  });

  it('mentions the other suitable materials when the choice is right', () => {
    expect(verdict('bat-an', 'gom')).toContain('Cũng có thể dùng: thuỷ tinh.');
    expect(verdict('lop-xe', 'cao-su')).not.toContain('Cũng có thể dùng');
  });
});
