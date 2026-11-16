/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thế điện cực và nguồn điện hoá học: cặp oxi hoá – khử của kim loại, điện cực hydrogen chuẩn và thế điện cực chuẩn, dãy điện hoá và quy tắc α, cấu tạo và hoạt động của pin Galvani, sức điện động chuẩn của pin, một số nguồn điện hoá học thông dụng.',
  intro:
    'Nhúng một thanh kẽm vào dung dịch copper(II) sulfate, kẽm tan dần và copper bám lên thanh kẽm: electron chuyển trực tiếp từ Zn sang ion Cu²⁺ và năng lượng toả ra dưới dạng nhiệt. Nếu tách hai quá trình ấy ra hai cốc riêng và nối bằng dây dẫn, dòng electron đi qua dây sẽ thắp sáng được bóng đèn. Đó là nguyên tắc của pin điện hoá. Vì sao electron đi từ Zn sang Cu mà không theo chiều ngược lại, và pin cho hiệu điện thế bao nhiêu? Thế điện cực chuẩn trả lời các câu hỏi đó.',
  objectives: [
    'Nêu được khái niệm cặp oxi hoá – khử của kim loại.',
    'Nêu được khái niệm thế điện cực chuẩn của kim loại và vai trò của điện cực hydrogen chuẩn.',
    'Dùng thế điện cực chuẩn so sánh được tính oxi hoá, tính khử và dự đoán được chiều phản ứng giữa hai cặp oxi hoá – khử (quy tắc α).',
    'Mô tả được cấu tạo, hoạt động của pin Galvani và tính được sức điện động chuẩn của pin.',
    'Nêu được nguyên tắc, ưu điểm và nhược điểm của một số nguồn điện hoá học: acquy, pin nhiên liệu, pin lithium-ion, pin Mặt Trời.',
  ],
  sections: [
    {
      heading: 'Cặp oxi hoá – khử của kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử kim loại dễ nhường electron thành ion dương; ngược lại ion kim loại có thể nhận electron để trở thành nguyên tử kim loại:',
        },
        { type: 'tex', tex: '\\mathrm{M^{n+}} + ne \\rightleftharpoons \\mathrm{M}' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cặp oxi hoá – khử',
          text: 'Dạng oxi hoá $\\mathrm{M^{n+}}$ và dạng khử $\\mathrm{M}$ của cùng một nguyên tố kim loại tạo nên cặp oxi hoá – khử, kí hiệu $\\mathrm{M^{n+}/M}$ (dạng oxi hoá viết trước, dạng khử viết sau). Ví dụ: $\\mathrm{Zn^{2+}/Zn}$, $\\mathrm{Cu^{2+}/Cu}$, $\\mathrm{Ag^+/Ag}$, $\\mathrm{Fe^{2+}/Fe}$.',
        },
        {
          type: 'p',
          text: 'Ngoài các cặp ion kim loại/kim loại còn có những cặp khác như $\\mathrm{2H^+/H_2}$, $\\mathrm{Fe^{3+}/Fe^{2+}}$, $\\mathrm{Cl_2/2Cl^-}$.',
        },
      ],
    },
    {
      heading: 'Thế điện cực chuẩn',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi cặp oxi hoá – khử tạo thành một điện cực, ví dụ thanh kẽm nhúng trong dung dịch muối $\\mathrm{Zn^{2+}}$. Không thể đo trực tiếp thế của một điện cực, nên người ta so sánh nó với một điện cực chọn làm mốc: điện cực hydrogen chuẩn.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điện cực hydrogen chuẩn',
          text: 'Điện cực hydrogen chuẩn gồm một tấm platinum (Pt) nhúng trong dung dịch acid có $[\\mathrm{H^+}] = 1$ M, được sục khí $\\mathrm{H_2}$ dưới áp suất 1 bar ở 25 °C. Trên bề mặt Pt có cân bằng $\\mathrm{2H^+} + 2e \\rightleftharpoons \\mathrm{H_2}$. Quy ước thế điện cực chuẩn của nó bằng 0: $E^\\circ_{\\mathrm{2H^+/H_2}} = 0{,}000$ V.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thế điện cực chuẩn',
          text: 'Thế điện cực chuẩn của cặp $\\mathrm{M^{n+}/M}$, kí hiệu $E^\\circ_{\\mathrm{M^{n+}/M}}$ (đơn vị V), là thế của điện cực đó đo ở điều kiện chuẩn (nồng độ ion $\\mathrm{M^{n+}}$ là 1 M, 25 °C), so với điện cực hydrogen chuẩn.',
        },
        {
          type: 'table',
          caption: 'Thế điện cực chuẩn của một số cặp oxi hoá – khử ở 25 °C',
          head: ['Cặp oxi hoá – khử', '$E^\\circ$ (V)', 'Cặp oxi hoá – khử', '$E^\\circ$ (V)'],
          rows: [
            ['$\\mathrm{K^+/K}$', '$-2{,}924$', '$\\mathrm{Sn^{2+}/Sn}$', '$-0{,}137$'],
            ['$\\mathrm{Na^+/Na}$', '$-2{,}713$', '$\\mathrm{Pb^{2+}/Pb}$', '$-0{,}126$'],
            ['$\\mathrm{Mg^{2+}/Mg}$', '$-2{,}356$', '$\\mathrm{2H^+/H_2}$', '$0{,}000$'],
            ['$\\mathrm{Al^{3+}/Al}$', '$-1{,}676$', '$\\mathrm{Cu^{2+}/Cu}$', '$+0{,}340$'],
            ['$\\mathrm{Zn^{2+}/Zn}$', '$-0{,}762$', '$\\mathrm{Fe^{3+}/Fe^{2+}}$', '$+0{,}771$'],
            ['$\\mathrm{Fe^{2+}/Fe}$', '$-0{,}440$', '$\\mathrm{Ag^+/Ag}$', '$+0{,}799$'],
            ['$\\mathrm{Ni^{2+}/Ni}$', '$-0{,}257$', '—', '—'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa của thế điện cực chuẩn',
          text: 'Giá trị $E^\\circ$ càng nhỏ thì dạng khử có tính khử càng mạnh và dạng oxi hoá có tính oxi hoá càng yếu. Giá trị $E^\\circ$ càng lớn thì dạng oxi hoá có tính oxi hoá càng mạnh và dạng khử có tính khử càng yếu. Sắp xếp các cặp theo chiều $E^\\circ$ tăng dần ta được dãy điện hoá của kim loại.',
        },
        {
          type: 'p',
          text: 'Ví dụ: $E^\\circ_{\\mathrm{Mg^{2+}/Mg}} < E^\\circ_{\\mathrm{Zn^{2+}/Zn}} < E^\\circ_{\\mathrm{Cu^{2+}/Cu}}$ nên tính khử $\\mathrm{Mg} > \\mathrm{Zn} > \\mathrm{Cu}$, còn tính oxi hoá $\\mathrm{Mg^{2+}} < \\mathrm{Zn^{2+}} < \\mathrm{Cu^{2+}}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc α',
          text: 'Ở điều kiện chuẩn, chất khử của cặp có thế điện cực chuẩn nhỏ hơn khử được chất oxi hoá của cặp có thế điện cực chuẩn lớn hơn, tạo ra dạng oxi hoá và dạng khử tương ứng (đường nối các chất phản ứng và sản phẩm có hình chữ α).',
        },
        {
          type: 'tex',
          tex: 'E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440\\ \\text{V} < E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340\\ \\text{V} \\;\\Rightarrow\\; \\mathrm{Fe} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{Cu}',
        },
      ],
    },
    {
      heading: 'Pin Galvani',
      blocks: [
        {
          type: 'p',
          text: 'Pin Galvani (pin điện hoá) gồm hai điện cực ứng với hai cặp oxi hoá – khử, nối với nhau bằng dây dẫn ở mạch ngoài và bằng cầu muối giữa hai dung dịch. Năng lượng của phản ứng oxi hoá – khử được chuyển thành điện năng.',
        },
        {
          type: 'list',
          items: [
            'Pin Zn – Cu: thanh Zn nhúng trong dung dịch $\\mathrm{ZnSO_4}$ 1 M, thanh Cu nhúng trong dung dịch $\\mathrm{CuSO_4}$ 1 M, hai dung dịch nối bằng cầu muối chứa dung dịch muối như $\\mathrm{KNO_3}$ hoặc $\\mathrm{NH_4NO_3}$.',
            'Anode (cực âm) là điện cực có $E^\\circ$ nhỏ hơn, tại đó xảy ra quá trình oxi hoá: $\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$.',
            'Cathode (cực dương) là điện cực có $E^\\circ$ lớn hơn, tại đó xảy ra quá trình khử: $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$.',
            'Electron di chuyển từ anode sang cathode qua dây dẫn; các ion trong cầu muối di chuyển để trung hoà điện tích của hai dung dịch, giúp mạch điện kín.',
            'Phản ứng xảy ra trong pin: $\\mathrm{Zn} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{Cu}$. Khi pin hoạt động, thanh Zn mòn dần, Cu bám thêm lên thanh Cu, màu xanh của dung dịch $\\mathrm{CuSO_4}$ nhạt dần.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sức điện động chuẩn của pin',
          text: 'Sức điện động chuẩn của pin Galvani bằng thế điện cực chuẩn của cathode trừ thế điện cực chuẩn của anode: $$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}.$$ Sức điện động của pin luôn dương. Với pin Zn – Cu: $E^\\circ_{\\text{pin}} = 0{,}340 - (-0{,}762) = 1{,}102$ V.',
        },
      ],
    },
    {
      heading: 'Một số nguồn điện hoá học khác',
      blocks: [
        {
          type: 'table',
          caption: 'Một số nguồn điện thông dụng',
          head: ['Nguồn điện', 'Nguyên tắc', 'Ưu điểm', 'Nhược điểm'],
          rows: [
            [
              'Acquy chì',
              'Pin sạc lại được; anode Pb, cathode $\\mathrm{PbO_2}$, chất điện li dung dịch $\\mathrm{H_2SO_4}$. Khi phóng điện: $\\mathrm{Pb} + \\mathrm{PbO_2} + 2\\mathrm{H_2SO_4} \\longrightarrow 2\\mathrm{PbSO_4} + 2\\mathrm{H_2O}$; khi sạc, dòng điện một chiều làm phản ứng xảy ra theo chiều ngược lại.',
              'Dễ sản xuất, giá thành thấp, hoạt động ổn định; tái chế được chì và sulfuric acid.',
              'Nặng, tuổi thọ ngắn; tái chế thủ công gây ô nhiễm và nhiễm độc chì.',
            ],
            [
              'Pin nhiên liệu',
              'Phản ứng oxi hoá – khử giữa nhiên liệu (hydrogen, methane, methanol, ethanol) và chất oxi hoá (thường là oxygen); pin hydrogen: $2\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\mathrm{H_2O}$.',
              'Nhiên liệu được cung cấp liên tục; hiệu suất chuyển hoá năng lượng cao; ít khí thải.',
              'Giá thành cao, chưa phổ biến.',
            ],
            [
              'Pin lithium-ion',
              'Pin sạc lại được, ion $\\mathrm{Li^+}$ di chuyển giữa hai điện cực khi phóng điện và khi sạc.',
              'Nhẹ, nhỏ gọn, bền, mật độ năng lượng cao, sạc nhanh.',
              'Giá cao, nhạy với nhiệt độ, có nguy cơ cháy nổ.',
            ],
            [
              'Pin Mặt Trời',
              'Nhiều tấm bán dẫn ghép lại, chuyển quang năng thành điện năng.',
              'Sạch, không phát thải, nguồn năng lượng gần như vô tận.',
              'Sản xuất phức tạp, tốn kém; phụ thuộc thời tiết; tấm pin hết hạn có thể gây ô nhiễm.',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Pin Galvani ảo',
    instruction:
      'Chọn kim loại cho điện cực trái và điện cực phải. Quan sát điện cực nào là anode, chiều chuyển động của electron trên dây dẫn, các quá trình ở hai điện cực và số chỉ của vôn kế. So sánh khoảng cách giữa hai cặp trên dãy điện hoá với sức điện động của pin.',
  },
  examples: [
    {
      problem:
        'Pin Galvani gồm điện cực Zn nhúng trong dung dịch $\\mathrm{ZnSO_4}$ 1 M và điện cực Ag nhúng trong dung dịch $\\mathrm{AgNO_3}$ 1 M ở 25 °C. Xác định anode, cathode, viết các quá trình ở điện cực, phản ứng trong pin và tính sức điện động chuẩn. Biết $E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V, $E^\\circ_{\\mathrm{Ag^+/Ag}} = +0{,}799$ V.',
      steps: [
        '$E^\\circ_{\\mathrm{Zn^{2+}/Zn}} < E^\\circ_{\\mathrm{Ag^+/Ag}}$ nên Zn là anode (cực âm), Ag là cathode (cực dương).',
        'Anode: $\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$. Cathode: $\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$.',
        'Cân bằng số electron: $\\mathrm{Zn} + 2\\mathrm{Ag^+} \\longrightarrow \\mathrm{Zn^{2+}} + 2\\mathrm{Ag}$.',
        '$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0{,}799 - (-0{,}762) = 1{,}561$ V.',
      ],
      answer: 'Anode Zn, cathode Ag; $E^\\circ_{\\text{pin}} = 1{,}561$ V.',
    },
    {
      problem:
        'Dựa vào thế điện cực chuẩn, cho biết ở điều kiện chuẩn: a) Fe có khử được ion $\\mathrm{Cu^{2+}}$ không? b) Cu có khử được ion $\\mathrm{Fe^{2+}}$ không?',
      steps: [
        '$E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V $< E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340$ V.',
        'Theo quy tắc α, chất khử của cặp có $E^\\circ$ nhỏ hơn (Fe) khử được chất oxi hoá của cặp có $E^\\circ$ lớn hơn ($\\mathrm{Cu^{2+}}$): $\\mathrm{Fe} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{Cu}$.',
        'Ngược lại, Cu là chất khử yếu hơn Fe và $\\mathrm{Fe^{2+}}$ là chất oxi hoá yếu hơn $\\mathrm{Cu^{2+}}$, nên phản ứng giữa Cu và $\\mathrm{Fe^{2+}}$ không xảy ra.',
      ],
      answer: 'a) Có. b) Không.',
    },
    {
      problem:
        'Sức điện động chuẩn của pin điện hoá gồm hai điện cực $\\mathrm{M^{2+}/M}$ và $\\mathrm{Ag^+/Ag}$ bằng $1{,}056$ V, trong đó M là anode. Tính $E^\\circ_{\\mathrm{M^{2+}/M}}$ và cho biết M là kim loại nào.',
      steps: [
        'M là anode nên $E^\\circ_{\\text{pin}} = E^\\circ_{\\mathrm{Ag^+/Ag}} - E^\\circ_{\\mathrm{M^{2+}/M}}$.',
        '$E^\\circ_{\\mathrm{M^{2+}/M}} = 0{,}799 - 1{,}056 = -0{,}257$ V.',
        'Đối chiếu bảng thế điện cực chuẩn: $E^\\circ_{\\mathrm{Ni^{2+}/Ni}} = -0{,}257$ V.',
      ],
      answer: '$E^\\circ_{\\mathrm{M^{2+}/M}} = -0{,}257$ V, M là nickel (Ni).',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Tính sức điện động chuẩn (V) của pin Galvani tạo bởi hai cặp $\\mathrm{Mg^{2+}/Mg}$ ($E^\\circ = -2{,}356$ V) và $\\mathrm{Cu^{2+}/Cu}$ ($E^\\circ = +0{,}340$ V).',
      answer: 2.696,
      tolerance: 0.0005,
      unit: 'V',
      hints: [
        'Cặp có $E^\\circ$ nhỏ hơn là anode.',
        '$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$.',
      ],
      solution:
        'Mg là anode, Cu là cathode: $E^\\circ_{\\text{pin}} = 0{,}340 - (-2{,}356) = 2{,}696$ V.',
    },
    {
      type: 'number',
      prompt:
        'Pin điện hoá tạo bởi hai cặp $\\mathrm{Pb^{2+}/Pb}$ ($E^\\circ = -0{,}126$ V) và $\\mathrm{Zn^{2+}/Zn}$ ($E^\\circ = -0{,}762$ V). Tính sức điện động chuẩn của pin (V).',
      answer: 0.636,
      tolerance: 0.0005,
      unit: 'V',
      hints: [
        'Cả hai thế điện cực đều âm; cặp có $E^\\circ$ âm hơn là anode.',
        'Cathode là Pb, anode là Zn.',
      ],
      solution: '$E^\\circ_{\\text{pin}} = -0{,}126 - (-0{,}762) = 0{,}636$ V.',
    },
    {
      type: 'number',
      prompt:
        'Pin Galvani gồm điện cực $\\mathrm{X^{2+}/X}$ và điện cực $\\mathrm{Cu^{2+}/Cu}$ ($E^\\circ = +0{,}340$ V) có sức điện động chuẩn $1{,}102$ V; X là anode. Tính $E^\\circ_{\\mathrm{X^{2+}/X}}$ (V).',
      answer: -0.762,
      tolerance: 0.0005,
      unit: 'V',
      hints: [
        'X là anode: $E^\\circ_{\\text{pin}} = E^\\circ_{\\mathrm{Cu^{2+}/Cu}} - E^\\circ_{\\mathrm{X^{2+}/X}}$.',
      ],
      solution: '$E^\\circ_{\\mathrm{X^{2+}/X}} = 0{,}340 - 1{,}102 = -0{,}762$ V; X là zinc (Zn).',
    },
    {
      type: 'choice',
      prompt: 'Trong pin Galvani Zn – Cu đang hoạt động, electron di chuyển như thế nào?',
      options: [
        'Từ thanh Zn sang thanh Cu qua dây dẫn',
        'Từ thanh Cu sang thanh Zn qua dây dẫn',
        'Từ dung dịch $\\mathrm{ZnSO_4}$ sang dung dịch $\\mathrm{CuSO_4}$ qua cầu muối',
        'Từ dung dịch $\\mathrm{CuSO_4}$ sang thanh Cu qua cầu muối',
      ],
      answer: 0,
      hints: [
        'Zn là anode, nơi electron được giải phóng.',
        'Electron chỉ đi trong dây dẫn ở mạch ngoài; trong cầu muối là các ion di chuyển.',
      ],
      solution:
        'Zn bị oxi hoá ($\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$), electron đi qua dây dẫn từ thanh Zn sang thanh Cu, nơi $\\mathrm{Cu^{2+}}$ nhận electron. Cầu muối chỉ cho ion đi qua.',
    },
    {
      type: 'multi',
      prompt: 'Ở điều kiện chuẩn, những phản ứng nào sau đây xảy ra được?',
      options: [
        '$\\mathrm{Fe} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{Cu}$',
        '$\\mathrm{Cu} + 2\\mathrm{Ag^+} \\longrightarrow \\mathrm{Cu^{2+}} + 2\\mathrm{Ag}$',
        '$\\mathrm{Zn} + 2\\mathrm{H^+} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{H_2}$',
        '$\\mathrm{Cu} + 2\\mathrm{H^+} \\longrightarrow \\mathrm{Cu^{2+}} + \\mathrm{H_2}$',
        '$\\mathrm{Cu} + \\mathrm{Fe^{2+}} \\longrightarrow \\mathrm{Cu^{2+}} + \\mathrm{Fe}$',
      ],
      answers: [0, 1, 2],
      hints: [
        'Áp dụng quy tắc α: kim loại phải thuộc cặp có $E^\\circ$ nhỏ hơn cặp của ion bị khử.',
        'So sánh: $\\mathrm{Fe^{2+}/Fe}$ $-0{,}440$; $\\mathrm{Zn^{2+}/Zn}$ $-0{,}762$; $\\mathrm{2H^+/H_2}$ $0$; $\\mathrm{Cu^{2+}/Cu}$ $+0{,}340$; $\\mathrm{Ag^+/Ag}$ $+0{,}799$.',
      ],
      solution:
        'Fe ($-0{,}440$) khử được $\\mathrm{Cu^{2+}}$ ($+0{,}340$); Cu ($+0{,}340$) khử được $\\mathrm{Ag^+}$ ($+0{,}799$); Zn ($-0{,}762$) khử được $\\mathrm{H^+}$ ($0$). Cu có $E^\\circ$ lớn hơn cặp $\\mathrm{2H^+/H_2}$ và cặp $\\mathrm{Fe^{2+}/Fe}$ nên không khử được $\\mathrm{H^+}$ hay $\\mathrm{Fe^{2+}}$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các ion theo chiều tính oxi hoá tăng dần.',
      items: [
        '$\\mathrm{Ag^+}$',
        '$\\mathrm{Mg^{2+}}$',
        '$\\mathrm{Cu^{2+}}$',
        '$\\mathrm{Fe^{2+}}$',
      ],
      answer: [1, 3, 2, 0],
      hints: [
        'Thế điện cực chuẩn của cặp càng lớn thì dạng oxi hoá càng mạnh.',
        'Tra $E^\\circ$: $\\mathrm{Mg^{2+}/Mg}$ $-2{,}356$; $\\mathrm{Fe^{2+}/Fe}$ $-0{,}440$; $\\mathrm{Cu^{2+}/Cu}$ $+0{,}340$; $\\mathrm{Ag^+/Ag}$ $+0{,}799$.',
      ],
      solution:
        'Xếp theo $E^\\circ$ tăng dần: $\\mathrm{Mg^{2+}} < \\mathrm{Fe^{2+}} < \\mathrm{Cu^{2+}} < \\mathrm{Ag^+}$.',
    },
    {
      type: 'choice',
      prompt:
        'Cho các cặp $\\mathrm{Al^{3+}/Al}$, $\\mathrm{Ag^+/Ag}$, $\\mathrm{Mg^{2+}/Mg}$, $\\mathrm{Fe^{2+}/Fe}$ với $E^\\circ$ lần lượt là $-1{,}676$; $+0{,}799$; $-2{,}356$; $-0{,}440$ V. Kim loại có tính khử mạnh nhất là',
      options: ['Mg', 'Al', 'Fe', 'Ag'],
      answer: 0,
      hints: ['Tính khử của kim loại càng mạnh khi $E^\\circ$ của cặp càng nhỏ.'],
      solution:
        '$E^\\circ_{\\mathrm{Mg^{2+}/Mg}} = -2{,}356$ V là nhỏ nhất nên Mg có tính khử mạnh nhất.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò của cầu muối trong pin Galvani là',
      options: [
        'cho ion di chuyển giữa hai dung dịch, giữ cho mỗi dung dịch trung hoà điện và làm mạch điện kín',
        'dẫn electron từ anode sang cathode',
        'cung cấp ion kim loại để bám lên cathode',
        'ngăn không cho electron đi qua dây dẫn',
      ],
      answer: 0,
      hints: ['Electron đi qua dây dẫn, còn trong dung dịch thì ion mang điện.'],
      solution:
        'Cầu muối chứa dung dịch muối điện li; ion của nó di chuyển sang hai dung dịch để trung hoà điện tích dư, giúp mạch kín và pin hoạt động liên tục.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi nguồn điện với đặc điểm phù hợp.',
      left: ['Acquy chì', 'Pin nhiên liệu hydrogen', 'Pin lithium-ion', 'Pin Mặt Trời'],
      right: [
        'Điện cực Pb và $\\mathrm{PbO_2}$ trong dung dịch $\\mathrm{H_2SO_4}$, sạc lại được',
        'Nhiên liệu được cung cấp liên tục, sản phẩm là nước',
        'Nhẹ, mật độ năng lượng cao, dùng trong điện thoại và xe điện',
        'Chuyển quang năng thành điện năng nhờ các tấm bán dẫn',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nguồn nào không cần phản ứng hoá học mà dùng ánh sáng?'],
      solution:
        'Acquy chì dùng Pb, $\\mathrm{PbO_2}$ và $\\mathrm{H_2SO_4}$; pin nhiên liệu hydrogen tạo ra nước; pin lithium-ion nhẹ, mật độ năng lượng cao; pin Mặt Trời chuyển quang năng thành điện năng.',
    },
  ],
  takeaways: [
    'Cặp oxi hoá – khử $\\mathrm{M^{n+}/M}$: dạng oxi hoá viết trước, dạng khử viết sau.',
    'Thế điện cực chuẩn đo ở 1 M, 25 °C so với điện cực hydrogen chuẩn ($E^\\circ = 0$).',
    '$E^\\circ$ càng nhỏ, kim loại càng khử mạnh; $E^\\circ$ càng lớn, ion càng oxi hoá mạnh.',
    'Quy tắc α: chất khử của cặp có $E^\\circ$ nhỏ phản ứng với chất oxi hoá của cặp có $E^\\circ$ lớn.',
    'Pin Galvani: anode (−) bị oxi hoá, cathode (+) xảy ra sự khử; $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$.',
  ],
};
