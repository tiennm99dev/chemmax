/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Lương thực (nguồn tinh bột) và thực phẩm cung cấp cho cơ thể năng lượng và các chất dinh dưỡng: carbohydrate, protein, lipid, vitamin và chất khoáng; cần ăn đủ các nhóm chất, cân đối và bảo quản thực phẩm đúng cách.',
  intro:
    'Bữa cơm của em hôm qua có những món gì? Cơm, rau, cá, trứng, một chút dầu mỡ, quả tráng miệng... Mỗi món mang đến cho cơ thể những chất khác nhau. Nếu chỉ ăn cơm với thịt thì sao? Nếu để thức ăn thừa ngoài bàn qua đêm thì sao? Bài này giúp em biết các nhóm chất dinh dưỡng, vai trò của chúng và cách bảo quản lương thực, thực phẩm.',
  objectives: [
    'Phân biệt được lương thực và thực phẩm.',
    'Nêu được các nhóm chất dinh dưỡng: carbohydrate, protein, lipid, vitamin và chất khoáng; kể tên thực phẩm giàu mỗi nhóm.',
    'Trình bày được vai trò của từng nhóm chất dinh dưỡng và ý nghĩa của chế độ ăn cân đối.',
    'Nêu được một số cách bảo quản lương thực, thực phẩm an toàn.',
  ],
  sections: [
    {
      heading: 'Lương thực, thực phẩm và vai trò của chúng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lương thực và thực phẩm',
          text: 'Lương thực là những thức ăn chứa nhiều tinh bột, là nguồn chính cung cấp năng lượng, ví dụ: lúa gạo, ngô, khoai, sắn, lúa mì. Thực phẩm là những thức ăn cung cấp các chất dinh dưỡng khác cho cơ thể, ví dụ: thịt, cá, trứng, sữa, rau, củ, quả.',
        },
        {
          type: 'p',
          text: 'Thức ăn được cơ thể biến đổi thành năng lượng và các chất dinh dưỡng cần thiết, giúp cơ thể duy trì sự sống, lớn lên và hoạt động. Lương thực, thực phẩm dễ bị hỏng, nhất là khi trời nóng ẩm; thức ăn hỏng có thể sinh ra chất độc hại cho sức khoẻ (cơm để lâu bị ôi thiu, lạc bị mốc).',
        },
      ],
    },
    {
      heading: 'Các nhóm chất dinh dưỡng',
      blocks: [
        {
          type: 'table',
          caption: 'Các nhóm chất dinh dưỡng chính',
          head: ['Nhóm chất', 'Vai trò', 'Có nhiều trong'],
          rows: [
            [
              'Carbohydrate (chất bột đường): tinh bột, đường, chất xơ',
              'Nguồn cung cấp năng lượng chủ yếu cho cơ thể',
              'Gạo, ngô, khoai, sắn, bánh mì; đường có trong mía, thốt nốt, củ cải đường, quả ngọt',
            ],
            [
              'Protein (chất đạm)',
              'Xây dựng, duy trì và phát triển cơ thể; tham gia vào hầu hết các hoạt động sống',
              'Thịt, cá, trứng, sữa, các loại đậu, đỗ',
            ],
            [
              'Lipid (chất béo)',
              'Dự trữ năng lượng, giữ ấm cơ thể, hoà tan một số vitamin (A, D, E, K)',
              'Mỡ, bơ, dầu thực vật, lòng đỏ trứng, lạc, vừng',
            ],
            [
              'Vitamin và chất khoáng',
              'Cần một lượng nhỏ nhưng rất quan trọng: giúp cơ thể phát triển bình thường, tăng sức đề kháng',
              'Rau xanh, củ, quả tươi, hải sản, sữa',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Khi tiêu hoá, tinh bột bị biến đổi thành đường; đường được cơ thể sử dụng, biến đổi thành carbon dioxide và nước, đồng thời giải phóng năng lượng cho cơ thể hoạt động.',
        },
        {
          type: 'p',
          text: 'Chất khoáng gồm calcium, phosphorus, iodine, zinc,... Thiếu calcium xương dễ giòn, xốp; thiếu iodine gây bệnh bướu cổ. Cơ thể hầu như không tự tạo được vitamin nên phải lấy từ thức ăn; vitamin A, D, E, K tan trong chất béo, vitamin B, C tan trong nước. Thiếu vitamin A gây khô mắt, giảm thị lực; thiếu vitamin C dễ chảy máu chân răng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ăn uống cân đối',
          text: 'Mỗi loại thức ăn cung cấp năng lượng và chất dinh dưỡng khác nhau, nên cần ăn đa dạng, có đủ các nhóm chất với tỉ lệ hợp lí: nhiều rau quả và lương thực, vừa phải chất đạm, ít chất béo, đường và muối. Nhu cầu năng lượng và chất dinh dưỡng của mỗi người khác nhau tuỳ theo tuổi, giới tính, nghề nghiệp.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Ăn quá nhiều mà ít vận động, năng lượng thừa được cơ thể tích luỹ thành mỡ, dẫn đến thừa cân, béo phì. Ăn quá ít hoặc thiếu chất sẽ dẫn đến suy dinh dưỡng, cơ thể chậm lớn, dễ mắc bệnh.',
        },
      ],
    },
    {
      heading: 'Bảo quản lương thực, thực phẩm',
      blocks: [
        {
          type: 'p',
          text: 'Nấm mốc, vi khuẩn trong không khí phát triển trên thức ăn, nhất là ở nơi nóng ẩm, làm thức ăn bị phân huỷ, ôi thiu, mốc. Bảo quản thực phẩm là làm chậm hoặc ngăn sự phát triển của chúng.',
        },
        {
          type: 'table',
          caption: 'Một số cách bảo quản thực phẩm',
          head: ['Cách bảo quản', 'Ví dụ', 'Vì sao giữ được lâu'],
          rows: [
            [
              'Làm lạnh, đông lạnh',
              'Thịt, cá, rau trong tủ lạnh',
              'Nhiệt độ thấp làm chậm sự phát triển của vi khuẩn',
            ],
            [
              'Phơi, sấy khô',
              'Cá khô, mực khô, nấm khô, thóc',
              'Thiếu nước, vi khuẩn và nấm mốc khó phát triển',
            ],
            [
              'Ướp muối, ngâm đường, ngâm giấm',
              'Dưa muối, cà muối, mứt, quả ngâm',
              'Muối, đường, giấm làm vi khuẩn khó sống',
            ],
            ['Hun khói', 'Thịt hun khói, cá hun khói', 'Làm khô bề mặt và hạn chế vi khuẩn'],
            [
              'Hút chân không, đóng hộp',
              'Xúc xích, cá hộp, thịt hộp',
              'Không có không khí, nhiều vi khuẩn không phát triển được',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Lương thực khô (gạo, ngô, khoai, sắn khô): để trong vật đựng kín, nơi khô ráo, thoáng mát, tránh ẩm mốc, mối mọt, chuột bọ.',
            'Lương thực đã nấu chín (cơm, cháo): ăn hết trong ngày; phần còn lại để nguội, đậy kín, cất tủ lạnh và đun lại kĩ trước khi ăn.',
            'Không ăn thức ăn đã có dấu hiệu hỏng: mùi lạ, chua, mốc, nhớt, đổi màu. Chọn thực phẩm tươi, có nguồn gốc rõ ràng, còn hạn sử dụng.',
          ],
        },
        {
          type: 'p',
          text: 'Xếp mỗi việc làm vào ô "Bảo quản đúng cách" hay "Dễ làm thực phẩm hỏng".',
        },
        { type: 'widget', name: 'bao-quan' },
      ],
    },
  ],
  explore: {
    title: 'Đĩa ăn cân đối',
    instruction:
      'Chạm vào thực phẩm để đặt từng phần lên đĩa (tối đa $8$ phần), chạm vào một phần trên đĩa để bỏ ra. Mỗi màu là một nhóm chất dinh dưỡng. Bấm "Kiểm tra đĩa ăn" để biết đĩa đã có đủ bốn nhóm chất với tỉ lệ hợp lí chưa: nhiều rau quả và lương thực, vừa phải chất đạm, ít chất béo.',
  },
  examples: [
    {
      problem:
        'Bữa trưa của bạn Nam gồm: cơm, thịt kho, canh rau ngót, chuối tráng miệng. Hãy cho biết mỗi món cung cấp chủ yếu nhóm chất dinh dưỡng nào. Bữa ăn đã đủ các nhóm chất chưa?',
      steps: [
        'Cơm (gạo) giàu tinh bột: cung cấp carbohydrate.',
        'Thịt kho giàu protein, có cả lipid (mỡ).',
        'Canh rau ngót và chuối cung cấp vitamin và chất khoáng (chuối có thêm đường).',
        'Bữa ăn có đủ carbohydrate, protein, lipid, vitamin và chất khoáng.',
      ],
      answer: 'Bữa ăn có đủ bốn nhóm chất dinh dưỡng.',
    },
    {
      problem:
        'Bạn Lan rất thích ăn bánh ngọt, uống nước ngọt, ít vận động và không thích ăn rau. Chế độ ăn này có thể gây ra hậu quả gì? Em khuyên bạn thế nào?',
      steps: [
        'Bánh ngọt, nước ngọt chứa nhiều đường (carbohydrate) và chất béo, cung cấp nhiều năng lượng.',
        'Ít vận động nên năng lượng thừa tích luỹ thành mỡ: dễ thừa cân, béo phì.',
        'Không ăn rau nên thiếu vitamin, chất khoáng và chất xơ: giảm sức đề kháng, dễ táo bón.',
        'Lời khuyên: giảm đồ ngọt, ăn thêm rau xanh, quả tươi, ăn đủ các nhóm chất và tăng vận động.',
      ],
      answer:
        'Dễ thừa cân, béo phì và thiếu vitamin, chất khoáng; cần ăn cân đối, nhiều rau quả, bớt đồ ngọt và vận động nhiều hơn.',
    },
    {
      problem: 'Đề xuất cách bảo quản gạo và cơm thừa để không bị hỏng.',
      steps: [
        'Gạo là lương thực khô, dễ bị ẩm mốc, mọt: đựng trong thùng, hộp kín, để nơi khô ráo, thoáng mát.',
        'Cơm thừa dễ bị ôi thiu do vi khuẩn phát triển nhanh ở nhiệt độ phòng: để nguội, đậy kín và cất tủ lạnh.',
        'Trước khi ăn lại, hâm nóng kĩ cơm; không ăn cơm đã có mùi chua, nhớt.',
      ],
      answer: 'Gạo: đựng kín, để nơi khô ráo. Cơm thừa: đậy kín, cất tủ lạnh, hâm kĩ trước khi ăn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các lương thực.',
      options: ['Gạo', 'Thịt bò', 'Ngô', 'Rau muống', 'Khoai lang', 'Sữa'],
      answers: [0, 2, 4],
      hints: ['Lương thực là thức ăn chứa nhiều tinh bột.'],
      solution:
        'Gạo, ngô, khoai lang là lương thực (giàu tinh bột). Thịt bò, rau muống, sữa là thực phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Nhóm chất dinh dưỡng nào là nguồn cung cấp năng lượng chủ yếu cho cơ thể?',
      options: ['Vitamin', 'Chất khoáng', 'Carbohydrate', 'Nước'],
      answer: 2,
      hints: ['Đây là nhóm chất có nhiều trong cơm, bánh mì, khoai.'],
      solution:
        'Carbohydrate (tinh bột, đường) là nguồn cung cấp năng lượng chủ yếu. Vitamin và chất khoáng cần lượng nhỏ, không phải nguồn năng lượng chính.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thực phẩm với nhóm chất dinh dưỡng có nhiều nhất trong nó.',
      left: ['Bánh mì', 'Trứng gà', 'Dầu ăn', 'Quả cam'],
      right: ['Carbohydrate', 'Protein', 'Lipid', 'Vitamin'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Bánh mì làm từ bột mì; dầu ăn gần như chỉ có chất béo; cam nổi tiếng giàu vitamin C.',
      ],
      solution:
        'Bánh mì: carbohydrate; trứng gà: protein; dầu ăn: lipid; quả cam: vitamin (vitamin C).',
    },
    {
      type: 'choice',
      prompt: 'Vai trò chính của protein (chất đạm) đối với cơ thể là gì?',
      options: [
        'Xây dựng, duy trì và phát triển cơ thể',
        'Chỉ để giữ ấm cơ thể',
        'Làm thức ăn có vị ngọt',
        'Không có vai trò gì',
      ],
      answer: 0,
      hints: ['Trẻ em đang lớn cần nhiều nhóm chất này để xây dựng cơ bắp, tế bào.'],
      solution:
        'Protein giúp xây dựng, duy trì và phát triển cơ thể, tham gia vào hầu hết hoạt động sống. Giữ ấm cơ thể là vai trò của lipid.',
    },
    {
      type: 'choice',
      prompt: 'Thiếu chất khoáng nào trong khẩu phần ăn có thể gây bệnh bướu cổ?',
      options: ['Calcium', 'Iodine', 'Sắt (iron)', 'Zinc'],
      answer: 1,
      hints: ['Muối ăn ở nước ta thường được bổ sung chất này.'],
      solution:
        'Thiếu iodine gây bệnh bướu cổ; vì vậy người ta dùng muối iodine. Thiếu calcium làm xương giòn, xốp.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cách bảo quản thực phẩm đúng.',
      options: [
        'Phơi khô cá, mực',
        'Để thịt sống ngoài trời nắng cả ngày',
        'Ướp muối dưa cải',
        'Cất cơm thừa đã đậy kín vào tủ lạnh',
        'Để lạc ở nơi ẩm thấp',
      ],
      answers: [0, 2, 3],
      hints: ['Cách nào làm vi khuẩn, nấm mốc khó phát triển?'],
      solution:
        'Phơi khô, ướp muối, làm lạnh đều làm chậm sự phát triển của vi khuẩn, nấm mốc. Để thịt sống ngoài nắng nóng và để lạc nơi ẩm làm thực phẩm nhanh hỏng.',
    },
    {
      type: 'text',
      prompt:
        'Điền từ: Vitamin A, D, E, K tan trong chất ______, vì vậy món rau (như cà rốt) nên được nấu với một ít dầu ăn.',
      accept: ['béo', 'chất béo', 'lipid'],
      hints: ['Dầu ăn thuộc nhóm chất nào?'],
      solution:
        'Vitamin A, D, E, K tan trong chất béo (lipid), nên nấu với một ít dầu giúp cơ thể hấp thụ chúng tốt hơn.',
    },
    {
      type: 'choice',
      prompt: 'Một người ăn rất nhiều nhưng ít vận động trong thời gian dài sẽ có nguy cơ gì?',
      options: ['Suy dinh dưỡng', 'Thừa cân, béo phì', 'Bướu cổ', 'Khô mắt'],
      answer: 1,
      hints: ['Năng lượng ăn vào nhiều hơn năng lượng sử dụng thì phần thừa đi đâu?'],
      solution:
        'Năng lượng thừa được cơ thể tích luỹ dưới dạng mỡ, gây thừa cân, béo phì. Suy dinh dưỡng là do ăn quá ít hoặc thiếu chất.',
    },
    {
      type: 'choice',
      prompt: 'Bữa ăn nào sau đây cân đối nhất?',
      options: [
        'Cơm, thịt rang, cá rán, trứng rán',
        'Cơm, cá kho, rau luộc, quả chuối',
        'Bánh ngọt và nước ngọt',
        'Rau luộc và quả cam',
      ],
      answer: 1,
      hints: ['Tìm bữa ăn có đủ bốn nhóm chất, nhiều rau quả, ít đồ chiên rán.'],
      solution:
        'Cơm (carbohydrate), cá kho (protein, lipid), rau luộc và chuối (vitamin, chất khoáng): đủ các nhóm chất. Bữa thứ nhất thiếu rau quả và nhiều chất béo; bữa thứ ba nhiều đường, thiếu chất; bữa thứ tư thiếu lương thực và chất đạm.',
    },
  ],
  takeaways: [
    'Lương thực là thức ăn giàu tinh bột (gạo, ngô, khoai, sắn, lúa mì); thực phẩm là thịt, cá, trứng, sữa, rau, củ, quả,...',
    'Carbohydrate cung cấp năng lượng chủ yếu; protein xây dựng và phát triển cơ thể; lipid dự trữ năng lượng, giữ ấm; vitamin và chất khoáng cần ít nhưng rất quan trọng.',
    'Ăn đa dạng, cân đối các nhóm chất; ăn quá nhiều gây béo phì, ăn quá ít gây suy dinh dưỡng.',
    'Bảo quản thực phẩm bằng cách làm lạnh, làm khô, ướp muối hoặc đường, hút chân không, đóng hộp; không ăn thức ăn đã hỏng.',
  ],
};
