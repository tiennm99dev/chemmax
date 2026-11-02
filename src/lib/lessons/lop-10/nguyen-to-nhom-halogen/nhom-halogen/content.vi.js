/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhóm halogen: trạng thái tự nhiên, cấu tạo nguyên tử và phân tử, tính chất vật lí, tính chất hoá học, tính oxi hoá giảm dần từ fluorine đến iodine và cách điều chế chlorine.',
  intro:
    'Muối ăn trên bàn, nước Javel tẩy quần áo, chlorine khử trùng nước máy và iodine sát trùng vết thương đều liên quan đến một nhóm nguyên tố: nhóm halogen. Vì sao chúng hoạt động mạnh đến mức trong tự nhiên chỉ gặp ở dạng hợp chất? Và trong bốn halogen thường gặp, nguyên tố nào mạnh nhất?',
  objectives: [
    'Nêu được trạng thái tự nhiên của các halogen.',
    'Mô tả được cấu tạo nguyên tử, phân tử và số oxi hoá của các halogen.',
    'Giải thích được xu hướng biến đổi nhiệt độ nóng chảy, nhiệt độ sôi từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$.',
    'Viết được phương trình của halogen với kim loại, hydrogen, nước, dung dịch kiềm và dung dịch muối halide.',
    'Dùng phản ứng đẩy để so sánh tính oxi hoá của chlorine, bromine, iodine.',
  ],
  sections: [
    {
      heading: 'Trạng thái tự nhiên',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm VIIA gồm các nguyên tố fluorine (F), chlorine (Cl), bromine (Br), iodine (I), astatine (At) và tennessine (Ts). At và Ts là các nguyên tố phóng xạ, nên bài này chỉ xét bốn nguyên tố đầu.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chỉ gặp ở dạng hợp chất',
          text: 'Các halogen hoạt động hoá học mạnh nên trong tự nhiên chỉ tồn tại ở dạng hợp chất, chủ yếu là muối halide, không có đơn chất.',
        },
        {
          type: 'list',
          items: [
            'Fluorine: có trong khoáng vật fluorite ($\\mathrm{CaF_2}$), cryolite ($\\mathrm{Na_3AlF_6}$).',
            'Chlorine: nhiều nhất trong nước biển ở dạng NaCl, ngoài ra còn trong muối mỏ.',
            'Bromine: chủ yếu ở dạng muối bromide trong nước biển.',
            'Iodine: có trong nước biển và rong biển.',
            'Trong cơ thể người: ion $\\mathrm{Cl^-}$ có trong máu và dịch vị dạ dày; iodine có ở tuyến giáp dưới dạng hợp chất hữu cơ.',
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo nguyên tử và phân tử',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu hình electron và độ âm điện của các halogen',
          head: ['Nguyên tố', '$Z$', 'Chu kì', 'Cấu hình electron', 'Độ âm điện'],
          rows: [
            ['F', '$9$', '$2$', '$[\\mathrm{He}]2s^22p^5$', '$3{,}98$'],
            ['Cl', '$17$', '$3$', '$[\\mathrm{Ne}]3s^23p^5$', '$3{,}16$'],
            ['Br', '$35$', '$4$', '$[\\mathrm{Ar}]3d^{10}4s^24p^5$', '$2{,}96$'],
            ['I', '$53$', '$5$', '$[\\mathrm{Kr}]4d^{10}5s^25p^5$', '$2{,}66$'],
          ],
        },
        {
          type: 'list',
          items: [
            'Lớp ngoài cùng có cấu hình $ns^2np^5$, tức $7$ electron, chỉ thiếu $1$ electron là đạt cấu hình bền của khí hiếm. Vì vậy halogen dễ nhận thêm $1$ electron: $\\mathrm{X} + 1e \\rightarrow \\mathrm{X^-}$.',
            'Phân tử gồm hai nguyên tử, $\\mathrm{X_2}$, liên kết với nhau bằng một liên kết cộng hoá trị không phân cực X–X.',
            'Từ F đến I, bán kính nguyên tử tăng dần, độ âm điện giảm dần.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Số oxi hoá',
          text: 'Trong hợp chất, fluorine chỉ có số oxi hoá $-1$ vì có độ âm điện lớn nhất. Chlorine, bromine, iodine có số oxi hoá $-1$; khi liên kết với nguyên tố có độ âm điện lớn hơn, chúng còn có thể có số oxi hoá $+1$, $+3$, $+5$, $+7$, ví dụ $\\mathrm{NaClO}$, $\\mathrm{KClO_3}$, $\\mathrm{HClO_4}$.',
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'table',
          caption: 'Một số tính chất vật lí của các đơn chất halogen (làm tròn đến độ)',
          head: [
            'Đơn chất',
            'Thể ở điều kiện thường',
            'Màu',
            'Nhiệt độ nóng chảy (°C)',
            'Nhiệt độ sôi (°C)',
          ],
          rows: [
            ['$\\mathrm{F_2}$', 'khí', 'lục nhạt', '$-220$', '$-188$'],
            ['$\\mathrm{Cl_2}$', 'khí', 'vàng lục', '$-101$', '$-34$'],
            ['$\\mathrm{Br_2}$', 'lỏng', 'nâu đỏ', '$-7$', '$59$'],
            ['$\\mathrm{I_2}$', 'rắn', 'tím đen', '$114$', '$184$'],
          ],
        },
        {
          type: 'p',
          text: 'Từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, nhiệt độ nóng chảy và nhiệt độ sôi tăng dần, do khối lượng phân tử tăng và tương tác van der Waals giữa các phân tử tăng. Kéo thanh nhiệt độ để thấy mỗi halogen đổi thể ở đâu.',
        },
        { type: 'widget', name: 'trang-thai' },
        {
          type: 'list',
          items: [
            'Các halogen ít tan trong nước, tan nhiều hơn trong dung môi hữu cơ như ethanol, benzene.',
            'Iodine dễ thăng hoa: khi đun nóng, tinh thể chuyển thẳng thành hơi màu tím. Dung dịch iodine loãng trong ethanol được dùng làm thuốc sát trùng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Hơi halogen độc và gây hại đường hô hấp; bromine lỏng gây bỏng nặng khi dây vào da. Không tự làm thí nghiệm với các chất này khi không có giáo viên hướng dẫn.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính oxi hoá giảm dần',
          text: 'Halogen là những phi kim điển hình, có tính oxi hoá mạnh. Từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, tính oxi hoá giảm dần: $\\mathrm{F_2} > \\mathrm{Cl_2} > \\mathrm{Br_2} > \\mathrm{I_2}$.',
        },
        {
          type: 'p',
          text: 'Với kim loại, halogen oxi hoá kim loại, tạo muối halide. Chlorine đưa sắt lên số oxi hoá $+3$, còn iodine yếu hơn chỉ đưa sắt lên $+2$:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Na} + \\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{NaCl}',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe} + \\mathrm{I_2} \\xrightarrow{t^\\circ} \\mathrm{FeI_2}',
        },
        {
          type: 'p',
          text: 'Với hydrogen, mức độ phản ứng giảm dần từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$:',
        },
        {
          type: 'table',
          head: ['Phương trình', 'Điều kiện và mức độ'],
          rows: [
            [
              '$\\mathrm{H_2} + \\mathrm{F_2} \\rightarrow 2\\mathrm{HF}$',
              'Nổ ngay cả trong bóng tối, ở nhiệt độ rất thấp',
            ],
            [
              '$\\mathrm{H_2} + \\mathrm{Cl_2} \\rightarrow 2\\mathrm{HCl}$',
              'Cần chiếu sáng hoặc đốt nóng; có thể gây nổ',
            ],
            [
              '$\\mathrm{H_2} + \\mathrm{Br_2} \\rightarrow 2\\mathrm{HBr}$',
              'Cần đun nóng, phản ứng êm hơn',
            ],
            [
              '$\\mathrm{H_2} + \\mathrm{I_2} \\rightleftharpoons 2\\mathrm{HI}$',
              'Cần đun nóng; phản ứng thuận nghịch',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Với nước, fluorine phản ứng mãnh liệt với nước và đẩy oxygen ra. Chlorine, bromine, iodine phản ứng chậm hơn và thuận nghịch, mức độ giảm dần từ chlorine đến iodine:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{F_2} + 2\\mathrm{H_2O} \\rightarrow 4\\mathrm{HF} + \\mathrm{O_2}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cl_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{HCl} + \\mathrm{HClO}',
        },
        {
          type: 'p',
          text: 'Trong phản ứng thứ hai, chlorine vừa là chất oxi hoá vừa là chất khử: số oxi hoá của Cl đổi từ $0$ thành $-1$ và $+1$. HClO có tính oxi hoá mạnh, vì thế chlorine ẩm tẩy màu được giấy màu và được dùng để khử trùng nước sinh hoạt.',
        },
        {
          type: 'p',
          text: 'Với dung dịch kiềm ở nhiệt độ thường, chlorine tạo nước Javel dùng để tẩy rửa và khử trùng; khi đun nóng thì tạo muối chlorate. $\\mathrm{KClO_3}$ là chất oxi hoá mạnh, dùng làm thuốc nổ và đầu que diêm:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '3\\mathrm{Cl_2} + 6\\mathrm{KOH} \\xrightarrow{t^\\circ} 5\\mathrm{KCl} + \\mathrm{KClO_3} + 3\\mathrm{H_2O}',
        },
      ],
    },
    {
      heading: 'Halogen đẩy halogen khỏi dung dịch muối',
      blocks: [
        {
          type: 'p',
          text: 'Halogen mạnh hơn đẩy được halogen yếu hơn ra khỏi dung dịch muối halide. Đây là cách trực tiếp nhất để so sánh tính oxi hoá:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cl_2} + 2\\mathrm{NaBr} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{Br_2}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cl_2} + 2\\mathrm{NaI} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{I_2}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Br_2} + 2\\mathrm{NaI} \\rightarrow 2\\mathrm{NaBr} + \\mathrm{I_2}',
        },
        {
          type: 'list',
          items: [
            'Dung dịch muối không màu chuyển màu do halogen sinh ra: bromine cho màu vàng cam, iodine cho màu vàng nâu.',
            'Hồ tinh bột gặp iodine chuyển sang màu xanh tím, nên dùng để phát hiện iodine.',
            'Phản ứng đầu được dùng để sản xuất bromine từ nước biển.',
            'Fluorine không dùng để đẩy các halogen khác trong dung dịch muối, vì nó phản ứng ngay với nước.',
          ],
        },
      ],
    },
    {
      heading: 'Điều chế chlorine',
      blocks: [
        {
          type: 'p',
          text: 'Trong phòng thí nghiệm, cho chất oxi hoá mạnh như $\\mathrm{MnO_2}$ hoặc $\\mathrm{KMnO_4}$ tác dụng với dung dịch HCl đặc:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{KMnO_4} + 16\\mathrm{HCl} \\rightarrow 2\\mathrm{KCl} + 2\\mathrm{MnCl_2} + 5\\mathrm{Cl_2} + 8\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Trong công nghiệp, điện phân dung dịch NaCl bão hoà có màng ngăn, thu được đồng thời NaOH, hydrogen và chlorine:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaCl} + 2\\mathrm{H_2O} \\xrightarrow[\\text{có màng ngăn}]{\\text{điện phân dung dịch}} 2\\mathrm{NaOH} + \\mathrm{H_2} + \\mathrm{Cl_2}',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm ảo: halogen đẩy nhau',
    instruction:
      'Chọn một nước halogen và một dung dịch muối, dự đoán có phản ứng hay không, rồi quan sát màu trong ống. Có thể thêm hồ tinh bột để kiểm tra iodine. Thử đủ chín cặp để xếp thứ tự tính oxi hoá.',
  },
  examples: [
    {
      problem:
        'Có ba dung dịch NaCl, NaBr, NaI đều không màu. Nhỏ nước bromine lần lượt vào từng dung dịch. Cho biết hiện tượng và viết phương trình nếu có phản ứng.',
      steps: [
        'Theo thứ tự tính oxi hoá $\\mathrm{Cl_2} > \\mathrm{Br_2} > \\mathrm{I_2}$, bromine chỉ đẩy được halogen yếu hơn nó, tức iodine.',
        'Với NaCl và NaBr: không có phản ứng, ống chỉ có màu vàng cam của nước bromine.',
        'Với NaI: $\\mathrm{Br_2} + 2\\mathrm{NaI} \\rightarrow 2\\mathrm{NaBr} + \\mathrm{I_2}$, dung dịch chuyển sang màu vàng nâu của iodine; thêm hồ tinh bột sẽ thấy màu xanh tím.',
      ],
      answer: 'Chỉ NaI phản ứng, sinh ra iodine.',
    },
    {
      problem:
        'Đốt $5{,}6$ g Fe trong khí chlorine dư. Tính khối lượng muối thu được và thể tích khí $\\mathrm{Cl_2}$ đã phản ứng ở điều kiện chuẩn. Biết $M_{\\mathrm{Fe}} = 56$ g/mol, $M_{\\mathrm{Cl}} = 35{,}5$ g/mol, ở điều kiện chuẩn $1$ mol khí chiếm $24{,}79$ L.',
      steps: [
        'Phương trình: $2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}$.',
        '$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol, nên $n_{\\mathrm{FeCl_3}} = 0{,}1$ mol và $n_{\\mathrm{Cl_2}} = 0{,}1 \\cdot \\dfrac{3}{2} = 0{,}15$ mol.',
        '$M_{\\mathrm{FeCl_3}} = 56 + 3 \\cdot 35{,}5 = 162{,}5$ g/mol, nên $m_{\\mathrm{FeCl_3}} = 0{,}1 \\cdot 162{,}5 = 16{,}25$ g.',
        '$V_{\\mathrm{Cl_2}} = 0{,}15 \\cdot 24{,}79 = 3{,}7185$ L.',
      ],
      answer: '$m_{\\mathrm{FeCl_3}} = 16{,}25$ g; $V_{\\mathrm{Cl_2}} = 3{,}7185$ L.',
    },
    {
      problem:
        'Cho $8{,}7$ g $\\mathrm{MnO_2}$ tác dụng hết với dung dịch HCl đặc, đun nóng. Tính thể tích khí chlorine thu được ở điều kiện chuẩn. Biết $M_{\\mathrm{MnO_2}} = 87$ g/mol.',
      steps: [
        'Phương trình: $\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}$.',
        '$n_{\\mathrm{MnO_2}} = \\dfrac{8{,}7}{87} = 0{,}1$ mol, nên $n_{\\mathrm{Cl_2}} = 0{,}1$ mol.',
        '$V_{\\mathrm{Cl_2}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
      ],
      answer: '$V_{\\mathrm{Cl_2}} = 2{,}479$ L.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Lớp electron ngoài cùng của nguyên tử halogen có bao nhiêu electron?',
      options: ['$1$', '$5$', '$7$', '$8$'],
      answer: 2,
      hints: ['Cấu hình lớp ngoài cùng là $ns^2np^5$.'],
      solution: 'Cấu hình $ns^2np^5$ có $2 + 5 = 7$ electron ở lớp ngoài cùng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trong tự nhiên không gặp halogen ở dạng đơn chất?',
      options: [
        'Vì halogen có tính oxi hoá mạnh, dễ phản ứng tạo hợp chất',
        'Vì halogen là chất khí nên bay hết vào không khí',
        'Vì hàm lượng halogen trong vỏ Trái Đất bằng không',
        'Vì halogen có tính khử rất mạnh',
      ],
      answer: 0,
      hints: ['Nghĩ đến số electron còn thiếu ở lớp ngoài cùng của nguyên tử halogen.'],
      solution:
        'Nguyên tử halogen dễ nhận $1$ electron nên có tính oxi hoá mạnh, phản ứng với nhiều chất trong tự nhiên và chỉ tồn tại ở dạng hợp chất.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đơn chất với thể và màu của nó ở điều kiện thường.',
      left: ['$\\mathrm{F_2}$', '$\\mathrm{Cl_2}$', '$\\mathrm{Br_2}$', '$\\mathrm{I_2}$'],
      right: ['khí, lục nhạt', 'khí, vàng lục', 'lỏng, nâu đỏ', 'rắn, tím đen'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Từ trên xuống trong nhóm, các đơn chất chuyển từ khí sang lỏng rồi sang rắn.'],
      solution:
        '$\\mathrm{F_2}$: khí, lục nhạt. $\\mathrm{Cl_2}$: khí, vàng lục. $\\mathrm{Br_2}$: lỏng, nâu đỏ. $\\mathrm{I_2}$: rắn, tím đen.',
    },
    {
      type: 'choice',
      prompt: 'Từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, nhiệt độ sôi tăng dần chủ yếu là do',
      options: [
        'khối lượng phân tử và tương tác van der Waals tăng',
        'liên kết hydrogen giữa các phân tử tăng',
        'phân tử phân cực mạnh dần',
        'liên kết X–X bền dần',
      ],
      answer: 0,
      hints: ['Phân tử $\\mathrm{X_2}$ không phân cực, nên giữa chúng chỉ có loại tương tác nào?'],
      solution:
        'Phân tử $\\mathrm{X_2}$ không phân cực và không tạo liên kết hydrogen. Khối lượng và kích thước phân tử tăng làm tương tác van der Waals tăng, nên nhiệt độ sôi tăng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các đơn chất theo tính oxi hoá giảm dần.',
      items: ['$\\mathrm{Br_2}$', '$\\mathrm{F_2}$', '$\\mathrm{I_2}$', '$\\mathrm{Cl_2}$'],
      answer: [1, 3, 0, 2],
      hints: ['Độ âm điện càng lớn thì càng dễ nhận electron.'],
      solution:
        'Tính oxi hoá giảm theo chiều độ âm điện giảm: $\\mathrm{F_2} > \\mathrm{Cl_2} > \\mathrm{Br_2} > \\mathrm{I_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Những phản ứng nào xảy ra được trong dung dịch?',
      options: [
        '$\\mathrm{Cl_2} + 2\\mathrm{NaBr}$',
        '$\\mathrm{Br_2} + 2\\mathrm{NaCl}$',
        '$\\mathrm{Br_2} + 2\\mathrm{NaI}$',
        '$\\mathrm{I_2} + 2\\mathrm{NaBr}$',
      ],
      answers: [0, 2],
      hints: ['Halogen đơn chất phải có tính oxi hoá mạnh hơn halogen nằm trong muối.'],
      solution:
        '$\\mathrm{Cl_2}$ đẩy được $\\mathrm{Br_2}$ và $\\mathrm{Br_2}$ đẩy được $\\mathrm{I_2}$. Hai phản ứng còn lại không xảy ra vì halogen đơn chất yếu hơn halogen trong muối.',
    },
    {
      type: 'choice',
      prompt: 'Cho sắt tác dụng với chlorine dư khi đun nóng, sản phẩm là',
      options: [
        '$\\mathrm{FeCl_2}$',
        '$\\mathrm{FeCl_3}$',
        '$\\mathrm{FeCl_2}$ và $\\mathrm{H_2}$',
        'Không có phản ứng',
      ],
      answer: 1,
      hints: ['Chlorine là chất oxi hoá mạnh, đưa kim loại lên số oxi hoá cao.'],
      solution:
        '$2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}$: sắt lên số oxi hoá $+3$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$, chlorine đóng vai trò gì?',
      options: [
        'Chỉ là chất oxi hoá',
        'Chỉ là chất khử',
        'Vừa là chất oxi hoá, vừa là chất khử',
        'Không đổi số oxi hoá',
      ],
      answer: 2,
      hints: ['Xác định số oxi hoá của Cl trong $\\mathrm{NaCl}$ và trong $\\mathrm{NaClO}$.'],
      solution:
        'Cl đổi từ $0$ thành $-1$ trong NaCl (bị khử) và $+1$ trong NaClO (bị oxi hoá), nên $\\mathrm{Cl_2}$ vừa là chất oxi hoá, vừa là chất khử.',
    },
    {
      type: 'choice',
      prompt: 'Số oxi hoá của chlorine trong $\\mathrm{KClO_3}$ là',
      options: ['$-1$', '$+1$', '$+5$', '$+7$'],
      answer: 2,
      hints: ['K có số oxi hoá $+1$, O có số oxi hoá $-2$, tổng trong phân tử bằng $0$.'],
      solution: '$(+1) + x + 3 \\cdot (-2) = 0$, suy ra $x = +5$.',
    },
    {
      type: 'number',
      prompt:
        'Một nhà máy nước dùng $5$ mg $\\mathrm{Cl_2}$ để khử trùng $1$ L nước sinh hoạt. Cần bao nhiêu kilôgam $\\mathrm{Cl_2}$ để khử trùng $50\\,000\\ \\mathrm{m^3}$ nước?',
      answer: 250,
      unit: 'kg',
      hints: [
        '$1\\ \\mathrm{m^3} = 1000$ L.',
        'Đổi tổng số miligam sang kilôgam: $1$ kg $= 10^6$ mg.',
      ],
      solution:
        '$50\\,000\\ \\mathrm{m^3} = 5 \\cdot 10^7$ L. Khối lượng $\\mathrm{Cl_2}$ là $5 \\cdot 5 \\cdot 10^7 = 2{,}5 \\cdot 10^8$ mg $= 250$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Cho khí chlorine vừa đủ tác dụng hoàn toàn với dung dịch chứa $20{,}6$ g NaBr. Tính khối lượng bromine sinh ra. Biết $M_{\\mathrm{Na}} = 23$, $M_{\\mathrm{Br}} = 80$ g/mol.',
      answer: 16,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{Cl_2} + 2\\mathrm{NaBr} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{Br_2}$.',
        'Tính số mol NaBr với $M = 103$ g/mol, rồi chia đôi để có số mol $\\mathrm{Br_2}$.',
      ],
      solution:
        '$n_{\\mathrm{NaBr}} = \\dfrac{20{,}6}{103} = 0{,}2$ mol, nên $n_{\\mathrm{Br_2}} = 0{,}1$ mol và $m_{\\mathrm{Br_2}} = 0{,}1 \\cdot 160 = 16$ g.',
    },
  ],
  takeaways: [
    'Lớp ngoài cùng $ns^2np^5$, dễ nhận $1$ electron; trong tự nhiên chỉ gặp halogen ở dạng hợp chất.',
    'Từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$: nhiệt độ nóng chảy, nhiệt độ sôi tăng dần; tính oxi hoá giảm dần.',
    'Halogen tác dụng với kim loại, hydrogen, nước, kiềm; mức độ giảm dần từ fluorine đến iodine.',
    'Halogen mạnh đẩy halogen yếu ra khỏi dung dịch muối: $\\mathrm{Cl_2}$ đẩy $\\mathrm{Br_2}$, $\\mathrm{I_2}$; $\\mathrm{Br_2}$ đẩy $\\mathrm{I_2}$.',
    'Điều chế chlorine: phòng thí nghiệm từ $\\mathrm{MnO_2}$ hoặc $\\mathrm{KMnO_4}$ với HCl đặc; công nghiệp bằng điện phân dung dịch NaCl có màng ngăn.',
  ],
};
