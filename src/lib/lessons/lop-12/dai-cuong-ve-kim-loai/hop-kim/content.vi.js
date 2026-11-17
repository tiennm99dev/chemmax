/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hợp kim là vật liệu kim loại gồm một kim loại cơ bản và một số kim loại hoặc phi kim khác; hợp kim thường cứng hơn, dẫn điện, dẫn nhiệt kém hơn kim loại thành phần; thành phần, tính chất và ứng dụng của gang, thép, thép không gỉ, duralumin.',
  intro:
    'Khung xe đạp, thân máy bay, nồi inox hay đường ray tàu hoả đều không làm bằng kim loại nguyên chất mà bằng hợp kim. Sắt nguyên chất khá mềm và dễ gỉ, nhôm nguyên chất nhẹ nhưng không đủ bền. Thêm một lượng nhỏ nguyên tố khác vào kim loại đã làm thay đổi tính chất của nó như thế nào?',
  objectives: [
    'Nêu được khái niệm hợp kim.',
    'Nêu được tính chất của hợp kim so với kim loại thành phần và giải thích được vì sao hợp kim thường cứng hơn.',
    'Trình bày được thành phần, tính chất đặc trưng và ứng dụng của một số hợp kim quan trọng: gang, thép, thép không gỉ, duralumin.',
  ],
  sections: [
    {
      heading: 'Khái niệm hợp kim',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hợp kim',
          text: 'Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác.',
        },
        {
          type: 'p',
          text: 'Hợp kim thường được chế tạo bằng cách nung chảy các thành phần rồi để nguội. Ví dụ: thép là hợp kim của sắt với carbon và một số nguyên tố khác; duralumin là hợp kim của nhôm với đồng, manganese, magnesium. Con người đã dùng hợp kim từ thời cổ đại (đồ đồng thau, đồng thiếc) và ngày nay hợp kim có mặt rộng rãi trong đời sống, sản xuất.',
        },
      ],
    },
    {
      heading: 'Tính chất của hợp kim',
      blocks: [
        {
          type: 'p',
          text: 'Tính chất hoá học của hợp kim thường tương tự tính chất hoá học của các đơn chất tham gia tạo thành hợp kim. Tính chất vật lí và tính chất cơ học của hợp kim thường khác nhiều so với các kim loại thành phần:',
        },
        {
          type: 'list',
          items: [
            'Hợp kim có ánh kim, dẫn điện, dẫn nhiệt nhưng thường kém hơn kim loại cơ bản. Ví dụ: đồng nguyên chất dẫn điện tốt hơn hợp kim của đồng.',
            'Hợp kim thường cứng hơn nhưng kém dẻo hơn kim loại thành phần. Ví dụ: hợp kim Au – Cu (8 – 12% Cu) cứng hơn vàng, dùng đúc tiền, làm đồ trang sức, ngòi bút máy.',
            'Nhiệt độ nóng chảy của hợp kim khác nhiệt độ nóng chảy của kim loại thành phần. Ví dụ: gang nóng chảy ở nhiệt độ thấp hơn sắt nguyên chất.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao hợp kim cứng hơn?',
          text: 'Trong kim loại nguyên chất, các nguyên tử giống nhau xếp thành những lớp đều đặn, dễ trượt lên nhau khi có lực tác dụng. Trong hợp kim, các nguyên tử của nguyên tố khác có kích thước khác làm các lớp không còn đều đặn, cản trở sự trượt giữa các lớp, nên hợp kim cứng hơn. Liên kết trong hợp kim vẫn chủ yếu là liên kết kim loại, các electron tự do vẫn có, nhưng chuyển động bị cản trở nhiều hơn nên hợp kim dẫn điện kém hơn.',
        },
      ],
    },
    {
      heading: 'Một số hợp kim quan trọng',
      blocks: [
        {
          type: 'table',
          head: ['Hợp kim', 'Thành phần', 'Tính chất nổi bật', 'Ứng dụng'],
          rows: [
            [
              'Gang',
              'khoảng 95% Fe, 2 – 4% C và Mn, Si, P, S, ...',
              'cứng hơn sắt nhưng giòn',
              'nguyên liệu luyện thép, dụng cụ đun nấu, chi tiết máy',
            ],
            [
              'Thép',
              'Fe với dưới 2% C và một số nguyên tố khác (Cr, Mn, Si, ...)',
              'cứng, bền, chịu nhiệt; điều chỉnh được tính chất khi thêm Ti, V, Mn, ...',
              'chế tạo máy, xây dựng, giao thông',
            ],
            [
              'Thép không gỉ (inox)',
              'Fe với ít nhất 10% Cr (theo khối lượng), thường có Ni và một lượng nhỏ C',
              'chống ăn mòn tốt hơn nhiều so với sắt',
              'dụng cụ y tế, đồ gia dụng, dụng cụ nhà bếp',
            ],
            [
              'Duralumin',
              'trên 90% Al, khoảng 4% Cu và Mn, Mg, Si, ...',
              'nhẹ, cứng, bền',
              'chế tạo máy bay, khung xe, vỏ tàu',
            ],
          ],
          caption: 'Thành phần, tính chất và ứng dụng của một số hợp kim.',
        },
        {
          type: 'p',
          text: 'Hợp kim được dùng rộng rãi nhờ có thể chọn thành phần để đạt tính chất mong muốn:',
        },
        {
          type: 'list',
          items: [
            'Công nghiệp chế tạo máy bay, ô tô: hợp kim nhẹ, bền, chịu nhiệt (duralumin, hợp kim titanium).',
            'Công nghiệp hoá chất: hợp kim có độ bền hoá học và cơ học cao.',
            'Đồ gia dụng: hợp kim không gỉ, không độc hại (inox).',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Kim loại nguyên chất và hợp kim khi chịu lực',
    instruction:
      'Chọn kim loại nguyên chất, tăng dần lực tác dụng lên hai lớp nguyên tử trên cùng và ghi lại lực nhỏ nhất làm các lớp trượt. Làm lại với hợp kim, có các nguyên tử lạ màu cam. So sánh hai giá trị để giải thích vì sao hợp kim cứng hơn.',
  },
  examples: [
    {
      problem:
        'Vì sao vàng dùng làm đồ trang sức thường là hợp kim của vàng với đồng (vàng tây) chứ không phải vàng nguyên chất?',
      steps: [
        'Vàng nguyên chất rất mềm, dễ trầy xước, dễ biến dạng.',
        'Thêm đồng (8 – 12% Cu), các nguyên tử Cu có kích thước khác xen vào mạng tinh thể vàng, cản trở sự trượt giữa các lớp nguyên tử.',
        'Hợp kim Au – Cu cứng hơn vàng, giữ được hình dạng, vẫn có ánh kim đẹp.',
      ],
      answer: 'Hợp kim Au – Cu cứng hơn vàng nguyên chất nên bền khi sử dụng.',
    },
    {
      problem:
        'Một mẫu thép không gỉ nặng 500 g chứa 18% Cr và 8% Ni theo khối lượng, còn lại là Fe (bỏ qua carbon). Tính khối lượng mỗi kim loại trong mẫu.',
      steps: [
        '$m_{\\mathrm{Cr}} = 500 \\cdot 18\\% = 90$ g.',
        '$m_{\\mathrm{Ni}} = 500 \\cdot 8\\% = 40$ g.',
        '$m_{\\mathrm{Fe}} = 500 - 90 - 40 = 370$ g (chiếm 74%).',
      ],
      answer: 'Cr: 90 g; Ni: 40 g; Fe: 370 g.',
    },
    {
      problem:
        'Hoà tan 10 g một mẫu duralumin (chỉ chứa Al và Cu) trong dung dịch $\\mathrm{HCl}$ dư, thu được 0,5 mol khí $\\mathrm{H_2}$. Tính phần trăm khối lượng Al trong mẫu.',
      steps: [
        'Cu không tác dụng với $\\mathrm{HCl}$; chỉ Al phản ứng: $2\\mathrm{Al} + 6\\mathrm{HCl} \\longrightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}$.',
        '$n_{\\mathrm{Al}} = \\dfrac{2}{3} n_{\\mathrm{H_2}} = \\dfrac{2}{3} \\cdot 0{,}5 = \\dfrac{1}{3}$ mol.',
        '$m_{\\mathrm{Al}} = \\dfrac{1}{3} \\cdot 27 = 9$ g $\\Rightarrow \\%m_{\\mathrm{Al}} = \\dfrac{9}{10} \\cdot 100\\% = 90\\%$.',
      ],
      answer: 'Al chiếm 90% khối lượng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hợp kim là',
      options: [
        'vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác',
        'hợp chất hoá học giữa hai kim loại',
        'hỗn hợp của một kim loại với một oxide kim loại',
        'kim loại nguyên chất đã được tôi cứng',
      ],
      answer: 0,
      hints: ['Hợp kim vẫn là vật liệu kim loại, có một kim loại cơ bản.'],
      solution:
        'Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác.',
    },
    {
      type: 'multi',
      prompt: 'So với kim loại cơ bản, hợp kim thường',
      options: [
        'cứng hơn',
        'kém dẻo hơn',
        'dẫn điện kém hơn',
        'dẫn điện tốt hơn',
        'có tính chất hoá học hoàn toàn khác',
      ],
      answers: [0, 1, 2],
      hints: [
        'Nguyên tử lạ cản trở sự trượt giữa các lớp và cản trở chuyển động của electron tự do.',
        'Tính chất hoá học của hợp kim thường tương tự các kim loại thành phần.',
      ],
      solution:
        'Hợp kim thường cứng hơn, kém dẻo hơn và dẫn điện, dẫn nhiệt kém hơn kim loại cơ bản; tính chất hoá học tương tự các đơn chất thành phần.',
    },
    {
      type: 'choice',
      prompt: 'Gang và thép đều là hợp kim của sắt với carbon. Điểm khác nhau chính là',
      options: [
        'gang chứa 2 – 4% C, thép chứa dưới 2% C',
        'gang chứa dưới 2% C, thép chứa 2 – 4% C',
        'gang không chứa carbon',
        'thép không chứa sắt',
      ],
      answer: 0,
      hints: ['Gang giòn hơn thép vì chứa nhiều carbon hơn.'],
      solution: 'Gang có khoảng 2 – 4% C, thép có dưới 2% C.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi hợp kim với ứng dụng phù hợp.',
      left: ['Duralumin', 'Thép không gỉ', 'Gang', 'Hợp kim Au – Cu'],
      right: [
        'Thân máy bay',
        'Dụng cụ y tế, nồi inox',
        'Nguyên liệu luyện thép, chi tiết máy',
        'Đồ trang sức, ngòi bút máy',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hợp kim nào nhẹ nhất? Hợp kim nào chống gỉ?'],
      solution:
        'Duralumin nhẹ, bền: thân máy bay. Thép không gỉ chống ăn mòn: dụng cụ y tế, nồi inox. Gang: luyện thép, chi tiết máy. Au – Cu cứng hơn vàng: trang sức, ngòi bút.',
    },
    {
      type: 'number',
      prompt:
        'Theo định nghĩa của sách, thép không gỉ chứa tối thiểu bao nhiêu phần trăm chromium theo khối lượng?',
      answer: 10,
      unit: '%',
      hints: ['Chromium tạo lớp oxide bảo vệ bề mặt thép.'],
      solution: 'Thép không gỉ chứa ít nhất 10% Cr theo khối lượng.',
    },
    {
      type: 'number',
      prompt:
        'Một nhẫn vàng tây nặng 4 g có 75% Au theo khối lượng, phần còn lại là Cu. Khối lượng Cu trong nhẫn là bao nhiêu gam?',
      answer: 1,
      unit: 'g',
      hints: ['Cu chiếm $100\\% - 75\\% = 25\\%$.'],
      solution: '$m_{\\mathrm{Cu}} = 4 \\cdot 25\\% = 1$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho 5 g một mẫu hợp kim Zn – Cu vào dung dịch $\\mathrm{HCl}$ dư, thu được 0,05 mol khí $\\mathrm{H_2}$. Tính phần trăm khối lượng Cu trong hợp kim. (Zn = 65)',
      answer: 35,
      tolerance: 0.01,
      unit: '%',
      hints: [
        'Chỉ Zn tác dụng với $\\mathrm{HCl}$: $\\mathrm{Zn} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{Zn}} = n_{\\mathrm{H_2}}$.',
      ],
      solution:
        '$n_{\\mathrm{Zn}} = 0{,}05$ mol, $m_{\\mathrm{Zn}} = 0{,}05 \\cdot 65 = 3{,}25$ g, $m_{\\mathrm{Cu}} = 5 - 3{,}25 = 1{,}75$ g, $\\%m_{\\mathrm{Cu}} = \\dfrac{1{,}75}{5} \\cdot 100\\% = 35\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Hợp kim thường cứng hơn kim loại nguyên chất chủ yếu vì',
      options: [
        'các nguyên tử có kích thước khác làm các lớp nguyên tử không đều, khó trượt lên nhau',
        'hợp kim không có electron tự do',
        'liên kết trong hợp kim là liên kết ion',
        'hợp kim có khối lượng riêng lớn hơn',
      ],
      answer: 0,
      hints: ['Dùng mô hình ở trên: lực cần để các lớp trượt thay đổi ra sao khi có nguyên tử lạ?'],
      solution:
        'Nguyên tử của nguyên tố thêm vào có kích thước khác, làm các lớp nguyên tử mất tính đều đặn, cản trở sự trượt giữa các lớp; liên kết trong hợp kim vẫn chủ yếu là liên kết kim loại.',
    },
  ],
  takeaways: [
    'Hợp kim: vật liệu kim loại gồm một kim loại cơ bản và một số kim loại hoặc phi kim khác.',
    'Tính chất hoá học của hợp kim tương tự các kim loại thành phần; hợp kim thường cứng hơn, kém dẻo hơn, dẫn điện và dẫn nhiệt kém hơn kim loại cơ bản, nhiệt độ nóng chảy khác.',
    'Gang: 2 – 4% C; thép: dưới 2% C; thép không gỉ: ít nhất 10% Cr; duralumin: trên 90% Al, khoảng 4% Cu.',
  ],
};
