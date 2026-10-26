/**
 * Data and checking for the KHTN 9 opening lesson: a picture game naming the
 * laboratory tools of the book (optics, electromagnetism, substances,
 * chromosomes), the basic chemicals of the school lab sorted into their
 * groups, and the eight parts of a scientific report built in order into a
 * presentation outline.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {'quang' | 'dien-tu' | 'chat' | 'sinh'} ToolGroup
 * @typedef {{ id: string, name: string, group: ToolGroup, use: string, careful: string }} Tool
 * @typedef {'kim-loai' | 'phi-kim' | 'oxide' | 'acid' | 'base' | 'huu-co' | 'chi-thi'} ChemBin
 * @typedef {{ id: string, label: string, bin: ChemBin, why: string }} Chemical
 * @typedef {'tieu-de' | 'tom-tat' | 'gioi-thieu' | 'phuong-phap' | 'ket-qua' | 'thao-luan' | 'ket-luan' | 'tai-lieu'} PartId
 * @typedef {{ id: PartId, name: string, what: string }} ReportPart
 * @typedef {{ id: string, title: string, parts: Record<PartId, string> }} Topic
 */

/** @type {Record<ToolGroup, string>} */
export const TOOL_GROUPS = {
  quang: 'Dụng cụ thí nghiệm quang học',
  'dien-tu': 'Dụng cụ thí nghiệm điện từ',
  chat: 'Dụng cụ thí nghiệm về chất và sự biến đổi chất',
  sinh: 'Dụng cụ quan sát nhiễm sắc thể',
};

