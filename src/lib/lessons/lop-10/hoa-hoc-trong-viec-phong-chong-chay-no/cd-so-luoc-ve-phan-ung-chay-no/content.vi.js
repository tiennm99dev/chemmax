/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bản chất của phản ứng cháy, tam giác cháy với điều kiện cần và đủ để cháy, sản phẩm độc hại, nổ vật lí, nổ hoá học và nổ bụi.',
  intro:
    'Cùng một ngọn lửa có thể nấu chín bữa cơm hoặc thiêu rụi cả ngôi nhà. Một chùm bóng bay bơm khí hydrogen có thể nổ khi gặp lửa, còn một quả bóng bơm quá căng thì nổ dù chẳng có lửa nào. Điều gì giống và khác nhau trong những hiện tượng này, và khi nào lửa mới cháy được?',
  objectives: [
    'Nêu được khái niệm và các đặc điểm cơ bản của phản ứng cháy.',
    'Nêu được điều kiện cần và điều kiện đủ để phản ứng cháy xảy ra (tam giác cháy).',
    'Trình bày được sản phẩm độc hại của phản ứng cháy và cách phòng ngộ độc.',
    'Phân biệt được nổ vật lí với nổ hoá học; nêu được khái niệm nổ bụi.',
  ],
  sections: [
    {
      heading: 'Phản ứng cháy',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng cháy',
          text: 'Phản ứng cháy là phản ứng oxi hoá – khử có toả nhiệt và phát sáng, xảy ra giữa chất cháy với oxygen trong không khí hoặc với một chất oxi hoá khác.',
        },
        {
          type: 'p',
          text: 'Ví dụ, than đá cháy theo phản ứng $\\mathrm{C} + \\mathrm{O_2} \\rightarrow \\mathrm{CO_2}$; khí gas cháy theo phản ứng $\\mathrm{C_3H_8} + \\mathrm{5O_2} \\rightarrow \\mathrm{3CO_2} + \\mathrm{4H_2O}$. Không phải cứ cháy là cần oxygen: magnesium cháy được trong khí carbon dioxide theo phản ứng $\\mathrm{2Mg} + \\mathrm{CO_2} \\rightarrow \\mathrm{2MgO} + \\mathrm{C}$.',
        },
        {
          type: 'list',
          items: [
            'Cháy thường gồm một hoặc nhiều phản ứng nối tiếp; nhiệt của phản ứng trước làm nóng các chất cho phản ứng sau.',
            'Quá trình cháy tiếp diễn khi còn chất cháy và được cung cấp chất oxi hoá liên tục.',
            'Phản ứng cháy thường có $\\Delta H < 0$ (toả nhiệt mạnh) và $\\Delta S > 0$ (sinh nhiều khí và hơi) nên $\\Delta G = \\Delta H - T\\Delta S < 0$ ở mọi nhiệt độ: về nhiệt động, chúng có thể tự xảy ra. Nhưng cần một nguồn nhiệt ban đầu để vượt qua rào cản năng lượng hoạt hoá.',
          ],
        },
      ],
    },
    {
      heading: 'Điều kiện để phản ứng cháy xảy ra',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Điều kiện cần: tam giác cháy',
          text: 'Phải có đồng thời ba yếu tố: chất cháy, chất oxi hoá và nguồn nhiệt. Thiếu một yếu tố thì phản ứng cháy không xảy ra; lấy đi một yếu tố thì đám cháy tắt.',
        },
        {
          type: 'p',
          text: 'Có đủ ba yếu tố vẫn chưa chắc đã cháy. Điều kiện đủ gồm:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Nồng độ oxygen trong không khí lớn hơn $14\\%$ thể tích. Một số chất rất dễ cháy, nổ mạnh như hydrogen, methane, acetylene không áp dụng ngưỡng này.',
            'Nguồn nhiệt đủ để đưa hỗn hợp đến nhiệt độ bắt lửa của chất cháy.',
            'Thời gian tiếp xúc giữa chất cháy, chất oxi hoá và nguồn nhiệt đủ lâu để chất cháy bắt lửa.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cháy an toàn và không an toàn',
          text: 'Cháy an toàn diễn ra đúng mục đích, đúng mức độ và trong tầm kiểm soát của người sử dụng. Cháy không an toàn vượt khỏi phạm vi cần thiết, mất kiểm soát và khiến người sử dụng bị động, bất ngờ.',
        },
      ],
    },
    {
      heading: 'Sản phẩm cháy và độc tính',
      blocks: [
        {
          type: 'p',
          text: 'Sản phẩm cháy phụ thuộc vào bản chất chất cháy, chất oxi hoá và việc cháy hoàn toàn hay không hoàn toàn. Khi thiếu oxygen, sự cháy không hoàn toàn sinh ra chất độc, nhất là carbon monoxide.',
        },
        {
          type: 'table',
          head: ['Sản phẩm', 'Sinh ra khi', 'Tác hại'],
          rows: [
            [
              '$\\mathrm{CO}$',
              'Than, gas, xăng cháy thiếu oxygen',
              'Kết hợp với hemoglobin trong máu, làm giảm vận chuyển oxygen; không màu, không mùi nên rất khó phát hiện',
            ],
            [
              '$\\mathrm{SO_2}$',
              'Đốt than, dầu có lẫn sulfur',
              'Gây kích ứng đường hô hấp, là nguyên nhân gây mưa acid',
            ],
            [
              '$\\mathrm{HCl}$',
              'Đốt vật liệu chứa chlorine như nhựa PVC',
              'Ăn mòn, gây tổn thương đường hô hấp',
            ],
          ],
          caption: 'Một số sản phẩm cháy độc hại thường gặp',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Không đốt than trong phòng kín',
          text: 'Than tổ ong hay than củi đốt trong phòng đóng kín cửa cháy thiếu oxygen và sinh ra $\\mathrm{CO}$, có thể gây hôn mê, tổn thương não và tử vong. Luôn dùng nhiên liệu ở nơi thông thoáng và lắp đặt ống khói đúng cách.',
        },
      ],
    },
    {
      heading: 'Phản ứng nổ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nổ',
          text: 'Nổ là quá trình giải phóng năng lượng rất nhanh, làm khí dãn nở đột ngột và tạo ra sóng áp suất mạnh.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Nổ vật lí', 'Nổ hoá học'],
          rows: [
            [
              'Nguyên nhân',
              'Áp suất trong vật chứa vượt quá độ bền của vỏ',
              'Phản ứng hoá học toả nhiệt rất nhanh, khí nóng dãn nở đột ngột',
            ],
            ['Có chất mới không?', 'Không', 'Có'],
            ['Ví dụ', 'Bơm bóng bay quá căng', 'Bóng bay chứa hydrogen gặp lửa'],
          ],
        },
        {
          type: 'p',
          text: 'Ngoài hai loại trên còn có nổ hạt nhân, gây ra bởi biến đổi trong hạt nhân nguyên tử. Phản ứng $\\mathrm{2H_2} + \\mathrm{O_2} \\rightarrow \\mathrm{2H_2O}$ của bóng bay chứa hydrogen là một phản ứng cháy xảy ra cực nhanh: khi bóng vỡ, hydrogen trộn ngay với oxygen của không khí và bùng cháy trong tích tắc.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nổ bụi',
          text: 'Nổ bụi là hiện tượng nổ của các hạt rắn cháy được (bụi than, bột mì, mùn cưa, bụi nhôm) lơ lửng trong không khí khi gặp nguồn nhiệt. Hạt càng mịn, diện tích tiếp xúc với oxygen càng lớn, nên cháy lan gần như tức thời, nhất là trong không gian kín.',
        },
        { type: 'widget', name: 'loai-no' },
      ],
    },
    {
      heading: 'Dự án: Khảo sát nguy cơ cháy, nổ tại nhà em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: chỉ ra các chất cháy và nguồn nhiệt trong nhà, đánh giá những nơi nào đang "đủ ba cạnh" của tam giác cháy và đề xuất cách tách chúng ra. Đây là hoạt động quan sát; không đốt thử bất kì vật gì.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: giấy, bút, điện thoại để chụp ảnh; có người lớn đi cùng khi kiểm tra bếp gas và bảng điện.',
            'Đi quanh nhà, liệt kê từng khu vực (bếp, phòng ngủ, nơi để xe, kho) và ghi lại chất cháy, nguồn nhiệt ở đó.',
            'Đánh dấu nơi chất cháy đặt gần nguồn nhiệt (rèm gần bếp, xăng gần ổ điện, ổ cắm quá tải).',
            'Viết phương trình cháy của hai nhiên liệu nhà em dùng và tính thể tích không khí cần để đốt $1$ mol mỗi chất, coi không khí chứa $21\\%$ oxygen.',
            'Đề xuất biện pháp cho từng nguy cơ và nêu rõ biện pháp đó lấy đi cạnh nào của tam giác cháy.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng khảo sát theo khu vực, các phương trình và kết quả tính, cùng danh sách việc cần sửa ưu tiên từ cao xuống thấp.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tam giác cháy',
    instruction:
      'Bấm để bỏ từng yếu tố của tam giác cháy và kéo thanh oxygen xuống dần. Lửa tắt ở lúc nào? Sau đó đoán từng cách dập lửa trong đời sống đã lấy đi yếu tố nào.',
  },
  examples: [
    {
      problem:
        'Một loại than đá chứa $80\\%$ khối lượng carbon, còn lại là tạp chất không cháy. Biết $\\mathrm{C(s)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}$ có $\\Delta_r H^\\circ_{298} = -394$ kJ. Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg than này.',
      steps: [
        'Khối lượng carbon trong $1$ kg than: $1\\,000 \\cdot 80\\% = 800$ g.',
        'Số mol carbon: $n = \\dfrac{800}{12} \\approx 66{,}67$ mol.',
        'Nhiệt lượng: $Q = 66{,}67 \\cdot 394 \\approx 26\\,267$ kJ.',
      ],
      answer: 'Đốt $1$ kg than toả ra khoảng $26\\,267$ kJ.',
    },
    {
      problem:
        'Tính thể tích không khí (ở điều kiện chuẩn, $24{,}79$ L/mol, chứa $21\\%$ thể tích oxygen) cần để đốt cháy hoàn toàn $1$ mol propane.',
      steps: [
        'Phương trình: $\\mathrm{C_3H_8} + \\mathrm{5O_2} \\rightarrow \\mathrm{3CO_2} + \\mathrm{4H_2O}$, nên cần $5$ mol oxygen.',
        'Thể tích oxygen: $5 \\cdot 24{,}79 = 123{,}95$ L.',
        'Thể tích không khí: $\\dfrac{123{,}95}{0{,}21} \\approx 590{,}2$ L.',
      ],
      answer: 'Cần khoảng $590$ L không khí.',
    },
    {
      problem:
        'Một người bịt kín cửa phòng rồi đốt than sưởi ấm. Giải thích vì sao việc này nguy hiểm, dựa vào điều kiện của phản ứng cháy.',
      steps: [
        'Phòng kín được cấp rất ít không khí mới nên nồng độ oxygen giảm dần khi than cháy.',
        'Thiếu oxygen, carbon cháy không hoàn toàn: $\\mathrm{2C} + \\mathrm{O_2} \\rightarrow \\mathrm{2CO}$.',
        'Khí $\\mathrm{CO}$ không màu, không mùi, kết hợp với hemoglobin làm máu giảm vận chuyển oxygen.',
      ],
      answer:
        'Người trong phòng có thể ngộ độc $\\mathrm{CO}$ mà không hay biết; cần đốt than ở nơi thoáng khí.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phản ứng cháy là',
      options: [
        'phản ứng oxi hoá – khử có toả nhiệt và phát sáng.',
        'mọi phản ứng toả nhiệt.',
        'phản ứng chỉ xảy ra với oxygen trong không khí.',
        'sự biến đổi vật lí khi chất nóng lên.',
      ],
      answer: 0,
      hints: [
        'Hãy nhớ các dấu hiệu đặc trưng của sự cháy.',
        'Magnesium cháy được trong $\\mathrm{CO_2}$.',
      ],
      solution:
        'Phản ứng cháy là phản ứng oxi hoá – khử, toả nhiệt và phát sáng; chất oxi hoá không nhất thiết là oxygen.',
    },
    {
      type: 'multi',
      prompt: 'Ba yếu tố của tam giác cháy gồm những gì?',
      options: ['Chất cháy', 'Chất oxi hoá', 'Nguồn nhiệt', 'Nước', 'Chất xúc tác'],
      answers: [0, 1, 2],
      hints: ['Một trong ba yếu tố đó thường có sẵn trong không khí.'],
      solution:
        'Tam giác cháy gồm chất cháy, chất oxi hoá và nguồn nhiệt; thiếu một yếu tố thì không cháy.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi cách dập lửa với yếu tố của tam giác cháy mà nó lấy đi.',
      left: ['Khoá van bình gas', 'Đậy nắp đèn cồn', 'Phun nước vào củi đang cháy'],
      right: ['Chất cháy', 'Chất oxi hoá', 'Nguồn nhiệt'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Hỏi xem sau khi làm vậy, thứ gì không còn đến được ngọn lửa.'],
      solution:
        'Khoá van bỏ chất cháy; đậy nắp ngăn oxygen; nước hấp thụ nhiệt làm giảm nhiệt độ của củi.',
    },
    {
      type: 'choice',
      prompt:
        'Với chất cháy thông thường, không khí có nồng độ oxygen nào dưới đây chưa đủ để phản ứng cháy xảy ra?',
      options: ['$21\\%$', '$18\\%$', '$16\\%$', '$12\\%$'],
      answer: 3,
      hints: ['Điều kiện đủ yêu cầu oxygen lớn hơn một ngưỡng thể tích.'],
      solution: 'Oxygen phải lớn hơn $14\\%$ thể tích, nên $12\\%$ là chưa đủ.',
    },
    {
      type: 'number',
      prompt:
        'Một loại than đá chứa $84\\%$ khối lượng carbon. Biết đốt $1$ mol carbon toả ra $394$ kJ. Tính năng suất toả nhiệt của than này, tức nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg than.',
      answer: 27580,
      tolerance: 30,
      unit: 'kJ',
      hints: [
        'Tìm khối lượng carbon trong $1\\,000$ g than.',
        'Đổi sang số mol rồi nhân với $394$ kJ.',
      ],
      solution:
        '$m_C = 840$ g, nên $n_C = \\dfrac{840}{12} = 70$ mol và $Q = 70 \\cdot 394 = 27\\,580$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Một viên than tổ ong nặng $1\\,200$ g, chứa $40\\%$ khối lượng carbon. Tính thể tích khí $\\mathrm{CO_2}$ (theo lít, ở điều kiện chuẩn, $24{,}79$ L/mol) sinh ra khi carbon cháy hoàn toàn.',
      answer: 991.6,
      tolerance: 1,
      hints: ['Tính số mol carbon.', 'Theo phương trình, $1$ mol C cho $1$ mol $\\mathrm{CO_2}$.'],
      solution:
        '$m_C = 480$ g, nên $n_C = 40$ mol, $n_{CO_2} = 40$ mol và $V = 40 \\cdot 24{,}79 = 991{,}6$ L.',
    },
    {
      type: 'number',
      prompt:
        'Khí gas có tỉ lệ mol $\\mathrm{C_3H_8 : C_4H_{10}} = 2 : 3$. Tính tỉ khối của khí gas so với không khí ($M = 29$), làm tròn đến hàng phần trăm.',
      answer: 1.81,
      tolerance: 0.02,
      hints: [
        'Phần trăm mol là $40\\%$ và $60\\%$.',
        'Tính khối lượng mol trung bình rồi chia cho $29$.',
      ],
      solution:
        '$\\bar{M} = 0{,}4 \\cdot 44 + 0{,}6 \\cdot 58 = 52{,}4$, tỉ khối là $\\dfrac{52{,}4}{29} \\approx 1{,}81$. Vì nặng hơn không khí, gas rò rỉ sẽ đọng ở chỗ thấp.',
    },
    {
      type: 'choice',
      prompt: 'Hiện tượng nào là nổ vật lí?',
      options: [
        'Bóng bay bị bơm quá căng rồi vỡ.',
        'Khí gas trong phòng kín gặp tia lửa điện.',
        'Bóng bay chứa hydrogen gặp lửa.',
        'Bụi than trong hầm lò bắt lửa.',
      ],
      answer: 0,
      hints: ['Tìm trường hợp không có chất mới tạo thành.'],
      solution:
        'Bóng căng vỡ chỉ do áp suất vượt độ bền của vỏ, không có phản ứng. Các trường hợp còn lại đều có phản ứng cháy.',
    },
    {
      type: 'text',
      prompt:
        'Khí độc không màu, không mùi sinh ra khi than cháy thiếu oxygen có công thức hoá học là gì?',
      accept: ['CO', 'carbon monoxide', 'carbon monoxit', 'cacbon monoxit'],
      hints: ['Khí này có một nguyên tử oxygen trong phân tử.'],
      solution:
        'Đó là carbon monoxide, $\\mathrm{CO}$, sinh ra do phản ứng $\\mathrm{2C} + \\mathrm{O_2} \\rightarrow \\mathrm{2CO}$.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao bột mì lơ lửng dày đặc trong kho kín có thể gây nổ, còn một bao bột mì thì khó bắt lửa?',
      options: [
        'Hạt bột lơ lửng có diện tích tiếp xúc với oxygen rất lớn.',
        'Bột mì bị phân huỷ sinh ra hydrogen khi lơ lửng.',
        'Không khí trong kho kín có nhiều oxygen hơn bên ngoài.',
        'Bột mì chỉ cháy được khi ở trạng thái khí.',
      ],
      answer: 0,
      hints: ['Hãy nghĩ tới yếu tố làm tăng tốc độ phản ứng của chất rắn.'],
      solution:
        'Bụi mịn trộn sẵn với không khí, tiếp xúc với oxygen trên diện tích rất lớn nên cháy lan gần như tức thời: đó là nổ bụi.',
    },
  ],
  takeaways: [
    'Phản ứng cháy là phản ứng oxi hoá – khử có toả nhiệt và phát sáng.',
    'Tam giác cháy gồm chất cháy, chất oxi hoá và nguồn nhiệt; lấy đi một yếu tố thì lửa tắt.',
    'Điều kiện đủ: oxygen lớn hơn $14\\%$ thể tích (với đa số chất cháy), nguồn nhiệt đủ mạnh và thời gian tiếp xúc đủ lâu.',
    'Cháy thiếu oxygen sinh ra $\\mathrm{CO}$ rất độc; đốt than phải ở nơi thoáng khí.',
    'Nổ vật lí chỉ do áp suất, nổ hoá học có phản ứng hoá học; nổ bụi là nổ của các hạt rắn cháy được lơ lửng trong không khí.',
  ],
};
