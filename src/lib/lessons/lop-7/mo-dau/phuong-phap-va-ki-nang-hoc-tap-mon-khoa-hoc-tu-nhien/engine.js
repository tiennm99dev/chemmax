/**
 * Data and checking for the inquiry-method widget: the five steps of the
 * KNTT "phương pháp tìm hiểu tự nhiên", several investigations told as five
 * shuffled cards (one per step), and the loop back to step 2 when the test
 * does not support the prediction.
 */

/**
 * @typedef {{ name: string, role: string }} Step
 * @typedef {{ text: string, ok: boolean, why: string }} NextMove
 * @typedef {{
 *   id: string,
 *   title: string,
 *   cards: [string, string, string, string, string],
 *   mismatch: string,
 *   moves: NextMove[],
 * }} Scenario
 * `cards[k]` is the card of step k + 1. `mismatch` describes a step-4 result
 * that does not fit the prediction; `moves` are what one could do next.
 */

/** The five steps, in order, with the job each one does. */
/** @type {Step[]} */
export const STEPS = [
  {
    name: 'Đề xuất vấn đề cần tìm hiểu',
    role: 'quan sát và đặt câu hỏi cho vấn đề nảy sinh',
  },
  {
    name: 'Đưa ra dự đoán khoa học để giải quyết vấn đề',
    role: 'một câu trả lời có thể có cho câu hỏi, chưa được kiểm tra',
  },
  {
    name: 'Lập kế hoạch kiểm tra dự đoán',
    role: 'chọn cách kiểm tra: chuẩn bị dụng cụ, hoá chất và các bước làm',
  },
  {
    name: 'Thực hiện kế hoạch kiểm tra dự đoán',
    role: 'làm thí nghiệm, quan sát, ghi kết quả rồi so sánh với dự đoán',
  },
  {
    name: 'Viết báo cáo, thảo luận và trình bày báo cáo',
    role: 'ghi lại cả quá trình và kết luận để trình bày, thảo luận',
  },
];

const BACK_TO_PREDICTION =
  'Đúng. Kết quả không phù hợp với dự đoán thì quay lại bước 2: đưa ra dự đoán mới rồi kiểm tra lại.';
