/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tính biến thiên enthalpy và nhiệt lượng toả ra của các phản ứng cháy, nổ; ảnh hưởng của nồng độ oxygen đến tốc độ cháy và hô hấp; giới hạn nổ của khí trong không khí.',
  intro:
    'Phản ứng cháy, nổ toả nhiệt mạnh và xảy ra nhanh, phản ứng trước cấp nhiệt cho phản ứng sau. Vì sao $1$ kg khí gas cho nhiều nhiệt hơn $1$ kg cồn? Vì sao trong phòng kín người ta dễ ngạt, và vì sao gas rò rỉ chỉ nổ khi nồng độ nằm trong một khoảng nhất định? Các phép tính trong bài này trả lời những câu hỏi đó.',
  objectives: [
    'Nêu được các yếu tố ảnh hưởng đến tốc độ phản ứng cháy.',
    'Tính được biến thiên enthalpy và nhiệt lượng toả ra của một số phản ứng cháy, nổ từ enthalpy tạo thành.',
    'Tính được sự thay đổi của tốc độ phản ứng cháy và "tốc độ phản ứng hô hấp" theo giả định phụ thuộc vào nồng độ oxygen.',
    'Nêu được khái niệm giới hạn nổ và vận dụng để đánh giá nguy cơ của khí rò rỉ.',
  ],
  sections: [
    {
      heading: 'Biến thiên enthalpy của phản ứng cháy, nổ',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng cháy có $\\Delta_r H^\\circ_{298} < 0$, giá trị càng âm thì càng toả nhiều nhiệt. Có thể tính từ enthalpy tạo thành chuẩn hoặc từ năng lượng liên kết:',
        },
        {
          type: 'tex',
          tex: '\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(sp) - \\sum \\Delta_f H^\\circ_{298}(cd)',
        },
        {
          type: 'tex',
          tex: '\\Delta_r H^\\circ_{298} = \\sum E_b(cd) - \\sum E_b(sp)',
        },
        {
          type: 'p',
          text: 'Trong bài này dùng $\\Delta_f H^\\circ_{298}(\\mathrm{CO_2(g)}) = -394$ kJ/mol, $\\Delta_f H^\\circ_{298}(\\mathrm{H_2O(g)}) = -242$ kJ/mol, và coi nước sinh ra ở thể hơi. Bảng sau cho thấy nhiệt lượng của các nhiên liệu thông dụng (giá trị làm tròn).',
        },
        {
          type: 'table',
          head: [
            'Nhiên liệu',
            '$\\Delta_f H^\\circ_{298}$ (kJ/mol)',
            '$\\Delta_r H^\\circ_{298}$ cho $1$ mol (kJ)',
            'Nhiệt lượng cho $1$ kg (kJ)',
          ],
          rows: [
            ['Carbon, $\\mathrm{C(s)}$', '$0$', '$-394$', '$32\\,833$'],
            ['Methane, $\\mathrm{CH_4(g)}$', '$-76$', '$-802$', '$50\\,125$'],
            ['Propane, $\\mathrm{C_3H_8(g)}$', '$-105$', '$-2\\,045$', '$46\\,477$'],
            ['Butane, $\\mathrm{C_4H_{10}(g)}$', '$-126$', '$-2\\,660$', '$45\\,862$'],
            ['Octane, $\\mathrm{C_8H_{18}(l)}$', '$-250$', '$-5\\,080$', '$44\\,561$'],
            ['Ethanol, $\\mathrm{C_2H_5OH(l)}$', '$-278$', '$-1\\,236$', '$26\\,870$'],
          ],
        },
        { type: 'widget', name: 'nhiet-luong' },
        {
          type: 'p',
          text: 'Các phản ứng nổ cũng toả nhiệt rất mạnh. Ví dụ ammonium nitrate phân huỷ theo phản ứng $\\mathrm{2NH_4NO_3(s)} \\rightarrow \\mathrm{2N_2(g)} + \\mathrm{O_2(g)} + \\mathrm{4H_2O(g)}$, sinh ra rất nhiều khí trong thời gian ngắn.',
        },
      ],
    },
    {
      heading: 'Tốc độ phản ứng cháy và "tốc độ phản ứng hô hấp"',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng cháy tuân theo các yếu tố ảnh hưởng đến tốc độ phản ứng đã học:',
        },
        {
          type: 'list',
          items: [
            'Nhiệt độ: nhiệt độ cao hơn thì cháy nhanh hơn, phản ứng trước cấp nhiệt cho phản ứng sau nên cháy dễ lan rộng.',
            'Nồng độ chất oxi hoá: giảm oxygen thì cháy chậm lại; trong oxygen tinh khiết, cháy mạnh hơn nhiều.',
            'Diện tích tiếp xúc: bụi, hơi và các hạt nhỏ cháy nhanh hơn cục lớn.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Giả định về nồng độ oxygen',
          text: 'Giả định tốc độ phản ứng cháy, tốc độ phản ứng hô hấp tỉ lệ thuận với nồng độ oxygen: $v = k \\cdot C_{O_2}$. Với khí, nồng độ tỉ lệ với áp suất riêng phần: $p_{O_2} = p \\cdot \\%V_{O_2}$. Do đó $\\dfrac{v_1}{v_2} = \\dfrac{p_{O_2,1}}{p_{O_2,2}}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Hô hấp trong không gian kín',
          text: 'Hô hấp tiêu thụ oxygen. Người ngủ trong ô tô đóng kín cửa làm oxygen giảm dần, tốc độ hô hấp giảm theo. Đừng ngủ trong ô tô đóng kín cửa; phòng kín cũng cần được mở cửa thông gió thường xuyên.',
        },
      ],
    },
    {
      heading: 'Giới hạn nổ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Giới hạn nổ',
          text: 'Khí cháy trộn với không khí chỉ nổ khi nồng độ nằm trong một khoảng xác định. Giới hạn nổ dưới là nồng độ thấp nhất và giới hạn nổ trên là nồng độ cao nhất (theo $\\%$ thể tích) mà hỗn hợp có thể cháy lan khi gặp nguồn lửa.',
        },
        {
          type: 'list',
          items: [
            'Dưới giới hạn dưới: hỗn hợp quá loãng, nhiệt toả ra không đủ để làm nóng lớp hỗn hợp tiếp theo.',
            'Trên giới hạn trên: thiếu oxygen, nên cũng không lan được. Nhưng khi không khí tràn vào, nồng độ đi xuống và rơi vào vùng nổ.',
            'Tỉ lệ vừa đủ để cháy hết (ứng với phương trình cháy) nằm bên trong vùng nổ.',
          ],
        },
        {
          type: 'table',
          head: ['Chất khí', 'Giới hạn nổ dưới ($\\%$)', 'Giới hạn nổ trên ($\\%$)'],
          rows: [
            ['Methane', '$5$', '$15$'],
            ['Propane', '$2{,}1$', '$9{,}5$'],
            ['Butane', '$1{,}8$', '$8{,}4$'],
            ['Hydrogen', '$4$', '$75$'],
            ['Carbon monoxide', '$12{,}5$', '$74$'],
            ['Hơi ethanol', '$3{,}3$', '$19$'],
          ],
          caption:
            'Giá trị tham khảo trong không khí, ở nhiệt độ và áp suất thường; các nguồn có thể chênh lệch một ít',
        },
        {
          type: 'p',
          text: 'Nồng độ trong không khí tính theo tỉ lệ thể tích, nên chỉ cần một lượng gas nhỏ so với căn phòng đã đủ đạt giới hạn nổ dưới. Khí hydrogen có vùng nổ rất rộng nên đặc biệt nguy hiểm.',
        },
      ],
    },
    {
      heading: 'Dự án: Chọn nhiên liệu cho gia đình em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: so sánh các nhiên liệu theo nhiệt lượng toả ra, chi phí và an toàn để đề xuất nhiên liệu cho gia đình em. Đây là hoạt động tính toán và tra cứu; không đốt thử nhiên liệu.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: máy tính, giá bán lẻ hiện tại của gas, than, cồn, điện tại địa phương.',
            'Dùng bảng trong bài để tính nhiệt lượng cho $1$ kg mỗi nhiên liệu; tính giá của $1\\,000$ kJ nhiệt.',
            'Với gas, lấy tỉ lệ mol $\\mathrm{C_3H_8 : C_4H_{10}} = 2 : 3$. Tính thể tích gas làm căn bếp nhà em đạt giới hạn nổ dưới $1{,}8\\%$ (lấy theo butane để an toàn).',
            'So sánh thêm sản phẩm phụ độc hại, khả năng thông gió và cách dự trữ an toàn.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng so sánh có nguồn giá, thể tích gas nguy hiểm của căn bếp, và kết luận nên dùng nhiên liệu nào, kèm các yêu cầu an toàn đi theo lựa chọn đó.',
        },
      ],
    },
  ],
  explore: {
    title: 'Vùng nổ của khí trong không khí',
    instruction:
      'Chọn một khí, kéo nồng độ hoặc bấm "Khí rò rỉ thêm" để đưa hỗn hợp vào vùng nổ. Sau đó đẩy nồng độ vượt giới hạn trên rồi bấm "Mở cửa thông gió": hỗn hợp có đi qua vùng nổ không? So sánh độ rộng vùng nổ của hydrogen với methane.',
  },
  examples: [
    {
      problem:
        'Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg octane, biết $\\Delta_f H^\\circ_{298}(\\mathrm{C_8H_{18}(l)}) = -250$ kJ/mol.',
      steps: [
        'Phương trình cho $1$ mol: $\\mathrm{C_8H_{18}(l)} + \\dfrac{25}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{8CO_2(g)} + \\mathrm{9H_2O(g)}$.',
        '$\\Delta_r H^\\circ_{298} = 8 \\cdot (-394) + 9 \\cdot (-242) - (-250) = -5\\,080$ kJ.',
        '$n = \\dfrac{1\\,000}{114} \\approx 8{,}77$ mol, nên $Q = \\dfrac{1\\,000}{114} \\cdot 5\\,080 \\approx 44\\,561$ kJ.',
      ],
      answer: 'Đốt $1$ kg octane toả ra khoảng $44\\,561$ kJ.',
    },
    {
      problem:
        'Giả định tốc độ cháy của than tỉ lệ thuận với nồng độ oxygen. Khi oxygen trong không khí giảm từ $21\\%$ xuống $14\\%$ thể tích, tốc độ cháy giảm bao nhiêu lần?',
      steps: [
        '$\\dfrac{v_1}{v_2} = \\dfrac{k \\cdot 21}{k \\cdot 14} = \\dfrac{21}{14}$.',
        '$\\dfrac{21}{14} = 1{,}5$.',
      ],
      answer: 'Tốc độ cháy giảm $1{,}5$ lần.',
    },
    {
      problem:
        'Một căn bếp kín có thể tích $40\\ \\mathrm{m^3}$. Khí methane có giới hạn nổ dưới là $5\\%$. Tính thể tích methane rò rỉ làm căn bếp đạt giới hạn này (coi khí phân bố đều).',
      steps: [
        'Giới hạn dưới tính theo $\\%$ thể tích của hỗn hợp, ở đây coi bằng thể tích căn bếp.',
        '$V = 5\\% \\cdot 40 = 2\\ \\mathrm{m^3}$.',
      ],
      answer:
        'Chỉ cần $2\\ \\mathrm{m^3}$ methane. Thực tế khí không đều nên có chỗ đạt mức nguy hiểm sớm hơn.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Cho $\\mathrm{CH_4(g)} + \\mathrm{2O_2(g)} \\rightarrow \\mathrm{CO_2(g)} + \\mathrm{2H_2O(g)}$, $\\Delta_r H^\\circ_{298} = -802$ kJ. Biết enthalpy tạo thành của $\\mathrm{CO_2(g)}$ và $\\mathrm{H_2O(g)}$ lần lượt là $-394$ kJ/mol và $-242$ kJ/mol. Tính enthalpy tạo thành chuẩn của $\\mathrm{CH_4(g)}$.',
      answer: -76,
      unit: 'kJ/mol',
      hints: [
        '$\\Delta_f H^\\circ_{298}$ của $\\mathrm{O_2}$ bằng $0$.',
        'Viết $-802$ bằng tổng sản phẩm trừ chất đầu.',
      ],
      solution: '$-802 = -394 + 2 \\cdot (-242) - x$, nên $x = -394 - 484 + 802 = -76$ kJ/mol.',
    },
    {
      type: 'number',
      prompt:
        'Củi khô chứa $54\\%$ khối lượng cellulose. Coi cellulose gồm các gốc glucose ($162$ g/mol), mỗi gốc khi đốt toả ra $2\\,880$ kJ. Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg củi khô.',
      answer: 9600,
      tolerance: 5,
      unit: 'kJ',
      hints: [
        'Tính khối lượng cellulose trong $1\\,000$ g củi.',
        'Số mol gốc glucose bằng khối lượng chia $162$.',
      ],
      solution:
        '$m = 540$ g, nên $n = \\dfrac{540}{162} = \\dfrac{10}{3}$ mol và $Q = \\dfrac{10}{3} \\cdot 2\\,880 = 9\\,600$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Cho $\\mathrm{2NH_4NO_3(s)} \\rightarrow \\mathrm{2N_2(g)} + \\mathrm{O_2(g)} + \\mathrm{4H_2O(g)}$. Biết enthalpy tạo thành của $\\mathrm{NH_4NO_3(s)}$ là $-365{,}6$ kJ/mol và của $\\mathrm{H_2O(g)}$ là $-242$ kJ/mol. Tính $\\Delta_r H^\\circ_{298}$ của phản ứng như đã viết.',
      answer: -236.8,
      tolerance: 0.1,
      unit: 'kJ',
      hints: ['Đơn chất có enthalpy tạo thành bằng $0$.'],
      solution:
        '$\\Delta_r H^\\circ_{298} = 4 \\cdot (-242) - 2 \\cdot (-365{,}6) = -968 + 731{,}2 = -236{,}8$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Vụ nổ ở cảng Beirut năm 2020 liên quan đến khoảng $2\\,700$ tấn ammonium nitrate. Biết $\\mathrm{2NH_4NO_3(s)} \\rightarrow \\mathrm{2N_2(g)} + \\mathrm{O_2(g)} + \\mathrm{4H_2O(g)}$ có $\\Delta_r H^\\circ_{298} = -236{,}8$ kJ, tính nhiệt lượng toả ra khi toàn bộ lượng đó phân huỷ, viết theo tỉ kJ ($10^9$ kJ) và làm tròn đến hàng phần mười. Biết $M_{NH_4NO_3} = 80$ g/mol.',
      answer: 4,
      tolerance: 0.05,
      hints: [
        '$\\Delta_r H^\\circ_{298} = -236{,}8$ kJ ứng với $2$ mol ammonium nitrate.',
        'Đổi $2\\,700$ tấn sang gam để tính số mol.',
      ],
      solution:
        '$n = \\dfrac{2{,}7 \\cdot 10^9}{80} = 3{,}375 \\cdot 10^7$ mol; mỗi mol toả ra $\\dfrac{236{,}8}{2} = 118{,}4$ kJ, nên $Q = 3{,}375 \\cdot 10^7 \\cdot 118{,}4 \\approx 4{,}0 \\cdot 10^9$ kJ, tức khoảng $4{,}0$ tỉ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Một loại gas có tỉ lệ mol $\\mathrm{C_3H_8 : C_4H_{10}} = 2 : 3$. Đốt $1$ mol $\\mathrm{C_3H_8}$ toả ra $2\\,045$ kJ, đốt $1$ mol $\\mathrm{C_4H_{10}}$ toả ra $2\\,660$ kJ. Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg gas này.',
      answer: 46069,
      tolerance: 100,
      unit: 'kJ',
      hints: [
        'Tính cho $1$ mol hỗn hợp: $0{,}4$ mol propane và $0{,}6$ mol butane.',
        'Khối lượng $1$ mol hỗn hợp là $52{,}4$ g.',
      ],
      solution:
        '$Q_{1\\,mol} = 0{,}4 \\cdot 2\\,045 + 0{,}6 \\cdot 2\\,660 = 2\\,414$ kJ; $\\bar{M} = 52{,}4$ g/mol, nên $1$ kg gas toả ra $\\dfrac{1\\,000}{52{,}4} \\cdot 2\\,414 \\approx 46\\,069$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Một người ngủ trong ô tô đóng kín cửa. Khi oxygen giảm từ $21\\%$ xuống $16\\%$ thể tích, tốc độ phản ứng hô hấp giảm bao nhiêu lần? Giả định tốc độ tỉ lệ thuận với nồng độ oxygen; làm tròn đến hàng phần trăm.',
      answer: 1.31,
      tolerance: 0.01,
      hints: ['Lập tỉ số $\\dfrac{v_1}{v_2}$.'],
      solution: '$\\dfrac{v_1}{v_2} = \\dfrac{21}{16} \\approx 1{,}31$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Trên đỉnh Fansipan, áp suất không khí khoảng $0{,}66$ atm, không khí vẫn chứa $21\\%$ thể tích oxygen. So với nơi có áp suất $1$ atm, tốc độ hô hấp giảm bao nhiêu lần? Giả định tốc độ tỉ lệ thuận với áp suất riêng phần của oxygen; làm tròn đến hàng phần trăm.',
      answer: 1.52,
      tolerance: 0.02,
      hints: [
        'Áp suất riêng phần bằng áp suất chung nhân với phần trăm thể tích.',
        'Phần trăm oxygen như nhau nên có thể giản ước.',
      ],
      solution:
        '$\\dfrac{v_1}{v_2} = \\dfrac{1 \\cdot 0{,}21}{0{,}66 \\cdot 0{,}21} = \\dfrac{1}{0{,}66} \\approx 1{,}52$ lần.',
    },
    {
      type: 'choice',
      prompt:
        'Methane có giới hạn nổ từ $5\\%$ đến $15\\%$. Hỗn hợp nào với không khí có thể nổ khi gặp tia lửa?',
      options: ['$2\\%$ methane', '$10\\%$ methane', '$20\\%$ methane', '$40\\%$ methane'],
      answer: 1,
      hints: ['Chọn giá trị nằm trong khoảng giữa hai giới hạn.'],
      solution:
        '$10\\%$ nằm trong khoảng $5\\%$ đến $15\\%$. Hỗn hợp $2\\%$ quá loãng; $20\\%$ và $40\\%$ thiếu oxygen.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm thể tích methane trong hỗn hợp với không khí mà oxygen vừa đủ đốt cháy hoàn toàn, coi không khí chứa $21\\%$ oxygen. Làm tròn đến hàng phần mười.',
      answer: 9.5,
      tolerance: 0.1,
      unit: '%',
      hints: [
        '$1$ mol methane cần $2$ mol oxygen.',
        'Tính lượng không khí chứa $2$ mol oxygen rồi cộng thêm $1$ mol methane.',
      ],
      solution:
        'Không khí cần: $\\dfrac{2}{0{,}21} \\approx 9{,}52$ mol. Tỉ lệ methane: $\\dfrac{1}{1 + 9{,}52} \\cdot 100\\% \\approx 9{,}5\\%$, nằm trong vùng nổ.',
    },
    {
      type: 'number',
      prompt:
        'Một căn bếp kín có thể tích $30\\ \\mathrm{m^3}$. Butane có giới hạn nổ dưới là $1{,}8\\%$. Tính thể tích butane (theo $\\mathrm{m^3}$) làm căn bếp đạt giới hạn này, coi khí phân bố đều.',
      answer: 0.54,
      tolerance: 0.01,
      hints: ['Giới hạn tính theo phần trăm thể tích.'],
      solution: '$V = 1{,}8\\% \\cdot 30 = 0{,}54\\ \\mathrm{m^3}$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong một phòng kín đầy khí gas, nồng độ đã vượt giới hạn nổ trên. Vì sao vẫn cực kì nguy hiểm khi mở cửa?',
      options: [
        'Không khí tràn vào làm nồng độ giảm, hỗn hợp đi vào vùng nổ.',
        'Mở cửa làm khí gas phân huỷ thành hydrogen.',
        'Gas càng nhiều oxygen thì giới hạn nổ càng tăng.',
        'Ở trên giới hạn trên gas luôn tự bốc cháy.',
      ],
      answer: 0,
      hints: ['Theo dõi nồng độ gas khi thêm không khí.'],
      solution:
        'Khí quá giàu chưa nổ vì thiếu oxygen; khi được pha loãng, nồng độ đi xuống và qua vùng nổ. Vì thế phải tránh mọi tia lửa, không bật tắt công tắc điện khi thông gió.',
    },
  ],
  takeaways: [
    '$\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(sp) - \\sum \\Delta_f H^\\circ_{298}(cd)$; chú ý số mol trong phương trình khi tính nhiệt lượng.',
    'Cùng khối lượng, khí methane, gas và xăng cho nhiều nhiệt hơn than và cồn.',
    'Giả định tốc độ cháy, tốc độ hô hấp tỉ lệ với nồng độ oxygen thì $\\dfrac{v_1}{v_2}$ bằng tỉ số áp suất riêng phần của oxygen.',
    'Khí cháy trong không khí chỉ nổ giữa giới hạn nổ dưới và giới hạn nổ trên.',
    'Hỗn hợp quá giàu khí vẫn nguy hiểm vì thông gió sẽ đưa nó đi qua vùng nổ.',
  ],
};
