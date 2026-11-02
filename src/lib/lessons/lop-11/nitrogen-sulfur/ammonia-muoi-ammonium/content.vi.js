/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và tính chất của ammonia, quá trình Haber tổng hợp ammonia, tính chất và cách nhận biết muối ammonium.',
  intro:
    'Mỗi năm thế giới sản xuất hàng trăm triệu tấn ammonia, phần lớn để làm phân đạm nuôi cây lương thực. Muốn vậy phải buộc khí nitrogen vốn rất trơ phản ứng với hydrogen. Vì sao nhà máy không chọn nhiệt độ thấp nhất hay áp suất cao nhất, mà lại dừng ở $400$ – $450\\,^\\circ\\mathrm{C}$ và $150$ – $200$ bar?',
  objectives: [
    'Mô tả được cấu tạo phân tử ammonia và giải thích tính tan, tính base, tính khử của ammonia.',
    'Vận dụng cân bằng hoá học, tốc độ phản ứng và enthalpy để giải thích điều kiện của quá trình Haber.',
    'Nêu được tính chất của muối ammonium, phản ứng nhiệt phân và cách nhận biết ion $\\mathrm{NH_4^+}$.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và tính chất vật lí của ammonia',
      blocks: [
        {
          type: 'p',
          text: 'Phân tử $\\mathrm{NH_3}$ có dạng chóp tam giác: nguyên tử N ở đỉnh, liên kết với ba nguyên tử H bằng ba liên kết cộng hoá trị phân cực, và còn một cặp electron chưa liên kết. Phân tử $\\mathrm{NH_3}$ phân cực mạnh.',
        },
        {
          type: 'p',
          text: 'Ammonia là khí không màu, mùi khai và xốc, nhẹ hơn không khí ($M = 17$), hoá lỏng ở khoảng $-33\\,^\\circ\\mathrm{C}$. Khí này tan rất nhiều trong nước, nhờ phân tử phân cực và tạo được liên kết hydrogen với nước.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của ammonia',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính base',
          text: 'Cặp electron chưa liên kết trên N nhận được proton, nên $\\mathrm{NH_3}$ là base yếu: $$\\mathrm{NH_3} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{OH^-}$$ Dung dịch ammonia làm quỳ tím hoá xanh, phenolphthalein hoá hồng. Với acid: $\\mathrm{NH_3} + \\mathrm{HCl} \\rightarrow \\mathrm{NH_4Cl}$, ở thể khí tạo "khói trắng".',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính khử',
          text: 'N trong $\\mathrm{NH_3}$ có số oxi hoá $-3$, thấp nhất, nên ammonia có tính khử: $$\\mathrm{4NH_3} + \\mathrm{3O_2} \\xrightarrow{t^\\circ} \\mathrm{2N_2} + \\mathrm{6H_2O}$$ $$\\mathrm{4NH_3} + \\mathrm{5O_2} \\xrightarrow{\\mathrm{Pt},\\,t^\\circ} \\mathrm{4NO} + \\mathrm{6H_2O}$$ Phản ứng thứ hai là bước đầu của sản xuất nitric acid.',
        },
      ],
    },
    {
      heading: 'Quá trình Haber',
      blocks: [
        {
          type: 'tex',
          tex: '\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\xrightleftharpoons[\\mathrm{Fe}]{t^\\circ,\\,p} \\mathrm{2NH_3(g)} \\qquad \\Delta_r H^\\circ_{298} = -91{,}8 \\text{ kJ}',
        },
        {
          type: 'table',
          caption: 'Vì sao chọn điều kiện đó',
          head: ['Yếu tố', 'Theo cân bằng', 'Thực tế'],
          rows: [
            [
              'Nhiệt độ',
              'Phản ứng toả nhiệt: nhiệt độ thấp có lợi',
              'Thấp quá thì quá chậm. Chọn $400$ – $450\\,^\\circ\\mathrm{C}$',
            ],
            [
              'Áp suất',
              'Giảm số mol khí ($4 \\to 2$): áp suất cao có lợi',
              'Cao quá thì tốn năng lượng nén và thiết bị đắt. Chọn $150$ – $200$ bar',
            ],
            ['Xúc tác', 'Không làm chuyển dịch cân bằng', 'Bột sắt giúp đạt cân bằng nhanh hơn'],
          ],
        },
        {
          type: 'p',
          text: 'Hỗn hợp ra khỏi bình được làm lạnh để hoá lỏng và tách $\\mathrm{NH_3}$, còn $\\mathrm{N_2}$ và $\\mathrm{H_2}$ dư được đưa trở lại bình phản ứng.',
        },
        {
          type: 'p',
          text: 'Khoảng $80\\%$ ammonia dùng để sản xuất phân đạm như muối ammonium và urea $\\mathrm{(NH_2)_2CO}$. Ammonia còn là nguyên liệu của nitric acid và thuốc nổ ammonium nitrate; ammonia lỏng dùng làm chất làm lạnh trong công nghiệp.',
        },
      ],
    },
    {
      heading: 'Muối ammonium',
      blocks: [
        {
          type: 'p',
          text: 'Muối ammonium là tinh thể ion, gồm cation $\\mathrm{NH_4^+}$ và anion gốc acid. Hầu hết tan tốt trong nước và phân li hoàn toàn: $\\mathrm{NH_4Cl} \\rightarrow \\mathrm{NH_4^+} + \\mathrm{Cl^-}$. Ion $\\mathrm{NH_4^+}$ cho proton, nên dung dịch muối ammonium của acid mạnh có môi trường acid.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhận biết ion ammonium',
          text: 'Cho dung dịch kiềm vào rồi đun nhẹ, thấy khí mùi khai làm quỳ tím ẩm hoá xanh: $$\\mathrm{NH_4^+} + \\mathrm{OH^-} \\xrightarrow{t^\\circ} \\mathrm{NH_3} \\uparrow + \\mathrm{H_2O}$$',
        },
        { type: 'widget', name: 'nhan-biet' },
        {
          type: 'p',
          text: 'Muối ammonium kém bền nhiệt. Tuỳ gốc acid, sản phẩm nhiệt phân khác nhau:',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{NH_4Cl} &\\xrightarrow{t^\\circ} \\mathrm{NH_3} + \\mathrm{HCl} \\\\ \\mathrm{NH_4HCO_3} &\\xrightarrow{t^\\circ} \\mathrm{NH_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\\\ \\mathrm{NH_4NO_3} &\\xrightarrow{t^\\circ} \\mathrm{N_2O} + \\mathrm{2H_2O} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bảo quản phân đạm',
          text: 'Phản ứng phân huỷ sinh khí làm tăng áp suất và có nguy cơ nổ, nên phân đạm ammonium phải để xa nguồn nhiệt. Cũng không bón cùng vôi hay tro bếp có môi trường kiềm, vì sẽ thất thoát đạm dưới dạng khí $\\mathrm{NH_3}$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Vận hành bình tổng hợp ammonia',
    instruction:
      'Đổi nhiệt độ, áp suất và xúc tác. Nét đứt là phần trăm $\\mathrm{NH_3}$ lúc cân bằng, nét liền là lượng thật sự thu được sau một lượt khí đi qua bình. Hãy tìm vùng cho nhiều $\\mathrm{NH_3}$ mà không phải nén quá cao. Số liệu tính theo mô hình khí lí tưởng nên chỉ gần đúng.',
  },
  examples: [
    {
      problem:
        'Cho $13{,}2$ g $\\mathrm{(NH_4)_2SO_4}$ tác dụng hết với dung dịch NaOH dư, đun nóng. Tính thể tích khí $\\mathrm{NH_3}$ thu được ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar).',
      steps: [
        '$M_{\\mathrm{(NH_4)_2SO_4}} = 132$ g/mol nên $n = \\dfrac{13{,}2}{132} = 0{,}1$ mol.',
        'Phương trình: $\\mathrm{(NH_4)_2SO_4} + \\mathrm{2NaOH} \\rightarrow \\mathrm{Na_2SO_4} + \\mathrm{2NH_3} + \\mathrm{2H_2O}$, nên $n_{\\mathrm{NH_3}} = 0{,}2$ mol.',
        '$V = 0{,}2 \\cdot 24{,}79 = 4{,}958$ L.',
      ],
      answer: '$4{,}958$ L $\\mathrm{NH_3}$.',
    },
    {
      problem:
        'Cho $1$ mol $\\mathrm{N_2}$ và $3$ mol $\\mathrm{H_2}$ vào bình kín. Khi cân bằng thu được $0{,}8$ mol $\\mathrm{NH_3}$. Tính hiệu suất phản ứng và phần trăm số mol $\\mathrm{NH_3}$ trong hỗn hợp.',
      steps: [
        'Nếu phản ứng hoàn toàn thì tạo $2$ mol $\\mathrm{NH_3}$, nên hiệu suất là $\\dfrac{0{,}8}{2} \\cdot 100\\% = 40\\%$.',
        'Số mol đã phản ứng: $\\mathrm{N_2}$ là $0{,}4$ mol, $\\mathrm{H_2}$ là $1{,}2$ mol. Còn lại $0{,}6$ mol $\\mathrm{N_2}$ và $1{,}8$ mol $\\mathrm{H_2}$.',
        'Tổng số mol khí: $0{,}6 + 1{,}8 + 0{,}8 = 3{,}2$ mol. Phần trăm: $\\dfrac{0{,}8}{3{,}2} \\cdot 100\\% = 25\\%$.',
      ],
      answer: 'Hiệu suất $40\\%$; $\\mathrm{NH_3}$ chiếm $25\\%$ số mol.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về ammonia.',
      options: [
        'Phân tử có dạng chóp tam giác',
        'Có tính base yếu',
        'Có tính khử',
        'Có tính oxi hoá mạnh vì N có số oxi hoá $-3$',
        'Tan rất ít trong nước',
      ],
      answers: [0, 1, 2],
      hints: ['Số oxi hoá $-3$ là mức thấp nhất của N, nên N chỉ có thể nhường thêm electron.'],
      solution:
        'N có số oxi hoá thấp nhất nên ammonia có tính khử, không có tính oxi hoá mạnh. Nhờ liên kết hydrogen với nước, ammonia tan rất nhiều.',
    },
    {
      type: 'choice',
      prompt: 'Điều kiện công nghiệp thường dùng của quá trình Haber là',
      options: [
        '$400$ – $450\\,^\\circ\\mathrm{C}$, $150$ – $200$ bar, xúc tác Fe',
        '$25\\,^\\circ\\mathrm{C}$, $1$ bar, xúc tác Fe',
        '$1000\\,^\\circ\\mathrm{C}$, $200$ bar, xúc tác Pt',
        '$400$ – $450\\,^\\circ\\mathrm{C}$, $1$ bar, xúc tác $\\mathrm{V_2O_5}$',
      ],
      answer: 0,
      hints: ['Cần nhiệt độ vừa phải và áp suất cao, xúc tác là bột sắt.'],
      solution:
        'Sách nêu $400$ – $450\\,^\\circ\\mathrm{C}$, $150$ – $200$ bar với xúc tác Fe. Đó là điểm dung hoà giữa hiệu suất, tốc độ và chi phí.',
    },
    {
      type: 'match',
      prompt:
        'Với cân bằng tổng hợp ammonia ($\\Delta_r H^\\circ_{298} < 0$), ghép mỗi tác động với kết quả đúng.',
      left: ['Tăng nhiệt độ', 'Tăng áp suất', 'Thêm xúc tác Fe', 'Tách bớt $\\mathrm{NH_3}$'],
      right: [
        'Cân bằng chuyển dịch theo chiều nghịch',
        'Cân bằng chuyển dịch theo chiều thuận, vì giảm số mol khí',
        'Cân bằng không chuyển dịch, đạt nhanh hơn',
        'Cân bằng chuyển dịch theo chiều thuận, vì tạo thêm sản phẩm bị mất',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Áp dụng nguyên lí Le Chatelier: cân bằng chống lại tác động bên ngoài.'],
      solution:
        'Chiều nghịch thu nhiệt nên được ưu tiên khi đun nóng. Chiều thuận giảm số mol khí nên được ưu tiên khi nén. Xúc tác không làm chuyển dịch cân bằng. Tách $\\mathrm{NH_3}$ làm cân bằng bù lại theo chiều thuận.',
    },
    {
      type: 'number',
      prompt:
        'Trong một bình, $2$ mol $\\mathrm{N_2}$ và $6$ mol $\\mathrm{H_2}$ tạo được $1$ mol $\\mathrm{NH_3}$. Tính hiệu suất phản ứng theo phần trăm.',
      answer: 25,
      unit: '%',
      hints: ['Lượng $\\mathrm{NH_3}$ tối đa bằng hai lần số mol $\\mathrm{N_2}$.'],
      solution:
        'Tối đa tạo $4$ mol $\\mathrm{NH_3}$, nên $H = \\dfrac{1}{4} \\cdot 100\\% = 25\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng nitrogen trong phân đạm ammonium nitrate $\\mathrm{NH_4NO_3}$.',
      answer: 35,
      tolerance: 0.01,
      unit: '%',
      hints: ['Mỗi đơn vị công thức có $2$ nguyên tử N; $M = 80$.'],
      solution: '$\\%m_{\\mathrm{N}} = \\dfrac{2 \\cdot 14}{80} \\cdot 100\\% = 35\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cho $2{,}64$ g $\\mathrm{(NH_4)_2SO_4}$ tác dụng hết với NaOH dư, đun nóng. Thể tích $\\mathrm{NH_3}$ thu được ở điều kiện chuẩn là bao nhiêu lít? (Làm tròn hai chữ số thập phân.)',
      answer: 0.99,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$n = \\dfrac{2{,}64}{132} = 0{,}02$ mol; mỗi mol muối tạo $2$ mol $\\mathrm{NH_3}$.',
      ],
      solution:
        '$n_{\\mathrm{NH_3}} = 0{,}04$ mol nên $V = 0{,}04 \\cdot 24{,}79 \\approx 0{,}99$ L.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi muối với sản phẩm khi nhiệt phân.',
      left: ['$\\mathrm{NH_4Cl}$', '$\\mathrm{NH_4HCO_3}$', '$\\mathrm{NH_4NO_3}$'],
      right: [
        '$\\mathrm{NH_3}$ và $\\mathrm{HCl}$',
        '$\\mathrm{NH_3}$, $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$',
        '$\\mathrm{N_2O}$ và $\\mathrm{H_2O}$',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Gốc nitrate có tính oxi hoá, nên oxi hoá được N của ion ammonium.'],
      solution:
        'Muối của acid không có tính oxi hoá tạo $\\mathrm{NH_3}$. Với $\\mathrm{NH_4NO_3}$ xảy ra phản ứng oxi hoá – khử nội phân tử, tạo $\\mathrm{N_2O}$ và $\\mathrm{H_2O}$.',
    },
    {
      type: 'choice',
      prompt:
        'Thuốc thử nào phân biệt được bốn dung dịch KOH, $\\mathrm{NH_4Cl}$, $\\mathrm{K_2SO_4}$, $\\mathrm{(NH_4)_2SO_4}$?',
      options: ['$\\mathrm{Ba(OH)_2}$', 'NaOH', '$\\mathrm{BaCl_2}$', 'Quỳ tím'],
      answer: 0,
      hints: [
        'Cần một chất vừa cho khí với $\\mathrm{NH_4^+}$, vừa cho kết tủa với $\\mathrm{SO_4^{2-}}$.',
      ],
      solution:
        '$\\mathrm{Ba(OH)_2}$: với $\\mathrm{NH_4Cl}$ có khí; với $\\mathrm{K_2SO_4}$ có kết tủa trắng; với $\\mathrm{(NH_4)_2SO_4}$ có cả khí và kết tủa; với KOH không có hiện tượng.',
    },
    {
      type: 'text',
      prompt: 'Khí mùi khai bay lên khi đun muối ammonium với dung dịch kiềm có tên là gì?',
      accept: ['ammonia', 'amoniac', 'NH3'],
      hints: [
        'Phản ứng ion rút gọn: $\\mathrm{NH_4^+} + \\mathrm{OH^-} \\rightarrow \\ldots + \\mathrm{H_2O}$.',
      ],
      solution: 'Đó là khí ammonia, $\\mathrm{NH_3}$, làm quỳ tím ẩm hoá xanh.',
    },
  ],
  takeaways: [
    '$\\mathrm{NH_3}$ dạng chóp tam giác, phân cực, tan nhiều trong nước; là base yếu và có tính khử.',
    'Quá trình Haber: $400$ – $450\\,^\\circ\\mathrm{C}$, $150$ – $200$ bar, xúc tác Fe, là điểm dung hoà giữa hiệu suất, tốc độ và chi phí.',
    'Muối ammonium tan tốt, kém bền nhiệt; sản phẩm nhiệt phân phụ thuộc gốc acid.',
    'Nhận biết $\\mathrm{NH_4^+}$: đun với kiềm, có khí mùi khai làm quỳ tím ẩm hoá xanh.',
  ],
};
