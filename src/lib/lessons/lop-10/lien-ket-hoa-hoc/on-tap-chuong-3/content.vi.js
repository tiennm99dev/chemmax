/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 3: quy tắc octet, liên kết ion, liên kết cộng hoá trị, phân loại liên kết theo hiệu độ âm điện, liên kết σ, π, liên kết hydrogen và tương tác van der Waals.',
  intro:
    'Chương 3 trả lời câu hỏi: vì sao các nguyên tử kết hợp với nhau, và kết hợp bằng cách nào? Từ quy tắc octet và hiệu độ âm điện, em dự đoán được loại liên kết, rồi từ đó giải thích được tính chất của chất. Bài ôn tập này hệ thống kiến thức, cho em đi theo sơ đồ quyết định loại liên kết, luyện tập sinh tự động và làm bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá quy tắc octet và các loại liên kết hoá học.',
    'Dùng hiệu độ âm điện để xác định loại liên kết, đếm liên kết $\\sigma$, $\\pi$ trong phân tử.',
    'Giải thích tính chất vật lí của các chất dựa vào loại liên kết và tương tác giữa các phân tử.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc octet',
          text: 'Khi tạo liên kết, nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để có lớp vỏ của khí hiếm: 8 electron lớp ngoài cùng, hoặc 2 electron như helium.',
        },
        {
          type: 'table',
          caption: 'So sánh liên kết ion và liên kết cộng hoá trị',
          head: ['Đặc điểm', 'Liên kết ion', 'Liên kết cộng hoá trị'],
          rows: [
            ['Bản chất', 'Lực hút tĩnh điện giữa các ion trái dấu', 'Các cặp electron chung'],
            ['Thường giữa', 'Kim loại điển hình và phi kim điển hình', 'Các phi kim'],
            ['Hiệu độ âm điện', '$|\\Delta\\chi| \\ge 1{,}7$', '$|\\Delta\\chi| < 1{,}7$'],
            [
              'Ví dụ',
              '$\\mathrm{NaCl}$, $\\mathrm{MgO}$',
              '$\\mathrm{H_2O}$, $\\mathrm{CO_2}$, $\\mathrm{N_2}$',
            ],
            [
              'Tính chất của chất',
              'Rắn, khó nóng chảy; dẫn điện khi nóng chảy hoặc tan trong nước',
              'Có thể rắn, lỏng hoặc khí; nhiệt độ nóng chảy, sôi thường thấp hơn',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Thành phần của liên kết cộng hoá trị',
          head: ['Liên kết', 'Số cặp electron chung', 'Thành phần'],
          rows: [
            ['Đơn', '1', '$1\\sigma$'],
            ['Đôi', '2', '$1\\sigma + 1\\pi$'],
            ['Ba', '3', '$1\\sigma + 2\\pi$'],
          ],
        },
        {
          type: 'table',
          caption: 'Lực giữa các phân tử',
          head: ['Đặc điểm', 'Liên kết hydrogen', 'Tương tác van der Waals'],
          rows: [
            ['Có ở', 'Chất có H liên kết với F, O, N', 'Mọi chất có phân tử, kể cả khí hiếm'],
            [
              'Tăng khi',
              'Số liên kết hydrogen nhiều hơn',
              'Khối lượng phân tử, diện tích tiếp xúc lớn hơn',
            ],
            [
              'Ảnh hưởng',
              'Tăng nhiệt độ sôi; tăng độ tan trong nước',
              'Tăng nhiệt độ nóng chảy, nhiệt độ sôi',
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
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng của chương. Đáp án là số; với số thập phân, em dùng dấu phẩy như $0{,}96$. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ quyết định loại liên kết',
    instruction:
      'Với mỗi chất, tính hiệu độ âm điện của liên kết, rồi trả lời lần lượt hai câu hỏi trên sơ đồ. Đi đúng đường, em sẽ đến ô kết quả là loại liên kết của chất đó.',
  },
  examples: [
    {
      problem:
        'Cho hai nguyên tố X ($Z = 12$) và Y ($Z = 17$). Xác định loại liên kết trong hợp chất của X và Y, viết công thức hợp chất. Cho $\\chi(\\mathrm{X}) = 1{,}31$, $\\chi(\\mathrm{Y}) = 3{,}16$.',
      steps: [
        'X có cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2}$: magnesium, nhường 2 electron thành $\\mathrm{Mg^{2+}}$.',
        'Y có cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^5}$: chlorine, nhận 1 electron thành $\\mathrm{Cl^-}$.',
        '$|\\Delta\\chi| = 3{,}16 - 1{,}31 = 1{,}85 \\ge 1{,}7$: liên kết ion.',
        'Số electron nhường bằng số electron nhận nên cần 2 Cl cho 1 Mg.',
      ],
      answer: 'Liên kết ion, công thức $\\mathrm{MgCl_2}$.',
    },
    {
      problem:
        'Phân tử $\\mathrm{C_2H_4}$ (ethylene) có bao nhiêu liên kết $\\sigma$, $\\pi$? Giữa các phân tử $\\mathrm{C_2H_4}$ có liên kết hydrogen không?',
      steps: [
        'Công thức cấu tạo: $\\mathrm{CH_2 = CH_2}$, gồm 4 liên kết đơn C–H và 1 liên kết đôi C=C.',
        'Số liên kết $\\sigma$: $4 + 1 = 5$; số liên kết $\\pi$: $1$.',
        'H liên kết với C, không phải F, O hay N, nên không có liên kết hydrogen.',
      ],
      answer: 'Có $5$ liên kết $\\sigma$, $1$ liên kết $\\pi$; không có liên kết hydrogen.',
    },
    {
      problem:
        'So sánh nhiệt độ sôi của $\\mathrm{HF}$ và $\\mathrm{HCl}$, của $\\mathrm{HCl}$ và $\\mathrm{HBr}$, giải thích.',
      steps: [
        'Giữa các phân tử HF có liên kết hydrogen, giữa các phân tử HCl thì không: HF sôi cao hơn HCl.',
        'HCl và HBr đều không có liên kết hydrogen; HBr có khối lượng phân tử lớn hơn nên tương tác van der Waals mạnh hơn: HBr sôi cao hơn HCl.',
      ],
      answer: 'Nhiệt độ sôi: HF > HCl và HBr > HCl.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Theo quy tắc octet, nguyên tử calcium ($Z = 20$) có xu hướng',
      options: ['nhường 2 electron', 'nhận 2 electron', 'nhường 1 electron', 'nhận 6 electron'],
      answer: 0,
      hints: ['Viết cấu hình electron, đếm electron lớp ngoài cùng.'],
      solution:
        'Ca: $[\\mathrm{Ar}]\\mathrm{4s^2}$ có 2 electron lớp ngoài cùng nên nhường 2 electron thành $\\mathrm{Ca^{2+}}$.',
    },
    {
      type: 'number',
      prompt: 'Ion $\\mathrm{Al^{3+}}$ ($Z = 13$) có bao nhiêu electron?',
      answer: 10,
      unit: 'electron',
      hints: ['Ion $3+$ đã nhường 3 electron.'],
      solution: '$13 - 3 = 10$ electron, giống Ne.',
    },
    {
      type: 'choice',
      prompt: 'Hợp chất nào chỉ có liên kết ion?',
      options: ['$\\mathrm{KCl}$', '$\\mathrm{HCl}$', '$\\mathrm{CO_2}$', '$\\mathrm{NH_3}$'],
      answer: 0,
      hints: ['Tìm hợp chất của kim loại điển hình với phi kim điển hình.'],
      solution:
        'KCl có $|\\Delta\\chi| = 3{,}16 - 0{,}82 = 2{,}34 \\ge 1{,}7$: liên kết ion. Ba chất còn lại có liên kết cộng hoá trị.',
    },
    {
      type: 'number',
      prompt:
        'Tính hiệu độ âm điện của liên kết C–O. Cho $\\chi(\\mathrm{C}) = 2{,}55$, $\\chi(\\mathrm{O}) = 3{,}44$.',
      answer: 0.89,
      tolerance: 0.001,
      hints: ['Lấy giá trị lớn trừ giá trị nhỏ.'],
      solution: '$|\\Delta\\chi| = 3{,}44 - 2{,}55 = 0{,}89$: liên kết cộng hoá trị phân cực.',
    },
    {
      type: 'match',
      prompt:
        'Nối mỗi liên kết với loại của nó, dựa vào độ âm điện: H $2{,}2$; C $2{,}55$; O $3{,}44$; Cl $3{,}16$; Na $0{,}93$; Mg $1{,}31$.',
      left: ['Na–Cl', 'H–O', 'C–H', 'Mg–O'],
      right: [
        'Liên kết ion ($|\\Delta\\chi| = 2{,}23$)',
        'Cộng hoá trị phân cực',
        'Cộng hoá trị không phân cực',
        'Liên kết ion ($|\\Delta\\chi| = 2{,}13$)',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Tính hiệu độ âm điện của từng liên kết rồi so sánh với $0{,}4$ và $1{,}7$.'],
      solution:
        'Na–Cl: $2{,}23$, ion. H–O: $1{,}24$, phân cực. C–H: $0{,}35$, không phân cực. Mg–O: $2{,}13$, ion.',
    },
    {
      type: 'number',
      prompt: 'Phân tử ethylene $\\mathrm{C_2H_4}$ có tổng cộng bao nhiêu liên kết $\\sigma$?',
      answer: 5,
      hints: ['Liên kết đôi chỉ có một liên kết $\\sigma$.'],
      solution: '4 liên kết C–H và 1 liên kết $\\sigma$ của C=C: $5$ liên kết $\\sigma$.',
    },
    {
      type: 'number',
      prompt: 'Phân tử nitrogen $\\mathrm{N_2}$ có bao nhiêu liên kết $\\pi$?',
      answer: 2,
      hints: ['$\\mathrm{N_2}$ có liên kết ba.'],
      solution: 'Liên kết ba gồm $1\\sigma + 2\\pi$, nên có $2$ liên kết $\\pi$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về liên kết hydrogen.',
      options: [
        'Hình thành khi H liên kết với F, O hoặc N',
        'Bền hơn liên kết cộng hoá trị',
        'Làm tăng nhiệt độ sôi của chất',
        'Có ở mọi hợp chất chứa H',
      ],
      answers: [0, 2],
      hints: ['$\\mathrm{CH_4}$ có chứa H; nó có liên kết hydrogen không?'],
      solution:
        'Liên kết hydrogen yếu hơn nhiều so với liên kết cộng hoá trị và chỉ có khi H liên kết với F, O, N, không phải ở mọi hợp chất chứa H ($\\mathrm{CH_4}$ không có).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo chiều tăng dần nhiệt độ sôi.',
      items: ['$\\mathrm{H_2O}$', '$\\mathrm{CH_4}$', '$\\mathrm{NaCl}$', '$\\mathrm{H_2S}$'],
      answer: [1, 3, 0, 2],
      hints: [
        'Hợp chất ion có nhiệt độ sôi rất cao.',
        'Trong các chất phân tử, chất có liên kết hydrogen sôi cao hơn.',
      ],
      solution:
        '$\\mathrm{CH_4}$ (khoảng $-162\\ ^\\circ\\mathrm{C}$) < $\\mathrm{H_2S}$ (khoảng $-60\\ ^\\circ\\mathrm{C}$) < $\\mathrm{H_2O}$ ($100\\ ^\\circ\\mathrm{C}$) < $\\mathrm{NaCl}$ (trên $1000\\ ^\\circ\\mathrm{C}$).',
    },
    {
      type: 'choice',
      prompt:
        'Liên kết trong phân tử nào bền nhất, biết $E_b$ của H–F là $567$, H–Cl là $431$, H–Br là $366$, H–I là $299\\ \\mathrm{kJ \\cdot mol^{-1}}$?',
      options: ['H–F', 'H–Cl', 'H–Br', 'H–I'],
      answer: 0,
      hints: ['$E_b$ càng lớn, liên kết càng bền.'],
      solution: 'H–F có $E_b$ lớn nhất nên bền nhất.',
    },
    {
      type: 'number',
      prompt:
        'Trong tinh thể $\\mathrm{NaCl}$, mỗi ion $\\mathrm{Cl^-}$ được bao quanh bởi bao nhiêu ion $\\mathrm{Na^+}$ gần nhất?',
      answer: 6,
      unit: 'ion',
      hints: ['Các ion sắp xếp luân phiên theo cả ba chiều.'],
      solution: 'Mỗi ion có $6$ ion trái dấu gần nhất, theo sáu hướng.',
    },
    {
      type: 'text',
      prompt: 'Khí hiếm nào có cấu hình electron giống ion $\\mathrm{O^{2-}}$? (Viết tên.)',
      accept: ['neon', 'ne'],
      hints: ['Tính số electron của ion: $8 + 2$.'],
      solution: '$\\mathrm{O^{2-}}$ có 10 electron, giống neon.',
    },
  ],
  takeaways: [
    'Quy tắc octet giải thích xu hướng nhường, nhận hoặc góp chung electron.',
    'Hiệu độ âm điện dự đoán loại liên kết: dưới $0{,}4$ không phân cực, từ $0{,}4$ đến dưới $1{,}7$ phân cực, từ $1{,}7$ trở lên ion.',
    'Liên kết đơn có $1\\sigma$; đôi có $1\\sigma + 1\\pi$; ba có $1\\sigma + 2\\pi$; $E_b$ lớn thì liên kết bền.',
    'Liên kết hydrogen và tương tác van der Waals yếu hơn nhiều so với liên kết ion và cộng hoá trị, nhưng quyết định nhiều tính chất vật lí.',
  ],
};
