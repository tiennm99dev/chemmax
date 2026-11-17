/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sự ăn mòn kim loại: khái niệm, ăn mòn hoá học và ăn mòn điện hoá, điều kiện xảy ra ăn mòn điện hoá, cơ chế gỉ sắt trong không khí ẩm và các phương pháp chống ăn mòn: bảo vệ bề mặt và phương pháp điện hoá.',
  intro:
    'Vỏ tàu biển bằng thép để lâu trong nước biển bị gỉ loang lổ, cánh cổng sắt để ngoài mưa nắng cũng dần gỉ nâu đỏ, đồ đồng lâu ngày phủ lớp gỉ xanh. Mỗi năm, một lượng rất lớn kim loại bị phá huỷ như vậy. Kim loại bị ăn mòn theo cơ chế nào, và làm thế nào để bảo vệ chúng?',
  objectives: [
    'Nêu được khái niệm ăn mòn kim loại.',
    'Phân biệt được ăn mòn hoá học và ăn mòn điện hoá; trình bày được điều kiện xảy ra ăn mòn điện hoá.',
    'Trình bày được cơ chế ăn mòn điện hoá của gang, thép trong không khí ẩm.',
    'Trình bày được các phương pháp chống ăn mòn kim loại: phương pháp bảo vệ bề mặt và phương pháp điện hoá.',
  ],
  sections: [
    {
      heading: 'Khái niệm ăn mòn kim loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ăn mòn kim loại',
          text: 'Ăn mòn kim loại là quá trình kim loại hoặc hợp kim bị phá huỷ do tác dụng của các chất trong môi trường; trong quá trình đó kim loại bị oxi hoá thành ion dương.',
        },
        { type: 'tex', tex: '\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne' },
        {
          type: 'p',
          text: 'Ví dụ: thép để lâu trong không khí ẩm bị gỉ màu nâu đỏ; đồ vật bằng đồng để lâu tạo lớp gỉ màu xanh. Có hai dạng ăn mòn: ăn mòn hoá học và ăn mòn điện hoá.',
        },
      ],
    },
    {
      heading: 'Ăn mòn hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ăn mòn hoá học',
          text: 'Ăn mòn hoá học là quá trình oxi hoá – khử, trong đó kim loại phản ứng trực tiếp với các chất oxi hoá trong môi trường; electron của kim loại chuyển trực tiếp sang chất oxi hoá, không phát sinh dòng điện.',
        },
        {
          type: 'p',
          text: 'Ăn mòn hoá học thường xảy ra ở những bộ phận thiết bị tiếp xúc với hơi nước, khí oxygen, khí chlorine ở nhiệt độ cao, như bộ phận của lò đốt, nồi hơi, ống xả của động cơ:',
        },
        {
          type: 'tex',
          tex: '3\\mathrm{Fe} + 2\\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{Fe_3O_4} \\qquad 2\\mathrm{Fe} + 3\\mathrm{Cl_2} \\xrightarrow{t^\\circ} 2\\mathrm{FeCl_3}',
        },
      ],
    },
    {
      heading: 'Ăn mòn điện hoá',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ăn mòn điện hoá',
          text: 'Ăn mòn điện hoá là quá trình oxi hoá – khử, trong đó kim loại bị ăn mòn do tác dụng của dung dịch chất điện li, tạo nên dòng electron chuyển dời từ cực âm (anode) đến cực dương (cathode), tức là có hình thành pin điện.',
        },
        {
          type: 'p',
          text: 'Thí nghiệm: nhúng hai thanh Zn và Cu (không tiếp xúc) vào cốc dung dịch $\\mathrm{H_2SO_4}$ loãng, khí $\\mathrm{H_2}$ thoát ra trên bề mặt thanh Zn. Nối hai thanh bằng dây dẫn qua một vôn kế: kim vôn kế lệch, thanh Zn bị ăn mòn nhanh hơn, khí $\\mathrm{H_2}$ thoát ra cả ở bề mặt thanh Cu.',
        },
        {
          type: 'list',
          items: [
            'Anode (cực âm), Zn bị oxi hoá: $\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$. Electron theo dây dẫn sang thanh Cu.',
            'Cathode (cực dương), ion $\\mathrm{H^+}$ bị khử trên bề mặt Cu: $2\\mathrm{H^+} + 2e \\longrightarrow \\mathrm{H_2}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Điều kiện xảy ra ăn mòn điện hoá',
          text: 'Ăn mòn điện hoá xảy ra khi có đủ ba điều kiện: (1) các điện cực khác nhau về bản chất (cặp hai kim loại khác nhau, hoặc kim loại với phi kim như Fe – C); (2) các điện cực tiếp xúc trực tiếp hoặc gián tiếp qua dây dẫn; (3) các điện cực cùng tiếp xúc với một dung dịch chất điện li. Thiếu một trong ba điều kiện thì không xảy ra ăn mòn điện hoá.',
        },
        {
          type: 'p',
          text: 'Ăn mòn gang, thép trong không khí ẩm là ăn mòn điện hoá. Trên bề mặt gang, thép có một lớp nước rất mỏng hoà tan $\\mathrm{O_2}$, $\\mathrm{CO_2}$, ... tạo thành dung dịch chất điện li. Sắt (anode) và carbon (tạp chất, cathode) tạo nên vô số pin điện nhỏ:',
        },
        {
          type: 'list',
          items: [
            'Ở anode: $\\mathrm{Fe} \\longrightarrow \\mathrm{Fe^{2+}} + 2e$.',
            'Ở cathode: $\\mathrm{O_2} + 2\\mathrm{H_2O} + 4e \\longrightarrow 4\\mathrm{OH^-}$.',
            'Ion $\\mathrm{Fe^{2+}}$ tiếp tục bị oxygen trong không khí oxi hoá, tạo gỉ sắt có thành phần chính là $\\mathrm{Fe_2O_3 \\cdot nH_2O}$.',
          ],
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Ăn mòn hoá học', 'Ăn mòn điện hoá'],
          rows: [
            [
              'Điều kiện',
              'kim loại tiếp xúc trực tiếp với chất oxi hoá (thường ở nhiệt độ cao)',
              'hai điện cực khác bản chất, tiếp xúc nhau, cùng trong dung dịch chất điện li',
            ],
            ['Dòng điện', 'không phát sinh dòng điện', 'có dòng electron từ anode sang cathode'],
            ['Tốc độ', 'thường chậm hơn', 'thường nhanh hơn, phổ biến hơn trong tự nhiên'],
          ],
        },
      ],
    },
    {
      heading: 'Chống ăn mòn kim loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương pháp bảo vệ bề mặt',
          text: 'Phủ lên bề mặt kim loại một lớp vật liệu bền, ngăn kim loại tiếp xúc trực tiếp với môi trường:',
        },
        {
          type: 'list',
          items: [
            'Phủ sơn, dầu, mỡ, chất dẻo: sơn cửa sắt, bôi mỡ lên chi tiết máy.',
            'Mạ hoặc tráng một kim loại khác: mạ vàng vỏ đồng hồ, tráng thiếc lên thép (sắt tây), tráng kẽm lên thép (tôn), mạ chromium, nickel.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương pháp điện hoá',
          text: 'Gắn vào kim loại cần bảo vệ một kim loại hoạt động hơn (có $E^\\circ$ nhỏ hơn). Kim loại hoạt động hơn đóng vai trò anode, bị ăn mòn thay; kim loại cần bảo vệ là cathode, không bị ăn mòn. Ví dụ: gắn các tấm kẽm vào phần vỏ tàu thép chìm dưới nước biển; các tấm kẽm phải được thay định kì.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Khi lớp phủ bị xước đến lớp sắt bên trong: với tôn (Zn phủ Fe), Zn là anode bị ăn mòn trước, sắt vẫn được bảo vệ; với sắt tây (Sn phủ Fe), Fe có $E^\\circ$ nhỏ hơn Sn nên Fe là anode, bị ăn mòn nhanh hơn cả khi không có lớp thiếc.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đinh sắt trong các môi trường',
    instruction:
      'Kéo thanh thời gian và so sánh sáu đinh sắt: trong không khí khô, trong nước đã đun sôi phủ dầu (không có oxygen), trong nước máy, trong nước muối, trong nước muối có quấn dây đồng và có quấn dây kẽm. Chọn từng ống để đọc giải thích; tìm ra ba điều kiện của ăn mòn điện hoá và cách bảo vệ sắt.',
  },
  examples: [
    {
      problem:
        'Một tấm tôn (thép tráng kẽm) và một tấm sắt tây (thép tráng thiếc) cùng bị xước sâu tới lớp thép và để ngoài không khí ẩm. Kim loại nào bị ăn mòn trước ở mỗi tấm? Giải thích.',
      steps: [
        'Chỗ xước tạo cặp hai kim loại tiếp xúc nhau trong lớp nước mỏng (dung dịch chất điện li): xảy ra ăn mòn điện hoá.',
        'Tôn: $E^\\circ_{\\mathrm{Zn^{2+}/Zn}} = -0{,}762$ V $< E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V nên Zn là anode, bị ăn mòn trước; thép được bảo vệ.',
        'Sắt tây: $E^\\circ_{\\mathrm{Fe^{2+}/Fe}} = -0{,}440$ V $< E^\\circ_{\\mathrm{Sn^{2+}/Sn}} = -0{,}137$ V nên Fe là anode, bị ăn mòn trước.',
      ],
      answer: 'Tôn: Zn bị ăn mòn trước. Sắt tây: Fe bị ăn mòn trước.',
    },
    {
      problem:
        'Nhúng một thanh sắt vào dung dịch $\\mathrm{HCl}$ loãng, sau đó nhỏ thêm vài giọt dung dịch $\\mathrm{CuSO_4}$. Khí thoát ra nhanh hơn. Giải thích.',
      steps: [
        'Ban đầu Fe tác dụng trực tiếp với $\\mathrm{H^+}$: ăn mòn hoá học, $\\mathrm{Fe} + 2\\mathrm{H^+} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{H_2}$.',
        'Khi thêm $\\mathrm{CuSO_4}$: $\\mathrm{Fe} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{Cu}$; Cu bám trên thanh sắt.',
        'Fe và Cu tiếp xúc trực tiếp, cùng trong dung dịch chất điện li: xuất hiện ăn mòn điện hoá. Fe là anode bị oxi hoá; $\\mathrm{H^+}$ nhận electron trên bề mặt Cu (cathode). Ăn mòn điện hoá xảy ra nhanh hơn nên khí thoát ra nhanh hơn.',
      ],
      answer: 'Có thêm ăn mòn điện hoá (pin Fe – Cu), nên sắt bị ăn mòn và khí thoát ra nhanh hơn.',
    },
    {
      problem:
        'Mỗi năm một tấm kẽm gắn ở vỏ tàu bị ăn mòn mất 1,3 kg Zn. Tính số mol electron mà kẽm đã nhường để bảo vệ vỏ tàu trong một năm. (Zn = 65)',
      steps: [
        'Ở anode: $\\mathrm{Zn} \\longrightarrow \\mathrm{Zn^{2+}} + 2e$.',
        '$n_{\\mathrm{Zn}} = \\dfrac{1\\,300}{65} = 20$ mol.',
        '$n_e = 2 \\cdot 20 = 40$ mol.',
      ],
      answer: '40 mol electron.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Bản chất của sự ăn mòn kim loại là',
      options: [
        'kim loại bị oxi hoá thành ion dương',
        'kim loại bị khử thành ion âm',
        'ion kim loại bị khử thành kim loại',
        'kim loại bị hoà tan vật lí trong nước',
      ],
      answer: 0,
      hints: ['Kim loại có tính khử; trong ăn mòn, kim loại nhường electron.'],
      solution:
        'Trong ăn mòn, kim loại bị oxi hoá: $\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne$.',
    },
    {
      type: 'multi',
      prompt: 'Những điều kiện nào cần có đồng thời để xảy ra ăn mòn điện hoá?',
      options: [
        'Các điện cực khác nhau về bản chất',
        'Các điện cực tiếp xúc trực tiếp hoặc qua dây dẫn',
        'Các điện cực cùng tiếp xúc với dung dịch chất điện li',
        'Nhiệt độ cao',
        'Có khí chlorine',
      ],
      answers: [0, 1, 2],
      hints: ['Ăn mòn điện hoá là hoạt động của một pin điện. Pin cần những gì?'],
      solution:
        'Ba điều kiện: hai điện cực khác bản chất, tiếp xúc nhau (trực tiếp hoặc qua dây dẫn), cùng tiếp xúc với dung dịch chất điện li. Nhiệt độ cao và khí chlorine liên quan tới ăn mòn hoá học.',
    },
    {
      type: 'choice',
      prompt: 'Trường hợp nào sau đây xảy ra ăn mòn điện hoá?',
      options: [
        'Thanh thép (Fe – C) để trong không khí ẩm',
        'Đốt dây sắt trong khí chlorine',
        'Thanh kẽm nhúng trong dung dịch $\\mathrm{HCl}$',
        'Ống xả bằng thép của động cơ bị oxi hoá ở nhiệt độ cao',
      ],
      answer: 0,
      hints: ['Tìm trường hợp có đủ hai điện cực khác bản chất và dung dịch chất điện li.'],
      solution:
        'Thép có Fe và C (hai điện cực khác bản chất, tiếp xúc trực tiếp) trong lớp nước ẩm hoà tan $\\mathrm{O_2}$, $\\mathrm{CO_2}$ (dung dịch chất điện li): ăn mòn điện hoá. Các trường hợp còn lại là ăn mòn hoá học.',
    },
    {
      type: 'choice',
      prompt:
        'Để bảo vệ vỏ tàu biển bằng thép theo phương pháp điện hoá, người ta gắn vào phần vỏ chìm dưới nước các tấm kim loại nào?',
      options: ['Zn', 'Cu', 'Sn', 'Pb'],
      answer: 0,
      hints: ['Kim loại gắn vào phải hoạt động mạnh hơn sắt để làm anode.'],
      solution:
        'Zn có $E^\\circ = -0{,}762$ V nhỏ hơn Fe ($-0{,}440$ V) nên Zn làm anode, bị ăn mòn thay cho vỏ tàu. Cu, Sn, Pb có $E^\\circ$ lớn hơn Fe nên sẽ làm sắt bị ăn mòn nhanh hơn.',
    },
    {
      type: 'multi',
      prompt:
        'Các cặp kim loại tiếp xúc với nhau và cùng nhúng trong dung dịch chất điện li. Ở những cặp nào sắt bị ăn mòn trước?',
      options: ['Fe – Cu', 'Fe – Sn', 'Fe – Zn', 'Fe – Mg', 'Fe – Ag'],
      answers: [0, 1, 4],
      hints: [
        'Kim loại có $E^\\circ$ nhỏ hơn là anode và bị ăn mòn trước.',
        '$E^\\circ$ (V): Mg $-2{,}356$; Zn $-0{,}762$; Fe $-0{,}440$; Sn $-0{,}137$; Cu $+0{,}340$; Ag $+0{,}799$.',
      ],
      solution:
        'Fe có $E^\\circ$ nhỏ hơn Cu, Sn, Ag nên Fe là anode, bị ăn mòn trước trong các cặp Fe – Cu, Fe – Sn, Fe – Ag. Với Zn và Mg, chính chúng bị ăn mòn trước.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi biện pháp với phương pháp chống ăn mòn tương ứng.',
      left: ['Sơn cánh cổng sắt', 'Gắn tấm kẽm vào vỏ tàu thép', 'Mạ chromium lên ghi đông xe đạp'],
      right: [
        'Bảo vệ bề mặt bằng lớp phủ không phải kim loại',
        'Phương pháp điện hoá',
        'Bảo vệ bề mặt bằng lớp kim loại khác',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Phương pháp nào dùng một kim loại bị ăn mòn thay?'],
      solution:
        'Sơn là lớp phủ bảo vệ bề mặt; tấm kẽm là anode hi sinh (phương pháp điện hoá); mạ chromium là phủ lớp kim loại bảo vệ bề mặt.',
    },
    {
      type: 'text',
      prompt:
        'Gỉ sắt có thành phần chính là oxide ngậm nước của sắt(III). Viết công thức của oxide sắt(III) trong gỉ sắt (không kể nước).',
      accept: ['Fe2O3', 'Fe₂O₃'],
      hints: ['Sắt có hoá trị III, oxygen có hoá trị II.'],
      solution:
        'Gỉ sắt có thành phần chính là $\\mathrm{Fe_2O_3 \\cdot nH_2O}$, oxide là $\\mathrm{Fe_2O_3}$.',
    },
    {
      type: 'number',
      prompt:
        'Trong ăn mòn điện hoá thép ở không khí ẩm, ở cathode xảy ra quá trình $\\mathrm{O_2} + 2\\mathrm{H_2O} + 4e \\longrightarrow 4\\mathrm{OH^-}$. Khi có 0,1 mol Fe bị oxi hoá thành $\\mathrm{Fe^{2+}}$ thì số mol $\\mathrm{O_2}$ bị khử ở cathode là bao nhiêu?',
      answer: 0.05,
      tolerance: 0.0001,
      unit: 'mol',
      hints: [
        '$\\mathrm{Fe} \\longrightarrow \\mathrm{Fe^{2+}} + 2e$: tính số mol electron.',
        'Mỗi mol $\\mathrm{O_2}$ nhận 4 mol electron.',
      ],
      solution:
        '$n_e = 2 \\cdot 0{,}1 = 0{,}2$ mol, $n_{\\mathrm{O_2}} = \\dfrac{0{,}2}{4} = 0{,}05$ mol.',
    },
  ],
  takeaways: [
    'Ăn mòn kim loại: kim loại, hợp kim bị phá huỷ do các chất trong môi trường, kim loại bị oxi hoá $\\mathrm{M} \\longrightarrow \\mathrm{M^{n+}} + ne$.',
    'Ăn mòn hoá học: electron chuyển trực tiếp sang chất oxi hoá, không phát sinh dòng điện.',
    'Ăn mòn điện hoá cần đủ ba điều kiện: hai điện cực khác bản chất, tiếp xúc nhau, cùng trong dung dịch chất điện li; kim loại có $E^\\circ$ nhỏ hơn là anode, bị ăn mòn.',
    'Gỉ sắt: $\\mathrm{Fe_2O_3 \\cdot nH_2O}$; ở cathode $\\mathrm{O_2} + 2\\mathrm{H_2O} + 4e \\longrightarrow 4\\mathrm{OH^-}$.',
    'Chống ăn mòn: bảo vệ bề mặt (sơn, dầu mỡ, mạ, tráng kim loại) và phương pháp điện hoá (gắn kim loại hoạt động hơn làm anode).',
  ],
};
