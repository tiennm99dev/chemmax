/**
 * Choosing a way to separate a mixture. Each mixture is a list of steps; at
 * each step the mixture is in one of a few states (an insoluble solid in a
 * liquid, a dissolved solid, two liquids that do not mix, two solids of which
 * one dissolves), and only one method suits that state. A wrong choice is
 * explained by the property it ignores. The separating funnel (phễu chiết) is
 * judged by when the learner closes the tap.
 */

/** @typedef {'hoa-tan' | 'loc' | 'co-can' | 'chiet'} Method */
/** @typedef {'ran-khong-tan' | 'dung-dich' | 'hai-chat-long' | 'hai-chat-ran'} MixState */

/** @type {Array<{ id: Method, name: string }>} */
export const METHODS = [
  { id: 'hoa-tan', name: 'Hoà tan vào nước' },
  { id: 'loc', name: 'Lọc' },
  { id: 'co-can', name: 'Cô cạn' },
  { id: 'chiet', name: 'Chiết' },
];

/**
 * @typedef {object} Step
 * @property {MixState} state what is in the vessel before this step
 * @property {Method} method the method that suits it
 * @property {string} have what the vessel holds, as shown to the learner
 * @property {string} result what this step gives
 */

/**
 * @typedef {object} Mixture
 * @property {string} id
 * @property {string} name
 * @property {string} goal what the learner must obtain
 * @property {Step[]} steps
 */

/** @type {Mixture[]} */
export const MIXTURES = [
  {
    id: 'nuoc-cat',
    name: 'Nước lẫn cát',
    goal: 'Thu nước trong, loại bỏ cát.',
    steps: [
      {
        state: 'ran-khong-tan',
        method: 'loc',
        have: 'Nước lẫn cát',
        result: 'Cát không tan bị giữ lại trên giấy lọc; nước trong chảy qua giấy lọc xuống cốc.',
      },
    ],
  },
  {
    id: 'nuoc-bien',
    name: 'Nước biển',
    goal: 'Thu muối ăn từ nước biển.',
    steps: [
      {
        state: 'dung-dich',
        method: 'co-can',
        have: 'Nước biển (dung dịch muối)',
        result:
          'Nước bay hơi hết, muối ăn khó bay hơi nên còn lại thành tinh thể trắng trong bát sứ.',
      },
    ],
  },
  {
    id: 'dau-nuoc',
    name: 'Dầu ăn lẫn nước',
    goal: 'Tách riêng dầu ăn và nước.',
    steps: [
      {
        state: 'hai-chat-long',
        method: 'chiet',
        have: 'Dầu ăn và nước (tách thành hai lớp)',
        result: 'Nước ở lớp dưới chảy xuống bình, dầu ăn nhẹ hơn ở lại trong phễu chiết.',
      },
    ],
  },
  {
    id: 'phan-nuoc',
    name: 'Nước bột phấn',
    goal: 'Thu nước trong từ huyền phù bột phấn.',
    steps: [
      {
        state: 'ran-khong-tan',
        method: 'loc',
        have: 'Huyền phù bột phấn',
        result: 'Bột phấn không tan bị giữ lại trên giấy lọc; nước trong chảy xuống cốc.',
      },
    ],
  },
  {
    id: 'muoi-cat',
    name: 'Muối ăn lẫn cát',
    goal: 'Thu muối ăn sạch từ muối lẫn cát.',
    steps: [
      {
        state: 'hai-chat-ran',
        method: 'hoa-tan',
        have: 'Muối ăn lẫn cát (hai chất rắn)',
        result: 'Muối ăn tan vào nước tạo thành dung dịch, cát không tan lắng ở đáy cốc.',
      },
      {
        state: 'ran-khong-tan',
        method: 'loc',
        have: 'Nước muối có lẫn cát',
        result: 'Cát bị giữ lại trên giấy lọc; nước muối (nước lọc) chảy xuống cốc.',
      },
      {
        state: 'dung-dich',
        method: 'co-can',
        have: 'Nước muối đã lọc',
        result: 'Đun cho nước bay hơi hết, thu được muối ăn sạch trong bát sứ.',
      },
    ],
  },
];

