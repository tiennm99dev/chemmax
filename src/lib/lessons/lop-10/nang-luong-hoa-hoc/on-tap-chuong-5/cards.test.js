import { describe, expect, it } from 'vitest';
import { BINS, DIAGRAMS, asCard } from './cards.js';

describe('diagram sorting cards', () => {
  it('files each reaction by the sign of its enthalpy change', () => {
    const bad = DIAGRAMS.filter((d) => asCard(d).bin !== (d.dH < 0 ? 'toa' : 'thu'));
    expect(bad).toEqual([]);
  });

  it('keeps the feedback plain, since the sorter prints it as text', () => {
    const bad = DIAGRAMS.filter(
      (d) => asCard(d).why.includes('$') || asCard(d).label.includes('$'),
    );
    expect(bad).toEqual([]);
  });

  it('holds cards for both bins', () => {
    const bins = new Set(DIAGRAMS.map((d) => asCard(d).bin));
    expect([...bins].sort()).toEqual(BINS.map((b) => b.id).sort());
  });
});
