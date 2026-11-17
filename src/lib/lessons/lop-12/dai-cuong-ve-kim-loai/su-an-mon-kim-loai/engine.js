/**
 * Iron nails left for some days in different surroundings: how much rust
 * forms, which metal is the anode when two metals touch in an electrolyte,
 * and why. The rates are a classroom model, not measured data: they only
 * order the tubes the way the experiment does.
 */

/**
 * @typedef {object} Setting
 * @property {string} id
 * @property {string} label
 * @property {string} liquid colour of what fills the tube, or '' for air
 * @property {null | 'Cu' | 'Zn'} wire metal wound round the nail
 * @property {number} rate share of the nail rusted per day
 * @property {number} wireLoss share of the wire eaten per day
 * @property {string} why rich text: why it rusts or not
 */

/** @type {Setting[]} */
export const SETTINGS = [
  {
    id: 'kho',
    label: 'Không khí khô',
    liquid: '',
    wire: null,
    rate: 0,
    wireLoss: 0,
    why: 'Không có nước nên không có dung dịch chất điện li: đinh sắt hầu như không bị gỉ.',
  },
  {
    id: 'khong-oxi',
    label: 'Nước đã đun sôi, phủ dầu',
    liquid: '#e0f2fe',
    wire: null,
    rate: 0.004,
    wireLoss: 0,
    why: 'Nước đã đun sôi hầu như không còn oxygen hoà tan, lớp dầu ngăn không khí: không có chất oxi hoá ở cathode nên đinh gần như không gỉ.',
  },
  {
    id: 'nuoc',
    label: 'Nước máy',
    liquid: '#bae6fd',
    wire: null,
    rate: 0.04,
    wireLoss: 0,
    why: 'Ăn mòn điện hoá: Fe (anode) và tạp chất C trong thép (cathode) cùng tiếp xúc với nước có hoà tan $\\mathrm{O_2}$. Ở anode $\\mathrm{Fe} \\longrightarrow \\mathrm{Fe^{2+}} + 2e$; ở cathode $\\mathrm{O_2} + 2\\mathrm{H_2O} + 4e \\longrightarrow 4\\mathrm{OH^-}$. Gỉ sắt có thành phần chính $\\mathrm{Fe_2O_3 \\cdot nH_2O}$.',
  },
  {
    id: 'muoi',
    label: 'Nước muối',
    liquid: '#c7d2fe',
    wire: null,
    rate: 0.08,
    wireLoss: 0,
    why: 'Nước muối là dung dịch chất điện li dẫn điện tốt hơn nước máy, nên pin Fe – C hoạt động mạnh hơn: đinh gỉ nhanh hơn. Vì thế vỏ tàu biển, công trình ven biển bị ăn mòn mạnh.',
  },
  {
    id: 'dong',
    label: 'Nước muối, quấn dây Cu',
    liquid: '#c7d2fe',
    wire: 'Cu',
    rate: 0.14,
    wireLoss: 0,
    why: 'Fe và Cu tiếp xúc trực tiếp trong dung dịch điện li tạo pin điện: Fe có $E^\\circ$ nhỏ hơn nên là anode, bị ăn mòn rất nhanh; Cu là cathode, không bị ăn mòn.',
  },
  {
    id: 'kem',
    label: 'Nước muối, quấn dây Zn',
    liquid: '#c7d2fe',
    wire: 'Zn',
    rate: 0,
    wireLoss: 0.07,
    why: 'Zn có $E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V nhỏ hơn $E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V nên Zn là anode, bị ăn mòn thay cho sắt; Fe là cathode, được bảo vệ. Đây là phương pháp điện hoá chống ăn mòn.',
  },
];

/** @param {string} id */
export function setting(id) {
  const s = SETTINGS.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown setting ${id}`);
  return s;
}

/**
 * Share of the nail rusted and of the wire eaten after some days, each 0..1.
 * @param {Setting} s
 * @param {number} days
 */
export function stateAt(s, days) {
  return {
    rust: Math.min(1, s.rate * days),
    wire: Math.min(1, s.wireLoss * days),
  };
}

/** Settings from the most rusted nail to the least at the given day. @param {number} days */
export function ranking(days) {
  return [...SETTINGS].sort((a, b) => stateAt(b, days).rust - stateAt(a, days).rust);
}
