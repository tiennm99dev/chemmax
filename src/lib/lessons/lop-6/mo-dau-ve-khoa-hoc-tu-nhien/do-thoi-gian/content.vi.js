/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đơn vị đo thời gian là giây (s); bài học giới thiệu các loại đồng hồ, đồng hồ bấm giây và các bước đo thời gian: ước lượng, chọn đồng hồ, đưa về số 0, đo, đọc và ghi kết quả.',
  intro:
    'Trong cuộc thi chạy $100$ m ở trường, thầy giáo thể dục không xem đồng hồ treo tường mà dùng một chiếc đồng hồ bấm giây. Vì sao vậy? Mỗi loại đồng hồ phù hợp với một việc: đồng hồ treo tường cho biết giờ trong ngày, đồng hồ bấm giây đo những khoảng thời gian ngắn tới phần trăm giây. Trong bài này, em tìm hiểu đơn vị đo thời gian và cách đo thời gian bằng đồng hồ cho đúng.',
  objectives: [
    'Nêu được đơn vị đo thời gian trong hệ đơn vị đo lường chính thức ở nước ta là giây (s); đổi được giữa giây, phút, giờ, ngày.',
    'Kể được một số loại đồng hồ và chọn được đồng hồ phù hợp với khoảng thời gian cần đo.',
    'Đo được thời gian bằng đồng hồ bấm giây theo đúng các bước: Reset, Start, Stop, đọc và ghi kết quả.',
    'Hiểu vì sao nên đo nhiều lần và lấy giá trị trung bình.',
  ],
  sections: [
    {
      heading: 'Đơn vị đo thời gian',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đơn vị đo thời gian',
          text: 'Đơn vị đo thời gian trong hệ đơn vị đo lường chính thức ở nước ta là giây, kí hiệu là $\\mathrm{s}$.',
        },
        {
          type: 'p',
          text: 'Ngoài giây, người ta còn dùng phút ($\\mathrm{min}$), giờ ($\\mathrm{h}$), ngày, tuần, tháng, năm, thế kỉ.',
        },
        {
          type: 'tex',
          tex: '1\\ \\mathrm{min} = 60\\ \\mathrm{s}; \\qquad 1\\ \\mathrm{h} = 60\\ \\mathrm{min} = 3600\\ \\mathrm{s}',
        },
        {
          type: 'table',
          caption: 'Đổi các đơn vị thời gian',
          head: ['Đơn vị', 'Bằng'],
          rows: [
            ['$1$ phút', '$60$ giây'],
            ['$1$ giờ', '$60$ phút $= 3600$ giây'],
            ['$1$ ngày', '$24$ giờ $= 1440$ phút'],
            ['$1$ tuần', '$7$ ngày'],
          ],
        },
        {
          type: 'p',
          text: 'Luyện đổi đơn vị và tính khoảng thời gian: trả lời đúng ngay lần đầu để ô kĩ năng chuyển màu xanh.',
        },
        { type: 'widget', name: 'drill' },
      ],
    },
    {
      heading: 'Dụng cụ đo thời gian',
      blocks: [
        {
          type: 'p',
          text: 'Dụng cụ đo thời gian là đồng hồ. Có nhiều loại đồng hồ: đồng hồ treo tường, đồng hồ để bàn, đồng hồ đeo tay (kim hoặc hiện số), đồng hồ cát, đồng hồ bấm giây (cơ hoặc điện tử) và đồng hồ đo thời gian hiện số dùng cổng quang điện.',
        },
        {
          type: 'table',
          caption: 'Chọn đồng hồ theo việc cần đo',
          head: ['Việc cần đo', 'Đồng hồ nên dùng'],
          rows: [
            ['Giờ đi học, giờ ăn cơm trong ngày', 'Đồng hồ treo tường, đồng hồ đeo tay'],
            ['Thời gian chạy $100$ m, bơi một vòng bể', 'Đồng hồ bấm giây'],
            [
              'Thời gian vật chuyển động trong thí nghiệm, rất ngắn',
              'Đồng hồ hiện số dùng cổng quang điện',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đồng hồ bấm giây điện tử',
          text: 'Đồng hồ bấm giây điện tử thường có ĐCNN $0{,}01$ s và ba nút: Start (bắt đầu đo), Stop (dừng đo) và Reset (đưa số chỉ về $0$).',
        },
      ],
    },
    {
      heading: 'Cách đo thời gian',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Ước lượng khoảng thời gian cần đo để chọn đồng hồ thích hợp.',
            'Hiệu chỉnh đồng hồ về số $0$: với đồng hồ bấm giây, bấm nút Reset.',
            'Bấm Start khi sự việc bắt đầu, bấm Stop khi sự việc kết thúc.',
            'Đọc và ghi kết quả theo ĐCNN của đồng hồ.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không bấm Reset thì đồng hồ đếm tiếp từ số chỉ của lần đo trước, kết quả sẽ bị cộng dồn. Tay người bấm luôn chậm hoặc nhanh một chút so với sự việc, nên mỗi lần đo lệch một ít.',
        },
        {
          type: 'p',
          text: 'Để kết quả tin cậy hơn, đo nhiều lần rồi lấy giá trị trung bình: cộng các kết quả lại rồi chia cho số lần đo.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đồng hồ bấm giây ảo',
    instruction:
      'Bấm "Thả bi" cho viên bi lăn trên máng nghiêng. Bấm Start đúng lúc bi qua vạch A, bấm Stop đúng lúc bi qua vạch B, rồi bấm "Ghi kết quả" để so với số đo của cổng quang điện. Bấm Reset trước mỗi lần đo; thử bỏ qua Reset để thấy kết quả bị cộng dồn. Đo vài lần và xem giá trị trung bình.',
  },
  examples: [
    {
      problem: 'Đổi $1$ giờ $15$ phút ra giây.',
      steps: [
        '$1$ giờ $= 60$ phút, nên $1$ giờ $15$ phút $= 60 + 15 = 75$ phút.',
        '$1$ phút $= 60$ giây, nên $75$ phút $= 75 \\cdot 60 = 4500$ giây.',
      ],
      answer: '$1$ giờ $15$ phút $= 4500$ s.',
    },
    {
      problem:
        'Một chuyến xe buýt khởi hành lúc $13$ giờ $48$ phút và đến bến lúc $15$ giờ $15$ phút cùng ngày. Xe đi hết bao lâu?',
      steps: [
        'Từ $13$ giờ $48$ phút đến $14$ giờ là $12$ phút.',
        'Từ $14$ giờ đến $15$ giờ $15$ phút là $1$ giờ $15$ phút.',
        'Cộng lại: $12$ phút $+ 1$ giờ $15$ phút $= 1$ giờ $27$ phút.',
      ],
      answer: 'Xe đi hết $1$ giờ $27$ phút ($87$ phút).',
    },
    {
      problem:
        'Ba lần đo thời gian viên bi lăn từ vạch A đến vạch B bằng đồng hồ bấm giây được $1{,}12$ s; $1{,}08$ s; $1{,}13$ s. Tính thời gian trung bình.',
      steps: [
        'Cộng ba kết quả: $1{,}12 + 1{,}08 + 1{,}13 = 3{,}33$ s.',
        'Chia cho số lần đo: $3{,}33 : 3 = 1{,}11$ s.',
      ],
      answer: 'Thời gian trung bình là $1{,}11$ s.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đơn vị đo thời gian trong hệ đơn vị đo lường chính thức ở nước ta là',
      options: ['phút (min)', 'giờ (h)', 'giây (s)', 'ngày'],
      answer: 2,
      hints: ['Đây là đơn vị nhỏ nhất trong các đơn vị đã cho.'],
      solution: 'Đơn vị đo thời gian chính thức là giây, kí hiệu $\\mathrm{s}$.',
    },
    {
      type: 'number',
      prompt: 'Đổi $2$ giờ ra giây.',
      answer: 7200,
      unit: 's',
      hints: ['$1$ giờ $= 3600$ giây.'],
      solution: '$2 \\cdot 3600 = 7200$ s.',
    },
    {
      type: 'number',
      prompt: 'Đổi $45$ phút ra giây.',
      answer: 2700,
      unit: 's',
      hints: ['$1$ phút $= 60$ giây.'],
      solution: '$45 \\cdot 60 = 2700$ s.',
    },
    {
      type: 'number',
      prompt: '$1$ ngày $3$ giờ $45$ phút bằng bao nhiêu phút?',
      answer: 1665,
      unit: 'phút',
      hints: ['$1$ ngày $= 24$ giờ $= 1440$ phút.', '$3$ giờ $= 180$ phút.'],
      solution: '$1440 + 3 \\cdot 60 + 45 = 1440 + 180 + 45 = 1665$ phút.',
    },
    {
      type: 'number',
      prompt:
        'Một chuyến tàu rời ga lúc $7$ giờ $40$ phút và đến ga sau lúc $9$ giờ $5$ phút cùng ngày. Tàu đi hết bao nhiêu phút?',
      answer: 85,
      unit: 'phút',
      hints: ['Tính từ $7$ giờ $40$ phút đến $8$ giờ, rồi từ $8$ giờ đến $9$ giờ $5$ phút.'],
      solution: '$20$ phút $+ 60$ phút $+ 5$ phút $= 85$ phút ($1$ giờ $25$ phút).',
    },
    {
      type: 'choice',
      prompt: 'Để đo thời gian một bạn chạy $100$ m, nên dùng',
      options: ['đồng hồ treo tường', 'đồng hồ cát', 'đồng hồ bấm giây', 'lịch treo tường'],
      answer: 2,
      hints: ['Thời gian chạy chỉ khoảng mười mấy giây, cần đọc tới phần trăm giây.'],
      solution:
        'Đồng hồ bấm giây đo được khoảng thời gian ngắn với ĐCNN $0{,}01$ s, phù hợp với thi đấu thể thao.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trước khi đo cần ước lượng khoảng thời gian cần đo?',
      options: [
        'Để chọn đồng hồ đo thích hợp',
        'Để không phải bấm nút Reset',
        'Để đồng hồ chạy nhanh hơn',
        'Để không cần ghi kết quả',
      ],
      answer: 0,
      hints: ['Mỗi đồng hồ phù hợp với một khoảng thời gian khác nhau.'],
      solution:
        'Ước lượng thời gian giúp chọn được đồng hồ có GHĐ và ĐCNN phù hợp với việc cần đo.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước đo thời gian bằng đồng hồ bấm giây theo đúng thứ tự.',
      items: [
        'Bấm Stop khi sự việc kết thúc',
        'Ước lượng thời gian cần đo để chọn đồng hồ',
        'Đọc và ghi kết quả',
        'Bấm Reset để đưa số chỉ về $0$',
        'Bấm Start khi sự việc bắt đầu',
      ],
      answer: [1, 3, 4, 0, 2],
      hints: [
        'Chọn đồng hồ trước, ghi kết quả sau cùng.',
        'Phải đưa số chỉ về $0$ trước khi bấm Start.',
      ],
      solution: 'Ước lượng, chọn đồng hồ; Reset; Start; Stop; đọc và ghi kết quả.',
    },
    {
      type: 'number',
      prompt:
        'Đồng hồ bấm giây đang chỉ $1{,}20$ s từ lần đo trước. Bạn Minh quên bấm Reset, bấm Start rồi Stop để đo một sự việc kéo dài $1{,}15$ s. Đồng hồ chỉ bao nhiêu giây?',
      answer: 2.35,
      tolerance: 0.001,
      unit: 's',
      hints: ['Không bấm Reset thì đồng hồ đếm tiếp từ số đang chỉ.'],
      solution:
        '$1{,}20 + 1{,}15 = 2{,}35$ s. Kết quả bị cộng dồn, nên phải bấm Reset trước mỗi lần đo.',
    },
    {
      type: 'number',
      prompt:
        'Ba lần đo thời gian một quả bóng rơi được $2{,}35$ s; $2{,}41$ s; $2{,}38$ s. Thời gian trung bình là bao nhiêu giây?',
      answer: 2.38,
      tolerance: 0.001,
      unit: 's',
      hints: ['Cộng ba kết quả rồi chia cho $3$.'],
      solution: '$(2{,}35 + 2{,}41 + 2{,}38) : 3 = 7{,}14 : 3 = 2{,}38$ s.',
    },
    {
      type: 'choice',
      prompt:
        'Dùng đồng hồ bấm giây có ĐCNN $0{,}01$ s để đo thời gian chạy. Cách ghi kết quả nào đúng?',
      options: ['$15$ s', '$15{,}3$ s', '$15{,}34$ s', '$15{,}342$ s'],
      answer: 2,
      hints: ['Kết quả ghi theo ĐCNN: có bao nhiêu chữ số sau dấu phẩy?'],
      solution: 'ĐCNN $0{,}01$ s nên kết quả có hai chữ số sau dấu phẩy: $15{,}34$ s.',
    },
    {
      type: 'multi',
      prompt: 'Những dụng cụ nào dùng để đo thời gian?',
      options: [
        'Đồng hồ cát',
        'Đồng hồ bấm giây',
        'Thước cuộn',
        'Cân đồng hồ',
        'Đồng hồ hiện số dùng cổng quang điện',
      ],
      answers: [0, 1, 4],
      hints: ['Cân đồng hồ có mặt số giống đồng hồ nhưng đo một đại lượng khác.'],
      solution:
        'Đồng hồ cát, đồng hồ bấm giây và đồng hồ hiện số dùng cổng quang điện đo thời gian. Thước cuộn đo chiều dài, cân đồng hồ đo khối lượng.',
    },
  ],
  takeaways: [
    'Đơn vị đo thời gian chính thức là giây (s); $1$ phút $= 60$ s; $1$ giờ $= 60$ phút $= 3600$ s.',
    'Dụng cụ đo thời gian là đồng hồ; chọn đồng hồ phù hợp với khoảng thời gian cần đo.',
    'Đo bằng đồng hồ bấm giây: ước lượng, chọn đồng hồ; Reset về $0$; Start khi bắt đầu, Stop khi kết thúc; đọc và ghi kết quả theo ĐCNN.',
    'Đo nhiều lần và lấy giá trị trung bình để giảm sai lệch do phản xạ của tay.',
  ],
};
