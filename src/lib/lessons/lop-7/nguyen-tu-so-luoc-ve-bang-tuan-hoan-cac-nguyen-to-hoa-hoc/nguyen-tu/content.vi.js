/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tử gồm hạt nhân mang điện dương (proton, neutron) và lớp vỏ gồm các electron mang điện âm xếp thành từng lớp theo mô hình Rutherford – Bohr; khối lượng nguyên tử tính bằng amu và gần bằng khối lượng hạt nhân.',
  intro:
    'Một hạt cát, một giọt nước hay chính cơ thể em đều được tạo nên từ những hạt vô cùng nhỏ gọi là nguyên tử. Nhỏ đến mức nào? Phải xếp khoảng mười triệu nguyên tử nối tiếp nhau mới dài được 1 mm. Vậy bên trong một hạt nhỏ như thế có gì, và người ta "cân" nó bằng cách nào?',
  objectives: [
    'Trình bày được mô hình nguyên tử của Rutherford – Bohr: hạt nhân ở tâm, các electron chuyển động thành từng lớp xung quanh.',
    'Nêu được thành phần của nguyên tử: proton, neutron trong hạt nhân và electron ở lớp vỏ, cùng điện tích và khối lượng của mỗi hạt.',
    'Giải thích được vì sao nguyên tử trung hoà về điện.',
    'Xếp được các electron vào các lớp của 20 nguyên tử đầu tiên.',
    'Tính được khối lượng nguyên tử theo đơn vị amu từ số hạt proton, neutron.',
  ],
  sections: [
    {
      heading: 'Nguyên tử là gì?',
      blocks: [
        {
          type: 'p',
          text: 'Từ thời Hy Lạp cổ đại, nhà triết học Democritus cho rằng mọi chất đều được tạo nên từ những hạt rất nhỏ không thể phân chia được nữa, gọi là nguyên tử (atomos nghĩa là "không thể chia cắt"). Đến thế kỉ XIX, Dalton dùng thí nghiệm để khẳng định các chất được tạo nên từ nguyên tử.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tử',
          text: 'Nguyên tử là hạt vô cùng nhỏ, trung hoà về điện, tạo nên các chất. Đường kính nguyên tử chỉ vào khoảng $10^{-10}$ m.',
        },
        {
          type: 'p',
          text: 'Về sau, các nhà khoa học phát hiện nguyên tử vẫn còn được tạo nên từ những hạt nhỏ hơn nữa. Hình dung về cấu tạo bên trong ấy được gọi là mô hình nguyên tử.',
        },
      ],
    },
    {
      heading: 'Mô hình nguyên tử của Rutherford – Bohr',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1911, Rutherford bắn các hạt mang điện dương vào một lá vàng rất mỏng. Hầu hết các hạt đi thẳng qua lá vàng, chỉ rất ít hạt bị lệch hướng hoặc bật ngược lại. Ông kết luận: nguyên tử có cấu tạo rỗng, phần mang điện dương tập trung ở một hạt nhân rất nhỏ ở tâm. Năm 1913, Bohr hoàn thiện mô hình: các electron chuyển động quanh hạt nhân theo những quỹ đạo xác định, xếp thành từng lớp.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Mô hình Rutherford – Bohr',
          text: 'Nguyên tử có cấu tạo rỗng, gồm hạt nhân mang điện tích dương ở tâm và lớp vỏ gồm các electron mang điện tích âm. Các electron chuyển động xung quanh hạt nhân theo những quỹ đạo xác định, giống như các hành tinh quay quanh Mặt Trời, và sắp xếp thành từng lớp.',
        },
        {
          type: 'list',
          items: [
            'Các electron xếp vào các lớp lần lượt từ trong ra ngoài.',
            'Lớp thứ nhất (gần hạt nhân nhất) có tối đa 2 electron; lớp này bị hạt nhân hút mạnh nhất.',
            'Lớp thứ hai có tối đa 8 electron. Với 20 nguyên tố đầu tiên, lớp thứ ba cũng chứa tối đa 8 electron trước khi electron sang lớp thứ tư.',
            'Lớp xa hạt nhân nhất có electron gọi là lớp electron ngoài cùng.',
          ],
        },
        {
          type: 'table',
          caption: 'Số electron trên từng lớp của một số nguyên tử',
          head: ['Nguyên tử', 'Số electron', 'Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4'],
          rows: [
            ['Hydrogen', '1', '1', '–', '–', '–'],
            ['Carbon', '6', '2', '4', '–', '–'],
            ['Oxygen', '8', '2', '6', '–', '–'],
            ['Sodium', '11', '2', '8', '1', '–'],
            ['Chlorine', '17', '2', '8', '7', '–'],
            ['Potassium', '19', '2', '8', '8', '1'],
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo nguyên tử',
      blocks: [
        {
          type: 'p',
          text: 'Hạt nhân nguyên tử được tạo nên từ hai loại hạt là proton (kí hiệu $p$) và neutron (kí hiệu $n$). Lớp vỏ nguyên tử gồm các electron (kí hiệu $e$).',
        },
        {
          type: 'table',
          caption: 'Các hạt cấu tạo nên nguyên tử',
          head: ['Hạt', 'Kí hiệu', 'Vị trí', 'Điện tích', 'Khối lượng (amu)'],
          rows: [
            ['Proton', '$p$', 'Hạt nhân', '$+1$', '$\\approx 1$'],
            ['Neutron', '$n$', 'Hạt nhân', '$0$ (không mang điện)', '$\\approx 1$'],
            ['Electron', '$e$', 'Lớp vỏ', '$-1$', '$\\approx 0{,}00055$'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tử trung hoà về điện',
          text: 'Mỗi proton mang một đơn vị điện tích dương ($+1$), mỗi electron mang một đơn vị điện tích âm ($-1$). Trong nguyên tử, số proton bằng số electron, nên điện tích dương của hạt nhân và điện tích âm của lớp vỏ bằng nhau về độ lớn: nguyên tử trung hoà về điện.',
        },
        {
          type: 'p',
          text: 'Số proton trong hạt nhân quyết định nguyên tử thuộc loại nào: mọi nguyên tử có 6 proton đều là nguyên tử carbon, mọi nguyên tử có 8 proton đều là nguyên tử oxygen. Còn số neutron của cùng một loại nguyên tử có thể khác nhau.',
        },
      ],
    },
    {
      heading: 'Khối lượng nguyên tử',
      blocks: [
        {
          type: 'p',
          text: 'Khối lượng của một nguyên tử chỉ vào cỡ $10^{-27}$ đến $10^{-25}$ kg; dùng kilogam thì rất bất tiện, nên người ta dùng một đơn vị riêng là amu (atomic mass unit, đơn vị khối lượng nguyên tử):',
        },
        { type: 'tex', tex: '1\\ \\mathrm{amu} \\approx 1{,}6605 \\cdot 10^{-27}\\ \\mathrm{kg}' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khối lượng nguyên tử',
          text: 'Khối lượng nguyên tử bằng tổng khối lượng của các hạt proton, neutron và electron trong nguyên tử. Electron nhẹ hơn proton khoảng $1\\,800$ lần nên khối lượng các electron không đáng kể: khối lượng nguyên tử coi như bằng khối lượng hạt nhân.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cách tính nhanh',
          text: 'Khối lượng nguyên tử (amu) $\\approx$ số proton $+$ số neutron.',
        },
        {
          type: 'p',
          text: 'Ví dụ, nguyên tử carbon có 6 proton và 6 neutron, nên khối lượng nguyên tử carbon là $6 + 6 = 12$ amu.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Hạt nhân rất nhỏ so với cả nguyên tử (nhỏ hơn khoảng $10\\,000$ lần về đường kính) nhưng lại chứa gần như toàn bộ khối lượng của nguyên tử. Phần lớn thể tích nguyên tử là khoảng trống, nơi các electron chuyển động.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lắp ráp một nguyên tử',
    instruction:
      'Bấm $+$ và $-$ để thêm, bớt proton, neutron, electron. Quan sát: số proton cho biết đó là nguyên tử gì, các electron tự xếp vào từng lớp (2, rồi 8, …), điện tích tổng chỉ bằng 0 khi số proton bằng số electron, còn khối lượng gần bằng số proton cộng số neutron. Sau đó giải lần lượt các thử thách.',
  },
  examples: [
    {
      problem:
        'Nguyên tử nitrogen có 7 proton và 7 neutron. Cho biết số electron, cách sắp xếp electron vào các lớp và khối lượng nguyên tử nitrogen.',
      steps: [
        'Nguyên tử trung hoà về điện nên số electron bằng số proton: có $7$ electron.',
        'Lớp thứ nhất chứa tối đa $2$ electron; còn $7 - 2 = 5$ electron ở lớp thứ hai (chưa vượt quá $8$).',
        'Khối lượng nguyên tử $\\approx 7 + 7 = 14$ amu.',
      ],
      answer:
        'Nitrogen có $7$ electron, xếp thành $2$ lớp: $2$ và $5$ (lớp ngoài cùng có $5$ electron); khối lượng nguyên tử khoảng $14$ amu.',
    },
    {
      problem:
        'Nguyên tử aluminium có 13 electron và 14 neutron. Vẽ sơ đồ sắp xếp electron (số electron mỗi lớp) và tính khối lượng nguyên tử aluminium.',
      steps: [
        'Số proton bằng số electron: $13$ proton.',
        'Lớp 1: $2$ electron; lớp 2: $8$ electron; còn lại $13 - 2 - 8 = 3$ electron ở lớp 3.',
        'Khối lượng nguyên tử $\\approx 13 + 14 = 27$ amu.',
      ],
      answer:
        'Aluminium có $3$ lớp electron ($2$, $8$, $3$), lớp ngoài cùng có $3$ electron; khối lượng nguyên tử khoảng $27$ amu.',
    },
    {
      problem:
        'Nguyên tử X có tổng số hạt proton, neutron, electron là $40$; số hạt mang điện nhiều hơn số hạt không mang điện là $12$. Tìm số hạt mỗi loại của X.',
      steps: [
        'Gọi số proton là $p$, số neutron là $n$. Nguyên tử trung hoà nên số electron cũng là $p$.',
        'Tổng số hạt: $2p + n = 40$.',
        'Hạt mang điện là proton và electron, hạt không mang điện là neutron: $2p - n = 12$.',
        'Cộng hai đẳng thức: $4p = 52$, nên $p = 13$; suy ra $n = 40 - 26 = 14$.',
      ],
      answer:
        'X có $13$ proton, $13$ electron và $14$ neutron (đó là nguyên tử aluminium, khối lượng khoảng $27$ amu).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hạt nào sau đây mang điện tích âm?',
      options: ['Proton', 'Neutron', 'Electron', 'Hạt nhân'],
      answer: 2,
      hints: ['Hạt này ở lớp vỏ nguyên tử.'],
      solution:
        'Electron mang điện tích $-1$. Proton mang điện tích $+1$, neutron không mang điện, còn hạt nhân mang điện dương vì chứa proton.',
    },
    {
      type: 'choice',
      prompt: 'Theo mô hình nguyên tử Rutherford – Bohr, phát biểu nào sau đây đúng?',
      options: [
        'Nguyên tử là một khối đặc, các electron nằm rải rác bên trong.',
        'Các electron chuyển động quanh hạt nhân theo những quỹ đạo xác định, xếp thành từng lớp.',
        'Hạt nhân mang điện tích âm, nằm ở lớp ngoài cùng.',
        'Các proton chuyển động quanh hạt nhân giống các hành tinh quanh Mặt Trời.',
      ],
      answer: 1,
      hints: [
        'Trong mô hình này, hạt nào ở tâm và hạt nào chuyển động xung quanh?',
        'Thí nghiệm lá vàng cho thấy nguyên tử có cấu tạo rỗng.',
      ],
      solution:
        'Nguyên tử có cấu tạo rỗng: hạt nhân mang điện dương ở tâm, các electron mang điện âm chuyển động quanh hạt nhân theo những quỹ đạo xác định và xếp thành từng lớp.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hạt với vị trí và điện tích của nó.',
      left: ['Proton', 'Neutron', 'Electron'],
      right: [
        'Ở lớp vỏ, điện tích $-1$',
        'Ở hạt nhân, điện tích $+1$',
        'Ở hạt nhân, không mang điện',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Hạt nhân gồm proton và neutron; lớp vỏ gồm electron.'],
      solution:
        'Proton ở hạt nhân, điện tích $+1$; neutron ở hạt nhân, không mang điện; electron ở lớp vỏ, điện tích $-1$.',
    },
    {
      type: 'number',
      prompt:
        'Hạt nhân nguyên tử fluorine có 9 proton. Lớp vỏ nguyên tử fluorine có bao nhiêu electron?',
      answer: 9,
      hints: ['Nguyên tử trung hoà về điện.'],
      solution: 'Nguyên tử trung hoà về điện nên số electron bằng số proton: có $9$ electron.',
    },
    {
      type: 'number',
      prompt: 'Lớp electron thứ hai của nguyên tử chứa tối đa bao nhiêu electron?',
      answer: 8,
      hints: ['Lớp thứ nhất chứa tối đa $2$ electron; lớp thứ hai chứa nhiều hơn.'],
      solution: 'Lớp thứ nhất có tối đa $2$ electron, lớp thứ hai có tối đa $8$ electron.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử sulfur có 16 proton. Lớp electron ngoài cùng của nguyên tử sulfur có bao nhiêu electron?',
      answer: 6,
      hints: [
        'Số electron bằng số proton: $16$.',
        'Xếp lần lượt: lớp 1 tối đa $2$, lớp 2 tối đa $8$, phần còn lại sang lớp 3.',
      ],
      solution:
        'Có $16$ electron: lớp 1 có $2$, lớp 2 có $8$, lớp 3 có $16 - 2 - 8 = 6$. Lớp ngoài cùng có $6$ electron.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử magnesium có 12 proton và 12 neutron. Khối lượng nguyên tử magnesium là bao nhiêu amu?',
      answer: 24,
      unit: 'amu',
      hints: ['Mỗi proton và mỗi neutron nặng khoảng $1$ amu; bỏ qua khối lượng electron.'],
      solution: 'Khối lượng nguyên tử $\\approx 12 + 12 = 24$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử potassium có 19 proton và khối lượng nguyên tử khoảng 39 amu. Hạt nhân nguyên tử potassium có bao nhiêu neutron?',
      answer: 20,
      hints: ['Khối lượng nguyên tử $\\approx$ số proton $+$ số neutron (amu).'],
      solution: 'Số neutron $= 39 - 19 = 20$.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tử nào sau đây có 3 lớp electron?',
      options: [
        'Nguyên tử có 8 electron',
        'Nguyên tử có 2 electron',
        'Nguyên tử có 12 electron',
        'Nguyên tử có 19 electron',
      ],
      answer: 2,
      hints: [
        'Hai lớp đầu chứa nhiều nhất $2 + 8 = 10$ electron.',
        'Với 20 nguyên tố đầu, ba lớp đầu chứa nhiều nhất $2 + 8 + 8 = 18$ electron.',
      ],
      solution:
        '$8$ electron: $2$, $6$ (2 lớp). $2$ electron: 1 lớp. $12$ electron: $2$, $8$, $2$ (3 lớp). $19$ electron: $2$, $8$, $8$, $1$ (4 lớp). Vậy nguyên tử có $12$ electron có 3 lớp.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử Y có tổng số hạt proton, neutron, electron là $34$; số hạt mang điện nhiều hơn số hạt không mang điện là $10$. Nguyên tử Y có bao nhiêu proton?',
      answer: 11,
      hints: [
        'Số electron bằng số proton $p$; tổng số hạt là $2p + n$.',
        'Hạt mang điện là proton và electron: $2p - n = 10$. Cộng với $2p + n = 34$.',
      ],
      solution:
        '$2p + n = 34$ và $2p - n = 10$. Cộng lại: $4p = 44$, nên $p = 11$ (và $n = 12$). Y có $11$ proton, đó là nguyên tử sodium.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân.',
        'Hạt nhân chiếm phần lớn thể tích của nguyên tử.',
        'Trong nguyên tử, số proton bằng số electron.',
        'Neutron mang điện tích dương.',
        'Khối lượng của một electron rất nhỏ so với khối lượng của một proton.',
      ],
      answers: [0, 2, 4],
      hints: ['Hạt nhân rất nhỏ nhưng rất nặng.', 'Tên "neutron" có gốc từ "neutral" (trung hoà).'],
      solution:
        'Đúng: khối lượng tập trung ở hạt nhân; số proton bằng số electron; electron rất nhẹ (khoảng $0{,}00055$ amu). Sai: hạt nhân chỉ chiếm một phần rất nhỏ thể tích nguyên tử; neutron không mang điện.',
    },
  ],
  takeaways: [
    'Nguyên tử là hạt vô cùng nhỏ, trung hoà về điện, tạo nên các chất.',
    'Mô hình Rutherford – Bohr: hạt nhân mang điện dương ở tâm; các electron mang điện âm chuyển động quanh hạt nhân theo quỹ đạo xác định, xếp thành từng lớp (lớp 1 tối đa 2 electron, lớp 2 tối đa 8 electron).',
    'Hạt nhân gồm proton (điện tích $+1$, khoảng $1$ amu) và neutron (không mang điện, khoảng $1$ amu); lớp vỏ gồm electron (điện tích $-1$, khoảng $0{,}00055$ amu).',
    'Trong nguyên tử, số proton bằng số electron.',
    'Khối lượng nguyên tử $\\approx$ số proton $+$ số neutron (amu); $1$ amu $\\approx 1{,}6605 \\cdot 10^{-27}$ kg.',
  ],
};
