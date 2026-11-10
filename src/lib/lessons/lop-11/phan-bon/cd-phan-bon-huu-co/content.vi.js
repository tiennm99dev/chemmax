/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phân bón hữu cơ truyền thống, phân hữu cơ sinh học, hữu cơ vi sinh, hữu cơ khoáng; quy trình ủ phân compost với tỉ lệ C/N, độ ẩm, đảo trộn và các giai đoạn nhiệt độ; ảnh hưởng của phân bón đến môi trường.',
  intro:
    'Phân hữu cơ tác dụng chậm hơn phân vô cơ, vậy mà ngày càng được khuyến khích dùng. Rơm rạ, lá rụng, vỏ rau củ trong bếp nhà em cũng có thể thành phân bón tốt sau vài tuần ủ, nếu biết cách giữ cho đống ủ đủ ẩm, đủ khí và nóng lên đúng lúc.',
  objectives: [
    'Trình bày được thành phần, ưu điểm và hạn chế của phân hữu cơ truyền thống, phân hữu cơ sinh học, hữu cơ vi sinh và hữu cơ khoáng.',
    'Nêu được các điều kiện và các giai đoạn của quá trình ủ phân compost.',
    'Tính được tỉ lệ C/N của hỗn hợp nguyên liệu ủ.',
    'Nêu được ảnh hưởng của việc sử dụng phân bón không đúng cách đến môi trường.',
  ],
  sections: [
    {
      heading: 'Phân bón hữu cơ truyền thống',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân bón hữu cơ truyền thống',
          text: 'Phân bón hữu cơ truyền thống là phân có nguồn gốc từ chất thải động vật, phụ phẩm cây trồng và các chất hữu cơ khác, được xử lí, ủ theo phương pháp truyền thống, ví dụ phân chuồng, phân xanh, phân rác, phân compost.',
        },
        {
          type: 'table',
          head: ['Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Cung cấp nhiều nguyên tố đa lượng, trung lượng, vi lượng.',
              'Hàm lượng chất dinh dưỡng thấp, không ổn định.',
            ],
            [
              'Tăng mùn, làm đất tơi xốp, giữ ẩm, nuôi vi sinh vật đất.',
              'Tác dụng chậm, phải bón lượng lớn, cồng kềnh khi vận chuyển.',
            ],
            [
              'Tận dụng được chất thải, chi phí thấp.',
              'Nếu chưa ủ hoai có thể mang mầm bệnh, hạt cỏ dại và gây mùi.',
            ],
          ],
          caption: 'Ưu điểm và hạn chế của phân hữu cơ truyền thống',
        },
        {
          type: 'p',
          text: 'Phân chuồng chỉ chứa khoảng $0{,}5\\%$ N, nên muốn có $5$ kg N cần cả tấn phân chuồng, trong khi chỉ cần khoảng $11$ kg urea. Bù lại, phân hữu cơ cải tạo đất lâu dài mà phân vô cơ không làm được.',
        },
      ],
    },
    {
      heading: 'Phân hữu cơ sinh học, hữu cơ vi sinh, hữu cơ khoáng',
      blocks: [
        {
          type: 'p',
          text: 'Đây là các loại phân hữu cơ được sản xuất theo quy trình công nghiệp, có thành phần ổn định và được kiểm soát chất lượng.',
        },
        {
          type: 'table',
          head: ['Loại phân', 'Thành phần', 'Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Hữu cơ sinh học',
              'Chất hữu cơ có bổ sung chất sinh học như humic acid, fulvic acid, amino acid, vitamin.',
              'Kích thích cây ra rễ, sinh trưởng, tăng sức chống chịu.',
              'Giá cao hơn phân truyền thống; chất sinh học dễ phân huỷ khi bảo quản kém.',
            ],
            [
              'Hữu cơ vi sinh',
              'Chất hữu cơ có chứa vi sinh vật có ích (cố định đạm, phân giải lân, phân giải cellulose…).',
              'Vi sinh vật tiếp tục làm giàu dinh dưỡng và cải tạo đất sau khi bón.',
              'Vi sinh vật dễ chết khi gặp nắng, nhiệt độ cao, hoá chất; có hạn sử dụng.',
            ],
            [
              'Hữu cơ khoáng',
              'Chất hữu cơ được phối trộn thêm phân vô cơ (N, P, K).',
              'Vừa cải tạo đất vừa cung cấp nhanh chất dinh dưỡng.',
              'Bón nhiều có thể gây chua đất, ô nhiễm như phân vô cơ.',
            ],
          ],
          caption: 'So sánh ba loại phân hữu cơ sản xuất công nghiệp',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Sử dụng phân hữu cơ',
          text: 'Phân hữu cơ thường dùng để bón lót trước khi gieo trồng khoảng nửa tháng, vùi sâu vào đất. Phân chuồng phải ủ hoai trước khi bón. Không trộn phân hữu cơ vi sinh với vôi hoặc thuốc bảo vệ thực vật vì làm chết vi sinh vật.',
        },
      ],
    },
    {
      heading: 'Ủ phân compost',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân compost',
          text: 'Phân compost là phân hữu cơ tạo thành khi vi sinh vật hiếu khí (cần oxygen) phân huỷ chất thải hữu cơ như rơm rạ, lá cây, rác thải nhà bếp, phân chuồng thành chất mùn ổn định.',
        },
        {
          type: 'table',
          head: ['Yếu tố', 'Điều kiện thích hợp', 'Nếu không đạt'],
          rows: [
            [
              'Tỉ lệ C/N',
              'Khoảng $25$ – $30$: trộn vật liệu "nâu" giàu carbon (rơm, lá khô) với vật liệu "xanh" giàu nitrogen (rác rau, phân chuồng).',
              'C/N cao: phân huỷ chậm. C/N thấp: mất đạm dưới dạng $\\mathrm{NH_3}$, có mùi khai.',
            ],
            [
              'Độ ẩm',
              'Khoảng $50$ – $60\\%$: nắm chặt thấy rỉ vài giọt nước.',
              'Quá khô: vi sinh vật ngừng hoạt động. Quá ướt: thiếu oxygen, thối, mùi hôi.',
            ],
            [
              'Oxygen',
              'Đảo trộn định kì, đống ủ không nén chặt.',
              'Phân huỷ kị khí, sinh $\\mathrm{H_2S}$, $\\mathrm{CH_4}$ có mùi hôi.',
            ],
            ['Kích thước vật liệu', 'Cắt nhỏ vài centimét.', 'Vật liệu to phân huỷ chậm.'],
          ],
          caption: 'Các điều kiện của quá trình ủ compost',
        },
        {
          type: 'tex',
          tex: '\\dfrac{C}{N} = \\dfrac{m_1 \\cdot \\%C_1 + m_2 \\cdot \\%C_2}{m_1 \\cdot \\%N_1 + m_2 \\cdot \\%N_2}',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Giai đoạn ấm (vài ngày đầu): vi sinh vật ưa ấm phân huỷ đường, tinh bột, protein; đống ủ nóng dần lên.',
            'Giai đoạn nóng: nhiệt độ lên khoảng $55$ – $65\\ ^\\circ\\mathrm{C}$, vi sinh vật ưa nhiệt phân huỷ cellulose; nhiệt độ cao diệt phần lớn mầm bệnh, trứng giun, hạt cỏ dại. Cần đảo trộn để cấp oxygen và tránh quá nóng.',
            'Giai đoạn nguội: chất dễ phân huỷ cạn dần, nhiệt độ hạ xuống, vi sinh vật ưa ấm và nấm quay lại phân huỷ phần khó phân huỷ.',
            'Giai đoạn ủ chín: nhiệt độ gần bằng môi trường, chất hữu cơ chuyển thành mùn màu nâu đen, tơi xốp, mùi đất.',
          ],
        },
      ],
    },
    {
      heading: 'Phân bón và môi trường',
      blocks: [
        {
          type: 'list',
          items: [
            'Bón quá nhiều ammonium sulfate làm đất chua thêm; bón nhiều superphosphate lâu ngày làm đất chai cứng.',
            'Phân đạm, phân lân thừa bị rửa trôi xuống sông, hồ gây hiện tượng phú dưỡng: tảo phát triển mạnh, nước thiếu oxygen, cá chết.',
            'Phân đạm thừa làm tích luỹ ion nitrate trong rau, quả, có hại cho sức khoẻ.',
            'Phân chuồng chưa ủ hoai, đổ bừa bãi gây mùi, phát tán mầm bệnh và ô nhiễm nguồn nước.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bón phân cân đối',
          text: 'Kết hợp phân hữu cơ với phân vô cơ theo đúng nhu cầu của cây vừa giữ năng suất, vừa giảm lượng phân vô cơ, bảo vệ đất và nguồn nước.',
        },
      ],
    },
    {
      heading: 'Dự án: Ủ phân compost từ rác thải nhà bếp',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: biến rác hữu cơ của gia đình thành phân compost trong khoảng $6$ – $8$ tuần, theo dõi nhiệt độ và độ ẩm để hiểu quá trình ủ.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: thùng nhựa có đục lỗ thông khí (hoặc hố ủ), rác rau củ quả, lá khô hoặc rơm cắt nhỏ, một ít đất vườn hoặc chế phẩm vi sinh, nhiệt kế, găng tay.',
            'Ước lượng tỉ lệ C/N: khoảng $2$ phần vật liệu nâu với $1$ phần vật liệu xanh theo khối lượng. Không cho thịt, cá, dầu mỡ vào thùng ủ.',
            'Xếp xen kẽ các lớp nâu và xanh, tưới nước đến độ ẩm $50$ – $60\\%$, đậy nắp.',
            'Mỗi ngày đo nhiệt độ ở giữa đống ủ; mỗi tuần đảo trộn một lần, kiểm tra độ ẩm bằng cách nắm tay.',
            'Khi nhiệt độ gần bằng nhiệt độ không khí và vật liệu thành mùn nâu đen, mùi đất, dùng thử cho một chậu cây và so sánh với chậu không bón.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: đồ thị nhiệt độ theo ngày, ảnh chụp các giai đoạn, các sự cố (mùi hôi, quá khô) và cách em xử lí, kết quả so sánh hai chậu cây. Đeo găng tay và rửa tay sạch sau mỗi lần làm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng đống ủ compost',
    instruction:
      'Chọn lượng vật liệu nâu, xanh, độ ẩm và cách đảo trộn, rồi kéo thanh "Ngày thứ" để xem đống ủ đi qua các giai đoạn. Làm cho đống ủ có ít nhất $3$ ngày từ $55\\ ^\\circ\\mathrm{C}$ trở lên. Điều gì xảy ra khi độ ẩm chỉ $35\\%$, hoặc khi không đảo trộn?',
  },
  examples: [
    {
      problem:
        'Trộn $10$ kg rơm ($45\\%$ C, $0{,}75\\%$ N) với $5$ kg rác rau và phân chuồng ($30\\%$ C, $2{,}5\\%$ N). Tính tỉ lệ C/N của hỗn hợp. Hỗn hợp có thích hợp để ủ compost không?',
      steps: [
        'Khối lượng C: $10 \\cdot 0{,}45 + 5 \\cdot 0{,}30 = 4{,}5 + 1{,}5 = 6$ kg.',
        'Khối lượng N: $10 \\cdot 0{,}0075 + 5 \\cdot 0{,}025 = 0{,}075 + 0{,}125 = 0{,}2$ kg.',
        '$\\dfrac{C}{N} = \\dfrac{6}{0{,}2} = 30$, nằm trong khoảng $25$ – $30$.',
      ],
      answer: 'Tỉ lệ C/N bằng $30$, thích hợp để ủ compost.',
    },
    {
      problem:
        'Có $12$ kg rơm ($45\\%$ C, $0{,}75\\%$ N). Cần trộn thêm bao nhiêu kilôgam rác rau và phân chuồng ($30\\%$ C, $2{,}5\\%$ N) để hỗn hợp có C/N bằng $30$?',
      steps: [
        'Gọi $x$ là khối lượng vật liệu xanh (kg). Khối lượng C: $5{,}4 + 0{,}3x$; khối lượng N: $0{,}09 + 0{,}025x$.',
        'Điều kiện: $5{,}4 + 0{,}3x = 30(0{,}09 + 0{,}025x) = 2{,}7 + 0{,}75x$.',
        '$0{,}45x = 2{,}7$, nên $x = 6$.',
      ],
      answer: 'Cần trộn thêm $6$ kg vật liệu xanh.',
    },
    {
      problem:
        'Một tấn phân chuồng chứa khoảng $0{,}5\\%$ N. Lượng N này tương đương với bao nhiêu kilôgam phân urea ($46\\%$ N)? Làm tròn đến hàng phần mười.',
      steps: [
        '$m_\\mathrm{N} = 1\\,000 \\cdot 0{,}5\\% = 5$ kg.',
        '$m_{\\text{urea}} = \\dfrac{5 \\cdot 100}{46} \\approx 10{,}9$ kg.',
      ],
      answer:
        'Tương đương khoảng $10{,}9$ kg urea; phân chuồng nghèo đạm hơn nhiều nhưng có thêm tác dụng cải tạo đất.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Loại phân nào sau đây là phân bón hữu cơ truyền thống?',
      options: ['Phân chuồng', 'Phân urea', 'Phân NPK 16-16-8', 'Phân KCl'],
      answer: 0,
      hints: ['Phân hữu cơ truyền thống có nguồn gốc từ chất thải động vật, phụ phẩm cây trồng.'],
      solution: 'Phân chuồng là phân hữu cơ truyền thống; urea, NPK, KCl là phân vô cơ.',
    },
    {
      type: 'multi',
      prompt: 'Những ưu điểm nào là của phân hữu cơ?',
      options: [
        'Làm đất tơi xốp, tăng mùn.',
        'Giữ ẩm cho đất, nuôi vi sinh vật đất.',
        'Hàm lượng chất dinh dưỡng rất cao.',
        'Cây hấp thụ nhanh hơn phân vô cơ.',
        'Tận dụng được chất thải nông nghiệp.',
      ],
      answers: [0, 1, 4],
      hints: ['Phân hữu cơ tác dụng chậm và nghèo dinh dưỡng hơn phân vô cơ.'],
      solution:
        'Phân hữu cơ cải tạo đất, giữ ẩm, nuôi vi sinh vật và tận dụng chất thải; nhưng hàm lượng dinh dưỡng thấp và tác dụng chậm.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi loại phân với đặc điểm thành phần của nó.',
      left: ['Hữu cơ vi sinh', 'Hữu cơ khoáng', 'Hữu cơ sinh học', 'Hữu cơ truyền thống'],
      right: [
        'Có chứa vi sinh vật có ích.',
        'Được phối trộn thêm phân vô cơ N, P, K.',
        'Có bổ sung humic acid, amino acid, vitamin.',
        'Phân chuồng, phân xanh ủ theo cách cổ truyền.',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Tên mỗi loại gợi ý thành phần thêm vào chất hữu cơ: vi sinh vật, chất khoáng, chất sinh học.',
      ],
      solution:
        'Hữu cơ vi sinh chứa vi sinh vật có ích; hữu cơ khoáng có thêm phân vô cơ; hữu cơ sinh học có chất sinh học như humic acid; hữu cơ truyền thống là phân chuồng, phân xanh.',
    },
    {
      type: 'number',
      prompt:
        'Trộn $10$ kg rơm ($45\\%$ C, $0{,}75\\%$ N) với $10$ kg rác rau ($30\\%$ C, $2{,}5\\%$ N). Tính tỉ lệ C/N của hỗn hợp, làm tròn đến hàng phần mười.',
      answer: 23.1,
      tolerance: 0.05,
      hints: [
        'Tính tổng khối lượng C và tổng khối lượng N trước, rồi mới chia.',
        'C: $4{,}5 + 3 = 7{,}5$ kg.',
      ],
      solution:
        'C: $4{,}5 + 3 = 7{,}5$ kg; N: $0{,}075 + 0{,}25 = 0{,}325$ kg; $\\dfrac{C}{N} = \\dfrac{7{,}5}{0{,}325} \\approx 23{,}1$.',
    },
    {
      type: 'number',
      prompt:
        'Có $8$ kg lá khô ($45\\%$ C, $0{,}75\\%$ N). Cần trộn thêm bao nhiêu kilôgam rác rau ($30\\%$ C, $2{,}5\\%$ N) để hỗn hợp có C/N bằng $30$?',
      answer: 4,
      unit: 'kg',
      hints: ['Gọi $x$ là khối lượng rác rau, lập phương trình $\\dfrac{C}{N} = 30$.'],
      solution:
        '$3{,}6 + 0{,}3x = 30(0{,}06 + 0{,}025x) = 1{,}8 + 0{,}75x$, nên $0{,}45x = 1{,}8$ và $x = 4$ kg.',
    },
    {
      type: 'choice',
      prompt: 'Độ ẩm thích hợp của đống ủ compost là khoảng',
      options: ['$50$ – $60\\%$', '$10$ – $20\\%$', '$80$ – $90\\%$', '$100\\%$'],
      answer: 0,
      hints: ['Vi sinh vật cần nước nhưng cũng cần không khí trong các khe rỗng.'],
      solution:
        'Khoảng $50$ – $60\\%$: đủ nước cho vi sinh vật mà các khe rỗng vẫn còn không khí. Khô quá thì vi sinh vật ngừng hoạt động, ướt quá thì thiếu oxygen.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của quá trình ủ compost theo thứ tự thời gian.',
      items: ['Giai đoạn nóng', 'Giai đoạn ủ chín', 'Giai đoạn ấm', 'Giai đoạn nguội'],
      answer: [2, 0, 3, 1],
      hints: ['Đống ủ nóng dần lên, đạt cực đại rồi mới hạ xuống.'],
      solution: 'Ấm → nóng → nguội → ủ chín.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải đảo trộn đống ủ compost định kì?',
      options: [
        'Để cung cấp oxygen cho vi sinh vật hiếu khí và trộn đều vật liệu.',
        'Để làm đống ủ khô hoàn toàn.',
        'Để tiêu diệt vi sinh vật trong đống ủ.',
        'Để giữ nhiệt độ đống ủ luôn trên $80\\ ^\\circ\\mathrm{C}$.',
      ],
      answer: 0,
      hints: ['Ủ compost là quá trình hiếu khí.'],
      solution:
        'Vi sinh vật hiếu khí tiêu thụ dần oxygen trong đống ủ; đảo trộn đưa không khí vào, trộn đều phần ngoài vào giữa và tránh đống ủ quá nóng.',
    },
    {
      type: 'choice',
      prompt: 'Giai đoạn nóng ($55$ – $65\\ ^\\circ\\mathrm{C}$) của đống ủ có ý nghĩa gì?',
      options: [
        'Diệt phần lớn mầm bệnh, trứng giun và hạt cỏ dại.',
        'Làm bay hơi hết nitrogen trong phân.',
        'Biến chất hữu cơ thành phân vô cơ.',
        'Làm đống ủ ngừng phân huỷ.',
      ],
      answer: 0,
      hints: ['Phần lớn mầm bệnh không chịu được nhiệt độ cao trong nhiều ngày.'],
      solution:
        'Nhiệt độ $55\\ ^\\circ\\mathrm{C}$ trở lên trong vài ngày diệt phần lớn mầm bệnh, trứng giun và hạt cỏ dại, nên phân compost an toàn hơn phân tươi.',
    },
    {
      type: 'number',
      prompt: 'Hai tấn phân chuồng chứa $0{,}5\\%$ N có bao nhiêu kilôgam nitrogen?',
      answer: 10,
      unit: 'kg',
      hints: ['$2$ tấn $= 2\\,000$ kg.'],
      solution: '$m_\\mathrm{N} = 2\\,000 \\cdot 0{,}5\\% = 10$ kg.',
    },
    {
      type: 'text',
      prompt:
        'Đống ủ có quá nhiều phân gà (C/N thấp) bốc mùi khai. Khí có mùi khai đó là khí gì? (Viết tên hoặc công thức.)',
      accept: ['ammonia', 'NH3', 'amoniac', 'khí ammonia', 'khí NH3'],
      hints: ['Khi thừa nitrogen, vi sinh vật giải phóng nitrogen dưới dạng một khí có mùi khai.'],
      solution:
        'Đó là khí ammonia $\\mathrm{NH_3}$. Cần trộn thêm vật liệu nâu giàu carbon như rơm, lá khô để tăng tỉ lệ C/N.',
    },
  ],
  takeaways: [
    'Phân hữu cơ truyền thống (phân chuồng, phân xanh, compost) cải tạo đất nhưng nghèo dinh dưỡng và tác dụng chậm.',
    'Phân hữu cơ sinh học có thêm chất sinh học; hữu cơ vi sinh có vi sinh vật có ích; hữu cơ khoáng có thêm phân vô cơ.',
    'Ủ compost là quá trình hiếu khí: C/N khoảng $25$ – $30$, độ ẩm $50$ – $60\\%$, đảo trộn định kì.',
    'Đống ủ đi qua bốn giai đoạn: ấm, nóng ($55$ – $65\\ ^\\circ\\mathrm{C}$, diệt mầm bệnh), nguội, ủ chín.',
    'Lạm dụng phân bón làm chua, chai đất và gây phú dưỡng nguồn nước; nên kết hợp phân hữu cơ với phân vô cơ.',
  ],
};