/** @type {Tool[]} */
export const TOOLS = [
  {
    id: 'nguon-laser',
    name: 'Nguồn sáng laser',
    group: 'quang',
    use: 'Tạo các tia sáng hẹp, rõ nét để nghiên cứu đường truyền của ánh sáng; mỗi tia được bật, tắt bằng một công tắc trên đèn.',
    careful: 'Không chiếu tia laser vào mắt mình hay mắt người khác.',
  },
  {
    id: 'ban-ban-tru',
    name: 'Bản bán trụ',
    group: 'quang',
    use: 'Khối thuỷ tinh trong suốt hình nửa trụ, dùng để nghiên cứu sự khúc xạ ánh sáng và phản xạ toàn phần.',
    careful:
      'Cầm nhẹ tay, không làm xước hay vỡ mặt thuỷ tinh; đặt đúng tâm bản vào tâm bảng chia độ.',
  },
  {
    id: 'bang-chia-do',
    name: 'Bảng chia độ',
    group: 'quang',
    use: 'Đọc giá trị các góc (góc tới, góc khúc xạ, góc phản xạ) khi nghiên cứu khúc xạ ánh sáng và phản xạ toàn phần.',
    careful: 'Đặt mắt nhìn thẳng góc với mặt bảng khi đọc số đo góc.',
  },
  {
    id: 'thau-kinh-hoi-tu',
    name: 'Thấu kính hội tụ',
    group: 'quang',
    use: 'Thấu kính có phần rìa mỏng hơn phần giữa; dùng để tìm hiểu tính chất ảnh của vật tạo bởi thấu kính.',
    careful: 'Cầm thấu kính ở phần rìa, không chạm tay vào mặt kính.',
  },
  {
    id: 'thau-kinh-phan-ki',
    name: 'Thấu kính phân kì',
    group: 'quang',
    use: 'Thấu kính có phần rìa dày hơn phần giữa; dùng để tìm hiểu tính chất ảnh của vật tạo bởi thấu kính.',
    careful: 'Cầm thấu kính ở phần rìa, không chạm tay vào mặt kính.',
  },
  {
    id: 'gia-quang-hoc',
    name: 'Giá quang học đồng trục',
    group: 'quang',
    use: 'Đặt đèn, vật (khe hình chữ F), thấu kính và màn chắn trên cùng một trục để đo khoảng cách và quan sát ảnh.',
    careful: 'Lắp các dụng cụ sao cho tâm của chúng nằm trên cùng một đường thẳng.',
  },
  {
    id: 'dien-ke',
    name: 'Điện kế',
    group: 'dien-tu',
    use: 'Phát hiện dòng điện cảm ứng; vạch số 0 ở giữa thang đo nên kim lệch sang hai phía cho biết chiều dòng điện.',
    careful: 'Chỉ dùng cho dòng điện rất nhỏ; không mắc trực tiếp vào nguồn điện.',
  },
  {
    id: 'dong-ho-da-nang',
    name: 'Đồng hồ đo điện đa năng',
    group: 'dien-tu',
    use: 'Đo các đại lượng như cường độ dòng điện I, hiệu điện thế U, điện trở R... trong mạch điện một chiều và xoay chiều.',
    careful:
      'Chọn đúng chức năng và thang đo trước khi đo; không đo điện trở khi mạch đang có điện.',
  },
  {
    id: 'cuon-day-led',
    name: 'Cuộn dây có hai đèn LED',
    group: 'dien-tu',
    use: 'Cuộn dây dẫn mắc với hai đèn LED song song, ngược cực; đèn nào sáng cho biết có dòng điện cảm ứng và chiều của nó.',
    careful: 'Đưa nam châm vào, ra cuộn dây nhẹ nhàng, không va đập làm hỏng đèn.',
  },
  {
    id: 'nam-cham',
    name: 'Nam châm thẳng',
    group: 'dien-tu',
    use: 'Tạo từ trường; đưa nam châm lại gần hoặc ra xa cuộn dây để tạo ra dòng điện cảm ứng.',
    careful: 'Không để nam châm rơi, va đập hay để gần thiết bị điện tử.',
  },
  {
    id: 'binh-cau',
    name: 'Bình cầu',
    group: 'chat',
    use: 'Đựng dung dịch, thực hiện phản ứng và đun nóng hoá chất với lượng lớn hơn ống nghiệm.',
    careful: 'Làm bằng thuỷ tinh, dễ vỡ: cầm nắm cẩn thận, kẹp cổ bình vào giá khi đun.',
  },
  {
    id: 'pheu-chiet',
    name: 'Phễu chiết',
    group: 'chat',
    use: 'Tách hai chất lỏng không hoà tan vào nhau, ví dụ dầu ăn và nước.',
    careful:
      'Mở nắp trên trước khi mở khoá để chất lỏng chảy đều; khoá van khi lớp dưới vừa chảy hết.',
  },
  {
    id: 'luoi-tan-nhiet',
    name: 'Lưới tản nhiệt',
    group: 'chat',
    use: 'Đặt giữa ngọn lửa và đáy cốc, bình thuỷ tinh khi đun để nhiệt phân bố đều.',
    careful: 'Không đun trực tiếp cốc thuỷ tinh trên ngọn lửa vì cốc dễ nứt, vỡ.',
  },
  {
    id: 'gia-thi-nghiem',
    name: 'Giá thí nghiệm (giá sắt)',
    group: 'chat',
    use: 'Có kẹp để giữ cố định ống nghiệm, bình cầu, phễu khi lắp dụng cụ thí nghiệm.',
    careful: 'Đặt giá trên mặt bàn phẳng, vặn chặt kẹp nhưng không quá mạnh làm vỡ thuỷ tinh.',
  },
  {
    id: 'ong-dong',
    name: 'Ống đong',
    group: 'chat',
    use: 'Đong một thể tích chất lỏng xác định.',
    careful: 'Đặt ống thẳng đứng, mắt nhìn ngang mực chất lỏng khi đọc vạch chia.',
  },
  {
    id: 'kinh-hien-vi',
    name: 'Kính hiển vi',
    group: 'sinh',
    use: 'Phóng to ảnh của vật rất nhỏ như tế bào, nhiễm sắc thể để quan sát.',
    careful:
      'Quan sát từ vật kính có độ phóng đại nhỏ đến lớn; ở độ phóng đại 100x dùng dầu soi kính hiển vi.',
  },
  {
    id: 'tieu-ban',
    name: 'Tiêu bản cố định nhiễm sắc thể',
    group: 'sinh',
    use: 'Lam kính có mẫu tế bào đã nhuộm, giữ cố định để quan sát hình dạng nhiễm sắc thể dưới kính hiển vi.',
    careful: 'Cầm tiêu bản ở hai mép, không chạm tay vào phần có mẫu vật.',
  },
];

