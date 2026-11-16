/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Ester – lipid: khái niệm, danh pháp và phản ứng thuỷ phân của ester, chất béo và các phản ứng của chất béo, xà phòng và chất giặt rửa; xác định ester từ sản phẩm thuỷ phân và luyện các dạng bài tính toán.',
  intro:
    'Chương 1 đi từ những ester có mùi hoa quả đến chất béo trong bữa ăn và bánh xà phòng trong nhà tắm. Cả ba đều xoay quanh một nhóm chức $\\mathrm{{-}COO{-}}$ và một phản ứng chính: thuỷ phân. Bài ôn tập này hệ thống lại kiến thức và luyện cách đi ngược từ sản phẩm thuỷ phân về ester ban đầu.',
  objectives: [
    'Hệ thống được khái niệm, danh pháp, tính chất của ester và chất béo.',
    'Phân biệt được thuỷ phân trong môi trường acid và phản ứng xà phòng hoá.',
    'Xác định được công thức ester từ sản phẩm thuỷ phân, công thức phân tử hoặc khối lượng.',
    'Giải được các bài tập về xà phòng hoá ester, chất béo, hydrogen hoá và hiệu suất ester hoá.',
    'Giải thích được cơ chế giặt rửa và ưu điểm, hạn chế của chất giặt rửa tổng hợp.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Ester, chất béo, xà phòng và chất giặt rửa',
          head: ['Nhóm chất', 'Cấu tạo', 'Tính chất, ứng dụng chính'],
          rows: [
            [
              'Ester',
              "$\\mathrm{RCOOR'}$; ester no, đơn chức, mạch hở $\\mathrm{C_nH_{2n}O_2}$ ($n \\ge 2$). Tên: gốc $\\mathrm{R'}$ + gốc carboxylate.",
              'Sôi thấp, ít tan trong nước, nhiều chất có mùi thơm. Thuỷ phân trong acid (thuận nghịch) và trong kiềm (một chiều). Dùng làm hương liệu, dung môi, chất dẻo.',
            ],
            [
              'Chất béo',
              'Triester của glycerol với acid béo (triglyceride), ví dụ $\\mathrm{(C_{17}H_{35}COO)_3C_3H_5}$.',
              'Không tan trong nước; mỡ chứa nhiều gốc no (rắn), dầu chứa nhiều gốc không no (lỏng). Thuỷ phân, hydrogen hoá, bị oxi hoá gây ôi. Cung cấp năng lượng, acid béo thiết yếu.',
            ],
            [
              'Xà phòng',
              'Muối sodium, potassium của acid béo, ví dụ $\\mathrm{C_{17}H_{35}COONa}$.',
              'Đầu ưa nước $\\mathrm{{-}COO^-}$, đuôi kị nước. Giặt kém trong nước cứng vì tạo kết tủa với $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$.',
            ],
            [
              'Chất giặt rửa tổng hợp',
              'Sodium alkylsulfate, sodium alkylbenzenesulfonate, ví dụ $\\mathrm{C_{12}H_{25}C_6H_4SO_3Na}$.',
              'Dùng được trong nước cứng và môi trường acid; một số loại khó phân huỷ sinh học.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hai phản ứng thuỷ phân',
          text: "Môi trường acid: $\\mathrm{RCOOR'} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{RCOOH} + \\mathrm{R'OH}$. Môi trường kiềm: $\\mathrm{RCOOR'} + \\mathrm{NaOH} \\rightarrow \\mathrm{RCOONa} + \\mathrm{R'OH}$. Chất béo: $\\mathrm{(RCOO)_3C_3H_5} + 3\\mathrm{NaOH} \\rightarrow 3\\mathrm{RCOONa} + \\mathrm{C_3H_5(OH)_3}$.",
        },
      ],
    },
    {
      heading: 'Đi ngược từ sản phẩm thuỷ phân',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            "Alcohol thu được cho biết gốc $\\mathrm{R'}$; muối $\\mathrm{RCOONa}$ hoặc acid $\\mathrm{RCOOH}$ cho biết gốc $\\mathrm{RCOO}$. Ghép lại được $\\mathrm{RCOOR'}$.",
            "Biết công thức phân tử và alcohol: bớt gốc $\\mathrm{R'}$ và nhóm $\\mathrm{COO}$, phần còn lại là gốc $\\mathrm{R}$.",
            'Biết khối lượng ester và muối (ester đơn chức): $n_{\\text{ester}} = n_{\\text{muối}} = n_{\\mathrm{NaOH}}$, từ đó tính $M$.',
            'Với chất béo: $n_{\\mathrm{NaOH}} = 3\\,n_{\\text{chất béo}}$, $n_{\\text{glycerol}} = n_{\\text{chất béo}}$, và bảo toàn khối lượng $m_{\\text{chất béo}} + m_{\\mathrm{NaOH}} = m_{\\text{muối}} + m_{\\text{glycerol}}$.',
          ],
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có hai câu cho mỗi dạng bài tính toán của chương. Đáp án là số, dùng dấu phẩy thập phân như $8{,}2$. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Xác định ester từ sản phẩm thuỷ phân',
    instruction:
      'Mỗi bài mô tả ester X qua phản ứng thuỷ phân của nó. Ghép gốc acid và gốc alcohol để tạo X rồi bấm Kiểm tra. Có $8$ bài, từ dễ đến khó.',
  },
  examples: [
    {
      problem:
        'Xà phòng hoá hoàn toàn $8{,}8$ g ester X có công thức phân tử $\\mathrm{C_4H_8O_2}$ bằng dung dịch NaOH vừa đủ, thu được $9{,}6$ g muối. Xác định công thức cấu tạo và tên của X.',
      steps: [
        '$n_{\\text{X}} = \\dfrac{8{,}8}{88} = 0{,}1$ mol $= n_{\\text{muối}}$ (ester đơn chức).',
        '$M_{\\text{muối}} = \\dfrac{9{,}6}{0{,}1} = 96$. Muối $\\mathrm{RCOONa}$ có $R + 67 = 96$, nên $R = 29$: gốc $\\mathrm{C_2H_5}$.',
        "Gốc acid là $\\mathrm{C_2H_5COO}$ (3 C), X có 4 C nên $\\mathrm{R'}$ có 1 C: $\\mathrm{CH_3}$.",
      ],
      answer: 'X là $\\mathrm{C_2H_5COOCH_3}$, methyl propionate.',
    },
    {
      problem:
        'Một loại mỡ chứa $89\\%$ tristearin về khối lượng (còn lại là tạp chất không phản ứng). Xà phòng hoá hoàn toàn $1$ tấn mỡ đó bằng NaOH. Tính khối lượng sodium stearate và glycerol thu được.',
      steps: [
        '$m_{\\text{tristearin}} = 0{,}89 \\cdot 1000 = 890$ kg, $n = \\dfrac{890}{890} = 1$ kmol.',
        '$(\\mathrm{C_{17}H_{35}COO})_3\\mathrm{C_3H_5} + 3\\mathrm{NaOH} \\rightarrow 3\\mathrm{C_{17}H_{35}COONa} + \\mathrm{C_3H_5(OH)_3}$.',
        '$m_{\\text{muối}} = 3 \\cdot 306 = 918$ kg; $m_{\\text{glycerol}} = 1 \\cdot 92 = 92$ kg.',
      ],
      answer: 'Thu được $918$ kg sodium stearate và $92$ kg glycerol.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Có bao nhiêu ester có cùng công thức phân tử $\\mathrm{C_4H_8O_2}$?',
      answer: 4,
      hints: [
        "Chia 4 nguyên tử C (kể cả C của nhóm COO) giữa gốc $\\mathrm{R}$ và gốc $\\mathrm{R'}$.",
        'Gốc propyl có hai đồng phân: propyl và isopropyl.',
      ],
      solution:
        '$\\mathrm{HCOOCH_2CH_2CH_3}$, $\\mathrm{HCOOCH(CH_3)_2}$, $\\mathrm{CH_3COOC_2H_5}$, $\\mathrm{C_2H_5COOCH_3}$: có $4$ ester.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên ester $\\mathrm{CH_3COOCH_3}$.',
      accept: ['methyl acetate', 'metyl acetate', 'metyl axetat'],
      hints: ['Gốc gắn với O (bên phải nhóm COO) đọc trước.'],
      solution:
        'Gốc $\\mathrm{CH_3}$ là methyl, gốc $\\mathrm{CH_3COO}$ là acetate: methyl acetate.',
    },
    {
      type: 'text',
      prompt:
        'Thuỷ phân ester X ($\\mathrm{C_4H_8O_2}$) trong dung dịch NaOH thu được sodium propionate. Gọi tên X.',
      accept: ['methyl propionate', 'methyl propanoate', 'metyl propionat'],
      hints: [
        'Sodium propionate là $\\mathrm{C_2H_5COONa}$: gốc acid có $3$ C.',
        'Số C còn lại thuộc gốc alcohol.',
      ],
      solution:
        'Gốc acid $\\mathrm{C_2H_5COO}$ có 3 C, X có 4 C nên gốc alcohol là $\\mathrm{CH_3}$: X là $\\mathrm{C_2H_5COOCH_3}$, methyl propionate.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $13{,}2$ g ethyl acetate với $200$ mL dung dịch NaOH $1$ M đến phản ứng hoàn toàn, rồi cô cạn dung dịch. Tính khối lượng chất rắn khan thu được.',
      answer: 14.3,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'So sánh số mol ester và NaOH để biết chất nào dư.',
        'Chất rắn gồm muối và NaOH dư; ethanol bay hơi.',
      ],
      solution:
        '$n_{\\text{ester}} = \\dfrac{13{,}2}{88} = 0{,}15$ mol, $n_{\\mathrm{NaOH}} = 0{,}2$ mol, NaOH dư $0{,}05$ mol. $m = 0{,}15 \\cdot 82 + 0{,}05 \\cdot 40 = 12{,}3 + 2 = 14{,}3$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $12$ g acetic acid với $13{,}8$ g ethanol (xúc tác $\\mathrm{H_2SO_4}$ đặc), hiệu suất phản ứng ester hoá $75\\%$. Tính khối lượng ethyl acetate thu được.',
      answer: 13.2,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Tính số mol hai chất, hiệu suất tính theo chất hết trước nếu phản ứng hoàn toàn.'],
      solution:
        '$n_{\\text{acid}} = 0{,}2$ mol, $n_{\\text{ethanol}} = 0{,}3$ mol: tính theo acid. $n_{\\text{ester}} = 0{,}2 \\cdot 0{,}75 = 0{,}15$ mol, $m = 0{,}15 \\cdot 88 = 13{,}2$ g.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào về chất béo là đúng?',
      options: [
        'Chất béo là triester của glycerol với acid béo.',
        'Dầu thực vật thường chứa nhiều gốc acid béo không no.',
        'Chất béo tan tốt trong nước.',
        'Hydrogen hoá dầu thực vật thu được chất béo rắn.',
        'Thuỷ phân chất béo trong kiềm thu được ethanol.',
      ],
      answers: [0, 1, 3],
      hints: ['Nhớ lại sản phẩm thuỷ phân chất béo và trạng thái của dầu, mỡ.'],
      solution:
        'Chất béo là triglyceride; dầu chứa nhiều gốc không no nên ở thể lỏng; hydrogen hoá chuyển gốc không no thành gốc no, thu được chất béo rắn. Chất béo không tan trong nước, và thuỷ phân cho glycerol chứ không phải ethanol.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $88{,}4$ g triolein bằng dung dịch NaOH. Tính khối lượng sodium oleate $\\mathrm{C_{17}H_{33}COONa}$ thu được.',
      answer: 91.2,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$M_{\\text{triolein}} = 884$, $M_{\\mathrm{C_{17}H_{33}COONa}} = 304$.'],
      solution:
        '$n = \\dfrac{88{,}4}{884} = 0{,}1$ mol, $n_{\\text{muối}} = 0{,}3$ mol, $m = 0{,}3 \\cdot 304 = 91{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Xà phòng hoá hoàn toàn $m$ g tristearin bằng dung dịch NaOH, thu được $4{,}6$ g glycerol. Tính $m$.',
      answer: 44.5,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_{\\text{tristearin}} = n_{\\text{glycerol}}$; $M_{\\text{glycerol}} = 92$.'],
      solution: '$n = \\dfrac{4{,}6}{92} = 0{,}05$ mol, $m = 0{,}05 \\cdot 890 = 44{,}5$ g.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi quá trình với đặc điểm của nó.',
      left: [
        'Thuỷ phân ester trong dung dịch NaOH',
        'Thuỷ phân ester trong môi trường acid',
        'Dầu thực vật cộng $\\mathrm{H_2}$',
        'Dầu mỡ để lâu bị ôi',
      ],
      right: [
        'phản ứng xà phòng hoá, xảy ra một chiều',
        'phản ứng thuận nghịch',
        'hydrogen hoá, xúc tác Ni, $t^\\circ$',
        'gốc acid béo không no bị oxygen không khí oxi hoá',
        'phản ứng ester hoá',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phản ứng ester hoá tạo ra ester, không phải phân huỷ ester.'],
      solution:
        'Thuỷ phân trong kiềm là xà phòng hoá (một chiều); trong acid là thuận nghịch; dầu cộng $\\mathrm{H_2}$ là hydrogen hoá (Ni, $t^\\circ$); dầu mỡ ôi do gốc không no bị oxi hoá. Ester hoá là phản ứng tạo ester từ acid và alcohol.',
    },
    {
      type: 'choice',
      prompt: 'Giặt quần áo bằng nước cứng, nên dùng chất nào để giặt sạch và không để lại váng?',
      options: [
        'Sodium lauryl sulfate $\\mathrm{CH_3[CH_2]_{11}OSO_3Na}$',
        'Sodium stearate $\\mathrm{C_{17}H_{35}COONa}$',
        'Sodium palmitate $\\mathrm{C_{15}H_{31}COONa}$',
        'Tristearin',
      ],
      answer: 0,
      hints: ['Muối calcium, magnesium của acid béo không tan.'],
      solution:
        'Sodium lauryl sulfate là chất giặt rửa tổng hợp, không tạo kết tủa với $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. Sodium stearate, sodium palmitate là xà phòng, tạo kết tủa trong nước cứng; tristearin là chất béo, không có tác dụng giặt rửa.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về acid béo omega-3?',
      options: [
        'Là acid béo không no có liên kết đôi đầu tiên ở carbon số $3$ tính từ nhóm methyl.',
        'Là acid béo no có $3$ nguyên tử carbon.',
        'Là acid béo có liên kết đôi ở carbon số $3$ tính từ nhóm carboxyl.',
        'Có nhiều trong mỡ lợn, mỡ bò.',
      ],
      answer: 0,
      hints: ['Chữ omega ($\\omega$) chỉ đầu mạch phía nhóm $\\mathrm{CH_3}$.'],
      solution:
        'Omega-3 là acid béo không no có liên kết đôi đầu tiên ở C số $3$ khi đánh số từ nhóm methyl, ví dụ $\\alpha$-linolenic acid; có nhiều trong dầu cá biển. Mỡ động vật chứa chủ yếu gốc acid béo no.',
    },
  ],
  takeaways: [
    "Ester $\\mathrm{RCOOR'}$: tên gốc $\\mathrm{R'}$ + gốc carboxylate; sôi thấp hơn acid, alcohol có phân tử khối tương đương.",
    'Thuỷ phân trong acid thuận nghịch; xà phòng hoá một chiều, tạo muối và alcohol (với chất béo là glycerol).',
    "Xác định ester: alcohol cho gốc $\\mathrm{R'}$, muối hoặc acid cho gốc $\\mathrm{RCOO}$; với ester đơn chức $n_{\\text{ester}} = n_{\\mathrm{NaOH}} = n_{\\text{muối}}$.",
    'Chất béo: $n_{\\mathrm{NaOH}} = 3\\,n_{\\text{chất béo}} = 3\\,n_{\\text{glycerol}}$; gốc không no cộng $\\mathrm{H_2}$ và dễ bị oxi hoá.',
    'Xà phòng và chất giặt rửa có đầu ưa nước, đuôi kị nước; chất giặt rửa tổng hợp dùng được trong nước cứng.',
  ],
};
