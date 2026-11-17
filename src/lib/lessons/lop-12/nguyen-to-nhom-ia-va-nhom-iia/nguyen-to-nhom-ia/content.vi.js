/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại kiềm (nhóm IA) có một electron hoá trị ns1, là chất khử rất mạnh, tác dụng với nước ở nhiệt độ thường; hợp chất quan trọng NaCl, NaHCO3, Na2CO3 và phương pháp Solvay; nhận biết ion kim loại kiềm bằng màu ngọn lửa.',
  intro:
    'Muối ăn, bột nở làm bánh, soda giặt tẩy đều là hợp chất của sodium. Còn pháo hoa có ánh vàng rực là nhờ ion $\\mathrm{Na^+}$, ánh đỏ tía là nhờ ion $\\mathrm{Li^+}$. Vì sao kim loại kiềm phải ngâm trong dầu hoả, và làm sao nhận ra chúng chỉ bằng một ngọn lửa?',
  objectives: [
    'Nêu được trạng thái tự nhiên, cấu hình electron lớp ngoài cùng và xu hướng biến đổi tính chất vật lí của kim loại nhóm IA.',
    'Giải thích được tính khử mạnh của kim loại kiềm; viết được phương trình phản ứng của kim loại kiềm với nước, chlorine, oxygen.',
    'Trình bày được tính chất và ứng dụng của NaCl, $\\mathrm{NaHCO_3}$, $\\mathrm{Na_2CO_3}$; phương pháp Solvay sản xuất soda.',
    'Nhận biết được ion $\\mathrm{Li^+}$, $\\mathrm{Na^+}$, $\\mathrm{K^+}$ bằng màu ngọn lửa.',
  ],
  sections: [
    {
      heading: 'Đặc điểm và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm IA gồm các kim loại kiềm lithium (Li), sodium (Na), potassium (K), rubidium (Rb), caesium (Cs) và francium (Fr, nguyên tố phóng xạ). Chúng là các nguyên tố s, nguyên tử có 1 electron hoá trị ở phân lớp $ns^1$; trong hợp chất, kim loại kiềm luôn có số oxi hoá $+1$.',
        },
        {
          type: 'p',
          text: 'Kim loại kiềm hoạt động mạnh nên trong tự nhiên chỉ tồn tại ở dạng hợp chất, chủ yếu là muối. Sodium và potassium phổ biến nhất: có trong nước biển, mỏ muối, khoáng vật halite (NaCl), sylvinite (NaCl.KCl).',
        },
        {
          type: 'table',
          head: [
            'Nguyên tố',
            'Cấu hình electron',
            '$t_{nc}$ (°C)',
            '$E^\\circ_{\\mathrm{M^+/M}}$ (V)',
          ],
          rows: [
            ['Li', '$[\\mathrm{He}]2s^1$', '181', '$-3{,}04$'],
            ['Na', '$[\\mathrm{Ne}]3s^1$', '98', '$-2{,}71$'],
            ['K', '$[\\mathrm{Ar}]4s^1$', '64', '$-2{,}93$'],
            ['Rb', '$[\\mathrm{Kr}]5s^1$', '39', '$-2{,}98$'],
            ['Cs', '$[\\mathrm{Xe}]6s^1$', '28', '$-3{,}03$'],
          ],
          caption: 'Một số đặc điểm của kim loại nhóm IA.',
        },
        {
          type: 'list',
          items: [
            'Nhiệt độ nóng chảy, nhiệt độ sôi thấp hơn hầu hết các kim loại khác và giảm dần từ Li đến Cs.',
            'Khối lượng riêng nhỏ (Li, Na, K nhẹ hơn nước) do nguyên tử có bán kính lớn và cấu trúc tinh thể kém đặc khít.',
            'Độ cứng thấp, có thể cắt bằng dao, do liên kết kim loại trong tinh thể yếu.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử kim loại kiềm có bán kính lớn, chỉ có 1 electron hoá trị nên rất dễ nhường electron; thế điện cực chuẩn rất âm. Kim loại kiềm là chất khử rất mạnh, tính khử tăng dần từ Li đến Cs:',
        },
        { type: 'tex', tex: '\\mathrm{M} \\longrightarrow \\mathrm{M^+} + 1e' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tác dụng với nước',
          text: 'Tất cả kim loại kiềm khử nước ở nhiệt độ thường, tạo dung dịch kiềm và giải phóng khí hydrogen: $2\\mathrm{M} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{MOH} + \\mathrm{H_2}$. Mức độ phản ứng tăng dần từ Li đến Cs: Li phản ứng êm, Na nóng chảy thành giọt chạy trên mặt nước, K bốc cháy, Rb và Cs phản ứng gây nổ.',
        },
        {
          type: 'p',
          text: 'Kim loại kiềm cũng phản ứng mạnh với phi kim như chlorine, oxygen:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Na} + \\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{NaCl} \\qquad 4\\mathrm{Na} + \\mathrm{O_2} \\longrightarrow 2\\mathrm{Na_2O}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bảo quản',
          text: 'Kim loại kiềm dễ phản ứng với oxygen và hơi nước trong không khí, nên Na, K được ngâm chìm trong dầu hoả khan; Rb, Cs được bảo quản trong ống thuỷ tinh hàn kín.',
        },
      ],
    },
    {
      heading: 'Một số hợp chất quan trọng của sodium',
      blocks: [
        {
          type: 'p',
          text: 'Hầu hết hợp chất của kim loại kiềm dễ tan trong nước và là chất điện li mạnh; ion kim loại kiềm không màu.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sodium chloride (NaCl)',
          text: 'Có nhiều trong nước biển, mỏ muối. Dùng làm muối ăn, bảo quản thực phẩm và là nguyên liệu sản xuất nhiều hoá chất. Điện phân dung dịch NaCl bão hoà có màng ngăn thu được NaOH, $\\mathrm{Cl_2}$, $\\mathrm{H_2}$; không có màng ngăn thì $\\mathrm{Cl_2}$ tác dụng với NaOH tạo nước Javel (chứa NaClO).',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaCl} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd, có màng ngăn}} 2\\mathrm{NaOH} + \\mathrm{Cl_2} + \\mathrm{H_2}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sodium hydrogencarbonate ($\\mathrm{NaHCO_3}$, baking soda)',
          text: 'Chất rắn màu trắng, ít tan trong nước, kém bền nhiệt, bị phân huỷ khi đun nóng. Ion $\\mathrm{HCO_3^-}$ vừa tác dụng với acid, vừa tác dụng với base. Dùng làm bột nở, chất chữa cháy dạng bột, thuốc giảm đau dạ dày do thừa acid.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\qquad \\mathrm{HCO_3^-} + \\mathrm{H^+} \\longrightarrow \\mathrm{CO_2} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sodium carbonate ($\\mathrm{Na_2CO_3}$, soda)',
          text: 'Chất rắn màu trắng, dễ tan trong nước, bền với nhiệt; dung dịch có môi trường base. Dùng sản xuất thuỷ tinh, xà phòng, chất tẩy rửa, giấy, và làm mềm nước cứng.',
        },
        {
          type: 'p',
          text: 'Phương pháp Solvay sản xuất soda từ muối ăn, đá vôi và ammonia. Sục $\\mathrm{NH_3}$ và $\\mathrm{CO_2}$ vào dung dịch NaCl bão hoà; $\\mathrm{NaHCO_3}$ ít tan hơn các muối khác nên kết tinh khi làm lạnh, được lọc ra rồi nhiệt phân thành soda:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '$\\mathrm{NaCl} + \\mathrm{NH_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{NaHCO_3} + \\mathrm{NH_4Cl}$',
            '$2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$',
          ],
        },
        {
          type: 'p',
          text: '$\\mathrm{CO_2}$ và $\\mathrm{NH_3}$ được thu hồi để dùng lại, giúp giảm chi phí và giảm tác động tới môi trường.',
        },
      ],
    },
    {
      heading: 'Nhận biết ion kim loại kiềm bằng màu ngọn lửa',
      blocks: [
        {
          type: 'p',
          text: 'Khi đốt nóng kim loại kiềm hoặc hợp chất của chúng trong ngọn lửa không màu, ngọn lửa có màu đặc trưng. Màu do ion kim loại quyết định, không phụ thuộc gốc acid: NaCl, $\\mathrm{Na_2CO_3}$, $\\mathrm{NaHCO_3}$ đều cho màu vàng.',
        },
        {
          type: 'table',
          head: ['Ion', '$\\mathrm{Li^+}$', '$\\mathrm{Na^+}$', '$\\mathrm{K^+}$'],
          rows: [['Màu ngọn lửa', 'đỏ tía', 'vàng', 'tím nhạt']],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Làm sạch dây platinum (hoặc nichrome) bằng dung dịch HCl rồi hơ trên ngọn lửa đến khi không còn màu lạ.',
            'Nhúng đầu dây vào mẫu muối (rắn hoặc dung dịch).',
            'Đưa đầu dây vào ngọn lửa đèn khí, quan sát màu.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẫu có cả Na và K',
          text: 'Ánh vàng của sodium rất sáng, che khuất màu tím nhạt của potassium. Nhìn ngọn lửa qua kính lọc màu xanh lam (kính cobalt) sẽ hấp thụ ánh vàng, khi đó thấy được màu tím nhạt của $\\mathrm{K^+}$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ngọn lửa ảo',
    instruction:
      'Ở chế độ "Thử mẫu muối", nhúng dây vào từng muối và quan sát màu ngọn lửa: muối khác gốc acid nhưng cùng ion kim loại thì có cùng màu không? Thử mẫu NaCl + KCl, rồi nhìn qua kính cobalt. Sau đó chuyển sang "Nhận biết mẫu lạ" để đoán ion trong 6 mẫu.',
  },
  examples: [
    {
      problem:
        'Cho 4,6 g Na vào 100 g nước. Tính thể tích khí $\\mathrm{H_2}$ thoát ra (đkc) và nồng độ phần trăm của dung dịch thu được. (Na = 23, O = 16, H = 1)',
      steps: [
        '$2\\mathrm{Na} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{Na}} = \\dfrac{4{,}6}{23} = 0{,}2$ mol $\\Rightarrow n_{\\mathrm{NaOH}} = 0{,}2$ mol, $n_{\\mathrm{H_2}} = 0{,}1$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
        '$m_{\\text{dd}} = 4{,}6 + 100 - 0{,}1 \\cdot 2 = 104{,}4$ g; $m_{\\mathrm{NaOH}} = 0{,}2 \\cdot 40 = 8$ g.',
        '$C\\% = \\dfrac{8}{104{,}4} \\cdot 100\\% \\approx 7{,}66\\%$.',
      ],
      answer: '$V_{\\mathrm{H_2}} = 2{,}479$ L; $C\\% \\approx 7{,}66\\%$.',
    },
    {
      problem:
        'Nung 16,8 g $\\mathrm{NaHCO_3}$ đến khối lượng không đổi. Tính khối lượng chất rắn còn lại và thể tích khí $\\mathrm{CO_2}$ (đkc). (Na = 23, C = 12, O = 16, H = 1)',
      steps: [
        '$2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$.',
        '$n_{\\mathrm{NaHCO_3}} = \\dfrac{16{,}8}{84} = 0{,}2$ mol $\\Rightarrow n_{\\mathrm{Na_2CO_3}} = n_{\\mathrm{CO_2}} = 0{,}1$ mol.',
        '$m_{\\mathrm{Na_2CO_3}} = 0{,}1 \\cdot 106 = 10{,}6$ g.',
        '$V_{\\mathrm{CO_2}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
      ],
      answer: 'Chất rắn là 10,6 g $\\mathrm{Na_2CO_3}$; $V_{\\mathrm{CO_2}} = 2{,}479$ L.',
    },
    {
      problem:
        'Có ba lọ mất nhãn đựng ba chất rắn LiCl, NaCl, KCl. Trình bày cách nhận biết mỗi chất.',
      steps: [
        'Ba muối cùng gốc chloride nên phải phân biệt bằng ion kim loại: dùng thử màu ngọn lửa.',
        'Làm sạch dây platinum bằng dung dịch HCl, nhúng vào từng mẫu rồi đưa vào ngọn lửa không màu.',
        'Ngọn lửa đỏ tía: LiCl; vàng: NaCl; tím nhạt: KCl.',
      ],
      answer: 'Dùng màu ngọn lửa: đỏ tía (LiCl), vàng (NaCl), tím nhạt (KCl).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cấu hình electron lớp ngoài cùng của nguyên tử kim loại kiềm là',
      options: ['$ns^1$', '$ns^2$', '$ns^2np^1$', '$ns^2np^5$'],
      answer: 0,
      hints: ['Kim loại kiềm có 1 electron hoá trị và là nguyên tố s.'],
      solution:
        'Nguyên tử kim loại kiềm có 1 electron hoá trị ở phân lớp $ns^1$, nên có số oxi hoá $+1$ trong hợp chất.',
    },
    {
      type: 'choice',
      prompt: 'Để bảo quản kim loại sodium trong phòng thí nghiệm, người ta ngâm sodium trong',
      options: ['dầu hoả khan', 'nước cất', 'dung dịch NaCl', 'ethanol'],
      answer: 0,
      hints: ['Sodium phản ứng với nước và với chất có nhóm –OH như ethanol.'],
      solution:
        'Sodium phản ứng với nước, với ethanol và với oxygen, hơi nước trong không khí; dầu hoả khan không phản ứng với Na và ngăn Na tiếp xúc với không khí.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào về kim loại kiềm là đúng?',
      options: [
        'Tính khử tăng dần từ Li đến Cs.',
        'Đều tác dụng với nước ở nhiệt độ thường.',
        'Nhiệt độ nóng chảy tăng dần từ Li đến Cs.',
        'Có độ cứng thấp, cắt được bằng dao.',
        'Trong tự nhiên tồn tại cả ở dạng đơn chất.',
      ],
      answers: [0, 1, 3],
      hints: ['Kim loại kiềm rất hoạt động; liên kết kim loại yếu dần khi bán kính tăng.'],
      solution:
        'Đúng: tính khử tăng từ Li đến Cs; đều khử nước ở nhiệt độ thường; mềm, cắt được bằng dao. Sai: nhiệt độ nóng chảy giảm từ Li đến Cs; kim loại kiềm chỉ tồn tại ở dạng hợp chất.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi muối với màu ngọn lửa khi đốt.',
      left: ['LiCl', '$\\mathrm{Na_2CO_3}$', '$\\mathrm{KNO_3}$'],
      right: ['đỏ tía', 'vàng', 'tím nhạt', 'lục'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Màu ngọn lửa do ion kim loại quyết định, không phụ thuộc gốc acid.'],
      solution:
        '$\\mathrm{Li^+}$ cho màu đỏ tía, $\\mathrm{Na^+}$ màu vàng, $\\mathrm{K^+}$ màu tím nhạt.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào sau đây được dùng làm bột nở và thuốc giảm đau dạ dày do thừa acid?',
      options: ['$\\mathrm{NaHCO_3}$', '$\\mathrm{Na_2CO_3}$', 'NaCl', 'NaOH'],
      answer: 0,
      hints: ['Chất cần kém bền nhiệt (sinh khí khi nướng) và trung hoà acid một cách nhẹ nhàng.'],
      solution:
        '$\\mathrm{NaHCO_3}$ phân huỷ khi đun nóng sinh $\\mathrm{CO_2}$ làm bánh xốp, và trung hoà acid dạ dày: $\\mathrm{HCO_3^-} + \\mathrm{H^+} \\longrightarrow \\mathrm{CO_2} + \\mathrm{H_2O}$.',
    },
    {
      type: 'number',
      prompt:
        'Cho 3,9 g K tác dụng hết với nước dư. Thể tích khí $\\mathrm{H_2}$ thu được ở điều kiện chuẩn là bao nhiêu lít? (K = 39)',
      answer: 1.2395,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$2\\mathrm{K} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{KOH} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{H_2}} = \\dfrac{1}{2} n_{\\mathrm{K}}$; mỗi mol khí ở đkc chiếm 24,79 L.',
      ],
      solution:
        '$n_{\\mathrm{K}} = \\dfrac{3{,}9}{39} = 0{,}1$ mol $\\Rightarrow n_{\\mathrm{H_2}} = 0{,}05$ mol; $V = 0{,}05 \\cdot 24{,}79 = 1{,}2395 \\approx 1{,}24$ L.',
    },
    {
      type: 'number',
      prompt:
        'Nung 8,4 g $\\mathrm{NaHCO_3}$ đến khối lượng không đổi. Khối lượng chất rắn thu được là bao nhiêu gam? (Na = 23, C = 12, O = 16, H = 1)',
      answer: 5.3,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$2\\mathrm{NaHCO_3} \\xrightarrow{t^\\circ} \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$.',
        'Chất rắn còn lại chỉ là $\\mathrm{Na_2CO_3}$ ($M = 106$).',
      ],
      solution:
        '$n_{\\mathrm{NaHCO_3}} = \\dfrac{8{,}4}{84} = 0{,}1$ mol $\\Rightarrow n_{\\mathrm{Na_2CO_3}} = 0{,}05$ mol; $m = 0{,}05 \\cdot 106 = 5{,}3$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của phương pháp Solvay sản xuất soda theo đúng thứ tự.',
      items: [
        'Sục $\\mathrm{NH_3}$ và $\\mathrm{CO_2}$ vào dung dịch NaCl bão hoà.',
        'Làm lạnh để $\\mathrm{NaHCO_3}$ kết tinh rồi lọc lấy tinh thể.',
        'Nhiệt phân $\\mathrm{NaHCO_3}$ thu được $\\mathrm{Na_2CO_3}$.',
        'Thu hồi $\\mathrm{CO_2}$ để dùng lại cho bước đầu.',
      ],
      answer: [0, 1, 2, 3],
      hints: ['$\\mathrm{NaHCO_3}$ phải được tạo ra và tách ra trước khi nhiệt phân.'],
      solution:
        'Tạo $\\mathrm{NaHCO_3}$ từ NaCl, $\\mathrm{NH_3}$, $\\mathrm{CO_2}$; lọc lấy $\\mathrm{NaHCO_3}$ kết tinh; nhiệt phân thành $\\mathrm{Na_2CO_3}$; $\\mathrm{CO_2}$ sinh ra được đưa trở lại bước đầu.',
    },
    {
      type: 'choice',
      prompt:
        'Đốt một mẫu muối thấy ngọn lửa màu vàng; nhìn qua kính cobalt thấy màu tím nhạt. Mẫu muối chứa',
      options: [
        'cả ion $\\mathrm{Na^+}$ và $\\mathrm{K^+}$',
        'chỉ ion $\\mathrm{Na^+}$',
        'chỉ ion $\\mathrm{K^+}$',
        'ion $\\mathrm{Li^+}$',
      ],
      answer: 0,
      hints: ['Kính cobalt hấp thụ ánh vàng của sodium.'],
      solution:
        'Màu vàng chứng tỏ có $\\mathrm{Na^+}$; qua kính cobalt ánh vàng bị hấp thụ, còn thấy màu tím nhạt nên mẫu còn chứa $\\mathrm{K^+}$.',
    },
  ],
  takeaways: [
    'Kim loại kiềm: cấu hình $ns^1$, số oxi hoá $+1$; chỉ tồn tại ở dạng hợp chất trong tự nhiên.',
    'Nhiệt độ nóng chảy thấp, nhẹ, mềm; tính khử rất mạnh, tăng từ Li đến Cs: $2\\mathrm{M} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{MOH} + \\mathrm{H_2}$.',
    '$\\mathrm{NaHCO_3}$ kém bền nhiệt, dùng làm bột nở, thuốc dạ dày; $\\mathrm{Na_2CO_3}$ dùng sản xuất thuỷ tinh, xà phòng, làm mềm nước; soda được sản xuất bằng phương pháp Solvay.',
    'Màu ngọn lửa: $\\mathrm{Li^+}$ đỏ tía, $\\mathrm{Na^+}$ vàng, $\\mathrm{K^+}$ tím nhạt (qua kính cobalt khi có lẫn Na).',
  ],
};