/**
 * @param {string} id
 * @returns {Tool | undefined}
 */
export function toolById(id) {
  return TOOLS.find((t) => t.id === id);
}

/**
 * The order tools are shown in one round of the picture game.
 * @param {number} seed
 * @returns {string[]}
 */
export function toolOrder(seed) {
  return shuffle(
    rng(seed),
    TOOLS.map((t) => t.id),
  );
}

/**
 * Four names to choose from for one tool: the right one, distractors from the
 * same group first (they look alike), then from other groups.
 * @param {string} toolId
 * @param {number} seed
 * @returns {string[]}
 */
export function roundOptions(toolId, seed) {
  const tool = toolById(toolId);
  if (!tool) return [];
  const rand = rng(seed);
  const same = shuffle(
    rand,
    TOOLS.filter((t) => t.group === tool.group && t.id !== toolId),
  );
  const other = shuffle(
    rand,
    TOOLS.filter((t) => t.group !== tool.group),
  );
  const distractors = [...same.slice(0, 2), ...other].slice(0, 3);
  return shuffle(rand, [tool, ...distractors]).map((t) => t.id);
}

/**
 * Checks a name picked for the tool on the picture.
 * @param {string} toolId
 * @param {string} pickedId
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeTool(toolId, pickedId) {
  const tool = toolById(toolId);
  const picked = toolById(pickedId);
  if (!tool || !picked) return { ok: false, text: '' };
  if (toolId === pickedId) {
    return { ok: true, text: `Đúng: ${tool.name}. ${tool.use}` };
  }
  return {
    ok: false,
    text: `Chưa đúng. ${picked.name}: ${lowerFirst(picked.use)} Hãy nhìn kĩ hình và chọn lại.`,
  };
}

/** @param {string} s */
function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * Tools named right on the first pick.
 * @param {Record<string, string>} firstPicks tool id to the first name picked
 */
export function firstTryScore(firstPicks) {
  return TOOLS.filter((t) => firstPicks[t.id] === t.id).length;
}

/** @type {Array<{ id: ChemBin, label: string }>} */
export const CHEM_BINS = [
  { id: 'kim-loai', label: 'Kim loại' },
  { id: 'phi-kim', label: 'Phi kim' },
  { id: 'oxide', label: 'Oxide' },
  { id: 'acid', label: 'Acid' },
  { id: 'base', label: 'Base' },
  { id: 'huu-co', label: 'Chất hữu cơ' },
  { id: 'chi-thi', label: 'Chất chỉ thị' },
];

