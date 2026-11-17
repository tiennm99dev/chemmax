/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất: cấu hình electron, tính chất vật lí, số oxi hoá và màu ion của kim loại từ Sc đến Cu; chuẩn độ Fe2+ bằng KMnO4; thành phần, liên kết, điện tích và dạng hình học của phức chất; phản ứng thay thế phối tử, màu sắc và ứng dụng của phức chất.',
  intro:
    'Từ sợi dây đồng, chiếc đinh sắt đến dung dịch xanh lam đậm trong ống nghiệm hay phân tử heme trong máu: kim loại chuyển tiếp và phức chất của chúng có mặt khắp nơi. Bài ôn tập này hệ thống lại kiến thức của chương, luyện nhận diện phức chất qua màu và công thức, và giải các dạng bài tính toán thường gặp.',
  objectives: [
    'Hệ thống được cấu hình electron, tính chất vật lí, số oxi hoá và màu ion của kim loại chuyển tiếp dãy thứ nhất.',
    'Xác định được thành phần, điện tích, số liên kết cho – nhận và dạng hình học của phức chất.',
    'Nhận diện được một số phức chất qua màu sắc và cách tạo thành; viết được phương trình phản ứng thay thế phối tử.',
    'Giải được bài tập chuẩn độ $\\mathrm{Fe^{2+}}$ bằng $\\mathrm{KMnO_4}$ và bài tập hoà tan kết tủa bằng phản ứng tạo phức.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Kim loại chuyển tiếp dãy thứ nhất (Sc đến Cu)',
          head: ['Nội dung', 'Kiến thức cần nhớ'],
          rows: [
            [
              'Cấu hình electron',
              '$\\mathrm{[Ar]3d^{1 \\div 10}4s^{1 \\div 2}}$; đặc biệt Cr $\\mathrm{[Ar]3d^54s^1}$, Cu $\\mathrm{[Ar]3d^{10}4s^1}$',
            ],
            [
              'Tính chất vật lí',
              'nhiệt độ nóng chảy cao, cứng (Cr cứng nhất), khá nặng (trừ Sc, Ti), dẫn điện, dẫn nhiệt tốt',
            ],
            ['Số oxi hoá', 'nhiều số oxi hoá; khi tạo ion, nhường electron 4s trước rồi đến 3d'],
            [
              'Màu ion',
              '$\\mathrm{Cu^{2+}}$ xanh lam, $\\mathrm{Fe^{2+}}$ lục nhạt, $\\mathrm{Fe^{3+}}$ vàng nhạt, $\\mathrm{Mn^{2+}}$ hồng nhạt, $\\mathrm{Sc^{3+}}$ không màu',
            ],
            [
              'Chuẩn độ Fe(II)',
              '$\\mathrm{MnO_4^- + 5Fe^{2+} + 8H^+ \\longrightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O}$; $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{MnO_4^-}}$',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Phức chất',
          head: ['Nội dung', 'Kiến thức cần nhớ'],
          rows: [
            [
              'Thành phần',
              'nguyên tử trung tâm M (nguyên tử, cation kim loại) và phối tử L (anion, phân tử); cầu nội $\\mathrm{[ML_n]}$, ion cầu ngoại',
            ],
            ['Điện tích', 'điện tích phức chất = điện tích M + tổng điện tích các phối tử'],
            [
              'Liên kết',
              'cho – nhận: phối tử cho cặp electron chưa liên kết vào orbital trống của M',
            ],
            [
              'Dạng hình học',
              '$\\mathrm{[ML_4]}$ tứ diện hoặc vuông phẳng; $\\mathrm{[ML_6]}$ bát diện',
            ],
            [
              'Thay thế phối tử',
              'xảy ra thuận lợi khi phức chất mới bền hơn; dấu hiệu: kết tủa, kết tủa tan, đổi màu',
            ],
            [
              'Ứng dụng',
              'cisplatin chữa ung thư; thuốc thử Tollens; xúc tác; heme ($\\mathrm{Fe^{2+}}$), chlorophyll ($\\mathrm{Mg^{2+}}$), vitamin $\\mathrm{B_{12}}$ ($\\mathrm{Co^{3+}}$)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Luyện tập tính toán',
      blocks: [
        {
          type: 'list',
          items: [
            'Electron 3d của ion: viết cấu hình nguyên tử, bỏ electron 4s trước rồi đến 3d.',
            'Điện tích: gọi điện tích nguyên tử trung tâm là $x$, giải $x + \\sum(\\text{điện tích phối tử}) = \\text{điện tích phức chất}$.',
            'Chuẩn độ: $C_{\\mathrm{Fe^{2+}}} = \\dfrac{5\\,C_{\\mathrm{KMnO_4}} V_{\\mathrm{KMnO_4}}}{V_{\\mathrm{Fe^{2+}}}}$.',
            'Hoà tan AgCl bằng ammonia: $n_{\\mathrm{NH_3}} = 2\\,n_{\\mathrm{AgCl}}$.',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Nhận diện phức chất qua màu và công thức',
    instruction:
      'Với câu hỏi có ống nghiệm, đọc cách pha dung dịch và màu thu được rồi chọn công thức phức chất; với câu hỏi có công thức, chọn màu của phức chất. Mỗi câu có hai lần chọn; cố gắng đúng ngay lần đầu.',
  },
  examples: [
    {
      problem:
        'Cho phức chất $\\mathrm{[Co(NH_3)_6]Cl_3}$. Xác định cầu nội, ion cầu ngoại, điện tích nguyên tử trung tâm, số liên kết cho – nhận và dạng hình học.',
      steps: [
        'Cầu nội $\\mathrm{[Co(NH_3)_6]^{3+}}$; 3 ion cầu ngoại $\\mathrm{Cl^-}$ trung hoà điện tích $+3$.',
        'Điện tích của Co: $x + 6 \\cdot 0 = +3 \\Rightarrow x = +3$, nguyên tử trung tâm $\\mathrm{Co^{3+}}$.',
        '6 phân tử $\\mathrm{NH_3}$ cho 6 cặp electron (của nguyên tử N): 6 liên kết cho – nhận.',
        'Phức chất $\\mathrm{[ML_6]}$ có dạng bát diện.',
      ],
      answer:
        'Cầu nội $\\mathrm{[Co(NH_3)_6]^{3+}}$, cầu ngoại $\\mathrm{Cl^-}$; $\\mathrm{Co^{3+}}$; 6 liên kết cho – nhận; bát diện.',
    },
    {
      problem:
        'Hoà tan 1,39 g muối $\\mathrm{FeSO_4 \\cdot 7H_2O}$ có lẫn tạp chất trơ vào nước, thêm $\\mathrm{H_2SO_4}$ loãng rồi chuẩn độ bằng dung dịch $\\mathrm{KMnO_4}$ 0,02 M thì hết 45,0 mL. Tính phần trăm khối lượng $\\mathrm{FeSO_4 \\cdot 7H_2O}$ trong mẫu. ($M = 278$ g/mol)',
      steps: [
        '$n_{\\mathrm{KMnO_4}} = 0{,}02 \\cdot 0{,}045 = 9 \\cdot 10^{-4}$ mol.',
        '$n_{\\mathrm{Fe^{2+}}} = 5 \\cdot 9 \\cdot 10^{-4} = 4{,}5 \\cdot 10^{-3}$ mol.',
        '$m_{\\mathrm{FeSO_4 \\cdot 7H_2O}} = 4{,}5 \\cdot 10^{-3} \\cdot 278 = 1{,}251$ g.',
        'Phần trăm khối lượng: $\\dfrac{1{,}251}{1{,}39} \\cdot 100\\% = 90\\%$.',
      ],
      answer: '$90\\%$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cấu hình electron của nguyên tử Cu ($Z = 29$) là',
      options: [
        '$\\mathrm{[Ar]3d^{10}4s^1}$',
        '$\\mathrm{[Ar]3d^94s^2}$',
        '$\\mathrm{[Ar]3d^{10}4s^2}$',
        '$\\mathrm{[Ar]4s^23d^9}$',
      ],
      answer: 0,
      hints: ['Phân lớp 3d bão hoà bền hơn.'],
      solution:
        'Một electron 4s chuyển sang 3d để phân lớp 3d bão hoà: Cu là $\\mathrm{[Ar]3d^{10}4s^1}$.',
    },
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Mn^{2+}}$ ($Z_{\\mathrm{Mn}} = 25$) có bao nhiêu electron ở phân lớp 3d?',
      answer: 5,
      hints: ['Mn là $\\mathrm{[Ar]3d^54s^2}$; electron 4s bị nhường trước.'],
      solution:
        'Mn nhường 2 electron 4s: $\\mathrm{Mn^{2+}}$ là $\\mathrm{[Ar]3d^5}$, có 5 electron 3d.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào sau đây về kim loại chuyển tiếp dãy thứ nhất là đúng?',
      options: [
        'Chúng đều là nguyên tố d.',
        'Chúng tạo được hợp chất với nhiều số oxi hoá khác nhau.',
        'Ion của chúng trong dung dịch thường có màu.',
        'Chúng có nhiệt độ nóng chảy thấp hơn kim loại kiềm.',
        'Zn thuộc dãy kim loại chuyển tiếp thứ nhất.',
      ],
      answers: [0, 1, 2],
      hints: ['Dãy thứ nhất là các nguyên tố từ Sc đến Cu; so sánh Fe (1 535 °C) với K (63,4 °C).'],
      solution:
        'Các kim loại từ Sc đến Cu là nguyên tố d, có nhiều số oxi hoá, ion thường có màu. Nhiệt độ nóng chảy của chúng cao hơn nhiều so với kim loại kiềm; Zn ($Z = 30$) không thuộc dãy.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của chromium trong $\\mathrm{K_2CrO_4}$ là bao nhiêu?',
      answer: 6,
      hints: ['K là $+1$, O là $-2$, tổng số oxi hoá bằng 0.'],
      solution: '$2(+1) + x + 4(-2) = 0 \\Rightarrow x = +6$.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ 10,0 mL dung dịch $\\mathrm{FeSO_4}$ trong môi trường $\\mathrm{H_2SO_4}$ cần 8,0 mL dung dịch $\\mathrm{KMnO_4}$ 0,02 M. Tính nồng độ mol của dung dịch $\\mathrm{FeSO_4}$ (M).',
      answer: 0.08,
      tolerance: 0.0005,
      unit: 'M',
      hints: ['$n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{KMnO_4}}$; đổi thể tích ra lít.'],
      solution:
        '$n_{\\mathrm{KMnO_4}} = 0{,}02 \\cdot 0{,}008 = 1{,}6 \\cdot 10^{-4}$ mol; $n_{\\mathrm{Fe^{2+}}} = 8 \\cdot 10^{-4}$ mol; $C = \\dfrac{8 \\cdot 10^{-4}}{0{,}01} = 0{,}08$ M.',
    },
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Fe^{3+}}$ liên kết với 6 ion $\\mathrm{CN^-}$ tạo phức chất. Điện tích của phức chất là bao nhiêu?',
      answer: -3,
      hints: ['Cộng điện tích ion trung tâm với tổng điện tích 6 phối tử.'],
      solution: '$(+3) + 6 \\cdot (-1) = -3$: phức chất $\\mathrm{[Fe(CN)_6]^{3-}}$.',
    },
    {
      type: 'number',
      prompt:
        'Phức chất $\\mathrm{[Co(NH_3)_6]^{3+}}$ có bao nhiêu liên kết cho – nhận giữa nguyên tử trung tâm và phối tử?',
      answer: 6,
      hints: ['Mỗi phân tử $\\mathrm{NH_3}$ cho một cặp electron.'],
      solution:
        '6 phân tử $\\mathrm{NH_3}$ cho 6 cặp electron vào $\\mathrm{Co^{3+}}$: 6 liên kết cho – nhận.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phức chất với dạng hình học của nó.',
      left: [
        '$\\mathrm{[Co(NH_3)_6]^{3+}}$',
        '$\\mathrm{[Ni(CN)_4]^{2-}}$',
        '$\\mathrm{[Zn(NH_3)_4]^{2+}}$',
      ],
      right: ['bát diện', 'vuông phẳng', 'tứ diện', 'đường gấp khúc'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        '6 phối tử: bát diện. Với 4 phối tử, phức chất của $\\mathrm{Zn^{2+}}$ có dạng không gian, phức chất của $\\mathrm{Ni^{2+}}$ với $\\mathrm{CN^-}$ nằm trên một mặt phẳng.',
      ],
      solution:
        '$\\mathrm{[Co(NH_3)_6]^{3+}}$ bát diện, $\\mathrm{[Ni(CN)_4]^{2-}}$ vuông phẳng, $\\mathrm{[Zn(NH_3)_4]^{2+}}$ tứ diện.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phức chất với màu của nó trong dung dịch.',
      left: [
        '$\\mathrm{[Fe(H_2O)_6]^{2+}}$',
        '$\\mathrm{[Co(H_2O)_6]^{2+}}$',
        '$\\mathrm{[CuCl_4]^{2-}}$',
        '$\\mathrm{[Cr(H_2O)_6]^{3+}}$',
      ],
      right: ['lục nhạt', 'hồng đỏ', 'vàng', 'xanh tím', 'đen'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Dung dịch muối cobalt(II) có màu hồng; HCl đặc làm dung dịch $\\mathrm{CuSO_4}$ chuyển vàng.',
      ],
      solution:
        '$\\mathrm{[Fe(H_2O)_6]^{2+}}$ lục nhạt, $\\mathrm{[Co(H_2O)_6]^{2+}}$ hồng đỏ, $\\mathrm{[CuCl_4]^{2-}}$ vàng, $\\mathrm{[Cr(H_2O)_6]^{3+}}$ xanh tím.',
    },
    {
      type: 'choice',
      prompt:
        'Nhỏ từ từ đến dư dung dịch $\\mathrm{NH_3}$ vào dung dịch $\\mathrm{CuSO_4}$, hiện tượng là',
      options: [
        'xuất hiện kết tủa xanh nhạt, sau đó kết tủa tan tạo dung dịch xanh lam đậm',
        'xuất hiện kết tủa xanh nhạt, kết tủa không tan',
        'dung dịch chuyển sang màu vàng',
        'xuất hiện kết tủa nâu đỏ',
      ],
      answer: 0,
      hints: ['$\\mathrm{NH_3}$ dư thay thế các phối tử của kết tủa.'],
      solution:
        'Đầu tiên tạo kết tủa $\\mathrm{[Cu(OH)_2(H_2O)_4]}$ xanh nhạt; $\\mathrm{NH_3}$ dư hoà tan kết tủa, tạo $\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$ xanh lam đậm.',
    },
    {
      type: 'number',
      prompt:
        'Cần tối thiểu bao nhiêu mol $\\mathrm{NH_3}$ để hoà tan hết 4,305 g AgCl? (Ag = 108, Cl = 35,5)',
      answer: 0.06,
      tolerance: 0.0005,
      unit: 'mol',
      hints: ['$\\mathrm{AgCl + 2NH_3 \\longrightarrow [Ag(NH_3)_2]^+ + Cl^-}$.'],
      solution:
        '$n_{\\mathrm{AgCl}} = \\dfrac{4{,}305}{143{,}5} = 0{,}03$ mol; $n_{\\mathrm{NH_3}} = 2 \\cdot 0{,}03 = 0{,}06$ mol.',
    },
    {
      type: 'choice',
      prompt: 'Phức chất cisplatin $\\mathrm{[PtCl_2(NH_3)_2]}$ được dùng để',
      options: [
        'điều trị một số bệnh ung thư',
        'phân biệt aldehyde với ketone',
        'vận chuyển oxygen trong máu',
        'làm chất chữa cháy',
      ],
      answer: 0,
      hints: ['Đây là ứng dụng của phức chất trong y học.'],
      solution:
        'Cisplatin là thuốc điều trị ung thư. Thuốc thử Tollens phân biệt aldehyde với ketone; heme vận chuyển oxygen.',
    },
  ],
  takeaways: [
    'Dãy Sc – Cu: $\\mathrm{[Ar]3d^{1 \\div 10}4s^{1 \\div 2}}$, nhiều số oxi hoá, ion thường có màu; tạo ion thì bỏ 4s trước 3d.',
    'Phức chất $\\mathrm{[ML_n]}$: liên kết cho – nhận; điện tích = điện tích M + tổng điện tích phối tử.',
    '$\\mathrm{[ML_4]}$ tứ diện hoặc vuông phẳng, $\\mathrm{[ML_6]}$ bát diện.',
    'Phản ứng thay thế phối tử nhận ra qua kết tủa, kết tủa tan, đổi màu.',
    'Chuẩn độ $\\mathrm{Fe^{2+}}$: $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{MnO_4^-}}$; hoà tan AgCl: $n_{\\mathrm{NH_3}} = 2\\,n_{\\mathrm{AgCl}}$.',
  ],
};
