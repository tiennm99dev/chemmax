/**
 * Two teaching models of separation. Column chromatography moves each pigment
 * down the column at a share of the solvent's speed: the more strongly it is
 * adsorbed, the slower. Distillation is idealised: the liquid with the lower
 * boiling point boils off completely at a constant temperature before the
 * temperature climbs to the next one. The numbers are chosen to show the idea,
 * they are not measured data.
 */
import { clamp } from '#lib/core/visuals/svg-math.js';

export const COLUMN_LENGTH = 100;
export const SOLVENT_SPEED = 3;
export const TUBE_MINUTES = 10;
export const MAX_MINUTES = 150;

/** @typedef {{ id: string, name: string, color: string }} Pigment */
/** @typedef {{ id: string, label: string, name: string, shares: number[] }} Solvent */

/** Plant pigments, weakest adsorbed first. @type {Pigment[]} */
export const PIGMENTS = [
  { id: 'carotene', name: 'β-carotene', color: '#ea580c' },
  { id: 'chlorophyll', name: 'chlorophyll a', color: '#16a34a' },
  { id: 'lutein', name: 'lutein', color: '#ca8a04' },
];

/** The share of the solvent's speed each pigment keeps, in `PIGMENTS` order. @type {Solvent[]} */
export const SOLVENTS = [
  { id: 'yeu', label: 'Hexane', name: 'hexane', shares: [0.6, 0.1, 0.06] },
  {
    id: 'vua',
    label: 'Hexane + ethyl acetate',
    name: 'hỗn hợp hexane và ethyl acetate',
    shares: [0.85, 0.45, 0.25],
  },
  { id: 'manh', label: 'Ethyl acetate', name: 'ethyl acetate', shares: [0.95, 0.87, 0.8] },
];

/**
 * Half the height of a band: bands spread as they travel.
 * @param {number} minutes
 */
export function bandHalfWidth(minutes) {
  return 3 + 0.5 * Math.sqrt(minutes);
}

/**
 * Where a band's centre is after some minutes, measured down the column.
 * @param {number} share
 * @param {number} minutes
 */
export function bandPosition(share, minutes) {
  return share * SOLVENT_SPEED * minutes;
}

/**
 * Share of a pigment that has already left the bottom of the column.
 * @param {number} share
 * @param {number} minutes
 */
export function elutedShare(share, minutes) {
  const w = bandHalfWidth(minutes);
  const top = bandPosition(share, minutes) - w;
  return clamp((top + 2 * w - COLUMN_LENGTH) / (2 * w), 0, 1);
}

/**
 * What each collecting tube has received by a given minute: one row per tube,
 * with the amount of each pigment (1 is the whole of that pigment).
 * @param {Solvent} solvent
 * @param {number} minutes
 * @returns {number[][]}
 */
export function tubeContents(solvent, minutes) {
  const tubes = [];
  for (let from = 0; from < MAX_MINUTES; from += TUBE_MINUTES) {
    const to = Math.min(from + TUBE_MINUTES, minutes);
    tubes.push(
      solvent.shares.map((share) =>
        to <= from ? 0 : Math.max(0, elutedShare(share, to) - elutedShare(share, from)),
      ),
    );
  }
  return tubes;
}

/**
 * Sums up the column at the end of a full run: the pigments still on it and
 * the pigments that came out mixed in one tube.
 * @param {Solvent} solvent
 * @returns {{ stuck: number[], mixed: boolean }}
 */
export function runSummary(solvent) {
  const tubes = tubeContents(solvent, MAX_MINUTES);
  const stuck = solvent.shares.flatMap((share, i) =>
    elutedShare(share, MAX_MINUTES) < 0.99 ? [i] : [],
  );
  const mixed = tubes.some((tube) => tube.filter((amount) => amount > 0.02).length > 1);
  return { stuck, mixed };
}

/** @typedef {{ id: string, first: string, second: string, firstBoil: number, secondBoil: number }} Mixture */

/** Pairs that mix fully and form no azeotrope, boiling points in °C. @type {Mixture[]} */
export const MIXTURES = [
  { id: 'acetone', first: 'acetone', second: 'nước', firstBoil: 56, secondBoil: 100 },
  { id: 'methanol', first: 'methanol', second: 'nước', firstBoil: 65, secondBoil: 100 },
  { id: 'hexane', first: 'hexane', second: 'octane', firstBoil: 69, secondBoil: 126 },
];

export const START_TEMPERATURE = 25;
export const HEATING_RATE = 15;
export const START_VOLUME = 10;
export const BOIL_OFF_RATE = 2;

