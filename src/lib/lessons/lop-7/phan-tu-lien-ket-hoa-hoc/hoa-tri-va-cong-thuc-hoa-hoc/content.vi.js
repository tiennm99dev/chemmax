/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hoá trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Với hợp chất AxBy, quy tắc hoá trị a·x = b·y giúp xác định hoá trị và lập công thức hoá học; từ công thức tính được phần trăm khối lượng các nguyên tố.',
  intro:
    'Vì sao nước là $\\mathrm{H_2O}$ chứ không phải $\\mathrm{HO}$ hay $\\mathrm{H_3O}$, còn khí carbon dioxide lại là $\\mathrm{CO_2}$? Mỗi nguyên tử chỉ liên kết được với một số nhất định nguyên tử khác. Con số đó là hoá trị, và từ hoá trị ta tự viết được công thức hoá học của rất nhiều chất.',
  objectives: [
    'Trình bày được khái niệm hoá trị (cho chất cộng hoá trị); cách viết công thức hoá học.',
    'Viết được công thức hoá học của một số đơn chất và hợp chất đơn giản, thông dụng.',
    'Nêu được mối liên hệ giữa hoá trị của nguyên tố với công thức hoá học (quy tắc hoá trị).',
    'Tính được phần trăm khối lượng nguyên tố trong hợp chất khi biết công thức hoá học.',
    'Xác định được công thức hoá học của hợp chất dựa vào phần trăm khối lượng các nguyên tố và khối lượng phân tử.',
  ],
  sections: [
    {
      heading: 'Hoá trị',
      blocks: [
        {
          type: 'p',
          text: 'Trong các phân tử $\\mathrm{HCl}$, $\\mathrm{H_2O}$, $\\mathrm{NH_3}$, $\\mathrm{CH_4}$, mỗi nguyên tử H chỉ góp chung $1$ electron, tạo $1$ liên kết. Nguyên tử Cl tạo $1$ liên kết, O tạo $2$, N tạo $3$, C tạo $4$ liên kết với H. Các con số này cho biết khả năng liên kết của mỗi nguyên tử.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hoá trị',
          text: 'Hoá trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Trong hợp chất cộng hoá trị, hoá trị của nguyên tố bằng số electron mà nguyên tử của nguyên tố đó góp chung để tạo liên kết.',
        },
        {
          type: 'list',
          items: [
            'Hoá trị được ghi bằng chữ số La Mã: I, II, III, IV, …',
            'Hydrogen có hoá trị I, oxygen có hoá trị II; hai nguyên tố này thường được dùng làm mốc để xác định hoá trị của nguyên tố khác.',
            'Ví dụ: Cl có hoá trị I trong $\\mathrm{HCl}$, O có hoá trị II trong $\\mathrm{H_2O}$, N có hoá trị III trong $\\mathrm{NH_3}$, C có hoá trị IV trong $\\mathrm{CH_4}$.',
            'Một số nguyên tố có nhiều hoá trị, ví dụ Fe có hoá trị II hoặc III, S có hoá trị II, IV hoặc VI.',
          ],
        },
        {
          type: 'table',
          caption: 'Hoá trị của một số nguyên tố và nhóm nguyên tử thường gặp',
          head: ['Hoá trị', 'Nguyên tố, nhóm nguyên tử'],
          rows: [
            ['I', 'H, Na, K, Ag, Cl; nhóm OH, nhóm $\\mathrm{NO_3}$'],
            ['II', 'O, Mg, Ca, Ba, Zn; nhóm $\\mathrm{SO_4}$, nhóm $\\mathrm{CO_3}$'],
            ['III', 'Al; nhóm $\\mathrm{PO_4}$'],
            [
              'Nhiều hoá trị',
              'Cu (I, II), Fe (II, III), C (II, IV), S (II, IV, VI), P (III, V), N (I đến V)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Quy tắc hoá trị',
      blocks: [
        {
          type: 'p',
          text: 'Xét hợp chất $\\mathrm{Al_2O_3}$: Al có hoá trị III, O có hoá trị II. Tích chỉ số và hoá trị của Al là $2 \\cdot 3 = 6$, của O là $3 \\cdot 2 = 6$. Hai tích bằng nhau. Điều này đúng với các hợp chất hai nguyên tố thường gặp.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc hoá trị',
          text: 'Trong phân tử hợp chất hai nguyên tố, tích của chỉ số và hoá trị của nguyên tố này bằng tích của chỉ số và hoá trị của nguyên tố kia. Với hợp chất $\\mathrm{A}_x\\mathrm{B}_y$, A có hoá trị $a$, B có hoá trị $b$:',
        },
        { type: 'tex', tex: 'a \\cdot x = b \\cdot y' },
        {
          type: 'callout',
          tone: 'note',
          text: 'Quy tắc vẫn đúng khi B là một nhóm nguyên tử, ví dụ trong $\\mathrm{Ca(OH)_2}$: $\\text{II} \\cdot 1 = \\text{I} \\cdot 2$. Khi chỉ số của nhóm lớn hơn $1$, nhóm được đặt trong dấu ngoặc đơn.',
        },
        {
          type: 'p',
          text: 'Biết hoá trị của một nguyên tố, ta tìm được hoá trị của nguyên tố kia. Ví dụ, trong $\\mathrm{SO_2}$: $a \\cdot 1 = \\text{II} \\cdot 2$ nên $a = 4$, S có hoá trị IV.',
        },
      ],
    },
    {
      heading: 'Công thức hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công thức hoá học',
          text: 'Công thức hoá học dùng để biểu diễn chất, gồm kí hiệu hoá học của các nguyên tố và chỉ số ghi ở chân bên phải mỗi kí hiệu (chỉ số bằng $1$ thì không ghi).',
        },
        {
          type: 'list',
          items: [
            'Đơn chất kim loại và một số phi kim (C, S, P): công thức là kí hiệu hoá học, ví dụ Cu, Fe, C, S.',
            'Đơn chất phi kim có phân tử gồm nhiều nguyên tử: kí hiệu kèm chỉ số, ví dụ $\\mathrm{H_2}$, $\\mathrm{O_2}$, $\\mathrm{N_2}$, $\\mathrm{Cl_2}$, $\\mathrm{O_3}$.',
            'Hợp chất: kí hiệu các nguyên tố kèm chỉ số, ví dụ $\\mathrm{H_2O}$, $\\mathrm{NaCl}$, $\\mathrm{CaCO_3}$.',
          ],
        },
        {
          type: 'p',
          text: 'Công thức hoá học cho biết: các nguyên tố tạo nên chất, số nguyên tử của mỗi nguyên tố trong một phân tử và khối lượng phân tử của chất. Ví dụ, $\\mathrm{H_2SO_4}$ được tạo nên từ H, S, O; một phân tử có $2$ nguyên tử H, $1$ nguyên tử S, $4$ nguyên tử O; khối lượng phân tử là $2 \\cdot 1 + 32 + 4 \\cdot 16 = 98$ amu.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Lập công thức theo hoá trị',
          text: 'Viết công thức dạng $\\mathrm{A}_x\\mathrm{B}_y$. Theo quy tắc hoá trị $a \\cdot x = b \\cdot y$, nên $x : y = b : a$. Lấy $x$, $y$ là cặp số nguyên dương tối giản của tỉ lệ đó.',
        },
      ],
    },
    {
      heading: 'Phần trăm khối lượng nguyên tố trong hợp chất',
      blocks: [
        {
          type: 'p',
          text: 'Với hợp chất $\\mathrm{A}_x\\mathrm{B}_y$, phần trăm khối lượng của nguyên tố A bằng khối lượng của $x$ nguyên tử A chia cho khối lượng phân tử, nhân $100\\%$:',
        },
        {
          type: 'tex',
          tex: '\\%\\mathrm{A} = \\dfrac{\\text{KLNT}(\\mathrm{A}) \\cdot x}{\\text{KLPT}(\\mathrm{A}_x\\mathrm{B}_y)} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Trong đó KLNT là khối lượng nguyên tử, KLPT là khối lượng phân tử (cùng đơn vị amu). Tổng phần trăm khối lượng các nguyên tố trong hợp chất bằng $100\\%$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tìm công thức từ phần trăm khối lượng',
          text: 'Biết khối lượng phân tử và phần trăm khối lượng các nguyên tố, ta tính khối lượng của mỗi nguyên tố trong một phân tử, rồi chia cho khối lượng nguyên tử để được số nguyên tử (chỉ số).',
        },
      ],
    },
  ],
  explore: {
    title: 'Công cụ lập công thức hoá học',
    instruction:
      'Chọn nguyên tố A và nguyên tố hoặc nhóm nguyên tử B, rồi chọn hoá trị của mỗi bên theo bảng hoá trị. Thay đổi chỉ số $x$, $y$ cho đến khi $a \\cdot x = b \\cdot y$ và các chỉ số tối giản. Khi công thức đúng, công cụ tính khối lượng phân tử và phần trăm khối lượng từng nguyên tố.',
  },
  examples: [
    {
      problem: 'Xác định hoá trị của Fe trong hợp chất $\\mathrm{Fe_2O_3}$, biết O có hoá trị II.',
      steps: [
        'Gọi hoá trị của Fe là $a$. Hợp chất có dạng $\\mathrm{Fe_2O_3}$: $x = 2$, $y = 3$.',
        'Theo quy tắc hoá trị: $a \\cdot 2 = \\text{II} \\cdot 3 = 6$.',
        'Suy ra $a = 6 : 2 = 3$.',
      ],
      answer: 'Trong $\\mathrm{Fe_2O_3}$, Fe có hoá trị III.',
    },
    {
      problem:
        'Lập công thức hoá học của hợp chất tạo bởi aluminium (hoá trị III) và oxygen (hoá trị II); của hợp chất tạo bởi calcium (hoá trị II) và nhóm OH (hoá trị I).',
      steps: [
        'Công thức $\\mathrm{Al}_x\\mathrm{O}_y$: $\\text{III} \\cdot x = \\text{II} \\cdot y$, nên $x : y = 2 : 3$. Lấy $x = 2$, $y = 3$: $\\mathrm{Al_2O_3}$.',
        'Công thức $\\mathrm{Ca}_x\\mathrm{(OH)}_y$: $\\text{II} \\cdot x = \\text{I} \\cdot y$, nên $x : y = 1 : 2$. Lấy $x = 1$, $y = 2$.',
        'Nhóm OH có chỉ số $2$ nên đặt trong ngoặc đơn: $\\mathrm{Ca(OH)_2}$.',
      ],
      answer: '$\\mathrm{Al_2O_3}$ và $\\mathrm{Ca(OH)_2}$.',
    },
    {
      problem:
        'Tính phần trăm khối lượng các nguyên tố trong $\\mathrm{Fe_2O_3}$ (Fe = 56, O = 16).',
      steps: [
        'Khối lượng phân tử: $2 \\cdot 56 + 3 \\cdot 16 = 112 + 48 = 160$ amu.',
        '$\\%\\mathrm{Fe} = \\dfrac{112}{160} \\cdot 100\\% = 70\\%$.',
        '$\\%\\mathrm{O} = 100\\% - 70\\% = 30\\%$ (hoặc $\\dfrac{48}{160} \\cdot 100\\% = 30\\%$).',
      ],
      answer: 'Trong $\\mathrm{Fe_2O_3}$: $70\\%$ Fe và $30\\%$ O về khối lượng.',
    },
    {
      problem:
        'Hợp chất X gồm hai nguyên tố C và H, trong đó C chiếm $75\\%$ khối lượng. Khối lượng phân tử của X là $16$ amu. Xác định công thức hoá học của X.',
      steps: [
        'Khối lượng C trong một phân tử: $16 \\cdot 75\\% = 12$ amu, ứng với $12 : 12 = 1$ nguyên tử C.',
        'Khối lượng H trong một phân tử: $16 - 12 = 4$ amu, ứng với $4 : 1 = 4$ nguyên tử H.',
      ],
      answer: 'Công thức hoá học của X là $\\mathrm{CH_4}$ (methane).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Với hợp chất $\\mathrm{A}_x\\mathrm{B}_y$ (A hoá trị $a$, B hoá trị $b$), quy tắc hoá trị được viết là',
      options: [
        '$a \\cdot b = x \\cdot y$',
        '$a \\cdot x = b \\cdot y$',
        '$a \\cdot y = b \\cdot x$',
        '$a + x = b + y$',
      ],
      answer: 1,
      hints: ['Mỗi nguyên tố: nhân chỉ số của nó với hoá trị của chính nó.'],
      solution:
        'Tích chỉ số và hoá trị của nguyên tố này bằng tích chỉ số và hoá trị của nguyên tố kia: $a \\cdot x = b \\cdot y$.',
    },
    {
      type: 'choice',
      prompt: 'Hoá trị của N trong ammonia $\\mathrm{NH_3}$ là',
      options: ['I', 'II', 'III', 'IV'],
      answer: 2,
      hints: ['H có hoá trị I; trong $\\mathrm{NH_3}$, $x = 1$ và $y = 3$.'],
      solution: '$a \\cdot 1 = \\text{I} \\cdot 3$ nên $a = 3$: N có hoá trị III.',
    },
    {
      type: 'choice',
      prompt: 'Hoá trị của S trong $\\mathrm{SO_3}$ là',
      options: ['II', 'III', 'IV', 'VI'],
      answer: 3,
      hints: ['O có hoá trị II và có $3$ nguyên tử O.'],
      solution: '$a \\cdot 1 = \\text{II} \\cdot 3 = 6$ nên S có hoá trị VI.',
    },
    {
      type: 'match',
      prompt:
        'Nối mỗi hợp chất với hoá trị của nguyên tố đứng đầu công thức (O hoá trị II, Cl hoá trị I).',
      left: ['$\\mathrm{Cu_2O}$', '$\\mathrm{CuO}$', '$\\mathrm{FeCl_3}$', '$\\mathrm{CO_2}$'],
      right: ['III', 'I', 'IV', 'II'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Dùng $a = \\dfrac{b \\cdot y}{x}$ cho từng công thức.'],
      solution:
        '$\\mathrm{Cu_2O}$: $a = 2 \\cdot 1 : 2 = 1$ (I). $\\mathrm{CuO}$: $a = 2$ (II). $\\mathrm{FeCl_3}$: $a = 1 \\cdot 3 = 3$ (III). $\\mathrm{CO_2}$: $a = 2 \\cdot 2 = 4$ (IV).',
    },
    {
      type: 'choice',
      prompt: 'Công thức hoá học đúng của hợp chất tạo bởi aluminium (III) và chlorine (I) là',
      options: [
        '$\\mathrm{AlCl}$',
        '$\\mathrm{AlCl_2}$',
        '$\\mathrm{AlCl_3}$',
        '$\\mathrm{Al_3Cl}$',
      ],
      answer: 2,
      hints: ['$x : y = b : a$.'],
      solution:
        '$\\text{III} \\cdot x = \\text{I} \\cdot y$ nên $x : y = 1 : 3$: công thức là $\\mathrm{AlCl_3}$.',
    },
    {
      type: 'text',
      prompt:
        'Lập công thức hoá học của hợp chất tạo bởi calcium (hoá trị II) và nhóm $\\mathrm{PO_4}$ (hoá trị III). Viết chỉ số bằng chữ số thường, ví dụ Al2(SO4)3.',
      accept: ['Ca3(PO4)2', 'Ca₃(PO₄)₂'],
      hints: [
        '$x : y = \\text{III} : \\text{II}$.',
        'Nhóm $\\mathrm{PO_4}$ có chỉ số lớn hơn $1$ thì đặt trong ngoặc đơn.',
      ],
      solution:
        '$\\text{II} \\cdot x = \\text{III} \\cdot y$ nên $x : y = 3 : 2$. Công thức: $\\mathrm{Ca_3(PO_4)_2}$.',
    },
    {
      type: 'text',
      prompt:
        'Lập công thức hoá học của hợp chất tạo bởi barium (hoá trị II) và nhóm $\\mathrm{NO_3}$ (hoá trị I). Viết chỉ số bằng chữ số thường.',
      accept: ['Ba(NO3)2', 'Ba(NO₃)₂'],
      hints: ['$x : y = \\text{I} : \\text{II} = 1 : 2$.'],
      solution:
        '$\\text{II} \\cdot x = \\text{I} \\cdot y$ nên $x = 1$, $y = 2$: $\\mathrm{Ba(NO_3)_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng phân tử của calcium carbonate $\\mathrm{CaCO_3}$ (Ca = 40, C = 12, O = 16).',
      answer: 100,
      unit: 'amu',
      hints: ['Một phân tử có $1$ Ca, $1$ C và $3$ O.'],
      solution: '$40 + 12 + 3 \\cdot 16 = 100$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng của Cu trong copper(II) oxide $\\mathrm{CuO}$ (Cu = 64, O = 16), theo $\\%$.',
      answer: 80,
      hints: ['Khối lượng phân tử $\\mathrm{CuO}$ là $64 + 16$.'],
      solution: 'KLPT $= 80$ amu. $\\%\\mathrm{Cu} = \\dfrac{64}{80} \\cdot 100\\% = 80\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng của C trong carbon dioxide $\\mathrm{CO_2}$, theo $\\%$, làm tròn đến hàng phần trăm.',
      answer: 27.27,
      tolerance: 0.01,
      hints: ['KLPT của $\\mathrm{CO_2}$ là $12 + 2 \\cdot 16 = 44$ amu.'],
      solution: '$\\%\\mathrm{C} = \\dfrac{12}{44} \\cdot 100\\% \\approx 27{,}27\\%$.',
    },
    {
      type: 'text',
      prompt:
        'Một hợp chất gồm S và O, trong đó S chiếm $50\\%$ khối lượng; khối lượng phân tử là $64$ amu. Viết công thức hoá học của hợp chất (chỉ số viết bằng chữ số thường).',
      accept: ['SO2', 'SO₂'],
      hints: [
        'Khối lượng S trong một phân tử là $64 \\cdot 50\\%$.',
        'Chia khối lượng mỗi nguyên tố cho khối lượng nguyên tử (S = 32, O = 16).',
      ],
      solution:
        'S: $64 \\cdot 50\\% = 32$ amu, ứng với $1$ nguyên tử. O: $64 - 32 = 32$ amu, ứng với $32 : 16 = 2$ nguyên tử. Công thức: $\\mathrm{SO_2}$.',
    },
  ],
  takeaways: [
    'Hoá trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác, ghi bằng số La Mã; H hoá trị I, O hoá trị II.',
    'Quy tắc hoá trị cho hợp chất $\\mathrm{A}_x\\mathrm{B}_y$: $a \\cdot x = b \\cdot y$; dùng để tìm hoá trị hoặc lập công thức ($x : y = b : a$, tối giản).',
    'Công thức hoá học cho biết các nguyên tố tạo nên chất, số nguyên tử mỗi nguyên tố trong phân tử và khối lượng phân tử.',
    '$\\%\\mathrm{A} = \\dfrac{\\text{KLNT}(\\mathrm{A}) \\cdot x}{\\text{KLPT}} \\cdot 100\\%$; từ phần trăm khối lượng và khối lượng phân tử tìm được số nguyên tử mỗi nguyên tố.',
  ],
};
