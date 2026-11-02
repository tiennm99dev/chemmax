/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các oxide của nitrogen, nguồn phát thải NOx và mưa acid; cấu tạo, tính acid và tính oxi hoá của nitric acid; hiện tượng phú dưỡng.',
  intro:
    'Năm 1872, Robert Angus Smith dùng cụm từ "mưa acid" để nói về nước mưa ở các thành phố công nghiệp nước Anh. Ngày nay, tượng đá bị ăn mòn và hồ không còn cá vẫn là hậu quả quen thuộc của loại mưa này. Khí thải từ ống khói biến thành acid như thế nào, và nitric acid có gì đặc biệt?',
  objectives: [
    'Trình bày được nguồn gốc của các oxide của nitrogen và sự hình thành mưa acid.',
    'Mô tả được cấu tạo, tính acid và tính oxi hoá mạnh của nitric acid; viết được các phương trình minh hoạ.',
    'Giải thích được hiện tượng phú dưỡng và nêu được các biện pháp hạn chế.',
  ],
  sections: [
    {
      heading: 'Các oxide của nitrogen',
      blocks: [
        {
          type: 'p',
          text: 'Oxide của nitrogen, kí hiệu chung NOx, gồm nhiều chất như $\\mathrm{N_2O}$, $\\mathrm{NO}$, $\\mathrm{NO_2}$. Hai chất phổ biến là NO (nitrogen monoxide, khí không màu) và $\\mathrm{NO_2}$ (nitrogen dioxide, khí màu nâu đỏ, độc).',
        },
        {
          type: 'list',
          items: [
            'Nguồn tự nhiên: tia sét và núi lửa cung cấp đủ năng lượng để $\\mathrm{N_2}$ kết hợp với $\\mathrm{O_2}$.',
            'Nguồn nhân tạo: đốt nhiên liệu ở nhiệt độ rất cao trong động cơ, lò nhiệt điện, lò luyện kim; nitrogen có trong nhiên liệu cũng tạo NOx.',
          ],
        },
        {
          type: 'tex',
          tex: '\\mathrm{N_2} + \\mathrm{O_2} \\xrightleftharpoons{3000\\,^\\circ\\mathrm{C}} \\mathrm{2NO} \\qquad \\mathrm{2NO} + \\mathrm{O_2} \\rightarrow \\mathrm{2NO_2}',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mưa acid',
          text: 'Nước mưa bình thường có pH khoảng $5{,}6$ do hoà tan $\\mathrm{CO_2}$. Mưa có pH nhỏ hơn $5{,}6$ gọi là mưa acid. Tác nhân chính là NOx và $\\mathrm{SO_2}$: $$\\mathrm{4NO_2} + \\mathrm{O_2} + \\mathrm{2H_2O} \\rightarrow \\mathrm{4HNO_3}$$',
        },
        {
          type: 'p',
          text: 'Mưa acid làm chua đất và nước hồ, gây hại cho cây và cá, ăn mòn công trình bằng đá vôi và kim loại. Để hạn chế, cần xử lí khí thải của nhà máy nhiệt điện, luyện kim và chuyển sang năng lượng tái tạo.',
        },
      ],
    },
    {
      heading: 'Nitric acid',
      blocks: [
        {
          type: 'p',
          text: 'Trong phân tử $\\mathrm{HNO_3}$, nguyên tử H liên kết với O bằng liên kết $\\mathrm{O-H}$ phân cực mạnh, nên dễ cho proton. Nguyên tử N có số oxi hoá $+5$, cao nhất, nên $\\mathrm{HNO_3}$ có tính oxi hoá mạnh.',
        },
        {
          type: 'p',
          text: 'Nitric acid tinh khiết là chất lỏng không màu, tan vô hạn trong nước. Acid đặc thường dùng có nồng độ khoảng $68\\%$. Acid kém bền, để lâu bị phân huỷ một phần tạo $\\mathrm{NO_2}$ tan vào làm dung dịch có màu vàng: $\\mathrm{4HNO_3} \\rightarrow \\mathrm{4NO_2} + \\mathrm{O_2} + \\mathrm{2H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính acid mạnh',
          text: '$$\\mathrm{HNO_3} \\rightarrow \\mathrm{H^+} + \\mathrm{NO_3^-}$$ Nitric acid làm quỳ tím hoá đỏ, tác dụng với oxide base, base và muối của acid yếu hơn. Ví dụ: $\\mathrm{CaCO_3} + \\mathrm{2HNO_3} \\rightarrow \\mathrm{Ca(NO_3)_2} + \\mathrm{CO_2} \\uparrow + \\mathrm{H_2O}$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính oxi hoá mạnh',
          text: 'Nitric acid oxi hoá hầu hết kim loại (trừ Au, Pt), tạo muối nitrate. Sản phẩm khử không phải là $\\mathrm{H_2}$ mà là hợp chất của nitrogen: acid đặc thường tạo $\\mathrm{NO_2}$, acid loãng thường tạo NO; kim loại mạnh còn có thể tạo $\\mathrm{N_2O}$, $\\mathrm{N_2}$ hoặc $\\mathrm{NH_4NO_3}$.',
        },
        {
          type: 'list',
          items: [
            'Với acid đặc: $\\mathrm{Cu} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{2NO_2} \\uparrow + \\mathrm{2H_2O}$.',
            'Với acid loãng: $\\mathrm{3Cu} + \\mathrm{8HNO_3} \\rightarrow \\mathrm{3Cu(NO_3)_2} + \\mathrm{2NO} \\uparrow + \\mathrm{4H_2O}$.',
            'Với phi kim, acid đặc nóng: $\\mathrm{C} + \\mathrm{4HNO_3} \\xrightarrow{t^\\circ} \\mathrm{CO_2} \\uparrow + \\mathrm{4NO_2} \\uparrow + \\mathrm{2H_2O}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Thụ động',
          text: 'Al, Fe, Cr bị thụ động trong nitric acid đặc, nguội: lớp oxide bền trên bề mặt ngăn kim loại phản ứng tiếp. Vì vậy có thể chở acid đặc bằng bình sắt hoặc nhôm.',
        },
        {
          type: 'p',
          text: 'Trong công nghiệp, nitric acid đi từ ammonia theo quá trình Ostwald: $\\mathrm{NH_3} \\to \\mathrm{NO} \\to \\mathrm{NO_2} \\to \\mathrm{HNO_3}$. Acid dùng nhiều nhất để sản xuất phân đạm $\\mathrm{NH_4NO_3}$, ngoài ra làm thuốc nổ, thuốc nhuộm, dược phẩm.',
        },
      ],
    },
    {
      heading: 'Hiện tượng phú dưỡng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phú dưỡng',
          text: 'Là hiện tượng ao, hồ, nguồn nước nhận quá nhiều nguyên tố dinh dưỡng nitrogen và phosphorus, làm tảo và thực vật thuỷ sinh phát triển quá mức.',
        },
        {
          type: 'p',
          text: 'Phân bón dư theo nước mưa đưa ion $\\mathrm{NO_3^-}$, $\\mathrm{PO_4^{3-}}$ vào ao hồ; nước thải sinh hoạt chưa xử lí cũng vậy. Tảo xanh mọc dày đặc che ánh sáng; tảo chết bị phân huỷ tiêu tốn oxygen hoà tan. Nước thiếu oxygen, cá chết dần và có mùi hôi.',
        },
        { type: 'widget', name: 'phu-duong' },
        {
          type: 'list',
          items: [
            'Phòng ngừa: xử lí nước thải trước khi xả vào ao hồ, bón phân đúng liều lượng, đúng lúc, đúng cách, tạo lưu thông cho nước.',
            'Khắc phục: sục khí bổ sung oxygen, dùng chế phẩm vi sinh có lợi, trồng thực vật thuỷ sinh hút dinh dưỡng, thay nước ao.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Từ ống khói đến lòng hồ',
    instruction:
      'Bấm lần lượt từng giai đoạn để xem NOx trở thành nitric acid. Sau đó tăng lượng NOx, cho thời gian trôi và đổi loại đá đáy hồ: hồ nào giữ được cá? Các số pH là mô hình đơn giản hoá để minh hoạ.',
  },
  examples: [
    {
      problem:
        'Cho $6{,}4$ g Cu tác dụng hết với dung dịch $\\mathrm{HNO_3}$ đặc, dư. Tính thể tích khí $\\mathrm{NO_2}$ ở điều kiện chuẩn.',
      steps: [
        '$n_{\\mathrm{Cu}} = \\dfrac{6{,}4}{64} = 0{,}1$ mol.',
        'Phương trình: $\\mathrm{Cu} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Cu(NO_3)_2} + \\mathrm{2NO_2} + \\mathrm{2H_2O}$, nên $n_{\\mathrm{NO_2}} = 0{,}2$ mol.',
        '$V = 0{,}2 \\cdot 24{,}79 = 4{,}958$ L.',
      ],
      answer: '$4{,}958$ L $\\mathrm{NO_2}$.',
    },
    {
      problem:
        'Một trận mưa có pH bằng $4{,}6$. Đây có phải mưa acid không? Nồng độ ion $\\mathrm{H^+}$ của nó gấp mấy lần nước mưa bình thường?',
      steps: [
        '$4{,}6 < 5{,}6$ nên đây là mưa acid.',
        'Mưa bình thường: $[\\mathrm{H^+}] = 10^{-5{,}6}$ M. Trận mưa này: $[\\mathrm{H^+}] = 10^{-4{,}6}$ M.',
        'Tỉ số $\\dfrac{10^{-4{,}6}}{10^{-5{,}6}} = 10$.',
      ],
      answer: 'Có, và nồng độ ion $\\mathrm{H^+}$ gấp $10$ lần.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Mưa acid là mưa có pH',
      options: ['Nhỏ hơn $5{,}6$', 'Nhỏ hơn $7$', 'Bằng $5{,}6$', 'Lớn hơn $5{,}6$'],
      answer: 0,
      hints: ['Nước mưa bình thường đã hơi chua do hoà tan $\\mathrm{CO_2}$.'],
      solution:
        'Nước mưa bình thường có pH khoảng $5{,}6$. Mưa có pH nhỏ hơn giá trị này mới là mưa acid.',
    },
    {
      type: 'number',
      prompt: 'Số oxi hoá của nitrogen trong $\\mathrm{HNO_3}$ là bao nhiêu?',
      answer: 5,
      hints: ['H có số oxi hoá $+1$, O có số oxi hoá $-2$.'],
      solution: '$(+1) + x + 3 \\cdot (-2) = 0$ nên $x = +5$.',
    },
    {
      type: 'multi',
      prompt: 'Những kim loại nào bị thụ động trong nitric acid đặc, nguội?',
      options: ['Al', 'Fe', 'Cr', 'Cu', 'Mg'],
      answers: [0, 1, 2],
      hints: ['Đó là những kim loại tạo lớp oxide bền trên bề mặt.'],
      solution: 'Al, Fe, Cr bị thụ động trong $\\mathrm{HNO_3}$ đặc, nguội. Cu và Mg vẫn phản ứng.',
    },
    {
      type: 'choice',
      prompt:
        'Cho Cu tác dụng với dung dịch $\\mathrm{HNO_3}$ loãng, thấy khí không màu hoá nâu trong không khí. Khí đó là',
      options: ['$\\mathrm{NO}$', '$\\mathrm{NO_2}$', '$\\mathrm{N_2}$', '$\\mathrm{H_2}$'],
      answer: 0,
      hints: ['Khí bị oxygen trong không khí oxi hoá thành khí nâu đỏ.'],
      solution:
        'Khí là NO: $\\mathrm{2NO} + \\mathrm{O_2} \\rightarrow \\mathrm{2NO_2}$, màu nâu đỏ.',
    },
    {
      type: 'number',
      prompt:
        'Hoà tan $m$ gam Al trong dung dịch $\\mathrm{HNO_3}$ loãng dư, thu được $4{,}958$ L khí NO duy nhất ở điều kiện chuẩn. Tính $m$.',
      answer: 5.4,
      tolerance: 0.01,
      unit: 'g',
      hints: [
        '$n_{\\mathrm{NO}} = \\dfrac{4{,}958}{24{,}79}$.',
        'Phương trình: $\\mathrm{Al} + \\mathrm{4HNO_3} \\rightarrow \\mathrm{Al(NO_3)_3} + \\mathrm{NO} + \\mathrm{2H_2O}$.',
      ],
      solution:
        '$n_{\\mathrm{Al}} = n_{\\mathrm{NO}} = 0{,}2$ mol nên $m = 0{,}2 \\cdot 27 = 5{,}4$ g.',
    },
    {
      type: 'choice',
      prompt: 'Dãy nào gồm các chất mà $\\mathrm{HNO_3}$ tác dụng chỉ thể hiện tính acid?',
      options: [
        '$\\mathrm{Fe_2O_3}$, $\\mathrm{CaCO_3}$, NaOH',
        'FeO, $\\mathrm{CaCO_3}$, NaOH',
        'Cu, $\\mathrm{Fe_2O_3}$, NaOH',
        'S, C, $\\mathrm{Fe(OH)_2}$',
      ],
      answer: 0,
      hints: [
        'Chất có thể bị oxi hoá tiếp (còn số oxi hoá thấp) sẽ khiến acid thể hiện tính oxi hoá.',
      ],
      solution:
        'Trong $\\mathrm{Fe_2O_3}$, $\\mathrm{CaCO_3}$, NaOH, Fe, Ca, Na và C đều đã ở số oxi hoá cao nhất nên không bị oxi hoá tiếp. FeO, Cu, S, C, $\\mathrm{Fe(OH)_2}$ đều bị $\\mathrm{HNO_3}$ oxi hoá.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các chất theo thứ tự trong quá trình Ostwald sản xuất nitric acid.',
      items: ['$\\mathrm{NH_3}$', '$\\mathrm{NO}$', '$\\mathrm{NO_2}$', '$\\mathrm{HNO_3}$'],
      answer: [0, 1, 2, 3],
      hints: ['Bước đầu oxi hoá ammonia với xúc tác Pt.'],
      solution:
        '$\\mathrm{4NH_3} + \\mathrm{5O_2} \\rightarrow \\mathrm{4NO} + \\mathrm{6H_2O}$; $\\mathrm{2NO} + \\mathrm{O_2} \\rightarrow \\mathrm{2NO_2}$; $\\mathrm{4NO_2} + \\mathrm{O_2} + \\mathrm{2H_2O} \\rightarrow \\mathrm{4HNO_3}$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các biện pháp giúp hạn chế phú dưỡng ao, hồ.',
      options: [
        'Xử lí nước thải trước khi xả',
        'Bón phân đúng liều lượng, đúng lúc',
        'Tạo lưu thông cho nước',
        'Tăng lượng phân bón để cây hút hết',
        'Xả nước thải sinh hoạt trực tiếp vào hồ',
      ],
      answers: [0, 1, 2],
      hints: ['Phú dưỡng do thừa N và P đi vào nước.'],
      solution:
        'Cần giảm lượng N, P đi vào ao hồ và giữ nước lưu thông. Thêm phân hay xả thải trực tiếp chỉ làm nặng hơn.',
    },
  ],
  takeaways: [
    'NO không màu, hoá nâu đỏ thành $\\mathrm{NO_2}$ trong không khí; NOx đến từ sấm sét và đốt nhiên liệu.',
    'Mưa acid có pH $< 5{,}6$, tác nhân chính là NOx và $\\mathrm{SO_2}$.',
    '$\\mathrm{HNO_3}$ là acid mạnh và chất oxi hoá mạnh (N có số oxi hoá $+5$); Al, Fe, Cr thụ động trong acid đặc, nguội.',
    'Phú dưỡng do thừa N, P trong nước: tảo phát triển mạnh, thiếu oxygen, cá chết.',
  ],
};
