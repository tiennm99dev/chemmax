/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ethylic alcohol (ethanol) có công thức phân tử C2H6O, công thức cấu tạo CH3–CH2–OH; nhóm –OH gây nên tính chất đặc trưng. Ethylic alcohol là chất lỏng không màu, sôi ở 78,3 °C, tan vô hạn trong nước; độ cồn là số mL ethylic alcohol nguyên chất trong 100 mL hỗn hợp. Ethylic alcohol cháy toả nhiều nhiệt và tác dụng với sodium giải phóng khí hydrogen. Lạm dụng rượu, bia gây hại cho sức khoẻ và xã hội.',
  intro:
    'Chai cồn sát khuẩn ghi “cồn 70°”, lon bia ghi “5% vol”, xăng E5 có 5% ethanol. Tất cả đều nói về cùng một chất: ethylic alcohol. Con số 70° hay 5% cho biết điều gì, và cấu tạo nào làm ethylic alcohol khác hẳn các hydrocarbon đã học?',
  objectives: [
    'Viết được công thức phân tử, công thức cấu tạo của ethylic alcohol và chỉ ra nhóm –OH.',
    'Nêu được tính chất vật lí của ethylic alcohol; hiểu và tính được độ cồn.',
    'Trình bày được tính chất hoá học của ethylic alcohol: phản ứng cháy, phản ứng với sodium; viết được phương trình hoá học.',
    'Nêu được các phương pháp điều chế, ứng dụng của ethylic alcohol và tác hại của việc lạm dụng rượu, bia.',
  ],
  sections: [
    {
      heading: 'Công thức và cấu tạo',
      blocks: [
        {
          type: 'p',
          text: 'Ethylic alcohol (còn gọi là ethanol) có công thức phân tử $\\mathrm{C_2H_6O}$, khối lượng phân tử $46$ amu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CH_2{-}OH} \\quad \\text{hay} \\quad \\mathrm{C_2H_5OH}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhóm –OH',
          text: 'Trong phân tử ethylic alcohol có một nguyên tử H không liên kết với nguyên tử C mà liên kết với nguyên tử O, tạo thành nhóm $\\mathrm{{-}OH}$. Chính nhóm $\\mathrm{{-}OH}$ làm cho ethylic alcohol có tính chất đặc trưng.',
        },
        {
          type: 'p',
          text: 'Ethylic alcohol không phải hydrocarbon: ngoài C và H, phân tử còn có nguyên tử O. Đây là một dẫn xuất của hydrocarbon.',
        },
      ],
    },
    {
      heading: 'Tính chất vật lí. Độ cồn',
      blocks: [
        {
          type: 'list',
          items: [
            'Ethylic alcohol là chất lỏng, không màu, có mùi đặc trưng, vị cay.',
            'Sôi ở $78{,}3\\ ^\\circ\\mathrm{C}$; khối lượng riêng $0{,}789$ g/mL (ở $20\\ ^\\circ\\mathrm{C}$), nhẹ hơn nước.',
            'Tan vô hạn trong nước; hoà tan được nhiều chất như iodine, benzene.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Độ cồn',
          text: 'Độ cồn là số mililít ethylic alcohol nguyên chất có trong $100$ mL dung dịch (hỗn hợp ethylic alcohol với nước) ở $20\\ ^\\circ\\mathrm{C}$, kí hiệu $x^\\circ$ hoặc $x\\%$ vol. Ví dụ: trong $100$ mL cồn $70^\\circ$ có $70$ mL ethylic alcohol nguyên chất.',
        },
        {
          type: 'p',
          text: 'Độ cồn $= \\dfrac{V_{\\text{ethylic alcohol}}}{V_{\\text{hh}}} \\times 100$',
        },
        {
          type: 'p',
          text: 'Trong đó $V_{\\text{ethylic alcohol}}$ là thể tích ethylic alcohol nguyên chất, $V_{\\text{hh}}$ là thể tích hỗn hợp, cùng đơn vị (mL hoặc L). Trong bài tập, nếu không nói gì thêm, ta coi thể tích hỗn hợp bằng tổng thể tích ethylic alcohol và nước.',
        },
        {
          type: 'table',
          head: ['Hỗn hợp', 'Độ cồn thường gặp'],
          rows: [
            ['Bia', 'khoảng $3^\\circ$ đến $8^\\circ$'],
            ['Rượu vang', 'khoảng $10^\\circ$ đến $15^\\circ$'],
            ['Các loại rượu mạnh', 'khoảng $30^\\circ$ đến $50^\\circ$'],
            ['Cồn sát khuẩn', '$70^\\circ$ đến $75^\\circ$'],
          ],
          caption: 'Độ cồn của một số hỗn hợp ethylic alcohol với nước',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Phản ứng cháy',
          text: 'Ethylic alcohol dễ cháy trong không khí, ngọn lửa màu xanh nhạt, tạo khí carbon dioxide và hơi nước, toả nhiều nhiệt.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_5OH} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO_2} + 3\\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Phản ứng với sodium',
          text: 'Cho mẩu sodium vào ethylic alcohol, mẩu sodium tan dần và có bọt khí thoát ra. Nguyên tử Na thay thế nguyên tử H của nhóm $\\mathrm{{-}OH}$, tạo sodium ethylate và khí hydrogen.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}\\uparrow',
        },
        {
          type: 'p',
          text: 'Năm nguyên tử H liên kết với C không bị Na thay thế. Các kim loại mạnh khác như potassium (K) cũng phản ứng tương tự. Hãy chọn đúng nguyên tử H mà Na thay thế trong mô hình dưới đây.',
        },
        { type: 'widget', name: 'sodium' },
      ],
    },
    {
      heading: 'Điều chế và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Lên men các nguyên liệu chứa tinh bột (gạo, ngô, sắn) hoặc đường (rỉ đường, quả chín): tinh bột chuyển thành đường, đường lên men tạo ethylic alcohol. Nguyên liệu chứa cellulose (rơm rạ, gỗ vụn) cũng có thể dùng.',
            'Trong công nghiệp, cho ethylene cộng nước khi có acid làm xúc tác và đun nóng.',
          ],
          ordered: true,
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2{=}CH_2} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H^+},\\ t^\\circ} \\mathrm{CH_3{-}CH_2{-}OH}',
        },
        {
          type: 'list',
          items: [
            'Làm nhiên liệu: cồn đốt, xăng sinh học E5 (xăng có $5\\%$ ethanol).',
            'Làm dung môi pha nước hoa, vecni, dược phẩm.',
            'Sát khuẩn trong y tế (cồn $70^\\circ$).',
            'Nguyên liệu sản xuất acetic acid, ethyl acetate và nhiều hoá chất khác; pha chế đồ uống có cồn.',
          ],
        },
      ],
    },
    {
      heading: 'Tác hại của việc lạm dụng rượu, bia',
      blocks: [
        {
          type: 'list',
          items: [
            'Với sức khoẻ: tăng nguy cơ viêm gan, xơ gan, viêm loét dạ dày, tăng huyết áp, xơ vữa động mạch; tổn thương hệ thần kinh, rối loạn tâm thần.',
            'Với xã hội: là một trong những nguyên nhân gây tai nạn giao thông, tai nạn lao động, bạo lực trong gia đình và xã hội.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Pháp luật Việt Nam cấm bán rượu, bia cho người chưa đủ 18 tuổi và cấm điều khiển phương tiện giao thông khi trong máu hoặc hơi thở có nồng độ cồn. Rượu không rõ nguồn gốc có thể chứa methanol, rất độc, gây mù loà hoặc tử vong.',
        },
      ],
    },
  ],
  explore: {
    title: 'Pha cồn',
    instruction:
      'Kéo hai thanh trượt để rót ethylic alcohol nguyên chất và nước vào cốc, quan sát độ cồn trên thang. Chuyển sang “Pha theo yêu cầu” và tính xem cần bao nhiêu mililít mỗi chất để được đúng thể tích và độ cồn đã cho.',
  },
  examples: [
    {
      problem:
        'Một chai rượu có thể tích $250$ mL, độ cồn $40^\\circ$. Tính thể tích và khối lượng ethylic alcohol nguyên chất trong chai, biết khối lượng riêng của ethylic alcohol là $0{,}8$ g/mL.',
      steps: [
        'Rượu $40^\\circ$: cứ $100$ mL rượu có $40$ mL ethylic alcohol nguyên chất.',
        '$V_{\\mathrm{C_2H_5OH}} = \\dfrac{40 \\times 250}{100} = 100$ mL.',
        '$m = D \\times V = 0{,}8 \\times 100 = 80$ g.',
      ],
      answer: 'Trong chai có $100$ mL, tức $80$ g ethylic alcohol nguyên chất.',
    },
    {
      problem:
        'Cho sodium dư vào $9{,}2$ g ethylic alcohol nguyên chất. Tính thể tích khí hydrogen thoát ra ở điều kiện chuẩn (C = 12, H = 1, O = 16).',
      steps: [
        '$M_{\\mathrm{C_2H_5OH}} = 46$ g/mol, nên $n_{\\mathrm{C_2H_5OH}} = \\dfrac{9{,}2}{46} = 0{,}2$ mol.',
        'Theo phương trình $2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}$: $n_{\\mathrm{H_2}} = \\dfrac{1}{2} n_{\\mathrm{C_2H_5OH}} = 0{,}1$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
      ],
      answer: 'Thu được $2{,}479$ L khí hydrogen (điều kiện chuẩn).',
    },
    {
      problem:
        'Từ cồn $96^\\circ$ và nước cất, cần pha $300$ mL cồn sát khuẩn $70^\\circ$. Tính thể tích cồn $96^\\circ$ và thể tích nước cần dùng (bỏ qua sự co thể tích khi pha).',
      steps: [
        'Ethylic alcohol nguyên chất cần có trong $300$ mL cồn $70^\\circ$: $\\dfrac{70 \\times 300}{100} = 210$ mL.',
        'Lượng này lấy từ cồn $96^\\circ$: $V = \\dfrac{210 \\times 100}{96} = 218{,}75$ mL.',
        'Thể tích nước cất: $300 - 218{,}75 = 81{,}25$ mL.',
      ],
      answer: 'Cần $218{,}75$ mL cồn $96^\\circ$ và $81{,}25$ mL nước cất.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhóm nguyên tử gây nên tính chất đặc trưng của ethylic alcohol là',
      options: [
        '$\\mathrm{{-}CH_3}$',
        '$\\mathrm{{-}OH}$',
        '$\\mathrm{{-}COOH}$',
        '$\\mathrm{{-}CH_2{-}}$',
      ],
      answer: 1,
      hints: ['Tìm nhóm có nguyên tử H liên kết với nguyên tử O.'],
      solution:
        'Công thức cấu tạo $\\mathrm{CH_3{-}CH_2{-}OH}$: nhóm $\\mathrm{{-}OH}$ gây nên tính chất đặc trưng của ethylic alcohol.',
    },
    {
      type: 'choice',
      prompt: 'Công thức cấu tạo của ethylic alcohol là',
      options: [
        '$\\mathrm{CH_3{-}O{-}CH_3}$',
        '$\\mathrm{CH_3{-}CH_2{-}OH}$',
        '$\\mathrm{CH_3{-}COOH}$',
        '$\\mathrm{CH_2{=}CH_2}$',
      ],
      answer: 1,
      hints: [
        'Công thức phân tử $\\mathrm{C_2H_6O}$; loại các chất có số nguyên tử khác.',
        'Ethylic alcohol có nhóm $\\mathrm{{-}OH}$.',
      ],
      solution:
        '$\\mathrm{CH_3{-}CH_2{-}OH}$. Chất $\\mathrm{CH_3{-}O{-}CH_3}$ cũng có công thức $\\mathrm{C_2H_6O}$ nhưng không có nhóm $\\mathrm{{-}OH}$; $\\mathrm{CH_3{-}COOH}$ là acetic acid, $\\mathrm{CH_2{=}CH_2}$ là ethylene.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về tính chất vật lí của ethylic alcohol.',
      options: [
        'Là chất lỏng không màu, có mùi đặc trưng.',
        'Tan vô hạn trong nước.',
        'Nặng hơn nước.',
        'Sôi ở $78{,}3\\ ^\\circ\\mathrm{C}$, thấp hơn nhiệt độ sôi của nước.',
      ],
      answers: [0, 1, 3],
      hints: ['Khối lượng riêng của ethylic alcohol là $0{,}789$ g/mL; của nước là $1$ g/mL.'],
      solution:
        'Ethylic alcohol là chất lỏng không màu, mùi đặc trưng, tan vô hạn trong nước, sôi ở $78{,}3\\ ^\\circ\\mathrm{C}$. Khối lượng riêng $0{,}789$ g/mL nhỏ hơn của nước nên nó nhẹ hơn nước.',
    },
    {
      type: 'number',
      prompt: 'Trong $500$ mL rượu $40^\\circ$ có bao nhiêu mililít ethylic alcohol nguyên chất?',
      answer: 200,
      unit: 'mL',
      hints: ['Rượu $40^\\circ$: cứ $100$ mL rượu có $40$ mL ethylic alcohol.'],
      solution: '$V = \\dfrac{40 \\times 500}{100} = 200$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Hoà $45$ mL ethylic alcohol nguyên chất với nước, thu được $150$ mL hỗn hợp. Hỗn hợp có độ cồn bao nhiêu độ?',
      answer: 30,
      unit: '°',
      hints: ['Độ cồn $= \\dfrac{V_{\\text{ethylic alcohol}}}{V_{\\text{hh}}} \\times 100$.'],
      solution: 'Độ cồn $= \\dfrac{45}{150} \\times 100 = 30^\\circ$.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng ethylic alcohol nguyên chất có trong $200$ mL cồn $70^\\circ$, biết khối lượng riêng của ethylic alcohol là $0{,}8$ g/mL.',
      answer: 112,
      unit: 'g',
      hints: ['Tính thể tích ethylic alcohol nguyên chất trước.', 'Rồi dùng $m = D \\times V$.'],
      solution: '$V = \\dfrac{70 \\times 200}{100} = 140$ mL; $m = 0{,}8 \\times 140 = 112$ g.',
    },
    {
      type: 'choice',
      prompt: 'Khi ethylic alcohol tác dụng với sodium, nguyên tử Na thay thế',
      options: [
        'một nguyên tử H bất kì trong phân tử',
        'nguyên tử H của nhóm $\\mathrm{{-}OH}$',
        'nguyên tử H của nhóm $\\mathrm{{-}CH_3}$',
        'cả nhóm $\\mathrm{{-}OH}$',
      ],
      answer: 1,
      hints: ['Sản phẩm là $\\mathrm{C_2H_5ONa}$: nguyên tử O vẫn còn trong sản phẩm.'],
      solution:
        'Na thay thế nguyên tử H của nhóm $\\mathrm{{-}OH}$: $2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}$. Các nguyên tử H liên kết với C không bị thay thế.',
    },
    {
      type: 'number',
      prompt:
        'Cho sodium dư vào $4{,}6$ g ethylic alcohol nguyên chất. Thể tích khí hydrogen thu được ở điều kiện chuẩn là bao nhiêu lít?',
      answer: 1.2395,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{4{,}6}{46}$ mol.',
        'Hai phân tử ethylic alcohol tạo một phân tử $\\mathrm{H_2}$; $V = n \\times 24{,}79$.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = 0{,}1$ mol; $n_{\\mathrm{H_2}} = 0{,}05$ mol; $V = 0{,}05 \\times 24{,}79 = 1{,}2395$ L.',
    },
    {
      type: 'number',
      prompt:
        'Trong phương trình $\\mathrm{C_2H_5OH} + x\\,\\mathrm{O_2} \\rightarrow 2\\mathrm{CO_2} + 3\\mathrm{H_2O}$, hệ số $x$ bằng bao nhiêu?',
      answer: 3,
      hints: [
        'Đếm số nguyên tử O ở vế phải, rồi trừ đi nguyên tử O có sẵn trong $\\mathrm{C_2H_5OH}$.',
      ],
      solution:
        'Vế phải có $2 \\times 2 + 3 = 7$ nguyên tử O. Phân tử ethylic alcohol đã có $1$ nguyên tử O, nên $2x = 6$, $x = 3$.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $9{,}2$ g ethylic alcohol. Tính khối lượng khí carbon dioxide tạo thành, theo gam.',
      answer: 17.6,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{9{,}2}{46}$ mol.',
        'Mỗi mol ethylic alcohol tạo $2$ mol $\\mathrm{CO_2}$; $M_{\\mathrm{CO_2}} = 44$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = 0{,}2$ mol; $n_{\\mathrm{CO_2}} = 0{,}4$ mol; $m = 0{,}4 \\times 44 = 17{,}6$ g.',
    },
    {
      type: 'number',
      prompt:
        'Có $140$ mL cồn $90^\\circ$. Cần thêm bao nhiêu mililít nước để được cồn $70^\\circ$ (bỏ qua sự co thể tích)?',
      answer: 40,
      unit: 'mL',
      hints: [
        'Khi thêm nước, thể tích ethylic alcohol nguyên chất không đổi.',
        'Tính thể tích hỗn hợp $70^\\circ$ chứa đúng lượng ethylic alcohol đó.',
      ],
      solution:
        'Ethylic alcohol nguyên chất: $\\dfrac{90 \\times 140}{100} = 126$ mL. Cồn $70^\\circ$ chứa $126$ mL này có thể tích $\\dfrac{126 \\times 100}{70} = 180$ mL. Cần thêm $180 - 140 = 40$ mL nước.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các ứng dụng của ethylic alcohol.',
      options: [
        'Pha vào xăng làm xăng sinh học E5',
        'Làm dung môi pha nước hoa, dược phẩm',
        'Sát khuẩn trong y tế',
        'Làm mất màu nước bromine để nhận biết alkene',
      ],
      answers: [0, 1, 2],
      hints: ['Ethylic alcohol chỉ có liên kết đơn, không cộng bromine.'],
      solution:
        'Ethylic alcohol dùng làm nhiên liệu (xăng E5), dung môi, chất sát khuẩn. Nó không làm mất màu nước bromine; alkene mới làm được điều đó.',
    },
  ],
  takeaways: [
    'Ethylic alcohol: $\\mathrm{C_2H_6O}$, công thức cấu tạo $\\mathrm{CH_3{-}CH_2{-}OH}$; nhóm $\\mathrm{{-}OH}$ gây nên tính chất đặc trưng.',
    'Chất lỏng không màu, sôi ở $78{,}3\\ ^\\circ\\mathrm{C}$, nhẹ hơn nước, tan vô hạn trong nước.',
    'Độ cồn $= \\dfrac{V_{\\text{ethylic alcohol}}}{V_{\\text{hh}}} \\times 100$: số mL ethylic alcohol nguyên chất trong $100$ mL hỗn hợp.',
    'Cháy: $\\mathrm{C_2H_5OH} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{CO_2} + 3\\mathrm{H_2O}$; với sodium: $2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}$.',
    'Điều chế bằng lên men tinh bột, đường hoặc cộng nước vào ethylene. Lạm dụng rượu, bia gây hại cho sức khoẻ và xã hội.',
  ],
};
