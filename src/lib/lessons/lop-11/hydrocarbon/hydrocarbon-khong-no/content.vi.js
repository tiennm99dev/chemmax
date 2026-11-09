/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Alkene và alkyne: khái niệm, đồng phân, danh pháp, đặc điểm liên kết bội, phản ứng cộng theo quy tắc Markovnikov, phản ứng trùng hợp, phản ứng của alk-1-yne với AgNO3/NH3, phản ứng oxi hoá, điều chế và ứng dụng.',
  intro:
    'Người bán hoa quả thường để chuối xanh cạnh vài quả chín cho chuối mau chín: quả chín toả ra khí ethylene. Còn ngọn lửa xanh chói của đèn xì cắt thép là do acetylene cháy trong oxygen. Ethylene và acetylene là hai hydrocarbon không no đơn giản nhất, có liên kết đôi và liên kết ba khiến chúng hoạt động hơn hẳn alkane.',
  objectives: [
    'Nêu được khái niệm alkene, alkyne, công thức chung và đặc điểm của liên kết đôi, liên kết ba.',
    'Viết được đồng phân cấu tạo, đồng phân hình học và gọi được tên alkene, alkyne đơn giản.',
    'Viết được phương trình phản ứng cộng hydrogen, halogen, hydrogen halide, nước; vận dụng quy tắc Markovnikov.',
    'Viết được phương trình phản ứng trùng hợp, phản ứng của alk-1-yne với dung dịch AgNO₃ trong NH₃ và phản ứng oxi hoá.',
    'Trình bày được cách điều chế và ứng dụng của ethylene, acetylene.',
  ],
  sections: [
    {
      heading: 'Khái niệm, đồng phân và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Alkene và alkyne',
          text: 'Alkene là hydrocarbon mạch hở có một liên kết đôi C=C, công thức chung $\\mathrm{C_nH_{2n}}$ ($n \\ge 2$). Alkyne là hydrocarbon mạch hở có một liên kết ba C≡C, công thức chung $\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế',
          text: 'Số chỉ vị trí nhánh – tên nhánh + tên mạch chính – số chỉ vị trí liên kết bội – ene (hoặc yne). Mạch chính là mạch dài nhất chứa liên kết bội, đánh số từ đầu gần liên kết bội hơn.',
        },
        {
          type: 'table',
          caption: 'Tên của một số alkene và alkyne',
          head: ['Công thức cấu tạo', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{CH_2=CH_2}$', 'ethene', 'ethylene'],
            ['$\\mathrm{CH_2=CH{-}CH_3}$', 'propene', 'propylene'],
            ['$\\mathrm{CH_2=CH{-}CH_2{-}CH_3}$', 'but-1-ene', '—'],
            ['$\\mathrm{CH_3{-}CH=CH{-}CH_3}$', 'but-2-ene', '—'],
            ['$\\mathrm{CH_2=C(CH_3){-}CH_3}$', '2-methylprop-1-ene', 'isobutylene'],
            ['$\\mathrm{CH \\equiv CH}$', 'ethyne', 'acetylene'],
            ['$\\mathrm{CH \\equiv C{-}CH_3}$', 'propyne', 'methylacetylene'],
            ['$\\mathrm{CH \\equiv C{-}CH_2{-}CH_3}$', 'but-1-yne', 'ethylacetylene'],
          ],
        },
        {
          type: 'p',
          text: 'Alkene và alkyne có đồng phân cấu tạo về mạch carbon và về vị trí liên kết bội (từ $\\mathrm{C_4}$). Ngoài ra, nhiều alkene còn có đồng phân hình học.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng phân hình học (cis – trans)',
          text: 'Alkene có đồng phân hình học khi mỗi nguyên tử carbon của liên kết đôi liên kết với hai nguyên tử hoặc nhóm nguyên tử khác nhau. Đồng phân cis có mạch chính nằm cùng một phía của liên kết đôi, đồng phân trans có mạch chính nằm ở hai phía. Ví dụ: cis-but-2-ene và trans-but-2-ene.',
        },
        { type: 'widget', name: 'cis-trans' },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Liên kết đôi C=C', 'Liên kết ba C≡C'],
          rows: [
            ['Thành phần', '$1$ liên kết σ và $1$ liên kết π', '$1$ liên kết σ và $2$ liên kết π'],
            [
              'Hình dạng',
              'Hai carbon và bốn nguyên tử gắn với chúng nằm trên một mặt phẳng, góc liên kết khoảng $120^\\circ$',
              'Hai carbon và hai nguyên tử gắn với chúng nằm trên một đường thẳng, góc $180^\\circ$',
            ],
            ['Ví dụ', 'Ethylene', 'Acetylene'],
          ],
        },
        {
          type: 'p',
          text: 'Liên kết π kém bền hơn liên kết σ nên dễ bị đứt ra trong phản ứng. Vì vậy phản ứng đặc trưng của alkene và alkyne là phản ứng cộng.',
        },
        {
          type: 'p',
          text: 'Ở điều kiện thường, alkene và alkyne từ $\\mathrm{C_2}$ đến $\\mathrm{C_4}$ là chất khí. Chúng không tan trong nước, nhẹ hơn nước, và nhiệt độ sôi tăng theo phân tử khối.',
        },
      ],
    },
    {
      heading: 'Phản ứng cộng',
      blocks: [
        {
          type: 'list',
          items: [
            'Cộng hydrogen (xúc tác Ni, đun nóng): $\\mathrm{CH_2=CH_2} + \\mathrm{H_2} \\xrightarrow{\\mathrm{Ni},\\,t^\\circ} \\mathrm{CH_3{-}CH_3}$. Alkyne cộng $2$ phân tử $\\mathrm{H_2}$ thành alkane; với xúc tác $\\mathrm{Pd/PbCO_3}$ chỉ cộng $1$ phân tử thành alkene: $\\mathrm{CH \\equiv CH} + \\mathrm{H_2} \\xrightarrow{\\mathrm{Pd/PbCO_3},\\,t^\\circ} \\mathrm{CH_2=CH_2}$.',
            'Cộng halogen: alkene, alkyne làm mất màu nước bromine. $\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$; $\\mathrm{CH \\equiv CH} + 2\\mathrm{Br_2} \\rightarrow \\mathrm{Br_2CH{-}CHBr_2}$.',
            'Cộng hydrogen halide: $\\mathrm{CH_2=CH_2} + \\mathrm{HBr} \\rightarrow \\mathrm{CH_3{-}CH_2Br}$.',
            'Cộng nước (hydrate hoá): $\\mathrm{CH_2=CH_2} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\,t^\\circ} \\mathrm{CH_3{-}CH_2OH}$. Acetylene cộng nước tạo acetaldehyde: $\\mathrm{CH \\equiv CH} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{HgSO_4},\\,\\mathrm{H_2SO_4},\\,t^\\circ} \\mathrm{CH_3CHO}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc Markovnikov',
          text: 'Khi cộng một tác nhân không đối xứng (HX, $\\mathrm{H_2O}$) vào liên kết đôi của một alkene không đối xứng, nguyên tử H ưu tiên cộng vào nguyên tử carbon của liên kết đôi có nhiều nguyên tử H hơn, còn X (hoặc nhóm OH) cộng vào nguyên tử carbon có ít H hơn.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2=CH{-}CH_3} + \\mathrm{HBr} \\rightarrow \\mathrm{CH_3{-}CHBr{-}CH_3}\\ (\\text{chính}) + \\mathrm{CH_3{-}CH_2{-}CH_2Br}\\ (\\text{phụ})',
        },
      ],
    },
    {
      heading: 'Phản ứng trùng hợp, phản ứng với AgNO₃/NH₃ và phản ứng oxi hoá',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng trùng hợp',
          text: 'Phản ứng trùng hợp là quá trình cộng hợp liên tiếp nhiều phân tử nhỏ giống nhau hoặc tương tự nhau (monomer) tạo thành phân tử rất lớn (polymer).',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2=CH_2} \\xrightarrow{t^\\circ,\\,p,\\,\\mathrm{xt}} (\\mathrm{-CH_2{-}CH_2{-}})_n \\quad (\\text{polyethylene, PE})',
        },
        {
          type: 'p',
          text: 'Tương tự, propylene trùng hợp thành polypropylene (PP). PE và PP là hai loại chất dẻo dùng nhiều nhất, làm túi, màng bọc, chai lọ.',
        },
        {
          type: 'p',
          text: 'Alk-1-yne (có liên kết ba ở đầu mạch, nguyên tử H gắn trực tiếp vào carbon mang liên kết ba) phản ứng với dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$, tạo kết tủa màu vàng nhạt. Phản ứng này dùng để nhận biết alk-1-yne:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH \\equiv CH} + 2\\mathrm{AgNO_3} + 2\\mathrm{NH_3} \\rightarrow \\mathrm{AgC \\equiv CAg} \\downarrow + 2\\mathrm{NH_4NO_3}',
        },
        {
          type: 'p',
          text: 'Alkene và alkyne làm mất màu tím của dung dịch $\\mathrm{KMnO_4}$, đồng thời tạo kết tủa nâu đen $\\mathrm{MnO_2}$:',
        },
        {
          type: 'tex',
          tex: '3\\mathrm{CH_2=CH_2} + 2\\mathrm{KMnO_4} + 4\\mathrm{H_2O} \\rightarrow 3\\mathrm{HOCH_2{-}CH_2OH} + 2\\mathrm{MnO_2} \\downarrow + 2\\mathrm{KOH}',
        },
        {
          type: 'p',
          text: 'Khi cháy, alkene cho $n_{\\mathrm{CO_2}} = n_{\\mathrm{H_2O}}$, còn alkyne cho $n_{\\mathrm{CO_2}} > n_{\\mathrm{H_2O}}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_nH_{2n}} + \\dfrac{3n}{2}\\mathrm{O_2} \\xrightarrow{t^\\circ} n\\mathrm{CO_2} + n\\mathrm{H_2O}',
        },
      ],
    },
    {
      heading: 'Điều chế và ứng dụng',
      blocks: [
        {
          type: 'table',
          head: ['Nội dung', 'Ethylene', 'Acetylene'],
          rows: [
            [
              'Trong phòng thí nghiệm',
              '$\\mathrm{C_2H_5OH} \\xrightarrow{\\mathrm{H_2SO_4},\\,170^\\circ\\mathrm{C}} \\mathrm{CH_2=CH_2} + \\mathrm{H_2O}$ (sulfuric acid đặc)',
              '$\\mathrm{CaC_2} + 2\\mathrm{H_2O} \\rightarrow \\mathrm{Ca(OH)_2} + \\mathrm{C_2H_2}$',
            ],
            [
              'Trong công nghiệp',
              'Cracking các phân đoạn dầu mỏ',
              '$2\\mathrm{CH_4} \\xrightarrow{1\\,500^\\circ\\mathrm{C}} \\mathrm{CH \\equiv CH} + 3\\mathrm{H_2}$ (làm lạnh nhanh)',
            ],
            [
              'Ứng dụng',
              'Sản xuất PE, ethanol, ethylene glycol; kích thích quả mau chín',
              'Nhiên liệu cho đèn xì oxygen – acetylene để hàn, cắt kim loại; nguyên liệu tổng hợp hữu cơ',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Cộng HX vào alkene',
    instruction:
      'Chọn một alkene và một tác nhân. Bấm vào một carbon của liên kết đôi để gắn H vào đó, quan sát sản phẩm tạo thành và cho biết đó là sản phẩm chính hay sản phẩm phụ. So sánh số H trên hai carbon của liên kết đôi để rút ra quy tắc Markovnikov.',
  },
  examples: [
    {
      problem: 'Gọi tên thay thế của alkene $\\mathrm{CH_3{-}CH(CH_3){-}CH=CH_2}$.',
      steps: [
        'Mạch dài nhất chứa liên kết đôi có $4$ C: tên mạch chính là but...ene.',
        'Đánh số từ đầu gần liên kết đôi hơn (bên phải): liên kết đôi bắt đầu ở C1, nhánh methyl ở C3.',
        'Ghép: vị trí nhánh – tên nhánh + tên mạch chính – vị trí liên kết đôi – ene.',
      ],
      answer: '3-methylbut-1-ene.',
    },
    {
      problem: 'Viết sản phẩm chính khi cho but-1-ene tác dụng với HBr.',
      steps: [
        'Trong $\\mathrm{CH_2=CH{-}CH_2{-}CH_3}$, carbon số 1 có $2$ H, carbon số 2 có $1$ H.',
        'Theo quy tắc Markovnikov, H cộng vào carbon số 1, Br cộng vào carbon số 2.',
        '$\\mathrm{CH_2=CH{-}CH_2{-}CH_3} + \\mathrm{HBr} \\rightarrow \\mathrm{CH_3{-}CHBr{-}CH_2{-}CH_3}$.',
      ],
      answer: 'Sản phẩm chính là 2-bromobutane; sản phẩm phụ là 1-bromobutane.',
    },
    {
      problem:
        'Dẫn $2{,}479$ L khí ethylene (đkc) vào nước bromine dư. Tính khối lượng bromine đã phản ứng.',
      steps: [
        '$n_{\\mathrm{C_2H_4}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol.',
        '$\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$, nên $n_{\\mathrm{Br_2}} = 0{,}1$ mol.',
        '$m_{\\mathrm{Br_2}} = 0{,}1 \\cdot 160 = 16$ g.',
      ],
      answer: 'Có $16$ g bromine đã phản ứng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của dãy đồng đẳng alkyne là',
      options: [
        '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
        '$\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$)',
      ],
      answer: 0,
      hints: ['Acetylene là $\\mathrm{C_2H_2}$. Thử với $n = 2$.'],
      solution:
        'Liên kết ba làm phân tử ít hơn alkane $4$ nguyên tử H: $\\mathrm{C_nH_{2n+2-4}} = \\mathrm{C_nH_{2n-2}}$, với $\\mathrm{C_2H_2}$ là chất đầu dãy.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của alkene $\\mathrm{CH_3{-}CH=CH{-}CH_2{-}CH_3}$.',
      accept: ['pent-2-ene', 'pent 2 ene', '2-pentene'],
      hints: [
        'Mạch chính có $5$ C. Đánh số từ đầu gần liên kết đôi hơn.',
        'Liên kết đôi bắt đầu ở carbon số mấy?',
      ],
      solution:
        'Đánh số từ trái, liên kết đôi nằm giữa C2 và C3 (từ phải sẽ là C3, lớn hơn). Tên: pent-2-ene.',
    },
    {
      type: 'choice',
      prompt: 'Cho propene tác dụng với HCl. Sản phẩm chính là',
      options: ['2-chloropropane', '1-chloropropane', '1,2-dichloropropane', '3-chloropropene'],
      answer: 0,
      hints: ['Nguyên tử H cộng vào carbon của liên kết đôi có nhiều H hơn.'],
      solution:
        'Trong $\\mathrm{CH_2=CH{-}CH_3}$, H cộng vào $\\mathrm{CH_2}$, Cl cộng vào CH ở giữa: $\\mathrm{CH_3{-}CHCl{-}CH_3}$, tên 2-chloropropane.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào sau đây có đồng phân hình học?',
      options: ['But-2-ene', 'Propene', 'But-1-ene', '2-methylprop-1-ene'],
      answer: 0,
      hints: ['Mỗi carbon của liên kết đôi phải mang hai nhóm khác nhau.'],
      solution:
        'Trong $\\mathrm{CH_3{-}CH=CH{-}CH_3}$, mỗi carbon của liên kết đôi mang H và $\\mathrm{CH_3}$. Propene, but-1-ene có carbon $\\mathrm{=CH_2}$ mang hai H giống nhau; 2-methylprop-1-ene có cả carbon mang hai $\\mathrm{CH_3}$.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử nào phân biệt được hai khí ethylene và acetylene?',
      options: [
        'Dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$',
        'Nước bromine',
        'Dung dịch $\\mathrm{KMnO_4}$',
        'Nước vôi trong',
      ],
      answer: 0,
      hints: [
        'Cả hai khí đều có phản ứng cộng và phản ứng oxi hoá; tìm phản ứng chỉ alk-1-yne có.',
      ],
      solution:
        'Acetylene tạo kết tủa vàng nhạt $\\mathrm{AgC \\equiv CAg}$ với $\\mathrm{AgNO_3/NH_3}$, ethylene thì không. Nước bromine và $\\mathrm{KMnO_4}$ đều bị cả hai khí làm mất màu.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn $0{,}05$ mol acetylene vào nước bromine dư. Tính khối lượng bromine tối đa đã phản ứng.',
      answer: 16,
      unit: 'g',
      hints: ['Liên kết ba cộng được tối đa $2$ phân tử $\\mathrm{Br_2}$.'],
      solution:
        '$\\mathrm{CH \\equiv CH} + 2\\mathrm{Br_2} \\rightarrow \\mathrm{Br_2CH{-}CHBr_2}$. $n_{\\mathrm{Br_2}} = 2 \\cdot 0{,}05 = 0{,}1$ mol, $m = 0{,}1 \\cdot 160 = 16$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $0{,}1$ mol một alkene X, thu được $0{,}3$ mol $\\mathrm{CO_2}$. Phân tử X có bao nhiêu nguyên tử carbon?',
      answer: 3,
      hints: ['Mỗi nguyên tử C trong X tạo ra một phân tử $\\mathrm{CO_2}$.'],
      solution:
        'Số C $= \\dfrac{n_{\\mathrm{CO_2}}}{n_{\\mathrm{X}}} = \\dfrac{0{,}3}{0{,}1} = 3$. X là $\\mathrm{C_3H_6}$ (propene).',
    },
    {
      type: 'number',
      prompt:
        'Cho $6{,}4$ g calcium carbide $\\mathrm{CaC_2}$ tác dụng hết với nước. Tính thể tích khí acetylene thu được ở đkc ($24{,}79$ L/mol).',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$M_{\\mathrm{CaC_2}} = 40 + 2 \\cdot 12 = 64$ g/mol.',
        '$1$ mol $\\mathrm{CaC_2}$ cho $1$ mol $\\mathrm{C_2H_2}$.',
      ],
      solution:
        '$n_{\\mathrm{CaC_2}} = \\dfrac{6{,}4}{64} = 0{,}1$ mol $= n_{\\mathrm{C_2H_2}}$. $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phản ứng với sản phẩm hữu cơ của nó.',
      left: [
        'Ethylene + nước (xúc tác acid, đun nóng)',
        'Acetylene + nước (xúc tác $\\mathrm{HgSO_4}$, $\\mathrm{H_2SO_4}$)',
        'Trùng hợp ethylene',
        'Acetylene + $\\mathrm{H_2}$ (xúc tác $\\mathrm{Pd/PbCO_3}$)',
      ],
      right: ['Ethanol', 'Acetaldehyde', 'Polyethylene', 'Ethylene', 'Ethane'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Xúc tác $\\mathrm{Pd/PbCO_3}$ chỉ cho alkyne cộng một phân tử $\\mathrm{H_2}$.'],
      solution:
        'Ethylene cộng nước thành ethanol; acetylene cộng nước thành acetaldehyde $\\mathrm{CH_3CHO}$; trùng hợp ethylene được PE; acetylene cộng một $\\mathrm{H_2}$ (xúc tác $\\mathrm{Pd/PbCO_3}$) thành ethylene. Ethane chỉ tạo thành khi dùng xúc tác Ni.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Liên kết đôi C=C gồm một liên kết σ và một liên kết π.',
        'Alkene làm mất màu dung dịch $\\mathrm{KMnO_4}$ và tạo kết tủa nâu đen.',
        'Mọi alkyne đều tạo kết tủa với dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$.',
        'Đốt cháy alkene thu được số mol $\\mathrm{CO_2}$ bằng số mol $\\mathrm{H_2O}$.',
      ],
      answers: [0, 1, 3],
      hints: [
        'Phản ứng với $\\mathrm{AgNO_3/NH_3}$ cần nguyên tử H gắn vào carbon mang liên kết ba.',
      ],
      solution:
        'Chỉ alk-1-yne (liên kết ba ở đầu mạch) mới tạo kết tủa; but-2-yne $\\mathrm{CH_3{-}C \\equiv C{-}CH_3}$ thì không. Ba phát biểu còn lại đúng.',
    },
  ],
  takeaways: [
    'Alkene $\\mathrm{C_nH_{2n}}$ có một liên kết đôi (1σ, 1π); alkyne $\\mathrm{C_nH_{2n-2}}$ có một liên kết ba (1σ, 2π).',
    'Tên thay thế: vị trí nhánh – tên nhánh + mạch chính – vị trí liên kết bội – ene/yne; đánh số từ đầu gần liên kết bội.',
    'Alkene có đồng phân hình học khi mỗi carbon của liên kết đôi mang hai nhóm khác nhau.',
    'Phản ứng đặc trưng là phản ứng cộng; HX và $\\mathrm{H_2O}$ cộng vào alkene không đối xứng theo quy tắc Markovnikov: H vào carbon nhiều H hơn.',
    'Alkene, alkyne làm mất màu nước bromine và dung dịch $\\mathrm{KMnO_4}$; alk-1-yne tạo kết tủa vàng nhạt với $\\mathrm{AgNO_3/NH_3}$; alkene trùng hợp thành polymer.',
  ],
};
