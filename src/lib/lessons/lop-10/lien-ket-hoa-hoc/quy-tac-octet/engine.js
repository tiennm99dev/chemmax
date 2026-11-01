/**
 * The Lewis board: atoms hold their valence electrons, the learner moves them
 * one at a time into a shared bond or across to another atom, and each atom is
 * counted against the shell of the nearest noble gas.
 */

/** @typedef {{ el: string, valence: number, goal: number, x: number, y: number }} LewisAtom */
/** @typedef {{ a: number, b: number, kind: 'share' | 'give' }} LewisEdge `give`: a gives to b */
/**
 * @typedef {object} LewisPreset
 * @property {string} id
 * @property {string} formula
 * @property {LewisAtom[]} atoms
 * @property {LewisEdge[]} edges
 * @property {string} result what the finished drawing is written as
 */
/** @typedef {{ atom: number, edge: number }} Move */

/** @param {string} el @param {number} valence @param {number} x @param {number} y @returns {LewisAtom} */
const atom = (el, valence, x, y) => ({ el, valence, goal: el === 'H' ? 2 : 8, x, y });
/** @param {number} a @param {number} b @returns {LewisEdge} */
const share = (a, b) => ({ a, b, kind: 'share' });
/** @param {number} a @param {number} b @returns {LewisEdge} */
const give = (a, b) => ({ a, b, kind: 'give' });

export const BOARD = { w: 360, h: 240 };

/** @type {LewisPreset[]} */
export const PRESETS = [
  {
    id: 'h2',
    formula: 'H2',
    atoms: [atom('H', 1, 120, 120), atom('H', 1, 240, 120)],
    edges: [share(0, 1)],
    result: 'Công thức Lewis: H–H. Mỗi H có 2 electron, giống helium.',
  },
  {
    id: 'cl2',
    formula: 'Cl2',
    atoms: [atom('Cl', 7, 110, 120), atom('Cl', 7, 250, 120)],
    edges: [share(0, 1)],
    result: 'Công thức Lewis: Cl–Cl. Mỗi Cl có 8 electron, giống argon.',
  },
  {
    id: 'hcl',
    formula: 'HCl',
    atoms: [atom('H', 1, 110, 120), atom('Cl', 7, 250, 120)],
    edges: [share(0, 1)],
    result: 'Công thức Lewis: H–Cl. H có 2 electron như helium, Cl có 8 electron như argon.',
  },
  {
    id: 'h2o',
    formula: 'H2O',
    atoms: [atom('O', 6, 180, 80), atom('H', 1, 80, 180), atom('H', 1, 280, 180)],
    edges: [share(0, 1), share(0, 2)],
    result: 'Công thức Lewis: H–O–H. O có 8 electron như neon, mỗi H có 2 electron.',
  },
  {
    id: 'nh3',
    formula: 'NH3',
    atoms: [
      atom('N', 5, 180, 80),
      atom('H', 1, 70, 170),
      atom('H', 1, 180, 205),
      atom('H', 1, 290, 170),
    ],
    edges: [share(0, 1), share(0, 2), share(0, 3)],
    result: 'N tạo ba liên kết đơn với ba H và còn một cặp electron riêng, đủ 8 electron.',
  },
  {
    id: 'ch4',
    formula: 'CH4',
    atoms: [
      atom('C', 4, 180, 120),
      atom('H', 1, 180, 25),
      atom('H', 1, 285, 120),
      atom('H', 1, 180, 215),
      atom('H', 1, 75, 120),
    ],
    edges: [share(0, 1), share(0, 2), share(0, 3), share(0, 4)],
    result: 'C góp cả 4 electron, tạo bốn liên kết đơn với bốn H, đủ 8 electron.',
  },
  {
    id: 'o2',
    formula: 'O2',
    atoms: [atom('O', 6, 110, 120), atom('O', 6, 250, 120)],
    edges: [share(0, 1)],
    result: 'Công thức Lewis: O=O. Hai cặp electron chung tạo liên kết đôi, mỗi O đủ 8 electron.',
  },
  {
    id: 'n2',
    formula: 'N2',
    atoms: [atom('N', 5, 110, 120), atom('N', 5, 250, 120)],
    edges: [share(0, 1)],
    result: 'Công thức Lewis: N≡N. Ba cặp electron chung tạo liên kết ba, mỗi N đủ 8 electron.',
  },
  {
    id: 'co2',
    formula: 'CO2',
    atoms: [atom('O', 6, 55, 120), atom('C', 4, 180, 120), atom('O', 6, 305, 120)],
    edges: [share(1, 0), share(1, 2)],
    result: 'Công thức Lewis: O=C=O. C dùng chung 4 cặp electron, mỗi O dùng chung 2 cặp.',
  },
  {
    id: 'naf',
    formula: 'NaF',
    atoms: [atom('Na', 1, 90, 120), atom('F', 7, 270, 120)],
    edges: [give(0, 1)],
    result:
      'Na nhường 1 electron thành $\\mathrm{Na^+}$ giống neon, F nhận thành $\\mathrm{F^-}$ cũng giống neon. Hai ion trái dấu hút nhau.',
  },
  {
    id: 'mgo',
    formula: 'MgO',
    atoms: [atom('Mg', 2, 90, 120), atom('O', 6, 270, 120)],
    edges: [give(0, 1)],
    result:
      'Mg nhường 2 electron thành $\\mathrm{Mg^{2+}}$, O nhận thành $\\mathrm{O^{2-}}$; cả hai ion đều giống neon.',
  },
];

