/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tắc phòng cháy, nổ trong gia đình; dấu hiệu phát hiện sớm đám cháy; nguyên tắc chữa cháy, các chất và dụng cụ chữa cháy cho từng loại đám cháy, cùng cách xử lí khi có cháy.',
  intro:
    'Phần lớn các vụ cháy, nổ có thể hạn chế được nếu phát hiện sớm và xử lí đúng. Nhưng dội nước vào chảo dầu đang cháy hoặc vào magnesium đang cháy lại làm mọi việc tệ đi. Bài này giúp em biết cách phòng ngừa, chọn đúng chất chữa cháy và hành động đúng thứ tự khi sự cố xảy ra.',
  objectives: [
    'Nêu được nguyên tắc và các biện pháp phòng cháy, nổ khi dùng điện, bếp gas.',
    'Nêu được các dấu hiệu phát hiện sớm đám cháy và các bước xử lí khi có cháy.',
    'Giải thích được nguyên tắc chữa cháy dựa vào tam giác cháy.',
    'Chọn được chất và dụng cụ chữa cháy phù hợp với từng loại đám cháy.',
  ],
  sections: [
    {
      heading: 'Phòng cháy, nổ',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc phòng cháy, nổ',
          text: 'Kiểm soát chặt chẽ ba yếu tố của tam giác cháy là chất cháy, chất oxi hoá và nguồn nhiệt; đồng thời chuẩn bị sẵn phương tiện, nhân lực và lối thoát để ứng phó khi có sự cố.',
        },
        {
          type: 'table',
          head: ['Khi dùng', 'Cần làm'],
          rows: [
            [
              'Thiết bị điện',
              'Tắt bàn là, bếp điện, máy sấy sau khi dùng và để xa vật dễ cháy. Dùng thiết bị đúng công suất, đảm bảo tiếp xúc điện tốt. Có người trông coi khi thiết bị nhiệt độ cao đang chạy.',
            ],
            [
              'Bếp gas',
              'Không rời bếp khi đang nấu; khoá van bình sau khi nấu xong. Chọn bình có nguồn gốc rõ ràng, thường xuyên kiểm tra rò rỉ, không đặt bình trong hốc kín.',
            ],
            [
              'Chất lỏng dễ cháy',
              'Đậy kín, để nơi khô thoáng, xa nguồn nhiệt; không tích trữ xăng dầu trong nhà.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi ngửi thấy mùi gas',
          text: 'Gas nặng hơn không khí nên đọng ở chỗ thấp. Tắt bếp, khoá van bình, mở cửa cho thông gió. Tuyệt đối không bật lửa, không bật tắt thiết bị điện, không dùng điện thoại ở khu vực rò rỉ; ra ngoài rồi mới gọi người hỗ trợ.',
        },
      ],
    },
    {
      heading: 'Nguyên tắc chữa cháy và chất chữa cháy',
      blocks: [
        {
          type: 'p',
          text: 'Dấu hiệu phát hiện sớm đám cháy: mùi khét do vật liệu cháy, khói đen hoặc xám, ngọn lửa và tiếng nổ. Nguyên tắc chữa cháy là loại bỏ hoặc làm suy yếu một trong ba yếu tố của tam giác cháy.',
        },
        {
          type: 'table',
          head: ['Chất chữa cháy', 'Tác dụng chính', 'Lưu ý'],
          rows: [
            [
              'Nước',
              'Hấp thụ nhiều nhiệt khi nóng lên và hoá hơi, làm giảm nhiệt độ',
              'Không dùng cho xăng dầu, kim loại hoạt động, thiết bị đang có điện',
            ],
            [
              '$\\mathrm{CO_2}$',
              'Nặng hơn không khí, đẩy oxygen ra khỏi vùng cháy; khí phun ra rất lạnh',
              'Không cầm vào loa phun vì có thể bị bỏng lạnh; không dùng trong phòng kín có người',
            ],
            [
              'Bọt chữa cháy',
              'Phủ lên bề mặt, cách li chất cháy với oxygen và làm mát',
              'Chứa nhiều nước nên không dùng cho thiết bị đang có điện',
            ],
            [
              'Bột chữa cháy',
              'Phủ và làm gián đoạn phản ứng cháy; bột thường chứa $\\mathrm{NaHCO_3}$ hoặc muối phosphate',
              'Bột ABC, BC không dùng cho kim loại đang cháy',
            ],
          ],
        },
        {
          type: 'table',
          head: ['Loại đám cháy', 'Chất cháy', 'Nên dùng'],
          rows: [
            ['A', 'Chất rắn: gỗ, giấy, vải', 'Nước, bọt, bột ABC'],
            ['B', 'Chất lỏng: xăng, dầu', 'Bọt, bột, $\\mathrm{CO_2}$'],
            ['C', 'Chất khí: gas, methane', 'Khoá van; bột, $\\mathrm{CO_2}$'],
            ['D', 'Kim loại: Mg, Na, Al', 'Bột chuyên dụng cho kim loại'],
            ['F', 'Dầu mỡ nấu ăn', 'Tắt bếp, đậy vung, chăn ướt; bình chuyên dụng'],
          ],
          caption:
            'Phân loại đám cháy theo TCVN 4878:2009. Cháy thiết bị điện không phải một loại riêng trong tiêu chuẩn này; một số nhãn bình ghi là E. Cần cắt điện trước, rồi dùng $\\mathrm{CO_2}$ hoặc bột.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Vì sao không dùng nước cho kim loại đang cháy?',
          text: 'Kim loại hoạt động nóng phản ứng với nước sinh ra hydrogen gây nổ, ví dụ $\\mathrm{Mg} + \\mathrm{H_2O} \\rightarrow \\mathrm{MgO} + \\mathrm{H_2}$. Magnesium còn cháy được trong $\\mathrm{CO_2}$: $\\mathrm{2Mg} + \\mathrm{CO_2} \\rightarrow \\mathrm{2MgO} + \\mathrm{C}$, và phản ứng được với cát nóng: $\\mathrm{2Mg} + \\mathrm{SiO_2} \\rightarrow \\mathrm{2MgO} + \\mathrm{Si}$.',
        },
      ],
    },
    {
      heading: 'Xử lí khi có cháy',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Báo động cho mọi người xung quanh.',
            'Cắt cầu dao điện ở khu vực cháy.',
            'Dùng vật dụng, phương tiện sẵn có tại chỗ để dập lửa khi đám cháy còn nhỏ và có đường thoát.',
            'Gọi $114$ để đội chữa cháy chuyên nghiệp đến hỗ trợ.',
          ],
        },
        {
          type: 'p',
          text: 'Khi dùng bình chữa cháy xách tay: rút chốt an toàn, hướng vòi vào gốc lửa, bóp cò, quét vòi qua lại và đứng ở đầu hướng gió. Chỉ chữa cháy khi an toàn; nếu lửa lớn hoặc khói dày, phải thoát ra ngay.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Thoát nạn',
          text: 'Cúi thấp người vì khói nóng bốc lên trên; che mũi miệng bằng khăn ướt; không dùng thang máy; sờ cửa trước khi mở, cửa nóng thì tìm lối khác. Tính mạng quan trọng hơn tài sản: đã ra ngoài thì không quay lại.',
        },
      ],
    },
    {
      heading: 'Dự án: Kế hoạch thoát nạn cho gia đình em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập kế hoạch phòng cháy và thoát nạn cho nhà em và tập dượt với cả nhà. Đây là tập dượt thoát nạn, không đốt lửa thật.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: giấy vẽ sơ đồ, đồng hồ bấm giây; bình chữa cháy nếu nhà em có.',
            'Vẽ sơ đồ nhà, đánh dấu hai lối thoát cho mỗi phòng và điểm tập trung bên ngoài.',
            'Kiểm tra cầu dao, bếp gas, bình chữa cháy (hạn dùng, kim áp suất); ghi lại những điều cần khắc phục.',
            'Cả nhà tập thoát nạn một lần, bấm giờ, thử cúi thấp và che mũi miệng; không dùng thang máy.',
            'Lập bảng: mỗi nguy cơ trong nhà ứng với loại đám cháy nào và dùng gì để chữa.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: sơ đồ thoát nạn, thời gian tập dượt, bảng nguy cơ và danh sách việc đã sửa. Nếu có thể, nhờ cán bộ phòng cháy chữa cháy địa phương góp ý.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chọn đúng chất chữa cháy',
    instruction:
      'Với mỗi đám cháy, chọn cách dập lửa. Nếu chọn chưa đúng, đọc lí do rồi thử lại. Hãy để ý: nước phù hợp với những đám cháy nào?',
  },
  examples: [
    {
      problem: 'Ngửi thấy mùi gas khi vào bếp. Em cần làm gì, theo thứ tự nào, và vì sao?',
      steps: [
        'Không bật lửa, không bật tắt điện, không gọi điện thoại trong bếp: một tia lửa có thể gây nổ nếu nồng độ gas nằm trong vùng nổ.',
        'Khoá van bình gas để cắt nguồn chất cháy.',
        'Mở cửa cho thông gió để nồng độ gas giảm xuống dưới giới hạn nổ dưới.',
        'Ra ngoài rồi báo người lớn hoặc đơn vị cung cấp gas kiểm tra đường ống và bình.',
      ],
      answer: 'Tránh tia lửa, khoá van, thông gió, ra ngoài và báo người có chuyên môn kiểm tra.',
    },
    {
      problem:
        'Giải thích vì sao không dùng nước, $\\mathrm{CO_2}$, bọt hay bột thông dụng để chữa đám cháy magnesium.',
      steps: [
        'Nước và bọt: Mg nóng phản ứng với nước sinh ra khí $\\mathrm{H_2}$, gây nổ: $\\mathrm{Mg} + \\mathrm{H_2O} \\rightarrow \\mathrm{MgO} + \\mathrm{H_2}$.',
        '$\\mathrm{CO_2}$: Mg vẫn cháy trong khí này: $\\mathrm{2Mg} + \\mathrm{CO_2} \\rightarrow \\mathrm{2MgO} + \\mathrm{C}$.',
        'Bột chứa $\\mathrm{NaHCO_3}$: khi nóng phân huỷ, $\\mathrm{2NaHCO_3} \\rightarrow \\mathrm{Na_2CO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$, sinh ra đúng hai chất trên.',
      ],
      answer:
        'Các chất này đều cấp thêm chất phản ứng cho Mg; cần bột chuyên dụng để cách li kim loại với không khí.',
    },
    {
      problem:
        'Một bình $\\mathrm{CO_2}$ chứa $5$ kg khí. Tính thể tích khí $\\mathrm{CO_2}$ thoát ra ở điều kiện chuẩn ($24{,}79$ L/mol).',
      steps: [
        '$n = \\dfrac{5\\,000}{44} \\approx 113{,}64$ mol.',
        '$V = 113{,}64 \\cdot 24{,}79 \\approx 2\\,817$ L.',
      ],
      answer: 'Bình giải phóng khoảng $2\\,817$ L, tức khoảng $2{,}8\\ \\mathrm{m^3}$ khí.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Xếp các bước xử lí khi phát hiện đám cháy theo đúng thứ tự.',
      items: [
        'Gọi 114',
        'Báo động cho mọi người',
        'Dùng phương tiện tại chỗ để dập lửa',
        'Cắt cầu dao điện khu vực cháy',
      ],
      answer: [1, 3, 2, 0],
      hints: ['Người ở gần cần biết trước tiên.', 'Phải cắt điện trước khi dập lửa.'],
      solution:
        'Báo động, cắt cầu dao điện, dùng phương tiện tại chỗ, gọi $114$ để đội chuyên nghiệp hỗ trợ.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tắc chữa cháy là',
      options: [
        'loại bỏ hoặc làm suy yếu một trong ba yếu tố của tam giác cháy.',
        'luôn dùng thật nhiều nước.',
        'phải loại bỏ cả ba yếu tố của tam giác cháy.',
        'đợi cho chất cháy cháy hết.',
      ],
      answer: 0,
      hints: ['Điều gì xảy ra khi tam giác cháy mất một cạnh?'],
      solution: 'Chỉ cần lấy đi hoặc làm suy yếu một trong ba yếu tố thì phản ứng cháy dừng lại.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi đám cháy với cách dập phù hợp nhất.',
      left: ['Đống giấy, gỗ', 'Xăng tràn ra nền', 'Bột magnesium', 'Chảo dầu trên bếp'],
      right: ['Nước', 'Bọt chữa cháy', 'Bột chuyên dụng cho kim loại', 'Đậy vung'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nước chỉ phù hợp với đúng một đám cháy trong bốn đám cháy này.'],
      solution:
        'Giấy, gỗ dùng nước; xăng dùng bọt; magnesium dùng bột chuyên dụng; chảo dầu thì tắt bếp và đậy vung.',
    },
    {
      type: 'choice',
      prompt: 'Không nên dùng nước để dập đám cháy xăng vì',
      options: [
        'xăng nhẹ hơn nước, không tan trong nước nên nổi lên và cháy lan rộng.',
        'nước phản ứng với xăng tạo ra hydrogen.',
        'nước làm tăng nồng độ oxygen trên mặt xăng.',
        'xăng tan trong nước tạo hỗn hợp nổ.',
      ],
      answer: 0,
      hints: ['So sánh khối lượng riêng và khả năng tan của xăng trong nước.'],
      solution:
        'Xăng không tan và nhẹ hơn nước nên nổi trên mặt nước, dòng nước kéo lửa lan đi; cần phủ bằng bọt hoặc dùng bột, $\\mathrm{CO_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Khi phát hiện rò rỉ gas, những việc nào cần tránh?',
      options: [
        'Bật công tắc đèn để nhìn rõ hơn.',
        'Bật quạt điện để gas bay đi.',
        'Dùng điện thoại ngay trong bếp.',
        'Khoá van bình gas.',
        'Mở cửa cho thông gió.',
      ],
      answers: [0, 1, 2],
      hints: ['Tìm những việc có thể tạo tia lửa điện.'],
      solution:
        'Bật công tắc, bật quạt và dùng điện thoại có thể tạo tia lửa điện. Khoá van và mở cửa là những việc cần làm.',
    },
    {
      type: 'number',
      prompt:
        'Đốt $1$ kg củi khô toả ra $9\\,600$ kJ. Biết $1$ kg nước hoá hơi hấp thụ $2\\,260$ kJ. Cần bao nhiêu kg nước hoá hơi để hấp thụ hết lượng nhiệt đó? Làm tròn đến hàng phần trăm.',
      answer: 4.25,
      tolerance: 0.02,
      unit: 'kg',
      hints: ['Lấy nhiệt lượng cần hấp thụ chia cho nhiệt hoá hơi của $1$ kg nước.'],
      solution:
        '$m = \\dfrac{9\\,600}{2\\,260} \\approx 4{,}25$ kg. Điều này cho thấy nước hấp thụ rất nhiều nhiệt.',
    },
    {
      type: 'number',
      prompt:
        'Tính thể tích khí $\\mathrm{CO_2}$ (theo lít, ở điều kiện chuẩn, $24{,}79$ L/mol) thoát ra từ một bình chứa $2$ kg khí $\\mathrm{CO_2}$.',
      answer: 1126.8,
      tolerance: 2,
      hints: ['Đổi $2$ kg sang gam, chia cho $44$ để có số mol.'],
      solution:
        '$n = \\dfrac{2\\,000}{44} \\approx 45{,}45$ mol, $V = 45{,}45 \\cdot 24{,}79 \\approx 1\\,126{,}8$ L.',
    },
    {
      type: 'text',
      prompt: 'Ở Việt Nam, số điện thoại khẩn cấp báo cháy là số nào?',
      accept: ['114'],
      hints: ['Số này có ba chữ số, bắt đầu bằng số $1$.'],
      solution: 'Số báo cháy là $114$.',
    },
    {
      type: 'choice',
      prompt: 'Khi thoát khỏi đám cháy trong nhà nhiều tầng, cách nào đúng?',
      options: [
        'Cúi thấp người, che mũi miệng bằng khăn ướt, đi thang bộ.',
        'Đi thang máy cho nhanh.',
        'Mở mọi cửa trên đường đi cho thoáng.',
        'Quay lại lấy tài sản khi đã ra ngoài.',
      ],
      answer: 0,
      hints: ['Khói nóng bốc lên trên.'],
      solution:
        'Khói nóng bốc lên nên không khí sát sàn dễ thở hơn; thang máy có thể mất điện và đầy khói; mở nhiều cửa cấp thêm oxygen cho lửa.',
    },
  ],
  takeaways: [
    'Phòng cháy: kiểm soát chất cháy, chất oxi hoá, nguồn nhiệt; chuẩn bị sẵn phương tiện và lối thoát.',
    'Chữa cháy: loại bỏ hoặc làm suy yếu một trong ba yếu tố của tam giác cháy.',
    'Xử lí: báo động, cắt điện, dập lửa bằng phương tiện tại chỗ, gọi $114$.',
    'Không dùng nước cho xăng dầu, chảo dầu, kim loại hoạt động và thiết bị đang có điện.',
    'Đám cháy kim loại cần bột chuyên dụng; không dùng nước, $\\mathrm{CO_2}$ hay bọt, và magnesium nóng còn phản ứng cả với cát.',
    'Khi lửa lớn, thoát ra ngay: tính mạng quan trọng hơn tài sản.',
  ],
};
