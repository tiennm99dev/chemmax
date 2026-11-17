/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại trong tự nhiên chủ yếu ở dạng hợp chất trong quặng; nguyên tắc tách kim loại là khử ion kim loại thành kim loại bằng điện phân nóng chảy, nhiệt luyện, thuỷ luyện hoặc điện phân dung dịch tuỳ độ hoạt động của kim loại; tái chế kim loại.',
  intro:
    'Trong tự nhiên, trừ vàng, bạc, platinum, các kim loại thường tồn tại ở dạng hợp chất trong quặng. Người ta lấy nhôm từ quặng bauxite, sắt từ quặng hematite, đồng từ quặng chalcopyrite. Làm thế nào để tách được kim loại từ quặng, và vì sao mỗi kim loại lại cần một cách tách khác nhau?',
  objectives: [
    'Nêu được trạng thái tự nhiên của kim loại và một số quặng phổ biến.',
    'Trình bày được nguyên tắc tách kim loại và các phương pháp tách kim loại: nhiệt luyện, thuỷ luyện, điện phân.',
    'Chọn được phương pháp tách phù hợp dựa vào mức độ hoạt động của kim loại.',
    'Nêu được ý nghĩa và quy trình chung của việc tái chế kim loại.',
  ],
  sections: [
    {
      heading: 'Kim loại trong tự nhiên',
      blocks: [
        {
          type: 'p',
          text: 'Một số kim loại kém hoạt động như vàng, bạc, platinum có thể tồn tại ở dạng đơn chất. Hầu hết các kim loại khác tồn tại ở dạng hợp chất (oxide, muối sulfide, carbonate, chloride, ...) trong quặng.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quặng',
          text: 'Quặng là đất, đá chứa khoáng vật của kim loại hoặc hợp chất kim loại với trữ lượng đủ lớn để khai thác. Quặng thường lẫn tạp chất; cách tách kim loại phụ thuộc vào tính chất của kim loại và của quặng.',
        },
        {
          type: 'table',
          head: ['Kim loại', 'Quặng', 'Thành phần chính'],
          rows: [
            ['Al', 'bauxite', '$\\mathrm{Al_2O_3 \\cdot 2H_2O}$'],
            ['Fe', 'hematite', '$\\mathrm{Fe_2O_3}$'],
            ['Fe', 'magnetite', '$\\mathrm{Fe_3O_4}$'],
            ['Fe', 'pyrite', '$\\mathrm{FeS_2}$'],
            ['Zn', 'zinc blende', '$\\mathrm{ZnS}$'],
            ['Cu', 'chalcopyrite', '$\\mathrm{CuFeS_2}$'],
          ],
          caption: 'Một số quặng kim loại phổ biến.',
        },
      ],
    },
    {
      heading: 'Nguyên tắc tách kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Trong hợp chất, kim loại tồn tại ở dạng ion dương. Tách kim loại là khử ion kim loại thành nguyên tử kim loại:',
        },
        { type: 'tex', tex: '\\mathrm{M^{n+}} + ne \\longrightarrow \\mathrm{M}' },
        {
          type: 'p',
          text: 'Kim loại càng hoạt động (tính khử càng mạnh, $E^\\circ$ càng nhỏ) thì ion của nó càng khó bị khử và cần phương pháp càng mạnh. Vì vậy, phương pháp tách được chọn theo mức độ hoạt động của kim loại.',
        },
      ],
    },
    {
      heading: 'Các phương pháp tách kim loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điện phân nóng chảy',
          text: 'Dùng dòng điện khử ion kim loại trong hợp chất (oxide, chloride) ở trạng thái nóng chảy. Áp dụng cho các kim loại hoạt động mạnh như K, Na, Ca, Mg, Al.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{NaCl} \\xrightarrow{\\text{đpnc}} 2\\mathrm{Na} + \\mathrm{Cl_2} \\qquad 2\\mathrm{Al_2O_3} \\xrightarrow{\\text{đpnc, cryolite}} 4\\mathrm{Al} + 3\\mathrm{O_2}',
        },
        {
          type: 'p',
          text: 'Khi điện phân $\\mathrm{Al_2O_3}$ nóng chảy: ở cathode (cực âm) $\\mathrm{Al^{3+}} + 3e \\longrightarrow \\mathrm{Al}$; ở anode (cực dương) $2\\mathrm{O^{2-}} \\longrightarrow \\mathrm{O_2} + 4e$. $\\mathrm{Al_2O_3}$ nóng chảy ở khoảng 2 072 °C; trộn thêm cryolite ($\\mathrm{Na_3AlF_6}$) hạ nhiệt độ nóng chảy của hỗn hợp xuống khoảng 1 000 °C, giúp tiết kiệm năng lượng.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiệt luyện',
          text: 'Dùng chất khử như C, CO, $\\mathrm{H_2}$ hoặc Al khử ion kim loại trong oxide ở nhiệt độ cao. Áp dụng cho các kim loại hoạt động trung bình và yếu như Zn, Fe, Sn, Pb, Cu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2} \\qquad \\mathrm{ZnO} + \\mathrm{C} \\xrightarrow{t^\\circ} \\mathrm{Zn} + \\mathrm{CO}',
        },
        {
          type: 'p',
          text: 'Với quặng sulfide, trước hết đốt quặng để chuyển thành oxide, ví dụ $2\\mathrm{ZnS} + 3\\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{ZnO} + 2\\mathrm{SO_2}$, rồi mới khử oxide.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thuỷ luyện',
          text: 'Dùng dung dịch thích hợp ($\\mathrm{H_2SO_4}$, NaOH, NaCN, ...) hoà tan kim loại hoặc hợp chất của kim loại, tách phần không tan, rồi dùng kim loại có tính khử mạnh hơn (Fe, Zn, ...) khử ion kim loại trong dung dịch. Áp dụng cho các kim loại hoạt động yếu như Cu, Ag, Au.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điện phân dung dịch',
          text: 'Điện phân dung dịch muối của kim loại hoạt động trung bình hoặc yếu để thu kim loại ở cathode, ví dụ $\\mathrm{CuCl_2} \\xrightarrow{\\text{đpdd}} \\mathrm{Cu} + \\mathrm{Cl_2}$. Phương pháp này còn dùng để tinh chế kim loại (Cu, Zn): anode làm bằng kim loại thô, dung dịch điện phân là muối của kim loại đó, kim loại tinh khiết bám ở cathode.',
        },
        {
          type: 'table',
          head: ['Kim loại', 'Mức độ hoạt động', 'Phương pháp thường dùng'],
          rows: [
            ['K, Na, Ca, Mg, Al', 'mạnh', 'điện phân nóng chảy'],
            ['Zn, Fe, Sn, Pb', 'trung bình', 'nhiệt luyện; điện phân dung dịch'],
            ['Cu, Ag, Au', 'yếu', 'thuỷ luyện; điện phân dung dịch; nhiệt luyện (Cu)'],
          ],
        },
      ],
    },
    {
      heading: 'Tái chế kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Quặng kim loại là tài nguyên không tái tạo. Tái chế kim loại giúp đảm bảo nguồn cung, tăng giá trị kinh tế, tiết kiệm năng lượng, giảm khai thác quặng, bảo vệ môi trường và phát triển bền vững.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Thu gom, phân loại phế liệu kim loại.',
            'Xử lí sơ bộ (làm sạch, cắt nhỏ, ép).',
            'Phối trộn phế liệu theo thành phần.',
            'Nấu chảy và tinh chế.',
            'Đúc thành phôi, chế tạo và gia công sản phẩm mới.',
          ],
        },
        {
          type: 'list',
          items: [
            'Nhôm: tái chế nhiều lần mà không mất tính chất, tốn ít năng lượng hơn nhiều so với sản xuất nhôm từ quặng bauxite.',
            'Đồng: tái chế nhiều lần với hao hụt ít; phần lớn đồng từng khai thác vẫn đang được sử dụng.',
            'Sắt: là kim loại được tái chế nhiều nhất; sắt thép phế liệu dùng để luyện thép phục vụ xây dựng, sản xuất ô tô.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Chọn phương pháp tách kim loại',
    instruction:
      'Chọn một kim loại, quan sát vị trí của nó trên dãy hoạt động, rồi chọn phương pháp tách. Đọc nhận xét: phương pháp có phù hợp không và vì sao; với phương pháp phù hợp, xem phương trình hoá học minh hoạ. Thử hết 12 kim loại.',
  },
  examples: [
    {
      problem:
        'Hãy chọn phương pháp tách mỗi kim loại sau và viết phương trình hoá học minh hoạ: a) Mg từ $\\mathrm{MgCl_2}$; b) Fe từ $\\mathrm{Fe_2O_3}$; c) Cu từ dung dịch $\\mathrm{CuSO_4}$.',
      steps: [
        'Mg hoạt động mạnh: điện phân nóng chảy $\\mathrm{MgCl_2} \\xrightarrow{\\text{đpnc}} \\mathrm{Mg} + \\mathrm{Cl_2}$.',
        'Fe hoạt động trung bình: nhiệt luyện $\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$.',
        'Cu hoạt động yếu, đang ở dạng dung dịch: thuỷ luyện $\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$ (hoặc điện phân dung dịch).',
      ],
      answer: 'a) Điện phân nóng chảy; b) nhiệt luyện; c) thuỷ luyện.',
    },
    {
      problem:
        'Khử hoàn toàn 16 g $\\mathrm{Fe_2O_3}$ bằng khí CO dư ở nhiệt độ cao. Tính khối lượng Fe thu được và thể tích khí CO tối thiểu cần dùng ở điều kiện chuẩn (24,79 L/mol).',
      steps: [
        '$\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$.',
        '$n_{\\mathrm{Fe_2O_3}} = \\dfrac{16}{160} = 0{,}1$ mol.',
        '$n_{\\mathrm{Fe}} = 0{,}2$ mol $\\Rightarrow m_{\\mathrm{Fe}} = 0{,}2 \\cdot 56 = 11{,}2$ g.',
        '$n_{\\mathrm{CO}} = 0{,}3$ mol $\\Rightarrow V_{\\mathrm{CO}} = 0{,}3 \\cdot 24{,}79 = 7{,}437$ L.',
      ],
      answer: '$m_{\\mathrm{Fe}} = 11{,}2$ g; $V_{\\mathrm{CO}} = 7{,}437$ L.',
    },
    {
      problem:
        'Vì sao không thể điều chế nhôm bằng cách dùng CO khử $\\mathrm{Al_2O_3}$, cũng không thể điện phân dung dịch $\\mathrm{AlCl_3}$?',
      steps: [
        'Al là kim loại hoạt động mạnh ($E^\\circ_{\\mathrm{Al^{3+}/Al}} = -1{,}676$ V), ion $\\mathrm{Al^{3+}}$ rất khó bị khử; CO không khử được $\\mathrm{Al_2O_3}$.',
        'Khi điện phân dung dịch $\\mathrm{AlCl_3}$, nước bị khử ở cathode trước ion $\\mathrm{Al^{3+}}$, tạo khí $\\mathrm{H_2}$, không thu được Al.',
        'Vì vậy nhôm được sản xuất bằng điện phân $\\mathrm{Al_2O_3}$ nóng chảy (có cryolite).',
      ],
      answer: 'Ion $\\mathrm{Al^{3+}}$ chỉ bị khử khi điện phân nóng chảy.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tắc chung để tách kim loại từ hợp chất là',
      options: [
        'khử ion kim loại thành nguyên tử kim loại',
        'oxi hoá ion kim loại thành nguyên tử kim loại',
        'oxi hoá nguyên tử kim loại thành ion kim loại',
        'hoà tan quặng vào nước rồi lọc lấy kim loại',
      ],
      answer: 0,
      hints: [
        'Trong hợp chất, kim loại ở dạng ion dương. Muốn có kim loại, ion phải nhận hay nhường electron?',
      ],
      solution:
        'Tách kim loại là khử ion kim loại: $\\mathrm{M^{n+}} + ne \\longrightarrow \\mathrm{M}$.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào thường được điều chế bằng phương pháp điện phân nóng chảy?',
      options: ['Na', 'Mg', 'Al', 'Fe', 'Cu', 'Zn'],
      answers: [0, 1, 2],
      hints: [
        'Điện phân nóng chảy dành cho kim loại hoạt động mạnh, từ K đến Al trong dãy hoạt động.',
      ],
      solution:
        'Na, Mg, Al là kim loại hoạt động mạnh nên được điều chế bằng điện phân nóng chảy; Fe, Zn, Cu được điều chế bằng nhiệt luyện, thuỷ luyện hoặc điện phân dung dịch.',
    },
    {
      type: 'choice',
      prompt: 'Khí CO ở nhiệt độ cao khử được oxide nào sau đây thành kim loại?',
      options: ['$\\mathrm{CuO}$', '$\\mathrm{Al_2O_3}$', '$\\mathrm{MgO}$', '$\\mathrm{CaO}$'],
      answer: 0,
      hints: ['Nhiệt luyện chỉ dùng cho oxide của kim loại đứng sau Al trong dãy hoạt động.'],
      solution:
        '$\\mathrm{CuO} + \\mathrm{CO} \\xrightarrow{t^\\circ} \\mathrm{Cu} + \\mathrm{CO_2}$. Oxide của Al, Mg, Ca không bị CO khử.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi quá trình với phương pháp tách kim loại tương ứng.',
      left: [
        '$\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$',
        '$\\mathrm{Zn} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}$',
        '$2\\mathrm{NaCl} \\xrightarrow{\\text{đpnc}} 2\\mathrm{Na} + \\mathrm{Cl_2}$',
        '$\\mathrm{CuCl_2} \\xrightarrow{\\text{đpdd}} \\mathrm{Cu} + \\mathrm{Cl_2}$',
      ],
      right: ['Nhiệt luyện', 'Thuỷ luyện', 'Điện phân nóng chảy', 'Điện phân dung dịch'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phương pháp nào dùng một kim loại mạnh hơn để khử ion trong dung dịch?'],
      solution:
        'Khử oxide bằng CO ở nhiệt độ cao: nhiệt luyện; Zn đẩy Cu khỏi dung dịch muối: thuỷ luyện; điện phân NaCl nóng chảy: điện phân nóng chảy; điện phân dung dịch $\\mathrm{CuCl_2}$: điện phân dung dịch.',
    },
    {
      type: 'choice',
      prompt:
        'Vai trò chính của cryolite ($\\mathrm{Na_3AlF_6}$) khi điện phân nóng chảy $\\mathrm{Al_2O_3}$ là',
      options: [
        'hạ nhiệt độ nóng chảy của hỗn hợp, tiết kiệm năng lượng',
        'khử ion $\\mathrm{Al^{3+}}$ thành Al',
        'cung cấp thêm ion $\\mathrm{Al^{3+}}$ cho cathode',
        'oxi hoá oxygen ở anode',
      ],
      answer: 0,
      hints: [
        '$\\mathrm{Al_2O_3}$ nóng chảy ở khoảng 2 072 °C; hỗn hợp với cryolite nóng chảy ở khoảng 1 000 °C.',
      ],
      solution:
        'Cryolite hạ nhiệt độ nóng chảy từ khoảng 2 072 °C xuống khoảng 1 000 °C, giúp tiết kiệm năng lượng (ngoài ra còn tăng độ dẫn điện của chất điện li).',
    },
    {
      type: 'number',
      prompt:
        'Khử hoàn toàn 8 g CuO bằng khí $\\mathrm{H_2}$ dư ở nhiệt độ cao. Khối lượng Cu thu được là bao nhiêu gam? (Cu = 64, O = 16)',
      answer: 6.4,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$\\mathrm{CuO} + \\mathrm{H_2} \\xrightarrow{t^\\circ} \\mathrm{Cu} + \\mathrm{H_2O}$.',
        '$M_{\\mathrm{CuO}} = 80$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{CuO}} = \\dfrac{8}{80} = 0{,}1$ mol $= n_{\\mathrm{Cu}}$, $m_{\\mathrm{Cu}} = 0{,}1 \\cdot 64 = 6{,}4$ g.',
    },
    {
      type: 'number',
      prompt:
        'Điện phân nóng chảy $\\mathrm{Al_2O_3}$ thu được 5,4 tấn Al. Khối lượng $\\mathrm{Al_2O_3}$ đã bị điện phân là bao nhiêu tấn (hiệu suất 100%)?',
      answer: 10.2,
      tolerance: 0.001,
      unit: 'tấn',
      hints: [
        '$2\\mathrm{Al_2O_3} \\longrightarrow 4\\mathrm{Al} + 3\\mathrm{O_2}$: cứ 102 phần khối lượng $\\mathrm{Al_2O_3}$ cho 54 phần khối lượng Al.',
      ],
      solution: '$m_{\\mathrm{Al_2O_3}} = 5{,}4 \\cdot \\dfrac{102}{54} = 10{,}2$ tấn.',
    },
    {
      type: 'choice',
      prompt: 'Kim loại nào sau đây có thể tìm thấy ở dạng đơn chất trong tự nhiên?',
      options: ['Au', 'Al', 'Na', 'Fe'],
      answer: 0,
      hints: ['Chỉ kim loại rất kém hoạt động mới không bị oxi hoá trong tự nhiên.'],
      solution:
        'Vàng (cùng với bạc, platinum) kém hoạt động nên tồn tại được ở dạng đơn chất; Al, Na, Fe tồn tại ở dạng hợp chất.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào về tái chế kim loại là đúng?',
      options: [
        'Tái chế nhôm tốn ít năng lượng hơn nhiều so với sản xuất nhôm từ quặng.',
        'Tái chế kim loại giúp giảm khai thác quặng, bảo vệ môi trường.',
        'Sắt là kim loại được tái chế nhiều nhất.',
        'Kim loại chỉ tái chế được một lần rồi mất hết tính chất.',
      ],
      answers: [0, 1, 2],
      hints: ['Nhôm, đồng có thể tái chế nhiều lần mà không mất tính chất.'],
      solution:
        'Ba phát biểu đầu đúng. Phát biểu cuối sai: nhôm, đồng, sắt có thể tái chế nhiều lần.',
    },
  ],
  takeaways: [
    'Trừ Au, Ag, Pt, hầu hết kim loại tồn tại ở dạng hợp chất trong quặng.',
    'Nguyên tắc tách kim loại: khử ion kim loại $\\mathrm{M^{n+}} + ne \\longrightarrow \\mathrm{M}$.',
    'Kim loại mạnh (K đến Al): điện phân nóng chảy. Kim loại trung bình, yếu: nhiệt luyện (C, CO, $\\mathrm{H_2}$, Al), điện phân dung dịch. Kim loại yếu (Cu, Ag, Au): thuỷ luyện.',
    'Tái chế kim loại: thu gom, phân loại, xử lí, nấu chảy, tinh chế, đúc; tiết kiệm tài nguyên, năng lượng và bảo vệ môi trường.',
  ],
};
