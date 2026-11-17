/**
 * The substitution mechanisms of the lesson, frame by frame: radical
 * chlorination of methane, SN2 of CH3Br, SN1 of (CH3)3CBr and the bromination
 * of benzene, plus the rate laws of SN1 and SN2.
 */

/** @typedef {import('../_shared/player.js').Frame} Frame */
/** @typedef {import('../_shared/scene.js').SceneAtom} SceneAtom */

/**
 * The corners of a hexagon centred at (cx, cy), the first one up and to the
 * right, going clockwise on screen.
 * @param {number} cx @param {number} cy @param {number} r
 * @returns {SceneAtom[]}
 */
export function ringAtoms(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = ((-30 + 60 * i) * Math.PI) / 180;
    return {
      id: `c${i}`,
      x: Math.round((cx + r * Math.cos(angle)) * 10) / 10,
      y: Math.round((cy + r * Math.sin(angle)) * 10) / 10,
      label: '',
    };
  });
}

/**
 * Ring bonds with double bonds at the given starting corners (c0~c1 is "0").
 * @param {number[]} doubles
 */
function ringBonds(doubles) {
  return Array.from({ length: 6 }, (_, i) => ({
    a: `c${i}`,
    b: `c${(i + 1) % 6}`,
    order: /** @type {1 | 2} */ (doubles.includes(i) ? 2 : 1),
  }));
}

/** @type {Frame[]} */
export const RADICAL_FRAMES = [
  {
    scene: {
      atoms: [
        { id: 'a', x: 150, y: 100, label: 'Cl' },
        { id: 'b', x: 210, y: 100, label: 'Cl' },
      ],
      bonds: [{ a: 'a', b: 'b' }],
      arrows: [
        { from: 'a~b', to: 'a', half: true, bend: -30 },
        { from: 'a~b', to: 'b', half: true, bend: 30 },
      ],
      notes: [{ x: 180, y: 160, text: 'Khơi mào: ánh sáng (as)' }],
    },
    caption:
      'Giai đoạn khơi mào: $\\mathrm{Cl{-}Cl} \\xrightarrow{\\text{as}} 2\\mathrm{Cl}{\\cdot}$. Hai mũi tên nửa đầu: mỗi nguyên tử Cl giữ một electron.',
    ask: {
      prompt: 'Liên kết $\\mathrm{Cl{-}Cl}$ đứt theo kiểu nào?',
      options: [
        'Đồng li, tạo hai gốc $\\mathrm{Cl}{\\cdot}$',
        'Dị li, tạo $\\mathrm{Cl^+}$ và $\\mathrm{Cl^-}$',
      ],
      answer: 0,
      hint: 'Liên kết giữa hai nguyên tử giống nhau thì không phân cực.',
      why: 'Liên kết không phân cực, được ánh sáng cung cấp năng lượng nên phân cắt đồng li.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'cl', x: 70, y: 100, label: 'Cl', radical: true },
        { id: 'h', x: 170, y: 100, label: 'H' },
        { id: 'c', x: 235, y: 100, label: 'CH3' },
      ],
      bonds: [{ a: 'h', b: 'c' }],
      arrows: [
        { from: 'cl', to: { x: 125, y: 100 }, half: true, bend: 30 },
        { from: 'h~c', to: { x: 140, y: 100 }, half: true, bend: -30 },
        { from: 'h~c', to: 'c', half: true, bend: 30 },
      ],
      notes: [{ x: 180, y: 165, text: 'Phát triển mạch (1)' }],
    },
    caption:
      'Phát triển mạch: $\\mathrm{Cl}{\\cdot} + \\mathrm{H{-}CH_3} \\rightarrow \\mathrm{H{-}Cl} + \\mathrm{CH_3}{\\cdot}$. Gốc Cl lấy một nguyên tử H, để lại gốc methyl.',
  },
  {
    scene: {
      atoms: [
        { id: 'c', x: 70, y: 100, label: 'CH3', radical: true },
        { id: 'a', x: 170, y: 100, label: 'Cl' },
        { id: 'b', x: 235, y: 100, label: 'Cl' },
      ],
      bonds: [{ a: 'a', b: 'b' }],
      arrows: [
        { from: 'c', to: { x: 128, y: 100 }, half: true, bend: 30 },
        { from: 'a~b', to: { x: 145, y: 100 }, half: true, bend: -30 },
        { from: 'a~b', to: 'b', half: true, bend: 30 },
      ],
      notes: [{ x: 180, y: 165, text: 'Phát triển mạch (2)' }],
    },
    caption:
      '$\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl{-}Cl} \\rightarrow \\mathrm{CH_3Cl} + \\mathrm{Cl}{\\cdot}$. Gốc $\\mathrm{Cl}{\\cdot}$ mới lại tấn công phân tử $\\mathrm{CH_4}$ khác, hai bước này lặp lại thành chuỗi.',
    ask: {
      prompt: 'Tiểu phân nào được tái tạo ở bước này để chuỗi phản ứng tiếp tục?',
      options: ['$\\mathrm{Cl}{\\cdot}$', '$\\mathrm{CH_3}{\\cdot}$', '$\\mathrm{HCl}$'],
      answer: 0,
      hint: 'Bước (1) cần tiểu phân nào để bắt đầu?',
      why: 'Gốc $\\mathrm{Cl}{\\cdot}$ sinh ra ở bước (2) lại là chất phản ứng của bước (1), nên chuỗi tự duy trì.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'a', x: 120, y: 100, label: 'CH3', radical: true },
        { id: 'b', x: 240, y: 100, label: 'CH3', radical: true },
      ],
      arrows: [
        { from: 'a', to: { x: 180, y: 100 }, half: true, bend: 30 },
        { from: 'b', to: { x: 180, y: 100 }, half: true, bend: -30 },
      ],
      notes: [{ x: 180, y: 165, text: 'Tắt mạch: hai gốc kết hợp' }],
    },
    caption:
      'Tắt mạch: hai gốc tự do kết hợp với nhau, chuỗi dừng lại. $2\\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{Cl_2}$; $\\mathrm{CH_3}{\\cdot} + \\mathrm{Cl}{\\cdot} \\rightarrow \\mathrm{CH_3Cl}$; $2\\mathrm{CH_3}{\\cdot} \\rightarrow \\mathrm{C_2H_6}$.',
  },
];

