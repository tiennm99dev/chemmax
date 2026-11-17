<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { ACTIVITY_NAMES, METHODS, SOURCES, source, verdict } from './engine.js';

  /** @typedef {import('./engine.js').MethodId} MethodId */

  const metalOptions = SOURCES.map((s) => ({ value: s.id, label: s.id }));
  const ZONES = [
    {
      activity: 'strong',
      from: 0,
      to: 4,
      color: '#fee2e2',
      text: '#b91c1c',
      label: ['Điện phân', 'nóng chảy'],
    },
    {
      activity: 'middle',
      from: 5,
      to: 8,
      color: '#fef3c7',
      text: '#b45309',
      label: ['Nhiệt luyện,', 'điện phân dd'],
    },
    {
      activity: 'weak',
      from: 9,
      to: 11,
      color: '#dcfce7',
      text: '#15803d',
      label: ['Thuỷ luyện,', 'điện phân dd'],
    },
  ];
  const CELL = 28;
  const X0 = 12;

  let metalId = $state('Al');
  let picked = $state(/** @type {MethodId | null} */ (null));
  /** Metals answered with a suitable method on the first pick. @type {string[]} */
  let solved = $state([]);
  /** Metals already tried, right or wrong. @type {string[]} */
  let tried = $state([]);

  const s = $derived(source(metalId));
  const v = $derived(picked ? verdict(metalId, picked) : null);
  const way = $derived(picked ? s.ways[picked] : undefined);

  /** @param {MethodId} m */
  function pick(m) {
    picked = m;
    if (!tried.includes(metalId)) {
      tried = [...tried, metalId];
      if (verdict(metalId, m).ok) solved = [...solved, metalId];
    }
  }

  /** @param {string | number} next */
  function chooseMetal(next) {
    metalId = String(next);
    picked = null;
  }

  const note = $derived(
    v
      ? { tone: v.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'), text: v.text }
      : {
          tone: /** @type {const} */ ('info'),
          text: `${metalId} trong tự nhiên: ${s.found}. Em chọn phương pháp nào để tách ${metalId}?`,
        },
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Kim loại cần tách"
    options={metalOptions}
    bind:value={metalId}
    onchange={chooseMetal}
  />

  <svg
    viewBox="0 0 360 92"
    class="w-full max-w-xl"
    role="img"
    aria-label={`${metalId} là kim loại ${ACTIVITY_NAMES[s.activity]}. Từ K đến Al: điện phân nóng chảy; từ Zn đến Pb: nhiệt luyện, điện phân dung dịch; Cu, Ag, Au: thuỷ luyện, điện phân dung dịch, Cu còn dùng nhiệt luyện.`}
  >
    {#each ZONES as z (z.activity)}
      {@const x = X0 + z.from * CELL}
      {@const w = (z.to - z.from + 1) * CELL}
      <rect
        {x}
        y="32"
        width={w - 2}
        height="58"
        rx="6"
        fill={z.color}
        stroke={s.activity === z.activity && picked === null ? z.text : 'none'}
        stroke-width="2"
      />
      {#each z.label as line, k (k)}
        <text
          x={x + w / 2 - 1}
          y={75 + k * 10}
          text-anchor="middle"
          font-size="8.5"
          font-weight="700"
          fill={z.text}>{line}</text
        >
      {/each}
    {/each}
    {#each SOURCES as m, i (m.id)}
      {@const x = X0 + i * CELL + CELL / 2 - 1}
      <rect
        x={x - 11}
        y="42"
        width="22"
        height="22"
        rx="5"
        fill={m.id === metalId ? '#4f46e5' : '#fff'}
        stroke="#94a3b8"
      />
      <text
        {x}
        y="57"
        text-anchor="middle"
        font-size="10"
        font-weight="700"
        fill={m.id === metalId ? '#fff' : '#334155'}>{m.id}</text
      >
      {#if solved.includes(m.id)}
        <text {x} y="36" text-anchor="middle" font-size="9" fill="#15803d">✓</text>
      {/if}
    {/each}
    <text x="12" y="16" font-size="9" fill="#475569"
      >Tính khử của kim loại giảm dần, ion càng dễ bị khử →</text
    >
  </svg>

  <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Chọn phương pháp tách kim loại">
    {#each METHODS as m (m.id)}
      <button
        type="button"
        class={picked === m.id ? button.primary : button.quiet}
        aria-pressed={picked === m.id}
        onclick={() => pick(m.id)}>{m.name}</button
      >
    {/each}
  </div>

  {#if way}
    <div class="space-y-1 overflow-x-auto rounded-xl border border-slate-200 p-3 text-sm">
      <p class="font-semibold text-slate-700">Ví dụ ({way.condition}):</p>
      <EquationLine text={way.equation} />
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
  <p class="text-sm text-slate-600" aria-live="polite">
    Chọn đúng ngay lần đầu: {solved.length}/{tried.length} kim loại đã thử (trên {SOURCES.length}).
  </p>
</div>
