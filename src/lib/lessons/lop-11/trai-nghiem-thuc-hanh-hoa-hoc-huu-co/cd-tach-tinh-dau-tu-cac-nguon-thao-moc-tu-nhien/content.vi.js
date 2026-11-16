/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tinh dầu: thành phần, nguồn gốc và ứng dụng; tách tinh dầu bằng chưng cất lôi cuốn hơi nước và bằng phương pháp chiết; thực hành tách tinh dầu sả chanh và tinh dầu vỏ cam.',
  intro:
    'Mùi thơm của sả, vỏ bưởi, vỏ quế hay lá bạc hà đến từ tinh dầu, một lượng rất nhỏ các chất dễ bay hơi nằm trong mô thực vật. Tinh dầu sả có chất sôi trên $200\\ ^\\circ\\mathrm{C}$, vậy mà chỉ cần nồi nước sôi chưa đến $100\\ ^\\circ\\mathrm{C}$ đã cuốn được nó ra. Bí quyết nằm ở cách hai chất lỏng không tan vào nhau cùng sôi.',
  objectives: [
    'Nêu được khái niệm, thành phần chính và nguồn gốc của một số tinh dầu thông dụng.',
    'Trình bày được nguyên tắc, ưu điểm và hạn chế của phương pháp chưng cất lôi cuốn hơi nước và phương pháp chiết.',
    'Thực hiện được thí nghiệm tách tinh dầu sả chanh bằng chưng cất lôi cuốn hơi nước và tách tinh dầu vỏ cam bằng phương pháp chiết.',
    'Tính được hiệu suất tách tinh dầu và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Tinh dầu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tinh dầu',
          text: 'Tinh dầu là hỗn hợp nhiều chất hữu cơ dễ bay hơi, có mùi thơm đặc trưng, được tách ra từ các bộ phận của thực vật. Tinh dầu thường không tan hoặc rất ít tan trong nước, tan tốt trong ethanol và các dung môi hữu cơ; phần lớn tinh dầu nhẹ hơn nước.',
        },
        {
          type: 'p',
          text: 'Tinh dầu có trong nhiều bộ phận của cây: thân (long não), vỏ (quế, vỏ cam, vỏ chanh, vỏ bưởi), lá (sả, bạc hà, tràm, bạch đàn), hoa (hoa hồng, hoa nhài), nụ hoa (đinh hương), quả (hồi, sa nhân), thân rễ (gừng, nghệ). Thành phần chính của tinh dầu thường là các terpene và dẫn xuất chứa oxygen của chúng (alcohol, aldehyde, ketone, phenol, ether…).',
        },
        {
          type: 'table',
          head: ['Nguồn', 'Bộ phận', 'Thành phần chính'],
          rows: [
            ['Sả chanh', 'Lá, thân', 'Citral (aldehyde)'],
            ['Cam, chanh, bưởi', 'Vỏ quả', 'Limonene (hydrocarbon)'],
            ['Bạc hà', 'Lá', 'Menthol (alcohol)'],
            ['Quế', 'Vỏ thân', 'Cinnamaldehyde (aldehyde)'],
            ['Đinh hương', 'Nụ hoa', 'Eugenol (phenol)'],
            ['Hồi', 'Quả', 'Anethole (ether)'],
            ['Tràm, bạch đàn', 'Lá', 'Eucalyptol (ether)'],
          ],
          caption: 'Một số tinh dầu thông dụng',
        },
        {
          type: 'p',
          text: 'Tinh dầu được dùng làm hương liệu trong thực phẩm, đồ uống; làm nước hoa, mĩ phẩm, xà phòng; làm thuốc xoa bóp, thuốc sát khuẩn (tinh dầu tràm, bạc hà); xông, khử mùi và đuổi muỗi (tinh dầu sả).',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bảo quản tinh dầu',
          text: 'Tinh dầu dễ bay hơi và dễ bị oxi hoá khi gặp ánh sáng, không khí, nhiệt độ cao, làm mất mùi thơm. Vì vậy tinh dầu được đựng trong lọ thuỷ tinh tối màu, đậy nút kín, để nơi thoáng mát.',
        },
      ],
    },
    {
      heading: 'Chưng cất lôi cuốn hơi nước',
      blocks: [
        {
          type: 'p',
          text: 'Cho hơi nước đi qua nguyên liệu: hơi nước nóng làm vỡ các túi tinh dầu và cuốn hơi tinh dầu theo. Hỗn hợp hơi được ngưng tụ ở ống sinh hàn, chảy xuống bình hứng rồi tách thành hai lớp: tinh dầu (nhẹ hơn, không tan) ở trên, nước ở dưới. Dùng phễu chiết tách bỏ lớp nước để thu tinh dầu.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc',
          text: 'Hỗn hợp hai chất lỏng không tan vào nhau sôi khi tổng áp suất hơi của hai chất bằng áp suất bên ngoài. Vì áp suất hơi của tinh dầu cộng thêm vào áp suất hơi của nước, hỗn hợp sôi ở nhiệt độ thấp hơn $100\\ ^\\circ\\mathrm{C}$, thấp hơn nhiều nhiệt độ sôi của từng chất trong tinh dầu. Nhờ đó tinh dầu được cất ra mà ít bị phân huỷ.',
        },
        {
          type: 'tex',
          tex: 'p_{\\text{nước}} + p_{\\text{tinh dầu}} = p_{\\text{khí quyển}} = 101{,}3\\ \\text{kPa}',
        },
        {
          type: 'list',
          items: [
            'Bình cấp hơi nước: đun sôi nước, tạo hơi nước.',
            'Bình cất chứa nguyên liệu (có thêm nước ngập nguyên liệu và được đun nóng): hơi nước sục qua nguyên liệu, cuốn theo tinh dầu.',
            'Ống sinh hàn: ngưng tụ hỗn hợp hơi; nước làm lạnh vào ở đầu dưới, ra ở đầu trên để ống luôn đầy nước.',
            'Bình hứng: chứa hỗn hợp nước và tinh dầu ngưng tụ, sau đó chuyển sang phễu chiết.',
          ],
        },
        {
          type: 'table',
          head: ['Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Thiết bị đơn giản, rẻ; dung môi là nước, không độc, không cháy.',
              'Nhiệt độ gần $100\\ ^\\circ\\mathrm{C}$ và thời gian dài có thể làm biến đổi một số chất thơm.',
            ],
            [
              'Dùng được cho nhiều loại nguyên liệu: lá, thân, vỏ, hạt (sả, tràm, quế, vỏ bưởi…).',
              'Không phù hợp với hoa có hương dễ bị phá huỷ (hoa nhài, hoa hồng) và với tinh dầu tan nhiều trong nước.',
            ],
          ],
          caption: 'Ưu điểm và hạn chế của chưng cất lôi cuốn hơi nước',
        },
      ],
    },
    {
      heading: 'Phương pháp chiết',
      blocks: [
        {
          type: 'p',
          text: 'Ngâm nguyên liệu đã nghiền nhỏ trong một dung môi hoà tan tốt tinh dầu (ethanol, hexane…). Tinh dầu chuyển dần từ nguyên liệu vào dung môi. Lọc bỏ bã, rồi cho dung môi bay hơi; phần còn lại là tinh dầu.',
        },
        {
          type: 'table',
          head: ['Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Làm ở nhiệt độ thường, giữ được mùi thơm tự nhiên; dùng được cho hoa.',
              'Dung môi hữu cơ dễ cháy, có thể độc, giá cao; tinh dầu có thể lẫn dung môi.',
            ],
            [
              'Thu được cả các chất thơm khó bay hơi.',
              'Thời gian ngâm dài; dịch chiết lẫn sáp, chất màu nên có thể phải tinh chế thêm.',
            ],
          ],
          caption: 'Ưu điểm và hạn chế của phương pháp chiết',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ép vỏ quả',
          text: 'Với vỏ cam, chanh, bưởi tươi, nơi tinh dầu nằm trong các túi ngay dưới lớp vỏ màu vàng, người ta còn ép lạnh để lấy tinh dầu. Cách này giữ mùi rất tươi nhưng chỉ dùng được cho nguyên liệu nhiều tinh dầu.',
        },
      ],
    },
    {
      heading: 'Thực hành: tách tinh dầu sả chanh và tinh dầu vỏ cam',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Thí nghiệm 1. Tách tinh dầu sả chanh bằng chưng cất lôi cuốn hơi nước. Chuẩn bị khoảng $200$ g sả chanh, dao, cân, bộ dụng cụ chưng cất lôi cuốn hơi nước, bình tam giác, phễu chiết, lọ thuỷ tinh tối màu $10$ mL, nước sạch.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Rửa sạch sả, cắt thành đoạn khoảng $1$ cm (không giã nát), cho vào bình cất, thêm nước ngập nguyên liệu khoảng $2$ cm.',
            'Lắp bộ dụng cụ: bình cấp hơi nước → bình cất chứa sả → ống sinh hàn (nước vào dưới, ra trên) → bình hứng. Kiểm tra các chỗ nối kín.',
            'Đun sôi nước ở bình cấp hơi và đun nóng bình chứa nguyên liệu. Theo dõi chất lỏng chảy xuống bình hứng.',
            'Khi lớp tinh dầu ở bình hứng không dày thêm, ngừng đun. Chuyển hỗn hợp sang phễu chiết, để yên cho tách lớp, mở khoá xả bỏ lớp nước ở dưới, thu tinh dầu vào lọ tối màu, đậy kín.',
          ],
        },
        {
          type: 'p',
          text: 'Thí nghiệm 2. Tách tinh dầu vỏ cam bằng phương pháp chiết. Chuẩn bị khoảng $100$ g vỏ cam (chỉ lấy phần vỏ màu vàng, bỏ phần cùi trắng) đã phơi khô, máy xay, bình thuỷ tinh có nút, cốc thuỷ tinh, phễu lọc, bông lọc, lọ thuỷ tinh $10$ mL và cồn $96^\\circ$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xay nhỏ vỏ cam khô, cho vào bình thuỷ tinh, rót cồn $96^\\circ$ ngập nguyên liệu, đậy nút kín.',
            'Ngâm khoảng $1$ tuần, thỉnh thoảng lắc bình.',
            'Lọc lấy dịch chiết qua bông lọc.',
            'Để dịch chiết trong cốc ở nơi thoáng cho cồn bay hơi dần (tránh xa lửa) đến khi còn lại chất lỏng sánh màu vàng, có mùi thơm là tinh dầu cam.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cồn dễ cháy: không để gần ngọn lửa. Hơi nước và bình cất rất nóng: dùng kẹp, găng tay chịu nhiệt; không đun khi các chỗ nối chưa kín hoặc ống sinh hàn chưa có nước chảy.',
        },
        {
          type: 'p',
          text: 'Báo cáo thực hành gồm: mục tiêu; nguyên liệu, dụng cụ, hoá chất; cách tiến hành; kết quả (thể tích, khối lượng tinh dầu, hiệu suất, màu, mùi); thảo luận và đánh giá (so sánh hai phương pháp, giải thích các thao tác); kết luận.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ chưng cất lôi cuốn hơi nước ảo',
    instruction:
      'Lắp bốn bộ phận theo đường đi của hơi nước, rồi vận hành: chọn nguyên liệu, cách xử lí nguyên liệu, chiều nước làm lạnh và kéo thanh thời gian. Theo dõi nhiệt độ của hơi và lớp tinh dầu ở bình hứng. Điều gì xảy ra khi giã nát sả, hoặc khi cho nước làm lạnh vào từ đầu trên?',
  },
  examples: [
    {
      problem:
        'Chưng cất lôi cuốn hơi nước $200$ g sả chanh thu được $0{,}90$ mL tinh dầu. Biết khối lượng riêng của tinh dầu sả là $0{,}89$ g/mL. Tính hiệu suất tách tinh dầu (theo khối lượng nguyên liệu).',
      steps: [
        'Khối lượng tinh dầu: $m = D \\cdot V = 0{,}89 \\cdot 0{,}90 = 0{,}801$ g.',
        'Hiệu suất: $H = \\dfrac{0{,}801}{200} \\cdot 100\\% \\approx 0{,}40\\%$.',
      ],
      answer: 'Hiệu suất khoảng $0{,}40\\%$: tinh dầu chỉ chiếm phần rất nhỏ khối lượng cây.',
    },
    {
      problem:
        'Limonene, thành phần chính của tinh dầu vỏ bưởi, sôi ở $176\\ ^\\circ\\mathrm{C}$. Ở $97\\ ^\\circ\\mathrm{C}$, áp suất hơi của nước là $90{,}9$ kPa và của limonene là $10{,}4$ kPa. Giải thích vì sao khi chưng cất lôi cuốn hơi nước vỏ bưởi, hỗn hợp sôi ở khoảng $97\\ ^\\circ\\mathrm{C}$.',
      steps: [
        'Nước và limonene không tan vào nhau, mỗi chất bay hơi độc lập; áp suất hơi của hỗn hợp là tổng áp suất hơi của hai chất.',
        'Ở $97\\ ^\\circ\\mathrm{C}$: $p = 90{,}9 + 10{,}4 = 101{,}3$ kPa, bằng áp suất khí quyển.',
        'Chất lỏng sôi khi áp suất hơi bằng áp suất bên ngoài, nên hỗn hợp sôi ở $97\\ ^\\circ\\mathrm{C}$, thấp hơn cả nhiệt độ sôi của nước.',
      ],
      answer:
        'Hỗn hợp sôi ở khoảng $97\\ ^\\circ\\mathrm{C}$ vì tổng áp suất hơi của nước và limonene đạt $101{,}3$ kPa; limonene được cất ra ở nhiệt độ thấp hơn nhiều so với $176\\ ^\\circ\\mathrm{C}$.',
    },
    {
      problem:
        'Ngâm $100$ g vỏ cam khô đã xay trong cồn $96^\\circ$, lọc rồi cho cồn bay hơi, thu được $2{,}4$ g tinh dầu. Tính hiệu suất tách và giải thích vì sao phải xay nhỏ vỏ cam.',
      steps: [
        '$H = \\dfrac{2{,}4}{100} \\cdot 100\\% = 2{,}4\\%$.',
        'Xay nhỏ làm vỡ các túi tinh dầu và tăng diện tích tiếp xúc giữa nguyên liệu và dung môi, tinh dầu tan vào cồn nhanh và nhiều hơn.',
      ],
      answer: 'Hiệu suất $2{,}4\\%$; xay nhỏ để tinh dầu thoát ra và hoà tan vào cồn dễ hơn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những đặc điểm nào đúng với tinh dầu?',
      options: [
        'Dễ bay hơi, có mùi thơm đặc trưng.',
        'Tan tốt trong ethanol.',
        'Tan nhiều trong nước.',
        'Là một chất tinh khiết.',
        'Phần lớn nhẹ hơn nước.',
      ],
      answers: [0, 1, 4],
      hints: ['Tinh dầu là hỗn hợp nhiều chất hữu cơ, ít phân cực.'],
      solution:
        'Tinh dầu là hỗn hợp nhiều chất hữu cơ dễ bay hơi, có mùi thơm, tan trong ethanol, rất ít tan trong nước và phần lớn nhẹ hơn nước.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi nguồn tinh dầu với thành phần chính của nó.',
      left: ['Sả chanh', 'Vỏ cam', 'Lá bạc hà', 'Vỏ quế', 'Nụ đinh hương'],
      right: ['Citral', 'Limonene', 'Menthol', 'Cinnamaldehyde', 'Eugenol'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Tên tiếng Anh của bạc hà là mint, của quế là cinnamon, của chanh là lemon.'],
      solution:
        'Sả chanh – citral; vỏ cam – limonene; bạc hà – menthol; quế – cinnamaldehyde; đinh hương – eugenol.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bộ phận của bộ chưng cất lôi cuốn hơi nước theo đường đi của hơi nước.',
      items: ['Ống sinh hàn', 'Bình hứng', 'Bình cấp hơi nước', 'Bình cất chứa nguyên liệu'],
      answer: [2, 3, 0, 1],
      hints: ['Hơi nước phải được tạo ra trước, rồi mới đi qua nguyên liệu.'],
      solution: 'Bình cấp hơi nước → bình cất chứa nguyên liệu → ống sinh hàn → bình hứng.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao khi chưng cất lôi cuốn hơi nước, tinh dầu sả (thành phần chính sôi trên $200\\ ^\\circ\\mathrm{C}$) được cất ra ở dưới $100\\ ^\\circ\\mathrm{C}$?',
      options: [
        'Vì hỗn hợp hai chất lỏng không tan vào nhau sôi khi tổng áp suất hơi của chúng bằng áp suất khí quyển.',
        'Vì hơi nước phản ứng với tinh dầu tạo chất dễ bay hơi.',
        'Vì tinh dầu tan hoàn toàn trong nước sôi.',
        'Vì nhiệt độ sôi của tinh dầu giảm khi bị cắt nhỏ.',
      ],
      answer: 0,
      hints: ['Một chất lỏng sôi khi áp suất hơi của nó bằng áp suất bên ngoài.'],
      solution:
        'Nước và tinh dầu không tan vào nhau nên áp suất hơi của chúng cộng lại; tổng đạt $101{,}3$ kPa ở nhiệt độ thấp hơn $100\\ ^\\circ\\mathrm{C}$, nên hỗn hợp sôi và tinh dầu bị cuốn theo hơi nước.',
    },
    {
      type: 'number',
      prompt:
        'Ở $97\\ ^\\circ\\mathrm{C}$ áp suất hơi của nước là $90{,}9$ kPa. Để hỗn hợp nước – tinh dầu sôi ở nhiệt độ này dưới áp suất $101{,}3$ kPa, áp suất hơi của tinh dầu phải bằng bao nhiêu kPa?',
      answer: 10.4,
      tolerance: 0.01,
      unit: 'kPa',
      hints: ['Hỗn hợp sôi khi tổng hai áp suất hơi bằng áp suất bên ngoài.'],
      solution: '$p_{\\text{tinh dầu}} = 101{,}3 - 90{,}9 = 10{,}4$ kPa.',
    },
    {
      type: 'number',
      prompt:
        'Chưng cất $250$ g sả chanh thu được $1{,}2$ mL tinh dầu có khối lượng riêng $0{,}89$ g/mL. Tính hiệu suất tách tinh dầu (theo %, làm tròn đến hàng phần trăm).',
      answer: 0.43,
      tolerance: 0.005,
      unit: '%',
      hints: [
        'Đổi thể tích ra khối lượng: $m = D \\cdot V$.',
        '$m = 0{,}89 \\cdot 1{,}2 = 1{,}068$ g.',
      ],
      solution:
        '$m = 0{,}89 \\cdot 1{,}2 = 1{,}068$ g; $H = \\dfrac{1{,}068}{250} \\cdot 100\\% \\approx 0{,}43\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải cắt sả thành đoạn khoảng $1$ cm mà không giã nát?',
      options: [
        'Cắt nhỏ giúp hơi nước dễ đi qua và làm vỡ túi tinh dầu; giã nát làm tinh dầu bay hơi mất và nguyên liệu bết lại.',
        'Giã nát làm tinh dầu bị oxi hoá thành chất khác ngay lập tức.',
        'Cắt nhỏ làm tăng nhiệt độ sôi của tinh dầu.',
        'Sả để nguyên đoạn dài cho nhiều tinh dầu hơn.',
      ],
      answer: 0,
      hints: ['Nghĩ đến diện tích tiếp xúc với hơi nước và lượng tinh dầu thất thoát khi giã.'],
      solution:
        'Đoạn $1$ cm đủ nhỏ để hơi nước tiếp xúc tốt và làm vỡ túi tinh dầu; giã nát làm tinh dầu bay hơi ngay trong lúc giã, nguyên liệu bết lại cản hơi nước.',
    },
    {
      type: 'choice',
      prompt: 'Trong ống sinh hàn, nước làm lạnh nên đi theo chiều nào?',
      options: [
        'Vào ở đầu dưới, ra ở đầu trên.',
        'Vào ở đầu trên, ra ở đầu dưới.',
        'Chiều nào cũng như nhau.',
        'Không cần cho nước chảy, chỉ cần đổ đầy một lần.',
      ],
      answer: 0,
      hints: ['Nước chảy từ trên xuống sẽ thoát nhanh và không lấp đầy ống.'],
      solution:
        'Nước vào dưới, ra trên thì ống sinh hàn luôn đầy nước và nước lạnh gặp hơi ngược chiều, hơi được ngưng tụ hết.',
    },
    {
      type: 'multi',
      prompt: 'Trong thí nghiệm tách tinh dầu vỏ cam bằng cồn, những thao tác nào là đúng?',
      options: [
        'Chỉ lấy phần vỏ màu vàng, bỏ phần cùi trắng.',
        'Xay nhỏ vỏ cam khô trước khi ngâm.',
        'Đun sôi dịch chiết trên ngọn lửa để cồn bay hơi nhanh.',
        'Ngâm trong bình đậy nút kín khoảng một tuần.',
        'Rót nước thay cho cồn vì nước rẻ hơn.',
      ],
      answers: [0, 1, 3],
      hints: ['Tinh dầu tập trung ở đâu trong vỏ cam? Cồn có cháy không?'],
      solution:
        'Phần vỏ vàng chứa nhiều tinh dầu, cùi trắng hầu như không có; xay nhỏ để tinh dầu dễ tan vào cồn; ngâm kín để cồn và tinh dầu không bay hơi. Cồn dễ cháy nên không đun trên lửa, và tinh dầu không tan trong nước.',
    },
    {
      type: 'choice',
      prompt: 'Nên dùng phương pháp nào để lấy tinh dầu hoa nhài dùng trong nước hoa?',
      options: [
        'Phương pháp chiết bằng dung môi ở nhiệt độ thường.',
        'Chưng cất lôi cuốn hơi nước trong nhiều giờ.',
        'Đốt hoa và thu khói.',
        'Đun hoa với dung dịch NaOH.',
      ],
      answer: 0,
      hints: ['Hương hoa nhài dễ bị phá huỷ khi đun nóng lâu.'],
      solution:
        'Hương của hoa nhài dễ bị phá huỷ ở nhiệt độ cao, nên người ta chiết bằng dung môi ở nhiệt độ thường để giữ mùi thơm tự nhiên.',
    },
    {
      type: 'text',
      prompt: 'Sau khi chưng cất, dùng dụng cụ nào để tách lớp tinh dầu khỏi lớp nước ở bình hứng?',
      accept: ['phễu chiết', 'phễu chiết quả lê', 'phễu tách'],
      hints: ['Dụng cụ có khoá ở đáy, cho chất lỏng ở lớp dưới chảy ra trước.'],
      solution:
        'Dùng phễu chiết: để yên cho hỗn hợp tách lớp, mở khoá xả lớp nước ở dưới, giữ lại tinh dầu ở trên.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao tinh dầu sả chanh được đựng trong lọ thuỷ tinh tối màu, nút kín?',
      options: [
        'Để hạn chế tinh dầu bay hơi và bị oxi hoá bởi ánh sáng, không khí.',
        'Để tinh dầu không bị đông đặc.',
        'Để tinh dầu tan dần vào thuỷ tinh.',
        'Vì tinh dầu có màu đen.',
      ],
      answer: 0,
      hints: ['Tinh dầu dễ bay hơi và dễ bị oxi hoá.'],
      solution:
        'Lọ tối màu chắn ánh sáng, nút kín ngăn bay hơi và hạn chế không khí, giữ tinh dầu không bị oxi hoá, mất mùi.',
    },
  ],
  takeaways: [
    'Tinh dầu là hỗn hợp chất hữu cơ dễ bay hơi, có mùi thơm, ít tan trong nước, tan trong ethanol; có trong thân, vỏ, lá, hoa, quả, rễ của cây.',
    'Chưng cất lôi cuốn hơi nước: hỗn hợp nước và tinh dầu sôi khi tổng áp suất hơi bằng áp suất khí quyển, nên tinh dầu được cất ra dưới $100\\ ^\\circ\\mathrm{C}$; tách lớp tinh dầu bằng phễu chiết.',
    'Phương pháp chiết: ngâm nguyên liệu nghiền nhỏ trong dung môi, lọc, cho dung môi bay hơi; làm ở nhiệt độ thường, hợp với hoa.',
    'Cắt nhỏ (không giã nát) nguyên liệu, nước làm lạnh vào dưới ra trên, bảo quản tinh dầu trong lọ tối màu, nút kín.',
  ],
};
