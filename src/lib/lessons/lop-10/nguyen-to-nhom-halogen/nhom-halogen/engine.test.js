import { describe, expect, it } from 'vitest';
import { isBalancedText } from '#lib/domain/reaction.js';
import {
  HALOGENS,
  PAIRS,
  mix,
  predictionReply,
  starchColor,
  starchReply,
  stateAt,
  statesLine,
} from './engine.js';

const byFormula = (/** @type {string} */ f) => {
  const h = HALOGENS.find((x) => x.formula === f);
  if (!h) throw new Error(f);
  return h;
};

describe('states of the halogens', () => {
  it('gives the states at room temperature as the book states them', () => {
    expect(HALOGENS.map((h) => stateAt(h, 25))).toEqual(['khí', 'khí', 'lỏng', 'rắn']);
  });

  it('has melting and boiling points that rise down the group', () => {
    for (const key of /** @type {const} */ (['melt', 'boil'])) {
      const values = HALOGENS.map((h) => h[key]);
      expect(values).toEqual([...values].sort((a, b) => a - b));
    }
  });

  it('switches state exactly at the melting and boiling points', () => {
    const br = byFormula('Br2');
    expect(stateAt(br, -8)).toBe('rắn');
    expect(stateAt(br, -7)).toBe('lỏng');
    expect(stateAt(br, 58)).toBe('lỏng');
    expect(stateAt(br, 59)).toBe('khí');
  });

  it('writes the states with the book minus sign and real subscripts', () => {
    expect(statesLine(-50)).toBe('Ở −50 °C: F₂ ở thể khí; Cl₂ ở thể lỏng; Br₂, I₂ ở thể rắn.');
  });
});

describe('halogen water and halide salts', () => {
  it('lets a halogen push out only a weaker one', () => {
    const reacting = PAIRS.filter((pair) => {
      const [water, salt] = pair.split('|');
      return mix(water, salt).reacts;
    });
    expect(reacting).toEqual(['Cl2|NaBr', 'Cl2|NaI', 'Br2|NaI']);
  });

  it('writes balanced equations that free the weaker halogen', () => {
    expect(mix('Cl2', 'NaBr').equation).toBe('Cl2 + 2NaBr → 2NaCl + Br2');
    expect(mix('Br2', 'NaI').equation).toBe('Br2 + 2NaI → 2NaBr + I2');
    const unbalanced = PAIRS.map((pair) => mix(...split(pair)).equation).filter(
      (eq) => eq && !isBalancedText(eq),
    );
    expect(unbalanced).toEqual([]);
  });

  it('keeps the colour of the added water when nothing reacts', () => {
    expect(mix('Br2', 'NaCl').colorName).toBe('vàng cam');
    expect(mix('Cl2', 'NaBr').colorName).toBe('vàng cam');
    expect(mix('Cl2', 'NaI').colorName).toBe('vàng nâu');
  });

  it('turns starch blue only when free iodine is in the tube', () => {
    const blue = PAIRS.filter((pair) => {
      const m = mix(...split(pair));
      return starchColor(m) !== m.color;
    });
    expect(blue).toEqual(['Cl2|NaI', 'Br2|NaI', 'I2|NaCl', 'I2|NaBr', 'I2|NaI']);
  });

  it('does not credit the reaction for iodine that was added', () => {
    expect(starchReply(mix('I2', 'NaCl'), 'I2')).toContain('vốn có sẵn');
    expect(starchReply(mix('Cl2', 'NaI'), 'Cl2')).toContain('sinh ra');
    expect(starchReply(mix('Cl2', 'NaBr'), 'Cl2')).toContain('không');
  });

  it('judges a prediction against the mixture', () => {
    expect(predictionReply(mix('Cl2', 'NaBr'), true).tone).toBe('ok');
    expect(predictionReply(mix('Cl2', 'NaBr'), false).tone).toBe('warn');
    expect(predictionReply(mix('I2', 'NaBr'), false).tone).toBe('ok');
  });
});

/**
 * @param {string} pair
 * @returns {[string, string]}
 */
function split(pair) {
  const [water, salt] = pair.split('|');
  return [water, salt];
}
