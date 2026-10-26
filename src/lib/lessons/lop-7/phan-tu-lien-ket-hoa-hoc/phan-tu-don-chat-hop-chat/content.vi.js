/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau; khối lượng phân tử bằng tổng khối lượng các nguyên tử trong phân tử (amu). Đơn chất được tạo nên từ một nguyên tố, hợp chất từ hai nguyên tố trở lên.',
  intro:
    'Khí oxygen ta hít thở, nước ta uống hay khí carbon dioxide ta thở ra đều được tạo nên từ các nguyên tử. Nhưng trong một cốc nước, các nguyên tử hydrogen và oxygen không nằm lộn xộn: chúng liên kết với nhau thành từng nhóm giống hệt nhau. Mỗi nhóm như thế là gì, nặng bao nhiêu, và vì sao oxygen được gọi là đơn chất còn nước lại là hợp chất?',
  objectives: [
    'Nêu được khái niệm đơn chất, hợp chất và đưa ra được ví dụ.',
    'Phân biệt được đơn chất với hợp chất khi biết các nguyên tố tạo nên chất.',
    'Nêu được khái niệm phân tử.',
    'Tính được khối lượng phân tử theo đơn vị amu.',
  ],
  sections: [
    {
      heading: 'Đơn chất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đơn chất',
          text: 'Đơn chất là những chất được tạo nên từ một nguyên tố hoá học.',
        },
        {
          type: 'list',
          items: [
            'Đơn chất kim loại, ví dụ copper (Cu), iron (Fe), aluminium (Al): có ánh kim, dẫn điện và dẫn nhiệt tốt; ở điều kiện thường hầu hết ở thể rắn (trừ thuỷ ngân).',
            'Đơn chất phi kim, ví dụ sulfur (S), carbon (C), oxygen ($\\mathrm{O_2}$), nitrogen ($\\mathrm{N_2}$): thường không dẫn điện, không dẫn nhiệt; ở điều kiện thường có thể ở thể rắn, lỏng hoặc khí.',
            'Đơn chất khí hiếm, ví dụ helium (He), neon (Ne): ở điều kiện thường đều là chất khí, tồn tại dưới dạng các nguyên tử riêng rẽ.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Một nguyên tố có thể tạo nên nhiều đơn chất khác nhau. Nguyên tố oxygen tạo nên khí oxygen ($\\mathrm{O_2}$) và khí ozone ($\\mathrm{O_3}$); nguyên tố carbon tạo nên than chì và kim cương.',
        },
      ],
    },
    {
      heading: 'Hợp chất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hợp chất',
          text: 'Hợp chất là những chất được tạo nên từ hai hay nhiều nguyên tố hoá học.',
        },
        {
          type: 'table',
          caption: 'Một số hợp chất quen thuộc',
          head: ['Hợp chất', 'Nguyên tố tạo nên'],
          rows: [
            ['Nước ($\\mathrm{H_2O}$)', 'Hydrogen, oxygen'],
            ['Muối ăn, sodium chloride ($\\mathrm{NaCl}$)', 'Sodium, chlorine'],
            ['Carbon dioxide ($\\mathrm{CO_2}$)', 'Carbon, oxygen'],
            ['Đá vôi, calcium carbonate ($\\mathrm{CaCO_3}$)', 'Calcium, carbon, oxygen'],
            ['Đường mía, saccharose ($\\mathrm{C_{12}H_{22}O_{11}}$)', 'Carbon, hydrogen, oxygen'],
          ],
        },
        {
          type: 'p',
          text: 'Tính chất của hợp chất khác hẳn tính chất của các đơn chất tạo nên nó. Sodium là kim loại phản ứng mãnh liệt với nước, chlorine là khí độc màu vàng lục, nhưng sodium chloride lại là muối ăn hằng ngày.',
        },
        { type: 'widget', name: 'phan-loai-chat' },
      ],
    },
    {
      heading: 'Phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Trong khí oxygen, cứ hai nguyên tử oxygen liên kết với nhau thành một hạt. Trong nước, mỗi nguyên tử oxygen liên kết với hai nguyên tử hydrogen thành một hạt. Mọi hạt nước đều giống hệt nhau và mang đầy đủ tính chất hoá học của nước.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân tử',
          text: 'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.',
        },
        {
          type: 'table',
          caption: 'Thành phần phân tử của một số chất',
          head: ['Chất', 'Số nguyên tử trong một phân tử', 'Nguyên tố tạo nên'],
          rows: [
            ['Hydrogen ($\\mathrm{H_2}$)', '$2$ nguyên tử H', 'H'],
            ['Oxygen ($\\mathrm{O_2}$)', '$2$ nguyên tử O', 'O'],
            ['Nước ($\\mathrm{H_2O}$)', '$2$ nguyên tử H, $1$ nguyên tử O', 'H, O'],
            ['Carbon dioxide ($\\mathrm{CO_2}$)', '$1$ nguyên tử C, $2$ nguyên tử O', 'C, O'],
            ['Methane ($\\mathrm{CH_4}$)', '$1$ nguyên tử C, $4$ nguyên tử H', 'C, H'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Với các kim loại (copper, iron, …) và các khí hiếm (helium, neon, …), hạt đại diện cho chất chính là nguyên tử.',
        },
      ],
    },
    {
      heading: 'Khối lượng phân tử',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khối lượng phân tử',
          text: 'Khối lượng phân tử bằng tổng khối lượng của các nguyên tử trong phân tử. Đơn vị của khối lượng phân tử là amu, giống đơn vị khối lượng nguyên tử.',
        },
        {
          type: 'p',
          text: 'Muốn tính khối lượng phân tử, ta nhân khối lượng nguyên tử của mỗi nguyên tố với số nguyên tử của nguyên tố đó trong phân tử, rồi cộng lại. Ví dụ, phân tử nước gồm 2 nguyên tử H và 1 nguyên tử O:',
        },
        { type: 'tex', tex: '2 \\cdot 1 + 1 \\cdot 16 = 18\\ \\mathrm{amu}' },
        {
          type: 'table',
          caption: 'Khối lượng nguyên tử (làm tròn) dùng trong bài',
          head: ['Nguyên tố', 'H', 'C', 'N', 'O', 'S', 'Cl'],
          rows: [['Khối lượng (amu)', '$1$', '$12$', '$14$', '$16$', '$32$', '$35{,}5$']],
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ lắp mô hình phân tử',
    instruction:
      'Bấm $+$ và $-$ để lấy các quả cầu nguyên tử. Bộ lắp cho biết công thức, chất là đơn chất hay hợp chất, và tính khối lượng phân tử theo amu. Khi các nguyên tử ghép thành một phân tử quen thuộc, mô hình quả cầu – que hiện ra. Hãy giải lần lượt các thử thách.',
  },
  examples: [
    {
      problem:
        'Cho các chất: khí nitrogen ($\\mathrm{N_2}$), copper (Cu), ammonia ($\\mathrm{NH_3}$), khí ozone ($\\mathrm{O_3}$), sodium chloride ($\\mathrm{NaCl}$). Chất nào là đơn chất, chất nào là hợp chất?',
      steps: [
        'Đếm số nguyên tố tạo nên mỗi chất: $\\mathrm{N_2}$ chỉ có N; Cu chỉ có Cu; $\\mathrm{O_3}$ chỉ có O.',
        '$\\mathrm{NH_3}$ được tạo nên từ N và H; $\\mathrm{NaCl}$ được tạo nên từ Na và Cl.',
        'Chất tạo nên từ một nguyên tố là đơn chất, từ hai nguyên tố trở lên là hợp chất.',
      ],
      answer:
        'Đơn chất: $\\mathrm{N_2}$, Cu, $\\mathrm{O_3}$. Hợp chất: $\\mathrm{NH_3}$, $\\mathrm{NaCl}$.',
    },
    {
      problem:
        'Tính khối lượng phân tử của oxygen ($\\mathrm{O_2}$) và carbon dioxide ($\\mathrm{CO_2}$).',
      steps: [
        'Phân tử oxygen gồm $2$ nguyên tử O: $2 \\cdot 16 = 32$ amu.',
        'Phân tử carbon dioxide gồm $1$ nguyên tử C và $2$ nguyên tử O: $1 \\cdot 12 + 2 \\cdot 16 = 44$ amu.',
      ],
      answer: 'Khối lượng phân tử oxygen là $32$ amu, của carbon dioxide là $44$ amu.',
    },
    {
      problem:
        'Phân tử một hợp chất gồm $1$ nguyên tử của nguyên tố X liên kết với $4$ nguyên tử hydrogen; khối lượng phân tử là $16$ amu. Tìm khối lượng nguyên tử của X và cho biết X là nguyên tố nào.',
      steps: [
        'Bốn nguyên tử H nặng $4 \\cdot 1 = 4$ amu.',
        'Khối lượng nguyên tử X là $16 - 4 = 12$ amu.',
        'Nguyên tố có khối lượng nguyên tử $12$ amu là carbon (C).',
      ],
      answer: 'X là carbon, khối lượng nguyên tử $12$ amu; hợp chất là methane $\\mathrm{CH_4}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về phân tử là đúng?',
      options: [
        'Phân tử là hạt nhỏ nhất, không thể chia nhỏ hơn được nữa.',
        'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.',
        'Phân tử của mọi chất đều gồm hai nguyên tử.',
        'Phân tử chỉ có ở hợp chất, đơn chất không có phân tử.',
      ],
      answer: 1,
      hints: ['Nhớ lại khái niệm: phân tử "đại diện" cho chất.'],
      solution:
        'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất. Phân tử còn chia được thành các nguyên tử; số nguyên tử trong phân tử tuỳ chất ($\\mathrm{O_3}$ có $3$); đơn chất như $\\mathrm{O_2}$ cũng có phân tử.',
    },
    {
      type: 'number',
      prompt: 'Tính khối lượng phân tử của ammonia $\\mathrm{NH_3}$ (N = 14, H = 1).',
      answer: 17,
      unit: 'amu',
      hints: ['Phân tử gồm $1$ nguyên tử N và $3$ nguyên tử H.'],
      solution: '$1 \\cdot 14 + 3 \\cdot 1 = 17$ amu.',
    },
    {
      type: 'number',
      prompt: 'Tính khối lượng phân tử của hydrogen chloride $\\mathrm{HCl}$ (H = 1, Cl = 35,5).',
      answer: 36.5,
      tolerance: 0.01,
      unit: 'amu',
      hints: ['Cộng khối lượng một nguyên tử H và một nguyên tử Cl.'],
      solution: '$1 + 35{,}5 = 36{,}5$ amu.',
    },
    {
      type: 'number',
      prompt:
        'Đường mía (saccharose) có công thức $\\mathrm{C_{12}H_{22}O_{11}}$. Tính khối lượng phân tử của saccharose (C = 12, H = 1, O = 16).',
      answer: 342,
      unit: 'amu',
      hints: [
        'Phân tử có $12$ nguyên tử C, $22$ nguyên tử H và $11$ nguyên tử O.',
        'Tính $12 \\cdot 12$, $22 \\cdot 1$ và $11 \\cdot 16$ rồi cộng lại.',
      ],
      solution: '$12 \\cdot 12 + 22 \\cdot 1 + 11 \\cdot 16 = 144 + 22 + 176 = 342$ amu.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đơn chất.',
      options: [
        '$\\mathrm{O_2}$',
        '$\\mathrm{H_2O}$',
        'Cu',
        '$\\mathrm{NaCl}$',
        '$\\mathrm{N_2}$',
        '$\\mathrm{CH_4}$',
        '$\\mathrm{O_3}$',
      ],
      answers: [0, 2, 4, 6],
      hints: ['Đếm số loại kí hiệu nguyên tố trong mỗi công thức.'],
      solution:
        'Đơn chất chỉ có một nguyên tố: $\\mathrm{O_2}$, Cu, $\\mathrm{N_2}$, $\\mathrm{O_3}$. Còn $\\mathrm{H_2O}$ (H, O), $\\mathrm{NaCl}$ (Na, Cl), $\\mathrm{CH_4}$ (C, H) là hợp chất.',
    },
    {
      type: 'number',
      prompt:
        'Phân tử một hợp chất gồm $1$ nguyên tử sulfur và một số nguyên tử oxygen; khối lượng phân tử là $64$ amu. Phân tử có bao nhiêu nguyên tử oxygen? (S = 32, O = 16)',
      answer: 2,
      hints: ['Lấy khối lượng phân tử trừ khối lượng của nguyên tử S.'],
      solution:
        'Các nguyên tử O nặng $64 - 32 = 32$ amu, nên có $32 : 16 = 2$ nguyên tử O. Hợp chất là $\\mathrm{SO_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Phân tử một đơn chất gồm $2$ nguyên tử của nguyên tố Y, khối lượng phân tử là $71$ amu. Khối lượng nguyên tử của Y là bao nhiêu amu?',
      answer: 35.5,
      tolerance: 0.01,
      unit: 'amu',
      hints: ['Đơn chất chỉ có một nguyên tố: hai nguyên tử Y nặng như nhau.'],
      solution:
        'Khối lượng nguyên tử Y là $71 : 2 = 35{,}5$ amu. Y là chlorine, đơn chất là $\\mathrm{Cl_2}$.',
    },
    {
      type: 'text',
      prompt:
        'Ngoài khí oxygen $\\mathrm{O_2}$, nguyên tố oxygen còn tạo nên một đơn chất khí khác có phân tử gồm $3$ nguyên tử. Viết tên hoặc công thức của đơn chất đó.',
      accept: ['ozone', 'ozon', 'O3', 'khí ozone', 'khí ozon'],
      hints: ['Lớp khí này ở trên cao bảo vệ Trái Đất khỏi tia cực tím.'],
      solution: 'Đó là ozone, công thức $\\mathrm{O_3}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao sodium chloride (muối ăn) là hợp chất?',
      options: [
        'Vì nó ở thể rắn.',
        'Vì nó tan được trong nước.',
        'Vì nó được tạo nên từ hai nguyên tố là sodium và chlorine.',
        'Vì phân tử của nó có nhiều nguyên tử.',
      ],
      answer: 2,
      hints: ['Đơn chất và hợp chất được phân biệt bằng số nguyên tố tạo nên chất.'],
      solution:
        'Hợp chất là chất được tạo nên từ hai hay nhiều nguyên tố. Sodium chloride gồm Na và Cl. Thể, tính tan hay số nguyên tử không quyết định: $\\mathrm{O_3}$ có $3$ nguyên tử mà vẫn là đơn chất.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất với nhóm của nó.',
      left: ['Iron (Fe)', 'Sulfur (S)', 'Neon (Ne)', 'Nước ($\\mathrm{H_2O}$)'],
      right: ['Hợp chất', 'Đơn chất kim loại', 'Đơn chất phi kim', 'Đơn chất khí hiếm'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ],
      hints: [
        'Trước hết đếm số nguyên tố; sau đó xem nguyên tố là kim loại, phi kim hay khí hiếm.',
      ],
      solution:
        'Iron là đơn chất kim loại, sulfur là đơn chất phi kim, neon là đơn chất khí hiếm, nước là hợp chất (H và O).',
    },
  ],
  takeaways: [
    'Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.',
    'Khối lượng phân tử bằng tổng khối lượng các nguyên tử trong phân tử, tính bằng amu; ví dụ $\\mathrm{H_2O}$: $2 \\cdot 1 + 16 = 18$ amu.',
    'Đơn chất được tạo nên từ một nguyên tố hoá học (kim loại, phi kim, khí hiếm); một nguyên tố có thể tạo nhiều đơn chất ($\\mathrm{O_2}$, $\\mathrm{O_3}$).',
    'Hợp chất được tạo nên từ hai hay nhiều nguyên tố hoá học; tính chất của hợp chất khác tính chất các đơn chất tạo nên nó.',
  ],
};
