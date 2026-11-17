/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ chế thế gốc tự do khi halogen hoá alkane, thế nucleophile SN1 và SN2 ở dẫn xuất halogen, thế electrophile vào vòng benzene.',
  intro:
    'Cùng là phản ứng thế nguyên tử Br bằng nhóm OH, nhưng $\\mathrm{CH_3Br}$ phản ứng nhanh hơn khi tăng nồng độ $\\mathrm{OH^-}$, còn $\\mathrm{(CH_3)_3CBr}$ thì gần như không đổi. Hai chất đi theo hai con đường khác nhau. Bài này "quay chậm" từng con đường của phản ứng thế.',
  objectives: [
    'Trình bày được cơ chế thế gốc tự do ($S_R$) qua ba giai đoạn khơi mào, phát triển mạch và tắt mạch.',
    'Trình bày được cơ chế thế nucleophile $S_N1$ và $S_N2$; so sánh số giai đoạn, biểu thức tốc độ, hoá lập thể và loại dẫn xuất thuận lợi.',
    'Trình bày được cơ chế thế electrophile vào vòng benzene ($S_E$) qua phản ứng bromine hoá và nitro hoá.',
  ],
  sections: [
    {
      heading: 'Thế gốc tự do ($S_R$)',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng của alkane với chlorine khi chiếu sáng, ví dụ $\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\text{as}} \\mathrm{CH_3Cl} + \\mathrm{HCl}$, xảy ra theo cơ chế dây chuyền gồm ba giai đoạn.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Khơi mào: $\\mathrm{Cl_2} \\xrightarrow{\\text{as}} 2\\mathrm{Cl}{\\cdot}$ (phân cắt đồng li).',
            'Phát triển mạch: $\\mathrm{Cl}{\\cdot} + \\mathrm{CH_4} \\rightarrow \\mathrm{HCl} + \\mathrm{CH_3}{\\cdot}$; rồi $\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl_2} \\rightarrow \\mathrm{CH_3Cl} + \\mathrm{Cl}{\\cdot}$. Gốc $\\mathrm{Cl}{\\cdot}$ sinh ra lại tiếp tục chuỗi.',
            'Tắt mạch: các gốc kết hợp với nhau: $2\\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{Cl_2}$; $\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{CH_3Cl}$; $2\\mathrm{CH_3}{\\cdot} \\rightarrow \\mathrm{C_2H_6}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hướng thế ở alkane',
          text: 'Gốc tự do bậc cao bền hơn, nên nguyên tử H ở carbon bậc cao hơn dễ bị thế hơn. Ví dụ propane tạo 2-chloropropane nhiều hơn 1-chloropropane, dù số nguyên tử H ở carbon bậc I gấp ba số H ở carbon bậc II.',
        },
      ],
    },
    {
      heading: 'Thế nucleophile ($S_N$) ở dẫn xuất halogen',
      blocks: [
        {
          type: 'p',
          text: 'Trong dẫn xuất halogen, liên kết $\\mathrm{C^{\\delta+}{-}X^{\\delta-}}$ phân cực nên nguyên tử C là trung tâm bị tác nhân nucleophile ($\\mathrm{Nu^-}$ như $\\mathrm{OH^-}$) tấn công; $\\mathrm{X^-}$ là nhóm rời đi: $\\mathrm{R{-}X} + \\mathrm{Nu^-} \\rightarrow \\mathrm{R{-}Nu} + \\mathrm{X^-}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ chế $S_N2$ (thế nucleophile lưỡng phân tử)',
          text: 'Một giai đoạn: $\\mathrm{Nu^-}$ tấn công C từ phía đối diện với nhóm rời, liên kết $\\mathrm{C{-}Nu}$ hình thành đồng thời với liên kết $\\mathrm{C{-}X}$ đứt, qua một trạng thái chuyển tiếp. Tốc độ $v = k[\\mathrm{RX}][\\mathrm{Nu^-}]$. Cấu hình của C bị đảo ngược. Thuận lợi với $\\mathrm{CH_3X}$ và dẫn xuất bậc I.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ chế $S_N1$ (thế nucleophile đơn phân tử)',
          text: 'Hai giai đoạn. Giai đoạn 1 (chậm): $\\mathrm{R{-}X} \\rightarrow \\mathrm{R^+} + \\mathrm{X^-}$, tạo carbocation. Giai đoạn 2 (nhanh): $\\mathrm{R^+} + \\mathrm{Nu^-} \\rightarrow \\mathrm{R{-}Nu}$. Tốc độ chỉ phụ thuộc giai đoạn chậm: $v = k[\\mathrm{RX}]$. Carbocation phẳng nên $\\mathrm{Nu^-}$ tấn công hai phía như nhau, tạo hỗn hợp racemic nếu C bất đối. Thuận lợi với dẫn xuất bậc III.',
        },
        {
          type: 'table',
          head: ['Đặc điểm', '$S_N2$', '$S_N1$'],
          rows: [
            ['Số giai đoạn', '$1$', '$2$ (qua carbocation)'],
            ['Biểu thức tốc độ', '$v = k[\\mathrm{RX}][\\mathrm{Nu^-}]$', '$v = k[\\mathrm{RX}]$'],
            ['Hoá lập thể', 'Đảo cấu hình', 'Racemic hoá'],
            ['Dẫn xuất thuận lợi', '$\\mathrm{CH_3X}$, bậc I', 'Bậc III'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao bậc của dẫn xuất quyết định?',
          text: 'Ở dẫn xuất bậc III, ba nhóm alkyl che chắn phía sau nguyên tử C nên $S_N2$ khó xảy ra, nhưng lại làm carbocation bậc III bền nên $S_N1$ dễ. Ở $\\mathrm{CH_3X}$ và bậc I thì ngược lại. Dẫn xuất bậc II có thể theo cả hai cơ chế tuỳ điều kiện.',
        },
      ],
    },
    {
      heading: 'Thế electrophile vào vòng benzene ($S_E$)',
      blocks: [
        {
          type: 'p',
          text: 'Vòng benzene có $6$ electron $\\pi$ giải toả nên giàu electron và bị tác nhân electrophile $\\mathrm{E^+}$ tấn công. Cơ chế chung gồm ba bước:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tạo tác nhân electrophile nhờ xúc tác: $\\mathrm{Br_2} + \\mathrm{FeBr_3} \\rightarrow \\mathrm{Br^+} + \\mathrm{FeBr_4^-}$; với nitro hoá: $\\mathrm{HNO_3} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{NO_2^+} + \\mathrm{HSO_4^-} + \\mathrm{H_2O}$.',
            '$\\mathrm{E^+}$ tấn công vòng (giai đoạn chậm), tạo carbocation trung gian; hệ thơm tạm thời bị phá vỡ.',
            'Carbocation tách $\\mathrm{H^+}$ (giai đoạn nhanh), phục hồi hệ thơm bền vững: sản phẩm thế $\\mathrm{C_6H_5E}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thế, không phải cộng',
          text: 'Sau bước 2, nếu tiểu phân trung gian kết hợp thêm với anion thì sẽ là phản ứng cộng và mất hệ thơm. Tách $\\mathrm{H^+}$ giữ lại hệ thơm bền hơn, nên benzene ưu tiên phản ứng thế.',
        },
      ],
    },
    {
      heading: 'Dự án: Thí nghiệm ảo so sánh $S_N1$ và $S_N2$',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng số liệu tốc độ để nhận ra một phản ứng đi theo $S_N1$ hay $S_N2$, như cách các nhà hoá học đã làm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng hoạt cảnh ở trên, đổi nồng độ dẫn xuất halogen và $\\mathrm{OH^-}$ theo $\\times 1$, $\\times 2$, $\\times 3$; ghi bảng tốc độ tương đối cho mỗi cơ chế.',
            'Vẽ đồ thị tốc độ theo $[\\mathrm{OH^-}]$ khi giữ $[\\mathrm{RX}]$ không đổi, cho cả hai cơ chế.',
            'Tìm hiểu thí nghiệm của Hughes và Ingold (thập niên 1930) về thuỷ phân dẫn xuất halogen; tóm tắt cách họ đặt tên $S_N1$, $S_N2$.',
            'Làm mô hình phân tử bằng que tăm và đất nặn để minh hoạ sự đảo cấu hình ở $S_N2$ (hình chiếc ô lật).',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu, hai đồ thị, kết luận cách phân biệt hai cơ chế từ số liệu tốc độ, ảnh mô hình và giải thích vì sao $\\mathrm{(CH_3)_3CBr}$ ưu tiên $S_N1$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Quay chậm phản ứng thế',
    instruction:
      'Chọn một cơ chế rồi bấm "Bước tiếp" để đi từng giai đoạn; trả lời câu dự đoán để mở bước sau. Với $S_N1$ và $S_N2$, đổi nồng độ dẫn xuất halogen và $\\mathrm{OH^-}$ để thấy tốc độ phụ thuộc vào chất nào.',
  },
  examples: [
    {
      problem:
        'Khi chlorine hoá propane (chiếu sáng), khả năng phản ứng tương đối của một nguyên tử H ở carbon bậc II so với bậc I là $3{,}8 : 1$. Tính phần trăm 2-chloropropane trong hỗn hợp sản phẩm monochloro.',
      steps: [
        'Propane $\\mathrm{CH_3{-}CH_2{-}CH_3}$ có $6$ nguyên tử H ở carbon bậc I và $2$ nguyên tử H ở carbon bậc II.',
        'Tỉ lệ sản phẩm tỉ lệ với (số H) × (khả năng phản ứng): bậc I: $6 \\cdot 1 = 6$; bậc II: $2 \\cdot 3{,}8 = 7{,}6$.',
        'Phần trăm 2-chloropropane: $\\dfrac{7{,}6}{6 + 7{,}6} \\cdot 100\\% \\approx 55{,}9\\%$.',
      ],
      answer: '2-chloropropane chiếm khoảng $55{,}9\\%$, là sản phẩm chính.',
    },
    {
      problem:
        'Phản ứng $\\mathrm{CH_3CH_2Br} + \\mathrm{OH^-} \\rightarrow \\mathrm{CH_3CH_2OH} + \\mathrm{Br^-}$ theo cơ chế $S_N2$. Tốc độ thay đổi thế nào khi tăng gấp đôi nồng độ cả hai chất?',
      steps: [
        'Với $S_N2$: $v = k[\\mathrm{CH_3CH_2Br}][\\mathrm{OH^-}]$.',
        "$v' = k \\cdot 2[\\mathrm{CH_3CH_2Br}] \\cdot 2[\\mathrm{OH^-}] = 4v$.",
      ],
      answer: 'Tốc độ tăng $4$ lần.',
    },
    {
      problem:
        'Viết cơ chế phản ứng nitro hoá benzene bằng hỗn hợp $\\mathrm{HNO_3}$ đặc và $\\mathrm{H_2SO_4}$ đặc.',
      steps: [
        'Tạo tác nhân electrophile: $\\mathrm{HNO_3} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{NO_2^+} + \\mathrm{HSO_4^-} + \\mathrm{H_2O}$.',
        '$\\mathrm{NO_2^+}$ tấn công vòng benzene (chậm), tạo carbocation trung gian $\\mathrm{C_6H_6NO_2^+}$.',
        'Carbocation tách $\\mathrm{H^+}$ (nhanh): $\\mathrm{C_6H_6NO_2^+} \\rightarrow \\mathrm{C_6H_5NO_2} + \\mathrm{H^+}$; $\\mathrm{H^+} + \\mathrm{HSO_4^-} \\rightarrow \\mathrm{H_2SO_4}$.',
      ],
      answer:
        'Tổng: $\\mathrm{C_6H_6} + \\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4}\\text{ đặc}} \\mathrm{C_6H_5NO_2} + \\mathrm{H_2O}$, theo cơ chế thế electrophile.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của phản ứng chlorine hoá methane theo đúng thứ tự.',
      items: [
        '$\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{CH_3Cl}$',
        '$\\mathrm{Cl_2} \\xrightarrow{\\text{as}} 2\\mathrm{Cl}{\\cdot}$',
        '$\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl_2} \\rightarrow \\mathrm{CH_3Cl} + \\mathrm{Cl}{\\cdot}$',
        '$\\mathrm{Cl}{\\cdot} + \\mathrm{CH_4} \\rightarrow \\mathrm{HCl} + \\mathrm{CH_3}{\\cdot}$',
      ],
      answer: [1, 3, 2, 0],
      hints: [
        'Khơi mào, phát triển mạch (hai bước), rồi tắt mạch.',
        'Gốc $\\mathrm{CH_3}{\\cdot}$ phải được tạo ra trước khi phản ứng với $\\mathrm{Cl_2}$.',
      ],
      solution:
        'Khơi mào: $\\mathrm{Cl_2} \\rightarrow 2\\mathrm{Cl}{\\cdot}$. Phát triển mạch: $\\mathrm{Cl}{\\cdot} + \\mathrm{CH_4} \\rightarrow \\mathrm{HCl} + \\mathrm{CH_3}{\\cdot}$, rồi $\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl_2} \\rightarrow \\mathrm{CH_3Cl} + \\mathrm{Cl}{\\cdot}$. Tắt mạch: $\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{CH_3Cl}$.',
    },
    {
      type: 'number',
      prompt:
        'Chlorine hoá 2-methylpropane $\\mathrm{(CH_3)_3CH}$ khi chiếu sáng. Khả năng phản ứng tương đối của H ở carbon bậc III so với bậc I là $5 : 1$. Tính phần trăm 2-chloro-2-methylpropane trong hỗn hợp sản phẩm monochloro (làm tròn đến hàng phần mười).',
      answer: 35.7,
      tolerance: 0.1,
      unit: '%',
      hints: [
        'Đếm số H ở carbon bậc I và số H ở carbon bậc III.',
        'Có $9$ H bậc I và $1$ H bậc III; nhân mỗi số với khả năng phản ứng.',
      ],
      solution:
        'Bậc I: $9 \\cdot 1 = 9$; bậc III: $1 \\cdot 5 = 5$. Phần trăm: $\\dfrac{5}{14} \\cdot 100\\% \\approx 35{,}7\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào đúng với cơ chế $S_N2$?',
      options: [
        'Một giai đoạn, nucleophile tấn công từ phía đối diện nhóm rời, cấu hình bị đảo ngược.',
        'Hai giai đoạn, qua carbocation, tạo hỗn hợp racemic.',
        'Tốc độ chỉ phụ thuộc nồng độ dẫn xuất halogen.',
        'Thuận lợi nhất với dẫn xuất bậc III.',
      ],
      answer: 0,
      hints: ['Số 2 chỉ hai tiểu phân cùng tham gia giai đoạn quyết định tốc độ.'],
      solution:
        '$S_N2$ xảy ra một giai đoạn, $v = k[\\mathrm{RX}][\\mathrm{Nu^-}]$, tấn công phía sau làm đảo cấu hình, thuận lợi với $\\mathrm{CH_3X}$ và bậc I. Các ý còn lại là đặc điểm của $S_N1$.',
    },
    {
      type: 'number',
      prompt:
        'Phản ứng $\\mathrm{(CH_3)_3CBr} + \\mathrm{OH^-} \\rightarrow \\mathrm{(CH_3)_3COH} + \\mathrm{Br^-}$ theo cơ chế $S_N1$. Khi tăng nồng độ $\\mathrm{(CH_3)_3CBr}$ lên $2$ lần và nồng độ $\\mathrm{OH^-}$ lên $3$ lần thì tốc độ phản ứng tăng bao nhiêu lần?',
      answer: 2,
      hints: ['Viết biểu thức tốc độ của $S_N1$.'],
      solution:
        '$v = k[\\mathrm{(CH_3)_3CBr}]$ không chứa $[\\mathrm{OH^-}]$, nên tốc độ chỉ tăng theo nồng độ dẫn xuất: $2$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Dẫn xuất halogen nào dễ phản ứng theo cơ chế $S_N1$ nhất?',
      options: [
        '$\\mathrm{(CH_3)_3C{-}Cl}$',
        '$\\mathrm{CH_3{-}Cl}$',
        '$\\mathrm{CH_3CH_2{-}Cl}$',
        '$\\mathrm{(CH_3)_2CH{-}Cl}$',
      ],
      answer: 0,
      hints: ['Giai đoạn chậm của $S_N1$ tạo ra tiểu phân gì? Tiểu phân đó bền nhất ở bậc nào?'],
      solution:
        '$S_N1$ đi qua carbocation; $\\mathrm{(CH_3)_3C^+}$ là carbocation bậc III, bền nhất, nên tert-butyl chloride dễ phản ứng theo $S_N1$ nhất.',
    },
    {
      type: 'multi',
      prompt:
        'Những phát biểu nào đúng về phản ứng bromine hoá benzene có xúc tác $\\mathrm{FeBr_3}$?',
      options: [
        'Tác nhân tấn công vòng là $\\mathrm{Br^+}$, một tác nhân electrophile.',
        'Giai đoạn tạo carbocation trung gian là giai đoạn chậm.',
        'Carbocation trung gian tách $\\mathrm{H^+}$ để phục hồi hệ thơm.',
        'Xúc tác $\\mathrm{FeBr_3}$ bị tiêu hao hết sau phản ứng.',
        'Phản ứng xảy ra theo cơ chế gốc tự do.',
      ],
      answers: [0, 1, 2],
      hints: ['Xúc tác được tái tạo ở bước cuối: $\\mathrm{H^+} + \\mathrm{FeBr_4^-}$.'],
      solution:
        '$\\mathrm{Br^+}$ (electrophile) tấn công vòng ở giai đoạn chậm, carbocation tách $\\mathrm{H^+}$ (nhanh). $\\mathrm{H^+} + \\mathrm{FeBr_4^-} \\rightarrow \\mathrm{HBr} + \\mathrm{FeBr_3}$ nên xúc tác không bị tiêu hao. Cơ chế là thế electrophile, không phải gốc tự do.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phản ứng với cơ chế của nó.',
      left: [
        '$\\mathrm{C_2H_6} + \\mathrm{Cl_2} \\xrightarrow{\\text{as}} \\mathrm{C_2H_5Cl} + \\mathrm{HCl}$',
        '$\\mathrm{CH_3Br} + \\mathrm{OH^-} \\rightarrow \\mathrm{CH_3OH} + \\mathrm{Br^-}$',
        '$\\mathrm{C_6H_6} + \\mathrm{HNO_3} \\xrightarrow{\\mathrm{H_2SO_4}} \\mathrm{C_6H_5NO_2} + \\mathrm{H_2O}$',
      ],
      right: ['Thế gốc tự do', 'Thế nucleophile $S_N2$', 'Thế electrophile', 'Cộng electrophile'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Xem tác nhân tấn công: gốc $\\mathrm{Cl}{\\cdot}$, anion $\\mathrm{OH^-}$ hay cation $\\mathrm{NO_2^+}$.',
      ],
      solution:
        'Halogen hoá alkane khi chiếu sáng: thế gốc tự do. $\\mathrm{OH^-}$ thế Br ở dẫn xuất methyl: $S_N2$. Nitro hoá benzene với $\\mathrm{NO_2^+}$: thế electrophile.',
    },
    {
      type: 'text',
      prompt: 'Trong cơ chế $S_N1$, tiểu phân trung gian tạo thành ở giai đoạn chậm là gì?',
      accept: ['carbocation', 'cation carbon', 'ion carbocation'],
      hints: ['Liên kết $\\mathrm{C{-}X}$ phân cắt dị li, cặp electron về X.'],
      solution:
        'Giai đoạn 1: $\\mathrm{R{-}X} \\rightarrow \\mathrm{R^+} + \\mathrm{X^-}$; $\\mathrm{R^+}$ là carbocation.',
    },
  ],
  takeaways: [
    'Thế gốc tự do gồm khơi mào, phát triển mạch, tắt mạch; H ở carbon bậc cao dễ bị thế hơn.',
    '$S_N2$: một giai đoạn, $v = k[\\mathrm{RX}][\\mathrm{Nu^-}]$, tấn công phía sau làm đảo cấu hình; thuận lợi với $\\mathrm{CH_3X}$ và bậc I.',
    '$S_N1$: hai giai đoạn qua carbocation, $v = k[\\mathrm{RX}]$, tạo racemic; thuận lợi với bậc III.',
    'Thế electrophile vào vòng benzene: tạo $\\mathrm{E^+}$, $\\mathrm{E^+}$ tấn công vòng tạo carbocation, tách $\\mathrm{H^+}$ phục hồi hệ thơm.',
  ],
};
