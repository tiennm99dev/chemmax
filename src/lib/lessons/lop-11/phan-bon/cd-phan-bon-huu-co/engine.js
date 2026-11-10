/**
 * A day-by-day teaching model of an aerobic compost pile. Microbes break down
 * the easily decomposed organic matter; their rate depends on moisture, the
 * C/N ratio of the mix, the oxygen left in the pile and the temperature, and
 * the heat they release warms the pile. Turning the pile lets air back in.
 * The numbers are tuned to show the real pattern (a warm start, a hot phase
 * at 55 – 65 °C, cooling and curing), not to predict a particular heap.
 */
import { clamp } from '#lib/core/visuals/svg-math.js';
import { tidy } from '#lib/core/number-format.js';

/** Air temperature around the pile (°C). */
export const AMBIENT = 30;

/** Length of the simulation (days). */
export const DAYS = 60;

/** Carbon and nitrogen share (by mass) of the two kinds of material. */
export const BROWN = { name: 'Rơm, lá khô', carbon: 0.45, nitrogen: 0.0075 };
export const GREEN = { name: 'Rác rau, phân chuồng', carbon: 0.3, nitrogen: 0.025 };

/**
 * C/N ratio of a mix of brown and green material.
 * @param {number} brownKg
 * @param {number} greenKg
 */
export function mixRatio(brownKg, greenKg) {
  const c = brownKg * BROWN.carbon + greenKg * GREEN.carbon;
  const n = brownKg * BROWN.nitrogen + greenKg * GREEN.nitrogen;
  return n === 0 ? 0 : tidy(c / n, 6);
}

/**
 * Moisture factor: microbes need water, but a soaked pile has no air.
 * @param {number} m moisture, percent
 */
export function moistureFactor(m) {
  if (m <= 25) return 0;
  if (m < 50) return (m - 25) / 25;
  if (m <= 60) return 1;
  return clamp(1 - (m - 60) / 25, 0.15, 1);
}

/**
 * C/N factor, best near 25 – 30.
 * @param {number} cn
 */
export function ratioFactor(cn) {
  if (cn <= 0) return 0;
  const x = Math.log(cn / 28) / 0.5;
  return Math.exp(-0.5 * x * x);
}

/**
 * Temperature factor: warmer microbes work faster until about 62 °C; above
 * that most of them die off.
 * @param {number} t °C
 */
export function heatFactor(t) {
  if (t <= 62) return 0.35 + (0.65 * (t - 20)) / 42;
  return clamp(1 - (t - 62) / 12, 0.08, 1);
}

/** @typedef {'am' | 'nong' | 'nguoi' | 'chin'} Phase */

/** @type {Record<Phase, string>} */
export const PHASE_NAMES = {
  am: 'Giai đoạn ấm',
  nong: 'Giai đoạn nóng',
  nguoi: 'Giai đoạn nguội',
  chin: 'Giai đoạn ủ chín',
};

/**
 * @typedef {{ day: number, temp: number, left: number, oxygen: number, phase: Phase }} DayState
 * `left`: fraction of easily decomposed matter still there (1 at the start).
 */

/**
 * Run the pile for `DAYS` days.
 * @param {{ cn: number, moisture: number, turnEvery: number }} setup
 *   `turnEvery` 0 means the pile is never turned.
 * @returns {DayState[]}
 */
export function simulate({ cn, moisture, turnEvery }) {
  const fM = moistureFactor(moisture);
  const fCN = ratioFactor(cn);
  // Water fills the pores of a wet pile, so less air seeps in on its own.
  const seep = 0.05 * clamp((75 - moisture) / 30, 0.1, 1);
  let temp = AMBIENT;
  let left = 1;
  let oxygen = 1;
  let peaked = false;
  /** @type {DayState[]} */
  const out = [{ day: 0, temp, left, oxygen, phase: 'am' }];
  for (let day = 1; day <= DAYS; day++) {
    if (turnEvery > 0 && day % turnEvery === 0) {
      oxygen = 1;
      temp -= (temp - AMBIENT) * 0.25;
    }
    const rate = 0.08 * left * fM * fCN * oxygen * heatFactor(temp);
    left -= rate;
    temp += 300 * rate - 0.3 * (temp - AMBIENT);
    oxygen = clamp(oxygen - 2 * rate + seep * (1 - oxygen), 0.05, 1);
    if (temp >= 45) peaked = true;
    /** @type {Phase} */
    let phase = 'am';
    if (temp >= 45) phase = 'nong';
    else if (peaked) phase = left < 0.3 && temp < AMBIENT + 5 ? 'chin' : 'nguoi';
    out.push({ day, temp: tidy(temp, 1), left: tidy(left, 3), oxygen: tidy(oxygen, 3), phase });
  }
  return out;
}

/**
 * Number of days the pile spends at 55 °C or more, which is what kills most
 * pathogens and weed seeds.
 * @param {DayState[]} run
 */
export const hotDays = (run) => run.filter((d) => d.temp >= 55).length;

/** Highest temperature of a run (°C). */
export const peakTemp = (/** @type {DayState[]} */ run) => Math.max(...run.map((d) => d.temp));

/**
 * The main problem of a setup, if any, as advice for the learner.
 * @param {{ cn: number, moisture: number, turnEvery: number }} setup
 * @param {DayState[]} run
 * @returns {{ ok: boolean, text: string }}
 */
export function advice(setup, run) {
  const { cn, moisture, turnEvery } = setup;
  if (moisture < 40) {
    return {
      ok: false,
      text: 'Đống ủ quá khô: vi sinh vật thiếu nước nên hoạt động yếu, đống ủ không nóng lên. Hãy tưới thêm nước đến độ ẩm $50$ – $60\\%$.',
    };
  }
  if (moisture > 65) {
    return {
      ok: false,
      text: 'Đống ủ quá ướt: nước lấp các khe rỗng, thiếu oxygen nên phân huỷ kị khí, bốc mùi hôi và chậm hoai. Hãy trộn thêm rơm, lá khô.',
    };
  }
  if (cn > 40) {
    return {
      ok: false,
      text: `Tỉ lệ C/N khoảng ${Math.round(cn)} là quá cao: thiếu nitrogen cho vi sinh vật nên phân huỷ chậm. Hãy thêm rác rau, phân chuồng.`,
    };
  }
  if (cn < 20) {
    return {
      ok: false,
      text: `Tỉ lệ C/N khoảng ${Math.round(cn)} là quá thấp: thừa nitrogen, đạm bay đi dưới dạng $\\mathrm{NH_3}$ có mùi khai. Hãy thêm rơm, lá khô.`,
    };
  }
  if (turnEvery === 0) {
    return {
      ok: false,
      text: 'Không đảo trộn: oxygen trong đống ủ cạn dần nên nhiệt độ sớm hạ, phần giữa phân huỷ kị khí. Hãy đảo trộn định kì.',
    };
  }
  const hot = hotDays(run);
  if (hot < 3) {
    return {
      ok: false,
      text: `Đống ủ chỉ có ${hot} ngày từ $55\\ ^\\circ\\mathrm{C}$ trở lên, chưa đủ để diệt mầm bệnh và hạt cỏ dại.`,
    };
  }
  return {
    ok: true,
    text: `Điều kiện tốt: đống ủ đạt khoảng ${Math.round(peakTemp(run))} °C, có ${hot} ngày từ $55\\ ^\\circ\\mathrm{C}$ trở lên, đủ để diệt phần lớn mầm bệnh và hạt cỏ dại.`,
  };
}
