/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài học nêu các quy định an toàn trong phòng thực hành, các nguồn gây mất an toàn (điện, hoá chất, dụng cụ dễ vỡ, sắc nhọn) và cách nhận biết bốn loại kí hiệu cảnh báo: cấm, khu vực nguy hiểm, nguy hiểm do hoá chất và chỉ dẫn thực hiện.',
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
              'Kí hiệu cảnh báo cấm',
              'Hình tròn, viền đỏ, nền trắng (thường có gạch chéo đỏ)',
              'Cấm lửa; cấm ăn uống; không dùng làm nước uống',
            ],
            [
              'Kí hiệu cảnh báo khu vực nguy hiểm',
              'Hình tam giác đều, viền đen hoặc viền đỏ, nền vàng',
              'Khu vực có điện cao thế; khu vực dễ cháy',
            ],
            [
              'Kí hiệu cảnh báo nguy hiểm do hoá chất gây ra',
              'Hình vuông, viền đen, nền đỏ cam',
              'Hoá chất độc; hoá chất ăn mòn; hoá chất dễ cháy',
            ],
            [
              'Biển chỉ dẫn thực hiện',
              'Hình chữ nhật, nền xanh hoặc nền đỏ',
              'Lối thoát hiểm; nơi đặt hộp sơ cứu; nơi đặt bình chữa cháy',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Cùng một hình vẽ (ví dụ ngọn lửa) có thể nằm trên nhiều loại kí hiệu: trong hình tròn viền đỏ là cấm lửa, trong tam giác nền vàng là khu vực dễ cháy, trong hình vuông nền đỏ cam là hoá chất dễ cháy. Vì vậy phải nhìn cả hình dạng, màu sắc lẫn hình vẽ. Luôn đọc nhãn và kí hiệu trên lọ trước khi dùng hoá chất.',
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
        'Hình tam giác đều, viền đen, nền vàng là đặc điểm của kí hiệu cảnh báo khu vực nguy hiểm.',
        'Hình tia sét tượng trưng cho điện.',
      ],
      answer:
        'Đó là kí hiệu cảnh báo khu vực nguy hiểm: khu vực có điện cao thế, không được lại gần, chạm vào.',
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
      prompt: 'Kí hiệu hình tròn, viền đỏ, nền trắng, có gạch chéo đỏ là',
      options: [
        'kí hiệu cảnh báo khu vực nguy hiểm',
        'kí hiệu cảnh báo cấm',
        'kí hiệu cảnh báo nguy hiểm do hoá chất gây ra',
        'biển chỉ dẫn thực hiện',
      ],
      answer: 1,
      hints: ['Viền đỏ và gạch chéo cho biết việc gì đó không được phép.'],
      solution:
        'Hình tròn, viền đỏ, nền trắng là kí hiệu cảnh báo cấm (ví dụ: cấm lửa, cấm ăn uống).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại kí hiệu với hình dạng, màu sắc của nó.',
      left: [
        'Cảnh báo cấm',
        'Cảnh báo khu vực nguy hiểm',
        'Cảnh báo nguy hiểm do hoá chất gây ra',
        'Chỉ dẫn thực hiện',
      ],
      right: [
        'Hình tam giác đều, viền đen hoặc viền đỏ, nền vàng',
        'Hình chữ nhật, nền xanh hoặc nền đỏ',
        'Hình tròn, viền đỏ, nền trắng',
        'Hình vuông, viền đen, nền đỏ cam',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: [
        'Hình tròn viền đỏ: cấm; tam giác nền vàng: khu vực nguy hiểm.',
        'Hình vuông nền đỏ cam: hoá chất; hình chữ nhật: chỉ dẫn.',
      ],
      solution:
        'Cấm: tròn, viền đỏ, nền trắng. Khu vực nguy hiểm: tam giác đều, nền vàng. Nguy hiểm do hoá chất: hình vuông, viền đen, nền đỏ cam. Chỉ dẫn thực hiện: hình chữ nhật, nền xanh hoặc đỏ.',
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
        'Trên một lọ hoá chất có kí hiệu hình vuông, viền đen, nền đỏ cam, vẽ hình đầu lâu và hai xương bắt chéo. Kí hiệu này cho biết gì?',
      options: [
        'Cấm mang lọ ra khỏi phòng',
        'Hoá chất trong lọ là chất độc',
        'Lọ đặt ở lối thoát hiểm',
        'Khu vực có điện cao thế',
      ],
      answer: 1,
      hints: [
        'Hình vuông nền đỏ cam là loại kí hiệu cảnh báo nào?',
        'Hình đầu lâu tượng trưng cho nguy hiểm gì?',
      ],
      solution:
        'Hình vuông, viền đen, nền đỏ cam là kí hiệu cảnh báo nguy hiểm do hoá chất gây ra; hình đầu lâu xương chéo: chất độc. Phải đeo găng tay, không nếm, ngửi và chỉ dùng khi có hướng dẫn của giáo viên.',
    },
    {
      type: 'multi',
      prompt: 'Khi không may bị một ít dung dịch hoá chất bắn vào tay, em cần làm những việc nào?',
      options: [
        'Báo ngay cho giáo viên',
        'Rửa chỗ bị dính hoá chất dưới vòi nước sạch',
        'Lau tay vào áo rồi làm tiếp',
        'Giấu đi vì chưa thấy đau',
        'Tự bôi một hoá chất khác lên để trung hoà',
      ],
      answers: [0, 1],
      hints: [
        'Gặp sự cố thì phải báo ai?',
        'Nước sạch làm loãng và cuốn trôi hoá chất; tự dùng hoá chất khác có thể gây bỏng nặng hơn.',
      ],
      solution:
        'Báo ngay cho giáo viên để được xử lí kịp thời và rửa chỗ bị dính dưới vòi nước sạch. Lau vào áo, giấu đi hay tự bôi hoá chất khác đều có thể làm tổn thương da nặng hơn.',
    },
  ],
  takeaways: [
    'Nguồn gây mất an toàn trong phòng thực hành: điện; hoá chất và chất dễ cháy; dụng cụ dễ vỡ, sắc nhọn, vật nóng.',
    'Chỉ làm thí nghiệm khi có giáo viên hướng dẫn; mặc đồ bảo hộ, buộc gọn tóc; không ăn uống, đùa nghịch; không nếm, ngửi trực tiếp hoá chất; báo ngay khi có sự cố; thu dọn và rửa tay sau khi làm.',
    'Kí hiệu cảnh báo cấm: tròn, viền đỏ, nền trắng. Khu vực nguy hiểm: tam giác đều, nền vàng. Nguy hiểm do hoá chất: hình vuông, viền đen, nền đỏ cam. Chỉ dẫn thực hiện: hình chữ nhật, nền xanh hoặc đỏ.',
  ],
};
