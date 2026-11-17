/**
 * The map of complexes in life, analysis, medicine and industry: each card
 * names the central atom, its ligands and coordination number and what the
 * complex does; and the check of the "which metal?" game.
 */

/** @typedef {'sinh-hoc' | 'phan-tich' | 'y-hoc' | 'cong-nghiep'} Area */

/** @type {Array<{ value: Area, label: string }>} */
export const AREAS = [
  { value: 'sinh-hoc', label: 'Sinh học' },
  { value: 'phan-tich', label: 'Hoá phân tích' },
  { value: 'y-hoc', label: 'Y học' },
  { value: 'cong-nghiep', label: 'Công nghiệp' },
];

/**
 * @typedef {object} Card
 * @property {string} id
 * @property {string} title
 * @property {Area} area
 * @property {string} metal symbol of the central atom
 * @property {string} centre the central ion, ChemFormula notation
 * @property {string} ligands rich text
 * @property {number} cn coordination number
 * @property {string} role rich text
 */

/** @type {Card[]} */
export const CARDS = [
  {
    id: 'hemoglobin',
    title: 'Hemoglobin',
    area: 'sinh-hoc',
    metal: 'Fe',
    centre: 'Fe^2+',
    ligands:
      '4 nguyên tử N của vòng porphyrin (nhóm heme), 1 nguyên tử N của gốc histidine trong protein globin và 1 phân tử $\\mathrm{O_2}$',
    cn: 6,
    role: 'Vận chuyển oxygen trong máu: $\\mathrm{O_2}$ gắn vào $\\mathrm{Fe^{2+}}$ ở phổi và được nhả ra ở các mô. Khí CO gắn vào $\\mathrm{Fe^{2+}}$ bền hơn $\\mathrm{O_2}$ khoảng 200 lần nên gây ngộ độc.',
  },
  {
    id: 'chlorophyll',
    title: 'Chlorophyll',
    area: 'sinh-hoc',
    metal: 'Mg',
    centre: 'Mg^2+',
    ligands: '4 nguyên tử N của vòng chlorin (một vòng kiểu porphyrin)',
    cn: 4,
    role: 'Sắc tố xanh của lá cây, hấp thụ ánh sáng đỏ và xanh tím để thực hiện quang hợp.',
  },
  {
    id: 'vitamin-b12',
    title: 'Vitamin B12',
    area: 'sinh-hoc',
    metal: 'Co',
    centre: 'Co^3+',
    ligands:
      '4 nguyên tử N của vòng corrin, 1 nguyên tử N của nhóm benzimidazole và 1 nhóm như $\\mathrm{CN^-}$ hoặc $\\mathrm{CH_3}$',
    cn: 6,
    role: 'Cần cho sự tạo thành hồng cầu và hoạt động của hệ thần kinh; thiếu vitamin B12 gây thiếu máu.',
  },
  {
    id: 'cisplatin',
    title: 'Cisplatin',
    area: 'y-hoc',
    metal: 'Pt',
    centre: 'Pt^2+',
    ligands: '2 ion $\\mathrm{Cl^-}$ và 2 phân tử $\\mathrm{NH_3}$ ở vị trí cis, dạng vuông phẳng',
    cn: 4,
    role: 'Thuốc điều trị ung thư: liên kết với DNA của tế bào ung thư, ngăn tế bào nhân lên.',
  },
  {
    id: 'edta-chi',
    title: 'Giải độc chì bằng EDTA',
    area: 'y-hoc',
    metal: 'Ca',
    centre: 'Ca^2+',
    ligands: '1 phối tử $\\mathrm{EDTA^{4-}}$ sáu càng, trong $\\mathrm{Na_2[Ca(EDTA)]}$',
    cn: 6,
    role: 'Ion $\\mathrm{Pb^{2+}}$ trong cơ thể thay thế $\\mathrm{Ca^{2+}}$, tạo $\\mathrm{[Pb(EDTA)]^{2-}}$ bền hơn, tan trong nước và được đào thải qua nước tiểu.',
  },
  {
    id: 'chuan-do-edta',
    title: 'Chuẩn độ bằng EDTA',
    area: 'phan-tich',
    metal: 'Ca',
    centre: 'Ca^2+',
    ligands:
      '1 phối tử $\\mathrm{EDTA^{4-}}$ sáu càng (cũng tạo phức tương tự với $\\mathrm{Mg^{2+}}$)',
    cn: 6,
    role: 'EDTA tạo phức với $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ theo tỉ lệ mol 1 : 1, dùng để xác định độ cứng của nước bằng phép chuẩn độ.',
  },
  {
    id: 'nhan-biet-cu',
    title: 'Nhận biết ion đồng(II)',
    area: 'phan-tich',
    metal: 'Cu',
    centre: 'Cu^2+',
    ligands:
      '4 phân tử $\\mathrm{NH_3}$ và 2 phân tử $\\mathrm{H_2O}$, trong $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$',
    cn: 6,
    role: 'Nhỏ dung dịch $\\mathrm{NH_3}$ đến dư vào dung dịch chứa $\\mathrm{Cu^{2+}}$: kết tủa xanh tan, tạo dung dịch xanh lam đậm đặc trưng.',
  },
  {
    id: 'nhan-biet-fe',
    title: 'Nhận biết ion sắt(III)',
    area: 'phan-tich',
    metal: 'Fe',
    centre: 'Fe^3+',
    ligands:
      '1 ion $\\mathrm{SCN^-}$ và 5 phân tử $\\mathrm{H_2O}$, trong $\\mathrm{[Fe(SCN)(H_2O)_5]^{2+}}$',
    cn: 6,
    role: 'Thêm dung dịch KSCN vào dung dịch chứa $\\mathrm{Fe^{3+}}$ thấy màu đỏ máu, rất nhạy, dùng để nhận biết và định lượng $\\mathrm{Fe^{3+}}$.',
  },
  {
    id: 'tach-vang',
    title: 'Tách vàng bằng cyanide',
    area: 'cong-nghiep',
    metal: 'Au',
    centre: 'Au^+',
    ligands: '2 ion $\\mathrm{CN^-}$, trong $\\mathrm{[Au(CN)_2]^-}$ dạng đường thẳng',
    cn: 2,
    role: 'Quặng vàng được ngâm trong dung dịch NaCN có không khí; vàng tan thành $\\mathrm{Na[Au(CN)_2]}$, sau đó dùng Zn đẩy vàng ra khỏi phức chất.',
  },
  {
    id: 'trang-guong',
    title: 'Tráng gương, tráng ruột phích',
    area: 'cong-nghiep',
    metal: 'Ag',
    centre: 'Ag^+',
    ligands: '2 phân tử $\\mathrm{NH_3}$, trong $\\mathrm{[Ag(NH_3)_2]^+}$ (thuốc thử Tollens)',
    cn: 2,
    role: 'Phức chất bạc bị glucose hoặc aldehyde khử, tạo lớp bạc mỏng sáng bám lên mặt kính.',
  },
  {
    id: 'xanh-prussian',
    title: 'Chất màu xanh Prussian',
    area: 'cong-nghiep',
    metal: 'Fe',
    centre: 'Fe^2+',
    ligands:
      '6 ion $\\mathrm{CN^-}$ quanh mỗi ion $\\mathrm{Fe^{2+}}$, trong $\\mathrm{Fe_4[Fe(CN)_6]_3}$',
    cn: 6,
    role: 'Chất màu xanh đậm bền, dùng trong sơn, mực in và men gốm; cũng dùng làm thuốc giải độc caesium và thallium.',
  },
];

