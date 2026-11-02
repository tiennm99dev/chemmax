/**
 * The virtual lab: setting up a titration bench piece by piece, titrating a
 * strong acid with a strong base, and gas volumes over time for the reaction
 * rate experiments. Reactions run on deliberately simple models, stated next
 * to each one, because a simulation only ever shows what its model holds.
 */
import { tidy } from '#lib/core/number-format.js';
import { phenolphthalein, strongAcidPh, strongBasePh } from '#lib/domain/ph.js';

/** @typedef {'stand' | 'bench'} SlotId */
/** @typedef {Record<string, SlotId>} Bench item id → where it was put */
/**
 * @typedef {object} BenchItem
 * @property {string} id
 * @property {string} label
 * @property {'tool' | 'chemical' | 'spare'} kind
 * @property {SlotId | null} slot where it belongs; null when it has no place here
 * @property {string} why told after a wrong placement
 */

export const SLOTS = /** @type {const} */ ([
  { id: 'stand', label: 'Giá đỡ' },
  { id: 'bench', label: 'Mặt bàn, dưới đầu burette' },
]);

/** @type {BenchItem[]} */
export const BENCH_ITEMS = [
  {
    id: 'burette',
    label: 'Burette',
    kind: 'tool',
    slot: 'stand',
    why: 'Burette được kẹp thẳng đứng trên giá đỡ.',
  },
  {
    id: 'flask',
    label: 'Bình tam giác',
    kind: 'tool',
    slot: 'bench',
    why: 'Bình tam giác đặt trên mặt bàn, ngay dưới đầu burette, để hứng dung dịch.',
  },
  {
    id: 'naoh',
    label: 'Dung dịch NaOH 0,1 M',
    kind: 'chemical',
    slot: 'stand',
    why: 'Dung dịch đã biết nồng độ được cho vào burette để đọc được thể tích đã dùng.',
  },
  {
    id: 'hcl',
    label: '20 mL dung dịch HCl',
    kind: 'chemical',
    slot: 'bench',
    why: 'Dung dịch cần xác định nồng độ được lấy chính xác rồi cho vào bình tam giác.',
  },
  {
    id: 'indicator',
    label: 'Vài giọt phenolphthalein',
    kind: 'chemical',
    slot: 'bench',
    why: 'Chất chỉ thị cho vào bình tam giác, nơi cần theo dõi sự đổi màu.',
  },
  {
    id: 'caco3',
    label: 'Đá vôi CaCO₃',
    kind: 'spare',
    slot: null,
    why: 'Thí nghiệm chuẩn độ này không dùng đá vôi: nó sẽ tác dụng với acid và làm sai kết quả.',
  },
];

/** The bench with nothing on it. @returns {Bench} */
export const emptyBench = () => ({});

/**
 * Tries to put an item in a slot. A wrong move leaves the bench unchanged and
 * explains why, as a real lab would not forgive it.
 * @param {Bench} bench
 * @param {string} itemId
 * @param {SlotId} slot
 * @returns {{ bench: Bench, ok: boolean, message: string }}
 */
export function placeItem(bench, itemId, slot) {
  const item = BENCH_ITEMS.find((x) => x.id === itemId);
  if (!item) return { bench, ok: false, message: 'Không có vật này trên kệ.' };
  if (item.slot !== slot) return { bench, ok: false, message: item.why };
  const holder = slot === 'stand' ? 'burette' : 'flask';
  if (item.kind === 'chemical' && bench[holder] === undefined) {
    return {
      bench,
      ok: false,
      message: `Chưa có ${holder === 'burette' ? 'burette' : 'bình tam giác'} để đựng hoá chất này. Hãy đặt dụng cụ trước.`,
    };
  }
  return { bench: { ...bench, [itemId]: slot }, ok: true, message: `Đã đặt: ${item.label}.` };
}

/**
 * Items still needed on the bench.
 * @param {Bench} bench
 */
export const itemsLeft = (bench) =>
  BENCH_ITEMS.filter((x) => x.slot !== null && bench[x.id] === undefined);

/** @param {Bench} bench */
export const benchReady = (bench) => itemsLeft(bench).length === 0;

/** mol/L of the sodium hydroxide in the burette. */
export const BASE_CONCENTRATION = 0.1;
/** mL of the acid in the flask. */
export const ACID_VOLUME = 20;
/** One drop from a burette, in mL. */
export const DROP = 0.05;

/** The acid samples, each hiding its true concentration until the report is checked. */
export const SAMPLES = [
  { id: 'a', label: 'Mẫu A', concentration: 0.08 },
  { id: 'b', label: 'Mẫu B', concentration: 0.12 },
  { id: 'c', label: 'Mẫu C', concentration: 0.15 },
];

/**
 * mL of base that exactly neutralises the acid: CₐVₐ = C_bV_b.
 * @param {number} acidConcentration
 */
export const equivalenceVolume = (acidConcentration) =>
  tidy((acidConcentration * ACID_VOLUME) / BASE_CONCENTRATION, 6);

/**
 * pH in the flask after adding `added` mL of base.
 * @param {number} acidConcentration @param {number} added
 */
export function flaskPh(acidConcentration, added) {
  const total = ACID_VOLUME + added;
  const excess = tidy(acidConcentration * ACID_VOLUME - BASE_CONCENTRATION * added, 9);
  if (excess > 0) return strongAcidPh(excess / total);
  if (excess < 0) return strongBasePh(-excess / total);
  return 7;
}

