/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nội dung thuyết cấu tạo hoá học, các dạng công thức cấu tạo, hiện tượng đồng phân, đồng đẳng và cách viết đồng phân cấu tạo.',
  intro:
    'Số hợp chất hữu cơ đã biết nhiều hơn hẳn số hợp chất vô cơ, dù chúng được xây chủ yếu từ vài nguyên tố. Ethanol là chất lỏng có trong đồ uống có cồn, còn dimethyl ether là chất khí dùng làm nhiên liệu, thế mà cả hai đều có công thức $\\mathrm{C_2H_6O}$. Điều gì khiến chúng khác nhau?',
  objectives: [
    'Trình bày được nội dung cơ bản của thuyết cấu tạo hoá học.',
    'Viết được công thức cấu tạo ở các dạng đầy đủ, thu gọn và khung phân tử.',
    'Nêu được khái niệm đồng phân, phân loại được đồng phân cấu tạo và viết được đồng phân cấu tạo của các phân tử đơn giản.',
    'Nêu được khái niệm đồng đẳng và nhận ra các chất đồng đẳng của nhau.',
  ],
  sections: [
    {
      heading: 'Thuyết cấu tạo hoá học',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng hoá trị và theo một trật tự nhất định, gọi là cấu tạo hoá học. Thay đổi trật tự liên kết sẽ tạo ra chất khác.',
            'Carbon có hoá trị IV. Nguyên tử carbon không những liên kết với nguyên tử của nguyên tố khác mà còn liên kết với nhau tạo thành mạch carbon: mạch hở không phân nhánh, mạch hở phân nhánh hoặc mạch vòng.',
            'Tính chất của chất phụ thuộc vào thành phần phân tử (bản chất, số lượng các nguyên tử) và cấu tạo hoá học (thứ tự liên kết các nguyên tử).',
          ],
        },
        {
          type: 'table',
          caption: 'Hai chất cùng công thức $\\mathrm{C_2H_6O}$, khác cấu tạo',
          head: ['Đặc điểm', 'Ethanol', 'Dimethyl ether'],
          rows: [
            ['Công thức cấu tạo', '$\\mathrm{CH_3-CH_2-OH}$', '$\\mathrm{CH_3-O-CH_3}$'],
            [
              'Trạng thái ở điều kiện thường',
              'Lỏng, sôi ở $78{,}3\\,^\\circ\\mathrm{C}$',
              'Khí, sôi ở $-24\\,^\\circ\\mathrm{C}$',
            ],
            ['Tan trong nước', 'Tan vô hạn', 'Ít tan hơn nhiều'],
            ['Với sodium', 'Giải phóng khí hydrogen', 'Không phản ứng'],
          ],
        },
        {
          type: 'p',
          text: 'Thành phần cũng quyết định tính chất: $\\mathrm{CH_4}$ là khí dễ cháy, còn $\\mathrm{CCl_4}$ là chất lỏng không cháy.',
        },
      ],
    },
    {
      heading: 'Công thức cấu tạo',
      blocks: [
        {
          type: 'p',
          text: 'Công thức cấu tạo biểu diễn thứ tự và cách thức liên kết giữa các nguyên tử trong phân tử. Có ba dạng thường dùng. Em hãy chọn từng chất và so sánh.',
        },
        { type: 'widget', name: 'cac-dang-cong-thuc' },
      ],
    },
    {
      heading: 'Đồng phân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng phân',
          text: 'Những hợp chất hữu cơ khác nhau nhưng có cùng công thức phân tử được gọi là các chất đồng phân của nhau.',
        },
        {
          type: 'table',
          caption: 'Các loại đồng phân cấu tạo',
          head: ['Khác nhau ở', 'Ví dụ'],
          rows: [
            ['Mạch carbon', '$\\mathrm{CH_3-CH_2-CH_2-CH_3}$ và $\\mathrm{CH_3-CH(CH_3)-CH_3}$'],
            ['Loại nhóm chức', '$\\mathrm{CH_3-CH_2-OH}$ và $\\mathrm{CH_3-O-CH_3}$'],
            ['Vị trí nhóm chức', '$\\mathrm{CH_3-CH_2-CH_2-OH}$ và $\\mathrm{CH_3-CH(OH)-CH_3}$'],
          ],
        },
        {
          type: 'p',
          text: 'Ngoài đồng phân cấu tạo còn có đồng phân lập thể, trong đó các nguyên tử có cùng thứ tự liên kết nhưng sắp xếp khác nhau trong không gian. Em sẽ gặp đồng phân hình học ở bài alkene.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Uốn mạch không tạo chất mới',
          text: 'Công thức cấu tạo chỉ cho biết thứ tự liên kết. $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ viết thẳng hay viết gấp khúc vẫn là một chất, vì mỗi nguyên tử vẫn liên kết với đúng những nguyên tử ấy.',
        },
      ],
    },
    {
      heading: 'Đồng đẳng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng đẳng',
          text: 'Những hợp chất hữu cơ có tính chất hoá học tương tự nhau và thành phần phân tử hơn kém nhau một hay nhiều nhóm $\\mathrm{CH_2}$ được gọi là các chất đồng đẳng của nhau, chúng hợp thành một dãy đồng đẳng.',
        },
        {
          type: 'table',
          caption: 'Một số dãy đồng đẳng',
          head: ['Dãy', 'Các chất đầu dãy', 'Công thức chung'],
          rows: [
            [
              'Alkane',
              '$\\mathrm{CH_4}$, $\\mathrm{C_2H_6}$, $\\mathrm{C_3H_8}$',
              '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
            ],
            [
              'Alkene',
              '$\\mathrm{C_2H_4}$, $\\mathrm{C_3H_6}$, $\\mathrm{C_4H_8}$',
              '$\\mathrm{C_nH_{2n}}$ ($n \\ge 2$)',
            ],
            [
              'Alcohol no, đơn chức, mạch hở',
              '$\\mathrm{CH_3OH}$, $\\mathrm{C_2H_5OH}$',
              '$\\mathrm{C_nH_{2n+1}OH}$ ($n \\ge 1$)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Hãy phân loại từng cặp chất. Hai dấu hiệu cần kiểm tra: cùng công thức phân tử thì là đồng phân; tương tự tính chất và hơn kém nhóm $\\mathrm{CH_2}$ thì là đồng đẳng.',
        },
        { type: 'widget', name: 'dong-dang-dong-phan' },
      ],
    },
  ],
  explore: {
    title: 'Bộ dựng đồng phân',
    instruction:
      'Chọn một công thức phân tử, rồi bấm các ô để lắp mạch. Đủ số nguyên tử thì máy nhận xét: chất mới hay chỉ là chất cũ được vẽ khác đi. Gỡ nguyên tử ở đầu mạch để dựng mạch khác và tìm hết các đồng phân cấu tạo.',
  },
  examples: [
    {
      problem: 'Viết công thức cấu tạo thu gọn các đồng phân của $\\mathrm{C_5H_{12}}$.',
      steps: [
        '$\\mathrm{C_5H_{12}}$ thuộc dãy alkane $\\mathrm{C_nH_{2n+2}}$, chỉ có liên kết đơn và mạch hở, nên chỉ cần xét mạch carbon.',
        'Mạch dài $5$ carbon: $\\mathrm{CH_3-CH_2-CH_2-CH_2-CH_3}$.',
        'Mạch dài $4$ carbon và một nhánh $\\mathrm{CH_3}$: $\\mathrm{CH_3-CH(CH_3)-CH_2-CH_3}$. Đặt nhánh vào carbon thứ ba cũng chỉ là cùng chất này đọc từ đầu kia.',
        'Mạch dài $3$ carbon và hai nhánh $\\mathrm{CH_3}$ cùng ở carbon giữa: $\\mathrm{CH_3-C(CH_3)_2-CH_3}$.',
      ],
      answer: 'Có $3$ đồng phân cấu tạo.',
    },
    {
      problem:
        'Viết công thức cấu tạo các đồng phân mạch hở của $\\mathrm{C_3H_8O}$ và chỉ ra loại đồng phân.',
      steps: [
        'Số H ứng đúng với công thức no, mạch hở, nên O chỉ có thể ở nhóm –OH hoặc ở cầu –O–.',
        'Có nhóm –OH (alcohol), ở đầu mạch hoặc giữa mạch: $\\mathrm{CH_3-CH_2-CH_2-OH}$ và $\\mathrm{CH_3-CH(OH)-CH_3}$. Hai chất này là đồng phân vị trí nhóm chức.',
        'Có cầu –O– (ether): $\\mathrm{CH_3-O-CH_2-CH_3}$, là đồng phân loại nhóm chức của hai chất trên.',
      ],
      answer: 'Có $3$ đồng phân cấu tạo: hai alcohol và một ether.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cấu tạo hoá học của phân tử cho biết điều gì?',
      options: [
        'Thứ tự liên kết giữa các nguyên tử trong phân tử',
        'Số nguyên tử của mỗi nguyên tố trong phân tử',
        'Tỉ lệ khối lượng của các nguyên tố',
        'Nhiệt độ sôi của chất',
      ],
      answer: 0,
      hints: ['Hai đồng phân có cùng số nguyên tử, vậy chúng khác nhau ở điều gì?'],
      solution:
        'Cấu tạo hoá học là thứ tự liên kết giữa các nguyên tử trong phân tử. Số nguyên tử là thông tin của công thức phân tử.',
    },
    {
      type: 'number',
      prompt: 'Hợp chất $\\mathrm{C_4H_{10}}$ có bao nhiêu đồng phân cấu tạo?',
      answer: 2,
      hints: ['Thử mạch $4$ carbon, rồi mạch $3$ carbon có một nhánh.'],
      solution:
        'Chỉ có $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ và $\\mathrm{CH_3-CH(CH_3)-CH_3}$, nên có $2$ đồng phân.',
    },
    {
      type: 'number',
      prompt: 'Hợp chất $\\mathrm{C_4H_{10}O}$ có bao nhiêu đồng phân cấu tạo thuộc loại alcohol?',
      answer: 4,
      hints: [
        'Có hai mạch carbon: mạch thẳng $4$ carbon và mạch $3$ carbon có nhánh.',
        'Ở mỗi mạch, có bao nhiêu vị trí khác nhau để gắn nhóm –OH?',
      ],
      solution:
        'Mạch thẳng có $2$ vị trí: $\\mathrm{CH_3CH_2CH_2CH_2OH}$, $\\mathrm{CH_3CH(OH)CH_2CH_3}$. Mạch nhánh có $2$ vị trí: $\\mathrm{(CH_3)_2CHCH_2OH}$, $\\mathrm{(CH_3)_3COH}$. Tổng cộng $4$ alcohol.',
    },
    {
      type: 'match',
      prompt: 'Mỗi cặp đồng phân sau khác nhau ở điểm nào?',
      left: [
        '$\\mathrm{CH_3CH_2CH_2CH_3}$ và $\\mathrm{CH_3CH(CH_3)CH_3}$',
        '$\\mathrm{CH_3CH_2CHO}$ và $\\mathrm{CH_3COCH_3}$',
        '$\\mathrm{CH_2=CH-CH_2-CH_3}$ và $\\mathrm{CH_3-CH=CH-CH_3}$',
      ],
      right: ['Mạch carbon', 'Loại nhóm chức', 'Vị trí liên kết đôi', 'Số nguyên tử carbon'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đồng phân luôn có cùng số nguyên tử, nên có một lựa chọn sai ngay từ đầu.'],
      solution:
        'Cặp thứ nhất khác mạch carbon (thẳng và nhánh). Cặp thứ hai khác loại nhóm chức (aldehyde và ketone). Cặp thứ ba khác vị trí liên kết đôi.',
    },
    {
      type: 'choice',
      prompt: 'Cặp chất nào sau đây là đồng đẳng của nhau?',
      options: [
        '$\\mathrm{C_2H_5OH}$ và $\\mathrm{C_3H_7OH}$',
        '$\\mathrm{C_2H_5OH}$ và $\\mathrm{CH_3OCH_3}$',
        '$\\mathrm{C_2H_6}$ và $\\mathrm{C_2H_4}$',
        '$\\mathrm{CH_4}$ và $\\mathrm{CH_3Cl}$',
      ],
      answer: 0,
      hints: ['Cần có tính chất tương tự, tức cùng loại chất, và hơn kém nhóm $\\mathrm{CH_2}$.'],
      solution:
        '$\\mathrm{C_2H_5OH}$ và $\\mathrm{C_3H_7OH}$ cùng là alcohol, hơn kém một nhóm $\\mathrm{CH_2}$. $\\mathrm{C_2H_5OH}$ và $\\mathrm{CH_3OCH_3}$ là đồng phân; $\\mathrm{C_2H_6}$ và $\\mathrm{C_2H_4}$ không cùng dãy; $\\mathrm{CH_4}$ và $\\mathrm{CH_3Cl}$ khác thành phần.',
    },
    {
      type: 'number',
      prompt:
        'Alkane có công thức chung $\\mathrm{C_nH_{2n+2}}$. Chất trong dãy có $5$ nguyên tử carbon có bao nhiêu nguyên tử hydrogen?',
      answer: 12,
      hints: ['Thay $n = 5$ vào công thức chung.'],
      solution: '$2n + 2 = 2 \\cdot 5 + 2 = 12$. Chất đó là $\\mathrm{C_5H_{12}}$.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng theo thuyết cấu tạo hoá học?',
      options: [
        'Trong hợp chất hữu cơ, carbon có hoá trị IV.',
        'Các nguyên tử carbon có thể liên kết với nhau tạo mạch thẳng, mạch nhánh hoặc mạch vòng.',
        'Tính chất của chất phụ thuộc vào thành phần và cấu tạo hoá học.',
        'Hai chất có cùng công thức phân tử thì luôn có tính chất giống nhau.',
      ],
      answers: [0, 1, 2],
      hints: ['Nghĩ đến ethanol và dimethyl ether.'],
      solution:
        'Ethanol và dimethyl ether cùng là $\\mathrm{C_2H_6O}$ nhưng tính chất rất khác, nên phát biểu về cùng công thức phân tử là sai. Ba phát biểu còn lại đúng theo nội dung của thuyết.',
    },
    {
      type: 'choice',
      prompt: 'Ở công thức khung phân tử, mỗi điểm gấp khúc và mỗi đầu đoạn thẳng biểu diễn gì?',
      options: [
        'Một nguyên tử carbon',
        'Một nguyên tử hydrogen',
        'Một liên kết đôi',
        'Một nhóm chức',
      ],
      answer: 0,
      hints: ['Công thức khung bỏ bớt ký hiệu của nguyên tố xuất hiện nhiều nhất trên mạch.'],
      solution:
        'Mỗi đỉnh là một nguyên tử carbon; số H gắn với carbon không viết ra mà suy từ hoá trị IV.',
    },
  ],
  takeaways: [
    'Cấu tạo hoá học là thứ tự liên kết giữa các nguyên tử; đổi thứ tự thì được chất khác.',
    'Carbon có hoá trị IV và tạo được mạch hở không phân nhánh, mạch hở phân nhánh hoặc mạch vòng.',
    'Tính chất phụ thuộc vào cả thành phần phân tử lẫn cấu tạo hoá học.',
    'Đồng phân: cùng công thức phân tử, khác chất. Đồng phân cấu tạo khác nhau ở mạch carbon, loại nhóm chức hoặc vị trí nhóm chức.',
    'Đồng đẳng: tính chất hoá học tương tự, hơn kém một hay nhiều nhóm $\\mathrm{CH_2}$.',
  ],
};