const NOT_REPORT_YET =
  'Chưa được. Dự đoán chưa được kết quả thí nghiệm ủng hộ thì chưa thể kết luận và viết báo cáo.';

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'hoa-tan',
    title: 'Sự hoà tan của chất rắn',
    cards: [
      'Muối ăn, đường, đá vôi (dạng bột) có tan trong nước không?',
      'Dự đoán: muối ăn và đường tan trong nước, đá vôi không tan.',
      'Chuẩn bị ba ống nghiệm, nước, ba chất rắn; định rót cùng khoảng 5 mL nước vào mỗi ống và thêm khoảng 1 g mỗi chất.',
      'Lắc đều mỗi ống khoảng 1 – 2 phút, quan sát, ghi kết quả và so sánh với dự đoán.',
      'Viết báo cáo thí nghiệm, trình bày kết luận và thảo luận với cả lớp.',
    ],
    mismatch:
      'Giả sử bạn Minh dự đoán "cả ba chất đều tan", nhưng ở bước 4 thấy ống đá vôi vẫn đục, bột lắng xuống đáy.',
    moves: [
      { text: 'Quay lại bước 2, đưa ra dự đoán mới', ok: true, why: BACK_TO_PREDICTION },
      { text: 'Vẫn viết báo cáo: cả ba chất đều tan', ok: false, why: NOT_REPORT_YET },
      {
        text: 'Bỏ ống đá vôi đi cho kết quả khớp',
        ok: false,
        why: 'Không được. Bỏ đi số liệu trái với dự đoán là làm sai lệch kết quả; phải ghi lại trung thực.',
      },
    ],
  },
  {
    id: 'nhiet-do',
    title: 'Độ tan của muối ăn và nhiệt độ',
    cards: [
      'Ở nhiệt độ cao hay thấp, muối ăn tan trong nước nhiều hơn?',
      'Dự đoán: nước càng nóng thì muối ăn tan càng nhiều.',
      'Chuẩn bị ba cốc thuỷ tinh với lượng nước bằng nhau: nước lạnh, nước ở nhiệt độ phòng, nước nóng; định cho vào mỗi cốc cùng một lượng muối.',
      'Cho muối vào ba cốc, khuấy như nhau, quan sát cốc nào còn muối chưa tan và ghi lại.',
      'Viết báo cáo: độ tan của muối ăn tăng khi nhiệt độ tăng; trình bày trước lớp.',
    ],
    mismatch:
      'Giả sử nhóm em dự đoán "nước lạnh hoà tan được nhiều muối hơn", nhưng ở bước 4 thấy cốc nước lạnh còn nhiều muối chưa tan nhất.',
    moves: [
      { text: 'Quay lại bước 2, đưa ra dự đoán mới', ok: true, why: BACK_TO_PREDICTION },
      { text: 'Viết báo cáo theo dự đoán ban đầu', ok: false, why: NOT_REPORT_YET },
      {
        text: 'Quay lại bước 1, đổi sang tìm hiểu vấn đề khác',
        ok: false,
        why: 'Chưa cần. Vấn đề vẫn đúng và còn cần trả lời; chỉ dự đoán là chưa phù hợp, nên quay lại bước 2.',
      },
    ],
  },
  {
    id: 'cay-dau',
    title: 'Ánh sáng và cây đậu',
    cards: [
      'Cây đậu non có cần ánh sáng để lớn lên xanh tốt không?',
      'Dự đoán: cây đậu thiếu ánh sáng sẽ còi cọc, lá vàng.',
      'Gieo hai chậu đậu giống nhau, cùng đất, cùng lượng nước; định đặt một chậu cạnh cửa sổ, một chậu trong hộp tối.',
      'Đặt hai chậu, tưới như nhau, đo chiều cao và ghi màu lá mỗi ngày trong 7 ngày.',
      'Lập bảng số liệu, viết báo cáo kết luận về vai trò của ánh sáng và trình bày với nhóm.',
    ],
    mismatch:
      'Giả sử ở bước 4 chậu trong hộp tối có cây cao hơn (nhưng lá vàng, thân mảnh), không giống dự đoán "cây thiếu sáng sẽ thấp hơn".',
    moves: [
      { text: 'Quay lại bước 2, sửa lại dự đoán', ok: true, why: BACK_TO_PREDICTION },
      { text: 'Kết luận ngay: cây không cần ánh sáng', ok: false, why: NOT_REPORT_YET },
      {
        text: 'Đo lại cho đến khi cây trong tối thấp hơn',
        ok: false,
        why: 'Không được. Đo lại để kiểm tra là tốt, nhưng cố đo cho khớp dự đoán là không trung thực.',
      },
    ],
  },
];

/**
 * A mixed starting order of the five cards: card indices, never already in
 * order, the same for every visitor of a given scenario.
 * @param {number} seed
 * @returns {number[]}
 */
export function startOrder(seed) {
  const orders = [
    [3, 0, 4, 2, 1],
    [2, 4, 1, 0, 3],
    [4, 2, 0, 3, 1],
  ];
  return [...orders[((seed % orders.length) + orders.length) % orders.length]];
}

/**
 * Moves the item at position `from` to position `to`, shifting the others.
 * @param {number[]} order
 * @param {number} from
 * @param {number} to
 * @returns {number[]}
 */
export function moveItem(order, from, to) {
  const n = order.length;
  if (from < 0 || from >= n) return [...order];
  const target = Math.max(0, Math.min(n - 1, to));
  const next = [...order];
  const [item] = next.splice(from, 1);
  next.splice(target, 0, item);
  return next;
}

/**
 * Checks an order of cards. For every position: whether it holds the right
 * step, and if not, a nudge saying what that position needs, never which
 * card it is.
 * @param {number[]} order card indices by position
 * @returns {{ solved: boolean, correct: number, slots: Array<{ ok: boolean, hint: string }>, text: string }}
 */
export function checkOrder(order) {
  const slots = order.map((card, pos) => ({
    ok: card === pos,
    hint:
      card === pos
        ? `Bước ${pos + 1}: ${STEPS[pos].name}.`
        : `Vị trí ${pos + 1} cần: ${STEPS[pos].role}.`,
  }));
  const correct = slots.filter((s) => s.ok).length;
  const solved = correct === STEPS.length;
  const text = solved
    ? 'Chính xác! Năm thẻ đã theo đúng thứ tự các bước của phương pháp tìm hiểu tự nhiên.'
    : `${correct}/${STEPS.length} thẻ đúng vị trí. Đọc gợi ý ở các thẻ chưa đúng rồi sắp xếp lại.`;
  return { solved, correct, slots, text };
}
