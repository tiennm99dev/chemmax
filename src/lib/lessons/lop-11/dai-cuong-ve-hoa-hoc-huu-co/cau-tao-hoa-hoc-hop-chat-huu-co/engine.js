/**
 * The isomer builder works on heavy atoms only (C and O) placed on a grid, with
 * single bonds between neighbouring cells and hydrogen filling the remaining
 * valence. Every structure here is a tree, so two drawings are the same
 * substance exactly when their trees match, however the chain is bent or turned.
 */

/** @typedef {'C' | 'O'} Heavy */
/** @typedef {Record<string, Heavy>} Board cell key 'row,col' → atom */
/** @typedef {{ el: Heavy, links: number[] }} TreeAtom */

export const ROWS = 5;
export const COLS = 7;

/** @type {Record<Heavy, number>} */
const VALENCE = { C: 4, O: 2 };

/** @typedef {{ id: string, formula: string, carbons: number, oxygens: number, total: number }} Target */

/** @type {Target[]} */
export const TARGETS = [
  { id: 'c4', formula: 'C4H10', carbons: 4, oxygens: 0, total: 2 },
  { id: 'c5', formula: 'C5H12', carbons: 5, oxygens: 0, total: 3 },
  { id: 'c6', formula: 'C6H14', carbons: 6, oxygens: 0, total: 5 },
  { id: 'c2o', formula: 'C2H6O', carbons: 2, oxygens: 1, total: 2 },
  { id: 'c3o', formula: 'C3H8O', carbons: 3, oxygens: 1, total: 3 },
  { id: 'c4o', formula: 'C4H10O', carbons: 4, oxygens: 1, total: 7 },
];

/** @param {number} row @param {number} col */
export const cellKey = (row, col) => `${row},${col}`;

/**
 * The cells beside one, inside the board.
 * @param {string} key
 * @returns {string[]}
 */
export function neighbourCells(key) {
  const [row, col] = key.split(',').map(Number);
  /** @type {[number, number][]} */
  const steps = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];
  return steps
    .filter(([r, c]) => r >= 0 && r < ROWS && c >= 0 && c < COLS)
    .map(([r, c]) => cellKey(r, c));
}

/** @param {Board} board @param {string} key */
const occupiedBeside = (board, key) => neighbourCells(key).filter((k) => board[k]);

/**
 * Tries to add an atom. Returns the new board, or a reason it cannot be added.
 * @param {Board} board
 * @param {string} key
 * @param {Heavy} el
 * @param {Target} target
 * @returns {{ board: Board } | { reason: string }}
 */
export function placeAtom(board, key, el, target) {
  const atoms = Object.values(board);
  const count = (/** @type {Heavy} */ e) => atoms.filter((a) => a === e).length;
  if (el === 'C' && count('C') >= target.carbons) {
    return { reason: `Công thức chỉ có ${target.carbons} nguyên tử C.` };
  }
  if (el === 'O' && count('O') >= target.oxygens) {
    return { reason: 'Công thức chỉ có 1 nguyên tử O.' };
  }
  const beside = occupiedBeside(board, key);
  if (atoms.length > 0 && beside.length === 0) {
    return { reason: 'Nguyên tử mới phải nối với mạch đã có.' };
  }
  if (beside.length > 1) {
    return {
      reason:
        'Ô này nối với hai nguyên tử cùng lúc và sẽ tạo mạch vòng, khi đó không còn đủ H theo công thức.',
    };
  }
  const anchor = beside[0];
  if (anchor && occupiedBeside(board, anchor).length + 1 > VALENCE[board[anchor]]) {
    return { reason: 'Oxygen có hoá trị II, không thể nối thêm vào nguyên tử O này.' };
  }
  return { board: { ...board, [key]: el } };
}

/**
 * Tries to take an atom off. Only an end of the chain can go, or the structure
 * would break in two.
 * @param {Board} board
 * @param {string} key
 * @returns {{ board: Board } | { reason: string }}
 */
