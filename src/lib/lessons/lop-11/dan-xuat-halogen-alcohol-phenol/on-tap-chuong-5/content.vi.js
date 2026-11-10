/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 5: so sánh dẫn xuất halogen, alcohol và phenol về cấu tạo, tính chất và cách nhận biết; sơ đồ chuyển hoá giữa alkene, dẫn xuất halogen, alcohol; bài tập tính theo phương trình.',
  intro:
    'Ba loại hợp chất của chương đều sinh ra khi thay nguyên tử H của hydrocarbon bằng một nguyên tử hay nhóm nguyên tử khác: halogen, nhóm OH gắn vào carbon no, hay nhóm OH gắn vào vòng benzene. Chúng chuyển hoá qua lại với nhau và với alkene, nên nắm chắc các điều kiện phản ứng là đi được từ chất này sang chất kia.',
  objectives: [
    'Hệ thống hoá được cấu tạo, tính chất vật lí và tính chất hoá học của dẫn xuất halogen, alcohol, phenol.',
    'Chọn được thuốc thử để nhận biết alcohol đa chức có nhóm OH liền kề và phenol.',
    'Viết được phương trình theo sơ đồ chuyển hoá giữa alkene, dẫn xuất halogen, alcohol và giải được bài tập tính theo phương trình.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh dẫn xuất halogen, alcohol và phenol',
          head: ['Đặc điểm', 'Dẫn xuất halogen', 'Alcohol', 'Phenol'],
          rows: [
            [
              'Cấu tạo',
              'Nguyên tử halogen thay cho H của hydrocarbon; liên kết C–X phân cực',
              'Nhóm OH gắn với carbon no',
              'Nhóm OH gắn trực tiếp vào carbon của vòng benzene',
            ],
            [
              'Ví dụ',
              '$\\mathrm{C_2H_5Br}$',
              '$\\mathrm{C_2H_5OH}$, $\\mathrm{C_3H_5(OH)_3}$',
              '$\\mathrm{C_6H_5OH}$',
            ],
            [
              'Tính chất vật lí',
              'Không tan trong nước; nhiệt độ sôi tăng theo phân tử khối',
              'Có liên kết hydrogen: sôi cao, alcohol nhỏ tan vô hạn trong nước',
              'Rắn, ít tan trong nước lạnh, tan nhiều trong nước nóng',
            ],
            [
              'Phản ứng đặc trưng',
              'Thế X bằng OH (NaOH, $\\mathrm{H_2O}$, $t^\\circ$); tách HX (KOH, $\\mathrm{C_2H_5OH}$, $t^\\circ$)',
              'Với Na; tạo ether, tách nước ($\\mathrm{H_2SO_4}$ đặc); oxi hoá bởi CuO',
              'Tính acid yếu (Na, NaOH, $\\mathrm{Na_2CO_3}$); thế Br, $\\mathrm{NO_2}$ vào vòng',
            ],
            [
              'Nhận biết',
              'Đun với NaOH, axit hoá bằng $\\mathrm{HNO_3}$ rồi thử ion halide bằng $\\mathrm{AgNO_3}$',
              'Polyalcohol có OH liền kề hoà tan $\\mathrm{Cu(OH)_2}$: dung dịch xanh lam',
              'Nước bromine: kết tủa trắng 2,4,6-tribromophenol',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Quy tắc Zaitsev dùng hai lần',
          text: 'Phản ứng tách HX của dẫn xuất halogen và tách nước của alcohol đều ưu tiên lấy H ở carbon bên cạnh có bậc cao hơn. Ví dụ 2-bromobutane và butan-2-ol đều cho sản phẩm chính là but-2-ene.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bậc alcohol và sản phẩm oxi hoá',
          text: 'Với CuO, đun nóng: alcohol bậc I tạo aldehyde, bậc II tạo ketone, bậc III khó bị oxi hoá.',
        },
      ],
    },
    {
      heading: 'Sơ đồ chuyển hoá',
      blocks: [
        {
          type: 'p',
          text: 'Các chất hai carbon của chương nối với nhau theo sơ đồ: ethylene ⇄ bromoethane ⇄ ethanol ⇄ ethylene, ethanol → diethyl ether, ethanol → acetaldehyde, ethylene → 1,2-dibromoethane → ethylene glycol.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '$\\mathrm{CH_2=CH_2} + \\mathrm{HBr} \\rightarrow \\mathrm{CH_3{-}CH_2Br}$',
            '$\\mathrm{CH_3{-}CH_2Br} + \\mathrm{NaOH} \\xrightarrow{\\mathrm{H_2O},\\,t^\\circ} \\mathrm{CH_3{-}CH_2OH} + \\mathrm{NaBr}$',
            '$\\mathrm{CH_3{-}CH_2Br} + \\mathrm{KOH} \\xrightarrow{\\mathrm{C_2H_5OH},\\,t^\\circ} \\mathrm{CH_2=CH_2} + \\mathrm{KBr} + \\mathrm{H_2O}$',
            '$\\mathrm{CH_2=CH_2} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H_3PO_4},\\,t^\\circ,\\,p} \\mathrm{CH_3{-}CH_2OH}$',
            '$\\mathrm{CH_3{-}CH_2OH} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ 170^\\circ\\mathrm{C}} \\mathrm{CH_2=CH_2} + \\mathrm{H_2O}$',
            '$2\\mathrm{CH_3{-}CH_2OH} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ 140^\\circ\\mathrm{C}} \\mathrm{C_2H_5{-}O{-}C_2H_5} + \\mathrm{H_2O}$',
            '$\\mathrm{CH_3{-}CH_2OH} + \\mathrm{CuO} \\xrightarrow{t^\\circ} \\mathrm{CH_3CHO} + \\mathrm{Cu} + \\mathrm{H_2O}$',
            '$\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\rightarrow \\mathrm{BrCH_2{-}CH_2Br}$; $\\mathrm{BrCH_2{-}CH_2Br} + 2\\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{HOCH_2{-}CH_2OH} + 2\\mathrm{NaBr}$',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Điều kiện quyết định sản phẩm',
          text: 'Cùng bromoethane và base: trong nước cho ethanol, trong ethanol cho ethylene. Cùng ethanol và $\\mathrm{H_2SO_4}$ đặc: ở $140$ °C cho ether, ở $170$ °C cho ethylene.',
        },
      ],
    },
    {
      heading: 'Lưu ý khi giải bài tập',
      blocks: [
        {
          type: 'list',
          items: [
            'Alcohol và phenol tác dụng với Na: cứ $2$ mol nhóm OH cho $1$ mol $\\mathrm{H_2}$.',
            'Chỉ phenol tác dụng với NaOH; trong hỗn hợp alcohol và phenol, số mol NaOH bằng số mol phenol.',
            'Oxi hoá alcohol bằng CuO: khối lượng chất rắn giảm bằng khối lượng nguyên tử O đã mất, $\\Delta m = 16 \\cdot n_{\\text{alcohol}}$.',
            'Alcohol no, đơn chức, mạch hở $\\mathrm{C_nH_{2n+1}OH}$ có $M = 14n + 18$; dẫn xuất monohalogen no $\\mathrm{C_nH_{2n+1}X}$ có $M = 14n + 1 + M_X$.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ chuyển hoá',
    instruction:
      'Chọn một nhiệm vụ. Bấm thuốc thử và điều kiện để biến chất đang có thành chất khác; mỗi phản ứng đúng được ghi lại kèm phương trình. Hoàn thành nhiệm vụ với số bước ít nhất.',
  },
  examples: [
    {
      problem:
        'Hoàn thành sơ đồ: ethylene → bromoethane → ethanol → acetaldehyde. Ghi rõ điều kiện.',
      steps: [
        'Ethylene cộng HBr: $\\mathrm{CH_2=CH_2} + \\mathrm{HBr} \\rightarrow \\mathrm{CH_3{-}CH_2Br}$.',
        'Thế Br bằng OH trong dung dịch NaOH loãng, đun nóng: $\\mathrm{CH_3{-}CH_2Br} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_3{-}CH_2OH} + \\mathrm{NaBr}$.',
        'Ethanol là alcohol bậc I, bị CuO oxi hoá thành aldehyde: $\\mathrm{CH_3{-}CH_2OH} + \\mathrm{CuO} \\xrightarrow{t^\\circ} \\mathrm{CH_3CHO} + \\mathrm{Cu} + \\mathrm{H_2O}$.',
      ],
      answer:
        'Ba phản ứng: cộng HBr; thế với NaOH trong nước, đun nóng; oxi hoá bởi CuO, đun nóng.',
    },
    {
      problem: 'Trình bày cách phân biệt ba chất lỏng: ethanol, glycerol và dung dịch phenol.',
      steps: [
        'Nhỏ nước bromine vào từng mẫu: mẫu có kết tủa trắng là phenol.',
        'Cho hai mẫu còn lại vào ống nghiệm chứa $\\mathrm{Cu(OH)_2}$: mẫu hoà tan kết tủa tạo dung dịch xanh lam là glycerol.',
        'Mẫu còn lại không có hiện tượng là ethanol.',
      ],
      answer: 'Dùng nước bromine nhận ra phenol, rồi $\\mathrm{Cu(OH)_2}$ nhận ra glycerol.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thuốc thử nào phân biệt được glycerol và ethanol?',
      options: ['$\\mathrm{Cu(OH)_2}$', 'Kim loại Na', 'Nước bromine', 'Quỳ tím'],
      answer: 0,
      hints: ['Glycerol có ba nhóm OH ở ba carbon liền nhau.'],
      solution:
        'Glycerol hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch xanh lam, ethanol thì không. Cả hai đều tác dụng với Na, không làm mất màu nước bromine và không đổi màu quỳ tím.',
    },
    {
      type: 'choice',
      prompt:
        'Thuốc thử nào phân biệt được dung dịch phenol và ethanol bằng một hiện tượng nhìn thấy rõ?',
      options: ['Nước bromine', 'Dung dịch NaOH', 'Kim loại Na', '$\\mathrm{Cu(OH)_2}$'],
      answer: 0,
      hints: ['Tìm phản ứng tạo kết tủa.'],
      solution:
        'Phenol tạo kết tủa trắng 2,4,6-tribromophenol với nước bromine; ethanol không phản ứng. Phenol phản ứng với NaOH nhưng không có hiện tượng rõ; cả hai đều tác dụng với Na.',
    },
    {
      type: 'choice',
      prompt:
        'Đun 2-methylbutan-2-ol $\\mathrm{CH_3{-}C(CH_3)(OH){-}CH_2{-}CH_3}$ với $\\mathrm{H_2SO_4}$ đặc ở $170$ °C. Sản phẩm chính là',
      options: ['2-methylbut-2-ene', '2-methylbut-1-ene', '3-methylbut-1-ene', 'pent-2-ene'],
      answer: 0,
      hints: ['Theo quy tắc Zaitsev, H tách ở carbon bên cạnh có bậc cao hơn.'],
      solution:
        'Carbon mang OH có ba carbon bên cạnh: hai nhóm $\\mathrm{CH_3}$ (bậc I) và $\\mathrm{CH_2}$ (bậc II). H tách ở $\\mathrm{CH_2}$: $\\mathrm{CH_3{-}C(CH_3)=CH{-}CH_3}$, 2-methylbut-2-ene.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phản ứng với loại phản ứng của nó.',
      left: [
        'Bromoethane + NaOH (trong nước, $t^\\circ$)',
        'Bromoethane + KOH (trong ethanol, $t^\\circ$)',
        'Ethanol + CuO ($t^\\circ$)',
        'Ethanol + $\\mathrm{H_2SO_4}$ đặc ($140$ °C)',
        'Phenol + nước bromine',
      ],
      right: [
        'Thế nguyên tử halogen',
        'Tách hydrogen halide',
        'Oxi hoá không hoàn toàn',
        'Tạo ether',
        'Thế ở vòng benzene',
        'Cộng vào liên kết đôi',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Dung môi nước cho phản ứng thế, dung môi ethanol cho phản ứng tách.'],
      solution:
        'NaOH trong nước thế Br bằng OH; KOH trong ethanol tách HBr; CuO oxi hoá ethanol thành acetaldehyde; $\\mathrm{H_2SO_4}$ đặc ở $140$ °C tạo diethyl ether; phenol và bromine cho phản ứng thế ở vòng. Không phản ứng nào là phản ứng cộng.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH_2Br}$.',
      accept: ['1-bromo-3-methylbutane', '1 bromo 3 methylbutane'],
      hints: [
        'Mạch chính có $4$ C; đánh số từ đầu gần nhóm thế hơn.',
        'Gọi các nhóm thế theo thứ tự chữ cái.',
      ],
      solution:
        'Đánh số từ đầu có Br: Br ở C1, methyl ở C3 (đánh từ đầu kia được Br ở C4, methyl ở C2; bộ số $1, 3$ nhỏ hơn $2, 4$). Tên: 1-bromo-3-methylbutane.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{HOCH_2{-}CH_2OH}$.',
      accept: ['ethane-1,2-diol', 'ethane 1,2 diol', 'ethane-1-2-diol'],
      hints: ['Hai nhóm OH: dùng đuôi diol và giữ chữ e của ethane.'],
      solution: 'Mạch chính ethane, hai nhóm OH ở C1 và C2: ethane-1,2-diol (ethylene glycol).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo chiều nhiệt độ sôi tăng dần.',
      items: ['Ethanol', 'Propane', 'Bromoethane', 'Chloroethane'],
      answer: [1, 3, 2, 0],
      hints: [
        'Với các dẫn xuất halogen, nhiệt độ sôi tăng theo phân tử khối.',
        'Alcohol có liên kết hydrogen giữa các phân tử.',
      ],
      solution:
        'Propane ($-42$ °C) < chloroethane ($12{,}3$ °C) < bromoethane ($38{,}4$ °C) < ethanol ($78{,}3$ °C). Ethanol có phân tử khối nhỏ hơn bromoethane nhưng sôi cao hơn nhờ liên kết hydrogen.',
    },
    {
      type: 'number',
      prompt:
        'Đun $13{,}8$ g ethanol với $\\mathrm{H_2SO_4}$ đặc ở $170$ °C, hiệu suất $60\\%$. Tính thể tích ethylene thu được ở đkc ($24{,}79$ L/mol).',
      answer: 4.4622,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{13{,}8}{46}$; nhân số mol ethylene lí thuyết với $0{,}6$.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = 0{,}3$ mol, ethylene thực tế $0{,}3 \\cdot 0{,}6 = 0{,}18$ mol. $V = 0{,}18 \\cdot 24{,}79 \\approx 4{,}46$ L.',
    },
    {
      type: 'number',
      prompt:
        'Cho hơi của $9{,}2$ g ethanol đi qua ống đựng CuO dư, đun nóng; phản ứng hoàn toàn tạo acetaldehyde. Khối lượng chất rắn trong ống giảm bao nhiêu gam?',
      answer: 3.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'CuO biến thành Cu: chất rắn mất đúng nguyên tử O.',
        'Mỗi mol ethanol làm $1$ mol CuO thành Cu.',
      ],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = 0{,}2$ mol $= n_{\\mathrm{CuO}}$ phản ứng. Chất rắn giảm $m_{\\mathrm{O}} = 0{,}2 \\cdot 16 = 3{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $18{,}8$ g phenol tác dụng với Na dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở đkc ($24{,}79$ L/mol).',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: ['$M_{\\mathrm{C_6H_5OH}} = 94$ g/mol; $2$ mol phenol cho $1$ mol $\\mathrm{H_2}$.'],
      solution:
        '$n_{\\mathrm{C_6H_5OH}} = \\dfrac{18{,}8}{94} = 0{,}2$ mol, $n_{\\mathrm{H_2}} = 0{,}1$ mol, $V = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu alcohol đồng phân cấu tạo có công thức phân tử $\\mathrm{C_4H_{10}O}$?',
      answer: 4,
      hints: [
        'Mạch carbon $4$ C có hai dạng: mạch thẳng và mạch nhánh.',
        'Đặt nhóm OH vào từng vị trí khác nhau trên mỗi mạch.',
      ],
      solution:
        'Mạch thẳng: butan-1-ol, butan-2-ol. Mạch nhánh: 2-methylpropan-1-ol, 2-methylpropan-2-ol. Có $4$ alcohol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Phenol và ethanol đều tác dụng với Na.',
        'Phenol và ethanol đều tác dụng với dung dịch NaOH.',
        'Đun bromoethane với dung dịch NaOH loãng thu được ethanol.',
        '2-methylpropan-2-ol bị CuO oxi hoá thành ketone.',
        'Ethylene glycol hoà tan được $\\mathrm{Cu(OH)_2}$.',
      ],
      answers: [0, 2, 4],
      hints: [
        'Xét bậc của 2-methylpropan-2-ol và chất nào có tính acid đủ mạnh để phản ứng với NaOH.',
      ],
      solution:
        'Ethanol không tác dụng với NaOH; 2-methylpropan-2-ol là alcohol bậc III nên khó bị CuO oxi hoá. Các phát biểu còn lại đúng.',
    },
  ],
  takeaways: [
    'Dẫn xuất halogen: NaOH/nước cho alcohol (thế), KOH/ethanol cho alkene (tách, quy tắc Zaitsev).',
    'Alcohol: Na cho $\\mathrm{H_2}$; $\\mathrm{H_2SO_4}$ đặc ở $140$ °C cho ether, ở $170$ °C cho alkene; CuO oxi hoá bậc I thành aldehyde, bậc II thành ketone.',
    'Phenol: acid yếu, tác dụng với NaOH (alcohol thì không); tạo kết tủa trắng với nước bromine.',
    'Nhận biết: $\\mathrm{Cu(OH)_2}$ cho polyalcohol có OH liền kề, nước bromine cho phenol.',
  ],
};
