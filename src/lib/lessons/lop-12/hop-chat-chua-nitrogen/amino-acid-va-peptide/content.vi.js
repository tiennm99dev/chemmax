/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Amino acid và peptide: khái niệm và danh pháp amino acid, cấu tạo ion lưỡng cực, tính chất vật lí, tính lưỡng tính, tính điện di, phản ứng ester hoá và trùng ngưng; khái niệm peptide, liên kết peptide, cách gọi tên, phản ứng thuỷ phân và phản ứng màu biuret.',
  intro:
    'Bột ngọt (mì chính) là muối sodium của glutamic acid, một amino acid. Cơ thể người dùng khoảng $20$ loại amino acid để ghép thành vô số protein khác nhau, giống như dùng $20$ chữ cái để viết nên mọi cuốn sách. Mỗi amino acid vừa có nhóm acid, vừa có nhóm base: điều đó quyết định cách chúng ghép nối và cách chúng chạy trong điện trường.',
  objectives: [
    'Nêu được khái niệm amino acid, α-amino acid; gọi được tên một số amino acid thông dụng.',
    'Trình bày được cấu tạo dạng ion lưỡng cực và tính chất vật lí của amino acid.',
    'Trình bày được tính lưỡng tính, tính điện di, phản ứng ester hoá và phản ứng trùng ngưng của amino acid.',
    'Nêu được khái niệm peptide, liên kết peptide; gọi được tên peptide theo kí hiệu các amino acid.',
    'Trình bày được phản ứng thuỷ phân và phản ứng màu biuret của peptide.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp amino acid',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Amino acid',
          text: 'Amino acid là hợp chất hữu cơ tạp chức, trong phân tử chứa đồng thời nhóm amino ($\\mathrm{{-}NH_2}$) và nhóm carboxyl ($\\mathrm{{-}COOH}$). Nếu nhóm $\\mathrm{{-}NH_2}$ gắn với nguyên tử carbon ở vị trí α (cạnh nhóm $\\mathrm{{-}COOH}$), ta có α-amino acid, công thức chung $\\mathrm{H_2N{-}CH(R){-}COOH}$.',
        },
        {
          type: 'p',
          text: 'Amino acid được gọi theo tên thay thế (acid carboxylic làm mạch chính, nhóm amino là nhóm thế), tên bán hệ thống (dùng chữ cái Hy Lạp α, β, ... chỉ vị trí nhóm amino) và tên thông thường. Các α-amino acid thiên nhiên thường được gọi theo tên thông thường và kí hiệu ba chữ cái.',
        },
        {
          type: 'table',
          caption: 'Một số α-amino acid thông dụng',
          head: ['Công thức', 'Tên thay thế', 'Tên thông thường', 'Kí hiệu', '$M$'],
          rows: [
            ['$\\mathrm{H_2N{-}CH_2{-}COOH}$', 'aminoethanoic acid', 'glycine', 'Gly', '$75$'],
            [
              '$\\mathrm{CH_3{-}CH(NH_2){-}COOH}$',
              '2-aminopropanoic acid',
              'alanine',
              'Ala',
              '$89$',
            ],
            [
              '$\\mathrm{(CH_3)_2CH{-}CH(NH_2){-}COOH}$',
              '2-amino-3-methylbutanoic acid',
              'valine',
              'Val',
              '$117$',
            ],
            [
              '$\\mathrm{HOOC{-}[CH_2]_2{-}CH(NH_2){-}COOH}$',
              '2-aminopentanedioic acid',
              'glutamic acid',
              'Glu',
              '$147$',
            ],
            [
              '$\\mathrm{H_2N{-}[CH_2]_4{-}CH(NH_2){-}COOH}$',
              '2,6-diaminohexanoic acid',
              'lysine',
              'Lys',
              '$146$',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm $\\mathrm{{-}COOH}$ nhường proton cho nhóm $\\mathrm{{-}NH_2}$ trong cùng phân tử, nên amino acid tồn tại chủ yếu ở dạng ion lưỡng cực:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}COOH} \\rightleftharpoons \\mathrm{H_3N^+{-}CH_2{-}COO^-}',
        },
        {
          type: 'list',
          items: [
            'Ở điều kiện thường, amino acid là chất rắn kết tinh, không màu, nhiệt độ nóng chảy cao (thường bị phân huỷ khi nóng chảy), dễ tan trong nước: đó là tính chất của hợp chất ion.',
            'Dung dịch amino acid có số nhóm $\\mathrm{{-}NH_2}$ bằng số nhóm $\\mathrm{{-}COOH}$ (như glycine, alanine, valine) gần như trung tính, không làm quỳ tím đổi màu. Glutamic acid làm quỳ tím hoá đỏ, lysine làm quỳ tím hoá xanh.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của amino acid',
      blocks: [
        {
          type: 'p',
          text: 'Tính lưỡng tính. Amino acid vừa tác dụng với acid mạnh (nhờ nhóm amino), vừa tác dụng với base mạnh (nhờ nhóm carboxyl):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}COOH} + \\mathrm{HCl} \\rightarrow \\mathrm{ClH_3N{-}CH_2{-}COOH}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}COOH} + \\mathrm{NaOH} \\rightarrow \\mathrm{H_2N{-}CH_2{-}COONa} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính điện di',
          text: 'Trong dung dịch, tuỳ theo pH mà amino acid tồn tại chủ yếu ở dạng cation, ion lưỡng cực hay anion. Đặt trong điện trường, dạng cation di chuyển về cực âm, dạng anion di chuyển về cực dương, còn ở pH mà amino acid tồn tại ở dạng ion lưỡng cực thì nó gần như không di chuyển. Ví dụ ở pH khoảng $6$, glycine hầu như đứng yên; ở pH nhỏ hơn, glycine đi về cực âm; ở pH lớn hơn, glycine đi về cực dương. Tính chất này dùng để tách các amino acid ra khỏi hỗn hợp.',
        },
        {
          type: 'p',
          text: 'Phản ứng ester hoá nhóm carboxyl. Đun amino acid với alcohol có acid làm xúc tác tạo ester:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}COOH} + \\mathrm{C_2H_5OH} \\overset{\\mathrm{H^+},\\ t^\\circ}{\\rightleftharpoons} \\mathrm{H_2N{-}CH_2{-}COOC_2H_5} + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Phản ứng trùng ngưng. Khi đun nóng, các phân tử ε-amino acid hoặc ω-amino acid kết hợp với nhau, tách nước, tạo polyamide. Ví dụ từ 6-aminohexanoic acid thu được tơ capron (nylon-6):',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{H_2N{-}[CH_2]_5{-}COOH} \\xrightarrow{t^\\circ} \\mathrm{({-}NH{-}[CH_2]_5{-}CO{-})_n} + n\\,\\mathrm{H_2O}',
        },
      ],
    },
    {
      heading: 'Peptide',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Peptide và liên kết peptide',
          text: 'Peptide là hợp chất được tạo thành từ các đơn vị α-amino acid liên kết với nhau bằng liên kết peptide. Liên kết peptide là liên kết $\\mathrm{{-}CO{-}NH{-}}$ giữa hai đơn vị α-amino acid, tạo thành khi nhóm $\\mathrm{{-}COOH}$ của đơn vị này kết hợp với nhóm $\\mathrm{{-}NH_2}$ của đơn vị kia, tách ra một phân tử nước.',
        },
        {
          type: 'list',
          items: [
            'Peptide có $2$, $3$, $4$ đơn vị α-amino acid gọi là dipeptide, tripeptide, tetrapeptide; peptide có nhiều đơn vị gọi là polypeptide. Peptide có $n$ đơn vị chứa $n - 1$ liên kết peptide.',
            'Amino acid có nhóm $\\mathrm{{-}NH_2}$ tự do là đầu N, amino acid có nhóm $\\mathrm{{-}COOH}$ tự do là đầu C. Tên peptide ghép kí hiệu các amino acid theo thứ tự từ đầu N đến đầu C: Gly-Ala khác Ala-Gly.',
            'Phân tử khối của peptide: $M = \\sum M_{\\text{amino acid}} - 18(n - 1)$.',
          ],
        },
        {
          type: 'p',
          text: 'Phản ứng thuỷ phân. Peptide bị thuỷ phân nhờ xúc tác acid, base hoặc enzyme. Thuỷ phân không hoàn toàn tạo các peptide ngắn hơn; thuỷ phân hoàn toàn tạo các α-amino acid:',
        },
        {
          type: 'tex',
          tex: '\\text{Gly-Ala} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+}\\ \\text{hoặc}\\ \\mathrm{OH^-},\\ t^\\circ} \\text{glycine} + \\text{alanine}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng màu biuret',
          text: 'Peptide có từ hai liên kết peptide trở lên phản ứng với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm, tạo hợp chất màu tím đặc trưng. Dipeptide không có phản ứng này.',
        },
        { type: 'widget', name: 'noi-peptide' },
      ],
    },
  ],
  explore: {
    title: 'Điện di amino acid theo pH',
    instruction:
      'Chọn pH của dung dịch đệm rồi bật nguồn điện. Quan sát glycine, alanine, glutamic acid và lysine di chuyển về cực nào; so sánh pH với điểm đẳng điện của từng chất.',
  },
  examples: [
    {
      problem:
        'Viết các tripeptide mạch hở chứa đồng thời ba gốc Gly, Ala và Val (mỗi gốc một lần). Có bao nhiêu tripeptide như vậy?',
      steps: [
        'Tên peptide ghi từ đầu N đến đầu C, nên đổi thứ tự là được peptide khác.',
        'Có $3$ cách chọn amino acid đầu N, $2$ cách chọn gốc giữa, $1$ cách cho đầu C: $3 \\cdot 2 \\cdot 1 = 6$.',
        'Đó là Gly-Ala-Val, Gly-Val-Ala, Ala-Gly-Val, Ala-Val-Gly, Val-Gly-Ala, Val-Ala-Gly.',
      ],
      answer: 'Có $6$ tripeptide.',
    },
    {
      problem:
        'Tính phân tử khối của tripeptide Gly-Ala-Val. Thuỷ phân hoàn toàn $24{,}5$ g tripeptide này thì cần bao nhiêu gam nước?',
      steps: [
        '$M = 75 + 89 + 117 - 2 \\cdot 18 = 245$ g/mol.',
        '$n_{\\text{peptide}} = \\dfrac{24{,}5}{245} = 0{,}1$ mol.',
        'Tripeptide có $2$ liên kết peptide, mỗi liên kết cần một phân tử nước: $n_{\\mathrm{H_2O}} = 0{,}2$ mol.',
        '$m_{\\mathrm{H_2O}} = 0{,}2 \\cdot 18 = 3{,}6$ g.',
      ],
      answer: '$M = 245$; cần $3{,}6$ g nước.',
    },
    {
      problem:
        'Cho $7{,}5$ g glycine tác dụng vừa đủ với dung dịch NaOH. Tính khối lượng muối thu được.',
      steps: [
        '$n_{\\text{glycine}} = \\dfrac{7{,}5}{75} = 0{,}1$ mol.',
        '$\\mathrm{H_2N{-}CH_2{-}COOH} + \\mathrm{NaOH} \\rightarrow \\mathrm{H_2N{-}CH_2{-}COONa} + \\mathrm{H_2O}$; $M_{\\text{muối}} = 75 + 22 = 97$ g/mol.',
        '$m = 0{,}1 \\cdot 97 = 9{,}7$ g.',
      ],
      answer: 'Thu được $9{,}7$ g muối.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tên thông thường của amino acid $\\mathrm{CH_3{-}CH(NH_2){-}COOH}$ là',
      options: ['alanine', 'glycine', 'valine', 'lysine'],
      answer: 0,
      hints: ['Mạch chính có $3$ nguyên tử carbon: 2-aminopropanoic acid.'],
      solution: '2-aminopropanoic acid có tên thông thường là alanine (Ala).',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi dung dịch amino acid với màu của quỳ tím trong dung dịch đó.',
      left: ['Glycine', 'Glutamic acid', 'Lysine'],
      right: ['không đổi màu', 'hoá đỏ', 'hoá xanh'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'So sánh số nhóm $\\mathrm{{-}NH_2}$ và số nhóm $\\mathrm{{-}COOH}$ trong mỗi phân tử.',
      ],
      solution:
        'Glycine có một nhóm amino và một nhóm carboxyl: quỳ không đổi màu. Glutamic acid có hai nhóm carboxyl: quỳ hoá đỏ. Lysine có hai nhóm amino: quỳ hoá xanh.',
    },
    {
      type: 'number',
      prompt:
        'Cho $8{,}9$ g alanine tác dụng vừa đủ với dung dịch HCl. Tính khối lượng muối thu được.',
      answer: 12.55,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Amino acid có một nhóm $\\mathrm{{-}NH_2}$ phản ứng với HCl theo tỉ lệ $1 : 1$.'],
      solution:
        '$n = \\dfrac{8{,}9}{89} = 0{,}1$ mol; $m_{\\text{muối}} = 8{,}9 + 0{,}1 \\cdot 36{,}5 = 12{,}55$ g.',
    },
    {
      type: 'choice',
      prompt: 'Trong dung dịch có pH khoảng $6$, khi đặt trong điện trường thì lysine',
      options: [
        'di chuyển về cực âm',
        'di chuyển về cực dương',
        'gần như không di chuyển',
        'bị thuỷ phân',
      ],
      answer: 0,
      hints: ['Lysine có hai nhóm amino: ở pH $6$ cả hai đều nhận proton.'],
      solution:
        'Điểm đẳng điện của lysine khoảng $9{,}7$. Ở pH $6$ nhỏ hơn giá trị này, lysine tồn tại chủ yếu ở dạng cation nên di chuyển về cực âm.',
    },
    {
      type: 'number',
      prompt: 'Tính phân tử khối của tetrapeptide Gly-Gly-Ala-Gly.',
      answer: 260,
      hints: ['Tetrapeptide có $3$ liên kết peptide, mỗi liên kết tách một phân tử nước.'],
      solution: '$M = 3 \\cdot 75 + 89 - 3 \\cdot 18 = 225 + 89 - 54 = 260$.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $14{,}6$ g dipeptide Gly-Ala. Tính tổng khối lượng amino acid thu được.',
      answer: 16.4,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$M_{\\text{Gly-Ala}} = 75 + 89 - 18$.',
        'Mỗi mol dipeptide tạo $1$ mol glycine và $1$ mol alanine.',
      ],
      solution:
        '$M = 146$, $n = 0{,}1$ mol; $m = 0{,}1 \\cdot (75 + 89) = 16{,}4$ g (bằng $14{,}6 + 0{,}1 \\cdot 18$).',
    },
    {
      type: 'number',
      prompt:
        'Có bao nhiêu dipeptide mạch hở được tạo thành từ glycine và alanine (có thể lặp lại cùng một amino acid)?',
      answer: 4,
      hints: ['Mỗi vị trí (đầu N, đầu C) có $2$ cách chọn.'],
      solution: 'Gly-Gly, Gly-Ala, Ala-Gly, Ala-Ala: có $2 \\cdot 2 = 4$ dipeptide.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Tripeptide Ala-Gly-Val có hai liên kết peptide.',
        'Dipeptide Gly-Ala có phản ứng màu biuret.',
        'Trong tripeptide Ala-Gly-Val, alanine là amino acid đầu N.',
        'Amino acid là chất rắn kết tinh, dễ tan trong nước.',
        'Gly-Ala và Ala-Gly là cùng một chất.',
      ],
      answers: [0, 2, 3],
      hints: [
        'Phản ứng màu biuret cần ít nhất hai liên kết peptide.',
        'Tên peptide ghi từ đầu N đến đầu C.',
      ],
      solution:
        'Ala-Gly-Val có $3 - 1 = 2$ liên kết peptide, đầu N là Ala. Dipeptide chỉ có một liên kết peptide nên không có phản ứng màu biuret. Gly-Ala (đầu N là Gly) khác Ala-Gly. Amino acid tồn tại ở dạng ion lưỡng cực nên là chất rắn, dễ tan trong nước.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}1$ mol glutamic acid tác dụng hết với dung dịch NaOH dư. Tính số mol NaOH đã phản ứng.',
      answer: 0.2,
      tolerance: 0.001,
      unit: 'mol',
      hints: ['Glutamic acid có hai nhóm $\\mathrm{{-}COOH}$.'],
      solution:
        'Mỗi nhóm $\\mathrm{{-}COOH}$ phản ứng với một NaOH: $n_{\\mathrm{NaOH}} = 2 \\cdot 0{,}1 = 0{,}2$ mol.',
    },
  ],
  takeaways: [
    'α-amino acid $\\mathrm{H_2N{-}CH(R){-}COOH}$ chứa đồng thời nhóm amino và nhóm carboxyl, tồn tại chủ yếu ở dạng ion lưỡng cực: chất rắn, nóng chảy ở nhiệt độ cao, dễ tan trong nước.',
    'Amino acid có tính lưỡng tính: tác dụng với cả HCl và NaOH; tham gia phản ứng ester hoá và trùng ngưng.',
    'Trong điện trường, dạng cation đi về cực âm, dạng anion đi về cực dương; dạng tồn tại phụ thuộc pH.',
    'Peptide gồm các đơn vị α-amino acid nối bằng liên kết peptide $\\mathrm{{-}CO{-}NH{-}}$; $n$ đơn vị có $n - 1$ liên kết, $M = \\sum M - 18(n - 1)$.',
    'Peptide bị thuỷ phân tạo α-amino acid; peptide có từ hai liên kết peptide trở lên cho màu tím với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm.',
  ],
};
