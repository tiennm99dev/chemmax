/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Hợp chất chứa nitrogen: cấu tạo và tính chất của amine, amino acid, peptide, protein và enzyme; nhận biết các hợp chất bằng thuốc thử và luyện các dạng bài tính toán về muối, phân tử khối peptide và số mắt xích.',
  intro:
    'Từ methylamine trong mùi cá đến những phân tử protein nặng hàng chục nghìn đơn vị, mọi chất trong chương đều có nguyên tử nitrogen với cặp electron chưa liên kết. Cặp electron ấy làm amine có tính base, làm amino acid lưỡng tính và tạo nên liên kết peptide nối các amino acid thành protein. Bài ôn tập này hệ thống lại kiến thức và luyện cách nhận biết, tính toán.',
  objectives: [
    'Hệ thống được cấu tạo và tính chất của amine, amino acid, peptide, protein và enzyme.',
    'Giải thích được tính chất hoá học từ cấu tạo: tính base, tính lưỡng tính, liên kết peptide, phản ứng màu biuret.',
    'Nhận biết được methylamine, aniline, amino acid, peptide và protein bằng thuốc thử thích hợp.',
    'Giải được các bài tập về muối của amine và amino acid, phân tử khối và phản ứng thuỷ phân peptide, số mắt xích trong protein.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu tạo của các hợp chất chứa nitrogen',
          head: ['Loại chất', 'Ví dụ', 'Đặc điểm cấu tạo'],
          rows: [
            [
              'Amine',
              '$\\mathrm{CH_3NH_2}$, $\\mathrm{C_6H_5NH_2}$',
              'Thay nguyên tử H trong $\\mathrm{NH_3}$ bằng gốc hydrocarbon; bậc amine là số gốc hydrocarbon gắn với N',
            ],
            [
              'Amino acid',
              '$\\mathrm{H_2N{-}CH_2{-}COOH}$ (Gly)',
              'Có cả nhóm $\\mathrm{{-}NH_2}$ và nhóm $\\mathrm{{-}COOH}$; tồn tại chủ yếu ở dạng ion lưỡng cực',
            ],
            [
              'Peptide',
              'Gly-Ala, Gly-Ala-Gly',
              'Từ $2$ đơn vị α-amino acid trở lên, nối bằng liên kết peptide $\\mathrm{{-}CO{-}NH{-}}$',
            ],
            [
              'Protein',
              'albumin, keratin, hemoglobin',
              'Một hay nhiều chuỗi polypeptide, phân tử khối từ vài chục nghìn đến vài triệu',
            ],
            [
              'Enzyme',
              'amylase, pepsin, lipase',
              'Hầu hết là protein, xúc tác sinh học có tính chọn lọc cao',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Một số phản ứng đặc trưng (+ có hiện tượng, − không có hiện tượng)',
          head: ['Chất', 'Quỳ tím', 'Nước bromine', '$\\mathrm{Cu(OH)_2}$/NaOH', 'Đun nóng'],
          rows: [
            ['Methylamine', '+ (xanh)', '−', 'xanh lam đậm (phức chất)', '−'],
            ['Aniline', '−', '+ (kết tủa trắng)', '−', '−'],
            ['Glycine', '−', '−', 'không có màu tím', '−'],
            ['Gly-Ala (dipeptide)', '−', '−', 'không có màu tím', '−'],
            ['Gly-Ala-Gly (tripeptide)', '−', '−', '+ (màu tím)', '−'],
            ['Lòng trắng trứng', 'không xét', 'không xét', '+ (màu tím)', '+ (đông tụ)'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Từ cấu tạo đến tính chất',
          text: 'Cặp electron chưa liên kết của N cho amine tính base: $\\mathrm{C_6H_5NH_2} < \\mathrm{NH_3} < \\mathrm{CH_3NH_2}$. Amino acid có cả nhóm amino và nhóm carboxyl nên lưỡng tính và điện di được theo pH. Peptide và protein bị thuỷ phân thành α-amino acid; từ hai liên kết peptide trở lên thì cho màu tím với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm. Protein đông tụ khi đun nóng và tạo chất rắn vàng với $\\mathrm{HNO_3}$ đặc.',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Amine đơn chức tác dụng với HCl: $n_{\\text{amine}} = n_{\\mathrm{HCl}}$, $m_{\\text{muối}} = m_{\\text{amine}} + m_{\\mathrm{HCl}}$.',
            'Amino acid có một nhóm $\\mathrm{{-}NH_2}$ và một nhóm $\\mathrm{{-}COOH}$: muối với HCl có $M + 36{,}5$, muối sodium có $M + 22$.',
            'Peptide $n$ gốc: $M = \\sum M_{\\text{amino acid}} - 18(n - 1)$; thuỷ phân hoàn toàn cần $n - 1$ phân tử nước.',
            'Số mắt xích một amino acid trong protein: $\\dfrac{n_{\\text{amino acid}}}{n_{\\text{protein}}}$.',
            'Aniline tác dụng với nước bromine: $1$ mol aniline tạo $1$ mol 2,4,6-tribromoaniline ($M = 330$).',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Bàn thí nghiệm nhận biết hợp chất chứa nitrogen',
    instruction:
      'Bốn mẫu A, B, C, D là methylamine, aniline, glycine và Gly-Ala-Gly. Chọn mẫu và thuốc thử, làm thí nghiệm, ghi hiện tượng vào bảng rồi gọi tên từng mẫu. Cố gắng dùng ít thí nghiệm nhất.',
  },
  examples: [
    {
      problem:
        'Trình bày cách nhận biết bốn mẫu mất nhãn: dung dịch methylamine, aniline, dung dịch glycine và dung dịch Gly-Ala-Gly.',
      steps: [
        'Nhúng quỳ tím vào từng mẫu: mẫu làm quỳ tím hoá xanh là methylamine.',
        'Nhỏ nước bromine vào ba mẫu còn lại: mẫu tạo kết tủa trắng là aniline.',
        'Nhỏ $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm vào hai mẫu cuối: mẫu có màu tím là Gly-Ala-Gly, mẫu còn lại là glycine.',
      ],
      answer: 'Dùng lần lượt quỳ tím, nước bromine và $\\mathrm{Cu(OH)_2}$/NaOH.',
    },
    {
      problem:
        'Một polypeptide X chỉ được tạo thành từ các gốc glycine, có phân tử khối $5\\,718$. Tính số gốc glycine trong X.',
      steps: [
        'Gọi số gốc glycine là $n$; X có $n - 1$ liên kết peptide.',
        '$M_X = 75n - 18(n - 1) = 57n + 18$.',
        '$57n + 18 = 5\\,718 \\Rightarrow n = \\dfrac{5\\,700}{57} = 100$.',
      ],
      answer: 'X có $100$ gốc glycine.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Ghép mỗi chất với loại hợp chất của nó.',
      left: [
        '$\\mathrm{CH_3{-}NH{-}CH_3}$',
        '$\\mathrm{H_2N{-}CH_2{-}COOH}$',
        'Ala-Gly-Val',
        'Albumin',
      ],
      right: ['amine', 'amino acid', 'peptide', 'protein'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Amine chỉ có nguyên tử N gắn với gốc hydrocarbon; amino acid có thêm nhóm carboxyl.',
      ],
      solution:
        'Dimethylamine là amine bậc hai, glycine là amino acid, Ala-Gly-Val là tripeptide, albumin (lòng trắng trứng) là protein.',
    },
    {
      type: 'choice',
      prompt: 'Dung dịch chất nào sau đây làm quỳ tím hoá xanh?',
      options: ['Methylamine', 'Aniline', 'Glycine', 'Alanine'],
      answer: 0,
      hints: ['Chất cần có tính base đủ mạnh, không có nhóm carboxyl trung hoà bớt.'],
      solution:
        'Methylamine là alkylamine nên dung dịch làm quỳ hoá xanh. Aniline có tính base rất yếu; glycine và alanine có số nhóm amino bằng số nhóm carboxyl nên không làm quỳ đổi màu.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo chiều tính base tăng dần.',
      items: ['$\\mathrm{C_6H_5NH_2}$', '$\\mathrm{NH_3}$', '$\\mathrm{CH_3NH_2}$'],
      answer: [0, 1, 2],
      hints: ['Vòng benzene hút cặp electron của N; gốc alkyl đẩy electron về phía N.'],
      solution: 'Tính base: aniline < ammonia < methylamine.',
    },
    {
      type: 'number',
      prompt:
        'Cho $3{,}1$ g methylamine tác dụng hết với dung dịch HCl dư. Tính khối lượng muối thu được.',
      answer: 6.75,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$\\mathrm{CH_3NH_2} + \\mathrm{HCl} \\rightarrow \\mathrm{CH_3NH_3Cl}$.'],
      solution:
        '$n = \\dfrac{3{,}1}{31} = 0{,}1$ mol; $m = 0{,}1 \\cdot (31 + 36{,}5) = 6{,}75$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $18{,}6$ g aniline tác dụng với lượng dư nước bromine. Tính khối lượng kết tủa thu được.',
      answer: 66,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$1$ mol aniline tạo $1$ mol 2,4,6-tribromoaniline ($M = 330$).'],
      solution: '$n = \\dfrac{18{,}6}{93} = 0{,}2$ mol; $m = 0{,}2 \\cdot 330 = 66$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}1$ mol một amino acid X (phân tử có một nhóm $\\mathrm{{-}NH_2}$ và một nhóm $\\mathrm{{-}COOH}$) tác dụng vừa đủ với dung dịch HCl, thu được $11{,}15$ g muối. Tính phân tử khối của X.',
      answer: 75,
      hints: ['$M_{\\text{muối}} = M_X + 36{,}5$.'],
      solution:
        '$M_{\\text{muối}} = \\dfrac{11{,}15}{0{,}1} = 111{,}5$, nên $M_X = 111{,}5 - 36{,}5 = 75$: X là glycine.',
    },
    {
      type: 'number',
      prompt: 'Tính phân tử khối của tripeptide Ala-Val-Gly.',
      answer: 245,
      hints: [
        '$M_{\\text{Ala}} = 89$, $M_{\\text{Val}} = 117$, $M_{\\text{Gly}} = 75$; tripeptide có $2$ liên kết peptide.',
      ],
      solution: '$M = 89 + 117 + 75 - 2 \\cdot 18 = 245$.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $0{,}1$ mol dipeptide Gly-Ala với dung dịch NaOH dư đến phản ứng hoàn toàn. Tính số mol NaOH đã phản ứng.',
      answer: 0.2,
      tolerance: 0.001,
      unit: 'mol',
      hints: [
        'Thuỷ phân hoàn toàn tạo $2$ amino acid, mỗi amino acid có một nhóm $\\mathrm{{-}COOH}$.',
      ],
      solution:
        'Gly-Ala + 2NaOH → muối sodium của glycine + muối sodium của alanine + $\\mathrm{H_2O}$: $n_{\\mathrm{NaOH}} = 2 \\cdot 0{,}1 = 0{,}2$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $500$ g protein X (phân tử khối $50\\,000$) thu được $117$ g valine. Tính số mắt xích valine trong một phân tử X.',
      answer: 100,
      hints: ['$n_X = \\dfrac{500}{50\\,000}$; $M_{\\text{Val}} = 117$.'],
      solution:
        '$n_X = 0{,}01$ mol; $n_{\\text{Val}} = \\dfrac{117}{117} = 1$ mol; số mắt xích $= \\dfrac{1}{0{,}01} = 100$.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử dùng để phân biệt dung dịch Gly-Ala và dung dịch Gly-Ala-Gly là',
      options: [
        '$\\mathrm{Cu(OH)_2}$ trong môi trường kiềm',
        'quỳ tím',
        'nước bromine',
        'dung dịch HCl',
      ],
      answer: 0,
      hints: ['Hai chất khác nhau ở số liên kết peptide.'],
      solution:
        'Gly-Ala-Gly có hai liên kết peptide nên cho màu tím với $\\mathrm{Cu(OH)_2}$/NaOH; Gly-Ala chỉ có một liên kết peptide nên không có màu tím.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Ở pH khoảng $6$, glycine gần như không di chuyển trong điện trường.',
        'Protein bị đông tụ khi đun nóng.',
        'Enzyme hoạt động càng mạnh khi nhiệt độ càng cao.',
        'Amine bậc hai có hai gốc hydrocarbon gắn với nguyên tử N.',
        'Dipeptide có phản ứng màu biuret.',
      ],
      answers: [0, 1, 3],
      hints: ['Enzyme là protein; dipeptide chỉ có một liên kết peptide.'],
      solution:
        'Glycine ở pH khoảng $6$ tồn tại dạng ion lưỡng cực nên gần như đứng yên; protein đông tụ khi đun nóng; bậc amine là số gốc hydrocarbon gắn với N. Enzyme bị biến tính ở nhiệt độ cao; dipeptide không có phản ứng màu biuret.',
    },
  ],
  takeaways: [
    'Amine có tính base nhờ cặp electron chưa liên kết của N: $\\mathrm{C_6H_5NH_2} < \\mathrm{NH_3} < \\mathrm{CH_3NH_2}$; aniline tạo kết tủa trắng với nước bromine.',
    'Amino acid lưỡng tính, tồn tại dạng ion lưỡng cực, di chuyển trong điện trường tuỳ theo pH.',
    'Peptide $n$ gốc có $n - 1$ liên kết peptide, $M = \\sum M - 18(n - 1)$; từ hai liên kết peptide trở lên cho màu tím với $\\mathrm{Cu(OH)_2}$/NaOH.',
    'Protein bị thuỷ phân thành α-amino acid, đông tụ khi đun nóng; enzyme là xúc tác sinh học chọn lọc, cần nhiệt độ và pH thích hợp.',
  ],
};
