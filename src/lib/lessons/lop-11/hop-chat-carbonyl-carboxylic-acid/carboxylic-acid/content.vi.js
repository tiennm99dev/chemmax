/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Carboxylic acid: khái niệm, danh pháp thay thế và tên thông thường, đặc điểm nhóm COOH, liên kết hydrogen và tính chất vật lí, tính acid, phản ứng ester hoá; điều chế và ứng dụng của acetic acid.',
  intro:
    'Vị chua của giấm ăn đến từ acetic acid, của chanh từ citric acid, của sữa chua từ lactic acid. Một ít giấm đun trong ấm còn làm tan lớp cặn trắng bám ở đáy. Các acid hữu cơ này đều có nhóm carboxyl $\\mathrm{{-}COOH}$. Chúng mạnh đến đâu, và vì sao trộn acid với alcohol không bao giờ thu được ester với hiệu suất $100\\%$?',
  objectives: [
    'Nêu được khái niệm carboxylic acid và công thức chung của carboxylic acid no, đơn chức, mạch hở; gọi được tên thay thế và tên thông thường của một số acid đơn giản.',
    'Mô tả được đặc điểm cấu tạo nhóm carboxyl; giải thích được nhiệt độ sôi cao và tính tan trong nước của carboxylic acid.',
    'Trình bày được tính acid của carboxylic acid: phản ứng với kim loại, base, oxide base, muối carbonate.',
    'Viết được phương trình phản ứng ester hoá và nêu được các yếu tố làm tăng hiệu suất phản ứng.',
    'Trình bày được phương pháp điều chế và ứng dụng của acetic acid.',
  ],
  sections: [
    {
      heading: 'Khái niệm và danh pháp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Carboxylic acid',
          text: 'Carboxylic acid là những hợp chất hữu cơ trong phân tử có nhóm carboxyl ($\\mathrm{{-}COOH}$) liên kết với nguyên tử carbon hoặc nguyên tử hydrogen. Carboxylic acid no, đơn chức, mạch hở có công thức chung $\\mathrm{C_nH_{2n+1}COOH}$ ($n \\ge 0$), hay $\\mathrm{C_mH_{2m}O_2}$ ($m \\ge 1$).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tên thay thế',
          text: 'Tên hydrocarbon mạch chính (bỏ chữ e ở cuối) + oic acid. Mạch chính là mạch carbon dài nhất có chứa nhóm COOH, đánh số từ carbon của nhóm COOH.',
        },
        {
          type: 'table',
          caption: 'Tên của một số carboxylic acid',
          head: ['Công thức', 'Tên thay thế', 'Tên thông thường'],
          rows: [
            ['$\\mathrm{HCOOH}$', 'methanoic acid', 'formic acid'],
            ['$\\mathrm{CH_3COOH}$', 'ethanoic acid', 'acetic acid'],
            ['$\\mathrm{CH_3{-}CH_2{-}COOH}$', 'propanoic acid', 'propionic acid'],
            ['$\\mathrm{CH_3{-}CH_2{-}CH_2{-}COOH}$', 'butanoic acid', 'butyric acid'],
            ['$\\mathrm{CH_2{=}CH{-}COOH}$', 'prop-2-enoic acid', 'acrylic acid'],
            ['$\\mathrm{HOOC{-}COOH}$', 'ethanedioic acid', 'oxalic acid'],
            ['$\\mathrm{C_6H_5COOH}$', 'benzoic acid', 'benzoic acid'],
          ],
        },
      ],
    },
    {
      heading: 'Đặc điểm cấu tạo và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm carboxyl gồm nhóm carbonyl $>\\mathrm{C{=}O}$ và nhóm hydroxy $\\mathrm{{-}OH}$. Nhóm C=O hút electron làm liên kết $\\mathrm{O{-}H}$ phân cực mạnh hơn trong alcohol, nên nguyên tử H của nhóm COOH dễ tách ra dưới dạng ion $\\mathrm{H^+}$.',
        },
        {
          type: 'p',
          text: 'Hai phân tử carboxylic acid liên kết với nhau bằng hai liên kết hydrogen, bền hơn liên kết hydrogen giữa các phân tử alcohol.',
        },
        {
          type: 'table',
          caption: 'Nhiệt độ sôi của một số chất có phân tử khối gần nhau',
          head: ['Chất', '$M$', 'Nhiệt độ sôi'],
          rows: [
            ['butane', '$58$', '$-0{,}5$ °C'],
            ['propanal', '$58$', '$49$ °C'],
            ['propan-1-ol', '$60$', '$97{,}1$ °C'],
            ['acetic acid', '$60$', '$118$ °C'],
          ],
        },
        {
          type: 'list',
          items: [
            'Carboxylic acid có nhiệt độ sôi cao hơn alcohol, aldehyde, ketone và hydrocarbon có phân tử khối tương đương.',
            'Các acid đầu dãy (formic, acetic, propionic acid) là chất lỏng, tan vô hạn trong nước nhờ liên kết hydrogen với nước. Khi mạch carbon dài ra, độ tan giảm.',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Tính acid. Carboxylic acid là acid yếu, phân li không hoàn toàn trong nước: $\\mathrm{CH_3COOH} \\rightleftharpoons \\mathrm{CH_3COO^-} + \\mathrm{H^+}$. Dung dịch carboxylic acid làm quỳ tím hoá đỏ và có đầy đủ tính chất của một acid:',
        },
        {
          type: 'list',
          items: [
            'Với kim loại đứng trước hydrogen: $2\\mathrm{CH_3COOH} + \\mathrm{Mg} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Mg} + \\mathrm{H_2}\\uparrow$.',
            'Với base: $\\mathrm{CH_3COOH} + \\mathrm{NaOH} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{H_2O}$.',
            'Với oxide base: $2\\mathrm{CH_3COOH} + \\mathrm{CuO} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Cu} + \\mathrm{H_2O}$.',
            'Với muối carbonate, hydrogencarbonate: $2\\mathrm{CH_3COOH} + \\mathrm{CaCO_3} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Ca} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phản ứng ester hoá',
          text: 'Carboxylic acid tác dụng với alcohol khi có $\\mathrm{H_2SO_4}$ đặc làm xúc tác, đun nóng, tạo ester và nước. Phản ứng thuận nghịch nên không đạt hiệu suất $100\\%$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CH_3COOH} + \\mathrm{C_2H_5OH} \\overset{\\mathrm{H_2SO_4}\\ \\text{đặc},\\ t^\\circ}{\\rightleftharpoons} \\mathrm{CH_3COOC_2H_5} + \\mathrm{H_2O}',
        },
        {
          type: 'p',
          text: 'Sản phẩm ethyl acetate là chất lỏng có mùi thơm, ít tan trong nước. Theo nguyên lí chuyển dịch cân bằng Le Chatelier, muốn tăng hiệu suất ester hoá cần dùng dư một chất phản ứng (thường là alcohol, rẻ hơn) hoặc lấy bớt sản phẩm ra: $\\mathrm{H_2SO_4}$ đặc vừa là xúc tác vừa hút nước, hoặc chưng cất tách ester ra khỏi hỗn hợp.',
        },
      ],
    },
    {
      heading: 'Điều chế và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Lên men giấm (phương pháp sinh hoá): $\\mathrm{C_2H_5OH} + \\mathrm{O_2} \\xrightarrow{\\text{enzyme}} \\mathrm{CH_3COOH} + \\mathrm{H_2O}$.',
            'Oxi hoá butane trong công nghiệp: $2\\mathrm{C_4H_{10}} + 5\\mathrm{O_2} \\xrightarrow{\\mathrm{xt},\\,t^\\circ,\\,p} 4\\mathrm{CH_3COOH} + 2\\mathrm{H_2O}$.',
            'Từ methanol và carbon monoxide: $\\mathrm{CH_3OH} + \\mathrm{CO} \\xrightarrow{\\mathrm{xt},\\,t^\\circ} \\mathrm{CH_3COOH}$.',
          ],
        },
        {
          type: 'p',
          text: 'Giấm ăn là dung dịch acetic acid khoảng $2$–$5\\%$. Acetic acid còn dùng sản xuất tơ, chất dẻo, phẩm nhuộm, dược phẩm và các ester làm dung môi, hương liệu. Nhiều acid khác có trong tự nhiên: citric acid trong quả chanh, malic acid trong quả táo, lactic acid trong sữa chua.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cân bằng ester hoá',
    instruction:
      'Ban đầu có $1$ mol acetic acid. Kéo thanh trượt để đổi số mol ethanol và lượng nước có sẵn, quan sát số mol các chất lúc cân bằng và hiệu suất. Tìm cách đạt hiệu suất từ $90\\%$ trở lên.',
  },
  examples: [
    {
      problem: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH(CH_3){-}CH_2{-}COOH}$.',
      steps: [
        'Mạch dài nhất chứa nhóm COOH có $4$ C: butane, bỏ chữ e thành butan.',
        'Đánh số từ carbon của nhóm COOH: nhánh methyl ở C3.',
        'Tên: 3-methylbutanoic acid.',
      ],
      answer: '3-methylbutanoic acid.',
    },
    {
      problem:
        'Đun nóng $12$ g acetic acid với $13{,}8$ g ethanol (xúc tác $\\mathrm{H_2SO_4}$ đặc), hiệu suất phản ứng $62{,}5\\%$. Tính khối lượng ethyl acetate thu được.',
      steps: [
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{12}{60} = 0{,}2$ mol; $n_{\\mathrm{C_2H_5OH}} = \\dfrac{13{,}8}{46} = 0{,}3$ mol.',
        'Tỉ lệ phản ứng $1 : 1$, nên acid hết trước nếu phản ứng hoàn toàn: tính hiệu suất theo acid.',
        '$n_{\\text{ester}} = 0{,}2 \\cdot 0{,}625 = 0{,}125$ mol; $m = 0{,}125 \\cdot 88 = 11$ g.',
      ],
      answer: 'Thu được $11$ g ethyl acetate.',
    },
    {
      problem:
        'Cần bao nhiêu gam giấm ăn chứa $5\\%$ acetic acid để hoà tan hết $10$ g cặn $\\mathrm{CaCO_3}$ trong ấm đun nước?',
      steps: [
        '$n_{\\mathrm{CaCO_3}} = \\dfrac{10}{100} = 0{,}1$ mol.',
        '$2\\mathrm{CH_3COOH} + \\mathrm{CaCO_3} \\rightarrow (\\mathrm{CH_3COO})_2\\mathrm{Ca} + \\mathrm{CO_2} + \\mathrm{H_2O}$, nên $n_{\\mathrm{CH_3COOH}} = 0{,}2$ mol, $m = 0{,}2 \\cdot 60 = 12$ g.',
        'Khối lượng giấm: $\\dfrac{12}{0{,}05} = 240$ g.',
      ],
      answer: 'Cần $240$ g giấm ăn.',
    },
  ],
  practice: [
    {
      type: 'text',
      prompt: 'Gọi tên thay thế của $\\mathrm{CH_3{-}CH(CH_3){-}COOH}$.',
      accept: ['2-methylpropanoic acid', '2 methylpropanoic acid', '2-methyl propanoic acid'],
      hints: ['Mạch chính có $3$ C, đánh số từ carbon của nhóm COOH.'],
      solution:
        'Mạch chính propane (kể cả carbon của COOH), nhánh methyl ở C2: 2-methylpropanoic acid.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi acid với tên thông thường của nó.',
      left: [
        '$\\mathrm{HCOOH}$',
        '$\\mathrm{CH_3COOH}$',
        '$\\mathrm{CH_3CH_2COOH}$',
        '$\\mathrm{HOOC{-}COOH}$',
        '$\\mathrm{C_6H_5COOH}$',
      ],
      right: [
        'formic acid',
        'acetic acid',
        'propionic acid',
        'oxalic acid',
        'benzoic acid',
        'butyric acid',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Butyric acid có $4$ nguyên tử carbon.'],
      solution:
        'HCOOH là formic acid, $\\mathrm{CH_3COOH}$ là acetic acid, $\\mathrm{CH_3CH_2COOH}$ là propionic acid, $\\mathrm{HOOC{-}COOH}$ là oxalic acid, $\\mathrm{C_6H_5COOH}$ là benzoic acid. Butyric acid là $\\mathrm{CH_3CH_2CH_2COOH}$.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào có nhiệt độ sôi cao nhất?',
      options: ['Acetic acid', 'Propan-1-ol', 'Propanal', 'Butane'],
      answer: 0,
      hints: ['Bốn chất có phân tử khối gần bằng nhau ($58$–$60$).'],
      solution:
        'Hai phân tử acetic acid liên kết với nhau bằng hai liên kết hydrogen, bền hơn của alcohol, nên acetic acid sôi cao nhất ($118$ °C).',
    },
    {
      type: 'choice',
      prompt: 'Acetic acid không tác dụng với chất nào sau đây?',
      options: ['Cu', 'Mg', 'NaOH', '$\\mathrm{Na_2CO_3}$'],
      answer: 0,
      hints: ['Acid tác dụng với kim loại đứng trước hydrogen trong dãy hoạt động hoá học.'],
      solution:
        'Cu đứng sau hydrogen nên không tác dụng với acetic acid. Mg giải phóng $\\mathrm{H_2}$, NaOH bị trung hoà, $\\mathrm{Na_2CO_3}$ giải phóng $\\mathrm{CO_2}$.',
    },
    {
      type: 'number',
      prompt:
        'Cho $6$ g acetic acid tác dụng với lượng dư dung dịch $\\mathrm{NaHCO_3}$. Tính thể tích khí $\\mathrm{CO_2}$ thu được ở đkc ($24{,}79$ L/mol).',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: [
        '$\\mathrm{CH_3COOH} + \\mathrm{NaHCO_3} \\rightarrow \\mathrm{CH_3COONa} + \\mathrm{CO_2} + \\mathrm{H_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{CH_3COOH}} = \\dfrac{6}{60} = 0{,}1$ mol $= n_{\\mathrm{CO_2}}$. $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt: 'Trung hoà $7{,}4$ g propanoic acid cần bao nhiêu mL dung dịch NaOH $1$ M?',
      answer: 100,
      unit: 'mL',
      hints: [
        '$M_{\\mathrm{C_2H_5COOH}} = 74$ g/mol; acid đơn chức phản ứng với NaOH theo tỉ lệ $1 : 1$.',
      ],
      solution:
        '$n_{\\text{acid}} = \\dfrac{7{,}4}{74} = 0{,}1$ mol $= n_{\\mathrm{NaOH}}$. $V = \\dfrac{0{,}1}{1} = 0{,}1$ L $= 100$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Một carboxylic acid no, đơn chức, mạch hở có phần trăm khối lượng oxygen là $53{,}33\\%$. Phân tử acid có bao nhiêu nguyên tử carbon?',
      answer: 2,
      hints: [
        'Công thức $\\mathrm{C_mH_{2m}O_2}$ có $M = 14m + 32$.',
        '$\\dfrac{32}{M} = 0{,}5333$.',
      ],
      solution:
        '$M = \\dfrac{32}{0{,}5333} \\approx 60$, nên $14m + 32 = 60$ và $m = 2$: acetic acid $\\mathrm{CH_3COOH}$.',
    },
    {
      type: 'number',
      prompt:
        'Đun nóng $9$ g acetic acid với lượng dư ethanol (xúc tác $\\mathrm{H_2SO_4}$ đặc), thu được $8{,}8$ g ethyl acetate. Tính hiệu suất phản ứng ester hoá.',
      answer: 66.67,
      tolerance: 0.1,
      unit: '%',
      hints: ['Ethanol dư nên tính theo acid.', '$M_{\\mathrm{CH_3COOC_2H_5}} = 88$ g/mol.'],
      solution:
        '$n_{\\text{acid}} = \\dfrac{9}{60} = 0{,}15$ mol, $n_{\\text{ester}} = \\dfrac{8{,}8}{88} = 0{,}1$ mol. $H = \\dfrac{0{,}1}{0{,}15} \\cdot 100\\% \\approx 66{,}67\\%$.',
    },
    {
      type: 'multi',
      prompt:
        'Những biện pháp nào làm tăng hiệu suất phản ứng ester hoá giữa acetic acid và ethanol?',
      options: [
        'Dùng dư ethanol.',
        'Dùng $\\mathrm{H_2SO_4}$ đặc để hút nước.',
        'Chưng cất lấy ester ra khỏi hỗn hợp.',
        'Pha loãng acid bằng nhiều nước.',
      ],
      answers: [0, 1, 2],
      hints: ['Phản ứng thuận nghịch, nước là một sản phẩm.'],
      solution:
        'Dùng dư một chất phản ứng hoặc lấy bớt sản phẩm (nước, ester) làm cân bằng chuyển dịch sang phải. Thêm nước làm cân bằng chuyển dịch sang trái, giảm hiệu suất.',
    },
    {
      type: 'choice',
      prompt: 'Phương trình nào là phản ứng lên men giấm?',
      options: [
        '$\\mathrm{C_2H_5OH} + \\mathrm{O_2} \\rightarrow \\mathrm{CH_3COOH} + \\mathrm{H_2O}$',
        '$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + 2\\mathrm{CO_2}$',
        '$\\mathrm{CH_3OH} + \\mathrm{CO} \\rightarrow \\mathrm{CH_3COOH}$',
        '$2\\mathrm{C_4H_{10}} + 5\\mathrm{O_2} \\rightarrow 4\\mathrm{CH_3COOH} + 2\\mathrm{H_2O}$',
      ],
      answer: 0,
      hints: ['Lên men giấm biến rượu (ethanol) thành giấm nhờ enzyme của vi khuẩn.'],
      solution:
        'Lên men giấm: $\\mathrm{C_2H_5OH} + \\mathrm{O_2} \\xrightarrow{\\text{enzyme}} \\mathrm{CH_3COOH} + \\mathrm{H_2O}$. Phản ứng tạo ethanol từ glucose là lên men rượu; hai phản ứng còn lại là phương pháp công nghiệp.',
    },
  ],
  takeaways: [
    'Carboxylic acid có nhóm COOH; loại no, đơn chức, mạch hở là $\\mathrm{C_nH_{2n+1}COOH}$ ($n \\ge 0$).',
    'Tên thay thế: tên mạch chính bỏ e + oic acid, đánh số từ carbon của nhóm COOH.',
    'Liên kết hydrogen bền làm carboxylic acid sôi cao hơn alcohol có phân tử khối tương đương; các acid đầu dãy tan vô hạn trong nước.',
    'Carboxylic acid là acid yếu: làm quỳ tím hoá đỏ, tác dụng với kim loại trước H, base, oxide base, muối carbonate.',
    "Ester hoá: $\\mathrm{RCOOH} + \\mathrm{R'OH} \\rightleftharpoons \\mathrm{RCOOR'} + \\mathrm{H_2O}$ ($\\mathrm{H_2SO_4}$ đặc, $t^\\circ$), thuận nghịch; dư alcohol hoặc tách nước làm tăng hiệu suất.",
    'Acetic acid được điều chế bằng lên men giấm, oxi hoá butane hoặc từ methanol và CO.',
  ],
};
