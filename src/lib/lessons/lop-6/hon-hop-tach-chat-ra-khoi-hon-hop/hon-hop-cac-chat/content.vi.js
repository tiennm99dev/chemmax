/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chất tinh khiết được tạo ra từ một chất, hỗn hợp gồm hai hay nhiều chất trộn lẫn; hỗn hợp đồng nhất và không đồng nhất; dung dịch, huyền phù, nhũ tương; chất tan, chất không tan và các yếu tố ảnh hưởng tới lượng chất rắn hoà tan trong nước.',
  intro:
    'Nước biển có vị mặn, nước cam pha thêm nước thì nhạt màu và nhạt vị, hộp sữa ghi "Lắc đều trước khi sử dụng". Vì sao lại như vậy? Hầu hết các vật thể quanh em không được tạo ra từ một chất duy nhất mà là hỗn hợp của nhiều chất. Trong bài này, em phân biệt chất tinh khiết với hỗn hợp, hỗn hợp đồng nhất với hỗn hợp không đồng nhất, và nhận biết dung dịch, huyền phù, nhũ tương.',
  objectives: [
    'Nêu được khái niệm chất tinh khiết, hỗn hợp; phân biệt được hỗn hợp đồng nhất và hỗn hợp không đồng nhất.',
    'Nêu được khái niệm dung dịch, dung môi, chất tan; phân biệt được dung dịch với huyền phù, nhũ tương.',
    'Quan sát được một số hiện tượng trong thực tiễn để phân biệt chất tan và chất không tan trong nước.',
    'Nêu được các yếu tố ảnh hưởng đến lượng chất rắn hoà tan trong nước.',
  ],
  sections: [
    {
      heading: 'Chất tinh khiết và hỗn hợp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất tinh khiết',
          text: 'Chất tinh khiết (chất nguyên chất) được tạo ra từ một chất duy nhất. Ví dụ: nước cất, vàng, bạc, khí oxygen.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hỗn hợp',
          text: 'Hỗn hợp được tạo ra khi hai hay nhiều chất trộn lẫn vào nhau. Mỗi chất trong hỗn hợp được gọi là một chất thành phần. Ví dụ: không khí, nước biển, nước chanh, sữa, gang, thép.',
        },
        {
          type: 'p',
          text: 'Trong hỗn hợp, mỗi chất vẫn giữ nguyên tính chất của nó: nước muối vẫn có vị mặn của muối, nước đường vẫn có vị ngọt của đường. Tính chất của hỗn hợp thay đổi theo thành phần: pha thêm nước vào cốc nước cam, màu và vị nước cam nhạt dần.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hỗn hợp đồng nhất và hỗn hợp không đồng nhất',
          text: 'Hỗn hợp đồng nhất có thành phần giống nhau tại mọi vị trí trong toàn bộ hỗn hợp, ta không phân biệt được các chất thành phần (nước muối, nước đường, không khí). Hỗn hợp không đồng nhất có thành phần không giống nhau trong toàn bộ hỗn hợp, ta có thể thấy được các chất thành phần (nước cam có tép, nước lẫn cát, nước phù sa).',
        },
      ],
    },
    {
      heading: 'Dung dịch, huyền phù, nhũ tương',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dung dịch',
          text: 'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan. Dung môi là chất có khả năng hoà tan chất khác (thường là nước); chất tan là chất được hoà tan trong dung môi.',
        },
        {
          type: 'table',
          caption: 'Dung môi và chất tan trong một số dung dịch',
          head: ['Dung dịch', 'Dung môi', 'Chất tan'],
          rows: [
            ['Nước muối', 'Nước', 'Muối ăn'],
            ['Nước đường', 'Nước', 'Đường'],
            ['Giấm ăn', 'Nước', 'Acetic acid'],
            ['Nước giải khát có gas', 'Nước', 'Đường, khí carbon dioxide,...'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Huyền phù',
          text: 'Huyền phù là hỗn hợp gồm các hạt chất rắn không tan, lơ lửng trong chất lỏng. Ví dụ: nước phù sa, nước bột màu, nước bột phấn, nước bột sắn dây.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhũ tương',
          text: 'Nhũ tương là hỗn hợp gồm chất lỏng phân tán dưới dạng các giọt rất nhỏ trong một chất lỏng khác mà không hoà tan vào nhau. Ví dụ: sữa, dầu ăn khuấy mạnh trong nước, sốt mayonnaise.',
        },
        {
          type: 'p',
          text: 'Huyền phù và nhũ tương là hỗn hợp không đồng nhất. Khi để yên, chúng thường bị tách ra: hạt chất rắn lắng xuống, giọt chất lỏng nổi lên hoặc chìm xuống thành lớp. Vì vậy các loại sữa, thuốc dạng huyền phù cần "lắc đều trước khi sử dụng".',
        },
        {
          type: 'table',
          caption: 'Phân biệt dung dịch với huyền phù và nhũ tương',
          head: ['Đặc điểm', 'Dung dịch', 'Huyền phù', 'Nhũ tương'],
          rows: [
            [
              'Chất phân tán',
              'Chất tan (rắn, lỏng, khí)',
              'Hạt chất rắn không tan',
              'Giọt chất lỏng không tan',
            ],
            ['Quan sát', 'Thường trong suốt', 'Đục', 'Đục'],
            ['Để yên', 'Không thay đổi', 'Chất rắn lắng dần', 'Tách thành lớp'],
            ['Loại hỗn hợp', 'Đồng nhất', 'Không đồng nhất', 'Không đồng nhất'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Hoà muối ăn vào nước, nếu muối không tan hết mà lắng xuống đáy thì không tạo thành huyền phù: phần muối dư nằm ở đáy chứ không lơ lửng, phần nước ở trên vẫn là dung dịch muối.',
        },
      ],
    },
    {
      heading: 'Chất tan và chất không tan',
      blocks: [
        {
          type: 'table',
          caption: 'Sự hoà tan của một số chất trong nước',
          head: ['Thể', 'Tan trong nước', 'Không tan trong nước'],
          rows: [
            ['Rắn', 'Muối ăn, đường, phèn chua', 'Cát, đá vôi, bột phấn'],
            ['Lỏng', 'Giấm, cồn (rượu)', 'Dầu ăn, xăng'],
            [
              'Khí',
              'Carbon dioxide (trong nước có gas); oxygen tan ít nhưng đủ cho cá thở',
              'Nitrogen (tan rất ít)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Lượng chất rắn hoà tan trong nước',
          text: 'Mỗi lượng nước chỉ hoà tan được một lượng chất rắn có hạn. Lượng chất rắn hoà tan phụ thuộc vào loại chất và nhiệt độ: với muối ăn, đường, nước càng nóng thì hoà tan được càng nhiều. Khuấy đều, nghiền nhỏ chất rắn giúp chất rắn tan nhanh hơn.',
        },
        {
          type: 'p',
          text: 'Ví dụ: ở $20$ °C, $100$ g nước hoà tan được khoảng $36$ g muối ăn và khoảng $200$ g đường; ở $80$ °C, con số đó là khoảng $38$ g muối ăn và $360$ g đường. Vì vậy, muốn hoà tan được nhiều muối hoặc đường hơn, ta pha vào nước nóng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm trộn chất vào nước',
    instruction:
      'Chọn một chất, nhiệt độ nước và lượng chất rồi bấm "Cho vào cốc". Sau đó bấm "Khuấy mạnh" và "Để yên một lúc", quan sát cốc và đọc nhận xét: em thu được dung dịch, huyền phù hay nhũ tương? Thử cho thật nhiều muối ăn vào nước $20$ °C rồi nước $80$ °C để so sánh lượng muối tan được.',
  },
  examples: [
    {
      problem:
        'Cho các chất: nước cất, không khí, nước biển, vàng, sữa, khí oxygen. Chất nào là chất tinh khiết, chất nào là hỗn hợp?',
      steps: [
        'Chất tinh khiết được tạo ra từ một chất duy nhất: nước cất, vàng, khí oxygen.',
        'Hỗn hợp gồm nhiều chất trộn lẫn: không khí (nitrogen, oxygen,...), nước biển (nước, muối,...), sữa (nước, chất béo, đường,...).',
      ],
      answer: 'Chất tinh khiết: nước cất, vàng, khí oxygen. Hỗn hợp: không khí, nước biển, sữa.',
    },
    {
      problem:
        'Cho lần lượt muối ăn, bột phấn và dầu ăn vào ba cốc nước rồi khuấy mạnh. Mỗi cốc thu được loại hỗn hợp gì?',
      steps: [
        'Muối ăn tan trong nước, tạo hỗn hợp đồng nhất: dung dịch muối ăn.',
        'Bột phấn không tan, các hạt rắn nhỏ lơ lửng làm nước đục: huyền phù.',
        'Dầu ăn không tan, khuấy mạnh thì vỡ thành giọt nhỏ phân tán trong nước: nhũ tương.',
      ],
      answer: 'Cốc 1: dung dịch; cốc 2: huyền phù; cốc 3: nhũ tương.',
    },
    {
      problem:
        'Ở $20$ °C, $100$ g nước hoà tan được tối đa khoảng $36$ g muối ăn. Cho $50$ g muối ăn vào $100$ g nước ở $20$ °C rồi khuấy kĩ. Có bao nhiêu gam muối không tan? Muốn hoà tan hết lượng muối đó em làm thế nào?',
      steps: [
        'Lượng muối tan được nhiều nhất là $36$ g.',
        'Lượng muối không tan: $50 - 36 = 14$ (g), lắng ở đáy cốc.',
        'Muốn muối tan hết, thêm nước vào cốc (lượng nước nhiều hơn hoà tan được nhiều muối hơn); đun nóng cũng giúp muối tan thêm một ít.',
      ],
      answer: 'Còn $14$ g muối không tan; thêm nước (và đun nóng) để hoà tan hết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là chất tinh khiết?',
      options: ['Nước biển', 'Nước cất', 'Nước chanh', 'Không khí'],
      answer: 1,
      hints: ['Chất tinh khiết chỉ gồm một chất duy nhất.'],
      solution:
        'Nước cất chỉ chứa nước nên là chất tinh khiết. Nước biển, nước chanh, không khí đều là hỗn hợp nhiều chất.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hỗn hợp.',
      options: ['Sữa', 'Vàng', 'Thép', 'Khí oxygen', 'Nước giải khát có gas'],
      answers: [0, 2, 4],
      hints: [
        'Vật nào được tạo ra từ hai hay nhiều chất trộn lẫn?',
        'Thép gồm sắt, carbon và một số chất khác.',
      ],
      solution:
        'Sữa, thép, nước giải khát có gas là hỗn hợp. Vàng và khí oxygen là chất tinh khiết.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hỗn hợp đồng nhất.',
      options: ['Nước đường', 'Nước lẫn cát', 'Nước muối', 'Nước phù sa', 'Không khí'],
      answers: [0, 2, 4],
      hints: [
        'Hỗn hợp đồng nhất có thành phần giống nhau ở mọi chỗ, không nhìn thấy các chất thành phần.',
      ],
      solution:
        'Nước đường, nước muối, không khí là hỗn hợp đồng nhất. Nước lẫn cát và nước phù sa thấy rõ hạt chất rắn nên không đồng nhất.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hỗn hợp với tên gọi của nó.',
      left: ['Nước muối', 'Nước phù sa', 'Sữa'],
      right: ['Dung dịch', 'Huyền phù', 'Nhũ tương'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Trong nước phù sa có hạt rắn lơ lửng; trong sữa có giọt chất béo phân tán.'],
      solution:
        'Nước muối là dung dịch (muối tan hết); nước phù sa là huyền phù (hạt đất rắn lơ lửng); sữa là nhũ tương (giọt chất béo lỏng phân tán trong nước).',
    },
    {
      type: 'choice',
      prompt: 'Trong dung dịch giấm ăn, dung môi là',
      options: ['acetic acid', 'nước', 'giấm ăn', 'muối ăn'],
      answer: 1,
      hints: ['Dung môi là chất hoà tan chất khác, có lượng nhiều trong dung dịch.'],
      solution:
        'Giấm ăn là dung dịch acetic acid trong nước: nước là dung môi, acetic acid là chất tan.',
    },
    {
      type: 'text',
      prompt: 'Hỗn hợp gồm các hạt chất rắn không tan lơ lửng trong chất lỏng được gọi là gì?',
      accept: ['huyền phù', 'huyen phu'],
      hints: ['Ví dụ của nó là nước phù sa, nước bột màu.'],
      solution: 'Đó là huyền phù.',
    },
    {
      type: 'choice',
      prompt:
        'Hoà muối ăn vào nước, muối không tan hết mà một phần lắng xuống đáy cốc. Nhận xét nào đúng?',
      options: [
        'Cốc nước tạo thành huyền phù',
        'Cốc nước tạo thành nhũ tương',
        'Phần nước ở trên là dung dịch muối, phần muối dư lắng ở đáy, không tạo thành huyền phù',
        'Muối đã biến thành chất khác',
      ],
      answer: 2,
      hints: ['Trong huyền phù, các hạt chất rắn phải lơ lửng trong chất lỏng.'],
      solution:
        'Muối dư nằm ở đáy chứ không lơ lửng nên không có huyền phù; phần nước ở trên đã hoà tan muối, là dung dịch muối ăn.',
    },
    {
      type: 'number',
      prompt:
        'Ở $80$ °C, $100$ g nước hoà tan được tối đa khoảng $38$ g muối ăn. Cho $50$ g muối ăn vào $100$ g nước ở $80$ °C, khuấy kĩ. Khối lượng muối không tan là bao nhiêu gam?',
      answer: 12,
      unit: 'g',
      hints: ['Lượng muối tan được nhiều nhất là $38$ g.'],
      solution: 'Muối không tan: $50 - 38 = 12$ (g).',
    },
    {
      type: 'choice',
      prompt: 'Để hoà tan được nhiều muối ăn hơn trong cùng một lượng nước, nên',
      options: [
        'pha muối vào nước lạnh',
        'pha muối vào nước nóng',
        'để yên cốc nước',
        'cho thêm dầu ăn',
      ],
      answer: 1,
      hints: ['Lượng chất rắn hoà tan phụ thuộc vào nhiệt độ.'],
      solution: 'Nước càng nóng hoà tan được càng nhiều muối ăn, nên pha muối vào nước nóng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trên vỏ hộp sữa thường ghi "Lắc đều trước khi sử dụng"?',
      options: [
        'Vì sữa là dung dịch, lắc để sữa ngọt hơn',
        'Vì sữa là nhũ tương, để lâu các chất trong sữa bị tách lớp, lắc để chúng phân tán đều trở lại',
        'Vì lắc giúp sữa nóng lên',
        'Vì lắc làm sữa biến thành chất tinh khiết',
      ],
      answer: 1,
      hints: ['Sữa là dung dịch, huyền phù hay nhũ tương? Nhũ tương để yên thì sao?'],
      solution:
        'Sữa là nhũ tương (và có thể có cả chất rắn lơ lửng). Để lâu, các chất thành phần tách ra hoặc lắng xuống; lắc đều để chúng phân tán đều, uống có thành phần như nhau.',
    },
  ],
  takeaways: [
    'Chất tinh khiết được tạo ra từ một chất; hỗn hợp được tạo ra khi trộn lẫn hai hay nhiều chất, mỗi chất vẫn giữ tính chất của nó.',
    'Hỗn hợp đồng nhất có thành phần giống nhau trong toàn bộ hỗn hợp; hỗn hợp không đồng nhất thì không.',
    'Dung dịch là hỗn hợp đồng nhất của dung môi và chất tan.',
    'Huyền phù: hạt chất rắn lơ lửng trong chất lỏng; nhũ tương: giọt chất lỏng phân tán trong chất lỏng khác. Cả hai là hỗn hợp không đồng nhất.',
    'Lượng chất rắn hoà tan trong nước có hạn, phụ thuộc vào loại chất và nhiệt độ; khuấy giúp chất tan nhanh hơn.',
  ],
};
