/**
 * Choosing a material for an object from its properties. Each common material
 * of the textbook (metal, plastic, rubber, wood, glass, ceramic) has a value
 * for every property; each object lists the properties it needs. A material
 * suits the object when it has every needed property; otherwise the engine
 * names the properties that let it down.
 */

/** @typedef {'yes' | 'no' | 'some'} Level */
/** @typedef {{ id: string, label: string, yes: string, no: string }} Property */
/** @typedef {{ id: string, label: string, values: Record<string, Level>, note: string }} Material */
/** @typedef {{ id: string, label: string, needs: Record<string, 'yes' | 'no'>, why: string }} Thing */

/** @type {Property[]} */
export const PROPERTIES = [
  { id: 'dien', label: 'Dẫn điện', yes: 'dẫn điện tốt', no: 'không dẫn điện' },
  { id: 'nhiet', label: 'Dẫn nhiệt', yes: 'dẫn nhiệt tốt', no: 'dẫn nhiệt kém' },
  { id: 'trong', label: 'Trong suốt', yes: 'trong suốt', no: 'không trong suốt' },
  { id: 'danhoi', label: 'Đàn hồi', yes: 'có tính đàn hồi', no: 'không đàn hồi' },
  { id: 'uon', label: 'Uốn cong', yes: 'uốn cong được mà không gãy', no: 'không uốn cong được' },
  { id: 'cung', label: 'Cứng', yes: 'cứng, giữ chắc hình dạng', no: 'mềm, dễ biến dạng' },
  { id: 'gion', label: 'Giòn, dễ vỡ', yes: 'giòn, dễ vỡ', no: 'không giòn, khó vỡ' },
  {
    id: 'chiunhiet',
    label: 'Chịu nhiệt cao',
    yes: 'chịu được nhiệt độ cao',
    no: 'không chịu được nhiệt độ cao',
  },
  { id: 'khonggi', label: 'Không gỉ', yes: 'không gỉ, ít bị ăn mòn', no: 'dễ bị gỉ hoặc mục' },
  { id: 'chay', label: 'Dễ cháy', yes: 'dễ cháy', no: 'không cháy' },
];

/** @type {Material[]} */
export const MATERIALS = [
  {
    id: 'kim-loai',
    label: 'Kim loại',
    note: 'Dẫn điện, dẫn nhiệt tốt, có ánh kim, dễ uốn và dát mỏng; nhiều kim loại (như sắt) dễ bị gỉ.',
    values: {
      dien: 'yes',
      nhiet: 'yes',
      trong: 'no',
      danhoi: 'no',
      uon: 'yes',
      cung: 'yes',
      gion: 'no',
      chiunhiet: 'yes',
      khonggi: 'no',
      chay: 'no',
    },
  },
  {
    id: 'nhua',
    label: 'Nhựa',
    note: 'Nhẹ, dễ tạo hình, không dẫn điện, không dẫn nhiệt, không gỉ; nhiều loại không chịu nhiệt và rất khó phân huỷ.',
    values: {
      dien: 'no',
      nhiet: 'no',
      trong: 'some',
      danhoi: 'no',
      uon: 'yes',
      cung: 'yes',
      gion: 'no',
      chiunhiet: 'no',
      khonggi: 'yes',
      chay: 'yes',
    },
  },
  {
    id: 'cao-su',
    label: 'Cao su',
    note: 'Đàn hồi, không dẫn điện, không dẫn nhiệt, không thấm nước, ít bị ăn mòn; tan trong xăng.',
    values: {
      dien: 'no',
      nhiet: 'no',
      trong: 'no',
      danhoi: 'yes',
      uon: 'yes',
      cung: 'no',
      gion: 'no',
      chiunhiet: 'no',
      khonggi: 'yes',
      chay: 'yes',
    },
  },
  {
    id: 'go',
    label: 'Gỗ',
    note: 'Bền, chịu lực tốt, dễ tạo hình, dẫn điện và dẫn nhiệt kém; dễ cháy, có thể bị mối mọt, ẩm mục.',
    values: {
      dien: 'no',
      nhiet: 'no',
      trong: 'no',
      danhoi: 'no',
      uon: 'no',
      cung: 'yes',
      gion: 'no',
      chiunhiet: 'no',
      khonggi: 'no',
      chay: 'yes',
    },
  },
  {
    id: 'thuy-tinh',
    label: 'Thuỷ tinh',
    note: 'Trong suốt, không dẫn điện, dẫn nhiệt kém, không gỉ, ít bị ăn mòn; giòn, dễ vỡ.',
    values: {
      dien: 'no',
      nhiet: 'no',
      trong: 'yes',
      danhoi: 'no',
      uon: 'no',
      cung: 'yes',
      gion: 'yes',
      chiunhiet: 'yes',
      khonggi: 'yes',
      chay: 'no',
    },
  },
  {
    id: 'gom',
    label: 'Gốm, sứ',
    note: 'Cứng, không bị ăn mòn, dẫn nhiệt kém, hầu như không dẫn điện, chịu nhiệt tốt; giòn, dễ vỡ.',
    values: {
      dien: 'no',
      nhiet: 'no',
      trong: 'no',
      danhoi: 'no',
      uon: 'no',
      cung: 'yes',
      gion: 'yes',
      chiunhiet: 'yes',
      khonggi: 'yes',
      chay: 'no',
    },
  },
];

