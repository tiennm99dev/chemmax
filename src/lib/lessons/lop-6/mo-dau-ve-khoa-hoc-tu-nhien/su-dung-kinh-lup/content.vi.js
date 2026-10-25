/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kính lúp gồm tay cầm, khung kính và mặt kính lồi, giúp phóng to ảnh của vật nhỏ khoảng 3 đến 20 lần; bài học hướng dẫn cách cầm kính, điều chỉnh khoảng cách để nhìn rõ vật và cách bảo quản kính lúp.',
  intro:
    'Một con kiến chỉ dài vài milimét: bằng mắt thường, em khó nhìn rõ râu, chân hay các đốt trên thân nó. Đặt một tấm kính lồi giữa mắt và con kiến, mọi chi tiết bỗng hiện ra to và rõ. Đó là kính lúp, dụng cụ quan sát đơn giản nhất mà các nhà khoa học tự nhiên vẫn dùng hằng ngày. Trong bài này, em tìm hiểu kính lúp gồm những bộ phận nào, cầm và điều chỉnh kính thế nào để thấy ảnh rõ nét, và giữ gìn kính ra sao.',
  objectives: [
    'Nêu được cấu tạo của kính lúp: tay cầm, khung kính, mặt kính.',
    'Sử dụng được kính lúp: cầm kính, điều chỉnh khoảng cách giữa kính và vật để quan sát rõ vật.',
    'Tính được kích thước ảnh nhìn thấy khi biết độ phóng đại ghi trên kính.',
    'Nêu được cách bảo quản kính lúp.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và công dụng của kính lúp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kính lúp',
          text: 'Kính lúp là dụng cụ dùng để quan sát rõ những vật nhỏ mà mắt thường khó nhìn thấy. Kính lúp có thể phóng to ảnh của vật từ khoảng 3 đến 20 lần.',
        },
        {
          type: 'table',
          caption: 'Ba bộ phận chính của kính lúp',
          head: ['Bộ phận', 'Đặc điểm và tác dụng'],
          rows: [
            [
              'Mặt kính',
              'Tấm kính lồi (dày ở giữa, mỏng ở rìa), trong suốt; tạo ảnh phóng to của vật',
            ],
            ['Khung kính', 'Vành bao quanh, giữ chặt và bảo vệ mặt kính'],
            ['Tay cầm', 'Để cầm kính và di chuyển kính lại gần hoặc ra xa vật'],
          ],
        },
        {
          type: 'p',
          text: 'Trên khung hoặc tay cầm thường ghi độ phóng đại của kính, ví dụ $3\\mathrm{x}$, $5\\mathrm{x}$, $10\\mathrm{x}$. Kính ghi $5\\mathrm{x}$ cho ảnh trông to gấp khoảng $5$ lần so với khi nhìn vật bằng mắt thường.',
        },
        {
          type: 'p',
          text: 'Kính lúp dùng để quan sát côn trùng nhỏ, gân lá, hạt phấn hoa, vân tay, các chữ in rất nhỏ hay các chi tiết trong đồng hồ, bảng mạch điện.',
        },
      ],
    },
    {
      heading: 'Cách sử dụng kính lúp',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Đặt vật cần quan sát lên mặt bàn hoặc tờ giấy trắng, nơi có đủ ánh sáng.',
            'Một tay cầm kính lúp, đặt mặt kính gần sát vật mẫu.',
            'Mắt nhìn vào mặt kính, từ từ đưa kính ra xa vật cho đến khi nhìn thấy ảnh của vật to và rõ nét nhất.',
            'Giữ kính ở vị trí đó để quan sát, có thể vẽ lại hoặc ghi chép điều quan sát được.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao phải điều chỉnh khoảng cách?',
          text: 'Khi kính quá gần vật, ảnh chỉ to hơn vật một chút và mắt khó nhìn rõ. Đưa kính ra xa dần, ảnh to lên và trở nên rõ nét. Nhưng nếu kính quá xa vật (vượt qua một vị trí gọi là tiêu điểm của kính), ảnh lại bị nhoè và lộn ngược. Vị trí nhìn rõ nét nằm trong một khoảng hẹp, nên phải di chuyển kính thật từ từ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không dùng kính lúp để nhìn Mặt Trời: ánh sáng hội tụ có thể làm hỏng mắt. Không để kính lúp dưới nắng gần giấy, lá khô vì có thể gây cháy.',
        },
      ],
    },
    {
      heading: 'Bảo quản kính lúp',
      blocks: [
        {
          type: 'list',
          items: [
            'Không để mặt kính tiếp xúc với vật nhám, bẩn, sắc nhọn dễ làm xước kính.',
            'Thường xuyên vệ sinh mặt kính bằng khăn mềm hoặc giấy lau kính chuyên dụng, không lau bằng ngón tay.',
            'Cất giữ kính lúp nơi khô ráo, trong hộp hoặc túi đựng, tránh làm rơi vỡ.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Điều chỉnh kính lúp để nhìn rõ con kiến',
    instruction:
      'Kéo thanh trượt (hoặc dùng phím mũi tên) để đưa kính lúp từ sát vật ra xa dần. Bên trái là hình nhìn ngang, bên phải là ảnh em thấy qua mặt kính. Tìm khoảng cách cho ảnh rõ nét, đọc ảnh to gấp bao nhiêu lần, rồi thử đưa kính ra xa quá tiêu điểm xem điều gì xảy ra.',
  },
  examples: [
    {
      problem:
        'Dùng kính lúp có ghi $5\\mathrm{x}$ để quan sát một con kiến dài $3$ mm. Qua kính, con kiến trông dài khoảng bao nhiêu milimét?',
      steps: [
        'Kính ghi $5\\mathrm{x}$ nghĩa là ảnh trông to gấp khoảng $5$ lần vật.',
        'Chiều dài nhìn thấy: $3 \\cdot 5 = 15$ mm.',
      ],
      answer: 'Con kiến trông dài khoảng $15$ mm, tức $1{,}5$ cm.',
    },
    {
      problem:
        'Bạn Lan đặt kính lúp sát chiếc lá, nhìn qua kính nhưng thấy gân lá nhỏ và mờ. Bạn ấy cần làm gì?',
      steps: [
        'Kính đặt sát vật thì ảnh chỉ to hơn vật một chút và chưa rõ nét.',
        'Mắt vẫn nhìn vào mặt kính, từ từ đưa kính ra xa chiếc lá.',
        'Dừng lại ở vị trí thấy gân lá to và rõ nét nhất; nếu ảnh bắt đầu nhoè thì kính đã quá xa, cần đưa lại gần một chút.',
      ],
      answer:
        'Từ từ đưa kính lúp ra xa chiếc lá cho đến khi nhìn thấy gân lá rõ nét nhất rồi giữ kính ở vị trí đó.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn các bộ phận chính của kính lúp.',
      options: ['Tay cầm', 'Ốc điều chỉnh', 'Khung kính', 'Mặt kính', 'Bàn kính'],
      answers: [0, 2, 3],
      hints: ['Kính lúp rất đơn giản, chỉ có ba bộ phận chính.'],
      solution:
        'Kính lúp gồm tay cầm, khung kính và mặt kính. Ốc điều chỉnh và bàn kính là bộ phận của kính hiển vi.',
    },
    {
      type: 'choice',
      prompt: 'Mặt kính của kính lúp là',
      options: [
        'tấm kính phẳng',
        'tấm kính lồi, dày ở giữa và mỏng ở rìa',
        'tấm kính lõm, mỏng ở giữa và dày ở rìa',
        'tấm gương',
      ],
      answer: 1,
      hints: ['Sờ thử mặt kính lúp: phần giữa phồng lên.'],
      solution: 'Mặt kính của kính lúp là tấm kính lồi: phần giữa dày hơn phần rìa.',
    },
    {
      type: 'choice',
      prompt: 'Kính lúp thường phóng to ảnh của vật khoảng',
      options: ['từ 3 đến 20 lần', 'từ 40 đến 3 000 lần', 'từ 1 000 đến 10 000 lần', 'đúng 2 lần'],
      answer: 0,
      hints: ['Phóng to từ 40 đến 3 000 lần là kính hiển vi quang học.'],
      solution: 'Kính lúp phóng to ảnh của vật khoảng từ $3$ đến $20$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Kính lúp có ghi $10\\mathrm{x}$. Một hạt cát có đường kính $0{,}8$ mm khi nhìn qua kính sẽ trông có đường kính khoảng bao nhiêu milimét?',
      answer: 8,
      tolerance: 0.01,
      unit: 'mm',
      hints: ['$10\\mathrm{x}$ nghĩa là trông to gấp $10$ lần.'],
      solution: '$0{,}8 \\cdot 10 = 8$ mm.',
    },
    {
      type: 'number',
      prompt:
        'Qua một kính lúp, chữ cái cao $2$ mm trông cao khoảng $6$ mm. Kính lúp đó phóng to bao nhiêu lần?',
      answer: 3,
      tolerance: 0.01,
      hints: ['Lấy kích thước nhìn thấy chia cho kích thước thật.'],
      solution: '$6 : 2 = 3$ lần, kính có độ phóng đại $3\\mathrm{x}$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước quan sát một chiếc lá bằng kính lúp.',
      items: [
        'Từ từ đưa kính ra xa chiếc lá cho đến khi nhìn rõ',
        'Đặt chiếc lá lên tờ giấy trắng, nơi đủ ánh sáng',
        'Cầm kính lúp, đặt mặt kính gần sát chiếc lá',
        'Giữ kính ở vị trí đó, quan sát và vẽ lại gân lá',
      ],
      answer: [1, 2, 0, 3],
      hints: ['Bắt đầu bằng việc chuẩn bị vật; đặt kính sát vật trước khi đưa ra xa.'],
      solution:
        'Đặt lá lên giấy trắng nơi đủ sáng; cầm kính đặt sát lá; từ từ đưa kính ra xa đến khi nhìn rõ; giữ kính, quan sát và vẽ lại.',
    },
    {
      type: 'choice',
      prompt: 'Khi đưa kính lúp ra quá xa vật, ảnh nhìn thấy bị nhoè và lộn ngược. Em cần làm gì?',
      options: [
        'Đưa kính ra xa thêm nữa',
        'Đưa kính lại gần vật hơn một chút',
        'Lau mặt kính bằng tay',
        'Đổi sang nhìn bằng mắt thường',
      ],
      answer: 1,
      hints: ['Ảnh rõ nét chỉ khi kính ở trong một khoảng hẹp, không quá xa vật.'],
      solution:
        'Kính đã ở quá xa vật (vượt qua tiêu điểm). Cần từ từ đưa kính lại gần vật cho đến khi ảnh rõ nét trở lại.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả những việc làm đúng khi bảo quản kính lúp.',
      options: [
        'Lau mặt kính bằng khăn mềm hoặc giấy lau kính',
        'Dùng ngón tay chùi vết bẩn trên mặt kính',
        'Cất kính trong hộp, nơi khô ráo',
        'Để kính úp mặt xuống nền đá nhám',
        'Để kính lúp phơi nắng trên đống giấy',
      ],
      answers: [0, 2],
      hints: ['Mặt kính dễ bị xước và bám bẩn; ánh nắng qua kính lúp có thể đốt cháy giấy.'],
      solution:
        'Đúng: lau bằng khăn mềm hoặc giấy chuyên dụng; cất nơi khô ráo. Sai: chùi bằng tay (để lại dấu vân tay, mồ hôi), úp xuống mặt nhám (xước kính), phơi nắng trên giấy (có thể gây cháy).',
    },
    {
      type: 'multi',
      prompt: 'Nên dùng kính lúp để quan sát những vật nào sau đây?',
      options: [
        'Vân tay',
        'Tế bào vảy hành',
        'Cánh của một con ruồi',
        'Mặt Trăng',
        'Gân của chiếc lá',
      ],
      answers: [0, 2, 4],
      hints: [
        'Kính lúp chỉ phóng to tới khoảng 20 lần.',
        'Tế bào nhỏ đến mức cần phóng to hàng trăm lần; Mặt Trăng ở rất xa.',
      ],
      solution:
        'Vân tay, cánh ruồi, gân lá đủ lớn để quan sát bằng kính lúp. Tế bào vảy hành cần kính hiển vi; Mặt Trăng ở rất xa, phải dùng kính thiên văn.',
    },
  ],
  takeaways: [
    'Kính lúp gồm ba bộ phận: tay cầm, khung kính và mặt kính (tấm kính lồi).',
    'Kính lúp giúp quan sát vật nhỏ, phóng to ảnh khoảng 3 đến 20 lần; số ghi trên kính ($3\\mathrm{x}$, $5\\mathrm{x}$, ...) là độ phóng đại.',
    'Cách dùng: đặt kính gần sát vật, mắt nhìn vào mặt kính, từ từ đưa kính ra xa đến khi thấy ảnh rõ nét.',
    'Bảo quản: tránh làm xước mặt kính, lau bằng khăn mềm hoặc giấy chuyên dụng, cất nơi khô ráo.',
  ],
};
