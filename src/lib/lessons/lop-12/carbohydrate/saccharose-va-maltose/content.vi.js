/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Saccharose và maltose: hai disaccharide có cùng công thức C12H22O11. Cấu tạo từ hai đơn vị monosaccharide nối bằng liên kết glycoside, tính chất vật lí, tính chất hoá học (polyalcohol, thuỷ phân, tính khử của maltose), trạng thái tự nhiên, ứng dụng và sản xuất đường saccharose từ cây mía.',
  intro:
    'Đường kính trắng trong bếp là saccharose, còn kẹo mạch nha ngày Tết chứa nhiều maltose. Hai chất cùng công thức $\\mathrm{C_{12}H_{22}O_{11}}$, đều được ghép từ hai đơn vị monosaccharide. Thế nhưng maltose tráng được bạc còn saccharose thì không. Sự khác nhau nằm ở chỗ hai đơn vị được nối với nhau như thế nào.',
  objectives: [
    'Nêu được trạng thái tự nhiên và tính chất vật lí của saccharose, maltose.',
    'Trình bày được cấu tạo của saccharose và maltose: các đơn vị monosaccharide và liên kết glycoside.',
    'Trình bày được tính chất hoá học: tính chất của polyalcohol, phản ứng thuỷ phân; maltose có tính khử, saccharose không có.',
    'Nêu được ứng dụng của saccharose, maltose và các công đoạn sản xuất đường saccharose từ cây mía.',
  ],
  sections: [
    {
      heading: 'Trạng thái tự nhiên và tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Saccharose có nhiều trong cây mía, củ cải đường và hoa thốt nốt. Đường kính, đường cát, đường phèn đều là saccharose.',
            'Maltose có trong mầm của một số hạt ngũ cốc; maltose được tạo ra chủ yếu khi thuỷ phân tinh bột (nhờ enzyme amylase) và là thành phần chính của mạch nha.',
            'Saccharose và maltose là chất rắn kết tinh, không màu, dễ tan trong nước, có vị ngọt. Saccharose nóng chảy ở $185$ °C.',
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo phân tử',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết glycoside',
          text: 'Trong disaccharide, hai đơn vị monosaccharide nối với nhau qua một nguyên tử oxygen. Liên kết $\\mathrm{C{-}O{-}C}$ giữa hai đơn vị này gọi là liên kết glycoside; nó được tạo thành từ nhóm OH hemiacetal (hoặc hemiketal) của một đơn vị.',
        },
        {
          type: 'table',
          caption: 'Cấu tạo của saccharose và maltose',
          head: ['Chất', 'Các đơn vị', 'Liên kết', 'Nhóm OH hemiacetal tự do'],
          rows: [
            [
              'Saccharose',
              'một gốc α-glucose và một gốc β-fructose',
              'α-1,2-glycoside (C1 của glucose với C2 của fructose)',
              'Không còn: vòng không mở ra được',
            ],
            [
              'Maltose',
              'hai gốc α-glucose',
              'α-1,4-glycoside (C1 của gốc thứ nhất với C4 của gốc thứ hai)',
              'Còn ở C1 của gốc thứ hai: vòng mở ra tạo nhóm $\\mathrm{{-}CHO}$',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Tính chất của polyalcohol. Saccharose và maltose có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau nên hoà tan $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm ở nhiệt độ thường, tạo dung dịch màu xanh lam:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_{12}H_{22}O_{11}} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_{12}H_{21}O_{11})_2Cu} + 2\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Phản ứng thuỷ phân. Khi đun nóng với dung dịch acid hoặc nhờ enzyme, liên kết glycoside bị cắt, tạo hai monosaccharide:',
        },
        {
          type: 'tex',
          tex: '\\underset{\\text{saccharose}}{\\mathrm{C_{12}H_{22}O_{11}}} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} \\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}} + \\underset{\\text{fructose}}{\\mathrm{C_6H_{12}O_6}}',
        },
        {
          type: 'tex',
          tex: '\\underset{\\text{maltose}}{\\mathrm{C_{12}H_{22}O_{11}}} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} 2\\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính khử',
          text: 'Maltose còn nhóm OH hemiacetal nên mở vòng tạo nhóm $\\mathrm{{-}CHO}$: maltose phản ứng với thuốc thử Tollens tạo bạc và khử $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm khi đun nóng thành $\\mathrm{Cu_2O}$ đỏ gạch. Saccharose không có tính khử: không phản ứng với thuốc thử Tollens. Sau khi thuỷ phân, dung dịch saccharose chứa glucose và fructose nên lại tráng được bạc.',
        },
        { type: 'widget', name: 'thuoc-thu' },
      ],
    },
    {
      heading: 'Ứng dụng và sản xuất đường saccharose',
      blocks: [
        {
          type: 'list',
          items: [
            'Saccharose là chất tạo ngọt phổ biến trong đời sống: làm bánh kẹo, nước giải khát, đồ hộp; dùng pha chế thuốc trong ngành dược.',
            'Maltose dùng làm nguyên liệu sản xuất bia và làm chất tạo ngọt cho một số loại bánh kẹo (kẹo mạch nha).',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ép mía, thu nước mía (chứa khoảng $12$ đến $15\\%$ đường).',
            'Thêm vôi sữa vào nước mía để các tạp chất (acid hữu cơ, protein) kết tủa, lọc bỏ kết tủa.',
            'Sục khí $\\mathrm{CO_2}$ để loại bỏ calcium hydroxide dư thành $\\mathrm{CaCO_3}$, lọc bỏ.',
            'Tẩy màu dung dịch bằng khí $\\mathrm{SO_2}$ (hoặc than hoạt tính).',
            'Cô đặc dung dịch, để kết tinh và li tâm thu đường thô (đường vàng); tinh chế đường thô thu đường kính trắng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Ghép hai đơn vị bằng liên kết glycoside rồi thuỷ phân',
    instruction:
      'Chọn đơn vị thứ hai và nguyên tử carbon nối với C1 của α-glucose để tạo saccharose hoặc maltose; quan sát còn nhóm OH hemiacetal tự do hay không. Thử với thuốc thử Tollens, rồi bấm "Thuỷ phân" và thử lại để so sánh lượng bạc.',
  },
  examples: [
    {
      problem:
        'Thuỷ phân hoàn toàn $34{,}2$ g saccharose trong môi trường acid, trung hoà acid rồi cho toàn bộ dung dịch tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      steps: [
        '$n_{\\text{saccharose}} = \\dfrac{34{,}2}{342} = 0{,}1$ mol.',
        'Thuỷ phân tạo $0{,}1$ mol glucose và $0{,}1$ mol fructose; cả hai đều phản ứng với thuốc thử Tollens.',
        'Mỗi mol monosaccharide tạo $2$ mol Ag: $n_{\\mathrm{Ag}} = 2 \\cdot (0{,}1 + 0{,}1) = 0{,}4$ mol.',
        '$m_{\\mathrm{Ag}} = 0{,}4 \\cdot 108 = 43{,}2$ g.',
      ],
      answer: 'Thu được $43{,}2$ g bạc.',
    },
    {
      problem:
        'Thuỷ phân $68{,}4$ g saccharose với hiệu suất $80\\%$. Tính khối lượng glucose thu được.',
      steps: [
        '$n_{\\text{saccharose}} = \\dfrac{68{,}4}{342} = 0{,}2$ mol.',
        'Số mol saccharose bị thuỷ phân: $0{,}2 \\cdot 0{,}8 = 0{,}16$ mol, tạo $0{,}16$ mol glucose.',
        '$m_{\\text{glucose}} = 0{,}16 \\cdot 180 = 28{,}8$ g.',
      ],
      answer: 'Thu được $28{,}8$ g glucose.',
    },
    {
      problem: 'Phân biệt dung dịch saccharose và dung dịch maltose bằng một thuốc thử.',
      steps: [
        'Cả hai đều hoà tan $\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường, nên phép thử này không phân biệt được.',
        'Đun nóng mỗi mẫu với thuốc thử Tollens: maltose còn nhóm OH hemiacetal, mở vòng tạo nhóm $\\mathrm{{-}CHO}$ nên tạo lớp bạc.',
        'Saccharose không có tính khử nên không có hiện tượng.',
      ],
      answer: 'Dùng thuốc thử Tollens: mẫu tạo bạc là maltose, mẫu không hiện tượng là saccharose.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân tử saccharose được cấu tạo từ',
      options: [
        'một gốc α-glucose và một gốc β-fructose, nối bằng liên kết α-1,2-glycoside',
        'hai gốc α-glucose, nối bằng liên kết α-1,4-glycoside',
        'một gốc α-glucose và một gốc β-fructose, nối bằng liên kết α-1,4-glycoside',
        'hai gốc β-fructose, nối bằng liên kết α-1,2-glycoside',
      ],
      answer: 0,
      hints: ['Thuỷ phân saccharose thu được glucose và fructose.'],
      solution:
        'Saccharose gồm một gốc α-glucose và một gốc β-fructose, nối qua nguyên tử O giữa C1 của glucose và C2 của fructose (α-1,2-glycoside). Hai gốc α-glucose nối α-1,4 là maltose.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào sau đây không phản ứng với thuốc thử Tollens?',
      options: ['Saccharose', 'Glucose', 'Fructose', 'Maltose'],
      answer: 0,
      hints: ['Chất nào không còn nhóm OH hemiacetal hay hemiketal tự do?'],
      solution:
        'Saccharose không có tính khử. Glucose, maltose có nhóm $\\mathrm{{-}CHO}$ (dạng mạch hở); fructose chuyển thành glucose trong môi trường kiềm.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về maltose?',
      options: [
        'Có công thức phân tử $\\mathrm{C_{12}H_{22}O_{11}}$.',
        'Gồm hai gốc α-glucose nối bằng liên kết α-1,4-glycoside.',
        'Phản ứng với thuốc thử Tollens tạo bạc.',
        'Thuỷ phân hoàn toàn tạo glucose và fructose.',
        'Không hoà tan được $\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường.',
      ],
      answers: [0, 1, 2],
      hints: [
        'Maltose được tạo từ hai đơn vị giống nhau.',
        'Maltose có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau.',
      ],
      solution:
        'Maltose $\\mathrm{C_{12}H_{22}O_{11}}$ gồm hai gốc α-glucose (α-1,4-glycoside), còn nhóm OH hemiacetal nên tráng bạc. Thuỷ phân maltose chỉ tạo glucose; maltose là polyalcohol nên hoà tan $\\mathrm{Cu(OH)_2}$.',
    },
    {
      type: 'choice',
      prompt:
        'Cho dung dịch saccharose vào ống nghiệm chứa $\\mathrm{Cu(OH)_2}$ (tạo từ $\\mathrm{CuSO_4}$ và NaOH), lắc đều ở nhiệt độ thường. Hiện tượng quan sát được là',
      options: [
        'kết tủa tan, tạo dung dịch màu xanh lam',
        'xuất hiện kết tủa đỏ gạch',
        'có lớp bạc bám trên thành ống nghiệm',
        'không có hiện tượng gì',
      ],
      answer: 0,
      hints: ['Saccharose có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau.'],
      solution:
        'Saccharose thể hiện tính chất của polyalcohol: hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch xanh lam. Kết tủa đỏ gạch chỉ có với đường có tính khử khi đun nóng.',
    },
    {
      type: 'number',
      prompt: 'Thuỷ phân hoàn toàn $17{,}1$ g maltose. Tính khối lượng glucose thu được.',
      answer: 18,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Mỗi mol maltose tạo $2$ mol glucose.'],
      solution:
        '$n_{\\text{maltose}} = \\dfrac{17{,}1}{342} = 0{,}05$ mol, $n_{\\text{glucose}} = 0{,}1$ mol, $m = 0{,}1 \\cdot 180 = 18$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho dung dịch chứa $0{,}05$ mol maltose (chưa thuỷ phân) tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      answer: 10.8,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Mỗi phân tử maltose chỉ có một nhóm OH hemiacetal mở vòng được.'],
      solution:
        'Mỗi mol maltose tạo $2$ mol Ag: $n_{\\mathrm{Ag}} = 0{,}1$ mol, $m = 0{,}1 \\cdot 108 = 10{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $51{,}3$ g saccharose với hiệu suất $75\\%$, trung hoà acid rồi cho toàn bộ dung dịch tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      answer: 48.6,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Saccharose còn dư không phản ứng với thuốc thử Tollens.',
        'Mỗi mol saccharose bị thuỷ phân tạo $2$ mol monosaccharide, mỗi mol monosaccharide tạo $2$ mol Ag.',
      ],
      solution:
        '$n = \\dfrac{51{,}3}{342} = 0{,}15$ mol; bị thuỷ phân $0{,}15 \\cdot 0{,}75 = 0{,}1125$ mol, tạo $0{,}225$ mol glucose và fructose. $n_{\\mathrm{Ag}} = 0{,}45$ mol, $m = 0{,}45 \\cdot 108 = 48{,}6$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các công đoạn sản xuất đường saccharose từ cây mía theo đúng thứ tự.',
      items: [
        'Ép mía, thu nước mía',
        'Thêm vôi sữa, lọc bỏ tạp chất kết tủa',
        'Sục khí $\\mathrm{CO_2}$, lọc bỏ $\\mathrm{CaCO_3}$',
        'Tẩy màu bằng $\\mathrm{SO_2}$',
        'Cô đặc, kết tinh, li tâm thu đường',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Calcium hydroxide dư phải được loại bỏ ngay sau bước dùng vôi sữa.'],
      solution:
        'Ép mía → thêm vôi sữa, lọc tạp chất → sục $\\mathrm{CO_2}$ loại calcium hydroxide dư → tẩy màu bằng $\\mathrm{SO_2}$ → cô đặc, kết tinh, li tâm.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng carbon trong saccharose $\\mathrm{C_{12}H_{22}O_{11}}$, làm tròn đến hàng phần trăm.',
      answer: 42.11,
      tolerance: 0.02,
      unit: '%',
      hints: ['$M = 342$ g/mol; khối lượng carbon là $12 \\cdot 12$.'],
      solution: '$\\%C = \\dfrac{144}{342} \\cdot 100\\% \\approx 42{,}11\\%$.',
    },
  ],
  takeaways: [
    'Saccharose và maltose là disaccharide $\\mathrm{C_{12}H_{22}O_{11}}$.',
    'Saccharose: α-glucose + β-fructose, liên kết α-1,2-glycoside, không còn nhóm OH hemiacetal: không có tính khử.',
    'Maltose: hai gốc α-glucose, liên kết α-1,4-glycoside, còn nhóm OH hemiacetal: tráng bạc, khử $\\mathrm{Cu(OH)_2}$ khi đun nóng.',
    'Cả hai hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch xanh lam và bị thuỷ phân: saccharose tạo glucose và fructose, maltose tạo glucose.',
    'Đường saccharose được sản xuất từ mía qua các công đoạn ép, làm sạch bằng vôi sữa và $\\mathrm{CO_2}$, tẩy màu, cô đặc và kết tinh.',
  ],
};
