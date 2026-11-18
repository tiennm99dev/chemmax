<!-- Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again. -->
<script>
  import { along, arcPath, rightMarkPath } from '#lib/core/visuals/angle-math.js';
  import Protractor from '#lib/core/visuals/protractor.svelte';
  import { rayDirection } from '#lib/core/visuals/protractor.js';

  /**
   * A still angle for a review question: the vertex `names[0]`, a side
   * through `names[1]` pointing right or left and a side through `names[2]`,
   * an arc on the angle and, when asked, a protractor laid on it. The measure
   * and the right-angle mark show only once the question has ended, and the
   * protractor's scale to read is coloured only then.
   * @type {{
   *   m: number;
   *   side: 'phai' | 'trai';
   *   protractor: boolean;
   *   names: readonly string[];
   *   settled: boolean;
   * }}
   */
  let { m, side, protractor, names, settled } = $props();

  const W = 360;
  const H = 220;
  const R = 134;

  const len = $derived(protractor ? R + 18 : 120);
  // Without a protractor the angle sits in the middle of the picture: its
  // height is that of the second side, plus room for the vertex name below.
  const o = $derived(
    protractor
      ? { x: W / 2, y: 196 }
      : { x: W / 2, y: (H + len * Math.sin((m * Math.PI) / 180)) / 2 + 4 },
  );
  const first = $derived(side === 'phai' ? 0 : 180);
  const second = $derived(rayDirection(m, side));
  const rays = $derived(
    [
      { name: names[1], dir: first },
      { name: names[2], dir: second },
    ].map((r) => ({ ...r, tip: along(o, len, r.dir), at: along(o, len + 14, r.dir) })),
  );
  const label = $derived(
    `Góc đỉnh ${names[0]}, cạnh ${names[0]}${names[1]}, ${names[0]}${names[2]}.` +
      (protractor ? ' Thước đo góc đặt lên góc, tâm ở đỉnh góc.' : '') +
      (settled ? ` Góc bằng ${m} độ.` : ''),
  );
</script>

<svg
  viewBox="0 0 {W} {H}"
  class="mx-auto block w-full max-w-sm select-none rounded-xl border border-slate-200 bg-white"
  role="img"
  aria-label={label}
>
  {#if protractor}
    <Protractor {o} r={R} side={settled ? side : null} font={10} />
  {/if}
  {#if settled && m === 90}
    <path d={rightMarkPath(o, first, second, 18)} fill="none" stroke="#059669" stroke-width="2.5" />
  {:else if m < 180}
    <path d={arcPath(o, first, second, 28)} fill="none" stroke="#B45309" stroke-width="2.5" />
  {/if}
  {#each rays as ray (ray.dir)}
    <line
      x1={o.x}
      y1={o.y}
      x2={ray.tip.x}
      y2={ray.tip.y}
      stroke="#1E293B"
      stroke-width="3.5"
      stroke-linecap="round"
    />
    <circle cx={ray.tip.x} cy={ray.tip.y} r="3" fill="#1E293B" />
    <text
      x={ray.at.x}
      y={ray.at.y}
      font-size="18"
      font-weight="700"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#1E293B">{ray.name}</text
    >
  {/each}
  <circle cx={o.x} cy={o.y} r="4.5" fill="#1E293B" />
  <text
    x={o.x}
    y={o.y + 18}
    font-size="18"
    font-weight="700"
    text-anchor="middle"
    dominant-baseline="middle"
    fill="#1E293B">{names[0]}</text
  >
  {#if settled && !protractor}
    {@const at = along(o, 52, (first + second) / 2)}
    <text
      x={at.x}
      y={at.y}
      font-size="15"
      font-weight="700"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#B45309">{m}°</text
    >
  {/if}
</svg>
