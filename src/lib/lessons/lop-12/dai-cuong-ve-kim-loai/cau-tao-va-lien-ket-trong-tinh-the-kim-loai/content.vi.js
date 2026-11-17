/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và liên kết trong tinh thể kim loại: vị trí của kim loại trong bảng tuần hoàn, đặc điểm cấu tạo nguyên tử kim loại, liên kết kim loại giữa electron tự do và ion dương, ba kiểu mạng tinh thể kim loại phổ biến.',
  intro:
    'Từ dây điện, nồi nấu, khung xe đến vỏ máy bay, kim loại có mặt ở khắp nơi. Kim loại dẫn điện, dẫn nhiệt tốt, dễ dát mỏng mà không vỡ vụn như muối ăn hay đá vôi. Kim loại có đặc điểm gì về cấu tạo nguyên tử và liên kết mà hữu dụng như vậy?',
  objectives: [
    'Nêu được vị trí của các nguyên tố kim loại trong bảng tuần hoàn.',
    'Nêu được đặc điểm cấu tạo nguyên tử kim loại so với nguyên tử phi kim cùng chu kì.',
    'Trình bày được khái niệm liên kết kim loại và so sánh được với liên kết ion, liên kết cộng hoá trị.',
    'Mô tả được ba kiểu mạng tinh thể kim loại phổ biến: lập phương tâm khối, lập phương tâm mặt và lục phương.',
  ],
  sections: [
    {
      heading: 'Vị trí của kim loại trong bảng tuần hoàn',
      blocks: [
        {
          type: 'p',
          text: 'Trong bảng tuần hoàn, phần lớn các nguyên tố là kim loại. Các nguyên tố kim loại gồm:',
        },
        {
          type: 'list',
          items: [
            'các nguyên tố khối s (trừ H và He): nhóm IA (Li, Na, K, Rb, Cs, Fr) và nhóm IIA (Be, Mg, Ca, Sr, Ba, Ra);',
            'một số nguyên tố khối p: nhóm IIIA (trừ B), một phần nhóm IVA, VA, VIA (như Sn, Pb, Bi, Po);',
            'tất cả các nguyên tố khối d (các nhóm B, nguyên tố chuyển tiếp) và khối f (họ lanthanide, họ actinide).',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ghi nhớ',
          text: 'Các nguyên tố khối s (trừ H, He), khối d và khối f đều là kim loại. Ở khối p, kim loại nằm ở phía dưới, bên trái đường phân chia kim loại – phi kim.',
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo nguyên tử kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên tử của phần lớn các nguyên tố kim loại có ít electron ở lớp ngoài cùng (1, 2 hoặc 3 electron). Ví dụ: Na ($1s^22s^22p^63s^1$) có 1 electron lớp ngoài cùng, Mg ($[\\mathrm{Ne}]3s^2$) có 2, Al ($[\\mathrm{Ne}]3s^23p^1$) có 3.',
        },
        {
          type: 'p',
          text: 'Trong cùng một chu kì, so với nguyên tử phi kim, nguyên tử kim loại có điện tích hạt nhân nhỏ hơn và bán kính lớn hơn. Vì vậy, nguyên tử kim loại dễ nhường electron hoá trị hơn và có độ âm điện nhỏ hơn.',
        },
        {
          type: 'table',
          head: ['Nguyên tố (chu kì 3)', 'Na', 'Mg', 'Al', 'P', 'Cl'],
          rows: [
            ['Điện tích hạt nhân', '+11', '+12', '+13', '+15', '+17'],
            ['Electron lớp ngoài cùng', '1', '2', '3', '5', '7'],
            ['Loại nguyên tố', 'kim loại', 'kim loại', 'kim loại', 'phi kim', 'phi kim'],
          ],
          caption: 'Trong chu kì 3, các kim loại đứng đầu chu kì, có ít electron lớp ngoài cùng.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nguyên tử các kim loại chuyển tiếp như Sc ($[\\mathrm{Ar}]3d^14s^2$), Ti ($[\\mathrm{Ar}]3d^24s^2$) có 2 electron lớp ngoài cùng, ngoài ra các electron ở phân lớp $3d$ sát lớp ngoài cùng cũng có thể tham gia liên kết.',
        },
      ],
    },
    {
      heading: 'Tinh thể kim loại và liên kết kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Ở nhiệt độ phòng, các đơn chất kim loại đều ở thể rắn và có cấu tạo tinh thể (trừ thuỷ ngân ở thể lỏng). Trong tinh thể kim loại, các ion dương kim loại nằm ở các nút mạng, còn các electron hoá trị tách khỏi nguyên tử, chuyển động tự do trong toàn mạng tinh thể (gọi là electron tự do).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết kim loại',
          text: 'Liên kết kim loại là liên kết được hình thành do lực hút tĩnh điện giữa các electron hoá trị tự do với các ion dương kim loại ở các nút mạng.',
        },
        { type: 'widget', name: 'bien-electron' },
        {
          type: 'table',
          head: ['Đặc điểm', 'Liên kết kim loại', 'Liên kết ion', 'Liên kết cộng hoá trị'],
          rows: [
            [
              'Hình thành do',
              'lực hút tĩnh điện giữa electron tự do và ion dương',
              'lực hút tĩnh điện giữa các ion mang điện tích trái dấu',
              'các cặp electron dùng chung giữa hai nguyên tử',
            ],
            [
              'Electron liên kết',
              'dùng chung cho toàn bộ tinh thể',
              'chuyển hẳn từ nguyên tử này sang nguyên tử khác',
              'dùng chung cho hai nguyên tử',
            ],
          ],
          caption: 'So sánh liên kết kim loại với liên kết ion và liên kết cộng hoá trị.',
        },
      ],
    },
    {
      heading: 'Các kiểu mạng tinh thể kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Các ion kim loại trong tinh thể sắp xếp theo những kiểu mạng xác định. Ba kiểu mạng tinh thể kim loại phổ biến là lập phương tâm khối, lập phương tâm mặt và lục phương.',
        },
        {
          type: 'table',
          head: ['Kiểu mạng', 'Vị trí các nguyên tử', 'Số phối trí', 'Độ đặc khít', 'Ví dụ'],
          rows: [
            [
              'Lập phương tâm khối',
              '8 đỉnh và tâm của hình lập phương',
              '8',
              '68%',
              'Li, Na, K, Ba',
            ],
            [
              'Lập phương tâm mặt',
              '8 đỉnh và tâm 6 mặt của hình lập phương',
              '12',
              '74%',
              'Ca, Sr, Cu',
            ],
            [
              'Lục phương',
              'các đỉnh, tâm hai đáy của lăng trụ lục giác và 3 nguyên tử ở lớp giữa',
              '12',
              '74%',
              'Be, Mg',
            ],
          ],
          caption: 'Ba kiểu mạng tinh thể kim loại phổ biến.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Số phối trí là số nguyên tử gần nhất bao quanh một nguyên tử. Độ đặc khít là phần trăm thể tích tinh thể do các nguyên tử chiếm; phần còn lại là khoảng trống. Mạng lập phương tâm mặt và lục phương có độ đặc khít 74%, lớn hơn mạng lập phương tâm khối (68%).',
        },
      ],
    },
  ],
  explore: {
    title: 'Ba kiểu mạng tinh thể xoay 3D',
    instruction:
      'Chọn một kiểu mạng và kéo (hoặc dùng phím mũi tên) để xoay ô mạng. Chuyển sang "Nguyên tử gần nhất", xoay để thấy hết các nguyên tử màu cam quanh nguyên tử trung tâm, đếm chúng và kiểm tra số phối trí.',
  },
  examples: [
    {
      problem:
        'Viết cấu hình electron của nguyên tử Mg ($Z = 12$) và Cl ($Z = 17$). Giải thích vì sao Mg là kim loại còn Cl là phi kim.',
      steps: [
        'Mg: $1s^22s^22p^63s^2$, có 2 electron lớp ngoài cùng. Cl: $1s^22s^22p^63s^23p^5$, có 7 electron lớp ngoài cùng.',
        'Hai nguyên tố cùng ở chu kì 3; Mg có điện tích hạt nhân nhỏ hơn ($+12 < +17$) nên bán kính nguyên tử lớn hơn.',
        'Mg có ít electron lớp ngoài cùng, hạt nhân hút chúng yếu nên dễ nhường 2 electron tạo ion $\\mathrm{Mg^{2+}}$: Mg là kim loại. Cl dễ nhận thêm 1 electron: Cl là phi kim.',
      ],
      answer: 'Mg dễ nhường electron (kim loại), Cl dễ nhận electron (phi kim).',
    },
    {
      problem:
        'Trong mạng tinh thể lập phương tâm khối của sodium, xét nguyên tử ở tâm hình lập phương. Có bao nhiêu nguyên tử gần nó nhất? Phần trăm thể tích khoảng trống trong tinh thể là bao nhiêu?',
      steps: [
        'Nguyên tử ở tâm tiếp xúc với 8 nguyên tử ở 8 đỉnh hình lập phương (dọc theo các đường chéo của khối).',
        'Vậy số phối trí của mạng lập phương tâm khối là 8.',
        'Độ đặc khít của mạng lập phương tâm khối là 68%, nên khoảng trống chiếm $100\\% - 68\\% = 32\\%$ thể tích.',
      ],
      answer: '8 nguyên tử gần nhất; khoảng trống chiếm 32% thể tích.',
    },
    {
      problem: 'Hãy cho biết liên kết kim loại có đặc điểm gì giống và khác so với liên kết ion.',
      steps: [
        'Giống nhau: cả hai đều được hình thành do lực hút tĩnh điện giữa các phần tử mang điện tích trái dấu.',
        'Khác nhau: trong liên kết ion, lực hút là giữa các ion dương và ion âm. Trong liên kết kim loại, lực hút là giữa các ion dương ở nút mạng và các electron hoá trị tự do của cả tinh thể.',
      ],
      answer:
        'Đều do lực hút tĩnh điện; liên kết ion giữa hai loại ion trái dấu, liên kết kim loại giữa ion dương và electron tự do.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Liên kết kim loại là liên kết được hình thành do',
      options: [
        'lực hút tĩnh điện giữa các electron hoá trị tự do và các ion dương kim loại ở nút mạng',
        'lực hút tĩnh điện giữa các ion dương và các ion âm',
        'các cặp electron dùng chung giữa hai nguyên tử kim loại',
        'lực hút giữa các phân tử kim loại',
      ],
      answer: 0,
      hints: [
        'Trong tinh thể kim loại có những loại hạt mang điện nào?',
        'Ion dương nằm ở nút mạng, còn electron hoá trị thì chuyển động tự do.',
      ],
      solution:
        'Liên kết kim loại hình thành do lực hút tĩnh điện giữa các electron hoá trị tự do với các ion dương kim loại ở các nút mạng.',
    },
    {
      type: 'multi',
      prompt: 'Những nguyên tố nào sau đây là kim loại?',
      options: ['Na', 'Al', 'Si', 'Fe', 'S', 'Ca'],
      answers: [0, 1, 3, 5],
      hints: [
        'Nguyên tố khối s (trừ H, He), khối d đều là kim loại; nhóm IIIA trừ B là kim loại.',
        'Xác định khối và nhóm của từng nguyên tố; ở nhóm IVA, VIA, các nguyên tố ở chu kì nhỏ là phi kim.',
      ],
      solution:
        'Na (IA), Ca (IIA), Al (IIIA) và Fe (khối d, nhóm VIIIB) là kim loại; Si và S là phi kim.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử Al ($Z = 13$) có bao nhiêu electron ở lớp ngoài cùng?',
      answer: 3,
      hints: ['Viết cấu hình electron của Al.'],
      solution: 'Al: $1s^22s^22p^63s^23p^1$, lớp ngoài cùng (lớp 3) có $2 + 1 = 3$ electron.',
    },
    {
      type: 'number',
      prompt:
        'Trong mạng tinh thể lập phương tâm mặt, mỗi nguyên tử tiếp xúc với bao nhiêu nguyên tử gần nhất (số phối trí)?',
      answer: 12,
      hints: [
        'Dùng mô hình 3D ở trên, chọn "Nguyên tử gần nhất".',
        'Có 4 nguyên tử cùng lớp, 4 ở lớp trên và 4 ở lớp dưới.',
      ],
      solution:
        'Mỗi nguyên tử trong mạng lập phương tâm mặt có $4 + 4 + 4 = 12$ nguyên tử gần nhất: số phối trí là 12.',
    },
    {
      type: 'choice',
      prompt: 'Độ đặc khít của mạng tinh thể lập phương tâm khối là',
      options: ['68%', '74%', '52%', '100%'],
      answer: 0,
      hints: ['Mạng lập phương tâm khối kém đặc khít hơn hai kiểu mạng còn lại.'],
      solution:
        'Mạng lập phương tâm khối có độ đặc khít 68%; mạng lập phương tâm mặt và lục phương có độ đặc khít 74%.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi kiểu mạng tinh thể với các kim loại có kiểu mạng đó.',
      left: ['Lập phương tâm khối', 'Lập phương tâm mặt', 'Lục phương'],
      right: ['Li, Na, K, Ba', 'Ca, Sr, Cu', 'Be, Mg'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Kim loại kiềm có kiểu mạng kém đặc khít nhất.'],
      solution:
        'Lập phương tâm khối: Li, Na, K, Ba; lập phương tâm mặt: Ca, Sr, Cu; lục phương: Be, Mg.',
    },
    {
      type: 'choice',
      prompt: 'Trong cùng một chu kì, so với nguyên tử phi kim, nguyên tử kim loại có',
      options: [
        'điện tích hạt nhân nhỏ hơn, bán kính lớn hơn, độ âm điện nhỏ hơn',
        'điện tích hạt nhân lớn hơn, bán kính nhỏ hơn, độ âm điện lớn hơn',
        'điện tích hạt nhân nhỏ hơn, bán kính nhỏ hơn, độ âm điện lớn hơn',
        'điện tích hạt nhân lớn hơn, bán kính lớn hơn, độ âm điện nhỏ hơn',
      ],
      answer: 0,
      hints: [
        'Trong một chu kì, kim loại đứng ở đầu chu kì.',
        'Đi từ trái sang phải trong chu kì, điện tích hạt nhân tăng, bán kính giảm.',
      ],
      solution:
        'Kim loại đứng đầu chu kì nên có điện tích hạt nhân nhỏ hơn, bán kính lớn hơn, dễ nhường electron, độ âm điện nhỏ hơn phi kim cùng chu kì.',
    },
    {
      type: 'choice',
      prompt: 'Ở nhiệt độ phòng, kim loại nào ở thể lỏng?',
      options: ['Thuỷ ngân (Hg)', 'Sodium (Na)', 'Copper (Cu)', 'Iron (Fe)'],
      answer: 0,
      hints: ['Kim loại này được dùng trong nhiệt kế kiểu cũ.'],
      solution: 'Ở nhiệt độ phòng, các kim loại đều ở thể rắn, riêng thuỷ ngân (Hg) ở thể lỏng.',
    },
    {
      type: 'number',
      prompt:
        'Trong tinh thể magnesium (mạng lục phương), khoảng trống giữa các nguyên tử chiếm bao nhiêu phần trăm thể tích?',
      answer: 26,
      unit: '%',
      hints: ['Độ đặc khít của mạng lục phương là 74%.'],
      solution: 'Khoảng trống chiếm $100\\% - 74\\% = 26\\%$ thể tích tinh thể.',
    },
  ],
  takeaways: [
    'Kim loại gồm các nguyên tố khối s (trừ H, He), khối d, khối f và một phần khối p.',
    'Nguyên tử kim loại thường có 1, 2 hoặc 3 electron lớp ngoài cùng, bán kính lớn, độ âm điện nhỏ, dễ nhường electron.',
    'Liên kết kim loại: lực hút tĩnh điện giữa electron hoá trị tự do và các ion dương ở nút mạng.',
    'Ba kiểu mạng phổ biến: lập phương tâm khối (số phối trí 8, đặc khít 68%), lập phương tâm mặt và lục phương (số phối trí 12, đặc khít 74%).',
  ],
};
