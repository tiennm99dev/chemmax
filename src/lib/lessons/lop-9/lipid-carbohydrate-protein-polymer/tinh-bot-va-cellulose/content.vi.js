/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tinh bột và cellulose đều có công thức (C6H10O5)n, phân tử khối rất lớn, tạo bởi nhiều mắt xích –C6H10O5–. Tinh bột có trong hạt, củ, quả, tạo màu xanh tím với iodine; cellulose có trong thân, vỏ cây, bông. Cả hai bị thuỷ phân thành glucose và được tạo thành trong cây xanh nhờ quang hợp.',
  intro:
    'Hạt gạo và tờ giấy trông chẳng liên quan gì đến nhau: một thứ để ăn, một thứ để viết. Thế nhưng thành phần chính của chúng lại được ghép từ cùng một loại mắt xích. Vì sao cơ thể người tiêu hoá được cơm mà không tiêu hoá được giấy, và làm sao nhận ra tinh bột chỉ bằng một giọt dung dịch?',
  objectives: [
    'Nêu được trạng thái tự nhiên, tính chất vật lí của tinh bột và cellulose.',
    'Viết được công thức chung của tinh bột và cellulose; nêu được đặc điểm cấu tạo phân tử của chúng.',
    'Trình bày được phản ứng thuỷ phân tinh bột, cellulose và phản ứng màu của tinh bột với iodine.',
    'Nêu được sự tạo thành tinh bột, cellulose trong cây xanh, vai trò và ứng dụng của chúng.',
  ],
  sections: [
    {
      heading: 'Trạng thái tự nhiên và tính chất vật lí',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Tinh bột', 'Cellulose'],
          rows: [
            [
              'Trạng thái tự nhiên',
              'Có nhiều trong hạt (gạo, ngô, lúa mì), củ (khoai, sắn), quả (chuối xanh)',
              'Có nhiều trong thân, vỏ cây (gỗ, tre, nứa, đay, gai); bông gần như là cellulose nguyên chất',
            ],
            [
              'Tính chất vật lí',
              'Chất rắn dạng bột, màu trắng, không tan trong nước lạnh; trong nước nóng tạo dung dịch keo gọi là hồ tinh bột',
              'Chất rắn dạng sợi, màu trắng, không tan trong nước kể cả khi đun nóng, không tan trong các dung môi thông thường',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Tinh bột và cellulose đều là carbohydrate có phân tử khối rất lớn, gồm rất nhiều mắt xích $\\mathrm{{-}C_6H_{10}O_5{-}}$ liên kết với nhau.',
        },
        {
          type: 'tex',
          tex: '\\cdots{-}\\mathrm{C_6H_{10}O_5}{-}\\mathrm{C_6H_{10}O_5}{-}\\mathrm{C_6H_{10}O_5}{-}\\cdots',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công thức chung',
          text: 'Tinh bột: $\\mathrm{(C_6H_{10}O_5)_n}$; cellulose: $\\mathrm{(C_6H_{10}O_5)_m}$. Số mắt xích trong phân tử cellulose lớn hơn nhiều so với tinh bột, nên cellulose có phân tử khối lớn hơn.',
        },
        {
          type: 'p',
          text: 'Mỗi mắt xích $\\mathrm{C_6H_{10}O_5}$ có khối lượng $6 \\times 12 + 10 \\times 1 + 5 \\times 16 = 162$ amu, nên phân tử khối của tinh bột là $162n$.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng thuỷ phân',
          text: 'Đun nóng tinh bột hoặc cellulose với dung dịch acid loãng, hoặc dưới tác dụng của enzyme, chúng bị thuỷ phân thành glucose.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\xrightarrow{\\text{acid},\\ t^\\circ} n\\mathrm{C_6H_{12}O_6}',
        },
        {
          type: 'p',
          text: 'Trong cơ thể người, enzyme trong nước bọt và ruột non thuỷ phân tinh bột thành glucose để cung cấp năng lượng. Cơ thể người không có enzyme thuỷ phân cellulose, nên không tiêu hoá được cellulose; trâu, bò tiêu hoá được cỏ nhờ vi sinh vật trong dạ dày.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng màu với iodine',
          text: 'Nhỏ dung dịch iodine vào hồ tinh bột (hoặc lên lát khoai, mặt cắt quả chuối xanh) thấy xuất hiện màu xanh tím. Phản ứng này dùng để nhận biết tinh bột. Cellulose không cho phản ứng này.',
        },
        { type: 'widget', name: 'hydrolysis' },
      ],
    },
    {
      heading: 'Sự tạo thành trong cây xanh và ứng dụng',
      blocks: [
        {
          type: 'p',
          text: 'Trong lá cây, nhờ năng lượng ánh sáng mặt trời và chất diệp lục (chlorophyll), carbon dioxide và nước được chuyển hoá thành tinh bột, cellulose và giải phóng khí oxygen. Quá trình này gọi là quang hợp.',
        },
        {
          type: 'tex',
          tex: '6n\\mathrm{CO_2} + 5n\\mathrm{H_2O} \\xrightarrow{\\text{chlorophyll}} \\mathrm{(C_6H_{10}O_5)_n} + 6n\\mathrm{O_2}',
        },
        {
          type: 'table',
          head: ['Nội dung', 'Tinh bột', 'Cellulose'],
          rows: [
            [
              'Vai trò trong cây',
              'Dự trữ năng lượng',
              'Tạo thành tế bào, giữ cho cây cứng chắc và có hình dạng',
            ],
            [
              'Ứng dụng',
              'Lương thực chính của con người; sản xuất hồ dán, glucose, ethylic alcohol',
              'Sản xuất giấy, sợi vải; gỗ dùng trong xây dựng, đồ dùng; nguyên liệu sản xuất ethylic alcohol',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nhỏ iodine tìm tinh bột',
    instruction:
      'Chọn một mẫu, dự đoán mẫu có tinh bột hay không, rồi bấm “Nhỏ iodine”. Tinh bột chuyển màu xanh tím; mẫu không có tinh bột giữ màu vàng nâu của iodine. Thử hết các mẫu và đếm số dự đoán đúng.',
  },
  examples: [
    {
      problem:
        'Gạo chứa $80\\%$ tinh bột. Tính khối lượng glucose thu được khi thuỷ phân tinh bột trong $1$ tấn gạo, biết hiệu suất phản ứng là $75\\%$.',
      steps: [
        'Khối lượng tinh bột: $1000 \\times 80\\% = 800$ kg.',
        '$\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\rightarrow n\\mathrm{C_6H_{12}O_6}$: cứ $162n$ kg tinh bột tạo $180n$ kg glucose.',
        'Theo lí thuyết: $m = \\dfrac{800 \\times 180}{162} \\approx 888{,}89$ kg.',
        'Với hiệu suất $75\\%$: $m = \\dfrac{800 \\times 180}{162} \\times 75\\% \\approx 666{,}67$ kg.',
      ],
      answer: 'Thu được khoảng $666{,}67$ kg glucose.',
    },
    {
      problem:
        'Để tạo thành $16{,}2$ g tinh bột, cây xanh cần hấp thụ bao nhiêu lít khí $\\mathrm{CO_2}$ (điều kiện chuẩn) và giải phóng bao nhiêu gam khí $\\mathrm{O_2}$?',
      steps: [
        'Số mol mắt xích $\\mathrm{C_6H_{10}O_5}$: $\\dfrac{16{,}2}{162} = 0{,}1$ mol.',
        'Theo phương trình quang hợp, mỗi mắt xích cần $6$ phân tử $\\mathrm{CO_2}$ và giải phóng $6$ phân tử $\\mathrm{O_2}$: $n_{\\mathrm{CO_2}} = n_{\\mathrm{O_2}} = 0{,}6$ mol.',
        '$V_{\\mathrm{CO_2}} = 0{,}6 \\times 24{,}79 = 14{,}874$ L; $m_{\\mathrm{O_2}} = 0{,}6 \\times 32 = 19{,}2$ g.',
      ],
      answer: 'Cần $14{,}874$ L khí $\\mathrm{CO_2}$ và giải phóng $19{,}2$ g khí $\\mathrm{O_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thuốc thử dùng để nhận biết tinh bột là',
      options: [
        'dung dịch iodine',
        'dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$',
        'quỳ tím',
        'dung dịch NaOH',
      ],
      answer: 0,
      hints: ['Phép thử tạo ra màu xanh tím đặc trưng.'],
      solution:
        'Tinh bột tạo màu xanh tím với dung dịch iodine, nên dùng iodine để nhận biết tinh bột.',
    },
    {
      type: 'text',
      prompt: 'Nhỏ dung dịch iodine lên lát khoai tây, chỗ nhỏ chuyển sang màu gì?',
      accept: ['xanh tím', 'màu xanh tím', 'tím xanh'],
      hints: ['Khoai tây chứa nhiều tinh bột.'],
      solution: 'Khoai tây chứa tinh bột, tinh bột gặp iodine tạo màu xanh tím.',
    },
    {
      type: 'multi',
      prompt: 'Những nguyên liệu nào chứa nhiều tinh bột?',
      options: ['Gạo', 'Củ sắn', 'Bông', 'Cây mía', 'Hạt ngô'],
      answers: [0, 1, 4],
      hints: ['Bông là cellulose; đường trong cây mía là saccharose.'],
      solution:
        'Gạo, sắn, ngô chứa nhiều tinh bột. Bông gần như là cellulose nguyên chất, còn cây mía chứa nhiều saccharose.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao cơ thể người không tiêu hoá được cellulose?',
      options: [
        'Cơ thể người không có enzyme thuỷ phân cellulose',
        'Cellulose không phải là carbohydrate',
        'Cellulose tan quá nhanh trong nước',
        'Cellulose có công thức khác hoàn toàn tinh bột',
      ],
      answer: 0,
      hints: ['Tinh bột được thuỷ phân trong cơ thể nhờ enzyme trong nước bọt và ruột non.'],
      solution:
        'Cellulose cũng là carbohydrate, cũng tạo từ mắt xích $\\mathrm{C_6H_{10}O_5}$ và không tan trong nước, nhưng cơ thể người không có enzyme thuỷ phân cellulose.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $81$ g tinh bột với hiệu suất $75\\%$. Tính khối lượng glucose thu được, theo gam.',
      answer: 67.5,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Cứ $162$ g tinh bột tạo $180$ g glucose.',
        'Tính theo lí thuyết rồi nhân với $75\\%$.',
      ],
      solution:
        'Theo lí thuyết: $\\dfrac{81 \\times 180}{162} = 90$ g; thực tế: $90 \\times 75\\% = 67{,}5$ g.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $1$ tấn mùn cưa chứa $50\\%$ cellulose, hiệu suất $100\\%$. Tính khối lượng glucose thu được, theo kilôgam (làm tròn đến hàng phần trăm).',
      answer: 555.56,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        'Khối lượng cellulose là $1000 \\times 50\\%$ kg.',
        'Cứ $162$ kg cellulose tạo $180$ kg glucose.',
      ],
      solution:
        'Cellulose: $500$ kg; glucose: $\\dfrac{500 \\times 180}{162} \\approx 555{,}56$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử tinh bột có phân tử khối $972\\,000$ amu. Phân tử đó có bao nhiêu mắt xích $\\mathrm{C_6H_{10}O_5}$?',
      answer: 6000,
      hints: ['Mỗi mắt xích nặng $162$ amu.'],
      solution: '$n = \\dfrac{972\\,000}{162} = 6000$ mắt xích.',
    },
    {
      type: 'number',
      prompt:
        'Để cây xanh tạo thành $32{,}4$ g tinh bột qua quang hợp, cần bao nhiêu gam khí $\\mathrm{CO_2}$?',
      answer: 52.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Số mol mắt xích: $\\dfrac{32{,}4}{162}$ mol.',
        'Mỗi mắt xích cần $6$ phân tử $\\mathrm{CO_2}$; $M_{\\mathrm{CO_2}} = 44$ g/mol.',
      ],
      solution:
        'Số mol mắt xích: $0{,}2$ mol; $n_{\\mathrm{CO_2}} = 6 \\times 0{,}2 = 1{,}2$ mol; $m = 1{,}2 \\times 44 = 52{,}8$ g.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất với vai trò hoặc nguồn gốc của nó.',
      left: ['Tinh bột', 'Cellulose', 'Glucose'],
      right: [
        'Chất dự trữ năng lượng trong hạt, củ',
        'Thành phần chính của thành tế bào thực vật',
        'Sản phẩm cuối cùng khi thuỷ phân tinh bột',
        'Chất béo trong mỡ động vật',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Cellulose giữ cho thân cây cứng chắc.'],
      solution:
        'Tinh bột dự trữ năng lượng; cellulose tạo thành tế bào thực vật; thuỷ phân tinh bột hoặc cellulose đều thu được glucose.',
    },
    {
      type: 'choice',
      prompt:
        'Đun hồ tinh bột với acid loãng thật lâu, để nguội rồi nhỏ iodine vào thì không còn thấy màu xanh tím. Giải thích nào đúng?',
      options: [
        'Tinh bột đã bị thuỷ phân hết thành glucose',
        'Iodine đã bay hơi hết',
        'Tinh bột đã chuyển thành cellulose',
        'Acid làm iodine hoá xanh rồi mất màu',
      ],
      answer: 0,
      hints: ['Đun với acid là điều kiện của phản ứng nào?'],
      solution:
        'Đun với acid, tinh bột bị thuỷ phân dần thành glucose; khi không còn tinh bột thì không còn phản ứng màu với iodine.',
    },
  ],
  takeaways: [
    'Tinh bột $\\mathrm{(C_6H_{10}O_5)_n}$ và cellulose $\\mathrm{(C_6H_{10}O_5)_m}$ có phân tử khối rất lớn, gồm nhiều mắt xích $\\mathrm{C_6H_{10}O_5}$ (162 amu); cellulose có nhiều mắt xích hơn.',
    'Tinh bột: bột trắng, tan trong nước nóng tạo hồ; cellulose: dạng sợi, không tan trong nước.',
    'Thuỷ phân (acid, $t^\\circ$ hoặc enzyme): $\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\rightarrow n\\mathrm{C_6H_{12}O_6}$.',
    'Tinh bột tạo màu xanh tím với iodine; cellulose thì không.',
    'Cây xanh tạo tinh bột, cellulose nhờ quang hợp: $6n\\mathrm{CO_2} + 5n\\mathrm{H_2O} \\rightarrow \\mathrm{(C_6H_{10}O_5)_n} + 6n\\mathrm{O_2}$.',
  ],
};
