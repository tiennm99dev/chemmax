/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Base là hợp chất có nguyên tử kim loại liên kết với nhóm hydroxide; khi tan trong nước base tạo ra ion OH-, base tan gọi là kiềm. Dung dịch base làm quỳ tím hoá xanh, phenolphthalein hoá hồng và tác dụng với acid tạo muối và nước. Thang pH từ 0 đến 14 cho biết dung dịch có môi trường acid, trung tính hay base.',
  intro:
    'Xà phòng, nước vôi trong, thuốc muối chữa đau dạ dày đều chứa những chất ngược với acid: chúng làm mất vị chua và khử được acid. Đó là các base. Làm sao biết một dung dịch là acid hay base, và mạnh hay yếu đến đâu? Các nhà hoá học dùng một thang số đơn giản: thang pH.',
  objectives: [
    'Nêu được khái niệm base (tạo ra ion $\\mathrm{OH^-}$); nêu được kiềm là các base tan tốt trong nước.',
    'Tiến hành được thí nghiệm base làm đổi màu chất chỉ thị, phản ứng với acid tạo muối; nêu và giải thích được hiện tượng, viết được phương trình hoá học.',
    'Nêu được thang pH, sử dụng pH để đánh giá độ acid, độ base của dung dịch.',
    'Tiến hành được một số thí nghiệm đo pH (bằng giấy chỉ thị) một số loại thực phẩm (đồ uống, hoa quả...).',
    'Liên hệ được pH trong dạ dày, trong máu, trong nước mưa, đất.',
  ],
  sections: [
    {
      heading: 'Khái niệm base',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Base',
          text: 'Base là những hợp chất trong phân tử có nguyên tử kim loại liên kết với nhóm hydroxide ($\\mathrm{-OH}$). Khi tan trong nước, base tạo ra ion $\\mathrm{OH^-}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{NaOH} \\rightarrow \\mathrm{Na^+} + \\mathrm{OH^-} \\qquad \\mathrm{Ba(OH)_2} \\rightarrow \\mathrm{Ba^{2+}} + 2\\mathrm{OH^-}',
        },
        {
          type: 'p',
          text: 'Số nhóm $\\mathrm{OH}$ trong phân tử base bằng hoá trị của kim loại. Tên base: tên kim loại (kèm hoá trị nếu kim loại có nhiều hoá trị) + hydroxide.',
        },
        {
          type: 'table',
          caption: 'Phân loại base theo tính tan trong nước',
          head: ['Loại', 'Ví dụ'],
          rows: [
            [
              'Base tan (kiềm)',
              '$\\mathrm{NaOH}$ sodium hydroxide, $\\mathrm{KOH}$ potassium hydroxide, $\\mathrm{Ba(OH)_2}$ barium hydroxide, $\\mathrm{Ca(OH)_2}$ calcium hydroxide (ít tan)',
            ],
            [
              'Base không tan',
              '$\\mathrm{Cu(OH)_2}$ copper(II) hydroxide, $\\mathrm{Fe(OH)_3}$ iron(III) hydroxide, $\\mathrm{Mg(OH)_2}$ magnesium hydroxide',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kiềm',
          text: 'Những base tan được trong nước gọi là kiềm. Dung dịch kiềm làm bục vải, giấy và ăn mòn da, nên phải cẩn thận khi dùng.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của base',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Làm đổi màu chất chỉ thị',
          text: 'Dung dịch base (kiềm) làm quỳ tím chuyển sang màu xanh và làm dung dịch phenolphthalein không màu chuyển sang màu hồng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Tác dụng với acid',
          text: 'Base tác dụng với acid tạo thành muối và nước. Phản ứng giữa acid và base được gọi là phản ứng trung hoà.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{NaOH} + \\mathrm{HCl} &\\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O} \\\\ \\mathrm{Cu(OH)_2} + \\mathrm{H_2SO_4} &\\rightarrow \\mathrm{CuSO_4} + 2\\mathrm{H_2O} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Thí nghiệm: nhỏ vài giọt phenolphthalein vào dung dịch $\\mathrm{NaOH}$, dung dịch có màu hồng. Nhỏ từ từ dung dịch $\\mathrm{HCl}$ vào và lắc đều: màu hồng nhạt dần rồi mất hẳn khi base đã phản ứng hết. Với $\\mathrm{Cu(OH)_2}$ (chất rắn màu xanh), nhỏ dung dịch $\\mathrm{H_2SO_4}$ vào thì chất rắn tan, tạo dung dịch màu xanh lam.',
        },
        {
          type: 'p',
          text: 'Ứng dụng của phản ứng trung hoà: thuốc chữa đau dạ dày chứa base yếu như $\\mathrm{Mg(OH)_2}$, $\\mathrm{Al(OH)_3}$ để trung hoà bớt acid dư trong dạ dày; bón vôi để khử chua cho đất.',
        },
      ],
    },
    {
      heading: 'Thang pH',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thang pH',
          text: 'Thang pH được dùng để biểu thị độ acid, độ base của dung dịch. Thang pH thường dùng có giá trị từ $0$ đến $14$.',
        },
        {
          type: 'list',
          items: [
            '$\\mathrm{pH} < 7$: dung dịch có môi trường acid; pH càng nhỏ, độ acid càng lớn.',
            '$\\mathrm{pH} = 7$: dung dịch có môi trường trung tính (nước cất, dung dịch muối ăn).',
            '$\\mathrm{pH} > 7$: dung dịch có môi trường base; pH càng lớn, độ base càng lớn.',
          ],
        },
        {
          type: 'p',
          text: 'Để xác định pH, có thể dùng giấy chỉ thị vạn năng (so màu giấy với bảng màu chuẩn) hoặc dùng máy đo pH, bút đo pH cho giá trị chính xác hơn.',
        },
        {
          type: 'table',
          caption: 'pH trong cơ thể và trong môi trường',
          head: ['Đối tượng', 'pH thường gặp', 'Ý nghĩa'],
          rows: [
            [
              'Dịch vị dạ dày',
              'khoảng $1{,}5$ đến $3{,}5$',
              'Môi trường acid giúp tiêu hoá thức ăn, diệt khuẩn.',
            ],
            [
              'Máu người',
              '$7{,}35$ đến $7{,}45$',
              'pH máu lệch khỏi khoảng này là dấu hiệu bệnh lí.',
            ],
            [
              'Nước mưa',
              'khoảng $5{,}6$',
              'Mưa có pH nhỏ hơn $5{,}6$ là mưa acid, gây hại cây cối, công trình.',
            ],
            [
              'Đất trồng',
              'đa số cây hợp đất có pH khoảng $6$ đến $7$',
              'Đất chua (pH thấp) được bón vôi để giảm độ chua.',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp dung dịch lên thang pH',
    instruction:
      'Chọn một dung dịch quen thuộc, kéo vạch (hoặc dùng phím ← →) đến pH em dự đoán rồi bấm “Đặt vào thang”. Đặt lệch không quá $1$ đơn vị pH là đúng; nếu sai, gợi ý cho biết cần kéo sang trái (acid hơn) hay sang phải (base hơn). Màu quỳ tím và phenolphthalein hiện ngay dưới thang.',
  },
  examples: [
    {
      problem:
        'Viết phương trình hoá học của phản ứng giữa: a) potassium hydroxide và hydrochloric acid; b) iron(III) hydroxide và sulfuric acid.',
      steps: [
        'Base + acid → muối + nước. Muối gồm kim loại của base và gốc acid của acid.',
        'a) $\\mathrm{KOH} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{H_2O}$.',
        'b) Muối iron(III) sulfate có công thức $\\mathrm{Fe_2(SO_4)_3}$; cân bằng: $2\\mathrm{Fe(OH)_3} + 3\\mathrm{H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + 6\\mathrm{H_2O}$.',
      ],
      answer:
        '$\\mathrm{KOH} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{H_2O}$; $2\\mathrm{Fe(OH)_3} + 3\\mathrm{H_2SO_4} \\rightarrow \\mathrm{Fe_2(SO_4)_3} + 6\\mathrm{H_2O}$.',
    },
    {
      problem:
        'Tính khối lượng NaOH cần dùng để trung hoà vừa đủ $9{,}8$ g $\\mathrm{H_2SO_4}$ (Na = 23, O = 16, H = 1, S = 32).',
      steps: [
        '$M_{\\mathrm{H_2SO_4}} = 98$ g/mol, nên $n_{\\mathrm{H_2SO_4}} = \\dfrac{9{,}8}{98} = 0{,}1$ mol.',
        'Phương trình: $2\\mathrm{NaOH} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$, nên $n_{\\mathrm{NaOH}} = 2 \\times 0{,}1 = 0{,}2$ mol.',
        '$m_{\\mathrm{NaOH}} = 0{,}2 \\times 40 = 8$ g.',
      ],
      answer: 'Cần $8$ g NaOH.',
    },
    {
      problem:
        'Đo pH của một mẫu đất được giá trị $4{,}5$. Đất này có môi trường gì? Nên làm gì để trồng được loại cây ưa đất có pH khoảng $6{,}5$?',
      steps: [
        '$4{,}5 < 7$ nên đất có môi trường acid (đất chua).',
        'Muốn tăng pH cần trung hoà bớt acid trong đất bằng một chất có tính base.',
        'Bón vôi (calcium hydroxide hoặc calcium oxide) với lượng phù hợp để khử chua.',
      ],
      answer: 'Đất chua; bón vôi để khử chua, nâng pH của đất.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là base?',
      options: [
        '$\\mathrm{HNO_3}$',
        '$\\mathrm{Fe(OH)_3}$',
        '$\\mathrm{Na_2SO_4}$',
        '$\\mathrm{CO_2}$',
      ],
      answer: 1,
      hints: ['Base có kim loại liên kết với nhóm hydroxide.'],
      solution:
        '$\\mathrm{Fe(OH)_3}$ có nguyên tử Fe liên kết với ba nhóm $\\mathrm{OH}$, nên là base (iron(III) hydroxide).',
    },
    {
      type: 'multi',
      prompt: 'Những base nào là kiềm?',
      options: [
        '$\\mathrm{NaOH}$',
        '$\\mathrm{Cu(OH)_2}$',
        '$\\mathrm{KOH}$',
        '$\\mathrm{Mg(OH)_2}$',
        '$\\mathrm{Ba(OH)_2}$',
      ],
      answers: [0, 2, 4],
      hints: ['Kiềm là base tan được trong nước.'],
      solution:
        '$\\mathrm{NaOH}$, $\\mathrm{KOH}$, $\\mathrm{Ba(OH)_2}$ tan tốt trong nước nên là kiềm; $\\mathrm{Cu(OH)_2}$, $\\mathrm{Mg(OH)_2}$ là base không tan.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên base có công thức $\\mathrm{Ca(OH)_2}$.',
      accept: ['calcium hydroxide'],
      hints: ['Tên base = tên kim loại + hydroxide.'],
      solution: '$\\mathrm{Ca(OH)_2}$ là calcium hydroxide (nước vôi trong là dung dịch của nó).',
    },
    {
      type: 'choice',
      prompt: 'Nhỏ dung dịch phenolphthalein vào dung dịch $\\mathrm{NaOH}$, dung dịch',
      options: [
        'chuyển sang màu hồng',
        'chuyển sang màu xanh',
        'chuyển sang màu đỏ',
        'vẫn không màu',
      ],
      answer: 0,
      hints: ['Phenolphthalein chỉ đổi màu trong môi trường base.'],
      solution: 'Dung dịch kiềm làm phenolphthalein không màu chuyển sang màu hồng.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng giữa base và acid tạo thành',
      options: ['muối và khí hydrogen', 'muối và nước', 'oxide và nước', 'base mới và acid mới'],
      answer: 1,
      hints: ['Đó là phản ứng trung hoà, ví dụ $\\mathrm{NaOH} + \\mathrm{HCl}$.'],
      solution:
        'Base + acid → muối + nước, ví dụ $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$.',
    },
    {
      type: 'choice',
      prompt: 'Dung dịch có $\\mathrm{pH} = 9$ có môi trường',
      options: ['acid', 'trung tính', 'base'],
      answer: 2,
      hints: ['So sánh pH với $7$.'],
      solution: '$9 > 7$ nên dung dịch có môi trường base.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các dung dịch theo thứ tự pH tăng dần.',
      items: ['Nước xà phòng', 'Nước chanh', 'Nước cất', 'Nước vôi trong', 'Sữa bò'],
      answer: [1, 4, 2, 0, 3],
      hints: [
        'Dung dịch chua nhất có pH nhỏ nhất; nước cất có pH bằng $7$.',
        'Sữa bò hơi chua nhẹ; nước vôi trong là dung dịch kiềm.',
      ],
      solution:
        'Nước chanh (khoảng $2{,}4$) < sữa bò (khoảng $6{,}6$) < nước cất ($7$) < nước xà phòng (khoảng $10$) < nước vôi trong (khoảng $12{,}4$).',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng NaOH cần dùng để trung hoà vừa đủ $7{,}3$ g HCl, theo gam (Na = 23, O = 16, H = 1, Cl = 35,5).',
      answer: 8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}$: tỉ lệ mol $1 : 1$.',
      ],
      solution:
        '$n_{\\mathrm{HCl}} = \\dfrac{7{,}3}{36{,}5} = 0{,}2$ mol $= n_{\\mathrm{NaOH}}$; $m_{\\mathrm{NaOH}} = 0{,}2 \\times 40 = 8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu mililít dung dịch NaOH $2$ M để trung hoà vừa đủ $100$ mL dung dịch $\\mathrm{H_2SO_4}$ $1$ M?',
      answer: 100,
      tolerance: 0.1,
      unit: 'mL',
      hints: [
        'Tính số mol $\\mathrm{H_2SO_4}$ bằng $n = C_M \\times V$.',
        '$2\\mathrm{NaOH} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{H_2SO_4}} = 1 \\times 0{,}1 = 0{,}1$ mol; $n_{\\mathrm{NaOH}} = 0{,}2$ mol; $V = \\dfrac{0{,}2}{2} = 0{,}1$ L $= 100$ mL.',
    },
    {
      type: 'choice',
      prompt:
        'Dung dịch A có $\\mathrm{pH} = 2$, dung dịch B có $\\mathrm{pH} = 5$. Nhận xét nào đúng?',
      options: [
        'A có độ acid lớn hơn B.',
        'B có độ acid lớn hơn A.',
        'A có môi trường base.',
        'Hai dung dịch có độ acid như nhau.',
      ],
      answer: 0,
      hints: ['Với $\\mathrm{pH} < 7$, pH càng nhỏ thì độ acid càng lớn.'],
      solution: 'Cả hai đều có môi trường acid; A có pH nhỏ hơn nên độ acid lớn hơn.',
    },
  ],
  takeaways: [
    'Base: kim loại liên kết với nhóm hydroxide; tan trong nước tạo ion $\\mathrm{OH^-}$. Base tan được trong nước gọi là kiềm.',
    'Dung dịch base làm quỳ tím hoá xanh, phenolphthalein không màu hoá hồng.',
    'Base + acid → muối + nước (phản ứng trung hoà).',
    'Thang pH từ $0$ đến $14$: $\\mathrm{pH} < 7$ acid, $= 7$ trung tính, $> 7$ base.',
  ],
};
