/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vai trò của các nguyên tố dinh dưỡng đa lượng, trung lượng, vi lượng đối với cây trồng; phân loại phân bón và cách đọc độ dinh dưỡng N, P2O5, K2O ghi trên bao bì.',
  intro:
    'Ông cha ta có câu "Nhất nước, nhì phân, tam cần, tứ giống". Trên bao phân ngoài chợ thường in ba con số như NPK 20-20-15. Cây cần những nguyên tố nào, mỗi nguyên tố làm gì, và ba con số đó cho biết điều gì?',
  objectives: [
    'Nêu được vai trò của phân bón và của các nguyên tố dinh dưỡng đối với cây trồng.',
    'Phân biệt được nguyên tố dinh dưỡng đa lượng, trung lượng và vi lượng; nhận ra triệu chứng thiếu một số nguyên tố.',
    'Trình bày được cách phân loại phân bón.',
    'Hiểu và tính được độ dinh dưỡng của phân đạm, phân lân, phân kali và phân NPK.',
  ],
  sections: [
    {
      heading: 'Phân bón và vai trò của phân bón',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân bón',
          text: 'Phân bón là sản phẩm có chức năng cung cấp chất dinh dưỡng cho cây trồng hoặc có tác dụng cải tạo đất, giúp tăng năng suất và chất lượng cây trồng.',
        },
        {
          type: 'p',
          text: 'Cây lấy carbon, hydrogen, oxygen từ không khí ($\\mathrm{CO_2}$) và nước. Các nguyên tố khác cây hút từ đất dưới dạng ion hoà tan, ví dụ $\\mathrm{NO_3^-}$, $\\mathrm{NH_4^+}$, $\\mathrm{H_2PO_4^-}$, $\\mathrm{K^+}$. Sau mỗi vụ thu hoạch, các nguyên tố này bị lấy đi theo nông sản, nên đất ngày càng nghèo nếu không được bổ sung bằng phân bón.',
        },
        {
          type: 'list',
          items: [
            'Cung cấp nguyên tố dinh dưỡng cho cây sinh trưởng, phát triển.',
            'Nâng cao năng suất và chất lượng nông sản.',
            'Cải tạo đất, tăng độ phì nhiêu (nhất là phân hữu cơ).',
          ],
        },
      ],
    },
    {
      heading: 'Các nguyên tố dinh dưỡng của cây trồng',
      blocks: [
        {
          type: 'p',
          text: 'Theo lượng cây cần, các nguyên tố dinh dưỡng được chia thành ba nhóm.',
        },
        {
          type: 'table',
          head: ['Nhóm', 'Nguyên tố', 'Đặc điểm'],
          rows: [
            ['Đa lượng', 'N, P, K', 'Cây cần nhiều nhất, thường phải bổ sung mỗi vụ.'],
            ['Trung lượng', 'Ca, Mg, S, Si', 'Cây cần ít hơn nhóm đa lượng.'],
            [
              'Vi lượng',
              'Fe, Zn, B, Cu, Mn, Mo, Co',
              'Cây cần rất ít; thiếu hay thừa đều gây hại.',
            ],
          ],
          caption: 'Ba nhóm nguyên tố dinh dưỡng',
        },
        {
          type: 'table',
          head: ['Nguyên tố', 'Vai trò chính', 'Biểu hiện khi thiếu'],
          rows: [
            [
              'N',
              'Thành phần của protein, nucleic acid, diệp lục; thúc đẩy ra thân, lá.',
              'Lá già vàng, cây còi cọc.',
            ],
            [
              'P',
              'Thành phần của ATP, nucleic acid; kích thích ra rễ, ra hoa, đậu quả.',
              'Lá già ngả tím đỏ, rễ kém, chậm ra hoa.',
            ],
            [
              'K',
              'Điều hoà nước, hoạt hoá enzyme; tăng chất lượng nông sản và sức chống chịu.',
              'Cháy mép lá già, thân yếu dễ đổ.',
            ],
          ],
          caption: 'Ba nguyên tố đa lượng',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lá già hay lá non?',
          text: 'N, P, K, Mg di chuyển được trong cây: khi thiếu, cây chuyển chúng từ lá già sang lá non, nên triệu chứng hiện ở lá già trước. Ca, Fe, B, S ít di chuyển, nên triệu chứng thiếu hiện ở lá non và đỉnh sinh trưởng.',
        },
        { type: 'widget', name: 'nhom' },
      ],
    },
    {
      heading: 'Phân loại phân bón',
      blocks: [
        {
          type: 'table',
          head: ['Nhóm', 'Thành phần', 'Ví dụ'],
          rows: [
            [
              'Phân bón vô cơ',
              'Chất dinh dưỡng ở dạng muối, hợp chất vô cơ, thường được sản xuất trong nhà máy.',
              'Phân đạm urea, phân lân, phân kali, phân NPK.',
            ],
            [
              'Phân bón hữu cơ',
              'Chất hữu cơ có nguồn gốc từ xác động, thực vật, chất thải chăn nuôi.',
              'Phân chuồng, phân xanh, phân compost, phân hữu cơ vi sinh.',
            ],
            [
              'Phân bón sinh học',
              'Chứa vi sinh vật có ích hoặc chất sinh học giúp cây hấp thụ dinh dưỡng.',
              'Phân vi sinh cố định đạm, phân giải lân.',
            ],
          ],
          caption: 'Phân loại theo thành phần',
        },
        {
          type: 'p',
          text: 'Theo cách sử dụng, có phân bón rễ (bón vào đất cho rễ hút) và phân bón lá (hoà nước phun lên lá). Riêng phân bón vô cơ còn chia theo số nguyên tố dinh dưỡng đa lượng: phân đơn (chỉ một trong ba nguyên tố N, P, K) và phân phức hợp, phân hỗn hợp (từ hai nguyên tố trở lên), sẽ học ở bài sau.',
        },
      ],
    },
    {
      heading: 'Độ dinh dưỡng của phân bón',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Độ dinh dưỡng',
          text: 'Độ dinh dưỡng của phân đạm được đánh giá bằng phần trăm khối lượng nguyên tố N; của phân lân bằng phần trăm khối lượng $\\mathrm{P_2O_5}$ tương ứng với lượng P có trong phân; của phân kali bằng phần trăm khối lượng $\\mathrm{K_2O}$ tương ứng với lượng K có trong phân.',
        },
        {
          type: 'p',
          text: 'Trên bao phân NPK, ba số lần lượt là $\\%\\mathrm{N}$, $\\%\\mathrm{P_2O_5}$ và $\\%\\mathrm{K_2O}$ theo khối lượng. Phân NPK 20-20-15 chứa $20\\%$ N, $20\\%$ $\\mathrm{P_2O_5}$ và $15\\%$ $\\mathrm{K_2O}$; phần còn lại là các nguyên tố khác, chất độn và tạp chất.',
        },
        {
          type: 'tex',
          tex: 'm_{\\text{chat dinh duong}} = m_{\\text{phan}} \\cdot \\dfrac{\\text{do dinh duong}}{100\\%}',
        },
        {
          type: 'p',
          text: 'Muốn đổi $\\mathrm{P_2O_5}$ ra P hay $\\mathrm{K_2O}$ ra K, dùng tỉ lệ khối lượng trong công thức: $1$ mol $\\mathrm{P_2O_5}$ ($142$ g) chứa $62$ g P; $1$ mol $\\mathrm{K_2O}$ ($94$ g) chứa $78$ g K.',
        },
      ],
    },
    {
      heading: 'Dự án: Đọc nhãn phân bón ở địa phương',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu những loại phân bón người dân địa phương em đang dùng và đọc đúng các thông tin trên nhãn.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: nhãn hoặc ảnh chụp bao bì của ít nhất $4$ loại phân bón khác nhau (đạm, lân, kali, NPK hoặc phân hữu cơ), sổ ghi chép.',
            'Ghi lại tên phân, nhóm phân (vô cơ, hữu cơ, sinh học), độ dinh dưỡng và các nguyên tố trung lượng, vi lượng ghi trên nhãn.',
            'Với một bao phân, tính khối lượng N, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$ có trong cả bao.',
            'Hỏi người trồng một loại cây phổ biến ở địa phương: bón loại phân nào, vào giai đoạn nào; đối chiếu với vai trò của N, P, K đã học.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng tổng hợp các loại phân, một ví dụ tính toán, và nhận xét về cách bón phân ở địa phương. Khi xem phân bón, không mở bao và rửa tay sau khi tiếp xúc.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng nguyên tố dinh dưỡng',
    instruction:
      'Ở chế độ "Tra cứu", chọn từng nguyên tố để xem nhóm, dạng cây hấp thụ, vai trò và biểu hiện khi thiếu. Sang chế độ "Bắt bệnh cho cây", đọc triệu chứng và đoán cây đang thiếu nguyên tố nào. Thiếu Mg và thiếu Fe khác nhau ở điểm nào?',
  },
  examples: [
    {
      problem:
        'Một bao phân NPK 20-20-15 nặng $50$ kg. Tính khối lượng N, $\\mathrm{P_2O_5}$ và $\\mathrm{K_2O}$ trong bao phân.',
      steps: [
        'Ba số trên nhãn là phần trăm khối lượng N, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$.',
        '$m_\\mathrm{N} = 50 \\cdot 20\\% = 10$ kg.',
        '$m_{\\mathrm{P_2O_5}} = 50 \\cdot 20\\% = 10$ kg; $m_{\\mathrm{K_2O}} = 50 \\cdot 15\\% = 7{,}5$ kg.',
      ],
      answer: 'Bao phân chứa $10$ kg N, $10$ kg $\\mathrm{P_2O_5}$ và $7{,}5$ kg $\\mathrm{K_2O}$.',
    },
    {
      problem:
        'Lượng $\\mathrm{P_2O_5}$ ở ví dụ trên ứng với bao nhiêu kilôgam nguyên tố P? Làm tròn đến hàng phần trăm.',
      steps: [
        'Trong $142$ g $\\mathrm{P_2O_5}$ có $2 \\cdot 31 = 62$ g P.',
        '$m_\\mathrm{P} = 10 \\cdot \\dfrac{62}{142} \\approx 4{,}37$ kg.',
      ],
      answer: 'Khoảng $4{,}37$ kg P.',
    },
    {
      problem:
        'Tính độ dinh dưỡng của phân urea nguyên chất $\\mathrm{(NH_2)_2CO}$. Vì sao phân urea bán ngoài thị trường chỉ ghi khoảng $46\\%$ N?',
      steps: [
        '$M = 2 \\cdot (14 + 2) + 12 + 16 = 60$ g/mol, trong đó có $2 \\cdot 14 = 28$ g N.',
        '$\\%\\mathrm{N} = \\dfrac{28}{60} \\cdot 100\\% \\approx 46{,}67\\%$.',
        'Phân thương phẩm có lẫn một ít nước, tạp chất (như biuret) nên độ dinh dưỡng thấp hơn một chút.',
      ],
      answer:
        'Urea nguyên chất có độ dinh dưỡng khoảng $46{,}67\\%$; phân thương phẩm khoảng $46\\%$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tố nào sau đây không phải là nguyên tố dinh dưỡng thiết yếu cho cây trồng?',
      options: ['Platinum', 'Nitrogen', 'Phosphorus', 'Potassium'],
      answer: 0,
      hints: ['Ba nguyên tố đa lượng có mặt trong ký hiệu NPK.'],
      solution:
        'Nitrogen, phosphorus, potassium là ba nguyên tố đa lượng N, P, K. Platinum (Pt) là kim loại quý, cây không cần.',
    },
    {
      type: 'multi',
      prompt: 'Những nguyên tố nào là nguyên tố dinh dưỡng trung lượng?',
      options: ['Ca', 'Mg', 'S', 'Si', 'K', 'Fe'],
      answers: [0, 1, 2, 3],
      hints: ['Nhóm trung lượng có bốn nguyên tố; K thuộc nhóm đa lượng.'],
      solution: 'Trung lượng gồm Ca, Mg, S, Si. K là nguyên tố đa lượng, Fe là nguyên tố vi lượng.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi nguyên tố với biểu hiện thường gặp khi cây thiếu nguyên tố đó.',
      left: ['N', 'P', 'K', 'Mg'],
      right: [
        'Lá già vàng đều, cây còi cọc.',
        'Lá già ngả tím đỏ, rễ kém phát triển.',
        'Mép lá già vàng rồi cháy khô.',
        'Lá già vàng giữa các gân, gân vẫn xanh.',
        'Lá non và đỉnh sinh trưởng chết.',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Mg là nguyên tử trung tâm của diệp lục, nên thiếu Mg thì phần thịt lá mất màu xanh.',
      ],
      solution:
        'Thiếu N: lá già vàng đều, cây còi; thiếu P: lá già tím đỏ, rễ kém; thiếu K: cháy mép lá già; thiếu Mg: vàng giữa các gân lá già. Lá non, đỉnh sinh trưởng chết là biểu hiện thiếu Ca hoặc B.',
    },
    {
      type: 'number',
      prompt:
        'Một bao phân NPK 16-16-8 nặng $25$ kg. Bao phân chứa bao nhiêu kilôgam $\\mathrm{K_2O}$?',
      answer: 2,
      unit: 'kg',
      hints: ['Số thứ ba trên nhãn là $\\%\\mathrm{K_2O}$.'],
      solution: '$m_{\\mathrm{K_2O}} = 25 \\cdot 8\\% = 2$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Một loại phân kali có độ dinh dưỡng $60\\%$. Phần trăm khối lượng nguyên tố K trong phân là bao nhiêu? Làm tròn đến hàng phần trăm.',
      answer: 49.79,
      tolerance: 0.02,
      unit: '%',
      hints: [
        'Độ dinh dưỡng của phân kali tính theo $\\mathrm{K_2O}$.',
        'Trong $94$ g $\\mathrm{K_2O}$ có $78$ g K.',
      ],
      solution: '$\\%\\mathrm{K} = 60\\% \\cdot \\dfrac{78}{94} \\approx 49{,}79\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cần bón $23$ kg N cho một thửa ruộng. Dùng phân urea có độ dinh dưỡng $46\\%$ thì cần bao nhiêu kilôgam phân?',
      answer: 50,
      unit: 'kg',
      hints: ['Khối lượng phân bằng khối lượng N chia cho độ dinh dưỡng.'],
      solution: '$m_{\\text{phan}} = \\dfrac{23}{46\\%} = \\dfrac{23 \\cdot 100}{46} = 50$ kg.',
    },
    {
      type: 'choice',
      prompt:
        'Ở Việt Nam có các phân NPK 30-10-10 và 20-20-15. Giai đoạn cây cần ra rễ, ra hoa nhiều nên chọn loại nào?',
      options: [
        'NPK 20-20-15',
        'NPK 30-10-10',
        'Hai loại như nhau',
        'Không loại nào chứa phosphorus',
      ],
      answer: 0,
      hints: ['Phosphorus kích thích ra rễ, ra hoa; xem số thứ hai trên mỗi nhãn.'],
      solution:
        'NPK 20-20-15 có $20\\%$ $\\mathrm{P_2O_5}$, gấp đôi NPK 30-10-10 ($10\\%$), nên hợp với giai đoạn cần nhiều lân. NPK 30-10-10 giàu đạm, hợp giai đoạn cây ra thân lá.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Cây lấy carbon từ khí $\\mathrm{CO_2}$ trong không khí.',
        'Nguyên tố vi lượng không cần thiết vì cây chỉ cần rất ít.',
        'Phân hữu cơ có thể cải tạo đất.',
        'Cây hút nitrogen chủ yếu dưới dạng ion $\\mathrm{NO_3^-}$ và $\\mathrm{NH_4^+}$.',
      ],
      answers: [0, 2, 3],
      hints: ['Nhớ rằng thiếu hay thừa nguyên tố vi lượng đều gây hại.'],
      solution:
        'Nguyên tố vi lượng cây cần rất ít nhưng không thể thiếu, ví dụ thiếu Fe thì lá non vàng. Các phát biểu còn lại đều đúng.',
    },
    {
      type: 'text',
      prompt:
        'Phân bón chứa vi sinh vật có ích, như vi khuẩn cố định đạm, thuộc nhóm phân bón nào (vô cơ, hữu cơ hay sinh học)?',
      accept: ['sinh học', 'phân bón sinh học', 'phân sinh học'],
      hints: ['Nhóm này dựa vào hoạt động của sinh vật sống.'],
      solution: 'Đó là phân bón sinh học.',
    },
  ],
  takeaways: [
    'Phân bón cung cấp dinh dưỡng cho cây hoặc cải tạo đất, giúp tăng năng suất và chất lượng nông sản.',
    'Đa lượng: N, P, K; trung lượng: Ca, Mg, S, Si; vi lượng: Fe, Zn, B, Cu, Mn, Mo, Co.',
    'Triệu chứng thiếu N, P, K, Mg hiện ở lá già trước; thiếu Ca, Fe, B hiện ở lá non.',
    'Phân bón gồm phân vô cơ, phân hữu cơ, phân sinh học; theo cách bón có phân bón rễ và phân bón lá.',
    'Độ dinh dưỡng: phân đạm tính theo $\\%\\mathrm{N}$, phân lân theo $\\%\\mathrm{P_2O_5}$, phân kali theo $\\%\\mathrm{K_2O}$.',
  ],
};