/** @type {Chemical[]} */
export const CHEMICALS = [
  {
    id: 'na',
    label: 'Na (sodium)',
    bin: 'kim-loai',
    why: 'Sodium là kim loại rất mạnh, được ngâm trong dầu hoả để không tác dụng với oxygen và hơi nước trong không khí.',
  },
  {
    id: 'fe',
    label: 'Fe (iron)',
    bin: 'kim-loai',
    why: 'Sắt (iron) là kim loại, thường dùng ở dạng đinh, bột hoặc dây.',
  },
  {
    id: 'cu',
    label: 'Cu (copper)',
    bin: 'kim-loai',
    why: 'Đồng (copper) là kim loại, thường dùng ở dạng dây hoặc lá.',
  },
  {
    id: 's',
    label: 'S (sulfur)',
    bin: 'phi-kim',
    why: 'Lưu huỳnh (sulfur) là phi kim, chất rắn màu vàng.',
  },
  {
    id: 'i2',
    label: 'I₂ (iodine)',
    bin: 'phi-kim',
    why: 'Iodine là phi kim, tinh thể màu tím đen, dễ thăng hoa nên phải đậy kín lọ.',
  },
  {
    id: 'cuo',
    label: 'CuO (copper(II) oxide)',
    bin: 'oxide',
    why: 'CuO gồm kim loại copper liên kết với oxygen, là một oxide.',
  },
  {
    id: 'cao',
    label: 'CaO (calcium oxide)',
    bin: 'oxide',
    why: 'CaO (vôi sống) gồm calcium liên kết với oxygen, là một oxide.',
  },
  {
    id: 'mno2',
    label: 'MnO₂ (manganese dioxide)',
    bin: 'oxide',
    why: 'MnO₂ gồm manganese liên kết với oxygen, là một oxide.',
  },
  {
    id: 'hcl',
    label: 'HCl (hydrochloric acid)',
    bin: 'acid',
    why: 'Dung dịch HCl là acid: phân tử có nguyên tử H liên kết với gốc acid.',
  },
  {
    id: 'h2so4',
    label: 'H₂SO₄ (sulfuric acid)',
    bin: 'acid',
    why: 'H₂SO₄ là acid; acid đặc rất nguy hiểm, phải đeo găng tay, kính bảo hộ khi dùng.',
  },
  {
    id: 'naoh',
    label: 'NaOH (sodium hydroxide)',
    bin: 'base',
    why: 'NaOH là base: phân tử có nguyên tử kim loại liên kết với nhóm OH.',
  },
  {
    id: 'nh3',
    label: 'NH₃ (dung dịch ammonia)',
    bin: 'base',
    why: 'Dung dịch ammonia có tính base, làm phenolphthalein chuyển màu hồng; sách xếp NH₃ vào nhóm base.',
  },
  {
    id: 'c2h5oh',
    label: 'C₂H₅OH (ethylic alcohol)',
    bin: 'huu-co',
    why: 'Ethylic alcohol (cồn) là chất hữu cơ, dễ cháy nên để xa nguồn lửa.',
  },
  {
    id: 'c6h12o6',
    label: 'C₆H₁₂O₆ (glucose)',
    bin: 'huu-co',
    why: 'Glucose là chất hữu cơ (một loại đường).',
  },
  {
    id: 'giay-ph',
    label: 'Giấy pH',
    bin: 'chi-thi',
    why: 'Giấy pH là chất chỉ thị: đổi màu theo pH của dung dịch.',
  },
  {
    id: 'phenolphthalein',
    label: 'Phenolphthalein',
    bin: 'chi-thi',
    why: 'Phenolphthalein là chất chỉ thị: không màu trong acid và trung tính, hồng trong dung dịch base.',
  },
];

/** @type {ReportPart[]} */
export const REPORT_PARTS = [
  {
    id: 'tieu-de',
    name: 'Tiêu đề',
    what: 'Ngắn gọn, nêu đúng vấn đề nghiên cứu; tên tác giả viết ngay dưới tiêu đề.',
  },
  {
    id: 'tom-tat',
    name: 'Tóm tắt',
    what: 'Vài câu nêu mục tiêu, cách làm và kết quả chính của nghiên cứu.',
  },
  {
    id: 'gioi-thieu',
    name: 'Giới thiệu',
    what: 'Vấn đề nghiên cứu là gì, vì sao cần tìm hiểu và mục tiêu cần đạt.',
  },
  {
    id: 'phuong-phap',
    name: 'Phương pháp',
    what: 'Dụng cụ, hoá chất, cách bố trí thí nghiệm và cách thu thập số liệu.',
  },
  {
    id: 'ket-qua',
    name: 'Kết quả',
    what: 'Số liệu thu được, trình bày bằng bảng, hình ảnh, biểu đồ, đồ thị.',
  },
  {
    id: 'thao-luan',
    name: 'Thảo luận',
    what: 'Phân tích, giải thích kết quả; so sánh với dự đoán hoặc với nghiên cứu khác (nếu có).',
  },
  {
    id: 'ket-luan',
    name: 'Kết luận',
    what: 'Tóm tắt điều phát hiện được, nêu gợi ý hoặc hướng nghiên cứu tiếp theo.',
  },
  {
    id: 'tai-lieu',
    name: 'Tài liệu tham khảo',
    what: 'Liệt kê sách, bài báo, trang web đã dùng; có thể viết cỡ chữ nhỏ hơn.',
  },
];

