/**
 * Ring closure of glucose and fructose, frame by frame. An –OH group of the
 * chain adds to the C=O group (C1 of glucose, C2 of fructose): its oxygen
 * becomes the ring oxygen and its hydrogen moves to the carbonyl oxygen,
 * which becomes the new hemiacetal (glucose) or hemiketal (fructose) –OH.
 * The book's rings come from the –OH at C5: a six-membered ring for glucose,
 * a five-membered ring for fructose. That new –OH lies below the ring plane
 * in the α form and above it in the β form (Haworth drawing).
 *
 * Drawing: the open chain is a zigzag; the ring is a flattened polygon
 * (Haworth view) with the ring oxygen at the back. Every atom moves on a
 * straight line from its open-chain place to its ring place.
 */

/** @typedef {'glucose' | 'fructose'} SugarId */
/** @typedef {'alpha' | 'beta'} Anomer */

export const SUGARS = {
  glucose: { name: 'glucose', carbonyl: 1, group: 'aldehyde', hemi: 'hemiacetal' },
  fructose: { name: 'fructose', carbonyl: 2, group: 'ketone', hemi: 'hemiketal' },
};

/** Carbons whose –OH the learner may bring to the C=O group. */
export const ATTACKS = [3, 4, 5, 6];

export const W = 360;
export const H = 250;
const CENTER = { x: 180, y: 138 };
const RX = 92;
const RY = 40;
const STEP = 50;

/**
 * The ring an –OH at carbon `attack` closes with the carbonyl group.
 * @param {SugarId} id
 * @param {number} attack
 */
export function ringOf(id, attack) {
  const { carbonyl } = SUGARS[id];
  const carbons = [];
  for (let c = carbonyl; c <= attack; c++) carbons.push(c);
  const size = carbons.length + 1;
  return {
    carbons,
    size,
    stable: size === 5 || size === 6,
    book: attack === 5,
  };
}

/**
 * Name of the ring form.
 * @param {SugarId} id
 * @param {Anomer} anomer
 */
export function formName(id, anomer) {
  return `${anomer === 'alpha' ? 'α' : 'β'}-${SUGARS[id].name}`;
}

/**
 * Feedback once the ring is closed (rich text).
 * @param {SugarId} id
 * @param {number} attack
 * @param {Anomer} anomer
 */
