/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 4: số oxi hoá, chất khử, chất oxi hoá, quá trình oxi hoá, quá trình khử và cách lập phương trình phản ứng oxi hoá – khử bằng phương pháp thăng bằng electron.',
  intro:
    'Chương 4 chỉ xoay quanh một ý: electron chuyển từ chất này sang chất khác. Từ đó có số oxi hoá để theo dõi, có chất khử và chất oxi hoá để gọi tên, và có nguyên tắc thăng bằng electron để cân bằng những phương trình phức tạp. Bài ôn tập này hệ thống lại kiến thức, cho em tự cân bằng các phản ứng với kiểm tra tức thì, luyện tập sinh tự động và làm bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá các khái niệm: số oxi hoá, chất khử, chất oxi hoá, quá trình oxi hoá, quá trình khử.',
    'Xác định được số oxi hoá và vai trò của các chất trong phản ứng.',
    'Lập được phương trình phản ứng oxi hoá – khử và tính toán theo tổng số electron trao đổi.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Quy tắc xác định số oxi hoá',
          head: ['Đối tượng', 'Số oxi hoá'],
          rows: [
            ['Nguyên tử trong đơn chất', '$0$'],
            ['H trong hợp chất', 'Thường là $+1$ (hydride kim loại: $-1$)'],
            ['O trong hợp chất', 'Thường là $-2$ (peroxide: $-1$; $\\mathrm{OF_2}$: $+2$)'],
            ['F trong hợp chất', '$-1$'],
            ['Kim loại điển hình', 'Nhóm IA: $+1$; nhóm IIA: $+2$; Al: $+3$'],
            ['Tổng trong phân tử', '$0$'],
            ['Ion', 'Đơn nguyên tử: bằng điện tích; đa nguyên tử: tổng bằng điện tích'],
          ],
        },
        {
          type: 'table',
          caption: 'Chất khử và chất oxi hoá',
          head: ['Đặc điểm', 'Chất khử', 'Chất oxi hoá'],
          rows: [
            ['Electron', 'Nhường', 'Nhận'],
            ['Số oxi hoá', 'Tăng', 'Giảm'],
            ['Quá trình xảy ra', 'Quá trình oxi hoá', 'Quá trình khử'],
            ['Còn gọi là', 'Chất bị oxi hoá', 'Chất bị khử'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Bốn bước của phương pháp thăng bằng electron',
          text: 'Nguyên tắc: tổng electron nhường bằng tổng electron nhận. (1) Xác định số oxi hoá, chất khử, chất oxi hoá. (2) Viết quá trình oxi hoá và quá trình khử. (3) Tìm hệ số cho hai quá trình. (4) Đặt hệ số vào sơ đồ, cân bằng phần còn lại và kiểm tra.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\overset{0}{\\mathrm{N_2}} + 6e \\rightarrow 2\\overset{-3}{\\mathrm{N}} \\quad (\\times 1) \\\\ &\\overset{0}{\\mathrm{H_2}} \\rightarrow 2\\overset{+1}{\\mathrm{H}} + 2e \\quad (\\times 3) \\\\ &\\mathrm{N_2} + \\mathrm{3H_2} \\rightarrow \\mathrm{2NH_3} \\end{aligned}',
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng của chương. Đáp án là số; với số thập phân, em dùng dấu phẩy như $0{,}25$; số oxi hoá âm thì viết cả dấu trừ. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Tự cân bằng phản ứng',
    instruction:
      'Chỉnh hệ số của từng chất. Bảng đếm nguyên tử cho biết ngay nguyên tố nào đã khớp ở hai vế. Khi cần, mở gợi ý để xem hai quá trình và hệ số thăng bằng electron.',
  },
  examples: [
    {
      problem:
        'Lập phương trình của phản ứng $\\mathrm{Cu} + \\mathrm{HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{NO_2} + \\mathrm{H_2O}$ (nitric acid đặc). Chỉ rõ chất khử, chất oxi hoá.',
      steps: [
        'Cu tăng từ $0$ lên $+2$: Cu là chất khử. N giảm từ $+5$ xuống $+4$ trong $\\mathrm{NO_2}$: $\\mathrm{HNO_3}$ là chất oxi hoá.',
        'Quá trình oxi hoá: $\\overset{0}{\\mathrm{Cu}} \\rightarrow \\overset{+2}{\\mathrm{Cu}} + 2e$, nhân $1$. Quá trình khử: $\\overset{+5}{\\mathrm{N}} + 1e \\rightarrow \\overset{+4}{\\mathrm{N}}$, nhân $2$.',
        'Đặt hệ số: $\\mathrm{Cu} + \\mathrm{HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{2NO_2} + \\mathrm{H_2O}$. Vế phải có $2 + 2 = 4$ N, nên $\\mathrm{HNO_3}$ có hệ số $4$; từ $4$ H suy ra $\\mathrm{H_2O}$ có hệ số $2$.',
        'Kiểm tra O: vế trái $12$; vế phải $6 + 4 + 2 = 12$.',
      ],
      answer:
        '$\\mathrm{Cu} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{2NO_2} + \\mathrm{2H_2O}$.',
    },
    {
      problem:
        'Lập phương trình của phản ứng $\\mathrm{KMnO_4} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{MnCl_2} + \\mathrm{Cl_2} + \\mathrm{H_2O}$. Trong phản ứng, có bao nhiêu phân tử $\\mathrm{HCl}$ đóng vai trò chất khử?',
      steps: [
        'Quá trình khử: $\\overset{+7}{\\mathrm{Mn}} + 5e \\rightarrow \\overset{+2}{\\mathrm{Mn}}$, nhân $2$. Quá trình oxi hoá: $2\\overset{-1}{\\mathrm{Cl}} \\rightarrow \\overset{0}{\\mathrm{Cl_2}} + 2e$, nhân $5$.',
        'Đặt hệ số: $\\mathrm{2KMnO_4} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{2MnCl_2} + \\mathrm{5Cl_2} + \\mathrm{H_2O}$. Số K cho $2$ KCl. Số Cl ở vế phải: $2 + 2 \\cdot 2 + 5 \\cdot 2 = 16$, nên $\\mathrm{HCl}$ có hệ số $16$. Từ $16$ H suy ra $8\\,\\mathrm{H_2O}$.',
        'Trong $16$ phân tử HCl, chỉ $10$ nguyên tử Cl đổi số oxi hoá để tạo $5\\,\\mathrm{Cl_2}$; $6$ phân tử còn lại tạo muối, không đổi số oxi hoá.',
      ],
      answer:
        '$\\mathrm{2KMnO_4} + \\mathrm{16HCl} \\rightarrow \\mathrm{2KCl} + \\mathrm{2MnCl_2} + \\mathrm{5Cl_2} + \\mathrm{8H_2O}$; có $10$ phân tử HCl đóng vai trò chất khử.',
    },
    {
      problem:
        'Cho $3{,}6$ g Mg tác dụng hoàn toàn với dung dịch $\\mathrm{HNO_3}$ loãng, dư, sản phẩm khử duy nhất là khí NO. Tính thể tích khí NO ở điều kiện chuẩn. Biết $M_{\\mathrm{Mg}} = 24$ g/mol, ở điều kiện chuẩn $1$ mol khí chiếm $24{,}79$ L.',
      steps: [
        '$n_{\\mathrm{Mg}} = \\dfrac{3{,}6}{24} = 0{,}15$ mol. Mỗi nguyên tử Mg nhường $2$ electron, nên số mol electron nhường là $0{,}15 \\cdot 2 = 0{,}3$ mol.',
        'Mỗi N từ $+5$ xuống $+2$ nhận $3$ electron, nên $n_{\\mathrm{NO}} = \\dfrac{0{,}3}{3} = 0{,}1$ mol.',
        '$V_{\\mathrm{NO}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
      ],
      answer: '$V_{\\mathrm{NO}} = 2{,}479$ L.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong phản ứng oxi hoá – khử, chất oxi hoá là chất',
      options: [
        'nhường electron, số oxi hoá tăng',
        'nhận electron, số oxi hoá giảm',
        'nhường electron, số oxi hoá giảm',
        'nhận electron, số oxi hoá tăng',
      ],
      answer: 1,
      hints: ['Nhận electron (mang điện âm) thì số oxi hoá thay đổi theo chiều nào?'],
      solution: 'Chất oxi hoá nhận electron, nên số oxi hoá của nguyên tố trong đó giảm.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{H_2}$ (sulfuric acid loãng), mỗi nguyên tử Fe đã',
      options: ['nhường 2 electron', 'nhận 2 electron', 'nhường 1 electron', 'nhận 1 electron'],
      answer: 0,
      hints: ['So sánh số oxi hoá của Fe trong đơn chất và trong $\\mathrm{FeSO_4}$.'],
      solution: 'Fe từ $0$ lên $+2$: mỗi nguyên tử Fe nhường $2$ electron.',
    },
    {
      type: 'choice',
      prompt:
        'Cho nước chlorine vào dung dịch NaBr: $\\mathrm{Cl_2} + \\mathrm{2NaBr} \\rightarrow \\mathrm{2NaCl} + \\mathrm{Br_2}$. Phát biểu nào đúng?',
      options: [
        '$\\mathrm{Cl_2}$ là chất oxi hoá, NaBr là chất khử',
        '$\\mathrm{Cl_2}$ là chất khử, NaBr là chất oxi hoá',
        '$\\mathrm{Cl_2}$ vừa là chất oxi hoá vừa là chất khử',
        'Đây không phải phản ứng oxi hoá – khử',
      ],
      answer: 0,
      hints: ['Theo dõi số oxi hoá của Cl và của Br.'],
      solution:
        'Cl giảm từ $0$ xuống $-1$ nên $\\mathrm{Cl_2}$ là chất oxi hoá; Br tăng từ $-1$ lên $0$ nên NaBr là chất khử.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của Cr trong $\\mathrm{K_2Cr_2O_7}$ là bao nhiêu?',
      answer: 6,
      hints: ['Có $2$ nguyên tử Cr, nhớ chia đều khi tính.'],
      solution: '$2 \\cdot (+1) + 2x + 7 \\cdot (-2) = 0$, suy ra $2x = 12$, $x = +6$.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của Cl trong $\\mathrm{NaClO}$ là bao nhiêu?',
      answer: 1,
      hints: ['Na là $+1$, O là $-2$.'],
      solution: '$(+1) + x + (-2) = 0$, suy ra $x = +1$.',
    },
    {
      type: 'number',
      prompt:
        'Số oxi hoá của S trong ion $\\mathrm{S^{2-}}$ là bao nhiêu? (số âm thì viết cả dấu trừ)',
      answer: -2,
      hints: ['Với ion đơn nguyên tử, số oxi hoá bằng điện tích ion.'],
      solution: 'Ion $\\mathrm{S^{2-}}$ có điện tích $2-$ nên số oxi hoá là $-2$.',
    },
    {
      type: 'choice',
      prompt: 'Trong phản ứng nào sau đây $\\mathrm{NH_3}$ đóng vai trò chất khử?',
      options: [
        '$\\mathrm{4NH_3} + \\mathrm{5O_2} \\rightarrow \\mathrm{4NO} + \\mathrm{6H_2O}$',
        '$\\mathrm{NH_3} + \\mathrm{HCl} \\rightarrow \\mathrm{NH_4Cl}$',
        '$\\mathrm{2NH_3} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{(NH_4)_2SO_4}$',
        '$\\mathrm{NH_3} + \\mathrm{HNO_3} \\rightarrow \\mathrm{NH_4NO_3}$',
      ],
      answer: 0,
      hints: ['Chất khử chứa nguyên tố có số oxi hoá tăng; tìm phản ứng N đổi số oxi hoá.'],
      solution:
        'Chỉ ở phản ứng đầu N của $\\mathrm{NH_3}$ tăng từ $-3$ lên $+2$. Ba phản ứng còn lại N của $\\mathrm{NH_3}$ vẫn là $-3$ trong ion $\\mathrm{NH_4^+}$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi sự thay đổi số oxi hoá với số electron trao đổi của một nguyên tử.',
      left: [
        '$\\overset{+6}{\\mathrm{S}} \\rightarrow \\overset{+4}{\\mathrm{S}}$',
        '$\\overset{+5}{\\mathrm{N}} \\rightarrow \\overset{+2}{\\mathrm{N}}$',
        '$\\overset{+7}{\\mathrm{Mn}} \\rightarrow \\overset{+2}{\\mathrm{Mn}}$',
        '$\\overset{+2}{\\mathrm{Fe}} \\rightarrow \\overset{+3}{\\mathrm{Fe}}$',
      ],
      right: [
        'Nhận 2 electron',
        'Nhận 3 electron',
        'Nhận 5 electron',
        'Nhường 1 electron',
        'Nhường 2 electron',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Số oxi hoá giảm là nhận electron, tăng là nhường electron.'],
      solution:
        'S: giảm $2$, nhận $2$ electron. N: giảm $3$, nhận $3$ electron. Mn: giảm $5$, nhận $5$ electron. Fe: tăng $1$, nhường $1$ electron.',
    },
    {
      type: 'number',
      prompt:
        'Lập phương trình của phản ứng $\\mathrm{Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + \\mathrm{SO_2} + \\mathrm{H_2O}$ (sulfuric acid đặc, nóng) với các hệ số nguyên, tối giản. Hệ số của $\\mathrm{H_2SO_4}$ là bao nhiêu?',
      answer: 6,
      hints: [
        'Viết cho $2$ nguyên tử Fe: $2\\overset{0}{\\mathrm{Fe}} \\rightarrow 2\\overset{+3}{\\mathrm{Fe}} + 6e$.',
        'S từ $+6$ xuống $+4$ nhận $2$ electron nên quá trình này nhân $3$; rồi đếm S ở vế phải.',
      ],
      solution:
        'Đặt $\\mathrm{2Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + \\mathrm{3SO_2} + \\mathrm{H_2O}$. Vế phải có $3 + 3 = 6$ S, nên $\\mathrm{2Fe} + \\mathrm{6H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + \\mathrm{3SO_2} + \\mathrm{6H_2O}$.',
    },
    {
      type: 'number',
      prompt:
        'Cho $6{,}4$ g Cu tác dụng hoàn toàn với dung dịch $\\mathrm{H_2SO_4}$ đặc, nóng, dư, sản phẩm khử duy nhất là $\\mathrm{SO_2}$. Tính thể tích khí $\\mathrm{SO_2}$ ở điều kiện chuẩn (lít). Biết $M_{\\mathrm{Cu}} = 64$ g/mol, ở điều kiện chuẩn $1$ mol khí chiếm $24{,}79$ L.',
      answer: 2.479,
      tolerance: 0.005,
      unit: 'L',
      hints: [
        'Tính $n_{\\mathrm{Cu}}$ rồi số mol electron nhường.',
        'Mỗi phân tử $\\mathrm{SO_2}$ tạo thành ứng với $2$ electron nhận.',
      ],
      solution:
        '$n_{\\mathrm{Cu}} = 0{,}1$ mol, electron nhường $0{,}2$ mol, nên $n_{\\mathrm{SO_2}} = 0{,}1$ mol và $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ $20{,}00$ mL dung dịch $\\mathrm{FeSO_4}$ trong môi trường acid thì cần vừa đủ $10{,}00$ mL dung dịch $\\mathrm{KMnO_4}$ $0{,}02$ M. Biết phương trình $\\mathrm{10FeSO_4} + \\mathrm{2KMnO_4} + \\mathrm{8H_2SO_4} \\rightarrow \\mathrm{5Fe_2(SO_4)_3} + \\mathrm{K_2SO_4} + \\mathrm{2MnSO_4} + \\mathrm{8H_2O}$. Tính nồng độ mol của dung dịch $\\mathrm{FeSO_4}$ (M).',
      answer: 0.05,
      tolerance: 0.0005,
      unit: 'M',
      hints: [
        'Tính số mol $\\mathrm{KMnO_4}$ đã dùng.',
        'Theo phương trình, số mol $\\mathrm{FeSO_4}$ gấp $5$ lần số mol $\\mathrm{KMnO_4}$.',
      ],
      solution:
        '$n_{\\mathrm{KMnO_4}} = 0{,}01 \\cdot 0{,}02 = 2 \\cdot 10^{-4}$ mol; $n_{\\mathrm{FeSO_4}} = 10^{-3}$ mol; $C_M = \\dfrac{10^{-3}}{0{,}02} = 0{,}05$ M.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng.',
      options: [
        'Tổng số electron chất khử nhường bằng tổng số electron chất oxi hoá nhận.',
        'Chất khử là chất bị khử.',
        'Số oxi hoá của oxygen trong mọi hợp chất đều là $-2$.',
        'Trong đơn chất, số oxi hoá của nguyên tử bằng $0$.',
      ],
      answers: [0, 3],
      hints: ['Nhớ tên gọi: chất khử thì bị oxi hoá. Nhớ các ngoại lệ của oxygen.'],
      solution:
        'Phát biểu thứ nhất và thứ tư đúng. Chất khử là chất bị oxi hoá. Oxygen trong $\\mathrm{H_2O_2}$ có số oxi hoá $-1$.',
    },
  ],
  takeaways: [
    'Theo dõi số oxi hoá để biết electron đi từ đâu đến đâu: tăng là nhường, giảm là nhận.',
    'Chất khử nhường electron và bị oxi hoá; chất oxi hoá nhận electron và bị khử.',
    'Tổng electron nhường bằng tổng electron nhận: đây là cơ sở của cân bằng phương trình và của các bài tính theo số mol electron.',
  ],
};
