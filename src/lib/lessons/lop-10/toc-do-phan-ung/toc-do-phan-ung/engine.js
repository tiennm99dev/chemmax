/**
 * A particle model of A + B → C in a closed box held at constant temperature.
 * Particles fly and bounce; only an A–B collision with enough relative energy
 * is effective. Rate differences are never scripted: they come out of the
 * number of collisions and the share of them that pass the energy threshold.
 * Temperature and threshold are scaled so a run fits on screen in seconds.
 */
import { rng } from '#lib/core/drill.js';
import { clamp } from '#lib/core/visuals/svg-math.js';
import { numTex } from '#lib/core/number-format.js';
import { averageRate } from '../_shared/rate.js';

export const FIELD = /** @type {const} */ ({ w: 320, h: 200 });
export const RADIUS = 6;
/** Simulated seconds of one run. */
export const DURATION = 20;
/** Concentration, in M, that one particle of A or of B stands for. */
export const PER_PARTICLE = 0.01;

const STEP = 1 / 60;
const SAMPLE_EVERY = 0.25;
const FLASH_LIFE = 0.5;
/** Seconds at the start of two runs over which their rates are compared. */
const COMPARE_OVER = 5;
/** Spread of each velocity component at 20 °C, in field units per second. */
const SIGMA = 70;
/** Energy threshold, in units of the mean energy at 20 °C. */
export const THRESHOLD = 2.4;
export const THRESHOLD_CATALYST = 1.0;

/**
 * @typedef {{ concentration: number, temperature: number, catalyst: boolean }} Conditions
 * @typedef {{ id: number, kind: 'A' | 'B' | 'C', x: number, y: number, vx: number, vy: number }} Particle
 * @typedef {{ x: number, y: number, age: number }} Flash
 * @typedef {object} Sim
 * @property {Conditions} conditions
 * @property {() => number} rand
 * @property {Particle[]} particles
 * @property {Flash[]} flashes
 * @property {number} t
 * @property {number} carry unspent frame time
 * @property {number} nextSample
 * @property {number} collisions A–B collisions so far
 * @property {number} effective the effective ones among them
 * @property {Array<[number, number]>} curve `[t, C_A]` samples
 * @property {boolean} done
 */

/**
 * Mean kinetic level at a temperature, 1 at 20 °C. Scaled well above the real
 * ratio of absolute temperatures so ten degrees shows on screen.
 * @param {number} temperature in °C
 */
export function kineticLevel(temperature) {
  return 2.5 ** ((temperature - 20) / 40);
}

/** @param {() => number} rand */
function gaussian(rand) {
  return Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());
}

/**
 * @param {Sim} sim
 * @returns {number} one velocity component drawn at the box's temperature
 */
function thermal(sim) {
  return gaussian(sim.rand) * SIGMA * Math.sqrt(kineticLevel(sim.conditions.temperature));
}

/**
 * Particles of one kind per unit of the chosen concentration.
 * @param {number} concentration in M
 */
export const particlesOf = (concentration) => Math.round(concentration / PER_PARTICLE);

/**
 * @param {Conditions} conditions
 * @param {number} [seed]
 * @returns {Sim}
 */
