/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Pin điện và điện phân: cặp oxi hoá – khử, thế điện cực chuẩn và dãy điện hoá, quy tắc α, pin Galvani và sức điện động chuẩn, các nguồn điện hoá học; điện phân nóng chảy và dung dịch, thứ tự điện phân ở các điện cực, ứng dụng; luyện dự đoán sản phẩm điện phân và các dạng bài tính toán.',
  intro:
    'Pin điện và bình điện phân đều là nơi diễn ra phản ứng oxi hoá – khử trên các điện cực, nhưng theo hai chiều ngược nhau: pin biến năng lượng hoá học thành điện năng, còn điện phân dùng điện năng để thực hiện phản ứng không tự xảy ra. Bài ôn tập này hệ thống lại hai quá trình ấy, luyện dự đoán sản phẩm điện phân và các dạng bài tính sức điện động, lượng chất thu được.',
  objectives: [
    'Hệ thống được các khái niệm cặp oxi hoá – khử, thế điện cực chuẩn, dãy điện hoá và quy tắc α.',
    'So sánh được pin Galvani và bình điện phân: dấu điện cực, quá trình xảy ra, chuyển hoá năng lượng.',
    'Dự đoán được sản phẩm điện phân chất điện li nóng chảy và dung dịch với điện cực trơ.',
    'Giải được các bài tập về sức điện động chuẩn của pin và lượng chất thu được khi điện phân.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh pin Galvani và bình điện phân',
          head: ['Đặc điểm', 'Pin Galvani', 'Bình điện phân'],
          rows: [
            ['Chuyển hoá năng lượng', 'Hoá năng thành điện năng', 'Điện năng thành hoá năng'],
            [
              'Phản ứng',
              'Oxi hoá – khử tự xảy ra',
              'Oxi hoá – khử không tự xảy ra, cần dòng điện một chiều',
            ],
            ['Anode', 'Cực âm, xảy ra quá trình oxi hoá', 'Cực dương, xảy ra quá trình oxi hoá'],
            ['Cathode', 'Cực dương, xảy ra quá trình khử', 'Cực âm, xảy ra quá trình khử'],
          ],
        },
        {
          type: 'list',
          items: [
            'Cặp oxi hoá – khử $\\mathrm{M^{n+}/M}$; thế điện cực chuẩn $E^\\circ$ đo ở 1 M, 25 °C so với điện cực hydrogen chuẩn ($E^\\circ_{\\mathrm{2H^+/H_2}} = 0$).',
            '$E^\\circ$ càng nhỏ, dạng khử càng mạnh; $E^\\circ$ càng lớn, dạng oxi hoá càng mạnh.',
            'Quy tắc α: chất khử của cặp có $E^\\circ$ nhỏ hơn phản ứng với chất oxi hoá của cặp có $E^\\circ$ lớn hơn.',
            'Pin Galvani: $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} > 0$; electron đi từ anode sang cathode qua dây dẫn, cầu muối giữ cho dung dịch trung hoà điện.',
            'Nguồn điện hoá học: acquy chì, pin nhiên liệu, pin lithium-ion; pin Mặt Trời chuyển quang năng thành điện năng.',
          ],
        },
        {
          type: 'table',
          caption: 'Thứ tự điện phân với điện cực trơ',
          head: ['Điện cực', 'Thứ tự', 'Trong dung dịch không bị điện phân'],
          rows: [
            [
              'Cathode (khử)',
              '$\\mathrm{Au^{3+}} > \\mathrm{Ag^+} > \\mathrm{Cu^{2+}} > \\mathrm{H^+} > \\mathrm{H_2O}$',
              '$\\mathrm{K^+}$, $\\mathrm{Na^+}$, $\\mathrm{Mg^{2+}}$, $\\mathrm{Al^{3+}}$: nước bị khử, tạo $\\mathrm{H_2}$',
            ],
            [
              'Anode (oxi hoá)',
              '$\\mathrm{I^-} > \\mathrm{Br^-} > \\mathrm{Cl^-} > \\mathrm{H_2O}$',
              '$\\mathrm{SO_4^{2-}}$, $\\mathrm{NO_3^-}$, $\\mathrm{F^-}$: nước bị oxi hoá, tạo $\\mathrm{O_2}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ứng dụng của điện phân',
          text: 'Điều chế kim loại mạnh (Na, Mg, Al) bằng điện phân nóng chảy, kim loại trung bình và yếu bằng điện phân dung dịch; tinh chế kim loại (kim loại thô làm anode); mạ điện (vật cần mạ làm cathode, kim loại mạ làm anode).',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Sức điện động chuẩn: xác định anode (cặp có $E^\\circ$ nhỏ hơn) rồi tính $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$; ngược lại, biết $E^\\circ_{\\text{pin}}$ tìm được thế điện cực chuẩn của một cặp.',
            'Lượng chất khi điện phân: số mol electron $n_e = \\dfrac{It}{F}$ ($F = 96\\,500$ C/mol); chia cho số electron trong quá trình ở điện cực để có số mol sản phẩm, rồi tính khối lượng hoặc thể tích khí (24,79 L/mol ở đkc).',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Dự đoán sản phẩm điện phân',
    instruction:
      'Với mỗi chất điện phân, chọn sản phẩm thu được ở cathode và ở anode (điện cực trơ). Lời giải cho biết tiểu phân nào phản ứng và vì sao, kèm phương trình điện phân. Bấm "Chất điện phân tiếp theo" để luyện tiếp.',
  },
  examples: [
    {
      problem:
        'Cho $E^\\circ_{\\mathrm{Ni^{2+}/Ni}} = -0{,}257$ V, $E^\\circ_{\\mathrm{Ag^+/Ag}} = +0{,}799$ V. Viết phản ứng xảy ra trong pin Ni – Ag và tính sức điện động chuẩn của pin.',
      steps: [
        'Ni có $E^\\circ$ nhỏ hơn nên là anode: $\\mathrm{Ni} \\longrightarrow \\mathrm{Ni^{2+}} + 2e$; cathode: $\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$.',
        'Phản ứng trong pin: $\\mathrm{Ni} + 2\\mathrm{Ag^+} \\longrightarrow \\mathrm{Ni^{2+}} + 2\\mathrm{Ag}$.',
        '$E^\\circ_{\\text{pin}} = 0{,}799 - (-0{,}257) = 1{,}056$ V.',
      ],
      answer: '$E^\\circ_{\\text{pin}} = 1{,}056$ V.',
    },
    {
      problem:
        'Điện phân dung dịch $\\mathrm{CuCl_2}$ với điện cực trơ, dòng điện 5 A trong $1\\,930$ giây. Tính khối lượng Cu thu được ở cathode và thể tích khí ở anode (đkc).',
      steps: [
        '$n_e = \\dfrac{5 \\cdot 1\\,930}{96\\,500} = 0{,}1$ mol.',
        'Cathode: $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$, $n_{\\mathrm{Cu}} = 0{,}05$ mol, $m = 0{,}05 \\cdot 64 = 3{,}2$ g.',
        'Anode: $2\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2e$, $n_{\\mathrm{Cl_2}} = 0{,}05$ mol, $V = 0{,}05 \\cdot 24{,}79 \\approx 1{,}24$ L.',
      ],
      answer: '$m_{\\mathrm{Cu}} = 3{,}2$ g; $V_{\\mathrm{Cl_2}} \\approx 1{,}24$ L.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cặp oxi hoá – khử nào sau đây có thế điện cực chuẩn nhỏ hơn 0?',
      options: [
        '$\\mathrm{Zn^{2+}/Zn}$',
        '$\\mathrm{Cu^{2+}/Cu}$',
        '$\\mathrm{Ag^+/Ag}$',
        '$\\mathrm{Fe^{3+}/Fe^{2+}}$',
      ],
      answer: 0,
      hints: ['Kim loại đứng trước hydrogen trong dãy điện hoá có $E^\\circ < 0$.'],
      solution:
        '$E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V; các cặp còn lại có $E^\\circ$ dương ($+0{,}340$; $+0{,}799$; $+0{,}771$ V).',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào sau đây là đúng?',
      options: [
        'Kim loại có tính khử càng mạnh thì thế điện cực chuẩn của cặp càng âm.',
        'Trong pin Galvani, anode là cực âm.',
        'Trong bình điện phân, anode là cực âm.',
        'Ở điều kiện chuẩn, Cu khử được ion $\\mathrm{Fe^{2+}}$.',
      ],
      answers: [0, 1],
      hints: [
        'Dấu điện cực ở pin và ở bình điện phân ngược nhau.',
        'So sánh $E^\\circ_{\\mathrm{Cu^{2+}/Cu}}$ và $E^\\circ_{\\mathrm{Fe^{2+}/Fe}}$.',
      ],
      solution:
        'Đúng: kim loại khử mạnh có $E^\\circ$ càng âm; anode của pin là cực âm. Sai: anode của bình điện phân là cực dương; Cu ($+0{,}340$ V) không khử được $\\mathrm{Fe^{2+}}$ ($-0{,}440$ V).',
    },
    {
      type: 'number',
      prompt:
        'Tính sức điện động chuẩn (V) của pin tạo bởi hai cặp $\\mathrm{Al^{3+}/Al}$ ($E^\\circ = -1{,}676$ V) và $\\mathrm{Cu^{2+}/Cu}$ ($E^\\circ = +0{,}340$ V).',
      answer: 2.016,
      tolerance: 0.0005,
      unit: 'V',
      hints: [
        'Al là anode.',
        '$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$.',
      ],
      solution: '$E^\\circ_{\\text{pin}} = 0{,}340 - (-1{,}676) = 2{,}016$ V.',
    },
    {
      type: 'choice',
      prompt:
        'Sức điện động chuẩn của pin gồm hai điện cực $\\mathrm{M^{2+}/M}$ và $\\mathrm{Cu^{2+}/Cu}$ ($E^\\circ = +0{,}340$ V) là $0{,}780$ V, M là anode. Kim loại M là',
      options: [
        'Fe ($E^\\circ = -0{,}440$ V)',
        'Zn ($E^\\circ = -0{,}762$ V)',
        'Ni ($E^\\circ = -0{,}257$ V)',
        'Pb ($E^\\circ = -0{,}126$ V)',
      ],
      answer: 0,
      hints: [
        '$E^\\circ_{\\mathrm{M^{2+}/M}} = E^\\circ_{\\mathrm{Cu^{2+}/Cu}} - E^\\circ_{\\text{pin}}$.',
      ],
      solution: '$E^\\circ_{\\mathrm{M^{2+}/M}} = 0{,}340 - 0{,}780 = -0{,}440$ V, nên M là Fe.',
    },
    {
      type: 'choice',
      prompt:
        'Điện phân dung dịch chứa $\\mathrm{Cu(NO_3)_2}$ 0,1 M và $\\mathrm{AgNO_3}$ 0,1 M với điện cực trơ. Quá trình khử đầu tiên ở cathode là',
      options: [
        '$\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$',
        '$\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$',
        '$2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$',
        '$\\mathrm{NO_3^-}$ bị khử',
      ],
      answer: 0,
      hints: ['Chất có tính oxi hoá mạnh nhất bị khử trước.'],
      solution:
        '$E^\\circ_{\\mathrm{Ag^+/Ag}} = +0{,}799$ V lớn hơn $E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340$ V nên $\\mathrm{Ag^+}$ có tính oxi hoá mạnh hơn và bị khử trước.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi quá trình điện phân (điện cực trơ) với cặp sản phẩm ở cathode và anode.',
      left: [
        'Dung dịch $\\mathrm{CuSO_4}$',
        'Dung dịch NaCl, có màng ngăn',
        '$\\mathrm{Al_2O_3}$ nóng chảy',
        'Dung dịch $\\mathrm{Na_2SO_4}$',
      ],
      right: [
        'Cu và $\\mathrm{O_2}$',
        '$\\mathrm{H_2}$ và $\\mathrm{Cl_2}$',
        'Al và $\\mathrm{O_2}$',
        '$\\mathrm{H_2}$ và $\\mathrm{O_2}$',
        'Na và $\\mathrm{Cl_2}$',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Trong dung dịch, ion kim loại mạnh không bị khử; $\\mathrm{SO_4^{2-}}$ không bị oxi hoá.',
      ],
      solution:
        '$\\mathrm{CuSO_4}$: Cu ở cathode, $\\mathrm{O_2}$ ở anode. NaCl dung dịch: $\\mathrm{H_2}$ và $\\mathrm{Cl_2}$. $\\mathrm{Al_2O_3}$ nóng chảy: Al và $\\mathrm{O_2}$. $\\mathrm{Na_2SO_4}$: điện phân nước, $\\mathrm{H_2}$ và $\\mathrm{O_2}$. Na và $\\mathrm{Cl_2}$ chỉ thu được khi điện phân NaCl nóng chảy.',
    },
    {
      type: 'number',
      prompt:
        'Điện phân dung dịch $\\mathrm{AgNO_3}$ dư với điện cực trơ, dòng điện $2{,}5$ A trong $3\\,860$ giây ($F = 96\\,500$ C/mol). Tính khối lượng Ag bám vào cathode (g).',
      answer: 10.8,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_e = \\dfrac{It}{F}$.', '$\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$.'],
      solution:
        '$n_e = \\dfrac{2{,}5 \\cdot 3\\,860}{96\\,500} = 0{,}1$ mol; $n_{\\mathrm{Ag}} = 0{,}1$ mol; $m = 0{,}1 \\cdot 108 = 10{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Điện phân dung dịch $\\mathrm{CuSO_4}$ dư với điện cực trơ, dòng điện 10 A, thu được $12{,}8$ g Cu ở cathode. Tính thời gian điện phân (giây), biết $F = 96\\,500$ C/mol.',
      answer: 3860,
      tolerance: 1,
      unit: 's',
      hints: [
        '$n_{\\mathrm{Cu}} = \\dfrac{12{,}8}{64}$; mỗi mol Cu cần 2 mol electron.',
        '$t = \\dfrac{n_e F}{I}$.',
      ],
      solution:
        '$n_{\\mathrm{Cu}} = 0{,}2$ mol, $n_e = 0{,}4$ mol; $t = \\dfrac{0{,}4 \\cdot 96\\,500}{10} = 3\\,860$ s.',
    },
    {
      type: 'choice',
      prompt: 'Trong quá trình tinh chế copper bằng điện phân, thanh copper thô được dùng làm',
      options: [
        'anode, copper tan ra thành ion $\\mathrm{Cu^{2+}}$',
        'cathode, ion $\\mathrm{Cu^{2+}}$ bám lên',
        'anode, nước bị oxi hoá tạo $\\mathrm{O_2}$',
        'cathode, nước bị khử tạo $\\mathrm{H_2}$',
      ],
      answer: 0,
      hints: ['Copper tinh khiết thu được ở điện cực nào?'],
      solution:
        'Copper thô làm anode: $\\mathrm{Cu} \\longrightarrow \\mathrm{Cu^{2+}} + 2e$; copper tinh khiết làm cathode, nơi $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$.',
    },
    {
      type: 'choice',
      prompt: 'Trong acquy chì, khi phóng điện thì chất nào bị oxi hoá ở anode?',
      options: ['Pb', '$\\mathrm{PbO_2}$', '$\\mathrm{H_2SO_4}$', '$\\mathrm{PbSO_4}$'],
      answer: 0,
      hints: ['Anode là cực âm của nguồn điện, làm bằng kim loại.'],
      solution:
        'Anode bằng Pb bị oxi hoá: $\\mathrm{Pb} + \\mathrm{SO_4^{2-}} \\longrightarrow \\mathrm{PbSO_4} + 2e$; $\\mathrm{PbO_2}$ bị khử ở cathode.',
    },
  ],
  takeaways: [
    'Pin Galvani: anode (−) oxi hoá, cathode (+) khử, $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$.',
    'Bình điện phân: anode (+) oxi hoá, cathode (−) khử.',
    'Dự đoán sản phẩm: cathode khử chất oxi hoá mạnh nhất, anode oxi hoá chất khử mạnh nhất; trong dung dịch có thể là nước.',
    'Lượng chất điện phân: $n_e = \\dfrac{It}{F}$, $F = 96\\,500$ C/mol.',
  ],
};
