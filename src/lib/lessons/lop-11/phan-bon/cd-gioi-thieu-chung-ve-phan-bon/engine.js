/**
 * The mineral nutrients a plant takes from the soil, grouped the way
 * Vietnamese fertiliser rules group them (đa lượng, trung lượng, vi lượng),
 * with what each one does and how a shortage shows on the plant. Carbon,
 * hydrogen and oxygen come from air and water, so no fertiliser supplies them.
 */

/** @typedef {'da' | 'trung' | 'vi'} NutrientGroup */

/**
 * @typedef {{
 *   symbol: string,
 *   name: string,
 *   group: NutrientGroup,
 *   form: string,
 *   role: string,
 *   lack: string,
 * }} Nutrient
 */

/** @type {Record<NutrientGroup, string>} */
export const GROUP_NAMES = {
  da: 'Đa lượng',
  trung: 'Trung lượng',
  vi: 'Vi lượng',
};

/** @type {Record<NutrientGroup, string>} */
export const GROUP_NOTES = {
  da: 'Cây cần nhiều nhất; phân bón thường ghi hàm lượng theo N, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$.',
  trung: 'Cây cần ít hơn nhóm đa lượng nhưng vẫn khá nhiều.',
  vi: 'Cây cần rất ít, nhưng thiếu hay thừa đều gây hại.',
};

/** @type {Nutrient[]} */
export const NUTRIENTS = [
  {
    symbol: 'N',
    name: 'Nitrogen',
    group: 'da',
    form: '$\\mathrm{NO_3^-}$, $\\mathrm{NH_4^+}$',
    role: 'Có trong protein, nucleic acid và diệp lục; thúc đẩy cây ra thân, lá.',
    lack: 'Lá già vàng đều từ dưới lên, cây còi cọc, chậm lớn.',
  },
  {
    symbol: 'P',
    name: 'Phosphorus',
    group: 'da',
    form: '$\\mathrm{H_2PO_4^-}$, $\\mathrm{HPO_4^{2-}}$',
    role: 'Có trong ATP, nucleic acid, phospholipid; giúp rễ phát triển, cây ra hoa, đậu quả.',
    lack: 'Lá xanh đậm rồi ngả tím đỏ ở lá già, rễ kém, chậm ra hoa.',
  },
  {
    symbol: 'K',
    name: 'Potassium',
    group: 'da',
    form: '$\\mathrm{K^+}$',
    role: 'Điều hoà đóng mở khí khổng, hoạt hoá enzyme, vận chuyển đường; tăng chất lượng nông sản và sức chống chịu.',
    lack: 'Mép lá già vàng rồi cháy khô, thân yếu, dễ đổ.',
  },
  {
    symbol: 'Ca',
    name: 'Calcium',
    group: 'trung',
    form: '$\\mathrm{Ca^{2+}}$',
    role: 'Thành phần của thành tế bào, giúp mô non phân chia bình thường.',
    lack: 'Lá non và đỉnh sinh trưởng biến dạng, chết; quả cà chua thối đáy.',
  },
  {
    symbol: 'Mg',
    name: 'Magnesium',
    group: 'trung',
    form: '$\\mathrm{Mg^{2+}}$',
    role: 'Nguyên tử trung tâm của phân tử diệp lục; hoạt hoá enzyme.',
    lack: 'Lá già vàng ở phần thịt lá giữa các gân, gân lá vẫn xanh.',
  },
  {
    symbol: 'S',
    name: 'Sulfur',
    group: 'trung',
    form: '$\\mathrm{SO_4^{2-}}$',
    role: 'Có trong các amino acid cysteine, methionine và nhiều enzyme.',
    lack: 'Lá non vàng đều, cây nhỏ.',
  },
  {
    symbol: 'Si',
    name: 'Silicon',
    group: 'trung',
    form: '$\\mathrm{H_4SiO_4}$',
    role: 'Làm thân, lá cứng chắc, tăng sức chống đổ và chống sâu bệnh (nhất là ở lúa).',
    lack: 'Thân lá mềm yếu, dễ đổ ngã, dễ nhiễm sâu bệnh.',
  },
  {
    symbol: 'Fe',
    name: 'Iron',
    group: 'vi',
    form: '$\\mathrm{Fe^{2+}}$, $\\mathrm{Fe^{3+}}$',
    role: 'Cần cho tổng hợp diệp lục, có trong các chất vận chuyển electron.',
    lack: 'Lá non vàng giữa các gân lá, gân còn xanh.',
  },
  {
    symbol: 'Zn',
    name: 'Zinc',
    group: 'vi',
    form: '$\\mathrm{Zn^{2+}}$',
    role: 'Hoạt hoá enzyme, cần cho tổng hợp chất kích thích sinh trưởng.',
    lack: 'Lá nhỏ, mọc thành chùm, lóng thân ngắn.',
  },
  {
    symbol: 'B',
    name: 'Boron',
    group: 'vi',
    form: '$\\mathrm{H_3BO_3}$',
    role: 'Cần cho phân chia tế bào, thụ phấn và vận chuyển đường.',
    lack: 'Đỉnh sinh trưởng chết, hoa rụng, quả méo.',
  },
  {
    symbol: 'Cu',
    name: 'Copper',
    group: 'vi',
    form: '$\\mathrm{Cu^{2+}}$',
    role: 'Hoạt hoá enzyme oxi hoá – khử, tham gia quang hợp.',
    lack: 'Lá non héo, xoắn, chóp lá bạc trắng.',
  },
  {
    symbol: 'Mn',
    name: 'Manganese',
    group: 'vi',
    form: '$\\mathrm{Mn^{2+}}$',
    role: 'Tham gia quang phân li nước, hoạt hoá enzyme.',
    lack: 'Lá non vàng giữa gân, có đốm nâu hoại tử.',
  },
  {
    symbol: 'Mo',
    name: 'Molybdenum',
    group: 'vi',
    form: '$\\mathrm{MoO_4^{2-}}$',
    role: 'Có trong enzyme khử nitrate và enzyme cố định nitrogen.',
    lack: 'Lá già vàng nhạt, mép lá cuộn, giống thiếu đạm.',
  },
  {
    symbol: 'Co',
    name: 'Cobalt',
    group: 'vi',
    form: '$\\mathrm{Co^{2+}}$',
    role: 'Cần cho vi khuẩn cố định đạm ở nốt sần cây họ đậu.',
    lack: 'Cây họ đậu ít nốt sần, biểu hiện như thiếu đạm.',
  },
];

