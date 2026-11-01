/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Số oxi hoá và cách xác định; chất khử nhường electron, chất oxi hoá nhận electron; lập phương trình phản ứng oxi hoá – khử bằng phương pháp thăng bằng electron và vai trò của loại phản ứng này trong thực tiễn.',
  intro:
    'Trong lò cao, quặng hematite $\\mathrm{Fe_2O_3}$ biến thành gang nhờ khí carbon monoxide. Than cháy, sắt gỉ, ắc quy phóng điện cũng diễn ra theo một cơ chế chung: các electron chuyển từ chất này sang chất khác. Làm sao biết electron đi từ đâu đến đâu, và dựa vào đó cân bằng được cả những phương trình có nhiều chất như thế nào?',
  objectives: [
    'Nêu được khái niệm số oxi hoá và xác định được số oxi hoá của nguyên tử các nguyên tố trong hợp chất.',
    'Nêu được khái niệm về phản ứng oxi hoá – khử, chất khử, chất oxi hoá, quá trình oxi hoá, quá trình khử.',
    'Lập được phương trình hoá học của phản ứng oxi hoá – khử bằng phương pháp thăng bằng electron.',
    'Nêu được ý nghĩa của phản ứng oxi hoá – khử trong đời sống và sản xuất.',
  ],
  sections: [
    {
      heading: 'Số oxi hoá',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Số oxi hoá',
          text: 'Số oxi hoá của một nguyên tử trong phân tử là điện tích của nguyên tử đó, nếu giả định cặp electron chung thuộc hẳn về nguyên tử của nguyên tố có độ âm điện lớn hơn.',
        },
        {
          type: 'p',
          text: 'Số oxi hoá được viết ở dạng đại số, dấu viết trước, số viết sau, đặt phía trên kí hiệu nguyên tố: $\\overset{+1}{\\mathrm{Na}}\\overset{-1}{\\mathrm{Cl}}$, $\\overset{+1}{\\mathrm{H_2}}\\overset{-2}{\\mathrm{O}}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng nhầm với điện tích ion',
          text: 'Điện tích ion viết số trước, dấu sau: ion $\\mathrm{Fe^{3+}}$ có số oxi hoá $+3$, viết là $\\overset{+3}{\\mathrm{Fe}}$. Số oxi hoá của S trong $\\mathrm{H_2SO_4}$ là $+6$, nhưng phân tử không hề có ion $\\mathrm{S^{6+}}$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Trong đơn chất, số oxi hoá của nguyên tử bằng $0$: $\\overset{0}{\\mathrm{Fe}}$, $\\overset{0}{\\mathrm{Cl_2}}$, $\\overset{0}{\\mathrm{O_2}}$.',
            'Trong hợp chất, số oxi hoá của hydrogen thường là $+1$ (trừ hydride kim loại như $\\mathrm{NaH}$, H là $-1$), của oxygen thường là $-2$ (trừ peroxide như $\\mathrm{H_2O_2}$, O là $-1$, và $\\mathrm{OF_2}$, O là $+2$), của fluorine là $-1$.',
            'Kim loại điển hình có số oxi hoá dương, bằng số electron hoá trị: nhóm IA là $+1$, nhóm IIA là $+2$, nhôm là $+3$.',
            'Tổng số oxi hoá của các nguyên tử trong phân tử bằng $0$.',
            'Số oxi hoá của ion đơn nguyên tử bằng điện tích ion; tổng số oxi hoá của các nguyên tử trong ion đa nguyên tử bằng điện tích ion.',
          ],
        },
        {
          type: 'p',
          text: 'Với mỗi chất dưới đây, em đặt số oxi hoá cần tìm rồi quan sát phần dương và phần âm của tổng. Khi tổng bằng $0$ (hoặc bằng điện tích ion), em đã tìm đúng.',
        },
        { type: 'widget', name: 'so-oxi-hoa' },
      ],
    },
    {
      heading: 'Chất oxi hoá, chất khử và phản ứng oxi hoá – khử',
      blocks: [
        {
          type: 'p',
          text: 'Xét phản ứng đốt sodium trong chlorine: $2\\overset{0}{\\mathrm{Na}} + \\overset{0}{\\mathrm{Cl_2}} \\rightarrow 2\\overset{+1}{\\mathrm{Na}}\\overset{-1}{\\mathrm{Cl}}$. Số oxi hoá của Na tăng vì mỗi nguyên tử Na nhường 1 electron; số oxi hoá của Cl giảm vì mỗi nguyên tử Cl nhận 1 electron.',
        },
        {
          type: 'table',
          caption: 'Bốn khái niệm của phản ứng oxi hoá – khử',
          head: ['Khái niệm', 'Nghĩa', 'Trong phản ứng trên'],
          rows: [
            ['Chất khử (chất bị oxi hoá)', 'Chất nhường electron', '$\\mathrm{Na}$'],
            ['Chất oxi hoá (chất bị khử)', 'Chất nhận electron', '$\\mathrm{Cl_2}$'],
            [
              'Quá trình oxi hoá (sự oxi hoá)',
              'Quá trình chất khử nhường electron',
              '$\\overset{0}{\\mathrm{Na}} \\rightarrow \\overset{+1}{\\mathrm{Na}} + 1e$',
            ],
            [
              'Quá trình khử (sự khử)',
              'Quá trình chất oxi hoá nhận electron',
              '$\\overset{0}{\\mathrm{Cl_2}} + 2e \\rightarrow 2\\overset{-1}{\\mathrm{Cl}}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng oxi hoá – khử',
          text: 'Phản ứng oxi hoá – khử là phản ứng hoá học trong đó có sự chuyển electron giữa các chất phản ứng; nói cách khác, sự nhường và sự nhận electron xảy ra đồng thời. Dấu hiệu nhận biết là có nguyên tố thay đổi số oxi hoá.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẹo nhớ',
          text: '"Khử cho, O nhận": chất khử cho electron (số oxi hoá tăng), chất oxi hoá nhận electron (số oxi hoá giảm). Tên gọi dễ nhầm: chất khử thì bị oxi hoá, chất oxi hoá thì bị khử.',
        },
        {
          type: 'p',
          text: 'Không có nguyên tố nào đổi số oxi hoá thì không phải phản ứng oxi hoá – khử, chẳng hạn $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$ hay $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$.',
        },
      ],
    },
    {
      heading: 'Lập phương trình bằng phương pháp thăng bằng electron',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc',
          text: 'Tổng số electron chất khử nhường bằng tổng số electron chất oxi hoá nhận.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định số oxi hoá của các nguyên tử có số oxi hoá thay đổi, từ đó xác định chất khử và chất oxi hoá.',
            'Viết quá trình oxi hoá và quá trình khử.',
            'Tìm hệ số thích hợp cho hai quá trình sao cho tổng electron nhường bằng tổng electron nhận.',
            'Đặt hệ số vào sơ đồ, tính các hệ số còn lại và kiểm tra số nguyên tử của mỗi nguyên tố ở hai vế.',
          ],
        },
      ],
    },
    {
      heading: 'Phản ứng oxi hoá – khử trong thực tiễn',
      blocks: [
        {
          type: 'table',
          caption: 'Một số phản ứng oxi hoá – khử quen thuộc',
          head: ['Lĩnh vực', 'Ví dụ'],
          rows: [
            [
              'Sự cháy, tạo năng lượng',
              '$\\mathrm{C} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{CO_2}$; đèn xì oxygen – acetylene: $\\mathrm{2C_2H_2} + \\mathrm{5O_2} \\xrightarrow{t^\\circ} \\mathrm{4CO_2} + \\mathrm{2H_2O}$',
            ],
            [
              'Luyện kim',
              '$\\mathrm{Fe_2O_3} + \\mathrm{3CO} \\xrightarrow{t^\\circ} \\mathrm{2Fe} + \\mathrm{3CO_2}$',
            ],
            [
              'Sản xuất hoá chất',
              '$\\mathrm{N_2} + \\mathrm{3H_2} \\overset{t^\\circ,\\ p,\\ \\text{xt}}{\\rightleftharpoons} \\mathrm{2NH_3}$; $\\mathrm{2SO_2} + \\mathrm{O_2} \\overset{t^\\circ,\\ \\mathrm{V_2O_5}}{\\rightleftharpoons} \\mathrm{2SO_3}$ khi sản xuất sulfuric acid',
            ],
            [
              'Sự han gỉ kim loại',
              '$\\mathrm{4Fe} + \\mathrm{3O_2} + 2x\\mathrm{H_2O} \\rightarrow \\mathrm{2Fe_2O_3} \\cdot x\\mathrm{H_2O}$: lớp gỉ màu nâu đỏ trên thép trong không khí ẩm',
            ],
            [
              'Chuyển hoá trong tự nhiên',
              'Khi có sét: $\\mathrm{N_2} + \\mathrm{O_2} \\xrightarrow{\\text{tia lửa điện}} \\mathrm{2NO}$, khởi đầu chuỗi tạo đạm trong nước mưa',
            ],
            [
              'Xác định nồng độ chất',
              'Dung dịch $\\mathrm{KMnO_4}$ là chất oxi hoá mạnh, dùng để xác định hàm lượng các chất khử như $\\mathrm{Fe^{2+}}$, $\\mathrm{H_2O_2}$',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Phản ứng oxi hoá – khử có lợi khi tạo ra năng lượng và vật liệu, có hại khi làm kim loại han gỉ hay thực phẩm ôi thiu. Hiểu cơ chế chuyển electron giúp con người khai thác mặt lợi và hạn chế mặt hại, chẳng hạn sơn phủ để ngăn sắt tiếp xúc với oxygen và hơi nước.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cân bằng thăng bằng electron từng bước',
    instruction:
      'Chọn một phản ứng rồi đi qua đủ bốn bước: chạm vào các nguyên tử đổi số oxi hoá (chúng sẽ được tô màu), chỉ ra chất khử và chất oxi hoá, viết hai quá trình, chọn hệ số để electron nhường bằng electron nhận, cuối cùng cân bằng các nguyên tố còn lại.',
  },
  examples: [
    {
      problem:
        'Xác định số oxi hoá của S trong $\\mathrm{H_2SO_4}$ và của N trong ion $\\mathrm{NH_4^+}$.',
      steps: [
        'Trong $\\mathrm{H_2SO_4}$: H là $+1$, O là $-2$. Đặt số oxi hoá của S là $x$, tổng trong phân tử bằng $0$: $2 \\cdot (+1) + x + 4 \\cdot (-2) = 0$, suy ra $x = +6$.',
        'Trong $\\mathrm{NH_4^+}$: H là $+1$. Đặt số oxi hoá của N là $y$, tổng trong ion bằng điện tích: $y + 4 \\cdot (+1) = +1$, suy ra $y = -3$.',
      ],
      answer: 'S có số oxi hoá $+6$, N có số oxi hoá $-3$.',
    },
    {
      problem:
        'Lập phương trình hoá học của phản ứng $\\mathrm{Mg} + \\mathrm{HNO_3} \\rightarrow \\mathrm{Mg(NO_3)_2} + \\mathrm{NO} + \\mathrm{H_2O}$ bằng phương pháp thăng bằng electron.',
      steps: [
        'Bước 1. $\\overset{0}{\\mathrm{Mg}} + \\mathrm{H}\\overset{+5}{\\mathrm{N}}\\mathrm{O_3} \\rightarrow \\overset{+2}{\\mathrm{Mg}}\\mathrm{(NO_3)_2} + \\overset{+2}{\\mathrm{N}}\\mathrm{O} + \\mathrm{H_2O}$. Mg là chất khử, $\\mathrm{HNO_3}$ là chất oxi hoá.',
        'Bước 2. Quá trình oxi hoá: $\\overset{0}{\\mathrm{Mg}} \\rightarrow \\overset{+2}{\\mathrm{Mg}} + 2e$. Quá trình khử: $\\overset{+5}{\\mathrm{N}} + 3e \\rightarrow \\overset{+2}{\\mathrm{N}}$.',
        'Bước 3. Nhân quá trình oxi hoá với $3$, quá trình khử với $2$: cả hai đều trao đổi $6$ electron.',
        'Bước 4. Đặt hệ số: $\\mathrm{3Mg} + \\mathrm{HNO_3} \\rightarrow \\mathrm{3Mg(NO_3)_2} + \\mathrm{2NO} + \\mathrm{H_2O}$. Số N ở vế phải là $3 \\cdot 2 + 2 = 8$ nên $\\mathrm{HNO_3}$ có hệ số $8$; từ $8$ H suy ra $\\mathrm{H_2O}$ có hệ số $4$. Kiểm tra O: $24 = 18 + 2 + 4$.',
      ],
      answer:
        '$\\mathrm{3Mg} + \\mathrm{8HNO_3} \\rightarrow \\mathrm{3Mg(NO_3)_2} + \\mathrm{2NO} + \\mathrm{4H_2O}$.',
    },
    {
      problem:
        'Lập phương trình hoá học của phản ứng $\\mathrm{Fe_2O_3} + \\mathrm{CO} \\rightarrow \\mathrm{Fe} + \\mathrm{CO_2}$ xảy ra trong lò cao. Chỉ rõ chất khử, chất oxi hoá.',
      steps: [
        'Bước 1. $\\overset{+3}{\\mathrm{Fe}}$ thành $\\overset{0}{\\mathrm{Fe}}$: số oxi hoá giảm, $\\mathrm{Fe_2O_3}$ là chất oxi hoá. $\\overset{+2}{\\mathrm{C}}$ thành $\\overset{+4}{\\mathrm{C}}$: số oxi hoá tăng, $\\mathrm{CO}$ là chất khử.',
        'Bước 2. Quá trình oxi hoá: $\\overset{+2}{\\mathrm{C}} \\rightarrow \\overset{+4}{\\mathrm{C}} + 2e$. Quá trình khử: $\\overset{+3}{\\mathrm{Fe}} + 3e \\rightarrow \\overset{0}{\\mathrm{Fe}}$.',
        'Bước 3. Nhân quá trình oxi hoá với $3$, quá trình khử với $2$: cả hai trao đổi $6$ electron.',
        'Bước 4. Đặt hệ số. Vế trái $1$ phân tử $\\mathrm{Fe_2O_3}$ có đủ $2$ Fe; kiểm tra O: $3 + 3 = 6 = 3 \\cdot 2$.',
      ],
      answer: '$\\mathrm{Fe_2O_3} + \\mathrm{3CO} \\rightarrow \\mathrm{2Fe} + \\mathrm{3CO_2}$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Số oxi hoá của Mn trong $\\mathrm{KMnO_4}$ là bao nhiêu?',
      answer: 7,
      hints: ['K là $+1$, O là $-2$, tổng trong phân tử bằng $0$.'],
      solution: '$(+1) + x + 4 \\cdot (-2) = 0$, suy ra $x = +7$.',
    },
    {
      type: 'number',
      prompt:
        'Số oxi hoá của N trong ion $\\mathrm{NO_3^-}$ là bao nhiêu? (số âm thì viết cả dấu trừ)',
      answer: 5,
      hints: ['Tổng số oxi hoá trong ion đa nguyên tử bằng điện tích của ion, tức $-1$.'],
      solution: '$x + 3 \\cdot (-2) = -1$, suy ra $x = +5$.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của N trong $\\mathrm{NH_3}$ là bao nhiêu? (số âm thì viết cả dấu trừ)',
      answer: -3,
      hints: ['H trong $\\mathrm{NH_3}$ có số oxi hoá $+1$.'],
      solution: '$x + 3 \\cdot (+1) = 0$, suy ra $x = -3$.',
    },
    {
      type: 'choice',
      prompt: 'Trong chất nào sau đây, sulfur có số oxi hoá $+4$?',
      options: ['$\\mathrm{H_2S}$', '$\\mathrm{S}$', '$\\mathrm{SO_2}$', '$\\mathrm{H_2SO_4}$'],
      answer: 2,
      hints: ['Tính lần lượt: tổng số oxi hoá trong phân tử bằng $0$; đơn chất có số oxi hoá $0$.'],
      solution:
        'S trong $\\mathrm{H_2S}$ là $-2$, trong đơn chất là $0$, trong $\\mathrm{SO_2}$ là $+4$, trong $\\mathrm{H_2SO_4}$ là $+6$.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây là phản ứng oxi hoá – khử?',
      options: [
        '$\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$',
        '$\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$',
        '$\\mathrm{2Fe} + \\mathrm{3Cl_2} \\xrightarrow{t^\\circ} \\mathrm{2FeCl_3}$',
        '$\\mathrm{BaCl_2} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{BaSO_4} + \\mathrm{2HCl}$',
      ],
      answer: 2,
      hints: ['Tìm phản ứng có nguyên tố thay đổi số oxi hoá.'],
      solution:
        'Chỉ ở phản ứng thứ ba, Fe đổi từ $0$ thành $+3$ và Cl đổi từ $0$ thành $-1$. Ba phản ứng còn lại không có nguyên tố nào đổi số oxi hoá.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi khái niệm với nội dung đúng.',
      left: ['Chất khử', 'Chất oxi hoá', 'Quá trình oxi hoá', 'Quá trình khử'],
      right: [
        'Chất nhường electron',
        'Chất nhận electron',
        'Quá trình chất khử nhường electron',
        'Quá trình chất oxi hoá nhận electron',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['"Khử cho, O nhận": chất khử cho electron, chất oxi hoá nhận electron.'],
      solution:
        'Chất khử nhường electron, và quá trình đó gọi là quá trình oxi hoá. Chất oxi hoá nhận electron, và quá trình đó gọi là quá trình khử.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{2Na} + \\mathrm{2H_2O} \\rightarrow \\mathrm{2NaOH} + \\mathrm{H_2}$, chất oxi hoá là',
      options: ['$\\mathrm{Na}$', '$\\mathrm{H_2O}$', '$\\mathrm{NaOH}$', '$\\mathrm{H_2}$'],
      answer: 1,
      hints: ['Chất oxi hoá là chất phản ứng có nguyên tố giảm số oxi hoá.'],
      solution:
        'H trong $\\mathrm{H_2O}$ giảm từ $+1$ xuống $0$ trong $\\mathrm{H_2}$, nên $\\mathrm{H_2O}$ là chất oxi hoá; Na tăng từ $0$ lên $+1$ nên là chất khử.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước lập phương trình bằng phương pháp thăng bằng electron.',
      items: [
        'Viết quá trình oxi hoá và quá trình khử.',
        'Đặt hệ số vào sơ đồ, cân bằng các nguyên tố còn lại.',
        'Xác định các nguyên tử đổi số oxi hoá, chất khử, chất oxi hoá.',
        'Tìm hệ số để tổng electron nhường bằng tổng electron nhận.',
      ],
      answer: [2, 0, 3, 1],
      hints: ['Phải biết nguyên tử nào đổi số oxi hoá thì mới viết được quá trình của nó.'],
      solution:
        'Xác định số oxi hoá, viết hai quá trình, tìm hệ số thăng bằng electron, rồi đặt hệ số và cân bằng phần còn lại.',
    },
    {
      type: 'number',
      prompt:
        'Lập phương trình của phản ứng $\\mathrm{Al} + \\mathrm{HNO_3} \\rightarrow \\mathrm{Al(NO_3)_3} + \\mathrm{NO} + \\mathrm{H_2O}$ với các hệ số nguyên, tối giản. Hệ số của $\\mathrm{HNO_3}$ là bao nhiêu?',
      answer: 4,
      hints: [
        'Al nhường 3 electron, N từ $+5$ xuống $+2$ nhận 3 electron.',
        'Đếm N ở vế phải: gồm N trong $\\mathrm{Al(NO_3)_3}$ và N trong $\\mathrm{NO}$.',
      ],
      solution:
        'Hai quá trình đều có hệ số $1$. Vế phải có $3 + 1 = 4$ nguyên tử N nên $\\mathrm{Al} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Al(NO_3)_3} + \\mathrm{NO} + \\mathrm{2H_2O}$.',
    },
    {
      type: 'number',
      prompt:
        'Giai đoạn đầu của quá trình Ostwald: $\\mathrm{NH_3} + \\mathrm{O_2} \\rightarrow \\mathrm{NO} + \\mathrm{H_2O}$. Với hệ số nguyên, tối giản, hệ số của $\\mathrm{O_2}$ là bao nhiêu?',
      answer: 5,
      hints: ['N từ $-3$ lên $+2$ nhường 5 electron; mỗi phân tử $\\mathrm{O_2}$ nhận 4 electron.'],
      solution:
        '$\\overset{-3}{\\mathrm{N}} \\rightarrow \\overset{+2}{\\mathrm{N}} + 5e$ nhân $4$; $\\overset{0}{\\mathrm{O_2}} + 4e \\rightarrow 2\\overset{-2}{\\mathrm{O}}$ nhân $5$. Phương trình: $\\mathrm{4NH_3} + \\mathrm{5O_2} \\rightarrow \\mathrm{4NO} + \\mathrm{6H_2O}$.',
    },
    {
      type: 'multi',
      prompt: 'Những quá trình nào sau đây có phản ứng oxi hoá – khử?',
      options: [
        'Đốt than trong không khí',
        'Đinh sắt bị gỉ trong không khí ẩm',
        'Nung đá vôi tạo vôi sống',
        'Sét tạo khí $\\mathrm{NO}$ từ $\\mathrm{N_2}$ và $\\mathrm{O_2}$',
      ],
      answers: [0, 1, 3],
      hints: ['Viết phương trình mỗi quá trình rồi xem nguyên tố nào đổi số oxi hoá.'],
      solution:
        'Đốt than ($\\mathrm{C}$ từ $0$ lên $+4$), sắt gỉ ($\\mathrm{Fe}$ tăng số oxi hoá) và sét tạo $\\mathrm{NO}$ ($\\mathrm{N}$ từ $0$ lên $+2$) đều là phản ứng oxi hoá – khử. Nung đá vôi $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$ không đổi số oxi hoá.',
    },
  ],
  takeaways: [
    'Số oxi hoá viết dấu trước, số sau; đơn chất là $0$; tổng trong phân tử bằng $0$, trong ion bằng điện tích ion.',
    'Chất khử nhường electron, số oxi hoá tăng; chất oxi hoá nhận electron, số oxi hoá giảm.',
    'Phản ứng oxi hoá – khử luôn có nguyên tố đổi số oxi hoá: sự nhường và sự nhận electron xảy ra đồng thời.',
    'Bốn bước thăng bằng electron dựa trên nguyên tắc: tổng electron nhường bằng tổng electron nhận.',
  ],
};
