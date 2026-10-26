/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên tố hoá học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân; mỗi nguyên tố có tên gọi theo IUPAC và một kí hiệu hoá học gồm một hoặc hai chữ cái; học sinh làm quen với tên và kí hiệu của 20 nguyên tố đầu tiên.',
  intro:
    'Than chì trong ruột bút chì và kim cương trên chiếc nhẫn trông chẳng giống nhau chút nào, nhưng đều chỉ gồm các nguyên tử có 6 proton. Oxygen trong không khí em thở và oxygen trong phân tử nước cũng là các nguyên tử có 8 proton. Các nhà khoa học gọi mỗi "loại" nguyên tử như thế là một nguyên tố hoá học. Vậy có bao nhiêu nguyên tố, chúng được gọi tên và viết kí hiệu ra sao?',
  objectives: [
    'Phát biểu được khái niệm nguyên tố hoá học.',
    'Nhận biết được các nguyên tử cùng một nguyên tố dựa vào số proton.',
    'Viết đúng kí hiệu hoá học theo quy tắc một hoặc hai chữ cái.',
    'Đọc được tên và viết được kí hiệu hoá học của 20 nguyên tố đầu tiên.',
  ],
  sections: [
    {
      heading: 'Nguyên tố hoá học là gì?',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tố hoá học',
          text: 'Nguyên tố hoá học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân.',
        },
        {
          type: 'p',
          text: 'Số proton là số đặc trưng của một nguyên tố hoá học: các nguyên tử có cùng số proton thì thuộc cùng một nguyên tố, có số proton khác nhau thì thuộc các nguyên tố khác nhau. Số proton này còn được gọi là số hiệu nguyên tử, kí hiệu là $Z$.',
        },
        {
          type: 'p',
          text: 'Các nguyên tử của cùng một nguyên tố có thể có số neutron khác nhau. Chẳng hạn, nguyên tử oxygen luôn có 8 proton nhưng có thể có 8, 9 hoặc 10 neutron; tất cả đều là nguyên tử của nguyên tố oxygen và có tính chất hoá học như nhau.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thử xếp nhóm',
          text: 'Mỗi thẻ dưới đây mô tả một nguyên tử. Hãy xếp chúng vào đúng nguyên tố. Có thẻ chỉ cho biết số electron: nhớ rằng trong nguyên tử, số electron bằng số proton.',
        },
        { type: 'widget', name: 'cung-nguyen-to' },
        {
          type: 'p',
          text: 'Đến nay, con người đã tìm ra $118$ nguyên tố hoá học. Một số nguyên tố được biết đến từ thời cổ đại như vàng, bạc, sắt, thuỷ ngân, thiếc, đồng, chì; một số mới được tạo ra gần đây trong phòng thí nghiệm như rutherfordium, bohrium.',
        },
        {
          type: 'p',
          text: 'Các nguyên tố có vai trò rất khác nhau với sự sống. Bốn nguyên tố oxygen, carbon, hydrogen và nitrogen chiếm khoảng $96\\%$ khối lượng cơ thể người; phần còn lại khoảng $4\\%$ gồm phosphorus, sulfur, calcium, potassium và nhiều nguyên tố khác. Có nguyên tố chỉ chiếm lượng rất nhỏ nhưng không thể thiếu, như sắt (iron) có trong máu.',
        },
      ],
    },
    {
      heading: 'Tên và kí hiệu hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Để thống nhất trên toàn thế giới, tên các nguyên tố được gọi theo quy định của IUPAC (Liên minh Quốc tế về Hoá học thuần tuý và Hoá học ứng dụng): hydrogen, oxygen, sodium, potassium, … Mỗi nguyên tố còn được biểu diễn ngắn gọn bằng một kí hiệu hoá học.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quy tắc viết kí hiệu hoá học',
          text: 'Kí hiệu hoá học gồm một hoặc hai chữ cái lấy từ tên nguyên tố. Chữ cái đầu viết in hoa; nếu có chữ cái thứ hai thì viết thường và nhỏ hơn chữ cái đầu. Ví dụ: $\\mathrm{H}$ (hydrogen), $\\mathrm{O}$ (oxygen), $\\mathrm{He}$ (helium), $\\mathrm{Li}$ (lithium), $\\mathrm{Cl}$ (chlorine).',
        },
        {
          type: 'p',
          text: 'Một số kí hiệu lấy từ tên Latin của nguyên tố, nên không giống tên IUPAC:',
        },
        {
          type: 'table',
          caption: 'Một số kí hiệu bắt nguồn từ tên Latin',
          head: ['Nguyên tố', 'Tên Latin', 'Kí hiệu'],
          rows: [
            ['Sodium (natri)', 'natrium', '$\\mathrm{Na}$'],
            ['Potassium (kali)', 'kalium', '$\\mathrm{K}$'],
            ['Iron (sắt)', 'ferrum', '$\\mathrm{Fe}$'],
            ['Copper (đồng)', 'cuprum', '$\\mathrm{Cu}$'],
            ['Silver (bạc)', 'argentum', '$\\mathrm{Ag}$'],
            ['Gold (vàng)', 'aurum', '$\\mathrm{Au}$'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Viết sai chữ hoa, chữ thường sẽ làm sai nghĩa: $\\mathrm{Co}$ là kí hiệu của nguyên tố cobalt, còn $\\mathrm{CO}$ là công thức của một chất gồm carbon và oxygen. Không viết $\\mathrm{CL}$, $\\mathrm{cl}$ hay $\\mathrm{cL}$ mà phải viết $\\mathrm{Cl}$.',
        },
      ],
    },
    {
      heading: 'Hai mươi nguyên tố đầu tiên',
      blocks: [
        {
          type: 'p',
          text: 'Bảng dưới đây xếp 20 nguyên tố đầu tiên theo số proton tăng dần. Em cần đọc được tên và viết đúng kí hiệu của các nguyên tố này.',
        },
        {
          type: 'table',
          caption: 'Tên, kí hiệu và khối lượng nguyên tử của 20 nguyên tố đầu tiên',
          head: ['Số proton', 'Tên nguyên tố', 'Kí hiệu', 'Khối lượng nguyên tử (amu)'],
          rows: [
            ['1', 'Hydrogen', '$\\mathrm{H}$', '1'],
            ['2', 'Helium', '$\\mathrm{He}$', '4'],
            ['3', 'Lithium', '$\\mathrm{Li}$', '7'],
            ['4', 'Beryllium', '$\\mathrm{Be}$', '9'],
            ['5', 'Boron', '$\\mathrm{B}$', '11'],
            ['6', 'Carbon', '$\\mathrm{C}$', '12'],
            ['7', 'Nitrogen', '$\\mathrm{N}$', '14'],
            ['8', 'Oxygen', '$\\mathrm{O}$', '16'],
            ['9', 'Fluorine', '$\\mathrm{F}$', '19'],
            ['10', 'Neon', '$\\mathrm{Ne}$', '20'],
            ['11', 'Sodium', '$\\mathrm{Na}$', '23'],
            ['12', 'Magnesium', '$\\mathrm{Mg}$', '24'],
            ['13', 'Aluminium', '$\\mathrm{Al}$', '27'],
            ['14', 'Silicon', '$\\mathrm{Si}$', '28'],
            ['15', 'Phosphorus', '$\\mathrm{P}$', '31'],
            ['16', 'Sulfur', '$\\mathrm{S}$', '32'],
            ['17', 'Chlorine', '$\\mathrm{Cl}$', '$35{,}5$'],
            ['18', 'Argon', '$\\mathrm{Ar}$', '40'],
            ['19', 'Potassium', '$\\mathrm{K}$', '39'],
            ['20', 'Calcium', '$\\mathrm{Ca}$', '40'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Khối lượng nguyên tử chlorine là $35{,}5$ amu vì chlorine trong tự nhiên là hỗn hợp các nguyên tử có 18 hoặc 20 neutron. Chú ý thêm: argon ($Z = 18$) nặng hơn potassium ($Z = 19$); thứ tự các nguyên tố là theo số proton, không theo khối lượng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trò chơi thẻ nhớ',
    instruction:
      'Mỗi lượt lật hai thẻ úp. Nếu hai thẻ là tên, kí hiệu hoặc số proton của cùng một nguyên tố thì chúng ở lại; nếu không, đọc lời giải thích rồi bấm thẻ tiếp theo để chơi tiếp. Đổi kiểu ghép để luyện cả ba cách nhận ra một nguyên tố; bấm "Ván mới" để gặp các nguyên tố khác trong 20 nguyên tố đầu tiên.',
  },
  examples: [
    {
      problem:
        'Cho bốn nguyên tử: X có 6 proton, 6 neutron; Y có 7 proton, 7 neutron; Z có 6 proton, 8 neutron; T có 7 electron, 8 neutron. Những nguyên tử nào thuộc cùng một nguyên tố? Đó là nguyên tố nào?',
      steps: [
        'Chỉ xét số proton; số neutron không quyết định nguyên tố.',
        'T có 7 electron, nguyên tử trung hoà nên T có 7 proton.',
        'X và Z cùng có 6 proton; Y và T cùng có 7 proton.',
      ],
      answer:
        'X và Z thuộc nguyên tố carbon ($\\mathrm{C}$); Y và T thuộc nguyên tố nitrogen ($\\mathrm{N}$).',
    },
    {
      problem:
        'Một bạn viết kí hiệu các nguyên tố như sau: magnesium là $\\mathrm{MG}$, calcium là $\\mathrm{cA}$, chlorine là $\\mathrm{Cl}$, sodium là $\\mathrm{So}$. Chỉ ra kí hiệu viết sai và sửa lại.',
      steps: [
        'Chữ cái đầu in hoa, chữ cái thứ hai viết thường.',
        '$\\mathrm{MG}$ sai vì chữ thứ hai viết hoa: sửa thành $\\mathrm{Mg}$.',
        '$\\mathrm{cA}$ sai vì chữ đầu viết thường, chữ sau viết hoa: sửa thành $\\mathrm{Ca}$.',
        '$\\mathrm{Cl}$ đúng.',
        'Sodium có kí hiệu lấy từ tên Latin natrium: $\\mathrm{Na}$, không phải $\\mathrm{So}$.',
      ],
      answer:
        'Sửa lại: $\\mathrm{Mg}$, $\\mathrm{Ca}$, $\\mathrm{Na}$; riêng $\\mathrm{Cl}$ đã đúng.',
    },
    {
      problem:
        'Nguyên tử của nguyên tố R có 3 lớp electron, lớp ngoài cùng có 7 electron. Cho biết số proton, tên và kí hiệu của R.',
      steps: [
        'Số electron: $2 + 8 + 7 = 17$.',
        'Số proton bằng số electron: $17$ proton.',
        'Tra bảng 20 nguyên tố đầu tiên: nguyên tố có 17 proton là chlorine.',
      ],
      answer: 'R có $17$ proton, là nguyên tố chlorine, kí hiệu $\\mathrm{Cl}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tố hoá học là tập hợp những nguyên tử cùng loại, có cùng',
      options: [
        'số neutron trong hạt nhân',
        'số proton trong hạt nhân',
        'khối lượng nguyên tử',
        'tổng số proton và neutron',
      ],
      answer: 1,
      hints: ['Các nguyên tử oxygen có thể có 8, 9 hoặc 10 neutron mà vẫn là oxygen.'],
      solution:
        'Nguyên tố hoá học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân. Số neutron, và do đó khối lượng, có thể khác nhau.',
    },
    {
      type: 'multi',
      prompt:
        'Cho các nguyên tử: (1) 11 proton, 12 neutron; (2) 12 proton, 12 neutron; (3) 12 proton, 13 neutron; (4) 11 neutron, 12 proton. Những nguyên tử nào thuộc cùng một nguyên tố với nguyên tử (2)?',
      options: ['Nguyên tử (1)', 'Nguyên tử (3)', 'Nguyên tử (4)'],
      answers: [1, 2],
      hints: ['Chỉ so sánh số proton.', 'Đọc kĩ nguyên tử (4): con số nào đi với chữ "proton"?'],
      solution:
        'Nguyên tử (2) có 12 proton. Nguyên tử (3) và (4) cũng có 12 proton nên cùng là magnesium; nguyên tử (1) có 11 proton nên là sodium.',
    },
    {
      type: 'choice',
      prompt: 'Kí hiệu hoá học của nguyên tố magnesium được viết đúng là',
      options: ['$\\mathrm{MG}$', '$\\mathrm{mg}$', '$\\mathrm{Mg}$', '$\\mathrm{Mn}$'],
      answer: 2,
      hints: ['Chữ cái đầu in hoa, chữ cái thứ hai viết thường.', '$\\mathrm{Mn}$ là manganese.'],
      solution:
        'Magnesium có kí hiệu $\\mathrm{Mg}$. $\\mathrm{MG}$ và $\\mathrm{mg}$ viết sai chữ hoa, chữ thường; $\\mathrm{Mn}$ là kí hiệu của manganese.',
    },
    {
      type: 'text',
      prompt: 'Nguyên tố có kí hiệu $\\mathrm{K}$ có tên gọi theo IUPAC là gì?',
      accept: ['potassium', 'kali'],
      hints: ['Kí hiệu $\\mathrm{K}$ lấy từ tên Latin kalium.', 'Nguyên tố này có 19 proton.'],
      solution:
        '$\\mathrm{K}$ là kí hiệu của potassium (tên thường gọi là kali), lấy từ tên Latin kalium.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử silicon ($\\mathrm{Si}$) có bao nhiêu proton?',
      answer: 14,
      hints: ['Tra bảng 20 nguyên tố đầu tiên: silicon đứng ngay sau aluminium ($Z = 13$).'],
      solution: 'Silicon có số proton $Z = 14$.',
    },
    {
      type: 'match',
      prompt: 'Nối tên nguyên tố với kí hiệu hoá học của nó.',
      left: ['Sodium', 'Sulfur', 'Phosphorus', 'Fluorine', 'Calcium'],
      right: [
        '$\\mathrm{F}$',
        '$\\mathrm{Ca}$',
        '$\\mathrm{S}$',
        '$\\mathrm{Na}$',
        '$\\mathrm{P}$',
        '$\\mathrm{C}$',
      ],
      pairs: [
        [0, 3],
        [1, 2],
        [2, 4],
        [3, 0],
        [4, 1],
      ],
      hints: [
        'Kí hiệu thường là chữ cái đầu của tên; sodium là trường hợp đặc biệt.',
        '$\\mathrm{C}$ là carbon, không thuộc danh sách bên trái.',
      ],
      solution:
        'Sodium – $\\mathrm{Na}$ (từ natrium); sulfur – $\\mathrm{S}$; phosphorus – $\\mathrm{P}$; fluorine – $\\mathrm{F}$; calcium – $\\mathrm{Ca}$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các nguyên tố theo số proton tăng dần.',
      items: ['Neon', 'Carbon', 'Sodium', 'Hydrogen', 'Argon'],
      answer: [3, 1, 0, 2, 4],
      hints: ['Hydrogen có ít proton nhất: 1.', 'Neon có 10 proton, sodium có 11 proton.'],
      solution: 'Hydrogen (1) < carbon (6) < neon (10) < sodium (11) < argon (18).',
    },
    {
      type: 'number',
      prompt: 'Đến nay, con người đã tìm ra bao nhiêu nguyên tố hoá học?',
      answer: 118,
      hints: ['Đó cũng là số ô của bảng tuần hoàn hiện nay.'],
      solution: 'Đến nay, con người đã tìm ra $118$ nguyên tố hoá học.',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên tử của nguyên tố X có 2 lớp electron, lớp ngoài cùng có 6 electron. X là nguyên tố nào?',
      options: [
        'Carbon ($\\mathrm{C}$)',
        'Oxygen ($\\mathrm{O}$)',
        'Sulfur ($\\mathrm{S}$)',
        'Neon ($\\mathrm{Ne}$)',
      ],
      answer: 1,
      hints: ['Số electron bằng $2 + 6$.', 'Số proton bằng số electron.'],
      solution:
        'X có $2 + 6 = 8$ electron nên có $8$ proton: X là oxygen ($\\mathrm{O}$). Sulfur cũng có 6 electron lớp ngoài cùng nhưng có 3 lớp electron.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các kí hiệu hoá học được viết đúng.',
      options: [
        '$\\mathrm{Al}$',
        '$\\mathrm{AR}$',
        '$\\mathrm{he}$',
        '$\\mathrm{N}$',
        '$\\mathrm{Cl}$',
        '$\\mathrm{bE}$',
      ],
      answers: [0, 3, 4],
      hints: ['Chữ cái đầu in hoa, chữ cái thứ hai (nếu có) viết thường.'],
      solution:
        'Đúng: $\\mathrm{Al}$, $\\mathrm{N}$, $\\mathrm{Cl}$. Sai: $\\mathrm{AR}$ (phải là $\\mathrm{Ar}$), $\\mathrm{he}$ (phải là $\\mathrm{He}$), $\\mathrm{bE}$ (phải là $\\mathrm{Be}$).',
    },
  ],
  takeaways: [
    'Nguyên tố hoá học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân.',
    'Số proton là số đặc trưng của nguyên tố; các nguyên tử cùng nguyên tố có thể có số neutron khác nhau.',
    'Đến nay đã biết $118$ nguyên tố; tên nguyên tố gọi theo IUPAC.',
    'Kí hiệu hoá học gồm một hoặc hai chữ cái: chữ đầu in hoa, chữ thứ hai viết thường; một số kí hiệu lấy từ tên Latin ($\\mathrm{Na}$, $\\mathrm{K}$, $\\mathrm{Fe}$, $\\mathrm{Cu}$).',
  ],
};
