/**
 * A virtual test tube for the acid lesson: drop dilute HCl or H₂SO₄ onto
 * litmus paper, a metal, a base solution with phenolphthalein or copper(II)
 * hydroxide, and read what is seen and the equation. The number of drops
 * stands for how much acid has been added: in this model a piece of metal
 * or base is used up after `DROPS_TO_FINISH` drops.
 */

/** Drops after which the solid has dissolved or the base is neutralised. */
export const DROPS_TO_FINISH = 4;

/** Largest number of drops the dropper allows. */
export const MAX_DROPS = 6;

/** @typedef {'HCl' | 'H2SO4'} AcidId */
/** @typedef {'quy' | 'mg' | 'zn' | 'fe' | 'cu' | 'naoh' | 'cuoh2'} TargetId */

export const ACIDS = /** @type {Array<{ id: AcidId, label: string }>} */ ([
  { id: 'HCl', label: 'HCl loãng' },
  { id: 'H2SO4', label: 'H₂SO₄ loãng' },
]);

/**
 * @typedef {object} Target
 * @property {TargetId} id
 * @property {string} label
 * @property {'paper' | 'metal' | 'solution' | 'solid'} form
 * @property {string} color colour of the paper, metal or base before any acid
 * @property {Record<AcidId, string> | null} equations null when nothing reacts
 * @property {number} fizz bubbles of hydrogen while the metal dissolves, 0-3
 * @property {string} after colour of the solution once the acid has reacted
 */

/** @type {Target[]} */
export const TARGETS = [
  {
    id: 'quy',
    label: 'Giấy quỳ tím',
    form: 'paper',
    color: '#7c3aed',
    equations: null,
    fizz: 0,
    after: '#e0f2fe',
  },
  {
    id: 'mg',
    label: 'Magnesium (Mg)',
    form: 'metal',
    color: '#cbd5e1',
    equations: { HCl: 'Mg + 2HCl → MgCl2 + H2↑', H2SO4: 'Mg + H2SO4 → MgSO4 + H2↑' },
    fizz: 3,
    after: '#e0f2fe',
  },
  {
    id: 'zn',
    label: 'Kẽm (Zn)',
    form: 'metal',
    color: '#94a3b8',
    equations: { HCl: 'Zn + 2HCl → ZnCl2 + H2↑', H2SO4: 'Zn + H2SO4 → ZnSO4 + H2↑' },
    fizz: 2,
    after: '#e0f2fe',
  },
  {
    id: 'fe',
    label: 'Sắt (Fe)',
    form: 'metal',
    color: '#475569',
    equations: { HCl: 'Fe + 2HCl → FeCl2 + H2↑', H2SO4: 'Fe + H2SO4 → FeSO4 + H2↑' },
    fizz: 1,
    after: '#d9f99d',
  },
  {
    id: 'cu',
    label: 'Đồng (Cu)',
    form: 'metal',
    color: '#c2410c',
    equations: null,
    fizz: 0,
    after: '#e0f2fe',
  },
  {
    id: 'naoh',
    label: 'Dung dịch NaOH có phenolphthalein',
    form: 'solution',
    color: '#f472b6',
    equations: {
      HCl: 'NaOH + HCl → NaCl + H2O',
      H2SO4: '2NaOH + H2SO4 → Na2SO4 + 2H2O',
    },
    fizz: 0,
    after: '#e0f2fe',
  },
  {
    id: 'cuoh2',
    label: 'Copper(II) hydroxide Cu(OH)₂',
    form: 'solid',
    color: '#38bdf8',
    equations: {
      HCl: 'Cu(OH)2 + 2HCl → CuCl2 + 2H2O',
      H2SO4: 'Cu(OH)2 + H2SO4 → CuSO4 + 2H2O',
    },
    fizz: 0,
    after: '#7dd3fc',
  },
];

/** @param {TargetId} id */
export function target(id) {
  return TARGETS.find((t) => t.id === id) ?? TARGETS[0];
}

