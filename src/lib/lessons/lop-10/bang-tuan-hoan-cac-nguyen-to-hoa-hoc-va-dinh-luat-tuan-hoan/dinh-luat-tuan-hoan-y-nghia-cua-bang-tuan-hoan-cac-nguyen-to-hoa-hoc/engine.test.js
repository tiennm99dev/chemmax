import { describe, expect, it } from 'vitest';
import { element, groupLabel, outerElectrons } from '#lib/domain/elements.js';
import { COMPOUNDS, roman } from '../_shared/compounds.js';
import { DECK, card, outerText, score } from './engine.js';

describe('outer configuration', () => {
  it('writes ns and np electrons', () => {
    expect(outerText(3, 1)).toBe('3s¹');
    expect(outerText(3, 6)).toBe('3s²3p⁴');
  });
});

describe('cards', () => {
  it('covers every element with highest compounds once', () => {
    expect([...DECK].sort((a, b) => a - b)).toEqual(COMPOUNDS.map((c) => c.z));
  });

  it('builds four questions with distinct options and the right answer inside', () => {
    const bad = [];
    for (const z of DECK) {
      const c = card(z);
      const el = /** @type {import('#lib/domain/elements.js').Element} */ (element(z));
      if (c.period !== el.period || `${roman(c.group)}A` !== groupLabel(el)) {
        bad.push(`${z} position`);
      }
      if (c.group !== outerElectrons(z)) bad.push(`${z} group`);
      for (const q of c.questions) {
        if (new Set(q.options).size !== q.options.length || q.answer < 0 || q.options.length < 3) {
          bad.push(`${z} ${q.id}`);
        }
        if (q.options.some((o) => /1p|0s/.test(o))) bad.push(`${z} ${q.id} impossible subshell`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('knows the answers for chlorine', () => {
    const cl = card(17);
    const right = Object.fromEntries(cl.questions.map((q) => [q.id, q.options[q.answer]]));
    expect(right).toEqual({
      config: '3s²3p⁵',
      kind: 'Phi kim',
      oxide: 'R2O7',
      nature: 'acid',
    });
    const all = Object.fromEntries(cl.questions.map((q) => [q.id, q.answer]));
    expect(score(cl, all)).toBe(4);
    expect(score(cl, {})).toBe(0);
  });
});
