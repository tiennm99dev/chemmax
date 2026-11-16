import { describe, expect, it } from 'vitest';
import { ATTACKS, H, W, formName, frame, ringOf, verdict } from './engine.js';

describe('ring closure of glucose and fructose', () => {
  it('closes the book rings from the –OH at C5', () => {
    expect(ringOf('glucose', 5)).toMatchObject({ size: 6, carbons: [1, 2, 3, 4, 5], book: true });
    expect(ringOf('fructose', 5)).toMatchObject({ size: 5, carbons: [2, 3, 4, 5], book: true });
    expect(verdict('glucose', 5, 'alpha').tone).toBe('ok');
    expect(verdict('glucose', 5, 'alpha').text).toContain('phía dưới');
    expect(verdict('fructose', 5, 'beta').text).toContain('hemiketal');
  });

  it('calls three-, four- and seven-membered rings unstable', () => {
    expect(ringOf('glucose', 3).size).toBe(4);
    expect(ringOf('glucose', 6).size).toBe(7);
    expect(ringOf('fructose', 3).size).toBe(3);
    expect(verdict('glucose', 6, 'beta').tone).toBe('warn');
    expect(verdict('glucose', 4, 'beta').tone).toBe('info');
  });

  it('names the anomers', () => {
    expect(formName('glucose', 'alpha')).toBe('α-glucose');
    expect(formName('fructose', 'beta')).toBe('β-fructose');
  });

  it('keeps every atom on the board in every frame', () => {
    const bad = [];
    for (const id of /** @type {const} */ (['glucose', 'fructose'])) {
      for (const attack of ATTACKS) {
        for (const anomer of /** @type {const} */ (['alpha', 'beta'])) {
          for (const t of [0, 0.25, 0.5, 0.75, 1]) {
            for (const a of frame(id, attack, anomer, t).atoms) {
              if (a.x < 10 || a.x > W - 10 || a.y < 10 || a.y > H - 10) {
                bad.push([id, attack, anomer, t, a.id]);
              }
            }
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('turns C=O into the new –OH and the chain –OH into the ring O', () => {
    const open = frame('glucose', 5, 'alpha', 0);
    const shut = frame('glucose', 5, 'alpha', 1);
    const label = (/** @type {typeof open} */ f, /** @type {string} */ id) =>
      f.atoms.find((a) => a.id === id)?.label;
    expect([label(open, 'Ocarbonyl'), label(open, 'Oring')]).toEqual(['O', 'OH']);
    expect([label(shut, 'Ocarbonyl'), label(shut, 'Oring')]).toEqual(['OH', 'O']);
    expect(open.bonds.find((b) => b.b === 'Ocarbonyl')?.order).toBe(2);
    expect(shut.bonds.some((b) => b.a === 'Oring' && b.b === 'C1')).toBe(true);
    const c1 = shut.atoms.find((a) => a.id === 'C1');
    const oh = shut.atoms.find((a) => a.id === 'Ocarbonyl');
    expect(oh && c1 && oh.y > c1.y).toBe(true);
  });
});
