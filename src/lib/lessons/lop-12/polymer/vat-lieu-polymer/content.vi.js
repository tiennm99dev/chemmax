/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vật liệu polymer: chất dẻo và thành phần của chất dẻo, các chất dẻo thông dụng và ký hiệu tái chế, vật liệu composite, tơ thiên nhiên, tơ tổng hợp và tơ bán tổng hợp, cao su thiên nhiên, lưu hoá cao su và cao su tổng hợp, keo dán; ô nhiễm rác thải nhựa và cách hạn chế.',
  intro:
    'Lật đáy một chai nước, một hộp sữa chua hay một chiếc hộp xốp, em sẽ thấy một hình tam giác bằng ba mũi tên với một con số bên trong. Con số ấy cho biết sản phẩm làm từ loại chất dẻo nào, để người ta phân loại và tái chế. Bài học giới thiệu các vật liệu polymer quen thuộc: chất dẻo, vật liệu composite, tơ, cao su và keo dán.',
  objectives: [
    'Nêu được khái niệm và thành phần của chất dẻo; viết được phương trình tổng hợp một số chất dẻo thông dụng; nhận ra ký hiệu tái chế của chúng.',
    'Nêu được khái niệm và thành phần của vật liệu composite.',
    'Nêu được khái niệm, phân loại tơ; viết được phương trình tổng hợp tơ nylon-6,6, tơ capron, tơ nitron.',
    'Nêu được khái niệm cao su, cấu tạo cao su thiên nhiên, sự lưu hoá cao su và một số loại cao su tổng hợp.',
    'Nêu được khái niệm và một số loại keo dán; trình bày được tác hại của rác thải nhựa và biện pháp hạn chế.',
  ],
  sections: [
    {
      heading: 'Chất dẻo',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất dẻo',
          text: 'Chất dẻo là những vật liệu polymer có tính dẻo. Tính dẻo là tính bị biến dạng khi chịu tác dụng của nhiệt, của áp lực bên ngoài và vẫn giữ nguyên được sự biến dạng đó khi thôi tác dụng.',
        },
        {
          type: 'p',
          text: 'Thành phần chính của chất dẻo là polymer. Ngoài ra còn có các chất phụ gia như chất hoá dẻo (tăng độ dẻo), chất độn (tăng độ bền, giảm giá thành), chất màu, chất ổn định.',
        },
        {
          type: 'table',
          caption: 'Một số chất dẻo thông dụng',
          head: ['Chất dẻo', 'Monomer', 'Ứng dụng'],
          rows: [
            [
              'Polyethylene (PE)',
              '$\\mathrm{CH_2{=}CH_2}$',
              'màng mỏng, túi đựng, chai lọ, vật liệu cách điện',
            ],
            ['Polypropylene (PP)', '$\\mathrm{CH_2{=}CH{-}CH_3}$', 'hộp đựng thực phẩm, chai lọ'],
            [
              'Poly(vinyl chloride) (PVC)',
              '$\\mathrm{CH_2{=}CHCl}$',
              'ống dẫn nước, vỏ dây điện, áo mưa, da giả',
            ],
            ['Polystyrene (PS)', '$\\mathrm{CH_2{=}CH{-}C_6H_5}$', 'hộp xốp, cốc dùng một lần'],
            [
              'Poly(methyl methacrylate) (PMMA)',
              '$\\mathrm{CH_2{=}C(CH_3){-}COOCH_3}$',
              'thuỷ tinh hữu cơ (plexiglas): kính máy bay, kính ô tô, răng giả',
            ],
            [
              'Poly(phenol formaldehyde) (PPF)',
              'phenol và formaldehyde',
              'vỏ máy, đồ điện, bột ép, sơn, keo',
            ],
          ],
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}C(CH_3){-}COOCH_3} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} \\mathrm{({-}CH_2{-}C(CH_3)(COOCH_3){-})_n}',
        },
        {
          type: 'p',
          text: 'Các chất dẻo nhiệt dẻo dùng phổ biến được in ký hiệu tái chế: một tam giác ba mũi tên có số bên trong và tên viết tắt bên dưới. Ký hiệu giúp phân loại rác nhựa để tái chế đúng loại.',
        },
        {
          type: 'table',
          caption: 'Ký hiệu tái chế của sáu loại chất dẻo thông dụng',
          head: ['Số', 'Viết tắt', 'Chất dẻo'],
          rows: [
            ['1', 'PET', 'poly(ethylene terephthalate)'],
            ['2', 'HDPE', 'polyethylene tỉ trọng cao'],
            ['3', 'PVC', 'poly(vinyl chloride)'],
            ['4', 'LDPE', 'polyethylene tỉ trọng thấp'],
            ['5', 'PP', 'polypropylene'],
            ['6', 'PS', 'polystyrene'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Rác thải nhựa',
          text: 'Chất dẻo rất khó phân huỷ trong tự nhiên. Rác thải nhựa xử lí không đúng cách gây ô nhiễm đất, nước, không khí, ảnh hưởng đến sức khoẻ con người và sinh vật. Cách hạn chế: phân loại rác tại nguồn, tái sử dụng và tái chế, hạn chế túi nylon và đồ nhựa dùng một lần, dùng vật liệu dễ phân huỷ sinh học.',
        },
      ],
    },
    {
      heading: 'Vật liệu composite',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vật liệu composite',
          text: 'Vật liệu composite là vật liệu tổ hợp từ hai hay nhiều vật liệu khác nhau, tạo nên vật liệu mới có các tính chất vượt trội so với các vật liệu thành phần.',
        },
        {
          type: 'list',
          items: [
            'Vật liệu cốt (dạng sợi như sợi thuỷ tinh, sợi carbon, hoặc dạng hạt như bột gỗ, bột đá) bảo đảm cho composite có các đặc tính cơ học cần thiết.',
            'Vật liệu nền (thường là polymer) liên kết các vật liệu cốt thành một khối thống nhất.',
            'Composite cốt sợi làm thân, vỏ máy bay, tàu thuyền, khung xe đạp, thân xe đua; composite cốt hạt làm gỗ nhựa, bê tông.',
          ],
        },
      ],
    },
    {
      heading: 'Tơ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tơ',
          text: 'Tơ là những vật liệu polymer hình sợi dài và mảnh, có độ bền nhất định.',
        },
        {
          type: 'table',
          caption: 'Phân loại tơ',
          head: ['Loại tơ', 'Nguồn gốc', 'Ví dụ'],
          rows: [
            [
              'Tơ tự nhiên',
              'Có sẵn trong tự nhiên',
              'sợi bông (cellulose), len và tơ tằm (protein)',
            ],
            ['Tơ tổng hợp', 'Chế tạo từ polymer tổng hợp', 'nylon-6,6, capron, nitron'],
            [
              'Tơ bán tổng hợp',
              'Chế biến hoá học từ polymer thiên nhiên',
              'tơ visco, tơ cellulose acetate',
            ],
          ],
        },
        { type: 'widget', name: 'loai-to' },
        {
          type: 'list',
          items: [
            'Tơ nylon-6,6 (một loại polyamide) tổng hợp bằng phản ứng trùng ngưng hexamethylenediamine với adipic acid; dai, mềm, ít thấm nước, dùng dệt vải, làm dây dù, lưới đánh cá.',
            'Tơ capron (nylon-6) tổng hợp bằng phản ứng trùng hợp mở vòng caprolactam.',
            'Tơ nitron (olon) tổng hợp bằng phản ứng trùng hợp acrylonitrile; dai, bền nhiệt, giữ nhiệt tốt, dùng dệt vải may quần áo ấm, bện thành sợi len đan áo.',
          ],
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}CH{-}CN} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} \\mathrm{({-}CH_2{-}CH(CN){-})_n}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhóm amide trong tơ polyamide',
          text: 'Tơ nylon-6,6 và tơ capron chứa nhóm amide $\\mathrm{{-}CO{-}NH{-}}$ nên kém bền trong môi trường acid và base: không nên giặt bằng nước quá nóng hay xà phòng có tính kiềm cao, không là (ủi) quá nóng.',
        },
      ],
    },
    {
      heading: 'Cao su',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cao su',
          text: 'Cao su là vật liệu polymer có tính đàn hồi: bị biến dạng khi chịu lực tác dụng và trở lại dạng ban đầu khi lực đó thôi tác dụng.',
        },
        {
          type: 'p',
          text: 'Cao su thiên nhiên lấy từ mủ cây cao su, là polymer của isoprene với các mắt xích ở dạng cis: $\\mathrm{({-}CH_2{-}C(CH_3){=}CH{-}CH_2{-})_n}$. Cao su thiên nhiên đàn hồi, không dẫn điện, không thấm khí và nước, không tan trong nước, ethanol nhưng tan trong xăng, benzene.',
        },
        {
          type: 'p',
          text: 'Lưu hoá cao su: đun nóng cao su với lưu huỳnh, các mạch được nối với nhau bằng cầu disulfide $\\mathrm{{-}S{-}S{-}}$. Cao su lưu hoá đàn hồi hơn, chịu nhiệt, lâu mòn và khó tan trong dung môi hơn cao su chưa lưu hoá.',
        },
        {
          type: 'table',
          caption: 'Một số loại cao su tổng hợp',
          head: ['Cao su', 'Tổng hợp từ', 'Đặc điểm, ứng dụng'],
          rows: [
            [
              'Cao su buna',
              'trùng hợp buta-1,3-diene (xúc tác Na)',
              'đàn hồi và độ bền kém cao su thiên nhiên',
            ],
            [
              'Cao su isoprene',
              'trùng hợp isoprene',
              'đàn hồi tốt, bền, chống mài mòn, chịu nhiệt tốt',
            ],
            [
              'Cao su buna-S',
              'đồng trùng hợp buta-1,3-diene và styrene',
              'đàn hồi cao: lốp xe, đế giày, vật liệu chống thấm',
            ],
            [
              'Cao su buna-N',
              'đồng trùng hợp buta-1,3-diene và acrylonitrile',
              'chống dầu tốt: găng tay, ống dẫn, gioăng',
            ],
            [
              'Cao su chloroprene',
              'trùng hợp chloroprene $\\mathrm{CH_2{=}CCl{-}CH{=}CH_2}$',
              'đàn hồi, bền với dầu mỡ: bọc ống thuỷ lực, đệm làm kín',
            ],
          ],
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}CH{-}CH{=}CH_2} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{Na}} \\mathrm{({-}CH_2{-}CH{=}CH{-}CH_2{-})_n}',
        },
      ],
    },
    {
      heading: 'Keo dán',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Keo dán',
          text: 'Keo dán là vật liệu có khả năng kết dính bề mặt của hai vật liệu rắn với nhau mà không làm biến đổi bản chất của các vật liệu được kết dính. Keo tạo được màng rất mỏng, bền và bám chắc vào hai bề mặt.',
        },
        {
          type: 'list',
          items: [
            'Nhựa vá săm: dung dịch keo của cao su trong dung môi hữu cơ như toluene, xylene; dùng vá chỗ thủng của săm xe.',
            'Keo epoxy (keo hai thành phần): thành phần chính là hợp chất có hai nhóm epoxy ở hai đầu; kết dính rất cao, chịu nhiệt, chịu nước và dung môi, dán kim loại, gỗ, thuỷ tinh, chất dẻo.',
            'Keo poly(urea-formaldehyde): điều chế từ urea và formaldehyde; bền với dầu mỡ và các dung môi thông dụng, dùng dán gỗ, sản xuất ván ép.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Phân loại rác nhựa theo ký hiệu tái chế',
    instruction:
      'Mỗi thẻ là một ký hiệu tái chế hoặc một monomer. Chọn thẻ rồi đặt vào thùng của đúng chất dẻo. Chú ý: HDPE và LDPE đều là polyethylene.',
  },
  examples: [
    {
      problem:
        'Cho các tơ: sợi bông, tơ tằm, tơ visco, nylon-6,6, tơ nitron, tơ cellulose acetate. Phân loại các tơ trên.',
      steps: [
        'Tơ tự nhiên có sẵn trong tự nhiên: sợi bông (cellulose), tơ tằm (protein).',
        'Tơ bán tổng hợp chế biến hoá học từ cellulose: tơ visco, tơ cellulose acetate.',
        'Tơ tổng hợp chế tạo từ polymer tổng hợp: nylon-6,6 (trùng ngưng), tơ nitron (trùng hợp).',
      ],
      answer:
        'Tự nhiên: sợi bông, tơ tằm; bán tổng hợp: visco, cellulose acetate; tổng hợp: nylon-6,6, nitron.',
    },
    {
      problem:
        'Một loại tơ nylon-6,6 có phân tử khối là $27\\,120$. Tính số mắt xích trong phân tử.',
      steps: [
        'Mắt xích $\\mathrm{{-}NH{-}[CH_2]_6{-}NH{-}CO{-}[CH_2]_4{-}CO{-}}$ có công thức $\\mathrm{C_{12}H_{22}N_2O_2}$.',
        '$M_{\\text{mắt xích}} = 12 \\cdot 12 + 22 + 2 \\cdot 14 + 2 \\cdot 16 = 226$.',
        '$n = \\dfrac{27\\,120}{226} = 120$.',
      ],
      answer: 'Phân tử có $120$ mắt xích.',
    },
    {
      problem:
        'Trùng hợp $10{,}6$ tấn acrylonitrile với hiệu suất $90\\%$. Tính khối lượng tơ nitron thu được.',
      steps: [
        'Phản ứng trùng hợp không tách ra phân tử nhỏ, nên khối lượng polymer bằng khối lượng monomer đã phản ứng.',
        '$m = 10{,}6 \\cdot 90\\% = 9{,}54$ tấn.',
      ],
      answer: 'Thu được $9{,}54$ tấn tơ nitron.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tơ nào sau đây thuộc loại tơ bán tổng hợp?',
      options: ['tơ visco', 'tơ nylon-6,6', 'tơ tằm', 'tơ nitron'],
      answer: 0,
      hints: ['Tơ bán tổng hợp được chế biến hoá học từ polymer thiên nhiên.'],
      solution:
        'Tơ visco chế biến từ cellulose nên là tơ bán tổng hợp. Nylon-6,6 và nitron là tơ tổng hợp; tơ tằm là tơ tự nhiên.',
    },
    {
      type: 'choice',
      prompt: 'Cao su buna-S được tổng hợp bằng phản ứng đồng trùng hợp',
      options: [
        'buta-1,3-diene và styrene',
        'buta-1,3-diene và acrylonitrile',
        'isoprene và styrene',
        'buta-1,3-diene và lưu huỳnh',
      ],
      answer: 0,
      hints: ['Chữ S trong tên gọi là chữ đầu của monomer thứ hai.'],
      solution:
        'Buna-S từ buta-1,3-diene và styrene; buna-N từ buta-1,3-diene và acrylonitrile. Lưu huỳnh dùng để lưu hoá cao su, không phải monomer.',
    },
    {
      type: 'choice',
      prompt: 'Ống nhựa in ký hiệu tái chế số 3 được làm từ chất dẻo nào?',
      options: ['poly(vinyl chloride)', 'polyethylene', 'polypropylene', 'polystyrene'],
      answer: 0,
      hints: ['Thứ tự ký hiệu: 1 PET, 2 HDPE, 3 ..., 4 LDPE, 5 PP, 6 PS.'],
      solution:
        'Ký hiệu số 3 là PVC, poly(vinyl chloride), chất dẻo dùng làm ống dẫn nước. Polyethylene mang số 2 (HDPE) hoặc 4 (LDPE), polypropylene số 5, polystyrene số 6.',
    },
    {
      type: 'multi',
      prompt: 'Những tơ nào là tơ tổng hợp?',
      options: ['nylon-6,6', 'capron', 'nitron', 'tơ visco', 'sợi bông', 'tơ tằm'],
      answers: [0, 1, 2],
      hints: ['Tơ tổng hợp chế tạo hoàn toàn từ monomer tổng hợp.'],
      solution:
        'Nylon-6,6, capron và nitron là tơ tổng hợp. Tơ visco là tơ bán tổng hợp; sợi bông và tơ tằm là tơ tự nhiên.',
    },
    {
      type: 'number',
      prompt:
        'Một loại tơ nylon-6,6 có phân tử khối là $33\\,900$. Tính số mắt xích trong phân tử.',
      answer: 150,
      hints: ['Mắt xích của nylon-6,6 là $\\mathrm{C_{12}H_{22}N_2O_2}$.'],
      solution: '$M_{\\text{mắt xích}} = 226$; $n = \\dfrac{33\\,900}{226} = 150$.',
    },
    {
      type: 'number',
      prompt:
        'Trùng hợp $12{,}5$ tấn vinyl chloride với hiệu suất $80\\%$. Tính khối lượng PVC thu được.',
      answer: 10,
      tolerance: 0.001,
      unit: 'tấn',
      hints: ['Phản ứng trùng hợp không tách ra phân tử nhỏ nào.'],
      solution:
        'Khối lượng PVC bằng khối lượng vinyl chloride đã phản ứng: $12{,}5 \\cdot 80\\% = 10$ tấn.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi vật liệu với loại vật liệu polymer của nó.',
      left: ['keo epoxy', 'thuỷ tinh hữu cơ PMMA', 'cao su chloroprene', 'nhựa cốt sợi carbon'],
      right: ['keo dán', 'chất dẻo', 'cao su', 'vật liệu composite', 'tơ'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Composite gồm vật liệu nền và vật liệu cốt.'],
      solution:
        'Keo epoxy là keo dán; PMMA là chất dẻo; cao su chloroprene là cao su tổng hợp; nhựa cốt sợi carbon là vật liệu composite (nền polymer, cốt sợi carbon).',
    },
    {
      type: 'choice',
      prompt: 'Lưu hoá cao su làm cao su',
      options: [
        'đàn hồi hơn, chịu nhiệt, lâu mòn và khó tan hơn',
        'mềm hơn và dễ tan trong xăng hơn',
        'chuyển từ mạng không gian thành mạch thẳng',
        'mất hoàn toàn tính đàn hồi',
      ],
      answer: 0,
      hints: ['Cầu disulfide nối các mạch cao su thành mạng không gian.'],
      solution:
        'Các cầu $\\mathrm{{-}S{-}S{-}}$ nối các mạch thành mạng không gian, nên cao su lưu hoá đàn hồi hơn, chịu nhiệt, lâu mòn và khó tan trong dung môi hơn.',
    },
    {
      type: 'text',
      prompt: 'Cao su thiên nhiên là polymer của monomer nào? Viết tên monomer.',
      accept: ['isoprene', '2-methylbuta-1,3-diene'],
      hints: ['Mắt xích là $\\mathrm{{-}CH_2{-}C(CH_3){=}CH{-}CH_2{-}}$.'],
      solution:
        'Cao su thiên nhiên là polyisoprene, polymer của isoprene $\\mathrm{CH_2{=}C(CH_3){-}CH{=}CH_2}$ (2-methylbuta-1,3-diene).',
    },
  ],
  takeaways: [
    'Chất dẻo là vật liệu polymer có tính dẻo, gồm polymer và chất phụ gia; PE, PP, PVC, PS, PMMA tổng hợp bằng trùng hợp.',
    'Ký hiệu tái chế: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS; phân loại rác nhựa giúp tái chế và giảm ô nhiễm.',
    'Composite gồm vật liệu nền (polymer) liên kết vật liệu cốt (sợi, hạt) thành vật liệu có tính chất vượt trội.',
    'Tơ gồm tơ tự nhiên, tơ tổng hợp (nylon-6,6, capron, nitron) và tơ bán tổng hợp (visco, cellulose acetate).',
    'Cao su có tính đàn hồi; cao su thiên nhiên là polyisoprene; lưu hoá tạo cầu $\\mathrm{{-}S{-}S{-}}$; cao su tổng hợp: buna, isoprene, buna-S, buna-N, chloroprene.',
    'Keo dán kết dính hai vật liệu rắn mà không làm biến đổi chúng: nhựa vá săm, keo epoxy, keo poly(urea-formaldehyde).',
  ],
};
