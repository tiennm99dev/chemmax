/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 1: hằng số cân bằng, chuyển dịch cân bằng theo nguyên lí Le Chatelier, sự điện li, thuyết Brønsted – Lowry, pH và chuẩn độ acid – base.',
  intro:
    'Chương 1 cho thấy nhiều phản ứng không đi đến cùng mà dừng ở một trạng thái cân bằng, và các cân bằng trong nước quyết định độ acid của dung dịch. Bài ôn tập này hệ thống lại kiến thức, luyện dự đoán chiều chuyển dịch và tính toán với $K_C$, pH, chuẩn độ.',
  objectives: [
    'Hệ thống hoá kiến thức về cân bằng hoá học và cân bằng trong dung dịch nước.',
    'Dự đoán đúng chiều chuyển dịch cân bằng khi nhiệt độ, áp suất, nồng độ thay đổi.',
    'Tính được $K_C$, pH và nồng độ dung dịch từ kết quả chuẩn độ.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Cân bằng hoá học',
          head: ['Nội dung', 'Ghi nhớ'],
          rows: [
            ['Trạng thái cân bằng', '$v_t = v_n$; nồng độ các chất không đổi; là cân bằng động'],
            [
              'Hằng số cân bằng',
              '$K_C = \\dfrac{[\\mathrm{C}]^c[\\mathrm{D}]^d}{[\\mathrm{A}]^a[\\mathrm{B}]^b}$; không đưa chất rắn vào; chỉ phụ thuộc nhiệt độ và bản chất phản ứng',
            ],
            ['Tăng nhiệt độ', 'Chuyển dịch theo chiều thu nhiệt'],
            [
              'Tăng áp suất',
              'Chuyển dịch theo chiều giảm số mol khí; không ảnh hưởng nếu số mol khí hai vế bằng nhau',
            ],
            ['Tăng nồng độ một chất', 'Chuyển dịch theo chiều làm giảm chất đó'],
            ['Chất xúc tác', 'Không làm chuyển dịch cân bằng, chỉ giúp đạt cân bằng nhanh hơn'],
          ],
        },
        {
          type: 'table',
          caption: 'Cân bằng trong dung dịch nước',
          head: ['Nội dung', 'Ghi nhớ'],
          rows: [
            [
              'Chất điện li',
              'Mạnh: phân li hoàn toàn ($\\rightarrow$); yếu: phân li một phần ($\\rightleftharpoons$)',
            ],
            ['Brønsted – Lowry', 'Acid cho proton, base nhận proton'],
            [
              'pH',
              '$\\mathrm{pH} = -\\lg[\\mathrm{H^+}]$; ở $25\\,^\\circ\\mathrm{C}$, $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$',
            ],
            [
              'Sự thuỷ phân',
              '$\\mathrm{Al^{3+}}$, $\\mathrm{Fe^{3+}}$ tạo môi trường acid; $\\mathrm{CO_3^{2-}}$ tạo môi trường base',
            ],
            [
              'Chuẩn độ',
              '$C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$ tại điểm tương đương',
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
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng tính toán của chương. Đáp án là số, dùng dấu phẩy thập phân như $0{,}08$. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Dự đoán chiều chuyển dịch cân bằng',
    instruction:
      'Mỗi câu cho một cân bằng và một tác động. Chọn chiều chuyển dịch, em sẽ biết ngay đúng hay sai và lí do. Mỗi lượt có $8$ câu.',
  },
  examples: [
    {
      problem:
        'Cho cân bằng $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}$, $\\Delta_r H^\\circ_{298} < 0$. Muốn thu được nhiều $\\mathrm{NH_3}$ hơn, nên thay đổi áp suất và nồng độ $\\mathrm{NH_3}$ như thế nào? Vì sao không dùng nhiệt độ quá thấp?',
      steps: [
        'Chiều thuận làm giảm số mol khí từ $4$ xuống $2$, nên cần tăng áp suất.',
        'Lấy bớt $\\mathrm{NH_3}$ ra khỏi hệ thì cân bằng chuyển dịch theo chiều thuận để tạo lại $\\mathrm{NH_3}$.',
        'Chiều thuận toả nhiệt nên nhiệt độ thấp có lợi cho cân bằng, nhưng tốc độ phản ứng khi đó quá chậm.',
      ],
      answer:
        'Tăng áp suất, lấy bớt $\\mathrm{NH_3}$; dùng nhiệt độ vừa phải kèm xúc tác để phản ứng đủ nhanh.',
    },
    {
      problem:
        'Trộn $10$ mL dung dịch $\\mathrm{HCl}$ $0{,}1$ M với $10$ mL dung dịch $\\mathrm{NaOH}$ $0{,}08$ M. Tính pH của dung dịch thu được.',
      steps: [
        '$n_{\\mathrm{H^+}} = 0{,}01 \\cdot 0{,}1 = 0{,}001$ mol; $n_{\\mathrm{OH^-}} = 0{,}01 \\cdot 0{,}08 = 0{,}0008$ mol.',
        '$\\mathrm{H^+}$ dư $0{,}0002$ mol, trong thể tích $0{,}02$ L.',
        '$[\\mathrm{H^+}] = \\dfrac{0{,}0002}{0{,}02} = 0{,}01$ M, nên $\\mathrm{pH} = 2$.',
      ],
      answer: '$\\mathrm{pH} = 2$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hằng số cân bằng $K_C$ của một phản ứng xác định chỉ phụ thuộc vào',
      options: ['nhiệt độ', 'nồng độ ban đầu', 'áp suất', 'chất xúc tác'],
      answer: 0,
      hints: ['Nhớ lại kết quả thí nghiệm với các nồng độ ban đầu khác nhau.'],
      solution: 'Với một phản ứng xác định, $K_C$ chỉ thay đổi khi nhiệt độ thay đổi.',
    },
    {
      type: 'number',
      prompt:
        'Cho cân bằng $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}$ với $[\\mathrm{N_2}] = 0{,}2$ M, $[\\mathrm{H_2}] = 0{,}1$ M, $[\\mathrm{NH_3}] = 0{,}02$ M. Tính $K_C$.',
      answer: 2,
      hints: ['Số mũ bằng hệ số trong phương trình: $\\mathrm{H_2}$ có số mũ $3$.'],
      solution:
        '$K_C = \\dfrac{0{,}02^2}{0{,}2 \\cdot 0{,}1^3} = \\dfrac{0{,}0004}{0{,}0002} = 2$.',
    },
    {
      type: 'number',
      prompt:
        'Ở một nhiệt độ, $\\mathrm{CaCO_3(s)} \\rightleftharpoons \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$ có $K_C = 0{,}05$. Trong bình kín $2$ L, lúc cân bằng có bao nhiêu mol $\\mathrm{CO_2}$?',
      answer: 0.1,
      unit: 'mol',
      hints: ['Biểu thức $K_C$ không có chất rắn.'],
      solution: '$[\\mathrm{CO_2}] = 0{,}05$ M, nên $n = 0{,}05 \\cdot 2 = 0{,}1$ mol.',
    },
    {
      type: 'choice',
      prompt:
        'Cho cân bằng $\\mathrm{2SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons \\mathrm{2SO_3(g)}$, $\\Delta_r H^\\circ_{298} < 0$. Tác động nào làm cân bằng chuyển dịch theo chiều nghịch?',
      options: [
        'Tăng nhiệt độ',
        'Tăng áp suất',
        'Thêm khí $\\mathrm{O_2}$',
        'Lấy bớt khí $\\mathrm{SO_3}$',
      ],
      answer: 0,
      hints: ['Chiều nghịch ở đây thu nhiệt và làm tăng số mol khí.'],
      solution:
        'Tăng nhiệt độ làm cân bằng chuyển dịch theo chiều thu nhiệt, là chiều nghịch. Ba tác động còn lại đều làm cân bằng chuyển dịch theo chiều thuận.',
    },
    {
      type: 'choice',
      prompt:
        'Cho cân bằng $\\mathrm{C(s)} + \\mathrm{CO_2(g)} \\rightleftharpoons \\mathrm{2CO(g)}$. Khi nén hệ để tăng áp suất, cân bằng chuyển dịch theo',
      options: [
        'chiều nghịch',
        'chiều thuận',
        'cả hai chiều như nhau',
        'không chiều nào, vì có chất rắn',
      ],
      answer: 0,
      hints: ['Chỉ đếm số mol khí, không đếm chất rắn.'],
      solution:
        'Vế trái có $1$ mol khí, vế phải có $2$ mol khí. Tăng áp suất thì cân bằng chuyển dịch theo chiều giảm số mol khí, là chiều nghịch.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{HCO_3^-} + \\mathrm{OH^-} \\rightarrow \\mathrm{CO_3^{2-}} + \\mathrm{H_2O}$, ion $\\mathrm{HCO_3^-}$ đóng vai trò',
      options: ['acid', 'base', 'chất oxi hoá', 'chất không điện li'],
      answer: 0,
      hints: ['$\\mathrm{HCO_3^-}$ mất đi thứ gì để thành $\\mathrm{CO_3^{2-}}$?'],
      solution:
        '$\\mathrm{HCO_3^-}$ cho proton thành $\\mathrm{CO_3^{2-}}$ nên là acid trong phản ứng này.',
    },
    {
      type: 'number',
      prompt:
        'Tính pH của dung dịch $\\mathrm{H_2SO_4}$ $0{,}005$ M (coi acid phân li hoàn toàn cả hai nấc).',
      answer: 2,
      hints: ['Mỗi đơn vị $\\mathrm{H_2SO_4}$ cho hai ion $\\mathrm{H^+}$.'],
      solution: '$[\\mathrm{H^+}] = 2 \\cdot 0{,}005 = 10^{-2}$ M, nên $\\mathrm{pH} = 2$.',
    },
    {
      type: 'number',
      prompt: 'Một dung dịch có $\\mathrm{pH} = 11$. Tính $[\\mathrm{OH^-}]$, theo M.',
      answer: 0.001,
      unit: 'M',
      hints: [
        '$[\\mathrm{H^+}] = 10^{-11}$ M; dùng $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$.',
      ],
      solution: '$[\\mathrm{OH^-}] = \\dfrac{10^{-14}}{10^{-11}} = 10^{-3} = 0{,}001$ M.',
    },
    {
      type: 'number',
      prompt:
        'Dung dịch A có $\\mathrm{pH} = 2$, dung dịch B có $\\mathrm{pH} = 4$. Nồng độ $\\mathrm{H^+}$ của A gấp bao nhiêu lần của B?',
      answer: 100,
      hints: ['pH giảm $1$ đơn vị thì $[\\mathrm{H^+}]$ tăng $10$ lần.'],
      solution: '$\\dfrac{10^{-2}}{10^{-4}} = 100$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ $20$ mL dung dịch $\\mathrm{NaOH}$ cần vừa đủ $15$ mL dung dịch $\\mathrm{HCl}$ $0{,}1$ M. Tính nồng độ dung dịch $\\mathrm{NaOH}$, theo M.',
      answer: 0.075,
      unit: 'M',
      hints: [
        '$C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}} = C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}}$.',
      ],
      solution: '$C_{\\mathrm{NaOH}} = \\dfrac{0{,}1 \\cdot 15}{20} = 0{,}075$ M.',
    },
    {
      type: 'choice',
      prompt: 'Dung dịch muối nào sau đây có $\\mathrm{pH} > 7$?',
      options: [
        '$\\mathrm{Na_2CO_3}$',
        '$\\mathrm{AlCl_3}$',
        '$\\mathrm{FeCl_3}$',
        '$\\mathrm{NaCl}$',
      ],
      answer: 0,
      hints: ['Tìm ion thuỷ phân tạo ra $\\mathrm{OH^-}$.'],
      solution:
        '$\\mathrm{CO_3^{2-}}$ thuỷ phân tạo $\\mathrm{OH^-}$ nên $\\mathrm{Na_2CO_3}$ có môi trường base. $\\mathrm{AlCl_3}$, $\\mathrm{FeCl_3}$ có môi trường acid; $\\mathrm{NaCl}$ trung tính.',
    },
    {
      type: 'number',
      prompt:
        'Trộn $20$ mL dung dịch $\\mathrm{NaOH}$ $0{,}3$ M với $20$ mL dung dịch $\\mathrm{HCl}$ $0{,}1$ M. Tính pH của dung dịch thu được.',
      answer: 13,
      hints: [
        'Tính số mol $\\mathrm{OH^-}$ và $\\mathrm{H^+}$ để xem chất nào dư.',
        'Thể tích sau khi trộn là $40$ mL.',
      ],
      solution:
        '$n_{\\mathrm{OH^-}} = 0{,}006$ mol, $n_{\\mathrm{H^+}} = 0{,}002$ mol nên $\\mathrm{OH^-}$ dư $0{,}004$ mol. $[\\mathrm{OH^-}] = \\dfrac{0{,}004}{0{,}04} = 0{,}1$ M. Khi đó $[\\mathrm{H^+}] = 10^{-13}$ M và $\\mathrm{pH} = 13$.',
    },
  ],
  takeaways: [
    'Khi gặp một tác động, hãy hỏi: chiều nào làm giảm tác động đó? Đó là chiều chuyển dịch của cân bằng.',
    'Viết $K_C$ với số mũ là hệ số trong phương trình, không có chất rắn.',
    'Tính pH: tìm $[\\mathrm{H^+}]$ trước; với dung dịch base, tìm $[\\mathrm{OH^-}]$ rồi đổi sang $[\\mathrm{H^+}]$.',
    'Chuẩn độ: số mol acid bằng số mol base tại điểm tương đương.',
  ],
};
