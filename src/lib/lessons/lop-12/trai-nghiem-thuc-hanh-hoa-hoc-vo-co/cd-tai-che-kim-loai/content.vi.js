/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguồn kim loại phế thải; quy trình chung tái chế kim loại từ thu gom, phân loại đến nấu chảy, tinh chế và đúc; tái chế nhôm, sắt thép, đồng; lợi ích tái chế với tài nguyên, năng lượng, môi trường và tác hại của tái chế thủ công.',
  intro:
    'Trữ lượng các mỏ quặng kim loại ngày càng cạn kiệt, trong khi nhu cầu dùng kim loại ngày càng tăng và phế thải kim loại ngày càng nhiều. Một vỏ lon nhôm sau vài tuần sử dụng có thể trở lại thành lon mới, với năng lượng chỉ bằng khoảng một phần hai mươi so với làm nhôm từ quặng.',
  objectives: [
    'Nêu được các nguồn kim loại phế thải trong sinh hoạt và sản xuất.',
    'Trình bày được quy trình chung tái chế kim loại và cách tái chế nhôm, sắt thép, đồng.',
    'So sánh được nhôm thứ cấp (tái chế) với nhôm sơ cấp (từ quặng bauxite) về tài nguyên, năng lượng và môi trường.',
    'Nêu được ý nghĩa của tái chế kim loại và tác hại của tái chế thủ công ở một số làng nghề.',
    'Tổ chức được hoạt động thu gom, phân loại phế liệu kim loại.',
  ],
  sections: [
    {
      heading: 'Nguồn kim loại phế thải',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại và hợp kim có mặt ở khắp nơi trong đời sống. Khi đồ vật hỏng hoặc hết hạn sử dụng, phần kim loại trở thành phế liệu. Khác với nhiều vật liệu khác, kim loại có thể nấu chảy và tái chế nhiều lần mà gần như không giảm chất lượng.',
        },
        {
          type: 'table',
          head: ['Nguồn', 'Ví dụ phế liệu', 'Kim loại chính'],
          rows: [
            ['Sinh hoạt', 'Vỏ lon, hộp sữa, nồi chảo, đồ gia dụng hỏng', 'Nhôm, sắt thép'],
            ['Xây dựng', 'Thép cốt bê tông, khung cửa, ống nước', 'Sắt thép, nhôm, đồng'],
            ['Giao thông', 'Ô tô, xe máy, tàu thuyền cũ', 'Sắt thép, nhôm, đồng, chì (ắc quy)'],
            [
              'Điện, điện tử',
              'Dây cáp, động cơ, máy tính, điện thoại cũ',
              'Đồng, nhôm, một ít vàng, bạc',
            ],
            ['Sản xuất công nghiệp', 'Phoi tiện, mẩu cắt thừa, sản phẩm lỗi', 'Đủ loại'],
          ],
          caption: 'Một số nguồn kim loại phế thải',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao cần tái chế',
          text: 'Quặng là tài nguyên không tái tạo, ngày càng khan hiếm và đắt. Tái chế giúp dùng lại kim loại đã khai thác, giảm khai thác mỏ, giảm năng lượng và chất thải: đây là giải pháp phát triển bền vững, có lợi cho cả thế hệ hiện tại và tương lai.',
        },
      ],
    },
    {
      heading: 'Quy trình chung tái chế kim loại',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Thu gom phế liệu từ hộ gia đình, cơ sở thu mua, nhà máy, bãi phá dỡ.',
            'Phân loại theo loại kim loại: dùng nam châm tách sắt thép (bị hút); dùng dòng điện xoáy tách kim loại màu như nhôm, đồng ra khỏi băng chuyền; phân loại thủ công theo màu sắc, khối lượng riêng.',
            'Xử lí sơ bộ: làm sạch dầu mỡ, sơn, nhựa; cắt, ép, băm nhỏ cho dễ vận chuyển và nấu chảy.',
            'Nấu chảy trong lò ở nhiệt độ cao hơn nhiệt độ nóng chảy của kim loại.',
            'Tinh chế: loại bỏ tạp chất (vớt xỉ, thổi khí, điện phân), điều chỉnh thành phần hợp kim.',
            'Đúc thành thỏi, phôi hoặc sản phẩm, đưa trở lại sản xuất.',
          ],
        },
        {
          type: 'p',
          text: 'Phân loại đúng là khâu quan trọng: lẫn kim loại khác làm hợp kim sau tái chế sai thành phần, kém chất lượng. Hãy thử phân loại một đống phế liệu như ở cơ sở thu mua.',
        },
        { type: 'widget', name: 'phan-loai' },
      ],
    },
    {
      heading: 'Tái chế một số kim loại phổ biến',
      blocks: [
        {
          type: 'p',
          text: 'Nhôm. Vỏ lon, khung cửa, dây cáp nhôm được băm nhỏ, đốt bỏ lớp sơn, rồi nấu chảy ở khoảng $700$ – $750$ °C (nhôm nóng chảy ở $660$ °C). Vớt xỉ, chỉnh thành phần rồi đúc thành thỏi nhôm thứ cấp. Ngược lại, nhôm sơ cấp phải đi qua khai thác bauxite, tinh chế $\\mathrm{Al_2O_3}$ và điện phân nóng chảy:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{Al_2O_3} \\xrightarrow[\\text{cryolite}]{\\text{đpnc}} 4\\mathrm{Al} + 3\\mathrm{O_2}',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Nhôm sơ cấp (từ bauxite)', 'Nhôm thứ cấp (từ phế liệu)'],
          rows: [
            [
              'Nguyên liệu',
              'Khai thác quặng, phá rừng, bóc đất mặt',
              'Phế liệu sẵn có, tiết kiệm tài nguyên',
            ],
            [
              'Năng lượng',
              'Rất lớn, chủ yếu cho điện phân nóng chảy',
              'Chỉ khoảng $5\\%$ so với nhôm sơ cấp',
            ],
            ['Chi phí', 'Cao', 'Thấp hơn đáng kể'],
            [
              'Môi trường',
              'Bùn đỏ, nhiều nước thải, khói bụi, $\\mathrm{CO_2}$',
              'Ít chất thải và khí thải hơn nhiều',
            ],
          ],
          caption: 'So sánh nhôm sơ cấp và nhôm thứ cấp',
        },
        {
          type: 'p',
          text: 'Sắt thép. Thép phế liệu được tách bằng nam châm, cắt, ép thành kiện rồi nấu chảy trong lò điện hồ quang (khoảng $1\\,600$ °C). Thổi oxygen để đốt bớt carbon và tạp chất, thêm vôi tạo xỉ, chỉnh thành phần rồi đúc thành phôi thép. Tái chế thép tiết kiệm khoảng $60$ – $75\\%$ năng lượng so với luyện từ quặng sắt.',
        },
        {
          type: 'p',
          text: 'Đồng. Dây cáp được bóc vỏ nhựa, phế liệu đồng được nấu chảy và đúc thành đồng thô. Muốn có đồng tinh khiết dùng làm dây dẫn điện, người ta tinh luyện bằng điện phân dung dịch $\\mathrm{CuSO_4}$ với anode là đồng thô, cathode là lá đồng tinh khiết:',
        },
        {
          type: 'tex',
          tex: '\\text{Anode: } \\mathrm{Cu} \\to \\mathrm{Cu^{2+}} + 2e \\qquad \\text{Cathode: } \\mathrm{Cu^{2+}} + 2e \\to \\mathrm{Cu}',
        },
        {
          type: 'p',
          text: 'Tạp chất kém hoạt động hơn đồng (vàng, bạc) rơi xuống đáy thành bùn anode và cũng được thu hồi. Tái chế đồng tiết kiệm khoảng $85\\%$ năng lượng so với luyện từ quặng.',
        },
      ],
    },
    {
      heading: 'Lợi ích và tác động môi trường',
      blocks: [
        {
          type: 'list',
          items: [
            'Bảo vệ tài nguyên: giảm khai thác quặng không tái tạo, kéo dài tuổi thọ các mỏ.',
            'Tiết kiệm năng lượng: bỏ qua khai thác, tuyển quặng, khử oxide kim loại; với nhôm là bỏ qua điện phân nóng chảy.',
            'Giảm ô nhiễm: ít khí thải ($\\mathrm{CO_2}$, $\\mathrm{SO_2}$), bụi, bùn thải; giảm lượng rác chôn lấp.',
            'Kinh tế, xã hội: chi phí sản xuất thấp hơn, tạo việc làm cho người thu gom, phân loại.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tái chế thủ công ở làng nghề',
          text: 'Nhiều làng nghề tái chế kim loại nấu chảy phế liệu trong lò thủ công, không có hệ thống xử lí khí thải, nước thải. Khói bụi chứa $\\mathrm{SO_2}$, oxide kim loại gây ô nhiễm không khí; nước tẩy rửa có acid và ion kim loại nặng chảy thẳng ra sông, ngấm vào đất; người dân dễ mắc bệnh hô hấp, ngoài da. Tái chế chỉ thực sự có lợi khi được làm đúng quy trình, có xử lí chất thải.',
        },
        {
          type: 'p',
          text: 'Mô hình bên dưới cho thấy vòng đời của lon nhôm: thay đổi tỉ lệ lon được tái chế để thấy phần nhôm phải làm mới từ quặng và năng lượng tiêu tốn thay đổi thế nào.',
        },
      ],
    },
    {
      heading: 'Hoạt động trải nghiệm: thu gom và phân loại phế liệu kim loại',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: khảo sát phế liệu kim loại ở gia đình hoặc trường học, phân loại, ước tính lợi ích của việc tái chế và tuyên truyền thu gom. Dụng cụ: nam châm, cân, găng tay bảo hộ, kìm, bao đựng có dán nhãn, sổ ghi chép.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chia nhóm, mỗi nhóm thu gom phế liệu kim loại sạch, không sắc nhọn (vỏ lon, hộp sữa, dây điện hỏng, đồ gia dụng nhỏ) trong một tuần. Không thu gom pin, ắc quy, bình gas.',
            'Phân loại: dùng nam châm tách sắt thép; phần còn lại tách nhôm (trắng bạc, nhẹ) và đồng (màu đỏ, nặng) bằng quan sát; vật có nhiều vật liệu thì tháo rời nếu an toàn.',
            'Cân từng loại, ghi vào bảng; tính khối lượng nhôm và năng lượng tiết kiệm được nếu toàn bộ được tái chế.',
            'Tìm hiểu một cơ sở thu mua phế liệu gần nhà: giá thu mua từng loại, nơi phế liệu được chuyển đến.',
            'Mang phế liệu đến cơ sở thu mua hoặc điểm thu gom; dùng tiền thu được cho hoạt động chung của lớp.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo gồm: bảng khối lượng từng loại phế liệu, phép tính năng lượng tiết kiệm, sơ đồ quy trình tái chế một kim loại em chọn, đề xuất cách thu gom ở trường và một áp phích tuyên truyền.',
        },
      ],
    },
  ],
  explore: {
    title: 'Vòng đời lon nhôm',
    instruction:
      'Kéo thanh "Tỉ lệ lon cũ được tái chế" từ $0\\%$ lên $100\\%$: đường cam (từ quặng) mảnh dần, vòng xanh (tái chế) dày dần. Bấm từng công đoạn để xem chuyện gì xảy ra ở đó. Công đoạn nào làm nhôm từ quặng tốn năng lượng nhất?',
  },
  examples: [
    {
      problem:
        'Một lớp thu gom được $600$ vỏ lon nhôm, mỗi vỏ nặng $15$ g. Biết sản xuất $1$ kg nhôm từ quặng tốn khoảng $45$ kWh, còn tái chế $1$ kg nhôm phế liệu chỉ cần khoảng $5\\%$ năng lượng đó. Nếu toàn bộ số lon được tái chế thay cho nhôm từ quặng thì tiết kiệm được bao nhiêu kWh?',
      steps: [
        'Khối lượng nhôm: $600 \\cdot 15 = 9\\,000$ g $= 9$ kg.',
        'Làm từ quặng: $9 \\cdot 45 = 405$ kWh.',
        'Tái chế: $5\\% \\cdot 405 = 20{,}25$ kWh.',
        'Tiết kiệm: $405 - 20{,}25 = 384{,}75$ kWh.',
      ],
      answer: 'Tiết kiệm khoảng $384{,}75$ kWh, tức $95\\%$ năng lượng.',
    },
    {
      problem:
        'Tính khối lượng $\\mathrm{Al_2O_3}$ cần điện phân để thu được $1$ tấn nhôm (hiệu suất $100\\%$). Nếu quặng bauxite chứa $50\\%$ $\\mathrm{Al_2O_3}$ về khối lượng thì cần bao nhiêu tấn quặng?',
      steps: [
        '$2\\mathrm{Al_2O_3} \\to 4\\mathrm{Al} + 3\\mathrm{O_2}$: cứ $2 \\cdot 102 = 204$ tấn $\\mathrm{Al_2O_3}$ cho $4 \\cdot 27 = 108$ tấn Al.',
        '$m_{\\mathrm{Al_2O_3}} = \\dfrac{204}{108} \\cdot 1 \\approx 1{,}889$ tấn.',
        '$m_{\\text{quặng}} = \\dfrac{1{,}889}{0{,}5} \\approx 3{,}78$ tấn.',
      ],
      answer:
        'Cần khoảng $1{,}89$ tấn $\\mathrm{Al_2O_3}$, tức khoảng $3{,}78$ tấn bauxite cho mỗi tấn nhôm. Mỗi tấn nhôm tái chế giúp không phải khai thác lượng quặng này.',
    },
    {
      problem:
        'Một bao phế liệu gồm: vỏ lon nước ngọt, đinh sắt, mẩu dây điện lõi đỏ, hộp sữa đặc. Trình bày cách phân loại để đưa đi tái chế.',
      steps: [
        'Rê nam châm qua phế liệu: đinh sắt và hộp sữa đặc (thép mạ thiếc) bị hút, tách thành nhóm sắt thép.',
        'Phần không bị hút gồm vỏ lon và dây điện. Bóc vỏ nhựa của dây điện, lấy lõi.',
        'Lõi màu đỏ, nặng là đồng; vỏ lon màu trắng bạc, rất nhẹ là nhôm.',
      ],
      answer: 'Ba nhóm: sắt thép (đinh, hộp sữa), nhôm (vỏ lon), đồng (lõi dây điện).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Ở cơ sở tái chế, cách nhanh nhất để tách sắt thép ra khỏi hỗn hợp phế liệu là',
      options: [
        'dùng nam châm hút.',
        'ngâm vào nước để sắt thép nổi lên.',
        'nung nóng để sắt thép chảy trước.',
        'ngâm vào dung dịch HCl.',
      ],
      answer: 0,
      hints: ['Trong ba kim loại sắt, nhôm, đồng, chỉ có một kim loại bị nam châm hút.'],
      solution:
        'Sắt và thép bị nam châm hút, còn nhôm, đồng thì không, nên dùng nam châm (nam châm điện trên cần cẩu, băng chuyền) để tách sắt thép.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của quy trình chung tái chế kim loại theo đúng thứ tự.',
      items: [
        'Nấu chảy trong lò',
        'Thu gom phế liệu',
        'Đúc thành thỏi, phôi',
        'Phân loại theo loại kim loại',
        'Tinh chế, loại tạp chất',
        'Làm sạch, cắt, ép, băm nhỏ',
      ],
      answer: [1, 3, 5, 0, 4, 2],
      hints: ['Phải phân loại và làm sạch trước khi cho vào lò.'],
      solution:
        'Thu gom → phân loại → làm sạch, cắt, ép, băm nhỏ → nấu chảy → tinh chế → đúc thành thỏi, phôi.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi vỏ lon nhôm nặng $15$ g. Sản xuất $1$ kg nhôm từ quặng tốn khoảng $45$ kWh; tái chế $1$ kg nhôm chỉ tốn $5\\%$ số đó. Tái chế $1\\,000$ vỏ lon thay cho làm nhôm từ quặng tiết kiệm được bao nhiêu kWh?',
      answer: 641.25,
      tolerance: 0.5,
      unit: 'kWh',
      hints: [
        'Đổi khối lượng nhôm ra kg trước.',
        'Mỗi kg tái chế tiết kiệm $45 - 2{,}25 = 42{,}75$ kWh.',
      ],
      solution:
        '$m = 1\\,000 \\cdot 15 = 15\\,000$ g $= 15$ kg. Tiết kiệm $15 \\cdot (45 - 0{,}05 \\cdot 45) = 15 \\cdot 42{,}75 = 641{,}25$ kWh.',
    },
    {
      type: 'number',
      prompt:
        'Sản xuất $1$ tấn nhôm sơ cấp tốn khoảng $45\\,000$ kWh, $1$ tấn nhôm thứ cấp tốn khoảng $2\\,250$ kWh. Tái chế giúp tiết kiệm bao nhiêu phần trăm năng lượng?',
      answer: 95,
      tolerance: 0.1,
      unit: '%',
      hints: ['Tính phần năng lượng tiết kiệm so với năng lượng sản xuất nhôm sơ cấp.'],
      solution:
        '$\\dfrac{45\\,000 - 2\\,250}{45\\,000} \\cdot 100\\% = \\dfrac{42\\,750}{45\\,000} \\cdot 100\\% = 95\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Tính khối lượng $\\mathrm{Al_2O_3}$ (tấn) cần điện phân nóng chảy để thu được $2{,}7$ tấn nhôm, coi hiệu suất là $100\\%$.',
      answer: 5.1,
      tolerance: 0.01,
      unit: 'tấn',
      hints: [
        '$2\\mathrm{Al_2O_3} \\to 4\\mathrm{Al} + 3\\mathrm{O_2}$: $n_{\\mathrm{Al_2O_3}} = \\dfrac{1}{2} n_{\\mathrm{Al}}$.',
      ],
      solution:
        '$n_{\\mathrm{Al}} = \\dfrac{2{,}7 \\cdot 10^6}{27} = 10^5$ mol; $n_{\\mathrm{Al_2O_3}} = 5 \\cdot 10^4$ mol; $m = 5 \\cdot 10^4 \\cdot 102 = 5{,}1 \\cdot 10^6$ g $= 5{,}1$ tấn.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao tái chế nhôm tiết kiệm năng lượng hơn rất nhiều so với sản xuất nhôm từ quặng?',
      options: [
        'Tái chế không cần điện phân nóng chảy $\\mathrm{Al_2O_3}$, chỉ cần nấu chảy nhôm ở khoảng $700$ °C.',
        'Nhôm phế liệu có nhiệt độ nóng chảy thấp hơn nhôm mới.',
        'Tái chế nhôm dùng năng lượng mặt trời.',
        'Nhôm phế liệu đã chứa sẵn cryolite.',
      ],
      answer: 0,
      hints: ['Kim loại trong phế liệu đã ở dạng đơn chất, không còn ở dạng oxide.'],
      solution:
        'Nhôm trong quặng ở dạng $\\mathrm{Al_2O_3}$, phải khử bằng điện phân nóng chảy, rất tốn điện. Nhôm phế liệu đã là kim loại, chỉ cần nấu chảy (nhôm nóng chảy ở $660$ °C) rồi đúc lại.',
    },
    {
      type: 'choice',
      prompt:
        'Khi tinh luyện đồng bằng phương pháp điện phân dung dịch $\\mathrm{CuSO_4}$, đồng thô được dùng làm',
      options: ['anode.', 'cathode.', 'chất điện li.', 'màng ngăn.'],
      answer: 0,
      hints: [
        'Đồng thô phải tan dần ra; ở điện cực nào xảy ra quá trình oxi hoá $\\mathrm{Cu} \\to \\mathrm{Cu^{2+}} + 2e$?',
      ],
      solution:
        'Đồng thô làm anode, bị oxi hoá tan thành $\\mathrm{Cu^{2+}}$; ion này bị khử bám lên cathode là lá đồng tinh khiết. Tạp chất như vàng, bạc rơi xuống thành bùn anode.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi kim loại với cách tái chế phù hợp.',
      left: ['Sắt thép', 'Nhôm', 'Đồng làm dây dẫn điện'],
      right: [
        'Nấu chảy trong lò điện hồ quang khoảng $1\\,600$ °C, thổi oxygen giảm carbon',
        'Nấu chảy ở khoảng $700$ – $750$ °C, vớt xỉ, đúc thỏi',
        'Nấu thành đồng thô rồi tinh luyện bằng điện phân',
        'Điện phân nóng chảy oxide trong cryolite',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Nhiệt độ nóng chảy: sắt khoảng $1\\,538$ °C, nhôm $660$ °C. Đồng dẫn điện cần độ tinh khiết rất cao.',
      ],
      solution:
        'Sắt thép: lò điện hồ quang khoảng $1\\,600$ °C. Nhôm: nấu chảy khoảng $700$ – $750$ °C rồi đúc thỏi. Đồng làm dây dẫn: nấu thành đồng thô rồi điện phân tinh luyện. Điện phân nóng chảy $\\mathrm{Al_2O_3}$ là cách làm nhôm từ quặng, không phải tái chế.',
    },
    {
      type: 'multi',
      prompt: 'Những ý nào là lợi ích của tái chế kim loại?',
      options: [
        'Giảm khai thác quặng, bảo vệ tài nguyên không tái tạo.',
        'Tiết kiệm năng lượng so với luyện kim loại từ quặng.',
        'Giảm lượng rác thải phải chôn lấp.',
        'Làm kim loại sau mỗi lần tái chế bền hơn.',
        'Không cần phân loại phế liệu.',
      ],
      answers: [0, 1, 2],
      hints: ['Tái chế giữ được chất lượng kim loại, nhưng không làm nó tốt hơn.'],
      solution:
        'Tái chế giúp bảo vệ tài nguyên, tiết kiệm năng lượng, giảm rác thải. Kim loại không bền hơn sau tái chế, và phân loại là khâu bắt buộc để hợp kim đúng thành phần.',
    },
    {
      type: 'multi',
      prompt: 'Tái chế kim loại thủ công ở một số làng nghề có thể gây ra những tác hại nào?',
      options: [
        'Ô nhiễm không khí do khói bụi, khí $\\mathrm{SO_2}$ từ lò nấu.',
        'Ô nhiễm nguồn nước do nước thải chứa acid, kim loại nặng.',
        'Ô nhiễm đất do chất thải rắn, xỉ đổ bừa bãi.',
        'Làm tăng trữ lượng quặng trong mỏ.',
      ],
      answers: [0, 1, 2],
      hints: ['Nghĩ đến không khí, nước và đất quanh làng nghề.'],
      solution:
        'Lò thủ công không xử lí khí thải, nước thải nên gây ô nhiễm không khí, nước, đất và ảnh hưởng sức khoẻ người dân. Tái chế không làm tăng trữ lượng quặng.',
    },
  ],
  takeaways: [
    'Phế liệu kim loại đến từ sinh hoạt, xây dựng, giao thông, điện tử và sản xuất; kim loại tái chế được nhiều lần.',
    'Quy trình chung: thu gom → phân loại (nam châm, dòng điện xoáy) → làm sạch, cắt, ép → nấu chảy → tinh chế → đúc.',
    'Nhôm tái chế chỉ cần khoảng $5\\%$ năng lượng so với nhôm từ bauxite vì không phải điện phân nóng chảy $\\mathrm{Al_2O_3}$.',
    'Đồng được tinh luyện bằng điện phân với anode là đồng thô; thép phế liệu được nấu trong lò điện hồ quang.',
    'Tái chế bảo vệ tài nguyên, tiết kiệm năng lượng, giảm ô nhiễm, nhưng tái chế thủ công không xử lí chất thải lại gây ô nhiễm nặng.',
  ],
};
