/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tính chất vật lí và hoá học của sulfur, tính chất và ứng dụng của sulfur dioxide, nguồn phát thải SO2 và cách giảm thiểu ô nhiễm.',
  intro:
    'Quanh các miệng núi lửa thường có những lớp bột vàng là sulfur, đồng thời bốc lên một khí mùi hắc làm cay mắt. Cùng một nguyên tố, vì sao sulfur đơn chất ít độc còn khí $\\mathrm{SO_2}$ lại vừa có ích trong công nghiệp, vừa là tác nhân gây mưa acid?',
  objectives: [
    'Nêu được trạng thái tự nhiên và tính chất vật lí của sulfur; giải thích tính oxi hoá và tính khử của sulfur.',
    'Trình bày được tính chất hoá học của $\\mathrm{SO_2}$ (oxide acid, tính khử, tính oxi hoá) và ứng dụng của nó.',
    'Nêu được nguồn phát thải $\\mathrm{SO_2}$, tác hại và các biện pháp giảm thiểu.',
  ],
  sections: [
    {
      heading: 'Sulfur',
      blocks: [
        {
          type: 'p',
          text: 'Sulfur có trong tự nhiên ở dạng đơn chất (vùng núi lửa) và hợp chất, như quặng pyrite $\\mathrm{FeS_2}$, thạch cao $\\mathrm{CaSO_4 \\cdot 2H_2O}$. Sulfur ($Z = 16$) ở chu kì $3$, nhóm VIA, cấu hình electron $[\\mathrm{Ne}]3s^2 3p^4$, có các số oxi hoá $-2$, $0$, $+4$, $+6$.',
        },
        {
          type: 'p',
          text: 'Sulfur là chất rắn màu vàng, không tan trong nước, tan trong một số dung môi hữu cơ. Trong tinh thể, các phân tử $\\mathrm{S_8}$ hút nhau bằng tương tác van der Waals yếu, nên sulfur nóng chảy ở nhiệt độ khá thấp, khoảng $115\\,^\\circ\\mathrm{C}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sulfur vừa có tính oxi hoá, vừa có tính khử',
          text: 'Số oxi hoá $0$ là mức trung gian. Với kim loại và hydrogen, sulfur là chất oxi hoá: $$\\mathrm{Fe} + \\mathrm{S} \\xrightarrow{t^\\circ} \\mathrm{FeS}$$ $$\\mathrm{Hg} + \\mathrm{S} \\rightarrow \\mathrm{HgS}$$ $$\\mathrm{H_2} + \\mathrm{S} \\xrightarrow{t^\\circ} \\mathrm{H_2S}$$ Với phi kim có độ âm điện lớn hơn, sulfur là chất khử: $$\\mathrm{S} + \\mathrm{O_2} \\xrightarrow{t^\\circ} \\mathrm{SO_2}$$ $$\\mathrm{S} + \\mathrm{3F_2} \\rightarrow \\mathrm{SF_6}$$',
        },
        {
          type: 'p',
          text: 'Sulfur tác dụng với thuỷ ngân ngay ở nhiệt độ thường, nên được dùng để thu hồi thuỷ ngân rơi vãi. Phần lớn sulfur dùng để sản xuất sulfuric acid; ngoài ra dùng lưu hoá cao su, sản xuất thuốc trừ sâu, diêm, dược phẩm.',
        },
      ],
    },
    {
      heading: 'Sulfur dioxide',
      blocks: [
        {
          type: 'p',
          text: '$\\mathrm{SO_2}$ là khí không màu, mùi hắc, độc, nặng hơn không khí ($M = 64$), tan nhiều trong nước. Sulfur trong $\\mathrm{SO_2}$ có số oxi hoá $+4$, mức trung gian.',
        },
        {
          type: 'table',
          caption: 'Tính chất hoá học của sulfur dioxide',
          head: ['Tính chất', 'Phương trình', 'Ghi chú'],
          rows: [
            [
              'Oxide acid',
              '$\\mathrm{SO_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{H_2SO_3}$',
              'Cũng tác dụng với oxide base và base: $\\mathrm{SO_2} + \\mathrm{BaO} \\rightarrow \\mathrm{BaSO_3}$',
            ],
            [
              'Tính khử',
              '$\\mathrm{2SO_2} + \\mathrm{O_2} \\xrightleftharpoons[\\mathrm{V_2O_5}]{t^\\circ} \\mathrm{2SO_3}$',
              'S tăng từ $+4$ lên $+6$',
            ],
            [
              'Tính khử',
              '$\\mathrm{SO_2} + \\mathrm{Br_2} + \\mathrm{2H_2O} \\rightarrow \\mathrm{2HBr} + \\mathrm{H_2SO_4}$',
              'Làm mất màu nước bromine',
            ],
            [
              'Tính khử',
              '$\\mathrm{5SO_2} + \\mathrm{2KMnO_4} + \\mathrm{2H_2O} \\rightarrow \\mathrm{K_2SO_4} + \\mathrm{2MnSO_4} + \\mathrm{2H_2SO_4}$',
              'Làm mất màu thuốc tím',
            ],
            [
              'Tính oxi hoá',
              '$\\mathrm{SO_2} + \\mathrm{2H_2S} \\rightarrow \\mathrm{3S} + \\mathrm{2H_2O}$',
              'S giảm từ $+4$ xuống $0$',
            ],
          ],
        },
        {
          type: 'p',
          text: '$\\mathrm{SO_2}$ là chất trung gian quan trọng để sản xuất sulfuric acid, còn được dùng tẩy trắng vải, giấy, đường và làm chất chống mốc. Việc dùng trực tiếp để bảo quản thực phẩm hiện bị hạn chế chặt chẽ vì lí do an toàn.',
        },
      ],
    },
    {
      heading: 'Ô nhiễm sulfur dioxide',
      blocks: [
        {
          type: 'list',
          items: [
            'Nguồn tự nhiên: núi lửa phun trào.',
            'Nguồn nhân tạo: đốt than đá, dầu chứa sulfur ở nhà máy nhiệt điện; luyện kim từ quặng sulfide như $\\mathrm{4FeS_2} + \\mathrm{11O_2} \\xrightarrow{t^\\circ} \\mathrm{2Fe_2O_3} + \\mathrm{8SO_2}$.',
          ],
        },
        {
          type: 'p',
          text: '$\\mathrm{SO_2}$ gây hại đường hô hấp và là tác nhân chính gây mưa acid: $\\mathrm{2SO_2} + \\mathrm{O_2} + \\mathrm{2H_2O} \\rightarrow \\mathrm{2H_2SO_4}$. Quy chuẩn Việt Nam giới hạn nồng độ $\\mathrm{SO_2}$ trung bình 1 giờ trong không khí xung quanh ở $350\\ \\mu\\mathrm{g/m^3}$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giảm phát thải',
          text: 'Dùng nhiên liệu ít sulfur, cải tiến công nghệ đốt, hấp thụ $\\mathrm{SO_2}$ trong khí thải bằng vôi: $\\mathrm{SO_2} + \\mathrm{CaO} \\rightarrow \\mathrm{CaSO_3}$, và tái chế sản phẩm phụ chứa sulfur.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đốt sulfur, dẫn khí qua thuốc tím',
    instruction:
      'Chọn chất đốt, dung dịch và khối lượng rồi bấm Đốt. Sulfur tạo $\\mathrm{SO_2}$; carbon tạo $\\mathrm{CO_2}$. Hãy tìm khối lượng sulfur vừa đủ để mất màu thuốc tím, rồi kiểm tra bằng tỉ lệ trong phương trình. Khí được coi là hấp thụ hết. Trong phòng thí nghiệm thật, khí độc phải được xử lí; đừng tự làm ở nhà.',
  },
  examples: [
    {
      problem:
        'Dẫn khí $\\mathrm{SO_2}$ sinh ra khi đốt hết $m$ gam sulfur vào dung dịch chứa $0{,}2$ mmol $\\mathrm{KMnO_4}$, dung dịch vừa mất màu. Tính $m$ theo mg.',
      steps: [
        'Theo phương trình, $5$ mol $\\mathrm{SO_2}$ phản ứng với $2$ mol $\\mathrm{KMnO_4}$, nên $n_{\\mathrm{SO_2}} = \\dfrac{5}{2} \\cdot 0{,}2 = 0{,}5$ mmol.',
        'Theo $\\mathrm{S} + \\mathrm{O_2} \\rightarrow \\mathrm{SO_2}$: $n_{\\mathrm{S}} = n_{\\mathrm{SO_2}} = 0{,}5$ mmol.',
        '$m = 0{,}5 \\cdot 32 = 16$ mg.',
      ],
      answer: '$m = 16$ mg.',
    },
    {
      problem:
        'Một mẫu không khí có $10$ m$^3$ chứa $5$ mg $\\mathrm{SO_2}$. So với giới hạn $350\\ \\mu\\mathrm{g/m^3}$ (trung bình 1 giờ), mẫu này đạt hay vượt?',
      steps: [
        'Đổi đơn vị: $5$ mg $= 5000\\ \\mu\\mathrm{g}$.',
        'Nồng độ: $\\dfrac{5000}{10} = 500\\ \\mu\\mathrm{g/m^3}$.',
        '$500 > 350$ nên mẫu vượt giới hạn.',
      ],
      answer: 'Vượt giới hạn: $500\\ \\mu\\mathrm{g/m^3}$.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn các phản ứng trong đó sulfur đóng vai trò chất oxi hoá.',
      options: [
        '$\\mathrm{Fe} + \\mathrm{S} \\rightarrow \\mathrm{FeS}$',
        '$\\mathrm{Hg} + \\mathrm{S} \\rightarrow \\mathrm{HgS}$',
        '$\\mathrm{S} + \\mathrm{O_2} \\rightarrow \\mathrm{SO_2}$',
        '$\\mathrm{S} + \\mathrm{3F_2} \\rightarrow \\mathrm{SF_6}$',
      ],
      answers: [0, 1],
      hints: ['Chất oxi hoá có số oxi hoá giảm. Xem số oxi hoá của S sau phản ứng.'],
      solution:
        'Trong FeS và HgS, S có số oxi hoá $-2$ (giảm). Trong $\\mathrm{SO_2}$ và $\\mathrm{SF_6}$, số oxi hoá của S tăng nên S là chất khử.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao sulfur có nhiệt độ nóng chảy khá thấp?',
      options: [
        'Các phân tử $\\mathrm{S_8}$ hút nhau bằng tương tác van der Waals yếu',
        'Sulfur là chất rắn ion',
        'Giữa các nguyên tử S trong phân tử có liên kết hydrogen',
        'Tinh thể sulfur là tinh thể kim loại',
      ],
      answer: 0,
      hints: ['Khi nóng chảy, chỉ cần phá tương tác giữa các phân tử.'],
      solution:
        'Tinh thể sulfur gồm các phân tử $\\mathrm{S_8}$; tương tác van der Waals giữa chúng yếu nên dễ bị phá vỡ.',
    },
    {
      type: 'choice',
      prompt:
        'Trong phản ứng $\\mathrm{SO_2} + \\mathrm{2H_2S} \\rightarrow \\mathrm{3S} + \\mathrm{2H_2O}$, $\\mathrm{SO_2}$ đóng vai trò',
      options: ['Chất oxi hoá', 'Chất khử', 'Vừa oxi hoá vừa khử', 'Oxide acid'],
      answer: 0,
      hints: ['Tính số oxi hoá của S trong $\\mathrm{SO_2}$ và trong sản phẩm S.'],
      solution:
        'S trong $\\mathrm{SO_2}$ giảm từ $+4$ xuống $0$, nên $\\mathrm{SO_2}$ là chất oxi hoá.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc thử nào phân biệt được hai khí $\\mathrm{SO_2}$ và $\\mathrm{CO_2}$?',
      options: ['Nước bromine', 'Quỳ tím ẩm', 'Nước vôi trong', 'Dung dịch NaOH'],
      answer: 0,
      hints: ['Hai khí đều là oxide acid. Khí nào có tính khử?'],
      solution:
        'Chỉ $\\mathrm{SO_2}$ làm mất màu nước bromine. Cả hai đều làm quỳ ẩm hoá đỏ, làm đục nước vôi trong và phản ứng với NaOH.',
    },
    {
      type: 'number',
      prompt:
        'Đốt hết $3{,}2$ g sulfur trong oxygen dư. Thể tích $\\mathrm{SO_2}$ thu được ở điều kiện chuẩn là bao nhiêu lít?',
      answer: 2.479,
      tolerance: 0.01,
      unit: 'L',
      hints: ['$n_{\\mathrm{S}} = \\dfrac{3{,}2}{32}$; một mol S tạo một mol $\\mathrm{SO_2}$.'],
      solution: '$n = 0{,}1$ mol nên $V = 0{,}1 \\cdot 24{,}79 = 2{,}479$ L.',
    },
    {
      type: 'number',
      prompt:
        'Dẫn $\\mathrm{SO_2}$ vào $20$ mL dung dịch $\\mathrm{KMnO_4}$ $0{,}02$ M đến khi vừa mất màu. Tính số mmol $\\mathrm{SO_2}$ đã phản ứng.',
      answer: 1,
      tolerance: 0.001,
      unit: 'mmol',
      hints: [
        '$n_{\\mathrm{KMnO_4}} = 20 \\cdot 0{,}02$ mmol. Tỉ lệ $\\mathrm{SO_2} : \\mathrm{KMnO_4} = 5 : 2$.',
      ],
      solution:
        '$n_{\\mathrm{KMnO_4}} = 0{,}4$ mmol nên $n_{\\mathrm{SO_2}} = \\dfrac{5}{2} \\cdot 0{,}4 = 1$ mmol.',
    },
    {
      type: 'number',
      prompt:
        'Một nhà máy đốt $100$ tấn than chứa $2\\%$ sulfur về khối lượng. Nếu không xử lí, khối lượng $\\mathrm{SO_2}$ thải ra là bao nhiêu tấn?',
      answer: 4,
      tolerance: 0.001,
      unit: 'tấn',
      hints: ['Khối lượng S là $2$ tấn. $M_{\\mathrm{SO_2}} = 64$, gấp đôi $M_{\\mathrm{S}}$.'],
      solution:
        'Khối lượng S: $100 \\cdot 2\\% = 2$ tấn; $m_{\\mathrm{SO_2}} = 2 \\cdot \\dfrac{64}{32} = 4$ tấn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các biện pháp giúp giảm phát thải $\\mathrm{SO_2}$.',
      options: [
        'Dùng than, dầu ít sulfur',
        'Hấp thụ khí thải bằng vôi',
        'Tái chế sản phẩm phụ chứa sulfur',
        'Xây ống khói cao hơn để khí bay xa',
      ],
      answers: [0, 1, 2],
      hints: ['Ống khói cao không làm giảm lượng $\\mathrm{SO_2}$ thải ra.'],
      solution:
        'Dùng nhiên liệu ít sulfur, hấp thụ bằng vôi và tái chế đều làm giảm lượng $\\mathrm{SO_2}$ vào không khí. Ống khói cao chỉ đưa khí đi xa, gây mưa acid ở nơi khác.',
    },
  ],
  takeaways: [
    'Sulfur (số oxi hoá $0$) là chất oxi hoá với kim loại, $\\mathrm{H_2}$ và là chất khử với $\\mathrm{O_2}$, $\\mathrm{F_2}$.',
    '$\\mathrm{SO_2}$ là oxide acid, vừa có tính khử (làm mất màu nước bromine, thuốc tím), vừa có tính oxi hoá.',
    '$\\mathrm{SO_2}$ dùng sản xuất $\\mathrm{H_2SO_4}$, tẩy trắng; là tác nhân gây mưa acid.',
    'Giảm ô nhiễm: nhiên liệu ít sulfur, hấp thụ khí thải bằng vôi, tái chế sản phẩm phụ.',
  ],
};
