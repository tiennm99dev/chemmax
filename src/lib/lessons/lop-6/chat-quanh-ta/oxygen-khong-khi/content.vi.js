/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Oxygen là chất khí không màu, không mùi, ít tan trong nước, cần cho sự sống và sự cháy; không khí là hỗn hợp gồm khoảng 78% nitrogen, 21% oxygen và 1% các khí khác, cần được bảo vệ khỏi ô nhiễm.',
  intro:
    'Một người có thể nhịn ăn vài tuần, nhịn uống vài ngày, nhưng chỉ nhịn thở được vài phút. Úp một chiếc cốc lên cây nến đang cháy, chỉ ít giây sau nến tắt. Cả hai đều cần một chất có trong không khí: oxygen. Trong bài này, em tìm hiểu oxygen có tính chất gì, vai trò ra sao, không khí gồm những chất nào và làm thế nào để giữ cho không khí trong lành.',
  objectives: [
    'Nêu được một số tính chất vật lí của oxygen (trạng thái, màu sắc, tính tan,...).',
    'Nêu được tầm quan trọng của oxygen đối với sự sống, sự cháy và quá trình đốt nhiên liệu.',
    'Nêu được thành phần của không khí theo thể tích; tiến hành được thí nghiệm đơn giản xác định thành phần phần trăm thể tích của oxygen trong không khí.',
    'Trình bày được vai trò của không khí, nguyên nhân gây ô nhiễm không khí và một số biện pháp bảo vệ môi trường không khí.',
  ],
  sections: [
    {
      heading: 'Oxygen',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tính chất vật lí của oxygen',
          text: 'Ở điều kiện thường, oxygen ($\\mathrm{O_2}$) là chất khí, không màu, không mùi, không vị, ít tan trong nước và nặng hơn không khí. Oxygen hoá lỏng ở $-183$ °C và hoá rắn ở $-218$ °C; ở thể lỏng và thể rắn, oxygen có màu xanh nhạt.',
        },
        {
          type: 'p',
          text: 'Vì nước hoà tan được một lượng nhỏ oxygen, cá và các loài thuỷ sinh sống được trong nước. Người ta dùng máy sục khí vào bể cá cảnh để tăng lượng oxygen hoà tan.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tầm quan trọng của oxygen',
          text: 'Oxygen duy trì sự sống: mọi loài động vật và thực vật đều cần oxygen cho quá trình hô hấp. Oxygen duy trì sự cháy: nhiên liệu (than, củi, xăng, gas) chỉ cháy được khi có oxygen; sự cháy cung cấp năng lượng cho đun nấu, sản xuất và giao thông.',
        },
        {
          type: 'list',
          items: [
            'Trong y tế: bình oxygen giúp bệnh nhân khó thở; thợ lặn, phi hành gia mang theo bình chứa oxygen.',
            'Trong công nghiệp: thổi oxygen vào lò luyện gang, thép; dùng đèn xì oxygen để hàn, cắt kim loại.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tam giác lửa',
          text: 'Muốn có sự cháy cần đủ ba yếu tố: chất cháy (nhiên liệu), nhiệt độ đủ cao và oxygen. Thiếu một trong ba yếu tố, đám cháy sẽ tắt. Vì vậy, phủ chăn ướt hoặc cát lên đám cháy nhỏ để ngăn oxygen tiếp xúc với chất cháy.',
        },
      ],
    },
    {
      heading: 'Không khí',
      blocks: [
        {
          type: 'p',
          text: 'Không khí bao quanh Trái Đất là một hỗn hợp nhiều chất khí. Không khí không màu, không mùi, không vị.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thành phần của không khí (theo thể tích)',
          text: 'Khoảng $78\\%$ là nitrogen, $21\\%$ là oxygen, $1\\%$ còn lại là carbon dioxide, hơi nước và các khí khác (khí hiếm như argon,...).',
        },
        { type: 'widget', name: 'thanh-phan' },
        {
          type: 'p',
          text: 'Thí nghiệm xác định thành phần phần trăm thể tích oxygen trong không khí: gắn cây nến vào giữa một chậu thuỷ tinh, đổ nước vào chậu. Châm cho nến cháy rồi úp một cốc thuỷ tinh (đã chia vạch thành năm phần bằng nhau) lên cây nến.',
        },
        {
          type: 'list',
          items: [
            'Hiện tượng: ngọn lửa nhỏ dần rồi tắt; nước trong chậu dâng lên trong cốc khoảng $\\dfrac{1}{5}$ thể tích cốc.',
            'Giải thích: nến cháy đã dùng hết oxygen trong cốc, nước dâng lên chiếm chỗ phần oxygen đó. Khi hết oxygen thì nến tắt.',
            'Kết luận: oxygen chiếm khoảng $\\dfrac{1}{5}$ thể tích không khí (khoảng $21\\%$).',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Đây là thí nghiệm gần đúng: trên thực tế, nến tắt khi oxygen trong cốc đã còn rất ít, và khí trong cốc nóng lên rồi nguội đi cũng làm mực nước thay đổi. Vì vậy kết quả chỉ là "khoảng $\\dfrac{1}{5}$".',
        },
        {
          type: 'table',
          caption: 'Vai trò của không khí',
          head: ['Thành phần', 'Vai trò'],
          rows: [
            ['Oxygen', 'Duy trì sự sống (hô hấp) và sự cháy'],
            [
              'Nitrogen',
              'Khi có sấm sét, một phần nitrogen chuyển hoá thành chất dinh dưỡng cho cây (phân đạm tự nhiên)',
            ],
            ['Carbon dioxide', 'Nguyên liệu cho quá trình quang hợp của cây xanh'],
            [
              'Cả lớp không khí',
              'Điều hoà khí hậu; bảo vệ Trái Đất khỏi thiên thạch (cháy khi ma sát với không khí)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Ô nhiễm không khí và bảo vệ môi trường không khí',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nhiễm không khí',
          text: 'Không khí bị ô nhiễm khi có thêm các chất lạ (khói, bụi, khí độc) hoặc khi thành phần không khí thay đổi so với tự nhiên, gây hại cho sức khoẻ con người, sinh vật và môi trường.',
        },
        {
          type: 'table',
          caption: 'Nguyên nhân gây ô nhiễm không khí',
          head: ['Nguồn', 'Ví dụ'],
          rows: [
            ['Tự nhiên', 'Núi lửa phun trào, cháy rừng, bão cát bụi'],
            [
              'Con người',
              'Khí thải xe cộ, khói nhà máy, đốt rác, đốt rơm rạ, đun than tổ ong, bụi công trình xây dựng',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Biểu hiện: không khí có mùi khó chịu, có màu (khói bụi, sương mù), tầm nhìn bị giảm.',
            'Tác hại: gây bệnh về đường hô hấp; gây mưa acid làm hỏng công trình, cây trồng; lượng carbon dioxide tăng làm tăng hiệu ứng nhà kính, Trái Đất nóng lên.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Biện pháp bảo vệ môi trường không khí',
          text: 'Trồng và bảo vệ cây xanh, rừng; đi bộ, đi xe đạp, dùng phương tiện giao thông công cộng; dùng năng lượng sạch (năng lượng mặt trời, gió); xử lí khí thải nhà máy trước khi thải ra; không đốt rác, rơm rạ bừa bãi; tuyên truyền để mọi người cùng bảo vệ không khí.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thí nghiệm nến cháy trong cốc úp',
    instruction:
      'Chọn cỡ cốc rồi bấm "Úp cốc lên nến". Quan sát ngọn lửa và mực nước trong cốc cho đến khi nến tắt, đọc mực nước theo các vạch $\\dfrac{1}{5}$, $\\dfrac{2}{5}$,... Làm lại với cốc khác cỡ và so sánh thời gian nến cháy trong bảng kết quả. Đây là mô phỏng: thời gian chỉ để so sánh giữa các cốc.',
  },
  examples: [
    {
      problem:
        'Úp một cốc thuỷ tinh có thể tích $500$ mL lên cây nến đang cháy trong chậu nước. Ước tính thể tích nước dâng lên trong cốc khi nến tắt.',
      steps: [
        'Nến tắt khi đã dùng hết oxygen trong cốc; nước dâng lên chiếm chỗ phần oxygen đó.',
        'Oxygen chiếm khoảng $\\dfrac{1}{5}$ thể tích không khí.',
        'Thể tích nước dâng lên khoảng $500 \\cdot \\dfrac{1}{5} = 100$ mL.',
      ],
      answer: 'Khoảng $100$ mL.',
    },
    {
      problem:
        'Một phòng học có thể tích $200$ $\\mathrm{m^3}$ không khí. Tính thể tích oxygen và thể tích nitrogen trong phòng.',
      steps: [
        'Oxygen chiếm $21\\%$: $200 \\cdot 21 : 100 = 42$ $\\mathrm{m^3}$.',
        'Nitrogen chiếm $78\\%$: $200 \\cdot 78 : 100 = 156$ $\\mathrm{m^3}$.',
      ],
      answer: 'Oxygen khoảng $42$ $\\mathrm{m^3}$, nitrogen khoảng $156$ $\\mathrm{m^3}$.',
    },
    {
      problem:
        'Khi chảo dầu trên bếp bị bốc cháy, người ta tắt bếp rồi đậy kín vung (nắp) chảo lại. Giải thích vì sao lửa tắt.',
      steps: [
        'Sự cháy cần đủ ba yếu tố: chất cháy, nhiệt độ cao và oxygen.',
        'Đậy kín vung ngăn không khí (chứa oxygen) tiếp xúc với dầu đang cháy.',
        'Oxygen trong chảo nhanh chóng hết, thiếu oxygen nên lửa tắt. Không được dội nước vào chảo dầu đang cháy vì dầu nổi lên và bắn ra làm cháy lan.',
      ],
      answer: 'Vì vung ngăn oxygen tiếp xúc với chất cháy.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các tính chất vật lí của oxygen ở điều kiện thường.',
      options: [
        'Là chất khí',
        'Không màu, không mùi',
        'Tan nhiều trong nước',
        'Nặng hơn không khí',
        'Có màu xanh nhạt',
      ],
      answers: [0, 1, 3],
      hints: [
        'Oxygen chỉ có màu xanh nhạt ở thể lỏng và thể rắn.',
        'Nước chỉ hoà tan được một lượng nhỏ oxygen.',
      ],
      solution:
        'Ở điều kiện thường, oxygen là chất khí, không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí.',
    },
    {
      type: 'number',
      prompt: 'Oxygen hoá lỏng ở nhiệt độ bao nhiêu độ C?',
      answer: -183,
      unit: '°C',
      hints: ['Nhiệt độ này thấp hơn rất nhiều so với $0$ °C.'],
      solution: 'Oxygen hoá lỏng ở $-183$ °C và hoá rắn ở $-218$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Quá trình nào sau đây cần oxygen?',
      options: ['Hô hấp', 'Nóng chảy', 'Hoà tan đường vào nước', 'Ngưng tụ'],
      answer: 0,
      hints: ['Oxygen duy trì sự sống và sự cháy.'],
      solution:
        'Mọi sinh vật đều cần oxygen để hô hấp. Nóng chảy, hoà tan, ngưng tụ không cần oxygen.',
    },
    {
      type: 'fraction',
      prompt:
        'Oxygen chiếm khoảng bao nhiêu phần thể tích không khí? Viết dưới dạng phân số tối giản.',
      answer: [1, 5],
      simplest: true,
      hints: ['Trong thí nghiệm nến cháy, nước dâng lên đến vạch nào của cốc chia năm phần?'],
      solution: 'Oxygen chiếm khoảng $21\\%$, tức khoảng $\\dfrac{1}{5}$ thể tích không khí.',
    },
    {
      type: 'choice',
      prompt: 'Chất khí chiếm tỉ lệ thể tích lớn nhất trong không khí là',
      options: ['oxygen', 'nitrogen', 'carbon dioxide', 'hơi nước'],
      answer: 1,
      hints: ['Một khí chiếm gần $\\dfrac{4}{5}$ thể tích không khí.'],
      solution: 'Nitrogen chiếm khoảng $78\\%$ thể tích không khí, nhiều nhất.',
    },
    {
      type: 'number',
      prompt:
        'Một bình chứa $50$ lít không khí. Thể tích oxygen trong bình khoảng bao nhiêu lít? (Lấy oxygen chiếm $21\\%$.)',
      answer: 10.5,
      tolerance: 0.01,
      unit: 'lít',
      hints: ['Lấy $50$ nhân với $21$ rồi chia cho $100$.'],
      solution: '$50 \\cdot 21 : 100 = 10{,}5$ lít.',
    },
    {
      type: 'choice',
      prompt:
        'Úp hai cốc thuỷ tinh, một cốc $250$ mL và một cốc $1\\,000$ mL, lên hai cây nến như nhau đang cháy. Kết quả nào đúng?',
      options: [
        'Nến trong cốc nhỏ cháy lâu hơn',
        'Nến trong cốc lớn cháy lâu hơn vì cốc chứa nhiều oxygen hơn',
        'Hai nến tắt cùng lúc',
        'Nến trong cốc lớn cháy mãi không tắt',
      ],
      answer: 1,
      hints: ['Cốc nào chứa nhiều không khí hơn?'],
      solution:
        'Cốc $1\\,000$ mL chứa nhiều không khí, tức nhiều oxygen hơn, nên nến cháy lâu hơn; nhưng khi dùng hết oxygen nến vẫn tắt.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên nhân gây ô nhiễm không khí do con người.',
      options: [
        'Khí thải từ xe máy, ô tô',
        'Núi lửa phun trào',
        'Đốt rơm rạ sau mùa gặt',
        'Khói từ nhà máy chưa qua xử lí',
        'Trồng cây xanh ven đường',
      ],
      answers: [0, 2, 3],
      hints: ['Núi lửa là nguồn tự nhiên; cây xanh làm sạch không khí.'],
      solution:
        'Khí thải xe cộ, đốt rơm rạ, khói nhà máy là nguyên nhân do con người. Núi lửa là nguyên nhân tự nhiên; trồng cây xanh là biện pháp bảo vệ không khí.',
    },
    {
      type: 'choice',
      prompt: 'Việc làm nào sau đây góp phần bảo vệ môi trường không khí?',
      options: [
        'Đốt rác thải sinh hoạt ngay tại nhà',
        'Đi xe đạp hoặc xe buýt đến trường',
        'Chặt cây xanh để mở rộng đường',
        'Đun nấu bằng than tổ ong trong nhà',
      ],
      answer: 1,
      hints: ['Việc làm nào giảm khói và khí thải?'],
      solution:
        'Đi xe đạp, xe buýt giảm khí thải từ xe cá nhân. Đốt rác, chặt cây, đun than tổ ong đều làm không khí ô nhiễm hơn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi khí trong không khí với vai trò của nó.',
      left: ['Oxygen', 'Carbon dioxide', 'Nitrogen'],
      right: [
        'Duy trì sự hô hấp và sự cháy',
        'Nguyên liệu cho quang hợp của cây xanh',
        'Chuyển hoá thành chất dinh dưỡng cho cây khi có sấm sét',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Cây xanh hấp thụ khí nào khi quang hợp?'],
      solution:
        'Oxygen duy trì sự hô hấp và sự cháy; carbon dioxide là nguyên liệu quang hợp; nitrogen chuyển hoá thành chất dinh dưỡng cho cây khi có sấm sét.',
    },
  ],
  takeaways: [
    'Oxygen là chất khí không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí; hoá lỏng ở $-183$ °C.',
    'Oxygen duy trì sự sống (hô hấp) và sự cháy (đốt nhiên liệu).',
    'Không khí là hỗn hợp: khoảng $78\\%$ nitrogen, $21\\%$ oxygen, $1\\%$ các khí khác; oxygen chiếm khoảng $\\dfrac{1}{5}$ thể tích không khí.',
    'Ô nhiễm không khí do nguồn tự nhiên và do con người (khí thải xe cộ, nhà máy, đốt rác), gây bệnh hô hấp, mưa acid, tăng hiệu ứng nhà kính.',
    'Bảo vệ không khí: trồng cây xanh, dùng phương tiện công cộng và năng lượng sạch, xử lí khí thải, không đốt rác bừa bãi.',
  ],
};
