/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bảng tuần hoàn xếp các nguyên tố theo chiều tăng dần điện tích hạt nhân, thành ô, chu kì và nhóm; từ cấu hình electron suy ra được chu kì, nhóm và khối s, p, d, f của nguyên tố.',
  intro:
    'Năm 1869, nhà hoá học Nga D. I. Mendeleev sắp xếp 63 nguyên tố đã biết vào một bảng và còn để trống các ô cho những nguyên tố chưa được tìm ra. Ngày nay bảng tuần hoàn có 118 nguyên tố. Vì sao mỗi nguyên tố nằm đúng ở ô, hàng và cột của nó? Câu trả lời nằm ở cấu hình electron mà em đã học ở chương 1.',
  objectives: [
    'Nêu được lịch sử phát minh bảng tuần hoàn và các nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn hiện nay.',
    'Mô tả được cấu tạo của bảng tuần hoàn: ô nguyên tố, chu kì, nhóm.',
    'Phân loại được nguyên tố theo cấu hình electron (nguyên tố s, p, d, f) và theo tính chất (kim loại, phi kim, khí hiếm).',
    'Từ cấu hình electron, xác định được vị trí (ô, chu kì, nhóm) của nguyên tố, và ngược lại.',
  ],
  sections: [
    {
      heading: 'Lịch sử phát minh và nguyên tắc sắp xếp',
      blocks: [
        {
          type: 'p',
          text: 'Mendeleev xếp các nguyên tố theo chiều tăng dần của nguyên tử khối, đặt những nguyên tố có tính chất giống nhau vào cùng một cột. Ông còn dự đoán đúng tính chất của những nguyên tố chưa được phát hiện, như gallium và germanium. Về sau, khi biết cấu tạo nguyên tử, người ta thấy điện tích hạt nhân mới là đại lượng quyết định vị trí của nguyên tố.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn',
          text: 'Bảng tuần hoàn hiện nay được xây dựng theo ba nguyên tắc dưới đây.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Các nguyên tố được xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.',
            'Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng.',
            'Các nguyên tố có cùng số electron hoá trị trong nguyên tử được xếp thành một cột.',
          ],
        },
        {
          type: 'p',
          text: 'Electron hoá trị là những electron có khả năng tham gia hình thành liên kết hoá học. Chúng thường nằm ở lớp ngoài cùng, hoặc ở cả phân lớp sát lớp ngoài cùng nếu phân lớp đó chưa bão hoà.',
        },
      ],
    },
    {
      heading: 'Cấu tạo của bảng tuần hoàn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nguyên tố',
          text: 'Mỗi nguyên tố được xếp vào một ô. Số thứ tự của ô bằng số hiệu nguyên tử $Z$ của nguyên tố đó. Trong ô thường ghi kí hiệu hoá học, tên nguyên tố, số hiệu nguyên tử, nguyên tử khối trung bình, độ âm điện và cấu hình electron.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chu kì',
          text: 'Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được xếp theo chiều điện tích hạt nhân tăng dần. Số thứ tự của chu kì bằng số lớp electron trong nguyên tử.',
        },
        {
          type: 'table',
          caption: 'Bảng tuần hoàn có 7 chu kì',
          head: ['Chu kì', 'Số nguyên tố', 'Loại chu kì'],
          rows: [
            ['1', '$2$', 'nhỏ'],
            ['2', '$8$', 'nhỏ'],
            ['3', '$8$', 'nhỏ'],
            ['4', '$18$', 'lớn'],
            ['5', '$18$', 'lớn'],
            ['6', '$32$', 'lớn'],
            ['7', '$32$', 'lớn'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhóm',
          text: 'Nhóm là tập hợp các nguyên tố mà nguyên tử có cấu hình electron tương tự nhau, do đó có tính chất hoá học gần giống nhau, và được xếp thành một cột. Bảng tuần hoàn có 18 cột, chia thành 8 nhóm A (IA đến VIIIA) và 8 nhóm B (IB đến VIIIB); riêng nhóm VIIIB gồm 3 cột.',
        },
        {
          type: 'list',
          items: [
            'Nhóm A gồm các nguyên tố s và p. Số thứ tự của nhóm A bằng số electron lớp ngoài cùng, cũng là số electron hoá trị (riêng He có 2 electron nhưng thuộc nhóm VIIIA).',
            'Nhóm B gồm các nguyên tố d và f (chỉ có ở chu kì 4 trở đi). Với cấu hình $\\mathrm{(n-1)d^x ns^y}$, tổng $x + y$ là số electron hoá trị: $x + y = 3$ đến $7$ thì nhóm là $(x + y)$B; $x + y = 8, 9, 10$ thì nhóm VIIIB; $x + y = 11$ thì nhóm IB; $x + y = 12$ thì nhóm IIB.',
            'Họ lanthanide và họ actinide (nguyên tố f) được xếp thành hai hàng riêng ở cuối bảng để bảng không quá dài; chúng thuộc nhóm IIIB.',
          ],
        },
      ],
    },
    {
      heading: 'Phân loại nguyên tố',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào phân lớp mà electron cuối cùng điền vào (theo trật tự mức năng lượng), các nguyên tố được chia thành bốn khối:',
        },
        {
          type: 'table',
          caption: 'Các khối nguyên tố',
          head: ['Khối', 'Electron cuối cùng điền vào', 'Vị trí trong bảng'],
          rows: [
            ['Nguyên tố s', 'phân lớp s', 'nhóm IA, IIA và He'],
            ['Nguyên tố p', 'phân lớp p', 'nhóm IIIA đến VIIIA (trừ He)'],
            ['Nguyên tố d', 'phân lớp d', 'các nhóm B'],
            ['Nguyên tố f', 'phân lớp f', 'họ lanthanide và họ actinide'],
          ],
        },
        {
          type: 'p',
          text: 'Dựa vào tính chất, các nguyên tố được chia thành kim loại, phi kim và khí hiếm. Các kim loại chiếm phần lớn bảng, ở bên trái và ở giữa (gồm các nguyên tố s trừ H và He, các nguyên tố d, f và một số nguyên tố p); các phi kim ở góc trên bên phải; khí hiếm ở nhóm VIIIA.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Từ cấu hình electron đến vị trí',
          text: 'Viết cấu hình electron, rồi đọc: số lớp electron là số thứ tự chu kì; electron cuối cùng điền vào phân lớp nào thì nguyên tố thuộc khối đó; số electron hoá trị cho biết số thứ tự nhóm (nhóm A với nguyên tố s, p; nhóm B với nguyên tố d).',
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng tuần hoàn tô màu theo khối',
    instruction:
      'Ở chế độ "Đọc vị trí", bấm vào một nguyên tố (hoặc dùng các phím mũi tên) để xem cấu hình electron và cách suy ra chu kì, khối, nhóm của nó. Đổi cách tô màu để thấy khối s, p, d, f hay kim loại, phi kim. Sang chế độ "Tìm ô nguyên tố", bảng cho một chu kì và một nhóm, em bấm vào đúng ô.',
  },
  examples: [
    {
      problem:
        'Nguyên tố sulfur có $Z = 16$. Xác định vị trí của sulfur (ô, chu kì, nhóm) trong bảng tuần hoàn. Sulfur thuộc khối nào?',
      steps: [
        'Sulfur ở ô số $16$, nguyên tử có $16$ electron.',
        'Cấu hình electron: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$.',
        'Nguyên tử có $3$ lớp electron, nên sulfur thuộc chu kì 3.',
        'Electron cuối cùng điền vào phân lớp 3p, nên sulfur là nguyên tố p, thuộc nhóm A.',
        'Lớp ngoài cùng có $2 + 4 = 6$ electron, nên sulfur thuộc nhóm VIA.',
      ],
      answer: 'Sulfur ở ô số $16$, chu kì 3, nhóm VIA; là nguyên tố p.',
    },
    {
      problem:
        'Nguyên tố X ở chu kì 4, nhóm IA. Viết cấu hình electron của X và cho biết số hiệu nguyên tử của X.',
      steps: [
        'Chu kì 4 nên nguyên tử X có $4$ lớp electron.',
        'Nhóm IA nên lớp ngoài cùng có $1$ electron, nằm ở phân lớp 4s.',
        'Ba lớp bên trong giống argon: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6}$, rồi thêm $\\mathrm{4s^1}$.',
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^1}$, có $18 + 1 = 19$ electron.',
      ],
      answer: '$\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^1}$; $Z = 19$, X là potassium (K).',
    },
    {
      problem:
        'Nguyên tử iron có cấu hình electron $\\mathrm{[Ar]3d^6 4s^2}$. Xác định chu kì và nhóm của iron.',
      steps: [
        'Lớp ngoài cùng là lớp thứ $4$, nên iron thuộc chu kì 4.',
        'Electron cuối cùng điền vào phân lớp 3d (4s điền trước 3d), nên iron là nguyên tố d, thuộc nhóm B.',
        'Số electron hoá trị: $x + y = 6 + 2 = 8$.',
        'Tổng $8$ thuộc trường hợp $8, 9, 10$, nên iron thuộc nhóm VIIIB.',
      ],
      answer: 'Iron ở chu kì 4, nhóm VIIIB.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Các nguyên tố trong bảng tuần hoàn hiện nay được sắp xếp theo chiều tăng dần của',
      options: [
        'nguyên tử khối',
        'điện tích hạt nhân nguyên tử',
        'số neutron trong hạt nhân',
        'số electron lớp ngoài cùng',
      ],
      answer: 1,
      hints: ['Mendeleev dùng nguyên tử khối, nhưng bảng hiện nay dùng một đại lượng khác.'],
      solution:
        'Các nguyên tố được xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (bằng số hiệu nguyên tử $Z$). Nguyên tử khối là cách xếp của Mendeleev năm 1869.',
    },
    {
      type: 'number',
      prompt: 'Chu kì 3 có bao nhiêu nguyên tố?',
      answer: 8,
      hints: ['Chu kì 3 bắt đầu bằng sodium ($Z = 11$) và kết thúc bằng argon ($Z = 18$).'],
      solution:
        'Chu kì 3 gồm các nguyên tố từ $Z = 11$ (Na) đến $Z = 18$ (Ar): $18 - 11 + 1 = 8$ nguyên tố.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tố calcium có $Z = 20$. Calcium thuộc chu kì mấy?',
      answer: 4,
      hints: ['Viết cấu hình electron rồi đếm số lớp electron.', 'Nhớ 4s điền trước 3d.'],
      solution:
        'Cấu hình Ca: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^2}$, có $4$ lớp electron, nên calcium thuộc chu kì 4.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố phosphorus ($Z = 15$) thuộc nhóm nào?',
      options: ['IIIA', 'VA', 'VB', 'IIIB'],
      answer: 1,
      hints: [
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$. Electron cuối cùng vào phân lớp nào?',
        'Nguyên tố p thuộc nhóm A; đếm electron lớp ngoài cùng.',
      ],
      solution:
        'P: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$. Electron cuối cùng vào 3p nên P là nguyên tố p, thuộc nhóm A; lớp ngoài cùng có $2 + 3 = 5$ electron, nên P thuộc nhóm VA.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tố X ở chu kì 3, nhóm IIA. Số hiệu nguyên tử của X là bao nhiêu?',
      answer: 12,
      hints: [
        'Chu kì 3: có $3$ lớp electron. Nhóm IIA: lớp ngoài cùng có $2$ electron ở phân lớp 3s.',
      ],
      solution:
        'Cấu hình của X: $\\mathrm{1s^2 2s^2 2p^6 3s^2}$, có $2 + 2 + 6 + 2 = 12$ electron, nên $Z = 12$ (X là magnesium).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nguyên tố với khối của nó.',
      left: ['Na ($Z = 11$)', 'Cl ($Z = 17$)', 'Fe ($Z = 26$)', 'Ce ($Z = 58$, họ lanthanide)'],
      right: ['Nguyên tố s', 'Nguyên tố p', 'Nguyên tố d', 'Nguyên tố f'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Xem electron cuối cùng điền vào phân lớp nào.', 'Họ lanthanide là các nguyên tố f.'],
      solution:
        'Na: $\\mathrm{[Ne]3s^1}$, nguyên tố s. Cl: $\\mathrm{[Ne]3s^2 3p^5}$, nguyên tố p. Fe: $\\mathrm{[Ar]3d^6 4s^2}$, electron cuối cùng vào 3d, nguyên tố d. Ce thuộc họ lanthanide, nguyên tố f.',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên tử manganese có cấu hình electron $\\mathrm{[Ar]3d^5 4s^2}$. Manganese thuộc nhóm',
      options: ['IIA', 'VIIA', 'VIIB', 'VB'],
      answer: 2,
      hints: [
        'Electron cuối cùng vào phân lớp 3d, nên manganese thuộc nhóm B.',
        'Cộng số electron ở 3d và 4s.',
      ],
      solution:
        'Manganese là nguyên tố d nên thuộc nhóm B. Số electron hoá trị: $5 + 2 = 7$, nên manganese thuộc nhóm VIIB (chu kì 4).',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử của một nguyên tố nhóm VIA có bao nhiêu electron ở lớp ngoài cùng?',
      answer: 6,
      hints: ['Với nhóm A, số thứ tự nhóm bằng số electron lớp ngoài cùng.'],
      solution:
        'Nhóm VIA là nhóm A thứ sáu, nên nguyên tử có $6$ electron lớp ngoài cùng ($\\mathrm{ns^2 np^4}$).',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố copper ($Z = 29$, cấu hình $\\mathrm{[Ar]3d^{10} 4s^1}$) thuộc',
      options: [
        'chu kì 4, nhóm IA',
        'chu kì 4, nhóm IB',
        'chu kì 3, nhóm IB',
        'chu kì 4, nhóm VIIIB',
      ],
      answer: 1,
      hints: [
        'Copper là nguyên tố d, nên thuộc nhóm B, không phải nhóm A.',
        'Tổng số electron 3d và 4s là $10 + 1 = 11$.',
      ],
      solution:
        'Lớp ngoài cùng là lớp 4, nên copper thuộc chu kì 4. Electron cuối cùng vào 3d nên copper thuộc nhóm B; $x + y = 10 + 1 = 11$ ứng với nhóm IB.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Số thứ tự của ô nguyên tố bằng số hiệu nguyên tử của nguyên tố đó.',
        'Số thứ tự của chu kì bằng số electron lớp ngoài cùng.',
        'Bảng tuần hoàn có 7 chu kì, trong đó chu kì 1, 2, 3 là chu kì nhỏ.',
        'Nhóm A gồm các nguyên tố s và p.',
        'Nhóm VIIIB chỉ gồm một cột.',
      ],
      answers: [0, 2, 3],
      hints: ['Số thứ tự chu kì gắn với số lớp electron.', 'Đếm số cột của nhóm VIIIB.'],
      solution:
        'Đúng: ô số $Z$; 7 chu kì với 3 chu kì nhỏ; nhóm A gồm nguyên tố s, p. Sai: số thứ tự chu kì bằng số lớp electron, không phải số electron lớp ngoài cùng; nhóm VIIIB gồm 3 cột (cột 8, 9, 10).',
    },
  ],
  takeaways: [
    'Bảng tuần hoàn xếp các nguyên tố theo chiều tăng dần điện tích hạt nhân; cùng số lớp electron thì cùng hàng, cùng số electron hoá trị thì cùng cột.',
    'Số thứ tự ô bằng $Z$; số thứ tự chu kì bằng số lớp electron. Có 7 chu kì: 1, 2, 3 là chu kì nhỏ (2, 8, 8 nguyên tố), 4 đến 7 là chu kì lớn.',
    'Có 18 cột: 8 nhóm A (nguyên tố s, p; số thứ tự nhóm bằng số electron lớp ngoài cùng) và 8 nhóm B (nguyên tố d, f; nhóm VIIIB có 3 cột).',
    'Electron cuối cùng điền vào phân lớp s, p, d hay f thì nguyên tố thuộc khối s, p, d hay f.',
    'Nhóm B: cấu hình $\\mathrm{(n-1)d^x ns^y}$ với $x + y = 3 \\ldots 7$ là nhóm $(x + y)$B; $8, 9, 10$ là VIIIB; $11$ là IB; $12$ là IIB.',
  ],
};
