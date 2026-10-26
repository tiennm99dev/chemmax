/**
 * Data and checking for the virtual lab shelf of KHTN 8, Bài 1: the common
 * laboratory tools and the electrical devices of the book, each with its use
 * and the right way to handle it, plus everyday tasks that need exactly one
 * of them.
 */

/**
 * @typedef {'dung-cu' | 'thiet-bi-dien'} ShelfId
 * @typedef {'chua' | 'lay' | 'dong-loc' | 'dun' | 'nguon' | 'do-dien' | 'su-dung-dien' | 'ho-tro'} GroupId
 * @typedef {{ id: string, name: string, shelf: ShelfId, group: GroupId, use: string, howTo: string, careful: string }} Item
 * @typedef {{ id: string, task: string, answer: string, why: string }} Task
 */

/** @type {Record<ShelfId, string>} */
export const SHELVES = {
  'dung-cu': 'Dụng cụ thí nghiệm',
  'thiet-bi-dien': 'Thiết bị điện',
};

/** @type {Record<GroupId, string>} */
export const GROUPS = {
  chua: 'Chứa, đựng hoá chất',
  lay: 'Lấy hoá chất',
  'dong-loc': 'Đong, lọc, khuấy',
  dun: 'Đun nóng',
  nguon: 'Thiết bị cung cấp điện',
  'do-dien': 'Thiết bị đo điện',
  'su-dung-dien': 'Thiết bị sử dụng điện',
  'ho-tro': 'Thiết bị điện hỗ trợ',
};

