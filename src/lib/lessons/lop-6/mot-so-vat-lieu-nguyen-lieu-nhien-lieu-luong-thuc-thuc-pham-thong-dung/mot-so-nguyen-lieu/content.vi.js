/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên liệu là vật liệu thô có sẵn trong tự nhiên, cần được chế biến để tạo ra sản phẩm; đá vôi, quặng, dầu mỏ là những nguyên liệu quan trọng, có hạn, nên phải khai thác và sử dụng hợp lí, tiết kiệm.',
  intro:
    'Ngôi nhà em ở được xây bằng xi măng, gạch, cát và thép; chiếc nồi làm bằng nhôm; chai nước làm bằng nhựa. Những thứ ấy đến từ đâu? Xi măng làm từ đá vôi, thép làm từ quặng sắt, nhôm làm từ quặng bauxite, nhựa làm từ dầu mỏ. Bài này giúp em biết một số nguyên liệu thông dụng, tính chất, ứng dụng của chúng và vì sao phải khai thác chúng một cách bền vững.',
  objectives: [
    'Nêu được khái niệm nguyên liệu và kể tên một số nguyên liệu thông dụng: đá vôi, quặng, dầu mỏ, cát, đất sét.',
    'Trình bày được một số tính chất và ứng dụng của đá vôi và quặng.',
    'Mô tả được con đường từ nguyên liệu thô đến sản phẩm của một số nguyên liệu.',
    'Đề xuất được cách sử dụng nguyên liệu an toàn, hiệu quả, bảo đảm sự phát triển bền vững.',
  ],
  sections: [
    {
      heading: 'Một số nguyên liệu thông dụng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên liệu',
          text: 'Nguyên liệu là vật liệu tự nhiên (vật liệu thô) chưa qua xử lí và cần được chế biến để tạo thành sản phẩm. Ví dụ: đá vôi là nguyên liệu để sản xuất vôi, xi măng; quặng sắt là nguyên liệu để sản xuất gang, thép; cây mía là nguyên liệu để sản xuất đường.',
        },
        {
          type: 'p',
          text: 'Nguyên liệu được khai thác từ mỏ (đất, đá, quặng, dầu mỏ, khí thiên nhiên), từ nông nghiệp, lâm nghiệp (mía, gỗ, bông) hoặc từ biển (nước biển để làm muối). Cùng một thứ có thể là nguyên liệu, vật liệu hoặc nhiên liệu tuỳ theo cách dùng: gỗ là nguyên liệu để làm giấy, là vật liệu để đóng bàn ghế và là nhiên liệu khi đốt để đun nấu.',
        },
        {
          type: 'table',
          caption: 'Một số nguyên liệu và sản phẩm',
          head: ['Nguyên liệu', 'Sản phẩm chế biến từ nguyên liệu'],
          rows: [
            [
              'Đá vôi',
              'Vôi sống, xi măng, đá xây dựng, bột đá làm chất độn (cao su, sơn, xà phòng)',
            ],
            ['Quặng sắt, quặng bauxite', 'Gang, thép; nhôm'],
            ['Quặng apatite', 'Phân lân'],
            ['Cát, đất sét', 'Thuỷ tinh, gạch, ngói, gốm sứ, xi măng'],
            ['Dầu mỏ', 'Xăng, dầu hoả, dầu diesel, khí đốt, chất dẻo, tơ sợi tổng hợp'],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất và ứng dụng của đá vôi',
      blocks: [
        {
          type: 'p',
          text: 'Đá vôi có thành phần chủ yếu là calcium carbonate ($\\mathrm{CaCO_3}$). Do lẫn tạp chất như đất sét, cát nên đá vôi có nhiều màu: trắng, xám, vàng, hồng, đen. Ở nước ta, núi đá vôi có nhiều ở miền Bắc và Bắc Trung Bộ (Lạng Sơn, Cao Bằng, Ninh Bình, Thanh Hoá) và các đảo ở vịnh Hạ Long, Cát Bà.',
        },
        {
          type: 'p',
          text: 'Thí nghiệm: (1) cho một mẩu đá vôi vào cốc nước, khuấy đều; (2) nhỏ vài giọt giấm (hoặc dung dịch hydrochloric acid loãng) lên mẩu đá vôi; (3) nung mạnh mẩu đá vôi trên ngọn lửa.',
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm với đá vôi',
          head: ['Thí nghiệm', 'Hiện tượng', 'Kết luận'],
          rows: [
            ['Cho đá vôi vào nước', 'Đá vôi không tan', 'Đá vôi không tan trong nước'],
            [
              'Nhỏ giấm lên đá vôi',
              'Sủi bọt khí trên bề mặt đá',
              'Đá vôi tác dụng với acid, tạo khí carbon dioxide',
            ],
            [
              'Nung đá vôi ở nhiệt độ cao',
              'Đá vôi biến thành vôi sống, có khí bay ra',
              'Đá vôi bị phân huỷ bởi nhiệt',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính chất của đá vôi',
          text: 'Đá vôi cứng, không tan trong nước; bị phân huỷ ở nhiệt độ cao tạo thành vôi sống và khí carbon dioxide; tác dụng với acid (giấm) tạo bọt khí carbon dioxide.',
        },
        {
          type: 'p',
          text: 'Sơ đồ nung vôi: đá vôi (calcium carbonate) $\\xrightarrow{\\;t^\\circ\\;}$ vôi sống (calcium oxide) + khí carbon dioxide.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Vì đá vôi tác dụng với acid nên mưa acid làm các tượng, công trình bằng đá vôi bị ăn mòn dần. Vôi sống tác dụng mạnh với nước và toả nhiều nhiệt, nên khi tôi vôi phải cẩn thận, không đến gần hố vôi.',
        },
        {
          type: 'p',
          text: 'Ứng dụng: đá vôi dùng để sản xuất vôi sống, xi măng; đập nhỏ làm đá xây dựng, rải đường, đổ bê tông; nghiền mịn làm chất độn trong cao su, sơn, xà phòng; còn dùng trong sản xuất thuỷ tinh và luyện gang thép.',
        },
      ],
    },
    {
      heading: 'Quặng và dầu mỏ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quặng',
          text: 'Quặng là đất đá chứa khoáng chất có thành phần chất có ích (kim loại hoặc phi kim) với hàm lượng cao, được khai thác và chế biến thành sản phẩm có ích.',
        },
        {
          type: 'table',
          caption: 'Một số quặng ở Việt Nam',
          head: ['Quặng', 'Nơi có nhiều', 'Dùng để sản xuất'],
          rows: [
            ['Quặng sắt (hematite, magnetite)', 'Thái Nguyên, Hà Tĩnh', 'Gang, thép'],
            ['Quặng bauxite (chứa aluminium oxide)', 'Tây Nguyên (Lâm Đồng, Đắk Nông)', 'Nhôm'],
            ['Quặng apatite', 'Lào Cai', 'Phân lân'],
          ],
        },
        {
          type: 'p',
          text: 'Quặng sau khi khai thác được làm giàu (loại bớt đất đá), rồi tinh luyện để lấy kim loại. Thép dùng làm nhà, cầu, xe cộ; nhôm nhẹ, ít bị gỉ, dùng làm nồi, khung cửa, dây điện, vỏ máy bay.',
        },
        {
          type: 'p',
          text: 'Dầu mỏ là chất lỏng sánh, màu nâu đen, không tan trong nước, nhẹ hơn nước. Chưng cất dầu mỏ thu được khí đốt, xăng, dầu hoả, dầu diesel, nhựa đường; chế biến tiếp tạo ra hoá chất cơ bản để sản xuất chất dẻo, tơ sợi, phân bón, thuốc trừ sâu, dược phẩm, mĩ phẩm.',
        },
      ],
    },
    {
      heading: 'Sử dụng nguyên liệu an toàn, hiệu quả và bảo đảm sự phát triển bền vững',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên liệu trong tự nhiên như quặng, đá vôi, dầu mỏ có trữ lượng hữu hạn và không tái tạo được trong thời gian ngắn. Khai thác tràn lan, thủ công gây sạt lở, mất rừng, ô nhiễm đất, nước, không khí và nguy hiểm cho người lao động.',
        },
        {
          type: 'list',
          items: [
            'Khai thác hợp lí, có kế hoạch, theo đúng quy định; không khai thác trái phép.',
            'Dùng công nghệ khai thác, chế biến hiện đại để bảo đảm an toàn và ít hao phí; chế biến sâu để tạo sản phẩm có giá trị cao.',
            'Xử lí chất thải, phục hồi môi trường (trồng lại cây, hoàn thổ) sau khai thác.',
            'Sử dụng tiết kiệm; thu gom, tái chế sản phẩm (lon nhôm, sắt thép phế liệu, nhựa) và tìm nguyên liệu thay thế.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Từ nguyên liệu đến sản phẩm',
    instruction:
      'Chọn một nguyên liệu. Bấm vào mũi tên đầu tiên, dự đoán bước biến đổi, rồi đọc quá trình thật. Mỗi mũi tên chỉ mở sau khi đã mở mũi tên trước nó. Mở hết các bước để xem ứng dụng của sản phẩm.',
  },
  examples: [
    {
      problem:
        'Có hai mẩu đá màu trắng xám, một mẩu là đá vôi, một mẩu là đá thạch anh (không tác dụng với giấm). Làm thế nào để nhận ra mẩu đá vôi?',
      steps: [
        'Đá vôi tác dụng với acid tạo bọt khí carbon dioxide; thạch anh thì không.',
        'Nhỏ vài giọt giấm lên từng mẩu đá và quan sát.',
        'Mẩu đá có sủi bọt khí là đá vôi; mẩu không có hiện tượng gì là thạch anh.',
      ],
      answer: 'Nhỏ giấm: mẩu sủi bọt khí là đá vôi.',
    },
    {
      problem: 'Nêu các bước chính để sản xuất vôi tôi từ đá vôi.',
      steps: [
        'Khai thác đá vôi ở núi đá vôi, đập thành từng tảng vừa.',
        'Nung đá vôi trong lò vôi ở khoảng $900$ °C: đá vôi phân huỷ thành vôi sống và khí carbon dioxide.',
        'Tôi vôi: cho vôi sống vào nước, phản ứng toả nhiều nhiệt, thu được vôi tôi dạng nhão.',
      ],
      answer: 'Đá vôi → (nung) → vôi sống → (cho vào nước) → vôi tôi.',
    },
    {
      problem: 'Vì sao nói tái chế lon nhôm là một cách sử dụng nguyên liệu bền vững?',
      steps: [
        'Nhôm được sản xuất từ quặng bauxite, một nguyên liệu có hạn.',
        'Tách nhôm từ quặng phải dùng điện phân, tốn rất nhiều điện năng, và khai thác quặng làm ô nhiễm môi trường.',
        'Nấu chảy lon nhôm cũ để làm lon mới không cần khai thác thêm quặng và tốn ít năng lượng hơn nhiều.',
      ],
      answer: 'Tái chế giúp tiết kiệm quặng, tiết kiệm năng lượng và giảm ô nhiễm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chính của đá vôi là chất nào?',
      options: ['Sodium chloride', 'Calcium carbonate', 'Aluminium oxide', 'Carbon dioxide'],
      answer: 1,
      hints: ['Công thức của nó là $\\mathrm{CaCO_3}$.'],
      solution:
        'Đá vôi có thành phần chủ yếu là calcium carbonate ($\\mathrm{CaCO_3}$). Sodium chloride là muối ăn; aluminium oxide có trong quặng bauxite.',
    },
    {
      type: 'choice',
      prompt: 'Quặng bauxite được dùng để sản xuất kim loại nào?',
      options: ['Sắt', 'Đồng', 'Nhôm', 'Vàng'],
      answer: 2,
      hints: ['Quặng bauxite chứa nhiều aluminium oxide.'],
      solution: 'Quặng bauxite chứa aluminium oxide, là nguyên liệu để sản xuất nhôm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nguyên liệu với sản phẩm chính được chế biến từ nó.',
      left: ['Đá vôi', 'Quặng sắt', 'Quặng apatite', 'Dầu mỏ', 'Cây mía'],
      right: ['Xi măng', 'Thép', 'Phân lân', 'Xăng', 'Đường', 'Muối ăn'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Muối ăn được làm từ nước biển, không có trong cột nguyên liệu.'],
      solution:
        'Đá vôi → xi măng; quặng sắt → thép; quặng apatite → phân lân; dầu mỏ → xăng; cây mía → đường. Muối ăn làm từ nước biển.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các tính chất đúng của đá vôi.',
      options: [
        'Tan nhiều trong nước',
        'Bị phân huỷ ở nhiệt độ cao tạo thành vôi sống',
        'Tác dụng với giấm tạo bọt khí',
        'Dẫn điện tốt như kim loại',
        'Cứng, được dùng làm đá xây dựng',
      ],
      answers: [1, 2, 4],
      hints: ['Nhớ ba thí nghiệm: cho vào nước, nhỏ giấm, nung nóng.'],
      solution:
        'Đá vôi cứng, không tan trong nước, bị phân huỷ khi nung tạo vôi sống và khí carbon dioxide, tác dụng với giấm tạo bọt khí. Đá vôi không dẫn điện.',
    },
    {
      type: 'text',
      prompt: 'Khi nung đá vôi hoặc nhỏ giấm lên đá vôi, khí thoát ra là khí gì?',
      accept: [
        'carbon dioxide',
        'khí carbon dioxide',
        'CO2',
        'cacbon dioxit',
        'khí cacbonic',
        'cacbonic',
        'khí CO2',
        'carbon đioxide',
        'cacbon đioxit',
      ],
      hints: ['Đây cũng là khí làm đục nước vôi trong.'],
      solution:
        'Khí thoát ra là carbon dioxide ($\\mathrm{CO_2}$). Khi nung: đá vôi → vôi sống + carbon dioxide; khi nhỏ giấm, đá vôi tác dụng với acid cũng giải phóng khí carbon dioxide.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước sản xuất thép từ quặng sắt theo đúng thứ tự.',
      items: [
        'Thổi oxygen vào gang nóng chảy để giảm carbon',
        'Khai thác quặng sắt ở mỏ',
        'Luyện quặng trong lò cao với than cốc, thu được gang',
        'Loại bớt đất đá để làm giàu quặng',
      ],
      answer: [1, 3, 2, 0],
      hints: ['Bắt đầu từ mỏ quặng, kết thúc ở thép.', 'Gang có trước thép.'],
      solution:
        'Khai thác quặng → làm giàu quặng → luyện trong lò cao thành gang → thổi oxygen vào gang để giảm carbon, thu được thép.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao các bức tượng bằng đá vôi để ngoài trời lâu năm bị mòn, mất dần nét chạm khắc?',
      options: [
        'Vì đá vôi tan trong nước mưa thường',
        'Vì mưa acid tác dụng với đá vôi',
        'Vì đá vôi bị nam châm hút',
        'Vì đá vôi cháy dưới ánh nắng',
      ],
      answer: 1,
      hints: ['Đá vôi không tan trong nước nhưng có tác dụng với một loại chất như giấm.'],
      solution:
        'Đá vôi tác dụng với acid. Mưa acid (nước mưa có hoà tan khí thải gây acid) ăn mòn dần bề mặt tượng đá vôi.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm giúp sử dụng nguyên liệu bền vững.',
      options: [
        'Khai thác quặng trái phép, thủ công',
        'Thu gom, tái chế sắt thép phế liệu và lon nhôm',
        'Trồng lại rừng, phục hồi đất sau khi khai thác mỏ',
        'Thải bùn đất của mỏ thẳng ra sông',
        'Dùng công nghệ hiện đại để giảm hao phí khi chế biến',
      ],
      answers: [1, 2, 4],
      hints: ['Việc nào tiết kiệm nguyên liệu hoặc bảo vệ môi trường?'],
      solution:
        'Tái chế, phục hồi môi trường sau khai thác và dùng công nghệ hiện đại là bền vững. Khai thác trái phép và xả thải ra sông gây lãng phí, ô nhiễm và nguy hiểm.',
    },
    {
      type: 'choice',
      prompt: 'Trong câu "Gỗ được dùng để sản xuất giấy", gỗ đóng vai trò gì?',
      options: ['Nhiên liệu', 'Nguyên liệu', 'Lương thực', 'Sản phẩm'],
      answer: 1,
      hints: ['Gỗ là vật liệu thô được chế biến để tạo thành sản phẩm là giấy.'],
      solution:
        'Gỗ là nguyên liệu: nó được chế biến để tạo ra sản phẩm là giấy. Nếu đốt gỗ để đun nấu thì gỗ là nhiên liệu.',
    },
  ],
  takeaways: [
    'Nguyên liệu là vật liệu tự nhiên (vật liệu thô) chưa qua xử lí, cần được chế biến để tạo thành sản phẩm.',
    'Đá vôi (chủ yếu là calcium carbonate) cứng, không tan trong nước, bị nhiệt phân huỷ thành vôi sống và carbon dioxide, tác dụng với acid tạo bọt khí; dùng làm vôi, xi măng, đá xây dựng.',
    'Quặng là đất đá chứa chất có ích với hàm lượng cao: quặng sắt → gang, thép; bauxite → nhôm; apatite → phân lân.',
    'Dầu mỏ được chưng cất thành xăng, dầu, khí đốt và chế biến thành chất dẻo, tơ sợi.',
    'Nguyên liệu có hạn: cần khai thác hợp lí, sử dụng tiết kiệm, tái chế và bảo vệ môi trường.',
  ],
};
