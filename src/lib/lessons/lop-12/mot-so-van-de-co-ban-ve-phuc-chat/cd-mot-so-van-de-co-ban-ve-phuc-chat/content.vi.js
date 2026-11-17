/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phối tử một càng và nhiều càng, dung lượng phối trí, số phối trí của nguyên tử trung tâm, cách gọi tên phức chất theo IUPAC và hằng số bền của phức chất.',
  intro:
    'Trong $\\mathrm{[Cu(NH_3)_4]^{2+}}$ có 4 phối tử và ion $\\mathrm{Cu^{2+}}$ tạo 4 liên kết cho – nhận. Nhưng trong $\\mathrm{[Ni(en)_3]^{2+}}$ chỉ có 3 phối tử mà ion $\\mathrm{Ni^{2+}}$ lại tạo tới 6 liên kết. Vì sao vậy? Số lượng phối tử, số liên kết cho – nhận và độ bền của phức chất liên hệ với nhau như thế nào, và gọi tên những phức chất này ra sao?',
  objectives: [
    'Nêu được khái niệm dung lượng phối trí; phân biệt phối tử một càng và phối tử nhiều càng.',
    'Xác định được số phối trí của nguyên tử trung tâm trong một phức chất.',
    'Gọi được tên một số phức chất đơn giản theo danh pháp IUPAC.',
    'Nêu được ý nghĩa của hằng số bền và dùng nó để so sánh độ bền của các phức chất.',
  ],
  sections: [
    {
      heading: 'Nguyên tử trung tâm và phối tử',
      blocks: [
        {
          type: 'p',
          text: 'Phức chất $\\mathrm{[ML_n]}$ gồm nguyên tử trung tâm M (thường là cation kim loại chuyển tiếp, có orbital trống) và các phối tử L (anion hoặc phân tử có cặp electron chưa liên kết). Mỗi liên kết giữa M và L là một liên kết $\\sigma$ kiểu cho – nhận: phối tử cho cặp electron, nguyên tử trung tâm nhận.',
        },
        {
          type: 'p',
          text: 'Nguyên tử của phối tử trực tiếp cho cặp electron gọi là nguyên tử cho. Trong $\\mathrm{NH_3}$ nguyên tử cho là N, trong $\\mathrm{H_2O}$ và $\\mathrm{OH^-}$ là O, trong $\\mathrm{CN^-}$ là C. Phần trong móc vuông là cầu nội; các ion bên ngoài móc vuông thuộc cầu ngoại, ví dụ $\\mathrm{K_4[Fe(CN)_6]}$ gồm cầu nội $\\mathrm{[Fe(CN)_6]^{4-}}$ và 4 ion $\\mathrm{K^+}$ ở cầu ngoại.',
        },
      ],
    },
    {
      heading: 'Dung lượng phối trí',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dung lượng phối trí',
          text: 'Dung lượng phối trí của một phối tử là số liên kết $\\sigma$ (cho – nhận) mà phối tử đó tạo được với nguyên tử trung tâm, tức là số nguyên tử cho của phối tử. Phối tử có dung lượng phối trí bằng 1 gọi là phối tử một càng; bằng 2 hoặc lớn hơn gọi là phối tử hai càng, nhiều càng.',
        },
        {
          type: 'table',
          head: ['Phối tử', 'Nguyên tử cho', 'Dung lượng phối trí'],
          rows: [
            [
              '$\\mathrm{Cl^-}$, $\\mathrm{F^-}$, $\\mathrm{CN^-}$, $\\mathrm{OH^-}$',
              'Cl, F, C, O',
              '1',
            ],
            ['$\\mathrm{NH_3}$, $\\mathrm{H_2O}$', 'N, O', '1'],
            ['ethylenediamine (en), $\\mathrm{H_2N{-}CH_2{-}CH_2{-}NH_2}$', 'hai nguyên tử N', '2'],
            ['oxalate, $\\mathrm{C_2O_4^{2-}}$', 'hai nguyên tử O', '2'],
            ['$\\mathrm{EDTA^{4-}}$', 'hai nguyên tử N và bốn nguyên tử O', '6'],
          ],
          caption: 'Dung lượng phối trí của một số phối tử thường gặp.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phức chất vòng càng',
          text: 'Phối tử nhiều càng "kẹp" nguyên tử trung tâm như càng cua, tạo thành vòng. Ví dụ trong $\\mathrm{[PtCl_2(en)]}$, vòng $\\mathrm{Pt{-}N{-}C{-}C{-}N}$ có 5 cạnh. Phức chất vòng càng (phức chelate) thường bền hơn hẳn phức chất của phối tử một càng tương ứng.',
        },
      ],
    },
    {
      heading: 'Số phối trí',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Số phối trí',
          text: 'Số phối trí của nguyên tử trung tâm là tổng số liên kết $\\sigma$ giữa nguyên tử trung tâm và các phối tử: số phối trí $= \\sum$ (số phối tử $\\times$ dung lượng phối trí).',
        },
        {
          type: 'table',
          head: ['Phức chất', 'Phối tử', 'Số phối trí', 'Dạng hình học'],
          rows: [
            ['$\\mathrm{[Ag(NH_3)_2]^+}$', '2 $\\mathrm{NH_3}$', '$2 \\cdot 1 = 2$', 'đường thẳng'],
            [
              '$\\mathrm{[Cu(NH_3)_4]^{2+}}$',
              '4 $\\mathrm{NH_3}$',
              '$4 \\cdot 1 = 4$',
              'vuông phẳng',
            ],
            [
              '$\\mathrm{[PtCl_2(en)]}$',
              '2 $\\mathrm{Cl^-}$, 1 en',
              '$2 \\cdot 1 + 1 \\cdot 2 = 4$',
              'vuông phẳng',
            ],
            [
              '$\\mathrm{[CoCl_2(en)_2]^+}$',
              '2 $\\mathrm{Cl^-}$, 2 en',
              '$2 \\cdot 1 + 2 \\cdot 2 = 6$',
              'bát diện',
            ],
            [
              '$\\mathrm{[Co(C_2O_4)_3]^{3-}}$',
              '3 $\\mathrm{C_2O_4^{2-}}$',
              '$3 \\cdot 2 = 6$',
              'bát diện',
            ],
            [
              '$\\mathrm{[Ca(EDTA)]^{2-}}$',
              '1 $\\mathrm{EDTA^{4-}}$',
              '$1 \\cdot 6 = 6$',
              'bát diện',
            ],
          ],
          caption: 'Số phối trí thường gặp là 2, 4 và 6.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Số phối tử khác số phối trí',
          text: 'Chỉ khi mọi phối tử đều là phối tử một càng thì số phối trí mới bằng số phối tử. Với $\\mathrm{[Ni(en)_3]^{2+}}$: 3 phối tử nhưng số phối trí là $3 \\cdot 2 = 6$.',
        },
      ],
    },
    {
      heading: 'Danh pháp phức chất',
      blocks: [
        {
          type: 'p',
          text: 'Tên phức chất theo IUPAC được viết liền, theo các quy tắc sau.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Với hợp chất có ion phức, gọi tên cation trước, anion sau (như tên muối): $\\mathrm{K_4[Fe(CN)_6]}$ là potassium hexacyanidoferrate(II).',
            'Trong cầu nội, gọi tên phối tử trước, nguyên tử trung tâm sau. Các phối tử xếp theo thứ tự bảng chữ cái của tên, không tính tiền tố chỉ số lượng.',
            'Số lượng mỗi phối tử ghi bằng tiền tố di (2), tri (3), tetra (4), penta (5), hexa (6). Phối tử có tên dài như ethylenediamine dùng bis, tris và đặt tên trong ngoặc: bis(ethylenediamine).',
            'Tên phối tử anion có đuôi "o": chlorido ($\\mathrm{Cl^-}$), fluorido ($\\mathrm{F^-}$), cyanido ($\\mathrm{CN^-}$), hydroxido ($\\mathrm{OH^-}$), oxalato ($\\mathrm{C_2O_4^{2-}}$). Phối tử trung hoà: aqua ($\\mathrm{H_2O}$), ammine ($\\mathrm{NH_3}$), ethylenediamine (en).',
            'Cầu nội là cation hoặc trung hoà: giữ tên nguyên tố của nguyên tử trung tâm (copper, iron, cobalt, …). Cầu nội là anion: tên nguyên tử trung tâm thêm đuôi "ate" (cuprate, ferrate, cobaltate, zincate; bạc là argentate).',
            'Số oxi hoá của nguyên tử trung tâm viết bằng số La Mã trong ngoặc đơn, ngay sau tên kim loại.',
          ],
        },
        {
          type: 'table',
          head: ['Công thức', 'Tên gọi'],
          rows: [
            ['$\\mathrm{[Ag(NH_3)_2]^+}$', 'ion diamminesilver(I)'],
            ['$\\mathrm{[Cu(NH_3)_4(H_2O)_2]^{2+}}$', 'ion tetraamminediaquacopper(II)'],
            ['$\\mathrm{[Zn(OH)_4]^{2-}}$', 'ion tetrahydroxidozincate(II)'],
            ['$\\mathrm{[PtCl_2(NH_3)_2]}$', 'diamminedichloridoplatinum(II)'],
            ['$\\mathrm{[Co(NH_3)_6]Cl_3}$', 'hexaamminecobalt(III) chloride'],
            ['$\\mathrm{Na_3[Cr(C_2O_4)_3]}$', 'sodium trioxalatochromate(III)'],
          ],
          caption: 'Tên gọi của một số phức chất.',
        },
      ],
    },
    {
      heading: 'Hằng số bền của phức chất',
      blocks: [
        {
          type: 'p',
          text: 'Trong dung dịch, sự tạo thành phức chất là một quá trình thuận nghịch (bỏ qua điện tích cho gọn):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{M} + n\\,\\mathrm{L} \\rightleftharpoons \\mathrm{[ML_n]} \\qquad \\beta = \\frac{[\\mathrm{ML}_n]}{[\\mathrm{M}]\\,[\\mathrm{L}]^n}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hằng số bền',
          text: 'Hằng số cân bằng $\\beta$ của quá trình tạo phức gọi là hằng số bền (hằng số tạo thành) của phức chất. Ở cùng điều kiện, $\\beta$ càng lớn thì phức chất càng bền. Vì $\\beta$ thường rất lớn nên người ta hay dùng $\\lg \\beta$.',
        },
        {
          type: 'table',
          head: ['Phức chất', '$\\lg \\beta$ (25 °C, gần đúng)'],
          rows: [
            ['$\\mathrm{[Ag(NH_3)_2]^+}$', '7,2'],
            ['$\\mathrm{[Ni(NH_3)_6]^{2+}}$', '8,6'],
            ['$\\mathrm{[Zn(NH_3)_4]^{2+}}$', '9,5'],
            ['$\\mathrm{[Cu(NH_3)_4]^{2+}}$', '13,3'],
            ['$\\mathrm{[Ni(en)_3]^{2+}}$', '18,3'],
            ['$\\mathrm{[Ag(CN)_2]^-}$', '21'],
          ],
          caption: 'Hằng số bền của một số phức chất.',
        },
        {
          type: 'p',
          text: 'Hằng số bền giải thích nhiều hiện tượng: phức chất kém bền chuyển thành phức chất bền hơn khi thêm phối tử thích hợp, ví dụ $\\mathrm{[Ag(NH_3)_2]^+} + 2\\mathrm{CN^-} \\rightarrow \\mathrm{[Ag(CN)_2]^-} + 2\\mathrm{NH_3}$. So sánh $\\mathrm{[Ni(en)_3]^{2+}}$ ($\\lg \\beta \\approx 18{,}3$) với $\\mathrm{[Ni(NH_3)_6]^{2+}}$ ($\\lg \\beta \\approx 8{,}6$): cùng 6 liên kết Ni – N nhưng phức chất vòng càng bền hơn khoảng $10^{10}$ lần.',
        },
      ],
    },
    {
      heading: 'Dự án: Sổ tay phức chất và thí nghiệm tạo phức của đồng',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập một sổ tay tra cứu phức chất (công thức, tên IUPAC, số phối trí, hằng số bền) và quan sát sự tạo thành phức chất bền hơn trong ống nghiệm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn 10 phức chất (trong bài và trong sách Hoá học 12). Với mỗi phức chất, ghi công thức, nguyên tử trung tâm và số oxi hoá, phối tử và dung lượng phối trí, số phối trí, tên IUPAC; kiểm tra tên bằng bộ đặt tên ở trên.',
            'Tìm $\\lg \\beta$ của ít nhất 4 phức chất trong tài liệu tham khảo và xếp chúng theo độ bền tăng dần.',
            'Thí nghiệm (có giáo viên hướng dẫn, đeo kính bảo hộ, làm nơi thoáng khí): nhỏ từ từ dung dịch $\\mathrm{NH_3}$ vào khoảng 2 mL dung dịch $\\mathrm{CuSO_4}$ loãng đến dư. Ghi lại màu sắc và kết tủa ở từng giai đoạn.',
            'Giải thích kết quả: kết tủa $\\mathrm{Cu(OH)_2}$ xanh nhạt tạo thành rồi tan trong $\\mathrm{NH_3}$ dư tạo phức chất màu xanh lam đậm, vì phức chất ammine bền hơn phức chất aqua ban đầu.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: sổ tay (bảng hoặc thẻ học), ảnh chụp ống nghiệm ở từng giai đoạn kèm phương trình hoá học, và một đoạn ngắn giải thích bằng hằng số bền vì sao kết tủa tan.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ đặt tên phức chất',
    instruction:
      'Ở chế độ "Tự đặt tên", chọn nguyên tử trung tâm và số lượng từng phối tử: công thức, điện tích, số phối trí và tên IUPAC hiện ra kèm từng bước gọi tên. Thử phối tử hai càng en và oxalate để thấy số phối trí khác số phối tử. Ở chế độ "Dựng theo tên", đọc tên rồi dựng đúng phức chất.',
  },
  examples: [
    {
      problem:
        'Cho phức chất $\\mathrm{[CoCl_2(en)_2]Cl}$. Xác định cầu nội, điện tích và số oxi hoá của nguyên tử trung tâm, dung lượng phối trí của mỗi phối tử, số phối trí và gọi tên phức chất.',
      steps: [
        'Cầu nội là $\\mathrm{[CoCl_2(en)_2]^+}$ (để trung hoà một ion $\\mathrm{Cl^-}$ ở cầu ngoại).',
        'Gọi số oxi hoá của Co là $x$: $x + 2 \\cdot (-1) + 2 \\cdot 0 = +1 \\Rightarrow x = +3$.',
        '$\\mathrm{Cl^-}$ có dung lượng phối trí 1; en có dung lượng phối trí 2 (hai nguyên tử N).',
        'Số phối trí: $2 \\cdot 1 + 2 \\cdot 2 = 6$.',
        'Tên phối tử theo bảng chữ cái: chlorido (c) trước ethylenediamine (e): dichloridobis(ethylenediamine); cầu nội là cation nên giữ tên cobalt, thêm (III); anion cầu ngoại là chloride.',
      ],
      answer:
        'Cầu nội $\\mathrm{[CoCl_2(en)_2]^+}$, $\\mathrm{Co^{3+}}$, số phối trí 6; tên: dichloridobis(ethylenediamine)cobalt(III) chloride.',
    },
    {
      problem: 'Gọi tên phức chất $\\mathrm{K_4[Fe(CN)_6]}$.',
      steps: [
        'Cation là $\\mathrm{K^+}$ (potassium), anion phức là $\\mathrm{[Fe(CN)_6]^{4-}}$.',
        'Số oxi hoá của Fe: $x + 6 \\cdot (-1) = -4 \\Rightarrow x = +2$.',
        'Phối tử: 6 ion $\\mathrm{CN^-}$ → hexacyanido. Cầu nội là anion nên iron đổi thành ferrate.',
      ],
      answer: 'Potassium hexacyanidoferrate(II).',
    },
    {
      problem:
        'Dung dịch chứa ion $\\mathrm{Ag^+}$ và $\\mathrm{NH_3}$ ở cân bằng có nồng độ $\\mathrm{NH_3}$ tự do là $0{,}10$ M. Biết $\\beta_{\\mathrm{[Ag(NH_3)_2]^+}} = 1{,}7 \\cdot 10^{7}$. Tính tỉ số $[\\mathrm{Ag(NH_3)_2^+}] : [\\mathrm{Ag^+}]$.',
      steps: [
        '$\\beta = \\dfrac{[\\mathrm{Ag(NH_3)_2^+}]}{[\\mathrm{Ag^+}]\\,[\\mathrm{NH_3}]^2}$, nên $\\dfrac{[\\mathrm{Ag(NH_3)_2^+}]}{[\\mathrm{Ag^+}]} = \\beta \\cdot [\\mathrm{NH_3}]^2$.',
        'Thay số: $1{,}7 \\cdot 10^{7} \\cdot (0{,}10)^2 = 1{,}7 \\cdot 10^{5}$.',
      ],
      answer:
        'Tỉ số bằng $1{,}7 \\cdot 10^{5}$: hầu như toàn bộ bạc ở dạng phức chất $\\mathrm{[Ag(NH_3)_2]^+}$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Phối tử ethylenediamine $\\mathrm{H_2N{-}CH_2{-}CH_2{-}NH_2}$ có dung lượng phối trí bằng bao nhiêu?',
      answer: 2,
      hints: [
        'Đếm số nguyên tử có cặp electron chưa liên kết có thể cùng hướng về nguyên tử trung tâm.',
      ],
      solution:
        'Hai nguyên tử N, mỗi nguyên tử có một cặp electron chưa liên kết, cùng tạo liên kết cho – nhận với nguyên tử trung tâm: dung lượng phối trí bằng 2.',
    },
    {
      type: 'number',
      prompt:
        'Số phối trí của nguyên tử trung tâm trong $\\mathrm{[Co(C_2O_4)_3]^{3-}}$ là bao nhiêu?',
      answer: 6,
      hints: ['Ion oxalate là phối tử hai càng.'],
      solution: 'Số phối trí $= 3 \\cdot 2 = 6$.',
    },
    {
      type: 'number',
      prompt: 'Số phối trí của Pt trong phức chất $\\mathrm{[PtCl_2(en)]}$ là bao nhiêu?',
      answer: 4,
      hints: ['Cộng số liên kết của các phối tử $\\mathrm{Cl^-}$ và của phối tử en.'],
      solution: 'Số phối trí $= 2 \\cdot 1 + 1 \\cdot 2 = 4$.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của Cr trong ion phức $\\mathrm{[Cr(C_2O_4)_3]^{3-}}$ là bao nhiêu?',
      answer: 3,
      hints: ['Mỗi ion oxalate mang điện tích $-2$.'],
      solution: '$x + 3 \\cdot (-2) = -3 \\Rightarrow x = +3$.',
    },
    {
      type: 'choice',
      prompt: 'Tên gọi đúng của phức chất $\\mathrm{[Cu(NH_3)_4]SO_4}$ là',
      options: [
        'tetraamminecopper(II) sulfate',
        'tetraamminecuprate(II) sulfate',
        'tetraamminecopper(IV) sulfate',
        'tetraammonium copper(II) sulfate',
      ],
      answer: 0,
      hints: [
        'Cầu nội $\\mathrm{[Cu(NH_3)_4]^{2+}}$ là cation hay anion? Số La Mã ứng với số oxi hoá của Cu chứ không phải số phối tử.',
      ],
      solution:
        'Cầu nội là cation nên giữ tên copper; Cu có số oxi hoá $+2$; $\\mathrm{NH_3}$ là phối tử ammine (không phải ion ammonium). Tên: tetraamminecopper(II) sulfate.',
    },
    {
      type: 'text',
      prompt:
        'Viết tên IUPAC của ion phức $\\mathrm{[Zn(OH)_4]^{2-}}$ (chỉ phần tên, không cần chữ "ion").',
      accept: [
        'tetrahydroxidozincate(II)',
        'tetrahydroxido zincate(II)',
        'tetrahydroxidozincate (II)',
      ],
      hints: [
        'Phối tử $\\mathrm{OH^-}$ là hydroxido; ion phức mang điện âm nên tên kim loại có đuôi "ate".',
      ],
      solution:
        '4 phối tử hydroxido → tetrahydroxido; anion nên zinc → zincate; Zn có số oxi hoá $+2$: tetrahydroxidozincate(II).',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phối tử với dung lượng phối trí của nó.',
      left: ['$\\mathrm{CN^-}$', '$\\mathrm{C_2O_4^{2-}}$', '$\\mathrm{EDTA^{4-}}$'],
      right: ['1', '2', '6', '4'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đếm số nguyên tử cho của mỗi phối tử.'],
      solution:
        '$\\mathrm{CN^-}$ cho qua nguyên tử C: 1. Oxalate cho qua hai nguyên tử O: 2. $\\mathrm{EDTA^{4-}}$ cho qua 2 nguyên tử N và 4 nguyên tử O: 6.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các phức chất theo độ bền tăng dần, biết $\\lg \\beta$ lần lượt: $\\mathrm{[Cu(NH_3)_4]^{2+}}$ 13,3; $\\mathrm{[Ag(CN)_2]^-}$ 21; $\\mathrm{[Ag(NH_3)_2]^+}$ 7,2; $\\mathrm{[Zn(NH_3)_4]^{2+}}$ 9,5.',
      items: [
        '$\\mathrm{[Cu(NH_3)_4]^{2+}}$',
        '$\\mathrm{[Ag(CN)_2]^-}$',
        '$\\mathrm{[Ag(NH_3)_2]^+}$',
        '$\\mathrm{[Zn(NH_3)_4]^{2+}}$',
      ],
      answer: [2, 3, 0, 1],
      hints: ['Hằng số bền càng lớn thì phức chất càng bền.'],
      solution:
        '$7{,}2 < 9{,}5 < 13{,}3 < 21$: $\\mathrm{[Ag(NH_3)_2]^+} < \\mathrm{[Zn(NH_3)_4]^{2+}} < \\mathrm{[Cu(NH_3)_4]^{2+}} < \\mathrm{[Ag(CN)_2]^-}$.',
    },
    {
      type: 'number',
      prompt:
        'Phức chất $\\mathrm{[Cu(NH_3)_4]^{2+}}$ có $\\beta = 10^{13}$. Trong một dung dịch, nồng độ $\\mathrm{NH_3}$ tự do ở cân bằng là $0{,}1$ M. Tỉ số $[\\mathrm{Cu(NH_3)_4^{2+}}] : [\\mathrm{Cu^{2+}}]$ bằng $10^{k}$. Tìm $k$.',
      answer: 9,
      hints: ['Tỉ số bằng $\\beta \\cdot [\\mathrm{NH_3}]^4$.', '$(0{,}1)^4 = 10^{-4}$.'],
      solution: 'Tỉ số $= 10^{13} \\cdot (10^{-1})^4 = 10^{9}$, nên $k = 9$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng.',
      options: [
        'Số phối trí của nguyên tử trung tâm luôn bằng số phối tử.',
        'Phối tử en kẹp nguyên tử trung tâm tạo vòng 5 cạnh.',
        'Ở cùng điều kiện, hằng số bền càng lớn thì phức chất càng bền.',
        'Khi cầu nội là anion, tên nguyên tử trung tâm có đuôi "ate".',
        'Trong tên phức chất, số La Mã chỉ số phối tử.',
      ],
      answers: [1, 2, 3],
      hints: ['Nghĩ tới phức chất $\\mathrm{[Ni(en)_3]^{2+}}$ khi xét phát biểu về số phối trí.'],
      solution:
        'Số phối trí chỉ bằng số phối tử khi mọi phối tử là một càng ($\\mathrm{[Ni(en)_3]^{2+}}$: 3 phối tử, số phối trí 6). Vòng $\\mathrm{M{-}N{-}C{-}C{-}N}$ có 5 cạnh. $\\beta$ lớn thì phức chất bền. Anion phức có đuôi "ate". Số La Mã là số oxi hoá của nguyên tử trung tâm.',
    },
    {
      type: 'choice',
      prompt:
        'Thêm dung dịch KCN vào dung dịch chứa $\\mathrm{[Ag(NH_3)_2]^+}$ ($\\lg \\beta \\approx 7{,}2$). Biết $\\mathrm{[Ag(CN)_2]^-}$ có $\\lg \\beta \\approx 21$. Hiện tượng nào xảy ra?',
      options: [
        'Phức chất $\\mathrm{[Ag(NH_3)_2]^+}$ chuyển thành $\\mathrm{[Ag(CN)_2]^-}$.',
        'Không có phản ứng vì $\\mathrm{[Ag(NH_3)_2]^+}$ đã là phức chất.',
        'Xuất hiện kết tủa bạc kim loại.',
        'Phức chất $\\mathrm{[Ag(CN)_2]^-}$ chuyển thành $\\mathrm{[Ag(NH_3)_2]^+}$.',
      ],
      answer: 0,
      hints: ['Phức chất kém bền có xu hướng chuyển thành phức chất bền hơn.'],
      solution:
        '$\\beta$ của $\\mathrm{[Ag(CN)_2]^-}$ lớn hơn rất nhiều nên phản ứng $\\mathrm{[Ag(NH_3)_2]^+} + 2\\mathrm{CN^-} \\rightarrow \\mathrm{[Ag(CN)_2]^-} + 2\\mathrm{NH_3}$ xảy ra.',
    },
  ],
  takeaways: [
    'Dung lượng phối trí = số liên kết $\\sigma$ một phối tử tạo với nguyên tử trung tâm: $\\mathrm{Cl^-}$, $\\mathrm{NH_3}$ là 1; en, $\\mathrm{C_2O_4^{2-}}$ là 2; $\\mathrm{EDTA^{4-}}$ là 6.',
    'Số phối trí = tổng số liên kết $\\sigma$ quanh nguyên tử trung tâm = $\\sum$ (số phối tử $\\times$ dung lượng phối trí); thường là 2, 4 hoặc 6.',
    'Tên phức chất: tiền tố số lượng + tên phối tử (theo bảng chữ cái) + tên kim loại (đuôi "ate" nếu là anion) + số oxi hoá bằng số La Mã.',
    'Hằng số bền $\\beta$ càng lớn, phức chất càng bền; phức chất vòng càng bền hơn phức chất của phối tử một càng tương ứng.',
  ],
};
