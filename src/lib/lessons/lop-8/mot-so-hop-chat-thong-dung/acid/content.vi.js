/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Acid là hợp chất trong phân tử có nguyên tử hydrogen liên kết với gốc acid; khi tan trong nước acid tạo ra ion H+. Dung dịch acid làm quỳ tím hoá đỏ và tác dụng với một số kim loại tạo muối và khí hydrogen. Hydrochloric acid, sulfuric acid và acetic acid là các acid thông dụng.',
  intro:
    'Quả chanh, quả khế, giấm ăn đều có vị chua; dạ dày của em cũng tiết ra một dung dịch có vị chua giúp tiêu hoá thức ăn. Vị chua ấy do các acid gây nên. Acid là gì, dung dịch acid có tính chất hoá học nào chung, và vì sao phải cẩn thận khi dùng sulfuric acid đặc?',
  objectives: [
    'Nêu được khái niệm acid (tạo ra ion $\\mathrm{H^+}$ khi tan trong nước).',
    'Tiến hành được thí nghiệm của hydrochloric acid với quỳ tím và với kim loại; nêu và giải thích được hiện tượng, viết được phương trình hoá học.',
    'Trình bày được ứng dụng của một số acid thông dụng: $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$, $\\mathrm{CH_3COOH}$.',
  ],
  sections: [
    {
      heading: 'Khái niệm acid',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Acid',
          text: 'Acid là những hợp chất trong phân tử có nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước, acid tạo ra ion $\\mathrm{H^+}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{HCl} \\rightarrow \\mathrm{H^+} + \\mathrm{Cl^-} \\qquad \\mathrm{H_2SO_4} \\rightarrow 2\\mathrm{H^+} + \\mathrm{SO_4^{2-}}',
        },
        {
          type: 'table',
          caption: 'Một số acid thường gặp',
          head: ['Công thức', 'Tên gọi', 'Gốc acid'],
          rows: [
            ['$\\mathrm{HCl}$', 'Hydrochloric acid', '$\\mathrm{-Cl}$ (chloride)'],
            ['$\\mathrm{H_2SO_4}$', 'Sulfuric acid', '$\\mathrm{=SO_4}$ (sulfate)'],
            ['$\\mathrm{HNO_3}$', 'Nitric acid', '$\\mathrm{-NO_3}$ (nitrate)'],
            ['$\\mathrm{H_3PO_4}$', 'Phosphoric acid', '$\\mathrm{\\equiv PO_4}$ (phosphate)'],
            ['$\\mathrm{CH_3COOH}$', 'Acetic acid', '$\\mathrm{-CH_3COO}$ (acetate)'],
          ],
        },
        {
          type: 'p',
          text: 'Số nguyên tử H trong phân tử acid bằng hoá trị của gốc acid: gốc $\\mathrm{Cl}$ hoá trị I nên có $\\mathrm{HCl}$; gốc $\\mathrm{SO_4}$ hoá trị II nên có $\\mathrm{H_2SO_4}$.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của acid',
      blocks: [
        {
          type: 'p',
          text: 'Các dung dịch acid có những tính chất hoá học chung vì chúng đều chứa ion $\\mathrm{H^+}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Làm đổi màu chất chỉ thị',
          text: 'Dung dịch acid làm quỳ tím chuyển sang màu đỏ. Dùng quỳ tím để nhận biết dung dịch acid.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Tác dụng với kim loại',
          text: 'Dung dịch acid ($\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng) tác dụng với nhiều kim loại như $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Zn}$, $\\mathrm{Fe}$ tạo thành muối và giải phóng khí hydrogen.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{Zn} + 2\\mathrm{HCl} &\\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}\\uparrow \\\\ \\mathrm{Fe} + \\mathrm{H_2SO_4} &\\rightarrow \\mathrm{FeSO_4} + \\mathrm{H_2}\\uparrow \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Hiện tượng: mẩu kim loại tan dần, có bọt khí không màu thoát ra. Khí đó là hydrogen, cháy được trong không khí với ngọn lửa màu xanh nhạt.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Một số kim loại như $\\mathrm{Cu}$, $\\mathrm{Ag}$, $\\mathrm{Au}$ không tác dụng với dung dịch $\\mathrm{HCl}$ và $\\mathrm{H_2SO_4}$ loãng.',
        },
        {
          type: 'p',
          text: 'Acid còn tác dụng với base, với oxide base và với muối. Các tính chất này em sẽ học ở các bài Base, Oxide và Muối; trong ống nghiệm ảo, em có thể xem trước phản ứng của acid với dung dịch $\\mathrm{NaOH}$ và với $\\mathrm{Cu(OH)_2}$.',
        },
      ],
    },
    {
      heading: 'Một số acid thông dụng',
      blocks: [
        {
          type: 'table',
          head: ['Acid', 'Đặc điểm', 'Ứng dụng'],
          rows: [
            [
              'Hydrochloric acid $\\mathrm{HCl}$',
              'Dung dịch không màu; có trong dịch vị dạ dày người và động vật với nồng độ loãng.',
              'Làm sạch bề mặt kim loại trước khi hàn, sơn, mạ; chế biến thực phẩm, dược phẩm; sản xuất hoá chất.',
            ],
            [
              'Sulfuric acid $\\mathrm{H_2SO_4}$',
              'Chất lỏng sánh như dầu, không màu, không bay hơi, tan vô hạn trong nước và toả rất nhiều nhiệt.',
              'Sản xuất phân bón, chất tẩy rửa, sơn, phẩm nhuộm, chất dẻo; làm chất điện li trong acquy.',
            ],
            [
              'Acetic acid $\\mathrm{CH_3COOH}$',
              'Có trong giấm ăn (dung dịch khoảng $2\\%$ đến $5\\%$).',
              'Làm giấm ăn, chế biến thực phẩm; sản xuất tơ sợi, dược phẩm.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn khi dùng sulfuric acid đặc',
          text: 'Sulfuric acid đặc gây bỏng nặng khi rơi vào da. Muốn pha loãng, phải rót từ từ acid đặc vào nước và khuấy đều, tuyệt đối không làm ngược lại: nước rót vào acid đặc sẽ sôi bùng lên, bắn acid ra ngoài.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ống nghiệm ảo',
    instruction:
      'Chọn acid và chất có sẵn trong ống nghiệm, rồi bấm “Nhỏ 1 giọt acid” nhiều lần. Quan sát quỳ tím đổi màu, kim loại tan và sủi bọt khí hydrogen (đồng thì không), màu hồng của dung dịch base nhạt dần. Phương trình hoá học hiện ra khi có phản ứng.',
  },
  examples: [
    {
      problem:
        'Cho mẩu sắt vào ống nghiệm đựng dung dịch hydrochloric acid. Nêu hiện tượng và viết phương trình hoá học.',
      steps: [
        'Sắt tác dụng với dung dịch $\\mathrm{HCl}$, tạo muối iron(II) chloride $\\mathrm{FeCl_2}$ và khí $\\mathrm{H_2}$.',
        'Hiện tượng: mẩu sắt tan dần, có bọt khí không màu thoát ra, dung dịch chuyển dần sang màu lục nhạt.',
        'Cân bằng số nguyên tử $\\mathrm{H}$ và $\\mathrm{Cl}$: cần $2$ phân tử $\\mathrm{HCl}$.',
      ],
      answer:
        '$\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}\\uparrow$.',
    },
    {
      problem:
        'Cho $13$ g kẽm tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar) và khối lượng muối tạo thành (Zn = 65, Cl = 35,5).',
      steps: [
        '$n_{\\mathrm{Zn}} = \\dfrac{13}{65} = 0{,}2$ mol.',
        'Phương trình: $\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$. Theo phương trình, $n_{\\mathrm{H_2}} = n_{\\mathrm{ZnCl_2}} = n_{\\mathrm{Zn}} = 0{,}2$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}2 \\times 24{,}79 = 4{,}958$ L.',
        '$M_{\\mathrm{ZnCl_2}} = 65 + 2 \\times 35{,}5 = 136$ g/mol, nên $m_{\\mathrm{ZnCl_2}} = 0{,}2 \\times 136 = 27{,}2$ g.',
      ],
      answer: '$V_{\\mathrm{H_2}} = 4{,}958$ L; $m_{\\mathrm{ZnCl_2}} = 27{,}2$ g.',
    },
    {
      problem:
        'Có ba ống nghiệm không nhãn đựng: nước cất, dung dịch $\\mathrm{HCl}$, dung dịch $\\mathrm{NaCl}$. Dùng quỳ tím, nhận biết dung dịch acid.',
      steps: [
        'Nhúng mẩu quỳ tím vào từng ống.',
        'Ống làm quỳ tím hoá đỏ là dung dịch $\\mathrm{HCl}$.',
        'Hai ống còn lại không làm đổi màu quỳ tím (nước cất và dung dịch $\\mathrm{NaCl}$ đều trung tính).',
      ],
      answer: 'Dung dịch làm quỳ tím hoá đỏ là $\\mathrm{HCl}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là acid?',
      options: ['$\\mathrm{NaOH}$', '$\\mathrm{H_2SO_4}$', '$\\mathrm{CaO}$', '$\\mathrm{NaCl}$'],
      answer: 1,
      hints: ['Acid có nguyên tử hydrogen liên kết với gốc acid.'],
      solution:
        '$\\mathrm{H_2SO_4}$ gồm $2$ nguyên tử H liên kết với gốc $\\mathrm{SO_4}$, nên là acid. $\\mathrm{NaOH}$ là base, $\\mathrm{CaO}$ là oxide, $\\mathrm{NaCl}$ là muối.',
    },
    {
      type: 'choice',
      prompt: 'Nhúng mẩu quỳ tím vào dung dịch hydrochloric acid, quỳ tím',
      options: ['không đổi màu', 'chuyển sang màu xanh', 'chuyển sang màu đỏ', 'mất màu'],
      answer: 2,
      hints: ['Đây là tính chất dùng để nhận biết acid.'],
      solution: 'Dung dịch acid làm quỳ tím chuyển sang màu đỏ.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào tác dụng với dung dịch $\\mathrm{HCl}$ giải phóng khí hydrogen?',
      options: [
        '$\\mathrm{Mg}$',
        '$\\mathrm{Zn}$',
        '$\\mathrm{Fe}$',
        '$\\mathrm{Cu}$',
        '$\\mathrm{Ag}$',
      ],
      answers: [0, 1, 2],
      hints: ['Có ba kim loại trong bài không phản ứng với $\\mathrm{HCl}$ loãng: Cu, Ag, Au.'],
      solution:
        '$\\mathrm{Mg}$, $\\mathrm{Zn}$, $\\mathrm{Fe}$ tác dụng với $\\mathrm{HCl}$ tạo muối và khí $\\mathrm{H_2}$; $\\mathrm{Cu}$ và $\\mathrm{Ag}$ không phản ứng.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên acid có công thức $\\mathrm{HNO_3}$.',
      accept: ['nitric acid', 'acid nitric', 'axit nitric'],
      hints: ['Gốc $\\mathrm{NO_3}$ có tên là nitrate.'],
      solution: '$\\mathrm{HNO_3}$ là nitric acid.',
    },
    {
      type: 'number',
      prompt:
        'Cho $6{,}5$ g kẽm tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn, theo lít (Zn = 65).',
      answer: 2.479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        'Tính số mol Zn trước.',
        'Theo phương trình, $n_{\\mathrm{H_2}} = n_{\\mathrm{Zn}}$; ở điều kiện chuẩn $1$ mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{Zn}} = \\dfrac{6{,}5}{65} = 0{,}1$ mol; $\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$ nên $n_{\\mathrm{H_2}} = 0{,}1$ mol; $V = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Cho $5{,}6$ g sắt tác dụng hết với dung dịch $\\mathrm{H_2SO_4}$ loãng. Tính khối lượng muối iron(II) sulfate tạo thành, theo gam (Fe = 56, S = 32, O = 16).',
      answer: 15.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Viết phương trình: $\\mathrm{Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{H_2}$.',
        '$M_{\\mathrm{FeSO_4}} = 56 + 32 + 4 \\times 16$.',
      ],
      solution:
        '$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol $= n_{\\mathrm{FeSO_4}}$; $M_{\\mathrm{FeSO_4}} = 152$ g/mol; $m = 0{,}1 \\times 152 = 15{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu gam $\\mathrm{HCl}$ để hoà tan vừa hết $2{,}4$ g magnesium (Mg = 24, H = 1, Cl = 35,5)?',
      answer: 7.3,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl_2} + \\mathrm{H_2}$: số mol HCl gấp đôi số mol Mg.',
      ],
      solution:
        '$n_{\\mathrm{Mg}} = \\dfrac{2{,}4}{24} = 0{,}1$ mol; $n_{\\mathrm{HCl}} = 2 \\times 0{,}1 = 0{,}2$ mol; $m_{\\mathrm{HCl}} = 0{,}2 \\times 36{,}5 = 7{,}3$ g.',
    },
    {
      type: 'choice',
      prompt: 'Cách pha loãng sulfuric acid đặc đúng là',
      options: [
        'rót nhanh nước vào acid đặc',
        'rót từ từ nước vào acid đặc và khuấy đều',
        'rót từ từ acid đặc vào nước và khuấy đều',
        'đổ acid đặc và nước vào cốc cùng một lúc',
      ],
      answer: 2,
      hints: ['Acid đặc tan trong nước toả rất nhiều nhiệt.'],
      solution:
        'Phải rót từ từ acid đặc vào nước và khuấy đều để nhiệt toả ra được nước hấp thụ dần; rót nước vào acid đặc làm nước sôi bùng, bắn acid ra ngoài.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi acid với một đặc điểm hoặc ứng dụng của nó.',
      left: ['$\\mathrm{HCl}$', '$\\mathrm{H_2SO_4}$', '$\\mathrm{CH_3COOH}$'],
      right: [
        'Có trong giấm ăn',
        'Có trong dịch vị dạ dày',
        'Dùng làm chất điện li trong acquy, sản xuất phân bón',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Giấm ăn là dung dịch loãng của một acid hữu cơ.'],
      solution:
        '$\\mathrm{HCl}$: có trong dịch vị dạ dày; $\\mathrm{H_2SO_4}$: acquy, phân bón; $\\mathrm{CH_3COOH}$: có trong giấm ăn.',
    },
  ],
  takeaways: [
    'Acid là hợp chất có nguyên tử hydrogen liên kết với gốc acid; tan trong nước tạo ion $\\mathrm{H^+}$.',
    'Dung dịch acid làm quỳ tím hoá đỏ.',
    'Acid tác dụng với nhiều kim loại (Mg, Al, Zn, Fe...) tạo muối và khí hydrogen; Cu, Ag, Au không phản ứng với $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng.',
    'Pha loãng $\\mathrm{H_2SO_4}$ đặc: rót từ từ acid vào nước, không làm ngược lại.',
  ],
};
