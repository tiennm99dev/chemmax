import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import { METHODS, SOURCES, verdict } from './engine.js';

describe('extraction methods', () => {
  it('writes only balanced equations', () => {
    const bad = SOURCES.flatMap((s) =>
      Object.values(s.ways)
        .map((w) => w?.equation ?? '')
        .filter((eq) => !isBalancedText(eq)),
    );
    expect(bad).toEqual([]);
  });

  it('keeps molten electrolysis for the metals from K to Al only', () => {
    const molten = SOURCES.filter((s) => verdict(s.id, 'dpnc').ok).map((s) => s.id);
    expect(molten).toEqual(['K', 'Na', 'Ca', 'Mg', 'Al']);
  });

  it('never accepts reduction by carbon or a solution method for an active metal', () => {
    const wrong = SOURCES.filter((s) => s.activity === 'strong').flatMap((s) =>
      METHODS.filter((m) => m.id !== 'dpnc' && verdict(s.id, m.id).ok).map(
        (m) => `${s.id}/${m.id}`,
      ),
    );
    expect(wrong).toEqual([]);
  });

  it('lists the main method among the ways of each metal', () => {
    const missing = SOURCES.filter((s) => !s.ways[s.main]).map((s) => s.id);
    expect(missing).toEqual([]);
    expect(verdict('Cu', 'thuy').text).toContain('nhiệt luyện');
  });
});
