/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tính chất của sulfuric acid loãng và đặc, sản xuất sulfuric acid bằng phương pháp tiếp xúc, muối sulfate và cách nhận biết ion sulfate.',
  intro:
    'Sulfuric acid đặc nhỏ vào đường trắng làm đường đen lại rồi trào lên như một cột than xốp. Đây là hoá chất được sản xuất nhiều nhất trên thế giới, nhưng cũng là chất gây bỏng rất nguy hiểm. Vì sao nó làm được những điều đó, và phải dùng thế nào cho an toàn?',
  objectives: [
    'Nêu được tính chất vật lí và các quy tắc an toàn khi dùng sulfuric acid.',
    'Phân biệt được tính acid của dung dịch loãng với tính háo nước và tính oxi hoá mạnh của acid đặc.',
    'Trình bày được các giai đoạn của phương pháp tiếp xúc; nhận biết được ion sulfate; nêu được ứng dụng của một số muối sulfate.',
  ],
  sections: [
    {
      heading: 'Cấu tạo, tính chất vật lí và an toàn',
      blocks: [
        {
          type: 'p',
          text: 'Trong phân tử $\\mathrm{H_2SO_4}$, sulfur có số oxi hoá $+6$, cao nhất. Sulfuric acid đặc $98\\%$ là chất lỏng sánh như dầu, không màu, không bay hơi, khối lượng riêng khoảng $1{,}84\\ \\mathrm{g/cm^3}$, tan vô hạn trong nước và toả nhiệt rất mạnh.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Quy tắc an toàn',
          text: 'Khi pha loãng, phải rót từ từ acid đặc vào nước và khuấy đều, tuyệt đối không làm ngược lại: nước nhẹ hơn nổi trên acid, sôi đột ngột và bắn acid ra ngoài. Đeo kính, găng tay. Nếu bị dính acid, rửa ngay dưới vòi nước nhiều lần rồi đến cơ sở y tế.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Dung dịch loãng có tính acid mạnh',
          text: '$$\\mathrm{H_2SO_4} \\rightarrow \\mathrm{2H^+} + \\mathrm{SO_4^{2-}}$$ Làm quỳ tím hoá đỏ; tác dụng với kim loại đứng trước H, oxide base, base, muối: $\\mathrm{Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{H_2} \\uparrow$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Acid đặc có tính háo nước',
          text: 'Acid đặc lấy nước của nhiều chất: $$\\mathrm{C_{12}H_{22}O_{11}} \\xrightarrow{\\mathrm{H_2SO_4}\\ 98\\%} \\mathrm{12C} + \\mathrm{11H_2O}$$ Carbon sinh ra lại bị acid oxi hoá, tạo khí đẩy khối than trào lên: $\\mathrm{C} + \\mathrm{2H_2SO_4} \\rightarrow \\mathrm{CO_2} \\uparrow + \\mathrm{2SO_2} \\uparrow + \\mathrm{2H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Acid đặc có tính oxi hoá mạnh',
          text: 'Acid đặc, nóng oxi hoá được cả kim loại đứng sau H (trừ Au, Pt), sản phẩm khử thường là $\\mathrm{SO_2}$. Al, Fe, Cr bị thụ động trong acid đặc, nguội.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Cu} + \\mathrm{2H_2SO_4} \\xrightarrow{t^\\circ} \\mathrm{CuSO_4} + \\mathrm{SO_2} \\uparrow + \\mathrm{2H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{2Fe} + \\mathrm{6H_2SO_4} \\xrightarrow{t^\\circ} \\mathrm{Fe_2(SO_4)_3} + \\mathrm{3SO_2} \\uparrow + \\mathrm{6H_2O}',
        },
      ],
    },
    {
      heading: 'Sản xuất sulfuric acid',
      blocks: [
        {
          type: 'p',
          text: 'Trong công nghiệp, sulfuric acid được sản xuất bằng phương pháp tiếp xúc, gồm ba giai đoạn: đốt S hoặc $\\mathrm{FeS_2}$ tạo $\\mathrm{SO_2}$, oxi hoá $\\mathrm{SO_2}$ thành $\\mathrm{SO_3}$ và hấp thụ $\\mathrm{SO_3}$. Sơ đồ dưới đây lấy nguyên liệu là quặng pyrite.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{FeS_2} \\xrightarrow{+\\mathrm{O_2}} \\mathrm{SO_2} \\xrightleftharpoons[\\mathrm{V_2O_5},\\,450-500\\,^\\circ\\mathrm{C}]{+\\mathrm{O_2}} \\mathrm{SO_3} \\xrightarrow{+\\mathrm{H_2SO_4}\\ 98\\%} \\mathrm{H_2SO_4 \\cdot nSO_3}',
        },
        {
          type: 'p',
          text: 'Không dùng nước để hấp thụ $\\mathrm{SO_3}$ vì phản ứng toả nhiệt mạnh, tạo sương mù acid. Oleum $\\mathrm{H_2SO_4 \\cdot nSO_3}$ được pha vào nước thành dung dịch có nồng độ mong muốn.',
        },
      ],
    },
    {
      heading: 'Muối sulfate và nhận biết ion sulfate',
      blocks: [
        {
          type: 'table',
          caption: 'Một số muối sulfate quan trọng',
          head: ['Muối', 'Ứng dụng'],
          rows: [
            [
              '$\\mathrm{BaSO_4}$',
              'Chất cản quang trong chụp X-quang đường tiêu hoá, chất độn sơn và nhựa',
            ],
            ['$\\mathrm{CaSO_4}$', 'Thạch cao: bó bột, làm khuôn, phụ gia xi măng'],
            ['$\\mathrm{(NH_4)_2SO_4}$', 'Phân đạm'],
            ['$\\mathrm{MgSO_4}$', 'Phân bón, y học'],
            ['$\\mathrm{FeSO_4}$', 'Thuốc bổ sung sắt, xử lí nước'],
            ['$\\mathrm{Na_2SO_4}$', 'Sản xuất giấy, thuỷ tinh, chất giặt rửa'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhận biết ion sulfate',
          text: 'Dùng dung dịch chứa ion $\\mathrm{Ba^{2+}}$ như $\\mathrm{BaCl_2}$. Xuất hiện kết tủa trắng $\\mathrm{BaSO_4}$, không tan trong acid: $$\\mathrm{Ba^{2+}} + \\mathrm{SO_4^{2-}} \\rightarrow \\mathrm{BaSO_4} \\downarrow$$',
        },
        { type: 'widget', name: 'nhan-biet' },
      ],
    },
  ],
  explore: {
    title: 'Vận hành dây chuyền tiếp xúc',
    instruction:
      'Chọn nguyên liệu, xúc tác và chất hấp thụ cho từng tháp. Chọn sai, dây chuyền sẽ dừng và cho biết lí do. Đi hết ba giai đoạn rồi đổi khối lượng nguyên liệu và hiệu suất để tính lượng acid thu được.',
  },
  examples: [
    {
      problem:
        'Cho $3{,}2$ g Cu tác dụng hết với dung dịch $\\mathrm{H_2SO_4}$ đặc, nóng, dư. Tính thể tích khí $\\mathrm{SO_2}$ ở điều kiện chuẩn.',
      steps: [
        '$n_{\\mathrm{Cu}} = \\dfrac{3{,}2}{64} = 0{,}05$ mol.',
        'Phương trình: $\\mathrm{Cu} + \\mathrm{2H_2SO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{SO_2} + \\mathrm{2H_2O}$, nên $n_{\\mathrm{SO_2}} = 0{,}05$ mol.',
        '$V = 0{,}05 \\cdot 24{,}79 = 1{,}2395$ L.',
      ],
      answer: '$V \\approx 1{,}24$ L.',
    },
    {
      problem:
        'Từ $1$ tấn $\\mathrm{FeS_2}$, sản xuất $\\mathrm{H_2SO_4}$ với hiệu suất toàn quá trình $80\\%$. Tính khối lượng $\\mathrm{H_2SO_4}$ thu được.',
      steps: [
        'Bảo toàn nguyên tố S: mỗi $\\mathrm{FeS_2}$ cho $2\\ \\mathrm{H_2SO_4}$. $M_{\\mathrm{FeS_2}} = 120$, $M_{\\mathrm{H_2SO_4}} = 98$.',
        'Theo lí thuyết: $m = 1 \\cdot \\dfrac{2 \\cdot 98}{120} \\approx 1{,}633$ tấn.',
        'Với hiệu suất $80\\%$: $1{,}633 \\cdot 0{,}8 \\approx 1{,}307$ tấn.',
      ],
      answer: 'Khoảng $1{,}31$ tấn $\\mathrm{H_2SO_4}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Khi pha loãng sulfuric acid đặc, cách làm đúng là',
      options: [
        'Rót từ từ acid đặc vào nước, khuấy đều',
        'Rót từ từ nước vào acid đặc, khuấy đều',
        'Đổ nhanh nước vào acid đặc',
        'Đổ nhanh acid đặc vào nước, không khuấy',
      ],
      answer: 0,
      hints: ['Chất nặng và toả nhiệt phải đi vào lượng lớn chất kia.'],
      solution: 'Rót từ từ acid vào nước và khuấy đều, để nhiệt toả ra được nước hấp thụ dần.',
    },
    {
      type: 'multi',
      prompt: 'Sulfuric acid đặc có những tính chất nào?',
      options: ['Tính háo nước', 'Tính acid', 'Tính oxi hoá mạnh', 'Tính khử mạnh'],
      answers: [0, 1, 2],
      hints: ['Sulfur trong $\\mathrm{H_2SO_4}$ có số oxi hoá $+6$, cao nhất.'],
      solution:
        'S ở số oxi hoá cao nhất nên không có tính khử. Acid đặc háo nước, có tính acid và tính oxi hoá mạnh.',
    },
    {
      type: 'choice',
      prompt: 'Sắt tác dụng với dung dịch $\\mathrm{H_2SO_4}$ loãng tạo ra',
      options: [
        '$\\mathrm{FeSO_4}$ và $\\mathrm{H_2}$',
        '$\\mathrm{Fe_2(SO_4)_3}$ và $\\mathrm{H_2}$',
        '$\\mathrm{Fe_2(SO_4)_3}$ và $\\mathrm{SO_2}$',
        '$\\mathrm{FeSO_4}$ và $\\mathrm{SO_2}$',
      ],
      answer: 0,
      hints: ['Acid loãng oxi hoá kim loại bằng ion $\\mathrm{H^+}$.'],
      solution:
        '$\\mathrm{Fe} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{H_2}$. Chỉ acid đặc, nóng mới cho muối iron(III) và $\\mathrm{SO_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Cho $5{,}6$ g Fe tác dụng hết với dung dịch $\\mathrm{H_2SO_4}$ loãng, dư. Tính thể tích $\\mathrm{H_2}$ thu được ở điều kiện chuẩn, theo lít.',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: ['$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56}$.'],
      solution:
        '$n_{\\mathrm{H_2}} = n_{\\mathrm{Fe}} = 0{,}1$ mol nên $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Cho dung dịch chứa $1{,}42$ g $\\mathrm{Na_2SO_4}$ tác dụng hết với $\\mathrm{BaCl_2}$ dư. Tính khối lượng kết tủa theo gam.',
      answer: 2.33,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$M_{\\mathrm{Na_2SO_4}} = 142$, $M_{\\mathrm{BaSO_4}} = 233$.'],
      solution: '$n = 0{,}01$ mol nên $m_{\\mathrm{BaSO_4}} = 0{,}01 \\cdot 233 = 2{,}33$ g.',
    },
    {
      type: 'number',
      prompt:
        'Từ $6{,}4$ tấn sulfur, sản xuất $\\mathrm{H_2SO_4}$ với hiệu suất toàn quá trình $75\\%$. Tính khối lượng $\\mathrm{H_2SO_4}$ thu được, theo tấn.',
      answer: 14.7,
      tolerance: 0.01,
      unit: 'tấn',
      hints: ['Mỗi S tạo một $\\mathrm{H_2SO_4}$; tỉ lệ khối lượng $98 : 32$.'],
      solution:
        '$m = 6{,}4 \\cdot \\dfrac{98}{32} \\cdot 0{,}75 = 19{,}6 \\cdot 0{,}75 = 14{,}7$ tấn.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo thứ tự trong phương pháp tiếp xúc.',
      items: [
        '$\\mathrm{FeS_2}$',
        '$\\mathrm{SO_2}$',
        '$\\mathrm{SO_3}$',
        '$\\mathrm{H_2SO_4 \\cdot nSO_3}$',
        'Dung dịch $\\mathrm{H_2SO_4}$',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Số oxi hoá của S tăng từ thấp đến $+6$, rồi mới hấp thụ và pha loãng.'],
      solution:
        'Đốt $\\mathrm{FeS_2}$ tạo $\\mathrm{SO_2}$; oxi hoá thành $\\mathrm{SO_3}$; hấp thụ bằng acid $98\\%$ tạo oleum; pha oleum vào nước.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trong tháp hấp thụ không dùng nước để hấp thụ trực tiếp $\\mathrm{SO_3}$?',
      options: [
        'Phản ứng toả nhiệt mạnh, tạo sương mù acid khó hấp thụ',
        '$\\mathrm{SO_3}$ không phản ứng với nước',
        'Sản phẩm là một chất khác, không phải $\\mathrm{H_2SO_4}$',
        'Nước làm hỏng xúc tác $\\mathrm{V_2O_5}$',
      ],
      answer: 0,
      hints: ['$\\mathrm{SO_3}$ phản ứng với nước rất mãnh liệt.'],
      solution:
        '$\\mathrm{SO_3}$ phản ứng với nước toả nhiệt mạnh, sinh sương mù acid. Vì vậy dùng $\\mathrm{H_2SO_4}$ $98\\%$ để tạo oleum trước.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi muối sulfate với ứng dụng của nó.',
      left: ['$\\mathrm{BaSO_4}$', '$\\mathrm{CaSO_4}$', '$\\mathrm{(NH_4)_2SO_4}$'],
      right: ['Chất cản quang X-quang', 'Thạch cao bó bột', 'Phân đạm'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Muối nào chứa nguyên tố dinh dưỡng nitrogen?'],
      solution:
        '$\\mathrm{BaSO_4}$ không tan nên dùng làm chất cản quang; $\\mathrm{CaSO_4}$ là thạch cao; muối ammonium là phân đạm.',
    },
    {
      type: 'text',
      prompt: 'Thuốc thử thường dùng để nhận biết ion sulfate là dung dịch muối của kim loại nào?',
      accept: ['bari', 'barium', 'Ba'],
      hints: ['Kết tủa trắng tạo ra không tan trong acid.'],
      solution:
        'Dùng dung dịch chứa ion $\\mathrm{Ba^{2+}}$, ví dụ $\\mathrm{BaCl_2}$. Kết tủa trắng là $\\mathrm{BaSO_4}$.',
    },
  ],
  takeaways: [
    'Pha loãng: rót từ từ acid đặc vào nước, tuyệt đối không làm ngược lại.',
    'Dung dịch loãng có tính acid mạnh; acid đặc còn háo nước và oxi hoá mạnh, tạo $\\mathrm{SO_2}$ khi tác dụng với Cu, Fe.',
    'Phương pháp tiếp xúc: tạo $\\mathrm{SO_2}$, oxi hoá thành $\\mathrm{SO_3}$ với xúc tác $\\mathrm{V_2O_5}$, hấp thụ bằng $\\mathrm{H_2SO_4}$ $98\\%$ tạo oleum.',
    'Nhận biết $\\mathrm{SO_4^{2-}}$ bằng ion $\\mathrm{Ba^{2+}}$: kết tủa trắng $\\mathrm{BaSO_4}$ không tan trong acid.',
  ],
};
