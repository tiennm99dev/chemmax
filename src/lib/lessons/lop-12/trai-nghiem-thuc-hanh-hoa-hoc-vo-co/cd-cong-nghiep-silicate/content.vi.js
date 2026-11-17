/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghiệp silicate sản xuất thuỷ tinh, gốm và xi măng: thành phần, tính chất, nguyên liệu và quy trình sản xuất mỗi loại; lưu ý khi dùng đồ thuỷ tinh; thực hành làm một sản phẩm từ xi măng hoặc đất sét.',
  intro:
    'Từ thời cổ đại, thuỷ tinh và gốm đã được dùng làm đồ trang trí, đồ chứa đựng. Ngày nay, thuỷ tinh, gốm và xi măng là những vật liệu không thể thiếu trong xây dựng, đồ gia dụng và cả thiết bị viễn thông như cáp quang. Chúng có thành phần hoá học gì, và được sản xuất ra sao?',
  objectives: [
    'Nêu được thành phần hoá học, tính chất cơ bản và ứng dụng của thuỷ tinh, gốm, xi măng.',
    'Trình bày được nguyên liệu và quy trình sản xuất thuỷ tinh, gốm, xi măng ở Việt Nam.',
    'Viết được các phương trình hoá học chính trong sản xuất thuỷ tinh và xi măng; tính được lượng nguyên liệu.',
    'Sử dụng an toàn, đúng cách đồ dùng bằng thuỷ tinh, gốm; làm được một sản phẩm đơn giản.',
  ],
  sections: [
    {
      heading: 'Công nghiệp silicate',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghiệp silicate',
          text: 'Công nghiệp silicate là ngành sản xuất các vật liệu từ hợp chất của silicon (cát thạch anh $\\mathrm{SiO_2}$, đất sét, cao lanh, fenspat…), gồm sản xuất thuỷ tinh, gốm (đồ gốm, sứ, gạch ngói) và xi măng.',
        },
        {
          type: 'p',
          text: 'Các sản phẩm silicate đều được làm bằng cách nung nguyên liệu ở nhiệt độ cao. Mỗi sản phẩm cần đúng nguyên liệu và đúng khoảng nhiệt độ: hãy thử trong lò nung ảo ở cuối bài.',
        },
      ],
    },
    {
      heading: 'Thuỷ tinh',
      blocks: [
        {
          type: 'p',
          text: 'Thuỷ tinh thông thường chứa khoảng $75\\%$ $\\mathrm{SiO_2}$, còn lại là $\\mathrm{Na_2O}$, $\\mathrm{CaO}$ và một số phụ gia; thành phần gần đúng viết dưới dạng các oxide là $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$.',
        },
        {
          type: 'list',
          items: [
            'Thuỷ tinh là chất rắn vô định hình: không có nhiệt độ nóng chảy xác định, khi đun nóng thì mềm dần rồi mới chảy, nhờ đó dễ thổi, kéo, ép thành nhiều hình dạng.',
            'Trong suốt, cứng nhưng giòn, dễ vỡ khi va đập hoặc thay đổi nhiệt độ đột ngột.',
            'Bền với nước và hầu hết acid, nhưng bị hydrofluoric acid ăn mòn, nên dùng HF để khắc chữ, hoa văn lên thuỷ tinh.',
          ],
        },
        { type: 'tex', tex: '\\mathrm{SiO_2 + 4HF \\to SiF_4 + 2H_2O}' },
        {
          type: 'table',
          head: ['Loại thuỷ tinh', 'Thành phần đặc trưng', 'Ứng dụng'],
          rows: [
            [
              'Thuỷ tinh thường (soda – vôi)',
              '$\\mathrm{Na_2O}$, $\\mathrm{CaO}$, $\\mathrm{SiO_2}$',
              'Kính cửa, chai lọ, cốc chén',
            ],
            [
              'Thuỷ tinh borosilicate',
              'Thêm $\\mathrm{B_2O_3}$',
              'Dụng cụ thí nghiệm, đồ dùng chịu nhiệt',
            ],
            [
              'Thuỷ tinh thạch anh',
              'Gần như $\\mathrm{SiO_2}$ tinh khiết',
              'Dụng cụ chịu nhiệt rất cao, cáp quang',
            ],
            [
              'Pha lê',
              'Thêm $\\mathrm{PbO}$ hoặc $\\mathrm{K_2O}$',
              'Đồ trang trí, ly cốc cao cấp, lăng kính',
            ],
            [
              'Thuỷ tinh màu',
              'Thêm oxide kim loại ($\\mathrm{CoO}$: xanh lam; $\\mathrm{Cr_2O_3}$: lục)',
              'Trang trí, kính màu',
            ],
          ],
          caption: 'Một số loại thuỷ tinh',
        },
        {
          type: 'p',
          text: 'Sản xuất thuỷ tinh thường: nghiền, trộn cát thạch anh, soda $\\mathrm{Na_2CO_3}$ và đá vôi $\\mathrm{CaCO_3}$ (thêm thuỷ tinh vụn tái chế) → nấu chảy trong lò ở khoảng $1\\,400$ – $1\\,500$ °C → tạo hình (thổi, ép, kéo, cán; kính tấm làm bằng phương pháp kính nổi trên thiếc lỏng) → ủ, tức là làm nguội từ từ để thuỷ tinh không bị nứt → kiểm tra, đóng gói.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Na_2CO_3 + SiO_2} \\xrightarrow{t^\\circ} \\mathrm{Na_2SiO_3 + CO_2} \\qquad \\mathrm{CaCO_3 + SiO_2} \\xrightarrow{t^\\circ} \\mathrm{CaSiO_3 + CO_2}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý khi dùng đồ thuỷ tinh',
          text: 'Dùng nhẹ nhàng, không ném, đập mạnh hay cọ xát bằng vật cứng gây xước. Không rót nước sôi đột ngột vào cốc thuỷ tinh thường, không đặt cốc nóng lên mặt lạnh, ướt: tráng qua nước ấm trước để tránh sốc nhiệt làm vỡ. Chỉ đun nóng dụng cụ bằng thuỷ tinh chịu nhiệt.',
        },
      ],
    },
    {
      heading: 'Gốm',
      blocks: [
        {
          type: 'p',
          text: 'Gốm là vật liệu làm từ đất sét, cao lanh ($\\mathrm{Al_2O_3 \\cdot 2SiO_2 \\cdot 2H_2O}$) có thể thêm fenspat, cát thạch anh, được tạo hình rồi nung ở nhiệt độ cao. Gốm cứng, bền nhiệt, bền với hoá chất, cách điện tốt nhưng giòn.',
        },
        {
          type: 'table',
          head: ['Loại gốm', 'Nguyên liệu', 'Nhiệt độ nung', 'Đặc điểm, ví dụ'],
          rows: [
            [
              'Gốm đất nung',
              'Đất sét thường',
              'Khoảng $900$ – $1\\,000$ °C',
              'Xốp, hút nước, màu đỏ gạch: gạch, ngói, chậu cảnh',
            ],
            [
              'Sành',
              'Đất sét',
              'Khoảng $1\\,100$ – $1\\,300$ °C',
              'Rắn, gõ kêu, ít thấm nước, màu nâu, xám: chum, vại, lọ',
            ],
            [
              'Sứ',
              'Cao lanh, fenspat, thạch anh',
              'Nung sơ bộ khoảng $1\\,000$ °C, tráng men, nung khoảng $1\\,400$ °C',
              'Trắng, cứng, gần như không thấm nước: bát đĩa, sứ vệ sinh, sứ cách điện',
            ],
          ],
          caption: 'Một số loại gốm',
        },
        {
          type: 'p',
          text: 'Quy trình sản xuất gốm: chuẩn bị, nghiền, lọc phối liệu → nhào trộn với nước thành khối dẻo → tạo hình (vuốt trên bàn xoay, in khuôn, đổ rót) → phơi, sấy khô → trang trí, tráng men → nung trong lò → kiểm tra, hoàn thiện. Việt Nam có nhiều làng gốm truyền thống như Bát Tràng (Hà Nội), Chu Đậu (Hải Dương), Phù Lãng (Bắc Ninh), Bàu Trúc (Ninh Thuận).',
        },
      ],
    },
    {
      heading: 'Xi măng',
      blocks: [
        {
          type: 'p',
          text: 'Xi măng là chất kết dính dạng bột, khi trộn với nước thì đông cứng thành khối rắn, dùng trong xây dựng. Phổ biến nhất là xi măng Portland, thành phần chính gồm calcium silicate và calcium aluminate: $\\mathrm{3CaO \\cdot SiO_2}$, $\\mathrm{2CaO \\cdot SiO_2}$, $\\mathrm{3CaO \\cdot Al_2O_3}$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Khai thác, đập nhỏ đá vôi và đất sét (thêm một ít quặng sắt, cát để chỉnh thành phần).',
            'Nghiền mịn, trộn đều thành phối liệu (bột liệu).',
            'Nung trong lò quay ở khoảng $1\\,400$ – $1\\,500$ °C: đá vôi bị nhiệt phân, $\\mathrm{CaO}$ kết hợp với các oxide của đất sét, kết khối thành clinker.',
            'Làm nguội nhanh clinker.',
            'Nghiền clinker với khoảng $3$ – $5\\%$ thạch cao (để điều chỉnh tốc độ đông kết) và phụ gia → xi măng, đóng bao.',
          ],
        },
        { type: 'tex', tex: '\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO + CO_2}' },
        {
          type: 'p',
          text: 'Khi trộn với nước, các thành phần của xi măng kết hợp với nước tạo thành các hợp chất ngậm nước, đan xen nhau làm khối vữa đông cứng dần, ví dụ:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{3CaO \\cdot SiO_2 + 5H_2O \\to Ca_2SiO_4 \\cdot 4H_2O + Ca(OH)_2}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Xi măng và môi trường',
          text: 'Nhiệt phân đá vôi và đốt nhiên liệu cho lò quay thải ra lượng lớn $\\mathrm{CO_2}$; khai thác đá vôi làm biến đổi cảnh quan núi đá. Các nhà máy hiện đại dùng nhiệt thải để phát điện, đốt kèm rác thải và thay một phần clinker bằng phụ gia như tro bay, xỉ lò cao.',
        },
        {
          type: 'p',
          text: 'Lò nung ảo dưới đây cho phép chọn nguyên liệu và nhiệt độ. Hãy tìm ra công thức của cả năm sản phẩm: gạch ngói, sành, sứ, thuỷ tinh, clinker.',
        },
      ],
    },
    {
      heading: 'Thực hành: làm chậu cây mini bằng xi măng',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: trải nghiệm tính chất đông cứng của xi măng và làm ra một sản phẩm dùng được. Nguyên liệu, dụng cụ: xi măng, cát mịn, nước; hai hộp nhựa (hoặc cốc giấy) lồng vào nhau làm khuôn; dầu ăn bôi khuôn; que khuấy, thìa, găng tay cao su, khẩu trang, kính bảo hộ.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Đeo găng tay, khẩu trang, kính: vữa xi măng có tính kiềm (do $\\mathrm{Ca(OH)_2}$ tạo thành), gây rát da, hại mắt.',
            'Bôi một lớp dầu mỏng mặt trong khuôn ngoài và mặt ngoài khuôn trong.',
            'Trộn khô xi măng với cát theo tỉ lệ thể tích khoảng $1 : 2$, thêm nước từ từ, khuấy đến khi vữa dẻo như kem đặc.',
            'Đổ vữa vào khuôn ngoài, ấn khuôn trong xuống, chèn vật nặng; gõ nhẹ thành khuôn cho bọt khí thoát ra. Cắm một đoạn ống hút ở đáy để tạo lỗ thoát nước.',
            'Để nơi râm mát khoảng $24$ – $48$ giờ cho vữa đông kết, rồi tháo khuôn.',
            'Bảo dưỡng: phun nước ẩm cho chậu vài lần mỗi ngày trong khoảng một tuần để xi măng tiếp tục đông cứng, không nứt; ngâm nước vài ngày để giảm bớt kiềm trước khi trồng cây.',
          ],
        },
        {
          type: 'p',
          text: 'Mở rộng: nếu trường có điều kiện liên hệ một xưởng gốm, các nhóm có thể nặn sản phẩm từ đất sét, phơi khô và gửi nung. Báo cáo gồm mục tiêu, nguyên liệu, tỉ lệ phối trộn, các bước tiến hành, quan sát quá trình đông cứng, ảnh sản phẩm và nhận xét (độ cứng, vết nứt, bề mặt), so sánh với nhóm dùng tỉ lệ nước khác.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lò nung ảo',
    instruction:
      'Chọn nguyên liệu cho vào lò, kéo thanh nhiệt độ rồi bấm "Nung". Cùng là đất sét, nung ở $950$ °C và $1\\,200$ °C cho sản phẩm khác nhau thế nào? Thử bỏ đá vôi khỏi phối liệu thuỷ tinh, hoặc cho thạch cao vào lò, và đọc lời giải thích.',
  },
  examples: [
    {
      problem:
        'Thuỷ tinh thường có thành phần gần đúng $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$. Tính phần trăm khối lượng mỗi oxide.',
      steps: [
        '$M = 62 + 56 + 6 \\cdot 60 = 478$ g/mol.',
        '$\\%\\mathrm{SiO_2} = \\dfrac{360}{478} \\cdot 100\\% \\approx 75{,}31\\%$.',
        '$\\%\\mathrm{Na_2O} = \\dfrac{62}{478} \\cdot 100\\% \\approx 12{,}97\\%$; $\\%\\mathrm{CaO} = \\dfrac{56}{478} \\cdot 100\\% \\approx 11{,}72\\%$.',
      ],
      answer:
        'Khoảng $75{,}31\\%$ $\\mathrm{SiO_2}$, $12{,}97\\%$ $\\mathrm{Na_2O}$, $11{,}72\\%$ $\\mathrm{CaO}$: đúng với "khoảng $75\\%$ $\\mathrm{SiO_2}$".',
    },
    {
      problem:
        'Tính khối lượng soda, đá vôi và cát (coi đều tinh khiết) cần để sản xuất $1$ tấn thuỷ tinh $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$, và khối lượng $\\mathrm{CO_2}$ thải ra.',
      steps: [
        'Sơ đồ: $\\mathrm{Na_2CO_3 + CaCO_3 + 6SiO_2 \\to Na_2O \\cdot CaO \\cdot 6SiO_2 + 2CO_2}$.',
        'Cứ $478$ kg thuỷ tinh cần $106$ kg $\\mathrm{Na_2CO_3}$, $100$ kg $\\mathrm{CaCO_3}$, $360$ kg $\\mathrm{SiO_2}$ và thải $88$ kg $\\mathrm{CO_2}$.',
        'Với $1\\,000$ kg, nhân mỗi lượng với $\\dfrac{1\\,000}{478}$: $\\mathrm{Na_2CO_3} \\approx 221{,}8$ kg; $\\mathrm{CaCO_3} \\approx 209{,}2$ kg; $\\mathrm{SiO_2} \\approx 753{,}1$ kg; $\\mathrm{CO_2} \\approx 184{,}1$ kg.',
      ],
      answer:
        'Khoảng $221{,}8$ kg soda, $209{,}2$ kg đá vôi, $753{,}1$ kg cát; thải khoảng $184{,}1$ kg $\\mathrm{CO_2}$.',
    },
    {
      problem:
        'Nung $1$ tấn đá vôi chứa $90\\%$ $\\mathrm{CaCO_3}$ (tạp chất không bị nhiệt phân) trong lò sản xuất clinker. Tính khối lượng $\\mathrm{CaO}$ tạo thành và $\\mathrm{CO_2}$ thải ra.',
      steps: [
        '$m_{\\mathrm{CaCO_3}} = 0{,}9 \\cdot 1\\,000 = 900$ kg, tức $9$ kmol.',
        '$\\mathrm{CaCO_3 \\to CaO + CO_2}$: $n_{\\mathrm{CaO}} = n_{\\mathrm{CO_2}} = 9$ kmol.',
        '$m_{\\mathrm{CaO}} = 9 \\cdot 56 = 504$ kg; $m_{\\mathrm{CO_2}} = 9 \\cdot 44 = 396$ kg.',
      ],
      answer: '$504$ kg $\\mathrm{CaO}$ và $396$ kg $\\mathrm{CO_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chiếm nhiều nhất trong thuỷ tinh thông thường là',
      options: [
        '$\\mathrm{SiO_2}$.',
        '$\\mathrm{Na_2O}$.',
        '$\\mathrm{CaO}$.',
        '$\\mathrm{Al_2O_3}$.',
      ],
      answer: 0,
      hints: ['Nguyên liệu chính để nấu thuỷ tinh là cát thạch anh.'],
      solution:
        'Thuỷ tinh thông thường chứa khoảng $75\\%$ $\\mathrm{SiO_2}$, còn lại chủ yếu là $\\mathrm{Na_2O}$ và $\\mathrm{CaO}$.',
    },
    {
      type: 'choice',
      prompt: 'Để khắc chữ, hoa văn lên thuỷ tinh, người ta dùng',
      options: [
        'dung dịch hydrofluoric acid (HF).',
        'dung dịch hydrochloric acid (HCl).',
        'dung dịch sulfuric acid loãng.',
        'nước nóng.',
      ],
      answer: 0,
      hints: ['Thuỷ tinh bền với hầu hết acid, chỉ trừ một acid.'],
      solution:
        'HF ăn mòn thuỷ tinh: $\\mathrm{SiO_2 + 4HF \\to SiF_4 + 2H_2O}$, nên dùng để khắc thuỷ tinh.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng $\\mathrm{CaO}$ trong thuỷ tinh có thành phần $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$, làm tròn đến hàng phần trăm.',
      answer: 11.72,
      tolerance: 0.01,
      unit: '%',
      hints: ['Khối lượng mol của thuỷ tinh: $62 + 56 + 6 \\cdot 60$.'],
      solution:
        '$M = 478$ g/mol; $\\%\\mathrm{CaO} = \\dfrac{56}{478} \\cdot 100\\% \\approx 11{,}72\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu kilôgam soda $\\mathrm{Na_2CO_3}$ để sản xuất $1$ tấn thuỷ tinh $\\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$? Làm tròn đến hàng phần mười.',
      answer: 221.8,
      tolerance: 0.1,
      unit: 'kg',
      hints: ['Mỗi mol thuỷ tinh ($478$ g) cần $1$ mol $\\mathrm{Na_2CO_3}$ ($106$ g).'],
      solution: '$m = \\dfrac{106}{478} \\cdot 1\\,000 \\approx 221{,}8$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt phân hoàn toàn $1$ tấn $\\mathrm{CaCO_3}$ tinh khiết trong lò xi măng thải ra bao nhiêu kilôgam $\\mathrm{CO_2}$?',
      answer: 440,
      tolerance: 0.5,
      unit: 'kg',
      hints: [
        '$\\mathrm{CaCO_3 \\to CaO + CO_2}$: $100$ g $\\mathrm{CaCO_3}$ cho $44$ g $\\mathrm{CO_2}$.',
      ],
      solution: '$m_{\\mathrm{CO_2}} = \\dfrac{44}{100} \\cdot 1\\,000 = 440$ kg.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi sản phẩm với nguyên liệu chính để sản xuất.',
      left: ['Thuỷ tinh thường', 'Sứ', 'Clinker xi măng', 'Gạch, ngói'],
      right: [
        'Cát thạch anh, soda, đá vôi',
        'Cao lanh, fenspat, thạch anh',
        'Đá vôi, đất sét',
        'Đất sét thường',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Thuỷ tinh cần $\\mathrm{Na_2O}$ và $\\mathrm{CaO}$; clinker giàu $\\mathrm{CaO}$.'],
      solution:
        'Thuỷ tinh: cát, soda, đá vôi. Sứ: cao lanh, fenspat, thạch anh. Clinker: đá vôi, đất sét. Gạch, ngói: đất sét thường.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các công đoạn sản xuất xi măng Portland theo đúng thứ tự.',
      items: [
        'Nung trong lò quay ở khoảng $1\\,400$ – $1\\,500$ °C',
        'Nghiền clinker với thạch cao',
        'Khai thác, đập nhỏ đá vôi và đất sét',
        'Làm nguội clinker',
        'Nghiền mịn, trộn thành phối liệu',
      ],
      answer: [2, 4, 0, 3, 1],
      hints: ['Thạch cao được thêm sau khi đã có clinker.'],
      solution:
        'Khai thác, đập nhỏ → nghiền, trộn phối liệu → nung trong lò quay → làm nguội clinker → nghiền clinker với thạch cao.',
    },
    {
      type: 'choice',
      prompt: 'Khi nghiền clinker, người ta thêm một ít thạch cao nhằm mục đích',
      options: [
        'điều chỉnh tốc độ đông kết của xi măng.',
        'làm tăng nhiệt độ nóng chảy của clinker.',
        'làm xi măng có màu trắng.',
        'giảm lượng $\\mathrm{CO_2}$ thải ra khi nung.',
      ],
      answer: 0,
      hints: ['Không có thạch cao, vữa xi măng đông cứng quá nhanh, không kịp thi công.'],
      solution:
        'Thạch cao (khoảng $3$ – $5\\%$) làm chậm, điều chỉnh tốc độ đông kết để vữa đủ thời gian thi công.',
    },
    {
      type: 'choice',
      prompt:
        'Trong các loại gốm sau, loại nào được nung ở nhiệt độ cao nhất và gần như không thấm nước?',
      options: ['Sứ.', 'Gạch nung.', 'Ngói.', 'Chậu đất nung.'],
      answer: 0,
      hints: [
        'So sánh: đất nung khoảng $900$ °C, sành khoảng $1\\,200$ °C, sứ khoảng $1\\,400$ °C.',
      ],
      solution:
        'Sứ nung ở khoảng $1\\,400$ °C, kết khối đặc chắc, gần như không thấm nước; gạch, ngói, chậu đất nung còn xốp.',
    },
    {
      type: 'choice',
      prompt: 'Dụng cụ thí nghiệm cần đun nóng trực tiếp trên ngọn lửa nên làm bằng',
      options: [
        'thuỷ tinh borosilicate hoặc thuỷ tinh thạch anh.',
        'thuỷ tinh thường (soda – vôi).',
        'pha lê chứa chì.',
        'gốm đất nung.',
      ],
      answer: 0,
      hints: ['Cần loại thuỷ tinh giãn nở ít khi nóng lên, chịu được sốc nhiệt.'],
      solution:
        'Thuỷ tinh borosilicate và thuỷ tinh thạch anh giãn nở nhiệt rất ít, chịu được thay đổi nhiệt độ đột ngột, nên dùng làm dụng cụ đun nóng.',
    },
    {
      type: 'multi',
      prompt: 'Những cách dùng đồ thuỷ tinh nào là đúng?',
      options: [
        'Tráng cốc bằng nước ấm trước khi rót nước nóng.',
        'Rửa nhẹ nhàng, không cọ bằng vật cứng.',
        'Rót nước sôi vào cốc thuỷ tinh thường vừa lấy từ tủ lạnh.',
        'Đặt cốc vừa đun nóng lên mặt bàn đá ướt.',
      ],
      answers: [0, 1],
      hints: ['Thuỷ tinh thường dễ vỡ khi nhiệt độ thay đổi đột ngột.'],
      solution:
        'Nên tráng nước ấm trước và rửa nhẹ nhàng. Rót nước sôi vào cốc lạnh hay đặt cốc nóng lên mặt lạnh, ướt gây sốc nhiệt làm cốc vỡ.',
    },
  ],
  takeaways: [
    'Công nghiệp silicate sản xuất thuỷ tinh, gốm, xi măng từ hợp chất silicon bằng cách nung ở nhiệt độ cao.',
    'Thuỷ tinh thường $\\approx \\mathrm{Na_2O \\cdot CaO \\cdot 6SiO_2}$ (khoảng $75\\%$ $\\mathrm{SiO_2}$), nấu từ cát, soda, đá vôi ở khoảng $1\\,400$ – $1\\,500$ °C; vô định hình, giòn, bị HF ăn mòn.',
    'Gốm làm từ đất sét, cao lanh: đất nung (khoảng $900$ °C), sành (khoảng $1\\,200$ °C), sứ (khoảng $1\\,400$ °C).',
    'Xi măng Portland: nung đá vôi với đất sét ở khoảng $1\\,400$ – $1\\,500$ °C được clinker, nghiền clinker với thạch cao được xi măng.',
    'Sản xuất silicate tốn nhiều nhiệt và thải nhiều $\\mathrm{CO_2}$; dùng đồ thuỷ tinh cần tránh va đập và sốc nhiệt.',
  ],
};
