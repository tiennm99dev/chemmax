/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm hợp chất hữu cơ, đặc điểm chung, cách phân loại, nhóm chức và cách đọc phổ hồng ngoại để dự đoán nhóm chức.',
  intro:
    'Đường, giấm, xăng, thuốc chữa bệnh và cả cơ thể em đều được tạo nên từ các hợp chất của carbon. Số hợp chất này lên tới hàng chục triệu, vậy các nhà hoá học sắp xếp chúng thế nào, và làm sao biết một chất lạ có nhóm nguyên tử nào khi không thể nhìn thấy phân tử?',
  objectives: [
    'Nêu được khái niệm hợp chất hữu cơ, hoá học hữu cơ và đặc điểm chung của hợp chất hữu cơ.',
    'Phân biệt được hydrocarbon với dẫn xuất của hydrocarbon, nhận ra hợp chất của carbon không thuộc loại hữu cơ.',
    'Nêu được khái niệm nhóm chức và một số nhóm chức cơ bản.',
    'Sử dụng được bảng số sóng để xác định nhóm chức từ phổ hồng ngoại đơn giản.',
  ],
  sections: [
    {
      heading: 'Hợp chất hữu cơ và hoá học hữu cơ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khái niệm',
          text: 'Hợp chất hữu cơ là hợp chất của carbon, trừ một số hợp chất như carbon monoxide, carbon dioxide, muối carbonate, cyanide, carbide,... Hoá học hữu cơ là ngành hoá học nghiên cứu các hợp chất hữu cơ.',
        },
        {
          type: 'p',
          text: 'Như vậy $\\mathrm{CH_4}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{C_6H_{12}O_6}$ là hợp chất hữu cơ, còn $\\mathrm{CO_2}$, $\\mathrm{CaCO_3}$, NaCN tuy có carbon nhưng được xếp vào hợp chất vô cơ.',
        },
      ],
    },
    {
      heading: 'Đặc điểm chung của hợp chất hữu cơ',
      blocks: [
        {
          type: 'table',
          caption: 'Đặc điểm của đa số hợp chất hữu cơ',
          head: ['Về', 'Đặc điểm'],
          rows: [
            [
              'Thành phần',
              'Nhất thiết có carbon, thường có hydrogen, hay gặp oxygen, nitrogen, halogen, sulfur, phosphorus',
            ],
            [
              'Liên kết',
              'Chủ yếu là liên kết cộng hoá trị. Các nguyên tử carbon còn liên kết với nhau tạo thành mạch carbon',
            ],
            [
              'Tính chất vật lí',
              'Nhiệt độ nóng chảy, nhiệt độ sôi thấp, dễ bay hơi. Thường không tan hoặc ít tan trong nước, tan nhiều hơn trong dung môi hữu cơ',
            ],
            ['Tính chất hoá học', 'Thường dễ cháy, kém bền với nhiệt'],
            [
              'Phản ứng',
              'Thường xảy ra chậm, theo nhiều hướng, tạo hỗn hợp sản phẩm; hay cần đun nóng hoặc có xúc tác',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Phân loại hợp chất hữu cơ',
      blocks: [
        {
          type: 'list',
          items: [
            'Hydrocarbon: phân tử chỉ gồm carbon và hydrogen, như $\\mathrm{CH_4}$, $\\mathrm{C_2H_4}$, $\\mathrm{C_2H_2}$, $\\mathrm{C_6H_6}$.',
            'Dẫn xuất của hydrocarbon: phân tử có thêm nguyên tố khác, thường là O, N, S, halogen, như dẫn xuất halogen, alcohol, phenol, ether, aldehyde, ketone, carboxylic acid, ester, amine.',
          ],
        },
        {
          type: 'p',
          text: 'Hãy tự xếp các chất sau vào đúng nhóm. Đừng quên rằng không phải hợp chất nào có carbon cũng là hợp chất hữu cơ.',
        },
        { type: 'widget', name: 'phan-loai' },
      ],
    },
    {
      heading: 'Nhóm chức',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhóm chức',
          text: 'Nhóm chức là nguyên tử hoặc nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ.',
        },
        {
          type: 'p',
          text: 'Ethanol $\\mathrm{C_2H_5OH}$ và dimethyl ether $\\mathrm{CH_3OCH_3}$ có cùng công thức $\\mathrm{C_2H_6O}$. Chỉ ethanol, vốn có nhóm –OH, phản ứng với sodium giải phóng khí hydrogen.',
        },
        {
          type: 'table',
          caption: 'Một số nhóm chức cơ bản',
          head: ['Loại hợp chất', 'Nhóm chức', 'Ví dụ'],
          rows: [
            ['Dẫn xuất halogen', '$-\\mathrm{X}$ (F, Cl, Br, I)', '$\\mathrm{CH_3Cl}$'],
            ['Alcohol', '$-\\mathrm{OH}$', '$\\mathrm{C_2H_5OH}$'],
            ['Ether', '$-\\mathrm{O}-$', '$\\mathrm{CH_3OCH_3}$'],
            ['Aldehyde', '$-\\mathrm{CHO}$', '$\\mathrm{CH_3CHO}$'],
            ['Ketone', '$-\\mathrm{CO}-$', '$\\mathrm{CH_3COCH_3}$'],
            ['Carboxylic acid', '$-\\mathrm{COOH}$', '$\\mathrm{CH_3COOH}$'],
            ['Ester', '$-\\mathrm{COO}-$', '$\\mathrm{CH_3COOC_2H_5}$'],
            ['Amine', '$-\\mathrm{NH_2}$, $-\\mathrm{NH}-$', '$\\mathrm{CH_3NH_2}$'],
          ],
        },
      ],
    },
    {
      heading: 'Phổ hồng ngoại',
      blocks: [
        {
          type: 'p',
          text: 'Phổ hồng ngoại (phổ IR) là phương pháp vật lí dùng để nghiên cứu cấu tạo phân tử. Chiếu bức xạ hồng ngoại qua mẫu, mỗi liên kết hấp thụ những bức xạ có số sóng đặc trưng cho nó. Phổ biểu diễn độ truyền qua (%) theo số sóng ($\\mathrm{cm^{-1}}$), nên chỗ hấp thụ hiện ra thành một đỉnh (peak) hướng xuống.',
        },
        {
          type: 'table',
          caption: 'Số sóng hấp thụ đặc trưng của một số nhóm chức',
          head: ['Loại hợp chất', 'Liên kết', 'Số sóng ($\\mathrm{cm^{-1}}$)'],
          rows: [
            ['Alcohol', 'O–H', '$3\\,500$ – $3\\,200$'],
            ['Amine', 'N–H', '$3\\,500$ – $3\\,300$'],
            ['Aldehyde', 'C=O; C–H', '$1\\,740$ – $1\\,720$; $2\\,900$ – $2\\,700$'],
            ['Ketone', 'C=O', '$1\\,725$ – $1\\,700$'],
            ['Carboxylic acid', 'C=O; O–H', '$1\\,725$ – $1\\,700$; $3\\,300$ – $2\\,500$'],
            ['Ester', 'C=O; C–O', '$1\\,750$ – $1\\,735$; $1\\,300$ – $1\\,000$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đọc phổ theo thứ tự',
          text: 'Xem trước vùng trên $3\\,000$ $\\mathrm{cm^{-1}}$ (O–H, N–H), rồi tìm đỉnh mạnh gần $1\\,700$ $\\mathrm{cm^{-1}}$ (C=O). Có C=O thì xét tiếp: dải O–H rất rộng là acid, C–H của –CHO là aldehyde, C–O mạnh là ester, không có gì thêm là ketone. Đỉnh C–H gần $3\\,000$ $\\mathrm{cm^{-1}}$ có ở hầu hết chất hữu cơ nên không giúp phân biệt.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trình đọc phổ hồng ngoại',
    instruction:
      'Mỗi mẫu là một chất chưa biết, phổ đã được vẽ đơn giản hoá. Bấm từng đỉnh để xem liên kết hấp thụ, rồi chọn loại hợp chất. Đoán đúng thì hiện tên và công thức của mẫu.',
  },
  examples: [
    {
      problem:
        'Trong các chất sau: $\\mathrm{C_2H_6}$, $\\mathrm{CO_2}$, $\\mathrm{CH_3Cl}$, $\\mathrm{K_2CO_3}$, $\\mathrm{C_3H_7OH}$, chất nào là hợp chất hữu cơ? Trong đó, chất nào là hydrocarbon?',
      steps: [
        '$\\mathrm{CO_2}$ và $\\mathrm{K_2CO_3}$ có carbon nhưng thuộc các ngoại lệ (oxide của carbon, muối carbonate), nên là hợp chất vô cơ.',
        'Ba chất còn lại $\\mathrm{C_2H_6}$, $\\mathrm{CH_3Cl}$, $\\mathrm{C_3H_7OH}$ là hợp chất hữu cơ.',
        'Chỉ $\\mathrm{C_2H_6}$ gồm đúng hai nguyên tố C và H; $\\mathrm{CH_3Cl}$ có Cl, $\\mathrm{C_3H_7OH}$ có O.',
      ],
      answer:
        'Hợp chất hữu cơ: $\\mathrm{C_2H_6}$, $\\mathrm{CH_3Cl}$, $\\mathrm{C_3H_7OH}$. Hydrocarbon: $\\mathrm{C_2H_6}$.',
    },
    {
      problem:
        'Hai lọ mất nhãn chứa acetone ($\\mathrm{CH_3COCH_3}$) và ethanol ($\\mathrm{C_2H_5OH}$). Phổ IR của chất X có đỉnh mạnh ở $1\\,715$ $\\mathrm{cm^{-1}}$ và không có đỉnh nào trong vùng $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$. X là chất nào?',
      steps: [
        'Đỉnh $1\\,715$ $\\mathrm{cm^{-1}}$ nằm trong vùng $1\\,725$ – $1\\,700$ $\\mathrm{cm^{-1}}$ của C=O trong ketone.',
        'Không có đỉnh $3\\,500$ – $3\\,200$ $\\mathrm{cm^{-1}}$ nghĩa là không có liên kết O–H của alcohol.',
        'Acetone có nhóm C=O và không có O–H; ethanol thì ngược lại.',
      ],
      answer: 'X là acetone.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Chất nào sau đây là hợp chất hữu cơ?',
      options: ['$\\mathrm{CH_3COOH}$', '$\\mathrm{CO}$', '$\\mathrm{CaCO_3}$', 'NaCN'],
      answer: 0,
      hints: ['Nhớ các hợp chất của carbon được xếp vào nhóm ngoại lệ.'],
      solution:
        'CO là oxide của carbon, $\\mathrm{CaCO_3}$ là muối carbonate, NaCN là muối cyanide, đều là chất vô cơ. Chỉ $\\mathrm{CH_3COOH}$ là hợp chất hữu cơ.',
    },
    {
      type: 'number',
      prompt:
        'Trong dãy $\\mathrm{CH_4}$, $\\mathrm{CO_2}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{CaCO_3}$, $\\mathrm{C_6H_{12}O_6}$, NaCN, $\\mathrm{CH_3COOH}$, có bao nhiêu hợp chất hữu cơ?',
      answer: 4,
      hints: [
        'Loại các chất thuộc nhóm oxide của carbon, muối carbonate, muối cyanide.',
        'Có ba chất bị loại.',
      ],
      solution:
        'Loại $\\mathrm{CO_2}$, $\\mathrm{CaCO_3}$, NaCN. Còn lại $\\mathrm{CH_4}$, $\\mathrm{C_2H_5OH}$, $\\mathrm{C_6H_{12}O_6}$, $\\mathrm{CH_3COOH}$, tức $4$ hợp chất hữu cơ.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng với đa số hợp chất hữu cơ?',
      options: [
        'Liên kết trong phân tử chủ yếu là liên kết cộng hoá trị.',
        'Thường dễ cháy và kém bền với nhiệt.',
        'Phản ứng thường xảy ra chậm, theo nhiều hướng.',
        'Có nhiệt độ nóng chảy rất cao và tan tốt trong nước.',
        'Phản ứng luôn chỉ cho một sản phẩm duy nhất.',
      ],
      answers: [0, 1, 2],
      hints: ['So sánh với muối ăn, một hợp chất ion: hợp chất hữu cơ khác nó ở những điểm nào?'],
      solution:
        'Hợp chất hữu cơ thường có nhiệt độ nóng chảy thấp, ít tan trong nước, và phản ứng hay tạo hỗn hợp sản phẩm. Vì vậy chỉ ba phát biểu về liên kết cộng hoá trị, dễ cháy và kém bền, phản ứng chậm theo nhiều hướng là đúng.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chất với loại hợp chất của nó.',
      left: [
        '$\\mathrm{CH_3CH_2OH}$',
        '$\\mathrm{CH_3CHO}$',
        '$\\mathrm{CH_3COCH_3}$',
        '$\\mathrm{CH_3COOH}$',
        '$\\mathrm{HCOOCH_3}$',
      ],
      right: ['Alcohol', 'Aldehyde', 'Ketone', 'Carboxylic acid', 'Ester', 'Amine'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Tìm nhóm chức trong mỗi công thức: –OH, –CHO, –CO–, –COOH, –COO–.'],
      solution:
        '$\\mathrm{CH_3CH_2OH}$ có –OH (alcohol); $\\mathrm{CH_3CHO}$ có –CHO (aldehyde); $\\mathrm{CH_3COCH_3}$ có –CO– (ketone); $\\mathrm{CH_3COOH}$ có –COOH (carboxylic acid); $\\mathrm{HCOOCH_3}$ có –COO– (ester).',
    },
    {
      type: 'choice',
      prompt:
        'Glutamic acid (trong mì chính là muối của acid này) có công thức $\\mathrm{HOOC-CH_2-CH_2-}$ $\\mathrm{CH(NH_2)-COOH}$. Phân tử này có những nhóm chức nào?',
      options: [
        'Carboxyl (–COOH) và amino (–NH₂)',
        'Hydroxy (–OH) và ketone (–CO–)',
        'Ester (–COO–) và amino (–NH₂)',
        'Chỉ có carboxyl (–COOH)',
      ],
      answer: 0,
      hints: ['Đọc lần lượt từng nhóm trong công thức, từ trái sang phải.'],
      solution:
        'Hai đầu mạch là nhóm –COOH, còn trên mạch có nhóm –$\\mathrm{NH_2}$. Vậy có nhóm carboxyl và nhóm amino.',
    },
    {
      type: 'choice',
      prompt:
        'Phổ IR của chất Y có dải rất rộng từ khoảng $3\\,300$ đến $2\\,500$ $\\mathrm{cm^{-1}}$ và đỉnh mạnh ở $1\\,710$ $\\mathrm{cm^{-1}}$. Y thuộc loại nào?',
      options: ['Carboxylic acid', 'Alcohol', 'Ketone', 'Amine'],
      answer: 0,
      hints: [
        'Dải rộng này là của O–H, còn đỉnh gần $1\\,700$ $\\mathrm{cm^{-1}}$ là của liên kết nào?',
      ],
      solution:
        'Đỉnh $1\\,710$ $\\mathrm{cm^{-1}}$ là C=O, dải $3\\,300$ – $2\\,500$ $\\mathrm{cm^{-1}}$ là O–H của nhóm –COOH. Y là carboxylic acid.',
    },
    {
      type: 'choice',
      prompt:
        'Phổ IR của chất Z ($\\mathrm{C_3H_6O}$) có đỉnh mạnh ở $1\\,730$ $\\mathrm{cm^{-1}}$ và hai đỉnh ở $2\\,820$, $2\\,720$ $\\mathrm{cm^{-1}}$. Z là chất nào?',
      options: [
        '$\\mathrm{CH_3CH_2CHO}$',
        '$\\mathrm{CH_3COCH_3}$',
        '$\\mathrm{CH_2=CH-CH_2OH}$',
        '$\\mathrm{CH_3CH_2COOH}$',
      ],
      answer: 0,
      hints: ['Vùng $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$ là của liên kết C–H trong nhóm nào?'],
      solution:
        'C=O ở $1\\,730$ $\\mathrm{cm^{-1}}$ cùng C–H của nhóm –CHO ở $2\\,900$ – $2\\,700$ $\\mathrm{cm^{-1}}$ cho biết Z là aldehyde: $\\mathrm{CH_3CH_2CHO}$. Còn $\\mathrm{CH_3CH_2COOH}$ có hai nguyên tử O nên không khớp công thức $\\mathrm{C_3H_6O}$.',
    },
    {
      type: 'text',
      prompt:
        'Phương pháp vật lí nào dùng sự hấp thụ bức xạ có số sóng đặc trưng của các liên kết để dự đoán nhóm chức?',
      accept: ['phổ hồng ngoại', 'phổ IR', 'IR', 'phương pháp phổ hồng ngoại'],
      hints: ['Tên phương pháp gắn với loại bức xạ được chiếu qua mẫu.'],
      solution: 'Đó là phương pháp phổ hồng ngoại (phổ IR).',
    },
  ],
  takeaways: [
    'Hợp chất hữu cơ là hợp chất của carbon, trừ CO, $\\mathrm{CO_2}$, muối carbonate, cyanide, carbide,...',
    'Hợp chất hữu cơ thường có liên kết cộng hoá trị, dễ cháy, kém bền nhiệt, phản ứng chậm và theo nhiều hướng.',
    'Hai nhóm lớn là hydrocarbon (chỉ có C, H) và dẫn xuất của hydrocarbon.',
    'Nhóm chức quyết định tính chất hoá học đặc trưng của hợp chất.',
    'Trên phổ IR, mỗi liên kết hấp thụ ở vùng số sóng đặc trưng: O–H trên $3\\,200$ $\\mathrm{cm^{-1}}$, C=O gần $1\\,700$ $\\mathrm{cm^{-1}}$.',
  ],
};
