/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton; bài học giới thiệu số hiệu nguyên tử, số khối, kí hiệu nguyên tử, đồng vị và cách tính nguyên tử khối trung bình.',
  intro:
    'Trong bảng tuần hoàn, nguyên tử khối của chlorine là $35{,}45$ chứ không phải một số nguyên. Vì sao vậy? Câu trả lời nằm ở hạt nhân: các nguyên tử chlorine luôn có 17 proton nhưng số neutron có thể khác nhau. Trong bài này, em tìm hiểu điều gì quyết định một nguyên tố hoá học, cách kí hiệu một nguyên tử, đồng vị là gì và cách tính nguyên tử khối trung bình của một nguyên tố.',
  objectives: [
    'Trình bày được khái niệm nguyên tố hoá học, số hiệu nguyên tử và số khối.',
    'Viết và đọc được kí hiệu nguyên tử ${}^{A}_{Z}\\mathrm{X}$; tính được số proton, neutron, electron từ kí hiệu đó.',
    'Phát biểu được khái niệm đồng vị và nhận ra các nguyên tử là đồng vị của nhau.',
    'Tính được nguyên tử khối trung bình từ phần trăm số nguyên tử các đồng vị, và tính ngược lại phần trăm đồng vị khi biết nguyên tử khối trung bình.',
  ],
  sections: [
    {
      heading: 'Nguyên tố hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tố hoá học',
          text: 'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân, tức là có cùng số proton.',
        },
        {
          type: 'p',
          text: 'Ví dụ, mọi nguyên tử có 8 proton trong hạt nhân đều thuộc nguyên tố oxygen, dù số neutron của chúng là 8, 9 hay 10. Các nguyên tử của cùng một nguyên tố có tính chất hoá học giống nhau.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Số hiệu nguyên tử',
          text: 'Số đơn vị điện tích hạt nhân nguyên tử của một nguyên tố được gọi là số hiệu nguyên tử của nguyên tố đó, kí hiệu là $Z$. Trong nguyên tử, số hiệu nguyên tử $Z$ = số proton = số electron.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Số khối',
          text: 'Số khối của hạt nhân, kí hiệu là $A$, bằng tổng số proton ($Z$) và số neutron ($N$): $$A = Z + N$$',
        },
        {
          type: 'p',
          text: 'Số hiệu nguyên tử và số khối đặc trưng cho một nguyên tử. Người ta viết kí hiệu nguyên tử bằng cách đặt số khối ở phía trên, bên trái và số hiệu nguyên tử ở phía dưới, bên trái kí hiệu nguyên tố $\\mathrm{X}$:',
        },
        { type: 'tex', tex: '{}^{A}_{Z}\\mathrm{X}' },
        {
          type: 'table',
          caption: 'Đọc kí hiệu nguyên tử',
          head: ['Kí hiệu', '$Z$ (số p = số e)', '$A$', '$N = A - Z$'],
          rows: [
            ['${}^{23}_{11}\\mathrm{Na}$', '$11$', '$23$', '$12$'],
            ['${}^{35}_{17}\\mathrm{Cl}$', '$17$', '$35$', '$18$'],
            ['${}^{56}_{26}\\mathrm{Fe}$', '$26$', '$56$', '$30$'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Số proton quyết định nguyên tố, không phải số khối: ${}^{40}_{18}\\mathrm{Ar}$ và ${}^{40}_{20}\\mathrm{Ca}$ có cùng số khối $40$ nhưng là hai nguyên tố khác nhau.',
        },
      ],
    },
    {
      heading: 'Đồng vị',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng vị',
          text: 'Các đồng vị của cùng một nguyên tố hoá học là những nguyên tử có cùng số proton nhưng khác nhau về số neutron, do đó số khối $A$ của chúng khác nhau.',
        },
        {
          type: 'p',
          text: 'Ví dụ, nguyên tố hydrogen có ba đồng vị: ${}^{1}_{1}\\mathrm{H}$ (protium, không có neutron), ${}^{2}_{1}\\mathrm{H}$ (deuterium, kí hiệu D, có 1 neutron) và ${}^{3}_{1}\\mathrm{H}$ (tritium, kí hiệu T, có 2 neutron). Chọn một nguyên tố và một đồng vị để so sánh hạt nhân của chúng.',
        },
        { type: 'widget', name: 'dong-vi' },
        {
          type: 'p',
          text: 'Phần lớn các nguyên tố có nhiều đồng vị. Có đồng vị bền và đồng vị không bền (đồng vị phóng xạ, như ${}^{14}_{6}\\mathrm{C}$). Các đồng vị của một nguyên tố có cùng số electron nên có tính chất hoá học giống nhau; chúng khác nhau về một số tính chất vật lí như khối lượng.',
        },
      ],
    },
    {
      heading: 'Nguyên tử khối và nguyên tử khối trung bình',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử khối là khối lượng tương đối của nguyên tử, cho biết khối lượng của nguyên tử nặng gấp bao nhiêu lần $1$ amu. Khối lượng electron rất nhỏ, nên nguyên tử khối gần bằng số khối của hạt nhân.',
        },
        {
          type: 'p',
          text: 'Một nguyên tố thường là hỗn hợp của nhiều đồng vị với tỉ lệ phần trăm số nguyên tử xác định (đo được bằng phổ khối lượng). Vì vậy, nguyên tử khối của nguyên tố là nguyên tử khối trung bình của hỗn hợp các đồng vị đó.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tử khối trung bình',
          text: 'Nguyên tố $\\mathrm{X}$ có các đồng vị với nguyên tử khối $A_1, A_2, \\ldots$ chiếm $x_1\\%, x_2\\%, \\ldots$ số nguyên tử: $$\\overline{A}_{\\mathrm{X}} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2 + \\ldots}{100}$$ Trong tính toán, có thể coi nguyên tử khối của mỗi đồng vị bằng số khối của nó.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nguyên tử khối trung bình luôn nằm giữa số khối nhỏ nhất và lớn nhất, và lệch về phía đồng vị chiếm nhiều hơn. Ngược lại, biết $\\overline{A}$ của nguyên tố có hai đồng vị, ta tìm được phần trăm $x$ của đồng vị $A_1$ từ $\\overline{A} = \\dfrac{A_1 x + A_2 (100 - x)}{100}$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính nguyên tử khối trung bình',
    instruction:
      'Chọn một nguyên tố có hai đồng vị, kéo thanh trượt để đổi phần trăm số nguyên tử của đồng vị nhẹ. Các cột là phổ khối lượng; vạch đỏ cho biết $\\overline{A}$ nằm ở đâu giữa hai số khối. Bấm "Đặt tỉ lệ trong tự nhiên" để so sánh với nguyên tử khối trong bảng tuần hoàn.',
  },
  examples: [
    {
      problem:
        'Cho kí hiệu nguyên tử ${}^{39}_{19}\\mathrm{K}$. Xác định số proton, số electron, số neutron và số khối của nguyên tử potassium này.',
      steps: [
        'Số hiệu nguyên tử $Z = 19$, nên số proton $= 19$.',
        'Nguyên tử trung hoà điện nên số electron $=$ số proton $= 19$.',
        'Số khối $A = 39$, nên số neutron $N = A - Z = 39 - 19 = 20$.',
      ],
      answer: 'Nguyên tử có $19$ proton, $19$ electron, $20$ neutron và số khối $A = 39$.',
    },
    {
      problem:
        'Chlorine có hai đồng vị bền: ${}^{35}\\mathrm{Cl}$ chiếm $75{,}77\\%$ và ${}^{37}\\mathrm{Cl}$ chiếm $24{,}23\\%$ số nguyên tử. Tính nguyên tử khối trung bình của chlorine.',
      steps: [
        'Coi nguyên tử khối của mỗi đồng vị bằng số khối: $35$ và $37$.',
        'Áp dụng công thức: $\\overline{A}_{\\mathrm{Cl}} = \\dfrac{35 \\cdot 75{,}77 + 37 \\cdot 24{,}23}{100}$.',
        'Tính tử số: $35 \\cdot 75{,}77 = 2\\,651{,}95$ và $37 \\cdot 24{,}23 = 896{,}51$; tổng bằng $3\\,548{,}46$.',
        '$\\overline{A}_{\\mathrm{Cl}} = \\dfrac{3\\,548{,}46}{100} \\approx 35{,}48$.',
      ],
      answer: 'Nguyên tử khối trung bình của chlorine là khoảng $35{,}48$.',
    },
    {
      problem:
        'Copper có hai đồng vị ${}^{63}\\mathrm{Cu}$ và ${}^{65}\\mathrm{Cu}$; nguyên tử khối trung bình của copper là $63{,}546$. Tính phần trăm số nguyên tử của mỗi đồng vị.',
      steps: [
        'Gọi $x$ là phần trăm số nguyên tử ${}^{63}\\mathrm{Cu}$; khi đó ${}^{65}\\mathrm{Cu}$ chiếm $(100 - x)\\%$.',
        'Ta có $\\dfrac{63x + 65(100 - x)}{100} = 63{,}546$, tức $6\\,500 - 2x = 6\\,354{,}6$.',
        'Suy ra $2x = 145{,}4$, nên $x = 72{,}7$.',
      ],
      answer:
        '${}^{63}\\mathrm{Cu}$ chiếm $72{,}7\\%$ và ${}^{65}\\mathrm{Cu}$ chiếm $27{,}3\\%$ số nguyên tử.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tố hoá học là tập hợp các nguyên tử có cùng',
      options: ['số khối', 'số neutron', 'số proton', 'nguyên tử khối'],
      answer: 2,
      hints: ['Đại lượng nào quyết định điện tích hạt nhân?'],
      solution:
        'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân, tức là cùng số proton.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử ${}^{56}_{26}\\mathrm{Fe}$ có bao nhiêu neutron?',
      answer: 30,
      hints: ['Số trên là số khối $A$, số dưới là số hiệu nguyên tử $Z$.', 'Dùng $N = A - Z$.'],
      solution: '$N = A - Z = 56 - 26 = 30$ neutron.',
    },
    {
      type: 'number',
      prompt:
        'Một nguyên tử có $19$ proton và $20$ neutron trong hạt nhân. Số khối của nguyên tử này là bao nhiêu?',
      answer: 39,
      hints: ['Số khối bằng tổng số proton và số neutron.'],
      solution: '$A = Z + N = 19 + 20 = 39$.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử ${}^{27}_{13}\\mathrm{Al}$ có tổng số hạt proton, neutron và electron là bao nhiêu?',
      answer: 40,
      hints: [
        'Số proton bằng số electron bằng $Z$.',
        'Số neutron bằng $A - Z$; cộng cả ba loại hạt.',
      ],
      solution: 'Số p $=$ số e $= 13$, số n $= 27 - 13 = 14$. Tổng: $13 + 13 + 14 = 40$ hạt.',
    },
    {
      type: 'choice',
      prompt: 'Cặp nguyên tử nào sau đây là đồng vị của nhau?',
      options: [
        '${}^{40}_{18}\\mathrm{Ar}$ và ${}^{40}_{20}\\mathrm{Ca}$',
        '${}^{14}_{6}\\mathrm{C}$ và ${}^{14}_{7}\\mathrm{N}$',
        '${}^{16}_{8}\\mathrm{O}$ và ${}^{17}_{8}\\mathrm{O}$',
        '${}^{23}_{11}\\mathrm{Na}$ và ${}^{24}_{12}\\mathrm{Mg}$',
      ],
      answer: 2,
      hints: ['Đồng vị phải cùng số proton, tức cùng số ở phía dưới.'],
      solution:
        '${}^{16}_{8}\\mathrm{O}$ và ${}^{17}_{8}\\mathrm{O}$ cùng có $8$ proton nhưng có $8$ và $9$ neutron: đó là hai đồng vị của oxygen. Các cặp còn lại có số proton khác nhau nên là các nguyên tố khác nhau (dù có thể cùng số khối).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đồng vị của hydrogen với số neutron trong hạt nhân của nó.',
      left: [
        'Protium ${}^{1}_{1}\\mathrm{H}$',
        'Deuterium ${}^{2}_{1}\\mathrm{H}$',
        'Tritium ${}^{3}_{1}\\mathrm{H}$',
      ],
      right: ['Không có neutron', '$1$ neutron', '$2$ neutron'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Cả ba đều có $1$ proton; số neutron là $A - 1$.'],
      solution:
        'Protium: $1 - 1 = 0$ neutron; deuterium: $2 - 1 = 1$ neutron; tritium: $3 - 1 = 2$ neutron.',
    },
    {
      type: 'number',
      prompt:
        'Bromine có hai đồng vị: ${}^{79}\\mathrm{Br}$ chiếm $50{,}69\\%$ và ${}^{81}\\mathrm{Br}$ chiếm $49{,}31\\%$ số nguyên tử. Tính nguyên tử khối trung bình của bromine (làm tròn đến hàng phần trăm).',
      answer: 79.99,
      tolerance: 0.006,
      hints: [
        'Coi nguyên tử khối mỗi đồng vị bằng số khối.',
        '$\\overline{A} = \\dfrac{79 \\cdot 50{,}69 + 81 \\cdot 49{,}31}{100}$.',
      ],
      solution:
        '$\\overline{A}_{\\mathrm{Br}} = \\dfrac{79 \\cdot 50{,}69 + 81 \\cdot 49{,}31}{100} = \\dfrac{4\\,004{,}51 + 3\\,994{,}11}{100} = 79{,}9862 \\approx 79{,}99$.',
    },
    {
      type: 'number',
      prompt:
        'Phổ khối lượng của neon cho biết: ${}^{20}\\mathrm{Ne}$ chiếm $90{,}9\\%$, ${}^{21}\\mathrm{Ne}$ chiếm $0{,}3\\%$ và ${}^{22}\\mathrm{Ne}$ chiếm $8{,}8\\%$ số nguyên tử. Tính nguyên tử khối trung bình của neon (làm tròn đến hàng phần trăm).',
      answer: 20.18,
      tolerance: 0.006,
      hints: ['Với ba đồng vị, tử số có ba số hạng.'],
      solution:
        '$\\overline{A}_{\\mathrm{Ne}} = \\dfrac{20 \\cdot 90{,}9 + 21 \\cdot 0{,}3 + 22 \\cdot 8{,}8}{100} = \\dfrac{1\\,818 + 6{,}3 + 193{,}6}{100} = 20{,}179 \\approx 20{,}18$.',
    },
    {
      type: 'number',
      prompt:
        'Boron có hai đồng vị ${}^{10}\\mathrm{B}$ và ${}^{11}\\mathrm{B}$; nguyên tử khối trung bình của boron là $10{,}81$. Đồng vị ${}^{10}\\mathrm{B}$ chiếm bao nhiêu phần trăm số nguyên tử?',
      answer: 19,
      tolerance: 0.01,
      unit: '%',
      hints: [
        'Gọi $x$ là phần trăm của ${}^{10}\\mathrm{B}$; ${}^{11}\\mathrm{B}$ chiếm $(100 - x)\\%$.',
        'Giải $\\dfrac{10x + 11(100 - x)}{100} = 10{,}81$.',
      ],
      solution:
        '$10x + 1\\,100 - 11x = 1\\,081$, nên $x = 19$. Vậy ${}^{10}\\mathrm{B}$ chiếm $19\\%$, ${}^{11}\\mathrm{B}$ chiếm $81\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Hydrogen có hai đồng vị ${}^{1}\\mathrm{H}$, ${}^{2}\\mathrm{H}$; oxygen có ba đồng vị ${}^{16}\\mathrm{O}$, ${}^{17}\\mathrm{O}$, ${}^{18}\\mathrm{O}$. Có thể tạo ra bao nhiêu loại phân tử nước $\\mathrm{H_2O}$ khác nhau?',
      answer: 9,
      hints: [
        'Hai nguyên tử H trong phân tử có thể là ${}^{1}\\mathrm{H}{}^{1}\\mathrm{H}$, ${}^{1}\\mathrm{H}{}^{2}\\mathrm{H}$ hoặc ${}^{2}\\mathrm{H}{}^{2}\\mathrm{H}$.',
        'Mỗi cách chọn cặp H ghép với một đồng vị O.',
      ],
      solution:
        'Có $3$ cách chọn cặp nguyên tử H (${}^{1}\\mathrm{H}{}^{1}\\mathrm{H}$, ${}^{1}\\mathrm{H}{}^{2}\\mathrm{H}$, ${}^{2}\\mathrm{H}{}^{2}\\mathrm{H}$) và $3$ cách chọn O, nên có $3 \\cdot 3 = 9$ loại phân tử nước.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Các đồng vị của một nguyên tố có cùng số proton.',
        'Các đồng vị của một nguyên tố có cùng số khối.',
        'Nguyên tử khối trung bình của chlorine nằm giữa $35$ và $37$.',
        'Số hiệu nguyên tử bằng số electron trong nguyên tử.',
        'Hai nguyên tử có cùng số khối thì thuộc cùng một nguyên tố.',
      ],
      answers: [0, 2, 3],
      hints: [
        'Đồng vị khác nhau ở số neutron.',
        'Nhớ ví dụ ${}^{40}\\mathrm{Ar}$ và ${}^{40}\\mathrm{Ca}$.',
      ],
      solution:
        'Đúng: đồng vị cùng số proton; $\\overline{A}$ của chlorine $\\approx 35{,}48$ nằm giữa $35$ và $37$; $Z$ bằng số electron. Sai: đồng vị khác số khối; cùng số khối chưa chắc cùng nguyên tố (${}^{40}\\mathrm{Ar}$, ${}^{40}\\mathrm{Ca}$).',
    },
  ],
  takeaways: [
    'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton (cùng số đơn vị điện tích hạt nhân).',
    'Số hiệu nguyên tử $Z$ = số proton = số electron; số khối $A = Z + N$.',
    'Kí hiệu nguyên tử ${}^{A}_{Z}\\mathrm{X}$ cho biết số proton, electron và neutron ($N = A - Z$).',
    'Đồng vị là các nguyên tử cùng số proton, khác số neutron, nên khác số khối.',
    'Nguyên tử khối trung bình: $\\overline{A} = \\dfrac{A_1 x_1 + A_2 x_2 + \\ldots}{100}$, luôn lệch về phía đồng vị chiếm nhiều hơn.',
  ],
};
