/**
 * Scale of the atom: a zoom from 1 nm down to 10⁻¹⁴ m, drawn to scale, with an
 * atom about 10⁻¹⁰ m across and a nucleus about 10⁻¹⁴ m across, the orders
 * of magnitude the textbook gives.
 */

/** Diameter of an atom, in metres (order of magnitude). */
export const ATOM_DIAMETER = 1e-10;

/** Diameter of a nucleus, in metres (order of magnitude). */
export const NUCLEUS_DIAMETER = 1e-14;

/** How many times wider the atom is than its nucleus. */
export const SIZE_RATIO = ATOM_DIAMETER / NUCLEUS_DIAMETER;

/** Zoom range: the view is 10^-ZOOM_MIN m wide at the start, 10^-ZOOM_MAX m at the end. */
export const ZOOM_MIN = 9;
export const ZOOM_MAX = 14;

/**
 * Width of the field of view at zoom exponent `e`: 10^-e metres.
 * @param {number} e
 */
export function viewWidth(e) {
  return 10 ** -e;
}

/**
 * On-screen size of an object of `size` metres when the view is `viewPx`
 * pixels wide at zoom `e`.
 * @param {number} size
 * @param {number} e
 * @param {number} viewPx
 */
export function onScreen(size, e, viewPx) {
  return (size / viewWidth(e)) * viewPx;
}

/** @typedef {'atoms' | 'atom' | 'empty' | 'nucleus' | 'nucleons'} Stage */

/**
 * What the learner sees at zoom `e`: several atoms, one atom filling the
 * view, empty space with the nucleus still below a pixel, the nucleus, or
 * its protons and neutrons.
 * @param {number} e
 * @param {number} viewPx
 * @returns {Stage}
 */
export function stage(e, viewPx) {
  const atom = onScreen(ATOM_DIAMETER, e, viewPx);
  const nucleus = onScreen(NUCLEUS_DIAMETER, e, viewPx);
  if (atom < viewPx / 2) return 'atoms';
  if (atom <= viewPx * 1.5) return 'atom';
  if (nucleus < 2) return 'empty';
  if (nucleus < viewPx / 3) return 'nucleus';
  return 'nucleons';
}

export const STAGE_TEXT = /** @type {Record<Stage, string>} */ ({
  atoms: 'Nhiều nguyên tử xếp cạnh nhau; hạt nhân quá nhỏ, chưa thể thấy.',
  atom: 'Một nguyên tử chiếm gần hết khung nhìn: chỉ thấy lớp vỏ electron, hạt nhân vẫn nhỏ hơn một điểm ảnh.',
  empty:
    'Đã ở trong lớp vỏ: xung quanh gần như là khoảng trống, chỉ có các electron chuyển động rất nhanh.',
  nucleus: 'Hạt nhân hiện ra ở tâm nguyên tử, nhỏ bé giữa khoảng trống mênh mông.',
  nucleons: 'Hạt nhân carbon gồm 6 proton và 6 neutron xếp sát nhau.',
});

/**
 * Size of the atom if its nucleus were enlarged to `model` metres, keeping
 * the ratio.
 * @param {number} model
 */
export function scaledAtom(model) {
  return model * SIZE_RATIO;
}

/**
 * A length as "a × 10ⁿ m" text with a comma decimal (a omitted when 1).
 * @param {number} metres
 */
export function formatMetres(metres) {
  const n = Math.floor(Math.log10(metres) + 1e-9);
  const a = Math.round((metres / 10 ** n) * 10) / 10;
  const sup = String(n).replace(/[-\d]/g, (c) => (c === '-' ? '⁻' : '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)]));
  const mantissa = a === 1 ? '' : `${String(a).replace('.', ',')} × `;
  return `${mantissa}10${sup} m`;
}

/**
 * Positions of `count` nucleons packed in a small hexagonal cluster around
 * the origin, `d` apart, alternating proton and neutron.
 * @param {number} count
 * @param {number} d
 * @returns {Array<{ x: number, y: number, kind: 'p' | 'n' }>}
 */
export function nucleonCluster(count, d) {
  /** @type {Array<{ x: number, y: number }>} */
  const spots = [{ x: 0, y: 0 }];
  for (let ring = 1; spots.length < count; ring++) {
    const n = 6 * ring;
    for (let i = 0; i < n && spots.length < count; i++) {
      const a = (2 * Math.PI * i) / n + ring * 0.4;
      spots.push({ x: ring * d * Math.cos(a), y: ring * d * Math.sin(a) });
    }
  }
  return spots.map((s, i) => ({ ...s, kind: i % 2 === 0 ? 'p' : 'n' }));
}

/** @typedef {{ protons: number, neutrons: number, electrons: number, task: string }} Target */

/** Atoms to build in the build-an-atom widget, all neutral. */
export const TARGETS = /** @type {Target[]} */ ([
  { protons: 6, neutrons: 6, electrons: 6, task: 'Nguyên tử carbon có 6 neutron' },
  { protons: 8, neutrons: 8, electrons: 8, task: 'Nguyên tử oxygen có 8 neutron' },
  {
    protons: 11,
    neutrons: 12,
    electrons: 11,
    task: 'Nguyên tử sodium có khối lượng khoảng 23 amu',
  },
  {
    protons: 13,
    neutrons: 14,
    electrons: 13,
    task: 'Nguyên tử aluminium có khối lượng khoảng 27 amu',
  },
]);

/**
 * Whether the particles built match a target exactly.
 * @param {Target} target
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function matchesTarget(target, protons, neutrons, electrons) {
  return (
    target.protons === protons && target.neutrons === neutrons && target.electrons === electrons
  );
}

/**
 * A hint towards a target: which particle count to change first. Protons
 * fix the element, so they come first, then electrons for neutrality, then
 * neutrons for the mass.
 * @param {Target} target
 * @param {number} protons
 * @param {number} neutrons
 * @param {number} electrons
 */
export function targetHint(target, protons, neutrons, electrons) {
  if (protons !== target.protons) {
    return protons < target.protons
      ? 'Cần thêm proton: số proton quyết định nguyên tố.'
      : 'Bớt proton: số proton quyết định nguyên tố.';
  }
  if (electrons !== protons) return 'Nguyên tử trung hoà điện: số electron phải bằng số proton.';
  if (neutrons !== target.neutrons) {
    return neutrons < target.neutrons
      ? 'Đúng nguyên tố rồi; thêm neutron để đủ khối lượng.'
      : 'Đúng nguyên tố rồi; bớt neutron.';
  }
  return 'Chính xác!';
}
