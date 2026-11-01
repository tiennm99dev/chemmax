/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phản ứng toả nhiệt, phản ứng thu nhiệt; biến thiên enthalpy chuẩn và phương trình nhiệt hoá học; tính biến thiên enthalpy theo nhiệt tạo thành và theo năng lượng liên kết.',
  intro:
    'Trong cơ thể, glucose phản ứng với oxygen tạo ra carbon dioxide và hơi nước, đồng thời giải phóng năng lượng để duy trì sự sống. Đốt gas để nấu ăn cũng toả nhiệt, còn nung đá vôi lại phải cấp nhiệt liên tục. Làm sao biểu diễn và tính được lượng nhiệt của một phản ứng? Bài học này đưa ra đại lượng biến thiên enthalpy và hai cách tính nó.',
  objectives: [
    'Phân biệt được phản ứng toả nhiệt và phản ứng thu nhiệt.',
    'Nêu được khái niệm biến thiên enthalpy chuẩn, nhiệt tạo thành chuẩn; đọc và viết được phương trình nhiệt hoá học.',
    'Biểu diễn được phản ứng trên giản đồ năng lượng và suy ra dấu của biến thiên enthalpy.',
    'Tính được biến thiên enthalpy của phản ứng theo nhiệt tạo thành và theo năng lượng liên kết.',
  ],
  sections: [
    {
      heading: 'Phản ứng toả nhiệt, phản ứng thu nhiệt',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng toả nhiệt và thu nhiệt',
          text: 'Phản ứng toả nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt. Phản ứng thu nhiệt là phản ứng hấp thụ năng lượng dưới dạng nhiệt.',
        },
        {
          type: 'table',
          head: ['Loại phản ứng', 'Ví dụ'],
          rows: [
            ['Toả nhiệt', 'Đốt cháy than, xăng dầu, gas; tôi vôi; gỉ sắt; trung hoà acid và base'],
            [
              'Thu nhiệt',
              'Nung đá vôi; nhiệt phân $\\mathrm{KMnO_4}$; phân huỷ $\\mathrm{Cu(OH)_2}$ khi đun nóng',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thí nghiệm: rót $50$ mL dung dịch NaOH $0{,}5$ M vào cốc chứa $50$ mL dung dịch HCl $0{,}5$ M, khuấy nhẹ và theo dõi nhiệt kế. Nhiệt độ tăng dần, nên phản ứng trung hoà là phản ứng toả nhiệt. Dùng dung dịch loãng hơn thì nhiệt độ tăng ít hơn.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dễ nhầm',
          text: 'Cần đun nóng lúc đầu không có nghĩa là phản ứng thu nhiệt. Đốt than phải mồi lửa nhưng sau đó tự cháy tiếp vì toả nhiệt. Với phản ứng thu nhiệt như nhiệt phân $\\mathrm{KMnO_4}$, ngừng cấp nhiệt thì phản ứng dừng lại.',
        },
      ],
    },
    {
      heading: 'Biến thiên enthalpy của phản ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến thiên enthalpy',
          text: 'Biến thiên enthalpy (nhiệt phản ứng), kí hiệu $\\Delta_r H$, là nhiệt lượng toả ra hoặc thu vào của phản ứng ở một điều kiện xác định. Ở điều kiện chuẩn, đó là biến thiên enthalpy chuẩn, kí hiệu $\\Delta_r H^\\circ_{298}$.',
        },
        {
          type: 'p',
          text: 'Điều kiện chuẩn gồm: áp suất $1$ bar với chất khí, nồng độ $1$ mol/L với chất tan, nhiệt độ thường chọn là $298$ K ($25\\ ^\\circ\\mathrm{C}$). Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
        },
        {
          type: 'p',
          text: 'Phương trình nhiệt hoá học là phương trình hoá học ghi kèm trạng thái của các chất và giá trị $\\Delta_r H$. Trạng thái viết là (s) rắn, (l) lỏng, (g) khí, (aq) dung dịch. Giá trị này ứng đúng với số mol của các chất theo hệ số trong phương trình. Ví dụ:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_4(g)} + \\mathrm{2O_2(g)} \\rightarrow \\mathrm{CO_2(g)} + \\mathrm{2H_2O(l)} \\quad \\Delta_r H^\\circ_{298} = -890{,}3\\ \\mathrm{kJ}',
        },
        {
          type: 'p',
          text: 'Phương trình cho biết: đốt cháy hoàn toàn $1$ mol $\\mathrm{CH_4}$ ở điều kiện chuẩn toả ra $890{,}3$ kJ nhiệt.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa dấu và trị số',
          text: '$\\Delta_r H < 0$: phản ứng toả nhiệt, sản phẩm có tổng năng lượng thấp hơn chất đầu. $\\Delta_r H > 0$: phản ứng thu nhiệt, sản phẩm có tổng năng lượng cao hơn chất đầu. Giá trị tuyệt đối càng lớn thì nhiệt lượng toả ra hoặc thu vào càng nhiều.',
        },
        {
          type: 'p',
          text: 'Giản đồ năng lượng vẽ mức của chất đầu và mức của sản phẩm. Mũi tên đi từ chất đầu đến sản phẩm biểu diễn $\\Delta_r H$: đi xuống là toả nhiệt, đi lên là thu nhiệt. Hãy tự vẽ giản đồ cho từng phản ứng dưới đây.',
        },
        { type: 'widget', name: 'gian-do' },
      ],
    },
    {
      heading: 'Tính biến thiên enthalpy theo nhiệt tạo thành',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiệt tạo thành (enthalpy tạo thành)',
          text: 'Nhiệt tạo thành $\\Delta_f H$ của một chất là biến thiên enthalpy của phản ứng tạo thành $1$ mol chất đó từ các đơn chất ở dạng bền vững nhất, ở một điều kiện xác định. Ở điều kiện chuẩn, đó là nhiệt tạo thành chuẩn $\\Delta_f H^\\circ_{298}$, đơn vị kJ/mol. Nhiệt tạo thành chuẩn của đơn chất bền vững nhất bằng $0$.',
        },
        {
          type: 'p',
          text: 'Ví dụ, $\\mathrm{C(graphite)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}$ có $\\Delta_r H^\\circ_{298} = -393{,}5$ kJ, nên $\\Delta_f H^\\circ_{298}(\\mathrm{CO_2, g}) = -393{,}5$ kJ/mol. Carbon lấy ở dạng graphite vì $\\text{C(kim cương)} \\rightarrow \\text{C(graphite)}$ có $\\Delta_r H^\\circ_{298} = -1{,}9$ kJ: graphite có năng lượng thấp hơn nên bền hơn kim cương.',
        },
        {
          type: 'table',
          caption: 'Nhiệt tạo thành chuẩn của một số chất dùng trong bài (kJ/mol)',
          head: ['Chất', '$\\Delta_f H^\\circ_{298}$', 'Chất', '$\\Delta_f H^\\circ_{298}$'],
          rows: [
            ['$\\mathrm{CH_4(g)}$', '$-74{,}8$', '$\\mathrm{H_2O(l)}$', '$-285{,}8$'],
            ['$\\mathrm{C_2H_4(g)}$', '$+52{,}3$', '$\\mathrm{H_2O(g)}$', '$-241{,}8$'],
            ['$\\mathrm{C_2H_6(g)}$', '$-84{,}7$', '$\\mathrm{NH_3(g)}$', '$-45{,}9$'],
            ['$\\mathrm{CO(g)}$', '$-110{,}5$', '$\\mathrm{NO(g)}$', '$+90{,}3$'],
            ['$\\mathrm{CO_2(g)}$', '$-393{,}5$', '$\\mathrm{NO_2(g)}$', '$+33{,}2$'],
            ['$\\mathrm{SO_2(g)}$', '$-296{,}8$', '$\\mathrm{FeS_2(s)}$', '$-177{,}9$'],
            ['$\\mathrm{SO_3(g)}$', '$-395{,}7$', '$\\mathrm{Fe_2O_3(s)}$', '$-825{,}5$'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Công thức',
          text: 'Biến thiên enthalpy của phản ứng bằng tổng nhiệt tạo thành của các sản phẩm trừ tổng nhiệt tạo thành của các chất đầu, mỗi giá trị nhân với hệ số của chất trong phương trình:',
        },
        {
          type: 'tex',
          tex: '\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(\\text{sp}) - \\sum \\Delta_f H^\\circ_{298}(\\text{cđ})',
        },
      ],
    },
    {
      heading: 'Tính biến thiên enthalpy theo năng lượng liên kết',
      blocks: [
        {
          type: 'p',
          text: 'Phản ứng là quá trình phá vỡ các liên kết của chất đầu và hình thành các liên kết của sản phẩm. Phá vỡ liên kết cần cung cấp năng lượng, hình thành liên kết giải phóng năng lượng. Với phản ứng mà các chất đều ở thể khí:',
        },
        {
          type: 'tex',
          tex: '\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{cđ}) - \\sum E_b(\\text{sp})',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Chú ý thứ tự',
          text: 'Công thức này lấy chất đầu trừ sản phẩm, ngược với công thức theo nhiệt tạo thành. Phải đếm đủ số liên kết trong công thức cấu tạo của từng phân tử, rồi nhân với hệ số của chất đó.',
        },
        {
          type: 'table',
          caption: 'Năng lượng liên kết trung bình dùng trong bài (kJ/mol)',
          head: ['Liên kết', '$E_b$', 'Liên kết', '$E_b$'],
          rows: [
            ['H–H', '$436$', 'C–H', '$418$'],
            ['Cl–Cl', '$243$', 'C–C', '$346$'],
            ['H–Cl', '$431$', 'C=C', '$612$'],
            ['O=O', '$494$', 'C=O', '$732$'],
            ['N≡N', '$945$', 'O–H', '$459$'],
            ['N–H', '$386$', 'N=O (trong NO)', '$607$'],
          ],
        },
        {
          type: 'p',
          text: 'Năng lượng liên kết là giá trị trung bình, nên kết quả tính theo cách này chỉ gần đúng và có thể lệch so với cách tính theo nhiệt tạo thành. Ví dụ, phản ứng $\\mathrm{N_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2NO(g)}$ có $\\Delta_r H^\\circ_{298}$ là $+225$ kJ theo năng lượng liên kết nhưng $+180{,}6$ kJ theo nhiệt tạo thành; cả hai đều cho thấy phản ứng thu nhiệt mạnh. Biến thiên enthalpy cũng có thể xác định bằng thực nghiệm trong nhiệt lượng kế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính biến thiên enthalpy',
    instruction:
      'Chọn một phản ứng. Theo nhiệt tạo thành: chạm vào từng chất để dựng mức của chất đầu và mức của sản phẩm, rồi đọc giản đồ để kết luận. Theo năng lượng liên kết: phá hết liên kết của chất đầu, rồi tạo liên kết của sản phẩm, và xem thang năng lượng kết thúc ở đâu so với điểm xuất phát.',
  },
  examples: [
    {
      problem:
        'Tính $\\Delta_r H^\\circ_{298}$ của phản ứng $\\mathrm{4FeS_2(s)} + \\mathrm{11O_2(g)} \\rightarrow \\mathrm{2Fe_2O_3(s)} + \\mathrm{8SO_2(g)}$. Biết $\\Delta_f H^\\circ_{298}$ của $\\mathrm{FeS_2(s)}$, $\\mathrm{Fe_2O_3(s)}$, $\\mathrm{SO_2(g)}$ lần lượt là $-177{,}9$; $-825{,}5$; $-296{,}8$ kJ/mol.',
      steps: [
        '$\\mathrm{O_2(g)}$ là đơn chất bền nên có $\\Delta_f H^\\circ_{298} = 0$.',
        'Tổng nhiệt tạo thành của sản phẩm: $2 \\cdot (-825{,}5) + 8 \\cdot (-296{,}8) = -4\\,025{,}4$ kJ.',
        'Tổng nhiệt tạo thành của chất đầu: $4 \\cdot (-177{,}9) + 11 \\cdot 0 = -711{,}6$ kJ.',
        '$\\Delta_r H^\\circ_{298} = -4\\,025{,}4 - (-711{,}6) = -3\\,313{,}8$ kJ.',
      ],
      answer: '$\\Delta_r H^\\circ_{298} = -3\\,313{,}8$ kJ; phản ứng toả nhiệt.',
    },
    {
      problem:
        'Tính $\\Delta_r H^\\circ_{298}$ của phản ứng đốt cháy ethane $\\mathrm{C_2H_6(g)} + \\frac{7}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{2CO_2(g)} + \\mathrm{3H_2O(l)}$ theo bảng nhiệt tạo thành.',
      steps: [
        'Tổng của sản phẩm: $2 \\cdot (-393{,}5) + 3 \\cdot (-285{,}8) = -1\\,644{,}4$ kJ.',
        'Tổng của chất đầu: $-84{,}7 + \\frac{7}{2} \\cdot 0 = -84{,}7$ kJ.',
        '$\\Delta_r H^\\circ_{298} = -1\\,644{,}4 - (-84{,}7) = -1\\,559{,}7$ kJ.',
      ],
      answer: '$\\Delta_r H^\\circ_{298} = -1\\,559{,}7$ kJ.',
    },
    {
      problem:
        'Năng lượng liên kết trong $\\mathrm{O_2}$, $\\mathrm{N_2}$, NO lần lượt là $494$, $945$, $607$ kJ/mol. Tính $\\Delta_r H^\\circ_{298}$ của phản ứng $\\mathrm{N_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2NO(g)}$ và giải thích vì sao nitrogen chỉ phản ứng với oxygen ở nhiệt độ cao hoặc khi có tia lửa điện.',
      steps: [
        'Chất đầu: $\\sum E_b(\\text{cđ}) = 945 + 494 = 1\\,439$ kJ.',
        'Sản phẩm: $\\sum E_b(\\text{sp}) = 2 \\cdot 607 = 1\\,214$ kJ.',
        '$\\Delta_r H^\\circ_{298} = 1\\,439 - 1\\,214 = +225$ kJ.',
        'Phản ứng thu nhiệt lớn và liên kết N≡N rất bền, nên cần nhiều năng lượng từ nhiệt độ cao hoặc tia lửa điện để xảy ra.',
      ],
      answer: '$\\Delta_r H^\\circ_{298} = +225$ kJ; phản ứng thu nhiệt.',
    },
    {
      problem:
        'Tính $\\Delta_r H^\\circ_{298}$ của phản ứng đốt cháy butane $\\mathrm{C_4H_{10}(g)} + \\frac{13}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{4CO_2(g)} + \\mathrm{5H_2O(g)}$ theo năng lượng liên kết.',
      steps: [
        'Phân tử butane có $3$ liên kết C–C và $10$ liên kết C–H. Chất đầu: $3 \\cdot 346 + 10 \\cdot 418 + \\frac{13}{2} \\cdot 494 = 8\\,429$ kJ.',
        'Mỗi $\\mathrm{CO_2}$ có $2$ liên kết C=O, mỗi $\\mathrm{H_2O}$ có $2$ liên kết O–H. Sản phẩm: $8 \\cdot 732 + 10 \\cdot 459 = 10\\,446$ kJ.',
        '$\\Delta_r H^\\circ_{298} = 8\\,429 - 10\\,446 = -2\\,017$ kJ.',
      ],
      answer: '$\\Delta_r H^\\circ_{298} = -2\\,017$ kJ; phản ứng toả nhiệt.',
    },
    {
      problem:
        'Cho $\\mathrm{CO(g)} + \\frac{1}{2}\\mathrm{O_2(g)} \\rightarrow \\mathrm{CO_2(g)}$, $\\Delta_r H^\\circ_{298} = -283{,}0$ kJ. Tính nhiệt lượng toả ra khi đốt cháy hoàn toàn $2{,}479$ L khí CO ở điều kiện chuẩn.',
      steps: [
        'Số mol CO: $n = 2{,}479 : 24{,}79 = 0{,}1$ mol.',
        'Đốt $1$ mol CO toả ra $283{,}0$ kJ, nên đốt $0{,}1$ mol toả ra $0{,}1 \\cdot 283{,}0 = 28{,}3$ kJ.',
      ],
      answer: 'Nhiệt lượng toả ra là $28{,}3$ kJ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Quá trình nào sau đây là phản ứng thu nhiệt?',
      options: ['Đốt cháy than', 'Nung đá vôi', 'Trung hoà HCl bằng NaOH', 'Tôi vôi'],
      answer: 1,
      hints: ['Phản ứng nào phải cấp nhiệt liên tục mới xảy ra?'],
      solution:
        'Nung đá vôi phải cấp nhiệt liên tục, nên là phản ứng thu nhiệt. Ba quá trình còn lại đều toả nhiệt.',
    },
    {
      type: 'multi',
      prompt: 'Những điều nào thuộc điều kiện chuẩn được nêu trong bài?',
      options: [
        'Áp suất $1$ bar với chất khí',
        'Nồng độ $1$ mol/L với chất tan',
        'Nhiệt độ thường chọn là $298$ K',
        'Nhiệt độ bắt buộc là $0\\ ^\\circ\\mathrm{C}$',
      ],
      answers: [0, 1, 2],
      hints: ['$25\\ ^\\circ\\mathrm{C}$ ứng với bao nhiêu kelvin?'],
      solution:
        'Điều kiện chuẩn: $1$ bar với chất khí, $1$ mol/L với chất tan, nhiệt độ thường chọn là $298$ K ($25\\ ^\\circ\\mathrm{C}$).',
    },
    {
      type: 'multi',
      prompt: 'Những phản ứng nào sau đây là phản ứng toả nhiệt?',
      options: [
        '$\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$, $\\Delta_r H^\\circ_{298} = +176{,}0$ kJ',
        '$\\mathrm{C_2H_4(g)} + \\mathrm{H_2(g)} \\rightarrow \\mathrm{C_2H_6(g)}$, $\\Delta_r H^\\circ_{298} = -137{,}0$ kJ',
        '$\\mathrm{Fe_2O_3(s)} + \\mathrm{2Al(s)} \\rightarrow \\mathrm{Al_2O_3(s)} + \\mathrm{2Fe(s)}$, $\\Delta_r H^\\circ_{298} = -851{,}5$ kJ',
      ],
      answers: [1, 2],
      hints: ['Chỉ cần nhìn dấu của $\\Delta_r H^\\circ_{298}$.'],
      solution:
        'Dấu âm là toả nhiệt: phản ứng thứ hai và thứ ba. Phản ứng đầu có dấu dương nên thu nhiệt.',
    },
    {
      type: 'number',
      prompt:
        'Với $\\mathrm{CaCO_3(s)} \\rightarrow \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}$, $\\Delta_r H^\\circ_{298} = +176{,}0$ kJ, cần cung cấp bao nhiêu kJ nhiệt để phân huỷ hoàn toàn $2{,}5$ mol $\\mathrm{CaCO_3}$?',
      answer: 440,
      unit: 'kJ',
      hints: ['Nhiệt lượng tỉ lệ thuận với số mol chất phản ứng.'],
      solution:
        'Phân huỷ $1$ mol cần $176{,}0$ kJ, nên $2{,}5$ mol cần $2{,}5 \\cdot 176{,}0 = 440$ kJ.',
    },
    {
      type: 'choice',
      prompt:
        'Cho $\\text{C(kim cương)} \\rightarrow \\text{C(graphite)}$, $\\Delta_r H^\\circ_{298} = -1{,}9$ kJ. Khi xác định nhiệt tạo thành chuẩn của $\\mathrm{CO_2(g)}$ từ $\\mathrm{C(s)} + \\mathrm{O_2(g)}$, carbon được lấy ở dạng nào?',
      options: [
        'Kim cương, vì cứng hơn',
        'Graphite, vì có năng lượng thấp hơn nên bền hơn',
        'Dạng nào cũng được, kết quả như nhau',
      ],
      answer: 1,
      hints: [
        'Nhiệt tạo thành tính từ đơn chất ở dạng bền vững nhất.',
        'Phản ứng toả nhiệt thì sản phẩm có năng lượng thấp hơn chất đầu.',
      ],
      solution:
        'Phản ứng toả nhiệt nên graphite có năng lượng thấp hơn kim cương, tức là bền hơn. Nhiệt tạo thành tính từ đơn chất bền vững nhất, nên lấy graphite.',
    },
    {
      type: 'number',
      prompt:
        'Tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $\\mathrm{2H_2(g)} + \\mathrm{O_2(g)} \\rightarrow \\mathrm{2H_2O(l)}$, biết $\\Delta_f H^\\circ_{298}(\\mathrm{H_2O, l}) = -285{,}8$ kJ/mol. Viết cả dấu của kết quả.',
      answer: -571.6,
      tolerance: 0.05,
      unit: 'kJ',
      hints: [
        '$\\mathrm{H_2}$ và $\\mathrm{O_2}$ là đơn chất bền, nhiệt tạo thành bằng $0$.',
        'Nhân nhiệt tạo thành của nước với hệ số của nó.',
      ],
      solution:
        '$\\Delta_r H^\\circ_{298} = 2 \\cdot (-285{,}8) - (2 \\cdot 0 + 0) = -571{,}6$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightarrow \\mathrm{2NH_3(g)}$, biết $\\Delta_f H^\\circ_{298}(\\mathrm{NH_3, g}) = -45{,}9$ kJ/mol. Viết cả dấu của kết quả.',
      answer: -91.8,
      tolerance: 0.05,
      unit: 'kJ',
      hints: ['Hai chất đầu đều là đơn chất bền.'],
      solution: '$\\Delta_r H^\\circ_{298} = 2 \\cdot (-45{,}9) - 0 = -91{,}8$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Dùng năng lượng liên kết H–H $436$, Cl–Cl $243$, H–Cl $431$ kJ/mol, tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $\\mathrm{H_2(g)} + \\mathrm{Cl_2(g)} \\rightarrow \\mathrm{2HCl(g)}$. Viết cả dấu của kết quả.',
      answer: -183,
      unit: 'kJ',
      hints: [
        'Với năng lượng liên kết: tổng của chất đầu trừ tổng của sản phẩm.',
        'Có $2$ mol liên kết H–Cl được tạo thành.',
      ],
      solution: '$\\Delta_r H^\\circ_{298} = (436 + 243) - 2 \\cdot 431 = 679 - 862 = -183$ kJ.',
    },
    {
      type: 'number',
      prompt:
        'Dùng năng lượng liên kết N≡N $945$, H–H $436$, N–H $386$ kJ/mol, tính $\\Delta_r H^\\circ_{298}$ (kJ) của phản ứng $\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightarrow \\mathrm{2NH_3(g)}$. Viết cả dấu của kết quả.',
      answer: -63,
      unit: 'kJ',
      hints: [
        'Mỗi phân tử $\\mathrm{NH_3}$ có $3$ liên kết N–H.',
        '$2$ phân tử $\\mathrm{NH_3}$ có $6$ liên kết N–H.',
      ],
      solution:
        '$\\sum E_b(\\text{cđ}) = 945 + 3 \\cdot 436 = 2\\,253$ kJ; $\\sum E_b(\\text{sp}) = 6 \\cdot 386 = 2\\,316$ kJ. Vậy $\\Delta_r H^\\circ_{298} = 2\\,253 - 2\\,316 = -63$ kJ.',
    },
    {
      type: 'choice',
      prompt:
        'Một bạn tính $\\Delta_r H^\\circ_{298}$ của $\\mathrm{H_2(g)} + \\mathrm{Cl_2(g)} \\rightarrow \\mathrm{2HCl(g)}$ theo năng lượng liên kết được $+183$ kJ. Bạn đó sai ở đâu?',
      options: [
        'Lấy tổng của sản phẩm trừ tổng của chất đầu',
        'Quên nhân hệ số $2$ của HCl',
        'Không dùng được năng lượng liên kết vì các chất ở thể khí',
      ],
      answer: 0,
      hints: ['Kết quả chỉ ngược dấu với giá trị đúng $-183$ kJ.'],
      solution:
        'Kết quả đúng về độ lớn nhưng ngược dấu, do đã lấy sản phẩm trừ chất đầu. Với năng lượng liên kết phải lấy chất đầu trừ sản phẩm.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $4{,}958$ L khí $\\mathrm{CH_4}$ ở điều kiện chuẩn toả ra bao nhiêu kJ nhiệt? Biết phản ứng cháy của $1$ mol $\\mathrm{CH_4}$ có $\\Delta_r H^\\circ_{298} = -890{,}3$ kJ.',
      answer: 178.06,
      tolerance: 0.05,
      unit: 'kJ',
      hints: ['Đổi thể tích ra số mol: $1$ mol khí chiếm $24{,}79$ L ở điều kiện chuẩn.'],
      solution:
        '$n = 4{,}958 : 24{,}79 = 0{,}2$ mol. Nhiệt toả ra: $0{,}2 \\cdot 890{,}3 = 178{,}06$ kJ.',
    },
  ],
  takeaways: [
    '$\\Delta_r H^\\circ_{298} < 0$: phản ứng toả nhiệt, mức sản phẩm thấp hơn chất đầu. $\\Delta_r H^\\circ_{298} > 0$: phản ứng thu nhiệt, mức sản phẩm cao hơn chất đầu.',
    'Điều kiện chuẩn: $1$ bar với chất khí, $1$ mol/L với chất tan, thường chọn $298$ K.',
    'Nhiệt tạo thành chuẩn của đơn chất bền vững nhất bằng $0$.',
    'Theo nhiệt tạo thành: $\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(\\text{sp}) - \\sum \\Delta_f H^\\circ_{298}(\\text{cđ})$.',
    'Theo năng lượng liên kết (các chất ở thể khí): $\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{cđ}) - \\sum E_b(\\text{sp})$.',
  ],
};
