/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phân đạm, phân lân, phân kali, phân hỗn hợp và phân phức hợp: thành phần, độ dinh dưỡng, quy trình sản xuất, cách sử dụng và bảo quản; tính lượng phân cần bón.',
  intro:
    'Một nhà máy đạm mỗi năm biến khí nitrogen trong không khí thành hàng trăm nghìn tấn urea. Người nông dân thì phải quyết định: mua urea, DAP hay NPK, mỗi loại bao nhiêu kilôgam để ruộng lúa có đủ đạm, lân, kali mà không lãng phí.',
  objectives: [
    'Nêu được thành phần, độ dinh dưỡng của một số phân đạm, phân lân, phân kali, phân hỗn hợp và phân phức hợp.',
    'Viết được phương trình hoá học của một số quá trình sản xuất phân bón vô cơ.',
    'Trình bày được cách sử dụng, bảo quản phân bón vô cơ an toàn, hiệu quả.',
    'Tính được độ dinh dưỡng của một chất và lượng phân cần bón theo nhu cầu của cây.',
  ],
  sections: [
    {
      heading: 'Phân loại phân bón vô cơ',
      blocks: [
        {
          type: 'p',
          text: 'Phân bón vô cơ chứa chất dinh dưỡng ở dạng muối hoặc hợp chất vô cơ. Theo số nguyên tố dinh dưỡng đa lượng (N, P, K) có trong phân, phân vô cơ được chia như sau.',
        },
        {
          type: 'table',
          head: ['Loại', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Phân đơn',
              'Chứa một nguyên tố đa lượng.',
              'Phân đạm urea, phân lân superphosphate, phân kali $\\mathrm{KCl}$.',
            ],
            [
              'Phân phức hợp',
              'Chứa từ hai nguyên tố đa lượng trở lên trong cùng một hợp chất, tạo ra bằng phản ứng hoá học.',
              'Ammophos ($\\mathrm{NH_4H_2PO_4}$ và $\\mathrm{(NH_4)_2HPO_4}$), $\\mathrm{KNO_3}$.',
            ],
            [
              'Phân hỗn hợp',
              'Chứa từ hai nguyên tố đa lượng trở lên, tạo ra bằng cách trộn các loại phân với nhau.',
              'Phân NPK 16-16-8, 20-20-15; nitrophoska ($\\mathrm{(NH_4)_2HPO_4}$ và $\\mathrm{KNO_3}$).',
            ],
          ],
          caption: 'Phân loại theo số nguyên tố dinh dưỡng đa lượng',
        },
        {
          type: 'p',
          text: 'Ngoài ra còn có phân trung lượng (chứa Ca, Mg, S, Si) và phân vi lượng (chứa Zn, B, Cu, Mo…), thường bón với lượng nhỏ hoặc phun lên lá.',
        },
      ],
    },
    {
      heading: 'Phân đạm, phân lân, phân kali',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân đạm',
          text: 'Phân đạm cung cấp nitrogen cho cây dưới dạng ion ammonium $\\mathrm{NH_4^+}$ và ion nitrate $\\mathrm{NO_3^-}$. Độ dinh dưỡng tính theo $\\%\\mathrm{N}$.',
        },
        {
          type: 'table',
          head: ['Phân đạm', 'Công thức', '%N (chất nguyên chất)'],
          rows: [
            ['Urea', '$\\mathrm{(NH_2)_2CO}$', '$46{,}67$'],
            ['Ammonium nitrate', '$\\mathrm{NH_4NO_3}$', '$35{,}00$'],
            ['Ammonium chloride', '$\\mathrm{NH_4Cl}$', '$26{,}17$'],
            ['Ammonium sulfate (SA)', '$\\mathrm{(NH_4)_2SO_4}$', '$21{,}21$'],
          ],
        },
        {
          type: 'p',
          text: 'Urea là phân đạm có độ dinh dưỡng cao nhất và dùng phổ biến nhất. Trong đất, nhờ enzyme urease của vi sinh vật, urea chuyển dần thành muối ammonium:',
        },
        { type: 'tex', tex: '\\mathrm{(NH_2)_2CO + 2H_2O \\longrightarrow (NH_4)_2CO_3}' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân lân',
          text: 'Phân lân cung cấp phosphorus cho cây dưới dạng ion phosphate (chủ yếu $\\mathrm{H_2PO_4^-}$). Độ dinh dưỡng tính theo $\\%\\mathrm{P_2O_5}$.',
        },
        {
          type: 'list',
          items: [
            'Superphosphate đơn: hỗn hợp $\\mathrm{Ca(H_2PO_4)_2}$ và $\\mathrm{CaSO_4}$, khoảng $16$ – $20\\%$ $\\mathrm{P_2O_5}$.',
            'Superphosphate kép: chỉ có $\\mathrm{Ca(H_2PO_4)_2}$, khoảng $40$ – $50\\%$ $\\mathrm{P_2O_5}$.',
            'Phân lân nung chảy: hỗn hợp phosphate và silicate của calcium, magnesium, khoảng $12$ – $14\\%$ $\\mathrm{P_2O_5}$; không tan trong nước, tan dần trong đất chua nên thích hợp với đất chua.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân kali',
          text: 'Phân kali cung cấp potassium cho cây dưới dạng ion $\\mathrm{K^+}$, chủ yếu là $\\mathrm{KCl}$ và $\\mathrm{K_2SO_4}$. Độ dinh dưỡng tính theo $\\%\\mathrm{K_2O}$; phân KCl thương phẩm khoảng $60\\%$ $\\mathrm{K_2O}$.',
        },
        { type: 'widget', name: 'do-dinh-duong' },
      ],
    },
    {
      heading: 'Quy trình sản xuất một số phân bón vô cơ',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên liệu của phân đạm là ammonia, tổng hợp theo quá trình Haber – Bosch từ nitrogen (tách từ không khí) và hydrogen (điều chế từ khí thiên nhiên hoặc than):',
        },
        {
          type: 'tex',
          tex: '\\mathrm{N_2 + 3H_2} \\xrightleftharpoons{t^\\circ,\\ p,\\ xt} \\mathrm{2NH_3}',
        },
        {
          type: 'p',
          text: 'Urea được sản xuất từ ammonia và carbon dioxide ở khoảng $180$ – $200\\ ^\\circ\\mathrm{C}$, áp suất khoảng $200$ atm; dung dịch urea sau đó được cô đặc và tạo hạt:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CO_2 + 2NH_3} \\xrightarrow{t^\\circ,\\ p} \\mathrm{(NH_2)_2CO + H_2O}',
        },
        {
          type: 'p',
          text: 'Superphosphate đơn được sản xuất bằng cách cho quặng phosphorite hoặc apatite (thành phần chính $\\mathrm{Ca_3(PO_4)_2}$) tác dụng với sulfuric acid đặc:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Ca_3(PO_4)_2 + 2H_2SO_4 \\longrightarrow Ca(H_2PO_4)_2 + 2CaSO_4}',
        },
        {
          type: 'p',
          text: 'Superphosphate kép được sản xuất qua hai giai đoạn: điều chế phosphoric acid, rồi cho acid này tác dụng với quặng. Vì không lẫn $\\mathrm{CaSO_4}$ nên độ dinh dưỡng cao hơn.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{Ca_3(PO_4)_2 + 3H_2SO_4 \\longrightarrow 3CaSO_4 + 2H_3PO_4} \\\\ &\\mathrm{Ca_3(PO_4)_2 + 4H_3PO_4 \\longrightarrow 3Ca(H_2PO_4)_2} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Phân ammophos là phân phức hợp, thu được khi cho ammonia tác dụng với phosphoric acid:',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} &\\mathrm{NH_3 + H_3PO_4 \\longrightarrow NH_4H_2PO_4} \\\\ &\\mathrm{2NH_3 + H_3PO_4 \\longrightarrow (NH_4)_2HPO_4} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Phân NPK được sản xuất bằng cách phối trộn các phân đơn, phân phức hợp theo tỉ lệ định trước rồi tạo hạt, sấy khô và đóng bao.',
        },
      ],
    },
    {
      heading: 'Sử dụng và bảo quản phân bón vô cơ',
      blocks: [
        {
          type: 'list',
          items: [
            'Bón đúng loại, đúng lượng, đúng lúc, đúng cách: phân lân thường bón lót trước khi gieo trồng; phân đạm bón lót một phần rồi bón thúc nhiều lần; phân kali bón thúc khi cây đẻ nhánh, làm đòng, nuôi quả.',
            'Không trộn phân đạm ammonium với vôi hay tro bếp: môi trường base làm thoát khí ammonia, mất đạm.',
            'Đất chua, đất phèn nên bón vôi để cải tạo trước, sau khoảng một đến hai tuần mới bón phân đạm.',
            'Bón phân khi trời mát, đất đủ ẩm; tránh bón trước cơn mưa lớn vì phân bị rửa trôi.',
            'Bảo quản phân ở nơi khô ráo, thoáng mát, tránh ánh nắng; buộc kín miệng bao, vì urea và phân ammonium dễ hút ẩm, chảy nước.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{NH_4^+ + OH^- \\longrightarrow NH_3\\uparrow + H_2O}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lạm dụng phân bón vô cơ',
          text: 'Bón thừa phân đạm làm tích luỹ nitrate trong rau, quả; phân thừa theo nước chảy ra sông, hồ gây phú dưỡng. Bón nhiều SA làm đất chua thêm. Phân ammonium nitrate là chất có thể gây cháy nổ, phải bảo quản xa nguồn nhiệt.',
        },
      ],
    },
    {
      heading: 'Dự án: Lập kế hoạch bón phân cho một thửa ruộng',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập một kế hoạch bón phân cho một loại cây trồng ở địa phương em, vừa đủ chất dinh dưỡng vừa tiết kiệm chi phí.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: diện tích thửa ruộng hoặc vườn, nhu cầu N, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$ của cây (hỏi cán bộ khuyến nông hoặc tra tài liệu), nhãn và giá của các loại phân bán ở địa phương.',
            'Đổi nhu cầu ra cho đúng diện tích của thửa ruộng.',
            'Lập ít nhất hai phương án: chỉ dùng phân đơn; dùng phân DAP hoặc NPK kết hợp phân đơn. Với mỗi phương án, tính khối lượng từng loại phân.',
            'Tính chi phí của từng phương án và chia lượng phân theo các lần bón lót, bón thúc.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng tính khối lượng và chi phí của các phương án, phương án em chọn và lí do, những lưu ý an toàn khi bón và cất giữ phân.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tính lượng phân cần bón',
    instruction:
      'Chọn một cây trồng, rồi kéo khối lượng từng loại phân sao cho lượng N, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$ cung cấp vừa đủ nhu cầu. Thử dùng DAP thay cho supe lân: lượng urea cần bón thay đổi thế nào? Vì sao trồng lạc chỉ cần ít đạm?',
  },
  examples: [
    {
      problem:
        'Một ha lúa cần $100$ kg N, $60$ kg $\\mathrm{P_2O_5}$ và $60$ kg $\\mathrm{K_2O}$. Tính khối lượng phân urea ($46\\%$ N), supe lân ($16\\%$ $\\mathrm{P_2O_5}$) và phân KCl ($60\\%$ $\\mathrm{K_2O}$) cần bón.',
      steps: [
        'Khối lượng phân bằng khối lượng chất dinh dưỡng chia cho độ dinh dưỡng.',
        '$m_{\\text{urea}} = \\dfrac{100 \\cdot 100}{46} \\approx 217{,}4$ kg.',
        '$m_{\\text{supe}} = \\dfrac{60 \\cdot 100}{16} = 375$ kg.',
        '$m_{\\mathrm{KCl}} = \\dfrac{60 \\cdot 100}{60} = 100$ kg.',
      ],
      answer: 'Cần khoảng $217{,}4$ kg urea, $375$ kg supe lân và $100$ kg KCl.',
    },
    {
      problem:
        'Một ha ngô cần $150$ kg N, $90$ kg $\\mathrm{P_2O_5}$ và $60$ kg $\\mathrm{K_2O}$. Dùng phân DAP (18-46-0), urea ($46\\%$ N) và KCl ($60\\%$ $\\mathrm{K_2O}$). Tính khối lượng mỗi loại phân, làm tròn đến hàng phần mười.',
      steps: [
        'Chỉ DAP có $\\mathrm{P_2O_5}$: $m_{\\text{DAP}} = \\dfrac{90 \\cdot 100}{46} \\approx 195{,}7$ kg.',
        'Lượng N do DAP cung cấp: $195{,}65 \\cdot 18\\% \\approx 35{,}2$ kg; còn thiếu $150 - 35{,}2 = 114{,}8$ kg N.',
        '$m_{\\text{urea}} = \\dfrac{114{,}8 \\cdot 100}{46} \\approx 249{,}5$ kg.',
        '$m_{\\mathrm{KCl}} = \\dfrac{60 \\cdot 100}{60} = 100$ kg.',
      ],
      answer: 'Khoảng $195{,}7$ kg DAP, $249{,}5$ kg urea và $100$ kg KCl.',
    },
    {
      problem:
        'Từ $34$ tấn ammonia sản xuất được bao nhiêu tấn urea, biết hiệu suất cả quá trình là $80\\%$?',
      steps: [
        '$\\mathrm{CO_2 + 2NH_3 \\longrightarrow (NH_2)_2CO + H_2O}$: cứ $2 \\cdot 17 = 34$ tấn $\\mathrm{NH_3}$ tạo $60$ tấn urea theo lí thuyết.',
        'Với hiệu suất $80\\%$: $m = 60 \\cdot 80\\% = 48$ tấn.',
      ],
      answer: 'Thu được $48$ tấn urea.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân đạm cung cấp nitrogen cho cây dưới dạng',
      options: [
        'ion $\\mathrm{NH_4^+}$ và ion $\\mathrm{NO_3^-}$.',
        'khí $\\mathrm{N_2}$.',
        'ion $\\mathrm{H_2PO_4^-}$.',
        'khí $\\mathrm{NH_3}$.',
      ],
      answer: 0,
      hints: ['Cây hút chất dinh dưỡng từ đất dưới dạng ion hoà tan.'],
      solution:
        'Cây hấp thụ nitrogen dưới dạng $\\mathrm{NH_4^+}$ và $\\mathrm{NO_3^-}$; hầu hết cây không dùng trực tiếp được $\\mathrm{N_2}$.',
    },
    {
      type: 'number',
      prompt: 'Tính độ dinh dưỡng (%N) của ammonium nitrate $\\mathrm{NH_4NO_3}$ nguyên chất.',
      answer: 35,
      tolerance: 0.01,
      unit: '%',
      hints: ['$M = 80$ g/mol. Phân tử có mấy nguyên tử N?'],
      solution: '$\\%\\mathrm{N} = \\dfrac{2 \\cdot 14}{80} \\cdot 100\\% = 35\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Tính độ dinh dưỡng của superphosphate kép nguyên chất $\\mathrm{Ca(H_2PO_4)_2}$. Làm tròn đến hàng phần trăm.',
      answer: 60.68,
      tolerance: 0.02,
      unit: '%',
      hints: [
        'Độ dinh dưỡng của phân lân tính theo $\\mathrm{P_2O_5}$.',
        '$1$ mol $\\mathrm{Ca(H_2PO_4)_2}$ ($234$ g) có $2$ mol P, ứng với $1$ mol $\\mathrm{P_2O_5}$ ($142$ g).',
      ],
      solution: '$\\%\\mathrm{P_2O_5} = \\dfrac{142}{234} \\cdot 100\\% \\approx 60{,}68\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cần bón $60$ kg $\\mathrm{K_2O}$ cho một ha lúa. Dùng phân KCl có độ dinh dưỡng $60\\%$ thì cần bao nhiêu kilôgam phân?',
      answer: 100,
      unit: 'kg',
      hints: ['Chia khối lượng $\\mathrm{K_2O}$ cho độ dinh dưỡng.'],
      solution: '$m = \\dfrac{60 \\cdot 100}{60} = 100$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Đã bón $100$ kg DAP (18-46-0). Cần bón thêm bao nhiêu kilôgam urea ($46\\%$ N) để tổng lượng N là $64$ kg?',
      answer: 100,
      unit: 'kg',
      hints: ['Tính lượng N mà DAP đã cung cấp trước.'],
      solution:
        'DAP cung cấp $100 \\cdot 18\\% = 18$ kg N; còn thiếu $64 - 18 = 46$ kg N, cần $\\dfrac{46 \\cdot 100}{46} = 100$ kg urea.',
    },
    {
      type: 'number',
      prompt:
        'Cho $31$ kg $\\mathrm{Ca_3(PO_4)_2}$ tác dụng vừa đủ với sulfuric acid đặc để sản xuất superphosphate đơn. Tính khối lượng $\\mathrm{Ca(H_2PO_4)_2}$ thu được (hiệu suất $100\\%$).',
      answer: 23.4,
      tolerance: 0.05,
      unit: 'kg',
      hints: [
        '$\\mathrm{Ca_3(PO_4)_2 + 2H_2SO_4 \\longrightarrow Ca(H_2PO_4)_2 + 2CaSO_4}$.',
        '$M_{\\mathrm{Ca_3(PO_4)_2}} = 310$, $M_{\\mathrm{Ca(H_2PO_4)_2}} = 234$.',
      ],
      solution:
        '$n = \\dfrac{31}{310} = 0{,}1$ kmol $\\mathrm{Ca_3(PO_4)_2}$, tạo $0{,}1$ kmol $\\mathrm{Ca(H_2PO_4)_2}$, nặng $0{,}1 \\cdot 234 = 23{,}4$ kg.',
    },
    {
      type: 'multi',
      prompt:
        'Những chất nào chứa từ hai nguyên tố dinh dưỡng đa lượng trong cùng một hợp chất, nên dùng riêng là phân phức hợp?',
      options: [
        '$\\mathrm{NH_4H_2PO_4}$',
        '$\\mathrm{(NH_4)_2HPO_4}$',
        '$\\mathrm{KNO_3}$',
        '$\\mathrm{(NH_2)_2CO}$',
        '$\\mathrm{KCl}$',
      ],
      answers: [0, 1, 2],
      hints: ['Phân phức hợp có từ hai nguyên tố đa lượng trong cùng một hợp chất.'],
      solution:
        '$\\mathrm{NH_4H_2PO_4}$ và $\\mathrm{(NH_4)_2HPO_4}$ có N và P; $\\mathrm{KNO_3}$ có N và K. Urea chỉ có N, KCl chỉ có K nên là phân đơn.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không nên trộn phân đạm ammonium với vôi để bón cùng lúc?',
      options: [
        'Vì tạo khí ammonia bay ra, làm mất đạm.',
        'Vì tạo kết tủa làm cứng đất.',
        'Vì vôi làm phân hút ẩm mạnh hơn.',
        'Vì tạo khí $\\mathrm{N_2}$ độc hại.',
      ],
      answer: 0,
      hints: ['Vôi tạo môi trường base, chứa ion $\\mathrm{OH^-}$.'],
      solution:
        '$\\mathrm{NH_4^+ + OH^- \\longrightarrow NH_3\\uparrow + H_2O}$: nitrogen thoát ra dưới dạng khí ammonia nên cây không dùng được.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn sản xuất phân urea theo đúng thứ tự.',
      items: [
        'Tổng hợp ammonia từ nitrogen và hydrogen.',
        'Tách nitrogen từ không khí, điều chế hydrogen từ khí thiên nhiên.',
        'Cô đặc dung dịch và tạo hạt urea.',
        'Cho ammonia phản ứng với carbon dioxide ở nhiệt độ, áp suất cao.',
      ],
      answer: [1, 0, 3, 2],
      hints: ['Urea được tạo từ ammonia, nên phải có ammonia trước.'],
      solution:
        'Điều chế $\\mathrm{N_2}$, $\\mathrm{H_2}$ → tổng hợp $\\mathrm{NH_3}$ → cho $\\mathrm{NH_3}$ phản ứng với $\\mathrm{CO_2}$ → cô đặc, tạo hạt.',
    },
    {
      type: 'choice',
      prompt: 'Cách bảo quản phân urea nào là đúng?',
      options: [
        'Buộc kín bao, để nơi khô ráo, thoáng mát, tránh ánh nắng.',
        'Để ngoài trời cho thoáng khí.',
        'Trộn sẵn với vôi để dùng dần.',
        'Để ở nơi ẩm cho phân khỏi vón cục.',
      ],
      answer: 0,
      hints: ['Urea dễ hút ẩm và bị phân huỷ khi gặp nhiệt.'],
      solution:
        'Urea hút ẩm mạnh, gặp nhiệt và ẩm dễ bị phân huỷ, nên cần bao kín, nơi khô ráo, thoáng mát, tránh nắng; không trộn với vôi.',
    },
    {
      type: 'text',
      prompt:
        'Phân NPK tạo ra bằng cách phối trộn urea, supe lân và KCl được gọi là phân gì (phân đơn, phân phức hợp hay phân hỗn hợp)?',
      accept: ['phân hỗn hợp', 'hỗn hợp', 'phan hon hop'],
      hints: ['Các thành phần chỉ được trộn với nhau, không phản ứng tạo hợp chất mới.'],
      solution: 'Đó là phân hỗn hợp.',
    },
  ],
  takeaways: [
    'Phân đạm: $\\%\\mathrm{N}$; phân lân: $\\%\\mathrm{P_2O_5}$; phân kali: $\\%\\mathrm{K_2O}$. Urea có độ dinh dưỡng cao nhất trong các phân đạm.',
    'Phân đơn chứa một nguyên tố đa lượng; phân phức hợp và phân hỗn hợp chứa từ hai nguyên tố trở lên.',
    'Ammonia sản xuất theo Haber – Bosch là nguyên liệu của phân đạm; superphosphate sản xuất từ quặng phosphate và acid.',
    'Khối lượng phân cần bón bằng khối lượng chất dinh dưỡng nhân $100$ rồi chia cho độ dinh dưỡng (tính theo %).',
    'Không trộn phân ammonium với vôi; bảo quản phân nơi khô ráo, thoáng mát.',
  ],
};
