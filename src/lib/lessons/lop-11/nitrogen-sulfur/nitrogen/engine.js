/**
 * The nitrogen cycle as a diagram: nodes hold nitrogen at some oxidation state
 * and every arrow is one conversion.
 */

/**
 * @typedef {{ id: string, formula: string | null, title: string, sub: string,
 *   ox: number, x: number, y: number }} CycleNode
 * @typedef {{ id: number, from: string, to: string, name: string, agent: string,
 *   equation: string | null, text: string, path: [number, number, number, number] }} CycleStep
 * @typedef {'tang' | 'giam' | 'khong-doi'} Trend
 */

/** @type {CycleNode[]} */
export const NODES = [
  { id: 'n2', formula: 'N2', title: 'N₂', sub: 'khí quyển', ox: 0, x: 180, y: 28 },
  { id: 'no', formula: 'NO', title: 'NO', sub: 'khí', ox: 2, x: 52, y: 110 },
  { id: 'no2', formula: 'NO2', title: 'NO₂', sub: 'khí nâu đỏ', ox: 4, x: 52, y: 190 },
  { id: 'hno3', formula: 'HNO3', title: 'HNO₃', sub: 'trong mưa', ox: 5, x: 52, y: 270 },
  { id: 'no3', formula: 'NO3^-', title: 'NO₃⁻', sub: 'trong đất', ox: 5, x: 170, y: 300 },
  { id: 'nh4', formula: 'NH4^+', title: 'NH₄⁺', sub: 'trong đất', ox: -3, x: 304, y: 120 },
  { id: 'protein', formula: null, title: 'Protein', sub: 'sinh vật', ox: -3, x: 304, y: 240 },
];

/** @type {CycleStep[]} */
export const STEPS = [
  {
    id: 1,
    from: 'n2',
    to: 'no',
    name: 'Sấm sét',
    agent: 'Tia lửa điện trong cơn giông, khoảng $3000\\,^\\circ\\mathrm{C}$',
    equation: 'N2 + O2 ⇌ 2NO',
    text: 'Năng lượng lớn của tia sét phá được liên kết ba bền vững. Ở đây nitrogen thể hiện tính khử.',
    path: [132, 42, 66, 92],
  },
  {
    id: 2,
    from: 'no',
    to: 'no2',
    name: 'Oxi hoá NO',
    agent: 'Oxygen trong không khí, ngay ở nhiệt độ thường',
    equation: '2NO + O2 → 2NO2',
    text: 'Khí NO không màu gặp oxygen hoá thành khí NO₂ màu nâu đỏ.',
    path: [52, 128, 52, 172],
  },
  {
    id: 3,
    from: 'no2',
    to: 'hno3',
    name: 'Tạo nitric acid',
    agent: 'Oxygen và hơi nước trong khí quyển',
    equation: '4NO2 + O2 + 2H2O → 4HNO3',
    text: 'Nitric acid tan trong nước mưa rồi theo mưa rơi xuống đất.',
    path: [52, 208, 52, 252],
  },
  {
    id: 4,
    from: 'hno3',
    to: 'no3',
    name: 'Phân li trong đất',
    agent: 'Nước trong đất',
    equation: 'HNO3 → H^+ + NO3^-',
    text: 'Nitric acid là acid mạnh, phân li hoàn toàn cho ion nitrate. Đây là lí do mưa giông cung cấp đạm cho cây.',
    path: [100, 280, 122, 292],
  },
  {
    id: 5,
    from: 'n2',
    to: 'nh4',
    name: 'Cố định đạm',
    agent: 'Vi khuẩn ở nốt sần cây họ đậu; trong công nghiệp là tổng hợp Haber với xúc tác Fe',
    equation: 'N2 + 3H2 ⇌ 2NH3',
    text: 'Nitrogen thể hiện tính oxi hoá, tạo ammonia. Ammonia tan trong nước đất và phân đạm cho ion ammonium.',
    path: [232, 42, 296, 100],
  },
  {
    id: 6,
    from: 'nh4',
    to: 'no3',
    name: 'Nitrate hoá',
    agent: 'Vi khuẩn nitrate hoá trong đất, cần oxygen',
    equation: null,
    text: 'Vi khuẩn oxi hoá ion ammonium qua nitrite thành nitrate, dạng đạm mà rễ cây hấp thụ nhiều.',
    path: [284, 138, 192, 282],
  },
  {
    id: 7,
    from: 'no3',
    to: 'protein',
    name: 'Cây hấp thụ',
    agent: 'Rễ cây, sau đó chuỗi thức ăn đưa sang động vật',
    equation: null,
    text: 'Cây khử nitrate rồi dùng nitrogen để tạo amino acid và protein. Động vật lấy nitrogen từ thức ăn.',
    path: [218, 296, 262, 258],
  },
  {
    id: 8,
    from: 'protein',
    to: 'nh4',
    name: 'Phân huỷ',
    agent: 'Vi sinh vật phân huỷ xác và chất thải sinh vật',
    equation: null,
    text: 'Nitrogen trong protein trở lại đất ở dạng ion ammonium.',
    path: [304, 222, 304, 138],
  },
  {
    id: 9,
    from: 'no3',
    to: 'n2',
    name: 'Phản nitrate hoá',
    agent: 'Vi khuẩn trong đất ngập nước, thiếu oxygen',
    equation: null,
    text: 'Nitrate bị khử thành khí nitrogen trở về khí quyển, khép kín chu trình.',
    path: [168, 282, 178, 46],
  },
];

/** @param {string} id */
export function node(id) {
  const n = NODES.find((x) => x.id === id);
  if (!n) throw new Error(`Không có nút ${id}`);
  return n;
}

/**
 * How the oxidation state of nitrogen moves along an arrow.
 * @param {CycleStep} step
 * @returns {Trend}
 */
export function trend(step) {
  const change = node(step.to).ox - node(step.from).ox;
  if (change > 0) return 'tang';
  return change < 0 ? 'giam' : 'khong-doi';
}

/**
 * An oxidation state the way the book writes it: +5, −3, 0.
 * @param {number} ox
 */
export function oxText(ox) {
  if (ox > 0) return `+${ox}`;
  return ox < 0 ? `−${-ox}` : '0';
}

/** Share of arrows done, as a sentence. */
export function progressText(/** @type {number} */ done) {
  if (done === STEPS.length) return `Đã mở đủ ${STEPS.length} mũi tên của chu trình.`;
  return `Đã mở ${done}/${STEPS.length} mũi tên.`;
}