/** @type {Item[]} */
export const ITEMS = [
  {
    id: 'lo-hoa-chat',
    name: 'Lọ đựng hoá chất',
    shelf: 'dung-cu',
    group: 'chua',
    use: 'Chứa hoá chất; lọ có nắp đậy kín và dán nhãn ghi tên, công thức hoá học, nồng độ, kí hiệu cảnh báo.',
    howTo: 'Đọc kĩ nhãn trước khi dùng; lấy hoá chất xong thì đậy nắp ngay.',
    careful: 'Không dùng hoá chất trong lọ không có nhãn hoặc nhãn mờ, mất chữ.',
  },
  {
    id: 'ong-nghiem',
    name: 'Ống nghiệm',
    shelf: 'dung-cu',
    group: 'chua',
    use: 'Đựng một lượng nhỏ hoá chất để làm thí nghiệm, có thể đun nóng.',
    howTo: 'Giữ ống nghiệm bằng tay không thuận, dùng tay thuận để thêm hoá chất vào ống nghiệm.',
    careful: 'Khi đun phải kẹp ống nghiệm bằng kẹp, miệng ống hướng về phía không có người.',
  },
  {
    id: 'gia-ong-nghiem',
    name: 'Giá để ống nghiệm',
    shelf: 'dung-cu',
    group: 'chua',
    use: 'Đặt, dựng các ống nghiệm khi làm thí nghiệm hoặc sau khi rửa.',
    howTo: 'Đặt ống nghiệm thẳng đứng vào lỗ của giá, để giá trên mặt bàn phẳng.',
    careful: 'Không đặt ống nghiệm đang nóng lên giá nhựa.',
  },
  {
    id: 'coc-thuy-tinh',
    name: 'Cốc thuỷ tinh',
    shelf: 'dung-cu',
    group: 'chua',
    use: 'Đựng, pha và hoà tan hoá chất với lượng lớn hơn ống nghiệm.',
    howTo: 'Rót chất lỏng vào cốc theo thành cốc hoặc theo đũa thuỷ tinh để không bị bắn.',
    careful: 'Cầm chắc thân cốc; cốc vỡ phải báo giáo viên và thu gom bằng chổi, hót rác.',
  },
  {
    id: 'binh-non',
    name: 'Bình nón (bình tam giác)',
    shelf: 'dung-cu',
    group: 'chua',
    use: 'Đựng dung dịch; miệng hẹp, đáy rộng nên lắc trộn mà không bị bắn ra ngoài.',
    howTo: 'Cầm cổ bình, lắc nhẹ theo vòng tròn để trộn đều dung dịch.',
    careful: 'Không đổ đầy bình khi cần lắc trộn.',
  },
  {
    id: 'thia',
    name: 'Thìa xúc hoá chất',
    shelf: 'dung-cu',
    group: 'lay',
    use: 'Xúc hoá chất rắn ở dạng bột hoặc hạt nhỏ ra khỏi lọ.',
    howTo: 'Dùng thìa kim loại hoặc thuỷ tinh sạch, khô để xúc hoá chất.',
    careful: 'Không dùng tay lấy hoá chất; không đặt lại thìa đã dùng vào lọ đựng hoá chất.',
  },
  {
    id: 'panh',
    name: 'Panh (kẹp gắp)',
    shelf: 'dung-cu',
    group: 'lay',
    use: 'Gắp hoá chất rắn ở dạng hạt to, dây, thanh.',
    howTo:
      'Kẹp chắc mẩu hoá chất rồi đưa vào ống nghiệm đặt nghiêng, để mẩu chất trượt nhẹ xuống đáy.',
    careful: 'Không đặt lại panh đã dùng vào lọ đựng hoá chất.',
  },
  {
    id: 'ong-hut',
    name: 'Ống hút nhỏ giọt',
    shelf: 'dung-cu',
    group: 'lay',
    use: 'Lấy chất lỏng với lượng nhỏ (vài giọt đến khoảng 1 mL).',
    howTo:
      'Bóp chặt và giữ quả bóp cao su, đưa ống hút vào lọ, thả chậm quả bóp để hút chất lỏng lên; chuyển đến ống nghiệm rồi bóp nhẹ để nhỏ từng giọt.',
    careful: 'Không chạm đầu ống hút vào thành ống nghiệm; không dùng một ống hút cho nhiều lọ.',
  },
  {
    id: 'ong-dong',
    name: 'Ống đong',
    shelf: 'dung-cu',
    group: 'dong-loc',
    use: 'Đong một thể tích chất lỏng xác định.',
    howTo:
      'Đặt ống đong thẳng đứng trên mặt bàn, đặt mắt ngang với mực chất lỏng để đọc vạch chia.',
    careful: 'Chọn ống đong có giới hạn đo phù hợp với thể tích cần đong.',
  },
  {
    id: 'pheu-loc',
    name: 'Phễu lọc',
    shelf: 'dung-cu',
    group: 'dong-loc',
    use: 'Lọc tách chất rắn không tan khỏi chất lỏng; rót chất lỏng vào chai, lọ miệng nhỏ.',
    howTo:
      'Đặt giấy lọc vào phễu, đặt phễu trên miệng bình hứng, rót chất lỏng theo đũa thuỷ tinh.',
    careful: 'Mực chất lỏng trong phễu luôn thấp hơn mép giấy lọc.',
  },
  {
    id: 'dua-thuy-tinh',
    name: 'Đũa thuỷ tinh',
    shelf: 'dung-cu',
    group: 'dong-loc',
    use: 'Khuấy khi hoà tan chất rắn; dẫn chất lỏng khi rót.',
    howTo: 'Khuấy nhẹ theo vòng tròn, tránh gõ mạnh vào thành cốc.',
    careful: 'Rửa sạch đũa trước khi khuấy hoá chất khác.',
  },
  {
    id: 'kep-ong-nghiem',
    name: 'Kẹp ống nghiệm',
    shelf: 'dung-cu',
    group: 'dun',
    use: 'Kẹp, giữ ống nghiệm khi đun nóng.',
    howTo: 'Kẹp ở khoảng 1/3 ống nghiệm tính từ miệng ống xuống.',
    careful: 'Không kẹp quá cao để dễ thao tác; không kẹp quá thấp để ống không bị tuột, rơi.',
  },
  {
    id: 'den-con',
    name: 'Đèn cồn',
    shelf: 'dung-cu',
    group: 'dun',
    use: 'Đun nóng hoá chất trong ống nghiệm, cốc, bát sứ.',
    howTo:
      'Hơ nóng đều ống nghiệm rồi mới đun tại chỗ có hoá chất, ở vị trí nóng nhất của ngọn lửa (khoảng 2/3 ngọn lửa tính từ dưới lên).',
    careful:
      'Không để đáy ống nghiệm chạm bấc đèn; không châm đèn cồn này từ đèn cồn khác; tắt đèn bằng cách đậy nắp, không thổi.',
  },
  {
    id: 'pin',
    name: 'Pin 1,5 V',
    shelf: 'thiet-bi-dien',
    group: 'nguon',
    use: 'Cung cấp điện cho mạch thí nghiệm; là nguồn điện thường dùng.',
    howTo: 'Mắc nối tiếp nhiều pin để có bộ nguồn lớn hơn: 2 pin cho 3 V, 4 pin cho 6 V.',
    careful: 'Mắc đúng cực (+) và (−); tháo pin ra khi không dùng.',
  },
  {
    id: 'bien-ap-nguon',
    name: 'Biến áp nguồn',
    shelf: 'thiet-bi-dien',
    group: 'nguon',
    use: 'Chuyển điện áp xoay chiều 220 V thành điện áp xoay chiều hoặc một chiều có giá trị nhỏ, an toàn khi làm thí nghiệm.',
    howTo:
      'Chọn đúng chức năng (xoay chiều hay một chiều), chọn đúng điện áp và cắm đúng các chốt.',
    careful: 'Tay khô khi cắm điện; tắt biến áp nguồn trước khi lắp hoặc tháo mạch.',
  },
  {
    id: 'ampe-ke',
    name: 'Ampe kế',
    shelf: 'thiet-bi-dien',
    group: 'do-dien',
    use: 'Đo cường độ dòng điện; trên mặt có chữ A hoặc mA.',
    howTo: 'Mắc nối tiếp với thiết bị cần đo: chốt (+) của ampe kế về phía cực (+) của nguồn điện.',
    careful: 'Chọn thang đo phù hợp; chỉnh kim về số 0 trước khi đo.',
  },
  {
    id: 'von-ke',
    name: 'Vôn kế',
    shelf: 'thiet-bi-dien',
    group: 'do-dien',
    use: 'Đo hiệu điện thế (điện áp); trên mặt có chữ V hoặc mV.',
    howTo:
      'Mắc song song với thiết bị (hoặc nguồn) cần đo: chốt (+) nối với cực (+), chốt (−) nối với cực (−).',
    careful: 'Chọn thang đo phù hợp; chỉnh kim về số 0 trước khi đo.',
  },
  {
    id: 'joulemeter',
    name: 'Joulemeter',
    shelf: 'thiet-bi-dien',
    group: 'do-dien',
    use: 'Đo dòng điện, điện áp, công suất và năng lượng điện cung cấp cho mạch điện; các giá trị hiện trên màn hình LED.',
    howTo: 'Mắc giữa nguồn điện và mạch điện cần đo, chọn đại lượng cần hiển thị.',
    careful: 'Dùng nguồn điện phù hợp với thiết bị; mắc đúng các chốt vào, chốt ra.',
  },
  {
    id: 'bien-tro',
    name: 'Biến trở',
    shelf: 'thiet-bi-dien',
    group: 'su-dung-dien',
    use: 'Điều chỉnh cường độ dòng điện trong mạch, ví dụ làm đèn sáng mạnh hay yếu.',
    howTo: 'Mắc nối tiếp vào mạch; dịch chuyển con chạy để thay đổi cường độ dòng điện.',
    careful: 'Không để dòng điện vượt quá giá trị cho phép ghi trên biến trở.',
  },
  {
    id: 'led',
    name: 'Điôt phát quang (LED)',
    shelf: 'thiet-bi-dien',
    group: 'su-dung-dien',
    use: 'Phát sáng khi có dòng điện chạy qua; luôn dùng kèm điện trở bảo vệ.',
    howTo: 'Mắc đúng chiều: chân dài (cực dương) về phía cực (+) của nguồn điện.',
    careful: 'Không mắc LED trực tiếp vào nguồn khi thiếu điện trở bảo vệ.',
  },
  {
    id: 'bong-den',
    name: 'Bóng đèn 3 V kèm đui',
    shelf: 'thiet-bi-dien',
    group: 'su-dung-dien',
    use: 'Sáng lên khi có dòng điện chạy qua; là một thiết bị sử dụng điện.',
    howTo: 'Dùng nguồn có điện áp đúng 3 V như ghi trên bóng.',
    careful: 'Nguồn có điện áp lớn hơn 3 V có thể làm cháy bóng đèn.',
  },
  {
    id: 'cong-tac',
    name: 'Công tắc',
    shelf: 'thiet-bi-dien',
    group: 'ho-tro',
    use: 'Đóng hoặc ngắt mạch điện.',
    howTo: 'Mắc nối tiếp trong mạch; ngắt công tắc trước khi thay đổi cách mắc.',
    careful: 'Không chạm tay ướt vào công tắc.',
  },
  {
    id: 'cau-chi',
    name: 'Cầu chì ống',
    shelf: 'thiet-bi-dien',
    group: 'ho-tro',
    use: 'Bảo vệ mạch điện: dây chì đứt, ngắt mạch khi dòng điện quá lớn.',
    howTo: 'Mắc nối tiếp ngay sau nguồn điện.',
    careful: 'Thay cầu chì đúng loại; không thay bằng dây đồng.',
  },
  {
    id: 'day-noi',
    name: 'Dây nối',
    shelf: 'thiet-bi-dien',
    group: 'ho-tro',
    use: 'Nối các thiết bị với nhau thành mạch điện.',
    howTo: 'Cắm chắc đầu dây vào các chốt, đi dây gọn gàng.',
    careful: 'Không dùng dây bị hở, bong vỏ cách điện.',
  },
];

