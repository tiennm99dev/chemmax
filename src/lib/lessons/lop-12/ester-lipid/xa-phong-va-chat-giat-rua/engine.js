/**
 * A cartoon of how soap and synthetic detergent clean an oil stain off a
 * piece of cloth, in four stages:
 *   0. the molecules dissolve and spread through the water;
 *   1. their hydrophobic tails sink into the oil, heads stay in the water;
 *   2. the oil breaks into small droplets wrapped by molecules (micelles)
 *      that lift off the cloth;
 *   3. rinsing carries the droplets away.
 * In hard water, Ca²⁺ and Mg²⁺ ions turn part of the soap into an insoluble
 * scum (2RCOO⁻ + Ca²⁺ → (RCOO)₂Ca↓), so too few molecules are left to wrap
 * every droplet. Synthetic detergents form no such precipitate.
 *
 * Every position is in SVG units on a 360 × 240 board; a molecule is drawn
 * as a head (hydrophilic end) and a tail pointing at `angle` (radians).
 */

export const W = 360;
export const H = 240;
export const TOTAL = 24;
export const PER_DROPLET = 8;
export const DROPLETS = 3;
/** Soap molecules lost to scum in hard water (two per Ca²⁺). */
export const LOST_IN_HARD_WATER = 14;
export const TAIL = 16;

/** The stain resting on the cloth. */
export const STAIN = { x: 180, y: 204, rx: 90, ry: 22 };

export const STAGES = [
  { value: 0, label: 'Hoà tan' },
  { value: 1, label: 'Thấm vào vết bẩn' },
  { value: 2, label: 'Tách vết bẩn' },
  { value: 3, label: 'Rửa trôi' },
];

/** @typedef {'soap' | 'detergent'} Agent */
/** @typedef {'soft' | 'hard'} Water */
/** @typedef {{ id: number, x: number, y: number, angle: number }} Molecule */
/** @typedef {{ id: number, x: number, y: number, r: number }} Droplet */

/**
 * Molecules still able to wash.
 * @param {Agent} agent
 * @param {Water} water
 */
export function activeCount(agent, water) {
  return agent === 'soap' && water === 'hard' ? TOTAL - LOST_IN_HARD_WATER : TOTAL;
}

/**
 * Droplets the active molecules can wrap.
 * @param {number} active
 */
export function dropletsFormed(active) {
  return Math.min(DROPLETS, Math.floor(active / PER_DROPLET));
}

/**
 * Heads on the upper edge of an ellipse, tails pointing in.
 * @param {number} count
 * @param {{ x: number, y: number, rx: number, ry: number }} e
 * @param {number} firstId
 * @returns {Molecule[]}
 */
function onStain(count, e, firstId) {
  /** @type {Molecule[]} */
  const list = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.PI + (Math.PI * (i + 0.5)) / count;
    const bx = e.x + e.rx * Math.cos(phi);
    const by = e.y + e.ry * Math.sin(phi);
    // Outward normal of the ellipse at that point.
    const nx = Math.cos(phi) / e.rx;
    const ny = Math.sin(phi) / e.ry;
    const len = Math.hypot(nx, ny);
    const ux = nx / len;
    const uy = ny / len;
    list.push({
      id: firstId + i,
      x: bx + ux * (TAIL - 6),
      y: by + uy * (TAIL - 6),
      angle: Math.atan2(-uy, -ux),
    });
  }
  return list;
}

/**
 * Molecules all round a droplet, heads out and tails in.
 * @param {Droplet} d
 * @param {number} firstId
 * @returns {Molecule[]}
 */
function aroundDroplet(d, firstId) {
  /** @type {Molecule[]} */
  const list = [];
  for (let i = 0; i < PER_DROPLET; i++) {
    const phi = (2 * Math.PI * i) / PER_DROPLET - Math.PI / 2;
    const reach = d.r + TAIL - 6;
    list.push({
      id: firstId + i,
      x: d.x + reach * Math.cos(phi),
      y: d.y + reach * Math.sin(phi),
      angle: phi + Math.PI,
    });
  }
  return list;
}

/**
 * Molecules spread through the water on a loose grid.
 * @param {number} count
 * @returns {Molecule[]}
 */
function scattered(count) {
  /** @type {Molecule[]} */
  const list = [];
  for (let i = 0; i < count; i++) {
    const col = i % 6;
    const row = Math.floor(i / 6);
    list.push({
      id: i,
      x: 36 + col * 54 + (row % 2) * 24,
      y: 52 + row * 30,
      angle: ((i * 137) % 360) * (Math.PI / 180),
    });
  }
  return list;
}

