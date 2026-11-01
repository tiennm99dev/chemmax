/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trong chu kì 3, hoá trị cao nhất với oxygen tăng từ I (Na) đến VII (Cl); oxide và hydroxide cao nhất chuyển dần từ base mạnh, qua lưỡng tính (Al), đến acid rất mạnh.',
  intro:
    'Sodium oxide tan trong nước cho dung dịch làm quỳ tím hoá xanh, còn sulfur trioxide tan trong nước cho dung dịch làm quỳ tím hoá đỏ. Hai nguyên tố cùng ở chu kì 3 mà oxide của chúng lại có tính chất trái ngược nhau. Bài này cho thấy thành phần và tính chất của oxide, hydroxide biến đổi có quy luật dọc theo một chu kì.',
  objectives: [
    'Nhận xét và giải thích được xu hướng biến đổi thành phần của oxide và hydroxide cao nhất của các nguyên tố trong chu kì 3: hoá trị cao nhất với oxygen bằng số thứ tự nhóm.',
    'Nhận xét được xu hướng biến đổi tính acid – base của các oxide và hydroxide cao nhất trong chu kì 3.',
    'Viết được công thức oxide và hydroxide cao nhất của một nguyên tố nhóm A khi biết vị trí của nó.',
  ],
  sections: [
    {
      heading: 'Thành phần của oxide và hydroxide cao nhất',
      blocks: [
        {
          type: 'p',
          text: 'Oxide cao nhất là oxide trong đó nguyên tố có hoá trị cao nhất với oxygen. Hydroxide cao nhất là hydroxide tương ứng với oxide đó: với kim loại là base (như $\\mathrm{NaOH}$), với phi kim là acid có oxygen (như $\\mathrm{H_2SO_4}$).',
        },
        {
          type: 'table',
          caption: 'Oxide và hydroxide cao nhất của các nguyên tố chu kì 3',
          head: ['Nguyên tố', 'Hoá trị', 'Oxide', 'Hydroxide'],
          rows: [
            ['Na (IA)', 'I', '$\\mathrm{Na_2O}$', '$\\mathrm{NaOH}$'],
            ['Mg (IIA)', 'II', '$\\mathrm{MgO}$', '$\\mathrm{Mg(OH)_2}$'],
            ['Al (IIIA)', 'III', '$\\mathrm{Al_2O_3}$', '$\\mathrm{Al(OH)_3}$'],
            ['Si (IVA)', 'IV', '$\\mathrm{SiO_2}$', '$\\mathrm{H_2SiO_3}$'],
            ['P (VA)', 'V', '$\\mathrm{P_2O_5}$', '$\\mathrm{H_3PO_4}$'],
            ['S (VIA)', 'VI', '$\\mathrm{SO_3}$', '$\\mathrm{H_2SO_4}$'],
            ['Cl (VIIA)', 'VII', '$\\mathrm{Cl_2O_7}$', '$\\mathrm{HClO_4}$'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hoá trị cao nhất với oxygen',
          text: 'Trong một chu kì, theo chiều tăng của điện tích hạt nhân, hoá trị cao nhất của các nguyên tố nhóm A với oxygen tăng dần từ I đến VII. Hoá trị cao nhất của một nguyên tố nhóm A với oxygen bằng số thứ tự của nhóm (với một số ngoại lệ như O, F).',
        },
        {
          type: 'p',
          text: 'Vì vậy, nguyên tố R ở nhóm A có số thứ tự nhóm $x$ thì oxide cao nhất có dạng $\\mathrm{R_2O_x}$ (rút gọn khi $x$ chẵn): nhóm IA là $\\mathrm{R_2O}$, IIA là $\\mathrm{RO}$, IIIA là $\\mathrm{R_2O_3}$, IVA là $\\mathrm{RO_2}$, VA là $\\mathrm{R_2O_5}$, VIA là $\\mathrm{RO_3}$, VIIA là $\\mathrm{R_2O_7}$.',
        },
      ],
    },
    {
      heading: 'Tính acid – base của oxide và hydroxide',
      blocks: [
        {
          type: 'list',
          items: [
            '$\\mathrm{Na_2O}$, $\\mathrm{MgO}$ là oxide base; $\\mathrm{NaOH}$ là base mạnh (kiềm), $\\mathrm{Mg(OH)_2}$ là base yếu.',
            '$\\mathrm{Al_2O_3}$ là oxide lưỡng tính, $\\mathrm{Al(OH)_3}$ là hydroxide lưỡng tính: chúng tác dụng được với cả dung dịch acid và dung dịch base.',
            '$\\mathrm{SiO_2}$, $\\mathrm{P_2O_5}$, $\\mathrm{SO_3}$, $\\mathrm{Cl_2O_7}$ là oxide acid; $\\mathrm{H_2SiO_3}$ là acid yếu, $\\mathrm{H_3PO_4}$ là acid trung bình, $\\mathrm{H_2SO_4}$ là acid mạnh, $\\mathrm{HClO_4}$ là acid rất mạnh.',
          ],
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{Al_2O_3 + 6HCl \\rightarrow 2AlCl_3 + 3H_2O} \\\\ &\\mathrm{Al_2O_3 + 2NaOH + 3H_2O \\rightarrow 2Na[Al(OH)_4]} \\\\ &\\mathrm{Al(OH)_3 + 3HCl \\rightarrow AlCl_3 + 3H_2O} \\\\ &\\mathrm{Al(OH)_3 + NaOH \\rightarrow Na[Al(OH)_4]} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Xu hướng trong một chu kì',
          text: 'Trong một chu kì, theo chiều tăng của điện tích hạt nhân, tính base của oxide và hydroxide cao nhất giảm dần, đồng thời tính acid của chúng tăng dần.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Xu hướng này phù hợp với sự biến đổi tính kim loại – phi kim trong chu kì: đầu chu kì là kim loại mạnh, có oxide và hydroxide mang tính base; cuối chu kì là phi kim mạnh, có oxide và hydroxide mang tính acid.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đi dọc chu kì 3',
    instruction:
      'Chọn lần lượt từng nguyên tố từ Na đến Cl. Với mỗi nguyên tố, xem hoá trị cao nhất và công thức oxide cao nhất, rồi đoán oxide đó là oxide base, lưỡng tính hay acid. Sau khi đoán, thẻ hydroxide mở ra cùng phương trình hoá học minh hoạ và vị trí trên thang base – acid.',
  },
  examples: [
    {
      problem:
        'Viết công thức oxide cao nhất và hydroxide tương ứng của sulfur ($Z = 16$). Cho biết tính acid – base của chúng.',
      steps: [
        'Cấu hình S: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$, nên S ở chu kì 3, nhóm VIA.',
        'Hoá trị cao nhất với oxygen bằng số thứ tự nhóm: VI. Oxide dạng $\\mathrm{R_2O_6}$ rút gọn thành $\\mathrm{SO_3}$.',
        'Hydroxide tương ứng: $\\mathrm{SO_3 + H_2O \\rightarrow H_2SO_4}$.',
        'S là phi kim mạnh nên $\\mathrm{SO_3}$ là oxide acid, $\\mathrm{H_2SO_4}$ là acid mạnh.',
      ],
      answer: '$\\mathrm{SO_3}$ (oxide acid) và $\\mathrm{H_2SO_4}$ (acid mạnh).',
    },
    {
      problem:
        'Nguyên tố R thuộc nhóm VIA. Trong oxide cao nhất của R, R chiếm $40\\%$ về khối lượng. Xác định R.',
      steps: [
        'Nhóm VIA nên oxide cao nhất có dạng $\\mathrm{RO_3}$.',
        'Phần trăm khối lượng của R: $\\dfrac{R}{R + 3 \\cdot 16} = 0{,}40$.',
        '$R = 0{,}40R + 19{,}2$, suy ra $0{,}60R = 19{,}2$ và $R = 32$.',
        'Nguyên tử khối $32$ ứng với sulfur.',
      ],
      answer: 'R là sulfur (S), oxide cao nhất là $\\mathrm{SO_3}$.',
    },
    {
      problem:
        'Sắp xếp các hydroxide $\\mathrm{Al(OH)_3}$, $\\mathrm{NaOH}$, $\\mathrm{Mg(OH)_2}$ theo chiều tính base giảm dần và giải thích.',
      steps: [
        'Na ($Z = 11$), Mg ($Z = 12$), Al ($Z = 13$) cùng chu kì 3.',
        'Trong một chu kì, theo chiều tăng điện tích hạt nhân, tính kim loại giảm nên tính base của hydroxide giảm.',
        'Vậy $\\mathrm{NaOH}$ (base mạnh) > $\\mathrm{Mg(OH)_2}$ (base yếu) > $\\mathrm{Al(OH)_3}$ (lưỡng tính).',
      ],
      answer: 'Tính base giảm dần: $\\mathrm{NaOH}$, $\\mathrm{Mg(OH)_2}$, $\\mathrm{Al(OH)_3}$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Hoá trị cao nhất của chlorine ($Z = 17$) với oxygen là bao nhiêu? (Viết bằng chữ số.)',
      answer: 7,
      hints: ['Xác định nhóm của chlorine từ số electron lớp ngoài cùng.'],
      solution:
        'Cl: $\\mathrm{[Ne]3s^2 3p^5}$, có $7$ electron lớp ngoài cùng, thuộc nhóm VIIA. Hoá trị cao nhất với oxygen là VII, oxide cao nhất $\\mathrm{Cl_2O_7}$.',
    },
    {
      type: 'choice',
      prompt: 'Công thức oxide cao nhất của phosphorus (nhóm VA) là',
      options: ['$\\mathrm{PO_2}$', '$\\mathrm{P_2O_3}$', '$\\mathrm{P_2O_5}$', '$\\mathrm{PO_5}$'],
      answer: 2,
      hints: ['Hoá trị cao nhất với oxygen bằng số thứ tự nhóm.', 'Oxygen có hoá trị II.'],
      solution:
        'Nhóm VA nên P có hoá trị cao nhất V. Công thức $\\mathrm{P_xO_y}$ với $5x = 2y$, nên $x = 2$, $y = 5$: $\\mathrm{P_2O_5}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hydroxide với tính chất của nó.',
      left: [
        '$\\mathrm{NaOH}$',
        '$\\mathrm{Al(OH)_3}$',
        '$\\mathrm{H_2SiO_3}$',
        '$\\mathrm{HClO_4}$',
      ],
      right: ['base mạnh (kiềm)', 'hydroxide lưỡng tính', 'acid yếu', 'acid rất mạnh', 'base yếu'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đi từ trái sang phải chu kì 3, tính base giảm, tính acid tăng.'],
      solution:
        '$\\mathrm{NaOH}$ là base mạnh (kiềm); $\\mathrm{Al(OH)_3}$ lưỡng tính; $\\mathrm{H_2SiO_3}$ là acid yếu; $\\mathrm{HClO_4}$ là acid rất mạnh. "Base yếu" ứng với $\\mathrm{Mg(OH)_2}$, không có trong cột trái.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các acid theo chiều tính acid tăng dần.',
      items: [
        '$\\mathrm{H_2SO_4}$',
        '$\\mathrm{H_2SiO_3}$',
        '$\\mathrm{HClO_4}$',
        '$\\mathrm{H_3PO_4}$',
      ],
      answer: [1, 3, 0, 2],
      hints: [
        'Các acid ứng với Si, P, S, Cl trong chu kì 3.',
        'Tính acid tăng theo chiều tăng $Z$.',
      ],
      solution:
        'Si ($14$), P ($15$), S ($16$), Cl ($17$): $\\mathrm{H_2SiO_3} < \\mathrm{H_3PO_4} < \\mathrm{H_2SO_4} < \\mathrm{HClO_4}$.',
    },
    {
      type: 'choice',
      prompt: 'Oxide nào sau đây là oxide lưỡng tính?',
      options: ['$\\mathrm{Na_2O}$', '$\\mathrm{MgO}$', '$\\mathrm{Al_2O_3}$', '$\\mathrm{SiO_2}$'],
      answer: 2,
      hints: ['Oxide lưỡng tính tác dụng được với cả acid và base.'],
      solution:
        '$\\mathrm{Al_2O_3}$ tác dụng với cả $\\mathrm{HCl}$ và $\\mathrm{NaOH}$, nên là oxide lưỡng tính. $\\mathrm{Na_2O}$, $\\mathrm{MgO}$ là oxide base; $\\mathrm{SiO_2}$ là oxide acid.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tố R thuộc nhóm VA. Trong oxide cao nhất của R, oxygen chiếm $56{,}34\\%$ về khối lượng. Tính nguyên tử khối của R (làm tròn đến hàng đơn vị).',
      answer: 31,
      tolerance: 0.5,
      hints: [
        'Nhóm VA nên oxide cao nhất có dạng $\\mathrm{R_2O_5}$.',
        'Lập phương trình $\\dfrac{5 \\cdot 16}{2R + 80} = 0{,}5634$.',
      ],
      solution:
        'Oxide $\\mathrm{R_2O_5}$: $\\dfrac{80}{2R + 80} = 0{,}5634$, nên $2R + 80 = \\dfrac{80}{0{,}5634} \\approx 142{,}0$, $2R \\approx 62{,}0$ và $R \\approx 31$. R là phosphorus.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố X ở chu kì 3, nhóm IIA. Oxide cao nhất của X là',
      options: [
        '$\\mathrm{X_2O}$, oxide base',
        '$\\mathrm{XO}$, oxide base',
        '$\\mathrm{XO}$, oxide acid',
        '$\\mathrm{XO_2}$, oxide lưỡng tính',
      ],
      answer: 1,
      hints: ['Nhóm IIA nên hoá trị cao nhất là II.', 'X là kim loại hay phi kim?'],
      solution:
        'X là magnesium ($\\mathrm{[Ne]3s^2}$). Hoá trị cao nhất II nên oxide là $\\mathrm{MgO}$; Mg là kim loại nên $\\mathrm{MgO}$ là oxide base, hydroxide $\\mathrm{Mg(OH)_2}$ là base yếu.',
    },
    {
      type: 'text',
      prompt:
        'Viết công thức hydroxide cao nhất của chlorine (viết chỉ số như chữ số thường, ví dụ H2SO4).',
      accept: ['HClO4'],
      hints: ['Oxide cao nhất là $\\mathrm{Cl_2O_7}$; cho nó tác dụng với nước.'],
      solution:
        '$\\mathrm{Cl_2O_7 + H_2O \\rightarrow 2HClO_4}$. Hydroxide cao nhất là $\\mathrm{HClO_4}$ (perchloric acid), acid rất mạnh.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng về các nguyên tố chu kì 3 (từ Na đến Cl).',
      options: [
        'Hoá trị cao nhất với oxygen tăng từ I đến VII.',
        'Tính base của hydroxide tăng dần.',
        'Tính acid của oxide cao nhất tăng dần.',
        '$\\mathrm{Al(OH)_3}$ tác dụng được với dung dịch $\\mathrm{NaOH}$.',
        '$\\mathrm{Na_2O}$ là oxide acid.',
      ],
      answers: [0, 2, 3],
      hints: ['Tính base và tính acid biến đổi ngược chiều nhau.'],
      solution:
        'Đúng: hoá trị cao nhất tăng từ I (Na) đến VII (Cl); tính acid tăng; $\\mathrm{Al(OH)_3}$ lưỡng tính nên tác dụng với $\\mathrm{NaOH}$. Sai: tính base giảm dần; $\\mathrm{Na_2O}$ là oxide base.',
    },
  ],
  takeaways: [
    'Hoá trị cao nhất của nguyên tố nhóm A với oxygen bằng số thứ tự nhóm; trong chu kì 3 tăng từ I ($\\mathrm{Na_2O}$) đến VII ($\\mathrm{Cl_2O_7}$).',
    'Oxide cao nhất của nhóm IA đến VIIA lần lượt có dạng $\\mathrm{R_2O}$, $\\mathrm{RO}$, $\\mathrm{R_2O_3}$, $\\mathrm{RO_2}$, $\\mathrm{R_2O_5}$, $\\mathrm{RO_3}$, $\\mathrm{R_2O_7}$.',
    'Trong một chu kì, tính base của oxide và hydroxide cao nhất giảm dần, tính acid tăng dần: $\\mathrm{NaOH}$ base mạnh, $\\mathrm{Mg(OH)_2}$ base yếu, $\\mathrm{Al(OH)_3}$ lưỡng tính, $\\mathrm{H_2SiO_3}$ acid yếu, $\\mathrm{H_3PO_4}$ acid trung bình, $\\mathrm{H_2SO_4}$ acid mạnh, $\\mathrm{HClO_4}$ acid rất mạnh.',
  ],
};