/** @type {Task[]} */
export const TASKS = [
  {
    id: 'lay-1-ml',
    task: 'Lấy khoảng 1 mL dung dịch hydrochloric acid loãng cho vào ống nghiệm.',
    answer: 'ong-hut',
    why: 'lấy lượng nhỏ chất lỏng thì dùng ống hút nhỏ giọt.',
  },
  {
    id: 'lay-bot',
    task: 'Lấy một ít muối ăn dạng hạt nhỏ ra khỏi lọ.',
    answer: 'thia',
    why: 'hoá chất rắn dạng bột, hạt nhỏ được xúc bằng thìa, không dùng tay.',
  },
  {
    id: 'lay-day-dong',
    task: 'Lấy một đoạn dây đồng ra khỏi lọ.',
    answer: 'panh',
    why: 'hoá chất rắn dạng hạt to, dây, thanh được gắp bằng panh.',
  },
  {
    id: 'giu-khi-dun',
    task: 'Giữ ống nghiệm trong lúc đun nóng.',
    answer: 'kep-ong-nghiem',
    why: 'kẹp ống nghiệm ở khoảng 1/3 ống tính từ miệng, không cầm bằng tay.',
  },
  {
    id: 'khuay',
    task: 'Khuấy cho muối tan nhanh trong cốc nước.',
    answer: 'dua-thuy-tinh',
    why: 'đũa thuỷ tinh dùng để khuấy khi hoà tan chất rắn.',
  },
  {
    id: 'dong-50',
    task: 'Đong đúng 50 mL nước cất.',
    answer: 'ong-dong',
    why: 'ống đong có vạch chia để đong thể tích chất lỏng.',
  },
  {
    id: 'loc-cat',
    task: 'Tách cát ra khỏi hỗn hợp cát và nước.',
    answer: 'pheu-loc',
    why: 'phễu có giấy lọc giữ lại cát, nước chảy xuống bình hứng.',
  },
  {
    id: 'dat-ong',
    task: 'Dựng các ống nghiệm đã rửa sạch cho gọn.',
    answer: 'gia-ong-nghiem',
    why: 'giá để ống nghiệm dùng để đặt các ống nghiệm.',
  },
  {
    id: 'lac-tron',
    task: 'Lắc trộn đều một dung dịch mà không để dung dịch bắn ra ngoài.',
    answer: 'binh-non',
    why: 'bình nón có miệng hẹp, đáy rộng nên lắc không bị bắn ra ngoài.',
  },
  {
    id: 'dun-nong',
    task: 'Đun nóng dung dịch trong ống nghiệm.',
    answer: 'den-con',
    why: 'đèn cồn là dụng cụ đun nóng; đun ở khoảng 2/3 ngọn lửa tính từ dưới lên.',
  },
  {
    id: 'doi-dien-ap',
    task: 'Đổi điện áp 220 V của lưới điện thành điện áp một chiều 6 V cho thí nghiệm.',
    answer: 'bien-ap-nguon',
    why: 'biến áp nguồn chuyển điện áp 220 V thành điện áp nhỏ, an toàn.',
  },
  {
    id: 'bo-nguon-3v',
    task: 'Tạo bộ nguồn 3 V cho mạch thắp sáng bóng đèn nhỏ, không cần ổ cắm điện.',
    answer: 'pin',
    why: 'mắc nối tiếp hai pin 1,5 V được bộ nguồn 3 V.',
  },
  {
    id: 'do-cuong-do',
    task: 'Đo cường độ dòng điện chạy qua bóng đèn.',
    answer: 'ampe-ke',
    why: 'ampe kế đo cường độ dòng điện, mắc nối tiếp với bóng đèn.',
  },
  {
    id: 'do-hieu-dien-the',
    task: 'Đo hiệu điện thế giữa hai đầu bóng đèn.',
    answer: 'von-ke',
    why: 'vôn kế đo hiệu điện thế, mắc song song với bóng đèn.',
  },
  {
    id: 'do-nang-luong',
    task: 'Đo năng lượng điện mà nguồn cung cấp cho mạch điện.',
    answer: 'joulemeter',
    why: 'joulemeter đo dòng điện, điện áp, công suất và năng lượng điện cung cấp cho mạch.',
  },
  {
    id: 'chinh-do-sang',
    task: 'Điều chỉnh cho bóng đèn sáng mạnh hơn hoặc yếu hơn.',
    answer: 'bien-tro',
    why: 'biến trở thay đổi cường độ dòng điện trong mạch.',
  },
  {
    id: 'dong-ngat',
    task: 'Đóng, ngắt mạch điện mà không phải tháo dây.',
    answer: 'cong-tac',
    why: 'công tắc dùng để đóng hoặc ngắt mạch điện.',
  },
  {
    id: 'bao-ve',
    task: 'Tự ngắt mạch khi dòng điện trong mạch quá lớn.',
    answer: 'cau-chi',
    why: 'dây chì trong cầu chì nóng chảy, đứt và ngắt mạch khi dòng điện quá lớn.',
  },
];

