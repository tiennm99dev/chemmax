import { describe, expect, it } from 'vitest';
import {
  MAX_MINUTES,
  MIXTURES,
  SOLVENTS,
  bandPosition,
  elutedShare,
  heat,
  isFinished,
  purity,
  runSummary,
  startStill,
  stillNote,
  switchReceiver,
  tubeContents,
} from './engine.js';

const [WEAK, MEDIUM, STRONG] = SOLVENTS;

describe('column chromatography', () => {
  it('moves the less adsorbed pigment faster in every solvent', () => {
    const wrong = SOLVENTS.filter((s) => !(s.shares[0] > s.shares[1] && s.shares[1] > s.shares[2]));
    expect(wrong).toEqual([]);
    expect(bandPosition(MEDIUM.shares[0], 10)).toBeGreaterThan(bandPosition(MEDIUM.shares[2], 10));
  });

  it('never loses or creates a pigment across the tubes', () => {
    /** @type {string[]} */
    const wrong = [];
    for (const s of SOLVENTS) {
      for (const minutes of [10, 45, 95, MAX_MINUTES]) {
        const tubes = tubeContents(s, minutes);
        s.shares.forEach((share, i) => {
          const total = tubes.reduce((sum, tube) => sum + tube[i], 0);
          if (Math.abs(total - elutedShare(share, minutes)) > 1e-9)
            wrong.push(`${s.id} ${minutes}`);
        });
      }
    }
    expect(wrong).toEqual([]);
  });

  it('collects nothing before the first band reaches the bottom', () => {
    expect(
      tubeContents(MEDIUM, 10)
        .flat()
        .every((a) => a === 0),
    ).toBe(true);
  });

  it('separates all three pigments only with the medium solvent', () => {
    expect(runSummary(WEAK)).toEqual({ stuck: [1, 2], mixed: false });
    expect(runSummary(MEDIUM)).toEqual({ stuck: [], mixed: false });
    expect(runSummary(STRONG)).toEqual({ stuck: [], mixed: true });
  });
});

/**
 * Runs a still to the end, switching receivers at a given minute.
 * @param {import('./engine.js').Mixture} mix
 * @param {number} at
 */
function run(mix, at) {
  let s = startStill();
  for (let i = 0; i < 60 && !isFinished(s); i++) {
    if (s.minute === at) s = switchReceiver(s);
    s = heat(s, mix);
  }
  return s;
}

describe('distillation', () => {
  it('holds the temperature while each liquid boils off', () => {
    const mix = MIXTURES[0];
    const { history } = run(mix, 99);
    expect(history.filter((t) => t === mix.firstBoil).length).toBeGreaterThan(4);
    expect(history.filter((t) => t === mix.secondBoil).length).toBeGreaterThan(4);
    expect(history.every((t, i) => i === 0 || t >= history[i - 1])).toBe(true);
  });

  it('keeps both volumes through the run', () => {
    const s = run(MIXTURES[2], 99);
    expect(s.receivers[0]).toEqual({ first: 10, second: 10 });
    expect(purity(s.receivers[0])).toBe(50);
    expect(purity(s.receivers[1])).toBeNull();
  });

  it('gives two pure receivers when switched in the gap, for every mixture', () => {
    /** @type {string[]} */
    const wrong = [];
    for (const mix of MIXTURES) {
      let s = startStill();
      while (s.first > 0) s = heat(s, mix);
      s = heat(switchReceiver(s), mix);
      while (!isFinished(s)) s = heat(s, mix);
      if (purity(s.receivers[0]) !== 100 || purity(s.receivers[1]) !== 0) wrong.push(mix.id);
      if (stillNote(s, mix).tone !== 'ok') wrong.push(`${mix.id} note`);
    }
    expect(wrong).toEqual([]);
  });

  it('warns about a late switch', () => {
    const mix = MIXTURES[0];
    const s = run(mix, 99);
    expect(stillNote(s, mix).tone).toBe('warn');
  });

  it('warns about an early switch while the first liquid still flows', () => {
    const mix = MIXTURES[0];
    let s = startStill();
    while (s.temperature < mix.firstBoil) s = heat(s, mix);
    s = heat(switchReceiver(s), mix);
    expect(s.receivers[1].first).toBeGreaterThan(0);
    expect(stillNote(s, mix).tone).toBe('warn');
  });
});
