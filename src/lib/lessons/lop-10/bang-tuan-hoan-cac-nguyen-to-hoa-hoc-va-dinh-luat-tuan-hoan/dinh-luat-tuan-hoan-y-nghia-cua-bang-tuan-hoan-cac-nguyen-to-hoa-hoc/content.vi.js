/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Định luật tuần hoàn: tính chất của các nguyên tố, đơn chất và hợp chất biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân; từ vị trí trong bảng suy ra cấu tạo nguyên tử và dự đoán tính chất.',
  intro:
    'Khi lập bảng tuần hoàn, Mendeleev để trống ô của một nguyên tố chưa biết nằm dưới aluminium và dự đoán nó là kim loại, có nguyên tử khối khoảng 68, oxide có công thức $\\mathrm{X_2O_3}$. Vài năm sau, gallium được tìm ra với đúng những tính chất ấy. Sức mạnh dự đoán đó đến từ định luật tuần hoàn, nội dung chính của bài này.',
  objectives: [
    'Phát biểu được định luật tuần hoàn.',
    'Trình bày được ý nghĩa của bảng tuần hoàn: mối quan hệ giữa vị trí (ô, chu kì, nhóm), cấu tạo nguyên tử và tính chất của nguyên tố.',
    'Từ vị trí của một nguyên tố nhóm A, dự đoán được cấu hình electron, tính kim loại – phi kim, công thức và tính acid – base của oxide, hydroxide cao nhất.',
    'So sánh được tính chất của một nguyên tố với các nguyên tố lân cận.',
  ],
  sections: [
    {
      heading: 'Định luật tuần hoàn',
      blocks: [
        {
          type: 'p',
          text: 'Ở các bài trước, em đã thấy cấu hình electron lớp ngoài cùng lặp lại sau mỗi chu kì; bán kính nguyên tử, độ âm điện, tính kim loại – phi kim, hoá trị cao nhất và tính acid – base của oxide, hydroxide cũng lặp lại xu hướng của chúng trong mỗi chu kì mới. Những quy luật đó được tổng kết thành định luật tuần hoàn.',
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
          text: 'Mendeleev phát biểu định luật theo chiều tăng của nguyên tử khối. Ngày nay, định luật được phát biểu theo điện tích hạt nhân, vì chính số proton quyết định cấu hình electron và do đó quyết định tính chất của nguyên tố.',
        },
      ],
    },
    {
      heading: 'Ý nghĩa của bảng tuần hoàn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: '1. Quan hệ giữa vị trí và cấu tạo nguyên tử',
          text: 'Biết vị trí của một nguyên tố nhóm A trong bảng, ta suy ra được cấu tạo nguyên tử của nó, và ngược lại.',
        },
        {
          type: 'table',
          caption: 'Vị trí ⇄ cấu tạo nguyên tử',
          head: ['Vị trí', 'Cấu tạo nguyên tử'],
          rows: [
            ['Số thứ tự ô', 'Số hiệu nguyên tử $Z$ = số proton = số electron'],
            ['Số thứ tự chu kì', 'Số lớp electron'],
            ['Số thứ tự nhóm A', 'Số electron lớp ngoài cùng (số electron hoá trị)'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: '2. Quan hệ giữa vị trí và tính chất',
          text: 'Từ vị trí của một nguyên tố nhóm A, có thể dự đoán:',
        },
        {
          type: 'list',
          items: [
            'Nguyên tố là kim loại hay phi kim: nhóm IA, IIA, IIIA (trừ H, B) thường là kim loại; nhóm VA, VIA, VIIA thường là phi kim; nhóm IVA có thể là kim loại hoặc phi kim.',
            'Hoá trị cao nhất của nguyên tố với oxygen (bằng số thứ tự nhóm) và công thức oxide cao nhất.',
            'Công thức hydroxide tương ứng và tính acid hay base của oxide, hydroxide đó.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: '3. So sánh tính chất với các nguyên tố lân cận',
          text: 'Dựa vào xu hướng biến đổi trong chu kì và trong nhóm, so sánh được bán kính, độ âm điện, tính kim loại – phi kim, tính acid – base của hợp chất giữa nguyên tố đó với các nguyên tố đứng trước, sau, trên và dưới nó.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ba bước dự đoán',
          text: 'Vị trí (ô, chu kì, nhóm) → cấu tạo (số proton, số lớp electron, số electron lớp ngoài cùng) → tính chất (kim loại hay phi kim, hoá trị cao nhất, oxide và hydroxide, so sánh với nguyên tố lân cận).',
        },
      ],
    },
  ],
  explore: {
    title: 'Thẻ nguyên tố bí ẩn',
    instruction:
      'Mỗi thẻ chỉ cho biết chu kì và nhóm của một nguyên tố. Hãy dự đoán bốn điều: cấu hình electron lớp ngoài cùng, nguyên tố là kim loại hay phi kim, công thức oxide cao nhất (gọi nguyên tố là R) và tính chất của hydroxide cao nhất. Khi đủ bốn dự đoán, bấm "Lật thẻ" để xem nguyên tố thật và kiểm tra.',
  },
  examples: [
    {
      problem:
        'Nguyên tố sulfur ở ô số 16, chu kì 3, nhóm VIA. Từ vị trí đó, nêu cấu tạo nguyên tử và dự đoán tính chất hoá học cơ bản của sulfur.',
      steps: [
        'Ô số 16: hạt nhân có $16$ proton, nguyên tử có $16$ electron.',
        'Chu kì 3: có $3$ lớp electron. Nhóm VIA: có $6$ electron lớp ngoài cùng; cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$.',
        'Có $6$ electron lớp ngoài cùng nên sulfur là phi kim.',
        'Hoá trị cao nhất với oxygen là VI: oxide cao nhất $\\mathrm{SO_3}$ là oxide acid; hydroxide tương ứng $\\mathrm{H_2SO_4}$ là acid mạnh.',
      ],
      answer:
        'Sulfur có $16$ proton, $16$ electron, $3$ lớp electron, $6$ electron lớp ngoài cùng; là phi kim, oxide cao nhất $\\mathrm{SO_3}$ (oxide acid), hydroxide $\\mathrm{H_2SO_4}$ (acid mạnh).',
    },
    {
      problem:
        'So sánh tính phi kim của phosphorus ($Z = 15$) với các nguyên tố lân cận: silicon ($Z = 14$), sulfur ($Z = 16$) và nitrogen ($Z = 7$).',
      steps: [
        'Si, P, S cùng chu kì 3, đứng liền nhau theo chiều tăng $Z$. Trong một chu kì, tính phi kim tăng dần: Si < P < S.',
        'N và P cùng nhóm VA, N ở trên P. Trong một nhóm A, tính phi kim giảm dần khi đi xuống: P < N.',
        'Tương tự, tính acid của các hydroxide: $\\mathrm{H_2SiO_3} < \\mathrm{H_3PO_4} < \\mathrm{H_2SO_4}$ và $\\mathrm{H_3PO_4} < \\mathrm{HNO_3}$.',
      ],
      answer: 'Tính phi kim của P mạnh hơn Si, yếu hơn S và yếu hơn N.',
    },
    {
      problem:
        'Nguyên tử X có cấu hình electron $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^1}$. Xác định vị trí của X và dự đoán tính chất của oxide, hydroxide cao nhất.',
      steps: [
        '$Z = 13$, nên X ở ô số 13 (aluminium).',
        'Có $3$ lớp electron: chu kì 3. Electron cuối cùng vào 3p, lớp ngoài cùng có $3$ electron: nhóm IIIA.',
        'Nhóm IIIA (trừ B) là kim loại; hoá trị cao nhất III, oxide $\\mathrm{Al_2O_3}$, hydroxide $\\mathrm{Al(OH)_3}$.',
        'Al ở ranh giới giữa kim loại và phi kim trong chu kì 3, nên $\\mathrm{Al_2O_3}$ và $\\mathrm{Al(OH)_3}$ lưỡng tính.',
      ],
      answer:
        'X ở ô 13, chu kì 3, nhóm IIIA; $\\mathrm{Al_2O_3}$ là oxide lưỡng tính, $\\mathrm{Al(OH)_3}$ là hydroxide lưỡng tính.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Theo định luật tuần hoàn, tính chất của các nguyên tố và đơn chất, thành phần và tính chất của hợp chất biến đổi tuần hoàn theo chiều tăng của',
      options: ['nguyên tử khối', 'điện tích hạt nhân nguyên tử', 'số neutron', 'số lớp electron'],
      answer: 1,
      hints: ['Bảng tuần hoàn hiện nay xếp các nguyên tố theo đại lượng nào?'],
      solution:
        'Định luật tuần hoàn hiện nay được phát biểu theo chiều tăng của điện tích hạt nhân nguyên tử. Nguyên tử khối là cách phát biểu ban đầu của Mendeleev.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tố Y ở chu kì 3, nhóm VIA. Hạt nhân nguyên tử Y có bao nhiêu proton?',
      answer: 16,
      hints: [
        'Chu kì 3: $3$ lớp electron; nhóm VIA: $6$ electron lớp ngoài cùng.',
        'Viết cấu hình rồi đếm tổng số electron.',
      ],
      solution:
        'Cấu hình của Y: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^4}$, có $16$ electron, nên có $16$ proton. Y là sulfur.',
    },
    {
      type: 'number',
      prompt: 'Nguyên tử của nguyên tố ở ô số 19 có bao nhiêu electron ở lớp ngoài cùng?',
      answer: 1,
      hints: ['Viết cấu hình của nguyên tử có $19$ electron; nhớ 4s điền trước 3d.'],
      solution:
        'Cấu hình: $\\mathrm{1s^2 2s^2 2p^6 3s^2 3p^6 4s^1}$. Lớp ngoài cùng có $1$ electron (potassium, nhóm IA).',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tố X có $Z = 12$. Phát biểu nào về X là đúng?',
      options: [
        'X là phi kim, oxide cao nhất là $\\mathrm{XO_2}$.',
        'X là kim loại, oxide cao nhất là $\\mathrm{XO}$, hydroxide là base.',
        'X là kim loại, oxide cao nhất là $\\mathrm{X_2O}$.',
        'X là khí hiếm.',
      ],
      answer: 1,
      hints: ['Cấu hình $\\mathrm{1s^2 2s^2 2p^6 3s^2}$: X ở nhóm nào?'],
      solution:
        'X ($\\mathrm{[Ne]3s^2}$) ở chu kì 3, nhóm IIA: là kim loại (magnesium). Hoá trị cao nhất II, oxide $\\mathrm{MgO}$ là oxide base, hydroxide $\\mathrm{Mg(OH)_2}$ là base.',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên tử R có cấu hình electron $\\mathrm{[Ne]3s^2 3p^3}$. Công thức hydroxide cao nhất của R là',
      options: [
        '$\\mathrm{R(OH)_3}$',
        '$\\mathrm{H_3RO_4}$',
        '$\\mathrm{HRO_3}$',
        '$\\mathrm{H_2RO_4}$',
      ],
      answer: 1,
      hints: [
        'R có $5$ electron lớp ngoài cùng: nhóm VA, là phi kim.',
        'Oxide cao nhất là $\\mathrm{R_2O_5}$; R là phosphorus.',
      ],
      solution:
        'R là phosphorus (chu kì 3, nhóm VA), phi kim; oxide cao nhất $\\mathrm{P_2O_5}$ và hydroxide là acid $\\mathrm{H_3PO_4}$, tức $\\mathrm{H_3RO_4}$. ($\\mathrm{HRO_3}$ ứng với nitrogen ở chu kì 2: $\\mathrm{HNO_3}$.)',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các nguyên tố theo chiều tính kim loại tăng dần.',
      items: ['Na', 'Al', 'K', 'Mg'],
      answer: [1, 3, 0, 2],
      hints: ['Na, Mg, Al cùng chu kì 3; Na và K cùng nhóm IA.'],
      solution:
        'Trong chu kì 3, tính kim loại giảm từ Na đến Al: Al < Mg < Na. Trong nhóm IA, K mạnh hơn Na. Vậy: Al < Mg < Na < K.',
    },
    {
      type: 'number',
      prompt:
        'Cho $4{,}8$ g kim loại R thuộc nhóm IIA tác dụng hết với dung dịch HCl dư, thu được $4{,}958$ L khí $\\mathrm{H_2}$ (đkc). Tính nguyên tử khối của R.',
      answer: 24,
      tolerance: 0.5,
      hints: [
        'Nhóm IIA nên R có hoá trị II: $\\mathrm{R + 2HCl \\rightarrow RCl_2 + H_2}$.',
        'Ở điều kiện chuẩn, $1$ mol khí chiếm $24{,}79$ L.',
      ],
      solution:
        '$n_{\\mathrm{H_2}} = \\dfrac{4{,}958}{24{,}79} = 0{,}2$ mol. Theo phương trình, $n_{\\mathrm{R}} = n_{\\mathrm{H_2}} = 0{,}2$ mol, nên $M_{\\mathrm{R}} = \\dfrac{4{,}8}{0{,}2} = 24$ g/mol. R là magnesium.',
    },
    {
      type: 'text',
      prompt: 'Nguyên tố ở chu kì 2, nhóm VA là nguyên tố nào? (Viết tên hoặc kí hiệu hoá học.)',
      accept: ['nitrogen', 'N', 'nitơ'],
      hints: ['Chu kì 2, nhóm VA: cấu hình $\\mathrm{1s^2 2s^2 2p^3}$.'],
      solution: 'Cấu hình $\\mathrm{1s^2 2s^2 2p^3}$ có $7$ electron, $Z = 7$: nitrogen (N).',
    },
    {
      type: 'multi',
      prompt: 'Nguyên tố X ở chu kì 3, nhóm VIIA. Chọn tất cả các dự đoán đúng về X.',
      options: [
        'Nguyên tử X có $7$ electron lớp ngoài cùng.',
        'X là phi kim.',
        'Oxide cao nhất của X là $\\mathrm{X_2O_7}$.',
        'Hydroxide cao nhất của X là một base.',
        'Tính phi kim của X mạnh hơn của fluorine.',
      ],
      answers: [0, 1, 2],
      hints: ['X là chlorine.', 'Fluorine ở trên chlorine trong nhóm VIIA.'],
      solution:
        'X là chlorine: $7$ electron lớp ngoài cùng, phi kim, oxide cao nhất $\\mathrm{Cl_2O_7}$. Sai: hydroxide $\\mathrm{HClO_4}$ là acid rất mạnh, không phải base; trong nhóm VIIA tính phi kim giảm từ F xuống Cl, nên Cl yếu hơn F.',
    },
  ],
  takeaways: [
    'Định luật tuần hoàn: tính chất của các nguyên tố và đơn chất, thành phần và tính chất của các hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
    'Vị trí ⇄ cấu tạo: số thứ tự ô = $Z$ = số proton = số electron; số thứ tự chu kì = số lớp electron; số thứ tự nhóm A = số electron lớp ngoài cùng.',
    'Từ vị trí của nguyên tố nhóm A, dự đoán được kim loại hay phi kim, hoá trị cao nhất với oxygen, công thức và tính acid – base của oxide, hydroxide cao nhất.',
    'So sánh tính chất với nguyên tố lân cận bằng xu hướng trong chu kì (theo hàng) và trong nhóm (theo cột).',
  ],
};
