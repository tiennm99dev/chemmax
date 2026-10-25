<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import ChemFormula from './chem-formula.svelte';
  import { element } from './elements.js';
  import {
    atomColor,
    bondSegments,
    bondSummary,
    bondValences,
    layout,
    moleculeMass,
  } from './molecule.js';

  /**
   * 2D ball-and-stick model of a molecule (SVG, no WebGL). Single, double
   * and triple bonds are drawn as one, two or three sticks. With
   * `rotatable`, drag the handle on the ring or focus the drawing and use
   * ←/→ (Shift for 45°) to turn it. Tap an atom (or Tab to it) to see its
   * element and how many bonds it forms.
   *
   * - `molecule`: a molecule from `MOLECULES` in molecule.js, or one built the same way.
   * - `rotation` (bindable): turn in degrees, counter-clockwise.
   * - `labels`: print element symbols on the balls.
   * - `details`: show formula, molar mass and bond counts under the drawing.
   *
   * @type {{
   *   molecule: import('./molecule.js').Molecule;
   *   rotation?: number;
   *   rotatable?: boolean;
   *   labels?: boolean;
   *   details?: boolean;
   *   size?: number;
   *   label?: string;
   * }}
   */
  let {
    molecule,
    rotation = $bindable(0),
    rotatable = true,
    labels = true,
    details = true,
    size = 360,
    label,
  } = $props();

  const W = 360;
  const H = 260;
  const RING = 118;
  const drawn = $derived(layout(molecule, { width: W, height: H, pad: 40, degrees: rotation }));
  const valences = $derived(bondValences(molecule));
  const summary = $derived(bondSummary(molecule));
  /** @type {number | null} */
  let picked = $state(null);
  const pickedAtom = $derived(picked === null ? null : (drawn.atoms[picked] ?? null));

  const BOND_NAMES = ['', 'đơn', 'đôi', 'ba'];
  const bondText = $derived(
    [
      summary.single && `${summary.single} liên kết đơn`,
      summary.double && `${summary.double} liên kết đôi`,
      summary.triple && `${summary.triple} liên kết ba`,
    ]
      .filter(Boolean)
      .join(', '),
  );
  const pickedText = $derived.by(() => {
    if (picked === null || !pickedAtom)
      return 'Chọn một nguyên tử để xem nó tạo bao nhiêu liên kết.';
    const el = element(pickedAtom.el);
    const own = molecule.bonds.filter((b) => b.a === picked || b.b === picked);
    const kinds = own.map((b) => BOND_NAMES[b.order]).join(', ');
    return `Nguyên tử ${el?.name ?? pickedAtom.el} (${pickedAtom.el}) tạo ${own.length} liên kết (${kinds}), tổng cộng ${valences[picked]} cặp electron dùng chung.`;
  });

  /** @param {number} deg */
  function setRotation(deg) {
    rotation = ((Math.round(deg) % 360) + 360) % 360;
  }

  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const handle = $derived.by(() => {
    const t = (rotation * Math.PI) / 180;
    return { x: W / 2 + RING * Math.cos(t), y: H / 2 - RING * Math.sin(t) };
  });
  const scratch = { x: 0, y: 0 };
  const drag = $derived({
    point: scratch,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 0,
    onChange: () => setRotation((Math.atan2(H / 2 - scratch.y, scratch.x - W / 2) * 180) / Math.PI),
    /** @param {number} dx @param {number} dy @param {boolean} big */
    onKeyMove: (dx, dy, big) => setRotation(rotation + (dx || -dy) * -1 * (big ? 45 : 15)),
  });

  const described = $derived(
    label ??
      `Mô hình quả cầu – que của phân tử ${molecule.name} (${molecule.formula}): ${molecule.atoms.length} nguyên tử, ${bondText}.`,
  );
</script>

<figure class="space-y-2">
  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full select-none"
    style:max-width="{size}px"
    style:touch-action={rotatable ? 'none' : null}
    role="group"
    aria-label={described}
  >
    {#each molecule.bonds as b, i (i)}
      {@const p = { x: drawn.atoms[b.a].px, y: drawn.atoms[b.a].py }}
      {@const q = { x: drawn.atoms[b.b].px, y: drawn.atoms[b.b].py }}
      {#each bondSegments(p, q, b.order, 7) as s, k (k)}
        <line {...s} stroke="#64748b" stroke-width="4" stroke-linecap="round" />
      {/each}
    {/each}
    {#each drawn.atoms as a, i (i)}
      {@const dark = a.el === 'C' || a.el === 'N' || a.el === 'O' || a.el === 'Cl'}
      <g
        role="button"
        tabindex="0"
        aria-label="Nguyên tử {a.el} số {i + 1}"
        aria-pressed={picked === i}
        class="atom cursor-pointer outline-none"
        onclick={() => (picked = picked === i ? null : i)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            picked = picked === i ? null : i;
          }
        }}
      >
        <circle
          cx={a.px}
          cy={a.py}
          r={a.r}
          fill={atomColor(a.el)}
          stroke={picked === i ? '#4f46e5' : '#0f172a'}
          stroke-width={picked === i ? 3.5 : 1.5}
        />
        <circle
          cx={a.px - a.r * 0.35}
          cy={a.py - a.r * 0.35}
          r={a.r * 0.28}
          fill="#fff"
          opacity="0.45"
        />
        {#if labels}
          <text
            x={a.px}
            y={a.py + 5}
            text-anchor="middle"
            font-size={a.el.length > 1 ? 13 : 14}
            font-weight="700"
            fill={dark ? '#fff' : '#0f172a'}
            pointer-events="none">{a.el}</text
          >
        {/if}
      </g>
    {/each}
    {#if rotatable}
      <circle
        cx={W / 2}
        cy={H / 2}
        r={RING}
        fill="none"
        stroke="#cbd5e1"
        stroke-dasharray="3 5"
        pointer-events="none"
      />
      <g
        class="rotate-handle"
        role="slider"
        tabindex="0"
        aria-label="Xoay phân tử — kéo hoặc dùng phím ← →"
        aria-valuemin={0}
        aria-valuemax={359}
        aria-valuenow={rotation}
        aria-valuetext="{rotation}°"
        style="cursor:grab; outline:none"
        use:draggable={drag}
      >
        <circle cx={handle.x} cy={handle.y} r="16" fill="transparent" />
        <circle cx={handle.x} cy={handle.y} r="8" fill="#fff" stroke="#4f46e5" stroke-width="3" />
      </g>
    {/if}
  </svg>
  {#if details}
    <figcaption class="space-y-1 text-center text-sm text-slate-700">
      <p>
        <span class="font-semibold">{molecule.name}</span> ·
        <ChemFormula formula={molecule.formula} class="font-semibold" /> ·
        <span class="tabular-nums">M = {formatNumber(moleculeMass(molecule), 2)} g/mol</span>
      </p>
      <p>{bondText}</p>
      <p aria-live="polite" class="text-slate-600">{pickedText}</p>
    </figcaption>
  {/if}
</figure>

<style>
  .atom:focus-visible circle:first-child,
  .rotate-handle:focus-visible circle:last-child {
    stroke: #4f46e5;
    stroke-width: 4;
  }
</style>