/**
 * Electrons each end of each edge has moved.
 * @param {LewisPreset} preset @param {Move[]} moves
 */
function tally(preset, moves) {
  const moved = preset.edges.map(() => ({ a: 0, b: 0 }));
  for (const m of moves) {
    const e = preset.edges[m.edge];
    if (e.a === m.atom) moved[m.edge].a += 1;
    else moved[m.edge].b += 1;
  }
  return moved;
}

/**
 * The state of the board: free electrons and the octet count of each atom,
 * complete pairs and unpaired electrons on each edge. An atom that has given
 * away its whole outer shell is left with the full shell beneath it, 8 electrons.
 * @param {LewisPreset} preset @param {Move[]} moves
 */
export function lewisState(preset, moves) {
  const moved = tally(preset, moves);
  const edges = preset.edges.map((e, i) => {
    const { a, b } = moved[i];
    return {
      a,
      b,
      pairs: e.kind === 'share' ? Math.min(a, b) : 0,
      lonely: e.kind === 'share' ? Math.abs(a - b) : 0,
    };
  });
  const atoms = preset.atoms.map((at, i) => {
    let free = at.valence;
    let shared = 0;
    let charge = 0;
    preset.edges.forEach((e, j) => {
      const own = e.a === i ? moved[j].a : e.b === i ? moved[j].b : 0;
      if (e.kind === 'share') {
        if (e.a !== i && e.b !== i) return;
        free -= own;
        shared += own + edges[j].pairs;
        return;
      }
      if (e.a === i) {
        free -= moved[j].a;
        charge += moved[j].a;
      } else if (e.b === i) {
        free += moved[j].a;
        charge -= moved[j].a;
      }
    });
    const emptied = charge > 0 && free === 0;
    const count = emptied ? at.goal : free + shared;
    return { free, count, charge, ok: count === at.goal };
  });
  return { atoms, edges };
}

/**
 * Whether `atom` can still move an electron along `edge`: it needs a free
 * electron, only the giver moves on a `give` edge, and no bond goes past three pairs.
 * @param {LewisPreset} preset @param {Move[]} moves @param {number} at @param {number} edge
 */
export function canMove(preset, moves, at, edge) {
  const e = preset.edges[edge];
  if (e.a !== at && e.b !== at) return false;
  if (e.kind === 'give' && e.a !== at) return false;
  const state = lewisState(preset, moves);
  if (state.atoms[at].free <= 0) return false;
  if (e.kind === 'give') return true;
  const own = e.a === at ? state.edges[edge].a : state.edges[edge].b;
  return own < 3;
}

/**
 * The edge an electron dropped at (x, y) lands on: the nearest one the atom can
 * use, within `reach` of its midpoint; for a `give` edge, of the receiving atom.
 * @param {LewisPreset} preset @param {Move[]} moves @param {number} at
 * @param {{ x: number, y: number }} p @param {number} [reach]
 */
export function dropEdge(preset, moves, at, p, reach = 70) {
  let best = -1;
  let bestDistance = reach;
  preset.edges.forEach((e, i) => {
    if (!canMove(preset, moves, at, i)) return;
    const q = dropPoint(preset, e);
    const d = Math.hypot(q.x - p.x, q.y - p.y);
    if (d < bestDistance) {
      best = i;
      bestDistance = d;
    }
  });
  return best;
}

/**
 * Where electrons are dropped for an edge.
 * @param {LewisPreset} preset @param {LewisEdge} e
 */
