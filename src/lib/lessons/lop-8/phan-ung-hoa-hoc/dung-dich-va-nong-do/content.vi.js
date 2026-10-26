/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi. Độ tan S là số gam chất tan tối đa trong 100 g nước ở một nhiệt độ xác định. Nồng độ phần trăm cho biết số gam chất tan trong 100 g dung dịch; nồng độ mol cho biết số mol chất tan trong 1 lít dung dịch.',
  intro:
    'Pha một cốc nước đường: cho thêm đường thì nước ngọt hơn, nhưng đến lúc nào đó khuấy mãi đường vẫn đọng dưới đáy cốc. Vì sao đường không tan thêm được nữa? “Ngọt hơn” là ngọt hơn bao nhiêu? Bài này cho em các đại lượng để trả lời chính xác: độ tan và nồng độ dung dịch.',
  objectives: [
    'Nêu được dung dịch là hỗn hợp lỏng đồng nhất của các chất đã tan trong nhau; phân biệt chất tan và dung môi.',
    'Nêu được định nghĩa độ tan của một chất trong nước; tính được độ tan của một chất ở nhiệt độ xác định.',
    'Phân biệt dung dịch chưa bão hoà và dung dịch bão hoà.',
    'Nêu được định nghĩa nồng độ phần trăm, nồng độ mol; tính được C% và $C_M$.',
    'Tiến hành được thí nghiệm pha một dung dịch theo nồng độ cho trước.',
  ],
  sections: [
    {
      heading: 'Dung dịch, chất tan và dung môi',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dung dịch',
          text: 'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan. Chất tan là chất bị hoà tan trong dung môi; dung môi là chất có khả năng hoà tan chất khác để tạo thành dung dịch.',
        },
        {
          type: 'list',
          items: [
            'Nước muối: muối ăn là chất tan, nước là dung môi.',
            'Dung dịch copper(II) sulfate màu xanh: $\\mathrm{CuSO_4}$ là chất tan, nước là dung môi.',
            'Cồn iodine sát trùng: iodine là chất tan, cồn (ethanol) là dung môi.',
          ],
        },
        {
          type: 'p',
          text: 'Nước hoà tan được rất nhiều chất nên là dung môi phổ biến nhất. Có những chất không tan trong nước nhưng tan trong dung môi khác, ví dụ dầu ăn tan trong xăng.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dung dịch chưa bão hoà và dung dịch bão hoà',
          text: 'Ở một nhiệt độ, áp suất xác định, dung dịch chưa bão hoà là dung dịch còn có thể hoà tan thêm chất tan; dung dịch bão hoà là dung dịch không thể hoà tan thêm chất tan.',
        },
        {
          type: 'p',
          text: 'Để chất rắn tan nhanh hơn trong nước, ta có thể khuấy dung dịch, đun nóng dung dịch hoặc nghiền nhỏ chất rắn.',
        },
      ],
    },
    {
      heading: 'Độ tan của một chất trong nước',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Độ tan',
          text: 'Độ tan (kí hiệu $S$) của một chất trong nước là số gam chất đó hoà tan tối đa trong $100$ g nước để tạo thành dung dịch bão hoà ở một nhiệt độ, áp suất xác định.',
        },
        {
          type: 'tex',
          tex: 'S = \\dfrac{m_{ct}}{m_{\\mathrm{H_2O}}} \\times 100 \\quad (\\text{g}/100\\ \\text{g}\\ \\mathrm{H_2O})',
        },
        {
          type: 'p',
          text: 'Trong đó $m_{ct}$ là khối lượng chất tan và $m_{\\mathrm{H_2O}}$ là khối lượng nước của dung dịch bão hoà.',
        },
        {
          type: 'table',
          caption: 'Độ tan trong nước của một số chất ở $20\\,^\\circ\\mathrm{C}$ (gần đúng)',
          head: ['Chất', '$S$ (g/100 g nước)'],
          rows: [
            ['Sodium chloride $\\mathrm{NaCl}$', '$36$'],
            ['Copper(II) sulfate $\\mathrm{CuSO_4}$', '$20{,}7$'],
            ['Potassium permanganate $\\mathrm{KMnO_4}$', '$6{,}4$'],
          ],
        },
        {
          type: 'list',
          items: [
            'Độ tan của phần lớn chất rắn trong nước tăng khi nhiệt độ tăng.',
            'Độ tan của chất khí trong nước tăng khi giảm nhiệt độ và tăng áp suất. Vì thế nước ngọt có gas được đóng chai dưới áp suất cao và để lạnh thì giữ gas lâu hơn.',
          ],
        },
      ],
    },
    {
      heading: 'Nồng độ dung dịch',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nồng độ phần trăm',
          text: 'Nồng độ phần trăm (kí hiệu C%) của một dung dịch cho biết số gam chất tan có trong $100$ g dung dịch.',
        },
        {
          type: 'tex',
          tex: 'C\\% = \\dfrac{m_{ct}}{m_{dd}} \\times 100\\% \\qquad m_{dd} = m_{ct} + m_{dm}',
        },
        {
          type: 'p',
          text: 'Trong đó $m_{ct}$ là khối lượng chất tan (g), $m_{dd}$ là khối lượng dung dịch (g), $m_{dm}$ là khối lượng dung môi (g).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nồng độ mol',
          text: 'Nồng độ mol (kí hiệu $C_M$) của một dung dịch cho biết số mol chất tan có trong $1$ lít dung dịch.',
        },
        { type: 'tex', tex: 'C_M = \\dfrac{n}{V} \\quad (\\text{mol/L})' },
        {
          type: 'p',
          text: 'Trong đó $n$ là số mol chất tan, $V$ là thể tích dung dịch tính bằng lít. Đơn vị mol/L còn được viết là M; ví dụ dung dịch NaCl $0{,}5$ M có $0{,}5$ mol NaCl trong mỗi lít dung dịch.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Nhớ đổi thể tích sang lít trước khi tính $C_M$: $200$ mL $= 0{,}2$ L. Khối lượng dung dịch trong C% gồm cả chất tan, không chỉ khối lượng nước.',
        },
      ],
    },
    {
      heading: 'Pha chế dung dịch theo nồng độ cho trước',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tính khối lượng chất tan cần dùng (và khối lượng nước, với nồng độ phần trăm).',
            'Cân chất tan, cho vào cốc thuỷ tinh (hoặc bình định mức).',
            'Với C%: cân hoặc đong lượng nước đã tính rồi đổ vào, khuấy đều cho tan hết. Với $C_M$: thêm dần nước, khuấy cho tan hết rồi thêm nước đến đúng vạch thể tích cần pha.',
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ pha $50$ g dung dịch $\\mathrm{CuSO_4}$ $10\\%$: cần $m_{ct} = 50 \\times 10\\% = 5$ g $\\mathrm{CuSO_4}$ và $50 - 5 = 45$ g nước.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cốc pha dung dịch',
    instruction:
      'Chọn chất tan và chế độ. Ở chế độ nồng độ phần trăm, kéo khối lượng chất tan và khối lượng nước: màu dung dịch đậm dần, C% thay đổi, và khi vượt độ tan thì chất rắn không tan lắng dưới đáy cốc. Ở chế độ nồng độ mol, kéo khối lượng chất tan và thể tích dung dịch để xem $C_M$.',
  },
  examples: [
    {
      problem:
        'Hoà tan $15$ g NaCl vào $45$ g nước. Tính nồng độ phần trăm của dung dịch thu được.',
      steps: [
        '$m_{dd} = m_{ct} + m_{dm} = 15 + 45 = 60$ g.',
        '$C\\% = \\dfrac{15}{60} \\times 100\\% = 25\\%$.',
      ],
      answer: 'Dung dịch NaCl $25\\%$.',
    },
    {
      problem:
        'Hoà tan $16$ g $\\mathrm{CuSO_4}$ vào nước được $200$ mL dung dịch. Tính nồng độ mol của dung dịch (Cu = 64, S = 32, O = 16).',
      steps: [
        '$M_{\\mathrm{CuSO_4}} = 64 + 32 + 4 \\times 16 = 160$ g/mol, nên $n = \\dfrac{16}{160} = 0{,}1$ mol.',
        'Đổi thể tích: $V = 200$ mL $= 0{,}2$ L.',
        '$C_M = \\dfrac{n}{V} = \\dfrac{0{,}1}{0{,}2} = 0{,}5$ M.',
      ],
      answer: 'Dung dịch $\\mathrm{CuSO_4}$ $0{,}5$ M.',
    },
    {
      problem:
        'Ở $25\\,^\\circ\\mathrm{C}$, hoà tan $72$ g NaCl vào $200$ g nước thì được dung dịch bão hoà. Tính độ tan của NaCl ở nhiệt độ này.',
      steps: [
        'Dung dịch bão hoà nên $72$ g là lượng NaCl tan tối đa trong $200$ g nước.',
        '$S = \\dfrac{72}{200} \\times 100 = 36$.',
      ],
      answer: 'Độ tan của NaCl ở $25\\,^\\circ\\mathrm{C}$ là $36$ g trong $100$ g nước.',
    },
    {
      problem: 'Trình bày cách pha $100$ mL dung dịch NaCl $0{,}2$ M (Na = 23, Cl = 35,5).',
      steps: [
        '$n = C_M \\times V = 0{,}2 \\times 0{,}1 = 0{,}02$ mol.',
        '$m = n \\times M = 0{,}02 \\times 58{,}5 = 1{,}17$ g NaCl.',
        'Cân $1{,}17$ g NaCl cho vào bình định mức (hoặc cốc chia vạch) $100$ mL, thêm nước cất, lắc cho tan hết rồi thêm nước đến vạch $100$ mL.',
      ],
      answer: 'Cần $1{,}17$ g NaCl, pha thành $100$ mL dung dịch.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong nước muối sinh lí, chất tan và dung môi lần lượt là',
      options: ['nước và muối ăn', 'muối ăn và nước', 'muối ăn và không khí', 'nước và nước'],
      answer: 1,
      hints: ['Dung môi là chất hoà tan chất khác.'],
      solution: 'Muối ăn (NaCl) bị hoà tan nên là chất tan; nước hoà tan muối nên là dung môi.',
    },
    {
      type: 'choice',
      prompt: 'Dung dịch bão hoà là dung dịch',
      options: [
        'có nồng độ $100\\%$',
        'không thể hoà tan thêm chất tan ở nhiệt độ, áp suất đó',
        'còn có thể hoà tan thêm chất tan',
        'chỉ có dung môi, không có chất tan',
      ],
      answer: 1,
      hints: ['Nghĩ đến lúc khuấy mãi mà đường vẫn còn dưới đáy cốc.'],
      solution:
        'Dung dịch bão hoà là dung dịch không thể hoà tan thêm chất tan ở nhiệt độ, áp suất xác định.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan $20$ g đường vào $80$ g nước. Tính nồng độ phần trăm của dung dịch, theo $\\%$.',
      answer: 20,
      unit: '%',
      hints: ['Khối lượng dung dịch gồm cả đường và nước.'],
      solution: '$m_{dd} = 20 + 80 = 100$ g; $C\\% = \\dfrac{20}{100} \\times 100\\% = 20\\%$.',
    },
    {
      type: 'number',
      prompt: 'Tính khối lượng NaOH có trong $200$ g dung dịch NaOH $15\\%$, theo gam.',
      answer: 30,
      unit: 'g',
      hints: ['$m_{ct} = \\dfrac{C\\% \\times m_{dd}}{100\\%}$.'],
      solution: '$m_{ct} = \\dfrac{15 \\times 200}{100} = 30$ g.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan $0{,}5$ mol NaCl vào nước được $2$ L dung dịch. Tính nồng độ mol của dung dịch (M).',
      answer: 0.25,
      tolerance: 0.0001,
      unit: 'M',
      hints: ['$C_M = \\dfrac{n}{V}$ với $V$ tính bằng lít.'],
      solution: '$C_M = \\dfrac{0{,}5}{2} = 0{,}25$ M.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan $8$ g $\\mathrm{CuSO_4}$ vào nước được $200$ mL dung dịch. Tính nồng độ mol của dung dịch (M).',
      answer: 0.25,
      tolerance: 0.0001,
      unit: 'M',
      hints: ['$M_{\\mathrm{CuSO_4}} = 160$ g/mol.', 'Đổi $200$ mL ra lít trước khi chia.'],
      solution: '$n = \\dfrac{8}{160} = 0{,}05$ mol; $C_M = \\dfrac{0{,}05}{0{,}2} = 0{,}25$ M.',
    },
    {
      type: 'number',
      prompt: 'Tính số mol NaOH có trong $250$ mL dung dịch NaOH $2$ M.',
      answer: 0.5,
      tolerance: 0.0001,
      unit: 'mol',
      hints: ['$n = C_M \\times V$.'],
      solution: '$n = 2 \\times 0{,}25 = 0{,}5$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Ở $20\\,^\\circ\\mathrm{C}$, $50$ g nước hoà tan tối đa $102$ g đường. Tính độ tan của đường ở nhiệt độ này (g/100 g nước).',
      answer: 204,
      hints: ['$S = \\dfrac{m_{ct}}{m_{\\mathrm{H_2O}}} \\times 100$.'],
      solution: '$S = \\dfrac{102}{50} \\times 100 = 204$ g trong $100$ g nước.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu gam nước để pha $50$ g dung dịch $\\mathrm{CuSO_4}$ $10\\%$ từ $\\mathrm{CuSO_4}$ khan?',
      answer: 45,
      unit: 'g',
      hints: ['Tính khối lượng $\\mathrm{CuSO_4}$ trước, rồi lấy khối lượng dung dịch trừ đi.'],
      solution: '$m_{ct} = 50 \\times 10\\% = 5$ g; $m_{\\mathrm{H_2O}} = 50 - 5 = 45$ g.',
    },
    {
      type: 'multi',
      prompt: 'Cách nào làm tăng lượng khí carbon dioxide hoà tan được trong nước?',
      options: [
        'Giảm nhiệt độ của nước.',
        'Tăng nhiệt độ của nước.',
        'Tăng áp suất khí phía trên mặt nước.',
        'Giảm áp suất khí phía trên mặt nước.',
      ],
      answers: [0, 2],
      hints: ['Độ tan của chất khí ngược với chất rắn khi đổi nhiệt độ.'],
      solution:
        'Độ tan của chất khí trong nước tăng khi giảm nhiệt độ và tăng áp suất; vì vậy nước có gas được đóng chai dưới áp suất cao và nên để lạnh.',
    },
  ],
  takeaways: [
    'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan; nước là dung môi phổ biến nhất.',
    'Độ tan $S = \\dfrac{m_{ct}}{m_{\\mathrm{H_2O}}} \\times 100$ (g/100 g nước) ứng với dung dịch bão hoà ở nhiệt độ, áp suất xác định.',
    'Nồng độ phần trăm: $C\\% = \\dfrac{m_{ct}}{m_{dd}} \\times 100\\%$, với $m_{dd} = m_{ct} + m_{dm}$.',
    'Nồng độ mol: $C_M = \\dfrac{n}{V}$, $V$ tính bằng lít, đơn vị mol/L (M).',
  ],
};
