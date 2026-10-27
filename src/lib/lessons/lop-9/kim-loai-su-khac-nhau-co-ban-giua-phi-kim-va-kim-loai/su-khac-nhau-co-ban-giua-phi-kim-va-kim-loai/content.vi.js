/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại dẫn điện, dẫn nhiệt tốt, có ánh kim và hầu hết ở thể rắn; phi kim thường không dẫn điện, có thể ở thể rắn, lỏng hoặc khí và có nhiệt độ nóng chảy thấp hơn. Về hoá học, kim loại dễ nhường electron tạo ion dương và thường tạo oxide base, còn phi kim dễ nhận electron tạo ion âm và thường tạo oxide acid. Carbon, sulfur, chlorine là những phi kim có nhiều ứng dụng.',
  intro:
    'Lõi dây điện bằng đồng, còn vỏ dây bằng nhựa; ruột bút chì là than chì, còn mũi khoan đá là kim cương. Kim loại và phi kim khác nhau ở những điểm nào, và vì sao khi gặp nhau chúng lại tạo ra những chất như muối ăn $\\mathrm{NaCl}$?',
  objectives: [
    'Nêu được ứng dụng của một số phi kim quan trọng: carbon, sulfur, chlorine.',
    'Nêu được sự khác nhau cơ bản giữa kim loại và phi kim về tính chất vật lí.',
    'Nêu được sự khác nhau về tính chất hoá học: kim loại dễ nhường electron tạo ion dương, phi kim dễ nhận electron tạo ion âm; kim loại thường tạo oxide base, phi kim thường tạo oxide acid.',
  ],
  sections: [
    {
      heading: 'Ứng dụng của một số phi kim',
      blocks: [
        {
          type: 'table',
          head: ['Phi kim', 'Ứng dụng'],
          rows: [
            [
              'Carbon',
              'Than hoạt tính (hấp phụ tốt) làm mặt nạ phòng độc, khử màu, khử mùi; than cốc làm nhiên liệu và chất khử trong luyện kim; than chì làm điện cực, chất bôi trơn, ruột bút chì; kim cương làm trang sức, mũi khoan, dao cắt kính.',
            ],
            [
              'Sulfur',
              'Nguyên liệu sản xuất sulfuric acid; lưu hoá cao su; sản xuất diêm, thuốc trừ sâu, dược phẩm.',
            ],
            [
              'Chlorine',
              'Khử trùng nước sinh hoạt; sản xuất nước Javel, chất tẩy rửa; tẩy trắng vải, bột giấy; sản xuất chất dẻo.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Khác nhau về tính chất vật lí',
      blocks: [
        {
          type: 'table',
          head: ['Tính chất', 'Kim loại', 'Phi kim'],
          rows: [
            [
              'Trạng thái ở nhiệt độ thường',
              'Hầu hết ở thể rắn (trừ $\\mathrm{Hg}$ ở thể lỏng)',
              'Thể khí ($\\mathrm{H_2}$, $\\mathrm{N_2}$, $\\mathrm{O_2}$, $\\mathrm{F_2}$, $\\mathrm{Cl_2}$), thể lỏng ($\\mathrm{Br_2}$) hoặc thể rắn ($\\mathrm{C}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$)',
            ],
            [
              'Tính dẫn điện, dẫn nhiệt',
              'Dẫn điện, dẫn nhiệt tốt',
              'Thường không dẫn điện, dẫn nhiệt kém; than chì dẫn điện nhưng kém kim loại, silicon tinh khiết là chất bán dẫn',
            ],
            [
              'Ánh kim, tính dẻo',
              'Có ánh kim, dát mỏng và kéo sợi được',
              'Không có ánh kim; phi kim rắn thường giòn',
            ],
            ['Nhiệt độ nóng chảy, nhiệt độ sôi', 'Thường cao', 'Phần lớn thấp hơn kim loại'],
            ['Khối lượng riêng', 'Thường lớn', 'Phần lớn nhỏ hơn kim loại'],
          ],
        },
      ],
    },
    {
      heading: 'Khác nhau về tính chất hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ion dương và ion âm',
          text: 'Trong phản ứng giữa kim loại và phi kim, nguyên tử kim loại dễ nhường electron lớp ngoài cùng tạo thành ion dương; nguyên tử phi kim dễ nhận electron tạo thành ion âm. Các ion trái dấu hút nhau tạo thành hợp chất.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Na} \\rightarrow \\mathrm{Na^+} + 1e \\qquad \\mathrm{Cl} + 1e \\rightarrow \\mathrm{Cl^-} \\qquad 2\\mathrm{Na} + \\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{NaCl}',
        },
        {
          type: 'p',
          text: 'Nguyên tử kim loại thường có ít electron lớp ngoài cùng ($1$, $2$ hoặc $3$) nên dễ nhường đi; nguyên tử phi kim thường có nhiều electron lớp ngoài cùng ($5$, $6$ hoặc $7$) nên dễ nhận thêm cho đủ $8$. Ví dụ: $\\mathrm{Mg} \\rightarrow \\mathrm{Mg^{2+}} + 2e$, $\\mathrm{O} + 2e \\rightarrow \\mathrm{O^{2-}}$.',
        },
        { type: 'widget', name: 'ion' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng với oxygen',
          text: 'Kim loại tác dụng với oxygen thường tạo oxide base; phi kim tác dụng với oxygen thường tạo oxide acid.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Mg} + \\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{MgO} \\qquad \\mathrm{S} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{SO_2}',
        },
        {
          type: 'table',
          caption: 'Tóm tắt sự khác nhau về tính chất hoá học',
          head: ['Đặc điểm', 'Kim loại', 'Phi kim'],
          rows: [
            [
              'Xu hướng với electron',
              'Dễ nhường electron, tạo ion dương',
              'Dễ nhận electron, tạo ion âm',
            ],
            [
              'Oxide tạo thành',
              'Thường là oxide base ($\\mathrm{MgO}$, $\\mathrm{CaO}$)',
              'Thường là oxide acid ($\\mathrm{SO_2}$, $\\mathrm{CO_2}$, $\\mathrm{P_2O_5}$)',
            ],
            [
              'Với dung dịch acid loãng',
              'Kim loại đứng trước H giải phóng $\\mathrm{H_2}$',
              'Không giải phóng $\\mathrm{H_2}$',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp thẻ: kim loại hay phi kim?',
    instruction:
      'Chọn một thẻ tính chất rồi chọn cột “Kim loại” hoặc “Phi kim” (hoặc kéo thẻ vào cột). Mỗi lần đặt, em được biết đúng hay sai và lí do. Xếp hết các thẻ để có bảng so sánh hai cột.',
  },
  examples: [
    {
      problem:
        'Mô tả sự tạo thành ion khi magnesium tác dụng với oxygen và viết phương trình hoá học. Biết Mg có $2$ electron lớp ngoài cùng, O có $6$ electron lớp ngoài cùng.',
      steps: [
        'Nguyên tử Mg nhường $2$ electron lớp ngoài cùng: $\\mathrm{Mg} \\rightarrow \\mathrm{Mg^{2+}} + 2e$.',
        'Nguyên tử O nhận $2$ electron cho đủ $8$: $\\mathrm{O} + 2e \\rightarrow \\mathrm{O^{2-}}$.',
        'Số electron nhường bằng số electron nhận nên ion $\\mathrm{Mg^{2+}}$ và $\\mathrm{O^{2-}}$ kết hợp theo tỉ lệ $1 : 1$, tạo $\\mathrm{MgO}$.',
        'Phân tử oxygen là $\\mathrm{O_2}$ nên cần $2$ nguyên tử Mg cho mỗi phân tử $\\mathrm{O_2}$.',
      ],
      answer: '$2\\mathrm{Mg} + \\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{MgO}$.',
    },
    {
      problem:
        'Nhôm (3 electron lớp ngoài cùng) tác dụng với oxygen. Mỗi nguyên tử O nhận 2 electron. Xác định công thức của oxide tạo thành và viết phương trình hoá học.',
      steps: [
        'Mỗi nguyên tử Al nhường $3$ electron tạo $\\mathrm{Al^{3+}}$; mỗi nguyên tử O nhận $2$ electron tạo $\\mathrm{O^{2-}}$.',
        'Bội chung nhỏ nhất của $3$ và $2$ là $6$: cần $2$ nguyên tử Al (nhường $6$ electron) và $3$ nguyên tử O (nhận $6$ electron).',
        'Công thức: $\\mathrm{Al_2O_3}$. Phương trình: $4\\mathrm{Al} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{Al_2O_3}$.',
      ],
      answer:
        '$\\mathrm{Al_2O_3}$; $4\\mathrm{Al} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{Al_2O_3}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phi kim nào sau đây ở thể lỏng ở nhiệt độ thường?',
      options: ['$\\mathrm{Cl_2}$', '$\\mathrm{Br_2}$', '$\\mathrm{S}$', '$\\mathrm{O_2}$'],
      answer: 1,
      hints: ['Chỉ có một phi kim ở thể lỏng; nó có màu nâu đỏ.'],
      solution:
        'Bromine $\\mathrm{Br_2}$ ở thể lỏng; $\\mathrm{Cl_2}$, $\\mathrm{O_2}$ ở thể khí; $\\mathrm{S}$ ở thể rắn.',
    },
    {
      type: 'multi',
      prompt: 'Những tính chất nào là tính chất vật lí thường gặp của phi kim?',
      options: [
        'Thường không dẫn điện',
        'Có ánh kim',
        'Có thể ở thể rắn, lỏng hoặc khí',
        'Nhiệt độ nóng chảy phần lớn thấp hơn kim loại',
        'Dát mỏng, kéo sợi được',
      ],
      answers: [0, 2, 3],
      hints: ['Ánh kim và tính dẻo là tính chất của kim loại.'],
      solution:
        'Phi kim thường không dẫn điện, có thể ở cả ba thể, nhiệt độ nóng chảy phần lớn thấp. Ánh kim và tính dẻo là tính chất của kim loại.',
    },
    {
      type: 'choice',
      prompt: 'Phi kim nào sau đây dẫn được điện?',
      options: ['Lưu huỳnh', 'Than chì (graphite)', 'Phosphorus', 'Oxygen'],
      answer: 1,
      hints: ['Phi kim này được dùng làm điện cực.'],
      solution:
        'Than chì dẫn được điện (kém hơn kim loại) nên được dùng làm điện cực; lưu huỳnh, phosphorus, oxygen không dẫn điện.',
    },
    {
      type: 'choice',
      prompt: 'Khi tác dụng với chlorine, nguyên tử sodium',
      options: [
        'nhận 1 electron, tạo ion âm',
        'nhường 1 electron, tạo ion dương $\\mathrm{Na^+}$',
        'nhường 7 electron, tạo ion $\\mathrm{Na^{7+}}$',
        'không nhường cũng không nhận electron',
      ],
      answer: 1,
      hints: ['Sodium là kim loại, có 1 electron lớp ngoài cùng.'],
      solution:
        '$\\mathrm{Na} \\rightarrow \\mathrm{Na^+} + 1e$: kim loại dễ nhường electron tạo ion dương.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử sulfur có $6$ electron lớp ngoài cùng. Khi tạo ion âm, mỗi nguyên tử sulfur nhận thêm bao nhiêu electron?',
      answer: 2,
      hints: ['Phi kim nhận electron cho đủ $8$ electron lớp ngoài cùng.'],
      solution: '$8 - 6 = 2$: $\\mathrm{S} + 2e \\rightarrow \\mathrm{S^{2-}}$.',
    },
    {
      type: 'choice',
      prompt: 'Oxide nào sau đây là oxide acid, tạo thành khi đốt một phi kim trong oxygen?',
      options: ['$\\mathrm{MgO}$', '$\\mathrm{CaO}$', '$\\mathrm{SO_2}$', '$\\mathrm{Na_2O}$'],
      answer: 2,
      hints: ['Tìm oxide có nguyên tố phi kim.'],
      solution:
        '$\\mathrm{S} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{SO_2}$: $\\mathrm{SO_2}$ là oxide acid. $\\mathrm{MgO}$, $\\mathrm{CaO}$, $\\mathrm{Na_2O}$ là oxide base của kim loại.',
    },
    {
      type: 'choice',
      prompt:
        'Calcium ($2$ electron lớp ngoài cùng) tác dụng với chlorine ($7$ electron lớp ngoài cùng). Công thức hợp chất tạo thành là',
      options: [
        '$\\mathrm{CaCl}$',
        '$\\mathrm{CaCl_2}$',
        '$\\mathrm{Ca_2Cl}$',
        '$\\mathrm{CaCl_7}$',
      ],
      answer: 1,
      hints: ['Mỗi nguyên tử Ca nhường 2 electron; mỗi nguyên tử Cl nhận 1 electron.'],
      solution:
        '$\\mathrm{Ca} \\rightarrow \\mathrm{Ca^{2+}} + 2e$; $2$ nguyên tử Cl mỗi nguyên tử nhận $1e$ tạo $2\\mathrm{Cl^-}$. Công thức $\\mathrm{CaCl_2}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dạng của carbon với ứng dụng của nó.',
      left: ['Than hoạt tính', 'Than chì', 'Kim cương', 'Than cốc'],
      right: [
        'Làm mũi khoan, dao cắt kính',
        'Làm mặt nạ phòng độc, khử màu, khử mùi',
        'Làm chất khử trong luyện kim',
        'Làm điện cực, ruột bút chì',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Kim cương rất cứng; than hoạt tính hấp phụ tốt.'],
      solution:
        'Than hoạt tính: mặt nạ phòng độc, khử màu, khử mùi; than chì: điện cực, ruột bút chì; kim cương: mũi khoan, dao cắt kính; than cốc: chất khử trong luyện kim.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hết $3{,}2$ g sulfur trong oxygen. Tính thể tích khí $\\mathrm{SO_2}$ thu được ở điều kiện chuẩn, theo lít (S = 32).',
      answer: 2.479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$\\mathrm{S} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{SO_2}$: $n_{\\mathrm{SO_2}} = n_{\\mathrm{S}}$.',
        'Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{S}} = \\dfrac{3{,}2}{32} = 0{,}1$ mol $= n_{\\mathrm{SO_2}}$; $V = 0{,}1 \\times 24{,}79 = 2{,}479$ L.',
    },
  ],
  takeaways: [
    'Kim loại: hầu hết rắn, dẫn điện, dẫn nhiệt tốt, có ánh kim, dẻo. Phi kim: rắn, lỏng hoặc khí, thường không dẫn điện, nhiệt độ nóng chảy thấp hơn.',
    'Kim loại dễ nhường electron tạo ion dương ($\\mathrm{Na^+}$, $\\mathrm{Mg^{2+}}$); phi kim dễ nhận electron tạo ion âm ($\\mathrm{Cl^-}$, $\\mathrm{O^{2-}}$).',
    'Kim loại tác dụng với oxygen thường tạo oxide base; phi kim tác dụng với oxygen thường tạo oxide acid.',
    'Carbon, sulfur, chlorine là những phi kim có nhiều ứng dụng trong đời sống và sản xuất.',
  ],
};
