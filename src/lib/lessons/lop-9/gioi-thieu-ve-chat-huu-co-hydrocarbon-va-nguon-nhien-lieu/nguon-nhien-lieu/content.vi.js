/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dầu mỏ, khí mỏ dầu và khí thiên nhiên là nhiên liệu hoá thạch có thành phần chính là hydrocarbon. Dầu mỏ được chưng cất thành các phân đoạn: khí, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường. Nhiên liệu là chất cháy được, toả nhiệt và phát sáng, gồm nhiên liệu rắn, lỏng, khí; cần dùng an toàn, hiệu quả và dần thay bằng nhiên liệu sinh học, năng lượng tái tạo.',
  intro:
    'Xe máy chạy bằng xăng, máy bay dùng dầu hoả, bếp nấu dùng gas, mặt đường phủ nhựa đường. Tất cả đều có chung một nguồn gốc: dầu mỏ được hút lên từ những giếng khoan sâu hàng nghìn mét dưới đáy biển. Làm thế nào từ một chất lỏng sánh màu nâu đen lại tách ra được nhiều sản phẩm đến vậy?',
  objectives: [
    'Nêu được khái niệm, thành phần, trạng thái tự nhiên của dầu mỏ, khí mỏ dầu, khí thiên nhiên và cách khai thác chúng.',
    'Nêu được các sản phẩm chế biến từ dầu mỏ và ứng dụng của chúng.',
    'Trình bày được khái niệm nhiên liệu, các dạng nhiên liệu phổ biến và cách sử dụng nhiên liệu an toàn, hiệu quả, giảm ô nhiễm môi trường.',
    'Nêu được nhiên liệu sinh học và lợi ích của việc sử dụng chúng.',
  ],
  sections: [
    {
      heading: 'Dầu mỏ, khí mỏ dầu và khí thiên nhiên',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dầu mỏ',
          text: 'Dầu mỏ là nhiên liệu hoá thạch nằm trong vỏ Trái Đất, là hỗn hợp phức tạp của nhiều hydrocarbon và một lượng nhỏ các hợp chất khác. Dầu mỏ là chất lỏng sánh, màu nâu đen, không tan trong nước và nhẹ hơn nước.',
        },
        {
          type: 'p',
          text: 'Dầu mỏ tập trung thành những vùng lớn trong lòng đất gọi là mỏ dầu. Một mỏ dầu thường có ba lớp:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lớp trên cùng: khí mỏ dầu (khí đồng hành), thành phần chính là methane (khoảng 75%) và một số hydrocarbon khí khác.',
            'Lớp giữa: dầu mỏ có hoà tan khí.',
            'Lớp dưới cùng: nước mặn.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khí thiên nhiên',
          text: 'Khí thiên nhiên cũng là nhiên liệu hoá thạch, có trong các mỏ khí dưới lòng đất. Thành phần chủ yếu là methane (khoảng 95%), còn lại là ethane, propane, butane và một lượng nhỏ carbon dioxide, nitrogen.',
        },
        {
          type: 'p',
          text: 'Khai thác: người ta khoan giếng xuống mỏ dầu. Lúc đầu dầu và khí tự phun lên do áp suất trong mỏ lớn; về sau phải bơm nước hoặc khí xuống để đẩy dầu lên. Dầu được loại bỏ tạp chất thành dầu thô rồi chở đến nhà máy lọc dầu. Khí thiên nhiên tự phun lên qua giếng khoan vì áp suất trong mỏ khí lớn hơn áp suất khí quyển, sau đó được dẫn về nhà máy để xử lí. Ở Việt Nam, dầu mỏ được khai thác chủ yếu ở thềm lục địa phía nam (mỏ Bạch Hổ, Rồng, Đại Hùng, ...); dầu thô được chế biến ở nhà máy lọc dầu Dung Quất và Nghi Sơn.',
        },
      ],
    },
    {
      heading: 'Chế biến dầu mỏ',
      blocks: [
        {
          type: 'p',
          text: 'Các hydrocarbon trong dầu mỏ có nhiệt độ sôi khác nhau: phân tử càng nhiều nguyên tử carbon thì nhiệt độ sôi càng cao. Ở nhà máy lọc dầu, dầu thô được đun nóng rồi đưa vào tháp chưng cất; nhiệt độ trong tháp giảm dần từ dưới lên trên. Hơi hydrocarbon bay lên và ngưng tụ ở những tầng khác nhau, thu được các phân đoạn:',
        },
        {
          type: 'table',
          head: ['Phân đoạn', 'Nhiệt độ sôi (gần đúng)', 'Ứng dụng'],
          rows: [
            [
              'Khí dầu mỏ',
              'dưới $30\\,^\\circ\\mathrm{C}$',
              'Nhiên liệu khí (gas), nguyên liệu hoá chất',
            ],
            ['Xăng', '$30$–$180\\,^\\circ\\mathrm{C}$', 'Nhiên liệu cho xe máy, ô tô'],
            [
              'Dầu hoả',
              '$180$–$250\\,^\\circ\\mathrm{C}$',
              'Nhiên liệu cho máy bay phản lực, đun nấu',
            ],
            [
              'Dầu diesel',
              '$250$–$350\\,^\\circ\\mathrm{C}$',
              'Nhiên liệu cho xe tải, tàu thuyền, máy phát điện',
            ],
            [
              'Dầu mazut',
              '$350$–$450\\,^\\circ\\mathrm{C}$',
              'Nhiên liệu cho lò công nghiệp, tàu biển; dầu nhờn',
            ],
            [
              'Nhựa đường',
              'cặn ở đáy tháp, trên $450\\,^\\circ\\mathrm{C}$',
              'Rải đường, chống thấm',
            ],
          ],
          caption: 'Các sản phẩm chưng cất dầu mỏ (nhiệt độ thay đổi tuỳ nhà máy)',
        },
        {
          type: 'p',
          text: 'Để thu thêm xăng, người ta bẻ gãy các phân tử hydrocarbon lớn trong dầu nặng thành phân tử nhỏ hơn (cracking). Dầu mỏ và khí thiên nhiên vừa là nguồn nhiên liệu, vừa là nguồn nguyên liệu quý cho công nghiệp hoá chất (sản xuất chất dẻo, phân bón, dung môi, ...).',
        },
      ],
    },
    {
      heading: 'Nhiên liệu và cách sử dụng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiên liệu',
          text: 'Nhiên liệu là những chất cháy được, khi cháy toả nhiệt và phát sáng.',
        },
        {
          type: 'table',
          head: ['Dạng nhiên liệu', 'Ví dụ'],
          rows: [
            ['Nhiên liệu rắn', 'Than đá, than củi, gỗ'],
            ['Nhiên liệu lỏng', 'Xăng, dầu hoả, dầu diesel, cồn, xăng sinh học'],
            ['Nhiên liệu khí', 'Khí thiên nhiên, khí mỏ dầu, khí hoá lỏng (gas), biogas'],
          ],
        },
        {
          type: 'p',
          text: 'Xăng, dầu dùng cho xe máy, ô tô, máy bay; gas dùng để đun nấu, sưởi ấm; than là nhiên liệu quan trọng của nhà máy nhiệt điện và luyện kim. Sử dụng nhiên liệu hiệu quả là làm cho nhiên liệu cháy hoàn toàn và tận dụng nhiệt sinh ra:',
        },
        {
          type: 'list',
          items: [
            'Cung cấp đủ không khí (oxygen) cho sự cháy, ví dụ mở cửa lò, điều chỉnh van gió của bếp gas cho ngọn lửa màu xanh.',
            'Tăng diện tích tiếp xúc giữa nhiên liệu và không khí: chẻ nhỏ củi, làm than tổ ong có nhiều lỗ, phun xăng thành dạng sương trong động cơ.',
            'Điều chỉnh lượng nhiên liệu vừa đủ với nhu cầu, tắt bếp khi không dùng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn khi dùng nhiên liệu',
          text: 'Nhiên liệu là chất dễ cháy, cần tuân thủ nghiêm ngặt quy định phòng cháy, chữa cháy. Khoá van bình gas sau khi nấu; khi ngửi thấy mùi gas, khoá van, mở cửa cho thoáng và không bật lửa hay bật, tắt công tắc điện. Không đốt than trong phòng kín vì sinh ra khí CO rất độc.',
        },
        {
          type: 'p',
          text: 'Trữ lượng nhiên liệu hoá thạch có hạn và không tái tạo được. Đốt chúng thải ra nhiều $\\mathrm{CO_2}$ (gây hiệu ứng nhà kính), cùng với bụi, $\\mathrm{SO_2}$, $\\mathrm{CO}$ gây ô nhiễm không khí. Vì vậy cần dùng tiết kiệm và tìm nguồn năng lượng thay thế.',
        },
      ],
    },
    {
      heading: 'Nhiên liệu sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiên liệu sinh học',
          text: 'Nhiên liệu sinh học là nhiên liệu được sản xuất từ sinh khối như thực vật (mía, sắn, ngô), dầu thực vật, mỡ động vật, phân và chất thải hữu cơ.',
        },
        {
          type: 'table',
          head: ['Nhiên liệu sinh học', 'Nguồn gốc', 'Sử dụng'],
          rows: [
            [
              'Ethanol sinh học',
              'Lên men tinh bột, đường (sắn, ngô, mía)',
              'Pha vào xăng: xăng E5 chứa $5\\%$ ethanol, xăng E10 chứa $10\\%$ ethanol (theo thể tích)',
            ],
            [
              'Biogas',
              'Phân huỷ phân chuồng, rác hữu cơ trong hầm kín',
              'Khí chứa chủ yếu methane, dùng đun nấu, chạy máy phát điện',
            ],
            ['Biodiesel', 'Dầu thực vật, mỡ động vật', 'Thay thế một phần dầu diesel'],
          ],
        },
        {
          type: 'p',
          text: 'Nhiên liệu sinh học có thể tái tạo, cháy sạch hơn và giúp giảm lượng nhiên liệu hoá thạch phải dùng. Tuy nhiên, trồng cây làm nhiên liệu có thể cạnh tranh đất và lương thực, nên cần sản xuất hợp lí, ưu tiên tận dụng chất thải.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tháp chưng cất dầu mỏ',
    instruction:
      'Kéo thanh trượt (hoặc dùng phím mũi tên) để chọn số nguyên tử carbon của một hydrocarbon. Quan sát nhiệt độ sôi của nó và tầng tháp nơi nó được thu lại. Hãy tìm: hydrocarbon nào thuộc phân đoạn xăng, từ bao nhiêu nguyên tử carbon thì thành dầu diesel, chất nào ở lại đáy tháp.',
  },
  examples: [
    {
      problem:
        'Vì sao khi chưng cất dầu mỏ, xăng được lấy ra ở phía trên tháp còn dầu diesel được lấy ra ở phía dưới?',
      steps: [
        'Nhiệt độ trong tháp chưng cất giảm dần từ dưới lên trên.',
        'Xăng gồm các hydrocarbon ít nguyên tử carbon (khoảng C5–C10), nhiệt độ sôi thấp, nên hơi của chúng bay lên cao mới ngưng tụ.',
        'Dầu diesel gồm các hydrocarbon nhiều nguyên tử carbon hơn (khoảng C14–C20), nhiệt độ sôi cao hơn, nên ngưng tụ ngay ở các tầng nóng phía dưới.',
      ],
      answer:
        'Vì xăng có nhiệt độ sôi thấp hơn dầu diesel; chất sôi càng thấp càng được lấy ra ở vị trí cao hơn trong tháp.',
    },
    {
      problem:
        'Một bình gas $12$ kg chứa khí hoá lỏng, coi như toàn bộ là butane $\\mathrm{C_4H_{10}}$. Tính thể tích khí carbon dioxide (ở điều kiện chuẩn) thải ra khi dùng hết bình gas (C = 12, H = 1).',
      steps: [
        '$M_{\\mathrm{C_4H_{10}}} = 4 \\times 12 + 10 = 58$ g/mol; $n_{\\mathrm{C_4H_{10}}} = \\dfrac{12\\,000}{58} \\approx 206{,}9$ mol.',
        '$2\\mathrm{C_4H_{10}} + 13\\mathrm{O_2} \\xrightarrow{t^\\circ} 8\\mathrm{CO_2} + 10\\mathrm{H_2O}$: $n_{\\mathrm{CO_2}} = 4 \\times n_{\\mathrm{C_4H_{10}}} \\approx 827{,}6$ mol.',
        '$V_{\\mathrm{CO_2}} = 827{,}6 \\times 24{,}79 \\approx 20\\,516$ L $\\approx 20{,}5\\ \\mathrm{m^3}$.',
      ],
      answer:
        'Khoảng $20{,}5\\ \\mathrm{m^3}$ khí $\\mathrm{CO_2}$: đây là lí do cần dùng nhiên liệu tiết kiệm.',
    },
    {
      problem:
        'Một xe máy đổ $4$ L xăng E5. Hỏi trong đó có bao nhiêu lít ethanol và bao nhiêu lít xăng khoáng?',
      steps: [
        'Xăng E5 chứa $5\\%$ ethanol theo thể tích.',
        'Thể tích ethanol: $4 \\times 5\\% = 0{,}2$ L.',
        'Thể tích xăng khoáng: $4 - 0{,}2 = 3{,}8$ L.',
      ],
      answer: '$0{,}2$ L ethanol và $3{,}8$ L xăng khoáng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chủ yếu của khí thiên nhiên là',
      options: ['ethylene', 'methane', 'butane', 'carbon dioxide'],
      answer: 1,
      hints: ['Đó là alkane đơn giản nhất.'],
      solution: 'Khí thiên nhiên chứa khoảng $95\\%$ methane $\\mathrm{CH_4}$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các lớp trong một mỏ dầu từ trên xuống dưới.',
      items: ['Nước mặn', 'Khí mỏ dầu', 'Dầu mỏ có hoà tan khí'],
      answer: [1, 2, 0],
      hints: ['Khí nhẹ nhất; dầu nhẹ hơn nước.'],
      solution: 'Trên cùng là khí mỏ dầu, giữa là dầu mỏ có hoà tan khí, dưới cùng là nước mặn.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các sản phẩm chưng cất dầu mỏ theo nhiệt độ sôi tăng dần (từ đỉnh tháp xuống đáy tháp).',
      items: ['Dầu diesel', 'Xăng', 'Nhựa đường', 'Khí dầu mỏ', 'Dầu hoả', 'Dầu mazut'],
      answer: [3, 1, 4, 0, 5, 2],
      hints: [
        'Phân tử càng nhiều nguyên tử carbon thì nhiệt độ sôi càng cao.',
        'Nhựa đường là phần cặn không bay hơi.',
      ],
      solution:
        'Khí dầu mỏ → xăng → dầu hoả → dầu diesel → dầu mazut → nhựa đường (cặn ở đáy tháp).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sản phẩm của dầu mỏ với ứng dụng chính của nó.',
      left: ['Xăng', 'Dầu hoả', 'Dầu diesel', 'Nhựa đường'],
      right: [
        'Nhiên liệu cho động cơ xe tải, tàu thuyền',
        'Rải đường',
        'Nhiên liệu cho xe máy, ô tô con',
        'Nhiên liệu cho máy bay phản lực',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Máy bay phản lực dùng nhiên liệu từ phân đoạn dầu hoả.'],
      solution:
        'Xăng: xe máy, ô tô con; dầu hoả: máy bay phản lực; dầu diesel: xe tải, tàu thuyền; nhựa đường: rải đường.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các nhiên liệu khí.',
      options: ['Khí thiên nhiên', 'Than đá', 'Biogas', 'Xăng', 'Khí hoá lỏng (gas)'],
      answers: [0, 2, 4],
      hints: ['Phân loại theo trạng thái của nhiên liệu ở điều kiện thường.'],
      solution:
        'Khí thiên nhiên, biogas, gas là nhiên liệu khí; than đá là nhiên liệu rắn; xăng là nhiên liệu lỏng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi đun bếp củi, người ta chẻ nhỏ củi?',
      options: [
        'Để củi nhẹ hơn.',
        'Để tăng diện tích tiếp xúc của củi với không khí, củi cháy mạnh và hoàn toàn hơn.',
        'Để giảm lượng oxygen cần dùng.',
        'Để củi không sinh ra carbon dioxide.',
      ],
      answer: 1,
      hints: ['Sự cháy xảy ra ở bề mặt tiếp xúc giữa nhiên liệu và oxygen.'],
      solution:
        'Chẻ nhỏ củi làm tăng diện tích tiếp xúc với không khí, nhiên liệu cháy nhanh và hoàn toàn hơn, tận dụng được nhiều nhiệt hơn.',
    },
    {
      type: 'choice',
      prompt: 'Khi phát hiện rò rỉ gas trong bếp, việc nào sau đây không được làm?',
      options: [
        'Khoá van bình gas.',
        'Mở cửa cho thoáng khí.',
        'Bật quạt điện để thổi bay khí gas.',
        'Báo người lớn hoặc cơ quan chức năng.',
      ],
      answer: 2,
      hints: ['Một tia lửa điện nhỏ cũng đủ làm hỗn hợp gas và không khí phát nổ.'],
      solution:
        'Bật quạt hay công tắc điện có thể phát sinh tia lửa điện gây cháy nổ. Cần khoá van, mở cửa và báo người lớn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các nhiên liệu sinh học.',
      options: [
        'Biogas từ hầm ủ phân chuồng',
        'Than đá',
        'Ethanol từ sắn',
        'Khí thiên nhiên',
        'Biodiesel từ dầu thực vật',
      ],
      answers: [0, 2, 4],
      hints: ['Nhiên liệu sinh học được sản xuất từ sinh khối, có thể tái tạo.'],
      solution:
        'Biogas, ethanol từ sắn và biodiesel là nhiên liệu sinh học. Than đá và khí thiên nhiên là nhiên liệu hoá thạch.',
    },
    {
      type: 'number',
      prompt: 'Trong $40$ L xăng E5 có bao nhiêu lít ethanol?',
      answer: 2,
      tolerance: 0.001,
      unit: 'L',
      hints: ['Xăng E5 chứa $5\\%$ ethanol theo thể tích.'],
      solution: '$V = 40 \\times 5\\% = 2$ L.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $1$ kg methane. Tính khối lượng $\\mathrm{CO_2}$ tạo thành, theo kg (C = 12, H = 1, O = 16).',
      answer: 2.75,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        '$\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}$: số mol $\\mathrm{CO_2}$ bằng số mol $\\mathrm{CH_4}$.',
        'Có thể tính theo tỉ lệ khối lượng $16 : 44$.',
      ],
      solution:
        '$n_{\\mathrm{CH_4}} = \\dfrac{1\\,000}{16} = 62{,}5$ mol $= n_{\\mathrm{CO_2}}$; $m = 62{,}5 \\times 44 = 2\\,750$ g $= 2{,}75$ kg.',
    },
  ],
  takeaways: [
    'Dầu mỏ, khí mỏ dầu, khí thiên nhiên là nhiên liệu hoá thạch, thành phần chính là hydrocarbon; khí thiên nhiên chứa khoảng 95% methane.',
    'Mỏ dầu có ba lớp: khí mỏ dầu, dầu mỏ, nước mặn. Dầu thô được chưng cất thành khí, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường: chất sôi càng thấp càng lấy ra ở cao.',
    'Nhiên liệu là chất cháy được, toả nhiệt và phát sáng; có nhiên liệu rắn, lỏng, khí.',
    'Dùng nhiên liệu hiệu quả: đủ không khí, tăng diện tích tiếp xúc, điều chỉnh lượng vừa đủ; luôn tuân thủ quy tắc an toàn cháy nổ.',
    'Nhiên liệu sinh học (ethanol, biogas, biodiesel) có thể tái tạo, giúp giảm dùng nhiên liệu hoá thạch.',
  ],
};