export function removeAtom(board, key) {
  if (occupiedBeside(board, key).length > 1) {
    return { reason: 'Chỉ gỡ được nguyên tử ở đầu mạch, nếu không mạch sẽ bị đứt.' };
  }
  const { [key]: _gone, ...rest } = board;
  return { board: rest };
}

/**
 * The bonds of a board, as pairs of cell keys.
 * @param {Board} board
 * @returns {[string, string][]}
 */
export function bondsOf(board) {
  /** @type {[string, string][]} */
  const bonds = [];
  for (const key of Object.keys(board)) {
    for (const other of neighbourCells(key)) {
      if (board[other] && key < other) bonds.push([key, other]);
    }
  }
  return bonds;
}

/**
 * Turns a board into a tree of atoms.
 * @param {Board} board
 * @returns {TreeAtom[]}
 */
export function treeOf(board) {
  const keys = Object.keys(board);
  return keys.map((key) => ({
    el: board[key],
    links: neighbourCells(key)
      .filter((k) => board[k])
      .map((k) => keys.indexOf(k)),
  }));
}

/**
 * A text identical for every drawing of the same tree: the smallest rooted code
 * over all roots.
 * @param {TreeAtom[]} tree
 */
export function canonical(tree) {
  /** @param {number} at @param {number} from @returns {string} */
  const code = (at, from) => {
    const kids = tree[at].links
      .filter((n) => n !== from)
      .map((n) => code(n, at))
      .sort();
    return `${tree[at].el}(${kids.join('')})`;
  };
  return tree.map((_, i) => code(i, -1)).sort()[0] ?? '';
}

/** @param {TreeAtom[]} tree @param {number} at */
function atomText(tree, at) {
  const { el, links } = tree[at];
  const h = VALENCE[el] - links.length;
  if (el === 'O') return h > 0 ? 'OH' : 'O';
  if (h === 0) return 'C';
  return h === 1 ? 'CH' : `CH${h}`;
}

/** @param {TreeAtom[]} tree @param {number} at @param {number} from @returns {string} */
function groupText(tree, at, from) {
  const rest = tree[at].links
    .filter((n) => n !== from)
    .map((n) => groupText(tree, n, at))
    .join('');
  return atomText(tree, at) + rest;
}

/** @param {TreeAtom[]} tree @param {number} from @returns {number[][]} */
function pathsFrom(tree, from) {
  /** @type {number[][]} */
  const out = [];
  /** @param {number[]} path */
  const walk = (path) => {
    const at = path[path.length - 1];
    out.push(path);
    for (const n of tree[at].links) {
      if (!path.includes(n)) walk([...path, n]);
    }
  };
  walk([from]);
  return out;
}

/** @param {TreeAtom[]} tree @param {number[]} path */
function chainText(tree, path) {
  return path
    .map((at, i) => {
      const onPath = [path[i - 1], path[i + 1]];
      const groups = tree[at].links
        .filter((n) => !onPath.includes(n))
        .map((n) => groupText(tree, n, at))
        .sort();
      const counted = [...new Set(groups)].map((g) => {
        const times = groups.filter((x) => x === g).length;
        return times > 1 ? `(${g})${times}` : `(${g})`;
      });
      const text = atomText(tree, at);
      // A hydroxyl that starts the chain is written HO–, the way the book writes it.
      return (tree[at].el === 'O' && i === 0 && text === 'OH' ? 'HO' : text) + counted.join('');
    })
    .join('–');
}

/**
 * The condensed structural formula: the chain with the most carbons, with an
 * end group kept on the chain, and the alphabetically first of the equal ways
 * of writing it (so a branch comes as early as it can).
 * @param {TreeAtom[]} tree
 * @returns {string}
 */