export function createSim(conditions, seed = 1) {
  /** @type {Sim} */
  const sim = {
    conditions,
    rand: rng(seed),
    particles: [],
    flashes: [],
    t: 0,
    carry: 0,
    nextSample: SAMPLE_EVERY,
    collisions: 0,
    effective: 0,
    curve: [[0, conditions.concentration]],
    done: false,
  };
  const n = particlesOf(conditions.concentration);
  // Start on a loose grid with some jitter, so no two particles overlap.
  const cols = 10;
  const cellW = FIELD.w / cols;
  const cellH = FIELD.h / Math.ceil((2 * n) / cols);
  const room = Math.max(0, Math.min(cellW, cellH) - 2 * RADIUS - 1);
  const cells = Array.from({ length: 2 * n }, (_, i) => i);
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(sim.rand() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  cells.forEach((cell, id) => {
    sim.particles.push({
      id,
      kind: id < n ? 'A' : 'B',
      x: ((cell % cols) + 0.5) * cellW + (sim.rand() - 0.5) * room,
      y: (Math.floor(cell / cols) + 0.5) * cellH + (sim.rand() - 0.5) * room,
      vx: thermal(sim),
      vy: thermal(sim),
    });
  });
  return sim;
}

/**
 * @param {Sim} sim
 * @param {'A' | 'B' | 'C'} kind
 */
export const countOf = (sim, kind) => sim.particles.filter((p) => p.kind === kind).length;

/**
 * Walls keep the temperature: a particle leaves one with a fresh thermal
 * velocity, pointing back into the box.
 * @param {Sim} sim
 * @param {Particle} p
 */
function hitWalls(sim, p) {
  if (p.x < RADIUS || p.x > FIELD.w - RADIUS) {
    const sign = p.x < RADIUS ? 1 : -1;
    p.x = clamp(p.x, RADIUS, FIELD.w - RADIUS);
    p.vx = sign * Math.abs(thermal(sim));
  }
  if (p.y < RADIUS || p.y > FIELD.h - RADIUS) {
    const sign = p.y < RADIUS ? 1 : -1;
    p.y = clamp(p.y, RADIUS, FIELD.h - RADIUS);
    p.vy = sign * Math.abs(thermal(sim));
  }
}

/**
 * One collision between approaching particles: an effective A–B collision
 * makes one C; anything else bounces, swapping the velocity along the line of
 * centres as equal masses do.
 * @param {Sim} sim
 * @param {Particle} a
 * @param {Particle} b
 * @param {number} dx
 * @param {number} dy
 * @param {number} dist2
 * @returns {boolean} whether `b` was used up
 */
function collide(sim, a, b, dx, dy, dist2) {
  const rvx = b.vx - a.vx;
  const rvy = b.vy - a.vy;
  const along = (rvx * dx + rvy * dy) / dist2;
  if ((a.kind === 'A' && b.kind === 'B') || (a.kind === 'B' && b.kind === 'A')) {
    sim.collisions++;
    const energy = (rvx * rvx + rvy * rvy) / (4 * SIGMA * SIGMA);
    const needed = sim.conditions.catalyst ? THRESHOLD_CATALYST : THRESHOLD;
    if (energy >= needed) {
      sim.effective++;
      a.kind = 'C';
      a.x = (a.x + b.x) / 2;
      a.y = (a.y + b.y) / 2;
      a.vx = thermal(sim);
      a.vy = thermal(sim);
      sim.flashes.push({ x: a.x, y: a.y, age: 0 });
      return true;
    }
  }
  a.vx += along * dx;
  a.vy += along * dy;
  b.vx -= along * dx;
  b.vy -= along * dy;
  return false;
}

/** @param {Sim} sim */
function step(sim) {
  const { particles } = sim;
  for (const p of particles) {
    p.x += p.vx * STEP;
    p.y += p.vy * STEP;
    hitWalls(sim, p);
  }
  const reach = (2 * RADIUS) ** 2;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist2 = dx * dx + dy * dy;
      if (dist2 >= reach || dist2 === 0) continue;
      if ((b.vx - a.vx) * dx + (b.vy - a.vy) * dy >= 0) continue;
      if (collide(sim, a, b, dx, dy, dist2)) {
        particles.splice(j, 1);
        j--;
      }
    }
  }
  for (const f of sim.flashes) f.age += STEP;
  sim.flashes = sim.flashes.filter((f) => f.age < FLASH_LIFE);
  sim.t += STEP;
  const left = countOf(sim, 'A');
  if (sim.t >= sim.nextSample - 1e-9) {
    sim.curve.push([sim.t, left * PER_PARTICLE]);
    sim.nextSample += SAMPLE_EVERY;
  }
  if (left === 0 || sim.t >= DURATION - 1e-9) {
    sim.curve.push([sim.t, left * PER_PARTICLE]);
    sim.done = true;
  }
}