export function dropPoint(preset, e) {
  const a = preset.atoms[e.a];
  const b = preset.atoms[e.b];
  return e.kind === 'give' ? { x: b.x, y: b.y } : { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

/**
 * Feedback for the board. Unpaired electrons come first, because no count
 * means anything until they are in pairs.
 * @param {LewisPreset} preset @param {Move[]} moves
 * @returns {{ solved: boolean, tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function judge(preset, moves) {
  const state = lewisState(preset, moves);
  if (moves.length === 0) {
    return {
      solved: false,
      tone: 'info',
      text: 'Kéo một electron có viền đậm vào giữa hai nguyên tử, hoặc dùng các nút bên dưới.',
    };
  }
  const lonely = preset.edges.findIndex((_, i) => state.edges[i].lonely > 0);
  if (lonely >= 0) {
    const e = preset.edges[lonely];
    return {
      solved: false,
      tone: 'info',
      text: `Liên kết ${preset.atoms[e.a].el}–${preset.atoms[e.b].el} còn electron chưa thành cặp: mỗi nguyên tử góp một electron mới tạo được một cặp chung.`,
    };
  }
  const over = state.atoms.findIndex((a, i) => a.count > preset.atoms[i].goal);
  if (over >= 0) {
    const at = preset.atoms[over];
    return {
      solved: false,
      tone: 'warn',
      text: `${at.el} đang có ${state.atoms[over].count} electron, vượt quá ${at.goal}. Hãy hoàn tác bớt.`,
    };
  }
  const short = state.atoms.findIndex((a) => !a.ok);
  if (short >= 0) {
    const at = preset.atoms[short];
    if (preset.edges.some((e) => e.kind === 'give' && e.a === short)) {
      return {
        solved: false,
        tone: 'info',
        text: `${at.el} còn ${state.atoms[short].free} electron ở lớp ngoài cùng. Nhường hết chúng, lớp bên trong với 8 electron trở thành lớp ngoài cùng.`,
      };
    }
    return {
      solved: false,
      tone: 'info',
      text: `${at.el} mới có ${state.atoms[short].count} electron, cần đủ ${at.goal} electron như khí hiếm gần nhất.`,
    };
  }
  return { solved: true, tone: 'ok', text: preset.result };
}

/**
 * Where the free electrons of an atom sit: the four sides of its symbol, sides
 * away from its bonds first, single electrons before pairs as in a Lewis diagram.
 * @param {LewisPreset} preset @param {number} at @param {number} n @param {number} [r]
 */
export function freeSpots(preset, at, n, r = 30) {
  const self = preset.atoms[at];
  const others = preset.edges.flatMap((e) => (e.a === at ? [e.b] : e.b === at ? [e.a] : []));
  const sides = [
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
  ];
  /** @param {{ dx: number, dy: number }} s */
  const crowding = (s) =>
    Math.max(
      -1,
      ...others.map((o) => {
        const q = preset.atoms[o];
        const len = Math.hypot(q.x - self.x, q.y - self.y) || 1;
        return (s.dx * (q.x - self.x) + s.dy * (q.y - self.y)) / len;
      }),
    );
  const ordered = sides
    .map((s, i) => ({ s, i, c: crowding(s) }))
    .sort((p, q) => p.c - q.c || p.i - q.i)
    .map((x) => x.s);
  const out = [];
  for (let k = 0; k < n; k++) {
    const s = ordered[k % 4];
    const second = k >= 4;
    const shift = n > 4 || second ? (second ? 6 : -6) : 0;
    const paired = k % 4 < n - 4 || second;
    const off = paired ? shift : 0;
    out.push({ x: self.x + s.dx * r - s.dy * off, y: self.y + s.dy * r + s.dx * off });
  }
  return out;
}

/**
 * Where the shared electrons of an edge sit: a column of pairs across the
 * midpoint, each electron on the side of the atom that gave it.
 * @param {LewisPreset} preset @param {number} edge @param {number} a @param {number} b
 */
export function sharedSpots(preset, edge, a, b) {
  const e = preset.edges[edge];
  const p = preset.atoms[e.a];
  const q = preset.atoms[e.b];
  const len = Math.hypot(q.x - p.x, q.y - p.y) || 1;
  const ux = (q.x - p.x) / len;
  const uy = (q.y - p.y) / len;
  const mx = (p.x + q.x) / 2;
  const my = (p.y + q.y) / 2;
  const rows = Math.max(a, b);
  const out = [];
  for (let i = 0; i < rows; i++) {
    const across = (i - (rows - 1) / 2) * 14;
    const cx = mx - uy * across;
    const cy = my + ux * across;
    if (i < a) out.push({ x: cx - ux * 5, y: cy - uy * 5, owner: e.a });
    if (i < b) out.push({ x: cx + ux * 5, y: cy + uy * 5, owner: e.b });
  }
  return out;
}
