/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công thức Lewis, liên kết cho – nhận, mô hình VSEPR dự đoán hình học phân tử và sự lai hoá orbital sp, sp2, sp3 với góc liên kết tương ứng.',
  intro:
    'Phân tử nước có dạng góc nên phân cực, còn carbon dioxide có dạng đường thẳng nên không phân cực, dù cả hai đều có ba nguyên tử. Hình dạng phân tử ảnh hưởng đến khả năng phản ứng, tính phân cực và cả hoạt tính sinh học của chất. Chuyên đề này giúp em dự đoán hình dạng đó chỉ từ công thức Lewis, và giải thích nó bằng sự lai hoá orbital.',
  objectives: [
    'Viết được công thức Lewis của một số phân tử đơn giản.',
    'Trình bày được khái niệm và lấy được ví dụ về liên kết cho – nhận.',
    'Vận dụng được mô hình VSEPR để dự đoán dạng hình học của phân tử dạng $\\mathrm{AX_nE_m}$.',
    'Trình bày được sự lai hoá $\\mathrm{sp}$, $\\mathrm{sp^2}$, $\\mathrm{sp^3}$ và góc liên kết tương ứng.',
  ],
  sections: [
    {
      heading: 'Công thức Lewis',
      blocks: [
        {
          type: 'p',
          text: 'Công thức Lewis biểu diễn cấu tạo phân tử bằng các liên kết và các electron hoá trị riêng (chưa liên kết) của từng nguyên tử. Có thể viết công thức Lewis theo các bước sau:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tính tổng số electron hoá trị của các nguyên tử trong phân tử.',
            'Vẽ khung phân tử: nguyên tử trung tâm thường có độ âm điện nhỏ hơn (H không bao giờ là trung tâm); nối mỗi nguyên tử xung quanh với trung tâm bằng một liên kết đơn và trừ đi $2$ electron cho mỗi liên kết.',
            'Dùng số electron còn lại để bổ sung cho các nguyên tử xung quanh đạt octet (H chỉ cần $2$ electron).',
            'Electron còn dư đặt lên nguyên tử trung tâm. Nếu trung tâm vẫn chưa đạt octet, chuyển cặp electron riêng của nguyên tử xung quanh thành liên kết đôi hoặc ba.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số công thức Lewis viết theo các bước trên',
          head: ['Phân tử', 'Tổng electron hoá trị', 'Kết quả'],
          rows: [
            [
              '$\\mathrm{NH_3}$',
              '$5 + 3 \\cdot 1 = 8$',
              'Ba liên kết N–H; N còn $1$ cặp electron riêng',
            ],
            [
              '$\\mathrm{H_2O}$',
              '$2 \\cdot 1 + 6 = 8$',
              'Hai liên kết O–H; O còn $2$ cặp electron riêng',
            ],
            [
              '$\\mathrm{CO_2}$',
              '$4 + 2 \\cdot 6 = 16$',
              '$\\mathrm{O{=}C{=}O}$; mỗi O còn $2$ cặp electron riêng',
            ],
            [
              '$\\mathrm{CS_2}$',
              '$4 + 2 \\cdot 6 = 16$',
              '$\\mathrm{S{=}C{=}S}$; mỗi S còn $2$ cặp electron riêng',
            ],
            [
              '$\\mathrm{N_2}$',
              '$2 \\cdot 5 = 10$',
              '$\\mathrm{N{\\equiv}N}$; mỗi N còn $1$ cặp electron riêng',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Liên kết cho – nhận',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết cho – nhận',
          text: 'Liên kết cho – nhận là liên kết cộng hoá trị trong đó cặp electron dùng chung chỉ do một nguyên tử đóng góp. Nguyên tử cho có cặp electron chưa liên kết; nguyên tử nhận có orbital trống. Liên kết được biểu diễn bằng mũi tên từ nguyên tử cho sang nguyên tử nhận.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_3N} \\rightarrow \\mathrm{H^+} \\quad\\text{hay}\\quad \\mathrm{NH_3} + \\mathrm{H^+} \\rightarrow \\mathrm{NH_4^+}',
        },
        {
          type: 'p',
          text: 'Trong ion $\\mathrm{NH_4^+}$, nguyên tử N dùng cặp electron chưa liên kết của mình để tạo liên kết với $\\mathrm{H^+}$, vốn chỉ có orbital 1s trống. Liên kết tạo thành không khác gì ba liên kết N–H còn lại: bốn liên kết hoàn toàn giống nhau, cho nên ion có dạng tứ diện đều.',
        },
        { type: 'widget', name: 'cho-nhan' },
      ],
    },
    {
      heading: 'Hình học phân tử theo mô hình VSEPR',
      blocks: [
        {
          type: 'p',
          text: 'Mô hình VSEPR (sự đẩy nhau của các cặp electron hoá trị) cho rằng các cặp electron hoá trị quanh nguyên tử trung tâm đẩy nhau và sắp xếp sao cho xa nhau nhất. Một phân tử được viết dưới dạng $\\mathrm{AX_nE_m}$, trong đó A là nguyên tử trung tâm, X là nguyên tử liên kết với A và E là cặp electron hoá trị chưa liên kết của A. Liên kết đôi hay ba cũng chỉ tính là một hướng.',
        },
        {
          type: 'table',
          caption: 'Dạng hình học theo mô hình VSEPR',
          head: ['Công thức', 'Dạng phân tử', 'Góc liên kết', 'Ví dụ'],
          rows: [
            [
              '$\\mathrm{AX_2}$',
              'Đường thẳng',
              '$180^\\circ$',
              '$\\mathrm{BeH_2}$, $\\mathrm{CO_2}$',
            ],
            [
              '$\\mathrm{AX_3}$',
              'Tam giác phẳng',
              '$120^\\circ$',
              '$\\mathrm{BF_3}$, $\\mathrm{SO_3}$',
            ],
            ['$\\mathrm{AX_2E}$', 'Góc', 'Nhỏ hơn $120^\\circ$', '$\\mathrm{SO_2}$'],
            [
              '$\\mathrm{AX_4}$',
              'Tứ diện',
              '$109{,}5^\\circ$',
              '$\\mathrm{CH_4}$, $\\mathrm{CCl_4}$, $\\mathrm{NH_4^+}$',
            ],
            [
              '$\\mathrm{AX_3E}$',
              'Tháp tam giác',
              'Nhỏ hơn $109{,}5^\\circ$',
              '$\\mathrm{NH_3}$, $\\mathrm{PCl_3}$',
            ],
            [
              '$\\mathrm{AX_2E_2}$',
              'Góc',
              'Nhỏ hơn $109{,}5^\\circ$',
              '$\\mathrm{H_2O}$, $\\mathrm{OF_2}$, $\\mathrm{H_2S}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao góc liên kết nhỏ đi?',
          text: 'Cặp electron chưa liên kết chỉ bị một hạt nhân giữ nên chiếm nhiều chỗ hơn và đẩy mạnh hơn cặp electron liên kết. Vì vậy góc liên kết giảm dần: $\\mathrm{CH_4}$ ($109{,}5^\\circ$), $\\mathrm{NH_3}$ ($107^\\circ$), $\\mathrm{H_2O}$ ($104{,}5^\\circ$).',
        },
      ],
    },
    {
      heading: 'Sự lai hoá orbital nguyên tử',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sự lai hoá orbital',
          text: 'Sự lai hoá orbital nguyên tử là sự tổ hợp các orbital nguyên tử (AO) của một nguyên tử để tạo thành các orbital lai hoá giống nhau về năng lượng, hình dạng và kích thước nhưng định hướng khác nhau trong không gian. Tổ hợp bao nhiêu AO thì được bấy nhiêu orbital lai hoá.',
        },
        {
          type: 'table',
          caption: 'Ba trạng thái lai hoá cơ bản',
          head: ['Lai hoá', 'Tổ hợp từ', 'Số orbital lai hoá', 'Góc giữa các orbital', 'Ví dụ'],
          rows: [
            [
              '$\\mathrm{sp}$',
              '$1$ AO s, $1$ AO p',
              '$2$',
              '$180^\\circ$',
              '$\\mathrm{BeH_2}$, $\\mathrm{CO_2}$, $\\mathrm{C_2H_2}$',
            ],
            [
              '$\\mathrm{sp^2}$',
              '$1$ AO s, $2$ AO p',
              '$3$',
              '$120^\\circ$',
              '$\\mathrm{BF_3}$, $\\mathrm{SO_2}$, $\\mathrm{C_2H_4}$',
            ],
            [
              '$\\mathrm{sp^3}$',
              '$1$ AO s, $3$ AO p',
              '$4$',
              '$109{,}5^\\circ$',
              '$\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2O}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xác định trạng thái lai hoá',
          text: 'Tổng $n + m$ của nguyên tử trung tâm trong công thức $\\mathrm{AX_nE_m}$ bằng số orbital lai hoá: $n + m = 2$ ứng với $\\mathrm{sp}$, $n + m = 3$ ứng với $\\mathrm{sp^2}$, $n + m = 4$ ứng với $\\mathrm{sp^3}$.',
        },
        {
          type: 'p',
          text: 'Orbital lai hoá xen phủ trục với orbital của nguyên tử khác tạo liên kết $\\sigma$ hoặc chứa cặp electron chưa liên kết. AO p không tham gia lai hoá có thể xen phủ bên tạo liên kết $\\pi$. Trong hydrocarbon: carbon chỉ có liên kết đơn lai hoá $\\mathrm{sp^3}$, carbon có liên kết đôi lai hoá $\\mathrm{sp^2}$, carbon có liên kết ba lai hoá $\\mathrm{sp}$.',
        },
      ],
    },
    {
      heading: 'Dự án: Dựng mô hình lai hoá bằng bóng bay',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tự nhận ra rằng các cặp electron sắp xếp xa nhau nhất, bằng cách dùng các quả bóng bay buộc chung một nút. Bóng bay đẩy nhau giống các vùng electron.',
        },
        {
          type: 'list',
          items: [
            'Vật liệu: $9$ quả bóng bay cùng cỡ, $2$ quả bóng màu khác thổi to hơn một chút, dây buộc, thước đo độ, điện thoại để chụp ảnh.',
            'Bước 1: buộc chung $2$ quả, rồi $3$ quả, rồi $4$ quả tại một nút. Thả tự do, quan sát dạng sắp xếp và đo góc giữa các quả bóng.',
            'Bước 2: trong bộ $4$ quả, thay $1$ rồi $2$ quả bằng bóng to tượng trưng cho cặp electron chưa liên kết. Đo lại góc giữa các quả bóng nhỏ.',
            'Bước 3: dán nhãn mỗi mô hình bằng công thức $\\mathrm{AX_nE_m}$, trạng thái lai hoá và một phân tử ví dụ.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng so sánh góc đo được với góc lí thuyết ($180^\\circ$, $120^\\circ$, $109{,}5^\\circ$, $107^\\circ$, $104{,}5^\\circ$), ảnh chụp từng mô hình, và giải thích vì sao bóng to làm các bóng nhỏ xích lại gần nhau.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dựng phân tử từ các cặp electron',
    instruction:
      'Đổi số nguyên tử liên kết $n$ và số cặp electron chưa liên kết $m$, rồi xoay mô hình. Hãy so sánh $\\mathrm{CH_4}$, $\\mathrm{NH_3}$ và $\\mathrm{H_2O}$: cùng lai hoá $\\mathrm{sp^3}$, góc liên kết thay đổi thế nào khi thay nguyên tử X bằng cặp E?',
  },
  examples: [
    {
      problem:
        'Viết công thức Lewis của $\\mathrm{PCl_3}$, từ đó dự đoán dạng hình học theo mô hình VSEPR và trạng thái lai hoá của P.',
      steps: [
        'Tổng electron hoá trị: $5 + 3 \\cdot 7 = 26$.',
        'P ở trung tâm, tạo $3$ liên kết đơn P–Cl, dùng hết $6$ electron; còn $20$ electron.',
        'Mỗi Cl nhận thêm $6$ electron để đạt octet, dùng $18$ electron; còn $2$ electron đặt lên P thành $1$ cặp chưa liên kết.',
        'Vậy $n = 3$, $m = 1$: công thức $\\mathrm{AX_3E}$, dạng tháp tam giác.',
        '$n + m = 4$ nên P lai hoá $\\mathrm{sp^3}$.',
      ],
      answer: '$\\mathrm{AX_3E}$, dạng tháp tam giác, P lai hoá $\\mathrm{sp^3}$.',
    },
    {
      problem:
        'Mô tả sự tạo thành liên kết trong phân tử ethylene $\\mathrm{C_2H_4}$ theo khái niệm lai hoá orbital.',
      steps: [
        'Mỗi C liên kết với $3$ nguyên tử (hai H và một C) và không có cặp electron chưa liên kết, nên $n + m = 3$: C lai hoá $\\mathrm{sp^2}$.',
        'Ba orbital $\\mathrm{sp^2}$ của mỗi C nằm trong một mặt phẳng, cách nhau $120^\\circ$, tạo $3$ liên kết $\\sigma$: hai liên kết C–H và một liên kết C–C.',
        'AO p chưa lai hoá của hai C xen phủ bên, tạo $1$ liên kết $\\pi$.',
        'Tổng cộng phân tử có $4$ liên kết $\\sigma$ C–H, $1$ liên kết $\\sigma$ C–C và $1$ liên kết $\\pi$.',
      ],
      answer:
        'C lai hoá $\\mathrm{sp^2}$; phân tử có $5$ liên kết $\\sigma$ và $1$ liên kết $\\pi$.',
    },
    {
      problem:
        'Vì sao phân tử $\\mathrm{CO_2}$ không phân cực, còn phân tử $\\mathrm{SO_2}$ phân cực?',
      steps: [
        '$\\mathrm{CO_2}$: C không có cặp electron chưa liên kết, công thức $\\mathrm{AX_2}$, dạng đường thẳng. Hai liên kết C=O phân cực ngược chiều nhau và triệt tiêu.',
        '$\\mathrm{SO_2}$: S còn $1$ cặp electron chưa liên kết, công thức $\\mathrm{AX_2E}$, dạng góc. Hai liên kết S–O không thẳng hàng nên độ phân cực không triệt tiêu.',
      ],
      answer:
        'Tính phân cực của phân tử phụ thuộc vào dạng hình học chứ không chỉ vào từng liên kết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong các phần tử sau, phần tử nào có liên kết cho – nhận?',
      options: ['$\\mathrm{CH_4}$', '$\\mathrm{NH_4^+}$', '$\\mathrm{H_2O}$', '$\\mathrm{BF_3}$'],
      answer: 1,
      hints: [
        'Tìm phần tử được tạo thành khi một phân tử có cặp electron chưa liên kết kết hợp với một ion có orbital trống.',
      ],
      solution:
        '$\\mathrm{NH_4^+}$ tạo thành khi N của $\\mathrm{NH_3}$ cho cặp electron chưa liên kết sang orbital 1s trống của $\\mathrm{H^+}$.',
    },
    {
      type: 'number',
      prompt:
        'Tổng số electron hoá trị dùng để viết công thức Lewis của $\\mathrm{SO_2}$ là bao nhiêu?',
      answer: 18,
      hints: [
        'S và O đều thuộc nhóm VIA.',
        'Cộng số electron hoá trị của $1$ nguyên tử S và $2$ nguyên tử O.',
      ],
      solution: 'S có $6$ electron hoá trị, mỗi O có $6$: $6 + 2 \\cdot 6 = 18$.',
    },
    {
      type: 'choice',
      prompt: 'Theo mô hình VSEPR, phân tử $\\mathrm{OF_2}$ có công thức nào?',
      options: [
        '$\\mathrm{AX_2}$',
        '$\\mathrm{AX_2E}$',
        '$\\mathrm{AX_2E_2}$',
        '$\\mathrm{AX_3E}$',
      ],
      answer: 2,
      hints: ['Viết công thức Lewis rồi đếm số cặp electron chưa liên kết còn lại trên O.'],
      solution:
        'O có $6$ electron hoá trị, dùng $2$ electron cho hai liên kết O–F, còn $4$ electron thành $2$ cặp chưa liên kết. Vậy công thức là $\\mathrm{AX_2E_2}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phân tử với dạng hình học của nó.',
      left: [
        '$\\mathrm{CO_2}$',
        '$\\mathrm{BF_3}$',
        '$\\mathrm{CCl_4}$',
        '$\\mathrm{NH_3}$',
        '$\\mathrm{H_2O}$',
      ],
      right: ['Đường thẳng', 'Tam giác phẳng', 'Tứ diện', 'Tháp tam giác', 'Góc'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Viết công thức $\\mathrm{AX_nE_m}$ cho từng phân tử.'],
      solution:
        '$\\mathrm{CO_2}$: $\\mathrm{AX_2}$, đường thẳng. $\\mathrm{BF_3}$: $\\mathrm{AX_3}$, tam giác phẳng. $\\mathrm{CCl_4}$: $\\mathrm{AX_4}$, tứ diện. $\\mathrm{NH_3}$: $\\mathrm{AX_3E}$, tháp tam giác. $\\mathrm{H_2O}$: $\\mathrm{AX_2E_2}$, góc.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân tử $\\mathrm{NCl_3}$, nguyên tử N ở trạng thái lai hoá nào?',
      options: ['$\\mathrm{sp}$', '$\\mathrm{sp^2}$', '$\\mathrm{sp^3}$', 'Không lai hoá'],
      answer: 2,
      hints: ['Đếm số nguyên tử liên kết với N, và số cặp electron chưa liên kết của N.'],
      solution:
        'N liên kết với $3$ nguyên tử Cl và còn $1$ cặp electron chưa liên kết: $n + m = 4$, nên N lai hoá $\\mathrm{sp^3}$.',
    },
    {
      type: 'multi',
      prompt: 'Nguyên tử trung tâm của những phân tử nào lai hoá $\\mathrm{sp^2}$?',
      options: [
        '$\\mathrm{SO_3}$',
        '$\\mathrm{BF_3}$',
        '$\\mathrm{SO_2}$',
        '$\\mathrm{CO_2}$',
        '$\\mathrm{CH_4}$',
      ],
      answers: [0, 1, 2],
      hints: [
        'Lai hoá $\\mathrm{sp^2}$ ứng với $n + m = 3$.',
        'Nhớ tính cả cặp electron chưa liên kết của nguyên tử trung tâm.',
      ],
      solution:
        '$\\mathrm{SO_3}$ và $\\mathrm{BF_3}$ có $n = 3$, $m = 0$; $\\mathrm{SO_2}$ có $n = 2$, $m = 1$. $\\mathrm{CO_2}$ có $n + m = 2$ ($\\mathrm{sp}$), $\\mathrm{CH_4}$ có $n + m = 4$ ($\\mathrm{sp^3}$).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các phân tử theo góc liên kết giảm dần.',
      items: [
        '$\\mathrm{H_2O}$',
        '$\\mathrm{BeH_2}$',
        '$\\mathrm{NH_3}$',
        '$\\mathrm{BF_3}$',
        '$\\mathrm{CH_4}$',
      ],
      answer: [1, 3, 4, 2, 0],
      hints: [
        'Xác định trạng thái lai hoá trước.',
        'Trong nhóm lai hoá $\\mathrm{sp^3}$, càng nhiều cặp electron chưa liên kết thì góc càng nhỏ.',
      ],
      solution:
        '$\\mathrm{BeH_2}$ ($180^\\circ$) $>$ $\\mathrm{BF_3}$ ($120^\\circ$) $>$ $\\mathrm{CH_4}$ ($109{,}5^\\circ$) $>$ $\\mathrm{NH_3}$ ($107^\\circ$) $>$ $\\mathrm{H_2O}$ ($104{,}5^\\circ$).',
    },
    {
      type: 'number',
      prompt:
        'Trong phân tử $\\mathrm{CH_3{-}CH{=}CH{-}C{\\equiv}CH}$, có bao nhiêu nguyên tử carbon lai hoá $\\mathrm{sp^2}$?',
      answer: 2,
      hints: ['Carbon có liên kết đôi thì lai hoá $\\mathrm{sp^2}$.'],
      solution:
        'Carbon của $\\mathrm{CH_3}$ lai hoá $\\mathrm{sp^3}$; hai carbon của liên kết đôi lai hoá $\\mathrm{sp^2}$; hai carbon của liên kết ba lai hoá $\\mathrm{sp}$. Vậy có $2$ carbon lai hoá $\\mathrm{sp^2}$.',
    },
  ],
  takeaways: [
    'Liên kết cho – nhận: cặp electron dùng chung do một nguyên tử đóng góp, biểu diễn bằng mũi tên từ nguyên tử cho sang nguyên tử nhận.',
    'Mô hình VSEPR: viết phân tử dạng $\\mathrm{AX_nE_m}$; các cặp electron quanh A sắp xếp xa nhau nhất, từ đó suy ra dạng phân tử.',
    '$n + m = 2, 3, 4$ ứng với lai hoá $\\mathrm{sp}$ ($180^\\circ$), $\\mathrm{sp^2}$ ($120^\\circ$), $\\mathrm{sp^3}$ ($109{,}5^\\circ$).',
    'Cặp electron chưa liên kết đẩy mạnh hơn nên làm góc liên kết nhỏ đi: $109{,}5^\\circ$, $107^\\circ$, $104{,}5^\\circ$ ở $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2O}$.',
  ],
};
