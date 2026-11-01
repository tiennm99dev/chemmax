/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 5: dấu của biến thiên enthalpy, giản đồ năng lượng, tính biến thiên enthalpy theo nhiệt tạo thành và theo năng lượng liên kết, nhiệt lượng theo lượng chất.',
  intro:
    'Chương 5 trả lời một câu hỏi: phản ứng toả ra hay thu vào bao nhiêu nhiệt? Bài ôn tập này hệ thống lại biến thiên enthalpy và hai công thức tính, cho em phân loại phản ứng theo giản đồ năng lượng, luyện tập với các bài sinh tự động và làm các bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá các khái niệm: phản ứng toả nhiệt, thu nhiệt, biến thiên enthalpy chuẩn, nhiệt tạo thành chuẩn.',
    'Đọc được giản đồ năng lượng và kết luận về loại phản ứng.',
    'Tính được biến thiên enthalpy và nhiệt lượng theo lượng chất trong các bài toán thực tế.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Phản ứng toả nhiệt và phản ứng thu nhiệt',
          head: ['Đặc điểm', 'Toả nhiệt', 'Thu nhiệt'],
          rows: [
            [
              'Dấu của $\\Delta_r H^\\circ_{298}$',
              '$\\Delta_r H^\\circ_{298} < 0$',
              '$\\Delta_r H^\\circ_{298} > 0$',
            ],
            [
              'Trên giản đồ',
              'Mức sản phẩm thấp hơn mức chất đầu',
              'Mức sản phẩm cao hơn mức chất đầu',
            ],
            ['Ví dụ', 'Đốt cháy nhiên liệu, tôi vôi', 'Nung đá vôi, nhiệt phân $\\mathrm{KMnO_4}$'],
          ],
        },
        {
          type: 'table',
          caption: 'Hai cách tính biến thiên enthalpy chuẩn',
          head: ['Theo', 'Công thức', 'Chú ý'],
          rows: [
            [
              'Nhiệt tạo thành',
              '$\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(\\text{sp}) - \\sum \\Delta_f H^\\circ_{298}(\\text{cđ})$',
              'Sản phẩm trừ chất đầu; đơn chất bền có $\\Delta_f H^\\circ_{298} = 0$',
            ],
            [
              'Năng lượng liên kết',
              '$\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{cđ}) - \\sum E_b(\\text{sp})$',
              'Chất đầu trừ sản phẩm; các chất đều ở thể khí',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhiệt lượng theo lượng chất',
          text: 'Giá trị $\\Delta_r H^\\circ_{298}$ ứng đúng với số mol theo hệ số của phương trình. Với lượng chất khác, nhiệt lượng tỉ lệ thuận với số mol. Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng của chương. Đáp án là số, dùng dấu phẩy thập phân như $28{,}3$ và viết cả dấu trừ khi kết quả âm. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Phân loại phản ứng theo giản đồ',
    instruction:
      'Mỗi thẻ có một phương trình và giản đồ năng lượng của nó, không kèm số liệu. Đọc độ cao của hai mức rồi xếp thẻ vào ô phản ứng toả nhiệt hoặc phản ứng thu nhiệt.',
  },
  examples: [
    {
      problem:
        'Phản ứng $\\mathrm{CH_4(g)} + \\mathrm{2O_2(g)} \\rightarrow \\mathrm{CO_2(g)} + \\mathrm{2H_2O(l)}$ có $\\Delta_r H^\\circ_{298} = -890{,}3$ kJ. Biết $\\Delta_f H^\\circ_{298}$ của $\\mathrm{CO_2(g)}$ và $\\mathrm{H_2O(l)}$ lần lượt là $-393{,}5$ và $-285{,}8$ kJ/mol. Tính nhiệt tạo thành chuẩn của $\\mathrm{CH_4(g)}$.',
      steps: [
        'Tổng nhiệt tạo thành của sản phẩm: $-393{,}5 + 2 \\cdot (-285{,}8) = -965{,}1$ kJ.',
        'Gọi $x$ là $\\Delta_f H^\\circ_{298}(\\mathrm{CH_4, g})$; $\\mathrm{O_2}$ có $\\Delta_f H^\\circ_{298} = 0$, nên $-890{,}3 = -965{,}1 - x$.',
        'Suy ra $x = -965{,}1 + 890{,}3 = -74{,}8$.',
      ],
      answer: '$\\Delta_f H^\\circ_{298}(\\mathrm{CH_4, g}) = -74{,}8$ kJ/mol.',
    },
    {
      problem:
        'Một bình gas chứa $12$ kg hỗn hợp propane và butane với tỉ lệ số mol $1 : 2$. Đốt cháy $1$ mol propane có $\\Delta_r H^\\circ_{298} = -2\\,220$ kJ, đốt cháy $1$ mol butane có $\\Delta_r H^\\circ_{298} = -2\\,874$ kJ. Tính nhiệt lượng toả ra khi đốt cháy hết bình gas. Một hộ gia đình cần $10\\,000$ kJ nhiệt mỗi ngày, hiệu suất hấp thụ nhiệt $80\\%$. Sau khoảng bao nhiêu ngày thì dùng hết bình gas?',
      steps: [
        'Gọi số mol propane là $x$, butane là $2x$: $44x + 58 \\cdot 2x = 12\\,000$, nên $x = 75$. Có $75$ mol propane và $150$ mol butane.',
        'Nhiệt lượng toả ra: $75 \\cdot 2\\,220 + 150 \\cdot 2\\,874 = 597\\,600$ kJ.',
        'Mỗi ngày cần đốt lượng gas toả ra $10\\,000 : 0{,}8 = 12\\,500$ kJ.',
        'Số ngày: $597\\,600 : 12\\,500 \\approx 47{,}8$ ngày.',
      ],
      answer: 'Toả ra $597\\,600$ kJ; dùng hết sau khoảng $48$ ngày.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Cho $\\text{P(s, đỏ)} \\rightarrow \\text{P(s, trắng)}$, $\\Delta_r H^\\circ_{298} = +17{,}6$ kJ. Phát biểu nào đúng?',
      options: [
        'Phản ứng thu nhiệt, P đỏ bền hơn P trắng',
        'Phản ứng thu nhiệt, P trắng bền hơn P đỏ',
        'Phản ứng toả nhiệt, P đỏ bền hơn P trắng',
        'Phản ứng toả nhiệt, P trắng bền hơn P đỏ',
      ],
      answer: 0,
      hints: [
        'Xét dấu của $\\Delta_r H^\\circ_{298}$ trước.',
        'Dạng có năng lượng thấp hơn thì bền hơn.',
      ],
      solution:
        '$\\Delta_r H^\\circ_{298} > 0$ nên phản ứng thu nhiệt: P trắng có năng lượng cao hơn P đỏ, do đó P đỏ bền hơn.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{CO(g)} + \\frac{1}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}$ có $\\Delta_r H^\\circ_{298} = -283{,}0$ kJ. Biết $\\Delta_f H^\\circ_{298}(\\mathrm{CO_2, g}) = -393{,}5$ kJ/mol, tính nhiệt tạo thành chuẩn của $\\mathrm{CO(g)}$ theo kJ/mol. Viết cả dấu của kết quả.',
      answer: -110.5,
      tolerance: 0.05,
      unit: 'kJ/mol',
      hints: [
        'Đơn chất $\\mathrm{O_2}$ có nhiệt tạo thành bằng $0$.',
        'Đặt ẩn: $-283{,}0 = -393{,}5 - x$.',
      ],
      solution: '$-283{,}0 = -393{,}5 - x$, nên $x = -393{,}5 + 283{,}0 = -110{,}5$ kJ/mol.',
    },
    {
      type: 'number',
      prompt:
        'Oxi hoá hoàn toàn $1$ mol glucose ($M = 180$ g/mol) toả ra $2\\,803{,}0$ kJ. Một bệnh nhân được truyền $500$ mL dung dịch glucose $5\\%$, khối lượng riêng $1{,}02$ g/mL. Năng lượng tối đa từ lượng glucose này là bao nhiêu kJ? Làm tròn đến hai chữ số thập phân.',
      answer: 397.09,
      tolerance: 0.02,
      unit: 'kJ',
      hints: [
        'Tính khối lượng dung dịch, rồi khối lượng glucose.',
        'Khối lượng glucose là $500 \\cdot 1{,}02 \\cdot 5\\%$.',
      ],
      solution:
        'Khối lượng glucose: $500 \\cdot 1{,}02 \\cdot 5\\% = 25{,}5$ g. Năng lượng: $\\dfrac{25{,}5 \\cdot 2\\,803{,}0}{180} \\approx 397{,}09$ kJ.',
    },
    {
      type: 'choice',
      prompt:
        'Cho $E_b$ (kJ/mol): C–H $418$, C–C $346$, C=C $612$. Biến thiên enthalpy của phản ứng $\\mathrm{C_3H_8(g)} \\rightarrow \\mathrm{CH_4(g)} + \\mathrm{C_2H_4(g)}$ là',
      options: ['$+103$ kJ', '$-103$ kJ', '$+80$ kJ', '$-80$ kJ'],
      answer: 2,
      hints: [
        '$\\mathrm{C_3H_8}$ có $2$ liên kết C–C và $8$ liên kết C–H.',
        'Sản phẩm có $1$ liên kết C=C và tổng cộng $8$ liên kết C–H.',
      ],
      solution:
        '$\\sum E_b(\\text{cđ}) = 2 \\cdot 346 + 8 \\cdot 418 = 4\\,036$ kJ; $\\sum E_b(\\text{sp}) = 612 + 8 \\cdot 418 = 3\\,956$ kJ. Vậy $\\Delta_r H^\\circ_{298} = +80$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Phân tử acetone $\\mathrm{CH_3COCH_3}$ có $2$ liên kết C–C, $6$ liên kết C–H và $1$ liên kết C=O. Dùng $E_b$ (kJ/mol): C–C $346$, C–H $418$, C=O $732$, O=O $494$, O–H $459$, tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $\\mathrm{CH_3COCH_3(g)} + \\mathrm{4O_2(g)} \\rightarrow \\mathrm{3CO_2(g)} + \\mathrm{3H_2O(g)}$. Viết cả dấu của kết quả.',
      answer: -1238,
      unit: 'kJ',
      hints: [
        'Đếm liên kết C=O trong $3\\mathrm{CO_2}$ và O–H trong $3\\mathrm{H_2O}$.',
        'Sản phẩm có $6$ liên kết C=O và $6$ liên kết O–H.',
      ],
      solution:
        '$\\sum E_b(\\text{cđ}) = 2 \\cdot 346 + 6 \\cdot 418 + 732 + 4 \\cdot 494 = 5\\,908$ kJ; $\\sum E_b(\\text{sp}) = 6 \\cdot 732 + 6 \\cdot 459 = 7\\,146$ kJ. Vậy $\\Delta_r H^\\circ_{298} = 5\\,908 - 7\\,146 = -1\\,238$ kJ.',
    },
    {
      type: 'choice',
      prompt:
        'Đốt $1$ mol ethanol ($M = 46$ g/mol) có $\\Delta_r H^\\circ_{298} = -1\\,365$ kJ; đốt $1$ mol tristearin ($M = 890$ g/mol) có $\\Delta_r H^\\circ_{298} = -35\\,807$ kJ. Khi đốt cùng $1$ kg, chất nào toả nhiều nhiệt hơn?',
      options: [
        'Ethanol, vì khối lượng mol nhỏ hơn nên có nhiều mol hơn',
        'Tristearin, khoảng $40\\,233$ kJ so với khoảng $29\\,674$ kJ của ethanol',
        'Hai chất toả nhiệt như nhau',
      ],
      answer: 1,
      hints: [
        'Tính nhiệt lượng cho $1\\,000$ g: lấy $1\\,000 : M$ rồi nhân với độ lớn của $\\Delta_r H^\\circ_{298}$.',
      ],
      solution:
        'Ethanol: $\\dfrac{1\\,000}{46} \\cdot 1\\,365 \\approx 29\\,674$ kJ. Tristearin: $\\dfrac{1\\,000}{890} \\cdot 35\\,807 \\approx 40\\,233$ kJ. Tristearin toả nhiều nhiệt hơn.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{C_2H_4(g)} + \\mathrm{H_2(g)} \\rightarrow \\mathrm{C_2H_6(g)}$ có $\\Delta_r H^\\circ_{298} = -137{,}0$ kJ. Biết $\\Delta_f H^\\circ_{298}(\\mathrm{C_2H_6, g}) = -84{,}7$ kJ/mol, tính nhiệt tạo thành chuẩn của $\\mathrm{C_2H_4(g)}$ theo kJ/mol. Kết quả dương thì viết không cần dấu.',
      answer: 52.3,
      tolerance: 0.05,
      unit: 'kJ/mol',
      hints: ['$\\mathrm{H_2}$ là đơn chất bền.', 'Đặt ẩn: $-137{,}0 = -84{,}7 - x$.'],
      solution: '$-137{,}0 = -84{,}7 - x$, nên $x = -84{,}7 + 137{,}0 = +52{,}3$ kJ/mol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Phản ứng có $\\Delta_r H^\\circ_{298} < 0$ là phản ứng toả nhiệt',
        'Mọi phản ứng cần đun nóng lúc đầu đều là phản ứng thu nhiệt',
        'Nhiệt tạo thành chuẩn của $\\mathrm{O_2(g)}$ bằng $0$',
        'Tính $\\Delta_r H^\\circ_{298}$ theo năng lượng liên kết áp dụng cho phản ứng mà các chất đều ở thể khí',
      ],
      answers: [0, 2, 3],
      hints: ['Đốt than phải mồi lửa. Than cháy toả nhiệt hay thu nhiệt?'],
      solution:
        'Phát biểu thứ hai sai: đốt than cần mồi lửa nhưng là phản ứng toả nhiệt. Ba phát biểu còn lại đúng.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các bước tính $\\Delta_r H^\\circ_{298}$ theo năng lượng liên kết của một phản ứng các chất ở thể khí.',
      items: [
        'Viết công thức cấu tạo của các chất và đếm số liên kết mỗi loại',
        'Nhân số liên kết với năng lượng liên kết, tính tổng cho chất đầu',
        'Tính tổng năng lượng liên kết cho sản phẩm',
        'Lấy tổng của chất đầu trừ tổng của sản phẩm',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Muốn có tổng năng lượng thì phải biết số liên kết trước.'],
      solution:
        'Đếm liên kết, tính tổng của chất đầu, tính tổng của sản phẩm, rồi lấy chất đầu trừ sản phẩm.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $12{,}395$ L khí propane ở điều kiện chuẩn toả ra bao nhiêu kJ nhiệt? Biết đốt $1$ mol propane có $\\Delta_r H^\\circ_{298} = -2\\,220$ kJ.',
      answer: 1110,
      unit: 'kJ',
      hints: ['$n = 12{,}395 : 24{,}79$.'],
      solution:
        '$n = 12{,}395 : 24{,}79 = 0{,}5$ mol. Nhiệt toả ra: $0{,}5 \\cdot 2\\,220 = 1\\,110$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Theo giản đồ năng lượng, chất đầu của một phản ứng ở mức $-84{,}7$ kJ và sản phẩm ở mức $-1\\,644{,}4$ kJ (so với các đơn chất bền). Tính $\\Delta_r H^\\circ_{298}$ của phản ứng theo kJ. Viết cả dấu của kết quả.',
      answer: -1559.7,
      tolerance: 0.05,
      unit: 'kJ',
      hints: ['$\\Delta_r H^\\circ_{298}$ bằng mức sản phẩm trừ mức chất đầu.'],
      solution: '$\\Delta_r H^\\circ_{298} = -1\\,644{,}4 - (-84{,}7) = -1\\,559{,}7$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Dựa vào số liệu của ví dụ bình gas: một hộ dùng $20\\,000$ kJ nhiệt mỗi ngày với hiệu suất hấp thụ $80\\%$. Bình gas toả ra $597\\,600$ kJ dùng được khoảng bao nhiêu ngày? Làm tròn đến một chữ số thập phân.',
      answer: 23.9,
      tolerance: 0.05,
      unit: 'ngày',
      hints: ['Nhiệt lượng đốt ra mỗi ngày phải lớn hơn nhiệt lượng cần: chia cho $0{,}8$.'],
      solution:
        'Mỗi ngày cần đốt: $20\\,000 : 0{,}8 = 25\\,000$ kJ. Số ngày: $597\\,600 : 25\\,000 \\approx 23{,}9$ ngày.',
    },
  ],
  takeaways: [
    '$\\Delta_r H^\\circ_{298} < 0$ là toả nhiệt, $\\Delta_r H^\\circ_{298} > 0$ là thu nhiệt; trên giản đồ, xem mức sản phẩm thấp hay cao hơn mức chất đầu.',
    'Theo nhiệt tạo thành, lấy sản phẩm trừ chất đầu; theo năng lượng liên kết, lấy chất đầu trừ sản phẩm.',
    'Nhiệt lượng tỉ lệ thuận với lượng chất phản ứng; ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
  ],
};