export function condensedFormula(tree) {
  if (tree.length === 0) return '';
  const paths = tree.flatMap((_, i) => pathsFrom(tree, i));
  const carbons = (/** @type {number[]} */ p) => p.filter((a) => tree[a].el === 'C').length;
  const most = Math.max(...paths.map(carbons));
  const longest = paths.filter((p) => carbons(p) === most);
  const size = Math.max(...longest.map((p) => p.length));
  return longest
    .filter((p) => p.length === size)
    .map((p) => chainText(tree, p))
    .sort()[0];
}

/**
 * What kind of substance the tree is, for showing the type of isomer.
 * @param {TreeAtom[]} tree
 * @returns {'alcohol' | 'ether' | 'hydrocarbon'}
 */
export function kindOf(tree) {
  const oxygen = tree.find((a) => a.el === 'O');
  if (!oxygen) return 'hydrocarbon';
  return oxygen.links.length === 1 ? 'alcohol' : 'ether';
}

/** @type {Record<ReturnType<typeof kindOf>, string>} */
export const KIND_NAMES = { alcohol: 'alcohol', ether: 'ether', hydrocarbon: 'hydrocarbon' };

/**
 * Whether the board uses every atom of the target.
 * @param {Board} board
 * @param {Target} target
 */
export function isComplete(board, target) {
  return Object.keys(board).length === target.carbons + target.oxygens;
}

/**
 * The carbon skeletons with a given number of carbons, by growing trees one
 * atom at a time.
 * @param {number} carbons
 * @returns {TreeAtom[][]}
 */
function skeletons(carbons) {
  const start = /** @type {TreeAtom[]} */ ([{ el: 'C', links: [] }]);
  let level = new Map([[canonical(start), start]]);
  for (let i = 1; i < carbons; i++) {
    /** @type {Map<string, TreeAtom[]>} */
    const next = new Map();
    for (const tree of level.values()) {
      tree.forEach((atom, k) => {
        if (atom.links.length >= VALENCE.C) return;
        const grown = tree.map((a) => ({ el: a.el, links: [...a.links] }));
        grown[k].links.push(tree.length);
        grown.push({ el: 'C', links: [k] });
        next.set(canonical(grown), grown);
      });
    }
    level = next;
  }
  return [...level.values()];
}

/**
 * Every structural isomer of a target as canonical codes. With one oxygen, the
 * oxygen either hangs from a carbon (alcohol) or sits inside a C–C bond (ether).
 * @param {Target} target
 * @returns {string[]}
 */
export function allIsomers(target) {
  const trees = skeletons(target.carbons);
  if (target.oxygens === 0) return trees.map(canonical);
  const found = new Set();
  for (const tree of trees) {
    tree.forEach((atom, i) => {
      if (atom.links.length < VALENCE.C) {
        const grown = tree.map((a) => ({ el: a.el, links: [...a.links] }));
        grown[i].links.push(tree.length);
        grown.push({ el: 'O', links: [i] });
        found.add(canonical(grown));
      }
      for (const j of atom.links) {
        if (j < i) continue;
        const grown = tree.map((a) => ({ el: a.el, links: [...a.links] }));
        const o = tree.length;
        grown[i].links = grown[i].links.map((n) => (n === j ? o : n));
        grown[j].links = grown[j].links.map((n) => (n === i ? o : n));
        grown.push({ el: 'O', links: [i, j] });
        found.add(canonical(grown));
      }
    });
  }
  return [...found];
}

/**
 * Splits a condensed formula for drawing its subscripts: 'CH3–CH2' → parts.
 * @param {string} text
 * @returns {{ text: string, sub: boolean }[]}
 */
export function condensedParts(text) {
  return text
    .split(/(\d+)/)
    .filter((t) => t !== '')
    .map((t) => ({ text: t, sub: /^\d+$/.test(t) }));
}

/**
 * A formula for a line of plain text, with Unicode subscripts: 'CH3–OH' → 'CH₃–OH'.
 * @param {string} text
 */
export function subscriptText(text) {
  return text.replace(/\d/g, (d) => String.fromCharCode(0x2080 + Number(d)));
}

