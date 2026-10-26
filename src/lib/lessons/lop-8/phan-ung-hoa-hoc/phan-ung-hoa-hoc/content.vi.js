/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Biến đổi vật lí giữ nguyên chất ban đầu, biến đổi hoá học tạo ra chất mới. Phản ứng hoá học là quá trình biến đổi chất này thành chất khác: liên kết giữa các nguyên tử thay đổi nhưng số nguyên tử mỗi nguyên tố giữ nguyên. Phản ứng có thể toả nhiệt hoặc thu nhiệt.',
  intro:
    'Một chiếc đinh sắt mới sáng bóng, để lâu ngoài không khí ẩm thì phủ một lớp gỉ nâu đỏ. Một cục nước đá để ngoài trời thì tan thành nước. Cả hai đều là sự biến đổi, nhưng chỉ một trong hai tạo ra chất mới. Bài này giúp em phân biệt hai loại biến đổi đó và nhìn vào bên trong một phản ứng hoá học.',
  objectives: [
    'Nêu được khái niệm sự biến đổi vật lí, biến đổi hoá học; phân biệt được hai loại biến đổi qua ví dụ.',
    'Nêu được khái niệm phản ứng hoá học, chất phản ứng (chất đầu) và sản phẩm; viết được phương trình chữ.',
    'Trình bày được diễn biến của phản ứng hoá học: chỉ có liên kết giữa các nguyên tử thay đổi.',
    'Nêu được dấu hiệu chứng tỏ có phản ứng hoá học xảy ra.',
    'Nêu được khái niệm và ví dụ về phản ứng toả nhiệt, thu nhiệt và ứng dụng của phản ứng toả nhiệt.',
  ],
  sections: [
    {
      heading: 'Biến đổi vật lí và biến đổi hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Nước đá tan thành nước lỏng, nước lỏng bay hơi rồi ngưng tụ lại: trong suốt quá trình, chất vẫn là nước. Còn khi đun nóng đường, đường chuyển dần thành chất màu đen (than) và hơi nước: chất ban đầu đã biến thành chất khác.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến đổi vật lí',
          text: 'Hiện tượng chất biến đổi mà vẫn giữ nguyên là chất ban đầu được gọi là sự biến đổi vật lí. Thường chỉ có thể, hình dạng hoặc kích thước của chất thay đổi.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến đổi hoá học',
          text: 'Hiện tượng chất biến đổi có tạo ra chất khác được gọi là sự biến đổi hoá học.',
        },
        {
          type: 'table',
          caption: 'Một số ví dụ',
          head: ['Biến đổi vật lí', 'Biến đổi hoá học'],
          rows: [
            ['Nước đá tan thành nước lỏng', 'Đinh sắt bị gỉ'],
            ['Hoà tan muối ăn vào nước', 'Đốt cháy cồn, than, gas'],
            ['Cồn bay hơi khi mở nắp lọ', 'Đun đường hoá thành than'],
            ['Cưa gỗ thành mùn cưa', 'Thức ăn bị ôi thiu'],
          ],
        },
        { type: 'widget', name: 'bien-doi' },
      ],
    },
    {
      heading: 'Phản ứng hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng hoá học',
          text: 'Quá trình biến đổi từ chất này thành chất khác được gọi là phản ứng hoá học. Chất ban đầu bị biến đổi trong phản ứng gọi là chất phản ứng (hay chất tham gia, chất đầu); chất mới sinh ra gọi là sản phẩm.',
        },
        {
          type: 'p',
          text: 'Phản ứng hoá học được ghi bằng phương trình chữ: tên các chất phản ứng ở bên trái, tên các sản phẩm ở bên phải, nối bằng mũi tên. Dấu “+” giữa các chất phản ứng đọc là “tác dụng với” hoặc “phản ứng với”, giữa các sản phẩm đọc là “và”.',
        },
        {
          type: 'tex',
          tex: '\\text{Iron} + \\text{Sulfur} \\longrightarrow \\text{Iron(II) sulfide}',
        },
        {
          type: 'p',
          text: 'Đọc là: sắt tác dụng với lưu huỳnh tạo ra iron(II) sulfide. Trong quá trình phản ứng, lượng chất phản ứng giảm dần, lượng sản phẩm tăng dần.',
        },
      ],
    },
    {
      heading: 'Diễn biến của phản ứng hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Xét phản ứng giữa khí hydrogen và khí oxygen tạo ra nước. Trước phản ứng có các phân tử $\\mathrm{H_2}$ và $\\mathrm{O_2}$; liên kết trong các phân tử này bị phá vỡ, rồi các nguyên tử H và O liên kết lại theo cách khác, tạo thành các phân tử $\\mathrm{H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Diễn biến của phản ứng',
          text: 'Trong phản ứng hoá học chỉ có liên kết giữa các nguyên tử thay đổi làm cho phân tử này biến đổi thành phân tử khác. Số nguyên tử của mỗi nguyên tố trước và sau phản ứng được giữ nguyên.',
        },
        {
          type: 'list',
          items: [
            'Trước phản ứng: $2$ phân tử $\\mathrm{H_2}$ và $1$ phân tử $\\mathrm{O_2}$ ($4$ nguyên tử H, $2$ nguyên tử O).',
            'Trong phản ứng: liên kết H–H và O=O bị phá vỡ.',
            'Sau phản ứng: $2$ phân tử $\\mathrm{H_2O}$, vẫn là $4$ nguyên tử H và $2$ nguyên tử O.',
          ],
        },
      ],
    },
    {
      heading: 'Khi nào phản ứng xảy ra và dấu hiệu nhận biết',
      blocks: [
        {
          type: 'list',
          items: [
            'Các chất phản ứng phải được tiếp xúc với nhau; diện tích tiếp xúc càng lớn, phản ứng càng dễ xảy ra.',
            'Nhiều phản ứng cần đun nóng đến một nhiệt độ nhất định (than, cồn chỉ cháy khi được mồi lửa).',
            'Có phản ứng cần chất xúc tác: chất làm phản ứng xảy ra nhanh hơn nhưng không bị biến đổi khi phản ứng kết thúc.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dấu hiệu có phản ứng hoá học xảy ra',
          text: 'Dựa vào dấu hiệu có chất mới tạo thành, có tính chất khác chất ban đầu: thay đổi màu sắc, tạo ra chất khí (sủi bọt), tạo ra chất kết tủa (chất rắn không tan), có sự toả nhiệt hoặc phát sáng.',
        },
        {
          type: 'p',
          text: 'Ví dụ: đinh sắt ngâm trong dung dịch copper(II) sulfate màu xanh lam được phủ lớp đồng màu đỏ, dung dịch nhạt màu dần; cho viên kẽm vào dung dịch hydrochloric acid thấy sủi bọt khí.',
        },
      ],
    },
    {
      heading: 'Năng lượng của phản ứng hoá học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng toả nhiệt',
          text: 'Phản ứng toả nhiệt là phản ứng giải phóng năng lượng dưới dạng nhiệt ra môi trường. Ví dụ: phản ứng đốt cháy than, xăng, dầu, cồn, khí gas; phản ứng giữa vôi sống và nước.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản ứng thu nhiệt',
          text: 'Phản ứng thu nhiệt là phản ứng nhận năng lượng dưới dạng nhiệt từ môi trường. Ví dụ: phản ứng nung đá vôi, phản ứng phân huỷ thuốc tím khi đun nóng. Khi ngừng cung cấp nhiệt, phản ứng thu nhiệt thường dừng lại.',
        },
        {
          type: 'p',
          text: 'Phản ứng đốt cháy nhiên liệu toả nhiều nhiệt nên được dùng để đun nấu, sưởi ấm, chạy động cơ, phát điện ở nhà máy nhiệt điện, nung gạch, luyện kim…',
        },
        { type: 'widget', name: 'nhiet' },
      ],
    },
  ],
  explore: {
    title: 'Bên trong phản ứng hoá học',
    instruction:
      'Chọn một phản ứng rồi bấm “Chạy hoạt cảnh”, kéo thanh “Diễn biến phản ứng” hoặc dùng nút “Bước sau”. Quan sát liên kết bị phá vỡ, các nguyên tử sắp xếp lại thành phân tử mới, và đếm số nguyên tử mỗi nguyên tố trước và sau phản ứng.',
  },
  examples: [
    {
      problem:
        'Hiện tượng nào là biến đổi vật lí, hiện tượng nào là biến đổi hoá học? (a) Thanh sắt được rèn thành con dao. (b) Con dao sắt để lâu bị gỉ.',
      steps: [
        'Hỏi: sau biến đổi có chất mới không?',
        '(a) Sắt chỉ đổi hình dạng, con dao vẫn là sắt: không có chất mới.',
        '(b) Gỉ sắt màu nâu đỏ là chất khác sắt: có chất mới tạo thành.',
      ],
      answer: '(a) là biến đổi vật lí; (b) là biến đổi hoá học.',
    },
    {
      problem:
        'Đốt cháy cồn (ethanol) trong không khí, cồn tác dụng với oxygen tạo ra khí carbon dioxide và nước. Chỉ ra chất phản ứng, sản phẩm và viết phương trình chữ.',
      steps: [
        'Chất ban đầu bị biến đổi: ethanol và oxygen. Đó là các chất phản ứng.',
        'Chất mới sinh ra: carbon dioxide và nước. Đó là các sản phẩm.',
        'Viết chất phản ứng bên trái, sản phẩm bên phải mũi tên.',
      ],
      answer: 'Ethanol + Oxygen → Carbon dioxide + Nước.',
    },
    {
      problem:
        'Trong phản ứng $\\mathrm{H_2}$ với $\\mathrm{Cl_2}$ tạo ra $\\mathrm{HCl}$, có $1$ phân tử $\\mathrm{H_2}$ và $1$ phân tử $\\mathrm{Cl_2}$ phản ứng vừa hết. Liên kết nào thay đổi? Tạo ra bao nhiêu phân tử $\\mathrm{HCl}$?',
      steps: [
        'Trước phản ứng: liên kết H–H trong $\\mathrm{H_2}$ và Cl–Cl trong $\\mathrm{Cl_2}$; có $2$ nguyên tử H và $2$ nguyên tử Cl.',
        'Hai liên kết này bị phá vỡ; mỗi nguyên tử H liên kết với một nguyên tử Cl.',
        'Số nguyên tử giữ nguyên: $2$ H và $2$ Cl tạo được $2$ phân tử $\\mathrm{HCl}$.',
      ],
      answer:
        'Liên kết H–H và Cl–Cl bị phá vỡ, liên kết H–Cl được tạo thành; có $2$ phân tử $\\mathrm{HCl}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hiện tượng nào sau đây là biến đổi hoá học?',
      options: [
        'Thuỷ tinh nóng chảy được thổi thành bình cầu.',
        'Sáp nến nóng chảy rồi đông đặc lại.',
        'Sữa để lâu bị chua.',
        'Nước trong ao bay hơi khi trời nắng.',
      ],
      answer: 2,
      hints: ['Tìm hiện tượng có chất mới sinh ra.'],
      solution:
        'Sữa bị chua là do tạo thành chất mới có vị chua: biến đổi hoá học. Ba hiện tượng còn lại chỉ thay đổi thể hoặc hình dạng: biến đổi vật lí.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biến đổi vật lí.',
      options: [
        'Hoà tan đường vào nước.',
        'Đốt cháy tờ giấy.',
        'Nghiền gạo thành bột gạo.',
        'Đinh sắt bị gỉ.',
        'Nước đá tan thành nước lỏng.',
      ],
      answers: [0, 2, 4],
      hints: ['Biến đổi vật lí: chất vẫn giữ nguyên là chất ban đầu.'],
      solution:
        'Đường tan trong nước, bột gạo và nước lỏng vẫn là đường, gạo, nước: biến đổi vật lí. Giấy cháy và sắt gỉ tạo ra chất mới: biến đổi hoá học.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng: Zinc + Hydrochloric acid → Zinc chloride + Hydrogen, các chất sản phẩm là',
      options: [
        'zinc và hydrochloric acid',
        'zinc chloride và hydrogen',
        'zinc và hydrogen',
        'hydrochloric acid và zinc chloride',
      ],
      answer: 1,
      hints: ['Sản phẩm là chất mới sinh ra, đứng bên phải mũi tên.'],
      solution:
        'Sản phẩm là zinc chloride và hydrogen; zinc và hydrochloric acid là chất phản ứng.',
    },
    {
      type: 'choice',
      prompt: 'Trong một phản ứng hoá học, điều gì thay đổi?',
      options: [
        'Số nguyên tử của mỗi nguyên tố.',
        'Liên kết giữa các nguyên tử.',
        'Khối lượng của mỗi nguyên tử.',
        'Loại nguyên tố có mặt.',
      ],
      answer: 1,
      hints: ['Nhớ lại hoạt cảnh: các nguyên tử có mất đi hay sinh thêm không?'],
      solution:
        'Chỉ có liên kết giữa các nguyên tử thay đổi; số nguyên tử, loại nguyên tố và khối lượng mỗi nguyên tử giữ nguyên.',
    },
    {
      type: 'number',
      prompt:
        'Khí methane cháy: $1$ phân tử $\\mathrm{CH_4}$ phản ứng với $2$ phân tử $\\mathrm{O_2}$ tạo ra $1$ phân tử $\\mathrm{CO_2}$ và một số phân tử $\\mathrm{H_2O}$. Có bao nhiêu phân tử $\\mathrm{H_2O}$ được tạo thành?',
      answer: 2,
      unit: 'phân tử',
      hints: [
        'Số nguyên tử mỗi nguyên tố được giữ nguyên.',
        'Đếm số nguyên tử H trước phản ứng; mỗi phân tử $\\mathrm{H_2O}$ có $2$ nguyên tử H.',
      ],
      solution:
        'Trước phản ứng có $4$ nguyên tử H (trong $\\mathrm{CH_4}$). Mỗi phân tử $\\mathrm{H_2O}$ có $2$ H nên có $4 : 2 = 2$ phân tử $\\mathrm{H_2O}$. Kiểm tra O: $2 \\cdot 2 = 4$ trước, $2 + 2 = 4$ sau.',
    },
    {
      type: 'multi',
      prompt: 'Dấu hiệu nào cho biết có phản ứng hoá học xảy ra?',
      options: [
        'Có chất khí sủi bọt sinh ra.',
        'Có chất kết tủa xuất hiện.',
        'Chất rắn chuyển sang thể lỏng.',
        'Màu sắc của chất thay đổi.',
        'Có sự phát sáng, toả nhiệt.',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Dấu hiệu phải cho thấy có chất mới tạo thành.'],
      solution:
        'Tạo chất khí, kết tủa, đổi màu, toả nhiệt hay phát sáng là dấu hiệu có phản ứng. Chuyển từ rắn sang lỏng (nóng chảy) chỉ là biến đổi vật lí.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phản ứng toả nhiệt.',
      options: [
        'Đốt than để nấu ăn.',
        'Nung đá vôi thành vôi sống.',
        'Cho vôi sống tác dụng với nước.',
        'Đun nóng thuốc tím để thu khí oxygen.',
        'Đốt khí gas.',
      ],
      answers: [0, 2, 4],
      hints: ['Phản ứng cần đun nóng liên tục mới xảy ra là phản ứng nhận nhiệt từ môi trường.'],
      solution:
        'Đốt than, đốt gas và tôi vôi giải phóng nhiệt: toả nhiệt. Nung đá vôi và phân huỷ thuốc tím cần được cung cấp nhiệt liên tục: thu nhiệt.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng toả nhiệt được ứng dụng nhiều nhất trong đời sống để',
      options: [
        'làm lạnh thực phẩm',
        'cung cấp nhiệt để đun nấu, sưởi ấm, chạy động cơ',
        'làm tan nước đá',
        'tách muối ra khỏi nước biển bằng gió',
      ],
      answer: 1,
      hints: ['Phản ứng đốt cháy nhiên liệu toả nhiều nhiệt.'],
      solution:
        'Nhiệt từ phản ứng đốt cháy nhiên liệu (than, gas, xăng, dầu) dùng để đun nấu, sưởi ấm, chạy động cơ, phát điện.',
    },
  ],
  takeaways: [
    'Biến đổi vật lí: chất vẫn giữ nguyên là chất ban đầu. Biến đổi hoá học: có chất mới tạo thành.',
    'Phản ứng hoá học là quá trình biến đổi chất này thành chất khác; chất phản ứng → sản phẩm, ghi bằng phương trình chữ.',
    'Trong phản ứng chỉ có liên kết giữa các nguyên tử thay đổi; số nguyên tử mỗi nguyên tố giữ nguyên.',
    'Dấu hiệu có phản ứng: đổi màu, tạo khí, tạo kết tủa, toả nhiệt, phát sáng.',
    'Phản ứng toả nhiệt giải phóng nhiệt ra môi trường (đốt nhiên liệu); phản ứng thu nhiệt nhận nhiệt từ môi trường (nung đá vôi).',
  ],
};
