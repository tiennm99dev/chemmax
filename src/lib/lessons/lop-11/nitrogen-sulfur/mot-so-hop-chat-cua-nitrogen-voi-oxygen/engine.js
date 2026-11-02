/**
 * Acid rain falling on a lake, and a pond taking up too many nutrients. Acidity
 * follows the carbonate balance: water in contact with air's CO2 has
 * [H⁺]·[HCO3⁻] = 10^−11,2, so pure rain sits at pH 5,6 and any strong acid or any
 * dissolved limestone moves it from there. The numbers are a teaching model.
 */

/** [H⁺]·[HCO3⁻] in (mol/L)² for water open to air: gives pH 5,6 at zero alkalinity. */
const CARBONATE = 10 ** -11.2;
/** Share of the lake's water replaced by runoff each year. */
const TURNOVER = 0.2;
/** Acid added to rain per unit of the NOx slider, in µmol/L. */
const ACID_PER_LEVEL = 1;
/** Alkalinity that added lime gives the runoff, in µmol/L. */
const LIME = 150;

/** Alkalinity the rock under a lake gives its water, in µmol/L. */
export const SOILS = {
  da_voi: { label: 'Đá vôi', alkalinity: 400 },
  granite: { label: 'Đá granite', alkalinity: 40 },
};

/**
 * @param {number} alkalinity in µmol/L; negative means strong acid is left over
 * @returns {number} pH
 */
export function phOf(alkalinity) {
  const a = alkalinity * 1e-6;
  const h = (-a + Math.sqrt(a * a + 4 * CARBONATE)) / 2;
  return -Math.log10(h);
}

/**
 * pH of the rain under this much NOx.
 * @param {number} level the NOx slider, 0 to 100
 */
export function rainPh(level) {
  return phOf(-level * ACID_PER_LEVEL);
}

/** Whether rain of this pH counts as acid rain, by the book's limit. */
export function isAcidRain(/** @type {number} */ ph) {
  return ph < 5.6 - 1e-9;
}

/**
 * pH of the lake after some years of this rain. The water relaxes towards what
 * its runoff brings: the rock's alkalinity less the acid.
 * @param {number} years
 * @param {number} level
 * @param {keyof typeof SOILS} soil
 * @param {boolean} limed
 */
export function lakePh(years, level, soil, limed) {
  const start = SOILS[soil].alkalinity;
  const runoff = start + (limed ? LIME : 0) - level * ACID_PER_LEVEL;
  return phOf(runoff + (start - runoff) * Math.exp(-TURNOVER * years));
}

/**
 * What a lake of this pH looks like.
 * @param {number} ph
 * @returns {{ fish: number, tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function lakeState(ph) {
  if (ph >= 6)
    return { fish: 5, tone: 'ok', text: 'Hồ vẫn khoẻ: cá và sinh vật phát triển bình thường.' };
  if (ph >= 5.5)
    return {
      fish: 3,
      tone: 'info',
      text: 'Hồ bắt đầu bị acid hoá: nhiều loài nhạy cảm và trứng cá suy giảm.',
    };
  if (ph >= 5)
    return { fish: 1, tone: 'warn', text: 'Hồ bị acid hoá nặng: phần lớn cá không sinh sản được.' };
  return { fish: 0, tone: 'warn', text: 'Hồ gần như không còn cá: nước quá chua.' };
}

/** The steps of the rain, each with its equation. */
export const RAIN_STAGES = [
  {
    id: 1,
    label: 'Đốt nhiên liệu',
    equation: 'N2 + O2 ⇌ 2NO',
    text: 'Trong động cơ và lò đốt, nhiệt độ rất cao làm nitrogen kết hợp với oxygen của không khí. Nitrogen có sẵn trong nhiên liệu cũng tạo NOx.',
  },
  {
    id: 2,
    label: 'Trong không khí',
    equation: '2NO + O2 → 2NO2',
    text: 'NO không màu gặp oxygen hoá thành khí NO₂ màu nâu đỏ.',
  },
  {
    id: 3,
    label: 'Trong mây',
    equation: '4NO2 + O2 + 2H2O → 4HNO3',
    text: 'NO₂ cùng oxygen và hơi nước tạo nitric acid, tan trong giọt nước của mây.',
  },
  {
    id: 4,
    label: 'Mưa xuống hồ',
    equation: 'CaCO3 + 2HNO3 → Ca(NO3)2 + CO2↑ + H2O',
    text: 'Acid theo mưa rơi xuống. Đá vôi dưới đáy hồ trung hoà được acid; đá granite gần như không làm được.',
  },
];

/**
 * A pond under this much fertiliser and wastewater.
 * @param {number} load from 0 to 100
 * @param {boolean} treated wastewater treated before it reaches the pond
 * @param {boolean} aerated aeration running
 * @returns {{ algae: number, oxygen: number, fish: number, tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function pond(load, treated, aerated) {
  const nutrients = treated ? load * 0.3 : load;
  const algae = (100 * nutrients * nutrients) / (nutrients * nutrients + 2500);
  const oxygen = Math.max(0, Math.min(9, 8 - algae * 0.0875 + (aerated ? 2.5 : 0)));
  if (oxygen >= 5) {
    return { algae, oxygen, fish: 5, tone: 'ok', text: 'Nước đủ oxygen, tảo ở mức vừa phải.' };
  }
  if (oxygen >= 2) {
    return {
      algae,
      oxygen,
      fish: 2,
      tone: 'info',
      text: 'Tảo phát triển mạnh, che ánh sáng; khi tảo chết và bị phân huỷ, oxygen hoà tan giảm và cá yếu đi.',
    };
  }
  return {
    algae,
    oxygen,
    fish: 0,
    tone: 'warn',
    text: 'Phú dưỡng nặng: tảo dày đặc, thiếu oxygen, cá chết và nước có mùi hôi.',
  };
}
