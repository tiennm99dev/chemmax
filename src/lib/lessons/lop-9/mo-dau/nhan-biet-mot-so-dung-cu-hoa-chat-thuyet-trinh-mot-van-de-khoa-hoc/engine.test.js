import { describe, expect, it } from 'vitest';
import {
  CHEMICALS,
  CHEM_BINS,
  REPORT_PARTS,
  TOOLS,
  TOOL_GROUPS,
  TOPICS,
  firstTryScore,
  judgeNextPart,
  judgeTool,
  roundOptions,
  toolById,
  toolOrder,
} from './engine.js';

describe('tool picture game', () => {
  it('uses unique ids, known groups and plain-text descriptions', () => {
    expect(new Set(TOOLS.map((t) => t.id)).size).toBe(TOOLS.length);
    for (const t of TOOLS) {
      expect(TOOL_GROUPS[t.group], t.id).toBeDefined();
      for (const text of [t.name, t.use, t.careful]) {
        expect(text.trim().length, t.id).toBeGreaterThan(0);
        expect(text, t.id).not.toMatch(/\$/);
      }
    }
    const groups = new Set(TOOLS.map((t) => t.group));
    expect(groups.size).toBe(Object.keys(TOOL_GROUPS).length);
  });

  it('shows every tool once per round in a repeatable order', () => {
    const order = toolOrder(7);
    expect([...order].sort()).toEqual(TOOLS.map((t) => t.id).sort());
    expect(toolOrder(7)).toEqual(order);
  });

  it('offers four distinct names including the right one', () => {
    for (const t of TOOLS) {
      for (const seed of [1, 2, 3]) {
        const opts = roundOptions(t.id, seed);
        expect(opts).toHaveLength(4);
        expect(new Set(opts).size).toBe(4);
        expect(opts).toContain(t.id);
        for (const id of opts) expect(toolById(id)).toBeDefined();
      }
    }
    expect(roundOptions('khong-co', 1)).toEqual([]);
  });

  it('prefers look-alike distractors from the same group', () => {
    const opts = roundOptions('thau-kinh-hoi-tu', 5);
    const sameGroup = opts.filter((id) => toolById(id)?.group === 'quang');
    expect(sameGroup.length).toBe(3);
  });

  it('accepts the right name and explains a wrong one', () => {
    expect(judgeTool('dien-ke', 'dien-ke')).toEqual({
      ok: true,
      text: `Đúng: Điện kế. ${toolById('dien-ke')?.use}`,
    });
    const wrong = judgeTool('dien-ke', 'dong-ho-da-nang');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toMatch(/^Chưa đúng\. Đồng hồ đo điện đa năng: đo các đại lượng/);
    expect(judgeTool('dien-ke', 'khong-co')).toEqual({ ok: false, text: '' });
  });

  it('scores only right first picks', () => {
    expect(firstTryScore({})).toBe(0);
    expect(
      firstTryScore({ 'dien-ke': 'dien-ke', 'ong-dong': 'binh-cau', 'nam-cham': 'nam-cham' }),
    ).toBe(2);
  });
});

describe('chemical groups', () => {
  it('puts every chemical into a known bin and fills every bin', () => {
    const bins = new Set(CHEM_BINS.map((b) => b.id));
    expect(new Set(CHEMICALS.map((c) => c.id)).size).toBe(CHEMICALS.length);
    for (const c of CHEMICALS) expect(bins.has(c.bin), c.id).toBe(true);
    for (const b of CHEM_BINS) {
      expect(
        CHEMICALS.some((c) => c.bin === b.id),
        b.id,
      ).toBe(true);
    }
  });

  it('follows the book grouping', () => {
    /** @param {string} id */
    const bin = (id) => CHEMICALS.find((c) => c.id === id)?.bin;
    expect(bin('mno2')).toBe('oxide');
    expect(bin('h2so4')).toBe('acid');
    expect(bin('nh3')).toBe('base');
    expect(bin('c6h12o6')).toBe('huu-co');
    expect(bin('phenolphthalein')).toBe('chi-thi');
    expect(bin('i2')).toBe('phi-kim');
  });
});

describe('report outline', () => {
  it('lists the eight parts of a scientific report in order', () => {
    expect(REPORT_PARTS.map((p) => p.name)).toEqual([
      'Tiêu đề',
      'Tóm tắt',
      'Giới thiệu',
      'Phương pháp',
      'Kết quả',
      'Thảo luận',
      'Kết luận',
      'Tài liệu tham khảo',
    ]);
  });

  it('gives every sample topic a line for every part', () => {
    for (const t of TOPICS) {
      for (const p of REPORT_PARTS) {
        expect(t.parts[p.id]?.trim().length, `${t.id} ${p.id}`).toBeGreaterThan(0);
        expect(t.parts[p.id], `${t.id} ${p.id}`).not.toMatch(/\$/);
      }
    }
  });

  it('accepts the next part and explains a part out of place', () => {
    expect(judgeNextPart([], 'tieu-de').ok).toBe(true);
    expect(judgeNextPart(['tieu-de'], 'tom-tat').text).toMatch(/^Đúng: phần 2 là Tóm tắt\./);
    const wrong = judgeNextPart(['tieu-de', 'tom-tat'], 'ket-qua');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toMatch(/sau phần Tóm tắt\. Phần cần tìm: vấn đề nghiên cứu/);
    expect(judgeNextPart([], 'ket-luan').text).toMatch(/ở đầu báo cáo/);
    const all = REPORT_PARTS.map((p) => p.id);
    expect(judgeNextPart(all, 'tieu-de')).toEqual({ ok: false, text: '' });
  });
});
