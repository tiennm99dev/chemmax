import { describe, expect, it } from 'vitest';
import { REAGENTS, SUBSTANCES, observe } from './lab.js';

/** Every pair a lesson of the chapter puts on its bench. */
const BENCHES = [
  [
    ['methylamine', 'aniline'],
    ['quy', 'hcl', 'cuso4', 'bromine'],
  ],
  [
    ['albumin', 'gly-ala', 'gly-ala-gly'],
    ['heat', 'biuret', 'hno3'],
  ],
  [
    ['methylamine', 'aniline', 'glycine', 'gly-ala-gly'],
    ['quy', 'bromine', 'biuret'],
  ],
];

describe('the nitrogen compound bench', () => {
  it('has an observation for every pair a lesson offers', () => {
    const missing = [];
    for (const [subs, reagents] of BENCHES) {
      for (const s of subs) {
        for (const r of reagents) {
          try {
            observe(/** @type {any} */ (s), /** @type {any} */ (r));
          } catch {
            missing.push(`${s}:${r}`);
          }
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it('knows every substance and reagent it names', () => {
    const ids = new Set(SUBSTANCES.map((s) => s.id));
    const rids = new Set(REAGENTS.map((r) => r.id));
    const bad = BENCHES.flatMap(([subs, reagents]) => [
      ...subs.filter((s) => !ids.has(/** @type {any} */ (s))),
      ...reagents.filter((r) => !rids.has(/** @type {any} */ (r))),
    ]);
    expect(bad).toEqual([]);
  });

  it('shows the key tests of the chapter', () => {
    expect(observe('methylamine', 'quy').reacts).toBe(true);
    expect(observe('aniline', 'quy').reacts).toBe(false);
    expect(observe('aniline', 'bromine').precipitate).not.toBeNull();
    expect(observe('gly-ala', 'biuret').reacts).toBe(false);
    expect(observe('gly-ala-gly', 'biuret').reacts).toBe(true);
    expect(observe('albumin', 'hno3').short).toBe('Kết tủa vàng');
    expect(() => observe('albumin', 'quy')).toThrow();
  });
});
