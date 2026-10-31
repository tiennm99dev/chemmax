/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Than đá, dầu mỏ, khí thiên nhiên là nhiên liệu hoá thạch, hình thành từ xác sinh vật bị chôn vùi hàng trăm triệu năm, giàu carbon, có hạn và không tái tạo. Carbon tồn tại ở dạng đơn chất, hợp chất vô cơ và hữu cơ, luân chuyển giữa khí quyển, đại dương, đất đá và sinh vật theo chu trình carbon. Đốt nhiên liệu hoá thạch và phá rừng làm tăng CO2, CH4 trong khí quyển, tăng hiệu ứng nhà kính và gây ấm lên toàn cầu; cần tiết kiệm năng lượng, dùng năng lượng tái tạo và trồng rừng.',
  intro:
    'Năm 1850, không khí chứa khoảng $280$ phần triệu (ppm) khí carbon dioxide. Ngày nay con số ấy đã vượt $420$ ppm, cao nhất trong hàng trăm nghìn năm, và nhiệt độ trung bình của Trái Đất đã tăng hơn $1\\,^\\circ\\mathrm{C}$. Lượng carbon ấy từ đâu ra, đi đâu, và vì sao chỉ một lượng khí rất nhỏ lại làm cả hành tinh nóng lên?',
  objectives: [
    'Nêu được nhiên liệu hoá thạch, nguồn gốc, cách khai thác, lợi ích và hạn chế của việc sử dụng chúng; đề xuất cách sử dụng tiết kiệm, hiệu quả.',
    'Nêu được các dạng tồn tại của carbon trong tự nhiên và các nguồn thải carbon dioxide vào khí quyển.',
    'Trình bày được chu trình carbon trong tự nhiên.',
    'Giải thích được hiệu ứng nhà kính, nguyên nhân, hậu quả của sự ấm lên toàn cầu và biện pháp giảm thiểu.',
  ],
  sections: [
    {
      heading: 'Nhiên liệu hoá thạch',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiên liệu hoá thạch',
          text: 'Nhiên liệu hoá thạch là nhiên liệu được hình thành từ xác sinh vật bị chôn vùi và phân huỷ trong lòng đất qua hàng trăm triệu năm, có hàm lượng carbon cao. Đó là than đá (thể rắn), dầu mỏ (thể lỏng, chủ yếu là hydrocarbon), khí mỏ dầu và khí thiên nhiên (thể khí, chủ yếu là methane $\\mathrm{CH_4}$).',
        },
        {
          type: 'p',
          text: 'Nhiên liệu hoá thạch hình thành trong tự nhiên rất chậm nên là tài nguyên không tái tạo. Củi gỗ không phải nhiên liệu hoá thạch vì nó lấy trực tiếp từ cây đang sống, có thể trồng lại. Methane ngoài khí thiên nhiên còn sinh ra từ nhiều nguồn: tự nhiên (đầm lầy, quá trình phân huỷ xác sinh vật) và do con người (bãi rác, ruộng lúa ngập nước, chăn nuôi gia súc).',
        },
        {
          type: 'p',
          text: 'Than đá được khai thác lộ thiên hoặc trong hầm lò (ở Việt Nam chủ yếu ở Quảng Ninh); dầu mỏ và khí thiên nhiên được khai thác bằng giàn khoan (ở thềm lục địa phía Nam). Hiện nay nhiên liệu hoá thạch vẫn là nguồn năng lượng chiếm tỉ lệ lớn nhất thế giới: dùng cho nhà máy nhiệt điện, luyện kim, sản xuất xi măng, giao thông vận tải và làm nguyên liệu cho công nghiệp hoá chất. Than đá, khí thiên nhiên cũng như các nhiên liệu chứa carbon khác (ví dụ ethanol $\\mathrm{C_2H_5OH}$, nhiên liệu sinh học pha vào xăng E5) khi cháy đều tạo ra $\\mathrm{CO_2}$:',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{C + O_2 \\xrightarrow{t^\\circ} CO_2}\\\\ &\\mathrm{CH_4 + 2O_2 \\xrightarrow{t^\\circ} CO_2 + 2H_2O}\\\\ &\\mathrm{C_2H_5OH + 3O_2 \\xrightarrow{t^\\circ} 2CO_2 + 3H_2O} \\end{aligned}',
        },
        {
          type: 'table',
          head: ['Nhiên liệu', 'Nhiệt lượng toả ra khi đốt cháy $1$ kg (gần đúng)'],
          rows: [
            ['Củi gỗ khô', '$16$ MJ'],
            ['Than đá', '$29$ MJ'],
            ['Dầu hoả', '$44$ MJ'],
            ['Khí methane', '$55$ MJ'],
          ],
          caption: 'Giá trị thay đổi theo loại nhiên liệu cụ thể; $1$ MJ $= 1\\,000$ kJ',
        },
        {
          type: 'list',
          items: [
            'Hạn chế: trữ lượng có hạn, có nguy cơ cạn kiệt; khi đốt thải ra $\\mathrm{CO_2}$, $\\mathrm{CO}$, oxide của sulfur và nitrogen, bụi, gây ô nhiễm không khí, mưa acid, hại sức khoẻ và làm Trái Đất nóng lên.',
            'Sử dụng tiết kiệm, hiệu quả: tắt thiết bị điện khi không dùng, đi phương tiện công cộng, xe đạp, xe điện; dùng xăng sinh học E5, E10; đun nấu đủ không khí để nhiên liệu cháy hoàn toàn.',
            'Thay thế dần bằng năng lượng tái tạo: năng lượng mặt trời, gió, nước, sinh khối, biodiesel.',
          ],
        },
      ],
    },
    {
      heading: 'Nguồn carbon và chu trình carbon',
      blocks: [
        {
          type: 'table',
          head: ['Dạng tồn tại', 'Ví dụ'],
          rows: [
            ['Đơn chất', 'Kim cương, than chì (graphite)'],
            [
              'Hợp chất vô cơ',
              'Khí $\\mathrm{CO_2}$, $\\mathrm{CO}$ trong khí quyển; muối carbonate trong đá vôi ($\\mathrm{CaCO_3}$), dolomite; $\\mathrm{CO_2}$ hoà tan trong nước biển',
            ],
            [
              'Hợp chất hữu cơ',
              'Cơ thể sinh vật (tinh bột, cellulose, protein, chất béo); than đá, dầu mỏ, khí thiên nhiên',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Carbon luôn luân chuyển giữa khí quyển, đại dương, đất đá và sinh vật theo một vòng khép kín gọi là chu trình carbon. Cây xanh hấp thụ $\\mathrm{CO_2}$ qua quang hợp (cần ánh sáng và chất diệp lục) để tạo chất hữu cơ:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{6CO_2 + 6H_2O \\xrightarrow{\\text{ánh sáng, diệp lục}} C_6H_{12}O_6 + 6O_2}',
        },
        {
          type: 'list',
          items: [
            'Carbon trong chất hữu cơ đi theo chuỗi thức ăn từ thực vật sang động vật.',
            'Hô hấp của sinh vật và sự phân huỷ xác sinh vật trả $\\mathrm{CO_2}$ lại khí quyển.',
            'Một phần xác sinh vật bị chôn vùi, qua hàng triệu năm biến thành than đá, dầu mỏ, khí thiên nhiên; xác vỏ sò, san hô tạo nên đá vôi.',
            'Đại dương hoà tan $\\mathrm{CO_2}$ và cũng giải phóng $\\mathrm{CO_2}$ trở lại không khí.',
            'Núi lửa, cháy rừng, nung vôi và đặc biệt là việc đốt nhiên liệu hoá thạch thải $\\mathrm{CO_2}$ vào khí quyển.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cân bằng bị phá vỡ',
          text: 'Trước khi có công nghiệp, lượng $\\mathrm{CO_2}$ vào và ra khỏi khí quyển gần cân bằng. Ngày nay con người đốt nhiên liệu hoá thạch và phá rừng, đưa thêm khoảng $10$–$11$ tỉ tấn carbon mỗi năm vào không khí; đại dương và cây xanh chỉ hấp thụ được khoảng một nửa, phần còn lại tích tụ trong khí quyển.',
        },
      ],
    },
    {
      heading: 'Hiệu ứng nhà kính và sự ấm lên toàn cầu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hiệu ứng nhà kính',
          text: 'Ánh sáng Mặt Trời xuyên qua khí quyển làm nóng mặt đất; mặt đất toả nhiệt trở lại. Một số khí trong khí quyển, gọi là khí nhà kính, giữ lại một phần nhiệt này, giống như lớp kính của nhà kính trồng cây. Hiện tượng đó là hiệu ứng nhà kính. Các khí nhà kính chính là $\\mathrm{CO_2}$, $\\mathrm{CH_4}$, hơi nước, ...',
        },
        {
          type: 'p',
          text: 'Hiệu ứng nhà kính tự nhiên rất cần thiết: nhờ nó, nhiệt độ trung bình bề mặt Trái Đất khoảng $15\\,^\\circ\\mathrm{C}$ thay vì khoảng $-18\\,^\\circ\\mathrm{C}$. Nhưng $\\mathrm{CO_2}$ và $\\mathrm{CH_4}$ tuy chiếm hàm lượng rất nhỏ trong khí quyển lại đang tăng nhanh do đốt nhiên liệu hoá thạch, phá rừng, chăn nuôi, bãi rác. Hiệu ứng nhà kính tăng lên làm nhiệt độ trung bình toàn cầu tăng: đó là sự ấm lên toàn cầu.',
        },
        {
          type: 'list',
          items: [
            'Thời tiết cực đoan: nắng nóng, hạn hán, bão, lũ lụt mạnh và thường xuyên hơn.',
            'Băng ở hai cực và trên núi cao tan, nước biển nở ra khi nóng lên, làm nước biển dâng, đe doạ các vùng ven biển như đồng bằng sông Cửu Long.',
            'Đại dương hấp thụ nhiều $\\mathrm{CO_2}$ bị acid hoá, hại san hô và sinh vật biển.',
            'Sa mạc hoá, thảm thực vật bị thu hẹp, nhiều loài sinh vật bị đe doạ.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giảm phát thải khí nhà kính',
          text: 'Thoả thuận Paris (2015) đặt mục tiêu giữ mức tăng nhiệt độ toàn cầu dưới $2\\,^\\circ\\mathrm{C}$, cố gắng không quá $1{,}5\\,^\\circ\\mathrm{C}$ so với thời kì tiền công nghiệp. Việt Nam cam kết đạt phát thải ròng bằng $0$ vào năm $2050$. Các biện pháp: tiết kiệm năng lượng, phát triển điện mặt trời, điện gió, dùng phương tiện công cộng, xe điện, nhiên liệu sinh học, trồng và bảo vệ rừng, giảm rác thải.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chu trình carbon và nhiệt độ Trái Đất',
    instruction:
      'Kéo thanh trượt để tăng hoặc giảm lượng nhiên liệu hoá thạch đốt mỗi năm, chọn phá rừng hay trồng rừng. Mũi tên trong sơ đồ dày lên theo lượng carbon đi qua. Kéo thanh "Xem năm" để theo dõi lượng CO₂ trong khí quyển và mức tăng nhiệt độ đến năm 2100. Hãy tìm mức đốt nhiên liệu để nhiệt độ không vượt quá 1,5 °C.',
  },
  examples: [
    {
      problem:
        'So sánh khối lượng khí $\\mathrm{CO_2}$ sinh ra khi đốt cháy hoàn toàn $1$ kg than (coi là carbon) và $1$ kg methane (C = 12, H = 1, O = 16).',
      steps: [
        'Than: $\\mathrm{C + O_2 \\xrightarrow{t^\\circ} CO_2}$; $n_{\\mathrm{C}} = \\dfrac{1\\,000}{12} \\approx 83{,}3$ mol, nên $m_{\\mathrm{CO_2}} = 83{,}3 \\times 44 \\approx 3\\,667$ g $\\approx 3{,}67$ kg.',
        'Methane: $\\mathrm{CH_4 + 2O_2 \\xrightarrow{t^\\circ} CO_2 + 2H_2O}$; $n_{\\mathrm{CH_4}} = \\dfrac{1\\,000}{16} = 62{,}5$ mol, nên $m_{\\mathrm{CO_2}} = 62{,}5 \\times 44 = 2\\,750$ g $= 2{,}75$ kg.',
        'Mặt khác $1$ kg methane toả khoảng $55$ MJ, nhiều hơn $1$ kg than (khoảng $29$ MJ).',
      ],
      answer:
        'Than tạo khoảng $3{,}67$ kg $\\mathrm{CO_2}$, methane tạo $2{,}75$ kg $\\mathrm{CO_2}$ mà lại toả nhiều nhiệt hơn; vì vậy khí thiên nhiên được coi là nhiên liệu hoá thạch "sạch" hơn than.',
    },
    {
      problem: 'Trình bày chu trình carbon bắt đầu từ khí $\\mathrm{CO_2}$ trong khí quyển.',
      steps: [
        'Cây xanh hấp thụ $\\mathrm{CO_2}$ qua quang hợp, tạo glucose, tinh bột, cellulose.',
        'Động vật ăn thực vật, carbon chuyển vào cơ thể động vật.',
        'Hô hấp của thực vật, động vật và sự phân huỷ xác sinh vật thải $\\mathrm{CO_2}$ trở lại khí quyển.',
        'Một phần xác sinh vật bị vùi lấp thành nhiên liệu hoá thạch; con người đốt chúng lại sinh ra $\\mathrm{CO_2}$. Đại dương hoà tan và giải phóng $\\mathrm{CO_2}$.',
      ],
      answer:
        'Carbon đi từ khí quyển vào sinh vật (quang hợp), qua chuỗi thức ăn, rồi trở lại khí quyển (hô hấp, phân huỷ, đốt cháy), tạo thành vòng khép kín.',
    },
    {
      problem: 'Vì sao nhiệt độ trung bình toàn cầu tăng lại làm nước biển dâng?',
      steps: [
        'Nhiệt độ tăng làm băng ở hai cực và sông băng trên núi tan chảy; nước từ băng trên đất liền chảy ra biển.',
        'Nước biển nóng lên thì nở ra (thể tích tăng).',
      ],
      answer:
        'Do băng trên đất liền tan chảy và nước biển giãn nở vì nhiệt, mực nước biển dâng lên.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhiên liệu nào sau đây không phải là nhiên liệu hoá thạch?',
      options: ['Than đá', 'Dầu mỏ', 'Củi gỗ', 'Khí thiên nhiên'],
      answer: 2,
      hints: ['Nhiên liệu hoá thạch hình thành trong lòng đất qua hàng trăm triệu năm.'],
      solution:
        'Củi gỗ lấy từ cây đang sống, có thể trồng lại, nên không phải nhiên liệu hoá thạch.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng khí $\\mathrm{CO_2}$ (kg) sinh ra khi đốt cháy hoàn toàn $12$ kg carbon (C = 12, O = 16).',
      answer: 44,
      tolerance: 0.01,
      unit: 'kg',
      hints: ['$\\mathrm{C + O_2 \\xrightarrow{t^\\circ} CO_2}$: tỉ lệ mol $1 : 1$.'],
      solution:
        '$12$ kg C là $1$ kmol, tạo $1$ kmol $\\mathrm{CO_2}$, tức $44$ kg. Khối lượng $\\mathrm{CO_2}$ lớn hơn khối lượng than vì có thêm oxygen từ không khí.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $16$ g methane. Tính thể tích khí $\\mathrm{CO_2}$ sinh ra ở điều kiện chuẩn (một mol khí chiếm $24{,}79$ L), đơn vị lít (C = 12, H = 1).',
      answer: 24.79,
      tolerance: 0.02,
      unit: 'L',
      hints: [
        '$M_{\\mathrm{CH_4}} = 12 + 4 \\times 1 = 16$ g/mol.',
        'Một mol $\\mathrm{CH_4}$ tạo một mol $\\mathrm{CO_2}$.',
      ],
      solution:
        '$n_{\\mathrm{CH_4}} = \\dfrac{16}{16} = 1$ mol $= n_{\\mathrm{CO_2}}$; $V = 1 \\times 24{,}79 = 24{,}79$ L.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất với dạng tồn tại của carbon trong nó.',
      left: ['Than chì', 'Đá vôi', 'Tinh bột'],
      right: ['Hợp chất hữu cơ', 'Đơn chất', 'Hợp chất vô cơ'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Muối carbonate được xếp vào hợp chất vô cơ.'],
      solution:
        'Than chì là đơn chất carbon; đá vôi ($\\mathrm{CaCO_3}$) là hợp chất vô cơ; tinh bột là hợp chất hữu cơ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các quá trình thải khí $\\mathrm{CO_2}$ vào khí quyển.',
      options: [
        'Hô hấp của động vật, thực vật',
        'Quang hợp của cây xanh',
        'Đốt nhiên liệu hoá thạch',
        'Cháy rừng',
        'Phân huỷ xác sinh vật',
      ],
      answers: [0, 2, 3, 4],
      hints: ['Chỉ có một quá trình trong danh sách lấy $\\mathrm{CO_2}$ ra khỏi khí quyển.'],
      solution:
        'Hô hấp, đốt nhiên liệu, cháy rừng, phân huỷ xác sinh vật thải $\\mathrm{CO_2}$; quang hợp hấp thụ $\\mathrm{CO_2}$.',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên nhân chính làm nồng độ $\\mathrm{CO_2}$ trong khí quyển tăng nhanh từ thế kỉ XIX đến nay là',
      options: [
        'núi lửa hoạt động mạnh hơn.',
        'con người đốt nhiều nhiên liệu hoá thạch và phá rừng.',
        'đại dương hấp thụ nhiều $\\mathrm{CO_2}$ hơn.',
        'cây xanh quang hợp mạnh hơn.',
      ],
      answer: 1,
      hints: ['Thế kỉ XIX là lúc cuộc cách mạng công nghiệp bùng nổ.'],
      solution:
        'Từ khi có công nghiệp, con người đốt ngày càng nhiều than, dầu, khí và chặt phá rừng, làm lượng $\\mathrm{CO_2}$ thải ra vượt quá khả năng hấp thụ của đại dương và cây xanh.',
    },
    {
      type: 'number',
      prompt:
        'Nồng độ $\\mathrm{CO_2}$ trong khí quyển tăng từ khoảng $280$ ppm thời kì tiền công nghiệp lên khoảng $420$ ppm hiện nay. Nồng độ đã tăng bao nhiêu phần trăm?',
      answer: 50,
      tolerance: 0.5,
      unit: '%',
      hints: ['Tính lượng tăng rồi chia cho giá trị ban đầu.'],
      solution:
        '$\\dfrac{420 - 280}{280} \\times 100\\% = \\dfrac{140}{280} \\times 100\\% = 50\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các biện pháp góp phần giảm sự ấm lên toàn cầu.',
      options: [
        'Lắp điện mặt trời trên mái nhà.',
        'Trồng và bảo vệ rừng.',
        'Đi xe buýt, xe đạp thay xe máy khi có thể.',
        'Đốt rơm rạ ngoài đồng sau mỗi vụ gặt.',
        'Dùng xăng sinh học E5.',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Biện pháp nào làm tăng lượng khí thải?'],
      solution:
        'Điện mặt trời, trồng rừng, phương tiện công cộng, xe đạp, xăng sinh học đều giảm phát thải $\\mathrm{CO_2}$; đốt rơm rạ lại thải thêm $\\mathrm{CO_2}$, bụi và khói.',
    },
    {
      type: 'choice',
      prompt: 'Hai khí nhà kính chính do hoạt động của con người làm tăng lên là',
      options: [
        '$\\mathrm{O_2}$ và $\\mathrm{N_2}$',
        '$\\mathrm{CO_2}$ và $\\mathrm{CH_4}$',
        '$\\mathrm{H_2}$ và $\\mathrm{O_2}$',
        '$\\mathrm{N_2}$ và $\\mathrm{Ar}$',
      ],
      answer: 1,
      hints: [
        'Một khí sinh ra khi đốt nhiên liệu, khí kia là thành phần chính của khí thiên nhiên.',
      ],
      solution:
        '$\\mathrm{CO_2}$ (đốt nhiên liệu, phá rừng) và $\\mathrm{CH_4}$ (bãi rác, ruộng lúa, chăn nuôi, rò rỉ khí) là hai khí nhà kính chính do con người thải ra.',
    },
  ],
  takeaways: [
    'Nhiên liệu hoá thạch (than đá, dầu mỏ, khí thiên nhiên) giàu carbon, hình thành qua hàng trăm triệu năm, có hạn; đốt chúng thải $\\mathrm{CO_2}$ và chất gây ô nhiễm.',
    'Carbon tồn tại ở dạng đơn chất (kim cương, than chì), hợp chất vô cơ ($\\mathrm{CO_2}$, muối carbonate) và hợp chất hữu cơ (sinh vật, nhiên liệu hoá thạch).',
    'Chu trình carbon: quang hợp lấy $\\mathrm{CO_2}$ khỏi khí quyển; hô hấp, phân huỷ, đốt cháy trả $\\mathrm{CO_2}$ lại khí quyển; đại dương hoà tan $\\mathrm{CO_2}$.',
    'Khí nhà kính ($\\mathrm{CO_2}$, $\\mathrm{CH_4}$, ...) tăng làm Trái Đất ấm lên: thời tiết cực đoan, băng tan, nước biển dâng, acid hoá đại dương. Cần tiết kiệm năng lượng, dùng năng lượng tái tạo và trồng rừng.',
  ],
};
