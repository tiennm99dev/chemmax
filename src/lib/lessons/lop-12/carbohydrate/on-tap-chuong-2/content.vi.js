/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Carbohydrate: phân loại, cấu tạo và tính chất của monosaccharide (glucose, fructose), disaccharide (saccharose, maltose) và polysaccharide (tinh bột, cellulose); nhận biết các carbohydrate bằng thuốc thử và luyện các dạng bài tính toán.',
  intro:
    'Chương 2 đi từ những phân tử đường nhỏ $\\mathrm{C_6H_{12}O_6}$ đến những chuỗi dài hàng nghìn gốc glucose. Mọi tính chất của chúng đều quay về ba câu hỏi: phân tử có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau không, còn nhóm OH hemiacetal để mở vòng tạo nhóm $\\mathrm{{-}CHO}$ không, và có bị thuỷ phân không. Bài ôn tập này hệ thống lại kiến thức và luyện cách nhận biết, tính toán.',
  objectives: [
    'Hệ thống được phân loại, cấu tạo và tính chất của các carbohydrate trong chương.',
    'Giải thích được tính chất hoá học từ cấu tạo: tính chất polyalcohol, tính khử, phản ứng thuỷ phân, phản ứng màu với iodine.',
    'Nhận biết được glucose, fructose, saccharose, tinh bột bằng các thuốc thử thích hợp.',
    'Giải được các bài tập về phản ứng với thuốc thử Tollens, lên men, thuỷ phân và điều chế cellulose trinitrate.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu tạo của các carbohydrate',
          head: ['Nhóm', 'Chất', 'Công thức', 'Cấu tạo'],
          rows: [
            [
              'Monosaccharide',
              'Glucose',
              '$\\mathrm{C_6H_{12}O_6}$',
              'Mạch hở $\\mathrm{CH_2OH[CHOH]_4CHO}$; vòng $6$ cạnh, α- và β-glucose',
            ],
            [
              'Monosaccharide',
              'Fructose',
              '$\\mathrm{C_6H_{12}O_6}$',
              'Mạch hở $\\mathrm{CH_2OH[CHOH]_3COCH_2OH}$; vòng $5$ cạnh',
            ],
            [
              'Disaccharide',
              'Saccharose',
              '$\\mathrm{C_{12}H_{22}O_{11}}$',
              'α-glucose + β-fructose, liên kết α-1,2-glycoside',
            ],
            [
              'Disaccharide',
              'Maltose',
              '$\\mathrm{C_{12}H_{22}O_{11}}$',
              'Hai gốc α-glucose, liên kết α-1,4-glycoside',
            ],
            [
              'Polysaccharide',
              'Tinh bột',
              '$\\mathrm{(C_6H_{10}O_5)_n}$',
              'Amylose (α-1,4, xoắn) và amylopectin (α-1,4 và α-1,6, phân nhánh)',
            ],
            [
              'Polysaccharide',
              'Cellulose',
              '$\\mathrm{[C_6H_7O_2(OH)_3]_n}$',
              'Các gốc β-glucose, liên kết β-1,4-glycoside, mạch thẳng',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Tính chất hoá học (+ có phản ứng, − không phản ứng)',
          head: [
            'Chất',
            '$\\mathrm{Cu(OH)_2}$, nhiệt độ thường',
            'Thuốc thử Tollens',
            'Nước bromine',
            'Thuỷ phân',
            'Iodine',
          ],
          rows: [
            ['Glucose', '+ (xanh lam)', '+', '+ (mất màu)', '−', '−'],
            ['Fructose', '+ (xanh lam)', '+', '−', '−', '−'],
            ['Saccharose', '+ (xanh lam)', '−', '−', '+ (glucose, fructose)', '−'],
            ['Maltose', '+ (xanh lam)', '+', '+ (mất màu)', '+ (glucose)', '−'],
            ['Tinh bột', '−', '−', '−', '+ (glucose)', '+ (xanh tím)'],
            ['Cellulose', '−', '−', '−', '+ (glucose)', '−'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Từ cấu tạo đến tính chất',
          text: 'Nhiều nhóm $\\mathrm{{-}OH}$ kề nhau: hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch xanh lam. Có nhóm $\\mathrm{{-}CHO}$ (hoặc nhóm OH hemiacetal mở vòng được): tráng bạc, khử $\\mathrm{Cu(OH)_2}$ thành $\\mathrm{Cu_2O}$ khi đun nóng. Fructose tráng bạc vì chuyển thành glucose trong môi trường kiềm, nhưng không làm mất màu nước bromine. Disaccharide và polysaccharide bị thuỷ phân; glucose lên men tạo ethanol.',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Phản ứng với thuốc thử Tollens: $1$ mol glucose (fructose, maltose) tạo $2$ mol Ag; $1$ mol saccharose sau thuỷ phân hoàn toàn tạo $4$ mol Ag.',
            'Lên men: $\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$.',
            'Thuỷ phân tinh bột, cellulose: mỗi gốc $\\mathrm{C_6H_{10}O_5}$ ($162$) tạo một phân tử glucose ($180$).',
            'Cellulose trinitrate: mỗi gốc $162$ tạo một gốc $\\mathrm{C_6H_7O_2(ONO_2)_3}$ ($297$), cần $3$ phân tử $\\mathrm{HNO_3}$.',
            'Với chuỗi nhiều giai đoạn, hiệu suất chung bằng tích hiệu suất các giai đoạn.',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Bàn thí nghiệm nhận biết carbohydrate',
    instruction:
      'Bốn mẫu A, B, C, D là glucose, fructose, saccharose và hồ tinh bột. Chọn mẫu và thuốc thử, làm thí nghiệm, ghi hiện tượng vào bảng rồi gọi tên từng mẫu. Cố gắng dùng ít thí nghiệm nhất.',
  },
  examples: [
    {
      problem:
        'Trình bày cách nhận biết bốn dung dịch mất nhãn: glucose, fructose, saccharose và hồ tinh bột.',
      steps: [
        'Nhỏ dung dịch iodine vào từng mẫu: mẫu có màu xanh tím là hồ tinh bột.',
        'Đun nóng ba mẫu còn lại với thuốc thử Tollens: mẫu không tạo bạc là saccharose.',
        'Nhỏ nước bromine vào hai mẫu tạo bạc: mẫu làm mất màu nước bromine là glucose, mẫu còn lại là fructose.',
      ],
      answer: 'Dùng lần lượt dung dịch iodine, thuốc thử Tollens và nước bromine.',
    },
    {
      problem:
        'Từ $1$ tấn ngô chứa $65\\%$ tinh bột, sản xuất ethanol với hiệu suất thuỷ phân $80\\%$ và hiệu suất lên men $75\\%$. Tính khối lượng ethanol thu được.',
      steps: [
        'Khối lượng tinh bột: $1 \\cdot 0{,}65 = 0{,}65$ tấn $= 650$ kg.',
        'Sơ đồ: $\\mathrm{C_6H_{10}O_5} \\rightarrow \\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH}$, tức $162$ kg tinh bột cho $2 \\cdot 46 = 92$ kg ethanol theo lí thuyết.',
        'Theo lí thuyết: $m = 650 \\cdot \\dfrac{92}{162} \\approx 369{,}14$ kg.',
        'Hiệu suất chung $0{,}8 \\cdot 0{,}75 = 0{,}6$: $m \\approx 369{,}14 \\cdot 0{,}6 \\approx 221{,}48$ kg.',
      ],
      answer: 'Thu được khoảng $221{,}5$ kg ethanol.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Ghép mỗi chất với loại carbohydrate của nó.',
      left: ['Fructose', 'Maltose', 'Cellulose'],
      right: ['monosaccharide', 'disaccharide', 'polysaccharide'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đếm số đơn vị monosaccharide tạo ra khi thuỷ phân hoàn toàn.'],
      solution:
        'Fructose không bị thuỷ phân (monosaccharide); maltose thuỷ phân tạo hai glucose (disaccharide); cellulose tạo rất nhiều glucose (polysaccharide).',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào phản ứng được với thuốc thử Tollens?',
      options: ['Glucose', 'Fructose', 'Maltose', 'Saccharose', 'Tinh bột'],
      answers: [0, 1, 2],
      hints: ['Fructose chuyển thành glucose trong môi trường kiềm.'],
      solution:
        'Glucose có nhóm $\\mathrm{{-}CHO}$, maltose còn nhóm OH hemiacetal, fructose chuyển thành glucose trong môi trường kiềm. Saccharose và tinh bột không có tính khử.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào bị thuỷ phân trong môi trường acid, đun nóng?',
      options: ['Saccharose', 'Maltose', 'Tinh bột', 'Cellulose', 'Glucose', 'Fructose'],
      answers: [0, 1, 2, 3],
      hints: ['Monosaccharide không bị thuỷ phân.'],
      solution:
        'Disaccharide (saccharose, maltose) và polysaccharide (tinh bột, cellulose) bị thuỷ phân; glucose, fructose là monosaccharide.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây đúng?',
      options: [
        'Saccharose không còn nhóm OH hemiacetal nên không phản ứng với thuốc thử Tollens.',
        'Fructose làm mất màu nước bromine.',
        'Cellulose tạo màu xanh tím với dung dịch iodine.',
        'Amylose có mạch phân nhánh.',
      ],
      answer: 0,
      hints: ['Kiểm tra từng phát biểu với bảng tính chất.'],
      solution:
        'Saccharose không có tính khử. Fructose không làm mất màu nước bromine; cellulose không tạo màu với iodine; amylose không phân nhánh (amylopectin mới phân nhánh).',
    },
    {
      type: 'choice',
      prompt:
        'Thuỷ phân hoàn toàn chất X thu được hai monosaccharide khác nhau. X không phản ứng với thuốc thử Tollens. X là',
      options: ['saccharose', 'maltose', 'tinh bột', 'cellulose'],
      answer: 0,
      hints: ['Chất nào thuỷ phân tạo hai monosaccharide khác nhau?'],
      solution:
        'Saccharose thuỷ phân tạo glucose và fructose, và không có tính khử. Maltose, tinh bột, cellulose chỉ tạo glucose.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $34{,}2$ g saccharose, trung hoà acid rồi cho toàn bộ dung dịch tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      answer: 43.2,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$1$ mol saccharose sau thuỷ phân tạo $4$ mol Ag.'],
      solution:
        '$n = \\dfrac{34{,}2}{342} = 0{,}1$ mol, $n_{\\mathrm{Ag}} = 0{,}4$ mol, $m = 0{,}4 \\cdot 108 = 43{,}2$ g.',
    },
    {
      type: 'number',
      prompt: 'Lên men $45$ g glucose với hiệu suất $80\\%$. Tính khối lượng ethanol thu được.',
      answer: 18.4,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_{\\mathrm{C_2H_5OH}} = 2\\,n_{\\text{glucose}} \\cdot H$.'],
      solution:
        '$n_{\\text{glucose}} = 0{,}25$ mol, $n_{\\mathrm{C_2H_5OH}} = 2 \\cdot 0{,}25 \\cdot 0{,}8 = 0{,}4$ mol, $m = 0{,}4 \\cdot 46 = 18{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $81$ g tinh bột với hiệu suất $80\\%$, lấy toàn bộ glucose tạo thành cho tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      answer: 86.4,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Tính số mol glucose trước, rồi nhân $2$ để được số mol Ag.'],
      solution:
        '$n_{\\text{gốc}} = 0{,}5$ mol, $n_{\\text{glucose}} = 0{,}5 \\cdot 0{,}8 = 0{,}4$ mol, $n_{\\mathrm{Ag}} = 0{,}8$ mol, $m = 0{,}8 \\cdot 108 = 86{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Để sản xuất $29{,}7$ kg cellulose trinitrate (hiệu suất $100\\%$) cần bao nhiêu kilogam nitric acid?',
      answer: 18.9,
      tolerance: 0.01,
      unit: 'kg',
      hints: ['Mỗi gốc trinitrate ($297$) cần $3$ phân tử $\\mathrm{HNO_3}$ ($63$).'],
      solution:
        '$n_{\\text{gốc}} = \\dfrac{29{,}7}{297} = 0{,}1$ kmol, $n_{\\mathrm{HNO_3}} = 0{,}3$ kmol, $m = 0{,}3 \\cdot 63 = 18{,}9$ kg.',
    },
    {
      type: 'choice',
      prompt:
        'Cho các dung dịch: glucose, saccharose, maltose. Chỉ dùng một thuốc thử nào sau đây có thể nhận ra saccharose?',
      options: [
        'Thuốc thử Tollens',
        '$\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường',
        'Dung dịch iodine',
        'Dung dịch NaCl',
      ],
      answer: 0,
      hints: ['Chất nào trong ba chất không có tính khử?'],
      solution:
        'Glucose và maltose tạo bạc, saccharose thì không. Cả ba đều hoà tan $\\mathrm{Cu(OH)_2}$ và đều không tạo màu với iodine.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $68{,}4$ g maltose với hiệu suất $50\\%$, trung hoà acid rồi cho toàn bộ dung dịch tác dụng với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được.',
      answer: 64.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Maltose còn dư cũng tráng bạc: $1$ mol maltose tạo $2$ mol Ag.',
        'Mỗi mol maltose bị thuỷ phân tạo $2$ mol glucose, tức $4$ mol Ag.',
      ],
      solution:
        '$n = \\dfrac{68{,}4}{342} = 0{,}2$ mol: $0{,}1$ mol bị thuỷ phân tạo $0{,}2$ mol glucose ($0{,}4$ mol Ag), $0{,}1$ mol maltose dư ($0{,}2$ mol Ag). $n_{\\mathrm{Ag}} = 0{,}6$ mol, $m = 0{,}6 \\cdot 108 = 64{,}8$ g.',
    },
  ],
  takeaways: [
    'Monosaccharide (glucose, fructose) không bị thuỷ phân; disaccharide (saccharose, maltose) và polysaccharide (tinh bột, cellulose) bị thuỷ phân đến monosaccharide.',
    'Glucose, fructose, saccharose, maltose hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch xanh lam.',
    'Glucose, fructose, maltose tráng bạc; saccharose, tinh bột, cellulose thì không. Chỉ glucose, maltose làm mất màu nước bromine.',
    'Tinh bột + iodine: xanh tím. Cellulose + $\\mathrm{HNO_3}$: cellulose trinitrate.',
    'Nhận biết glucose, fructose, saccharose, tinh bột: iodine, rồi thuốc thử Tollens, rồi nước bromine.',
  ],
};
