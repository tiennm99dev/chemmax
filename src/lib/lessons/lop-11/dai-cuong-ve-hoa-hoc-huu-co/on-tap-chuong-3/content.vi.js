/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 3: phân loại hợp chất hữu cơ, đọc phổ hồng ngoại và phổ khối lượng, chọn phương pháp tách, lập công thức phân tử, đồng đẳng và đồng phân.',
  intro:
    'Một chất hữu cơ lạ được đem đến phòng thí nghiệm. Trước hết phải tách cho sạch, rồi phân tích nguyên tố và đo phổ khối lượng để có công thức phân tử, cuối cùng đọc phổ hồng ngoại để đoán nhóm chức và cấu tạo. Cả chương này là các bước của quy trình đó. Bài ôn tập này gom chúng lại.',
  objectives: [
    'Hệ thống hoá được cách phân loại, nhóm chức, phổ hồng ngoại và các phương pháp tách biệt, tinh chế.',
    'Lập được công thức phân tử từ phần trăm khối lượng và phổ khối lượng.',
    'Nhận biết được đồng đẳng, đồng phân và viết được đồng phân cấu tạo của các phân tử đơn giản.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Từ một mẫu chất lạ đến công thức cấu tạo',
          head: ['Việc cần làm', 'Công cụ', 'Ghi nhớ'],
          rows: [
            [
              'Làm sạch mẫu',
              'Chưng cất, chiết, kết tinh, sắc kí cột',
              'Tìm xem các chất khác nhau ở tính chất nào: nhiệt độ sôi, độ tan, mức độ hấp phụ',
            ],
            [
              'Tìm công thức đơn giản nhất',
              'Phân tích nguyên tố',
              '$x : y : z = \\dfrac{\\%\\mathrm{C}}{12} : \\dfrac{\\%\\mathrm{H}}{1} : \\dfrac{\\%\\mathrm{O}}{16}$',
            ],
            [
              'Tìm phân tử khối',
              'Phổ khối lượng',
              'Hợp chất đơn giản: peak có m/z lớn nhất ứng với $[\\mathrm{M}^+]$',
            ],
            [
              'Dự đoán nhóm chức',
              'Phổ hồng ngoại',
              'O–H: $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$ (alcohol), $3\\,300$ – $2\\,500$ $\\mathrm{cm^{-1}}$ (acid); C=O: gần $1\\,700$ $\\mathrm{cm^{-1}}$; N–H: $3\\,500$ – $3\\,300$ $\\mathrm{cm^{-1}}$',
            ],
            [
              'Viết công thức cấu tạo',
              'Thuyết cấu tạo hoá học',
              'C hoá trị IV; xét mạch carbon, loại nhóm chức, vị trí nhóm chức',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Đồng đẳng và đồng phân',
          head: ['Đặc điểm', 'Đồng đẳng', 'Đồng phân'],
          rows: [
            [
              'Công thức phân tử',
              'Khác nhau, hơn kém một hay nhiều nhóm $\\mathrm{CH_2}$',
              'Giống nhau',
            ],
            ['Tính chất hoá học', 'Tương tự', 'Có thể rất khác'],
            [
              'Ví dụ',
              '$\\mathrm{CH_4}$ và $\\mathrm{C_2H_6}$',
              '$\\mathrm{C_2H_5OH}$ và $\\mathrm{CH_3OCH_3}$',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Luyện tập có gợi ý',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có các câu mới cho bốn kĩ năng tính và đếm của chương. Nếu trả lời sai lần đầu, em sẽ có gợi ý và được thử lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Chọn phương pháp tách',
    instruction:
      'Xếp mỗi hỗn hợp vào phương pháp tách phù hợp. Khi xếp, hãy tự hỏi các chất trong đó khác nhau ở tính chất nào.',
  },
  examples: [
    {
      problem:
        'Hợp chất A chứa C, H, O, N với $32\\%$ C, $6{,}67\\%$ H, $42{,}66\\%$ O, còn lại là N. Phổ MS có peak m/z lớn nhất là $75$. Tìm công thức phân tử của A.',
      steps: [
        '$\\%\\mathrm{N} = 100 - 32 - 6{,}67 - 42{,}66 = 18{,}67\\%$.',
        '$x : y : z : t = \\dfrac{32}{12} : \\dfrac{6{,}67}{1} : \\dfrac{42{,}66}{16} : \\dfrac{18{,}67}{14} = 2{,}667 : 6{,}67 : 2{,}666 : 1{,}334 = 2 : 5 : 2 : 1$.',
        'Công thức đơn giản nhất là $\\mathrm{C_2H_5O_2N}$, có khối lượng $75$. Phân tử khối bằng $75$ nên $n = 1$.',
      ],
      answer: 'Công thức phân tử của A là $\\mathrm{C_2H_5O_2N}$.',
    },
    {
      problem:
        'Chất B có công thức phân tử $\\mathrm{C_3H_6O}$. Phổ IR của B có đỉnh mạnh ở $1\\,715$ $\\mathrm{cm^{-1}}$, không có đỉnh trong vùng $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$ và không có đỉnh trong vùng $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$. Xác định cấu tạo của B.',
      steps: [
        'Đỉnh $1\\,715$ $\\mathrm{cm^{-1}}$ cho biết B có nhóm C=O.',
        'Không có đỉnh $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$ nên B không có nhóm –OH.',
        'Không có đỉnh $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$ của nhóm –CHO nên B không phải aldehyde.',
        'Vậy B là ketone có $3$ carbon, chỉ có thể là $\\mathrm{CH_3-CO-CH_3}$.',
      ],
      answer: 'B là acetone, $\\mathrm{CH_3COCH_3}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là hydrocarbon?',
      options: [
        '$\\mathrm{C_3H_8}$',
        '$\\mathrm{C_2H_5Cl}$',
        '$\\mathrm{CH_3NH_2}$',
        '$\\mathrm{CaC_2}$',
      ],
      answer: 0,
      hints: ['Hydrocarbon chỉ gồm hai nguyên tố nào?'],
      solution:
        'Hydrocarbon chỉ có C và H nên là $\\mathrm{C_3H_8}$. $\\mathrm{C_2H_5Cl}$, $\\mathrm{CH_3NH_2}$ là dẫn xuất; $\\mathrm{CaC_2}$ là carbide, thuộc hợp chất vô cơ.',
    },
    {
      type: 'choice',
      prompt:
        'Khi đun nóng, đường trắng chuyển sang màu nâu rồi đen. Hiện tượng này thể hiện đặc điểm nào của hợp chất hữu cơ?',
      options: [
        'Kém bền với nhiệt',
        'Tan nhiều trong nước',
        'Chứa liên kết ion',
        'Có nhiệt độ nóng chảy rất cao',
      ],
      answer: 0,
      hints: ['Màu đen là của carbon. Chất đầu đã bị biến đổi ra sao khi đun?'],
      solution:
        'Đường bị phân huỷ khi đun, cuối cùng để lại carbon màu đen. Đó là biểu hiện của tính kém bền với nhiệt.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi vùng hấp thụ trên phổ IR với liên kết tương ứng.',
      left: [
        '$3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$, đỉnh rộng',
        '$1\\,750$ – $1\\,700$ $\\mathrm{cm^{-1}}$, đỉnh mạnh',
        '$2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$',
      ],
      right: ['O–H trong alcohol', 'C=O', 'C–H trong nhóm –CHO', 'N–N'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Vùng số sóng lớn nhất thuộc về liên kết với H; C=O nằm gần $1\\,700$ $\\mathrm{cm^{-1}}$.',
      ],
      solution:
        'O–H của alcohol ở $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$; C=O ở khoảng $1\\,750$ – $1\\,700$ $\\mathrm{cm^{-1}}$; C–H của nhóm –CHO ở $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$.',
    },
    {
      type: 'choice',
      prompt:
        'Benzene (sôi ở $80\\,^\\circ\\mathrm{C}$) và toluene (sôi ở $111\\,^\\circ\\mathrm{C}$) trộn lẫn hoàn toàn vào nhau. Cách nào phù hợp để tách hai chất?',
      options: ['Chưng cất', 'Chiết bằng nước', 'Kết tinh', 'Lọc'],
      answer: 0,
      hints: ['Hai chất lỏng khác nhau rõ ở tính chất nào?'],
      solution:
        'Hai chất lỏng tan vào nhau, có nhiệt độ sôi khác nhau, nên tách được bằng chưng cất. Cả hai đều không tan trong nước nên chiết bằng nước không tách được chúng.',
    },
    {
      type: 'multi',
      prompt: 'Những cặp chất nào là đồng phân của nhau?',
      options: [
        '$\\mathrm{CH_3CH_2CH_2OH}$ và $\\mathrm{CH_3CH(OH)CH_3}$',
        '$\\mathrm{CH_3COOH}$ và $\\mathrm{HCOOCH_3}$',
        '$\\mathrm{CH_3OH}$ và $\\mathrm{C_2H_5OH}$',
        '$\\mathrm{C_2H_4}$ và $\\mathrm{C_3H_6}$',
      ],
      answers: [0, 1],
      hints: ['Viết công thức phân tử của từng chất rồi so sánh.'],
      solution:
        'Cùng $\\mathrm{C_3H_8O}$: $\\mathrm{CH_3CH_2CH_2OH}$ và $\\mathrm{CH_3CH(OH)CH_3}$. Cùng $\\mathrm{C_2H_4O_2}$: $\\mathrm{CH_3COOH}$ và $\\mathrm{HCOOCH_3}$. Hai cặp còn lại hơn kém nhau nhóm $\\mathrm{CH_2}$, là đồng đẳng.',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu đồng phân cấu tạo mạch hở ứng với công thức $\\mathrm{C_3H_8O}$?',
      answer: 3,
      hints: ['Xét alcohol (nhóm –OH) và ether (cầu –O–).'],
      solution:
        'Hai alcohol $\\mathrm{CH_3CH_2CH_2OH}$, $\\mathrm{CH_3CH(OH)CH_3}$ và một ether $\\mathrm{CH_3OCH_2CH_3}$, tổng cộng $3$ đồng phân.',
    },
    {
      type: 'text',
      prompt:
        'Hợp chất X có $40\\%$ C, $6{,}67\\%$ H, còn lại là O. Phổ MS có peak m/z lớn nhất là $180$. Viết công thức phân tử của X, ví dụ C2H4O2.',
      accept: ['C6H12O6'],
      hints: [
        'Tính %O rồi lập tỉ lệ số nguyên tử.',
        'Công thức đơn giản nhất là $\\mathrm{CH_2O}$, có khối lượng $30$.',
      ],
      solution:
        '$\\%\\mathrm{O} = 53{,}33\\%$. $x : y : z = 3{,}33 : 6{,}67 : 3{,}33 = 1 : 2 : 1$. $30n = 180$ nên $n = 6$. X là $\\mathrm{C_6H_{12}O_6}$.',
    },
    {
      type: 'text',
      prompt:
        'Hợp chất Y có $20\\%$ C, $6{,}67\\%$ H, $26{,}67\\%$ O, $46{,}66\\%$ N và phân tử khối là $60$. Viết công thức phân tử của Y, theo thứ tự C, H, N, O.',
      accept: ['CH4N2O', 'CH4ON2'],
      hints: ['Chia từng phần trăm cho nguyên tử khối, rồi chia cho số nhỏ nhất là $1{,}667$.'],
      solution:
        '$x : y : z : t = 1{,}667 : 6{,}67 : 1{,}667 : 3{,}333 = 1 : 4 : 1 : 2$ (theo thứ tự C, H, O, N). Khối lượng của $\\mathrm{CH_4N_2O}$ là $60$, nên $n = 1$. Đây là urea.',
    },
    {
      type: 'number',
      prompt:
        'Retinol, thành phần chính của vitamin A, có công thức phân tử $\\mathrm{C_{20}H_{30}O}$. Peak ion phân tử của retinol trên phổ MS có m/z bằng bao nhiêu?',
      answer: 286,
      hints: ['Giá trị m/z của ion phân tử bằng phân tử khối.'],
      solution: '$M = 12 \\cdot 20 + 30 + 16 = 286$, nên peak $[\\mathrm{M}^+]$ ở m/z $286$.',
    },
    {
      type: 'number',
      prompt:
        'Tính phần trăm khối lượng carbon trong retinol $\\mathrm{C_{20}H_{30}O}$, làm tròn đến hai chữ số thập phân.',
      answer: 83.92,
      tolerance: 0.02,
      unit: '%',
      hints: ['Khối lượng carbon trong một phân tử là $12 \\cdot 20$.'],
      solution: '$\\%\\mathrm{C} = \\dfrac{240}{286} \\cdot 100\\% \\approx 83{,}92\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Retinol có một nhóm –OH gắn vào mạch carbon. Trên phổ IR của retinol, em chờ đợi có dải hấp thụ đặc trưng nào?',
      options: [
        'Đỉnh rộng ở $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$',
        'Đỉnh mạnh ở $1\\,750$ – $1\\,735$ $\\mathrm{cm^{-1}}$',
        'Dải rất rộng ở $3\\,300$ – $2\\,500$ $\\mathrm{cm^{-1}}$ kèm đỉnh C=O',
        'Hai đỉnh ở $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$',
      ],
      answer: 0,
      hints: ['Nhóm –OH gắn vào mạch carbon là của loại hợp chất nào?'],
      solution:
        'Retinol là alcohol, nên có đỉnh rộng của O–H ở $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$. Các vùng khác lần lượt là của ester, carboxylic acid và aldehyde.',
    },
  ],
  takeaways: [
    'Mỗi phương pháp tách dựa vào một sự khác nhau: nhiệt độ sôi, độ tan, độ tan theo nhiệt độ, mức độ hấp phụ.',
    'Công thức phân tử = (công thức đơn giản nhất) nhân $n$, với $n$ tìm từ phân tử khối trên phổ MS.',
    'Phổ IR cho biết có nhóm chức nào; thuyết cấu tạo cho biết các nguyên tử nối với nhau thế nào.',
    'Đồng phân cùng công thức phân tử; đồng đẳng hơn kém nhau nhóm $\\mathrm{CH_2}$ và có tính chất tương tự.',
  ],
};
