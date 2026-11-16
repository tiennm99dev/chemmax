/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Amine: khái niệm, phân loại theo bậc và theo gốc hydrocarbon, danh pháp gốc chức và thay thế, tính chất vật lí, tính base so với ammonia, phản ứng tạo phức, phản ứng với nitrous acid, phản ứng thế bromine của aniline, ứng dụng và điều chế.',
  intro:
    'Mùi tanh của cá phần lớn do các amine như trimethylamine gây ra. Vì vậy người ta hay rửa cá bằng giấm hoặc vắt chanh: acid biến amine thành muối không bay hơi, mùi tanh giảm hẳn. Amine giống ammonia ở chỗ nào, và vì sao chúng phản ứng được với acid?',
  objectives: [
    'Nêu được khái niệm amine, phân loại amine theo bậc và theo đặc điểm gốc hydrocarbon (alkylamine, arylamine).',
    'Gọi được tên amine đơn giản theo danh pháp gốc chức, danh pháp thay thế và tên thông thường của aniline.',
    'Nêu được tính chất vật lí của amine.',
    'Giải thích được tính base của amine từ cặp electron chưa liên kết của nguyên tử N; so sánh tính base của alkylamine, ammonia và aniline.',
    'Trình bày được phản ứng tạo phức, phản ứng với nitrous acid và phản ứng thế bromine của aniline; nêu được ứng dụng và cách điều chế amine.',
  ],
  sections: [
    {
      heading: 'Khái niệm và phân loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Amine',
          text: 'Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử ammonia $\\mathrm{NH_3}$ bằng gốc hydrocarbon, ta được amine.',
        },
        {
          type: 'list',
          items: [
            'Theo bậc: bậc của amine bằng số gốc hydrocarbon liên kết trực tiếp với nguyên tử nitrogen. Ví dụ $\\mathrm{CH_3NH_2}$ là amine bậc một, $\\mathrm{CH_3{-}NH{-}CH_3}$ là amine bậc hai, $\\mathrm{(CH_3)_3N}$ là amine bậc ba.',
            'Theo gốc hydrocarbon: alkylamine (nguyên tử N liên kết với gốc alkyl, như $\\mathrm{C_2H_5NH_2}$) và arylamine (nguyên tử N liên kết trực tiếp với vòng benzene, như aniline $\\mathrm{C_6H_5NH_2}$).',
            'Amine có đồng phân về bậc amine, về mạch carbon và về vị trí nhóm chức. Ví dụ $\\mathrm{C_3H_9N}$ có bốn đồng phân amine.',
          ],
        },
      ],
    },
    {
      heading: 'Danh pháp',
      blocks: [
        {
          type: 'list',
          items: [
            'Tên gốc chức: tên gốc hydrocarbon + amine. Có nhiều gốc khác nhau thì gọi theo thứ tự chữ cái, gốc giống nhau thêm "di", "tri".',
            'Tên thay thế của amine bậc một: tên hydrocarbon mạch chính (bỏ "e") + vị trí nhóm amine + amine.',
            'Với amine bậc hai, bậc ba: chọn gốc dài nhất làm mạch chính, các gốc còn lại gắn với N được gọi kèm chữ N chỉ vị trí.',
          ],
        },
        {
          type: 'table',
          caption: 'Tên gọi của một số amine',
          head: ['Công thức', 'Tên gốc chức', 'Tên thay thế', 'Bậc'],
          rows: [
            ['$\\mathrm{CH_3NH_2}$', 'methylamine', 'methanamine', 'I'],
            ['$\\mathrm{C_2H_5NH_2}$', 'ethylamine', 'ethanamine', 'I'],
            ['$\\mathrm{CH_3CH_2CH_2NH_2}$', 'propylamine', 'propan-1-amine', 'I'],
            ['$\\mathrm{CH_3CH(NH_2)CH_3}$', 'isopropylamine', 'propan-2-amine', 'I'],
            ['$\\mathrm{CH_3{-}NH{-}CH_3}$', 'dimethylamine', 'N-methylmethanamine', 'II'],
            ['$\\mathrm{CH_3{-}NH{-}C_2H_5}$', 'ethylmethylamine', 'N-methylethanamine', 'II'],
            ['$\\mathrm{(CH_3)_3N}$', 'trimethylamine', 'N,N-dimethylmethanamine', 'III'],
            [
              '$\\mathrm{C_6H_5NH_2}$',
              'phenylamine',
              'benzenamine (tên thông thường: aniline)',
              'I',
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
            'Methylamine, dimethylamine, trimethylamine và ethylamine là những chất khí ở điều kiện thường, mùi khai giống ammonia (hoặc mùi tanh của cá), tan nhiều trong nước nhờ tạo liên kết hydrogen với nước.',
            'Độ tan trong nước giảm dần khi số nguyên tử carbon trong gốc hydrocarbon tăng.',
            'Nhiệt độ sôi của amine cao hơn hydrocarbon có phân tử khối tương đương.',
            'Aniline là chất lỏng không màu, ít tan trong nước, độc; để lâu trong không khí bị chuyển sang màu nâu đen.',
          ],
        },
      ],
    },
    {
      heading: 'Tính base',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử N trong amine còn một cặp electron chưa liên kết, giống trong ammonia. Nhờ cặp electron này, amine nhận được proton $\\mathrm{H^+}$: amine có tính base yếu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3NH_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{CH_3NH_3^+} + \\mathrm{OH^-}',
        },
        {
          type: 'list',
          items: [
            'Dung dịch alkylamine làm quỳ tím hoá xanh, phenolphthalein hoá hồng. Dung dịch aniline không làm quỳ tím đổi màu.',
            'Amine tác dụng với acid tạo muối: $\\mathrm{CH_3NH_2 + HCl \\rightarrow CH_3NH_3Cl}$ (methylammonium chloride); $\\mathrm{C_6H_5NH_2 + HCl \\rightarrow C_6H_5NH_3Cl}$ (phenylammonium chloride).',
            'Dung dịch alkylamine tạo kết tủa hydroxide với dung dịch muối của một số kim loại, như $\\mathrm{FeCl_3}$.',
          ],
        },
        {
          type: 'tex',
          tex: '3\\mathrm{CH_3NH_2} + \\mathrm{FeCl_3} + 3\\mathrm{H_2O} \\rightarrow \\mathrm{Fe(OH)_3}\\downarrow + 3\\mathrm{CH_3NH_3Cl}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'So sánh tính base',
          text: 'Gốc alkyl đẩy electron về phía nguyên tử N nên alkylamine có tính base mạnh hơn ammonia. Vòng benzene hút cặp electron của N nên aniline có tính base yếu hơn ammonia rất nhiều: $\\mathrm{C_6H_5NH_2} < \\mathrm{NH_3} < \\mathrm{CH_3NH_2}$.',
        },
      ],
    },
    {
      heading: 'Một số phản ứng khác',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng tạo phức. Dung dịch methylamine (hoặc ethylamine) hoà tan $\\mathrm{Cu(OH)_2}$, tạo phức chất tan màu xanh lam đậm:',
        },
        {
          type: 'tex',
          tex: '4\\mathrm{CH_3NH_2} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{[Cu(CH_3NH_2)_4](OH)_2}',
        },
        {
          type: 'p',
          text: 'Phản ứng với nitrous acid. Alkylamine bậc một tác dụng với nitrous acid ở nhiệt độ thường tạo alcohol và giải phóng khí nitrogen. Aniline tác dụng với nitrous acid (có HCl) ở $0$ đến $5$ °C tạo muối diazonium, dùng để tổng hợp phẩm nhuộm azo.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_5NH_2} + \\mathrm{HONO} \\rightarrow \\mathrm{C_2H_5OH} + \\mathrm{N_2}\\uparrow + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5NH_2} + \\mathrm{HONO} + \\mathrm{HCl} \\xrightarrow{0-5\\,^\\circ\\mathrm{C}} \\mathrm{C_6H_5N_2^+Cl^-} + 2\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Phản ứng thế ở nhân thơm của aniline. Nhóm $\\mathrm{{-}NH_2}$ làm vòng benzene của aniline phản ứng thế dễ hơn benzene nhiều. Aniline làm mất màu nước bromine ngay ở nhiệt độ thường, tạo kết tủa trắng 2,4,6-tribromoaniline; phản ứng dùng để nhận biết aniline.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5NH_2} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3NH_2}\\downarrow + 3\\mathrm{HBr}',
        },
        { type: 'widget', name: 'thuoc-thu' },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'list',
          items: [
            'Aniline là nguyên liệu sản xuất phẩm nhuộm (phẩm azo), dược phẩm (paracetamol, thuốc sulfonamide) và polymer.',
            'Một số diamine như hexamethylenediamine $\\mathrm{H_2N[CH_2]_6NH_2}$ là monomer để sản xuất tơ nylon-6,6.',
            'Điều chế alkylamine bằng cách alkyl hoá ammonia bằng dẫn xuất halogen: $\\mathrm{NH_3 + CH_3I \\rightarrow CH_3NH_2 + HI}$.',
            'Điều chế aniline bằng cách khử nitrobenzene bằng kim loại (Fe hoặc Zn) trong hydrochloric acid: $\\mathrm{C_6H_5NO_2} + 6[\\mathrm{H}] \\xrightarrow{\\mathrm{Fe/HCl},\\ t^\\circ} \\mathrm{C_6H_5NH_2} + 2\\mathrm{H_2O}$.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lắp amine trên nguyên tử nitrogen',
    instruction:
      'Thay các nguyên tử H của ammonia bằng gốc $\\mathrm{CH_3}$, $\\mathrm{C_2H_5}$ hoặc $\\mathrm{C_6H_5}$. Quan sát bậc amine, hai cách gọi tên và vị trí của amine trên thang tính base so với ammonia.',
  },
  examples: [
    {
      problem:
        'Viết các đồng phân amine có công thức phân tử $\\mathrm{C_3H_9N}$, gọi tên thay thế và xác định bậc của mỗi amine.',
      steps: [
        'Amine bậc một (nhóm $\\mathrm{{-}NH_2}$ gắn với gốc $\\mathrm{C_3H_7}$): $\\mathrm{CH_3CH_2CH_2NH_2}$ (propan-1-amine) và $\\mathrm{CH_3CH(NH_2)CH_3}$ (propan-2-amine).',
        'Amine bậc hai (hai gốc có tổng $3$ nguyên tử C gắn với N): $\\mathrm{CH_3{-}NH{-}C_2H_5}$ (N-methylethanamine).',
        'Amine bậc ba (ba gốc methyl): $\\mathrm{(CH_3)_3N}$ (N,N-dimethylmethanamine).',
      ],
      answer: 'Có $4$ đồng phân: hai amine bậc một, một amine bậc hai, một amine bậc ba.',
    },
    {
      problem:
        'Cho $9{,}3$ g aniline tác dụng với lượng dư nước bromine. Tính khối lượng kết tủa thu được.',
      steps: [
        '$n_{\\text{aniline}} = \\dfrac{9{,}3}{93} = 0{,}1$ mol.',
        '$\\mathrm{C_6H_5NH_2} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3NH_2}\\downarrow + 3\\mathrm{HBr}$: $n_{\\text{kết tủa}} = 0{,}1$ mol.',
        '$M_{\\mathrm{C_6H_2Br_3NH_2}} = 6 \\cdot 12 + 4 \\cdot 1 + 3 \\cdot 80 + 14 = 330$ g/mol.',
        '$m = 0{,}1 \\cdot 330 = 33$ g.',
      ],
      answer: 'Thu được $33$ g kết tủa 2,4,6-tribromoaniline.',
    },
    {
      problem:
        'Cho $4{,}5$ g một amine đơn chức, bậc một X tác dụng vừa đủ với dung dịch HCl, thu được $8{,}15$ g muối. Xác định công thức của X.',
      steps: [
        'Bảo toàn khối lượng: $m_{\\mathrm{HCl}} = 8{,}15 - 4{,}5 = 3{,}65$ g, $n_{\\mathrm{HCl}} = 0{,}1$ mol.',
        'Amine đơn chức nên $n_X = n_{\\mathrm{HCl}} = 0{,}1$ mol, $M_X = \\dfrac{4{,}5}{0{,}1} = 45$ g/mol.',
        'Amine bậc một $\\mathrm{RNH_2}$: $M_R = 45 - 16 = 29$, gốc $\\mathrm{C_2H_5}$.',
      ],
      answer: 'X là ethylamine $\\mathrm{C_2H_5NH_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Amine $\\mathrm{CH_3{-}NH{-}C_2H_5}$ có bậc là',
      options: ['bậc hai', 'bậc một', 'bậc ba', 'bậc bốn'],
      answer: 0,
      hints: ['Đếm số gốc hydrocarbon liên kết trực tiếp với nguyên tử N.'],
      solution:
        'Nguyên tử N liên kết với hai gốc hydrocarbon ($\\mathrm{CH_3}$ và $\\mathrm{C_2H_5}$) nên đây là amine bậc hai.',
    },
    {
      type: 'text',
      prompt: 'Viết tên thay thế của amine $\\mathrm{CH_3CH_2CH_2NH_2}$.',
      accept: ['propan-1-amine', 'propan 1 amine'],
      hints: [
        'Mạch chính có $3$ nguyên tử carbon: propane, bỏ "e".',
        'Nhóm amine gắn với carbon số $1$.',
      ],
      solution:
        'Mạch chính propane, nhóm $\\mathrm{{-}NH_2}$ ở C1: propan-1-amine (tên gốc chức: propylamine).',
    },
    {
      type: 'choice',
      prompt: 'Dãy nào sắp xếp các chất theo chiều tính base tăng dần?',
      options: [
        '$\\mathrm{C_6H_5NH_2}$, $\\mathrm{NH_3}$, $\\mathrm{CH_3NH_2}$',
        '$\\mathrm{NH_3}$, $\\mathrm{C_6H_5NH_2}$, $\\mathrm{CH_3NH_2}$',
        '$\\mathrm{CH_3NH_2}$, $\\mathrm{NH_3}$, $\\mathrm{C_6H_5NH_2}$',
        '$\\mathrm{C_6H_5NH_2}$, $\\mathrm{CH_3NH_2}$, $\\mathrm{NH_3}$',
      ],
      answer: 0,
      hints: ['Gốc alkyl đẩy electron về phía N; vòng benzene hút cặp electron của N.'],
      solution:
        'Aniline có tính base yếu hơn ammonia, methylamine mạnh hơn ammonia: $\\mathrm{C_6H_5NH_2} < \\mathrm{NH_3} < \\mathrm{CH_3NH_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Dung dịch methylamine làm quỳ tím hoá xanh.',
        'Dung dịch aniline làm quỳ tím hoá xanh.',
        'Aniline tác dụng với nước bromine tạo kết tủa trắng.',
        'Ethylamine tác dụng với nitrous acid ở nhiệt độ thường giải phóng khí nitrogen.',
        'Trimethylamine là amine bậc một.',
      ],
      answers: [0, 2, 3],
      hints: ['Tính base của aniline rất yếu.', 'Bậc amine là số gốc hydrocarbon gắn với N.'],
      solution:
        'Methylamine làm quỳ hoá xanh; aniline thì không. Aniline tạo kết tủa trắng 2,4,6-tribromoaniline. Ethylamine (bậc một) với nitrous acid tạo ethanol và khí $\\mathrm{N_2}$. Trimethylamine $\\mathrm{(CH_3)_3N}$ là amine bậc ba.',
    },
    {
      type: 'number',
      prompt:
        'Cho $9{,}3$ g aniline tác dụng hết với dung dịch HCl dư. Tính khối lượng muối thu được.',
      answer: 12.95,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{C_6H_5NH_2} + \\mathrm{HCl} \\rightarrow \\mathrm{C_6H_5NH_3Cl}$.',
        '$M_{\\mathrm{C_6H_5NH_3Cl}} = 93 + 36{,}5$.',
      ],
      solution:
        '$n = \\dfrac{9{,}3}{93} = 0{,}1$ mol; $M_{\\text{muối}} = 129{,}5$ g/mol; $m = 0{,}1 \\cdot 129{,}5 = 12{,}95$ g.',
    },
    {
      type: 'number',
      prompt:
        'Tính thể tích dung dịch HCl $1$ M cần dùng để trung hoà vừa đủ $100$ mL dung dịch methylamine $0{,}5$ M.',
      answer: 50,
      unit: 'mL',
      hints: ['Methylamine và HCl phản ứng theo tỉ lệ mol $1 : 1$.'],
      solution:
        '$n_{\\mathrm{CH_3NH_2}} = 0{,}1 \\cdot 0{,}5 = 0{,}05$ mol $= n_{\\mathrm{HCl}}$; $V = \\dfrac{0{,}05}{1} = 0{,}05$ L $= 50$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}65$ g aniline tác dụng với lượng dư nước bromine. Tính khối lượng kết tủa thu được.',
      answer: 16.5,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Mỗi mol aniline tạo $1$ mol 2,4,6-tribromoaniline ($M = 330$).'],
      solution: '$n = \\dfrac{4{,}65}{93} = 0{,}05$ mol; $m = 0{,}05 \\cdot 330 = 16{,}5$ g.',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu amine bậc một có cùng công thức phân tử $\\mathrm{C_4H_{11}N}$?',
      answer: 4,
      hints: [
        'Amine bậc một có dạng $\\mathrm{C_4H_9NH_2}$: đếm số gốc $\\mathrm{C_4H_9}$ khác nhau.',
        'Mạch carbon thẳng hoặc phân nhánh, nhóm $\\mathrm{{-}NH_2}$ ở nhiều vị trí.',
      ],
      solution:
        'Gốc $\\mathrm{C_4H_9}$ có $4$ dạng: butan-1-amine, butan-2-amine, 2-methylpropan-1-amine, 2-methylpropan-2-amine.',
    },
    {
      type: 'choice',
      prompt:
        'Cho ethylamine tác dụng với nitrous acid ở nhiệt độ thường. Sản phẩm hữu cơ thu được là',
      options: ['ethanol', 'muối diazonium', 'ethyl nitrite', 'ethanoic acid'],
      answer: 0,
      hints: ['Alkylamine bậc một với nitrous acid giải phóng khí nitrogen.'],
      solution:
        '$\\mathrm{C_2H_5NH_2 + HONO \\rightarrow C_2H_5OH + N_2 + H_2O}$: sản phẩm hữu cơ là ethanol. Muối diazonium tạo từ aniline ở $0$ đến $5$ °C.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi amine với tên thay thế của nó.',
      left: ['$\\mathrm{CH_3{-}NH{-}CH_3}$', '$\\mathrm{(CH_3)_3N}$', '$\\mathrm{C_2H_5NH_2}$'],
      right: ['N-methylmethanamine', 'N,N-dimethylmethanamine', 'ethanamine', 'N-methylethanamine'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Chọn gốc dài nhất làm mạch chính; các gốc khác gắn với N được ghi kèm chữ N.'],
      solution:
        'Dimethylamine là N-methylmethanamine, trimethylamine là N,N-dimethylmethanamine, ethylamine là ethanamine.',
    },
  ],
  takeaways: [
    'Amine được tạo ra khi thay nguyên tử H trong $\\mathrm{NH_3}$ bằng gốc hydrocarbon; bậc amine là số gốc hydrocarbon gắn với N.',
    'Tên gốc chức: tên gốc + amine; tên thay thế: tên hydrocarbon (bỏ "e") + vị trí + amine, gốc trên N ghi kèm chữ N.',
    'Cặp electron chưa liên kết của N làm amine có tính base: $\\mathrm{C_6H_5NH_2} < \\mathrm{NH_3} < \\mathrm{CH_3NH_2}$; alkylamine làm quỳ hoá xanh, aniline thì không.',
    'Methylamine tạo phức xanh lam đậm với $\\mathrm{Cu(OH)_2}$; alkylamine bậc một với nitrous acid tạo alcohol và $\\mathrm{N_2}$, aniline tạo muối diazonium ở $0$ đến $5$ °C.',
    'Aniline làm mất màu nước bromine, tạo kết tủa trắng 2,4,6-tribromoaniline.',
  ],
};
