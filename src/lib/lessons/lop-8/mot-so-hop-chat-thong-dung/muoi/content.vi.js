/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Muối là hợp chất được tạo ra khi thay thế ion H+ của acid bằng ion kim loại hoặc ion ammonium. Tên muối gồm tên kim loại và tên gốc acid. Dung dịch muối tác dụng với kim loại, acid, base và muối khác; phản ứng giữa các dung dịch xảy ra khi có chất kết tủa hoặc chất khí tạo thành. Muối được điều chế từ acid, base, oxide, kim loại và muối.',
  intro:
    'Muối ăn chỉ là một trong rất nhiều muối: phèn chua làm trong nước, thuốc tím sát trùng, đá vôi xây nhà, phân đạm bón ruộng đều là muối. Khi trộn hai dung dịch muối trong suốt, có lúc cốc vẫn trong, có lúc bỗng xuất hiện chất rắn trắng đục. Bảng tính tan sẽ giúp em đoán trước điều đó.',
  objectives: [
    'Nêu được khái niệm về muối (muối là hợp chất được tạo ra khi thay thế ion $\\mathrm{H^+}$ của acid bằng ion kim loại hoặc ion ammonium); gọi được tên một số muối thông dụng.',
    'Chỉ ra được một số muối tan và muối không tan từ bảng tính tan.',
    'Trình bày được một số phương pháp điều chế muối.',
    'Đọc được tính chất hoá học của muối: muối tác dụng với kim loại, với các dung dịch muối, acid, base; viết được phương trình hoá học.',
  ],
  sections: [
    {
      heading: 'Khái niệm và tên gọi của muối',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Muối',
          text: 'Muối là những hợp chất được tạo ra khi thay thế ion $\\mathrm{H^+}$ của acid bằng ion kim loại hoặc ion ammonium ($\\mathrm{NH_4^+}$).',
        },
        {
          type: 'p',
          text: 'Ví dụ: thay $\\mathrm{H}$ của $\\mathrm{HCl}$ bằng $\\mathrm{Na}$ được muối $\\mathrm{NaCl}$; thay $2\\mathrm{H}$ của $\\mathrm{H_2SO_4}$ bằng $\\mathrm{Cu}$ được $\\mathrm{CuSO_4}$; thay $\\mathrm{H}$ của $\\mathrm{HNO_3}$ bằng $\\mathrm{NH_4}$ được $\\mathrm{NH_4NO_3}$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Gọi tên muối',
          text: 'Tên muối = tên kim loại (kèm hoá trị nếu kim loại có nhiều hoá trị) + tên gốc acid.',
        },
        {
          type: 'table',
          caption: 'Tên một số gốc acid và muối',
          head: ['Acid', 'Gốc acid', 'Tên gốc', 'Ví dụ muối'],
          rows: [
            ['$\\mathrm{HCl}$', '$\\mathrm{-Cl}$', 'chloride', '$\\mathrm{NaCl}$ sodium chloride'],
            [
              '$\\mathrm{HNO_3}$',
              '$\\mathrm{-NO_3}$',
              'nitrate',
              '$\\mathrm{KNO_3}$ potassium nitrate',
            ],
            [
              '$\\mathrm{H_2SO_4}$',
              '$\\mathrm{=SO_4}$',
              'sulfate',
              '$\\mathrm{CuSO_4}$ copper(II) sulfate',
            ],
            [
              '$\\mathrm{H_2CO_3}$',
              '$\\mathrm{=CO_3}$',
              'carbonate',
              '$\\mathrm{CaCO_3}$ calcium carbonate',
            ],
            [
              '$\\mathrm{H_3PO_4}$',
              '$\\mathrm{\\equiv PO_4}$',
              'phosphate',
              '$\\mathrm{Ca_3(PO_4)_2}$ calcium phosphate',
            ],
            ['$\\mathrm{H_2S}$', '$\\mathrm{=S}$', 'sulfide', '$\\mathrm{FeS}$ iron(II) sulfide'],
          ],
        },
        {
          type: 'p',
          text: 'Theo tính tan, có muối tan và muối không tan trong nước. Muốn biết một muối (hay base) có tan không, ta tra bảng tính tan: T là tan, I là ít tan, K là không tan. Ví dụ: mọi muối nitrate và muối của sodium, potassium đều tan; $\\mathrm{AgCl}$, $\\mathrm{BaSO_4}$, $\\mathrm{CaCO_3}$ không tan.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của muối',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Muối tác dụng với kim loại',
          text: 'Dung dịch muối có thể tác dụng với kim loại tạo thành muối mới và kim loại mới.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}',
        },
        {
          type: 'p',
          text: 'Ngâm đinh sắt trong dung dịch $\\mathrm{CuSO_4}$: có lớp kim loại màu đỏ (đồng) bám trên đinh sắt, màu xanh của dung dịch nhạt dần.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Muối tác dụng với acid',
          text: 'Muối tác dụng với acid tạo thành muối mới và acid mới.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{BaCl_2} + \\mathrm{H_2SO_4} &\\rightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{HCl} \\\\ \\mathrm{Na_2CO_3} + 2\\mathrm{HCl} &\\rightarrow 2\\mathrm{NaCl} + \\mathrm{H_2O} + \\mathrm{CO_2}\\uparrow \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Acid $\\mathrm{H_2CO_3}$ sinh ra không bền, phân huỷ ngay thành $\\mathrm{H_2O}$ và khí $\\mathrm{CO_2}$, nên ta thấy sủi bọt khí.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '3. Dung dịch muối tác dụng với dung dịch base',
          text: 'Dung dịch muối tác dụng với dung dịch base tạo thành muối mới và base mới.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CuSO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Cu(OH)_2}\\downarrow + \\mathrm{Na_2SO_4}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '4. Dung dịch muối tác dụng với dung dịch muối',
          text: 'Hai dung dịch muối tác dụng với nhau tạo thành hai muối mới.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{NaCl} + \\mathrm{AgNO_3} &\\rightarrow \\mathrm{AgCl}\\downarrow + \\mathrm{NaNO_3} \\\\ \\mathrm{BaCl_2} + \\mathrm{Na_2SO_4} &\\rightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{NaCl} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi nào phản ứng xảy ra?',
          text: 'Trong các phản ứng 2, 3, 4, hai chất đổi ion cho nhau. Phản ứng chỉ xảy ra khi sản phẩm có chất không tan (kết tủa) hoặc chất khí. Trộn dung dịch $\\mathrm{NaCl}$ với dung dịch $\\mathrm{KNO_3}$: $\\mathrm{NaNO_3}$ và $\\mathrm{KCl}$ đều tan, nên không có phản ứng.',
        },
      ],
    },
    {
      heading: 'Điều chế muối',
      blocks: [
        {
          type: 'p',
          text: 'Từ các tính chất của acid, base, oxide và muối, có nhiều cách điều chế muối:',
        },
        {
          type: 'table',
          head: ['Cách điều chế', 'Ví dụ'],
          rows: [
            [
              'Acid + base',
              '$\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$',
            ],
            [
              'Acid + oxide base',
              '$\\mathrm{CuO} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{H_2O}$',
            ],
            [
              'Oxide acid + base',
              '$\\mathrm{CO_2} + \\mathrm{Ca(OH)_2} \\rightarrow \\mathrm{CaCO_3} + \\mathrm{H_2O}$',
            ],
            [
              'Acid + kim loại',
              '$\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$',
            ],
            [
              'Acid + muối',
              '$\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl_2} + \\mathrm{H_2O} + \\mathrm{CO_2}$',
            ],
            [
              'Muối + muối',
              '$\\mathrm{BaCl_2} + \\mathrm{Na_2SO_4} \\rightarrow \\mathrm{BaSO_4} + 2\\mathrm{NaCl}$',
            ],
            [
              'Muối + kim loại',
              '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$',
            ],
            [
              'Muối + base',
              '$\\mathrm{CuCl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Cu(OH)_2} + 2\\mathrm{NaCl}$',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Trộn hai dung dịch: có kết tủa không?',
    instruction:
      'Chọn hai dung dịch (hoặc bấm “Cặp ngẫu nhiên”). Hai chất sẽ đổi ion cho nhau: tra bảng tính tan xem chất mới có tan không, rồi bấm dự đoán. Sau khi dự đoán, ô của hai chất mới được tô sáng trong bảng, cốc hiện kết tủa (nếu có) và phương trình hoá học.',
  },
  examples: [
    {
      problem:
        'Gọi tên các muối: $\\mathrm{K_2CO_3}$, $\\mathrm{FeCl_3}$, $\\mathrm{Al_2(SO_4)_3}$, $\\mathrm{NH_4Cl}$.',
      steps: [
        '$\\mathrm{K_2CO_3}$: potassium + carbonate: potassium carbonate.',
        '$\\mathrm{FeCl_3}$: Fe có hoá trị III (ba gốc $\\mathrm{Cl}$ hoá trị I): iron(III) chloride.',
        '$\\mathrm{Al_2(SO_4)_3}$: aluminium sulfate (Al chỉ có hoá trị III).',
        '$\\mathrm{NH_4Cl}$: ion ammonium thay cho H của HCl: ammonium chloride.',
      ],
      answer: 'Potassium carbonate, iron(III) chloride, aluminium sulfate, ammonium chloride.',
    },
    {
      problem:
        'Trộn dung dịch chứa $20{,}8$ g $\\mathrm{BaCl_2}$ với dung dịch $\\mathrm{Na_2SO_4}$ dư. Tính khối lượng kết tủa thu được (Ba = 137, Cl = 35,5, S = 32, O = 16).',
      steps: [
        '$\\mathrm{BaCl_2} + \\mathrm{Na_2SO_4} \\rightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{NaCl}$; kết tủa là $\\mathrm{BaSO_4}$.',
        '$M_{\\mathrm{BaCl_2}} = 137 + 71 = 208$ g/mol, $n_{\\mathrm{BaCl_2}} = \\dfrac{20{,}8}{208} = 0{,}1$ mol.',
        '$n_{\\mathrm{BaSO_4}} = n_{\\mathrm{BaCl_2}} = 0{,}1$ mol; $M_{\\mathrm{BaSO_4}} = 137 + 32 + 64 = 233$ g/mol.',
        '$m_{\\mathrm{BaSO_4}} = 0{,}1 \\times 233 = 23{,}3$ g.',
      ],
      answer: '$23{,}3$ g $\\mathrm{BaSO_4}$.',
    },
    {
      problem:
        'Viết ba phương trình hoá học điều chế magnesium chloride $\\mathrm{MgCl_2}$ từ các chất khác nhau.',
      steps: [
        'Acid + kim loại: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl_2} + \\mathrm{H_2}\\uparrow$.',
        'Acid + oxide base: $\\mathrm{MgO} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl_2} + \\mathrm{H_2O}$.',
        'Muối + muối (tạo kết tủa để phản ứng xảy ra): $\\mathrm{MgSO_4} + \\mathrm{BaCl_2} \\rightarrow \\mathrm{MgCl_2} + \\mathrm{BaSO_4}\\downarrow$.',
      ],
      answer: 'Ví dụ: từ Mg, từ MgO (với HCl) hoặc từ $\\mathrm{MgSO_4}$ (với $\\mathrm{BaCl_2}$).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là muối?',
      options: ['$\\mathrm{HNO_3}$', '$\\mathrm{KOH}$', '$\\mathrm{KNO_3}$', '$\\mathrm{K_2O}$'],
      answer: 2,
      hints: ['Muối gồm ion kim loại (hoặc ammonium) và gốc acid.'],
      solution:
        '$\\mathrm{KNO_3}$ gồm kim loại K và gốc nitrate nên là muối; $\\mathrm{HNO_3}$ là acid, $\\mathrm{KOH}$ là base, $\\mathrm{K_2O}$ là oxide.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên muối $\\mathrm{CuSO_4}$.',
      accept: ['copper(II) sulfate', 'copper (II) sulfate', 'copper(2) sulfate'],
      hints: ['Cu có nhiều hoá trị; gốc $\\mathrm{SO_4}$ có hoá trị II.'],
      solution: 'Trong $\\mathrm{CuSO_4}$, Cu có hoá trị II: copper(II) sulfate.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên muối $\\mathrm{Fe(NO_3)_3}$.',
      accept: ['iron(III) nitrate', 'iron (III) nitrate', 'iron(3) nitrate'],
      hints: ['Ba gốc nitrate hoá trị I liên kết với một nguyên tử Fe.'],
      solution: 'Fe có hoá trị III; gốc $\\mathrm{NO_3}$ là nitrate: iron(III) nitrate.',
    },
    {
      type: 'choice',
      prompt: 'Công thức của sodium carbonate là',
      options: [
        '$\\mathrm{NaCO_3}$',
        '$\\mathrm{Na_2CO_3}$',
        '$\\mathrm{Na(CO_3)_2}$',
        '$\\mathrm{NaHCO_3}$',
      ],
      answer: 1,
      hints: ['Na hoá trị I, gốc $\\mathrm{CO_3}$ hoá trị II.'],
      solution:
        'Theo quy tắc hoá trị cần $2$ nguyên tử Na cho một gốc $\\mathrm{CO_3}$: $\\mathrm{Na_2CO_3}$. ($\\mathrm{NaHCO_3}$ là sodium hydrogencarbonate.)',
    },
    {
      type: 'choice',
      prompt:
        'Ngâm một đinh sắt sạch trong dung dịch $\\mathrm{CuSO_4}$. Hiện tượng quan sát được là',
      options: [
        'đinh sắt tan hết, có khí thoát ra',
        'có lớp kim loại màu đỏ bám trên đinh sắt, màu xanh của dung dịch nhạt dần',
        'xuất hiện kết tủa trắng',
        'không có hiện tượng gì',
      ],
      answer: 1,
      hints: ['$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$.'],
      solution:
        'Sắt đẩy đồng ra khỏi muối: đồng màu đỏ bám vào đinh, $\\mathrm{CuSO_4}$ (màu xanh) bị tiêu hao nên dung dịch nhạt màu.',
    },
    {
      type: 'multi',
      prompt: 'Trộn các cặp dung dịch sau. Những cặp nào tạo kết tủa?',
      options: [
        '$\\mathrm{BaCl_2}$ và $\\mathrm{Na_2SO_4}$',
        '$\\mathrm{NaCl}$ và $\\mathrm{KNO_3}$',
        '$\\mathrm{CuSO_4}$ và $\\mathrm{NaOH}$',
        '$\\mathrm{NaCl}$ và $\\mathrm{Na_2SO_4}$',
        '$\\mathrm{AgNO_3}$ và $\\mathrm{NaCl}$',
      ],
      answers: [0, 2, 4],
      hints: [
        'Đổi ion của hai chất cho nhau rồi tra bảng tính tan các chất mới.',
        'Các chất không tan cần nhớ: $\\mathrm{BaSO_4}$, $\\mathrm{AgCl}$, $\\mathrm{Cu(OH)_2}$.',
      ],
      solution:
        'Tạo kết tủa: $\\mathrm{BaSO_4}$ (cặp 1), $\\mathrm{Cu(OH)_2}$ (cặp 3), $\\mathrm{AgCl}$ (cặp 5). Cặp 2 cho $\\mathrm{NaNO_3}$, $\\mathrm{KCl}$ đều tan; cặp 4 có chung ion $\\mathrm{Na^+}$ nên không phản ứng.',
    },
    {
      type: 'number',
      prompt:
        'Cho dung dịch chứa $16$ g $\\mathrm{CuSO_4}$ tác dụng với dung dịch NaOH dư. Tính khối lượng kết tủa $\\mathrm{Cu(OH)_2}$, theo gam (Cu = 64, S = 32, O = 16, H = 1).',
      answer: 9.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{CuSO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Cu(OH)_2} + \\mathrm{Na_2SO_4}$.',
        '$M_{\\mathrm{CuSO_4}} = 160$ g/mol; $M_{\\mathrm{Cu(OH)_2}} = 98$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{CuSO_4}} = \\dfrac{16}{160} = 0{,}1$ mol $= n_{\\mathrm{Cu(OH)_2}}$; $m = 0{,}1 \\times 98 = 9{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $10{,}6$ g $\\mathrm{Na_2CO_3}$ tác dụng với dung dịch HCl dư. Tính thể tích khí $\\mathrm{CO_2}$ thu được ở điều kiện chuẩn, theo lít (Na = 23, C = 12, O = 16).',
      answer: 2.479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$\\mathrm{Na_2CO_3} + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{H_2O} + \\mathrm{CO_2}$.',
        '$M_{\\mathrm{Na_2CO_3}} = 106$ g/mol; $1$ mol khí ở điều kiện chuẩn chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{Na_2CO_3}} = \\dfrac{10{,}6}{106} = 0{,}1$ mol $= n_{\\mathrm{CO_2}}$; $V = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây không dùng để điều chế $\\mathrm{CuSO_4}$ được?',
      options: [
        '$\\mathrm{CuO} + \\mathrm{H_2SO_4}$ loãng',
        '$\\mathrm{Cu(OH)_2} + \\mathrm{H_2SO_4}$ loãng',
        '$\\mathrm{Cu} + \\mathrm{H_2SO_4}$ loãng',
      ],
      answer: 2,
      hints: ['Nhớ lại: kim loại nào không tác dụng với acid loãng ở Bài Acid?'],
      solution:
        'Đồng không tác dụng với $\\mathrm{H_2SO_4}$ loãng. $\\mathrm{CuO}$ (oxide base) và $\\mathrm{Cu(OH)_2}$ (base) đều tác dụng với $\\mathrm{H_2SO_4}$ tạo $\\mathrm{CuSO_4}$ và nước.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cặp chất với loại phản ứng điều chế muối.',
      left: [
        '$\\mathrm{KOH} + \\mathrm{HNO_3}$',
        '$\\mathrm{Fe} + \\mathrm{CuCl_2}$',
        '$\\mathrm{SO_2} + \\mathrm{NaOH}$',
        '$\\mathrm{CaCO_3} + \\mathrm{HCl}$',
      ],
      right: ['Acid + muối', 'Muối + kim loại', 'Acid + base', 'Oxide acid + base'],
      pairs: [
        [0, 2],
        [1, 1],
        [2, 3],
        [3, 0],
      ],
      hints: ['Xác định từng chất là acid, base, oxide, muối hay kim loại.'],
      solution:
        '$\\mathrm{KOH} + \\mathrm{HNO_3}$: acid + base; $\\mathrm{Fe} + \\mathrm{CuCl_2}$: muối + kim loại; $\\mathrm{SO_2} + \\mathrm{NaOH}$: oxide acid + base; $\\mathrm{CaCO_3} + \\mathrm{HCl}$: acid + muối.',
    },
  ],
  takeaways: [
    'Muối: thay ion $\\mathrm{H^+}$ của acid bằng ion kim loại hoặc ion ammonium; tên = tên kim loại (hoá trị) + tên gốc acid.',
    'Muối tác dụng với kim loại, acid, base và muối khác.',
    'Phản ứng trao đổi trong dung dịch chỉ xảy ra khi tạo chất kết tủa hoặc chất khí; tra bảng tính tan để dự đoán.',
    'Điều chế muối: acid + base, acid + oxide base, oxide acid + base, acid + kim loại, acid + muối, muối + muối, muối + kim loại, muối + base.',
  ],
};
