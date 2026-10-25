/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đơn vị đo chiều dài là mét (m); bài học giới thiệu các loại thước, giới hạn đo (GHĐ), độ chia nhỏ nhất (ĐCNN) và năm bước đo chiều dài: chọn thước, đặt thước, đặt mắt, đọc và ghi kết quả.',
  intro:
    'Hai bạn cùng đo chiều dài chiếc bàn học bằng gang tay: một bạn được 8 gang, bạn kia được 9 gang. Ai đúng? Gang tay mỗi người một khác, nên để mọi người hiểu nhau, cần một đơn vị đo chung và những dụng cụ đo chính xác. Trong bài này, em tìm hiểu đơn vị đo chiều dài, cách chọn thước phù hợp với vật cần đo và cách đặt thước, đặt mắt, đọc kết quả để có số đo đúng.',
  objectives: [
    'Nêu được đơn vị đo chiều dài trong hệ đơn vị đo lường chính thức ở nước ta là mét, đổi được giữa các đơn vị km, m, dm, cm, mm.',
    'Xác định được giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) của một thước.',
    'Chọn được thước phù hợp với chiều dài cần đo.',
    'Thực hiện đúng các bước đo chiều dài: đặt thước, đặt mắt, đọc và ghi kết quả theo ĐCNN.',
  ],
  sections: [
    {
      heading: 'Đơn vị đo chiều dài',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đơn vị đo chiều dài',
          text: 'Đơn vị đo chiều dài trong hệ đơn vị đo lường chính thức ở nước ta là mét, kí hiệu là $\\mathrm{m}$.',
        },
        {
          type: 'p',
          text: 'Ngoài mét, người ta còn dùng các đơn vị lớn hơn hoặc nhỏ hơn mét:',
        },
        {
          type: 'tex',
          tex: '1\\ \\mathrm{km} = 1000\\ \\mathrm{m}; \\qquad 1\\ \\mathrm{m} = 10\\ \\mathrm{dm} = 100\\ \\mathrm{cm} = 1000\\ \\mathrm{mm}',
        },
        {
          type: 'table',
          caption: 'Các đơn vị đo chiều dài thường dùng',
          head: ['Đơn vị', 'Kí hiệu', 'Đổi ra mét'],
          rows: [
            ['kilômét', '$\\mathrm{km}$', '$1\\ \\mathrm{km} = 1000\\ \\mathrm{m}$'],
            ['mét', '$\\mathrm{m}$', '$1\\ \\mathrm{m}$'],
            ['đềximét', '$\\mathrm{dm}$', '$1\\ \\mathrm{dm} = 0{,}1\\ \\mathrm{m}$'],
            ['xentimét', '$\\mathrm{cm}$', '$1\\ \\mathrm{cm} = 0{,}01\\ \\mathrm{m}$'],
            ['milimét', '$\\mathrm{mm}$', '$1\\ \\mathrm{mm} = 0{,}001\\ \\mathrm{m}$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Một số nước còn dùng đơn vị inch (in): $1\\ \\mathrm{in} = 2{,}54\\ \\mathrm{cm}$. Kích thước màn hình ti vi, điện thoại thường ghi theo inch, là chiều dài đường chéo của màn hình.',
        },
      ],
    },
    {
      heading: 'Thước đo: giới hạn đo và độ chia nhỏ nhất',
      blocks: [
        {
          type: 'p',
          text: 'Để đo chiều dài, người ta dùng thước: thước kẻ, thước thẳng, thước dây, thước cuộn, thước kẹp... Mỗi thước có hai đặc điểm quan trọng mà em cần xem trước khi đo.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'GHĐ và ĐCNN',
          text: 'Giới hạn đo (GHĐ) của thước là chiều dài lớn nhất ghi trên thước. Độ chia nhỏ nhất (ĐCNN) của thước là chiều dài giữa hai vạch chia liên tiếp trên thước.',
        },
        {
          type: 'p',
          text: 'Cách tìm ĐCNN: lấy hiệu hai số ghi liên tiếp trên thước chia cho số khoảng chia giữa chúng. Ví dụ, giữa vạch $0$ và vạch $1$ cm có $10$ khoảng chia thì ĐCNN là $1 : 10 = 0{,}1$ cm, tức $1$ mm.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chọn thước phù hợp',
          text: 'Ước lượng chiều dài cần đo, rồi chọn thước có GHĐ lớn hơn chiều dài đó (để chỉ phải đo một lần) và có ĐCNN thích hợp (ĐCNN càng nhỏ, kết quả đo càng chính xác).',
        },
        {
          type: 'table',
          head: ['Vật cần đo', 'Thước nên chọn'],
          rows: [
            ['Chiều dài bút chì, cục tẩy', 'Thước kẻ: GHĐ $20$ cm, ĐCNN $1$ mm'],
            ['Chiều dài quyển sách, chiều rộng bàn', 'Thước thẳng: GHĐ $50$ cm, ĐCNN $0{,}5$ cm'],
            ['Chiều dài mặt bàn, vòng eo, chiều cao người', 'Thước dây: GHĐ $150$ cm, ĐCNN $1$ cm'],
            ['Chiều dài lớp học, sân trường', 'Thước cuộn: GHĐ vài mét đến vài chục mét'],
          ],
        },
      ],
    },
    {
      heading: 'Cách đo chiều dài',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Ước lượng chiều dài cần đo để chọn thước đo thích hợp.',
            'Đặt thước đo dọc theo chiều dài vật cần đo, vạch số $0$ ngang bằng với một đầu của vật.',
            'Mắt nhìn theo hướng vuông góc với cạnh thước ở đầu kia của vật.',
            'Đọc giá trị chiều dài của vật theo giá trị của vạch chia gần nhất với đầu kia của vật.',
            'Ghi kết quả mỗi lần đo theo ĐCNN của thước.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Đặt mắt nhìn chếch sang trái hoặc sang phải sẽ đọc sai số đo. Đặt vạch số $0$ lệch khỏi đầu vật thì số đọc được không còn là chiều dài của vật.',
        },
        {
          type: 'p',
          text: 'Kết quả ghi theo ĐCNN: với thước có ĐCNN $1$ mm, ghi $14{,}3$ cm (không ghi $14$ cm hay $14{,}32$ cm); với thước có ĐCNN $0{,}5$ cm, ghi $26{,}5$ cm hay $27{,}0$ cm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đo bằng thước ảo',
    instruction:
      'Chọn vật cần đo và chọn thước có GHĐ, ĐCNN phù hợp. Kéo thước (hoặc chọn thước rồi bấm phím mũi tên) để vạch số $0$ ngang bằng với đầu trái của vật. Chọn "Nhìn vuông góc", đọc số ở hình phóng to đầu kia của vật, nhập kết quả theo ĐCNN và bấm "Ghi kết quả" để kiểm tra từng bước.',
  },
  examples: [
    {
      problem:
        'Một thước có số lớn nhất ghi trên thước là $30$ cm; giữa vạch $2$ cm và vạch $3$ cm có $10$ khoảng chia. Tìm GHĐ và ĐCNN của thước.',
      steps: [
        'GHĐ là chiều dài lớn nhất ghi trên thước: $30$ cm.',
        'ĐCNN: $(3 - 2) : 10 = 0{,}1$ cm $= 1$ mm.',
      ],
      answer: 'GHĐ $30$ cm, ĐCNN $1$ mm.',
    },
    {
      problem:
        'Dùng thước kẻ có ĐCNN $1$ mm đo chiếc bút chì: vạch $0$ ngang bằng với một đầu bút, đầu kia của bút nằm giữa vạch $14{,}3$ cm và vạch $14{,}4$ cm, gần vạch $14{,}3$ cm hơn. Ghi kết quả đo.',
      steps: [
        'Đọc theo vạch chia gần nhất với đầu kia của vật: vạch $14{,}3$ cm.',
        'Ghi kết quả theo ĐCNN $1$ mm $= 0{,}1$ cm, tức có một chữ số sau dấu phẩy khi tính bằng cm.',
      ],
      answer: 'Chiều dài bút chì là $14{,}3$ cm.',
    },
    {
      problem: 'Màn hình ti vi ghi $43$ inch. Đường chéo màn hình dài bao nhiêu xentimét?',
      steps: ['$1$ in $= 2{,}54$ cm.', '$43 \\cdot 2{,}54 = 109{,}22$ cm.'],
      answer: 'Đường chéo màn hình dài khoảng $109{,}22$ cm, tức khoảng $1{,}09$ m.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đơn vị đo chiều dài trong hệ đơn vị đo lường chính thức ở nước ta là',
      options: ['xentimét (cm)', 'mét (m)', 'kilômét (km)', 'inch (in)'],
      answer: 1,
      hints: ['Các đơn vị khác đều được định nghĩa từ đơn vị này.'],
      solution: 'Đơn vị đo chiều dài chính thức là mét, kí hiệu $\\mathrm{m}$.',
    },
    {
      type: 'number',
      prompt: 'Đổi $1{,}25$ m ra xentimét.',
      answer: 125,
      unit: 'cm',
      hints: ['$1\\ \\mathrm{m} = 100\\ \\mathrm{cm}$.'],
      solution: '$1{,}25 \\cdot 100 = 125$ cm.',
    },
    {
      type: 'number',
      prompt: 'Đổi $356$ mm ra mét.',
      answer: 0.356,
      tolerance: 0.0001,
      unit: 'm',
      hints: ['$1\\ \\mathrm{m} = 1000\\ \\mathrm{mm}$, nên chia cho $1000$.'],
      solution: '$356 : 1000 = 0{,}356$ m.',
    },
    {
      type: 'choice',
      prompt: 'Độ chia nhỏ nhất (ĐCNN) của thước là',
      options: [
        'chiều dài lớn nhất ghi trên thước',
        'chiều dài giữa hai vạch chia liên tiếp trên thước',
        'số nhỏ nhất ghi trên thước',
        'chiều dài của cả chiếc thước',
      ],
      answer: 1,
      hints: ['"Chiều dài lớn nhất ghi trên thước" là định nghĩa của GHĐ.'],
      solution:
        'ĐCNN là chiều dài giữa hai vạch chia liên tiếp; GHĐ là chiều dài lớn nhất ghi trên thước.',
    },
    {
      type: 'number',
      prompt:
        'Trên một thước dây, giữa vạch $10$ cm và vạch $20$ cm có $5$ khoảng chia. ĐCNN của thước là bao nhiêu xentimét?',
      answer: 2,
      tolerance: 0.001,
      unit: 'cm',
      hints: ['Lấy hiệu hai số ghi liên tiếp chia cho số khoảng chia giữa chúng.'],
      solution: '$(20 - 10) : 5 = 2$ cm.',
    },
    {
      type: 'choice',
      prompt: 'Để đo chiều dài lớp học (khoảng $8$ m) chỉ trong một lần đo, nên dùng',
      options: [
        'thước kẻ có GHĐ $20$ cm, ĐCNN $1$ mm',
        'thước thẳng có GHĐ $50$ cm, ĐCNN $0{,}5$ cm',
        'thước cuộn có GHĐ $10$ m, ĐCNN $1$ cm',
        'thước dây có GHĐ $1{,}5$ m, ĐCNN $1$ cm',
      ],
      answer: 2,
      hints: ['GHĐ của thước phải lớn hơn chiều dài cần đo.'],
      solution:
        'Chỉ thước cuộn có GHĐ $10$ m lớn hơn $8$ m nên đo được trong một lần. Các thước khác phải đo nhiều lần, dễ sai số.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước đo chiều dài theo đúng thứ tự.',
      items: [
        'Mắt nhìn theo hướng vuông góc với cạnh thước ở đầu kia của vật',
        'Ước lượng chiều dài cần đo để chọn thước thích hợp',
        'Ghi kết quả theo ĐCNN của thước',
        'Đặt thước dọc theo vật, vạch số $0$ ngang bằng với một đầu của vật',
        'Đọc giá trị theo vạch chia gần nhất với đầu kia của vật',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Chọn thước trước, ghi kết quả sau cùng.', 'Phải đặt mắt đúng rồi mới đọc.'],
      solution:
        'Ước lượng và chọn thước; đặt thước, vạch $0$ ngang một đầu vật; đặt mắt vuông góc với cạnh thước; đọc theo vạch gần nhất; ghi kết quả theo ĐCNN.',
    },
    {
      type: 'choice',
      prompt: 'Dùng thước có ĐCNN $0{,}5$ cm đo chiều dài quyển sách. Cách ghi kết quả nào đúng?',
      options: ['$26{,}3$ cm', '$26{,}4$ cm', '$26{,}5$ cm', '$26{,}45$ cm'],
      answer: 2,
      hints: ['Kết quả phải là một bội của ĐCNN $0{,}5$ cm.'],
      solution:
        'Với ĐCNN $0{,}5$ cm, chỉ đọc được các giá trị $\\ldots; 26{,}0; 26{,}5; 27{,}0; \\ldots$ cm. Trong các cách ghi, chỉ $26{,}5$ cm đúng theo ĐCNN.',
    },
    {
      type: 'number',
      prompt:
        'Khi đo, bạn Hà đặt đầu vật ngang với vạch $2$ cm (không phải vạch $0$), đầu kia của vật ở vạch $9{,}5$ cm. Chiều dài của vật là bao nhiêu xentimét?',
      answer: 7.5,
      tolerance: 0.001,
      unit: 'cm',
      hints: ['Chiều dài là khoảng cách giữa hai vạch ngang với hai đầu vật.'],
      solution:
        '$9{,}5 - 2 = 7{,}5$ cm. Tuy vậy, cách đo đúng là đặt vạch số $0$ ngang với một đầu của vật để đọc trực tiếp.',
    },
    {
      type: 'number',
      prompt: 'Điện thoại có màn hình $6{,}5$ inch. Đường chéo màn hình dài bao nhiêu xentimét?',
      answer: 16.51,
      tolerance: 0.01,
      unit: 'cm',
      hints: ['$1$ in $= 2{,}54$ cm.'],
      solution: '$6{,}5 \\cdot 2{,}54 = 16{,}51$ cm.',
    },
  ],
  takeaways: [
    'Đơn vị đo chiều dài chính thức là mét (m); $1$ km $= 1000$ m; $1$ m $= 10$ dm $= 100$ cm $= 1000$ mm.',
    'GHĐ là chiều dài lớn nhất ghi trên thước; ĐCNN là chiều dài giữa hai vạch chia liên tiếp.',
    'Chọn thước có GHĐ lớn hơn chiều dài cần đo và ĐCNN thích hợp.',
    'Đo: đặt thước dọc theo vật, vạch $0$ ngang một đầu vật; mắt nhìn vuông góc với cạnh thước ở đầu kia; đọc theo vạch chia gần nhất; ghi kết quả theo ĐCNN.',
  ],
};
