/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phản ứng hạt nhân, phóng xạ tự nhiên và nhân tạo, cách viết phương trình phản ứng hạt nhân theo định luật bảo toàn, chu kì bán rã và ứng dụng của đồng vị phóng xạ.',
  intro:
    'Trong y học, bác sĩ cho người bệnh dùng một lượng rất nhỏ đồng vị phóng xạ để chẩn đoán bệnh tuyến giáp hoặc tìm khối u. Bức xạ này đến từ những biến đổi ngay trong hạt nhân nguyên tử, khác hẳn phản ứng hoá học chỉ liên quan đến lớp vỏ electron. Bài này giúp em viết được các phương trình đó và tính được lượng chất còn lại theo thời gian.',
  objectives: [
    'Nêu được khái niệm phản ứng hạt nhân, phóng xạ tự nhiên, phóng xạ nhân tạo và phân biệt được phản ứng hạt nhân với phản ứng hoá học.',
    'Viết được phương trình phản ứng hạt nhân đơn giản dựa vào định luật bảo toàn số khối và bảo toàn điện tích.',
    'Giải thích được chu kì bán rã và tính được lượng đồng vị còn lại sau một thời gian.',
    'Nêu được một số ứng dụng của đồng vị phóng xạ và phản ứng hạt nhân.',
  ],
  sections: [
    {
      heading: 'Phản ứng hạt nhân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng hạt nhân',
          text: 'Phản ứng hạt nhân là quá trình biến đổi hạt nhân của nguyên tử, tạo thành hạt nhân của nguyên tố khác hoặc đồng vị khác. Hạt nhân được kí hiệu là ${}^{A}_{Z}\\mathrm{X}$, với $A$ là số khối và $Z$ là số đơn vị điện tích hạt nhân.',
        },
        {
          type: 'table',
          caption: 'Kí hiệu các hạt thường gặp',
          head: ['Hạt', 'Kí hiệu', 'Số khối', 'Điện tích'],
          rows: [
            ['Hạt $\\alpha$', '${}^{4}_{2}\\mathrm{He}$', '$4$', '$+2$'],
            ['Hạt $\\beta$ (electron)', '${}^{0}_{-1}\\mathrm{e}$', '$0$', '$-1$'],
            ['Positron (electron dương)', '${}^{0}_{1}\\mathrm{e}$', '$0$', '$+1$'],
            ['Neutron', '${}^{1}_{0}\\mathrm{n}$', '$1$', '$0$'],
            ['Proton', '${}^{1}_{1}\\mathrm{H}$', '$1$', '$+1$'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Định luật bảo toàn trong phản ứng hạt nhân',
          text: 'Tổng số khối ở hai vế bằng nhau. Tổng số đơn vị điện tích ở hai vế bằng nhau.',
        },
        {
          type: 'table',
          caption: 'So sánh phản ứng hoá học và phản ứng hạt nhân',
          head: ['Tiêu chí', 'Phản ứng hoá học', 'Phản ứng hạt nhân'],
          rows: [
            ['Phần thay đổi', 'Lớp vỏ electron', 'Hạt nhân'],
            ['Nguyên tố', 'Được bảo toàn', 'Có thể biến thành nguyên tố khác'],
            ['Năng lượng kèm theo', 'Tương đối nhỏ', 'Rất lớn'],
            [
              'Tốc độ',
              'Phụ thuộc nhiệt độ, áp suất, xúc tác',
              'Phóng xạ tự nhiên gần như không phụ thuộc các yếu tố này',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Phóng xạ tự nhiên',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1896, Becquerel phát hiện muối uranium tự phát ra bức xạ. Phóng xạ tự nhiên là quá trình hạt nhân không bền của đồng vị có sẵn trong tự nhiên tự biến đổi và phát ra các bức xạ, chủ yếu là tia $\\alpha$, tia $\\beta$ và tia $\\gamma$.',
        },
        {
          type: 'table',
          caption: 'Hạt nhân thay đổi thế nào khi phát ra bức xạ',
          head: ['Bức xạ', 'Số khối', 'Điện tích hạt nhân', 'Ví dụ'],
          rows: [
            [
              '$\\alpha$',
              'Giảm $4$',
              'Giảm $2$',
              '${}^{238}_{92}\\mathrm{U} \\rightarrow {}^{234}_{90}\\mathrm{Th} + {}^{4}_{2}\\mathrm{He}$',
            ],
            [
              '$\\beta$',
              'Không đổi',
              'Tăng $1$',
              '${}^{14}_{6}\\mathrm{C} \\rightarrow {}^{14}_{7}\\mathrm{N} + {}^{0}_{-1}\\mathrm{e}$',
            ],
            ['$\\gamma$', 'Không đổi', 'Không đổi', 'Đi kèm các phân rã khác, là sóng điện từ'],
          ],
        },
        {
          type: 'p',
          text: 'Khi phóng xạ $\\beta$, một neutron trong hạt nhân biến thành một proton và một electron; electron bay ra nên điện tích hạt nhân tăng $1$ còn số khối không đổi.',
        },
      ],
    },
    {
      heading: 'Phóng xạ nhân tạo và phương trình phản ứng hạt nhân',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng hạt nhân nhân tạo do con người gây ra, bằng cách dùng các hạt như $\\alpha$, proton, neutron bắn phá hạt nhân. Năm 1919, Rutherford thực hiện phản ứng biến đổi hạt nhân nhân tạo đầu tiên. Năm 1934, vợ chồng Joliot-Curie tạo ra đồng vị phóng xạ nhân tạo đầu tiên.',
        },
        {
          type: 'tex',
          tex: '{}^{14}_{7}\\mathrm{N} + {}^{4}_{2}\\mathrm{He} \\rightarrow {}^{17}_{8}\\mathrm{O} + {}^{1}_{1}\\mathrm{H}',
        },
        {
          type: 'tex',
          tex: '{}^{27}_{13}\\mathrm{Al} + {}^{4}_{2}\\mathrm{He} \\rightarrow {}^{30}_{15}\\mathrm{P} + {}^{1}_{0}\\mathrm{n}, \\qquad {}^{30}_{15}\\mathrm{P} \\rightarrow {}^{30}_{14}\\mathrm{Si} + {}^{0}_{1}\\mathrm{e}',
        },
        {
          type: 'list',
          items: [
            'Phản ứng phân hạch: một hạt nhân nặng vỡ thành các hạt nhân nhẹ hơn, sinh neutron và toả năng lượng rất lớn. Ví dụ ${}^{235}_{92}\\mathrm{U} + {}^{1}_{0}\\mathrm{n} \\rightarrow {}^{141}_{56}\\mathrm{Ba} + {}^{92}_{36}\\mathrm{Kr} + 3{}^{1}_{0}\\mathrm{n}$.',
            'Phản ứng tổng hợp hạt nhân: các hạt nhân nhẹ kết hợp thành hạt nhân nặng hơn, cũng toả năng lượng rất lớn. Ví dụ ${}^{2}_{1}\\mathrm{H} + {}^{3}_{1}\\mathrm{H} \\rightarrow {}^{4}_{2}\\mathrm{He} + {}^{1}_{0}\\mathrm{n}$.',
          ],
        },
        {
          type: 'p',
          text: 'Hãy tự tìm hạt còn thiếu trong các phương trình dưới đây bằng hai định luật bảo toàn.',
        },
        { type: 'widget', name: 'can-bang' },
      ],
    },
    {
      heading: 'Chu kì bán rã',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chu kì bán rã',
          text: 'Chu kì bán rã $T$ của một đồng vị phóng xạ là thời gian để một nửa số hạt nhân trong mẫu phân rã. Giá trị này là đặc trưng của từng đồng vị và gần như không phụ thuộc nhiệt độ hay trạng thái hoá học.',
        },
        {
          type: 'p',
          text: 'Sau mỗi chu kì, số hạt nhân còn lại giảm một nửa. Với $N_0$ là số hạt nhân ban đầu, sau thời gian $t$ số hạt nhân còn lại là:',
        },
        { type: 'tex', tex: 'N = \\dfrac{N_0}{2^{t/T}}' },
        {
          type: 'table',
          caption: 'Chu kì bán rã của một số đồng vị',
          head: ['Đồng vị', 'Chu kì bán rã'],
          rows: [
            ['${}^{131}_{53}\\mathrm{I}$', 'Khoảng $8$ ngày'],
            ['${}^{32}_{15}\\mathrm{P}$', 'Khoảng $14{,}3$ ngày'],
            ['${}^{60}_{27}\\mathrm{Co}$', 'Khoảng $5{,}27$ năm'],
            ['${}^{14}_{6}\\mathrm{C}$', 'Khoảng $5\\,730$ năm'],
            ['${}^{238}_{92}\\mathrm{U}$', 'Khoảng $4{,}47$ tỉ năm'],
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng của đồng vị phóng xạ và phản ứng hạt nhân',
      blocks: [
        {
          type: 'list',
          items: [
            'Y học: ${}^{131}\\mathrm{I}$ để chẩn đoán và điều trị bệnh tuyến giáp; ${}^{60}\\mathrm{Co}$ phát tia $\\gamma$ xuyên sâu để điều trị khối u; đồng vị phosphorus phóng xạ để điều trị một số bệnh ngoài da.',
            'Định tuổi: tỉ lệ ${}^{14}\\mathrm{C}$ còn lại cho biết tuổi của mẫu gỗ, xương cổ.',
            'Năng lượng: ${}^{235}\\mathrm{U}$, ${}^{239}\\mathrm{Pu}$ là nhiên liệu của lò phản ứng hạt nhân trong nhà máy điện.',
            'Nông nghiệp và công nghiệp: chiếu xạ bảo quản thực phẩm, tạo giống đột biến, dò khuyết tật trong vật liệu, đánh dấu đường đi của chất.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn bức xạ',
          text: 'Bức xạ liều cao gây hại cho tế bào sống. Đồng vị phóng xạ chỉ được dùng theo quy trình chuyên môn nghiêm ngặt. Khi gặp biển báo phóng xạ, không được tự ý đến gần hoặc chạm vào vật có biển báo.',
        },
      ],
    },
    {
      heading: 'Dự án: Mô phỏng phóng xạ bằng đồng xu',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: thấy rằng phân rã là ngẫu nhiên với từng hạt nhân nhưng cả mẫu lại tuân theo chu kì bán rã rất đều. Mỗi đồng xu đóng vai một hạt nhân, mỗi lượt gieo đóng vai một chu kì bán rã.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: $100$ đồng xu (hoặc nắp chai có đánh dấu một mặt), một hộp, giấy kẻ ô hoặc bảng tính.',
            'Gieo toàn bộ đồng xu, loại ra những đồng ngửa (đã phân rã), đếm và ghi số đồng còn lại.',
            'Gieo tiếp số đồng còn lại, lặp đến khi còn dưới $3$ đồng.',
            'Vẽ đồ thị số đồng còn lại theo số lượt, vẽ thêm đường $N = 100/2^{n}$ để so sánh. Lặp lại với cả nhóm rồi lấy trung bình.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu, đồ thị và nhận xét: đồ thị của nhóm có gần đường lí thuyết hơn đồ thị từng người không, vì sao? Thêm một trang giới thiệu một ứng dụng của đồng vị phóng xạ tại Việt Nam, ví dụ Lò phản ứng hạt nhân Đà Lạt.',
        },
      ],
    },
  ],
  explore: {
    title: 'Quan sát chu kì bán rã',
    instruction:
      'Chọn một đồng vị, bấm "Phát" hoặc kéo thanh thời gian. Hãy dừng lại ở các mốc $T$, $2T$, $3T$: số hạt nhân còn lại có đúng bằng $\\dfrac{1}{2}$, $\\dfrac{1}{4}$, $\\dfrac{1}{8}$ số ban đầu không? Bấm "Mẫu mới" để so sánh các lần chạy.',
  },
  examples: [
    {
      problem:
        'Hoàn thành phương trình: ${}^{32}_{15}\\mathrm{P} \\rightarrow \\ ? + {}^{0}_{-1}\\mathrm{e}$.',
      steps: [
        'Gọi hạt nhân cần tìm là ${}^{A}_{Z}\\mathrm{X}$.',
        'Bảo toàn số khối: $32 = A + 0$, nên $A = 32$.',
        'Bảo toàn điện tích: $15 = Z - 1$, nên $Z = 16$; đó là sulfur.',
      ],
      answer:
        '${}^{32}_{15}\\mathrm{P} \\rightarrow {}^{32}_{16}\\mathrm{S} + {}^{0}_{-1}\\mathrm{e}$.',
    },
    {
      problem:
        'Hạt nhân ${}^{233}_{90}\\mathrm{Th}$ phát ra liên tiếp hai electron, tạo ra một đồng vị uranium. Viết phương trình các quá trình.',
      steps: [
        'Mỗi lần phát electron, số khối không đổi và $Z$ tăng $1$.',
        'Lần thứ nhất: ${}^{233}_{90}\\mathrm{Th} \\rightarrow {}^{233}_{91}\\mathrm{Pa} + {}^{0}_{-1}\\mathrm{e}$.',
        'Lần thứ hai: ${}^{233}_{91}\\mathrm{Pa} \\rightarrow {}^{233}_{92}\\mathrm{U} + {}^{0}_{-1}\\mathrm{e}$.',
      ],
      answer: 'Đồng vị tạo thành là ${}^{233}_{92}\\mathrm{U}$.',
    },
    {
      problem:
        'Một mẫu gỗ cổ chỉ còn $\\dfrac{1}{8}$ lượng ${}^{14}\\mathrm{C}$ so với gỗ tươi. Biết chu kì bán rã của ${}^{14}\\mathrm{C}$ là $5\\,730$ năm, tính tuổi mẫu gỗ.',
      steps: [
        'Vì $\\dfrac{1}{8} = \\dfrac{1}{2^3}$ nên đã trôi qua $3$ chu kì bán rã.',
        'Tuổi mẫu gỗ: $t = 3 \\cdot 5\\,730 = 17\\,190$ năm.',
      ],
      answer: 'Khoảng $17\\,190$ năm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hạt $\\alpha$ có kí hiệu là gì?',
      options: [
        '${}^{0}_{-1}\\mathrm{e}$',
        '${}^{1}_{0}\\mathrm{n}$',
        '${}^{4}_{2}\\mathrm{He}$',
        '${}^{1}_{1}\\mathrm{H}$',
      ],
      answer: 2,
      hints: ['Hạt $\\alpha$ là hạt nhân của khí hiếm nhẹ nhất có $2$ proton.'],
      solution: 'Hạt $\\alpha$ là hạt nhân helium: ${}^{4}_{2}\\mathrm{He}$.',
    },
    {
      type: 'number',
      prompt:
        'Trong phản ứng ${}^{235}_{92}\\mathrm{U} + {}^{1}_{0}\\mathrm{n} \\rightarrow {}^{137}_{52}\\mathrm{Te} + {}^{A}_{Z}\\mathrm{X} + 2{}^{1}_{0}\\mathrm{n}$, số khối $A$ của X bằng bao nhiêu?',
      answer: 97,
      hints: [
        'Tổng số khối vế trái bằng tổng số khối vế phải.',
        'Đừng quên hai neutron ở vế phải.',
      ],
      solution:
        '$235 + 1 = 137 + A + 2 \\cdot 1$, nên $A = 97$. Hơn nữa $92 = 52 + Z$ nên $Z = 40$: X là ${}^{97}_{40}\\mathrm{Zr}$.',
    },
    {
      type: 'number',
      prompt:
        'Plutonium ${}^{239}_{94}\\mathrm{Pu}$ phóng xạ $\\alpha$ tạo thành hạt nhân X. Số khối của X là bao nhiêu?',
      answer: 235,
      hints: ['Mỗi lần phóng xạ $\\alpha$, số khối giảm một lượng cố định.'],
      solution:
        '${}^{239}_{94}\\mathrm{Pu} \\rightarrow {}^{235}_{92}\\mathrm{U} + {}^{4}_{2}\\mathrm{He}$, nên X có số khối $235$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong tầng cao khí quyển, neutron của tia vũ trụ biến ${}^{14}_{7}\\mathrm{N}$ thành ${}^{14}_{6}\\mathrm{C}$. Hạt bay ra kèm theo là gì?',
      options: ['Hạt $\\alpha$', 'Proton', 'Neutron', 'Electron'],
      answer: 1,
      hints: [
        'Viết phương trình rồi dùng hai định luật bảo toàn để tìm số khối và điện tích của hạt đó.',
      ],
      solution:
        '${}^{14}_{7}\\mathrm{N} + {}^{1}_{0}\\mathrm{n} \\rightarrow {}^{14}_{6}\\mathrm{C} + {}^{A}_{Z}\\mathrm{X}$ với $A = 14 + 1 - 14 = 1$, $Z = 7 - 6 = 1$: đó là proton ${}^{1}_{1}\\mathrm{H}$.',
    },
    {
      type: 'number',
      prompt:
        '${}^{131}\\mathrm{I}$ có chu kì bán rã $8$ ngày. Sau $24$ ngày, lượng ${}^{131}\\mathrm{I}$ còn lại bằng bao nhiêu phần trăm lượng ban đầu?',
      answer: 12.5,
      tolerance: 0.01,
      unit: '%',
      hints: ['Tính xem $24$ ngày bằng bao nhiêu chu kì.', 'Mỗi chu kì lượng chất giảm một nửa.'],
      solution: '$24 : 8 = 3$ chu kì, nên còn $\\dfrac{1}{2^3} = \\dfrac{1}{8} = 12{,}5\\%$.',
    },
    {
      type: 'number',
      prompt:
        '${}^{60}\\mathrm{Co}$ có chu kì bán rã $5{,}27$ năm. Một mẫu chứa $16$ g ${}^{60}\\mathrm{Co}$, sau $15{,}81$ năm còn bao nhiêu gam ${}^{60}\\mathrm{Co}$?',
      answer: 2,
      tolerance: 0.01,
      unit: 'g',
      hints: ['Chia $15{,}81$ cho chu kì bán rã để tìm số chu kì.'],
      solution: '$15{,}81 : 5{,}27 = 3$ chu kì, nên còn $\\dfrac{16}{2^3} = 2$ g.',
    },
    {
      type: 'number',
      prompt:
        '${}^{131}\\mathrm{I}$ có chu kì bán rã $8$ ngày. Sau $12$ ngày, lượng ${}^{131}\\mathrm{I}$ còn lại khoảng bao nhiêu phần trăm? (làm tròn đến một chữ số thập phân)',
      answer: 35.4,
      tolerance: 0.1,
      unit: '%',
      hints: [
        '$12$ ngày không phải số nguyên lần chu kì nên phải dùng công thức.',
        'Tính $2^{t/T}$ với $t/T = 1{,}5$.',
      ],
      solution:
        '$\\dfrac{N}{N_0} = \\dfrac{1}{2^{1{,}5}} \\approx 0{,}354$, tức khoảng $35{,}4\\%$. Không phải $25\\%$, vì lượng giảm không đều theo thời gian.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đồng vị với một ứng dụng quan trọng của nó.',
      left: [
        '${}^{131}\\mathrm{I}$',
        '${}^{60}\\mathrm{Co}$',
        '${}^{14}\\mathrm{C}$',
        '${}^{235}\\mathrm{U}$',
      ],
      right: [
        'Chẩn đoán và điều trị bệnh tuyến giáp',
        'Điều trị khối u bằng tia $\\gamma$',
        'Xác định tuổi mẫu vật cổ',
        'Nhiên liệu của lò phản ứng hạt nhân',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Iodine tập trung ở tuyến giáp. Carbon có trong mọi sinh vật.'],
      solution:
        '${}^{131}\\mathrm{I}$: bệnh tuyến giáp. ${}^{60}\\mathrm{Co}$: phát tia $\\gamma$ điều trị khối u. ${}^{14}\\mathrm{C}$: định tuổi mẫu vật. ${}^{235}\\mathrm{U}$: nhiên liệu hạt nhân.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về phản ứng hạt nhân?',
      options: [
        'Có thể tạo thành nguyên tố mới.',
        'Thường kèm theo năng lượng rất lớn so với phản ứng hoá học.',
        'Chỉ làm thay đổi lớp vỏ electron.',
        'Tổng số khối và tổng số đơn vị điện tích ở hai vế được bảo toàn.',
      ],
      answers: [0, 1, 3],
      hints: ['Phản ứng hoá học mới là phản ứng chỉ liên quan đến lớp vỏ electron.'],
      solution:
        'Phản ứng hạt nhân biến đổi hạt nhân, nên có thể tạo nguyên tố mới, năng lượng rất lớn và vẫn tuân theo hai định luật bảo toàn. Phát biểu "chỉ thay đổi lớp vỏ electron" là của phản ứng hoá học.',
    },
  ],
  takeaways: [
    'Phản ứng hạt nhân biến đổi hạt nhân nguyên tử; tổng số khối và tổng số đơn vị điện tích ở hai vế được bảo toàn.',
    'Phóng xạ $\\alpha$ làm $A$ giảm $4$, $Z$ giảm $2$; phóng xạ $\\beta$ giữ nguyên $A$, $Z$ tăng $1$; tia $\\gamma$ không đổi $A$ và $Z$.',
    'Phóng xạ tự nhiên xảy ra với đồng vị có sẵn; phóng xạ nhân tạo do con người bắn phá hạt nhân tạo ra.',
    'Sau mỗi chu kì bán rã $T$, số hạt nhân còn lại giảm một nửa: $N = N_0 / 2^{t/T}$.',
  ],
};