/** @type {Frame[]} */
export const SN2_FRAMES = [
  {
    scene: {
      atoms: [
        { id: 'o', x: 70, y: 100, label: 'HO', charge: '-' },
        { id: 'c', x: 180, y: 100, label: 'C' },
        { id: 'h1', x: 160, y: 55, label: 'H' },
        { id: 'h2', x: 160, y: 145, label: 'H' },
        { id: 'h3', x: 205, y: 70, label: 'H', tone: '#64748b' },
        { id: 'br', x: 250, y: 100, label: 'Br' },
      ],
      bonds: [
        { a: 'c', b: 'h1' },
        { a: 'c', b: 'h2' },
        { a: 'c', b: 'h3' },
        { a: 'c', b: 'br' },
      ],
      arrows: [
        { from: 'o', to: 'c', bend: 25 },
        { from: 'c~br', to: 'br', bend: -28 },
      ],
    },
    caption:
      '$\\mathrm{CH_3Br} + \\mathrm{OH^-} \\rightarrow \\mathrm{CH_3OH} + \\mathrm{Br^-}$. Liên kết $\\mathrm{C{-}Br}$ phân cực, C mang một phần điện tích dương ($\\delta+$) nên là nơi nucleophile $\\mathrm{OH^-}$ tấn công.',
    ask: {
      prompt: '$\\mathrm{OH^-}$ tấn công nguyên tử C từ phía nào?',
      options: ['Phía đối diện với Br', 'Cùng phía với Br'],
      answer: 0,
      hint: 'Nguyên tử Br cồng kềnh và giàu electron, nó che chắn phía của mình.',
      why: 'Nucleophile tấn công từ phía sau, ngược với nhóm rời Br, nơi ít bị cản trở và không bị Br đẩy.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'o', x: 112, y: 100, label: 'HO', charge: 'δ-' },
        { id: 'c', x: 180, y: 100, label: 'C' },
        { id: 'h1', x: 180, y: 50, label: 'H' },
        { id: 'h2', x: 180, y: 150, label: 'H' },
        { id: 'h3', x: 200, y: 75, label: 'H', tone: '#64748b' },
        { id: 'br', x: 252, y: 100, label: 'Br', charge: 'δ-' },
      ],
      bonds: [
        { a: 'o', b: 'c', partial: true },
        { a: 'c', b: 'h1' },
        { a: 'c', b: 'h2' },
        { a: 'c', b: 'h3' },
        { a: 'c', b: 'br', partial: true },
      ],
      notes: [{ x: 180, y: 185, text: 'Trạng thái chuyển tiếp' }],
    },
    caption:
      'Một giai đoạn duy nhất: liên kết $\\mathrm{C{-}O}$ hình thành đồng thời với liên kết $\\mathrm{C{-}Br}$ đứt. Ở trạng thái chuyển tiếp, ba nguyên tử H nằm trên một mặt phẳng vuông góc với trục $\\mathrm{O{\\cdots}C{\\cdots}Br}$.',
    ask: {
      prompt: 'Tốc độ phản ứng $S_N2$ phụ thuộc nồng độ của chất nào?',
      options: [
        'Cả $\\mathrm{CH_3Br}$ và $\\mathrm{OH^-}$',
        'Chỉ $\\mathrm{CH_3Br}$',
        'Chỉ $\\mathrm{OH^-}$',
      ],
      answer: 0,
      hint: 'Giai đoạn duy nhất (cũng là giai đoạn quyết định tốc độ) có những tiểu phân nào va chạm?',
      why: 'Cả hai tiểu phân cùng tham gia giai đoạn quyết định tốc độ: $v = k[\\mathrm{CH_3Br}][\\mathrm{OH^-}]$; số 2 trong $S_N2$ chỉ phản ứng lưỡng phân tử.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'o', x: 120, y: 100, label: 'HO' },
        { id: 'c', x: 180, y: 100, label: 'C' },
        { id: 'h1', x: 200, y: 55, label: 'H' },
        { id: 'h2', x: 200, y: 145, label: 'H' },
        { id: 'h3', x: 155, y: 70, label: 'H', tone: '#64748b' },
        { id: 'br', x: 300, y: 100, label: 'Br', charge: '-' },
      ],
      bonds: [
        { a: 'o', b: 'c' },
        { a: 'c', b: 'h1' },
        { a: 'c', b: 'h2' },
        { a: 'c', b: 'h3' },
      ],
    },
    caption:
      'Sản phẩm: $\\mathrm{CH_3OH}$ và $\\mathrm{Br^-}$. Ba liên kết $\\mathrm{C{-}H}$ đã lật sang phía bên kia như chiếc ô bị gió thổi ngược: cấu hình của nguyên tử C bị đảo ngược. Phản ứng $S_N2$ thuận lợi với $\\mathrm{CH_3X}$ và dẫn xuất bậc I.',
  },
];

