/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chất tồn tại ở ba thể chính là rắn, lỏng và khí (hơi); chất có thể chuyển từ thể này sang thể khác qua các quá trình nóng chảy, đông đặc, bay hơi, ngưng tụ và sôi.',
  intro:
    'Viên nước đá để ngoài cốc một lúc thì tan thành nước. Vũng nước trên sân khô dần dưới nắng. Sáng sớm, những giọt sương đọng trên lá cây. Cùng là nước nhưng lúc thì rắn, lúc thì lỏng, lúc lại là hơi không nhìn thấy. Trong bài này, em tìm hiểu các thể của chất, vì sao mỗi thể có tính chất riêng và chất chuyển thể như thế nào.',
  objectives: [
    'Nêu được chất tồn tại ở ba thể chính: rắn, lỏng, khí (hơi).',
    'Trình bày được một số đặc điểm cơ bản về hình dạng, thể tích, khả năng bị nén của ba thể, và giải thích được bằng sự sắp xếp, chuyển động của các hạt.',
    'Nêu được khái niệm về sự nóng chảy, sự đông đặc, sự bay hơi, sự ngưng tụ và sự sôi.',
    'Nêu được nhiệt độ của chất không đổi trong suốt quá trình nóng chảy và quá trình sôi.',
  ],
  sections: [
    {
      heading: 'Các thể của chất',
      blocks: [
        {
          type: 'p',
          text: 'Ở điều kiện thường, mỗi chất tồn tại ở một thể nhất định: sắt, đá, muối ăn ở thể rắn; nước, dầu ăn, xăng ở thể lỏng; khí oxygen, khí carbon dioxide ở thể khí. Thể của chất do cách sắp xếp và chuyển động của các hạt tạo nên chất quyết định.',
        },
        {
          type: 'table',
          caption: 'Đặc điểm của ba thể',
          head: ['Đặc điểm', 'Thể rắn', 'Thể lỏng', 'Thể khí (hơi)'],
          rows: [
            [
              'Các hạt',
              'Liên kết chặt chẽ, xếp khít nhau, chỉ dao động tại chỗ',
              'Liên kết không chặt chẽ, ở gần nhau, trượt lên nhau',
              'Ở rất xa nhau, chuyển động tự do, hỗn loạn',
            ],
            [
              'Hình dạng',
              'Xác định',
              'Không xác định, có hình dạng của phần vật chứa nó',
              'Không xác định, chiếm đầy vật chứa',
            ],
            ['Thể tích', 'Xác định', 'Xác định', 'Không xác định'],
            ['Khả năng bị nén', 'Rất khó bị nén', 'Khó bị nén', 'Dễ bị nén'],
            ['Khả năng chảy', 'Không chảy được', 'Chảy được', 'Lan toả theo mọi hướng'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Bơm xe đạp ép được nhiều không khí vào săm vì chất khí dễ bị nén. Rót nước từ chai sang cốc, hình dạng của nước thay đổi nhưng thể tích nước vẫn như cũ.',
        },
      ],
    },
    {
      heading: 'Sự chuyển thể của chất',
      blocks: [
        {
          type: 'p',
          text: 'Khi được đun nóng hoặc làm lạnh, chất có thể chuyển từ thể này sang thể khác. Có năm quá trình chuyển thể cần nhớ:',
        },
        {
          type: 'table',
          caption: 'Các quá trình chuyển thể',
          head: ['Quá trình', 'Chuyển thể', 'Ví dụ'],
          rows: [
            ['Nóng chảy', 'Rắn → lỏng', 'Nước đá tan thành nước; nến chảy lỏng khi cháy'],
            ['Đông đặc', 'Lỏng → rắn', 'Nước trong ngăn đá tủ lạnh thành đá'],
            ['Bay hơi', 'Lỏng → hơi', 'Quần áo ướt phơi khô; vũng nước khô dần'],
            ['Ngưng tụ', 'Hơi → lỏng', 'Sương đọng trên lá; hơi nước đọng thành giọt ở nắp nồi'],
            [
              'Sôi',
              'Lỏng → hơi (cả trong lòng chất lỏng)',
              'Nước sủi bọt mạnh khi đun đến $100$ °C',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bay hơi và sôi',
          text: 'Sự bay hơi là quá trình chất chuyển từ thể lỏng sang thể hơi, xảy ra trên bề mặt chất lỏng ở bất kì nhiệt độ nào. Sự sôi là sự bay hơi xảy ra cả trong lòng và trên bề mặt chất lỏng; mỗi chất lỏng sôi ở một nhiệt độ xác định gọi là nhiệt độ sôi.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhiệt độ không đổi khi chuyển thể',
          text: 'Mỗi chất nóng chảy ở một nhiệt độ xác định gọi là nhiệt độ nóng chảy. Trong suốt thời gian nóng chảy, nhiệt độ của chất không thay đổi; trong suốt thời gian sôi, nhiệt độ của chất lỏng cũng không thay đổi. Nước đá nóng chảy ở $0$ °C; nước sôi ở $100$ °C (ở áp suất thường).',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ nóng chảy và nhiệt độ sôi của một số chất (ở áp suất thường)',
          head: ['Chất', 'Nhiệt độ nóng chảy', 'Nhiệt độ sôi'],
          rows: [
            ['Nước', '$0$ °C', '$100$ °C'],
            ['Cồn (ethanol)', '$-114$ °C', '$78$ °C'],
            ['Thiếc', '$232$ °C', '$2\\,602$ °C'],
            ['Đồng', '$1\\,085$ °C', '$2\\,562$ °C'],
            ['Oxygen', '$-218$ °C', '$-183$ °C'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Đông đặc là quá trình ngược của nóng chảy, ngưng tụ là quá trình ngược của bay hơi. Một chất đông đặc ở đúng nhiệt độ mà nó nóng chảy: nước đông đặc ở $0$ °C.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng hạt khi đun nóng nước đá',
    instruction:
      'Kéo thanh trượt (hoặc dùng phím mũi tên) để cung cấp thêm nhiệt cho nước đá ở $-30$ °C, hoặc bấm "Đun nóng dần". Quan sát các hạt: thể rắn dao động tại chỗ, thể lỏng trượt lên nhau, thể hơi bay tự do. Để ý chấm đỏ trên đồ thị: ở $0$ °C và $100$ °C, nhiệt độ đứng yên dù vẫn đun. Bấm "Làm lạnh dần" để thấy ngưng tụ và đông đặc. Đồ thị chỉ là sơ đồ, không vẽ theo tỉ lệ.',
  },
  examples: [
    {
      problem:
        'Vì sao có thể nén khí trong một xi lanh kín, nhưng rất khó nén nước hay một khối sắt?',
      steps: [
        'Trong chất khí, các hạt ở rất xa nhau, giữa chúng có nhiều khoảng trống, nên ép được các hạt lại gần nhau: chất khí dễ bị nén.',
        'Trong chất lỏng, các hạt ở gần nhau; trong chất rắn, các hạt xếp khít nhau. Gần như không còn chỗ để ép các hạt lại gần hơn.',
      ],
      answer: 'Vì các hạt khí ở xa nhau còn các hạt lỏng, rắn đã ở sát nhau.',
    },
    {
      problem:
        'Gọi tên quá trình chuyển thể trong mỗi hiện tượng: a) Mở nắp nồi canh, thấy nhiều giọt nước đọng ở mặt trong nắp. b) Đúc tượng đồng: đổ đồng lỏng vào khuôn, để nguội. c) Phơi muối: nước biển trên ruộng muối cạn dần.',
      steps: [
        'a) Hơi nước bốc lên gặp nắp nồi lạnh hơn, chuyển thành nước lỏng: hơi → lỏng, đó là sự ngưng tụ.',
        'b) Đồng lỏng nguội đi thành đồng rắn: lỏng → rắn, đó là sự đông đặc.',
        'c) Nước biển chuyển thành hơi trên bề mặt ở nhiệt độ thường, không sủi bọt: đó là sự bay hơi.',
      ],
      answer: 'a) Ngưng tụ; b) đông đặc; c) bay hơi.',
    },
    {
      problem:
        'Đun nóng một cốc nước đá đập nhỏ ở $-10$ °C và ghi nhiệt độ mỗi phút. Nhiệt độ tăng đến $0$ °C, rồi giữ nguyên ở $0$ °C trong $5$ phút, sau đó lại tăng. Giải thích vì sao trong $5$ phút đó nhiệt độ không đổi.',
      steps: [
        'Khi nhiệt độ đạt $0$ °C, nước đá bắt đầu nóng chảy.',
        'Trong suốt thời gian nóng chảy, nhiệt cung cấp được dùng để chuyển nước đá thành nước, nhiệt độ không thay đổi.',
        'Khi nước đá tan hết, nhiệt độ của nước mới tăng tiếp.',
      ],
      answer: 'Trong $5$ phút đó nước đá đang nóng chảy, nên nhiệt độ giữ nguyên $0$ °C.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất ở thể nào có hình dạng và thể tích xác định?',
      options: ['Thể rắn', 'Thể lỏng', 'Thể khí', 'Cả ba thể'],
      answer: 0,
      hints: ['Rót nước từ chai sang cốc, hình dạng của nước có giữ nguyên không?'],
      solution:
        'Chỉ chất rắn có cả hình dạng và thể tích xác định. Chất lỏng có thể tích xác định nhưng có hình dạng của vật chứa; chất khí không có hình dạng và thể tích xác định.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về các hạt trong chất khí là đúng?',
      options: [
        'Các hạt xếp khít nhau và chỉ dao động tại chỗ',
        'Các hạt ở gần nhau và trượt lên nhau',
        'Các hạt ở rất xa nhau và chuyển động tự do',
        'Các hạt đứng yên',
      ],
      answer: 2,
      hints: ['Vì sao chất khí chiếm đầy bình chứa và dễ bị nén?'],
      solution:
        'Trong chất khí, các hạt ở rất xa nhau, chuyển động tự do, hỗn loạn; vì vậy chất khí chiếm đầy bình chứa và dễ bị nén.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng với quá trình chuyển thể tương ứng.',
      left: [
        'Cục nước đá tan thành nước',
        'Nước trong khay để ở ngăn đá thành đá',
        'Áo ướt phơi ngoài nắng khô dần',
        'Sương đọng trên lá cây vào sáng sớm',
      ],
      right: ['Nóng chảy', 'Đông đặc', 'Bay hơi', 'Ngưng tụ'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Xác định thể ban đầu và thể lúc sau của chất trong mỗi hiện tượng.'],
      solution:
        'Rắn → lỏng: nóng chảy; lỏng → rắn: đông đặc; lỏng → hơi trên bề mặt: bay hơi; hơi → lỏng: ngưng tụ.',
    },
    {
      type: 'choice',
      prompt: 'Sự sôi khác sự bay hơi ở điểm nào?',
      options: [
        'Sự sôi là chuyển từ thể hơi sang thể lỏng',
        'Sự sôi xảy ra cả trong lòng và trên bề mặt chất lỏng, ở một nhiệt độ xác định',
        'Sự sôi xảy ra ở mọi nhiệt độ',
        'Sự sôi chỉ xảy ra trên bề mặt chất lỏng',
      ],
      answer: 1,
      hints: ['Khi nước sôi, bọt hơi xuất hiện ở đâu?'],
      solution:
        'Bay hơi xảy ra trên bề mặt chất lỏng ở bất kì nhiệt độ nào. Sôi là bay hơi cả trong lòng và trên bề mặt chất lỏng, ở nhiệt độ sôi xác định.',
    },
    {
      type: 'number',
      prompt:
        'Đun nước trong ấm ở áp suất thường. Khi nước đang sôi, tiếp tục đun thêm $3$ phút. Nhiệt độ của nước trong $3$ phút đó là bao nhiêu độ C?',
      answer: 100,
      unit: '°C',
      hints: ['Trong suốt thời gian sôi, nhiệt độ của chất lỏng có thay đổi không?'],
      solution:
        'Nước sôi ở $100$ °C và trong suốt thời gian sôi nhiệt độ không đổi, nên nhiệt độ vẫn là $100$ °C.',
    },
    {
      type: 'number',
      prompt: 'Nước đông đặc (thành đá) ở nhiệt độ bao nhiêu độ C?',
      answer: 0,
      unit: '°C',
      hints: ['Nhiệt độ đông đặc bằng nhiệt độ nóng chảy của cùng một chất.'],
      solution: 'Nước đá nóng chảy ở $0$ °C nên nước cũng đông đặc ở $0$ °C.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hiện tượng có sự ngưng tụ.',
      options: [
        'Hơi thở tạo thành làn "khói" trắng vào ngày lạnh',
        'Giọt nước bám ở mặt ngoài cốc nước đá',
        'Nến chảy lỏng khi đang cháy',
        'Nước trong cốc để lâu bị cạn dần',
        'Mây tạo thành từ hơi nước trên cao',
      ],
      answers: [0, 1, 4],
      hints: ['Ngưng tụ: hơi → lỏng. Tìm nơi hơi nước gặp lạnh.'],
      solution:
        'Hơi nước trong hơi thở, trong không khí quanh cốc lạnh, và trên cao gặp lạnh ngưng tụ thành những giọt nước nhỏ. Nến chảy lỏng là nóng chảy; cốc nước cạn dần là bay hơi.',
    },
    {
      type: 'order',
      prompt:
        'Đun nóng liên tục một cục nước đá ở $-10$ °C. Sắp xếp các giai đoạn theo đúng thứ tự xảy ra.',
      items: [
        'Nước sôi ở $100$ °C',
        'Nước đá nóng lên đến $0$ °C',
        'Nước nóng lên từ $0$ °C đến $100$ °C',
        'Nước đá nóng chảy ở $0$ °C',
      ],
      answer: [1, 3, 2, 0],
      hints: ['Nước đá phải đến nhiệt độ nóng chảy rồi mới tan.'],
      solution:
        'Nước đá nóng lên đến $0$ °C; nóng chảy ở $0$ °C; nước nóng lên đến $100$ °C; nước sôi ở $100$ °C.',
    },
    {
      type: 'choice',
      prompt:
        'Đun một chất lỏng trong suốt. Khi chất lỏng sôi, nhiệt kế nhúng trong nó chỉ $78$ °C và giữ nguyên. Dựa vào bảng nhiệt độ sôi, chất lỏng đó nhiều khả năng là',
      options: ['nước', 'cồn (ethanol)', 'thiếc nóng chảy', 'oxygen lỏng'],
      answer: 1,
      hints: ['Trong khi sôi, nhiệt độ của chất lỏng đúng bằng nhiệt độ sôi của nó.'],
      solution:
        'Nhiệt độ không đổi trong khi sôi và bằng nhiệt độ sôi. Theo bảng, chất sôi ở $78$ °C là cồn (nước sôi ở $100$ °C, oxygen sôi ở $-183$ °C, thiếc sôi ở $2\\,602$ °C).',
    },
    {
      type: 'choice',
      prompt: 'Vì sao bơm được nhiều không khí vào săm xe đạp?',
      options: [
        'Vì chất khí dễ bị nén',
        'Vì chất khí có thể tích xác định',
        'Vì các hạt khí xếp khít nhau',
        'Vì không khí là chất lỏng',
      ],
      answer: 0,
      hints: ['Nhớ lại khả năng bị nén của ba thể.'],
      solution:
        'Các hạt khí ở rất xa nhau nên có thể ép chúng lại gần nhau: chất khí dễ bị nén, vì vậy bơm được nhiều không khí vào săm.',
    },
  ],
  takeaways: [
    'Chất tồn tại ở ba thể chính: rắn, lỏng, khí (hơi).',
    'Thể rắn: hình dạng, thể tích xác định, rất khó nén. Thể lỏng: thể tích xác định, hình dạng theo vật chứa, khó nén. Thể khí: không có hình dạng và thể tích xác định, dễ nén.',
    'Nóng chảy: rắn → lỏng; đông đặc: lỏng → rắn; bay hơi: lỏng → hơi; ngưng tụ: hơi → lỏng.',
    'Bay hơi xảy ra trên bề mặt chất lỏng ở mọi nhiệt độ; sôi xảy ra cả trong lòng chất lỏng, ở nhiệt độ sôi xác định.',
    'Trong suốt quá trình nóng chảy và quá trình sôi, nhiệt độ của chất không đổi (nước: $0$ °C và $100$ °C).',
  ],
};
