/**
 * Timing a ball rolling down a slope with a stopwatch, the way the KNTT book
 * teaches it: press Reset so the display shows 0, press Start as the ball
 * passes mark A, press Stop as it passes mark B, read and write the result.
 * A photogate timer (đồng hồ đo thời gian hiện số dùng cổng quang điện) gives
 * the true interval to compare each hand measurement with.
 *
 * Times are in milliseconds inside the stopwatch, seconds elsewhere.
 */

import { formatFixed } from '#lib/core/number-format.js';

/** Distance of mark A and mark B from the release point, and the track length, in m. */
export const MARK_A = 0.2;
export const MARK_B = 1.0;
export const TRACK = 1.1;

/** @typedef {{ id: string, name: string, accel: number }} Slope accel in m/s² */

/** @type {Slope[]} */
export const SLOPES = [
  { id: 'thoai', name: 'Máng nghiêng ít', accel: 0.5 },
  { id: 'doc', name: 'Máng nghiêng nhiều', accel: 1.2 },
];

/**
 * Distance rolled from rest after `t` seconds, stopped at the end of the track.
 * @param {number} accel
 * @param {number} t
 */
export function position(accel, t) {
  if (t <= 0) return 0;
  return Math.min(TRACK, 0.5 * accel * t * t);
}

/**
 * When the ball passes a distance `s`, in seconds after release.
 * @param {number} accel
 * @param {number} s
 */
export function timeAt(accel, s) {
  return Math.sqrt((2 * s) / accel);
}

/**
 * The time from mark A to mark B, as the photogate timer measures it.
 * @param {number} accel
 */
export function gateInterval(accel) {
  return timeAt(accel, MARK_B) - timeAt(accel, MARK_A);
}

/**
 * @typedef {{ running: boolean, base: number, since: number }} Stopwatch
 * `base`: milliseconds counted before the current run; `since`: when the
 * current run started (meaningful only while running).
 */

/** @returns {Stopwatch} */
export function stopwatch() {
  return { running: false, base: 0, since: 0 };
}

/**
 * @param {Stopwatch} sw
 * @param {number} now ms
 */
export function elapsed(sw, now) {
  return sw.running ? sw.base + (now - sw.since) : sw.base;
}

/**
 * Start counting. A stopwatch that was not reset carries on from where it
 * stopped, as a real one does.
 * @param {Stopwatch} sw
 * @param {number} now
 * @returns {Stopwatch}
 */
export function start(sw, now) {
  if (sw.running) return sw;
  return { running: true, base: sw.base, since: now };
}

/**
 * @param {Stopwatch} sw
 * @param {number} now
 * @returns {Stopwatch}
 */
export function stop(sw, now) {
  if (!sw.running) return sw;
  return { running: false, base: elapsed(sw, now), since: 0 };
}

/**
 * Reset to 0; ignored while the stopwatch is running, as on a real one.
 * @param {Stopwatch} sw
 * @returns {Stopwatch}
 */
export function reset(sw) {
  return sw.running ? sw : stopwatch();
}

/** ĐCNN of the stopwatch, in seconds. */
export const DCNN = 0.01;

/**
 * What the display shows, in seconds: whole hundredths, cut down rather than
 * rounded, as a stopwatch counts.
 * @param {number} ms
 */
export function reading(ms) {
  return Math.floor(ms / 10) / 100;
}

/**
 * The display text with a decimal comma: 1,07.
 * @param {number} seconds
 */
export function secondsText(seconds) {
  return formatFixed(seconds, 2);
}

/**
 * Average of the recorded values.
 * @param {number[]} values
 */
export function mean(values) {
  if (values.length === 0) return NaN;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/**
 * Feedback on one hand measurement.
 * @param {{ measured: number, truth: number, fromZero: boolean }} t
 * @returns {{ ok: boolean, message: string }}
 */
export function judgeTrial({ measured, truth, fromZero }) {
  if (!fromZero) {
    return {
      ok: false,
      message:
        'Đồng hồ chưa được đưa về 0 trước khi đo, nên kết quả cộng dồn cả lần đo trước. Hãy bấm Reset rồi đo lại.',
    };
  }
  const err = measured - truth;
  const size = Math.abs(err);
  if (size <= 0.05) {
    return {
      ok: true,
      message: `Rất sát: chỉ lệch ${secondsText(size)} s so với cổng quang điện.`,
    };
  }
  if (size <= 0.15) {
    return {
      ok: true,
      message: `Khá sát: lệch ${secondsText(size)} s. Phản xạ của tay làm mỗi lần đo lệch một chút.`,
    };
  }
  const cause =
    err > 0
      ? 'thời gian đo dài hơn thật: Start bấm sớm hoặc Stop bấm muộn'
      : 'thời gian đo ngắn hơn thật: Start bấm muộn hoặc Stop bấm sớm';
  return {
    ok: false,
    message: `Lệch nhiều (${secondsText(size)} s), ${cause}. Hãy bấm Start đúng lúc bi qua vạch A và Stop đúng lúc bi qua vạch B.`,
  };
}
