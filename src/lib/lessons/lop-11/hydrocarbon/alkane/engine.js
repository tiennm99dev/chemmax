/**
 * The alkane naming bench. The learner lays a straight chain of carbons and
 * hangs CH3 or C2H5 branches above or below its inner carbons. The carbon
 * skeleton is a tree, so the substitutive (IUPAC) name follows the book's
 * rules from the tree itself, not from the chain as it was drawn: the main
 * chain is the longest one (ties: the most branches), numbered from the end
 * that gives the branches the lowest locants (ties: the branch first in
 * alphabetical order gets the lower number).
 */

/** @typedef {'up' | 'down'} Side */
/** @typedef {0 | 1 | 2} BranchSize 0 none, 1 methyl, 2 ethyl */
/** @typedef {Record<string, BranchSize>} Branches key `${index}:${side}` */
/** @typedef {{ col: number, row: number }} Spot */
/** @typedef {{ spots: Spot[], adj: number[][] }} Skeleton */
/** @typedef {{ locant: number, name: string }} Substituent */
/**
 * @typedef {object} AlkaneName
 * @property {string} name the full substitutive name, e.g. '3-ethyl-2-methylpentane'
 * @property {string} parent the name of the main chain, e.g. 'pentane'
 * @property {number[]} chain node indices of the main chain, carbon 1 first
 * @property {Substituent[]} substituents
 */

export const MIN_LENGTH = 3;
export const MAX_LENGTH = 7;

