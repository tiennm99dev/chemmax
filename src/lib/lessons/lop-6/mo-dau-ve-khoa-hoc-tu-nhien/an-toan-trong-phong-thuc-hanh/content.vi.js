/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài học nêu các quy định an toàn trong phòng thực hành, các nguồn gây mất an toàn (điện, hoá chất, dụng cụ dễ vỡ, sắc nhọn) và cách nhận biết biển báo cấm, biển cảnh báo, biển bắt buộc và biển chỉ dẫn.',
  intro:
    'Phòng thực hành là nơi em được tự tay làm thí nghiệm: đun nóng, pha dung dịch, quan sát mẫu vật. Ở đây có đèn cồn, ổ điện, dụng cụ thuỷ tinh và nhiều loại hoá chất. Nếu sơ ý, chúng có thể gây bỏng, cháy, điện giật hay ngộ độc. Biết các quy định và đọc được các biển báo sẽ giúp em làm thí nghiệm an toàn cho mình và cho các bạn.',
  objectives: [
    'Nêu được các quy định an toàn khi học trong phòng thực hành.',
    'Nhận ra các nguồn có thể gây mất an toàn: điện, hoá chất, dụng cụ dễ vỡ hoặc sắc nhọn, lửa.',
    'Phân biệt được các kí hiệu cảnh báo theo hình dạng và màu sắc, nêu được ý nghĩa của chúng.',
    'Chọn được cách xử lí an toàn trong một số tình huống thường gặp.',
  ],
  sections: [
    {
      heading: 'Quy định an toàn trong phòng thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Trong phòng thực hành có ba nhóm nguồn chính có thể gây mất an toàn: nguồn điện (ổ cắm, dây điện, thiết bị điện); hoá chất và chất dễ cháy (cồn, axit, chất độc); các dụng cụ dễ vỡ, sắc nhọn hoặc nóng (ống nghiệm, cốc thuỷ tinh, dao kéo, đèn cồn đang cháy).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Những việc cần làm',
          text: 'Mặc đồ bảo hộ, đeo kính, khẩu trang, găng tay khi cần; buộc gọn tóc, cất túi và đồ dùng cá nhân đúng nơi quy định. Chỉ làm thí nghiệm khi có sự hướng dẫn và giám sát của giáo viên. Biết vị trí và cách dùng các thiết bị chữa cháy; báo ngay cho giáo viên khi gặp sự cố. Sau khi làm xong, thu gom hoá chất, rác thải đúng nơi quy định, rửa sạch dụng cụ và rửa tay bằng xà phòng.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Những việc không được làm',
          text: 'Không ăn uống, đùa nghịch trong phòng thực hành. Không nếm hoặc ngửi trực tiếp hoá chất. Không tự ý làm thí nghiệm, không tự ý lấy hoá chất hay dùng hoá chất không có nhãn. Không thổi tắt đèn cồn (đậy nắp để tắt). Không chạm tay vào vật đang nóng, dây điện hở hay mảnh thuỷ tinh vỡ.',
        },
        {
          type: 'table',
          caption: 'Một số dụng cụ, hoá chất có thể gây nguy hiểm và cách phòng tránh',
          head: ['Nguồn nguy hiểm', 'Có thể gây ra', 'Phòng tránh'],
          rows: [
            [
              'Đèn cồn, vật đang được đun nóng',
              'Bỏng, cháy',
              'Buộc tóc gọn; dùng kẹp ống nghiệm; đậy nắp để tắt đèn',
            ],
            [
              'Ống nghiệm, cốc thuỷ tinh, dao, kéo',
              'Đứt tay',
              'Cầm chắc, đặt đúng chỗ; thu mảnh vỡ bằng chổi, hót rác',
            ],
            [
              'Axit, base mạnh, chất độc',
              'Bỏng da, ngộ độc',
              'Đeo găng tay, kính; không nếm, ngửi trực tiếp',
            ],
            [
              'Ổ điện, dây điện, thiết bị điện',
              'Điện giật, chập cháy',
              'Tay khô khi dùng điện; báo giáo viên khi dây hở',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Kí hiệu cảnh báo trong phòng thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Các kí hiệu cảnh báo được dùng để nhắc mọi người chú ý các nguy hiểm có thể xảy ra. Mỗi loại có hình dạng và màu sắc riêng, nên chỉ cần nhìn qua là biết biển đó cấm, cảnh báo hay yêu cầu điều gì.',
        },
        {
          type: 'table',
          head: ['Loại kí hiệu', 'Hình dạng và màu sắc', 'Ví dụ'],
          rows: [
            [
              'Biển báo cấm',
              'Hình tròn, nền trắng, viền đỏ, thường có gạch chéo đỏ',
              'Cấm lửa; cấm ăn uống; không dùng làm nước uống',
            ],
            [
              'Biển cảnh báo nguy hiểm',
              'Hình tam giác đều, nền vàng, viền đen',
              'Chất dễ cháy; chất độc; chất ăn mòn; điện cao thế',
            ],
            [
              'Biển bắt buộc thực hiện',
              'Hình tròn, nền xanh dương, hình vẽ trắng',
              'Phải đeo kính bảo hộ; phải đeo găng tay',
            ],
            [
              'Biển chỉ dẫn',
              'Hình vuông hoặc chữ nhật, nền xanh lá, hình vẽ trắng',
              'Lối thoát hiểm; nơi đặt hộp sơ cứu',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Trên nhãn các lọ hoá chất còn có kí hiệu hình thoi viền đỏ, nền trắng, hình vẽ đen, cho biết hoá chất đó dễ cháy, độc hay ăn mòn. Luôn đọc nhãn trước khi dùng hoá chất.',
        },
        {
          type: 'p',
          text: 'Ở phần "Khám phá", em hãy thử xử lí các tình huống trong phòng thực hành và nhận diện các biển báo theo hình dạng, màu sắc của chúng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Một buổi trong phòng thực hành',
    instruction:
      'Ở chế độ "Tình huống", chọn từng vị trí trong phòng, đọc tình huống và chọn cách làm mà em cho là an toàn; lời giải thích hiện ngay sau mỗi lựa chọn. Chuyển sang chế độ "Biển báo" để xác định từng biển thuộc loại nào dựa vào hình dạng và màu sắc.',
  },
  examples: [
    {
      problem:
        'Khi đun nóng nước trong ống nghiệm bằng đèn cồn, bạn Minh cầm ống nghiệm bằng tay, hướng miệng ống về phía bạn bên cạnh, đun xong thì thổi tắt đèn. Hãy chỉ ra các việc làm chưa an toàn và sửa lại.',
      steps: [
        'Cầm ống nghiệm bằng tay khi đun: dễ bị bỏng. Cần dùng kẹp ống nghiệm.',
        'Hướng miệng ống nghiệm về phía bạn: nước sôi có thể bắn ra gây bỏng. Cần hướng miệng ống về phía không có người.',
        'Thổi tắt đèn cồn: lửa có thể bùng ra gây cháy. Cần đậy nắp đèn cồn để tắt.',
      ],
      answer:
        'Có ba việc chưa an toàn; cần dùng kẹp ống nghiệm, hướng miệng ống ra chỗ không có người và đậy nắp để tắt đèn cồn.',
    },
    {
      problem:
        'Một biển báo có dạng hình tam giác đều, nền vàng, viền đen, bên trong vẽ hình tia sét. Biển đó thuộc loại nào và có ý nghĩa gì?',
      steps: [
        'Hình tam giác đều, nền vàng, viền đen là đặc điểm của biển cảnh báo nguy hiểm.',
        'Hình tia sét tượng trưng cho điện.',
      ],
      answer: 'Đó là biển cảnh báo nguy hiểm: cảnh báo điện cao thế, không được lại gần, chạm vào.',
    },
    {
      problem: 'Vì sao phải tuân thủ các quy định an toàn trong phòng thực hành?',
      steps: [
        'Phòng thực hành có điện, hoá chất, lửa và dụng cụ dễ vỡ, nên có nguy cơ gây tai nạn.',
        'Tuân thủ quy định giúp tránh tai nạn cho bản thân và người xung quanh.',
        'Làm đúng quy trình cũng giúp thí nghiệm thành công, bảo vệ dụng cụ, thiết bị.',
      ],
      answer:
        'Để tránh những tai nạn đáng tiếc cho bản thân và người khác, bảo vệ thiết bị và giúp thí nghiệm đạt kết quả.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả những việc làm đúng quy định trong phòng thực hành.',
      options: [
        'Đeo kính và găng tay bảo hộ khi làm thí nghiệm với hoá chất',
        'Nếm thử một ít muối ăn lấy từ lọ hoá chất',
        'Chỉ làm thí nghiệm khi có sự hướng dẫn của giáo viên',
        'Ăn bánh trong lúc chờ dung dịch nguội',
        'Rửa tay bằng xà phòng sau khi làm thí nghiệm',
      ],
      answers: [0, 2, 4],
      hints: ['Không được nếm hoá chất, kể cả khi nó trông giống chất quen thuộc.'],
      solution:
        'Đúng: đeo đồ bảo hộ, làm thí nghiệm dưới sự hướng dẫn của giáo viên, rửa tay sau khi làm. Sai: nếm hoá chất (dù trông giống muối ăn, lọ có thể đã bị lẫn chất khác) và ăn uống trong phòng thực hành.',
    },
    {
      type: 'choice',
      prompt: 'Biển báo hình tròn, nền trắng, viền đỏ, có gạch chéo đỏ là',
      options: [
        'biển cảnh báo nguy hiểm',
        'biển báo cấm',
        'biển bắt buộc thực hiện',
        'biển chỉ dẫn',
      ],
      answer: 1,
      hints: ['Viền đỏ và gạch chéo cho biết việc gì đó không được phép.'],
      solution: 'Hình tròn, nền trắng, viền đỏ là biển báo cấm (ví dụ: cấm lửa, cấm ăn uống).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại biển với hình dạng, màu sắc của nó.',
      left: ['Biển báo cấm', 'Biển cảnh báo nguy hiểm', 'Biển bắt buộc thực hiện', 'Biển chỉ dẫn'],
      right: [
        'Hình tam giác đều, nền vàng, viền đen',
        'Hình vuông hoặc chữ nhật, nền xanh lá',
        'Hình tròn, nền trắng, viền đỏ',
        'Hình tròn, nền xanh dương',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Màu đỏ: cấm; màu vàng: cảnh báo; màu xanh dương: bắt buộc; màu xanh lá: chỉ dẫn.'],
      solution:
        'Cấm: tròn, nền trắng, viền đỏ. Cảnh báo nguy hiểm: tam giác, nền vàng, viền đen. Bắt buộc: tròn, nền xanh dương. Chỉ dẫn: vuông hoặc chữ nhật, nền xanh lá.',
    },
    {
      type: 'choice',
      prompt: 'Khi làm vỡ ống nghiệm thuỷ tinh, em nên làm gì?',
      options: [
        'Nhặt ngay các mảnh vỡ bằng tay cho nhanh',
        'Báo giáo viên và dùng chổi, hót rác thu gom mảnh vỡ vào nơi quy định',
        'Để nguyên, cuối giờ sẽ có người dọn',
        'Gạt mảnh vỡ xuống gầm bàn',
      ],
      answer: 1,
      hints: ['Gặp sự cố thì báo ai trước? Mảnh thuỷ tinh có thể gây gì cho tay?'],
      solution:
        'Báo ngay cho giáo viên và thu gom mảnh vỡ bằng chổi, hót rác (không dùng tay) vào đúng nơi quy định để không ai bị đứt tay.',
    },
    {
      type: 'choice',
      prompt: 'Cách tắt đèn cồn đúng là',
      options: [
        'thổi mạnh vào ngọn lửa',
        'đậy nắp đèn cồn',
        'dội nước vào đèn',
        'để đèn tự tắt khi hết cồn',
      ],
      answer: 1,
      hints: ['Ngọn lửa cần không khí để cháy.'],
      solution:
        'Đậy nắp đèn cồn: ngọn lửa bị ngăn không khí nên tắt. Thổi có thể làm lửa bùng ra; dội nước làm đổ cồn, cháy lan.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguồn có thể gây mất an toàn trong phòng thực hành.',
      options: [
        'Ổ điện, dây điện bị hở',
        'Lọ axit đặc',
        'Mảnh thuỷ tinh vỡ',
        'Bản hướng dẫn thí nghiệm',
        'Đèn cồn đang cháy',
      ],
      answers: [0, 1, 2, 4],
      hints: [
        'Ba nhóm nguồn nguy hiểm: điện; hoá chất, chất dễ cháy; dụng cụ dễ vỡ, sắc nhọn, nóng.',
      ],
      solution:
        'Ổ điện hở (điện), axit đặc (hoá chất), mảnh thuỷ tinh (sắc nhọn) và đèn cồn đang cháy (lửa, nhiệt) đều có thể gây tai nạn. Bản hướng dẫn thí nghiệm thì không.',
    },
    {
      type: 'choice',
      prompt:
        'Một biển báo hình tròn, nền xanh dương, vẽ hình đôi kính màu trắng. Biển này yêu cầu gì?',
      options: [
        'Cấm đeo kính trong phòng',
        'Bắt buộc đeo kính bảo hộ',
        'Cảnh báo ánh sáng mạnh',
        'Chỉ dẫn nơi để kính',
      ],
      answer: 1,
      hints: ['Hình tròn nền xanh dương là loại biển nào?'],
      solution:
        'Hình tròn nền xanh dương là biển bắt buộc thực hiện; hình đôi kính: phải đeo kính bảo hộ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các việc theo đúng thứ tự khi bị một ít dung dịch hoá chất bắn vào tay.',
      items: [
        'Báo ngay cho giáo viên',
        'Dừng thí nghiệm, đặt dụng cụ xuống chỗ an toàn',
        'Rửa ngay chỗ bị dính hoá chất dưới vòi nước sạch nhiều lần',
      ],
      answer: [1, 2, 0],
      hints: [
        'Trước hết phải tránh làm đổ thêm hoá chất; sau đó xử lí chỗ bị dính càng sớm càng tốt.',
      ],
      solution:
        'Đặt dụng cụ xuống chỗ an toàn, rửa ngay chỗ bị dính dưới vòi nước sạch nhiều lần để làm loãng và trôi hoá chất, rồi báo cho giáo viên để được xử lí tiếp.',
    },
  ],
  takeaways: [
    'Nguồn gây mất an toàn trong phòng thực hành: điện; hoá chất và chất dễ cháy; dụng cụ dễ vỡ, sắc nhọn, vật nóng.',
    'Chỉ làm thí nghiệm khi có giáo viên hướng dẫn; mặc đồ bảo hộ, buộc gọn tóc; không ăn uống, đùa nghịch; không nếm, ngửi trực tiếp hoá chất; báo ngay khi có sự cố; thu dọn và rửa tay sau khi làm.',
    'Biển báo cấm: tròn, nền trắng, viền đỏ. Biển cảnh báo: tam giác, nền vàng, viền đen. Biển bắt buộc: tròn, nền xanh dương. Biển chỉ dẫn: vuông hoặc chữ nhật, nền xanh lá.',
  ],
};
