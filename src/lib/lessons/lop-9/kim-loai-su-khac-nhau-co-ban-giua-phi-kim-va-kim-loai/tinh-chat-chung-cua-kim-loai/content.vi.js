/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại có tính dẻo, dẫn điện, dẫn nhiệt và có ánh kim. Về hoá học, kim loại tác dụng với phi kim (oxygen, chlorine, sulfur), một số kim loại tác dụng với nước, với dung dịch acid tạo muối và khí hydrogen, và với dung dịch muối tạo muối mới và kim loại mới. Nhờ các tính chất đó, kim loại được dùng làm dây điện, đồ gia dụng, trang sức và vật liệu xây dựng.',
  intro:
    'Dây điện trong nhà làm bằng đồng hoặc nhôm, nồi nấu bằng nhôm hay inox, nhẫn cưới bằng vàng. Vì sao mỗi kim loại lại hợp với một công việc? Vì sao chiếc đinh sắt để ngoài mưa thì gỉ, còn chiếc nhẫn vàng thì sáng mãi? Câu trả lời nằm ở tính chất vật lí và tính chất hoá học của kim loại.',
  objectives: [
    'Nêu được một số tính chất vật lí của kim loại: tính dẻo, tính dẫn điện, tính dẫn nhiệt, ánh kim.',
    'Trình bày được tính chất hoá học cơ bản của kim loại: tác dụng với phi kim, với nước, với dung dịch acid và với dung dịch muối; viết được phương trình hoá học.',
    'Nêu được một số ứng dụng của kim loại dựa vào tính chất của chúng.',
  ],
  sections: [
    {
      heading: 'Tính chất vật lí của kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Ở điều kiện thường, các kim loại đều ở thể rắn (trừ thuỷ ngân $\\mathrm{Hg}$ ở thể lỏng). Kim loại có bốn tính chất vật lí chung:',
        },
        {
          type: 'table',
          head: ['Tính chất', 'Biểu hiện', 'Ví dụ'],
          rows: [
            [
              'Tính dẻo',
              'Kim loại có thể dát mỏng, kéo sợi.',
              'Vàng là kim loại dẻo nhất: có thể dát thành lá vàng mỏng hơn tờ giấy nhiều lần.',
            ],
            [
              'Tính dẫn điện',
              'Kim loại cho dòng điện chạy qua.',
              'Bạc dẫn điện tốt nhất, sau đó đến đồng, vàng, nhôm, sắt.',
            ],
            [
              'Tính dẫn nhiệt',
              'Kim loại truyền nhiệt tốt.',
              'Kim loại dẫn điện tốt thường cũng dẫn nhiệt tốt; cầm thìa kim loại trong cốc nước nóng thấy nóng tay.',
            ],
            ['Ánh kim', 'Bề mặt kim loại sáng lấp lánh.', 'Vàng, bạc dùng làm đồ trang sức.'],
          ],
        },
        {
          type: 'p',
          text: 'Ngoài ra, các kim loại khác nhau nhiều về khối lượng riêng, độ cứng và nhiệt độ nóng chảy: tungsten ($\\mathrm{W}$) nóng chảy ở khoảng $3\\,410\\,^\\circ\\mathrm{C}$ nên được dùng làm dây tóc bóng đèn, còn thuỷ ngân nóng chảy ở $-39\\,^\\circ\\mathrm{C}$; nhôm nhẹ, sắt và chì nặng hơn nhiều.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học của kim loại',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: '1. Tác dụng với phi kim',
          text: 'Đa số kim loại tác dụng với oxygen (khi đun nóng) tạo oxide; tác dụng với chlorine tạo muối chloride; tác dụng với sulfur tạo muối sulfide. Vàng, bạc, platinum không tác dụng với oxygen.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} 3\\mathrm{Fe} + 2\\mathrm{O_2} &\\xrightarrow{t^\\circ} \\mathrm{Fe_3O_4} \\\\ 4\\mathrm{Al} + 3\\mathrm{O_2} &\\xrightarrow{t^\\circ} 2\\mathrm{Al_2O_3} \\\\ 2\\mathrm{Fe} + 3\\mathrm{Cl_2} &\\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3} \\\\ \\mathrm{Fe} + \\mathrm{S} &\\xrightarrow{t^\\circ} \\mathrm{FeS} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nhôm, kẽm tác dụng với oxygen ngay ở nhiệt độ thường, tạo một lớp oxide mỏng, bền bám chặt trên bề mặt. Lớp oxide này bảo vệ kim loại bên trong, vì thế đồ dùng bằng nhôm rất bền trong không khí.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '2. Tác dụng với nước',
          text: 'Một số kim loại rất mạnh như $\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$ tác dụng với nước ở nhiệt độ thường, tạo base và khí hydrogen, toả nhiều nhiệt. Một số kim loại như $\\mathrm{Zn}$, $\\mathrm{Fe}$ tác dụng với hơi nước ở nhiệt độ cao tạo oxide và khí hydrogen. $\\mathrm{Cu}$, $\\mathrm{Ag}$, $\\mathrm{Au}$ không tác dụng với nước.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} 2\\mathrm{Na} + 2\\mathrm{H_2O} &\\rightarrow 2\\mathrm{NaOH} + \\mathrm{H_2}\\uparrow \\\\ \\mathrm{Zn} + \\mathrm{H_2O} &\\xrightarrow{t^\\circ} \\mathrm{ZnO} + \\mathrm{H_2} \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '3. Tác dụng với dung dịch acid',
          text: 'Nhiều kim loại ($\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Zn}$, $\\mathrm{Fe}$, ...) tác dụng với dung dịch $\\mathrm{HCl}$, $\\mathrm{H_2SO_4}$ loãng tạo muối và giải phóng khí hydrogen. $\\mathrm{Cu}$, $\\mathrm{Ag}$, $\\mathrm{Au}$ không tác dụng với các dung dịch acid này.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{Fe} + 2\\mathrm{HCl} &\\rightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}\\uparrow \\\\ 2\\mathrm{Al} + 6\\mathrm{HCl} &\\rightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}\\uparrow \\end{aligned}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: '4. Tác dụng với dung dịch muối',
          text: 'Kim loại hoạt động hoá học mạnh hơn (trừ $\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$, ...) đẩy được kim loại hoạt động yếu hơn ra khỏi dung dịch muối, tạo muối mới và kim loại mới.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} \\mathrm{Fe} + \\mathrm{CuSO_4} &\\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu} \\\\ \\mathrm{Cu} + 2\\mathrm{AgNO_3} &\\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag} \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Ngâm đinh sắt trong dung dịch copper(II) sulfate màu xanh: một lớp đồng màu đỏ bám ngoài đinh sắt, màu xanh của dung dịch nhạt dần. Sắt đẩy được đồng ra khỏi muối, nên sắt hoạt động hoá học mạnh hơn đồng.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: '$\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$ cho vào dung dịch muối thì tác dụng với nước trước, tạo base và khí hydrogen, chứ không đẩy kim loại ra khỏi muối.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của kim loại',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi ứng dụng của kim loại dựa vào một hay nhiều tính chất của nó:',
        },
        {
          type: 'table',
          head: ['Kim loại', 'Tính chất được dùng', 'Ứng dụng'],
          rows: [
            ['Đồng, nhôm', 'Dẫn điện tốt', 'Làm dây dẫn điện, cáp điện.'],
            ['Nhôm, sắt, inox', 'Dẫn nhiệt tốt, bền', 'Làm xoong, nồi, chảo, ấm đun nước.'],
            ['Nhôm', 'Dẻo, nhẹ, có lớp oxide bảo vệ', 'Làm giấy gói thực phẩm, vỏ lon, khung cửa.'],
            ['Vàng, bạc', 'Ánh kim, dẻo, khó bị oxi hoá', 'Làm đồ trang sức, tiền xu kỉ niệm.'],
            ['Tungsten', 'Nhiệt độ nóng chảy rất cao', 'Làm dây tóc bóng đèn sợi đốt.'],
            ['Sắt (thép)', 'Cứng, bền, rẻ', 'Làm khung nhà, cầu, đường ray, máy móc.'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm ảo',
    instruction:
      'Chọn một kim loại và một chất tham gia, rồi bấm “Tiến hành”. Quan sát hiện tượng, đọc phương trình hoá học và ghi kết quả vào bảng. Hãy làm đủ các ô để tìm quy luật: kim loại nào không cháy, kim loại nào không tan trong acid, kim loại nào đẩy được đồng hay bạc ra khỏi muối.',
  },
  examples: [
    {
      problem:
        'Ngâm một đinh sắt sạch trong dung dịch copper(II) sulfate. Nêu hiện tượng, giải thích và viết phương trình hoá học.',
      steps: [
        'Sắt hoạt động hoá học mạnh hơn đồng nên đẩy đồng ra khỏi dung dịch muối.',
        'Hiện tượng: có lớp kim loại màu đỏ (đồng) bám ngoài đinh sắt, màu xanh của dung dịch nhạt dần.',
        'Muối tạo thành là iron(II) sulfate $\\mathrm{FeSO_4}$.',
      ],
      answer: '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$.',
    },
    {
      problem:
        'Cho $5{,}4$ g nhôm tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn ($25\\,^\\circ\\mathrm{C}$, $1$ bar) (Al = 27).',
      steps: [
        '$n_{\\mathrm{Al}} = \\dfrac{5{,}4}{27} = 0{,}2$ mol.',
        'Phương trình: $2\\mathrm{Al} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}$. Cứ $2$ mol Al tạo $3$ mol $\\mathrm{H_2}$.',
        '$n_{\\mathrm{H_2}} = \\dfrac{3}{2} \\times 0{,}2 = 0{,}3$ mol.',
        '$V_{\\mathrm{H_2}} = 0{,}3 \\times 24{,}79 = 7{,}437$ L.',
      ],
      answer: '$V_{\\mathrm{H_2}} = 7{,}437$ L.',
    },
    {
      problem:
        'Đốt cháy hết $3{,}36$ g sắt trong oxygen thu được oxide sắt từ $\\mathrm{Fe_3O_4}$. Tính khối lượng oxide thu được (Fe = 56, O = 16).',
      steps: [
        '$3\\mathrm{Fe} + 2\\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{Fe_3O_4}$.',
        '$n_{\\mathrm{Fe}} = \\dfrac{3{,}36}{56} = 0{,}06$ mol, nên $n_{\\mathrm{Fe_3O_4}} = \\dfrac{0{,}06}{3} = 0{,}02$ mol.',
        '$M_{\\mathrm{Fe_3O_4}} = 3 \\times 56 + 4 \\times 16 = 232$ g/mol.',
        '$m_{\\mathrm{Fe_3O_4}} = 0{,}02 \\times 232 = 4{,}64$ g.',
      ],
      answer: '$m_{\\mathrm{Fe_3O_4}} = 4{,}64$ g.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Người ta dùng đồng và nhôm làm dây dẫn điện vì hai kim loại này',
      options: [
        'có ánh kim',
        'dẫn điện tốt',
        'có nhiệt độ nóng chảy cao',
        'không tác dụng với oxygen',
      ],
      answer: 1,
      hints: ['Dây dẫn điện cần cho dòng điện chạy qua dễ dàng.'],
      solution:
        'Đồng và nhôm dẫn điện tốt (chỉ kém bạc), lại rẻ hơn bạc nhiều, nên được dùng làm dây dẫn điện.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ứng dụng với tính chất vật lí của kim loại được dùng.',
      left: [
        'Dát nhôm thành giấy gói thực phẩm',
        'Làm nồi, chảo bằng nhôm',
        'Làm nhẫn, dây chuyền bằng vàng',
      ],
      right: ['Tính dẫn nhiệt', 'Ánh kim', 'Tính dẻo', 'Tính dẫn điện'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Dát mỏng được là nhờ tính dẻo.'],
      solution: 'Giấy gói nhôm: tính dẻo; nồi chảo: tính dẫn nhiệt; trang sức vàng: ánh kim.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào tác dụng với nước ở nhiệt độ thường?',
      options: [
        '$\\mathrm{Na}$',
        '$\\mathrm{Fe}$',
        '$\\mathrm{K}$',
        '$\\mathrm{Cu}$',
        '$\\mathrm{Ca}$',
      ],
      answers: [0, 2, 4],
      hints: ['Chỉ những kim loại rất mạnh mới tác dụng với nước ở nhiệt độ thường.'],
      solution:
        '$\\mathrm{K}$, $\\mathrm{Na}$, $\\mathrm{Ca}$ tác dụng với nước ở nhiệt độ thường tạo base và khí $\\mathrm{H_2}$. Sắt chỉ phản ứng với hơi nước ở nhiệt độ cao; đồng không phản ứng.',
    },
    {
      type: 'choice',
      prompt: 'Kim loại nào sau đây không tác dụng với dung dịch $\\mathrm{HCl}$?',
      options: ['$\\mathrm{Mg}$', '$\\mathrm{Zn}$', '$\\mathrm{Ag}$', '$\\mathrm{Al}$'],
      answer: 2,
      hints: ['Có ba kim loại quen thuộc không tác dụng với dung dịch acid loãng: Cu, Ag, Au.'],
      solution:
        '$\\mathrm{Ag}$ không tác dụng với dung dịch $\\mathrm{HCl}$; $\\mathrm{Mg}$, $\\mathrm{Zn}$, $\\mathrm{Al}$ đều tác dụng, giải phóng khí hydrogen.',
    },
    {
      type: 'choice',
      prompt:
        'Nhúng dây đồng vào dung dịch silver nitrate $\\mathrm{AgNO_3}$. Hiện tượng quan sát được là',
      options: [
        'không có hiện tượng gì',
        'có khí không màu thoát ra',
        'có chất rắn màu xám bạc bám ngoài dây đồng, dung dịch chuyển dần sang màu xanh lam',
        'dây đồng tan hết, dung dịch không màu',
      ],
      answer: 2,
      hints: [
        'Đồng hoạt động hoá học mạnh hơn bạc.',
        'Muối copper(II) trong dung dịch có màu xanh lam.',
      ],
      solution:
        '$\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}$: bạc sinh ra bám ngoài dây đồng, dung dịch chứa $\\mathrm{Cu(NO_3)_2}$ có màu xanh lam.',
    },
    {
      type: 'choice',
      prompt: 'Phương trình hoá học nào sau đây viết đúng?',
      options: [
        '$2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}$',
        '$\\mathrm{Fe} + \\mathrm{Cl_2} \\xrightarrow{t^\\circ} \\mathrm{FeCl_2}$',
        '$\\mathrm{Cu} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CuCl_2} + \\mathrm{H_2}$',
        '$\\mathrm{Cu} + \\mathrm{FeSO_4} \\rightarrow \\mathrm{CuSO_4} + \\mathrm{Fe}$',
      ],
      answer: 0,
      hints: [
        'Đồng không tác dụng với dung dịch HCl và yếu hơn sắt.',
        'Sắt cháy trong chlorine tạo muối iron(III).',
      ],
      solution:
        'Sắt tác dụng với chlorine tạo $\\mathrm{FeCl_3}$: $2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}$. Đồng không tác dụng với $\\mathrm{HCl}$ và không đẩy được sắt ra khỏi muối.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}8$ g magnesium tác dụng hết với dung dịch $\\mathrm{HCl}$ dư. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn, theo lít (Mg = 24).',
      answer: 4.958,
      tolerance: 0.001,
      unit: 'L',
      hints: [
        'Viết phương trình: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl_2} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{H_2}} = n_{\\mathrm{Mg}}$; $1$ mol khí ở điều kiện chuẩn chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{Mg}} = \\dfrac{4{,}8}{24} = 0{,}2$ mol $= n_{\\mathrm{H_2}}$; $V = 0{,}2 \\times 24{,}79 = 4{,}958$ L.',
    },
    {
      type: 'number',
      prompt:
        'Ngâm một đinh sắt trong dung dịch $\\mathrm{CuSO_4}$ dư. Sau phản ứng có $2{,}8$ g sắt đã tan. Tính khối lượng đồng bám vào đinh sắt, theo gam (Fe = 56, Cu = 64).',
      answer: 3.2,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{Fe} + \\mathrm{CuSO_4} \\rightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}$: số mol Cu bằng số mol Fe phản ứng.',
      ],
      solution:
        '$n_{\\mathrm{Fe}} = \\dfrac{2{,}8}{56} = 0{,}05$ mol $= n_{\\mathrm{Cu}}$; $m_{\\mathrm{Cu}} = 0{,}05 \\times 64 = 3{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}64$ g đồng tác dụng hết với dung dịch $\\mathrm{AgNO_3}$ dư. Tính khối lượng bạc sinh ra, theo gam (Cu = 64, Ag = 108).',
      answer: 2.16,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}$.',
        'Số mol Ag gấp đôi số mol Cu.',
      ],
      solution:
        '$n_{\\mathrm{Cu}} = \\dfrac{0{,}64}{64} = 0{,}01$ mol; $n_{\\mathrm{Ag}} = 2 \\times 0{,}01 = 0{,}02$ mol; $m_{\\mathrm{Ag}} = 0{,}02 \\times 108 = 2{,}16$ g.',
    },
  ],
  takeaways: [
    'Kim loại có tính dẻo, dẫn điện, dẫn nhiệt và ánh kim; bạc dẫn điện tốt nhất, vàng dẻo nhất.',
    'Kim loại + phi kim: với oxygen tạo oxide, với chlorine tạo muối chloride, với sulfur tạo muối sulfide.',
    'K, Na, Ca tác dụng với nước ở nhiệt độ thường tạo base và $\\mathrm{H_2}$; Zn, Fe tác dụng với hơi nước ở nhiệt độ cao.',
    'Nhiều kim loại tác dụng với dung dịch acid tạo muối và $\\mathrm{H_2}$; Cu, Ag, Au thì không.',
    'Kim loại mạnh hơn (trừ K, Na, Ca) đẩy kim loại yếu hơn ra khỏi dung dịch muối.',
  ],
};
