/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phân bón hoá học cung cấp các nguyên tố dinh dưỡng cho cây, quan trọng nhất là N, P, K. Phân đơn chứa một nguyên tố dinh dưỡng (phân đạm, phân lân, phân kali); phân phức hợp và phân hỗn hợp như NPK chứa hai hoặc ba nguyên tố. Bón phân đúng loại, đúng liều lượng, đúng lúc, đúng cách giúp tăng năng suất và tránh ô nhiễm môi trường.',
  intro:
    'Ruộng lúa được bón phân xanh tốt, trĩu bông; ruộng thiếu phân thì lá vàng, cây còi cọc. Nhưng bón càng nhiều có càng tốt không? Ở nhiều vùng quê, ao hồ cạnh ruộng phủ kín rêu tảo vì phân bón thừa trôi xuống. Bài này giúp em hiểu cây cần gì từ phân bón và bón thế nào cho hợp lí.',
  objectives: [
    'Trình bày được vai trò của phân bón (một trong những nguồn bổ sung một số nguyên tố: đa lượng, trung lượng, vi lượng dưới dạng vô cơ và hữu cơ) cho đất, cây trồng.',
    'Nêu được thành phần và tác dụng cơ bản của một số loại phân bón hoá học đối với cây trồng (phân đạm, phân lân, phân kali, phân NPK).',
    'Trình bày được ảnh hưởng của việc sử dụng phân bón hoá học (không đúng cách, không đúng liều lượng) đến môi trường của đất, nước và sức khoẻ của con người.',
    'Đề xuất được biện pháp giảm thiểu ô nhiễm của phân bón.',
  ],
  sections: [
    {
      heading: 'Vai trò của phân bón',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân bón hoá học',
          text: 'Phân bón hoá học là những hoá chất có chứa nguyên tố dinh dưỡng, được bón cho cây nhằm nâng cao năng suất cây trồng.',
        },
        {
          type: 'list',
          items: [
            'Nguyên tố đa lượng (cây cần nhiều): nitrogen (N), phosphorus (P), potassium (K).',
            'Nguyên tố trung lượng: calcium (Ca), magnesium (Mg), sulfur (S).',
            'Nguyên tố vi lượng (cây cần rất ít): iron (Fe), manganese (Mn), zinc (Zn), copper (Cu), boron (B), molybdenum (Mo)...',
          ],
        },
        {
          type: 'table',
          caption: 'Vai trò của ba nguyên tố đa lượng',
          head: ['Nguyên tố', 'Vai trò chính', 'Khi thiếu'],
          rows: [
            [
              'Nitrogen (N)',
              'Kích thích cây sinh trưởng, phát triển thân lá, tăng tỉ lệ protein; lá xanh tốt.',
              'Cây còi cọc, lá nhỏ, vàng.',
            ],
            [
              'Phosphorus (P)',
              'Kích thích phát triển bộ rễ, thúc đẩy ra hoa, đậu quả, quả chín sớm.',
              'Rễ kém, chậm ra hoa, hạt lép.',
            ],
            [
              'Potassium (K)',
              'Tăng sức chống chịu (sâu bệnh, rét, hạn, đổ ngã); tăng chất lượng hạt, quả, củ (đường, tinh bột).',
              'Thân yếu dễ đổ, dễ nhiễm bệnh.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Một số loại phân bón hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân bón đơn',
          text: 'Phân bón đơn chỉ chứa một trong ba nguyên tố dinh dưỡng chính N, P, K: phân đạm (chứa N), phân lân (chứa P), phân kali (chứa K).',
        },
        {
          type: 'table',
          head: ['Loại phân', 'Ví dụ, thành phần chính', 'Ghi chú'],
          rows: [
            [
              'Phân đạm',
              'Urea $\\mathrm{(NH_2)_2CO}$; ammonium nitrate $\\mathrm{NH_4NO_3}$; ammonium sulfate $\\mathrm{(NH_4)_2SO_4}$; ammonium chloride $\\mathrm{NH_4Cl}$',
              'Urea có hàm lượng nitrogen cao nhất (khoảng $46\\%$).',
            ],
            [
              'Phân lân',
              'Phân lân nung chảy (chứa $\\mathrm{Ca_3(PO_4)_2}$); superphosphate đơn ($\\mathrm{Ca(H_2PO_4)_2}$ và $\\mathrm{CaSO_4}$); superphosphate kép ($\\mathrm{Ca(H_2PO_4)_2}$)',
              'Lân nung chảy không tan trong nước, tan chậm trong đất chua nên hợp với đất chua.',
            ],
            [
              'Phân kali',
              'Potassium chloride $\\mathrm{KCl}$; potassium sulfate $\\mathrm{K_2SO_4}$',
              'Tan tốt trong nước.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân bón phức hợp và phân hỗn hợp',
          text: 'Phân chứa hai hoặc ba nguyên tố dinh dưỡng. Phân phức hợp được tạo ra bằng phản ứng hoá học, ví dụ potassium nitrate $\\mathrm{KNO_3}$ (chứa K và N), ammophos (hỗn hợp $\\mathrm{NH_4H_2PO_4}$ và $\\mathrm{(NH_4)_2HPO_4}$, chứa N và P). Phân hỗn hợp được trộn từ các phân đơn theo tỉ lệ phù hợp với từng loại cây, ví dụ phân NPK.',
        },
        {
          type: 'p',
          text: 'Trên bao phân NPK có ghi ba số, ví dụ NPK 16-16-8: đó là hàm lượng dinh dưỡng đạm, lân, kali của phân (lân và kali được tính quy đổi theo một quy ước riêng). Ngoài N, P, K, phân NPK có thể bổ sung thêm nguyên tố trung lượng (Ca, Mg) và vi lượng (Zn, Cu...).',
        },
        {
          type: 'p',
          text: 'Hàm lượng nguyên tố dinh dưỡng trong một phân bón được tính như phần trăm khối lượng nguyên tố trong hợp chất:',
        },
        {
          type: 'tex',
          tex: '\\%\\mathrm{N}_{\\,(\\mathrm{NH_2})_2\\mathrm{CO}} = \\dfrac{2 \\times 14}{60} \\times 100\\% \\approx 46{,}7\\%',
        },
      ],
    },
    {
      heading: 'Sử dụng phân bón hợp lí',
      blocks: [
        {
          type: 'p',
          text: 'Bón phân không đúng cách, không đúng liều lượng gây nhiều tác hại:',
        },
        {
          type: 'list',
          items: [
            'Môi trường nước: phân thừa bị nước mưa, nước tưới cuốn xuống ao, hồ, sông; nguồn nước giàu nitrogen, phosphorus làm rong tảo phát triển quá mức (hiện tượng phú dưỡng), nước thiếu oxygen, cá tôm chết.',
            'Môi trường đất: đất bị chua hoá, chai cứng, nghèo chất hữu cơ, vi sinh vật có ích bị suy giảm.',
            'Không khí: một phần phân đạm chuyển thành các khí như ammonia, nitrogen oxide thoát vào không khí.',
            'Sức khoẻ: rau, quả tồn dư nhiều nitrate do bón thừa đạm hoặc bón sát ngày thu hoạch có hại cho người ăn.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc bón phân',
          text: 'Bón đúng loại phân (phù hợp với cây và đất), đúng liều lượng, đúng thời điểm (theo giai đoạn sinh trưởng, không bón sát ngày thu hoạch) và đúng cách (bón lót, bón thúc; vùi phân vào đất, không bón khi trời sắp mưa to).',
        },
        {
          type: 'list',
          items: [
            'Kết hợp phân hoá học với phân hữu cơ (phân chuồng, phân xanh, phân vi sinh) để cải tạo đất.',
            'Dùng phân bón nhả chậm, bón cân đối N, P, K theo nhu cầu của cây.',
            'Bảo quản phân bón nơi khô ráo, không để phân rơi vãi xuống nguồn nước.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Ruộng lúa thử nghiệm',
    instruction:
      'Chọn bón phân đơn (đạm, lân, kali riêng) hay phân NPK trộn sẵn, rồi kéo thanh trượt để đổi số kilogam phân bón cho 1 sào lúa. Quan sát cây cao lên, màu lá, các thanh nhu cầu N, P, K, năng suất và lượng phân thừa trôi xuống ao. Tìm cách bón để năng suất cao nhất mà ao vẫn sạch.',
  },
  examples: [
    {
      problem:
        'Tính phần trăm khối lượng nitrogen trong urea $\\mathrm{(NH_2)_2CO}$ và trong ammonium nitrate $\\mathrm{NH_4NO_3}$. Loại phân nào giàu đạm hơn? (N = 14, H = 1, C = 12, O = 16)',
      steps: [
        '$M_{\\mathrm{(NH_2)_2CO}} = 2 \\times (14 + 2) + 12 + 16 = 60$ g/mol, có $2$ nguyên tử N: $\\%\\mathrm{N} = \\dfrac{28}{60} \\times 100\\% \\approx 46{,}67\\%$.',
        '$M_{\\mathrm{NH_4NO_3}} = 14 + 4 + 14 + 48 = 80$ g/mol, có $2$ nguyên tử N: $\\%\\mathrm{N} = \\dfrac{28}{80} \\times 100\\% = 35\\%$.',
        '$46{,}67\\% > 35\\%$.',
      ],
      answer: 'Urea giàu đạm hơn ($\\approx 46{,}67\\%$ N so với $35\\%$ N).',
    },
    {
      problem: 'Một thửa ruộng cần được bón thêm $2{,}8$ kg nitrogen. Cần bao nhiêu kilogam urea?',
      steps: [
        'Trong $60$ kg urea có $28$ kg nitrogen.',
        'Khối lượng urea chứa $2{,}8$ kg N: $m = \\dfrac{2{,}8 \\times 60}{28} = 6$ kg.',
      ],
      answer: 'Cần $6$ kg urea.',
    },
    {
      problem:
        'Một ruộng rau có lá nhỏ, vàng, cây còi cọc; một vườn cây ăn quả thì cây hay đổ ngã, quả kém ngọt. Mỗi nơi nên bổ sung loại phân nào?',
      steps: [
        'Lá vàng, cây còi cọc là dấu hiệu thiếu nitrogen: bổ sung phân đạm (ví dụ urea).',
        'Cây dễ đổ, quả kém ngọt là dấu hiệu thiếu potassium: bổ sung phân kali (ví dụ KCl).',
        'Bón với liều lượng vừa phải, không bón đạm sát ngày thu hoạch rau.',
      ],
      answer: 'Ruộng rau: phân đạm; vườn cây ăn quả: phân kali.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân đạm cung cấp cho cây nguyên tố dinh dưỡng nào?',
      options: ['Phosphorus (P)', 'Nitrogen (N)', 'Potassium (K)', 'Calcium (Ca)'],
      answer: 1,
      hints: ['“Đạm” gắn với protein; urea là phân đạm.'],
      solution: 'Phân đạm cung cấp nitrogen (N) cho cây.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nguyên tố dinh dưỡng với vai trò chính của nó.',
      left: ['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)'],
      right: [
        'Tăng sức chống chịu sâu bệnh, rét, hạn; tăng lượng đường, tinh bột',
        'Kích thích sinh trưởng thân lá, lá xanh tốt',
        'Kích thích phát triển rễ, ra hoa, đậu quả',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Thiếu N thì lá vàng; thiếu P thì rễ kém; thiếu K thì cây dễ đổ.'],
      solution:
        'N: sinh trưởng thân lá; P: phát triển rễ, ra hoa, đậu quả; K: tăng sức chống chịu và chất lượng nông sản.',
    },
    {
      type: 'choice',
      prompt: 'Phân nào sau đây là phân bón đơn?',
      options: [
        '$\\mathrm{KNO_3}$',
        'Phân NPK',
        '$\\mathrm{(NH_2)_2CO}$',
        '$\\mathrm{NH_4H_2PO_4}$',
      ],
      answer: 2,
      hints: ['Phân bón đơn chỉ chứa một trong ba nguyên tố N, P, K.'],
      solution:
        'Urea $\\mathrm{(NH_2)_2CO}$ chỉ chứa N nên là phân đơn. $\\mathrm{KNO_3}$ chứa K và N, $\\mathrm{NH_4H_2PO_4}$ chứa N và P, NPK chứa cả ba.',
    },
    {
      type: 'multi',
      prompt: 'Những phân bón nào chứa từ hai nguyên tố dinh dưỡng N, P, K trở lên?',
      options: [
        '$\\mathrm{KNO_3}$',
        '$\\mathrm{KCl}$',
        '$\\mathrm{NH_4H_2PO_4}$',
        '$\\mathrm{NH_4NO_3}$',
        'Phân NPK',
      ],
      answers: [0, 2, 4],
      hints: ['Đếm xem trong công thức có những nguyên tố nào trong số N, P, K.'],
      solution:
        '$\\mathrm{KNO_3}$ (K, N), $\\mathrm{NH_4H_2PO_4}$ (N, P), NPK (N, P, K). $\\mathrm{KCl}$ chỉ có K; $\\mathrm{NH_4NO_3}$ chỉ có N.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng nitrogen trong ammonium sulfate $\\mathrm{(NH_4)_2SO_4}$, làm tròn đến hàng phần mười (N = 14, H = 1, S = 32, O = 16).',
      answer: 21.2,
      tolerance: 0.05,
      unit: '%',
      hints: [
        'Tính khối lượng mol: $2 \\times 18 + 32 + 64$.',
        'Trong một phân tử có $2$ nguyên tử N.',
      ],
      solution:
        '$M = 2 \\times 18 + 32 + 64 = 132$ g/mol; $\\%\\mathrm{N} = \\dfrac{28}{132} \\times 100\\% \\approx 21{,}2\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng potassium trong phân kali $\\mathrm{KCl}$, làm tròn đến hàng phần mười (K = 39, Cl = 35,5).',
      answer: 52.3,
      tolerance: 0.05,
      unit: '%',
      hints: ['$M_{\\mathrm{KCl}} = 39 + 35{,}5$.'],
      solution:
        '$M = 74{,}5$ g/mol; $\\%\\mathrm{K} = \\dfrac{39}{74{,}5} \\times 100\\% \\approx 52{,}3\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Một bao urea $\\mathrm{(NH_2)_2CO}$ nặng $50$ kg. Tính khối lượng nitrogen có trong bao, theo kilogam, làm tròn đến hàng phần trăm.',
      answer: 23.33,
      tolerance: 0.01,
      unit: 'kg',
      hints: ['Cứ $60$ kg urea có $28$ kg N.'],
      solution: '$m_{\\mathrm{N}} = 50 \\times \\dfrac{28}{60} \\approx 23{,}33$ kg.',
    },
    {
      type: 'choice',
      prompt: 'Bón quá nhiều phân đạm cho rau, nhất là bón sát ngày thu hoạch, có hại gì?',
      options: [
        'Rau thiếu nitrogen nên lá vàng',
        'Rau tồn dư nitrate gây hại sức khoẻ người ăn; phân thừa gây ô nhiễm nguồn nước',
        'Không có hại gì vì phân đạm tan hết trong nước',
        'Đất trở nên giàu chất hữu cơ hơn',
      ],
      answer: 1,
      hints: ['Cây không hấp thụ hết lượng phân bón thừa.'],
      solution:
        'Đạm thừa tích lại trong rau dưới dạng nitrate có hại cho người ăn; phần cây không hấp thụ bị rửa trôi gây ô nhiễm nguồn nước.',
    },
    {
      type: 'choice',
      prompt: 'Với đất chua, nên chọn loại phân lân nào?',
      options: [
        'Superphosphate kép',
        'Phân lân nung chảy',
        'Superphosphate đơn',
        'Loại nào cũng hợp như nhau',
      ],
      answer: 1,
      hints: ['Một loại phân lân không tan trong nước nhưng tan chậm trong môi trường acid.'],
      solution:
        'Phân lân nung chảy không tan trong nước, tan dần trong đất chua và còn giúp giảm độ chua, nên hợp với đất chua.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào là cách sử dụng phân bón hợp lí?',
      options: [
        'Bón đúng loại phân cây đang thiếu',
        'Bón thật nhiều cho cây lớn nhanh',
        'Không bón phân đạm sát ngày thu hoạch rau',
        'Bón phân ngay trước khi trời mưa to',
        'Kết hợp phân hoá học với phân hữu cơ',
      ],
      answers: [0, 2, 4],
      hints: ['Nhớ nguyên tắc: đúng loại, đúng liều lượng, đúng thời điểm, đúng cách.'],
      solution:
        'Bón đúng loại, không bón đạm sát ngày thu hoạch và kết hợp phân hữu cơ là hợp lí. Bón quá nhiều làm cháy cây, ô nhiễm; bón trước mưa to làm phân bị rửa trôi.',
    },
  ],
  takeaways: [
    'Cây cần nhiều nhất ba nguyên tố N, P, K; ngoài ra cần nguyên tố trung lượng (Ca, Mg, S) và vi lượng (Fe, Zn, Cu, B...).',
    'N giúp cây phát triển thân lá; P giúp phát triển rễ, ra hoa, đậu quả; K tăng sức chống chịu và chất lượng nông sản.',
    'Phân đơn chứa một nguyên tố dinh dưỡng (đạm, lân, kali); phân phức hợp, phân hỗn hợp (NPK) chứa hai hoặc ba nguyên tố.',
    'Bón đúng loại, đúng liều lượng, đúng thời điểm, đúng cách để tăng năng suất và tránh ô nhiễm đất, nước, không khí.',
  ],
};
