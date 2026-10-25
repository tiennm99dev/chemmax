/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kính hiển vi quang học phóng to ảnh của vật từ 40 đến 3 000 lần; bài học giới thiệu bốn hệ thống của kính, các bước quan sát mẫu vật bằng ốc to và ốc nhỏ, cách tính độ phóng đại và cách bảo quản kính.',
  intro:
    'Kính lúp giúp em thấy rõ chân con kiến, nhưng không đủ để nhìn thấy các tế bào tạo nên vảy hành hay chiếc lá: chúng nhỏ hơn một phần mười milimét. Để quan sát những vật nhỏ như vậy, các nhà khoa học dùng kính hiển vi quang học, có thể phóng to ảnh hàng trăm, hàng nghìn lần. Trong bài này, em tìm hiểu kính hiển vi gồm những bộ phận nào, các bước lấy nét một mẫu vật và cách giữ gìn chiếc kính quý giá này.',
  objectives: [
    'Nêu được cấu tạo của kính hiển vi quang học gồm bốn hệ thống: giá đỡ, phóng đại, chiếu sáng, điều chỉnh.',
    'Trình bày được các bước sử dụng kính hiển vi để quan sát một tiêu bản.',
    'Tính được độ phóng đại của kính từ độ phóng đại của vật kính và thị kính.',
    'Nêu được cách bảo quản kính hiển vi.',
  ],
  sections: [
    {
      heading: 'Cấu tạo của kính hiển vi quang học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kính hiển vi quang học',
          text: 'Kính hiển vi quang học là dụng cụ dùng ánh sáng để quan sát những vật rất nhỏ mà mắt thường và kính lúp không nhìn rõ, như tế bào, vi khuẩn. Kính có thể phóng to ảnh của vật từ $40$ đến $3\\,000$ lần.',
        },
        {
          type: 'table',
          caption: 'Bốn hệ thống của kính hiển vi quang học',
          head: ['Hệ thống', 'Bộ phận', 'Tác dụng'],
          rows: [
            [
              'Hệ thống giá đỡ',
              'Chân kính, thân kính, bàn kính, kẹp giữ mẫu',
              'Đỡ kính đứng vững, đặt và giữ tiêu bản',
            ],
            [
              'Hệ thống phóng đại',
              'Thị kính, đĩa quay gắn các vật kính, vật kính',
              'Phóng to ảnh của mẫu vật',
            ],
            [
              'Hệ thống chiếu sáng',
              'Nguồn sáng (đèn hoặc gương), màn chắn sáng',
              'Chiếu sáng mẫu vật, điều chỉnh độ sáng',
            ],
            [
              'Hệ thống điều chỉnh',
              'Ốc to (ốc sơ cấp), ốc nhỏ (ốc vi cấp)',
              'Nâng, hạ để lấy nét: ốc to chỉnh nhanh, ốc nhỏ chỉnh tinh',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thị kính là ống kính em đặt mắt vào để nhìn; vật kính là ống kính nằm gần mẫu vật. Trên mỗi ống kính đều ghi độ phóng đại, ví dụ thị kính $10\\mathrm{x}$, vật kính $4\\mathrm{x}$, $10\\mathrm{x}$, $40\\mathrm{x}$, $100\\mathrm{x}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Độ phóng đại của kính hiển vi',
          text: 'Độ phóng đại của kính bằng tích độ phóng đại của vật kính và độ phóng đại của thị kính. Ví dụ: vật kính $40\\mathrm{x}$, thị kính $10\\mathrm{x}$ cho ảnh phóng to $40 \\cdot 10 = 400$ lần.',
        },
      ],
    },
    {
      heading: 'Các bước sử dụng kính hiển vi',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn vật kính phù hợp với mẫu vật cần quan sát (thường bắt đầu với vật kính có độ phóng đại nhỏ nhất).',
            'Điều chỉnh ánh sáng cho thích hợp với vật kính (bật đèn, mở màn chắn sáng).',
            'Đặt tiêu bản lên bàn kính sao cho mẫu vật nằm ở trung tâm, dùng kẹp giữ tiêu bản.',
            'Mắt nhìn từ bên ngoài, vặn ốc to theo chiều hạ vật kính xuống cho đến khi vật kính gần sát lá kính của tiêu bản.',
            'Mắt nhìn vào thị kính, vặn ốc to theo chiều ngược lại (nâng vật kính lên) cho đến khi nhìn thấy mẫu vật.',
            'Vặn ốc nhỏ thật chậm, đến khi nhìn rõ mẫu vật.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không vặn ốc to hạ vật kính xuống trong khi mắt đang nhìn vào thị kính: vật kính có thể đâm vào tiêu bản, làm vỡ lá kính và hỏng vật kính. Với vật kính có độ phóng đại lớn, khoảng cách lấy nét rất nhỏ, nên chỉ dùng ốc nhỏ để lấy nét.',
        },
        {
          type: 'p',
          text: 'Độ phóng đại càng lớn thì vùng nhìn thấy (thị trường) càng hẹp, ảnh càng tối và khoảng rõ nét càng mỏng. Vì vậy khi đổi sang vật kính lớn hơn, cần tăng ánh sáng và lấy nét lại bằng ốc nhỏ.',
        },
      ],
    },
    {
      heading: 'Bảo quản kính hiển vi',
      blocks: [
        {
          type: 'list',
          items: [
            'Khi di chuyển kính phải dùng cả hai tay: một tay cầm chắc thân kính, một tay đỡ chân kính.',
            'Đặt kính trên mặt bàn phẳng, chắc chắn; không để tay ướt hoặc bẩn chạm vào kính.',
            'Lau thị kính và vật kính bằng giấy lau kính chuyên dụng trước và sau khi dùng.',
            'Sau khi dùng, hạ bàn kính, tháo tiêu bản, xoay vật kính nhỏ nhất vào vị trí, che phủ và cất kính nơi khô ráo.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lấy nét tế bào vảy hành',
    instruction:
      'Bắt đầu với vật kính $4\\mathrm{x}$: bấm "Hạ xuống" ở ốc to cho đến khi thấy các tế bào. Sau đó chuyển sang vật kính $10\\mathrm{x}$ rồi $40\\mathrm{x}$: ốc to mỗi nấc 1 mm có lấy nét được không? Dùng ốc nhỏ để lấy nét, mở rộng màn chắn khi ảnh tối. Cẩn thận: hạ vật kính quá sát sẽ chạm vào tiêu bản.',
  },
  examples: [
    {
      problem:
        'Quan sát tế bào bằng kính hiển vi có thị kính $10\\mathrm{x}$ và vật kính $40\\mathrm{x}$. Một tế bào dài $0{,}05$ mm. Tính độ phóng đại của kính và chiều dài ảnh của tế bào mà em nhìn thấy.',
      steps: [
        'Độ phóng đại của kính: $40 \\cdot 10 = 400$ lần.',
        'Chiều dài ảnh: $0{,}05 \\cdot 400 = 20$ mm.',
      ],
      answer: 'Kính phóng to $400$ lần; tế bào trông dài khoảng $20$ mm, tức $2$ cm.',
    },
    {
      problem:
        'Kính hiển vi có thị kính $10\\mathrm{x}$ và ba vật kính $4\\mathrm{x}$, $10\\mathrm{x}$, $40\\mathrm{x}$. Muốn quan sát ảnh phóng to $100$ lần thì chọn vật kính nào? Tính độ phóng đại lớn nhất mà kính có thể cho.',
      steps: [
        'Độ phóng đại vật kính cần chọn: $100 : 10 = 10$, tức vật kính $10\\mathrm{x}$.',
        'Độ phóng đại lớn nhất dùng vật kính lớn nhất: $40 \\cdot 10 = 400$ lần.',
      ],
      answer: 'Chọn vật kính $10\\mathrm{x}$; kính phóng to tối đa $400$ lần.',
    },
    {
      problem:
        'Bạn Nam đặt tiêu bản lên bàn kính, mắt nhìn vào thị kính rồi vặn ốc to hạ vật kính xuống thật nhanh. Bạn làm sai ở đâu và cần sửa thế nào?',
      steps: [
        'Khi mắt nhìn vào thị kính, Nam không thấy vật kính đang tiến sát lá kính, nên vật kính dễ đâm vào tiêu bản.',
        'Đúng là: nhìn từ bên ngoài khi vặn ốc to hạ vật kính đến gần sát lá kính.',
        'Sau đó mới nhìn vào thị kính, vặn ốc to nâng vật kính lên đến khi thấy mẫu, rồi vặn ốc nhỏ thật chậm để nhìn rõ.',
      ],
      answer:
        'Nam hạ vật kính trong khi nhìn vào thị kính. Phải nhìn từ ngoài khi hạ vật kính, rồi mới nhìn vào thị kính và nâng dần vật kính lên để lấy nét.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Kính hiển vi quang học có thể phóng to ảnh của vật từ',
      options: ['3 đến 20 lần', '40 đến 3 000 lần', '1 đến 10 lần', '10 000 đến 100 000 lần'],
      answer: 1,
      hints: ['Từ 3 đến 20 lần là kính lúp.'],
      solution: 'Kính hiển vi quang học phóng to ảnh của vật từ $40$ đến $3\\,000$ lần.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận với hệ thống của kính hiển vi chứa nó.',
      left: ['Thị kính', 'Ốc nhỏ', 'Màn chắn sáng', 'Bàn kính'],
      right: [
        'Hệ thống chiếu sáng',
        'Hệ thống giá đỡ',
        'Hệ thống phóng đại',
        'Hệ thống điều chỉnh',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: [
        'Bộ phận nào giúp phóng to? Bộ phận nào để nâng, hạ? Bộ phận nào liên quan đến ánh sáng?',
      ],
      solution:
        'Thị kính: hệ thống phóng đại. Ốc nhỏ: hệ thống điều chỉnh. Màn chắn sáng: hệ thống chiếu sáng. Bàn kính: hệ thống giá đỡ.',
    },
    {
      type: 'number',
      prompt:
        'Thị kính ghi $10\\mathrm{x}$, vật kính ghi $40\\mathrm{x}$. Kính phóng to ảnh bao nhiêu lần?',
      answer: 400,
      hints: ['Nhân độ phóng đại của vật kính với độ phóng đại của thị kính.'],
      solution: '$40 \\cdot 10 = 400$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Thị kính ghi $15\\mathrm{x}$, vật kính ghi $100\\mathrm{x}$. Kính phóng to ảnh bao nhiêu lần?',
      answer: 1500,
      hints: ['Độ phóng đại = vật kính × thị kính.'],
      solution: '$100 \\cdot 15 = 1\\,500$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Muốn quan sát mẫu vật phóng to $400$ lần bằng thị kính $10\\mathrm{x}$ thì phải dùng vật kính có độ phóng đại bao nhiêu?',
      answer: 40,
      hints: ['Độ phóng đại vật kính = độ phóng đại của kính : độ phóng đại thị kính.'],
      solution: '$400 : 10 = 40$, dùng vật kính $40\\mathrm{x}$.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn dài $0{,}002$ mm được quan sát ở độ phóng đại $1\\,000$ lần. Ảnh của vi khuẩn dài bao nhiêu milimét?',
      answer: 2,
      tolerance: 0.001,
      unit: 'mm',
      hints: ['Chiều dài ảnh = chiều dài thật × độ phóng đại.'],
      solution: '$0{,}002 \\cdot 1\\,000 = 2$ mm.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước quan sát tiêu bản bằng kính hiển vi theo đúng thứ tự.',
      items: [
        'Vặn ốc nhỏ thật chậm đến khi nhìn rõ mẫu vật',
        'Chọn vật kính phù hợp',
        'Đặt tiêu bản lên bàn kính, mẫu vật ở trung tâm, kẹp giữ lại',
        'Nhìn từ ngoài, vặn ốc to hạ vật kính đến gần sát lá kính',
        'Điều chỉnh ánh sáng',
        'Nhìn vào thị kính, vặn ốc to nâng vật kính lên đến khi thấy mẫu vật',
      ],
      answer: [1, 4, 2, 3, 5, 0],
      hints: [
        'Chuẩn bị kính (vật kính, ánh sáng) trước, rồi mới đặt tiêu bản.',
        'Ốc to dùng trước để tìm ảnh, ốc nhỏ dùng sau cùng để lấy nét.',
      ],
      solution:
        'Chọn vật kính; điều chỉnh ánh sáng; đặt và kẹp tiêu bản; nhìn từ ngoài hạ vật kính sát lá kính; nhìn vào thị kính nâng vật kính lên đến khi thấy mẫu; vặn ốc nhỏ để nhìn rõ.',
    },
    {
      type: 'choice',
      prompt: 'Khi đã thấy mẫu vật nhưng ảnh còn hơi mờ, em nên',
      options: [
        'vặn ốc to thật nhanh',
        'vặn ốc nhỏ thật chậm',
        'tháo thị kính ra lau',
        'chuyển ngay sang vật kính lớn nhất',
      ],
      answer: 1,
      hints: ['Một trong hai ốc dùng để chỉnh tinh, từng chút một.'],
      solution: 'Ốc nhỏ (ốc vi cấp) nâng, hạ vật kính từng chút một, dùng để lấy nét rõ mẫu vật.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả những việc làm đúng khi sử dụng và bảo quản kính hiển vi.',
      options: [
        'Dùng hai tay khi di chuyển kính: một tay cầm thân, một tay đỡ chân kính',
        'Lau vật kính bằng giấy lau kính chuyên dụng',
        'Dùng tay ướt chỉnh ốc cho nhanh',
        'Mắt nhìn vào thị kính trong khi hạ vật kính sát tiêu bản',
        'Cất kính nơi khô ráo sau khi dùng',
      ],
      answers: [0, 1, 4],
      hints: ['Kính hiển vi nặng, dễ hỏng và sợ ẩm.'],
      solution:
        'Đúng: dùng hai tay khi di chuyển, lau bằng giấy chuyên dụng, cất nơi khô ráo. Sai: dùng tay ướt chạm vào kính; nhìn vào thị kính khi hạ vật kính (có thể làm vật kính đâm vỡ tiêu bản).',
    },
    {
      type: 'choice',
      prompt: 'Khi chuyển từ vật kính $10\\mathrm{x}$ sang vật kính $40\\mathrm{x}$, ảnh thường',
      options: [
        'to hơn, sáng hơn và vùng nhìn thấy rộng hơn',
        'to hơn, tối hơn và vùng nhìn thấy hẹp hơn',
        'nhỏ hơn và sáng hơn',
        'không thay đổi',
      ],
      answer: 1,
      hints: ['Phóng to hơn thì mắt chỉ thấy một phần nhỏ hơn của mẫu vật.'],
      solution:
        'Độ phóng đại lớn hơn thì ảnh to hơn nhưng thị trường hẹp hơn và tối hơn, nên cần tăng ánh sáng và lấy nét lại bằng ốc nhỏ.',
    },
  ],
  takeaways: [
    'Kính hiển vi quang học phóng to ảnh từ $40$ đến $3\\,000$ lần, dùng để quan sát tế bào, vi khuẩn.',
    'Bốn hệ thống: giá đỡ (chân, thân, bàn kính, kẹp), phóng đại (thị kính, vật kính), chiếu sáng (nguồn sáng, màn chắn), điều chỉnh (ốc to, ốc nhỏ).',
    'Độ phóng đại của kính = độ phóng đại vật kính × độ phóng đại thị kính.',
    'Các bước: chọn vật kính; chỉnh ánh sáng; đặt tiêu bản; nhìn ngoài hạ vật kính sát lá kính; nhìn vào thị kính nâng vật kính đến khi thấy mẫu; vặn ốc nhỏ để nhìn rõ.',
    'Di chuyển kính bằng hai tay, lau bằng giấy chuyên dụng, cất nơi khô ráo.',
  ],
};
