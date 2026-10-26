/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Mol là lượng chất chứa 6,022 × 10²³ nguyên tử hoặc phân tử của chất đó. Khối lượng mol M (g/mol) cho phép đổi giữa khối lượng và số mol: n = m : M; ở điều kiện chuẩn 1 mol khí bất kì chiếm 24,79 L; tỉ khối của khí A so với khí B bằng tỉ số khối lượng mol của chúng.',
  intro:
    'Một giọt nước nhỏ đã chứa hàng nghìn tỉ tỉ phân tử nước, nên không ai đếm từng phân tử. Người ta gom chúng theo “gói” rất lớn gọi là mol, giống như đếm giấy theo ram hay trứng theo chục. Từ số mol, ta tính được khối lượng, số hạt và thể tích của chất khí.',
  objectives: [
    'Nêu được khái niệm về mol (nguyên tử, phân tử) và số Avogadro.',
    'Tính được khối lượng mol (M); chuyển đổi được giữa số mol (n) và khối lượng (m).',
    'Nêu được khái niệm thể tích mol của chất khí ở áp suất 1 bar và 25 °C.',
    'Sử dụng được công thức $d_{A/B} = \\dfrac{M_A}{M_B}$ để so sánh chất khí này nặng hay nhẹ hơn chất khí khác.',
    'Sử dụng được công thức $d_{A/kk} = \\dfrac{M_A}{29}$ để so sánh chất khí với không khí.',
  ],
  sections: [
    {
      heading: 'Mol',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mol',
          text: 'Mol là lượng chất có chứa $N_A$ ($6{,}022 \\times 10^{23}$) nguyên tử hoặc phân tử của chất đó. Con số $6{,}022 \\times 10^{23}$ được gọi là số Avogadro, kí hiệu là $N_A$.',
        },
        {
          type: 'list',
          items: [
            '$1$ mol nguyên tử iron (Fe) là lượng chất chứa $6{,}022 \\times 10^{23}$ nguyên tử Fe.',
            '$1$ mol phân tử nước ($\\mathrm{H_2O}$) là lượng chất chứa $6{,}022 \\times 10^{23}$ phân tử $\\mathrm{H_2O}$.',
          ],
        },
        {
          type: 'p',
          text: 'Gọi $n$ là số mol và $N$ là số nguyên tử hoặc phân tử của chất. Ta có:',
        },
        { type: 'tex', tex: 'N = n \\times N_A \\qquad n = \\dfrac{N}{N_A}' },
      ],
    },
    {
      heading: 'Khối lượng mol',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khối lượng mol',
          text: 'Khối lượng mol (kí hiệu $M$) của một chất là khối lượng tính bằng gam của $N_A$ nguyên tử hoặc phân tử chất đó. Đơn vị của khối lượng mol là g/mol.',
        },
        {
          type: 'p',
          text: 'Khối lượng mol nguyên tử hay phân tử của một chất có cùng trị số với khối lượng nguyên tử hay khối lượng phân tử của chất đó (tính theo amu). Ví dụ: khối lượng phân tử $\\mathrm{H_2O}$ là $18$ amu, nên $M_{\\mathrm{H_2O}} = 18$ g/mol.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chuyển đổi giữa số mol và khối lượng',
          text: 'Với $m$ là khối lượng chất (g), $M$ là khối lượng mol (g/mol), $n$ là số mol:',
        },
        { type: 'tex', tex: 'n = \\dfrac{m}{M} \\qquad m = n \\times M \\qquad M = \\dfrac{m}{n}' },
        {
          type: 'table',
          caption: 'Khối lượng mol của một số chất',
          head: ['Chất', 'Khối lượng phân tử (amu)', '$M$ (g/mol)'],
          rows: [
            ['$\\mathrm{O_2}$', '$32$', '$32$'],
            ['$\\mathrm{CO_2}$', '$44$', '$44$'],
            ['$\\mathrm{NaCl}$', '$58{,}5$', '$58{,}5$'],
            ['$\\mathrm{CaCO_3}$', '$100$', '$100$'],
          ],
        },
      ],
    },
    {
      heading: 'Thể tích mol của chất khí',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thể tích mol của chất khí',
          text: 'Thể tích mol của chất khí là thể tích chiếm bởi $N_A$ phân tử của chất khí đó. Ở cùng điều kiện nhiệt độ và áp suất, $1$ mol của các chất khí đều chiếm những thể tích bằng nhau.',
        },
        {
          type: 'p',
          text: 'Ở điều kiện chuẩn (nhiệt độ $25\\,^\\circ\\mathrm{C}$, áp suất $1$ bar), $1$ mol khí bất kì chiếm thể tích $24{,}79$ L. Gọi $V$ là thể tích khí (L) ở điều kiện chuẩn:',
        },
        { type: 'tex', tex: 'V = 24{,}79 \\times n \\qquad n = \\dfrac{V}{24{,}79}' },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Công thức $V = 24{,}79 \\times n$ chỉ dùng cho chất khí ở điều kiện chuẩn, không dùng cho chất rắn hay chất lỏng (ví dụ nước lỏng, muối ăn).',
        },
      ],
    },
    {
      heading: 'Tỉ khối của chất khí',
      blocks: [
        {
          type: 'p',
          text: 'Để biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần, ta so sánh khối lượng mol của chúng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tỉ khối của khí A đối với khí B',
          text: '$d_{A/B} = \\dfrac{M_A}{M_B}$. Nếu $d_{A/B} > 1$, khí A nặng hơn khí B; nếu $d_{A/B} < 1$, khí A nhẹ hơn khí B; nếu $d_{A/B} = 1$, hai khí nặng bằng nhau.',
        },
        {
          type: 'p',
          text: 'Không khí là hỗn hợp, chủ yếu gồm khoảng $78\\%$ nitrogen và $21\\%$ oxygen về thể tích; khối lượng mol trung bình của không khí được lấy là $29$ g/mol. Do đó:',
        },
        { type: 'tex', tex: 'd_{A/kk} = \\dfrac{M_A}{29}' },
        {
          type: 'p',
          text: 'Ví dụ: $d_{\\mathrm{CO_2}/kk} = \\dfrac{44}{29} \\approx 1{,}52$ nên khí carbon dioxide nặng hơn không khí và hay tích tụ ở đáy giếng, hang sâu; khí hydrogen ($M = 2$) nhẹ hơn không khí nhiều nên bóng bơm hydrogen bay lên.',
        },
        { type: 'widget', name: 'ti-khoi' },
      ],
    },
  ],
  explore: {
    title: 'Bộ đổi n – m – số hạt – V',
    instruction:
      'Chọn một chất, chọn đại lượng em đã biết rồi nhập giá trị (dùng dấu phẩy thập phân). Công cụ tính các đại lượng còn lại theo từng bước, vẽ đống hạt (mỗi chấm là $0{,}1$ mol) và quả bóng khí có thể tích tương ứng ở $25\\,^\\circ\\mathrm{C}$, $1$ bar. Thử chọn hai chất khí khác nhau với cùng số mol: bóng có đổi kích thước không?',
  },
  examples: [
    {
      problem: 'Tính số nguyên tử iron có trong $0{,}25$ mol Fe.',
      steps: [
        'Áp dụng $N = n \\times N_A$.',
        '$N = 0{,}25 \\times 6{,}022 \\times 10^{23} = 1{,}5055 \\times 10^{23}$.',
      ],
      answer: '$0{,}25$ mol Fe chứa $1{,}5055 \\times 10^{23}$ nguyên tử Fe.',
    },
    {
      problem:
        'Tính khối lượng của $0{,}15$ mol $\\mathrm{CO_2}$ và số mol có trong $8$ g NaOH (Na = 23, O = 16, H = 1, C = 12).',
      steps: [
        '$M_{\\mathrm{CO_2}} = 12 + 2 \\times 16 = 44$ g/mol, nên $m = n \\times M = 0{,}15 \\times 44 = 6{,}6$ g.',
        '$M_{\\mathrm{NaOH}} = 23 + 16 + 1 = 40$ g/mol, nên $n = \\dfrac{m}{M} = \\dfrac{8}{40} = 0{,}2$ mol.',
      ],
      answer: '$6{,}6$ g $\\mathrm{CO_2}$; $0{,}2$ mol NaOH.',
    },
    {
      problem:
        'Ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar), tính thể tích của $0{,}5$ mol khí $\\mathrm{O_2}$ và số mol có trong $7{,}437$ L khí $\\mathrm{N_2}$.',
      steps: [
        '$V_{\\mathrm{O_2}} = 24{,}79 \\times 0{,}5 = 12{,}395$ L.',
        '$n_{\\mathrm{N_2}} = \\dfrac{7{,}437}{24{,}79} = 0{,}3$ mol.',
      ],
      answer: '$12{,}395$ L khí $\\mathrm{O_2}$; $0{,}3$ mol khí $\\mathrm{N_2}$.',
    },
    {
      problem:
        'Khí X có tỉ khối đối với không khí là $1{,}103$. Tính khối lượng mol của X. Khí X nặng hay nhẹ hơn khí hydrogen bao nhiêu lần?',
      steps: [
        '$d_{X/kk} = \\dfrac{M_X}{29}$ nên $M_X = 1{,}103 \\times 29 \\approx 32$ g/mol.',
        '$d_{X/\\mathrm{H_2}} = \\dfrac{32}{2} = 16$.',
      ],
      answer: '$M_X \\approx 32$ g/mol; X nặng hơn khí hydrogen $16$ lần (X có thể là khí oxygen).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Số phân tử nước có trong $1$ mol nước là',
      options: [
        '$6{,}022 \\times 10^{22}$',
        '$6{,}022 \\times 10^{23}$',
        '$18$',
        '$18 \\times 10^{23}$',
      ],
      answer: 1,
      hints: ['$1$ mol của bất kì chất nào cũng chứa $N_A$ hạt.'],
      solution: '$1$ mol nước chứa $N_A = 6{,}022 \\times 10^{23}$ phân tử nước.',
    },
    {
      type: 'number',
      prompt: 'Tính khối lượng mol của sulfuric acid $\\mathrm{H_2SO_4}$ (H = 1, S = 32, O = 16).',
      answer: 98,
      unit: 'g/mol',
      hints: ['Cộng khối lượng của $2$ H, $1$ S và $4$ O.'],
      solution: '$M = 2 \\times 1 + 32 + 4 \\times 16 = 98$ g/mol.',
    },
    {
      type: 'number',
      prompt: 'Tính khối lượng của $0{,}2$ mol copper (Cu = 64), theo gam.',
      answer: 12.8,
      tolerance: 0.001,
      unit: 'g',
      hints: ['$m = n \\times M$.'],
      solution: '$m = 0{,}2 \\times 64 = 12{,}8$ g.',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu mol iron trong $5{,}6$ g Fe (Fe = 56)?',
      answer: 0.1,
      tolerance: 0.0001,
      unit: 'mol',
      hints: ['$n = \\dfrac{m}{M}$.'],
      solution: '$n = \\dfrac{5{,}6}{56} = 0{,}1$ mol.',
    },
    {
      type: 'number',
      prompt: '$3{,}011 \\times 10^{23}$ phân tử oxygen ứng với bao nhiêu mol $\\mathrm{O_2}$?',
      answer: 0.5,
      tolerance: 0.0001,
      unit: 'mol',
      hints: ['$n = \\dfrac{N}{N_A}$ với $N_A = 6{,}022 \\times 10^{23}$.'],
      solution: '$n = \\dfrac{3{,}011 \\times 10^{23}}{6{,}022 \\times 10^{23}} = 0{,}5$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Tính thể tích (L) của $0{,}2$ mol khí $\\mathrm{CO_2}$ ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar).',
      answer: 4.958,
      tolerance: 0.001,
      unit: 'L',
      hints: ['$V = 24{,}79 \\times n$.'],
      solution: '$V = 24{,}79 \\times 0{,}2 = 4{,}958$ L.',
    },
    {
      type: 'number',
      prompt:
        'Một quả bóng chứa $9{,}916$ L khí hydrogen ở điều kiện chuẩn. Tính khối lượng khí hydrogen trong bóng, theo gam.',
      answer: 0.8,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        'Đổi thể tích ra số mol trước: $n = \\dfrac{V}{24{,}79}$.',
        'Rồi $m = n \\times M$ với $M_{\\mathrm{H_2}} = 2$ g/mol.',
      ],
      solution: '$n = \\dfrac{9{,}916}{24{,}79} = 0{,}4$ mol; $m = 0{,}4 \\times 2 = 0{,}8$ g.',
    },
    {
      type: 'choice',
      prompt: 'Khí nào sau đây nặng hơn không khí?',
      options: ['$\\mathrm{H_2}$', '$\\mathrm{CH_4}$', '$\\mathrm{NH_3}$', '$\\mathrm{CO_2}$'],
      answer: 3,
      hints: ['So sánh khối lượng mol của mỗi khí với $29$ g/mol.'],
      solution:
        '$M$ lần lượt là $2$, $16$, $17$ và $44$ g/mol. Chỉ $\\mathrm{CO_2}$ có $d_{\\mathrm{CO_2}/kk} = \\dfrac{44}{29} \\approx 1{,}52 > 1$.',
    },
    {
      type: 'number',
      prompt: 'Tính tỉ khối của khí oxygen đối với khí hydrogen.',
      answer: 16,
      hints: ['$d_{A/B} = \\dfrac{M_A}{M_B}$.'],
      solution:
        '$d_{\\mathrm{O_2}/\\mathrm{H_2}} = \\dfrac{32}{2} = 16$: khí oxygen nặng hơn khí hydrogen $16$ lần.',
    },
    {
      type: 'number',
      prompt: 'Khí A có tỉ khối đối với khí hydrogen là $17$. Tính khối lượng mol của khí A.',
      answer: 34,
      unit: 'g/mol',
      hints: ['$M_A = d_{A/\\mathrm{H_2}} \\times M_{\\mathrm{H_2}}$.'],
      solution: '$M_A = 17 \\times 2 = 34$ g/mol (ví dụ khí hydrogen sulfide $\\mathrm{H_2S}$).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đại lượng cần tính với công thức đúng.',
      left: [
        'Khối lượng chất $m$',
        'Số mol khí từ thể tích ở điều kiện chuẩn',
        'Số nguyên tử hoặc phân tử $N$',
        'Tỉ khối của khí A đối với không khí',
      ],
      right: [
        '$n = \\dfrac{V}{24{,}79}$',
        '$\\dfrac{M_A}{29}$',
        '$m = n \\times M$',
        '$N = n \\times N_A$',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Mỗi công thức đều đi qua số mol $n$, trừ công thức tỉ khối.'],
      solution:
        '$m = n \\times M$; $n = \\dfrac{V}{24{,}79}$; $N = n \\times N_A$; $d_{A/kk} = \\dfrac{M_A}{29}$.',
    },
  ],
  takeaways: [
    'Mol là lượng chất chứa $N_A = 6{,}022 \\times 10^{23}$ nguyên tử hoặc phân tử; $N = n \\times N_A$.',
    'Khối lượng mol $M$ (g/mol) có cùng trị số với khối lượng nguyên tử hoặc phân tử; $n = \\dfrac{m}{M}$.',
    'Ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar), $1$ mol khí bất kì chiếm $24{,}79$ L: $V = 24{,}79 \\times n$.',
    'Tỉ khối $d_{A/B} = \\dfrac{M_A}{M_B}$; so với không khí $d_{A/kk} = \\dfrac{M_A}{29}$.',
  ],
};
