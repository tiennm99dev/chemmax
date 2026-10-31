/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hoá học nghiên cứu thành phần, cấu trúc, tính chất, sự biến đổi của chất và ứng dụng của chúng; bài mở đầu giới thiệu vai trò của hoá học trong đời sống, sản xuất và các phương pháp học tập, nghiên cứu hoá học.',
  intro:
    'Bữa cơm em ăn được trồng nhờ phân bón, chiếc điện thoại chạy bằng pin lithium, viên thuốc hạ sốt được tổng hợp trong nhà máy dược. Đằng sau tất cả là hoá học. Ở các lớp dưới, em đã làm quen với chất, nguyên tử, phân tử và phản ứng hoá học trong môn Khoa học tự nhiên. Từ lớp 10, Hoá học trở thành một môn học riêng. Bài mở đầu trả lời ba câu hỏi: hoá học nghiên cứu cái gì, hoá học có vai trò gì, và học, nghiên cứu hoá học như thế nào cho hiệu quả?',
  objectives: [
    'Nêu được đối tượng nghiên cứu của hoá học.',
    'Phân biệt được biến đổi vật lí và biến đổi hoá học dựa vào dấu hiệu có chất mới tạo thành.',
    'Trình bày được vai trò của hoá học đối với đời sống, sản xuất và các ngành khoa học khác.',
    'Nêu được các phương pháp học tập hoá học và các bước của phương pháp nghiên cứu hoá học.',
  ],
  sections: [
    {
      heading: 'Đối tượng nghiên cứu của hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hoá học',
          text: 'Hoá học là ngành khoa học thuộc lĩnh vực khoa học tự nhiên, nghiên cứu về thành phần, cấu trúc, tính chất, sự biến đổi của các chất và các hiện tượng kèm theo, cùng với ứng dụng của chúng.',
        },
        {
          type: 'p',
          text: 'Chất được tạo nên từ các hạt rất nhỏ: nguyên tử, phân tử, ion. Đối tượng của hoá học rất đa dạng: các đơn chất và hợp chất, chất vô cơ và chất hữu cơ, vật liệu tự nhiên (đá vôi, gỗ, bông) và vật liệu nhân tạo (chất dẻo, thuỷ tinh, hợp kim).',
        },
        {
          type: 'table',
          caption: 'Hoá học nghiên cứu những gì về một chất? Ví dụ với nước',
          head: ['Nội dung', 'Câu hỏi đặt ra', 'Ví dụ với nước'],
          rows: [
            [
              'Thành phần',
              'Chất gồm những nguyên tố nào, theo tỉ lệ nào?',
              'Hydrogen và oxygen, tỉ lệ số nguyên tử $2 : 1$',
            ],
            [
              'Cấu trúc',
              'Các nguyên tử liên kết và sắp xếp ra sao?',
              'Phân tử $\\text{H}_2\\text{O}$ có dạng góc',
            ],
            [
              'Tính chất',
              'Chất có tính chất vật lí, hoá học gì?',
              'Sôi ở $100\\ ^\\circ\\text{C}$ (ở áp suất 1 atm), hoà tan được nhiều chất',
            ],
            [
              'Sự biến đổi',
              'Chất biến đổi thành chất nào, trong điều kiện nào?',
              'Bị điện phân thành khí hydrogen và khí oxygen',
            ],
            ['Ứng dụng', 'Chất được dùng để làm gì?', 'Dung môi, nguyên liệu sản xuất hydrogen'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Biến đổi vật lí và biến đổi hoá học',
          text: 'Biến đổi vật lí là quá trình chất chỉ thay đổi trạng thái, hình dạng, kích thước nhưng vẫn giữ nguyên là chất ban đầu (nước đá tan, muối ăn hoà tan vào nước). Biến đổi hoá học là quá trình có chất mới tạo thành (sắt bị gỉ, khí gas cháy). Hoá học đặc biệt quan tâm tới biến đổi hoá học, tức phản ứng hoá học.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Dấu hiệu quyết định là có chất mới hay không, chứ không phải có thay đổi lớn hay không. Nước sôi sủi bọt mạnh nhưng chỉ là biến đổi vật lí; sắt gỉ rất chậm nhưng là biến đổi hoá học.',
        },
        {
          type: 'p',
          text: 'Hoá học liên quan chặt chẽ với vật lí, sinh học, địa chất và được chia thành nhiều chuyên ngành:',
        },
        {
          type: 'list',
          items: [
            'Hoá vô cơ: nghiên cứu các nguyên tố và hợp chất vô cơ (kim loại, oxide, acid, base, muối).',
            'Hoá hữu cơ: nghiên cứu các hợp chất của carbon (trừ một số hợp chất đơn giản như $\\text{CO}$, $\\text{CO}_2$, muối carbonate).',
            'Hoá lí: dùng các quy luật vật lí để nghiên cứu cấu tạo chất, tốc độ và năng lượng của phản ứng.',
            'Hoá phân tích: xác định thành phần và hàm lượng các chất trong mẫu.',
            'Hoá sinh, hoá dược, khoa học vật liệu, công nghệ hoá học: các ngành kết nối hoá học với sinh học, y học và sản xuất.',
          ],
        },
      ],
    },
    {
      heading: 'Vai trò của hoá học trong đời sống và sản xuất',
      blocks: [
        {
          type: 'p',
          text: 'Các chất hoá học có mặt ở khắp nơi: trong lương thực, thực phẩm, nhiên liệu, vật liệu, thuốc chữa bệnh. Hoá học giúp con người hiểu, sử dụng và tạo ra các chất phục vụ cuộc sống.',
        },
        {
          type: 'table',
          caption: 'Một số vai trò của hoá học',
          head: ['Lĩnh vực', 'Đóng góp của hoá học'],
          rows: [
            [
              'Y học, dược phẩm',
              'Tổng hợp thuốc, vaccine, chất sát khuẩn; chất phóng xạ dùng trong chẩn đoán và điều trị',
            ],
            [
              'Nông nghiệp, thực phẩm',
              'Phân bón, thuốc bảo vệ thực vật, chất bảo quản và phụ gia thực phẩm',
            ],
            [
              'Năng lượng, nhiên liệu',
              'Chế biến dầu mỏ, khí thiên nhiên; pin, ắc quy; vật liệu cho pin mặt trời',
            ],
            [
              'Vật liệu, công nghiệp',
              'Kim loại, hợp kim, chất dẻo, cao su, tơ sợi, xi măng, thuỷ tinh, vật liệu mới',
            ],
            ['Môi trường', 'Xử lí nước thải, khí thải; phân tích, phát hiện chất ô nhiễm'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hoá học là cầu nối của các ngành khoa học',
          text: 'Nhiều thành tựu của y học, sinh học, khoa học vật liệu và năng lượng dựa trên hiểu biết về chất và phản ứng hoá học. Ngược lại, những thách thức mới về khoa học, công nghệ (năng lượng sạch, vật liệu mới, thuốc mới) là động lực thúc đẩy hoá học phát triển.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Hoá chất dùng sai cách có thể gây hại: lạm dụng phân bón, thuốc trừ sâu gây ô nhiễm đất và nước; khí thải nhà máy gây ô nhiễm không khí. Hiểu hoá học giúp con người sử dụng hoá chất an toàn và bảo vệ môi trường.',
        },
      ],
    },
    {
      heading: 'Phương pháp học tập và nghiên cứu hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Để học tốt môn Hoá học, em cần hứng thú, chủ động và kết hợp nhiều cách học:',
        },
        {
          type: 'list',
          items: [
            'Tìm hiểu lí thuyết: đọc sách giáo khoa, tra cứu tài liệu, quan sát thí nghiệm, dự đoán kết quả và liên hệ với thực tiễn.',
            'Học qua thực hành thí nghiệm: làm thí nghiệm an toàn, quan sát, ghi chép và giải thích hiện tượng.',
            'Luyện tập, ôn tập: ghi nhớ kiến thức cốt lõi, vận dụng để trả lời câu hỏi và giải bài tập.',
            'Vận dụng vào thực tiễn: dùng kiến thức hoá học giải thích hiện tượng và giải quyết vấn đề trong đời sống.',
          ],
        },
        {
          type: 'p',
          text: 'Các nhà hoá học tìm ra tri thức mới bằng phương pháp nghiên cứu khoa học, gồm các bước sau:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Quan sát, đặt câu hỏi về bản chất hoá học của hiện tượng hoặc vấn đề.',
            'Đặt giả thuyết khoa học để giải thích (có thể dựa vào sách, tài liệu).',
            'Lập kế hoạch thí nghiệm kiểm chứng giả thuyết: dụng cụ, hoá chất, các bước tiến hành, phân công nhóm.',
            'Tiến hành thí nghiệm theo kế hoạch và ghi chép kết quả.',
            'Phân tích kết quả bằng bảng, biểu đồ, đồ thị hoặc tính toán.',
            'So sánh kết quả với giả thuyết; kết luận giả thuyết nào phù hợp, giả thuyết nào không.',
            'Báo cáo kết quả bằng bài viết hoặc trình bày trước lớp.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thực nghiệm là cốt lõi',
          text: 'Phương pháp thực nghiệm đóng vai trò cốt lõi trong nghiên cứu hoá học: mọi giả thuyết và mô hình đều phải được kiểm chứng bằng thực nghiệm. Bên cạnh đó, phương pháp mô hình (mô hình nguyên tử, mô hình phân tử) giúp mô tả cấu tạo của những hạt quá nhỏ không quan sát được trực tiếp.',
        },
        {
          type: 'p',
          text: 'Ví dụ: nghiên cứu dùng tinh dầu tràm trà làm nước súc miệng. Nhóm nghiên cứu tìm hiểu tài liệu, đặt giả thuyết tinh dầu tràm trà có khả năng kháng khuẩn, chiết tinh dầu bằng phương pháp chưng cất lôi cuốn hơi nước, thử hoạt tính kháng khuẩn của sản phẩm, rồi so sánh kết quả với giả thuyết và báo cáo.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp thẻ: vật lí hay hoá học, ứng dụng ở đâu?',
    instruction:
      'Bộ thẻ thứ nhất: với mỗi quá trình, hỏi "có chất mới tạo thành không?" rồi xếp vào biến đổi vật lí hoặc biến đổi hoá học. Bộ thẻ thứ hai: xếp mỗi ứng dụng của hoá học vào lĩnh vực mà nó phục vụ. Mỗi lần đặt thẻ, em được biết ngay đúng hay sai và lí do.',
  },
  examples: [
    {
      problem:
        'Trong các quá trình sau, quá trình nào là biến đổi hoá học? (a) Cồn trong đèn cồn cháy; (b) Cồn để trong lọ không đậy nút bị vơi dần; (c) Sữa để lâu bị chua; (d) Nghiền hạt cà phê thành bột.',
      steps: [
        'Với mỗi quá trình, xét xem có chất mới tạo thành hay không.',
        '(a) Cồn cháy tạo ra khí carbon dioxide và hơi nước: có chất mới, là biến đổi hoá học.',
        '(b) Cồn bay hơi: chỉ đổi từ thể lỏng sang thể hơi, là biến đổi vật lí.',
        '(c) Đường trong sữa bị vi khuẩn chuyển thành acid lactic có vị chua: có chất mới, là biến đổi hoá học.',
        '(d) Nghiền chỉ làm hạt cà phê nhỏ đi, chất không đổi: là biến đổi vật lí.',
      ],
      answer: 'Quá trình (a) và (c) là biến đổi hoá học; (b) và (d) là biến đổi vật lí.',
    },
    {
      problem:
        'Bạn An thấy đinh sắt ngâm trong nước muối bị gỉ nhanh hơn đinh sắt ngâm trong nước cất. Hãy trình bày cách nghiên cứu vấn đề này theo các bước của phương pháp nghiên cứu hoá học.',
      steps: [
        'Quan sát, đặt câu hỏi: vì sao đinh sắt trong nước muối gỉ nhanh hơn?',
        'Đặt giả thuyết: muối ăn hoà tan làm sắt bị gỉ nhanh hơn.',
        'Lập kế hoạch: chuẩn bị 3 ống nghiệm cùng lượng nước, mỗi ống một đinh sắt giống nhau; ống 1 nước cất, ống 2 nước muối loãng, ống 3 nước muối đặc; để cùng nhiệt độ, quan sát trong 5 ngày.',
        'Tiến hành thí nghiệm, ghi chép hằng ngày lượng gỉ xuất hiện trên mỗi đinh.',
        'Phân tích: lập bảng, so sánh thời điểm xuất hiện gỉ và lượng gỉ ở 3 ống.',
        'So sánh với giả thuyết: nếu ống có muối gỉ nhanh hơn rõ rệt thì giả thuyết phù hợp.',
        'Viết báo cáo, trình bày kết quả trước lớp.',
      ],
      answer:
        'Nghiên cứu đi đủ 7 bước: câu hỏi, giả thuyết, kế hoạch thí nghiệm (chỉ thay đổi lượng muối, giữ các điều kiện khác như nhau), tiến hành, phân tích, so sánh với giả thuyết và báo cáo.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đối tượng nghiên cứu của hoá học là',
      options: [
        'thành phần, cấu trúc, tính chất, sự biến đổi của các chất và ứng dụng của chúng',
        'chuyển động của các vật và các dạng năng lượng',
        'cấu tạo và hoạt động sống của các sinh vật',
        'sự vận động của các thiên thể trong vũ trụ',
      ],
      answer: 0,
      hints: ['Hoá học là khoa học về chất.'],
      solution:
        'Hoá học nghiên cứu về thành phần, cấu trúc, tính chất, sự biến đổi của các chất và ứng dụng của chúng. Chuyển động và năng lượng thuộc vật lí học, sinh vật thuộc sinh học, thiên thể thuộc thiên văn học.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các quá trình là biến đổi hoá học.',
      options: [
        'Đốt than trong bếp lò',
        'Thuỷ tinh nóng chảy được thổi thành bình cầu',
        'Thức ăn được tiêu hoá trong dạ dày',
        'Băng phiến để trong tủ nhỏ dần',
        'Lá cây quang hợp tạo ra tinh bột',
        'Cắt nhỏ giấy rồi trộn với nước',
      ],
      answers: [0, 2, 4],
      hints: [
        'Hỏi với từng quá trình: sau quá trình đó có chất mới không?',
        'Băng phiến nhỏ dần vì nó thăng hoa (chuyển thẳng từ rắn sang hơi).',
      ],
      solution:
        'Than cháy tạo ra carbon dioxide; thức ăn bị phân giải thành chất khác; quang hợp biến carbon dioxide và nước thành tinh bột: đều có chất mới nên là biến đổi hoá học. Thổi thuỷ tinh, băng phiến thăng hoa, cắt giấy trộn nước chỉ đổi trạng thái hoặc hình dạng: là biến đổi vật lí.',
    },
    {
      type: 'number',
      prompt:
        'Cho các quá trình: (1) cơm bị thiu; (2) nước biển bay hơi để lại muối; (3) đốt cháy nến; (4) dây tóc bóng đèn nóng sáng khi có dòng điện; (5) vôi sống tác dụng với nước; (6) gỗ bị cưa thành mùn. Có bao nhiêu quá trình là biến đổi hoá học?',
      answer: 3,
      hints: [
        'Xét từng quá trình xem có tạo ra chất mới không.',
        'Dây tóc bóng đèn sau khi tắt điện vẫn là kim loại tungsten như cũ.',
      ],
      solution:
        'Biến đổi hoá học: (1) cơm thiu, (3) nến cháy, (5) vôi sống tác dụng với nước, vì đều có chất mới tạo thành. (2), (4), (6) là biến đổi vật lí. Vậy có $3$ quá trình.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của phương pháp nghiên cứu hoá học theo đúng thứ tự.',
      items: [
        'Lập kế hoạch thí nghiệm',
        'Báo cáo kết quả',
        'Quan sát, đặt câu hỏi',
        'Phân tích kết quả',
        'Đặt giả thuyết khoa học',
        'So sánh kết quả với giả thuyết',
        'Tiến hành thí nghiệm',
      ],
      answer: [2, 4, 0, 6, 3, 5, 1],
      hints: [
        'Mọi nghiên cứu bắt đầu từ một câu hỏi và kết thúc bằng báo cáo.',
        'Phải có giả thuyết mới lập được kế hoạch kiểm chứng; phải có số liệu mới phân tích được.',
      ],
      solution:
        'Thứ tự: quan sát, đặt câu hỏi → đặt giả thuyết khoa học → lập kế hoạch thí nghiệm → tiến hành thí nghiệm → phân tích kết quả → so sánh kết quả với giả thuyết → báo cáo kết quả.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ứng dụng của hoá học với lĩnh vực mà nó phục vụ.',
      left: [
        'Sản xuất phân bón NPK',
        'Tổng hợp thuốc paracetamol',
        'Chế tạo vật liệu cho pin mặt trời',
        'Xử lí khí thải nhà máy nhiệt điện',
        'Sản xuất chất dẻo làm vỏ thiết bị',
      ],
      right: ['Nông nghiệp', 'Y học', 'Năng lượng', 'Môi trường', 'Vật liệu'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Hỏi: sản phẩm này được ai dùng, dùng để làm gì?'],
      solution:
        'Phân bón phục vụ nông nghiệp; thuốc paracetamol phục vụ y học; pin mặt trời phục vụ năng lượng; xử lí khí thải bảo vệ môi trường; chất dẻo là vật liệu.',
    },
    {
      type: 'choice',
      prompt: 'Chuyên ngành nào của hoá học chủ yếu nghiên cứu các hợp chất của carbon?',
      options: ['Hoá vô cơ', 'Hoá hữu cơ', 'Hoá phân tích', 'Hoá lí'],
      answer: 1,
      hints: ['Đa số các chất trong cơ thể sinh vật (đường, chất béo, protein) đều chứa carbon.'],
      solution:
        'Hoá hữu cơ nghiên cứu các hợp chất của carbon (trừ một số chất đơn giản như $\\text{CO}$, $\\text{CO}_2$, muối carbonate). Hoá vô cơ nghiên cứu các chất vô cơ, hoá phân tích xác định thành phần mẫu, hoá lí dùng quy luật vật lí để nghiên cứu chất và phản ứng.',
    },
    {
      type: 'choice',
      prompt: 'Trong nghiên cứu hoá học, một giả thuyết chỉ được chấp nhận khi',
      options: [
        'được nhiều người đồng ý',
        'được kiểm chứng bằng thực nghiệm',
        'được viết trong một báo cáo',
        'giải thích được bằng một mô hình đẹp',
      ],
      answer: 1,
      hints: ['Phương pháp nào đóng vai trò cốt lõi trong nghiên cứu hoá học?'],
      solution:
        'Phương pháp thực nghiệm là cốt lõi của nghiên cứu hoá học: mọi giả thuyết và mô hình đều phải được kiểm chứng bằng thực nghiệm. Sự đồng tình của nhiều người hay một mô hình hợp lí chưa đủ để khẳng định giả thuyết đúng.',
    },
    {
      type: 'choice',
      prompt:
        'Khi làm thí nghiệm kiểm tra "muối ăn làm đinh sắt gỉ nhanh hơn", bạn Bình dùng một ống nước cất để ở phòng lạnh và một ống nước muối để ngoài nắng. Kế hoạch này sai ở đâu?',
      options: [
        'Thiếu bước đặt giả thuyết',
        'Thay đổi nhiều yếu tố cùng lúc nên không biết gỉ nhanh do muối hay do nhiệt độ',
        'Không nên dùng nước cất',
        'Không có gì sai',
      ],
      answer: 1,
      hints: ['Để biết muối có ảnh hưởng không, hai ống chỉ được khác nhau ở điểm nào?'],
      solution:
        'Hai ống khác nhau cả về muối lẫn nhiệt độ, nên nếu ống nước muối gỉ nhanh hơn cũng không kết luận được nguyên nhân là muối. Kế hoạch đúng chỉ thay đổi lượng muối, giữ nguyên các điều kiện khác (nhiệt độ, lượng nước, loại đinh).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cách học giúp học tốt môn Hoá học.',
      options: [
        'Quan sát thí nghiệm, dự đoán và giải thích hiện tượng',
        'Chỉ học thuộc lòng, không cần làm bài tập',
        'Tra cứu thêm tài liệu phù hợp với bài học',
        'Liên hệ kiến thức với hiện tượng trong đời sống',
        'Làm thí nghiệm không cần tuân theo quy tắc an toàn',
      ],
      answers: [0, 2, 3],
      hints: ['Học hoá học cần cả lí thuyết, thực hành, luyện tập và vận dụng, luôn an toàn.'],
      solution:
        'Quan sát và giải thích thí nghiệm, tra cứu tài liệu, liên hệ thực tiễn đều là cách học hiệu quả. Chỉ học thuộc mà không luyện tập thì không vận dụng được; làm thí nghiệm phải luôn tuân thủ quy tắc an toàn.',
    },
  ],
  takeaways: [
    'Hoá học nghiên cứu thành phần, cấu trúc, tính chất, sự biến đổi của các chất và ứng dụng của chúng.',
    'Biến đổi hoá học có chất mới tạo thành; biến đổi vật lí chỉ làm đổi trạng thái, hình dạng của chất.',
    'Hoá học có vai trò quan trọng trong y học, nông nghiệp, năng lượng, vật liệu và bảo vệ môi trường.',
    'Học hoá học kết hợp lí thuyết, thực hành thí nghiệm, luyện tập và vận dụng thực tiễn.',
    'Nghiên cứu hoá học đi qua 7 bước, từ đặt câu hỏi đến báo cáo; thực nghiệm là cốt lõi.',
  ],
};
