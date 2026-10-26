/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài mở đầu KHTN 9 giới thiệu các dụng cụ thí nghiệm quang học, điện từ, về chất và sự biến đổi chất, dụng cụ quan sát nhiễm sắc thể; các hoá chất cơ bản trong phòng thí nghiệm, cách bảo quản và sử dụng an toàn; cấu trúc bài báo cáo và cách thuyết trình một vấn đề khoa học.',
  intro:
    'Muốn kiểm chứng một dự đoán khoa học, em cần làm thí nghiệm. Để thí nghiệm thành công và an toàn, em phải chọn đúng dụng cụ, hoá chất, hiểu cách tiến hành và các quy tắc an toàn. Sau khi có kết quả, em còn cần viết báo cáo và thuyết trình để chia sẻ phát hiện của mình với mọi người. Lớp 9 có những dụng cụ, hoá chất nào mới, và một bài báo cáo khoa học gồm những phần nào?',
  objectives: [
    'Nhận biết được một số dụng cụ thí nghiệm quang học, điện từ, về chất và sự biến đổi chất, dụng cụ quan sát nhiễm sắc thể và nêu được công dụng của chúng.',
    'Kể tên và phân loại được một số hoá chất cơ bản trong phòng thí nghiệm; trình bày được cách bảo quản và sử dụng hoá chất an toàn.',
    'Nêu được cấu trúc của bài báo cáo một vấn đề khoa học.',
    'Thuyết trình được một vấn đề khoa học bằng phần mềm trình chiếu hoặc báo cáo treo tường.',
  ],
  sections: [
    {
      heading: 'Một số dụng cụ thí nghiệm',
      blocks: [
        {
          type: 'table',
          caption: 'Dụng cụ thí nghiệm quang học',
          head: ['Dụng cụ', 'Công dụng'],
          rows: [
            [
              'Nguồn sáng',
              'Đèn dây tóc nối với nguồn điện 12 V kết hợp tấm chắn có một hoặc nhiều khe hẹp để tạo tia sáng, chùm sáng; hoặc nguồn laser, mỗi tia được bật, tắt bằng một công tắc trên đèn',
            ],
            [
              'Bản bán trụ',
              'Khối thuỷ tinh trong suốt hình nửa trụ, dùng khi nghiên cứu khúc xạ ánh sáng và phản xạ toàn phần',
            ],
            [
              'Bảng chia độ',
              'Đọc giá trị các góc khi nghiên cứu khúc xạ ánh sáng và phản xạ toàn phần',
            ],
            [
              'Bộ dụng cụ tìm hiểu ảnh qua thấu kính',
              'Thấu kính hội tụ, thấu kính phân kì, màn chắn, đèn, khe hình chữ F, giá quang học đồng trục',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Dụng cụ thí nghiệm điện từ',
          head: ['Dụng cụ', 'Công dụng'],
          rows: [
            [
              'Điện kế',
              'Phát hiện dòng điện cảm ứng. Vạch số 0 ở giữa thang đo: khi dòng điện đổi chiều, kim lệch về phía ngược lại',
            ],
            [
              'Đồng hồ đo điện đa năng',
              'Đo các đại lượng như cường độ dòng điện $I$, hiệu điện thế $U$, điện trở $R$... trong mạch điện một chiều và xoay chiều',
            ],
            [
              'Cuộn dây dẫn có hai đèn LED',
              'Hai đèn LED mắc song song, ngược cực với cuộn dây; đèn sáng cho biết có dòng điện cảm ứng, đèn nào sáng cho biết chiều dòng điện',
            ],
            ['Nam châm', 'Tạo từ trường; đưa vào, ra cuộn dây để tạo dòng điện cảm ứng'],
          ],
        },
        {
          type: 'table',
          caption:
            'Dụng cụ thí nghiệm về chất và sự biến đổi chất (ngoài các dụng cụ đã học ở lớp 6 – 8)',
          head: ['Dụng cụ', 'Công dụng'],
          rows: [
            ['Bình cầu', 'Đựng dung dịch, thực hiện phản ứng, đun nóng hoá chất'],
            ['Phễu chiết', 'Tách hai chất lỏng không hoà tan vào nhau, ví dụ dầu ăn và nước'],
            [
              'Lưới tản nhiệt',
              'Lót giữa ngọn lửa và đáy cốc, bình thuỷ tinh khi đun để nhiệt phân bố đều',
            ],
            ['Giá thí nghiệm (giá sắt) có kẹp', 'Giữ cố định ống nghiệm, bình cầu, phễu'],
            [
              'Ống nghiệm, cốc thuỷ tinh, bình tam giác, ống đong, ống hút nhỏ giọt, đèn cồn',
              'Đựng, lấy, đong, đun hoá chất như đã học',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dụng cụ thuỷ tinh',
          text: 'Phễu, phễu chiết, bình cầu, cốc... thường làm bằng thuỷ tinh, dễ vỡ, nên phải cầm nắm cẩn thận. Khi đun dung dịch trong cốc thuỷ tinh, đặt cốc trên lưới tản nhiệt để nhiệt phân bố đều, tránh làm nứt, vỡ cốc.',
        },
        {
          type: 'p',
          text: 'Để quan sát nhiễm sắc thể cần kính hiển vi và tiêu bản cố định nhiễm sắc thể. Khi quan sát với vật kính có độ phóng đại lớn (100x), nhỏ một giọt dầu soi kính hiển vi lên tiêu bản: dầu trong suốt, có chiết suất cao, giúp ảnh của mẫu vật rất nhỏ rõ nét hơn.',
        },
      ],
    },
    {
      heading: 'Một số hoá chất cơ bản trong phòng thí nghiệm',
      blocks: [
        {
          type: 'table',
          caption: 'Hoá chất thường dùng ở lớp 9',
          head: ['Nhóm', 'Ví dụ'],
          rows: [
            ['Kim loại', '$\\mathrm{Na}$, $\\mathrm{Fe}$, $\\mathrm{Cu}$, ...'],
            ['Phi kim', '$\\mathrm{S}$, $\\mathrm{I_2}$, ...'],
            ['Oxide', '$\\mathrm{CuO}$, $\\mathrm{CaO}$, $\\mathrm{MnO_2}$, ...'],
            ['Acid', '$\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$, ...'],
            ['Base', '$\\mathrm{NaOH}$, $\\mathrm{NH_3}$, ...'],
            ['Chất hữu cơ', '$\\mathrm{C_2H_5OH}$, $\\mathrm{C_6H_{12}O_6}$, ...'],
            ['Chất chỉ thị', 'Giấy pH, phenolphthalein, ...'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bảo quản hoá chất',
          text: 'Hoá chất được để trong chai, lọ có nắp đậy và dán nhãn ghi thông tin về hoá chất. Hoá chất dễ bị phân huỷ bởi ánh sáng được đựng trong lọ tối màu, để ở chỗ tối hoặc bọc giấy đen bên ngoài. Kim loại sodium được ngâm trong dầu hoả.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc sử dụng hoá chất an toàn',
          text: 'Đọc cẩn thận nhãn hoá chất trước khi dùng để tránh nhầm lẫn. Chỉ lấy đúng lượng hoá chất cần dùng; đậy nắp ngay sau khi lấy để giữ độ tinh khiết. Không tự ý nghiền, trộn các hoá chất vì có thể xảy ra phản ứng không mong muốn, thậm chí gây nổ. Với hoá chất dễ bay hơi, độc hại hoặc nguy hiểm như dung dịch $\\mathrm{H_2SO_4}$ đặc, phải đeo khẩu trang, găng tay, kính bảo hộ, thao tác cẩn thận theo hướng dẫn của giáo viên.',
        },
      ],
    },
    {
      heading: 'Viết báo cáo một vấn đề khoa học',
      blocks: [
        {
          type: 'p',
          text: 'Sau khi nghiên cứu một vấn đề (bằng thí nghiệm, quan sát, điều tra...), em cần viết báo cáo để trình bày kết quả. Một bài báo cáo khoa học thường gồm tám phần theo thứ tự sau.',
        },
        {
          type: 'table',
          caption: 'Cấu trúc bài báo cáo một vấn đề khoa học',
          head: ['Phần', 'Nội dung'],
          rows: [
            ['1. Tiêu đề', 'Ngắn gọn, nêu đúng vấn đề nghiên cứu; tên tác giả dưới tiêu đề'],
            ['2. Tóm tắt', 'Tóm lược mục tiêu, cách làm và kết quả chính'],
            ['3. Giới thiệu', 'Vấn đề nghiên cứu, lí do và mục tiêu'],
            ['4. Phương pháp', 'Dụng cụ, hoá chất, cách tiến hành, cách thu thập số liệu'],
            ['5. Kết quả', 'Số liệu thu được, trình bày bằng bảng, hình ảnh, biểu đồ, đồ thị'],
            [
              '6. Thảo luận',
              'Phân tích, giải thích kết quả; so sánh với dự đoán và với nghiên cứu khác (nếu có)',
            ],
            ['7. Kết luận', 'Tóm tắt phát hiện chính; gợi ý, hướng nghiên cứu tiếp theo'],
            ['8. Tài liệu tham khảo', 'Sách, bài báo, trang web đã sử dụng'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'So với báo cáo thực hành',
          text: 'Báo cáo thực hành đã học thường gồm: tiêu đề (tên bài thực hành), mục đích, chuẩn bị, các bước tiến hành, kết quả và kết luận. Báo cáo một vấn đề khoa học có thêm tóm tắt, phần thảo luận để giải thích, so sánh kết quả và danh mục tài liệu tham khảo.',
        },
      ],
    },
    {
      heading: 'Thuyết trình một vấn đề khoa học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thuyết trình trên phần mềm trình chiếu',
          text: 'Dùng ngôn ngữ đơn giản, rõ ràng; tập trung truyền đạt thông điệp chính; mỗi trang chiếu ít chữ, nhiều hình ảnh, bảng, biểu đồ; nói với người nghe chứ không đọc nguyên văn trang chiếu; tương tác với người nghe và dành thời gian trả lời câu hỏi.',
        },
        {
          type: 'list',
          items: [
            'Kích thước và định dạng: báo cáo treo tường thường in khổ A0 hoặc A1, đặt dọc hoặc ngang tuỳ nội dung.',
            'Tiêu đề và tác giả: tiêu đề rõ ràng, chữ đủ lớn để đọc được từ xa; tên tác giả đặt dưới tiêu đề.',
            'Thiết kế: chia thành các khu vực rõ ràng theo các phần của báo cáo; dùng hình ảnh, biểu đồ, đồ thị; màu nền không quá rực, chữ tương phản với nền, phông chữ đơn giản, cỡ chữ phù hợp.',
            'Nội dung theo thứ tự: giới thiệu, phương pháp, kết quả, thảo luận, kết luận, tài liệu tham khảo (có thể dùng chữ nhỏ hơn).',
            'Khi trình bày: dùng ít chữ, nhấn vào thông điệp chính; hình và chữ rõ nét; treo báo cáo ở nơi dễ nhìn, dễ tiếp cận.',
          ],
        },
        {
          type: 'p',
          text: 'Ở phần "Khám phá", em hãy chơi trò nhận biết dụng cụ theo hình, xếp các hoá chất vào đúng nhóm và lập dàn ý thuyết trình theo đúng thứ tự tám phần của bài báo cáo.',
        },
      ],
    },
    {
      heading: 'Dự án: Đề xuất thí nghiệm và thuyết trình một vấn đề khoa học',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: theo nhóm 4 – 5 bạn, chọn một vấn đề khoa học (ví dụ: tính chất hoá học chung của acid; xác định điện trở của một đoạn dây dẫn), đề xuất dụng cụ, hoá chất, tiến hành thí nghiệm dưới sự hướng dẫn của giáo viên, viết báo cáo và thuyết trình trước lớp.',
        },
        {
          type: 'p',
          text: 'Chuẩn bị: dụng cụ, hoá chất nhóm đề xuất (giáo viên duyệt trước); kính bảo hộ, găng tay; giấy khổ A0 hoặc A1, bút màu, hoặc máy tính có phần mềm trình chiếu; điện thoại hoặc máy ảnh để chụp hiện tượng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn vấn đề và nêu câu hỏi nghiên cứu, dự đoán của nhóm.',
            'Lập bảng dụng cụ, hoá chất cần dùng; đọc nhãn, tra cứu cảnh báo an toàn của từng hoá chất.',
            'Tiến hành thí nghiệm theo kế hoạch, ghi hiện tượng, số liệu vào bảng, chụp ảnh.',
            'Viết báo cáo đủ tám phần: tiêu đề, tóm tắt, giới thiệu, phương pháp, kết quả, thảo luận, kết luận, tài liệu tham khảo.',
            'Làm bài trình chiếu (khoảng 8 – 10 trang) hoặc báo cáo treo tường; tập thuyết trình trong 5 – 7 phút.',
            'Thuyết trình trước lớp, trả lời câu hỏi và nhận góp ý của các nhóm khác.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Chỉ làm thí nghiệm khi có giáo viên; không tự ý nghiền, trộn hoá chất; không chiếu tia laser vào mắt; không mắc dụng cụ đo trực tiếp vào ổ điện 220 V; thu gom hoá chất thừa theo hướng dẫn.',
        },
        {
          type: 'p',
          text: 'Nộp và báo cáo: bản báo cáo khoa học, bài trình chiếu hoặc báo cáo treo tường, bảng phân công công việc trong nhóm và một điều nhóm sẽ cải tiến nếu làm lại.',
        },
      ],
    },
  ],
  explore: {
    title: 'Nhận biết dụng cụ, hoá chất và lập dàn ý',
    instruction:
      'Chọn một hoạt động. "Nhận biết dụng cụ": nhìn hình và bấm tên đúng của dụng cụ; điểm chỉ tính lần chọn đúng đầu tiên. "Phân loại hoá chất": chọn một thẻ rồi chọn nhóm để đặt thẻ vào. "Dàn ý thuyết trình": chọn một vấn đề, rồi bấm tám phần của bài báo cáo theo đúng thứ tự để xem dàn ý mẫu.',
  },
  examples: [
    {
      problem:
        'Hãy đề xuất dụng cụ và hoá chất để làm thí nghiệm chứng minh tính chất hoá học chung của acid, dùng dung dịch hydrochloric acid loãng.',
      steps: [
        'Nhắc lại các tính chất chung của acid đã học ở lớp 8: làm quỳ tím hoá đỏ; tác dụng với một số kim loại, với oxide base, với base.',
        'Chọn hoá chất cho từng tính chất: dung dịch $\\mathrm{HCl}$ loãng; quỳ tím; viên kẽm ($\\mathrm{Zn}$); bột $\\mathrm{CuO}$; dung dịch $\\mathrm{NaOH}$ có nhỏ vài giọt phenolphthalein.',
        'Chọn dụng cụ: ống nghiệm, giá để ống nghiệm, ống hút nhỏ giọt, thìa xúc hoá chất (lấy bột $\\mathrm{CuO}$), panh (gắp viên kẽm).',
        'Dự kiến hiện tượng: quỳ tím hoá đỏ; viên kẽm tan dần, có bọt khí; $\\mathrm{CuO}$ tan tạo dung dịch màu xanh; dung dịch màu hồng nhạt dần rồi mất màu.',
      ],
      answer:
        'Dụng cụ: ống nghiệm, giá ống nghiệm, ống hút nhỏ giọt, thìa, panh. Hoá chất: dung dịch $\\mathrm{HCl}$ loãng, quỳ tím, $\\mathrm{Zn}$, $\\mathrm{CuO}$, dung dịch $\\mathrm{NaOH}$ và phenolphthalein.',
    },
    {
      problem:
        'Nhóm em đã đo điện trở của một đoạn dây dẫn và có bảng số liệu. Hãy cho biết mỗi nội dung sau thuộc phần nào của bài báo cáo: (a) bảng số liệu $U$, $I$ và đồ thị; (b) sơ đồ mạch điện và cách mắc ampe kế, vôn kế; (c) giải thích vì sao ba giá trị điện trở tính được hơi khác nhau.',
      steps: [
        'Số liệu thu được, trình bày bằng bảng, đồ thị thuộc phần Kết quả.',
        'Dụng cụ và cách bố trí, tiến hành thí nghiệm thuộc phần Phương pháp.',
        'Phân tích, giải thích kết quả (nguyên nhân sai số) thuộc phần Thảo luận.',
      ],
      answer: '(a) Kết quả; (b) Phương pháp; (c) Thảo luận.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Dụng cụ nào dùng để đọc giá trị các góc khi nghiên cứu khúc xạ ánh sáng?',
      options: ['Bản bán trụ', 'Bảng chia độ', 'Thấu kính hội tụ', 'Giá quang học đồng trục'],
      answer: 1,
      hints: ['Dụng cụ có các vạch chia độ như thước đo góc.'],
      solution:
        'Bảng chia độ dùng để đọc giá trị các góc khi nghiên cứu khúc xạ ánh sáng và phản xạ toàn phần. Bản bán trụ là khối thuỷ tinh để ánh sáng truyền qua.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao vạch số 0 của điện kế nằm ở giữa thang đo?',
      options: [
        'Để đọc số đo dễ hơn',
        'Vì điện kế chỉ đo được dòng điện rất lớn',
        'Vì khi dòng điện đổi chiều, kim lệch về phía ngược lại',
        'Vì điện kế đo cả nhiệt độ',
      ],
      answer: 2,
      hints: ['Dòng điện cảm ứng có thể đổi chiều khi đưa nam châm vào và ra cuộn dây.'],
      solution:
        'Dòng điện cảm ứng có thể chạy theo hai chiều. Khi dòng điện đổi chiều, kim điện kế lệch về phía ngược lại, nên thang đo có vạch 0 ở giữa với giá trị ở cả hai phía.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dụng cụ với công dụng của nó.',
      left: ['Phễu chiết', 'Lưới tản nhiệt', 'Đồng hồ đo điện đa năng', 'Kính hiển vi'],
      right: [
        'Đo cường độ dòng điện, hiệu điện thế, điện trở',
        'Tách hai chất lỏng không hoà tan vào nhau',
        'Quan sát nhiễm sắc thể trên tiêu bản',
        'Giúp nhiệt phân bố đều khi đun cốc thuỷ tinh',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Dầu ăn và nước tách thành hai lớp; dụng cụ nào có khoá để cho lớp dưới chảy ra?'],
      solution:
        'Phễu chiết – tách hai chất lỏng không hoà tan; lưới tản nhiệt – nhiệt phân bố đều khi đun; đồng hồ đa năng – đo $I$, $U$, $R$; kính hiển vi – quan sát nhiễm sắc thể.',
    },
    {
      type: 'match',
      prompt: 'Xếp mỗi hoá chất vào đúng nhóm.',
      left: [
        '$\\mathrm{MnO_2}$',
        '$\\mathrm{H_2SO_4}$',
        '$\\mathrm{NaOH}$',
        '$\\mathrm{C_2H_5OH}$',
        '$\\mathrm{I_2}$',
      ],
      right: ['Base', 'Chất hữu cơ', 'Oxide', 'Phi kim', 'Acid', 'Kim loại'],
      pairs: [
        [0, 2],
        [1, 4],
        [2, 0],
        [3, 1],
        [4, 3],
      ],
      hints: [
        'Oxide gồm một nguyên tố liên kết với oxygen; acid có H đứng đầu; base có nhóm OH gắn với kim loại.',
      ],
      solution:
        '$\\mathrm{MnO_2}$ – oxide; $\\mathrm{H_2SO_4}$ – acid; $\\mathrm{NaOH}$ – base; $\\mathrm{C_2H_5OH}$ (ethylic alcohol) – chất hữu cơ; $\\mathrm{I_2}$ (iodine) – phi kim. Không có chất nào là kim loại.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không được tự ý nghiền, trộn các hoá chất trong phòng thí nghiệm?',
      options: [
        'Vì làm hoá chất mất màu',
        'Vì có thể xảy ra phản ứng không mong muốn, thậm chí gây nổ',
        'Vì hoá chất sẽ bị bay hơi hết',
        'Vì làm hỏng nhãn hoá chất',
      ],
      answer: 1,
      hints: ['Hai hoá chất khi tiếp xúc có thể phản ứng với nhau.'],
      solution:
        'Nghiền, trộn hoá chất tuỳ tiện có thể gây phản ứng không mong muốn, toả nhiệt mạnh hoặc gây nổ, nguy hiểm cho người làm thí nghiệm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả những cách bảo quản, sử dụng hoá chất đúng.',
      options: [
        'Đựng hoá chất trong chai, lọ có nắp đậy và dán nhãn',
        'Đựng hoá chất dễ bị phân huỷ bởi ánh sáng trong lọ tối màu',
        'Đổ hoá chất lấy thừa trở lại lọ để tiết kiệm',
        'Đọc kĩ nhãn trước khi dùng',
        'Đeo găng tay, kính bảo hộ khi dùng dung dịch $\\mathrm{H_2SO_4}$ đặc',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Hoá chất đã lấy ra có thể đã bị bẩn.'],
      solution:
        'Hoá chất lấy thừa không đổ trở lại lọ vì có thể làm bẩn cả lọ; xử lí theo hướng dẫn của giáo viên. Các việc còn lại đều đúng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các phần của bài báo cáo một vấn đề khoa học theo đúng thứ tự.',
      items: ['Kết quả', 'Tiêu đề', 'Thảo luận', 'Giới thiệu', 'Tài liệu tham khảo', 'Phương pháp'],
      answer: [1, 3, 5, 0, 2, 4],
      hints: [
        'Trước khi nói đã làm gì, phải nói vì sao làm; trước khi giải thích kết quả, phải có kết quả.',
      ],
      solution:
        'Tiêu đề → Giới thiệu → Phương pháp → Kết quả → Thảo luận → Tài liệu tham khảo (đủ tám phần còn có Tóm tắt sau Tiêu đề và Kết luận trước Tài liệu tham khảo).',
    },
    {
      type: 'number',
      prompt: 'Một bài báo cáo một vấn đề khoa học đầy đủ gồm bao nhiêu phần?',
      answer: 8,
      hints: ['Kể từ Tiêu đề đến Tài liệu tham khảo.'],
      solution:
        'Tám phần: tiêu đề, tóm tắt, giới thiệu, phương pháp, kết quả, thảo luận, kết luận, tài liệu tham khảo.',
    },
    {
      type: 'choice',
      prompt: 'Trong báo cáo, phần nào phân tích kết quả và so sánh với các nghiên cứu khác?',
      options: ['Giới thiệu', 'Phương pháp', 'Thảo luận', 'Tóm tắt'],
      answer: 2,
      hints: ['Phần này đứng ngay sau Kết quả.'],
      solution:
        'Phần Thảo luận phân tích, giải thích kết quả và so sánh với dự đoán hoặc nghiên cứu khác (nếu có).',
    },
    {
      type: 'multi',
      prompt: 'Khi làm báo cáo treo tường, chọn tất cả những việc nên làm.',
      options: [
        'Chọn khổ A0 hoặc A1',
        'Viết thật nhiều chữ để người xem đọc đủ mọi chi tiết',
        'Tiêu đề rõ ràng, đọc được từ xa',
        'Dùng hình ảnh, biểu đồ, đồ thị để trình bày kết quả',
        'Dùng màu nền thật rực rỡ, chữ cùng màu với nền',
      ],
      answers: [0, 2, 3],
      hints: ['Báo cáo treo tường cần dễ đọc từ xa và nhấn vào thông điệp chính.'],
      solution:
        'Nên: khổ A0 hoặc A1, tiêu đề rõ đọc được từ xa, dùng hình ảnh, biểu đồ. Không nên viết nhiều chữ hay chọn nền quá rực, chữ không tương phản với nền.',
    },
    {
      type: 'text',
      prompt:
        'Khi quan sát tiêu bản nhiễm sắc thể ở độ phóng đại 100x, người ta nhỏ lên tiêu bản một giọt chất gì để ảnh rõ nét hơn?',
      accept: ['dầu soi', 'dầu soi kính hiển vi', 'dầu soi kính', 'dầu', 'dầu kính hiển vi'],
      hints: ['Đó là một chất lỏng trong suốt, có chiết suất cao.'],
      solution:
        'Dầu soi kính hiển vi: trong suốt, có chiết suất cao nên giúp quan sát rõ mẫu vật rất nhỏ ở vật kính 100x.',
    },
  ],
  takeaways: [
    'Dụng cụ quang học: nguồn sáng (đèn có khe, laser), bản bán trụ, bảng chia độ, thấu kính, màn chắn, giá quang học. Dụng cụ điện từ: điện kế (vạch 0 ở giữa), đồng hồ đo điện đa năng, cuộn dây có hai đèn LED, nam châm.',
    'Dụng cụ thuỷ tinh dễ vỡ, cầm nắm cẩn thận; đun cốc, bình thuỷ tinh trên lưới tản nhiệt. Quan sát nhiễm sắc thể bằng kính hiển vi và tiêu bản cố định, dùng dầu soi ở vật kính 100x.',
    'Hoá chất cơ bản gồm kim loại, phi kim, oxide, acid, base, chất hữu cơ và chất chỉ thị; được đựng trong chai, lọ có nắp và nhãn. Đọc kĩ nhãn, không tự ý nghiền, trộn hoá chất.',
    'Bài báo cáo khoa học gồm: tiêu đề, tóm tắt, giới thiệu, phương pháp, kết quả, thảo luận, kết luận, tài liệu tham khảo. Thuyết trình bằng trình chiếu hoặc báo cáo treo tường khổ A0, A1: ít chữ, nhiều hình, nhấn vào thông điệp chính.',
  ],
};