/** @type {Thing[]} */
export const THINGS = [
  {
    id: 'loi-day',
    label: 'Lõi dây điện',
    needs: { dien: 'yes', uon: 'yes' },
    why: 'Lõi dây phải cho dòng điện chạy qua và uốn theo đường đi của dây.',
  },
  {
    id: 'vo-day',
    label: 'Vỏ bọc dây điện',
    needs: { dien: 'no', uon: 'yes' },
    why: 'Vỏ bọc phải cách điện để tránh bị điện giật, và uốn cong được cùng dây.',
  },
  {
    id: 'than-noi',
    label: 'Thân nồi nấu',
    needs: { nhiet: 'yes', chiunhiet: 'yes' },
    why: 'Thân nồi phải truyền nhanh nhiệt từ bếp vào thức ăn và chịu được lửa.',
  },
  {
    id: 'quai-noi',
    label: 'Quai cầm của nồi',
    needs: { nhiet: 'no', cung: 'yes', gion: 'no' },
    why: 'Quai phải dẫn nhiệt kém để không bị bỏng tay, cứng và khó vỡ để cầm chắc.',
  },
  {
    id: 'lop-xe',
    label: 'Lốp xe đạp',
    needs: { danhoi: 'yes' },
    why: 'Lốp phải đàn hồi để êm khi đi qua chỗ gồ ghề và bám đường.',
  },
  {
    id: 'gang-tay',
    label: 'Găng tay của thợ điện',
    needs: { dien: 'no', danhoi: 'yes' },
    why: 'Găng tay phải cách điện, mềm và co giãn ôm theo bàn tay.',
  },
  {
    id: 'bat-an',
    label: 'Bát ăn cơm',
    needs: { chiunhiet: 'yes', khonggi: 'yes' },
    why: 'Bát đựng thức ăn nóng nên phải chịu nhiệt và không bị gỉ, không bị ăn mòn.',
  },
  {
    id: 'ong-nghiem',
    label: 'Ống nghiệm để đun hoá chất',
    needs: { trong: 'yes', chiunhiet: 'yes', khonggi: 'yes' },
    why: 'Ống nghiệm phải trong suốt để quan sát, chịu được lửa đèn cồn và ít bị hoá chất ăn mòn.',
  },
];

/** @param {string} id */
export function material(id) {
  const m = MATERIALS.find((x) => x.id === id);
  if (!m) throw new Error(`Không có vật liệu ${id}`);
  return m;
}

/** @param {string} id */
export function thing(id) {
  const t = THINGS.find((x) => x.id === id);
  if (!t) throw new Error(`Không có đồ vật ${id}`);
  return t;
}

/** @param {string} id */
export function property(id) {
  const p = PROPERTIES.find((x) => x.id === id);
  if (!p) throw new Error(`Không có tính chất ${id}`);
  return p;
}

/**
 * The needed properties a material lacks for an object. A property that only
 * some kinds of the material have ('some') counts as lacking, because the
 * material as a whole cannot be relied on for it.
 * @param {string} thingId @param {string} materialId
 * @returns {Array<{ property: Property, need: 'yes' | 'no', has: Level }>}
 */
export function misses(thingId, materialId) {
  const t = thing(thingId);
  const m = material(materialId);
  return Object.entries(t.needs)
    .filter(([pid, need]) => m.values[pid] !== need)
    .map(([pid, need]) => ({ property: property(pid), need, has: m.values[pid] }));
}

/**
 * Whether a material suits an object.
 * @param {string} thingId @param {string} materialId
 */
export function suits(thingId, materialId) {
  return misses(thingId, materialId).length === 0;
}

/**
 * Every material that suits an object, in table order.
 * @param {string} thingId
 */
export function suitable(thingId) {
  return MATERIALS.filter((m) => suits(thingId, m.id)).map((m) => m.id);
}

/**
 * The feedback shown after choosing a material for an object.
 * @param {string} thingId @param {string} materialId
 */
export function verdict(thingId, materialId) {
  const t = thing(thingId);
  const m = material(materialId);
  const miss = misses(thingId, materialId);
  if (miss.length === 0) {
    const others = suitable(thingId)
      .filter((id) => id !== materialId)
      .map((id) => material(id).label.toLowerCase());
    const also = others.length > 0 ? ` Cũng có thể dùng: ${others.join(', ')}.` : '';
    return `Phù hợp: ${t.label.toLowerCase()} làm bằng ${m.label.toLowerCase()}. ${t.why}${also}`;
  }
  const parts = miss.map(({ property: p, need, has }) => {
    const want = need === 'yes' ? p.yes : p.no;
    const got = has === 'some' ? `chỉ một số loại ${p.yes}` : has === 'yes' ? p.yes : p.no;
    return `cần ${want}, nhưng ${m.label.toLowerCase()} ${got}`;
  });
  return `Chưa phù hợp: ${parts.join('; ')}.`;
}
