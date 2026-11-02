/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sự điện li, chất điện li mạnh và yếu, thuyết acid – base Brønsted – Lowry, pH và ý nghĩa của pH, sự thuỷ phân của ion và chuẩn độ acid – base.',
  intro:
    'Nước muối dẫn điện còn nước đường thì không. Nước chanh chua còn nước xà phòng thì nhờn. Những khác biệt ấy bắt nguồn từ các ion có trong dung dịch và từ nồng độ ion $\\mathrm{H^+}$, được đo bằng pH.',
  objectives: [
    'Nêu được khái niệm sự điện li, chất điện li; viết được phương trình điện li của chất điện li mạnh và yếu.',
    'Xác định được acid, base trong một phản ứng theo thuyết Brønsted – Lowry.',
    'Tính được pH từ nồng độ ion và nêu được ý nghĩa của pH trong thực tiễn.',
    'Giải thích được môi trường của một số dung dịch muối bằng sự thuỷ phân của ion và nêu được ý nghĩa thực tiễn của sự thuỷ phân.',
    'Mô tả được thí nghiệm chuẩn độ acid mạnh và base mạnh, tính được nồng độ từ kết quả chuẩn độ.',
  ],
  sections: [
    {
      heading: 'Sự điện li',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sự điện li và chất điện li',
          text: 'Sự điện li là quá trình phân li các chất trong nước tạo thành ion. Chất tan trong nước phân li ra ion gọi là chất điện li; acid, base và muối là các chất điện li. Chất tan trong nước mà không phân li ra ion, như saccharose hay ethanol, là chất không điện li.',
        },
        {
          type: 'list',
          items: [
            'Chất điện li mạnh phân li hoàn toàn, phương trình dùng mũi tên $\\rightarrow$: acid mạnh, base mạnh và hầu hết các muối tan.',
            'Chất điện li yếu chỉ phân li một phần, phương trình dùng kí hiệu $\\rightleftharpoons$: acid yếu, base yếu.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{Ba(OH)_2} \\rightarrow \\mathrm{Ba^{2+}} + \\mathrm{2OH^-} \\qquad \\mathrm{HF} \\rightleftharpoons \\mathrm{H^+} + \\mathrm{F^-}',
        },
        { type: 'widget', name: 'dien-li' },
      ],
    },
    {
      heading: 'Thuyết Brønsted – Lowry về acid – base',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Acid và base',
          text: 'Acid là chất cho proton ($\\mathrm{H^+}$). Base là chất nhận proton. Chất vừa có thể cho, vừa có thể nhận proton là chất lưỡng tính, như $\\mathrm{HCO_3^-}$ hay $\\mathrm{H_2O}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{HCl} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_3O^+} + \\mathrm{Cl^-} \\qquad \\mathrm{NH_3} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{OH^-}',
        },
        {
          type: 'p',
          text: 'Trong phương trình đầu, $\\mathrm{HCl}$ cho proton nên là acid, $\\mathrm{H_2O}$ nhận proton nên là base. Trong phương trình sau, $\\mathrm{NH_3}$ nhận proton nên là base, còn $\\mathrm{H_2O}$ cho proton nên là acid. Vai trò của một chất tuỳ thuộc vào phản ứng mà nó tham gia. Theo thuyết này, base không nhất thiết phải chứa nhóm $\\mathrm{OH}$, như $\\mathrm{NH_3}$ hay $\\mathrm{CO_3^{2-}}$.',
        },
      ],
    },
    {
      heading: 'Khái niệm pH và ý nghĩa',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Công thức pH',
          text: '$$\\mathrm{pH} = -\\lg[\\mathrm{H^+}]$$ Nếu $[\\mathrm{H^+}] = 10^{-a}$ M thì $\\mathrm{pH} = a$. Ở $25\\,^\\circ\\mathrm{C}$, trong nước và các dung dịch loãng: $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$.',
        },
        {
          type: 'table',
          caption: 'Môi trường của dung dịch ở 25 °C',
          head: ['Môi trường', 'Nồng độ ion', 'pH'],
          rows: [
            ['Acid', '$[\\mathrm{H^+}] > 10^{-7}$ M', '$\\mathrm{pH} < 7$'],
            ['Trung tính', '$[\\mathrm{H^+}] = 10^{-7}$ M', '$\\mathrm{pH} = 7$'],
            ['Base', '$[\\mathrm{H^+}] < 10^{-7}$ M', '$\\mathrm{pH} > 7$'],
          ],
        },
        { type: 'widget', name: 'thang-ph' },
        {
          type: 'p',
          text: 'pH được xác định bằng máy đo pH, giấy pH hoặc chất chỉ thị như quỳ tím, phenolphthalein. pH có ý nghĩa lớn trong đời sống: máu người có pH khoảng $7{,}4$; mỗi loại cây trồng phát triển tốt trong đất có pH thích hợp, như cây chè ở pH từ $4{,}5$ đến $5{,}5$; pH của nước bể bơi, thực phẩm và mĩ phẩm đều cần được kiểm soát.',
        },
      ],
    },
    {
      heading: 'Sự thuỷ phân của các ion',
      blocks: [
        {
          type: 'p',
          text: 'Khi tan trong nước, một số ion của muối phản ứng với nước tạo ra $\\mathrm{H^+}$ hoặc $\\mathrm{OH^-}$, làm dung dịch có môi trường acid hoặc base. Đó là sự thuỷ phân của ion.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Al^{3+}} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{Al(OH)^{2+}} + \\mathrm{H^+} \\qquad \\mathrm{Fe^{3+}} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{Fe(OH)^{2+}} + \\mathrm{H^+}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CO_3^{2-}} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{HCO_3^-} + \\mathrm{OH^-}',
        },
        {
          type: 'list',
          items: [
            'Dung dịch $\\mathrm{AlCl_3}$, $\\mathrm{FeCl_3}$ có môi trường acid ($\\mathrm{pH} < 7$), vì $\\mathrm{Al^{3+}}$, $\\mathrm{Fe^{3+}}$ thuỷ phân tạo $\\mathrm{H^+}$.',
            'Dung dịch $\\mathrm{Na_2CO_3}$ có môi trường base ($\\mathrm{pH} > 7$), vì $\\mathrm{CO_3^{2-}}$ thuỷ phân tạo $\\mathrm{OH^-}$.',
            'Dung dịch $\\mathrm{NaCl}$ có môi trường trung tính, vì $\\mathrm{Na^+}$ và $\\mathrm{Cl^-}$ không thuỷ phân.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa thực tiễn',
          text: 'Phèn chua được dùng để làm trong nước: $\\mathrm{Al^{3+}}$ thuỷ phân tạo kết tủa keo $\\mathrm{Al(OH)_3}$, kéo theo các hạt lơ lửng lắng xuống; muối $\\mathrm{Fe^{3+}}$ cũng có tác dụng tương tự. Ở đất chua, $\\mathrm{Al^{3+}}$ tự do thuỷ phân tạo $\\mathrm{H^+}$, làm đất chua hơn và bất lợi cho cây trồng. Dung dịch $\\mathrm{Na_2CO_3}$ có môi trường base; muối này được dùng trong công nghiệp thực phẩm, dệt, nhuộm, thuỷ tinh.',
        },
      ],
    },
    {
      heading: 'Chuẩn độ acid – base',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chuẩn độ',
          text: 'Chuẩn độ là phương pháp xác định nồng độ của một chất bằng một dung dịch đã biết nồng độ (dung dịch chuẩn). Một dung dịch được nhỏ từ burette xuống bình tam giác chứa dung dịch kia đến khi hai chất vừa phản ứng hết, nhận ra nhờ chất chỉ thị đổi màu.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng pipette lấy $10$ mL dung dịch chuẩn $\\mathrm{HCl}$ $0{,}1$ M cho vào bình tam giác, thêm $1$ đến $2$ giọt phenolphthalein.',
            'Cho dung dịch $\\mathrm{NaOH}$ cần xác định nồng độ vào burette, chỉnh về mức $0$.',
            'Mở khoá burette, nhỏ từng giọt $\\mathrm{NaOH}$ xuống bình tam giác, vừa nhỏ vừa lắc đều.',
            'Dừng khi dung dịch chuyển sang màu hồng nhạt bền trong khoảng $10$ giây. Ghi thể tích $\\mathrm{NaOH}$ đã dùng, lặp lại ít nhất ba lần rồi lấy trung bình.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính nồng độ',
          text: 'Theo $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$, tại điểm tương đương số mol hai chất bằng nhau: $$C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$$',
        },
      ],
    },
  ],
  explore: {
    title: 'Chuẩn độ một dung dịch base chưa biết nồng độ',
    instruction:
      'Nhỏ dung dịch $\\mathrm{NaOH}$ chưa biết nồng độ xuống bình chứa $10$ mL $\\mathrm{HCl}$ $0{,}1$ M, theo dõi màu dung dịch và đường pH. Dừng ngay khi chất chỉ thị đổi màu, đọc burette, rồi tính nồng độ $\\mathrm{NaOH}$. Thử đổi chất chỉ thị để thấy cả ba đều đổi màu trong bước nhảy pH.',
  },
  examples: [
    {
      problem:
        'Viết phương trình điện li của $\\mathrm{Na_2SO_4}$ và $\\mathrm{CH_3COOH}$. Trong $200$ mL dung dịch $\\mathrm{Na_2SO_4}$ $0{,}1$ M, nồng độ ion $\\mathrm{Na^+}$ bằng bao nhiêu?',
      steps: [
        '$\\mathrm{Na_2SO_4}$ là muối tan, điện li mạnh: $\\mathrm{Na_2SO_4} \\rightarrow \\mathrm{2Na^+} + \\mathrm{SO_4^{2-}}$.',
        '$\\mathrm{CH_3COOH}$ là acid yếu: $\\mathrm{CH_3COOH} \\rightleftharpoons \\mathrm{CH_3COO^-} + \\mathrm{H^+}$.',
        'Mỗi đơn vị $\\mathrm{Na_2SO_4}$ cho hai ion $\\mathrm{Na^+}$, nên $[\\mathrm{Na^+}] = 2 \\cdot 0{,}1 = 0{,}2$ M. Nồng độ không phụ thuộc thể tích dung dịch đã lấy.',
      ],
      answer: '$[\\mathrm{Na^+}] = 0{,}2$ M.',
    },
    {
      problem:
        'Nước Javel chứa ion $\\mathrm{ClO^-}$. Ion này nhận proton từ nước tạo $\\mathrm{HClO}$. Viết phương trình, xác định acid, base và môi trường của nước Javel.',
      steps: [
        'Phương trình: $\\mathrm{ClO^-} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{HClO} + \\mathrm{OH^-}$.',
        '$\\mathrm{ClO^-}$ nhận proton nên là base; $\\mathrm{H_2O}$ cho proton nên là acid.',
        'Phản ứng tạo $\\mathrm{OH^-}$ nên dung dịch có môi trường base.',
      ],
      answer: '$\\mathrm{ClO^-}$ là base, $\\mathrm{H_2O}$ là acid; nước Javel có môi trường base.',
    },
    {
      problem:
        'Tính pH của dung dịch $\\mathrm{HCl}$ $0{,}01$ M và dung dịch $\\mathrm{NaOH}$ $0{,}01$ M.',
      steps: [
        '$\\mathrm{HCl}$ điện li hoàn toàn: $[\\mathrm{H^+}] = 0{,}01 = 10^{-2}$ M, nên $\\mathrm{pH} = 2$.',
        '$\\mathrm{NaOH}$ điện li hoàn toàn: $[\\mathrm{OH^-}] = 10^{-2}$ M.',
        '$[\\mathrm{H^+}] = \\dfrac{10^{-14}}{10^{-2}} = 10^{-12}$ M, nên $\\mathrm{pH} = 12$.',
      ],
      answer: 'pH của $\\mathrm{HCl}$ là $2$, pH của $\\mathrm{NaOH}$ là $12$.',
    },
    {
      problem:
        'Chuẩn độ $10$ mL dung dịch $\\mathrm{HCl}$ $0{,}1$ M bằng dung dịch $\\mathrm{NaOH}$ với chất chỉ thị phenolphthalein. Ba lần đo cần $12{,}4$ mL, $12{,}5$ mL và $12{,}6$ mL $\\mathrm{NaOH}$. Tính nồng độ dung dịch $\\mathrm{NaOH}$.',
      steps: [
        'Thể tích trung bình: $V_{\\mathrm{NaOH}} = \\dfrac{12{,}4 + 12{,}5 + 12{,}6}{3} = 12{,}5$ mL.',
        'Tại điểm tương đương: $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
        '$C_{\\mathrm{NaOH}} = \\dfrac{0{,}1 \\cdot 10}{12{,}5} = 0{,}08$ M.',
      ],
      answer: '$C_{\\mathrm{NaOH}} = 0{,}08$ M.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Dung dịch nào sau đây dẫn điện được?',
      options: ['Nước muối', 'Dung dịch saccharose', 'Dung dịch ethanol', 'Nước tinh khiết'],
      answer: 0,
      hints: ['Dung dịch dẫn điện khi có các ion chuyển động tự do.'],
      solution:
        '$\\mathrm{NaCl}$ phân li thành $\\mathrm{Na^+}$ và $\\mathrm{Cl^-}$ nên nước muối dẫn điện. Saccharose và ethanol không điện li; nước tinh khiết gần như không dẫn điện.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các chất điện li mạnh.',
      options: [
        '$\\mathrm{HCl}$',
        '$\\mathrm{Ba(OH)_2}$',
        '$\\mathrm{KNO_3}$',
        '$\\mathrm{CH_3COOH}$',
        '$\\mathrm{HF}$',
        '$\\mathrm{C_2H_5OH}$',
      ],
      answers: [0, 1, 2],
      hints: ['Chất điện li mạnh gồm acid mạnh, base mạnh và hầu hết muối tan.'],
      solution:
        '$\\mathrm{HCl}$ là acid mạnh, $\\mathrm{Ba(OH)_2}$ là base mạnh, $\\mathrm{KNO_3}$ là muối tan. $\\mathrm{CH_3COOH}$, $\\mathrm{HF}$ là acid yếu; $\\mathrm{C_2H_5OH}$ không điện li.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{CO_3^{2-}} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{HCO_3^-} + \\mathrm{OH^-}$, theo thuyết Brønsted – Lowry, $\\mathrm{H_2O}$ đóng vai trò gì?',
      options: ['Acid', 'Base', 'Chất không điện li', 'Vừa acid vừa base trong cùng phản ứng'],
      answer: 0,
      hints: ['Xem $\\mathrm{H_2O}$ cho hay nhận proton.'],
      solution:
        '$\\mathrm{H_2O}$ cho proton để trở thành $\\mathrm{OH^-}$ nên là acid; $\\mathrm{CO_3^{2-}}$ nhận proton nên là base.',
    },
    {
      type: 'number',
      prompt: 'Tính pH của dung dịch $\\mathrm{HNO_3}$ $0{,}001$ M.',
      answer: 3,
      hints: ['Acid mạnh điện li hoàn toàn nên $[\\mathrm{H^+}]$ bằng nồng độ acid.'],
      solution: '$[\\mathrm{H^+}] = 10^{-3}$ M nên $\\mathrm{pH} = 3$.',
    },
    {
      type: 'number',
      prompt: 'Tính pH của dung dịch $\\mathrm{Ba(OH)_2}$ $0{,}005$ M.',
      answer: 12,
      hints: [
        'Mỗi đơn vị $\\mathrm{Ba(OH)_2}$ cho hai ion $\\mathrm{OH^-}$.',
        'Tính $[\\mathrm{OH^-}]$ rồi dùng $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$.',
      ],
      solution:
        '$[\\mathrm{OH^-}] = 2 \\cdot 0{,}005 = 10^{-2}$ M, nên $[\\mathrm{H^+}] = 10^{-12}$ M và $\\mathrm{pH} = 12$.',
    },
    {
      type: 'choice',
      prompt: 'Đo pH của nước chanh được $2{,}4$. Nhận định nào sau đây không đúng?',
      options: [
        '$[\\mathrm{H^+}] = 0{,}24$ mol/L',
        'Nước chanh có môi trường acid',
        '$[\\mathrm{H^+}] = 10^{-2{,}4}$ mol/L',
        '$[\\mathrm{OH^-}]$ nhỏ hơn $10^{-7}$ mol/L',
      ],
      answer: 0,
      hints: ['Áp dụng $[\\mathrm{H^+}] = 10^{-\\mathrm{pH}}$.'],
      solution:
        '$[\\mathrm{H^+}] = 10^{-2{,}4} \\approx 0{,}004$ mol/L, không phải $0{,}24$ mol/L. Các nhận định còn lại đều đúng, vì $[\\mathrm{OH^-}] = 10^{-11{,}6}$ mol/L.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi dung dịch muối với môi trường của nó.',
      left: ['$\\mathrm{Na_2CO_3}$', '$\\mathrm{FeCl_3}$', '$\\mathrm{NaCl}$'],
      right: ['Môi trường base', 'Môi trường acid', 'Môi trường trung tính'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Xem ion nào thuỷ phân và tạo ra $\\mathrm{H^+}$ hay $\\mathrm{OH^-}$.'],
      solution:
        '$\\mathrm{CO_3^{2-}}$ thuỷ phân tạo $\\mathrm{OH^-}$; $\\mathrm{Fe^{3+}}$ thuỷ phân tạo $\\mathrm{H^+}$; $\\mathrm{Na^+}$ và $\\mathrm{Cl^-}$ không thuỷ phân.',
    },
    {
      type: 'choice',
      prompt: 'Người dân dùng phèn chua để làm trong nước nhờ hiện tượng nào?',
      options: [
        '$\\mathrm{Al^{3+}}$ thuỷ phân tạo kết tủa keo $\\mathrm{Al(OH)_3}$ kéo cặn lắng xuống',
        '$\\mathrm{K^+}$ thuỷ phân tạo $\\mathrm{OH^-}$ trung hoà nước',
        '$\\mathrm{SO_4^{2-}}$ phản ứng hết với các chất bẩn trong nước',
        'Phèn chua làm tăng pH của nước lên trên $7$',
      ],
      answer: 0,
      hints: ['Ion kim loại nào trong phèn chua bị thuỷ phân?'],
      solution:
        '$\\mathrm{Al^{3+}}$ thuỷ phân tạo $\\mathrm{Al(OH)_3}$ dạng keo, kéo theo các hạt lơ lửng lắng xuống. Sự thuỷ phân này tạo $\\mathrm{H^+}$ nên làm pH giảm, không tăng.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ $10$ mL dung dịch $\\mathrm{HCl}$ cần vừa đủ $8$ mL dung dịch $\\mathrm{NaOH}$ $0{,}1$ M. Tính nồng độ dung dịch $\\mathrm{HCl}$, theo M.',
      answer: 0.08,
      unit: 'M',
      hints: [
        'Tại điểm tương đương, $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
      ],
      solution: '$C_{\\mathrm{HCl}} = \\dfrac{0{,}1 \\cdot 8}{10} = 0{,}08$ M.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ $5{,}0$ mL dung dịch $\\mathrm{NaOH}$ cần vừa đủ $5{,}2$ mL dung dịch $\\mathrm{HCl}$ $0{,}1$ M. Tính nồng độ dung dịch $\\mathrm{NaOH}$, theo M.',
      answer: 0.104,
      unit: 'M',
      hints: ['Số mol $\\mathrm{NaOH}$ bằng số mol $\\mathrm{HCl}$ tại điểm tương đương.'],
      solution: '$C_{\\mathrm{NaOH}} = \\dfrac{0{,}1 \\cdot 5{,}2}{5{,}0} = 0{,}104$ M.',
    },
    {
      type: 'choice',
      prompt:
        'Chuẩn độ $\\mathrm{HCl}$ bằng $\\mathrm{NaOH}$, chất chỉ thị phenolphthalein cho vào bình. Dừng chuẩn độ khi dung dịch trong bình',
      options: [
        'chuyển sang màu hồng nhạt bền trong khoảng $10$ giây',
        'mất hẳn màu hồng',
        'chuyển sang màu đỏ đậm',
        'chuyển sang màu xanh',
      ],
      answer: 0,
      hints: ['Phenolphthalein không màu trong môi trường acid và trung tính.'],
      solution:
        'Khi $\\mathrm{HCl}$ vừa hết, một giọt $\\mathrm{NaOH}$ dư làm phenolphthalein chuyển sang hồng nhạt. Màu hồng đậm cho thấy đã nhỏ quá nhiều.',
    },
  ],
  takeaways: [
    'Chất điện li mạnh phân li hoàn toàn ($\\rightarrow$), chất điện li yếu phân li một phần ($\\rightleftharpoons$).',
    'Theo Brønsted – Lowry: acid cho proton, base nhận proton.',
    '$\\mathrm{pH} = -\\lg[\\mathrm{H^+}]$; ở $25\\,^\\circ\\mathrm{C}$, $[\\mathrm{H^+}] \\cdot [\\mathrm{OH^-}] = 10^{-14}$; $\\mathrm{pH} < 7$ là môi trường acid, $\\mathrm{pH} > 7$ là môi trường base.',
    '$\\mathrm{Al^{3+}}$, $\\mathrm{Fe^{3+}}$ thuỷ phân tạo môi trường acid; $\\mathrm{CO_3^{2-}}$ thuỷ phân tạo môi trường base.',
    'Chuẩn độ: tại điểm tương đương, $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
  ],
};
