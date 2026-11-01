/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khi tạo liên kết hoá học, nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để có lớp vỏ bền vững như khí hiếm, thường là 8 electron lớp ngoài cùng.',
  intro:
    'Các khí hiếm gần như không phản ứng với chất nào và tồn tại ở dạng nguyên tử riêng lẻ, trong khi sodium hay chlorine lại phản ứng rất mạnh. Điều gì trong lớp vỏ electron của khí hiếm khiến chúng bền đến vậy, và vì sao các nguyên tử khác lại tìm cách có được lớp vỏ giống như thế?',
  objectives: [
    'Trình bày được khái niệm liên kết hoá học và vai trò của electron hoá trị.',
    'Phát biểu được quy tắc octet và giải thích được sự hình thành liên kết của nguyên tử các nguyên tố nhóm A.',
    'Vận dụng quy tắc octet để dự đoán nguyên tử nhường, nhận hay góp chung bao nhiêu electron.',
    'Nêu được một số trường hợp ngoại lệ của quy tắc octet.',
  ],
  sections: [
    {
      heading: 'Liên kết hoá học và lớp vỏ bền của khí hiếm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết hoá học',
          text: 'Liên kết hoá học là sự kết hợp giữa các nguyên tử tạo thành phân tử hay tinh thể bền vững hơn.',
        },
        {
          type: 'p',
          text: 'Khi tạo liên kết, chỉ các electron hoá trị tham gia: với nguyên tố nhóm A, đó là các electron lớp ngoài cùng. Trong sơ đồ Lewis, mỗi electron hoá trị được biểu diễn bằng một dấu chấm quanh kí hiệu nguyên tố.',
        },
        {
          type: 'table',
          caption: 'Số electron lớp ngoài cùng của một số khí hiếm',
          head: ['Khí hiếm', '$Z$', 'Cấu hình electron', 'Lớp ngoài cùng'],
          rows: [
            ['Helium (He)', '2', '$\\mathrm{1s^2}$', '2 electron'],
            ['Neon (Ne)', '10', '$\\mathrm{1s^2 2s^2 2p^6}$', '8 electron'],
            ['Argon (Ar)', '18', '$\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6}$', '8 electron'],
          ],
        },
        {
          type: 'p',
          text: 'Lớp vỏ có 8 electron ngoài cùng (2 electron với helium) rất bền vững. Vì vậy các khí hiếm khó tham gia phản ứng hoá học và tồn tại ở dạng đơn nguyên tử.',
        },
      ],
    },
    {
      heading: 'Quy tắc octet',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc octet',
          text: 'Trong quá trình hình thành liên kết hoá học, nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để đạt tới cấu hình electron bền vững của khí hiếm: 8 electron ở lớp ngoài cùng (hoặc 2 electron với lớp vỏ giống helium).',
        },
        {
          type: 'table',
          caption: 'Cách các nguyên tử đạt lớp vỏ của khí hiếm',
          head: ['Nguyên tử', 'Xu hướng', 'Ví dụ'],
          rows: [
            [
              'Kim loại (ít electron hoá trị)',
              'Nhường electron thành ion dương',
              '$\\mathrm{Na \\rightarrow Na^+ + 1e}$',
            ],
            [
              'Phi kim (nhiều electron hoá trị)',
              'Nhận electron thành ion âm',
              '$\\mathrm{F + 1e \\rightarrow F^-}$',
            ],
            [
              'Phi kim với phi kim',
              'Góp chung electron',
              'Mỗi N trong $\\mathrm{N_2}$ góp 3 electron, tạo 3 cặp electron chung',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong phân tử $\\mathrm{N_2}$, mỗi nguyên tử N có 5 electron hoá trị: 6 electron dùng chung cộng với 2 electron riêng là đủ 8. Trong $\\mathrm{NaF}$, Na mất 1 electron thành $\\mathrm{Na^+}$ giống Ne, F nhận 1 electron thành $\\mathrm{F^-}$ cũng giống Ne.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hydrogen',
          text: 'Nguyên tử H chỉ cần 2 electron, giống helium. Do đó H luôn tạo một cặp electron chung và không có cặp electron riêng.',
        },
      ],
    },
    {
      heading: 'Ngoại lệ của quy tắc octet',
      blocks: [
        {
          type: 'p',
          text: 'Quy tắc octet giúp dự đoán liên kết của rất nhiều chất, nhưng không đúng trong mọi trường hợp.',
        },
        {
          type: 'list',
          items: [
            'Thiếu electron: trong $\\mathrm{BF_3}$, nguyên tử B chỉ có 6 electron bao quanh.',
            'Dư electron: trong $\\mathrm{PCl_5}$, nguyên tử P có 10 electron bao quanh; trong $\\mathrm{SF_6}$, nguyên tử S có 12 electron bao quanh.',
            'Số electron hoá trị lẻ: phân tử $\\mathrm{NO}$ có 11 electron hoá trị nên không thể ghép đủ thành từng cặp.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Quy tắc octet được xét cho các nguyên tố nhóm A. Với nguyên tố nhóm B như Fe, các ion thường không có cấu hình của khí hiếm, ví dụ $\\mathrm{Fe^{2+}}$, $\\mathrm{Fe^{3+}}$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ Lewis: kéo electron cho đủ octet',
    instruction:
      'Chọn một chất, rồi kéo electron có viền đậm vào vùng giữa hai nguyên tử (hoặc dùng các nút bên dưới). Mỗi cặp electron chung cần một electron từ mỗi nguyên tử. Với $\\mathrm{NaF}$, $\\mathrm{MgO}$, hãy kéo electron của nguyên tử kim loại sang nguyên tử phi kim. Mục tiêu: mọi nguyên tử đều đủ số electron như khí hiếm gần nhất.',
  },
  examples: [
    {
      problem:
        'Dựa vào quy tắc octet, cho biết nguyên tử magnesium ($Z = 12$) và nguyên tử oxygen ($Z = 8$) có xu hướng nhường hay nhận bao nhiêu electron. Các ion tạo thành có cấu hình giống khí hiếm nào?',
      steps: [
        'Cấu hình Mg: $\\mathrm{1s^2 2s^2 2p^6 3s^2}$, có 2 electron lớp ngoài cùng nên dễ nhường 2 electron: $\\mathrm{Mg \\rightarrow Mg^{2+} + 2e}$.',
        '$\\mathrm{Mg^{2+}}$ có $12 - 2 = 10$ electron, cấu hình giống Ne.',
        'Cấu hình O: $\\mathrm{1s^2 2s^2 2p^4}$, có 6 electron lớp ngoài cùng nên dễ nhận 2 electron: $\\mathrm{O + 2e \\rightarrow O^{2-}}$.',
        '$\\mathrm{O^{2-}}$ có $8 + 2 = 10$ electron, cũng giống Ne.',
      ],
      answer: 'Mg nhường 2 electron, O nhận 2 electron; cả hai ion đều có cấu hình của neon.',
    },
    {
      problem:
        'Giải thích sự hình thành liên kết trong phân tử $\\mathrm{H_2O}$ theo quy tắc octet. Trong phân tử, mỗi nguyên tử có bao nhiêu electron bao quanh?',
      steps: [
        'O có 6 electron hoá trị, cần thêm 2 electron để đủ 8. Mỗi H có 1 electron, cần thêm 1 electron để đủ 2.',
        'O góp 2 electron, mỗi H góp 1 electron, tạo 2 cặp electron chung $\\mathrm{O - H}$.',
        'O có 4 electron dùng chung và 4 electron riêng (2 cặp), tổng cộng 8 electron.',
        'Mỗi H có 2 electron dùng chung.',
      ],
      answer: 'O có 8 electron giống neon, mỗi H có 2 electron giống helium.',
    },
    {
      problem:
        'Trong phân tử $\\mathrm{PCl_5}$, nguyên tử P có tuân theo quy tắc octet không? Giải thích.',
      steps: [
        'P có 5 electron hoá trị và tạo 5 liên kết đơn với 5 nguyên tử Cl.',
        'Mỗi liên kết có một cặp electron nên P có $5 \\cdot 2 = 10$ electron bao quanh.',
        '$10 > 8$ nên P không tuân theo quy tắc octet. Mỗi Cl vẫn có đủ 8 electron.',
      ],
      answer: 'Không: P có 10 electron bao quanh, đây là một trường hợp ngoại lệ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về quy tắc octet?',
      options: [
        'Nguyên tử các nguyên tố nhóm A có xu hướng đạt lớp vỏ bền như khí hiếm khi tạo liên kết.',
        'Mọi nguyên tử đều phải nhận thêm đúng 8 electron khi tạo liên kết.',
        'Nguyên tử chỉ có thể đạt lớp vỏ bền bằng cách nhường electron.',
        'Mọi hợp chất đều tuân theo quy tắc octet, không có ngoại lệ.',
      ],
      answer: 0,
      hints: ['Nguyên tử có ba cách: nhường, nhận hoặc góp chung electron.'],
      solution:
        'Quy tắc octet nói về xu hướng đạt 8 electron lớp ngoài cùng (hoặc 2 như helium) bằng cách nhường, nhận hoặc góp chung electron; quy tắc này có ngoại lệ.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử sulfur ($Z = 16$) cần nhận thêm bao nhiêu electron để có cấu hình giống khí hiếm gần nhất?',
      answer: 2,
      unit: 'electron',
      hints: ['Viết cấu hình electron rồi đếm số electron lớp ngoài cùng.'],
      solution:
        'S: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$ có 6 electron lớp ngoài cùng, cần thêm $8 - 6 = 2$ electron để giống Ar.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử aluminium ($Z = 13$) có xu hướng nhường bao nhiêu electron để có cấu hình giống khí hiếm?',
      answer: 3,
      unit: 'electron',
      hints: ['Đếm electron lớp ngoài cùng của Al.'],
      solution:
        'Al: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^1}$ có 3 electron lớp ngoài cùng; nhường cả 3 electron còn 10 electron, giống Ne.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nguyên tử với xu hướng của nó khi tạo hợp chất ion.',
      left: ['Na ($Z = 11$)', 'Cl ($Z = 17$)', 'Mg ($Z = 12$)', 'O ($Z = 8$)'],
      right: ['Nhường 1 electron', 'Nhận 1 electron', 'Nhường 2 electron', 'Nhận 2 electron'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Kim loại nhường hết electron lớp ngoài cùng, phi kim nhận cho đủ 8.'],
      solution:
        'Na có 1 electron lớp ngoài cùng nên nhường 1; Cl có 7 nên nhận 1; Mg có 2 nên nhường 2; O có 6 nên nhận 2.',
    },
    {
      type: 'choice',
      prompt: 'Ion nào sau đây có cấu hình electron giống khí hiếm neon?',
      options: ['$\\mathrm{Li^+}$', '$\\mathrm{Na^+}$', '$\\mathrm{Cl^-}$', '$\\mathrm{K^+}$'],
      answer: 1,
      hints: ['Neon có 10 electron. Tính số electron của mỗi ion.'],
      solution:
        '$\\mathrm{Li^+}$ có 2 electron (giống He), $\\mathrm{Na^+}$ có 10 electron (giống Ne), $\\mathrm{Cl^-}$ và $\\mathrm{K^+}$ đều có 18 electron (giống Ar).',
    },
    {
      type: 'number',
      prompt: 'Phân tử $\\mathrm{N_2}$ có bao nhiêu cặp electron dùng chung giữa hai nguyên tử N?',
      answer: 3,
      unit: 'cặp',
      hints: ['Mỗi N có 5 electron hoá trị và cần thêm mấy electron để đủ 8?'],
      solution:
        'Mỗi N cần thêm 3 electron nên mỗi nguyên tử góp 3 electron, tạo 3 cặp electron chung (liên kết ba).',
    },
    {
      type: 'number',
      prompt: 'Trong phân tử $\\mathrm{HCl}$, nguyên tử Cl còn bao nhiêu cặp electron riêng?',
      answer: 3,
      unit: 'cặp',
      hints: ['Cl có 7 electron hoá trị, trong đó 1 electron góp vào cặp chung.'],
      solution: 'Cl còn $7 - 1 = 6$ electron chưa dùng, tức $3$ cặp electron riêng.',
    },
    {
      type: 'number',
      prompt: 'Trong phân tử $\\mathrm{CO_2}$, nguyên tử C có bao nhiêu electron bao quanh?',
      answer: 8,
      unit: 'electron',
      hints: ['C tạo hai liên kết đôi, mỗi liên kết đôi có 2 cặp electron.'],
      solution: 'C có $2 \\cdot 2 = 4$ cặp electron chung, tức $8$ electron bao quanh.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phân tử có nguyên tử trung tâm không tuân theo quy tắc octet.',
      options: [
        '$\\mathrm{BF_3}$',
        '$\\mathrm{H_2O}$',
        '$\\mathrm{PCl_5}$',
        '$\\mathrm{SF_6}$',
        '$\\mathrm{CH_4}$',
      ],
      answers: [0, 2, 3],
      hints: ['Đếm số cặp electron bao quanh nguyên tử trung tâm của từng phân tử.'],
      solution:
        'B trong $\\mathrm{BF_3}$ có 6 electron, P trong $\\mathrm{PCl_5}$ có 10 electron, S trong $\\mathrm{SF_6}$ có 12 electron. O trong $\\mathrm{H_2O}$ và C trong $\\mathrm{CH_4}$ đều đủ 8 electron.',
    },
    {
      type: 'text',
      prompt:
        'Ion $\\mathrm{Mg^{2+}}$ có cấu hình electron giống khí hiếm nào? (Viết tên khí hiếm.)',
      accept: ['neon', 'ne'],
      hints: ['Tính số electron của ion: $12 - 2$.'],
      solution: '$\\mathrm{Mg^{2+}}$ có $12 - 2 = 10$ electron, giống neon (Ne, $Z = 10$).',
    },
  ],
  takeaways: [
    'Liên kết hoá học là sự kết hợp giữa các nguyên tử tạo thành phân tử hay tinh thể bền vững hơn.',
    'Quy tắc octet: nguyên tử các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để có lớp vỏ của khí hiếm: 8 electron lớp ngoài cùng, hoặc 2 electron như helium.',
    'Kim loại có xu hướng nhường electron; phi kim có xu hướng nhận hoặc góp chung electron.',
    'Quy tắc có ngoại lệ, chẳng hạn $\\mathrm{BF_3}$, $\\mathrm{PCl_5}$, $\\mathrm{SF_6}$, $\\mathrm{NO}$.',
  ],
};
