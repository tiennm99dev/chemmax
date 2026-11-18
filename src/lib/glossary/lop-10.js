/**
 * Thuật ngữ lớp 10 for the /thuat-ngu/ page. Site-owned data: the rules are in
 * src/lib/core/glossary.js, and src/lib/core/glossary.test.js checks them.
 */

const MO_DAU = 'mo-dau/mo-dau-nhap-mon-hoa-hoc';
const THANH_PHAN = 'cau-tao-nguyen-tu/thanh-phan-cua-nguyen-tu';
const NGUYEN_TO = 'cau-tao-nguyen-tu/nguyen-to-hoa-hoc';
const LOP_VO = 'cau-tao-nguyen-tu/cau-truc-lop-vo-electron-nguyen-tu';
const BTH = 'bang-tuan-hoan-cac-nguyen-to-hoa-hoc-va-dinh-luat-tuan-hoan';
const CAU_TAO_BTH = `${BTH}/cau-tao-cua-bang-tuan-hoan-cac-nguyen-to-hoa-hoc`;
const XU_HUONG_NHOM = `${BTH}/xu-huong-bien-doi-mot-so-tinh-chat-cua-nguyen-tu-cac-nguyen-to-trong-mot-nhom`;
const XU_HUONG_CHU_KI = `${BTH}/xu-huong-bien-doi-thanh-phan-va-mot-so-tinh-chat-cua-hop-chat-trong-mot-chu-ki`;
const DINH_LUAT = `${BTH}/dinh-luat-tuan-hoan-y-nghia-cua-bang-tuan-hoan-cac-nguyen-to-hoa-hoc`;
const OCTET = 'lien-ket-hoa-hoc/quy-tac-octet';
const ION = 'lien-ket-hoa-hoc/lien-ket-ion';
const CONG_HOA_TRI = 'lien-ket-hoa-hoc/lien-ket-cong-hoa-tri';
const HYDROGEN = 'lien-ket-hoa-hoc/lien-ket-hydrogen-va-tuong-tac-van-der-waals';
const OXI_HOA_KHU = 'phan-ung-oxi-hoa-khu/phan-ung-oxi-hoa-khu';
const ENTHALPY = 'nang-luong-hoa-hoc/bien-thien-enthalpy-trong-cac-phan-ung-hoa-hoc';
const TOC_DO = 'toc-do-phan-ung/toc-do-phan-ung';
const HALOGEN = 'nguyen-to-nhom-halogen/nhom-halogen';
const HALIDE = 'nguyen-to-nhom-halogen/hydrogen-halide-muoi-halide';
const CD_LIEN_KET = 'co-so-hoa-hoc/cd-lien-ket-hoa-hoc';
const CD_HAT_NHAN = 'co-so-hoa-hoc/cd-phan-ung-hat-nhan';
const CD_HOAT_HOA = 'co-so-hoa-hoc/cd-nang-luong-hoat-hoa-cua-phan-ung-hoa-hoc';
const CD_GIBBS = 'co-so-hoa-hoc/cd-entropy-va-bien-thien-nang-luong-tu-do-gibbs';
const CHAY_NO = 'hoa-hoc-trong-viec-phong-chong-chay-no';
const CD_CHAY = `${CHAY_NO}/cd-so-luoc-ve-phan-ung-chay-no`;
const CD_CHOP_CHAY = `${CHAY_NO}/cd-diem-chop-chay-nhiet-do-ngon-lua-nhiet-do-tu-boc-chay`;

