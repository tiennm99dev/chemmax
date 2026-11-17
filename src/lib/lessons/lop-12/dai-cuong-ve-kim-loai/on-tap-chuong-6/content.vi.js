/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương Đại cương về kim loại: vị trí, cấu tạo và liên kết kim loại, tính chất vật lí và tính khử của kim loại theo dãy điện hoá, các phương pháp tách kim loại, hợp kim, ăn mòn kim loại và cách chống ăn mòn; luyện dự đoán phản ứng, xác định kim loại bị ăn mòn và các dạng bài tính toán.',
  intro:
    'Vì sao dây điện làm bằng đồng, vỏ tàu biển được gắn những khối kẽm, còn nhôm phải sản xuất bằng điện phân? Câu trả lời đều xuất phát từ cấu tạo của kim loại và vị trí của nó trong dãy điện hoá. Bài ôn tập này hệ thống lại kiến thức của chương, luyện vận dụng dãy điện hoá để dự đoán phản ứng và sự ăn mòn, cùng các dạng bài tính toán thường gặp.',
  objectives: [
    'Hệ thống được kiến thức về cấu tạo, liên kết kim loại, tính chất vật lí và tính chất hoá học của kim loại.',
    'Vận dụng được dãy điện hoá để dự đoán phản ứng của kim loại với nước, dung dịch acid, dung dịch muối và chọn phương pháp tách kim loại.',
    'Xác định được điều kiện ăn mòn điện hoá, kim loại bị ăn mòn và phương pháp chống ăn mòn phù hợp.',
    'Giải được các bài tập tính toán về kim loại tác dụng với acid, với dung dịch muối và tách kim loại bằng nhiệt luyện.',
  ],
  sections: [
    {
      heading: 'Hệ thống kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Tóm tắt chương Đại cương về kim loại',
          head: ['Nội dung', 'Kiến thức trọng tâm'],
          rows: [
            [
              'Cấu tạo',
              'Kim loại gồm các nguyên tố khối s (trừ H, He), khối d, khối f và một phần khối p. Nguyên tử kim loại thường có 1, 2 hoặc 3 electron lớp ngoài cùng, bán kính lớn, độ âm điện nhỏ, dễ nhường electron.',
            ],
            [
              'Liên kết kim loại',
              'Lực hút tĩnh điện giữa các electron hoá trị tự do và các ion dương ở nút mạng. Ba kiểu mạng phổ biến: lập phương tâm khối, lập phương tâm mặt, lục phương.',
            ],
            [
              'Tính chất vật lí',
              'Tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim, đều do các electron tự do gây ra.',
            ],
            [
              'Tính chất hoá học',
              'Tính khử: $\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne$. Kim loại tác dụng với phi kim, nước, dung dịch acid, dung dịch muối.',
            ],
            [
              'Tách kim loại',
              'Khử ion kim loại: $\\mathrm{M^{n+}} + ne \\longrightarrow \\mathrm{M}$, bằng điện phân nóng chảy, nhiệt luyện, thuỷ luyện hoặc điện phân dung dịch.',
            ],
            [
              'Hợp kim',
              'Gồm một kim loại cơ bản và một số kim loại hoặc phi kim khác; thường cứng hơn, dẫn điện, dẫn nhiệt kém hơn kim loại cơ bản. Ví dụ: gang, thép, thép không gỉ, duralumin.',
            ],
            [
              'Ăn mòn kim loại',
              'Kim loại bị oxi hoá bởi các chất trong môi trường: ăn mòn hoá học và ăn mòn điện hoá. Chống ăn mòn bằng bảo vệ bề mặt hoặc phương pháp điện hoá.',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Dãy điện hoá: $\\mathrm{K^+/K}$, $\\mathrm{Na^+/Na}$, $\\mathrm{Mg^{2+}/Mg}$, $\\mathrm{Al^{3+}/Al}$, $\\mathrm{Zn^{2+}/Zn}$, $\\mathrm{Fe^{2+}/Fe}$, $\\mathrm{Ni^{2+}/Ni}$, $\\mathrm{Sn^{2+}/Sn}$, $\\mathrm{Pb^{2+}/Pb}$, $\\mathrm{2H^+/H_2}$, $\\mathrm{Cu^{2+}/Cu}$, $\\mathrm{Ag^+/Ag}$, theo chiều $E^\\circ$ tăng dần: tính khử của kim loại giảm dần, tính oxi hoá của ion kim loại tăng dần.',
            'Kim loại nhóm IA và Ca, Sr, Ba khử được nước ở nhiệt độ thường; kim loại có $E^\\circ < 0$ khử được ion $\\mathrm{H^+}$ trong dung dịch $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng.',
            'Quy tắc α: kim loại của cặp có $E^\\circ$ nhỏ hơn khử được ion kim loại của cặp có $E^\\circ$ lớn hơn trong dung dịch muối (trừ các kim loại tác dụng mạnh với nước).',
            'Chọn phương pháp tách theo độ hoạt động: K đến Al dùng điện phân nóng chảy; kim loại trung bình (Zn, Fe, Sn, Pb) dùng nhiệt luyện hoặc điện phân dung dịch; kim loại yếu (Cu, Ag, Au) dùng thuỷ luyện hoặc điện phân dung dịch.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ăn mòn điện hoá',
          text: 'Xảy ra khi có đủ ba điều kiện: hai điện cực khác bản chất (hai kim loại, hoặc kim loại và phi kim như C); hai điện cực tiếp xúc trực tiếp hoặc qua dây dẫn; cùng tiếp xúc với một dung dịch chất điện li. Kim loại có $E^\\circ$ nhỏ hơn là anode, bị ăn mòn; kim loại có $E^\\circ$ lớn hơn là cathode, không bị ăn mòn.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chống ăn mòn',
          text: 'Phương pháp bảo vệ bề mặt: sơn, bôi dầu mỡ, mạ hoặc tráng một lớp kim loại khác (tôn là sắt tráng kẽm, sắt tây là sắt tráng thiếc). Phương pháp điện hoá: gắn vào vật cần bảo vệ một kim loại hoạt động hơn (Zn, Mg) làm anode, bị ăn mòn thay.',
        },
      ],
    },
    {
      heading: 'Các dạng bài tính toán',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Kim loại tác dụng với dung dịch acid: viết phương trình, tính số mol khí $n_{\\mathrm{H_2}} = \\dfrac{V}{24{,}79}$ (đkc), suy ra số mol và khối lượng kim loại; biết $m$ và $n$ thì xác định được kim loại qua $M = \\dfrac{m}{n}$.',
            'Thanh kim loại nhúng vào dung dịch muối: khối lượng thanh thay đổi bằng khối lượng kim loại bám vào trừ khối lượng kim loại tan ra; mỗi mol $\\mathrm{Fe}$ phản ứng với $\\mathrm{CuSO_4}$ làm thanh tăng $64 - 56 = 8$ g.',
            'Tách kim loại bằng nhiệt luyện: tính theo phương trình rồi nhân với hiệu suất, ví dụ $\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$.',
          ],
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Dãy điện hoá và ăn mòn',
    instruction:
      'Mỗi câu là một tình huống: một kim loại cho vào dung dịch, hoặc hai kim loại tiếp xúc nhau. Các chất đang xét được đánh dấu trên dãy điện hoá. Chọn câu trả lời, đọc lời giải dựa vào thế điện cực chuẩn rồi bấm "Câu tiếp theo".',
  },
  examples: [
    {
      problem:
        'Cho $5{,}6$ g Fe vào 200 mL dung dịch $\\mathrm{CuSO_4}$ $0{,}5$ M. Sau khi phản ứng xảy ra hoàn toàn, tính khối lượng chất rắn thu được.',
      steps: [
        '$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol; $n_{\\mathrm{CuSO_4}} = 0{,}2 \\cdot 0{,}5 = 0{,}1$ mol.',
        '$E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V $< E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340$ V nên Fe khử được $\\mathrm{Cu^{2+}}$: $\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$.',
        'Hai chất phản ứng vừa đủ (tỉ lệ $1 : 1$), nên $n_{\\mathrm{Cu}} = 0{,}1$ mol và chất rắn chỉ còn Cu.',
        '$m_{\\mathrm{Cu}} = 0{,}1 \\cdot 64 = 6{,}4$ g.',
      ],
      answer: 'Chất rắn thu được là $6{,}4$ g Cu.',
    },
    {
      problem:
        'Để bảo vệ vỏ tàu biển bằng thép, người ta gắn các khối kẽm vào phần vỏ chìm dưới nước. Giải thích cách làm này.',
      steps: [
        'Thép (Fe) và Zn tiếp xúc trực tiếp với nhau và cùng tiếp xúc với nước biển là dung dịch chất điện li: đủ ba điều kiện ăn mòn điện hoá.',
        '$E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V $< E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V nên Zn là anode, bị oxi hoá: $\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$.',
        'Vỏ thép là cathode, ở đó xảy ra quá trình khử $\\mathrm{O_2} + 2\\mathrm{H_2O} + 4e \\longrightarrow 4\\mathrm{OH^-}$, nên sắt không bị ăn mòn.',
      ],
      answer:
        'Kẽm bị ăn mòn thay cho thép (phương pháp điện hoá); các khối kẽm được thay mới định kì.',
    },
    {
      problem:
        'Một loại quặng hematite chứa 80% $\\mathrm{Fe_2O_3}$ về khối lượng. Tính khối lượng sắt thu được từ 1 tấn quặng bằng phương pháp nhiệt luyện, biết hiệu suất cả quá trình là 90%.',
      steps: [
        '$m_{\\mathrm{Fe_2O_3}} = 1 \\cdot 80\\% = 0{,}8$ tấn $= 800$ kg.',
        '$\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}$: 160 kg $\\mathrm{Fe_2O_3}$ cho $2 \\cdot 56 = 112$ kg Fe.',
        'Theo lí thuyết: $m_{\\mathrm{Fe}} = \\dfrac{800 \\cdot 112}{160} = 560$ kg.',
        'Với hiệu suất 90%: $m_{\\mathrm{Fe}} = 560 \\cdot 90\\% = 504$ kg.',
      ],
      answer: 'Thu được 504 kg sắt.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Liên kết kim loại là liên kết được hình thành do',
      options: [
        'lực hút tĩnh điện giữa các electron hoá trị tự do và các ion dương ở nút mạng tinh thể',
        'sự dùng chung electron giữa các nguyên tử kim loại cạnh nhau',
        'lực hút tĩnh điện giữa các ion dương và các ion âm',
        'sự cho – nhận cặp electron giữa các nguyên tử kim loại',
      ],
      answer: 0,
      hints: ['Trong tinh thể kim loại, electron hoá trị không thuộc riêng nguyên tử nào.'],
      solution:
        'Liên kết kim loại là liên kết hình thành do lực hút tĩnh điện giữa các electron hoá trị tự do và các ion dương kim loại ở nút mạng. Liên kết cộng hoá trị mới là sự dùng chung electron; liên kết ion là lực hút giữa ion dương và ion âm.',
    },
    {
      type: 'choice',
      prompt:
        'Các tính chất vật lí chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt, ánh kim) chủ yếu do',
      options: [
        'các electron tự do trong tinh thể kim loại',
        'các ion dương ở nút mạng tinh thể',
        'khối lượng nguyên tử lớn của kim loại',
        'kiểu mạng tinh thể của kim loại',
      ],
      answer: 0,
      hints: ['Cả bốn tính chất đều được giải thích bằng cùng một loại hạt.'],
      solution:
        'Electron tự do chuyển động thành dòng có hướng (dẫn điện), truyền năng lượng (dẫn nhiệt), phản xạ ánh sáng (ánh kim) và giữ các lớp ion khi trượt lên nhau (tính dẻo).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các kim loại theo chiều tính khử giảm dần.',
      items: ['Mg', 'Zn', 'Fe', 'Cu', 'Ag'],
      answer: [0, 1, 2, 3, 4],
      hints: ['Tính khử càng mạnh khi $E^\\circ$ của cặp $\\mathrm{M^{n+}/M}$ càng nhỏ.'],
      solution:
        '$E^\\circ$ tăng dần: Mg ($-2{,}356$ V), Zn ($-0{,}762$ V), Fe ($-0{,}440$ V), Cu ($+0{,}340$ V), Ag ($+0{,}799$ V), nên tính khử giảm dần: Mg > Zn > Fe > Cu > Ag.',
    },
    {
      type: 'multi',
      prompt:
        'Những kim loại nào sau đây tác dụng được với dung dịch HCl loãng, giải phóng khí $\\mathrm{H_2}$?',
      options: ['Zn', 'Fe', 'Al', 'Cu', 'Ag'],
      answers: [0, 1, 2],
      hints: [
        'So sánh $E^\\circ$ của mỗi cặp $\\mathrm{M^{n+}/M}$ với $E^\\circ_{\\mathrm{2H^+/H_2}} = 0$ V.',
      ],
      solution:
        'Zn, Fe, Al có $E^\\circ < 0$ nên khử được $\\mathrm{H^+}$, ví dụ $\\mathrm{Zn} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$. Cu ($+0{,}340$ V) và Ag ($+0{,}799$ V) có $E^\\circ > 0$ nên không phản ứng.',
    },
    {
      type: 'choice',
      prompt:
        'Dãy gồm các kim loại đều khử được ion $\\mathrm{Cu^{2+}}$ trong dung dịch $\\mathrm{CuSO_4}$ là',
      options: ['Fe, Zn, Ni', 'Fe, Zn, Ag', 'Ni, Pb, Ag', 'Zn, Ag, Au'],
      answer: 0,
      hints: ['Kim loại cần có $E^\\circ$ nhỏ hơn $E^\\circ_{\\mathrm{Cu^{2+}/Cu}} = +0{,}340$ V.'],
      solution:
        'Fe ($-0{,}440$ V), Zn ($-0{,}762$ V), Ni ($-0{,}257$ V) đều có $E^\\circ$ nhỏ hơn $+0{,}340$ V nên khử được $\\mathrm{Cu^{2+}}$. Ag và Au có $E^\\circ$ lớn hơn nên không khử được.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan hoàn toàn $5{,}6$ g Fe trong dung dịch HCl dư. Tính thể tích khí $\\mathrm{H_2}$ thu được ở đkc (L).',
      answer: 2.479,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        '$\\mathrm{Fe} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}$.',
        'Ở đkc, 1 mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{Fe}} = \\dfrac{5{,}6}{56} = 0{,}1$ mol $= n_{\\mathrm{H_2}}$; $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'text',
      prompt:
        'Hoà tan hoàn toàn $3{,}6$ g một kim loại M (hoá trị II) trong dung dịch $\\mathrm{H_2SO_4}$ loãng dư, thu được $3{,}7185$ L khí $\\mathrm{H_2}$ (đkc). Viết kí hiệu hoá học của M.',
      accept: ['Mg', 'magnesium'],
      hints: [
        '$n_{\\mathrm{M}} = n_{\\mathrm{H_2}} = \\dfrac{3{,}7185}{24{,}79}$.',
        'Tính $M = \\dfrac{m}{n}$ rồi tra bảng tuần hoàn.',
      ],
      solution:
        '$n_{\\mathrm{H_2}} = \\dfrac{3{,}7185}{24{,}79} = 0{,}15$ mol $= n_{\\mathrm{M}}$; $M = \\dfrac{3{,}6}{0{,}15} = 24$ g/mol, M là magnesium (Mg).',
    },
    {
      type: 'number',
      prompt:
        'Nhúng một thanh Fe vào dung dịch $\\mathrm{CuSO_4}$. Sau một thời gian lấy thanh ra, rửa nhẹ, làm khô, thấy khối lượng thanh tăng $0{,}8$ g. Tính khối lượng Cu đã bám vào thanh (g), coi toàn bộ Cu sinh ra đều bám vào thanh.',
      answer: 6.4,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$.',
        'Mỗi mol Fe tan ra thì có 1 mol Cu bám vào: thanh tăng $64 - 56 = 8$ g.',
      ],
      solution:
        '$n_{\\mathrm{Fe}} = n_{\\mathrm{Cu}} = \\dfrac{0{,}8}{8} = 0{,}1$ mol; $m_{\\mathrm{Cu}} = 0{,}1 \\cdot 64 = 6{,}4$ g.',
    },
    {
      type: 'match',
      prompt:
        'Ghép mỗi kim loại với phương pháp thường dùng để tách kim loại đó trong công nghiệp.',
      left: ['Na', 'Al', 'Fe', 'Ag'],
      right: [
        'Điện phân NaCl nóng chảy',
        'Điện phân $\\mathrm{Al_2O_3}$ nóng chảy (có cryolite)',
        'Khử $\\mathrm{Fe_2O_3}$ bằng CO ở nhiệt độ cao',
        'Hoà tan bằng dung dịch NaCN rồi dùng Zn khử ion bạc',
        'Khử $\\mathrm{Al_2O_3}$ bằng CO ở nhiệt độ cao',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Kim loại hoạt động mạnh (từ K đến Al) chỉ tách được bằng điện phân nóng chảy.',
        'Kim loại yếu như Ag, Au thường tách bằng thuỷ luyện.',
      ],
      solution:
        'Na: điện phân NaCl nóng chảy. Al: điện phân $\\mathrm{Al_2O_3}$ nóng chảy có cryolite. Fe: nhiệt luyện, khử $\\mathrm{Fe_2O_3}$ bằng CO. Ag: thuỷ luyện. CO không khử được $\\mathrm{Al_2O_3}$ vì Al là kim loại hoạt động mạnh.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về hợp kim là đúng?',
      options: [
        'Thép là hợp kim của sắt với carbon, hàm lượng carbon dưới 2% về khối lượng.',
        'Hợp kim thường dẫn điện tốt hơn kim loại nguyên chất tạo nên nó.',
        'Gang là hợp kim của sắt với carbon, hàm lượng carbon dưới 0,5%.',
        'Duralumin là hợp kim có thành phần chính là đồng.',
      ],
      answer: 0,
      hints: [
        'Gang chứa nhiều carbon hơn thép.',
        'Duralumin là hợp kim nhẹ dùng trong ngành hàng không.',
      ],
      solution:
        'Thép chứa dưới 2% C, gang chứa 2 – 4% C. Hợp kim thường dẫn điện kém hơn kim loại nguyên chất vì mạng tinh thể có thêm nguyên tử lạ cản trở electron tự do. Duralumin có trên 90% Al.',
    },
    {
      type: 'multi',
      prompt: 'Trường hợp nào sau đây xảy ra ăn mòn điện hoá?',
      options: [
        'Thanh hợp kim Fe – Cu để trong không khí ẩm.',
        'Nhúng thanh Zn vào dung dịch $\\mathrm{H_2SO_4}$ loãng có nhỏ vài giọt dung dịch $\\mathrm{CuSO_4}$.',
        'Đốt dây sắt trong bình khí chlorine.',
        'Nhúng thanh Al nguyên chất vào dung dịch HCl.',
      ],
      answers: [0, 1],
      hints: [
        'Kiểm tra từng trường hợp có đủ hai điện cực khác bản chất, tiếp xúc nhau, cùng trong dung dịch chất điện li hay không.',
        'Zn đẩy được Cu ra khỏi dung dịch $\\mathrm{CuSO_4}$; Cu sinh ra bám vào thanh Zn.',
      ],
      solution:
        'Hợp kim Fe – Cu trong không khí ẩm: hai điện cực Fe, Cu tiếp xúc nhau và cùng tiếp xúc màng nước có hoà tan chất điện li, Fe bị ăn mòn. Zn trong $\\mathrm{H_2SO_4}$ có $\\mathrm{CuSO_4}$: Cu bám lên Zn tạo cặp Zn – Cu, Zn bị ăn mòn điện hoá. Đốt sắt trong chlorine và Al nguyên chất trong HCl là ăn mòn hoá học, vì chỉ có một kim loại.',
    },
    {
      type: 'choice',
      prompt:
        'Để bảo vệ ống dẫn nước bằng thép chôn dưới đất theo phương pháp điện hoá, người ta nối ống thép với một khối kim loại nào sau đây?',
      options: ['Mg', 'Cu', 'Sn', 'Pb'],
      answer: 0,
      hints: ['Kim loại gắn vào phải bị ăn mòn thay cho sắt, tức là làm anode.'],
      solution:
        'Mg có $E^\\circ = -2{,}356$ V nhỏ hơn của Fe ($-0{,}440$ V) nên Mg là anode, bị ăn mòn thay; thép là cathode, được bảo vệ. Cu, Sn, Pb có $E^\\circ$ lớn hơn Fe, nếu nối vào sẽ làm thép bị ăn mòn nhanh hơn.',
    },
  ],
  takeaways: [
    'Liên kết kim loại do electron tự do và ion dương ở nút mạng; electron tự do gây nên tính dẻo, dẫn điện, dẫn nhiệt, ánh kim.',
    'Tính chất hoá học đặc trưng của kim loại là tính khử; dãy điện hoá và quy tắc α cho biết kim loại nào phản ứng với nước, acid, dung dịch muối.',
    'Tách kim loại là khử ion kim loại; chọn điện phân nóng chảy, nhiệt luyện, thuỷ luyện hay điện phân dung dịch theo độ hoạt động của kim loại.',
    'Ăn mòn điện hoá cần hai điện cực khác bản chất, tiếp xúc nhau, cùng trong dung dịch chất điện li; kim loại có $E^\\circ$ nhỏ hơn bị ăn mòn.',
    'Chống ăn mòn bằng bảo vệ bề mặt hoặc gắn kim loại hoạt động hơn làm anode (phương pháp điện hoá).',
  ],
};
