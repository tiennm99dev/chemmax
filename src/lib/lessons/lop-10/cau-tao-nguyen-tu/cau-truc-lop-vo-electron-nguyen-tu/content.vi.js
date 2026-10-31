/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Electron chuyển động quanh hạt nhân trong các orbital nguyên tử, xếp thành lớp và phân lớp; cấu hình electron được viết theo nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund.',
  intro:
    'Ở lớp 7, em đã biết electron được xếp thành từng lớp quanh hạt nhân. Nhưng electron chuyển động thế nào, vì sao lớp thứ nhất chỉ chứa 2 electron còn lớp thứ hai chứa được 8? Trong bài này, em làm quen với orbital nguyên tử, lớp và phân lớp electron, rồi học cách viết cấu hình electron của 20 nguyên tố đầu tiên, theo phân lớp và theo ô orbital.',
  objectives: [
    'Trình bày được mô hình nguyên tử của Rutherford – Bohr và mô hình hiện đại về sự chuyển động của electron.',
    'Nêu được khái niệm orbital nguyên tử (AO), hình dạng của orbital s và p.',
    'Trình bày được khái niệm lớp, phân lớp electron; số orbital và số electron tối đa trong mỗi phân lớp, mỗi lớp.',
    'Viết được cấu hình electron theo phân lớp và theo ô orbital của 20 nguyên tố đầu tiên, dựa vào nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund.',
    'Dựa vào số electron lớp ngoài cùng, dự đoán được nguyên tố là kim loại, phi kim hay khí hiếm.',
  ],
  sections: [
    {
      heading: 'Sự chuyển động của electron trong nguyên tử',
      blocks: [
        {
          type: 'p',
          text: 'Theo mô hình nguyên tử của Rutherford – Bohr, electron chuyển động quanh hạt nhân theo những quỹ đạo tròn xác định, giống như các hành tinh quay quanh Mặt Trời. Mô hình này giải thích được nhiều hiện tượng nhưng chưa đầy đủ.',
        },
        {
          type: 'p',
          text: 'Theo mô hình hiện đại, electron chuyển động rất nhanh xung quanh hạt nhân, không theo một quỹ đạo xác định nào, tạo thành đám mây electron. Ta không biết chính xác electron ở đâu, chỉ biết vùng nào electron có mặt nhiều nhất.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Orbital nguyên tử',
          text: 'Orbital nguyên tử (kí hiệu AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất có mặt electron là lớn nhất (khoảng $90\\%$).',
        },
        {
          type: 'list',
          items: [
            'Orbital s có dạng hình cầu, tâm là hạt nhân nguyên tử.',
            'Orbital p có dạng hình số tám nổi; có ba orbital $p_x$, $p_y$, $p_z$ định hướng theo ba trục toạ độ $Ox$, $Oy$, $Oz$.',
            'Orbital d và f có hình dạng phức tạp hơn.',
          ],
        },
      ],
    },
    {
      heading: 'Lớp và phân lớp electron',
      blocks: [
        {
          type: 'p',
          text: 'Các electron có năng lượng gần bằng nhau được xếp vào cùng một lớp. Các lớp được đánh số $n = 1, 2, 3, \\ldots, 7$ từ trong ra ngoài, kí hiệu bằng các chữ cái K, L, M, N, O, P, Q. Electron ở lớp càng gần hạt nhân thì liên kết với hạt nhân càng chặt và có năng lượng càng thấp.',
        },
        {
          type: 'p',
          text: 'Mỗi lớp lại chia thành các phân lớp, kí hiệu bằng các chữ cái s, p, d, f. Các electron trong cùng một phân lớp có năng lượng bằng nhau. Lớp thứ $n$ có $n$ phân lớp (với $n \\le 4$).',
        },
        {
          type: 'table',
          caption: 'Số orbital và số electron tối đa trong một phân lớp',
          head: ['Phân lớp', 's', 'p', 'd', 'f'],
          rows: [
            ['Số orbital', '$1$', '$3$', '$5$', '$7$'],
            ['Số electron tối đa', '$2$', '$6$', '$10$', '$14$'],
          ],
        },
        {
          type: 'table',
          caption: 'Các lớp electron đầu tiên',
          head: ['Lớp', '$n$', 'Các phân lớp', 'Số orbital ($n^2$)', 'Số electron tối đa ($2n^2$)'],
          rows: [
            ['K', '$1$', '1s', '$1$', '$2$'],
            ['L', '$2$', '2s, 2p', '$4$', '$8$'],
            ['M', '$3$', '3s, 3p, 3d', '$9$', '$18$'],
            ['N', '$4$', '4s, 4p, 4d, 4f', '$16$', '$32$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Một phân lớp đã đủ số electron tối đa gọi là phân lớp bão hoà (như $\\mathrm{2p^6}$); có số electron bằng một nửa số tối đa là phân lớp bán bão hoà (như $\\mathrm{2p^3}$); còn lại là phân lớp chưa bão hoà.',
        },
      ],
    },
    {
      heading: 'Cấu hình electron nguyên tử',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên lí vững bền',
          text: 'Ở trạng thái cơ bản, electron chiếm lần lượt những orbital có mức năng lượng từ thấp đến cao. Trật tự mức năng lượng của các phân lớp: $$\\mathrm{1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ 6s\\ \\ldots}$$',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Phân lớp 4s có mức năng lượng thấp hơn 3d, nên electron điền vào 4s trước 3d. Khi viết cấu hình hoàn chỉnh, ta vẫn sắp xếp các phân lớp theo thứ tự từng lớp ($\\mathrm{3d}$ đứng trước $\\mathrm{4s}$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên lí Pauli',
          text: 'Trong một orbital chỉ có thể có tối đa 2 electron, và hai electron này chuyển động tự quay khác chiều nhau. Mỗi orbital được biểu diễn bằng một ô vuông; electron là một mũi tên: ô có 2 electron ghép đôi ($\\uparrow\\downarrow$), ô có 1 electron độc thân ($\\uparrow$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc Hund',
          text: 'Trong cùng một phân lớp, các electron phân bố trên các orbital sao cho số electron độc thân là tối đa, và các electron độc thân này có chiều tự quay giống nhau.',
        },
        {
          type: 'p',
          text: 'Cấu hình electron cho biết sự phân bố electron vào các lớp và phân lớp. Cách viết cấu hình electron của một nguyên tử:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định số electron của nguyên tử (bằng $Z$).',
            'Điền lần lượt các electron vào các phân lớp theo trật tự mức năng lượng; s chứa tối đa 2, p tối đa 6, d tối đa 10 electron. Số electron trong phân lớp viết ở phía trên, bên phải kí hiệu phân lớp ($\\mathrm{2p^6}$).',
            'Sắp xếp lại các phân lớp theo thứ tự từng lớp.',
          ],
        },
        {
          type: 'p',
          text: 'Có thể viết gọn cấu hình bằng cách thay phần giống khí hiếm đứng trước bằng kí hiệu của khí hiếm đó trong ngoặc vuông: sodium $\\mathrm{1s^2 2s^2 2p^6 3s^1}$ viết gọn là $\\mathrm{[Ne]3s^1}$.',
        },
        {
          type: 'table',
          caption: 'Cấu hình electron theo ô orbital của nitrogen ($Z = 7$) và oxygen ($Z = 8$)',
          head: ['Nguyên tử', '1s', '2s', '2p'],
          rows: [
            ['N: $\\mathrm{1s^2 2s^2 2p^3}$', '↑↓', '↑↓', '↑ | ↑ | ↑'],
            ['O: $\\mathrm{1s^2 2s^2 2p^4}$', '↑↓', '↑↓', '↑↓ | ↑ | ↑'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đặc điểm của lớp electron ngoài cùng',
          text: 'Các electron lớp ngoài cùng quyết định tính chất hoá học của nguyên tố. Nguyên tử có 1, 2 hoặc 3 electron lớp ngoài cùng thường là kim loại (trừ H, He và B); có 5, 6 hoặc 7 electron thường là phi kim; có 8 electron (He có 2) là khí hiếm, rất bền; có 4 electron có thể là kim loại hoặc phi kim.',
        },
      ],
    },
  ],
  explore: {
    title: 'Điền electron vào ô orbital',
    instruction:
      'Chọn số hiệu nguyên tử $Z$, chọn chiều tự quay rồi bấm vào các ô để thêm từng electron. Mỗi lần thêm sai, bộ điền cho biết em đã vi phạm nguyên lí vững bền, nguyên lí Pauli hay quy tắc Hund. Thử điền electron thứ hai vào ô 1s với cùng chiều mũi tên, hoặc ghép đôi trong 2p khi còn ô trống, để thấy quy tắc hoạt động.',
  },
  examples: [
    {
      problem:
        'Viết cấu hình electron của nguyên tử chlorine ($Z = 17$) theo phân lớp và theo ô orbital. Nguyên tử Cl có bao nhiêu electron độc thân? Chlorine là kim loại, phi kim hay khí hiếm?',
      steps: [
        'Nguyên tử Cl có $17$ electron.',
        'Điền theo trật tự mức năng lượng: $\\mathrm{1s^2}$ ($2$), $\\mathrm{2s^2}$ ($4$), $\\mathrm{2p^6}$ ($10$), $\\mathrm{3s^2}$ ($12$), còn $5$ electron vào 3p: $\\mathrm{3p^5}$.',
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^5}$, viết gọn $\\mathrm{[Ne]3s^2 3p^5}$.',
        'Theo ô orbital, phân lớp 3p có 3 ô: ↑↓ | ↑↓ | ↑ (theo quy tắc Hund, mỗi ô nhận 1 electron trước, rồi mới ghép đôi). Vậy có $1$ electron độc thân.',
        'Lớp ngoài cùng (lớp M) có $2 + 5 = 7$ electron, nên chlorine là phi kim.',
      ],
      answer:
        '$\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^5}$; có $1$ electron độc thân; $7$ electron lớp ngoài cùng nên chlorine là phi kim.',
    },
    {
      problem:
        'Viết cấu hình electron của nguyên tử potassium ($Z = 19$). Cho biết số electron trên mỗi lớp.',
      steps: [
        'Nguyên tử K có $19$ electron. Điền: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6}$ là $18$ electron.',
        'Phân lớp tiếp theo theo trật tự mức năng lượng là 4s (thấp hơn 3d), nên electron thứ $19$ vào 4s.',
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^1}$, viết gọn $\\mathrm{[Ar]4s^1}$.',
        'Số electron mỗi lớp: K: $2$; L: $2 + 6 = 8$; M: $2 + 6 = 8$; N: $1$.',
      ],
      answer:
        '$\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^1}$; các lớp có $2, 8, 8, 1$ electron; potassium có $1$ electron lớp ngoài cùng nên là kim loại.',
    },
    {
      problem:
        'Lớp M ($n = 3$) có những phân lớp nào, bao nhiêu orbital và chứa tối đa bao nhiêu electron?',
      steps: [
        'Lớp thứ $3$ có $3$ phân lớp: 3s, 3p, 3d.',
        'Số orbital: $1 + 3 + 5 = 9 = 3^2$.',
        'Mỗi orbital chứa tối đa $2$ electron, nên lớp M chứa tối đa $2 \\cdot 9 = 18 = 2 \\cdot 3^2$ electron.',
      ],
      answer: 'Lớp M có 3s, 3p, 3d; $9$ orbital; tối đa $18$ electron.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Orbital p có dạng',
      options: ['hình cầu', 'hình số tám nổi', 'hình tròn phẳng', 'hình elip phẳng'],
      answer: 1,
      hints: ['Orbital s mới có dạng hình cầu.'],
      solution:
        'Orbital p có dạng hình số tám nổi; ba orbital $p_x$, $p_y$, $p_z$ định hướng theo ba trục toạ độ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi lớp electron với số thứ tự $n$ của nó.',
      left: ['Lớp K', 'Lớp L', 'Lớp M', 'Lớp N'],
      right: ['$n = 1$', '$n = 2$', '$n = 3$', '$n = 4$'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Các lớp được kí hiệu theo thứ tự chữ cái K, L, M, N, ... từ trong ra ngoài.'],
      solution: 'K ứng với $n = 1$, L với $n = 2$, M với $n = 3$, N với $n = 4$.',
    },
    {
      type: 'number',
      prompt: 'Lớp L ($n = 2$) có bao nhiêu orbital?',
      answer: 4,
      hints: ['Lớp L gồm phân lớp 2s và 2p.', 'Lớp $n$ có $n^2$ orbital.'],
      solution: '2s có $1$ orbital, 2p có $3$ orbital: tổng $4 = 2^2$ orbital.',
    },
    {
      type: 'number',
      prompt: 'Phân lớp d chứa tối đa bao nhiêu electron?',
      answer: 10,
      hints: ['Phân lớp d có $5$ orbital.'],
      solution:
        'Phân lớp d có $5$ orbital, mỗi orbital tối đa $2$ electron: $5 \\cdot 2 = 10$ electron.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các phân lớp theo mức năng lượng tăng dần.',
      items: ['3p', '1s', '4s', '2p', '3s', '2s', '3d'],
      answer: [1, 5, 3, 4, 0, 2, 6],
      hints: ['Phân lớp 1s có năng lượng thấp nhất.', '4s có năng lượng thấp hơn 3d.'],
      solution: 'Trật tự mức năng lượng: 1s < 2s < 2p < 3s < 3p < 4s < 3d.',
    },
    {
      type: 'choice',
      prompt: 'Cấu hình electron của nguyên tử sodium ($Z = 11$) là',
      options: [
        '$\\mathrm{1s^2 2s^2 2p^7}$',
        '$\\mathrm{1s^2 2s^2 2p^6 3s^1}$',
        '$\\mathrm{1s^2 2s^2 2p^5 3s^2}$',
        '$\\mathrm{1s^2 2s^2 2p^6 3p^1}$',
      ],
      answer: 1,
      hints: ['Phân lớp p chứa tối đa $6$ electron.', 'Sau 2p là 3s.'],
      solution:
        '$11$ electron: $\\mathrm{1s^2}$, $\\mathrm{2s^2}$, $\\mathrm{2p^6}$ (đủ $10$), electron thứ $11$ vào 3s: $\\mathrm{1s^2 2s^2 2p^6 3s^1}$. 2p không thể có $7$ electron; 3s phải đầy trước 3p.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử nitrogen ($Z = 7$) có bao nhiêu electron độc thân ở trạng thái cơ bản?',
      answer: 3,
      hints: [
        'Viết cấu hình: $\\mathrm{1s^2 2s^2 2p^3}$.',
        'Theo quy tắc Hund, $3$ electron 2p chiếm $3$ ô khác nhau.',
      ],
      solution: 'Phân lớp 2p: ↑ | ↑ | ↑, nên nguyên tử N có $3$ electron độc thân.',
    },
    {
      type: 'choice',
      prompt: 'Cách điền electron vào phân lớp 2p nào sau đây vi phạm quy tắc Hund?',
      options: ['↑ | ↑ | ↑', '↑↓ | ↑ | ↑', '↑↓ | ↑ | (trống)', '↑↓ | ↑↓ | ↑'],
      answer: 2,
      hints: ['Quy tắc Hund: electron chiếm mỗi ô một electron trước rồi mới ghép đôi.'],
      solution:
        'Với $3$ electron, phải điền ↑ | ↑ | ↑ để có $3$ electron độc thân. Cách ↑↓ | ↑ | (trống) ghép đôi khi còn ô trống, chỉ có $1$ electron độc thân: vi phạm quy tắc Hund.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử X có cấu hình electron $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$. Số hiệu nguyên tử của X là bao nhiêu?',
      answer: 16,
      hints: ['Cộng số electron ở tất cả các phân lớp.'],
      solution: '$Z = 2 + 2 + 6 + 2 + 4 = 16$ (X là sulfur).',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử calcium ($Z = 20$) có bao nhiêu electron ở lớp ngoài cùng?',
      answer: 2,
      hints: ['Viết cấu hình theo trật tự mức năng lượng; nhớ 4s trước 3d.'],
      solution:
        'Cấu hình Ca: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^2}$. Lớp ngoài cùng là lớp N với $2$ electron, nên calcium là kim loại.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tử Y có $Z = 15$. Dựa vào số electron lớp ngoài cùng, Y là nguyên tố',
      options: ['kim loại', 'phi kim', 'khí hiếm', 'không xác định được'],
      answer: 1,
      hints: ['Viết cấu hình và đếm electron ở lớp có $n$ lớn nhất.'],
      solution:
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$. Lớp ngoài cùng có $2 + 3 = 5$ electron, nên Y (phosphorus) là phi kim.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Mỗi orbital chứa tối đa $2$ electron có chiều tự quay ngược nhau.',
        'Lớp thứ $n$ chứa tối đa $2n^2$ electron.',
        'Electron điền vào phân lớp 3d trước phân lớp 4s.',
        'Các electron trong cùng một phân lớp có năng lượng bằng nhau.',
        'Electron chuyển động quanh hạt nhân theo những quỹ đạo tròn xác định (theo mô hình hiện đại).',
      ],
      answers: [0, 1, 3],
      hints: [
        'Xem lại trật tự mức năng lượng của 4s và 3d.',
        'Mô hình hiện đại nói về đám mây electron.',
      ],
      solution:
        'Đúng: nguyên lí Pauli; lớp $n$ có tối đa $2n^2$ electron; electron cùng phân lớp có năng lượng bằng nhau. Sai: 4s có năng lượng thấp hơn nên điền trước 3d; quỹ đạo tròn là mô hình Rutherford – Bohr, mô hình hiện đại không có quỹ đạo xác định.',
    },
  ],
  takeaways: [
    'Electron chuyển động rất nhanh quanh hạt nhân, không theo quỹ đạo xác định; orbital nguyên tử là vùng có xác suất có mặt electron lớn nhất (khoảng $90\\%$). Orbital s hình cầu, orbital p hình số tám nổi.',
    'Lớp $n = 1, 2, 3, 4$ (K, L, M, N) có $n$ phân lớp, $n^2$ orbital và tối đa $2n^2$ electron. Phân lớp s, p, d, f có $1, 3, 5, 7$ orbital, chứa tối đa $2, 6, 10, 14$ electron.',
    'Nguyên lí vững bền: điền electron theo trật tự 1s 2s 2p 3s 3p 4s 3d ...; nguyên lí Pauli: mỗi orbital tối đa 2 electron ngược chiều; quy tắc Hund: số electron độc thân tối đa, cùng chiều.',
    'Viết cấu hình: điền theo mức năng lượng, rồi sắp xếp theo lớp; có thể viết gọn với khí hiếm, như $\\mathrm{[Ne]3s^1}$.',
    '1, 2, 3 electron lớp ngoài cùng: thường là kim loại (trừ H, He, B); 5, 6, 7: phi kim; 8 (He có 2): khí hiếm; 4: kim loại hoặc phi kim.',
  ],
};
