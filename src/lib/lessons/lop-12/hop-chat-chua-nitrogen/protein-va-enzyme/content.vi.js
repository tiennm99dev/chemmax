/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Protein và enzyme: khái niệm, cấu tạo và phân loại protein, tính chất vật lí (tính tan, sự đông tụ), tính chất hoá học (thuỷ phân, phản ứng màu biuret, phản ứng với nitric acid), vai trò của protein; khái niệm enzyme, tính chọn lọc, tốc độ xúc tác và ứng dụng của enzyme.',
  intro:
    'Khi luộc trứng, lòng trắng trong suốt biến thành khối trắng đục và không bao giờ trong trở lại. Cũng vì thế mà nấu chín thức ăn ở nhiệt độ cao lại giết được vi khuẩn. Cả hai hiện tượng đều do protein: nhiệt làm thay đổi cấu trúc không gian của nó. Các enzyme trong cơ thể cũng là protein, nên chúng chỉ làm việc tốt trong những điều kiện nhất định.',
  objectives: [
    'Nêu được khái niệm, đặc điểm cấu tạo và cách phân loại protein (protein đơn giản, protein phức tạp; dạng sợi, dạng cầu).',
    'Trình bày được tính chất vật lí của protein: tính tan, sự đông tụ khi đun nóng hoặc khi gặp acid, base, ion kim loại nặng.',
    'Trình bày được tính chất hoá học của protein: phản ứng thuỷ phân, phản ứng màu biuret, phản ứng với nitric acid đặc.',
    'Nêu được vai trò của protein đối với sự sống.',
    'Nêu được khái niệm enzyme, đặc điểm xúc tác của enzyme (tính chọn lọc, tốc độ lớn, điều kiện thích hợp) và một số ứng dụng.',
  ],
  sections: [
    {
      heading: 'Khái niệm và cấu tạo protein',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Protein',
          text: 'Protein là hợp chất cao phân tử được cấu tạo từ một hay nhiều chuỗi polypeptide. Mỗi chuỗi gồm các đơn vị α-amino acid liên kết với nhau bằng liên kết peptide theo một trật tự nhất định; phân tử khối của protein từ vài chục nghìn đến vài triệu.',
        },
        {
          type: 'list',
          items: [
            'Trình tự các gốc α-amino acid trong chuỗi quyết định tính chất của protein. Chuỗi polypeptide còn xoắn, gấp và cuộn lại, tạo nên cấu trúc không gian riêng của mỗi protein.',
            'Theo thành phần: protein đơn giản khi thuỷ phân chỉ tạo các α-amino acid; protein phức tạp được tạo thành từ protein đơn giản kết hợp với thành phần phi protein như nucleic acid, lipid, carbohydrate.',
            'Theo hình dạng: protein dạng sợi như keratin (tóc, móng), collagen (da, sụn), myosin (cơ); protein dạng cầu như hemoglobin (máu), albumin (lòng trắng trứng).',
          ],
        },
      ],
    },
    {
      heading: 'Tính chất vật lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Protein dạng sợi không tan trong nước và các dung môi thông thường. Protein dạng cầu tan được trong nước, tạo dung dịch keo.',
            'Khi đun nóng hoặc khi gặp acid, base, ion kim loại nặng (như $\\mathrm{Cu^{2+}}$, $\\mathrm{Pb^{2+}}$, $\\mathrm{Hg^{2+}}$), cấu trúc ban đầu của protein bị thay đổi, protein bị đông tụ và tách ra khỏi dung dịch.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Trong đời sống',
          text: 'Nấu canh cua, riêu cua nổi lên thành mảng nhờ protein đông tụ khi đun nóng. Ngộ độc kim loại nặng nguy hiểm vì các ion này làm đông tụ protein trong cơ thể; uống sữa hay lòng trắng trứng là cách sơ cứu tạm thời.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'list',
          items: [
            'Phản ứng thuỷ phân: protein bị thuỷ phân nhờ xúc tác acid, base hoặc enzyme, tạo các chuỗi polypeptide ngắn hơn và cuối cùng là các α-amino acid. Trong cơ thể, enzyme tiêu hoá thuỷ phân protein của thức ăn thành amino acid.',
            'Phản ứng màu biuret: protein (có rất nhiều liên kết peptide) phản ứng với $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm, tạo hợp chất màu tím đặc trưng.',
            'Phản ứng với nitric acid: nhỏ dung dịch $\\mathrm{HNO_3}$ đặc vào dung dịch lòng trắng trứng thấy xuất hiện chất rắn màu vàng, một phần do phản ứng nitro hoá vòng benzene trong các gốc amino acid có vòng thơm, một phần do protein bị đông tụ trong acid.',
          ],
        },
        { type: 'widget', name: 'thu-nghiem' },
        {
          type: 'p',
          text: 'Vai trò của protein: protein là thành phần cấu tạo nên tế bào và cơ thể; vận chuyển các chất (hemoglobin vận chuyển oxygen); điều hoà trao đổi chất (một số hormone); xúc tác cho phản ứng sinh hoá (enzyme); bảo vệ cơ thể (kháng thể); cung cấp các amino acid thiết yếu và năng lượng.',
        },
      ],
    },
    {
      heading: 'Enzyme',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Enzyme',
          text: 'Enzyme là những chất, hầu hết có bản chất là protein, có khả năng xúc tác cho các quá trình hoá học, đặc biệt là các quá trình sinh hoá trong cơ thể sinh vật. Tên enzyme thường có đuôi "-ase" gắn với tên cơ chất hoặc loại phản ứng: amylase, lipase, protease, maltase.',
        },
        {
          type: 'list',
          items: [
            'Tính chọn lọc cao: mỗi enzyme chỉ xúc tác cho một hoặc một số phản ứng nhất định. Cơ chất phải khớp với trung tâm hoạt động của enzyme, giống như chìa khoá khớp với ổ khoá. Ví dụ amylase xúc tác thuỷ phân tinh bột nhưng không thuỷ phân được protein.',
            'Tốc độ lớn: phản ứng có enzyme xúc tác xảy ra nhanh hơn rất nhiều so với cùng phản ứng dùng xúc tác hoá học.',
            'Điều kiện thích hợp: enzyme hoạt động tốt ở nhiệt độ gần thân nhiệt và ở pH thích hợp riêng (pepsin trong dạ dày hoạt động ở môi trường acid). Ở nhiệt độ cao, enzyme bị biến tính như các protein khác và mất hoạt tính.',
          ],
        },
        {
          type: 'p',
          text: 'Ứng dụng của enzyme trong công nghệ sinh học: công nghiệp thực phẩm (sản xuất, bảo quản, chế biến thực phẩm như làm bánh mì, bia, phomat, nước tương), y dược (enzyme thay thế, enzyme hỗ trợ tiêu hoá, xúc tác tổng hợp thuốc), công nghệ gene (tạo ra hoặc sửa đổi thông tin di truyền); ngoài ra còn dùng trong bột giặt sinh học.',
        },
      ],
    },
  ],
  explore: {
    title: 'Enzyme và cơ chất: khoá và chìa',
    instruction:
      'Chọn enzyme và cơ chất, rồi kéo thanh nhiệt độ và pH. Quan sát cơ chất có khớp với trung tâm hoạt động không và tốc độ phản ứng thay đổi thế nào. Đun quá $60$ °C rồi hạ nhiệt độ xuống để thấy enzyme đã biến tính không hoạt động lại.',
  },
  examples: [
    {
      problem:
        'Bằng thí nghiệm, hãy phân biệt ba dung dịch: lòng trắng trứng, glycine và Gly-Ala-Gly.',
      steps: [
        'Đun nóng ba mẫu: mẫu bị đông tụ là lòng trắng trứng; peptide ngắn và amino acid không đông tụ.',
        'Nhỏ $\\mathrm{Cu(OH)_2}$ trong môi trường kiềm vào hai mẫu còn lại: Gly-Ala-Gly có hai liên kết peptide nên xuất hiện màu tím.',
        'Mẫu không có màu tím là glycine (amino acid không có liên kết peptide).',
      ],
      answer:
        'Đun nóng nhận ra lòng trắng trứng, sau đó dùng phản ứng màu biuret tách Gly-Ala-Gly khỏi glycine.',
    },
    {
      problem:
        'Một protein X có chứa $0{,}4\\%$ sulfur về khối lượng. Biết mỗi phân tử X chứa $2$ nguyên tử sulfur, tính phân tử khối gần đúng của X.',
      steps: [
        'Khối lượng sulfur trong một mol X: $2 \\cdot 32 = 64$ g.',
        'Ta có $\\dfrac{64}{M_X} = 0{,}004$.',
        '$M_X = \\dfrac{64}{0{,}004} = 16\\,000$.',
      ],
      answer: 'Phân tử khối của X khoảng $16\\,000$.',
    },
    {
      problem:
        'Thuỷ phân hoàn toàn $500$ g một protein X thu được $178$ g alanine. Phân tử khối của X là $50\\,000$. Tính số mắt xích alanine trong một phân tử X.',
      steps: [
        '$n_X = \\dfrac{500}{50\\,000} = 0{,}01$ mol.',
        '$n_{\\text{alanine}} = \\dfrac{178}{89} = 2$ mol.',
        'Số mắt xích alanine: $\\dfrac{2}{0{,}01} = 200$.',
      ],
      answer: 'Mỗi phân tử X có $200$ mắt xích alanine.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Khi nhỏ dung dịch $\\mathrm{HNO_3}$ đặc vào dung dịch lòng trắng trứng, hiện tượng quan sát được là',
      options: [
        'xuất hiện chất rắn màu vàng',
        'xuất hiện màu tím đặc trưng',
        'xuất hiện kết tủa trắng',
        'dung dịch chuyển sang màu xanh lam',
      ],
      answer: 0,
      hints: ['Nitric acid đặc nitro hoá vòng benzene trong một số gốc amino acid.'],
      solution:
        'Lòng trắng trứng tạo chất rắn màu vàng với $\\mathrm{HNO_3}$ đặc. Màu tím là phản ứng màu biuret với $\\mathrm{Cu(OH)_2}$/NaOH.',
    },
    {
      type: 'multi',
      prompt: 'Những yếu tố nào làm protein bị đông tụ?',
      options: [
        'Đun nóng',
        'Thêm acid',
        'Thêm ion kim loại nặng như $\\mathrm{Pb^{2+}}$',
        'Thêm nước cất',
        'Để ở nhiệt độ phòng',
      ],
      answers: [0, 1, 2],
      hints: ['Đông tụ xảy ra khi cấu trúc ban đầu của protein bị thay đổi.'],
      solution:
        'Nhiệt, acid, base và ion kim loại nặng làm thay đổi cấu trúc của protein nên gây đông tụ. Pha loãng bằng nước cất hay để ở nhiệt độ phòng không gây đông tụ.',
    },
    {
      type: 'multi',
      prompt: 'Những protein nào thuộc loại protein dạng sợi?',
      options: [
        'Keratin (tóc, móng)',
        'Albumin (lòng trắng trứng)',
        'Collagen (da, sụn)',
        'Hemoglobin (máu)',
        'Myosin (cơ)',
      ],
      answers: [0, 2, 4],
      hints: ['Protein dạng sợi không tan trong nước; protein dạng cầu tan tạo dung dịch keo.'],
      solution:
        'Keratin, collagen và myosin là protein dạng sợi; albumin và hemoglobin là protein dạng cầu.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về enzyme là đúng?',
      options: [
        'Mỗi enzyme chỉ xúc tác cho một hoặc một số phản ứng nhất định.',
        'Enzyme hoạt động càng mạnh khi nhiệt độ càng cao.',
        'Enzyme xúc tác chậm hơn xúc tác hoá học thông thường.',
        'Mọi enzyme đều hoạt động tốt nhất ở cùng một pH.',
      ],
      answer: 0,
      hints: ['Hầu hết enzyme là protein: nhiệt độ cao làm protein bị biến tính.'],
      solution:
        'Enzyme có tính chọn lọc cao và xúc tác rất nhanh. Ở nhiệt độ cao enzyme bị biến tính; mỗi enzyme có pH thích hợp riêng (pepsin hoạt động trong môi trường acid của dạ dày).',
    },
    {
      type: 'number',
      prompt:
        'Thuỷ phân hoàn toàn $1\\,000$ g một protein X thu được $225$ g glycine. Biết phân tử khối của X là $100\\,000$, tính số mắt xích glycine trong một phân tử X.',
      answer: 300,
      hints: ['Tính số mol X và số mol glycine ($M = 75$).', 'Số mắt xích bằng tỉ số hai số mol.'],
      solution:
        '$n_X = \\dfrac{1\\,000}{100\\,000} = 0{,}01$ mol; $n_{\\text{Gly}} = \\dfrac{225}{75} = 3$ mol; số mắt xích $= \\dfrac{3}{0{,}01} = 300$.',
    },
    {
      type: 'number',
      prompt:
        'Hemoglobin chứa $0{,}34\\%$ sắt về khối lượng, mỗi phân tử chứa $4$ nguyên tử Fe. Tính phân tử khối gần đúng của hemoglobin (làm tròn đến hàng trăm).',
      answer: 65900,
      tolerance: 100,
      hints: [
        'Khối lượng sắt trong một mol hemoglobin là $4 \\cdot 56$ g.',
        '$M = \\dfrac{4 \\cdot 56}{0{,}0034}$.',
      ],
      solution: '$M = \\dfrac{224}{0{,}0034} \\approx 65\\,882 \\approx 65\\,900$.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào sau đây có phản ứng màu biuret?',
      options: ['Lòng trắng trứng', 'Glycine', 'Gly-Ala', 'Aniline'],
      answer: 0,
      hints: ['Phản ứng màu biuret cần từ hai liên kết peptide trở lên.'],
      solution:
        'Protein trong lòng trắng trứng có rất nhiều liên kết peptide nên cho màu tím với $\\mathrm{Cu(OH)_2}$/NaOH. Glycine không có, Gly-Ala chỉ có một liên kết peptide, aniline không có liên kết peptide.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo thứ tự quá trình thuỷ phân protein trong cơ thể.',
      items: ['Protein', 'Polypeptide ngắn hơn', 'Dipeptide, tripeptide', 'α-amino acid'],
      answer: [0, 1, 2, 3],
      hints: ['Mỗi bước thuỷ phân cắt bớt liên kết peptide, chuỗi ngắn dần.'],
      solution: 'Protein → các polypeptide ngắn hơn → dipeptide, tripeptide → α-amino acid.',
    },
  ],
  takeaways: [
    'Protein là hợp chất cao phân tử gồm một hay nhiều chuỗi polypeptide; có protein đơn giản và protein phức tạp, dạng sợi và dạng cầu.',
    'Protein bị đông tụ khi đun nóng hoặc gặp acid, base, ion kim loại nặng.',
    'Protein bị thuỷ phân đến α-amino acid, cho màu tím với $\\mathrm{Cu(OH)_2}$/NaOH và chất rắn màu vàng với $\\mathrm{HNO_3}$ đặc.',
    'Enzyme hầu hết là protein, xúc tác cho phản ứng sinh hoá với tính chọn lọc cao và tốc độ lớn; enzyme cần nhiệt độ và pH thích hợp, bị biến tính ở nhiệt độ cao.',
  ],
};
