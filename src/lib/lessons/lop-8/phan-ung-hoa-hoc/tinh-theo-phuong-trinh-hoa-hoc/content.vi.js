/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Từ phương trình hoá học, tỉ lệ hệ số cho biết tỉ lệ số mol giữa các chất, nên biết lượng một chất là tính được lượng các chất khác. Khi cho trước lượng hai chất phản ứng, chất có tỉ số số mol : hệ số nhỏ hơn phản ứng hết, chất kia dư. Hiệu suất phản ứng H bằng lượng sản phẩm thực tế chia cho lượng theo lí thuyết, nhân 100%.',
  intro:
    'Nhà máy muốn sản xuất $56$ tấn vôi sống thì phải nung bao nhiêu tấn đá vôi? Trong phòng thí nghiệm, cần bao nhiêu gam kẽm để điều chế đủ khí hydrogen bơm một quả bóng? Phương trình hoá học không chỉ cho biết chất nào phản ứng mà còn cho biết chúng phản ứng với nhau theo lượng bao nhiêu.',
  objectives: [
    'Tính được lượng chất trong phương trình hoá học theo số mol, khối lượng hoặc thể tích ở điều kiện chuẩn.',
    'Nêu được khái niệm chất phản ứng hết, chất dư; xác định được chất hết, chất dư khi biết lượng hai chất phản ứng.',
    'Nêu được khái niệm hiệu suất của phản ứng và tính được hiệu suất của một phản ứng dựa vào lượng sản phẩm thu được theo lí thuyết và lượng sản phẩm thu được theo thực tế.',
  ],
  sections: [
    {
      heading: 'Tính lượng chất trong phương trình hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Trong phương trình $2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}$, cứ $2$ phân tử $\\mathrm{H_2}$ phản ứng với $1$ phân tử $\\mathrm{O_2}$ tạo ra $2$ phân tử $\\mathrm{H_2O}$. Nhân cả ba số với $N_A$: cứ $2$ mol $\\mathrm{H_2}$ phản ứng với $1$ mol $\\mathrm{O_2}$ tạo ra $2$ mol $\\mathrm{H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tỉ lệ số mol',
          text: 'Tỉ lệ số mol giữa các chất trong phản ứng bằng tỉ lệ hệ số của chúng trong phương trình hoá học. Với $a\\mathrm{A} + b\\mathrm{B} \\rightarrow c\\mathrm{C} + d\\mathrm{D}$: $\\dfrac{n_A}{a} = \\dfrac{n_B}{b} = \\dfrac{n_C}{c} = \\dfrac{n_D}{d}$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Viết phương trình hoá học của phản ứng.',
            'Tính số mol chất đã biết (từ khối lượng: $n = \\dfrac{m}{M}$; từ thể tích khí ở điều kiện chuẩn: $n = \\dfrac{V}{24{,}79}$).',
            'Dựa vào tỉ lệ hệ số trong phương trình, tìm số mol chất cần tính.',
            'Chuyển số mol thành khối lượng ($m = n \\times M$) hoặc thể tích khí ($V = 24{,}79 \\times n$).',
          ],
        },
      ],
    },
    {
      heading: 'Chất phản ứng hết, chất dư',
      blocks: [
        {
          type: 'p',
          text: 'Khi lượng các chất phản ứng không đúng theo tỉ lệ của phương trình, sau phản ứng sẽ có một chất phản ứng hết và chất còn lại dư.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất hết, chất dư',
          text: 'Với phản ứng $a\\mathrm{A} + b\\mathrm{B} \\rightarrow$ sản phẩm, so sánh hai tỉ số $\\dfrac{n_A}{a}$ và $\\dfrac{n_B}{b}$. Chất có tỉ số nhỏ hơn phản ứng hết, chất có tỉ số lớn hơn còn dư. Nếu hai tỉ số bằng nhau, hai chất phản ứng vừa đủ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Lượng sản phẩm luôn được tính theo chất phản ứng hết, không tính theo chất dư.',
        },
      ],
    },
    {
      heading: 'Hiệu suất phản ứng',
      blocks: [
        {
          type: 'p',
          text: 'Trong thực tế, nhiều phản ứng không xảy ra hoàn toàn hoặc có một phần chất bị hao hụt, nên lượng sản phẩm thu được (lượng thực tế) thường nhỏ hơn lượng tính theo phương trình (lượng lí thuyết).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hiệu suất phản ứng',
          text: 'Hiệu suất phản ứng (kí hiệu $H$) là tỉ số giữa lượng sản phẩm thu được theo thực tế và lượng sản phẩm thu được theo lí thuyết, tính theo phần trăm.',
        },
        {
          type: 'tex',
          tex: 'H = \\dfrac{m_{tt}}{m_{lt}} \\times 100\\% \\quad \\text{hay} \\quad H = \\dfrac{n_{tt}}{n_{lt}} \\times 100\\%',
        },
        {
          type: 'p',
          text: 'Trong đó $m_{tt}$, $n_{tt}$ là khối lượng, số mol sản phẩm thực tế; $m_{lt}$, $n_{lt}$ là khối lượng, số mol sản phẩm theo lí thuyết (tính theo chất phản ứng hết). Hiệu suất luôn nhỏ hơn hoặc bằng $100\\%$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng chất hết, chất dư',
    instruction:
      'Chọn phản ứng và số mol ban đầu của hai chất phản ứng (mỗi chấm là $1$ mol). Quan sát chất nào hết, chất nào dư và lượng sản phẩm tạo ra; đọc tỉ số số mol : hệ số của từng chất. Kéo thanh hiệu suất để xem lượng sản phẩm thực tế so với lí thuyết.',
  },
  examples: [
    {
      problem:
        'Đốt cháy hoàn toàn $2{,}4$ g magnesium trong oxygen. Tính khối lượng magnesium oxide tạo thành và thể tích oxygen (điều kiện chuẩn) đã phản ứng (Mg = 24, O = 16).',
      steps: [
        'Phương trình: $2\\mathrm{Mg} + \\mathrm{O_2} \\rightarrow 2\\mathrm{MgO}$.',
        '$n_{\\mathrm{Mg}} = \\dfrac{2{,}4}{24} = 0{,}1$ mol.',
        'Theo phương trình: $n_{\\mathrm{MgO}} = n_{\\mathrm{Mg}} = 0{,}1$ mol; $n_{\\mathrm{O_2}} = \\dfrac{1}{2} n_{\\mathrm{Mg}} = 0{,}05$ mol.',
        '$m_{\\mathrm{MgO}} = 0{,}1 \\times 40 = 4$ g; $V_{\\mathrm{O_2}} = 0{,}05 \\times 24{,}79 = 1{,}2395$ L.',
      ],
      answer: '$4$ g MgO; $1{,}2395$ L khí oxygen.',
    },
    {
      problem:
        'Cho $13$ g zinc vào dung dịch chứa $0{,}3$ mol HCl. Chất nào hết, chất nào dư? Tính thể tích khí hydrogen thu được ở điều kiện chuẩn (Zn = 65).',
      steps: [
        'Phương trình: $\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{Zn}} = \\dfrac{13}{65} = 0{,}2$ mol.',
        'So sánh: $\\dfrac{0{,}2}{1} = 0{,}2 > \\dfrac{0{,}3}{2} = 0{,}15$. HCl phản ứng hết, Zn dư.',
        'Tính theo HCl: $n_{\\mathrm{H_2}} = \\dfrac{1}{2} n_{\\mathrm{HCl}} = 0{,}15$ mol; $V = 0{,}15 \\times 24{,}79 = 3{,}7185$ L.',
        'Zn phản ứng $0{,}15$ mol, còn dư $0{,}2 - 0{,}15 = 0{,}05$ mol ($0{,}05 \\times 65 = 3{,}25$ g).',
      ],
      answer: 'HCl hết, Zn dư $3{,}25$ g; thu được $3{,}7185$ L khí hydrogen.',
    },
    {
      problem:
        'Nung $10$ g calcium carbonate thu được $4{,}48$ g calcium oxide. Tính hiệu suất phản ứng (Ca = 40, C = 12, O = 16).',
      steps: [
        'Phương trình: $\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$.',
        '$n_{\\mathrm{CaCO_3}} = \\dfrac{10}{100} = 0{,}1$ mol, nên theo lí thuyết $n_{\\mathrm{CaO}} = 0{,}1$ mol, $m_{lt} = 0{,}1 \\times 56 = 5{,}6$ g.',
        '$H = \\dfrac{4{,}48}{5{,}6} \\times 100\\% = 80\\%$.',
      ],
      answer: 'Hiệu suất phản ứng là $80\\%$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Theo phương trình $2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}$, đốt cháy hết $0{,}2$ mol $\\mathrm{H_2}$ cần bao nhiêu mol $\\mathrm{O_2}$?',
      answer: 0.1,
      tolerance: 0.0001,
      unit: 'mol',
      hints: ['$n_{\\mathrm{O_2}} : n_{\\mathrm{H_2}} = 1 : 2$.'],
      solution: '$n_{\\mathrm{O_2}} = \\dfrac{1}{2} \\times 0{,}2 = 0{,}1$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hết $3{,}2$ g sulfur trong oxygen: $\\mathrm{S} + \\mathrm{O_2} \\rightarrow \\mathrm{SO_2}$. Tính khối lượng $\\mathrm{SO_2}$ tạo thành, theo gam (S = 32, O = 16).',
      answer: 6.4,
      tolerance: 0.001,
      unit: 'g',
      hints: ['Tính $n_{\\mathrm{S}}$, rồi $n_{\\mathrm{SO_2}} = n_{\\mathrm{S}}$.'],
      solution:
        '$n_{\\mathrm{S}} = \\dfrac{3{,}2}{32} = 0{,}1$ mol $= n_{\\mathrm{SO_2}}$; $m = 0{,}1 \\times 64 = 6{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $6{,}5$ g zinc tác dụng với dung dịch hydrochloric acid dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn, theo lít (Zn = 65).',
      answer: 2.479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$.',
        'Acid dư nên tính theo zinc.',
      ],
      solution:
        '$n_{\\mathrm{Zn}} = \\dfrac{6{,}5}{65} = 0{,}1$ mol $= n_{\\mathrm{H_2}}$; $V = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt phân thuốc tím: $2\\mathrm{KMnO_4} \\xrightarrow{t^\\circ} \\mathrm{K_2MnO_4} + \\mathrm{MnO_2} + \\mathrm{O_2}$. Cần bao nhiêu gam $\\mathrm{KMnO_4}$ để thu được $0{,}1$ mol $\\mathrm{O_2}$ (K = 39, Mn = 55, O = 16)?',
      answer: 31.6,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{KMnO_4}} = 2 n_{\\mathrm{O_2}}$.',
        '$M_{\\mathrm{KMnO_4}} = 39 + 55 + 4 \\times 16$.',
      ],
      solution:
        '$n_{\\mathrm{KMnO_4}} = 2 \\times 0{,}1 = 0{,}2$ mol; $M = 158$ g/mol; $m = 0{,}2 \\times 158 = 31{,}6$ g.',
    },
    {
      type: 'choice',
      prompt:
        'Đốt hỗn hợp $0{,}3$ mol $\\mathrm{H_2}$ và $0{,}2$ mol $\\mathrm{O_2}$: $2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}$. Kết luận nào đúng?',
      options: [
        '$\\mathrm{H_2}$ phản ứng hết, $\\mathrm{O_2}$ dư',
        '$\\mathrm{O_2}$ phản ứng hết, $\\mathrm{H_2}$ dư',
        'Hai chất phản ứng vừa đủ',
        '$\\mathrm{H_2}$ dư vì số mol $\\mathrm{H_2}$ lớn hơn',
      ],
      answer: 0,
      hints: [
        'So sánh $\\dfrac{n_{\\mathrm{H_2}}}{2}$ với $\\dfrac{n_{\\mathrm{O_2}}}{1}$, không so sánh trực tiếp số mol.',
      ],
      solution:
        '$\\dfrac{0{,}3}{2} = 0{,}15 < \\dfrac{0{,}2}{1} = 0{,}2$ nên $\\mathrm{H_2}$ hết, $\\mathrm{O_2}$ dư $0{,}2 - 0{,}15 = 0{,}05$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Với hỗn hợp $0{,}3$ mol $\\mathrm{H_2}$ và $0{,}2$ mol $\\mathrm{O_2}$ ở câu trên, tính khối lượng nước tạo thành, theo gam.',
      answer: 5.4,
      tolerance: 0.001,
      unit: 'g',
      hints: ['Tính theo chất phản ứng hết.', '$n_{\\mathrm{H_2O}} = n_{\\mathrm{H_2}}$.'],
      solution:
        '$\\mathrm{H_2}$ hết nên $n_{\\mathrm{H_2O}} = 0{,}3$ mol; $m = 0{,}3 \\times 18 = 5{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $5{,}6$ g iron với $4$ g sulfur: $\\mathrm{Fe} + \\mathrm{S} \\xrightarrow{t^\\circ} \\mathrm{FeS}$. Tính khối lượng chất còn dư sau phản ứng, theo gam (Fe = 56, S = 32).',
      answer: 0.8,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{Fe}} = 0{,}1$ mol, $n_{\\mathrm{S}} = 0{,}125$ mol.',
        'Hệ số đều bằng $1$: chất có số mol lớn hơn còn dư.',
      ],
      solution:
        'Fe hết, S dư. S phản ứng $0{,}1$ mol, còn dư $0{,}125 - 0{,}1 = 0{,}025$ mol, tức $0{,}025 \\times 32 = 0{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}1$ mol $\\mathrm{N_2}$ tác dụng với $\\mathrm{H_2}$ dư: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightarrow 2\\mathrm{NH_3}$, thu được $0{,}05$ mol $\\mathrm{NH_3}$. Tính hiệu suất phản ứng, theo $\\%$.',
      answer: 25,
      unit: '%',
      hints: [
        'Lí thuyết: $n_{\\mathrm{NH_3}} = 2 n_{\\mathrm{N_2}}$.',
        '$H = \\dfrac{n_{tt}}{n_{lt}} \\times 100\\%$.',
      ],
      solution:
        '$n_{lt} = 2 \\times 0{,}1 = 0{,}2$ mol; $H = \\dfrac{0{,}05}{0{,}2} \\times 100\\% = 25\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Nung $50$ g calcium carbonate với hiệu suất $80\\%$. Tính khối lượng calcium oxide thu được, theo gam.',
      answer: 22.4,
      tolerance: 0.001,
      unit: 'g',
      hints: ['Tính lượng CaO theo lí thuyết trước, rồi nhân với $80\\%$.'],
      solution:
        '$n_{\\mathrm{CaCO_3}} = 0{,}5$ mol; $m_{lt}(\\mathrm{CaO}) = 0{,}5 \\times 56 = 28$ g; $m_{tt} = 28 \\times 80\\% = 22{,}4$ g.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước giải bài toán tính theo phương trình hoá học.',
      items: [
        'Dựa vào tỉ lệ hệ số, tìm số mol chất cần tính.',
        'Viết phương trình hoá học.',
        'Chuyển số mol thành khối lượng hoặc thể tích.',
        'Tính số mol chất đã biết.',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Muốn dùng tỉ lệ hệ số thì phải có phương trình và số mol trước.'],
      solution:
        'Viết phương trình → tính số mol chất đã biết → dùng tỉ lệ hệ số tìm số mol chất cần tính → đổi ra khối lượng hoặc thể tích.',
    },
  ],
  takeaways: [
    'Tỉ lệ số mol các chất trong phản ứng bằng tỉ lệ hệ số trong phương trình hoá học.',
    'Các bước: viết phương trình, tính số mol chất đã biết, dùng tỉ lệ hệ số tìm số mol chất cần tính, đổi ra khối lượng hoặc thể tích.',
    'Với $a\\mathrm{A} + b\\mathrm{B}$: so sánh $\\dfrac{n_A}{a}$ và $\\dfrac{n_B}{b}$; chất có tỉ số nhỏ hơn phản ứng hết, tính sản phẩm theo chất hết.',
    'Hiệu suất $H = \\dfrac{m_{tt}}{m_{lt}} \\times 100\\%$; lượng thực tế bằng lượng lí thuyết nhân $H$.',
  ],
};
