/**
 * Data and checking for the laboratory-safety widget: everyday situations in
 * the lab with one safe action each, and the four families of safety signs
 * told apart by shape and colour.
 */

/**
 * @typedef {{ text: string, safe: boolean, why: string }} Action
 * @typedef {{ id: string, where: string, situation: string, actions: Action[] }} Scenario
 * @typedef {'cam' | 'nguy-hiem' | 'bat-buoc' | 'chi-dan'} SignKind
 * @typedef {'lua' | 'an-uong' | 'nuoc' | 'set' | 'doc' | 'an-mon' | 'kinh' | 'gang-tay' | 'thoat-hiem' | 'so-cuu'} Pictogram
 * @typedef {{ id: string, kind: SignKind, picture: Pictogram, meaning: string }} Sign
 */

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'lo-khong-nhan',
    where: 'Bàn hoá chất',
    situation: 'Em thấy một lọ hoá chất không có nhãn trên bàn.',
    actions: [
      {
        text: 'Mở nắp, ngửi thử để đoán đó là chất gì',
        safe: false,
        why: 'Không được ngửi, nếm hoá chất: nhiều chất độc, gây bỏng đường hô hấp.',
      },
      {
        text: 'Không dùng lọ đó và báo cho thầy cô',
        safe: true,
        why: 'Chỉ dùng hoá chất có nhãn rõ ràng và khi có sự hướng dẫn của giáo viên.',
      },
      {
        text: 'Đổ hoá chất đó xuống bồn rửa cho gọn',
        safe: false,
        why: 'Đổ hoá chất lạ xuống bồn rửa có thể gây phản ứng nguy hiểm và ô nhiễm.',
      },
    ],
  },
  {
    id: 'den-con',
    where: 'Đèn cồn',
    situation: 'Đun xong, em cần tắt ngọn lửa đèn cồn.',
    actions: [
      {
        text: 'Thổi mạnh cho tắt lửa',
        safe: false,
        why: 'Thổi đèn cồn có thể làm lửa bùng ra, gây cháy.',
      },
      {
        text: 'Đậy nắp đèn cồn lại',
        safe: true,
        why: 'Đậy nắp làm lửa tắt vì thiếu không khí, an toàn và giữ cồn không bay hơi.',
      },
      {
        text: 'Mang đèn cồn ra vòi nước dội cho tắt',
        safe: false,
        why: 'Di chuyển đèn cồn đang cháy rất dễ làm đổ cồn, gây cháy lan.',
      },
    ],
  },
  {
    id: 'vo-ong-nghiem',
    where: 'Giá ống nghiệm',
    situation: 'Em lỡ tay làm vỡ một ống nghiệm thuỷ tinh.',
    actions: [
      {
        text: 'Nhặt ngay các mảnh vỡ bằng tay',
        safe: false,
        why: 'Mảnh thuỷ tinh sắc có thể cắt vào tay.',
      },
      {
        text: 'Báo thầy cô, dùng chổi và hót rác thu gom mảnh vỡ vào đúng nơi quy định',
        safe: true,
        why: 'Báo ngay khi có sự cố và thu dọn mảnh vỡ bằng dụng cụ, không dùng tay.',
      },
      {
        text: 'Lấy chân gạt mảnh vỡ vào gầm bàn',
        safe: false,
        why: 'Mảnh vỡ còn lại có thể làm người khác bị thương.',
      },
    ],
  },
  {
    id: 'hoa-chat-ban-tay',
    where: 'Bồn rửa',
    situation: 'Một ít dung dịch hoá chất bắn vào tay em.',
    actions: [
      {
        text: 'Lau tay vào áo rồi làm tiếp',
        safe: false,
        why: 'Hoá chất vẫn bám trên da và áo, có thể gây bỏng.',
      },
      {
        text: 'Rửa ngay dưới vòi nước sạch nhiều lần và báo thầy cô',
        safe: true,
        why: 'Rửa bằng nhiều nước làm loãng và trôi hoá chất; giáo viên sẽ xử lí tiếp.',
      },
      {
        text: 'Giấu đi để không bị nhắc nhở',
        safe: false,
        why: 'Phải báo ngay cho giáo viên khi gặp sự cố.',
      },
    ],
  },
  {
    id: 'an-uong',
    where: 'Bàn thí nghiệm',
    situation: 'Đang làm thí nghiệm, em thấy đói và muốn ăn bánh mang theo.',
    actions: [
      {
        text: 'Ăn nhanh ngay tại bàn thí nghiệm',
        safe: false,
        why: 'Thức ăn có thể dính hoá chất hoặc vi khuẩn từ mẫu vật.',
      },
      {
        text: 'Không ăn uống trong phòng thực hành, đợi ra ngoài và rửa tay trước khi ăn',
        safe: true,
        why: 'Quy định: không ăn uống, đùa nghịch trong phòng thực hành.',
      },
    ],
  },
  {
    id: 'o-dien',
    where: 'Ổ điện',
    situation: 'Dây điện của một thiết bị bị hở lõi đồng.',
    actions: [
      {
        text: 'Lấy tay ấn dây vào cho gọn rồi cắm điện',
        safe: false,
        why: 'Chạm vào dây điện hở có thể bị điện giật.',
      },
      {
        text: 'Không chạm vào, không cắm điện và báo ngay cho thầy cô',
        safe: true,
        why: 'Nguồn điện là một nguồn gây mất an toàn; chỉ giáo viên mới xử lí.',
      },
    ],
  },
  {
    id: 'trang-phuc',
    where: 'Cửa phòng',
    situation: 'Chuẩn bị làm thí nghiệm với hoá chất và đèn cồn, em để tóc dài xoã.',
    actions: [
      {
        text: 'Buộc gọn tóc, mặc áo choàng, đeo kính và găng tay bảo hộ',
        safe: true,
        why: 'Tóc buộc gọn tránh bắt lửa; đồ bảo hộ tránh hoá chất bắn vào người.',
      },
      {
        text: 'Cứ để tóc xoã, chỉ cần cẩn thận là được',
        safe: false,
        why: 'Tóc xoã dễ chạm vào ngọn lửa hoặc hoá chất.',
      },
    ],
  },
  {
    id: 'thu-don',
    where: 'Cuối giờ',
    situation: 'Thí nghiệm đã xong, trên bàn còn hoá chất thừa và dụng cụ bẩn.',
    actions: [
      {
        text: 'Để nguyên trên bàn cho lớp sau dọn',
        safe: false,
        why: 'Hoá chất thừa để lại có thể gây nguy hiểm cho người khác.',
      },
      {
        text: 'Thu gom hoá chất, rác thải vào đúng nơi quy định, rửa sạch dụng cụ và rửa tay bằng xà phòng',
        safe: true,
        why: 'Sau khi làm thí nghiệm phải thu dọn và rửa tay sạch sẽ.',
      },
    ],
  },
];

