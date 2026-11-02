/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 2: hệ thống hoá các hợp chất của nitrogen và sulfur, sơ đồ chuyển hoá, nhận biết ion, tính toán theo phương trình và các vấn đề môi trường.',
  intro:
    'Sau chương này, từ khí trơ $\\mathrm{N_2}$ trong không khí đến phân đạm, từ sulfur vàng đến sulfuric acid đều nối với nhau bằng những phản ứng em đã học. Bài ôn tập này gom lại thành hai sơ đồ chuyển hoá, luyện cách suy ra chất còn thiếu từ số oxi hoá và tính toán theo phương trình.',
  objectives: [
    'Lập được sơ đồ hệ thống hoá kiến thức về nitrogen, sulfur và các hợp chất quan trọng của chúng.',
    'Giải thích được tính oxi hoá, tính khử của các chất dựa vào số oxi hoá của N và S.',
    'Vận dụng được tính toán theo phương trình, biến thiên enthalpy và các kiến thức về mưa acid, phú dưỡng.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Nitrogen và hợp chất',
          head: ['Chất', 'Số oxi hoá của N', 'Ghi nhớ'],
          rows: [
            [
              '$\\mathrm{N_2}$',
              '$0$',
              'Liên kết ba $\\mathrm{N \\equiv N}$ rất bền nên khá trơ ở nhiệt độ thường; ở nhiệt độ cao vừa oxi hoá ($\\mathrm{H_2}$), vừa khử ($\\mathrm{O_2}$)',
            ],
            [
              '$\\mathrm{NH_3}$',
              '$-3$',
              'Chóp tam giác, tan nhiều trong nước; base yếu, có tính khử; tổng hợp bằng quá trình Haber',
            ],
            [
              '$\\mathrm{NH_4^+}$',
              '$-3$',
              'Muối dễ tan, kém bền nhiệt; đun với kiềm tạo khí $\\mathrm{NH_3}$',
            ],
            [
              'NO, $\\mathrm{NO_2}$',
              '$+2$, $+4$',
              'NO không màu, hoá nâu đỏ thành $\\mathrm{NO_2}$ trong không khí; tác nhân gây mưa acid',
            ],
            [
              '$\\mathrm{HNO_3}$',
              '$+5$',
              'Acid mạnh, oxi hoá mạnh: đặc thường tạo $\\mathrm{NO_2}$, loãng thường tạo NO; Al, Fe, Cr thụ động trong acid đặc, nguội',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Sulfur và hợp chất',
          head: ['Chất', 'Số oxi hoá của S', 'Ghi nhớ'],
          rows: [
            [
              'S',
              '$0$',
              'Chất oxi hoá với kim loại và $\\mathrm{H_2}$; chất khử với $\\mathrm{O_2}$, $\\mathrm{F_2}$',
            ],
            [
              '$\\mathrm{SO_2}$',
              '$+4$',
              'Oxide acid; vừa có tính khử (làm mất màu nước bromine, thuốc tím), vừa có tính oxi hoá; tác nhân gây mưa acid',
            ],
            [
              '$\\mathrm{H_2SO_4}$ loãng',
              '$+6$',
              'Acid mạnh; tác dụng với kim loại đứng trước H tạo $\\mathrm{H_2}$',
            ],
            [
              '$\\mathrm{H_2SO_4}$ đặc',
              '$+6$',
              'Háo nước, oxi hoá mạnh, thường tạo $\\mathrm{SO_2}$; Al, Fe, Cr thụ động khi nguội. Pha loãng: rót từ từ acid vào nước',
            ],
            [
              '$\\mathrm{SO_4^{2-}}$',
              '$+6$',
              'Nhận biết bằng ion $\\mathrm{Ba^{2+}}$: kết tủa trắng $\\mathrm{BaSO_4}$, không tan trong acid',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đọc tính chất từ số oxi hoá',
          text: 'N hoặc S ở mức thấp nhất ($-3$, $-2$) chỉ có thể tăng số oxi hoá, nên chất có tính khử. Ở mức cao nhất ($+5$, $+6$), chất có tính oxi hoá. Ở mức trung gian ($\\mathrm{N_2}$, NO, S, $\\mathrm{SO_2}$), chất có cả hai tính.',
        },
      ],
    },
    {
      heading: 'Vấn đề môi trường',
      blocks: [
        {
          type: 'table',
          head: ['Vấn đề', 'Nguyên nhân', 'Biện pháp'],
          rows: [
            [
              'Mưa acid (pH $< 5{,}6$)',
              '$\\mathrm{NO_x}$ và $\\mathrm{SO_2}$ từ đốt nhiên liệu, luyện kim, chuyển thành $\\mathrm{HNO_3}$ và $\\mathrm{H_2SO_4}$ trong khí quyển',
              'Dùng nhiên liệu ít sulfur, xử lí khí thải (hấp thụ $\\mathrm{SO_2}$ bằng vôi), chuyển sang năng lượng tái tạo',
            ],
            [
              'Phú dưỡng',
              'Thừa N, P từ phân bón và nước thải: tảo phát triển quá mức, thiếu oxygen hoà tan, cá chết',
              'Xử lí nước thải, bón phân đúng liều lượng, tạo lưu thông cho nước',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi kĩ năng tính toán của chương. Đáp án là số, dùng dấu phẩy thập phân như $2{,}479$. Ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar), thể tích mol khí là $24{,}79$ L/mol.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Điền chất còn thiếu vào sơ đồ chuyển hoá',
    instruction:
      'Mỗi lượt có $3$ ô dấu hỏi. Đọc chất phản ứng và điều kiện trên các mũi tên, rồi chọn chất phù hợp cho từng ô. Chọn sai, em sẽ biết vì sao. Điền xong, bấm từng chất để đọc phương trình, rồi đổi ô trống hoặc sang sơ đồ của sulfur.',
  },
  examples: [
    {
      problem:
        'Giai đoạn đầu của quá trình Ostwald: $\\mathrm{4NH_3(g)} + \\mathrm{5O_2(g)} \\rightarrow \\mathrm{4NO(g)} + \\mathrm{6H_2O(g)}$. a) Tính $\\Delta_r H^\\circ_{298}$, biết $\\Delta_f H^\\circ_{298}$ của $\\mathrm{NH_3(g)}$, NO(g), $\\mathrm{H_2O(g)}$ lần lượt là $-45{,}9$; $90{,}3$; $-241{,}8$ kJ/mol. b) Tính năng lượng liên kết trong phân tử NO, biết $E_{\\mathrm{N-H}} = 386$, $E_{\\mathrm{O=O}} = 494$, $E_{\\mathrm{O-H}} = 459$ kJ/mol.',
      steps: [
        'a) $\\Delta_r H^\\circ_{298} = 4 \\cdot 90{,}3 + 6 \\cdot (-241{,}8) - 4 \\cdot (-45{,}9) - 5 \\cdot 0 = -906$ kJ.',
        'Giá trị âm nên phản ứng toả nhiệt. Sau khi khơi mào, nhiệt toả ra giúp duy trì phản ứng mà không cần đun nóng liên tục.',
        'b) Mỗi $\\mathrm{NH_3}$ có $3$ liên kết N–H, mỗi $\\mathrm{H_2O}$ có $2$ liên kết O–H. Khi đó $-906 = 4 \\cdot 3 \\cdot 386 + 5 \\cdot 494 - 4E_{\\mathrm{NO}} - 6 \\cdot 2 \\cdot 459$.',
        'Tức là $-906 = 1594 - 4E_{\\mathrm{NO}}$, nên $E_{\\mathrm{NO}} = \\dfrac{2500}{4} = 625$ kJ/mol.',
      ],
      answer: 'a) $-906$ kJ, phản ứng toả nhiệt; b) $E_{\\mathrm{NO}} = 625$ kJ/mol.',
    },
    {
      problem:
        'Hoà tan hết $12$ g hỗn hợp Fe và Cu có số mol bằng nhau trong dung dịch $\\mathrm{H_2SO_4}$ đặc, nóng, dư. Tính thể tích khí $\\mathrm{SO_2}$ (sản phẩm khử duy nhất) ở điều kiện chuẩn.',
      steps: [
        'Gọi số mol mỗi kim loại là $x$: $56x + 64x = 12$, nên $x = 0{,}1$ mol.',
        '$\\mathrm{2Fe} + \\mathrm{6H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + \\mathrm{3SO_2} + \\mathrm{6H_2O}$ cho $0{,}15$ mol $\\mathrm{SO_2}$.',
        '$\\mathrm{Cu} + \\mathrm{2H_2SO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{SO_2} + \\mathrm{2H_2O}$ cho $0{,}1$ mol $\\mathrm{SO_2}$.',
        'Tổng $0{,}25$ mol, nên $V = 0{,}25 \\cdot 24{,}79 \\approx 6{,}2$ L.',
      ],
      answer: '$V \\approx 6{,}2$ L $\\mathrm{SO_2}$.',
    },
    {
      problem:
        'Một nhà máy đốt $1000$ tấn than chứa $1{,}6\\%$ sulfur về khối lượng và dùng CaO hấp thụ $80\\%$ lượng $\\mathrm{SO_2}$ sinh ra theo phản ứng $\\mathrm{SO_2} + \\mathrm{CaO} \\rightarrow \\mathrm{CaSO_3}$. Tính khối lượng CaO cần dùng.',
      steps: [
        'Khối lượng S: $1000 \\cdot 1{,}6\\% = 16$ tấn.',
        'Theo tỉ lệ: $\\mathrm{S} \\to \\mathrm{SO_2} \\to \\mathrm{CaO}$, cứ $32$ tấn S ứng với $56$ tấn CaO.',
        'Lượng CaO cần: $16 \\cdot \\dfrac{56}{32} \\cdot 80\\% = 22{,}4$ tấn.',
      ],
      answer: '$22{,}4$ tấn CaO.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'So sánh $\\mathrm{NH_3}$ và $\\mathrm{NH_4^+}$, nhận định nào đúng?',
      options: [
        'Nguyên tử N đều có số oxi hoá $-3$',
        'Đều chứa liên kết ion',
        'Đều có tính acid yếu',
        'Đều có tính base yếu',
      ],
      answer: 0,
      hints: ['Tính số oxi hoá của N, nhớ H có số oxi hoá $+1$ và điện tích của ion.'],
      solution:
        'Trong $\\mathrm{NH_3}$: $x + 3 = 0$; trong $\\mathrm{NH_4^+}$: $x + 4 = 1$. Cả hai đều cho $x = -3$. Liên kết N–H là cộng hoá trị; $\\mathrm{NH_3}$ là base yếu còn $\\mathrm{NH_4^+}$ là acid yếu.',
    },
    {
      type: 'choice',
      prompt: 'Ammonia đóng vai trò chất khử khi tác dụng với chất nào?',
      options: [
        '$\\mathrm{O_2}$ (Pt, $t^\\circ$)',
        '$\\mathrm{H_2O}$',
        'HCl',
        '$\\mathrm{H_3PO_4}$',
      ],
      answer: 0,
      hints: ['Chất khử phải có số oxi hoá tăng. Phản ứng với acid chỉ là nhận proton.'],
      solution:
        'Trong $\\mathrm{4NH_3} + \\mathrm{5O_2} \\rightarrow \\mathrm{4NO} + \\mathrm{6H_2O}$, số oxi hoá của N tăng từ $-3$ lên $+2$. Với $\\mathrm{H_2O}$ và các acid, $\\mathrm{NH_3}$ đóng vai trò base.',
    },
    {
      type: 'choice',
      prompt:
        'Cho chất rắn nào vào dung dịch $\\mathrm{H_2SO_4}$ đặc thì xảy ra phản ứng oxi hoá – khử?',
      options: ['KBr', 'NaCl', '$\\mathrm{CaF_2}$', '$\\mathrm{CaCO_3}$'],
      answer: 0,
      hints: ['Tìm anion có tính khử đủ mạnh để bị acid đặc oxi hoá.'],
      solution:
        'Ion $\\mathrm{Br^-}$ bị acid đặc oxi hoá: $\\mathrm{2KBr} + \\mathrm{2H_2SO_4} \\rightarrow \\mathrm{K_2SO_4} + \\mathrm{Br_2} + \\mathrm{SO_2} + \\mathrm{2H_2O}$. NaCl và $\\mathrm{CaF_2}$ chỉ tạo HCl, HF; $\\mathrm{CaCO_3}$ chỉ tạo $\\mathrm{CO_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Khi pha loãng sulfuric acid đặc, thao tác nào bảo đảm an toàn?',
      options: [
        'Rót từ từ acid vào nước, vừa rót vừa khuấy',
        'Rót nhanh acid vào nước',
        'Rót từ từ nước vào acid',
        'Rót nhanh nước vào acid',
      ],
      answer: 0,
      hints: ['Acid đặc nặng hơn nước và toả nhiệt rất mạnh khi tan.'],
      solution:
        'Rót từ từ acid vào nước và khuấy đều để nhiệt toả ra được nước hấp thụ dần. Nếu rót nước vào acid, nước nổi trên mặt, sôi đột ngột và bắn acid ra ngoài.',
    },
    {
      type: 'multi',
      prompt:
        'Xét theo số oxi hoá của N hoặc S, những chất nào vừa có thể thể hiện tính oxi hoá, vừa có thể thể hiện tính khử?',
      options: [
        '$\\mathrm{N_2}$',
        '$\\mathrm{SO_2}$',
        'S',
        '$\\mathrm{HNO_3}$',
        '$\\mathrm{H_2SO_4}$',
        '$\\mathrm{NH_3}$',
      ],
      answers: [0, 1, 2],
      hints: ['Tìm chất có N hoặc S ở mức trung gian, không phải cao nhất hay thấp nhất.'],
      solution:
        '$\\mathrm{N_2}$ ($0$), $\\mathrm{SO_2}$ ($+4$) và S ($0$) ở mức trung gian. $\\mathrm{HNO_3}$ ($+5$) và $\\mathrm{H_2SO_4}$ ($+6$) ở mức cao nhất; $\\mathrm{NH_3}$ ($-3$) ở mức thấp nhất.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chất cần nhận biết với thuốc thử và hiện tượng đúng.',
      left: [
        'Ion $\\mathrm{NH_4^+}$',
        'Ion $\\mathrm{SO_4^{2-}}$',
        'Khí $\\mathrm{SO_2}$',
        'Khí NO',
      ],
      right: [
        'Đun với kiềm: khí mùi khai làm quỳ tím ẩm hoá xanh',
        'Dung dịch $\\mathrm{BaCl_2}$: kết tủa trắng không tan trong acid',
        'Nước bromine: mất màu',
        'Không khí: hoá nâu đỏ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Khí nào có tính khử làm mất màu nước bromine? Khí nào gặp oxygen thì đổi màu?'],
      solution:
        '$\\mathrm{NH_4^+}$ tạo $\\mathrm{NH_3}$ với kiềm; $\\mathrm{SO_4^{2-}}$ tạo $\\mathrm{BaSO_4}$; $\\mathrm{SO_2}$ khử bromine; NO bị oxygen oxi hoá thành $\\mathrm{NO_2}$ màu nâu đỏ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo số oxi hoá của N tăng dần.',
      items: ['$\\mathrm{NH_3}$', '$\\mathrm{N_2}$', 'NO', '$\\mathrm{NO_2}$', '$\\mathrm{HNO_3}$'],
      answer: [0, 1, 2, 3, 4],
      hints: ['Tính số oxi hoá của N trong từng chất, với H là $+1$ và O là $-2$.'],
      solution:
        '$\\mathrm{NH_3}$ ($-3$), $\\mathrm{N_2}$ ($0$), NO ($+2$), $\\mathrm{NO_2}$ ($+4$), $\\mathrm{HNO_3}$ ($+5$).',
    },
    {
      type: 'number',
      prompt:
        'Tính $\\Delta_r H^\\circ_{298}$ của phản ứng $\\mathrm{2SO_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2SO_3(g)}$, theo kJ, biết $\\Delta_f H^\\circ_{298}$ của $\\mathrm{SO_2(g)}$ và $\\mathrm{SO_3(g)}$ lần lượt là $-296{,}8$ và $-395{,}7$ kJ/mol.',
      answer: -197.8,
      tolerance: 0.05,
      unit: 'kJ',
      hints: [
        'Tổng enthalpy tạo thành của sản phẩm trừ đi của chất đầu; đơn chất $\\mathrm{O_2}$ bằng $0$.',
      ],
      solution:
        '$\\Delta_r H^\\circ_{298} = 2 \\cdot (-395{,}7) - 2 \\cdot (-296{,}8) - 0 = -197{,}8$ kJ, phản ứng toả nhiệt.',
    },
    {
      type: 'number',
      prompt:
        'Cho $9{,}6$ g Cu tác dụng hết với dung dịch $\\mathrm{HNO_3}$ loãng, dư. Tính thể tích khí NO duy nhất ở điều kiện chuẩn, theo L.',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$\\mathrm{3Cu} + \\mathrm{8HNO_3} \\rightarrow \\mathrm{3Cu(NO_3)_2} + \\mathrm{2NO} + \\mathrm{4H_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{Cu}} = 0{,}15$ mol nên $n_{\\mathrm{NO}} = \\dfrac{2}{3} \\cdot 0{,}15 = 0{,}1$ mol và $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Hấp thụ hết $4{,}958$ L khí $\\mathrm{NH_3}$ (điều kiện chuẩn) vào dung dịch $\\mathrm{H_2SO_4}$ dư. Tính khối lượng $\\mathrm{(NH_4)_2SO_4}$ tạo thành, theo g.',
      answer: 13.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{2NH_3} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{(NH_4)_2SO_4}$; $M_{\\mathrm{(NH_4)_2SO_4}} = 132$.',
      ],
      solution:
        '$n_{\\mathrm{NH_3}} = 0{,}2$ mol nên $n_{\\text{muối}} = 0{,}1$ mol và $m = 0{,}1 \\cdot 132 = 13{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Từ $1{,}2$ tấn $\\mathrm{FeS_2}$, sản xuất $\\mathrm{H_2SO_4}$ với hiệu suất toàn quá trình $80\\%$. Tính khối lượng $\\mathrm{H_2SO_4}$ thu được, theo tấn.',
      answer: 1.568,
      tolerance: 0.01,
      unit: 'tấn',
      hints: [
        'Bảo toàn S: $\\mathrm{FeS_2} \\to \\mathrm{2H_2SO_4}$; tỉ lệ khối lượng $120 : 196$.',
      ],
      solution:
        '$m = 1{,}2 \\cdot \\dfrac{196}{120} \\cdot 80\\% = 1{,}96 \\cdot 0{,}8 = 1{,}568$ tấn.',
    },
    {
      type: 'choice',
      prompt: 'Trong các phân đạm sau, chất nào có phần trăm khối lượng nitrogen cao nhất?',
      options: [
        'Urea $\\mathrm{(NH_2)_2CO}$',
        '$\\mathrm{NH_4NO_3}$',
        '$\\mathrm{NH_4Cl}$',
        '$\\mathrm{(NH_4)_2SO_4}$',
      ],
      answer: 0,
      hints: ['Tính $\\dfrac{14 \\cdot \\text{số N}}{M}$ cho từng chất.'],
      solution:
        'Urea: $\\dfrac{28}{60} \\approx 46{,}7\\%$; $\\mathrm{NH_4NO_3}$: $\\dfrac{28}{80} = 35\\%$; $\\mathrm{NH_4Cl}$: $\\dfrac{14}{53{,}5} \\approx 26{,}2\\%$; $\\mathrm{(NH_4)_2SO_4}$: $\\dfrac{28}{132} \\approx 21{,}2\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về vấn đề môi trường trong chương này.',
      options: [
        'Mưa acid là mưa có pH nhỏ hơn $5{,}6$',
        '$\\mathrm{NO_x}$ và $\\mathrm{SO_2}$ là tác nhân chính gây mưa acid',
        'Phú dưỡng do thừa nitrogen và phosphorus trong nước',
        'Xây ống khói cao hơn làm giảm tổng lượng $\\mathrm{SO_2}$ thải ra',
        'Bón thêm thật nhiều phân giúp hồ tránh phú dưỡng',
      ],
      answers: [0, 1, 2],
      hints: ['Ống khói cao có làm thay đổi lượng khí sinh ra không?'],
      solution:
        'Ba phát biểu đầu đúng. Ống khói cao chỉ đưa khí đi xa, không làm giảm lượng thải. Thêm phân chỉ làm thừa dinh dưỡng và phú dưỡng nặng hơn.',
    },
  ],
  takeaways: [
    'Số oxi hoá của N và S cho biết chất có tính oxi hoá, tính khử hay cả hai.',
    'Chuỗi nitrogen: $\\mathrm{N_2} \\to \\mathrm{NH_3} \\to \\mathrm{NO} \\to \\mathrm{NO_2} \\to \\mathrm{HNO_3}$; chuỗi sulfur: $\\mathrm{S} \\to \\mathrm{SO_2} \\to \\mathrm{SO_3} \\to \\mathrm{H_2SO_4 \\cdot nSO_3} \\to \\mathrm{H_2SO_4}$.',
    'Nhận biết: $\\mathrm{NH_4^+}$ bằng kiềm và đun nóng; $\\mathrm{SO_4^{2-}}$ bằng ion $\\mathrm{Ba^{2+}}$.',
    'Acid $\\mathrm{HNO_3}$ và $\\mathrm{H_2SO_4}$ đặc oxi hoá mạnh: kim loại không tạo $\\mathrm{H_2}$ mà tạo sản phẩm khử của N hoặc S.',
    'Mưa acid do $\\mathrm{NO_x}$, $\\mathrm{SO_2}$; phú dưỡng do thừa N, P. Giảm phát thải và xử lí nước thải là biện pháp chính.',
  ],
};
