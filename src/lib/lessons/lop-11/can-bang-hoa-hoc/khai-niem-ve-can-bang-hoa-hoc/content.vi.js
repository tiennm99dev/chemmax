/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phản ứng thuận nghịch, trạng thái cân bằng hoá học, hằng số cân bằng KC và nguyên lí chuyển dịch cân bằng Le Chatelier.',
  intro:
    'Cho $1$ mol $\\mathrm{H_2}$ và $1$ mol $\\mathrm{I_2}$ vào bình kín rồi đun nóng ở $445\\,^\\circ\\mathrm{C}$. Dù để bao lâu, bình cũng chỉ tạo được $1{,}6$ mol $\\mathrm{HI}$, vẫn còn $0{,}2$ mol mỗi chất đầu. Vì sao phản ứng không xảy ra hoàn toàn, và làm sao để thu được nhiều sản phẩm hơn?',
  objectives: [
    'Phân biệt phản ứng một chiều và phản ứng thuận nghịch; nêu được đặc điểm của trạng thái cân bằng.',
    'Viết được biểu thức hằng số cân bằng $K_C$ và tính được $K_C$ khi biết nồng độ lúc cân bằng.',
    'Vận dụng nguyên lí Le Chatelier để dự đoán chiều chuyển dịch cân bằng khi nhiệt độ, áp suất, nồng độ thay đổi.',
  ],
  sections: [
    {
      heading: 'Phản ứng một chiều và phản ứng thuận nghịch',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng một chiều',
          text: 'Là phản ứng chỉ xảy ra theo một chiều từ chất đầu tạo thành sản phẩm, viết bằng mũi tên $\\rightarrow$. Ví dụ: $\\mathrm{C} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{CO_2}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng thuận nghịch',
          text: 'Là phản ứng mà trong cùng điều kiện xảy ra theo hai chiều trái ngược nhau, viết bằng kí hiệu $\\rightleftharpoons$. Chiều từ trái sang phải là chiều thuận, chiều từ phải sang trái là chiều nghịch.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}',
        },
        {
          type: 'p',
          text: 'Trong phản ứng trên, $\\mathrm{H_2}$ và $\\mathrm{I_2}$ tạo thành $\\mathrm{HI}$, đồng thời $\\mathrm{HI}$ lại phân huỷ thành $\\mathrm{H_2}$ và $\\mathrm{I_2}$. Vì vậy, phản ứng thuận nghịch không bao giờ dùng hết các chất đầu.',
        },
      ],
    },
    {
      heading: 'Trạng thái cân bằng',
      blocks: [
        {
          type: 'p',
          text: 'Lúc đầu chỉ có chất đầu nên tốc độ phản ứng thuận $v_t$ lớn nhất, còn $v_n$ bằng $0$. Theo thời gian, nồng độ chất đầu giảm nên $v_t$ giảm; sản phẩm sinh ra ngày càng nhiều nên $v_n$ tăng, cho đến khi $v_t = v_n$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cân bằng hoá học',
          text: 'Là trạng thái của phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch: $v_t = v_n$.',
        },
        {
          type: 'list',
          items: [
            'Cân bằng hoá học là cân bằng động: phản ứng thuận và nghịch vẫn tiếp tục xảy ra, nhưng với tốc độ bằng nhau.',
            'Lúc cân bằng, nồng độ các chất không thay đổi nữa. Điều đó không có nghĩa là nồng độ các chất bằng nhau.',
          ],
        },
      ],
    },
    {
      heading: 'Hằng số cân bằng',
      blocks: [
        {
          type: 'p',
          text: 'Xét phản ứng thuận nghịch tổng quát, các chất đều ở thể khí hoặc trong dung dịch:',
        },
        {
          type: 'tex',
          tex: 'a\\mathrm{A} + b\\mathrm{B} \\rightleftharpoons c\\mathrm{C} + d\\mathrm{D}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Biểu thức hằng số cân bằng',
          text: '$$K_C = \\dfrac{[\\mathrm{C}]^c [\\mathrm{D}]^d}{[\\mathrm{A}]^a [\\mathrm{B}]^b}$$ Trong đó $[\\mathrm{A}]$, $[\\mathrm{B}]$, $[\\mathrm{C}]$, $[\\mathrm{D}]$ là nồng độ mol lúc cân bằng; $a$, $b$, $c$, $d$ là các hệ số trong phương trình.',
        },
        {
          type: 'list',
          items: [
            'Chất rắn không được đưa vào biểu thức $K_C$. Với $\\mathrm{CaCO_3(s)} \\rightleftharpoons \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$ ta có $K_C = [\\mathrm{CO_2}]$.',
            '$K_C$ chỉ phụ thuộc vào nhiệt độ và bản chất của phản ứng, không phụ thuộc nồng độ ban đầu.',
            '$K_C$ càng lớn, phản ứng thuận càng chiếm ưu thế; $K_C$ càng nhỏ, phản ứng nghịch càng chiếm ưu thế.',
          ],
        },
        { type: 'widget', name: 'hang-so' },
      ],
    },
    {
      heading: 'Nguyên lí chuyển dịch cân bằng Le Chatelier',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên lí Le Chatelier',
          text: 'Một phản ứng thuận nghịch đang ở trạng thái cân bằng khi chịu một tác động từ bên ngoài như biến đổi nồng độ, áp suất, nhiệt độ thì cân bằng sẽ chuyển dịch theo chiều làm giảm tác động bên ngoài đó.',
        },
        {
          type: 'table',
          caption: 'Các yếu tố làm chuyển dịch cân bằng',
          head: ['Tác động', 'Cân bằng chuyển dịch theo chiều'],
          rows: [
            ['Tăng nồng độ một chất', 'Làm giảm nồng độ chất đó'],
            ['Giảm nồng độ một chất', 'Làm tăng nồng độ chất đó'],
            ['Tăng áp suất chung của hệ có chất khí', 'Làm giảm số mol khí'],
            ['Giảm áp suất chung của hệ có chất khí', 'Làm tăng số mol khí'],
            ['Tăng nhiệt độ', 'Thu nhiệt ($\\Delta_r H^\\circ_{298} > 0$)'],
            ['Giảm nhiệt độ', 'Toả nhiệt ($\\Delta_r H^\\circ_{298} < 0$)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Nếu số mol khí ở hai vế bằng nhau, như $\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}$, thay đổi áp suất không làm chuyển dịch cân bằng.',
            'Thêm hoặc bớt chất rắn không làm chuyển dịch cân bằng, vì chất rắn không có mặt trong biểu thức $K_C$.',
            'Chất xúc tác làm tăng tốc độ cả phản ứng thuận và nghịch như nhau: cân bằng đạt nhanh hơn nhưng không chuyển dịch.',
          ],
        },
        {
          type: 'p',
          text: 'Trong sản xuất, nguyên lí này giúp chọn điều kiện để tăng hiệu suất. Tổng hợp ammonia $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}$ toả nhiệt và làm giảm số mol khí, nên người ta dùng áp suất cao, lấy bớt $\\mathrm{NH_3}$ ra khỏi hệ và dùng nhiệt độ vừa phải kèm xúc tác.',
        },
      ],
    },
  ],
  explore: {
    title: 'Khí nâu đổi màu trong xi lanh',
    instruction:
      'Đổi nhiệt độ, đẩy piston hoặc thêm khí rồi quan sát màu khí, hai thanh tốc độ và đồ thị nồng độ. Hãy đoán trước chiều chuyển dịch, rồi kiểm tra lại. Các số liệu là mô hình tính từ giá trị $K_C$ gần đúng.',
  },
  examples: [
    {
      problem:
        'Cho $1$ mol $\\mathrm{H_2}$ và $1$ mol $\\mathrm{I_2}$ vào bình kín $10$ L ở $445\\,^\\circ\\mathrm{C}$. Lúc cân bằng, trong bình có $1{,}6$ mol $\\mathrm{HI}$, $0{,}2$ mol $\\mathrm{H_2}$ và $0{,}2$ mol $\\mathrm{I_2}$. Tính $K_C$ của phản ứng $\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}$.',
      steps: [
        'Nồng độ lúc cân bằng: $[\\mathrm{H_2}] = [\\mathrm{I_2}] = \\dfrac{0{,}2}{10} = 0{,}02$ M; $[\\mathrm{HI}] = \\dfrac{1{,}6}{10} = 0{,}16$ M.',
        'Biểu thức: $K_C = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}$.',
        'Thay số: $K_C = \\dfrac{0{,}16^2}{0{,}02 \\cdot 0{,}02} = \\dfrac{0{,}0256}{0{,}0004} = 64$.',
      ],
      answer: '$K_C = 64$.',
    },
    {
      problem:
        'Phản ứng tổng hợp ammonia $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}$ có lúc cân bằng $[\\mathrm{N_2}] = 0{,}45$ M, $[\\mathrm{H_2}] = 0{,}14$ M, $[\\mathrm{NH_3}] = 0{,}62$ M. Tính $K_C$.',
      steps: [
        'Biểu thức: $K_C = \\dfrac{[\\mathrm{NH_3}]^2}{[\\mathrm{N_2}][\\mathrm{H_2}]^3}$.',
        'Tử số: $0{,}62^2 = 0{,}3844$. Mẫu số: $0{,}45 \\cdot 0{,}14^3 = 0{,}45 \\cdot 0{,}002744 = 0{,}0012348$.',
        '$K_C = \\dfrac{0{,}3844}{0{,}0012348} \\approx 311$.',
      ],
      answer: '$K_C \\approx 311$.',
    },
    {
      problem:
        'Cho cân bằng $\\mathrm{2SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons \\mathrm{2SO_3(g)}$, $\\Delta_r H^\\circ_{298} < 0$. Cân bằng chuyển dịch theo chiều nào khi: a) tăng nhiệt độ; b) tăng áp suất; c) thêm $\\mathrm{O_2}$; d) dùng xúc tác $\\mathrm{V_2O_5}$?',
      steps: [
        'a) Tăng nhiệt độ: cân bằng chuyển dịch theo chiều thu nhiệt. Chiều thuận toả nhiệt nên đó là chiều nghịch.',
        'b) Vế trái có $3$ mol khí, vế phải có $2$ mol khí. Tăng áp suất: cân bằng chuyển dịch theo chiều giảm số mol khí, là chiều thuận.',
        'c) Thêm $\\mathrm{O_2}$: cân bằng chuyển dịch theo chiều giảm $\\mathrm{O_2}$, là chiều thuận.',
        'd) Chất xúc tác không làm chuyển dịch cân bằng.',
      ],
      answer: 'a) nghịch; b) thuận; c) thuận; d) không chuyển dịch.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây là phản ứng thuận nghịch?',
      options: [
        'Tổng hợp ammonia từ nitrogen và hydrogen',
        'Đốt cháy carbon trong oxygen',
        'Đốt cháy magnesium trong oxygen',
        'Trung hoà $\\mathrm{NaOH}$ bằng $\\mathrm{HCl}$',
      ],
      answer: 0,
      hints: ['Tìm phương trình có thể xảy ra theo hai chiều trong cùng điều kiện.'],
      solution:
        'Phản ứng tổng hợp ammonia xảy ra theo hai chiều: $\\mathrm{N_2} + \\mathrm{3H_2} \\rightleftharpoons \\mathrm{2NH_3}$. Các phản ứng còn lại xảy ra một chiều.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về trạng thái cân bằng hoá học.',
      options: [
        'Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.',
        'Nồng độ các chất không thay đổi theo thời gian.',
        'Phản ứng thuận và phản ứng nghịch đã dừng lại.',
        'Nồng độ sản phẩm luôn lớn hơn nồng độ chất đầu.',
      ],
      answers: [0, 1],
      hints: ['Cân bằng hoá học là cân bằng động.'],
      solution:
        'Lúc cân bằng, $v_t = v_n$ và nồng độ các chất không đổi. Hai phản ứng vẫn tiếp tục xảy ra, và nồng độ sản phẩm có thể lớn hơn hoặc nhỏ hơn nồng độ chất đầu.',
    },
    {
      type: 'number',
      prompt:
        'Cho cân bằng $\\mathrm{2SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons \\mathrm{2SO_3(g)}$ với $[\\mathrm{SO_2}] = 0{,}2$ M, $[\\mathrm{O_2}] = 0{,}1$ M, $[\\mathrm{SO_3}] = 0{,}4$ M. Tính $K_C$.',
      answer: 40,
      hints: [
        'Viết biểu thức $K_C$, nhớ lấy số mũ bằng hệ số trong phương trình.',
        '$K_C = \\dfrac{[\\mathrm{SO_3}]^2}{[\\mathrm{SO_2}]^2[\\mathrm{O_2}]}$.',
      ],
      solution: '$K_C = \\dfrac{0{,}4^2}{0{,}2^2 \\cdot 0{,}1} = \\dfrac{0{,}16}{0{,}004} = 40$.',
    },
    {
      type: 'number',
      prompt:
        'Cho cân bằng $\\mathrm{2NO_2(g)} \\rightleftharpoons \\mathrm{N_2O_4(g)}$ với $[\\mathrm{NO_2}] = 0{,}02$ M, $[\\mathrm{N_2O_4}] = 0{,}04$ M. Tính $K_C$.',
      answer: 100,
      hints: ['$\\mathrm{NO_2}$ có hệ số $2$ nên nồng độ của nó có số mũ $2$.'],
      solution: '$K_C = \\dfrac{0{,}04}{0{,}02^2} = \\dfrac{0{,}04}{0{,}0004} = 100$.',
    },
    {
      type: 'number',
      prompt:
        'Ở một nhiệt độ, phản ứng $\\mathrm{CaCO_3(s)} \\rightleftharpoons \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$ có $K_C = 0{,}02$. Trong bình kín $10$ L, lúc cân bằng có bao nhiêu mol $\\mathrm{CO_2}$?',
      answer: 0.2,
      unit: 'mol',
      hints: ['Chất rắn không có mặt trong biểu thức $K_C$.', 'Khi đó $K_C = [\\mathrm{CO_2}]$.'],
      solution:
        '$[\\mathrm{CO_2}] = K_C = 0{,}02$ M, nên $n_{\\mathrm{CO_2}} = 0{,}02 \\cdot 10 = 0{,}2$ mol.',
    },
    {
      type: 'number',
      prompt:
        'Ở $445\\,^\\circ\\mathrm{C}$, phản ứng $\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}$ có $K_C = 64$. Ban đầu $[\\mathrm{H_2}] = [\\mathrm{I_2}] = 1$ M, chưa có $\\mathrm{HI}$. Tính $[\\mathrm{HI}]$ lúc cân bằng, theo M.',
      answer: 1.6,
      unit: 'M',
      hints: [
        'Gọi nồng độ $\\mathrm{H_2}$ phản ứng là $x$; khi đó $[\\mathrm{HI}] = 2x$.',
        'Lập $\\dfrac{(2x)^2}{(1-x)^2} = 64$ rồi lấy căn bậc hai hai vế.',
      ],
      solution:
        '$\\dfrac{2x}{1-x} = 8 \\Rightarrow 2x = 8 - 8x \\Rightarrow x = 0{,}8$. Vậy $[\\mathrm{HI}] = 2x = 1{,}6$ M.',
    },
    {
      type: 'choice',
      prompt:
        'Cho cân bằng $\\mathrm{C(s)} + \\mathrm{CO_2(g)} \\rightleftharpoons \\mathrm{2CO(g)}$, $\\Delta_r H^\\circ_{298} > 0$. Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều nào và $K_C$ thay đổi ra sao?',
      options: [
        'Chiều thuận, $K_C$ tăng',
        'Chiều nghịch, $K_C$ giảm',
        'Chiều thuận, $K_C$ không đổi',
        'Không chuyển dịch, $K_C$ không đổi',
      ],
      answer: 0,
      hints: [
        'Tăng nhiệt độ thì cân bằng chuyển dịch theo chiều thu nhiệt.',
        'Sản phẩm nhiều lên thì $K_C$ thay đổi thế nào?',
      ],
      solution:
        'Chiều thuận thu nhiệt nên cân bằng chuyển dịch theo chiều thuận. Nồng độ $\\mathrm{CO}$ tăng, $\\mathrm{CO_2}$ giảm, nên $K_C = \\dfrac{[\\mathrm{CO}]^2}{[\\mathrm{CO_2}]}$ tăng.',
    },
    {
      type: 'match',
      prompt:
        'Với cân bằng $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}$, $\\Delta_r H^\\circ_{298} < 0$, ghép mỗi tác động với kết quả.',
      left: ['Tăng nhiệt độ', 'Tăng áp suất', 'Dùng thêm xúc tác'],
      right: ['Chuyển dịch theo chiều nghịch', 'Chuyển dịch theo chiều thuận', 'Không chuyển dịch'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Chiều thuận toả nhiệt và làm giảm số mol khí từ $4$ xuống $2$.'],
      solution:
        'Tăng nhiệt độ: chiều thu nhiệt, là chiều nghịch. Tăng áp suất: chiều giảm số mol khí, là chiều thuận. Xúc tác không làm chuyển dịch cân bằng.',
    },
    {
      type: 'choice',
      prompt:
        'Khi nén hỗn hợp khí của cân bằng $\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}$, cân bằng',
      options: [
        'không chuyển dịch',
        'chuyển dịch theo chiều thuận',
        'chuyển dịch theo chiều nghịch',
        'chuyển dịch rồi dừng phản ứng',
      ],
      answer: 0,
      hints: ['Đếm số mol khí ở mỗi vế.'],
      solution: 'Hai vế đều có $2$ mol khí nên thay đổi áp suất không làm chuyển dịch cân bằng.',
    },
  ],
  takeaways: [
    'Phản ứng thuận nghịch xảy ra theo hai chiều trong cùng điều kiện; cân bằng là khi $v_t = v_n$, phản ứng vẫn tiếp diễn.',
    '$K_C = \\dfrac{[\\mathrm{C}]^c[\\mathrm{D}]^d}{[\\mathrm{A}]^a[\\mathrm{B}]^b}$, không có chất rắn; $K_C$ chỉ phụ thuộc nhiệt độ và bản chất phản ứng.',
    'Nguyên lí Le Chatelier: cân bằng chuyển dịch theo chiều làm giảm tác động bên ngoài về nồng độ, áp suất, nhiệt độ.',
    'Chất xúc tác không làm chuyển dịch cân bằng; áp suất không có tác dụng khi số mol khí hai vế bằng nhau.',
  ],
};
