/**
 * A virtual steam distillation (chưng cất lôi cuốn hơi nước) of an essential
 * oil: assemble the set-up in the order the steam flows, then run it.
 *
 * Two immiscible liquids boil together when the sum of their vapour
 * pressures reaches the outside pressure, so water with an oil that boils
 * above 170 °C still distils just below 100 °C. Water follows the Antoine
 * equation; the main component of each oil follows the Clausius–Clapeyron
 * equation from its normal boiling point. How much oil comes over in time
 * is a teaching model (first-order release from the plant tissue), tuned to
 * show the pattern, not to predict one batch.
 */
import { tidy } from '#lib/core/number-format.js';

/** Outside pressure (kPa). */
export const ATM = 101.325;

/**
 * Vapour pressure of water (kPa), Antoine equation for 1 – 100 °C.
 * @param {number} t °C
 */
export function waterPressure(t) {
  return (10 ** (8.07131 - 1730.63 / (233.426 + t)) * ATM) / 760;
}

/**
 * @typedef {object} Material
 * @property {string} id
 * @property {string} name raw material
 * @property {string} oil name of the oil
 * @property {string} main main component of the oil
 * @property {number} boil normal boiling point of the main component (°C)
 * @property {number} heat its enthalpy of vaporisation (J/mol)
 * @property {number} content oil share of the fresh material (by mass)
 * @property {number} density oil density (g/mL)
 */

/** @type {Material[]} */
export const MATERIALS = [
  {
    id: 'sa',
    name: 'Sả chanh',
    oil: 'tinh dầu sả chanh',
    main: 'citral',
    boil: 229,
    heat: 55000,
    content: 0.005,
    density: 0.89,
  },
  {
    id: 'buoi',
    name: 'Vỏ bưởi',
    oil: 'tinh dầu bưởi',
    main: 'limonene',
    boil: 176,
    heat: 39500,
    content: 0.008,
    density: 0.85,
  },
];

/**
 * Vapour pressure (kPa) of an oil's main component.
 * @param {Material} m
 * @param {number} t °C
 */
export function oilPressure(m, t) {
  const k = 8.314;
  return ATM * Math.exp((-m.heat / k) * (1 / (t + 273.15) - 1 / (m.boil + 273.15)));
}

/**
 * Temperature (°C) at which water and the oil boil together at 1 atm,
 * rounded to tenths.
 * @param {Material} m
 */
export function boilingTogether(m) {
  let lo = 50;
  let hi = 100;
  for (let i = 0; i < 50; i += 1) {
    const mid = (lo + hi) / 2;
    if (waterPressure(mid) + oilPressure(m, mid) > ATM) hi = mid;
    else lo = mid;
  }
  return tidy(Math.round(lo * 10) / 10, 1);
}

/**
 * @typedef {object} Part
 * @property {string} id
 * @property {string} name
 * @property {string} role what it does in the set-up
 */

/**
 * The set-up in the order the steam flows through it.
 * @type {Part[]}
 */
export const PARTS = [
  {
    id: 'cap-hoi',
    name: 'Bình cấp hơi nước',
    role: 'đun sôi nước, tạo hơi nước',
  },
  {
    id: 'nguyen-lieu',
    name: 'Bình cất chứa nguyên liệu',
    role: 'hơi nước sục qua nguyên liệu, cuốn theo tinh dầu',
  },
  {
    id: 'sinh-han',
    name: 'Ống sinh hàn',
    role: 'làm lạnh, ngưng tụ hơi nước và hơi tinh dầu',
  },
  {
    id: 'binh-hung',
    name: 'Bình hứng',
    role: 'chứa hỗn hợp nước và tinh dầu ngưng tụ',
  },
];

/**
 * Place the next part of the set-up.
 * @param {string[]} placed ids already in place, in order
 * @param {string} id part the learner picks
 * @returns {{ placed: string[], ok: boolean, message: string }}
 */
export function placePart(placed, id) {
  const next = PARTS[placed.length];
  const part = PARTS.find((p) => p.id === id);
  if (!next || !part || placed.includes(id)) return { placed, ok: false, message: '' };
  if (part.id !== next.id) {
    const before = PARTS[placed.length - 1];
    return {
      placed,
      ok: false,
      message: before
        ? `Chưa đúng: ${part.name.toLowerCase()} không nối ngay sau ${before.name.toLowerCase()}. Hãy đi theo đường của hơi nước.`
        : `Chưa đúng: hơi nước phải được tạo ra trước, nên bộ dụng cụ bắt đầu từ nơi đun sôi nước.`,
    };
  }
  const now = [...placed, id];
  return {
    placed: now,
    ok: true,
    message:
      now.length === PARTS.length
        ? `Đã lắp xong: ${part.name.toLowerCase()} ${part.role}. Bây giờ có thể vận hành.`
        : `Đúng: ${part.name.toLowerCase()} ${part.role}.`,
  };
}

