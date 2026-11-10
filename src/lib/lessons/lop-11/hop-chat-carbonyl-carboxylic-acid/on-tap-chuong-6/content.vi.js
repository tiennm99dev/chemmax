/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 6: so sánh aldehyde, ketone và carboxylic acid về cấu tạo, tính chất và cách nhận biết; sơ đồ chuyển hoá giữa hydrocarbon, dẫn xuất halogen, alcohol, aldehyde, carboxylic acid và ester; bài tập tính theo phương trình.',
  intro:
    'Từ acetylene hay ethylene, qua vài phản ứng đã học ở lớp 11, có thể điều chế được ethanol, acetaldehyde, acetic acid rồi ethyl acetate. Chương 6 khép lại chuỗi đó: oxi hoá alcohol cho hợp chất carbonyl, oxi hoá aldehyde cho carboxylic acid, và acid kết hợp với alcohol thành ester.',
  objectives: [
    'Hệ thống hoá được cấu tạo, danh pháp, tính chất vật lí và tính chất hoá học của aldehyde, ketone, carboxylic acid.',
    'Chọn được thuốc thử để nhận biết aldehyde, hợp chất có nhóm $\\mathrm{CH_3CO{-}}$ và carboxylic acid.',
    'Viết được phương trình theo sơ đồ chuyển hoá giữa các loại hợp chất hữu cơ của lớp 11 và giải được bài tập tính theo phương trình, hiệu suất.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh aldehyde, ketone và carboxylic acid',
          head: ['Đặc điểm', 'Aldehyde', 'Ketone', 'Carboxylic acid'],
          rows: [
            [
              'Nhóm chức',
              '$\\mathrm{{-}CHO}$',
              '$>\\mathrm{C{=}O}$ nối hai gốc hydrocarbon',
              '$\\mathrm{{-}COOH}$',
            ],
            [
              'Loại no, đơn chức, mạch hở',
              '$\\mathrm{C_nH_{2n}O}$ ($n \\ge 1$)',
              '$\\mathrm{C_nH_{2n}O}$ ($n \\ge 3$)',
              '$\\mathrm{C_nH_{2n+1}COOH}$ ($n \\ge 0$)',
            ],
            [
              'Tên thay thế',
              'mạch chính bỏ e + al',
              'mạch chính bỏ e – vị trí – one',
              'mạch chính bỏ e + oic acid',
            ],
            [
              'Liên kết hydrogen giữa các phân tử',
              'Không',
              'Không',
              'Có (hai liên kết giữa hai phân tử)',
            ],
            [
              'Phản ứng đặc trưng',
              'Khử thành alcohol bậc I; bị oxi hoá bởi nước bromine, Tollens, $\\mathrm{Cu(OH)_2}$/NaOH',
              'Khử thành alcohol bậc II; khó bị oxi hoá',
              'Tính acid yếu; ester hoá với alcohol',
            ],
            [
              'Nhận biết',
              'Tráng bạc; kết tủa đỏ gạch $\\mathrm{Cu_2O}$',
              'Nhóm $\\mathrm{CH_3CO{-}}$: kết tủa vàng $\\mathrm{CHI_3}$ với $\\mathrm{I_2}$/NaOH',
              'Quỳ tím hoá đỏ; sủi bọt $\\mathrm{CO_2}$ với $\\mathrm{NaHCO_3}$',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhiệt độ sôi',
          text: 'Với các chất có phân tử khối tương đương: hydrocarbon < aldehyde, ketone < alcohol < carboxylic acid. Ví dụ butane ($-0{,}5$ °C) < propanal ($49$ °C) < propan-1-ol ($97{,}1$ °C) < acetic acid ($118$ °C).',
        },
      ],
    },
    {
      heading: 'Sơ đồ chuyển hoá',
      blocks: [
        {
          type: 'p',
          text: 'Các chất hai carbon của lớp 11 nối với nhau theo sơ đồ: acetylene → ethylene → ethane; ethylene ⇄ ethanol; ethylene → bromoethane → ethanol; ethanol ⇄ acetaldehyde → acetic acid ⇄ sodium acetate; acetic acid → ethyl acetate.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '$\\mathrm{CH{\\equiv}CH} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{HgSO_4},\\,\\mathrm{H_2SO_4},\\,t^\\circ} \\mathrm{CH_3CHO}$',
            '$2\\mathrm{CH_2{=}CH_2} + \\mathrm{O_2} \\xrightarrow{\\mathrm{PdCl_2},\\,\\mathrm{CuCl_2},\\,t^\\circ} 2\\mathrm{CH_3CHO}$',
            '$\\mathrm{CH_3{-}CH_2OH} + \\mathrm{CuO} \\xrightarrow{t^\\circ} \\mathrm{CH_3CHO} + \\mathrm{Cu} + \\mathrm{H_2O}$',
            '$\\mathrm{CH_3CHO} + 2[\\mathrm{H}] \\xrightarrow{\\mathrm{NaBH_4}} \\mathrm{CH_3{-}CH_2OH}$',
            '$\\mathrm{CH_3CHO} + \\mathrm{Br_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_3COOH} + 2\\mathrm{HBr}$',
            '$\\mathrm{C_2H_5OH} + \\mathrm{O_2} \\xrightarrow{\\text{men giấm}} \\mathrm{CH_3COOH} + \\mathrm{H_2O}$',
            '$\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\overset{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ t^\\circ}{\\rightleftharpoons} \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}$',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mức oxi hoá tăng dần',
          text: 'Alcohol bậc I → aldehyde → carboxylic acid là dãy oxi hoá tăng dần; phản ứng khử đi theo chiều ngược lại từ aldehyde về alcohol. Alcohol bậc II chỉ bị oxi hoá đến ketone.',
        },
      ],
    },
    {
      heading: 'Lưu ý khi giải bài tập',
      blocks: [
        {
          type: 'list',
          items: [
            'Phản ứng tráng bạc: aldehyde đơn chức $\\mathrm{RCHO}$ cho $2$ Ag; riêng HCHO cho $4$ Ag.',
            'Aldehyde với $\\mathrm{Cu(OH)_2}$/NaOH: $1$ mol nhóm CHO cho $1$ mol $\\mathrm{Cu_2O}$.',
            'Trong hỗn hợp acid và alcohol: chỉ acid tác dụng với NaOH, $\\mathrm{NaHCO_3}$; cả hai tác dụng với Na, cứ $2$ mol nhóm OH (kể cả OH trong COOH) cho $1$ mol $\\mathrm{H_2}$.',
            'Ester hoá thuận nghịch: hiệu suất tính theo chất hết trước nếu phản ứng xảy ra hoàn toàn.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ chuyển hoá hữu cơ lớp 11',
    instruction:
      'Chọn một nhiệm vụ. Bấm thuốc thử và điều kiện để biến chất đang có thành chất khác; mỗi phản ứng đúng được ghi lại kèm phương trình. Hoàn thành nhiệm vụ với số bước ít nhất.',
  },
  examples: [
    {
      problem:
        'Hoàn thành sơ đồ: acetylene → acetaldehyde → acetic acid → ethyl acetate. Ghi rõ điều kiện.',
      steps: [
        'Cộng nước vào acetylene: $\\mathrm{CH{\\equiv}CH} + \\mathrm{H_2O} \\xrightarrow{\\mathrm{HgSO_4},\\,\\mathrm{H_2SO_4},\\,t^\\circ} \\mathrm{CH_3CHO}$.',
        'Oxi hoá aldehyde bằng nước bromine: $\\mathrm{CH_3CHO} + \\mathrm{Br_2} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_3COOH} + 2\\mathrm{HBr}$.',
        'Ester hoá với ethanol: $\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\rightleftharpoons \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}$ ($\\mathrm{H_2SO_4}$ đặc, $t^\\circ$).',
      ],
      answer: 'Ba phản ứng: cộng nước, oxi hoá aldehyde, ester hoá.',
    },
    {
      problem:
        'Trình bày cách phân biệt bốn dung dịch: ethanol, acetaldehyde, acetone và acetic acid.',
      steps: [
        'Dùng quỳ tím: dung dịch làm quỳ hoá đỏ là acetic acid.',
        'Cho ba mẫu còn lại tác dụng với thuốc thử Tollens, đun nhẹ: mẫu tạo lớp bạc sáng là acetaldehyde.',
        'Cho hai mẫu còn lại tác dụng với Na: ethanol giải phóng khí $\\mathrm{H_2}$, acetone không phản ứng.',
      ],
      answer:
        'Quỳ tím nhận ra acetic acid, Tollens nhận ra acetaldehyde, Na phân biệt ethanol với acetone.',
    },
    {
      problem:
        'Hỗn hợp X gồm acetic acid và ethanol. Cho X tác dụng với $\\mathrm{NaHCO_3}$ dư thu được $2{,}479$ L $\\mathrm{CO_2}$; cho cùng lượng X tác dụng với Na dư thu được $3{,}7185$ L $\\mathrm{H_2}$ (đkc). Tính khối lượng ethanol trong X.',
      steps: [
        'Chỉ acid phản ứng với $\\mathrm{NaHCO_3}$: $n_{\\text{acid}} = n_{\\mathrm{CO_2}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol.',
        '$n_{\\mathrm{H_2}} = \\dfrac{3{,}7185}{24{,}79} = 0{,}15$ mol, nên tổng số mol nhóm OH là $0{,}3$ mol.',
        '$n_{\\text{ethanol}} = 0{,}3 - 0{,}1 = 0{,}2$ mol; $m = 0{,}2 \\cdot 46 = 9{,}2$ g.',
      ],
      answer: 'X chứa $9{,}2$ g ethanol.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Chất nào vừa tham gia phản ứng tráng bạc vừa tạo kết tủa vàng với $\\mathrm{I_2}$/NaOH?',
      options: ['Acetaldehyde', 'Acetone', 'Propanal', 'Acetic acid'],
      answer: 0,
      hints: ['Cần cả nhóm CHO và nhóm $\\mathrm{CH_3CO{-}}$.'],
      solution:
        'Acetaldehyde $\\mathrm{CH_3{-}CHO}$ có nhóm CHO (tráng bạc) và nhóm $\\mathrm{CH_3CO{-}}$ (iodoform). Acetone chỉ tạo iodoform, propanal chỉ tráng bạc, acetic acid không có phản ứng nào trong hai phản ứng này.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào tác dụng được với cả Na, NaOH và $\\mathrm{NaHCO_3}$?',
      options: ['Acetic acid', 'Ethanol', 'Acetaldehyde', 'Acetone'],
      answer: 0,
      hints: ['$\\mathrm{NaHCO_3}$ chỉ phản ứng với acid.'],
      solution:
        'Acetic acid có nhóm COOH: tác dụng với Na (giải phóng $\\mathrm{H_2}$), NaOH (trung hoà) và $\\mathrm{NaHCO_3}$ (giải phóng $\\mathrm{CO_2}$). Ethanol chỉ tác dụng với Na.',
    },
    {
      type: 'multi',
      prompt:
        'Trong sơ đồ $\\mathrm{C_2H_4} \\rightarrow X \\rightarrow \\mathrm{CH_3COOH}$, mỗi mũi tên là một phản ứng. X có thể là những chất nào?',
      options: ['Ethanol', 'Acetaldehyde', 'Ethyl acetate', 'Ethane'],
      answers: [0, 1],
      hints: [
        'Với mỗi chất, xét hai bước: ethylene có tạo ra nó trong một phản ứng không, và nó có tạo ra acetic acid trong một phản ứng không?',
      ],
      solution:
        'Ethylene cộng nước tạo ethanol, ethanol lên men giấm thành acetic acid; ethylene bị oxi hoá ($\\mathrm{PdCl_2}$, $\\mathrm{CuCl_2}$) tạo acetaldehyde, acetaldehyde bị oxi hoá thành acetic acid. Ethylene không tạo ethyl acetate trong một bước, còn ethane không chuyển thành acetic acid trong một bước.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo nhiệt độ sôi tăng dần.',
      items: ['butane', 'propanal', 'propan-1-ol', 'acetic acid'],
      answer: [0, 1, 2, 3],
      hints: ['Bốn chất có phân tử khối $58$–$60$; xét độ phân cực và liên kết hydrogen.'],
      solution:
        'Butane ($-0{,}5$ °C) < propanal ($49$ °C) < propan-1-ol ($97{,}1$ °C) < acetic acid ($118$ °C).',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chuyển hoá với thuốc thử và điều kiện phù hợp.',
      left: [
        'Acetylene → acetaldehyde',
        'Ethanol → acetaldehyde',
        'Acetaldehyde → ethanol',
        'Ethanol → acetic acid',
        'Acetic acid → ethyl acetate',
      ],
      right: [
        '$\\mathrm{H_2O}$, $\\mathrm{HgSO_4}$, $\\mathrm{H_2SO_4}$, $t^\\circ$',
        'CuO, $t^\\circ$',
        '$\\mathrm{NaBH_4}$',
        '$\\mathrm{O_2}$, men giấm',
        'ethanol, $\\mathrm{H_2SO_4}$ đặc, $t^\\circ$',
        'thuốc thử Tollens',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Phản ứng khử dùng $\\mathrm{NaBH_4}$; lên men giấm dùng enzyme.'],
      solution:
        'Acetylene cộng nước (xúc tác $\\mathrm{HgSO_4}$) thành acetaldehyde; CuO oxi hoá ethanol thành acetaldehyde; $\\mathrm{NaBH_4}$ khử acetaldehyde về ethanol; men giấm oxi hoá ethanol thành acetic acid; ester hoá với ethanol cho ethyl acetate. Thuốc thử Tollens oxi hoá aldehyde thành muối ammonium, không dùng ở đây.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH_2{-}CO{-}CH_3}$.',
      accept: ['butanone', 'butan-2-one', 'butan 2 one'],
      hints: ['Mạch chính có $4$ C, nhóm C=O ở C2.'],
      solution:
        'Mạch chính butane, nhóm C=O ở C2: butan-2-one, thường gọi gọn là butanone vì vị trí C=O chỉ có thể là C2.',
    },
    {
      type: 'number',
      prompt:
        'Oxi hoá hoàn toàn $9{,}2$ g ethanol bằng CuO dư, đun nóng. Tính khối lượng acetaldehyde thu được.',
      answer: 8.8,
      tolerance: 0.05,
      unit: 'g',
      hints: ['$1$ mol ethanol cho $1$ mol acetaldehyde ($M = 44$).'],
      solution:
        '$n_{\\mathrm{C_2H_5OH}} = \\dfrac{9{,}2}{46} = 0{,}2$ mol $= n_{\\mathrm{CH_3CHO}}$; $m = 0{,}2 \\cdot 44 = 8{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho hỗn hợp gồm $0{,}1$ mol HCHO và $0{,}1$ mol $\\mathrm{CH_3CHO}$ tác dụng với lượng dư thuốc thử Tollens, đun nóng. Tính khối lượng bạc thu được.',
      answer: 64.8,
      tolerance: 0.05,
      unit: 'g',
      hints: ['HCHO cho $4$ Ag, $\\mathrm{CH_3CHO}$ cho $2$ Ag.'],
      solution:
        '$n_{\\mathrm{Ag}} = 4 \\cdot 0{,}1 + 2 \\cdot 0{,}1 = 0{,}6$ mol; $m = 0{,}6 \\cdot 108 = 64{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Lên men giấm $1$ L rượu $10^\\circ$ (khối lượng riêng của ethanol $0{,}8$ g/mL) với hiệu suất $80\\%$. Tính khối lượng acetic acid thu được (làm tròn đến hàng phần mười).',
      answer: 83.5,
      tolerance: 0.1,
      unit: 'g',
      hints: [
        'Rượu $10^\\circ$: $100$ mL rượu có $10$ mL ethanol nguyên chất.',
        '$1$ mol ethanol cho $1$ mol acetic acid.',
      ],
      solution:
        '$V_{\\mathrm{C_2H_5OH}} = 100$ mL, $m = 80$ g, $n = \\dfrac{80}{46} \\approx 1{,}739$ mol. $n_{\\mathrm{CH_3COOH}} = 1{,}739 \\cdot 0{,}8 \\approx 1{,}391$ mol, $m \\approx 1{,}391 \\cdot 60 \\approx 83{,}5$ g.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $6$ g acetic acid với ethanol dư (xúc tác $\\mathrm{H_2SO_4}$ đặc), thu được $5{,}28$ g ethyl acetate. Tính hiệu suất phản ứng ester hoá.',
      answer: 60,
      tolerance: 0.1,
      unit: '%',
      hints: ['Ethanol dư nên tính theo acid; $M_{\\text{ester}} = 88$.'],
      solution:
        '$n_{\\text{acid}} = 0{,}1$ mol, $n_{\\text{ester}} = \\dfrac{5{,}28}{88} = 0{,}06$ mol. $H = \\dfrac{0{,}06}{0{,}1} \\cdot 100\\% = 60\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng?',
      options: [
        'Khử ketone bằng $\\mathrm{NaBH_4}$ thu được alcohol bậc II.',
        'Acetic acid làm quỳ tím hoá đỏ.',
        'Acetone tham gia phản ứng tráng bạc.',
        'Phản ứng ester hoá là phản ứng thuận nghịch.',
      ],
      answers: [0, 1, 3],
      hints: ['Ketone khó bị oxi hoá.'],
      solution:
        'Acetone là ketone, không bị thuốc thử Tollens oxi hoá nên không tráng bạc. Ba phát biểu còn lại đúng.',
    },
    {
      type: 'choice',
      prompt:
        'Thuốc thử nào nhận ra ngay acetic acid trong ba lọ: acetic acid, ethanol, acetaldehyde?',
      options: ['Quỳ tím', 'Thuốc thử Tollens', 'Kim loại Na', 'Nước'],
      answer: 0,
      hints: ['Chỉ một chất có tính acid.'],
      solution:
        'Acetic acid làm quỳ tím hoá đỏ; ethanol và acetaldehyde không đổi màu quỳ. Na phản ứng với cả acid và ethanol; Tollens nhận ra acetaldehyde, không phải acid.',
    },
  ],
  takeaways: [
    'Aldehyde có nhóm CHO, ketone có nhóm C=O nối hai gốc hydrocarbon, carboxylic acid có nhóm COOH.',
    'Thuốc thử: Tollens và $\\mathrm{Cu(OH)_2}$/NaOH cho aldehyde, $\\mathrm{I_2}$/NaOH cho nhóm $\\mathrm{CH_3CO{-}}$, quỳ tím và $\\mathrm{NaHCO_3}$ cho carboxylic acid.',
    'Nhiệt độ sôi: hydrocarbon < carbonyl < alcohol < carboxylic acid có phân tử khối tương đương.',
    'Dãy chuyển hoá: alkene, alkyne → alcohol, aldehyde → carboxylic acid → ester.',
    'HCHO cho $4$ Ag; aldehyde đơn chức khác cho $2$ Ag. Ester hoá thuận nghịch, hiệu suất tính theo chất hết trước.',
  ],
};
