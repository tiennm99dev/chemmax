/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Năng lượng hoạt hoá, phương trình Arrhenius liên hệ hằng số tốc độ với năng lượng hoạt hoá và nhiệt độ, và vai trò làm giảm năng lượng hoạt hoá của chất xúc tác.',
  intro:
    'Hỗn hợp khí hydrogen và oxygen để ở nhiệt độ thường hầu như không phản ứng, dù phản ứng toả rất nhiều nhiệt. Chỉ cần thêm một ít bột platinum, phản ứng xảy ra rất mãnh liệt. Vì sao phản ứng toả nhiệt lại phải vượt qua một "rào cản", và chất xúc tác đã làm gì với rào cản đó?',
  objectives: [
    'Nêu được khái niệm năng lượng hoạt hoá và biểu diễn được nó trên giản đồ năng lượng.',
    'Viết được phương trình Arrhenius và nêu được ảnh hưởng của năng lượng hoạt hoá, nhiệt độ đến hằng số tốc độ.',
    'Tính được hằng số tốc độ hoặc năng lượng hoạt hoá từ số liệu ở hai nhiệt độ.',
    'Giải thích được vai trò của chất xúc tác bằng năng lượng hoạt hoá.',
  ],
  sections: [
    {
      heading: 'Năng lượng hoạt hoá',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Năng lượng hoạt hoá',
          text: 'Năng lượng hoạt hoá ($E_a$) là năng lượng tối thiểu mà các hạt chất đầu cần có để va chạm giữa chúng gây ra phản ứng hoá học. Đơn vị thường dùng là kJ/mol.',
        },
        {
          type: 'p',
          text: 'Các phân tử luôn chuyển động và va chạm, nhưng chỉ những va chạm đủ năng lượng và đúng hướng mới phá vỡ được liên kết cũ để tạo liên kết mới; đó là các va chạm hiệu quả. Trên giản đồ năng lượng, $E_a$ là độ cao của đỉnh so với mức chất đầu. $E_a$ càng lớn thì càng ít va chạm hiệu quả và phản ứng càng chậm.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng nhầm $E_a$ với $\\Delta_r H$',
          text: '$\\Delta_r H$ là chênh lệch giữa mức sản phẩm và mức chất đầu; nó cho biết phản ứng toả hay thu nhiệt. $E_a$ là độ cao của rào cản; nó quyết định phản ứng nhanh hay chậm. Một phản ứng toả nhiệt mạnh vẫn có thể rất chậm nếu $E_a$ lớn.',
        },
      ],
    },
    {
      heading: 'Phương trình Arrhenius',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1889, Arrhenius đưa ra phương trình liên hệ hằng số tốc độ phản ứng $k$ với năng lượng hoạt hoá và nhiệt độ:',
        },
        { type: 'tex', tex: 'k = A \\cdot \\mathrm{e}^{-\\frac{E_a}{RT}}' },
        {
          type: 'p',
          text: 'Trong đó $A$ là hằng số đặc trưng cho mỗi phản ứng (thừa số Arrhenius); $R = 8{,}314$ J/(mol·K) là hằng số khí; $T$ là nhiệt độ tuyệt đối (K); $E_a$ tính bằng J/mol. Từ phương trình thấy: $E_a$ càng lớn thì $k$ càng nhỏ; $T$ càng cao thì $k$ càng lớn.',
        },
        {
          type: 'p',
          text: 'Viết phương trình cho hai nhiệt độ $T_1$, $T_2$ rồi chia hai vế, $A$ được khử đi:',
        },
        {
          type: 'tex',
          tex: '\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right)',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hai lỗi hay gặp',
          text: "Đổi $E_a$ từ kJ/mol sang J/mol, và đổi nhiệt độ từ $^\\circ\\mathrm{C}$ sang K trước khi thay số. Dạng này cũng giải thích quy tắc van 't Hoff: với $E_a \\approx 50$ kJ/mol, tăng từ $298$ K lên $308$ K làm $k$ tăng khoảng $2$ lần.",
        },
      ],
    },
    {
      heading: 'Vai trò của chất xúc tác',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chất xúc tác làm giảm năng lượng hoạt hoá',
          text: 'Chất xúc tác làm tăng tốc độ phản ứng vì nó tạo ra con đường phản ứng mới có năng lượng hoạt hoá thấp hơn. Sau phản ứng, chất xúc tác được bảo toàn về chất và lượng.',
        },
        {
          type: 'p',
          text: 'Chất xúc tác chỉ hạ đỉnh rào cản, không đổi mức chất đầu và mức sản phẩm, nên không làm thay đổi $\\Delta_r H$ của phản ứng. Xúc tác làm phản ứng xảy ra ở nhiệt độ thấp hơn, tiết kiệm năng lượng; đây là lí do xúc tác được dùng trong tổng hợp ammonia, bộ chuyển đổi khí thải ô tô và trong cơ thể sống (các enzyme).',
        },
        {
          type: 'p',
          text: 'Khi $A$ gần như không đổi, tỉ số hằng số tốc độ có và không có xúc tác ở cùng nhiệt độ $T$ là:',
        },
        {
          type: 'tex',
          tex: '\\dfrac{k_{xt}}{k} = \\mathrm{e}^{\\frac{E_a - E_{a,xt}}{RT}}',
        },
      ],
    },
    {
      heading: 'Dự án: Đo năng lượng hoạt hoá bằng viên sủi',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: ước lượng năng lượng hoạt hoá của một quá trình từ thời gian phản ứng ở hai nhiệt độ. Thời gian càng ngắn thì tốc độ càng lớn, nên có thể lấy $\\dfrac{k_2}{k_1} \\approx \\dfrac{t_1}{t_2}$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: viên sủi vitamin C (cùng loại, bẻ thành các phần bằng nhau), cốc, nước, nhiệt kế, đồng hồ bấm giây.',
            'An toàn: chỉ dùng nước ấm không quá $50\\ ^\\circ\\mathrm{C}$, có người lớn hỗ trợ khi pha nước nóng.',
            'Ở khoảng $15\\ ^\\circ\\mathrm{C}$, $25\\ ^\\circ\\mathrm{C}$ và $40\\ ^\\circ\\mathrm{C}$, thả một phần viên sủi vào cùng thể tích nước, đo thời gian đến khi hết sủi bọt. Lặp lại mỗi nhiệt độ $3$ lần.',
            'Dùng công thức $\\ln\\dfrac{t_1}{t_2} = \\dfrac{E_a}{R}\\left(\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right)$ để tính $E_a$ cho từng cặp nhiệt độ.',
            'Thử thêm vai trò xúc tác: nhỏ dung dịch $\\mathrm{H_2O_2}$ $3\\%$ vào lát khoai tây sống, so sánh lượng bọt với $\\mathrm{H_2O_2}$ để riêng.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu, giá trị $E_a$ ước lượng, nhận xét độ lệch giữa các cặp nhiệt độ. Lưu ý đây chỉ là giá trị ước lượng vì viên sủi vừa tan vừa phản ứng. Giải thích vai trò của enzyme trong khoai tây.',
        },
      ],
    },
  ],
  explore: {
    title: 'Rào cản năng lượng và hằng số tốc độ',
    instruction:
      'Kéo thanh $E_a$ và nhiệt độ, thêm chất xúc tác và theo dõi $k$. Bấm "Ghim trạng thái này" rồi so sánh: tăng $E_a$ thêm $10$ kJ/mol và tăng nhiệt độ thêm $10$ K, điều nào làm $k$ đổi nhiều hơn? Xúc tác có làm đổi $\\Delta H$ không?',
  },
  examples: [
    {
      problem:
        'Phản ứng $\\mathrm{2NOCl(g)} \\rightarrow \\mathrm{2NO(g)} + \\mathrm{Cl_2(g)}$ có $E_a = 100$ kJ/mol. Ở $350$ K, hằng số tốc độ là $k_1 = 8 \\cdot 10^{-6}$ L/(mol·s). Tính hằng số tốc độ ở $400$ K.',
      steps: [
        '$\\ln\\dfrac{k_2}{k_1} = \\dfrac{100\\,000}{8{,}314}\\left(\\dfrac{1}{350} - \\dfrac{1}{400}\\right) \\approx 4{,}30$.',
        'Suy ra $\\dfrac{k_2}{k_1} = \\mathrm{e}^{4{,}30} \\approx 73{,}3$.',
        '$k_2 \\approx 73{,}3 \\cdot 8 \\cdot 10^{-6} \\approx 5{,}87 \\cdot 10^{-4}$ L/(mol·s).',
      ],
      answer: '$k_2 \\approx 5{,}87 \\cdot 10^{-4}$ L/(mol·s).',
    },
    {
      problem:
        'Khi tăng nhiệt độ từ $300$ K lên $310$ K, tốc độ một phản ứng tăng $3$ lần. Tính năng lượng hoạt hoá của phản ứng.',
      steps: [
        '$\\ln 3 = \\dfrac{E_a}{8{,}314}\\left(\\dfrac{1}{300} - \\dfrac{1}{310}\\right)$.',
        '$E_a = \\dfrac{8{,}314 \\cdot \\ln 3}{\\frac{1}{300} - \\frac{1}{310}} \\approx 84\\,944$ J/mol.',
      ],
      answer: '$E_a \\approx 85$ kJ/mol.',
    },
    {
      problem:
        'Một phản ứng ở $500\\ ^\\circ\\mathrm{C}$ có $E_a = 55{,}4$ kJ/mol khi không có xúc tác và $13{,}5$ kJ/mol khi có xúc tác. Xúc tác làm tốc độ phản ứng tăng bao nhiêu lần (coi $A$ không đổi)?',
      steps: [
        'Đổi nhiệt độ: $T = 500 + 273 = 773$ K.',
        '$\\ln\\dfrac{k_{xt}}{k} = \\dfrac{(55{,}4 - 13{,}5) \\cdot 1\\,000}{8{,}314 \\cdot 773} \\approx 6{,}52$.',
        '$\\dfrac{k_{xt}}{k} = \\mathrm{e}^{6{,}52} \\approx 678$.',
      ],
      answer: 'Tốc độ phản ứng tăng khoảng $678$ lần.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Năng lượng hoạt hoá là gì?',
      options: [
        'Nhiệt lượng toả ra của phản ứng.',
        'Năng lượng tối thiểu mà các hạt cần có để va chạm gây ra phản ứng.',
        'Tổng năng lượng liên kết của sản phẩm.',
        'Năng lượng mà chất xúc tác cung cấp cho phản ứng.',
      ],
      answer: 1,
      hints: ['Đó là rào cản phải vượt qua, không phải chênh lệch giữa hai mức đầu và cuối.'],
      solution:
        'Năng lượng hoạt hoá là năng lượng tối thiểu để va chạm giữa các hạt chất đầu trở thành va chạm hiệu quả.',
    },
    {
      type: 'choice',
      prompt: 'Theo phương trình Arrhenius, ở cùng nhiệt độ, phản ứng có $E_a$ lớn hơn thì',
      options: [
        'hằng số tốc độ lớn hơn.',
        'hằng số tốc độ nhỏ hơn.',
        'hằng số tốc độ không đổi.',
        'toả nhiệt nhiều hơn.',
      ],
      answer: 1,
      hints: ['Xem dấu âm trên số mũ của $\\mathrm{e}$.'],
      solution:
        '$k = A \\cdot \\mathrm{e}^{-E_a/RT}$: $E_a$ càng lớn thì số mũ càng âm và $k$ càng nhỏ.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{2N_2O_5(g)} \\rightarrow \\mathrm{4NO_2(g)} + \\mathrm{O_2(g)}$ ở $45\\ ^\\circ\\mathrm{C}$ có $k_1 = 8{,}17 \\cdot 10^{-3}$ s⁻¹ và $E_a = 103{,}5$ kJ/mol. Tính hằng số tốc độ ở $65\\ ^\\circ\\mathrm{C}$ (đơn vị s⁻¹, làm tròn đến ba chữ số có nghĩa).',
      answer: 0.0828,
      tolerance: 0.001,
      hints: [
        'Đổi nhiệt độ: $T_1 = 318$ K, $T_2 = 338$ K.',
        'Tính $\\ln\\dfrac{k_2}{k_1}$ rồi suy ra tỉ số.',
      ],
      solution:
        '$\\ln\\dfrac{k_2}{k_1} = \\dfrac{103\\,500}{8{,}314}\\left(\\dfrac{1}{318} - \\dfrac{1}{338}\\right) \\approx 2{,}316$, nên $\\dfrac{k_2}{k_1} \\approx 10{,}14$ và $k_2 \\approx 0{,}0828$ s⁻¹.',
    },
    {
      type: 'number',
      prompt:
        'Tốc độ một phản ứng tăng gấp đôi khi nhiệt độ tăng từ $298$ K lên $308$ K. Tính năng lượng hoạt hoá của phản ứng.',
      answer: 52.9,
      tolerance: 0.5,
      unit: 'kJ/mol',
      hints: [
        'Thay $\\dfrac{k_2}{k_1} = 2$ vào dạng hai nhiệt độ.',
        'Kết quả tính được theo J/mol, đổi sang kJ/mol.',
      ],
      solution:
        '$E_a = \\dfrac{8{,}314 \\cdot \\ln 2}{\\frac{1}{298} - \\frac{1}{308}} \\approx 52\\,900$ J/mol $\\approx 52{,}9$ kJ/mol.',
    },
    {
      type: 'number',
      prompt:
        'Một phản ứng có $E_a = 60$ kJ/mol. Hằng số tốc độ tăng bao nhiêu lần khi nhiệt độ tăng từ $300$ K lên $350$ K?',
      answer: 31.1,
      tolerance: 0.5,
      hints: ['Đổi $E_a$ sang J/mol trước khi thay số.'],
      solution:
        '$\\ln\\dfrac{k_2}{k_1} = \\dfrac{60\\,000}{8{,}314}\\left(\\dfrac{1}{300} - \\dfrac{1}{350}\\right) \\approx 3{,}44$, nên tỉ số khoảng $31{,}1$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Ở $298$ K, chất xúc tác làm năng lượng hoạt hoá của một phản ứng giảm $25$ kJ/mol. Coi $A$ không đổi, tốc độ phản ứng tăng khoảng bao nhiêu lần? (làm tròn đến hàng nghìn)',
      answer: 24000,
      tolerance: 500,
      hints: [
        'Dùng tỉ số $\\dfrac{k_{xt}}{k}$ với hiệu hai năng lượng hoạt hoá là $25\\,000$ J/mol.',
      ],
      solution:
        '$\\ln\\dfrac{k_{xt}}{k} = \\dfrac{25\\,000}{8{,}314 \\cdot 298} \\approx 10{,}09$, nên tỉ số khoảng $24\\,000$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Một phản ứng toả nhiệt có $\\Delta_r H = -40$ kJ/mol và năng lượng hoạt hoá của chiều thuận là $100$ kJ/mol. Năng lượng hoạt hoá của chiều nghịch là bao nhiêu?',
      answer: 140,
      unit: 'kJ/mol',
      hints: ['Vẽ giản đồ: từ mức sản phẩm lên đến đỉnh.'],
      solution:
        'Mức sản phẩm thấp hơn chất đầu $40$ kJ/mol, nên từ sản phẩm lên đỉnh là $100 + 40 = 140$ kJ/mol.',
    },
    {
      type: 'choice',
      prompt:
        'Ozone bị phá huỷ theo hai giai đoạn: $\\mathrm{Cl} + \\mathrm{O_3} \\rightarrow \\mathrm{ClO} + \\mathrm{O_2}$ và $\\mathrm{ClO} + \\mathrm{O_3} \\rightarrow \\mathrm{Cl} + \\mathrm{2O_2}$. Chất xúc tác của quá trình là',
      options: ['$\\mathrm{O_3}$', '$\\mathrm{O_2}$', '$\\mathrm{Cl}$', '$\\mathrm{ClO}$'],
      answer: 2,
      hints: ['Chất xúc tác tham gia giai đoạn đầu và được tái tạo ở cuối quá trình.'],
      solution:
        'Cl tham gia giai đoạn 1 và được tái tạo ở giai đoạn 2 nên là chất xúc tác; ClO chỉ là chất trung gian.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về chất xúc tác?',
      options: [
        'Làm giảm năng lượng hoạt hoá của phản ứng.',
        'Làm thay đổi biến thiên enthalpy của phản ứng.',
        'Được bảo toàn về chất và lượng sau phản ứng.',
        'Làm tăng hằng số tốc độ của phản ứng.',
      ],
      answers: [0, 2, 3],
      hints: ['Trên giản đồ, chất xúc tác chỉ thay đổi đỉnh, không đổi hai đầu.'],
      solution:
        'Xúc tác hạ rào cản năng lượng nên $k$ tăng; xúc tác không bị tiêu hao. Mức chất đầu và sản phẩm không đổi nên $\\Delta_r H$ không đổi.',
    },
  ],
  takeaways: [
    '$E_a$ là năng lượng tối thiểu để có va chạm hiệu quả, là độ cao rào cản trên giản đồ năng lượng.',
    'Phương trình Arrhenius: $k = A \\cdot \\mathrm{e}^{-E_a/RT}$; $E_a$ nhỏ và $T$ cao làm $k$ lớn.',
    'Ở hai nhiệt độ: $\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right)$, với $E_a$ theo J/mol và $T$ theo K.',
    'Chất xúc tác tạo con đường có $E_a$ thấp hơn, làm tăng tốc độ phản ứng mà không đổi $\\Delta_r H$.',
  ],
};
