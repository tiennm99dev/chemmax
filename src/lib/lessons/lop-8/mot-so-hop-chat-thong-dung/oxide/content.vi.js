/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen. Theo khả năng phản ứng với acid và base, oxide được chia thành oxide base, oxide acid, oxide lưỡng tính và oxide trung tính; oxide base tác dụng với acid và oxide acid tác dụng với base đều tạo muối và nước.',
  intro:
    'Gỉ sắt màu nâu đỏ, vôi sống dùng xây nhà, khí carbon dioxide em thở ra, khói sulfur dioxide gây mưa acid đều là oxide. Có oxide “ăn” được acid, có oxide “ăn” được base, lại có oxide chẳng phản ứng với chất nào. Bài này giúp em gọi tên và xếp các oxide vào đúng nhóm theo tính chất hoá học của chúng.',
  objectives: [
    'Nêu được khái niệm oxide là hợp chất của oxygen với một nguyên tố khác.',
    'Viết được phương trình hoá học tạo oxide từ kim loại hoặc phi kim với oxygen; gọi được tên oxide.',
    'Phân loại được oxide theo khả năng phản ứng với acid, base (oxide acid, oxide base, oxide lưỡng tính, oxide trung tính).',
    'Tiến hành được thí nghiệm oxide kim loại phản ứng với acid, oxide phi kim phản ứng với base; nêu và giải thích được hiện tượng, viết được phương trình hoá học.',
  ],
  sections: [
    {
      heading: 'Khái niệm và tên gọi oxide',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Oxide',
          text: 'Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen. Ví dụ: $\\mathrm{CaO}$, $\\mathrm{Fe_2O_3}$, $\\mathrm{CO_2}$, $\\mathrm{P_2O_5}$.',
        },
        {
          type: 'p',
          text: 'Nhiều oxide được tạo thành khi đốt kim loại hoặc phi kim trong oxygen:',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} 4\\mathrm{Na} + \\mathrm{O_2} &\\xrightarrow{t^\\circ} 2\\mathrm{Na_2O} \\\\ \\mathrm{C} + \\mathrm{O_2} &\\xrightarrow{t^\\circ} \\mathrm{CO_2} \\\\ 4\\mathrm{P} + 5\\mathrm{O_2} &\\xrightarrow{t^\\circ} 2\\mathrm{P_2O_5} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Gọi tên oxide',
          text: 'Oxide của kim loại: tên kim loại (kèm hoá trị nếu kim loại có nhiều hoá trị) + oxide. Oxide của phi kim: (tiền tố chỉ số nguyên tử phi kim) + tên phi kim + (tiền tố chỉ số nguyên tử oxygen) + oxide.',
        },
        {
          type: 'table',
          caption:
            'Tiền tố chỉ số nguyên tử: mono ($1$), di ($2$), tri ($3$), tetra ($4$), penta ($5$)',
          head: ['Oxide', 'Tên gọi'],
          rows: [
            ['$\\mathrm{Na_2O}$', 'sodium oxide'],
            ['$\\mathrm{FeO}$', 'iron(II) oxide'],
            ['$\\mathrm{Fe_2O_3}$', 'iron(III) oxide'],
            ['$\\mathrm{CO}$', 'carbon monoxide'],
            ['$\\mathrm{CO_2}$', 'carbon dioxide'],
            ['$\\mathrm{SO_3}$', 'sulfur trioxide'],
            ['$\\mathrm{P_2O_5}$', 'diphosphorus pentoxide'],
          ],
        },
        {
          type: 'p',
          text: 'Tiền tố mono của phi kim đứng đầu thường được bỏ ($\\mathrm{CO_2}$ là carbon dioxide). Khi ghép, “mono” + “oxide” viết gọn thành “monoxide”, “penta” + “oxide” thành “pentoxide”.',
        },
      ],
    },
    {
      heading: 'Phân loại và tính chất hoá học của oxide',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Oxide base',
          text: 'Oxide base tác dụng với dung dịch acid tạo thành muối và nước. Phần lớn oxide kim loại là oxide base: $\\mathrm{Na_2O}$, $\\mathrm{CaO}$, $\\mathrm{CuO}$, $\\mathrm{Fe_2O_3}$...',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CuO} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Oxide acid',
          text: 'Oxide acid tác dụng với dung dịch base tạo thành muối và nước. Phần lớn oxide phi kim là oxide acid: $\\mathrm{CO_2}$, $\\mathrm{SO_2}$, $\\mathrm{SO_3}$, $\\mathrm{P_2O_5}$...',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CO_2} + \\mathrm{Ca(OH)_2} \\rightarrow \\mathrm{CaCO_3}\\downarrow + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Thí nghiệm: thổi khí $\\mathrm{CO_2}$ vào nước vôi trong, dung dịch vẩn đục do tạo $\\mathrm{CaCO_3}$ không tan. Cho bột $\\mathrm{CuO}$ màu đen vào dung dịch $\\mathrm{H_2SO_4}$ loãng, đun nhẹ: bột đen tan, dung dịch có màu xanh lam của $\\mathrm{CuSO_4}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Oxide lưỡng tính và oxide trung tính',
          text: 'Oxide lưỡng tính tác dụng với cả dung dịch acid và dung dịch base tạo thành muối và nước, ví dụ $\\mathrm{Al_2O_3}$, $\\mathrm{ZnO}$. Oxide trung tính không tác dụng với acid, base và nước, ví dụ $\\mathrm{CO}$, $\\mathrm{NO}$, $\\mathrm{N_2O}$.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{ZnO} + 2\\mathrm{HCl} &\\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2O} \\\\ \\mathrm{ZnO} + 2\\mathrm{NaOH} &\\rightarrow \\mathrm{Na_2ZnO_2} + \\mathrm{H_2O} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Oxide tác dụng với nước',
          text: 'Một số oxide base ($\\mathrm{Na_2O}$, $\\mathrm{K_2O}$, $\\mathrm{CaO}$, $\\mathrm{BaO}$) tác dụng với nước tạo dung dịch base: $\\mathrm{CaO} + \\mathrm{H_2O} \\rightarrow \\mathrm{Ca(OH)_2}$. Nhiều oxide acid tác dụng với nước tạo dung dịch acid: $\\mathrm{SO_3} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_2SO_4}$, $\\mathrm{P_2O_5} + 3\\mathrm{H_2O} \\rightarrow 2\\mathrm{H_3PO_4}$.',
        },
        {
          type: 'widget',
          name: 'phan-ung',
        },
        {
          type: 'table',
          caption: 'Tóm tắt phân loại oxide',
          head: ['Loại oxide', 'Tác dụng với acid', 'Tác dụng với base', 'Ví dụ'],
          rows: [
            ['Oxide base', 'Có', 'Không', '$\\mathrm{CaO}$, $\\mathrm{CuO}$, $\\mathrm{Fe_2O_3}$'],
            ['Oxide acid', 'Không', 'Có', '$\\mathrm{CO_2}$, $\\mathrm{SO_2}$, $\\mathrm{P_2O_5}$'],
            ['Oxide lưỡng tính', 'Có', 'Có', '$\\mathrm{Al_2O_3}$, $\\mathrm{ZnO}$'],
            ['Oxide trung tính', 'Không', 'Không', '$\\mathrm{CO}$, $\\mathrm{NO}$'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp oxide vào bảng phân loại',
    instruction:
      'Chọn một thẻ oxide rồi chọn ô loại oxide (trên máy tính có thể kéo thả thẻ). Mỗi lần đặt, em được biết đúng hay sai và lí do. Dùng ô “Thử phản ứng” trong phần Tính chất hoá học để kiểm tra oxide tác dụng với nước, acid hay base.',
  },
  examples: [
    {
      problem:
        'Gọi tên các oxide: $\\mathrm{K_2O}$, $\\mathrm{CuO}$, $\\mathrm{SO_2}$, $\\mathrm{N_2O_5}$.',
      steps: [
        '$\\mathrm{K}$ chỉ có hoá trị I: $\\mathrm{K_2O}$ là potassium oxide.',
        '$\\mathrm{Cu}$ có nhiều hoá trị; trong $\\mathrm{CuO}$, Cu có hoá trị II: copper(II) oxide.',
        '$\\mathrm{SO_2}$: $1$ nguyên tử S, $2$ nguyên tử O: sulfur dioxide.',
        '$\\mathrm{N_2O_5}$: $2$ nguyên tử N (di), $5$ nguyên tử O (penta): dinitrogen pentoxide.',
      ],
      answer: 'Potassium oxide, copper(II) oxide, sulfur dioxide, dinitrogen pentoxide.',
    },
    {
      problem:
        'Cho $5{,}6$ g calcium oxide tác dụng vừa đủ với dung dịch hydrochloric acid. Tính khối lượng muối tạo thành (Ca = 40, O = 16, Cl = 35,5).',
      steps: [
        '$\\mathrm{CaO} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl_2} + \\mathrm{H_2O}$.',
        '$n_{\\mathrm{CaO}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol, nên $n_{\\mathrm{CaCl_2}} = 0{,}1$ mol.',
        '$M_{\\mathrm{CaCl_2}} = 40 + 71 = 111$ g/mol; $m = 0{,}1 \\times 111 = 11{,}1$ g.',
      ],
      answer: '$11{,}1$ g $\\mathrm{CaCl_2}$.',
    },
    {
      problem:
        'Oxide X tan được trong dung dịch HCl và cũng tan được trong dung dịch NaOH. Oxide Y không tan trong cả hai dung dịch và không tác dụng với nước. X, Y thuộc loại oxide nào? Cho ví dụ.',
      steps: [
        'X tác dụng với cả acid và base: X là oxide lưỡng tính, ví dụ $\\mathrm{ZnO}$ hoặc $\\mathrm{Al_2O_3}$.',
        'Y không tác dụng với acid, base, nước: Y là oxide trung tính, ví dụ $\\mathrm{CO}$ hoặc $\\mathrm{NO}$.',
      ],
      answer: 'X là oxide lưỡng tính, Y là oxide trung tính.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là oxide?',
      options: ['$\\mathrm{CaCO_3}$', '$\\mathrm{NaOH}$', '$\\mathrm{CaO}$', '$\\mathrm{H_2SO_4}$'],
      answer: 2,
      hints: ['Oxide chỉ gồm hai nguyên tố, một nguyên tố là oxygen.'],
      solution:
        '$\\mathrm{CaO}$ gồm hai nguyên tố Ca và O nên là oxide. Các chất còn lại có ba nguyên tố.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên oxide $\\mathrm{Fe_2O_3}$.',
      accept: ['iron(III) oxide', 'iron (III) oxide', 'iron(3) oxide'],
      hints: ['Sắt có nhiều hoá trị; tính hoá trị của Fe trong $\\mathrm{Fe_2O_3}$.'],
      solution: 'Trong $\\mathrm{Fe_2O_3}$, Fe có hoá trị III, nên tên là iron(III) oxide.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên oxide $\\mathrm{P_2O_5}$.',
      accept: ['diphosphorus pentoxide', 'diphosphorus pentaoxide'],
      hints: ['Dùng tiền tố di ($2$) và penta ($5$).'],
      solution: '$\\mathrm{P_2O_5}$: diphosphorus pentoxide.',
    },
    {
      type: 'choice',
      prompt: 'Oxide nào sau đây là oxide lưỡng tính?',
      options: ['$\\mathrm{CO_2}$', '$\\mathrm{Al_2O_3}$', '$\\mathrm{Na_2O}$', '$\\mathrm{CO}$'],
      answer: 1,
      hints: ['Oxide lưỡng tính tác dụng được với cả acid và base.'],
      solution: '$\\mathrm{Al_2O_3}$ tác dụng với cả dung dịch acid và dung dịch base.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các oxide acid.',
      options: [
        '$\\mathrm{CO_2}$',
        '$\\mathrm{CaO}$',
        '$\\mathrm{SO_2}$',
        '$\\mathrm{CO}$',
        '$\\mathrm{P_2O_5}$',
        '$\\mathrm{CuO}$',
      ],
      answers: [0, 2, 4],
      hints: ['Oxide acid tác dụng với base; cẩn thận với oxide trung tính của carbon.'],
      solution:
        '$\\mathrm{CO_2}$, $\\mathrm{SO_2}$, $\\mathrm{P_2O_5}$ là oxide acid. $\\mathrm{CaO}$, $\\mathrm{CuO}$ là oxide base; $\\mathrm{CO}$ là oxide trung tính.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi oxide với loại oxide của nó.',
      left: ['$\\mathrm{CuO}$', '$\\mathrm{SO_3}$', '$\\mathrm{ZnO}$', '$\\mathrm{NO}$'],
      right: ['Oxide acid', 'Oxide trung tính', 'Oxide base', 'Oxide lưỡng tính'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Hỏi: oxide đó tác dụng với acid, với base, với cả hai hay không với chất nào?'],
      solution:
        '$\\mathrm{CuO}$: oxide base; $\\mathrm{SO_3}$: oxide acid; $\\mathrm{ZnO}$: oxide lưỡng tính; $\\mathrm{NO}$: oxide trung tính.',
    },
    {
      type: 'choice',
      prompt:
        'Thổi hơi thở (có khí $\\mathrm{CO_2}$) vào ống nghiệm đựng nước vôi trong, hiện tượng quan sát được là',
      options: [
        'có bọt khí thoát ra',
        'nước vôi trong vẩn đục',
        'dung dịch chuyển màu xanh',
        'không có hiện tượng gì',
      ],
      answer: 1,
      hints: ['Sản phẩm $\\mathrm{CaCO_3}$ không tan trong nước.'],
      solution:
        '$\\mathrm{CO_2} + \\mathrm{Ca(OH)_2} \\rightarrow \\mathrm{CaCO_3}\\downarrow + \\mathrm{H_2O}$: $\\mathrm{CaCO_3}$ không tan làm nước vôi trong vẩn đục.',
    },
    {
      type: 'number',
      prompt:
        'Cho $8$ g copper(II) oxide tác dụng vừa đủ với dung dịch HCl. Tính khối lượng muối $\\mathrm{CuCl_2}$ tạo thành, theo gam (Cu = 64, O = 16, Cl = 35,5).',
      answer: 13.5,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{CuO} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CuCl_2} + \\mathrm{H_2O}$.',
        '$M_{\\mathrm{CuO}} = 80$ g/mol, $M_{\\mathrm{CuCl_2}} = 135$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{CuO}} = \\dfrac{8}{80} = 0{,}1$ mol $= n_{\\mathrm{CuCl_2}}$; $m = 0{,}1 \\times 135 = 13{,}5$ g.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn $2{,}479$ L khí $\\mathrm{CO_2}$ (điều kiện chuẩn) vào nước vôi trong dư. Tính khối lượng kết tủa $\\mathrm{CaCO_3}$ thu được, theo gam (Ca = 40, C = 12, O = 16).',
      answer: 10,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{CO_2}} = \\dfrac{V}{24{,}79}$.',
        'Theo phương trình, $n_{\\mathrm{CaCO_3}} = n_{\\mathrm{CO_2}}$.',
      ],
      solution:
        '$n_{\\mathrm{CO_2}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol $= n_{\\mathrm{CaCO_3}}$; $m = 0{,}1 \\times 100 = 10$ g.',
    },
    {
      type: 'choice',
      prompt: 'Công thức oxide của sulfur có hoá trị VI là',
      options: ['$\\mathrm{SO}$', '$\\mathrm{SO_2}$', '$\\mathrm{SO_3}$', '$\\mathrm{S_2O_3}$'],
      answer: 2,
      hints: [
        'O có hoá trị II; dùng quy tắc hoá trị $x \\cdot \\mathrm{VI} = y \\cdot \\mathrm{II}$.',
      ],
      solution:
        '$x \\cdot 6 = y \\cdot 2$ cho $x = 1$, $y = 3$: $\\mathrm{SO_3}$ (sulfur trioxide).',
    },
  ],
  takeaways: [
    'Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen.',
    'Tên oxide kim loại: tên kim loại (hoá trị) + oxide; oxide phi kim dùng tiền tố mono, di, tri, tetra, penta.',
    'Oxide base + acid → muối + nước; oxide acid + base → muối + nước.',
    'Oxide lưỡng tính ($\\mathrm{Al_2O_3}$, $\\mathrm{ZnO}$) tác dụng với cả acid và base; oxide trung tính ($\\mathrm{CO}$, $\\mathrm{NO}$) không tác dụng với acid, base, nước.',
  ],
};
