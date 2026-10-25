/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khối lượng là số đo lượng chất của một vật, đơn vị là kilôgam (kg); bài học giới thiệu các loại cân, giới hạn đo và độ chia nhỏ nhất của cân, cách đo bằng cân đồng hồ và cân điện tử.',
  intro:
    'Ra chợ, em thấy người bán dùng cân đồng hồ để cân rau, cân đòn để cân lợn, còn ở tiệm vàng lại dùng một chiếc cân điện tử nhỏ xíu. Vì sao mỗi nơi dùng một loại cân? Trong bài này, em tìm hiểu khối lượng và đơn vị đo khối lượng, cách chọn cân phù hợp với vật cần cân và các bước cân để có kết quả đúng.',
  objectives: [
    'Nêu được khối lượng là số đo lượng chất của một vật và đơn vị đo khối lượng là kilôgam (kg); đổi được giữa tấn, tạ, yến, kg, lạng, g, mg.',
    'Kể được một số loại cân thường dùng, xác định được GHĐ và ĐCNN của cân.',
    'Thực hiện đúng các bước đo khối lượng bằng cân đồng hồ.',
    'Dùng được cân điện tử, biết trừ bì để cân riêng khối lượng của mẫu chất.',
  ],
  sections: [
    {
      heading: 'Khối lượng và đơn vị đo khối lượng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khối lượng',
          text: 'Khối lượng là số đo lượng chất của một vật. Mọi vật đều có khối lượng.',
        },
        {
          type: 'p',
          text: 'Đơn vị đo khối lượng trong hệ đơn vị đo lường chính thức ở nước ta là kilôgam, kí hiệu là $\\mathrm{kg}$. Ngoài ra còn dùng các đơn vị lớn hơn hoặc nhỏ hơn kilôgam:',
        },
        {
          type: 'table',
          caption: 'Các đơn vị đo khối lượng thường dùng',
          head: ['Đơn vị', 'Kí hiệu', 'Đổi'],
          rows: [
            ['tấn', '$\\mathrm{t}$', '$1$ tấn $= 1000\\ \\mathrm{kg}$'],
            ['tạ', '—', '$1$ tạ $= 100\\ \\mathrm{kg}$'],
            ['yến', '—', '$1$ yến $= 10\\ \\mathrm{kg}$'],
            ['kilôgam', '$\\mathrm{kg}$', '$1\\ \\mathrm{kg} = 1000\\ \\mathrm{g}$'],
            ['héctôgam (lạng)', '$\\mathrm{hg}$', '$1$ lạng $= 100\\ \\mathrm{g}$'],
            ['gam', '$\\mathrm{g}$', '$1\\ \\mathrm{g} = 0{,}001\\ \\mathrm{kg}$'],
            ['miligam', '$\\mathrm{mg}$', '$1\\ \\mathrm{mg} = 0{,}001\\ \\mathrm{g}$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Khối lượng tịnh',
          text: 'Trên vỏ hộp sữa có ghi "Khối lượng tịnh: $380$ g". Con số đó chỉ lượng sữa chứa trong hộp, không tính khối lượng của vỏ hộp.',
        },
        {
          type: 'p',
          text: 'Luyện đổi đơn vị khối lượng: trả lời đúng ngay lần đầu để ô kĩ năng chuyển màu xanh.',
        },
        { type: 'widget', name: 'drill' },
      ],
    },
    {
      heading: 'Các loại cân',
      blocks: [
        {
          type: 'p',
          text: 'Người ta đo khối lượng bằng cân. Giống như thước, mỗi chiếc cân có giới hạn đo (GHĐ) là số lớn nhất ghi trên cân và độ chia nhỏ nhất (ĐCNN) là hiệu hai số đo ứng với hai vạch chia liên tiếp trên cân.',
        },
        {
          type: 'table',
          caption: 'Một số loại cân thường dùng',
          head: ['Loại cân', 'Thường dùng để cân'],
          rows: [
            ['Cân đòn', 'Hàng hoá, nông sản, gia súc ở chợ'],
            ['Cân Roberval', 'Vật từ vài trăm gam đến vài chục kilôgam'],
            ['Cân đồng hồ', 'Vật nhỏ, từ vài chục gam đến vài kilôgam'],
            ['Cân y tế (cân sức khoẻ)', 'Khối lượng cơ thể người'],
            ['Cân tạ (cân bàn)', 'Vật nặng: bao gạo, bao xi măng'],
            [
              'Cân điện tử',
              'Vật rất nhẹ, từ vài miligam đến vài trăm gam, độ chính xác cao (dùng trong phòng thực hành, tiệm vàng)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chọn cân phù hợp',
          text: 'Ước lượng khối lượng vật cần cân, rồi chọn cân có GHĐ lớn hơn khối lượng đó và có ĐCNN thích hợp. Cân một vật nặng hơn GHĐ có thể làm hỏng cân.',
        },
      ],
    },
    {
      heading: 'Cách đo khối lượng',
      blocks: [
        { type: 'p', text: 'Đo khối lượng bằng cân đồng hồ theo năm bước:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ước lượng khối lượng của vật để chọn cân có GHĐ và ĐCNN thích hợp.',
            'Vặn ốc điều chỉnh để kim cân chỉ đúng vạch số $0$.',
            'Đặt vật cần cân lên đĩa cân.',
            'Mắt nhìn vuông góc với vạch chia trên mặt cân ở đầu kim cân.',
            'Đọc và ghi kết quả đo khi cân đã ổn định, theo vạch chia gần nhất với đầu kim cân.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Đặt cân trên mặt phẳng nằm ngang và đặt vật ở giữa đĩa cân. Đặt cân trên mặt nghiêng, để vật lệch về một bên đĩa hoặc nhìn chếch mặt số đều làm sai kết quả.',
        },
        {
          type: 'p',
          text: 'Với cân điện tử: bật cân, đặt vật chứa (cốc, giấy cân) lên đĩa, bấm nút trừ bì (TARE) để màn hình về $0{,}0$, rồi mới cho mẫu vật hay hoá chất vào và đọc số trên màn hình. Không đặt hoá chất trực tiếp lên đĩa cân.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cân đồng hồ và cân điện tử ảo',
    instruction:
      'Cân đồng hồ: khi đĩa còn trống, bấm "Vặn ốc" cho kim chỉ đúng vạch $0$; đặt vật lên đĩa, chọn "Nhìn vuông góc", đọc vạch chia gần nhất ở hình phóng to rồi ghi khối lượng theo kilôgam. Thử cả bao gạo $10$ kg để thấy vì sao phải xem GHĐ. Cân điện tử: đặt cốc hoặc giấy cân, bấm "Trừ bì", cho mẫu chất vào rồi ghi khối lượng của riêng mẫu chất.',
  },
  examples: [
    {
      problem: 'Đổi: a) $2$ tấn $350$ kg ra kilôgam; b) $0{,}75$ kg ra gam.',
      steps: [
        'a) $2$ tấn $= 2 \\cdot 1000 = 2000$ kg, nên $2$ tấn $350$ kg $= 2000 + 350 = 2350$ kg.',
        'b) $1$ kg $= 1000$ g, nên $0{,}75$ kg $= 0{,}75 \\cdot 1000 = 750$ g.',
      ],
      answer: 'a) $2350$ kg; b) $750$ g.',
    },
    {
      problem:
        'Mặt số của một cân đồng hồ ghi số lớn nhất là $5$ kg; giữa vạch $1$ kg và vạch $1{,}5$ kg có $10$ khoảng chia. Tìm GHĐ và ĐCNN của cân. Khi cân túi táo, kim nằm giữa vạch $1{,}40$ kg và $1{,}45$ kg, gần vạch $1{,}40$ kg hơn. Ghi kết quả.',
      steps: [
        'GHĐ là số lớn nhất ghi trên cân: $5$ kg.',
        'ĐCNN: $(1{,}5 - 1) : 10 = 0{,}05$ kg $= 50$ g.',
        'Đọc theo vạch chia gần nhất với đầu kim: vạch $1{,}40$ kg.',
      ],
      answer: 'GHĐ $5$ kg, ĐCNN $50$ g; túi táo nặng $1{,}40$ kg.',
    },
    {
      problem:
        'Đặt một cốc thuỷ tinh lên cân điện tử, màn hình chỉ $62{,}3$ g. Quên bấm trừ bì, bạn An cho muối vào cốc và màn hình chỉ $87{,}7$ g. Tính khối lượng muối. Nếu bấm trừ bì trước khi cho muối thì màn hình chỉ bao nhiêu?',
      steps: [
        'Số $87{,}7$ g là khối lượng của cả cốc và muối.',
        'Khối lượng muối: $87{,}7 - 62{,}3 = 25{,}4$ g.',
        'Trừ bì làm màn hình về $0{,}0$ khi trên đĩa chỉ có cốc, nên sau khi cho muối, màn hình chỉ đúng khối lượng muối.',
      ],
      answer: 'Muối nặng $25{,}4$ g; nếu trừ bì trước, màn hình chỉ $25{,}4$ g.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đơn vị đo khối lượng trong hệ đơn vị đo lường chính thức ở nước ta là',
      options: ['gam (g)', 'kilôgam (kg)', 'tấn (t)', 'lạng'],
      answer: 1,
      hints: ['Đơn vị này có kí hiệu gồm hai chữ cái.'],
      solution: 'Đơn vị đo khối lượng chính thức là kilôgam, kí hiệu $\\mathrm{kg}$.',
    },
    {
      type: 'number',
      prompt: 'Đổi $3{,}5$ tạ ra kilôgam.',
      answer: 350,
      unit: 'kg',
      hints: ['$1$ tạ $= 100$ kg.'],
      solution: '$3{,}5 \\cdot 100 = 350$ kg.',
    },
    {
      type: 'number',
      prompt: 'Đổi $2500$ g ra kilôgam.',
      answer: 2.5,
      tolerance: 0.001,
      unit: 'kg',
      hints: ['$1$ kg $= 1000$ g, nên chia cho $1000$.'],
      solution: '$2500 : 1000 = 2{,}5$ kg.',
    },
    {
      type: 'number',
      prompt: 'Mẹ mua $3$ lạng thịt. Khối lượng thịt là bao nhiêu gam?',
      answer: 300,
      unit: 'g',
      hints: ['Lạng là tên thường gọi của héctôgam.', '$1$ lạng $= 100$ g.'],
      solution: '$3$ lạng $= 3 \\cdot 100 = 300$ g.',
    },
    {
      type: 'number',
      prompt:
        'Một xe tải chở $3$ tấn hàng, sau đó chở thêm $8$ tạ. Khối lượng hàng trên xe là bao nhiêu kilôgam?',
      answer: 3800,
      unit: 'kg',
      hints: ['Đổi cả hai về kilôgam: $1$ tấn $= 1000$ kg, $1$ tạ $= 100$ kg.'],
      solution: '$3$ tấn $= 3000$ kg, $8$ tạ $= 800$ kg; $3000 + 800 = 3800$ kg.',
    },
    {
      type: 'choice',
      prompt: 'Trên vỏ một hộp sữa có ghi "Khối lượng tịnh: $380$ g". Con số đó cho biết',
      options: [
        'khối lượng của cả hộp sữa và vỏ hộp',
        'khối lượng của sữa chứa trong hộp',
        'khối lượng của vỏ hộp',
        'thể tích sữa trong hộp',
      ],
      answer: 1,
      hints: ['"Tịnh" nghĩa là chỉ tính phần bên trong, không tính bao bì.'],
      solution: 'Khối lượng tịnh là khối lượng của sữa chứa trong hộp, không tính vỏ hộp.',
    },
    {
      type: 'number',
      prompt:
        'Trên mặt một cân đồng hồ, giữa vạch $1$ kg và vạch $2$ kg có $20$ khoảng chia. ĐCNN của cân là bao nhiêu gam?',
      answer: 50,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        'Lấy hiệu hai số ghi liên tiếp chia cho số khoảng chia giữa chúng.',
        'Đổi $1$ kg ra gam trước khi chia.',
      ],
      solution: '$(2 - 1)$ kg $= 1000$ g; $1000 : 20 = 50$ g.',
    },
    {
      type: 'choice',
      prompt: 'Để cân khối lượng cơ thể một bạn học sinh (khoảng $40$ kg), nên dùng',
      options: [
        'cân điện tử có GHĐ $500$ g, ĐCNN $0{,}1$ g',
        'cân đồng hồ có GHĐ $5$ kg, ĐCNN $50$ g',
        'cân y tế có GHĐ $120$ kg, ĐCNN $0{,}5$ kg',
        'cân tiểu li có GHĐ $200$ g, ĐCNN $0{,}01$ g',
      ],
      answer: 2,
      hints: ['GHĐ của cân phải lớn hơn khối lượng cần đo.'],
      solution:
        'Chỉ cân y tế có GHĐ $120$ kg lớn hơn $40$ kg. Các cân khác có GHĐ quá nhỏ, cân sẽ hỏng hoặc không đọc được.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước đo khối lượng bằng cân đồng hồ theo đúng thứ tự.',
      items: [
        'Đặt vật cần cân lên đĩa cân',
        'Đọc và ghi kết quả khi cân đã ổn định',
        'Ước lượng khối lượng của vật để chọn cân thích hợp',
        'Mắt nhìn vuông góc với vạch chia ở đầu kim cân',
        'Vặn ốc điều chỉnh để kim cân chỉ đúng vạch số $0$',
      ],
      answer: [2, 4, 0, 3, 1],
      hints: [
        'Chọn cân trước, ghi kết quả sau cùng.',
        'Kim phải chỉ vạch $0$ khi đĩa cân còn trống.',
      ],
      solution:
        'Ước lượng và chọn cân; vặn ốc cho kim chỉ vạch $0$; đặt vật lên đĩa; nhìn vuông góc với vạch chia ở đầu kim; đọc và ghi kết quả.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp cân đúng khối lượng bằng cân đồng hồ?',
      options: [
        'Đặt cân trên mặt phẳng nằm ngang',
        'Vặn ốc để kim chỉ vạch $0$ khi đĩa cân còn trống',
        'Đặt vật lệch về một bên đĩa cân',
        'Nhìn vuông góc với mặt số ở đầu kim',
        'Đọc số ngay khi kim còn đang dao động',
      ],
      answers: [0, 1, 3],
      hints: ['Hai việc sai làm kim chỉ sai hoặc làm đọc sai.'],
      solution:
        'Đúng: đặt cân trên mặt phẳng, chỉnh kim về $0$, nhìn vuông góc với mặt số. Sai: đặt vật lệch một bên đĩa và đọc khi kim chưa đứng yên.',
    },
    {
      type: 'number',
      prompt:
        'Đặt một cốc rỗng lên cân điện tử, màn hình chỉ $48{,}2$ g. Rót nước vào cốc, màn hình chỉ $173{,}7$ g. Khối lượng nước trong cốc là bao nhiêu gam?',
      answer: 125.5,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Số $173{,}7$ g là khối lượng của cả cốc và nước.'],
      solution: '$173{,}7 - 48{,}2 = 125{,}5$ g.',
    },
    {
      type: 'choice',
      prompt: 'Khi dùng cân điện tử trong phòng thực hành để cân muối ăn, việc làm nào là sai?',
      options: [
        'Đặt giấy cân lên đĩa rồi bấm nút trừ bì (TARE)',
        'Đổ muối trực tiếp lên đĩa cân',
        'Dùng thìa lấy muối cho vào giấy cân',
        'Đọc số khi số trên màn hình đã đứng yên',
      ],
      answer: 1,
      hints: ['Hoá chất có thể làm bẩn và ăn mòn đĩa cân.'],
      solution:
        'Không đổ hoá chất trực tiếp lên đĩa cân; phải đặt vật chứa (giấy cân, cốc), trừ bì rồi mới cho hoá chất vào.',
    },
  ],
  takeaways: [
    'Khối lượng là số đo lượng chất của một vật; đơn vị chính thức là kilôgam (kg).',
    '$1$ tấn $= 1000$ kg; $1$ tạ $= 100$ kg; $1$ yến $= 10$ kg; $1$ kg $= 1000$ g; $1$ lạng $= 100$ g; $1$ g $= 1000$ mg.',
    'Chọn cân có GHĐ lớn hơn khối lượng cần đo và ĐCNN thích hợp.',
    'Cân đồng hồ: chỉnh kim về vạch $0$, đặt vật lên đĩa, nhìn vuông góc với vạch chia ở đầu kim, đọc theo vạch gần nhất khi cân ổn định.',
    'Cân điện tử: đặt vật chứa, trừ bì, rồi mới cho mẫu vào và đọc số.',
  ],
};
