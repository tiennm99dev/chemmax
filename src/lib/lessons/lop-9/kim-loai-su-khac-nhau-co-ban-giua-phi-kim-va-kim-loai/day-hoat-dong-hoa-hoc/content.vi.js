/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dãy hoạt động hoá học K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au xếp các kim loại theo mức độ hoạt động giảm dần từ trái sang phải. Dãy cho biết kim loại nào tác dụng với nước ở nhiệt độ thường, kim loại nào đẩy được hydrogen ra khỏi dung dịch acid và kim loại nào đẩy được kim loại khác ra khỏi dung dịch muối.',
  intro:
    'Ngâm đinh sắt vào dung dịch copper(II) sulfate thì đồng bám lên đinh sắt, nhưng ngâm dây đồng vào dung dịch iron(II) sulfate thì không có gì xảy ra. Vì sao? Các nhà hoá học đã làm rất nhiều thí nghiệm như vậy và sắp xếp các kim loại thành một dãy: nhìn vào dãy, em đoán được phản ứng có xảy ra hay không mà không cần làm thí nghiệm.',
  objectives: [
    'Nêu được thứ tự của dãy hoạt động hoá học của một số kim loại (K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au).',
    'Trình bày được ý nghĩa của dãy hoạt động hoá học.',
    'Vận dụng dãy hoạt động hoá học để dự đoán phản ứng của kim loại với nước, với dung dịch acid và với dung dịch muối; viết được phương trình hoá học.',
  ],
  sections: [
    {
      heading: 'Xây dựng dãy hoạt động hoá học',
      blocks: [
        {
          type: 'p',
          text: 'So sánh mức độ hoạt động của các kim loại bằng thí nghiệm:',
        },
        {
          type: 'table',
          head: ['Thí nghiệm', 'Hiện tượng', 'Kết luận'],
          rows: [
            [
              'Cho mẩu $\\mathrm{Na}$, đinh $\\mathrm{Fe}$, dây $\\mathrm{Cu}$ vào ba cốc nước có phenolphthalein',
              'Chỉ cốc có $\\mathrm{Na}$ phản ứng mãnh liệt, dung dịch chuyển màu hồng',
              '$\\mathrm{Na}$ hoạt động mạnh hơn $\\mathrm{Fe}$ và $\\mathrm{Cu}$',
            ],
            [
              'Cho đinh $\\mathrm{Fe}$ và dây $\\mathrm{Cu}$ vào hai ống nghiệm đựng dung dịch $\\mathrm{HCl}$',
              'Đinh sắt có bọt khí thoát ra; dây đồng không có hiện tượng',
              '$\\mathrm{Fe}$ đứng trước $\\mathrm{H}$, $\\mathrm{Cu}$ đứng sau $\\mathrm{H}$',
            ],
            [
              'Cho dây $\\mathrm{Cu}$ vào dung dịch $\\mathrm{AgNO_3}$; cho dây $\\mathrm{Ag}$ vào dung dịch $\\mathrm{CuSO_4}$',
              'Có bạc bám ngoài dây đồng, dung dịch chuyển màu xanh; dây bạc không đổi',
              '$\\mathrm{Cu}$ hoạt động mạnh hơn $\\mathrm{Ag}$',
            ],
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}',
        },
        {
          type: 'p',
          text: 'Từ nhiều thí nghiệm khác nhau, người ta sắp xếp các kim loại (và hydrogen, để so sánh) thành dãy theo chiều giảm dần mức độ hoạt động hoá học:',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dãy hoạt động hoá học của một số kim loại',
          text: 'K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Mẹo nhớ thứ tự: “Khi Nào Cần May Áo Giáp Sắt Phải Hỏi Cửa Á Âu” (K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au).',
        },
      ],
    },
    {
      heading: 'Ý nghĩa của dãy hoạt động hoá học',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Mức độ hoạt động hoá học của các kim loại giảm dần từ trái sang phải.',
            'Kim loại đứng trước $\\mathrm{Mg}$ ($\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$) tác dụng với nước ở điều kiện thường, tạo base và giải phóng khí hydrogen.',
            'Kim loại đứng trước $\\mathrm{H}$ tác dụng với dung dịch acid ($\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng) giải phóng khí hydrogen; kim loại đứng sau $\\mathrm{H}$ thì không.',
            'Kim loại đứng trước (trừ $\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$) đẩy được kim loại đứng sau ra khỏi dung dịch muối.',
          ],
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} 2\\mathrm{K} + 2\\mathrm{H_2O} &\\rightarrow 2\\mathrm{KOH} + \\mathrm{H_2}\\uparrow \\\\ \\mathrm{Zn} + \\mathrm{H_2SO_4} &\\rightarrow \\mathrm{ZnSO_4} + \\mathrm{H_2}\\uparrow \\\\ \\mathrm{Zn} + \\mathrm{CuSO_4} &\\rightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Vì sao trừ K, Na, Ca?',
          text: 'Cho mẩu sodium vào dung dịch $\\mathrm{CuSO_4}$: sodium tác dụng với nước trước, tạo $\\mathrm{NaOH}$ và khí $\\mathrm{H_2}$; không có đồng nào được giải phóng.',
        },
      ],
    },
    {
      heading: 'Dự đoán phản ứng của kim loại với dung dịch muối',
      blocks: [
        {
          type: 'p',
          text: 'Muốn biết kim loại $\\mathrm{A}$ có đẩy được kim loại $\\mathrm{B}$ ra khỏi dung dịch muối của $\\mathrm{B}$ hay không, em làm theo ba bước:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Nếu $\\mathrm{A}$ là $\\mathrm{K}$, $\\mathrm{Na}$ hoặc $\\mathrm{Ca}$: $\\mathrm{A}$ tác dụng với nước, không đẩy được $\\mathrm{B}$.',
            'Tìm vị trí của $\\mathrm{A}$ và $\\mathrm{B}$ trong dãy.',
            '$\\mathrm{A}$ đứng trước $\\mathrm{B}$ thì có phản ứng, tạo muối của $\\mathrm{A}$ và kim loại $\\mathrm{B}$; $\\mathrm{A}$ đứng sau $\\mathrm{B}$ thì không phản ứng.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số ví dụ',
          head: ['Cặp chất', 'Vị trí trong dãy', 'Kết quả'],
          rows: [
            [
              '$\\mathrm{Fe}$ + dung dịch $\\mathrm{CuSO_4}$',
              '$\\mathrm{Fe}$ trước $\\mathrm{Cu}$',
              '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$',
            ],
            [
              '$\\mathrm{Cu}$ + dung dịch $\\mathrm{FeSO_4}$',
              '$\\mathrm{Cu}$ sau $\\mathrm{Fe}$',
              'Không phản ứng',
            ],
            [
              '$\\mathrm{Al}$ + dung dịch $\\mathrm{CuSO_4}$',
              '$\\mathrm{Al}$ trước $\\mathrm{Cu}$',
              '$2\\mathrm{Al} + 3\\mathrm{CuSO_4} \\rightarrow \\mathrm{Al_2(SO_4)_3} + 3\\mathrm{Cu}$',
            ],
            [
              '$\\mathrm{Ag}$ + dung dịch $\\mathrm{HCl}$',
              '$\\mathrm{Ag}$ sau $\\mathrm{H}$',
              'Không phản ứng',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Dự đoán bằng dãy hoạt động',
    instruction:
      'Chọn kim loại cho vào và dung dịch (dung dịch HCl ứng với H, dung dịch muối nitrate ứng với từng kim loại). Nhìn vị trí hai ô sáng trên dãy, dự đoán kim loại có đẩy được hydrogen hoặc kim loại kia ra không, rồi xem phương trình. Thử cả K, Na, Ca với dung dịch muối.',
  },
  examples: [
    {
      problem:
        'Dự đoán hiện tượng và viết phương trình hoá học (nếu có) khi cho: a) dây kẽm vào dung dịch $\\mathrm{CuSO_4}$; b) dây bạc vào dung dịch $\\mathrm{Cu(NO_3)_2}$.',
      steps: [
        'a) $\\mathrm{Zn}$ đứng trước $\\mathrm{Cu}$ nên đẩy được đồng ra khỏi muối: có chất rắn màu đỏ bám ngoài dây kẽm, màu xanh của dung dịch nhạt dần.',
        'Phương trình: $\\mathrm{Zn} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}$.',
        'b) $\\mathrm{Ag}$ đứng sau $\\mathrm{Cu}$ nên không đẩy được đồng: không có hiện tượng.',
      ],
      answer:
        'a) Có phản ứng, $\\mathrm{Zn} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}$; b) không phản ứng.',
    },
    {
      problem:
        'Bột bạc có lẫn bột đồng và bột sắt. Dùng một dung dịch nào để thu được bạc tinh khiết? Viết phương trình hoá học.',
      steps: [
        'Cần một dung dịch hoà tan được $\\mathrm{Cu}$ và $\\mathrm{Fe}$ nhưng không hoà tan $\\mathrm{Ag}$, tốt nhất lại sinh thêm bạc.',
        '$\\mathrm{Fe}$ và $\\mathrm{Cu}$ đều đứng trước $\\mathrm{Ag}$ nên đẩy được bạc ra khỏi dung dịch $\\mathrm{AgNO_3}$.',
        '$\\mathrm{Fe} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Fe(NO_3)_2} + 2\\mathrm{Ag}$ và $\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}$.',
        'Ngâm hỗn hợp trong dung dịch $\\mathrm{AgNO_3}$ dư, lọc lấy chất rắn, rửa sạch được bạc.',
      ],
      answer: 'Dùng dung dịch $\\mathrm{AgNO_3}$ dư.',
    },
    {
      problem:
        'Nhúng một thanh sắt vào dung dịch $\\mathrm{CuSO_4}$. Sau một thời gian lấy thanh sắt ra, rửa, làm khô, cân thấy khối lượng tăng $0{,}8$ g. Tính khối lượng đồng bám vào thanh sắt (Fe = 56, Cu = 64).',
      steps: [
        '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$: cứ $1$ mol $\\mathrm{Fe}$ ($56$ g) tan thì $1$ mol $\\mathrm{Cu}$ ($64$ g) bám vào.',
        'Mỗi mol phản ứng làm thanh kim loại tăng $64 - 56 = 8$ g.',
        'Số mol phản ứng: $\\dfrac{0{,}8}{8} = 0{,}1$ mol.',
        '$m_{\\mathrm{Cu}} = 0{,}1 \\times 64 = 6{,}4$ g.',
      ],
      answer: '$m_{\\mathrm{Cu}} = 6{,}4$ g.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các kim loại theo chiều mức độ hoạt động hoá học giảm dần.',
      items: [
        '$\\mathrm{Cu}$',
        '$\\mathrm{Na}$',
        '$\\mathrm{Ag}$',
        '$\\mathrm{Fe}$',
        '$\\mathrm{Mg}$',
      ],
      answer: [1, 4, 3, 0, 2],
      hints: ['Nhớ lại dãy: K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au.'],
      solution:
        'Thứ tự giảm dần: $\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Fe}$, $\\mathrm{Cu}$, $\\mathrm{Ag}$.',
    },
    {
      type: 'multi',
      prompt:
        'Những kim loại nào tác dụng với dung dịch $\\mathrm{H_2SO_4}$ loãng giải phóng khí hydrogen?',
      options: [
        '$\\mathrm{Al}$',
        '$\\mathrm{Cu}$',
        '$\\mathrm{Zn}$',
        '$\\mathrm{Ag}$',
        '$\\mathrm{Fe}$',
      ],
      answers: [0, 2, 4],
      hints: ['Chỉ kim loại đứng trước H trong dãy mới đẩy được hydrogen ra khỏi acid.'],
      solution:
        '$\\mathrm{Al}$, $\\mathrm{Zn}$, $\\mathrm{Fe}$ đứng trước $\\mathrm{H}$ nên phản ứng; $\\mathrm{Cu}$, $\\mathrm{Ag}$ đứng sau $\\mathrm{H}$ nên không phản ứng.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây không xảy ra?',
      options: [
        '$\\mathrm{Fe} + \\mathrm{CuSO_4}$',
        '$\\mathrm{Zn} + \\mathrm{Pb(NO_3)_2}$',
        '$\\mathrm{Cu} + \\mathrm{ZnSO_4}$',
        '$\\mathrm{Cu} + \\mathrm{AgNO_3}$',
      ],
      answer: 2,
      hints: ['Kim loại chỉ đẩy được kim loại đứng sau nó trong dãy.'],
      solution:
        '$\\mathrm{Cu}$ đứng sau $\\mathrm{Zn}$ nên không đẩy được kẽm ra khỏi $\\mathrm{ZnSO_4}$. Ba phản ứng còn lại đều có kim loại đứng trước đẩy kim loại đứng sau.',
    },
    {
      type: 'choice',
      prompt:
        'Cho mẩu sodium vào dung dịch $\\mathrm{CuSO_4}$. Hiện tượng đầu tiên quan sát được là',
      options: [
        'có đồng màu đỏ bám ngoài mẩu sodium',
        'mẩu sodium chạy trên mặt dung dịch, có khí thoát ra',
        'không có hiện tượng gì',
        'dung dịch chuyển sang không màu ngay lập tức, không có khí',
      ],
      answer: 1,
      hints: ['Sodium là một trong ba kim loại được “trừ ra” ở ý nghĩa thứ tư của dãy.'],
      solution:
        'Sodium tác dụng với nước trước: $2\\mathrm{Na} + 2\\mathrm{H_2O} \\rightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}\\uparrow$; mẩu sodium chạy trên mặt dung dịch, có khí thoát ra, không có đồng sinh ra.',
    },
    {
      type: 'text',
      prompt:
        'Trong ba kim loại $\\mathrm{Zn}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, kim loại nào hoạt động hoá học mạnh nhất? Viết kí hiệu hoá học.',
      accept: ['Mg', 'magnesium', 'magie'],
      hints: ['Kim loại đứng càng về bên trái dãy thì hoạt động càng mạnh.'],
      solution: 'Thứ tự trong dãy: Mg, Al, Zn. $\\mathrm{Mg}$ đứng trước nên hoạt động mạnh nhất.',
    },
    {
      type: 'choice',
      prompt:
        'Kim loại $\\mathrm{X}$ tác dụng được với dung dịch $\\mathrm{HCl}$ giải phóng khí hydrogen và đẩy được đồng ra khỏi dung dịch $\\mathrm{CuSO_4}$, nhưng không tác dụng với nước ở điều kiện thường. $\\mathrm{X}$ có thể là',
      options: ['$\\mathrm{Na}$', '$\\mathrm{Ag}$', '$\\mathrm{Zn}$', '$\\mathrm{Cu}$'],
      answer: 2,
      hints: ['X đứng trước H, nhưng không phải K, Na, Ca.'],
      solution:
        '$\\mathrm{Zn}$ đứng trước $\\mathrm{H}$ và trước $\\mathrm{Cu}$, không tác dụng với nước ở điều kiện thường. $\\mathrm{Na}$ tác dụng với nước; $\\mathrm{Ag}$, $\\mathrm{Cu}$ đứng sau $\\mathrm{H}$.',
    },
    {
      type: 'number',
      prompt:
        'Nhúng thanh kẽm vào dung dịch $\\mathrm{CuSO_4}$ dư cho đến khi có $0{,}2$ mol kẽm phản ứng. Khối lượng thanh kim loại giảm bao nhiêu gam (Zn = 65, Cu = 64)?',
      answer: 0.2,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$\\mathrm{Zn} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}$: mỗi mol Zn tan đi thì có 1 mol Cu bám vào.',
        'Mỗi mol phản ứng làm thanh giảm $65 - 64$ g.',
      ],
      solution:
        'Mỗi mol phản ứng: tan $65$ g kẽm, bám $64$ g đồng, giảm $1$ g. Với $0{,}2$ mol: giảm $0{,}2 \\times 1 = 0{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Ngâm bột sắt dư trong $200$ mL dung dịch $\\mathrm{CuSO_4}$ $0{,}5$ M đến khi phản ứng xong. Tính khối lượng đồng tạo thành, theo gam (Cu = 64).',
      answer: 6.4,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{CuSO_4}} = C_M \\times V$, với $V$ tính bằng lít.',
        'Sắt dư nên toàn bộ $\\mathrm{CuSO_4}$ phản ứng; $n_{\\mathrm{Cu}} = n_{\\mathrm{CuSO_4}}$.',
      ],
      solution:
        '$n_{\\mathrm{CuSO_4}} = 0{,}5 \\times 0{,}2 = 0{,}1$ mol; $\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$ nên $n_{\\mathrm{Cu}} = 0{,}1$ mol; $m_{\\mathrm{Cu}} = 0{,}1 \\times 64 = 6{,}4$ g.',
    },
  ],
  takeaways: [
    'Dãy hoạt động hoá học: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au; mức độ hoạt động giảm dần từ trái sang phải.',
    'K, Na, Ca tác dụng với nước ở điều kiện thường tạo base và $\\mathrm{H_2}$.',
    'Kim loại đứng trước H tác dụng với dung dịch acid giải phóng $\\mathrm{H_2}$.',
    'Kim loại đứng trước (trừ K, Na, Ca) đẩy kim loại đứng sau ra khỏi dung dịch muối.',
  ],
};
