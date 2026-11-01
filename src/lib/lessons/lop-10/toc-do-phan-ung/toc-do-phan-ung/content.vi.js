/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    "Tốc độ phản ứng: cách tính tốc độ trung bình, định luật tác dụng khối lượng, ảnh hưởng của nồng độ, áp suất, nhiệt độ, diện tích bề mặt, chất xúc tác và hệ số nhiệt độ Van't Hoff.",
  intro:
    'Cồn cháy trong vài giây, còn đinh sắt phải mất nhiều tháng mới gỉ. Làm sao đo được một phản ứng nhanh hay chậm bao nhiêu, và làm thế nào để điều khiển nó nhanh hơn hoặc chậm đi? Bài này trả lời hai câu hỏi đó bằng các phép tính cụ thể và bằng mô hình va chạm giữa các hạt.',
  objectives: [
    'Nêu được khái niệm tốc độ phản ứng và tính được tốc độ trung bình theo biến thiên nồng độ.',
    'Phát biểu được định luật tác dụng khối lượng và viết được biểu thức tốc độ của phản ứng đơn giản.',
    'Giải thích được ảnh hưởng của nồng độ, áp suất, nhiệt độ, diện tích bề mặt và chất xúc tác dựa trên va chạm hiệu quả.',
    "Vận dụng được hệ số nhiệt độ Van't Hoff để tính sự thay đổi tốc độ theo nhiệt độ.",
  ],
  sections: [
    {
      heading: 'Khái niệm tốc độ phản ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tốc độ phản ứng',
          text: 'Tốc độ phản ứng là đại lượng đặc trưng cho sự nhanh, chậm của phản ứng hoá học, được xác định bằng sự thay đổi lượng chất đầu hoặc lượng sản phẩm trong một đơn vị thời gian. Kí hiệu là $v$.',
        },
        {
          type: 'p',
          text: 'Lượng chất có thể tính theo số mol, nồng độ mol, khối lượng hoặc thể tích. Đơn vị của tốc độ là (đơn vị nồng độ)(đơn vị thời gian)$^{-1}$, ví dụ mol/(L·s), còn viết là M/s.',
        },
        {
          type: 'p',
          text: 'Đa số phản ứng chạy chậm dần theo thời gian, vì chất đầu ít dần. Vì vậy người ta dùng tốc độ trung bình trong một khoảng thời gian; khi khoảng thời gian rất ngắn thì ta có tốc độ tức thời.',
        },
      ],
    },
    {
      heading: 'Tính tốc độ trung bình của phản ứng',
      blocks: [
        {
          type: 'p',
          text: 'Với phản ứng tổng quát $a\\mathrm{A} + b\\mathrm{B} \\rightarrow m\\mathrm{M} + n\\mathrm{N}$:',
        },
        {
          type: 'tex',
          tex: '\\overline{v} = -\\dfrac{1}{a}\\dfrac{\\Delta C_{\\mathrm{A}}}{\\Delta t} = -\\dfrac{1}{b}\\dfrac{\\Delta C_{\\mathrm{B}}}{\\Delta t}',
        },
        {
          type: 'tex',
          tex: '= \\dfrac{1}{m}\\dfrac{\\Delta C_{\\mathrm{M}}}{\\Delta t} = \\dfrac{1}{n}\\dfrac{\\Delta C_{\\mathrm{N}}}{\\Delta t}',
        },
        {
          type: 'list',
          items: [
            '$\\Delta C = C_2 - C_1$ là biến thiên nồng độ, $\\Delta t = t_2 - t_1$ là biến thiên thời gian.',
            'Chất đầu giảm nên $\\Delta C < 0$; dấu trừ trước phân số làm tốc độ luôn dương.',
            'Chia cho hệ số của chất để mọi chất cho cùng một giá trị tốc độ.',
          ],
        },
        {
          type: 'p',
          text: 'Sự phân huỷ hydrogen peroxide $\\mathrm{H_2O_2} \\rightarrow \\mathrm{H_2O} + \\frac{1}{2}\\mathrm{O_2}$ được đo theo từng 3 giờ. Kéo hai chốt để chọn khoảng thời gian và so sánh độ dốc của dây cung nối chúng.',
        },
        { type: 'widget', name: 'toc-do-trung-binh' },
      ],
    },
    {
      heading: 'Định luật tác dụng khối lượng',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Định luật tác dụng khối lượng',
          text: 'Ở nhiệt độ không đổi, tốc độ phản ứng tỉ lệ thuận với tích nồng độ các chất phản ứng với số mũ thích hợp.',
        },
        {
          type: 'p',
          text: 'Với phản ứng đơn giản $a\\mathrm{A} + b\\mathrm{B} \\rightarrow$ sản phẩm:',
        },
        { type: 'tex', tex: 'v = k \\cdot C_{\\mathrm{A}}^{a} \\cdot C_{\\mathrm{B}}^{b}' },
        {
          type: 'list',
          items: [
            '$k$ là hằng số tốc độ, chỉ phụ thuộc vào bản chất của chất phản ứng và nhiệt độ, không phụ thuộc nồng độ. Khi $C_{\\mathrm{A}} = C_{\\mathrm{B}} = 1$ M thì $v = k$.',
            'Phản ứng đơn giản là phản ứng xảy ra trong một giai đoạn; số mũ bằng hệ số của chất trong phương trình. Với phản ứng phức tạp, số mũ được xác định bằng thực nghiệm.',
          ],
        },
        {
          type: 'p',
          text: 'Với chất khí, nén hỗn hợp để thể tích giảm bao nhiêu lần thì áp suất và nồng độ của mỗi khí tăng bấy nhiêu lần, nên tốc độ cũng tăng theo biểu thức trên.',
        },
        { type: 'widget', name: 'dinh-luat' },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến tốc độ phản ứng',
      blocks: [
        {
          type: 'p',
          text: 'Các hạt chất phản ứng chuyển động không ngừng và va chạm với nhau. Chỉ những va chạm đủ năng lượng để phá vỡ liên kết cũ, hình thành liên kết mới mới tạo ra sản phẩm; đó là các va chạm hiệu quả. Số va chạm hiệu quả càng nhiều thì tốc độ phản ứng càng lớn. Năng lượng tối thiểu mà các hạt cần có để va chạm gây ra phản ứng được gọi là năng lượng hoạt hoá.',
        },
        {
          type: 'table',
          caption: 'Năm yếu tố làm tăng tốc độ phản ứng và cách giải thích',
          head: ['Yếu tố', 'Khi nào tốc độ tăng', 'Giải thích'],
          rows: [
            [
              'Nồng độ',
              'Tăng nồng độ chất phản ứng',
              'Nhiều hạt hơn trong cùng thể tích, số va chạm hiệu quả tăng',
            ],
            [
              'Áp suất',
              'Tăng áp suất, chỉ với phản ứng có chất khí',
              'Nén khí làm nồng độ khí tăng',
            ],
            [
              'Nhiệt độ',
              'Tăng nhiệt độ',
              'Hạt chuyển động nhanh hơn, có nhiều hạt đủ năng lượng hơn',
            ],
            [
              'Diện tích bề mặt',
              'Chia nhỏ chất rắn, tạo rãnh hoặc lỗ xốp',
              'Phản ứng xảy ra trên bề mặt; bề mặt tiếp xúc lớn hơn thì nhiều va chạm hơn',
            ],
            [
              'Chất xúc tác',
              'Thêm chất xúc tác phù hợp',
              'Phản ứng đi theo các giai đoạn có năng lượng hoạt hoá thấp hơn',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thí nghiệm kiểm chứng',
          text: 'Đá vôi dạng bột tan trong dung dịch $\\mathrm{HCl}$ nhanh hơn dạng viên cùng khối lượng. Dung dịch $\\mathrm{H_2O_2}$ thoát khí nhanh hơn hẳn khi có thêm một ít $\\mathrm{MnO_2}$. Thử các yếu tố nồng độ, nhiệt độ và xúc tác trên mô phỏng va chạm hạt của bài.',
        },
      ],
    },
    {
      heading: "Hệ số nhiệt độ Van't Hoff",
      blocks: [
        {
          type: 'p',
          text: "Với đa số phản ứng, khi nhiệt độ tăng thêm $10\\,^\\circ\\mathrm{C}$ thì tốc độ tăng từ $2$ đến $4$ lần. Giá trị $\\gamma$ cho biết số lần tăng đó được gọi là hệ số nhiệt độ Van't Hoff.",
        },
        { type: 'tex', tex: '\\dfrac{v_2}{v_1} = \\gamma^{\\frac{T_2 - T_1}{10}}' },
        {
          type: 'p',
          text: 'Trong đó $v_1$, $v_2$ là tốc độ phản ứng ở nhiệt độ $T_1$, $T_2$. Giá trị $\\gamma$ càng lớn thì nhiệt độ ảnh hưởng đến tốc độ phản ứng càng mạnh.',
        },
        { type: 'widget', name: 'van-t-hoff' },
      ],
    },
    {
      heading: 'Chất xúc tác và ý nghĩa thực tiễn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất xúc tác',
          text: 'Chất xúc tác là chất làm tăng tốc độ phản ứng nhưng vẫn được bảo toàn về chất và lượng khi kết thúc phản ứng. Chất xúc tác được ghi trên mũi tên của phương trình hoá học, ví dụ $2\\mathrm{H_2O_2} \\xrightarrow{\\mathrm{MnO_2}} 2\\mathrm{H_2O} + \\mathrm{O_2}$.',
        },
        {
          type: 'table',
          caption: 'Điều khiển tốc độ phản ứng trong đời sống và sản xuất',
          head: ['Việc làm', 'Yếu tố', 'Kết quả'],
          rows: [
            [
              'Dùng oxygen nguyên chất để hàn, cắt kim loại',
              'Nồng độ',
              'Ngọn lửa cháy mạnh, nhiệt độ cao hơn',
            ],
            ['Bảo quản thực phẩm trong tủ lạnh', 'Nhiệt độ', 'Thực phẩm hỏng chậm hơn'],
            [
              'Nấu ăn bằng nồi áp suất',
              'Nhiệt độ',
              'Nước sôi ở nhiệt độ cao hơn, thức ăn chín nhanh hơn',
            ],
            [
              'Tạo các lỗ trong viên than tổ ong',
              'Diện tích bề mặt',
              'Than tiếp xúc với không khí nhiều hơn, cháy tốt hơn',
            ],
            [
              'Dùng men để ủ rượu',
              'Chất xúc tác',
              'Enzyme trong men làm phản ứng lên men xảy ra nhanh hơn',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng va chạm hạt',
    instruction:
      'Phản ứng $\\mathrm{A} + \\mathrm{B} \\rightarrow \\mathrm{C}$ xảy ra trong bình kín. Bấm chạy thí nghiệm, quan sát va chạm hiệu quả và đường nồng độ của A. Đổi đúng một yếu tố rồi chạy lại: đường của lần trước còn lại (nét đứt) để em so sánh.',
  },
  examples: [
    {
      problem:
        'Cho phản ứng phân huỷ $2\\mathrm{N_2O_5(g)} \\rightarrow 4\\mathrm{NO_2(g)} + \\mathrm{O_2(g)}$. Ban đầu nồng độ $\\mathrm{N_2O_5}$ là $0{,}0200$ M, sau $100$ s còn $0{,}0169$ M, khi đó nồng độ $\\mathrm{NO_2}$ là $0{,}0062$ M. Tính tốc độ trung bình của phản ứng trong $100$ s theo $\\mathrm{N_2O_5}$ và theo $\\mathrm{NO_2}$.',
      steps: [
        'Theo $\\mathrm{N_2O_5}$ (hệ số $2$, chất đầu): $\\overline{v} = -\\dfrac{1}{2} \\cdot \\dfrac{0{,}0169 - 0{,}0200}{100} = 1{,}55 \\cdot 10^{-5}$ mol/(L·s).',
        'Theo $\\mathrm{NO_2}$ (hệ số $4$, sản phẩm): $\\overline{v} = \\dfrac{1}{4} \\cdot \\dfrac{0{,}0062 - 0}{100} = 1{,}55 \\cdot 10^{-5}$ mol/(L·s).',
        'Hai cách cho cùng một giá trị, đúng với ý nghĩa của công thức.',
      ],
      answer: '$\\overline{v} = 1{,}55 \\cdot 10^{-5}$ mol/(L·s).',
    },
    {
      problem:
        'Phản ứng đơn giản $\\mathrm{X} + \\mathrm{Y} \\rightarrow \\mathrm{XY}$ có $k = 2{,}5 \\cdot 10^{-4}$ L/(mol·s), nồng độ đầu $C_{\\mathrm{X}} = 0{,}02$ M, $C_{\\mathrm{Y}} = 0{,}03$ M. Tính tốc độ lúc đầu và tốc độ khi đã phản ứng hết một nửa lượng X.',
      steps: [
        'Biểu thức tốc độ: $v = k \\cdot C_{\\mathrm{X}} \\cdot C_{\\mathrm{Y}}$.',
        'Lúc đầu: $v = 2{,}5 \\cdot 10^{-4} \\cdot 0{,}02 \\cdot 0{,}03 = 1{,}5 \\cdot 10^{-7}$ mol/(L·s).',
        'Hết một nửa X nghĩa là đã phản ứng $0{,}01$ M X và $0{,}01$ M Y, nên $C_{\\mathrm{X}} = 0{,}01$ M, $C_{\\mathrm{Y}} = 0{,}02$ M.',
        'Khi đó: $v = 2{,}5 \\cdot 10^{-4} \\cdot 0{,}01 \\cdot 0{,}02 = 5 \\cdot 10^{-8}$ mol/(L·s).',
      ],
      answer: 'Lúc đầu $1{,}5 \\cdot 10^{-7}$ mol/(L·s), sau đó $5 \\cdot 10^{-8}$ mol/(L·s).',
    },
    {
      problem:
        "Một phản ứng có tốc độ $0{,}05$ mol/(L·phút) ở $20\\,^\\circ\\mathrm{C}$ và $0{,}15$ mol/(L·phút) ở $30\\,^\\circ\\mathrm{C}$. Tính hệ số nhiệt độ Van't Hoff, rồi dự đoán tốc độ ở $40\\,^\\circ\\mathrm{C}$.",
      steps: [
        'Nhiệt độ tăng đúng $10\\,^\\circ\\mathrm{C}$ nên $\\gamma = \\dfrac{0{,}15}{0{,}05} = 3$.',
        'Từ $30\\,^\\circ\\mathrm{C}$ lên $40\\,^\\circ\\mathrm{C}$, tốc độ lại gấp $3$ lần: $v = 0{,}15 \\cdot 3 = 0{,}45$ mol/(L·phút).',
      ],
      answer: '$\\gamma = 3$; tốc độ ở $40\\,^\\circ\\mathrm{C}$ là $0{,}45$ mol/(L·phút).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tốc độ phản ứng được xác định bằng',
      options: [
        'sự thay đổi lượng chất đầu hoặc sản phẩm trong một đơn vị thời gian',
        'tổng khối lượng các chất sau phản ứng',
        'thời gian đến khi phản ứng kết thúc',
        'nhiệt lượng toả ra trong phản ứng',
      ],
      answer: 0,
      hints: ['Nhớ đơn vị của tốc độ: mol/(L·s).'],
      solution:
        'Theo định nghĩa, tốc độ là sự thay đổi lượng chất đầu hoặc sản phẩm trong một đơn vị thời gian.',
    },
    {
      type: 'number',
      prompt:
        'Nồng độ $\\mathrm{H_2O_2}$ trong phản ứng $\\mathrm{H_2O_2} \\rightarrow \\mathrm{H_2O} + \\frac{1}{2}\\mathrm{O_2}$ giảm từ $0{,}500$ M (sau $6$ giờ) xuống $0{,}354$ M (sau $9$ giờ). Tính tốc độ trung bình trong khoảng này theo mol/(L·h). Làm tròn đến ba chữ số thập phân.',
      answer: 0.049,
      tolerance: 0.001,
      unit: 'mol/(L·h)',
      hints: [
        'Hệ số của $\\mathrm{H_2O_2}$ là $1$.',
        'Tính $\\Delta C$ và $\\Delta t$, nhớ dấu trừ của chất đầu.',
      ],
      solution:
        '$\\overline{v} = -\\dfrac{0{,}354 - 0{,}500}{9 - 6} = \\dfrac{0{,}146}{3} \\approx 0{,}049$ mol/(L·h).',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{H_2} + \\mathrm{Cl_2} \\rightarrow 2\\mathrm{HCl}$. Sau $10$ s, nồng độ $\\mathrm{HCl}$ tăng từ $0$ lên $0{,}040$ M. Tính tốc độ trung bình của phản ứng theo mol/(L·s).',
      answer: 0.002,
      tolerance: 0.00001,
      unit: 'mol/(L·s)',
      hints: [
        '$\\mathrm{HCl}$ là sản phẩm có hệ số $2$.',
        'Chia biến thiên nồng độ cho $2$ và cho thời gian.',
      ],
      solution:
        '$\\overline{v} = \\dfrac{1}{2} \\cdot \\dfrac{0{,}040 - 0}{10} = 0{,}002$ mol/(L·s).',
    },
    {
      type: 'choice',
      prompt:
        'Coi $2\\mathrm{NO} + \\mathrm{O_2} \\rightarrow 2\\mathrm{NO_2}$ là phản ứng đơn giản. Biểu thức tốc độ đúng là',
      options: [
        '$v = k \\cdot C_{\\mathrm{NO}} \\cdot C_{\\mathrm{O_2}}$',
        '$v = k \\cdot C_{\\mathrm{NO}}^2 \\cdot C_{\\mathrm{O_2}}$',
        '$v = k \\cdot C_{\\mathrm{NO_2}}^2$',
        '$v = 2k \\cdot C_{\\mathrm{NO}} + k \\cdot C_{\\mathrm{O_2}}$',
      ],
      answer: 1,
      hints: ['Biểu thức chỉ chứa các chất đầu.', 'Số mũ bằng hệ số trong phương trình.'],
      solution:
        'Phản ứng đơn giản có số mũ bằng hệ số của chất đầu: $v = k \\cdot C_{\\mathrm{NO}}^2 \\cdot C_{\\mathrm{O_2}}$.',
    },
    {
      type: 'number',
      prompt:
        'Với phản ứng ở câu trên, nén hỗn hợp khí để thể tích giảm $2$ lần, nhiệt độ không đổi. Tốc độ phản ứng tăng bao nhiêu lần?',
      answer: 8,
      hints: ['Nồng độ mỗi khí đều tăng $2$ lần.', 'Thay vào biểu thức có $C_{\\mathrm{NO}}^2$.'],
      solution: 'Tốc độ mới gấp $2^2 \\cdot 2 = 8$ lần tốc độ cũ.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng đơn giản $\\mathrm{X} + \\mathrm{Y} \\rightarrow \\mathrm{XY}$ có $k = 0{,}5$ L/(mol·s), nồng độ đầu $C_{\\mathrm{X}} = 0{,}2$ M, $C_{\\mathrm{Y}} = 0{,}3$ M. Tính tốc độ phản ứng khi đã có $0{,}1$ M X tham gia, theo mol/(L·s).',
      answer: 0.01,
      tolerance: 0.00001,
      unit: 'mol/(L·s)',
      hints: ['X và Y phản ứng theo tỉ lệ $1 : 1$; tính nồng độ còn lại của từng chất.'],
      solution:
        'Còn $C_{\\mathrm{X}} = 0{,}1$ M, $C_{\\mathrm{Y}} = 0{,}2$ M, nên $v = 0{,}5 \\cdot 0{,}1 \\cdot 0{,}2 = 0{,}01$ mol/(L·s).',
    },
    {
      type: 'number',
      prompt:
        "Một phản ứng có hệ số nhiệt độ Van't Hoff $\\gamma = 2$. Khi tăng nhiệt độ từ $30\\,^\\circ\\mathrm{C}$ lên $60\\,^\\circ\\mathrm{C}$, tốc độ phản ứng tăng bao nhiêu lần?",
      answer: 8,
      hints: ['Nhiệt độ tăng $30\\,^\\circ\\mathrm{C}$, tức ba lần $10\\,^\\circ\\mathrm{C}$.'],
      solution: '$\\dfrac{v_2}{v_1} = 2^{\\frac{60 - 30}{10}} = 2^3 = 8$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Một phản ứng có $\\gamma = 3$, kết thúc sau $54$ phút ở $20\\,^\\circ\\mathrm{C}$. Coi thời gian phản ứng tỉ lệ nghịch với tốc độ. Ở $40\\,^\\circ\\mathrm{C}$ phản ứng này kết thúc sau bao nhiêu phút?',
      answer: 6,
      unit: 'phút',
      hints: [
        'Tính xem tốc độ gấp bao nhiêu lần khi tăng $20\\,^\\circ\\mathrm{C}$.',
        'Tốc độ gấp mấy lần thì thời gian giảm bấy nhiêu lần.',
      ],
      solution: 'Tốc độ gấp $3^2 = 9$ lần, nên thời gian còn $54 : 9 = 6$ phút.',
    },
    {
      type: 'number',
      prompt:
        'Một khối đá vôi lập phương cạnh $2$ cm được cắt thành $8$ khối lập phương cạnh $1$ cm. Tổng diện tích bề mặt tiếp xúc với acid tăng bao nhiêu lần?',
      answer: 2,
      hints: ['Diện tích toàn phần của hình lập phương cạnh $a$ là $6a^2$.'],
      solution:
        'Khối lớn: $6 \\cdot 2^2 = 24$ cm². Các khối nhỏ: $8 \\cdot 6 \\cdot 1^2 = 48$ cm². Diện tích tăng $48 : 24 = 2$ lần.',
    },
    {
      type: 'multi',
      prompt:
        'Với phản ứng giữa kẽm hạt và dung dịch $\\mathrm{HCl}$, những việc nào làm tốc độ phản ứng tăng?',
      options: [
        'Thay kẽm hạt bằng kẽm bột cùng khối lượng',
        'Dùng dung dịch $\\mathrm{HCl}$ có nồng độ lớn hơn',
        'Đun nóng hỗn hợp',
        'Pha thêm nước vào dung dịch acid',
        'Tăng áp suất trên bề mặt dung dịch bằng nén khí trơ',
      ],
      answers: [0, 1, 2],
      hints: [
        'Xét từng yếu tố: diện tích bề mặt, nồng độ, nhiệt độ.',
        'Áp suất chỉ ảnh hưởng khi chất phản ứng ở thể khí.',
      ],
      solution:
        'Kẽm bột có diện tích bề mặt lớn hơn, acid đặc hơn có nồng độ lớn hơn, đun nóng tăng nhiệt độ. Pha nước làm giảm nồng độ; áp suất không ảnh hưởng vì chất phản ứng không ở thể khí.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi việc làm với yếu tố đã được dùng để thay đổi tốc độ phản ứng.',
      left: [
        'Bảo quản thực phẩm trong tủ lạnh',
        'Dùng oxygen nguyên chất để hàn kim loại',
        'Tạo lỗ trong viên than tổ ong',
        'Thêm $\\mathrm{MnO_2}$ vào dung dịch $\\mathrm{H_2O_2}$',
      ],
      right: ['Nhiệt độ', 'Nồng độ', 'Diện tích bề mặt', 'Chất xúc tác'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hỏi xem việc làm thay đổi điều gì của hệ phản ứng.'],
      solution:
        'Tủ lạnh hạ nhiệt độ; oxygen nguyên chất có nồng độ lớn hơn trong không khí; lỗ than tăng diện tích bề mặt; $\\mathrm{MnO_2}$ là chất xúc tác.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về chất xúc tác?',
      options: [
        'Chất xúc tác bị tiêu hao dần trong phản ứng.',
        'Chất xúc tác làm tăng tốc độ phản ứng và không đổi về chất và lượng khi kết thúc.',
        'Chất xúc tác làm tăng năng lượng hoạt hoá của phản ứng.',
        'Chất xúc tác làm tăng nồng độ của chất phản ứng.',
      ],
      answer: 1,
      hints: ['Chất xúc tác mở ra con đường phản ứng có năng lượng hoạt hoá thấp hơn.'],
      solution:
        'Chất xúc tác làm tăng tốc độ phản ứng, được bảo toàn về chất và lượng khi kết thúc, vì tạo ra các giai đoạn có năng lượng hoạt hoá thấp hơn.',
    },
  ],
  takeaways: [
    'Tốc độ trung bình: $\\overline{v} = -\\dfrac{1}{a}\\dfrac{\\Delta C_{\\mathrm{A}}}{\\Delta t} = \\dfrac{1}{m}\\dfrac{\\Delta C_{\\mathrm{M}}}{\\Delta t}$, luôn dương.',
    'Phản ứng đơn giản: $v = k \\cdot C_{\\mathrm{A}}^{a} \\cdot C_{\\mathrm{B}}^{b}$; $k$ chỉ phụ thuộc bản chất phản ứng và nhiệt độ.',
    'Tăng nồng độ, áp suất (với chất khí), nhiệt độ, diện tích bề mặt hay thêm chất xúc tác đều làm tăng số va chạm hiệu quả.',
    "Hệ số Van't Hoff: $\\dfrac{v_2}{v_1} = \\gamma^{\\frac{T_2 - T_1}{10}}$, thường $\\gamma$ từ $2$ đến $4$.",
  ],
};
