/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đại cương về polymer: khái niệm polymer, monomer, mắt xích và hệ số polymer hoá; danh pháp, phân loại, cấu trúc mạch, tính chất vật lí, các phản ứng cắt mạch, giữ nguyên mạch, tăng mạch và hai phương pháp tổng hợp là trùng hợp và trùng ngưng.',
  intro:
    'Túi nylon, ống nước PVC, sợi vải nylon hay lốp xe đều làm từ polymer: những phân tử rất lớn ghép từ hàng nghìn phân tử nhỏ. Vì sao ethylene nối được thành polyethylene còn ethanol thì không? Bài học trả lời câu hỏi đó qua khái niệm, cấu trúc, tính chất và cách tổng hợp polymer.',
  objectives: [
    'Nêu được khái niệm polymer, monomer, mắt xích, hệ số polymer hoá; gọi được tên một số polymer thông dụng.',
    'Phân loại được polymer (theo nguồn gốc, theo tính chất khi đun nóng) và nêu được các dạng cấu trúc mạch.',
    'Trình bày được tính chất vật lí chung của polymer.',
    'Trình bày được phản ứng cắt mạch, giữ nguyên mạch và tăng mạch polymer.',
    'Nêu được điều kiện của monomer và viết được phương trình tổng hợp polymer bằng phản ứng trùng hợp và trùng ngưng.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Polymer',
          text: 'Polymer là những hợp chất có phân tử khối rất lớn, do nhiều đơn vị nhỏ (gọi là mắt xích) liên kết với nhau tạo nên. Các phân tử nhỏ phản ứng với nhau tạo thành polymer gọi là monomer.',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}CH_2} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} \\mathrm{({-}CH_2{-}CH_2{-})_n}',
        },
        {
          type: 'p',
          text: 'Trong phương trình trên, ethylene là monomer, $\\mathrm{{-}CH_2{-}CH_2{-}}$ là mắt xích và $n$ là hệ số polymer hoá (độ polymer hoá): số mắt xích trong một phân tử polymer. Phân tử khối của polymer $M = n \\cdot M_{\\text{mắt xích}}$.',
        },
        {
          type: 'list',
          items: [
            'Tên polymer = poly + tên monomer: polyethylene (PE), polypropylene (PP), polystyrene (PS).',
            'Tên monomer gồm hai từ trở lên thì đặt trong ngoặc đơn: poly(vinyl chloride) (PVC), poly(methyl methacrylate) (PMMA), poly(vinyl acetate).',
            'Một số polymer có tên riêng: cellulose, tinh bột, capron, nylon-6,6.',
          ],
        },
      ],
    },
    {
      heading: 'Phân loại và cấu trúc',
      blocks: [
        {
          type: 'list',
          items: [
            'Theo nguồn gốc: polymer thiên nhiên (tinh bột, cellulose, protein, cao su thiên nhiên), polymer tổng hợp (PE, PVC, nylon-6,6) và polymer bán tổng hợp, chế biến hoá học từ polymer thiên nhiên (tơ visco, cellulose acetate).',
            'Theo phương pháp tổng hợp: polymer trùng hợp (PE, PVC) và polymer trùng ngưng (nylon-6,6, poly(ethylene terephthalate)).',
            'Theo tính chất khi đun nóng: polymer nhiệt dẻo nóng chảy khi đun nóng và đông cứng khi để nguội (PE, PP, PVC, PS); polymer nhiệt rắn không nóng chảy mà bị phân huỷ khi đun nóng (nhựa phenol formaldehyde dạng rezit, cao su lưu hoá).',
          ],
        },
        {
          type: 'table',
          caption: 'Các dạng cấu trúc mạch polymer',
          head: ['Dạng mạch', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Mạch không phân nhánh',
              'Các mắt xích nối thành một chuỗi dài',
              'PE, PVC, amylose, cellulose',
            ],
            ['Mạch phân nhánh', 'Mạch chính có các nhánh', 'amylopectin, glycogen'],
            [
              'Mạng không gian',
              'Các mạch nối với nhau bằng cầu nối thành mạng lưới',
              'cao su lưu hoá, nhựa rezit',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Hầu hết polymer là chất rắn, không bay hơi, không có nhiệt độ nóng chảy xác định mà nóng chảy trong một khoảng nhiệt độ khá rộng; một số không nóng chảy mà bị phân huỷ khi đun nóng.',
            'Đa số polymer không tan trong nước và các dung môi thông thường; một số tan được trong dung môi hữu cơ thích hợp.',
            'Tuỳ cấu tạo, polymer có tính dẻo (PE, PP), tính đàn hồi (polyisoprene, polybuta-1,3-diene), tính dai, bền, kéo được thành sợi (capron, nylon-6,6), tính cách điện (PE, PVC); một số polymer có tính bán dẫn.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng cắt mạch: mạch polymer bị cắt thành các đoạn ngắn hơn hoặc thành monomer, dưới tác dụng của nhiệt, tác nhân hoá học hoặc sinh học. Polystyrene bị nhiệt phân thành styrene; polyamide, tinh bột, cellulose bị thuỷ phân.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{({-}NH{-}[CH_2]_5{-}CO{-})_n} + n\\,\\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} n\\,\\mathrm{H_2N{-}[CH_2]_5{-}COOH}',
        },
        {
          type: 'p',
          text: 'Phản ứng giữ nguyên mạch: phản ứng chỉ xảy ra ở nhóm thế hoặc liên kết đôi trên mạch, số mắt xích không đổi. Ví dụ thuỷ phân poly(vinyl acetate) trong dung dịch NaOH thu được poly(vinyl alcohol):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{({-}CH_2{-}CH(OCOCH_3){-})_n} + n\\,\\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{({-}CH_2{-}CH(OH){-})_n} + n\\,\\mathrm{CH_3COONa}',
        },
        {
          type: 'p',
          text: 'Phản ứng tăng mạch: các mạch polymer nối với nhau thành mạch dài hơn hoặc thành mạng không gian. Đun nóng cao su với lưu huỳnh (lưu hoá cao su), các mạch được nối với nhau chủ yếu bằng cầu disulfide $\\mathrm{{-}S{-}S{-}}$, nên cao su lưu hoá bền và đàn hồi hơn.',
        },
      ],
    },
    {
      heading: 'Phương pháp tổng hợp polymer',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Trùng hợp',
          text: 'Trùng hợp là quá trình kết hợp nhiều phân tử nhỏ (monomer) giống nhau hay tương tự nhau thành phân tử rất lớn (polymer). Monomer tham gia phản ứng trùng hợp phải có liên kết bội (như $\\mathrm{CH_2{=}CH{-}R}$) hoặc vòng kém bền (như caprolactam).',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}CHCl} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} \\mathrm{({-}CH_2{-}CHCl{-})_n}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Trùng ngưng',
          text: 'Trùng ngưng là quá trình kết hợp nhiều phân tử nhỏ (monomer) thành phân tử rất lớn (polymer), đồng thời giải phóng những phân tử nhỏ khác (thường là nước). Monomer tham gia phản ứng trùng ngưng phải có ít nhất hai nhóm chức có khả năng phản ứng.',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{H_2N{-}[CH_2]_5{-}COOH} \\xrightarrow{t^\\circ} \\mathrm{({-}NH{-}[CH_2]_5{-}CO{-})_n} + n\\,\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &n\\,\\mathrm{H_2N{-}[CH_2]_6{-}NH_2} + n\\,\\mathrm{HOOC{-}[CH_2]_4{-}COOH} \\\\ &\\xrightarrow{t^\\circ} \\mathrm{({-}NH{-}[CH_2]_6{-}NH{-}CO{-}[CH_2]_4{-}CO{-})_n} + 2n\\,\\mathrm{H_2O} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bảo toàn khối lượng',
          text: 'Trong phản ứng trùng hợp không có phân tử nhỏ tách ra, nên khối lượng polymer bằng khối lượng monomer đã phản ứng. Trong phản ứng trùng ngưng, khối lượng polymer bằng khối lượng monomer trừ khối lượng nước tách ra.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ ghép monomer',
    instruction:
      'Chọn monomer và phương pháp (trùng hợp hay trùng ngưng), rồi tăng số mắt xích. Quan sát khi nào mạch polymer tạo thành, có nước tách ra hay không, và so sánh tổng phân tử khối của monomer với của mạch polymer.',
  },
  examples: [
    {
      problem:
        'Một loại polyethylene có phân tử khối trung bình là $420\\,000$. Tính hệ số polymer hoá của loại polyethylene đó.',
      steps: [
        'Mắt xích của polyethylene là $\\mathrm{{-}CH_2{-}CH_2{-}}$, $M_{\\text{mắt xích}} = 28$.',
        '$n = \\dfrac{M_{\\text{polymer}}}{M_{\\text{mắt xích}}} = \\dfrac{420\\,000}{28} = 15\\,000$.',
      ],
      answer: 'Hệ số polymer hoá là $15\\,000$.',
    },
    {
      problem:
        'Trùng hợp $5{,}6$ tấn ethylene với hiệu suất $80\\%$. Tính khối lượng polyethylene thu được.',
      steps: [
        'Phản ứng trùng hợp không tách ra phân tử nhỏ nào, nên khối lượng polymer bằng khối lượng monomer đã phản ứng.',
        'Khối lượng ethylene đã phản ứng: $5{,}6 \\cdot 80\\% = 4{,}48$ tấn.',
      ],
      answer: 'Thu được $4{,}48$ tấn polyethylene.',
    },
    {
      problem:
        'Cho các chất: $\\mathrm{CH_2{=}CH{-}CH_3}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{H_2N{-}CH_2{-}COOH}$, $\\mathrm{CH_2{=}CH{-}C_6H_5}$. Chất nào tham gia phản ứng trùng hợp, chất nào tham gia phản ứng trùng ngưng?',
      steps: [
        'Propylene và styrene có liên kết đôi $\\mathrm{C{=}C}$: tham gia phản ứng trùng hợp, tạo polypropylene và polystyrene.',
        'Glycine có hai nhóm chức $\\mathrm{{-}NH_2}$ và $\\mathrm{{-}COOH}$: tham gia phản ứng trùng ngưng, tạo polypeptide và tách nước.',
        'Ethanol chỉ có một nhóm chức $\\mathrm{{-}OH}$, không có liên kết bội: không tham gia cả hai loại phản ứng.',
      ],
      answer:
        'Trùng hợp: $\\mathrm{CH_2{=}CH{-}CH_3}$ và $\\mathrm{CH_2{=}CH{-}C_6H_5}$; trùng ngưng: $\\mathrm{H_2N{-}CH_2{-}COOH}$; ethanol không tạo polymer.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Monomer dùng để tổng hợp poly(vinyl chloride) (PVC) là',
      options: [
        '$\\mathrm{CH_2{=}CHCl}$',
        '$\\mathrm{CH_2{=}CH_2}$',
        '$\\mathrm{CH_3{-}CH_2Cl}$',
        '$\\mathrm{CH_2{=}CH{-}CH_3}$',
      ],
      answer: 0,
      hints: ['Tên polymer = poly + tên monomer.', 'Monomer trùng hợp phải có liên kết đôi.'],
      solution:
        'PVC được tổng hợp bằng phản ứng trùng hợp vinyl chloride $\\mathrm{CH_2{=}CHCl}$. Chloroethane $\\mathrm{CH_3{-}CH_2Cl}$ không có liên kết đôi nên không trùng hợp được.',
    },
    {
      type: 'number',
      prompt:
        'Một loại polyethylene có phân tử khối trung bình là $56\\,000$. Tính hệ số polymer hoá $n$.',
      answer: 2000,
      hints: ['Mắt xích $\\mathrm{{-}CH_2{-}CH_2{-}}$ có $M = 28$.'],
      solution: '$n = \\dfrac{56\\,000}{28} = 2\\,000$.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào tham gia được phản ứng trùng hợp?',
      options: [
        'ethylene',
        'styrene',
        'caprolactam',
        'ethanol',
        'adipic acid',
        'ε-aminocaproic acid',
      ],
      answers: [0, 1, 2],
      hints: ['Monomer trùng hợp có liên kết bội $\\mathrm{C{=}C}$ hoặc vòng kém bền.'],
      solution:
        'Ethylene và styrene có liên kết đôi $\\mathrm{C{=}C}$, caprolactam là vòng kém bền: ba chất này trùng hợp được. Ethanol không tạo polymer; adipic acid và ε-aminocaproic acid có hai nhóm chức nên tham gia phản ứng trùng ngưng.',
    },
    {
      type: 'choice',
      prompt: 'Polymer nào được tổng hợp bằng phản ứng trùng ngưng?',
      options: ['nylon-6,6', 'polyethylene', 'poly(vinyl chloride)', 'polystyrene'],
      answer: 0,
      hints: ['Phản ứng trùng ngưng tách ra phân tử nhỏ như nước.'],
      solution:
        'Nylon-6,6 tạo từ hexamethylenediamine và adipic acid, tách nước: trùng ngưng. PE, PVC, PS đều tạo bằng phản ứng trùng hợp.',
    },
    {
      type: 'choice',
      prompt: 'Quá trình lưu hoá cao su thuộc loại phản ứng nào?',
      options: ['tăng mạch polymer', 'cắt mạch polymer', 'giữ nguyên mạch polymer', 'trùng ngưng'],
      answer: 0,
      hints: ['Cầu disulfide $\\mathrm{{-}S{-}S{-}}$ nối các mạch cao su với nhau.'],
      solution:
        'Lưu huỳnh tạo cầu $\\mathrm{{-}S{-}S{-}}$ nối các mạch thành mạng không gian: đó là phản ứng tăng mạch polymer.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi polymer với dạng cấu trúc mạch của nó.',
      left: ['amylose', 'amylopectin', 'cao su lưu hoá'],
      right: ['mạch không phân nhánh', 'mạch phân nhánh', 'mạng không gian'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Amylopectin có các nhánh nối qua liên kết α-1,6-glycoside.'],
      solution:
        'Amylose là mạch không phân nhánh, amylopectin là mạch phân nhánh, cao su lưu hoá có các mạch nối với nhau bằng cầu disulfide thành mạng không gian.',
    },
    {
      type: 'number',
      prompt: 'Tính phân tử khối của một đoạn mạch PVC gồm $1\\,500$ mắt xích.',
      answer: 93750,
      hints: ['Mắt xích $\\mathrm{{-}CH_2{-}CHCl{-}}$ có $M = 2 \\cdot 12 + 3 + 35{,}5$.'],
      solution: '$M_{\\text{mắt xích}} = 62{,}5$; $M = 1\\,500 \\cdot 62{,}5 = 93\\,750$.',
    },
    {
      type: 'text',
      prompt: 'Viết tên polymer tạo thành khi trùng hợp propylene $\\mathrm{CH_2{=}CH{-}CH_3}$.',
      accept: ['polypropylene', 'PP', 'polypropylene (PP)', 'poly propylene'],
      hints: ['Tên polymer = poly + tên monomer.'],
      solution: 'Polypropylene (PP), mắt xích $\\mathrm{{-}CH_2{-}CH(CH_3){-}}$.',
    },
    {
      type: 'number',
      prompt:
        'Trùng ngưng hoàn toàn $13{,}1$ kg ε-aminocaproic acid $\\mathrm{H_2N{-}[CH_2]_5{-}COOH}$. Tính khối lượng nylon-6 thu được, coi lượng nước tách ra là $n$ mol cho mỗi $n$ mol monomer.',
      answer: 11.3,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        '$M_{\\text{monomer}} = 131$; mỗi phân tử monomer tách ra một phân tử $\\mathrm{H_2O}$.',
        'Mắt xích $\\mathrm{{-}NH{-}[CH_2]_5{-}CO{-}}$ có $M = 131 - 18 = 113$.',
      ],
      solution:
        '$n_{\\text{monomer}} = \\dfrac{13{,}1}{131} = 0{,}1$ kmol; $m_{\\text{polymer}} = 0{,}1 \\cdot 113 = 11{,}3$ kg (hoặc $13{,}1 - 0{,}1 \\cdot 18 = 11{,}3$ kg).',
    },
  ],
  takeaways: [
    'Polymer là hợp chất có phân tử khối rất lớn do nhiều mắt xích liên kết với nhau; $n$ là hệ số polymer hoá, $M = n \\cdot M_{\\text{mắt xích}}$.',
    'Tên polymer = poly + tên monomer (tên hai từ đặt trong ngoặc đơn: poly(vinyl chloride)).',
    'Mạch polymer có ba dạng: không phân nhánh, phân nhánh và mạng không gian; polymer nhiệt dẻo nóng chảy khi đun, polymer nhiệt rắn bị phân huỷ.',
    'Polymer có phản ứng cắt mạch (thuỷ phân, nhiệt phân), giữ nguyên mạch (thuỷ phân poly(vinyl acetate)) và tăng mạch (lưu hoá cao su).',
    'Trùng hợp cần monomer có liên kết bội hoặc vòng kém bền, không tách phân tử nhỏ; trùng ngưng cần monomer có ít nhất hai nhóm chức, tách ra phân tử nhỏ như nước.',
  ],
};
