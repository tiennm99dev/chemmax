<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { CUPS, burnTime, flameSize, oxygenShare, waterRise } from './engine.js';

  // The rising water and shrinking flame are the result being observed, so
  // they move even under prefers-reduced-motion; only the flicker stops.

  const CUP_OPTIONS = CUPS.map((v) => ({ value: v, label: `Cốc ${formatNumber(v)} mL` }));
  /** @type {Record<number, number>} */
  const CUP_WIDTH = { 250: 84, 500: 124, 1000: 180 };

  let volume = $state(CUPS[0]);
  let covered = $state(false);
  let since = $state(0);
  let now = $state(0);
  let reduced = $state(false);
  /** @type {Record<number, number>} */
  let results = $state({});

  const t = $derived(covered ? (now - since) / 1000 : 0);
  const flame = $derived(covered ? flameSize(volume, t) : 1);
  const out = $derived(flame === 0);
  const rise = $derived(covered ? waterRise(volume, t) : 0);
  const o2 = $derived(covered ? oxygenShare(volume, t) : 0.21);

  $effect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = mq.matches;
    const on = () => (reduced = mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  });

  // Runs while the candle burns: under the cup until it goes out, and always
  // for the flicker unless the reader prefers reduced motion.
  $effect(() => {
    if (out || (!covered && reduced)) return;
    let frame = 0;
    const tick = () => {
      now = performance.now();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });

  $effect(() => {
    if (out && results[volume] === undefined) {
      results = { ...results, [volume]: burnTime(volume) };
    }
  });

  function cover() {
    now = performance.now();
    since = now;
    covered = true;
  }
  function reset() {
    covered = false;
  }
  /** @param {string | number} v */
  function chooseCup(v) {
    volume = Number(v);
    covered = false;
  }

  // ---- drawing ----
  const RIM = 236;
  const TOP = 40;
  const SURFACE = 206;
  const AIR_H = SURFACE - TOP;
  const width = $derived(CUP_WIDTH[volume]);
  const cupX = $derived(160 - width / 2);
  const waterY = $derived(SURFACE - rise * AIR_H);
  const flicker = $derived(reduced ? 1 : 1 + 0.06 * Math.sin(now / 90));
  const fh = $derived(26 * flame * flicker);

  const status = $derived(
    !covered
      ? 'Nến đang cháy ngoài không khí.'
      : out
        ? `Nến đã tắt sau khoảng ${formatNumber(Math.round(burnTime(volume)))} giây. Nước dâng lên chiếm khoảng 1/5 thể tích không khí trong cốc: đó là phần oxygen đã bị dùng hết cho sự cháy.`
        : 'Nến đang cháy trong cốc úp, ngọn lửa nhỏ dần.',
  );
</script>

<div class="space-y-4">
  <SegmentedControl label="Chọn cốc" options={CUP_OPTIONS} value={volume} onchange={chooseCup} />

  <svg
    viewBox="0 0 320 260"
    class="block w-full max-w-md"
    role="img"
    aria-label="Cây nến đặt trong chậu nước{covered
      ? `, úp cốc ${formatNumber(volume)} mL lên trên`
      : ''}. {status}"
  >
    <!-- dish of water -->
    <path d="M20 196 L30 250 L290 250 L300 196" fill="none" stroke="#475569" stroke-width="2" />
    <rect x="24" y={SURFACE} width="272" height="42" fill="#bfdbfe" />
    {#if covered}
      <rect x={cupX} y={waterY} {width} height={SURFACE - waterY + 1} fill="#93c5fd" />
    {/if}
    <!-- candle -->
    <rect x="152" y="150" width="16" height="92" rx="2" fill="#fef3c7" stroke="#a16207" />
    <line x1="160" y1="150" x2="160" y2="143" stroke="#1f2937" stroke-width="2" />
    {#if flame > 0}
      <ellipse cx="160" cy={143 - fh / 2} rx={7 * flame} ry={fh / 2} fill="#f59e0b" opacity="0.9" />
      <ellipse cx="160" cy={143 - fh / 3} rx={3 * flame} ry={fh / 4} fill="#fde68a" />
    {:else}
      <path d="M160 140 q-6 -10 0 -20 q6 -10 0 -20" fill="none" stroke="#94a3b8" stroke-width="2" />
    {/if}
    {#if covered}
      <!-- upside-down cup with five equal parts -->
      <path
        d="M{cupX} {RIM} L{cupX} {TOP} L{cupX + width} {TOP} L{cupX + width} {RIM}"
        fill="rgba(226,232,240,0.25)"
        stroke="#334155"
        stroke-width="2.5"
      />
      {#each [1, 2, 3, 4] as k (k)}
        <line
          x1={cupX + width}
          x2={cupX + width - 12}
          y1={SURFACE - (k * AIR_H) / 5}
          y2={SURFACE - (k * AIR_H) / 5}
          stroke="#334155"
        />
        <text x={cupX + width + 4} y={SURFACE - (k * AIR_H) / 5 + 4} font-size="10" fill="#334155"
          >{k}/5</text
        >
      {/each}
    {/if}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={cover} disabled={covered}>
      Úp cốc lên nến
    </button>
    <button type="button" class={button.quiet} onclick={reset} disabled={!covered}>
      Nhấc cốc, thắp lại nến
    </button>
  </div>

  <dl class="grid grid-cols-2 gap-2 text-sm">
    <div class="rounded-lg bg-slate-100 px-3 py-2">
      <dt class="text-slate-600">Thời gian úp cốc</dt>
      <dd class="font-semibold tabular-nums">
        {formatNumber(Math.floor(Math.min(t, covered ? burnTime(volume) : 0) + 1e-9))} giây
      </dd>
    </div>
    <div class="rounded-lg bg-slate-100 px-3 py-2">
      <dt class="text-slate-600">Oxygen trong khí còn lại</dt>
      <dd class="font-semibold tabular-nums">khoảng {formatNumber(Math.round(o2 * 100))}%</dd>
    </div>
  </dl>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {status}
  </p>

  {#if Object.keys(results).length > 0}
    <table class="w-full text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">Kết quả em đã đo</caption>
      <thead>
        <tr class="text-left text-slate-600">
          <th class="py-1">Cốc</th>
          <th class="py-1">Nến cháy được</th>
          <th class="py-1">Nước dâng</th>
        </tr>
      </thead>
      <tbody>
        {#each CUPS.filter((v) => results[v] !== undefined) as v (v)}
          <tr class="border-t border-slate-200">
            <td class="py-1">{formatNumber(v)} mL</td>
            <td class="py-1">khoảng {formatNumber(Math.round(results[v]))} giây</td>
            <td class="py-1">khoảng 1/5 cốc</td>
          </tr>
        {/each}
      </tbody>
    </table>
    {#if Object.keys(results).length > 1}
      <p class="text-sm text-slate-700">
        Cốc càng to thì chứa càng nhiều không khí, tức càng nhiều oxygen, nên nến cháy càng lâu.
        Nhưng ở cốc nào, nước cũng dâng lên khoảng 1/5 cốc.
      </p>
    {/if}
  {/if}
</div>
