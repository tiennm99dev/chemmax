/**
 * The concept map of the chapter as a card sort: each fact goes to the part
 * of the atom's story it belongs to.
 */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const CONCEPT_BINS = [
  { id: 'thanh-phan', label: 'Thành phần nguyên tử' },
  { id: 'nguyen-to', label: 'Nguyên tố và đồng vị' },
  { id: 'lop-vo', label: 'Lớp vỏ electron' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const CONCEPT_CARDS = [
  {
    id: 'hat-nhan',
    label: 'Hạt nhân gồm proton và neutron',
    bin: 'thanh-phan',
    why: 'Đây là cấu tạo của nguyên tử (Bài 1).',
  },
  {
    id: 'trung-hoa',
    label: 'Số proton bằng số electron, nguyên tử trung hoà điện',
    bin: 'thanh-phan',
    why: 'Điện tích của các hạt thuộc thành phần nguyên tử (Bài 1).',
  },
  {
    id: 'kich-thuoc',
    label: 'Nguyên tử lớn hơn hạt nhân khoảng 10 000 lần',
    bin: 'thanh-phan',
    why: 'Kích thước nguyên tử và hạt nhân (Bài 1).',
  },
  {
    id: 'amu',
    label: 'Khối lượng nguyên tử tập trung ở hạt nhân',
    bin: 'thanh-phan',
    why: 'Electron rất nhẹ, nên khối lượng nằm ở hạt nhân (Bài 1).',
  },
  {
    id: 'so-proton',
    label: 'Cùng số proton thì cùng nguyên tố',
    bin: 'nguyen-to',
    why: 'Đây là định nghĩa nguyên tố hoá học (Bài 2).',
  },
  {
    id: 'so-khoi',
    label: 'Số khối A = Z + N',
    bin: 'nguyen-to',
    why: 'Số khối đặc trưng cho hạt nhân của một nguyên tử (Bài 2).',
  },
  {
    id: 'dong-vi',
    label: 'Cùng số proton, khác số neutron',
    bin: 'nguyen-to',
    why: 'Đó là các đồng vị của một nguyên tố (Bài 2).',
  },
  {
    id: 'ntk-tb',
    label: 'Nguyên tử khối trung bình của chlorine là 35,45',
    bin: 'nguyen-to',
    why: 'Nguyên tử khối trung bình tính từ phần trăm các đồng vị (Bài 2).',
  },
  {
    id: 'orbital',
    label: 'Orbital s hình cầu, orbital p hình số tám nổi',
    bin: 'lop-vo',
    why: 'Orbital là vùng electron hay có mặt nhất, thuộc lớp vỏ (Bài 3).',
  },
  {
    id: 'pauli',
    label: 'Mỗi orbital chứa tối đa 2 electron ngược chiều',
    bin: 'lop-vo',
    why: 'Nguyên lí Pauli về cách electron chiếm orbital (Bài 3).',
  },
  {
    id: 'thu-tu',
    label: 'Phân lớp 4s được điền trước 3d',
    bin: 'lop-vo',
    why: 'Trật tự mức năng lượng trong nguyên lí vững bền (Bài 3).',
  },
  {
    id: 'lop-n',
    label: 'Lớp thứ n chứa tối đa 2n² electron',
    bin: 'lop-vo',
    why: 'Số electron tối đa của một lớp electron (Bài 3).',
  },
];
