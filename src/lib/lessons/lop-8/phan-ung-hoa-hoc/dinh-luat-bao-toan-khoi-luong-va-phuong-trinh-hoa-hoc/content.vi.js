/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trong một phản ứng hoá học, tổng khối lượng các chất sản phẩm bằng tổng khối lượng các chất tham gia. Phương trình hoá học biểu diễn ngắn gọn phản ứng bằng công thức hoá học, được lập bằng cách cân bằng số nguyên tử mỗi nguyên tố ở hai vế, và cho biết tỉ lệ số nguyên tử, phân tử giữa các chất.',
  intro:
    'Đốt một mẩu than, than cháy hết chỉ còn ít tro: phải chăng chất đã mất đi? Một thanh sắt để lâu bị gỉ lại nặng hơn lúc đầu: chất từ đâu thêm vào? Nhà khoa học Lomonosov và Lavoisier đã làm thí nghiệm cân thật cẩn thận trong bình kín và tìm ra câu trả lời: khối lượng không tự sinh ra hay mất đi trong phản ứng hoá học.',
  objectives: [
    'Tiến hành được thí nghiệm để chứng minh trong phản ứng hoá học khối lượng được bảo toàn.',
    'Phát biểu được định luật bảo toàn khối lượng và vận dụng để tính khối lượng một chất.',
    'Nêu được khái niệm phương trình hoá học và các bước lập phương trình hoá học.',
    'Trình bày được ý nghĩa của phương trình hoá học: tỉ lệ số nguyên tử, số phân tử giữa các chất.',
  ],
  sections: [
    {
      heading: 'Định luật bảo toàn khối lượng',
      blocks: [
        {
          type: 'p',
          text: 'Thí nghiệm: đặt hai cốc chứa dung dịch barium chloride $\\mathrm{BaCl_2}$ và dung dịch sodium sulfate $\\mathrm{Na_2SO_4}$ lên đĩa cân, ghi khối lượng. Đổ cốc này vào cốc kia rồi đặt cả hai cốc lại lên cân: xuất hiện chất rắn màu trắng (barium sulfate) nhưng số chỉ của cân không đổi.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Định luật bảo toàn khối lượng',
          text: 'Trong một phản ứng hoá học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng.',
        },
        {
          type: 'p',
          text: 'Với phản ứng tổng quát $\\mathrm{A} + \\mathrm{B} \\rightarrow \\mathrm{C} + \\mathrm{D}$, ta có:',
        },
        { type: 'tex', tex: 'm_A + m_B = m_C + m_D' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giải thích',
          text: 'Trong phản ứng hoá học chỉ có liên kết giữa các nguyên tử thay đổi; số nguyên tử của mỗi nguyên tố giữ nguyên và khối lượng của các nguyên tử không đổi. Vì vậy tổng khối lượng các chất được bảo toàn.',
        },
        {
          type: 'p',
          text: 'Nếu phản ứng có $n$ chất mà biết khối lượng của $(n - 1)$ chất thì tính được khối lượng của chất còn lại.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Phản ứng có chất khí tham gia hoặc tạo thành phải được làm trong bình kín mới thấy cân giữ nguyên. Trong bình hở, khí sinh ra bay đi (cân nhẹ đi) hoặc khí oxygen từ không khí kết hợp vào (cân nặng thêm), nhưng định luật vẫn đúng khi tính cả lượng khí đó.',
        },
      ],
    },
    {
      heading: 'Phương trình hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương trình hoá học',
          text: 'Phương trình hoá học biểu diễn ngắn gọn phản ứng hoá học bằng công thức hoá học của các chất phản ứng và sản phẩm, với các hệ số thích hợp sao cho số nguyên tử của mỗi nguyên tố ở hai vế bằng nhau.',
        },
        {
          type: 'p',
          text: 'Ví dụ: phương trình chữ Hydrogen + Oxygen → Nước được viết thành phương trình hoá học:',
        },
        { type: 'tex', tex: '2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Viết sơ đồ phản ứng gồm công thức hoá học của các chất phản ứng và sản phẩm: $\\mathrm{Al} + \\mathrm{O_2} \\dashrightarrow \\mathrm{Al_2O_3}$.',
            'So sánh số nguyên tử của mỗi nguyên tố ở hai vế: vế trái $1$ Al, $2$ O; vế phải $2$ Al, $3$ O.',
            'Cân bằng số nguyên tử mỗi nguyên tố bằng cách thêm hệ số thích hợp vào trước công thức: làm chẵn O bằng hệ số $3$ cho $\\mathrm{O_2}$ và $2$ cho $\\mathrm{Al_2O_3}$ (cùng $6$ O), rồi đặt $4$ trước Al.',
            'Kiểm tra số nguyên tử mỗi nguyên tố ở hai vế và viết phương trình hoá học: $4\\mathrm{Al} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{Al_2O_3}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Hệ số và chỉ số',
          text: 'Khi cân bằng chỉ được thêm hệ số đứng trước công thức, không được thay đổi chỉ số trong công thức. Hệ số viết cao bằng kí hiệu ($2\\mathrm{H_2O}$ là hai phân tử nước); hệ số $1$ không ghi. Nếu có nhóm nguyên tử như $\\mathrm{SO_4}$, $\\mathrm{OH}$ không đổi trong phản ứng thì coi cả nhóm như một đơn vị khi cân bằng.',
        },
        { type: 'widget', name: 'can-bang' },
      ],
    },
    {
      heading: 'Ý nghĩa của phương trình hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa',
          text: 'Phương trình hoá học cho biết tỉ lệ về số nguyên tử, số phân tử giữa các chất cũng như từng cặp chất trong phản ứng. Tỉ lệ này bằng tỉ lệ hệ số của các chất trong phương trình.',
        },
        {
          type: 'p',
          text: 'Ví dụ: $4\\mathrm{Al} + 3\\mathrm{O_2} \\rightarrow 2\\mathrm{Al_2O_3}$. Số nguyên tử Al : số phân tử $\\mathrm{O_2}$ : số phân tử $\\mathrm{Al_2O_3}$ $= 4 : 3 : 2$. Cứ $4$ nguyên tử Al tác dụng với $3$ phân tử $\\mathrm{O_2}$ tạo ra $2$ phân tử $\\mathrm{Al_2O_3}$; từng cặp chất: Al và $\\mathrm{O_2}$ theo tỉ lệ $4 : 3$, Al và $\\mathrm{Al_2O_3}$ theo tỉ lệ $4 : 2 = 2 : 1$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cân hai đĩa trước và sau phản ứng',
    instruction:
      'Chọn một thí nghiệm và dụng cụ (bình kín hoặc bình hở). Đĩa trái đựng bình phản ứng, đĩa phải đặt quả cân bằng khối lượng các chất ban đầu. Bấm “Cho phản ứng xảy ra” và quan sát cân. Thử cùng thí nghiệm với bình kín và bình hở: khi nào cân bị lệch, vì sao?',
  },
  examples: [
    {
      problem:
        'Đốt cháy hết $9$ g kim loại magnesium (Mg) trong không khí thu được $15$ g magnesium oxide (MgO). Tính khối lượng oxygen đã phản ứng.',
      steps: [
        'Phương trình chữ: Magnesium + Oxygen → Magnesium oxide.',
        'Theo định luật bảo toàn khối lượng: $m_{\\mathrm{Mg}} + m_{\\mathrm{O_2}} = m_{\\mathrm{MgO}}$.',
        '$m_{\\mathrm{O_2}} = 15 - 9 = 6$ g.',
      ],
      answer: 'Khối lượng oxygen đã phản ứng là $6$ g.',
    },
    {
      problem:
        'Lập phương trình hoá học của phản ứng: $\\mathrm{Fe} + \\mathrm{Cl_2} \\dashrightarrow \\mathrm{FeCl_3}$.',
      steps: [
        'Số nguyên tử Cl: vế trái $2$, vế phải $3$. Bội chung nhỏ nhất của $2$ và $3$ là $6$.',
        'Đặt hệ số $3$ trước $\\mathrm{Cl_2}$ và $2$ trước $\\mathrm{FeCl_3}$: mỗi vế có $6$ Cl.',
        'Vế phải có $2$ Fe nên đặt hệ số $2$ trước Fe. Kiểm tra: $2$ Fe, $6$ Cl ở mỗi vế.',
      ],
      answer: '$2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\rightarrow 2\\mathrm{FeCl_3}$.',
    },
    {
      problem:
        'Lập phương trình hoá học: $\\mathrm{NaOH} + \\mathrm{H_2SO_4} \\dashrightarrow \\mathrm{Na_2SO_4} + \\mathrm{H_2O}$ và cho biết tỉ lệ số phân tử giữa các chất.',
      steps: [
        'Coi nhóm $\\mathrm{SO_4}$ là một đơn vị: mỗi vế có $1$ nhóm $\\mathrm{SO_4}$.',
        'Vế phải có $2$ Na nên đặt $2$ trước NaOH.',
        'Vế trái có $2 + 2 = 4$ H (trong $2\\mathrm{NaOH}$ và $\\mathrm{H_2SO_4}$), nên đặt $2$ trước $\\mathrm{H_2O}$. Kiểm tra O ngoài nhóm $\\mathrm{SO_4}$: $2$ ở mỗi vế.',
      ],
      answer:
        '$2\\mathrm{NaOH} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$; tỉ lệ $2 : 1 : 1 : 2$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Đốt cháy hết $2{,}4$ g magnesium trong oxygen thu được $4$ g magnesium oxide. Tính khối lượng oxygen đã phản ứng, theo gam.',
      answer: 1.6,
      tolerance: 0.001,
      unit: 'g',
      hints: ['$m_{\\mathrm{Mg}} + m_{\\mathrm{O_2}} = m_{\\mathrm{MgO}}$.'],
      solution: '$m_{\\mathrm{O_2}} = 4 - 2{,}4 = 1{,}6$ g.',
    },
    {
      type: 'number',
      prompt:
        'Nung $100$ kg đá vôi (calcium carbonate) thu được $56$ kg vôi sống (calcium oxide) và khí carbon dioxide. Tính khối lượng khí carbon dioxide tạo thành, theo kg.',
      answer: 44,
      unit: 'kg',
      hints: ['Calcium carbonate → Calcium oxide + Carbon dioxide.'],
      solution: '$m_{\\mathrm{CO_2}} = 100 - 56 = 44$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng hỗn hợp $5{,}6$ g iron và $3{,}2$ g sulfur, hai chất phản ứng vừa hết tạo ra iron(II) sulfide. Tính khối lượng iron(II) sulfide thu được, theo gam.',
      answer: 8.8,
      tolerance: 0.001,
      unit: 'g',
      hints: ['Hai chất phản ứng vừa hết nên toàn bộ khối lượng chuyển vào sản phẩm.'],
      solution: '$m_{\\mathrm{FeS}} = 5{,}6 + 3{,}2 = 8{,}8$ g.',
    },
    {
      type: 'choice',
      prompt:
        'Đặt một cốc hở chứa dung dịch hydrochloric acid và viên đá vôi lên cân. Sau khi phản ứng kết thúc, số chỉ của cân',
      options: [
        'tăng lên, vì có chất mới tạo thành',
        'giảm xuống, vì khí carbon dioxide thoát ra ngoài',
        'không đổi, vì khối lượng được bảo toàn',
        'giảm xuống, vì đá vôi bị mất đi',
      ],
      answer: 1,
      hints: ['Cốc hở: chất khí sinh ra đi đâu?'],
      solution:
        'Khí $\\mathrm{CO_2}$ sinh ra bay ra khỏi cốc hở nên khối lượng trên cân giảm. Tổng khối lượng (tính cả khí đã thoát ra) vẫn được bảo toàn.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước lập phương trình hoá học theo đúng thứ tự.',
      items: [
        'Thêm hệ số thích hợp trước các công thức để số nguyên tử mỗi nguyên tố ở hai vế bằng nhau.',
        'Viết sơ đồ phản ứng gồm công thức hoá học của chất phản ứng và sản phẩm.',
        'Kiểm tra lại và viết phương trình hoá học.',
        'So sánh số nguyên tử của mỗi nguyên tố ở hai vế.',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Phải có sơ đồ phản ứng trước thì mới so sánh và cân bằng được.'],
      solution:
        'Viết sơ đồ phản ứng → so sánh số nguyên tử mỗi nguyên tố → thêm hệ số cân bằng → kiểm tra và viết phương trình.',
    },
    {
      type: 'choice',
      prompt: 'Phương trình hoá học nào đã được cân bằng đúng?',
      options: [
        '$\\mathrm{P} + \\mathrm{O_2} \\rightarrow \\mathrm{P_2O_5}$',
        '$2\\mathrm{P} + 5\\mathrm{O_2} \\rightarrow \\mathrm{P_2O_5}$',
        '$4\\mathrm{P} + 5\\mathrm{O_2} \\rightarrow 2\\mathrm{P_2O_5}$',
        '$\\mathrm{P_2} + \\mathrm{O_5} \\rightarrow \\mathrm{P_2O_5}$',
      ],
      answer: 2,
      hints: ['Đếm số nguyên tử P và O ở hai vế của từng phương trình; không được đổi chỉ số.'],
      solution:
        '$4\\mathrm{P} + 5\\mathrm{O_2} \\rightarrow 2\\mathrm{P_2O_5}$: mỗi vế có $4$ P và $10$ O. Phương trình cuối sai vì đã đổi công thức của chất.',
    },
    {
      type: 'number',
      prompt:
        'Cân bằng phương trình $\\mathrm{Al} + \\mathrm{HCl} \\dashrightarrow \\mathrm{AlCl_3} + \\mathrm{H_2}$ với hệ số tối giản. Hệ số của $\\mathrm{H_2}$ là bao nhiêu?',
      answer: 3,
      hints: [
        'Cân bằng Cl trước: vế phải có $3$ Cl trong mỗi $\\mathrm{AlCl_3}$.',
        'Để số H chẵn, thử đặt $2$ trước $\\mathrm{AlCl_3}$.',
      ],
      solution:
        '$2\\mathrm{Al} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}$: mỗi vế có $2$ Al, $6$ H, $6$ Cl. Hệ số của $\\mathrm{H_2}$ là $3$.',
    },
    {
      type: 'number',
      prompt:
        'Cân bằng phương trình $\\mathrm{Fe} + \\mathrm{O_2} \\dashrightarrow \\mathrm{Fe_3O_4}$ với hệ số tối giản. Tính tổng các hệ số của phương trình.',
      answer: 6,
      hints: ['Vế phải có $3$ Fe và $4$ O.', 'Nhớ hệ số $1$ (không ghi) vẫn được cộng vào tổng.'],
      solution:
        '$3\\mathrm{Fe} + 2\\mathrm{O_2} \\rightarrow \\mathrm{Fe_3O_4}$. Tổng hệ số: $3 + 2 + 1 = 6$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phương trình $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightarrow 2\\mathrm{NH_3}$, tỉ lệ số phân tử $\\mathrm{N_2}$ : $\\mathrm{H_2}$ : $\\mathrm{NH_3}$ là',
      options: ['$1 : 1 : 1$', '$1 : 3 : 2$', '$2 : 6 : 2$', '$1 : 2 : 3$'],
      answer: 1,
      hints: ['Tỉ lệ số phân tử bằng tỉ lệ hệ số; hệ số $1$ không ghi.'],
      solution: 'Hệ số lần lượt là $1$, $3$, $2$ nên tỉ lệ là $1 : 3 : 2$.',
    },
    {
      type: 'choice',
      prompt: 'Kí hiệu $3\\mathrm{H_2O}$ cho biết',
      options: [
        '$3$ nguyên tử H và $1$ nguyên tử O',
        '$3$ phân tử nước, mỗi phân tử có $2$ nguyên tử H và $1$ nguyên tử O',
        '$1$ phân tử nước có $6$ nguyên tử H',
        '$3$ phân tử hydrogen và $1$ phân tử oxygen',
      ],
      answer: 1,
      hints: ['Số đứng trước công thức là hệ số; số nhỏ ở chân kí hiệu là chỉ số.'],
      solution:
        'Hệ số $3$ chỉ $3$ phân tử $\\mathrm{H_2O}$; chỉ số $2$ cho biết mỗi phân tử có $2$ nguyên tử H. Tổng cộng $6$ nguyên tử H và $3$ nguyên tử O.',
    },
  ],
  takeaways: [
    'Định luật bảo toàn khối lượng: tổng khối lượng các sản phẩm bằng tổng khối lượng các chất tham gia; $m_A + m_B = m_C + m_D$.',
    'Khối lượng được bảo toàn vì số nguyên tử mỗi nguyên tố và khối lượng mỗi nguyên tử không đổi, chỉ liên kết thay đổi.',
    'Lập phương trình hoá học: viết sơ đồ, so sánh số nguyên tử, thêm hệ số (không đổi chỉ số), kiểm tra và viết phương trình.',
    'Phương trình hoá học cho biết tỉ lệ số nguyên tử, số phân tử giữa các chất, bằng tỉ lệ hệ số.',
  ],
};
