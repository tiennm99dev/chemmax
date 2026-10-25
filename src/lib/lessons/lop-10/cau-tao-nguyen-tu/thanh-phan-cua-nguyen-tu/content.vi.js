/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tử gồm hạt nhân chứa proton, neutron và lớp vỏ chứa electron; bài học giới thiệu các thí nghiệm tìm ra electron và hạt nhân, điện tích, khối lượng của các hạt, kích thước và khối lượng nguyên tử.',
  intro:
    'Mọi chất quanh em, từ giọt nước đến chiếc điện thoại, đều được tạo nên từ những hạt vô cùng nhỏ gọi là nguyên tử. Người ta từng nghĩ nguyên tử là hạt không thể chia nhỏ hơn. Cuối thế kỉ XIX và đầu thế kỉ XX, các thí nghiệm của Thomson, Rutherford và Chadwick cho thấy nguyên tử có cấu tạo phức tạp: một hạt nhân rất nhỏ ở tâm và lớp vỏ electron bao quanh. Trong bài này, em tìm hiểu nguyên tử gồm những hạt nào, chúng nặng bao nhiêu, mang điện ra sao và nguyên tử lớn đến mức nào.',
  objectives: [
    'Nêu được thành phần của nguyên tử: hạt nhân (proton, neutron) và lớp vỏ (electron).',
    'Mô tả được thí nghiệm tìm ra electron của Thomson và thí nghiệm tìm ra hạt nhân của Rutherford.',
    'Nêu được khối lượng, điện tích của proton, neutron, electron; giải thích vì sao nguyên tử trung hoà điện.',
    'So sánh được kích thước của nguyên tử với hạt nhân; đổi được các đơn vị nm, Å và m.',
    'Tính được khối lượng nguyên tử theo amu và giải thích vì sao khối lượng nguyên tử tập trung ở hạt nhân.',
  ],
  sections: [
    {
      heading: 'Thành phần của nguyên tử',
      blocks: [
        {
          type: 'callout',
          tone: 'note',
          title: 'Thí nghiệm tìm ra electron (Thomson, 1897)',
          text: 'Trong ống thuỷ tinh gần như chân không, giữa hai điện cực có hiệu điện thế rất cao, xuất hiện một chùm tia đi từ cực âm sang cực dương, gọi là tia âm cực. Tia âm cực truyền thẳng khi không có tác dụng của điện trường và bị lệch về phía cực dương khi đi qua điện trường. Vậy tia âm cực là chùm hạt mang điện tích âm, được gọi là electron, kí hiệu là $e$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thí nghiệm tìm ra hạt nhân (Rutherford, 1911)',
          text: 'Rutherford dùng các hạt $\\alpha$ (mang điện tích dương) bắn vào một lá vàng rất mỏng. Hầu hết các hạt $\\alpha$ xuyên thẳng qua lá vàng, một số ít bị lệch hướng và rất ít hạt bị bật ngược trở lại. Điều đó chứng tỏ nguyên tử có cấu tạo rỗng; phần mang điện tích dương tập trung trong một vùng rất nhỏ ở tâm nguyên tử, gọi là hạt nhân.',
        },
        {
          type: 'p',
          text: 'Về sau, người ta phát hiện hạt nhân gồm hai loại hạt: proton (kí hiệu $p$, mang điện tích dương, tìm ra năm 1918) và neutron (kí hiệu $n$, không mang điện, được Chadwick tìm ra năm 1932).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thành phần của nguyên tử',
          text: 'Nguyên tử gồm hạt nhân mang điện tích dương ở tâm và lớp vỏ nguyên tử gồm các electron mang điện tích âm chuyển động xung quanh hạt nhân. Hạt nhân gồm các proton và neutron.',
        },
        {
          type: 'table',
          caption: 'Khối lượng và điện tích của các hạt cấu tạo nên nguyên tử',
          head: [
            'Hạt',
            'Kí hiệu',
            'Khối lượng (kg)',
            'Khối lượng (amu)',
            'Điện tích (C)',
            'Điện tích tương đối',
          ],
          rows: [
            [
              'Proton',
              '$p$',
              '$1{,}673 \\cdot 10^{-27}$',
              '$\\approx 1$',
              '$+1{,}602 \\cdot 10^{-19}$',
              '$+1$',
            ],
            ['Neutron', '$n$', '$1{,}675 \\cdot 10^{-27}$', '$\\approx 1$', '$0$', '$0$'],
            [
              'Electron',
              '$e$',
              '$9{,}109 \\cdot 10^{-31}$',
              '$\\approx 0{,}00055$',
              '$-1{,}602 \\cdot 10^{-19}$',
              '$-1$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tử trung hoà về điện',
          text: 'Proton và electron có điện tích bằng nhau về độ lớn nhưng trái dấu. Trong nguyên tử, số proton bằng số electron, nên tổng điện tích của nguyên tử bằng 0.',
        },
        {
          type: 'p',
          text: 'Hãy tự lắp một nguyên tử: thêm hay bớt từng hạt và quan sát điện tích, khối lượng thay đổi thế nào.',
        },
        { type: 'widget', name: 'lap-nguyen-tu' },
      ],
    },
    {
      heading: 'Kích thước và khối lượng nguyên tử',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử vô cùng nhỏ, nên kích thước của nó thường được đo bằng nanomet (nm) hoặc angstrom (Å):',
        },
        {
          type: 'tex',
          tex: '1\\ \\text{nm} = 10^{-9}\\ \\text{m}; \\qquad 1\\ \\text{Å} = 10^{-10}\\ \\text{m}; \\qquad 1\\ \\text{nm} = 10\\ \\text{Å}',
        },
        {
          type: 'p',
          text: 'Nếu coi nguyên tử như một quả cầu thì đường kính của nguyên tử vào khoảng $10^{-10}$ m, còn đường kính của hạt nhân chỉ khoảng $10^{-14}$ m. Nguyên tử nhỏ nhất là nguyên tử hydrogen, có bán kính khoảng $0{,}053$ nm.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tử lớn hơn hạt nhân khoảng 10 000 lần',
          text: 'Gọi $d_1$ là đường kính nguyên tử và $d_2$ là đường kính hạt nhân: $$\\frac{d_1}{d_2} \\approx \\frac{10^{-10}\\ \\text{m}}{10^{-14}\\ \\text{m}} = 10^{4}$$ Vì vậy, phần lớn thể tích của nguyên tử là khoảng trống; các electron chuyển động rất nhanh trong khoảng không gian đó.',
        },
        {
          type: 'p',
          text: 'Khối lượng nguyên tử rất nhỏ, nếu tính bằng kilogam thì rất khó dùng. Người ta dùng đơn vị khối lượng nguyên tử, kí hiệu là amu:',
        },
        { type: 'tex', tex: '1\\ \\text{amu} = 1{,}6605 \\cdot 10^{-27}\\ \\text{kg}' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khối lượng nguyên tử',
          text: 'Khối lượng nguyên tử bằng tổng khối lượng của proton, neutron và electron. Electron nhẹ hơn proton khoảng 1 836 lần nên khối lượng của các electron rất nhỏ, có thể bỏ qua: khối lượng nguyên tử tập trung chủ yếu ở hạt nhân, và tính theo amu thì gần bằng tổng số proton và neutron.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không nhầm "nhỏ" với "nhẹ": hạt nhân chiếm một thể tích rất nhỏ so với nguyên tử nhưng lại chứa gần như toàn bộ khối lượng của nguyên tử.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phóng to vào bên trong nguyên tử carbon',
    instruction:
      'Kéo thanh "Phóng to" để thu hẹp khung nhìn từ $10^{-9}$ m xuống $10^{-14}$ m. Hình được vẽ đúng tỉ lệ: lúc đầu em thấy nhiều nguyên tử, rồi một nguyên tử, rồi khoảng trống mênh mông trước khi hạt nhân hiện ra. Sau đó chọn một vật để hình dung: nếu hạt nhân to bằng vật đó thì nguyên tử lớn đến đâu?',
  },
  examples: [
    {
      problem:
        'Nguyên tử aluminium có 13 proton, 14 neutron và 13 electron. Tính khối lượng nguyên tử theo amu và theo kg; khối lượng các electron chiếm bao nhiêu phần trăm?',
      steps: [
        'Theo amu: $m = 13 \\cdot 1 + 14 \\cdot 1 + 13 \\cdot 0{,}00055 = 27{,}00715 \\approx 27$ amu.',
        'Theo kg: $m = 13 \\cdot 1{,}673 \\cdot 10^{-27} + 14 \\cdot 1{,}675 \\cdot 10^{-27} + 13 \\cdot 9{,}109 \\cdot 10^{-31} \\approx 4{,}521 \\cdot 10^{-26}$ kg.',
        'Khối lượng các electron: $13 \\cdot 9{,}109 \\cdot 10^{-31} \\approx 1{,}184 \\cdot 10^{-29}$ kg.',
        'Tỉ lệ: $\\dfrac{1{,}184 \\cdot 10^{-29}}{4{,}521 \\cdot 10^{-26}} \\cdot 100\\% \\approx 0{,}026\\%$.',
      ],
      answer:
        'Nguyên tử aluminium nặng khoảng $27$ amu, tức khoảng $4{,}521 \\cdot 10^{-26}$ kg; các electron chỉ chiếm khoảng $0{,}026\\%$ khối lượng, nên khối lượng nguyên tử tập trung ở hạt nhân.',
    },
    {
      problem:
        'Nguyên tử oxygen có 8 proton. Tính điện tích của hạt nhân và điện tích của lớp vỏ (theo C). Vì sao nguyên tử oxygen trung hoà về điện?',
      steps: [
        'Điện tích hạt nhân: $8 \\cdot (+1{,}602 \\cdot 10^{-19}) = +1{,}2816 \\cdot 10^{-18}$ C.',
        'Nguyên tử trung hoà nên có 8 electron; điện tích lớp vỏ: $8 \\cdot (-1{,}602 \\cdot 10^{-19}) = -1{,}2816 \\cdot 10^{-18}$ C.',
        'Tổng điện tích: $+1{,}2816 \\cdot 10^{-18} + (-1{,}2816 \\cdot 10^{-18}) = 0$.',
      ],
      answer:
        'Hạt nhân mang $+1{,}2816 \\cdot 10^{-18}$ C, lớp vỏ mang $-1{,}2816 \\cdot 10^{-18}$ C; số proton bằng số electron nên nguyên tử trung hoà về điện.',
    },
    {
      problem:
        'Nếu phóng to hạt nhân thành một quả bóng có đường kính $6$ cm thì đường kính của nguyên tử là bao nhiêu mét?',
      steps: [
        'Đường kính nguyên tử lớn hơn đường kính hạt nhân khoảng $10^{4}$ lần.',
        'Đường kính nguyên tử: $6\\ \\text{cm} \\cdot 10^{4} = 60\\,000$ cm.',
        'Đổi đơn vị: $60\\,000$ cm $= 600$ m.',
      ],
      answer: 'Khoảng $600$ m, dài hơn một sân vận động; quả bóng nằm lọt thỏm ở giữa.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hạt nào sau đây mang điện tích dương?',
      options: ['Electron', 'Proton', 'Neutron', 'Nguyên tử'],
      answer: 1,
      hints: ['Hạt nhân mang điện dương nhờ một loại hạt bên trong nó.'],
      solution:
        'Proton mang điện tích $+1$. Electron mang điện tích $-1$, neutron không mang điện, còn nguyên tử trung hoà về điện.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm của Thomson, tia âm cực bị lệch về phía cực dương khi đi qua điện trường. Điều đó chứng tỏ',
      options: [
        'tia âm cực là chùm hạt mang điện tích âm',
        'tia âm cực là chùm hạt mang điện tích dương',
        'tia âm cực không mang điện',
        'tia âm cực là chùm hạt có khối lượng rất lớn',
      ],
      answer: 0,
      hints: ['Điện tích trái dấu thì hút nhau.'],
      solution:
        'Tia âm cực bị hút về phía cực dương, nên nó gồm các hạt mang điện tích âm: đó là các electron.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm của Rutherford, hầu hết các hạt $\\alpha$ xuyên thẳng qua lá vàng. Kết luận nào rút ra từ kết quả này?',
      options: [
        'Nguyên tử là khối đặc, không có khoảng trống',
        'Electron có khối lượng lớn',
        'Nguyên tử có cấu tạo rỗng',
        'Hạt nhân không mang điện',
      ],
      answer: 2,
      hints: ['Nếu nguyên tử đặc kín thì hạt $\\alpha$ có đi thẳng qua được không?'],
      solution:
        'Hầu hết hạt $\\alpha$ đi thẳng qua lá vàng chứng tỏ nguyên tử có cấu tạo rỗng. Số ít hạt bị lệch hoặc bật lại cho thấy có một hạt nhân mang điện dương, rất nhỏ ở tâm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hạt với vị trí và điện tích của nó trong nguyên tử.',
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
        'Một nguyên tử có 17 proton trong hạt nhân. Lớp vỏ của nguyên tử này có bao nhiêu electron?',
      answer: 17,
      hints: ['Nguyên tử trung hoà về điện.'],
      solution: 'Nguyên tử trung hoà về điện nên số electron bằng số proton: có $17$ electron.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử sodium có 11 proton, 12 neutron và 11 electron. Khối lượng của nguyên tử này bằng bao nhiêu amu (làm tròn đến hàng đơn vị)?',
      answer: 23,
      tolerance: 0.01,
      unit: 'amu',
      hints: [
        'Proton và neutron mỗi hạt nặng khoảng $1$ amu.',
        'Khối lượng các electron rất nhỏ: $11 \\cdot 0{,}00055 \\approx 0{,}006$ amu.',
      ],
      solution:
        '$m = 11 \\cdot 1 + 12 \\cdot 1 + 11 \\cdot 0{,}00055 = 23{,}00605 \\approx 23$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Dựa vào bảng khối lượng các hạt, khối lượng của một proton gấp khoảng bao nhiêu lần khối lượng của một electron (làm tròn đến hàng đơn vị)?',
      answer: 1837,
      tolerance: 2,
      hints: ['Chia $1{,}673 \\cdot 10^{-27}$ cho $9{,}109 \\cdot 10^{-31}$.'],
      solution:
        '$\\dfrac{1{,}673 \\cdot 10^{-27}}{9{,}109 \\cdot 10^{-31}} \\approx 1{,}837 \\cdot 10^{3}$: proton nặng gấp khoảng $1\\,837$ lần electron (giá trị chính xác hơn là khoảng $1\\,836$).',
    },
    {
      type: 'number',
      prompt:
        'Đường kính nguyên tử khoảng $10^{-10}$ m, đường kính hạt nhân khoảng $10^{-14}$ m. Đường kính nguyên tử lớn gấp bao nhiêu lần đường kính hạt nhân?',
      answer: 10000,
      hints: [
        'Lập tỉ số $\\dfrac{10^{-10}}{10^{-14}}$.',
        'Chia hai luỹ thừa cùng cơ số: trừ số mũ.',
      ],
      solution: '$\\dfrac{10^{-10}}{10^{-14}} = 10^{-10 - (-14)} = 10^{4} = 10\\,000$ lần.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử hydrogen có bán kính khoảng $0{,}053$ nm. Bán kính này bằng bao nhiêu Å?',
      answer: 0.53,
      tolerance: 0.001,
      unit: 'Å',
      hints: ['$1$ nm $= 10$ Å.'],
      solution: '$0{,}053\\ \\text{nm} = 0{,}053 \\cdot 10\\ \\text{Å} = 0{,}53\\ \\text{Å}$.',
    },
    {
      type: 'number',
      prompt:
        'Hạt nhân nguyên tử aluminium có 13 proton. Điện tích của hạt nhân này bằng $x \\cdot 10^{-19}$ C. Tìm $x$.',
      answer: 20.826,
      tolerance: 0.01,
      hints: [
        'Mỗi proton mang điện tích $+1{,}602 \\cdot 10^{-19}$ C.',
        'Neutron không mang điện.',
      ],
      solution:
        '$q = 13 \\cdot 1{,}602 \\cdot 10^{-19} = 20{,}826 \\cdot 10^{-19}$ C, nên $x = 20{,}826$ (tức khoảng $2{,}08 \\cdot 10^{-18}$ C).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân.',
        'Hạt nhân chiếm phần lớn thể tích của nguyên tử.',
        'Trong nguyên tử, số proton bằng số electron.',
        'Neutron mang điện tích âm.',
        'Electron có khối lượng rất nhỏ so với proton.',
      ],
      answers: [0, 2, 4],
      hints: ['Nhớ lại: hạt nhân rất nhỏ nhưng rất nặng.', 'Neutron có tên gốc từ "neutral".'],
      solution:
        'Đúng: khối lượng tập trung ở hạt nhân; số proton bằng số electron; electron rất nhẹ. Sai: hạt nhân chỉ chiếm thể tích rất nhỏ (nguyên tử phần lớn là khoảng trống); neutron không mang điện.',
    },
  ],
  takeaways: [
    'Nguyên tử gồm hạt nhân ở tâm (proton mang điện $+1$, neutron không mang điện) và lớp vỏ gồm các electron mang điện $-1$.',
    'Thomson tìm ra electron nhờ tia âm cực (1897); Rutherford tìm ra hạt nhân nhờ bắn hạt $\\alpha$ vào lá vàng (1911); Chadwick tìm ra neutron (1932).',
    'Số proton bằng số electron nên nguyên tử trung hoà về điện.',
    'Proton và neutron nặng khoảng $1$ amu; electron nặng khoảng $0{,}00055$ amu. Khối lượng nguyên tử tập trung ở hạt nhân.',
    'Đường kính nguyên tử khoảng $10^{-10}$ m, lớn hơn hạt nhân khoảng $10^{4}$ lần; $1$ nm $= 10$ Å $= 10^{-9}$ m; $1$ amu $= 1{,}6605 \\cdot 10^{-27}$ kg.',
  ],
};
