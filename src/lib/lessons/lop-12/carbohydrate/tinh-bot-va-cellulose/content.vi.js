/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tinh bột và cellulose: hai polysaccharide (C6H10O5)n. Trạng thái tự nhiên, tính chất vật lí, cấu tạo của amylose, amylopectin và cellulose, phản ứng thuỷ phân, phản ứng màu của tinh bột với iodine, phản ứng của cellulose với nitric acid, sự tạo thành và chuyển hoá tinh bột, ứng dụng.',
  intro:
    'Hạt gạo và sợi bông đều được ghép từ hàng nghìn gốc glucose. Vậy mà gạo nấu lên thành cơm dẻo, còn bông thì dai, không tan trong nước và cơ thể người không tiêu hoá được. Nhỏ iodine vào miếng cơm thấy màu xanh tím, nhỏ vào bông thì không. Khác biệt nằm ở cách các gốc glucose nối với nhau: chuỗi xoắn lò xo hay sợi duỗi thẳng.',
  objectives: [
    'Nêu được trạng thái tự nhiên và tính chất vật lí của tinh bột, cellulose.',
    'Trình bày được cấu tạo của amylose, amylopectin và cellulose.',
    'Trình bày được tính chất hoá học của tinh bột (thuỷ phân, phản ứng màu với iodine) và của cellulose (thuỷ phân, phản ứng với nitric acid, tan trong nước Schweizer).',
    'Nêu được sự tạo thành tinh bột trong cây xanh, sự chuyển hoá tinh bột trong cơ thể và ứng dụng của tinh bột, cellulose.',
  ],
  sections: [
    {
      heading: 'Trạng thái tự nhiên và tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Tinh bột có nhiều trong các loại hạt (gạo, ngô, lúa mì), củ (khoai, sắn) và quả (chuối xanh). Tinh bột là chất rắn vô định hình, màu trắng, không tan trong nước lạnh. Trong nước nóng, hạt tinh bột ngậm nước, trương phồng lên tạo thành dung dịch keo gọi là hồ tinh bột.',
            'Cellulose là thành phần chính tạo nên thành tế bào thực vật: bông nõn chứa gần $98\\%$ cellulose, gỗ chứa khoảng $40$ đến $50\\%$. Cellulose là chất rắn dạng sợi, màu trắng, không mùi vị, không tan trong nước và trong các dung môi hữu cơ thông thường, nhưng tan trong nước Schweizer.',
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Tinh bột và cellulose đều có công thức $\\mathrm{(C_6H_{10}O_5)_n}$, là polymer của các gốc glucose, nhưng khác nhau về loại gốc glucose, kiểu liên kết và hình dạng mạch.',
        },
        {
          type: 'table',
          caption: 'Cấu tạo của amylose, amylopectin và cellulose',
          head: ['Chất', 'Gốc', 'Liên kết', 'Hình dạng mạch'],
          rows: [
            [
              'Amylose (khoảng $20$ đến $30\\%$ tinh bột)',
              'α-glucose',
              'α-1,4-glycoside',
              'không phân nhánh, xoắn lò xo',
            ],
            [
              'Amylopectin (khoảng $70$ đến $80\\%$ tinh bột)',
              'α-glucose',
              'α-1,4-glycoside và α-1,6-glycoside ở chỗ phân nhánh',
              'phân nhánh',
            ],
            [
              'Cellulose',
              'β-glucose',
              'β-1,4-glycoside',
              'không phân nhánh, không xoắn; các mạch xếp song song tạo sợi',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Mỗi gốc glucose trong cellulose còn ba nhóm $\\mathrm{{-}OH}$ tự do, nên công thức của cellulose còn được viết là $\\mathrm{[C_6H_7O_2(OH)_3]_n}$.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của tinh bột',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng thuỷ phân. Tinh bột bị thuỷ phân khi đun nóng trong dung dịch acid hoặc nhờ enzyme, sản phẩm cuối cùng là glucose:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} n\\mathrm{C_6H_{12}O_6}',
        },
        {
          type: 'p',
          text: 'Khi thuỷ phân nhờ enzyme, tinh bột chuyển dần thành dextrin, rồi maltose, rồi glucose.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng màu với iodine',
          text: 'Hồ tinh bột tác dụng với dung dịch iodine tạo màu xanh tím. Đun nóng, màu xanh tím biến mất; để nguội, màu xanh tím xuất hiện trở lại. Phản ứng này dùng để nhận biết tinh bột (hoặc iodine).',
        },
        {
          type: 'p',
          text: 'Màu xanh tím là do các phân tử iodine bị giữ trong lòng các đoạn mạch xoắn của tinh bột. Khi đun nóng, mạch xoắn duỗi ra, iodine thoát ra nên mất màu.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của cellulose',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng thuỷ phân. Đun nóng cellulose trong dung dịch acid đặc, cellulose bị thuỷ phân tạo glucose:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} n\\mathrm{C_6H_{12}O_6}',
        },
        {
          type: 'p',
          text: 'Phản ứng với nitric acid. Cellulose tác dụng với hỗn hợp nitric acid đặc và sulfuric acid đặc, tạo cellulose trinitrate, dùng làm thuốc súng không khói:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[C_6H_7O_2(OH)_3]_n} + 3n\\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ t^\\circ} \\mathrm{[C_6H_7O_2(ONO_2)_3]_n} + 3n\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Phản ứng với nước Schweizer. Cellulose tan trong nước Schweizer (dung dịch $\\mathrm{[Cu(NH_3)_4](OH)_2}$), tạo dung dịch đặc nhớt dùng sản xuất tơ. Cellulose không tạo màu với iodine.',
        },
      ],
    },
    {
      heading: 'Sự tạo thành, chuyển hoá và ứng dụng',
      blocks: [
        {
          type: 'p',
          text: 'Tinh bột được tạo thành trong cây xanh nhờ quá trình quang hợp:',
        },
        {
          type: 'tex',
          tex: '6n\\mathrm{CO_2} + 5n\\mathrm{H_2O} \\xrightarrow{\\text{ánh sáng},\\ \\text{chất diệp lục}} \\mathrm{(C_6H_{10}O_5)_n} + 6n\\mathrm{O_2}',
        },
        {
          type: 'p',
          text: 'Trong cơ thể người, tinh bột bị thuỷ phân nhờ enzyme thành dextrin, maltose và cuối cùng là glucose. Glucose được hấp thụ vào máu, một phần bị oxi hoá thành $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$ cung cấp năng lượng, phần dư được dự trữ ở gan dưới dạng glycogen.',
        },
        {
          type: 'list',
          items: [
            'Tinh bột là lương thực chính của con người; dùng sản xuất glucose, ethanol, bánh kẹo, hồ dán.',
            'Cellulose (gỗ, bông, đay) dùng làm vật liệu xây dựng, đồ dùng gia đình, sản xuất giấy, vải sợi; chế biến thành tơ visco, tơ cellulose acetate, thuốc súng không khói và ethanol (nhiên liệu sinh học).',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Chuỗi xoắn tinh bột và sợi thẳng cellulose',
    instruction:
      'Chọn amylose, amylopectin hoặc cellulose, kéo hoặc dùng phím mũi tên để xoay mô hình 3D. So sánh hình dạng mạch. Nhỏ dung dịch iodine vào từng chất, rồi đun nóng và để nguội hồ tinh bột để xem màu thay đổi thế nào.',
  },
  examples: [
    {
      problem:
        'Thuỷ phân $324$ g tinh bột với hiệu suất $75\\%$. Tính khối lượng glucose thu được.',
      steps: [
        '$\\mathrm{(C_6H_{10}O_5)_n} + n\\mathrm{H_2O} \\rightarrow n\\mathrm{C_6H_{12}O_6}$: mỗi gốc $\\mathrm{C_6H_{10}O_5}$ ($M = 162$) tạo một phân tử glucose ($M = 180$).',
        'Số mol gốc $\\mathrm{C_6H_{10}O_5}$: $\\dfrac{324}{162} = 2$ mol.',
        'Với hiệu suất $75\\%$: $n_{\\text{glucose}} = 2 \\cdot 0{,}75 = 1{,}5$ mol, $m = 1{,}5 \\cdot 180 = 270$ g.',
      ],
      answer: 'Thu được $270$ g glucose.',
    },
    {
      problem:
        'Từ $16{,}2$ kg cellulose sản xuất cellulose trinitrate với hiệu suất $90\\%$. Tính khối lượng cellulose trinitrate thu được.',
      steps: [
        'Mỗi gốc $\\mathrm{C_6H_7O_2(OH)_3}$ ($M = 162$) tạo một gốc $\\mathrm{C_6H_7O_2(ONO_2)_3}$ ($M = 162 + 3 \\cdot 45 = 297$).',
        'Theo lí thuyết: $m = 16{,}2 \\cdot \\dfrac{297}{162} = 29{,}7$ kg.',
        'Với hiệu suất $90\\%$: $m = 29{,}7 \\cdot 0{,}9 = 26{,}73$ kg.',
      ],
      answer: 'Thu được $26{,}73$ kg cellulose trinitrate.',
    },
    {
      problem:
        'Lên men $81$ g tinh bột thành ethanol (qua glucose), hiệu suất cả quá trình là $80\\%$. Tính khối lượng ethanol thu được.',
      steps: [
        'Sơ đồ: $\\mathrm{C_6H_{10}O_5} \\rightarrow \\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH}$.',
        'Số mol gốc $\\mathrm{C_6H_{10}O_5}$: $\\dfrac{81}{162} = 0{,}5$ mol, nên theo lí thuyết $n_{\\mathrm{C_2H_5OH}} = 1$ mol.',
        'Với hiệu suất $80\\%$: $n = 0{,}8$ mol, $m = 0{,}8 \\cdot 46 = 36{,}8$ g.',
      ],
      answer: 'Thu được $36{,}8$ g ethanol.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhỏ dung dịch iodine vào hồ tinh bột ở nhiệt độ thường thấy xuất hiện',
      options: ['màu xanh tím', 'màu đỏ gạch', 'màu xanh lam', 'kết tủa trắng'],
      answer: 0,
      hints: ['Đây là phản ứng dùng để nhận biết tinh bột.'],
      solution:
        'Iodine bị giữ trong lòng mạch xoắn của tinh bột tạo màu xanh tím. Màu xanh lam là của phức đồng với polyalcohol, màu đỏ gạch là của $\\mathrm{Cu_2O}$.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về cellulose?',
      options: [
        'Được tạo từ các gốc β-glucose nối bằng liên kết β-1,4-glycoside.',
        'Mạch không phân nhánh, không xoắn.',
        'Tan được trong nước Schweizer.',
        'Tạo màu xanh tím với dung dịch iodine.',
        'Có mạch phân nhánh nhờ liên kết α-1,6-glycoside.',
      ],
      answers: [0, 1, 2],
      hints: ['Liên kết α-1,6-glycoside có trong amylopectin.'],
      solution:
        'Cellulose gồm các gốc β-glucose nối β-1,4, mạch duỗi thẳng, không phân nhánh, tan trong nước Schweizer. Không xoắn nên không tạo màu với iodine; mạch phân nhánh là của amylopectin.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân tử amylopectin, các gốc α-glucose nối với nhau bằng',
      options: [
        'liên kết α-1,4-glycoside và α-1,6-glycoside',
        'chỉ liên kết α-1,4-glycoside',
        'liên kết β-1,4-glycoside',
        'liên kết α-1,2-glycoside',
      ],
      answer: 0,
      hints: ['Amylopectin có mạch phân nhánh.'],
      solution:
        'Mạch chính và mạch nhánh dùng liên kết α-1,4-glycoside; chỗ phân nhánh là liên kết α-1,6-glycoside. Chỉ có α-1,4 là amylose.',
    },
    {
      type: 'number',
      prompt: 'Thuỷ phân hoàn toàn $16{,}2$ g tinh bột. Tính khối lượng glucose thu được.',
      answer: 18,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Mỗi gốc $\\mathrm{C_6H_{10}O_5}$ ($162$) cộng một phân tử nước thành một phân tử glucose ($180$).',
      ],
      solution:
        '$n = \\dfrac{16{,}2}{162} = 0{,}1$ mol gốc, $m_{\\text{glucose}} = 0{,}1 \\cdot 180 = 18$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $48{,}6$ g cellulose tác dụng với nitric acid dư (xúc tác $\\mathrm{H_2SO_4}$ đặc), hiệu suất $80\\%$. Tính khối lượng cellulose trinitrate thu được (làm tròn đến hàng phần trăm).',
      answer: 71.28,
      tolerance: 0.02,
      unit: 'g',
      hints: ['$M$ của một gốc cellulose trinitrate $\\mathrm{C_6H_7O_2(ONO_2)_3}$ là $297$.'],
      solution:
        '$n = \\dfrac{48{,}6}{162} = 0{,}3$ mol gốc; thu được $0{,}3 \\cdot 0{,}8 = 0{,}24$ mol gốc trinitrate, $m = 0{,}24 \\cdot 297 = 71{,}28$ g.',
    },
    {
      type: 'number',
      prompt:
        'Lên men $162$ g tinh bột thành ethanol, hiệu suất cả quá trình là $75\\%$. Tính khối lượng ethanol thu được.',
      answer: 69,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Một gốc $\\mathrm{C_6H_{10}O_5}$ → một glucose → hai ethanol.'],
      solution:
        '$n = 1$ mol gốc, $n_{\\mathrm{C_2H_5OH}} = 2 \\cdot 1 \\cdot 0{,}75 = 1{,}5$ mol, $m = 1{,}5 \\cdot 46 = 69$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo thứ tự tạo thành khi tinh bột bị thuỷ phân nhờ enzyme.',
      items: ['Tinh bột', 'Dextrin', 'Maltose', 'Glucose'],
      answer: [0, 1, 2, 3],
      hints: ['Mạch ngắn dần; maltose là disaccharide.'],
      solution: 'Tinh bột → dextrin → maltose → glucose.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử dùng để phân biệt hồ tinh bột với dung dịch saccharose là',
      options: ['dung dịch iodine', 'dung dịch NaOH', 'thuốc thử Tollens', 'nước bromine'],
      answer: 0,
      hints: ['Phản ứng màu đặc trưng của tinh bột.'],
      solution:
        'Hồ tinh bột tạo màu xanh tím với iodine, saccharose thì không. Hai chất đều không tráng bạc, không làm mất màu nước bromine, và không có hiện tượng gì với dung dịch NaOH.',
    },
    {
      type: 'number',
      prompt:
        'Một mẫu cellulose có phân tử khối trung bình là $1\\,620\\,000$. Tính số gốc glucose ($n$) trong phân tử.',
      answer: 10000,
      hints: ['Mỗi gốc $\\mathrm{C_6H_{10}O_5}$ có $M = 162$.'],
      solution: '$n = \\dfrac{1\\,620\\,000}{162} = 10\\,000$.',
    },
  ],
  takeaways: [
    'Tinh bột và cellulose có công thức $\\mathrm{(C_6H_{10}O_5)_n}$.',
    'Tinh bột gồm amylose (α-1,4, không phân nhánh, xoắn) và amylopectin (α-1,4 và α-1,6, phân nhánh); cellulose gồm các gốc β-glucose nối β-1,4, mạch thẳng, $\\mathrm{[C_6H_7O_2(OH)_3]_n}$.',
    'Cả hai bị thuỷ phân đến glucose. Tinh bột + iodine: màu xanh tím (mất khi đun nóng, hiện lại khi để nguội).',
    'Cellulose + $\\mathrm{HNO_3}$ (xúc tác $\\mathrm{H_2SO_4}$ đặc) tạo cellulose trinitrate; cellulose tan trong nước Schweizer.',
    'Tinh bột là lương thực, nguyên liệu sản xuất glucose, ethanol; cellulose dùng làm giấy, vải, tơ, thuốc súng không khói.',
  ],
};
