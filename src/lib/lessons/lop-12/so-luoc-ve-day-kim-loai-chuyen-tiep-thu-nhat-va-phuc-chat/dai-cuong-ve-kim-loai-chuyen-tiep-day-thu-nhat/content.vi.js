/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại chuyển tiếp dãy thứ nhất từ Sc đến Cu có electron hoá trị ở phân lớp 3d và 4s, nhiệt độ nóng chảy cao, cứng, nặng, dẫn điện tốt; chúng có nhiều số oxi hoá và ion thường có màu; chuẩn độ Fe2+ bằng thuốc tím và nhận biết Fe3+, Cu2+ bằng dung dịch kiềm.',
  intro:
    'Khung xe đạp bằng thép, dây điện bằng đồng, vòi nước mạ chromium, máy bay làm từ hợp kim titanium: các kim loại quen thuộc nhất trong kĩ thuật nằm cạnh nhau ở chu kì 4, từ Sc đến Cu. Vì sao chúng cứng, khó nóng chảy và tạo được những hợp chất nhiều màu sắc đến vậy?',
  objectives: [
    'Viết được cấu hình electron của nguyên tử và ion kim loại chuyển tiếp dãy thứ nhất.',
    'So sánh được tính chất vật lí của kim loại chuyển tiếp dãy thứ nhất với kim loại nhóm IA, IIA.',
    'Nêu được các số oxi hoá phổ biến và màu sắc của một số ion kim loại chuyển tiếp dãy thứ nhất.',
    'Trình bày được cách chuẩn độ $\\mathrm{Fe^{2+}}$ bằng dung dịch $\\mathrm{KMnO_4}$ và nhận biết $\\mathrm{Fe^{3+}}$, $\\mathrm{Cu^{2+}}$ bằng dung dịch kiềm.',
  ],
  sections: [
    {
      heading: 'Cấu hình electron',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại chuyển tiếp dãy thứ nhất gồm 9 nguyên tố thuộc chu kì 4, từ scandium (Sc, $Z = 21$) đến đồng (Cu, $Z = 29$). Chúng là các nguyên tố d: electron cuối cùng điền vào phân lớp 3d.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cấu hình electron chung',
          text: 'Nguyên tử kim loại chuyển tiếp dãy thứ nhất có cấu hình $\\mathrm{[Ar]3d^{1 \\div 10}4s^{1 \\div 2}}$. Electron hoá trị nằm ở cả phân lớp 3d và 4s, khác với kim loại nhóm IA, IIA cùng chu kì chỉ có electron hoá trị ở phân lớp 4s.',
        },
        {
          type: 'table',
          head: ['Nguyên tố', '$Z$', 'Cấu hình electron'],
          rows: [
            ['Sc', '21', '$\\mathrm{[Ar]3d^14s^2}$'],
            ['Ti', '22', '$\\mathrm{[Ar]3d^24s^2}$'],
            ['V', '23', '$\\mathrm{[Ar]3d^34s^2}$'],
            ['Cr', '24', '$\\mathrm{[Ar]3d^54s^1}$'],
            ['Mn', '25', '$\\mathrm{[Ar]3d^54s^2}$'],
            ['Fe', '26', '$\\mathrm{[Ar]3d^64s^2}$'],
            ['Co', '27', '$\\mathrm{[Ar]3d^74s^2}$'],
            ['Ni', '28', '$\\mathrm{[Ar]3d^84s^2}$'],
            ['Cu', '29', '$\\mathrm{[Ar]3d^{10}4s^1}$'],
          ],
          caption: 'Cấu hình electron của nguyên tử kim loại chuyển tiếp dãy thứ nhất.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hai trường hợp đặc biệt',
          text: 'Cr là $\\mathrm{[Ar]3d^54s^1}$ (không phải $\\mathrm{3d^44s^2}$) và Cu là $\\mathrm{[Ar]3d^{10}4s^1}$ (không phải $\\mathrm{3d^94s^2}$): cấu hình với phân lớp 3d bán bão hoà ($\\mathrm{d^5}$) hoặc bão hoà ($\\mathrm{d^{10}}$) bền hơn.',
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử kim loại chuyển tiếp có bán kính nhỏ hơn và có nhiều electron hoá trị (cả 3d và 4s) tham gia liên kết kim loại, nên liên kết kim loại trong tinh thể bền hơn so với kim loại nhóm IA, IIA.',
        },
        {
          type: 'table',
          head: [
            'Kim loại',
            '$t_{nc}$ (°C)',
            'Khối lượng riêng (g/cm³)',
            'Độ dẫn điện (Hg = 1)',
            'Độ cứng (kim cương = 10)',
          ],
          rows: [
            ['K', '63,4', '0,89', '13,3', '0,4'],
            ['Ca', '842', '1,55', '28,5', '1,75'],
            ['Fe', '1 535', '7,86', '10', '4'],
            ['Cu', '1 084', '8,96', '57,1', '3'],
          ],
          caption:
            'So sánh một số tính chất vật lí của K, Ca (nguyên tố s) với Fe, Cu (nguyên tố d).',
        },
        {
          type: 'table',
          head: ['Kim loại', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu'],
          rows: [
            [
              '$t_{nc}$ (°C)',
              '1 541',
              '1 668',
              '1 910',
              '1 907',
              '1 246',
              '1 535',
              '1 495',
              '1 455',
              '1 084',
            ],
            ['D (g/cm³)', '2,99', '4,51', '6,11', '7,19', '7,44', '7,86', '8,90', '8,91', '8,96'],
          ],
          caption: 'Nhiệt độ nóng chảy và khối lượng riêng của kim loại chuyển tiếp dãy thứ nhất.',
        },
        {
          type: 'list',
          items: [
            'Nhiệt độ nóng chảy cao (phần lớn trên 1 000 °C), độ cứng lớn: Cr là kim loại cứng nhất.',
            'Khá nặng: trừ Sc và Ti là kim loại nhẹ ($D < 5$ g/cm³), các kim loại còn lại là kim loại nặng.',
            'Dẫn điện, dẫn nhiệt tốt; Cu dẫn điện tốt nhất trong dãy.',
          ],
        },
      ],
    },
    {
      heading: 'Số oxi hoá và màu sắc của ion',
      blocks: [
        {
          type: 'p',
          text: 'Do có nhiều electron hoá trị ở phân lớp 3d và 4s, kim loại chuyển tiếp dãy thứ nhất tạo được hợp chất với nhiều số oxi hoá khác nhau.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tạo ion',
          text: 'Khi tham gia phản ứng, nguyên tử kim loại chuyển tiếp dãy thứ nhất ưu tiên nhường electron ở phân lớp 4s trước, rồi mới đến electron ở phân lớp 3d. Ví dụ: $\\mathrm{Fe\\,([Ar]3d^64s^2)} \\to \\mathrm{Fe^{2+}\\,([Ar]3d^6)} \\to \\mathrm{Fe^{3+}\\,([Ar]3d^5)}$.',
        },
        {
          type: 'table',
          head: ['Nguyên tố', 'Số oxi hoá thường gặp', 'Ví dụ'],
          rows: [
            ['Sc', '$+3$', '$\\mathrm{Sc_2O_3}$'],
            ['Ti', '$+2, +3, +4$', '$\\mathrm{TiO_2}$'],
            ['V', '$+2, +3, +4, +5$', '$\\mathrm{V_2O_5}$'],
            ['Cr', '$+2, +3, +6$', '$\\mathrm{Cr_2O_3}$, $\\mathrm{K_2Cr_2O_7}$'],
            [
              'Mn',
              '$+2, +4, +6, +7$',
              '$\\mathrm{MnO_2}$, $\\mathrm{K_2MnO_4}$, $\\mathrm{KMnO_4}$',
            ],
            ['Fe', '$+2, +3$', '$\\mathrm{FeSO_4}$, $\\mathrm{Fe_2O_3}$'],
            ['Co', '$+2, +3$', '$\\mathrm{CoCl_2}$'],
            ['Ni', '$+2$', '$\\mathrm{NiSO_4}$'],
            ['Cu', '$+1, +2$', '$\\mathrm{Cu_2O}$, $\\mathrm{CuSO_4}$'],
          ],
          caption: 'Một số số oxi hoá phổ biến.',
        },
        {
          type: 'p',
          text: 'Ion kim loại chuyển tiếp dãy thứ nhất trong dung dịch thường có màu, nhờ đó có thể nhận biết chúng. Ion có phân lớp 3d trống ($\\mathrm{Sc^{3+}}$) hoặc đã bão hoà ($\\mathrm{Zn^{2+}}$, $\\mathrm{Cu^{+}}$) thường không màu.',
        },
        {
          type: 'table',
          head: ['Ion', 'Cấu hình', 'Màu trong dung dịch'],
          rows: [
            ['$\\mathrm{Sc^{3+}}$', '$\\mathrm{[Ar]}$', 'không màu'],
            ['$\\mathrm{Ti^{3+}}$', '$\\mathrm{[Ar]3d^1}$', 'tím'],
            ['$\\mathrm{V^{3+}}$', '$\\mathrm{[Ar]3d^2}$', 'xanh lục'],
            ['$\\mathrm{Cr^{3+}}$', '$\\mathrm{[Ar]3d^3}$', 'xanh tím'],
            ['$\\mathrm{Mn^{2+}}$', '$\\mathrm{[Ar]3d^5}$', 'hồng nhạt'],
            ['$\\mathrm{Fe^{2+}}$', '$\\mathrm{[Ar]3d^6}$', 'lục nhạt'],
            ['$\\mathrm{Fe^{3+}}$', '$\\mathrm{[Ar]3d^5}$', 'vàng nhạt'],
            ['$\\mathrm{Co^{2+}}$', '$\\mathrm{[Ar]3d^7}$', 'hồng đỏ'],
            ['$\\mathrm{Ni^{2+}}$', '$\\mathrm{[Ar]3d^8}$', 'xanh lục'],
            ['$\\mathrm{Cu^{2+}}$', '$\\mathrm{[Ar]3d^9}$', 'xanh lam'],
          ],
          caption: 'Màu của một số ion kim loại chuyển tiếp dãy thứ nhất trong dung dịch nước.',
        },
      ],
    },
    {
      heading: 'Chuẩn độ Fe(II) và nhận biết ion',
      blocks: [
        {
          type: 'p',
          text: 'Ion $\\mathrm{Fe^{2+}}$ có tính khử, bị ion $\\mathrm{MnO_4^-}$ (màu tím) oxi hoá trong môi trường acid. Dựa vào phản ứng này có thể xác định nồng độ dung dịch $\\mathrm{FeSO_4}$ bằng dung dịch $\\mathrm{KMnO_4}$ đã biết nồng độ:',
        },
        {
          type: 'tex',
          tex: '10\\mathrm{FeSO_4} + 2\\mathrm{KMnO_4} + 8\\mathrm{H_2SO_4} \\longrightarrow 5\\mathrm{Fe_2(SO_4)_3} + \\mathrm{K_2SO_4} + 2\\mathrm{MnSO_4} + 8\\mathrm{H_2O}',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lấy chính xác một thể tích dung dịch $\\mathrm{FeSO_4}$ vào bình tam giác, thêm dung dịch $\\mathrm{H_2SO_4}$ loãng.',
            'Nhỏ từ từ dung dịch $\\mathrm{KMnO_4}$ từ burette vào bình, lắc đều: màu tím của thuốc tím mất ngay khi rơi vào dung dịch.',
            'Dừng chuẩn độ khi dung dịch chuyển sang màu hồng nhạt bền khoảng 20 giây (đã dư một giọt $\\mathrm{KMnO_4}$). Ghi thể tích, làm lại 3 lần và lấy giá trị trung bình.',
            'Tính: $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{MnO_4^-}}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhận biết ion bằng dung dịch kiềm',
          text: 'Ion kim loại chuyển tiếp được nhận biết qua màu của ion, của hợp chất ít tan hoặc của phức chất. Nhỏ dung dịch NaOH vào: $\\mathrm{Fe^{3+}} + 3\\mathrm{OH^-} \\longrightarrow \\mathrm{Fe(OH)_3}\\downarrow$ (nâu đỏ); $\\mathrm{Cu^{2+}} + 2\\mathrm{OH^-} \\longrightarrow \\mathrm{Cu(OH)_2}\\downarrow$ (xanh).',
        },
      ],
    },
  ],
  explore: {
    title: 'Dải kim loại Sc – Cu',
    instruction:
      'Bấm vào từng nguyên tố để xem cấu hình electron và tính chất vật lí, rồi chọn một số oxi hoá để thấy cấu hình của ion và màu của một ion hoặc hợp chất tiêu biểu. Ở chế độ "Đếm electron 3d", hãy cho biết mỗi ion còn bao nhiêu electron 3d.',
  },
  examples: [
    {
      problem:
        'Viết cấu hình electron của Fe ($Z = 26$), $\\mathrm{Fe^{2+}}$ và $\\mathrm{Fe^{3+}}$.',
      steps: [
        'Fe có 26 electron: $\\mathrm{1s^22s^22p^63s^23p^63d^64s^2}$, viết gọn $\\mathrm{[Ar]3d^64s^2}$.',
        'Tạo $\\mathrm{Fe^{2+}}$: nhường 2 electron 4s trước, được $\\mathrm{[Ar]3d^6}$.',
        'Tạo $\\mathrm{Fe^{3+}}$: nhường thêm 1 electron 3d, được $\\mathrm{[Ar]3d^5}$ (phân lớp 3d bán bão hoà).',
      ],
      answer:
        '$\\mathrm{Fe: [Ar]3d^64s^2}$; $\\mathrm{Fe^{2+}: [Ar]3d^6}$; $\\mathrm{Fe^{3+}: [Ar]3d^5}$.',
    },
    {
      problem:
        'Xác định số oxi hoá của chromium trong $\\mathrm{K_2Cr_2O_7}$ và của manganese trong $\\mathrm{KMnO_4}$.',
      steps: [
        'Trong hợp chất, K có số oxi hoá $+1$, O có số oxi hoá $-2$; tổng số oxi hoá trong phân tử bằng 0.',
        '$\\mathrm{K_2Cr_2O_7}$: $2(+1) + 2x + 7(-2) = 0 \\Rightarrow x = +6$.',
        '$\\mathrm{KMnO_4}$: $(+1) + y + 4(-2) = 0 \\Rightarrow y = +7$.',
      ],
      answer: 'Cr có số oxi hoá $+6$; Mn có số oxi hoá $+7$.',
    },
    {
      problem:
        'Chuẩn độ 10,0 mL dung dịch $\\mathrm{FeSO_4}$ (môi trường $\\mathrm{H_2SO_4}$) bằng dung dịch $\\mathrm{KMnO_4}$ 0,02 M. Ba lần chuẩn độ dùng hết 9,4 mL; 9,5 mL; 9,6 mL dung dịch $\\mathrm{KMnO_4}$. Tính nồng độ mol của dung dịch $\\mathrm{FeSO_4}$.',
      steps: [
        'Thể tích trung bình: $V = \\dfrac{9{,}4 + 9{,}5 + 9{,}6}{3} = 9{,}5$ mL.',
        '$n_{\\mathrm{KMnO_4}} = 0{,}02 \\cdot 0{,}0095 = 1{,}9 \\cdot 10^{-4}$ mol.',
        'Theo phương trình, $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{KMnO_4}} = 9{,}5 \\cdot 10^{-4}$ mol.',
        '$C_{\\mathrm{FeSO_4}} = \\dfrac{9{,}5 \\cdot 10^{-4}}{0{,}010} = 0{,}095$ M.',
      ],
      answer: '$C_{\\mathrm{FeSO_4}} = 0{,}095$ M.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tố nào sau đây không thuộc dãy kim loại chuyển tiếp thứ nhất?',
      options: ['Zn', 'Sc', 'Fe', 'Cu'],
      answer: 0,
      hints: ['Dãy thứ nhất gồm 9 nguyên tố, từ $Z = 21$ đến $Z = 29$.'],
      solution:
        'Dãy kim loại chuyển tiếp thứ nhất gồm các nguyên tố từ Sc ($Z = 21$) đến Cu ($Z = 29$). Zn có $Z = 30$ nên không thuộc dãy này.',
    },
    {
      type: 'choice',
      prompt: 'Cấu hình electron của nguyên tử Cr ($Z = 24$) là',
      options: [
        '$\\mathrm{[Ar]3d^54s^1}$',
        '$\\mathrm{[Ar]3d^44s^2}$',
        '$\\mathrm{[Ar]3d^6}$',
        '$\\mathrm{[Ar]4s^24p^4}$',
      ],
      answer: 0,
      hints: ['Cr là một trường hợp đặc biệt: phân lớp 3d bán bão hoà bền hơn.'],
      solution:
        'Một electron 4s chuyển sang 3d để phân lớp 3d bán bão hoà ($\\mathrm{d^5}$): Cr là $\\mathrm{[Ar]3d^54s^1}$.',
    },
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Fe^{3+}}$ ($Z_{\\mathrm{Fe}} = 26$) có bao nhiêu electron ở phân lớp 3d?',
      answer: 5,
      hints: [
        'Fe là $\\mathrm{[Ar]3d^64s^2}$.',
        'Electron 4s bị nhường trước, sau đó mới đến electron 3d.',
      ],
      solution:
        'Fe ($\\mathrm{[Ar]3d^64s^2}$) nhường 2 electron 4s và 1 electron 3d, nên $\\mathrm{Fe^{3+}}$ là $\\mathrm{[Ar]3d^5}$: có 5 electron 3d.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của manganese trong $\\mathrm{K_2MnO_4}$ là bao nhiêu?',
      answer: 6,
      hints: ['K có số oxi hoá $+1$, O có số oxi hoá $-2$, tổng bằng 0.'],
      solution: '$2(+1) + x + 4(-2) = 0 \\Rightarrow x = +6$.',
    },
    {
      type: 'multi',
      prompt:
        'Kim loại nặng có khối lượng riêng $D \\geq 5$ g/cm³. Những kim loại nào sau đây là kim loại nặng?',
      options: ['V', 'Fe', 'Cu', 'Sc', 'Ti'],
      answers: [0, 1, 2],
      hints: [
        'Xem bảng khối lượng riêng của dãy Sc – Cu: chỉ có hai kim loại đầu dãy là kim loại nhẹ.',
      ],
      solution:
        'V (6,11), Fe (7,86), Cu (8,96 g/cm³) là kim loại nặng; Sc (2,99) và Ti (4,51 g/cm³) là kim loại nhẹ.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi ion với màu của nó trong dung dịch nước.',
      left: [
        '$\\mathrm{Cu^{2+}}$',
        '$\\mathrm{Fe^{3+}}$',
        '$\\mathrm{Mn^{2+}}$',
        '$\\mathrm{Sc^{3+}}$',
      ],
      right: ['xanh lam', 'vàng nhạt', 'hồng nhạt', 'không màu', 'đỏ nâu'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Dung dịch $\\mathrm{CuSO_4}$ có màu xanh quen thuộc; ion có phân lớp 3d trống không màu.',
      ],
      solution:
        '$\\mathrm{Cu^{2+}}$ xanh lam, $\\mathrm{Fe^{3+}}$ vàng nhạt, $\\mathrm{Mn^{2+}}$ hồng nhạt, $\\mathrm{Sc^{3+}}$ ($\\mathrm{[Ar]}$, không có electron 3d) không màu.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ 5,0 mL dung dịch $\\mathrm{FeSO_4}$ trong môi trường $\\mathrm{H_2SO_4}$ cần trung bình 4,8 mL dung dịch $\\mathrm{KMnO_4}$ 0,02 M. Tính nồng độ mol của dung dịch $\\mathrm{FeSO_4}$ (M).',
      answer: 0.096,
      tolerance: 0.0005,
      unit: 'M',
      hints: [
        '$n_{\\mathrm{KMnO_4}} = C \\cdot V$ với $V$ tính bằng lít.',
        '$n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{KMnO_4}}$.',
      ],
      solution:
        '$n_{\\mathrm{KMnO_4}} = 0{,}02 \\cdot 0{,}0048 = 9{,}6 \\cdot 10^{-5}$ mol; $n_{\\mathrm{Fe^{2+}}} = 5 \\cdot 9{,}6 \\cdot 10^{-5} = 4{,}8 \\cdot 10^{-4}$ mol; $C = \\dfrac{4{,}8 \\cdot 10^{-4}}{0{,}005} = 0{,}096$ M.',
    },
    {
      type: 'choice',
      prompt: 'Nhỏ dung dịch NaOH vào dung dịch $\\mathrm{FeCl_3}$, hiện tượng quan sát được là',
      options: [
        'xuất hiện kết tủa nâu đỏ',
        'xuất hiện kết tủa xanh',
        'xuất hiện kết tủa trắng hơi xanh',
        'không có hiện tượng gì',
      ],
      answer: 0,
      hints: ['Ion $\\mathrm{Fe^{3+}}$ kết hợp với $\\mathrm{OH^-}$ tạo hydroxide ít tan.'],
      solution:
        '$\\mathrm{FeCl_3} + 3\\mathrm{NaOH} \\longrightarrow \\mathrm{Fe(OH)_3}\\downarrow + 3\\mathrm{NaCl}$: kết tủa $\\mathrm{Fe(OH)_3}$ màu nâu đỏ. Kết tủa xanh là $\\mathrm{Cu(OH)_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao kim loại chuyển tiếp dãy thứ nhất có nhiều số oxi hoá khác nhau?',
      options: [
        'Vì có nhiều electron hoá trị ở cả phân lớp 3d và 4s',
        'Vì chỉ có electron hoá trị ở phân lớp 4s',
        'Vì có bán kính nguyên tử rất lớn',
        'Vì có khối lượng riêng lớn',
      ],
      answer: 0,
      hints: ['Số oxi hoá phụ thuộc số electron mà nguyên tử có thể nhường.'],
      solution:
        'Electron hoá trị nằm ở cả phân lớp 3d và 4s, nên nguyên tử có thể nhường số electron khác nhau, tạo hợp chất với nhiều số oxi hoá.',
    },
  ],
  takeaways: [
    'Dãy thứ nhất: Sc đến Cu, cấu hình $\\mathrm{[Ar]3d^{1 \\div 10}4s^{1 \\div 2}}$; đặc biệt Cr $\\mathrm{3d^54s^1}$, Cu $\\mathrm{3d^{10}4s^1}$.',
    'Nhiệt độ nóng chảy cao, cứng, khá nặng, dẫn điện và dẫn nhiệt tốt hơn kim loại nhóm IA, IIA.',
    'Có nhiều số oxi hoá; khi tạo ion, electron 4s bị nhường trước electron 3d.',
    'Ion thường có màu: $\\mathrm{Cu^{2+}}$ xanh lam, $\\mathrm{Fe^{3+}}$ vàng nhạt, $\\mathrm{Fe^{2+}}$ lục nhạt, $\\mathrm{Mn^{2+}}$ hồng nhạt.',
    'Chuẩn độ: $n_{\\mathrm{Fe^{2+}}} = 5\\,n_{\\mathrm{MnO_4^-}}$; NaOH cho kết tủa $\\mathrm{Fe(OH)_3}$ nâu đỏ, $\\mathrm{Cu(OH)_2}$ xanh.',
  ],
};
