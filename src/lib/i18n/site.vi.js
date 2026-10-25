export const site = {
  title: 'ChemMax',
  repo: 'https://github.com/tiennm99dev/chemmax',
  tagline: 'Hoá học tương tác cho học sinh lớp 6-12',
  description:
    'ChemMax giúp học sinh lớp 6-12 học Hoá học theo sách Kết nối tri thức với cuộc sống qua mô hình tương tác: bảng tuần hoàn, mô hình nguyên tử, phân tử, cân bằng phương trình và thang pH.',
};

export const home = {
  gradesTitle: 'Chọn lớp',
  strandsTitle: 'Học theo mạch kiến thức',
  /** @param {number} chapters @param {number} lessons */
  gradeSummary: (chapters, lessons) => `${chapters} chương · ${lessons} bài`,
};

/**
 * School levels on the home page, each with its grade range. Grades 6-9 follow
 * the chemistry strand of the Khoa học tự nhiên book.
 */
export const levels = [
  { title: 'Trung học cơ sở (Khoa học tự nhiên)', from: 6, to: 9 },
  { title: 'Trung học phổ thông', from: 10, to: 12 },
];

/** @type {Record<string, string>} */
export const grades = Object.fromEntries(
  Array.from({ length: 12 }, (_, i) => [`lop-${i + 1}`, `Lớp ${i + 1}`]),
);

/** @type {Record<import('#lib/curriculum/index.js').LessonKind, string>} */
export const kinds = {
  theory: 'Lý thuyết',
  practice: 'Luyện tập',
  review: 'Ôn tập',
  activity: 'Hoạt động',
  'chuyen-de': 'Chuyên đề',
};

/**
 * Strand hubs across grades, keyed by the curriculum `strand` slug.
 * @type {Record<string, { title: string, blurb: string }>}
 */
export const strands = {
  'mo-dau': {
    title: 'Mở đầu',
    blurb: 'Khoa học tự nhiên, an toàn phòng thí nghiệm, dụng cụ đo và phương pháp học hoá học.',
  },
  'chat-va-hon-hop': {
    title: 'Chất và hỗn hợp',
    blurb: 'Tính chất và sự chuyển thể của chất, chất tinh khiết, hỗn hợp, dung dịch và tách chất.',
  },
  'hoa-hoc-va-doi-song': {
    title: 'Hoá học và đời sống',
    blurb: 'Vật liệu, nhiên liệu, lương thực, thực phẩm và khai thác tài nguyên từ vỏ Trái Đất.',
  },
  'cau-tao-chat': {
    title: 'Cấu tạo chất',
    blurb: 'Nguyên tử, nguyên tố, bảng tuần hoàn, phân tử và liên kết hoá học.',
  },
  'phan-ung-hoa-hoc': {
    title: 'Phản ứng hoá học',
    blurb:
      'Phương trình hoá học, mol, oxi hoá – khử, năng lượng, tốc độ phản ứng, cân bằng và điện hoá.',
  },
  'hoa-vo-co': {
    title: 'Hoá vô cơ',
    blurb: 'Acid, base, muối, oxide, phân bón, halogen, nitrogen và sulfur.',
  },
  'kim-loai': {
    title: 'Kim loại',
    blurb: 'Tính chất kim loại, dãy hoạt động, nhóm IA, IIA, kim loại chuyển tiếp và phức chất.',
  },
  'hoa-huu-co': {
    title: 'Hoá hữu cơ',
    blurb:
      'Hydrocarbon, alcohol, carboxylic acid, ester, lipid, carbohydrate, hợp chất chứa nitrogen và polymer.',
  },
  'chuyen-de': {
    title: 'Chuyên đề học tập',
    blurb: 'Các chuyên đề Hoá học 10, 11, 12 mở rộng theo hướng thực hành và ứng dụng.',
  },
};
