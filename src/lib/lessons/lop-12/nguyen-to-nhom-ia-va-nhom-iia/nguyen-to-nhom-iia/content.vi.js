/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kim loại nhóm IIA có cấu hình ns2, số oxi hoá +2, tính khử mạnh tăng từ Be đến Ba; độ tan của hydroxide tăng, của sulfate giảm từ Mg đến Ba; hợp chất của calcium và ứng dụng; nước cứng tạm thời, vĩnh cửu, toàn phần và các phương pháp làm mềm nước cứng.',
  intro:
    'Ấm đun nước lâu ngày đóng một lớp cặn trắng, xà phòng giặt bằng nước giếng khoan ít bọt, còn trong hang động đá vôi, nhũ đá mọc dài từng milimét qua hàng trăm năm. Tất cả đều liên quan tới calcium, một kim loại nhóm IIA, và tới "nước cứng".',
  objectives: [
    'Nêu được trạng thái tự nhiên, cấu hình electron và xu hướng biến đổi tính chất của kim loại nhóm IIA.',
    'Viết được phương trình phản ứng của kim loại nhóm IIA với nước, oxygen; nêu được xu hướng độ tan của hydroxide và muối sulfate.',
    'Trình bày được tính chất, ứng dụng của một số hợp chất calcium: $\\mathrm{CaCO_3}$, CaO, $\\mathrm{Ca(OH)_2}$, $\\mathrm{CaSO_4}$.',
    'Phân biệt được nước cứng tạm thời, vĩnh cửu, toàn phần; nêu được tác hại và các phương pháp làm mềm nước cứng.',
  ],
  sections: [
    {
      heading: 'Đặc điểm và tính chất vật lí',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm IIA gồm beryllium (Be), magnesium (Mg), calcium (Ca), strontium (Sr), barium (Ba) và radium (Ra, phóng xạ). Đây là các nguyên tố s, nguyên tử có 2 electron hoá trị ở phân lớp $ns^2$; trong hợp chất chúng có số oxi hoá đặc trưng $+2$:',
        },
        { type: 'tex', tex: '\\mathrm{M} \\longrightarrow \\mathrm{M^{2+}} + 2e' },
        {
          type: 'p',
          text: 'Trong tự nhiên, chúng chỉ tồn tại ở dạng hợp chất. Magnesium và calcium phổ biến nhất, có trong các khoáng vật dolomite ($\\mathrm{MgCO_3.CaCO_3}$), calcite ($\\mathrm{CaCO_3}$), phosphorite ($\\mathrm{Ca_3(PO_4)_2}$).',
        },
        {
          type: 'table',
          head: [
            'Nguyên tố',
            'Cấu hình electron',
            'Bán kính (pm)',
            '$E^\\circ_{\\mathrm{M^{2+}/M}}$ (V)',
            '$t_{nc}$ (°C)',
          ],
          rows: [
            ['Be', '$[\\mathrm{He}]2s^2$', '112', '$-1{,}99$', '1 287'],
            ['Mg', '$[\\mathrm{Ne}]3s^2$', '160', '$-2{,}356$', '651'],
            ['Ca', '$[\\mathrm{Ar}]4s^2$', '197', '$-2{,}84$', '842'],
            ['Sr', '$[\\mathrm{Kr}]5s^2$', '215', '$-2{,}89$', '757'],
            ['Ba', '$[\\mathrm{Xe}]6s^2$', '222', '$-2{,}92$', '727'],
          ],
          caption: 'Một số đặc điểm của kim loại nhóm IIA.',
        },
        {
          type: 'p',
          text: 'Kim loại nhóm IIA nhẹ, nhiệt độ nóng chảy tương đối thấp so với nhiều kim loại khác. Nhiệt độ nóng chảy không biến đổi theo một quy luật vì các kim loại có kiểu mạng tinh thể khác nhau: Be, Mg lục phương; Ca, Sr lập phương tâm mặt; Ba lập phương tâm khối.',
        },
      ],
    },
    {
      heading: 'Tính chất hoá học',
      blocks: [
        {
          type: 'p',
          text: 'Từ Be đến Ba, bán kính nguyên tử tăng, khả năng nhường electron tăng nên tính khử tăng dần.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tác dụng với nước',
          text: 'Be không phản ứng với nước. Mg phản ứng chậm với nước lạnh, nhanh hơn khi đun nóng: $\\mathrm{Mg} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Mg(OH)_2} + \\mathrm{H_2}$. Ca, Sr, Ba phản ứng mạnh với nước ở nhiệt độ thường: $\\mathrm{Ca} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2} + \\mathrm{H_2}$.',
        },
        {
          type: 'p',
          text: 'Với oxygen: ở nhiệt độ thường, Be bền nhờ lớp oxide bảo vệ, Mg bị oxi hoá chậm, các kim loại còn lại bị oxi hoá nhanh. Khi đốt nóng, các kim loại (trừ Be) cháy mạnh, ví dụ $2\\mathrm{Mg} + \\mathrm{O_2} \\xrightarrow{t^\\circ} 2\\mathrm{MgO}$. Ngọn lửa của Ca có màu đỏ cam, Sr màu đỏ son, Ba màu lục.',
        },
        {
          type: 'table',
          head: [
            'Anion',
            '$\\mathrm{Mg^{2+}}$',
            '$\\mathrm{Ca^{2+}}$',
            '$\\mathrm{Sr^{2+}}$',
            '$\\mathrm{Ba^{2+}}$',
          ],
          rows: [
            ['$\\mathrm{OH^-}$', 'không tan', 'ít tan', 'tan', 'tan'],
            ['$\\mathrm{SO_4^{2-}}$', 'tan', 'ít tan', 'ít tan', 'không tan'],
            ['$\\mathrm{CO_3^{2-}}$', 'không tan', 'không tan', 'không tan', 'không tan'],
            ['$\\mathrm{NO_3^-}$', 'tan', 'tan', 'tan', 'tan'],
          ],
          caption:
            'Độ tan trong nước: hydroxide tan nhiều hơn từ Mg đến Ba, sulfate tan ít hơn từ Mg đến Ba.',
        },
        {
          type: 'p',
          text: 'Ion $\\mathrm{Ba^{2+}}$ được nhận biết bằng ion $\\mathrm{SO_4^{2-}}$ (kết tủa trắng $\\mathrm{BaSO_4}$, không tan trong acid): $\\mathrm{Ba^{2+}} + \\mathrm{SO_4^{2-}} \\longrightarrow \\mathrm{BaSO_4}\\downarrow$. Ion $\\mathrm{Ca^{2+}}$ tạo kết tủa trắng với ion $\\mathrm{CO_3^{2-}}$.',
        },
        {
          type: 'p',
          text: 'Muối carbonate của kim loại nhóm IIA bị nhiệt phân thành oxide: $\\mathrm{MCO_3} \\xrightarrow{t^\\circ} \\mathrm{MO} + \\mathrm{CO_2}$.',
        },
      ],
    },
    {
      heading: 'Hợp chất của calcium',
      blocks: [
        {
          type: 'table',
          head: ['Hợp chất', 'Tên thường gọi', 'Ứng dụng'],
          rows: [
            ['$\\mathrm{CaCO_3}$', 'đá vôi', 'sản xuất vôi sống, xi măng, vật liệu xây dựng'],
            ['CaO', 'vôi sống', 'khử chua đất, sát trùng, hút ẩm'],
            [
              '$\\mathrm{Ca(OH)_2}$',
              'vôi tôi; nước vôi trong, sữa vôi',
              'khử chua đất, làm mềm nước cứng, xây dựng',
            ],
            ['$\\mathrm{CaSO_4.2H_2O}$', 'thạch cao sống', 'vật liệu xây dựng, phấn viết bảng'],
            [
              '$\\mathrm{CaSO_4.H_2O}$ hoặc $\\mathrm{CaSO_4.0{,}5H_2O}$',
              'thạch cao nung',
              'bó bột khi gãy xương, đúc tượng, làm khuôn',
            ],
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2} \\qquad \\mathrm{CaO} + \\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hang động và nhũ đá',
          text: '$\\mathrm{CaCO_3}$ tan dần trong nước có hoà tan $\\mathrm{CO_2}$ tạo $\\mathrm{Ca(HCO_3)_2}$ (sự xâm thực đá vôi). Khi nước nhỏ giọt ra trần hang, $\\mathrm{CO_2}$ thoát ra, cân bằng chuyển dịch theo chiều nghịch, $\\mathrm{CaCO_3}$ kết tủa dần thành nhũ đá, măng đá: $\\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{Ca(HCO_3)_2}$.',
        },
        {
          type: 'p',
          text: 'Calcium phosphate và hydroxyapatite là thành phần chính của xương và răng; quặng apatite dùng sản xuất phân lân.',
        },
      ],
    },
    {
      heading: 'Nước cứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nước cứng',
          text: 'Nước cứng là nước chứa nhiều ion $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$. Nước chứa ít hoặc không chứa các ion đó là nước mềm.',
        },
        {
          type: 'table',
          head: ['Loại', 'Anion đi cùng $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$'],
          rows: [
            ['Tính cứng tạm thời', '$\\mathrm{HCO_3^-}$'],
            ['Tính cứng vĩnh cửu', '$\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$'],
            ['Tính cứng toàn phần', 'gồm cả hai loại trên'],
          ],
        },
        {
          type: 'p',
          text: 'Nước tự nhiên thường có tính cứng toàn phần. Tác hại: đóng cặn nồi hơi, gây tốn nhiên liệu và mất an toàn; làm tắc đường ống; làm xà phòng tạo kết tủa, giảm tác dụng tẩy rửa, làm hỏng vải; làm thực phẩm lâu chín và giảm mùi vị.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phương pháp kết tủa',
          text: 'Nguyên tắc làm mềm nước cứng là làm giảm nồng độ ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. Đun sôi hoặc thêm lượng vừa đủ $\\mathrm{Ca(OH)_2}$ chỉ làm mềm được nước cứng tạm thời. Dùng $\\mathrm{Na_2CO_3}$ hoặc $\\mathrm{Na_3PO_4}$ làm mềm được cả nước cứng tạm thời và vĩnh cửu.',
        },
        {
          type: 'list',
          items: [
            '$\\mathrm{Ca(HCO_3)_2} \\xrightarrow{t^\\circ} \\mathrm{CaCO_3}\\downarrow + \\mathrm{CO_2} + \\mathrm{H_2O}$',
            '$\\mathrm{Mg(HCO_3)_2} \\xrightarrow{t^\\circ} \\mathrm{MgCO_3}\\downarrow + \\mathrm{CO_2} + \\mathrm{H_2O}$',
            '$\\mathrm{Ca(HCO_3)_2} + \\mathrm{Ca(OH)_2} \\longrightarrow 2\\mathrm{CaCO_3}\\downarrow + 2\\mathrm{H_2O}$',
            '$\\mathrm{MgSO_4} + \\mathrm{Na_2CO_3} \\longrightarrow \\mathrm{MgCO_3}\\downarrow + \\mathrm{Na_2SO_4}$',
            '$3\\mathrm{CaCl_2} + 2\\mathrm{Na_3PO_4} \\longrightarrow \\mathrm{Ca_3(PO_4)_2}\\downarrow + 6\\mathrm{NaCl}$',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phương pháp trao đổi ion',
          text: 'Cho nước cứng đi qua cột chứa nhựa trao đổi cation (hoặc zeolite). Ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ bị giữ lại trên nhựa, ion $\\mathrm{Na^+}$ (hoặc $\\mathrm{H^+}$) đi vào nước, nên nước mềm đi.',
        },
      ],
    },
  ],
  explore: {
    title: 'Làm mềm nước cứng',
    instruction:
      'Chọn một mẫu nước và quan sát các ion trong cốc. Thử từng cách làm mềm: đun sôi, thêm $\\mathrm{Ca(OH)_2}$, $\\mathrm{Na_2CO_3}$, $\\mathrm{Na_3PO_4}$ hoặc cho qua nhựa trao đổi ion. Cách nào loại được ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ đi cùng $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$? Với mẫu C, thử đun sôi trước rồi xem còn lại gì.',
  },
  examples: [
    {
      problem:
        'Cho 4 g Ca tác dụng hết với nước. Tính thể tích khí $\\mathrm{H_2}$ (đkc) và khối lượng $\\mathrm{Ca(OH)_2}$ tạo thành. (Ca = 40, O = 16, H = 1)',
      steps: [
        '$\\mathrm{Ca} + 2\\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2} + \\mathrm{H_2}$.',
        '$n_{\\mathrm{Ca}} = \\dfrac{4}{40} = 0{,}1$ mol $= n_{\\mathrm{Ca(OH)_2}} = n_{\\mathrm{H_2}}$.',
        '$V_{\\mathrm{H_2}} = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L; $m_{\\mathrm{Ca(OH)_2}} = 0{,}1 \\cdot 74 = 7{,}4$ g.',
      ],
      answer: '$V_{\\mathrm{H_2}} = 2{,}479$ L; $m_{\\mathrm{Ca(OH)_2}} = 7{,}4$ g.',
    },
    {
      problem:
        'Một mẫu nước chứa các ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$, $\\mathrm{HCO_3^-}$, $\\mathrm{Cl^-}$. Mẫu nước thuộc loại nào? Có thể làm mềm bằng cách đun sôi không? Nên dùng hoá chất nào?',
      steps: [
        'Có $\\mathrm{HCO_3^-}$ (tính cứng tạm thời) và $\\mathrm{Cl^-}$ (tính cứng vĩnh cửu): nước có tính cứng toàn phần.',
        'Đun sôi chỉ loại được phần $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ đi cùng $\\mathrm{HCO_3^-}$; phần đi cùng $\\mathrm{Cl^-}$ vẫn còn, nên nước chưa mềm.',
        'Dùng $\\mathrm{Na_2CO_3}$ (hoặc $\\mathrm{Na_3PO_4}$): $\\mathrm{Ca^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{CaCO_3}\\downarrow$, $\\mathrm{Mg^{2+}} + \\mathrm{CO_3^{2-}} \\longrightarrow \\mathrm{MgCO_3}\\downarrow$.',
      ],
      answer:
        'Nước cứng toàn phần; đun sôi không làm mềm hoàn toàn; dùng $\\mathrm{Na_2CO_3}$ hoặc $\\mathrm{Na_3PO_4}$.',
    },
    {
      problem:
        'Nung 50 tấn đá vôi chứa 90% $\\mathrm{CaCO_3}$ (còn lại là tạp chất không bị phân huỷ). Tính khối lượng CaO thu được nếu hiệu suất là 100%.',
      steps: [
        '$m_{\\mathrm{CaCO_3}} = 50 \\cdot 90\\% = 45$ tấn.',
        '$\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$: 100 phần khối lượng $\\mathrm{CaCO_3}$ cho 56 phần khối lượng CaO.',
        '$m_{\\mathrm{CaO}} = 45 \\cdot \\dfrac{56}{100} = 25{,}2$ tấn.',
      ],
      answer: '$m_{\\mathrm{CaO}} = 25{,}2$ tấn.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong hợp chất, kim loại nhóm IIA có số oxi hoá đặc trưng là',
      options: ['$+2$', '$+1$', '$+3$', '$-2$'],
      answer: 0,
      hints: ['Nguyên tử có 2 electron hoá trị $ns^2$ và dễ nhường cả hai.'],
      solution:
        '$\\mathrm{M} \\longrightarrow \\mathrm{M^{2+}} + 2e$, nên số oxi hoá đặc trưng là $+2$.',
    },
    {
      type: 'choice',
      prompt: 'Kim loại nhóm IIA nào không phản ứng với nước, kể cả khi đun nóng?',
      options: ['Be', 'Mg', 'Ca', 'Ba'],
      answer: 0,
      hints: [
        'Tính khử tăng từ Be đến Ba; kim loại có tính khử yếu nhất trong nhóm là kim loại nào?',
      ],
      solution:
        'Be không phản ứng với nước; Mg phản ứng chậm với nước lạnh, nhanh hơn khi đun nóng; Ca, Ba phản ứng ở nhiệt độ thường.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào là đúng?',
      options: [
        'Độ tan của hydroxide tăng dần từ $\\mathrm{Mg(OH)_2}$ đến $\\mathrm{Ba(OH)_2}$.',
        'Độ tan của muối sulfate tăng dần từ $\\mathrm{MgSO_4}$ đến $\\mathrm{BaSO_4}$.',
        'Có thể dùng ion $\\mathrm{SO_4^{2-}}$ để nhận biết ion $\\mathrm{Ba^{2+}}$.',
        'Tính khử của kim loại nhóm IIA giảm dần từ Be đến Ba.',
      ],
      answers: [0, 2],
      hints: ['$\\mathrm{BaSO_4}$ là kết tủa trắng, còn $\\mathrm{MgSO_4}$ tan tốt.'],
      solution:
        'Đúng: hydroxide tan nhiều hơn từ Mg đến Ba; $\\mathrm{Ba^{2+}} + \\mathrm{SO_4^{2-}} \\longrightarrow \\mathrm{BaSO_4}\\downarrow$. Sai: sulfate tan ít hơn từ Mg đến Ba; tính khử tăng từ Be đến Ba.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi chất với tên thường gọi.',
      left: ['CaO', '$\\mathrm{Ca(OH)_2}$', '$\\mathrm{CaCO_3}$', '$\\mathrm{CaSO_4.2H_2O}$'],
      right: ['vôi sống', 'vôi tôi', 'đá vôi', 'thạch cao sống', 'soda'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Vôi sống tác dụng với nước tạo ra vôi tôi.'],
      solution:
        'CaO: vôi sống; $\\mathrm{Ca(OH)_2}$: vôi tôi; $\\mathrm{CaCO_3}$: đá vôi; $\\mathrm{CaSO_4.2H_2O}$: thạch cao sống. Soda là $\\mathrm{Na_2CO_3}$.',
    },
    {
      type: 'choice',
      prompt:
        'Nước trong một cốc chứa nhiều ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$, $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$. Nước trong cốc thuộc loại',
      options: [
        'nước có tính cứng vĩnh cửu',
        'nước có tính cứng tạm thời',
        'nước có tính cứng toàn phần',
        'nước mềm',
      ],
      answer: 0,
      hints: [
        'Tính cứng tạm thời do muối hydrogencarbonate gây nên. Trong cốc có ion $\\mathrm{HCO_3^-}$ không?',
      ],
      solution:
        'Không có $\\mathrm{HCO_3^-}$, ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ đi cùng $\\mathrm{Cl^-}$, $\\mathrm{SO_4^{2-}}$: nước có tính cứng vĩnh cửu.',
    },
    {
      type: 'multi',
      prompt: 'Những cách nào làm mềm được nước có tính cứng vĩnh cửu?',
      options: [
        'Thêm dung dịch $\\mathrm{Na_2CO_3}$.',
        'Thêm dung dịch $\\mathrm{Na_3PO_4}$.',
        'Cho nước đi qua nhựa trao đổi cation.',
        'Đun sôi nước.',
        'Thêm lượng vừa đủ $\\mathrm{Ca(OH)_2}$.',
      ],
      answers: [0, 1, 2],
      hints: ['Đun sôi và $\\mathrm{Ca(OH)_2}$ chỉ tác dụng nhờ ion $\\mathrm{HCO_3^-}$.'],
      solution:
        '$\\mathrm{CO_3^{2-}}$, $\\mathrm{PO_4^{3-}}$ kết tủa mọi ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$; nhựa trao đổi ion giữ chúng lại. Đun sôi và $\\mathrm{Ca(OH)_2}$ chỉ loại được tính cứng tạm thời.',
    },
    {
      type: 'number',
      prompt:
        'Nhiệt phân hoàn toàn 20 g $\\mathrm{CaCO_3}$. Khối lượng CaO thu được là bao nhiêu gam? (Ca = 40, C = 12, O = 16)',
      answer: 11.2,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        '$\\mathrm{CaCO_3} \\xrightarrow{t^\\circ} \\mathrm{CaO} + \\mathrm{CO_2}$; $M_{\\mathrm{CaCO_3}} = 100$, $M_{\\mathrm{CaO}} = 56$.',
      ],
      solution:
        '$n_{\\mathrm{CaCO_3}} = \\dfrac{20}{100} = 0{,}2$ mol $= n_{\\mathrm{CaO}}$; $m_{\\mathrm{CaO}} = 0{,}2 \\cdot 56 = 11{,}2$ g.',
    },
    {
      type: 'number',
      prompt:
        'Một lít nước cứng chứa 0,002 mol $\\mathrm{Ca^{2+}}$ và 0,001 mol $\\mathrm{Mg^{2+}}$. Cần tối thiểu bao nhiêu gam $\\mathrm{Na_2CO_3}$ để làm mềm 10 lít nước này? (Na = 23, C = 12, O = 16)',
      answer: 3.18,
      tolerance: 0.001,
      unit: 'g',
      hints: [
        'Mỗi ion $\\mathrm{Ca^{2+}}$ hoặc $\\mathrm{Mg^{2+}}$ cần một ion $\\mathrm{CO_3^{2-}}$.',
        'Tính tổng số mol $\\mathrm{Ca^{2+}}$ và $\\mathrm{Mg^{2+}}$ trong 10 lít.',
      ],
      solution:
        'Trong 10 L: $n_{\\mathrm{Ca^{2+}}} + n_{\\mathrm{Mg^{2+}}} = 10 \\cdot (0{,}002 + 0{,}001) = 0{,}03$ mol $= n_{\\mathrm{Na_2CO_3}}$; $m = 0{,}03 \\cdot 106 = 3{,}18$ g.',
    },
    {
      type: 'choice',
      prompt: 'Phản ứng nào giải thích sự hình thành nhũ đá trong hang động?',
      options: [
        '$\\mathrm{Ca(HCO_3)_2} \\longrightarrow \\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$',
        '$\\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(HCO_3)_2}$',
        '$\\mathrm{CaO} + \\mathrm{H_2O} \\longrightarrow \\mathrm{Ca(OH)_2}$',
        '$\\mathrm{CaCO_3} \\longrightarrow \\mathrm{CaO} + \\mathrm{CO_2}$',
      ],
      answer: 0,
      hints: ['Nhũ đá là $\\mathrm{CaCO_3}$ kết tủa ra từ dung dịch.'],
      solution:
        'Nước chứa $\\mathrm{Ca(HCO_3)_2}$ nhỏ giọt, $\\mathrm{CO_2}$ thoát ra, $\\mathrm{CaCO_3}$ kết tủa thành nhũ đá: $\\mathrm{Ca(HCO_3)_2} \\longrightarrow \\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O}$. Chiều thuận ngược lại là sự xâm thực đá vôi.',
    },
  ],
  takeaways: [
    'Kim loại nhóm IIA: cấu hình $ns^2$, số oxi hoá $+2$, tính khử mạnh, tăng từ Be đến Ba; Be không phản ứng với nước, Mg phản ứng chậm, Ca, Sr, Ba phản ứng ở nhiệt độ thường.',
    'Hydroxide tan nhiều hơn từ Mg đến Ba; sulfate tan ít hơn từ Mg đến Ba; $\\mathrm{BaSO_4}$ dùng nhận biết ion $\\mathrm{Ba^{2+}}$.',
    'Đá vôi $\\mathrm{CaCO_3}$, vôi sống CaO, vôi tôi $\\mathrm{Ca(OH)_2}$, thạch cao $\\mathrm{CaSO_4.2H_2O}$; $\\mathrm{CaCO_3} + \\mathrm{CO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{Ca(HCO_3)_2}$.',
    'Nước cứng chứa nhiều $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$. Đun sôi, $\\mathrm{Ca(OH)_2}$ vừa đủ: chỉ loại tính cứng tạm thời. $\\mathrm{Na_2CO_3}$, $\\mathrm{Na_3PO_4}$, nhựa trao đổi ion: làm mềm mọi loại nước cứng.',
  ],
};