/** @type {Record<SignKind, { name: string, look: string }>} */
export const SIGN_KINDS = {
  cam: { name: 'Biển báo cấm', look: 'hình tròn, nền trắng, viền đỏ, có gạch chéo đỏ' },
  'nguy-hiem': { name: 'Biển cảnh báo nguy hiểm', look: 'hình tam giác đều, nền vàng, viền đen' },
  'bat-buoc': { name: 'Biển bắt buộc thực hiện', look: 'hình tròn, nền xanh dương, hình vẽ trắng' },
  'chi-dan': { name: 'Biển chỉ dẫn', look: 'hình vuông hoặc chữ nhật, nền xanh lá, hình vẽ trắng' },
};

/** @type {SignKind[]} */
export const KIND_ORDER = ['cam', 'nguy-hiem', 'bat-buoc', 'chi-dan'];

/** @type {Sign[]} */
export const SIGNS = [
  { id: 'cam-lua', kind: 'cam', picture: 'lua', meaning: 'Cấm lửa' },
  { id: 'cam-an-uong', kind: 'cam', picture: 'an-uong', meaning: 'Cấm ăn uống' },
  { id: 'cam-nuoc', kind: 'cam', picture: 'nuoc', meaning: 'Không dùng làm nước uống' },
  { id: 'dien', kind: 'nguy-hiem', picture: 'set', meaning: 'Cảnh báo điện cao thế' },
  { id: 'doc', kind: 'nguy-hiem', picture: 'doc', meaning: 'Cảnh báo chất độc' },
  { id: 'chay', kind: 'nguy-hiem', picture: 'lua', meaning: 'Cảnh báo chất dễ cháy' },
  { id: 'an-mon', kind: 'nguy-hiem', picture: 'an-mon', meaning: 'Cảnh báo chất ăn mòn' },
  { id: 'kinh', kind: 'bat-buoc', picture: 'kinh', meaning: 'Bắt buộc đeo kính bảo hộ' },
  { id: 'gang-tay', kind: 'bat-buoc', picture: 'gang-tay', meaning: 'Bắt buộc đeo găng tay' },
  { id: 'thoat-hiem', kind: 'chi-dan', picture: 'thoat-hiem', meaning: 'Lối thoát hiểm' },
  { id: 'so-cuu', kind: 'chi-dan', picture: 'so-cuu', meaning: 'Nơi đặt hộp sơ cứu' },
];

/**
 * @param {Scenario} scenario
 * @param {number} choice index into `actions`
 */
export function judgeAction(scenario, choice) {
  const action = scenario.actions[choice];
  if (!action) return { ok: false, text: '' };
  return {
    ok: action.safe,
    text: `${action.safe ? 'An toàn' : 'Không an toàn'}: ${action.why}`,
  };
}

/**
 * @param {Sign} sign
 * @param {SignKind} kind the learner's answer
 */
export function judgeSign(sign, kind) {
  const right = SIGN_KINDS[sign.kind];
  if (kind === sign.kind) {
    return {
      ok: true,
      text: `Đúng: ${right.name.toLowerCase()} (${right.look}). Ý nghĩa: ${sign.meaning}.`,
    };
  }
  return {
    ok: false,
    text: `Chưa đúng: đây là ${right.name.toLowerCase()} (${right.look}). Ý nghĩa: ${sign.meaning}.`,
  };
}
