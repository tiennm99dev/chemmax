/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chế biến dầu mỏ: chưng cất phân đoạn ở áp suất thường và chưng cất chân không, cracking, reforming và làm sạch lưu huỳnh; các sản phẩm nhiên liệu và hoá dầu; chỉ số octane và cách sử dụng nhiên liệu.',
  intro:
    'Dầu thô vừa hút lên gần như không dùng được: không thể đổ thẳng vào xe máy, cũng không làm được chai nhựa. Trong nhà máy lọc dầu, dầu thô được tách, bẻ gãy, sắp xếp lại phân tử để trở thành khí đốt, xăng, dầu diesel, nhựa đường và hàng nghìn sản phẩm hoá dầu.',
  objectives: [
    'Trình bày được nguyên tắc chưng cất phân đoạn dầu mỏ và các phân đoạn chính.',
    'Nêu được mục đích của cracking, reforming và làm sạch lưu huỳnh; viết được phương trình hoá học minh hoạ.',
    'Kể được các sản phẩm của dầu mỏ và ứng dụng của chúng.',
    'Giải thích được ý nghĩa của chỉ số octane và cách sử dụng nhiên liệu hợp lí, an toàn, ít gây ô nhiễm.',
  ],
  sections: [
    {
      heading: 'Chưng cất dầu mỏ',
      blocks: [
        {
          type: 'p',
          text: 'Trước khi chưng cất, dầu thô được xử lí sơ bộ: tách nước, tách muối và tạp chất cơ học để tránh ăn mòn, đóng cặn thiết bị.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chưng cất phân đoạn',
          text: 'Chưng cất phân đoạn là tách dầu mỏ thành các phân đoạn, mỗi phân đoạn là hỗn hợp các hydrocarbon có nhiệt độ sôi gần nhau, dựa vào sự khác nhau về nhiệt độ sôi của chúng. Đây là quá trình vật lí.',
        },
        {
          type: 'p',
          text: 'Dầu thô được đun nóng trong lò đến khoảng $350$ – $400\\ ^\\circ\\mathrm{C}$ rồi đưa vào đáy tháp chưng cất. Hơi bay lên, càng lên cao nhiệt độ càng thấp: chất nào sôi ở nhiệt độ cao hơn thì ngưng tụ ở đĩa thấp hơn, chất sôi ở nhiệt độ thấp đi lên đỉnh tháp.',
        },
        {
          type: 'table',
          head: ['Phân đoạn', 'Nhiệt độ sôi', 'Số nguyên tử C', 'Ứng dụng chính'],
          rows: [
            [
              'Khí dầu mỏ',
              'dưới $30\\ ^\\circ\\mathrm{C}$',
              '$\\mathrm{C_1}$ – $\\mathrm{C_4}$',
              'Khí hoá lỏng (LPG), nguyên liệu hoá dầu',
            ],
            [
              'Xăng (naphtha)',
              '$30$ – $180\\ ^\\circ\\mathrm{C}$',
              '$\\mathrm{C_5}$ – $\\mathrm{C_{10}}$',
              'Nhiên liệu động cơ xăng, nguyên liệu reforming',
            ],
            [
              'Dầu hoả (kerosene)',
              '$180$ – $250\\ ^\\circ\\mathrm{C}$',
              'khoảng $\\mathrm{C_{11}}$ – $\\mathrm{C_{15}}$',
              'Nhiên liệu phản lực, đun nấu',
            ],
            [
              'Dầu diesel (gas oil)',
              '$250$ – $350\\ ^\\circ\\mathrm{C}$',
              'khoảng $\\mathrm{C_{15}}$ – $\\mathrm{C_{20}}$',
              'Nhiên liệu động cơ diesel',
            ],
            [
              'Cặn (mazut)',
              'trên $350\\ ^\\circ\\mathrm{C}$',
              'trên $\\mathrm{C_{20}}$',
              'Chưng cất chân không; dầu đốt lò',
            ],
          ],
          caption: 'Các phân đoạn chính khi chưng cất dầu mỏ ở áp suất thường (giá trị gần đúng)',
        },
        {
          type: 'p',
          text: 'Các khoảng số nguyên tử carbon chỉ gần đúng và gối lên nhau, vì dầu mỏ có nhiều đồng phân mạch nhánh, mạch vòng với nhiệt độ sôi khác nhau.',
        },
        {
          type: 'p',
          text: 'Cặn mazut được chưng cất tiếp ở áp suất thấp (chưng cất chân không). Giảm áp suất làm các chất sôi ở nhiệt độ thấp hơn, nên tách được dầu nhờn, sáp paraffin, nhựa đường mà không làm phân tử bị phân huỷ.',
        },
      ],
    },
    {
      heading: 'Chế biến hoá học: cracking và reforming',
      blocks: [
        {
          type: 'p',
          text: 'Chưng cất chỉ cho khoảng $20$% xăng, trong khi nhu cầu xăng rất lớn, và xăng chưng cất trực tiếp có chất lượng thấp. Vì vậy các phân đoạn được chế biến tiếp bằng các quá trình hoá học.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cracking',
          text: 'Cracking là quá trình bẻ gãy mạch carbon của các hydrocarbon mạch dài thành các hydrocarbon mạch ngắn hơn (alkane và alkene). Mục đích: tăng lượng xăng từ các phân đoạn nặng và sản xuất alkene nhẹ cho công nghiệp hoá dầu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_{16}H_{34}} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_8H_{18} + C_8H_{16}}',
        },
        {
          type: 'list',
          items: [
            'Cracking xúc tác: khoảng $450$ – $500\\ ^\\circ\\mathrm{C}$, xúc tác aluminosilicate (zeolite); sản phẩm chính là xăng có chỉ số octane khá cao.',
            'Cracking nhiệt (cracking hơi nước): nhiệt độ cao, khoảng $800\\ ^\\circ\\mathrm{C}$; sản phẩm chính là ethylene, propylene.',
            'Hydrocracking: cracking có mặt hydrogen, xúc tác, áp suất cao; cho nhiên liệu phản lực, diesel ít lưu huỳnh.',
          ],
        },
        { type: 'widget', name: 'cracking' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Reforming',
          text: 'Reforming là quá trình biến đổi cấu tạo của hydrocarbon (thường dùng xúc tác platinum, khoảng $500\\ ^\\circ\\mathrm{C}$) mà không làm thay đổi số nguyên tử carbon: alkane mạch thẳng chuyển thành alkane mạch nhánh, cycloalkane và arene. Mục đích: tăng chỉ số octane của xăng; quá trình còn cho hydrogen.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{CH_3[CH_2]_4CH_3} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_6H_{12}\\ (cyclohexane) + H_2} \\\\ &\\mathrm{CH_3[CH_2]_4CH_3} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_6H_6\\ (benzene) + 4H_2} \\\\ &\\mathrm{CH_3[CH_2]_5CH_3} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_6H_5CH_3\\ (toluene) + 4H_2} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Các phân đoạn còn được làm sạch lưu huỳnh bằng hydrogen (xử lí hydro): hợp chất chứa lưu huỳnh chuyển thành hydrocarbon và $\\mathrm{H_2S}$; $\\mathrm{H_2S}$ được thu hồi để sản xuất lưu huỳnh, sulfuric acid.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_5SH + H_2} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_2H_6 + H_2S}',
        },
      ],
    },
    {
      heading: 'Các sản phẩm của dầu mỏ',
      blocks: [
        {
          type: 'table',
          head: ['Nhóm sản phẩm', 'Ví dụ', 'Sử dụng'],
          rows: [
            [
              'Nhiên liệu',
              'LPG, xăng, nhiên liệu phản lực, dầu hoả, dầu diesel (DO), dầu đốt lò (FO)',
              'Giao thông, phát điện, đun nấu, công nghiệp',
            ],
            [
              'Dầu nhờn, mỡ bôi trơn',
              'Dầu động cơ, dầu thuỷ lực, mỡ bò',
              'Giảm ma sát, làm mát, chống gỉ cho máy móc',
            ],
            [
              'Sản phẩm khác',
              'Nhựa đường, sáp paraffin, dung môi',
              'Làm đường, chống thấm, nến, mĩ phẩm',
            ],
            [
              'Nguyên liệu hoá dầu',
              'Ethylene, propylene, benzene, toluene, xylene',
              'Chất dẻo (PE, PP, PVC), cao su tổng hợp, tơ sợi, chất tẩy rửa, dược phẩm',
            ],
          ],
          caption: 'Các nhóm sản phẩm của công nghiệp chế biến dầu mỏ',
        },
        {
          type: 'p',
          text: 'Dầu nhờn bị biến chất dần trong khi máy hoạt động, nên xe máy, ô tô, máy bay phải được bảo dưỡng định kì: thay dầu nhờn, lọc dầu, kiểm tra hệ thống nhiên liệu.',
        },
      ],
    },
    {
      heading: 'Chỉ số octane và cách sử dụng nhiên liệu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chỉ số octane',
          text: 'Chỉ số octane là đại lượng đặc trưng cho khả năng chống kích nổ của xăng. Quy ước: 2,2,4-trimethylpentane (isooctane) có chỉ số octane bằng $100$, heptane có chỉ số octane bằng $0$. Xăng có chỉ số octane $92$ chống kích nổ như hỗn hợp $92\\%$ isooctane và $8\\%$ heptane (theo thể tích).',
        },
        {
          type: 'p',
          text: 'Kích nổ là hiện tượng hỗn hợp xăng – không khí tự bốc cháy trước khi bugi đánh lửa, làm động cơ rung, nóng, giảm công suất và nhanh hỏng. Alkane mạch nhánh, cycloalkane và arene có chỉ số octane cao hơn alkane mạch thẳng; vì thế reforming làm tăng chỉ số octane.',
        },
        {
          type: 'list',
          items: [
            'Dùng xăng có chỉ số octane đúng khuyến cáo của nhà sản xuất động cơ (ở Việt Nam có xăng E5 RON 92, xăng RON 95…). Xăng có chỉ số thấp hơn gây kích nổ; xăng chỉ số cao hơn mức cần thiết thì lãng phí.',
            'Trước đây người ta pha chì (tetraethyl lead) để tăng chỉ số octane; chì rất độc nên Việt Nam đã ngừng dùng xăng pha chì từ năm 2001.',
            'Bảo dưỡng xe định kì, không để động cơ nổ không tải lâu, đi xe đạp, phương tiện công cộng để tiết kiệm nhiên liệu.',
            'Xăng, dầu dễ bay hơi và dễ cháy: tránh xa lửa, không hút thuốc khi đổ xăng, chứa trong can chuyên dụng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khí thải của phương tiện giao thông',
          text: 'Khí thải chứa $\\mathrm{CO}$, $\\mathrm{CO_2}$, $\\mathrm{NO_x}$, $\\mathrm{SO_2}$, hydrocarbon chưa cháy và bụi, gây ngộ độc, mưa acid, khói mù quang hoá và hiệu ứng nhà kính. Bộ chuyển đổi xúc tác trên ống xả chuyển các khí độc thành khí ít độc hơn, ví dụ $\\mathrm{2CO + 2NO \\longrightarrow 2CO_2 + N_2}$.',
        },
      ],
    },
    {
      heading: 'Dự án: Sản phẩm từ dầu mỏ quanh em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu các sản phẩm của dầu mỏ và hoá dầu trong gia đình, trường học, và cách gia đình em sử dụng nhiên liệu.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: sổ ghi chép, điện thoại để chụp ảnh nhãn sản phẩm, sách hướng dẫn sử dụng xe máy hoặc ô tô của gia đình.',
            'Liệt kê ít nhất $15$ đồ vật làm từ dầu mỏ hoặc sản phẩm hoá dầu (nhiên liệu, dầu nhờn, chai nhựa, túi nilon, sợi tổng hợp, nến…), xếp vào bốn nhóm sản phẩm.',
            'Tra sách hướng dẫn xe để biết loại xăng (chỉ số octane) và chu kì thay dầu nhờn mà nhà sản xuất khuyến cáo; so sánh với cách gia đình đang dùng.',
            'Ghi lại lượng xăng tiêu thụ trong một tuần và quãng đường đi được, tính mức tiêu thụ (lít/100 km), đề xuất cách tiết kiệm.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng phân nhóm sản phẩm kèm ảnh; nhận xét việc dùng xăng, thay dầu nhờn của gia đình so với khuyến cáo; ba đề xuất tiết kiệm nhiên liệu và giảm khí thải.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tháp chưng cất dầu mỏ',
    instruction:
      'Chọn một alkane mạch thẳng, đọc nhiệt độ sôi của nó rồi bấm vào cửa ra nơi chất đó được lấy ra khỏi tháp. Thử với $\\mathrm{C_3H_8}$, $\\mathrm{C_8H_{18}}$, $\\mathrm{C_{12}H_{26}}$, $\\mathrm{C_{18}H_{38}}$ và $\\mathrm{C_{25}H_{52}}$. Mạch carbon càng dài thì ra ở cửa cao hay thấp?',
  },
  examples: [
    {
      problem:
        'Viết phương trình hoá học của phản ứng cracking $\\mathrm{C_{16}H_{34}}$ tạo thành octane và một alkene. Cho biết sản phẩm thuộc phân đoạn nào và dùng làm gì.',
      steps: [
        'Cracking bẻ gãy mạch tạo một alkane và một alkene; tổng số nguyên tử C, H không đổi.',
        'Alkane là octane $\\mathrm{C_8H_{18}}$, alkene còn lại có $16 - 8 = 8$ nguyên tử C và $34 - 18 = 16$ nguyên tử H: $\\mathrm{C_8H_{16}}$.',
        '$\\mathrm{C_{16}H_{34}} \\xrightarrow{t^\\circ,\\ xt} \\mathrm{C_8H_{18} + C_8H_{16}}$.',
        'Hai sản phẩm có $8$ nguyên tử C, thuộc khoảng của xăng: cracking biến dầu diesel thành xăng.',
      ],
      answer:
        '$\\mathrm{C_{16}H_{34} \\longrightarrow C_8H_{18} + C_8H_{16}}$; sản phẩm dùng làm xăng.',
    },
    {
      problem:
        'Chưng cất $1\\,000$ tấn dầu thô thu được $180$ tấn xăng. Cracking $300$ tấn phân đoạn nặng, $50\\%$ khối lượng chuyển thành xăng. Tính tổng lượng xăng và tỉ lệ xăng thu được so với dầu thô.',
      steps: [
        'Xăng từ cracking: $300 \\cdot 50\\% = 150$ tấn.',
        'Tổng lượng xăng: $180 + 150 = 330$ tấn.',
        'Tỉ lệ: $\\dfrac{330}{1\\,000} \\cdot 100\\% = 33\\%$, so với $18\\%$ nếu chỉ chưng cất.',
      ],
      answer: '$330$ tấn xăng, bằng $33\\%$ khối lượng dầu thô.',
    },
    {
      problem:
        'Đốt cháy hoàn toàn $1$ kg octane $\\mathrm{C_8H_{18}}$. Tính khối lượng $\\mathrm{CO_2}$ sinh ra, làm tròn đến hàng phần trăm.',
      steps: [
        '$\\mathrm{2C_8H_{18} + 25O_2 \\longrightarrow 16CO_2 + 18H_2O}$: $1$ mol octane tạo $8$ mol $\\mathrm{CO_2}$.',
        '$n_{\\mathrm{C_8H_{18}}} = \\dfrac{1\\,000}{114} \\approx 8{,}772$ mol, nên $n_{\\mathrm{CO_2}} \\approx 70{,}18$ mol.',
        '$m_{\\mathrm{CO_2}} = 70{,}18 \\cdot 44 \\approx 3\\,088$ g $\\approx 3{,}09$ kg.',
      ],
      answer: 'Khoảng $3{,}09$ kg $\\mathrm{CO_2}$, nặng gấp ba lần lượng xăng đã đốt.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chưng cất phân đoạn dầu mỏ dựa trên sự khác nhau về',
      options: [
        'nhiệt độ sôi của các hydrocarbon.',
        'khả năng tan trong nước của các hydrocarbon.',
        'khả năng phản ứng với oxygen.',
        'màu sắc của các phân đoạn.',
      ],
      answer: 0,
      hints: ['Trong tháp, mỗi chất ngưng tụ ở đĩa có nhiệt độ thấp hơn nhiệt độ sôi của nó.'],
      solution:
        'Chưng cất phân đoạn tách các hydrocarbon theo nhiệt độ sôi: chất sôi cao ngưng tụ ở dưới, chất sôi thấp lên đỉnh tháp.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phân đoạn dầu mỏ với một ứng dụng chính của nó.',
      left: ['Khí dầu mỏ ($\\mathrm{C_1}$ – $\\mathrm{C_4}$)', 'Xăng', 'Dầu hoả', 'Cặn mazut'],
      right: [
        'Khí hoá lỏng đun nấu',
        'Nhiên liệu xe máy',
        'Nhiên liệu phản lực',
        'Sản xuất nhựa đường, dầu nhờn',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phân đoạn càng nặng thì càng nhớt, khó bay hơi.'],
      solution:
        'Khí dầu mỏ hoá lỏng thành LPG; xăng chạy động cơ xăng; dầu hoả làm nhiên liệu phản lực; cặn mazut chưng cất chân không cho dầu nhờn, nhựa đường.',
    },
    {
      type: 'text',
      prompt:
        'Hoàn thành phương trình cracking: $\\mathrm{C_{10}H_{22} \\longrightarrow C_7H_{16} + \\ ?}$. Viết công thức phân tử của alkene tạo thành.',
      accept: ['C3H6', 'propene', 'propylene', 'C₃H₆'],
      hints: ['Số nguyên tử C và H ở hai vế bằng nhau.'],
      solution:
        'Alkene có $10 - 7 = 3$ nguyên tử C và $22 - 16 = 6$ nguyên tử H: $\\mathrm{C_3H_6}$ (propylene).',
    },
    {
      type: 'number',
      prompt:
        'Reforming heptane thành toluene: $\\mathrm{C_7H_{16} \\longrightarrow C_6H_5CH_3 + \\ ?H_2}$. Một phân tử heptane giải phóng bao nhiêu phân tử $\\mathrm{H_2}$?',
      answer: 4,
      hints: [
        'Toluene có công thức phân tử $\\mathrm{C_7H_8}$.',
        'So sánh số nguyên tử H ở hai vế.',
      ],
      solution:
        'Toluene $\\mathrm{C_7H_8}$; số H mất đi là $16 - 8 = 8$, tức $4$ phân tử $\\mathrm{H_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Mục đích chính của quá trình reforming là',
      options: [
        'tăng chỉ số octane của xăng.',
        'bẻ gãy mạch dài thành mạch ngắn.',
        'tách dầu mỏ thành các phân đoạn.',
        'loại bỏ nước và muối khỏi dầu thô.',
      ],
      answer: 0,
      hints: ['Reforming không làm thay đổi số nguyên tử carbon.'],
      solution:
        'Reforming chuyển alkane mạch thẳng thành alkane mạch nhánh, cycloalkane, arene có chỉ số octane cao hơn. Bẻ gãy mạch là cracking, tách phân đoạn là chưng cất.',
    },
    {
      type: 'choice',
      prompt: 'Xăng RON 95 có khả năng chống kích nổ như hỗn hợp nào (theo thể tích)?',
      options: [
        '$95\\%$ isooctane và $5\\%$ heptane',
        '$95\\%$ heptane và $5\\%$ isooctane',
        '$95\\%$ octane mạch thẳng và $5\\%$ ethanol',
        '$95\\%$ xăng và $5\\%$ ethanol',
      ],
      answer: 0,
      hints: ['Isooctane có chỉ số octane $100$, heptane có chỉ số octane $0$.'],
      solution:
        'Chỉ số octane $95$ ứng với hỗn hợp $95\\%$ isooctane (chỉ số $100$) và $5\\%$ heptane (chỉ số $0$). Xăng E5 mới là xăng pha $5\\%$ ethanol.',
    },
    {
      type: 'number',
      prompt:
        'Một tấn dầu diesel chứa $0{,}5\\%$ lưu huỳnh. Khi làm sạch bằng hydrogen, toàn bộ lưu huỳnh chuyển thành $\\mathrm{H_2S}$. Tính khối lượng $\\mathrm{H_2S}$ (kg), làm tròn đến hàng phần trăm.',
      answer: 5.31,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        'Khối lượng lưu huỳnh là $1\\,000 \\cdot 0{,}5\\%$ kg.',
        'Cứ $32$ kg S tạo $34$ kg $\\mathrm{H_2S}$.',
      ],
      solution:
        '$m_{\\mathrm{S}} = 5$ kg; $m_{\\mathrm{H_2S}} = 5 \\cdot \\dfrac{34}{32} = 5{,}3125 \\approx 5{,}31$ kg.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các công đoạn trong nhà máy lọc dầu theo đúng thứ tự.',
      items: [
        'Chưng cất ở áp suất thường.',
        'Tách nước, muối khỏi dầu thô.',
        'Cracking, reforming các phân đoạn.',
        'Chưng cất chân không phần cặn.',
      ],
      answer: [1, 0, 3, 2],
      hints: ['Phải có cặn mazut từ chưng cất thường thì mới chưng cất chân không được.'],
      solution:
        'Xử lí sơ bộ (tách nước, muối) → chưng cất ở áp suất thường → chưng cất chân không cặn → cracking, reforming các phân đoạn.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào là nguyên liệu hoá dầu thu được từ chế biến dầu mỏ?',
      options: ['Ethylene', 'Propylene', 'Benzene', 'Glucose', 'Sodium chloride'],
      answers: [0, 1, 2],
      hints: ['Nguyên liệu hoá dầu là hydrocarbon nhỏ thu được khi cracking, reforming.'],
      solution:
        'Ethylene, propylene (từ cracking) và benzene (từ reforming) là nguyên liệu hoá dầu. Glucose và sodium chloride không phải sản phẩm của dầu mỏ.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $2{,}28$ kg octane $\\mathrm{C_8H_{18}}$. Tính khối lượng $\\mathrm{CO_2}$ sinh ra (kg).',
      answer: 7.04,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        '$M_{\\mathrm{C_8H_{18}}} = 114$ g/mol; $1$ mol octane tạo $8$ mol $\\mathrm{CO_2}$.',
      ],
      solution:
        '$n_{\\mathrm{C_8H_{18}}} = \\dfrac{2\\,280}{114} = 20$ mol, $n_{\\mathrm{CO_2}} = 160$ mol, $m = 160 \\cdot 44 = 7\\,040$ g $= 7{,}04$ kg.',
    },
  ],
  takeaways: [
    'Chưng cất phân đoạn (quá trình vật lí) tách dầu mỏ theo nhiệt độ sôi thành khí, xăng, dầu hoả, dầu diesel và cặn; cặn được chưng cất chân không.',
    'Cracking bẻ gãy mạch dài thành alkane và alkene mạch ngắn để tăng lượng xăng và lấy alkene cho hoá dầu.',
    'Reforming giữ nguyên số carbon, tạo mạch nhánh, vòng, arene để tăng chỉ số octane; làm sạch bằng hydrogen loại lưu huỳnh dưới dạng $\\mathrm{H_2S}$.',
    'Sản phẩm dầu mỏ: nhiên liệu, dầu nhờn, nhựa đường, sáp và nguyên liệu hoá dầu.',
    'Chỉ số octane đo khả năng chống kích nổ (isooctane $100$, heptane $0$); dùng đúng loại xăng, bảo dưỡng xe, tiết kiệm nhiên liệu để giảm khí thải.',
  ],
};
