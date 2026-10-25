/**
 * A balanced plate. Each food is filed under the nutrient group it is richest
 * in; the plate holds a few portions, and a meal is balanced when every group
 * is present in a sensible share: starchy staples and vegetables or fruit
 * make up most of it, protein a smaller part and fat only a little.
 */

/** @typedef {'carb' | 'protein' | 'lipid' | 'vitamin'} Group */
/** @typedef {{ id: string, label: string, group: Group, also: string }} Food */

/** @type {Array<{ id: Group, label: string, role: string, min: number, max: number, color: string }>} */
export const GROUPS = [
  {
    id: 'carb',
    label: 'Chất bột đường (carbohydrate)',
    role: 'cung cấp năng lượng chủ yếu cho cơ thể',
    min: 2,
    max: 3,
    color: '#f59e0b',
  },
  {
    id: 'protein',
    label: 'Chất đạm (protein)',
    role: 'xây dựng, duy trì và phát triển cơ thể',
    min: 1,
    max: 2,
    color: '#ef4444',
  },
  {
    id: 'lipid',
    label: 'Chất béo (lipid)',
    role: 'dự trữ năng lượng và giữ ấm cơ thể',
    min: 1,
    max: 1,
    color: '#a855f7',
  },
  {
    id: 'vitamin',
    label: 'Vitamin và chất khoáng',
    role: 'giúp cơ thể phát triển bình thường, tăng sức đề kháng',
    min: 3,
    max: 4,
    color: '#22c55e',
  },
];

/** Portions the plate holds. */
export const CAPACITY = 8;

/** @type {Food[]} */
export const FOODS = [
  { id: 'com', label: 'Cơm', group: 'carb', also: 'Gạo là lương thực chính, giàu tinh bột.' },
  { id: 'banh-mi', label: 'Bánh mì', group: 'carb', also: 'Làm từ bột mì, giàu tinh bột.' },
  { id: 'khoai-lang', label: 'Khoai lang', group: 'carb', also: 'Giàu tinh bột, có chất xơ.' },
  { id: 'ngo', label: 'Ngô luộc', group: 'carb', also: 'Lương thực giàu tinh bột.' },
  { id: 'thit', label: 'Thịt lợn', group: 'protein', also: 'Giàu protein, có cả chất béo.' },
  { id: 'ca', label: 'Cá', group: 'protein', also: 'Giàu protein, có chất béo tốt.' },
  { id: 'trung', label: 'Trứng', group: 'protein', also: 'Giàu protein; lòng đỏ có chất béo.' },
  {
    id: 'dau-phu',
    label: 'Đậu phụ',
    group: 'protein',
    also: 'Làm từ đậu tương, giàu protein thực vật.',
  },
  { id: 'dau-an', label: 'Dầu ăn', group: 'lipid', also: 'Gần như chỉ có chất béo.' },
  { id: 'lac', label: 'Lạc rang', group: 'lipid', also: 'Giàu chất béo, có cả protein.' },
  {
    id: 'rau-cai',
    label: 'Rau cải',
    group: 'vitamin',
    also: 'Giàu vitamin, chất khoáng và chất xơ.',
  },
  {
    id: 'ca-rot',
    label: 'Cà rốt',
    group: 'vitamin',
    also: 'Giàu chất tạo vitamin A, tốt cho mắt.',
  },
  { id: 'cam', label: 'Cam', group: 'vitamin', also: 'Giàu vitamin C.' },
  {
    id: 'chuoi',
    label: 'Chuối',
    group: 'vitamin',
    also: 'Giàu chất khoáng (potassium), có cả đường.',
  },
];

/** @param {string} id */
export function food(id) {
  const f = FOODS.find((x) => x.id === id);
  if (!f) throw new Error(`Không có thực phẩm ${id}`);
  return f;
}

/**
 * Portions of each group on a plate given as a list of food ids.
 * @param {string[]} plate
 * @returns {Record<Group, number>}
 */
export function counts(plate) {
  /** @type {Record<Group, number>} */
  const n = { carb: 0, protein: 0, lipid: 0, vitamin: 0 };
  for (const id of plate) n[food(id).group] += 1;
  return n;
}

/**
 * Whether one more portion fits on the plate.
 * @param {string[]} plate
 */
export function canAdd(plate) {
  return plate.length < CAPACITY;
}

/**
 * Judge a plate: balanced when each group is within its range.
 * @param {string[]} plate
 * @returns {{ ok: boolean, messages: string[] }}
 */
export function judgePlate(plate) {
  const n = counts(plate);
  /** @type {string[]} */
  const messages = [];
  for (const g of GROUPS) {
    if (n[g.id] < g.min) {
      messages.push(
        n[g.id] === 0
          ? `Thiếu nhóm ${g.label.toLowerCase()}: nhóm này ${g.role}.`
          : `Hơi ít ${g.label.toLowerCase()}: nên có ${rangeText(g.min, g.max)} phần.`,
      );
    } else if (n[g.id] > g.max) {
      messages.push(
        `Quá nhiều ${g.label.toLowerCase()}: chỉ nên có ${rangeText(g.min, g.max)} phần.`,
      );
    }
  }
  if (messages.length === 0) {
    return {
      ok: true,
      messages: [
        'Đĩa ăn cân đối: có đủ bốn nhóm chất dinh dưỡng, nhiều rau quả và lương thực, vừa phải chất đạm, ít chất béo.',
      ],
    };
  }
  return { ok: false, messages };
}

/** @param {number} min @param {number} max */
function rangeText(min, max) {
  return min === max ? `${min}` : `${min} đến ${max}`;
}
