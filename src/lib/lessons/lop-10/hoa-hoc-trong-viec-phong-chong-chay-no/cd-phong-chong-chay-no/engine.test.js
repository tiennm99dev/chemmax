import { describe, expect, it } from 'vitest';
import { AGENTS, CASES, agentFeedback, goodAgents, verdictOf, waterToAbsorb } from './engine.js';

/** @param {string} id */
const fireCase = (id) =>
  /** @type {import('./engine.js').FireCase} */ (CASES.find((c) => c.id === id));

describe('choosing an extinguishing agent', () => {
  it('rates every agent for every fire and offers a right choice', () => {
    const problems = CASES.flatMap((c) => [
      ...AGENTS.filter((a) => !c.agents[a.id]?.why).map((a) => `${c.id}/${a.id}`),
      ...(goodAgents(c).length === 0 ? [`${c.id}: no good agent`] : []),
    ]);
    expect(problems).toEqual([]);
  });

  it('never rates water as safe on liquid, gas, metal, cooking or live electrical fires', () => {
    const wet = ['liquid', 'gas', 'metal', 'cooking', 'electric'].filter(
      (id) => verdictOf(fireCase(id), 'water') !== 'bad',
    );
    expect(wet).toEqual([]);
  });

  it('allows only the special powder on burning metal', () => {
    expect(goodAgents(fireCase('metal')).map((a) => a.id)).toEqual(['metal']);
  });

  it('words the feedback by verdict', () => {
    expect(agentFeedback(fireCase('solid'), 'water')).toContain('Phù hợp');
    expect(agentFeedback(fireCase('solid'), 'co2')).toContain('Chưa tốt');
    expect(agentFeedback(fireCase('liquid'), 'water')).toContain('Không nên dùng');
  });

  it('computes the water to absorb the heat of burning firewood', () => {
    expect(waterToAbsorb(9600)).toBeCloseTo(4.25, 2);
  });
});
