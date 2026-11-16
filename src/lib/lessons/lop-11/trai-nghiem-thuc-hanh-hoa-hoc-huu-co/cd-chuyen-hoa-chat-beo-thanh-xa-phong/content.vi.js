/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phản ứng xà phòng hoá chất béo bằng dung dịch kiềm; thành phần và tác dụng tẩy rửa của xà phòng; chỉ số xà phòng hoá và cách tính lượng NaOH; quy trình làm xà phòng và an toàn khi làm việc với kiềm.',
  intro:
    'Dầu ăn đã qua sử dụng tưởng chỉ để bỏ đi lại có thể thành bánh xà phòng rửa tay. Chỉ cần chất béo, dung dịch NaOH và một phép tính đúng: thiếu kiềm thì xà phòng nhờn, thừa kiềm thì xà phòng làm bỏng da.',
  objectives: [
    'Viết được phương trình phản ứng xà phòng hoá chất béo bằng dung dịch NaOH.',
    'Giải thích được tác dụng tẩy rửa của xà phòng dựa vào cấu tạo phân tử.',
    'Dùng chỉ số xà phòng hoá để tính được lượng NaOH cần cho một khối lượng chất béo.',
    'Thực hiện được quy trình làm xà phòng an toàn và đánh giá được sản phẩm.',
  ],
  sections: [
    {
      heading: 'Phản ứng xà phòng hoá',
      blocks: [
        {
          type: 'p',
          text: 'Chất béo (dầu thực vật, mỡ động vật) là triester của glycerol với các acid béo, gọi chung là triglyceride, công thức chung $\\mathrm{(RCOO)_3C_3H_5}$. Các acid béo thường gặp: stearic acid $\\mathrm{C_{17}H_{35}COOH}$, palmitic acid $\\mathrm{C_{15}H_{31}COOH}$, oleic acid $\\mathrm{C_{17}H_{33}COOH}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng xà phòng hoá',
          text: 'Đun nóng chất béo với dung dịch kiềm (NaOH hoặc KOH), chất béo bị thuỷ phân tạo thành muối của acid béo và glycerol. Muối sodium hoặc potassium của acid béo là thành phần chính của xà phòng.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_{17}H_{35}COO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}',
        },
        {
          type: 'p',
          text: 'Xà phòng sodium là bánh cứng; xà phòng potassium mềm hơn, dùng làm xà phòng lỏng. Trong công nghiệp, sau khi xà phòng hoá người ta thêm dung dịch NaCl bão hoà: muối của acid béo ít tan trong nước muối nên tách ra, nổi lên trên, còn glycerol ở lại trong dung dịch. Xà phòng thành phẩm có thêm chất độn, chất tạo màu, tinh dầu tạo mùi thơm.',
        },
      ],
    },
    {
      heading: 'Vì sao xà phòng tẩy được vết bẩn',
      blocks: [
        {
          type: 'p',
          text: 'Phân tử muối $\\mathrm{RCOONa}$ gồm hai phần: nhóm $\\mathrm{{-}COO^-Na^+}$ ưa nước và gốc hydrocarbon $\\mathrm{R}$ dài, kị nước (ưa dầu mỡ).',
        },
        {
          type: 'list',
          items: [
            'Gốc hydrocarbon thâm nhập vào vết dầu mỡ, nhóm $\\mathrm{{-}COO^-}$ hướng ra phía nước.',
            'Vết dầu mỡ bị chia nhỏ thành các hạt được bao quanh bởi các phân tử xà phòng, phân tán vào nước và bị rửa trôi.',
            'Trong nước cứng (nhiều ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$), xà phòng tạo kết tủa muối calcium, magnesium của acid béo, nên giảm tác dụng tẩy rửa và tạo cặn.',
          ],
        },
      ],
    },
    {
      heading: 'Chỉ số xà phòng hoá và lượng kiềm cần dùng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chỉ số xà phòng hoá',
          text: 'Chỉ số xà phòng hoá của một chất béo là số miligam KOH cần để xà phòng hoá hoàn toàn $1$ gam chất béo đó (kể cả trung hoà lượng acid béo tự do có trong chất béo).',
        },
        {
          type: 'p',
          text: 'KOH và NaOH phản ứng theo cùng tỉ lệ mol, nên số mol NaOH cần dùng bằng số mol KOH tính từ chỉ số xà phòng hoá:',
        },
        {
          type: 'tex',
          tex: 'n_{\\mathrm{NaOH}} = n_{\\mathrm{KOH}} = \\dfrac{\\text{chỉ số xà phòng hoá} \\cdot m_{\\text{chất béo}}}{56 \\cdot 1\\,000}\\ (\\text{mol}), \\qquad m_{\\mathrm{NaOH}} = 40 \\cdot n_{\\mathrm{NaOH}}',
        },
        {
          type: 'table',
          head: ['Chất béo', 'Chỉ số xà phòng hoá (mg KOH/g)', 'NaOH cho 100 g chất béo (g)'],
          rows: [
            ['Dầu dừa', '$250$ – $264$ (thường lấy $257$)', '$\\approx 18{,}4$'],
            ['Dầu cọ', '$190$ – $209$ (thường lấy $199$)', '$\\approx 14{,}2$'],
            ['Mỡ lợn', '$192$ – $203$ (thường lấy $198$)', '$\\approx 14{,}1$'],
            ['Dầu ô liu', '$184$ – $196$ (thường lấy $190$)', '$\\approx 13{,}6$'],
          ],
          caption: 'Chỉ số xà phòng hoá của một số chất béo (giá trị dao động theo nguồn dầu)',
        },
        {
          type: 'p',
          text: 'Dầu dừa có nhiều gốc acid béo mạch ngắn (lauric acid, $12$ C) nên khối lượng mol trung bình nhỏ: cùng $1$ g chất béo có nhiều mol hơn, cần nhiều kiềm hơn.',
        },
        { type: 'widget', name: 'quy-trinh' },
      ],
    },
    {
      heading: 'An toàn với kiềm',
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          title: 'NaOH là chất ăn da',
          text: 'Luôn đeo kính bảo hộ, găng tay, áo thí nghiệm. Khi pha dung dịch, cho từ từ NaOH rắn vào nước (không làm ngược lại) vì quá trình hoà tan toả nhiều nhiệt. Bị dính kiềm: rửa ngay dưới vòi nước nhiều lần; bắn vào mắt: rửa liên tục bằng nước sạch và báo ngay giáo viên.',
        },
        {
          type: 'list',
          items: [
            'Dùng cốc thuỷ tinh, nồi inox, đũa thuỷ tinh; không dùng dụng cụ bằng nhôm vì nhôm phản ứng với dung dịch NaOH.',
            'Rót dung dịch kiềm từ từ, khuấy đều, giữ nhiệt độ ổn định để hỗn hợp không trào, bắn.',
            'Không nếm, không ngửi gần hỗn hợp; ghi nhãn rõ dụng cụ đựng kiềm.',
            'Xà phòng mới đổ khuôn còn có thể chứa kiềm chưa phản ứng hết: để khô vài tuần và thử pH trước khi dùng.',
          ],
        },
      ],
    },
    {
      heading: 'Thực hành: làm bánh xà phòng từ dầu ăn',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Nguyên liệu: khoảng $50$ g dầu thực vật, mỡ động vật hoặc dầu ăn đã qua sử dụng (lọc sạch cặn); tinh dầu (chanh, sả, quế…) và chất tạo màu. Dụng cụ: cốc thuỷ tinh, đũa thuỷ tinh, bếp đun, khuôn. Hoá chất: dung dịch NaOH $10$ M, giấy chỉ thị pH.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tra chỉ số xà phòng hoá của chất béo, tính thể tích dung dịch NaOH $10$ M cần dùng (có thể lấy ít hơn khoảng $5\\%$ để sản phẩm không dư kiềm).',
            'Cho chất béo vào cốc thuỷ tinh, đun nóng nhẹ cho chảy lỏng.',
            'Rót từ từ dung dịch NaOH vào, khuấy liên tục, giữ nhiệt độ ổn định cho đến khi hỗn hợp đặc sánh như kem.',
            'Thử: nhỏ vài giọt hỗn hợp vào cốc nước nóng; nếu tan hết, không có váng dầu là phản ứng đã hoàn toàn.',
            'Thêm vài giọt tinh dầu, chất tạo màu, khuấy đều rồi đổ vào khuôn.',
            'Để nơi khô thoáng vài ngày cho cứng, lấy ra khỏi khuôn, để thêm vài tuần rồi thử pH.',
          ],
        },
        {
          type: 'p',
          text: 'Đánh giá sản phẩm theo kết cấu (cứng, mịn, không nhờn), màu sắc, mùi và pH; so sánh với sản phẩm của các nhóm khác. Báo cáo gồm mục tiêu, nguyên liệu, cách tiến hành, phép tính lượng kiềm, kết quả đánh giá và kết luận.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính lượng NaOH',
    instruction:
      'Chọn chất béo và khối lượng, đọc lượng NaOH tính theo chỉ số xà phòng hoá. Kéo thanh "NaOH dùng so với tính toán" lên trên $100\\%$ và xuống dưới $90\\%$: sản phẩm thay đổi thế nào? Vì sao dầu dừa cần nhiều kiềm hơn dầu ô liu?',
  },
  examples: [
    {
      problem:
        'Dầu dừa có chỉ số xà phòng hoá $257$. Tính khối lượng NaOH và thể tích dung dịch NaOH $10$ M cần để xà phòng hoá hoàn toàn $50$ g dầu dừa.',
      steps: [
        'Khối lượng KOH tương đương: $257 \\cdot 50 = 12\\,850$ mg $= 12{,}85$ g.',
        '$n_{\\mathrm{NaOH}} = n_{\\mathrm{KOH}} = \\dfrac{12{,}85}{56} \\approx 0{,}2295\\ \\text{mol}$.',
        '$m_{\\mathrm{NaOH}} \\approx 0{,}2295 \\cdot 40 \\approx 9{,}18$ g.',
        '$V = \\dfrac{n}{C_M} = \\dfrac{0{,}2295}{10} \\approx 0{,}0229$ L $\\approx 22{,}9$ mL.',
      ],
      answer: 'Cần khoảng $9{,}18$ g NaOH, tức khoảng $22{,}9$ mL dung dịch NaOH $10$ M.',
    },
    {
      problem:
        'Xà phòng hoá hoàn toàn $89$ g tristearin $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$ ($M = 890$ g/mol) bằng dung dịch NaOH vừa đủ. Tính khối lượng NaOH đã phản ứng, khối lượng xà phòng (sodium stearate) và glycerol thu được.',
      steps: [
        '$n_{\\text{tristearin}} = \\dfrac{89}{890} = 0{,}1$ mol.',
        'Theo phương trình: $n_{\\mathrm{NaOH}} = 0{,}3$ mol, $m_{\\mathrm{NaOH}} = 12$ g; $n_{\\text{glycerol}} = 0{,}1$ mol, $m = 9{,}2$ g.',
        '$n_{\\mathrm{C_{17}H_{35}COONa}} = 0{,}3$ mol, $m = 0{,}3 \\cdot 306 = 91{,}8$ g.',
        'Kiểm tra bảo toàn khối lượng: $89 + 12 = 101 = 91{,}8 + 9{,}2$.',
      ],
      answer: '$12$ g NaOH; $91{,}8$ g sodium stearate; $9{,}2$ g glycerol.',
    },
    {
      problem: 'Tính chỉ số xà phòng hoá của tristearin ($M = 890$ g/mol).',
      steps: [
        '$1$ g tristearin có $\\dfrac{1}{890}$ mol, cần $\\dfrac{3}{890}$ mol KOH.',
        '$m_{\\mathrm{KOH}} = \\dfrac{3 \\cdot 56}{890} \\approx 0{,}1888$ g $= 188{,}8$ mg.',
      ],
      answer: 'Chỉ số xà phòng hoá của tristearin khoảng $188{,}8$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chính của xà phòng là',
      options: [
        'muối sodium hoặc potassium của acid béo.',
        'glycerol.',
        'triester của glycerol với acid béo.',
        'sodium hydroxide.',
      ],
      answer: 0,
      hints: ['Viết phương trình xà phòng hoá và xem sản phẩm nào là "xà phòng".'],
      solution:
        'Xà phòng là muối sodium hoặc potassium của acid béo (như $\\mathrm{C_{17}H_{35}COONa}$), có thêm phụ gia; glycerol là sản phẩm phụ.',
    },
    {
      type: 'choice',
      prompt: 'Đun chất béo với dung dịch NaOH thu được',
      options: [
        'muối của acid béo và glycerol.',
        'acid béo và glycerol.',
        'muối của acid béo và ethanol.',
        'acid béo và NaCl.',
      ],
      answer: 0,
      hints: [
        'Chất béo là triester của glycerol; trong môi trường kiềm, acid béo tồn tại ở dạng muối.',
      ],
      solution:
        '$\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\to 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}$: muối của acid béo và glycerol.',
    },
    {
      type: 'number',
      prompt:
        'Mỡ lợn có chỉ số xà phòng hoá $198$. Tính khối lượng NaOH (gam) cần để xà phòng hoá hoàn toàn $100$ g mỡ lợn, làm tròn đến hàng phần trăm.',
      answer: 14.14,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Tính khối lượng KOH, đổi sang số mol, rồi nhân với $40$.',
        '$m_{\\mathrm{KOH}} = 19{,}8$ g.',
      ],
      solution:
        '$m_{\\mathrm{KOH}} = 198 \\cdot 100 = 19\\,800$ mg $= 19{,}8$ g; $n = \\dfrac{19{,}8}{56} \\approx 0{,}3536$ mol; $m_{\\mathrm{NaOH}} \\approx 0{,}3536 \\cdot 40 \\approx 14{,}14$ g.',
    },
    {
      type: 'number',
      prompt:
        'Với $100$ g mỡ lợn (chỉ số xà phòng hoá $198$), cần bao nhiêu mililít dung dịch NaOH $10$ M? Làm tròn đến hàng phần mười.',
      answer: 35.4,
      tolerance: 0.05,
      unit: 'mL',
      hints: [
        '$n_{\\mathrm{NaOH}} = n_{\\mathrm{KOH}} = \\dfrac{19{,}8}{56}$ mol, rồi $V = \\dfrac{n}{C_M}$.',
      ],
      solution:
        '$n \\approx 0{,}3536$ mol; $V = \\dfrac{0{,}3536}{10} \\approx 0{,}0354$ L $\\approx 35{,}4$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Tính chỉ số xà phòng hoá của tripalmitin $\\mathrm{(C_{15}H_{31}COO)_3C_3H_5}$ ($M = 806$ g/mol), làm tròn đến hàng phần mười.',
      answer: 208.4,
      tolerance: 0.05,
      hints: ['$1$ mol chất béo cần $3$ mol KOH.'],
      solution: 'Chỉ số $= \\dfrac{3 \\cdot 56 \\cdot 1\\,000}{806} \\approx 208{,}4$ mg KOH/g.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $44{,}2$ g triolein $\\mathrm{(C_{17}H_{33}COO)_3C_3H_5}$ ($M = 884$ g/mol) bằng NaOH. Tính khối lượng sodium oleate $\\mathrm{C_{17}H_{33}COONa}$ ($M = 304$ g/mol) thu được.',
      answer: 45.6,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\text{triolein}} = \\dfrac{44{,}2}{884} = 0{,}05$ mol; mỗi mol tạo $3$ mol muối.',
      ],
      solution:
        '$n_{\\text{muối}} = 3 \\cdot 0{,}05 = 0{,}15$ mol; $m = 0{,}15 \\cdot 304 = 45{,}6$ g.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân tử $\\mathrm{C_{17}H_{35}COONa}$, phần nào bám vào vết dầu mỡ?',
      options: [
        'Gốc hydrocarbon $\\mathrm{C_{17}H_{35}{-}}$ (kị nước).',
        'Nhóm $\\mathrm{{-}COO^-Na^+}$ (ưa nước).',
        'Ion $\\mathrm{Na^+}$.',
        'Cả phân tử tan hoàn toàn vào dầu.',
      ],
      answer: 0,
      hints: ['Dầu mỡ là chất không phân cực; "chất giống nhau hoà tan nhau".'],
      solution:
        'Gốc hydrocarbon dài kị nước, ưa dầu mỡ nên thâm nhập vào vết bẩn; nhóm $\\mathrm{{-}COO^-}$ hướng ra nước, kéo vết bẩn phân tán vào nước.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm xà phòng từ dầu ăn theo đúng thứ tự.',
      items: [
        'Rót từ từ dung dịch NaOH, khuấy liên tục, giữ nhiệt độ ổn định',
        'Tính lượng NaOH theo chỉ số xà phòng hoá',
        'Thêm tinh dầu, chất màu rồi đổ khuôn',
        'Đun nóng nhẹ chất béo cho chảy lỏng',
        'Thử vài giọt hỗn hợp trong nước nóng',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Phải biết lấy bao nhiêu kiềm trước khi bắt đầu đun.'],
      solution:
        'Tính lượng NaOH → đun chảy chất béo → rót NaOH, khuấy → thử phản ứng hoàn toàn → thêm tinh dầu, màu, đổ khuôn.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào là đúng khi làm việc với dung dịch NaOH đặc?',
      options: [
        'Đeo kính bảo hộ và găng tay.',
        'Khi pha, cho từ từ NaOH rắn vào nước.',
        'Dùng nồi nhôm để đun hỗn hợp.',
        'Bị dính kiềm thì rửa ngay bằng nhiều nước.',
        'Nếm thử để biết xà phòng đã hết kiềm chưa.',
      ],
      answers: [0, 1, 3],
      hints: ['NaOH ăn da, hoà tan toả nhiệt mạnh và phản ứng với nhôm.'],
      solution:
        'Đeo kính, găng tay; cho NaOH vào nước từ từ; rửa ngay bằng nhiều nước khi bị dính. Không dùng nồi nhôm vì nhôm phản ứng với NaOH, và không bao giờ nếm hoá chất.',
    },
    {
      type: 'choice',
      prompt: 'Trong quá trình làm xà phòng, người ta cho thêm tinh dầu để làm gì?',
      options: [
        'Tạo mùi thơm dễ chịu cho xà phòng.',
        'Làm tăng lượng muối của acid béo.',
        'Trung hoà lượng NaOH dư.',
        'Làm xà phòng tan nhanh hơn trong nước cứng.',
      ],
      answer: 0,
      hints: ['Tinh dầu là chất thơm, không phản ứng tạo xà phòng.'],
      solution:
        'Tinh dầu (chanh, sả, quế…) là phụ gia tạo hương thơm, làm sản phẩm hấp dẫn hơn; một số tinh dầu còn có tính kháng khuẩn nhẹ.',
    },
    {
      type: 'choice',
      prompt:
        'Nhỏ vài giọt hỗn hợp đang nấu vào cốc nước nóng, thấy có váng dầu nổi lên. Điều đó cho biết gì?',
      options: [
        'Chất béo chưa phản ứng hết, cần khuấy và đun thêm.',
        'Xà phòng đã dư kiềm.',
        'Phản ứng đã hoàn toàn.',
        'Glycerol không tan trong nước.',
      ],
      answer: 0,
      hints: ['Muối của acid béo và glycerol đều tan trong nước nóng; chất béo thì không.'],
      solution:
        'Váng dầu là chất béo còn dư chưa bị xà phòng hoá; cần tiếp tục khuấy, đun (kiểm tra lại lượng kiềm) đến khi thử không còn váng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao giặt bằng xà phòng trong nước cứng thì kém sạch và có cặn?',
      options: [
        'Ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ tạo kết tủa với gốc acid béo của xà phòng.',
        'Nước cứng có nhiều NaOH.',
        'Nước cứng làm xà phòng bị đông đặc lại thành chất béo.',
        'Nước cứng không hoà tan được ion $\\mathrm{Na^+}$.',
      ],
      answer: 0,
      hints: ['Nước cứng chứa nhiều ion calcium và magnesium.'],
      solution:
        'Muối calcium, magnesium của acid béo không tan, kết tủa thành cặn; lượng xà phòng có tác dụng tẩy rửa giảm.',
    },
  ],
  takeaways: [
    'Xà phòng hoá: $\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\to 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}$; xà phòng là muối sodium hoặc potassium của acid béo.',
    'Phân tử xà phòng có đuôi hydrocarbon kị nước bám vào dầu mỡ và đầu $\\mathrm{{-}COO^-}$ ưa nước, nên kéo vết bẩn phân tán vào nước.',
    'Chỉ số xà phòng hoá là số mg KOH xà phòng hoá $1$ g chất béo; $n_{\\mathrm{NaOH}} = n_{\\mathrm{KOH}}$, $m_{\\mathrm{NaOH}} = 40\\, n$.',
    'Thiếu kiềm: xà phòng nhờn; dư kiềm: xà phòng gây bỏng da. Luôn đeo kính, găng tay; không dùng dụng cụ nhôm; thử pH trước khi dùng.',
  ],
};