/** How the material is cut before distilling. */
export const CUTS = {
  dai: { label: 'Để đoạn dài', time: 90, kept: 1 },
  'cat-nho': { label: 'Cắt đoạn 1 cm', time: 25, kept: 1 },
  'gia-nat': { label: 'Giã nát', time: 15, kept: 0.7 },
};

/** Which way the cooling water runs through the condenser jacket. */
export const COOLANT = {
  'duoi-len': { label: 'Vào dưới, ra trên', caught: 1 },
  'tren-xuong': { label: 'Vào trên, ra dưới', caught: 0.6 },
};

/** Mass of fresh material in the still (g). */
export const LOAD = 200;

/** Condensed water collected per minute when nothing escapes (mL). */
export const WATER_RATE = 4;

/** @typedef {keyof typeof CUTS} Cut */
/** @typedef {keyof typeof COOLANT} Coolant */

/**
 * @typedef {object} RunResult
 * @property {number} temp temperature of the vapour (°C)
 * @property {number} waterMl water collected
 * @property {number} oilMl oil collected
 * @property {number} oilG oil collected (g)
 * @property {number} yieldPct oil mass per fresh material mass (%)
 * @property {number} recovered share of the oil in the plant collected so far
 */

/**
 * Run the distillation for some minutes.
 * @param {{ material: Material, cut: Cut, coolant: Coolant, minutes: number }} setup
 * @returns {RunResult}
 */
export function runDistillation({ material, cut, coolant, minutes }) {
  const c = CUTS[cut];
  const caught = COOLANT[coolant].caught;
  const released = c.kept * (1 - Math.exp(-minutes / c.time));
  const recovered = released * caught;
  const oilG = LOAD * material.content * recovered;
  return {
    temp: minutes > 0 ? boilingTogether(material) : 25,
    waterMl: tidy(WATER_RATE * minutes * caught, 6),
    oilMl: tidy(oilG / material.density, 6),
    oilG: tidy(oilG, 6),
    yieldPct: tidy((oilG / LOAD) * 100, 6),
    recovered: tidy(recovered, 6),
  };
}

/**
 * What the learner should notice about the current run.
 * @param {{ material: Material, cut: Cut, coolant: Coolant, minutes: number }} setup
 * @returns {{ ok: boolean, text: string }}
 */
export function runAdvice(setup) {
  const r = runDistillation(setup);
  if (setup.minutes === 0) {
    return { ok: false, text: 'Kéo thanh thời gian để bắt đầu đun và chưng cất.' };
  }
  if (setup.coolant === 'tren-xuong') {
    return {
      ok: false,
      text: 'Nước làm lạnh vào từ trên chảy xuống nhanh, ống sinh hàn không đầy nước nên một phần hơi không ngưng tụ, bay mất cùng mùi tinh dầu. Cho nước vào ở đầu dưới, ra ở đầu trên.',
    };
  }
  if (setup.cut === 'gia-nat') {
    return {
      ok: false,
      text: 'Giã nát làm tinh dầu bay hơi ngay khi giã và nguyên liệu bết lại, hơi nước khó đi qua: lượng tinh dầu thu được giảm.',
    };
  }
  if (setup.cut === 'dai') {
    return {
      ok: false,
      text: 'Đoạn dài có ít bề mặt tiếp xúc, tinh dầu trong mô thoát ra chậm: phải chưng cất rất lâu mới thu được hết.',
    };
  }
  if (r.recovered < 0.9) {
    return {
      ok: false,
      text: 'Tinh dầu vẫn đang được hơi nước cuốn sang. Chưng cất thêm cho đến khi lớp tinh dầu ở bình hứng gần như không dày thêm.',
    };
  }
  return {
    ok: true,
    text: 'Đã thu được gần hết tinh dầu. Hỗn hợp ở bình hứng tách thành hai lớp: tinh dầu nhẹ hơn ở trên, nước ở dưới; dùng phễu chiết để tách.',
  };
}
