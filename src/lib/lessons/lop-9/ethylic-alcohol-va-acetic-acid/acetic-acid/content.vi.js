/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Acetic acid có công thức phân tử C2H4O2, công thức cấu tạo CH3–COOH; nhóm –COOH gây nên tính chất đặc trưng. Acetic acid là acid yếu, có đủ tính chất của một acid: làm quỳ tím hoá đỏ, tác dụng với kim loại, oxide base, base và muối carbonate. Acetic acid tác dụng với ethylic alcohol (xúc tác H2SO4 đặc, đun nóng) tạo ester ethyl acetate và nước. Giấm ăn là dung dịch acetic acid 2–5%.',
  intro:
    'Giấm ăn có vị chua, dùng để muối dưa, làm nộm và tẩy cặn trong ấm đun nước. Vị chua và khả năng tẩy cặn ấy đến từ acetic acid. Phân tử acetic acid khác ethylic alcohol ở điểm nào, và vì sao hai chất này gặp nhau lại tạo ra một chất có mùi thơm?',
  objectives: [
    'Viết được công thức phân tử, công thức cấu tạo của acetic acid và chỉ ra nhóm –COOH.',
    'Nêu được tính chất vật lí và ứng dụng của acetic acid; biết giấm ăn là dung dịch acetic acid loãng.',
    'Trình bày được tính chất acid của acetic acid; viết được phương trình hoá học với kim loại, oxide base, base, muối carbonate.',
    'Trình bày được phản ứng ester hoá; tính được khối lượng ester theo hiệu suất.',
  ],
  sections: [
    {
      heading: 'Công thức và cấu tạo',
      blocks: [
        {
          type: 'p',
          text: 'Acetic acid có công thức phân tử $\\mathrm{C_2H_4O_2}$, khối lượng phân tử $60$ amu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}\\overset{\\overset{O}{\\|}}{C}{-}O{-}H} \\quad \\text{hay} \\quad \\mathrm{CH_3COOH}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhóm –COOH',
          text: 'Trong phân tử acetic acid, nhóm $\\mathrm{{-}CH_3}$ liên kết với nhóm $\\mathrm{{-}COOH}$: nguyên tử C liên kết đôi với một nguyên tử O và liên kết đơn với nhóm $\\mathrm{{-}OH}$. Nhóm $\\mathrm{{-}COOH}$ làm cho phân tử có tính acid.',
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Acetic acid là chất lỏng, không màu, vị chua, có mùi đặc trưng.',
            'Sôi ở $118\\ ^\\circ\\mathrm{C}$; khối lượng riêng khoảng $1{,}045$ g/mL.',
            'Tan vô hạn trong nước.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giấm ăn',
          text: 'Giấm ăn là dung dịch acetic acid có nồng độ khoảng $2\\%$ đến $5\\%$.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Acetic acid là một acid yếu nhưng có đầy đủ tính chất chung của acid.',
        },
        {
          type: 'table',
          head: ['Tác dụng với', 'Phương trình hoá học'],
          rows: [
            ['Quỳ tím', 'Quỳ tím chuyển sang màu đỏ'],
            [
              'Kim loại (Mg, Zn, ...)',
              '$2\\mathrm{CH_3COOH} + \\mathrm{Mg} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Mg} + \\mathrm{H_2}\\uparrow$',
            ],
            [
              'Oxide base',
              '$2\\mathrm{CH_3COOH} + \\mathrm{CuO} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Cu} + \\mathrm{H_2O}$',
            ],
            [
              'Base',
              '$\\mathrm{CH_3COOH} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{H_2O}$',
            ],
            [
              'Muối carbonate',
              '$2\\mathrm{CH_3COOH} + \\mathrm{CaCO_3} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Ca} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}$',
            ],
          ],
          caption: 'Tính chất acid của acetic acid',
        },
        {
          type: 'p',
          text: 'Muối của acetic acid gọi là muối acetate, ví dụ sodium acetate $\\mathrm{CH_3COONa}$. Chọn từng chất trong thí nghiệm dưới đây và nhỏ acetic acid vào để quan sát.',
        },
        { type: 'widget', name: 'acid' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng ester hoá',
          text: 'Đun nóng hỗn hợp acetic acid và ethylic alcohol có sulfuric acid đặc làm xúc tác, thu được ethyl acetate (một ester) và nước. Nhóm $\\mathrm{{-}OH}$ của acid kết hợp với nguyên tử H của nhóm $\\mathrm{{-}OH}$ trong alcohol tạo thành nước.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\xrightleftharpoons{\\mathrm{H_2SO_4},\\ t^\\circ} \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}',
        },
        {
          type: 'list',
          items: [
            'Phản ứng giữa acid và alcohol tạo ester và nước gọi là phản ứng ester hoá.',
            'Ethyl acetate là chất lỏng, mùi thơm, ít tan trong nước, dùng làm dung môi.',
            'Phản ứng ester hoá là phản ứng thuận nghịch (kí hiệu $\\rightleftharpoons$), nên hiệu suất luôn nhỏ hơn $100\\%$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng cháy',
          text: 'Acetic acid cháy tạo carbon dioxide và nước: $\\mathrm{CH_3COOH} + 2\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO_2} + 2\\mathrm{H_2O}$.',
        },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'list',
          items: [
            'Pha giấm ăn dùng trong chế biến thực phẩm.',
            'Nguyên liệu sản xuất dược phẩm, phẩm nhuộm, tơ nhân tạo, chất dẻo, thuốc diệt côn trùng.',
            'Điều chế ester làm dung môi, hương liệu.',
          ],
        },
        {
          type: 'p',
          text: 'Giấm ăn được sản xuất bằng phương pháp lên men giấm: cho dung dịch ethylic alcohol loãng tiếp xúc với không khí, có men giấm (enzyme) xúc tác ở nhiệt độ thích hợp.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_5OH} + \\mathrm{O_2} \\xrightarrow{\\text{enzyme}} \\mathrm{CH_3COOH} + \\mathrm{H_2O}',
        },
      ],
    },
  ],
  explore: {
    title: 'Ghép ester',
    instruction:
      'Chọn một chỗ cắt (✂) trên phân tử acetic acid và một chỗ cắt trên phân tử ethylic alcohol, rồi bấm “Ghép”. Phần tách ra phải tạo thành nước; tìm cách cắt đúng như phản ứng ester hoá thật. Sau đó kéo các thanh trượt để tính khối lượng ethyl acetate theo lượng chất và hiệu suất.',
  },
  examples: [
    {
      problem:
        'Cho $2{,}4$ g magnesium tác dụng với dung dịch acetic acid dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn và khối lượng acetic acid đã phản ứng (Mg = 24, C = 12, H = 1, O = 16).',
      steps: [
        '$n_{\\mathrm{Mg}} = \\dfrac{2{,}4}{24} = 0{,}1$ mol.',
        '$2\\mathrm{CH_3COOH} + \\mathrm{Mg} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Mg} + \\mathrm{H_2}$: $n_{\\mathrm{H_2}} = n_{\\mathrm{Mg}} = 0{,}1$ mol; $n_{\\mathrm{CH_3COOH}} = 2 n_{\\mathrm{Mg}} = 0{,}2$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
        '$m_{\\mathrm{CH_3COOH}} = 0{,}2 \\times 60 = 12$ g.',
      ],
      answer: 'Thu được $2{,}479$ L khí hydrogen; $12$ g acetic acid đã phản ứng.',
    },
    {
      problem:
        'Đun nóng $12$ g acetic acid với $13{,}8$ g ethylic alcohol (có $\\mathrm{H_2SO_4}$ đặc làm xúc tác). Hiệu suất phản ứng ester hoá là $50\\%$. Tính khối lượng ethyl acetate thu được.',
      steps: [
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{12}{60} = 0{,}2$ mol; $n_{\\mathrm{C_2H_5OH}} = \\dfrac{13{,}8}{46} = 0{,}3$ mol.',
        'Hai chất phản ứng theo tỉ lệ mol $1 : 1$, nên acetic acid hết trước; tính theo acetic acid: theo lí thuyết thu được $0{,}2$ mol ester.',
        'Với hiệu suất $50\\%$: $n_{\\mathrm{CH_3COOC_2H_5}} = 0{,}2 \\times 50\\% = 0{,}1$ mol.',
        '$m = 0{,}1 \\times 88 = 8{,}8$ g.',
      ],
      answer: 'Thu được $8{,}8$ g ethyl acetate.',
    },
    {
      problem:
        'Để trung hoà $10$ mL giấm ăn cần vừa đủ $15$ mL dung dịch NaOH $0{,}5$ M. Tính nồng độ mol của acetic acid trong giấm.',
      steps: [
        '$n_{\\mathrm{NaOH}} = 0{,}015 \\times 0{,}5 = 0{,}0075$ mol.',
        '$\\mathrm{CH_3COOH} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{H_2O}$: $n_{\\mathrm{CH_3COOH}} = n_{\\mathrm{NaOH}} = 0{,}0075$ mol.',
        '$C_M = \\dfrac{0{,}0075}{0{,}01} = 0{,}75$ M.',
      ],
      answer: 'Nồng độ acetic acid trong giấm là $0{,}75$ M.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhóm nguyên tử làm cho acetic acid có tính acid là',
      options: [
        '$\\mathrm{{-}CH_3}$',
        '$\\mathrm{{-}OH}$ của alcohol',
        '$\\mathrm{{-}COOH}$',
        '$\\mathrm{C{=}C}$',
      ],
      answer: 2,
      hints: ['Ethylic alcohol cũng có nhóm $\\mathrm{{-}OH}$ nhưng không làm quỳ tím hoá đỏ.'],
      solution:
        'Công thức cấu tạo $\\mathrm{CH_3{-}COOH}$: nhóm $\\mathrm{{-}COOH}$ gây nên tính acid của acetic acid.',
    },
    {
      type: 'choice',
      prompt: 'Giấm ăn là dung dịch acetic acid có nồng độ khoảng',
      options: ['$0{,}1\\%$ đến $0{,}5\\%$', '$2\\%$ đến $5\\%$', '$20\\%$ đến $50\\%$', '$70\\%$'],
      answer: 1,
      hints: ['Giấm ăn chua nhưng vẫn dùng trực tiếp trong thức ăn được.'],
      solution: 'Giấm ăn là dung dịch acetic acid $2\\%$ đến $5\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Acetic acid tác dụng được với những chất nào sau đây?',
      options: [
        '$\\mathrm{Mg}$',
        '$\\mathrm{Cu}$',
        '$\\mathrm{NaOH}$',
        '$\\mathrm{CaCO_3}$',
        '$\\mathrm{NaCl}$',
      ],
      answers: [0, 2, 3],
      hints: [
        'Acid tác dụng với kim loại đứng trước hydrogen, với base và với muối carbonate.',
        'Copper đứng sau hydrogen; muối NaCl không tạo được khí hay chất kết tủa với acetic acid.',
      ],
      solution:
        'Mg (kim loại đứng trước H) tạo khí $\\mathrm{H_2}$; NaOH (base) bị trung hoà; $\\mathrm{CaCO_3}$ tạo khí $\\mathrm{CO_2}$. Cu và NaCl không phản ứng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất với hiện tượng khi cho acetic acid vào.',
      left: ['Quỳ tím', 'Mảnh magnesium', 'Đá vôi ($\\mathrm{CaCO_3}$)', 'Bột copper(II) oxide'],
      right: [
        'Chuyển sang màu đỏ',
        'Tan dần, có khí hydrogen thoát ra',
        'Tan dần, sủi bọt khí carbon dioxide',
        'Chất rắn đen tan, dung dịch có màu xanh lam',
        'Không có hiện tượng gì',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Khí sinh ra từ kim loại là $\\mathrm{H_2}$, từ muối carbonate là $\\mathrm{CO_2}$.'],
      solution:
        'Quỳ tím hoá đỏ; Mg tạo $\\mathrm{H_2}$; $\\mathrm{CaCO_3}$ tạo $\\mathrm{CO_2}$; CuO tan tạo $(\\mathrm{CH_3COO})_2\\mathrm{Cu}$ có màu xanh lam.',
    },
    {
      type: 'number',
      prompt: 'Cần bao nhiêu mililít dung dịch NaOH $1$ M để trung hoà vừa đủ $12$ g acetic acid?',
      answer: 200,
      unit: 'mL',
      hints: [
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{12}{60}$ mol.',
        'Tỉ lệ mol acetic acid : NaOH là $1 : 1$; $V = \\dfrac{n}{C_M}$.',
      ],
      solution:
        '$n_{\\mathrm{NaOH}} = n_{\\mathrm{CH_3COOH}} = 0{,}2$ mol; $V = \\dfrac{0{,}2}{1} = 0{,}2$ L $= 200$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Cho $6$ g acetic acid tác dụng hết với magnesium dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn, theo lít.',
      answer: 1.2395,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{6}{60}$ mol.',
        'Hai phân tử acetic acid cho một phân tử $\\mathrm{H_2}$.',
      ],
      solution:
        '$n_{\\mathrm{CH_3COOH}} = 0{,}1$ mol; $n_{\\mathrm{H_2}} = 0{,}05$ mol; $V = 0{,}05 \\times 24{,}79 = 1{,}2395$ L.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng đá vôi ($\\mathrm{CaCO_3}$) tác dụng vừa đủ với $120$ g giấm ăn chứa $5\\%$ acetic acid (Ca = 40).',
      answer: 5,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Khối lượng acetic acid $= 120 \\times 5\\%$.',
        '$2\\mathrm{CH_3COOH} + \\mathrm{CaCO_3} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Ca} + \\mathrm{CO_2} + \\mathrm{H_2O}$; $M_{\\mathrm{CaCO_3}} = 100$ g/mol.',
      ],
      solution:
        '$m_{\\mathrm{CH_3COOH}} = 6$ g, $n = 0{,}1$ mol; $n_{\\mathrm{CaCO_3}} = 0{,}05$ mol; $m = 0{,}05 \\times 100 = 5$ g.',
    },
    {
      type: 'text',
      prompt:
        'Gọi tên ester $\\mathrm{CH_3COOC_2H_5}$ tạo thành khi đun acetic acid với ethylic alcohol.',
      accept: ['ethyl acetate', 'etyl axetat', 'etyl acetat', 'ethylacetate', 'ethyl axetat'],
      hints: ['Tên ester = tên gốc của alcohol + tên gốc của acid (đuôi “ate”).'],
      solution:
        'Gốc $\\mathrm{C_2H_5}$ (ethyl) và gốc acid $\\mathrm{CH_3COO}$ (acetate): ethyl acetate.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng ester hoá giữa acetic acid và ethylic alcohol, phân tử nước được tạo thành từ',
      options: [
        'nhóm $\\mathrm{{-}OH}$ của acid và nguyên tử H của nhóm $\\mathrm{{-}OH}$ trong alcohol',
        'nguyên tử H của acid và nhóm $\\mathrm{{-}OH}$ của alcohol',
        'hai nguyên tử H của nhóm $\\mathrm{{-}CH_3}$',
        'oxygen trong không khí',
      ],
      answer: 0,
      hints: ['Acid tách nhóm $\\mathrm{{-}OH}$ khỏi nhóm $\\mathrm{{-}COOH}$.'],
      solution:
        'Nhóm $\\mathrm{{-}OH}$ của acid kết hợp với nguyên tử H của nhóm $\\mathrm{{-}OH}$ trong alcohol tạo nước; phần còn lại tạo $\\mathrm{CH_3COOC_2H_5}$.',
    },
    {
      type: 'number',
      prompt:
        'Đun $6$ g acetic acid với $4{,}6$ g ethylic alcohol (xúc tác $\\mathrm{H_2SO_4}$ đặc). Hiệu suất phản ứng là $60\\%$. Tính khối lượng ethyl acetate thu được, theo gam.',
      answer: 5.28,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Tính số mol mỗi chất: $\\dfrac{6}{60}$ và $\\dfrac{4{,}6}{46}$.',
        'Tỉ lệ $1 : 1$; nhân số mol ester lí thuyết với $60\\%$, rồi với $M = 88$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{CH_3COOH}} = n_{\\mathrm{C_2H_5OH}} = 0{,}1$ mol; $n_{\\text{ester}} = 0{,}1 \\times 60\\% = 0{,}06$ mol; $m = 0{,}06 \\times 88 = 5{,}28$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun $30$ g acetic acid với lượng dư ethylic alcohol (xúc tác $\\mathrm{H_2SO_4}$ đặc), thu được $22$ g ethyl acetate. Tính hiệu suất phản ứng, theo phần trăm.',
      answer: 50,
      tolerance: 0.1,
      unit: '%',
      hints: [
        'Tính theo acetic acid vì alcohol dư.',
        'Hiệu suất bằng số mol ester thực tế chia cho số mol ester theo lí thuyết, nhân $100\\%$.',
      ],
      solution:
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{30}{60} = 0{,}5$ mol, nên theo lí thuyết thu được $0{,}5$ mol ester. Thực tế: $\\dfrac{22}{88} = 0{,}25$ mol. $H = \\dfrac{0{,}25}{0{,}5} \\times 100\\% = 50\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò của sulfuric acid đặc trong phản ứng ester hoá là',
      options: [
        'chất xúc tác',
        'chất phản ứng tạo ester',
        'chất tạo mùi thơm',
        'chất làm quỳ tím hoá xanh',
      ],
      answer: 0,
      hints: ['Sulfuric acid không có mặt trong sản phẩm ethyl acetate.'],
      solution:
        'Sulfuric acid đặc là chất xúc tác (ghi trên mũi tên của phương trình); nó không tạo thành ester.',
    },
  ],
  takeaways: [
    'Acetic acid: $\\mathrm{C_2H_4O_2}$, công thức cấu tạo $\\mathrm{CH_3{-}COOH}$; nhóm $\\mathrm{{-}COOH}$ gây nên tính acid.',
    'Chất lỏng không màu, vị chua, tan vô hạn trong nước; giấm ăn là dung dịch acetic acid $2\\%$ đến $5\\%$.',
    'Acetic acid là acid yếu: làm quỳ tím hoá đỏ, tác dụng với kim loại đứng trước H, oxide base, base và muối carbonate.',
    'Ester hoá: $\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\rightleftharpoons \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}$ ($\\mathrm{H_2SO_4}$ đặc, $t^\\circ$); phản ứng thuận nghịch, hiệu suất dưới $100\\%$.',
    'Giấm ăn được sản xuất bằng cách lên men giấm dung dịch ethylic alcohol loãng.',
  ],
};
