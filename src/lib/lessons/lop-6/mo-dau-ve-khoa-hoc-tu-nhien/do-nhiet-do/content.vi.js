/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhiệt độ là số đo độ nóng, lạnh của một vật; bài học giới thiệu thang nhiệt độ Celsius và Kelvin, các loại nhiệt kế và cách đo nhiệt độ bằng nhiệt kế cho đúng.',
  intro:
    'Nhúng tay trái vào cốc nước nóng, tay phải vào cốc nước lạnh, rồi cùng nhúng hai tay vào một cốc nước ấm: tay trái thấy mát, tay phải lại thấy ấm. Cùng một cốc nước mà hai tay cảm nhận khác nhau! Cảm giác nóng, lạnh của cơ thể không đáng tin, nên muốn biết chính xác vật nóng hay lạnh đến đâu, ta phải dùng nhiệt kế. Trong bài này, em tìm hiểu các thang nhiệt độ, các loại nhiệt kế và cách đo nhiệt độ.',
  objectives: [
    'Nêu được nhiệt độ là số đo độ nóng, lạnh của vật.',
    'Nêu được các mốc $0$ °C và $100$ °C của thang Celsius; đổi được giữa độ C và kelvin bằng công thức $T = t + 273$.',
    'Kể được một số loại nhiệt kế, nêu được nhiệt kế hoạt động dựa trên sự dãn nở vì nhiệt của chất lỏng và chọn được nhiệt kế phù hợp.',
    'Đo được nhiệt độ cơ thể và nhiệt độ của nước theo đúng các bước.',
  ],
  sections: [
    {
      heading: 'Nhiệt độ và thang nhiệt độ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiệt độ',
          text: 'Nhiệt độ là số đo độ "nóng", "lạnh" của một vật. Vật càng nóng thì nhiệt độ càng cao.',
        },
        {
          type: 'p',
          text: 'Thang nhiệt độ Celsius lấy nhiệt độ của nước đá đang tan là $0$ °C và nhiệt độ của nước đang sôi là $100$ °C; khoảng giữa hai mốc đó chia thành $100$ phần bằng nhau, mỗi phần là $1$ °C. Nhiệt độ thấp hơn $0$ °C được ghi với dấu trừ, ví dụ $-5$ °C.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thang nhiệt độ Kelvin',
          text: 'Trong hệ đơn vị đo lường quốc tế (SI), đơn vị đo nhiệt độ là kelvin, kí hiệu $\\mathrm{K}$. Mỗi độ chia $1$ K bằng $1$ °C và $0$ °C ứng với $273$ K, nên $T\\ (\\mathrm{K}) = t\\ (^\\circ\\mathrm{C}) + 273$.',
        },
        {
          type: 'table',
          caption: 'Một số nhiệt độ trên hai thang',
          head: ['Mốc', 'Thang Celsius', 'Thang Kelvin'],
          rows: [
            ['Nước đá đang tan', '$0$ °C', '$273$ K'],
            ['Nhiệt độ cơ thể người bình thường', '$37$ °C', '$310$ K'],
            ['Nước đang sôi', '$100$ °C', '$373$ K'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Ở một số nước như Mỹ, người ta dùng thang Fahrenheit: nước đá đang tan là $32$ °F, nước đang sôi là $212$ °F.',
        },
        {
          type: 'p',
          text: 'Luyện đổi giữa độ C và kelvin: trả lời đúng ngay lần đầu để ô kĩ năng chuyển màu xanh.',
        },
        { type: 'widget', name: 'drill' },
      ],
    },
    {
      heading: 'Nhiệt kế',
      blocks: [
        {
          type: 'p',
          text: 'Dụng cụ đo nhiệt độ là nhiệt kế. Nhiệt kế thường dùng hoạt động dựa trên sự dãn nở vì nhiệt của chất lỏng (thuỷ ngân, rượu): khi nóng lên, chất lỏng trong ống dâng lên; khi lạnh đi, chất lỏng tụt xuống.',
        },
        {
          type: 'table',
          caption: 'Một số loại nhiệt kế',
          head: ['Nhiệt kế', 'Thang đo thường gặp', 'Dùng để đo'],
          rows: [
            ['Nhiệt kế y tế thuỷ ngân', '$35$ °C đến $42$ °C, ĐCNN $0{,}1$ °C', 'Nhiệt độ cơ thể'],
            ['Nhiệt kế y tế điện tử', 'Hiện số, ĐCNN $0{,}1$ °C', 'Nhiệt độ cơ thể'],
            ['Nhiệt kế rượu', '$-30$ °C đến $50$ °C, ĐCNN $1$ °C', 'Nhiệt độ không khí, nước'],
            [
              'Nhiệt kế thuỷ ngân (phòng thực hành)',
              '$-10$ °C đến $110$ °C, ĐCNN $1$ °C',
              'Nhiệt độ trong thí nghiệm, nước sôi',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chọn nhiệt kế phù hợp',
          text: 'Nhiệt độ cần đo phải nằm trong khoảng từ số nhỏ nhất đến số lớn nhất ghi trên nhiệt kế (GHĐ là số lớn nhất). Đo vật nóng hơn GHĐ có thể làm vỡ nhiệt kế.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Ống nhiệt kế y tế có một chỗ thắt ngay trên bầu: khi lấy ra khỏi nách, thuỷ ngân không tụt xuống, nhờ vậy ta đọc được nhiệt độ. Trước mỗi lần đo phải vẩy cho thuỷ ngân tụt xuống dưới vạch $35$ °C.',
        },
      ],
    },
    {
      heading: 'Cách đo nhiệt độ',
      blocks: [
        { type: 'p', text: 'Các bước đo nhiệt độ bằng nhiệt kế:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ước lượng nhiệt độ của vật để chọn nhiệt kế phù hợp.',
            'Kiểm tra và đưa nhiệt kế về trạng thái sẵn sàng (với nhiệt kế y tế thuỷ ngân: vẩy cho thuỷ ngân tụt xuống dưới vạch $35$ °C), lau sạch bầu nhiệt kế.',
            'Đặt bầu nhiệt kế tiếp xúc với vật cần đo (kẹp vào nách, nhúng vào nước).',
            'Chờ cho mực chất lỏng trong nhiệt kế đứng yên (với nhiệt kế y tế: khoảng $2$ đến $3$ phút).',
            'Mắt nhìn ngang với mực chất lỏng, đọc và ghi kết quả theo vạch chia gần nhất.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không cầm vào bầu nhiệt kế khi đo, vì hơi ấm của tay làm sai kết quả. Nhiệt kế thuỷ ngân bị vỡ rất nguy hiểm: thuỷ ngân độc, phải báo ngay cho thầy cô.',
        },
        {
          type: 'p',
          text: 'Với nhiệt kế y tế điện tử: lau sạch đầu kim loại, bấm nút khởi động, đặt đầu kim loại dưới lưỡi hoặc kẹp vào nách, chờ có tín hiệu "bíp" thì lấy ra đọc số, rồi tắt nhiệt kế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Nhiệt kế ảo',
    instruction:
      'Chọn nhiệt kế và vật cần đo, bấm "Nhúng bầu nhiệt kế vào" và chờ mực chất lỏng đứng yên. Đọc vạch chia gần nhất ở hình phóng to, nhập nhiệt độ theo °C, đổi ra kelvin rồi bấm "Ghi kết quả". So sánh thang °C bên trái với thang K bên phải. Với nhiệt kế y tế, nhớ vẩy nhiệt kế trước khi đo; thử nhúng nó vào nước nóng để thấy vì sao phải xem GHĐ.',
  },
  examples: [
    {
      problem:
        'a) Nhiệt độ cơ thể người bình thường là $37$ °C. Đổi ra kelvin. b) Nhiệt độ $300$ K ứng với bao nhiêu độ C?',
      steps: [
        'a) $T = t + 273 = 37 + 273 = 310$ K.',
        'b) Từ $T = t + 273$ suy ra $t = T - 273 = 300 - 273 = 27$ °C.',
      ],
      answer: 'a) $310$ K; b) $27$ °C.',
    },
    {
      problem:
        'Trên một nhiệt kế y tế, số lớn nhất là $42$ °C; giữa vạch $36$ °C và vạch $37$ °C có $10$ khoảng chia. Tìm GHĐ và ĐCNN. Đo cho một bạn, mực thuỷ ngân dừng ở vạch thứ $5$ sau vạch $38$ °C. Bạn có bị sốt không?',
      steps: [
        'GHĐ là số lớn nhất ghi trên nhiệt kế: $42$ °C.',
        'ĐCNN: $(37 - 36) : 10 = 0{,}1$ °C.',
        'Vạch thứ $5$ sau vạch $38$ °C là $38 + 5 \\cdot 0{,}1 = 38{,}5$ °C.',
        'Nhiệt độ cơ thể bình thường khoảng $37$ °C; $38{,}5$ °C cao hơn hẳn nên bạn đang bị sốt.',
      ],
      answer: 'GHĐ $42$ °C, ĐCNN $0{,}1$ °C; nhiệt độ $38{,}5$ °C, bạn đang bị sốt.',
    },
    {
      problem:
        'Có hai nhiệt kế: nhiệt kế rượu đo từ $-30$ °C đến $50$ °C và nhiệt kế thuỷ ngân đo từ $-10$ °C đến $110$ °C. Nên dùng nhiệt kế nào để đo nhiệt độ nước đang sôi?',
      steps: [
        'Nước đang sôi có nhiệt độ khoảng $100$ °C.',
        'Nhiệt kế rượu chỉ đo được đến $50$ °C, nhỏ hơn $100$ °C: không dùng được.',
        'Nhiệt kế thuỷ ngân đo được đến $110$ °C, lớn hơn $100$ °C: dùng được.',
      ],
      answer: 'Dùng nhiệt kế thuỷ ngân.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhiệt độ là',
      options: [
        'số đo độ nóng, lạnh của một vật',
        'số đo lượng chất của một vật',
        'số đo độ dài của một vật',
        'cảm giác nóng, lạnh của tay',
      ],
      answer: 0,
      hints: ['"Số đo lượng chất" là định nghĩa của khối lượng.'],
      solution: 'Nhiệt độ là số đo độ "nóng", "lạnh" của một vật.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thang nhiệt độ Celsius, nhiệt độ của nước đá đang tan và của nước đang sôi lần lượt là',
      options: [
        '$0$ °C và $100$ °C',
        '$32$ °C và $212$ °C',
        '$273$ °C và $373$ °C',
        '$0$ °C và $37$ °C',
      ],
      answer: 0,
      hints: ['$32$ và $212$ là hai mốc của thang Fahrenheit.'],
      solution: 'Thang Celsius lấy nước đá đang tan là $0$ °C và nước đang sôi là $100$ °C.',
    },
    {
      type: 'number',
      prompt: 'Nhiệt độ trong phòng là $25$ °C. Nhiệt độ đó là bao nhiêu kelvin?',
      answer: 298,
      unit: 'K',
      hints: ['$T\\ (\\mathrm{K}) = t\\ (^\\circ\\mathrm{C}) + 273$.'],
      solution: '$T = 25 + 273 = 298$ K.',
    },
    {
      type: 'number',
      prompt: 'Nhiệt độ $373$ K ứng với bao nhiêu độ C?',
      answer: 100,
      unit: '°C',
      hints: ['$t = T - 273$.'],
      solution: '$t = 373 - 273 = 100$ °C, đó là nhiệt độ của nước đang sôi.',
    },
    {
      type: 'number',
      prompt: 'Một đêm mùa đông ở Sa Pa, nhiệt độ xuống $-2$ °C. Nhiệt độ đó là bao nhiêu kelvin?',
      answer: 271,
      unit: 'K',
      hints: ['Cộng $273$ vào nhiệt độ theo °C, nhớ dấu trừ.'],
      solution: '$T = -2 + 273 = 271$ K.',
    },
    {
      type: 'choice',
      prompt: 'Nhiệt kế thuỷ ngân và nhiệt kế rượu hoạt động dựa trên hiện tượng nào?',
      options: [
        'Sự dãn nở vì nhiệt của chất rắn',
        'Sự dãn nở vì nhiệt của chất lỏng',
        'Sự dãn nở vì nhiệt của chất khí',
        'Sự bay hơi của chất lỏng',
      ],
      answer: 1,
      hints: ['Thuỷ ngân và rượu ở thể nào?'],
      solution:
        'Chất lỏng (thuỷ ngân, rượu) nở ra khi nóng lên và co lại khi lạnh đi, làm mực chất lỏng trong ống dâng lên hoặc tụt xuống.',
    },
    {
      type: 'number',
      prompt:
        'Trên một nhiệt kế, giữa vạch $20$ °C và vạch $30$ °C có $5$ khoảng chia. ĐCNN của nhiệt kế là bao nhiêu độ C?',
      answer: 2,
      tolerance: 0.001,
      unit: '°C',
      hints: ['Lấy hiệu hai số ghi liên tiếp chia cho số khoảng chia giữa chúng.'],
      solution: '$(30 - 20) : 5 = 2$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không được dùng nhiệt kế y tế để đo nhiệt độ của nước đang sôi?',
      options: [
        'Vì nhiệt kế y tế có ĐCNN quá nhỏ',
        'Vì GHĐ của nhiệt kế y tế chỉ là $42$ °C, nhỏ hơn nhiệt độ nước sôi, nhiệt kế có thể vỡ',
        'Vì nhiệt kế y tế chỉ đo được nhiệt độ dưới $0$ °C',
        'Vì nước sôi không có nhiệt độ',
      ],
      answer: 1,
      hints: ['So sánh số lớn nhất ghi trên nhiệt kế y tế với $100$ °C.'],
      solution:
        'Nhiệt kế y tế chỉ đo đến $42$ °C. Nhúng vào nước khoảng $100$ °C, thuỷ ngân dãn nở quá mức có thể làm vỡ nhiệt kế.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước đo nhiệt độ cơ thể bằng nhiệt kế y tế thuỷ ngân theo đúng thứ tự.',
      items: [
        'Kẹp nhiệt kế vào nách, bầu nhiệt kế nằm giữa nách',
        'Vẩy cho thuỷ ngân tụt xuống dưới vạch $35$ °C',
        'Lấy nhiệt kế ra, đọc nhiệt độ',
        'Dùng bông y tế lau sạch thân và bầu nhiệt kế',
        'Chờ khoảng $2$ đến $3$ phút',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Chuẩn bị nhiệt kế (vẩy, lau) trước khi đặt vào nách.', 'Phải chờ rồi mới đọc.'],
      solution: 'Vẩy nhiệt kế; lau sạch; kẹp vào nách; chờ $2$ đến $3$ phút; lấy ra đọc nhiệt độ.',
    },
    {
      type: 'multi',
      prompt: 'Những thao tác nào là đúng khi đo nhiệt độ cơ thể bằng nhiệt kế y tế thuỷ ngân?',
      options: [
        'Vẩy cho thuỷ ngân tụt xuống dưới vạch $35$ °C trước khi đo',
        'Lau sạch bầu nhiệt kế bằng bông y tế',
        'Cầm chặt bầu nhiệt kế trong lòng bàn tay khi đo',
        'Kẹp nhiệt kế vào nách và chờ khoảng $2$ đến $3$ phút',
        'Đọc kết quả ngay khi vừa kẹp nhiệt kế vào nách',
      ],
      answers: [0, 1, 3],
      hints: ['Hơi ấm của tay và việc chưa chờ đủ lâu đều làm sai kết quả.'],
      solution:
        'Đúng: vẩy nhiệt kế, lau sạch, kẹp vào nách và chờ $2$ đến $3$ phút. Sai: cầm vào bầu nhiệt kế (tay làm nóng bầu) và đọc ngay (thuỷ ngân chưa dâng đủ).',
    },
    {
      type: 'choice',
      prompt:
        'Nhúng tay trái vào nước nóng, tay phải vào nước lạnh, sau đó nhúng cả hai tay vào cùng một cốc nước ấm. Điều này cho thấy',
      options: [
        'cốc nước ấm vừa nóng vừa lạnh',
        'cảm giác nóng, lạnh của tay có thể sai, cần dùng nhiệt kế để đo nhiệt độ',
        'tay phải nhạy hơn tay trái',
        'nhiệt độ của nước thay đổi khi nhúng tay vào',
      ],
      answer: 1,
      hints: ['Cùng một cốc nước nhưng hai tay cảm thấy khác nhau.'],
      solution:
        'Tay trái thấy mát, tay phải thấy ấm dù nước như nhau: giác quan không xác định đúng nhiệt độ, nên phải dùng nhiệt kế.',
    },
    {
      type: 'choice',
      prompt: 'Để đo nhiệt độ không khí trong phòng học (khoảng $30$ °C), nên dùng',
      options: [
        'nhiệt kế y tế (từ $35$ °C đến $42$ °C)',
        'nhiệt kế rượu (từ $-30$ °C đến $50$ °C)',
        'cân đồng hồ',
        'đồng hồ bấm giây',
      ],
      answer: 1,
      hints: ['Nhiệt độ cần đo phải nằm trong khoảng đo của nhiệt kế.'],
      solution:
        '$30$ °C nằm trong khoảng từ $-30$ °C đến $50$ °C của nhiệt kế rượu, nhưng thấp hơn vạch $35$ °C đầu tiên của nhiệt kế y tế.',
    },
  ],
  takeaways: [
    'Nhiệt độ là số đo độ nóng, lạnh của một vật; dụng cụ đo nhiệt độ là nhiệt kế.',
    'Thang Celsius: nước đá đang tan $0$ °C, nước đang sôi $100$ °C.',
    'Đơn vị nhiệt độ trong hệ SI là kelvin (K): $T\\ (\\mathrm{K}) = t\\ (^\\circ\\mathrm{C}) + 273$.',
    'Nhiệt kế thường dùng hoạt động dựa trên sự dãn nở vì nhiệt của chất lỏng; chọn nhiệt kế có khoảng đo chứa nhiệt độ cần đo.',
    'Đo: chọn nhiệt kế, vẩy và lau sạch (nhiệt kế y tế), đặt bầu tiếp xúc với vật, chờ mực chất lỏng đứng yên, đọc theo vạch chia gần nhất.',
  ],
};
