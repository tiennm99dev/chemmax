/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ester: khái niệm, danh pháp, tính chất vật lí, phản ứng thuỷ phân trong môi trường acid và môi trường kiềm, điều chế và ứng dụng. Lipid và chất béo: acid béo, tính chất vật lí, thuỷ phân, hydrogen hoá, oxi hoá, vai trò của chất béo và acid béo omega-3, omega-6.',
  intro:
    'Mùi thơm của chuối chín, của hoa nhài hay của dứa phần lớn đến từ các ester. Dầu ăn, mỡ lợn, bơ cũng là ester: chúng là chất béo, một loại lipid. Ester có cấu tạo thế nào, vì sao đun ester với dung dịch kiềm lại thu được xà phòng, còn đun với acid thì không bao giờ thuỷ phân hết?',
  objectives: [
    'Nêu được khái niệm ester, công thức chung của ester đơn chức và ester no, đơn chức, mạch hở; gọi được tên một số ester đơn giản.',
    'Giải thích được nhiệt độ sôi thấp của ester so với alcohol và carboxylic acid có phân tử khối tương đương.',
    'Trình bày được phản ứng thuỷ phân ester trong môi trường acid (thuận nghịch) và môi trường kiềm (phản ứng xà phòng hoá, một chiều).',
    'Nêu được phương pháp điều chế và ứng dụng của ester.',
    'Nêu được khái niệm lipid, chất béo, acid béo; trình bày được tính chất vật lí và tính chất hoá học của chất béo (thuỷ phân, hydrogen hoá, oxi hoá).',
    'Trình bày được ứng dụng của chất béo và vai trò của acid béo omega-3, omega-6.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp ester',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ester',
          text: "Khi thay thế nhóm $\\mathrm{{-}OH}$ ở nhóm carboxyl $\\mathrm{{-}COOH}$ của carboxylic acid bằng nhóm $\\mathrm{{-}OR'}$ thì được ester. Ester đơn chức có công thức chung $\\mathrm{RCOOR'}$, trong đó $\\mathrm{R}$ là nguyên tử H hoặc gốc hydrocarbon, $\\mathrm{R'}$ là gốc hydrocarbon.",
        },
        {
          type: 'p',
          text: 'Ester no, đơn chức, mạch hở (tạo từ carboxylic acid no, đơn chức, mạch hở và alcohol no, đơn chức, mạch hở) có công thức chung $\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 2$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên của ester đơn chức',
          text: "Tên gốc hydrocarbon $\\mathrm{R'}$ + tên gốc carboxylate $\\mathrm{RCOO^-}$ (tên acid, đổi đuôi ic acid thành ate). Ví dụ $\\mathrm{CH_3COOC_2H_5}$: gốc $\\mathrm{C_2H_5}$ là ethyl, gốc $\\mathrm{CH_3COO}$ là acetate, nên tên là ethyl acetate.",
        },
        {
          type: 'table',
          caption: 'Tên của một số ester',
          head: ['Công thức', 'Tên', 'Ghi chú'],
          rows: [
            ['$\\mathrm{HCOOCH_3}$', 'methyl formate', 'từ formic acid và methanol'],
            ['$\\mathrm{CH_3COOC_2H_5}$', 'ethyl acetate', 'dung môi pha sơn, tẩy sơn móng tay'],
            ['$\\mathrm{CH_3CH_2COOCH_3}$', 'methyl propionate', 'từ propionic acid và methanol'],
            ['$\\mathrm{CH_2{=}CHCOOCH_3}$', 'methyl acrylate', 'ester không no'],
            ['$\\mathrm{C_6H_5COOCH_3}$', 'methyl benzoate', 'ester thơm'],
            ['$\\mathrm{CH_3COOCH_2CH_2CH(CH_3)_2}$', 'isoamyl acetate', 'mùi chuối chín'],
            ['$\\mathrm{CH_3COOCH_2C_6H_5}$', 'benzyl acetate', 'mùi hoa nhài'],
            ['$\\mathrm{CH_3CH_2CH_2COOC_2H_5}$', 'ethyl butyrate', 'mùi dứa'],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất vật lí của ester',
      blocks: [
        {
          type: 'list',
          items: [
            'Giữa các phân tử ester không có liên kết hydrogen, nên ester có nhiệt độ sôi thấp hơn nhiều so với alcohol và carboxylic acid có phân tử khối tương đương.',
            'Ester có phân tử khối thấp và trung bình thường là chất lỏng ở nhiệt độ phòng; ester có phân tử khối lớn thường là chất rắn.',
            'Ester nhẹ hơn nước, ít tan trong nước. Nhiều ester có mùi thơm của hoa, quả chín.',
          ],
        },
        {
          type: 'table',
          caption: 'Nhiệt độ sôi của ba chất có cùng phân tử khối $M = 88$',
          head: ['Chất', 'Loại', 'Nhiệt độ sôi'],
          rows: [
            ['$\\mathrm{CH_3COOC_2H_5}$', 'ester', '$77$ °C'],
            ['$\\mathrm{CH_3[CH_2]_4OH}$', 'alcohol', '$138$ °C'],
            ['$\\mathrm{CH_3[CH_2]_2COOH}$', 'carboxylic acid', '$164$ °C'],
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học: phản ứng thuỷ phân',
      blocks: [
        {
          type: 'p',
          text: "Khi thuỷ phân, liên kết giữa nguyên tử carbon của nhóm $\\mathrm{C{=}O}$ và nguyên tử oxygen của gốc $\\mathrm{{-}OR'}$ bị cắt đứt.",
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thuỷ phân trong môi trường acid',
          text: 'Ester bị thuỷ phân khi đun nóng với nước có acid làm xúc tác, tạo carboxylic acid và alcohol. Phản ứng thuận nghịch (là phản ứng ngược của phản ứng ester hoá), nên ester không bị thuỷ phân hết.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O} \\overset{\\mathrm{H^+},\\ t^\\circ}{\\rightleftharpoons} \\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thuỷ phân trong môi trường kiềm (phản ứng xà phòng hoá)',
          text: 'Đun nóng ester với dung dịch kiềm (NaOH, KOH) tạo muối carboxylate và alcohol. Phản ứng xảy ra một chiều. Phản ứng này được gọi là phản ứng xà phòng hoá, vì được dùng để sản xuất xà phòng từ chất béo.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3COOC_2H_5} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_3COONa} + \\mathrm{C_2H_5OH}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: "Với ester đơn chức (gốc $\\mathrm{R'}$ là gốc alcohol), tỉ lệ mol ester : NaOH $= 1 : 1$ và số mol muối bằng số mol alcohol bằng số mol ester đã phản ứng.",
        },
      ],
    },
    {
      heading: 'Điều chế và ứng dụng của ester',
      blocks: [
        {
          type: 'p',
          text: 'Ester thường được điều chế bằng phản ứng ester hoá giữa carboxylic acid và alcohol, xúc tác $\\mathrm{H_2SO_4}$ đặc, đun nóng:',
        },
        {
          type: 'tex',
          tex: "\\mathrm{RCOOH} + \\mathrm{R'OH} \\overset{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ t^\\circ}{\\rightleftharpoons} \\mathrm{RCOOR'} + \\mathrm{H_2O}",
        },
        {
          type: 'list',
          items: [
            'Ester có mùi thơm, ít độc được dùng làm hương liệu trong thực phẩm và mĩ phẩm.',
            'Ester có phân tử khối thấp như ethyl acetate, butyl acetate được dùng làm dung môi.',
            'Một số polymer có nhóm ester được dùng làm chất dẻo, keo dán, sơn, ví dụ poly(methyl methacrylate) làm thuỷ tinh hữu cơ.',
            'Một số ester được dùng làm dược phẩm, ví dụ aspirin, methyl salicylate (thuốc xoa bóp giảm đau).',
          ],
        },
      ],
    },
    {
      heading: 'Lipid và chất béo',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lipid',
          text: 'Lipid là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan trong các dung môi hữu cơ không phân cực. Lipid gồm chất béo, sáp, steroid, phospholipid,...',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất béo và acid béo',
          text: 'Chất béo là triester của glycerol với acid béo, gọi chung là triglyceride. Acid béo là carboxylic acid đơn chức, thường có mạch carbon dài (khoảng $12$ đến $24$ nguyên tử C), không phân nhánh và có số nguyên tử carbon chẵn. Gốc hydrocarbon của acid béo có thể no hoặc không no.',
        },
        {
          type: 'tex',
          tex: '\\begin{array}{l} \\mathrm{R^1COO{-}CH_2} \\\\ \\mathrm{R^2COO{-}CH} \\\\ \\mathrm{R^3COO{-}CH_2} \\end{array}',
        },
        {
          type: 'table',
          caption: 'Một số acid béo thường gặp',
          head: ['Acid béo', 'Công thức', 'Số liên kết C=C'],
          rows: [
            ['palmitic acid', '$\\mathrm{C_{15}H_{31}COOH}$', '$0$'],
            ['stearic acid', '$\\mathrm{C_{17}H_{35}COOH}$', '$0$'],
            ['oleic acid', '$\\mathrm{C_{17}H_{33}COOH}$', '$1$'],
            ['linoleic acid', '$\\mathrm{C_{17}H_{31}COOH}$', '$2$'],
            ['$\\alpha$-linolenic acid', '$\\mathrm{C_{17}H_{29}COOH}$', '$3$'],
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ chất béo: tristearin $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$, tripalmitin $\\mathrm{(C_{15}H_{31}COO)_3C_3H_5}$, triolein $\\mathrm{(C_{17}H_{33}COO)_3C_3H_5}$.',
        },
        {
          type: 'list',
          items: [
            'Chất béo chứa chủ yếu gốc acid béo no thường ở thể rắn ở nhiệt độ phòng (mỡ lợn, mỡ bò); chất béo chứa chủ yếu gốc acid béo không no thường ở thể lỏng (dầu lạc, dầu vừng, dầu cá).',
            'Chất béo nhẹ hơn nước, không tan trong nước, tan tốt trong các dung môi hữu cơ ít phân cực hoặc không phân cực.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của chất béo',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng thuỷ phân. Chất béo là ester nên bị thuỷ phân trong môi trường acid tạo glycerol và acid béo, trong môi trường kiềm tạo glycerol và muối của acid béo (xà phòng):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_{17}H_{35}COO)_3C_3H_5} + 3\\mathrm{NaOH} \\xrightarrow{t^\\circ} 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}',
        },
        {
          type: 'p',
          text: 'Phản ứng hydrogen hoá. Gốc acid béo không no cộng hydrogen khi có xúc tác (Ni) và đun nóng, có áp suất, tạo chất béo chứa gốc acid béo no. Phản ứng này chuyển dầu thực vật (lỏng) thành chất béo rắn để sản xuất bơ thực vật (margarine).',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_{17}H_{33}COO)_3C_3H_5} + 3\\mathrm{H_2} \\xrightarrow{\\mathrm{Ni},\\ t^\\circ,\\ p} \\mathrm{(C_{17}H_{35}COO)_3C_3H_5}',
        },
        {
          type: 'p',
          text: 'Phản ứng oxi hoá bởi oxygen không khí. Liên kết đôi C=C ở gốc acid béo không no bị oxygen không khí oxi hoá chậm, tạo các hợp chất có mùi khó chịu. Đó là nguyên nhân dầu mỡ để lâu bị ôi.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của chất béo và acid béo omega-3, omega-6',
      blocks: [
        {
          type: 'list',
          items: [
            'Chất béo là nguồn cung cấp và dự trữ năng lượng cho người và động vật; một gam chất béo cung cấp nhiều năng lượng hơn một gam carbohydrate.',
            'Chất béo cung cấp acid béo thiết yếu và giúp cơ thể hấp thụ các vitamin tan trong dầu A, D, E, K.',
            'Chất béo là nguyên liệu của công nghiệp thực phẩm và để sản xuất xà phòng, glycerol, nhiên liệu sinh học.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Acid béo omega-3 và omega-6',
          text: 'Omega-3 và omega-6 là các acid béo không no có liên kết đôi đầu tiên ở nguyên tử carbon số $3$ hoặc số $6$ khi đánh số mạch carbon từ nhóm methyl ($\\mathrm{CH_3}$ cuối mạch). $\\alpha$-linolenic acid là omega-3, linoleic acid là omega-6; cơ thể không tự tổng hợp được nên phải lấy từ thức ăn. Dầu cá biển giàu omega-3; dầu vừng, dầu đậu nành, dầu hướng dương giàu omega-6.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thuỷ phân ester trong môi trường acid và kiềm',
    instruction:
      'Chọn gốc acid và gốc alcohol để tạo ester, đọc tên của nó. Chọn môi trường rồi kéo thanh thời gian để đun nóng: so sánh lượng ester còn lại khi thuỷ phân trong acid và trong NaOH. Thử thay đổi lượng nước, lượng NaOH.',
  },
  examples: [
    {
      problem:
        'Gọi tên các ester $\\mathrm{CH_2{=}CHCOOCH_3}$ và $\\mathrm{CH_3COOCH_2CH_2CH(CH_3)_2}$.',
      steps: [
        "Tách ester thành gốc carboxylate $\\mathrm{RCOO}$ và gốc $\\mathrm{R'}$ gắn với O.",
        '$\\mathrm{CH_2{=}CHCOO}$ là gốc acrylate (từ acrylic acid), $\\mathrm{CH_3}$ là methyl: methyl acrylate.',
        '$\\mathrm{CH_3COO}$ là acetate, $\\mathrm{CH_2CH_2CH(CH_3)_2}$ là isoamyl: isoamyl acetate.',
      ],
      answer: 'Methyl acrylate và isoamyl acetate (ester có mùi chuối chín).',
    },
    {
      problem:
        'Đun nóng $8{,}8$ g ethyl acetate với $150$ mL dung dịch NaOH $1$ M đến khi phản ứng xảy ra hoàn toàn, rồi cô cạn dung dịch. Tính khối lượng chất rắn khan thu được.',
      steps: [
        '$n_{\\text{ester}} = \\dfrac{8{,}8}{88} = 0{,}1$ mol; $n_{\\mathrm{NaOH}} = 0{,}15 \\cdot 1 = 0{,}15$ mol.',
        '$\\mathrm{CH_3COOC_2H_5} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{C_2H_5OH}$: ester hết, NaOH dư $0{,}05$ mol.',
        'Ethanol bay hơi khi cô cạn. Chất rắn gồm $0{,}1$ mol $\\mathrm{CH_3COONa}$ và $0{,}05$ mol NaOH dư.',
        '$m = 0{,}1 \\cdot 82 + 0{,}05 \\cdot 40 = 8{,}2 + 2 = 10{,}2$ g.',
      ],
      answer: 'Chất rắn khan nặng $10{,}2$ g.',
    },
    {
      problem:
        'Xà phòng hoá hoàn toàn $17{,}8$ g tristearin bằng dung dịch NaOH vừa đủ. Tính khối lượng glycerol và khối lượng sodium stearate thu được.',
      steps: [
        '$M_{\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}} = 890$ g/mol, nên $n = \\dfrac{17{,}8}{890} = 0{,}02$ mol.',
        'Theo phương trình, $n_{\\text{glycerol}} = 0{,}02$ mol, $n_{\\mathrm{C_{17}H_{35}COONa}} = 3 \\cdot 0{,}02 = 0{,}06$ mol.',
        '$m_{\\text{glycerol}} = 0{,}02 \\cdot 92 = 1{,}84$ g; $m_{\\text{muối}} = 0{,}06 \\cdot 306 = 18{,}36$ g.',
        'Kiểm tra bằng định luật bảo toàn khối lượng: $17{,}8 + 0{,}06 \\cdot 40 = 20{,}2 = 1{,}84 + 18{,}36$.',
      ],
      answer: 'Thu được $1{,}84$ g glycerol và $18{,}36$ g sodium stearate.',
    },
  ],
  practice: [
    {
      type: 'text',
      prompt: 'Gọi tên ester $\\mathrm{HCOOC_2H_5}$.',
      accept: ['ethyl formate', 'etyl formate', 'ethyl fomat', 'etyl fomat'],
      hints: ["Gốc $\\mathrm{R'}$ gắn với O đọc trước, gốc carboxylate đọc sau."],
      solution: 'Gốc $\\mathrm{C_2H_5}$ là ethyl, gốc $\\mathrm{HCOO}$ là formate: ethyl formate.',
    },
    {
      type: 'choice',
      prompt: 'Công thức chung của ester no, đơn chức, mạch hở là',
      options: [
        '$\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n+2}O_2}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n-2}O_2}$ ($n \\ge 3$)',
        '$\\mathrm{C_nH_{2n}O}$ ($n \\ge 2$)',
      ],
      answer: 0,
      hints: [
        'Nhóm $\\mathrm{{-}COO{-}}$ có một liên kết đôi C=O, giống carboxylic acid no, đơn chức.',
      ],
      solution:
        'Ester no, đơn chức, mạch hở có một liên kết $\\pi$ (trong C=O) và hai nguyên tử O: $\\mathrm{C_nH_{2n}O_2}$ với $n \\ge 2$ (nhỏ nhất là $\\mathrm{HCOOCH_3}$).',
    },
    {
      type: 'choice',
      prompt: 'Ba chất cùng có phân tử khối $74$. Chất nào có nhiệt độ sôi thấp nhất?',
      options: [
        '$\\mathrm{CH_3COOCH_3}$',
        '$\\mathrm{C_2H_5COOH}$',
        '$\\mathrm{CH_3CH_2CH_2CH_2OH}$',
      ],
      answer: 0,
      hints: ['Chất nào không tạo được liên kết hydrogen giữa các phân tử?'],
      solution:
        'Methyl acetate là ester, không có liên kết hydrogen giữa các phân tử nên sôi thấp nhất (khoảng $57$ °C), thấp hơn butan-1-ol ($118$ °C) và propanoic acid ($141$ °C).',
    },
    {
      type: 'multi',
      prompt: "Những phát biểu nào đúng về phản ứng thuỷ phân ester đơn chức $\\mathrm{RCOOR'}$?",
      options: [
        'Trong môi trường acid, phản ứng là thuận nghịch.',
        'Trong môi trường kiềm, phản ứng xảy ra một chiều.',
        'Thuỷ phân trong dung dịch NaOH tạo muối carboxylate và alcohol.',
        'Thuỷ phân trong môi trường acid tạo muối và nước.',
      ],
      answers: [0, 1, 2],
      hints: ['Thuỷ phân trong acid là phản ứng ngược của ester hoá.'],
      solution:
        "Trong acid: $\\mathrm{RCOOR'} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{RCOOH} + \\mathrm{R'OH}$ (thuận nghịch, tạo acid và alcohol). Trong NaOH: $\\mathrm{RCOOR'} + \\mathrm{NaOH} \\rightarrow \\mathrm{RCOONa} + \\mathrm{R'OH}$ (một chiều). Môi trường acid không tạo muối.",
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $6$ g methyl formate $\\mathrm{HCOOCH_3}$ bằng dung dịch NaOH vừa đủ. Tính khối lượng muối thu được.',
      answer: 6.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$M_{\\mathrm{HCOOCH_3}} = 60$ g/mol; muối là $\\mathrm{HCOONa}$.',
        'Số mol muối bằng số mol ester.',
      ],
      solution:
        '$n = \\dfrac{6}{60} = 0{,}1$ mol. $\\mathrm{HCOOCH_3} + \\mathrm{NaOH} \\rightarrow \\mathrm{HCOONa} + \\mathrm{CH_3OH}$, $m_{\\mathrm{HCOONa}} = 0{,}1 \\cdot 68 = 6{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Ester no, đơn chức, mạch hở X có phần trăm khối lượng oxygen là $36{,}36\\%$. Phân tử X có bao nhiêu nguyên tử carbon?',
      answer: 4,
      hints: [
        'X có dạng $\\mathrm{C_nH_{2n}O_2}$, $M = 14n + 32$.',
        '$\\dfrac{32}{M} = 0{,}3636$.',
      ],
      solution:
        '$M = \\dfrac{32}{0{,}3636} \\approx 88$, nên $14n + 32 = 88$ và $n = 4$: X là $\\mathrm{C_4H_8O_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Thuỷ phân triolein trong dung dịch NaOH dư, đun nóng, thu được',
      options: [
        '$\\mathrm{C_{17}H_{33}COONa}$ và glycerol',
        '$\\mathrm{C_{17}H_{35}COONa}$ và glycerol',
        '$\\mathrm{C_{17}H_{33}COOH}$ và glycerol',
        '$\\mathrm{C_{17}H_{33}COONa}$ và ethanol',
      ],
      answer: 0,
      hints: ['Triolein là triester của glycerol với oleic acid $\\mathrm{C_{17}H_{33}COOH}$.'],
      solution:
        '$\\mathrm{(C_{17}H_{33}COO)_3C_3H_5} + 3\\mathrm{NaOH} \\rightarrow 3\\mathrm{C_{17}H_{33}COONa} + \\mathrm{C_3H_5(OH)_3}$: sodium oleate và glycerol. Trong kiềm thu được muối, không phải acid.',
    },
    {
      type: 'number',
      prompt:
        'Hydrogen hoá hoàn toàn $8{,}84$ g triolein (xúc tác Ni, $t^\\circ$). Tính thể tích khí $\\mathrm{H_2}$ (đkc, $24{,}79$ L/mol) đã phản ứng.',
      answer: 0.7437,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$M_{\\text{triolein}} = 884$ g/mol; mỗi gốc oleate có một liên kết C=C.',
        '$n_{\\mathrm{H_2}} = 3\\,n_{\\text{triolein}}$.',
      ],
      solution:
        '$n = \\dfrac{8{,}84}{884} = 0{,}01$ mol, $n_{\\mathrm{H_2}} = 0{,}03$ mol, $V = 0{,}03 \\cdot 24{,}79 \\approx 0{,}744$ L.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $89$ g tristearin bằng dung dịch NaOH. Tính khối lượng glycerol thu được.',
      answer: 9.2,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$M_{\\text{tristearin}} = 890$ g/mol; mỗi mol chất béo cho một mol glycerol.'],
      solution:
        '$n = \\dfrac{89}{890} = 0{,}1$ mol, $m_{\\mathrm{C_3H_5(OH)_3}} = 0{,}1 \\cdot 92 = 9{,}2$ g.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi acid béo với đặc điểm của nó.',
      left: ['stearic acid', 'oleic acid', 'linoleic acid', '$\\alpha$-linolenic acid'],
      right: [
        'no, $\\mathrm{C_{17}H_{35}COOH}$',
        'một liên kết C=C, $\\mathrm{C_{17}H_{33}COOH}$',
        'omega-6, $\\mathrm{C_{17}H_{31}COOH}$',
        'omega-3, $\\mathrm{C_{17}H_{29}COOH}$',
        'no, $\\mathrm{C_{15}H_{31}COOH}$',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Mỗi liên kết C=C làm công thức gốc acid ít hơn $2$ nguyên tử H so với gốc no $\\mathrm{C_{17}H_{35}}$.',
      ],
      solution:
        'Stearic acid $\\mathrm{C_{17}H_{35}COOH}$ no; oleic acid $\\mathrm{C_{17}H_{33}COOH}$ có một C=C; linoleic acid $\\mathrm{C_{17}H_{31}COOH}$ là omega-6; $\\alpha$-linolenic acid $\\mathrm{C_{17}H_{29}COOH}$ là omega-3. $\\mathrm{C_{15}H_{31}COOH}$ là palmitic acid.',
    },
  ],
  takeaways: [
    "Ester đơn chức $\\mathrm{RCOOR'}$; ester no, đơn chức, mạch hở $\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 2$). Tên: gốc $\\mathrm{R'}$ + gốc carboxylate (đuôi ate).",
    'Ester không có liên kết hydrogen giữa các phân tử nên sôi thấp hơn alcohol và acid có phân tử khối tương đương; ít tan trong nước, nhiều ester có mùi thơm.',
    'Thuỷ phân trong acid: thuận nghịch, tạo acid và alcohol. Thuỷ phân trong kiềm (xà phòng hoá): một chiều, tạo muối carboxylate và alcohol.',
    'Chất béo là triester của glycerol với acid béo (triglyceride); dầu chứa nhiều gốc không no, mỡ chứa nhiều gốc no.',
    'Chất béo bị thuỷ phân (trong kiềm tạo xà phòng và glycerol), gốc không no cộng $\\mathrm{H_2}$ (Ni, $t^\\circ$) và bị oxygen không khí oxi hoá gây ôi.',
    'Omega-3, omega-6: acid béo không no có C=C đầu tiên ở C số $3$, số $6$ tính từ nhóm methyl; là acid béo thiết yếu.',
  ],
};