export function verdict(id, attack, anomer) {
  const sugar = SUGARS[id];
  const ring = ringOf(id, attack);
  const at = `C${sugar.carbonyl}`;
  if (ring.book) {
    const side = anomer === 'alpha' ? 'phía dưới' : 'phía trên';
    return {
      tone: /** @type {const} */ ('ok'),
      text: `Đã tạo ${formName(id, anomer)}: vòng ${ring.size} cạnh gồm ${ring.size - 1} nguyên tử C và $1$ nguyên tử O. Nhóm $\\mathrm{{-}OH}$ ${sugar.hemi} mới ở ${at} nằm ${side} mặt phẳng vòng.`,
    };
  }
  if (!ring.stable) {
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Vòng ${ring.size} cạnh kém bền, ${sugar.name} không đóng vòng theo cách này. Vòng bền là vòng $5$ hoặc $6$ cạnh; thử nhóm $\\mathrm{{-}OH}$ ở C5.`,
    };
  }
  return {
    tone: /** @type {const} */ ('info'),
    text: `Vòng ${ring.size} cạnh cũng bền, nhưng dạng vòng sách giáo khoa giới thiệu cho ${sugar.name} được tạo bởi nhóm $\\mathrm{{-}OH}$ ở C5. Thử chọn C5.`,
  };
}

/**
 * @typedef {{ id: string, label: string, x: number, y: number, kind: 'C' | 'O' | 'R', highlight?: boolean }} Atom
 * @typedef {{ a: string, b: string, order: 1 | 2, style: 'solid' | 'dashed', opacity: number }} Bond
 */

/** Open-chain place of carbon `c`. */
function openCarbon(/** @type {number} */ c) {
  return { x: 55 + (c - 1) * STEP, y: c % 2 ? 128 : 152 };
}

/**
 * Ring places of the ring members (ring oxygen first, then the carbons from
 * the carbonyl carbon on), clockwise on screen from the back.
 * @param {number} size
 */
export function ringPlaces(size) {
  const start = size === 6 ? -60 : -90;
  return Array.from({ length: size }, (_, k) => {
    const a = ((start + (k * 360) / size) * Math.PI) / 180;
    return { x: CENTER.x + RX * Math.cos(a), y: CENTER.y + RY * Math.sin(a) };
  });
}

/** @param {number} t */
const ease = (t) => t * t * (3 - 2 * t);

/**
 * @param {{ x: number, y: number }} p @param {{ x: number, y: number }} q @param {number} t
 */
const mix = (p, q, t) => ({ x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t });

/**
 * Atoms and bonds at progress `t` (0 open chain, 1 ring closed).
 * @param {SugarId} id
 * @param {number} attack
 * @param {Anomer} anomer
 * @param {number} t
 */
export function frame(id, attack, anomer, t) {
  const sugar = SUGARS[id];
  const ring = ringOf(id, attack);
  const places = ringPlaces(ring.size);
  const k = ease(Math.max(0, Math.min(1, t)));
  const down = anomer === 'alpha';

  /** @type {Record<number, { x: number, y: number }>} */
  const closed = {};
  ring.carbons.forEach((c, i) => (closed[c] = places[i + 1]));
  const attackPlace = closed[attack];
  // Carbons past the ring stand above it, packed closer when there are many.
  const rise = Math.min(44, (attackPlace.y - 20) / Math.max(1, 6 - attack));
  for (let c = attack + 1; c <= 6; c++) {
    closed[c] = { x: attackPlace.x, y: attackPlace.y - rise * (c - attack) };
  }
  const head = places[1];
  for (let c = sugar.carbonyl - 1; c >= 1; c--) {
    closed[c] = { x: head.x + 18, y: head.y + (down ? -46 : 46) };
  }

  /** @type {Atom[]} */
  const atoms = [];
  for (let c = 1; c <= 6; c++) {
    atoms.push({
      id: `C${c}`,
      label: `C${c}`,
      kind: 'C',
      highlight: c === sugar.carbonyl,
      ...mix(openCarbon(c), closed[c], k),
    });
  }
  const carbonylOpen = openCarbon(sugar.carbonyl);
  const carbonylO = mix(
    { x: carbonylOpen.x, y: carbonylOpen.y - 46 },
    { x: head.x + 4, y: head.y + (down ? 46 : -46) },
    k,
  );
  const attackOpen = openCarbon(attack);
  const ringO = mix({ x: attackOpen.x, y: attackOpen.y + 48 }, places[0], k);
  const done = t >= 1;
  atoms.push({
    id: 'Ocarbonyl',
    label: done ? 'OH' : 'O',
    kind: 'O',
    highlight: done,
    ...carbonylO,
  });
  atoms.push({ id: 'Oring', label: done ? 'O' : 'OH', kind: 'O', ...ringO });

  /** @type {Bond[]} */
  const bonds = [];
  for (let c = 1; c < 6; c++) {
    bonds.push({ a: `C${c}`, b: `C${c + 1}`, order: 1, style: 'solid', opacity: 1 });
  }
  bonds.push({
    a: `C${sugar.carbonyl}`,
    b: 'Ocarbonyl',
    order: done ? 1 : 2,
    style: 'solid',
    opacity: 1,
  });
  bonds.push({ a: `C${attack}`, b: 'Oring', order: 1, style: 'solid', opacity: 1 });
  if (t > 0) {
    bonds.push({
      a: 'Oring',
      b: `C${sugar.carbonyl}`,
      order: 1,
      style: done ? 'solid' : 'dashed',
      opacity: done ? 1 : 0.3 + 0.7 * k,
    });
  }
  return { atoms, bonds, ring };
}
