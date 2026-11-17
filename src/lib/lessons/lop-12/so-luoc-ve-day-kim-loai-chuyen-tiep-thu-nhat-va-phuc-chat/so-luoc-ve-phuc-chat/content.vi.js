/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phức chất gồm nguyên tử trung tâm (thường là ion kim loại) liên kết với các phối tử bằng liên kết cho – nhận; công thức đặt trong móc vuông, điện tích phức chất bằng điện tích nguyên tử trung tâm cộng điện tích các phối tử; phức chất thường có dạng tứ diện, vuông phẳng hoặc bát diện.',
  intro:
    'Hồng cầu đỏ nhờ heme, lá cây xanh nhờ chlorophyll, thuốc thử Tollens tráng bạc lên thành ống nghiệm: tất cả đều là phức chất. Trong đó, một ion kim loại "nắm giữ" xung quanh nó một số phân tử hay ion theo một hình dạng không gian xác định. Chúng liên kết với nhau như thế nào?',
  objectives: [
    'Nêu được khái niệm phức chất, nguyên tử trung tâm, phối tử, cầu nội và cầu ngoại.',
    'Xác định được điện tích của phức chất và điện tích của nguyên tử trung tâm.',
    'Mô tả được liên kết cho – nhận giữa nguyên tử trung tâm và phối tử; nêu được sự hình thành phức chất aqua.',
    'Nêu được các dạng hình học phổ biến của phức chất: tứ diện, vuông phẳng, bát diện.',
  ],
  sections: [
    {
      heading: 'Khái niệm phức chất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phức chất',
          text: 'Phức chất gồm nguyên tử trung tâm (kí hiệu M) và các phối tử (kí hiệu L). Nguyên tử trung tâm là nguyên tử hoặc cation kim loại; phối tử là anion hoặc phân tử liên kết với nguyên tử trung tâm. Công thức tổng quát $\\mathrm{[ML_n]}$, trong đó M và các phối tử được đặt trong móc vuông.',
        },
        {
          type: 'p',
          text: 'Phức chất có thể mang điện tích hoặc không mang điện tích. Ví dụ: $\\mathrm{[Co(NH_3)_6]^{3+}}$ có nguyên tử trung tâm $\\mathrm{Co^{3+}}$, phối tử $\\mathrm{NH_3}$, điện tích $+3$; $\\mathrm{[Zn(OH)_4]^{2-}}$ có nguyên tử trung tâm $\\mathrm{Zn^{2+}}$, phối tử $\\mathrm{OH^-}$, điện tích $-2$; $\\mathrm{[PtCl_2(NH_3)_2]}$ không mang điện.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Điện tích của phức chất',
          text: 'Điện tích phức chất = điện tích nguyên tử trung tâm + tổng điện tích các phối tử. Ví dụ $\\mathrm{[Zn(OH)_4]^{2-}}$: $(+2) + 4 \\cdot (-1) = -2$.',
        },
        {
          type: 'p',
          text: 'Phần trong móc vuông gọi là cầu nội. Khi cầu nội mang điện, phức chất thường có thêm ion trái dấu ở cầu ngoại để trung hoà điện. Ví dụ $\\mathrm{[Ag(NH_3)_2]OH}$ gồm cầu nội $\\mathrm{[Ag(NH_3)_2]^+}$ và ion cầu ngoại $\\mathrm{OH^-}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[Ag(NH_3)_2]OH} \\longrightarrow \\mathrm{[Ag(NH_3)_2]^+} + \\mathrm{OH^-}',
        },
        {
          type: 'p',
          text: 'Cầu nội quyết định tính chất của phức chất, nên thường chỉ cần xét cầu nội: chính cation $\\mathrm{[Ag(NH_3)_2]^+}$ tạo nên tính chất của thuốc thử Tollens.',
        },
      ],
    },
    {
      heading: 'Liên kết trong phức chất',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Liên kết cho – nhận',
          text: 'Liên kết giữa nguyên tử trung tâm và phối tử là liên kết cho – nhận: phối tử cho cặp electron chưa liên kết vào orbital trống của nguyên tử trung tâm. Phối tử có n cặp electron cho vào thì tạo n liên kết cho – nhận.',
        },
        {
          type: 'table',
          head: ['Phối tử', 'Nguyên tử cho cặp electron', 'Điện tích'],
          rows: [
            ['$\\mathrm{H_2O}$', 'O', '0'],
            ['$\\mathrm{NH_3}$', 'N', '0'],
            ['$\\mathrm{Cl^-}$', 'Cl', '$-1$'],
            ['$\\mathrm{OH^-}$', 'O', '$-1$'],
            ['$\\mathrm{CN^-}$', 'C', '$-1$'],
          ],
          caption: 'Một số phối tử thường gặp.',
        },
        {
          type: 'p',
          text: 'Ví dụ trong $\\mathrm{[Co(NH_3)_6]^{3+}}$, mỗi phân tử $\\mathrm{NH_3}$ cho cặp electron chưa liên kết của nguyên tử N vào orbital trống của $\\mathrm{Co^{3+}}$, tạo 6 liên kết cho – nhận.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phức chất aqua',
          text: 'Trong dung dịch nước, ion kim loại chuyển tiếp $\\mathrm{M^{n+}}$ nhận cặp electron chưa liên kết của các phân tử $\\mathrm{H_2O}$, tạo phức chất aqua, thường là $\\mathrm{[M(H_2O)_6]^{n+}}$. Màu của dung dịch muối kim loại chuyển tiếp chính là màu của phức chất aqua, ví dụ $\\mathrm{[Cu(H_2O)_6]^{2+}}$ màu xanh.',
        },
      ],
    },
    {
      heading: 'Dạng hình học của phức chất',
      blocks: [
        {
          type: 'p',
          text: 'Các phối tử sắp xếp quanh nguyên tử trung tâm theo một hình dạng xác định. Phức chất $\\mathrm{[ML_4]}$ thường có dạng tứ diện hoặc vuông phẳng; phức chất $\\mathrm{[ML_6]}$ có dạng bát diện.',
        },
        {
          type: 'table',
          head: ['Dạng hình học', 'Số phối tử', 'Góc giữa hai phối tử cạnh nhau', 'Ví dụ'],
          rows: [
            [
              'Tứ diện',
              '4',
              '109,5°',
              '$\\mathrm{[Zn(OH)_4]^{2-}}$, $\\mathrm{[Zn(NH_3)_4]^{2+}}$',
            ],
            [
              'Vuông phẳng',
              '4',
              '90°',
              '$\\mathrm{[PtCl_4]^{2-}}$, $\\mathrm{[Ni(CN)_4]^{2-}}$, $\\mathrm{[PtCl_2(NH_3)_2]}$',
            ],
            [
              'Bát diện',
              '6',
              '90°',
              '$\\mathrm{[Co(NH_3)_6]^{3+}}$, $\\mathrm{[Fe(CN)_6]^{4-}}$, $\\mathrm{[Fe(H_2O)_6]^{3+}}$',
            ],
          ],
          caption: 'Ba dạng hình học phổ biến của phức chất.',
        },
        {
          type: 'p',
          text: 'Trong dạng tứ diện, nguyên tử trung tâm ở tâm và 4 phối tử ở 4 đỉnh của tứ diện đều; trong dạng vuông phẳng, nguyên tử trung tâm và 4 phối tử cùng nằm trên một mặt phẳng; trong dạng bát diện, 6 phối tử ở 6 đỉnh của hình bát diện đều. Hầu hết phức chất aqua $\\mathrm{[M(H_2O)_6]^{n+}}$ có dạng bát diện.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ dựng phức chất',
    instruction:
      'Chọn ion trung tâm, phối tử và dạng hình học: công thức, điện tích và mô hình không gian của phức chất hiện ra ngay. Kéo hoặc dùng phím mũi tên để xoay mô hình; mũi tên chỉ hướng phối tử cho cặp electron. Ở chế độ "Dựng theo công thức", hãy dựng đúng phức chất được yêu cầu.',
  },
  examples: [
    {
      problem:
        'Cho phức chất $\\mathrm{[Fe(CN)_6]^{4-}}$. Xác định phối tử, điện tích của nguyên tử trung tâm, số liên kết cho – nhận và dạng hình học.',
      steps: [
        'Phối tử là ion $\\mathrm{CN^-}$, có 6 phối tử; nguyên tử C của mỗi $\\mathrm{CN^-}$ cho một cặp electron.',
        'Gọi điện tích của Fe là $x$: $x + 6 \\cdot (-1) = -4 \\Rightarrow x = +2$. Nguyên tử trung tâm là $\\mathrm{Fe^{2+}}$.',
        '6 phối tử cho 6 cặp electron, tạo 6 liên kết cho – nhận.',
        'Phức chất $\\mathrm{[ML_6]}$ có dạng bát diện.',
      ],
      answer:
        'Phối tử $\\mathrm{CN^-}$; nguyên tử trung tâm $\\mathrm{Fe^{2+}}$; 6 liên kết cho – nhận; dạng bát diện.',
    },
    {
      problem:
        'Cho phức chất $\\mathrm{[PtCl_2(NH_3)_2]}$ (cisplatin) có dạng vuông phẳng. Tính điện tích của nguyên tử trung tâm và cho biết các nguyên tử cho cặp electron.',
      steps: [
        'Phức chất không mang điện. Phối tử gồm 2 ion $\\mathrm{Cl^-}$ và 2 phân tử $\\mathrm{NH_3}$.',
        'Gọi điện tích của Pt là $x$: $x + 2 \\cdot (-1) + 2 \\cdot 0 = 0 \\Rightarrow x = +2$.',
        'Hai nguyên tử Cl (của $\\mathrm{Cl^-}$) và hai nguyên tử N (của $\\mathrm{NH_3}$) cho cặp electron vào orbital trống của $\\mathrm{Pt^{2+}}$: 4 liên kết cho – nhận, cùng nằm trong một mặt phẳng.',
      ],
      answer: 'Nguyên tử trung tâm $\\mathrm{Pt^{2+}}$; nguyên tử cho cặp electron là Cl và N.',
    },
    {
      problem:
        'Xác định cầu nội, cầu ngoại và nguyên tử trung tâm của phức chất $\\mathrm{[Ag(NH_3)_2]OH}$.',
      steps: [
        'Phần trong móc vuông là cầu nội: $\\mathrm{[Ag(NH_3)_2]^+}$; ion cầu ngoại là $\\mathrm{OH^-}$.',
        'Trong cầu nội: $x + 2 \\cdot 0 = +1 \\Rightarrow x = +1$, nguyên tử trung tâm là $\\mathrm{Ag^+}$, hai phối tử $\\mathrm{NH_3}$.',
      ],
      answer:
        'Cầu nội $\\mathrm{[Ag(NH_3)_2]^+}$, cầu ngoại $\\mathrm{OH^-}$, nguyên tử trung tâm $\\mathrm{Ag^+}$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Co^{3+}}$ liên kết với 6 phân tử $\\mathrm{NH_3}$ tạo thành phức chất. Điện tích của phức chất là bao nhiêu?',
      answer: 3,
      hints: ['$\\mathrm{NH_3}$ là phân tử trung hoà.'],
      solution: '$(+3) + 6 \\cdot 0 = +3$: phức chất $\\mathrm{[Co(NH_3)_6]^{3+}}$.',
    },
    {
      type: 'number',
      prompt:
        'Điện tích (số oxi hoá) của nguyên tử trung tâm Cu trong $\\mathrm{[CuCl_4]^{2-}}$ là bao nhiêu?',
      answer: 2,
      hints: ['Mỗi phối tử $\\mathrm{Cl^-}$ mang điện tích $-1$.'],
      solution: '$x + 4 \\cdot (-1) = -2 \\Rightarrow x = +2$.',
    },
    {
      type: 'number',
      prompt:
        'Điện tích của nguyên tử trung tâm Fe trong $\\mathrm{[Fe(CN)_6]^{3-}}$ là bao nhiêu?',
      answer: 3,
      hints: ['Điện tích phức chất = điện tích Fe + tổng điện tích 6 ion $\\mathrm{CN^-}$.'],
      solution: '$x + 6 \\cdot (-1) = -3 \\Rightarrow x = +3$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phức chất $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$, nguyên tử nào của phối tử $\\mathrm{NH_3}$ cho cặp electron?',
      options: ['N', 'H', 'Cu', 'O'],
      answer: 0,
      hints: ['Nguyên tử cho phải có cặp electron chưa liên kết.'],
      solution:
        'Trong $\\mathrm{NH_3}$, chỉ nguyên tử N có một cặp electron chưa liên kết; N cho cặp electron này vào orbital trống của $\\mathrm{Cu^{2+}}$.',
    },
    {
      type: 'multi',
      prompt: 'Những tiểu phân nào sau đây có thể làm phối tử?',
      options: [
        '$\\mathrm{NH_3}$',
        '$\\mathrm{H_2O}$',
        '$\\mathrm{Cl^-}$',
        '$\\mathrm{CN^-}$',
        '$\\mathrm{NH_4^+}$',
        '$\\mathrm{Na^+}$',
      ],
      answers: [0, 1, 2, 3],
      hints: [
        'Phối tử phải có cặp electron chưa liên kết để cho vào orbital trống của nguyên tử trung tâm.',
      ],
      solution:
        '$\\mathrm{NH_3}$, $\\mathrm{H_2O}$, $\\mathrm{Cl^-}$, $\\mathrm{CN^-}$ đều có cặp electron chưa liên kết. Trong $\\mathrm{NH_4^+}$, cặp electron của N đã dùng để liên kết với $\\mathrm{H^+}$; $\\mathrm{Na^+}$ là cation kim loại, không cho được cặp electron.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phức chất với dạng hình học của nó.',
      left: [
        '$\\mathrm{[PtCl_4]^{2-}}$',
        '$\\mathrm{[Zn(OH)_4]^{2-}}$',
        '$\\mathrm{[Fe(H_2O)_6]^{3+}}$',
      ],
      right: ['vuông phẳng', 'tứ diện', 'bát diện', 'lăng trụ'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Phức chất có 6 phối tử có dạng bát diện; trong hai phức chất 4 phối tử, phức chất của $\\mathrm{Pt^{2+}}$ nằm trên một mặt phẳng.',
      ],
      solution:
        '$\\mathrm{[PtCl_4]^{2-}}$ vuông phẳng, $\\mathrm{[Zn(OH)_4]^{2-}}$ tứ diện, $\\mathrm{[Fe(H_2O)_6]^{3+}}$ bát diện.',
    },
    {
      type: 'number',
      prompt:
        'Phức chất $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$ có bao nhiêu liên kết cho – nhận giữa nguyên tử trung tâm và phối tử?',
      answer: 6,
      hints: ['Mỗi phối tử ở đây cho một cặp electron.'],
      solution:
        '4 phân tử $\\mathrm{NH_3}$ và 2 phân tử $\\mathrm{H_2O}$ cho tổng cộng 6 cặp electron: 6 liên kết cho – nhận.',
    },
    {
      type: 'choice',
      prompt: 'Trong phức chất $\\mathrm{[Ag(NH_3)_2]OH}$, ion cầu ngoại là',
      options: [
        '$\\mathrm{OH^-}$',
        '$\\mathrm{Ag^+}$',
        '$\\mathrm{NH_3}$',
        '$\\mathrm{[Ag(NH_3)_2]^+}$',
      ],
      answer: 0,
      hints: ['Cầu nội là phần nằm trong móc vuông.'],
      solution:
        'Cầu nội là $\\mathrm{[Ag(NH_3)_2]^+}$; ion nằm ngoài móc vuông, $\\mathrm{OH^-}$, là ion cầu ngoại.',
    },
    {
      type: 'text',
      prompt:
        'Phức chất tạo bởi ion kim loại chuyển tiếp với các phân tử nước, như $\\mathrm{[Fe(H_2O)_6]^{3+}}$, được gọi là phức chất gì?',
      accept: ['aqua', 'phức chất aqua', 'phức aqua'],
      hints: ['Tên gọi bắt nguồn từ tiếng Latin của "nước".'],
      solution: 'Đó là phức chất aqua $\\mathrm{[M(H_2O)_6]^{n+}}$, thường có dạng bát diện.',
    },
  ],
  takeaways: [
    'Phức chất $\\mathrm{[ML_n]}$: nguyên tử trung tâm M (nguyên tử, cation kim loại) và phối tử L (anion, phân tử).',
    'Điện tích phức chất = điện tích nguyên tử trung tâm + tổng điện tích phối tử.',
    'Cầu nội (trong móc vuông) quyết định tính chất; ion cầu ngoại trung hoà điện tích.',
    'Liên kết M – L là liên kết cho – nhận: phối tử cho cặp electron chưa liên kết vào orbital trống của M.',
    'Dạng hình học: $\\mathrm{[ML_4]}$ tứ diện hoặc vuông phẳng, $\\mathrm{[ML_6]}$ bát diện.',
  ],
};
