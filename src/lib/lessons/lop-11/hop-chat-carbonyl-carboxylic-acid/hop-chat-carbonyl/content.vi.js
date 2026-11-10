/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hợp chất carbonyl: khái niệm aldehyde và ketone, danh pháp, đặc điểm nhóm C=O, tính chất vật lí, phản ứng khử, phản ứng oxi hoá aldehyde (nước bromine, thuốc thử Tollens, Cu(OH)2/NaOH), cộng HCN, phản ứng tạo iodoform; ứng dụng và điều chế.',
  intro:
    'Dung dịch formalin dùng ngâm mẫu vật chứa formaldehyde, nước rửa sơn móng tay có thành phần chính là acetone, còn mùi thơm của quế đến từ cinnamaldehyde. Các chất này đều có nhóm carbonyl $>\\mathrm{C{=}O}$. Làm thế nào để phân biệt aldehyde với ketone chỉ bằng vài ống nghiệm?',
  objectives: [
    'Nêu được khái niệm hợp chất carbonyl, phân biệt aldehyde và ketone; gọi được tên thay thế và tên thông thường của một số hợp chất carbonyl đơn giản.',
    'Mô tả được đặc điểm liên kết của nhóm carbonyl và giải thích được nhiệt độ sôi, tính tan của hợp chất carbonyl.',
    'Viết được phương trình phản ứng khử aldehyde, ketone bằng $\\mathrm{NaBH_4}$; phản ứng oxi hoá aldehyde bằng nước bromine, thuốc thử Tollens, $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm; phản ứng cộng HCN.',
    'Nhận biết được aldehyde bằng thuốc thử Tollens, $\\mathrm{Cu(OH)_2}$/NaOH và hợp chất có nhóm $\\mathrm{CH_3CO{-}}$ bằng phản ứng tạo iodoform.',
    'Trình bày được ứng dụng và phương pháp điều chế một số hợp chất carbonyl.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hợp chất carbonyl',
          text: "Hợp chất carbonyl là hợp chất hữu cơ trong phân tử có nhóm chức carbonyl $>\\mathrm{C{=}O}$. Aldehyde có nhóm $\\mathrm{{-}CHO}$ liên kết với nguyên tử carbon hoặc hydrogen ($\\mathrm{R{-}CHO}$). Ketone có nhóm $>\\mathrm{C{=}O}$ liên kết với hai gốc hydrocarbon ($\\mathrm{R{-}CO{-}R'}$).",
        },
        {
          type: 'p',
          text: 'Aldehyde no, đơn chức, mạch hở và ketone no, đơn chức, mạch hở có cùng công thức chung $\\mathrm{C_nH_{2n}O}$ (aldehyde: $n \\ge 1$; ketone: $n \\ge 3$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế',
          text: 'Aldehyde: tên hydrocarbon mạch chính (bỏ chữ e ở cuối) + al. Mạch chính là mạch carbon dài nhất chứa nhóm CHO, đánh số từ carbon của nhóm CHO. Ketone: tên hydrocarbon mạch chính (bỏ chữ e) – số chỉ vị trí nhóm C=O – one; đánh số từ đầu gần nhóm C=O hơn.',
        },
        {
          type: 'table',
          caption: 'Tên của một số hợp chất carbonyl',
          head: ['Công thức', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{HCHO}$', 'methanal', 'formaldehyde'],
            ['$\\mathrm{CH_3CHO}$', 'ethanal', 'acetaldehyde'],
            ['$\\mathrm{CH_3{-}CH_2{-}CHO}$', 'propanal', 'propionaldehyde'],
            ['$\\mathrm{CH_3{-}CH(CH_3){-}CHO}$', '2-methylpropanal', 'isobutyraldehyde'],
            ['$\\mathrm{CH_3{-}CO{-}CH_3}$', 'propanone', 'acetone'],
            ['$\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3}$', 'butanone', 'ethyl methyl ketone'],
          ],
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Liên kết đôi $\\mathrm{C{=}O}$ gồm một liên kết $\\sigma$ và một liên kết $\\pi$. Oxygen có độ âm điện lớn hơn carbon nên liên kết bị phân cực về phía oxygen: nguyên tử C mang một phần điện tích dương, nguyên tử O mang một phần điện tích âm. Vì vậy các tác nhân mang điện tích âm (như ion $\\mathrm{H^-}$ của $\\mathrm{NaBH_4}$, ion $\\mathrm{CN^-}$) tấn công vào nguyên tử carbon.',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ sôi của ba chất có phân tử khối gần nhau',
          head: ['Chất', '$M$', 'Nhiệt độ sôi'],
          rows: [
            ['butane $\\mathrm{CH_3CH_2CH_2CH_3}$', '$58$', '$-0{,}5$ °C'],
            ['propanal $\\mathrm{CH_3CH_2CHO}$', '$58$', '$49$ °C'],
            ['propan-1-ol $\\mathrm{CH_3CH_2CH_2OH}$', '$60$', '$97{,}1$ °C'],
          ],
        },
        {
          type: 'list',
          items: [
            'Hợp chất carbonyl có nhiệt độ sôi cao hơn hydrocarbon có phân tử khối tương đương, do nhóm C=O làm phân tử phân cực.',
            'Hợp chất carbonyl có nhiệt độ sôi thấp hơn alcohol có phân tử khối tương đương, vì giữa các phân tử carbonyl không có liên kết hydrogen.',
            'Các chất đầu dãy tan tốt trong nước nhờ tạo liên kết hydrogen với nước; acetone tan vô hạn trong nước. Khi mạch carbon dài ra, độ tan giảm.',
            'Ở điều kiện thường, formaldehyde là chất khí; acetaldehyde sôi ở khoảng $21$ °C; acetone là chất lỏng dễ bay hơi, dùng làm dung môi.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng khử',
          text: 'Với chất khử $\\mathrm{NaBH_4}$ (hoặc $\\mathrm{LiAlH_4}$), aldehyde bị khử thành alcohol bậc I, ketone bị khử thành alcohol bậc II. Kí hiệu $[\\mathrm{H}]$ chỉ hydrogen do chất khử cung cấp.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3CHO} + 2[\\mathrm{H}] \\xrightarrow{\\mathrm{NaBH_4}} \\mathrm{CH_3{-}CH_2OH}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CO{-}CH_3} + 2[\\mathrm{H}] \\xrightarrow{\\mathrm{NaBH_4}} \\mathrm{CH_3{-}CH(OH){-}CH_3}',
        },
        {
          type: 'p',
          text: 'Phản ứng oxi hoá aldehyde. Nhóm CHO dễ bị oxi hoá thành nhóm COOH (hoặc muối của nó); ketone khó bị oxi hoá nên không có các phản ứng dưới đây.',
        },
        {
          type: 'list',
          items: [
            'Với nước bromine (aldehyde làm mất màu nước bromine): $\\mathrm{CH_3CHO} + \\mathrm{Br_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_3COOH} + 2\\mathrm{HBr}$.',
            'Với thuốc thử Tollens $[\\mathrm{Ag(NH_3)_2}]\\mathrm{OH}$, đun nóng: bạc sinh ra bám vào thành ống nghiệm tạo lớp bạc sáng (phản ứng tráng bạc). $\\mathrm{CH_3CHO} + 2[\\mathrm{Ag(NH_3)_2}]\\mathrm{OH} \\xrightarrow{t^\\circ} \\mathrm{CH_3COONH_4} + 2\\mathrm{Ag} + 3\\mathrm{NH_3} + \\mathrm{H_2O}$.',
            'Với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm, đun nóng: tạo kết tủa $\\mathrm{Cu_2O}$ màu đỏ gạch. $\\mathrm{CH_3CHO} + 2\\mathrm{Cu(OH)_2} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_3COONa} + \\mathrm{Cu_2O} + 3\\mathrm{H_2O}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Formaldehyde cho 4 nguyên tử bạc',
          text: 'Phân tử HCHO coi như có hai nhóm CHO, bị oxi hoá đến cùng: $\\mathrm{HCHO} + 4[\\mathrm{Ag(NH_3)_2}]\\mathrm{OH} \\xrightarrow{t^\\circ} \\mathrm{(NH_4)_2CO_3} + 4\\mathrm{Ag} + 6\\mathrm{NH_3} + 2\\mathrm{H_2O}$. Với aldehyde đơn chức khác, $1$ mol cho $2$ mol Ag.',
        },
        {
          type: 'p',
          text: 'Phản ứng cộng hydrogen cyanide (HCN) vào nhóm C=O tạo cyanohydrin: $\\mathrm{CH_3{-}CHO} + \\mathrm{HCN} \\rightarrow \\mathrm{CH_3{-}CH(OH){-}CN}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng tạo iodoform',
          text: 'Hợp chất carbonyl có nhóm methyl gắn với nhóm carbonyl ($\\mathrm{CH_3CO{-}}$), như acetaldehyde, acetone, butanone, tác dụng với iodine trong môi trường kiềm tạo kết tủa màu vàng iodoform $\\mathrm{CHI_3}$. Phản ứng này dùng để nhận biết nhóm $\\mathrm{CH_3CO{-}}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CO{-}CH_3} + 3\\mathrm{I_2} + 4\\mathrm{NaOH} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{CHI_3}\\downarrow + 3\\mathrm{NaI} + 3\\mathrm{H_2O}',
        },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'list',
          items: [
            'Formaldehyde dùng sản xuất nhựa phenol formaldehyde, nhựa urea formaldehyde; dung dịch $37$–$40\\%$ formaldehyde trong nước (formalin) dùng ngâm mẫu vật, tẩy uế.',
            'Acetaldehyde dùng sản xuất acetic acid và nhiều hoá chất khác.',
            'Acetone là dung môi hoà tan nhiều chất (sơn, nhựa, nước rửa sơn móng tay), nguyên liệu tổng hợp hữu cơ.',
          ],
        },
        {
          type: 'list',
          items: [
            'Oxi hoá alcohol bậc I tạo aldehyde, alcohol bậc II tạo ketone (bằng CuO, đun nóng).',
            'Formaldehyde trong công nghiệp: oxi hoá methanol, $2\\mathrm{CH_3OH} + \\mathrm{O_2} \\xrightarrow{\\mathrm{xt},\\,t^\\circ} 2\\mathrm{HCHO} + 2\\mathrm{H_2O}$.',
            'Acetaldehyde: oxi hoá ethylene, $2\\mathrm{CH_2{=}CH_2} + \\mathrm{O_2} \\xrightarrow{\\mathrm{PdCl_2},\\,\\mathrm{CuCl_2},\\,t^\\circ} 2\\mathrm{CH_3CHO}$.',
            'Acetone: sản phẩm của quá trình oxi hoá cumene, cùng với phenol.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Ống nghiệm phân biệt aldehyde và ketone',
    instruction:
      'Bốn mẫu A, B, C, D là acetaldehyde, propanal, acetone và pentan-3-one. Chọn mẫu và thuốc thử, bấm "Làm thí nghiệm" và ghi lại hiện tượng. Khi đủ dữ kiện, chọn tên chất cho từng mẫu rồi bấm "Kiểm tra". Thử dùng ít thí nghiệm nhất.',
  },
  examples: [
    {
      problem:
        'Viết công thức cấu tạo và gọi tên thay thế các hợp chất carbonyl có công thức phân tử $\\mathrm{C_4H_8O}$.',
      steps: [
        'Aldehyde có nhóm CHO ở đầu mạch. Mạch thẳng: $\\mathrm{CH_3{-}CH_2{-}CH_2{-}CHO}$, butanal. Mạch nhánh: $\\mathrm{CH_3{-}CH(CH_3){-}CHO}$, 2-methylpropanal.',
        'Ketone cần nhóm C=O ở giữa mạch: chỉ có $\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3}$, butanone (vị trí C=O chỉ có thể là C2 nên không cần ghi số).',
      ],
      answer: 'Có $3$ đồng phân: butanal, 2-methylpropanal và butanone.',
    },
    {
      problem:
        'Cho $3$ g formaldehyde tác dụng với lượng dư thuốc thử Tollens, đun nóng. Tính khối lượng bạc thu được.',
      steps: [
        '$n_{\\mathrm{HCHO}} = \\dfrac{3}{30} = 0{,}1$ mol.',
        'Formaldehyde cho $4$ Ag: $n_{\\mathrm{Ag}} = 4 \\cdot 0{,}1 = 0{,}4$ mol.',
        '$m_{\\mathrm{Ag}} = 0{,}4 \\cdot 108 = 43{,}2$ g.',
      ],
      answer: 'Thu được $43{,}2$ g bạc.',
    },
    {
      problem:
        'Trình bày cách phân biệt ba chất lỏng đựng trong ba lọ mất nhãn: acetaldehyde, propanal và acetone.',
      steps: [
        'Cho từng mẫu tác dụng với thuốc thử Tollens, đun nhẹ: acetone không có hiện tượng, hai mẫu còn lại tạo lớp bạc sáng.',
        'Cho hai mẫu tạo bạc tác dụng với $\\mathrm{I_2}$ trong NaOH: mẫu tạo kết tủa vàng là acetaldehyde (có nhóm $\\mathrm{CH_3CO{-}}$), mẫu không có hiện tượng là propanal.',
      ],
      answer:
        'Dùng thuốc thử Tollens nhận ra acetone, rồi $\\mathrm{I_2/NaOH}$ nhận ra acetaldehyde.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là ketone?',
      options: [
        '$\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3}$',
        '$\\mathrm{CH_3{-}CH_2{-}CHO}$',
        '$\\mathrm{HCHO}$',
        '$\\mathrm{CH_3{-}CH_2{-}OH}$',
      ],
      answer: 0,
      hints: ['Ketone có nhóm C=O liên kết với hai gốc hydrocarbon.'],
      solution:
        'Trong $\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3}$ (butanone), nhóm C=O nằm giữa hai gốc $\\mathrm{CH_3}$ và $\\mathrm{C_2H_5}$. Propanal và HCHO là aldehyde, còn ethanol là alcohol.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH_2{-}CH_2{-}CHO}$.',
      accept: ['butanal'],
      hints: ['Mạch chính có $4$ C, kể cả carbon của nhóm CHO.'],
      solution: 'Mạch chính butane, bỏ chữ e và thêm "al": butanal.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CHO}$.',
      accept: ['3-methylbutanal', '3 methylbutanal', '3-methyl butanal'],
      hints: [
        'Đánh số từ carbon của nhóm CHO là C1.',
        'Nhánh methyl nằm ở carbon số mấy của mạch $4$ C?',
      ],
      solution:
        'Mạch chính $4$ C (butanal), đánh số từ CHO: $\\mathrm{C1}$ là CHO, nhánh $\\mathrm{CH_3}$ ở C3. Tên: 3-methylbutanal.',
    },
    {
      type: 'choice',
      prompt: 'Khử butanone bằng $\\mathrm{NaBH_4}$ thu được',
      options: ['butan-2-ol', 'butan-1-ol', 'butanal', 'butanoic acid'],
      answer: 0,
      hints: ['Ketone bị khử thành alcohol bậc mấy?'],
      solution:
        '$\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3} + 2[\\mathrm{H}] \\rightarrow \\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$: butan-2-ol, alcohol bậc II.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử nào phân biệt được propanal và acetone?',
      options: ['Thuốc thử Tollens', 'Dung dịch NaOH', 'Quỳ tím', 'Nước'],
      answer: 0,
      hints: ['Tìm phản ứng chỉ aldehyde có.'],
      solution:
        'Propanal là aldehyde, tạo lớp bạc sáng với thuốc thử Tollens; acetone là ketone, không phản ứng. NaOH, quỳ tím và nước không cho hiện tượng khác nhau.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào tạo kết tủa vàng khi tác dụng với $\\mathrm{I_2}$ trong dung dịch NaOH?',
      options: ['Acetone', 'Propanal', 'Pentan-3-one', 'Formaldehyde'],
      answer: 0,
      hints: ['Phản ứng iodoform cần nhóm $\\mathrm{CH_3CO{-}}$.'],
      solution:
        'Acetone $\\mathrm{CH_3{-}CO{-}CH_3}$ có nhóm $\\mathrm{CH_3CO{-}}$ nên tạo iodoform $\\mathrm{CHI_3}$ vàng. Propanal và pentan-3-one có nhóm carbonyl gắn với $\\mathrm{C_2H_5}$; formaldehyde không có nhóm methyl.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}4$ g acetaldehyde tác dụng với lượng dư thuốc thử Tollens, đun nóng. Tính khối lượng bạc thu được.',
      answer: 21.6,
      tolerance: 0.05,
      unit: 'g',
      hints: [
        '$M_{\\mathrm{CH_3CHO}} = 44$ g/mol.',
        'Aldehyde đơn chức (trừ HCHO): $1$ mol cho $2$ mol Ag.',
      ],
      solution:
        '$n_{\\mathrm{CH_3CHO}} = 0{,}1$ mol, $n_{\\mathrm{Ag}} = 0{,}2$ mol, $m = 0{,}2 \\cdot 108 = 21{,}6$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $2{,}9$ g propanal với $\\mathrm{Cu(OH)_2}$ dư trong môi trường NaOH. Tính khối lượng kết tủa đỏ gạch thu được.',
      answer: 7.2,
      tolerance: 0.05,
      unit: 'g',
      hints: [
        'Kết tủa đỏ gạch là $\\mathrm{Cu_2O}$ ($M = 144$).',
        '$1$ mol aldehyde cho $1$ mol $\\mathrm{Cu_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5CHO}} = \\dfrac{2{,}9}{58} = 0{,}05$ mol, $n_{\\mathrm{Cu_2O}} = 0{,}05$ mol, $m = 0{,}05 \\cdot 144 = 7{,}2$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo nhiệt độ sôi tăng dần.',
      items: ['butane', 'propanal', 'propan-1-ol'],
      answer: [0, 1, 2],
      hints: ['So sánh: phân tử không phân cực, phân tử phân cực, phân tử có liên kết hydrogen.'],
      solution:
        'Butane ($-0{,}5$ °C) không phân cực; propanal ($49$ °C) phân cực nhưng không có liên kết hydrogen giữa các phân tử; propan-1-ol ($97{,}1$ °C) có liên kết hydrogen.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Liên kết C=O phân cực về phía nguyên tử oxygen.',
        'Acetaldehyde vừa tham gia phản ứng tráng bạc vừa tạo iodoform.',
        'Ketone làm mất màu nước bromine.',
        'Khử aldehyde bằng $\\mathrm{NaBH_4}$ thu được alcohol bậc I.',
      ],
      answers: [0, 1, 3],
      hints: ['Ketone khó bị oxi hoá.'],
      solution:
        'Ketone không bị nước bromine oxi hoá nên không làm mất màu. Acetaldehyde có nhóm CHO (tráng bạc) và nhóm $\\mathrm{CH_3CO{-}}$ (iodoform). Hai phát biểu còn lại đúng.',
    },
  ],
  takeaways: [
    "Aldehyde $\\mathrm{R{-}CHO}$, ketone $\\mathrm{R{-}CO{-}R'}$; loại no, đơn chức, mạch hở đều có công thức $\\mathrm{C_nH_{2n}O}$.",
    'Tên thay thế: aldehyde là tên mạch chính bỏ e + al; ketone là tên mạch chính bỏ e – vị trí C=O – one.',
    'Nhiệt độ sôi: hydrocarbon < carbonyl < alcohol có phân tử khối tương đương.',
    '$\\mathrm{NaBH_4}$ khử aldehyde thành alcohol bậc I, ketone thành alcohol bậc II.',
    'Chỉ aldehyde bị oxi hoá bởi nước bromine, thuốc thử Tollens (tráng bạc) và $\\mathrm{Cu(OH)_2}$/NaOH (kết tủa đỏ gạch $\\mathrm{Cu_2O}$).',
    'Nhóm $\\mathrm{CH_3CO{-}}$ cho kết tủa vàng iodoform $\\mathrm{CHI_3}$ với $\\mathrm{I_2}$/NaOH.',
  ],
};
