/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dùng phần mềm ChemSketch để vẽ công thức cấu tạo, công thức Lewis, hiển thị cấu trúc 3D của phân tử và đọc độ dài, góc liên kết.',
  intro:
    'Viết công thức cấu tạo bằng tay thì chậm và khó chèn vào báo cáo. Hiện nay có nhiều phần mềm máy tính để vẽ công thức cấu tạo, công thức Lewis, rồi đưa vào Word hay PowerPoint. Một số phần mềm còn dựng được phân tử trong không gian và cho biết độ dài, góc liên kết. Góc $\\mathrm{H{-}C{-}H}$ trong methane trên công thức cấu tạo trông như $90^\\circ$; thực ra nó bằng bao nhiêu?',
  objectives: [
    'Sử dụng được phần mềm để vẽ công thức cấu tạo và công thức Lewis của một số chất đơn giản.',
    'Phân biệt được công thức cấu tạo trên mặt phẳng (2D) với mô hình cấu trúc trong không gian (3D).',
    'Hiển thị được cấu trúc 3D của phân tử, đọc được độ dài liên kết và góc liên kết.',
    'Nhận xét được mối liên hệ giữa cấu tạo với độ dài và góc liên kết của một số phân tử.',
  ],
  sections: [
    {
      heading: 'Phần mềm vẽ cấu trúc phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Các phần mềm thường dùng là ChemSketch, ChemDraw, ChemOffice (có Chem3D). Bài này làm theo ChemSketch, phần mềm có bản miễn phí cho học sinh. Vẽ xong, chọn công thức, sao chép rồi dán vào Word hoặc PowerPoint, hoặc lưu thành tệp ảnh bằng File, Save as.',
        },
        {
          type: 'table',
          caption: 'Công cụ cần nhớ trong ChemSketch',
          head: ['Công cụ', 'Dùng để'],
          rows: [
            ['Thanh nguyên tố bên trái', 'Chọn nhanh nguyên tố phổ biến như C, O, N'],
            ['Periodic Table of Elements', 'Chọn nguyên tố chưa có sẵn và chọn hoá trị của nó'],
            ['Structure, Draw Normal', 'Kéo chuột để vẽ liên kết giữa các nguyên tử'],
            ['Tools, Add Explicit Hydrogens', 'Hiện các liên kết với nguyên tử hydrogen'],
            ['Edit Atom Label (biểu tượng chữ A)', 'Gõ kí hiệu cho nguyên tử trên công thức'],
            ['3D Optimization', 'Tối ưu cấu trúc trong không gian'],
            ['2-Copy to 3D', 'Đưa cấu trúc sang cửa sổ 3D Viewer'],
          ],
        },
      ],
    },
    {
      heading: 'Vẽ công thức cấu tạo và công thức Lewis',
      blocks: [
        {
          type: 'p',
          text: 'Các bước vẽ công thức cấu tạo của ethane, ethene và ethyne:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Mở ChemSketch, chọn C ở thanh nguyên tố.',
            'Chọn Structure, Draw Normal rồi kéo chuột để vẽ liên kết $\\mathrm{C{-}C}$. Nhấp vào liên kết đơn để tăng thành liên kết đôi, nhấp tiếp để thành liên kết ba.',
            'Vào Tools, chọn Add Explicit Hydrogens để hiện các liên kết $\\mathrm{C{-}H}$.',
            'Chọn Edit Atom Label, nhấp vào nguyên tử carbon rồi gõ C để hiện kí hiệu.',
            'Lưu tệp bằng File, Save as.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Khi nào cần chọn hoá trị?',
          text: 'Carbon trong hợp chất hữu cơ luôn có hoá trị IV nên phần mềm tự xử lí. Với sulfuric acid, sulfur có nhiều hoá trị nên phải chọn S hoá trị VI trong bảng tuần hoàn của phần mềm trước khi vẽ.',
        },
        {
          type: 'p',
          text: 'Công thức Lewis có thêm các cặp electron chưa liên kết. Để vẽ cho ammonia: chọn N trong bảng tuần hoàn, kéo các liên kết $\\mathrm{N{-}H}$, mở cửa sổ Templates, chọn Structure, Lewis Structures, rồi lấy công cụ hai dấu chấm và nhấp phía trên nguyên tử N để thêm cặp electron chưa liên kết.',
        },
        {
          type: 'table',
          caption: 'Số cặp electron trên nguyên tử trung tâm',
          head: ['Phân tử', 'Nguyên tử trung tâm', 'Cặp liên kết', 'Cặp chưa liên kết'],
          rows: [
            ['$\\mathrm{CH_4}$', 'C', '$4$', '$0$'],
            ['$\\mathrm{NH_3}$', 'N', '$3$', '$1$'],
            ['$\\mathrm{H_2O}$', 'O', '$2$', '$2$'],
          ],
        },
      ],
    },
    {
      heading: 'Mô hình 2D, 3D và phép đo',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hai cách biểu diễn',
          text: 'Công thức cấu tạo (2D) cho biết thứ tự và loại liên kết giữa các nguyên tử trên mặt phẳng. Mô hình cấu trúc (3D) cho biết vị trí thật của các nguyên tử trong không gian, từ đó đọc được độ dài liên kết và góc liên kết.',
        },
        {
          type: 'p',
          text: 'Để hiển thị 3D trong ChemSketch: vẽ công thức, nhấp 3D Optimization, rồi nhấp 2-Copy to 3D. Cấu trúc hiện ra trong cửa sổ 3D Viewer, tại đây có thể xoay phân tử và hiển thị các tham số cấu trúc.',
        },
        {
          type: 'table',
          caption:
            'Giá trị thực nghiệm ở thể khí, làm tròn. Số đọc trên phần mềm có thể lệch một chút vì phần mềm tính gần đúng.',
          head: ['Phân tử', 'Độ dài liên kết (Å)', 'Góc liên kết', 'Dạng hình học'],
          rows: [
            ['$\\mathrm{CH_4}$', '$\\mathrm{C{-}H}$: $1{,}09$', '$109{,}5^\\circ$', 'Tứ diện đều'],
            [
              '$\\mathrm{NH_3}$',
              '$\\mathrm{N{-}H}$: $1{,}01$',
              '$106{,}7^\\circ$',
              'Chóp tam giác',
            ],
            ['$\\mathrm{H_2O}$', '$\\mathrm{O{-}H}$: $0{,}96$', '$104{,}5^\\circ$', 'Gấp khúc'],
            [
              '$\\mathrm{C_2H_6}$',
              '$\\mathrm{C{-}C}$: $1{,}54$',
              '$\\mathrm{H{-}C{-}C}$: $111{,}2^\\circ$',
              'Hai tứ diện nối đỉnh',
            ],
            [
              '$\\mathrm{C_2H_4}$',
              '$\\mathrm{C{=}C}$: $1{,}34$',
              '$\\mathrm{H{-}C{=}C}$: $121{,}3^\\circ$',
              'Phẳng',
            ],
            [
              '$\\mathrm{C_2H_2}$',
              '$\\mathrm{C{\\equiv}C}$: $1{,}20$',
              '$180^\\circ$',
              'Đường thẳng',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Cùng là liên kết giữa hai carbon, bậc liên kết càng cao thì độ dài càng ngắn: $\\mathrm{C{-}C} > \\mathrm{C{=}C} > \\mathrm{C{\\equiv}C}$.',
            'Trong dãy $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2O}$, số cặp electron chưa liên kết tăng từ $0$ đến $2$, chúng đẩy mạnh các cặp liên kết nên góc liên kết giảm dần.',
            'Bán kính nguyên tử giảm từ C đến N đến O nên độ dài liên kết với H cũng giảm dần.',
          ],
        },
      ],
    },
    {
      heading: 'Thực hành trên máy tính',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng ChemSketch (hoặc phần mềm tương tự) biểu diễn cấu tạo một số chất, đọc tham số cấu trúc rồi rút ra nhận xét.',
        },
        {
          type: 'p',
          text: 'Chuẩn bị: máy tính đã cài ChemSketch; một tệp Word để làm báo cáo.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vẽ công thức cấu tạo của $\\mathrm{C_3H_8}$, $\\mathrm{C_3H_6}$, $\\mathrm{C_3H_4}$, $\\mathrm{H_2SO_4}$ và $\\mathrm{HNO_3}$.',
            'Vẽ công thức Lewis của $\\mathrm{NH_3}$ và $\\mathrm{H_2O}$.',
            'Hiển thị cấu trúc 3D và các tham số cấu trúc của $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2O}$.',
            'Ghi vào bảng độ dài liên kết và góc liên kết đọc được, đặt cạnh giá trị thực nghiệm trong bài.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: tệp Word gồm các công thức đã vẽ, ảnh chụp cửa sổ 3D Viewer, bảng số liệu và nhận xét: góc liên kết thay đổi thế nào theo số cặp electron chưa liên kết, số đọc trên phần mềm lệch thực nghiệm bao nhiêu.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xoay phân tử, đo độ dài và góc',
    instruction:
      'Chọn phân tử, kéo để xoay. Chạm hai nguyên tử để đo độ dài, chạm ba nguyên tử để đo góc tại nguyên tử giữa. Đổi sang công thức 2D để thấy số đo trên hình phẳng khác với phân tử thật.',
  },
  examples: [
    {
      problem:
        'Trên công thức cấu tạo của methane, bốn liên kết $\\mathrm{C{-}H}$ vẽ vuông góc với nhau. Có thể kết luận góc liên kết $\\mathrm{H{-}C{-}H}$ bằng $90^\\circ$ không?',
      steps: [
        'Công thức cấu tạo được vẽ trên mặt phẳng, chỉ cho biết C liên kết với bốn nguyên tử H.',
        'Trong không gian, bốn cặp electron liên kết đẩy nhau và phân bố xa nhau nhất, hướng về bốn đỉnh của một tứ diện đều.',
        'Đo trên mô hình 3D, tất cả các góc $\\mathrm{H{-}C{-}H}$ đều bằng $109{,}5^\\circ$.',
      ],
      answer:
        'Không. Góc liên kết trong $\\mathrm{CH_4}$ là $109{,}5^\\circ$, không phải $90^\\circ$.',
    },
    {
      problem:
        'Trên mô hình 3D của $\\mathrm{CH_4}$, hai nguyên tử H cách nguyên tử C $1{,}09$ Å và tạo góc $109{,}5^\\circ$. Tính khoảng cách giữa hai nguyên tử H đó.',
      steps: [
        'Tam giác $\\mathrm{HCH}$ cân tại C, góc ở đỉnh là $109{,}5^\\circ$. Kẻ đường cao từ C thì được hai tam giác vuông.',
        'Một nửa khoảng cách là $1{,}09 \\cdot \\sin\\dfrac{109{,}5^\\circ}{2} = 1{,}09 \\cdot \\sin 54{,}75^\\circ \\approx 0{,}89$ Å.',
        'Khoảng cách cần tìm là $2 \\cdot 0{,}89 = 1{,}78$ Å.',
      ],
      answer:
        'Khoảng $1{,}78$ Å. Hai nguyên tử H không liên kết với nhau nên đây là khoảng cách, không phải độ dài liên kết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Trong ChemSketch, sau khi vẽ khung carbon, thao tác nào hiện các liên kết $\\mathrm{C{-}H}$?',
      options: [
        'Tools, Add Explicit Hydrogens',
        'File, Save as',
        '2-Copy to 3D',
        'Edit Atom Label',
      ],
      answer: 0,
      hints: ['Tìm lệnh có từ Hydrogens.'],
      solution:
        'Lệnh Add Explicit Hydrogens trong menu Tools hiện các nguyên tử H. Edit Atom Label chỉ để gõ kí hiệu nguyên tử.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao vẽ $\\mathrm{C_2H_6}$, $\\mathrm{C_2H_4}$, $\\mathrm{C_2H_2}$ không cần bước chọn hoá trị cho carbon?',
      options: [
        'Carbon trong hợp chất hữu cơ luôn có hoá trị IV.',
        'Carbon không có hoá trị.',
        'Phần mềm không vẽ được hoá trị của carbon.',
        'Hoá trị của carbon thay đổi theo số nguyên tử H.',
      ],
      answer: 0,
      hints: ['Mỗi nguyên tử carbon tạo mấy liên kết trong các chất này?'],
      solution:
        'Carbon trong hợp chất hữu cơ luôn có hoá trị IV, tức tạo $4$ liên kết, kể cả khi có liên kết đôi hay ba.',
    },
    {
      type: 'number',
      prompt:
        'Khi vẽ công thức cấu tạo của $\\mathrm{H_2SO_4}$, cần chọn sulfur có hoá trị bao nhiêu?',
      answer: 6,
      hints: [
        'Đếm tổng số liên kết quanh S: hai liên kết đôi với O và hai liên kết đơn với nhóm OH.',
      ],
      solution: 'Tổng số liên kết của S là $2 \\cdot 2 + 2 \\cdot 1 = 6$, nên S có hoá trị VI.',
    },
    {
      type: 'number',
      prompt:
        'Công thức Lewis của phân tử nước có bao nhiêu cặp electron chưa liên kết trên nguyên tử oxygen?',
      answer: 2,
      hints: ['Oxygen có $6$ electron lớp ngoài cùng, dùng $2$ electron để tạo hai liên kết.'],
      solution: 'Còn $6 - 2 = 4$ electron, tức $2$ cặp electron chưa liên kết.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các thao tác để hiển thị cấu trúc 3D của một phân tử trong ChemSketch.',
      items: [
        'Vẽ công thức cấu tạo của phân tử.',
        'Nhấp 3D Optimization.',
        'Nhấp 2-Copy to 3D.',
        'Xoay phân tử trong 3D Viewer và hiển thị các tham số.',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Phải có công thức thì mới tối ưu được; phải tối ưu rồi mới đưa sang cửa sổ xem.'],
      solution:
        'Vẽ công thức, tối ưu cấu trúc bằng 3D Optimization, chuyển sang cửa sổ xem bằng 2-Copy to 3D, rồi đọc tham số trong 3D Viewer.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phân tử với dạng hình học của nó.',
      left: ['$\\mathrm{CH_4}$', '$\\mathrm{NH_3}$', '$\\mathrm{H_2O}$', '$\\mathrm{C_2H_2}$'],
      right: ['Tứ diện đều', 'Chóp tam giác', 'Gấp khúc', 'Đường thẳng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đếm số cặp electron chưa liên kết trên nguyên tử trung tâm.'],
      solution:
        '$\\mathrm{CH_4}$ có $4$ cặp liên kết: tứ diện đều. $\\mathrm{NH_3}$ có thêm $1$ cặp chưa liên kết: chóp tam giác. $\\mathrm{H_2O}$ có $2$ cặp chưa liên kết: gấp khúc. $\\mathrm{C_2H_2}$ có góc $180^\\circ$: đường thẳng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các liên kết giữa hai carbon theo độ dài tăng dần.',
      items: [
        '$\\mathrm{C{\\equiv}C}$ trong ethyne',
        '$\\mathrm{C{=}C}$ trong ethene',
        '$\\mathrm{C{-}C}$ trong ethane',
      ],
      answer: [0, 1, 2],
      hints: [
        'Liên kết càng nhiều cặp electron dùng chung thì hai nguyên tử càng bị kéo lại gần nhau.',
      ],
      solution: 'Theo số đo: $1{,}20$ Å $<$ $1{,}34$ Å $<$ $1{,}54$ Å.',
    },
    {
      type: 'choice',
      prompt: 'Góc liên kết nào có giá trị nhỏ nhất?',
      options: [
        '$\\mathrm{H{-}O{-}H}$ trong nước',
        '$\\mathrm{H{-}N{-}H}$ trong ammonia',
        '$\\mathrm{H{-}C{-}H}$ trong methane',
        '$\\mathrm{H{-}C{\\equiv}C}$ trong ethyne',
      ],
      answer: 0,
      hints: [
        'Cặp electron chưa liên kết đẩy mạnh hơn cặp liên kết. Phân tử nào có nhiều cặp chưa liên kết nhất?',
      ],
      solution:
        'Nước có $2$ cặp electron chưa liên kết nên góc nhỏ nhất, $104{,}5^\\circ$. Tiếp theo là $106{,}7^\\circ$, $109{,}5^\\circ$ và $180^\\circ$.',
    },
    {
      type: 'number',
      prompt:
        'Trên mô hình 3D của ammonia, $\\mathrm{N{-}H} = 1{,}01$ Å và góc $\\mathrm{H{-}N{-}H} = 106{,}7^\\circ$. Tính khoảng cách giữa hai nguyên tử H theo Å, làm tròn đến hàng phần trăm.',
      answer: 1.62,
      tolerance: 0.01,
      unit: 'Å',
      hints: [
        'Tam giác $\\mathrm{HNH}$ cân tại N; kẻ đường cao từ N.',
        'Khoảng cách bằng $2 \\cdot 1{,}01 \\cdot \\sin\\dfrac{106{,}7^\\circ}{2}$.',
      ],
      solution:
        '$d = 2 \\cdot 1{,}01 \\cdot \\sin 53{,}35^\\circ \\approx 2 \\cdot 1{,}01 \\cdot 0{,}802 \\approx 1{,}62$ Å.',
    },
  ],
  takeaways: [
    'ChemSketch, ChemDraw, ChemOffice giúp vẽ công thức cấu tạo, công thức Lewis và chèn vào Word, PowerPoint.',
    'Công thức 2D cho biết nguyên tử nào liên kết với nguyên tử nào; góc trên hình phẳng không phải góc thật.',
    'Mô hình 3D cho đọc độ dài và góc liên kết: dùng 3D Optimization rồi 2-Copy to 3D.',
    'Bậc liên kết tăng thì độ dài giảm: $\\mathrm{C{-}C} > \\mathrm{C{=}C} > \\mathrm{C{\\equiv}C}$.',
    'Góc liên kết giảm dần theo số cặp electron chưa liên kết: $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2O}$.',
  ],
};