/**
 * @typedef {object} Still
 * @property {number} minute
 * @property {number} temperature in °C
 * @property {number} first millilitres of the low-boiling liquid left in the flask
 * @property {number} second millilitres of the high-boiling liquid left in the flask
 * @property {0 | 1} active which receiver the condenser drips into
 * @property {{ first: number, second: number }[]} receivers
 * @property {number[]} history the temperature at each minute
 */

/** @returns {Still} */
export function startStill() {
  return {
    minute: 0,
    temperature: START_TEMPERATURE,
    first: START_VOLUME,
    second: START_VOLUME,
    active: 0,
    receivers: [
      { first: 0, second: 0 },
      { first: 0, second: 0 },
    ],
    history: [START_TEMPERATURE],
  };
}

/** @param {Still} still */
export function isFinished(still) {
  return still.first === 0 && still.second === 0;
}

/**
 * Heats the flask for one more minute. While the low-boiling liquid is left,
 * the temperature cannot rise above its boiling point.
 * @param {Still} still
 * @param {Mixture} mix
 * @returns {Still}
 */
export function heat(still, mix) {
  if (isFinished(still)) return still;
  const key = still.first > 0 ? 'first' : 'second';
  const boil = key === 'first' ? mix.firstBoil : mix.secondBoil;
  const receivers = still.receivers.map((r) => ({ ...r }));
  let { temperature } = still;
  let left = still[key];
  if (temperature >= boil) {
    const out = Math.min(left, BOIL_OFF_RATE);
    left -= out;
    receivers[still.active][key] += out;
  } else {
    temperature = Math.min(boil, temperature + HEATING_RATE);
  }
  return {
    ...still,
    minute: still.minute + 1,
    temperature,
    [key]: left,
    receivers,
    history: [...still.history, temperature],
  };
}

/**
 * Moves the condenser to the second receiver.
 * @param {Still} still
 * @returns {Still}
 */
export function switchReceiver(still) {
  return { ...still, active: 1 };
}

/**
 * Percent by volume of the low-boiling liquid in a receiver, null when empty.
 * @param {{ first: number, second: number }} receiver
 */
export function purity(receiver) {
  const total = receiver.first + receiver.second;
  return total === 0 ? null : (receiver.first / total) * 100;
}

/**
 * Live comment on the run.
 * @param {Still} still
 * @param {Mixture} mix
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function stillNote(still, mix) {
  const [one, two] = still.receivers;
  if (isFinished(still)) {
    if (one.second === 0 && two.first === 0) {
      return {
        tone: 'ok',
        text: `Hai bình hứng đều tinh khiết: bình 1 chỉ có ${mix.first}, bình 2 chỉ có ${mix.second}. Em đã đổi bình đúng lúc.`,
      };
    }
    return {
      tone: 'warn',
      text: 'Hai chất đã lẫn vào nhau trong bình hứng. Hãy làm lại và đổi bình sau khi chất thứ nhất đã bay hơi hết, trước khi chất thứ hai bắt đầu ngưng tụ.',
    };
  }
  if (still.first > 0) {
    if (still.temperature < mix.firstBoil) {
      return {
        tone: 'info',
        text: `Đang đun nóng, chưa có chất nào bay hơi. Chất dễ sôi hơn là ${mix.first}.`,
      };
    }
    if (still.active === 1) {
      return {
        tone: 'warn',
        text: `Em đổi bình hơi sớm: ${mix.first} vẫn đang chảy, nên bình 2 sẽ bị lẫn ${mix.first}.`,
      };
    }
    return {
      tone: 'info',
      text: `Nhiệt độ đứng yên ở ${mix.firstBoil} °C: ${mix.first} đang sôi, hơi ngưng tụ vào bình 1.`,
    };
  }
  if (still.temperature < mix.secondBoil) {
    return still.active === 0
      ? {
          tone: 'warn',
          text: `Hết ${mix.first}, nhiệt độ lại tăng. Đây là lúc đổi sang bình hứng 2.`,
        }
      : { tone: 'info', text: `Đã đổi bình. Nhiệt độ đang tăng dần tới ${mix.secondBoil} °C.` };
  }
  return still.active === 0
    ? { tone: 'warn', text: `Muộn rồi: ${mix.second} đang chảy vào bình 1.` }
    : {
        tone: 'info',
        text: `Nhiệt độ lại đứng yên ở ${mix.secondBoil} °C: ${mix.second} đang chảy vào bình 2.`,
      };
}
