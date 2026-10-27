/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Carbohydrate là hợp chất hữu cơ tạo bởi C, H, O, có công thức chung Cn(H2O)m. Glucose C6H12O6 có trong quả chín và trong máu, có phản ứng tráng bạc và phản ứng lên men rượu. Saccharose C12H22O11 có trong mía, củ cải đường, thốt nốt; không tráng bạc nhưng bị thuỷ phân thành glucose và fructose.',
  intro:
    'Quả nho chín, mật ong và cây mía đều ngọt, nhưng chất tạo vị ngọt trong chúng không giống nhau. Có một phép thử làm thành ống nghiệm sáng lên như gương, giúp phân biệt đường trong quả nho với đường kính làm từ mía. Phép thử đó là gì?',
  objectives: [
    'Nêu được thành phần nguyên tố và công thức chung của carbohydrate.',
    'Nêu được công thức phân tử, trạng thái tự nhiên, tính chất vật lí của glucose và saccharose.',
    'Trình bày được phản ứng tráng bạc, phản ứng lên men rượu của glucose và phản ứng thuỷ phân saccharose; viết được phương trình hoá học.',
    'Nêu được vai trò, ứng dụng của glucose và saccharose; tính được khối lượng các chất theo phương trình.',
  ],
  sections: [
    {
      heading: 'Carbohydrate',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Carbohydrate',
          text: 'Carbohydrate là những hợp chất hữu cơ được cấu tạo từ ba nguyên tố carbon, hydrogen và oxygen, có công thức chung là $\\mathrm{C_n(H_2O)_m}$.',
        },
        {
          type: 'table',
          head: ['Chất', 'Công thức phân tử', 'Viết theo dạng $\\mathrm{C_n(H_2O)_m}$'],
          rows: [
            ['Glucose', '$\\mathrm{C_6H_{12}O_6}$', '$\\mathrm{C_6(H_2O)_6}$'],
            ['Saccharose', '$\\mathrm{C_{12}H_{22}O_{11}}$', '$\\mathrm{C_{12}(H_2O)_{11}}$'],
            [
              'Tinh bột, cellulose',
              '$\\mathrm{(C_6H_{10}O_5)_n}$',
              '$\\mathrm{C_{6n}(H_2O)_{5n}}$',
            ],
          ],
          caption: 'Một số carbohydrate thường gặp',
        },
      ],
    },
    {
      heading: 'Trạng thái tự nhiên và tính chất vật lí',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Glucose', 'Saccharose'],
          rows: [
            [
              'Công thức phân tử',
              '$\\mathrm{C_6H_{12}O_6}$ ($M = 180$)',
              '$\\mathrm{C_{12}H_{22}O_{11}}$ ($M = 342$)',
            ],
            [
              'Trạng thái tự nhiên',
              'Có nhiều trong quả chín, nhất là quả nho; có trong máu người (khoảng $0{,}1\\%$)',
              'Có nhiều trong cây mía, củ cải đường, cây thốt nốt',
            ],
            [
              'Tính chất vật lí',
              'Chất rắn kết tinh, không màu, không mùi, vị ngọt, tan tốt trong nước',
              'Chất rắn kết tinh, không màu, không mùi, vị ngọt, tan tốt trong nước',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng tráng bạc của glucose',
          text: 'Cho glucose vào dung dịch silver nitrate trong ammonia rồi đun nóng nhẹ, bạc kim loại tạo thành bám lên thành ống nghiệm thành một lớp sáng như gương. Glucose bị oxi hoá thành gluconic acid.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} + \\mathrm{Ag_2O} \\xrightarrow{\\mathrm{NH_3},\\ t^\\circ} \\mathrm{C_6H_{12}O_7} + 2\\mathrm{Ag}\\downarrow',
        },
        {
          type: 'p',
          text: 'Saccharose không có phản ứng tráng bạc, vì vậy dùng phản ứng này để phân biệt glucose với saccharose.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng lên men rượu của glucose',
          text: 'Dưới tác dụng của enzyme (men rượu), ở nhiệt độ thích hợp ($30$ đến $35\\ ^\\circ\\mathrm{C}$), glucose chuyển thành ethylic alcohol và khí carbon dioxide. Phản ứng này dùng trong sản xuất bia, rượu và đồ uống có cồn.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}\\uparrow',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng thuỷ phân saccharose',
          text: 'Đun nóng dung dịch saccharose có acid làm xúc tác, hoặc dưới tác dụng của enzyme, saccharose bị thuỷ phân thành glucose và fructose (hai chất có cùng công thức phân tử $\\mathrm{C_6H_{12}O_6}$).',
        },
        {
          type: 'tex',
          tex: '\\underset{\\text{saccharose}}{\\mathrm{C_{12}H_{22}O_{11}}} + \\mathrm{H_2O} \\xrightarrow{\\text{acid},\\ t^\\circ} \\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}} + \\underset{\\text{fructose}}{\\mathrm{C_6H_{12}O_6}}',
        },
        {
          type: 'p',
          text: 'Dung dịch sau khi thuỷ phân có glucose nên cho phản ứng tráng bạc. Hãy tự kiểm chứng trong thí nghiệm ảo dưới đây.',
        },
      ],
    },
    {
      heading: 'Vai trò và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Glucose được tạo ra trong cây xanh nhờ quang hợp, và trong cơ thể động vật từ sự tiêu hoá carbohydrate; glucose là nguồn năng lượng chủ yếu của tế bào.',
            'Glucose dùng làm nguyên liệu trong dược phẩm (pha dịch truyền, thuốc tăng lực), thực phẩm, sản xuất đồ uống có cồn và tráng gương, tráng ruột phích.',
            'Saccharose cung cấp năng lượng cho cơ thể; là nguyên liệu của công nghiệp thực phẩm (bánh kẹo, nước giải khát), dùng làm chất tạo ngọt và pha chế thuốc.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ăn đường hợp lí',
          text: 'Ăn quá nhiều đường (bánh kẹo, nước ngọt) dễ gây sâu răng, thừa cân, béo phì và làm tăng nguy cơ mắc bệnh tiểu đường.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ống nghiệm tráng bạc',
    instruction:
      'Chọn chất trong ống nghiệm, bấm “Thêm AgNO₃/NH₃, đun nóng” và quan sát thành ống. Thử cả saccharose: lần đầu thử trực tiếp, lần sau đun với dung dịch acid trước để thuỷ phân. Kéo thanh trượt bên dưới để tính lượng bạc tạo ra từ glucose.',
  },
  examples: [
    {
      problem:
        'Cho $27$ g glucose tác dụng hoàn toàn với lượng dư dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$, đun nóng. Tính khối lượng bạc thu được (Ag = 108).',
      steps: [
        '$n_{\\text{glucose}} = \\dfrac{27}{180} = 0{,}15$ mol.',
        '$\\mathrm{C_6H_{12}O_6} + \\mathrm{Ag_2O} \\xrightarrow{\\mathrm{NH_3},\\ t^\\circ} \\mathrm{C_6H_{12}O_7} + 2\\mathrm{Ag}$: $n_{\\mathrm{Ag}} = 2 \\times 0{,}15 = 0{,}3$ mol.',
        '$m_{\\mathrm{Ag}} = 0{,}3 \\times 108 = 32{,}4$ g.',
      ],
      answer: 'Thu được $32{,}4$ g bạc.',
    },
    {
      problem:
        'Lên men $360$ g glucose với hiệu suất $75\\%$. Tính khối lượng ethylic alcohol thu được và thể tích khí carbon dioxide sinh ra ở điều kiện chuẩn.',
      steps: [
        '$n_{\\text{glucose}} = \\dfrac{360}{180} = 2$ mol.',
        '$\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$: theo lí thuyết $n_{\\mathrm{C_2H_5OH}} = n_{\\mathrm{CO_2}} = 4$ mol.',
        'Với hiệu suất $75\\%$: $n_{\\mathrm{C_2H_5OH}} = n_{\\mathrm{CO_2}} = 4 \\times 75\\% = 3$ mol.',
        '$m_{\\mathrm{C_2H_5OH}} = 3 \\times 46 = 138$ g; $V_{\\mathrm{CO_2}} = 3 \\times 24{,}79 = 74{,}37$ L.',
      ],
      answer: 'Thu được $138$ g ethylic alcohol và $74{,}37$ L khí carbon dioxide.',
    },
    {
      problem: 'Thuỷ phân hoàn toàn $68{,}4$ g saccharose. Tính khối lượng glucose tạo thành.',
      steps: [
        '$n_{\\text{saccharose}} = \\dfrac{68{,}4}{342} = 0{,}2$ mol.',
        'Một phân tử saccharose tạo một phân tử glucose và một phân tử fructose: $n_{\\text{glucose}} = 0{,}2$ mol.',
        '$m_{\\text{glucose}} = 0{,}2 \\times 180 = 36$ g.',
      ],
      answer: 'Tạo thành $36$ g glucose.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của carbohydrate là',
      options: [
        '$\\mathrm{C_n(H_2O)_m}$',
        '$\\mathrm{C_nH_{2n+2}}$',
        '$\\mathrm{(RCOO)_3C_3H_5}$',
        '$\\mathrm{C_nH_{2n}}$',
      ],
      answer: 0,
      hints: ['Carbohydrate chứa ba nguyên tố C, H và O; số nguyên tử H gấp đôi số nguyên tử O.'],
      solution:
        'Carbohydrate có công thức chung $\\mathrm{C_n(H_2O)_m}$, ví dụ glucose $\\mathrm{C_6(H_2O)_6}$, saccharose $\\mathrm{C_{12}(H_2O)_{11}}$. $\\mathrm{C_nH_{2n+2}}$ là alkane, $\\mathrm{C_nH_{2n}}$ là alkene, $\\mathrm{(RCOO)_3C_3H_5}$ là chất béo.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử dùng để phân biệt dung dịch glucose với dung dịch saccharose là',
      options: [
        'dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$, đun nóng',
        'nước',
        'quỳ tím',
        'dung dịch NaCl',
      ],
      answer: 0,
      hints: ['Cả hai đều tan trong nước, có vị ngọt và không làm đổi màu quỳ tím.'],
      solution:
        'Glucose có phản ứng tráng bạc (tạo lớp bạc sáng), saccharose thì không, nên dùng dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$, đun nóng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất với nơi có nhiều chất đó trong tự nhiên.',
      left: ['Glucose', 'Saccharose', 'Chất béo'],
      right: ['Quả nho chín', 'Cây mía, củ cải đường', 'Mỡ động vật, dầu lạc', 'Muối ăn'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đường kính được sản xuất từ cây mía.'],
      solution:
        'Glucose có nhiều trong quả nho chín; saccharose trong mía, củ cải đường, thốt nốt; chất béo trong mỡ động vật và dầu thực vật.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu gam glucose để tráng một tấm gương, biết lượng bạc bám lên gương là $10{,}8$ g (hiệu suất $100\\%$)?',
      answer: 9,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_{\\mathrm{Ag}} = \\dfrac{10{,}8}{108}$ mol.', 'Một mol glucose tạo hai mol bạc.'],
      solution:
        '$n_{\\mathrm{Ag}} = 0{,}1$ mol; $n_{\\text{glucose}} = 0{,}05$ mol; $m = 0{,}05 \\times 180 = 9$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $36$ g glucose tác dụng với lượng dư dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$, đun nóng. Tính khối lượng bạc tạo thành, theo gam.',
      answer: 43.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\text{glucose}} = \\dfrac{36}{180}$ mol.',
        '$n_{\\mathrm{Ag}} = 2 n_{\\text{glucose}}$.',
      ],
      solution:
        '$n_{\\text{glucose}} = 0{,}2$ mol; $n_{\\mathrm{Ag}} = 0{,}4$ mol; $m_{\\mathrm{Ag}} = 0{,}4 \\times 108 = 43{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Lên men $90$ g glucose với hiệu suất $80\\%$. Tính khối lượng ethylic alcohol thu được, theo gam.',
      answer: 36.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Mỗi mol glucose cho $2$ mol ethylic alcohol theo lí thuyết.',
        'Nhân số mol theo lí thuyết với $80\\%$, rồi với $M = 46$ g/mol.',
      ],
      solution:
        '$n_{\\text{glucose}} = 0{,}5$ mol; theo lí thuyết $n_{\\mathrm{C_2H_5OH}} = 1$ mol; thực tế $1 \\times 80\\% = 0{,}8$ mol; $m = 0{,}8 \\times 46 = 36{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Lên men hoàn toàn $45$ g glucose. Tính thể tích khí $\\mathrm{CO_2}$ sinh ra ở điều kiện chuẩn, theo lít.',
      answer: 12.395,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$n_{\\text{glucose}} = \\dfrac{45}{180}$ mol; mỗi mol glucose tạo $2$ mol $\\mathrm{CO_2}$.',
        'Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\text{glucose}} = 0{,}25$ mol; $n_{\\mathrm{CO_2}} = 0{,}5$ mol; $V = 0{,}5 \\times 24{,}79 = 12{,}395$ L.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $34{,}2$ g saccharose. Tính khối lượng glucose thu được, theo gam.',
      answer: 18,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\text{saccharose}} = \\dfrac{34{,}2}{342}$ mol.',
        'Một phân tử saccharose cho một phân tử glucose và một phân tử fructose.',
      ],
      solution:
        '$n_{\\text{saccharose}} = 0{,}1$ mol; $n_{\\text{glucose}} = 0{,}1$ mol; $m = 0{,}1 \\times 180 = 18$ g.',
    },
    {
      type: 'multi',
      prompt: 'Glucose được dùng để làm gì?',
      options: [
        'Pha dịch truyền, thuốc tăng lực',
        'Tráng gương, tráng ruột phích',
        'Sản xuất đồ uống có cồn',
        'Nấu xà phòng',
      ],
      answers: [0, 1, 2],
      hints: ['Xà phòng được nấu từ chất béo và kiềm.'],
      solution:
        'Glucose dùng trong dược phẩm (dịch truyền, thuốc tăng lực), tráng gương, tráng ruột phích và lên men sản xuất đồ uống có cồn. Xà phòng được sản xuất từ chất béo.',
    },
    {
      type: 'choice',
      prompt:
        'Đun nóng dung dịch saccharose với vài giọt dung dịch $\\mathrm{H_2SO_4}$ loãng, trung hoà acid rồi thực hiện phản ứng tráng bạc. Hiện tượng quan sát được là',
      options: [
        'có lớp bạc sáng bám trên thành ống nghiệm',
        'không có hiện tượng gì vì saccharose không tráng bạc',
        'có khí không màu thoát ra mạnh',
        'dung dịch chuyển sang màu xanh tím',
      ],
      answer: 0,
      hints: ['Khi đun với acid, saccharose bị thuỷ phân thành những chất nào?'],
      solution:
        'Saccharose bị thuỷ phân thành glucose và fructose; dung dịch có glucose nên cho phản ứng tráng bạc, tạo lớp bạc sáng.',
    },
  ],
  takeaways: [
    'Carbohydrate gồm C, H, O; công thức chung $\\mathrm{C_n(H_2O)_m}$.',
    'Glucose $\\mathrm{C_6H_{12}O_6}$ và saccharose $\\mathrm{C_{12}H_{22}O_{11}}$ đều là chất rắn không màu, vị ngọt, tan tốt trong nước.',
    'Tráng bạc: $\\mathrm{C_6H_{12}O_6} + \\mathrm{Ag_2O} \\xrightarrow{\\mathrm{NH_3},\\ t^\\circ} \\mathrm{C_6H_{12}O_7} + 2\\mathrm{Ag}$; saccharose không tráng bạc.',
    'Lên men rượu: $\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$.',
    'Thuỷ phân saccharose (acid hoặc enzyme) tạo glucose và fructose.',
  ],
};
