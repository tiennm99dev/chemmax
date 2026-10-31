/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Cấu tạo nguyên tử: thành phần nguyên tử, nguyên tố hoá học, đồng vị, nguyên tử khối trung bình và cấu hình electron, với bản đồ khái niệm và bộ câu hỏi luyện tập.',
  intro:
    'Chương 1 đã đưa em đi từ bên ngoài vào tận hạt nhân nguyên tử: nguyên tử gồm những hạt nào, điều gì làm nên một nguyên tố, vì sao nguyên tử khối không phải số nguyên, và electron sắp xếp ra sao trong lớp vỏ. Bài ôn tập này giúp em hệ thống lại các kiến thức đó và luyện các dạng bài tập chính của chương.',
  objectives: [
    'Hệ thống hoá được thành phần, kích thước, khối lượng và điện tích của nguyên tử.',
    'Vận dụng được các khái niệm số hiệu nguyên tử, số khối, đồng vị và nguyên tử khối trung bình.',
    'Viết được cấu hình electron của 20 nguyên tố đầu tiên và rút ra tính chất của nguyên tố từ lớp electron ngoài cùng.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Các hạt cấu tạo nên nguyên tử',
          head: ['Hạt', 'Vị trí', 'Điện tích tương đối', 'Khối lượng (amu)'],
          rows: [
            ['Proton ($p$)', 'Hạt nhân', '$+1$', '$\\approx 1$'],
            ['Neutron ($n$)', 'Hạt nhân', '$0$', '$\\approx 1$'],
            ['Electron ($e$)', 'Lớp vỏ', '$-1$', '$\\approx 0{,}00055$'],
          ],
        },
        {
          type: 'list',
          items: [
            'Nguyên tử trung hoà điện: số proton = số electron = $Z$. Đường kính nguyên tử khoảng $10^{-10}$ m, lớn hơn hạt nhân khoảng $10^{4}$ lần; khối lượng tập trung ở hạt nhân.',
            'Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton. Số khối $A = Z + N$; kí hiệu nguyên tử ${}^{A}_{Z}\\mathrm{X}$.',
            'Đồng vị: cùng số proton, khác số neutron. Nguyên tử khối trung bình $\\overline{A} = \\dfrac{A_1 x_1 + A_2 x_2 + \\ldots}{100}$.',
            'Lớp $n$ có $n$ phân lớp (với $n \\le 4$), $n^2$ orbital, tối đa $2n^2$ electron; phân lớp s, p, d, f chứa tối đa $2, 6, 10, 14$ electron.',
            'Cấu hình electron: điền theo trật tự 1s 2s 2p 3s 3p 4s 3d ... (nguyên lí vững bền), mỗi orbital tối đa 2 electron ngược chiều (nguyên lí Pauli), số electron độc thân tối đa (quy tắc Hund).',
            'Lớp ngoài cùng có 1 – 3 electron: thường là kim loại (trừ H, He, B); 5 – 7 electron: phi kim; 8 electron (He có 2): khí hiếm; 4 electron: kim loại hoặc phi kim.',
          ],
        },
        {
          type: 'p',
          text: 'Bản đồ khái niệm của chương có ba nhánh. Hãy xếp mỗi thẻ kiến thức vào đúng nhánh của nó.',
        },
        { type: 'widget', name: 'ban-do-khai-niem' },
      ],
    },
    {
      heading: 'Các dạng bài tập chính',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm số hạt: lập hệ từ tổng số hạt $2Z + N$ và hiệu số hạt mang điện với không mang điện $2Z - N$.',
            'Đọc kí hiệu nguyên tử: $Z$ là số proton và số electron, $N = A - Z$.',
            'Tính nguyên tử khối trung bình từ phần trăm đồng vị, hoặc tìm phần trăm đồng vị từ $\\overline{A}$ (đặt ẩn $x$ cho phần trăm một đồng vị).',
            'Viết cấu hình electron, vẽ ô orbital của phân lớp ngoài cùng để đếm electron độc thân, rồi dựa vào số electron lớp ngoài cùng để dự đoán kim loại, phi kim hay khí hiếm.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Khi viết cấu hình của K ($Z = 19$) và Ca ($Z = 20$), electron vào phân lớp 4s chứ không vào 3d, vì 4s có mức năng lượng thấp hơn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Luyện nhanh các dạng bài của chương',
    instruction:
      'Trả lời từng câu hỏi được tạo ngẫu nhiên. Nếu sai lần đầu, em được xem gợi ý và làm lại; bản đồ kĩ năng tô màu theo kết quả lần thử đầu, cho biết dạng bài nào cần ôn thêm. Bấm làm bộ mới để luyện tiếp.',
  },
  examples: [
    {
      problem:
        'Nguyên tử X có tổng số hạt là $40$, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là $12$. Xác định số proton, số neutron, viết cấu hình electron của X và cho biết X là kim loại hay phi kim.',
      steps: [
        'Gọi $Z$ là số proton (bằng số electron), $N$ là số neutron: $2Z + N = 40$ và $2Z - N = 12$.',
        'Cộng hai phương trình: $4Z = 52$, nên $Z = 13$; $N = 40 - 26 = 14$. X là aluminium, ${}^{27}_{13}\\mathrm{Al}$.',
        'Cấu hình electron: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^1}$.',
        'Lớp ngoài cùng có $2 + 1 = 3$ electron, nên X là kim loại.',
      ],
      answer:
        'X có $13$ proton, $14$ neutron; cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^1}$; X là kim loại.',
    },
    {
      problem:
        'Bromine có hai đồng vị ${}^{79}\\mathrm{Br}$ và ${}^{81}\\mathrm{Br}$. Biết nguyên tử khối trung bình của bromine là $79{,}91$, tính phần trăm số nguyên tử của đồng vị ${}^{81}\\mathrm{Br}$.',
      steps: [
        'Gọi $y$ là phần trăm số nguyên tử ${}^{81}\\mathrm{Br}$; ${}^{79}\\mathrm{Br}$ chiếm $(100 - y)\\%$.',
        '$\\dfrac{79(100 - y) + 81y}{100} = 79{,}91$, tức $7\\,900 + 2y = 7\\,991$.',
        '$2y = 91$, nên $y = 45{,}5$.',
      ],
      answer:
        '${}^{81}\\mathrm{Br}$ chiếm $45{,}5\\%$ số nguyên tử (${}^{79}\\mathrm{Br}$ chiếm $54{,}5\\%$).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hạt nào sau đây không mang điện?',
      options: ['Proton', 'Electron', 'Neutron', 'Hạt nhân'],
      answer: 2,
      hints: ['Hạt nhân mang điện dương vì chứa proton.'],
      solution:
        'Neutron không mang điện. Proton mang điện $+1$, electron $-1$, hạt nhân mang điện dương.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các khám phá theo thứ tự thời gian, từ sớm nhất.',
      items: [
        'Chadwick tìm ra neutron',
        'Thomson tìm ra electron',
        'Rutherford tìm ra hạt nhân nguyên tử',
      ],
      answer: [1, 2, 0],
      hints: ['Electron được tìm ra năm 1897, neutron năm 1932.'],
      solution:
        'Thomson tìm ra electron (1897), Rutherford tìm ra hạt nhân (1911), Chadwick tìm ra neutron (1932).',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử X có tổng số hạt proton, neutron, electron là $34$; số hạt mang điện nhiều hơn số hạt không mang điện là $10$. Số proton của X là bao nhiêu?',
      answer: 11,
      hints: ['Lập hệ $2Z + N = 34$ và $2Z - N = 10$.'],
      solution: 'Cộng hai phương trình: $4Z = 44$, nên $Z = 11$ (và $N = 12$): X là sodium.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử ${}^{65}_{30}\\mathrm{Zn}$ có bao nhiêu neutron?',
      answer: 35,
      hints: ['$N = A - Z$.'],
      solution: '$N = 65 - 30 = 35$ neutron.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đại lượng với ý nghĩa của nó.',
      left: ['$Z$', '$A$', '$N$', '$\\overline{A}$'],
      right: [
        'Số proton (bằng số electron trong nguyên tử)',
        'Tổng số proton và neutron',
        'Số neutron',
        'Nguyên tử khối trung bình của nguyên tố',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['$A = Z + N$.'],
      solution:
        '$Z$ là số hiệu nguyên tử (số proton); $A$ là số khối $= Z + N$; $N$ là số neutron; $\\overline{A}$ là nguyên tử khối trung bình.',
    },
    {
      type: 'number',
      prompt:
        'Magnesium có ba đồng vị: ${}^{24}\\mathrm{Mg}$ ($78{,}99\\%$), ${}^{25}\\mathrm{Mg}$ ($10{,}00\\%$) và ${}^{26}\\mathrm{Mg}$ ($11{,}01\\%$). Tính nguyên tử khối trung bình của magnesium (làm tròn đến hàng phần trăm).',
      answer: 24.32,
      tolerance: 0.006,
      hints: ['Tử số có ba số hạng, mỗi số hạng là số khối nhân phần trăm.'],
      solution:
        '$\\overline{A}_{\\mathrm{Mg}} = \\dfrac{24 \\cdot 78{,}99 + 25 \\cdot 10 + 26 \\cdot 11{,}01}{100} = \\dfrac{1\\,895{,}76 + 250 + 286{,}26}{100} = 24{,}3202 \\approx 24{,}32$.',
    },
    {
      type: 'number',
      prompt:
        'Silver có hai đồng vị ${}^{107}\\mathrm{Ag}$ và ${}^{109}\\mathrm{Ag}$; nguyên tử khối trung bình của silver là $107{,}87$. Đồng vị ${}^{107}\\mathrm{Ag}$ chiếm bao nhiêu phần trăm số nguyên tử?',
      answer: 56.5,
      tolerance: 0.05,
      unit: '%',
      hints: [
        'Gọi $x$ là phần trăm ${}^{107}\\mathrm{Ag}$.',
        'Giải $\\dfrac{107x + 109(100 - x)}{100} = 107{,}87$.',
      ],
      solution:
        '$10\\,900 - 2x = 10\\,787$, nên $2x = 113$ và $x = 56{,}5$. Vậy ${}^{107}\\mathrm{Ag}$ chiếm $56{,}5\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Chlorine có hai đồng vị ${}^{35}\\mathrm{Cl}$ và ${}^{37}\\mathrm{Cl}$; lấy nguyên tử khối trung bình của chlorine là $35{,}5$. Trong $200$ nguyên tử chlorine có bao nhiêu nguyên tử ${}^{37}\\mathrm{Cl}$?',
      answer: 50,
      hints: [
        'Tìm phần trăm ${}^{37}\\mathrm{Cl}$ trước: gọi là $y$.',
        '$\\dfrac{35(100 - y) + 37y}{100} = 35{,}5$.',
      ],
      solution:
        '$3\\,500 + 2y = 3\\,550$, nên $y = 25$: ${}^{37}\\mathrm{Cl}$ chiếm $25\\%$. Trong $200$ nguyên tử có $200 \\cdot 25\\% = 50$ nguyên tử ${}^{37}\\mathrm{Cl}$.',
    },
    {
      type: 'choice',
      prompt: 'Cấu hình electron của nguyên tử magnesium ($Z = 12$) là',
      options: [
        '$\\mathrm{1s^2 2s^2 2p^6 3s^2}$',
        '$\\mathrm{1s^2 2s^2 2p^8}$',
        '$\\mathrm{1s^2 2s^2 2p^6 3p^2}$',
        '$\\mathrm{1s^2 2s^2 2p^4 3s^2 3p^2}$',
      ],
      answer: 0,
      hints: ['Phân lớp p chứa tối đa $6$ electron; điền đầy 2p trước 3s.'],
      solution:
        '$12$ electron: $\\mathrm{1s^2 2s^2 2p^6}$ ($10$ electron), còn $2$ electron vào 3s: $\\mathrm{1s^2 2s^2 2p^6 3s^2}$.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử phosphorus ($Z = 15$) có bao nhiêu electron độc thân ở trạng thái cơ bản?',
      answer: 3,
      hints: [
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$.',
        'Vẽ ba ô orbital của phân lớp 3p theo quy tắc Hund.',
      ],
      solution: 'Phân lớp 3p: ↑ | ↑ | ↑, nên nguyên tử P có $3$ electron độc thân.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tử X có cấu hình electron $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6}$. X là',
      options: ['kim loại', 'phi kim', 'khí hiếm', 'kim loại hoặc phi kim'],
      answer: 2,
      hints: ['Đếm số electron ở lớp $n = 3$.'],
      solution: 'Lớp ngoài cùng có $2 + 6 = 8$ electron, nên X (argon, $Z = 18$) là khí hiếm.',
    },
    {
      type: 'number',
      prompt: 'Lớp N ($n = 4$) chứa tối đa bao nhiêu electron?',
      answer: 32,
      hints: ['Lớp thứ $n$ chứa tối đa $2n^2$ electron.'],
      solution: '$2 \\cdot 4^2 = 32$ electron (4s: $2$, 4p: $6$, 4d: $10$, 4f: $14$).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        '${}^{40}_{18}\\mathrm{Ar}$ và ${}^{40}_{20}\\mathrm{Ca}$ là hai đồng vị.',
        'Các đồng vị của một nguyên tố có tính chất hoá học giống nhau.',
        'Nguyên tử khối trung bình của một nguyên tố nằm giữa số khối nhỏ nhất và lớn nhất của các đồng vị.',
        'Trong nguyên tử, electron ở lớp K có năng lượng thấp nhất.',
        'Phân lớp 3d được điền electron trước phân lớp 4s.',
      ],
      answers: [1, 2, 3],
      hints: ['Đồng vị phải cùng số proton.', 'Xem lại trật tự mức năng lượng.'],
      solution:
        'Đúng: đồng vị cùng số electron nên tính chất hoá học giống nhau; $\\overline{A}$ nằm giữa các số khối; lớp K gần hạt nhân nhất nên có năng lượng thấp nhất. Sai: Ar và Ca khác số proton nên không phải đồng vị; 4s được điền trước 3d.',
    },
  ],
  takeaways: [
    'Nguyên tử gồm hạt nhân (proton $+1$, neutron $0$) và lớp vỏ electron ($-1$); số proton bằng số electron.',
    'Nguyên tố là tập hợp các nguyên tử cùng số proton; $A = Z + N$; đồng vị cùng $Z$, khác $N$.',
    '$\\overline{A} = \\dfrac{A_1 x_1 + A_2 x_2 + \\ldots}{100}$; tìm phần trăm đồng vị bằng cách đặt ẩn $x$.',
    'Cấu hình electron theo nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund; lớp ngoài cùng cho biết kim loại, phi kim hay khí hiếm.',
  ],
};
