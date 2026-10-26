/**
 * A virtual mixing lab: put one substance into a cup of 100 g of water,
 * stir, then let it stand, and see what kind of mixture forms. A soluble
 * solid (salt, sugar) dissolves up to a limit that depends on the substance
 * and the water temperature; what is left over stays at the bottom. A fine
 * insoluble powder (chalk) stays suspended after stirring (huyền phù) and
 * settles slowly; coarse sand sinks at once. Oil floats as a layer, breaks
 * into droplets when shaken hard (nhũ tương) and separates again on standing.
 * Vinegar mixes with water in any amount (dung dịch).
 */

/** @typedef {'nong' | 'lanh'} Temperature */
/** @typedef {'them' | 'khuay' | 'de-yen'} Phase */
/**
 * @typedef {'dung-dich' | 'dung-dich-du' | 'huyen-phu' | 'lang' | 'nhu-tuong' | 'tach-lop' | 'chua-tan'} MixKind
 */

/**
 * @typedef {object} Substance
 * @property {string} id
 * @property {string} name
 * @property {'ran' | 'long'} state
 * @property {'tan' | 'bot' | 'hat' | 'dau' | 'tron'} behaviour
 * @property {string} color drawing colour of the substance
 * @property {number} max largest amount offered (g or mL)
 * @property {number} step slider step
 * @property {Record<Temperature, number>} [limit] grams that dissolve in 100 g of water
 */

/** Water temperatures offered, in °C. */
export const TEMPERATURES = { lanh: 20, nong: 80 };

/** @type {Substance[]} */
export const SUBSTANCES = [
  {
    id: 'muoi',
    name: 'Muối ăn',
    state: 'ran',
    behaviour: 'tan',
    color: '#f8fafc',
    max: 60,
    step: 2,
    limit: { lanh: 36, nong: 38 },
  },
  {
    id: 'duong',
    name: 'Đường',
    state: 'ran',
    behaviour: 'tan',
    color: '#fefce8',
    max: 400,
    step: 10,
    limit: { lanh: 200, nong: 360 },
  },
  {
    id: 'phan',
    name: 'Bột phấn',
    state: 'ran',
    behaviour: 'bot',
    color: '#e2e8f0',
    max: 30,
    step: 5,
  },
  { id: 'cat', name: 'Cát', state: 'ran', behaviour: 'hat', color: '#d97706', max: 30, step: 5 },
  {
    id: 'dau',
    name: 'Dầu ăn',
    state: 'long',
    behaviour: 'dau',
    color: '#facc15',
    max: 30,
    step: 5,
  },
  {
    id: 'giam',
    name: 'Giấm ăn',
    state: 'long',
    behaviour: 'tron',
    color: '#fde68a',
    max: 30,
    step: 5,
  },
];

