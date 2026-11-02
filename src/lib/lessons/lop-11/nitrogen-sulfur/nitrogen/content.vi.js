/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nitrogen trong tự nhiên, cấu tạo phân tử với liên kết ba bền vững, tính oxi hoá và tính khử ở nhiệt độ cao, ứng dụng và chu trình nitrogen.',
  intro:
    'Dân gian có câu "lúa chiêm lấp ló đầu bờ, hễ nghe tiếng sấm phất cờ mà lên". Không khí chứa tới gần $78\\%$ khí nitrogen, vậy mà cây lúa không hút trực tiếp được. Vì sao khí này khó phản ứng đến thế, và tiếng sấm giúp gì cho cây?',
  objectives: [
    'Nêu được trạng thái tự nhiên của nitrogen và tính chất vật lí của đơn chất.',
    'Giải thích được vì sao nitrogen khá trơ ở nhiệt độ thường dựa vào liên kết ba $\\mathrm{N \\equiv N}$.',
    'Viết được phương trình thể hiện tính oxi hoá và tính khử của nitrogen; nêu được ứng dụng của nitrogen.',
  ],
  sections: [
    {
      heading: 'Trạng thái tự nhiên',
      blocks: [
        {
          type: 'list',
          items: [
            'Dạng đơn chất: khí nitrogen $\\mathrm{N_2}$ chiếm khoảng $78\\%$ thể tích không khí.',
            'Dạng hợp chất: có trong khoáng vật diêm tiêu natri (sodium nitrate, $\\mathrm{NaNO_3}$), còn gọi là diêm tiêu Chile.',
            'Nitrogen có trong cơ thể sinh vật, là thành phần của protein và nucleic acid.',
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử nitrogen ($Z = 7$) ở ô số $7$, chu kì $2$, nhóm VA, có cấu hình electron $1s^2 2s^2 2p^3$ và $5$ electron lớp ngoài cùng. Hai nguyên tử góp chung ba cặp electron tạo phân tử $\\mathrm{N_2}$, công thức cấu tạo $\\mathrm{N \\equiv N}$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Liên kết ba rất bền',
          text: 'Liên kết ba gồm $1$ liên kết $\\sigma$ và $2$ liên kết $\\pi$, có năng lượng liên kết $945$ kJ/mol, lớn hơn nhiều so với $\\mathrm{O=O}$ ($494$ kJ/mol) hay $\\mathrm{Cl-Cl}$ ($243$ kJ/mol). Vì vậy ở nhiệt độ thường, nitrogen khá trơ về mặt hoá học.',
        },
        {
          type: 'p',
          text: 'Ở điều kiện thường, nitrogen là chất khí không màu, không mùi, không vị, hơi nhẹ hơn không khí ($M = 28$ so với $29$), hoá lỏng ở $-196\\,^\\circ\\mathrm{C}$ và tan rất ít trong nước.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Trong $\\mathrm{N_2}$, nitrogen có số oxi hoá $0$, là mức trung gian giữa $-3$ và $+5$. Vì vậy, ở nhiệt độ cao nitrogen vừa thể hiện tính oxi hoá, vừa thể hiện tính khử.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính oxi hoá: tác dụng với hydrogen',
          text: '$$\\overset{0}{\\mathrm{N_2}} + \\mathrm{3H_2} \\xrightleftharpoons[\\mathrm{Fe}]{t^\\circ,\\,p} \\mathrm{2\\overset{-3}{N}H_3}$$ Số oxi hoá của N giảm từ $0$ xuống $-3$. Đây là phản ứng thuận nghịch, nền tảng của công nghiệp ammonia.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính khử: tác dụng với oxygen',
          text: '$$\\overset{0}{\\mathrm{N_2}} + \\mathrm{O_2} \\xrightleftharpoons{3000\\,^\\circ\\mathrm{C}} \\mathrm{2\\overset{+2}{N}O}$$ Số oxi hoá của N tăng từ $0$ lên $+2$. Phản ứng thu nhiệt mạnh ($\\Delta_r H^\\circ_{298} \\approx +180$ kJ), chỉ xảy ra ở nhiệt độ rất cao như trong tia lửa điện của sấm sét hoặc trong động cơ đốt trong.',
        },
        {
          type: 'p',
          text: 'Khí NO sinh ra lập tức kết hợp với oxygen thành $\\mathrm{NO_2}$, rồi cùng oxygen và hơi nước tạo nitric acid theo mưa xuống đất. Đó chính là lượng đạm mà câu ca về tiếng sấm nhắc tới.',
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Phần lớn nitrogen dùng để tổng hợp ammonia, từ đó sản xuất phân đạm và nitric acid.',
            'Tạo môi trường trơ thay thế một phần hoặc toàn bộ không khí, để giảm nguy cơ cháy nổ và hạn chế sự oxi hoá của oxygen: hàn kim loại, đóng gói thực phẩm, bơm vào bồn chứa xăng dầu.',
            'Nitrogen lỏng dùng làm chất làm lạnh, bảo quản máu và các mẫu sinh vật.',
          ],
        },
        {
          type: 'p',
          text: 'Sơ đồ dưới đây cho thấy nitrogen luân chuyển giữa khí quyển, đất và sinh vật. Hãy bấm từng mũi tên và dự đoán số oxi hoá của N.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chu trình nitrogen',
    instruction:
      'Bấm một mũi tên trên sơ đồ, dự đoán số oxi hoá của N tăng, giảm hay không đổi, rồi đọc tác nhân và phương trình của chuyển hoá đó. Hãy mở đủ $9$ mũi tên.',
  },
  examples: [
    {
      problem:
        'Xác định vai trò của $\\mathrm{N_2}$ trong hai phản ứng: a) $\\mathrm{N_2} + \\mathrm{3H_2} \\rightleftharpoons \\mathrm{2NH_3}$; b) $\\mathrm{N_2} + \\mathrm{O_2} \\rightleftharpoons \\mathrm{2NO}$.',
      steps: [
        'Trong $\\mathrm{N_2}$, N có số oxi hoá $0$.',
        'a) Trong $\\mathrm{NH_3}$, H có số oxi hoá $+1$ nên N có số oxi hoá $-3$. Số oxi hoá giảm, nên $\\mathrm{N_2}$ là chất oxi hoá.',
        'b) Trong NO, O có số oxi hoá $-2$ nên N có số oxi hoá $+2$. Số oxi hoá tăng, nên $\\mathrm{N_2}$ là chất khử.',
      ],
      answer: 'a) Chất oxi hoá; b) chất khử.',
    },
    {
      problem:
        'Từ $56$ kg $\\mathrm{N_2}$ và lượng $\\mathrm{H_2}$ dư, người ta tổng hợp ammonia với hiệu suất $25\\%$. Tính khối lượng $\\mathrm{NH_3}$ thu được.',
      steps: [
        'Số mol: $n_{\\mathrm{N_2}} = \\dfrac{56}{28} = 2$ kmol.',
        'Theo phương trình $\\mathrm{N_2} + \\mathrm{3H_2} \\rightleftharpoons \\mathrm{2NH_3}$, nếu phản ứng hết thì $n_{\\mathrm{NH_3}} = 2 \\cdot 2 = 4$ kmol, ứng với $4 \\cdot 17 = 68$ kg.',
        'Với hiệu suất $25\\%$: $m_{\\mathrm{NH_3}} = 68 \\cdot 0{,}25 = 17$ kg.',
      ],
      answer: '$17$ kg $\\mathrm{NH_3}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vì sao ở nhiệt độ thường nitrogen khá trơ về mặt hoá học?',
      options: [
        'Phân tử có liên kết ba bền vững',
        'Nguyên tử nitrogen có bán kính lớn',
        'Nitrogen có độ âm điện rất nhỏ',
        'Phân tử nitrogen phân cực mạnh',
      ],
      answer: 0,
      hints: ['So sánh năng lượng liên kết $945$ kJ/mol với các liên kết khác.'],
      solution:
        'Liên kết ba $\\mathrm{N \\equiv N}$ có năng lượng liên kết lớn, $945$ kJ/mol, nên rất khó bị phá vỡ ở nhiệt độ thường.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các tính chất đúng của khí nitrogen ở điều kiện thường.',
      options: [
        'Không màu, không mùi, không vị',
        'Nhẹ hơn không khí một chút',
        'Tan rất ít trong nước',
        'Nặng hơn khí oxygen',
        'Dễ phân huỷ thành nguyên tử',
      ],
      answers: [0, 1, 2],
      hints: ['Tính $M_{\\mathrm{N_2}}$ để so sánh với không khí và oxygen.'],
      solution:
        '$M_{\\mathrm{N_2}} = 28$, nhỏ hơn $29$ của không khí và $32$ của oxygen. $\\mathrm{N_2}$ tan rất ít trong nước và rất bền, không dễ phân huỷ.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{N_2} + \\mathrm{O_2} \\rightleftharpoons \\mathrm{2NO}$ ở $3000\\,^\\circ\\mathrm{C}$, nitrogen đóng vai trò gì?',
      options: ['Chất khử', 'Chất oxi hoá', 'Vừa oxi hoá vừa khử', 'Không đổi số oxi hoá'],
      answer: 0,
      hints: ['Tính số oxi hoá của N trong NO.'],
      solution: 'Số oxi hoá của N tăng từ $0$ lên $+2$ nên $\\mathrm{N_2}$ là chất khử.',
    },
    {
      type: 'number',
      prompt: 'Tính phần trăm khối lượng của nitrogen trong diêm tiêu natri $\\mathrm{NaNO_3}$.',
      answer: 16.47,
      tolerance: 0.05,
      unit: '%',
      hints: ['$M_{\\mathrm{NaNO_3}} = 23 + 14 + 3 \\cdot 16$.'],
      solution:
        '$M = 85$ nên $\\%m_{\\mathrm{N}} = \\dfrac{14}{85} \\cdot 100\\% \\approx 16{,}47\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cho $10$ L $\\mathrm{N_2}$ và $30$ L $\\mathrm{H_2}$ vào bình phản ứng, đo cùng điều kiện, hiệu suất $25\\%$. Thể tích $\\mathrm{NH_3}$ thu được là bao nhiêu lít?',
      answer: 5,
      unit: 'L',
      hints: [
        'Với chất khí cùng điều kiện, tỉ lệ thể tích bằng tỉ lệ số mol.',
        'Nếu phản ứng hoàn toàn thì tạo $20$ L $\\mathrm{NH_3}$.',
      ],
      solution:
        'Hai khí vừa đủ theo tỉ lệ $1:3$. Tạo tối đa $2 \\cdot 10 = 20$ L; với hiệu suất $25\\%$ thu được $20 \\cdot 0{,}25 = 5$ L.',
    },
    {
      type: 'number',
      prompt:
        'Một lượng không khí có thể tích $247{,}9$ L ở điều kiện chuẩn chứa $78\\%$ thể tích là $\\mathrm{N_2}$. Tính khối lượng $\\mathrm{N_2}$ theo gam.',
      answer: 218.4,
      tolerance: 0.1,
      unit: 'g',
      hints: ['Ở điều kiện chuẩn, thể tích mol khí là $24{,}79$ L/mol.'],
      solution:
        '$n_{\\text{khí}} = \\dfrac{247{,}9}{24{,}79} = 10$ mol, nên $n_{\\mathrm{N_2}} = 7{,}8$ mol và $m = 7{,}8 \\cdot 28 = 218{,}4$ g.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các chất theo thứ tự chuyển hoá của nitrogen từ khí quyển xuống đất sau cơn giông.',
      items: [
        '$\\mathrm{N_2}$',
        '$\\mathrm{NO}$',
        '$\\mathrm{NO_2}$',
        '$\\mathrm{HNO_3}$',
        '$\\mathrm{NO_3^-}$',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Số oxi hoá của N tăng dần qua các bước khí, rồi giữ nguyên khi acid phân li.'],
      solution:
        '$\\mathrm{N_2} \\to \\mathrm{NO} \\to \\mathrm{NO_2} \\to \\mathrm{HNO_3} \\to \\mathrm{NO_3^-}$: tia sét tạo NO, oxygen tạo $\\mathrm{NO_2}$, rồi nitric acid tan trong nước mưa phân li cho ion nitrate.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi cách dùng nitrogen với tính chất giúp nó làm được việc đó.',
      left: ['Bơm vào bao bì thực phẩm', 'Bảo quản máu, mẫu sinh vật', 'Sản xuất phân đạm'],
      right: [
        'Khá trơ, không gây oxi hoá',
        'Nitrogen lỏng có nhiệt độ rất thấp',
        'Phản ứng được với hydrogen ở nhiệt độ cao, áp suất cao',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Một cách dùng nhờ nhiệt độ rất thấp, một cách dùng nhờ khả năng tạo ammonia.'],
      solution:
        'Thực phẩm cần môi trường trơ; máu và mẫu sinh vật cần giữ lạnh ở khoảng $-196\\,^\\circ\\mathrm{C}$; phân đạm được tạo từ ammonia tổng hợp từ $\\mathrm{N_2}$ và $\\mathrm{H_2}$.',
    },
  ],
  takeaways: [
    'Nitrogen chiếm khoảng $78\\%$ thể tích không khí; hợp chất có trong diêm tiêu natri, protein và nucleic acid.',
    'Liên kết ba $\\mathrm{N \\equiv N}$ ($945$ kJ/mol) làm nitrogen khá trơ ở nhiệt độ thường.',
    'Ở nhiệt độ cao, $\\mathrm{N_2}$ thể hiện tính oxi hoá với $\\mathrm{H_2}$ và tính khử với $\\mathrm{O_2}$.',
    'Nitrogen dùng chủ yếu để tổng hợp ammonia, ngoài ra tạo môi trường trơ; nitrogen lỏng là chất làm lạnh.',
  ],
};
