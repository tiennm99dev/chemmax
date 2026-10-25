<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import { clamp, snap } from '#lib/core/visuals/svg-math.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    VESSELS,
    buretteLevel,
    buretteReading,
    graduations,
    innerHeight,
    levelFor,
    radiusAt,
    roundReading,
    volumeAt,
  } from './glassware.js';

  /**
   * One piece of laboratory glassware with liquid in it: ống nghiệm, cốc
   * thuỷ tinh, bình tam giác, ống đong, bình định mức or burette. The
   * level follows the real shape (marks crowd near the neck of a conical
   * flask) and the surface shows a meniscus. With `interactive`, drag the
   * surface or focus it and use ↑/↓ (Shift for ten steps) to pour.
   *
   * - `vessel`: a key of `VESSELS` in glassware.js.
   * - `volume` (bindable): liquid in mL; for a burette, the scale reading
   *   (0 at the top), which grows as liquid runs out.
   * - `step`: pouring step in mL; defaults to the ĐCNN (or 1 mL).
   * - `liquid`: liquid colour.
   * - `reading`: show the readout with GHĐ and ĐCNN.
   *
   * @type {{
   *   vessel?: string;
   *   volume?: number;
   *   interactive?: boolean;
   *   step?: number;
   *   liquid?: string;
   *   reading?: boolean;
   *   label?: string;
   *   onchange?: (volume: number) => void;
   * }}
   */
  let {
    vessel = 'ong-dong',
    volume = $bindable(40),
    interactive = false,
    step,
    liquid = '#38bdf8',
    reading = true,
    label,
    onchange,
  } = $props();

  const v = $derived(VESSELS[vessel] ?? VESSELS['ong-dong']);
  const W = 240;
  const H = 300;
  const BASE = 272;
  const CX = 96;
  const pourStep = $derived(step ?? (v.minor || 1));
  const maxVolume = $derived(v.burette ? v.capacity : volumeAt(v, innerHeight(v) - 6));
  const level = $derived(v.burette ? buretteLevel(v, volume) : levelFor(v, volume));
  const y = (/** @type {number} */ h) => BASE - h;

  /** Outline of the inner wall, left side top-down then right side bottom-up. */
  const outline = $derived.by(() => {
    const pts = v.profile;
    const left = [...pts].reverse().map(([h, r]) => `${CX - r},${y(h)}`);
    const right = pts.map(([h, r]) => `${CX + r},${y(h)}`);
    return `M ${left.join(' L ')} L ${right.join(' L ')}`;
  });
  const liquidPath = $derived.by(() => {
    if (level <= 0.5) return '';
    const pts = v.profile.filter(([h]) => h < level);
    const top = /** @type {[number, number]} */ ([level, radiusAt(v, level)]);
    const all = [...pts, top];
    const left = [...all].reverse().map(([h, r]) => `${CX - r + 1.5},${y(h)}`);
    const right = all.map(([h, r]) => `${CX + r - 1.5},${y(h)}`);
    const r = top[1] - 1.5;
    // The meniscus of water dips in the middle.
    return `M ${left.join(' L ')} L ${right.join(' L ')} Q ${CX} ${y(level) + Math.min(6, r / 2)} ${CX - r} ${y(level)} Z`;
  });
  const marks = $derived(graduations(v));
  const maxR = $derived(Math.max(...v.profile.map(([, r]) => r)));

  const fmt = (/** @type {number} */ n) => formatNumber(n, 2);
  const text = $derived.by(() => {
    if (v.burette) return `Số đọc trên burette: ${fmt(roundReading(v, volume))} mL`;
    if (v.marks) {
      const mark = v.marks[0];
      if (Math.abs(volume - mark) < 0.5) return `Mực chất lỏng đúng vạch mức: ${mark} mL`;
      return volume < mark
        ? `Mực chất lỏng dưới vạch mức (${mark} mL): thêm dần cho tới vạch`
        : `Mực chất lỏng vượt quá vạch mức (${mark} mL)`;
    }
    if (!v.minor) return `Chất lỏng trong ống: khoảng ${fmt(Math.round(volume))} mL`;
    return `Thể tích đọc được: ${fmt(roundReading(v, volume))} mL`;
  });
  const scale = $derived(
    v.minor
      ? `GHĐ ${v.capacity} mL · ĐCNN ${fmt(v.minor)} mL`
      : v.marks
        ? `Dung tích ${v.capacity} mL`
        : '',
  );

  /** @param {number} next */
  function setVolume(next) {
    const value = Math.round(clamp(snap(next, pourStep), 0, maxVolume) * 1000) / 1000;
    if (value === volume) return;
    volume = value;
    onchange?.(volume);
  }

  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const scratch = { x: 0, y: 0 };
  const drag = $derived({
    point: scratch,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 0,
    onChange: () => {
      const h = BASE - scratch.y;
      setVolume(v.burette ? buretteReading(v, h) : volumeAt(v, h));
    },
    /** @param {number} _dx @param {number} dy @param {boolean} big */
    onKeyMove: (_dx, dy, big) =>
      setVolume(volume + (v.burette ? dy : -dy) * pourStep * (big ? 10 : 1)),
  });
