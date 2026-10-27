/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Polymer là những chất có phân tử khối rất lớn do nhiều mắt xích liên kết với nhau; các phân tử nhỏ kết hợp tạo nên polymer gọi là monomer. Polymer có mạch không phân nhánh, mạch phân nhánh hoặc mạng không gian; gồm polymer thiên nhiên và polymer tổng hợp. Từ polymer chế tạo chất dẻo, tơ, cao su, vật liệu composite; rác thải polymer khó phân huỷ cần được giảm thiểu, tái sử dụng, tái chế.',
  intro:
    'Túi nilon, ống nước, sợi áo, lốp xe, hạt gạo và sợi tóc trông chẳng giống nhau, nhưng chúng đều được tạo nên từ những phân tử khổng lồ ghép từ hàng nghìn mắt xích nhỏ lặp lại. Những phân tử ấy là polymer. Chúng được tạo thành như thế nào, và vì sao rác thải nhựa lại tồn tại hàng trăm năm?',
  objectives: [
    'Nêu được khái niệm polymer, monomer, mắt xích; viết được công thức của một số polymer đơn giản.',
    'Nêu được các dạng cấu tạo mạch và cách phân loại polymer; tính chất vật lí chung của polymer.',
    'Trình bày được khái niệm, thành phần và ứng dụng của chất dẻo, tơ, cao su, vật liệu composite.',
    'Trình bày được cách sử dụng vật liệu polymer an toàn và các biện pháp giảm thiểu rác thải polymer.',
  ],
  sections: [
    {
      heading: 'Khái niệm polymer',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Polymer',
          text: 'Polymer là những chất có phân tử khối rất lớn, do nhiều đơn vị nhỏ (gọi là mắt xích) liên kết với nhau tạo nên. Các phân tử nhỏ kết hợp với nhau tạo thành polymer gọi là monomer.',
        },
        {
          type: 'p',
          text: 'Ví dụ: nhiều phân tử ethylene (monomer) kết hợp với nhau tạo thành polyethylene (PE); mắt xích của PE là $\\mathrm{{-}CH_2{-}CH_2{-}}$. Phản ứng này gọi là phản ứng trùng hợp.',
        },
        {
          type: 'tex',
          tex: 'n\\mathrm{CH_2{=}CH_2} \\xrightarrow{t^\\circ,\\ p,\\ xt} \\mathrm{({-}CH_2{-}CH_2{-})_n}',
        },
        {
          type: 'p',
          text: 'Số mắt xích $n$ trong phân tử gọi là hệ số polymer hoá. Phân tử khối của polymer bằng $n$ nhân với khối lượng một mắt xích: $M_{\\mathrm{PE}} = 28n$.',
        },
        {
          type: 'table',
          head: ['Polymer', 'Monomer', 'Mắt xích'],
          rows: [
            ['Polyethylene (PE)', '$\\mathrm{CH_2{=}CH_2}$', '$\\mathrm{{-}CH_2{-}CH_2{-}}$'],
            [
              'Polypropylene (PP)',
              '$\\mathrm{CH_2{=}CH{-}CH_3}$',
              '$\\mathrm{{-}CH_2{-}CH(CH_3){-}}$',
            ],
            [
              'Poly(vinyl chloride) (PVC)',
              '$\\mathrm{CH_2{=}CHCl}$',
              '$\\mathrm{{-}CH_2{-}CHCl{-}}$',
            ],
            ['Tinh bột, cellulose', 'glucose', '$\\mathrm{{-}C_6H_{10}O_5{-}}$'],
          ],
          caption: 'Một số polymer và mắt xích của chúng',
        },
      ],
    },
    {
      heading: 'Cấu tạo, phân loại và tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Mạch không phân nhánh: amylose (một thành phần của tinh bột), PE, PVC, cellulose.',
            'Mạch phân nhánh: amylopectin (thành phần còn lại của tinh bột), glycogen.',
            'Mạng không gian: cao su lưu hoá, nhựa bakelite.',
          ],
        },
        {
          type: 'table',
          head: ['Loại', 'Nguồn gốc', 'Ví dụ'],
          rows: [
            [
              'Polymer thiên nhiên',
              'Có sẵn trong tự nhiên',
              'Tinh bột, cellulose, protein (tơ tằm, len), cao su thiên nhiên',
            ],
            [
              'Polymer tổng hợp',
              'Do con người tổng hợp bằng phương pháp hoá học',
              'PE, PP, PVC, tơ nylon, cao su tổng hợp',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tính chất vật lí chung',
          text: 'Hầu hết polymer là chất rắn, không bay hơi, không có nhiệt độ nóng chảy xác định (nóng chảy trong một khoảng nhiệt độ), một số không nóng chảy mà bị phân huỷ khi đun nóng; đa số không tan trong nước, một số tan trong dung môi hữu cơ.',
        },
      ],
    },
    {
      heading: 'Vật liệu polymer',
      blocks: [
        {
          type: 'table',
          head: ['Vật liệu', 'Khái niệm', 'Ví dụ, ứng dụng'],
          rows: [
            [
              'Chất dẻo',
              'Vật liệu polymer có tính dẻo: bị biến dạng khi đun nóng hoặc chịu áp lực và giữ nguyên biến dạng đó. Thành phần gồm polymer, chất độn, chất hoá dẻo, chất màu',
              'PE (túi, màng bọc, chai lọ), PP (hộp, cốc), PVC (ống nước, vỏ dây điện)',
            ],
            [
              'Tơ',
              'Vật liệu polymer mạch không phân nhánh, có thể kéo thành sợi',
              'Tơ thiên nhiên: bông, tơ tằm, len; tơ tổng hợp: nylon, polyester',
            ],
            [
              'Cao su',
              'Vật liệu polymer có tính đàn hồi: biến dạng khi chịu lực và trở lại hình dạng ban đầu khi thôi tác dụng; không thấm nước, khí, cách điện',
              'Cao su thiên nhiên (từ mủ cây cao su), cao su tổng hợp: lốp xe, băng tải, ống dẫn, găng tay',
            ],
            [
              'Vật liệu composite',
              'Vật liệu gồm vật liệu cốt (sợi hoặc hạt, như sợi thuỷ tinh, sợi carbon) giúp chịu lực và vật liệu nền (thường là polymer) gắn kết chúng',
              'Ống dẫn, bồn chứa, vật liệu xây dựng, vỏ xe, vỏ tàu thuyền',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Xếp các đồ vật dưới đây vào đúng nhóm vật liệu.',
        },
        { type: 'widget', name: 'materials' },
      ],
    },
    {
      heading: 'Sử dụng vật liệu polymer và rác thải polymer',
      blocks: [
        {
          type: 'list',
          items: [
            'Chất dẻo bị mềm khi gặp nhiệt độ cao, một số bị phân huỷ tạo chất độc: không đựng thức ăn quá nóng trong đồ nhựa không chịu nhiệt; xem kí hiệu an toàn, kí hiệu tái chế trên sản phẩm.',
            'Đồ dùng bằng tơ cần giặt, phơi, là theo hướng dẫn trên nhãn; đồ cao su nên tránh nơi quá nóng, quá lạnh, ánh nắng mạnh, dầu mỡ và hoá chất.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Rác thải polymer',
          text: 'PE và nhiều polymer khác rất khó phân huỷ sinh học, tồn tại trong môi trường hàng trăm năm, gây ô nhiễm đất, nước, ảnh hưởng đến hệ sinh thái, sự phát triển của động, thực vật và sức khoẻ con người. Đốt rác nhựa còn sinh ra khí độc.',
        },
        {
          type: 'p',
          text: 'Để giảm rác thải nhựa, cần thực hiện theo hướng dẫn của cơ quan quản lí môi trường và áp dụng nguyên tắc 5R, trong đó có: từ chối đồ nhựa dùng một lần, giảm thiểu lượng sử dụng, tái sử dụng, tái chế; đồng thời phân loại rác tại nguồn và ưu tiên vật liệu dễ phân huỷ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Nối monomer thành polymer',
    instruction:
      'Chọn một monomer, rồi bấm “Nối thêm 1 monomer” nhiều lần: liên kết đôi C=C mở ra và các phân tử nối thành mạch các mắt xích giống nhau. Kéo thanh trượt hệ số polymer hoá n để thấy phân tử khối polymer lớn đến mức nào.',
  },
  examples: [
    {
      problem:
        'Một mẫu polyethylene có phân tử khối trung bình $28\\,000$ amu. Tính hệ số polymer hoá $n$.',
      steps: [
        'Mắt xích của PE là $\\mathrm{{-}CH_2{-}CH_2{-}}$, khối lượng $2 \\times 12 + 4 \\times 1 = 28$ amu.',
        '$M_{\\mathrm{PE}} = 28n = 28\\,000$.',
        '$n = \\dfrac{28\\,000}{28} = 1000$.',
      ],
      answer: 'Hệ số polymer hoá $n = 1000$.',
    },
    {
      problem:
        'Trùng hợp $14$ tấn ethylene với hiệu suất $80\\%$. Tính khối lượng polyethylene thu được.',
      steps: [
        'Trong phản ứng trùng hợp, mọi nguyên tử của monomer đều đi vào polymer, nên theo lí thuyết khối lượng PE bằng khối lượng ethylene đã phản ứng: $14$ tấn.',
        'Với hiệu suất $80\\%$: $m_{\\mathrm{PE}} = 14 \\times 80\\% = 11{,}2$ tấn.',
      ],
      answer: 'Thu được $11{,}2$ tấn polyethylene.',
    },
    {
      problem:
        'Một đoạn mạch PVC có phân tử khối $125\\,000$ amu. Đoạn mạch đó có bao nhiêu mắt xích?',
      steps: [
        'Mắt xích $\\mathrm{{-}CH_2{-}CHCl{-}}$ có khối lượng $2 \\times 12 + 3 \\times 1 + 35{,}5 = 62{,}5$ amu.',
        '$n = \\dfrac{125\\,000}{62{,}5} = 2000$.',
      ],
      answer: 'Đoạn mạch có $2000$ mắt xích.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Polymer là',
      options: [
        'những chất có phân tử khối rất lớn do nhiều mắt xích liên kết với nhau tạo nên',
        'những chất có liên kết đôi C=C trong phân tử',
        'hỗn hợp của nhiều chất hữu cơ khác nhau',
        'những chất tan tốt trong nước',
      ],
      answer: 0,
      hints: ['Nghĩ đến PE: rất nhiều mắt xích $\\mathrm{{-}CH_2{-}CH_2{-}}$ lặp lại.'],
      solution:
        'Polymer là những chất có phân tử khối rất lớn, do nhiều mắt xích liên kết với nhau. Liên kết đôi C=C là đặc điểm của monomer như ethylene, không phải của polymer.',
    },
    {
      type: 'text',
      prompt: 'Polyethylene (PE) được tạo thành từ monomer nào?',
      accept: ['ethylene', 'etilen', 'ethene', 'CH2=CH2'],
      hints: ['Tên polymer = “poly” + tên monomer.'],
      solution: 'PE được tạo thành khi trùng hợp ethylene $\\mathrm{CH_2{=}CH_2}$.',
    },
    {
      type: 'number',
      prompt: 'Một loại polyethylene có phân tử khối $420\\,000$ amu. Tính hệ số polymer hoá $n$.',
      answer: 15000,
      hints: ['Mỗi mắt xích $\\mathrm{{-}CH_2{-}CH_2{-}}$ nặng $28$ amu.'],
      solution: '$n = \\dfrac{420\\,000}{28} = 15\\,000$.',
    },
    {
      type: 'number',
      prompt: 'Một mẫu PVC có hệ số polymer hoá $n = 4000$. Tính phân tử khối của PVC, theo amu.',
      answer: 250000,
      unit: 'amu',
      hints: ['Mắt xích $\\mathrm{{-}CH_2{-}CHCl{-}}$ có khối lượng $62{,}5$ amu (Cl = $35{,}5$).'],
      solution: '$M = 62{,}5 \\times 4000 = 250\\,000$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Trùng hợp $5{,}6$ tấn ethylene với hiệu suất $90\\%$. Tính khối lượng polyethylene thu được, theo tấn.',
      answer: 5.04,
      tolerance: 0.001,
      unit: 'tấn',
      hints: [
        'Khối lượng polymer theo lí thuyết bằng khối lượng monomer.',
        'Nhân với hiệu suất $90\\%$.',
      ],
      solution: '$m_{\\mathrm{PE}} = 5{,}6 \\times 90\\% = 5{,}04$ tấn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi polymer với dạng cấu tạo mạch của nó.',
      left: ['Amylose', 'Amylopectin', 'Cao su lưu hoá'],
      right: ['Mạch không phân nhánh', 'Mạch phân nhánh', 'Mạng không gian'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Khi lưu hoá, các mạch cao su được nối với nhau bằng cầu nối sulfur.'],
      solution:
        'Amylose có mạch không phân nhánh, amylopectin có mạch phân nhánh, cao su lưu hoá có cấu tạo mạng không gian.',
    },
    {
      type: 'multi',
      prompt: 'Những polymer nào là polymer thiên nhiên?',
      options: ['Tinh bột', 'Polyethylene', 'Cellulose', 'Tơ tằm', 'PVC'],
      answers: [0, 2, 3],
      hints: ['Polymer thiên nhiên có sẵn trong cơ thể sinh vật.'],
      solution:
        'Tinh bột, cellulose và tơ tằm (protein) là polymer thiên nhiên; PE và PVC là polymer tổng hợp.',
    },
    {
      type: 'choice',
      prompt:
        'Vật liệu polymer có tính đàn hồi, trở lại hình dạng ban đầu khi thôi tác dụng lực, là',
      options: ['cao su', 'chất dẻo', 'tơ', 'vật liệu composite'],
      answer: 0,
      hints: ['Hãy nghĩ đến dây chun.'],
      solution:
        'Cao su có tính đàn hồi. Chất dẻo giữ nguyên biến dạng; tơ là vật liệu kéo được thành sợi; composite gồm vật liệu cốt và vật liệu nền.',
    },
    {
      type: 'multi',
      prompt: 'Những tính chất nào là tính chất vật lí chung của hầu hết polymer?',
      options: [
        'Là chất rắn, không bay hơi',
        'Có nhiệt độ nóng chảy xác định',
        'Không tan trong nước',
        'Là chất khí ở điều kiện thường',
      ],
      answers: [0, 2],
      hints: ['Polymer gồm nhiều phân tử có số mắt xích khác nhau.'],
      solution:
        'Hầu hết polymer là chất rắn, không bay hơi, không tan trong nước và không có nhiệt độ nóng chảy xác định.',
    },
    {
      type: 'multi',
      prompt: 'Những việc làm nào giúp giảm rác thải nhựa?',
      options: [
        'Mang túi vải khi đi chợ',
        'Dùng cốc, ống hút nhựa một lần rồi bỏ',
        'Tái sử dụng chai, hộp nhựa còn tốt',
        'Phân loại rác nhựa để tái chế',
        'Đốt túi nilon ngoài trời',
      ],
      answers: [0, 2, 3],
      hints: ['Nhớ các bước: từ chối, giảm thiểu, tái sử dụng, tái chế.'],
      solution:
        'Mang túi vải, tái sử dụng và phân loại để tái chế giúp giảm rác thải nhựa. Đồ nhựa dùng một lần làm tăng rác thải; đốt nilon sinh khí độc.',
    },
  ],
  takeaways: [
    'Polymer: phân tử khối rất lớn, do nhiều mắt xích liên kết với nhau; monomer là phân tử nhỏ tạo nên polymer.',
    'Ví dụ: $n\\mathrm{CH_2{=}CH_2} \\rightarrow \\mathrm{({-}CH_2{-}CH_2{-})_n}$; phân tử khối $= n \\times$ khối lượng mắt xích.',
    'Mạch không phân nhánh, phân nhánh hoặc mạng không gian; polymer thiên nhiên và polymer tổng hợp.',
    'Vật liệu polymer: chất dẻo (tính dẻo), tơ (kéo thành sợi), cao su (đàn hồi), composite (vật liệu cốt + vật liệu nền).',
    'Rác thải polymer khó phân huỷ: cần từ chối, giảm thiểu, tái sử dụng, tái chế (nguyên tắc 5R).',
  ],
};
