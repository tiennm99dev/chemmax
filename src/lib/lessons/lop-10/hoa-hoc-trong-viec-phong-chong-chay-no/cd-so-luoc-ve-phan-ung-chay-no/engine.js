/**
 * The fire triangle: a fire keeps burning only while it has a fuel, an oxidiser
 * and enough heat. Air must also hold more than 14% oxygen by volume for most
 * ordinary fuels, which is the book's sufficient condition.
 */

/** Oxygen in ordinary air, in % by volume. */
export const OXYGEN_AIR = 21;
/** The share of oxygen at or below which ordinary fuels stop burning, in % by volume. */
export const OXYGEN_LIMIT = 14;

/** @typedef {'fuel' | 'oxidiser' | 'heat'} Side */
/** @typedef {{ fuel: boolean, oxidiser: boolean, heat: boolean, oxygen: number }} FireInput */

/** @type {Record<Side, string>} */
export const SIDE_NAMES = {
  fuel: 'chất cháy',
  oxidiser: 'chất oxi hoá',
  heat: 'nguồn nhiệt',
};

/**
 * Whether the fire burns, and why not when it does not.
 * @param {FireInput} input
 * @returns {{ burning: boolean, missing: Side[], thinAir: boolean }}
 */
export function fireState({ fuel, oxidiser, heat, oxygen }) {
  /** @type {Side[]} */
  const missing = [];
  if (!fuel) missing.push('fuel');
  if (!oxidiser) missing.push('oxidiser');
  if (!heat) missing.push('heat');
  const thinAir = oxidiser && oxygen <= OXYGEN_LIMIT;
  return { burning: missing.length === 0 && !thinAir, missing, thinAir };
}

/**
 * The sentence the widget shows for one state of the triangle.
 * @param {FireInput} input
 */
export function fireMessage(input) {
  const { burning, missing, thinAir } = fireState(input);
  if (burning) return 'Lửa đang cháy: có đủ chất cháy, chất oxi hoá và nguồn nhiệt.';
  if (missing.length > 0) {
    const names = missing.map((side) => SIDE_NAMES[side]).join(', ');
    return `Lửa tắt: thiếu ${names}. Chỉ cần mất một yếu tố là phản ứng cháy dừng lại.`;
  }
  if (thinAir) {
    return `Lửa tắt: còn đủ ba yếu tố nhưng oxygen không vượt quá ${OXYGEN_LIMIT}% thể tích, chưa thoả điều kiện đủ với chất cháy thông thường.`;
  }
  return 'Lửa tắt.';
}

/**
 * Everyday ways of putting a fire out, each by the side of the triangle it takes away.
 * @type {Array<{ id: string, action: string, side: Side, why: string }>}
 */
export const SCENARIOS = [
  {
    id: 'lid',
    action: 'Đậy nắp đèn cồn',
    side: 'oxidiser',
    why: 'Nắp ngăn không khí đi vào, ngọn lửa hết oxygen.',
  },
  {
    id: 'valve',
    action: 'Khoá van bình gas',
    side: 'fuel',
    why: 'Khoá van làm khí gas không còn đi tới ngọn lửa.',
  },
  {
    id: 'water',
    action: 'Phun nước vào đống củi đang cháy',
    side: 'heat',
    why: 'Nước hấp thụ nhiều nhiệt khi nóng lên và hoá hơi, làm củi nguội dưới nhiệt độ cháy.',
  },
  {
    id: 'firebreak',
    action: 'Phát quang một dải cây để ngăn cháy rừng',
    side: 'fuel',
    why: 'Dải đất trống không còn cây cỏ để lửa cháy lan sang.',
  },
  {
    id: 'blanket',
    action: 'Trùm chăn ướt lên chảo dầu đang cháy',
    side: 'oxidiser',
    why: 'Chăn ngăn không khí tiếp xúc với dầu đang cháy.',
  },
];
