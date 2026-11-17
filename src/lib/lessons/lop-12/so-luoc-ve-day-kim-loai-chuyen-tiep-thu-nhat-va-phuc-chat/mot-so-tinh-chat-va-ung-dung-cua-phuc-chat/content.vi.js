/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phản ứng tạo phức chất nhận biết qua kết tủa, kết tủa tan hoặc đổi màu; trong phản ứng thay thế phối tử, phối tử mới thay phối tử cũ khi phức chất mới bền hơn; phức chất kim loại chuyển tiếp có màu đặc trưng và được dùng trong y học, phân tích hoá học, công nghiệp và sinh học.',
  intro:
    'Nhỏ dung dịch ammonia vào dung dịch đồng(II) sulfate màu xanh nhạt: kết tủa xanh xuất hiện rồi lại tan, để lại dung dịch xanh lam đậm. Điều gì đã xảy ra quanh ion $\\mathrm{Cu^{2+}}$? Và vì sao một phức chất của platinum lại trở thành thuốc chữa ung thư?',
  objectives: [
    'Nêu được các dấu hiệu của phản ứng tạo phức chất trong dung dịch.',
    'Trình bày được phản ứng thay thế phối tử và viết được phương trình của một số phản ứng thay thế phối tử của $\\mathrm{Cu^{2+}}$, $\\mathrm{Ag^+}$.',
    'Nêu được màu sắc của một số phức chất aqua và phức chất của kim loại chuyển tiếp dãy thứ nhất.',
    'Nêu được ứng dụng của phức chất trong y học, phân tích hoá học, công nghiệp và vai trò của phức chất sinh học.',
  ],
  sections: [
    {
      heading: 'Dấu hiệu của phản ứng tạo phức chất',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng tạo phức chất trong dung dịch thường được nhận biết qua một trong các dấu hiệu: xuất hiện kết tủa, kết tủa bị hoà tan, hoặc dung dịch thay đổi màu sắc.',
        },
        {
          type: 'list',
          items: [
            'Nhỏ dung dịch NaCl vào dung dịch $\\mathrm{AgNO_3}$ thu được kết tủa trắng AgCl; thêm dung dịch $\\mathrm{NH_3}$ dư, kết tủa tan do tạo phức chất $\\mathrm{[Ag(NH_3)_2]^+}$.',
            'Nhỏ từ từ dung dịch $\\mathrm{NH_3}$ vào dung dịch $\\mathrm{CuSO_4}$: xuất hiện kết tủa xanh nhạt $\\mathrm{[Cu(OH)_2(H_2O)_4]}$; khi $\\mathrm{NH_3}$ dư, kết tủa tan, dung dịch chuyển sang màu xanh lam đậm của $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$.',
            'Thêm dung dịch HCl đặc vào dung dịch $\\mathrm{CuSO_4}$ loãng: dung dịch chuyển từ màu xanh sang xanh lá rồi vàng, do tạo phức chất $\\mathrm{[CuCl_4]^{2-}}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Độ tan',
          text: 'Phức chất mang điện như $\\mathrm{[Co(NH_3)_6]^{3+}}$, $\\mathrm{[Zn(OH)_4]^{2-}}$ thường tan tốt trong nước; phức chất trung hoà như $\\mathrm{[Fe(CO)_5]}$, $\\mathrm{[PtCl_2(NH_3)_2]}$ thường ít tan.',
        },
      ],
    },
    {
      heading: 'Phản ứng thay thế phối tử',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng thay thế phối tử',
          text: 'Là phản ứng trong đó một hay nhiều phối tử của phức chất được thay thế bằng phối tử khác. Phản ứng xảy ra thuận lợi khi phức chất mới bền hơn phức chất ban đầu.',
        },
        {
          type: 'p',
          text: 'Trong dung dịch $\\mathrm{CuSO_4}$, ion $\\mathrm{Cu^{2+}}$ tồn tại dưới dạng phức chất aqua $\\mathrm{[Cu(H_2O)_6]^{2+}}$. Dung dịch $\\mathrm{NH_3}$ có ion $\\mathrm{OH^-}$ ($\\mathrm{NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-}$), nên các phối tử nước lần lượt bị thay thế:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[Cu(H_2O)_6]^{2+}} + 2\\mathrm{OH^-} \\longrightarrow \\mathrm{[Cu(OH)_2(H_2O)_4]}\\downarrow + 2\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[Cu(OH)_2(H_2O)_4]} + 4\\mathrm{NH_3} \\longrightarrow \\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}} + 2\\mathrm{OH^-} + 2\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Một số phản ứng thay thế phối tử khác:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[Cu(H_2O)_6]^{2+}} + 4\\mathrm{Cl^-} \\longrightarrow \\mathrm{[CuCl_4]^{2-}} + 6\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[PtCl_4]^{2-}} + \\mathrm{NH_3} \\longrightarrow \\mathrm{[PtCl_3(NH_3)]^-} + \\mathrm{Cl^-}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{[Fe(H_2O)_6]^{2+}} + 6\\mathrm{CN^-} \\longrightarrow \\mathrm{[Fe(CN)_6]^{4-}} + 6\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{AgCl} + 2\\mathrm{NH_3} \\longrightarrow \\mathrm{[Ag(NH_3)_2]^+} + \\mathrm{Cl^-}',
        },
      ],
    },
    {
      heading: 'Màu sắc của phức chất',
      blocks: [
        {
          type: 'p',
          text: 'Phức chất aqua và các phức chất khác của kim loại chuyển tiếp dãy thứ nhất thường có màu. Khi phối tử thay đổi, màu của phức chất cũng thay đổi, nên màu sắc là dấu hiệu để nhận ra phản ứng thay thế phối tử.',
        },
        {
          type: 'table',
          head: ['Phức chất', 'Màu', 'Phức chất', 'Màu'],
          rows: [
            [
              '$\\mathrm{[Cr(H_2O)_6]^{3+}}$',
              'xanh tím',
              '$\\mathrm{[Cr(OH)_6]^{3-}}$',
              'xanh rêu',
            ],
            [
              '$\\mathrm{[Fe(H_2O)_6]^{2+}}$',
              'lục nhạt',
              '$\\mathrm{[Fe(H_2O)_6]^{3+}}$',
              'vàng nhạt',
            ],
            [
              '$\\mathrm{[Co(H_2O)_6]^{2+}}$',
              'hồng đỏ',
              '$\\mathrm{[Co(NH_3)_6]^{2+}}$',
              'vàng nâu',
            ],
            [
              '$\\mathrm{[Cu(H_2O)_6]^{2+}}$',
              'xanh',
              '$\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$',
              'xanh lam đậm',
            ],
          ],
          caption: 'Màu của một số phức chất.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của phức chất',
      blocks: [
        {
          type: 'list',
          items: [
            'Y học: cisplatin $\\mathrm{[PtCl_2(NH_3)_2]}$ là thuốc điều trị một số bệnh ung thư.',
            'Phân tích hoá học: phức chất có màu đặc trưng dùng để nhận biết và xác định hàm lượng ion kim loại; thuốc thử Tollens chứa $\\mathrm{[Ag(NH_3)_2]^+}$ dùng để phân biệt aldehyde với ketone.',
            'Công nghiệp: nhiều phức chất là chất xúc tác, ví dụ phức chất của palladium dùng trong phản ứng ghép mạch carbon.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phức chất trong cơ thể sống',
          text: 'Chlorophyll (diệp lục) là phức chất của $\\mathrm{Mg^{2+}}$, giúp cây quang hợp. Heme trong hemoglobin là phức chất của $\\mathrm{Fe^{2+}}$, vận chuyển oxygen trong máu và làm hồng cầu có màu đỏ. Vitamin $\\mathrm{B_{12}}$ là phức chất của $\\mathrm{Co^{3+}}$, cần cho sự tạo hồng cầu và hoạt động của hệ thần kinh.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ống nghiệm ảo',
    instruction:
      'Chọn một thí nghiệm, rồi nhỏ từng giọt thuốc thử vào ống nghiệm. Quan sát kết tủa xuất hiện, tan và màu dung dịch thay đổi; phương trình của phản ứng thay thế phối tử hiện ra bên cạnh, các hiện tượng được ghi lại theo thứ tự.',
  },
  examples: [
    {
      problem:
        'Nhỏ từ từ đến dư dung dịch $\\mathrm{NH_3}$ vào ống nghiệm chứa dung dịch $\\mathrm{CuSO_4}$. Nêu hiện tượng và viết phương trình hoá học.',
      steps: [
        'Ban đầu dung dịch có màu xanh của phức chất aqua $\\mathrm{[Cu(H_2O)_6]^{2+}}$.',
        'Khi nhỏ $\\mathrm{NH_3}$, ion $\\mathrm{OH^-}$ thay thế 2 phân tử nước, tạo kết tủa xanh nhạt: $\\mathrm{[Cu(H_2O)_6]^{2+} + 2OH^- \\longrightarrow [Cu(OH)_2(H_2O)_4] + 2H_2O}$.',
        'Khi $\\mathrm{NH_3}$ dư, $\\mathrm{NH_3}$ thay thế các phối tử $\\mathrm{OH^-}$ và 2 phân tử nước, kết tủa tan: $\\mathrm{[Cu(OH)_2(H_2O)_4] + 4NH_3 \\longrightarrow [Cu(NH_3)_4(H_2O)_2]^{2+} + 2OH^- + 2H_2O}$.',
        'Dung dịch thu được có màu xanh lam đậm, vì phức chất ammine bền hơn phức chất aqua.',
      ],
      answer:
        'Kết tủa xanh nhạt xuất hiện rồi tan trong $\\mathrm{NH_3}$ dư, tạo dung dịch xanh lam đậm.',
    },
    {
      problem:
        'Cần tối thiểu bao nhiêu mol $\\mathrm{NH_3}$ để hoà tan hết 2,87 g kết tủa AgCl? (Ag = 108, Cl = 35,5)',
      steps: [
        '$M_{\\mathrm{AgCl}} = 108 + 35{,}5 = 143{,}5$ g/mol; $n_{\\mathrm{AgCl}} = \\dfrac{2{,}87}{143{,}5} = 0{,}02$ mol.',
        '$\\mathrm{AgCl} + 2\\mathrm{NH_3} \\longrightarrow \\mathrm{[Ag(NH_3)_2]^+} + \\mathrm{Cl^-}$.',
        '$n_{\\mathrm{NH_3}} = 2\\,n_{\\mathrm{AgCl}} = 0{,}04$ mol.',
      ],
      answer: 'Tối thiểu 0,04 mol $\\mathrm{NH_3}$.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những dấu hiệu nào cho biết phản ứng tạo phức chất đã xảy ra trong dung dịch?',
      options: [
        'Xuất hiện kết tủa',
        'Kết tủa bị hoà tan',
        'Dung dịch thay đổi màu sắc',
        'Ống nghiệm phát sáng',
      ],
      answers: [0, 1, 2],
      hints: [
        'Nhớ lại thí nghiệm nhỏ $\\mathrm{NH_3}$ vào dung dịch $\\mathrm{CuSO_4}$ và vào kết tủa AgCl.',
      ],
      solution:
        'Phản ứng tạo phức chất thường nhận biết qua sự xuất hiện kết tủa, sự hoà tan kết tủa hoặc sự thay đổi màu của dung dịch.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các hiện tượng theo đúng thứ tự khi nhỏ từ từ đến dư dung dịch $\\mathrm{NH_3}$ vào dung dịch $\\mathrm{CuSO_4}$.',
      items: [
        'Kết tủa tan dần',
        'Dung dịch màu xanh của $\\mathrm{[Cu(H_2O)_6]^{2+}}$',
        'Thu được dung dịch xanh lam đậm',
        'Xuất hiện kết tủa xanh nhạt',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Kết tủa phải xuất hiện trước khi có thể tan.'],
      solution:
        'Dung dịch xanh của phức chất aqua → kết tủa xanh nhạt $\\mathrm{[Cu(OH)_2(H_2O)_4]}$ → kết tủa tan khi $\\mathrm{NH_3}$ dư → dung dịch xanh lam đậm của $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$.',
    },
    {
      type: 'choice',
      prompt:
        'Thêm dung dịch HCl đặc vào dung dịch $\\mathrm{CuSO_4}$ loãng, cuối cùng dung dịch có màu vàng do tạo thành',
      options: [
        '$\\mathrm{[CuCl_4]^{2-}}$',
        '$\\mathrm{[Cu(H_2O)_6]^{2+}}$',
        '$\\mathrm{Cu(OH)_2}$',
        '$\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$',
      ],
      answer: 0,
      hints: ['Phối tử mới đến từ HCl.'],
      solution:
        'Ion $\\mathrm{Cl^-}$ thay thế các phân tử nước: $\\mathrm{[Cu(H_2O)_6]^{2+} + 4Cl^- \\longrightarrow [CuCl_4]^{2-} + 6H_2O}$; $\\mathrm{[CuCl_4]^{2-}}$ có màu vàng.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng thay thế phối tử xảy ra thuận lợi khi',
      options: [
        'phức chất mới bền hơn phức chất ban đầu',
        'phức chất mới kém bền hơn phức chất ban đầu',
        'phối tử mới có khối lượng lớn hơn',
        'nguyên tử trung tâm thay đổi số oxi hoá',
      ],
      answer: 0,
      hints: ['Phản ứng có xu hướng tạo ra chất bền hơn.'],
      solution:
        'Phối tử mới chỉ thay thế được phối tử cũ khi tạo thành phức chất bền hơn phức chất ban đầu.',
    },
    {
      type: 'number',
      prompt:
        'Cần tối thiểu bao nhiêu mL dung dịch $\\mathrm{NH_3}$ 1 M để hoà tan hết 1,435 g kết tủa AgCl? (Ag = 108, Cl = 35,5)',
      answer: 20,
      unit: 'mL',
      hints: [
        '$n_{\\mathrm{AgCl}} = \\dfrac{1{,}435}{143{,}5}$.',
        '$\\mathrm{AgCl} + 2\\mathrm{NH_3} \\longrightarrow \\mathrm{[Ag(NH_3)_2]^+} + \\mathrm{Cl^-}$.',
      ],
      solution:
        '$n_{\\mathrm{AgCl}} = \\dfrac{1{,}435}{143{,}5} = 0{,}01$ mol; $n_{\\mathrm{NH_3}} = 0{,}02$ mol; $V = \\dfrac{0{,}02}{1} = 0{,}02$ L $= 20$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Trong phản ứng $\\mathrm{[PtCl_4]^{2-} + NH_3 \\longrightarrow [PtCl_3(NH_3)]^{x} + Cl^-}$, điện tích $x$ của phức chất tạo thành là bao nhiêu?',
      answer: -1,
      hints: ['Nguyên tử trung tâm vẫn là $\\mathrm{Pt^{2+}}$; $\\mathrm{NH_3}$ không mang điện.'],
      solution: '$(+2) + 3 \\cdot (-1) + 0 = -1$: phức chất $\\mathrm{[PtCl_3(NH_3)]^-}$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phức chất với ứng dụng hoặc vai trò của nó.',
      left: [
        'Cisplatin $\\mathrm{[PtCl_2(NH_3)_2]}$',
        '$\\mathrm{[Ag(NH_3)_2]^+}$ (thuốc thử Tollens)',
        'Heme (phức chất của $\\mathrm{Fe^{2+}}$)',
        'Chlorophyll (phức chất của $\\mathrm{Mg^{2+}}$)',
      ],
      right: [
        'thuốc điều trị ung thư',
        'phân biệt aldehyde với ketone',
        'vận chuyển oxygen trong máu',
        'quang hợp ở cây xanh',
        'làm mềm nước cứng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hemoglobin nằm trong hồng cầu; diệp lục nằm trong lá cây.'],
      solution:
        'Cisplatin chữa ung thư; thuốc thử Tollens phân biệt aldehyde với ketone; heme vận chuyển oxygen; chlorophyll giúp cây quang hợp.',
    },
    {
      type: 'choice',
      prompt: 'Vitamin $\\mathrm{B_{12}}$ là phức chất của ion kim loại nào?',
      options: [
        '$\\mathrm{Co^{3+}}$',
        '$\\mathrm{Fe^{2+}}$',
        '$\\mathrm{Mg^{2+}}$',
        '$\\mathrm{Cu^{2+}}$',
      ],
      answer: 0,
      hints: ['Kim loại này đứng ngay sau sắt trong dãy kim loại chuyển tiếp thứ nhất.'],
      solution: 'Vitamin $\\mathrm{B_{12}}$ là phức chất của $\\mathrm{Co^{3+}}$.',
    },
    {
      type: 'choice',
      prompt: 'Màu của phức chất aqua $\\mathrm{[Fe(H_2O)_6]^{3+}}$ là',
      options: ['vàng nhạt', 'lục nhạt', 'hồng đỏ', 'xanh lam đậm'],
      answer: 0,
      hints: ['Dung dịch muối sắt(III) loãng có màu nhạt, khác màu dung dịch muối sắt(II).'],
      solution:
        '$\\mathrm{[Fe(H_2O)_6]^{3+}}$ màu vàng nhạt; $\\mathrm{[Fe(H_2O)_6]^{2+}}$ màu lục nhạt.',
    },
  ],
  takeaways: [
    'Dấu hiệu tạo phức chất: xuất hiện kết tủa, kết tủa tan, dung dịch đổi màu.',
    'Phản ứng thay thế phối tử xảy ra thuận lợi khi phức chất mới bền hơn.',
    '$\\mathrm{Cu^{2+}}$: thêm $\\mathrm{NH_3}$ cho kết tủa xanh nhạt, $\\mathrm{NH_3}$ dư cho $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$ xanh lam đậm; thêm HCl đặc cho $\\mathrm{[CuCl_4]^{2-}}$ vàng.',
    'AgCl tan trong $\\mathrm{NH_3}$ dư tạo $\\mathrm{[Ag(NH_3)_2]^+}$.',
    'Ứng dụng: cisplatin chữa ung thư, thuốc thử Tollens, xúc tác; phức chất sinh học: chlorophyll ($\\mathrm{Mg^{2+}}$), heme ($\\mathrm{Fe^{2+}}$), vitamin $\\mathrm{B_{12}}$ ($\\mathrm{Co^{3+}}$).',
  ],
};
