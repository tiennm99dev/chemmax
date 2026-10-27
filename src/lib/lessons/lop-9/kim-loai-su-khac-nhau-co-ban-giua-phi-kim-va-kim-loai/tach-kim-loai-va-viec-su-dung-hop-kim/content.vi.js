/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trong tự nhiên, kim loại chủ yếu tồn tại ở dạng hợp chất trong quặng. Tuỳ mức độ hoạt động hoá học, kim loại được tách bằng điện phân nóng chảy (Na, Mg, Al), nhiệt luyện với chất khử C, CO, H2 (Zn, Fe, Pb) hoặc thuỷ luyện (Ag, Au). Gang được luyện trong lò cao, thép được luyện từ gang, nhôm được điện phân từ quặng bauxite. Hợp kim như gang, thép, inox, duralumin thường cứng, bền và chống gỉ tốt hơn kim loại nguyên chất.',
  intro:
    'Sắt có trong quặng màu nâu đỏ, nhôm có trong quặng bauxite, còn vàng thì nằm lẫn trong cát sỏi. Làm thế nào để lấy kim loại ra khỏi quặng? Vì sao người ta hiếm khi dùng sắt nguyên chất mà lại dùng gang, thép, inox?',
  objectives: [
    'Nêu được các phương pháp tách kim loại và giải thích được vì sao chọn phương pháp đó dựa vào mức độ hoạt động hoá học của kim loại.',
    'Trình bày được quá trình sản xuất gang trong lò cao, quá trình luyện thép và sản xuất nhôm; viết được phương trình hoá học.',
    'Nêu được khái niệm hợp kim, thành phần, tính chất và ứng dụng của một số hợp kim thông dụng: gang, thép, inox, duralumin.',
  ],
  sections: [
    {
      heading: 'Phương pháp tách kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại chủ yếu tồn tại ở dạng hợp chất (oxide, muối) trong quặng; một số kim loại kém hoạt động như vàng có thể tồn tại ở dạng đơn chất. Muốn tách kim loại, trước hết phải làm giàu quặng (loại bớt đất, đá, cát), sau đó chọn phương pháp hoá học phù hợp với mức độ hoạt động của kim loại.',
        },
        {
          type: 'table',
          head: ['Phương pháp', 'Dùng cho', 'Ví dụ'],
          rows: [
            [
              'Điện phân nóng chảy',
              'Kim loại hoạt động mạnh: $\\mathrm{Na}$, $\\mathrm{Ca}$, $\\mathrm{Mg}$, $\\mathrm{Al}$',
              'Điện phân $\\mathrm{Al_2O_3}$ nóng chảy thu được nhôm',
            ],
            [
              'Nhiệt luyện: dùng chất khử $\\mathrm{C}$, $\\mathrm{CO}$, $\\mathrm{H_2}$, $\\mathrm{Al}$ khử oxide ở nhiệt độ cao',
              'Kim loại hoạt động trung bình: $\\mathrm{Zn}$, $\\mathrm{Fe}$, $\\mathrm{Pb}$',
              '$\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$',
            ],
            [
              'Thuỷ luyện: chuyển kim loại thành muối tan rồi dùng kim loại mạnh hơn đẩy ra',
              'Kim loại hoạt động yếu: $\\mathrm{Ag}$, $\\mathrm{Au}$',
              'Dùng kẽm đẩy bạc, vàng ra khỏi dung dịch muối của chúng',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ tách kẽm từ quặng zinc blende ($\\mathrm{ZnS}$): đốt quặng trong không khí thu được $\\mathrm{ZnO}$, rồi dùng carbon khử $\\mathrm{ZnO}$ ở nhiệt độ cao.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} 2\\mathrm{ZnS} + 3\\mathrm{O_2} &\\xrightarrow{t^\\circ} 2\\mathrm{ZnO} + 2\\mathrm{SO_2} \\\\ \\mathrm{ZnO} + \\mathrm{C} &\\xrightarrow{t^\\circ} \\mathrm{Zn} + \\mathrm{CO} \\end{aligned}',
        },
        { type: 'widget', name: 'phuong-phap' },
      ],
    },
    {
      heading: 'Sản xuất gang, thép và nhôm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sản xuất gang trong lò cao',
          text: 'Nguyên liệu: quặng sắt (thường là hematite, chứa $\\mathrm{Fe_2O_3}$), than cốc ($\\mathrm{C}$), chất tạo xỉ (đá vôi $\\mathrm{CaCO_3}$) và không khí nóng giàu oxygen. Nguyên liệu nạp từ miệng lò, không khí nóng thổi vào ở phần dưới lò.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tạo chất khử $\\mathrm{CO}$: than cốc cháy $\\mathrm{C} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{CO_2}$, rồi $\\mathrm{C} + \\mathrm{CO_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO}$.',
            'Khử oxide sắt: $3\\mathrm{CO} + \\mathrm{Fe_2O_3} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$. Sắt nóng chảy hoà tan một ít carbon và các nguyên tố khác tạo thành gang lỏng.',
            'Tạo xỉ: $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$, $\\mathrm{CaO} + \\mathrm{SiO_2} \\xrightarrow{t^\\circ} \\mathrm{CaSiO_3}$. Xỉ nhẹ nổi trên gang và được tháo ra qua cửa riêng; khí lò thoát ra ở miệng lò.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Luyện thép',
          text: 'Nguyên liệu là gang (hoặc thép phế liệu) và khí oxygen. Oxygen oxi hoá các nguyên tố $\\mathrm{C}$, $\\mathrm{Si}$, $\\mathrm{Mn}$, ... trong gang thành oxide; các oxide này bay ra ngoài hoặc đi vào xỉ, làm giảm hàm lượng carbon và tạp chất, thu được thép.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sản xuất nhôm',
          text: 'Nguyên liệu là quặng bauxite (thành phần chính $\\mathrm{Al_2O_3}$). Sau khi làm sạch, $\\mathrm{Al_2O_3}$ được điện phân ở trạng thái nóng chảy (có thêm cryolite để hạ nhiệt độ nóng chảy): $2\\mathrm{Al_2O_3} \\rightarrow 4\\mathrm{Al} + 3\\mathrm{O_2}$. Nhôm lỏng thu được ở cực âm.',
        },
      ],
    },
    {
      heading: 'Hợp kim',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hợp kim',
          text: 'Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản (thành phần chính) và một số kim loại hoặc phi kim khác.',
        },
        {
          type: 'p',
          text: 'Hợp kim thường cứng hơn, bền hơn và chống ăn mòn, chống gỉ tốt hơn kim loại nguyên chất, nên được dùng rộng rãi hơn.',
        },
        {
          type: 'table',
          head: ['Hợp kim', 'Thành phần', 'Tính chất', 'Ứng dụng'],
          rows: [
            [
              'Gang',
              '$\\mathrm{Fe}$, $2\\%$ – $5\\%$ $\\mathrm{C}$ và một số nguyên tố khác',
              'Cứng, giòn',
              'Đúc bệ máy, ống dẫn nước, nắp cống, chảo gang',
            ],
            [
              'Thép',
              '$\\mathrm{Fe}$, dưới $2\\%$ $\\mathrm{C}$ và một số nguyên tố khác',
              'Cứng hơn sắt, đàn hồi, bền',
              'Xây dựng nhà cửa, cầu đường, chế tạo máy, phương tiện giao thông',
            ],
            [
              'Thép không gỉ (inox)',
              '$\\mathrm{Fe}$, $\\mathrm{C}$, $\\mathrm{Cr}$, $\\mathrm{Ni}$',
              'Cứng, không bị gỉ',
              'Đồ gia dụng (nồi, bát, thìa), dụng cụ y tế',
            ],
            [
              'Duralumin (đuyra)',
              '$\\mathrm{Al}$ với $\\mathrm{Cu}$, $\\mathrm{Mn}$, $\\mathrm{Mg}$',
              'Nhẹ gần bằng nhôm nhưng bền và cứng hơn nhôm nhiều',
              'Chế tạo máy bay, ô tô, tàu vũ trụ',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bên trong lò cao',
    instruction:
      'Kéo thanh trượt (hoặc chạm vào một vùng của lò) để đưa đầu dò từ miệng lò xuống đáy lò. Đọc nhiệt độ, chất rắn đi xuống, khí đi lên và phản ứng xảy ra ở từng vùng. Tìm vùng nóng nhất và vùng tạo ra chất khử CO.',
  },
  examples: [
    {
      problem:
        'Nêu phương pháp thích hợp để tách mỗi kim loại sau từ hợp chất của nó: $\\mathrm{Mg}$, $\\mathrm{Fe}$, $\\mathrm{Ag}$. Giải thích.',
      steps: [
        '$\\mathrm{Mg}$ đứng gần đầu dãy hoạt động, rất mạnh: các chất khử C, CO, H₂ không khử được hợp chất của nó, nên dùng điện phân nóng chảy.',
        '$\\mathrm{Fe}$ hoạt động trung bình: dùng nhiệt luyện, khử oxide sắt bằng $\\mathrm{CO}$ ở nhiệt độ cao.',
        '$\\mathrm{Ag}$ hoạt động yếu: dùng thuỷ luyện, chuyển thành muối tan rồi dùng kim loại mạnh hơn đẩy bạc ra.',
      ],
      answer: 'Mg: điện phân nóng chảy; Fe: nhiệt luyện; Ag: thuỷ luyện.',
    },
    {
      problem:
        'Một loại quặng hematite chứa $80\\%$ $\\mathrm{Fe_2O_3}$ về khối lượng. Tính khối lượng sắt có thể thu được từ $1$ tấn quặng này, giả sử hiệu suất $100\\%$ (Fe = 56, O = 16).',
      steps: [
        'Khối lượng $\\mathrm{Fe_2O_3}$ trong $1$ tấn quặng: $1 \\times 80\\% = 0{,}8$ tấn $= 800$ kg.',
        '$M_{\\mathrm{Fe_2O_3}} = 2 \\times 56 + 3 \\times 16 = 160$; cứ $160$ kg $\\mathrm{Fe_2O_3}$ chứa $112$ kg $\\mathrm{Fe}$.',
        '$m_{\\mathrm{Fe}} = 800 \\times \\dfrac{112}{160} = 560$ kg.',
      ],
      answer: '$560$ kg sắt.',
    },
    {
      problem:
        'Điện phân nóng chảy $20{,}4$ tấn $\\mathrm{Al_2O_3}$. Tính khối lượng nhôm thu được, biết hiệu suất $100\\%$ (Al = 27, O = 16).',
      steps: [
        '$2\\mathrm{Al_2O_3} \\rightarrow 4\\mathrm{Al} + 3\\mathrm{O_2}$: mỗi phân tử $\\mathrm{Al_2O_3}$ cho $2$ nguyên tử $\\mathrm{Al}$.',
        '$M_{\\mathrm{Al_2O_3}} = 2 \\times 27 + 3 \\times 16 = 102$; cứ $102$ tấn $\\mathrm{Al_2O_3}$ cho $54$ tấn $\\mathrm{Al}$.',
        '$m_{\\mathrm{Al}} = 20{,}4 \\times \\dfrac{54}{102} = 10{,}8$ tấn.',
      ],
      answer: '$10{,}8$ tấn nhôm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phương pháp được dùng để sản xuất nhôm từ quặng bauxite là',
      options: [
        'dùng CO khử $\\mathrm{Al_2O_3}$ ở nhiệt độ cao',
        'điện phân $\\mathrm{Al_2O_3}$ nóng chảy',
        'dùng sắt đẩy nhôm ra khỏi dung dịch muối',
        'đãi quặng trong nước',
      ],
      answer: 1,
      hints: ['Nhôm đứng trước Zn, Fe trong dãy hoạt động: nó hoạt động mạnh.'],
      solution:
        'Nhôm hoạt động mạnh, các chất khử thông thường không khử được $\\mathrm{Al_2O_3}$; sắt yếu hơn nhôm nên không đẩy được nhôm. Phải điện phân $\\mathrm{Al_2O_3}$ nóng chảy.',
    },
    {
      type: 'choice',
      prompt: 'Trong lò cao, chất trực tiếp khử iron(III) oxide thành sắt chủ yếu là',
      options: ['$\\mathrm{O_2}$', '$\\mathrm{CO_2}$', '$\\mathrm{CO}$', '$\\mathrm{CaO}$'],
      answer: 2,
      hints: [
        'Than cốc cháy tạo $\\mathrm{CO_2}$, rồi $\\mathrm{CO_2}$ gặp than nóng đỏ tạo ra một khí khác.',
      ],
      solution:
        '$\\mathrm{C} + \\mathrm{CO_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO}$; khí $\\mathrm{CO}$ khử $\\mathrm{Fe_2O_3}$: $3\\mathrm{CO} + \\mathrm{Fe_2O_3} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Đá vôi được nạp vào lò cao để',
      options: [
        'làm chất khử oxide sắt',
        'tạo xỉ, loại bỏ tạp chất $\\mathrm{SiO_2}$ trong quặng',
        'làm nhiên liệu cung cấp nhiệt',
        'tăng hàm lượng carbon trong gang',
      ],
      answer: 1,
      hints: ['Đá vôi bị phân huỷ thành CaO; CaO kết hợp với cát.'],
      solution:
        '$\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$, $\\mathrm{CaO} + \\mathrm{SiO_2} \\xrightarrow{t^\\circ} \\mathrm{CaSiO_3}$ (xỉ). Đá vôi là chất tạo xỉ, giúp loại bỏ cát, đá lẫn trong quặng.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau cơ bản về thành phần giữa gang và thép là',
      options: [
        'gang chứa $2\\%$ – $5\\%$ carbon, thép chứa dưới $2\\%$ carbon',
        'gang không chứa carbon, thép chứa carbon',
        'gang là kim loại nguyên chất, thép là hợp kim',
        'gang chứa chromium, thép thì không',
      ],
      answer: 0,
      hints: ['Luyện thép là làm giảm hàm lượng carbon trong gang.'],
      solution:
        'Gang và thép đều là hợp kim của sắt với carbon; gang chứa $2\\%$ – $5\\%$ carbon, thép chứa dưới $2\\%$ carbon.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hợp kim với một ứng dụng phù hợp.',
      left: ['Duralumin', 'Inox', 'Gang', 'Thép'],
      right: [
        'Đúc nắp cống, ống dẫn nước',
        'Chế tạo thân máy bay',
        'Làm khung nhà, cầu, đường ray',
        'Làm nồi, thìa, dụng cụ y tế',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Máy bay cần vật liệu vừa nhẹ vừa bền; dụng cụ y tế cần không gỉ.'],
      solution:
        'Duralumin: máy bay (nhẹ, bền); inox: nồi, thìa, dụng cụ y tế (không gỉ); gang: nắp cống, ống nước (cứng, đúc được); thép: khung nhà, cầu, đường ray (cứng, đàn hồi, bền).',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào về hợp kim là đúng?',
      options: [
        'Hợp kim có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác.',
        'Hợp kim chỉ gồm các kim loại, không chứa phi kim.',
        'Hợp kim thường cứng và bền hơn kim loại nguyên chất.',
        'Inox là hợp kim của sắt với chromium, nickel và carbon.',
      ],
      answers: [0, 2, 3],
      hints: ['Gang là hợp kim của sắt với carbon, một phi kim.'],
      solution:
        'Hợp kim chứa kim loại cơ bản cùng kim loại hoặc phi kim khác (gang có carbon), thường cứng, bền hơn kim loại nguyên chất; inox gồm Fe, Cr, Ni, C. Phát biểu thứ hai sai.',
    },
    {
      type: 'text',
      prompt:
        'Quặng dùng để sản xuất nhôm, có thành phần chính là $\\mathrm{Al_2O_3}$, có tên là gì?',
      accept: ['bauxite', 'bauxit', 'quặng bauxite', 'quặng bauxit', 'boxit', 'quặng boxit'],
      hints: ['Tên quặng bắt đầu bằng chữ “b”.'],
      solution: 'Quặng bauxite.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng sắt (theo kg) thu được khi khử hoàn toàn $320$ kg $\\mathrm{Fe_2O_3}$ bằng CO (Fe = 56, O = 16).',
      answer: 224,
      tolerance: 0.5,
      unit: 'kg',
      hints: ['$160$ kg $\\mathrm{Fe_2O_3}$ chứa $112$ kg Fe.'],
      solution: '$m_{\\mathrm{Fe}} = 320 \\times \\dfrac{112}{160} = 224$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Từ $560$ kg sắt luyện được bao nhiêu kg gang chứa $95\\%$ sắt về khối lượng? Làm tròn đến hàng đơn vị.',
      answer: 589,
      tolerance: 0.5,
      unit: 'kg',
      hints: ['Sắt chỉ chiếm $95\\%$ khối lượng gang: $m_{\\text{gang}} \\times 95\\% = 560$.'],
      solution:
        '$m_{\\text{gang}} = \\dfrac{560}{0{,}95} \\approx 589{,}47$ kg, làm tròn đến hàng đơn vị được $589$ kg.',
    },
  ],
  takeaways: [
    'Chọn phương pháp tách kim loại theo mức độ hoạt động: điện phân nóng chảy (Na, Ca, Mg, Al), nhiệt luyện (Zn, Fe, Pb), thuỷ luyện (Ag, Au).',
    'Lò cao: than cốc tạo CO; $3\\mathrm{CO} + \\mathrm{Fe_2O_3} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$; đá vôi tạo xỉ $\\mathrm{CaSiO_3}$.',
    'Luyện thép: dùng oxygen oxi hoá bớt C, Si, Mn trong gang.',
    'Nhôm được sản xuất bằng điện phân $\\mathrm{Al_2O_3}$ nóng chảy từ quặng bauxite.',
    'Hợp kim (gang, thép, inox, duralumin) cứng, bền, chống gỉ tốt hơn kim loại nguyên chất.',
  ],
};