/**
 * @typedef {object} TubeState
 * @property {number} progress 0 before any acid, 1 once the reaction is over
 * @property {number} solidLeft fraction of the metal or solid still undissolved
 * @property {number} bubbles bubbles of gas to draw now
 * @property {string} liquid colour of the liquid in the tube
 * @property {string} paper colour of the litmus paper
 * @property {string | null} equation
 * @property {string} observation what the learner sees, in Vietnamese
 */

/**
 * What the tube looks like after `drops` drops of `acid` on `targetId`.
 * @param {AcidId} acid
 * @param {TargetId} targetId
 * @param {number} drops
 * @returns {TubeState}
 */
export function observe(acid, targetId, drops) {
  const t = target(targetId);
  const n = Math.max(0, Math.min(MAX_DROPS, Math.round(drops)));
  const progress = Math.min(1, n / DROPS_TO_FINISH);
  const reacts = t.equations !== null;
  const solidLeft = reacts && (t.form === 'metal' || t.form === 'solid') ? 1 - progress : 1;
  const base = {
    progress,
    solidLeft,
    bubbles: 0,
    liquid: '#e0f2fe',
    paper: t.color,
    equation: n > 0 && t.equations ? t.equations[acid] : null,
  };
  const name = ACIDS.find((a) => a.id === acid)?.label ?? acid;

  if (n === 0) {
    return {
      ...base,
      liquid: t.form === 'solution' ? t.color : '#e0f2fe',
      observation: `Chưa nhỏ acid. Bấm “Nhỏ 1 giọt” để nhỏ dung dịch ${name} vào ống nghiệm.`,
    };
  }

  switch (t.form) {
    case 'paper':
      return {
        ...base,
        paper: '#dc2626',
        observation: `Giấy quỳ tím chuyển sang màu đỏ: dung dịch ${name} là acid.`,
      };
    case 'metal':
      if (!reacts) {
        return {
          ...base,
          observation: `Không có hiện tượng: đồng (Cu) không tác dụng với dung dịch ${name}.`,
        };
      }
      return {
        ...base,
        bubbles: progress < 1 ? t.fizz * 3 : 0,
        liquid: mix('#e0f2fe', t.after, progress),
        observation:
          progress < 1
            ? `Có bọt khí hydrogen thoát ra${t.fizz === 3 ? ' mạnh' : t.fizz === 1 ? ' chậm' : ''}, mẩu ${t.label.split(' ')[0].toLowerCase()} tan dần.`
            : `Mẩu kim loại đã tan hết, không còn bọt khí. Dung dịch thu được chứa muối${t.id === 'fe' ? ' iron(II), có màu lục nhạt' : ''}.`,
      };
    case 'solution':
      return {
        ...base,
        liquid: mix(t.color, t.after, progress),
        observation:
          progress < 1
            ? 'Màu hồng của dung dịch nhạt dần: acid đang phản ứng với base.'
            : 'Dung dịch mất màu hồng: base đã phản ứng hết với acid, tạo muối và nước.',
      };
    default:
      return {
        ...base,
        liquid: mix('#e0f2fe', t.after, progress),
        observation:
          progress < 1
            ? 'Chất rắn màu xanh tan dần, dung dịch chuyển sang màu xanh lam.'
            : 'Cu(OH)₂ tan hết, thu được dung dịch muối copper(II) màu xanh lam.',
      };
  }
}

/**
 * Mixes two #rrggbb colours: t = 0 gives `a`, t = 1 gives `b`.
 * @param {string} a
 * @param {string} b
 * @param {number} t
 */
export function mix(a, b, t) {
  const k = Math.max(0, Math.min(1, t));
  const ch = (/** @type {string} */ hex, /** @type {number} */ i) =>
    parseInt(hex.slice(1 + 2 * i, 3 + 2 * i), 16);
  const out = [0, 1, 2].map((i) => Math.round(ch(a, i) + (ch(b, i) - ch(a, i)) * k));
  return `#${out.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}
