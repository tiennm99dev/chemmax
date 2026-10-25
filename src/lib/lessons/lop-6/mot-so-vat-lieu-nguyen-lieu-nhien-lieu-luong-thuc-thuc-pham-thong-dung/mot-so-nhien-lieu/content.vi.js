/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhiên liệu là những chất cháy được, khi cháy toả nhiều nhiệt và phát sáng; nhiên liệu có thể ở thể rắn, lỏng hoặc khí, mỗi loại có năng suất toả nhiệt khác nhau, và cần được sử dụng an toàn, tiết kiệm, hướng tới năng lượng sạch.',
  intro:
    'Bếp nhà em đun bằng gì: củi, than, gas hay điện? Xe máy chạy bằng xăng, máy bay chạy bằng dầu. Củi, than, gas, xăng, dầu đều là nhiên liệu. Nhưng đốt cùng một ki-lô-gam, loại nào toả nhiều nhiệt hơn, loại nào thải nhiều khói hơn? Làm sao để đun nấu vừa nhanh, vừa tiết kiệm, vừa an toàn?',
  objectives: [
    'Nêu được khái niệm nhiên liệu và phân loại nhiên liệu theo thể: rắn, lỏng, khí.',
    'Trình bày được tính chất của nhiên liệu và so sánh được nhiệt toả ra của một số nhiên liệu.',
    'Nêu được cách sử dụng nhiên liệu an toàn, hiệu quả, tiết kiệm và bảo đảm sự phát triển bền vững.',
    'Nêu được khái niệm an ninh năng lượng và một số nguồn năng lượng thay thế.',
  ],
  sections: [
    {
      heading: 'Nhiên liệu và phân loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiên liệu',
          text: 'Nhiên liệu là những chất cháy được, khi cháy toả nhiều nhiệt và phát sáng. Nhiên liệu được dùng để đun nấu, sưởi ấm, chạy động cơ, phát điện.',
        },
        {
          type: 'table',
          caption: 'Phân loại nhiên liệu theo thể',
          head: ['Thể', 'Ví dụ', 'Ứng dụng chính'],
          rows: [
            [
              'Rắn',
              'Than đá, than củi, củi, gỗ',
              'Đun nấu, sưởi ấm, nhà máy nhiệt điện, luyện kim',
            ],
            [
              'Lỏng',
              'Xăng, dầu hoả, dầu diesel, cồn',
              'Chạy động cơ xe, tàu, máy bay; một phần để đun nấu, thắp sáng',
            ],
            [
              'Khí',
              'Khí thiên nhiên, khí mỏ dầu, khí gas, khí biogas',
              'Đun nấu, nhà máy điện, công nghiệp',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Than đá, dầu mỏ và khí thiên nhiên là nhiên liệu hoá thạch: chúng được hình thành từ xác sinh vật bị vùi lấp và biến đổi trong hàng triệu năm. Chưng cất dầu mỏ thu được xăng, dầu hoả, dầu diesel và khí đốt.',
        },
      ],
    },
    {
      heading: 'Tính chất của nhiên liệu',
      blocks: [
        {
          type: 'list',
          items: [
            'Nhiên liệu tồn tại ở cả ba thể rắn, lỏng, khí.',
            'Nhiên liệu cháy được; khi cháy toả nhiều nhiệt, phát sáng và tạo ra các chất mới như khí carbon dioxide, hơi nước.',
            'Phần lớn nhiên liệu nhẹ hơn nước (trừ than) và không tan trong nước (trừ cồn). Vì vậy không dùng nước để dập đám cháy xăng, dầu: xăng dầu nổi lên trên và đám cháy lan rộng.',
            'Nhiều nhiên liệu lỏng và khí (xăng, gas) rất dễ bay hơi, dễ bắt lửa, có thể gây cháy nổ.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Năng suất toả nhiệt',
          text: 'Năng suất toả nhiệt $q$ của một nhiên liệu là nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg nhiên liệu đó, đơn vị là J/kg. Đốt cháy hoàn toàn $m$ kg nhiên liệu toả ra nhiệt lượng $Q = q \\cdot m$.',
        },
        {
          type: 'table',
          caption: 'Năng suất toả nhiệt của một số nhiên liệu ($1$ MJ $= 10^6$ J)',
          head: ['Nhiên liệu', 'Năng suất toả nhiệt (J/kg)'],
          rows: [
            ['Củi khô', '$10 \\cdot 10^6$'],
            ['Than bùn', '$14 \\cdot 10^6$'],
            ['Than đá', '$27 \\cdot 10^6$'],
            ['Than gỗ (than củi)', '$34 \\cdot 10^6$'],
            ['Dầu hoả', '$44 \\cdot 10^6$'],
            ['Khí đốt (khí gas)', '$44 \\cdot 10^6$'],
            ['Xăng', '$46 \\cdot 10^6$'],
            ['Hydrogen', '$140 \\cdot 10^6$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nhiên liệu lỏng và khí thường có năng suất toả nhiệt lớn hơn nhiên liệu rắn, cháy sạch hơn và dễ điều chỉnh ngọn lửa. Than đá chứa nhiều tạp chất nên khi đốt sinh nhiều bụi và khí sulfur dioxide, là nhiên liệu hoá thạch gây ô nhiễm nhất.',
        },
      ],
    },
    {
      heading: 'Sử dụng nhiên liệu an toàn, hiệu quả và bền vững',
      blocks: [
        {
          type: 'p',
          text: 'Nhiên liệu cháy hoàn toàn thì toả nhiều nhiệt nhất và ít khí độc nhất. Thiếu không khí, nhiên liệu cháy không hoàn toàn: toả ít nhiệt, sinh khói đen và khí carbon monoxide rất độc. Quá nhiều không khí lại làm nguội ngọn lửa và mang bớt nhiệt đi.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cách sử dụng nhiên liệu hiệu quả',
          text: 'Cung cấp đủ không khí (oxygen) cho quá trình cháy; tăng diện tích tiếp xúc của nhiên liệu với không khí (chẻ nhỏ củi, đập nhỏ than, làm than tổ ong có lỗ); điều chỉnh lượng nhiên liệu phù hợp với nhu cầu sử dụng.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn khi sử dụng nhiên liệu',
          text: 'Để xăng, dầu, bình gas xa nguồn lửa. Không đốt than, củi trong phòng kín vì có thể bị ngộ độc khí carbon monoxide. Khi ngửi thấy mùi gas rò rỉ: khoá van bình gas, mở cửa cho thoáng, tuyệt đối không bật lửa, không bật tắt công tắc điện.',
        },
        {
          type: 'p',
          text: 'Nhiên liệu hoá thạch có hạn, không tái tạo được và khi đốt thải ra nhiều khí carbon dioxide làm Trái Đất nóng lên, cùng các khí gây ô nhiễm. Để phát triển bền vững, cần sử dụng nhiên liệu tiết kiệm (tắt bếp khi không dùng, đi xe đạp, phương tiện công cộng), dùng nhiên liệu sạch hơn như khí biogas, xăng sinh học E5 ($5$ % ethanol, $95$ % xăng thông thường) và phát triển các nguồn năng lượng tái tạo.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'An ninh năng lượng',
          text: 'An ninh năng lượng là bảo đảm có đủ năng lượng ở nhiều dạng khác nhau, sạch và giá rẻ, phục vụ đời sống và sản xuất. Các nguồn năng lượng tái tạo, có thể thay thế dần nhiên liệu hoá thạch: năng lượng mặt trời, gió, thuỷ điện, địa nhiệt, năng lượng sinh học.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đốt thử các nhiên liệu',
    instruction:
      'Chọn nhiên liệu, khối lượng đem đốt và lượng không khí cấp cho ngọn lửa. Quan sát nhiệt có ích cho nồi, lượng khí carbon dioxide và khói. So sánh: với cùng một khối lượng, nhiên liệu nào toả nhiều nhiệt nhất? Với cùng $100$ MJ nhiệt, nhiên liệu nào thải ít khí carbon dioxide nhất? Lượng không khí nào cho nhiều nhiệt nhất?',
  },
  examples: [
    {
      problem: 'Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $3$ kg than đá.',
      steps: [
        'Tra bảng: năng suất toả nhiệt của than đá $q = 27 \\cdot 10^6$ J/kg $= 27$ MJ/kg.',
        'Áp dụng $Q = q \\cdot m = 27 \\cdot 3 = 81$ (MJ).',
      ],
      answer: '$Q = 81$ MJ $= 81 \\cdot 10^6$ J.',
    },
    {
      problem:
        'Để có $132$ MJ nhiệt, cần đốt cháy hoàn toàn bao nhiêu ki-lô-gam củi khô? Bao nhiêu ki-lô-gam khí đốt? Nhận xét.',
      steps: [
        'Từ $Q = q \\cdot m$ suy ra $m = Q : q$.',
        'Củi khô: $m = 132 : 10 = 13{,}2$ kg.',
        'Khí đốt: $m = 132 : 44 = 3$ kg.',
        'Để có cùng một nhiệt lượng, cần lượng củi gấp $13{,}2 : 3 = 4{,}4$ lần lượng khí đốt.',
      ],
      answer:
        '$13{,}2$ kg củi khô hoặc $3$ kg khí đốt: khí đốt có năng suất toả nhiệt lớn hơn nhiều, lại cháy sạch hơn.',
    },
    {
      problem: 'Vì sao khi nhóm bếp củi, người ta chẻ nhỏ củi và xếp củi thưa, không chèn kín?',
      steps: [
        'Muốn củi cháy tốt, phải có đủ oxygen (không khí) cho sự cháy.',
        'Chẻ nhỏ củi làm tăng diện tích tiếp xúc giữa củi và không khí.',
        'Xếp thưa tạo khe hở cho không khí lưu thông vào bếp.',
      ],
      answer:
        'Để củi tiếp xúc nhiều với không khí, cháy nhanh, cháy hết, toả nhiều nhiệt và ít khói.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhiên liệu là gì?',
      options: [
        'Những chất tan được trong nước',
        'Những chất cháy được, khi cháy toả nhiều nhiệt và phát sáng',
        'Những chất dùng để làm ra vật thể',
        'Những chất cung cấp chất dinh dưỡng cho cơ thể',
      ],
      answer: 1,
      hints: ['Nghĩ về củi, than, gas: chúng dùng để làm gì?'],
      solution:
        'Nhiên liệu là những chất cháy được, khi cháy toả nhiều nhiệt và phát sáng. Chất dùng làm ra vật thể là vật liệu; chất cung cấp dinh dưỡng là thức ăn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nhiên liệu ở thể lỏng.',
      options: ['Than đá', 'Xăng', 'Khí biogas', 'Củi', 'Dầu hoả', 'Cồn'],
      answers: [1, 4, 5],
      hints: ['Nhiên liệu nào đựng trong chai, can, bình và rót ra được?'],
      solution:
        'Xăng, dầu hoả, cồn là nhiên liệu lỏng. Than đá, củi là nhiên liệu rắn; khí biogas là nhiên liệu khí.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $2$ kg than đá ($q = 27 \\cdot 10^6$ J/kg) toả ra nhiệt lượng bao nhiêu MJ?',
      answer: 54,
      unit: 'MJ',
      hints: ['Dùng $Q = q \\cdot m$ với $q = 27$ MJ/kg.'],
      solution: '$Q = q \\cdot m = 27 \\cdot 2 = 54$ MJ.',
    },
    {
      type: 'number',
      prompt:
        'Cần đốt cháy hoàn toàn bao nhiêu ki-lô-gam xăng ($q = 46 \\cdot 10^6$ J/kg) để thu được $92$ MJ nhiệt?',
      answer: 2,
      unit: 'kg',
      hints: ['Từ $Q = q \\cdot m$ suy ra $m = Q : q$.'],
      solution: '$m = Q : q = 92 : 46 = 2$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $1$ kg khí đốt toả ra nhiệt lượng gấp bao nhiêu lần đốt cháy hoàn toàn $1$ kg củi khô? (Dùng bảng năng suất toả nhiệt.)',
      answer: 4.4,
      tolerance: 0.01,
      hints: ['Khí đốt: $44 \\cdot 10^6$ J/kg; củi khô: $10 \\cdot 10^6$ J/kg.'],
      solution: '$44 \\cdot 10^6 : (10 \\cdot 10^6) = 4{,}4$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Để nhiên liệu cháy hiệu quả và tiết kiệm, cần cung cấp lượng không khí như thế nào?',
      options: ['Càng ít càng tốt', 'Vừa đủ', 'Càng nhiều càng tốt', 'Không cần không khí'],
      answer: 1,
      hints: ['Thiếu không khí thì cháy không hết; quá nhiều không khí thì sao?'],
      solution:
        'Cần lượng không khí vừa đủ. Thiếu không khí, nhiên liệu cháy không hoàn toàn, sinh khí độc carbon monoxide; thừa không khí làm nguội ngọn lửa và mang bớt nhiệt đi.',
    },
    {
      type: 'multi',
      prompt: 'Khi phát hiện bình gas trong bếp bị rò rỉ, em nên làm những việc nào?',
      options: [
        'Khoá van bình gas',
        'Bật đèn để nhìn cho rõ',
        'Mở cửa cho thoáng khí',
        'Bật bếp để đốt hết gas rò rỉ',
        'Báo ngay cho người lớn',
      ],
      answers: [0, 2, 4],
      hints: [
        'Gas trộn với không khí gặp tia lửa (kể cả tia lửa nhỏ ở công tắc điện) có thể gây nổ.',
      ],
      solution:
        'Khoá van, mở cửa cho gas thoát ra ngoài và báo người lớn. Tuyệt đối không bật lửa, không bật tắt công tắc điện vì tia lửa có thể gây cháy nổ.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không được đốt bếp than trong phòng ngủ đóng kín cửa?',
      options: [
        'Vì than toả quá ít nhiệt',
        'Vì than cháy thiếu không khí sinh ra khí carbon monoxide rất độc',
        'Vì than là nhiên liệu lỏng dễ đổ',
        'Vì than cháy tạo ra nước làm ẩm phòng',
      ],
      answer: 1,
      hints: ['Trong phòng kín, lượng oxygen giảm dần khi than cháy.'],
      solution:
        'Trong phòng kín, than cháy thiếu oxygen nên cháy không hoàn toàn, sinh ra khí carbon monoxide không màu, không mùi, rất độc, có thể gây tử vong.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguồn năng lượng tái tạo.',
      options: ['Năng lượng mặt trời', 'Than đá', 'Năng lượng gió', 'Dầu mỏ', 'Thuỷ điện'],
      answers: [0, 2, 4],
      hints: ['Nguồn nào được thiên nhiên bổ sung liên tục, không cạn kiệt trong thời gian ngắn?'],
      solution:
        'Mặt trời, gió, thuỷ điện là năng lượng tái tạo. Than đá và dầu mỏ là nhiên liệu hoá thạch, có hạn và không tái tạo được.',
    },
  ],
  takeaways: [
    'Nhiên liệu là chất cháy được, khi cháy toả nhiều nhiệt và phát sáng; có nhiên liệu rắn, lỏng, khí.',
    'Năng suất toả nhiệt $q$ là nhiệt lượng toả ra khi đốt cháy hoàn toàn $1$ kg nhiên liệu; $Q = q \\cdot m$.',
    'Cấp đủ không khí, tăng diện tích tiếp xúc và điều chỉnh lượng nhiên liệu phù hợp để dùng nhiên liệu hiệu quả, tiết kiệm.',
    'Thiếu không khí sinh khí carbon monoxide rất độc: không đốt than, củi trong phòng kín; để xăng dầu, gas xa lửa.',
    'Nhiên liệu hoá thạch có hạn và gây ô nhiễm; cần tiết kiệm và chuyển dần sang năng lượng tái tạo để bảo đảm an ninh năng lượng.',
  ],
};
