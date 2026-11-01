/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    "Ôn tập chương 6: tính tốc độ trung bình từ đồ thị và bảng số liệu, biểu thức tốc độ, các yếu tố ảnh hưởng và hệ số nhiệt độ Van't Hoff.",
  intro:
    'Chương 6 trả lời hai câu hỏi: phản ứng nhanh hay chậm bao nhiêu, và làm thế nào để điều khiển nó. Bài ôn tập này hệ thống lại các công thức, cho em đọc đồ thị để tính tốc độ, luyện tập với các bài sinh tự động và làm các bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá các khái niệm: tốc độ trung bình, định luật tác dụng khối lượng, hệ số nhiệt độ.',
    'Đọc được đồ thị nồng độ theo thời gian và tính được tốc độ trung bình.',
    'Vận dụng các yếu tố ảnh hưởng để giải thích và điều khiển tốc độ phản ứng.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Các công thức của chương',
          head: ['Nội dung', 'Công thức', 'Chú ý'],
          rows: [
            [
              'Tốc độ trung bình',
              '$\\overline{v} = -\\dfrac{1}{a}\\dfrac{\\Delta C_{\\mathrm{A}}}{\\Delta t} = \\dfrac{1}{m}\\dfrac{\\Delta C_{\\mathrm{M}}}{\\Delta t}$',
              'Chất đầu có dấu trừ; chia cho hệ số của chất; kết quả luôn dương',
            ],
            [
              'Định luật tác dụng khối lượng',
              '$v = k \\cdot C_{\\mathrm{A}}^{a} \\cdot C_{\\mathrm{B}}^{b}$',
              'Số mũ bằng hệ số với phản ứng đơn giản; $k$ không phụ thuộc nồng độ',
            ],
            [
              "Hệ số Van't Hoff",
              '$\\dfrac{v_2}{v_1} = \\gamma^{\\frac{T_2 - T_1}{10}}$',
              'Với đa số phản ứng, $\\gamma$ từ $2$ đến $4$',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Các yếu tố làm tăng tốc độ phản ứng',
          head: ['Yếu tố', 'Cách làm', 'Lí do'],
          rows: [
            ['Nồng độ', 'Tăng nồng độ chất phản ứng', 'Tăng số va chạm hiệu quả'],
            ['Áp suất', 'Nén khí, chỉ với phản ứng có chất khí', 'Nồng độ khí tăng'],
            ['Nhiệt độ', 'Đun nóng', 'Nhiều hạt đủ năng lượng hơn, va chạm mạnh hơn'],
            ['Diện tích bề mặt', 'Nghiền nhỏ chất rắn', 'Diện tích tiếp xúc lớn hơn'],
            [
              'Chất xúc tác',
              'Thêm chất xúc tác phù hợp',
              'Giảm năng lượng hoạt hoá; không đổi về chất và lượng',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng của chương. Đáp án là số, dùng dấu phẩy thập phân như $0{,}002$. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Đọc đồ thị, tính tốc độ',
    instruction:
      'Đặt hai chốt vào đầu và cuối khoảng thời gian mà đề yêu cầu, đọc giá trị trên trục rồi tính tốc độ trung bình. Sai lần đầu, đồ thị sẽ kẻ đường gióng để em đọc lại. Bấm “Câu khác” để đổi đồ thị.',
  },
  examples: [
    {
      problem:
        'Hydrogen peroxide phân huỷ theo phản ứng $2\\mathrm{H_2O_2} \\rightarrow 2\\mathrm{H_2O} + \\mathrm{O_2}$. Thể tích khí oxygen thu được sau $0$, $15$, $30$, $45$, $60$ phút lần lượt là $0$, $16$, $30$, $40$, $48$ cm³. Tính tốc độ trung bình theo cm³/phút trong mỗi khoảng $15$ phút và nhận xét.',
      steps: [
        'Khoảng $0$–$15$ phút: $\\overline{v} = \\dfrac{16 - 0}{15} \\approx 1{,}07$ cm³/phút.',
        'Khoảng $15$–$30$ phút: $\\overline{v} = \\dfrac{30 - 16}{15} \\approx 0{,}93$ cm³/phút.',
        'Khoảng $30$–$45$ phút: $\\overline{v} = \\dfrac{40 - 30}{15} \\approx 0{,}67$ cm³/phút.',
        'Khoảng $45$–$60$ phút: $\\overline{v} = \\dfrac{48 - 40}{15} \\approx 0{,}53$ cm³/phút.',
      ],
      answer: 'Tốc độ giảm dần theo thời gian, vì nồng độ $\\mathrm{H_2O_2}$ giảm dần.',
    },
    {
      problem:
        "Một phản ứng ở $45\\,^\\circ\\mathrm{C}$ có tốc độ $0{,}068$ mol/(L·phút). Hệ số nhiệt độ Van't Hoff của phản ứng là $2$. Phải giảm xuống nhiệt độ nào để tốc độ phản ứng còn $0{,}017$ mol/(L·phút)?",
      steps: [
        'Tỉ số tốc độ: $\\dfrac{0{,}068}{0{,}017} = 4 = 2^2$.',
        'Như vậy $\\dfrac{T_1 - T_2}{10} = 2$, nên nhiệt độ phải giảm $20\\,^\\circ\\mathrm{C}$.',
        '$T_2 = 45 - 20 = 25\\,^\\circ\\mathrm{C}$.',
      ],
      answer: 'Phải giảm xuống $25\\,^\\circ\\mathrm{C}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây xảy ra nhanh nhất ở điều kiện thường?',
      options: [
        'Đinh sắt bị gỉ trong không khí ẩm',
        'Tinh bột lên men thành rượu',
        'Cồn cháy trong không khí',
        'Đá vôi bị nước mưa ăn mòn',
      ],
      answer: 2,
      hints: ['So sánh thời gian: vài giây, vài ngày hay nhiều năm.'],
      solution:
        'Cồn cháy chỉ trong vài giây; các quá trình còn lại kéo dài hàng ngày, hàng tháng hoặc hàng năm.',
    },
    {
      type: 'multi',
      prompt:
        'Cho khoảng $2$ g kẽm dạng hạt vào dung dịch $\\mathrm{H_2SO_4}$ $2$ M (dư) ở nhiệt độ thường. Những thay đổi nào làm phản ứng nhanh hơn?',
      options: [
        'Thay kẽm hạt bằng $2$ g kẽm bột',
        'Thay dung dịch $\\mathrm{H_2SO_4}$ $2$ M bằng dung dịch $4$ M',
        'Tiến hành ở $50\\,^\\circ\\mathrm{C}$',
        'Dùng gấp đôi thể tích dung dịch $\\mathrm{H_2SO_4}$ $2$ M',
        'Thay dung dịch $\\mathrm{H_2SO_4}$ $2$ M bằng dung dịch $1$ M',
      ],
      answers: [0, 1, 2],
      hints: [
        'Xét từng yếu tố: diện tích bề mặt, nồng độ, nhiệt độ.',
        'Thêm dung dịch cùng nồng độ có làm nồng độ thay đổi không?',
      ],
      solution:
        'Kẽm bột tăng diện tích bề mặt, $4$ M tăng nồng độ, $50\\,^\\circ\\mathrm{C}$ tăng nhiệt độ. Thêm dung dịch cùng nồng độ không đổi nồng độ; dung dịch $1$ M làm phản ứng chậm đi.',
    },
    {
      type: 'number',
      prompt:
        'Theo số liệu ở ví dụ 1, thể tích oxygen là $30$ cm³ sau $30$ phút và $48$ cm³ sau $60$ phút. Tính tốc độ trung bình trong khoảng $30$–$60$ phút theo cm³/phút.',
      answer: 0.6,
      tolerance: 0.001,
      unit: 'cm³/phút',
      hints: ['Oxygen là sản phẩm có hệ số $1$; tốc độ tính theo thể tích khí thu được.'],
      solution: '$\\overline{v} = \\dfrac{48 - 30}{60 - 30} = \\dfrac{18}{30} = 0{,}6$ cm³/phút.',
    },
    {
      type: 'number',
      prompt:
        "Một phản ứng ở $50\\,^\\circ\\mathrm{C}$ có tốc độ $0{,}032$ mol/(L·phút), hệ số nhiệt độ Van't Hoff bằng $2$. Phải giảm xuống bao nhiêu $^\\circ\\mathrm{C}$ để tốc độ còn $0{,}004$ mol/(L·phút)?",
      answer: 20,
      unit: '°C',
      hints: ['Lập tỉ số $\\dfrac{0{,}032}{0{,}004}$.', 'Viết tỉ số thành luỹ thừa của $2$.'],
      solution:
        'Tỉ số tốc độ là $8 = 2^3$, nên nhiệt độ giảm $30\\,^\\circ\\mathrm{C}$, còn $50 - 30 = 20\\,^\\circ\\mathrm{C}$.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng đơn giản $2\\mathrm{A} + \\mathrm{B} \\rightarrow \\mathrm{C}$ có $k = 0{,}5$ (đơn vị phù hợp), $C_{\\mathrm{A}} = 0{,}2$ M, $C_{\\mathrm{B}} = 0{,}4$ M. Tính tốc độ phản ứng theo mol/(L·s).',
      answer: 0.008,
      tolerance: 0.00001,
      unit: 'mol/(L·s)',
      hints: ['Biểu thức: $v = k \\cdot C_{\\mathrm{A}}^2 \\cdot C_{\\mathrm{B}}$.'],
      solution:
        '$v = 0{,}5 \\cdot 0{,}2^2 \\cdot 0{,}4 = 0{,}5 \\cdot 0{,}04 \\cdot 0{,}4 = 0{,}008$ mol/(L·s).',
    },
    {
      type: 'number',
      prompt:
        'Coi $2\\mathrm{SO_2(g)} + \\mathrm{O_2(g)} \\rightarrow 2\\mathrm{SO_3(g)}$ là phản ứng đơn giản. Nén hỗn hợp khí để thể tích giảm $3$ lần, nhiệt độ không đổi. Tốc độ phản ứng tăng bao nhiêu lần?',
      answer: 27,
      hints: [
        'Nồng độ mỗi khí tăng $3$ lần.',
        'Biểu thức tốc độ có $C_{\\mathrm{SO_2}}^2$ và $C_{\\mathrm{O_2}}$.',
      ],
      solution:
        '$v = k \\cdot C_{\\mathrm{SO_2}}^2 \\cdot C_{\\mathrm{O_2}}$, nên tốc độ mới gấp $3^2 \\cdot 3 = 27$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $2\\mathrm{N_2O_5} \\rightarrow 4\\mathrm{NO_2} + \\mathrm{O_2}$ có tốc độ trung bình $2 \\cdot 10^{-5}$ mol/(L·s) trong $50$ s đầu. Nồng độ $\\mathrm{NO_2}$ tăng thêm bao nhiêu M trong thời gian đó?',
      answer: 0.004,
      tolerance: 0.00001,
      unit: 'M',
      hints: ['$\\overline{v} = \\dfrac{1}{4}\\dfrac{\\Delta C_{\\mathrm{NO_2}}}{\\Delta t}$.'],
      solution:
        '$\\Delta C_{\\mathrm{NO_2}} = 4 \\cdot \\overline{v} \\cdot \\Delta t = 4 \\cdot 2 \\cdot 10^{-5} \\cdot 50 = 0{,}004$ M.',
    },
    {
      type: 'number',
      prompt:
        "Một phản ứng có tốc độ $0{,}02$ mol/(L·s) ở $20\\,^\\circ\\mathrm{C}$ và $0{,}18$ mol/(L·s) ở $40\\,^\\circ\\mathrm{C}$. Tính hệ số nhiệt độ Van't Hoff.",
      answer: 3,
      hints: [
        'Tỉ số hai tốc độ bằng $\\gamma$ mũ bao nhiêu khi nhiệt độ tăng $20\\,^\\circ\\mathrm{C}$?',
      ],
      solution:
        '$\\gamma^{\\frac{40 - 20}{10}} = \\dfrac{0{,}18}{0{,}02} = 9$, tức $\\gamma^2 = 9$, nên $\\gamma = 3$.',
    },
    {
      type: 'choice',
      prompt:
        'Phản ứng $\\mathrm{A} \\rightarrow \\mathrm{B}$ có nồng độ A lần lượt là $0{,}80$ M, $0{,}56$ M và $0{,}40$ M sau $0$ s, $10$ s và $20$ s. So sánh tốc độ trung bình của hai khoảng $0$–$10$ s ($v_1$) và $10$–$20$ s ($v_2$).',
      options: ['$v_1 > v_2$', '$v_1 < v_2$', '$v_1 = v_2$', 'Không đủ dữ kiện'],
      answer: 0,
      hints: ['Hai khoảng dài bằng nhau; so sánh lượng A giảm trong mỗi khoảng.'],
      solution:
        '$v_1 = \\dfrac{0{,}80 - 0{,}56}{10} = 0{,}024$ M/s, $v_2 = \\dfrac{0{,}56 - 0{,}40}{10} = 0{,}016$ M/s, nên $v_1 > v_2$.',
    },
    {
      type: 'choice',
      prompt: 'Hằng số tốc độ $k$ của một phản ứng phụ thuộc vào',
      options: [
        'nồng độ các chất phản ứng',
        'bản chất của chất phản ứng và nhiệt độ',
        'thể tích bình phản ứng',
        'thời gian phản ứng',
      ],
      answer: 1,
      hints: ['$k$ là hằng số khi nồng độ thay đổi trong phản ứng.'],
      solution:
        '$k$ chỉ phụ thuộc vào bản chất của chất phản ứng và nhiệt độ, không phụ thuộc nồng độ.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các bước của thí nghiệm chứng minh ảnh hưởng của nhiệt độ đến tốc độ phản ứng giữa kẽm và dung dịch $\\mathrm{HCl}$.',
      items: [
        'Cùng lúc thả vào mỗi ống một viên kẽm giống nhau.',
        'Đặt một ống vào cốc nước nóng, ống còn lại để ở nhiệt độ phòng, chờ ổn định.',
        'Lấy hai ống nghiệm, cho vào mỗi ống cùng một thể tích dung dịch $\\mathrm{HCl}$ cùng nồng độ.',
        'So sánh tốc độ thoát khí ở hai ống rồi rút ra kết luận.',
      ],
      answer: [2, 1, 0, 3],
      hints: [
        'Chuẩn bị dung dịch trước, rồi tạo hai nhiệt độ khác nhau, sau cùng mới cho kẽm vào.',
      ],
      solution:
        'Chuẩn bị hai ống acid giống nhau, tạo hai mức nhiệt độ, thả kẽm cùng lúc, rồi so sánh tốc độ thoát khí. Chỉ nhiệt độ khác nhau nên kết luận đáng tin cậy.',
    },
    {
      type: 'text',
      prompt:
        'Chất làm tăng tốc độ phản ứng nhưng vẫn được bảo toàn về chất và lượng khi kết thúc phản ứng được gọi là gì?',
      accept: ['chất xúc tác', 'xúc tác'],
      hints: ['$\\mathrm{MnO_2}$ đóng vai trò này trong phản ứng phân huỷ $\\mathrm{H_2O_2}$.'],
      solution: 'Đó là chất xúc tác.',
    },
  ],
  takeaways: [
    'Đồ thị nồng độ theo thời gian: dây cung càng dốc thì tốc độ trung bình càng lớn; tốc độ thường giảm dần theo thời gian.',
    'Đọc đúng hệ số của chất khi tính tốc độ và khi viết biểu thức tốc độ.',
    'Mỗi lần tăng $10\\,^\\circ\\mathrm{C}$, tốc độ nhân với $\\gamma$; hãy đổi bài toán nhiệt độ về luỹ thừa của $\\gamma$.',
  ],
};
