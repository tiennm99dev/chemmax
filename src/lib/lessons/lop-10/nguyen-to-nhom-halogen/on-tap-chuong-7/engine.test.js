import { describe, expect, it } from 'vitest';
import { isBalancedText, terms } from '#lib/domain/reaction.js';
import { CHAINS, isRight } from './engine.js';

describe('conversion schemes', () => {
  it('uses balanced equations', () => {
    const bad = CHAINS.flatMap((c) => c.steps)
      .map((s) => s.equation)
      .filter((eq) => !isBalancedText(eq));
    expect(bad).toEqual([]);
  });

  it('links each step: the input is on the left and the product on the right', () => {
    const bad = [];
    for (const chain of CHAINS) {
      let current = chain.start;
      for (const step of chain.steps) {
        const { left, right } = terms(step.equation);
        if (!left.some((t) => t.formula === current)) bad.push(`${step.equation} lacks ${current}`);
        if (!right.some((t) => t.formula === step.product))
          bad.push(`${step.equation} lacks ${step.product}`);
        current = step.product;
      }
    }
    expect(bad).toEqual([]);
  });

  it('offers the product once, with distinct distractors', () => {
    const bad = CHAINS.flatMap((c) => c.steps).filter(
      (s) =>
        s.options.filter((o) => o === s.product).length !== 1 ||
        new Set(s.options).size !== s.options.length,
    );
    expect(bad).toEqual([]);
  });

  it('never marks a real product of the step as wrong', () => {
    const bad = CHAINS.flatMap((c) => c.steps).filter((s) =>
      terms(s.equation).right.some((t) => t.formula !== s.product && s.options.includes(t.formula)),
    );
    expect(bad).toEqual([]);
  });

  it('judges a choice against the product', () => {
    const step = CHAINS[0].steps[0];
    expect(isRight(step, 'HCl')).toBe(true);
    expect(isRight(step, 'Cl2')).toBe(false);
  });
});
