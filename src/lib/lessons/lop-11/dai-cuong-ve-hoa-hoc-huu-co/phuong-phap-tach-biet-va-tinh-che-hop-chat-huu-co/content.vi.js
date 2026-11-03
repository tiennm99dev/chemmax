/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tắc, cách tiến hành và ứng dụng của các phương pháp chưng cất, chiết, kết tinh và sắc kí cột để tách biệt, tinh chế hợp chất hữu cơ.',
  intro:
    'Các hợp chất hữu cơ thu được từ tự nhiên hay từ phòng thí nghiệm thường ở dạng thô, lẫn nhiều chất khác. Người nấu rượu gạo, người làm đường phèn hay người chiết tinh dầu đều đang làm cùng một việc: tách lấy chất mình cần. Chọn cách tách nào là tuỳ vào điều gì khác nhau giữa các chất trong hỗn hợp.',
  objectives: [
    'Trình bày được nguyên tắc và cách tiến hành của chưng cất, chiết, kết tinh và sắc kí cột.',
    'Chọn được phương pháp tách phù hợp với một hỗn hợp cụ thể, dựa vào sự khác nhau về tính chất của các chất.',
    'Nhận ra các phương pháp này trong những cách làm quen thuộc của đời sống.',
  ],
  sections: [
    {
      heading: 'Phương pháp chưng cất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tắc',
          text: 'Chưng cất dựa vào sự khác nhau về nhiệt độ sôi của các chất trong hỗn hợp ở một áp suất nhất định.',
        },
        {
          type: 'p',
          text: 'Đun nóng để chuyển chất lỏng thành hơi, sau đó làm lạnh cho hơi ngưng tụ và hứng lấy chất lỏng. Chất có nhiệt độ sôi thấp hơn bay hơi trước. Nấu rượu là cách chưng cất quen thuộc: đun hỗn hợp cơm rượu đã lên men, hơi ethanol và nước đi qua ống dẫn được làm lạnh rồi chảy xuống bình hứng.',
        },
        {
          type: 'p',
          text: 'Hãy tự chạy một mẻ chưng cất: bấm đun từng phút, xem đồ thị nhiệt độ rồi đổi bình hứng đúng lúc để mỗi bình chỉ chứa một chất. Đây là mô hình lí tưởng hoá: chất sôi thấp bay hơi hết rồi chất sôi cao mới bay hơi. Thực tế hơi luôn có cả hai chất, chỉ giàu chất sôi thấp hơn, nên sản phẩm thu được không hoàn toàn tinh khiết.',
        },
        { type: 'widget', name: 'chung-cat' },
        {
          type: 'list',
          items: [
            'Chưng cất thường: tách các chất có nhiệt độ sôi khác nhau nhiều.',
            'Chưng cất phân đoạn: tách các chất có nhiệt độ sôi gần nhau, như chưng cất dầu mỏ.',
            'Chưng cất lôi cuốn hơi nước: tách các chất có nhiệt độ sôi cao và không tan trong nước, như chưng cất tinh dầu sả, tinh dầu bưởi.',
          ],
        },
      ],
    },
    {
      heading: 'Phương pháp chiết',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tắc',
          text: 'Chiết dựa vào sự khác nhau về độ tan của các chất trong hai môi trường không trộn lẫn vào nhau.',
        },
        {
          type: 'p',
          text: 'Chiết lỏng – lỏng dùng phễu chiết với dung môi không trộn lẫn với nước, hoà tan tốt chất cần chiết và dễ bay hơi. Chẳng hạn, lắc nước ép cà rốt với hexane, $\\beta$-carotene chuyển gần hết sang lớp hexane ở phía trên. Tách riêng hai lớp, làm lại vài lần, rồi chưng cất để đuổi dung môi và thu lấy chất cần chiết.',
        },
        {
          type: 'p',
          text: 'Chiết lỏng – rắn dùng dung môi lỏng để hoà tan chất hữu cơ ra khỏi chất rắn: ngâm rượu thuốc, pha trà, phân tích dư lượng thuốc bảo vệ thực vật trong đất đều theo cách này.',
        },
      ],
    },
    {
      heading: 'Phương pháp kết tinh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tắc',
          text: 'Kết tinh dựa vào sự khác nhau về độ tan của các chất và sự thay đổi độ tan của chúng theo nhiệt độ.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Hoà tan chất rắn trong dung môi nóng để tạo dung dịch bão hoà.',
            'Lọc nóng để loại các chất không tan.',
            'Để nguội cho chất cần tinh chế kết tinh, còn tạp chất ở lại trong dung dịch.',
            'Lọc lấy tinh thể. Nếu chưa đủ tinh khiết, kết tinh lại lần nữa.',
          ],
        },
        {
          type: 'p',
          text: 'Phương pháp này dùng để tách và tinh chế chất rắn. Chất cần tinh chế phải tan nhiều khi nóng và ít khi nguội. Làm đường trắng từ đường đỏ, làm đường phèn từ nước mía là những ví dụ quen thuộc.',
        },
      ],
    },
    {
      heading: 'Sắc kí cột',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tắc',
          text: 'Sắc kí cột dựa vào sự phân bố khác nhau của các chất giữa pha động (dung môi cùng mẫu chất) và pha tĩnh (chất hấp phụ rắn như silica gel, aluminium oxide).',
        },
        {
          type: 'p',
          text: 'Đưa hỗn hợp lên đầu cột chứa chất hấp phụ rồi cho dung môi chảy liên tục qua cột. Chất nào bị hấp phụ yếu hơn và tan tốt hơn trong dung môi thì đi nhanh hơn. Hứng từng phần chất lỏng ra khỏi cột ở các ống khác nhau, rồi đuổi dung môi để thu lấy từng chất. Sắc kí cột dùng để tách các chất có hàm lượng nhỏ và khó tách khỏi nhau.',
        },
      ],
    },
    {
      heading: 'So sánh các phương pháp',
      blocks: [
        {
          type: 'table',
          head: ['Phương pháp', 'Dựa vào', 'Thường dùng cho'],
          rows: [
            ['Chưng cất', 'Nhiệt độ sôi khác nhau', 'Hỗn hợp chất lỏng'],
            [
              'Chiết',
              'Độ tan khác nhau trong hai môi trường',
              'Lấy chất ra khỏi nước hoặc chất rắn',
            ],
            ['Kết tinh', 'Độ tan thay đổi theo nhiệt độ', 'Tinh chế chất rắn'],
            ['Sắc kí cột', 'Mức độ hấp phụ và độ tan khác nhau', 'Lượng nhỏ, các chất khó tách'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng sắc kí cột',
    instruction:
      'Mẫu gồm ba chất màu từ lá cây. Chọn dung môi rồi kéo thời gian: xem dải màu đi xuống cột và ống hứng dần đầy. Hãy tìm dung môi cho mỗi ống chỉ chứa một chất. Số liệu chỉ để minh hoạ, không phải đo thực nghiệm.',
  },
  examples: [
    {
      problem:
        'Hỗn hợp X gồm acetone (nhiệt độ sôi $56\\,^\\circ\\mathrm{C}$) và nước ($100\\,^\\circ\\mathrm{C}$), hai chất tan hoàn toàn vào nhau. Nên tách bằng phương pháp nào? Chất nào ra trước?',
      steps: [
        'Hai chất lỏng trộn lẫn hoàn toàn nên không tách được thành hai lớp, do đó không dùng phễu chiết được.',
        'Nhiệt độ sôi khác nhau $100 - 56 = 44\\,^\\circ\\mathrm{C}$, khá xa nhau, nên dùng chưng cất thường.',
        'Acetone có nhiệt độ sôi thấp hơn, nên bay hơi và ngưng tụ vào bình hứng trước.',
      ],
      answer: 'Dùng chưng cất. Acetone ra trước.',
    },
    {
      problem:
        'Muốn lấy $\\beta$-carotene từ nước ép cà rốt bằng hexane (không tan trong nước, nhẹ hơn nước, sôi ở $69\\,^\\circ\\mathrm{C}$). Hãy nêu các bước và cho biết vì sao hexane phù hợp.',
      steps: [
        '$\\beta$-carotene tan trong hexane tốt hơn trong nước, và hexane không trộn lẫn với nước, nên dùng phương pháp chiết lỏng – lỏng.',
        'Lắc hỗn hợp trong phễu chiết rồi để yên cho tách lớp. Hexane nhẹ hơn nên ở lớp trên, mang theo $\\beta$-carotene.',
        'Mở khoá cho lớp nước chảy xuống, giữ lại lớp hexane; lặp lại với hexane mới để chiết hết.',
        'Hexane dễ bay hơi nên có thể chưng cất đuổi dung môi, còn lại $\\beta$-carotene.',
      ],
      answer: 'Chiết lỏng – lỏng bằng hexane, rồi chưng cất để đuổi dung môi.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Mỗi cách làm trong đời sống thuộc về phương pháp nào?',
      left: ['Nấu rượu uống', 'Ngâm rượu thuốc', 'Làm đường phèn từ nước mía'],
      right: ['Chưng cất', 'Chiết', 'Kết tinh', 'Sắc kí cột'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Hỏi: cách làm đó dùng nhiệt độ sôi, độ tan trong một dung môi, hay tạo tinh thể?'],
      solution:
        'Nấu rượu là chưng cất. Ngâm rượu thuốc là chiết chất tan ra khỏi chất rắn. Làm đường phèn là kết tinh. Sắc kí cột không có ở các cách làm này.',
    },
    {
      type: 'choice',
      prompt: 'Phương pháp chiết dựa vào sự khác nhau về tính chất nào?',
      options: [
        'Độ tan của các chất trong hai môi trường không trộn lẫn',
        'Nhiệt độ sôi của các chất',
        'Khối lượng phân tử của các chất',
        'Màu sắc của các chất',
      ],
      answer: 0,
      hints: [
        'Dụng cụ quen thuộc của phương pháp này là phễu chiết, trong đó có hai lớp chất lỏng.',
      ],
      solution: 'Chiết dựa vào độ tan khác nhau của các chất trong hai môi trường không trộn lẫn.',
    },
    {
      type: 'choice',
      prompt:
        'Dầu mỏ gồm nhiều hydrocarbon có nhiệt độ sôi gần nhau. Muốn tách thành xăng, dầu hoả, dầu diesel,... người ta dùng phương pháp nào?',
      options: ['Chưng cất phân đoạn', 'Chiết lỏng – rắn', 'Kết tinh', 'Lọc'],
      answer: 0,
      hints: ['Các phân đoạn này khác nhau ở khoảng nhiệt độ sôi.'],
      solution:
        'Các chất có nhiệt độ sôi gần nhau được tách bằng chưng cất phân đoạn, nên đây là phương pháp phù hợp với dầu mỏ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước kết tinh để tinh chế một chất rắn.',
      items: [
        'Hoà tan chất rắn trong dung môi nóng',
        'Lọc nóng để bỏ chất không tan',
        'Để nguội cho chất cần tinh chế kết tinh',
        'Lọc lấy tinh thể',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Chất không tan phải được bỏ khi dung dịch còn nóng, trước khi tinh thể xuất hiện.'],
      solution:
        'Hoà tan trong dung môi nóng, lọc nóng bỏ chất không tan, để nguội cho kết tinh, rồi lọc lấy tinh thể.',
    },
    {
      type: 'choice',
      prompt:
        'Trên cột silica gel, chất A đi nhanh hơn chất B khi cùng một dung môi chảy qua. Nhận xét nào đúng?',
      options: [
        'A bị hấp phụ yếu hơn B',
        'A bị hấp phụ mạnh hơn B',
        'A và B bị hấp phụ như nhau',
        'A có nhiệt độ sôi thấp hơn B',
      ],
      answer: 0,
      hints: ['Chất càng bám chặt vào pha tĩnh thì càng ở lại lâu trên cột.'],
      solution:
        'Chất bị hấp phụ yếu hơn rời pha tĩnh dễ hơn, nên đi nhanh hơn. Nhiệt độ sôi không quyết định tốc độ này.',
    },
    {
      type: 'number',
      prompt:
        'Giả sử mỗi lần chiết lấy ra được $60\\%$ lượng chất còn lại trong nước. Sau hai lần chiết, đã lấy ra được bao nhiêu phần trăm lượng chất ban đầu?',
      answer: 84,
      unit: '%',
      hints: [
        'Sau lần đầu còn lại $40\\%$. Lần thứ hai chỉ tính trên phần còn lại.',
        'Tính phần còn lại sau hai lần, rồi lấy $100\\%$ trừ đi.',
      ],
      solution:
        'Phần còn lại sau hai lần: $100\\% \\cdot 0{,}4 \\cdot 0{,}4 = 16\\%$. Đã lấy ra được $100\\% - 16\\% = 84\\%$. Vì vậy chiết nhiều lần sẽ lấy được nhiều chất hơn.',
    },
    {
      type: 'number',
      prompt:
        'Giả sử $100$ g nước hoà tan được tối đa $6{,}8$ g chất rắn X khi nóng và chỉ $0{,}3$ g khi nguội. Làm nguội dung dịch bão hoà nóng chứa $100$ g nước thì có tối đa bao nhiêu gam X kết tinh?',
      answer: 6.5,
      tolerance: 0.001,
      unit: 'g',
      hints: ['Lượng kết tinh bằng phần độ tan bị giảm khi hạ nhiệt độ.'],
      solution:
        'Dung dịch nguội chỉ giữ được $0{,}3$ g, nên phần còn lại kết tinh: $6{,}8 - 0{,}3 = 6{,}5$ g.',
    },
    {
      type: 'multi',
      prompt:
        'Chưng cất lôi cuốn hơi nước thích hợp để tách chất có những đặc điểm nào? (Chọn các đặc điểm đúng.)',
      options: [
        'Có nhiệt độ sôi cao',
        'Không tan trong nước',
        'Tan vô hạn trong nước',
        'Là muối của kim loại',
      ],
      answers: [0, 1],
      hints: ['Nghĩ đến tinh dầu sả: tinh dầu nổi thành lớp riêng trên nước khi ngưng tụ.'],
      solution:
        'Hơi nước lôi cuốn tinh dầu bay theo, nên chất cần tách có nhiệt độ sôi cao và không tan trong nước, sau đó tự tách khỏi nước khi ngưng tụ.',
    },
  ],
  takeaways: [
    'Chưng cất dựa vào nhiệt độ sôi; có chưng cất thường, phân đoạn và lôi cuốn hơi nước.',
    'Chiết dựa vào độ tan khác nhau trong hai môi trường không trộn lẫn; chiết nhiều lần lấy được nhiều chất hơn.',
    'Kết tinh dựa vào độ tan thay đổi theo nhiệt độ, dùng để tinh chế chất rắn.',
    'Sắc kí cột dựa vào sự phân bố giữa pha động và pha tĩnh: chất bị hấp phụ yếu hơn ra trước.',
    'Muốn chọn phương pháp, hãy tìm xem các chất trong hỗn hợp khác nhau ở tính chất nào.',
  ],
};