/**
 * Everything drawn at one stage.
 * @param {number} stage 0 to 3
 * @param {Agent} agent
 * @param {Water} water
 */
export function scene(stage, agent, water) {
  const active = activeCount(agent, water);
  const lost = TOTAL - active;
  const formed = dropletsFormed(active);
  const leftShare = (DROPLETS - formed) / DROPLETS;
  /** Ca²⁺ soap clumps floating as scum, one per two lost molecules. */
  const scum = Array.from({ length: lost / 2 }, (_, i) => ({
    id: i,
    x: 40 + i * 44,
    y: 30 + (i % 2) * 8,
  }));

  /** @type {Molecule[]} */
  let molecules;
  /** @type {Droplet[]} */
  let droplets = [];
  /** @type {{ x: number, y: number, rx: number, ry: number } | null} */
  let stain = STAIN;

  if (stage === 0) {
    molecules = scattered(active);
  } else if (stage === 1) {
    molecules = onStain(active, STAIN, 0);
  } else {
    const xs = [90, 180, 270];
    if (stage === 2) {
      droplets = xs.slice(0, formed).map((x, i) => ({ id: i, x, y: 112 + (i % 2) * 18, r: 14 }));
    }
    const left = active - formed * PER_DROPLET;
    stain =
      leftShare > 0
        ? { x: STAIN.x, y: STAIN.y, rx: STAIN.rx * Math.sqrt(leftShare), ry: STAIN.ry }
        : null;
    molecules = [
      ...droplets.flatMap((d, i) => aroundDroplet(d, i * PER_DROPLET)),
      ...(stain ? onStain(left, stain, formed * PER_DROPLET) : []),
    ];
  }

  return {
    active,
    lost,
    formed,
    scum,
    stain,
    droplets,
    molecules,
    /** Share of the stain gone from the cloth (0 to 1). */
    cleaned: stage >= 2 ? formed / DROPLETS : 0,
  };
}

/**
 * The sentence under the board.
 * @param {number} stage
 * @param {Agent} agent
 * @param {Water} water
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function explain(stage, agent, water) {
  const s = scene(stage, agent, water);
  const who = agent === 'soap' ? 'xà phòng' : 'chất giặt rửa tổng hợp';
  const scum =
    s.lost > 0
      ? ` Trong nước cứng, ${s.lost} trong ${TOTAL} phân tử xà phòng đã kết hợp với ion $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ tạo kết tủa (váng xám), không còn tác dụng giặt rửa.`
      : '';
  if (stage === 0) {
    return {
      tone: s.lost > 0 ? 'warn' : 'info',
      text: `Phân tử ${who} tan trong nước, làm giảm sức căng bề mặt nên vải dễ thấm ướt.${scum}`,
    };
  }
  if (stage === 1) {
    return {
      tone: s.lost > 0 ? 'warn' : 'info',
      text: `Đuôi kị nước (gốc hydrocarbon dài) thâm nhập vào vết dầu mỡ, đầu ưa nước hướng ra phía nước.${s.lost > 0 ? ` Chỉ còn ${s.active} phân tử bám vào vết bẩn.` : ''}`,
    };
  }
  if (stage === 2) {
    if (s.formed === DROPLETS) {
      return {
        tone: 'info',
        text: 'Vết dầu bị chia thành những hạt rất nhỏ, mỗi hạt được các phân tử bao quanh: đuôi quay vào trong hạt dầu, đầu ưa nước quay ra ngoài. Các hạt này phân tán vào nước.',
      };
    }
    return {
      tone: 'warn',
      text: `Mỗi hạt dầu cần khoảng ${PER_DROPLET} phân tử bao quanh, nên ${s.active} phân tử chỉ tách được ${s.formed} trong ${DROPLETS} phần vết bẩn.`,
    };
  }
  if (s.formed === DROPLETS) {
    return {
      tone: 'ok',
      text: `Các hạt dầu bị nước cuốn trôi, vải sạch hoàn toàn.${agent === 'detergent' && water === 'hard' ? ' Chất giặt rửa tổng hợp không tạo kết tủa với $\\mathrm{Ca^{2+}}$, $\\mathrm{Mg^{2+}}$ nên vẫn giặt sạch trong nước cứng.' : ''}`,
    };
  }
  return {
    tone: 'warn',
    text: `Chỉ khoảng ${Math.round(s.cleaned * 100)}% vết bẩn bị rửa trôi. Xà phòng giặt kém trong nước cứng và tạo váng bám trên vải; nên dùng chất giặt rửa tổng hợp.`,
  };
}