/** @param {string} id */
export function substanceById(id) {
  const s = SUBSTANCES.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown substance ${id}`);
  return s;
}

/**
 * How much of a soluble solid dissolves in 100 g of water and how much is
 * left over. Substances without a limit dissolve completely (liquids that mix
 * with water) or not at all (insoluble ones).
 * @param {string} id
 * @param {number} amount grams or mL added
 * @param {Temperature} temp
 */
export function dissolve(id, amount, temp) {
  const s = substanceById(id);
  if (s.behaviour === 'tron') return { dissolved: amount, excess: 0 };
  if (!s.limit) return { dissolved: 0, excess: amount };
  const dissolved = Math.min(amount, s.limit[temp]);
  return { dissolved, excess: amount - dissolved };
}

/**
 * @typedef {object} Observation
 * @property {MixKind} kind
 * @property {string} title name of the mixture (or what is seen)
 * @property {boolean | null} homogeneous null while there is no mixture yet
 * @property {string} text what the learner sees and why
 */

/**
 * What the cup shows after a phase of the experiment.
 * @param {string} id
 * @param {number} amount
 * @param {Temperature} temp
 * @param {Phase} phase
 * @returns {Observation}
 */
export function observe(id, amount, temp, phase) {
  const s = substanceById(id);
  const name = s.name.toLowerCase();
  if (amount <= 0) {
    return {
      kind: 'dung-dich',
      title: 'Nước',
      homogeneous: null,
      text: 'Cốc chỉ có nước. Hãy cho một lượng chất vào cốc.',
    };
  }
  switch (s.behaviour) {
    case 'tan': {
      const { excess } = dissolve(id, amount, temp);
      if (phase === 'them') {
        return {
          kind: 'chua-tan',
          title: 'Chất rắn đang tan dần',
          homogeneous: false,
          text: `Các hạt ${name} chìm xuống đáy cốc và tan dần. Khuấy đều để ${name} tan nhanh hơn.`,
        };
      }
      if (excess > 0) {
        return {
          kind: 'dung-dich-du',
          title: 'Dung dịch và chất rắn dư',
          homogeneous: false,
          text: `100 g nước ở ${TEMPERATURES[temp]} °C chỉ hoà tan được khoảng ${s.limit?.[temp]} g ${name}. Phần dư (khoảng ${excess} g) không tan, lắng xuống đáy. Phần nước ở trên vẫn là dung dịch, cả cốc không phải huyền phù vì chất rắn không lơ lửng.`,
        };
      }
      return {
        kind: 'dung-dich',
        title: 'Dung dịch',
        homogeneous: true,
        text: `${s.name} tan hết, không còn nhìn thấy hạt chất rắn: thu được dung dịch ${name} trong suốt, là hỗn hợp đồng nhất. Nước là dung môi, ${name} là chất tan; dung dịch vẫn có vị của ${name}.`,
      };
    }
    case 'tron':
      return {
        kind: 'dung-dich',
        title: 'Dung dịch',
        homogeneous: true,
        text: `${s.name} hoà tan vào nước, tạo thành dung dịch đồng nhất ở mọi chỗ trong cốc${phase === 'them' ? ', kể cả khi chưa khuấy' : ''}.`,
      };
    case 'bot':
      if (phase === 'khuay') {
        return {
          kind: 'huyen-phu',
          title: 'Huyền phù',
          homogeneous: false,
          text: 'Nước đục: các hạt bột phấn rất nhỏ không tan mà lơ lửng trong nước. Đó là huyền phù, một hỗn hợp không đồng nhất.',
        };
      }
      return {
        kind: 'lang',
        title: phase === 'them' ? 'Bột phấn chưa phân tán' : 'Huyền phù lắng dần',
        homogeneous: false,
        text:
          phase === 'them'
            ? 'Bột phấn không tan, phần lớn chìm xuống đáy. Hãy khuấy đều.'
            : 'Để yên một thời gian, các hạt bột phấn lắng dần xuống đáy, nước ở trên trong lại. Vì vậy huyền phù trước khi dùng phải lắc đều.',
      };
    case 'hat':
      return {
        kind: 'lang',
        title: 'Cát lắng ở đáy',
        homogeneous: false,
        text:
          phase === 'khuay'
            ? 'Cát không tan. Hạt cát nặng và to nên vừa ngừng khuấy đã lắng ngay xuống đáy: hỗn hợp không đồng nhất.'
            : 'Cát không tan trong nước, nằm ở đáy cốc: hỗn hợp không đồng nhất.',
      };
    case 'dau':
      if (phase === 'khuay') {
        return {
          kind: 'nhu-tuong',
          title: 'Nhũ tương',
          homogeneous: false,
          text: 'Khuấy mạnh, dầu ăn vỡ thành các giọt rất nhỏ phân tán trong nước, hỗn hợp có màu đục. Dầu không tan trong nước: đó là nhũ tương, một hỗn hợp không đồng nhất.',
        };
      }
      return {
        kind: 'tach-lop',
        title: 'Dầu tách thành lớp',
        homogeneous: false,
        text:
          phase === 'them'
            ? 'Dầu ăn không tan, nhẹ hơn nước nên nổi thành một lớp ở trên.'
            : 'Để yên, các giọt dầu nổi lên và gộp lại thành lớp dầu ở trên lớp nước: nhũ tương bị tách lớp.',
      };
  }
  throw new Error(`Unhandled behaviour ${s.behaviour}`);
}
