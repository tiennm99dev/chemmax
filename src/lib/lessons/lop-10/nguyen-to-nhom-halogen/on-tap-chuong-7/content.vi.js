/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 7: tính chất của đơn chất halogen, hydrogen halide và hydrohalic acid, nhận biết ion halide, sơ đồ chuyển hoá và các bài tính theo phương trình.',
  intro:
    'Chương 7 xoay quanh một quy luật: từ fluorine đến iodine, nguyên tử lớn dần nên khả năng nhận electron giảm dần, còn ion halide nhường electron dễ dần. Bài ôn tập này hệ thống lại kiến thức, cho em điền các sơ đồ chuyển hoá, luyện các bài tính sinh tự động và làm bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá các xu hướng biến đổi trong nhóm halogen.',
    'Hoàn thành được sơ đồ chuyển hoá giữa đơn chất, hydrogen halide và muối halide.',
    'Vận dụng được dung dịch $\\mathrm{AgNO_3}$ để nhận biết ion halide và tính toán theo phương trình.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Xu hướng biến đổi từ fluorine đến iodine',
          head: ['Đại lượng', 'Từ F đến I', 'Lí do'],
          rows: [
            ['Bán kính nguyên tử', 'Tăng dần', 'Số lớp electron tăng'],
            ['Độ âm điện', 'Giảm dần', 'Electron ngoài cùng xa hạt nhân hơn'],
            [
              'Nhiệt độ nóng chảy, nhiệt độ sôi của $\\mathrm{X_2}$',
              'Tăng dần',
              'Khối lượng phân tử và tương tác van der Waals tăng',
            ],
            ['Tính oxi hoá của $\\mathrm{X_2}$', 'Giảm dần', 'Khả năng nhận electron giảm'],
            ['Tính acid của HX', 'Tăng dần', 'Liên kết H–X dài ra, kém bền dần'],
            [
              'Tính khử của $\\mathrm{X^-}$',
              'Tăng dần từ $\\mathrm{Cl^-}$ đến $\\mathrm{I^-}$',
              'Bán kính ion tăng, dễ nhường electron',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Các phản ứng tiêu biểu',
          head: ['Nội dung', 'Phương trình'],
          rows: [
            [
              'Halogen với kim loại',
              '$2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}$',
            ],
            [
              'Tạo nước Javel',
              '$\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$',
            ],
            [
              'Halogen đẩy halogen',
              '$\\mathrm{Cl_2} + 2\\mathrm{NaBr} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{Br_2}$',
            ],
            [
              'Điều chế chlorine',
              '$\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}$',
            ],
            [
              'HF ăn mòn thuỷ tinh',
              '$\\mathrm{SiO_2} + 4\\mathrm{HF} \\rightarrow \\mathrm{SiF_4} + 2\\mathrm{H_2O}$',
            ],
            [
              'Nhận biết ion halide',
              '$\\mathrm{NaBr} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgBr}\\downarrow + \\mathrm{NaNO_3}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Những điểm dễ nhầm',
          text: 'HF có nhiệt độ sôi cao nhất dãy nhưng lại là acid yếu nhất. Ion $\\mathrm{F^-}$ không tạo kết tủa với $\\mathrm{AgNO_3}$. Fluorine chỉ có số oxi hoá $-1$ trong hợp chất.',
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng của chương. Đáp án là số; với số thập phân, em dùng dấu phẩy như $2{,}479$. Không cần làm tròn. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Điền sơ đồ chuyển hoá',
    instruction:
      'Chọn một sơ đồ. Mỗi mũi tên ghi thuốc thử và điều kiện; em chọn chất tạo thành cho ô đang sáng. Chọn đúng sẽ hiện phương trình, chọn sai sẽ có gợi ý.',
  },
  examples: [
    {
      problem:
        'Hoàn thành sơ đồ, viết phương trình: $\\mathrm{NaCl} \\rightarrow \\mathrm{HCl} \\rightarrow \\mathrm{Cl_2} \\rightarrow \\mathrm{NaClO}$.',
      steps: [
        'Đun NaCl rắn với $\\mathrm{H_2SO_4}$ đặc: $\\mathrm{NaCl} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{NaHSO_4} + \\mathrm{HCl}$.',
        'Cho HCl đặc tác dụng với $\\mathrm{MnO_2}$ khi đun nóng: $\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}$.',
        'Dẫn $\\mathrm{Cl_2}$ vào dung dịch NaOH ở nhiệt độ thường: $\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$.',
      ],
      answer: 'Ba phương trình như trên.',
    },
    {
      problem:
        'Hỗn hợp hai muối NaX, NaY có khối lượng $6{,}03$ g, trong đó X, Y là hai halogen ở hai chu kì liên tiếp. Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch hỗn hợp, thu được $8{,}61$ g kết tủa. Xác định X, Y và tính phần trăm khối lượng NaX, biết $Z_{\\mathrm{X}} < Z_{\\mathrm{Y}}$.',
      steps: [
        'Giả sử cả hai muối đều tạo kết tủa, gọi nguyên tử khối trung bình là $\\overline{M}$. Mỗi mol NaX chuyển thành AgX thì khối lượng tăng $108 - 23 = 85$ g, nên $n = \\dfrac{8{,}61 - 6{,}03}{85} = \\dfrac{2{,}58}{85}$ mol.',
        'Khi đó $23 + \\overline{M} \\approx 6{,}03 \\cdot \\dfrac{85}{2{,}58} \\approx 198{,}7$, suy ra $\\overline{M} \\approx 175{,}7$, lớn hơn nguyên tử khối của iodine ($127$): vô lí.',
        'Vậy chỉ có một muối tạo kết tủa, tức hai muối là NaF và NaCl. Kết tủa chỉ có AgCl: $n_{\\mathrm{AgCl}} = \\dfrac{8{,}61}{143{,}5} = 0{,}06$ mol.',
        '$m_{\\mathrm{NaCl}} = 0{,}06 \\cdot 58{,}5 = 3{,}51$ g, nên $m_{\\mathrm{NaF}} = 6{,}03 - 3{,}51 = 2{,}52$ g.',
        '$\\%m_{\\mathrm{NaF}} = \\dfrac{2{,}52}{6{,}03} \\cdot 100\\% \\approx 41{,}8\\%$.',
      ],
      answer: 'X là F, Y là Cl; $\\%m_{\\mathrm{NaF}} \\approx 41{,}8\\%$.',
    },
    {
      problem:
        'Cho $6{,}32$ g $\\mathrm{KMnO_4}$ tác dụng hết với dung dịch HCl đặc. Toàn bộ khí chlorine sinh ra được dẫn vào dung dịch NaI dư. Tính khối lượng iodine sinh ra. Biết $M_{\\mathrm{KMnO_4}} = 158$ g/mol, $M_{\\mathrm{I_2}} = 254$ g/mol.',
      steps: [
        '$n_{\\mathrm{KMnO_4}} = \\dfrac{6{,}32}{158} = 0{,}04$ mol.',
        'Từ $2\\mathrm{KMnO_4} + 16\\mathrm{HCl} \\rightarrow 2\\mathrm{KCl} + 2\\mathrm{MnCl_2} + 5\\mathrm{Cl_2} + 8\\mathrm{H_2O}$: $n_{\\mathrm{Cl_2}} = 0{,}04 \\cdot \\dfrac{5}{2} = 0{,}1$ mol.',
        'Từ $\\mathrm{Cl_2} + 2\\mathrm{NaI} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{I_2}$: $n_{\\mathrm{I_2}} = n_{\\mathrm{Cl_2}} = 0{,}1$ mol.',
        '$m_{\\mathrm{I_2}} = 0{,}1 \\cdot 254 = 25{,}4$ g.',
      ],
      answer: '$m_{\\mathrm{I_2}} = 25{,}4$ g.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Liên kết trong phân tử nào có độ phân cực lớn nhất?',
      options: ['H–F', 'H–Cl', 'H–Br', 'H–I'],
      answer: 0,
      hints: ['So sánh độ âm điện của các halogen với hydrogen.'],
      solution:
        'Fluorine có độ âm điện lớn nhất nên hiệu độ âm điện với H lớn nhất; H–F phân cực mạnh nhất.',
    },
    {
      type: 'choice',
      prompt: 'Trong nhóm halogen, từ F đến I, bán kính nguyên tử',
      options: ['tăng dần', 'giảm dần', 'không đổi', 'tăng rồi giảm'],
      answer: 0,
      hints: ['Đi xuống trong nhóm, số lớp electron thay đổi thế nào?'],
      solution: 'Số lớp electron tăng từ $2$ đến $5$, nên bán kính nguyên tử tăng dần.',
    },
    {
      type: 'choice',
      prompt:
        'Trong dãy đơn chất từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, chất có tính oxi hoá mạnh nhất là',
      options: ['$\\mathrm{F_2}$', '$\\mathrm{Cl_2}$', '$\\mathrm{Br_2}$', '$\\mathrm{I_2}$'],
      answer: 0,
      hints: ['Độ âm điện càng lớn thì khả năng nhận electron càng mạnh.'],
      solution:
        'Tính oxi hoá giảm dần từ $\\mathrm{F_2}$ đến $\\mathrm{I_2}$, nên $\\mathrm{F_2}$ mạnh nhất.',
    },
    {
      type: 'choice',
      prompt:
        'Khi điều chế khí $\\mathrm{Cl_2}$ trong phòng thí nghiệm, để khí không thoát ra ngoài, người ta nút bình thu bằng bông tẩm dung dịch nào?',
      options: ['NaOH', 'HCl', 'NaCl', '$\\mathrm{H_2SO_4}$'],
      answer: 0,
      hints: ['Chlorine tác dụng với dung dịch kiềm ở nhiệt độ thường.'],
      solution:
        'Bông tẩm NaOH giữ lại chlorine: $\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây sai?',
      options: [
        'HF có nhiệt độ sôi cao hơn HCl',
        'Hydrofluoric acid là acid mạnh nhất trong các hydrohalic acid',
        'Tính khử của $\\mathrm{I^-}$ mạnh hơn của $\\mathrm{Br^-}$',
        'Chlorine vừa là chất oxi hoá, vừa là chất khử khi tác dụng với nước',
      ],
      answer: 1,
      hints: ['Nhớ lại xu hướng tính acid từ HF đến HI.'],
      solution: 'HF là acid yếu; tính acid tăng từ HF đến HI, nên HI mới là acid mạnh nhất.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các ion theo tính khử tăng dần.',
      items: ['$\\mathrm{I^-}$', '$\\mathrm{Cl^-}$', '$\\mathrm{Br^-}$'],
      answer: [1, 2, 0],
      hints: ['Bán kính ion càng lớn thì electron càng dễ bị tách ra.'],
      solution:
        'Tính khử tăng theo bán kính ion: $\\mathrm{Cl^-} < \\mathrm{Br^-} < \\mathrm{I^-}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cặp chất với hiện tượng quan sát được.',
      left: [
        'Nước chlorine + dung dịch NaBr',
        'Nước bromine + dung dịch NaI, thêm hồ tinh bột',
        'Dung dịch $\\mathrm{AgNO_3}$ + dung dịch NaF',
        'Dung dịch $\\mathrm{AgNO_3}$ + dung dịch NaCl',
      ],
      right: [
        'Dung dịch chuyển màu vàng cam',
        'Dung dịch chuyển màu xanh tím',
        'Không có kết tủa',
        'Kết tủa trắng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hồ tinh bột dùng để phát hiện iodine.'],
      solution:
        'Chlorine đẩy bromine màu vàng cam; bromine đẩy iodine làm hồ tinh bột xanh tím; AgF tan nên không kết tủa; AgCl là kết tủa trắng.',
    },
    {
      type: 'multi',
      prompt: 'Những phản ứng nào là phản ứng oxi hoá – khử?',
      options: [
        '$\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$',
        '$\\mathrm{NaCl} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgCl} + \\mathrm{NaNO_3}$',
        '$\\mathrm{Br_2} + 2\\mathrm{NaI} \\rightarrow 2\\mathrm{NaBr} + \\mathrm{I_2}$',
        '$\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$',
      ],
      answers: [0, 2],
      hints: ['Tìm nguyên tố có số oxi hoá thay đổi ở hai vế.'],
      solution:
        'Phản ứng đầu: Cl đổi từ $0$ thành $-1$, $+1$. Phản ứng thứ ba: Br từ $0$ xuống $-1$, I từ $-1$ lên $0$. Hai phản ứng còn lại là trao đổi ion, không đổi số oxi hoá.',
    },
    {
      type: 'number',
      prompt:
        'Nước biển chứa khoảng $3{,}5\\%$ muối ăn về khối lượng. Từ $2$ tấn nước biển có thể thu được tối đa bao nhiêu kilôgam muối ăn nếu lượng muối được tách ra hết?',
      answer: 70,
      unit: 'kg',
      hints: ['$2$ tấn $= 2000$ kg.'],
      solution: 'Khối lượng muối là $2000 \\cdot \\dfrac{3{,}5}{100} = 70$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch chứa $15$ g NaI. Tính khối lượng kết tủa vàng thu được. Biết $M_{\\mathrm{NaI}} = 150$ g/mol, $M_{\\mathrm{AgI}} = 235$ g/mol.',
      answer: 23.5,
      tolerance: 0.01,
      unit: 'g',
      hints: ['NaI và AgI có cùng số mol.'],
      solution:
        '$n_{\\mathrm{NaI}} = \\dfrac{15}{150} = 0{,}1$ mol, nên $m_{\\mathrm{AgI}} = 0{,}1 \\cdot 235 = 23{,}5$ g.',
    },
    {
      type: 'number',
      prompt:
        'Khí $\\mathrm{Cl_2}$ dư tác dụng hoàn toàn với $5{,}4$ g Al. Tính khối lượng muối $\\mathrm{AlCl_3}$ thu được. Biết $M_{\\mathrm{Al}} = 27$ g/mol, $M_{\\mathrm{Cl}} = 35{,}5$ g/mol.',
      answer: 26.7,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$2\\mathrm{Al} + 3\\mathrm{Cl_2} \\rightarrow 2\\mathrm{AlCl_3}$.',
        '$M_{\\mathrm{AlCl_3}} = 27 + 3 \\cdot 35{,}5$.',
      ],
      solution:
        '$n_{\\mathrm{Al}} = \\dfrac{5{,}4}{27} = 0{,}2$ mol, nên $n_{\\mathrm{AlCl_3}} = 0{,}2$ mol. $M_{\\mathrm{AlCl_3}} = 133{,}5$ g/mol, nên $m = 0{,}2 \\cdot 133{,}5 = 26{,}7$ g.',
    },
  ],
  takeaways: [
    'Từ F đến I: bán kính tăng, độ âm điện giảm, tính oxi hoá của $\\mathrm{X_2}$ giảm, nhiệt độ sôi của $\\mathrm{X_2}$ tăng.',
    'Từ HF đến HI: tính acid tăng; nhiệt độ sôi HF cao bất thường do liên kết hydrogen.',
    'Tính khử của ion halide tăng: $\\mathrm{Cl^-} < \\mathrm{Br^-} < \\mathrm{I^-}$.',
    'Dung dịch $\\mathrm{AgNO_3}$ nhận biết được bốn ion halide: $\\mathrm{F^-}$ không kết tủa, ba ion còn lại cho kết tủa khác màu.',
  ],
};
