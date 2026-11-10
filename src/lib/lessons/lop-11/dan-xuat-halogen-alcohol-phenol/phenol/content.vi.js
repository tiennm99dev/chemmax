/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phenol: khái niệm, cấu tạo và ảnh hưởng qua lại giữa nhóm OH với vòng benzene, tính chất vật lí, tính acid yếu (mạnh hơn ethanol, yếu hơn carbonic acid), phản ứng thế bromine và nitro vào vòng, điều chế và ứng dụng.',
  intro:
    'Năm 1867, bác sĩ Joseph Lister phun dung dịch phenol lên dụng cụ mổ và vết thương, giảm hẳn số ca nhiễm trùng sau phẫu thuật. Phenol trông giống alcohol vì cũng có nhóm OH, nhưng nhóm OH gắn vào vòng benzene khiến nó tác dụng được với dung dịch kiềm và phản ứng với nước bromine dễ hơn benzene rất nhiều.',
  objectives: [
    'Nêu được khái niệm phenol và phân biệt được phenol với alcohol thơm.',
    'Trình bày được đặc điểm cấu tạo và tính chất vật lí của phenol.',
    'Giải thích được tính acid yếu của phenol và so sánh độ acid của ethanol, nước, phenol, carbonic acid.',
    'Viết được phương trình phản ứng của phenol với Na, NaOH, $\\mathrm{Na_2CO_3}$, nước bromine, nitric acid và phản ứng của sodium phenoxide với $\\mathrm{CO_2}$.',
    'Nêu được ứng dụng và phương pháp điều chế phenol.',
  ],
  sections: [
    {
      heading: 'Khái niệm và cấu tạo',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phenol',
          text: 'Phenol là những hợp chất hữu cơ trong phân tử có nhóm hydroxy (–OH) liên kết trực tiếp với nguyên tử carbon của vòng benzene. Chất đơn giản nhất là $\\mathrm{C_6H_5OH}$, cũng gọi là phenol.',
        },
        {
          type: 'table',
          caption: 'Phenol hay alcohol?',
          head: ['Chất', 'Nhóm OH gắn vào', 'Loại'],
          rows: [
            ['$\\mathrm{C_6H_5OH}$', 'carbon của vòng benzene', 'phenol'],
            ['$\\mathrm{CH_3{-}C_6H_4{-}OH}$ (cresol)', 'carbon của vòng benzene', 'phenol'],
            [
              '$\\mathrm{C_6H_5{-}CH_2OH}$',
              'carbon no của nhóm $\\mathrm{CH_2}$',
              'alcohol thơm (benzyl alcohol)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong phân tử phenol, cặp electron chưa liên kết của nguyên tử O liên hợp với hệ electron π của vòng benzene. Nhóm OH và vòng benzene ảnh hưởng qua lại với nhau:',
        },
        {
          type: 'list',
          items: [
            'Liên kết $\\mathrm{O{-}H}$ phân cực hơn so với trong alcohol, nguyên tử H linh động hơn: phenol có tính acid yếu.',
            'Mật độ electron trong vòng benzene tăng, nhất là ở các vị trí ortho và para: phản ứng thế vào vòng xảy ra dễ hơn benzene.',
          ],
        },
        {
          type: 'p',
          text: 'Ở điều kiện thường, phenol là chất rắn không màu, nóng chảy ở $43$ °C; để lâu ngoài không khí bị oxi hoá một phần nên chuyển màu hồng. Phenol ít tan trong nước lạnh, tan nhiều trong nước nóng và trong ethanol. Phenol độc, rơi vào da gây bỏng.',
        },
      ],
    },
    {
      heading: 'Tính acid',
      blocks: [
        {
          type: 'p',
          text: 'Trong nước, phenol phân li một phần: $\\mathrm{C_6H_5OH} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{C_6H_5O^-} + \\mathrm{H_3O^+}$. Phenol là acid rất yếu, dung dịch phenol không làm đổi màu quỳ tím.',
        },
        {
          type: 'list',
          items: [
            'Với kim loại kiềm: $2\\mathrm{C_6H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_6H_5ONa} + \\mathrm{H_2}\\uparrow$.',
            'Với dung dịch kiềm: $\\mathrm{C_6H_5OH} + \\mathrm{NaOH} \\rightarrow \\mathrm{C_6H_5ONa} + \\mathrm{H_2O}$. Ethanol không có phản ứng này, nên phenol có tính acid mạnh hơn ethanol.',
            'Với dung dịch $\\mathrm{Na_2CO_3}$: $\\mathrm{C_6H_5OH} + \\mathrm{Na_2CO_3} \\rightleftharpoons \\mathrm{C_6H_5ONa} + \\mathrm{NaHCO_3}$.',
          ],
        },
        {
          type: 'p',
          text: 'Sục khí $\\mathrm{CO_2}$ vào dung dịch sodium phenoxide, dung dịch vẩn đục do phenol tách ra. Vậy phenol có tính acid yếu hơn carbonic acid:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5ONa} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_5OH} + \\mathrm{NaHCO_3}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'So sánh độ acid bằng pKa',
          text: 'Acid càng mạnh thì pKa càng nhỏ. Một acid đẩy được acid yếu hơn (pKa lớn hơn) ra khỏi muối của nó. Thứ tự tính acid tăng dần: $\\mathrm{C_2H_5OH}$ (pKa $\\approx 15{,}9$) < $\\mathrm{H_2O}$ ($15{,}7$) < $\\mathrm{C_6H_5OH}$ ($\\approx 10{,}0$) < $\\mathrm{H_2CO_3}$ ($6{,}35$).',
        },
      ],
    },
    {
      heading: 'Phản ứng thế ở vòng benzene',
      blocks: [
        {
          type: 'p',
          text: 'Nhỏ nước bromine vào dung dịch phenol, nước bromine mất màu và có kết tủa trắng 2,4,6-tribromophenol. Phản ứng xảy ra ngay ở nhiệt độ thường, không cần xúc tác, trong khi benzene không phản ứng với nước bromine.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5OH} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3OH}\\downarrow + 3\\mathrm{HBr}',
        },
        {
          type: 'p',
          text: 'Với hỗn hợp $\\mathrm{HNO_3}$ đặc và $\\mathrm{H_2SO_4}$ đặc, phenol tạo 2,4,6-trinitrophenol (picric acid), chất rắn màu vàng:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5OH} + 3\\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc}} \\mathrm{C_6H_2(NO_2)_3OH} + 3\\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Các nguyên tử Br và nhóm $\\mathrm{NO_2}$ thế vào các vị trí 2, 4, 6, tức ortho và para so với nhóm OH, đúng là các vị trí có mật độ electron tăng.',
        },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'list',
          items: [
            'Sản xuất nhựa phenol formaldehyde (làm vỏ ổ cắm, đồ gia dụng chịu nhiệt), tơ nylon-6, chất diệt cỏ, chất kháng khuẩn, thuốc nổ (picric acid).',
            'Trong công nghiệp, phenol được tách từ nhựa than đá hoặc điều chế từ cumene (isopropylbenzene), đồng thời thu được acetone: $\\mathrm{C_6H_5CH(CH_3)_2} \\xrightarrow{(1)\\,\\mathrm{O_2};\\ (2)\\,\\mathrm{H_2SO_4}} \\mathrm{C_6H_5OH} + \\mathrm{CH_3COCH_3}$.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Thang pKa',
    instruction:
      'Chọn một acid và một muối (hoặc base). Muối ứng với acid nào trên thang pKa? Dự đoán có phản ứng hay không rồi đối chiếu: acid có pKa nhỏ hơn đẩy được acid có pKa lớn hơn ra khỏi muối. Thử phenol với NaOH, ethanol với NaOH, carbonic acid với $\\mathrm{C_6H_5ONa}$ và phenol với $\\mathrm{NaHCO_3}$.',
  },
  examples: [
    {
      problem:
        'Sục khí $\\mathrm{CO_2}$ dư vào dung dịch sodium phenoxide thấy dung dịch vẩn đục. Giải thích và viết phương trình.',
      steps: [
        'Carbonic acid ($\\mathrm{CO_2} + \\mathrm{H_2O}$, pKa $6{,}35$) mạnh hơn phenol (pKa $\\approx 10$).',
        'Acid mạnh hơn đẩy acid yếu hơn ra khỏi muối: $\\mathrm{C_6H_5ONa} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_5OH} + \\mathrm{NaHCO_3}$.',
        'Phenol tạo thành ít tan trong nước lạnh nên làm dung dịch vẩn đục.',
      ],
      answer:
        'Phenol bị carbonic acid đẩy ra khỏi muối; phenol có tính acid yếu hơn carbonic acid.',
    },
    {
      problem:
        'Cho dung dịch chứa $9{,}4$ g phenol tác dụng với nước bromine dư. Tính khối lượng kết tủa.',
      steps: [
        '$n_{\\mathrm{C_6H_5OH}} = \\dfrac{9{,}4}{94} = 0{,}1$ mol.',
        '$\\mathrm{C_6H_5OH} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3OH}\\downarrow + 3\\mathrm{HBr}$, nên $n_{\\downarrow} = 0{,}1$ mol.',
        '$M_{\\mathrm{C_6H_2Br_3OH}} = 6 \\cdot 12 + 3 + 3 \\cdot 80 + 16 = 331$ g/mol; $m = 0{,}1 \\cdot 331 = 33{,}1$ g.',
      ],
      answer: 'Thu được $33{,}1$ g kết tủa 2,4,6-tribromophenol.',
    },
    {
      problem:
        '$14$ g hỗn hợp phenol và ethanol tác dụng vừa đủ với $100$ mL dung dịch NaOH $1$ M. Tính phần trăm khối lượng phenol.',
      steps: [
        'Chỉ phenol phản ứng với NaOH: $n_{\\mathrm{C_6H_5OH}} = n_{\\mathrm{NaOH}} = 0{,}1 \\cdot 1 = 0{,}1$ mol.',
        '$m_{\\mathrm{C_6H_5OH}} = 0{,}1 \\cdot 94 = 9{,}4$ g.',
        '$\\%m_{\\text{phenol}} = \\dfrac{9{,}4}{14} \\cdot 100\\% \\approx 67{,}14\\%$.',
      ],
      answer: 'Phenol chiếm khoảng $67{,}14\\%$ khối lượng hỗn hợp.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây thuộc loại phenol?',
      options: [
        '$\\mathrm{CH_3{-}C_6H_4{-}OH}$',
        '$\\mathrm{C_6H_5{-}CH_2OH}$',
        '$\\mathrm{C_6H_{11}OH}$ (cyclohexanol)',
        '$\\mathrm{CH_2=CH{-}CH_2OH}$',
      ],
      answer: 0,
      hints: ['Nhóm OH phải gắn trực tiếp vào carbon của vòng benzene.'],
      solution:
        'Trong cresol $\\mathrm{CH_3{-}C_6H_4{-}OH}$, nhóm OH gắn vào vòng benzene nên là phenol. Benzyl alcohol có OH gắn vào $\\mathrm{CH_2}$; cyclohexanol không có vòng benzene; $\\mathrm{CH_2=CH{-}CH_2OH}$ là alcohol không no.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào chứng tỏ phenol có tính acid mạnh hơn ethanol?',
      options: [
        'Phenol tác dụng với dung dịch NaOH',
        'Phenol tác dụng với Na',
        'Phenol tác dụng với nước bromine',
        'Phenol cháy trong oxygen',
      ],
      answer: 0,
      hints: ['Tìm phản ứng phenol có mà ethanol không có.'],
      solution:
        'Cả phenol và ethanol đều tác dụng với Na, nhưng chỉ phenol tác dụng với dung dịch NaOH; vậy phenol có tính acid mạnh hơn ethanol. Phản ứng với nước bromine thể hiện ảnh hưởng của nhóm OH lên vòng, không phải tính acid.',
    },
    {
      type: 'choice',
      prompt: 'Nhỏ nước bromine vào dung dịch phenol. Hiện tượng quan sát được là',
      options: [
        'nước bromine mất màu, xuất hiện kết tủa trắng',
        'nước bromine mất màu, dung dịch trong suốt',
        'xuất hiện kết tủa vàng',
        'không có hiện tượng gì',
      ],
      answer: 0,
      hints: ['Sản phẩm 2,4,6-tribromophenol không tan trong nước.'],
      solution:
        '$\\mathrm{C_6H_5OH} + 3\\mathrm{Br_2} \\rightarrow \\mathrm{C_6H_2Br_3OH}\\downarrow + 3\\mathrm{HBr}$: bromine bị tiêu thụ nên mất màu, 2,4,6-tribromophenol là kết tủa trắng.',
    },
    {
      type: 'choice',
      prompt: 'Phenol không phản ứng với chất nào sau đây?',
      options: [
        'Dung dịch $\\mathrm{NaHCO_3}$',
        'Dung dịch NaOH',
        'Dung dịch $\\mathrm{Na_2CO_3}$',
        'Kim loại Na',
      ],
      answer: 0,
      hints: [
        '$\\mathrm{NaHCO_3}$ là muối của carbonic acid. So sánh pKa của phenol và của carbonic acid.',
      ],
      solution:
        'Phenol (pKa $\\approx 10$) yếu hơn carbonic acid (pKa $6{,}35$) nên không đẩy được carbonic acid ra khỏi $\\mathrm{NaHCO_3}$. Phenol vẫn phản ứng với Na, NaOH và $\\mathrm{Na_2CO_3}$ (tạo $\\mathrm{NaHCO_3}$).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo chiều tính acid tăng dần.',
      items: ['Phenol', 'Carbonic acid', 'Ethanol', 'Nước'],
      answer: [2, 3, 0, 1],
      hints: [
        'Acid càng mạnh thì pKa càng nhỏ.',
        'Phenol tan trong NaOH còn ethanol thì không; $\\mathrm{CO_2}$ trong nước đẩy được phenol ra khỏi muối.',
      ],
      solution:
        'pKa giảm dần từ ethanol ($15{,}9$), nước ($15{,}7$), phenol ($\\approx 10$) đến carbonic acid ($6{,}35$), nên tính acid tăng theo thứ tự: ethanol < nước < phenol < carbonic acid.',
    },
    {
      type: 'number',
      prompt: 'Cần bao nhiêu mL dung dịch NaOH $1$ M để phản ứng vừa đủ với $9{,}4$ g phenol?',
      answer: 100,
      unit: 'mL',
      hints: ['$M_{\\mathrm{C_6H_5OH}} = 94$ g/mol; phenol phản ứng với NaOH theo tỉ lệ $1 : 1$.'],
      solution:
        '$n_{\\mathrm{NaOH}} = n_{\\mathrm{C_6H_5OH}} = \\dfrac{9{,}4}{94} = 0{,}1$ mol; $V = \\dfrac{0{,}1}{1} = 0{,}1$ L $= 100$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}7$ g phenol tác dụng với nước bromine dư. Tính khối lượng kết tủa 2,4,6-tribromophenol thu được.',
      answer: 16.55,
      tolerance: 0.05,
      unit: 'g',
      hints: ['$M_{\\mathrm{C_6H_2Br_3OH}} = 331$ g/mol; $1$ mol phenol cho $1$ mol kết tủa.'],
      solution: '$n = \\dfrac{4{,}7}{94} = 0{,}05$ mol; $m = 0{,}05 \\cdot 331 = 16{,}55$ g.',
    },
    {
      type: 'number',
      prompt:
        'Một hỗn hợp phenol và ethanol phản ứng vừa đủ với $100$ mL dung dịch NaOH $1$ M. Cũng lượng hỗn hợp đó tác dụng với Na dư thu được $3{,}7185$ L khí $\\mathrm{H_2}$ (đkc, $24{,}79$ L/mol). Tính khối lượng ethanol trong hỗn hợp.',
      answer: 9.2,
      tolerance: 0.05,
      unit: 'g',
      hints: [
        'NaOH chỉ phản ứng với phenol, cho biết số mol phenol.',
        'Cả phenol và ethanol đều phản ứng với Na; mỗi $2$ mol chất cho $1$ mol $\\mathrm{H_2}$.',
      ],
      solution:
        '$n_{\\text{phenol}} = 0{,}1$ mol. $n_{\\mathrm{H_2}} = \\dfrac{3{,}7185}{24{,}79} = 0{,}15$ mol, nên tổng số mol hai chất là $0{,}3$ mol. $n_{\\text{ethanol}} = 0{,}2$ mol, $m = 0{,}2 \\cdot 46 = 9{,}2$ g.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Dung dịch phenol làm quỳ tím hoá đỏ.',
        'Phenol phản ứng thế với nước bromine dễ hơn benzene.',
        'Phenol ít tan trong nước lạnh nhưng tan nhiều trong nước nóng.',
        'Để lâu ngoài không khí, phenol chuyển sang màu hồng.',
      ],
      answers: [1, 2, 3],
      hints: ['Phenol là acid rất yếu.'],
      solution:
        'Tính acid của phenol quá yếu nên không làm đổi màu quỳ tím. Ba phát biểu còn lại đúng: nhóm OH làm vòng giàu electron, phenol tan nhiều trong nước nóng và bị oxi hoá chậm trong không khí thành sản phẩm màu hồng.',
    },
  ],
  takeaways: [
    'Phenol có nhóm OH gắn trực tiếp vào carbon của vòng benzene; $\\mathrm{C_6H_5CH_2OH}$ là alcohol, không phải phenol.',
    'Nhóm OH và vòng benzene ảnh hưởng qua lại: H của OH linh động hơn (tính acid), vòng giàu electron ở ortho, para (thế dễ).',
    'Phenol là acid rất yếu: tác dụng với Na, NaOH, $\\mathrm{Na_2CO_3}$ nhưng không làm đổi màu quỳ tím và bị $\\mathrm{CO_2}$ đẩy ra khỏi muối.',
    'Tính acid tăng dần: ethanol < nước < phenol < carbonic acid; pKa càng nhỏ, acid càng mạnh.',
    'Với nước bromine, phenol tạo kết tủa trắng 2,4,6-tribromophenol; với $\\mathrm{HNO_3}$ đặc tạo picric acid màu vàng.',
  ],
};