/** Why a method does not suit a state. @type {Record<MixState, Partial<Record<Method, string>>>} */
const WHY_NOT = {
  'ran-khong-tan': {
    'hoa-tan': 'Chất rắn ở đây không tan trong nước, thêm nước cũng không tách được.',
    'co-can':
      'Cô cạn làm nước bay hơi hết, chất rắn không tan vẫn nằm nguyên trong cặn: không thu được nước trong, và chất rắn không tan không được loại bỏ.',
    chiet:
      'Chiết dùng cho hai chất lỏng không hoà tan vào nhau; ở đây là chất rắn không tan trong chất lỏng.',
  },
  'dung-dich': {
    'hoa-tan': 'Chất rắn đã tan sẵn trong nước rồi.',
    loc: 'Chất tan đã hoà tan hoàn toàn nên đi qua giấy lọc cùng với nước, lọc không giữ lại được.',
    chiet: 'Dung dịch là hỗn hợp đồng nhất, không tách thành hai lớp nên không chiết được.',
  },
  'hai-chat-long': {
    'hoa-tan': 'Dầu ăn không tan trong nước, thêm nước không giúp tách.',
    loc: 'Cả dầu và nước đều là chất lỏng, đều chảy qua giấy lọc.',
    'co-can':
      'Cô cạn làm nước bay hơi mất, không thu được riêng nước; đun nóng dầu ăn còn dễ gây cháy.',
  },
  'hai-chat-ran': {
    loc: 'Hỗn hợp toàn chất rắn, chưa có chất lỏng để lọc. Hãy tìm cách đưa muối vào nước trước.',
    'co-can': 'Chưa có dung dịch để cô cạn. Muối và cát đang lẫn nhau ở thể rắn.',
    chiet: 'Chiết dùng cho hai chất lỏng; ở đây là hai chất rắn.',
  },
};

/** @param {string} id */
export function mixtureById(id) {
  const m = MIXTURES.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown mixture ${id}`);
  return m;
}

/**
 * Judge a method chosen at one step of a mixture.
 * @param {string} mixtureId
 * @param {number} stepIndex
 * @param {Method} method
 * @returns {{ ok: boolean, message: string, done: boolean }}
 */
export function judge(mixtureId, stepIndex, method) {
  const m = mixtureById(mixtureId);
  const step = m.steps[stepIndex];
  if (!step) throw new Error(`Mixture ${mixtureId} has no step ${stepIndex}`);
  if (step.method === method) {
    return { ok: true, message: step.result, done: stepIndex === m.steps.length - 1 };
  }
  return {
    ok: false,
    message: WHY_NOT[step.state][method] ?? 'Cách này không phù hợp.',
    done: false,
  };
}

/** Share of the funnel's liquid that is water (the lower layer). */
export const WATER_SHARE = 0.6;
/** How far past the boundary (share of all liquid) still counts as a clean cut. */
export const TAP_TOLERANCE = 0.05;

/**
 * Judge when the tap of the separating funnel was closed.
 * @param {number} drained share of all the liquid that has run out, 0 to 1
 * @returns {{ ok: boolean, message: string }}
 */
export function judgeTap(drained) {
  const diff = drained - WATER_SHARE;
  if (diff < -TAP_TOLERANCE) {
    return {
      ok: false,
      message:
        'Khoá đóng sớm quá: vẫn còn một phần nước nằm dưới lớp dầu trong phễu. Mở khoá xả tiếp.',
    };
  }
  if (diff > TAP_TOLERANCE) {
    return {
      ok: false,
      message:
        'Khoá đóng muộn: một phần dầu ăn đã chảy xuống bình lẫn với nước. Phải đóng khoá ngay khi lớp dầu chạm tới khoá.',
    };
  }
  return {
    ok: true,
    message: 'Đúng lúc! Nước đã chảy hết xuống bình, dầu ăn ở lại trong phễu chiết.',
  };
}
