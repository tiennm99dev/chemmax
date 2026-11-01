/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tử kim loại nhường electron tạo cation, nguyên tử phi kim nhận electron tạo anion; lực hút tĩnh điện giữa các ion trái dấu là liên kết ion, tạo nên các tinh thể ion như muối ăn.',
  intro:
    'Muối ăn gồm những tinh thể rắn, giòn, phải đến khoảng $801\\ ^\\circ\\mathrm{C}$ mới nóng chảy, trong khi sodium là kim loại mềm và chlorine là chất khí độc. Khi sodium cháy trong chlorine, điều gì đã xảy ra với các electron để tạo ra một chất có tính chất khác hẳn như vậy?',
  objectives: [
    'Trình bày được sự tạo thành ion dương (cation) và ion âm (anion), ion đơn nguyên tử và ion đa nguyên tử.',
    'Nêu được khái niệm liên kết ion và giải thích được sự hình thành liên kết ion trong các hợp chất đơn giản.',
    'Mô tả được cấu tạo tinh thể $\\mathrm{NaCl}$ và tính chất chung của hợp chất ion.',
  ],
  sections: [
    {
      heading: 'Sự tạo thành ion',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử trung hoà về điện. Khi nhường hoặc nhận electron, nguyên tử trở thành phần tử mang điện gọi là ion. Số đơn vị điện tích của ion bằng số electron đã nhường hoặc đã nhận.',
        },
        {
          type: 'table',
          caption: 'Hai loại ion đơn nguyên tử',
          head: ['Đặc điểm', 'Ion dương (cation)', 'Ion âm (anion)'],
          rows: [
            ['Tạo thành khi', 'Nguyên tử nhường electron', 'Nguyên tử nhận electron'],
            ['Thường từ', 'Kim loại điển hình', 'Phi kim điển hình'],
            [
              'Ví dụ',
              '$\\mathrm{Na \\rightarrow Na^+ + 1e}$',
              '$\\mathrm{Cl + 1e \\rightarrow Cl^-}$',
            ],
            [
              'Ví dụ',
              '$\\mathrm{Mg \\rightarrow Mg^{2+} + 2e}$',
              '$\\mathrm{O + 2e \\rightarrow O^{2-}}$',
            ],
            ['Tên gọi', 'Sodium cation, magnesium cation', 'Chloride anion, oxide anion'],
          ],
        },
        {
          type: 'p',
          text: 'Các ion này thường có cấu hình electron bền vững giống khí hiếm gần nhất: $\\mathrm{Na^+}$ và $\\mathrm{Mg^{2+}}$ giống Ne, $\\mathrm{Cl^-}$ giống Ar, $\\mathrm{O^{2-}}$ giống Ne.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ion đơn nguyên tử và ion đa nguyên tử',
          text: 'Ion đơn nguyên tử tạo nên từ một nguyên tử ($\\mathrm{Na^+}$, $\\mathrm{Cl^-}$). Ion đa nguyên tử tạo nên từ nhiều nguyên tử liên kết với nhau: $\\mathrm{NH_4^+}$ (ammonium), $\\mathrm{OH^-}$ (hydroxide), $\\mathrm{NO_3^-}$ (nitrate), $\\mathrm{SO_4^{2-}}$ (sulfate).',
        },
      ],
    },
    {
      heading: 'Liên kết ion',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết ion',
          text: 'Liên kết ion là liên kết được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu.',
        },
        {
          type: 'p',
          text: 'Liên kết ion thường được hình thành khi kim loại điển hình tác dụng với phi kim điển hình. Hợp chất tạo nên từ các ion gọi là hợp chất ion.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{Na \\rightarrow Na^+ + 1e} \\\\ &\\mathrm{Cl + 1e \\rightarrow Cl^-} \\\\ &\\mathrm{Na^+ + Cl^- \\rightarrow NaCl} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Tổng số electron kim loại nhường bằng tổng số electron phi kim nhận, nên hợp chất trung hoà về điện. Vì vậy một nguyên tử Mg nhường 2 electron cho hai nguyên tử Cl, tạo $\\mathrm{MgCl_2}$.',
        },
      ],
    },
    {
      heading: 'Tinh thể ion',
      blocks: [
        {
          type: 'p',
          text: 'Ở điều kiện thường, hợp chất ion tồn tại dưới dạng tinh thể: các ion dương và ion âm sắp xếp luân phiên, đều đặn theo một mạng lưới trong không gian. Lực hút tĩnh điện không có hướng xác định, nên một ion hút các ion trái dấu ở mọi phía xung quanh nó.',
        },
        {
          type: 'p',
          text: 'Trong tinh thể $\\mathrm{NaCl}$, mỗi ion $\\mathrm{Na^+}$ được bao quanh bởi 6 ion $\\mathrm{Cl^-}$ gần nhất và mỗi ion $\\mathrm{Cl^-}$ được bao quanh bởi 6 ion $\\mathrm{Na^+}$ gần nhất. Trong tinh thể không có phân tử $\\mathrm{NaCl}$ riêng lẻ; công thức $\\mathrm{NaCl}$ chỉ cho biết tỉ lệ số ion là $1 : 1$.',
        },
        { type: 'widget', name: 'tinh-the' },
        {
          type: 'table',
          caption: 'Tính chất chung của hợp chất ion',
          head: ['Tính chất', 'Giải thích'],
          rows: [
            [
              'Là chất rắn ở điều kiện thường, khó nóng chảy, khó bay hơi (NaCl nóng chảy ở khoảng $801\\ ^\\circ\\mathrm{C}$)',
              'Lực hút tĩnh điện giữa các ion rất mạnh',
            ],
            ['Rắn, chắc nhưng giòn', 'Lớp ion bị xô lệch thì các ion cùng dấu đẩy nhau'],
            [
              'Thường tan nhiều trong nước',
              'Các phân tử nước phân cực kéo các ion ra khỏi tinh thể',
            ],
            [
              'Không dẫn điện ở thể rắn, dẫn điện khi nóng chảy hoặc khi tan trong nước',
              'Ion chỉ di chuyển được khi không còn nằm cố định trong mạng tinh thể',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Chuyển electron, tạo ion',
    instruction:
      'Chọn một hợp chất, rồi bấm "Chuyển 1 electron" để chuyển từng electron từ nguyên tử kim loại sang nguyên tử phi kim. Quan sát số electron trên các lớp và điện tích xuất hiện. Dừng lại khi tất cả các ion đều có lớp vỏ giống khí hiếm.',
  },
  examples: [
    {
      problem:
        'Giải thích sự hình thành liên kết ion trong hợp chất magnesium oxide ($\\mathrm{MgO}$). Cho $Z_{\\mathrm{Mg}} = 12$, $Z_{\\mathrm{O}} = 8$.',
      steps: [
        'Mg có cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2}$, nhường 2 electron: $\\mathrm{Mg \\rightarrow Mg^{2+} + 2e}$.',
        'O có cấu hình $\\mathrm{1s^2 2s^2 2p^4}$, nhận 2 electron: $\\mathrm{O + 2e \\rightarrow O^{2-}}$.',
        'Hai ion trái dấu hút nhau bằng lực hút tĩnh điện: $\\mathrm{Mg^{2+} + O^{2-} \\rightarrow MgO}$.',
      ],
      answer:
        'Liên kết ion trong $\\mathrm{MgO}$ hình thành từ lực hút tĩnh điện giữa $\\mathrm{Mg^{2+}}$ và $\\mathrm{O^{2-}}$; cả hai ion đều có 10 electron như neon.',
    },
    {
      problem:
        'Giải thích vì sao sodium và oxygen tạo hợp chất có công thức $\\mathrm{Na_2O}$ mà không phải $\\mathrm{NaO}$.',
      steps: [
        'Mỗi nguyên tử Na chỉ nhường được 1 electron: $\\mathrm{Na \\rightarrow Na^+ + 1e}$.',
        'Mỗi nguyên tử O cần nhận 2 electron: $\\mathrm{O + 2e \\rightarrow O^{2-}}$.',
        'Số electron nhường phải bằng số electron nhận, nên cần 2 nguyên tử Na cho 1 nguyên tử O.',
      ],
      answer:
        'Hai ion $\\mathrm{Na^+}$ trung hoà điện tích của một ion $\\mathrm{O^{2-}}$, tạo $\\mathrm{Na_2O}$.',
    },
    {
      problem:
        'Một hạt có 11 proton và 10 electron. Hạt này là gì? Viết kí hiệu và cho biết nó có cấu hình giống khí hiếm nào.',
      steps: [
        'Số proton là 11 nên đây là nguyên tố sodium.',
        'Điện tích của hạt: $11 - 10 = +1$, nên hạt là cation $\\mathrm{Na^+}$.',
        'Hạt có 10 electron giống Ne ($Z = 10$).',
      ],
      answer: 'Đó là ion $\\mathrm{Na^+}$, có cấu hình electron giống neon.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cation được tạo thành khi',
      options: [
        'nguyên tử nhường electron',
        'nguyên tử nhận electron',
        'nguyên tử nhận proton',
        'hai nguyên tử góp chung electron',
      ],
      answer: 0,
      hints: ['Cation mang điện tích dương: số proton nhiều hơn số electron.'],
      solution:
        'Khi nhường electron, nguyên tử có số proton lớn hơn số electron nên mang điện dương: đó là cation.',
    },
    {
      type: 'number',
      prompt: 'Ion $\\mathrm{Mg^{2+}}$ ($Z_{\\mathrm{Mg}} = 12$) có bao nhiêu electron?',
      answer: 10,
      unit: 'electron',
      hints: ['Ion dương $2+$ đã mất 2 electron so với nguyên tử.'],
      solution: 'Số electron: $12 - 2 = 10$.',
    },
    {
      type: 'number',
      prompt: 'Ion $\\mathrm{S^{2-}}$ ($Z_{\\mathrm{S}} = 16$) có bao nhiêu electron?',
      answer: 18,
      unit: 'electron',
      hints: ['Ion âm $2-$ đã nhận thêm 2 electron so với nguyên tử.'],
      solution: 'Số electron: $16 + 2 = 18$, giống Ar.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ion đa nguyên tử với tên của nó.',
      left: [
        '$\\mathrm{NH_4^+}$',
        '$\\mathrm{OH^-}$',
        '$\\mathrm{NO_3^-}$',
        '$\\mathrm{SO_4^{2-}}$',
      ],
      right: ['Ammonium', 'Hydroxide', 'Nitrate', 'Sulfate'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['$\\mathrm{NH_4^+}$ là ion dương duy nhất trong bốn ion này.'],
      solution:
        '$\\mathrm{NH_4^+}$ là ammonium, $\\mathrm{OH^-}$ là hydroxide, $\\mathrm{NO_3^-}$ là nitrate, $\\mathrm{SO_4^{2-}}$ là sulfate.',
    },
    {
      type: 'choice',
      prompt: 'Liên kết ion được hình thành bởi',
      options: [
        'lực hút tĩnh điện giữa các ion mang điện tích trái dấu',
        'các cặp electron dùng chung giữa hai nguyên tử',
        'lực hút giữa hạt nhân và electron của cùng một nguyên tử',
        'lực đẩy giữa các ion cùng dấu',
      ],
      answer: 0,
      hints: ['Trong liên kết ion, electron đã chuyển hẳn sang nguyên tử khác.'],
      solution: 'Liên kết ion là lực hút tĩnh điện giữa các ion mang điện tích trái dấu.',
    },
    {
      type: 'number',
      prompt:
        'Trong tinh thể $\\mathrm{NaCl}$, mỗi ion $\\mathrm{Na^+}$ được bao quanh bởi bao nhiêu ion $\\mathrm{Cl^-}$ gần nhất?',
      answer: 6,
      unit: 'ion',
      hints: ['Xoay mô hình tinh thể, xem ion ở tâm khối.'],
      solution:
        'Ion ở tâm khối có một ion trái dấu theo mỗi hướng trong sáu hướng: 6 ion $\\mathrm{Cl^-}$.',
    },
    {
      type: 'number',
      prompt:
        'Khi tạo thành $\\mathrm{Al_2O_3}$ từ các nguyên tử Al và O, hai nguyên tử Al nhường tổng cộng bao nhiêu electron?',
      answer: 6,
      unit: 'electron',
      hints: ['Mỗi nguyên tử Al nhường bao nhiêu electron để thành $\\mathrm{Al^{3+}}$?'],
      solution:
        'Mỗi Al nhường 3 electron: $2 \\cdot 3 = 6$ electron; ba nguyên tử O nhận $3 \\cdot 2 = 6$ electron.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các tính chất chung của hợp chất ion.',
      options: [
        'Là chất rắn ở điều kiện thường',
        'Khó nóng chảy, khó bay hơi',
        'Dẫn điện tốt ở thể rắn',
        'Dẫn điện khi nóng chảy hoặc khi tan trong nước',
        'Đều là chất khí ở nhiệt độ phòng',
      ],
      answers: [0, 1, 3],
      hints: ['Muốn dẫn điện, các ion phải di chuyển được.'],
      solution:
        'Hợp chất ion là chất rắn, khó nóng chảy và khó bay hơi. Ở thể rắn, ion nằm cố định trong mạng nên không dẫn điện; khi nóng chảy hoặc tan trong nước thì dẫn điện.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước hình thành hợp chất $\\mathrm{NaCl}$ từ các nguyên tử.',
      items: [
        'Nguyên tử Na nhường 1 electron thành $\\mathrm{Na^+}$',
        'Nguyên tử Cl nhận electron đó thành $\\mathrm{Cl^-}$',
        'Hai ion trái dấu hút nhau bằng lực hút tĩnh điện',
        'Các ion sắp xếp luân phiên thành mạng tinh thể',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Electron phải được nhường trước khi được nhận.'],
      solution:
        'Na nhường electron, Cl nhận electron, hai ion trái dấu hút nhau, rồi nhiều ion sắp xếp thành mạng tinh thể.',
    },
    {
      type: 'text',
      prompt:
        'Ion âm $\\mathrm{Cl^-}$ có tên gọi là gì? (Viết tên bằng tiếng Anh theo sách giáo khoa.)',
      accept: ['chloride', 'anion chloride', 'chloride anion', 'ion chloride'],
      hints: ['Tên anion đơn nguyên tử thường kết thúc bằng đuôi -ide.'],
      solution: '$\\mathrm{Cl^-}$ là chloride anion.',
    },
  ],
  takeaways: [
    'Nguyên tử nhường electron tạo cation, nhận electron tạo anion; số điện tích bằng số electron đã nhường hoặc nhận.',
    'Liên kết ion được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu, thường giữa kim loại điển hình và phi kim điển hình.',
    'Trong tinh thể $\\mathrm{NaCl}$, mỗi ion được bao quanh bởi 6 ion trái dấu gần nhất.',
    'Hợp chất ion là chất rắn khó nóng chảy, thường tan nhiều trong nước, dẫn điện khi nóng chảy hoặc khi tan trong nước.',
  ],
};