/** @typedef {{ el: 'C' | 'O', x: number, y: number }} FormAtom */
/** @typedef {[number, number, 1 | 2]} FormBond */
/**
 * @typedef {object} StructureForms
 * @property {string} id
 * @property {string} name
 * @property {string} formula
 * @property {string} condensed
 * @property {FormAtom[]} atoms grid positions for the full structural formula
 * @property {FormBond[]} bonds
 * @property {[number, number][]} skeleton positions for the skeletal formula
 */

/**
 * Three ways of writing the same substance.
 * @type {StructureForms[]}
 */
export const FORMS = [
  {
    id: 'butane',
    name: 'Butane',
    formula: 'C4H10',
    condensed: 'CH3–CH2–CH2–CH3',
    atoms: [
      { el: 'C', x: 0, y: 0 },
      { el: 'C', x: 1, y: 0 },
      { el: 'C', x: 2, y: 0 },
      { el: 'C', x: 3, y: 0 },
    ],
    bonds: [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 1],
    ],
    skeleton: [
      [0, 0],
      [1, -0.6],
      [2, 0],
      [3, -0.6],
    ],
  },
  {
    id: 'isobutane',
    name: '2-methylpropane',
    formula: 'C4H10',
    condensed: 'CH3–CH(CH3)–CH3',
    atoms: [
      { el: 'C', x: 0, y: 0 },
      { el: 'C', x: 2, y: 0 },
      { el: 'C', x: 4, y: 0 },
      { el: 'C', x: 2, y: -1 },
    ],
    bonds: [
      [0, 1, 1],
      [1, 2, 1],
      [1, 3, 1],
    ],
    skeleton: [
      [0, 0.5],
      [1, 0],
      [2, 0.5],
      [1, -1],
    ],
  },
  {
    id: 'ethanol',
    name: 'Ethanol',
    formula: 'C2H6O',
    condensed: 'CH3–CH2–OH',
    atoms: [
      { el: 'C', x: 0, y: 0 },
      { el: 'C', x: 1, y: 0 },
      { el: 'O', x: 2, y: 0 },
    ],
    bonds: [
      [0, 1, 1],
      [1, 2, 1],
    ],
    skeleton: [
      [0, 0],
      [1, -0.6],
      [2, 0],
    ],
  },
  {
    id: 'propene',
    name: 'Propene',
    formula: 'C3H6',
    condensed: 'CH2=CH–CH3',
    atoms: [
      { el: 'C', x: 0, y: 0 },
      { el: 'C', x: 1, y: 0 },
      { el: 'C', x: 2, y: 0 },
    ],
    bonds: [
      [0, 1, 2],
      [1, 2, 1],
    ],
    skeleton: [
      [0, 0],
      [1, -0.6],
      [2, 0],
    ],
  },
];

/**
 * Hydrogens of a full structural formula, each in a free grid direction, joined
 * to the atom they sit on.
 * @param {StructureForms} form
 * @returns {{ x: number, y: number, on: number }[]}
 */
export function hydrogensOf(form) {
  /** @type {{ x: number, y: number, on: number }[]} */
  const out = [];
  form.atoms.forEach((atom, i) => {
    const bonds = form.bonds.filter(([a, b]) => a === i || b === i);
    const used = bonds.reduce((sum, [, , order]) => sum + order, 0);
    const towards = bonds.map(([a, b]) => {
      const other = form.atoms[a === i ? b : a];
      return [Math.sign(other.x - atom.x), Math.sign(other.y - atom.y)];
    });
    let wanted = VALENCE[atom.el] - used;
    for (const [dx, dy] of [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]) {
      if (wanted === 0) break;
      if (towards.some(([x, y]) => x === dx && y === dy)) continue;
      out.push({ x: atom.x + dx, y: atom.y + dy, on: i });
      wanted -= 1;
    }
  });
  return out;
}
