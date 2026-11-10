/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dẫn xuất halogen: khái niệm, danh pháp, tính chất vật lí, đặc điểm liên kết C–X, phản ứng thế nguyên tử halogen bằng nhóm OH, phản ứng tách hydrogen halide theo quy tắc Zaitsev và ứng dụng.',
  intro:
    'Ống xịt gây tê lạnh dùng trên sân bóng chứa chloroethane, chất lỏng sôi ở khoảng 12 °C nên bay hơi rất nhanh và làm lạnh vùng da bị chấn thương. Chất làm lạnh trong tủ lạnh đời cũ, nhựa PVC làm ống nước hay lớp chống dính Teflon trên chảo cũng đều là dẫn xuất halogen của hydrocarbon.',
  objectives: [
    'Nêu được khái niệm dẫn xuất halogen và gọi được tên thay thế của một số dẫn xuất halogen đơn giản.',
    'Trình bày được tính chất vật lí và đặc điểm liên kết C–X của dẫn xuất halogen.',
    'Viết được phương trình phản ứng thế nguyên tử halogen bằng nhóm OH và phản ứng tách hydrogen halide.',
    'Vận dụng được quy tắc Zaitsev để xác định sản phẩm chính của phản ứng tách.',
    'Nêu được ứng dụng của dẫn xuất halogen và tác hại của một số chất như CFC.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dẫn xuất halogen',
          text: 'Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng nguyên tử halogen, ta được dẫn xuất halogen của hydrocarbon. Ví dụ: $\\mathrm{CH_3Cl}$, $\\mathrm{CH_2=CHCl}$, $\\mathrm{C_6H_5Br}$. Dẫn xuất monohalogen no, mạch hở có công thức chung $\\mathrm{C_nH_{2n+1}X}$ ($n \\ge 1$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế',
          text: 'Số chỉ vị trí nhóm thế halogen – tên halogen + tên hydrocarbon. Tên halogen khi là nhóm thế: fluoro, chloro, bromo, iodo. Mạch chính là mạch carbon dài nhất, đánh số từ đầu gần nhóm thế hơn; các nhóm thế (halogen, nhánh alkyl) được gọi theo thứ tự chữ cái.',
        },
        {
          type: 'table',
          caption: 'Tên của một số dẫn xuất halogen',
          head: ['Công thức cấu tạo', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{CH_3{-}CH_2Br}$', 'bromoethane', 'ethyl bromide'],
            ['$\\mathrm{CH_3{-}CHCl{-}CH_3}$', '2-chloropropane', 'isopropyl chloride'],
            ['$\\mathrm{CH_2=CHCl}$', 'chloroethene', 'vinyl chloride'],
            ['$\\mathrm{CHCl_3}$', 'trichloromethane', 'chloroform'],
            ['$\\mathrm{CH_3{-}CH(CH_3){-}CH_2Cl}$', '1-chloro-2-methylpropane', '—'],
          ],
        },
        {
          type: 'p',
          text: 'Ở điều kiện thường, các dẫn xuất halogen có phân tử khối nhỏ như $\\mathrm{CH_3Cl}$, $\\mathrm{CH_3Br}$, $\\mathrm{C_2H_5Cl}$ là chất khí; các chất có phân tử khối lớn hơn là chất lỏng hoặc rắn. Dẫn xuất halogen hầu như không tan trong nước, tan tốt trong các dung môi hữu cơ.',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ sôi tăng khi phân tử khối tăng',
          head: [
            'Chất',
            '$\\mathrm{C_2H_5F}$',
            '$\\mathrm{C_2H_5Cl}$',
            '$\\mathrm{C_2H_5Br}$',
            '$\\mathrm{C_2H_5I}$',
          ],
          rows: [['$t_s$ (°C)', '$-37{,}7$', '$12{,}3$', '$38{,}4$', '$72{,}3$']],
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo và tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Halogen có độ âm điện lớn hơn carbon nên liên kết $\\mathrm{C{-}X}$ phân cực về phía nguyên tử halogen: carbon mang một phần điện tích dương, halogen mang một phần điện tích âm. Vì vậy nguyên tử halogen dễ bị thay thế hoặc bị tách ra cùng nguyên tử H ở carbon bên cạnh.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng thế nguyên tử halogen',
          text: 'Khi đun nóng dẫn xuất halogen với dung dịch NaOH loãng, nguyên tử halogen bị thay thế bởi nhóm OH, tạo thành alcohol.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CH_2Br} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_3{-}CH_2OH} + \\mathrm{NaBr}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng tách hydrogen halide',
          text: 'Khi đun nóng dẫn xuất halogen với KOH (hoặc NaOH) trong ethanol, nguyên tử halogen tách ra cùng một nguyên tử H ở carbon bên cạnh, tạo thành liên kết đôi C=C.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CH_2Br} + \\mathrm{KOH} \\xrightarrow{\\mathrm{C_2H_5OH},\\,t^\\circ} \\mathrm{CH_2=CH_2} + \\mathrm{KBr} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Cùng chất, khác dung môi',
          text: 'NaOH trong nước cho phản ứng thế (sản phẩm là alcohol); KOH trong ethanol cho phản ứng tách (sản phẩm là alkene). Cần ghi rõ dung môi và điều kiện khi viết phương trình.',
        },
      ],
    },
    {
      heading: 'Quy tắc Zaitsev',
      blocks: [
        {
          type: 'p',
          text: 'Bậc của một nguyên tử carbon bằng số nguyên tử carbon liên kết trực tiếp với nó. Khi carbon mang halogen có hai carbon bên cạnh khác bậc, phản ứng tách có thể cho hai alkene khác nhau.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc Zaitsev',
          text: 'Trong phản ứng tách hydrogen halide, nguyên tử halogen bị tách ưu tiên cùng với nguyên tử hydrogen ở nguyên tử carbon bên cạnh có bậc cao hơn, tạo thành sản phẩm chính.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CHBr{-}CH_2{-}CH_3} \\xrightarrow{\\mathrm{KOH},\\,\\mathrm{C_2H_5OH},\\,t^\\circ} \\mathrm{CH_3{-}CH=CH{-}CH_3}\\ (\\text{chính}) + \\mathrm{CH_2=CH{-}CH_2{-}CH_3}\\ (\\text{phụ})',
        },
        {
          type: 'p',
          text: 'Trong 2-bromobutane, carbon số 1 là carbon bậc I, carbon số 3 là carbon bậc II. H tách ưu tiên ở carbon số 3 nên sản phẩm chính là but-2-ene.',
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Nguyên liệu tổng hợp polymer: vinyl chloride trùng hợp thành PVC làm ống nước, vỏ dây điện; tetrafluoroethylene $\\mathrm{CF_2=CF_2}$ trùng hợp thành Teflon chống dính.',
            'Dung môi: dichloromethane, chloroform hoà tan tốt nhiều chất hữu cơ.',
            'Chất làm lạnh: các CFC (freon) như $\\mathrm{CF_2Cl_2}$ từng được dùng trong tủ lạnh, điều hoà.',
            'Thuốc gây mê, thuốc gây tê tại chỗ (chloroethane), thuốc bảo vệ thực vật.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tác hại',
          text: 'CFC bay lên tầng bình lưu, giải phóng nguyên tử chlorine phá huỷ tầng ozone; vì vậy CFC đã bị cấm sản xuất theo Nghị định thư Montreal. Nhiều dẫn xuất halogen bền, khó phân huỷ và độc, cần sử dụng hạn chế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thế hay tách?',
    instruction:
      'Chọn một dẫn xuất halogen. Với NaOH trong nước, quan sát nhóm OH thay thế halogen. Chuyển sang KOH trong ethanol rồi bấm vào một carbon bên cạnh carbon mang halogen để tách H ở đó; so sánh bậc của hai carbon bên cạnh để tìm sản phẩm chính theo quy tắc Zaitsev.',
  },
  examples: [
    {
      problem:
        'Gọi tên thay thế của dẫn xuất halogen $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CHCl{-}CH_3}$.',
      steps: [
        'Mạch dài nhất có $5$ nguyên tử carbon: tên hydrocarbon mạch chính là pentane.',
        'Đánh số từ bên phải: Cl ở C2, nhánh methyl ở C4. Đánh từ bên trái: methyl ở C2, Cl ở C4. Hai cách cho cùng bộ số $2$ và $4$, nên chọn cách cho số nhỏ hơn ứng với nhóm thế đứng trước theo chữ cái (chloro): đánh số từ bên phải.',
        'Gọi theo thứ tự chữ cái: chloro trước methyl.',
      ],
      answer: '2-chloro-4-methylpentane.',
    },
    {
      problem:
        'Đun nóng 2-bromobutane với dung dịch KOH trong ethanol. Viết phương trình tạo sản phẩm chính.',
      steps: [
        'Carbon mang Br là C2. Hai carbon bên cạnh là C1 ($\\mathrm{CH_3}$, bậc I) và C3 ($\\mathrm{CH_2}$, bậc II).',
        'Theo quy tắc Zaitsev, Br tách ra cùng H ở C3 (bậc cao hơn), liên kết đôi hình thành giữa C2 và C3.',
        '$\\mathrm{CH_3{-}CHBr{-}CH_2{-}CH_3} + \\mathrm{KOH} \\xrightarrow{\\mathrm{C_2H_5OH},\\,t^\\circ} \\mathrm{CH_3{-}CH=CH{-}CH_3} + \\mathrm{KBr} + \\mathrm{H_2O}$.',
      ],
      answer: 'Sản phẩm chính là but-2-ene; sản phẩm phụ là but-1-ene.',
    },
    {
      problem:
        'Đun nóng $21{,}8$ g bromoethane với dung dịch NaOH dư. Tính khối lượng ethanol thu được, biết phản ứng xảy ra hoàn toàn.',
      steps: [
        '$M_{\\mathrm{C_2H_5Br}} = 2 \\cdot 12 + 5 + 80 = 109$ g/mol, nên $n = \\dfrac{21{,}8}{109} = 0{,}2$ mol.',
        '$\\mathrm{C_2H_5Br} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{C_2H_5OH} + \\mathrm{NaBr}$, nên $n_{\\mathrm{C_2H_5OH}} = 0{,}2$ mol.',
        '$m = 0{,}2 \\cdot 46 = 9{,}2$ g.',
      ],
      answer: 'Thu được $9{,}2$ g ethanol.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tên thay thế của $\\mathrm{CH_3{-}CHCl{-}CH_3}$ là',
      options: ['2-chloropropane', '1-chloropropane', 'propyl chloride', '2-chloropropene'],
      answer: 0,
      hints: ['Mạch chính có $3$ C và không có liên kết đôi; Cl ở carbon nào?'],
      solution:
        'Mạch chính propane, Cl gắn vào carbon số 2 (đánh số từ đầu nào cũng vậy): 2-chloropropane.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH_2{-}CH_2Br}$.',
      accept: ['1-bromopropane', '1 bromopropane', 'bromopropane-1'],
      hints: ['Đánh số mạch chính từ đầu gần nguyên tử Br.'],
      solution: 'Mạch chính propane, Br ở carbon số 1: 1-bromopropane.',
    },
    {
      type: 'choice',
      prompt: 'Dãy nào sắp xếp theo chiều nhiệt độ sôi tăng dần?',
      options: [
        '$\\mathrm{C_2H_5F}$, $\\mathrm{C_2H_5Cl}$, $\\mathrm{C_2H_5Br}$, $\\mathrm{C_2H_5I}$',
        '$\\mathrm{C_2H_5I}$, $\\mathrm{C_2H_5Br}$, $\\mathrm{C_2H_5Cl}$, $\\mathrm{C_2H_5F}$',
        '$\\mathrm{C_2H_5Cl}$, $\\mathrm{C_2H_5F}$, $\\mathrm{C_2H_5Br}$, $\\mathrm{C_2H_5I}$',
        '$\\mathrm{C_2H_5F}$, $\\mathrm{C_2H_5Br}$, $\\mathrm{C_2H_5Cl}$, $\\mathrm{C_2H_5I}$',
      ],
      answer: 0,
      hints: ['Cùng gốc ethyl, chất nào có phân tử khối lớn hơn thì sôi ở nhiệt độ cao hơn.'],
      solution:
        'Phân tử khối tăng từ F đến I nên nhiệt độ sôi tăng: $\\mathrm{C_2H_5F}$ ($-37{,}7$ °C) < $\\mathrm{C_2H_5Cl}$ ($12{,}3$ °C) < $\\mathrm{C_2H_5Br}$ ($38{,}4$ °C) < $\\mathrm{C_2H_5I}$ ($72{,}3$ °C).',
    },
    {
      type: 'choice',
      prompt: 'Đun nóng 1-chloropropane với dung dịch NaOH loãng. Sản phẩm hữu cơ là',
      options: ['propan-1-ol', 'propene', 'propan-2-ol', 'propane'],
      answer: 0,
      hints: ['NaOH trong nước cho phản ứng thế: nhóm OH thay vào vị trí của Cl.'],
      solution:
        '$\\mathrm{CH_3{-}CH_2{-}CH_2Cl} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_3{-}CH_2{-}CH_2OH} + \\mathrm{NaCl}$. Sản phẩm là propan-1-ol; propene chỉ tạo ra khi dùng KOH trong ethanol.',
    },
    {
      type: 'choice',
      prompt:
        'Đun nóng 2-chloro-2-methylbutane $\\mathrm{CH_3{-}CCl(CH_3){-}CH_2{-}CH_3}$ với KOH trong ethanol. Sản phẩm chính là',
      options: [
        '2-methylbut-2-ene',
        '2-methylbut-1-ene',
        '3-methylbut-1-ene',
        '2-methylbutan-2-ol',
      ],
      answer: 0,
      hints: [
        'Các carbon bên cạnh carbon mang Cl là hai nhóm $\\mathrm{CH_3}$ (bậc I) và nhóm $\\mathrm{CH_2}$ (bậc II).',
        'H tách ưu tiên ở carbon có bậc cao hơn.',
      ],
      solution:
        'H tách ở $\\mathrm{CH_2}$ (bậc II), liên kết đôi nằm giữa C2 và C3: $\\mathrm{CH_3{-}C(CH_3)=CH{-}CH_3}$, tên 2-methylbut-2-ene. Tách H ở nhóm $\\mathrm{CH_3}$ chỉ cho sản phẩm phụ 2-methylbut-1-ene.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $10{,}9$ g bromoethane với dung dịch KOH trong ethanol, phản ứng hoàn toàn. Tính thể tích khí ethylene thu được ở đkc ($24{,}79$ L/mol).',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$M_{\\mathrm{C_2H_5Br}} = 109$ g/mol.',
        'Mỗi mol bromoethane tách HBr cho $1$ mol ethylene.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5Br}} = \\dfrac{10{,}9}{109} = 0{,}1$ mol $= n_{\\mathrm{C_2H_4}}$. $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Một dẫn xuất monochloro no, mạch hở $\\mathrm{C_nH_{2n+1}Cl}$ có phân tử khối $78{,}5$. Phân tử có bao nhiêu nguyên tử carbon?',
      answer: 3,
      hints: ['$M = 14n + 1 + 35{,}5$.'],
      solution:
        '$14n + 36{,}5 = 78{,}5$, nên $14n = 42$ và $n = 3$. Công thức $\\mathrm{C_3H_7Cl}$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chất với ứng dụng hoặc tên gọi của nó.',
      left: [
        '$\\mathrm{CH_2=CHCl}$',
        '$\\mathrm{CF_2=CF_2}$',
        '$\\mathrm{CF_2Cl_2}$',
        '$\\mathrm{CHCl_3}$',
      ],
      right: [
        'Monomer tạo PVC',
        'Monomer tạo Teflon',
        'Chất làm lạnh CFC, phá huỷ tầng ozone',
        'Chloroform, dung môi',
        'Thuốc trừ sâu DDT',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Teflon là poly(tetrafluoroethylene); PVC là poly(vinyl chloride).'],
      solution:
        'Vinyl chloride trùng hợp thành PVC; tetrafluoroethylene trùng hợp thành Teflon; $\\mathrm{CF_2Cl_2}$ là một freon (CFC); $\\mathrm{CHCl_3}$ là chloroform. DDT là một dẫn xuất halogen có vòng benzene, không có trong bốn chất trên.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Liên kết C–X phân cực về phía nguyên tử halogen.',
        'Dẫn xuất halogen tan tốt trong nước.',
        'Đun bromoethane với KOH trong ethanol thu được ethylene.',
        'Theo quy tắc Zaitsev, H tách ưu tiên ở carbon bên cạnh có bậc thấp hơn.',
      ],
      answers: [0, 2],
      hints: ['Đọc lại phát biểu quy tắc Zaitsev: bậc cao hay bậc thấp?'],
      solution:
        'Halogen có độ âm điện lớn hơn carbon nên liên kết C–X phân cực về phía X; bromoethane tách HBr cho ethylene. Dẫn xuất halogen hầu như không tan trong nước, và H tách ưu tiên ở carbon có bậc cao hơn.',
    },
  ],
  takeaways: [
    'Dẫn xuất halogen: thay nguyên tử H của hydrocarbon bằng halogen; monohalogen no, mạch hở là $\\mathrm{C_nH_{2n+1}X}$.',
    'Tên thay thế: vị trí – tên halogen (fluoro, chloro, bromo, iodo) + tên hydrocarbon.',
    'Không tan trong nước; nhiệt độ sôi tăng theo phân tử khối: R–F < R–Cl < R–Br < R–I.',
    'NaOH trong nước, đun nóng: thế X bằng OH tạo alcohol. KOH trong ethanol, đun nóng: tách HX tạo alkene.',
    'Quy tắc Zaitsev: X tách ưu tiên cùng H ở carbon bên cạnh có bậc cao hơn.',
  ],
};
