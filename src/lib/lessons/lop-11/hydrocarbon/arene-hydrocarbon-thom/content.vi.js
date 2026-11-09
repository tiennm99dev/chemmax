/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Arene: khái niệm, dãy đồng đẳng benzene, cấu tạo vòng benzene, danh pháp, tính chất vật lí, phản ứng thế halogen và nitro hoá, phản ứng cộng, phản ứng oxi hoá, ứng dụng và điều chế.',
  intro:
    'Benzene có công thức $\\mathrm{C_6H_6}$, ít hydrogen hơn hexane tới $8$ nguyên tử, nên tưởng như phải hoạt động mạnh như alkene. Thế nhưng benzene không làm mất màu nước bromine, cũng không làm mất màu dung dịch thuốc tím. Bí mật nằm ở cấu tạo đặc biệt của vòng benzene.',
  objectives: [
    'Nêu được khái niệm arene, công thức chung của dãy đồng đẳng benzene và gọi được tên một số arene đơn giản.',
    'Mô tả được cấu tạo của phân tử benzene: vòng sáu cạnh đều, phẳng, hệ electron π liên hợp.',
    'Viết được phương trình phản ứng thế (halogen hoá, nitro hoá), phản ứng cộng và phản ứng oxi hoá của benzene, toluene.',
    'Vận dụng được quy tắc thế vào vòng benzene của toluene (ưu tiên ortho, para).',
    'Nêu được ứng dụng và tác hại của một số arene, cách điều chế arene trong công nghiệp.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Arene',
          text: 'Arene (hydrocarbon thơm) là những hydrocarbon trong phân tử có chứa một hay nhiều vòng benzene. Benzene $\\mathrm{C_6H_6}$ và các đồng đẳng của nó có công thức chung $\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$).',
        },
        {
          type: 'p',
          text: 'Tên thay thế của các đồng đẳng benzene: số chỉ vị trí nhánh + tên nhánh + benzene. Khi vòng có hai nhánh, vị trí $1,2$ gọi là ortho (o-), $1,3$ là meta (m-), $1,4$ là para (p-).',
        },
        {
          type: 'table',
          caption: 'Tên của một số arene',
          head: ['Công thức', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{C_6H_5CH_3}$', 'methylbenzene', 'toluene'],
            ['$\\mathrm{C_6H_5CH_2CH_3}$', 'ethylbenzene', 'ethylbenzene'],
            ['$\\mathrm{1,2\\text{-}C_6H_4(CH_3)_2}$', '1,2-dimethylbenzene', 'o-xylene'],
            ['$\\mathrm{1,3\\text{-}C_6H_4(CH_3)_2}$', '1,3-dimethylbenzene', 'm-xylene'],
            ['$\\mathrm{1,4\\text{-}C_6H_4(CH_3)_2}$', '1,4-dimethylbenzene', 'p-xylene'],
            ['$\\mathrm{C_6H_5CH=CH_2}$', 'vinylbenzene', 'styrene'],
            [
              '$\\mathrm{C_{10}H_8}$ (hai vòng benzene chung một cạnh)',
              'naphthalene',
              'băng phiến',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo của benzene',
      blocks: [
        {
          type: 'list',
          items: [
            'Sáu nguyên tử C tạo thành hình lục giác đều; cả $6$ nguyên tử C và $6$ nguyên tử H cùng nằm trên một mặt phẳng, các góc liên kết đều bằng $120^\\circ$.',
            'Sáu electron π của vòng tạo thành hệ liên hợp chung, phân bố đều ở phía trên và phía dưới mặt phẳng vòng.',
            'Sáu liên kết C–C dài bằng nhau, $0{,}139$ nm, nằm giữa độ dài liên kết đơn ($0{,}154$ nm) và liên kết đôi ($0{,}134$ nm).',
          ],
        },
        {
          type: 'p',
          text: 'Benzene thường được biểu diễn bằng công thức Kekulé (ba liên kết đôi xen kẽ) hoặc bằng lục giác có vòng tròn bên trong để nhấn mạnh hệ electron π dàn đều. Hệ π liên hợp làm vòng benzene rất bền, nên benzene dễ tham gia phản ứng thế, khó tham gia phản ứng cộng và bền với chất oxi hoá.',
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Benzene, toluene, xylene là chất lỏng không màu, có mùi đặc trưng; naphthalene là chất rắn, dễ thăng hoa.',
            'Arene không tan trong nước, nhẹ hơn nước, tan trong dung môi hữu cơ và hoà tan được nhiều chất hữu cơ khác.',
            'Benzene rất độc: hít phải lâu dài có thể gây ung thư máu. Cần dùng các arene trong tủ hút, tránh hít hơi.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng thế nguyên tử H của vòng benzene',
          text: 'Halogen hoá: $\\mathrm{C_6H_6} + \\mathrm{Br_2} \\xrightarrow{\\mathrm{FeBr_3},\\,t^\\circ} \\mathrm{C_6H_5Br} + \\mathrm{HBr}$. Nitro hoá: $\\mathrm{C_6H_6} + \\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4}\\ \\text{đặc},\\,t^\\circ} \\mathrm{C_6H_5NO_2} + \\mathrm{H_2O}$.',
        },
        {
          type: 'p',
          text: 'Nitrobenzene là chất lỏng màu vàng nhạt, nặng hơn nước. Toluene tham gia phản ứng thế dễ hơn benzene, và nguyên tử H ở vị trí ortho hoặc para so với nhóm $\\mathrm{CH_3}$ được ưu tiên thay thế:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5CH_3} + \\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4},\\,t^\\circ} o\\text{-}\\mathrm{CH_3C_6H_4NO_2},\\ p\\text{-}\\mathrm{CH_3C_6H_4NO_2} + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Phản ứng cộng chỉ xảy ra trong điều kiện khắc nghiệt và phá vỡ hệ thơm:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_6} + 3\\mathrm{H_2} \\xrightarrow{\\mathrm{Ni},\\,t^\\circ} \\mathrm{C_6H_{12}}\\ (\\text{cyclohexane}) \\qquad \\mathrm{C_6H_6} + 3\\mathrm{Cl_2} \\xrightarrow{\\mathrm{as}} \\mathrm{C_6H_6Cl_6}',
        },
        {
          type: 'p',
          text: 'Benzene không làm mất màu dung dịch $\\mathrm{KMnO_4}$. Toluene không phản ứng ở nhiệt độ thường nhưng làm mất màu dung dịch $\\mathrm{KMnO_4}$ khi đun nóng, nhóm $\\mathrm{CH_3}$ bị oxi hoá:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_5CH_3} + 2\\mathrm{KMnO_4} \\xrightarrow{t^\\circ} \\mathrm{C_6H_5COOK} + 2\\mathrm{MnO_2} + \\mathrm{KOH} + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Arene cháy trong không khí cho ngọn lửa nhiều khói đen (muội than), do tỉ lệ carbon cao:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_nH_{2n-6}} + \\dfrac{3n-3}{2}\\mathrm{O_2} \\xrightarrow{t^\\circ} n\\mathrm{CO_2} + (n-3)\\mathrm{H_2O}',
        },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'table',
          head: ['Arene', 'Ứng dụng'],
          rows: [
            ['Benzene', 'Nguyên liệu sản xuất styrene, phenol, aniline, phẩm nhuộm, dược phẩm'],
            ['Toluene', 'Dung môi; sản xuất thuốc nổ TNT (trinitrotoluene)'],
            ['Xylene', 'Dung môi pha sơn, mực in'],
            ['Styrene', 'Sản xuất polystyrene (PS) làm hộp xốp, đồ nhựa'],
            ['Naphthalene', 'Băng phiến chống gián, mối mọt; sản xuất phẩm nhuộm'],
          ],
        },
        {
          type: 'p',
          text: 'Trong công nghiệp, benzene, toluene và xylene được lấy chủ yếu từ quá trình reforming các phân đoạn dầu mỏ và từ nhựa than đá. Ethylbenzene được điều chế từ benzene và ethylene, rồi tách hydrogen thành styrene.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình benzene và phản ứng thế',
    instruction:
      'Kéo hoặc dùng phím mũi tên để xoay mô hình, chuyển giữa công thức Kekulé và đám mây π. Sau đó chọn benzene hoặc toluene, chọn phản ứng thế và bấm số một vị trí trên vòng để thay nguyên tử H ở đó. So sánh số sản phẩm của benzene với các vị trí ortho, meta, para của toluene.',
  },
  examples: [
    {
      problem:
        'Viết công thức cấu tạo và gọi tên các arene có công thức phân tử $\\mathrm{C_8H_{10}}$.',
      steps: [
        '$\\mathrm{C_8H_{10}}$ ứng với $\\mathrm{C_nH_{2n-6}}$ ($n = 8$): một vòng benzene và $2$ nguyên tử C ở nhánh.',
        'Một nhánh $\\mathrm{C_2H_5}$: $\\mathrm{C_6H_5CH_2CH_3}$, ethylbenzene.',
        'Hai nhánh $\\mathrm{CH_3}$ ở vị trí $1,2$; $1,3$ hoặc $1,4$: o-xylene, m-xylene, p-xylene.',
      ],
      answer: 'Có $4$ arene: ethylbenzene, o-xylene, m-xylene và p-xylene.',
    },
    {
      problem:
        'Cho toluene tác dụng với bromine (xúc tác $\\mathrm{FeBr_3}$, tỉ lệ mol $1 : 1$). Viết phương trình và cho biết sản phẩm chính.',
      steps: [
        'Br thế nguyên tử H trên vòng benzene, không thế ở nhóm $\\mathrm{CH_3}$ khi có xúc tác $\\mathrm{FeBr_3}$.',
        'Nhóm $\\mathrm{CH_3}$ định hướng thế vào vị trí ortho và para.',
        '$\\mathrm{C_6H_5CH_3} + \\mathrm{Br_2} \\xrightarrow{\\mathrm{FeBr_3},\\,t^\\circ} \\mathrm{CH_3C_6H_4Br} + \\mathrm{HBr}$.',
      ],
      answer: 'Sản phẩm chính là o-bromotoluene và p-bromotoluene.',
    },
    {
      problem:
        'Nitro hoá $15{,}6$ g benzene bằng hỗn hợp $\\mathrm{HNO_3}$ đặc và $\\mathrm{H_2SO_4}$ đặc, hiệu suất $80\\%$. Tính khối lượng nitrobenzene thu được.',
      steps: [
        '$n_{\\mathrm{C_6H_6}} = \\dfrac{15{,}6}{78} = 0{,}2$ mol.',
        'Theo phương trình, $n_{\\mathrm{C_6H_5NO_2}}$ lí thuyết $= 0{,}2$ mol, $m = 0{,}2 \\cdot 123 = 24{,}6$ g.',
        'Với hiệu suất $80\\%$: $m = 24{,}6 \\cdot 0{,}8 = 19{,}68$ g.',
      ],
      answer: 'Thu được $19{,}68$ g nitrobenzene.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của dãy đồng đẳng benzene là',
      options: [
        '$\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$)',
        '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 6$)',
        '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 6$)',
      ],
      answer: 0,
      hints: ['Thử với benzene $\\mathrm{C_6H_6}$ và toluene $\\mathrm{C_7H_8}$.'],
      solution:
        'Với $n = 6$: $2n - 6 = 6$; với $n = 7$: $2n - 6 = 8$. Công thức chung là $\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$).',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu arene có công thức phân tử $\\mathrm{C_8H_{10}}$?',
      answer: 4,
      hints: [
        'Vòng benzene giữ $6$ C, còn $2$ C ở nhánh.',
        'Hai C có thể là một nhánh ethyl hoặc hai nhánh methyl ở ba cách đặt khác nhau.',
      ],
      solution: 'Ethylbenzene, o-xylene, m-xylene, p-xylene: $4$ arene.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về các liên kết C–C trong phân tử benzene?',
      options: [
        'Sáu liên kết dài bằng nhau, nằm giữa độ dài liên kết đơn và liên kết đôi.',
        'Có ba liên kết đơn dài và ba liên kết đôi ngắn xen kẽ nhau.',
        'Sáu liên kết đều là liên kết đơn như trong cyclohexane.',
        'Sáu liên kết đều là liên kết đôi.',
      ],
      answer: 0,
      hints: ['Nhớ lại độ dài $0{,}139$ nm so với $0{,}154$ nm và $0{,}134$ nm.'],
      solution:
        'Electron π dàn đều trên cả vòng, nên sáu liên kết C–C bằng nhau, dài $0{,}139$ nm, nằm giữa liên kết đơn ($0{,}154$ nm) và liên kết đôi ($0{,}134$ nm).',
    },
    {
      type: 'multi',
      prompt:
        'Cho toluene tác dụng với $\\mathrm{HNO_3}$ đặc (xúc tác $\\mathrm{H_2SO_4}$ đặc, tỉ lệ mol $1 : 1$). Những chất nào là sản phẩm chính?',
      options: ['o-nitrotoluene', 'p-nitrotoluene', 'm-nitrotoluene', 'Nitrobenzene'],
      answers: [0, 1],
      hints: ['Nhóm $\\mathrm{CH_3}$ gắn trên vòng định hướng thế vào những vị trí nào?'],
      solution:
        'Nhóm $\\mathrm{CH_3}$ định hướng thế vào vị trí ortho và para, nên sản phẩm chính là o-nitrotoluene và p-nitrotoluene. Sản phẩm meta tạo thành rất ít; nitrobenzene không tạo thành vì nhóm $\\mathrm{CH_3}$ không bị tách ra.',
    },
    {
      type: 'number',
      prompt:
        'Nitro hoá hoàn toàn $7{,}8$ g benzene thành nitrobenzene. Tính khối lượng nitrobenzene thu được.',
      answer: 12.3,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$M_{\\mathrm{C_6H_6}} = 78$, $M_{\\mathrm{C_6H_5NO_2}} = 123$ g/mol.',
        'Một mol benzene cho một mol nitrobenzene.',
      ],
      solution:
        '$n_{\\mathrm{C_6H_6}} = \\dfrac{7{,}8}{78} = 0{,}1$ mol, $m_{\\mathrm{C_6H_5NO_2}} = 0{,}1 \\cdot 123 = 12{,}3$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu mol $\\mathrm{H_2}$ để cộng hoàn toàn vào $0{,}1$ mol benzene, tạo cyclohexane?',
      answer: 0.3,
      tolerance: 0.001,
      unit: 'mol',
      hints: [
        'Viết phương trình $\\mathrm{C_6H_6} + x\\mathrm{H_2} \\rightarrow \\mathrm{C_6H_{12}}$ và tìm $x$.',
      ],
      solution:
        '$\\mathrm{C_6H_6} + 3\\mathrm{H_2} \\xrightarrow{\\mathrm{Ni},\\,t^\\circ} \\mathrm{C_6H_{12}}$, nên cần $3 \\cdot 0{,}1 = 0{,}3$ mol $\\mathrm{H_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử nào phân biệt được benzene và toluene?',
      options: [
        'Dung dịch $\\mathrm{KMnO_4}$, đun nóng',
        'Nước bromine',
        'Dung dịch $\\mathrm{AgNO_3}$ trong $\\mathrm{NH_3}$',
        'Nước',
      ],
      answer: 0,
      hints: ['Chất nào có nhóm $\\mathrm{CH_3}$ bị oxi hoá được?'],
      solution:
        'Khi đun nóng, toluene làm mất màu tím của $\\mathrm{KMnO_4}$ (tạo kết tủa $\\mathrm{MnO_2}$), benzene thì không. Nước bromine, $\\mathrm{AgNO_3/NH_3}$ và nước không gây hiện tượng khác nhau với hai chất.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi công thức với tên thông thường của nó.',
      left: [
        '$\\mathrm{C_6H_5CH_3}$',
        '$\\mathrm{C_6H_5CH=CH_2}$',
        '$\\mathrm{1,4\\text{-}C_6H_4(CH_3)_2}$',
        '$\\mathrm{C_{10}H_8}$',
      ],
      right: ['Toluene', 'Styrene', 'p-xylene', 'Naphthalene', 'o-xylene'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Vị trí $1,4$ là para; vị trí $1,2$ là ortho.'],
      solution:
        'Methylbenzene là toluene; vinylbenzene là styrene; 1,4-dimethylbenzene là p-xylene; $\\mathrm{C_{10}H_8}$ hai vòng là naphthalene.',
    },
    {
      type: 'number',
      prompt: 'Đốt cháy hoàn toàn $0{,}1$ mol toluene. Tính số mol $\\mathrm{CO_2}$ thu được.',
      answer: 0.7,
      tolerance: 0.001,
      unit: 'mol',
      hints: ['Toluene là $\\mathrm{C_7H_8}$: mỗi phân tử có bao nhiêu C?'],
      solution:
        '$\\mathrm{C_7H_8} + 9\\mathrm{O_2} \\xrightarrow{t^\\circ} 7\\mathrm{CO_2} + 4\\mathrm{H_2O}$, nên $n_{\\mathrm{CO_2}} = 7 \\cdot 0{,}1 = 0{,}7$ mol.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Tất cả các nguyên tử trong phân tử benzene cùng nằm trên một mặt phẳng.',
        'Benzene dễ tham gia phản ứng thế, khó tham gia phản ứng cộng.',
        'Benzene làm mất màu nước bromine như ethylene.',
        'Toluene được dùng để sản xuất thuốc nổ TNT.',
      ],
      answers: [0, 1, 3],
      hints: ['Hệ π liên hợp làm vòng benzene bền.'],
      solution:
        'Benzene phẳng, dễ thế, khó cộng; toluene là nguyên liệu sản xuất TNT. Benzene không phản ứng với nước bromine (chỉ thế với $\\mathrm{Br_2}$ khan khi có xúc tác $\\mathrm{FeBr_3}$), nên phát biểu so sánh với ethylene là sai.',
    },
  ],
  takeaways: [
    'Arene chứa vòng benzene; dãy đồng đẳng benzene có công thức chung $\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$).',
    'Benzene là vòng sáu cạnh đều, phẳng, sáu liên kết C–C bằng nhau ($0{,}139$ nm), sáu electron π tạo hệ liên hợp bền.',
    'Benzene dễ thế (halogen hoá với xúc tác $\\mathrm{FeBr_3}$, nitro hoá với $\\mathrm{H_2SO_4}$ đặc), khó cộng, bền với chất oxi hoá.',
    'Toluene thế dễ hơn benzene, ưu tiên vị trí ortho và para; nhóm $\\mathrm{CH_3}$ bị $\\mathrm{KMnO_4}$ oxi hoá khi đun nóng.',
    'Arene là nguyên liệu cho chất dẻo, phẩm nhuộm, thuốc nổ, dung môi; benzene rất độc.',
  ],
};
