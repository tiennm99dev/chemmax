/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Alkene là hydrocarbon mạch hở có một liên kết đôi C=C trong phân tử, công thức chung CnH2n (n ≥ 2); chất tiêu biểu là ethylene CH2=CH2. Ethylene cháy tạo CO2 và H2O, làm mất màu nước bromine (phản ứng cộng) và tham gia phản ứng trùng hợp tạo polyethylene (PE).',
  intro:
    'Người bán hoa quả thường để chuối xanh cạnh vài quả chín cho chuối mau chín: quả chín sinh ra một lượng nhỏ khí ethylene kích thích quả xanh chín theo. Túi nilon đựng hàng cũng được làm từ ethylene. Điều gì trong phân tử ethylene khiến nó khác hẳn ethane và có những ứng dụng như vậy?',
  objectives: [
    'Nêu được khái niệm alkene và công thức chung của alkene.',
    'Viết được công thức cấu tạo và gọi tên ethylene; nêu được tính chất vật lí của ethylene.',
    'Trình bày được tính chất hoá học của ethylene: phản ứng cháy, phản ứng cộng làm mất màu nước bromine, phản ứng trùng hợp; viết được phương trình hoá học.',
    'Trình bày được ứng dụng của ethylene.',
  ],
  sections: [
    {
      heading: 'Khái niệm alkene. Ethylene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Alkene',
          text: 'Alkene là các hydrocarbon mạch hở, trong phân tử có một liên kết đôi $\\mathrm{C{=}C}$. Công thức chung của alkene là $\\mathrm{C_nH_{2n}}$ với $n \\ge 2$.',
        },
        {
          type: 'table',
          head: ['Tên', 'Công thức phân tử', 'Công thức cấu tạo thu gọn'],
          rows: [
            ['Ethylene', '$\\mathrm{C_2H_4}$', '$\\mathrm{CH_2{=}CH_2}$'],
            ['Propylene', '$\\mathrm{C_3H_6}$', '$\\mathrm{CH_2{=}CH{-}CH_3}$'],
          ],
          caption: 'Hai alkene đầu dãy',
        },
        {
          type: 'p',
          text: 'Trong phân tử ethylene, hai nguyên tử carbon liên kết với nhau bằng một liên kết đôi; mỗi nguyên tử carbon còn liên kết với hai nguyên tử hydrogen. Trong liên kết đôi có một liên kết kém bền, dễ bị đứt trong các phản ứng hoá học.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tính chất vật lí của ethylene',
          text: 'Ethylene là chất khí, không màu, không mùi, ít tan trong nước, nhẹ hơn không khí ($M = 28$ g/mol, nhỏ hơn $29$ g/mol của không khí).',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của ethylene',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Phản ứng cháy',
          text: 'Ethylene cháy trong oxygen (không khí) tạo carbon dioxide và nước, toả nhiều nhiệt.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_4} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO_2} + 2\\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Phản ứng cộng bromine',
          text: 'Dẫn khí ethylene vào nước bromine màu vàng cam: dung dịch nhạt màu dần rồi mất màu. Liên kết kém bền trong liên kết đôi bị đứt, mỗi nguyên tử carbon nhận thêm một nguyên tử bromine, tạo 1,2-dibromoethane.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2{=}CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}',
        },
        {
          type: 'p',
          text: 'Methane và các alkane khác chỉ có liên kết đơn, không làm mất màu nước bromine. Vì vậy nước bromine được dùng để phân biệt alkene với alkane. Phản ứng trên là phản ứng cộng; các alkene khác cũng có phản ứng cộng tương tự.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '3. Phản ứng trùng hợp',
          text: 'Ở nhiệt độ, áp suất cao và có xúc tác, liên kết kém bền trong liên kết đôi của nhiều phân tử ethylene bị đứt, các phân tử nối với nhau thành mạch rất dài, tạo polyethylene (PE).',
        },
        {
          type: 'tex',
          tex: 'n\\,\\mathrm{CH_2{=}CH_2} \\xrightarrow{t^\\circ,\\ p,\\ xt} (\\mathrm{{-}CH_2{-}CH_2{-}})_n',
        },
        {
          type: 'p',
          text: 'Quá trình nhiều phân tử nhỏ (monomer) kết hợp với nhau thành phân tử rất lớn (polymer) gọi là phản ứng trùng hợp. Mỗi đoạn $\\mathrm{{-}CH_2{-}CH_2{-}}$ lặp lại trong mạch gọi là một mắt xích; $n$ có thể lên tới hàng nghìn, hàng chục nghìn.',
        },
        { type: 'widget', name: 'polymer' },
      ],
    },
    {
      heading: 'Ứng dụng của ethylene',
      blocks: [
        {
          type: 'list',
          items: [
            'Sản xuất polyethylene (PE) làm túi nilon, màng bọc thực phẩm, chai lọ, ống dẫn nước.',
            'Điều chế ethylic alcohol, acetic acid và nhiều hoá chất khác; điều chế các polymer như poly(vinyl chloride) (PVC).',
            'Kích thích quả mau chín.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nước bromine mất màu',
    instruction:
      'Chọn khí ethylene hoặc methane rồi bấm “Sục khí” nhiều lần. Theo dõi màu nước bromine và bảng số mol: với ethylene, mỗi phần khí cộng với cùng số mol $\\mathrm{Br_2}$ cho tới khi hết bromine; với methane, màu không đổi. Ở mục “Phản ứng trùng hợp” phía trên, hãy nối từng phân tử ethylene vào mạch polyethylene.',
  },
  examples: [
    {
      problem:
        'Dẫn khí ethylene vào ống nghiệm đựng nước bromine. Nêu hiện tượng và viết phương trình hoá học. Nếu thay ethylene bằng methane thì có hiện tượng gì?',
      steps: [
        'Phân tử ethylene có liên kết đôi $\\mathrm{C{=}C}$, trong đó một liên kết kém bền dễ bị đứt.',
        'Ethylene cộng với bromine, bromine bị tiêu thụ nên màu vàng cam của dung dịch nhạt dần rồi mất hẳn.',
        'Methane chỉ có liên kết đơn, không phản ứng với bromine nên màu dung dịch không đổi.',
      ],
      answer:
        'Nước bromine mất màu: $\\mathrm{CH_2{=}CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$. Với methane, nước bromine không mất màu.',
    },
    {
      problem:
        'Dẫn $3{,}7185$ L (điều kiện chuẩn) hỗn hợp methane và ethylene qua bình đựng nước bromine dư, thấy khối lượng bình tăng $2{,}8$ g. Tính phần trăm thể tích ethylene trong hỗn hợp (C = 12, H = 1).',
      steps: [
        'Chỉ ethylene bị giữ lại trong bình (cộng bromine), nên khối lượng bình tăng là khối lượng ethylene: $m_{\\mathrm{C_2H_4}} = 2{,}8$ g.',
        '$n_{\\mathrm{C_2H_4}} = \\dfrac{2{,}8}{28} = 0{,}1$ mol.',
        'Số mol hỗn hợp: $n = \\dfrac{3{,}7185}{24{,}79} = 0{,}15$ mol.',
        'Với chất khí, phần trăm thể tích bằng phần trăm số mol: $\\dfrac{0{,}1}{0{,}15} \\times 100\\% \\approx 66{,}67\\%$.',
      ],
      answer: 'Ethylene chiếm khoảng $66{,}67\\%$ thể tích hỗn hợp.',
    },
    {
      problem:
        'Từ $5{,}6$ tấn ethylene người ta sản xuất được polyethylene với hiệu suất $80\\%$. Tính khối lượng polyethylene thu được.',
      steps: [
        '$n\\,\\mathrm{CH_2{=}CH_2} \\rightarrow (\\mathrm{{-}CH_2{-}CH_2{-}})_n$: trong phản ứng trùng hợp, khối lượng polymer bằng khối lượng monomer đã phản ứng.',
        'Nếu hiệu suất $100\\%$ thì thu được $5{,}6$ tấn PE.',
        'Với hiệu suất $80\\%$: $m = 5{,}6 \\times 0{,}8 = 4{,}48$ tấn.',
      ],
      answer: 'Thu được $4{,}48$ tấn polyethylene.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của alkene là',
      options: [
        '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 1$)',
      ],
      answer: 1,
      hints: [
        'Kiểm tra với ethylene $\\mathrm{C_2H_4}$.',
        'Liên kết đôi cần ít nhất hai nguyên tử carbon.',
      ],
      solution:
        'Alkene có công thức chung $\\mathrm{C_nH_{2n}}$, và vì cần liên kết đôi $\\mathrm{C{=}C}$ nên $n \\ge 2$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các chất là alkene.',
      options: [
        '$\\mathrm{CH_2{=}CH_2}$',
        '$\\mathrm{CH_3{-}CH_3}$',
        '$\\mathrm{CH_2{=}CH{-}CH_3}$',
        '$\\mathrm{CH_3{-}CH_2{-}OH}$',
      ],
      answers: [0, 2],
      hints: ['Alkene là hydrocarbon mạch hở có một liên kết đôi $\\mathrm{C{=}C}$.'],
      solution:
        'Ethylene $\\mathrm{CH_2{=}CH_2}$ và propylene $\\mathrm{CH_2{=}CH{-}CH_3}$ là alkene. Ethane chỉ có liên kết đơn (alkane); ethylic alcohol có oxygen nên không phải hydrocarbon.',
    },
    {
      type: 'choice',
      prompt: 'Để phân biệt hai khí methane và ethylene, có thể dẫn từng khí qua',
      options: ['nước vôi trong', 'nước bromine', 'nước cất', 'dung dịch muối ăn'],
      answer: 1,
      hints: ['Chọn chất chỉ phản ứng với một trong hai khí và có hiện tượng nhìn thấy được.'],
      solution:
        'Ethylene làm mất màu nước bromine; methane thì không. Cả hai khí đều không làm vẩn đục nước vôi trong và hầu như không tan trong nước.',
    },
    {
      type: 'choice',
      prompt: 'Sản phẩm của phản ứng giữa ethylene và bromine là',
      options: [
        '$\\mathrm{CH_3{-}CH_2Br}$',
        '$\\mathrm{BrCH_2{-}CH_2Br}$',
        '$\\mathrm{CH_2{=}CHBr}$',
        '$\\mathrm{CH_3{-}CH_3}$',
      ],
      answer: 1,
      hints: ['Liên kết đôi mở ra; mỗi nguyên tử carbon nhận một nguyên tử Br.'],
      solution:
        '$\\mathrm{CH_2{=}CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$ (1,2-dibromoethane): cả hai nguyên tử Br cộng vào hai nguyên tử C của liên kết đôi.',
    },
    {
      type: 'number',
      prompt:
        'Trong phương trình $\\mathrm{C_2H_4} + x\\,\\mathrm{O_2} \\rightarrow 2\\mathrm{CO_2} + 2\\mathrm{H_2O}$, hệ số $x$ bằng bao nhiêu?',
      answer: 3,
      hints: ['Đếm số nguyên tử O ở vế phải.'],
      solution: 'Vế phải có $2 \\times 2 + 2 = 6$ nguyên tử O, nên $2x = 6$, $x = 3$.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn $2{,}479$ L khí ethylene (điều kiện chuẩn) vào nước bromine dư. Tính khối lượng bromine đã phản ứng, theo gam (Br = 80).',
      answer: 16,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{C_2H_4}} = \\dfrac{2{,}479}{24{,}79}$.',
        'Ethylene và bromine phản ứng theo tỉ lệ mol $1 : 1$; $M_{\\mathrm{Br_2}} = 160$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_4}} = 0{,}1$ mol $= n_{\\mathrm{Br_2}}$; $m_{\\mathrm{Br_2}} = 0{,}1 \\times 160 = 16$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu lít khí ethylene (điều kiện chuẩn) để làm mất màu vừa hết $100$ mL dung dịch bromine $0{,}1$ M?',
      answer: 0.2479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$n_{\\mathrm{Br_2}} = 0{,}1 \\times 0{,}1$ mol.',
        'Số mol ethylene bằng số mol bromine.',
      ],
      solution:
        '$n_{\\mathrm{Br_2}} = 0{,}1 \\text{ L} \\times 0{,}1 \\text{ M} = 0{,}01$ mol $= n_{\\mathrm{C_2H_4}}$; $V = 0{,}01 \\times 24{,}79 = 0{,}2479$ L.',
    },
    {
      type: 'text',
      prompt: 'Tên của polymer tạo thành khi trùng hợp ethylene là gì?',
      accept: ['polyethylene', 'PE', 'poly ethylene', 'polyetylen', 'polietilen'],
      hints: ['Tên polymer = "poly" + tên monomer.'],
      solution:
        '$n\\,\\mathrm{CH_2{=}CH_2} \\xrightarrow{t^\\circ,\\ p,\\ xt} (\\mathrm{{-}CH_2{-}CH_2{-}})_n$: polyethylene, viết tắt PE.',
    },
    {
      type: 'number',
      prompt:
        'Trùng hợp $2{,}8$ tấn ethylene với hiệu suất $90\\%$. Tính khối lượng polyethylene thu được, theo tấn.',
      answer: 2.52,
      tolerance: 0.01,
      unit: 'tấn',
      hints: ['Trong phản ứng trùng hợp, khối lượng polymer bằng khối lượng monomer đã phản ứng.'],
      solution: '$m_{\\mathrm{PE}} = 2{,}8 \\times 90\\% = 2{,}52$ tấn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các ứng dụng của ethylene.',
      options: [
        'Sản xuất polyethylene làm túi nilon, màng bọc',
        'Điều chế ethylic alcohol',
        'Kích thích quả mau chín',
        'Làm nhiên liệu chính trong bình gas đun nấu',
      ],
      answers: [0, 1, 2],
      hints: ['Bình gas đun nấu chứa chủ yếu các alkane.'],
      solution:
        'Ethylene dùng để sản xuất PE, điều chế ethylic alcohol và kích thích quả mau chín. Bình gas chứa chủ yếu propane và butane.',
    },
  ],
  takeaways: [
    'Alkene là hydrocarbon mạch hở có một liên kết đôi $\\mathrm{C{=}C}$, công thức chung $\\mathrm{C_nH_{2n}}$ ($n \\ge 2$); tiêu biểu là ethylene $\\mathrm{CH_2{=}CH_2}$.',
    'Ethylene là khí không màu, không mùi, ít tan trong nước, nhẹ hơn không khí.',
    'Ethylene cháy tạo $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$; cộng bromine làm mất màu nước bromine (tỉ lệ mol $1 : 1$), nhờ đó phân biệt được với alkane.',
    'Trùng hợp ethylene tạo polyethylene (PE): $n\\,\\mathrm{CH_2{=}CH_2} \\rightarrow (\\mathrm{{-}CH_2{-}CH_2{-}})_n$.',
    'Ethylene dùng sản xuất PE, ethylic alcohol, acetic acid và kích thích quả chín.',
  ],
};
