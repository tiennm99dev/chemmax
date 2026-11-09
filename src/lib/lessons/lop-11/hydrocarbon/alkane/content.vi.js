/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Alkane: khái niệm, công thức chung, đồng phân và danh pháp thay thế, tính chất vật lí, phản ứng thế halogen, cracking, reforming, phản ứng cháy và ứng dụng.',
  intro:
    'Khí gas trong bình đun bếp, xăng trong bình xe máy, nến thắp sáng và nhựa đường đều chứa chủ yếu là alkane. Chúng cùng một dãy đồng đẳng, chỉ khác nhau ở độ dài mạch carbon. Vì sao chất thì là khí, chất thì là chất rắn, và gọi tên chúng thế nào cho đúng?',
  objectives: [
    'Nêu được khái niệm alkane, công thức chung và đặc điểm cấu tạo.',
    'Viết được đồng phân cấu tạo và gọi được tên thay thế của alkane đến 10 nguyên tử C.',
    'Trình bày được tính chất vật lí và giải thích được vì sao alkane tương đối trơ.',
    'Viết được phương trình phản ứng thế halogen, cracking, reforming và phản ứng cháy.',
    'Nêu được ứng dụng của alkane và vấn đề môi trường khi đốt nhiên liệu.',
  ],
  sections: [
    {
      heading: 'Khái niệm, đồng phân và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Alkane',
          text: 'Alkane là các hydrocarbon no, mạch hở, trong phân tử chỉ có liên kết đơn C–C và C–H. Công thức chung của alkane là $\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$).',
        },
        {
          type: 'p',
          text: 'Từ $\\mathrm{C_4H_{10}}$ trở đi, alkane có đồng phân cấu tạo về mạch carbon (mạch không phân nhánh và mạch phân nhánh). Ví dụ $\\mathrm{C_4H_{10}}$ có $2$ đồng phân, $\\mathrm{C_5H_{12}}$ có $3$ đồng phân.',
        },
        {
          type: 'table',
          caption: 'Tên của 10 alkane mạch không phân nhánh đầu dãy',
          head: ['Số C', 'Công thức', 'Tên', 'Số C', 'Công thức', 'Tên'],
          rows: [
            ['$1$', '$\\mathrm{CH_4}$', 'methane', '$6$', '$\\mathrm{C_6H_{14}}$', 'hexane'],
            ['$2$', '$\\mathrm{C_2H_6}$', 'ethane', '$7$', '$\\mathrm{C_7H_{16}}$', 'heptane'],
            ['$3$', '$\\mathrm{C_3H_8}$', 'propane', '$8$', '$\\mathrm{C_8H_{18}}$', 'octane'],
            ['$4$', '$\\mathrm{C_4H_{10}}$', 'butane', '$9$', '$\\mathrm{C_9H_{20}}$', 'nonane'],
            [
              '$5$',
              '$\\mathrm{C_5H_{12}}$',
              'pentane',
              '$10$',
              '$\\mathrm{C_{10}H_{22}}$',
              'decane',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Bỏ một nguyên tử H của alkane ta được nhóm alkyl, tên đổi đuôi -ane thành -yl: $\\mathrm{CH_3{-}}$ methyl, $\\mathrm{CH_3CH_2{-}}$ ethyl, $\\mathrm{CH_3CH_2CH_2{-}}$ propyl, $\\mathrm{(CH_3)_2CH{-}}$ isopropyl.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế của alkane mạch nhánh',
          text: 'Số chỉ vị trí nhánh – tên nhánh + tên mạch chính (đuôi ane).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn mạch chính là mạch carbon dài nhất; nếu có nhiều mạch dài bằng nhau, chọn mạch có nhiều nhánh hơn.',
            'Đánh số các carbon mạch chính từ đầu gần nhánh hơn, sao cho tập số chỉ vị trí nhánh là nhỏ nhất.',
            'Gọi tên nhánh theo thứ tự chữ cái (ethyl trước methyl). Nhiều nhánh giống nhau thì gộp lại, thêm di, tri, tetra và ghi đủ các số chỉ vị trí.',
            'Giữa số và chữ dùng dấu "-", giữa các số dùng dấu ",". Tên nhánh cuối viết liền với tên mạch chính.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số alkane có tên thông thường',
          head: ['Công thức cấu tạo', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{CH_3{-}CH(CH_3){-}CH_3}$', '2-methylpropane', 'isobutane'],
            ['$\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH_3}$', '2-methylbutane', 'isopentane'],
            ['$\\mathrm{CH_3{-}C(CH_3)_2{-}CH_3}$', '2,2-dimethylpropane', 'neopentane'],
          ],
        },
        {
          type: 'p',
          text: 'Bậc của một nguyên tử carbon bằng số nguyên tử carbon liên kết trực tiếp với nó. Trong 2-methylbutane, hai carbon ở đầu mạch chính và carbon nhánh có bậc I, carbon số 3 có bậc II, carbon số 2 có bậc III.',
        },
      ],
    },
    {
      heading: 'Cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Trong phân tử alkane, mỗi nguyên tử carbon nằm ở tâm một hình tứ diện, bốn liên kết hướng về bốn đỉnh, góc liên kết khoảng $109{,}5^\\circ$. Vì vậy mạch carbon có dạng gấp khúc chứ không thẳng. Các liên kết C–C và C–H đều là liên kết σ bền và hầu như không phân cực.',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ sôi của một số alkane mạch không phân nhánh',
          head: ['Alkane', 'Nhiệt độ sôi (°C)', 'Trạng thái ở điều kiện thường'],
          rows: [
            ['Methane', '$-161{,}5$', 'Khí'],
            ['Ethane', '$-88{,}6$', 'Khí'],
            ['Propane', '$-42{,}1$', 'Khí'],
            ['Butane', '$-0{,}5$', 'Khí'],
            ['Pentane', '$36{,}1$', 'Lỏng'],
            ['Hexane', '$68{,}7$', 'Lỏng'],
          ],
        },
        {
          type: 'list',
          items: [
            'Ở điều kiện thường, alkane từ $\\mathrm{C_1}$ đến $\\mathrm{C_4}$ là chất khí, từ $\\mathrm{C_5}$ đến khoảng $\\mathrm{C_{17}}$ là chất lỏng, các alkane lớn hơn là chất rắn.',
            'Nhiệt độ sôi, nhiệt độ nóng chảy tăng theo số nguyên tử carbon (phân tử khối tăng). Với các đồng phân, mạch càng phân nhánh thì nhiệt độ sôi càng thấp.',
            'Alkane không phân cực nên hầu như không tan trong nước, tan tốt trong dung môi hữu cơ, và nhẹ hơn nước.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Do liên kết σ bền và kém phân cực, ở nhiệt độ thường alkane tương đối trơ: không phản ứng với acid, base hay chất oxi hoá như dung dịch $\\mathrm{KMnO_4}$. Khi chiếu sáng hoặc đun nóng, alkane tham gia phản ứng thế, phản ứng tách và phản ứng oxi hoá.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng thế halogen',
          text: 'Khi chiếu sáng hoặc đun nóng, nguyên tử H của alkane bị thay thế bởi nguyên tử halogen. Nguyên tử H gắn với carbon bậc cao hơn dễ bị thế hơn.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\mathrm{as}} \\mathrm{CH_3Cl} + \\mathrm{HCl}',
        },
        {
          type: 'p',
          text: 'Nếu dư chlorine, các nguyên tử H tiếp tục bị thế, tạo ra $\\mathrm{CH_2Cl_2}$, $\\mathrm{CHCl_3}$ và $\\mathrm{CCl_4}$. Với propane, phản ứng tạo hai sản phẩm thế monochlorine; 2-chloropropane (Cl thế H ở carbon bậc II) là sản phẩm chính:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3CH_2CH_3} + \\mathrm{Cl_2} \\xrightarrow{\\mathrm{as},\\ 25^\\circ\\mathrm{C}} \\mathrm{CH_3CHClCH_3} + \\mathrm{HCl} \\quad (\\text{chủ yếu})',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cracking và reforming',
          text: 'Cracking là quá trình bẻ gãy mạch carbon của alkane mạch dài, tạo thành hỗn hợp alkane và alkene mạch ngắn hơn. Reforming là quá trình chuyển alkane mạch không phân nhánh thành alkane mạch phân nhánh và hydrocarbon mạch vòng, không làm thay đổi số nguyên tử carbon, dùng để tăng chất lượng xăng.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_4H_{10}} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{CH_4} + \\mathrm{C_3H_6} \\qquad \\mathrm{C_4H_{10}} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{C_2H_6} + \\mathrm{C_2H_4}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3[CH_2]_4CH_3} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{C_6H_6} + 4\\mathrm{H_2}',
        },
        {
          type: 'p',
          text: 'Alkane cháy hoàn toàn tạo ra $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$, toả nhiều nhiệt, nên được dùng làm nhiên liệu. Khi thiếu oxygen, phản ứng cháy không hoàn toàn sinh ra $\\mathrm{CO}$ rất độc và muội than.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_nH_{2n+2}} + \\dfrac{3n+1}{2}\\mathrm{O_2} \\xrightarrow{t^\\circ} n\\mathrm{CO_2} + (n+1)\\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Khi có xúc tác thích hợp, alkane bị oxi hoá không hoàn toàn thành hợp chất chứa oxygen, ví dụ: $\\mathrm{CH_4} + \\mathrm{O_2} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{HCHO} + \\mathrm{H_2O}$.',
        },
      ],
    },
    {
      heading: 'Ứng dụng và điều chế',
      blocks: [
        {
          type: 'table',
          head: ['Alkane', 'Ứng dụng'],
          rows: [
            [
              'Methane (khí thiên nhiên)',
              'Nhiên liệu cho nhà máy điện, sản xuất phân bón, hydrogen',
            ],
            ['Propane, butane', 'Khí hoá lỏng (LPG) dùng làm khí đốt dân dụng'],
            [
              '$\\mathrm{C_6}$ đến $\\mathrm{C_{16}}$',
              'Xăng, dầu hoả, dầu diesel; hexane làm dung môi',
            ],
            ['Alkane rắn và mạch rất dài', 'Dầu nhờn, sáp paraffin (nến), nhựa đường'],
          ],
        },
        {
          type: 'p',
          text: 'Trong công nghiệp, alkane được lấy từ dầu mỏ (chưng cất phân đoạn), khí thiên nhiên và khí mỏ dầu. Đốt nhiên liệu hoá thạch thải ra nhiều $\\mathrm{CO_2}$ gây hiệu ứng nhà kính, và các khí độc như $\\mathrm{CO}$ khi cháy không hoàn toàn, nên cần sử dụng tiết kiệm và hiệu quả.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bàn dựng và đặt tên alkane',
    instruction:
      'Chọn số carbon của mạch ngang, bấm các ô dấu cộng để gắn nhánh $\\mathrm{CH_3}$ hoặc $\\mathrm{C_2H_5}$, rồi gõ tên thay thế và bấm Kiểm tra. Chú ý: mạch chính là mạch dài nhất, có thể đi vòng qua nhánh ethyl chứ không nhất thiết là mạch nằm ngang.',
  },
  examples: [
    {
      problem: 'Gọi tên thay thế của alkane $\\mathrm{CH_3{-}CH(CH_3){-}CH(CH_3){-}CH_2{-}CH_3}$.',
      steps: [
        'Mạch carbon dài nhất có $5$ nguyên tử C, nên mạch chính là pentane.',
        'Có hai nhánh methyl. Đánh số từ trái sang phải, các nhánh ở vị trí $2$ và $3$; đánh số từ phải sang trái được $3$ và $4$. Chọn cách đầu vì $\\{2; 3\\}$ nhỏ hơn.',
        'Hai nhánh giống nhau nên gộp thành dimethyl và ghi đủ hai số chỉ vị trí.',
      ],
      answer: '2,3-dimethylpentane.',
    },
    {
      problem: 'Gọi tên thay thế của alkane $\\mathrm{CH_3{-}CH(C_2H_5){-}CH_2{-}CH_3}$.',
      steps: [
        'Nếu chỉ đọc mạch nằm ngang thì có $4$ carbon. Nhưng đi qua nhánh $\\mathrm{C_2H_5}$: $\\mathrm{CH_3{-}CH_2{-}CH(CH_3){-}CH_2{-}CH_3}$, mạch dài $5$ carbon.',
        'Mạch chính là pentane, còn lại một nhánh methyl gắn ở carbon thứ $3$ (đánh số từ đầu nào cũng là $3$).',
      ],
      answer: '3-methylpentane.',
    },
    {
      problem:
        'Đốt cháy hoàn toàn $4{,}4$ g propane. Tính thể tích khí $\\mathrm{CO_2}$ sinh ra ở điều kiện chuẩn (đkc, $24{,}79$ L/mol).',
      steps: [
        '$\\mathrm{C_3H_8} + 5\\mathrm{O_2} \\xrightarrow{t^\\circ} 3\\mathrm{CO_2} + 4\\mathrm{H_2O}$.',
        '$n_{\\mathrm{C_3H_8}} = \\dfrac{4{,}4}{44} = 0{,}1$ mol, nên $n_{\\mathrm{CO_2}} = 3 \\cdot 0{,}1 = 0{,}3$ mol.',
        '$V_{\\mathrm{CO_2}} = 0{,}3 \\cdot 24{,}79 = 7{,}437$ L.',
      ],
      answer: 'Thu được khoảng $7{,}44$ L khí $\\mathrm{CO_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công thức chung của dãy đồng đẳng alkane là',
      options: [
        '$\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$)',
        '$\\mathrm{C_nH_{2n}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n-2}}$ ($n \\ge 2$)',
        '$\\mathrm{C_nH_{2n-6}}$ ($n \\ge 6$)',
      ],
      answer: 0,
      hints: ['Viết công thức của methane, ethane, propane rồi tìm quy luật số H.'],
      solution:
        '$\\mathrm{CH_4}$, $\\mathrm{C_2H_6}$, $\\mathrm{C_3H_8}$ đều có số H bằng $2n + 2$. Vậy công thức chung là $\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$).',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của alkane $\\mathrm{CH_3{-}C(CH_3)_2{-}CH_2{-}CH_3}$.',
      accept: ['2,2-dimethylbutane', '2,2 dimethylbutane', '2,2-dimethyl butane'],
      hints: [
        'Mạch dài nhất có mấy carbon? Hai nhánh gắn vào cùng một carbon.',
        'Đánh số từ đầu gần nhánh hơn, hai nhánh giống nhau dùng tiền tố di.',
      ],
      solution:
        'Mạch chính có $4$ C (butane). Hai nhánh methyl cùng ở carbon số $2$ khi đánh số từ trái. Tên: 2,2-dimethylbutane.',
    },
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của alkane $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH(C_2H_5){-}CH_3}$.',
      accept: ['2,4-dimethylhexane', '2,4 dimethylhexane', '2,4-dimethyl hexane'],
      hints: [
        'Đừng dừng ở mạch nằm ngang: mạch đi qua nhánh $\\mathrm{C_2H_5}$ dài hơn.',
        'Mạch chính có $6$ C. Đánh số sao cho hai nhánh methyl có số nhỏ nhất.',
      ],
      solution:
        'Đi qua nhánh ethyl, mạch dài nhất là $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}CH(CH_3){-}CH_2{-}CH_3}$ gồm $6$ C (hexane). Hai nhánh methyl ở vị trí $2$ và $4$ (đánh số ngược lại được $3$ và $5$, lớn hơn). Tên: 2,4-dimethylhexane.',
    },
    {
      type: 'number',
      prompt: 'Hexane $\\mathrm{C_6H_{14}}$ có bao nhiêu đồng phân cấu tạo?',
      answer: 5,
      hints: [
        'Xét lần lượt mạch chính $6$ C, $5$ C (một nhánh methyl), $4$ C (hai nhánh methyl hoặc một nhánh ethyl).',
        'Mạch $4$ C với nhánh ethyl có thật sự là mạch chính dài nhất không?',
      ],
      solution:
        'Gồm hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane và 2,3-dimethylbutane: $5$ đồng phân. Mạch $4$ C có nhánh ethyl thực ra là 3-methylpentane.',
    },
    {
      type: 'choice',
      prompt:
        'Cho propane tác dụng với chlorine (chiếu sáng, tỉ lệ mol $1 : 1$). Sản phẩm hữu cơ chính là',
      options: ['2-chloropropane', '1-chloropropane', '1,2-dichloropropane', 'chloromethane'],
      answer: 0,
      hints: ['Nguyên tử H gắn với carbon bậc cao hơn dễ bị thế hơn.'],
      solution:
        'Carbon giữa mạch propane có bậc II, hai carbon đầu mạch có bậc I. Cl ưu tiên thế H ở carbon bậc II, tạo $\\mathrm{CH_3CHClCH_3}$, tên 2-chloropropane.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $2{,}9$ g butane $\\mathrm{C_4H_{10}}$. Tính khối lượng $\\mathrm{CO_2}$ thu được.',
      answer: 8.8,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        'Tính số mol butane ($M = 58$ g/mol).',
        'Một phân tử butane cho $4$ phân tử $\\mathrm{CO_2}$.',
      ],
      solution:
        '$n_{\\mathrm{C_4H_{10}}} = \\dfrac{2{,}9}{58} = 0{,}05$ mol, $n_{\\mathrm{CO_2}} = 4 \\cdot 0{,}05 = 0{,}2$ mol, $m_{\\mathrm{CO_2}} = 0{,}2 \\cdot 44 = 8{,}8$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu mol $\\mathrm{O_2}$ để đốt cháy hoàn toàn $1$ mol pentane $\\mathrm{C_5H_{12}}$?',
      answer: 8,
      unit: 'mol',
      hints: ['Dùng hệ số $\\dfrac{3n+1}{2}$ với $n = 5$.'],
      solution:
        '$\\mathrm{C_5H_{12}} + 8\\mathrm{O_2} \\xrightarrow{t^\\circ} 5\\mathrm{CO_2} + 6\\mathrm{H_2O}$. Kiểm tra: $\\dfrac{3 \\cdot 5 + 1}{2} = 8$; O ở vế phải $5 \\cdot 2 + 6 = 16$. Cần $8$ mol $\\mathrm{O_2}$.',
    },
    {
      type: 'number',
      prompt: 'Một alkane có phân tử khối $72$. Phân tử alkane đó có bao nhiêu nguyên tử carbon?',
      answer: 5,
      hints: ['Phân tử khối của $\\mathrm{C_nH_{2n+2}}$ là $12n + 2n + 2 = 14n + 2$.'],
      solution: '$14n + 2 = 72$ nên $n = 5$. Alkane là $\\mathrm{C_5H_{12}}$.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi phương trình với loại phản ứng của nó.',
      left: [
        '$\\mathrm{CH_4} + \\mathrm{Cl_2} \\xrightarrow{\\mathrm{as}} \\mathrm{CH_3Cl} + \\mathrm{HCl}$',
        '$\\mathrm{C_4H_{10}} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{CH_4} + \\mathrm{C_3H_6}$',
        '$\\mathrm{C_3H_8} + 5\\mathrm{O_2} \\xrightarrow{t^\\circ} 3\\mathrm{CO_2} + 4\\mathrm{H_2O}$',
        '$\\mathrm{C_6H_{14}} \\xrightarrow{t^\\circ,\\,\\mathrm{xt}} \\mathrm{C_6H_6} + 4\\mathrm{H_2}$',
      ],
      right: ['Phản ứng thế', 'Cracking', 'Phản ứng cháy', 'Reforming', 'Phản ứng cộng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Alkane chỉ có liên kết đơn, nên không có phản ứng cộng.',
        'Cracking làm mạch ngắn đi; reforming giữ nguyên số carbon.',
      ],
      solution:
        'Cl thay H: phản ứng thế. Butane gãy thành hai phân tử nhỏ hơn: cracking. Tạo $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$: phản ứng cháy. Hexane thành benzene vẫn $6$ C: reforming.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các alkane theo nhiệt độ sôi tăng dần.',
      items: ['Hexane', 'Methane', 'Butane', 'Propane', 'Pentane'],
      answer: [1, 3, 2, 4, 0],
      hints: ['Mạch càng dài, phân tử khối càng lớn thì nhiệt độ sôi càng cao.'],
      solution:
        'Methane ($-161{,}5$ °C) < propane ($-42{,}1$ °C) < butane ($-0{,}5$ °C) < pentane ($36{,}1$ °C) < hexane ($68{,}7$ °C).',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào về alkane là đúng?',
      options: [
        'Ở điều kiện thường, alkane không làm mất màu dung dịch $\\mathrm{KMnO_4}$.',
        'Alkane nhẹ hơn nước và hầu như không tan trong nước.',
        'Phân tử alkane có liên kết đôi C=C.',
        'Khí hoá lỏng LPG chứa chủ yếu propane và butane.',
      ],
      answers: [0, 1, 3],
      hints: ['Alkane là hydrocarbon no: chỉ có liên kết đơn.'],
      solution:
        'Alkane tương đối trơ nên không phản ứng với $\\mathrm{KMnO_4}$ ở điều kiện thường; chúng không phân cực nên không tan, và nhẹ hơn nước; LPG chủ yếu là propane và butane. Alkane chỉ có liên kết đơn, nên phát biểu về liên kết đôi là sai.',
    },
  ],
  takeaways: [
    'Alkane là hydrocarbon no, mạch hở, công thức chung $\\mathrm{C_nH_{2n+2}}$ ($n \\ge 1$); từ $\\mathrm{C_4}$ có đồng phân mạch carbon.',
    'Tên thay thế: số chỉ vị trí – tên nhánh (theo chữ cái) + tên mạch chính dài nhất, đánh số từ đầu gần nhánh hơn.',
    'Alkane tương đối trơ ở nhiệt độ thường; khi chiếu sáng hoặc đun nóng có phản ứng thế halogen (ưu tiên H của carbon bậc cao), cracking, reforming và cháy.',
    'Alkane là nguồn nhiên liệu và nguyên liệu quan trọng, lấy từ dầu mỏ và khí thiên nhiên.',
  ],
};