/**
 * The nutrient with this symbol.
 * @param {string} symbol
 */
export function nutrient(symbol) {
  const n = NUTRIENTS.find((x) => x.symbol === symbol);
  if (!n) throw new Error(`Unknown nutrient ${symbol}`);
  return n;
}

/**
 * Nutrients of one group, in table order.
 * @param {NutrientGroup} group
 */
export const inGroup = (group) => NUTRIENTS.filter((n) => n.group === group);

/** Symptoms the diagnosis game asks about: each points to exactly one nutrient. */
export const CASES = ['N', 'P', 'K', 'Ca', 'Mg', 'S', 'Fe', 'Zn', 'B'];

/**
 * The order in which the game shows its cases, mixed the same way for every
 * visitor so the round can be discussed in class.
 * @param {number} round 0, 1, 2, ...
 */
export function caseAt(round) {
  const step = 4; // coprime with CASES.length, so every case comes once per cycle
  return CASES[(round * step) % CASES.length];
}

/**
 * Feedback after the learner names `guess` as the nutrient behind `answer`'s symptom.
 * @param {string} answer
 * @param {string} guess
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(answer, guess) {
  const right = nutrient(answer);
  if (guess === answer) {
    return {
      ok: true,
      text: `Đúng, cây thiếu ${right.name} (${right.symbol}, nhóm ${GROUP_NAMES[right.group].toLowerCase()}). Vai trò: ${lowerFirst(right.role)}`,
    };
  }
  const wrong = nutrient(guess);
  return {
    ok: false,
    text: `Chưa đúng. Thiếu ${wrong.name} thì: ${lowerFirst(wrong.lack)} Hãy so lại xem triệu chứng xuất hiện ở lá già hay lá non, ở gân hay giữa các gân.`,
  };
}

/** @param {string} s */
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);
