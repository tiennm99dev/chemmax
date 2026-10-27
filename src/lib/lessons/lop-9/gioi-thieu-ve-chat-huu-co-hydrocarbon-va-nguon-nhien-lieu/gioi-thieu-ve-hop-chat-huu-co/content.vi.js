const COLS9 = '\\begin{array}{ccccccccc}';

/** Full structural formula of ethylic alcohol: H–C–C–O–H with hydrogens above and below. */
const ETHANOL_FULL = `${COLS9} & & \\mathrm{H} & & \\mathrm{H} & & & & \\\\ & & | & & | & & & & \\\\ \\mathrm{H} & - & \\mathrm{C} & - & \\mathrm{C} & - & \\mathrm{O} & - & \\mathrm{H} \\\\ & & | & & | & & & & \\\\ & & \\mathrm{H} & & \\mathrm{H} & & & & \\end{array}`;

/** Full structural formula of dimethyl ether: H–C–O–C–H. */
const ETHER_FULL = `${COLS9} & & \\mathrm{H} & & & & \\mathrm{H} & & \\\\ & & | & & & & | & & \\\\ \\mathrm{H} & - & \\mathrm{C} & - & \\mathrm{O} & - & \\mathrm{C} & - & \\mathrm{H} \\\\ & & | & & & & | & & \\\\ & & \\mathrm{H} & & & & \\mathrm{H} & & \\end{array}`;

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO2, muối carbonate, ...). Trong hợp chất hữu cơ, carbon luôn có hoá trị IV và các nguyên tử carbon liên kết với nhau tạo thành mạch carbon. Công thức cấu tạo cho biết trật tự liên kết giữa các nguyên tử. Hợp chất hữu cơ gồm hydrocarbon và dẫn xuất của hydrocarbon.',
  intro:
    'Gạo, đường, dầu ăn, xăng, khí gas, nhựa, sợi vải, thuốc chữa bệnh... đều chứa những hợp chất của carbon. Vì sao ethylic alcohol (cồn) và dimethyl ether có cùng công thức phân tử $\\mathrm{C_2H_6O}$ mà một chất là chất lỏng, một chất là chất khí? Câu trả lời nằm ở cách các nguyên tử liên kết với nhau trong phân tử.',
  objectives: [
    'Nêu được khái niệm hợp chất hữu cơ và hoá học hữu cơ.',
    'Nêu được đặc điểm cấu tạo của hợp chất hữu cơ: hoá trị của carbon, mạch carbon, liên kết đơn, liên kết đôi.',
    'Phân biệt được công thức phân tử, công thức cấu tạo và viết được công thức cấu tạo đầy đủ, thu gọn của một số chất đơn giản.',
    'Phân loại được hợp chất hữu cơ thành hydrocarbon và dẫn xuất của hydrocarbon.',
  ],
  sections: [
    {
      heading: 'Khái niệm hợp chất hữu cơ và hoá học hữu cơ',
      blocks: [
        {
          type: 'p',
          text: 'Khi đốt cháy bông, giấy, nến hay khí gas, sản phẩm luôn có khí carbon dioxide, chứng tỏ các chất đó đều chứa nguyên tố carbon.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hợp chất hữu cơ',
          text: 'Hợp chất hữu cơ là hợp chất của carbon, trừ một số hợp chất như carbon monoxide ($\\mathrm{CO}$), carbon dioxide ($\\mathrm{CO_2}$), các muối carbonate ($\\mathrm{CaCO_3}$, $\\mathrm{Na_2CO_3}$, ...).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hoá học hữu cơ',
          text: 'Hoá học hữu cơ là chuyên ngành của hoá học nghiên cứu về các hợp chất hữu cơ.',
        },
        {
          type: 'p',
          text: 'Hợp chất hữu cơ có ở khắp nơi: trong cơ thể sinh vật (tinh bột, protein, chất béo), trong lương thực, thực phẩm, nhiên liệu (xăng, khí gas), dược phẩm và vật liệu (chất dẻo, tơ sợi).',
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo của hợp chất hữu cơ',
      blocks: [
        {
          type: 'list',
          items: [
            'Phân tử hợp chất hữu cơ nhất thiết có carbon, thường có hydrogen, ngoài ra có thể có oxygen, nitrogen, chlorine, sulfur, ...',
            'Liên kết hoá học chủ yếu trong hợp chất hữu cơ là liên kết cộng hoá trị.',
            'Trong hợp chất hữu cơ, carbon luôn có hoá trị IV, hydrogen hoá trị I, oxygen hoá trị II, chlorine hoá trị I.',
            'Các nguyên tử carbon không những liên kết với nguyên tử của nguyên tố khác mà còn liên kết trực tiếp với nhau tạo thành mạch carbon.',
          ],
        },
        {
          type: 'table',
          head: ['Loại mạch carbon', 'Ví dụ'],
          rows: [
            ['Mạch không phân nhánh', '$\\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_3}$'],
            [
              'Mạch phân nhánh',
              '$\\mathrm{CH_3{-}CH(CH_3){-}CH_3}$ (nhánh $\\mathrm{CH_3}$ gắn vào carbon ở giữa)',
            ],
            ['Mạch vòng', 'cyclohexane $\\mathrm{C_6H_{12}}$: sáu nguyên tử carbon nối thành vòng'],
          ],
          caption: 'Ba loại mạch carbon',
        },
        {
          type: 'callout',
          tone: 'theorem',
          text: 'Mỗi hợp chất hữu cơ có một trật tự liên kết xác định giữa các nguyên tử trong phân tử. Tính chất của hợp chất hữu cơ phụ thuộc đồng thời vào thành phần phân tử và trật tự liên kết đó.',
        },
      ],
    },
    {
      heading: 'Công thức phân tử và công thức cấu tạo',
      blocks: [
        {
          type: 'p',
          text: 'Công thức phân tử cho biết thành phần nguyên tố và số nguyên tử của mỗi nguyên tố trong phân tử, ví dụ $\\mathrm{C_2H_6O}$: phân tử có 2 nguyên tử C, 6 nguyên tử H và 1 nguyên tử O.',
        },
        {
          type: 'p',
          text: 'Công thức cấu tạo cho biết thành phần phân tử và trật tự, cách liên kết giữa các nguyên tử trong phân tử. Mỗi liên kết được biểu diễn bằng một nét gạch:',
        },
        {
          type: 'list',
          items: [
            'Liên kết đơn (một cặp electron dùng chung) biểu diễn bằng một gạch: $\\mathrm{C{-}H}$, $\\mathrm{C{-}C}$.',
            'Liên kết đôi (hai cặp electron dùng chung) biểu diễn bằng hai gạch: $\\mathrm{C{=}C}$, $\\mathrm{C{=}O}$.',
          ],
        },
        {
          type: 'p',
          text: 'Công thức $\\mathrm{C_2H_6O}$ ứng với hai chất khác nhau. Ethylic alcohol (chất lỏng, tác dụng được với sodium) có công thức cấu tạo đầy đủ:',
        },
        { type: 'tex', tex: ETHANOL_FULL },
        {
          type: 'p',
          text: 'còn dimethyl ether (chất khí, không tác dụng với sodium) có công thức cấu tạo đầy đủ:',
        },
        { type: 'tex', tex: ETHER_FULL },
        {
          type: 'callout',
          tone: 'note',
          title: 'Công thức cấu tạo thu gọn',
          text: 'Gộp các nguyên tử hydrogen vào nguyên tử liên kết với chúng thành từng nhóm: ethylic alcohol $\\mathrm{CH_3{-}CH_2{-}OH}$, dimethyl ether $\\mathrm{CH_3{-}O{-}CH_3}$, ethylene $\\mathrm{CH_2{=}CH_2}$.',
        },
      ],
    },
    {
      heading: 'Phân loại hợp chất hữu cơ',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào thành phần nguyên tố, hợp chất hữu cơ được chia thành hai loại:',
        },
        {
          type: 'table',
          head: ['Loại', 'Thành phần nguyên tố', 'Ví dụ'],
          rows: [
            [
              'Hydrocarbon',
              'Chỉ có carbon và hydrogen',
              '$\\mathrm{CH_4}$, $\\mathrm{CH_2{=}CH_2}$, $\\mathrm{CH_3CH_2CH_3}$',
            ],
            [
              'Dẫn xuất của hydrocarbon',
              'Ngoài carbon còn có nguyên tố khác như oxygen, nitrogen, chlorine, ...; thường có hydrogen',
              '$\\mathrm{CH_3COOH}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{CH_3NH_2}$, $\\mathrm{CH_3Cl}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Chỉ cần trong phân tử có thêm một nguyên tố khác C và H (dù chỉ một nguyên tử, như Cl trong $\\mathrm{CH_3Cl}$) thì chất đó là dẫn xuất của hydrocarbon, không phải hydrocarbon.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ dựng công thức cấu tạo',
    instruction:
      'Chọn một công thức phân tử. Chạm một nguyên tử rồi chạm nguyên tử thứ hai để nối liên kết đơn; chạm lại cặp đó để đổi thành liên kết đôi hoặc bỏ liên kết. Số nhỏ cạnh mỗi nguyên tử cho biết số liên kết đã dùng trên hoá trị. Khi mọi nguyên tử đủ hoá trị, công thức cấu tạo thu gọn và tên chất hiện ra. Với $\\mathrm{C_2H_6O}$, hãy tìm cả hai cách sắp xếp.',
  },
  examples: [
    {
      problem:
        'Viết công thức cấu tạo thu gọn của các chất có công thức phân tử $\\mathrm{C_2H_6O}$.',
      steps: [
        'Hoá trị: C là IV, O là II, H là I. Hai nguyên tử C và một nguyên tử O phải nối thành một mạch.',
        'Cách 1: hai C nối với nhau, O ở đầu mạch: $\\mathrm{C{-}C{-}O}$. Thêm H cho đủ hoá trị: C đầu có 3 H, C giữa có 2 H, O có 1 H.',
        'Cách 2: O ở giữa hai C: $\\mathrm{C{-}O{-}C}$. Mỗi C còn 3 hoá trị nên gắn 3 H; O đã đủ hoá trị II.',
        'Kiểm tra: cả hai cách đều có 2 C, 6 H, 1 O.',
      ],
      answer:
        '$\\mathrm{CH_3{-}CH_2{-}OH}$ (ethylic alcohol) và $\\mathrm{CH_3{-}O{-}CH_3}$ (dimethyl ether).',
    },
    {
      problem:
        'Cho các chất: $\\mathrm{CH_4}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{CO_2}$, $\\mathrm{CH_3Cl}$, $\\mathrm{C_2H_4}$, $\\mathrm{Na_2CO_3}$. Chất nào là hợp chất hữu cơ? Phân loại các hợp chất hữu cơ đó.',
      steps: [
        '$\\mathrm{CO_2}$ và muối carbonate $\\mathrm{Na_2CO_3}$ tuy chứa carbon nhưng là hợp chất vô cơ.',
        'Hợp chất hữu cơ: $\\mathrm{CH_4}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{CH_3Cl}$, $\\mathrm{C_2H_4}$.',
        '$\\mathrm{CH_4}$ và $\\mathrm{C_2H_4}$ chỉ có C và H nên là hydrocarbon.',
        '$\\mathrm{C_2H_5OH}$ có thêm O, $\\mathrm{CH_3Cl}$ có thêm Cl nên là dẫn xuất của hydrocarbon.',
      ],
      answer:
        'Hydrocarbon: $\\mathrm{CH_4}$, $\\mathrm{C_2H_4}$. Dẫn xuất của hydrocarbon: $\\mathrm{C_2H_5OH}$, $\\mathrm{CH_3Cl}$.',
    },
    {
      problem:
        'Viết công thức cấu tạo thu gọn của propane $\\mathrm{C_3H_8}$ và cho biết phân tử có bao nhiêu liên kết đơn.',
      steps: [
        'Ba nguyên tử C nối thành mạch: $\\mathrm{C{-}C{-}C}$.',
        'C ở hai đầu mỗi nguyên tử còn 3 hoá trị, gắn 3 H; C ở giữa còn 2 hoá trị, gắn 2 H: $\\mathrm{CH_3{-}CH_2{-}CH_3}$.',
        'Số liên kết: 2 liên kết $\\mathrm{C{-}C}$ và 8 liên kết $\\mathrm{C{-}H}$, tất cả đều là liên kết đơn.',
      ],
      answer: '$\\mathrm{CH_3{-}CH_2{-}CH_3}$, có $2 + 8 = 10$ liên kết đơn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hợp chất hữu cơ.',
      options: [
        '$\\mathrm{C_2H_6O}$',
        '$\\mathrm{CO_2}$',
        '$\\mathrm{CH_3Cl}$',
        '$\\mathrm{CaCO_3}$',
        '$\\mathrm{C_6H_{12}O_6}$',
        '$\\mathrm{CO}$',
      ],
      answers: [0, 2, 4],
      hints: [
        'Hợp chất hữu cơ là hợp chất của carbon, nhưng có vài ngoại lệ.',
        'CO, CO₂ và muối carbonate là hợp chất vô cơ.',
      ],
      solution:
        '$\\mathrm{C_2H_6O}$, $\\mathrm{CH_3Cl}$, $\\mathrm{C_6H_{12}O_6}$ là hợp chất hữu cơ. $\\mathrm{CO}$, $\\mathrm{CO_2}$ và muối carbonate $\\mathrm{CaCO_3}$ tuy chứa carbon nhưng là hợp chất vô cơ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hydrocarbon.',
      options: [
        '$\\mathrm{C_2H_4}$',
        '$\\mathrm{CH_3COOH}$',
        '$\\mathrm{C_4H_{10}}$',
        '$\\mathrm{CH_3NH_2}$',
        '$\\mathrm{C_6H_6}$',
        '$\\mathrm{CH_3Cl}$',
      ],
      answers: [0, 2, 4],
      hints: ['Hydrocarbon chỉ gồm hai nguyên tố.'],
      solution:
        '$\\mathrm{C_2H_4}$, $\\mathrm{C_4H_{10}}$, $\\mathrm{C_6H_6}$ chỉ có C và H nên là hydrocarbon. $\\mathrm{CH_3COOH}$ (có O), $\\mathrm{CH_3NH_2}$ (có N), $\\mathrm{CH_3Cl}$ (có Cl) là dẫn xuất của hydrocarbon.',
    },
    {
      type: 'choice',
      prompt: 'Trong hợp chất hữu cơ, carbon luôn có hoá trị',
      options: ['I', 'II', 'III', 'IV'],
      answer: 3,
      hints: ['Đếm số liên kết quanh nguyên tử C trong methane $\\mathrm{CH_4}$.'],
      solution:
        'Carbon luôn có hoá trị IV: mỗi nguyên tử C tạo đủ 4 liên kết (ví dụ 4 liên kết $\\mathrm{C{-}H}$ trong $\\mathrm{CH_4}$).',
    },
    {
      type: 'choice',
      prompt: 'Công thức cấu tạo nào sau đây viết sai?',
      options: [
        '$\\mathrm{CH_3{-}CH_2{-}CH_3}$',
        '$\\mathrm{CH_2{=}CH{-}CH_3}$',
        '$\\mathrm{CH_3{=}CH{-}CH_3}$',
        '$\\mathrm{CH_3{-}O{-}CH_3}$',
      ],
      answer: 2,
      hints: [
        'Đếm số liên kết quanh mỗi nguyên tử carbon, kể cả liên kết với H.',
        'Một liên kết đôi tính là 2.',
      ],
      solution:
        'Trong $\\mathrm{CH_3{=}CH{-}CH_3}$, carbon đầu tiên có 3 liên kết với H và một liên kết đôi, tổng cộng 5, vượt hoá trị IV. Các công thức còn lại đều đúng hoá trị.',
    },
    {
      type: 'number',
      prompt: 'Phân tử ethane $\\mathrm{CH_3{-}CH_3}$ có bao nhiêu liên kết đơn?',
      answer: 7,
      hints: ['Đếm riêng liên kết giữa hai C và các liên kết $\\mathrm{C{-}H}$.'],
      solution:
        'Có 1 liên kết $\\mathrm{C{-}C}$ và 6 liên kết $\\mathrm{C{-}H}$: tổng cộng 7 liên kết đơn.',
    },
    {
      type: 'number',
      prompt:
        'Phân tử ethylene $\\mathrm{CH_2{=}CH_2}$ có tổng cộng bao nhiêu cặp electron dùng chung?',
      answer: 6,
      hints: [
        'Liên kết đơn dùng một cặp electron, liên kết đôi dùng hai cặp.',
        'Phân tử có 4 liên kết $\\mathrm{C{-}H}$ và 1 liên kết $\\mathrm{C{=}C}$.',
      ],
      solution:
        '4 liên kết $\\mathrm{C{-}H}$ dùng 4 cặp, liên kết đôi $\\mathrm{C{=}C}$ dùng 2 cặp: $4 + 2 = 6$ cặp.',
    },
    {
      type: 'text',
      prompt:
        'Ethylic alcohol $\\mathrm{CH_3{-}CH_2{-}OH}$ và dimethyl ether $\\mathrm{CH_3{-}O{-}CH_3}$ có cùng công thức phân tử. Viết công thức phân tử đó (ví dụ gõ C3H8).',
      accept: ['C2H6O', 'C2OH6'],
      hints: ['Đếm số nguyên tử C, H, O trong một công thức.'],
      solution:
        'Mỗi chất có 2 nguyên tử C, 6 nguyên tử H và 1 nguyên tử O: công thức phân tử $\\mathrm{C_2H_6O}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao ethylic alcohol và dimethyl ether có tính chất khác nhau?',
      options: [
        'Vì chúng có công thức phân tử khác nhau.',
        'Vì trật tự liên kết giữa các nguyên tử trong phân tử khác nhau.',
        'Vì một chất là hydrocarbon, chất kia là dẫn xuất.',
        'Vì carbon có hoá trị khác nhau trong hai chất.',
      ],
      answer: 1,
      hints: ['Hai chất có cùng công thức phân tử $\\mathrm{C_2H_6O}$.'],
      solution:
        'Hai chất có cùng thành phần phân tử nhưng trật tự liên kết khác nhau (nhóm $\\mathrm{{-}OH}$ trong alcohol, nguyên tử O nằm giữa hai C trong ether), nên tính chất khác nhau. Cả hai đều là dẫn xuất của hydrocarbon và C đều có hoá trị IV.',
    },
    {
      type: 'number',
      prompt: 'Tính phần trăm khối lượng carbon trong methane $\\mathrm{CH_4}$ (C = 12, H = 1).',
      answer: 75,
      tolerance: 0.1,
      unit: '%',
      hints: ['$M_{\\mathrm{CH_4}} = 12 + 4 \\times 1$.'],
      solution: '$M = 16$ g/mol; $\\%C = \\dfrac{12}{16} \\times 100\\% = 75\\%$.',
    },
  ],
  takeaways: [
    'Hợp chất hữu cơ là hợp chất của carbon (trừ CO, $\\mathrm{CO_2}$, muối carbonate, ...); hoá học hữu cơ nghiên cứu các hợp chất đó.',
    'Trong hợp chất hữu cơ: C hoá trị IV, H hoá trị I, O hoá trị II; các nguyên tử C nối với nhau tạo mạch không phân nhánh, phân nhánh hoặc vòng.',
    'Công thức phân tử cho biết thành phần; công thức cấu tạo cho biết thêm trật tự liên kết. Liên kết đơn vẽ một gạch, liên kết đôi vẽ hai gạch.',
    'Tính chất phụ thuộc cả thành phần và cấu tạo: $\\mathrm{C_2H_6O}$ có thể là ethylic alcohol hoặc dimethyl ether.',
    'Hydrocarbon chỉ có C và H; dẫn xuất của hydrocarbon có thêm nguyên tố khác như O, N, Cl.',
  ],
};