/** @type {Frame[]} */
export const SN1_FRAMES = [
  {
    scene: {
      atoms: [
        { id: 'c', x: 170, y: 100, label: 'C' },
        { id: 'm1', x: 145, y: 50, label: 'CH3' },
        { id: 'm2', x: 145, y: 150, label: 'CH3' },
        { id: 'm3', x: 108, y: 100, label: 'CH3' },
        { id: 'br', x: 240, y: 100, label: 'Br' },
      ],
      bonds: [
        { a: 'c', b: 'm1' },
        { a: 'c', b: 'm2' },
        { a: 'c', b: 'm3' },
        { a: 'c', b: 'br' },
      ],
      arrows: [{ from: 'c~br', to: 'br', bend: -28 }],
      notes: [{ x: 180, y: 190, text: 'Giai đoạn 1: chậm' }],
    },
    caption:
      '$\\mathrm{(CH_3)_3CBr} + \\mathrm{OH^-} \\rightarrow \\mathrm{(CH_3)_3COH} + \\mathrm{Br^-}$. Giai đoạn 1 (chậm): liên kết $\\mathrm{C{-}Br}$ tự phân li, chưa cần đến $\\mathrm{OH^-}$.',
    ask: {
      prompt: 'Liên kết $\\mathrm{C{-}Br}$ đứt theo kiểu nào?',
      options: [
        'Dị li, tạo carbocation $\\mathrm{(CH_3)_3C^+}$ và $\\mathrm{Br^-}$',
        'Đồng li, tạo hai gốc tự do',
        'Dị li, tạo $\\mathrm{(CH_3)_3C^-}$ và $\\mathrm{Br^+}$',
      ],
      answer: 0,
      hint: 'Mũi tên cong đầy đủ đưa cặp electron về nguyên tử có độ âm điện lớn hơn.',
      why: 'Br có độ âm điện lớn hơn C nên nhận cả cặp electron; ba nhóm methyl đẩy electron làm carbocation bậc III bền, nên giai đoạn này xảy ra được.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'c', x: 180, y: 100, label: 'C', charge: '+' },
        { id: 'm1', x: 180, y: 45, label: 'CH3' },
        { id: 'm2', x: 180, y: 155, label: 'CH3' },
        { id: 'm3', x: 210, y: 128, label: 'CH3', tone: '#64748b' },
        { id: 'oa', x: 80, y: 100, label: 'HO', charge: '-' },
        { id: 'ob', x: 290, y: 100, label: 'HO', charge: '-' },
        { id: 'br', x: 310, y: 30, label: 'Br', charge: '-' },
      ],
      bonds: [
        { a: 'c', b: 'm1' },
        { a: 'c', b: 'm2' },
        { a: 'c', b: 'm3' },
      ],
      arrows: [
        { from: 'oa', to: 'c', bend: 22 },
        { from: 'ob', to: 'c', bend: 22 },
      ],
      notes: [{ x: 180, y: 192, text: 'Giai đoạn 2: nhanh' }],
    },
    caption:
      'Carbocation $\\mathrm{(CH_3)_3C^+}$ lai hoá $sp^2$, phẳng (nhìn nghiêng ở đây). Giai đoạn 2 (nhanh): $\\mathrm{OH^-}$ kết hợp với carbocation.',
    ask: {
      prompt: '$\\mathrm{OH^-}$ tấn công carbocation phẳng từ phía nào?',
      options: [
        'Cả hai phía của mặt phẳng, với khả năng như nhau',
        'Chỉ phía đối diện với chỗ Br vừa rời đi',
        'Chỉ phía Br vừa rời đi',
      ],
      answer: 0,
      hint: 'Carbocation phẳng, hai mặt của nó có giống nhau không?',
      why: 'Hai mặt của carbocation phẳng như nhau, nên nucleophile tấn công hai phía với xác suất bằng nhau.',
    },
  },
  {
    scene: {
      atoms: [
        { id: 'o', x: 110, y: 100, label: 'HO' },
        { id: 'c', x: 180, y: 100, label: 'C' },
        { id: 'm1', x: 205, y: 50, label: 'CH3' },
        { id: 'm2', x: 205, y: 150, label: 'CH3' },
        { id: 'm3', x: 245, y: 100, label: 'CH3' },
        { id: 'br', x: 310, y: 30, label: 'Br', charge: '-' },
      ],
      bonds: [
        { a: 'o', b: 'c' },
        { a: 'c', b: 'm1' },
        { a: 'c', b: 'm2' },
        { a: 'c', b: 'm3' },
      ],
    },
    caption:
      'Sản phẩm $\\mathrm{(CH_3)_3COH}$. Nếu nguyên tử C phản ứng là C bất đối, tấn công hai phía cho hai đồng phân với lượng bằng nhau (hỗn hợp racemic). Tốc độ chỉ phụ thuộc giai đoạn chậm: $v = k[\\mathrm{(CH_3)_3CBr}]$. Phản ứng $S_N1$ thuận lợi với dẫn xuất bậc III.',
  },
];