/** Metals the game offers. */
export const METALS = ['Fe', 'Mg', 'Co', 'Pt', 'Ca', 'Cu', 'Au', 'Ag'];

/** @param {Area} area */
export const cardsOf = (area) => CARDS.filter((c) => c.area === area);

/** @param {string} id */
export function card(id) {
  const c = CARDS.find((x) => x.id === id);
  if (!c) throw new Error(`Không có thẻ ${id}`);
  return c;
}

/**
 * Checks a guessed central metal.
 * @param {Card} c
 * @param {string} metal
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeMetal(c, metal) {
  if (metal === c.metal)
    return {
      ok: true,
      text: `Đúng! ${c.title}: nguyên tử trung tâm là ${c.metal}, số phối trí ${c.cn}.`,
    };
  const hint = HINTS[c.id] ?? 'Nghĩ tới tên hoặc màu sắc gắn với phức chất này.';
  return { ok: false, text: `Chưa đúng, nguyên tử trung tâm không phải ${metal}. Gợi ý: ${hint}` };
}

/** @type {Record<string, string>} */
export const HINTS = {
  hemoglobin: 'thiếu nguyên tố này cơ thể bị thiếu máu, và nó làm máu có màu đỏ.',
  chlorophyll: 'một kim loại nhóm IIA, không phải kim loại chuyển tiếp.',
  'vitamin-b12': 'vitamin này còn có tên cobalamin.',
  cisplatin: 'tên thuốc chứa tên kim loại quý này.',
  'edta-chi': 'chì thay thế đúng ion kim loại có nhiều trong xương.',
  'chuan-do-edta': 'độ cứng của nước do ion của kim loại này và magnesium gây ra.',
  'nhan-biet-cu': 'dung dịch muối của kim loại này có màu xanh.',
  'nhan-biet-fe': 'ion cần nhận biết có trong muối $\\mathrm{FeCl_3}$.',
  'tach-vang': 'đây chính là kim loại được tách ra.',
  'trang-guong': 'lớp kim loại sáng bám trên kính.',
  'xanh-prussian':
    'phối tử $\\mathrm{CN^-}$ bao quanh ion của kim loại phổ biến nhất trong sắt thép.',
};

/** Cards that have their own hint. */
export const HINT_IDS = Object.keys(HINTS);
