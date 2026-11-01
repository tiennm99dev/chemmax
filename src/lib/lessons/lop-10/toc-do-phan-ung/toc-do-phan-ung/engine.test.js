import { describe, expect, it } from 'vitest';
import {
  advance,
  concentrationAt,
  countOf,
  createSim,
  DURATION,
  FIELD,
  finish,
  particlesOf,
  RADIUS,
  rateOver,
  runVerdict,
} from './engine.js';

const SEEDS = [1, 2, 3, 4, 5, 6, 7, 8];
const base = { concentration: 0.2, temperature: 30, catalyst: false };

/**
 * Mean rate over the first 10 s, across seeds.
 * @param {import('./engine.js').Conditions} conditions
 */
function meanRate(conditions) {
  let total = 0;
  for (const seed of SEEDS) {
    const sim = createSim(conditions, seed);
    finish(sim);
    total += rateOver(sim.curve, 10);
  }
  return total / SEEDS.length;
}

describe('particle collision model', () => {
  it('starts with equal numbers of A and B inside the box, none overlapping', () => {
    const sim = createSim({ ...base, concentration: 0.3 }, 3);
    expect(countOf(sim, 'A')).toBe(particlesOf(0.3));
    expect(countOf(sim, 'B')).toBe(particlesOf(0.3));
    const bad = sim.particles.filter(
      (p) => p.x < RADIUS || p.y < RADIUS || p.x > FIELD.w - RADIUS || p.y > FIELD.h - RADIUS,
    );
    expect(bad).toEqual([]);
    let closest = Infinity;
    for (const a of sim.particles) {
      for (const b of sim.particles) {
        if (a !== b) closest = Math.min(closest, Math.hypot(a.x - b.x, a.y - b.y));
      }
    }
    expect(closest).toBeGreaterThanOrEqual(2 * RADIUS);
  });

  it('turns one A and one B into one C at each effective collision', () => {
    const sim = createSim(base, 5);
    finish(sim);
    const n = particlesOf(base.concentration);
    expect(sim.effective).toBeGreaterThan(0);
    expect(countOf(sim, 'C')).toBe(sim.effective);
    expect(countOf(sim, 'A')).toBe(n - sim.effective);
    expect(countOf(sim, 'B')).toBe(n - sim.effective);
    expect(sim.effective).toBeLessThanOrEqual(sim.collisions);
  });

  it('only lets some A–B collisions react', () => {
    const sim = createSim({ ...base, temperature: 20 }, 2);
    finish(sim);
    expect(sim.collisions).toBeGreaterThan(sim.effective);
  });

  it('reacts faster at a higher concentration', () => {
    expect(meanRate({ ...base, concentration: 0.3 })).toBeGreaterThan(
      meanRate({ ...base, concentration: 0.1 }) * 2,
    );
  });

  it('reacts faster at a higher temperature', () => {
    expect(meanRate({ ...base, temperature: 60 })).toBeGreaterThan(
      meanRate({ ...base, temperature: 20 }) * 1.5,
    );
  });

  it('reacts faster with a catalyst', () => {
    expect(meanRate({ ...base, temperature: 20, catalyst: true })).toBeGreaterThan(
      meanRate({ ...base, temperature: 20 }) * 1.5,
    );
  });

  it('slows down as the reactants are used up', () => {
    let early = 0;
    let late = 0;
    for (const seed of SEEDS) {
      const sim = createSim({ concentration: 0.3, temperature: 50, catalyst: false }, seed);
      finish(sim);
      early += sim.curve[0][1] - concentrationAt(sim.curve, 5);
      late += concentrationAt(sim.curve, 5) - concentrationAt(sim.curve, 10);
    }
    expect(early).toBeGreaterThan(late);
  });

  it('ends at the duration or when A runs out, with a falling curve', () => {
    const sim = createSim({ concentration: 0.1, temperature: 60, catalyst: true }, 4);
    finish(sim);
    expect(sim.done).toBe(true);
    expect(sim.t).toBeLessThanOrEqual(DURATION + 0.02);
    const rises = sim.curve.filter((point, i) => i > 0 && point[1] > sim.curve[i - 1][1]);
    expect(rises).toEqual([]);
  });

  it('advances by the time it is given', () => {
    const sim = createSim(base, 6);
    advance(sim, 0.5);
    expect(sim.t).toBeCloseTo(0.5, 1);
  });
});

describe('run verdict', () => {
  const run = (
    /** @type {Partial<import('./engine.js').Conditions>} */ change,
    /** @type {number} */ end,
  ) => ({
    conditions: { ...base, ...change },
    curve: /** @type {Array<[number, number]>} */ ([
      [0, 0.2],
      [5, end],
      [20, end],
    ]),
    end: 20,
  });

  it('names the one condition that changed and how much faster', () => {
    const text = runVerdict(run({ temperature: 40 }, 0.1), run({}, 0.15));
    expect(text).toContain('Đổi nhiệt độ');
    expect(text).toContain('nhanh hơn');
    expect(text).toContain('$2$ lần');
  });

  it('calls a run against the known effect chance, not a slower reaction', () => {
    const heatedButSlower = runVerdict(run({ temperature: 40 }, 0.15), run({}, 0.1));
    expect(heatedButSlower).toContain('ngẫu nhiên');
    expect(heatedButSlower).not.toContain('chậm hơn khoảng');
    const cooledButFaster = runVerdict(run({ temperature: 20 }, 0.1), run({}, 0.15));
    expect(cooledButFaster).toContain('ngẫu nhiên');
    expect(runVerdict(run({ catalyst: true }, 0.15), run({}, 0.15))).toContain('ngẫu nhiên');
  });

  it('reports a slowdown when the change should slow the reaction', () => {
    expect(runVerdict(run({ temperature: 20 }, 0.15), run({}, 0.1))).toContain('chậm hơn khoảng');
  });

  it('refuses to conclude when several conditions changed', () => {
    expect(runVerdict(run({ temperature: 40, catalyst: true }, 0.1), run({}, 0.15))).toContain(
      'đổi nhiều yếu tố',
    );
  });

  it('says a repeat differs only by chance', () => {
    expect(runVerdict(run({}, 0.1), run({}, 0.12))).toContain('ngẫu nhiên');
  });
});
