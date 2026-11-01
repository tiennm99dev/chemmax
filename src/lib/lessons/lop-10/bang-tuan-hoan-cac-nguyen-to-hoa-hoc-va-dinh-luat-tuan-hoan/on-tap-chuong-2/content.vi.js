/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ôn tập chương 2: cấu tạo bảng tuần hoàn, xu hướng biến đổi tính chất nguyên tử và hợp chất trong chu kì, nhóm, định luật tuần hoàn và ý nghĩa của bảng tuần hoàn.',
  intro:
    'Chương 2 cho em một "bản đồ" của các nguyên tố: biết vị trí của một nguyên tố, em suy ra được cấu tạo nguyên tử và dự đoán được tính chất của nó. Bài ôn tập này hệ thống lại kiến thức của chương, rồi cho em luyện tập qua câu đố tìm nguyên tố, bộ bài luyện sinh tự động và các bài tập tổng hợp.',
  objectives: [
    'Hệ thống hoá cấu tạo bảng tuần hoàn: nguyên tắc sắp xếp, ô, chu kì, nhóm, khối nguyên tố.',
    'Vận dụng xu hướng biến đổi bán kính, độ âm điện, tính kim loại – phi kim và tính acid – base của oxide, hydroxide.',
    'Vận dụng định luật tuần hoàn và mối quan hệ vị trí – cấu tạo – tính chất để giải bài tập.',
  ],
  sections: [
    {
      heading: 'Hệ thống hoá kiến thức',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu tạo bảng tuần hoàn',
          head: ['Thành phần', 'Ý nghĩa'],
          rows: [
            ['Ô nguyên tố', 'Số thứ tự ô = số hiệu nguyên tử $Z$ = số proton = số electron'],
            ['Chu kì (7 chu kì)', 'Cùng số lớp electron; số thứ tự chu kì = số lớp electron'],
            ['Nhóm A (IA – VIIIA)', 'Nguyên tố s, p; số thứ tự nhóm = số electron lớp ngoài cùng'],
            ['Nhóm B (IB – VIIIB)', 'Nguyên tố d, f; nhóm VIIIB gồm 3 cột'],
          ],
        },
        {
          type: 'table',
          caption: 'Xu hướng biến đổi theo chiều tăng của điện tích hạt nhân',
          head: ['Tính chất', 'Trong một chu kì', 'Trong một nhóm A'],
          rows: [
            ['Bán kính nguyên tử', 'giảm', 'tăng'],
            ['Độ âm điện', 'tăng', 'giảm'],
            ['Tính kim loại', 'giảm', 'tăng'],
            ['Tính phi kim', 'tăng', 'giảm'],
            ['Tính base của oxide, hydroxide', 'giảm', 'tăng'],
            ['Tính acid của oxide, hydroxide', 'tăng', 'giảm'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Định luật tuần hoàn',
          text: 'Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hoá trị cao nhất với oxygen',
          text: 'Nguyên tố nhóm A có hoá trị cao nhất với oxygen bằng số thứ tự nhóm: oxide cao nhất của nhóm IA đến VIIA lần lượt là $\\mathrm{R_2O}$, $\\mathrm{RO}$, $\\mathrm{R_2O_3}$, $\\mathrm{RO_2}$, $\\mathrm{R_2O_5}$, $\\mathrm{RO_3}$, $\\mathrm{R_2O_7}$.',
        },
      ],
    },
    {
      heading: 'Luyện tập sinh tự động',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lượt có ba câu cho mỗi kĩ năng: tìm chu kì từ số hiệu, tìm số hiệu từ vị trí, hoá trị cao nhất với oxygen và tìm nguyên tố từ phần trăm khối lượng oxygen trong oxide cao nhất. Bản đồ kĩ năng cho biết phần nào em cần ôn lại.',
        },
        { type: 'widget', name: 'luyen-tap' },
      ],
    },
  ],
  explore: {
    title: 'Câu đố bảng tuần hoàn',
    instruction:
      'Đọc gợi ý về vị trí, cấu tạo hoặc tính chất, rồi bấm vào ô của nguyên tố em đoán. Nếu chưa chắc, bấm "Mở thêm gợi ý". Giải với ít gợi ý được nhiều điểm hơn. Khi đoán sai, câu đố cho biết gợi ý nào chưa khớp.',
  },
  examples: [
    {
      problem:
        'Nguyên tố X ở chu kì 3, nhóm VA. a) Viết cấu hình electron của X. b) X là kim loại hay phi kim? c) Viết công thức oxide và hydroxide cao nhất của X, so sánh tính acid của hydroxide đó với hydroxide cao nhất của silicon và của sulfur.',
      steps: [
        'a) Chu kì 3: $3$ lớp electron; nhóm VA: $5$ electron lớp ngoài cùng ($\\mathrm{3s^2 3p^3}$). Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$, $Z = 15$, X là phosphorus.',
        'b) Có $5$ electron lớp ngoài cùng nên X là phi kim.',
        'c) Hoá trị cao nhất V: oxide $\\mathrm{P_2O_5}$, hydroxide $\\mathrm{H_3PO_4}$.',
        'Si, P, S cùng chu kì 3 theo chiều tăng $Z$, tính acid của hydroxide tăng: $\\mathrm{H_2SiO_3} < \\mathrm{H_3PO_4} < \\mathrm{H_2SO_4}$.',
      ],
      answer:
        'X là P ($\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^3}$), phi kim; $\\mathrm{P_2O_5}$, $\\mathrm{H_3PO_4}$; tính acid mạnh hơn $\\mathrm{H_2SiO_3}$, yếu hơn $\\mathrm{H_2SO_4}$.',
    },
    {
      problem:
        'Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kì, tổng số proton của hai hạt nhân là $25$. Xác định A, B và so sánh tính kim loại của chúng.',
      steps: [
        'Gọi số proton của A là $Z$, của B là $Z + 1$: $Z + (Z + 1) = 25$, nên $Z = 12$.',
        'A là magnesium ($Z = 12$), B là aluminium ($Z = 13$), cùng chu kì 3.',
        'Trong một chu kì, tính kim loại giảm theo chiều tăng $Z$, nên Mg có tính kim loại mạnh hơn Al.',
      ],
      answer: 'A là Mg, B là Al; tính kim loại của Mg mạnh hơn Al.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên tố nào sau đây thuộc khối d?',
      options: ['Ca ($Z = 20$)', 'Fe ($Z = 26$)', 'Br ($Z = 35$)', 'K ($Z = 19$)'],
      answer: 1,
      hints: ['Viết cấu hình và xem electron cuối cùng điền vào phân lớp nào.'],
      solution:
        'Fe: $\\mathrm{[Ar]3d^6 4s^2}$, electron cuối cùng điền vào 3d nên Fe là nguyên tố d. Ca, K là nguyên tố s; Br ($\\mathrm{[Ar]3d^{10}4s^24p^5}$) là nguyên tố p.',
    },
    {
      type: 'number',
      prompt: 'Chu kì 4 có bao nhiêu nguyên tố?',
      answer: 18,
      hints: ['Chu kì 4 bắt đầu từ K ($Z = 19$) và kết thúc ở Kr ($Z = 36$).'],
      solution:
        'Chu kì 4 gồm các nguyên tố từ $Z = 19$ đến $Z = 36$: $36 - 19 + 1 = 18$ nguyên tố.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố có cấu hình electron $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^2}$ ở vị trí',
      options: [
        'chu kì 4, nhóm IIA',
        'chu kì 2, nhóm IVA',
        'chu kì 4, nhóm IIB',
        'chu kì 3, nhóm VIIIA',
      ],
      answer: 0,
      hints: ['Đếm số lớp electron; electron cuối cùng vào phân lớp 4s.'],
      solution:
        'Có $4$ lớp electron: chu kì 4. Electron cuối cùng vào 4s, nguyên tố s, có $2$ electron lớp ngoài cùng: nhóm IIA (calcium, $Z = 20$).',
    },
    {
      type: 'number',
      prompt:
        'Nguyên tử của nguyên tố X có tổng số electron ở các phân lớp p là $11$. X ở ô số mấy?',
      answer: 17,
      hints: ['Phân lớp 2p chứa tối đa $6$ electron, phần còn lại ở 3p.'],
      solution:
        'Có $6$ electron ở 2p và $5$ electron ở 3p: cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^5}$, có $17$ electron. X là chlorine, ở ô số $17$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các nguyên tử theo chiều bán kính giảm dần.',
      items: ['Mg', 'K', 'S', 'Na'],
      answer: [1, 3, 0, 2],
      hints: ['K ở chu kì 4, có nhiều lớp electron nhất.', 'Na, Mg, S cùng chu kì 3.'],
      solution:
        'K có $4$ lớp electron nên lớn nhất. Trong chu kì 3, bán kính giảm theo chiều tăng $Z$: Na > Mg > S. Vậy K > Na > Mg > S.',
    },
    {
      type: 'choice',
      prompt: 'Dãy nào được sắp xếp theo chiều độ âm điện tăng dần?',
      options: ['F, O, N, C', 'Na, Mg, P, Cl', 'Cl, S, P, Si', 'I, Br, Cl, K'],
      answer: 1,
      hints: ['Trong chu kì, độ âm điện tăng theo chiều tăng $Z$.'],
      solution:
        'Na, Mg, P, Cl cùng chu kì 3, theo chiều tăng $Z$, nên độ âm điện tăng dần ($0{,}93 < 1{,}31 < 2{,}19 < 3{,}16$). Các dãy F, O, N, C và Cl, S, P, Si giảm dần; trong dãy cuối K có độ âm điện nhỏ nhất nên không tăng.',
    },
    {
      type: 'choice',
      prompt: 'Hydroxide nào có tính base mạnh nhất?',
      options: [
        '$\\mathrm{Mg(OH)_2}$',
        '$\\mathrm{Al(OH)_3}$',
        '$\\mathrm{NaOH}$',
        '$\\mathrm{KOH}$',
      ],
      answer: 3,
      hints: ['Tính base của hydroxide biến đổi cùng chiều với tính kim loại.'],
      solution:
        'Tính kim loại: Al < Mg < Na < K (Na, K cùng nhóm IA, K ở dưới). Vậy $\\mathrm{KOH}$ có tính base mạnh nhất.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố R ở nhóm VIA. Công thức oxide cao nhất của R là',
      options: ['$\\mathrm{RO_2}$', '$\\mathrm{R_2O_6}$', '$\\mathrm{RO_3}$', '$\\mathrm{R_2O_3}$'],
      answer: 2,
      hints: ['Hoá trị cao nhất với oxygen bằng số thứ tự nhóm; rút gọn công thức.'],
      solution:
        'Hoá trị cao nhất VI: $\\mathrm{R_2O_6}$ rút gọn thành $\\mathrm{RO_3}$ (như $\\mathrm{SO_3}$).',
    },
    {
      type: 'number',
      prompt:
        'Oxide cao nhất của nguyên tố R thuộc nhóm IVA chứa $53{,}33\\%$ oxygen về khối lượng. Tính nguyên tử khối của R (làm tròn đến hàng đơn vị).',
      answer: 28,
      tolerance: 0.5,
      hints: [
        'Nhóm IVA nên oxide cao nhất có dạng $\\mathrm{RO_2}$.',
        '$\\dfrac{32}{R + 32} = 0{,}5333$.',
      ],
      solution:
        '$\\mathrm{RO_2}$: $\\dfrac{32}{R + 32} = 0{,}5333$, nên $R + 32 = \\dfrac{32}{0{,}5333} \\approx 60{,}0$ và $R \\approx 28$. R là silicon, oxide $\\mathrm{SiO_2}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi oxide cao nhất với tính chất của nó.',
      left: ['$\\mathrm{Na_2O}$', '$\\mathrm{Al_2O_3}$', '$\\mathrm{SO_3}$'],
      right: ['oxide base', 'oxide lưỡng tính', 'oxide acid'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Đầu chu kì là kim loại mạnh, cuối chu kì là phi kim mạnh; Al ở giữa.'],
      solution:
        '$\\mathrm{Na_2O}$ là oxide base (tạo NaOH với nước); $\\mathrm{Al_2O_3}$ là oxide lưỡng tính; $\\mathrm{SO_3}$ là oxide acid (tạo $\\mathrm{H_2SO_4}$ với nước).',
    },
    {
      type: 'multi',
      prompt: 'Nguyên tố X có $Z = 19$. Chọn tất cả các phát biểu đúng.',
      options: [
        'X ở chu kì 4, nhóm IA.',
        'X là kim loại mạnh.',
        'Oxide cao nhất của X là $\\mathrm{X_2O}$, hydroxide là base mạnh.',
        'Bán kính nguyên tử X nhỏ hơn sodium.',
        'X có độ âm điện lớn hơn sodium.',
      ],
      answers: [0, 1, 2],
      hints: ['X là potassium, đứng dưới sodium trong nhóm IA.'],
      solution:
        'K: $\\mathrm{[Ar]4s^1}$, chu kì 4, nhóm IA, kim loại mạnh; oxide $\\mathrm{K_2O}$, hydroxide $\\mathrm{KOH}$ là base mạnh. Sai: K ở dưới Na nên bán kính lớn hơn và độ âm điện nhỏ hơn Na.',
    },
    {
      type: 'number',
      prompt:
        'Cho $0{,}69$ g một kim loại kiềm (nhóm IA) tác dụng hết với nước, thu được $0{,}37185$ L khí $\\mathrm{H_2}$ (đkc). Tính nguyên tử khối của kim loại đó.',
      answer: 23,
      tolerance: 0.5,
      hints: [
        '$\\mathrm{2M + 2H_2O \\rightarrow 2MOH + H_2}$.',
        '$n_{\\mathrm{H_2}} = \\dfrac{V}{24{,}79}$; số mol kim loại gấp đôi số mol khí.',
      ],
      solution:
        '$n_{\\mathrm{H_2}} = \\dfrac{0{,}37185}{24{,}79} = 0{,}015$ mol, nên $n_{\\mathrm{M}} = 0{,}03$ mol và $M = \\dfrac{0{,}69}{0{,}03} = 23$ g/mol. Kim loại là sodium.',
    },
  ],
  takeaways: [
    'Vị trí ⇄ cấu tạo: ô = $Z$; chu kì = số lớp electron; nhóm A = số electron lớp ngoài cùng; khối s, p, d, f theo phân lớp electron cuối cùng.',
    'Trong chu kì (Z tăng): bán kính giảm, độ âm điện tăng, tính kim loại giảm, tính phi kim tăng, oxide và hydroxide chuyển từ base sang acid.',
    'Trong nhóm A (Z tăng): bán kính tăng, độ âm điện giảm, tính kim loại tăng, tính phi kim giảm.',
    'Định luật tuần hoàn cho phép dự đoán tính chất của một nguyên tố từ vị trí của nó và so sánh với các nguyên tố lân cận.',
  ],
};
