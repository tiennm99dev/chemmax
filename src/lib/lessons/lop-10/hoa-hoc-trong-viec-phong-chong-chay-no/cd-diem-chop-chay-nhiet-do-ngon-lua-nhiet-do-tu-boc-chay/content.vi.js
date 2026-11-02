/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Điểm chớp cháy và cách phân loại chất lỏng dễ cháy, chất lỏng có thể gây cháy; nhiệt độ ngọn lửa; nhiệt độ tự bốc cháy và ý nghĩa của chúng trong an toàn cháy, nổ.',
  intro:
    'Ở trạm xăng, biển "Cấm lửa" luôn được đặt ở nơi dễ thấy nhất, trong khi một bình dầu ăn để cạnh bếp lại ít khi bốc cháy. Có những vụ nổ xe bồn xảy ra khi thợ đang hàn nắp bồn đã xả hết xăng và không có ngọn lửa nào chạm vào bên trong. Ba đại lượng của bài này sẽ giải thích vì sao.',
  objectives: [
    'Nêu được khái niệm điểm chớp cháy.',
    'Dùng điểm chớp cháy để phân biệt chất lỏng dễ cháy và chất lỏng có thể gây cháy.',
    'Trình bày được khái niệm nhiệt độ ngọn lửa, giải thích vì sao ngọn lửa trong oxygen nóng hơn trong không khí.',
    'Trình bày được khái niệm nhiệt độ tự bốc cháy và phân biệt với điểm chớp cháy.',
  ],
  sections: [
    {
      heading: 'Điểm chớp cháy',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điểm chớp cháy',
          text: 'Điểm chớp cháy là nhiệt độ thấp nhất, ở áp suất khí quyển, mà một hợp chất hữu cơ hoặc vật liệu dễ bay hơi tạo thành lượng hơi đủ để bốc cháy trong không khí khi gặp nguồn lửa.',
        },
        {
          type: 'p',
          text: 'Thứ cháy là hơi trên bề mặt chất lỏng chứ không phải khối chất lỏng. Dưới điểm chớp cháy, hơi quá ít nên dù có nguồn lửa cũng không bén. Không phải chất lỏng nào cũng có điểm chớp cháy: nước hay dung dịch bromine không cháy được.',
        },
        {
          type: 'table',
          head: ['Loại', 'Điểm chớp cháy', 'Ví dụ'],
          rows: [
            [
              'Chất lỏng dễ cháy',
              'Nhỏ hơn $37{,}8\\ ^\\circ\\mathrm{C}$',
              'Octane, ethanol, methanol, acetone, diethyl ether',
            ],
            [
              'Chất lỏng có thể gây cháy',
              'Lớn hơn $37{,}8\\ ^\\circ\\mathrm{C}$',
              'Nitrobenzene, ethylene glycol, acetic acid, stearic acid',
            ],
          ],
          caption: 'Phân loại chất lỏng theo điểm chớp cháy',
        },
        {
          type: 'p',
          text: 'Octane, chất có nhiều trong xăng, có điểm chớp cháy $14\\ ^\\circ\\mathrm{C}$, thấp hơn nhiều so với $37{,}8\\ ^\\circ\\mathrm{C}$ và thường thấp hơn nhiệt độ môi trường. Vì vậy trên bề mặt xăng luôn có đủ hơi để bắt lửa, nên các trạm xăng nghiêm cấm nguồn lửa.',
        },
      ],
    },
    {
      heading: 'Nhiệt độ ngọn lửa',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiệt độ ngọn lửa',
          text: 'Nhiệt độ ngọn lửa là nhiệt độ mà ngọn lửa đạt được khi nhiệt của phản ứng cháy làm nóng các sản phẩm cháy và các khí đi kèm.',
        },
        {
          type: 'p',
          text: 'Phản ứng đốt nhiên liệu toả nhiệt mạnh nên ngọn lửa thường rất nóng. Khi đốt trong oxygen tinh khiết, không phải mất một phần nhiệt để làm nóng các khí không cháy như nitrogen, nên ngọn lửa nóng hơn nhiều so với khi đốt trong không khí. Đó là lí do đèn xì oxygen – acetylene dùng để hàn, cắt được kim loại.',
        },
        { type: 'widget', name: 'ngon-lua' },
      ],
    },
    {
      heading: 'Nhiệt độ tự bốc cháy',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiệt độ tự bốc cháy',
          text: 'Nhiệt độ tự bốc cháy là nhiệt độ thấp nhất mà ở đó một chất tự bốc cháy trong không khí, không cần tiếp xúc với nguồn lửa.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Điểm chớp cháy', 'Nhiệt độ tự bốc cháy'],
          rows: [
            ['Cần nguồn lửa?', 'Có', 'Không'],
            ['Trả lời câu hỏi', 'Đã đủ hơi để bắt lửa chưa?', 'Tự cháy được chưa?'],
            [
              'Với xăng (tham khảo)',
              'Khoảng $-43\\ ^\\circ\\mathrm{C}$',
              'Khoảng $280\\ ^\\circ\\mathrm{C}$',
            ],
            [
              'Với dầu diesel (tham khảo)',
              'Từ $52\\ ^\\circ\\mathrm{C}$',
              'Khoảng $210\\ ^\\circ\\mathrm{C}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hai đại lượng không đi cùng nhau',
          text: 'Dầu diesel khó bắt lửa hơn xăng khi có nguồn lửa (điểm chớp cháy cao hơn), nhưng lại tự bốc cháy ở nhiệt độ thấp hơn. Vì thế động cơ diesel chỉ cần nén không khí thật nóng rồi phun dầu vào, còn động cơ xăng cần bugi đánh lửa.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bồn đã xả hết xăng vẫn có thể nổ',
          text: 'Trong bồn rỗng vẫn còn hơi xăng trộn với không khí. Hàn lên thành bồn làm hỗn hợp nóng đến nhiệt độ tự bốc cháy, nên nó có thể nổ dù ngọn lửa không chạm vào. Trước khi hàn, bồn phải được làm sạch và thông hơi theo đúng quy trình an toàn.',
        },
      ],
    },
    {
      heading: 'Dự án: Sổ tay nguy cơ cháy của chất lỏng',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập một tờ thông tin giúp người thân nhận biết các chất lỏng dễ cháy trong gia đình. Đây là hoạt động tra cứu; không thử đốt bất kì chất lỏng nào.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: nhãn các sản phẩm trong nhà (cồn, xăng, nước rửa móng tay, dầu ăn, sơn), giấy hoặc phần mềm trình bày, phiếu an toàn hoá chất tra trên mạng.',
            'Liệt kê ít nhất $6$ chất lỏng và tra điểm chớp cháy, nhiệt độ tự bốc cháy; ghi rõ nguồn số liệu vì các nguồn có thể khác nhau.',
            'Phân loại từng chất theo mốc $37{,}8\\ ^\\circ\\mathrm{C}$; so sánh với nhiệt độ ngày nóng nhất ở địa phương em.',
            'Đề xuất nơi cất và cách cất cho từng chất (đậy kín, tránh nguồn nhiệt, ngoài tầm tay trẻ em).',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu có nguồn, biểu đồ so sánh, và ba khuyến cáo quan trọng nhất cho gia đình em.',
        },
      ],
    },
  ],
  explore: {
    title: 'So sánh các chất lỏng theo nhiệt độ',
    instruction:
      'Kéo nhiệt độ và bật, tắt nguồn lửa. Ở $30\\ ^\\circ\\mathrm{C}$ những chất nào đã đủ hơi để bắt lửa? Tắt nguồn lửa rồi tăng dần nhiệt độ: chất nào tự bốc cháy trước, xăng hay dầu diesel?',
  },
  examples: [
    {
      problem:
        'Một kho nóng $35\\ ^\\circ\\mathrm{C}$ chứa ethanol (điểm chớp cháy $13\\ ^\\circ\\mathrm{C}$) và acetic acid (điểm chớp cháy $39\\ ^\\circ\\mathrm{C}$). Chất nào đã có đủ hơi để bắt lửa khi gặp tia lửa? Phân loại hai chất.',
      steps: [
        'So nhiệt độ kho với điểm chớp cháy: $35 > 13$ nên ethanol đã đủ hơi; $35 < 39$ nên acetic acid chưa đủ hơi.',
        'So điểm chớp cháy với mốc $37{,}8\\ ^\\circ\\mathrm{C}$: $13 < 37{,}8$ nên ethanol là chất lỏng dễ cháy; $39 > 37{,}8$ nên acetic acid là chất lỏng có thể gây cháy.',
      ],
      answer:
        'Ethanol đã có thể bắt lửa và là chất lỏng dễ cháy; acetic acid chưa bắt lửa và là chất lỏng có thể gây cháy.',
    },
    {
      problem:
        'Vì sao đốt khí trong oxygen tinh khiết cho ngọn lửa nóng hơn đốt trong không khí? Trong không khí ($21\\%$ oxygen, $79\\%$ nitrogen theo thể tích), mỗi mol oxygen đi kèm bao nhiêu mol nitrogen?',
      steps: [
        'Trong cùng điều kiện, tỉ lệ mol bằng tỉ lệ thể tích: $\\dfrac{79}{21} \\approx 3{,}76$ mol nitrogen ứng với $1$ mol oxygen.',
        'Lượng nitrogen này không cháy nhưng vẫn phải nóng lên cùng sản phẩm, lấy đi một phần lớn nhiệt của phản ứng.',
        'Trong oxygen tinh khiết không có khí này nên nhiệt tập trung vào làm nóng sản phẩm cháy.',
      ],
      answer:
        'Mỗi mol oxygen đi kèm khoảng $3{,}76$ mol nitrogen; bỏ chúng đi thì ngọn lửa nóng hơn.',
    },
    {
      problem:
        'Một xe bồn đã xả hết xăng và đóng kín nắp. Thợ hàn lên thành bồn thì bồn phát nổ. Vụ nổ này liên quan đến điểm chớp cháy hay nhiệt độ tự bốc cháy?',
      steps: [
        'Trong bồn vẫn còn hơi xăng trộn với oxygen của không khí.',
        'Nắp đóng nên ngọn lửa hàn không tiếp xúc trực tiếp với hỗn hợp hơi.',
        'Thành bồn nóng lên làm hỗn hợp đạt nhiệt độ tự bốc cháy và tự cháy mà không cần nguồn lửa.',
      ],
      answer: 'Vụ nổ liên quan đến nhiệt độ tự bốc cháy, vì không có nguồn lửa chạm vào hỗn hợp.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Điểm chớp cháy là',
      options: [
        'nhiệt độ thấp nhất mà chất tạo đủ hơi để bốc cháy khi gặp nguồn lửa.',
        'nhiệt độ thấp nhất mà chất tự bốc cháy, không cần nguồn lửa.',
        'nhiệt độ của ngọn lửa khi chất cháy.',
        'nhiệt độ sôi của chất lỏng.',
      ],
      answer: 0,
      hints: ['Đại lượng này vẫn cần một nguồn lửa bên ngoài.'],
      solution:
        'Điểm chớp cháy gắn với lượng hơi đủ để bắt lửa khi có nguồn lửa; nhiệt độ tự bốc cháy mới không cần nguồn lửa.',
    },
    {
      type: 'number',
      prompt:
        'Mốc điểm chớp cháy để phân biệt chất lỏng dễ cháy với chất lỏng có thể gây cháy là bao nhiêu (theo °C)?',
      answer: 37.8,
      tolerance: 0.05,
      hints: ['Mốc này nằm gần thân nhiệt người.'],
      solution: 'Mốc là $37{,}8\\ ^\\circ\\mathrm{C}$.',
    },
    {
      type: 'multi',
      prompt:
        'Dựa vào điểm chớp cháy, những chất nào là chất lỏng dễ cháy: acetone ($-20\\ ^\\circ\\mathrm{C}$), ethanol ($13\\ ^\\circ\\mathrm{C}$), nitrobenzene ($88\\ ^\\circ\\mathrm{C}$), ethylene glycol ($111\\ ^\\circ\\mathrm{C}$), octane ($14\\ ^\\circ\\mathrm{C}$)?',
      options: ['Acetone', 'Ethanol', 'Nitrobenzene', 'Ethylene glycol', 'Octane'],
      answers: [0, 1, 4],
      hints: ['So từng giá trị với mốc $37{,}8\\ ^\\circ\\mathrm{C}$.'],
      solution:
        'Acetone, ethanol và octane có điểm chớp cháy dưới $37{,}8\\ ^\\circ\\mathrm{C}$; nitrobenzene và ethylene glycol có điểm chớp cháy cao hơn.',
    },
    {
      type: 'order',
      prompt: 'Xếp các chất theo điểm chớp cháy tăng dần.',
      items: ['Ethanol', 'Nitrobenzene', 'Acetone', 'Ethylene glycol', 'Acetic acid'],
      answer: [2, 0, 4, 1, 3],
      hints: [
        'Hai chất dễ cháy đứng đầu; hai chất có điểm chớp cháy trên $80\\ ^\\circ\\mathrm{C}$ đứng cuối.',
      ],
      solution:
        'Acetone ($-20$) < ethanol ($13$) < acetic acid ($39$) < nitrobenzene ($88$) < ethylene glycol ($111$), đơn vị $^\\circ\\mathrm{C}$.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao trạm xăng nghiêm cấm nguồn lửa, biết octane có điểm chớp cháy $14\\ ^\\circ\\mathrm{C}$?',
      options: [
        'Ở nhiệt độ môi trường, xăng đã bay hơi đủ để bắt lửa.',
        'Ở nhiệt độ môi trường, xăng tự bốc cháy.',
        'Xăng có nhiệt độ ngọn lửa thấp.',
        'Xăng không bay hơi nên cần nguồn lửa để cháy.',
      ],
      answer: 0,
      hints: ['So $14\\ ^\\circ\\mathrm{C}$ với nhiệt độ ngoài trời ở Việt Nam.'],
      solution:
        'Điểm chớp cháy của octane thấp hơn nhiệt độ môi trường nên hơi xăng luôn đủ để bắt lửa khi có tia lửa; nhiệt độ tự bốc cháy thì cao hơn nhiều, nên xăng không tự cháy.',
    },
    {
      type: 'number',
      prompt:
        'Không khí chứa $21\\%$ oxygen và $79\\%$ nitrogen theo thể tích. Mỗi mol oxygen đi kèm bao nhiêu mol nitrogen? Làm tròn đến hàng phần trăm.',
      answer: 3.76,
      tolerance: 0.02,
      hints: ['Với khí, tỉ lệ thể tích bằng tỉ lệ số mol.'],
      solution: '$\\dfrac{79}{21} \\approx 3{,}76$.',
    },
    {
      type: 'number',
      prompt:
        'Theo tính toán, ngọn lửa propane đạt khoảng $1\\,980\\ ^\\circ\\mathrm{C}$ trong không khí và $2\\,820\\ ^\\circ\\mathrm{C}$ trong oxygen tinh khiết. Đốt trong oxygen làm ngọn lửa nóng hơn bao nhiêu độ?',
      answer: 840,
      hints: ['Lấy hiệu của hai nhiệt độ.'],
      solution: '$2\\,820 - 1\\,980 = 840$ độ.',
    },
    {
      type: 'choice',
      prompt:
        'Dầu diesel có nhiệt độ tự bốc cháy khoảng $210\\ ^\\circ\\mathrm{C}$, xăng khoảng $280\\ ^\\circ\\mathrm{C}$. Điều đó phù hợp với thực tế nào?',
      options: [
        'Động cơ diesel chỉ cần nén không khí nóng rồi phun dầu vào, không cần bugi.',
        'Dầu diesel dễ bắt lửa hơn xăng khi gặp tia lửa ở nhiệt độ phòng.',
        'Động cơ xăng không cần đánh lửa.',
        'Xăng chỉ cháy trong oxygen tinh khiết.',
      ],
      answer: 0,
      hints: ['Nhiệt độ tự bốc cháy thấp nghĩa là chất tự cháy mà không cần nguồn lửa.'],
      solution:
        'Khí nén nóng đạt nhiệt độ tự bốc cháy của dầu diesel nên dầu tự cháy khi được phun vào. Còn điểm chớp cháy của dầu diesel cao hơn xăng nên ở nhiệt độ phòng nó khó bắt lửa hơn.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp an toàn khi dùng cồn để đốt?',
      options: [
        'Đốt ở nơi thông thoáng.',
        'Đậy kín chai cồn và để xa nguồn nhiệt.',
        'Không châm thêm cồn khi lửa còn đang cháy.',
        'Cất chai cồn ngay cạnh bếp để tiện dùng.',
      ],
      answers: [0, 1, 2],
      hints: ['Ethanol có điểm chớp cháy thấp nên hơi cồn dễ bắt lửa.'],
      solution:
        'Hơi cồn dễ bắt lửa nên phải tránh để hơi tích tụ và tránh để chai cồn gần nguồn nhiệt; châm thêm khi đang cháy có thể làm lửa bùng vào chai và gây bỏng.',
    },
  ],
  takeaways: [
    'Điểm chớp cháy: nhiệt độ thấp nhất tạo đủ hơi để bốc cháy khi gặp nguồn lửa.',
    'Điểm chớp cháy dưới $37{,}8\\ ^\\circ\\mathrm{C}$: chất lỏng dễ cháy; trên mốc đó: chất lỏng có thể gây cháy.',
    'Ngọn lửa trong oxygen tinh khiết nóng hơn trong không khí vì không phải làm nóng nitrogen.',
    'Nhiệt độ tự bốc cháy: chất tự cháy trong không khí mà không cần nguồn lửa.',
    'Điểm chớp cháy thấp không có nghĩa nhiệt độ tự bốc cháy thấp: xăng và dầu diesel là ví dụ.',
  ],
};