/**
 * @param {string} id
 * @returns {Item | undefined}
 */
export function itemById(id) {
  return ITEMS.find((it) => it.id === id);
}

/**
 * Items on one shelf, grouped in book order.
 * @param {ShelfId} shelf
 * @returns {Array<{ group: GroupId, label: string, items: Item[] }>}
 */
export function shelfGroups(shelf) {
  /** @type {Array<{ group: GroupId, label: string, items: Item[] }>} */
  const out = [];
  for (const it of ITEMS) {
    if (it.shelf !== shelf) continue;
    let g = out.find((x) => x.group === it.group);
    if (!g) {
      g = { group: it.group, label: GROUPS[it.group], items: [] };
      out.push(g);
    }
    g.items.push(it);
  }
  return out;
}

/**
 * Checks the item picked for a task and explains the choice.
 * @param {Task} task
 * @param {string} pickedId
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeTask(task, pickedId) {
  const picked = itemById(pickedId);
  if (!picked) return { ok: false, text: '' };
  if (pickedId === task.answer) {
    return { ok: true, text: `Đúng: ${picked.name}, vì ${task.why}` };
  }
  const use = picked.use.charAt(0).toLowerCase() + picked.use.slice(1);
  return {
    ok: false,
    text: `Chưa đúng: ${picked.name} dùng để ${use} Hãy chọn lại.`,
  };
}

/**
 * Score of a challenge round: tasks answered right on the first pick.
 * @param {Record<string, string>} firstPicks task id to the first item picked
 */
export function firstTryScore(firstPicks) {
  return TASKS.filter((t) => firstPicks[t.id] === t.answer).length;
}