const RING = ringAtoms(150, 110, 42);

/** @type {Frame[]} */
export const SE_FRAMES = [
  {
    scene: {
      atoms: [
        { id: 'b1', x: 70, y: 100, label: 'Br' },
        { id: 'b2', x: 130, y: 100, label: 'Br' },
        { id: 'fe', x: 230, y: 100, label: 'FeBr3' },
      ],
      bonds: [{ a: 'b1', b: 'b2' }],
      arrows: [
        { from: 'b2', to: 'fe', bend: 28 },
        { from: 'b1~b2', to: 'b1', bend: 28 },
      ],
      notes: [{ x: 180, y: 165, text: 'Tạo tác nhân electrophile' }],
    },
    caption:
      'Xúc tác $\\mathrm{FeBr_3}$ (orbital trống) hút cặp electron của một nguyên tử Br, làm liên kết $\\mathrm{Br{-}Br}$ phân cực rồi đứt: $\\mathrm{Br_2} + \\mathrm{FeBr_3} \\rightarrow \\mathrm{Br^+} + \\mathrm{FeBr_4^-}$.',
  },
  {
    scene: {
      atoms: [
        ...RING,
        { id: 'h', x: 217, y: 72, label: 'H' },
        { id: 'br', x: 250, y: 22, label: 'Br', charge: '+' },
      ],
      bonds: [...ringBonds([0, 2, 4]), { a: 'c0', b: 'h' }],
      arrows: [{ from: 'c0~c1', to: 'br', bend: 40 }],
    },
    caption:
      'Vòng benzene giàu electron $\\pi$. Một cặp electron $\\pi$ của vòng tấn công $\\mathrm{Br^+}$ (giai đoạn chậm).',
    ask: {
      prompt: 'Trong bước này, vòng benzene đóng vai trò gì?',
      options: [
        'Tiểu phân giàu electron, tấn công $\\mathrm{Br^+}$',
        'Tác nhân electrophile',
        'Gốc tự do',
      ],
      answer: 0,
      hint: 'Vòng có $6$ electron $\\pi$, còn $\\mathrm{Br^+}$ thiếu electron.',
      why: '$\\mathrm{Br^+}$ là tác nhân electrophile; vòng benzene là trung tâm giàu electron bị nó tấn công. Vì tác nhân tấn công là electrophile nên gọi là thế electrophile ($S_E$).',
    },
  },
  {
    scene: {
      atoms: [
        ...RING,
        { id: 'h', x: 172, y: 40, label: 'H' },
        { id: 'br', x: 225, y: 60, label: 'Br' },
        { id: 'plus', x: 150, y: 110, label: '', charge: '+' },
      ],
      bonds: [...ringBonds([2, 4]), { a: 'c0', b: 'h' }, { a: 'c0', b: 'br' }],
      arrows: [{ from: 'c0~h', to: 'c0~c1', bend: -40 }],
      notes: [{ x: 150, y: 190, text: 'Carbocation trung gian' }],
    },
    caption:
      'Tạo carbocation trung gian: nguyên tử C vừa nhận Br có thêm liên kết với Br, điện tích dương giải toả trên vòng. Hệ thơm bị phá vỡ nên tiểu phân này kém bền.',
    ask: {
      prompt: 'Để trở lại hệ thơm bền vững, carbocation tách ra tiểu phân nào?',
      options: ['$\\mathrm{H^+}$', '$\\mathrm{Br^+}$', '$\\mathrm{H^-}$'],
      answer: 0,
      hint: 'Cặp electron của liên kết $\\mathrm{C{-}H}$ quay về vòng; nguyên tử H ra đi mà không mang electron.',
      why: 'Cặp electron của liên kết $\\mathrm{C{-}H}$ trả về vòng (giai đoạn nhanh), H tách ra dạng $\\mathrm{H^+}$ và hệ thơm được phục hồi.',
    },
  },
  {
    scene: {
      atoms: [
        ...RING,
        { id: 'br', x: 220, y: 70, label: 'Br' },
        { id: 'h', x: 290, y: 40, label: 'H', charge: '+' },
      ],
      bonds: [...ringBonds([0, 2, 4]), { a: 'c0', b: 'br' }],
      notes: [{ x: 150, y: 190, text: 'Bromobenzene' }],
    },
    caption:
      'Sản phẩm bromobenzene. $\\mathrm{H^+}$ kết hợp với $\\mathrm{FeBr_4^-}$: $\\mathrm{H^+} + \\mathrm{FeBr_4^-} \\rightarrow \\mathrm{HBr} + \\mathrm{FeBr_3}$, xúc tác được tái tạo. Tổng: $\\mathrm{C_6H_6} + \\mathrm{Br_2} \\xrightarrow{\\mathrm{FeBr_3}} \\mathrm{C_6H_5Br} + \\mathrm{HBr}$.',
  },
];

/**
 * How many times faster a substitution runs when the concentrations of the
 * alkyl halide and of the nucleophile are multiplied by `rx` and `nu`.
 * @param {'sn1' | 'sn2'} mechanism @param {number} rx @param {number} nu
 */
export function rateFactor(mechanism, rx, nu) {
  return mechanism === 'sn1' ? rx : rx * nu;
}

/**
 * The share of each monochloro product when the H atoms of each kind are
 * replaced at relative rates `reactivity` (per H atom).
 * @param {Array<{ name: string, hydrogens: number, reactivity: number }>} kinds
 * @returns {Array<{ name: string, share: number }>} shares in percent
 */
export function productShares(kinds) {
  const total = kinds.reduce((s, k) => s + k.hydrogens * k.reactivity, 0);
  return kinds.map((k) => ({ name: k.name, share: (100 * k.hydrogens * k.reactivity) / total }));
}
