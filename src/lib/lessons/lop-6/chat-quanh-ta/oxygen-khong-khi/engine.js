/**
 * A simple model of the textbook candle experiment: a burning candle stands
 * in a dish of water and a cup is put upside down over it. The candle uses
 * up the oxygen in the cup at a steady rate and goes out when almost none is
 * left; water rises into the cup to take the place of the oxygen used, about
 * one fifth of the cup. The model also judges a learner's guess at the
 * composition of air.
 */

/** Share of oxygen in air, by volume. */
export const OXYGEN = 0.21;
/** Share of oxygen left in the cup when the flame goes out. */
export const LEFT_WHEN_OUT = 0.01;
/** Oxygen used by the flame, mL per second (simulated). */
export const RATE = 5;

/** Cups the learner can choose, volume in mL. */
export const CUPS = [250, 500, 1000];

/**
 * Seconds the candle burns under a cup of `volume` mL.
 * @param {number} volume
 */
export function burnTime(volume) {
  return (volume * (OXYGEN - LEFT_WHEN_OUT)) / RATE;
}

/**
 * Oxygen used (mL) after `t` seconds under the cup.
 * @param {number} volume @param {number} t
 */
export function oxygenUsed(volume, t) {
  return Math.min(Math.max(t, 0), burnTime(volume)) * RATE;
}

/**
 * Share of the cup taken by the water that has risen into it.
 * @param {number} volume @param {number} t
 */
export function waterRise(volume, t) {
  return oxygenUsed(volume, t) / volume;
}

/**
 * Share of oxygen in the gas still in the cup.
 * @param {number} volume @param {number} t
 */
export function oxygenShare(volume, t) {
  const used = oxygenUsed(volume, t);
  return (volume * OXYGEN - used) / (volume - used);
}

/**
 * Flame size, from 1 (open air) to 0 (out), shrinking as oxygen runs low.
 * @param {number} volume @param {number} t
 */
export function flameSize(volume, t) {
  const left = 1 - oxygenUsed(volume, t) / (volume * (OXYGEN - LEFT_WHEN_OUT));
  return left <= 0 ? 0 : 0.35 + 0.65 * Math.sqrt(left);
}

/** The composition of air by volume, in percent. */
export const AIR = [
  { label: 'Nitrogen', value: 78 },
  { label: 'Oxygen', value: 21 },
  { label: 'Khí khác', value: 1 },
];

/** Allowed miss, in percentage points, for a guess to count. */
export const TOLERANCE = 3;

/**
 * Judge a guess at the composition of air, given as percentages in the order
 * of `AIR`.
 * @param {number[]} guess
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judgeAir(guess) {
  /** @type {string[]} */
  const messages = [];
  AIR.forEach((gas, i) => {
    const diff = Math.round(guess[i]) - gas.value;
    if (Math.abs(diff) <= TOLERANCE) return;
    messages.push(`${gas.label}: ${diff > 0 ? 'quá nhiều' : 'quá ít'} so với thực tế.`);
  });
  if (messages.length === 0) {
    return {
      ok: true,
      messages: [
        'Chính xác! Không khí có khoảng 78% nitrogen, 21% oxygen và 1% các khí khác (carbon dioxide, hơi nước, khí hiếm,...).',
      ],
    };
  }
  return { ok: false, messages };
}
