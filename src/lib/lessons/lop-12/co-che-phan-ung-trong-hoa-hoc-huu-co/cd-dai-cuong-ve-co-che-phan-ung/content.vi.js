/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ chế phản ứng, phân cắt đồng li và dị li, các tiểu phân trung gian gốc tự do, carbocation, carbanion, tác nhân nucleophile và electrophile, cách dùng mũi tên cong.',
  intro:
    'Phương trình $\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\text{as}} \\mathrm{CH_3Cl} + \\mathrm{HCl}$ chỉ cho biết chất đầu và sản phẩm. Nhưng liên kết nào đứt trước, electron đi đâu, và vì sao phải chiếu sáng? Câu trả lời nằm ở cơ chế phản ứng: "kịch bản" chi tiết của từng bước phá vỡ và tạo thành liên kết.',
  objectives: [
    'Nêu được khái niệm cơ chế phản ứng và cách biểu diễn sự chuyển dịch electron bằng mũi tên cong.',
    'Phân biệt được phân cắt đồng li và phân cắt dị li; viết được các tiểu phân tạo thành.',
    'Nêu được đặc điểm và so sánh được độ bền của gốc tự do, carbocation, carbanion.',
    'Phân biệt được tác nhân nucleophile và tác nhân electrophile.',
  ],
  sections: [
    {
      heading: 'Cơ chế phản ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ chế phản ứng',
          text: 'Cơ chế phản ứng là con đường chi tiết mà phản ứng đi qua, mô tả từng giai đoạn phá vỡ liên kết cũ, hình thành liên kết mới và các tiểu phân trung gian xuất hiện trên đường đi từ chất đầu đến sản phẩm.',
        },
        {
          type: 'p',
          text: 'Phản ứng hữu cơ thường gồm nhiều giai đoạn và tạo ra các tiểu phân trung gian kém bền, tồn tại rất ngắn. Hiểu cơ chế giúp giải thích vì sao phản ứng cần điều kiện nào đó, vì sao tạo ra sản phẩm chính và sản phẩm phụ, và dự đoán phản ứng của những chất tương tự.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mũi tên cong',
          text: 'Mũi tên cong đi từ nơi có electron (cặp electron tự do, liên kết) đến nơi electron chuyển tới. Mũi tên cong có đầu đầy đủ chỉ sự chuyển dịch một cặp electron; mũi tên cong nửa đầu (hình móc câu) chỉ sự chuyển dịch một electron.',
        },
      ],
    },
    {
      heading: 'Phân cắt liên kết',
      blocks: [
        {
          type: 'p',
          text: 'Liên kết cộng hoá trị $\\mathrm{A{-}B}$ gồm một cặp electron chung. Khi liên kết đứt, cặp electron này có thể được chia theo hai cách.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân cắt đồng li',
          text: 'Mỗi nguyên tử giữ lại một electron của cặp electron chung, tạo thành hai gốc tự do: $\\mathrm{A{-}B} \\rightarrow \\mathrm{A}{\\cdot} + \\mathrm{B}{\\cdot}$ (dấu chấm biểu thị electron độc thân). Phân cắt đồng li thường xảy ra với liên kết không phân cực hoặc ít phân cực, khi chiếu sáng hoặc đun nóng, ví dụ $\\mathrm{Cl{-}Cl} \\xrightarrow{\\text{as}} 2\\mathrm{Cl}{\\cdot}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân cắt dị li',
          text: 'Nguyên tử có độ âm điện lớn hơn giữ cả cặp electron chung và trở thành anion, nguyên tử kia thành cation: $\\mathrm{A{-}B} \\rightarrow \\mathrm{A}^{+} + \\mathrm{B}^{-}$ (khi B có độ âm điện lớn hơn A). Phân cắt dị li thường xảy ra với liên kết phân cực, trong dung môi phân cực, ví dụ $\\mathrm{(CH_3)_3C{-}Br} \\rightarrow \\mathrm{(CH_3)_3C^+} + \\mathrm{Br^-}$.',
        },
      ],
    },
    {
      heading: 'Tiểu phân trung gian',
      blocks: [
        {
          type: 'table',
          head: ['Tiểu phân', 'Tạo thành từ', 'Nguyên tử carbon trung tâm', 'Ví dụ'],
          rows: [
            [
              'Gốc tự do (gốc carbon)',
              'Phân cắt đồng li',
              'Có $7$ electron hoá trị, một electron độc thân, trung hoà điện',
              '$\\mathrm{CH_3}{\\cdot}$, $\\mathrm{Cl}{\\cdot}$',
            ],
            [
              'Carbocation',
              'Phân cắt dị li, cặp electron rời khỏi C',
              'Có $6$ electron hoá trị, mang điện tích dương, lai hoá $sp^2$, cấu trúc phẳng',
              '$\\mathrm{CH_3^+}$, $\\mathrm{(CH_3)_3C^+}$',
            ],
            [
              'Carbanion',
              'Phân cắt dị li, cặp electron về C',
              'Có $8$ electron hoá trị (một cặp electron tự do), mang điện tích âm',
              '$\\mathrm{CH_3^-}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Độ bền của gốc tự do và carbocation',
          text: 'Nhóm alkyl đẩy electron, làm giảm sự thiếu electron ở carbon trung tâm. Vì vậy độ bền tăng theo bậc của carbon mang electron độc thân hoặc mang điện dương: $\\text{bậc III} > \\text{bậc II} > \\text{bậc I} > \\mathrm{CH_3}$. Ví dụ $\\mathrm{(CH_3)_3C^+} > \\mathrm{(CH_3)_2CH^+} > \\mathrm{CH_3CH_2^+} > \\mathrm{CH_3^+}$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Carbanion thì ngược lại',
          text: 'Carbanion đã thừa electron, nhóm alkyl đẩy thêm electron làm nó kém bền hơn: $\\mathrm{CH_3^-}$ bền hơn carbanion bậc I, bậc I bền hơn bậc II, bậc II bền hơn bậc III.',
        },
      ],
    },
    {
      heading: 'Tác nhân nucleophile và tác nhân electrophile',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tác nhân nucleophile',
          text: 'Là tiểu phân giàu electron (anion hoặc phân tử có cặp electron tự do), có xu hướng tấn công vào trung tâm mang điện tích dương hoặc thiếu electron. Ví dụ: $\\mathrm{OH^-}$, $\\mathrm{CN^-}$, $\\mathrm{Br^-}$, $\\mathrm{CH_3O^-}$, $\\mathrm{H_2O}$, $\\mathrm{NH_3}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tác nhân electrophile',
          text: 'Là tiểu phân thiếu electron (cation hoặc phân tử có orbital trống), có xu hướng tấn công vào trung tâm giàu electron như liên kết $\\pi$ hay vòng benzene. Ví dụ: $\\mathrm{H^+}$, $\\mathrm{NO_2^+}$, $\\mathrm{Br^+}$, carbocation, $\\mathrm{AlCl_3}$.',
        },
        {
          type: 'p',
          text: 'Tên gọi theo cách tác nhân tìm "đối tác": nucleophile (ưa hạt nhân) tìm điện tích dương, electrophile (ưa electron) tìm electron. Phản ứng hữu cơ được gọi theo tác nhân tấn công: thế gốc tự do ($S_R$), thế nucleophile ($S_N$), thế electrophile ($S_E$), cộng electrophile ($A_E$), cộng nucleophile ($A_N$).',
        },
        { type: 'widget', name: 'tac-nhan' },
      ],
    },
    {
      heading: 'Dự án: Gốc tự do chlorine và lỗ thủng tầng ozone',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng mũi tên cong để kể lại cơ chế các hợp chất CFC (freon) phá huỷ tầng ozone, qua đó thấy phân cắt đồng li và gốc tự do có mặt ngay trong khí quyển.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm hiểu: CFC là gì, được dùng ở đâu, vì sao Nghị định thư Montreal (1987) cấm dần chúng.',
            'Viết sự phân cắt đồng li liên kết $\\mathrm{C{-}Cl}$ trong $\\mathrm{CF_2Cl_2}$ dưới tia tử ngoại, dùng mũi tên cong nửa đầu.',
            'Viết hai giai đoạn $\\mathrm{Cl}{\\cdot} + \\mathrm{O_3} \\rightarrow \\mathrm{ClO}{\\cdot} + \\mathrm{O_2}$ và $\\mathrm{ClO}{\\cdot} + \\mathrm{O} \\rightarrow \\mathrm{Cl}{\\cdot} + \\mathrm{O_2}$; chỉ ra tiểu phân được tái tạo.',
            'Làm một poster hoặc đoạn phim ngắn (dùng hạt cườm làm electron) minh hoạ các bước.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: sơ đồ cơ chế có mũi tên cong, giải thích vì sao một nguyên tử Cl có thể phá huỷ hàng nghìn phân tử ozone, và đề xuất hành động bảo vệ tầng ozone.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phân cắt đồng li và dị li',
    instruction:
      'Chọn một liên kết và kiểu phân cắt; với phân cắt dị li, chọn nguyên tử nhận cặp electron. Quan sát mũi tên cong rồi bấm "Phân cắt liên kết" để xem hai electron đi đâu và tiểu phân nào được tạo thành. Thử cho cặp electron về nguyên tử có độ âm điện nhỏ hơn xem điều gì xảy ra.',
  },
  examples: [
    {
      problem:
        'Viết sự phân cắt dị li liên kết $\\mathrm{C{-}Br}$ trong $\\mathrm{CH_3CH_2{-}Br}$ và gọi tên các tiểu phân tạo thành.',
      steps: [
        'So sánh độ âm điện: $\\chi(\\mathrm{Br}) = 2{,}96 > \\chi(\\mathrm{C}) = 2{,}55$, nên Br giữ cả cặp electron chung.',
        'Mũi tên cong đầy đủ đi từ liên kết $\\mathrm{C{-}Br}$ đến Br.',
        '$\\mathrm{CH_3CH_2{-}Br} \\rightarrow \\mathrm{CH_3CH_2^+} + \\mathrm{Br^-}$.',
      ],
      answer: 'Tạo carbocation bậc I $\\mathrm{CH_3CH_2^+}$ và anion bromide $\\mathrm{Br^-}$.',
    },
    {
      problem:
        'Khi chiếu sáng hỗn hợp methane và chlorine, phân tử $\\mathrm{Cl_2}$ bị phân cắt. Viết phương trình, cho biết kiểu phân cắt và tiểu phân tạo thành.',
      steps: [
        'Liên kết $\\mathrm{Cl{-}Cl}$ không phân cực, ánh sáng cung cấp năng lượng để phá liên kết.',
        'Mỗi nguyên tử Cl giữ một electron: dùng hai mũi tên cong nửa đầu.',
        '$\\mathrm{Cl{-}Cl} \\xrightarrow{\\text{as}} \\mathrm{Cl}{\\cdot} + \\mathrm{Cl}{\\cdot}$.',
      ],
      answer: 'Phân cắt đồng li, tạo hai gốc tự do (nguyên tử) chlorine.',
    },
    {
      problem:
        'Sắp xếp các carbocation sau theo độ bền tăng dần: $\\mathrm{(CH_3)_2CH^+}$, $\\mathrm{CH_3^+}$, $\\mathrm{(CH_3)_3C^+}$, $\\mathrm{CH_3CH_2^+}$.',
      steps: [
        'Xác định bậc: $\\mathrm{CH_3^+}$ (methyl), $\\mathrm{CH_3CH_2^+}$ (bậc I), $\\mathrm{(CH_3)_2CH^+}$ (bậc II), $\\mathrm{(CH_3)_3C^+}$ (bậc III).',
        'Càng nhiều nhóm alkyl đẩy electron gắn vào C mang điện dương thì điện tích càng được giải toả, carbocation càng bền.',
      ],
      answer:
        '$\\mathrm{CH_3^+} < \\mathrm{CH_3CH_2^+} < \\mathrm{(CH_3)_2CH^+} < \\mathrm{(CH_3)_3C^+}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân cắt đồng li một liên kết cộng hoá trị tạo ra',
      options: [
        'hai gốc tự do.',
        'một cation và một anion.',
        'hai cation.',
        'một carbocation và một gốc tự do.',
      ],
      answer: 0,
      hints: ['"Đồng li": mỗi nguyên tử được chia phần như nhau.'],
      solution:
        'Mỗi nguyên tử giữ một electron của cặp chung, nên tạo hai tiểu phân trung hoà có electron độc thân: hai gốc tự do.',
    },
    {
      type: 'choice',
      prompt:
        'Sự phân cắt dị li liên kết $\\mathrm{C{-}Cl}$ trong $\\mathrm{(CH_3)_3C{-}Cl}$ tạo ra',
      options: [
        '$\\mathrm{(CH_3)_3C^+}$ và $\\mathrm{Cl^-}$',
        '$\\mathrm{(CH_3)_3C^-}$ và $\\mathrm{Cl^+}$',
        '$\\mathrm{(CH_3)_3C}{\\cdot}$ và $\\mathrm{Cl}{\\cdot}$',
        '$\\mathrm{(CH_3)_3C^+}$ và $\\mathrm{Cl}{\\cdot}$',
      ],
      answer: 0,
      hints: ['Nguyên tử nào có độ âm điện lớn hơn: C hay Cl?'],
      solution:
        'Cl có độ âm điện lớn hơn C nên giữ cặp electron: $\\mathrm{(CH_3)_3C{-}Cl} \\rightarrow \\mathrm{(CH_3)_3C^+} + \\mathrm{Cl^-}$.',
    },
    {
      type: 'multi',
      prompt: 'Những tiểu phân nào là tác nhân nucleophile?',
      options: [
        '$\\mathrm{OH^-}$',
        '$\\mathrm{NH_3}$',
        '$\\mathrm{H^+}$',
        '$\\mathrm{NO_2^+}$',
        '$\\mathrm{H_2O}$',
      ],
      answers: [0, 1, 4],
      hints: ['Nucleophile giàu electron: là anion hoặc có cặp electron tự do.'],
      solution:
        '$\\mathrm{OH^-}$ là anion; $\\mathrm{NH_3}$ và $\\mathrm{H_2O}$ có cặp electron tự do. $\\mathrm{H^+}$ và $\\mathrm{NO_2^+}$ thiếu electron, là tác nhân electrophile.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử carbon mang điện tích dương trong một carbocation có bao nhiêu electron hoá trị?',
      answer: 6,
      unit: 'electron',
      hints: [
        'Carbon có $4$ electron hoá trị, tạo ba liên kết và mất phần electron của liên kết thứ tư.',
      ],
      solution:
        'C tạo ba liên kết cộng hoá trị, mỗi liên kết là một cặp electron dùng chung: $3 \\cdot 2 = 6$ electron. Carbocation thiếu electron nên là tiểu phân electrophile.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các gốc tự do theo độ bền tăng dần.',
      items: [
        '$\\mathrm{(CH_3)_3C}{\\cdot}$',
        '$\\mathrm{CH_3}{\\cdot}$',
        '$\\mathrm{(CH_3)_2CH}{\\cdot}$',
        '$\\mathrm{CH_3CH_2}{\\cdot}$',
      ],
      answer: [1, 3, 2, 0],
      hints: [
        'Xác định bậc của carbon mang electron độc thân.',
        'Bậc càng cao, gốc tự do càng bền.',
      ],
      solution:
        '$\\mathrm{CH_3}{\\cdot}$ (methyl) $<$ $\\mathrm{CH_3CH_2}{\\cdot}$ (bậc I) $<$ $\\mathrm{(CH_3)_2CH}{\\cdot}$ (bậc II) $<$ $\\mathrm{(CH_3)_3C}{\\cdot}$ (bậc III).',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi tiểu phân với đặc điểm của nguyên tử carbon trung tâm.',
      left: ['Gốc tự do', 'Carbocation', 'Carbanion'],
      right: [
        'Có một electron độc thân, trung hoà điện',
        'Thiếu electron, mang điện tích dương, cấu trúc phẳng',
        'Có cặp electron tự do, mang điện tích âm',
        'Có $10$ electron hoá trị',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đếm electron hoá trị quanh C: $7$, $6$ và $8$.'],
      solution:
        'Gốc tự do: $7$ electron, một electron độc thân. Carbocation: $6$ electron, mang điện dương, phẳng. Carbanion: $8$ electron, có cặp electron tự do, mang điện âm. Carbon không có $10$ electron hoá trị.',
    },
    {
      type: 'text',
      prompt:
        'Mũi tên cong nửa đầu (hình móc câu) biểu diễn sự chuyển dịch của bao nhiêu electron? (viết bằng chữ, ví dụ "hai electron")',
      accept: ['một electron', '1 electron', 'một', '1'],
      hints: ['Mũi tên cong đầy đủ chuyển một cặp electron.'],
      solution:
        'Mũi tên cong nửa đầu chuyển một electron, dùng cho phân cắt đồng li và phản ứng gốc tự do.',
    },
    {
      type: 'choice',
      prompt:
        'Liên kết $\\mathrm{C{-}Li}$ trong $\\mathrm{CH_3Li}$ bị phân cắt dị li. Tiểu phân chứa carbon tạo thành là',
      options: [
        'carbanion $\\mathrm{CH_3^-}$',
        'carbocation $\\mathrm{CH_3^+}$',
        'gốc tự do $\\mathrm{CH_3}{\\cdot}$',
        'methane $\\mathrm{CH_4}$',
      ],
      answer: 0,
      hints: ['Độ âm điện của Li là $0{,}98$, của C là $2{,}55$.'],
      solution:
        'C có độ âm điện lớn hơn Li nên giữ cặp electron chung: $\\mathrm{CH_3{-}Li} \\rightarrow \\mathrm{CH_3^-} + \\mathrm{Li^+}$; $\\mathrm{CH_3^-}$ là carbanion.',
    },
  ],
  takeaways: [
    'Cơ chế phản ứng là con đường chi tiết từ chất đầu đến sản phẩm, qua các tiểu phân trung gian.',
    'Mũi tên cong đầy đủ chuyển một cặp electron; mũi tên cong nửa đầu chuyển một electron.',
    'Phân cắt đồng li tạo gốc tự do; phân cắt dị li tạo cation và anion, cặp electron về nguyên tử có độ âm điện lớn hơn.',
    'Gốc tự do và carbocation càng bền khi bậc carbon càng cao: bậc III > bậc II > bậc I > methyl.',
    'Nucleophile giàu electron, tấn công trung tâm dương; electrophile thiếu electron, tấn công trung tâm giàu electron.',
  ],
};
