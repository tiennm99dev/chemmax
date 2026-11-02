import { describe, expect, it } from 'vitest';
import { shuffle, rng } from '#lib/core/drill.js';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  SALTS,
  ammoniumLook,
  approach,
  bestTemperature,
  conversion,
  equilibriumShare,
  kp,
  outletShare,
  verdict,
} from './engine.js';

describe('the Haber model', () => {
  it('follows the measured equilibrium constants', () => {
    expect(kp(400)).toBeCloseTo(1.64e-4, 7);
    expect(kp(500) / 1.45e-5).toBeCloseTo(1, 1);
    expect(kp(300) / 4.34e-3).toBeCloseTo(1, 0);
  });

  it('solves the equilibrium share so the constant comes back', () => {
    const y = equilibriumShare(450, 200);
    const back = (y * y * 256) / (27 * (1 - y) ** 4 * 200 ** 2);
    expect(back / kp(450)).toBeCloseTo(1, 6);
  });

  it('gives the share the book conditions are known for', () => {
    expect(equilibriumShare(450, 200)).toBeCloseTo(0.247, 2);
    expect(conversion(0.25)).toBeCloseTo(0.4, 6);
  });

  it('moves the equilibrium the way Le Chatelier says', () => {
    expect(equilibriumShare(300, 200)).toBeGreaterThan(equilibriumShare(500, 200));
    expect(equilibriumShare(450, 300)).toBeGreaterThan(equilibriumShare(450, 100));
  });

  it('lets the catalyst change the speed only', () => {
    expect(approach(450, true)).toBeCloseTo(0.9, 2);
    expect(approach(450, false)).toBeLessThan(1e-6);
    expect(outletShare(450, 200, false)).toBeLessThan(1e-6);
  });

  it('finds the most ammonia per pass in the industrial window', () => {
    const best = [150, 200].map((p) => bestTemperature(p, true));
    expect(best.every((t) => t >= 400 && t <= 480)).toBe(true);
  });

  it('only praises the settings the book gives', () => {
    expect(verdict(425, 175, true).tone).toBe('ok');
    expect(verdict(425, 175, false).tone).toBe('warn');
    expect(verdict(350, 175, true).tone).toBe('warn');
    expect(verdict(600, 175, true).tone).toBe('warn');
    expect(verdict(425, 100, true).tone).toBe('warn');
    expect(verdict(425, 400, true).tone).toBe('info');
  });
});

describe('the ammonium test', () => {
  it('prints balanced equations', () => {
    const wrong = SALTS.filter((s) => s.equation && !isBalancedText(s.equation));
    expect(wrong).toEqual([]);
  });

  it('turns litmus blue only for ammonium salts, and only after the alkali', () => {
    const blue = SALTS.filter((s) => ammoniumLook(s, ['naoh']).strip === '#3b82f6');
    expect(blue.map((s) => s.id)).toEqual(['nh4cl', 'nh42so4']);
    expect(SALTS.every((s) => ammoniumLook(s, []).strip === '#c4b5fd')).toBe(true);
  });

  it('keeps every bottle when shuffled', () => {
    expect(shuffle(rng(3), SALTS)).toHaveLength(SALTS.length);
  });
});
