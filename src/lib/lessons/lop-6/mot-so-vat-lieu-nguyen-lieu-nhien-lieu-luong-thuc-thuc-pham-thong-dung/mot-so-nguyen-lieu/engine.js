/**
 * Chains from a raw material to products. Each chain is a list of nodes
 * joined by steps; the learner opens the steps in order. Before a step's
 * process is shown, the learner predicts it from a few options; the step
 * opens either way, and the prediction is scored.
 */

/**
 * @typedef {{
 *   process: string,
 *   detail: string,
 *   question: string,
 *   options: string[],
 *   answer: number,
 * }} Step
 * @typedef {{ id: string, label: string, source: string, nodes: string[], steps: Step[], use: string }} Chain
 */

/** @type {Chain[]} */
export const CHAINS = [
  {
    id: 'voi',
    label: 'Đá vôi → vôi',
    source: 'Núi đá vôi (Ninh Bình, Thanh Hoá, Hạ Long,...)',
    nodes: ['Đá vôi', 'Vôi sống', 'Vôi tôi'],
    steps: [
      {
        process: 'Nung trong lò vôi',
        detail:
          'Đá vôi (thành phần chính là calcium carbonate) bị phân huỷ ở nhiệt độ cao, khoảng 900 °C, tạo thành vôi sống (calcium oxide) và khí carbon dioxide bay ra.',
        question: 'Làm thế nào để biến đá vôi thành vôi sống?',
        options: ['Ngâm đá vôi trong nước', 'Nung đá vôi ở nhiệt độ cao', 'Đập nhỏ đá vôi'],
        answer: 1,
      },
      {
        process: 'Tôi vôi: cho vôi sống vào nước',
        detail:
          'Vôi sống tác dụng mạnh với nước, toả rất nhiều nhiệt, tạo thành vôi tôi (calcium hydroxide) dạng nhão. Vì toả nhiều nhiệt nên hố vôi đang tôi rất nguy hiểm.',
        question: 'Khi cho vôi sống vào nước, hiện tượng nào xảy ra?',
        options: ['Nước lạnh đi', 'Không có hiện tượng gì', 'Nước sôi lên, toả nhiều nhiệt'],
        answer: 2,
      },
    ],
    use: 'Vôi dùng để xây dựng (vữa), quét tường, khử chua đất trồng trọt, xử lí nước thải và sát trùng chuồng trại.',
  },
  {
    id: 'xi-mang',
    label: 'Đá vôi → xi măng',
    source: 'Đá vôi và đất sét khai thác ở mỏ',
    nodes: ['Đá vôi, đất sét', 'Clinker', 'Xi măng'],
    steps: [
      {
        process: 'Nghiền nhỏ, trộn đều rồi nung trong lò quay',
        detail:
          'Hỗn hợp đá vôi và đất sét được nghiền mịn, trộn với nước thành bùn hoặc để khô, rồi nung ở khoảng 1\u202f400 – 1\u202f500 °C, tạo thành những viên nhỏ cứng gọi là clinker.',
        question: 'Nguyên liệu chính để sản xuất xi măng là gì?',
        options: ['Đá vôi và đất sét', 'Cát và muối ăn', 'Quặng sắt và than'],
        answer: 0,
      },
      {
        process: 'Nghiền clinker với một ít thạch cao',
        detail:
          'Clinker để nguội được nghiền thành bột mịn cùng một ít thạch cao và phụ gia, thu được xi măng. Xi măng trộn với cát, sỏi, nước tạo thành bê tông.',
        question: 'Clinker cứng phải được làm gì để thành xi măng dạng bột?',
        options: ['Hoà tan trong nước', 'Nghiền thành bột mịn', 'Đốt cháy'],
        answer: 1,
      },
    ],
    use: 'Xi măng là vật liệu xây dựng quan trọng: làm vữa, bê tông để xây nhà, cầu, đường.',
  },
  {
    id: 'thep',
    label: 'Quặng sắt → thép',
    source: 'Mỏ quặng sắt (Thái Nguyên, Hà Tĩnh,...)',
    nodes: ['Quặng sắt', 'Gang', 'Thép'],
    steps: [
      {
        process: 'Luyện trong lò cao với than cốc',
        detail:
          'Quặng sắt (như hematite) được tuyển chọn, đưa vào lò cao cùng than cốc và đá vôi. Ở nhiệt độ cao, sắt được tách ra khỏi quặng, nóng chảy và hoà lẫn một ít carbon, thu được gang.',
        question: 'Để lấy sắt ra khỏi quặng sắt, người ta làm gì?',
        options: [
          'Phơi quặng ngoài nắng',
          'Hoà quặng vào nước rồi lọc',
          'Nung quặng ở nhiệt độ rất cao cùng than cốc',
        ],
        answer: 2,
      },
      {
        process: 'Luyện gang thành thép',
        detail:
          'Gang cứng nhưng giòn vì chứa nhiều carbon. Thổi oxygen vào gang nóng chảy để đốt bớt carbon và tạp chất, thu được thép: cứng, dẻo, bền hơn gang.',
        question: 'Vì sao phải luyện gang thành thép?',
        options: [
          'Vì gang giòn; thép bớt carbon nên dẻo và bền hơn',
          'Vì gang không chứa sắt',
          'Vì thép nhẹ hơn nhôm',
        ],
        answer: 0,
      },
    ],
    use: 'Thép dùng làm khung nhà, cầu, đường ray, ô tô, tàu thuyền, dao kéo, đinh.',
  },
  {
    id: 'nhom',
    label: 'Quặng bauxite → nhôm',
    source: 'Mỏ quặng bauxite ở Tây Nguyên (Lâm Đồng, Đắk Nông)',
    nodes: ['Quặng bauxite', 'Aluminium oxide', 'Nhôm'],
    steps: [
      {
        process: 'Làm sạch quặng, tách lấy aluminium oxide',
        detail:
          'Quặng bauxite chứa nhiều aluminium oxide lẫn đất đá, iron oxide. Quặng được nghiền, xử lí bằng hoá chất để loại tạp chất, thu được aluminium oxide dạng bột trắng (alumina).',
        question: 'Quặng bauxite là nguyên liệu để sản xuất kim loại nào?',
        options: ['Sắt', 'Nhôm', 'Đồng'],
        answer: 1,
      },
      {
        process: 'Điện phân nóng chảy',
        detail:
          'Aluminium oxide được làm nóng chảy rồi cho dòng điện rất mạnh chạy qua (điện phân), nhôm tách ra ở dạng lỏng. Quá trình này tốn rất nhiều điện năng, nên tái chế nhôm cũ giúp tiết kiệm nhiều năng lượng.',
        question: 'Bước tách nhôm từ aluminium oxide cần dùng nhiều thứ gì nhất?',
        options: ['Nước', 'Điện năng', 'Ánh sáng'],
        answer: 1,
      },
    ],
    use: 'Nhôm nhẹ, dẫn điện, dẫn nhiệt tốt, ít bị gỉ: làm nồi, xoong, khung cửa, dây điện cao thế, vỏ máy bay, lon nước.',
  },
  {
    id: 'dau-mo',
    label: 'Dầu mỏ → xăng, chất dẻo',
    source: 'Mỏ dầu ngoài khơi (mỏ Bạch Hổ,...)',
    nodes: ['Dầu mỏ', 'Xăng, dầu, khí đốt', 'Chất dẻo, tơ sợi'],
    steps: [
      {
        process: 'Chưng cất dầu mỏ',
        detail:
          'Dầu mỏ là chất lỏng sánh, màu nâu đen, gồm nhiều chất trộn lẫn. Đun nóng dầu mỏ trong tháp chưng cất, các chất lần lượt bay hơi ở nhiệt độ sôi khác nhau và được tách riêng: khí đốt, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường.',
        question: 'Làm thế nào để tách dầu mỏ thành xăng, dầu hoả, dầu diesel?',
        options: [
          'Chưng cất: các chất sôi ở nhiệt độ khác nhau',
          'Lọc qua giấy lọc',
          'Để lắng rồi gạn',
        ],
        answer: 0,
      },
      {
        process: 'Chế biến hoá dầu',
        detail:
          'Một phần sản phẩm chưng cất được chế biến tiếp thành các hoá chất cơ bản, từ đó sản xuất chất dẻo (nhựa), tơ sợi tổng hợp, cao su tổng hợp, phân bón, thuốc trừ sâu, dược phẩm, mĩ phẩm.',
        question: 'Phần lớn nhựa (chất dẻo) ta dùng hằng ngày được sản xuất từ nguyên liệu nào?',
        options: ['Đá vôi', 'Dầu mỏ', 'Quặng sắt'],
        answer: 1,
      },
    ],
    use: 'Dầu mỏ vừa là nguồn nhiên liệu (xăng, dầu, khí đốt) vừa là nguyên liệu cho công nghiệp hoá chất (chất dẻo, tơ sợi, phân bón).',
  },
];

/** @param {string} id */
export function chain(id) {
  const c = CHAINS.find((x) => x.id === id);
  if (!c) throw new Error(`Không có sơ đồ ${id}`);
  return c;
}

/**
 * Whether step `i` can be opened: the first step always can, a later one only
 * once the step before it is open.
 * @param {boolean[]} open @param {number} i
 */
export function canOpen(open, i) {
  return i === 0 || open[i - 1] === true;
}

/**
 * Judge a prediction for step `i` of a chain.
 * @param {string} chainId @param {number} i @param {number} choice
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(chainId, i, choice) {
  const c = chain(chainId);
  const s = c.steps[i];
  const from = c.nodes[i];
  const to = c.nodes[i + 1];
  const head = choice === s.answer ? 'Đúng.' : `Chưa đúng: đáp án là "${s.options[s.answer]}".`;
  return { ok: choice === s.answer, text: `${head} ${from} → ${to}: ${s.process}. ${s.detail}` };
}
