/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ngành dầu khí thế giới: vai trò, phân bố trữ lượng, các nước sản xuất lớn và OPEC; ngành dầu khí Việt Nam: các bể trầm tích, mỏ dầu khí, nhà máy lọc dầu và các mốc phát triển; tác động của dầu mỏ đến môi trường và định hướng năng lượng.',
  intro:
    'Ngày $26/6/1986$, tấn dầu đầu tiên được khai thác từ mỏ Bạch Hổ, mở ra ngành công nghiệp dầu khí của Việt Nam. Ngày nay xăng dầu, điện khí, phân đạm và chất dẻo trong đời sống của em đều gắn với ngành này. Dầu khí được khai thác, chế biến ở đâu, và phải trả giá gì cho môi trường?',
  objectives: [
    'Nêu được vai trò của dầu mỏ và tình hình khai thác, sản xuất dầu mỏ trên thế giới.',
    'Trình bày được sự phát triển của ngành dầu khí Việt Nam: các bể trầm tích, mỏ dầu khí và nhà máy lọc dầu chính.',
    'Nêu được tác động của khai thác, vận chuyển và sử dụng dầu mỏ đến môi trường, và các biện pháp giảm thiểu.',
    'Thực hiện được các phép tính đổi đơn vị sản lượng và so sánh lượng khí thải của nhiên liệu.',
  ],
  sections: [
    {
      heading: 'Ngành dầu mỏ trên thế giới',
      blocks: [
        {
          type: 'p',
          text: 'Giếng dầu khai thác công nghiệp đầu tiên được khoan năm $1859$ ở bang Pennsylvania (Mỹ). Từ đó dầu mỏ trở thành nguồn năng lượng quan trọng nhất của thế giới: hiện nay dầu mỏ cung cấp khoảng một phần ba năng lượng sơ cấp, phần lớn nhiên liệu cho giao thông và là nguyên liệu của công nghiệp hoá dầu.',
        },
        {
          type: 'list',
          items: [
            'Trữ lượng dầu mỏ phân bố không đều: khu vực Trung Đông chiếm gần một nửa trữ lượng đã xác minh của thế giới. Các nước có trữ lượng lớn gồm Venezuela, Ả Rập Xê-út, Canada, Iran, Iraq.',
            'Các nước khai thác nhiều dầu nhất hiện nay gồm Mỹ, Ả Rập Xê-út, Nga.',
            'Sản lượng dầu thường tính bằng thùng (barrel, $1$ thùng $\\approx 159$ lít) hoặc tấn; $1$ tấn dầu thô ứng với khoảng $7{,}3$ thùng (tuỳ khối lượng riêng của dầu).',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'OPEC',
          text: 'Tổ chức các nước xuất khẩu dầu mỏ (OPEC) được thành lập năm $1960$ tại Baghdad bởi Iran, Iraq, Kuwait, Ả Rập Xê-út và Venezuela. OPEC điều phối chính sách khai thác của các nước thành viên để ổn định thị trường và giá dầu; các nước OPEC nắm phần lớn trữ lượng dầu của thế giới nên có ảnh hưởng lớn đến giá dầu.',
        },
      ],
    },
    {
      heading: 'Ngành dầu khí Việt Nam',
      blocks: [
        {
          type: 'p',
          text: 'Dầu khí ở Việt Nam tập trung chủ yếu ở thềm lục địa, trong các bể trầm tích Sông Hồng, Cửu Long, Nam Côn Sơn, Malay – Thổ Chu; ngoài ra còn các bể Phú Khánh, Hoàng Sa, Trường Sa đang được nghiên cứu. Bể Cửu Long chứa phần lớn sản lượng dầu đã khai thác.',
        },
        {
          type: 'table',
          head: ['Năm', 'Sự kiện'],
          rows: [
            [
              '$1975$',
              'Thành lập Tổng cục Dầu khí, tiền thân của Tập đoàn Dầu khí Việt Nam (Petrovietnam).',
            ],
            [
              '$1981$',
              'Thành lập Liên doanh dầu khí Việt – Xô (Vietsovpetro); mỏ khí Tiền Hải C (Thái Bình) bắt đầu khai thác.',
            ],
            ['$1986$', 'Khai thác tấn dầu đầu tiên ở mỏ Bạch Hổ.'],
            [
              '$1995$',
              'Khí đồng hành mỏ Bạch Hổ được đưa vào bờ, dùng cho điện và sản xuất khí hoá lỏng.',
            ],
            ['$2009$', 'Nhà máy lọc dầu Dung Quất (Quảng Ngãi) cho ra sản phẩm đầu tiên.'],
            ['$2018$', 'Liên hợp lọc hoá dầu Nghi Sơn (Thanh Hoá) vận hành thương mại.'],
          ],
          caption: 'Một số mốc phát triển của ngành dầu khí Việt Nam',
        },
        {
          type: 'p',
          text: 'Riêng Vietsovpetro đã khai thác hơn $239$ triệu tấn dầu thô tính đến năm $2020$. Ngành dầu khí gồm một chuỗi khép kín: tìm kiếm, thăm dò, khai thác, vận chuyển bằng đường ống, chế biến (lọc dầu, hoá dầu, sản xuất phân đạm, điện khí) và phân phối sản phẩm.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vai trò của dầu khí Việt Nam',
          text: 'Dầu khí là ngành kinh tế mũi nhọn, đóng góp lớn cho ngân sách và xuất khẩu, bảo đảm an ninh năng lượng (xăng dầu, điện khí), cung cấp nguyên liệu cho phân bón và hoá dầu. Các công trình dầu khí trên biển còn góp phần khẳng định chủ quyền biển, đảo của Việt Nam.',
        },
      ],
    },
    {
      heading: 'Tác động của dầu mỏ đến môi trường',
      blocks: [
        {
          type: 'list',
          items: [
            'Khai thác: nước thải lẫn dầu, dung dịch khoan, khí đồng hành bị đốt bỏ (đuốc khí) thải $\\mathrm{CO_2}$; sự cố giàn khoan gây tràn dầu.',
            'Vận chuyển: tràn dầu do tai nạn tàu chở dầu, rò rỉ đường ống.',
            'Chế biến và sử dụng: khí thải $\\mathrm{CO_2}$, $\\mathrm{SO_2}$, $\\mathrm{NO_x}$, $\\mathrm{CO}$, bụi gây hiệu ứng nhà kính, mưa acid, khói mù; rác thải nhựa từ sản phẩm hoá dầu.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Sự cố tràn dầu trên biển',
          text: 'Dầu nhẹ hơn nước và không tan trong nước nên nổi và loang rất nhanh thành lớp màng mỏng trên diện tích rộng. Màng dầu ngăn oxygen hoà tan và ánh sáng, bám vào lông chim, mang cá, làm chết sinh vật biển, phá huỷ rừng ngập mặn, bãi tắm, nghề cá. Trên biển, sóng và dòng chảy đưa dầu đi xa, khó khoanh vùng nên thiệt hại thường lớn hơn trên đất liền.',
        },
        {
          type: 'p',
          text: 'Biện pháp ứng phó: dùng phao quây để khoanh vùng dầu, bơm hút dầu lên tàu, dùng vật liệu thấm hút, chất phân tán và vi sinh vật phân huỷ dầu; làm sạch bờ biển. Phòng ngừa: kiểm tra an toàn giàn khoan, đường ống, dùng tàu chở dầu vỏ kép.',
        },
        {
          type: 'p',
          text: 'Định hướng năng lượng: dầu mỏ là tài nguyên không tái tạo và đốt nó thải nhiều $\\mathrm{CO_2}$. Cần sử dụng tiết kiệm; ưu tiên khí thiên nhiên (cháy sạch hơn, ít $\\mathrm{CO_2}$ hơn trên cùng lượng nhiệt), nhiên liệu sinh học (xăng E5) và chuyển dần sang năng lượng tái tạo (mặt trời, gió, thuỷ điện).',
        },
        { type: 'widget', name: 'thai' },
      ],
    },
    {
      heading: 'Dự án: Ngành dầu khí và em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu một công trình dầu khí ở Việt Nam và tác động của nó đến kinh tế, môi trường, rồi trình bày trước lớp.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn một công trình: một mỏ dầu khí, một nhà máy lọc dầu, một nhà máy đạm hoặc điện khí. Thu thập thông tin từ trang tin chính thức của doanh nghiệp, báo chí, sách.',
            'Ghi lại: vị trí, năm hoạt động, công suất, nguyên liệu, sản phẩm, số lao động, đóng góp cho địa phương.',
            'Tìm hiểu biện pháp bảo vệ môi trường của công trình và một sự cố môi trường liên quan đến dầu khí (ở Việt Nam hoặc thế giới), cách người ta ứng phó.',
            'Làm thí nghiệm nhỏ: nhỏ vài giọt dầu ăn lên chậu nước, quan sát dầu loang; thử thu dầu bằng bông, giấy, mùn cưa và so sánh.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: áp phích hoặc bài trình chiếu về công trình; bảng so sánh các vật liệu thu dầu; ba đề xuất sử dụng năng lượng tiết kiệm ở gia đình, trường học.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ dầu khí Việt Nam',
    instruction:
      'Bấm vào từng mỏ dầu, mỏ khí, nhà máy lọc dầu để xem thông tin. Các mỏ dầu tập trung ở bể nào? Sau đó chuyển sang chế độ đố và tìm đúng địa điểm theo gợi ý.',
  },
  examples: [
    {
      problem:
        'Nhà máy lọc dầu Dung Quất có công suất $6{,}5$ triệu tấn dầu thô mỗi năm. Coi $1$ tấn dầu thô ứng với $7{,}3$ thùng, một năm có $365$ ngày. Tính công suất của nhà máy theo thùng mỗi ngày.',
      steps: [
        'Số thùng mỗi năm: $6{,}5 \\cdot 10^6 \\cdot 7{,}3 = 47{,}45 \\cdot 10^6$ thùng.',
        'Số thùng mỗi ngày: $\\dfrac{47{,}45 \\cdot 10^6}{365} = 130\\,000$ thùng.',
      ],
      answer: 'Khoảng $130\\,000$ thùng dầu thô mỗi ngày.',
    },
    {
      problem:
        'Đốt $1$ mol methane toả ra $890$ kJ và tạo $1$ mol $\\mathrm{CO_2}$; đốt $1$ mol octane toả ra $5\\,470$ kJ và tạo $8$ mol $\\mathrm{CO_2}$. Để thu được $1\\,000$ kJ nhiệt, mỗi nhiên liệu thải ra bao nhiêu gam $\\mathrm{CO_2}$?',
      steps: [
        'Methane: $n = \\dfrac{1\\,000}{890} \\approx 1{,}124$ mol, tạo $1{,}124$ mol $\\mathrm{CO_2}$, nặng $1{,}124 \\cdot 44 \\approx 49{,}4$ g.',
        'Octane: $n = \\dfrac{1\\,000}{5\\,470} \\approx 0{,}1828$ mol, tạo $8 \\cdot 0{,}1828 \\approx 1{,}463$ mol $\\mathrm{CO_2}$, nặng $1{,}463 \\cdot 44 \\approx 64{,}4$ g.',
        'Khí thiên nhiên thải ít hơn khoảng $\\dfrac{64{,}4 - 49{,}4}{64{,}4} \\approx 23\\%$ $\\mathrm{CO_2}$ trên cùng lượng nhiệt.',
      ],
      answer: 'Methane khoảng $49{,}4$ g, octane khoảng $64{,}4$ g $\\mathrm{CO_2}$.',
    },
    {
      problem:
        'Một tấn dầu có khối lượng riêng $850$ kg/m³ tràn ra biển và loang thành màng dày $0{,}1$ mm. Tính diện tích màng dầu.',
      steps: [
        'Thể tích dầu: $V = \\dfrac{1\\,000}{850} \\approx 1{,}176$ m³.',
        'Bề dày $0{,}1$ mm $= 10^{-4}$ m, nên diện tích $S = \\dfrac{V}{d} = \\dfrac{1{,}176}{10^{-4}} \\approx 11\\,760$ m².',
      ],
      answer: 'Khoảng $11\\,760$ m², hơn một hecta mặt biển chỉ từ một tấn dầu.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tấn dầu đầu tiên của Việt Nam được khai thác năm nào, ở mỏ nào?',
      options: [
        'Năm $1986$, mỏ Bạch Hổ',
        'Năm $1975$, mỏ Tiền Hải C',
        'Năm $2009$, mỏ Dung Quất',
        'Năm $1994$, mỏ Đại Hùng',
      ],
      answer: 0,
      hints: ['Đó là mỏ dầu lớn nhất Việt Nam, do Vietsovpetro khai thác.'],
      solution:
        'Ngày $26/6/1986$, tấn dầu đầu tiên được khai thác ở mỏ Bạch Hổ. Tiền Hải C là mỏ khí; Dung Quất là nhà máy lọc dầu.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi địa điểm với thông tin đúng về nó.',
      left: ['Bạch Hổ', 'Tiền Hải C', 'Dung Quất', 'Nghi Sơn'],
      right: [
        'Mỏ dầu lớn nhất Việt Nam',
        'Mỏ khí đầu tiên, trên đất liền',
        'Nhà máy lọc dầu đầu tiên',
        'Lọc hoá dầu dùng dầu thô nhập từ Kuwait',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Hai nhà máy lọc dầu ở Quảng Ngãi và Thanh Hoá; hai mỏ ở bể Cửu Long và bể Sông Hồng.',
      ],
      solution:
        'Bạch Hổ: mỏ dầu lớn nhất; Tiền Hải C (Thái Bình): mỏ khí đầu tiên; Dung Quất (Quảng Ngãi): nhà máy lọc dầu đầu tiên; Nghi Sơn (Thanh Hoá): dùng dầu Kuwait.',
    },
    {
      type: 'text',
      prompt: 'Viết tên viết tắt của Tổ chức các nước xuất khẩu dầu mỏ, thành lập năm $1960$.',
      accept: ['OPEC'],
      hints: ['Viết tắt theo tiếng Anh: Organization of the Petroleum Exporting Countries.'],
      solution: 'OPEC.',
    },
    {
      type: 'number',
      prompt:
        'Liên hợp lọc hoá dầu Nghi Sơn có công suất $10$ triệu tấn dầu thô mỗi năm. Coi $1$ tấn dầu ứng với $7{,}3$ thùng, một năm có $365$ ngày. Công suất của nhà máy là bao nhiêu nghìn thùng mỗi ngày?',
      answer: 200,
      tolerance: 0.5,
      hints: ['Đổi tấn ra thùng, rồi chia cho số ngày.'],
      solution:
        '$\\dfrac{10 \\cdot 10^6 \\cdot 7{,}3}{365} = 200\\,000$ thùng mỗi ngày, tức $200$ nghìn thùng.',
    },
    {
      type: 'number',
      prompt:
        'Một thùng dầu có khoảng $159$ lít. $1\\,000$ thùng dầu có thể tích bao nhiêu mét khối?',
      answer: 159,
      unit: 'm³',
      hints: ['$1$ m³ $= 1\\,000$ lít.'],
      solution: '$1\\,000 \\cdot 159 = 159\\,000$ lít $= 159$ m³.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi có sự cố tràn dầu trên biển, dầu loang rất nhanh trên mặt nước?',
      options: [
        'Vì dầu nhẹ hơn nước, không tan trong nước nên nổi và dàn mỏng ra.',
        'Vì dầu tan tốt trong nước biển.',
        'Vì dầu nặng hơn nước nên chìm và lan dưới đáy.',
        'Vì dầu phản ứng với muối trong nước biển.',
      ],
      answer: 0,
      hints: ['So sánh khối lượng riêng của dầu và của nước, và khả năng tan của hydrocarbon.'],
      solution:
        'Dầu là hỗn hợp hydrocarbon không phân cực, không tan và nhẹ hơn nước, nên nổi trên mặt nước và loang thành màng mỏng, được sóng gió đẩy đi xa.',
    },
    {
      type: 'multi',
      prompt: 'Những biện pháp nào dùng để ứng phó sự cố tràn dầu trên biển?',
      options: [
        'Dùng phao quây khoanh vùng dầu',
        'Bơm hút dầu lên tàu',
        'Dùng vật liệu thấm hút dầu',
        'Đổ thêm nước ngọt để pha loãng dầu',
        'Đốt toàn bộ rừng ngập mặn ven biển',
      ],
      answers: [0, 1, 2],
      hints: ['Dầu không tan trong nước, nên phải gom và thu hồi nó.'],
      solution:
        'Phải khoanh vùng (phao quây), thu hồi (bơm hút, vật liệu thấm hút). Dầu không tan nên pha loãng bằng nước không có tác dụng; đốt rừng ngập mặn gây thêm thiệt hại.',
    },
    {
      type: 'number',
      prompt:
        'Đốt $1$ mol methane toả ra $890$ kJ và tạo $1$ mol $\\mathrm{CO_2}$. Để thu được $8\\,900$ kJ nhiệt từ methane thì thải ra bao nhiêu gam $\\mathrm{CO_2}$?',
      answer: 440,
      unit: 'g',
      hints: ['Tính số mol methane cần đốt trước.'],
      solution:
        '$n_{\\mathrm{CH_4}} = \\dfrac{8\\,900}{890} = 10$ mol, tạo $10$ mol $\\mathrm{CO_2}$, nặng $10 \\cdot 44 = 440$ g.',
    },
    {
      type: 'choice',
      prompt: 'Biện pháp nào giúp giảm phát thải khí nhà kính từ việc dùng nhiên liệu?',
      options: [
        'Tiết kiệm nhiên liệu, dùng phương tiện công cộng và năng lượng tái tạo.',
        'Dùng nhiều dầu FO nhiều lưu huỳnh thay cho khí thiên nhiên.',
        'Đốt bỏ khí đồng hành ở giàn khoan.',
        'Để xe nổ máy không tải lâu.',
      ],
      answer: 0,
      hints: ['Khí nhà kính chủ yếu là $\\mathrm{CO_2}$ từ việc đốt nhiên liệu hoá thạch.'],
      solution:
        'Đốt ít nhiên liệu hoá thạch hơn (tiết kiệm, phương tiện công cộng) và thay bằng năng lượng tái tạo làm giảm $\\mathrm{CO_2}$. Các lựa chọn còn lại đều làm tăng khí thải.',
    },
  ],
  takeaways: [
    'Dầu mỏ cung cấp khoảng một phần ba năng lượng của thế giới; Trung Đông chiếm gần một nửa trữ lượng; OPEC (thành lập năm $1960$) ảnh hưởng lớn đến giá dầu.',
    'Dầu khí Việt Nam tập trung ở các bể Cửu Long, Nam Côn Sơn, Sông Hồng, Malay – Thổ Chu; mỏ Bạch Hổ khai thác tấn dầu đầu tiên năm $1986$.',
    'Hai nhà máy lọc dầu: Dung Quất (Quảng Ngãi, $6{,}5$ triệu tấn/năm) và Nghi Sơn (Thanh Hoá, $10$ triệu tấn/năm).',
    'Khai thác, vận chuyển, sử dụng dầu mỏ gây ô nhiễm: tràn dầu, $\\mathrm{CO_2}$, $\\mathrm{SO_2}$, $\\mathrm{NO_x}$; dầu loang nhanh vì nhẹ hơn nước và không tan.',
    'Cần dùng tiết kiệm, ưu tiên nhiên liệu sạch hơn và chuyển dần sang năng lượng tái tạo.',
  ],
};
