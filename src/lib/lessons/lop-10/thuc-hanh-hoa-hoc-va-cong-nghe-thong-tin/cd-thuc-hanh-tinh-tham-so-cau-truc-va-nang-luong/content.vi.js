/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dùng phần mềm MOPAC với phương pháp bán kinh nghiệm AM1 để tối ưu cấu trúc phân tử, tính nhiệt tạo thành và năng lượng phân tử, rồi so sánh với thực nghiệm.',
  intro:
    'Không dùng máy móc thí nghiệm, bằng máy tính làm thế nào để giải thích mối quan hệ giữa cấu tạo phân tử và tính chất của chất? Các phần mềm tính toán hoá học như MOPAC giải gần đúng các phương trình cho electron trong phân tử, từ đó cho biết độ dài liên kết, góc liên kết và năng lượng. Kết quả đó gần thực nghiệm đến đâu?',
  objectives: [
    'Nêu được ý nghĩa của tính toán hoá học và phương pháp bán kinh nghiệm.',
    'Tạo được file dữ liệu đầu vào, chạy MOPAC để tối ưu cấu trúc của phân tử đơn giản.',
    'Đọc được độ dài liên kết, góc liên kết, nhiệt tạo thành và năng lượng phân tử trong file kết quả.',
    'So sánh được kết quả tính với giá trị thực nghiệm, nhận xét về sai số.',
  ],
  sections: [
    {
      heading: 'Tính toán hoá học bằng phần mềm',
      blocks: [
        {
          type: 'p',
          text: 'MOPAC là phần mềm tính toán hoá học lượng tử, tính theo các phương pháp bán kinh nghiệm: giải gần đúng và dùng các tham số rút ra từ thực nghiệm để tính nhanh. AM1 là một phương pháp như vậy. Avogadro là phần mềm dùng để xem hình phân tử từ kết quả tính.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tối ưu hoá cấu trúc hình học',
          text: 'Là tìm cách sắp xếp các nguyên tử sao cho năng lượng của phân tử nhỏ nhất. Chương trình xuất phát từ một cấu trúc ban đầu, thay đổi dần độ dài và góc cho đến khi năng lượng không giảm được nữa.',
        },
      ],
    },
    {
      heading: 'Tạo file dữ liệu và chạy tính toán',
      blocks: [
        {
          type: 'p',
          text: 'File đầu vào soạn bằng Notepad hoặc WordPad, lưu trong thư mục làm việc. Dòng đầu là các từ khoá, dòng hai là tiêu đề, dòng ba để trống, từ dòng bốn là các nguyên tử. Với phân tử nước:',
        },
        {
          type: 'table',
          caption: 'Các từ khoá trong dòng đầu',
          head: ['Từ khoá', 'Ý nghĩa'],
          rows: [
            ['AM1', 'Dùng phương pháp bán kinh nghiệm AM1'],
            ['OPT', 'Tối ưu hoá cấu trúc hình học'],
            ['ENPART', 'Tính năng lượng phân tử'],
          ],
        },
        {
          type: 'table',
          caption:
            'Các nguyên tử của $\\mathrm{H_2O}$: giá trị ban đầu, kèm cờ $1$ là được tối ưu, cờ $0$ là giữ cố định',
          head: ['Nguyên tử', 'Độ dài (Å)', 'Góc', 'Cách đọc'],
          rows: [
            ['O$(1)$', '–', '–', 'Nguyên tử đầu tiên'],
            ['H$(2)$', '$0{,}97$, cờ $1$', '–', 'Liên kết với O$(1)$'],
            [
              'H$(3)$',
              '$0{,}97$, cờ $1$',
              '$104{,}5^\\circ$, cờ $1$',
              'Liên kết với O$(1)$, tạo góc với H$(2)$',
            ],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Soạn file, lưu với tên ví dụ H2O_AM1.txt.',
            'Đổi phần mở rộng thành .mop, được H2O_AM1.mop.',
            'Nhấp chuột phải vào file, chọn Open with, chọn MOPAC2016.exe.',
            'Khi chạy xong, MOPAC tạo file kết quả H2O_AM1.out trong cùng thư mục.',
          ],
        },
        { type: 'widget', name: 'toi-uu' },
      ],
    },
    {
      heading: 'Đọc và sử dụng file kết quả',
      blocks: [
        {
          type: 'p',
          text: 'Mở file H2O_AM1.out bằng WordPad rồi tìm các dòng sau. Phần mềm in số theo kiểu dấu chấm thập phân.',
        },
        {
          type: 'table',
          caption: 'Kết quả tính cho $\\mathrm{H_2O}$ bằng AM1',
          head: ['Tìm dòng', 'Giá trị', 'Ý nghĩa'],
          rows: [
            [
              'FINAL HEAT OF FORMATION',
              '$-59{,}25050$ kcal/mol, tức $-247{,}90410$ kJ/mol',
              'Nhiệt tạo thành của $\\mathrm{H_2O}$ (hơi)',
            ],
            ['ETOT (EONE + ETWO)', '$-348{,}5632$ eV', 'Năng lượng của phân tử'],
            ['Bảng toạ độ tối ưu', '$0{,}96127244$ Å', 'Độ dài liên kết $\\mathrm{O{-}H}$'],
            ['Bảng toạ độ tối ưu', '$103{,}5266356^\\circ$', 'Góc liên kết $\\mathrm{H{-}O{-}H}$'],
          ],
        },
        {
          type: 'p',
          text: 'Trong Avogadro, mở file kết quả, chọn View, Properties rồi Bond Properties để xem độ dài liên kết, Angle Properties để xem góc liên kết. Kết quả em thu được có thể lệch đôi chút tuỳ phiên bản phần mềm và giá trị khởi đầu.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sai số tương đối',
          text: '$\\delta = \\dfrac{|x_{\\text{tính}} - x_{\\text{tn}}|}{|x_{\\text{tn}}|} \\cdot 100\\%$, với $x_{\\text{tính}}$ là giá trị tính được, $x_{\\text{tn}}$ là giá trị thực nghiệm.',
        },
      ],
    },
    {
      heading: 'Tham số cấu trúc và năng lượng của một số phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Tính tương tự cho $\\mathrm{NH_3}$, $\\mathrm{CH_4}$ và một số phân tử khác rồi đặt cạnh giá trị thực nghiệm. Bảng trong phần khám phá cho thấy hai điều:',
        },
        {
          type: 'list',
          items: [
            'Xu hướng đúng: độ dài liên kết tăng dần $\\mathrm{O{-}H} < \\mathrm{N{-}H} < \\mathrm{C{-}H}$, phù hợp với bán kính nguyên tử giảm dần theo chu kì từ C đến O. Góc liên kết tăng dần từ $\\mathrm{H_2O}$ đến $\\mathrm{NH_3}$ đến $\\mathrm{CH_4}$, phù hợp với số cặp electron chưa liên kết giảm dần.',
            'Hình học khá chính xác, nhiệt tạo thành thì kém hơn: độ dài liên kết chỉ lệch vài phần trăm, trong khi nhiệt tạo thành của $\\mathrm{CH_4}$ lệch tới một nửa giá trị thực nghiệm.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tính toán không thay thế được thực nghiệm',
          text: 'Mỗi phương pháp có độ chính xác riêng. Ví dụ AM1 cho góc $\\mathrm{H{-}N{-}H}$ gần bằng góc tứ diện, lớn hơn thực nghiệm khoảng $2^\\circ$. Khi dùng kết quả tính, cần nói rõ phương pháp và so sánh với thực nghiệm nếu có.',
        },
      ],
    },
    {
      heading: 'Thực hành trên máy tính',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng MOPAC tính các tham số cấu trúc và năng lượng của $\\mathrm{H_2O}$, $\\mathrm{NH_3}$, $\\mathrm{CH_4}$ rồi so sánh với thực nghiệm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: máy tính có MOPAC và Avogadro; tạo một thư mục làm việc.',
            'Tạo các file .mop với từ khoá AM1 OPT ENPART cho ba phân tử.',
            'Chạy MOPAC, mở các file .out.',
            'Ghi vào bảng: độ dài liên kết, góc liên kết, nhiệt tạo thành, ETOT.',
            'Tính sai số tương đối so với giá trị thực nghiệm trong bài.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu, ảnh các phân tử từ Avogadro, và nhận xét về xu hướng độ dài, góc liên kết cũng như về độ chính xác của phương pháp.',
        },
      ],
    },
  ],
  explore: {
    title: 'So sánh AM1 với thực nghiệm',
    instruction:
      'Chọn tham số cần so sánh, đọc bảng rồi đoán phân tử có sai số tương đối lớn nhất bằng cách chọn nút ở đầu dòng. So sánh giữa hình học và nhiệt tạo thành.',
  },
  examples: [
    {
      problem:
        'File kết quả AM1 cho $\\mathrm{H_2O}$: độ dài $\\mathrm{O{-}H}$ là $0{,}961$ Å, góc liên kết là $103{,}5^\\circ$. Giá trị thực nghiệm là $0{,}958$ Å và $104{,}5^\\circ$. Tính sai số tương đối của mỗi tham số.',
      steps: [
        'Độ dài: $\\delta = \\dfrac{|0{,}961 - 0{,}958|}{0{,}958} \\cdot 100\\% \\approx 0{,}31\\%$.',
        'Góc: $\\delta = \\dfrac{|103{,}5 - 104{,}5|}{104{,}5} \\cdot 100\\% \\approx 0{,}96\\%$.',
      ],
      answer: 'Sai số khoảng $0{,}3\\%$ với độ dài và khoảng $1\\%$ với góc: khá gần thực nghiệm.',
    },
    {
      problem:
        'File kết quả ghi FINAL HEAT OF FORMATION $= -59{,}25050$ kcal/mol. Đổi ra kJ/mol, biết $1$ kcal $= 4{,}184$ kJ, rồi tính sai số so với giá trị thực nghiệm $-241{,}826$ kJ/mol.',
      steps: [
        'Đổi đơn vị: $-59{,}25050 \\cdot 4{,}184 \\approx -247{,}904$ kJ/mol, đúng như dòng kJ/mol trong file.',
        '$\\delta = \\dfrac{|-247{,}904 + 241{,}826|}{241{,}826} \\cdot 100\\% = \\dfrac{6{,}078}{241{,}826} \\cdot 100\\% \\approx 2{,}5\\%$.',
      ],
      answer: 'Nhiệt tạo thành tính được là $-247{,}9$ kJ/mol, sai số khoảng $2{,}5\\%$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong dòng từ khoá của file MOPAC, từ khoá OPT dùng để làm gì?',
      options: [
        'Tối ưu hoá cấu trúc hình học.',
        'Chọn phương pháp bán kinh nghiệm.',
        'Tính năng lượng phân tử.',
        'Mở file kết quả.',
      ],
      answer: 0,
      hints: ['OPT viết tắt của từ optimization.'],
      solution:
        'OPT là tối ưu hoá cấu trúc. Phương pháp do AM1 chọn, còn ENPART để tính năng lượng phân tử.',
    },
    {
      type: 'text',
      prompt: 'Từ khoá nào trong file đầu vào chọn phương pháp bán kinh nghiệm dùng trong bài?',
      accept: ['AM1'],
      hints: ['Gồm hai chữ cái và một chữ số.'],
      solution: 'Từ khoá AM1.',
    },
    {
      type: 'choice',
      prompt: 'Trong file đầu vào, số $0$ đặt sau một giá trị độ dài hoặc góc có nghĩa là gì?',
      options: [
        'Giá trị đó được giữ cố định.',
        'Giá trị đó được tối ưu.',
        'Giá trị đó bằng $0$.',
        'Nguyên tử đó không có liên kết.',
      ],
      answer: 0,
      hints: ['Cờ $1$ cho phép chương trình thay đổi giá trị.'],
      solution:
        'Cờ $0$ nghĩa là giữ cố định; cờ $1$ nghĩa là được tối ưu. Trong mô hình tối ưu của bài, thử giữ góc cố định để thấy nhiệt tạo thành không về được cực tiểu.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tính một phân tử bằng MOPAC.',
      items: [
        'Soạn file dữ liệu bằng Notepad.',
        'Đổi phần mở rộng thành .mop.',
        'Nhấp chuột phải, chọn Open with, chọn MOPAC2016.exe.',
        'Mở file .out bằng WordPad, đọc kết quả.',
      ],
      answer: [0, 1, 2, 3],
      hints: ['MOPAC cần file đầu vào đúng phần mở rộng, và chỉ tạo file .out sau khi chạy.'],
      solution: 'Soạn file, đổi phần mở rộng thành .mop, chạy bằng MOPAC, rồi đọc file .out.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt tạo thành của $\\mathrm{H_2O}$ (hơi) tính bằng AM1 là $-59{,}25$ kcal/mol. Đổi sang kJ/mol, biết $1$ kcal $= 4{,}184$ kJ. Làm tròn đến hàng phần mười.',
      answer: -247.9,
      tolerance: 0.05,
      hints: ['Nhân với $4{,}184$, giữ dấu âm.'],
      solution: '$-59{,}25 \\cdot 4{,}184 = -247{,}902 \\approx -247{,}9$ kJ/mol.',
    },
    {
      type: 'number',
      prompt:
        'AM1 cho độ dài $\\mathrm{N{-}H}$ là $0{,}998$ Å, thực nghiệm là $1{,}012$ Å. Tính sai số tương đối theo %, làm tròn đến hàng phần mười.',
      answer: 1.4,
      tolerance: 0.05,
      unit: '%',
      hints: [
        '$\\delta = \\dfrac{|x_{\\text{tính}} - x_{\\text{tn}}|}{|x_{\\text{tn}}|} \\cdot 100\\%$.',
      ],
      solution: '$\\delta = \\dfrac{0{,}014}{1{,}012} \\cdot 100\\% \\approx 1{,}4\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt tạo thành của $\\mathrm{CH_4}$: AM1 cho $-36{,}8$ kJ/mol, thực nghiệm là $-74{,}6$ kJ/mol. Tính sai số tương đối theo %, làm tròn đến hàng phần mười.',
      answer: 50.7,
      tolerance: 0.05,
      unit: '%',
      hints: ['Hiệu hai giá trị là $37{,}8$ kJ/mol. Chia cho độ lớn của giá trị thực nghiệm.'],
      solution:
        '$\\delta = \\dfrac{|-36{,}8 + 74{,}6|}{74{,}6} \\cdot 100\\% = \\dfrac{37{,}8}{74{,}6} \\cdot 100\\% \\approx 50{,}7\\%$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các liên kết theo độ dài tăng dần.',
      items: [
        '$\\mathrm{O{-}H}$ trong $\\mathrm{H_2O}$',
        '$\\mathrm{N{-}H}$ trong $\\mathrm{NH_3}$',
        '$\\mathrm{C{-}H}$ trong $\\mathrm{CH_4}$',
      ],
      answer: [0, 1, 2],
      hints: ['Từ C đến O trong chu kì 2, bán kính nguyên tử thay đổi thế nào?'],
      solution:
        'Bán kính giảm từ C đến N đến O nên độ dài tăng theo thứ tự $\\mathrm{O{-}H} < \\mathrm{N{-}H} < \\mathrm{C{-}H}$ ($0{,}96$; $1{,}01$; $1{,}09$ Å).',
    },
    {
      type: 'multi',
      prompt: 'Chọn những nhận xét đúng về kết quả tính bằng AM1 trong bài.',
      options: [
        'Độ dài liên kết khá gần với thực nghiệm.',
        'Xu hướng thay đổi của độ dài liên kết là đúng.',
        'Sai số về nhiệt tạo thành có thể rất lớn đối với phân tử nhỏ.',
        'Kết quả tính luôn trùng với thực nghiệm nên không cần đo nữa.',
      ],
      answers: [0, 1, 2],
      hints: ['So sánh cột sai số của độ dài với nhiệt tạo thành trong bảng khám phá.'],
      solution:
        'Độ dài liên kết lệch dưới $3\\%$ và đúng xu hướng; nhiệt tạo thành của $\\mathrm{CH_4}$ lệch khoảng một nửa. Do đó kết quả tính vẫn cần được đối chiếu với thực nghiệm.',
    },
  ],
  takeaways: [
    'MOPAC tính theo các phương pháp bán kinh nghiệm như AM1; Avogadro dùng để xem hình phân tử.',
    'File đầu vào gồm từ khoá (AM1 OPT ENPART), tiêu đề, dòng trống và các nguyên tử với cờ $1$ (tối ưu) hoặc $0$ (cố định).',
    'File kết quả cho nhiệt tạo thành (FINAL HEAT OF FORMATION), năng lượng phân tử (ETOT), độ dài và góc liên kết.',
    'Sai số tương đối so với thực nghiệm: $\\delta = \\dfrac{|x_{\\text{tính}} - x_{\\text{tn}}|}{|x_{\\text{tn}}|} \\cdot 100\\%$.',
    'AM1 cho hình học khá sát thực nghiệm và đúng xu hướng; nhiệt tạo thành của phân tử nhỏ có thể lệch nhiều.',
  ],
};
