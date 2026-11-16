/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguồn gốc hữu cơ của dầu mỏ và sự hình thành mỏ dầu, thành phần hoá học của dầu mỏ, phân loại dầu mỏ theo thành phần hydrocarbon, theo tỉ trọng API và theo hàm lượng lưu huỳnh.',
  intro:
    'Một giếng dầu ngoài khơi Vũng Tàu hút lên thứ chất lỏng sánh, màu nâu đen từ độ sâu vài kilômét. Thứ "vàng đen" ấy được tạo thành từ đâu, mất bao lâu, gồm những chất gì, và vì sao dầu mỏ Bạch Hổ của Việt Nam lại được bán với giá cao?',
  objectives: [
    'Trình bày được nguồn gốc hữu cơ của dầu mỏ và quá trình hình thành mỏ dầu, mỏ khí.',
    'Nêu được thành phần hoá học của dầu mỏ: các nhóm hydrocarbon chính và các hợp chất phi hydrocarbon.',
    'Phân loại được dầu mỏ theo thành phần hoá học, theo tỉ trọng API và theo hàm lượng lưu huỳnh.',
    'Giải thích được vì sao dầu mỏ là tài nguyên không tái tạo và vì sao dầu nhẹ, ít lưu huỳnh có giá trị cao.',
  ],
  sections: [
    {
      heading: 'Nguồn gốc của dầu mỏ',
      blocks: [
        {
          type: 'p',
          text: 'Theo thuyết nguồn gốc hữu cơ, được nhiều nhà khoa học thừa nhận nhất, dầu mỏ được hình thành từ xác sinh vật, chủ yếu là sinh vật phù du (tảo, động vật nhỏ) sống ở biển và hồ, qua hàng chục đến hàng trăm triệu năm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác sinh vật chìm xuống đáy biển, bị bùn, cát vùi lấp trong môi trường thiếu oxygen nên không bị phân huỷ hoàn toàn.',
            'Các lớp trầm tích mới phủ lên, vùi lớp chứa xác sinh vật xuống sâu dần. Dưới tác dụng của vi khuẩn kị khí, áp suất và nhiệt độ, chất hữu cơ biến thành kerogen.',
            'Ở độ sâu khoảng $2$ – $4$ km, nhiệt độ khoảng $60$ – $120\\ ^\\circ\\mathrm{C}$, kerogen bị phân cắt dần thành các hydrocarbon lỏng và khí: dầu mỏ được sinh ra.',
            'Vùi sâu hơn nữa, nhiệt độ cao hơn, các phân tử hydrocarbon lớn bị cracking thành phân tử nhỏ; cuối cùng chủ yếu còn methane. Vì vậy mỏ càng sâu càng chứa nhiều khí.',
          ],
        },
        {
          type: 'p',
          text: 'Dầu và khí nhẹ hơn nước nên di chuyển dần lên phía trên qua các lớp đá xốp, có nhiều lỗ rỗng (cát kết, đá vôi nứt nẻ). Khi gặp một lớp đá kín, không thấm (đá sét) uốn cong như một chiếc vòm, dầu khí bị giữ lại và tích tụ thành mỏ.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mỏ dầu',
          text: 'Mỏ dầu là nơi dầu mỏ tích tụ trong đá chứa và bị lớp đá chắn giữ lại. Trong mỏ, các chất phân lớp theo khối lượng riêng: trên cùng là khí (khí mỏ dầu, còn gọi là khí đồng hành), giữa là dầu, dưới cùng là nước mặn. Mỏ chứa chủ yếu khí, trong đó methane chiếm phần lớn, là mỏ khí thiên nhiên.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tài nguyên không tái tạo',
          text: 'Dầu mỏ cần hàng chục triệu năm và những điều kiện đặc biệt mới hình thành, trong khi con người khai thác và đốt nó trong vài trăm năm. Lượng dầu mỏ sinh thêm không đáng kể so với lượng tiêu thụ, nên dầu mỏ là nguồn tài nguyên không tái tạo.',
        },
      ],
    },
    {
      heading: 'Thành phần của dầu mỏ',
      blocks: [
        {
          type: 'p',
          text: 'Dầu mỏ là hỗn hợp rất phức tạp của hàng nghìn chất. Thành phần chính và quan trọng nhất là các hydrocarbon, chiếm khoảng $50$ – $98\\%$; phần còn lại là các hợp chất phi hydrocarbon chứa thêm S, O, N và vết kim loại.',
        },
        {
          type: 'table',
          head: ['Nhóm hydrocarbon', 'Tên thường gọi', 'Ví dụ'],
          rows: [
            [
              'Alkane',
              'Paraffin',
              'Mạch thẳng và mạch nhánh, từ $\\mathrm{CH_4}$ đến trên $\\mathrm{C_{40}}$',
            ],
            ['Cycloalkane', 'Naphthene', 'Cyclopentane, cyclohexane và các dẫn xuất alkyl'],
            ['Arene', 'Hydrocarbon thơm (aromatic)', 'Benzene, toluene, xylene, naphthalene'],
          ],
          caption: 'Các nhóm hydrocarbon chính trong dầu mỏ',
        },
        {
          type: 'p',
          text: 'Dầu thô hầu như không chứa alkene: các hydrocarbon không no chỉ xuất hiện khi chế biến dầu (cracking).',
        },
        {
          type: 'list',
          items: [
            'Hợp chất chứa lưu huỳnh: hydrogen sulfide $\\mathrm{H_2S}$, mercaptan (thiol, $\\mathrm{R{-}SH}$), sulfide, thiophene. Chúng gây mùi khó chịu, ăn mòn thiết bị và khi cháy tạo $\\mathrm{SO_2}$.',
            'Hợp chất chứa oxygen (acid naphthenic, phenol) và chứa nitrogen (pyridine, quinoline).',
            'Nhựa và asphaltene: phân tử rất lớn, chứa nhiều vòng, tập trung trong phần cặn nặng.',
            'Vết kim loại (Ni, V, Fe, Cu…), làm hỏng xúc tác khi chế biến.',
          ],
        },
        {
          type: 'table',
          head: ['Nguyên tố', 'C', 'H', 'S', 'N', 'O'],
          rows: [
            [
              'Hàm lượng (% khối lượng)',
              '$83$ – $87$',
              '$11$ – $14$',
              '$0{,}05$ – $6$',
              '$0{,}1$ – $2$',
              '$0{,}05$ – $1{,}5$',
            ],
          ],
          caption: 'Thành phần nguyên tố của dầu mỏ (giá trị thường gặp)',
        },
      ],
    },
    {
      heading: 'Phân loại dầu mỏ',
      blocks: [
        {
          type: 'p',
          text: 'Dầu mỏ ở mỗi mỏ có thành phần khác nhau. Có thể phân loại dầu mỏ theo thành phần hoá học hoặc theo tính chất vật lí.',
        },
        {
          type: 'table',
          head: ['Loại dầu', 'Thành phần chiếm ưu thế', 'Đặc điểm'],
          rows: [
            [
              'Dầu paraffinic (họ paraffin)',
              'Alkane',
              'Thường nhẹ, cho nhiều nhiên liệu diesel và sáp paraffin; dễ đông đặc khi nguội.',
            ],
            [
              'Dầu naphthenic (họ naphthene)',
              'Cycloalkane',
              'Cho xăng có chỉ số octane khá, dầu nhờn tốt.',
            ],
            ['Dầu aromatic (họ thơm)', 'Arene', 'Thường nặng, nhớt, sẫm màu, nhiều nhựa.'],
            [
              'Dầu hỗn hợp (trung gian)',
              'Hai hoặc ba nhóm với tỉ lệ gần nhau',
              'Phần lớn dầu mỏ trên thế giới thuộc loại này.',
            ],
          ],
          caption: 'Phân loại theo thành phần hydrocarbon',
        },
        {
          type: 'p',
          text: 'Theo tính chất vật lí, dầu mỏ được phân loại theo tỉ trọng API (American Petroleum Institute):',
        },
        { type: 'tex', tex: '\\text{API} = \\dfrac{141{,}5}{d} - 131{,}5' },
        {
          type: 'p',
          text: 'trong đó $d$ là tỉ trọng của dầu so với nước, cùng đo ở $15{,}6\\ ^\\circ\\mathrm{C}$ ($60\\ ^\\circ\\mathrm{F}$). Dầu càng nhẹ thì $d$ càng nhỏ và API càng lớn. Nước có $d = 1$ nên có API bằng $10$: dầu có API nhỏ hơn $10$ nặng hơn nước.',
        },
        {
          type: 'table',
          head: ['Loại dầu', 'Tỉ trọng API', 'Đặc điểm'],
          rows: [
            [
              'Dầu nhẹ',
              'lớn hơn $31{,}1$',
              'Nhiều paraffin, linh động, màu sáng hơn; cho nhiều xăng, dầu diesel',
            ],
            ['Dầu trung bình', 'từ $22{,}3$ đến $31{,}1$', 'Trung gian'],
            [
              'Dầu nặng',
              'từ $10$ đến $22{,}3$',
              'Nhiều arene, nhựa, kim loại nặng; độ nhớt cao, màu sẫm',
            ],
            ['Dầu siêu nặng', 'nhỏ hơn $10$', 'Nặng hơn nước, rất nhớt'],
          ],
          caption: 'Phân loại theo tỉ trọng API',
        },
        {
          type: 'p',
          text: 'Theo hàm lượng lưu huỳnh, dầu có ít lưu huỳnh (thường không quá $0{,}5\\%$) gọi là dầu ngọt; dầu có nhiều lưu huỳnh, nhiều $\\mathrm{H_2S}$ gọi là dầu chua. Dầu chua phải xử lí loại lưu huỳnh tốn kém hơn.',
        },
        { type: 'widget', name: 'phan-loai' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dầu mỏ Bạch Hổ',
          text: 'Dầu Bạch Hổ có tỉ trọng API khoảng $36{,}6$ (dầu nhẹ), hàm lượng lưu huỳnh chỉ khoảng $0{,}03$ – $0{,}05\\%$ (dầu rất ngọt) và nhiều paraffin (khoảng $29\\%$). Dầu nhẹ, ngọt cho nhiều sản phẩm có giá trị, ít phải xử lí lưu huỳnh nên có giá trị kinh tế cao. Vì nhiều paraffin, dầu dễ đông đặc khi nguội, phải giữ ấm khi vận chuyển bằng đường ống.',
        },
      ],
    },
    {
      heading: 'Dự án: Bộ sưu tập về sự hình thành dầu mỏ',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: làm một mô hình hoặc áp phích giải thích dầu mỏ hình thành thế nào và một mỏ dầu có cấu tạo ra sao, rồi so sánh một vài loại dầu thô.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: lọ thuỷ tinh trong, cát, sỏi, đất sét hoặc nến, dầu ăn, nước pha màu; giấy khổ lớn, bút màu.',
            'Làm mô hình bẫy dầu: rải lớp cát (đá chứa), phủ lớp đất sét uốn vòm (đá chắn), rót nước rồi dầu ăn từ dưới lên qua ống hút; quan sát dầu nổi lên và đọng dưới vòm. Làm lại mà không có lớp đất sét và so sánh.',
            'Vẽ sơ đồ các giai đoạn: lắng đọng, tạo kerogen, sinh dầu, sinh khí, di chuyển và tích tụ, ghi nhiệt độ, độ sâu gần đúng.',
            'Tra cứu tỉ trọng API và hàm lượng lưu huỳnh của ba loại dầu thô (trong đó có một loại của Việt Nam), tính API nếu chỉ biết tỉ trọng, rồi phân loại.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: ảnh mô hình và nhận xét về vai trò của lớp đá chắn; sơ đồ hình thành dầu mỏ; bảng phân loại ba loại dầu thô kèm lí giải loại nào có giá trị cao hơn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hoạt cảnh hình thành mỏ dầu',
    instruction:
      'Kéo thanh thời gian hoặc bấm "Chạy thời gian" để theo dõi lớp đá mẹ bị vùi sâu dần. Dầu bắt đầu sinh ra ở nhiệt độ nào? Sau $150$ triệu năm mỏ chứa chủ yếu dầu hay khí? Bỏ lớp đá chắn rồi quan sát điều gì xảy ra với dầu.',
  },
  examples: [
    {
      problem:
        'Một loại dầu thô có tỉ trọng $d = 0{,}82$ và hàm lượng lưu huỳnh $0{,}1\\%$. Tính tỉ trọng API và phân loại loại dầu này.',
      steps: [
        '$\\text{API} = \\dfrac{141{,}5}{0{,}82} - 131{,}5 \\approx 172{,}56 - 131{,}5 = 41{,}06$.',
        'API lớn hơn $31{,}1$ nên đây là dầu nhẹ.',
        'Hàm lượng lưu huỳnh $0{,}1\\%$, không quá $0{,}5\\%$, nên đây là dầu ngọt.',
      ],
      answer: 'API $\\approx 41{,}1$: dầu nhẹ, ngọt.',
    },
    {
      problem:
        'Đốt cháy hoàn toàn $1$ tấn dầu FO chứa $3\\%$ lưu huỳnh về khối lượng. Tính khối lượng $\\mathrm{SO_2}$ sinh ra, coi toàn bộ lưu huỳnh chuyển thành $\\mathrm{SO_2}$.',
      steps: [
        'Khối lượng lưu huỳnh: $1\\,000 \\cdot 3\\% = 30$ kg.',
        '$\\mathrm{S + O_2 \\longrightarrow SO_2}$: cứ $32$ kg S tạo $64$ kg $\\mathrm{SO_2}$.',
        '$m_{\\mathrm{SO_2}} = 30 \\cdot \\dfrac{64}{32} = 60$ kg.',
      ],
      answer:
        'Sinh ra $60$ kg $\\mathrm{SO_2}$. Vì thế dầu chua phải được loại bớt lưu huỳnh trước khi dùng làm nhiên liệu.',
    },
    {
      problem: 'Dầu Bạch Hổ có tỉ trọng API $36{,}6$. Tính tỉ trọng $d$ của dầu.',
      steps: [
        'Từ công thức: $\\dfrac{141{,}5}{d} = \\text{API} + 131{,}5 = 36{,}6 + 131{,}5 = 168{,}1$.',
        '$d = \\dfrac{141{,}5}{168{,}1} \\approx 0{,}842$.',
      ],
      answer: '$d \\approx 0{,}842$: một lít dầu nặng khoảng $0{,}84$ kg.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Theo thuyết nguồn gốc hữu cơ, dầu mỏ được hình thành chủ yếu từ',
      options: [
        'xác sinh vật phù du bị vùi lấp trong trầm tích, thiếu oxygen, qua hàng triệu năm.',
        'than đá bị nung nóng trong lòng đất.',
        'carbon dioxide trong không khí hoà tan vào nước biển.',
        'gỗ của các khu rừng bị cháy.',
      ],
      answer: 0,
      hints: ['Nguồn nguyên liệu là chất hữu cơ từ sinh vật sống ở biển, hồ.'],
      solution:
        'Xác sinh vật phù du (tảo, động vật nhỏ) bị bùn, cát vùi lấp trong môi trường thiếu oxygen, dưới tác dụng của vi khuẩn, nhiệt độ và áp suất qua hàng triệu năm biến thành kerogen rồi dầu mỏ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn hình thành mỏ dầu theo đúng thứ tự.',
      items: [
        'Kerogen bị phân cắt thành hydrocarbon lỏng ở khoảng $60$ – $120\\ ^\\circ\\mathrm{C}$.',
        'Xác sinh vật lắng đọng dưới đáy biển cùng bùn, cát.',
        'Dầu di chuyển lên qua đá xốp và bị lớp đá chắn giữ lại.',
        'Chất hữu cơ bị vùi sâu, biến thành kerogen.',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Phải có kerogen trước khi có dầu, và phải có dầu trước khi dầu di chuyển.'],
      solution: 'Lắng đọng → tạo kerogen → sinh dầu → di chuyển và tích tụ dưới lớp đá chắn.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao các mỏ nằm càng sâu trong lòng đất thường càng chứa nhiều khí, nhiều methane?',
      options: [
        'Vì càng sâu nhiệt độ càng cao, các hydrocarbon lớn bị cracking thành phân tử nhỏ.',
        'Vì khí từ khí quyển thấm xuống sâu.',
        'Vì ở sâu có nhiều oxygen oxi hoá dầu thành khí.',
        'Vì nước ngầm hoà tan hết dầu.',
      ],
      answer: 0,
      hints: ['Nhiệt độ trong lòng đất tăng theo độ sâu.'],
      solution:
        'Nhiệt độ, áp suất tăng theo độ sâu; trên khoảng $120\\ ^\\circ\\mathrm{C}$ các phân tử hydrocarbon lớn bị cracking thành phân tử nhỏ, cuối cùng chủ yếu là methane.',
    },
    {
      type: 'text',
      prompt:
        'Lớp đá kín, không thấm, uốn vòm phía trên đá chứa, giữ cho dầu khí không thoát lên được gọi là lớp đá gì?',
      accept: ['đá chắn', 'lớp đá chắn', 'tầng chắn', 'tầng đá chắn', 'đá sét', 'lớp chắn'],
      hints: ['Tên lớp đá nói lên công dụng của nó: ngăn dầu khí lại.'],
      solution: 'Đó là lớp đá chắn (thường là đá sét).',
    },
    {
      type: 'multi',
      prompt: 'Những nhóm hydrocarbon nào là thành phần chính của dầu mỏ?',
      options: [
        'Alkane (paraffin)',
        'Cycloalkane (naphthene)',
        'Arene (hydrocarbon thơm)',
        'Alkene',
        'Alkyne',
      ],
      answers: [0, 1, 2],
      hints: ['Hydrocarbon không no hầu như chỉ xuất hiện khi chế biến dầu.'],
      solution:
        'Dầu mỏ gồm chủ yếu alkane, cycloalkane và arene. Dầu thô hầu như không có alkene, alkyne; alkene sinh ra khi cracking.',
    },
    {
      type: 'number',
      prompt:
        'Một loại dầu thô có tỉ trọng $d = 0{,}85$. Tính tỉ trọng API của dầu, làm tròn đến hàng phần mười.',
      answer: 35,
      tolerance: 0.05,
      hints: ['$\\text{API} = \\dfrac{141{,}5}{d} - 131{,}5$.'],
      solution:
        '$\\text{API} = \\dfrac{141{,}5}{0{,}85} - 131{,}5 \\approx 166{,}47 - 131{,}5 \\approx 35{,}0$: đây là dầu nhẹ.',
    },
    {
      type: 'choice',
      prompt: 'Một loại dầu có tỉ trọng API là $18$ và hàm lượng lưu huỳnh $2{,}8\\%$. Đó là',
      options: ['dầu nặng, chua.', 'dầu nhẹ, ngọt.', 'dầu trung bình, ngọt.', 'dầu nặng, ngọt.'],
      answer: 0,
      hints: ['Dầu nặng có API từ $10$ đến $22{,}3$; dầu chua có nhiều hơn $0{,}5\\%$ lưu huỳnh.'],
      solution:
        'API $18$ nằm trong khoảng $10$ – $22{,}3$: dầu nặng. Lưu huỳnh $2{,}8\\% > 0{,}5\\%$: dầu chua.',
    },
    {
      type: 'number',
      prompt:
        'Đốt cháy hoàn toàn $500$ kg dầu chứa $2\\%$ lưu huỳnh về khối lượng. Tính khối lượng $\\mathrm{SO_2}$ tạo thành (kg), coi toàn bộ lưu huỳnh chuyển thành $\\mathrm{SO_2}$.',
      answer: 20,
      unit: 'kg',
      hints: ['Tính khối lượng lưu huỳnh trước.', 'Cứ $32$ kg S tạo $64$ kg $\\mathrm{SO_2}$.'],
      solution:
        '$m_{\\mathrm{S}} = 500 \\cdot 2\\% = 10$ kg; $m_{\\mathrm{SO_2}} = 10 \\cdot \\dfrac{64}{32} = 20$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Một loại dầu có tỉ trọng API bằng $20$. Tính tỉ trọng $d$ của dầu, làm tròn đến hàng phần nghìn.',
      answer: 0.934,
      tolerance: 0.0006,
      hints: ['Biến đổi công thức: $d = \\dfrac{141{,}5}{\\text{API} + 131{,}5}$.'],
      solution:
        '$d = \\dfrac{141{,}5}{20 + 131{,}5} = \\dfrac{141{,}5}{151{,}5} \\approx 0{,}934$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao dầu mỏ Bạch Hổ có giá trị kinh tế cao?',
      options: [
        'Vì là dầu nhẹ, rất ít lưu huỳnh, cho nhiều sản phẩm nhẹ và ít phải xử lí lưu huỳnh.',
        'Vì là dầu nặng, nhiều nhựa đường.',
        'Vì chứa nhiều hydrogen sulfide.',
        'Vì chứa nhiều kim loại nặng như nickel, vanadium.',
      ],
      answer: 0,
      hints: ['Nhớ lại tỉ trọng API và hàm lượng lưu huỳnh của dầu Bạch Hổ.'],
      solution:
        'Dầu Bạch Hổ có API khoảng $36{,}6$ (dầu nhẹ) và chỉ $0{,}03$ – $0{,}05\\%$ lưu huỳnh (dầu ngọt), nên cho nhiều xăng, dầu diesel và chi phí xử lí thấp.',
    },
  ],
  takeaways: [
    'Dầu mỏ hình thành từ xác sinh vật phù du bị vùi lấp, qua giai đoạn kerogen rồi sinh dầu ở khoảng $60$ – $120\\ ^\\circ\\mathrm{C}$; sâu và nóng hơn thì sinh khí.',
    'Mỏ dầu cần đá chứa xốp và lớp đá chắn kín; trong mỏ có khí ở trên, dầu ở giữa, nước ở dưới.',
    'Dầu mỏ chứa $50$ – $98\\%$ hydrocarbon (alkane, cycloalkane, arene), còn lại là hợp chất của S, O, N và vết kim loại.',
    'Phân loại dầu: theo thành phần (paraffinic, naphthenic, aromatic, hỗn hợp), theo API ($\\text{API} = \\frac{141{,}5}{d} - 131{,}5$; nhẹ khi lớn hơn $31{,}1$) và theo lưu huỳnh (ngọt hay chua).',
    'Dầu mỏ là tài nguyên không tái tạo; dầu nhẹ, ngọt như dầu Bạch Hổ có giá trị cao.',
  ],
};
