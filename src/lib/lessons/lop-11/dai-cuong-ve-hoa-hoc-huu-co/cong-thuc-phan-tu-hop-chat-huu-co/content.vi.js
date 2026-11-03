/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công thức tổng quát, công thức đơn giản nhất và công thức phân tử; dùng phổ khối lượng để biết phân tử khối, rồi lập công thức phân tử từ phần trăm khối lượng các nguyên tố.',
  intro:
    'Long não có mùi thơm đặc trưng từ camphor. Phân tích cho biết camphor chứa $78{,}94\\%$ C, $10{,}53\\%$ H và $10{,}53\\%$ O về khối lượng. Từ những con số đó, cùng một peak trên phổ khối lượng, các nhà hoá học biết chính xác trong mỗi phân tử có bao nhiêu nguyên tử mỗi loại. Bài này chỉ cho em cách làm.',
  objectives: [
    'Phân biệt được công thức tổng quát, công thức đơn giản nhất và công thức phân tử.',
    'Xác định được phân tử khối từ phổ khối lượng dựa vào peak ion phân tử.',
    'Lập được công thức phân tử từ phần trăm khối lượng các nguyên tố và phân tử khối.',
  ],
  sections: [
    {
      heading: 'Công thức phân tử',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công thức phân tử',
          text: 'Công thức phân tử cho biết thành phần các nguyên tố và số nguyên tử của mỗi nguyên tố có trong phân tử.',
        },
        {
          type: 'table',
          caption: 'Các cách biểu diễn thành phần phân tử',
          head: ['Công thức', 'Cho biết', 'Ví dụ với acetic acid'],
          rows: [
            ['Tổng quát', 'Các nguyên tố có trong phân tử', '$\\mathrm{C_xH_yO_z}$'],
            ['Đơn giản nhất', 'Tỉ lệ tối giản số nguyên tử các nguyên tố', '$\\mathrm{CH_2O}$'],
            ['Phân tử', 'Số nguyên tử thật sự của mỗi nguyên tố', '$\\mathrm{C_2H_4O_2}$'],
          ],
        },
        {
          type: 'p',
          text: 'Công thức phân tử luôn là một bội nguyên của công thức đơn giản nhất: $\\mathrm{C_xH_yO_z} = (\\mathrm{C_pH_qO_r})_n$. Nhiều chất khác nhau có thể chung một công thức đơn giản nhất: $\\mathrm{HCHO}$, $\\mathrm{CH_3COOH}$ và glucose $\\mathrm{C_6H_{12}O_6}$ đều có công thức đơn giản nhất là $\\mathrm{CH_2O}$.',
        },
      ],
    },
    {
      heading: 'Xác định phân tử khối bằng phổ khối lượng',
      blocks: [
        {
          type: 'p',
          text: 'Trong máy khối phổ, chất nghiên cứu bị dòng electron năng lượng cao bắn phá, tạo thành các ion và mảnh ion. Máy ghi lại tỉ số khối lượng trên điện tích (m/z) của các ion này thành phổ khối lượng (phổ MS).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Đọc phân tử khối',
          text: 'Với hợp chất đơn giản, peak có m/z lớn nhất thường ứng với ion phân tử $[\\mathrm{M}^+]$, và giá trị m/z đó bằng phân tử khối của chất.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Peak cao nhất chưa chắc là ion phân tử',
          text: 'Peak cao nhất chỉ cho biết mảnh ion đó nhiều nhất. Phổ của ethyl acetate có peak cao nhất ở m/z $43$, trong khi phân tử khối là $88$, ứng với peak thấp ở đầu bên phải.',
        },
      ],
    },
    {
      heading: 'Lập công thức phân tử',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dựa vào kết quả phân tích nguyên tố, tìm phần trăm khối lượng các nguyên tố. Phần trăm oxygen thường tính bằng cách lấy $100\\%$ trừ đi các nguyên tố còn lại.',
            'Lập tỉ lệ số nguyên tử rồi đưa về các số nguyên tối giản $p : q : r$, được công thức đơn giản nhất $\\mathrm{C_pH_qO_r}$.',
            'Từ phổ MS tìm phân tử khối $M$. Tính $n = \\dfrac{M}{12p + q + 16r}$ rồi suy ra công thức phân tử.',
          ],
        },
        {
          type: 'tex',
          tex: 'x : y : z = \\frac{\\%\\mathrm{C}}{12} : \\frac{\\%\\mathrm{H}}{1} : \\frac{\\%\\mathrm{O}}{16} = p : q : r',
        },
      ],
    },
  ],
  explore: {
    title: 'Từ phần trăm và phổ MS đến công thức phân tử',
    instruction:
      'Chọn một chất, xem bảng tỉ lệ số nguyên tử cho công thức đơn giản nhất, rồi bấm peak em cho là ion phân tử để tìm n. Bấm thử một mảnh ion khác xem chuyện gì xảy ra. Mục "Tự nhập" cho em kiểm tra bài tập của mình. Chiều cao các peak chỉ gần đúng.',
  },
  examples: [
    {
      problem:
        'Acetic acid có $40\\%$ C, $6{,}67\\%$ H, còn lại là O. Trên phổ MS, peak có m/z lớn nhất là $60$. Lập công thức phân tử.',
      steps: [
        '$\\%\\mathrm{O} = 100 - 40 - 6{,}67 = 53{,}33\\%$.',
        '$x : y : z = \\dfrac{40}{12} : \\dfrac{6{,}67}{1} : \\dfrac{53{,}33}{16} = 3{,}33 : 6{,}67 : 3{,}33 = 1 : 2 : 1$. Công thức đơn giản nhất là $\\mathrm{CH_2O}$.',
        'Phân tử khối bằng $60$, nên $(12 + 2 + 16)n = 60$, suy ra $n = 2$.',
      ],
      answer: 'Công thức phân tử là $\\mathrm{C_2H_4O_2}$.',
    },
    {
      problem:
        'Camphor chứa $78{,}94\\%$ C, $10{,}53\\%$ H và $10{,}53\\%$ O. Phổ MS có peak $[\\mathrm{M}^+]$ tại m/z $152$. Tìm công thức phân tử của camphor.',
      steps: [
        '$x : y : z = \\dfrac{78{,}94}{12} : \\dfrac{10{,}53}{1} : \\dfrac{10{,}53}{16} = 6{,}578 : 10{,}53 : 0{,}658$.',
        'Chia cho số nhỏ nhất $0{,}658$, được $10 : 16 : 1$. Công thức đơn giản nhất là $\\mathrm{C_{10}H_{16}O}$.',
        '$(12 \\cdot 10 + 16 + 16)n = 152$, nên $152n = 152$ và $n = 1$.',
      ],
      answer: 'Công thức phân tử của camphor là $\\mathrm{C_{10}H_{16}O}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức phân tử cho biết điều gì về phân tử hợp chất hữu cơ?',
      options: [
        'Thành phần nguyên tố và số nguyên tử của mỗi nguyên tố',
        'Thứ tự liên kết giữa các nguyên tử',
        'Chỉ tỉ lệ tối giản số nguyên tử',
        'Chỉ các nguyên tố có mặt, không biết số lượng',
      ],
      answer: 0,
      hints: ['So sánh với công thức tổng quát và công thức đơn giản nhất.'],
      solution:
        'Công thức phân tử cho biết các nguyên tố và số nguyên tử của mỗi nguyên tố. Thứ tự liên kết là việc của công thức cấu tạo.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào có công thức đơn giản nhất là $\\mathrm{CH_2O}$?',
      options: [
        '$\\mathrm{HCHO}$',
        '$\\mathrm{CH_3COOH}$',
        '$\\mathrm{C_6H_{12}O_6}$',
        '$\\mathrm{C_2H_5OH}$',
        '$\\mathrm{C_2H_4}$',
      ],
      answers: [0, 1, 2],
      hints: [
        'Viết công thức phân tử của mỗi chất, rồi chia cho ước chung lớn nhất của các chỉ số.',
      ],
      solution:
        '$\\mathrm{HCHO}$ là $\\mathrm{CH_2O}$; $\\mathrm{CH_3COOH}$ là $\\mathrm{C_2H_4O_2}$; glucose là $\\mathrm{C_6H_{12}O_6}$; cả ba đều rút gọn thành $\\mathrm{CH_2O}$. Còn $\\mathrm{C_2H_5OH}$ là $\\mathrm{C_2H_6O}$ và $\\mathrm{C_2H_4}$ cho $\\mathrm{CH_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Phổ MS của một ester đơn giản có các peak tại m/z $29$, $43$, $61$, $88$. Phân tử khối của chất này bằng bao nhiêu?',
      answer: 88,
      hints: ['Ion phân tử của hợp chất đơn giản ứng với peak nào?'],
      solution:
        'Peak có m/z lớn nhất là $88$, ứng với $[\\mathrm{M}^+]$, nên phân tử khối là $88$.',
    },
    {
      type: 'number',
      prompt:
        'Eugenol trong tinh dầu đinh hương có $73{,}17\\%$ C, $7{,}31\\%$ H, còn lại là O; phân tử khối là $164$. Một phân tử eugenol có bao nhiêu nguyên tử hydrogen?',
      answer: 12,
      hints: [
        'Tìm %O rồi lập tỉ lệ $x : y : z$.',
        'Tỉ lệ là $5 : 6 : 1$. Khối lượng của một đơn vị $\\mathrm{C_5H_6O}$ là bao nhiêu?',
      ],
      solution:
        '$\\%\\mathrm{O} = 19{,}52\\%$. $x : y : z = 6{,}098 : 7{,}31 : 1{,}22 = 5 : 6 : 1$. $82n = 164$ nên $n = 2$, công thức phân tử là $\\mathrm{C_{10}H_{12}O_2}$, có $12$ nguyên tử H.',
    },
    {
      type: 'number',
      prompt:
        'Hydrocarbon X có $85{,}71\\%$ C và $14{,}29\\%$ H; phân tử khối là $56$. Một phân tử X có bao nhiêu nguyên tử carbon?',
      answer: 4,
      hints: [
        'Lập tỉ lệ $x : y$ để có công thức đơn giản nhất.',
        'Công thức đơn giản nhất là $\\mathrm{CH_2}$, ứng với khối lượng $14$.',
      ],
      solution:
        '$x : y = \\dfrac{85{,}71}{12} : \\dfrac{14{,}29}{1} = 7{,}14 : 14{,}29 = 1 : 2$. $14n = 56$ nên $n = 4$. X là $\\mathrm{C_4H_8}$, có $4$ nguyên tử C.',
    },
    {
      type: 'number',
      prompt:
        'Hợp chất Y chỉ chứa C, H, N, có $61{,}02\\%$ C, $15{,}25\\%$ H và $23{,}73\\%$ N; phân tử khối là $59$. Một phân tử Y có bao nhiêu nguyên tử hydrogen?',
      answer: 9,
      hints: ['Làm như với C, H, O, nhưng chia phần trăm của N cho $14$.'],
      solution:
        '$x : y : t = \\dfrac{61{,}02}{12} : \\dfrac{15{,}25}{1} : \\dfrac{23{,}73}{14} = 5{,}085 : 15{,}25 : 1{,}695 = 3 : 9 : 1$. Khối lượng $\\mathrm{C_3H_9N}$ là $59$, nên $n = 1$. Y có $9$ nguyên tử H.',
    },
    {
      type: 'number',
      prompt:
        'Cinnamaldehyde trong tinh dầu quế có công thức phân tử $\\mathrm{C_9H_8O}$. Tính phần trăm khối lượng của carbon, làm tròn đến hai chữ số thập phân.',
      answer: 81.82,
      tolerance: 0.02,
      unit: '%',
      hints: ['Tính phân tử khối, rồi lấy khối lượng carbon chia cho phân tử khối.'],
      solution:
        '$M = 12 \\cdot 9 + 8 + 16 = 132$. $\\%\\mathrm{C} = \\dfrac{108}{132} \\cdot 100\\% \\approx 81{,}82\\%$.',
    },
    {
      type: 'text',
      prompt:
        'Đốt cháy hoàn toàn $4{,}6$ g chất X (chứa C, H, O) thu được $8{,}8$ g $\\mathrm{CO_2}$ và $5{,}4$ g $\\mathrm{H_2O}$. Biết phân tử khối của X là $46$. Viết công thức phân tử của X, ví dụ C2H4O2.',
      accept: ['C2H6O'],
      hints: [
        'Tìm khối lượng C từ $\\mathrm{CO_2}$, khối lượng H từ $\\mathrm{H_2O}$, phần còn lại là O.',
        '$m_\\mathrm{C} = 2{,}4$ g, $m_\\mathrm{H} = 0{,}6$ g. Oxygen chiếm bao nhiêu gam?',
      ],
      solution:
        '$m_\\mathrm{C} = \\dfrac{8{,}8}{44} \\cdot 12 = 2{,}4$ g; $m_\\mathrm{H} = \\dfrac{5{,}4}{18} \\cdot 2 = 0{,}6$ g; $m_\\mathrm{O} = 4{,}6 - 2{,}4 - 0{,}6 = 1{,}6$ g. $x : y : z = 0{,}2 : 0{,}6 : 0{,}1 = 2 : 6 : 1$. $46n = 46$ nên $n = 1$, X là $\\mathrm{C_2H_6O}$.',
    },
  ],
  takeaways: [
    'Công thức đơn giản nhất cho tỉ lệ tối giản; công thức phân tử là bội nguyên của nó.',
    'Với hợp chất đơn giản, peak có m/z lớn nhất trên phổ MS ứng với ion phân tử và cho biết phân tử khối.',
    'Lập tỉ lệ $x : y : z$ bằng cách chia phần trăm khối lượng cho nguyên tử khối.',
    'Tìm $n$ bằng cách chia phân tử khối cho khối lượng của công thức đơn giản nhất.',
  ],
};
