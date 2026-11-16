/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Xà phòng và chất giặt rửa: khái niệm, cấu tạo đầu ưa nước và đuôi kị nước, cơ chế giặt rửa, phương pháp sản xuất, ưu điểm và hạn chế của chất giặt rửa tổng hợp, sử dụng an toàn và hiệu quả.',
  intro:
    'Dầu mỡ không tan trong nước, nên chỉ xả nước thì không thể làm sạch vết dầu trên áo hay trên bát đĩa. Thêm một chút xà phòng hay nước rửa bát, vết dầu bong ra và trôi đi. Một phân tử xà phòng làm điều đó bằng cách nào, và vì sao giặt bằng xà phòng trong nước cứng lại kém sạch?',
  objectives: [
    'Nêu được khái niệm xà phòng, chất giặt rửa tổng hợp và chất giặt rửa tự nhiên.',
    'Trình bày được đặc điểm cấu tạo của phân tử xà phòng và chất giặt rửa: đầu ưa nước, đuôi kị nước.',
    'Giải thích được cơ chế giặt rửa của xà phòng và chất giặt rửa.',
    'Trình bày được phương pháp sản xuất xà phòng và chất giặt rửa tổng hợp.',
    'Nêu được ưu điểm, hạn chế của chất giặt rửa tổng hợp so với xà phòng và cách sử dụng hợp lí, an toàn.',
  ],
  sections: [
    {
      heading: 'Khái niệm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Xà phòng',
          text: 'Xà phòng là hỗn hợp muối sodium hoặc potassium của các acid béo, có thêm một số chất phụ gia. Thành phần chính của xà phòng thường là muối sodium của palmitic acid hoặc stearic acid: $\\mathrm{C_{15}H_{31}COONa}$, $\\mathrm{C_{17}H_{35}COONa}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất giặt rửa',
          text: 'Chất giặt rửa là những chất khi dùng cùng với nước có tác dụng làm sạch các chất bẩn bám trên bề mặt vật rắn. Chất giặt rửa tổng hợp được tổng hợp hoá học, không phải muối của acid béo; chất giặt rửa tự nhiên có sẵn trong một số loài thực vật.',
        },
        {
          type: 'table',
          caption: 'Một số chất giặt rửa',
          head: ['Loại', 'Ví dụ'],
          rows: [
            [
              'Xà phòng',
              'sodium stearate $\\mathrm{C_{17}H_{35}COONa}$, sodium palmitate $\\mathrm{C_{15}H_{31}COONa}$',
            ],
            [
              'Chất giặt rửa tổng hợp',
              'sodium dodecylbenzenesulfonate $\\mathrm{C_{12}H_{25}C_6H_4SO_3Na}$ (một sodium alkylbenzenesulfonate), sodium lauryl sulfate $\\mathrm{CH_3[CH_2]_{11}OSO_3Na}$ (một sodium alkylsulfate)',
            ],
            ['Chất giặt rửa tự nhiên', 'nước ngâm quả bồ kết, quả bồ hòn (chứa saponin)'],
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo và cơ chế giặt rửa',
      blocks: [
        {
          type: 'p',
          text: 'Phân tử xà phòng và chất giặt rửa gồm hai phần:',
        },
        {
          type: 'list',
          items: [
            'Đầu ưa nước (phân cực): nhóm carboxylate $\\mathrm{{-}COO^-Na^+}$ ở xà phòng, nhóm sulfonate $\\mathrm{{-}SO_3^-Na^+}$ hoặc sulfate $\\mathrm{{-}OSO_3^-Na^+}$ ở chất giặt rửa tổng hợp. Phần này tan tốt trong nước.',
            'Đuôi kị nước (không phân cực): gốc hydrocarbon mạch dài, ví dụ $\\mathrm{C_{17}H_{35}{-}}$. Phần này không tan trong nước nhưng tan trong dầu mỡ.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ chế giặt rửa',
          text: 'Khi tan trong nước, xà phòng và chất giặt rửa làm giảm sức căng bề mặt, giúp vật cần giặt dễ thấm ướt. Đuôi kị nước thâm nhập vào vết bẩn dầu mỡ, đầu ưa nước hướng ra phía nước. Vết bẩn bị chia thành những hạt rất nhỏ được các phân tử bao quanh (đầu ưa nước quay ra ngoài), các hạt này phân tán vào nước và bị rửa trôi.',
        },
      ],
    },
    {
      heading: 'Sản xuất xà phòng và chất giặt rửa tổng hợp',
      blocks: [
        {
          type: 'p',
          text: 'Xà phòng được sản xuất bằng cách đun chất béo với dung dịch NaOH đặc hoặc KOH đặc (phản ứng xà phòng hoá):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_{17}H_{35}COO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}',
        },
        {
          type: 'p',
          text: 'Thêm muối ăn vào hỗn hợp, muối của acid béo nổi lên. Lấy phần này trộn với chất tạo hương, chất diệt khuẩn, chất độn rồi ép thành bánh. Glycerol là sản phẩm phụ có giá trị. Xà phòng còn được sản xuất từ dầu mỏ: oxi hoá alkane mạch dài thành carboxylic acid, rồi trung hoà acid bằng dung dịch kiềm.',
        },
        {
          type: 'tex',
          tex: '\\text{dầu mỏ} \\rightarrow \\text{alkane} \\xrightarrow{\\mathrm{O_2},\\ \\mathrm{xt},\\ t^\\circ} \\mathrm{RCOOH} \\xrightarrow{\\mathrm{NaOH}} \\mathrm{RCOONa}',
        },
        {
          type: 'p',
          text: 'Chất giặt rửa tổng hợp cũng được sản xuất từ dầu mỏ. Ví dụ: alkylbenzene tác dụng với sulfuric acid đặc tạo alkylbenzenesulfonic acid, rồi trung hoà bằng dung dịch kiềm thu được sodium alkylbenzenesulfonate; muối này được trộn với chất phụ gia thành bột giặt, nước giặt, nước rửa chén.',
        },
        {
          type: 'tex',
          tex: '\\text{dầu mỏ} \\rightarrow \\mathrm{R{-}C_6H_5} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc}} \\mathrm{R{-}C_6H_4SO_3H} \\xrightarrow{\\mathrm{NaOH}} \\mathrm{R{-}C_6H_4SO_3Na}',
        },
      ],
    },
    {
      heading: 'Ưu điểm, hạn chế và cách sử dụng',
      blocks: [
        {
          type: 'p',
          text: 'Nước cứng chứa nhiều ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. Các ion này kết hợp với gốc acid béo tạo kết tủa, làm hao xà phòng và tạo váng bám trên vải:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_{17}H_{35}COO^-} + \\mathrm{Ca^{2+}} \\rightarrow \\mathrm{(C_{17}H_{35}COO)_2Ca}\\downarrow',
        },
        {
          type: 'list',
          items: [
            'Ưu điểm của chất giặt rửa tổng hợp: dễ tan trong nước, dùng được cả với nước cứng (muối calcium, magnesium của chúng tan được) và trong môi trường acid.',
            'Hạn chế: một số chất giặt rửa tổng hợp khó bị vi sinh vật phân huỷ, gây ô nhiễm nguồn nước. Xà phòng dễ phân huỷ sinh học hơn.',
            'Ứng dụng: xà phòng dùng để tắm, rửa tay; chất giặt rửa tổng hợp dùng để giặt quần áo, rửa bát đĩa, rửa tay, lau sàn.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Sử dụng an toàn, hiệu quả',
          text: 'Dùng đúng loại, đúng liều lượng theo hướng dẫn; dùng quá nhiều không làm sạch hơn mà còn tốn nước xả và gây ô nhiễm. Đeo găng tay khi tiếp xúc lâu với chất giặt rửa, xả sạch đồ dùng và tay sau khi giặt rửa, để xa tầm tay trẻ em. Ưu tiên sản phẩm dễ phân huỷ sinh học.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phân tử xà phòng bao vết dầu',
    instruction:
      'Chọn chất giặt rửa và loại nước, rồi bấm qua từng giai đoạn giặt. Quan sát đuôi kị nước thâm nhập vào dầu và các hạt dầu được bao quanh (micelle). So sánh xà phòng và chất giặt rửa tổng hợp trong nước cứng.',
  },
  examples: [
    {
      problem:
        'Xà phòng hoá hoàn toàn $8{,}9$ kg tristearin bằng dung dịch NaOH. Muối thu được chiếm $72\\%$ khối lượng bánh xà phòng. Tính khối lượng xà phòng thu được.',
      steps: [
        '$n_{\\text{tristearin}} = \\dfrac{8{,}9}{890} = 0{,}01$ kmol.',
        '$(\\mathrm{C_{17}H_{35}COO})_3\\mathrm{C_3H_5} + 3\\mathrm{NaOH} \\rightarrow 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}$, nên $n_{\\text{muối}} = 0{,}03$ kmol.',
        '$m_{\\text{muối}} = 0{,}03 \\cdot 306 = 9{,}18$ kg.',
        '$m_{\\text{xà phòng}} = \\dfrac{9{,}18}{0{,}72} = 12{,}75$ kg.',
      ],
      answer: 'Thu được $12{,}75$ kg xà phòng.',
    },
    {
      problem:
        'Một chậu nước cứng chứa $0{,}01$ mol ion $\\mathrm{Ca^{2+}}$. Cho sodium stearate vào chậu. Tính khối lượng sodium stearate bị mất do tạo kết tủa và khối lượng kết tủa (giả sử toàn bộ $\\mathrm{Ca^{2+}}$ phản ứng).',
      steps: [
        '$2\\mathrm{C_{17}H_{35}COO^-} + \\mathrm{Ca^{2+}} \\rightarrow (\\mathrm{C_{17}H_{35}COO})_2\\mathrm{Ca}\\downarrow$, nên $n_{\\mathrm{C_{17}H_{35}COONa}} = 2 \\cdot 0{,}01 = 0{,}02$ mol.',
        'Sodium stearate bị mất: $0{,}02 \\cdot 306 = 6{,}12$ g.',
        '$M_{(\\mathrm{C_{17}H_{35}COO})_2\\mathrm{Ca}} = 2 \\cdot 283 + 40 = 606$ g/mol; kết tủa: $0{,}01 \\cdot 606 = 6{,}06$ g.',
      ],
      answer:
        'Mất $6{,}12$ g sodium stearate, tạo $6{,}06$ g kết tủa. Vì vậy giặt bằng xà phòng trong nước cứng vừa tốn xà phòng vừa để lại váng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thành phần chính của xà phòng là',
      options: [
        'muối sodium hoặc potassium của acid béo',
        'triester của glycerol với acid béo',
        'sodium alkylbenzenesulfonate',
        'muối calcium của acid béo',
      ],
      answer: 0,
      hints: ['Xà phòng là sản phẩm của phản ứng xà phòng hoá chất béo bằng NaOH hoặc KOH.'],
      solution:
        'Xà phòng là hỗn hợp muối sodium hoặc potassium của acid béo (có thêm phụ gia). Triester của glycerol là chất béo; sodium alkylbenzenesulfonate là chất giặt rửa tổng hợp; muối calcium của acid béo là kết tủa không tan.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân tử sodium stearate $\\mathrm{C_{17}H_{35}COONa}$, phần kị nước là',
      options: [
        'gốc hydrocarbon $\\mathrm{C_{17}H_{35}{-}}$',
        'nhóm $\\mathrm{{-}COO^-Na^+}$',
        'ion $\\mathrm{Na^+}$',
        'nguyên tử oxygen của nhóm C=O',
      ],
      answer: 0,
      hints: ['Phần kị nước không phân cực, tan được trong dầu mỡ.'],
      solution:
        'Gốc hydrocarbon dài $\\mathrm{C_{17}H_{35}{-}}$ không phân cực, là đuôi kị nước. Nhóm carboxylate $\\mathrm{{-}COO^-Na^+}$ là đầu ưa nước.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn giặt rửa vết dầu bằng xà phòng theo đúng thứ tự.',
      items: [
        'Xà phòng tan trong nước, làm giảm sức căng bề mặt, vải dễ thấm ướt.',
        'Đuôi kị nước thâm nhập vào vết dầu, đầu ưa nước hướng ra nước.',
        'Vết dầu bị chia thành những hạt nhỏ được các phân tử xà phòng bao quanh.',
        'Các hạt dầu phân tán vào nước và bị rửa trôi.',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Phân tử xà phòng phải bám vào vết bẩn trước khi kéo được vết bẩn ra.'],
      solution:
        'Hoà tan và làm thấm ướt, đuôi kị nước thâm nhập vào dầu, vết dầu bị chia nhỏ và bao quanh, cuối cùng các hạt dầu bị nước cuốn trôi.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là chất giặt rửa tổng hợp?',
      options: [
        '$\\mathrm{C_{12}H_{25}C_6H_4SO_3Na}$',
        '$\\mathrm{C_{17}H_{35}COONa}$',
        '$\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$',
        '$\\mathrm{C_3H_5(OH)_3}$',
      ],
      answer: 0,
      hints: [
        'Chất giặt rửa tổng hợp không phải muối của acid béo; đầu ưa nước thường là nhóm sulfonate hoặc sulfate.',
      ],
      solution:
        '$\\mathrm{C_{12}H_{25}C_6H_4SO_3Na}$ (sodium dodecylbenzenesulfonate) là chất giặt rửa tổng hợp. $\\mathrm{C_{17}H_{35}COONa}$ là xà phòng, $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$ là chất béo, $\\mathrm{C_3H_5(OH)_3}$ là glycerol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về chất giặt rửa tổng hợp so với xà phòng?',
      options: [
        'Dùng được với nước cứng.',
        'Dùng được trong môi trường acid.',
        'Đều dễ bị vi sinh vật phân huỷ hơn xà phòng.',
        'Là muối sodium của acid béo.',
      ],
      answers: [0, 1],
      hints: ['Nghĩ đến kết tủa mà xà phòng tạo với $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$.'],
      solution:
        'Chất giặt rửa tổng hợp không tạo kết tủa với ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ và dùng được trong môi trường acid. Một số loại khó phân huỷ sinh học hơn xà phòng, và chúng không phải muối của acid béo.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $44{,}5$ kg tristearin bằng dung dịch NaOH. Tính khối lượng sodium stearate thu được.',
      answer: 45.9,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        '$M_{\\text{tristearin}} = 890$, $M_{\\mathrm{C_{17}H_{35}COONa}} = 306$.',
        'Một mol tristearin cho ba mol muối.',
      ],
      solution:
        '$n = \\dfrac{44{,}5}{890} = 0{,}05$ kmol, $n_{\\text{muối}} = 0{,}15$ kmol, $m = 0{,}15 \\cdot 306 = 45{,}9$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Từ $80{,}6$ kg tripalmitin, xà phòng hoá hoàn toàn bằng NaOH rồi làm thành xà phòng chứa $60\\%$ sodium palmitate về khối lượng. Tính khối lượng xà phòng thu được.',
      answer: 139,
      tolerance: 0.1,
      unit: 'kg',
      hints: [
        '$M_{\\text{tripalmitin}} = 806$, $M_{\\mathrm{C_{15}H_{31}COONa}} = 278$.',
        'Tính khối lượng muối, rồi chia cho $0{,}6$.',
      ],
      solution:
        '$n = \\dfrac{80{,}6}{806} = 0{,}1$ kmol; $m_{\\text{muối}} = 0{,}3 \\cdot 278 = 83{,}4$ kg; $m_{\\text{xà phòng}} = \\dfrac{83{,}4}{0{,}6} = 139$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Nước cứng chứa $0{,}02$ mol ion $\\mathrm{Ca^{2+}}$ phản ứng hết với sodium stearate. Tính khối lượng kết tủa $\\mathrm{(C_{17}H_{35}COO)_2Ca}$ tạo thành.',
      answer: 12.12,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$M_{\\mathrm{(C_{17}H_{35}COO)_2Ca}} = 2 \\cdot 283 + 40$.'],
      solution:
        '$n_{\\text{kết tủa}} = n_{\\mathrm{Ca^{2+}}} = 0{,}02$ mol; $M = 606$ g/mol; $m = 0{,}02 \\cdot 606 = 12{,}12$ g.',
    },
    {
      type: 'choice',
      prompt: 'Từ xưa, người Việt dùng nước ngâm quả nào để gội đầu, giặt quần áo?',
      options: ['Quả bồ kết', 'Quả chanh', 'Quả dứa', 'Quả chuối'],
      answer: 0,
      hints: ['Đó là một chất giặt rửa tự nhiên chứa saponin.'],
      solution:
        'Quả bồ kết (và quả bồ hòn) chứa saponin, có tác dụng giặt rửa: đó là chất giặt rửa tự nhiên.',
    },
  ],
  takeaways: [
    'Xà phòng là hỗn hợp muối sodium hoặc potassium của acid béo; chất giặt rửa tổng hợp (alkylsulfate, alkylbenzenesulfonate) không phải muối của acid béo; bồ kết, bồ hòn là chất giặt rửa tự nhiên.',
    'Phân tử gồm đầu ưa nước ($\\mathrm{{-}COO^-}$, $\\mathrm{{-}SO_3^-}$) và đuôi kị nước (gốc hydrocarbon dài).',
    'Cơ chế: giảm sức căng bề mặt, đuôi kị nước thâm nhập vào dầu mỡ, chia vết bẩn thành hạt nhỏ được bao quanh, phân tán vào nước và bị rửa trôi.',
    'Xà phòng sản xuất bằng xà phòng hoá chất béo với NaOH, KOH đặc hoặc từ dầu mỏ; chất giặt rửa tổng hợp sản xuất từ dầu mỏ.',
    'Chất giặt rửa tổng hợp dùng được trong nước cứng và môi trường acid, nhưng một số loại khó phân huỷ sinh học.',
  ],
};
