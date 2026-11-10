/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Alcohol: khái niệm, phân loại theo bậc và số nhóm OH, danh pháp, liên kết hydrogen và tính chất vật lí, phản ứng với Na, với Cu(OH)2, tạo ether, tách nước, oxi hoá; điều chế và ứng dụng của ethanol, methanol.',
  intro:
    'Xăng E5 bán ở cây xăng chứa $5\\%$ ethanol, một chất được sản xuất bằng cách lên men tinh bột sắn, ngô. Cùng họ với ethanol có methanol, rất độc dù trông và có mùi giống hệt, và glycerol, chất giữ ẩm trong kem dưỡng da. Chúng đều là alcohol: hợp chất có nhóm OH gắn vào carbon no.',
  objectives: [
    'Nêu được khái niệm alcohol, công thức chung của alcohol no, đơn chức, mạch hở; phân loại được alcohol theo bậc và theo số nhóm OH.',
    'Gọi được tên thay thế và tên thông thường của một số alcohol đơn giản.',
    'Giải thích được nhiệt độ sôi cao và tính tan trong nước của alcohol nhờ liên kết hydrogen.',
    'Viết được phương trình phản ứng của alcohol với Na, phản ứng tạo ether, tách nước tạo alkene, oxi hoá bởi CuO và phản ứng của polyalcohol với $\\mathrm{Cu(OH)_2}$.',
    'Trình bày được cách điều chế và ứng dụng của ethanol, methanol.',
  ],
  sections: [
    {
      heading: 'Khái niệm, phân loại và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Alcohol',
          text: 'Alcohol là những hợp chất hữu cơ trong phân tử có nhóm hydroxy (–OH) liên kết trực tiếp với nguyên tử carbon no. Alcohol no, đơn chức, mạch hở có công thức chung $\\mathrm{C_nH_{2n+1}OH}$ ($n \\ge 1$).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bậc của alcohol',
          text: 'Bậc của alcohol bằng bậc của nguyên tử carbon liên kết với nhóm OH, tức là số nguyên tử carbon liên kết trực tiếp với carbon đó. Methanol $\\mathrm{CH_3OH}$ được xếp vào alcohol bậc I.',
        },
        {
          type: 'table',
          caption: 'Ví dụ về bậc của alcohol',
          head: ['Bậc', 'Ví dụ', 'Tên thay thế'],
          rows: [
            ['I', '$\\mathrm{CH_3{-}CH_2{-}CH_2OH}$', 'propan-1-ol'],
            ['II', '$\\mathrm{CH_3{-}CH(OH){-}CH_3}$', 'propan-2-ol'],
            ['III', '$\\mathrm{(CH_3)_3C{-}OH}$', '2-methylpropan-2-ol'],
          ],
        },
        {
          type: 'p',
          text: 'Theo số nhóm OH, alcohol chia thành alcohol đơn chức (một nhóm OH) và alcohol đa chức (polyalcohol, từ hai nhóm OH trở lên), như ethylene glycol $\\mathrm{HOCH_2{-}CH_2OH}$ và glycerol $\\mathrm{HOCH_2{-}CH(OH){-}CH_2OH}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế',
          text: 'Số chỉ vị trí nhánh – tên nhánh + tên hydrocarbon mạch chính (bỏ chữ e ở cuối) – số chỉ vị trí nhóm OH – ol. Mạch chính là mạch carbon dài nhất có chứa nhóm OH, đánh số từ đầu gần nhóm OH hơn. Tên thông thường: alcohol + tên gốc hydrocarbon + ic, ví dụ ethyl alcohol.',
        },
        {
          type: 'table',
          caption: 'Tên của một số alcohol',
          head: ['Công thức', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{CH_3OH}$', 'methanol', 'methyl alcohol'],
            ['$\\mathrm{CH_3{-}CH_2OH}$', 'ethanol', 'ethyl alcohol'],
            ['$\\mathrm{CH_3{-}CH(OH){-}CH_3}$', 'propan-2-ol', 'isopropyl alcohol'],
            ['$\\mathrm{HOCH_2{-}CH_2OH}$', 'ethane-1,2-diol', 'ethylene glycol'],
            ['$\\mathrm{HOCH_2{-}CH(OH){-}CH_2OH}$', 'propane-1,2,3-triol', 'glycerol'],
          ],
        },
      ],
    },
    {
      heading: 'Liên kết hydrogen và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Liên kết $\\mathrm{O{-}H}$ phân cực mạnh, nên nguyên tử H của nhóm OH phân tử này tạo liên kết hydrogen với nguyên tử O của phân tử alcohol khác (hoặc của phân tử nước).',
        },
        {
          type: 'list',
          items: [
            'Alcohol có nhiệt độ sôi cao hơn nhiều so với hydrocarbon, dẫn xuất halogen có phân tử khối tương đương. Ví dụ: ethanol ($M = 46$) sôi ở $78{,}3$ °C, còn propane ($M = 44$) sôi ở $-42$ °C.',
            'Methanol, ethanol, propanol tan vô hạn trong nước nhờ liên kết hydrogen với nước. Khi mạch carbon dài ra, độ tan giảm dần.',
            'Ở điều kiện thường, các alcohol đơn giản là chất lỏng; ethylene glycol và glycerol là chất lỏng sánh, vị ngọt.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng thế nguyên tử H của nhóm OH: alcohol tác dụng với kim loại kiềm giải phóng khí hydrogen.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}\\uparrow',
        },
        {
          type: 'p',
          text: 'Polyalcohol có hai nhóm OH liền kề (ethylene glycol, glycerol) hoà tan $\\mathrm{Cu(OH)_2}$ tạo dung dịch màu xanh lam. Phản ứng này dùng để nhận biết chúng:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_3H_5(OH)_3} + \\mathrm{Cu(OH)_2} \\rightarrow [\\mathrm{C_3H_5(OH)_2O}]_2\\mathrm{Cu} + 2\\mathrm{H_2O}',
        },
        { type: 'widget', name: 'copper-hydroxide' },
        {
          type: 'p',
          text: 'Phản ứng tạo ether và tách nước tạo alkene (xúc tác $\\mathrm{H_2SO_4}$ đặc). Phản ứng tách nước tuân theo quy tắc Zaitsev: nhóm OH tách ưu tiên cùng H ở carbon bên cạnh có bậc cao hơn.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_2H_5OH} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ 140^\\circ\\mathrm{C}} \\mathrm{C_2H_5{-}O{-}C_2H_5} + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_2H_5OH} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ 170^\\circ\\mathrm{C}} \\mathrm{CH_2=CH_2} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Oxi hoá không hoàn toàn bởi CuO',
          text: 'Khi đun nóng với CuO: alcohol bậc I tạo aldehyde, alcohol bậc II tạo ketone, alcohol bậc III khó bị oxi hoá. CuO màu đen bị khử thành Cu màu đỏ.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CH_2OH} + \\mathrm{CuO} \\xrightarrow{t^\\circ} \\mathrm{CH_3CHO} + \\mathrm{Cu} + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3{-}CH(OH){-}CH_3} + \\mathrm{CuO} \\xrightarrow{t^\\circ} \\mathrm{CH_3{-}CO{-}CH_3} + \\mathrm{Cu} + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Alcohol cháy toả nhiều nhiệt: $\\mathrm{C_2H_5OH} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{CO_2} + 3\\mathrm{H_2O}$.',
        },
      ],
    },
    {
      heading: 'Điều chế và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Ethanol trong công nghiệp: hydrate hoá ethylene, $\\mathrm{CH_2=CH_2} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{H_3PO_4},\\,t^\\circ,\\,p} \\mathrm{CH_3{-}CH_2OH}$.',
            'Ethanol sinh học: lên men tinh bột, $(\\mathrm{C_6H_{10}O_5})_n + n\\mathrm{H_2O} \\xrightarrow{\\text{enzyme}} n\\mathrm{C_6H_{12}O_6}$; $\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$.',
            'Methanol: $\\mathrm{CO} + 2\\mathrm{H_2} \\xrightarrow{\\mathrm{xt},\\,t^\\circ,\\,p} \\mathrm{CH_3OH}$.',
          ],
        },
        {
          type: 'p',
          text: 'Ethanol dùng làm dung môi, nhiên liệu (xăng E5), nguyên liệu sản xuất acetic acid, đồ uống và sát trùng. Ethylene glycol làm chất chống đông; glycerol dùng trong mỹ phẩm, thuốc và sản xuất thuốc nổ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Methanol rất độc',
          text: 'Chỉ một lượng nhỏ methanol cũng có thể gây mù loà hoặc tử vong. Rượu pha bằng cồn công nghiệp chứa methanol là nguyên nhân của nhiều vụ ngộ độc. Uống nhiều ethanol cũng gây hại cho gan và hệ thần kinh.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bậc của alcohol',
    instruction:
      'Với mỗi alcohol, tìm carbon mang nhóm OH và đếm số carbon liên kết trực tiếp với nó (kể cả nhánh), rồi chọn bậc. Khi chọn đúng, xem alcohol đó bị CuO oxi hoá thành aldehyde, ketone hay không phản ứng. Dùng hai nút mũi tên để đổi chất.',
  },
  examples: [
    {
      problem:
        'Gọi tên thay thế và xác định bậc của alcohol $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH_2OH}$.',
      steps: [
        'Mạch dài nhất chứa nhóm OH có $4$ C: tên hydrocarbon mạch chính là butane, bỏ chữ e thành butan.',
        'Đánh số từ đầu gần nhóm OH: OH ở C1, nhánh methyl ở C3.',
        'Tên: 3-methylbutan-1-ol. Carbon mang OH chỉ liên kết với một carbon nên đây là alcohol bậc I.',
      ],
      answer: '3-methylbutan-1-ol, alcohol bậc I.',
    },
    {
      problem:
        'Đun nóng butan-2-ol với $\\mathrm{H_2SO_4}$ đặc ở $170$ °C. Viết phương trình tạo sản phẩm chính.',
      steps: [
        'Carbon mang OH là C2. Hai carbon bên cạnh: C1 ($\\mathrm{CH_3}$, bậc I) và C3 ($\\mathrm{CH_2}$, bậc II).',
        'Theo quy tắc Zaitsev, OH tách cùng H ở C3, liên kết đôi nằm giữa C2 và C3.',
        '$\\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ 170^\\circ\\mathrm{C}} \\mathrm{CH_3{-}CH=CH{-}CH_3} + \\mathrm{H_2O}$.',
      ],
      answer: 'Sản phẩm chính là but-2-ene; sản phẩm phụ là but-1-ene.',
    },
    {
      problem:
        'Cho $9{,}2$ g ethanol tác dụng với Na dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở đkc ($24{,}79$ L/mol).',
      steps: [
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{9{,}2}{46} = 0{,}2$ mol.',
        '$2\\mathrm{C_2H_5OH} + 2\\mathrm{Na} \\rightarrow 2\\mathrm{C_2H_5ONa} + \\mathrm{H_2}$, nên $n_{\\mathrm{H_2}} = \\dfrac{0{,}2}{2} = 0{,}1$ mol.',
        '$V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
      ],
      answer: 'Thu được $2{,}479$ L khí $\\mathrm{H_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Alcohol $\\mathrm{CH_3{-}CH(CH_3){-}CH_2OH}$ có bậc là',
      options: ['Bậc I', 'Bậc II', 'Bậc III', 'Không xác định được'],
      answer: 0,
      hints: [
        'Bậc của alcohol là bậc của carbon mang OH, không phải của carbon mang nhánh.',
        'Carbon trong $\\mathrm{CH_2OH}$ liên kết trực tiếp với mấy carbon?',
      ],
      solution:
        'Carbon mang OH ($\\mathrm{CH_2OH}$) chỉ liên kết với một carbon là $\\mathrm{CH}$ bên cạnh, nên đây là alcohol bậc I (2-methylpropan-1-ol).',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của alcohol $\\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$.',
      accept: ['butan-2-ol', 'butan 2 ol', '2-butanol'],
      hints: ['Mạch chính có $4$ C; đánh số từ đầu gần nhóm OH.'],
      solution: 'Mạch chính butane, OH ở C2: butan-2-ol (alcohol bậc II).',
    },
    {
      type: 'choice',
      prompt: 'Chất nào hoà tan được $\\mathrm{Cu(OH)_2}$ tạo dung dịch màu xanh lam?',
      options: ['Glycerol', 'Ethanol', 'Propane-1,3-diol', 'Propan-2-ol'],
      answer: 0,
      hints: ['Cần hai nhóm OH ở hai nguyên tử carbon liền kề.'],
      solution:
        'Glycerol có ba nhóm OH ở C1, C2, C3, có hai nhóm liền kề. Ethanol và propan-2-ol chỉ có một nhóm OH; propane-1,3-diol có hai nhóm OH nhưng không liền kề.',
    },
    {
      type: 'choice',
      prompt: 'Đun nóng ethanol với $\\mathrm{H_2SO_4}$ đặc ở $140$ °C. Sản phẩm hữu cơ chính là',
      options: ['Diethyl ether', 'Ethylene', 'Acetaldehyde', 'Ethyl hydrogen sulfate'],
      answer: 0,
      hints: [
        'Ở $140$ °C hai phân tử alcohol tách một phân tử nước; ở $170$ °C một phân tử tách nước.',
      ],
      solution:
        '$2\\mathrm{C_2H_5OH} \\rightarrow \\mathrm{C_2H_5{-}O{-}C_2H_5} + \\mathrm{H_2O}$ (diethyl ether). Ethylene tạo thành ở $170$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Oxi hoá propan-2-ol bằng CuO, đun nóng, thu được',
      options: ['Acetone', 'Propanal', 'Propene', 'Không phản ứng'],
      answer: 0,
      hints: ['Propan-2-ol là alcohol bậc mấy?'],
      solution:
        'Propan-2-ol là alcohol bậc II nên bị oxi hoá thành ketone: $\\mathrm{CH_3{-}CH(OH){-}CH_3} + \\mathrm{CuO} \\rightarrow \\mathrm{CH_3{-}CO{-}CH_3} + \\mathrm{Cu} + \\mathrm{H_2O}$ (acetone).',
    },
    {
      type: 'choice',
      prompt:
        'Ethanol ($M = 46$) sôi ở $78{,}3$ °C, còn propane ($M = 44$) sôi ở $-42$ °C, chủ yếu vì',
      options: [
        'giữa các phân tử ethanol có liên kết hydrogen',
        'ethanol có phân tử khối lớn hơn',
        'ethanol tan được trong nước',
        'liên kết C–O bền hơn liên kết C–C',
      ],
      answer: 0,
      hints: ['Hai phân tử khối gần bằng nhau, nên tìm loại tương tác chỉ ethanol có.'],
      solution:
        'Nhóm OH tạo liên kết hydrogen giữa các phân tử ethanol; muốn sôi phải phá các liên kết này nên nhiệt độ sôi cao hơn hẳn propane.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}6$ g ethanol tác dụng hết với Na dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở đkc ($24{,}79$ L/mol).',
      answer: 1.2395,
      tolerance: 0.01,
      unit: 'L',
      hints: ['$2$ mol ethanol cho $1$ mol $\\mathrm{H_2}$.'],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{4{,}6}{46} = 0{,}1$ mol, $n_{\\mathrm{H_2}} = 0{,}05$ mol. $V = 0{,}05 \\cdot 24{,}79 \\approx 1{,}24$ L.',
    },
    {
      type: 'number',
      prompt:
        'Một alcohol no, đơn chức, mạch hở có phần trăm khối lượng oxygen là $26{,}67\\%$. Phân tử có bao nhiêu nguyên tử carbon?',
      answer: 3,
      hints: ['$M = 14n + 18$, và $\\dfrac{16}{M} = 0{,}2667$.'],
      solution:
        '$M = \\dfrac{16}{0{,}2667} \\approx 60$, nên $14n + 18 = 60$ và $n = 3$. Công thức $\\mathrm{C_3H_7OH}$.',
    },
    {
      type: 'number',
      prompt:
        'Lên men $90$ g glucose $\\mathrm{C_6H_{12}O_6}$ với hiệu suất $80\\%$. Tính khối lượng ethanol thu được.',
      answer: 36.8,
      tolerance: 0.05,
      unit: 'g',
      hints: [
        '$M_{\\mathrm{C_6H_{12}O_6}} = 180$ g/mol; $1$ mol glucose cho $2$ mol ethanol.',
        'Nhân lượng lí thuyết với $0{,}8$.',
      ],
      solution:
        '$n_{\\text{glucose}} = 0{,}5$ mol, theo lí thuyết $n_{\\mathrm{C_2H_5OH}} = 1$ mol. Thực tế $1 \\cdot 0{,}8 = 0{,}8$ mol, $m = 0{,}8 \\cdot 46 = 36{,}8$ g.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Alcohol bậc III không bị CuO oxi hoá khi đun nóng.',
        'Methanol, ethanol tan vô hạn trong nước.',
        'Mọi alcohol đa chức đều hoà tan $\\mathrm{Cu(OH)_2}$.',
        'Ethanol tác dụng với Na giải phóng khí $\\mathrm{H_2}$.',
      ],
      answers: [0, 1, 3],
      hints: ['Phản ứng với $\\mathrm{Cu(OH)_2}$ cần hai nhóm OH liền kề.'],
      solution:
        'Propane-1,3-diol là alcohol đa chức nhưng không hoà tan $\\mathrm{Cu(OH)_2}$ vì hai nhóm OH không liền kề. Ba phát biểu còn lại đúng.',
    },
  ],
  takeaways: [
    'Alcohol có nhóm OH gắn với carbon no; alcohol no, đơn chức, mạch hở là $\\mathrm{C_nH_{2n+1}OH}$.',
    'Bậc alcohol = bậc của carbon mang OH. Tên thay thế: tên mạch chính bỏ e – vị trí OH – ol.',
    'Liên kết hydrogen làm alcohol sôi cao và các alcohol nhỏ tan vô hạn trong nước.',
    'Phản ứng với Na giải phóng $\\mathrm{H_2}$; $\\mathrm{H_2SO_4}$ đặc ở $140$ °C tạo ether, ở $170$ °C tạo alkene (quy tắc Zaitsev).',
    'CuO, đun nóng: bậc I thành aldehyde, bậc II thành ketone, bậc III khó bị oxi hoá. Polyalcohol có OH liền kề hoà tan $\\mathrm{Cu(OH)_2}$ thành dung dịch xanh lam.',
  ],
};
