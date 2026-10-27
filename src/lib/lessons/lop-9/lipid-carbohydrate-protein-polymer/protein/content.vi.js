/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Protein là những hợp chất hữu cơ phức tạp có phân tử khối rất lớn, được tạo từ nhiều amino acid nối với nhau bằng liên kết peptide. Protein bị thuỷ phân thành amino acid khi đun với acid, base hoặc nhờ enzyme; bị đông tụ khi đun nóng hoặc gặp acid, base; bị phân huỷ khi đun nóng mạnh, có mùi khét. Protein có vai trò cấu tạo, xúc tác, điều hoà, vận chuyển và là nguồn thức ăn quan trọng.',
  intro:
    'Luộc trứng, lòng trắng trong suốt hoá thành khối trắng đục; nấu canh cua, riêu cua nổi thành từng mảng; vắt chanh vào sữa, sữa vón cục. Cả ba hiện tượng đều xảy ra với cùng một loại chất: protein. Phân tử protein được xây dựng thế nào, và vì sao nó dễ biến đổi như vậy?',
  objectives: [
    'Nêu được khái niệm protein, đặc điểm cấu tạo phân tử protein từ các amino acid.',
    'Trình bày được tính chất hoá học của protein: phản ứng thuỷ phân, sự đông tụ, sự phân huỷ bởi nhiệt.',
    'Phân biệt được protein (tơ tằm, len) với vật liệu khác bằng cách đốt.',
    'Nêu được vai trò của protein đối với cơ thể sống và trong đời sống.',
  ],
  sections: [
    {
      heading: 'Khái niệm và cấu tạo',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Protein',
          text: 'Protein là những hợp chất hữu cơ phức tạp, có phân tử khối rất lớn (từ vài chục nghìn đến vài triệu amu), được tạo thành từ nhiều đơn vị amino acid liên kết với nhau bằng liên kết peptide.',
        },
        {
          type: 'p',
          text: 'Protein có trong cơ thể người, động vật và thực vật: thịt, cá, trứng, sữa, máu, tóc, sừng, móng, các loại đậu. Thành phần nguyên tố của protein luôn có C, H, O, N; nhiều protein có thêm S, P, …',
        },
        {
          type: 'p',
          text: 'Amino acid là hợp chất hữu cơ trong phân tử có nhóm amino $\\mathrm{{-}NH_2}$ và nhóm carboxyl $\\mathrm{{-}COOH}$. Amino acid đơn giản nhất là glycine:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}COOH} \\quad (\\text{glycine},\\ M = 75)',
        },
        {
          type: 'p',
          text: 'Nhóm $\\mathrm{{-}COOH}$ của amino acid này kết hợp với nhóm $\\mathrm{{-}NH_2}$ của amino acid kia, tách ra một phân tử nước và tạo liên kết peptide $\\mathrm{{-}CO{-}NH{-}}$. Mỗi amino acid trở thành một mắt xích của chuỗi.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2N{-}CH_2{-}CO\\boxed{OH + H}NH{-}CH_2{-}COOH} \\rightarrow \\mathrm{H_2N{-}CH_2{-}CO{-}NH{-}CH_2{-}COOH} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đếm liên kết',
          text: 'Một chuỗi gồm $n$ amino acid có $n - 1$ liên kết peptide; khi tạo chuỗi đã tách ra $n - 1$ phân tử nước.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng thuỷ phân',
          text: 'Khi đun nóng với dung dịch acid hoặc base, hoặc dưới tác dụng của enzyme, protein bị thuỷ phân: các liên kết peptide bị cắt và tạo thành hỗn hợp các amino acid.',
        },
        {
          type: 'tex',
          tex: '\\text{Protein} + \\mathrm{H_2O} \\xrightarrow{\\text{acid / base},\\ t^\\circ \\text{ / enzyme}} \\text{amino acid}',
        },
        {
          type: 'p',
          text: 'Trong cơ thể, enzyme ở dạ dày và ruột thuỷ phân protein trong thức ăn thành amino acid; từ các amino acid này cơ thể tổng hợp nên protein của chính mình.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sự đông tụ',
          text: 'Khi đun nóng hoặc cho thêm acid, base (hoặc ethylic alcohol), nhiều protein bị đông tụ, tách ra khỏi dung dịch thành chất rắn. Ví dụ: luộc trứng, nấu canh cua thấy riêu cua nổi lên, vắt chanh vào sữa thấy sữa vón cục.',
        },
        { type: 'widget', name: 'coagulation' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sự phân huỷ bởi nhiệt',
          text: 'Khi đun nóng mạnh không có nước, hoặc khi đốt, protein bị phân huỷ tạo ra những chất bay hơi có mùi khét, như mùi tóc cháy. Dựa vào đó có thể phân biệt tơ tằm, len (protein) với sợi tổng hợp như nylon.',
        },
      ],
    },
    {
      heading: 'Vai trò của protein',
      blocks: [
        {
          type: 'table',
          head: ['Vai trò', 'Ví dụ'],
          rows: [
            ['Cấu tạo', 'Protein là thành phần chính của cơ, da, tóc, móng'],
            [
              'Xúc tác',
              'Enzyme là protein làm tăng tốc độ các phản ứng trong cơ thể (enzyme tiêu hoá)',
            ],
            ['Điều hoà', 'Một số hormone là protein, như insulin điều hoà lượng đường trong máu'],
            ['Vận chuyển', 'Hemoglobin trong máu vận chuyển oxygen đến các tế bào'],
            ['Thức ăn', 'Thịt, cá, trứng, sữa, đậu cung cấp protein cho cơ thể'],
          ],
        },
        {
          type: 'p',
          text: 'Trong đời sống, protein còn là nguyên liệu của nhiều sản phẩm: tơ tằm, len, da thuộc, keo dán, …',
        },
      ],
    },
  ],
  explore: {
    title: 'Chuỗi hạt amino acid',
    instruction:
      'Bấm vào các amino acid để nối chúng thành chuỗi. Mỗi lần nối, một liên kết peptide –CO–NH– xuất hiện và một phân tử nước tách ra. Đếm số liên kết, số phân tử nước và xem phân tử khối của chuỗi; rồi bấm “Thuỷ phân” để cắt chuỗi về các amino acid.',
  },
  examples: [
    {
      problem:
        'Ba amino acid glycine ($M = 75$), alanine ($M = 89$) và valine ($M = 117$) nối với nhau thành một chuỗi Gly–Ala–Val. Chuỗi có bao nhiêu liên kết peptide? Tính phân tử khối của chuỗi.',
      steps: [
        'Chuỗi có $3$ amino acid nên có $3 - 1 = 2$ liên kết peptide.',
        'Mỗi liên kết peptide tạo thành kèm theo một phân tử nước tách ra, nên đã tách $2$ phân tử $\\mathrm{H_2O}$.',
        'Phân tử khối: $75 + 89 + 117 - 2 \\times 18 = 245$ amu.',
      ],
      answer: 'Chuỗi có $2$ liên kết peptide, phân tử khối $245$ amu.',
    },
    {
      problem:
        'Thuỷ phân hoàn toàn $13{,}2$ g chuỗi Gly–Gly (phân tử khối $132$ amu) thu được glycine. Tính khối lượng glycine và khối lượng nước đã phản ứng.',
      steps: [
        '$n_{\\text{Gly-Gly}} = \\dfrac{13{,}2}{132} = 0{,}1$ mol.',
        'Chuỗi có $1$ liên kết peptide, nên cần $1$ phân tử nước và tạo $2$ phân tử glycine: $n_{\\mathrm{H_2O}} = 0{,}1$ mol, $n_{\\text{glycine}} = 0{,}2$ mol.',
        '$m_{\\text{glycine}} = 0{,}2 \\times 75 = 15$ g; $m_{\\mathrm{H_2O}} = 0{,}1 \\times 18 = 1{,}8$ g.',
        'Kiểm tra bảo toàn khối lượng: $13{,}2 + 1{,}8 = 15$ g.',
      ],
      answer: 'Thu được $15$ g glycine; $1{,}8$ g nước đã phản ứng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân tử protein được tạo thành từ nhiều',
      options: ['amino acid', 'glucose', 'acid béo và glycerol', 'ethylene'],
      answer: 0,
      hints: ['Thuỷ phân hoàn toàn protein thu được chất gì?'],
      solution:
        'Protein gồm nhiều amino acid nối với nhau bằng liên kết peptide. Glucose là mắt xích của tinh bột, cellulose; acid béo và glycerol tạo chất béo; ethylene tạo polyethylene.',
    },
    {
      type: 'multi',
      prompt: 'Nguyên tố nào luôn có trong thành phần của protein?',
      options: ['C', 'H', 'O', 'N', 'Na'],
      answers: [0, 1, 2, 3],
      hints: ['Amino acid có nhóm $\\mathrm{{-}NH_2}$ và nhóm $\\mathrm{{-}COOH}$.'],
      solution:
        'Protein luôn chứa C, H, O, N (nhiều protein có thêm S, P). Na không phải nguyên tố cấu tạo nên protein.',
    },
    {
      type: 'number',
      prompt: 'Một chuỗi gồm $10$ amino acid có bao nhiêu liên kết peptide?',
      answer: 9,
      hints: ['Hai hạt nối với nhau bằng một liên kết; ba hạt thì cần mấy liên kết?'],
      solution: 'Chuỗi $n$ amino acid có $n - 1$ liên kết peptide: $10 - 1 = 9$.',
    },
    {
      type: 'number',
      prompt:
        'Ba phân tử glycine ($M = 75$) nối với nhau thành chuỗi Gly–Gly–Gly. Tính phân tử khối của chuỗi, theo amu.',
      answer: 189,
      unit: 'amu',
      hints: [
        'Ba amino acid nối thành chuỗi thì tách ra mấy phân tử nước?',
        'Lấy $3 \\times 75$ trừ đi $18$ cho mỗi phân tử nước tách ra.',
      ],
      solution: 'Tách $2$ phân tử nước: $3 \\times 75 - 2 \\times 18 = 225 - 36 = 189$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $14{,}6$ g chuỗi Gly–Ala (phân tử khối $146$ amu). Tính khối lượng nước đã phản ứng, theo gam.',
      answer: 1.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\text{Gly-Ala}} = \\dfrac{14{,}6}{146}$ mol.',
        'Chuỗi có một liên kết peptide nên cần một phân tử nước.',
      ],
      solution:
        '$n = 0{,}1$ mol; $n_{\\mathrm{H_2O}} = 0{,}1$ mol; $m = 0{,}1 \\times 18 = 1{,}8$ g.',
    },
    {
      type: 'text',
      prompt:
        'Thuỷ phân hoàn toàn protein (nhờ acid, base hoặc enzyme) thu được hỗn hợp các chất gì?',
      accept: ['amino acid', 'các amino acid', 'aminoacid', 'amino axit', 'hỗn hợp amino acid'],
      hints: ['Đó chính là các “mắt xích” tạo nên protein.'],
      solution: 'Liên kết peptide bị cắt, protein tạo thành hỗn hợp các amino acid.',
    },
    {
      type: 'multi',
      prompt: 'Những cách nào làm lòng trắng trứng bị đông tụ?',
      options: ['Đun nóng', 'Thêm dung dịch acid', 'Thêm nước cất lạnh', 'Thêm dung dịch base'],
      answers: [0, 1, 3],
      hints: ['Nước cất không làm thay đổi protein.'],
      solution:
        'Đun nóng, thêm acid hoặc base đều làm protein đông tụ. Thêm nước cất chỉ pha loãng dung dịch.',
    },
    {
      type: 'choice',
      prompt: 'Cách đơn giản để phân biệt khăn lụa tơ tằm với khăn sợi nylon là',
      options: [
        'đốt một sợi nhỏ: tơ tằm cháy có mùi khét như tóc cháy',
        'nhỏ dung dịch iodine: tơ tằm chuyển màu xanh tím',
        'ngâm vào nước: tơ tằm tan hết',
        'nhìn màu sắc của khăn',
      ],
      answer: 0,
      hints: ['Tơ tằm là protein; protein bị phân huỷ khi đốt.'],
      solution:
        'Tơ tằm là protein, khi đốt bị phân huỷ tạo mùi khét như tóc cháy; nylon cháy không có mùi đó. Iodine dùng nhận biết tinh bột; tơ tằm không tan trong nước.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi protein với vai trò của nó.',
      left: ['Hemoglobin', 'Enzyme tiêu hoá', 'Insulin', 'Keratin trong tóc, móng'],
      right: [
        'Vận chuyển oxygen trong máu',
        'Xúc tác phản ứng thuỷ phân thức ăn',
        'Hormone điều hoà lượng đường trong máu',
        'Cấu tạo nên cơ thể',
        'Dự trữ năng lượng trong hạt',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hemoglobin làm máu có màu đỏ và gắn với oxygen.'],
      solution:
        'Hemoglobin vận chuyển oxygen; enzyme xúc tác; insulin là hormone điều hoà đường huyết; keratin có vai trò cấu tạo. Dự trữ năng lượng trong hạt là vai trò của tinh bột.',
    },
    {
      type: 'choice',
      prompt: 'Khi nấu canh cua, riêu cua nổi lên thành từng mảng là do',
      options: [
        'protein trong cua bị đông tụ khi đun nóng',
        'tinh bột trong cua tác dụng với nước',
        'chất béo bị xà phòng hoá',
        'protein bị thuỷ phân thành amino acid',
      ],
      answer: 0,
      hints: ['Hiện tượng này giống khi luộc trứng.'],
      solution:
        'Khi đun nóng, protein trong nước cua đông tụ, tách ra thành mảng và nổi lên: đó là riêu cua.',
    },
  ],
  takeaways: [
    'Protein: phân tử khối rất lớn, tạo bởi nhiều amino acid nối nhau bằng liên kết peptide $\\mathrm{{-}CO{-}NH{-}}$; luôn chứa C, H, O, N.',
    'Chuỗi $n$ amino acid có $n - 1$ liên kết peptide, khi tạo chuỗi tách ra $n - 1$ phân tử nước.',
    'Thuỷ phân (acid, base hoặc enzyme) tạo hỗn hợp amino acid.',
    'Protein đông tụ khi đun nóng hoặc gặp acid, base; bị phân huỷ khi đốt, có mùi khét.',
    'Vai trò: cấu tạo, xúc tác (enzyme), điều hoà (hormone), vận chuyển (hemoglobin), thức ăn.',
  ],
};