/** @type {Topic[]} */
export const TOPICS = [
  {
    id: 'acid',
    title: 'Tính chất hoá học chung của acid',
    parts: {
      'tieu-de': 'Tìm hiểu tính chất hoá học chung của hydrochloric acid loãng – Nhóm 3, lớp 9A.',
      'tom-tat':
        'Nhóm làm bốn thí nghiệm với dung dịch HCl loãng và rút ra các tính chất chung của acid.',
      'gioi-thieu':
        'Acid có ở nhiều nơi quanh ta. Câu hỏi: dung dịch HCl loãng tác dụng được với những chất nào?',
      'phuong-phap':
        'Dụng cụ: ống nghiệm, giá để ống nghiệm, ống hút nhỏ giọt, thìa, panh. Hoá chất: dung dịch HCl loãng, quỳ tím, viên kẽm (Zn), bột CuO, dung dịch NaOH có phenolphthalein.',
      'ket-qua':
        'Bảng ghi hiện tượng: quỳ tím hoá đỏ; viên kẽm tan, có bọt khí; CuO tan tạo dung dịch màu xanh; màu hồng của dung dịch NaOH có phenolphthalein nhạt dần rồi mất.',
      'thao-luan':
        'Giải thích từng hiện tượng, viết phương trình hoá học; so sánh với tính chất acid đã học ở lớp 8.',
      'ket-luan':
        'Acid làm quỳ tím hoá đỏ, tác dụng với kim loại (như Zn), với oxide base (như CuO) và với base (như NaOH).',
      'tai-lieu': 'Sách giáo khoa Khoa học tự nhiên 8 và 9 (bộ Kết nối tri thức với cuộc sống).',
    },
  },
  {
    id: 'dien-tro',
    title: 'Xác định điện trở của một đoạn dây dẫn',
    parts: {
      'tieu-de': 'Xác định điện trở của đoạn dây dẫn bằng ampe kế và vôn kế – Nhóm 2, lớp 9B.',
      'tom-tat':
        'Nhóm đo cường độ dòng điện và hiệu điện thế ở ba lần đo để tính điện trở của một đoạn dây.',
      'gioi-thieu':
        'Mỗi dây dẫn cản trở dòng điện ở mức khác nhau. Mục tiêu: xác định điện trở của một đoạn dây cho trước.',
      'phuong-phap':
        'Mắc nguồn điện, công tắc, ampe kế nối tiếp và vôn kế song song với đoạn dây; đổi hiệu điện thế ba lần, ghi số chỉ.',
      'ket-qua':
        'Bảng số liệu U, I của ba lần đo và giá trị R = U/I tính được; vẽ đồ thị I theo U.',
      'thao-luan':
        'Các giá trị R gần bằng nhau; nêu nguyên nhân sai số (đọc vạch chia, dây nóng lên).',
      'ket-luan':
        'Điện trở của đoạn dây là giá trị trung bình của ba lần đo; có thể đo thêm với dây khác chiều dài.',
      'tai-lieu': 'Sách giáo khoa Khoa học tự nhiên 9 (bộ Kết nối tri thức với cuộc sống).',
    },
  },
];

/**
 * Checks the part picked as the next line of the outline.
 * @param {string[]} built part ids already placed, in order
 * @param {string} pickedId
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeNextPart(built, pickedId) {
  const expected = REPORT_PARTS[built.length];
  const picked = REPORT_PARTS.find((p) => p.id === pickedId);
  if (!expected || !picked) return { ok: false, text: '' };
  if (picked.id === expected.id) {
    return { ok: true, text: `Đúng: phần ${built.length + 1} là ${picked.name}. ${picked.what}` };
  }
  const prev = built.length === 0 ? null : REPORT_PARTS[built.length - 1];
  const where = prev ? `sau phần ${prev.name}` : 'ở đầu báo cáo';
  return {
    ok: false,
    text: `Chưa đúng: ${picked.name} chưa phải phần đứng ${where}. Phần cần tìm: ${lowerFirst(expected.what)}`,
  };
}
