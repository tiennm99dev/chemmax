/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vai trò của phức chất trong sinh học (hemoglobin, chlorophyll, vitamin B12) và ứng dụng trong hoá phân tích (nhận biết ion, chuẩn độ EDTA), y học (cisplatin, giải độc kim loại nặng) và công nghiệp (tách vàng, tráng gương, chất màu).',
  intro:
    'Mỗi hơi thở của chúng ta cần một phức chất của sắt, mỗi chiếc lá xanh cần một phức chất của magnesium, và một số loại ung thư được chữa bằng một phức chất của platinum. Phức chất không chỉ nằm trong phòng thí nghiệm: chúng có mặt trong cơ thể, trong bệnh viện và trong nhà máy.',
  objectives: [
    'Nêu được vai trò của một số phức chất trong cơ thể sinh vật: hemoglobin, chlorophyll, vitamin B12.',
    'Trình bày được ứng dụng của phức chất trong hoá phân tích: nhận biết ion và chuẩn độ bằng EDTA.',
    'Nêu được một số ứng dụng của phức chất trong y học và công nghiệp; tính toán được theo phương trình tạo phức chất.',
  ],
  sections: [
    {
      heading: 'Phức chất trong sinh học',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều phân tử sinh học quan trọng là phức chất, trong đó ion kim loại được giữ bởi một phối tử vòng lớn nhiều càng, thường liên kết qua bốn nguyên tử N.',
        },
        {
          type: 'table',
          head: ['Phức chất', 'Nguyên tử trung tâm', 'Phối tử chính', 'Vai trò'],
          rows: [
            [
              'Heme (trong hemoglobin)',
              '$\\mathrm{Fe^{2+}}$',
              'vòng porphyrin (4 N)',
              'vận chuyển $\\mathrm{O_2}$ trong máu',
            ],
            [
              'Chlorophyll',
              '$\\mathrm{Mg^{2+}}$',
              'vòng chlorin (4 N)',
              'hấp thụ ánh sáng cho quang hợp',
            ],
            [
              'Vitamin B12',
              '$\\mathrm{Co^{3+}}$',
              'vòng corrin (4 N)',
              'tạo hồng cầu, nuôi hệ thần kinh',
            ],
          ],
          caption: 'Một số phức chất có vai trò quan trọng trong cơ thể sinh vật.',
        },
        {
          type: 'p',
          text: 'Trong hemoglobin, ion $\\mathrm{Fe^{2+}}$ của mỗi nhóm heme liên kết với 4 nguyên tử N của vòng porphyrin và 1 nguyên tử N của protein globin; vị trí thứ sáu dành cho phân tử $\\mathrm{O_2}$. Mỗi phân tử hemoglobin có 4 nhóm heme nên vận chuyển được 4 phân tử $\\mathrm{O_2}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ngộ độc khí CO',
          text: 'Khí CO cũng gắn vào $\\mathrm{Fe^{2+}}$ của heme ở vị trí dành cho $\\mathrm{O_2}$, nhưng bền hơn khoảng 200 lần. Hemoglobin bị CO chiếm chỗ không còn vận chuyển được oxygen, gây ngạt. Vì vậy không đốt than trong phòng kín.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong hoá phân tích',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều phức chất có màu đặc trưng, dùng để nhận biết ion kim loại trong dung dịch:',
        },
        {
          type: 'list',
          items: [
            'Ion $\\mathrm{Cu^{2+}}$: nhỏ dung dịch $\\mathrm{NH_3}$ đến dư, kết tủa $\\mathrm{Cu(OH)_2}$ xanh tan tạo dung dịch xanh lam đậm: $\\mathrm{Cu(OH)_2} + 4\\mathrm{NH_3} \\rightarrow \\mathrm{[Cu(NH_3)_4](OH)_2}$.',
            'Ion $\\mathrm{Fe^{3+}}$: thêm dung dịch KSCN, xuất hiện màu đỏ máu của phức chất $\\mathrm{[Fe(SCN)(H_2O)_5]^{2+}}$, viết gọn $\\mathrm{Fe^{3+}} + \\mathrm{SCN^-} \\rightarrow \\mathrm{[Fe(SCN)]^{2+}}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chuẩn độ bằng EDTA (chuẩn độ complexon)',
          text: 'Phối tử sáu càng $\\mathrm{EDTA^{4-}}$ tạo phức chất bền với hầu hết ion kim loại theo tỉ lệ mol 1 : 1, ví dụ $\\mathrm{Ca^{2+}} + \\mathrm{EDTA^{4-}} \\rightarrow \\mathrm{[Ca(EDTA)]^{2-}}$. Khi chuẩn độ: $n_{\\mathrm{M^{2+}}} = n_{\\mathrm{EDTA}} = C_{\\mathrm{EDTA}} \\cdot V_{\\mathrm{EDTA}}$. Phép chuẩn độ này dùng để xác định tổng nồng độ $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$, tức độ cứng của nước.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong y học và công nghiệp',
      blocks: [
        {
          type: 'list',
          items: [
            'Cisplatin, cis-$\\mathrm{[PtCl_2(NH_3)_2]}$, là thuốc điều trị nhiều loại ung thư: nó liên kết với DNA của tế bào ung thư và ngăn tế bào phân chia. Một số phức chất khác của platinum, vàng được dùng chữa ung thư và viêm khớp dạng thấp.',
            'Giải độc kim loại nặng: tiêm $\\mathrm{Na_2[Ca(EDTA)]}$ cho người nhiễm độc chì; $\\mathrm{Pb^{2+}}$ thay thế $\\mathrm{Ca^{2+}}$ tạo phức chất $\\mathrm{[Pb(EDTA)]^{2-}}$ bền, tan, được đào thải qua nước tiểu.',
            'Phức chất của gadolinium được dùng làm chất tương phản trong chụp cộng hưởng từ (MRI).',
          ],
        },
        {
          type: 'p',
          text: 'Trong công nghiệp, vàng được tách khỏi quặng nghèo bằng dung dịch NaCN khi có không khí, vàng tan dưới dạng phức chất; sau đó dùng kẽm đẩy vàng ra:',
        },
        {
          type: 'tex',
          tex: '4\\mathrm{Au} + 8\\mathrm{NaCN} + \\mathrm{O_2} + 2\\mathrm{H_2O} \\rightarrow 4\\mathrm{Na[Au(CN)_2]} + 4\\mathrm{NaOH}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Zn} + 2\\mathrm{Na[Au(CN)_2]} \\rightarrow \\mathrm{Na_2[Zn(CN)_4]} + 2\\mathrm{Au}',
        },
        {
          type: 'list',
          items: [
            'Tráng gương, tráng ruột phích: phức chất $\\mathrm{[Ag(NH_3)_2]^+}$ (thuốc thử Tollens) bị glucose khử, tạo lớp bạc sáng bám trên kính.',
            'Chất màu: xanh Prussian $\\mathrm{Fe_4[Fe(CN)_6]_3}$ dùng trong sơn, mực in; nhiều phức chất của kim loại chuyển tiếp tạo màu cho men gốm, thuỷ tinh.',
            'Xúc tác: nhiều phức chất kim loại chuyển tiếp làm xúc tác trong tổng hợp hữu cơ và sản xuất polymer.',
            'Mạ điện: dung dịch phức chất (như phức chất cyanide của bạc, đồng) cho lớp mạ mịn, bám chắc.',
          ],
        },
      ],
    },
    {
      heading: 'Dự án: Xác định độ cứng của nước sinh hoạt bằng EDTA',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng phép chuẩn độ tạo phức chất để so sánh độ cứng của nước máy, nước giếng và nước đóng chai, rồi đề xuất cách dùng nước phù hợp.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị (có giáo viên hướng dẫn, đeo kính và găng tay): burette, bình tam giác, dung dịch EDTA 0,0100 M, dung dịch đệm pH 10, chỉ thị eriochrome đen T, các mẫu nước. Có thể thay bằng bộ kit thử độ cứng bán sẵn.',
            'Lấy chính xác 50,0 mL mẫu nước, thêm 2 mL dung dịch đệm và vài giọt chỉ thị (dung dịch có màu đỏ nho).',
            'Chuẩn độ bằng EDTA đến khi dung dịch chuyển sang màu xanh lam; ghi thể tích EDTA. Làm lại 3 lần, lấy trung bình.',
            'Tính tổng nồng độ $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$: $C = \\dfrac{C_{\\mathrm{EDTA}} \\cdot V_{\\mathrm{EDTA}}}{V_{\\text{mẫu}}}$ (theo tỉ lệ mol 1 : 1).',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu ba lần chuẩn độ của mỗi mẫu, kết quả nồng độ (mmol/L), so sánh các mẫu, giải thích vai trò của phức chất $\\mathrm{EDTA}$ trong phép đo và đề xuất cách làm mềm nước nếu nước quá cứng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ ứng dụng của phức chất',
    instruction:
      'Ở chế độ "Khám phá", chọn lĩnh vực rồi bấm từng thẻ để xem nguyên tử trung tâm, phối tử, số phối trí và vai trò của phức chất. Ở chế độ "Đoán kim loại", đọc mô tả phức chất (không nêu tên kim loại) rồi chọn kim loại làm nguyên tử trung tâm.',
  },
  examples: [
    {
      problem:
        'Chuẩn độ 50,0 mL một mẫu nước (đã thêm đệm và chỉ thị) thì dùng hết 12,0 mL dung dịch EDTA 0,0100 M. Tính tổng nồng độ mol của $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ trong mẫu nước.',
      steps: [
        'EDTA tạo phức chất với $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ theo tỉ lệ mol 1 : 1.',
        '$n_{\\mathrm{EDTA}} = 0{,}0100 \\cdot 0{,}0120 = 1{,}20 \\cdot 10^{-4}$ mol $= n_{\\mathrm{Ca^{2+}}} + n_{\\mathrm{Mg^{2+}}}$.',
        '$C = \\dfrac{1{,}20 \\cdot 10^{-4}}{0{,}0500} = 2{,}40 \\cdot 10^{-3}$ M.',
      ],
      answer:
        'Tổng nồng độ $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ là $2{,}40 \\cdot 10^{-3}$ M (2,40 mmol/L).',
    },
    {
      problem:
        'Để thu được 19,7 g vàng từ dung dịch $\\mathrm{Na[Au(CN)_2]}$ cần tối thiểu bao nhiêu gam kẽm? (Au = 197, Zn = 65)',
      steps: [
        '$\\mathrm{Zn} + 2\\mathrm{Na[Au(CN)_2]} \\rightarrow \\mathrm{Na_2[Zn(CN)_4]} + 2\\mathrm{Au}$.',
        '$n_{\\mathrm{Au}} = \\dfrac{19{,}7}{197} = 0{,}1$ mol, nên $n_{\\mathrm{Zn}} = \\dfrac{0{,}1}{2} = 0{,}05$ mol.',
        '$m_{\\mathrm{Zn}} = 0{,}05 \\cdot 65 = 3{,}25$ g.',
      ],
      answer: 'Cần tối thiểu 3,25 g kẽm.',
    },
    {
      problem:
        'Hemoglobin chứa 0,34% sắt về khối lượng, mỗi phân tử có 4 nguyên tử Fe (trong 4 nhóm heme). Ước tính phân tử khối của hemoglobin. (Fe = 56)',
      steps: [
        'Khối lượng sắt trong 1 mol hemoglobin: $4 \\cdot 56 = 224$ g.',
        '224 g ứng với 0,34% khối lượng, nên $M = \\dfrac{224}{0{,}0034} \\approx 65\\,882$.',
      ],
      answer: 'Phân tử khối của hemoglobin khoảng 65 900.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tử trung tâm trong chlorophyll là',
      options: [
        '$\\mathrm{Mg^{2+}}$',
        '$\\mathrm{Fe^{2+}}$',
        '$\\mathrm{Co^{3+}}$',
        '$\\mathrm{Cu^{2+}}$',
      ],
      answer: 0,
      hints: ['Đây là một kim loại nhóm IIA.'],
      solution: 'Chlorophyll là phức chất của $\\mathrm{Mg^{2+}}$ với vòng chlorin.',
    },
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Fe^{2+}}$ trong một nhóm heme của hemoglobin đã gắn phân tử $\\mathrm{O_2}$ có số phối trí bằng bao nhiêu?',
      answer: 6,
      hints: ['Cộng các nguyên tử N của vòng porphyrin, của globin và phân tử $\\mathrm{O_2}$.'],
      solution:
        '4 nguyên tử N của porphyrin + 1 nguyên tử N của globin + 1 phân tử $\\mathrm{O_2}$: số phối trí 6.',
    },
    {
      type: 'choice',
      prompt: 'Khí CO gây ngộ độc vì',
      options: [
        'CO tạo với $\\mathrm{Fe^{2+}}$ của hemoglobin phức chất bền hơn nhiều so với $\\mathrm{O_2}$.',
        'CO oxi hoá $\\mathrm{Fe^{2+}}$ thành $\\mathrm{Fe^{3+}}$.',
        'CO phản ứng với $\\mathrm{O_2}$ trong máu tạo $\\mathrm{CO_2}$.',
        'CO phá huỷ vòng porphyrin.',
      ],
      answer: 0,
      hints: ['CO chiếm đúng vị trí mà $\\mathrm{O_2}$ cần gắn vào.'],
      solution:
        'CO gắn vào $\\mathrm{Fe^{2+}}$ của heme bền hơn $\\mathrm{O_2}$ khoảng 200 lần, chiếm chỗ của $\\mathrm{O_2}$ nên máu không vận chuyển được oxygen.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ 25,0 mL một mẫu nước cần 10,0 mL dung dịch EDTA 0,0200 M. Tổng nồng độ $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ trong mẫu nước là bao nhiêu mmol/L?',
      answer: 8,
      tolerance: 0.01,
      hints: [
        '$n_{\\mathrm{EDTA}} = C \\cdot V$, tỉ lệ mol 1 : 1.',
        'Đổi mol/L sang mmol/L: nhân với 1000.',
      ],
      solution:
        '$n = 0{,}0200 \\cdot 0{,}0100 = 2{,}00 \\cdot 10^{-4}$ mol; $C = \\dfrac{2{,}00 \\cdot 10^{-4}}{0{,}0250} = 8{,}00 \\cdot 10^{-3}$ M $= 8{,}00$ mmol/L.',
    },
    {
      type: 'number',
      prompt:
        'Theo phản ứng $4\\mathrm{Au} + 8\\mathrm{NaCN} + \\mathrm{O_2} + 2\\mathrm{H_2O} \\rightarrow 4\\mathrm{Na[Au(CN)_2]} + 4\\mathrm{NaOH}$, để hoà tan 3,94 g vàng cần tối thiểu bao nhiêu gam NaCN? (Au = 197, Na = 23, C = 12, N = 14)',
      answer: 1.96,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Tỉ lệ mol Au : NaCN là 4 : 8 = 1 : 2.'],
      solution:
        '$n_{\\mathrm{Au}} = \\dfrac{3{,}94}{197} = 0{,}02$ mol; $n_{\\mathrm{NaCN}} = 0{,}04$ mol; $m = 0{,}04 \\cdot 49 = 1{,}96$ g.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng platinum trong cisplatin $\\mathrm{[PtCl_2(NH_3)_2]}$. (Pt = 195, Cl = 35,5, N = 14, H = 1)',
      answer: 65,
      tolerance: 0.1,
      unit: '%',
      hints: ['$M = 195 + 2 \\cdot 35{,}5 + 2 \\cdot 17$.'],
      solution:
        '$M = 195 + 71 + 34 = 300$; $\\%\\mathrm{Pt} = \\dfrac{195}{300} \\cdot 100\\% = 65\\%$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phức chất với ứng dụng của nó.',
      left: [
        'cis-$\\mathrm{[PtCl_2(NH_3)_2]}$',
        '$\\mathrm{[Ag(NH_3)_2]^+}$',
        '$\\mathrm{Na[Au(CN)_2]}$',
        '$\\mathrm{Na_2[Ca(EDTA)]}$',
      ],
      right: [
        'chữa ung thư',
        'tráng gương',
        'tách vàng khỏi quặng',
        'giải độc chì',
        'làm phân bón',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Kim loại trung tâm của mỗi phức chất gợi ý ứng dụng của nó.'],
      solution:
        'Cisplatin chữa ung thư; thuốc thử Tollens tráng gương; phức chất cyanide của vàng dùng tách vàng; $\\mathrm{Na_2[Ca(EDTA)]}$ giải độc chì.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng.',
      options: [
        'Vitamin B12 là phức chất của cobalt.',
        'Nhỏ dung dịch $\\mathrm{NH_3}$ đến dư vào dung dịch $\\mathrm{CuSO_4}$ thu được dung dịch xanh lam đậm.',
        'Dung dịch chứa $\\mathrm{Fe^{3+}}$ gặp dung dịch KSCN có màu đỏ máu.',
        'EDTA tạo phức chất với $\\mathrm{Ca^{2+}}$ theo tỉ lệ mol 1 : 2.',
        'Chlorophyll là phức chất của $\\mathrm{Fe^{2+}}$.',
      ],
      answers: [0, 1, 2],
      hints: ['EDTA là phối tử sáu càng: một phối tử đủ chiếm hết các vị trí quanh ion kim loại.'],
      solution:
        'Vitamin B12 chứa Co; phức chất ammine của $\\mathrm{Cu^{2+}}$ có màu xanh lam đậm; $\\mathrm{[Fe(SCN)]^{2+}}$ màu đỏ máu. EDTA tạo phức chất tỉ lệ 1 : 1; chlorophyll chứa $\\mathrm{Mg^{2+}}$.',
    },
    {
      type: 'number',
      prompt:
        'Myoglobin (protein dự trữ oxygen trong cơ) chứa 1 nguyên tử Fe trong mỗi phân tử và 0,335% sắt về khối lượng. Ước tính phân tử khối của myoglobin. (Fe = 56)',
      answer: 16716,
      tolerance: 100,
      hints: ['56 g sắt ứng với 0,335% khối lượng của 1 mol myoglobin.'],
      solution: '$M = \\dfrac{56}{0{,}00335} \\approx 16\\,716$, tức khoảng 16 700.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tách vàng từ quặng bằng phương pháp cyanide theo đúng thứ tự.',
      items: [
        'Cho bột kẽm vào dung dịch để đẩy vàng ra.',
        'Ngâm quặng trong dung dịch NaCN, sục không khí.',
        'Nghiền nhỏ quặng chứa vàng.',
        'Lọc lấy dung dịch chứa $\\mathrm{Na[Au(CN)_2]}$.',
      ],
      answer: [2, 1, 3, 0],
      hints: ['Vàng phải tan vào dung dịch dưới dạng phức chất trước khi bị kẽm đẩy ra.'],
      solution:
        'Nghiền quặng → ngâm trong NaCN có không khí (vàng tan thành $\\mathrm{Na[Au(CN)_2]}$) → lọc lấy dung dịch → cho Zn vào để thu vàng.',
    },
  ],
  takeaways: [
    'Hemoglobin ($\\mathrm{Fe^{2+}}$), chlorophyll ($\\mathrm{Mg^{2+}}$), vitamin B12 ($\\mathrm{Co^{3+}}$) là các phức chất của ion kim loại với phối tử vòng lớn nhiều càng.',
    'CO gây ngộ độc vì tạo phức chất với $\\mathrm{Fe^{2+}}$ của hemoglobin bền hơn $\\mathrm{O_2}$.',
    'Hoá phân tích dùng phức chất có màu để nhận biết ion ($\\mathrm{Cu^{2+}}$ với $\\mathrm{NH_3}$, $\\mathrm{Fe^{3+}}$ với $\\mathrm{SCN^-}$) và EDTA (tỉ lệ 1 : 1) để chuẩn độ, xác định độ cứng của nước.',
    'Y học: cisplatin chữa ung thư, EDTA giải độc chì. Công nghiệp: tách vàng bằng cyanide, tráng gương, chất màu, xúc tác, mạ điện.',
  ],
};
