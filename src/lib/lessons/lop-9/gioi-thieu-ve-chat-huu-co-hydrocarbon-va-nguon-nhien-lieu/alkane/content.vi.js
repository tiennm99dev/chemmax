/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Alkane là hydrocarbon mạch hở, trong phân tử chỉ có liên kết đơn, công thức chung CnH2n+2 (n ≥ 1). Bốn alkane đầu dãy là methane, ethane, propane, butane. Alkane cháy tạo carbon dioxide và nước, toả nhiều nhiệt nên được dùng làm nhiên liệu.',
  intro:
    'Bình gas nấu ăn trong bếp chứa chủ yếu propane và butane; khí thiên nhiên và khí biogas chứa chủ yếu methane. Những chất này cùng thuộc một dãy hydrocarbon gọi là alkane. Chúng có cấu tạo thế nào, và vì sao chúng là nhiên liệu tốt?',
  objectives: [
    'Nêu được khái niệm hydrocarbon, alkane và công thức chung của alkane.',
    'Viết được công thức cấu tạo và gọi tên được bốn alkane đầu dãy: methane, ethane, propane, butane.',
    'Trình bày được phản ứng cháy của alkane và viết được phương trình hoá học.',
    'Trình bày được ứng dụng làm nhiên liệu của alkane trong thực tiễn.',
  ],
  sections: [
    {
      heading: 'Khái niệm hydrocarbon và alkane',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hydrocarbon',
          text: 'Hydrocarbon là hợp chất hữu cơ chỉ chứa hai nguyên tố carbon và hydrogen.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Alkane',
          text: 'Alkane là các hydrocarbon mạch hở, trong phân tử chỉ có liên kết đơn. Công thức chung của alkane là $\\mathrm{C_nH_{2n+2}}$ với $n \\ge 1$.',
        },
        {
          type: 'table',
          head: ['Tên', 'Công thức phân tử', 'Công thức cấu tạo thu gọn'],
          rows: [
            ['Methane', '$\\mathrm{CH_4}$', '$\\mathrm{CH_4}$'],
            ['Ethane', '$\\mathrm{C_2H_6}$', '$\\mathrm{CH_3{-}CH_3}$'],
            ['Propane', '$\\mathrm{C_3H_8}$', '$\\mathrm{CH_3{-}CH_2{-}CH_3}$'],
            ['Butane', '$\\mathrm{C_4H_{10}}$', '$\\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_3}$'],
          ],
          caption: 'Bốn alkane đầu dãy (mạch không phân nhánh)',
        },
        {
          type: 'p',
          text: 'Trong phân tử alkane, mỗi nguyên tử carbon tạo bốn liên kết đơn với các nguyên tử carbon hoặc hydrogen khác. Từ alkane có 4 nguyên tử carbon trở lên, mạch carbon có thể không phân nhánh hoặc phân nhánh.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tính chất vật lí',
          text: 'Ở điều kiện thường, methane, ethane, propane, butane là chất khí, không màu; các alkane có nhiều nguyên tử carbon hơn ở thể lỏng hoặc rắn. Alkane nhẹ hơn nước và hầu như không tan trong nước. Methane là chất khí không mùi, nhẹ hơn không khí.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học: phản ứng cháy',
      blocks: [
        {
          type: 'p',
          text: 'Thí nghiệm: bật bật lửa gas (chứa butane) rồi úp một cốc thuỷ tinh khô lên trên ngọn lửa. Thành cốc bị mờ do có hơi nước đọng lại. Rót nước vôi trong vào cốc và lắc: nước vôi trong bị vẩn đục, chứng tỏ có khí carbon dioxide tạo thành.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng cháy của alkane',
          text: 'Alkane cháy hoàn toàn trong oxygen (hoặc không khí) tạo carbon dioxide và nước, toả nhiều nhiệt.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_nH_{2n+2}} + \\frac{3n+1}{2}\\,\\mathrm{O_2} \\xrightarrow{t^\\circ} n\\,\\mathrm{CO_2} + (n+1)\\,\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{CH_4} + 2\\mathrm{O_2} &\\xrightarrow{t^\\circ} \\mathrm{CO_2} + 2\\mathrm{H_2O} \\\\ 2\\mathrm{C_4H_{10}} + 13\\mathrm{O_2} &\\xrightarrow{t^\\circ} 8\\mathrm{CO_2} + 10\\mathrm{H_2O} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Để cân bằng phương trình cháy, ta cân bằng carbon trước, rồi hydrogen, cuối cùng là oxygen. Nếu hệ số của $\\mathrm{O_2}$ là phân số (ví dụ $\\frac{7}{2}$ với ethane) thì nhân tất cả các hệ số với 2.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Khi thiếu oxygen, alkane cháy không hoàn toàn, tạo ra cả carbon monoxide ($\\mathrm{CO}$) rất độc và muội than. Không đun nấu bằng bếp gas, bếp than trong phòng kín; hỗn hợp khí gas hoặc methane với không khí gặp lửa có thể gây nổ.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của alkane',
      blocks: [
        {
          type: 'table',
          head: ['Alkane', 'Ứng dụng'],
          rows: [
            [
              'Methane',
              'Thành phần chính của khí thiên nhiên và khí biogas; làm nhiên liệu cho nhà máy điện, sản xuất phân đạm, nấu ăn.',
            ],
            [
              'Propane, butane',
              'Thành phần chính của khí hoá lỏng (LPG) trong bình gas, bật lửa; làm nhiên liệu đun nấu, sưởi, chạy xe.',
            ],
            [
              'Alkane lỏng, rắn',
              'Có trong xăng, dầu hoả, dầu diesel làm nhiên liệu động cơ; paraffin dùng làm nến, dầu nhờn bôi trơn máy.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Alkane được dùng làm nhiên liệu vì cháy toả nhiều nhiệt, sản phẩm cháy hoàn toàn là $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$. Alkane còn là nguyên liệu cho công nghiệp hoá chất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình alkane và phản ứng cháy',
    instruction:
      'Chọn một alkane, kéo nút tròn trên vòng hoặc dùng phím ← → để xoay mô hình, chạm từng nguyên tử để xem số liên kết. Sau đó chỉnh các hệ số để cân bằng phương trình đốt cháy: bảng bên dưới đếm số nguyên tử C, H, O ở hai vế. Khi phương trình cân bằng với hệ số nhỏ nhất, bấm “Đốt cháy”.',
  },
  examples: [
    {
      problem: 'Viết phương trình hoá học của phản ứng đốt cháy hoàn toàn propane.',
      steps: [
        'Propane có công thức $\\mathrm{C_3H_8}$; sản phẩm cháy hoàn toàn là $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$.',
        'Cân bằng C: 3 nguyên tử C nên có $3\\mathrm{CO_2}$.',
        'Cân bằng H: 8 nguyên tử H nên có $4\\mathrm{H_2O}$.',
        'Cân bằng O: vế phải có $3 \\times 2 + 4 = 10$ nguyên tử O, nên cần $5\\mathrm{O_2}$.',
      ],
      answer:
        '$\\mathrm{C_3H_8} + 5\\mathrm{O_2} \\xrightarrow{t^\\circ} 3\\mathrm{CO_2} + 4\\mathrm{H_2O}$.',
    },
    {
      problem: 'Viết phương trình hoá học của phản ứng đốt cháy hoàn toàn butane.',
      steps: [
        '$\\mathrm{C_4H_{10}} + \\,?\\,\\mathrm{O_2} \\rightarrow 4\\mathrm{CO_2} + 5\\mathrm{H_2O}$ (cân bằng C và H trước).',
        'Vế phải có $4 \\times 2 + 5 = 13$ nguyên tử O, nên hệ số của $\\mathrm{O_2}$ là $\\frac{13}{2}$.',
        'Nhân tất cả hệ số với 2 để được số nguyên nhỏ nhất.',
      ],
      answer:
        '$2\\mathrm{C_4H_{10}} + 13\\mathrm{O_2} \\xrightarrow{t^\\circ} 8\\mathrm{CO_2} + 10\\mathrm{H_2O}$.',
    },
    {
      problem:
        'Đốt cháy hoàn toàn $2{,}479$ L khí methane ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar). Tính thể tích oxygen cần dùng (ở điều kiện chuẩn) và khối lượng carbon dioxide tạo thành (C = 12, O = 16).',
      steps: [
        '$n_{\\mathrm{CH_4}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol.',
        '$\\mathrm{CH_4} + 2\\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{CO_2} + 2\\mathrm{H_2O}$: $n_{\\mathrm{O_2}} = 2 \\times 0{,}1 = 0{,}2$ mol, $n_{\\mathrm{CO_2}} = 0{,}1$ mol.',
        '$V_{\\mathrm{O_2}} = 0{,}2 \\times 24{,}79 = 4{,}958$ L.',
        '$m_{\\mathrm{CO_2}} = 0{,}1 \\times 44 = 4{,}4$ g.',
      ],
      answer: '$V_{\\mathrm{O_2}} = 4{,}958$ L; $m_{\\mathrm{CO_2}} = 4{,}4$ g.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của alkane là',
      options: [
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
        '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{n}}$ ($n \\ge 1$)',
      ],
      answer: 1,
      hints: ['Kiểm tra với methane $\\mathrm{CH_4}$ và ethane $\\mathrm{C_2H_6}$.'],
      solution:
        'Alkane có công thức chung $\\mathrm{C_nH_{2n+2}}$: $n = 1$ cho $\\mathrm{CH_4}$, $n = 2$ cho $\\mathrm{C_2H_6}$.',
    },
    {
      type: 'match',
      prompt: 'Nối tên mỗi alkane với công thức phân tử của nó.',
      left: ['Methane', 'Ethane', 'Propane', 'Butane'],
      right: [
        '$\\mathrm{C_3H_8}$',
        '$\\mathrm{CH_4}$',
        '$\\mathrm{C_4H_{10}}$',
        '$\\mathrm{C_2H_4}$',
        '$\\mathrm{C_2H_6}$',
      ],
      pairs: [
        [0, 1],
        [1, 4],
        [2, 0],
        [3, 2],
      ],
      hints: ['meth- 1 C, eth- 2 C, prop- 3 C, but- 4 C; số H bằng $2n + 2$.'],
      solution:
        'Methane $\\mathrm{CH_4}$, ethane $\\mathrm{C_2H_6}$, propane $\\mathrm{C_3H_8}$, butane $\\mathrm{C_4H_{10}}$. $\\mathrm{C_2H_4}$ không phải alkane.',
    },
    {
      type: 'text',
      prompt: 'Viết công thức phân tử của alkane có 5 nguyên tử carbon (ví dụ gõ C3H8).',
      accept: ['C5H12'],
      hints: ['Số nguyên tử H của alkane là $2n + 2$.'],
      solution:
        '$n = 5$: số H $= 2 \\times 5 + 2 = 12$, công thức $\\mathrm{C_5H_{12}}$ (pentane).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các alkane.',
      options: [
        '$\\mathrm{CH_4}$',
        '$\\mathrm{C_2H_4}$',
        '$\\mathrm{C_3H_8}$',
        '$\\mathrm{C_4H_{10}}$',
        '$\\mathrm{C_2H_5OH}$',
      ],
      answers: [0, 2, 3],
      hints: ['Alkane là hydrocarbon, chỉ có C và H.', 'Thử xem số H có bằng $2n + 2$ không.'],
      solution:
        '$\\mathrm{CH_4}$, $\\mathrm{C_3H_8}$, $\\mathrm{C_4H_{10}}$ có dạng $\\mathrm{C_nH_{2n+2}}$. $\\mathrm{C_2H_4}$ có liên kết đôi (alkene), $\\mathrm{C_2H_5OH}$ có oxygen nên không phải hydrocarbon.',
    },
    {
      type: 'choice',
      prompt: 'Sản phẩm của phản ứng đốt cháy hoàn toàn alkane là',
      options: [
        '$\\mathrm{CO}$ và $\\mathrm{H_2O}$',
        '$\\mathrm{CO_2}$ và $\\mathrm{H_2}$',
        '$\\mathrm{CO_2}$ và $\\mathrm{H_2O}$',
        '$\\mathrm{C}$ và $\\mathrm{H_2O}$',
      ],
      answer: 2,
      hints: ['Carbon và hydrogen đều bị oxi hoá hết bởi oxygen.'],
      solution:
        'Cháy hoàn toàn, carbon chuyển thành $\\mathrm{CO_2}$, hydrogen chuyển thành $\\mathrm{H_2O}$. $\\mathrm{CO}$ và muội than chỉ sinh ra khi cháy không hoàn toàn.',
    },
    {
      type: 'number',
      prompt:
        'Trong phương trình đốt cháy $2\\mathrm{C_2H_6} + x\\,\\mathrm{O_2} \\rightarrow 4\\mathrm{CO_2} + 6\\mathrm{H_2O}$, hệ số $x$ bằng bao nhiêu?',
      answer: 7,
      hints: ['Đếm số nguyên tử O ở vế phải.'],
      solution: 'Vế phải có $4 \\times 2 + 6 = 14$ nguyên tử O, nên $2x = 14$, $x = 7$.',
    },
    {
      type: 'number',
      prompt:
        'Tính thể tích khí oxygen (ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L) cần để đốt cháy hoàn toàn $0{,}2$ mol methane, theo lít.',
      answer: 9.916,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}$.',
        'Số mol $\\mathrm{O_2}$ gấp đôi số mol $\\mathrm{CH_4}$.',
      ],
      solution:
        '$n_{\\mathrm{O_2}} = 2 \\times 0{,}2 = 0{,}4$ mol; $V = 0{,}4 \\times 24{,}79 = 9{,}916$ L.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $4{,}4$ g propane. Tính khối lượng nước tạo thành, theo gam (C = 12, H = 1, O = 16).',
      answer: 7.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$M_{\\mathrm{C_3H_8}} = 44$ g/mol.',
        '$\\mathrm{C_3H_8} + 5\\mathrm{O_2} \\rightarrow 3\\mathrm{CO_2} + 4\\mathrm{H_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{C_3H_8}} = \\dfrac{4{,}4}{44} = 0{,}1$ mol; $n_{\\mathrm{H_2O}} = 4 \\times 0{,}1 = 0{,}4$ mol; $m = 0{,}4 \\times 18 = 7{,}2$ g.',
    },
    {
      type: 'choice',
      prompt: 'Một alkane có khối lượng phân tử $58$ amu. Alkane đó là',
      options: ['methane', 'ethane', 'propane', 'butane'],
      answer: 3,
      hints: ['Khối lượng phân tử của $\\mathrm{C_nH_{2n+2}}$ là $12n + 2n + 2 = 14n + 2$.'],
      solution: '$14n + 2 = 58 \\Rightarrow n = 4$: butane $\\mathrm{C_4H_{10}}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không nên đun bếp than hoặc bếp gas trong phòng kín?',
      options: [
        'Vì nhiên liệu sẽ không cháy được.',
        'Vì thiếu oxygen, nhiên liệu cháy không hoàn toàn sinh ra khí CO rất độc.',
        'Vì sinh ra quá nhiều hơi nước.',
        'Vì alkane tan trong nước.',
      ],
      answer: 1,
      hints: ['Nghĩ đến sản phẩm khi nhiên liệu cháy trong điều kiện thiếu không khí.'],
      solution:
        'Trong phòng kín, oxygen cạn dần, nhiên liệu cháy không hoàn toàn tạo carbon monoxide $\\mathrm{CO}$ không màu, không mùi, rất độc, có thể gây ngạt và tử vong.',
    },
  ],
  takeaways: [
    'Hydrocarbon chỉ có C và H. Alkane là hydrocarbon mạch hở, chỉ có liên kết đơn, công thức chung $\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$).',
    'Bốn alkane đầu dãy: methane $\\mathrm{CH_4}$, ethane $\\mathrm{C_2H_6}$, propane $\\mathrm{C_3H_8}$, butane $\\mathrm{C_4H_{10}}$; ở điều kiện thường đều là chất khí.',
    'Alkane cháy hoàn toàn tạo $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$, toả nhiều nhiệt; thiếu oxygen sẽ sinh ra CO độc.',
    'Alkane là nhiên liệu quan trọng: khí thiên nhiên, khí biogas (methane), khí hoá lỏng LPG (propane, butane), xăng, dầu.',
  ],
};