</script>

<figure class="space-y-2">
  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-[15rem] select-none"
    style:touch-action={interactive ? 'none' : null}
    role={interactive ? 'group' : 'img'}
    aria-label="{label ?? v.name}: {text}"
  >
    {#if vessel === 'ong-dong'}
      <rect x={CX - 48} y={BASE + 2} width="96" height="10" rx="3" fill="#cbd5e1" />
    {/if}
    {#if v.burette}
      <rect x={CX - 14} y={BASE + 2} width="28" height="8" rx="2" fill="#64748b" />
      <path
        d="M {CX - 4} {BASE + 10} L {CX - 1.5} {BASE + 24} L {CX + 1.5} {BASE + 24} L {CX +
          4} {BASE + 10} Z"
        fill="#cbd5e1"
      />
    {/if}
    {#if liquidPath}
      <path d={liquidPath} fill={liquid} opacity="0.75" />
    {/if}
    <path d={outline} fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round" />
    {#each marks as m (m.value)}
      {@const r = radiusAt(v, m.h)}
      <line
        x1={CX + r - (m.major ? 14 : 7)}
        x2={CX + r}
        y1={y(m.h)}
        y2={y(m.h)}
        stroke="#1e293b"
        stroke-width={m.major ? 1.5 : 1}
      />
      {#if m.major}
        <text x={CX + r + 6} y={y(m.h) + 4} font-size="11" fill="#1e293b">{fmt(m.value)}</text>
      {/if}
    {/each}
    {#if v.marks}
      {#each marks as m (m.value)}
        <line
          x1={CX - radiusAt(v, m.h)}
          x2={CX + radiusAt(v, m.h)}
          y1={y(m.h)}
          y2={y(m.h)}
          stroke="#1e293b"
          stroke-width="1.5"
        />
      {/each}
    {/if}
    {#if interactive}
      <g
        class="surface"
        role="slider"
        tabindex="0"
        aria-label="Mực chất lỏng — kéo hoặc dùng phím ↑ ↓"
        aria-valuemin={0}
        aria-valuemax={Math.round(maxVolume)}
        aria-valuenow={volume}
        aria-valuetext={text}
        style="cursor:ns-resize; outline:none"
        use:draggable={drag}
      >
        <rect
          x={CX - maxR - 10}
          y={y(level) - 12}
          width={2 * maxR + 20}
          height="24"
          fill="transparent"
        />
        <circle
          cx={CX - radiusAt(v, level) - 8}
          cy={y(level)}
          r="6"
          fill="#fff"
          stroke="#0f172a"
          stroke-width="2"
        />
      </g>
    {/if}
  </svg>
  {#if reading}
    <figcaption class="text-center text-sm text-slate-700" aria-live="polite">
      <p class="font-semibold">{v.name}{scale ? ` · ${scale}` : ''}</p>
      <p class="tabular-nums">{text}</p>
    </figcaption>
  {/if}
</figure>

<style>
  .surface:focus-visible circle {
    stroke: #4f46e5;
    stroke-width: 3.5;
  }
</style>
