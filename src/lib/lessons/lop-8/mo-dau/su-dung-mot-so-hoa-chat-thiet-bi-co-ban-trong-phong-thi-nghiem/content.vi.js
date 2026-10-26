/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài học hướng dẫn đọc nhãn hoá chất và các quy tắc lấy, dùng hoá chất an toàn; giới thiệu công dụng, cách dùng đúng của các dụng cụ thí nghiệm thông dụng (ống nghiệm, ống hút nhỏ giọt, đèn cồn...) và các thiết bị điện trong phòng thí nghiệm: nguồn điện, biến áp nguồn, ampe kế, vôn kế, joulemeter, thiết bị sử dụng điện và thiết bị điện hỗ trợ.',
  intro:
    'Trong môn Khoa học tự nhiên 8, em sẽ thường xuyên làm thí nghiệm: hoà tan, đun nóng hoá chất, lắp mạch điện và đo cường độ dòng điện, hiệu điện thế. Muốn thí nghiệm thành công và an toàn, em cần biết đọc nhãn hoá chất, lấy hoá chất đúng cách, chọn đúng dụng cụ và sử dụng đúng các thiết bị điện. Khi sử dụng các dụng cụ thí nghiệm, thiết bị đo và hoá chất, em cần chú ý những điều gì?',
  objectives: [
    'Khai thác được thông tin trên nhãn hoá chất và nêu được quy tắc sử dụng hoá chất an toàn.',
    'Trình bày được cách lấy hoá chất rắn và hoá chất lỏng.',
    'Nêu được công dụng và cách sử dụng một số dụng cụ thí nghiệm thông dụng: ống nghiệm, ống hút nhỏ giọt, đèn cồn, ống đong, phễu lọc...',
    'Nhận biết được một số thiết bị điện trong phòng thí nghiệm, công dụng và cách sử dụng an toàn của chúng.',
  ],
  sections: [
    {
      heading: 'Hoá chất và quy tắc sử dụng hoá chất an toàn',
      blocks: [
        {
          type: 'p',
          text: 'Các hoá chất trong phòng thí nghiệm đều được đựng trong chai hoặc lọ kín, thường làm bằng thuỷ tinh hoặc nhựa. Trên chai, lọ có dán nhãn ghi tên hoá chất, công thức hoá học, khối lượng hoặc thể tích, độ tinh khiết, nhà sản xuất, các kí hiệu cảnh báo, điều kiện bảo quản... Với dung dịch pha sẵn, nhãn còn ghi nồng độ của chất tan.',
        },
        {
          type: 'table',
          caption: 'Ví dụ thông tin trên hai nhãn hoá chất',
          head: ['Thông tin', 'Nhãn lọ sodium hydroxide', 'Nhãn chai hydrochloric acid'],
          rows: [
            ['Công thức hoá học', '$\\mathrm{NaOH}$', '$\\mathrm{HCl}$'],
            ['Thể', 'Rắn', 'Dung dịch, nồng độ 37%'],
            ['Khối lượng', '500 g', '—'],
            ['Khối lượng mol', '—', '36,46 g/mol'],
            ['Độ tinh khiết', 'AR (tinh khiết phân tích)', '—'],
            ['Kí hiệu cảnh báo', 'Ăn mòn', 'Ăn mòn, gây kích ứng'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy tắc sử dụng hoá chất an toàn',
          text: 'Không sử dụng hoá chất đựng trong đồ chứa không có nhãn hoặc nhãn mờ, mất chữ. Đọc cẩn thận nhãn, tìm hiểu kĩ tính chất và cảnh báo của hoá chất trước khi dùng. Làm thí nghiệm cẩn thận, đúng quy tắc, không dùng tay trực tiếp lấy hoá chất. Khi hoá chất dính vào người, bị đổ hoặc tràn, phải báo ngay cho giáo viên để được hướng dẫn xử lí. Hoá chất dùng xong còn thừa không được đổ trở lại bình chứa mà xử lí theo hướng dẫn của giáo viên.',
        },
        {
          type: 'table',
          caption: 'Cách lấy hoá chất',
          head: ['Hoá chất', 'Dụng cụ', 'Lưu ý'],
          rows: [
            [
              'Rắn, dạng bột hoặc hạt nhỏ',
              'Thìa kim loại hoặc thìa thuỷ tinh để xúc',
              'Không đặt lại thìa đã dùng vào lọ hoá chất',
            ],
            [
              'Rắn, dạng hạt to, dây, thanh',
              'Panh (kẹp) để gắp',
              'Không đặt lại panh đã dùng vào lọ hoá chất',
            ],
            [
              'Lỏng, lượng nhỏ (khoảng 1 mL trở xuống)',
              'Ống hút nhỏ giọt',
              'Không chạm đầu ống hút vào thành ống nghiệm',
            ],
            [
              'Lỏng, lượng lớn',
              'Rót trực tiếp từ chai, lọ; chai miệng nhỏ thì rót qua phễu hoặc dùng cốc, ống đong có mỏ',
              'Hướng nhãn hoá chất lên phía trên để giọt hoá chất không chảy vào làm hỏng nhãn',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi bị hoá chất dính vào da',
          text: 'Báo ngay cho giáo viên và rửa chỗ bị dính dưới vòi nước sạch chảy mạnh nhiều lần. Không tự ý bôi hoá chất khác lên vết bỏng.',
        },
      ],
    },
    {
      heading: 'Một số dụng cụ thí nghiệm và cách sử dụng',
      blocks: [
        {
          type: 'table',
          caption: 'Dụng cụ thí nghiệm thông dụng',
          head: ['Dụng cụ', 'Công dụng'],
          rows: [
            ['Ống nghiệm', 'Đựng lượng nhỏ hoá chất để làm thí nghiệm, có thể đun nóng'],
            ['Giá để ống nghiệm', 'Đặt các ống nghiệm'],
            ['Kẹp ống nghiệm (kẹp gỗ)', 'Kẹp ống nghiệm khi đun nóng'],
            ['Cốc thuỷ tinh', 'Đựng, pha, hoà tan hoá chất'],
            ['Bình nón (bình tam giác)', 'Đựng dung dịch, lắc trộn không bị bắn ra ngoài'],
            ['Ống đong', 'Đong một lượng chất lỏng'],
            ['Phễu lọc', 'Lọc chất rắn không tan; rót chất lỏng vào chai miệng nhỏ'],
            ['Ống hút nhỏ giọt', 'Lấy chất lỏng với lượng nhỏ'],
            ['Đũa thuỷ tinh', 'Khuấy khi hoà tan chất rắn'],
            ['Thìa thuỷ tinh, panh', 'Lấy hoá chất rắn'],
            ['Đèn cồn', 'Đun nóng'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sử dụng ống nghiệm',
          text: 'Khi làm thí nghiệm, giữ ống nghiệm bằng tay không thuận, dùng tay thuận để thêm hoá chất. Khi đun nóng: kẹp ống nghiệm bằng kẹp ở khoảng $\\tfrac{1}{3}$ ống tính từ miệng ống; từ từ đưa đáy ống vào ngọn lửa đèn cồn, miệng ống nghiêng về phía không có người; làm nóng đều ống nghiệm rồi mới đun trực tiếp tại nơi có hoá chất; đáy ống ở vị trí nóng nhất của ngọn lửa (khoảng $\\tfrac{2}{3}$ ngọn lửa tính từ dưới lên) và không chạm vào bấc đèn.',
        },
        {
          type: 'p',
          text: 'Không kẹp ống nghiệm quá cao để còn dễ thao tác, không kẹp quá thấp để ống không bị tuột, rơi. Hơ nóng đều ống nghiệm giúp nhiệt toả đều, tránh làm nứt, vỡ ống khi lửa tụ nhiệt tại một điểm.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sử dụng ống hút nhỏ giọt',
          text: 'Ống hút nhỏ giọt có quả bóp cao su để lấy chất lỏng với lượng nhỏ. Bóp chặt và giữ quả bóp, đưa ống hút vào lọ hoá chất, thả chậm quả bóp để hút chất lỏng lên. Chuyển ống hút đến ống nghiệm, bóp nhẹ quả bóp để nhỏ từng giọt vào ống nghiệm. Không chạm đầu ống hút vào thành ống nghiệm.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Sử dụng đèn cồn',
          text: 'Không châm đèn cồn này từ một đèn cồn khác đang cháy. Tắt đèn bằng cách đậy nắp, tuyệt đối không thổi.',
        },
      ],
    },
    {
      heading: 'Một số thiết bị và cách sử dụng',
      blocks: [
        {
          type: 'p',
          text: 'Thiết bị đo pH: cho điện cực của thiết bị vào dung dịch cần đo, giá trị pH của dung dịch hiện trên màn hình. Huyết áp kế dùng để đo huyết áp; huyết áp kế đồng hồ gồm bao cao su bọc trong băng vải quấn quanh cánh tay, nối với áp kế đồng hồ và quả bóp cao su có van.',
        },
        {
          type: 'table',
          caption: 'Thiết bị điện trong phòng thí nghiệm',
          head: ['Nhóm', 'Thiết bị', 'Công dụng'],
          rows: [
            [
              'Thiết bị cung cấp điện',
              'Pin 1,5 V',
              'Nguồn điện; 2 pin nối tiếp cho bộ nguồn 3 V, 4 pin cho 6 V',
            ],
            [
              'Biến đổi điện áp',
              'Biến áp nguồn',
              'Chuyển điện áp xoay chiều 220 V thành điện áp xoay chiều hoặc một chiều có giá trị nhỏ, an toàn khi làm thí nghiệm',
            ],
            [
              'Thiết bị đo điện',
              'Ampe kế, vôn kế',
              'Ampe kế đo cường độ dòng điện; vôn kế đo hiệu điện thế',
            ],
            [
              'Thiết bị đo điện',
              'Joulemeter',
              'Đo dòng điện, điện áp, công suất và năng lượng điện cung cấp cho mạch điện; hiển thị trên màn hình LED',
            ],
            [
              'Thiết bị sử dụng điện',
              'Biến trở; điôt phát quang (kèm điện trở bảo vệ); bóng đèn kèm đui 3 V',
              'Hoạt động nhờ dòng điện chạy qua',
            ],
            [
              'Thiết bị điện hỗ trợ',
              'Công tắc; cầu chì ống; dây nối',
              'Đóng, ngắt, bảo vệ và nối mạch điện',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Phân biệt ampe kế và vôn kế',
          head: ['Đặc điểm', 'Ampe kế', 'Vôn kế'],
          rows: [
            ['Đo đại lượng', 'Cường độ dòng điện', 'Hiệu điện thế'],
            ['Kí hiệu trên mặt', 'A hoặc mA', 'V hoặc mV'],
            [
              'Cách mắc',
              'Nối tiếp với thiết bị cần đo; chốt (+) về phía cực (+) của nguồn',
              'Song song với thiết bị (hoặc nguồn) cần đo; chốt (+) nối với cực (+)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sử dụng điện an toàn',
          text: 'Với thiết bị đo điện: dùng đúng chức năng, đúng thang đo, mắc vào mạch đúng cách và dùng nguồn điện phù hợp. Với nguồn điện và biến áp nguồn: chọn đúng điện áp, đúng chức năng (xoay chiều hay một chiều) và mắc đúng các chốt cắm. Lắp đặt thiết bị đóng ngắt và thiết bị hỗ trợ đúng cách; tránh xa nơi có điện thế nguy hiểm; không dùng dây nối bị hở.',
        },
        {
          type: 'p',
          text: 'Ở phần "Khám phá", hãy mở từng ngăn trên kệ dụng cụ và kệ thiết bị điện để xem công dụng, thao tác đúng; sau đó làm phần "Thử thách": chọn đúng dụng cụ cho từng nhiệm vụ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Kệ dụng cụ ảo',
    instruction:
      'Chọn "Kệ dụng cụ" hoặc "Kệ thiết bị điện", bấm từng món để xem tên, công dụng, thao tác đúng và lưu ý an toàn. Ở chế độ "Thử thách", đọc nhiệm vụ rồi bấm vào dụng cụ hoặc thiết bị phù hợp; điểm chỉ tính những lần chọn đúng ngay lần đầu.',
  },
  examples: [
    {
      problem:
        'Nhãn một chai hoá chất ghi: "Hydrochloric acid, $\\mathrm{HCl}$, 37%, $M = 36{,}46$ g/mol", kèm kí hiệu cảnh báo ăn mòn. Hãy cho biết các thông tin trên nhãn và điều cần lưu ý khi lấy hoá chất này.',
      steps: [
        'Tên hoá chất: hydrochloric acid; công thức hoá học: $\\mathrm{HCl}$.',
        'Đây là dung dịch có nồng độ chất tan 37%; khối lượng mol của $\\mathrm{HCl}$ là 36,46 g/mol.',
        'Kí hiệu ăn mòn cho biết hoá chất có thể gây bỏng da, mắt: cần đeo kính, găng tay, làm thí nghiệm dưới sự hướng dẫn của giáo viên.',
        'Hoá chất lỏng: lấy lượng nhỏ bằng ống hút nhỏ giọt; khi rót từ chai, hướng nhãn lên phía trên; phần thừa không đổ trở lại chai.',
      ],
      answer:
        'Nhãn cho biết tên, công thức, nồng độ, khối lượng mol và cảnh báo ăn mòn; phải dùng đồ bảo hộ, lấy bằng ống hút nhỏ giọt hoặc rót với nhãn hướng lên trên, không đổ phần thừa trở lại chai.',
    },
    {
      problem:
        'Bạn An cần đun nóng khoảng 2 mL dung dịch trong ống nghiệm bằng đèn cồn. Hãy nêu các bước làm đúng.',
      steps: [
        'Kẹp ống nghiệm bằng kẹp ở khoảng $\\tfrac{1}{3}$ ống tính từ miệng ống.',
        'Châm đèn cồn bằng diêm hoặc bật lửa, không châm từ đèn cồn khác.',
        'Từ từ đưa đáy ống vào ngọn lửa, miệng ống nghiêng về phía không có người; hơ nóng đều ống nghiệm.',
        'Đun tại nơi có hoá chất, ở khoảng $\\tfrac{2}{3}$ ngọn lửa tính từ dưới lên, đáy ống không chạm bấc đèn.',
        'Đun xong, đậy nắp để tắt đèn cồn.',
      ],
      answer:
        'Kẹp ống ở $\\tfrac{1}{3}$ tính từ miệng, hơ đều rồi đun ở vùng nóng nhất của ngọn lửa, miệng ống hướng ra chỗ không có người, tắt đèn bằng nắp.',
    },
    {
      problem:
        'Cần lắp mạch điện để đo cường độ dòng điện chạy qua một bóng đèn 3 V và hiệu điện thế giữa hai đầu bóng đèn, dùng pin 1,5 V làm nguồn. Hãy chọn thiết bị và nêu cách mắc.',
      steps: [
        'Bộ nguồn 3 V: mắc nối tiếp $3 : 1{,}5 = 2$ pin 1,5 V.',
        'Thiết bị sử dụng điện: bóng đèn kèm đui 3 V; thiết bị hỗ trợ: công tắc và dây nối.',
        'Ampe kế mắc nối tiếp với bóng đèn, chốt (+) về phía cực (+) của nguồn.',
        'Vôn kế mắc song song với bóng đèn, chốt (+) nối với đầu bóng đèn ở phía cực (+) của nguồn.',
        'Chọn thang đo phù hợp, đóng công tắc rồi đọc số chỉ.',
      ],
      answer:
        'Dùng 2 pin, bóng đèn 3 V, công tắc, dây nối; ampe kế nối tiếp và vôn kế song song với bóng đèn.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Việc làm nào sau đây không đảm bảo quy tắc an toàn trong phòng thí nghiệm?',
      options: [
        'Không sử dụng hoá chất đựng trong lọ không có nhãn hoặc nhãn mờ',
        'Đọc cẩn thận nhãn hoá chất trước khi sử dụng',
        'Dùng tay lấy một ít hoá chất rắn cho nhanh',
        'Không đặt lại thìa, panh vào lọ đựng hoá chất sau khi đã sử dụng',
      ],
      answer: 2,
      hints: ['Có quy tắc nào nói về việc dùng tay khi lấy hoá chất?'],
      solution:
        'Không được dùng tay trực tiếp lấy hoá chất: hoá chất có thể gây bỏng, ngộ độc và tay làm bẩn hoá chất. Ba việc còn lại đều đúng quy tắc.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thông tin thường có trên nhãn chai, lọ hoá chất.',
      options: [
        'Tên hoá chất',
        'Công thức hoá học',
        'Nồng độ chất tan (với dung dịch pha sẵn)',
        'Kí hiệu cảnh báo',
        'Tên học sinh sử dụng lần trước',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Nhãn cho biết hoá chất là gì, nồng độ bao nhiêu và nguy hiểm ra sao.'],
      solution:
        'Nhãn ghi tên, công thức hoá học, khối lượng hoặc thể tích, độ tinh khiết, nồng độ (với dung dịch), nhà sản xuất, kí hiệu cảnh báo, điều kiện bảo quản. Tên người dùng lần trước không có trên nhãn.',
    },
    {
      type: 'choice',
      prompt: 'Để lấy một lượng nhỏ dung dịch (khoảng 1 mL), thường dùng dụng cụ nào?',
      options: ['Phễu lọc', 'Ống đong có mỏ', 'Ống nghiệm', 'Ống hút nhỏ giọt'],
      answer: 3,
      hints: ['Dụng cụ có quả bóp cao su.'],
      solution:
        'Ống hút nhỏ giọt dùng để lấy chất lỏng với lượng nhỏ và nhỏ từng giọt vào ống nghiệm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi việc cần làm với dụng cụ phù hợp.',
      left: [
        'Kẹp ống nghiệm khi đun nóng',
        'Đặt các ống nghiệm',
        'Khuấy khi hoà tan chất rắn',
        'Đong một lượng chất lỏng',
        'Lấy hoá chất rắn dạng bột',
        'Gắp một đoạn dây đồng',
      ],
      right: [
        'Ống đong',
        'Kẹp ống nghiệm',
        'Panh',
        'Giá để ống nghiệm',
        'Thìa thuỷ tinh',
        'Đũa thuỷ tinh',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 5],
        [3, 0],
        [4, 4],
        [5, 2],
      ],
      hints: [
        'Hoá chất rắn dạng bột thì xúc, dạng dây, thanh thì gắp.',
        'Dụng cụ có vạch chia dùng để đong.',
      ],
      solution:
        'Kẹp ống nghiệm – kẹp khi đun; giá để ống nghiệm – đặt ống nghiệm; đũa thuỷ tinh – khuấy; ống đong – đong chất lỏng; thìa – xúc hoá chất dạng bột; panh – gắp dây đồng.',
    },
    {
      type: 'fraction',
      prompt:
        'Khi đun nóng hoá chất trong ống nghiệm, cần kẹp ống nghiệm ở khoảng bao nhiêu phần chiều dài ống, tính từ miệng ống xuống? Viết dưới dạng phân số.',
      answer: [1, 3],
      hints: ['Vị trí kẹp gần miệng ống hơn đáy ống.', 'Mẫu số là 3.'],
      solution:
        'Kẹp ở khoảng $\\tfrac{1}{3}$ ống nghiệm tính từ miệng ống: không quá cao để dễ thao tác, không quá thấp để ống không bị tuột.',
    },
    {
      type: 'choice',
      prompt: 'Khi đun nóng hoá chất trong ống nghiệm, cách làm nào sau đây là sai?',
      options: [
        'Kẹp ống nghiệm ở khoảng $\\tfrac{1}{3}$ ống tính từ miệng ống',
        'Miệng ống nghiệm nghiêng về phía không có người',
        'Làm nóng đều ống nghiệm rồi mới đun tại nơi có hoá chất',
        'Để đáy ống nghiệm chạm sát vào bấc đèn cồn',
      ],
      answer: 3,
      hints: ['Vùng nóng nhất của ngọn lửa ở khoảng $\\tfrac{2}{3}$ ngọn lửa tính từ dưới lên.'],
      solution:
        'Bấc đèn là vùng lửa ít nóng, và ống chạm bấc dễ nứt vỡ, làm đổ cồn. Phải đun ở khoảng $\\tfrac{2}{3}$ ngọn lửa tính từ dưới lên, đáy ống không chạm bấc.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước lấy dung dịch bằng ống hút nhỏ giọt theo đúng thứ tự.',
      items: [
        'Thả chậm quả bóp để hút chất lỏng lên',
        'Bóp chặt và giữ quả bóp cao su',
        'Bóp nhẹ quả bóp để nhỏ từng giọt vào ống nghiệm',
        'Đưa ống hút vào lọ đựng hoá chất',
        'Chuyển ống hút đến miệng ống nghiệm',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Phải đuổi bớt không khí trong quả bóp trước khi nhúng ống vào lọ.'],
      solution:
        'Bóp chặt và giữ quả bóp → đưa ống hút vào lọ → thả chậm quả bóp để hút chất lỏng → chuyển ống hút đến ống nghiệm → bóp nhẹ để nhỏ từng giọt (đầu ống không chạm thành ống nghiệm).',
    },
    {
      type: 'choice',
      prompt: 'Biến áp nguồn là thiết bị có chức năng',
      options: [
        'đo cường độ dòng điện',
        'đo hiệu điện thế',
        'chuyển đổi điện áp xoay chiều 220 V thành điện áp xoay chiều hoặc một chiều có giá trị nhỏ',
        'đo dòng điện, điện áp, công suất và năng lượng điện cung cấp cho mạch điện',
      ],
      answer: 2,
      hints: ['Điện áp lưới điện 220 V quá nguy hiểm để làm thí nghiệm trực tiếp.'],
      solution:
        'Biến áp nguồn chuyển điện áp xoay chiều 220 V thành điện áp xoay chiều hoặc một chiều có giá trị nhỏ, an toàn khi làm thí nghiệm. Phương án cuối là chức năng của joulemeter.',
    },
    {
      type: 'number',
      prompt: 'Mỗi pin có điện áp 1,5 V. Cần mắc nối tiếp bao nhiêu pin để có bộ nguồn 6 V?',
      answer: 4,
      hints: ['Điện áp bộ nguồn bằng tổng điện áp các pin mắc nối tiếp.'],
      solution: 'Số pin cần dùng: $6 : 1{,}5 = 4$ (pin).',
    },
    {
      type: 'number',
      prompt: 'Mắc nối tiếp 3 pin, mỗi pin 1,5 V. Bộ nguồn có điện áp bao nhiêu vôn?',
      answer: 4.5,
      unit: 'V',
      hints: ['Cộng điện áp của các pin.'],
      solution: 'Điện áp bộ nguồn: $3 \\cdot 1{,}5 = 4{,}5$ V.',
    },
    {
      type: 'match',
      prompt: 'Xếp mỗi thiết bị điện vào đúng nhóm.',
      left: ['Pin 1,5 V', 'Ampe kế', 'Bóng đèn kèm đui 3 V', 'Cầu chì ống'],
      right: [
        'Thiết bị sử dụng điện',
        'Thiết bị điện hỗ trợ',
        'Thiết bị cung cấp điện',
        'Thiết bị đo điện',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: [
        'Thiết bị nào tạo ra dòng điện, thiết bị nào đo, thiết bị nào dùng điện để hoạt động?',
      ],
      solution:
        'Pin: cung cấp điện; ampe kế: đo điện; bóng đèn: sử dụng điện; cầu chì ống: thiết bị điện hỗ trợ (bảo vệ mạch).',
    },
    {
      type: 'choice',
      prompt: 'Để đo hiệu điện thế giữa hai đầu một bóng đèn, cần dùng',
      options: [
        'ampe kế, mắc nối tiếp với bóng đèn',
        'vôn kế, mắc song song với bóng đèn',
        'vôn kế, mắc nối tiếp với bóng đèn',
        'ampe kế, mắc song song với bóng đèn',
      ],
      answer: 1,
      hints: ['Vôn kế đo hiệu điện thế; nó được nối vào hai đầu thiết bị cần đo.'],
      solution:
        'Vôn kế đo hiệu điện thế và được mắc song song với bóng đèn (hai chốt nối vào hai đầu bóng đèn). Ampe kế đo cường độ dòng điện và mắc nối tiếp.',
    },
    {
      type: 'text',
      prompt:
        'Thiết bị dùng để đo dòng điện, điện áp, công suất và năng lượng điện cung cấp cho mạch điện, hiển thị kết quả trên màn hình LED, có tên là gì?',
      accept: ['joulemeter', 'joule meter', 'jun kế', 'joule kế'],
      hints: ['Tên thiết bị gắn với đơn vị của năng lượng.'],
      solution: 'Đó là joulemeter: đo dòng điện, điện áp, công suất và năng lượng điện.',
    },
    {
      type: 'multi',
      prompt:
        'Khi dùng thiết bị đo điện (ampe kế, vôn kế, joulemeter), chọn tất cả những việc nên làm.',
      options: [
        'Dùng đúng chức năng của thiết bị',
        'Chọn thang đo phù hợp với giá trị cần đo',
        'Mắc thiết bị vào mạch đúng cách, đúng cực (+) và (−)',
        'Cắm thẳng thiết bị vào ổ điện 220 V cho số đo lớn, dễ đọc',
        'Dùng dây nối đã bong vỏ cách điện cho dễ cắm',
      ],
      answers: [0, 1, 2],
      hints: ['Ổ điện 220 V và dây hở đều gây nguy hiểm.'],
      solution:
        'Nên dùng đúng chức năng, đúng thang đo, mắc đúng cách và dùng nguồn phù hợp. Cắm thẳng vào 220 V có thể hỏng thiết bị và gây điện giật; dây bong vỏ có thể gây điện giật, chập mạch.',
    },
  ],
  takeaways: [
    'Hoá chất đựng trong chai, lọ kín có nhãn; chỉ dùng hoá chất có nhãn rõ ràng, đọc kĩ nhãn trước khi dùng; không dùng tay lấy hoá chất; không đổ hoá chất thừa trở lại bình chứa.',
    'Hoá chất rắn dạng bột: xúc bằng thìa; dạng hạt to, dây, thanh: gắp bằng panh. Chất lỏng lượng nhỏ: ống hút nhỏ giọt; rót từ lọ thì hướng nhãn lên trên.',
    'Đun ống nghiệm: kẹp ở khoảng $\\tfrac{1}{3}$ ống tính từ miệng, miệng ống hướng ra chỗ không có người, hơ đều rồi đun ở khoảng $\\tfrac{2}{3}$ ngọn lửa tính từ dưới lên; tắt đèn cồn bằng nắp.',
    'Thiết bị điện: nguồn điện (pin 1,5 V), biến áp nguồn (220 V thành điện áp nhỏ), thiết bị đo (ampe kế mắc nối tiếp, vôn kế mắc song song, joulemeter), thiết bị sử dụng điện và thiết bị hỗ trợ (công tắc, cầu chì, dây nối).',
  ],
};
