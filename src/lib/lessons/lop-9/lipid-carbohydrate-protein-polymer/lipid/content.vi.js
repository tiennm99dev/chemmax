/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Lipid là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước, tan trong dung môi hữu cơ; chất béo là triester của glycerol với acid béo, công thức chung (RCOO)3C3H5. Đun chất béo với dung dịch NaOH thu được muối của acid béo (xà phòng) và glycerol: đó là phản ứng xà phòng hoá. Chất béo là nguồn dự trữ năng lượng của cơ thể, cần được sử dụng hợp lí.',
  intro:
    'Dầu ăn nổi trên mặt nước và không hoà tan dù khuấy mạnh; mỡ lợn đông lại khi trời lạnh. Thế nhưng người ta lại nấu chính dầu, mỡ với kiềm để làm ra xà phòng tẩy sạch vết dầu mỡ. Chất béo có cấu tạo thế nào mà làm được điều đó?',
  objectives: [
    'Nêu được khái niệm lipid, khái niệm chất béo, trạng thái tự nhiên và tính chất vật lí của chất béo.',
    'Viết được công thức chung của chất béo, nhận ra các acid béo thường gặp.',
    'Trình bày được phản ứng xà phòng hoá; viết được phương trình hoá học và tính được khối lượng các chất.',
    'Nêu được ứng dụng của chất béo và cách sử dụng chất béo hợp lí để bảo vệ sức khoẻ.',
  ],
  sections: [
    {
      heading: 'Lipid',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lipid',
          text: 'Lipid là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan trong một số dung môi hữu cơ như xăng, dầu hoả.',
        },
        {
          type: 'list',
          items: [
            'Chất béo: thành phần chính của dầu thực vật, mỡ động vật; là nguồn dự trữ năng lượng chính của cơ thể.',
            'Sáp: phủ trên bề mặt lá, thân, quả của nhiều loài cây và trên da, lông một số động vật, giúp chống thấm nước và hạn chế tác động có hại của môi trường.',
          ],
        },
      ],
    },
    {
      heading: 'Chất béo',
      blocks: [
        {
          type: 'p',
          text: 'Glycerol là một alcohol có ba nhóm $\\mathrm{{-}OH}$, viết gọn là $\\mathrm{C_3H_5(OH)_3}$. Acid béo là acid hữu cơ có công thức chung $\\mathrm{R{-}COOH}$, gốc $\\mathrm{R}$ thường có mạch carbon dài, không phân nhánh.',
        },
        {
          type: 'table',
          head: ['Acid béo', 'Công thức', 'Có nhiều trong'],
          rows: [
            ['Stearic acid', '$\\mathrm{C_{17}H_{35}COOH}$', 'mỡ động vật'],
            ['Palmitic acid', '$\\mathrm{C_{15}H_{31}COOH}$', 'dầu cọ, mỡ động vật'],
            ['Oleic acid', '$\\mathrm{C_{17}H_{33}COOH}$', 'dầu ô liu, dầu lạc'],
            ['Linoleic acid', '$\\mathrm{C_{17}H_{31}COOH}$', 'dầu hướng dương, dầu đậu nành'],
          ],
          caption: 'Một số acid béo thường gặp',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất béo',
          text: 'Chất béo là triester của glycerol với acid béo. Công thức chung: $\\mathrm{(RCOO)_3C_3H_5}$; ba gốc $\\mathrm{R}$ có thể giống hoặc khác nhau.',
        },
        {
          type: 'tex',
          tex: '\\begin{array}{l} \\mathrm{CH_2{-}O{-}CO{-}R} \\\\ \\mathrm{CH\\phantom{_2}{-}O{-}CO{-}R} \\\\ \\mathrm{CH_2{-}O{-}CO{-}R} \\end{array}',
        },
        {
          type: 'p',
          text: 'Ví dụ: tristearin $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$ ($M = 890$ g/mol) có nhiều trong mỡ động vật; triolein $\\mathrm{(C_{17}H_{33}COO)_3C_3H_5}$ ($M = 884$ g/mol) có trong dầu thực vật.',
        },
        {
          type: 'list',
          items: [
            'Ở điều kiện thường, phần lớn dầu thực vật (dầu lạc, dầu hướng dương) và dầu cá ở trạng thái lỏng; mỡ động vật, bơ thường ở trạng thái rắn.',
            'Chất béo nhẹ hơn nước, không tan trong nước, tan trong dung môi hữu cơ như benzene, xăng.',
          ],
        },
      ],
    },
    {
      heading: 'Phản ứng xà phòng hoá',
      blocks: [
        {
          type: 'p',
          text: 'Đun chất béo với nước có acid hoặc enzyme lipase làm xúc tác, chất béo bị thuỷ phân thành glycerol và các acid béo. Trong môi trường kiềm, chất béo bị thuỷ phân hoàn toàn: đun nóng chất béo với dung dịch NaOH (hoặc KOH) thu được glycerol và muối sodium (hoặc potassium) của acid béo.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xà phòng hoá',
          text: 'Muối sodium hoặc potassium của acid béo là thành phần chính của xà phòng, nên phản ứng thuỷ phân chất béo trong môi trường kiềm được gọi là phản ứng xà phòng hoá.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tỉ lệ cần nhớ',
          text: 'Mỗi phân tử chất béo có 3 liên kết ester, nên tỉ lệ số mol chất béo : NaOH : muối : glycerol là $1 : 3 : 3 : 1$. Theo định luật bảo toàn khối lượng: khối lượng chất béo + khối lượng NaOH = khối lượng muối + khối lượng glycerol.',
        },
      ],
    },
    {
      heading: 'Vai trò và sử dụng chất béo hợp lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Là thực phẩm thiết yếu (dầu thực vật, mỡ động vật, bơ, các loại hạt), cung cấp và dự trữ năng lượng cho cơ thể, giúp hoà tan một số vitamin như A, D, E, K.',
            'Dùng trong công nghiệp mĩ phẩm (chất làm mềm, dưỡng ẩm), dược phẩm, sản xuất nhiên liệu (diesel sinh học), làm nguyên liệu sản xuất xà phòng và glycerol.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ăn chất béo hợp lí',
          text: 'Ăn quá nhiều chất béo là một nguyên nhân gây béo phì và nhiều bệnh liên quan. Nên chọn thực phẩm có lượng chất béo phù hợp, ưu tiên chất béo có nguồn gốc thực vật và giàu omega-3 (cá, các loại hạt); hạn chế mỡ động vật, bơ nhân tạo và thức ăn chiên rán ở nhiệt độ cao.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xà phòng hoá từng bước',
    instruction:
      'Chọn acid béo cho ba gốc của phân tử chất béo, rồi bấm “Thêm 1 NaOH” ba lần. Mỗi phân tử NaOH cắt một liên kết ester: gốc acid béo tách ra thành muối sodium, gốc glycerol nhận lại nhóm –OH. Khi phản ứng xong, kiểm tra bảo toàn khối lượng.',
  },
  examples: [
    {
      problem:
        'Đun nóng $89$ g tristearin $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$ với dung dịch NaOH vừa đủ. Tính khối lượng NaOH đã dùng, khối lượng glycerol và khối lượng sodium stearate thu được.',
      steps: [
        '$M_{\\text{tristearin}} = 890$ g/mol, nên $n = \\dfrac{89}{890} = 0{,}1$ mol.',
        '$\\mathrm{(C_{17}H_{35}COO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}$.',
        '$n_{\\mathrm{NaOH}} = 3 \\times 0{,}1 = 0{,}3$ mol, $m_{\\mathrm{NaOH}} = 0{,}3 \\times 40 = 12$ g.',
        '$n_{\\text{glycerol}} = 0{,}1$ mol, $m = 0{,}1 \\times 92 = 9{,}2$ g.',
        '$n_{\\mathrm{C_{17}H_{35}COONa}} = 0{,}3$ mol, $m = 0{,}3 \\times 306 = 91{,}8$ g. Kiểm tra: $89 + 12 = 101 = 91{,}8 + 9{,}2$.',
      ],
      answer: 'Dùng $12$ g NaOH; thu được $9{,}2$ g glycerol và $91{,}8$ g sodium stearate.',
    },
    {
      problem:
        'Một loại xà phòng chứa $91{,}8\\%$ khối lượng sodium stearate. Tính khối lượng tristearin cần dùng để sản xuất $1$ tấn xà phòng đó, biết hiệu suất phản ứng là $80\\%$.',
      steps: [
        'Khối lượng sodium stearate: $1000 \\times 91{,}8\\% = 918$ kg; $n = \\dfrac{918}{306} = 3$ kmol.',
        'Theo phương trình, $n_{\\text{tristearin}} = \\dfrac{3}{3} = 1$ kmol, tức $890$ kg nếu hiệu suất là $100\\%$.',
        'Hiệu suất $80\\%$ nên cần lượng lớn hơn: $m = \\dfrac{890}{80\\%} = 1112{,}5$ kg.',
      ],
      answer: 'Cần $1112{,}5$ kg tristearin.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất béo là',
      options: [
        'triester của glycerol với acid béo',
        'ester của ethylic alcohol với acetic acid',
        'muối sodium của acid béo',
        'hỗn hợp các acid béo tự do',
      ],
      answer: 0,
      hints: [
        'Công thức chung của chất béo là $\\mathrm{(RCOO)_3C_3H_5}$; phần $\\mathrm{C_3H_5}$ đến từ alcohol nào?',
      ],
      solution:
        'Chất béo là triester của glycerol $\\mathrm{C_3H_5(OH)_3}$ với acid béo $\\mathrm{RCOOH}$, công thức chung $\\mathrm{(RCOO)_3C_3H_5}$. Muối sodium của acid béo là xà phòng; ethyl acetate là ester của ethylic alcohol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về tính chất vật lí của chất béo?',
      options: [
        'Nhẹ hơn nước',
        'Tan tốt trong nước',
        'Tan trong xăng, benzene',
        'Ở điều kiện thường đều là chất rắn',
        'Dầu lạc ở điều kiện thường là chất lỏng',
      ],
      answers: [0, 2, 4],
      hints: [
        'Nghĩ đến váng dầu nổi trên mặt nước canh.',
        'So sánh dầu ăn và mỡ lợn ở nhiệt độ phòng.',
      ],
      solution:
        'Chất béo nhẹ hơn nước, không tan trong nước, tan trong dung môi hữu cơ. Dầu thực vật như dầu lạc thường ở thể lỏng, mỡ động vật thường ở thể rắn, nên không phải mọi chất béo đều rắn.',
    },
    {
      type: 'choice',
      prompt: 'Đun nóng chất béo với dung dịch NaOH, sản phẩm thu được là',
      options: [
        'glycerol và muối sodium của acid béo',
        'glycerol và acid béo',
        'ethylic alcohol và sodium acetate',
        'carbon dioxide và nước',
      ],
      answer: 0,
      hints: ['Trong môi trường kiềm, acid béo không thể tồn tại ở dạng acid tự do.'],
      solution:
        '$\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}$: tạo glycerol và muối sodium của acid béo. Glycerol và acid béo là sản phẩm thuỷ phân trong môi trường acid.',
    },
    {
      type: 'text',
      prompt: 'Phản ứng thuỷ phân chất béo trong môi trường kiềm được gọi là phản ứng gì?',
      accept: ['xà phòng hoá', 'xà phòng hóa', 'phản ứng xà phòng hoá', 'phản ứng xà phòng hóa'],
      hints: ['Muối sodium của acid béo dùng để làm gì?'],
      solution:
        'Muối sodium (potassium) của acid béo là thành phần chính của xà phòng, nên phản ứng này gọi là phản ứng xà phòng hoá.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu gam NaOH để xà phòng hoá hoàn toàn $0{,}2$ mol triolein $\\mathrm{(C_{17}H_{33}COO)_3C_3H_5}$?',
      answer: 24,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Mỗi phân tử chất béo có 3 liên kết ester.',
        'Số mol NaOH gấp 3 lần số mol chất béo; $M_{\\mathrm{NaOH}} = 40$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{NaOH}} = 3 \\times 0{,}2 = 0{,}6$ mol; $m = 0{,}6 \\times 40 = 24$ g.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $178$ g tristearin bằng dung dịch NaOH. Tính khối lượng sodium stearate $\\mathrm{C_{17}H_{35}COONa}$ thu được, theo gam.',
      answer: 183.6,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\text{tristearin}} = \\dfrac{178}{890}$ mol.',
        'Một mol tristearin cho $3$ mol muối; $M_{\\mathrm{C_{17}H_{35}COONa}} = 306$ g/mol.',
      ],
      solution:
        '$n_{\\text{tristearin}} = 0{,}2$ mol, $n_{\\mathrm{C_{17}H_{35}COONa}} = 0{,}6$ mol, $m = 0{,}6 \\times 306 = 183{,}6$ g.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $17{,}8$ g một chất béo cần vừa đủ $0{,}06$ mol NaOH, thu được $1{,}84$ g glycerol. Tính khối lượng muối thu được, theo gam.',
      answer: 18.36,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Áp dụng định luật bảo toàn khối lượng.',
        'Khối lượng muối = khối lượng chất béo + khối lượng NaOH − khối lượng glycerol.',
      ],
      solution:
        '$m_{\\mathrm{NaOH}} = 0{,}06 \\times 40 = 2{,}4$ g; khối lượng muối $= 17{,}8 + 2{,}4 - 1{,}84 = 18{,}36$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $80{,}6$ g tripalmitin $\\mathrm{(C_{15}H_{31}COO)_3C_3H_5}$ với dung dịch NaOH dư. Tính khối lượng glycerol thu được, theo gam.',
      answer: 9.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$M_{\\text{tripalmitin}} = 3 \\times 255 + 41 = 806$ g/mol.',
        'Một mol chất béo cho một mol glycerol ($M = 92$ g/mol).',
      ],
      solution:
        '$n_{\\text{tripalmitin}} = \\dfrac{80{,}6}{806} = 0{,}1$ mol; $n_{\\text{glycerol}} = 0{,}1$ mol; $m = 0{,}1 \\times 92 = 9{,}2$ g.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi acid béo với công thức của nó.',
      left: ['Stearic acid', 'Palmitic acid', 'Oleic acid'],
      right: [
        '$\\mathrm{C_{17}H_{35}COOH}$',
        '$\\mathrm{C_{15}H_{31}COOH}$',
        '$\\mathrm{C_{17}H_{33}COOH}$',
        '$\\mathrm{CH_3COOH}$',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Stearic và oleic acid cùng có 18 nguyên tử C; gốc của oleic acid ít hơn 2 nguyên tử H.',
      ],
      solution:
        'Stearic acid $\\mathrm{C_{17}H_{35}COOH}$, palmitic acid $\\mathrm{C_{15}H_{31}COOH}$, oleic acid $\\mathrm{C_{17}H_{33}COOH}$. $\\mathrm{CH_3COOH}$ là acetic acid, không phải acid béo.',
    },
    {
      type: 'choice',
      prompt: 'Cách sử dụng chất béo nào sau đây là hợp lí?',
      options: [
        'Ưu tiên dầu thực vật, cá và các loại hạt; hạn chế đồ chiên rán nhiều lần',
        'Ăn càng nhiều mỡ động vật càng tốt vì cung cấp nhiều năng lượng',
        'Bỏ hẳn chất béo khỏi khẩu phần ăn',
        'Dùng lại dầu đã chiên nhiều lần cho tiết kiệm',
      ],
      answer: 0,
      hints: ['Chất béo vẫn cần cho cơ thể, chẳng hạn để hoà tan vitamin A, D, E, K.'],
      solution:
        'Cơ thể cần chất béo nhưng ăn quá nhiều gây béo phì; nên ưu tiên chất béo thực vật, giàu omega-3 và hạn chế thức ăn chế biến ở nhiệt độ cao.',
    },
  ],
  takeaways: [
    'Lipid: hợp chất hữu cơ trong tế bào sống, không tan trong nước, tan trong dung môi hữu cơ; gồm chất béo, sáp, …',
    'Chất béo là triester của glycerol với acid béo: $\\mathrm{(RCOO)_3C_3H_5}$; nhẹ hơn nước, không tan trong nước.',
    'Xà phòng hoá: $\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}$; muối $\\mathrm{RCOONa}$ là xà phòng.',
    'Tỉ lệ mol chất béo : NaOH : muối : glycerol $= 1 : 3 : 3 : 1$; khối lượng được bảo toàn.',
    'Chất béo cung cấp, dự trữ năng lượng; cần ăn vừa đủ, ưu tiên chất béo thực vật.',
  ],
};
