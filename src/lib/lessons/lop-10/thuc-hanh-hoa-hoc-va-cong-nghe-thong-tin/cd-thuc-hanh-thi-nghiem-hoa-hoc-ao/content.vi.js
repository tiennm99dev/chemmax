/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dùng phần mềm thí nghiệm ảo như Yenka để mô phỏng các yếu tố ảnh hưởng đến tốc độ phản ứng, phản ứng của copper với nitric acid, phép chuẩn độ; ghi nhận và báo cáo kết quả.',
  intro:
    'Có những thí nghiệm độc hại, tốn hoá chất hoặc không kịp làm trong một tiết học. Với phần mềm mô phỏng, em có thể lấy dụng cụ và hoá chất, làm thí nghiệm rồi đọc số liệu ngay trên máy tính, làm sai cũng không có gì nguy hiểm. Làm thế nào để thực hiện được các thí nghiệm hoá học ảo trên máy tính?',
  objectives: [
    'Nêu được một số phần mềm thí nghiệm hoá học ảo và cách thao tác chung.',
    'Mô phỏng được ảnh hưởng của nồng độ, nhiệt độ và chất xúc tác đến tốc độ phản ứng.',
    'Tự lắp được một thí nghiệm ảo từ dụng cụ, hoá chất; ghi nhận hiện tượng và số liệu, viết báo cáo.',
    'So sánh được ưu, nhược điểm của thí nghiệm ảo và thí nghiệm thật.',
  ],
  sections: [
    {
      heading: 'Phần mềm thí nghiệm ảo',
      blocks: [
        {
          type: 'p',
          text: 'Các phần mềm thường gặp là Yenka, ChemLab, Portable Virtual Chemistry Lab. Bài này làm theo Yenka, trong đó phòng thí nghiệm hoá học có sẵn hoá chất và dụng cụ phổ biến. Hai cách làm việc chính của Yenka là:',
        },
        {
          type: 'table',
          head: ['Thẻ', 'Dùng khi', 'Thao tác'],
          rows: [
            [
              'Open-local',
              'Mở thí nghiệm mẫu đã dựng sẵn',
              'Chọn mục, ví dụ Reaction Rates, rồi chọn thí nghiệm; kéo hoá chất vào, bấm Pause để chạy và bấm lại để dừng',
            ],
            [
              'New',
              'Tự dựng thí nghiệm mới',
              'Lấy hoá chất ở Chemicals và dụng cụ ở Equipment, kéo ra màn hình rồi ghép lại',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Mô phỏng thí nghiệm về tốc độ phản ứng',
      blocks: [
        {
          type: 'p',
          text: 'Mở Open-local, chọn Reaction Rates, rồi lần lượt chọn Definition of reaction rate, Concentration and rate, Temperature and rate, Catalysts and rate. Trong thí nghiệm đầu, kéo $\\mathrm{CaCO_3}$ và dung dịch HCl vào ống nghiệm, cho chạy khoảng $20$ giây; đường cong trên giấy kẻ ô cho biết thể tích $\\mathrm{CO_2}$ theo thời gian.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + CO_2(g) + H_2O(l)}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tốc độ trung bình theo thể tích khí',
          text: '$\\bar{v} = \\dfrac{V_{\\text{khí}}}{\\Delta t}$, đơn vị $\\mathrm{cm^3/s}$. Với số đo trong Yenka: sau $20$ s thu được $88\\ \\mathrm{cm^3}$ khí $\\mathrm{CO_2}$.',
        },
        {
          type: 'p',
          text: 'Khi so sánh các ống nghiệm, người ta buộc một quả bóng ở cuối ống dẫn khí: bóng càng to nhanh thì khí thoát càng nhanh. Hãy tự làm với mô hình dưới đây, đọc số liệu ở cùng một thời điểm rồi rút ra kết luận.',
        },
        { type: 'widget', name: 'toc-do' },
        {
          type: 'p',
          text: 'Kết quả mô phỏng phù hợp với lí thuyết: nồng độ càng lớn, nhiệt độ càng cao thì tốc độ càng lớn; chất xúc tác $\\mathrm{MnO_2}$ làm $\\mathrm{H_2O_2}$ phân huỷ nhanh hơn mà không bị tiêu hao.',
        },
      ],
    },
    {
      heading: 'Tự dựng thí nghiệm mới',
      blocks: [
        {
          type: 'p',
          text: 'Trong thẻ New có thể tự dựng thí nghiệm copper tác dụng với nitric acid loãng: lấy ống nghiệm, thêm mảnh Cu rồi thêm dung dịch $\\mathrm{HNO_3}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{3Cu + 8HNO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O}',
        },
        {
          type: 'p',
          text: 'Hiện tượng: đồng tan dần, có khí không màu thoát ra và hoá nâu khi gặp không khí, dung dịch chuyển sang màu xanh. Khí NO độc, nên đây là thí nghiệm rất nên xem bằng mô phỏng trước.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mở rộng: chuẩn độ acid - base',
          text: 'Trong phần khám phá của bài có thí nghiệm ảo chuẩn độ, kĩ thuật sẽ được học kĩ ở lớp 11: nhỏ từ từ dung dịch NaOH đã biết nồng độ vào dung dịch HCl có sẵn phenolphthalein, đến khi vừa xuất hiện màu hồng nhạt bền thì dừng. Khi đó $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
        },
      ],
    },
    {
      heading: 'Ghi nhận và so sánh với thí nghiệm thật',
      blocks: [
        {
          type: 'p',
          text: 'Một báo cáo thí nghiệm gồm: mục đích; hoá chất và dụng cụ; cách tiến hành; hiện tượng và số liệu; phương trình hoá học; kết luận. Thí nghiệm ảo cũng cần ghi đầy đủ như thí nghiệm thật.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Thí nghiệm ảo', 'Thí nghiệm thật'],
          rows: [
            ['Chuẩn bị', 'Không cần dụng cụ, hoá chất', 'Tốn thời gian và hoá chất'],
            ['An toàn', 'An toàn, làm được với chất độc', 'Có nguy cơ sự cố'],
            [
              'Kết quả',
              'Luôn thành công, dễ quan sát trên màn hình',
              'Có thể không thành công, lớp đông khó quan sát',
            ],
            ['Kĩ năng', 'Ít rèn thao tác bằng tay', 'Rèn kĩ năng thực hành'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mô phỏng chỉ cho thấy điều đã lập trình',
          text: 'Mô phỏng chạy theo mô hình do người viết phần mềm chọn, nên số liệu có thể khác thực tế. Thí nghiệm ảo bổ trợ cho thí nghiệm thật chứ không thay thế được.',
        },
      ],
    },
    {
      heading: 'Thực hành trên máy tính',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng phần mềm thí nghiệm ảo (Yenka hoặc tương tự) thực hiện và báo cáo một số thí nghiệm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: máy tính có phần mềm thí nghiệm ảo; mẫu báo cáo.',
            'Mô phỏng thí nghiệm đo tốc độ phản ứng giữa $\\mathrm{CaCO_3}$ và HCl; đọc thể tích khí sau $20$ s, tính tốc độ trung bình.',
            'Mô phỏng ảnh hưởng của nồng độ, nhiệt độ và $\\mathrm{MnO_2}$; lập bảng so sánh các ống nghiệm.',
            'Dùng thẻ New tự dựng thí nghiệm Cu với $\\mathrm{HNO_3}$; ghi hiện tượng, viết phương trình.',
            'Làm thí nghiệm chuẩn độ ở phần khám phá ít nhất ba lần với một mẫu; tính thể tích trung bình và nồng độ HCl.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: nộp bản báo cáo gồm các mục đã nêu, kèm ảnh chụp màn hình, và một đoạn nêu ưu, nhược điểm của thí nghiệm ảo so với thí nghiệm thật.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm ảo: chuẩn độ',
    instruction:
      'Kéo dụng cụ và hoá chất lên đúng chỗ (hoặc chạm vật rồi chạm chỗ đặt). Sau đó nhỏ NaOH vào bình đến khi vừa có màu hồng nhạt, ghi số liệu vài lần và tính nồng độ HCl.',
  },
  examples: [
    {
      problem:
        'Trong thí nghiệm ảo, $\\mathrm{CaCO_3}$ tác dụng với HCl cho $88\\ \\mathrm{cm^3}$ khí $\\mathrm{CO_2}$ sau $20$ s. Tính tốc độ trung bình của phản ứng theo thể tích $\\mathrm{CO_2}$ từ $0$ đến $20$ s.',
      steps: [
        'Đọc số liệu: $V = 88\\ \\mathrm{cm^3}$, $\\Delta t = 20$ s.',
        'Áp dụng $\\bar{v} = \\dfrac{V}{\\Delta t} = \\dfrac{88}{20} = 4{,}4\\ \\mathrm{cm^3/s}$.',
      ],
      answer: 'Tốc độ trung bình là $4{,}4\\ \\mathrm{cm^3/s}$.',
    },
    {
      problem:
        'Chuẩn độ $20$ mL dung dịch HCl bằng NaOH $0{,}1$ M, phenolphthalein làm chất chỉ thị. Ba lần đo cho thể tích NaOH: $12{,}4$ mL, $12{,}5$ mL, $12{,}6$ mL. Tính nồng độ HCl.',
      steps: [
        'Phương trình: $\\mathrm{HCl + NaOH \\rightarrow NaCl + H_2O}$, tỉ lệ mol $1:1$.',
        'Thể tích trung bình: $\\dfrac{12{,}4 + 12{,}5 + 12{,}6}{3} = 12{,}5$ mL.',
        '$C_{\\mathrm{HCl}} = \\dfrac{0{,}1 \\cdot 12{,}5}{20} = 0{,}0625$ M.',
      ],
      answer: '$C_{\\mathrm{HCl}} = 0{,}0625$ mol/L.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Trong thí nghiệm ảo, sau $25$ s thu được $110\\ \\mathrm{cm^3}$ khí $\\mathrm{CO_2}$. Tính tốc độ trung bình theo thể tích khí, đơn vị $\\mathrm{cm^3/s}$.',
      answer: 4.4,
      tolerance: 0.01,
      hints: ['Chia thể tích khí cho thời gian.'],
      solution: '$\\bar{v} = \\dfrac{110}{25} = 4{,}4\\ \\mathrm{cm^3/s}$.',
    },
    {
      type: 'choice',
      prompt:
        'Mô phỏng phản ứng của $\\mathrm{CaCO_3}$ với HCl ở nồng độ $1$ M và $2$ M. Quả bóng ở ống nghiệm nào to nhanh hơn?',
      options: ['Ống dùng HCl $2$ M', 'Ống dùng HCl $1$ M', 'Hai ống như nhau'],
      answer: 0,
      hints: ['Nồng độ chất phản ứng càng lớn thì tốc độ thế nào?'],
      solution:
        'Nồng độ lớn hơn thì tốc độ phản ứng lớn hơn, nên khí thoát nhanh hơn ở ống HCl $2$ M.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm ảo phân huỷ $\\mathrm{H_2O_2}$ có $\\mathrm{MnO_2}$, nhận xét nào đúng khi so sánh hai ống cùng lượng $\\mathrm{H_2O_2}$?',
      options: [
        'Ống có $\\mathrm{MnO_2}$ thoát khí nhanh hơn, lượng oxygen cuối cùng như nhau.',
        'Ống có $\\mathrm{MnO_2}$ tạo nhiều oxygen hơn.',
        '$\\mathrm{MnO_2}$ bị tiêu hao hết sau phản ứng.',
        'Cả hai ống có tốc độ như nhau.',
      ],
      answer: 0,
      hints: ['Chất xúc tác làm tăng tốc độ phản ứng nhưng có thay đổi lượng sản phẩm không?'],
      solution:
        'Chất xúc tác làm tăng tốc độ, còn sau phản ứng vẫn giữ nguyên về lượng. Lượng oxygen do lượng $\\mathrm{H_2O_2}$ quyết định.',
    },
    {
      type: 'number',
      prompt:
        'Trong phương trình $\\mathrm{3Cu} + x\\,\\mathrm{HNO_3} \\rightarrow \\mathrm{3Cu(NO_3)_2} + \\mathrm{2NO} + \\mathrm{4H_2O}$, hệ số $x$ bằng bao nhiêu?',
      answer: 8,
      hints: ['Đếm số nguyên tử N ở vế phải, hoặc số nguyên tử H.'],
      solution:
        'Vế phải có $3 \\cdot 2 + 2 = 8$ nguyên tử N và $4 \\cdot 2 = 8$ nguyên tử H, nên hệ số là $8$.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn những hiện tượng quan sát được khi cho Cu vào dung dịch $\\mathrm{HNO_3}$ loãng.',
      options: [
        'Mảnh đồng tan dần.',
        'Có khí thoát ra, khí hoá nâu khi gặp không khí.',
        'Dung dịch chuyển sang màu xanh.',
        'Có kết tủa trắng xuất hiện.',
      ],
      answers: [0, 1, 2],
      hints: [
        'Muối $\\mathrm{Cu(NO_3)_2}$ tan trong nước và có màu đặc trưng của ion $\\mathrm{Cu^{2+}}$.',
      ],
      solution:
        'Đồng tan tạo muối $\\mathrm{Cu(NO_3)_2}$ tan, có màu xanh. Khí NO không màu, gặp oxygen trong không khí hoá thành $\\mathrm{NO_2}$ màu nâu. Không tạo kết tủa.',
    },
    {
      type: 'match',
      prompt: 'Trong thí nghiệm ảo chuẩn độ HCl bằng NaOH, nối mỗi thứ với nơi đặt nó.',
      left: ['Dung dịch NaOH đã biết nồng độ', 'Dung dịch HCl cần xác định nồng độ', 'Burette'],
      right: ['Trong burette', 'Trong bình tam giác', 'Trên giá đỡ'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Chất nào cần đọc được thể tích đã dùng thì đặt vào dụng cụ có vạch chia.'],
      solution:
        'NaOH ở burette để đọc thể tích đã dùng, HCl ở bình tam giác, burette kẹp trên giá đỡ.',
    },
    {
      type: 'number',
      prompt:
        'Chuẩn độ $20$ mL HCl bằng NaOH $0{,}1$ M thì dùng hết $24$ mL. Tính nồng độ HCl theo mol/L.',
      answer: 0.12,
      tolerance: 0.001,
      hints: [
        '$C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
      ],
      solution: '$C_{\\mathrm{HCl}} = \\dfrac{0{,}1 \\cdot 24}{20} = 0{,}12$ mol/L.',
    },
    {
      type: 'choice',
      prompt: 'Khi chuẩn độ, nên dừng nhỏ NaOH lúc nào?',
      options: [
        'Khi dung dịch vừa có màu hồng nhạt bền sau khi lắc.',
        'Khi dung dịch có màu hồng đậm.',
        'Khi vừa nhỏ giọt NaOH đầu tiên.',
        'Khi burette hết dung dịch.',
      ],
      answer: 0,
      hints: ['Phenolphthalein đổi màu ngay sau khi acid vừa hết.'],
      solution:
        'Màu hồng nhạt bền cho biết acid vừa hết. Màu hồng đậm nghĩa là đã nhỏ dư nhiều, thể tích đọc được lớn hơn thể tích cần.',
    },
    {
      type: 'multi',
      prompt: 'Chọn những ưu điểm của thí nghiệm ảo so với thí nghiệm thật.',
      options: [
        'An toàn, dùng được với chất độc.',
        'Không tốn hoá chất và dụng cụ.',
        'Rèn được kĩ năng thao tác bằng tay.',
        'Số liệu luôn chính xác hơn thực tế.',
      ],
      answers: [0, 1],
      hints: ['Thí nghiệm ảo diễn ra trên máy tính, theo một mô hình có sẵn.'],
      solution:
        'Thí nghiệm ảo an toàn và không tốn hoá chất. Nó ít rèn thao tác bằng tay, và số liệu phụ thuộc vào mô hình của phần mềm nên không phải lúc nào cũng khớp thực tế.',
    },
  ],
  takeaways: [
    'Yenka, ChemLab, Portable Virtual Chemistry Lab là các phần mềm thí nghiệm ảo; trong Yenka có thẻ Open-local để mở thí nghiệm mẫu, thẻ New để tự dựng thí nghiệm.',
    'Tốc độ trung bình theo thể tích khí: $\\bar{v} = \\dfrac{V}{\\Delta t}$.',
    'Mô phỏng cho thấy nồng độ, nhiệt độ, chất xúc tác làm tăng tốc độ phản ứng.',
    'Chuẩn độ: dừng ở màu hồng nhạt bền, rồi tính $C_{\\mathrm{HCl}} \\cdot V_{\\mathrm{HCl}} = C_{\\mathrm{NaOH}} \\cdot V_{\\mathrm{NaOH}}$.',
    'Thí nghiệm ảo an toàn, tiết kiệm nhưng số liệu theo mô hình và ít rèn thao tác, nên chỉ bổ trợ cho thí nghiệm thật.',
  ],
};