/**
 * Moves the run on by `dt` seconds of screen time.
 * @param {Sim} sim
 * @param {number} dt
 */
export function advance(sim, dt) {
  sim.carry += dt;
  while (sim.carry >= STEP && !sim.done) {
    step(sim);
    sim.carry -= STEP;
  }
}

/**
 * Plays the rest of the run at once.
 * @param {Sim} sim
 */
export function finish(sim) {
  while (!sim.done) step(sim);
  sim.flashes = [];
}

/**
 * Concentration of A on a run's curve at time `t` (its last value after the end).
 * @param {Array<[number, number]>} curve
 * @param {number} t
 */
export function concentrationAt(curve, t) {
  let c = curve[0][1];
  for (const [ti, ci] of curve) {
    if (ti > t) break;
    c = ci;
  }
  return c;
}

/**
 * Average rate of a run over its first `t` seconds, from the fall of C_A.
 * @param {Array<[number, number]>} curve
 * @param {number} t
 */
export function rateOver(curve, t) {
  return averageRate(curve[0][1], concentrationAt(curve, t), 0, t);
}

/**
 * @typedef {{ conditions: Conditions, curve: Array<[number, number]>, end: number }} RunSummary
 */

/** @param {number} value */
const tex = (value) => numTex(value, 2);

/**
 * @param {Conditions} a
 * @param {Conditions} b
 * @returns {string[]} the conditions that differ, in words
 */
function changes(a, b) {
  const out = [];
  if (a.concentration !== b.concentration) out.push('nồng độ');
  if (a.temperature !== b.temperature) out.push('nhiệt độ');
  if (a.catalyst !== b.catalyst) out.push('chất xúc tác');
  return out;
}

/**
 * The verdict on a finished run: what it measured and, when one condition
 * changed since the run before, how the rate responded.
 * @param {RunSummary} run
 * @param {RunSummary | null} before
 * @returns {string} rich text
 */
export function runVerdict(run, before) {
  const end = concentrationAt(run.curve, run.end);
  const own = `$C_A$ giảm từ $${tex(run.conditions.concentration)}$ M còn $${tex(end)}$ M sau $${tex(Math.round(run.end * 10) / 10)}$ s.`;
  if (!before) return `${own} Đổi đúng một yếu tố rồi chạy lại để so sánh.`;
  const changed = changes(before.conditions, run.conditions);
  if (changed.length !== 1) {
    return changed.length === 0
      ? `${own} Cùng điều kiện nên hai đường gần nhau; chúng chỉ lệch vì hạt chuyển động ngẫu nhiên.`
      : `${own} Lần này đổi nhiều yếu tố (${changed.join(', ')}) nên khó biết yếu tố nào gây ra thay đổi.`;
  }
  // Early on both runs still have reactants left, so the rates compare fairly.
  const window = Math.max(1, Math.min(COMPARE_OVER, run.end, before.end));
  const now = rateOver(run.curve, window);
  const then = rateOver(before.curve, window);
  if (now === then) return `${own} Đổi ${changed[0]}, tốc độ đo được như lần trước.`;
  if (then === 0)
    return `${own} Đổi ${changed[0]}: lần trước gần như chưa có phản ứng, lần này đã có.`;
  if (now === 0) return `${own} Đổi ${changed[0]}: lần này gần như chưa có phản ứng.`;
  const ratio = now / then;
  const word = ratio > 1 ? 'nhanh hơn' : 'chậm hơn';
  const times = ratio > 1 ? ratio : 1 / ratio;
  return `${own} Đổi ${changed[0]}: phản ứng ${word} khoảng $${tex(Math.round(times * 10) / 10)}$ lần so với lần trước (tính trong $${tex(Math.round(window * 10) / 10)}$ s đầu).`;
}