/** @type {import('#lib/core/glossary.js').GlossaryEntry[]} */
export default [
  {
    id: 'hoa-hoc',
    term: 'hoá học',
    en: 'chemistry',
    def: 'Ngành khoa học tự nhiên nghiên cứu thành phần, cấu trúc, tính chất, sự biến đổi của các chất và các hiện tượng kèm theo, cùng với ứng dụng của chúng.',
    lesson: MO_DAU,
  },
  {
    id: 'electron',
    term: 'electron',
    en: 'electron',
    def: 'Hạt mang điện tích âm (điện tích tương đối −1) chuyển động rất nhanh quanh hạt nhân, tạo nên lớp vỏ nguyên tử.',
    lesson: THANH_PHAN,
    aka: ['e'],
  },
  {
    id: 'so-hieu-nguyen-tu',
    term: 'số hiệu nguyên tử',
    en: 'atomic number',
    def: 'Số đơn vị điện tích hạt nhân nguyên tử của một nguyên tố, kí hiệu Z. Trong nguyên tử, Z = số proton = số electron.',
    lesson: NGUYEN_TO,
    aka: ['Z'],
  },
  {
    id: 'so-khoi',
    term: 'số khối',
    en: 'mass number',
    def: 'Tổng số proton (Z) và số neutron (N) của hạt nhân, kí hiệu A: A = Z + N.',
    lesson: NGUYEN_TO,
    aka: ['A'],
  },
  {
    id: 'dong-vi',
    term: 'đồng vị',
    en: 'isotope',
    def: 'Những nguyên tử của cùng một nguyên tố hoá học có cùng số proton nhưng khác nhau về số neutron, do đó số khối của chúng khác nhau.',
    lesson: NGUYEN_TO,
    see: ['so-khoi'],
  },
  {
    id: 'orbital-nguyen-tu',
    term: 'orbital nguyên tử',
    en: 'atomic orbital',
    def: 'Khu vực không gian xung quanh hạt nhân mà tại đó xác suất có mặt electron là lớn nhất, khoảng 90%.',
    lesson: LOP_VO,
    aka: ['AO'],
  },
  {
    id: 'cau-hinh-electron',
    term: 'cấu hình electron',
    en: 'electron configuration',
    def: 'Cách biểu diễn sự phân bố electron vào các lớp và phân lớp của nguyên tử, ví dụ Na: 1s²2s²2p⁶3s¹.',
    lesson: LOP_VO,
    see: ['orbital-nguyen-tu'],
  },
  {
    id: 'nhom',
    term: 'nhóm',
    en: 'group',
    def: 'Tập hợp các nguyên tố có cấu hình electron tương tự nhau nên tính chất hoá học gần giống nhau, xếp thành một cột.',
    lesson: CAU_TAO_BTH,
    see: ['lop-7/chu-ki'],
  },
  {
    id: 'do-am-dien',
    term: 'độ âm điện',
    en: 'electronegativity',
    def: 'Đại lượng đặc trưng cho khả năng hút electron của nguyên tử khi tạo thành liên kết hoá học, kí hiệu χ. Fluorine có độ âm điện lớn nhất.',
    lesson: XU_HUONG_NHOM,
    aka: ['χ'],
  },
  {
    id: 'hydroxide-luong-tinh',
    term: 'hydroxide lưỡng tính',
    en: 'amphoteric hydroxide',
    def: 'Hydroxide tác dụng được với cả dung dịch acid và dung dịch base, ví dụ Al(OH)₃.',
    lesson: XU_HUONG_CHU_KI,
  },
  {
    id: 'dinh-luat-tuan-hoan',
    term: 'định luật tuần hoàn',
    en: 'periodic law',
    def: 'Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ chúng, biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
    lesson: DINH_LUAT,
  },
  {
    id: 'quy-tac-octet',
    term: 'quy tắc octet',
    en: 'octet rule',
    def: 'Khi hình thành liên kết hoá học, nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để có 8 electron lớp ngoài cùng như khí hiếm (hoặc 2 electron như helium).',
    lesson: OCTET,
  },
  {
    id: 'cation',
    term: 'cation',
    en: 'cation',
    def: 'Ion mang điện tích dương, tạo thành khi nguyên tử nhường electron, ví dụ Na⁺. Số điện tích bằng số electron đã nhường.',
    lesson: ION,
    see: ['anion'],
  },
  {
    id: 'anion',
    term: 'anion',
    en: 'anion',
    def: 'Ion mang điện tích âm, tạo thành khi nguyên tử nhận electron, ví dụ Cl⁻. Số điện tích bằng số electron đã nhận.',
    lesson: ION,
    see: ['cation'],
  },
  {
    id: 'lien-ket-ion',
    term: 'liên kết ion',
    en: 'ionic bond',
    def: 'Liên kết được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu, thường giữa kim loại điển hình và phi kim điển hình.',
    lesson: ION,
    see: ['cation', 'anion'],
  },
  {
    id: 'lien-ket-cong-hoa-tri',
    term: 'liên kết cộng hoá trị',
    en: 'covalent bond',
    def: 'Liên kết được tạo nên giữa hai nguyên tử bằng một hay nhiều cặp electron chung: liên kết đơn, đôi hoặc ba.',
    lesson: CONG_HOA_TRI,
  },
  {
    id: 'lien-ket-cho-nhan',
    term: 'liên kết cho – nhận',
    en: 'coordinate bond',
    def: 'Liên kết cộng hoá trị mà cặp electron chung chỉ do một nguyên tử đóng góp: nguyên tử cho có cặp electron chưa liên kết, nguyên tử nhận có orbital trống.',
    lesson: CONG_HOA_TRI,
    see: ['lien-ket-cong-hoa-tri'],
  },
  {
    id: 'nang-luong-lien-ket',
    term: 'năng lượng liên kết',
    en: 'bond energy',
    def: 'Năng lượng cần để phá vỡ một mol liên kết trong phân tử ở thể khí, tạo thành các nguyên tử ở thể khí, đơn vị kJ/mol. Giá trị càng lớn thì liên kết càng bền.',
    lesson: CONG_HOA_TRI,
    aka: ['Eb'],
  },
  {
    id: 'lien-ket-hydrogen',
    term: 'liên kết hydrogen',
    en: 'hydrogen bond',
    def: 'Liên kết yếu giữa nguyên tử H đã liên kết với nguyên tử có độ âm điện lớn (F, O, N) và một nguyên tử có độ âm điện lớn khác còn cặp electron chưa liên kết.',
    lesson: HYDROGEN,
    see: ['tuong-tac-van-der-waals'],
  },
  {
    id: 'tuong-tac-van-der-waals',
    term: 'tương tác van der Waals',
    en: 'van der Waals interaction',
    def: 'Tương tác tĩnh điện lưỡng cực – lưỡng cực giữa các nguyên tử hay phân tử. Nó làm tăng nhiệt độ nóng chảy và nhiệt độ sôi của chất.',
    lesson: HYDROGEN,
  },
  {
    id: 'so-oxi-hoa',
    term: 'số oxi hoá',
    en: 'oxidation number',
    def: 'Điện tích của một nguyên tử trong phân tử nếu giả định cặp electron chung thuộc hẳn về nguyên tử có độ âm điện lớn hơn. Đơn chất có số oxi hoá bằng 0.',
    lesson: OXI_HOA_KHU,
  },
  {
    id: 'chat-oxi-hoa',
    term: 'chất oxi hoá',
    en: 'oxidizing agent',
    def: 'Chất nhận electron trong phản ứng oxi hoá – khử, nên số oxi hoá của nguyên tố trong nó giảm.',
    lesson: OXI_HOA_KHU,
    see: ['chat-khu'],
  },
  {
    id: 'chat-khu',
    term: 'chất khử',
    en: 'reducing agent',
    def: 'Chất nhường electron trong phản ứng oxi hoá – khử, nên số oxi hoá của nguyên tố trong nó tăng.',
    lesson: OXI_HOA_KHU,
    see: ['chat-oxi-hoa'],
  },
  {
    id: 'phan-ung-oxi-hoa-khu',
    term: 'phản ứng oxi hoá – khử',
    en: 'redox reaction',
    def: 'Phản ứng hoá học có sự chuyển electron giữa các chất phản ứng: sự nhường và sự nhận electron xảy ra đồng thời. Dấu hiệu nhận biết là có nguyên tố thay đổi số oxi hoá.',
    lesson: OXI_HOA_KHU,
    see: ['so-oxi-hoa'],
  },
  {
    id: 'phan-ung-toa-nhiet',
    term: 'phản ứng toả nhiệt',
    en: 'exothermic reaction',
    def: 'Phản ứng giải phóng năng lượng dưới dạng nhiệt; biến thiên enthalpy của nó âm (ΔᵣH < 0).',
    lesson: ENTHALPY,
    see: ['phan-ung-thu-nhiet'],
  },
  {
    id: 'phan-ung-thu-nhiet',
    term: 'phản ứng thu nhiệt',
    en: 'endothermic reaction',
    def: 'Phản ứng hấp thụ năng lượng dưới dạng nhiệt; biến thiên enthalpy của nó dương (ΔᵣH > 0).',
    lesson: ENTHALPY,
    see: ['phan-ung-toa-nhiet'],
  },
  {
    id: 'bien-thien-enthalpy',
    term: 'biến thiên enthalpy',
    en: 'enthalpy change',
    def: 'Nhiệt lượng toả ra hoặc thu vào của phản ứng ở một điều kiện xác định, kí hiệu ΔᵣH.',
    lesson: ENTHALPY,
    see: ['nhiet-tao-thanh'],
    aka: ['nhiệt phản ứng', 'ΔH'],
  },
  {
    id: 'nhiet-tao-thanh',
    term: 'nhiệt tạo thành',
    en: 'enthalpy of formation',
    def: 'Biến thiên enthalpy của phản ứng tạo thành 1 mol một chất từ các đơn chất ở dạng bền vững nhất, ở một điều kiện xác định.',
    lesson: ENTHALPY,
    aka: ['enthalpy tạo thành'],
  },
  {
    id: 'toc-do-phan-ung',
    term: 'tốc độ phản ứng',
    en: 'reaction rate',
    def: 'Đại lượng đặc trưng cho sự nhanh, chậm của phản ứng hoá học, xác định bằng sự thay đổi lượng chất đầu hoặc lượng sản phẩm trong một đơn vị thời gian, kí hiệu v.',
    lesson: TOC_DO,
  },
  {
    id: 'dinh-luat-tac-dung-khoi-luong',
    term: 'định luật tác dụng khối lượng',
    en: 'law of mass action',
    def: 'Ở nhiệt độ không đổi, tốc độ phản ứng tỉ lệ thuận với tích nồng độ các chất phản ứng với số mũ thích hợp.',
    lesson: TOC_DO,
    see: ['toc-do-phan-ung'],
  },
  {
    id: 'halogen',
    term: 'halogen',
    en: 'halogen',
    def: 'Các nguyên tố nhóm VIIA như fluorine, chlorine, bromine, iodine, có lớp ngoài cùng ns²np⁵. Chúng là phi kim điển hình, tính oxi hoá giảm dần từ F₂ đến I₂.',
    lesson: HALOGEN,
  },
  {
    id: 'hydrogen-halide',
    term: 'hydrogen halide',
    en: 'hydrogen halide',
    def: 'Hợp chất của hydrogen với halogen: HF, HCl, HBr, HI. Chúng tan trong nước tạo dung dịch acid, gọi chung là hydrohalic acid.',
    lesson: HALIDE,
    see: ['halogen'],
    aka: ['hydrohalic acid'],
  },
  {
    id: 'lai-hoa-orbital',
    term: 'lai hoá orbital',
    en: 'orbital hybridization',
    def: 'Sự tổ hợp các orbital nguyên tử của một nguyên tử để tạo thành các orbital lai hoá giống nhau về năng lượng, hình dạng, kích thước nhưng định hướng khác nhau trong không gian.',
    lesson: CD_LIEN_KET,
    see: ['orbital-nguyen-tu'],
    aka: ['sp', 'sp²', 'sp³'],
  },
  {
    id: 'mo-hinh-vsepr',
    term: 'mô hình VSEPR',
    en: 'VSEPR model',
    def: 'Mô hình cho rằng các cặp electron hoá trị quanh nguyên tử trung tâm đẩy nhau và sắp xếp xa nhau nhất, từ đó suy ra dạng hình học của phân tử AXₙEₘ.',
    lesson: CD_LIEN_KET,
    see: ['lai-hoa-orbital'],
  },
  {
    id: 'phan-ung-hat-nhan',
    term: 'phản ứng hạt nhân',
    en: 'nuclear reaction',
    def: 'Quá trình biến đổi hạt nhân của nguyên tử, tạo thành hạt nhân của nguyên tố khác hoặc đồng vị khác.',
    lesson: CD_HAT_NHAN,
    see: ['dong-vi'],
  },
  {
    id: 'chu-ki-ban-ra',
    term: 'chu kì bán rã',
    en: 'half-life',
    def: 'Thời gian để một nửa số hạt nhân trong mẫu đồng vị phóng xạ phân rã, kí hiệu T. Giá trị này đặc trưng cho từng đồng vị.',
    lesson: CD_HAT_NHAN,
  },
  {
    id: 'nang-luong-hoat-hoa',
    term: 'năng lượng hoạt hoá',
    en: 'activation energy',
    def: 'Năng lượng tối thiểu mà các hạt chất đầu cần có để va chạm giữa chúng gây ra phản ứng hoá học, kí hiệu Eₐ. Chất xúc tác làm giảm năng lượng này.',
    lesson: CD_HOAT_HOA,
    see: ['lop-8/chat-xuc-tac'],
    aka: ['Ea'],
  },
  {
    id: 'entropy',
    term: 'entropy',
    en: 'entropy',
    def: 'Thước đo mức độ hỗn loạn (mất trật tự) của một hệ chứa số lượng lớn hạt, kí hiệu S, đơn vị J/(mol·K). Với cùng một chất, S(rắn) < S(lỏng) < S(khí).',
    lesson: CD_GIBBS,
    aka: ['S'],
  },
  {
    id: 'nang-luong-tu-do-gibbs',
    term: 'năng lượng tự do Gibbs',
    en: 'Gibbs free energy',
    def: 'Đại lượng dùng để dự đoán chiều phản ứng: ΔᵣG° = ΔᵣH° − T·ΔᵣS°. Phản ứng tự xảy ra khi ΔᵣG° < 0, đạt cân bằng khi bằng 0 và không tự xảy ra khi lớn hơn 0.',
    lesson: CD_GIBBS,
    see: ['entropy', 'bien-thien-enthalpy'],
    aka: ['ΔG'],
  },
  {
    id: 'phan-ung-chay',
    term: 'phản ứng cháy',
    en: 'combustion reaction',
    def: 'Phản ứng oxi hoá – khử có toả nhiệt và phát sáng, xảy ra giữa chất cháy với oxygen trong không khí hoặc với một chất oxi hoá khác.',
    lesson: CD_CHAY,
    see: ['tam-giac-chay'],
  },
  {
    id: 'tam-giac-chay',
    term: 'tam giác cháy',
    en: 'fire triangle',
    def: 'Ba yếu tố phải có đồng thời để phản ứng cháy xảy ra: chất cháy, chất oxi hoá và nguồn nhiệt. Lấy đi một yếu tố thì đám cháy tắt.',
    lesson: CD_CHAY,
  },
  {
    id: 'diem-chop-chay',
    term: 'điểm chớp cháy',
    en: 'flash point',
    def: 'Nhiệt độ thấp nhất, ở áp suất khí quyển, mà một hợp chất hữu cơ hoặc vật liệu dễ bay hơi tạo đủ hơi để bốc cháy trong không khí khi gặp nguồn lửa.',
    lesson: CD_CHOP_CHAY,
  },
];
