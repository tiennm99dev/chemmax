/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) do electron tự do gây ra; tính chất hoá học đặc trưng là tính khử: kim loại tác dụng với phi kim, nước, dung dịch acid và dung dịch muối, dự đoán theo dãy điện hoá.',
  intro:
    'Vì sao người ta dùng đồng làm dây điện, nhôm làm giấy gói thực phẩm, còn vàng làm đồ trang sức? Vì sao thả đinh sắt vào dung dịch copper(II) sulfate thì đinh được phủ một lớp đồng đỏ, còn thả dây đồng vào dung dịch iron(II) sulfate thì không có gì xảy ra? Cấu tạo của kim loại và dãy điện hoá giúp trả lời các câu hỏi đó.',
  objectives: [
    'Giải thích được các tính chất vật lí chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt, ánh kim) dựa vào electron tự do.',
    'Trình bày được tính chất hoá học đặc trưng của kim loại là tính khử: tác dụng với phi kim, nước, dung dịch acid, dung dịch muối.',
    'Dựa vào giá trị thế điện cực chuẩn (dãy điện hoá), dự đoán được kim loại có tác dụng với nước, acid và dung dịch muối hay không.',
  ],
  sections: [
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại có các tính chất vật lí chung: tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim. Các tính chất này đều do các electron tự do trong tinh thể kim loại gây ra.',
        },
        {
          type: 'table',
          head: ['Tính chất', 'Giải thích', 'Ứng dụng'],
          rows: [
            [
              'Tính dẻo',
              'Khi có lực tác dụng, các lớp ion dương trượt lên nhau nhưng không tách rời nhờ lực hút với các electron tự do.',
              'Dát mỏng, kéo sợi: giấy nhôm, dây đồng, vàng lá.',
            ],
            [
              'Tính dẫn điện',
              'Khi có hiệu điện thế, các electron tự do chuyển động thành dòng có hướng.',
              'Dây dẫn điện (Cu, Al).',
            ],
            [
              'Tính dẫn nhiệt',
              'Electron tự do ở vùng nóng chuyển động nhanh, va chạm truyền năng lượng cho các ion dương và electron ở vùng lạnh hơn.',
              'Nồi, chảo, bộ tản nhiệt.',
            ],
            [
              'Ánh kim',
              'Các electron tự do phản xạ hầu hết các tia sáng nhìn thấy được.',
              'Đồ trang sức, gương, vật trang trí.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Khả năng dẫn điện giảm dần theo thứ tự: Ag > Cu > Au > Al > Fe. Ngoài các tính chất chung, các kim loại còn khác nhau về khối lượng riêng, nhiệt độ nóng chảy, độ cứng: tungsten (W) có nhiệt độ nóng chảy cao nhất (khoảng 3 410 °C), thuỷ ngân (Hg) là chất lỏng ở nhiệt độ thường, chromium (Cr) cứng nhất, lithium (Li) nhẹ nhất.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học chung: tính khử',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử kim loại dễ nhường electron hoá trị để trở thành ion dương, nên tính chất hoá học đặc trưng của kim loại là tính khử:',
        },
        { type: 'tex', tex: '\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne' },
        {
          type: 'p',
          text: 'Mức độ hoạt động của kim loại được so sánh qua thế điện cực chuẩn $E^\\circ$ của cặp $\\mathrm{M^{n+}/M}$: $E^\\circ$ càng nhỏ, kim loại có tính khử càng mạnh. Dãy điện hoá sắp xếp các cặp theo chiều $E^\\circ$ tăng dần:',
        },
        {
          type: 'table',
          head: [
            'Cặp',
            '$\\mathrm{K^+/K}$',
            '$\\mathrm{Na^+/Na}$',
            '$\\mathrm{Mg^{2+}/Mg}$',
            '$\\mathrm{Al^{3+}/Al}$',
            '$\\mathrm{Zn^{2+}/Zn}$',
            '$\\mathrm{Fe^{2+}/Fe}$',
          ],
          rows: [
            [
              '$E^\\circ$ (V)',
              '$-2{,}924$',
              '$-2{,}713$',
              '$-2{,}356$',
              '$-1{,}676$',
              '$-0{,}762$',
              '$-0{,}440$',
            ],
          ],
        },
        {
          type: 'table',
          head: [
            'Cặp',
            '$\\mathrm{Ni^{2+}/Ni}$',
            '$\\mathrm{Sn^{2+}/Sn}$',
            '$\\mathrm{Pb^{2+}/Pb}$',
            '$\\mathrm{2H^+/H_2}$',
            '$\\mathrm{Cu^{2+}/Cu}$',
            '$\\mathrm{Ag^+/Ag}$',
          ],
          rows: [
            [
              '$E^\\circ$ (V)',
              '$-0{,}257$',
              '$-0{,}137$',
              '$-0{,}126$',
              '$0{,}000$',
              '$+0{,}340$',
              '$+0{,}799$',
            ],
          ],
          caption: 'Thế điện cực chuẩn của một số cặp oxi hoá – khử ở 25 °C.',
        },
      ],
    },
    {
      heading: 'Tác dụng với phi kim',
      blocks: [
        {
          type: 'p',
          text: 'Hầu hết kim loại khử được các phi kim như oxygen, chlorine, sulfur, tạo oxide, muối chloride, muối sulfide:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Mg} + \\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{MgO} \\qquad 2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe} + \\mathrm{S} \\xrightarrow{t^\\circ} \\mathrm{FeS} \\qquad \\mathrm{Hg} + \\mathrm{S} \\longrightarrow \\mathrm{HgS}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Thuỷ ngân tác dụng với sulfur ngay ở nhiệt độ thường, vì vậy dùng bột sulfur để thu gom thuỷ ngân rơi vãi (ví dụ khi vỡ nhiệt kế).',
        },
      ],
    },
    {
      heading: 'Tác dụng với nước',
      blocks: [
        {
          type: 'p',
          text: 'Các kim loại có thế điện cực chuẩn rất âm như kim loại nhóm IA (Li, Na, K, ...) và Ca, Sr, Ba khử được nước ngay ở nhiệt độ thường, tạo dung dịch base và khí hydrogen:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Na} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}\\uparrow \\qquad \\mathrm{Ca} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2} + \\mathrm{H_2}\\uparrow',
        },
        {
          type: 'list',
          items: [
            'Mg hầu như không tác dụng với nước lạnh, tác dụng chậm với nước nóng.',
            'Al không tác dụng với nước vì có lớp oxide $\\mathrm{Al_2O_3}$ mỏng, bền bảo vệ.',
            'Zn, Fe chỉ khử được hơi nước ở nhiệt độ cao, ví dụ $3\\mathrm{Fe} + 4\\mathrm{H_2O} \\xrightarrow{t^\\circ} \\mathrm{Fe_3O_4} + 4\\mathrm{H_2}$.',
            'Các kim loại như Cu, Ag, Au không tác dụng với nước.',
          ],
        },
      ],
    },
    {
      heading: 'Tác dụng với dung dịch acid',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại có $E^\\circ < 0$ (đứng trước hydrogen trong dãy điện hoá) khử được ion $\\mathrm{H^+}$ trong dung dịch $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng thành khí hydrogen:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Zn} + \\mathrm{H_2SO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{H_2}\\uparrow \\qquad \\mathrm{Fe} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}\\uparrow',
        },
        {
          type: 'p',
          text: 'Các kim loại có $E^\\circ > 0$ như Cu, Ag, Au không khử được ion $\\mathrm{H^+}$ trong các dung dịch acid này.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Với dung dịch $\\mathrm{HNO_3}$ và $\\mathrm{H_2SO_4}$ đặc (đã học ở lớp 11), chất bị khử là $\\mathrm{N^{+5}}$, $\\mathrm{S^{+6}}$ chứ không phải $\\mathrm{H^+}$, nên cả Cu, Ag cũng phản ứng và không giải phóng $\\mathrm{H_2}$. Al, Fe, Cr bị thụ động trong $\\mathrm{HNO_3}$ đặc, nguội và $\\mathrm{H_2SO_4}$ đặc, nguội.',
        },
      ],
    },
    {
      heading: 'Tác dụng với dung dịch muối',
      blocks: [
        {
          type: 'p',
          text: 'Theo quy tắc α, kim loại của cặp có $E^\\circ$ nhỏ hơn khử được ion kim loại của cặp có $E^\\circ$ lớn hơn trong dung dịch muối thành kim loại:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu} \\qquad \\mathrm{Cu} + 2\\mathrm{AgNO_3} \\longrightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Các kim loại tác dụng mạnh với nước (Na, K, Ca, Ba, ...) không khử được ion kim loại trong dung dịch muối: chúng khử nước trước, tạo base; base sinh ra tác dụng với muối. Ví dụ: Na vào dung dịch $\\mathrm{CuSO_4}$ cho khí $\\mathrm{H_2}$ và kết tủa xanh $\\mathrm{Cu(OH)_2}$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ống nghiệm ảo',
    instruction:
      'Chọn một kim loại và chất cho vào ống nghiệm. Dự đoán có phản ứng hay không, rồi xem hiện tượng, phương trình hoá học và lời giải thích dựa vào vị trí của kim loại và ion trên dãy điện hoá (kim loại tô màu chàm, cặp của chất bị khử tô màu đỏ).',
  },
  examples: [
    {
      problem:
        'Ngâm một đinh sắt sạch trong dung dịch $\\mathrm{CuSO_4}$. Nêu hiện tượng, viết phương trình hoá học và giải thích dựa vào thế điện cực chuẩn. Nếu có 5,6 g sắt phản ứng hết thì khối lượng đồng bám lên đinh là bao nhiêu?',
      steps: [
        '$E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V $< E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340$ V nên Fe khử được ion $\\mathrm{Cu^{2+}}$.',
        'Phương trình: $\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$. Hiện tượng: có lớp kim loại màu đỏ bám trên đinh sắt, màu xanh của dung dịch nhạt dần.',
        '$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol $\\Rightarrow n_{\\mathrm{Cu}} = 0{,}1$ mol.',
        '$m_{\\mathrm{Cu}} = 0{,}1 \\cdot 64 = 6{,}4$ g.',
      ],
      answer: 'Có đồng đỏ bám trên đinh, dung dịch nhạt màu; $m_{\\mathrm{Cu}} = 6{,}4$ g.',
    },
    {
      problem:
        'Cho 2,4 g Mg tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở điều kiện chuẩn (25 °C, 1 bar; thể tích mol khí là 24,79 L/mol).',
      steps: [
        '$\\mathrm{Mg} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{MgCl_2} + \\mathrm{H_2}\\uparrow$.',
        '$n_{\\mathrm{Mg}} = \\dfrac{2{,}4}{24} = 0{,}1$ mol $\\Rightarrow n_{\\mathrm{H_2}} = 0{,}1$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
      ],
      answer: '$V_{\\mathrm{H_2}} = 2{,}479$ L.',
    },
    {
      problem:
        'Cho một mẩu sodium nhỏ vào dung dịch $\\mathrm{CuSO_4}$. Nêu hiện tượng và viết các phương trình hoá học. Vì sao không thu được đồng?',
      steps: [
        'Sodium khử nước trước: $2\\mathrm{Na} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}\\uparrow$ (có khí thoát ra).',
        'NaOH sinh ra tác dụng với muối: $2\\mathrm{NaOH} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{Cu(OH)_2}\\downarrow + \\mathrm{Na_2SO_4}$ (kết tủa xanh).',
        'Na phản ứng với nước rất nhanh nên không còn để khử ion $\\mathrm{Cu^{2+}}$; vì vậy không có đồng tạo thành.',
      ],
      answer: 'Có khí thoát ra và kết tủa xanh $\\mathrm{Cu(OH)_2}$; Na phản ứng với nước trước.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Các tính chất vật lí chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt, ánh kim) chủ yếu do',
      options: [
        'các electron tự do trong tinh thể kim loại gây ra',
        'các ion dương kim loại ở nút mạng gây ra',
        'khối lượng nguyên tử của kim loại lớn',
        'kim loại có nhiều lớp electron',
      ],
      answer: 0,
      hints: ['Hạt nào chuyển động được trong toàn tinh thể kim loại?'],
      solution:
        'Các tính chất vật lí chung của kim loại đều do các electron tự do trong mạng tinh thể gây ra.',
    },
    {
      type: 'choice',
      prompt: 'Kim loại dẫn điện tốt nhất là',
      options: ['Ag', 'Cu', 'Au', 'Al'],
      answer: 0,
      hints: ['Thứ tự dẫn điện giảm dần: Ag, Cu, Au, Al, Fe.'],
      solution:
        'Bạc (Ag) dẫn điện tốt nhất, sau đó đến Cu, Au, Al, Fe. Trong thực tế dây điện thường làm bằng Cu, Al vì rẻ hơn Ag.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào sau đây tác dụng với nước ở nhiệt độ thường?',
      options: ['Na', 'K', 'Ba', 'Fe', 'Cu', 'Al'],
      answers: [0, 1, 2],
      hints: [
        'Kim loại nhóm IA và Ca, Sr, Ba khử được nước ở nhiệt độ thường.',
        'Al có lớp oxide bảo vệ; Fe chỉ khử hơi nước ở nhiệt độ cao.',
      ],
      solution:
        'Na, K, Ba khử được nước ở nhiệt độ thường, ví dụ $\\mathrm{Ba} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Ba(OH)_2} + \\mathrm{H_2}\\uparrow$. Fe, Cu, Al không phản ứng ở điều kiện thường.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào sau đây tác dụng được với dung dịch $\\mathrm{HCl}$ loãng?',
      options: ['Zn', 'Fe', 'Mg', 'Al', 'Cu', 'Ag'],
      answers: [0, 1, 2, 3],
      hints: ['Kim loại phải có $E^\\circ$ của cặp $\\mathrm{M^{n+}/M}$ nhỏ hơn 0.'],
      solution:
        'Zn, Fe, Mg, Al có $E^\\circ < 0$ nên khử được $\\mathrm{H^+}$; Cu ($+0{,}340$ V) và Ag ($+0{,}799$ V) có $E^\\circ > 0$ nên không phản ứng.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây xảy ra được trong dung dịch?',
      options: [
        '$\\mathrm{Zn} + \\mathrm{FeSO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{Fe}$',
        '$\\mathrm{Cu} + \\mathrm{FeSO_4} \\longrightarrow \\mathrm{CuSO_4} + \\mathrm{Fe}$',
        '$\\mathrm{Ag} + \\mathrm{CuSO_4} \\longrightarrow$ sản phẩm',
        '$\\mathrm{Fe} + \\mathrm{ZnSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Zn}$',
      ],
      answer: 0,
      hints: [
        'Kim loại phải thuộc cặp có $E^\\circ$ nhỏ hơn cặp của ion trong muối.',
        '$E^\\circ$: Zn $-0{,}762$; Fe $-0{,}440$; Cu $+0{,}340$; Ag $+0{,}799$ (V).',
      ],
      solution:
        '$E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V $< E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V nên Zn khử được $\\mathrm{Fe^{2+}}$. Các phản ứng còn lại có kim loại yếu hơn ion nên không xảy ra.',
    },
    {
      type: 'number',
      prompt:
        'Cho 2,7 g Al tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí $\\mathrm{H_2}$ (L) thu được ở điều kiện chuẩn, biết thể tích mol khí là 24,79 L/mol (làm tròn đến hai chữ số thập phân).',
      answer: 3.72,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$2\\mathrm{Al} + 6\\mathrm{HCl} \\longrightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}$.',
        '$n_{\\mathrm{H_2}} = \\dfrac{3}{2} n_{\\mathrm{Al}}$.',
      ],
      solution:
        '$n_{\\mathrm{Al}} = \\dfrac{2{,}7}{27} = 0{,}1$ mol, $n_{\\mathrm{H_2}} = 0{,}15$ mol, $V = 0{,}15 \\cdot 24{,}79 = 3{,}7185 \\approx 3{,}72$ L.',
    },
    {
      type: 'number',
      prompt:
        'Ngâm một lá kẽm (dư) vào dung dịch chứa 0,2 mol $\\mathrm{CuSO_4}$ đến khi phản ứng hoàn toàn. Khối lượng lá kẽm giảm bao nhiêu gam? (Zn = 65, Cu = 64)',
      answer: 0.2,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$\\mathrm{Zn} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}$: cứ 1 mol Zn tan thì 1 mol Cu bám vào.',
        'Mỗi mol phản ứng, khối lượng lá kẽm thay đổi $65 - 64 = 1$ g.',
      ],
      solution:
        '0,2 mol Zn tan ($0{,}2 \\cdot 65 = 13$ g), 0,2 mol Cu bám vào ($0{,}2 \\cdot 64 = 12{,}8$ g). Khối lượng lá kẽm giảm $13 - 12{,}8 = 0{,}2$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các kim loại theo chiều tính khử giảm dần.',
      items: ['Cu', 'Mg', 'Fe', 'Ag', 'Zn'],
      answer: [1, 4, 2, 0, 3],
      hints: [
        'Tính khử càng mạnh khi $E^\\circ$ của cặp $\\mathrm{M^{n+}/M}$ càng nhỏ.',
        '$E^\\circ$ (V): Mg $-2{,}356$; Zn $-0{,}762$; Fe $-0{,}440$; Cu $+0{,}340$; Ag $+0{,}799$.',
      ],
      solution: 'Theo $E^\\circ$ tăng dần, tính khử giảm dần: Mg > Zn > Fe > Cu > Ag.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi kim loại với ứng dụng dựa trên tính chất vật lí nổi bật của nó.',
      left: ['Tungsten (W)', 'Copper (Cu)', 'Aluminium (Al)', 'Gold (Au)'],
      right: [
        'Dây tóc bóng đèn sợi đốt (nhiệt độ nóng chảy rất cao)',
        'Lõi dây dẫn điện (dẫn điện tốt, giá hợp lí)',
        'Giấy gói thực phẩm (rất dẻo, nhẹ)',
        'Đồ trang sức (ánh kim đẹp, bền)',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Kim loại nào có nhiệt độ nóng chảy cao nhất?'],
      solution:
        'W nóng chảy ở khoảng 3 410 °C nên làm dây tóc bóng đèn; Cu dẫn điện tốt làm dây điện; Al dẻo, nhẹ làm giấy gói; Au có ánh kim, bền làm trang sức.',
    },
  ],
  takeaways: [
    'Tính dẻo, dẫn điện, dẫn nhiệt và ánh kim của kim loại đều do electron tự do gây ra.',
    'Tính chất hoá học đặc trưng của kim loại là tính khử: $\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne$.',
    'Kim loại nhóm IA và Ca, Sr, Ba khử được nước ở nhiệt độ thường.',
    'Kim loại có $E^\\circ < 0$ khử được $\\mathrm{H^+}$ trong dung dịch $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng, giải phóng $\\mathrm{H_2}$.',
    'Kim loại của cặp có $E^\\circ$ nhỏ hơn khử được ion kim loại của cặp có $E^\\circ$ lớn hơn trong dung dịch muối (trừ các kim loại tác dụng mạnh với nước).',
  ],
};
