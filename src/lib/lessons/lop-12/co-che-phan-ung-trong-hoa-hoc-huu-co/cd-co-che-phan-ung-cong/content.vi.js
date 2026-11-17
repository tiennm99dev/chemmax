/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ chế cộng electrophile vào alkene qua carbocation, giải thích quy tắc Markovnikov bằng độ bền carbocation, và cơ chế cộng nucleophile vào nhóm carbonyl.',
  intro:
    'Propene cộng HBr có thể cho hai sản phẩm, 1-bromopropane và 2-bromopropane, nhưng thực tế 2-bromopropane chiếm phần lớn. Quy tắc Markovnikov đã nêu điều đó từ năm 1870; cơ chế phản ứng cho biết vì sao.',
  objectives: [
    'Trình bày được cơ chế cộng electrophile ($A_E$) của HX, $\\mathrm{H_2O}$ và $\\mathrm{Br_2}$ vào alkene.',
    'Giải thích được quy tắc Markovnikov dựa vào độ bền của carbocation trung gian.',
    'Trình bày được cơ chế cộng nucleophile ($A_N$) vào nhóm carbonyl của aldehyde và ketone.',
  ],
  sections: [
    {
      heading: 'Cộng electrophile vào alkene ($A_E$)',
      blocks: [
        {
          type: 'p',
          text: 'Liên kết $\\pi$ của $\\mathrm{C{=}C}$ là vùng giàu electron, nên alkene bị tác nhân electrophile tấn công. Với HBr, phản ứng gồm hai giai đoạn:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Giai đoạn 1 (chậm): cặp electron $\\pi$ tấn công $\\mathrm{H^+}$ (phần mang điện dương của HBr), tạo carbocation và $\\mathrm{Br^-}$.',
            'Giai đoạn 2 (nhanh): anion $\\mathrm{Br^-}$ (nucleophile) kết hợp với carbocation tạo sản phẩm.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2{=}CH_2} \\xrightarrow{+\\,\\mathrm{H^+}} \\mathrm{CH_3{-}\\overset{+}{C}H_2} \\xrightarrow{+\\,\\mathrm{Br^-}} \\mathrm{CH_3{-}CH_2Br}',
        },
        {
          type: 'p',
          text: 'Cộng nước (xúc tác acid) đi theo cùng con đường: $\\mathrm{H^+}$ cộng trước tạo carbocation, phân tử $\\mathrm{H_2O}$ kết hợp với carbocation rồi tách $\\mathrm{H^+}$ (xúc tác được tái tạo) để tạo alcohol.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cộng bromine',
          text: 'Khi $\\mathrm{Br_2}$ đến gần liên kết $\\pi$, nó bị phân cực thành $\\mathrm{Br^{\\delta+}{-}Br^{\\delta-}}$. Đầu $\\mathrm{Br^{\\delta+}}$ cộng vào trước tạo cation trung gian (dạng vòng bromonium), sau đó $\\mathrm{Br^-}$ tấn công từ phía đối diện. Đây là phản ứng làm mất màu nước bromine dùng để nhận biết alkene.',
        },
      ],
    },
    {
      heading: 'Quy tắc Markovnikov',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc Markovnikov',
          text: 'Khi cộng tác nhân không đối xứng HX vào alkene không đối xứng, nguyên tử H ưu tiên cộng vào nguyên tử carbon mang nhiều H hơn (bậc thấp hơn), còn X cộng vào nguyên tử carbon mang ít H hơn (bậc cao hơn).',
        },
        {
          type: 'p',
          text: 'Giải thích: giai đoạn chậm là giai đoạn tạo carbocation. $\\mathrm{H^+}$ cộng vào $\\mathrm{CH_2}$ của propene tạo carbocation bậc II $\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3}$; cộng vào CH tạo carbocation bậc I $\\mathrm{\\overset{+}{C}H_2{-}CH_2{-}CH_3}$. Carbocation bậc II bền hơn (hai nhóm alkyl đẩy electron) nên hình thành dễ hơn, với năng lượng hoạt hoá thấp hơn. Vì vậy 2-bromopropane là sản phẩm chính.',
        },
        {
          type: 'table',
          head: ['Alkene', 'Carbocation bền hơn', 'Sản phẩm chính với HBr'],
          rows: [
            ['Propene', '$\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3}$ (bậc II)', '2-bromopropane'],
            [
              'But-1-ene',
              '$\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_2{-}CH_3}$ (bậc II)',
              '2-bromobutane',
            ],
            ['2-methylpropene', '$\\mathrm{(CH_3)_3C^+}$ (bậc III)', '2-bromo-2-methylpropane'],
          ],
        },
      ],
    },
    {
      heading: 'Cộng nucleophile vào nhóm carbonyl ($A_N$)',
      blocks: [
        {
          type: 'p',
          text: 'Trong nhóm $\\mathrm{C{=}O}$, oxygen có độ âm điện lớn hơn nên liên kết phân cực: $\\mathrm{C^{\\delta+}{=}O^{\\delta-}}$. Khác với alkene, tác nhân tấn công trước là nucleophile, vào nguyên tử C.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Giai đoạn 1 (chậm): $\\mathrm{Nu^-}$ (ví dụ $\\mathrm{CN^-}$) tấn công C, cặp electron $\\pi$ chuyển về O, tạo anion trung gian (O mang điện âm).',
            'Giai đoạn 2 (nhanh): anion trung gian nhận $\\mathrm{H^+}$ tạo sản phẩm có nhóm OH.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3CHO} + \\mathrm{HCN} \\rightarrow \\mathrm{CH_3CH(OH)CN}',
        },
        { type: 'widget', name: 'cong-carbonyl' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Aldehyde hay ketone?',
          text: 'Aldehyde thường phản ứng cộng nucleophile dễ hơn ketone: ketone có hai nhóm alkyl đẩy electron làm giảm điện tích dương ở C, đồng thời cồng kềnh hơn, cản trở tác nhân tiến đến C. Phản ứng khử bằng $\\mathrm{NaBH_4}$ cũng là cộng nucleophile, với tác nhân là ion hydride $\\mathrm{H^-}$.',
        },
      ],
    },
    {
      heading: 'Dự án: Bản đồ cơ chế phản ứng hữu cơ',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tổng kết cả chuyên đề bằng một "bản đồ" cho biết mỗi loại phản ứng đã học ở lớp 11 và 12 đi theo cơ chế nào.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Liệt kê các phản ứng: halogen hoá alkane, cộng HBr, $\\mathrm{H_2O}$, $\\mathrm{Br_2}$ vào alkene, thuỷ phân dẫn xuất halogen, bromine hoá và nitro hoá benzene, cộng HCN vào aldehyde, khử aldehyde bằng $\\mathrm{NaBH_4}$.',
            'Với mỗi phản ứng, ghi tác nhân tấn công (gốc tự do, nucleophile hay electrophile), tiểu phân trung gian và tên cơ chế ($S_R$, $S_N1$, $S_N2$, $S_E$, $A_E$, $A_N$).',
            'Vẽ sơ đồ tư duy hoặc poster, mỗi nhánh một cơ chế, kèm một ví dụ có mũi tên cong.',
            'Thêm một phản ứng ngoài sách theo quy tắc Markovnikov (ví dụ cộng HCl vào 2-methylbut-2-ene) và dự đoán sản phẩm chính.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: sơ đồ hoàn chỉnh, một trang giải thích cách nhận ra cơ chế từ tác nhân và chất nền, và lời giải phản ứng tự chọn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cộng HBr qua carbocation bền hơn',
    instruction:
      'Chọn alkene và tác nhân, rồi chọn nguyên tử carbon nhận $\\mathrm{H^+}$. Quan sát carbocation tạo thành, so sánh đỉnh năng lượng của hai hướng trên giản đồ và xem sản phẩm là chính hay phụ. Thử cả hai carbon để thấy vì sao quy tắc Markovnikov đúng.',
  },
  examples: [
    {
      problem: 'Viết cơ chế phản ứng của propene với HBr và xác định sản phẩm chính.',
      steps: [
        'Giai đoạn 1 (chậm): $\\mathrm{H^+}$ cộng vào $\\mathrm{CH_2}$ (carbon mang nhiều H hơn): $\\mathrm{CH_2{=}CH{-}CH_3} + \\mathrm{H^+} \\rightarrow \\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3}$ (carbocation bậc II, bền hơn bậc I).',
        'Giai đoạn 2 (nhanh): $\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3} + \\mathrm{Br^-} \\rightarrow \\mathrm{CH_3{-}CHBr{-}CH_3}$.',
      ],
      answer:
        'Sản phẩm chính là 2-bromopropane $\\mathrm{CH_3CHBrCH_3}$; sản phẩm phụ là 1-bromopropane.',
    },
    {
      problem:
        'Dự đoán sản phẩm chính khi hydrate hoá 2-methylpropene (xúc tác $\\mathrm{H_2SO_4}$ loãng).',
      steps: [
        '$\\mathrm{H^+}$ cộng vào $\\mathrm{CH_2}$, tạo carbocation bậc III $\\mathrm{(CH_3)_3C^+}$ (cộng vào carbon còn lại chỉ cho carbocation bậc I).',
        '$\\mathrm{H_2O}$ kết hợp với carbocation: $\\mathrm{(CH_3)_3C^+} + \\mathrm{H_2O} \\rightarrow \\mathrm{(CH_3)_3C{-}OH_2^+}$.',
        'Tách $\\mathrm{H^+}$: $\\mathrm{(CH_3)_3C{-}OH_2^+} \\rightarrow \\mathrm{(CH_3)_3COH} + \\mathrm{H^+}$.',
      ],
      answer: 'Sản phẩm chính là 2-methylpropan-2-ol $\\mathrm{(CH_3)_3COH}$.',
    },
    {
      problem: 'Viết cơ chế phản ứng cộng HCN vào acetone $\\mathrm{CH_3COCH_3}$.',
      steps: [
        '$\\mathrm{C{=}O}$ phân cực, C mang $\\delta+$. $\\mathrm{CN^-}$ tấn công C (chậm): $\\mathrm{(CH_3)_2C{=}O} + \\mathrm{CN^-} \\rightarrow \\mathrm{(CH_3)_2C(CN){-}O^-}$.',
        'Anion trung gian nhận $\\mathrm{H^+}$ từ HCN (nhanh): $\\mathrm{(CH_3)_2C(CN){-}O^-} + \\mathrm{HCN} \\rightarrow \\mathrm{(CH_3)_2C(OH)CN} + \\mathrm{CN^-}$.',
      ],
      answer: 'Sản phẩm $\\mathrm{(CH_3)_2C(OH)CN}$, theo cơ chế cộng nucleophile.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Sản phẩm chính của phản ứng but-1-ene với HCl là',
      options: ['2-chlorobutane', '1-chlorobutane', '2-chlorobut-1-ene', '1,2-dichlorobutane'],
      answer: 0,
      hints: ['H cộng vào carbon mang nhiều H hơn của liên kết đôi.'],
      solution:
        '$\\mathrm{H^+}$ cộng vào $\\mathrm{CH_2}$ tạo carbocation bậc II $\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_2{-}CH_3}$; $\\mathrm{Cl^-}$ kết hợp cho $\\mathrm{CH_3CHClCH_2CH_3}$ (2-chlorobutane).',
    },
    {
      type: 'choice',
      prompt: 'Trong phản ứng cộng HBr vào alkene, giai đoạn quyết định tốc độ là',
      options: [
        'giai đoạn $\\mathrm{H^+}$ cộng vào liên kết đôi tạo carbocation.',
        'giai đoạn $\\mathrm{Br^-}$ kết hợp với carbocation.',
        'giai đoạn HBr phân cắt đồng li.',
        'giai đoạn tách $\\mathrm{H^+}$ khỏi sản phẩm.',
      ],
      answer: 0,
      hints: ['Giai đoạn nào tạo ra tiểu phân kém bền?'],
      solution:
        'Giai đoạn tạo carbocation phá vỡ liên kết $\\pi$ và tạo tiểu phân kém bền nên chậm, quyết định tốc độ; $\\mathrm{Br^-}$ kết hợp với carbocation rất nhanh.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các carbocation sau theo độ bền tăng dần.',
      items: [
        '$\\mathrm{(CH_3)_3C^+}$',
        '$\\mathrm{CH_3CH_2^+}$',
        '$\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3}$',
        '$\\mathrm{CH_3^+}$',
      ],
      answer: [3, 1, 2, 0],
      hints: ['Đếm số nhóm alkyl gắn với carbon mang điện dương.'],
      solution:
        '$\\mathrm{CH_3^+}$ (không có nhóm alkyl) $<$ $\\mathrm{CH_3CH_2^+}$ (bậc I) $<$ $\\mathrm{CH_3\\overset{+}{C}HCH_3}$ (bậc II) $<$ $\\mathrm{(CH_3)_3C^+}$ (bậc III).',
    },
    {
      type: 'text',
      prompt: 'Gọi tên sản phẩm chính khi cộng nước vào propene (xúc tác acid).',
      accept: ['propan-2-ol', 'propan 2 ol', '2-propanol', 'isopropyl alcohol'],
      hints: ['Viết carbocation bền hơn tạo thành, rồi gắn nhóm OH vào carbon mang điện dương.'],
      solution:
        '$\\mathrm{H^+}$ cộng vào $\\mathrm{CH_2}$ tạo $\\mathrm{CH_3{-}\\overset{+}{C}H{-}CH_3}$; $\\mathrm{H_2O}$ kết hợp rồi tách $\\mathrm{H^+}$ cho $\\mathrm{CH_3CH(OH)CH_3}$, propan-2-ol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về phản ứng cộng HCN vào aldehyde?',
      options: [
        'Tác nhân tấn công đầu tiên là $\\mathrm{CN^-}$, một tác nhân nucleophile.',
        '$\\mathrm{CN^-}$ tấn công vào nguyên tử C của nhóm carbonyl.',
        'Anion trung gian có điện tích âm trên nguyên tử O.',
        '$\\mathrm{H^+}$ tấn công trước tiên vào nguyên tử C.',
        'Phản ứng thuộc loại cộng electrophile.',
      ],
      answers: [0, 1, 2],
      hints: ['C trong $\\mathrm{C{=}O}$ mang $\\delta+$; tác nhân nào thích trung tâm dương?'],
      solution:
        '$\\mathrm{CN^-}$ (nucleophile) tấn công C mang $\\delta+$, cặp electron $\\pi$ về O tạo anion $\\mathrm{O^-}$, rồi anion nhận $\\mathrm{H^+}$. Đây là cộng nucleophile $A_N$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phản ứng với cơ chế của nó.',
      left: ['Propene + HBr', 'Ethanal + HCN', 'Ethene + nước bromine'],
      right: [
        'Cộng electrophile, qua carbocation',
        'Cộng nucleophile vào nhóm carbonyl',
        'Cộng electrophile, qua ion bromonium vòng',
        'Thế gốc tự do',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Xem tác nhân tấn công trước: $\\mathrm{H^+}$, $\\mathrm{CN^-}$ hay $\\mathrm{Br^{\\delta+}}$.',
      ],
      solution:
        'Propene + HBr: $\\mathrm{H^+}$ cộng trước, qua carbocation. Ethanal + HCN: $\\mathrm{CN^-}$ tấn công C của $\\mathrm{C{=}O}$. Ethene + $\\mathrm{Br_2}$: $\\mathrm{Br^{\\delta+}}$ cộng trước tạo ion bromonium vòng, rồi $\\mathrm{Br^-}$ tấn công.',
    },
    {
      type: 'choice',
      prompt:
        'Cộng HBr vào 2-methylbut-2-ene $\\mathrm{(CH_3)_2C{=}CH{-}CH_3}$ cho sản phẩm chính là',
      options: [
        '2-bromo-2-methylbutane',
        '2-bromo-3-methylbutane',
        '1-bromo-2-methylbutane',
        '1-bromo-3-methylbutane',
      ],
      answer: 0,
      hints: [
        'So sánh hai carbocation: H vào CH cho carbocation bậc mấy? H vào $\\mathrm{C(CH_3)_2}$ cho carbocation bậc mấy?',
      ],
      solution:
        'H cộng vào CH (mang nhiều H hơn), tạo carbocation bậc III $\\mathrm{(CH_3)_2\\overset{+}{C}{-}CH_2{-}CH_3}$; $\\mathrm{Br^-}$ kết hợp cho $\\mathrm{(CH_3)_2CBr{-}CH_2{-}CH_3}$, 2-bromo-2-methylbutane.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao acetaldehyde $\\mathrm{CH_3CHO}$ cộng HCN dễ hơn acetone $\\mathrm{CH_3COCH_3}$?',
      options: [
        'Acetone có hai nhóm methyl đẩy electron và cồng kềnh, làm C của nhóm carbonyl ít dương và khó tiếp cận hơn.',
        'Acetone không có liên kết $\\pi$.',
        'Acetaldehyde có liên kết $\\mathrm{C{=}O}$ không phân cực.',
        'Acetone phản ứng theo cơ chế gốc tự do.',
      ],
      answer: 0,
      hints: ['So sánh các nhóm gắn vào C của nhóm carbonyl: H và $\\mathrm{CH_3}$.'],
      solution:
        'Ở acetone, hai nhóm $\\mathrm{CH_3}$ đẩy electron làm giảm điện tích $\\delta+$ trên C và che chắn C, nên $\\mathrm{CN^-}$ tấn công khó hơn so với acetaldehyde (một nhóm $\\mathrm{CH_3}$ và một H).',
    },
  ],
  takeaways: [
    'Cộng electrophile vào alkene: $\\mathrm{H^+}$ (hay $\\mathrm{Br^{\\delta+}}$) cộng trước tạo cation trung gian (chậm), rồi anion hay $\\mathrm{H_2O}$ kết hợp (nhanh).',
    'Quy tắc Markovnikov: H cộng vào carbon mang nhiều H hơn, vì hướng đó tạo carbocation bậc cao hơn, bền hơn.',
    'Cộng nucleophile vào $\\mathrm{C{=}O}$: $\\mathrm{Nu^-}$ tấn công C mang $\\delta+$, anion trung gian nhận $\\mathrm{H^+}$.',
    'Aldehyde cộng nucleophile dễ hơn ketone.',
  ],
};
