/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Carbohydrate và cách phân loại: monosaccharide, disaccharide, polysaccharide. Glucose và fructose: trạng thái tự nhiên, cấu tạo mạch hở và mạch vòng, tính chất vật lí, tính chất hoá học (polyalcohol, nhóm carbonyl, nhóm OH hemiacetal, lên men) và ứng dụng.',
  intro:
    'Quả nho chín, mật ong và chai dịch truyền trong bệnh viện đều chứa những phân tử đường có cùng công thức $\\mathrm{C_6H_{12}O_6}$: glucose và fructose. Hai chất có cùng công thức phân tử nhưng khác nhau về cấu tạo. Vì sao glucose tráng được bạc lên thành ống nghiệm, và vì sao phân tử glucose trong dung dịch phần lớn lại ở dạng vòng?',
  objectives: [
    'Nêu được khái niệm và cách phân loại carbohydrate: monosaccharide, disaccharide, polysaccharide.',
    'Nêu được trạng thái tự nhiên, tính chất vật lí của glucose và fructose.',
    'Viết được công thức cấu tạo dạng mạch hở và dạng mạch vòng của glucose, fructose; gọi tên được α-glucose, β-glucose.',
    'Trình bày được tính chất hoá học của glucose và fructose: tính chất của polyalcohol, phản ứng với thuốc thử Tollens, với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm khi đun nóng, với nước bromine, phản ứng của nhóm OH hemiacetal và phản ứng lên men.',
    'Nêu được ứng dụng của glucose và fructose.',
  ],
  sections: [
    {
      heading: 'Khái niệm và phân loại carbohydrate',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Carbohydrate',
          text: 'Carbohydrate là những hợp chất hữu cơ tạp chức, thường có công thức chung là $\\mathrm{C_n(H_2O)_m}$. Ví dụ glucose $\\mathrm{C_6H_{12}O_6}$ là $\\mathrm{C_6(H_2O)_6}$, saccharose $\\mathrm{C_{12}H_{22}O_{11}}$ là $\\mathrm{C_{12}(H_2O)_{11}}$.',
        },
        {
          type: 'table',
          caption: 'Ba nhóm carbohydrate',
          head: ['Nhóm', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Monosaccharide',
              'Không bị thuỷ phân',
              'glucose, fructose ($\\mathrm{C_6H_{12}O_6}$)',
            ],
            [
              'Disaccharide',
              'Thuỷ phân hoàn toàn tạo hai phân tử monosaccharide',
              'saccharose, maltose ($\\mathrm{C_{12}H_{22}O_{11}}$)',
            ],
            [
              'Polysaccharide',
              'Thuỷ phân hoàn toàn tạo nhiều phân tử monosaccharide',
              'tinh bột, cellulose ($\\mathrm{(C_6H_{10}O_5)_n}$)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Trạng thái tự nhiên và tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Glucose có nhiều trong hầu hết các bộ phận của cây, nhất là trong quả chín (đặc biệt là quả nho). Glucose cũng có trong cơ thể người và động vật; nồng độ glucose trong máu người trưởng thành khoẻ mạnh khoảng $4{,}4$ đến $7{,}2$ mmol/L.',
            'Fructose có nhiều trong các loại quả ngọt và có nhiều nhất trong mật ong.',
            'Glucose và fructose là chất rắn kết tinh, không màu, dễ tan trong nước, có vị ngọt; fructose ngọt hơn glucose.',
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo của glucose và fructose',
      blocks: [
        {
          type: 'p',
          text: 'Glucose và fructose có cùng công thức phân tử $\\mathrm{C_6H_{12}O_6}$, là đồng phân của nhau. Mỗi chất tồn tại ở dạng mạch hở và dạng mạch vòng.',
        },
        {
          type: 'table',
          caption: 'Dạng mạch hở',
          head: ['Chất', 'Công thức cấu tạo mạch hở', 'Nhóm chức'],
          rows: [
            [
              'Glucose',
              '$\\mathrm{CH_2OH{-}CHOH{-}CHOH{-}CHOH{-}CHOH{-}CHO}$, viết gọn $\\mathrm{CH_2OH[CHOH]_4CHO}$',
              'năm nhóm $\\mathrm{{-}OH}$ và một nhóm aldehyde $\\mathrm{{-}CHO}$',
            ],
            [
              'Fructose',
              '$\\mathrm{CH_2OH{-}CHOH{-}CHOH{-}CHOH{-}CO{-}CH_2OH}$, viết gọn $\\mathrm{CH_2OH[CHOH]_3COCH_2OH}$',
              'năm nhóm $\\mathrm{{-}OH}$ và một nhóm ketone ở C2',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Dạng mạch vòng',
          text: 'Nhóm $\\mathrm{{-}OH}$ ở C5 cộng vào nhóm $\\mathrm{C{=}O}$ tạo dạng vòng. Glucose tạo vòng $6$ cạnh (gồm $5$ nguyên tử C và $1$ nguyên tử O), nhóm $\\mathrm{{-}OH}$ mới ở C1 gọi là nhóm OH hemiacetal. Fructose tạo vòng $5$ cạnh, nhóm $\\mathrm{{-}OH}$ mới ở C2 gọi là nhóm OH hemiketal.',
        },
        {
          type: 'p',
          text: 'Khi nhóm OH hemiacetal ở C1 nằm phía dưới mặt phẳng vòng, ta có α-glucose; khi nằm phía trên, ta có β-glucose. Tương tự với α-fructose và β-fructose (nhóm OH hemiketal ở C2). Trong dung dịch, hai dạng vòng chuyển hoá qua lại với nhau qua dạng mạch hở, và dạng vòng chiếm phần lớn.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Tính chất của polyalcohol. Phân tử glucose, fructose có nhiều nhóm $\\mathrm{{-}OH}$ kề nhau nên hoà tan $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm ở nhiệt độ thường, tạo dung dịch màu xanh lam:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{C_6H_{12}O_6} + \\mathrm{Cu(OH)_2} \\rightarrow \\mathrm{(C_6H_{11}O_6)_2Cu} + 2\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Tính chất của nhóm aldehyde. Nhóm $\\mathrm{{-}CHO}$ của glucose bị oxi hoá bởi thuốc thử Tollens (tạo lớp bạc bám trên thành ống nghiệm), bởi $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm khi đun nóng (tạo kết tủa đỏ gạch $\\mathrm{Cu_2O}$) và bởi nước bromine (làm mất màu nước bromine):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2OH[CHOH]_4CHO} + 2\\mathrm{[Ag(NH_3)_2]OH} \\xrightarrow{t^\\circ} \\mathrm{CH_2OH[CHOH]_4COONH_4} + 2\\mathrm{Ag} + 3\\mathrm{NH_3} + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2OH[CHOH]_4CHO} + 2\\mathrm{Cu(OH)_2} + \\mathrm{NaOH} \\xrightarrow{t^\\circ} \\mathrm{CH_2OH[CHOH]_4COONa} + \\mathrm{Cu_2O} + 3\\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_2OH[CHOH]_4CHO} + \\mathrm{Br_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_2OH[CHOH]_4COOH} + 2\\mathrm{HBr}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Fructose',
          text: 'Trong môi trường kiềm, fructose chuyển hoá thành glucose, nên fructose cũng phản ứng với thuốc thử Tollens và với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm khi đun nóng. Fructose không làm mất màu nước bromine: dùng nước bromine để phân biệt glucose với fructose.',
        },
        { type: 'widget', name: 'thuoc-thu' },
        {
          type: 'p',
          text: 'Phản ứng của nhóm OH hemiacetal. Ở dạng vòng, nhóm OH hemiacetal của glucose phản ứng với methanol khi có HCl khan làm xúc tác, tạo methyl glucoside. Khi đó vòng không còn mở ra được thành dạng mạch hở.',
        },
        {
          type: 'p',
          text: 'Phản ứng lên men. Dưới tác dụng của enzyme của vi sinh vật, glucose bị lên men tạo ethanol (lên men rượu) hoặc lactic acid (lên men lactic, xảy ra khi muối dưa, làm sữa chua):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme},\\ 30\\text{–}35^\\circ\\mathrm{C}} 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{enzyme}} 2\\mathrm{CH_3CH(OH)COOH}',
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Glucose là chất dinh dưỡng có giá trị, dùng làm thuốc tăng lực, pha dịch truyền cho người bệnh; dùng trong công nghiệp thực phẩm, tráng gương, tráng ruột phích và sản xuất ethanol.',
            'Fructose dùng trong công nghiệp thực phẩm (chất tạo ngọt cho đồ uống, bánh kẹo) và trong y học.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Glucose đóng vòng từ mạch hở',
    instruction:
      'Chọn glucose hoặc fructose và nhóm $\\mathrm{{-}OH}$ sẽ cộng vào nhóm $\\mathrm{C{=}O}$, rồi bấm "Đóng vòng" (hoặc kéo thanh tiến trình). Quan sát vòng tạo thành có bao nhiêu cạnh, nhóm OH mới xuất hiện ở đâu, và đổi vị trí của nó để được dạng α hoặc β.',
  },
  examples: [
    {
      problem:
        'Đun nóng dung dịch chứa $27$ g glucose với lượng dư thuốc thử Tollens. Tính khối lượng bạc thu được, biết phản ứng xảy ra hoàn toàn.',
      steps: [
        '$n_{\\text{glucose}} = \\dfrac{27}{180} = 0{,}15$ mol.',
        'Theo phương trình, mỗi mol glucose tạo $2$ mol Ag: $n_{\\mathrm{Ag}} = 2 \\cdot 0{,}15 = 0{,}3$ mol.',
        '$m_{\\mathrm{Ag}} = 0{,}3 \\cdot 108 = 32{,}4$ g.',
      ],
      answer: 'Thu được $32{,}4$ g bạc.',
    },
    {
      problem:
        'Lên men $36$ g glucose thành ethanol với hiệu suất $80\\%$. Tính khối lượng ethanol thu được và thể tích khí $\\mathrm{CO_2}$ sinh ra (đkc, $24{,}79$ L/mol).',
      steps: [
        '$n_{\\text{glucose}} = \\dfrac{36}{180} = 0{,}2$ mol.',
        '$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$: theo lí thuyết $n_{\\mathrm{C_2H_5OH}} = n_{\\mathrm{CO_2}} = 0{,}4$ mol.',
        'Với hiệu suất $80\\%$: $n = 0{,}4 \\cdot 0{,}8 = 0{,}32$ mol.',
        '$m_{\\mathrm{C_2H_5OH}} = 0{,}32 \\cdot 46 = 14{,}72$ g; $V_{\\mathrm{CO_2}} = 0{,}32 \\cdot 24{,}79 \\approx 7{,}93$ L.',
      ],
      answer: 'Thu được $14{,}72$ g ethanol và khoảng $7{,}93$ L khí $\\mathrm{CO_2}$.',
    },
    {
      problem:
        'Có hai lọ mất nhãn đựng dung dịch glucose và dung dịch fructose. Trình bày cách phân biệt.',
      steps: [
        'Cả hai chất đều hoà tan $\\mathrm{Cu(OH)_2}$ và đều phản ứng với thuốc thử Tollens (fructose chuyển thành glucose trong môi trường kiềm), nên không dùng các thuốc thử này được.',
        'Nhỏ nước bromine vào mỗi mẫu: mẫu làm mất màu nước bromine là glucose (nhóm $\\mathrm{{-}CHO}$ bị oxi hoá).',
        'Mẫu không làm mất màu nước bromine là fructose.',
      ],
      answer: 'Dùng nước bromine: glucose làm mất màu, fructose thì không.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây thuộc loại monosaccharide?',
      options: ['Glucose', 'Saccharose', 'Maltose', 'Tinh bột'],
      answer: 0,
      hints: ['Monosaccharide là carbohydrate không bị thuỷ phân.'],
      solution:
        'Glucose là monosaccharide. Saccharose, maltose là disaccharide; tinh bột là polysaccharide.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng cho cả glucose và fructose?',
      options: [
        'Có công thức phân tử $\\mathrm{C_6H_{12}O_6}$.',
        'Hoà tan $\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường tạo dung dịch xanh lam.',
        'Phản ứng với thuốc thử Tollens tạo bạc.',
        'Làm mất màu nước bromine.',
        'Phân tử dạng mạch hở có nhóm $\\mathrm{{-}CHO}$.',
      ],
      answers: [0, 1, 2],
      hints: [
        'Fructose có nhóm ketone, không có nhóm $\\mathrm{{-}CHO}$.',
        'Nước bromine không phải môi trường kiềm.',
      ],
      solution:
        'Cả hai là $\\mathrm{C_6H_{12}O_6}$, đều là polyalcohol (hoà tan $\\mathrm{Cu(OH)_2}$) và đều tráng bạc (fructose chuyển thành glucose trong môi trường kiềm). Chỉ glucose có nhóm $\\mathrm{{-}CHO}$ và làm mất màu nước bromine.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử dùng để phân biệt dung dịch glucose với dung dịch fructose là',
      options: [
        'nước bromine',
        'thuốc thử Tollens',
        '$\\mathrm{Cu(OH)_2}$ ở nhiệt độ thường',
        '$\\mathrm{Cu(OH)_2}$ trong NaOH, đun nóng',
      ],
      answer: 0,
      hints: ['Tìm thuốc thử chỉ phản ứng với nhóm $\\mathrm{{-}CHO}$ và không ở môi trường kiềm.'],
      solution:
        'Glucose làm mất màu nước bromine, fructose thì không. Ba thuốc thử còn lại cho cùng hiện tượng với hai chất.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân tử α-glucose, nhóm OH hemiacetal gắn với nguyên tử carbon nào?',
      options: ['C1', 'C2', 'C5', 'C6'],
      answer: 0,
      hints: ['Nhóm OH hemiacetal sinh ra từ nhóm $\\mathrm{{-}CHO}$ khi đóng vòng.'],
      solution:
        'Nhóm $\\mathrm{{-}OH}$ ở C5 cộng vào nhóm $\\mathrm{{-}CHO}$ ở C1, nên nhóm OH hemiacetal nằm ở C1 (phía dưới mặt phẳng vòng ở dạng α).',
    },
    {
      type: 'number',
      prompt: 'Phân tử glucose dạng mạch hở có bao nhiêu nhóm hydroxy ($\\mathrm{{-}OH}$)?',
      answer: 5,
      hints: ['Viết $\\mathrm{CH_2OH[CHOH]_4CHO}$ và đếm.'],
      solution:
        '$\\mathrm{CH_2OH}$ có $1$ nhóm, $\\mathrm{[CHOH]_4}$ có $4$ nhóm: tổng $5$ nhóm $\\mathrm{{-}OH}$.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng dung dịch chứa $9$ g glucose với lượng dư thuốc thử Tollens đến phản ứng hoàn toàn. Tính khối lượng bạc thu được.',
      answer: 10.8,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_{\\mathrm{Ag}} = 2\\,n_{\\text{glucose}}$.'],
      solution:
        '$n_{\\text{glucose}} = \\dfrac{9}{180} = 0{,}05$ mol, $n_{\\mathrm{Ag}} = 0{,}1$ mol, $m_{\\mathrm{Ag}} = 0{,}1 \\cdot 108 = 10{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Muốn thu được $21{,}6$ g bạc bằng phản ứng của glucose với thuốc thử Tollens (hiệu suất $100\\%$) cần bao nhiêu gam glucose?',
      answer: 18,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Tính số mol Ag trước, rồi chia đôi.'],
      solution:
        '$n_{\\mathrm{Ag}} = \\dfrac{21{,}6}{108} = 0{,}2$ mol, $n_{\\text{glucose}} = 0{,}1$ mol, $m = 0{,}1 \\cdot 180 = 18$ g.',
    },
    {
      type: 'number',
      prompt:
        'Lên men $90$ g glucose thành ethanol với hiệu suất $75\\%$. Tính thể tích khí $\\mathrm{CO_2}$ thu được (đkc, $24{,}79$ L/mol), làm tròn đến hàng phần trăm.',
      answer: 18.59,
      tolerance: 0.02,
      unit: 'L',
      hints: [
        '$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$.',
        'Nhân số mol $\\mathrm{CO_2}$ lí thuyết với $0{,}75$.',
      ],
      solution:
        '$n_{\\text{glucose}} = 0{,}5$ mol, $n_{\\mathrm{CO_2}} = 2 \\cdot 0{,}5 \\cdot 0{,}75 = 0{,}75$ mol, $V = 0{,}75 \\cdot 24{,}79 \\approx 18{,}59$ L.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi thí nghiệm với glucose với hiện tượng quan sát được.',
      left: [
        '$\\mathrm{Cu(OH)_2}$ trong NaOH, nhiệt độ thường',
        '$\\mathrm{Cu(OH)_2}$ trong NaOH, đun nóng',
        'Thuốc thử Tollens, đun nóng nhẹ',
        'Nước bromine',
      ],
      right: [
        'dung dịch màu xanh lam',
        'kết tủa đỏ gạch',
        'lớp bạc sáng bám trên thành ống nghiệm',
        'mất màu vàng',
        'màu xanh tím',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Màu xanh tím là phản ứng của tinh bột với iodine, không phải của glucose.'],
      solution:
        'Nhiệt độ thường: phức xanh lam (polyalcohol). Đun nóng: $\\mathrm{Cu_2O}$ đỏ gạch. Tollens: bạc. Nước bromine: mất màu.',
    },
  ],
  takeaways: [
    'Carbohydrate thường có công thức $\\mathrm{C_n(H_2O)_m}$; gồm monosaccharide, disaccharide và polysaccharide.',
    'Glucose $\\mathrm{CH_2OH[CHOH]_4CHO}$ và fructose $\\mathrm{CH_2OH[CHOH]_3COCH_2OH}$ là đồng phân $\\mathrm{C_6H_{12}O_6}$.',
    'Nhóm $\\mathrm{{-}OH}$ ở C5 cộng vào nhóm $\\mathrm{C{=}O}$: glucose vòng $6$ cạnh (α, β theo vị trí OH hemiacetal ở C1), fructose vòng $5$ cạnh.',
    'Cả hai hoà tan $\\mathrm{Cu(OH)_2}$, tráng bạc, khử $\\mathrm{Cu(OH)_2}$ thành $\\mathrm{Cu_2O}$ khi đun nóng; chỉ glucose làm mất màu nước bromine.',
    'Glucose lên men tạo ethanol và $\\mathrm{CO_2}$ hoặc lactic acid.',
  ],
};
