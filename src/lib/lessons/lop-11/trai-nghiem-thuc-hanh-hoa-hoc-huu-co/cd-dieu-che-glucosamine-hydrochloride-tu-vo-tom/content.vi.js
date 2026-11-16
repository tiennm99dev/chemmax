/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chitin trong vỏ tôm, chitosan và glucosamine; quy trình khử khoáng, khử protein, khử màu để thu chitin, thuỷ phân chitin bằng HCl đặc thành glucosamine hydrochloride; ứng dụng của các sản phẩm từ vỏ tôm.',
  intro:
    'Mỗi năm các nhà máy chế biến tôm thải ra hàng trăm nghìn tấn vỏ tôm. Từ đống phế phẩm ấy, bằng vài dung dịch acid, kiềm quen thuộc, có thể tách ra chitin rồi chuyển thành glucosamine, chất có mặt trong nhiều loại thuốc bổ xương khớp.',
  objectives: [
    'Nêu được thành phần chính của vỏ tôm, cấu tạo và tính chất cơ bản của chitin, chitosan, glucosamine.',
    'Trình bày được các bước của quy trình điều chế glucosamine hydrochloride từ vỏ tôm và vai trò của từng hoá chất.',
    'Viết được phương trình khử khoáng và phương trình thuỷ phân chitin; tính được lượng chất và hiệu suất.',
    'Nêu được một số ứng dụng của chitin, chitosan, glucosamine.',
  ],
  sections: [
    {
      heading: 'Chitin, chitosan và glucosamine',
      blocks: [
        {
          type: 'p',
          text: 'Vỏ tôm, vỏ cua sau khi phơi khô chứa chủ yếu ba thành phần: muối khoáng (phần lớn là $\\mathrm{CaCO_3}$, một ít $\\mathrm{MgCO_3}$, calcium phosphate), protein và chitin; ngoài ra còn sắc tố astaxanthin màu đỏ cam và một ít chất béo. Tỉ lệ các thành phần thay đổi theo loài tôm, thường mỗi thành phần chính chiếm khoảng $20\\%$ – $40\\%$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chitin',
          text: 'Chitin là polysaccharide tạo nên bộ khung của vỏ tôm, cua, côn trùng, có cấu tạo gần giống cellulose: mỗi mắt xích là N-acetylglucosamine, nhóm $\\mathrm{{-}OH}$ ở carbon số $2$ của glucose được thay bằng nhóm $\\mathrm{{-}NHCOCH_3}$. Công thức: $\\mathrm{(C_8H_{13}O_5N)_n}$. Chitin là chất rắn màu trắng, không tan trong nước và trong dung dịch acid, kiềm loãng.',
        },
        {
          type: 'table',
          head: ['Chất', 'Công thức', 'Cách tạo ra'],
          rows: [
            ['Chitin', '$\\mathrm{(C_8H_{13}O_5N)_n}$', 'Tách từ vỏ tôm, cua'],
            [
              'Chitosan',
              'Mắt xích glucosamine $\\mathrm{C_6H_{11}O_4N}$ (phần lớn)',
              'Đun chitin với dung dịch NaOH đặc: nhóm acetyl bị tách ra',
            ],
            [
              'Glucosamine hydrochloride',
              '$\\mathrm{C_6H_{13}O_5N{\\cdot}HCl}$',
              'Thuỷ phân hoàn toàn chitin bằng HCl đặc, nóng',
            ],
          ],
          caption: 'Ba sản phẩm từ vỏ tôm',
        },
        {
          type: 'list',
          items: [
            'Glucosamine là thành phần tạo nên sụn khớp; glucosamine hydrochloride và glucosamine sulfate được dùng trong thực phẩm chức năng, thuốc hỗ trợ điều trị thoái hoá khớp.',
            'Chitosan tan trong acid loãng, tạo màng: dùng làm màng bọc bảo quản trái cây, chất keo tụ xử lí nước thải, vật liệu băng vết thương, phụ gia mĩ phẩm.',
            'Tận dụng vỏ tôm vừa tạo sản phẩm có giá trị, vừa giảm ô nhiễm môi trường từ chất thải ngành thuỷ sản.',
          ],
        },
      ],
    },
    {
      heading: 'Quy trình điều chế glucosamine hydrochloride',
      blocks: [
        {
          type: 'p',
          text: 'Muốn thu được chitin, lần lượt loại bỏ các thành phần còn lại của vỏ tôm; sau đó thuỷ phân chitin thành glucosamine hydrochloride.',
        },
        {
          type: 'table',
          head: ['Bước', 'Hoá chất, điều kiện', 'Mục đích'],
          rows: [
            [
              'Khử khoáng',
              'Ngâm vỏ tôm khô trong dung dịch HCl $10\\%$ khoảng $1$ giờ ở nhiệt độ phòng; rửa đến trung tính.',
              'Hoà tan muối carbonate (có sủi bọt khí $\\mathrm{CO_2}$).',
            ],
            [
              'Khử protein',
              'Đun với dung dịch NaOH $4\\%$; rửa đến trung tính.',
              'Thuỷ phân protein thành chất tan.',
            ],
            [
              'Khử màu',
              'Ngâm dung dịch $\\mathrm{H_2O_2}$ $1\\%$, rửa bằng acetone; sấy khô, nghiền nhỏ.',
              'Loại sắc tố, chất béo; thu chitin trắng ngà.',
            ],
            [
              'Thuỷ phân',
              'Đun hồi lưu chitin với dung dịch HCl đặc (bình cầu, ống sinh hàn) trong tủ hút.',
              'Cắt mạch chitin và nhóm acetyl, tạo glucosamine hydrochloride.',
            ],
            [
              'Khử màu dung dịch',
              'Cho từ từ than hoạt tính, khuấy, lọc.',
              'Hấp phụ chất màu, dung dịch trở nên trong.',
            ],
            [
              'Kết tinh',
              'Để nguội qua đêm (làm lạnh bằng nước đá nếu chưa kết tinh), lọc, rửa tinh thể bằng cồn $96^\\circ$.',
              'Thu tinh thể glucosamine hydrochloride màu trắng.',
            ],
          ],
          caption: 'Các bước điều chế glucosamine hydrochloride từ vỏ tôm',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\to \\mathrm{CaCl_2} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{MgCO_3} + 2\\mathrm{HCl} \\to \\mathrm{MgCl_2} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{(C_8H_{13}O_5N)_n} + 2n\\mathrm{H_2O} + n\\mathrm{HCl} \\xrightarrow{t^\\circ} n\\mathrm{C_6H_{13}O_5N{\\cdot}HCl} + n\\mathrm{CH_3COOH}',
        },
        {
          type: 'p',
          text: 'Trong phản ứng thuỷ phân, mỗi mắt xích nhận hai phân tử nước: một phân tử cắt liên kết giữa các mắt xích, một phân tử cắt nhóm acetyl thành acetic acid. Nhóm $\\mathrm{{-}NH_2}$ vừa giải phóng kết hợp với HCl tạo muối. Theo phương trình, $203$ g chitin cho tối đa $215{,}5$ g glucosamine hydrochloride.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'HCl đặc bốc khói, hơi HCl gây bỏng đường hô hấp: chỉ làm trong tủ hút hoặc nơi thật thoáng, đeo kính, găng tay. Dung dịch NaOH ăn da. Acetone và cồn dễ cháy, để xa ngọn lửa.',
        },
      ],
    },
    {
      heading: 'Thực hành: điều chế glucosamine hydrochloride từ vỏ tôm',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Nguyên liệu: khoảng $100$ g vỏ tôm rửa sạch, phơi khô, xay nhỏ. Dụng cụ: cốc thuỷ tinh $250$ mL, bình cầu, ống sinh hàn, ống đong, phễu lọc, giấy lọc, máy xay, cân, bếp đun. Hoá chất: dung dịch HCl $10\\%$, HCl đặc, dung dịch NaOH $4\\%$, dung dịch $\\mathrm{H_2O_2}$ $1\\%$, cồn $96^\\circ$, acetone, than hoạt tính.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Khử khoáng: cho vỏ tôm khô vào cốc, rót từ từ dung dịch HCl $10\\%$ đến ngập, ngâm khoảng $1$ giờ; quan sát hiện tượng sủi bọt. Rửa bằng nước đến khi pH $= 7$, tráng lại bằng nước cất.',
            'Khử protein: đun vỏ tôm với dung dịch NaOH $4\\%$, rồi rửa đến trung tính.',
            'Khử màu: ngâm trong dung dịch $\\mathrm{H_2O_2}$ $1\\%$, rửa bằng acetone, sấy khô thu chitin; cân khối lượng chitin.',
            'Thuỷ phân: nghiền nhỏ chitin, cho vào bình cầu cùng HCl đặc, lắp ống sinh hàn, đun hồi lưu trong tủ hút đến khi chitin tan hết.',
            'Khử màu: cho từ từ than hoạt tính vào dung dịch, vừa cho vừa khuấy đến khi dung dịch hết màu, lọc bỏ than.',
            'Kết tinh: để nguội dung dịch qua đêm, nếu chưa kết tinh thì làm lạnh bằng nước đá. Lọc lấy tinh thể, rửa bằng cồn $96^\\circ$, làm khô và cân.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo gồm: mục tiêu; nguyên liệu, dụng cụ, hoá chất; cách tiến hành; hiện tượng và phương trình hoá học; khối lượng chitin, khối lượng sản phẩm và hiệu suất so với lí thuyết; thảo luận (vai trò của than hoạt tính, vì sao có sủi bọt khí, cách tăng hiệu suất) và kết luận.',
        },
      ],
    },
  ],
  explore: {
    title: 'Từ vỏ tôm đến glucosamine',
    instruction:
      'Đi qua sáu bước của quy trình: ở mỗi bước chọn hoá chất, điều kiện đúng. Theo dõi thanh thành phần: sau mỗi bước, phần nào của vỏ tôm bị loại bỏ? Thay khối lượng vỏ tôm và hiệu suất kết tinh để xem lượng sản phẩm thu được.',
  },
  examples: [
    {
      problem:
        'Một mẫu $100$ g vỏ tôm khô chứa $30\\%$ $\\mathrm{CaCO_3}$ (bỏ qua muối khoáng khác). Tính thể tích khí $\\mathrm{CO_2}$ (đkc) thoát ra khi khử khoáng hoàn toàn và khối lượng dung dịch HCl $10\\%$ vừa đủ.',
      steps: [
        '$m_{\\mathrm{CaCO_3}} = 30$ g, $n = \\dfrac{30}{100} = 0{,}3$ mol.',
        '$\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\to \\mathrm{CaCl_2} + \\mathrm{CO_2} + \\mathrm{H_2O}$: $n_{\\mathrm{CO_2}} = 0{,}3$ mol, $V = 0{,}3 \\cdot 24{,}79 \\approx 7{,}44$ L.',
        '$n_{\\mathrm{HCl}} = 0{,}6$ mol, $m_{\\mathrm{HCl}} = 0{,}6 \\cdot 36{,}5 = 21{,}9$ g; $m_{\\text{dd}} = \\dfrac{21{,}9 \\cdot 100}{10} = 219$ g.',
      ],
      answer: 'Khoảng $7{,}44$ L khí $\\mathrm{CO_2}$; cần $219$ g dung dịch HCl $10\\%$.',
    },
    {
      problem:
        'Thuỷ phân hoàn toàn $20$ g chitin bằng HCl đặc. Tính khối lượng glucosamine hydrochloride theo lí thuyết, và khối lượng thu được nếu hiệu suất là $60\\%$.',
      steps: [
        'Mỗi mắt xích chitin $\\mathrm{C_8H_{13}O_5N}$ ($M = 203$) tạo một phân tử $\\mathrm{C_6H_{13}O_5N{\\cdot}HCl}$ ($M = 215{,}5$).',
        '$n = \\dfrac{20}{203} \\approx 0{,}0985$ mol; $m_{\\text{lt}} = \\dfrac{20 \\cdot 215{,}5}{203} \\approx 21{,}23$ g.',
        '$m_{\\text{tt}} = 21{,}23 \\cdot 60\\% \\approx 12{,}74$ g.',
      ],
      answer: 'Lí thuyết khoảng $21{,}23$ g; thực tế khoảng $12{,}74$ g.',
    },
    {
      problem:
        'Từ $100$ g vỏ tôm khô, một nhóm thu được $18$ g chitin, rồi từ đó thu được $9{,}5$ g glucosamine hydrochloride. Tính hiệu suất của giai đoạn thuỷ phân và kết tinh.',
      steps: [
        'Lí thuyết: $m = \\dfrac{18 \\cdot 215{,}5}{203} \\approx 19{,}11$ g.',
        '$H = \\dfrac{9{,}5}{19{,}11} \\cdot 100\\% \\approx 49{,}7\\%$.',
      ],
      answer: 'Hiệu suất khoảng $49{,}7\\%$.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Vỏ tôm khô chứa những thành phần chính nào?',
      options: [
        'Chitin',
        'Protein',
        'Muối khoáng, chủ yếu $\\mathrm{CaCO_3}$',
        'Tinh bột',
        'Glucosamine tự do',
      ],
      answers: [0, 1, 2],
      hints: ['Vỏ tôm cứng nhờ muối khoáng và một polysaccharide giống cellulose.'],
      solution:
        'Vỏ tôm gồm chủ yếu chitin, protein và muối khoáng (phần lớn $\\mathrm{CaCO_3}$); glucosamine chỉ có sau khi thuỷ phân chitin.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi cho vỏ tôm khô vào dung dịch HCl $10\\%$ lại có sủi bọt khí?',
      options: [
        'Muối carbonate trong vỏ tôm tác dụng với HCl giải phóng khí $\\mathrm{CO_2}$.',
        'Chitin bị HCl thuỷ phân giải phóng khí $\\mathrm{H_2}$.',
        'Protein bị HCl đốt cháy tạo khí.',
        'Không khí trong các lỗ của vỏ tôm thoát ra.',
      ],
      answer: 0,
      hints: ['Đá vôi gặp acid thì sao?'],
      solution:
        '$\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\to \\mathrm{CaCl_2} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}$ (tương tự với $\\mathrm{MgCO_3}$): khí $\\mathrm{CO_2}$ tạo bọt.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò của than hoạt tính trong thí nghiệm là gì?',
      options: [
        'Hấp phụ chất màu, làm dung dịch trở nên trong.',
        'Xúc tác cho phản ứng thuỷ phân chitin.',
        'Trung hoà HCl dư.',
        'Cung cấp carbon để tạo glucosamine.',
      ],
      answer: 0,
      hints: ['Than hoạt tính cũng có trong mặt nạ phòng độc, bình lọc nước.'],
      solution:
        'Than hoạt tính xốp, diện tích bề mặt rất lớn, hấp phụ các chất màu; lọc bỏ than thu được dung dịch trong.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước điều chế glucosamine hydrochloride từ vỏ tôm.',
      items: [
        'Thuỷ phân chitin bằng HCl đặc, đun hồi lưu',
        'Khử khoáng bằng HCl $10\\%$',
        'Kết tinh, lọc, rửa bằng cồn',
        'Khử protein bằng NaOH $4\\%$',
        'Khử màu dung dịch bằng than hoạt tính',
        'Khử màu chitin bằng $\\mathrm{H_2O_2}$, acetone',
      ],
      answer: [1, 3, 5, 0, 4, 2],
      hints: ['Phải có chitin sạch trước khi thuỷ phân; kết tinh là bước cuối.'],
      solution:
        'Khử khoáng → khử protein → khử màu chitin → thuỷ phân → khử màu dung dịch → kết tinh, lọc, rửa.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi hoá chất với vai trò của nó trong quy trình.',
      left: ['HCl $10\\%$', 'NaOH $4\\%$', 'HCl đặc', 'Than hoạt tính', 'Cồn $96^\\circ$'],
      right: [
        'Hoà tan muối khoáng',
        'Loại protein',
        'Thuỷ phân chitin',
        'Hấp phụ chất màu',
        'Rửa tinh thể sản phẩm',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Acid loãng, nguội và acid đặc, nóng làm hai việc khác nhau.'],
      solution:
        'HCl $10\\%$ khử khoáng; NaOH $4\\%$ khử protein; HCl đặc thuỷ phân chitin; than hoạt tính khử màu; cồn $96^\\circ$ rửa tinh thể.',
    },
    {
      type: 'number',
      prompt:
        'Khử khoáng một mẫu vỏ tôm chứa $25$ g $\\mathrm{CaCO_3}$. Tính thể tích $\\mathrm{CO_2}$ (đkc, $24{,}79$ L/mol) thoát ra, làm tròn đến hàng phần trăm.',
      answer: 6.2,
      tolerance: 0.005,
      unit: 'L',
      hints: ['$n_{\\mathrm{CO_2}} = n_{\\mathrm{CaCO_3}}$.'],
      solution:
        '$n = \\dfrac{25}{100} = 0{,}25$ mol; $V = 0{,}25 \\cdot 24{,}79 \\approx 6{,}20$ L.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng dung dịch HCl $10\\%$ vừa đủ để hoà tan $30$ g $\\mathrm{CaCO_3}$ trong vỏ tôm.',
      answer: 219,
      tolerance: 0.5,
      unit: 'g',
      hints: ['$n_{\\mathrm{HCl}} = 2 n_{\\mathrm{CaCO_3}}$.'],
      solution:
        '$n_{\\mathrm{HCl}} = 2 \\cdot 0{,}3 = 0{,}6$ mol; $m_{\\mathrm{HCl}} = 21{,}9$ g; $m_{\\text{dd}} = \\dfrac{21{,}9 \\cdot 100}{10} = 219$ g.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $40{,}6$ g chitin. Tính khối lượng glucosamine hydrochloride theo lí thuyết.',
      answer: 43.1,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$40{,}6$ g chitin có $\\dfrac{40{,}6}{203}$ mol mắt xích.'],
      solution: '$n = \\dfrac{40{,}6}{203} = 0{,}2$ mol; $m = 0{,}2 \\cdot 215{,}5 = 43{,}1$ g.',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân $10{,}15$ g chitin, thu được $6{,}25$ g glucosamine hydrochloride. Tính hiệu suất (theo %, làm tròn đến hàng phần mười).',
      answer: 58,
      tolerance: 0.05,
      unit: '%',
      hints: ['Lí thuyết: $\\dfrac{10{,}15}{203} = 0{,}05$ mol sản phẩm.'],
      solution:
        '$m_{\\text{lt}} = 0{,}05 \\cdot 215{,}5 = 10{,}775$ g; $H = \\dfrac{6{,}25}{10{,}775} \\cdot 100\\% \\approx 58{,}0\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao rửa tinh thể glucosamine hydrochloride bằng cồn $96^\\circ$ mà không rửa bằng nước?',
      options: [
        'Sản phẩm tan tốt trong nước nhưng ít tan trong cồn, nên rửa bằng cồn ít mất sản phẩm.',
        'Cồn phản ứng với glucosamine tạo sản phẩm tinh khiết hơn.',
        'Nước làm tinh thể đổi màu đen.',
        'Cồn rẻ hơn nước cất.',
      ],
      answer: 0,
      hints: ['Glucosamine hydrochloride là một muối, có nhiều nhóm $\\mathrm{{-}OH}$.'],
      solution:
        'Glucosamine hydrochloride tan nhiều trong nước; cồn rửa trôi acid và tạp chất bám ngoài mà hoà tan rất ít sản phẩm, lại bay hơi nhanh.',
    },
    {
      type: 'choice',
      prompt: 'Đun chitin với dung dịch NaOH đặc, nóng thu được',
      options: [
        'chitosan, do nhóm acetyl bị tách ra.',
        'glucosamine hydrochloride.',
        'glucose.',
        'calcium carbonate.',
      ],
      answer: 0,
      hints: ['Kiềm đặc thuỷ phân nhóm amide $\\mathrm{{-}NHCOCH_3}$ nhưng giữ mạch polymer.'],
      solution:
        'NaOH đặc nóng tách nhóm acetyl khỏi phần lớn mắt xích (deacetyl hoá), mạch vẫn giữ nguyên: thu được chitosan. Muốn có glucosamine hydrochloride phải thuỷ phân bằng HCl đặc.',
    },
    {
      type: 'multi',
      prompt: 'Những ứng dụng nào là của các sản phẩm từ vỏ tôm?',
      options: [
        'Glucosamine dùng trong thuốc hỗ trợ điều trị thoái hoá khớp.',
        'Chitosan làm màng bọc bảo quản trái cây.',
        'Chitosan làm chất keo tụ xử lí nước thải.',
        'Chitin dùng làm nhiên liệu cho động cơ ô tô.',
      ],
      answers: [0, 1, 2],
      hints: ['Chitosan tạo màng và kết dính được các hạt lơ lửng.'],
      solution:
        'Glucosamine dùng cho xương khớp; chitosan làm màng bảo quản, chất keo tụ xử lí nước, vật liệu y sinh. Chitin không phải nhiên liệu.',
    },
  ],
  takeaways: [
    'Vỏ tôm chứa chitin, protein và muối khoáng (chủ yếu $\\mathrm{CaCO_3}$); chitin $\\mathrm{(C_8H_{13}O_5N)_n}$ là polysaccharide của N-acetylglucosamine.',
    'Thu chitin: khử khoáng bằng HCl $10\\%$ (sủi bọt $\\mathrm{CO_2}$), khử protein bằng NaOH $4\\%$, khử màu bằng $\\mathrm{H_2O_2}$, acetone.',
    'Thuỷ phân chitin bằng HCl đặc, nóng: $\\mathrm{(C_8H_{13}O_5N)_n} + 2n\\mathrm{H_2O} + n\\mathrm{HCl} \\to n\\mathrm{C_6H_{13}O_5N{\\cdot}HCl} + n\\mathrm{CH_3COOH}$; $203$ g chitin cho tối đa $215{,}5$ g sản phẩm.',
    'Khử màu dung dịch bằng than hoạt tính, kết tinh khi lạnh, rửa tinh thể bằng cồn; làm việc với HCl đặc trong tủ hút.',
    'Glucosamine hỗ trợ xương khớp; chitosan dùng bảo quản thực phẩm, xử lí nước; tận dụng vỏ tôm giảm ô nhiễm.',
  ],
};
