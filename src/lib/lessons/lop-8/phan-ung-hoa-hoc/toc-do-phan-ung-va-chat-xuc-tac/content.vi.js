/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tốc độ phản ứng cho biết phản ứng hoá học xảy ra nhanh hay chậm. Tăng nồng độ, tăng nhiệt độ, tăng diện tích bề mặt tiếp xúc của chất tham gia hoặc dùng chất xúc tác đều làm tốc độ phản ứng tăng. Chất xúc tác làm tăng tốc độ phản ứng nhưng vẫn giữ nguyên về chất và lượng khi phản ứng kết thúc.',
  intro:
    'Cồn bén lửa là cháy bùng ngay, còn một chiếc đinh sắt để ngoài trời ẩm phải nhiều ngày mới gỉ. Cùng là phản ứng hoá học, vì sao có phản ứng xảy ra trong nháy mắt, có phản ứng kéo dài hàng tháng? Ta có thể làm cho một phản ứng nhanh hơn hay chậm đi không? Bài này giúp em trả lời các câu hỏi đó.',
  objectives: [
    'Nêu được khái niệm tốc độ phản ứng; so sánh được tốc độ của một số phản ứng quen thuộc.',
    'Trình bày được ảnh hưởng của nồng độ, nhiệt độ, diện tích bề mặt tiếp xúc và chất xúc tác đến tốc độ phản ứng qua thí nghiệm.',
    'Nêu được khái niệm chất xúc tác.',
    'Giải thích được một số ứng dụng trong đời sống dựa vào các yếu tố ảnh hưởng đến tốc độ phản ứng.',
  ],
  sections: [
    {
      heading: 'Tốc độ phản ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tốc độ phản ứng',
          text: 'Tốc độ phản ứng là đại lượng đặc trưng cho sự nhanh hay chậm của một phản ứng hoá học.',
        },
        {
          type: 'table',
          caption: 'Một số phản ứng nhanh và phản ứng chậm',
          head: ['Phản ứng xảy ra nhanh', 'Phản ứng xảy ra chậm'],
          rows: [
            ['Đốt cháy cồn, khí gas, than, củi', 'Sắt bị gỉ trong không khí ẩm'],
            ['Pháo hoa nổ', 'Lên men gạo nếp thành rượu nếp'],
            ['Viên C sủi tan trong nước, sủi bọt khí', 'Thức ăn bị ôi thiu'],
          ],
        },
        {
          type: 'p',
          text: 'Để so sánh tốc độ của hai phản ứng, ta theo dõi sự thay đổi lượng một chất trong cùng một khoảng thời gian: thể tích khí thoát ra, khối lượng chất rắn tan đi, hay thời gian xuất hiện kết tủa. Trong cùng một khoảng thời gian, phản ứng nào tạo ra nhiều khí hơn (hoặc tiêu tốn nhiều chất hơn) thì xảy ra nhanh hơn.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Với phản ứng có chất khí thoát ra, có thể so sánh tốc độ bằng mắt qua mức độ sủi bọt khí: bọt khí thoát ra càng nhanh, càng mạnh thì phản ứng càng nhanh.',
        },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến tốc độ phản ứng',
      blocks: [
        {
          type: 'p',
          text: 'Trong mỗi thí nghiệm dưới đây, hai ống nghiệm (hoặc hai cốc) chỉ khác nhau ở đúng một yếu tố, các điều kiện khác giữ nguyên. Nhờ vậy ta biết chắc sự khác nhau về tốc độ là do yếu tố đó gây ra.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nồng độ',
          text: 'Cho hai đinh sắt giống nhau vào ống (1) chứa khoảng $5$ mL dung dịch HCl $0{,}1$ M và ống (2) chứa khoảng $5$ mL dung dịch HCl $1$ M. Ở ống (2), bọt khí hydrogen thoát ra nhanh hơn. Khi tăng nồng độ chất tham gia, tốc độ phản ứng tăng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhiệt độ',
          text: 'Thả cùng lúc hai viên C sủi giống nhau vào một cốc nước lạnh và một cốc nước nóng. Viên trong cốc nước nóng sủi bọt mạnh hơn và tan hết trước. Khi tăng nhiệt độ, tốc độ phản ứng tăng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Diện tích bề mặt tiếp xúc',
          text: 'Cho khoảng $1$ g đá vôi dạng bột vào ống (1) và khoảng $1$ g đá vôi dạng viên vào ống (2), rồi thêm vào mỗi ống khoảng $3$ mL dung dịch HCl $0{,}1$ M. Ống chứa đá vôi bột sủi bọt khí carbon dioxide nhanh hơn. Kích thước hạt càng nhỏ, diện tích bề mặt tiếp xúc càng lớn, tốc độ phản ứng càng lớn.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{CaCl_2} + \\mathrm{CO_2}\\uparrow + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Các yếu tố trên làm phản ứng xảy ra nhanh hơn, nhưng không làm tăng lượng sản phẩm cuối cùng: với cùng lượng đá vôi và cùng lượng acid, dù đá vôi ở dạng bột hay dạng viên, khi phản ứng kết thúc vẫn thu được cùng một lượng khí $\\mathrm{CO_2}$.',
        },
      ],
    },
    {
      heading: 'Chất xúc tác',
      blocks: [
        {
          type: 'p',
          text: 'Cho khoảng $3$ mL dung dịch $\\mathrm{H_2O_2}$ $3\\%$ (nước oxi già) vào hai ống nghiệm. Thêm một ít bột manganese dioxide $\\mathrm{MnO_2}$ vào ống (2). Ống (1) gần như không thấy bọt khí, còn ống (2) sủi bọt khí oxygen rất mạnh. Khi phản ứng kết thúc, bột $\\mathrm{MnO_2}$ màu đen vẫn còn nguyên ở đáy ống.',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{H_2O_2} \\xrightarrow{\\ \\mathrm{MnO_2}\\ } 2\\mathrm{H_2O} + \\mathrm{O_2}\\uparrow',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất xúc tác',
          text: 'Chất xúc tác là chất làm tăng tốc độ phản ứng nhưng vẫn được giữ nguyên về chất và lượng khi kết thúc phản ứng.',
        },
        {
          type: 'p',
          text: 'Chất xúc tác thường được ghi trên mũi tên của phương trình hoá học. Ví dụ, trong sản xuất sulfuric acid, sulfur dioxide được chuyển thành sulfur trioxide nhờ chất xúc tác vanadium(V) oxide:',
        },
        {
          type: 'tex',
          tex: '2\\mathrm{SO_2} + \\mathrm{O_2} \\xrightarrow{\\ t^\\circ,\\ \\mathrm{V_2O_5}\\ } 2\\mathrm{SO_3}',
        },
        {
          type: 'list',
          items: [
            'Chất xúc tác được dùng rộng rãi trong công nghiệp hoá chất để phản ứng xảy ra nhanh hơn, tiết kiệm thời gian và năng lượng.',
            'Trong cơ thể sống, các enzyme là chất xúc tác sinh học: enzyme trong nước bọt giúp tinh bột được tiêu hoá nhanh hơn; enzyme trong men giúp lên men cơm nếp thành rượu nếp.',
          ],
        },
      ],
    },
    {
      heading: 'Vận dụng trong đời sống',
      blocks: [
        {
          type: 'list',
          items: [
            'Quạt gió vào bếp than: tăng nồng độ oxygen nên than cháy mạnh hơn.',
            'Bảo quản thực phẩm trong tủ lạnh: nhiệt độ thấp làm chậm các phản ứng gây ôi thiu; nấu bằng nồi áp suất thì thức ăn nhanh chín vì nhiệt độ cao hơn.',
            'Chẻ nhỏ củi, đập nhỏ đá vôi trước khi nung: tăng diện tích bề mặt tiếp xúc nên phản ứng nhanh hơn.',
            'Dùng men để ủ rượu, làm bánh mì: enzyme trong men là chất xúc tác.',
          ],
        },
        {
          type: 'p',
          text: 'Xếp mỗi ví dụ dưới đây vào yếu tố đã làm thay đổi tốc độ phản ứng.',
        },
        { type: 'widget', name: 'yeu-to' },
      ],
    },
  ],
  explore: {
    title: 'Thí nghiệm so sánh tốc độ phản ứng',
    instruction:
      'Chọn phản ứng đá vôi với HCl hoặc phân huỷ nước oxi già. Đặt nồng độ, nhiệt độ, dạng đá vôi hoặc chất xúc tác rồi bấm “Tiến hành thí nghiệm”: quan sát bọt khí, ống đong khí và đồ thị thể tích khí theo thời gian. Đổi đúng một yếu tố rồi làm lại để so sánh với đường nét đứt của lần trước.',
  },
  examples: [
    {
      problem:
        'Cho cùng một lượng đá vôi vào hai ống nghiệm chứa dung dịch HCl ở cùng nhiệt độ. Sau $20$ giây, ống (1) thu được $30$ mL khí $\\mathrm{CO_2}$, ống (2) thu được $12$ mL khí. Phản ứng ở ống nào nhanh hơn? Trung bình mỗi giây, ống (1) thu được bao nhiêu mililít khí?',
      steps: [
        'Hai ống được theo dõi trong cùng một khoảng thời gian $20$ giây.',
        'Ống (1) thu được nhiều khí hơn ($30$ mL $> 12$ mL) nên phản ứng ở ống (1) nhanh hơn.',
        'Trung bình mỗi giây ống (1) thu được $30 : 20 = 1{,}5$ mL khí.',
      ],
      answer: 'Phản ứng ở ống (1) nhanh hơn; trung bình $1{,}5$ mL khí mỗi giây.',
    },
    {
      problem:
        'Giải thích vì sao: a) muốn nhóm bếp củi nhanh, người ta chẻ nhỏ củi và quạt gió vào bếp; b) thức ăn để trong tủ lạnh lâu bị ôi thiu hơn để ngoài trời nóng.',
      steps: [
        'a) Củi chẻ nhỏ có diện tích bề mặt tiếp xúc với oxygen lớn hơn; quạt gió đưa thêm không khí, làm tăng nồng độ oxygen. Cả hai đều làm phản ứng cháy xảy ra nhanh hơn.',
        'b) Sự ôi thiu là các phản ứng hoá học trong thức ăn. Trong tủ lạnh nhiệt độ thấp nên các phản ứng này xảy ra chậm hơn.',
      ],
      answer:
        'a) Tăng diện tích bề mặt tiếp xúc và nồng độ oxygen. b) Giảm nhiệt độ làm chậm phản ứng gây ôi thiu.',
    },
    {
      problem:
        'Trong công nghiệp, phản ứng $2\\mathrm{SO_2} + \\mathrm{O_2} \\to 2\\mathrm{SO_3}$ xảy ra nhanh hơn khi có mặt vanadium(V) oxide. a) $\\mathrm{V_2O_5}$ đóng vai trò gì? b) Sau phản ứng, khối lượng $\\mathrm{V_2O_5}$ có thay đổi không?',
      steps: [
        '$\\mathrm{V_2O_5}$ làm phản ứng xảy ra nhanh hơn nhưng không có trong chất tham gia hay sản phẩm của phương trình.',
        'Vậy $\\mathrm{V_2O_5}$ là chất xúc tác.',
        'Chất xúc tác được giữ nguyên về chất và lượng khi kết thúc phản ứng, nên khối lượng $\\mathrm{V_2O_5}$ không đổi.',
      ],
      answer: 'a) Chất xúc tác. b) Khối lượng $\\mathrm{V_2O_5}$ không thay đổi.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tốc độ phản ứng là đại lượng đặc trưng cho',
      options: [
        'lượng sản phẩm tạo thành sau phản ứng',
        'sự nhanh hay chậm của phản ứng hoá học',
        'nhiệt lượng toả ra của phản ứng',
        'số chất tham gia phản ứng',
      ],
      answer: 1,
      hints: ['Đốt cồn và sắt bị gỉ khác nhau ở điểm nào?'],
      solution:
        'Tốc độ phản ứng là đại lượng đặc trưng cho sự nhanh hay chậm của một phản ứng hoá học.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào sau đây xảy ra nhanh nhất?',
      options: [
        'Đinh sắt bị gỉ trong không khí ẩm',
        'Cồn cháy trong không khí',
        'Cơm nếp lên men thành rượu nếp',
        'Thức ăn bị ôi thiu',
      ],
      answer: 1,
      hints: ['Phản ứng nào kết thúc trong vài giây, phản ứng nào mất nhiều giờ hoặc nhiều ngày?'],
      solution:
        'Cồn cháy gần như ngay lập tức khi bén lửa; sắt gỉ, lên men và ôi thiu kéo dài hàng giờ đến hàng ngày.',
    },
    {
      type: 'multi',
      prompt: 'Cho đinh sắt vào dung dịch HCl. Những cách nào làm phản ứng xảy ra nhanh hơn?',
      options: [
        'Dùng dung dịch HCl $1$ M thay cho HCl $0{,}1$ M.',
        'Đun nóng ống nghiệm.',
        'Thay đinh sắt bằng bột sắt có cùng khối lượng.',
        'Ngâm ống nghiệm vào cốc nước đá.',
        'Pha loãng dung dịch HCl bằng nước.',
      ],
      answers: [0, 1, 2],
      hints: [
        'Nhớ lại ba yếu tố: nồng độ, nhiệt độ, diện tích bề mặt tiếp xúc.',
        'Làm lạnh và pha loãng làm thay đổi theo chiều nào?',
      ],
      solution:
        'Tăng nồng độ HCl, tăng nhiệt độ và dùng bột sắt (diện tích bề mặt tiếp xúc lớn hơn) đều làm phản ứng nhanh hơn. Ngâm nước đá (giảm nhiệt độ) và pha loãng (giảm nồng độ) làm phản ứng chậm đi.',
    },
    {
      type: 'number',
      prompt:
        'Theo dõi phản ứng của kẽm với dung dịch HCl, sau $40$ giây thu được $50$ mL khí hydrogen. Trung bình mỗi giây thu được bao nhiêu mililít khí?',
      answer: 1.25,
      tolerance: 0.001,
      hints: ['Chia thể tích khí cho thời gian theo dõi.'],
      solution: 'Trung bình mỗi giây thu được $50 : 40 = 1{,}25$ mL khí hydrogen.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}5$ g bột $\\mathrm{MnO_2}$ vào $10$ mL dung dịch $\\mathrm{H_2O_2}$. Khi hết sủi bọt, lọc lấy chất rắn, rửa sạch và làm khô rồi cân. Khối lượng chất rắn cân được là bao nhiêu gam?',
      answer: 0.5,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$\\mathrm{MnO_2}$ đóng vai trò gì trong phản ứng phân huỷ $\\mathrm{H_2O_2}$?',
        'Chất xúc tác thay đổi thế nào về lượng sau phản ứng?',
      ],
      solution:
        '$\\mathrm{MnO_2}$ là chất xúc tác, được giữ nguyên về chất và lượng khi kết thúc phản ứng, nên vẫn cân được $0{,}5$ g.',
    },
    {
      type: 'text',
      prompt:
        'Chất làm tăng tốc độ phản ứng nhưng vẫn được giữ nguyên về chất và lượng khi kết thúc phản ứng được gọi là gì?',
      accept: ['chất xúc tác', 'xúc tác'],
      hints: ['$\\mathrm{MnO_2}$ trong phản ứng phân huỷ nước oxi già là một ví dụ.'],
      solution: 'Đó là chất xúc tác.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi việc làm với yếu tố làm thay đổi tốc độ phản ứng trong việc đó.',
      left: [
        'Dùng khí oxygen tinh khiết thay cho không khí trong đèn xì hàn kim loại',
        'Muối dưa vào ngày nóng thì dưa nhanh chua hơn',
        'Dùng than tổ ong có nhiều lỗ thay cho than cục',
        'Enzyme trong nước bọt giúp tiêu hoá tinh bột',
      ],
      right: ['Nồng độ', 'Nhiệt độ', 'Diện tích bề mặt tiếp xúc', 'Chất xúc tác'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Không khí chỉ có khoảng $21\\%$ thể tích là oxygen.',
        'Các lỗ trên viên than làm tăng phần than tiếp xúc với không khí.',
      ],
      solution:
        'Oxygen tinh khiết: tăng nồng độ oxygen. Ngày nóng: nhiệt độ cao. Than tổ ong nhiều lỗ: diện tích bề mặt tiếp xúc lớn. Enzyme: chất xúc tác sinh học.',
    },
    {
      type: 'order',
      prompt:
        'Cho cùng một khối lượng sắt vào cùng một thể tích dung dịch HCl trong bốn điều kiện sau. Sắp xếp theo tốc độ phản ứng từ chậm nhất đến nhanh nhất.',
      items: [
        'Bột sắt, HCl $1$ M, $50\\,^\\circ\\mathrm{C}$',
        'Đinh sắt, HCl $0{,}1$ M, $25\\,^\\circ\\mathrm{C}$',
        'Đinh sắt, HCl $1$ M, $50\\,^\\circ\\mathrm{C}$',
        'Đinh sắt, HCl $1$ M, $25\\,^\\circ\\mathrm{C}$',
      ],
      answer: [1, 3, 2, 0],
      hints: [
        'Tìm hai điều kiện chỉ khác nhau ở một yếu tố rồi so sánh từng cặp.',
        'Đi từ HCl $0{,}1$ M lên $1$ M, rồi tăng nhiệt độ, rồi thay đinh bằng bột.',
      ],
      solution:
        'Đinh, $0{,}1$ M, $25\\,^\\circ\\mathrm{C}$ chậm nhất. Tăng nồng độ lên $1$ M thì nhanh hơn; tăng thêm nhiệt độ lên $50\\,^\\circ\\mathrm{C}$ thì nhanh hơn nữa; thay đinh bằng bột (diện tích tiếp xúc lớn hơn) thì nhanh nhất.',
    },
    {
      type: 'choice',
      prompt:
        'Cho $1$ g đá vôi dạng viên và $1$ g đá vôi dạng bột vào hai cốc chứa cùng một lượng dung dịch HCl dư. Khi đá vôi phản ứng hết, so sánh thể tích khí $\\mathrm{CO_2}$ thu được ở hai cốc.',
      options: [
        'Cốc đá vôi bột thu được nhiều khí hơn.',
        'Cốc đá vôi viên thu được nhiều khí hơn.',
        'Hai cốc thu được thể tích khí bằng nhau.',
        'Cốc đá vôi bột không tạo ra khí.',
      ],
      answer: 2,
      hints: ['Dạng bột làm phản ứng nhanh hơn. Nhưng lượng khí tạo ra phụ thuộc vào điều gì?'],
      solution:
        'Cùng $1$ g đá vôi và acid dư nên đá vôi phản ứng hết ở cả hai cốc, tạo ra cùng một lượng $\\mathrm{CO_2}$. Dạng bột chỉ làm khí thoát ra nhanh hơn.',
    },
    {
      type: 'choice',
      prompt:
        'Bạn An muốn chứng minh nhiệt độ ảnh hưởng đến tốc độ phản ứng của viên C sủi với nước. Cách làm nào hợp lí?',
      options: [
        'Thả một viên vào cốc nước lạnh và nửa viên vào cốc nước nóng.',
        'Thả hai viên giống nhau vào hai cốc nước giống nhau, một cốc nước lạnh, một cốc nước nóng.',
        'Thả một viên vào cốc nước lạnh và một viên đã nghiền nhỏ vào cốc nước nóng.',
        'Thả hai viên giống nhau vào cùng một cốc nước nóng.',
      ],
      answer: 1,
      hints: ['Hai cốc chỉ được khác nhau ở đúng một yếu tố.'],
      solution:
        'Chỉ để nhiệt độ khác nhau, giữ nguyên lượng nước và dạng viên C sủi. Các cách khác đổi thêm lượng chất hoặc diện tích bề mặt tiếp xúc, hoặc không có gì để so sánh.',
    },
  ],
  takeaways: [
    'Tốc độ phản ứng là đại lượng đặc trưng cho sự nhanh hay chậm của phản ứng hoá học; so sánh bằng lượng chất thay đổi trong cùng một khoảng thời gian.',
    'Tăng nồng độ, tăng nhiệt độ, tăng diện tích bề mặt tiếp xúc của chất tham gia thì tốc độ phản ứng tăng.',
    'Chất xúc tác làm tăng tốc độ phản ứng nhưng vẫn được giữ nguyên về chất và lượng khi kết thúc phản ứng, ví dụ $\\mathrm{MnO_2}$, $\\mathrm{V_2O_5}$, enzyme.',
    'Các yếu tố này làm phản ứng nhanh hơn, không làm tăng lượng sản phẩm cuối cùng.',
  ],
};
