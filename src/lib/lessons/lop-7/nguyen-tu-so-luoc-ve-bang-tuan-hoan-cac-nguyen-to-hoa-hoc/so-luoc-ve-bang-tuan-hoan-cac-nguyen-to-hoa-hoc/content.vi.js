/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bảng tuần hoàn xếp 118 nguyên tố theo chiều tăng dần điện tích hạt nhân, gồm các ô nguyên tố, 7 chu kì (cùng số lớp electron) và các nhóm A, B (nhóm A cùng số electron lớp ngoài cùng); các nguyên tố được chia thành kim loại, phi kim và khí hiếm.',
  intro:
    'Trong thư viện, sách được xếp theo một quy tắc nên chỉ cần biết số kệ, số ngăn là tìm ra ngay cuốn sách cần đọc. Với 118 nguyên tố hoá học cũng vậy: các nhà khoa học xếp chúng vào một bảng sao cho chỉ cần nhìn vị trí của một nguyên tố là đoán được cấu tạo nguyên tử và tính chất của nó. Bảng đó được xây dựng theo nguyên tắc nào, và đọc nó ra sao?',
  objectives: [
    'Nêu được các nguyên tắc xây dựng bảng tuần hoàn các nguyên tố hoá học.',
    'Mô tả được cấu tạo bảng tuần hoàn gồm ô, chu kì, nhóm.',
    'Đọc được thông tin trong một ô nguyên tố và xác định được chu kì, nhóm của nguyên tố.',
    'Liên hệ được số thứ tự chu kì với số lớp electron, số thứ tự nhóm A với số electron lớp ngoài cùng.',
    'Chỉ ra được vùng các nguyên tố kim loại, phi kim, khí hiếm trong bảng tuần hoàn.',
  ],
  sections: [
    {
      heading: 'Nguyên tắc xây dựng bảng tuần hoàn',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1869, nhà hoá học người Nga Mendeleev sắp xếp khoảng 60 nguyên tố đã biết lúc đó theo chiều tăng dần khối lượng nguyên tử, đặt các nguyên tố có tính chất giống nhau vào cùng một cột. Ông còn để trống một số ô và dự đoán đúng tính chất của những nguyên tố về sau mới được tìm ra.',
        },
        {
          type: 'p',
          text: 'Ngày nay, bảng tuần hoàn gồm $118$ nguyên tố và được xây dựng dựa trên cấu tạo nguyên tử:',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc sắp xếp',
          text: '(1) Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử. (2) Các nguyên tố trong cùng một hàng có cùng số lớp electron trong nguyên tử. (3) Các nguyên tố trong cùng một cột có tính chất hoá học gần giống nhau.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Vì xếp theo điện tích hạt nhân (số proton) chứ không theo khối lượng, argon ($Z = 18$, khoảng $40$ amu) đứng trước potassium ($Z = 19$, khoảng $39$ amu).',
        },
      ],
    },
    {
      heading: 'Cấu tạo bảng tuần hoàn',
      blocks: [
        {
          type: 'p',
          text: 'Bảng tuần hoàn gồm các ô nguyên tố xếp thành hàng (chu kì) và cột (nhóm).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nguyên tố',
          text: 'Mỗi nguyên tố được xếp vào một ô. Ô nguyên tố cho biết số hiệu nguyên tử, kí hiệu hoá học, tên nguyên tố và khối lượng nguyên tử. Số hiệu nguyên tử ($Z$) bằng số đơn vị điện tích hạt nhân, bằng số proton, bằng số electron trong nguyên tử và bằng số thứ tự của ô nguyên tố.',
        },
        {
          type: 'p',
          text: 'Ví dụ, ô số $11$ cho biết: sodium, kí hiệu $\\mathrm{Na}$, khối lượng nguyên tử $22{,}99$ amu (thường làm tròn là $23$); nguyên tử sodium có $11$ proton và $11$ electron.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chu kì',
          text: 'Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được xếp thành một hàng theo chiều điện tích hạt nhân tăng dần từ trái sang phải. Số thứ tự của chu kì bằng số lớp electron.',
        },
        {
          type: 'list',
          items: [
            'Bảng tuần hoàn có $7$ chu kì, đánh số từ $1$ đến $7$.',
            'Chu kì $1$, $2$, $3$ là các chu kì nhỏ; chu kì $4$, $5$, $6$, $7$ là các chu kì lớn.',
            'Chu kì $1$ chỉ có $2$ nguyên tố là hydrogen và helium; chu kì $2$ có $8$ nguyên tố từ lithium đến neon; chu kì $3$ có $8$ nguyên tố từ sodium đến argon.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhóm',
          text: 'Nhóm là tập hợp các nguyên tố có tính chất hoá học tương tự nhau, được xếp thành một cột theo chiều điện tích hạt nhân tăng dần từ trên xuống dưới. Bảng tuần hoàn có $18$ cột, chia thành $8$ nhóm A (IA đến VIIIA) và $8$ nhóm B (IB đến VIIIB); riêng nhóm VIIIB gồm $3$ cột.',
        },
        {
          type: 'p',
          text: 'Với các nguyên tố nhóm A, số thứ tự của nhóm bằng số electron ở lớp ngoài cùng của nguyên tử (trừ helium: nhóm VIIIA nhưng chỉ có $2$ electron). Các nguyên tố cùng nhóm A có số electron lớp ngoài cùng bằng nhau nên có tính chất hoá học tương tự nhau.',
        },
        {
          type: 'table',
          caption: 'Vị trí của một số nguyên tố',
          head: ['Nguyên tố', 'Số electron mỗi lớp', 'Chu kì', 'Nhóm'],
          rows: [
            ['Lithium ($\\mathrm{Li}$, $Z = 3$)', '2, 1', '2', 'IA'],
            ['Sodium ($\\mathrm{Na}$, $Z = 11$)', '2, 8, 1', '3', 'IA'],
            ['Oxygen ($\\mathrm{O}$, $Z = 8$)', '2, 6', '2', 'VIA'],
            ['Sulfur ($\\mathrm{S}$, $Z = 16$)', '2, 8, 6', '3', 'VIA'],
            ['Chlorine ($\\mathrm{Cl}$, $Z = 17$)', '2, 8, 7', '3', 'VIIA'],
            ['Calcium ($\\mathrm{Ca}$, $Z = 20$)', '2, 8, 8, 2', '4', 'IIA'],
          ],
        },
        {
          type: 'list',
          items: [
            'Nhóm IA (trừ hydrogen) gồm các kim loại hoạt động hoá học mạnh, gọi là kim loại kiềm: lithium, sodium, potassium, …',
            'Nhóm VIIA gồm các phi kim hoạt động hoá học mạnh, gọi là halogen: fluorine, chlorine, bromine, …',
            'Nhóm VIIIA gồm các khí hiếm: helium, neon, argon, … Chúng rất khó tham gia phản ứng hoá học.',
          ],
        },
      ],
    },
    {
      heading: 'Kim loại, phi kim và khí hiếm',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào tính chất, các nguyên tố trong bảng tuần hoàn được chia thành ba loại: kim loại, phi kim và khí hiếm.',
        },
        {
          type: 'table',
          caption: 'Ba loại nguyên tố trong bảng tuần hoàn',
          head: ['Loại', 'Số nguyên tố', 'Vị trí trong bảng', 'Ví dụ'],
          rows: [
            [
              'Kim loại',
              'Hơn $90$',
              'Phần lớn ở nhóm IA, IIA, IIIA (một phần ở nhóm IVA, VA, VIA), toàn bộ các nhóm B và hai họ ở cuối bảng',
              '$\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Fe}$, $\\mathrm{Cu}$',
            ],
            [
              'Phi kim',
              'Chưa đến $20$',
              'Chủ yếu ở nhóm VA, VIA, VIIA (một số ở nhóm IIIA, IVA) và hydrogen ở nhóm IA',
              '$\\mathrm{H}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{S}$, $\\mathrm{Cl}$',
            ],
            [
              'Khí hiếm',
              '$7$',
              'Nhóm VIIIA, cột cuối cùng bên phải',
              '$\\mathrm{He}$, $\\mathrm{Ne}$, $\\mathrm{Ar}$',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong một chu kì, đi từ trái sang phải, đầu chu kì thường là kim loại, tiếp đến là phi kim và cuối chu kì là khí hiếm. Chẳng hạn chu kì 3: sodium, magnesium, aluminium là kim loại; silicon, phosphorus, sulfur, chlorine là phi kim; argon là khí hiếm.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Hydrogen đứng ở nhóm IA cùng các kim loại kiềm nhưng là một phi kim. Ở điều kiện thường, phi kim có thể ở thể rắn (carbon, sulfur), lỏng (bromine) hoặc khí (oxygen, chlorine).',
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng tuần hoàn tương tác',
    instruction:
      'Bấm vào một ô (hoặc Tab vào bảng rồi dùng phím mũi tên) để xem thông tin của nguyên tố: ô, chu kì, nhóm, số lớp electron và số electron lớp ngoài cùng. Màu ô cho biết kim loại, phi kim hay khí hiếm; dùng mục "Làm nổi bật" để soi từng chu kì, từng nhóm A hoặc từng loại nguyên tố. Trên điện thoại, vuốt ngang để xem hết bảng. Sau đó chuyển sang "Thử thách tìm ô".',
  },
  examples: [
    {
      problem:
        'Ô số $12$ trong bảng tuần hoàn là của nguyên tố magnesium ($\\mathrm{Mg}$). Cho biết số proton, số electron, số lớp electron, số electron lớp ngoài cùng; magnesium ở chu kì nào, nhóm nào và là kim loại, phi kim hay khí hiếm?',
      steps: [
        'Số thứ tự ô bằng số hiệu nguyên tử: $Z = 12$, nên nguyên tử có $12$ proton và $12$ electron.',
        'Xếp electron: $2$, $8$, $2$. Có $3$ lớp electron, lớp ngoài cùng có $2$ electron.',
        '$3$ lớp electron nên ở chu kì $3$; $2$ electron lớp ngoài cùng nên ở nhóm IIA.',
        'Nhóm IIA ở bên trái bảng, gồm các kim loại.',
      ],
      answer:
        'Magnesium có $12$ proton, $12$ electron, $3$ lớp electron với $2$ electron lớp ngoài cùng; ở chu kì $3$, nhóm IIA; là kim loại.',
    },
    {
      problem:
        'Nguyên tố X ở chu kì $2$, nhóm VIA. Xác định số lớp electron, số electron lớp ngoài cùng, số hiệu nguyên tử và tên của X.',
      steps: [
        'Chu kì $2$: nguyên tử có $2$ lớp electron.',
        'Nhóm VIA: lớp ngoài cùng có $6$ electron.',
        'Tổng số electron: $2 + 6 = 8$, nên $Z = 8$.',
        'Nguyên tố có $Z = 8$ là oxygen, một phi kim.',
      ],
      answer:
        'X có $2$ lớp electron, $6$ electron lớp ngoài cùng, $Z = 8$: X là oxygen ($\\mathrm{O}$).',
    },
    {
      problem:
        'Nguyên tử của nguyên tố Y có $18$ electron. Xác định vị trí của Y trong bảng tuần hoàn và cho biết Y thuộc loại nguyên tố nào.',
      steps: [
        'Y có $18$ electron nên $Z = 18$: Y nằm ở ô số $18$.',
        'Xếp electron: $2$, $8$, $8$. Có $3$ lớp electron nên Y ở chu kì $3$.',
        'Lớp ngoài cùng có $8$ electron nên Y ở nhóm VIIIA.',
        'Nhóm VIIIA là nhóm khí hiếm.',
      ],
      answer: 'Y là argon ($\\mathrm{Ar}$), ô số $18$, chu kì $3$, nhóm VIIIA; là khí hiếm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Các nguyên tố trong bảng tuần hoàn hiện nay được sắp xếp theo chiều tăng dần của',
      options: [
        'khối lượng nguyên tử',
        'số neutron',
        'điện tích hạt nhân nguyên tử',
        'số lớp electron',
      ],
      answer: 2,
      hints: [
        'Mendeleev xếp theo khối lượng; bảng ngày nay dựa trên cấu tạo nguyên tử.',
        'Argon đứng trước potassium dù nặng hơn.',
      ],
      solution:
        'Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (số proton).',
    },
    {
      type: 'number',
      prompt: 'Bảng tuần hoàn hiện nay có bao nhiêu chu kì?',
      answer: 7,
      hints: ['Đếm số hàng của bảng (không tính hai hàng tách riêng ở cuối bảng).'],
      solution:
        'Bảng tuần hoàn có $7$ chu kì: $3$ chu kì nhỏ ($1$, $2$, $3$) và $4$ chu kì lớn ($4$ đến $7$).',
    },
    {
      type: 'choice',
      prompt: 'Các nguyên tố trong cùng một chu kì có cùng',
      options: [
        'số electron lớp ngoài cùng',
        'số lớp electron',
        'số proton',
        'khối lượng nguyên tử',
      ],
      answer: 1,
      hints: ['Số thứ tự chu kì cho biết điều gì về nguyên tử?'],
      solution:
        'Chu kì là dãy các nguyên tố có cùng số lớp electron; số thứ tự chu kì bằng số lớp electron. Cùng số electron lớp ngoài cùng là đặc điểm của các nguyên tố cùng nhóm A.',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tố chlorine ở nhóm VIIA. Lớp ngoài cùng của nguyên tử chlorine có bao nhiêu electron?',
      answer: 7,
      hints: ['Với nhóm A, số thứ tự nhóm bằng số electron lớp ngoài cùng.'],
      solution: 'Nhóm VIIA nên lớp ngoài cùng có $7$ electron (chlorine: $2$, $8$, $7$).',
    },
    {
      type: 'number',
      prompt: 'Nguyên tố X ở chu kì $3$, nhóm IIIA. Số hiệu nguyên tử của X là bao nhiêu?',
      answer: 13,
      hints: [
        'Chu kì $3$: có $3$ lớp electron; nhóm IIIA: lớp ngoài cùng có $3$ electron.',
        'Hai lớp trong có $2$ và $8$ electron.',
      ],
      solution: 'Số electron: $2 + 8 + 3 = 13$, nên $Z = 13$. X là aluminium ($\\mathrm{Al}$).',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên tố potassium ($\\mathrm{K}$, $Z = 19$) nằm ở vị trí nào trong bảng tuần hoàn?',
      options: [
        'Chu kì 3, nhóm IA',
        'Chu kì 4, nhóm IA',
        'Chu kì 4, nhóm IIA',
        'Chu kì 1, nhóm IVA',
      ],
      answer: 1,
      hints: ['Xếp $19$ electron vào các lớp: $2$, $8$, $8$, …'],
      solution:
        'Potassium có $19$ electron xếp thành $2$, $8$, $8$, $1$: $4$ lớp nên ở chu kì $4$; $1$ electron lớp ngoài cùng nên ở nhóm IA.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên tố kim loại.',
      options: [
        'Sodium ($\\mathrm{Na}$)',
        'Sulfur ($\\mathrm{S}$)',
        'Iron ($\\mathrm{Fe}$)',
        'Neon ($\\mathrm{Ne}$)',
        'Chlorine ($\\mathrm{Cl}$)',
        'Calcium ($\\mathrm{Ca}$)',
      ],
      answers: [0, 2, 5],
      hints: ['Kim loại nằm bên trái và ở giữa bảng (các nhóm B).', 'Neon ở cột cuối cùng.'],
      solution:
        'Kim loại: sodium (nhóm IA), iron (nhóm VIIIB), calcium (nhóm IIA). Sulfur và chlorine là phi kim; neon là khí hiếm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nhóm với tên gọi các nguyên tố trong nhóm đó.',
      left: ['Nhóm IA (trừ hydrogen)', 'Nhóm VIIA', 'Nhóm VIIIA'],
      right: ['Khí hiếm', 'Kim loại kiềm', 'Halogen'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Cột cuối cùng bên phải gồm các nguyên tố rất khó phản ứng.'],
      solution: 'Nhóm IA (trừ hydrogen): kim loại kiềm; nhóm VIIA: halogen; nhóm VIIIA: khí hiếm.',
    },
    {
      type: 'text',
      prompt: 'Nguyên tố ở chu kì $1$, nhóm VIIIA có tên là gì?',
      accept: ['helium', 'He'],
      hints: ['Chu kì $1$ chỉ có hai nguyên tố.', 'Nhóm VIIIA là nhóm khí hiếm.'],
      solution:
        'Chu kì $1$ gồm hydrogen và helium; helium ($\\mathrm{He}$) là khí hiếm ở nhóm VIIIA.',
    },
    {
      type: 'number',
      prompt: 'Chu kì $2$ của bảng tuần hoàn có bao nhiêu nguyên tố?',
      answer: 8,
      hints: ['Chu kì $2$ bắt đầu từ lithium ($Z = 3$) và kết thúc ở neon ($Z = 10$).'],
      solution: 'Chu kì $2$ gồm các nguyên tố từ $Z = 3$ đến $Z = 10$: $10 - 3 + 1 = 8$ nguyên tố.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về ô nguyên tố là đúng?',
      options: [
        'Số hiệu nguyên tử bằng số neutron trong hạt nhân.',
        'Số hiệu nguyên tử bằng số thứ tự của ô và bằng số proton.',
        'Khối lượng nguyên tử bằng số thứ tự của ô.',
        'Ô nguyên tố chỉ cho biết kí hiệu hoá học.',
      ],
      answer: 1,
      hints: [
        'Ô nguyên tố cho biết bốn thông tin.',
        'Khối lượng của sodium là $23$ amu nhưng sodium ở ô số $11$.',
      ],
      solution:
        'Số hiệu nguyên tử $Z$ bằng số thứ tự ô, bằng số proton và số electron. Ô nguyên tố còn cho biết kí hiệu, tên và khối lượng nguyên tử; khối lượng nguyên tử không bằng số thứ tự ô.',
    },
  ],
  takeaways: [
    'Bảng tuần hoàn xếp các nguyên tố theo chiều tăng dần điện tích hạt nhân; cùng hàng thì cùng số lớp electron, cùng cột thì tính chất hoá học gần giống nhau.',
    'Ô nguyên tố cho biết số hiệu nguyên tử, kí hiệu, tên và khối lượng nguyên tử; $Z$ = số thứ tự ô = số proton = số electron.',
    'Có $7$ chu kì (1–3 nhỏ, 4–7 lớn); số thứ tự chu kì bằng số lớp electron.',
    'Có $8$ nhóm A và $8$ nhóm B; với nhóm A, số thứ tự nhóm bằng số electron lớp ngoài cùng.',
    'Hơn $90$ nguyên tố là kim loại (bên trái và giữa bảng), chưa đến $20$ là phi kim (bên phải), $7$ khí hiếm ở nhóm VIIIA.',
  ],
};
