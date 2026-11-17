/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguồn nước tự nhiên và các chất gây ô nhiễm; các công đoạn xử lí nước sinh hoạt: lắng, keo tụ bằng phèn hoặc PAC, lọc, khử màu bằng than hoạt tính, khử sắt, khử trùng bằng chlorine; thí nghiệm giảm độ đục, độ màu và làm bộ lọc nước nhiều lớp.',
  intro:
    'Sau mỗi trận lũ, nước sông, nước giếng đục ngầu, nhiều gia đình không có nước sạch để dùng. Chỉ với một ít phèn, vài lớp cát, sỏi, than hoạt tính trong chiếc chai nhựa và một lượng nhỏ chất khử trùng, có thể biến nước đục thành nước trong, dùng được cho sinh hoạt.',
  objectives: [
    'Nêu được các nguồn nước tự nhiên và các nhóm chất gây ô nhiễm nước.',
    'Trình bày được các công đoạn xử lí nước sinh hoạt: lắng, keo tụ, lọc, khử màu, khử trùng; viết được các phương trình hoá học chính.',
    'Nêu được một số hoá chất xử lí nước, kể cả các chất theo hướng sinh học, và cách dùng an toàn.',
    'Thực hiện được thí nghiệm giảm độ đục bằng phèn, giảm độ màu bằng bộ lọc nhiều lớp; tự làm được bộ lọc nước đơn giản.',
  ],
  sections: [
    {
      heading: 'Nguồn nước và chất gây ô nhiễm',
      blocks: [
        {
          type: 'p',
          text: 'Nước sinh hoạt được lấy từ nước mặt (sông, suối, ao, hồ) và nước ngầm (giếng khoan, giếng đào). Nước mặt thường đục, có màu, nhiều vi sinh vật; nước ngầm thường trong hơn nhưng hay nhiễm sắt, manganese, có khi nhiễm arsenic.',
        },
        {
          type: 'table',
          head: ['Nhóm chất ô nhiễm', 'Ví dụ', 'Tác hại'],
          rows: [
            ['Chất rắn lơ lửng', 'Phù sa, đất sét, cặn hữu cơ', 'Gây đục, che chở vi khuẩn'],
            [
              'Chất gây màu, mùi',
              'Mùn, tảo, chất hữu cơ phân huỷ',
              'Nước có màu vàng nâu, mùi hôi',
            ],
            ['Vi sinh vật', 'Vi khuẩn E. coli, virus, trứng giun', 'Gây bệnh tiêu chảy, tả, lị'],
            [
              'Ion kim loại',
              '$\\mathrm{Fe^{2+}}$, $\\mathrm{Mn^{2+}}$, hợp chất của As, Pb, Hg',
              'Nước tanh, vàng; kim loại nặng gây độc lâu dài',
            ],
            [
              'Hợp chất nitrogen',
              '$\\mathrm{NH_4^+}$, $\\mathrm{NO_2^-}$, $\\mathrm{NO_3^-}$',
              'Dấu hiệu nhiễm bẩn từ phân bón, chất thải',
            ],
          ],
          caption: 'Các nhóm chất gây ô nhiễm nguồn nước',
        },
        {
          type: 'table',
          head: ['Chỉ tiêu', 'Giới hạn cho phép'],
          rows: [
            ['pH', '$6{,}0$ – $8{,}5$'],
            ['Độ đục', 'Không quá $2$ NTU'],
            ['Độ màu', 'Không quá $15$ TCU'],
            ['Chlorine dư tự do', '$0{,}2$ – $1{,}0$ mg/L'],
            ['Sắt', 'Không quá $0{,}3$ mg/L'],
            ['Manganese', 'Không quá $0{,}1$ mg/L'],
            ['Arsenic', 'Không quá $0{,}01$ mg/L'],
          ],
          caption: 'Một số chỉ tiêu nước sạch sinh hoạt theo QCVN 01-1:2018/BYT',
        },
      ],
    },
    {
      heading: 'Các công đoạn xử lí nước',
      blocks: [
        {
          type: 'p',
          text: 'Nhà máy nước xử lí nước mặt qua các công đoạn: lắng sơ bộ → keo tụ, tạo bông → lắng → lọc → khử trùng → chứa và cấp nước. Tuỳ chất lượng nguồn nước mà thêm công đoạn khử màu, khử sắt, điều chỉnh pH.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Keo tụ',
          text: 'Các hạt đất sét, phù sa rất nhỏ mang điện tích cùng dấu nên đẩy nhau, lơ lửng mãi không lắng. Chất keo tụ tạo ra các hạt keo hút những hạt này lại, kết thành bông cặn lớn, nặng, lắng nhanh xuống đáy.',
        },
        {
          type: 'p',
          text: 'Chất keo tụ phổ biến: phèn chua $\\mathrm{KAl(SO_4)_2 \\cdot 12H_2O}$, phèn nhôm $\\mathrm{Al_2(SO_4)_3 \\cdot 18H_2O}$, phèn sắt và PAC (poly aluminium chloride, $\\mathrm{[Al_2(OH)_nCl_{6-n}]_m}$). Ion $\\mathrm{Al^{3+}}$ bị thuỷ phân tạo kết tủa keo $\\mathrm{Al(OH)_3}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Al^{3+} + 3H_2O \\rightleftharpoons Al(OH)_3 + 3H^+}',
        },
        {
          type: 'p',
          text: 'PAC tan nhanh, tạo bông cặn tốt trong khoảng pH rộng, ít làm giảm pH nên ngày càng được dùng nhiều, kể cả để xử lí nước cho các hộ gia đình vùng lũ.',
        },
        {
          type: 'p',
          text: 'Lọc: nước chảy qua các lớp cát, sỏi giữ lại cặn còn sót sau khi lắng. Than hoạt tính có rất nhiều lỗ xốp nhỏ, diện tích bề mặt lớn, hấp phụ chất màu, chất gây mùi và một số chất độc.',
        },
        {
          type: 'p',
          text: 'Khử sắt trong nước ngầm: làm thoáng (phun mưa, sục khí) để oxygen không khí oxi hoá $\\mathrm{Fe^{2+}}$ thành $\\mathrm{Fe(OH)_3}$ kết tủa nâu đỏ, rồi lọc bỏ:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{4Fe^{2+} + O_2 + 10H_2O \\to 4Fe(OH)_3 + 8H^+}',
        },
        {
          type: 'p',
          text: 'Khử trùng: dùng chlorine $\\mathrm{Cl_2}$, nước Javel (chứa $\\mathrm{NaClO}$), calcium hypochlorite $\\mathrm{Ca(OCl)_2}$, cloramin B, hoặc ozone, tia cực tím. Chlorine tác dụng với nước tạo hypochlorous acid $\\mathrm{HClO}$ có tính oxi hoá mạnh, diệt vi khuẩn; giữ một lượng chlorine dư nhỏ để nước không bị nhiễm khuẩn lại trên đường ống.',
        },
        { type: 'tex', tex: '\\mathrm{Cl_2 + H_2O \\rightleftharpoons HCl + HClO}' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Xử lí nước theo hướng sinh học',
          text: 'Một số chất keo tụ có nguồn gốc tự nhiên, phân huỷ sinh học, ít để lại dư lượng nhôm trong nước: bột hạt chùm ngây, chitosan (từ vỏ tôm, cua). Bể lọc chậm dùng lớp màng vi sinh vật hình thành trên mặt cát để phân huỷ chất hữu cơ, giảm vi khuẩn.',
        },
        {
          type: 'p',
          text: 'Mô hình bộ lọc dưới đây giúp em thấy vai trò của từng công đoạn và từng lớp vật liệu.',
        },
      ],
    },
    {
      heading: 'Thực hành: làm trong nước và làm bộ lọc nước',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Thí nghiệm 1. Giảm độ đục bằng phèn chua. Chuẩn bị: nước đục (sông, hồ, ao), phèn chua hoặc phèn nhôm; hai cốc thuỷ tinh $250$ mL, một cốc $100$ mL, ống đong $10$ mL, đũa thuỷ tinh, thìa thuỷ tinh.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Rót khoảng $200$ mL nước đục vào mỗi cốc $250$ mL.',
            'Cho một thìa phèn chua (khoảng $0{,}05$ g) vào cốc $100$ mL có khoảng $5$ mL nước sạch, khuấy tan.',
            'Đổ toàn bộ dung dịch phèn vào một cốc nước đục, khuấy nhanh khoảng $1$ phút rồi để yên khoảng $30$ phút; cốc kia để đối chứng.',
            'Quan sát, so sánh độ trong của hai cốc và lớp cặn ở đáy.',
          ],
        },
        {
          type: 'p',
          text: 'Thí nghiệm 2. Giảm độ màu bằng bộ lọc nhiều lớp. Chuẩn bị: nước có màu, than hoạt tính dạng hạt, cát, sỏi (đã rửa sạch), bông; chai nhựa có nhiều lỗ nhỏ ở đáy, chậu nhựa, cốc thuỷ tinh $100$ mL.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lót một lớp bông dưới đáy chai, rồi cho một lớp sỏi.',
            'Lần lượt cho tiếp các lớp cát, than hoạt tính, cát; mỗi lớp dày khoảng $2$ – $3$ cm.',
            'Đặt cốc thuỷ tinh trong chậu, đặt chai lên trên cốc, đổ nước có màu vào chai và hứng nước lọc.',
            'So sánh màu nước trước và sau khi lọc.',
          ],
        },
        {
          type: 'p',
          text: 'Dự án nhóm: dùng chai nhựa và vật liệu dễ kiếm, làm một bộ lọc nước cho gia đình; thử với nước đã được làm trong bằng phèn và so sánh với khi không dùng phèn. Báo cáo gồm mục tiêu, sơ đồ bộ lọc (thứ tự và độ dày các lớp), kết quả quan sát độ đục, màu trước và sau lọc, giải thích vai trò từng lớp, và lưu ý: nước sau lọc còn phải khử trùng hoặc đun sôi mới dùng để uống.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Không nếm nước trong thí nghiệm. Chlorine, nước Javel, $\\mathrm{Ca(OCl)_2}$ là chất oxi hoá mạnh: dùng đúng liều, không trộn với acid (sinh khí chlorine độc), cất xa tầm tay trẻ em.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ lọc nước nhiều lớp',
    instruction:
      'Dùng nút ↑, ↓ để xếp lại các lớp trong chai (từ trên xuống), bấm "Bỏ" để lấy một lớp ra, chọn có dùng phèn và chlorine hay không, rồi bấm "Đổ nước đục". Tìm cách xếp để nước lọc đạt cả độ đục, độ màu và đã được khử trùng. Lớp nào phải nằm dưới cùng? Vì sao than hoạt tính cần một lớp cát ở trên?',
  },
  examples: [
    {
      problem:
        'Trong thí nghiệm, dùng $0{,}05$ g phèn chua cho $200$ mL nước đục. Với cùng tỉ lệ, cần bao nhiêu gam phèn để làm trong một can $20$ L nước?',
      steps: [
        'Liều phèn: $\\dfrac{0{,}05\\ \\text{g}}{0{,}2\\ \\text{L}} = 0{,}25$ g/L.',
        'Cho $20$ L: $0{,}25 \\cdot 20 = 5$ g.',
        'Nên hoà tan phèn trong một ít nước trước rồi mới đổ vào can, khuấy nhanh cho phèn phân tán đều.',
      ],
      answer: 'Cần khoảng $5$ g phèn chua.',
    },
    {
      problem:
        'Một bể chứa $2$ m³ nước cần lượng chlorine hoạt tính $0{,}5$ mg/L để khử trùng. Dùng nước Javel chứa $50$ g chlorine hoạt tính mỗi lít thì cần bao nhiêu mililít?',
      steps: [
        '$2$ m³ $= 2\\,000$ L; lượng chlorine hoạt tính cần: $0{,}5 \\cdot 2\\,000 = 1\\,000$ mg $= 1$ g.',
        'Thể tích nước Javel: $\\dfrac{1}{50} = 0{,}02$ L $= 20$ mL.',
      ],
      answer: 'Cần $20$ mL nước Javel.',
    },
    {
      problem:
        'Nước giếng khoan chứa $3$ mg/L ion $\\mathrm{Fe^{2+}}$. Khi làm thoáng $1$ m³ nước này, tính khối lượng oxygen cần để oxi hoá hết $\\mathrm{Fe^{2+}}$ và khối lượng kết tủa $\\mathrm{Fe(OH)_3}$ thu được.',
      steps: [
        '$m_{\\mathrm{Fe}} = 3 \\cdot 1\\,000 = 3\\,000$ mg $= 3$ g; $n_{\\mathrm{Fe^{2+}}} = \\dfrac{3}{56} \\approx 0{,}0536$ mol.',
        '$4\\mathrm{Fe^{2+}} + \\mathrm{O_2} + 10\\mathrm{H_2O} \\to 4\\mathrm{Fe(OH)_3} + 8\\mathrm{H^+}$: $n_{\\mathrm{O_2}} = \\dfrac{0{,}0536}{4} \\approx 0{,}0134$ mol, $m_{\\mathrm{O_2}} \\approx 0{,}43$ g.',
        '$n_{\\mathrm{Fe(OH)_3}} = n_{\\mathrm{Fe^{2+}}}$; $m = \\dfrac{3}{56} \\cdot 107 \\approx 5{,}73$ g.',
      ],
      answer:
        'Cần khoảng $0{,}43$ g oxygen; thu được khoảng $5{,}73$ g $\\mathrm{Fe(OH)_3}$, được lọc bỏ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây thường được dùng làm chất keo tụ để làm trong nước?',
      options: [
        'Phèn chua $\\mathrm{KAl(SO_4)_2 \\cdot 12H_2O}$.',
        'Muối ăn NaCl.',
        'Đường saccharose.',
        'Than hoạt tính.',
      ],
      answer: 0,
      hints: ['Chất keo tụ tạo ra hạt keo kéo các hạt lơ lửng lắng xuống.'],
      solution:
        'Phèn chua tạo kết tủa keo $\\mathrm{Al(OH)_3}$ kéo các hạt lơ lửng thành bông cặn lắng xuống. Than hoạt tính dùng để hấp phụ màu, mùi chứ không phải chất keo tụ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các công đoạn xử lí nước mặt ở nhà máy nước theo đúng thứ tự.',
      items: ['Lọc qua bể cát', 'Khử trùng', 'Lắng sơ bộ', 'Keo tụ, tạo bông', 'Lắng bông cặn'],
      answer: [2, 3, 4, 0, 1],
      hints: ['Khử trùng làm cuối cùng, khi nước đã trong.'],
      solution: 'Lắng sơ bộ → keo tụ, tạo bông → lắng bông cặn → lọc → khử trùng.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào được dùng để khử trùng nước sinh hoạt?',
      options: [
        'Chlorine $\\mathrm{Cl_2}$.',
        'Nước Javel (chứa NaClO).',
        'Calcium hypochlorite $\\mathrm{Ca(OCl)_2}$.',
        'Phèn nhôm.',
        'Cát thạch anh.',
      ],
      answers: [0, 1, 2],
      hints: ['Chất khử trùng phải có tính oxi hoá mạnh để diệt vi khuẩn.'],
      solution:
        '$\\mathrm{Cl_2}$, NaClO, $\\mathrm{Ca(OCl)_2}$ đều tạo $\\mathrm{HClO}$ có tính oxi hoá mạnh, diệt khuẩn. Phèn nhôm dùng để keo tụ, cát dùng để lọc.',
    },
    {
      type: 'choice',
      prompt: 'Trong bộ lọc nước, lớp than hoạt tính có vai trò chính là',
      options: [
        'hấp phụ chất màu, chất gây mùi.',
        'diệt hoàn toàn vi khuẩn.',
        'giữ các hạt cát không lọt xuống.',
        'làm tăng pH của nước.',
      ],
      answer: 0,
      hints: ['Than hoạt tính có rất nhiều lỗ xốp nhỏ, diện tích bề mặt lớn.'],
      solution:
        'Than hoạt tính hấp phụ chất màu, mùi và một số chất độc trên bề mặt lỗ xốp. Nó không diệt hết vi khuẩn, nên nước vẫn phải khử trùng.',
    },
    {
      type: 'number',
      prompt:
        'Với liều phèn chua $0{,}25$ g cho mỗi lít nước đục, cần bao nhiêu gam phèn để làm trong $15$ L nước?',
      answer: 3.75,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Nhân liều mỗi lít với số lít.'],
      solution: '$m = 0{,}25 \\cdot 15 = 3{,}75$ g.',
    },
    {
      type: 'number',
      prompt:
        'Bể chứa $5$ m³ nước cần $0{,}6$ mg chlorine hoạt tính mỗi lít. Nước Javel chứa $50$ g chlorine hoạt tính mỗi lít. Cần bao nhiêu mililít nước Javel?',
      answer: 60,
      tolerance: 0.5,
      unit: 'mL',
      hints: ['Đổi $5$ m³ ra lít và tính tổng số miligam chlorine hoạt tính cần.'],
      solution:
        '$5$ m³ $= 5\\,000$ L; cần $0{,}6 \\cdot 5\\,000 = 3\\,000$ mg $= 3$ g. Thể tích Javel: $\\dfrac{3}{50} = 0{,}06$ L $= 60$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Nước giếng chứa $2{,}8$ mg/L ion $\\mathrm{Fe^{2+}}$. Làm thoáng $2$ m³ nước này, $\\mathrm{Fe^{2+}}$ bị oxi hoá hết thành $\\mathrm{Fe(OH)_3}$. Tính khối lượng kết tủa (gam).',
      answer: 10.7,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Tính khối lượng sắt rồi số mol: mỗi mol $\\mathrm{Fe^{2+}}$ cho $1$ mol $\\mathrm{Fe(OH)_3}$ ($107$ g/mol).',
      ],
      solution:
        '$m_{\\mathrm{Fe}} = 2{,}8 \\cdot 2\\,000 = 5\\,600$ mg $= 5{,}6$ g; $n = 0{,}1$ mol; $m_{\\mathrm{Fe(OH)_3}} = 0{,}1 \\cdot 107 = 10{,}7$ g.',
    },
    {
      type: 'choice',
      prompt:
        'Nước giếng khoan lúc mới bơm lên thì trong, để ngoài không khí một lúc thì có màu vàng, váng nâu đỏ và mùi tanh. Nguyên nhân và cách xử lí phù hợp là',
      options: [
        'nước nhiễm sắt; làm thoáng rồi lọc bỏ kết tủa.',
        'nước nhiễm vi khuẩn; chỉ cần đun sôi.',
        'nước nhiễm muối ăn; dùng phèn để keo tụ.',
        'nước có nhiều chất béo; dùng xà phòng để tẩy.',
      ],
      answer: 0,
      hints: ['Ion nào bị oxygen không khí oxi hoá thành kết tủa màu nâu đỏ?'],
      solution:
        '$\\mathrm{Fe^{2+}}$ tan trong nước ngầm bị oxygen oxi hoá thành $\\mathrm{Fe(OH)_3}$ nâu đỏ. Làm thoáng (dàn mưa, sục khí) để oxi hoá hết rồi lọc qua cát.',
    },
    {
      type: 'text',
      prompt:
        'Viết công thức hoá học của acid tạo thành khi chlorine tác dụng với nước, có tính oxi hoá mạnh, giúp diệt khuẩn.',
      accept: ['HClO', 'HOCl'],
      hints: ['$\\mathrm{Cl_2 + H_2O \\rightleftharpoons HCl + \\ ?}$', 'Đó là hypochlorous acid.'],
      solution:
        '$\\mathrm{Cl_2 + H_2O \\rightleftharpoons HCl + HClO}$; hypochlorous acid $\\mathrm{HClO}$ có tính oxi hoá mạnh, diệt vi khuẩn.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các lớp vật liệu của bộ lọc trong thí nghiệm, từ đáy chai lên trên.',
      items: ['Than hoạt tính', 'Bông', 'Cát (trên cùng)', 'Sỏi', 'Cát (dưới than)'],
      answer: [1, 3, 4, 0, 2],
      hints: [
        'Lớp dưới cùng phải giữ cho các hạt nhỏ không lọt qua lỗ chai; lớp hạt to đỡ lớp hạt mịn.',
      ],
      solution:
        'Từ đáy lên: bông → sỏi → cát → than hoạt tính → cát. Bông chặn lỗ, sỏi đỡ cát, cát phía trên giữ cặn để than không bị bít.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nước đã lọc trong vẫn phải khử trùng (hoặc đun sôi) trước khi uống?',
      options: [
        'Lọc không giữ lại hết vi khuẩn, virus gây bệnh.',
        'Nước lọc còn quá nhiều phèn.',
        'Than hoạt tính làm nước có tính acid.',
        'Nước lọc có nhiệt độ quá thấp.',
      ],
      answer: 0,
      hints: ['Vi khuẩn nhỏ hơn rất nhiều so với khe hở giữa các hạt cát.'],
      solution:
        'Vi khuẩn, virus rất nhỏ, lọt được qua lớp cát, than; phải diệt bằng chất khử trùng hoặc đun sôi.',
    },
  ],
  takeaways: [
    'Nước mặt thường đục, có màu, nhiều vi sinh vật; nước ngầm hay nhiễm sắt, manganese, có khi nhiễm arsenic.',
    'Quy trình xử lí: lắng → keo tụ (phèn, PAC tạo keo $\\mathrm{Al(OH)_3}$) → lắng → lọc (cát, sỏi, than hoạt tính) → khử trùng.',
    'Khử sắt bằng làm thoáng: $\\mathrm{Fe^{2+}}$ bị oxi hoá thành $\\mathrm{Fe(OH)_3}$ rồi lọc bỏ.',
    'Chlorine, NaClO, $\\mathrm{Ca(OCl)_2}$ tạo $\\mathrm{HClO}$ diệt khuẩn; giữ chlorine dư $0{,}2$ – $1{,}0$ mg/L.',
    'Bộ lọc tự làm, từ đáy lên: bông, sỏi, cát, than hoạt tính, cát; nước sau lọc vẫn phải khử trùng hoặc đun sôi.',
  ],
};
