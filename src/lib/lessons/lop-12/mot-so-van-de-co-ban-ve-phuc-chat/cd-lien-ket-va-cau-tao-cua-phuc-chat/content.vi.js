/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thuyết liên kết hoá trị (VB) cho phức chất: nguyên tử trung tâm lai hoá sp, sp3, dsp2, d2sp3 hoặc sp3d2 để nhận cặp electron của phối tử; dạng hình học tương ứng; đồng phân hình học cis – trans và đồng phân liên kết.',
  intro:
    'Ion $\\mathrm{Ni^{2+}}$ tạo với $\\mathrm{Cl^-}$ phức chất $\\mathrm{[NiCl_4]^{2-}}$ dạng tứ diện, nhưng với $\\mathrm{CN^-}$ lại tạo $\\mathrm{[Ni(CN)_4]^{2-}}$ dạng vuông phẳng. Cùng là $\\mathrm{[PtCl_2(NH_3)_2]}$ mà một dạng là thuốc chữa ung thư, dạng kia thì không. Cách các orbital của nguyên tử trung tâm "đón" cặp electron của phối tử sẽ giải thích những điều này.',
  objectives: [
    'Trình bày được nội dung cơ bản của thuyết liên kết hoá trị (VB) áp dụng cho phức chất.',
    'Vận dụng thuyết VB để giải thích sự hình thành liên kết và dạng hình học của một số phức chất: lai hoá sp, $sp^3$, $dsp^2$, $d^2sp^3$, $sp^3d^2$.',
    'Nêu được khái niệm đồng phân hình học (cis – trans) của phức chất vuông phẳng và bát diện; nhận biết được đồng phân liên kết.',
  ],
  sections: [
    {
      heading: 'Thuyết liên kết hoá trị (VB) cho phức chất',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nội dung thuyết VB',
          text: 'Liên kết giữa nguyên tử trung tâm M và phối tử L là liên kết cho – nhận: mỗi phối tử cho một cặp electron vào một orbital trống của M. Để tạo các liên kết tương đương, các orbital trống của M lai hoá với nhau thành các orbital lai hoá có năng lượng bằng nhau, hướng về những vị trí xác định trong không gian. Kiểu lai hoá quyết định dạng hình học của phức chất.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Viết cấu hình electron của nguyên tử trung tâm (ion kim loại) và biểu diễn electron hoá trị theo ô orbital.',
            'Xác định số orbital trống cần dùng (bằng số phối trí) và kiểu lai hoá; khi cần, các electron d dồn lại ghép đôi để giải phóng orbital d trống.',
            'Mỗi orbital lai hoá nhận một cặp electron của một nguyên tử cho, tạo một liên kết $\\sigma$.',
          ],
        },
      ],
    },
    {
      heading: 'Lai hoá và dạng hình học của phức chất',
      blocks: [
        {
          type: 'table',
          head: ['Số phối trí', 'Kiểu lai hoá', 'Dạng hình học', 'Ví dụ'],
          rows: [
            ['2', '$sp$', 'đường thẳng', '$\\mathrm{[Ag(NH_3)_2]^+}$'],
            ['4', '$sp^3$', 'tứ diện', '$\\mathrm{[Zn(NH_3)_4]^{2+}}$, $\\mathrm{[NiCl_4]^{2-}}$'],
            [
              '4',
              '$dsp^2$',
              'vuông phẳng',
              '$\\mathrm{[Ni(CN)_4]^{2-}}$, $\\mathrm{[PtCl_4]^{2-}}$',
            ],
            [
              '6',
              '$d^2sp^3$',
              'bát diện',
              '$\\mathrm{[Co(NH_3)_6]^{3+}}$, $\\mathrm{[Fe(CN)_6]^{3-}}$',
            ],
            ['6', '$sp^3d^2$', 'bát diện', '$\\mathrm{[FeF_6]^{3-}}$, $\\mathrm{[CoF_6]^{3-}}$'],
          ],
          caption: 'Kiểu lai hoá của nguyên tử trung tâm và dạng hình học của phức chất.',
        },
        {
          type: 'p',
          text: 'Ví dụ $\\mathrm{[Zn(NH_3)_4]^{2+}}$: $\\mathrm{Zn^{2+}}$ có cấu hình $[\\mathrm{Ar}]3d^{10}$, các orbital 3d đã đầy. Một orbital 4s và ba orbital 4p trống lai hoá $sp^3$ thành 4 orbital hướng về 4 đỉnh của tứ diện đều; 4 phân tử $\\mathrm{NH_3}$ cho cặp electron vào 4 orbital này.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lai hoá trong và lai hoá ngoài',
          text: 'Với phức chất bát diện của ion có electron 3d, có hai khả năng. Lai hoá $d^2sp^3$ dùng hai orbital 3d (lớp trong) cùng 4s, 4p; phối tử như $\\mathrm{CN^-}$ làm các electron 3d dồn lại ghép đôi để giải phóng hai orbital 3d. Lai hoá $sp^3d^2$ dùng 4s, 4p và hai orbital 4d (lớp ngoài), các electron 3d giữ nguyên, như với phối tử $\\mathrm{F^-}$. Vì thế $\\mathrm{[Fe(CN)_6]^{3-}}$ chỉ còn 1 electron độc thân, còn $\\mathrm{[FeF_6]^{3-}}$ có 5 electron độc thân.',
        },
        {
          type: 'p',
          text: 'Tương tự, $\\mathrm{Ni^{2+}}$ ($[\\mathrm{Ar}]3d^8$) lai hoá $sp^3$ trong $\\mathrm{[NiCl_4]^{2-}}$ (tứ diện, 2 electron độc thân), còn trong $\\mathrm{[Ni(CN)_4]^{2-}}$ các electron 3d ghép đôi, giải phóng một orbital 3d để lai hoá $dsp^2$ (vuông phẳng, không có electron độc thân).',
        },
      ],
    },
    {
      heading: 'Đồng phân của phức chất',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng phân hình học',
          text: 'Các phức chất có cùng công thức, cùng các liên kết nhưng khác nhau về vị trí tương đối của các phối tử trong không gian là đồng phân hình học. Đồng phân cis: hai phối tử giống nhau ở cùng một phía (kề nhau, góc $90^\\circ$); đồng phân trans: hai phối tử giống nhau ở hai phía đối diện (góc $180^\\circ$).',
        },
        {
          type: 'table',
          head: ['Kiểu phức chất', 'Dạng hình học', 'Số đồng phân hình học', 'Ví dụ'],
          rows: [
            [
              '$\\mathrm{MA_2B_2}$',
              'vuông phẳng',
              '2 (cis, trans)',
              '$\\mathrm{[PtCl_2(NH_3)_2]}$',
            ],
            ['$\\mathrm{MA_4B_2}$', 'bát diện', '2 (cis, trans)', '$\\mathrm{[CoCl_2(NH_3)_4]^+}$'],
            ['$\\mathrm{MA_2B_2}$', 'tứ diện', 'không có', '$\\mathrm{[ZnCl_2(NH_3)_2]}$'],
          ],
          caption: 'Trong tứ diện, mọi cặp đỉnh đều kề nhau nên không có đồng phân cis – trans.',
        },
        {
          type: 'p',
          text: 'Đồng phân cis của $\\mathrm{[PtCl_2(NH_3)_2]}$ là cisplatin, một thuốc điều trị ung thư; đồng phân trans hầu như không có tác dụng này. Hai đồng phân có tính chất khác nhau dù cùng công thức.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đồng phân liên kết',
          text: 'Một phối tử có thể liên kết với nguyên tử trung tâm qua những nguyên tử cho khác nhau. Ion $\\mathrm{NO_2^-}$ có thể cho cặp electron qua N (nitro) hoặc qua O (nitrito): $\\mathrm{[Co(NO_2)(NH_3)_5]^{2+}}$ và $\\mathrm{[Co(ONO)(NH_3)_5]^{2+}}$ là hai đồng phân liên kết, có màu khác nhau.',
        },
      ],
    },
    {
      heading: 'Dự án: Mô hình phức chất bằng vật liệu đơn giản',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tự tay dựng mô hình ba dạng hình học của phức chất và các cặp đồng phân cis – trans, qua đó thấy vì sao tứ diện không có đồng phân hình học.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: đất nặn hoặc quả cầu xốp hai màu (một màu cho nguyên tử trung tâm), que tre hoặc tăm, thước đo góc.',
            'Dựng mô hình tứ diện ($\\mathrm{[Zn(NH_3)_4]^{2+}}$), vuông phẳng ($\\mathrm{[Ni(CN)_4]^{2-}}$) và bát diện ($\\mathrm{[Co(NH_3)_6]^{3+}}$); đo góc giữa hai liên kết kề nhau.',
            'Thay hai phối tử bằng quả cầu màu khác để dựng cis- và trans-$\\mathrm{[PtCl_2(NH_3)_2]}$, cis- và trans-$\\mathrm{[CoCl_2(NH_3)_4]^+}$. Thử xoay để kiểm tra hai mô hình có trùng nhau không.',
            'Làm tương tự với mô hình tứ diện $\\mathrm{[ZnCl_2(NH_3)_2]}$ và ghi nhận xét.',
            'Vẽ sơ đồ ô orbital minh hoạ sự lai hoá của nguyên tử trung tâm trong mỗi mô hình.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: ảnh các mô hình, bảng góc liên kết đo được so với giá trị lí thuyết ($109{,}5^\\circ$, $90^\\circ$, $180^\\circ$), sơ đồ lai hoá và kết luận về số đồng phân hình học của mỗi kiểu phức chất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lai hoá và dạng hình học',
    instruction:
      'Ở chế độ "Lai hoá", chọn một phức chất: so sánh ô orbital của ion tự do và của ion trong phức chất (ô xanh là orbital lai hoá nhận cặp electron của phối tử), rồi kéo hoặc dùng phím mũi tên để xoay mô hình. So sánh $\\mathrm{[NiCl_4]^{2-}}$ với $\\mathrm{[Ni(CN)_4]^{2-}}$ và $\\mathrm{[FeF_6]^{3-}}$ với $\\mathrm{[Fe(CN)_6]^{3-}}$. Ở chế độ "Đồng phân", chọn hai vị trí cho phối tử Cl để tạo đồng phân cis hoặc trans.',
  },
  examples: [
    {
      problem:
        'Dùng thuyết VB giải thích sự hình thành liên kết và dạng hình học của $\\mathrm{[Zn(NH_3)_4]^{2+}}$.',
      steps: [
        'Zn ($Z = 30$): $[\\mathrm{Ar}]3d^{10}4s^2$, nên $\\mathrm{Zn^{2+}}$: $[\\mathrm{Ar}]3d^{10}$; orbital 4s và 4p trống.',
        'Số phối trí 4: một orbital 4s và ba orbital 4p lai hoá $sp^3$, tạo 4 orbital lai hoá hướng về 4 đỉnh tứ diện đều.',
        'Mỗi phân tử $\\mathrm{NH_3}$ cho cặp electron chưa liên kết của N vào một orbital lai hoá: 4 liên kết $\\sigma$ cho – nhận.',
      ],
      answer: 'Lai hoá $sp^3$, phức chất có dạng tứ diện.',
    },
    {
      problem:
        'Cho biết $\\mathrm{[Fe(CN)_6]^{3-}}$ có 1 electron độc thân, còn $\\mathrm{[FeF_6]^{3-}}$ có 5 electron độc thân. Xác định kiểu lai hoá của $\\mathrm{Fe^{3+}}$ trong mỗi phức chất.',
      steps: [
        '$\\mathrm{Fe^{3+}}$: $[\\mathrm{Ar}]3d^5$, ở trạng thái tự do có 5 electron độc thân trong 5 orbital 3d.',
        'Trong $\\mathrm{[FeF_6]^{3-}}$ vẫn còn 5 electron độc thân: các orbital 3d giữ nguyên, nên $\\mathrm{Fe^{3+}}$ dùng 4s, ba 4p và hai 4d: lai hoá $sp^3d^2$.',
        'Trong $\\mathrm{[Fe(CN)_6]^{3-}}$ chỉ còn 1 electron độc thân: 5 electron 3d dồn vào 3 orbital (2 cặp và 1 electron), giải phóng hai orbital 3d: lai hoá $d^2sp^3$.',
        'Cả hai đều có 6 orbital lai hoá nên đều có dạng bát diện.',
      ],
      answer:
        '$\\mathrm{[Fe(CN)_6]^{3-}}$: $d^2sp^3$; $\\mathrm{[FeF_6]^{3-}}$: $sp^3d^2$; cả hai đều bát diện.',
    },
    {
      problem:
        'Phức chất $\\mathrm{[CoCl_2(NH_3)_4]^+}$ (bát diện) có bao nhiêu đồng phân hình học? Mô tả chúng.',
      steps: [
        'Đây là kiểu $\\mathrm{MA_4B_2}$, chỉ cần xét vị trí tương đối của hai phối tử $\\mathrm{Cl^-}$.',
        'Hai $\\mathrm{Cl^-}$ ở hai đỉnh kề nhau (góc Cl – Co – Cl bằng $90^\\circ$): đồng phân cis.',
        'Hai $\\mathrm{Cl^-}$ ở hai đỉnh đối diện (góc $180^\\circ$): đồng phân trans. Mọi cách đặt khác đều trùng một trong hai cách trên khi xoay.',
      ],
      answer: 'Có 2 đồng phân hình học: cis và trans.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Phức chất $\\mathrm{[Ni(CN)_4]^{2-}}$ có dạng vuông phẳng. Kiểu lai hoá của $\\mathrm{Ni^{2+}}$ trong phức chất này là',
      options: ['$dsp^2$', '$sp^3$', '$d^2sp^3$', '$sp^3d^2$'],
      answer: 0,
      hints: ['Phức chất 4 phối tử dạng vuông phẳng dùng một orbital d.'],
      solution:
        'Các electron 3d của $\\mathrm{Ni^{2+}}$ ghép đôi, giải phóng một orbital 3d; orbital này lai hoá với 4s và hai 4p: $dsp^2$, vuông phẳng.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi kiểu lai hoá của nguyên tử trung tâm với dạng hình học của phức chất.',
      left: ['$sp$', '$sp^3$', '$dsp^2$', '$d^2sp^3$'],
      right: ['đường thẳng', 'tứ diện', 'vuông phẳng', 'bát diện', 'tam giác phẳng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Số orbital lai hoá bằng số phối trí: 2, 4, 4, 6.'],
      solution: '$sp$: đường thẳng; $sp^3$: tứ diện; $dsp^2$: vuông phẳng; $d^2sp^3$: bát diện.',
    },
    {
      type: 'number',
      prompt:
        'Trong $\\mathrm{[FeF_6]^{3-}}$, $\\mathrm{Fe^{3+}}$ lai hoá $sp^3d^2$. Phức chất có bao nhiêu electron độc thân?',
      answer: 5,
      hints: [
        'Lai hoá $sp^3d^2$ không dùng orbital 3d, nên các electron 3d giữ nguyên như ở ion tự do.',
      ],
      solution:
        '$\\mathrm{Fe^{3+}}$: $3d^5$, 5 electron độc thân trong 5 orbital 3d, giữ nguyên trong phức chất.',
    },
    {
      type: 'number',
      prompt:
        'Trong $\\mathrm{[Fe(CN)_6]^{3-}}$, $\\mathrm{Fe^{3+}}$ lai hoá $d^2sp^3$. Phức chất có bao nhiêu electron độc thân?',
      answer: 1,
      hints: ['Hai orbital 3d dùng cho lai hoá, 5 electron 3d phải dồn vào 3 orbital còn lại.'],
      solution: '5 electron trong 3 orbital: 2 cặp và 1 electron độc thân.',
    },
    {
      type: 'number',
      prompt:
        'Ion $\\mathrm{Co^{3+}}$ dùng bao nhiêu orbital lai hoá để tạo liên kết trong $\\mathrm{[Co(NH_3)_6]^{3+}}$?',
      answer: 6,
      hints: ['Số orbital lai hoá bằng số phối trí.'],
      solution:
        '6 phân tử $\\mathrm{NH_3}$ một càng: số phối trí 6, cần 6 orbital lai hoá $d^2sp^3$.',
    },
    {
      type: 'multi',
      prompt:
        'Về phức chất $\\mathrm{[Co(NH_3)_6]^{3+}}$ ($\\mathrm{Co^{3+}}$: $[\\mathrm{Ar}]3d^6$, lai hoá $d^2sp^3$), chọn các phát biểu đúng.',
      options: [
        'Nguyên tử trung tâm dùng hai orbital 3d để lai hoá.',
        'Sáu electron 3d ghép thành 3 cặp trong 3 orbital 3d.',
        'Phức chất có dạng bát diện.',
        'Phức chất có 4 electron độc thân.',
        'Nguyên tử trung tâm dùng orbital 4d để lai hoá.',
      ],
      answers: [0, 1, 2],
      hints: ['Vẽ ô orbital: hai orbital 3d phải trống để lai hoá.'],
      solution:
        'Lai hoá $d^2sp^3$ dùng hai orbital 3d, 4s và ba 4p (không dùng 4d); 6 electron 3d dồn vào 3 orbital thành 3 cặp nên không có electron độc thân; 6 orbital lai hoá cho dạng bát diện.',
    },
    {
      type: 'number',
      prompt: 'Phức chất vuông phẳng $\\mathrm{[PtCl_2(NH_3)_2]}$ có bao nhiêu đồng phân hình học?',
      answer: 2,
      hints: ['Xét hai phối tử $\\mathrm{Cl^-}$ kề nhau hoặc đối diện nhau.'],
      solution: 'Hai đồng phân: cis (hai Cl kề nhau) và trans (hai Cl đối diện).',
    },
    {
      type: 'choice',
      prompt: 'Phức chất nào sau đây không có đồng phân hình học?',
      options: [
        '$\\mathrm{[ZnCl_2(NH_3)_2]}$ (tứ diện)',
        '$\\mathrm{[PtCl_2(NH_3)_2]}$ (vuông phẳng)',
        '$\\mathrm{[CoCl_2(NH_3)_4]^+}$ (bát diện)',
        '$\\mathrm{[PdCl_2(NH_3)_2]}$ (vuông phẳng)',
      ],
      answer: 0,
      hints: ['Trong một tứ diện, hai đỉnh bất kì luôn kề nhau.'],
      solution:
        'Trong tứ diện mọi cặp vị trí đều tương đương (góc $109{,}5^\\circ$), nên $\\mathrm{[ZnCl_2(NH_3)_2]}$ chỉ có một cấu tạo. Các phức chất vuông phẳng $\\mathrm{MA_2B_2}$ và bát diện $\\mathrm{MA_4B_2}$ đều có đồng phân cis – trans.',
    },
    {
      type: 'number',
      prompt: 'Trong cis-$\\mathrm{[PtCl_2(NH_3)_2]}$, góc Cl – Pt – Cl bằng bao nhiêu độ?',
      answer: 90,
      unit: '°',
      hints: ['Trong đồng phân cis, hai Cl ở hai đỉnh kề nhau của hình vuông.'],
      solution: 'Hai đỉnh kề nhau của hình vuông nhìn từ tâm dưới góc $90^\\circ$.',
    },
    {
      type: 'text',
      prompt:
        'Đồng phân cis hay trans của $\\mathrm{[PtCl_2(NH_3)_2]}$ được dùng làm thuốc chữa ung thư?',
      accept: ['cis', 'đồng phân cis', 'cisplatin', 'cis-platin', 'cis platin'],
      hints: ['Tên thuốc bắt đầu bằng chính tên đồng phân.'],
      solution: 'Đồng phân cis, tên thuốc là cisplatin.',
    },
  ],
  takeaways: [
    'Thuyết VB: các orbital trống của nguyên tử trung tâm lai hoá; mỗi orbital lai hoá nhận một cặp electron của phối tử, tạo liên kết $\\sigma$ cho – nhận.',
    '$sp$: đường thẳng; $sp^3$: tứ diện; $dsp^2$: vuông phẳng; $d^2sp^3$ và $sp^3d^2$: bát diện.',
    'Lai hoá dùng orbital d lớp trong ($dsp^2$, $d^2sp^3$) thường kèm sự ghép đôi electron d, làm giảm số electron độc thân.',
    'Phức chất vuông phẳng $\\mathrm{MA_2B_2}$ và bát diện $\\mathrm{MA_4B_2}$ có đồng phân cis – trans; tứ diện thì không. Phối tử như $\\mathrm{NO_2^-}$ tạo đồng phân liên kết.',
  ],
};
