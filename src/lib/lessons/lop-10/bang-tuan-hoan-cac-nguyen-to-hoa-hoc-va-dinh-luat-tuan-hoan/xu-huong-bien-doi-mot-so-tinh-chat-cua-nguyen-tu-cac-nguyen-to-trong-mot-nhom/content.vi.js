/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trong một chu kì, bán kính nguyên tử giảm, độ âm điện tăng, tính kim loại giảm và tính phi kim tăng; trong một nhóm A thì ngược lại, vì cấu hình electron lớp ngoài cùng lặp lại tuần hoàn.',
  intro:
    'Lithium, sodium và potassium cùng phản ứng với nước, nhưng potassium phản ứng mãnh liệt nhất. Fluorine hút electron mạnh hơn mọi nguyên tố khác. Trong bảng tuần hoàn, những tính chất như vậy không thay đổi ngẫu nhiên mà theo những xu hướng rõ ràng khi đi theo một hàng hay một cột. Bài này tìm hiểu các xu hướng đó và nguyên nhân của chúng.',
  objectives: [
    'Giải thích được sự giống nhau về tính chất hoá học của các nguyên tố trong cùng một nhóm A dựa vào cấu hình electron lớp ngoài cùng.',
    'Giải thích được xu hướng biến đổi bán kính nguyên tử trong một chu kì, trong một nhóm A.',
    'Nêu được khái niệm độ âm điện và xu hướng biến đổi độ âm điện trong một chu kì, trong một nhóm A.',
    'Nêu được khái niệm tính kim loại, tính phi kim và xu hướng biến đổi của chúng trong một chu kì, trong một nhóm A.',
  ],
  sections: [
    {
      heading: 'Cấu hình electron lớp ngoài cùng của nguyên tử các nguyên tố nhóm A',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm A gồm các nguyên tố s và p. Nguyên tử các nguyên tố trong cùng một nhóm A có cùng số electron lớp ngoài cùng (bằng số thứ tự nhóm, trừ He), nên có tính chất hoá học tương tự nhau.',
        },
        {
          type: 'table',
          caption: 'Cấu hình electron lớp ngoài cùng của nhóm A ($n$ là số thứ tự chu kì)',
          head: ['Nhóm', 'Lớp ngoài cùng', 'Ví dụ'],
          rows: [
            ['IA', '$\\mathrm{ns^1}$', 'Li, Na, K'],
            ['IIA', '$\\mathrm{ns^2}$', 'Be, Mg, Ca'],
            ['IIIA', '$\\mathrm{ns^2np^1}$', 'B, Al, Ga'],
            ['IVA', '$\\mathrm{ns^2np^2}$', 'C, Si, Ge'],
            ['VA', '$\\mathrm{ns^2np^3}$', 'N, P, As'],
            ['VIA', '$\\mathrm{ns^2np^4}$', 'O, S, Se'],
            ['VIIA', '$\\mathrm{ns^2np^5}$', 'F, Cl, Br'],
            ['VIIIA', '$\\mathrm{ns^2np^6}$', 'Ne, Ar, Kr (He: $\\mathrm{1s^2}$)'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Khi điện tích hạt nhân tăng dần, cấu hình electron lớp ngoài cùng của nguyên tử các nguyên tố được lặp đi lặp lại một cách tuần hoàn. Đó là nguyên nhân của sự biến đổi tuần hoàn tính chất của các nguyên tố.',
        },
      ],
    },
    {
      heading: 'Bán kính nguyên tử',
      blocks: [
        {
          type: 'p',
          text: 'Bán kính nguyên tử phụ thuộc vào lực hút giữa hạt nhân và các electron lớp ngoài cùng: lực hút càng mạnh thì bán kính càng nhỏ. Lực hút này tăng khi điện tích hạt nhân tăng và giảm khi electron lớp ngoài cùng ở xa hạt nhân (số lớp electron nhiều hơn).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xu hướng biến đổi bán kính nguyên tử',
          text: 'Trong một chu kì, theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử có xu hướng giảm (số lớp electron không đổi, điện tích hạt nhân tăng). Trong một nhóm A, theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử có xu hướng tăng (số lớp electron tăng).',
        },
        {
          type: 'p',
          text: 'Bán kính nguyên tử ảnh hưởng tới khả năng nhường electron. Năng lượng ion hoá thứ nhất ($I_1$) của nguyên tử là năng lượng tối thiểu cần để tách electron thứ nhất ra khỏi nguyên tử ở thể khí, trạng thái cơ bản; đơn vị là kJ/mol. Nguyên tử có bán kính càng lớn thì electron lớp ngoài cùng càng dễ bị tách ra, $I_1$ càng nhỏ.',
        },
      ],
    },
    {
      heading: 'Độ âm điện',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Độ âm điện',
          text: 'Độ âm điện (kí hiệu $\\chi$) của một nguyên tử đặc trưng cho khả năng hút electron của nguyên tử đó khi tạo thành liên kết hoá học. Bảng tuần hoàn dùng thang độ âm điện của Pauling: fluorine có độ âm điện lớn nhất ($3{,}98$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xu hướng biến đổi độ âm điện',
          text: 'Trong một chu kì, theo chiều tăng của điện tích hạt nhân, độ âm điện có xu hướng tăng. Trong một nhóm A, theo chiều tăng của điện tích hạt nhân, độ âm điện có xu hướng giảm.',
        },
        {
          type: 'table',
          caption: 'Độ âm điện (thang Pauling) của một số nguyên tố',
          head: ['Nhóm', 'Chu kì 2', 'Chu kì 3'],
          rows: [
            ['IA', 'Li $0{,}98$', 'Na $0{,}93$'],
            ['IIA', 'Be $1{,}57$', 'Mg $1{,}31$'],
            ['IIIA', 'B $2{,}04$', 'Al $1{,}61$'],
            ['IVA', 'C $2{,}55$', 'Si $1{,}90$'],
            ['VA', 'N $3{,}04$', 'P $2{,}19$'],
            ['VIA', 'O $3{,}44$', 'S $2{,}58$'],
            ['VIIA', 'F $3{,}98$', 'Cl $3{,}16$'],
          ],
        },
        {
          type: 'p',
          text: 'Nguyên tử có độ âm điện nhỏ dễ nhường electron; nguyên tử có độ âm điện lớn dễ nhận electron.',
        },
      ],
    },
    {
      heading: 'Tính kim loại và tính phi kim',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tính kim loại, tính phi kim',
          text: 'Tính kim loại là tính chất của một nguyên tố mà nguyên tử dễ nhường electron để trở thành ion dương, ví dụ $\\mathrm{Na \\rightarrow Na^+ + 1e}$. Tính phi kim là tính chất của một nguyên tố mà nguyên tử dễ nhận electron để trở thành ion âm, ví dụ $\\mathrm{F + 1e \\rightarrow F^-}$. Nguyên tử càng dễ nhường electron thì tính kim loại càng mạnh; càng dễ nhận electron thì tính phi kim càng mạnh.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xu hướng biến đổi tính kim loại, tính phi kim',
          text: 'Trong một chu kì, theo chiều tăng của điện tích hạt nhân, tính kim loại giảm dần, tính phi kim tăng dần. Trong một nhóm A, theo chiều tăng của điện tích hạt nhân, tính kim loại tăng dần, tính phi kim giảm dần.',
        },
        {
          type: 'table',
          caption: 'Tóm tắt xu hướng theo chiều tăng của điện tích hạt nhân',
          head: ['Tính chất', 'Trong một chu kì', 'Trong một nhóm A'],
          rows: [
            ['Bán kính nguyên tử', 'giảm', 'tăng'],
            ['Độ âm điện', 'tăng', 'giảm'],
            ['Tính kim loại', 'giảm', 'tăng'],
            ['Tính phi kim', 'tăng', 'giảm'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Vì vậy, các kim loại mạnh nhất nằm ở góc dưới bên trái bảng tuần hoàn (như caesium), phi kim mạnh nhất nằm ở góc trên bên phải (fluorine, không kể khí hiếm). Đây là các xu hướng chung; số liệu thực đôi chỗ lệch nhẹ, như độ âm điện của Ga lớn hơn của Al.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ nhiệt các nguyên tố nhóm A',
    instruction:
      'Chọn tính chất (bán kính, độ âm điện hay năng lượng ion hoá) và chiều xem (trong nhóm hay trong chu kì), rồi bấm vào một nguyên tố. Biểu đồ cột vẽ giá trị của các nguyên tố cùng cột hoặc cùng hàng với nó, kèm câu nhận xét và lời giải thích. Số liệu bán kính là bán kính tính theo lí thuyết, dùng để so sánh.',
  },
  examples: [
    {
      problem:
        'Dựa vào bảng tuần hoàn, so sánh và giải thích bán kính nguyên tử của: a) lithium ($Z = 3$) và potassium ($Z = 19$); b) calcium ($Z = 20$) và selenium ($Z = 34$).',
      steps: [
        'a) Li ($\\mathrm{[He]2s^1}$) và K ($\\mathrm{[Ar]4s^1}$) cùng thuộc nhóm IA. Nguyên tử K có $4$ lớp electron, Li chỉ có $2$ lớp, nên electron lớp ngoài cùng của K ở xa hạt nhân hơn và bị hút yếu hơn.',
        'Vậy bán kính nguyên tử K lớn hơn Li.',
        'b) Ca ($\\mathrm{[Ar]4s^2}$) và Se ($\\mathrm{[Ar]3d^{10}4s^24p^4}$) cùng thuộc chu kì 4, cùng có $4$ lớp electron. Điện tích hạt nhân của Se ($+34$) lớn hơn của Ca ($+20$), nên Se hút electron lớp ngoài cùng mạnh hơn.',
        'Vậy bán kính nguyên tử Ca lớn hơn Se.',
      ],
      answer: 'a) $r_{\\mathrm{K}} > r_{\\mathrm{Li}}$; b) $r_{\\mathrm{Ca}} > r_{\\mathrm{Se}}$.',
    },
    {
      problem:
        'Sắp xếp các nguyên tố Na ($Z = 11$), Mg ($Z = 12$) và K ($Z = 19$) theo chiều tính kim loại tăng dần.',
      steps: [
        'Na và Mg cùng chu kì 3; trong một chu kì, tính kim loại giảm khi $Z$ tăng, nên Mg yếu hơn Na.',
        'Na và K cùng nhóm IA; trong một nhóm A, tính kim loại tăng khi $Z$ tăng, nên K mạnh hơn Na.',
        'Ghép lại: Mg < Na < K.',
      ],
      answer: 'Tính kim loại tăng dần: Mg, Na, K.',
    },
    {
      problem: 'Sắp xếp các nguyên tố N, O, P theo chiều độ âm điện tăng dần.',
      steps: [
        'N ($Z = 7$) và O ($Z = 8$) cùng chu kì 2: độ âm điện tăng theo chiều tăng $Z$, nên $\\chi_{\\mathrm{N}} < \\chi_{\\mathrm{O}}$.',
        'N và P ($Z = 15$) cùng nhóm VA: độ âm điện giảm theo chiều tăng $Z$, nên $\\chi_{\\mathrm{P}} < \\chi_{\\mathrm{N}}$.',
        'Vậy $\\chi_{\\mathrm{P}} < \\chi_{\\mathrm{N}} < \\chi_{\\mathrm{O}}$ (theo thang Pauling: $2{,}19 < 3{,}04 < 3{,}44$).',
      ],
      answer: 'Độ âm điện tăng dần: P, N, O.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Trong nhóm IA, theo chiều từ lithium đến caesium (điện tích hạt nhân tăng), bán kính nguyên tử',
      options: ['giảm dần', 'tăng dần', 'không thay đổi', 'tăng rồi giảm'],
      answer: 1,
      hints: ['Đi xuống trong một nhóm, số lớp electron thay đổi thế nào?'],
      solution:
        'Đi xuống trong nhóm A, số lớp electron tăng nên electron lớp ngoài cùng ở xa hạt nhân hơn: bán kính nguyên tử tăng dần.',
    },
    {
      type: 'choice',
      prompt: 'So sánh bán kính nguyên tử sodium ($Z = 11$) và chlorine ($Z = 17$).',
      options: [
        'Na lớn hơn Cl',
        'Cl lớn hơn Na',
        'Bằng nhau vì cùng có 3 lớp electron',
        'Không so sánh được',
      ],
      answer: 0,
      hints: ['Na và Cl cùng thuộc chu kì 3.', 'Điện tích hạt nhân nào hút electron mạnh hơn?'],
      solution:
        'Na và Cl cùng chu kì 3, cùng có $3$ lớp electron. Điện tích hạt nhân của Cl lớn hơn nên hút electron lớp ngoài cùng mạnh hơn: bán kính Cl nhỏ hơn Na.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các nguyên tử sau theo chiều bán kính tăng dần.',
      items: ['N', 'O', 'F', 'P'],
      answer: [2, 1, 0, 3],
      hints: [
        'N, O, F cùng chu kì 2: bán kính giảm từ N đến F.',
        'P ở chu kì 3, có nhiều lớp electron hơn.',
      ],
      solution:
        'Trong chu kì 2, bán kính giảm theo chiều N > O > F. P cùng nhóm VA với N nhưng có $3$ lớp electron nên lớn hơn N. Thứ tự tăng dần: F < O < N < P.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các nguyên tố sau theo chiều độ âm điện tăng dần.',
      items: ['Si', 'Na', 'Al', 'Mg'],
      answer: [1, 3, 2, 0],
      hints: [
        'Cả bốn nguyên tố cùng thuộc chu kì 3.',
        'Trong một chu kì, độ âm điện tăng theo $Z$.',
      ],
      solution:
        'Na ($Z = 11$), Mg ($12$), Al ($13$), Si ($14$) cùng chu kì 3, độ âm điện tăng theo $Z$: Na ($0{,}93$) < Mg ($1{,}31$) < Al ($1{,}61$) < Si ($1{,}90$).',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố nào có độ âm điện lớn nhất?',
      options: ['Cl', 'O', 'F', 'N'],
      answer: 2,
      hints: ['Độ âm điện lớn nhất ở góc trên bên phải bảng (không kể khí hiếm).'],
      solution:
        'Fluorine ở chu kì 2, nhóm VIIA: có độ âm điện lớn nhất ($3{,}98$). O có $3{,}44$, Cl có $3{,}16$, N có $3{,}04$.',
    },
    {
      type: 'choice',
      prompt: 'Trong các nguyên tố Na, Mg, Al, K, nguyên tố có tính kim loại mạnh nhất là',
      options: ['Na', 'Mg', 'Al', 'K'],
      answer: 3,
      hints: [
        'Trong chu kì 3, tính kim loại giảm từ Na đến Al.',
        'So sánh Na với K, cùng nhóm IA.',
      ],
      solution:
        'Trong chu kì 3: Na > Mg > Al về tính kim loại. K cùng nhóm IA với Na nhưng ở chu kì 4, nên tính kim loại mạnh hơn Na. Vậy K mạnh nhất.',
    },
    {
      type: 'choice',
      prompt: 'Trong các nguyên tố P, S, Cl, Br, nguyên tố có tính phi kim mạnh nhất là',
      options: ['P', 'S', 'Cl', 'Br'],
      answer: 2,
      hints: ['P, S, Cl cùng chu kì 3; Cl và Br cùng nhóm VIIA.'],
      solution:
        'Trong chu kì 3, tính phi kim tăng: P < S < Cl. Trong nhóm VIIA, tính phi kim giảm từ Cl xuống Br. Vậy Cl mạnh nhất.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao bán kính nguyên tử calcium ($Z = 20$) lớn hơn bán kính nguyên tử selenium ($Z = 34$)?',
      options: [
        'Ca có nhiều lớp electron hơn Se.',
        'Hai nguyên tử cùng có 4 lớp electron, nhưng điện tích hạt nhân của Se lớn hơn nên hút electron lớp ngoài cùng mạnh hơn.',
        'Ca có độ âm điện lớn hơn Se.',
        'Se là phi kim nên không có bán kính.',
      ],
      answer: 1,
      hints: ['Ca và Se cùng thuộc chu kì nào?'],
      solution:
        'Ca và Se cùng chu kì 4, cùng có $4$ lớp electron. Điện tích hạt nhân của Se ($+34$) lớn hơn Ca ($+20$), lực hút electron lớp ngoài cùng mạnh hơn, nên bán kính Se nhỏ hơn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng (theo chiều tăng của điện tích hạt nhân).',
      options: [
        'Trong một chu kì, độ âm điện có xu hướng tăng.',
        'Trong một nhóm A, tính phi kim tăng dần.',
        'Trong một chu kì, tính kim loại giảm dần.',
        'Trong một nhóm A, độ âm điện có xu hướng giảm.',
        'Các nguyên tố cùng nhóm A có cùng số lớp electron.',
      ],
      answers: [0, 2, 3],
      hints: [
        'Tính phi kim và độ âm điện biến đổi cùng chiều.',
        'Cùng số lớp electron là cùng chu kì.',
      ],
      solution:
        'Đúng: độ âm điện tăng trong chu kì, giảm trong nhóm A; tính kim loại giảm trong chu kì. Sai: trong nhóm A, tính phi kim giảm dần; các nguyên tố cùng nhóm A có cùng số electron lớp ngoài cùng, còn cùng số lớp electron là cùng chu kì.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tử nào dễ nhường electron nhất (năng lượng ion hoá thứ nhất nhỏ nhất)?',
      options: ['Li', 'Na', 'K', 'Be'],
      answer: 2,
      hints: ['Bán kính càng lớn, electron lớp ngoài cùng càng dễ bị tách ra.'],
      solution:
        'Trong nhóm IA, bán kính tăng từ Li đến K nên K dễ nhường electron nhất; Be ở cùng chu kì 2 với Li nhưng có điện tích hạt nhân lớn hơn, khó nhường electron hơn Li. Vậy K có $I_1$ nhỏ nhất (khoảng $419$ kJ/mol).',
    },
  ],
  takeaways: [
    'Các nguyên tố cùng nhóm A có cùng số electron lớp ngoài cùng nên có tính chất hoá học tương tự; cấu hình lớp ngoài cùng lặp lại tuần hoàn là nguyên nhân của sự biến đổi tuần hoàn.',
    'Bán kính nguyên tử: giảm trong một chu kì (điện tích hạt nhân tăng, số lớp không đổi), tăng trong một nhóm A (số lớp electron tăng).',
    'Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử khi tạo liên kết: tăng trong một chu kì, giảm trong một nhóm A; F có độ âm điện lớn nhất.',
    'Tính kim loại (dễ nhường electron) giảm trong chu kì, tăng trong nhóm A; tính phi kim (dễ nhận electron) tăng trong chu kì, giảm trong nhóm A.',
  ],
};
