/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Entropy là thước đo độ hỗn loạn của hệ; biến thiên entropy chuẩn của phản ứng; biến thiên năng lượng tự do Gibbs và cách dùng dấu của nó để dự đoán chiều phản ứng theo nhiệt độ.',
  intro:
    'Than cháy trong không khí là phản ứng toả nhiệt, tự xảy ra sau khi mồi lửa. Nhưng nước đá ngoài trời nắng tự tan dù đây là quá trình thu nhiệt, và đá vôi chỉ phân huỷ khi nung rất nóng. Vậy dấu của biến thiên enthalpy chưa đủ để biết một phản ứng có tự xảy ra hay không. Đại lượng nào có thể dự đoán được điều đó?',
  objectives: [
    'Nêu được khái niệm entropy và so sánh được entropy của một chất ở các thể khác nhau.',
    'Dự đoán được dấu và tính được biến thiên entropy chuẩn của phản ứng.',
    'Tính được biến thiên năng lượng tự do Gibbs từ $\\Delta_r H^\\circ$ và $\\Delta_r S^\\circ$.',
    'Dùng dấu của $\\Delta_r G^\\circ$ để dự đoán chiều phản ứng và nhiệt độ phản ứng đổi chiều.',
  ],
  sections: [
    {
      heading: 'Entropy',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Entropy',
          text: 'Entropy (S) là thước đo mức độ hỗn loạn (mất trật tự) của một hệ chứa số lượng lớn hạt như nguyên tử, phân tử hoặc ion. Độ tự do chuyển động của các hạt càng lớn thì entropy càng cao. Entropy chuẩn của một chất ở $298$ K kí hiệu là $S^\\circ_{298}$, đơn vị J/(mol·K).',
        },
        {
          type: 'list',
          items: [
            'Với cùng một chất: entropy ở thể khí lớn hơn thể lỏng, thể lỏng lớn hơn thể rắn.',
            'Khi tăng nhiệt độ, các hạt chuyển động mạnh hơn, entropy của chất tăng.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Biến thiên entropy chuẩn của phản ứng',
          text: 'Bằng tổng entropy chuẩn của các sản phẩm trừ tổng entropy chuẩn của các chất đầu, mỗi giá trị nhân với hệ số của chất trong phương trình:',
        },
        {
          type: 'tex',
          tex: '\\Delta_r S^\\circ_{298} = \\sum S^\\circ_{298}(\\mathrm{sp}) - \\sum S^\\circ_{298}(\\mathrm{cd})',
        },
        {
          type: 'p',
          text: 'Không cần tính vẫn dự đoán được dấu: phản ứng làm tăng số mol khí có $\\Delta_r S^\\circ > 0$; phản ứng làm giảm số mol khí có $\\Delta_r S^\\circ < 0$; số mol khí không đổi thì $\\Delta_r S^\\circ$ rất nhỏ.',
        },
        { type: 'widget', name: 'chieu-entropy' },
        {
          type: 'table',
          caption:
            'Giá trị entropy chuẩn và enthalpy tạo thành chuẩn của một số chất (đơn chất bền có $\\Delta_f H^\\circ_{298} = 0$)',
          head: ['Chất', '$S^\\circ_{298}$ (J/(mol·K))', '$\\Delta_f H^\\circ_{298}$ (kJ/mol)'],
          rows: [
            ['C(graphite)', '$5{,}7$', '$0$'],
            ['$\\mathrm{H_2(g)}$', '$130{,}6$', '$0$'],
            ['$\\mathrm{CO(g)}$', '$197{,}5$', '$-110{,}5$'],
            ['$\\mathrm{H_2O(g)}$', '$188{,}7$', '$-241{,}8$'],
            ['$\\mathrm{CO_2(g)}$', '$213{,}7$', '$-393{,}5$'],
            ['$\\mathrm{NO(g)}$', '$210{,}7$', '$90{,}3$'],
            ['$\\mathrm{CaO(s)}$', '$38{,}2$', '$-635{,}1$'],
            ['$\\mathrm{NO_2(g)}$', '$239{,}9$', '$33{,}2$'],
            ['$\\mathrm{CaCO_3(s)}$', '$92{,}9$', '$-1\\,206{,}9$'],
            ['$\\mathrm{N_2O_4(g)}$', '$304{,}3$', '$9{,}2$'],
            ['$\\mathrm{Fe(s)}$', '$27{,}3$', '$0$'],
            ['$\\mathrm{O_2(g)}$', '$205{,}0$', '$0$'],
            ['$\\mathrm{Fe_2O_3(s)}$', '$87{,}4$', '$-825{,}5$'],
            ['$\\mathrm{S(g)}$', '$168{,}0$', '$279{,}0$'],
            ['$\\mathrm{KCl(s)}$', '$82{,}6$', '$-436{,}7$'],
            ['$\\mathrm{SO_2(g)}$', '$248{,}1$', '$-296{,}8$'],
            ['$\\mathrm{KClO_3(s)}$', '$143{,}1$', '$-397{,}7$'],
            ['$\\mathrm{SO_3(g)}$', '$256{,}7$', '$-396{,}0$'],
          ],
        },
      ],
    },
    {
      heading: 'Biến thiên năng lượng tự do Gibbs',
      blocks: [
        {
          type: 'p',
          text: 'Chiều của phản ứng phụ thuộc đồng thời vào hai yếu tố: xu hướng giảm năng lượng ($\\Delta_r H$ âm) và xu hướng tăng độ hỗn loạn ($\\Delta_r S$ dương). Gibbs gộp hai yếu tố này thành một đại lượng, biến thiên năng lượng tự do Gibbs:',
        },
        {
          type: 'tex',
          tex: '\\Delta_r G^\\circ_T = \\Delta_r H^\\circ_T - T \\cdot \\Delta_r S^\\circ_T',
        },
        {
          type: 'p',
          text: 'Với $T$ là nhiệt độ tuyệt đối (K). Trong phạm vi bài học, coi $\\Delta_r H^\\circ$ và $\\Delta_r S^\\circ$ gần như không đổi theo nhiệt độ nên có thể dùng các giá trị ở $298$ K. Cần đưa về cùng đơn vị: $\\Delta_r S^\\circ$ thường tính bằng J/K còn $\\Delta_r H^\\circ$ tính bằng kJ.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa dấu và trị số của $\\Delta_r G^\\circ_T$',
          text: '$\\Delta_r G^\\circ_T < 0$: phản ứng tự xảy ra, giá trị càng âm thì phản ứng càng dễ xảy ra. $\\Delta_r G^\\circ_T = 0$: phản ứng đạt trạng thái cân bằng. $\\Delta_r G^\\circ_T > 0$: phản ứng không tự xảy ra.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tự xảy ra không có nghĩa là xảy ra nhanh',
          text: 'Dấu của $\\Delta_r G$ chỉ cho biết phản ứng có khả năng tự xảy ra hay không. Tốc độ phản ứng lại phụ thuộc năng lượng hoạt hoá. Hỗn hợp $\\mathrm{H_2}$ và $\\mathrm{O_2}$ có $\\Delta_r G^\\circ < 0$ nhưng ở nhiệt độ thường gần như không phản ứng nếu không có xúc tác hoặc tia lửa.',
        },
      ],
    },
    {
      heading: 'Dự đoán chiều phản ứng theo nhiệt độ',
      blocks: [
        {
          type: 'table',
          caption: 'Bốn trường hợp về dấu',
          head: [
            '$\\Delta_r H^\\circ$',
            '$\\Delta_r S^\\circ$',
            'Dấu của $\\Delta_r G^\\circ$',
            'Chiều phản ứng',
          ],
          rows: [
            ['$< 0$', '$> 0$', 'Luôn âm', 'Tự xảy ra ở mọi nhiệt độ'],
            ['$< 0$', '$< 0$', 'Âm khi $T$ nhỏ', 'Tự xảy ra khi nhiệt độ đủ thấp'],
            ['$> 0$', '$> 0$', 'Âm khi $T$ lớn', 'Tự xảy ra khi nhiệt độ đủ cao'],
            ['$> 0$', '$< 0$', 'Luôn dương', 'Không tự xảy ra ở mọi nhiệt độ'],
          ],
        },
        {
          type: 'p',
          text: 'Khi $\\Delta_r H^\\circ$ và $\\Delta_r S^\\circ$ cùng dấu, phản ứng đổi chiều tại nhiệt độ làm $\\Delta_r G^\\circ = 0$:',
        },
        { type: 'tex', tex: 'T = \\dfrac{\\Delta_r H^\\circ}{\\Delta_r S^\\circ}' },
      ],
    },
    {
      heading: 'Dự án: Bảng tính chiều phản ứng',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: xây dựng một bảng tính dùng Bảng giá trị ở trên để dự đoán chiều của các phản ứng thường gặp, rồi đối chiếu với thực tế sản xuất.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: bảng tính trên máy tính (hoặc giấy kẻ ô), bảng giá trị của bài học.',
            'Chọn ít nhất $4$ phản ứng thuộc cả $4$ trường hợp về dấu, trong đó có phản ứng nung vôi.',
            'Lập các cột: $\\Delta_r H^\\circ_{298}$, $\\Delta_r S^\\circ_{298}$, $\\Delta_r G^\\circ_{298}$, $T$ đổi chiều, kết luận.',
            'Vẽ đồ thị $\\Delta_r G^\\circ$ theo $T$ từ $0$ K đến $2\\,000$ K cho từng phản ứng.',
            'Tìm hiểu nhiệt độ thực tế của lò nung vôi và so sánh với $T$ đổi chiều em tính được.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: tệp bảng tính, các đồ thị và một đoạn giải thích: vì sao lò nung vôi phải đạt nhiệt độ cao, vì sao thực tế cần cao hơn nhiệt độ tính được một chút, và giả thiết $\\Delta_r H^\\circ$, $\\Delta_r S^\\circ$ không đổi theo nhiệt độ có giới hạn gì.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính $\\Delta G = \\Delta H - T\\Delta S$',
    instruction:
      'Chọn phản ứng hoặc tự đặt $\\Delta H$, $\\Delta S$, rồi kéo thanh nhiệt độ. Đường thẳng đi vào vùng xanh ở đâu? Hãy tự tìm một cặp $\\Delta H$, $\\Delta S$ ứng với từng dòng trong bảng bốn trường hợp.',
  },
  examples: [
    {
      problem:
        'Dựa vào bảng giá trị, tính biến thiên entropy chuẩn của phản ứng $\\mathrm{4Fe(s)} + \\mathrm{3O_2(g)} \\rightarrow \\mathrm{2Fe_2O_3(s)}$.',
      steps: [
        '$\\Delta_r S^\\circ_{298} = 2 \\cdot 87{,}4 - (4 \\cdot 27{,}3 + 3 \\cdot 205{,}0)$.',
        '$= 174{,}8 - 724{,}2 = -549{,}4$ J/K.',
        'Giá trị âm phù hợp với dự đoán, vì phản ứng làm mất hết khí oxygen.',
      ],
      answer: '$\\Delta_r S^\\circ_{298} = -549{,}4$ J/K.',
    },
    {
      problem:
        'Xét phản ứng $\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$. Ở $298$ K, phản ứng có tự xảy ra không? Từ nhiệt độ nào trở lên thì phản ứng tự xảy ra?',
      steps: [
        '$\\Delta_r H^\\circ_{298} = (-635{,}1 - 393{,}5) - (-1\\,206{,}9) = 178{,}3$ kJ.',
        '$\\Delta_r S^\\circ_{298} = (38{,}2 + 213{,}7) - 92{,}9 = 159{,}0$ J/K $= 0{,}159$ kJ/K.',
        '$\\Delta_r G^\\circ_{298} = 178{,}3 - 298 \\cdot 0{,}159 \\approx 130{,}9$ kJ $> 0$: ở $25\\ ^\\circ\\mathrm{C}$, $\\mathrm{CaCO_3}$ không tự phân huỷ.',
        'Phản ứng tự xảy ra khi $178{,}3 - T \\cdot 0{,}159 < 0$, tức $T > \\dfrac{178{,}3}{0{,}159} \\approx 1\\,121$ K.',
      ],
      answer:
        'Không tự xảy ra ở $298$ K; tự xảy ra khi $T > 1\\,121$ K (khoảng $848\\ ^\\circ\\mathrm{C}$).',
    },
    {
      problem:
        'Có thể dùng C(graphite) khử $\\mathrm{Fe_2O_3}$ ở điều kiện chuẩn, $25\\ ^\\circ\\mathrm{C}$ theo phản ứng $\\mathrm{3C(graphite)} + \\mathrm{2Fe_2O_3(s)} \\rightarrow \\mathrm{4Fe(s)} + \\mathrm{3CO_2(g)}$ được không?',
      steps: [
        '$\\Delta_r H^\\circ_{298} = 3 \\cdot (-393{,}5) - 2 \\cdot (-825{,}5) = 470{,}5$ kJ.',
        '$\\Delta_r S^\\circ_{298} = (4 \\cdot 27{,}3 + 3 \\cdot 213{,}7) - (3 \\cdot 5{,}7 + 2 \\cdot 87{,}4) = 558{,}4$ J/K.',
        '$\\Delta_r G^\\circ_{298} = 470{,}5 - 298 \\cdot 0{,}5584 \\approx 304{,}1$ kJ $> 0$.',
      ],
      answer: 'Không: ở $25\\ ^\\circ\\mathrm{C}$ phản ứng không tự xảy ra.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Dãy nào sắp xếp theo chiều tăng entropy chuẩn của $\\mathrm{CO_2}$?',
      options: [
        '$\\mathrm{CO_2(s)} < \\mathrm{CO_2(l)} < \\mathrm{CO_2(g)}$',
        '$\\mathrm{CO_2(g)} < \\mathrm{CO_2(l)} < \\mathrm{CO_2(s)}$',
        '$\\mathrm{CO_2(s)} < \\mathrm{CO_2(g)} < \\mathrm{CO_2(l)}$',
        '$\\mathrm{CO_2(g)} < \\mathrm{CO_2(s)} < \\mathrm{CO_2(l)}$',
      ],
      answer: 0,
      hints: ['Thể nào các hạt được tự do chuyển động nhất?'],
      solution: 'Với cùng một chất, entropy thể rắn nhỏ hơn thể lỏng, thể lỏng nhỏ hơn thể khí.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào xảy ra kèm theo sự giảm entropy?',
      options: [
        '$\\mathrm{N_2O_4(g)} \\rightarrow \\mathrm{2NO_2(g)}$',
        '$\\mathrm{2CO(g)} \\rightarrow \\mathrm{C(s)} + \\mathrm{CO_2(g)}$',
        '$\\mathrm{2H_2O_2(l)} \\rightarrow \\mathrm{2H_2O(l)} + \\mathrm{O_2(g)}$',
        '$\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$',
      ],
      answer: 1,
      hints: ['So sánh số mol khí ở hai vế.'],
      solution:
        'Phản ứng $\\mathrm{2CO(g)} \\rightarrow \\mathrm{C(s)} + \\mathrm{CO_2(g)}$ làm giảm số mol khí từ $2$ xuống $1$; ba phản ứng còn lại làm tăng số mol khí.',
    },
    {
      type: 'number',
      prompt:
        'Tính $\\Delta_r S^\\circ_{298}$ của phản ứng $\\mathrm{SO_2(g)} + \\mathrm{\\frac{1}{2}O_2(g)} \\rightarrow \\mathrm{SO_3(g)}$ theo bảng giá trị.',
      answer: -93.9,
      tolerance: 0.05,
      unit: 'J/K',
      hints: ['Nhớ nhân entropy của $\\mathrm{O_2}$ với hệ số $\\frac{1}{2}$.'],
      solution:
        '$256{,}7 - (248{,}1 + \\frac{1}{2} \\cdot 205{,}0) = 256{,}7 - 350{,}6 = -93{,}9$ J/K.',
    },
    {
      type: 'number',
      prompt:
        'Với phản ứng $\\mathrm{KClO_3(s)} \\rightarrow \\mathrm{KCl(s)} + \\mathrm{\\frac{3}{2}O_2(g)}$, tính $\\Delta_r G^\\circ_{298}$ theo bảng giá trị.',
      answer: -112.6,
      tolerance: 0.1,
      unit: 'kJ',
      hints: [
        'Tính lần lượt $\\Delta_r H^\\circ_{298}$ và $\\Delta_r S^\\circ_{298}$.',
        'Đổi J/K sang kJ/K trước khi nhân với $298$.',
      ],
      solution:
        '$\\Delta_r H^\\circ = -436{,}7 + 397{,}7 = -39{,}0$ kJ. $\\Delta_r S^\\circ = 82{,}6 + \\frac{3}{2} \\cdot 205{,}0 - 143{,}1 = 247{,}0$ J/K. $\\Delta_r G^\\circ = -39{,}0 - 298 \\cdot 0{,}247 \\approx -112{,}6$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Với phản ứng $\\mathrm{N_2O_4(g)} \\rightarrow \\mathrm{2NO_2(g)}$, tính $\\Delta_r G^\\circ_{298}$ theo bảng giá trị (làm tròn đến một chữ số thập phân).',
      answer: 4.9,
      tolerance: 0.05,
      unit: 'kJ',
      hints: [
        '$\\Delta_r H^\\circ$ và $\\Delta_r S^\\circ$ đều dương.',
        'Hệ số của $\\mathrm{NO_2}$ là $2$.',
      ],
      solution:
        '$\\Delta_r H^\\circ = 2 \\cdot 33{,}2 - 9{,}2 = 57{,}2$ kJ. $\\Delta_r S^\\circ = 2 \\cdot 239{,}9 - 304{,}3 = 175{,}5$ J/K. $\\Delta_r G^\\circ = 57{,}2 - 298 \\cdot 0{,}1755 \\approx 4{,}9$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{C(graphite)} + \\mathrm{CO_2(g)} \\rightarrow \\mathrm{2CO(g)}$ bắt đầu tự xảy ra ở nhiệt độ nào (K)? Dùng bảng giá trị, làm tròn đến hàng đơn vị.',
      answer: 982,
      tolerance: 2,
      unit: 'K',
      hints: [
        'Tìm $T$ làm $\\Delta_r G^\\circ = 0$.',
        'Đưa $\\Delta_r H^\\circ$ và $\\Delta_r S^\\circ$ về cùng đơn vị.',
      ],
      solution:
        '$\\Delta_r H^\\circ = 2 \\cdot (-110{,}5) + 393{,}5 = 172{,}5$ kJ. $\\Delta_r S^\\circ = 2 \\cdot 197{,}5 - 5{,}7 - 213{,}7 = 175{,}6$ J/K. $T = \\dfrac{172\\,500}{175{,}6} \\approx 982$ K.',
    },
    {
      type: 'choice',
      prompt:
        'Một phản ứng có $\\Delta_r H^\\circ < 0$ và $\\Delta_r S^\\circ < 0$. Phản ứng tự xảy ra khi',
      options: [
        'nhiệt độ đủ thấp.',
        'nhiệt độ đủ cao.',
        'ở mọi nhiệt độ.',
        'không ở nhiệt độ nào.',
      ],
      answer: 0,
      hints: ['Xét dấu của $-T\\Delta_r S^\\circ$ và độ lớn của nó khi $T$ tăng.'],
      solution:
        '$-T\\Delta_r S^\\circ$ dương và lớn dần theo $T$. Chỉ khi $T$ đủ nhỏ thì $\\Delta_r H^\\circ$ âm mới thắng, làm $\\Delta_r G^\\circ < 0$.',
    },
    {
      type: 'number',
      prompt:
        'Tính $\\Delta_r G^\\circ_{298}$ của phản ứng $\\mathrm{Fe_2O_3(s)} + \\mathrm{3CO(g)} \\rightarrow \\mathrm{2Fe(s)} + \\mathrm{3CO_2(g)}$ theo bảng giá trị (làm tròn đến một chữ số thập phân). Đây là lí do người ta dùng CO khử quặng sắt trong lò cao.',
      answer: -28.2,
      tolerance: 0.1,
      unit: 'kJ',
      hints: ['Đơn chất Fe có $\\Delta_f H^\\circ_{298} = 0$ nhưng entropy khác không.'],
      solution:
        '$\\Delta_r H^\\circ = 3 \\cdot (-393{,}5) - [-825{,}5 + 3 \\cdot (-110{,}5)] = -23{,}5$ kJ. $\\Delta_r S^\\circ = 2 \\cdot 27{,}3 + 3 \\cdot 213{,}7 - 87{,}4 - 3 \\cdot 197{,}5 = 15{,}8$ J/K. $\\Delta_r G^\\circ = -23{,}5 - 298 \\cdot 0{,}0158 \\approx -28{,}2$ kJ.',
    },
    {
      type: 'match',
      prompt: 'Nối giá trị $\\Delta_r G^\\circ_T$ với ý nghĩa của nó.',
      left: [
        '$\\Delta_r G^\\circ_T < 0$',
        '$\\Delta_r G^\\circ_T = 0$',
        '$\\Delta_r G^\\circ_T > 0$',
      ],
      right: ['Phản ứng tự xảy ra', 'Phản ứng đạt trạng thái cân bằng', 'Phản ứng không tự xảy ra'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Một phản ứng tự xảy ra khi năng lượng tự do của hệ giảm.'],
      solution: 'Âm: tự xảy ra. Bằng $0$: cân bằng. Dương: không tự xảy ra.',
    },
  ],
  takeaways: [
    'Entropy (S) là thước đo mức độ hỗn loạn của hệ; $S$(rắn) $<$ $S$(lỏng) $<$ $S$(khí) với cùng một chất.',
    '$\\Delta_r S^\\circ = \\sum S^\\circ(\\mathrm{sp}) - \\sum S^\\circ(\\mathrm{cd})$; số mol khí tăng thì $\\Delta_r S^\\circ > 0$.',
    '$\\Delta_r G^\\circ_T = \\Delta_r H^\\circ_T - T \\cdot \\Delta_r S^\\circ_T$; nhớ đưa về cùng đơn vị.',
    '$\\Delta_r G^\\circ_T < 0$: tự xảy ra; $= 0$: cân bằng; $> 0$: không tự xảy ra. Nhiệt độ đổi chiều là $T = \\Delta_r H^\\circ / \\Delta_r S^\\circ$.',
  ],
};
