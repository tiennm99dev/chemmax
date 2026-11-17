/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Nguyên tố nhóm IA và nhóm IIA: cấu hình electron, tính khử và phản ứng với nước của kim loại kiềm, kim loại nhóm IIA; NaCl, NaHCO3, Na2CO3 và phương pháp Solvay; màu ngọn lửa; hợp chất của calcium; nước cứng và cách làm mềm; sơ đồ chuyển hoá của Na và Ca và các dạng bài tính toán.',
  intro:
    'Muối ăn, bột nở, soda, vôi, đá vôi, thạch cao: những chất quen thuộc nhất trong đời sống đều là hợp chất của sodium và calcium. Bài ôn tập này hệ thống lại kiến thức về hai nhóm kim loại đầu tiên của bảng tuần hoàn, luyện viết sơ đồ chuyển hoá và giải các dạng bài tính toán thường gặp.',
  objectives: [
    'Hệ thống được cấu tạo, tính chất vật lí, tính chất hoá học của kim loại nhóm IA và nhóm IIA.',
    'Viết được các phương trình trong sơ đồ chuyển hoá giữa Na và hợp chất của Na, Ca và hợp chất của Ca.',
    'Phân loại được nước cứng và chọn được phương pháp làm mềm phù hợp.',
    'Giải được bài tập về kim loại kiềm tác dụng với nước, nhiệt phân muối, $\\mathrm{CO_2}$ tác dụng với nước vôi và làm mềm nước cứng.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh kim loại nhóm IA và nhóm IIA',
          head: ['Đặc điểm', 'Nhóm IA (Li, Na, K, Rb, Cs)', 'Nhóm IIA (Be, Mg, Ca, Sr, Ba)'],
          rows: [
            ['Cấu hình lớp ngoài cùng', '$ns^1$', '$ns^2$'],
            ['Số oxi hoá trong hợp chất', '$+1$', '$+2$'],
            ['Tính khử', 'rất mạnh, tăng từ Li đến Cs', 'mạnh, tăng từ Be đến Ba'],
            [
              'Với nước ở nhiệt độ thường',
              'tất cả đều phản ứng: $2\\mathrm{M} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{MOH} + \\mathrm{H_2}$',
              'Ca, Sr, Ba phản ứng; Mg phản ứng chậm (nhanh hơn khi đun nóng); Be không phản ứng',
            ],
            ['Màu ngọn lửa', 'Li đỏ tía, Na vàng, K tím nhạt', 'Ca đỏ cam, Sr đỏ son, Ba lục'],
            ['Trong tự nhiên', 'chỉ ở dạng hợp chất', 'chỉ ở dạng hợp chất'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hợp chất của sodium',
          text: 'NaCl: muối ăn, nguyên liệu điện phân dung dịch có màng ngăn sản xuất NaOH, $\\mathrm{Cl_2}$, $\\mathrm{H_2}$. $\\mathrm{NaHCO_3}$: ít tan, kém bền nhiệt, dùng làm bột nở, thuốc giảm đau dạ dày. $\\mathrm{Na_2CO_3}$: dễ tan, dung dịch có môi trường base, dùng sản xuất thuỷ tinh, xà phòng, làm mềm nước; được sản xuất bằng phương pháp Solvay.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hợp chất nhóm IIA',
          text: 'Độ tan: hydroxide tăng từ $\\mathrm{Mg(OH)_2}$ đến $\\mathrm{Ba(OH)_2}$; sulfate giảm từ $\\mathrm{MgSO_4}$ đến $\\mathrm{BaSO_4}$; muối carbonate đều không tan và bị nhiệt phân thành oxide. Calcium: đá vôi $\\mathrm{CaCO_3}$, vôi sống CaO, vôi tôi $\\mathrm{Ca(OH)_2}$, thạch cao sống $\\mathrm{CaSO_4.2H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nước cứng',
          text: 'Nước chứa nhiều $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. Tính cứng tạm thời do $\\mathrm{HCO_3^-}$, vĩnh cửu do $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$, toàn phần gồm cả hai. Đun sôi hoặc $\\mathrm{Ca(OH)_2}$ vừa đủ chỉ làm mềm nước cứng tạm thời; $\\mathrm{Na_2CO_3}$, $\\mathrm{Na_3PO_4}$, nhựa trao đổi ion làm mềm được mọi loại nước cứng.',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Kim loại kiềm (hoặc Ca, Ba) tác dụng với nước: $n_{\\mathrm{H_2}} = \\dfrac{1}{2} n_{\\mathrm{M}}$ với kim loại nhóm IA, $n_{\\mathrm{H_2}} = n_{\\mathrm{M}}$ với kim loại nhóm IIA; $V = n \\cdot 24{,}79$ L (đkc).',
            'Nhiệt phân muối: $2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$; $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$; nhân với hiệu suất khi có.',
            '$\\mathrm{CO_2}$ tác dụng với $\\mathrm{Ca(OH)_2}$ dư: chỉ tạo kết tủa, $n_{\\mathrm{CaCO_3}} = n_{\\mathrm{CO_2}}$.',
            'Làm mềm nước cứng bằng $\\mathrm{Na_2CO_3}$: $n_{\\mathrm{Na_2CO_3}} = n_{\\mathrm{Ca^{2+}}} + n_{\\mathrm{Mg^{2+}}}$.',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ chuyển hoá của Na và Ca',
    instruction:
      'Chọn sơ đồ sodium hoặc calcium. Ở mỗi bước, chọn chất hoặc điều kiện còn thiếu ở ô có dấu ?; chọn đúng thì phương trình hoá học của bước đó hiện ra và bước tiếp theo được mở. Cố gắng điền đúng ngay lần đầu tất cả các chỗ trống.',
  },
  examples: [
    {
      problem:
        'Viết phương trình hoá học thực hiện dãy chuyển hoá: $\\mathrm{CaCO_3} \\xrightarrow{(1)} \\mathrm{CaO} \\xrightarrow{(2)} \\mathrm{Ca(OH)_2} \\xrightarrow{(3)} \\mathrm{CaCO_3} \\xrightarrow{(4)} \\mathrm{Ca(HCO_3)_2}$.',
      steps: [
        '(1) Nung đá vôi: $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$.',
        '(2) Tôi vôi: $\\mathrm{CaO} + \\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2}$.',
        '(3) Sục $\\mathrm{CO_2}$ vừa đủ: $\\mathrm{Ca(OH)_2} + \\mathrm{CO_2} \\longrightarrow \\mathrm{CaCO_3} + \\mathrm{H_2O}$.',
        '(4) Sục tiếp $\\mathrm{CO_2}$: $\\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(HCO_3)_2}$.',
      ],
      answer: 'Bốn phương trình như trên.',
    },
    {
      problem:
        'Hoà tan 6,2 g hỗn hợp Na và K vào nước dư, thu được 2,479 L khí $\\mathrm{H_2}$ (đkc). Tính khối lượng mỗi kim loại.',
      steps: [
        '$2\\mathrm{M} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{MOH} + \\mathrm{H_2}$ với M là Na hoặc K.',
        '$n_{\\mathrm{H_2}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol $\\Rightarrow n_{\\mathrm{Na}} + n_{\\mathrm{K}} = 0{,}2$ mol.',
        'Gọi $x = n_{\\mathrm{Na}}$, $y = n_{\\mathrm{K}}$: $x + y = 0{,}2$ và $23x + 39y = 6{,}2$.',
        'Giải hệ: $16y = 6{,}2 - 4{,}6 = 1{,}6 \\Rightarrow y = 0{,}1$, $x = 0{,}1$.',
        '$m_{\\mathrm{Na}} = 0{,}1 \\cdot 23 = 2{,}3$ g; $m_{\\mathrm{K}} = 0{,}1 \\cdot 39 = 3{,}9$ g.',
      ],
      answer: '$m_{\\mathrm{Na}} = 2{,}3$ g; $m_{\\mathrm{K}} = 3{,}9$ g.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Kim loại nào sau đây có tính khử mạnh nhất?',
      options: ['K', 'Na', 'Mg', 'Ca'],
      answer: 0,
      hints: [
        'So sánh trong cùng nhóm (tính khử tăng khi đi xuống) và trong cùng chu kì (kim loại nhóm IA mạnh hơn nhóm IIA).',
      ],
      solution:
        'K đứng dưới Na trong nhóm IA và đứng trước Ca trong chu kì 4, nên có tính khử mạnh nhất trong bốn kim loại.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào tác dụng mạnh với nước ở nhiệt độ thường?',
      options: ['Na', 'K', 'Ba', 'Ca', 'Be', 'Mg'],
      answers: [0, 1, 2, 3],
      hints: [
        'Trong nhóm IIA có hai kim loại không phản ứng hoặc phản ứng rất chậm với nước lạnh.',
      ],
      solution:
        'Na, K (nhóm IA) và Ca, Ba (nhóm IIA) khử nước ở nhiệt độ thường. Be không phản ứng; Mg phản ứng chậm với nước lạnh.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi ion với màu ngọn lửa đặc trưng.',
      left: ['$\\mathrm{Na^+}$', '$\\mathrm{K^+}$', '$\\mathrm{Li^+}$', '$\\mathrm{Ca^{2+}}$'],
      right: ['vàng', 'tím nhạt', 'đỏ tía', 'đỏ cam', 'xanh lam'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đèn đường sodium phát ánh sáng màu gì?'],
      solution:
        '$\\mathrm{Na^+}$ vàng, $\\mathrm{K^+}$ tím nhạt, $\\mathrm{Li^+}$ đỏ tía, $\\mathrm{Ca^{2+}}$ đỏ cam.',
    },
    {
      type: 'choice',
      prompt:
        'Để phân biệt hai dung dịch $\\mathrm{NaCl}$ và $\\mathrm{BaCl_2}$, có thể dùng dung dịch',
      options: [
        '$\\mathrm{Na_2SO_4}$',
        '$\\mathrm{HCl}$',
        '$\\mathrm{KNO_3}$',
        '$\\mathrm{NaNO_3}$',
      ],
      answer: 0,
      hints: ['Muối sulfate nào của kim loại nhóm IIA không tan?'],
      solution:
        'Chỉ $\\mathrm{BaCl_2}$ tạo kết tủa trắng: $\\mathrm{BaCl_2} + \\mathrm{Na_2SO_4} \\longrightarrow \\mathrm{BaSO_4}\\downarrow + 2\\mathrm{NaCl}$; NaCl không hiện tượng.',
    },
    {
      type: 'choice',
      prompt: 'Trong phương pháp Solvay, chất kết tinh tách ra khỏi dung dịch là',
      options: ['$\\mathrm{NaHCO_3}$', '$\\mathrm{Na_2CO_3}$', '$\\mathrm{NH_4Cl}$', 'NaCl'],
      answer: 0,
      hints: ['Chất nào ít tan nhất trong các muối có mặt?'],
      solution:
        '$\\mathrm{NaCl} + \\mathrm{NH_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{NaHCO_3} + \\mathrm{NH_4Cl}$; $\\mathrm{NaHCO_3}$ ít tan nên kết tinh, sau đó được nhiệt phân thành $\\mathrm{Na_2CO_3}$.',
    },
    {
      type: 'choice',
      prompt:
        'Một mẫu nước chứa $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$, $\\mathrm{HCO_3^-}$, $\\mathrm{SO_4^{2-}}$. Hoá chất nào làm mềm hoàn toàn được mẫu nước này?',
      options: ['$\\mathrm{Na_2CO_3}$', '$\\mathrm{Ca(OH)_2}$', 'HCl', 'NaCl'],
      answer: 0,
      hints: ['Mẫu nước có tính cứng toàn phần: cần loại cả phần đi cùng $\\mathrm{SO_4^{2-}}$.'],
      solution:
        '$\\mathrm{CO_3^{2-}}$ kết tủa mọi ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. $\\mathrm{Ca(OH)_2}$ chỉ loại tính cứng tạm thời; HCl và NaCl không loại được $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các chất để được một dãy chuyển hoá, mỗi mũi tên là một phản ứng: bắt đầu từ Na.',
      items: ['Na', 'NaOH', '$\\mathrm{Na_2CO_3}$', '$\\mathrm{NaHCO_3}$'],
      answer: [0, 1, 2, 3],
      hints: [
        'Na tác dụng với nước trước; muối hydrogencarbonate tạo ra khi muối carbonate hấp thụ thêm $\\mathrm{CO_2}$.',
      ],
      solution:
        '$2\\mathrm{Na} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}$; $2\\mathrm{NaOH} + \\mathrm{CO_2} \\longrightarrow \\mathrm{Na_2CO_3} + \\mathrm{H_2O}$; $\\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\longrightarrow 2\\mathrm{NaHCO_3}$.',
    },
    {
      type: 'number',
      prompt:
        'Cho 2,74 g Ba tác dụng hết với nước dư. Thể tích khí $\\mathrm{H_2}$ thu được (đkc) là bao nhiêu lít? (Ba = 137)',
      answer: 0.4958,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$\\mathrm{Ba} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Ba(OH)_2} + \\mathrm{H_2}$: số mol $\\mathrm{H_2}$ bằng số mol Ba.',
      ],
      solution:
        '$n_{\\mathrm{Ba}} = \\dfrac{2{,}74}{137} = 0{,}02$ mol $= n_{\\mathrm{H_2}}$; $V = 0{,}02 \\cdot 24{,}79 = 0{,}4958 \\approx 0{,}496$ L.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn 4,958 L khí $\\mathrm{CO_2}$ (đkc) vào dung dịch $\\mathrm{Ca(OH)_2}$ dư. Khối lượng kết tủa thu được là bao nhiêu gam?',
      answer: 20,
      tolerance: 0.001,
      unit: 'g',
      hints: ['$\\mathrm{Ca(OH)_2}$ dư nên chỉ tạo $\\mathrm{CaCO_3}$ ($M = 100$).'],
      solution:
        '$n_{\\mathrm{CO_2}} = \\dfrac{4{,}958}{24{,}79} = 0{,}2$ mol $= n_{\\mathrm{CaCO_3}}$; $m = 0{,}2 \\cdot 100 = 20$ g.',
    },
    {
      type: 'number',
      prompt:
        'Nung 33,6 g $\\mathrm{NaHCO_3}$ đến khối lượng không đổi. Khối lượng chất rắn giảm bao nhiêu gam?',
      answer: 12.4,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$.',
        'Khối lượng giảm là khối lượng $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$ bay ra.',
      ],
      solution:
        '$n_{\\mathrm{NaHCO_3}} = \\dfrac{33{,}6}{84} = 0{,}4$ mol $\\Rightarrow n_{\\mathrm{CO_2}} = n_{\\mathrm{H_2O}} = 0{,}2$ mol; khối lượng giảm $= 0{,}2 \\cdot (44 + 18) = 12{,}4$ g.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào là đúng?',
      options: [
        'Nước cứng làm xà phòng ít bọt và làm đóng cặn nồi hơi.',
        'Nhũ đá trong hang động được tạo thành do $\\mathrm{Ca(HCO_3)_2}$ bị phân huỷ.',
        'Kim loại kiềm được điều chế bằng cách điện phân dung dịch muối chloride.',
        'Thạch cao sống có công thức $\\mathrm{CaSO_4.2H_2O}$.',
      ],
      answers: [0, 1, 3],
      hints: ['Điện phân dung dịch NaCl thu được sản phẩm gì ở cathode?'],
      solution:
        'Ba phát biểu đúng là về tác hại của nước cứng, sự hình thành nhũ đá và công thức thạch cao sống. Phát biểu sai: điện phân dung dịch NaCl chỉ khử nước ở cathode (tạo $\\mathrm{H_2}$, NaOH); kim loại kiềm được điều chế bằng điện phân nóng chảy.',
    },
  ],
  takeaways: [
    'Nhóm IA: $ns^1$, số oxi hoá $+1$; nhóm IIA: $ns^2$, số oxi hoá $+2$; tính khử tăng khi đi xuống trong nhóm.',
    'Kim loại kiềm và Ca, Sr, Ba khử nước ở nhiệt độ thường; chúng được điều chế bằng điện phân nóng chảy.',
    '$\\mathrm{NaHCO_3}$ kém bền nhiệt; $\\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{Ca(HCO_3)_2}$ giải thích hang động và nước cứng tạm thời.',
    'Làm mềm nước cứng: giảm $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ bằng kết tủa hoặc trao đổi ion; $\\mathrm{Na_2CO_3}$, $\\mathrm{Na_3PO_4}$ dùng được cho mọi loại nước cứng.',
  ],
};
