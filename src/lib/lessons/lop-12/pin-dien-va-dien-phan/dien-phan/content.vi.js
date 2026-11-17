/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Điện phân: nguyên tắc điện phân, điện phân chất điện li nóng chảy và dung dịch, thứ tự khử ở cathode và oxi hoá ở anode, ứng dụng điện phân để điều chế, tinh chế kim loại và mạ điện.',
  intro:
    'Nhôm làm vỏ lon, sodium dùng trong đèn đường hay xút (NaOH) dùng nấu xà phòng đều được sản xuất nhờ dòng điện. Trong pin Galvani, phản ứng oxi hoá – khử tự xảy ra và sinh ra dòng điện; còn khi điện phân, ta dùng dòng điện một chiều để buộc một phản ứng oxi hoá – khử không tự xảy ra phải diễn ra. Ở mỗi điện cực, chất nào phản ứng trước và thu được sản phẩm gì?',
  objectives: [
    'Nêu được khái niệm điện phân và các quá trình xảy ra ở cathode, anode.',
    'Viết được các quá trình ở điện cực và phương trình điện phân chất điện li nóng chảy và dung dịch với điện cực trơ.',
    'Giải thích được thứ tự điện phân ở các điện cực dựa vào tính oxi hoá, tính khử của các tiểu phân.',
    'Trình bày được ứng dụng của điện phân: điều chế kim loại, tinh chế kim loại, mạ điện.',
  ],
  sections: [
    {
      heading: 'Nguyên tắc điện phân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điện phân',
          text: 'Điện phân là quá trình oxi hoá – khử xảy ra trên bề mặt các điện cực khi có dòng điện một chiều đi qua chất điện li nóng chảy hoặc dung dịch chất điện li. Quá trình điện phân tiêu tốn điện năng để thực hiện một phản ứng không tự xảy ra.',
        },
        {
          type: 'list',
          items: [
            'Cathode là điện cực nối với cực âm của nguồn điện. Các cation di chuyển về cathode; tại cathode xảy ra quá trình khử.',
            'Anode là điện cực nối với cực dương của nguồn điện. Các anion di chuyển về anode; tại anode xảy ra quá trình oxi hoá.',
            'Khi điện phân dung dịch, nước cũng có thể bị khử ở cathode ($2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$) hoặc bị oxi hoá ở anode ($2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dấu của điện cực',
          text: 'Trong pin Galvani, anode là cực âm và cathode là cực dương. Trong bình điện phân thì ngược lại: anode là cực dương, cathode là cực âm. Ở cả hai, anode luôn là nơi xảy ra quá trình oxi hoá và cathode là nơi xảy ra quá trình khử.',
        },
      ],
    },
    {
      heading: 'Điện phân nóng chảy và điện phân dung dịch',
      blocks: [
        {
          type: 'p',
          text: 'Điện phân sodium chloride nóng chảy (điện cực trơ): ở cathode $\\mathrm{Na^+} + 1e \\longrightarrow \\mathrm{Na}$; ở anode $2\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2e$.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaCl} \\xrightarrow{\\text{đpnc}} 2\\mathrm{Na} + \\mathrm{Cl_2}',
        },
        {
          type: 'p',
          text: 'Điện phân dung dịch sodium chloride: ion $\\mathrm{Na^+}$ có tính oxi hoá rất yếu nên nước bị khử ở cathode; ion $\\mathrm{Cl^-}$ bị oxi hoá ở anode.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaCl} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd, có màng ngăn}} 2\\mathrm{NaOH} + \\mathrm{H_2} + \\mathrm{Cl_2}',
        },
        {
          type: 'p',
          text: 'Nếu không có màng ngăn, $\\mathrm{Cl_2}$ sinh ra ở anode tác dụng với NaOH sinh ra ở cathode: $\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\longrightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$. Dung dịch thu được là nước Javel.',
        },
      ],
    },
    {
      heading: 'Thứ tự điện phân ở các điện cực',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ở cathode',
          text: 'Chất có tính oxi hoá mạnh hơn bị khử trước. Với các ion thường gặp: $\\mathrm{Au^{3+}} > \\mathrm{Ag^+} > \\mathrm{Cu^{2+}} > \\mathrm{H^+} > \\mathrm{H_2O}$. Trong dung dịch, các ion kim loại mạnh như $\\mathrm{K^+}$, $\\mathrm{Na^+}$, $\\mathrm{Mg^{2+}}$, $\\mathrm{Al^{3+}}$ không bị khử mà nước bị khử.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ở anode (điện cực trơ)',
          text: 'Chất có tính khử mạnh hơn bị oxi hoá trước: $\\mathrm{I^-} > \\mathrm{Br^-} > \\mathrm{Cl^-} > \\mathrm{H_2O}$. Các anion như $\\mathrm{SO_4^{2-}}$, $\\mathrm{NO_3^-}$, $\\mathrm{CO_3^{2-}}$, $\\mathrm{PO_4^{3-}}$, $\\mathrm{F^-}$ thường không bị điện phân trong dung dịch, khi đó nước bị oxi hoá.',
        },
        {
          type: 'p',
          text: 'Có thể dựa vào thế điện cực chuẩn hoặc vị trí trong dãy điện hoá để so sánh tính oxi hoá, tính khử. Ngoài ra thứ tự điện phân còn phụ thuộc vào vật liệu, bề mặt điện cực và việc tạo thành chất khí.',
        },
        {
          type: 'table',
          caption: 'Điện phân dung dịch một số muối với điện cực trơ',
          head: ['Dung dịch', 'Cathode', 'Anode', 'Phương trình điện phân'],
          rows: [
            [
              '$\\mathrm{CuSO_4}$',
              '$\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$',
              '$2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$',
              '$2\\mathrm{CuSO_4} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{Cu} + \\mathrm{O_2} + 2\\mathrm{H_2SO_4}$',
            ],
            [
              '$\\mathrm{CuCl_2}$',
              '$\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$',
              '$2\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2e$',
              '$\\mathrm{CuCl_2} \\longrightarrow \\mathrm{Cu} + \\mathrm{Cl_2}$',
            ],
            [
              '$\\mathrm{AgNO_3}$',
              '$\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$',
              '$2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$',
              '$4\\mathrm{AgNO_3} + 2\\mathrm{H_2O} \\longrightarrow 4\\mathrm{Ag} + \\mathrm{O_2} + 4\\mathrm{HNO_3}$',
            ],
            [
              '$\\mathrm{Na_2SO_4}$',
              '$2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$',
              '$2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$',
              '$2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{H_2} + \\mathrm{O_2}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mở rộng: lượng chất thu được',
          text: 'Dòng điện cường độ $I$ (A) chạy trong thời gian $t$ (s) mang số mol electron $n_e = \\dfrac{It}{F}$, với hằng số Faraday $F = 96\\,500$ C/mol. Từ $n_e$ và quá trình ở điện cực tính được lượng chất thoát ra, ví dụ $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$ cho $n_{\\mathrm{Cu}} = \\dfrac{n_e}{2}$.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của điện phân',
      blocks: [
        {
          type: 'list',
          items: [
            'Điều chế kim loại: các kim loại hoạt động mạnh (Na, K, Mg, Ca, Al) được điều chế bằng cách điện phân nóng chảy hợp chất ion của chúng; nhiều kim loại trung bình và yếu được điều chế bằng điện phân dung dịch muối.',
            'Sản xuất nhôm: điện phân $\\mathrm{Al_2O_3}$ nóng chảy có thêm cryolite ($\\mathrm{Na_3AlF_6}$) để hạ nhiệt độ nóng chảy, tăng khả năng dẫn điện và tạo lớp bảo vệ nhôm khỏi bị oxi hoá: $2\\mathrm{Al_2O_3} \\xrightarrow{\\text{đpnc}} 4\\mathrm{Al} + 3\\mathrm{O_2}$. Anode than chì bị oxygen đốt cháy dần nên phải thay định kì.',
            'Tinh chế kim loại: kim loại thô (Cu, Zn, Ni, Ag, Au,...) làm anode, kim loại tinh khiết làm cathode, dung dịch muối của kim loại đó là chất điện li. Với copper: anode $\\mathrm{Cu} \\longrightarrow \\mathrm{Cu^{2+}} + 2e$, cathode $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$; tạp chất kém hoạt động lắng xuống đáy thành bùn anode.',
            'Mạ điện: vật cần mạ làm cathode, kim loại dùng để mạ (Cr, Ni, Cu, Ag, Au,...) làm anode, dung dịch muối của kim loại mạ là chất điện li. Lớp mạ vừa trang trí vừa chống ăn mòn.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bình điện phân ảo',
    instruction:
      'Chọn chất điện phân (nóng chảy hay dung dịch). Quan sát những tiểu phân có mặt ở mỗi điện cực, tiểu phân nào phản ứng trước và sản phẩm thoát ra. Sau đó kéo thanh cường độ dòng điện và thời gian để xem số mol electron và lượng chất thu được ở hai điện cực.',
  },
  examples: [
    {
      problem:
        'Viết các quá trình xảy ra ở điện cực và phương trình điện phân dung dịch $\\mathrm{CuSO_4}$ với điện cực trơ.',
      steps: [
        'Ở cathode có $\\mathrm{Cu^{2+}}$ và $\\mathrm{H_2O}$; $\\mathrm{Cu^{2+}}$ có tính oxi hoá mạnh hơn nên bị khử trước: $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$.',
        'Ở anode có $\\mathrm{SO_4^{2-}}$ và $\\mathrm{H_2O}$; $\\mathrm{SO_4^{2-}}$ không bị oxi hoá nên nước bị oxi hoá: $2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$.',
        'Cân bằng electron (nhân quá trình ở cathode với 2) rồi cộng lại: $2\\mathrm{Cu^{2+}} + 2\\mathrm{H_2O} \\longrightarrow 2\\mathrm{Cu} + \\mathrm{O_2} + 4\\mathrm{H^+}$.',
      ],
      answer:
        '$2\\mathrm{CuSO_4} + 2\\mathrm{H_2O} \\xrightarrow{\\text{đpdd}} 2\\mathrm{Cu} + \\mathrm{O_2} + 2\\mathrm{H_2SO_4}$.',
    },
    {
      problem:
        'Điện phân dung dịch chứa $\\mathrm{Cu(NO_3)_2}$ 0,1 M và $\\mathrm{AgNO_3}$ 0,1 M với điện cực trơ. Quá trình khử nào xảy ra đầu tiên ở cathode? Khi nào nước bắt đầu bị khử?',
      steps: [
        'Ở cathode có $\\mathrm{Ag^+}$, $\\mathrm{Cu^{2+}}$ và $\\mathrm{H_2O}$, thứ tự tính oxi hoá $\\mathrm{Ag^+} > \\mathrm{Cu^{2+}} > \\mathrm{H_2O}$.',
        'Đầu tiên: $\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$. Hết $\\mathrm{Ag^+}$ mới đến $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$.',
        'Chỉ khi $\\mathrm{Cu^{2+}}$ hết, nước mới bị khử: $2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$.',
      ],
      answer:
        '$\\mathrm{Ag^+}$ bị khử đầu tiên; nước bị khử sau khi $\\mathrm{Ag^+}$ và $\\mathrm{Cu^{2+}}$ đã hết.',
    },
    {
      problem:
        'Điện phân dung dịch $\\mathrm{CuSO_4}$ dư bằng điện cực trơ với dòng điện $I = 9{,}65$ A trong $2\\,000$ giây. Tính khối lượng copper bám vào cathode và thể tích khí thoát ra ở anode (đkc).',
      steps: [
        '$n_e = \\dfrac{It}{F} = \\dfrac{9{,}65 \\cdot 2\\,000}{96\\,500} = 0{,}2$ mol.',
        'Cathode: $\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$, $n_{\\mathrm{Cu}} = 0{,}1$ mol, $m_{\\mathrm{Cu}} = 0{,}1 \\cdot 64 = 6{,}4$ g.',
        'Anode: $2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$, $n_{\\mathrm{O_2}} = \\dfrac{0{,}2}{4} = 0{,}05$ mol, $V = 0{,}05 \\cdot 24{,}79 \\approx 1{,}24$ L.',
      ],
      answer: '$m_{\\mathrm{Cu}} = 6{,}4$ g; $V_{\\mathrm{O_2}} \\approx 1{,}24$ L.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Điện phân dung dịch NaCl bằng điện cực trơ, có màng ngăn. Khí thoát ra ở cathode là',
      options: [
        '$\\mathrm{H_2}$',
        '$\\mathrm{Cl_2}$',
        '$\\mathrm{O_2}$',
        'không có khí, Na bám vào cathode',
      ],
      answer: 0,
      hints: [
        'Trong dung dịch, $\\mathrm{Na^+}$ có tính oxi hoá yếu hơn nước.',
        'Ở cathode xảy ra quá trình khử.',
      ],
      solution:
        'Nước bị khử ở cathode: $2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$, khí thoát ra là $\\mathrm{H_2}$; $\\mathrm{Cl_2}$ thoát ra ở anode.',
    },
    {
      type: 'choice',
      prompt: 'Điện phân dung dịch $\\mathrm{CuSO_4}$ với điện cực trơ, ở anode thu được',
      options: [
        'khí $\\mathrm{O_2}$',
        'khí $\\mathrm{SO_2}$',
        'kim loại Cu',
        'khí $\\mathrm{H_2}$',
      ],
      answer: 0,
      hints: ['Ion $\\mathrm{SO_4^{2-}}$ không bị oxi hoá trong dung dịch.'],
      solution:
        'Nước bị oxi hoá ở anode: $2\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\mathrm{H^+} + 4e$, thu được khí $\\mathrm{O_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào sau đây được điều chế bằng phương pháp điện phân nóng chảy?',
      options: ['Na', 'Al', 'Mg', 'Cu', 'Ag'],
      answers: [0, 1, 2],
      hints: ['Kim loại hoạt động mạnh, ion của nó không bị khử trong dung dịch.'],
      solution:
        'Na, Mg, Al là kim loại hoạt động mạnh, chỉ điều chế được bằng điện phân nóng chảy hợp chất ion (NaCl, $\\mathrm{MgCl_2}$, $\\mathrm{Al_2O_3}$). Cu, Ag có thể điều chế bằng điện phân dung dịch muối.',
    },
    {
      type: 'order',
      prompt:
        'Điện phân dung dịch chứa $\\mathrm{AgNO_3}$, $\\mathrm{Cu(NO_3)_2}$ và $\\mathrm{NaNO_3}$ với điện cực trơ. Sắp xếp các quá trình ở cathode theo thứ tự xảy ra.',
      items: [
        '$\\mathrm{Cu^{2+}} + 2e \\longrightarrow \\mathrm{Cu}$',
        '$2\\mathrm{H_2O} + 2e \\longrightarrow \\mathrm{H_2} + 2\\mathrm{OH^-}$',
        '$\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$',
      ],
      answer: [2, 0, 1],
      hints: [
        'Chất có tính oxi hoá mạnh hơn bị khử trước.',
        '$\\mathrm{Na^+}$ không bị khử trong dung dịch.',
      ],
      solution:
        'Thứ tự tính oxi hoá $\\mathrm{Ag^+} > \\mathrm{Cu^{2+}} > \\mathrm{H_2O}$, nên Ag bám trước, rồi đến Cu, sau cùng nước bị khử tạo $\\mathrm{H_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Điện phân dung dịch $\\mathrm{CuSO_4}$ dư với điện cực trơ, dòng điện 5 A trong $3\\,860$ giây ($F = 96\\,500$ C/mol). Tính khối lượng copper bám vào cathode (g).',
      answer: 6.4,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$n_e = \\dfrac{It}{F}$.', 'Mỗi mol Cu cần 2 mol electron.'],
      solution:
        '$n_e = \\dfrac{5 \\cdot 3\\,860}{96\\,500} = 0{,}2$ mol; $n_{\\mathrm{Cu}} = 0{,}1$ mol; $m = 0{,}1 \\cdot 64 = 6{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Điện phân NaCl nóng chảy với dòng điện $9{,}65$ A trong $1\\,000$ giây ($F = 96\\,500$ C/mol). Tính thể tích khí chlorine thoát ra ở anode (L, đkc, lấy $24{,}79$ L/mol), làm tròn đến hai chữ số thập phân.',
      answer: 1.24,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$n_e = \\dfrac{9{,}65 \\cdot 1\\,000}{96\\,500}$.',
        '$2\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2e$: mỗi mol $\\mathrm{Cl_2}$ ứng với 2 mol electron.',
      ],
      solution:
        '$n_e = 0{,}1$ mol; $n_{\\mathrm{Cl_2}} = 0{,}05$ mol; $V = 0{,}05 \\cdot 24{,}79 \\approx 1{,}24$ L.',
    },
    {
      type: 'text',
      prompt:
        'Điện phân dung dịch NaCl không có màng ngăn, chlorine sinh ra phản ứng với NaOH. Dung dịch chứa NaCl và NaClO thu được có tên thông dụng là gì?',
      accept: ['nước Javel', 'Javel', 'nước Gia-ven', 'nước Giaven'],
      hints: ['Đây là chất tẩy màu, sát khuẩn quen thuộc.'],
      solution:
        '$\\mathrm{Cl_2} + 2\\mathrm{NaOH} \\longrightarrow \\mathrm{NaCl} + \\mathrm{NaClO} + \\mathrm{H_2O}$; dung dịch thu được là nước Javel.',
    },
    {
      type: 'choice',
      prompt: 'Khi mạ bạc cho một chiếc thìa bằng đồng, cách bố trí đúng là',
      options: [
        'thìa làm cathode, thanh bạc làm anode, dung dịch $\\mathrm{AgNO_3}$',
        'thìa làm anode, thanh bạc làm cathode, dung dịch $\\mathrm{AgNO_3}$',
        'thìa làm cathode, thanh bạc làm anode, dung dịch $\\mathrm{CuSO_4}$',
        'thìa làm anode, thanh bạc làm cathode, dung dịch $\\mathrm{CuSO_4}$',
      ],
      answer: 0,
      hints: [
        'Lớp bạc hình thành do ion $\\mathrm{Ag^+}$ bị khử trên vật cần mạ.',
        'Quá trình khử xảy ra ở cathode.',
      ],
      solution:
        'Vật cần mạ (thìa) làm cathode, nơi $\\mathrm{Ag^+} + 1e \\longrightarrow \\mathrm{Ag}$; thanh bạc làm anode tan dần ($\\mathrm{Ag} \\longrightarrow \\mathrm{Ag^+} + 1e$) bù lại ion bạc; chất điện li là dung dịch muối bạc.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về bình điện phân là đúng?',
      options: [
        'Anode nối với cực dương của nguồn và tại đó xảy ra quá trình oxi hoá',
        'Anode nối với cực âm của nguồn và tại đó xảy ra quá trình oxi hoá',
        'Cathode nối với cực dương của nguồn và tại đó xảy ra quá trình khử',
        'Cation di chuyển về anode',
      ],
      answer: 0,
      hints: ['Anion bị hút về điện cực dương và nhường electron ở đó.'],
      solution:
        'Trong bình điện phân, anode là cực dương, anion di chuyển về anode và bị oxi hoá (hoặc nước bị oxi hoá); cathode là cực âm, cation di chuyển về cathode và bị khử.',
    },
  ],
  takeaways: [
    'Điện phân dùng dòng điện một chiều để thực hiện phản ứng oxi hoá – khử không tự xảy ra.',
    'Cathode (cực âm): quá trình khử; anode (cực dương): quá trình oxi hoá.',
    'Cathode: $\\mathrm{Ag^+} > \\mathrm{Cu^{2+}} > \\mathrm{H^+} > \\mathrm{H_2O}$; ion K⁺, Na⁺, Mg²⁺, Al³⁺ không bị khử trong dung dịch.',
    'Anode trơ: $\\mathrm{I^-} > \\mathrm{Br^-} > \\mathrm{Cl^-} > \\mathrm{H_2O}$; $\\mathrm{SO_4^{2-}}$, $\\mathrm{NO_3^-}$ không bị oxi hoá trong dung dịch.',
    'Ứng dụng: điều chế kim loại (Na, Mg, Al bằng điện phân nóng chảy), tinh chế kim loại, mạ điện.',
  ],
};