/**
 * Where the titration stands: 'before' is colourless, 'end' is the first
 * lasting pink (at most two drops past equivalence), 'past' is overshot.
 * @param {number} acidConcentration @param {number} added
 * @returns {'before' | 'end' | 'past'}
 */
export function titrationStage(acidConcentration, added) {
  if (phenolphthalein(flaskPh(acidConcentration, added)).name !== 'hồng') return 'before';
  return added - equivalenceVolume(acidConcentration) <= 2 * DROP + 1e-9 ? 'end' : 'past';
}

/**
 * How full the flask is drawn, as a share of its height: more liquid as base
 * runs in, up to the burette's whole 50 mL.
 * @param {number} added
 */
export const flaskFill = (added) => 0.28 + (Math.min(50, added) / 50) * 0.3;

/** Flask colours for the three stages. */
export const STAGE_COLORS = /** @type {const} */ ({
  before: '#e2e8f0',
  end: '#fbcfe8',
  past: '#db2777',
});

/**
 * Mean of a list of readings, or null for no reading.
 * @param {number[]} readings
 */
export function meanOf(readings) {
  if (readings.length === 0) return null;
  return readings.reduce((s, v) => s + v, 0) / readings.length;
}

/**
 * Acid concentration from the base volume read at the end point.
 * @param {number} baseVolume
 */
export const acidConcentration = (baseVolume) => (BASE_CONCENTRATION * baseVolume) / ACID_VOLUME;

/** Molar gas volume the Hoá học 10 book uses at 25 °C and 1 bar, in cm³/mol. */
export const MOLAR_GAS_VOLUME = 24790;

/**
 * @typedef {object} RateTube
 * @property {string} label
 * @property {number} moles gas the tube can give, in mol
 * @property {number} k rate constant, per second
 */
/**
 * @typedef {object} RateExperiment
 * @property {string} id
 * @property {string} label
 * @property {string} equation TeX
 * @property {string} gas
 * @property {[RateTube, RateTube]} tubes
 * @property {string} conclusion
 */

/** Rate constant of CaCO₃ with HCl at 25 °C in the model. */
const K_ACID = 0.05;
/** The rate doubles for every 10 °C in the model (γ = 2). */
const warmed = (/** @type {number} */ celsius) => K_ACID * 2 ** ((celsius - 25) / 10);
/** mol of CO₂ from 10 mL of HCl with excess CaCO₃: 2 HCl give 1 CO₂. */
const co2From = (/** @type {number} */ molar) => (molar * 0.01) / 2;
/** mol of O₂ from 10 mL of H₂O₂ 1 M: 2 H₂O₂ give 1 O₂. */
const O2_MOLES = 0.005;

/** @type {RateExperiment[]} */
export const RATE_EXPERIMENTS = [
  {
    id: 'concentration',
    label: 'Nồng độ',
    equation: '\\mathrm{CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + CO_2(g) + H_2O(l)}',
    gas: 'CO₂',
    tubes: [
      { label: 'HCl 1 M', moles: co2From(1), k: K_ACID },
      { label: 'HCl 2 M', moles: co2From(2), k: K_ACID },
    ],
    conclusion: 'Nồng độ acid càng lớn, khí thoát ra càng nhanh.',
  },
  {
    id: 'temperature',
    label: 'Nhiệt độ',
    equation: '\\mathrm{CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + CO_2(g) + H_2O(l)}',
    gas: 'CO₂',
    tubes: [
      { label: 'HCl 1 M, 25 °C', moles: co2From(1), k: warmed(25) },
      { label: 'HCl 1 M, 45 °C', moles: co2From(1), k: warmed(45) },
    ],
    conclusion: 'Nhiệt độ càng cao, khí thoát ra càng nhanh; lượng khí cuối cùng không đổi.',
  },
  {
    id: 'catalyst',
    label: 'Xúc tác',
    equation: '\\mathrm{2H_2O_2(aq) \\xrightarrow{MnO_2} 2H_2O(l) + O_2(g)}',
    gas: 'O₂',
    tubes: [
      { label: 'H₂O₂ 1 M', moles: O2_MOLES, k: 0.001 },
      { label: 'H₂O₂ 1 M + MnO₂', moles: O2_MOLES, k: 0.3 },
    ],
    conclusion: 'MnO₂ làm phản ứng nhanh hơn rất nhiều, còn lượng khí cuối cùng không đổi.',
  },
];

/**
 * cm³ of gas from a tube after `t` seconds: first order in what is left.
 * @param {RateTube} tube @param {number} t
 */
export function gasVolume(tube, t) {
  return tube.moles * MOLAR_GAS_VOLUME * (1 - Math.exp(-tube.k * t));
}

/**
 * Average rate from 0 to `t` seconds, in cm³/s; 0 at the start.
 * @param {RateTube} tube @param {number} t
 */
export function averageRate(tube, t) {
  return t > 0 ? gasVolume(tube, t) / t : 0;
}

/**
 * Radius in drawing units of a balloon holding `volume` cm³: a sphere's
 * radius follows the cube root of its volume.
 * @param {number} volume
 */
export function balloonRadius(volume) {
  return 5 + 4.2 * Math.cbrt(Math.max(0, volume));
}
