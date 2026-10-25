/**
 * A simple burner model for comparing fuels. Burning `m` kg of a fuel
 * completely gives q·m of heat, where q is the fuel's heat value (năng suất
 * toả nhiệt, the values Vietnamese school tables use), and about c·m kg of
 * carbon dioxide. The air supply changes the outcome: too little air leaves
 * the fuel burning incompletely (less heat, smoke and carbon monoxide); too
 * much air carries part of the heat away; just enough air uses the fuel best.
 */

/**
 * @typedef {{
 *   id: string,
 *   label: string,
 *   state: 'rắn' | 'lỏng' | 'khí',
 *   q: number,
 *   co2: number,
 *   carbon: boolean,
 *   note: string,
 * }} Fuel
 * @typedef {'thieu' | 'vua' | 'thua'} Air
 */

/** Heat values in MJ per kg (1 MJ = 10^6 J); CO2 in kg per kg of fuel. */
/** @type {Fuel[]} */
export const FUELS = [
  {
    id: 'cui',
    label: 'Củi khô',
    state: 'rắn',
    q: 10,
    co2: 1.8,
    carbon: true,
    note: 'Dễ kiếm, tái tạo được nếu trồng lại rừng, nhưng toả ít nhiệt và nhiều khói bụi.',
  },
  {
    id: 'than-da',
    label: 'Than đá',
    state: 'rắn',
    q: 27,
    co2: 2.7,
    carbon: true,
    note: 'Toả nhiều nhiệt hơn củi nhưng nhiều tạp chất, sinh bụi và khí sulfur dioxide gây mưa acid.',
  },
  {
    id: 'dau-hoa',
    label: 'Dầu hoả',
    state: 'lỏng',
    q: 44,
    co2: 3.1,
    carbon: true,
    note: 'Dùng thắp đèn, đun nấu, làm nhiên liệu máy bay (dầu hoả tinh chế).',
  },
  {
    id: 'xang',
    label: 'Xăng',
    state: 'lỏng',
    q: 46,
    co2: 3.1,
    carbon: true,
    note: 'Chạy động cơ xe máy, ô tô; rất dễ bay hơi và dễ cháy, phải để xa lửa.',
  },
  {
    id: 'gas',
    label: 'Khí gas',
    state: 'khí',
    q: 44,
    co2: 3.0,
    carbon: true,
    note: 'Cháy sạch, ít khói, dễ điều chỉnh ngọn lửa; khí gas rò rỉ gặp lửa có thể gây cháy nổ.',
  },
  {
    id: 'hydrogen',
    label: 'Hydrogen',
    state: 'khí',
    q: 140,
    co2: 0,
    carbon: false,
    note: 'Toả rất nhiều nhiệt, khi cháy chỉ tạo ra nước; khó sản xuất và lưu trữ, đang được nghiên cứu cho tương lai.',
  },
];

/** Share of the complete-burning heat that heats the pot, per air supply. */
export const AIR_FACTOR = { thieu: 0.6, vua: 1, thua: 0.8 };

/** @param {string} id */
export function fuel(id) {
  const f = FUELS.find((x) => x.id === id);
  if (!f) throw new Error(`Không có nhiên liệu ${id}`);
  return f;
}

/**
 * Heat (MJ) from burning `m` kg of a fuel completely: Q = q·m.
 * @param {string} id @param {number} m
 */
export function heat(id, m) {
  return fuel(id).q * m;
}

/**
 * Heat (MJ) that reaches the pot with the given air supply.
 * @param {string} id @param {number} m @param {Air} air
 */
export function usefulHeat(id, m, air) {
  return heat(id, m) * AIR_FACTOR[air];
}

/**
 * Carbon dioxide (kg) given off. With too little air part of the carbon
 * leaves as carbon monoxide and soot instead, so less carbon dioxide forms.
 * @param {string} id @param {number} m @param {Air} air
 */
export function carbonDioxide(id, m, air) {
  const full = fuel(id).co2 * m;
  return air === 'thieu' ? full * AIR_FACTOR.thieu : full;
}

/**
 * Whether the flame gives off soot and carbon monoxide: only a fuel that
 * contains carbon, burning with too little air.
 * @param {string} id @param {Air} air
 */
export function smoky(id, air) {
  return air === 'thieu' && fuel(id).carbon;
}

/**
 * Mass (kg) of a fuel that gives `Q` MJ when burned completely: m = Q / q.
 * @param {string} id @param {number} Q
 */
export function massFor(id, Q) {
  return Q / fuel(id).q;
}

/**
 * Carbon dioxide (kg) given off to obtain `Q` MJ by burning a fuel completely.
 * @param {string} id @param {number} Q
 */
export function co2For(id, Q) {
  return massFor(id, Q) * fuel(id).co2;
}

/**
 * The feedback line for one burn.
 * @param {string} id @param {Air} air
 */
export function airAdvice(id, air) {
  const f = fuel(id);
  if (air === 'vua') {
    return `Không khí vừa đủ: ${f.label.toLowerCase()} cháy hoàn toàn, toả nhiều nhiệt nhất và tiết kiệm nhất.`;
  }
  if (air === 'thieu') {
    return f.carbon
      ? `Thiếu không khí: ${f.label.toLowerCase()} cháy không hoàn toàn, toả ít nhiệt, sinh khói đen (muội than) và khí carbon monoxide rất độc. Lãng phí nhiên liệu và nguy hiểm.`
      : 'Thiếu không khí: một phần hydrogen không cháy hết, nhiệt toả ra ít hơn, lãng phí nhiên liệu.';
  }
  return 'Thừa không khí: nhiên liệu cháy hết nhưng không khí thừa làm nguội ngọn lửa, mang bớt nhiệt đi, nên nồi nhận được ít nhiệt hơn.';
}
