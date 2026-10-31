/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đá vôi có thành phần chính là calcium carbonate CaCO3, được khai thác để làm vật liệu xây dựng, nung vôi sống CaO và làm nguyên liệu cho xi măng, thuỷ tinh. Công nghiệp silicate sản xuất đồ gốm, thuỷ tinh, xi măng từ cát, đất sét, đá vôi, soda bằng cách nung ở nhiệt độ cao. Khai thác đá vôi và các nhà máy silicate gây bụi, thải CO2 và phá cảnh quan, nên cần quy hoạch và giảm thiểu ô nhiễm.',
  intro:
    'Nhỏ vài giọt dung dịch hydrochloric acid lên một mẩu đá vôi, bề mặt đá sủi bọt khí ngay lập tức. Loại đá này có mặt trong những dãy núi đá vôi hùng vĩ ở Ninh Bình, Hà Nam, Quảng Ninh, và cũng có mặt trong mỗi bao xi măng, mỗi tấm kính cửa sổ. Từ đá vôi, cát và đất sét, con người làm ra những vật liệu nào, và phải trả giá gì cho môi trường?',
  objectives: [
    'Nêu được thành phần chính của đá vôi, cách khai thác và ứng dụng của đá vôi, vôi sống, vôi tôi.',
    'Viết được phương trình hoá học của phản ứng nung đá vôi và tôi vôi.',
    'Trình bày được nguyên liệu, các công đoạn chính sản xuất đồ gốm, thuỷ tinh, xi măng.',
    'Nêu được ảnh hưởng của việc khai thác đá vôi và sản xuất vật liệu silicate tới môi trường và biện pháp giảm thiểu.',
  ],
  sections: [
    {
      heading: 'Khai thác đá vôi',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đá vôi',
          text: 'Đá vôi là loại đá có thành phần chính là calcium carbonate $\\mathrm{CaCO_3}$, chất rắn màu trắng, không tan trong nước. Đá vôi trong tự nhiên thường lẫn tạp chất nên có nhiều màu khác nhau (xám, vàng, đen, ...).',
        },
        {
          type: 'p',
          text: 'Đá vôi rất phổ biến trong vỏ Trái Đất: ở các núi đá, mỏ đá và ở dạng vỏ sò, san hô. Ở Việt Nam, núi đá vôi tập trung nhiều ở Bắc Bộ và Bắc Trung Bộ. Đá vôi được khai thác bằng cách khoan, nổ mìn phá đá, rồi bốc xếp, vận chuyển về nơi chế biến để đập nhỏ và phân loại. Để nhận ra đá vôi, có thể nhỏ acid lên đá: đá sủi bọt khí $\\mathrm{CO_2}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3 + 2HCl \\longrightarrow CaCl_2 + CO_2\\uparrow + H_2O}',
        },
        {
          type: 'p',
          text: 'Nung đá vôi ở nhiệt độ cao (khoảng $900$–$1\\,000\\,^\\circ\\mathrm{C}$), calcium carbonate bị phân huỷ thành vôi sống. Vôi sống tác dụng mạnh với nước (tôi vôi), toả nhiều nhiệt, tạo vôi tôi $\\mathrm{Ca(OH)_2}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2\\uparrow} \\qquad \\mathrm{CaO + H_2O \\longrightarrow Ca(OH)_2}',
        },
        {
          type: 'table',
          head: ['Sản phẩm', 'Ứng dụng'],
          rows: [
            [
              'Đá vôi (đá khối, bột đá)',
              'Vật liệu xây dựng; nguyên liệu sản xuất vôi, xi măng, thuỷ tinh; bột đá làm chất độn cho cao su, chất dẻo',
            ],
            [
              'Vôi sống $\\mathrm{CaO}$',
              'Sản xuất vôi tôi, thuỷ tinh; chất tạo xỉ trong luyện kim; khử chua đất, xử lí nước thải, sát trùng; hút ẩm',
            ],
            [
              'Vôi tôi $\\mathrm{Ca(OH)_2}$',
              'Vữa xây, quét tường; khử chua đất trồng; sản xuất chất tẩy trắng, sát trùng (clorua vôi)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao vữa vôi đông cứng?',
          text: 'Vôi tôi trong vữa hấp thụ khí carbon dioxide trong không khí, tạo lại calcium carbonate rắn: $\\mathrm{Ca(OH)_2 + CO_2 \\longrightarrow CaCO_3 + H_2O}$.',
        },
        {
          type: 'p',
          text: 'Khai thác đá vôi gây bụi, tiếng ồn do nổ mìn, phá vỡ cảnh quan núi đá, mất nơi sống của sinh vật, có thể gây xói mòn đất và ô nhiễm nguồn nước. Vì vậy việc khai thác cần có quy hoạch, được cấp phép, phun nước giảm bụi, trồng cây xanh và phục hồi môi trường sau khai thác.',
        },
      ],
    },
    {
      heading: 'Công nghiệp silicate',
      blocks: [
        {
          type: 'p',
          text: 'Silicon là nguyên tố phổ biến thứ hai trong vỏ Trái Đất (khoảng $28{,}2\\%$ khối lượng), tồn tại chủ yếu dưới dạng silicon dioxide $\\mathrm{SiO_2}$ (cát, thạch anh) và các muối silicate (đất sét, cao lanh, mica). Công nghiệp silicate là ngành sản xuất đồ gốm, thuỷ tinh, xi măng từ các hợp chất tự nhiên của silicon và các chất khác.',
        },
        {
          type: 'p',
          text: 'Silicon tinh khiết là chất bán dẫn, dùng làm vi mạch điện tử (chip), pin mặt trời, cảm biến. Thạch anh (gần như $\\mathrm{SiO_2}$ tinh khiết) dùng làm thiết bị phát sóng siêu âm, dụng cụ quang học, thuỷ tinh chịu nhiệt, cáp quang.',
        },
        {
          type: 'table',
          head: ['Ngành', 'Nguyên liệu chính', 'Công đoạn chính'],
          rows: [
            [
              'Đồ gốm (gạch, ngói, sành, sứ)',
              'Đất sét, cao lanh, cát trắng, nước',
              'Nhào trộn thành khối dẻo → tạo hình, sấy khô → nung ở nhiệt độ cao (đồ sứ: nung, tráng men, nung lần hai)',
            ],
            [
              'Thuỷ tinh',
              'Cát trắng, đá vôi, soda $\\mathrm{Na_2CO_3}$',
              'Trộn nguyên liệu → nung ở khoảng $1\\,400\\,^\\circ\\mathrm{C}$ thành thuỷ tinh nhão → làm nguội từ từ, ép hoặc thổi thành sản phẩm',
            ],
            [
              'Xi măng',
              'Đá vôi, đất sét giàu $\\mathrm{SiO_2}$, một ít quặng sắt; thạch cao',
              'Nghiền, trộn → nung trong lò quay ở khoảng $1\\,400$–$1\\,600\\,^\\circ\\mathrm{C}$ thành clinker → nghiền clinker với khoảng $5\\%$ thạch cao và phụ gia',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thuỷ tinh thường là hỗn hợp của sodium silicate và calcium silicate. Khi nấu thuỷ tinh xảy ra các phản ứng:',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2\\uparrow}\\\\ &\\mathrm{CaO + SiO_2 \\xrightarrow{t^\\circ} CaSiO_3}\\\\ &\\mathrm{Na_2CO_3 + SiO_2 \\xrightarrow{t^\\circ} Na_2SiO_3 + CO_2\\uparrow} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Xi măng là chất kết dính dạng bột mịn, màu lục xám; trộn với cát, đá, sỏi và nước thành bê tông, đông cứng lại rất bền. Ở Việt Nam có nhiều nhà máy xi măng ở Hải Dương, Thanh Hoá, Hải Phòng, Hà Nam, Nghệ An; làng gốm nổi tiếng như Bát Tràng (Hà Nội), Phù Lãng (Bắc Ninh).',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ảnh hưởng tới môi trường',
          text: 'Các lò nung vôi, xi măng, thuỷ tinh, gốm tiêu tốn nhiều nhiên liệu và thải ra nhiều bụi, khí $\\mathrm{CO_2}$ (từ nhiên liệu đốt cháy và từ đá vôi bị phân huỷ). Biện pháp giảm thiểu: lắp thiết bị lọc bụi, xử lí khí thải, tận dụng nhiệt thải, dùng công nghệ tiết kiệm năng lượng, tái chế thuỷ tinh, dùng gạch không nung.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dây chuyền sản xuất vôi, xi măng, thuỷ tinh, gốm',
    instruction:
      'Chọn một dây chuyền, rồi bấm từng công đoạn (hoặc nút "Công đoạn tiếp") để xem điều gì xảy ra, nhiệt độ và phương trình hoá học. Ở công đoạn nung đá vôi, kéo thanh trượt để xem nung bao nhiêu đá vôi thì thu được bao nhiêu vôi sống và thải ra bao nhiêu khí CO₂.',
  },
  examples: [
    {
      problem:
        'Nung $5$ tấn đá vôi chứa $95\\%$ khối lượng $\\mathrm{CaCO_3}$ (phần còn lại là tạp chất không bị phân huỷ). Giả sử $\\mathrm{CaCO_3}$ bị phân huỷ hoàn toàn, tính khối lượng vôi sống $\\mathrm{CaO}$ thu được và khối lượng khí $\\mathrm{CO_2}$ thải ra (Ca = 40, C = 12, O = 16).',
      steps: [
        'Khối lượng $\\mathrm{CaCO_3}$: $5 \\times 95\\% = 4{,}75$ tấn.',
        '$\\mathrm{CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2}$: cứ $100$ tấn $\\mathrm{CaCO_3}$ cho $56$ tấn $\\mathrm{CaO}$ và $44$ tấn $\\mathrm{CO_2}$.',
        'Khối lượng $\\mathrm{CaO}$: $4{,}75 \\times \\dfrac{56}{100} = 2{,}66$ tấn.',
        'Khối lượng $\\mathrm{CO_2}$: $4{,}75 \\times \\dfrac{44}{100} = 2{,}09$ tấn (kiểm tra: $2{,}66 + 2{,}09 = 4{,}75$).',
      ],
      answer: '$2{,}66$ tấn $\\mathrm{CaO}$ và $2{,}09$ tấn khí $\\mathrm{CO_2}$.',
    },
    {
      problem:
        'Vì sao trong sản xuất thuỷ tinh phải dùng đá vôi và soda chứ không chỉ nung cát? Viết các phương trình hoá học.',
      steps: [
        'Cát chứa chủ yếu $\\mathrm{SiO_2}$, nóng chảy ở nhiệt độ rất cao (trên $1\\,700\\,^\\circ\\mathrm{C}$).',
        'Đá vôi bị phân huỷ: $\\mathrm{CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2}$; $\\mathrm{CaO}$ kết hợp với $\\mathrm{SiO_2}$: $\\mathrm{CaO + SiO_2 \\xrightarrow{t^\\circ} CaSiO_3}$.',
        'Soda tác dụng với cát: $\\mathrm{Na_2CO_3 + SiO_2 \\xrightarrow{t^\\circ} Na_2SiO_3 + CO_2}$.',
        'Hỗn hợp các muối silicate này nóng chảy ở khoảng $1\\,400\\,^\\circ\\mathrm{C}$ thành thuỷ tinh nhão, dễ tạo hình.',
      ],
      answer:
        'Đá vôi và soda chuyển $\\mathrm{SiO_2}$ thành $\\mathrm{CaSiO_3}$ và $\\mathrm{Na_2SiO_3}$; hỗn hợp này là thuỷ tinh thường, nóng chảy ở nhiệt độ thấp hơn cát.',
    },
    {
      problem: 'Nêu thứ tự các công đoạn chính sản xuất xi măng và cho biết vai trò của thạch cao.',
      steps: [
        'Nghiền nhỏ đá vôi, trộn với đất sét giàu $\\mathrm{SiO_2}$ và một ít quặng sắt thành phối liệu.',
        'Nung phối liệu trong lò quay ở khoảng $1\\,400$–$1\\,600\\,^\\circ\\mathrm{C}$ thu được clinker.',
        'Nghiền clinker với khoảng $5\\%$ thạch cao $\\mathrm{CaSO_4 \\cdot 2H_2O}$ và phụ gia thành bột mịn.',
      ],
      answer:
        'Nghiền, trộn → nung clinker → nghiền clinker với thạch cao. Thạch cao điều chỉnh thời gian đông cứng của xi măng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chính của đá vôi là',
      options: [
        '$\\mathrm{CaO}$',
        '$\\mathrm{Ca(OH)_2}$',
        '$\\mathrm{CaCO_3}$',
        '$\\mathrm{CaSO_4}$',
      ],
      answer: 2,
      hints: [
        'Đá vôi sủi bọt khí $\\mathrm{CO_2}$ khi nhỏ acid lên, nên nó là một muối carbonate.',
      ],
      solution:
        'Đá vôi có thành phần chính là calcium carbonate $\\mathrm{CaCO_3}$. $\\mathrm{CaO}$ là vôi sống, $\\mathrm{Ca(OH)_2}$ là vôi tôi, $\\mathrm{CaSO_4}$ có trong thạch cao.',
    },
    {
      type: 'choice',
      prompt: 'Vữa vôi trát tường cứng dần theo thời gian vì',
      options: [
        '$\\mathrm{Ca(OH)_2}$ bay hơi hết.',
        '$\\mathrm{Ca(OH)_2}$ hấp thụ $\\mathrm{CO_2}$ trong không khí tạo $\\mathrm{CaCO_3}$ rắn.',
        '$\\mathrm{Ca(OH)_2}$ bị phân huỷ thành $\\mathrm{CaO}$.',
        'Cát trong vữa tác dụng với oxygen.',
      ],
      answer: 1,
      hints: ['Không khí có chứa một lượng nhỏ khí carbon dioxide.'],
      solution:
        '$\\mathrm{Ca(OH)_2 + CO_2 \\longrightarrow CaCO_3 + H_2O}$; $\\mathrm{CaCO_3}$ rắn làm vữa đông cứng.',
    },
    {
      type: 'number',
      prompt:
        'Nung $1$ tấn đá vôi chứa $80\\%$ khối lượng $\\mathrm{CaCO_3}$, giả sử $\\mathrm{CaCO_3}$ phân huỷ hoàn toàn. Tính khối lượng vôi sống $\\mathrm{CaO}$ thu được, đơn vị tấn (Ca = 40, C = 12, O = 16).',
      answer: 0.448,
      tolerance: 0.001,
      unit: 'tấn',
      hints: [
        'Tính khối lượng $\\mathrm{CaCO_3}$ trước.',
        'Cứ $100$ phần khối lượng $\\mathrm{CaCO_3}$ cho $56$ phần $\\mathrm{CaO}$.',
      ],
      solution:
        '$m_{\\mathrm{CaCO_3}} = 1 \\times 80\\% = 0{,}8$ tấn; $m_{\\mathrm{CaO}} = 0{,}8 \\times \\dfrac{56}{100} = 0{,}448$ tấn.',
    },
    {
      type: 'number',
      prompt:
        'Nung hoàn toàn $10$ kg $\\mathrm{CaCO_3}$ tinh khiết. Tính thể tích khí $\\mathrm{CO_2}$ thải ra ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar; một mol khí chiếm $24{,}79$ L), đơn vị lít.',
      answer: 2479,
      tolerance: 1,
      unit: 'L',
      hints: [
        '$M_{\\mathrm{CaCO_3}} = 100$ g/mol, nên $10$ kg là bao nhiêu mol?',
        'Một mol $\\mathrm{CaCO_3}$ cho một mol $\\mathrm{CO_2}$.',
      ],
      solution:
        '$n_{\\mathrm{CaCO_3}} = \\dfrac{10\\,000}{100} = 100$ mol $= n_{\\mathrm{CO_2}}$; $V_{\\mathrm{CO_2}} = 100 \\times 24{,}79 = 2\\,479$ L (khoảng $2{,}5\\ \\mathrm{m^3}$).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các công đoạn sản xuất xi măng theo đúng thứ tự.',
      items: [
        'Nghiền clinker với thạch cao và phụ gia',
        'Nghiền nhỏ đá vôi, trộn với đất sét và quặng sắt',
        'Nung phối liệu trong lò quay thành clinker',
      ],
      answer: [1, 2, 0],
      hints: ['Clinker là sản phẩm của lò nung.'],
      solution:
        'Nghiền, trộn nguyên liệu → nung trong lò quay ở khoảng $1\\,400$–$1\\,600\\,^\\circ\\mathrm{C}$ thành clinker → nghiền clinker với thạch cao, phụ gia thành xi măng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sản phẩm với nguyên liệu chính để sản xuất nó.',
      left: ['Thuỷ tinh thường', 'Xi măng', 'Đồ sứ', 'Vôi sống'],
      right: [
        'Đá vôi, đất sét, một ít quặng sắt',
        'Đá vôi',
        'Cát trắng, đá vôi, soda',
        'Cao lanh (đất sét trắng), cát trắng',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Soda $\\mathrm{Na_2CO_3}$ chỉ dùng trong sản xuất thuỷ tinh.'],
      solution:
        'Thuỷ tinh: cát trắng, đá vôi, soda; xi măng: đá vôi, đất sét, quặng sắt; đồ sứ: cao lanh, cát trắng; vôi sống: đá vôi.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu kilogram soda $\\mathrm{Na_2CO_3}$ để tạo ra $122$ kg sodium silicate $\\mathrm{Na_2SiO_3}$ theo phản ứng $\\mathrm{Na_2CO_3 + SiO_2 \\xrightarrow{t^\\circ} Na_2SiO_3 + CO_2}$? (Na = 23, C = 12, O = 16, Si = 28)',
      answer: 106,
      tolerance: 0.5,
      unit: 'kg',
      hints: [
        'Tính khối lượng mol của $\\mathrm{Na_2SiO_3}$ và $\\mathrm{Na_2CO_3}$.',
        'Tỉ lệ số mol hai chất là $1 : 1$.',
      ],
      solution:
        '$M_{\\mathrm{Na_2SiO_3}} = 46 + 28 + 48 = 122$; $M_{\\mathrm{Na_2CO_3}} = 46 + 12 + 48 = 106$. $122$ kg $\\mathrm{Na_2SiO_3}$ là $1$ kmol, cần $1$ kmol $\\mathrm{Na_2CO_3}$, tức $106$ kg.',
    },
    {
      type: 'text',
      prompt:
        'Clinker được nghiền cùng khoảng $5\\%$ một chất (công thức $\\mathrm{CaSO_4 \\cdot 2H_2O}$) để điều chỉnh thời gian đông cứng của xi măng. Đó là chất gì?',
      accept: ['thạch cao', 'thach cao', 'CaSO4.2H2O', 'CaSO4·2H2O'],
      hints: ['Chất này cũng dùng để bó bột khi gãy xương, đúc tượng.'],
      solution: 'Đó là thạch cao $\\mathrm{CaSO_4 \\cdot 2H_2O}$.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn các ảnh hưởng xấu tới môi trường của việc khai thác đá vôi và sản xuất xi măng.',
      options: [
        'Bụi và tiếng ồn do nổ mìn, nghiền đá.',
        'Thải nhiều khí $\\mathrm{CO_2}$ từ lò nung.',
        'Phá vỡ cảnh quan núi đá vôi, mất nơi sống của sinh vật.',
        'Làm tăng lượng oxygen trong không khí.',
        'Xói mòn đất, ô nhiễm nguồn nước quanh mỏ.',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Khi nung, đá vôi giải phóng khí gì?'],
      solution:
        'Khai thác đá vôi và sản xuất xi măng gây bụi, ồn, thải $\\mathrm{CO_2}$, phá cảnh quan, xói mòn, ô nhiễm nước; không làm tăng oxygen.',
    },
  ],
  takeaways: [
    'Đá vôi có thành phần chính là $\\mathrm{CaCO_3}$; được khai thác bằng khoan, nổ mìn, rồi đập nhỏ, phân loại.',
    'Nung vôi: $\\mathrm{CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2}$; tôi vôi: $\\mathrm{CaO + H_2O \\longrightarrow Ca(OH)_2}$.',
    'Công nghiệp silicate gồm sản xuất đồ gốm (đất sét, cao lanh), thuỷ tinh (cát, đá vôi, soda, nung khoảng $1\\,400\\,^\\circ\\mathrm{C}$) và xi măng (đá vôi, đất sét, quặng sắt, nung khoảng $1\\,400$–$1\\,600\\,^\\circ\\mathrm{C}$ thành clinker rồi nghiền với thạch cao).',
    'Khai thác đá vôi và sản xuất silicate gây bụi, thải $\\mathrm{CO_2}$, phá cảnh quan; cần quy hoạch, lọc bụi, tiết kiệm năng lượng và tái chế.',
  ],
};
