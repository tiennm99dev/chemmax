/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các nguyên tử liên kết với nhau để có lớp electron ngoài cùng bền như khí hiếm: kim loại nhường electron cho phi kim tạo ion trái dấu hút nhau (liên kết ion), còn các nguyên tử phi kim góp chung electron (liên kết cộng hoá trị).',
  intro:
    'Muối ăn là chất rắn trắng, phải đun tới khoảng 800 °C mới nóng chảy. Nước đá lại tan ở 0 °C và nước sôi ở 100 °C. Vì sao hai chất quen thuộc này khác nhau nhiều như vậy? Câu trả lời nằm ở cách các nguyên tử trong chúng liên kết với nhau.',
  objectives: [
    'Nêu được mô hình sắp xếp electron trong vỏ nguyên tử của một số nguyên tố khí hiếm.',
    'Nêu được sự hình thành liên kết ion theo mô hình (ví dụ NaCl, MgO).',
    'Nêu được sự hình thành liên kết cộng hoá trị theo mô hình (ví dụ $\\mathrm{H_2}$, $\\mathrm{H_2O}$).',
    'Chỉ ra được sự khác nhau về một số tính chất của chất ion và chất cộng hoá trị.',
  ],
  sections: [
    {
      heading: 'Lớp electron bền vững của khí hiếm',
      blocks: [
        {
          type: 'p',
          text: 'Các khí hiếm như helium (He), neon (Ne), argon (Ar) ở nhóm VIIIA hầu như không tham gia phản ứng hoá học và tồn tại dưới dạng nguyên tử riêng rẽ. Nguyên nhân là lớp electron ngoài cùng của chúng đã bền vững.',
        },
        {
          type: 'table',
          caption: 'Sự sắp xếp electron của một số khí hiếm',
          head: ['Khí hiếm', 'Số electron', 'Lớp 1', 'Lớp 2', 'Lớp 3', 'Electron lớp ngoài cùng'],
          rows: [
            ['Helium (He)', '2', '2', '–', '–', '2'],
            ['Neon (Ne)', '10', '2', '8', '–', '8'],
            ['Argon (Ar)', '18', '2', '8', '8', '8'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xu hướng của các nguyên tử',
          text: 'Lớp electron ngoài cùng có $8$ electron (hoặc $2$ electron với helium) là lớp bền vững. Khi tạo liên kết hoá học, nguyên tử của các nguyên tố khác có xu hướng nhường, nhận hoặc dùng chung electron để đạt lớp electron ngoài cùng giống khí hiếm.',
        },
      ],
    },
    {
      heading: 'Liên kết ion',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử sodium (Na) có $11$ electron xếp thành $2, 8, 1$; nguyên tử chlorine (Cl) có $17$ electron xếp thành $2, 8, 7$. Khi hai nguyên tử gặp nhau, nguyên tử Na nhường $1$ electron lớp ngoài cùng cho nguyên tử Cl.',
        },
        {
          type: 'list',
          items: [
            'Na mất $1$ electron, còn $2, 8$ (giống neon) và trở thành phần tử mang một điện tích dương: ion $\\mathrm{Na^+}$.',
            'Cl nhận $1$ electron, có $2, 8, 8$ (giống argon) và trở thành phần tử mang một điện tích âm: ion $\\mathrm{Cl^-}$.',
            'Ion $\\mathrm{Na^+}$ và ion $\\mathrm{Cl^-}$ mang điện tích trái dấu nên hút nhau, tạo thành sodium chloride $\\mathrm{NaCl}$.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{Na} \\longrightarrow \\mathrm{Na^+} + 1e \\qquad \\mathrm{Cl} + 1e \\longrightarrow \\mathrm{Cl^-}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ion và liên kết ion',
          text: 'Khi nguyên tử nhường hay nhận electron, nó trở thành phần tử mang điện gọi là ion. Nguyên tử nhường electron tạo ion dương, nguyên tử nhận electron tạo ion âm. Liên kết giữa ion dương và ion âm (hút nhau do mang điện trái dấu) được gọi là liên kết ion.',
        },
        {
          type: 'p',
          text: 'Nguyên tử kim loại thường có ít electron ở lớp ngoài cùng nên dễ nhường electron; nguyên tử phi kim thường có nhiều electron ở lớp ngoài cùng nên dễ nhận electron. Ví dụ, nguyên tử magnesium ($2, 8, 2$) nhường $2$ electron cho nguyên tử oxygen ($2, 6$) tạo ion $\\mathrm{Mg^{2+}}$ và ion $\\mathrm{O^{2-}}$, hai ion này hút nhau tạo magnesium oxide $\\mathrm{MgO}$.',
        },
      ],
    },
    {
      heading: 'Liên kết cộng hoá trị',
      blocks: [
        {
          type: 'p',
          text: 'Hai nguyên tử phi kim đều có xu hướng nhận thêm electron, nên chúng không nhường electron cho nhau mà góp chung electron. Mỗi nguyên tử hydrogen chỉ có $1$ electron. Trong phân tử hydrogen $\\mathrm{H_2}$, mỗi nguyên tử H góp $1$ electron tạo thành một cặp electron dùng chung; khi đó mỗi nguyên tử H đều có $2$ electron ở lớp ngoài cùng, giống helium.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết cộng hoá trị',
          text: 'Liên kết cộng hoá trị là liên kết được tạo nên giữa hai nguyên tử bằng một hay nhiều cặp electron dùng chung.',
        },
        {
          type: 'list',
          items: [
            'Phân tử nước $\\mathrm{H_2O}$: nguyên tử O ($2, 6$) góp chung $1$ electron với mỗi nguyên tử H. Có $2$ cặp electron dùng chung; O có $8$ electron ở lớp ngoài cùng (giống neon), mỗi H có $2$ (giống helium).',
            'Phân tử oxygen $\\mathrm{O_2}$: mỗi nguyên tử O góp chung $2$ electron, tạo $2$ cặp electron dùng chung.',
            'Phân tử nitrogen $\\mathrm{N_2}$: mỗi nguyên tử N ($2, 5$) góp chung $3$ electron, tạo $3$ cặp electron dùng chung.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Liên kết cộng hoá trị thường được hình thành giữa các nguyên tử phi kim với nhau, ví dụ trong $\\mathrm{H_2}$, $\\mathrm{Cl_2}$, $\\mathrm{HCl}$, $\\mathrm{H_2O}$, $\\mathrm{CO_2}$, $\\mathrm{CH_4}$.',
        },
      ],
    },
    {
      heading: 'Chất ion và chất cộng hoá trị',
      blocks: [
        {
          type: 'p',
          text: 'Chất được tạo nên bởi các ion gọi là chất ion (hợp chất ion); chất mà các nguyên tử liên kết với nhau bằng liên kết cộng hoá trị gọi là chất cộng hoá trị. Hai loại chất này khác nhau rõ rệt về một số tính chất.',
        },
        {
          type: 'table',
          caption: 'So sánh một số tính chất',
          head: ['Tính chất', 'Chất ion (ví dụ NaCl)', 'Chất cộng hoá trị (ví dụ đường, nước)'],
          rows: [
            ['Thể ở điều kiện thường', 'Rắn', 'Rắn, lỏng hoặc khí'],
            [
              'Nhiệt độ nóng chảy, nhiệt độ sôi',
              'Cao, khó bay hơi (NaCl nóng chảy ở $801\\ ^\\circ\\mathrm{C}$)',
              'Thường thấp (nước đá nóng chảy ở $0\\ ^\\circ\\mathrm{C}$)',
            ],
            [
              'Dẫn điện khi tan trong nước',
              'Dung dịch dẫn được điện',
              'Nhiều chất không dẫn điện (nước đường)',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Electron chuyển đi hay dùng chung?',
    instruction:
      'Ở chế độ "Liên kết ion", bấm nút để chuyển từng electron từ nguyên tử kim loại sang nguyên tử phi kim và quan sát lớp ngoài cùng của hai bên; dừng lại khi cả hai đều bền như khí hiếm. Ở chế độ "Liên kết cộng hoá trị", chọn một phân tử rồi thêm, bớt cặp electron dùng chung giữa từng cặp nguyên tử cho đến khi mọi nguyên tử đều đủ electron ở lớp ngoài cùng.',
  },
  examples: [
    {
      problem:
        'Mô tả sự hình thành liên kết ion trong magnesium oxide (MgO). Biết Mg có $12$ electron, O có $8$ electron.',
      steps: [
        'Sắp xếp electron: Mg là $2, 8, 2$ (lớp ngoài cùng có $2$ electron); O là $2, 6$ (lớp ngoài cùng có $6$ electron).',
        'Nguyên tử Mg nhường $2$ electron, còn $2, 8$ giống neon, tạo ion $\\mathrm{Mg^{2+}}$.',
        'Nguyên tử O nhận $2$ electron, có $2, 8$ giống neon, tạo ion $\\mathrm{O^{2-}}$.',
        'Hai ion mang điện tích trái dấu hút nhau tạo liên kết ion.',
      ],
      answer:
        '$\\mathrm{Mg} \\to \\mathrm{Mg^{2+}} + 2e$; $\\mathrm{O} + 2e \\to \\mathrm{O^{2-}}$; ion $\\mathrm{Mg^{2+}}$ và ion $\\mathrm{O^{2-}}$ hút nhau tạo thành MgO.',
    },
    {
      problem:
        'Mô tả sự hình thành liên kết trong phân tử ammonia $\\mathrm{NH_3}$. Biết N có $7$ electron, H có $1$ electron.',
      steps: [
        'Nguyên tử N ($2, 5$) có $5$ electron ở lớp ngoài cùng, cần thêm $3$ electron để có $8$.',
        'Mỗi nguyên tử H có $1$ electron, cần thêm $1$ electron để có $2$ như helium.',
        'Nguyên tử N góp chung $1$ electron với mỗi nguyên tử H, mỗi H góp $1$ electron: tạo $3$ cặp electron dùng chung.',
        'Kiểm tra: N có $5 + 3 = 8$ electron ở lớp ngoài cùng; mỗi H có $2$ electron.',
      ],
      answer:
        'Phân tử $\\mathrm{NH_3}$ có $3$ liên kết cộng hoá trị, mỗi liên kết là một cặp electron dùng chung giữa N và H.',
    },
    {
      problem:
        'Một chất X ở thể rắn, nóng chảy ở $770\\ ^\\circ\\mathrm{C}$, tan trong nước tạo dung dịch dẫn điện. Chất Y ở thể khí ở điều kiện thường. Chất nào có thể là chất ion, chất nào là chất cộng hoá trị?',
      steps: [
        'Chất ion ở thể rắn, nhiệt độ nóng chảy cao, dung dịch dẫn điện: X có đủ các đặc điểm này.',
        'Chất ion luôn ở thể rắn ở điều kiện thường, nên chất khí Y không thể là chất ion.',
      ],
      answer:
        'X có thể là chất ion (thực tế đó là potassium chloride KCl); Y là chất cộng hoá trị.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Lớp electron ngoài cùng của nguyên tử neon có bao nhiêu electron?',
      answer: 8,
      hints: ['Neon có $10$ electron; lớp thứ nhất chứa tối đa $2$.'],
      solution: 'Neon có $10$ electron xếp thành $2, 8$: lớp ngoài cùng có $8$ electron.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao các khí hiếm hầu như không tham gia phản ứng hoá học?',
      options: [
        'Vì nguyên tử của chúng không có electron.',
        'Vì lớp electron ngoài cùng của chúng đã bền vững ($8$ electron, riêng helium $2$ electron).',
        'Vì chúng đều là kim loại.',
        'Vì hạt nhân của chúng không có proton.',
      ],
      answer: 1,
      hints: ['Các nguyên tử khác tạo liên kết để đạt được điều mà khí hiếm đã có sẵn.'],
      solution:
        'Khí hiếm có lớp electron ngoài cùng bền vững ($8$ electron, helium $2$ electron) nên hầu như không nhường, nhận hay dùng chung electron.',
    },
    {
      type: 'choice',
      prompt: 'Khi tạo thành ion $\\mathrm{Na^+}$, nguyên tử sodium đã',
      options: ['nhận $1$ electron', 'nhường $1$ electron', 'nhận $1$ proton', 'nhường $1$ proton'],
      answer: 1,
      hints: ['Ion dương có số electron ít hơn số proton.'],
      solution:
        'Nguyên tử Na ($2, 8, 1$) nhường $1$ electron lớp ngoài cùng; khi đó $11$ proton chỉ còn $10$ electron nên mang điện tích $+1$: $\\mathrm{Na^+}$. Số proton trong hạt nhân không thay đổi.',
    },
    {
      type: 'choice',
      prompt: 'Ion $\\mathrm{Cl^-}$ có lớp vỏ electron giống nguyên tử khí hiếm nào?',
      options: ['Helium', 'Neon', 'Argon', 'Không giống khí hiếm nào'],
      answer: 2,
      hints: ['Cl có $17$ electron; ion $\\mathrm{Cl^-}$ có thêm $1$ electron.'],
      solution: 'Ion $\\mathrm{Cl^-}$ có $18$ electron xếp thành $2, 8, 8$, giống argon.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử aluminium có $13$ electron. Để có lớp electron ngoài cùng giống neon, nguyên tử aluminium nhường bao nhiêu electron?',
      answer: 3,
      hints: ['Viết sự sắp xếp electron của Al theo từng lớp.', 'Neon có các lớp $2, 8$.'],
      solution:
        'Al có $2, 8, 3$. Nhường $3$ electron lớp ngoài cùng thì còn $2, 8$ giống neon, tạo ion $\\mathrm{Al^{3+}}$.',
    },
    {
      type: 'number',
      prompt:
        'Trong phân tử nitrogen $\\mathrm{N_2}$, hai nguyên tử N dùng chung bao nhiêu cặp electron?',
      answer: 3,
      hints: ['Mỗi nguyên tử N có $5$ electron ở lớp ngoài cùng, cần đủ $8$.'],
      solution:
        'Mỗi nguyên tử N cần thêm $8 - 5 = 3$ electron, nên mỗi nguyên tử góp chung $3$ electron: có $3$ cặp electron dùng chung.',
    },
    {
      type: 'number',
      prompt: 'Phân tử nước $\\mathrm{H_2O}$ có tất cả bao nhiêu cặp electron dùng chung?',
      answer: 2,
      hints: ['Nguyên tử O liên kết với mấy nguyên tử H? Mỗi liên kết O – H dùng chung mấy cặp?'],
      solution:
        'O liên kết với $2$ nguyên tử H, mỗi liên kết là $1$ cặp electron dùng chung: tổng cộng $2$ cặp. O có $6 + 2 = 8$ electron ở lớp ngoài cùng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các chất có liên kết ion.',
      options: [
        '$\\mathrm{NaCl}$',
        '$\\mathrm{H_2O}$',
        '$\\mathrm{MgO}$',
        '$\\mathrm{Cl_2}$',
        '$\\mathrm{KCl}$',
        '$\\mathrm{CO_2}$',
        '$\\mathrm{CaO}$',
      ],
      answers: [0, 2, 4, 6],
      hints: ['Liên kết ion thường hình thành giữa một kim loại và một phi kim.'],
      solution:
        'NaCl, MgO, KCl, CaO được tạo nên từ kim loại (Na, Mg, K, Ca) và phi kim (Cl, O): có liên kết ion. $\\mathrm{H_2O}$, $\\mathrm{Cl_2}$, $\\mathrm{CO_2}$ chỉ gồm phi kim: có liên kết cộng hoá trị.',
    },
    {
      type: 'text',
      prompt:
        'Liên kết giữa hai nguyên tử trong phân tử chlorine $\\mathrm{Cl_2}$ thuộc loại liên kết gì?',
      accept: ['cộng hoá trị', 'liên kết cộng hoá trị', 'cộng hóa trị', 'liên kết cộng hóa trị'],
      hints: ['Hai nguyên tử Cl giống nhau, đều có xu hướng nhận electron.'],
      solution:
        'Hai nguyên tử Cl ($2, 8, 7$) mỗi nguyên tử góp chung $1$ electron tạo $1$ cặp electron dùng chung: đó là liên kết cộng hoá trị.',
    },
    {
      type: 'choice',
      prompt:
        'Chất nào sau đây ở thể rắn, có nhiệt độ nóng chảy cao và khi tan trong nước tạo dung dịch dẫn điện?',
      options: ['Đường saccharose', 'Sodium chloride', 'Nước', 'Khí carbon dioxide'],
      answer: 1,
      hints: ['Đó là các tính chất của chất ion.'],
      solution:
        'Sodium chloride là chất ion: rắn, nóng chảy ở $801\\ ^\\circ\\mathrm{C}$, dung dịch dẫn điện. Đường, nước, carbon dioxide là chất cộng hoá trị.',
    },
  ],
  takeaways: [
    'Khí hiếm có lớp electron ngoài cùng bền vững: $8$ electron (helium $2$ electron); các nguyên tử khác có xu hướng đạt lớp electron ngoài cùng giống khí hiếm khi liên kết.',
    'Nguyên tử nhường electron tạo ion dương, nhận electron tạo ion âm. Liên kết ion là liên kết giữa ion dương và ion âm, thường gặp giữa kim loại và phi kim (NaCl, MgO).',
    'Liên kết cộng hoá trị được tạo nên giữa hai nguyên tử bằng một hay nhiều cặp electron dùng chung, thường gặp giữa các phi kim ($\\mathrm{H_2}$, $\\mathrm{H_2O}$, $\\mathrm{N_2}$).',
    'Chất ion ở thể rắn, khó nóng chảy, khó bay hơi, dung dịch dẫn điện; chất cộng hoá trị có thể rắn, lỏng, khí, thường dễ nóng chảy, dễ bay hơi.',
  ],
};