const STEMS = ['', 'meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];
const MULTIPLIERS = ['', '', 'di', 'tri', 'tetra'];

/** @param {number} n carbons in the main chain */
export const parentName = (n) => `${STEMS[n]}ane`;

/** @param {number} index @param {Side} side */
export const branchKey = (index, side) => `${index}:${side}`;

/**
 * Builds the carbon skeleton: the drawn chain on row 0, each branch going up
 * (negative rows) or down from its carbon.
 * @param {number} length carbons in the drawn chain
 * @param {Branches} branches
 * @returns {Skeleton}
 */
export function buildSkeleton(length, branches) {
  /** @type {Spot[]} */
  const spots = [];
  /** @type {number[][]} */
  const adj = [];
  /** @param {Spot} s */
  const add = (s) => {
    spots.push(s);
    adj.push([]);
    return spots.length - 1;
  };
  /** @param {number} a @param {number} b */
  const link = (a, b) => {
    adj[a].push(b);
    adj[b].push(a);
  };
  for (let i = 0; i < length; i++) {
    const n = add({ col: i, row: 0 });
    if (i > 0) link(n - 1, n);
  }
  for (let i = 1; i < length - 1; i++) {
    for (const side of /** @type {Side[]} */ (['up', 'down'])) {
      const size = branches[branchKey(i, side)] ?? 0;
      const dir = side === 'up' ? -1 : 1;
      let prev = i;
      for (let k = 1; k <= size; k++) {
        const n = add({ col: i, row: dir * k });
        link(prev, n);
        prev = n;
      }
    }
  }
  return { spots, adj };
}

/**
 * The path between two nodes of a tree.
 * @param {number[][]} adj
 * @param {number} from
 * @param {number} to
 */
function treePath(adj, from, to) {
  /** @type {number[]} */
  const parent = new Array(adj.length).fill(-1);
  const seen = new Set([from]);
  const queue = [from];
  while (queue.length) {
    const n = /** @type {number} */ (queue.shift());
    for (const m of adj[n]) {
      if (seen.has(m)) continue;
      seen.add(m);
      parent[m] = n;
      queue.push(m);
    }
  }
  const path = [to];
  while (path[0] !== from) path.unshift(parent[path[0]]);
  return path;
}

/**
 * The name of the alkyl group that starts at `root`, joined to the main chain
 * at `from`, or null when the bench cannot make it.
 * @param {number[][]} adj
 * @param {number} root
 * @param {number} from
 */
export function alkylName(adj, root, from) {
  const nodes = [root];
  const seen = new Set([from, root]);
  for (let i = 0; i < nodes.length; i++) {
    for (const m of adj[nodes[i]]) {
      if (!seen.has(m)) {
        seen.add(m);
        nodes.push(m);
      }
    }
  }
  if (nodes.length === 1) return 'methyl';
  if (nodes.length === 2) return 'ethyl';
  if (nodes.length === 3) return adj[root].length === 3 ? 'isopropyl' : 'propyl';
  return null;
}

/** @param {number[]} a @param {number[]} b negative when `a` is lower at the first difference */
function compareLists(a, b) {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return a.length - b.length;
}

/**
 * Writes the name from the main chain's length and its substituents.
 * @param {number} length
 * @param {Substituent[]} subs
 */
export function writeName(length, subs) {
  /** @type {Map<string, number[]>} */
  const groups = new Map();
  for (const s of subs) groups.set(s.name, [...(groups.get(s.name) ?? []), s.locant]);
  const prefix = [...groups.keys()]
    .sort()
    .map((name) => {
      const locants = /** @type {number[]} */ (groups.get(name)).sort((a, b) => a - b);
      return `${locants.join(',')}-${MULTIPLIERS[locants.length]}${name}`;
    })
    .join('-');
  return `${prefix}${parentName(length)}`;
}

/**
 * Names the alkane drawn on the bench.
 * @param {Skeleton} skeleton
 * @returns {AlkaneName | null} null when a branch has no name on the bench
 */
export function nameAlkane({ adj }) {
  const ends = adj.map((links, i) => (links.length <= 1 ? i : -1)).filter((i) => i >= 0);
  /** @type {{ chain: number[], subs: Substituent[], locants: number[], alpha: number[], unnamed: boolean }[]} */
  const candidates = [];
  for (const a of ends) {
    for (const b of ends) {
      if (a === b) continue;
      const chain = treePath(adj, a, b);
      const inChain = new Set(chain);
      /** @type {Substituent[]} */
      const subs = [];
      let unnamed = false;
      chain.forEach((n, i) => {
        for (const m of adj[n]) {
          if (inChain.has(m)) continue;
          const name = alkylName(adj, m, n);
          if (name === null) unnamed = true;
          else subs.push({ locant: i + 1, name });
        }
      });
      const locants = subs.map((s) => s.locant).sort((x, y) => x - y);
      const alpha = [...subs]
        .sort((x, y) => (x.name === y.name ? x.locant - y.locant : x.name < y.name ? -1 : 1))
        .map((s) => s.locant);
      candidates.push({ chain, subs, locants, alpha, unnamed });
    }
  }
  candidates.sort(
    (x, y) =>
      y.chain.length - x.chain.length ||
      y.subs.length - x.subs.length ||
      compareLists(x.locants, y.locants) ||
      compareLists(x.alpha, y.alpha),
  );
  const best = candidates[0];
  if (best.unnamed) return null;
  return {
    name: writeName(best.chain.length, best.subs),
    parent: parentName(best.chain.length),
    chain: best.chain,
    substituents: best.subs,
  };
}

/** @param {string} text */
export const normalizeName = (text) =>
  text
    .toLowerCase()
    .replace(/[\s.]+/g, '')
    .replace(/[–—−]/g, '-');

/**
 * The substituent names a typed name lists, each repeated by its multiplier,
 * sorted, with their locants.
 * @param {string} text normalised name
 */
function typedParts(text) {
  const names = [];
  const locants = [];
  const order = [];
  for (const m of text.matchAll(/([\d,]+)-(di|tri|tetra)?(isopropyl|propyl|methyl|ethyl)/g)) {
    const locs = m[1].split(',').filter(Boolean).map(Number);
    const count = MULTIPLIERS.indexOf(m[2] ?? '') > 0 ? MULTIPLIERS.indexOf(m[2] ?? '') : 1;
    order.push(m[3]);
    for (let i = 0; i < Math.max(count, locs.length); i++) names.push(m[3]);
    locants.push(...locs);
  }
  return { names: names.sort(), locants: locants.sort((a, b) => a - b), order };
}

/** @typedef {'right' | 'parent' | 'branches' | 'numbering' | 'order' | 'format'} Verdict */

/**
 * Judges a typed name against the right one, naming the first rule broken.
 * @param {string} typed
 * @param {AlkaneName} right
 * @returns {Verdict}
 */
export function judgeName(typed, right) {
  const t = normalizeName(typed);
  if (t === right.name) return 'right';
  if (!t.endsWith(right.parent)) return 'parent';
  const mine = typedParts(t);
  const want = typedParts(right.name);
  if (mine.names.join() !== want.names.join()) return 'branches';
  if (mine.locants.join() !== want.locants.join()) return 'numbering';
  if (mine.order.join() !== want.order.join()) return 'order';
  return 'format';
}

/**
 * The condensed label of a carbon with `bonds` carbon neighbours.
 * @param {number} bonds
 */
export function carbonLabel(bonds) {
  const h = 4 - bonds;
  return h === 0 ? 'C' : h === 1 ? 'CH' : `CH${h}`;
}

/**
 * A random bench for the "Đề mới" button: 4 to 6 carbons drawn, one to three
 * branches.
 * @param {() => number} rand
 * @returns {{ length: number, branches: Branches }}
 */
export function randomBench(rand) {
  const length = 4 + Math.floor(rand() * 3);
  /** @type {Branches} */
  const branches = {};
  const count = 1 + Math.floor(rand() * 3);
  for (let k = 0; k < count; k++) {
    const index = 1 + Math.floor(rand() * (length - 2));
    const side = rand() < 0.5 ? 'up' : 'down';
    branches[branchKey(index, side)] = rand() < 0.7 ? 1 : 2;
  }
  return { length, branches };
}
