/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hydrogen halide và hydrohalic acid: cấu tạo, nhiệt độ sôi, tính acid; muối halide, tính khử của ion halide và cách nhận biết ion halide bằng dung dịch silver nitrate.',
  intro:
    'Dạ dày người tiết ra hydrochloric acid, thợ thủ công dùng hydrofluoric acid để khắc chữ lên thuỷ tinh, còn muối ăn là muối halide quen thuộc nhất. Có bốn dung dịch muối không màu đựng trong bốn lọ mất nhãn, làm thế nào để biết lọ nào chứa ion nào chỉ bằng một thuốc thử?',
  objectives: [
    'Giải thích được nhiệt độ sôi bất thường của HF và xu hướng tăng từ HCl đến HI.',
    'Nêu được xu hướng tăng tính acid từ HF đến HI và tính chất riêng của hydrofluoric acid.',
    'Viết được phương trình thể hiện tính khử của ion halide, so sánh tính khử $\\mathrm{Cl^-} < \\mathrm{Br^-} < \\mathrm{I^-}$.',
    'Nhận biết được các ion halide bằng dung dịch $\\mathrm{AgNO_3}$.',
    'Nêu được một số ứng dụng của hydrogen halide và muối halide.',
  ],
  sections: [
    {
      heading: 'Hydrogen halide',
      blocks: [
        {
          type: 'p',
          text: 'Hydrogen halide là hợp chất của hydrogen với halogen, gồm HF, HCl, HBr, HI. Mỗi phân tử có một liên kết cộng hoá trị phân cực, cặp electron chung lệch về phía nguyên tử halogen.',
        },
        {
          type: 'table',
          caption:
            'Một số đặc điểm của các hydrogen halide (năng lượng liên kết của HF, HBr, HI theo tài liệu tham khảo, có thể lệch vài kJ/mol so với sách)',
          head: [
            'Chất',
            'Độ dài liên kết (pm)',
            'Năng lượng liên kết (kJ/mol)',
            'Nhiệt độ sôi (°C)',
          ],
          rows: [
            ['HF', '$92$', '$567$', '$20$'],
            ['HCl', '$127$', '$431$', '$-85$'],
            ['HBr', '$141$', '$366$', '$-67$'],
            ['HI', '$161$', '$299$', '$-35$'],
          ],
        },
        {
          type: 'list',
          items: [
            'Ở điều kiện thường, các hydrogen halide là chất khí và tan tốt trong nước.',
            'Từ HCl đến HI, nhiệt độ sôi tăng dần, do khối lượng phân tử và tương tác van der Waals tăng.',
            'HF có nhiệt độ sôi cao bất thường, vì phân tử phân cực mạnh và tạo được liên kết hydrogen với nhau.',
          ],
        },
      ],
    },
    {
      heading: 'Hydrohalic acid',
      blocks: [
        {
          type: 'p',
          text: 'Hydrogen halide tan trong nước tạo dung dịch acid, gọi chung là hydrohalic acid: hydrofluoric acid (HF), hydrochloric acid (HCl), hydrobromic acid (HBr), hydroiodic acid (HI).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính acid tăng dần từ HF đến HI',
          text: 'Từ H–F đến H–I, liên kết dài ra và kém bền dần, nguyên tử H càng dễ tách ra dưới dạng ion $\\mathrm{H^+}$. HF là acid yếu; HCl, HBr, HI là các acid mạnh, trong đó HI mạnh nhất.',
        },
        {
          type: 'p',
          text: 'Các hydrohalic acid có đầy đủ tính chất của acid. Chẳng hạn, hydrochloric acid hoà tan kim loại đứng trước hydrogen trong dãy hoạt động, nhưng không hoà tan Cu, Ag, Au:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}',
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl_2} + \\mathrm{CO_2} + \\mathrm{H_2O}',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Hydrofluoric acid ăn mòn thuỷ tinh',
          text: 'Tuy là acid yếu, HF hoà tan được silicon dioxide trong thuỷ tinh: $\\mathrm{SiO_2} + 4\\mathrm{HF} \\rightarrow \\mathrm{SiF_4} + 2\\mathrm{H_2O}$. Vì vậy không đựng HF trong bình thuỷ tinh. HF cũng rất độc và gây bỏng sâu.',
        },
      ],
    },
    {
      heading: 'Muối halide và tính khử của ion halide',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn muối halide dễ tan trong nước. Một số muối không tan hoặc ít tan: $\\mathrm{AgCl}$, $\\mathrm{AgBr}$, $\\mathrm{AgI}$ không tan; $\\mathrm{PbCl_2}$, $\\mathrm{PbBr_2}$ ít tan.',
        },
        {
          type: 'p',
          text: 'Trong ion halide, nguyên tử halogen có số oxi hoá thấp nhất là $-1$, nên chỉ có thể nhường electron. Ion $\\mathrm{F^-}$ gần như không thể hiện tính khử. Từ $\\mathrm{Cl^-}$ đến $\\mathrm{I^-}$, bán kính ion tăng, electron càng dễ bị tách ra nên tính khử tăng dần.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thứ tự tính khử',
          text: '$\\mathrm{Cl^-} < \\mathrm{Br^-} < \\mathrm{I^-}$.',
        },
        {
          type: 'p',
          text: 'Sulfuric acid đặc làm rõ sự khác nhau này. Chọn từng muối và dự đoán lưu huỳnh bị khử đến đâu:',
        },
        { type: 'widget', name: 'tinh-khu' },
        {
          type: 'p',
          text: 'Trong dung dịch, ion chloride cũng thể hiện tính khử khi gặp chất oxi hoá mạnh, như trong phản ứng điều chế chlorine: $\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}$.',
        },
      ],
    },
    {
      heading: 'Nhận biết ion halide',
      blocks: [
        {
          type: 'p',
          text: 'Dung dịch silver nitrate là thuốc thử phân biệt các ion halide trong dung dịch, dựa vào màu của kết tủa silver halide:',
        },
        {
          type: 'table',
          caption: 'Hiện tượng khi nhỏ dung dịch $\\mathrm{AgNO_3}$ vào dung dịch chứa ion halide',
          head: ['Ion', 'Hiện tượng', 'Chất tạo thành'],
          rows: [
            ['$\\mathrm{F^-}$', 'Không có kết tủa', 'AgF tan trong nước'],
            ['$\\mathrm{Cl^-}$', 'Kết tủa trắng', '$\\mathrm{AgCl}$'],
            ['$\\mathrm{Br^-}$', 'Kết tủa vàng nhạt', '$\\mathrm{AgBr}$'],
            ['$\\mathrm{I^-}$', 'Kết tủa vàng', '$\\mathrm{AgI}$'],
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{NaCl} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgCl}\\downarrow + \\mathrm{NaNO_3}',
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Hydrofluoric acid: khắc chữ, hoa văn lên thuỷ tinh; sản xuất teflon; hỗn hợp $\\mathrm{KF \\cdot 3HF}$ được điện phân nóng chảy để sản xuất fluorine.',
            'Hydrochloric acid: tẩy gỉ sắt thép, sản xuất nhiều hợp chất vô cơ và hữu cơ, tái sinh nhựa trao đổi ion trong sản xuất nước đóng chai.',
            'Muối ăn NaCl: cân bằng điện giải trong cơ thể, bảo quản thực phẩm, pha nước muối sinh lí, nguyên liệu sản xuất xút, chlorine, nước Javel.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nhỏ silver nitrate, tìm ion halide',
    instruction:
      'Bốn ống đựng dung dịch không màu, mỗi ống chứa một ion halide. Nhỏ $\\mathrm{AgNO_3}$ vào từng ống, so sánh kết tủa rồi chọn ion cho mỗi ống. Bấm “Đổi mẫu” để thử lại với thứ tự khác.',
  },
  examples: [
    {
      problem:
        'Bằng phương pháp hoá học, hãy phân biệt ba dung dịch mất nhãn: NaCl, NaBr, NaI. Viết phương trình phản ứng.',
      steps: [
        'Lấy mẫu thử rồi nhỏ dung dịch $\\mathrm{AgNO_3}$ vào từng mẫu.',
        'Mẫu cho kết tủa trắng là NaCl: $\\mathrm{NaCl} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgCl}\\downarrow + \\mathrm{NaNO_3}$.',
        'Mẫu cho kết tủa vàng nhạt là NaBr: $\\mathrm{NaBr} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgBr}\\downarrow + \\mathrm{NaNO_3}$.',
        'Mẫu cho kết tủa vàng là NaI: $\\mathrm{NaI} + \\mathrm{AgNO_3} \\rightarrow \\mathrm{AgI}\\downarrow + \\mathrm{NaNO_3}$.',
      ],
      answer: 'Dùng dung dịch $\\mathrm{AgNO_3}$, phân biệt theo màu kết tủa.',
    },
    {
      problem:
        'Cho $10$ g hỗn hợp bột Zn và Cu tác dụng với dung dịch HCl dư, thu được $2{,}479$ L khí $\\mathrm{H_2}$ ở điều kiện chuẩn. Tính phần trăm khối lượng Zn trong hỗn hợp. Biết $M_{\\mathrm{Zn}} = 65$ g/mol, ở điều kiện chuẩn $1$ mol khí chiếm $24{,}79$ L.',
      steps: [
        'Cu không tác dụng với dung dịch HCl, chỉ Zn phản ứng: $\\mathrm{Zn} + 2\\mathrm{HCl} \\rightarrow \\mathrm{ZnCl_2} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{H_2}} = \\dfrac{2{,}479}{24{,}79} = 0{,}1$ mol, nên $n_{\\mathrm{Zn}} = 0{,}1$ mol.',
        '$m_{\\mathrm{Zn}} = 0{,}1 \\cdot 65 = 6{,}5$ g, nên $\\%m_{\\mathrm{Zn}} = \\dfrac{6{,}5}{10} \\cdot 100\\% = 65\\%$.',
      ],
      answer: '$\\%m_{\\mathrm{Zn}} = 65\\%$.',
    },
    {
      problem:
        'Vì sao trong phòng thí nghiệm có thể điều chế khí HCl bằng cách đun NaCl rắn với $\\mathrm{H_2SO_4}$ đặc, nhưng không điều chế HBr bằng NaBr theo cách đó?',
      steps: [
        'Với NaCl, ion $\\mathrm{Cl^-}$ có tính khử yếu, không khử được $\\mathrm{H_2SO_4}$ đặc, nên chỉ xảy ra phản ứng trao đổi: $\\mathrm{NaCl} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{NaHSO_4} + \\mathrm{HCl}$.',
        'Với NaBr, ion $\\mathrm{Br^-}$ có tính khử mạnh hơn, bị $\\mathrm{H_2SO_4}$ đặc oxi hoá: $2\\mathrm{NaBr} + 3\\mathrm{H_2SO_4} \\rightarrow 2\\mathrm{NaHSO_4} + \\mathrm{Br_2} + \\mathrm{SO_2} + 2\\mathrm{H_2O}$.',
      ],
      answer: 'Vì $\\mathrm{Br^-}$ bị oxi hoá thành $\\mathrm{Br_2}$, nên không thu được HBr.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong các hydrogen halide, chất nào có nhiệt độ sôi cao nhất?',
      options: ['HF', 'HCl', 'HBr', 'HI'],
      answer: 0,
      hints: ['Chất nào tạo được liên kết hydrogen giữa các phân tử?'],
      solution:
        'HF có nhiệt độ sôi cao nhất ($20\\,^\\circ\\mathrm{C}$) vì các phân tử tạo được liên kết hydrogen với nhau.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các acid theo tính acid tăng dần.',
      items: ['HBr', 'HF', 'HI', 'HCl'],
      answer: [1, 3, 0, 2],
      hints: ['Liên kết H–X càng kém bền thì H càng dễ tách ra.'],
      solution:
        'Năng lượng liên kết giảm từ H–F đến H–I, nên tính acid tăng: $\\mathrm{HF} < \\mathrm{HCl} < \\mathrm{HBr} < \\mathrm{HI}$.',
    },
    {
      type: 'choice',
      prompt: 'Acid nào được dùng để khắc chữ lên thuỷ tinh?',
      options: ['Hydrochloric acid', 'Hydrofluoric acid', 'Hydrobromic acid', 'Sulfuric acid'],
      answer: 1,
      hints: ['Thành phần chính của thuỷ tinh là $\\mathrm{SiO_2}$.'],
      solution:
        '$\\mathrm{SiO_2} + 4\\mathrm{HF} \\rightarrow \\mathrm{SiF_4} + 2\\mathrm{H_2O}$: chỉ hydrofluoric acid hoà tan được $\\mathrm{SiO_2}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ion với hiện tượng khi nhỏ dung dịch $\\mathrm{AgNO_3}$ vào.',
      left: ['$\\mathrm{F^-}$', '$\\mathrm{Cl^-}$', '$\\mathrm{Br^-}$', '$\\mathrm{I^-}$'],
      right: ['Không có kết tủa', 'Kết tủa trắng', 'Kết tủa vàng nhạt', 'Kết tủa vàng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Muối silver fluoride tan trong nước; màu kết tủa đậm dần từ chloride đến iodide.'],
      solution:
        '$\\mathrm{F^-}$: không kết tủa. $\\mathrm{Cl^-}$: trắng. $\\mathrm{Br^-}$: vàng nhạt. $\\mathrm{I^-}$: vàng.',
    },
    {
      type: 'multi',
      prompt: 'Dung dịch HCl loãng tác dụng được với những chất nào?',
      options: ['Zn', 'Cu', '$\\mathrm{CaCO_3}$', 'Ag', 'NaOH'],
      answers: [0, 2, 4],
      hints: ['Kim loại phải đứng trước hydrogen trong dãy hoạt động.'],
      solution:
        'Zn đứng trước H nên tác dụng; $\\mathrm{CaCO_3}$ là muối carbonate, NaOH là base, đều tác dụng với acid. Cu và Ag đứng sau H nên không tác dụng.',
    },
    {
      type: 'choice',
      prompt:
        'Cho muối rắn tác dụng với $\\mathrm{H_2SO_4}$ đặc. Muối nào có thể tạo ra khí $\\mathrm{H_2S}$?',
      options: ['NaF', 'NaCl', 'NaBr', 'NaI'],
      answer: 3,
      hints: ['Để đưa S từ $+6$ xuống $-2$ cần ion có tính khử mạnh nhất.'],
      solution:
        'Ion $\\mathrm{I^-}$ có tính khử mạnh nhất: $8\\mathrm{NaI} + 9\\mathrm{H_2SO_4} \\rightarrow 8\\mathrm{NaHSO_4} + 4\\mathrm{I_2} + \\mathrm{H_2S} + 4\\mathrm{H_2O}$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{MnO_2} + 4\\mathrm{HCl} \\xrightarrow{t^\\circ} \\mathrm{MnCl_2} + \\mathrm{Cl_2} + 2\\mathrm{H_2O}$, vai trò của HCl là',
      options: ['Chất oxi hoá', 'Chất khử và môi trường', 'Chỉ là môi trường', 'Chất xúc tác'],
      answer: 1,
      hints: ['Đếm số nguyên tử Cl đổi số oxi hoá và số nguyên tử Cl không đổi.'],
      solution:
        'Trong $4$ phân tử HCl, $2$ nguyên tử Cl lên số oxi hoá $0$ trong $\\mathrm{Cl_2}$ (chất khử), $2$ nguyên tử Cl còn lại vẫn là $-1$ trong $\\mathrm{MnCl_2}$ (môi trường).',
    },
    {
      type: 'number',
      prompt:
        'Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch chứa $5{,}85$ g NaCl. Tính khối lượng kết tủa. Biết $M_{\\mathrm{NaCl}} = 58{,}5$ g/mol, $M_{\\mathrm{AgCl}} = 143{,}5$ g/mol.',
      answer: 14.35,
      tolerance: 0.01,
      unit: 'g',
      hints: ['$\\mathrm{NaCl}$ và $\\mathrm{AgCl}$ có cùng số mol.'],
      solution:
        '$n_{\\mathrm{NaCl}} = \\dfrac{5{,}85}{58{,}5} = 0{,}1$ mol, nên $m_{\\mathrm{AgCl}} = 0{,}1 \\cdot 143{,}5 = 14{,}35$ g.',
    },
    {
      type: 'number',
      prompt:
        'Hỗn hợp NaF và NaCl có khối lượng $10$ g. Nhỏ dung dịch $\\mathrm{AgNO_3}$ dư vào dung dịch hỗn hợp, thu được $14{,}35$ g kết tủa. Tính phần trăm khối lượng NaCl trong hỗn hợp. Biết $M_{\\mathrm{NaCl}} = 58{,}5$ g/mol, $M_{\\mathrm{AgCl}} = 143{,}5$ g/mol.',
      answer: 58.5,
      tolerance: 0.05,
      unit: '%',
      hints: [
        'NaF không tạo kết tủa với $\\mathrm{AgNO_3}$.',
        'Kết tủa chỉ có AgCl, $M = 143{,}5$ g/mol.',
      ],
      solution:
        '$n_{\\mathrm{AgCl}} = \\dfrac{14{,}35}{143{,}5} = 0{,}1$ mol, nên $m_{\\mathrm{NaCl}} = 0{,}1 \\cdot 58{,}5 = 5{,}85$ g. Phần trăm NaCl là $\\dfrac{5{,}85}{10} \\cdot 100\\% = 58{,}5\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan hoàn toàn $5{,}6$ g Fe trong dung dịch HCl dư. Tính thể tích khí $\\mathrm{H_2}$ sinh ra ở điều kiện chuẩn. Biết $M_{\\mathrm{Fe}} = 56$ g/mol.',
      answer: 2.479,
      tolerance: 0.005,
      unit: 'L',
      hints: [
        '$\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl_2} + \\mathrm{H_2}$.',
        'Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{Fe}} = 0{,}1$ mol, nên $n_{\\mathrm{H_2}} = 0{,}1$ mol và $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
  ],
  takeaways: [
    'HF có nhiệt độ sôi cao bất thường do liên kết hydrogen; từ HCl đến HI, nhiệt độ sôi tăng dần.',
    'Tính acid tăng từ HF đến HI; HF là acid yếu nhưng ăn mòn thuỷ tinh.',
    'Tính khử của ion halide: $\\mathrm{Cl^-} < \\mathrm{Br^-} < \\mathrm{I^-}$.',
    'Nhận biết bằng $\\mathrm{AgNO_3}$: $\\mathrm{F^-}$ không kết tủa, $\\mathrm{Cl^-}$ trắng, $\\mathrm{Br^-}$ vàng nhạt, $\\mathrm{I^-}$ vàng.',
  ],
};
