/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 4: so sánh cấu tạo và tính chất của alkane, alkene, alkyne, arene; nhận biết các hydrocarbon bằng thuốc thử; sơ đồ chuyển hoá và bài tập tính toán.',
  intro:
    'Bốn loại hydrocarbon của chương khác nhau ở loại liên kết trong phân tử: chỉ có liên kết đơn, có liên kết đôi, có liên kết ba hay có vòng benzene. Biết loại liên kết là đoán được phản ứng đặc trưng, thuốc thử nhận biết và cách chuyển chất này thành chất kia.',
  objectives: [
    'Hệ thống hoá được công thức chung, đặc điểm cấu tạo và phản ứng đặc trưng của alkane, alkene, alkyne, arene.',
    'Chọn được thuốc thử và trình tự để nhận biết các hydrocarbon.',
    'Viết được phương trình theo sơ đồ chuyển hoá giữa các hydrocarbon và giải được bài tập tính theo phương trình.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh các loại hydrocarbon',
          head: ['Đặc điểm', 'Alkane', 'Alkene', 'Alkyne', 'Arene (dãy benzene)'],
          rows: [
            [
              'Công thức chung',
              '$\\mathrm{C_nH_{2n+2}}$, $n \\ge 1$',
              '$\\mathrm{C_nH_{2n}}$, $n \\ge 2$',
              '$\\mathrm{C_nH_{2n-2}}$, $n \\ge 2$',
              '$\\mathrm{C_nH_{2n-6}}$, $n \\ge 6$',
            ],
            [
              'Đặc điểm liên kết',
              'Chỉ có liên kết σ',
              'Một liên kết đôi C=C (1σ, 1π)',
              'Một liên kết ba C≡C (1σ, 2π)',
              'Vòng benzene với hệ π liên hợp',
            ],
            [
              'Phản ứng đặc trưng',
              'Thế halogen (chiếu sáng), cracking, reforming',
              'Cộng ($\\mathrm{H_2}$, $\\mathrm{Br_2}$, HX, $\\mathrm{H_2O}$), trùng hợp',
              'Cộng; alk-1-yne thế H bằng Ag',
              'Thế trên vòng (dễ), cộng (khó)',
            ],
            [
              'Với dung dịch $\\mathrm{KMnO_4}$',
              'Không phản ứng',
              'Mất màu',
              'Mất màu',
              'Benzene không; toluene mất màu khi đun nóng',
            ],
            [
              'Khi cháy',
              '$n_{\\mathrm{H_2O}} > n_{\\mathrm{CO_2}}$',
              '$n_{\\mathrm{H_2O}} = n_{\\mathrm{CO_2}}$',
              '$n_{\\mathrm{H_2O}} < n_{\\mathrm{CO_2}}$',
              '$n_{\\mathrm{H_2O}} < n_{\\mathrm{CO_2}}$, nhiều khói đen',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Quy tắc cần nhớ',
          text: 'Thế halogen vào alkane: ưu tiên H của carbon bậc cao hơn. Cộng HX, $\\mathrm{H_2O}$ vào alkene không đối xứng: H ưu tiên vào carbon nhiều H hơn (Markovnikov). Thế vào vòng của toluene: ưu tiên vị trí ortho và para.',
        },
      ],
    },
    {
      heading: 'Nhận biết hydrocarbon',
      blocks: [
        {
          type: 'table',
          caption: 'Thuốc thử và hiện tượng',
          head: ['Thuốc thử', 'Chất phản ứng', 'Hiện tượng'],
          rows: [
            ['Nước bromine', 'Alkene, alkyne', 'Mất màu nước bromine'],
            [
              'Dung dịch $\\mathrm{KMnO_4}$',
              'Alkene, alkyne; toluene (khi đun nóng)',
              'Mất màu tím, có kết tủa nâu đen $\\mathrm{MnO_2}$',
            ],
            [
              'Dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$',
              'Alk-1-yne (acetylene, propyne, ...)',
              'Kết tủa màu vàng nhạt',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Khi nhận biết nhiều chất, dùng thuốc thử riêng nhất trước: $\\mathrm{AgNO_3/NH_3}$ tách alk-1-yne ra khỏi alkene, rồi mới dùng nước bromine. Alkane và benzene không phản ứng với cả ba thuốc thử ở điều kiện thường.',
        },
      ],
    },
    {
      heading: 'Sơ đồ chuyển hoá',
      blocks: [
        {
          type: 'tex',
          tex: '\\mathrm{CH_4} \\xrightarrow{(1)} \\mathrm{C_2H_2} \\xrightarrow{(2)} \\mathrm{C_2H_4} \\xrightarrow{(3)} \\mathrm{C_2H_5OH}',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '$2\\mathrm{CH_4} \\xrightarrow{1\\,500^\\circ\\mathrm{C}} \\mathrm{C_2H_2} + 3\\mathrm{H_2}$ (làm lạnh nhanh).',
            '$\\mathrm{C_2H_2} + \\mathrm{H_2} \\xrightarrow{\\mathrm{Pd/PbCO_3},\\,t^\\circ} \\mathrm{C_2H_4}$.',
            '$\\mathrm{C_2H_4} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\,t^\\circ} \\mathrm{C_2H_5OH}$.',
          ],
        },
        {
          type: 'p',
          text: 'Ngoài ra: ethylene trùng hợp thành PE; benzene nitro hoá thành nitrobenzene, cộng hydrogen thành cyclohexane; hexane reforming thành benzene; butane cracking thành methane và propene.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bàn thí nghiệm nhận biết hydrocarbon',
    instruction:
      'Năm mẫu X1 đến X5 là methane, ethylene, acetylene, benzene và toluene. Cho từng mẫu tác dụng với các thuốc thử, quan sát ống nghiệm và ghi vào bảng. Dựa vào hiện tượng và trạng thái của mẫu, chọn tên chất cho mỗi mẫu rồi bấm Kiểm tra. Hãy thử dùng ít thí nghiệm nhất.',
  },
  examples: [
    {
      problem:
        'Bằng phương pháp hoá học, nhận biết ba khí riêng biệt: methane, ethylene, acetylene.',
      steps: [
        'Dẫn từng khí vào dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$: khí tạo kết tủa vàng nhạt là acetylene. $\\mathrm{CH \\equiv CH} + 2\\mathrm{AgNO_3} + 2\\mathrm{NH_3} \\rightarrow \\mathrm{AgC \\equiv CAg} \\downarrow + 2\\mathrm{NH_4NO_3}$.',
        'Dẫn hai khí còn lại vào nước bromine: khí làm mất màu là ethylene. $\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$.',
        'Khí không có hiện tượng gì là methane.',
      ],
      answer: 'Dùng lần lượt dung dịch $\\mathrm{AgNO_3/NH_3}$ rồi nước bromine.',
    },
    {
      problem:
        'Dẫn $4{,}958$ L (đkc) hỗn hợp methane và ethylene qua nước bromine dư, thấy khối lượng bình tăng $2{,}8$ g. Tính phần trăm thể tích mỗi khí.',
      steps: [
        'Methane không phản ứng; khối lượng bình tăng chính là khối lượng ethylene bị giữ lại.',
        '$n_{\\mathrm{C_2H_4}} = \\dfrac{2{,}8}{28} = 0{,}1$ mol; $n_{\\text{hh}} = \\dfrac{4{,}958}{24{,}79} = 0{,}2$ mol.',
        '$\\%V_{\\mathrm{C_2H_4}} = \\dfrac{0{,}1}{0{,}2} \\cdot 100\\% = 50\\%$, nên $\\%V_{\\mathrm{CH_4}} = 50\\%$.',
      ],
      answer: 'Mỗi khí chiếm $50\\%$ thể tích.',
    },
    {
      problem:
        'Đốt cháy hoàn toàn $0{,}1$ mol hydrocarbon mạch hở X, thu được $0{,}4$ mol $\\mathrm{CO_2}$ và $0{,}3$ mol $\\mathrm{H_2O}$. Tìm công thức phân tử của X và cho biết X thuộc loại nào.',
      steps: [
        'Số C $= \\dfrac{0{,}4}{0{,}1} = 4$; số H $= \\dfrac{2 \\cdot 0{,}3}{0{,}1} = 6$. X là $\\mathrm{C_4H_6}$.',
        '$\\mathrm{C_4H_6}$ có dạng $\\mathrm{C_nH_{2n-2}}$, và $n_{\\mathrm{CO_2}} > n_{\\mathrm{H_2O}}$.',
      ],
      answer: 'X là $\\mathrm{C_4H_6}$, có thể là một alkyne (ví dụ but-1-yne).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây làm mất màu nước bromine?',
      options: ['Ethylene', 'Methane', 'Benzene', 'Propane'],
      answer: 0,
      hints: ['Chất cần có liên kết π dễ đứt để cộng $\\mathrm{Br_2}$.'],
      solution:
        'Ethylene có liên kết đôi C=C nên cộng bromine: $\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$. Alkane và benzene không làm mất màu nước bromine.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào tạo kết tủa với dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$?',
      options: [
        'Acetylene $\\mathrm{CH \\equiv CH}$',
        'Propyne $\\mathrm{CH \\equiv C{-}CH_3}$',
        'But-2-yne $\\mathrm{CH_3{-}C \\equiv C{-}CH_3}$',
        'Ethylene $\\mathrm{CH_2=CH_2}$',
      ],
      answers: [0, 1],
      hints: ['Cần nguyên tử H gắn trực tiếp vào carbon mang liên kết ba.'],
      solution:
        'Acetylene và propyne là alk-1-yne nên tạo kết tủa. But-2-yne có liên kết ba giữa mạch, không có H ở carbon mang liên kết ba; ethylene không có liên kết ba.',
    },
    {
      type: 'choice',
      prompt:
        'Hydrocarbon nào tham gia phản ứng thế với bromine khi có xúc tác $\\mathrm{FeBr_3}$ nhưng không làm mất màu nước bromine?',
      options: ['Benzene', 'Ethylene', 'Acetylene', 'Propene'],
      answer: 0,
      hints: ['Chất có vòng bền, dễ thế, khó cộng.'],
      solution:
        'Benzene có hệ π liên hợp bền, không cộng bromine ở điều kiện thường nhưng thế được H trên vòng khi có $\\mathrm{FeBr_3}$, tạo bromobenzene.',
    },
    {
      type: 'text',
      prompt: 'Cho propene tác dụng với HBr. Gọi tên sản phẩm chính.',
      accept: ['2-bromopropane', '2 bromopropane'],
      hints: ['Quy tắc Markovnikov: H vào carbon có nhiều H hơn.'],
      solution:
        'H cộng vào $\\mathrm{CH_2}$ đầu mạch, Br cộng vào carbon giữa: $\\mathrm{CH_3{-}CHBr{-}CH_3}$, tên 2-bromopropane.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo sơ đồ điều chế polyethylene từ calcium carbide.',
      items: ['$\\mathrm{C_2H_4}$', '$\\mathrm{CaC_2}$', 'Polyethylene', '$\\mathrm{C_2H_2}$'],
      answer: [1, 3, 0, 2],
      hints: ['Calcium carbide tác dụng với nước cho khí gì?'],
      solution:
        '$\\mathrm{CaC_2} \\xrightarrow{\\mathrm{H_2O}} \\mathrm{C_2H_2} \\xrightarrow{\\mathrm{H_2},\\,\\mathrm{Pd/PbCO_3}} \\mathrm{C_2H_4} \\xrightarrow{\\text{trùng hợp}}$ polyethylene.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chuyển hoá với tác nhân và điều kiện phù hợp.',
      left: [
        '$\\mathrm{C_2H_2} \\rightarrow \\mathrm{C_2H_4}$',
        '$\\mathrm{C_2H_4} \\rightarrow \\mathrm{C_2H_5OH}$',
        '$\\mathrm{C_6H_6} \\rightarrow \\mathrm{C_6H_5NO_2}$',
        '$\\mathrm{CH_4} \\rightarrow \\mathrm{C_2H_2}$',
      ],
      right: [
        '$\\mathrm{H_2}$, xúc tác $\\mathrm{Pd/PbCO_3}$',
        '$\\mathrm{H_2O}$, xúc tác acid',
        '$\\mathrm{HNO_3}$ đặc, $\\mathrm{H_2SO_4}$ đặc',
        '$1\\,500^\\circ\\mathrm{C}$, làm lạnh nhanh',
        '$\\mathrm{Cl_2}$, chiếu sáng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Xác định loại phản ứng: cộng, thế hay nhiệt phân.'],
      solution:
        'Acetylene cộng một $\\mathrm{H_2}$ (Pd/PbCO₃) thành ethylene; ethylene cộng nước (xúc tác acid) thành ethanol; benzene nitro hoá thành nitrobenzene; methane nhiệt phân ở $1\\,500^\\circ\\mathrm{C}$ thành acetylene.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn $0{,}2$ mol hỗn hợp ethane và ethylene qua nước bromine dư, khối lượng bình tăng $2{,}8$ g. Tính phần trăm thể tích của ethylene trong hỗn hợp.',
      answer: 50,
      tolerance: 0.1,
      unit: '%',
      hints: ['Khối lượng bình tăng bằng khối lượng ethylene bị hấp thụ ($M = 28$).'],
      solution:
        '$n_{\\mathrm{C_2H_4}} = \\dfrac{2{,}8}{28} = 0{,}1$ mol, $\\%V = \\dfrac{0{,}1}{0{,}2} \\cdot 100\\% = 50\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Đốt cháy hoàn toàn một hydrocarbon mạch hở X, thu được số mol $\\mathrm{CO_2}$ bằng số mol $\\mathrm{H_2O}$. X thuộc dãy đồng đẳng nào?',
      options: ['Alkene', 'Alkane', 'Alkyne', 'Benzene'],
      answer: 0,
      hints: ['Số mol $\\mathrm{H_2O}$ bằng số mol $\\mathrm{CO_2}$ khi số H gấp đôi số C.'],
      solution:
        'Số H gấp đôi số C ứng với $\\mathrm{C_nH_{2n}}$; X mạch hở nên là alkene. Alkane cho $n_{\\mathrm{H_2O}} > n_{\\mathrm{CO_2}}$, alkyne và benzene cho $n_{\\mathrm{H_2O}} < n_{\\mathrm{CO_2}}$.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $0{,}1$ mol hydrocarbon X, thu được $0{,}4$ mol $\\mathrm{CO_2}$ và $0{,}5$ mol $\\mathrm{H_2O}$. Phân tử X có bao nhiêu nguyên tử hydrogen?',
      answer: 10,
      hints: ['Mỗi phân tử $\\mathrm{H_2O}$ chứa $2$ nguyên tử H.'],
      solution:
        'Số H $= \\dfrac{2 \\cdot 0{,}5}{0{,}1} = 10$; số C $= \\dfrac{0{,}4}{0{,}1} = 4$. X là $\\mathrm{C_4H_{10}}$ (butane).',
    },
    {
      type: 'number',
      prompt:
        'Trùng hợp $1$ tấn ethylene với hiệu suất $90\\%$. Tính khối lượng polyethylene thu được.',
      answer: 0.9,
      tolerance: 0.001,
      unit: 'tấn',
      hints: ['Phản ứng trùng hợp không sinh ra chất nào khác, khối lượng được bảo toàn.'],
      solution:
        'Theo lí thuyết $1$ tấn ethylene cho $1$ tấn PE. Với hiệu suất $90\\%$: $m = 1 \\cdot 0{,}9 = 0{,}9$ tấn.',
    },
    {
      type: 'choice',
      prompt:
        'Để phân biệt ba chất lỏng benzene, toluene và styrene $\\mathrm{C_6H_5CH=CH_2}$, chỉ cần dùng thuốc thử nào?',
      options: [
        'Dung dịch $\\mathrm{KMnO_4}$',
        'Nước bromine',
        'Dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$',
        'Nước',
      ],
      answer: 0,
      hints: [
        'So sánh phản ứng của ba chất với $\\mathrm{KMnO_4}$ ở nhiệt độ thường và khi đun nóng.',
      ],
      solution:
        'Styrene có liên kết đôi ở nhánh nên làm mất màu $\\mathrm{KMnO_4}$ ngay ở nhiệt độ thường; toluene chỉ làm mất màu khi đun nóng; benzene không làm mất màu. Nước bromine chỉ tách được styrene.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Alkane tham gia phản ứng thế halogen khi chiếu sáng.',
        'Alkene và alkyne đều làm mất màu dung dịch $\\mathrm{KMnO_4}$.',
        'Benzene làm mất màu dung dịch $\\mathrm{KMnO_4}$ ở nhiệt độ thường.',
        'Cracking butane có thể tạo ra methane và propene.',
      ],
      answers: [0, 1, 3],
      hints: ['Vòng benzene bền với chất oxi hoá.'],
      solution:
        'Benzene không làm mất màu $\\mathrm{KMnO_4}$, kể cả khi đun nóng. Ba phát biểu còn lại đúng: $\\mathrm{C_4H_{10}} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{CH_4} + \\mathrm{C_3H_6}$.',
    },
  ],
  takeaways: [
    'Loại liên kết quyết định phản ứng đặc trưng: alkane thế, alkene và alkyne cộng, arene dễ thế khó cộng.',
    'Nhận biết: $\\mathrm{AgNO_3/NH_3}$ cho alk-1-yne; nước bromine cho alkene, alkyne; $\\mathrm{KMnO_4}$ đun nóng cho toluene.',
    'Khi đốt: alkane $n_{\\mathrm{H_2O}} > n_{\\mathrm{CO_2}}$, alkene bằng nhau, alkyne và arene $n_{\\mathrm{H_2O}} < n_{\\mathrm{CO_2}}$.',
    'Các hydrocarbon chuyển hoá được cho nhau: methane thành acetylene, acetylene thành ethylene, ethylene thành ethanol và PE.',
  ],
};
