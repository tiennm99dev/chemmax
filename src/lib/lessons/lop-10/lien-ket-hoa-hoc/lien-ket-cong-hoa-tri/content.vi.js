/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Liên kết cộng hoá trị được tạo nên bởi các cặp electron dùng chung; hiệu độ âm điện cho biết liên kết không phân cực, phân cực hay ion; liên kết còn được phân loại thành σ, π và đặc trưng bởi năng lượng liên kết.',
  intro:
    'Hai nguyên tử chlorine giống hệt nhau, không nguyên tử nào chịu nhường electron cho nguyên tử kia. Vậy làm sao chúng đạt được octet để tạo thành phân tử $\\mathrm{Cl_2}$? Câu trả lời là dùng chung electron. Bài này cũng cho biết cặp electron chung nằm ở đâu giữa hai nguyên tử, và vì sao có liên kết bền, có liên kết dễ đứt.',
  objectives: [
    'Trình bày được khái niệm liên kết cộng hoá trị; viết được công thức electron, công thức Lewis và công thức cấu tạo của các phân tử đơn giản.',
    'Phân biệt được liên kết đơn, đôi, ba và nêu được liên kết cho – nhận.',
    'Dùng hiệu độ âm điện để phân loại liên kết cộng hoá trị không phân cực, phân cực và liên kết ion.',
    'Phân biệt được liên kết σ và π; nêu được ý nghĩa của năng lượng liên kết.',
  ],
  sections: [
    {
      heading: 'Sự tạo thành liên kết cộng hoá trị',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết cộng hoá trị',
          text: 'Liên kết cộng hoá trị là liên kết được tạo nên giữa hai nguyên tử bằng một hay nhiều cặp electron chung.',
        },
        {
          type: 'table',
          caption: 'Liên kết đơn, đôi, ba',
          head: [
            'Phân tử',
            'Mỗi nguyên tử góp',
            'Số cặp chung',
            'Công thức cấu tạo',
            'Loại liên kết',
          ],
          rows: [
            ['$\\mathrm{Cl_2}$', '1 electron', '1', 'Cl–Cl', 'Đơn'],
            ['$\\mathrm{HCl}$', '1 electron', '1', 'H–Cl', 'Đơn'],
            ['$\\mathrm{O_2}$', '2 electron', '2', 'O=O', 'Đôi'],
            ['$\\mathrm{N_2}$', '3 electron', '3', 'N≡N', 'Ba'],
            [
              '$\\mathrm{CO_2}$',
              'C góp 4, mỗi O góp 2',
              '4 (2 cặp cho mỗi O)',
              'O=C=O',
              'Hai liên kết đôi',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Công thức electron biểu diễn các electron hoá trị bằng dấu chấm. Thay mỗi cặp electron chung bằng một gạch nối ta được công thức Lewis, các cặp electron riêng vẫn được giữ lại. Công thức cấu tạo chỉ giữ các gạch nối.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết cho – nhận',
          text: 'Cặp electron chung cũng có thể chỉ do một nguyên tử đóng góp. Trong ion $\\mathrm{NH_4^+}$, nguyên tử N của $\\mathrm{NH_3}$ cho cặp electron riêng vào orbital trống của $\\mathrm{H^+}$. N là nguyên tử cho, $\\mathrm{H^+}$ là phần tử nhận; sau khi hình thành, bốn liên kết N–H như nhau.',
        },
      ],
    },
    {
      heading: 'Độ âm điện và phân loại liên kết',
      blocks: [
        {
          type: 'p',
          text: 'Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử trong liên kết. Cặp electron chung lệch về phía nguyên tử có độ âm điện lớn hơn; hai nguyên tử giống nhau thì cặp electron nằm giữa.',
        },
        {
          type: 'table',
          caption: 'Phân loại liên kết theo hiệu độ âm điện',
          head: ['Hiệu độ âm điện', 'Loại liên kết', 'Cặp electron', 'Ví dụ'],
          rows: [
            [
              '$0 \\le |\\Delta\\chi| < 0{,}4$',
              'Cộng hoá trị không phân cực',
              'Gần như không lệch',
              '$\\mathrm{Cl_2}$, $\\mathrm{N_2}$',
            ],
            [
              '$0{,}4 \\le |\\Delta\\chi| < 1{,}7$',
              'Cộng hoá trị phân cực',
              'Lệch về nguyên tử có $\\chi$ lớn hơn',
              '$\\mathrm{HCl}$ ($0{,}96$)',
            ],
            [
              '$|\\Delta\\chi| \\ge 1{,}7$',
              'Liên kết ion',
              'Chuyển hẳn thành ion',
              '$\\mathrm{NaCl}$ ($2{,}23$)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Trong liên kết phân cực, nguyên tử có độ âm điện lớn hơn mang một phần điện tích âm ($\\delta^-$), nguyên tử kia mang một phần điện tích dương ($\\delta^+$). Các ngưỡng $0{,}4$ và $1{,}7$ chỉ là quy ước gần đúng, dùng độ âm điện theo Pauling.',
        },
      ],
    },
    {
      heading: 'Liên kết σ và liên kết π',
      blocks: [
        {
          type: 'list',
          items: [
            'Liên kết $\\sigma$ hình thành do sự xen phủ trục của hai orbital (s – s, s – p, p – p): vùng xen phủ nằm trên đường nối hai hạt nhân.',
            'Liên kết $\\pi$ hình thành do sự xen phủ bên của hai orbital p song song: vùng xen phủ nằm ở hai bên đường nối hai hạt nhân.',
          ],
        },
        {
          type: 'table',
          caption: 'Thành phần của các liên kết',
          head: ['Liên kết', 'Gồm', 'Ví dụ'],
          rows: [
            ['Đơn', '$1\\sigma$', '$\\mathrm{H - Cl}$'],
            [
              'Đôi',
              '$1\\sigma + 1\\pi$',
              '$\\mathrm{O = O}$, $\\mathrm{C = C}$ trong $\\mathrm{C_2H_4}$',
            ],
            ['Ba', '$1\\sigma + 2\\pi$', '$\\mathrm{N \\equiv N}$'],
          ],
        },
        { type: 'widget', name: 'dem-lien-ket' },
      ],
    },
    {
      heading: 'Năng lượng liên kết và tính chất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Năng lượng liên kết',
          text: 'Năng lượng liên kết $E_b$ là năng lượng cần để phá vỡ một mol liên kết trong phân tử ở thể khí, tạo thành các nguyên tử ở thể khí, thường tính ở $25\\ ^\\circ\\mathrm{C}$, $1$ bar, đơn vị $\\mathrm{kJ \\cdot mol^{-1}}$. $E_b$ càng lớn thì liên kết càng bền.',
        },
        {
          type: 'table',
          caption:
            'Năng lượng của một số liên kết (giá trị làm tròn, có thể chênh lệch nhỏ giữa các tài liệu)',
          head: [
            'Liên kết',
            '$E_b$ ($\\mathrm{kJ \\cdot mol^{-1}}$)',
            'Liên kết',
            '$E_b$ ($\\mathrm{kJ \\cdot mol^{-1}}$)',
          ],
          rows: [
            ['H–H', '436', 'H–F', '567'],
            ['Cl–Cl', '243', 'H–Cl', '431'],
            ['O=O', '494', 'H–Br', '366'],
            ['N≡N', '945', 'H–I', '299'],
          ],
        },
        {
          type: 'p',
          text: 'Chất chỉ có liên kết cộng hoá trị có thể là chất rắn (iodine, glucose), chất lỏng (nước, ethanol) hoặc chất khí (hydrogen, carbon dioxide). Chúng thường có nhiệt độ nóng chảy và nhiệt độ sôi thấp hơn hợp chất ion. Chất phân cực như ethanol, đường tan nhiều trong nước; chất không phân cực như iodine, các hydrocarbon ít tan trong nước nhưng tan trong benzene, carbon tetrachloride.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thanh hiệu độ âm điện',
    instruction:
      'Chọn hai nguyên tử, tính hiệu độ âm điện từ các giá trị $\\chi$ trên hình, rồi đoán loại liên kết. Sau khi đoán, cặp electron dịch về phía nguyên tử hút electron mạnh hơn và thanh cho biết hiệu số rơi vào vùng nào. Hãy thử cả những cặp gần ngưỡng $0{,}4$ và $1{,}7$.',
  },
  examples: [
    {
      problem:
        'Giải thích sự hình thành liên kết trong phân tử $\\mathrm{CO_2}$. Viết công thức cấu tạo và cho biết số liên kết $\\sigma$, $\\pi$.',
      steps: [
        'C có 4 electron hoá trị, cần thêm 4 electron; mỗi O có 6 electron hoá trị, cần thêm 2 electron.',
        'C góp 2 electron với mỗi O, mỗi O góp 2 electron với C: giữa C và mỗi O có 2 cặp electron chung.',
        'Công thức cấu tạo là O=C=O; trong công thức Lewis, mỗi O còn giữ 2 cặp electron riêng.',
        'Mỗi liên kết đôi gồm $1\\sigma$ và $1\\pi$, nên phân tử có $2\\sigma$ và $2\\pi$.',
      ],
      answer: '$\\mathrm{CO_2}$: O=C=O, gồm $2$ liên kết $\\sigma$ và $2$ liên kết $\\pi$.',
    },
    {
      problem:
        'Dựa vào độ âm điện, xác định loại liên kết trong $\\mathrm{KCl}$ và $\\mathrm{H_2O}$. Cho $\\chi(\\mathrm{K}) = 0{,}82$, $\\chi(\\mathrm{Cl}) = 3{,}16$, $\\chi(\\mathrm{H}) = 2{,}2$, $\\chi(\\mathrm{O}) = 3{,}44$.',
      steps: [
        '$\\mathrm{KCl}$: $|\\Delta\\chi| = 3{,}16 - 0{,}82 = 2{,}34 \\ge 1{,}7$, nên là liên kết ion.',
        '$\\mathrm{H_2O}$: liên kết O–H có $|\\Delta\\chi| = 3{,}44 - 2{,}2 = 1{,}24$.',
        '$0{,}4 \\le 1{,}24 < 1{,}7$ nên là liên kết cộng hoá trị phân cực; cặp electron lệch về O.',
      ],
      answer:
        '$\\mathrm{KCl}$ có liên kết ion; O–H trong $\\mathrm{H_2O}$ là liên kết cộng hoá trị phân cực.',
    },
    {
      problem:
        'So sánh độ bền của các liên kết H–Cl, H–Br và H–I. Tính năng lượng cần để phá vỡ hết liên kết trong $0{,}5$ mol phân tử $\\mathrm{Cl_2}$ ở thể khí.',
      steps: [
        'Dựa vào bảng: $E_b$(H–Cl) $= 431$, $E_b$(H–Br) $= 366$, $E_b$(H–I) $= 299\\ \\mathrm{kJ \\cdot mol^{-1}}$.',
        '$E_b$ càng lớn thì liên kết càng bền, nên độ bền giảm từ H–Cl đến H–I.',
        'Mỗi phân tử $\\mathrm{Cl_2}$ có một liên kết Cl–Cl: $0{,}5 \\cdot 243 = 121{,}5$ kJ.',
      ],
      answer:
        'Độ bền H–Cl > H–Br > H–I; cần $121{,}5$ kJ để phá vỡ liên kết trong $0{,}5$ mol $\\mathrm{Cl_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Liên kết cộng hoá trị là liên kết được tạo nên giữa hai nguyên tử bằng',
      options: [
        'một hay nhiều cặp electron chung',
        'lực hút tĩnh điện giữa các ion trái dấu',
        'sự chuyển hẳn electron từ nguyên tử này sang nguyên tử khác',
        'lực hút giữa các hạt nhân',
      ],
      answer: 0,
      hints: ['Nhớ tới phân tử $\\mathrm{Cl_2}$: không nguyên tử nào nhường electron.'],
      solution: 'Hai nguyên tử dùng chung một hay nhiều cặp electron để cùng đạt octet.',
    },
    {
      type: 'number',
      prompt: 'Phân tử acetylene $\\mathrm{C_2H_2}$ (H–C≡C–H) có bao nhiêu liên kết $\\sigma$?',
      answer: 3,
      hints: ['Mỗi cặp nguyên tử liên kết với nhau có đúng một liên kết $\\sigma$.'],
      solution: 'Có ba cặp nguyên tử liên kết: H–C, C≡C, C–H, nên có $3$ liên kết $\\sigma$.',
    },
    {
      type: 'number',
      prompt: 'Phân tử acetylene $\\mathrm{C_2H_2}$ (H–C≡C–H) có bao nhiêu liên kết $\\pi$?',
      answer: 2,
      hints: ['Liên kết ba gồm những gì?'],
      solution:
        'Liên kết ba C≡C gồm $1\\sigma$ và $2\\pi$; liên kết C–H không có $\\pi$. Có $2$ liên kết $\\pi$.',
    },
    {
      type: 'number',
      prompt:
        'Tính hiệu độ âm điện của liên kết H–F. Cho $\\chi(\\mathrm{H}) = 2{,}2$, $\\chi(\\mathrm{F}) = 3{,}98$.',
      answer: 1.78,
      tolerance: 0.001,
      hints: ['Lấy giá trị lớn trừ giá trị nhỏ.'],
      solution:
        '$|\\Delta\\chi| = 3{,}98 - 2{,}2 = 1{,}78$. Theo ngưỡng $1{,}7$ liên kết H–F có tính ion cao, nhưng HF vẫn là phân tử cộng hoá trị: đây là ví dụ cho thấy ngưỡng chỉ là gần đúng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi liên kết với loại liên kết tương ứng, dựa vào hiệu độ âm điện.',
      left: [
        'Na–F ($|\\Delta\\chi| = 3{,}05$)',
        'O–H ($|\\Delta\\chi| = 1{,}24$)',
        'C–H ($|\\Delta\\chi| = 0{,}35$)',
      ],
      right: ['Liên kết ion', 'Cộng hoá trị phân cực', 'Cộng hoá trị không phân cực'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['So sánh hiệu độ âm điện với hai ngưỡng $0{,}4$ và $1{,}7$.'],
      solution:
        '$3{,}05 \\ge 1{,}7$: liên kết ion. $0{,}4 \\le 1{,}24 < 1{,}7$: phân cực. $0{,}35 < 0{,}4$: không phân cực.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phân tử mà liên kết trong đó là cộng hoá trị không phân cực.',
      options: [
        '$\\mathrm{H_2}$',
        '$\\mathrm{HCl}$',
        '$\\mathrm{N_2}$',
        '$\\mathrm{CO_2}$',
        '$\\mathrm{O_2}$',
      ],
      answers: [0, 2, 4],
      hints: ['Hai nguyên tử giống nhau có $|\\Delta\\chi| = 0$.'],
      solution:
        '$\\mathrm{H_2}$, $\\mathrm{N_2}$, $\\mathrm{O_2}$ có $|\\Delta\\chi| = 0$. H–Cl có $0{,}96$, C=O có $3{,}44 - 2{,}55 = 0{,}89$: đều phân cực.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các liên kết theo độ bền giảm dần.',
      items: [
        'N≡N ($945\\ \\mathrm{kJ \\cdot mol^{-1}}$)',
        'O=O ($494\\ \\mathrm{kJ \\cdot mol^{-1}}$)',
        'H–H ($436\\ \\mathrm{kJ \\cdot mol^{-1}}$)',
        'Cl–Cl ($243\\ \\mathrm{kJ \\cdot mol^{-1}}$)',
      ],
      answer: [0, 1, 2, 3],
      hints: ['$E_b$ càng lớn, liên kết càng bền.'],
      solution: 'Xếp theo $E_b$ giảm dần: N≡N > O=O > H–H > Cl–Cl.',
    },
    {
      type: 'choice',
      prompt: 'Trong ion $\\mathrm{NH_4^+}$, liên kết cho – nhận được hình thành do',
      options: [
        'nguyên tử N của $\\mathrm{NH_3}$ cho cặp electron riêng vào orbital trống của $\\mathrm{H^+}$',
        '$\\mathrm{H^+}$ cho cặp electron cho nguyên tử N',
        'mỗi nguyên tử góp một electron như liên kết thường',
        'nguyên tử N nhường hẳn một electron cho $\\mathrm{H^+}$',
      ],
      answer: 0,
      hints: ['$\\mathrm{H^+}$ không còn electron nào.'],
      solution:
        'N còn một cặp electron riêng; $\\mathrm{H^+}$ có orbital trống. N là nguyên tử cho, $\\mathrm{H^+}$ là phần tử nhận.',
    },
    {
      type: 'number',
      prompt:
        'Năng lượng cần để phá vỡ hết các liên kết trong 2 mol $\\mathrm{H_2}$ ở thể khí là bao nhiêu kJ? Biết $E_b$(H–H) $= 436\\ \\mathrm{kJ \\cdot mol^{-1}}$.',
      answer: 872,
      unit: 'kJ',
      hints: ['Mỗi phân tử $\\mathrm{H_2}$ có một liên kết H–H.'],
      solution: '$2 \\cdot 436 = 872$ kJ.',
    },
    {
      type: 'text',
      prompt:
        'Mọi liên kết đơn đều là loại liên kết nào: $\\sigma$ hay $\\pi$? (Gõ sigma hoặc pi.)',
      accept: ['sigma', 'σ', 'lien ket sigma', 'xich ma'],
      hints: ['Liên kết đơn hình thành bằng xen phủ trục.'],
      solution: 'Liên kết đơn hình thành bằng xen phủ trục nên là liên kết $\\sigma$.',
    },
  ],
  takeaways: [
    'Liên kết cộng hoá trị được tạo nên bằng một hay nhiều cặp electron chung: đơn, đôi, ba; cặp chung do một nguyên tử đóng góp là liên kết cho – nhận.',
    'Theo hiệu độ âm điện: $|\\Delta\\chi| < 0{,}4$ không phân cực; $0{,}4 \\le |\\Delta\\chi| < 1{,}7$ phân cực; $|\\Delta\\chi| \\ge 1{,}7$ liên kết ion.',
    'Liên kết đơn gồm $1\\sigma$; liên kết đôi gồm $1\\sigma + 1\\pi$; liên kết ba gồm $1\\sigma + 2\\pi$.',
    'Năng lượng liên kết $E_b$ càng lớn thì liên kết càng bền.',
  ],
};
