/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Polymer: khái niệm, cấu trúc, tính chất và hai phương pháp tổng hợp polymer; các vật liệu polymer (chất dẻo, composite, tơ, cao su, keo dán) cùng monomer tạo ra chúng; ứng dụng, ký hiệu tái chế và vấn đề rác thải nhựa; luyện các dạng bài về hệ số polymer hoá, số mắt xích và khối lượng polymer.',
  intro:
    'Từ túi nylon, chai nước PET đến lốp xe và sợi vải, mọi vật liệu trong chương đều là những phân tử rất lớn ghép từ các monomer. Biết monomer và cách ghép (trùng hợp hay trùng ngưng) là biết được mắt xích, tính chất và cả cách tái chế vật liệu. Bài ôn tập này hệ thống lại kiến thức và luyện các dạng bài tính toán của chương.',
  objectives: [
    'Hệ thống được khái niệm, cấu trúc, tính chất và phương pháp tổng hợp polymer.',
    'Nhận ra được monomer, mắt xích và phương pháp tổng hợp của các polymer thông dụng.',
    'Phân loại được các vật liệu polymer và nêu được ứng dụng, cách sử dụng an toàn, tái chế.',
    'Giải được các bài tập về hệ số polymer hoá, số mắt xích và khối lượng polymer tạo thành.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Hai phương pháp tổng hợp polymer',
          head: ['Đặc điểm', 'Trùng hợp', 'Trùng ngưng'],
          rows: [
            [
              'Điều kiện của monomer',
              'Có liên kết bội hoặc vòng kém bền',
              'Có ít nhất hai nhóm chức có khả năng phản ứng',
            ],
            ['Sản phẩm phụ', 'Không có', 'Phân tử nhỏ, thường là $\\mathrm{H_2O}$'],
            [
              'Khối lượng polymer',
              'Bằng khối lượng monomer đã phản ứng',
              'Bằng khối lượng monomer trừ khối lượng nước tách ra',
            ],
            [
              'Ví dụ',
              'PE, PP, PVC, PS, PMMA, tơ nitron, tơ capron, cao su buna',
              'nylon-6,6, poly(ethylene terephthalate), nylon-6 từ ε-aminocaproic acid',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Monomer và mắt xích của một số polymer',
          head: ['Polymer', 'Monomer', 'Mắt xích'],
          rows: [
            ['Polyethylene (PE)', '$\\mathrm{CH_2{=}CH_2}$', '$\\mathrm{{-}CH_2{-}CH_2{-}}$'],
            [
              'Poly(vinyl chloride) (PVC)',
              '$\\mathrm{CH_2{=}CHCl}$',
              '$\\mathrm{{-}CH_2{-}CHCl{-}}$',
            ],
            [
              'Polystyrene (PS)',
              '$\\mathrm{CH_2{=}CH{-}C_6H_5}$',
              '$\\mathrm{{-}CH_2{-}CH(C_6H_5){-}}$',
            ],
            ['Tơ nitron', '$\\mathrm{CH_2{=}CH{-}CN}$', '$\\mathrm{{-}CH_2{-}CH(CN){-}}$'],
            [
              'Cao su buna',
              '$\\mathrm{CH_2{=}CH{-}CH{=}CH_2}$',
              '$\\mathrm{{-}CH_2{-}CH{=}CH{-}CH_2{-}}$',
            ],
            [
              'Cao su thiên nhiên',
              'isoprene $\\mathrm{CH_2{=}C(CH_3){-}CH{=}CH_2}$',
              '$\\mathrm{{-}CH_2{-}C(CH_3){=}CH{-}CH_2{-}}$',
            ],
            ['Tơ capron', 'caprolactam', '$\\mathrm{{-}NH{-}[CH_2]_5{-}CO{-}}$'],
            [
              'Tơ nylon-6,6',
              'hexamethylenediamine và adipic acid',
              '$\\mathrm{{-}NH{-}[CH_2]_6{-}NH{-}CO{-}[CH_2]_4{-}CO{-}}$',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Cấu trúc mạch: không phân nhánh (PE, amylose), phân nhánh (amylopectin, glycogen), mạng không gian (cao su lưu hoá, nhựa rezit).',
            'Tính chất hoá học: cắt mạch (thuỷ phân polyamide, tinh bột; nhiệt phân polystyrene), giữ nguyên mạch (thuỷ phân poly(vinyl acetate)), tăng mạch (lưu hoá cao su).',
            'Vật liệu polymer: chất dẻo (có tính dẻo), vật liệu composite (nền polymer và cốt sợi hoặc hạt), tơ (hình sợi dài, mảnh), cao su (đàn hồi), keo dán (kết dính hai vật liệu rắn).',
            'Tơ gồm tơ tự nhiên (bông, len, tơ tằm), tơ tổng hợp (nylon-6,6, capron, nitron) và tơ bán tổng hợp (visco, cellulose acetate).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Sử dụng và tái chế',
          text: 'Ký hiệu tái chế: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS. Tơ polyamide kém bền trong acid và base nên không giặt bằng nước quá nóng hoặc xà phòng kiềm mạnh. Rác thải nhựa khó phân huỷ: cần phân loại, tái sử dụng, tái chế và hạn chế đồ nhựa dùng một lần; không đốt rác nhựa ngoài trời.',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Hệ số polymer hoá (số mắt xích): $n = \\dfrac{M_{\\text{polymer}}}{M_{\\text{mắt xích}}}$. Với polymer trùng hợp, $M_{\\text{mắt xích}} = M_{\\text{monomer}}$; với polymer trùng ngưng, $M_{\\text{mắt xích}}$ bằng tổng phân tử khối các monomer trừ phân tử khối nước tách ra.',
            'Khối lượng polymer trùng hợp: $m_{\\text{polymer}} = m_{\\text{monomer}} \\cdot H$, với $H$ là hiệu suất.',
            'Khối lượng polymer trùng ngưng: $m_{\\text{polymer}} = n_{\\text{mắt xích}} \\cdot M_{\\text{mắt xích}}$, hoặc khối lượng monomer phản ứng trừ khối lượng nước tách ra.',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Ghép polymer với monomer',
    instruction:
      'Mỗi thẻ là tên một polymer hoặc mắt xích của nó. Chọn thẻ rồi đặt vào ô monomer tạo ra polymer đó. Mỗi ô có đúng hai thẻ.',
  },
  examples: [
    {
      problem:
        'Cho các polymer: PE, nylon-6,6, PVC, poly(ethylene terephthalate), tơ capron. Xác định monomer và phương pháp tổng hợp của mỗi polymer.',
      steps: [
        'PE từ ethylene, PVC từ vinyl chloride: monomer có liên kết đôi $\\mathrm{C{=}C}$, tổng hợp bằng trùng hợp.',
        'Tơ capron từ caprolactam (vòng kém bền): trùng hợp mở vòng.',
        'Nylon-6,6 từ hexamethylenediamine và adipic acid, poly(ethylene terephthalate) từ terephthalic acid và ethylene glycol: mỗi monomer có hai nhóm chức, tổng hợp bằng trùng ngưng và tách nước.',
      ],
      answer:
        'Trùng hợp: PE, PVC, tơ capron; trùng ngưng: nylon-6,6 và poly(ethylene terephthalate).',
    },
    {
      problem:
        'Trùng ngưng $16{,}6$ kg terephthalic acid với lượng vừa đủ ethylene glycol, hiệu suất $80\\%$. Tính khối lượng poly(ethylene terephthalate) thu được.',
      steps: [
        '$n_{\\text{terephthalic acid}} = \\dfrac{16{,}6}{166} = 0{,}1$ kmol; với hiệu suất $80\\%$, số mol phản ứng là $0{,}08$ kmol.',
        'Mỗi phân tử terephthalic acid tạo một mắt xích $\\mathrm{{-}CO{-}C_6H_4{-}CO{-}O{-}CH_2{-}CH_2{-}O{-}}$, $M = 166 + 62 - 2 \\cdot 18 = 192$.',
        '$m = 0{,}08 \\cdot 192 = 15{,}36$ kg.',
      ],
      answer: 'Thu được $15{,}36$ kg poly(ethylene terephthalate).',
    },
    {
      problem:
        'Một loại tơ nitron có phân tử khối trung bình là $106\\,000$. Tính hệ số polymer hoá.',
      steps: [
        'Mắt xích $\\mathrm{{-}CH_2{-}CH(CN){-}}$ có $M = 3 \\cdot 12 + 3 + 14 = 53$.',
        '$n = \\dfrac{106\\,000}{53} = 2\\,000$.',
      ],
      answer: 'Hệ số polymer hoá là $2\\,000$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Polymer nào sau đây được tổng hợp bằng phản ứng trùng ngưng?',
      options: [
        'poly(ethylene terephthalate)',
        'poly(vinyl chloride)',
        'polyethylene',
        'polyacrylonitrile',
      ],
      answer: 0,
      hints: ['Phản ứng trùng ngưng cần monomer có hai nhóm chức và tách ra nước.'],
      solution:
        'Poly(ethylene terephthalate) tạo từ terephthalic acid và ethylene glycol, tách nước: trùng ngưng. Ba polymer còn lại tổng hợp bằng phản ứng trùng hợp.',
    },
    {
      type: 'choice',
      prompt: 'Tơ nào sau đây thuộc loại polyamide?',
      options: ['tơ capron', 'tơ nitron', 'tơ visco', 'tơ cellulose acetate'],
      answer: 0,
      hints: ['Polyamide có nhóm $\\mathrm{{-}CO{-}NH{-}}$ trong mạch.'],
      solution:
        'Mắt xích của tơ capron $\\mathrm{{-}NH{-}[CH_2]_5{-}CO{-}}$ chứa nhóm amide: tơ polyamide. Tơ nitron là polyacrylonitrile; tơ visco và cellulose acetate có nguồn gốc cellulose.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào có thể làm monomer cho phản ứng trùng ngưng?',
      options: [
        'adipic acid',
        'ethylene glycol',
        'hexamethylenediamine',
        'styrene',
        'vinyl chloride',
        'ethanol',
      ],
      answers: [0, 1, 2],
      hints: ['Monomer trùng ngưng có ít nhất hai nhóm chức có khả năng phản ứng.'],
      solution:
        'Adipic acid (hai nhóm $\\mathrm{{-}COOH}$), ethylene glycol (hai nhóm $\\mathrm{{-}OH}$), hexamethylenediamine (hai nhóm $\\mathrm{{-}NH_2}$) trùng ngưng được. Styrene, vinyl chloride chỉ trùng hợp; ethanol có một nhóm chức nên không tạo polymer.',
    },
    {
      type: 'number',
      prompt: 'Một loại PVC có phân tử khối trung bình là $250\\,000$. Tính hệ số polymer hoá.',
      answer: 4000,
      hints: ['Mắt xích $\\mathrm{{-}CH_2{-}CHCl{-}}$ có $M = 62{,}5$.'],
      solution: '$n = \\dfrac{250\\,000}{62{,}5} = 4\\,000$.',
    },
    {
      type: 'number',
      prompt:
        'Một loại polystyrene có phân tử khối trung bình là $104\\,000$. Tính hệ số polymer hoá.',
      answer: 1000,
      hints: ['Mắt xích $\\mathrm{{-}CH_2{-}CH(C_6H_5){-}}$ có công thức $\\mathrm{C_8H_8}$.'],
      solution:
        '$M_{\\text{mắt xích}} = 8 \\cdot 12 + 8 = 104$; $n = \\dfrac{104\\,000}{104} = 1\\,000$.',
    },
    {
      type: 'number',
      prompt:
        'Trùng hợp $4{,}2$ tấn propylene với hiệu suất $75\\%$. Tính khối lượng polypropylene thu được.',
      answer: 3.15,
      tolerance: 0.001,
      unit: 'tấn',
      hints: [
        'Trùng hợp không tách ra phân tử nhỏ: khối lượng polymer bằng khối lượng monomer phản ứng.',
      ],
      solution: '$m = 4{,}2 \\cdot 75\\% = 3{,}15$ tấn.',
    },
    {
      type: 'number',
      prompt:
        'Trùng ngưng hoàn toàn $11{,}6$ kg hexamethylenediamine với lượng vừa đủ adipic acid. Tính khối lượng nylon-6,6 thu được (bỏ qua hai đầu mạch).',
      answer: 22.6,
      tolerance: 0.01,
      unit: 'kg',
      hints: [
        '$M_{\\mathrm{H_2N[CH_2]_6NH_2}} = 116$; mỗi phân tử diamine tạo một mắt xích.',
        'Mắt xích nylon-6,6 có $M = 116 + 146 - 2 \\cdot 18$.',
      ],
      solution:
        '$n = \\dfrac{11{,}6}{116} = 0{,}1$ kmol; $M_{\\text{mắt xích}} = 226$; $m = 0{,}1 \\cdot 226 = 22{,}6$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Một đoạn mạch poly(ethylene terephthalate) có phân tử khối là $38\\,400$. Tính số mắt xích.',
      answer: 200,
      hints: [
        'Mắt xích $\\mathrm{{-}CO{-}C_6H_4{-}CO{-}O{-}CH_2{-}CH_2{-}O{-}}$ có $M = 166 + 62 - 2 \\cdot 18$.',
      ],
      solution: '$M_{\\text{mắt xích}} = 192$; số mắt xích $= \\dfrac{38\\,400}{192} = 200$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi polymer với monomer tạo ra nó.',
      left: ['thuỷ tinh hữu cơ PMMA', 'tơ nitron', 'cao su thiên nhiên', 'polystyrene'],
      right: ['methyl methacrylate', 'acrylonitrile', 'isoprene', 'styrene', 'vinyl chloride'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Tên polymer thường là poly + tên monomer: polyacrylonitrile, polyisoprene.'],
      solution:
        'PMMA từ methyl methacrylate, tơ nitron (polyacrylonitrile) từ acrylonitrile, cao su thiên nhiên (polyisoprene) từ isoprene, polystyrene từ styrene.',
    },
    {
      type: 'choice',
      prompt: 'Việc làm nào sau đây không nên làm khi xử lí rác thải nhựa?',
      options: [
        'đốt rác nhựa ngoài trời',
        'phân loại rác nhựa theo ký hiệu tái chế',
        'tái sử dụng chai lọ, hộp nhựa còn dùng được',
        'hạn chế dùng túi nylon và đồ nhựa dùng một lần',
      ],
      answer: 0,
      hints: ['Đốt nhựa tạo ra khói và khí độc.'],
      solution:
        'Đốt rác nhựa ngoài trời thải ra nhiều khí độc (PVC cháy tạo HCl), gây ô nhiễm không khí. Phân loại, tái sử dụng và hạn chế đồ nhựa dùng một lần đều là biện pháp đúng.',
    },
    {
      type: 'text',
      prompt: 'Hộp xốp đựng thức ăn in ký hiệu tái chế số 6. Viết tên viết tắt của chất dẻo đó.',
      accept: ['PS', 'polystyrene'],
      hints: ['Thứ tự ký hiệu: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 ...'],
      solution: 'Ký hiệu số 6 là PS, polystyrene, tổng hợp bằng phản ứng trùng hợp styrene.',
    },
    {
      type: 'choice',
      prompt: 'Trong vật liệu composite, vai trò của vật liệu nền là',
      options: [
        'liên kết các vật liệu cốt thành một khối thống nhất',
        'bảo đảm đặc tính cơ học như độ bền, độ cứng',
        'làm chất xúc tác cho phản ứng trùng hợp',
        'làm cho vật liệu dẫn điện',
      ],
      answer: 0,
      hints: ['Composite gồm vật liệu cốt (sợi, hạt) và vật liệu nền (thường là polymer).'],
      solution:
        'Vật liệu nền liên kết các vật liệu cốt thành một khối thống nhất; vật liệu cốt bảo đảm các đặc tính cơ học cần thiết.',
    },
  ],
  takeaways: [
    'Trùng hợp: monomer có liên kết bội hoặc vòng kém bền, không tách phân tử nhỏ; trùng ngưng: monomer có ít nhất hai nhóm chức, tách ra phân tử nhỏ như nước.',
    'Hệ số polymer hoá $n = \\dfrac{M_{\\text{polymer}}}{M_{\\text{mắt xích}}}$; mắt xích polymer trùng ngưng bằng các monomer trừ nước.',
    'Khối lượng polymer trùng hợp bằng khối lượng monomer phản ứng; khối lượng polymer trùng ngưng bằng khối lượng monomer trừ nước tách ra.',
    'Vật liệu polymer gồm chất dẻo, composite, tơ, cao su và keo dán; phân loại rác nhựa theo ký hiệu tái chế 1 đến 6 để tái chế đúng loại.',
  ],
};
