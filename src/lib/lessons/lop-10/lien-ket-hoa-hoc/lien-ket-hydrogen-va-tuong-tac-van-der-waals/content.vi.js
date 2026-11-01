/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Liên kết hydrogen và tương tác van der Waals là những lực yếu giữa các phân tử, nhưng quyết định nhiều tính chất vật lí như nhiệt độ nóng chảy, nhiệt độ sôi và độ tan.',
  intro:
    'Ở áp suất khí quyển, nước sôi ở $100\\ ^\\circ\\mathrm{C}$, trong khi hydrogen sulfide $\\mathrm{H_2S}$ sôi ở khoảng $-60\\ ^\\circ\\mathrm{C}$ và methane $\\mathrm{CH_4}$ ở khoảng $-162\\ ^\\circ\\mathrm{C}$. Phân tử $\\mathrm{H_2S}$ nặng hơn nước, vậy tại sao nước lại khó sôi đến thế? Câu trả lời nằm ở lực hút giữa các phân tử, không phải liên kết bên trong phân tử.',
  objectives: [
    'Trình bày được khái niệm và điều kiện hình thành liên kết hydrogen.',
    'Giải thích được ảnh hưởng của liên kết hydrogen đến nhiệt độ sôi và độ tan của một số chất.',
    'Trình bày được tương tác van der Waals và ảnh hưởng của nó đến nhiệt độ nóng chảy, nhiệt độ sôi.',
    'So sánh được nhiệt độ sôi của các chất dựa vào hai loại tương tác này.',
  ],
  sections: [
    {
      heading: 'Liên kết hydrogen',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết hydrogen',
          text: 'Liên kết hydrogen là một loại liên kết yếu, được hình thành giữa nguyên tử H (đã liên kết với một nguyên tử có độ âm điện lớn) với một nguyên tử khác có độ âm điện lớn còn cặp electron hoá trị chưa liên kết. Liên kết hydrogen được kí hiệu bằng dấu ba chấm (…).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Nguyên tử H liên kết với nguyên tử có độ âm điện lớn như F, O, N, nên mang một phần điện tích dương ($\\delta^+$) đủ lớn.',
            'Nguyên tử F, O, N của phân tử bên cạnh còn ít nhất một cặp electron hoá trị chưa liên kết, mang một phần điện tích âm ($\\delta^-$).',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{O - H \\cdots O}\\qquad \\mathrm{N - H \\cdots N}\\qquad \\mathrm{F - H \\cdots F}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ảnh hưởng của liên kết hydrogen',
          text: 'Liên kết hydrogen làm tăng nhiệt độ nóng chảy và nhiệt độ sôi của chất, vì cần thêm năng lượng để phá vỡ chúng. Những chất tạo được liên kết hydrogen với nước, như ammonia, ethanol, hydrogen fluoride, tan tốt trong nước.',
        },
        {
          type: 'p',
          text: 'Trong nước đá, mỗi phân tử nước liên kết hydrogen với bốn phân tử xung quanh, tạo cấu trúc có nhiều khoảng trống. Vì vậy nước đá nhẹ hơn nước lỏng và nổi trên mặt nước.',
        },
      ],
    },
    {
      heading: 'Tương tác van der Waals',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tương tác van der Waals',
          text: 'Tương tác van der Waals là tương tác tĩnh điện lưỡng cực – lưỡng cực giữa các nguyên tử hay phân tử.',
        },
        {
          type: 'p',
          text: 'Phân tử phân cực như $\\mathrm{HCl}$ có sẵn lưỡng cực. Với khí hiếm và phân tử không phân cực, các electron chuyển động liên tục nên đám mây electron có lúc lệch về một phía, tạo lưỡng cực tạm thời. Lưỡng cực này gây ra lưỡng cực ở phân tử bên cạnh và chúng hút nhau.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ảnh hưởng của tương tác van der Waals',
          text: 'Tương tác van der Waals làm tăng nhiệt độ nóng chảy và nhiệt độ sôi của các chất. Khi khối lượng phân tử tăng (số electron tăng) và khi diện tích tiếp xúc giữa các phân tử tăng, tương tác van der Waals tăng.',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ nóng chảy và nhiệt độ sôi của các đơn chất halogen (giá trị làm tròn)',
          head: [
            'Đơn chất',
            '$t_{nc}$ ($^\\circ\\mathrm{C}$)',
            '$t_s$ ($^\\circ\\mathrm{C}$)',
            'Thể ở nhiệt độ phòng',
          ],
          rows: [
            ['$\\mathrm{F_2}$', '$-220$', '$-188$', 'Khí'],
            ['$\\mathrm{Cl_2}$', '$-101$', '$-34$', 'Khí'],
            ['$\\mathrm{Br_2}$', '$-7$', '$59$', 'Lỏng'],
            ['$\\mathrm{I_2}$', '$114$', '$184$', 'Rắn'],
          ],
        },
        {
          type: 'p',
          text: 'Hình dạng phân tử cũng có ảnh hưởng: pentane mạch thẳng sôi ở $36\\ ^\\circ\\mathrm{C}$, cao hơn neopentane mạch nhánh ($9{,}5\\ ^\\circ\\mathrm{C}$) dù cùng công thức phân tử $\\mathrm{C_5H_{12}}$, vì các phân tử pentane có diện tích tiếp xúc lớn hơn.',
        },
      ],
    },
    {
      heading: 'So sánh nhiệt độ sôi',
      blocks: [
        {
          type: 'p',
          text: 'Tương tác giữa các phân tử yếu hơn nhiều so với liên kết ion, liên kết cộng hoá trị. Nói chung, tính từ mạnh đến yếu: liên kết cộng hoá trị và liên kết ion, rồi đến liên kết hydrogen, rồi đến tương tác van der Waals.',
        },
        {
          type: 'p',
          text: 'Biểu đồ dưới đây cho thấy dấu hiệu rõ nhất của liên kết hydrogen: chất đầu dãy có khối lượng phân tử nhỏ nhất nhưng lại sôi cao bất thường. Hãy tự tìm chất đó trong từng dãy.',
        },
        { type: 'widget', name: 'nhiet-do-soi' },
      ],
    },
  ],
  explore: {
    title: 'Xếp các phân tử gần nhau',
    instruction:
      'Kéo các phân tử lại gần nhau (hoặc chọn một phân tử rồi dùng phím mũi tên). Phân tử tự xoay để H hướng về nguyên tử có độ âm điện lớn của phân tử bên cạnh; đường chấm màu cam là liên kết hydrogen. So sánh $\\mathrm{H_2O}$, $\\mathrm{NH_3}$, $\\mathrm{HF}$ với $\\mathrm{CH_4}$.',
  },
  examples: [
    {
      problem:
        'Giải thích vì sao nhiệt độ sôi của $\\mathrm{H_2O}$ ($100\\ ^\\circ\\mathrm{C}$) cao hơn của $\\mathrm{H_2S}$ (khoảng $-60\\ ^\\circ\\mathrm{C}$), dù $\\mathrm{H_2S}$ có khối lượng phân tử lớn hơn.',
      steps: [
        'O có độ âm điện lớn, có cặp electron riêng, nên giữa các phân tử $\\mathrm{H_2O}$ có liên kết hydrogen.',
        'S có độ âm điện nhỏ hơn nhiều, liên kết H–S gần như không phân cực nên giữa các phân tử $\\mathrm{H_2S}$ không có liên kết hydrogen đáng kể.',
        'Muốn $\\mathrm{H_2O}$ sôi phải phá vỡ các liên kết hydrogen, cần nhiều năng lượng hơn.',
      ],
      answer:
        'Liên kết hydrogen giữa các phân tử nước làm nhiệt độ sôi của nước cao hơn $\\mathrm{H_2S}$.',
    },
    {
      problem:
        'Sắp xếp $\\mathrm{F_2}$, $\\mathrm{Cl_2}$, $\\mathrm{Br_2}$, $\\mathrm{I_2}$ theo chiều tăng nhiệt độ sôi và giải thích.',
      steps: [
        'Các phân tử này không phân cực, không có liên kết hydrogen; giữa chúng chỉ có tương tác van der Waals.',
        'Từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, khối lượng phân tử và số electron tăng, nên tương tác van der Waals tăng.',
        'Tương tác càng mạnh thì nhiệt độ sôi càng cao.',
      ],
      answer:
        'Nhiệt độ sôi tăng dần: $\\mathrm{F_2} < \\mathrm{Cl_2} < \\mathrm{Br_2} < \\mathrm{I_2}$.',
    },
    {
      problem:
        'Giải thích vì sao ammonia $\\mathrm{NH_3}$ tan rất nhiều trong nước, còn methane $\\mathrm{CH_4}$ gần như không tan.',
      steps: [
        'Phân tử $\\mathrm{NH_3}$ có liên kết N–H phân cực và N còn một cặp electron riêng.',
        'Do đó $\\mathrm{NH_3}$ tạo được liên kết hydrogen với các phân tử nước: $\\mathrm{N \\cdots H - O}$ và $\\mathrm{N - H \\cdots O}$.',
        'Phân tử $\\mathrm{CH_4}$ không phân cực, không tạo được liên kết hydrogen với nước.',
      ],
      answer:
        '$\\mathrm{NH_3}$ tạo liên kết hydrogen với nước nên tan nhiều; $\\mathrm{CH_4}$ thì không.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn các chất mà giữa các phân tử của chúng có liên kết hydrogen.',
      options: [
        '$\\mathrm{H_2O}$',
        '$\\mathrm{NH_3}$',
        '$\\mathrm{HF}$',
        '$\\mathrm{CH_4}$',
        '$\\mathrm{C_2H_5OH}$',
        '$\\mathrm{Cl_2}$',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Tìm nguyên tử H liên kết trực tiếp với F, O hoặc N.'],
      solution:
        '$\\mathrm{H_2O}$, $\\mathrm{NH_3}$, $\\mathrm{HF}$, $\\mathrm{C_2H_5OH}$ đều có H liên kết với O, N hoặc F. $\\mathrm{CH_4}$ có H liên kết với C; $\\mathrm{Cl_2}$ không có H.',
    },
    {
      type: 'choice',
      prompt: 'Điều kiện để hình thành liên kết hydrogen là gì?',
      options: [
        'H liên kết với nguyên tử có độ âm điện lớn (F, O, N) và nguyên tử nhận còn cặp electron chưa liên kết',
        'Phân tử có khối lượng lớn',
        'Phân tử chứa kim loại',
        'Hai nguyên tử H ở cạnh nhau',
      ],
      answer: 0,
      hints: ['Liên kết hydrogen cần một đầu $\\delta^+$ và một đầu có cặp electron riêng.'],
      solution:
        'H cần mang đủ điện tích dương nhờ liên kết với F, O, N; nguyên tử bên kia phải có cặp electron hoá trị chưa liên kết.',
    },
    {
      type: 'number',
      prompt: 'Trong nước đá, mỗi phân tử nước tạo tối đa bao nhiêu liên kết hydrogen?',
      answer: 4,
      unit: 'liên kết',
      hints: ['Đếm số nguyên tử H và số cặp electron riêng trên O.'],
      solution:
        'Hai nguyên tử H và hai cặp electron riêng trên O, nên tổng cộng $4$ liên kết hydrogen.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các đơn chất theo chiều tăng dần của nhiệt độ sôi.',
      items: ['$\\mathrm{I_2}$', '$\\mathrm{F_2}$', '$\\mathrm{Br_2}$', '$\\mathrm{Cl_2}$'],
      answer: [1, 3, 2, 0],
      hints: ['Khối lượng phân tử càng lớn, tương tác van der Waals càng mạnh.'],
      solution:
        'Nhiệt độ sôi tăng dần: $\\mathrm{F_2} < \\mathrm{Cl_2} < \\mathrm{Br_2} < \\mathrm{I_2}$.',
    },
    {
      type: 'choice',
      prompt:
        'Pentane mạch thẳng sôi ở $36\\ ^\\circ\\mathrm{C}$, neopentane mạch nhánh sôi ở $9{,}5\\ ^\\circ\\mathrm{C}$. Nguyên nhân chính là gì?',
      options: [
        'Pentane có diện tích tiếp xúc giữa các phân tử lớn hơn, tương tác van der Waals mạnh hơn',
        'Pentane có liên kết hydrogen',
        'Pentane có khối lượng phân tử lớn hơn',
        'Neopentane có nhiều liên kết đôi hơn',
      ],
      answer: 0,
      hints: ['Hai chất có cùng công thức phân tử $\\mathrm{C_5H_{12}}$, chỉ khác hình dạng.'],
      solution:
        'Hai chất có cùng khối lượng phân tử và đều không có liên kết hydrogen. Phân tử mạch thẳng tiếp xúc với nhau nhiều hơn nên tương tác van der Waals mạnh hơn.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao $\\mathrm{NH_3}$ (sôi ở $-33\\ ^\\circ\\mathrm{C}$) sôi cao hơn $\\mathrm{PH_3}$ (sôi ở $-88\\ ^\\circ\\mathrm{C}$) dù nhẹ hơn?',
      options: [
        'Giữa các phân tử $\\mathrm{NH_3}$ có liên kết hydrogen',
        'Phân tử $\\mathrm{NH_3}$ có nhiều nguyên tử hơn',
        'Phân tử $\\mathrm{PH_3}$ có liên kết hydrogen mạnh hơn',
        'Liên kết N–H không phân cực',
      ],
      answer: 0,
      hints: ['So sánh độ âm điện của N và P.'],
      solution:
        'N có độ âm điện lớn, liên kết N–H phân cực mạnh nên có liên kết hydrogen giữa các phân tử; P có độ âm điện nhỏ nên không có.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi vị trí với lực giữ chúng lại với nhau.',
      left: [
        'Giữa các phân tử $\\mathrm{H_2O}$',
        'Giữa các phân tử $\\mathrm{Cl_2}$',
        'Giữa ion $\\mathrm{Na^+}$ và ion $\\mathrm{Cl^-}$',
        'Giữa nguyên tử H và O trong một phân tử nước',
      ],
      right: [
        'Liên kết hydrogen',
        'Tương tác van der Waals',
        'Liên kết ion',
        'Liên kết cộng hoá trị phân cực',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phân biệt lực giữa các phân tử với liên kết trong một phân tử.'],
      solution:
        '$\\mathrm{H_2O}$ có O–H nên có liên kết hydrogen; $\\mathrm{Cl_2}$ không phân cực chỉ có van der Waals; $\\mathrm{Na^+}$, $\\mathrm{Cl^-}$ hút nhau bằng liên kết ion; O–H trong phân tử là liên kết cộng hoá trị phân cực.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào tan tốt trong nước nhờ tạo được liên kết hydrogen với nước?',
      options: [
        'Ethanol $\\mathrm{C_2H_5OH}$',
        'Iodine $\\mathrm{I_2}$',
        'Methane $\\mathrm{CH_4}$',
        'Nitrogen $\\mathrm{N_2}$',
      ],
      answer: 0,
      hints: ['Tìm chất có nhóm chứa H liên kết với O.'],
      solution: 'Ethanol có nhóm O–H nên tạo được liên kết hydrogen với các phân tử nước.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt độ sôi của nước là $100\\ ^\\circ\\mathrm{C}$, của $\\mathrm{H_2S}$ là $-60{,}3\\ ^\\circ\\mathrm{C}$. Hai giá trị chênh nhau bao nhiêu độ C?',
      answer: 160.3,
      tolerance: 0.01,
      hints: ['Lấy nhiệt độ cao trừ nhiệt độ thấp, chú ý dấu âm.'],
      solution: '$100 - (-60{,}3) = 160{,}3$.',
    },
    {
      type: 'text',
      prompt: 'Trong ba khí hiếm He, Ne, Ar, khí nào có nhiệt độ sôi cao nhất? (Viết tên.)',
      accept: ['argon', 'ar'],
      hints: ['Nguyên tử càng nhiều electron thì tương tác van der Waals càng mạnh.'],
      solution:
        'Argon có nhiều electron nhất nên tương tác van der Waals mạnh nhất, sôi ở khoảng $-186\\ ^\\circ\\mathrm{C}$.',
    },
  ],
  takeaways: [
    'Liên kết hydrogen hình thành giữa H (đã liên kết với F, O, N) và nguyên tử F, O, N còn cặp electron chưa liên kết của phân tử bên cạnh.',
    'Liên kết hydrogen làm tăng nhiệt độ sôi và làm chất tan tốt hơn trong nước.',
    'Tương tác van der Waals là tương tác tĩnh điện lưỡng cực – lưỡng cực; nó mạnh dần khi khối lượng phân tử và diện tích tiếp xúc tăng.',
    'Độ bền: liên kết cộng hoá trị, liên kết ion > liên kết hydrogen > tương tác van der Waals.',
  ],
};
