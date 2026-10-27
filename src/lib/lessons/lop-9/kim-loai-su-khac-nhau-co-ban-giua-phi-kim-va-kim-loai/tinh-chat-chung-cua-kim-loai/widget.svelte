<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { METALS, REAGENTS, metal, outcome, reagent } from './engine.js';

  /** @typedef {import('./engine.js').MetalId} MetalId */
  /** @typedef {import('./engine.js').ReagentId} ReagentId */

  /** @type {MetalId} */
  let metalId = $state(/** @type {MetalId} */ ('Fe'));
  /** @type {ReagentId} */
  let reagentId = $state(/** @type {ReagentId} */ ('CuSO4'));
  let done = $state(false);
  /** @type {Record<string, boolean>} result of each experiment already run, by "metal reagent" */
  let tried = $state({});

  const m = $derived(metal(metalId));
  const r = $derived(reagent(reagentId));
  const o = $derived(outcome(metalId, reagentId));
  const isGasJar = $derived(reagentId === 'O2' || reagentId === 'Cl2');
  const startLiquid = $derived(reagentId === 'CuSO4' ? '#93c5fd' : '#e0f2fe');
  const liquid = $derived(done && o.solution ? o.solution : startLiquid);
  const count = $derived(Object.keys(tried).length);
  const total = METALS.length * REAGENTS.length;

  const METAL_OPTIONS = METALS.map((x) => ({ value: x.id, label: x.id }));
  const REAGENT_OPTIONS = REAGENTS.map((x) => ({ value: x.id, label: x.label }));

  const BUBBLES = Array.from({ length: 9 }, (_, i) => ({
    x: 82 + ((i * 37) % 36),
    y: 200 - ((i * 17) % 50),
    r: 2 + (i % 3),
  }));

  function run() {
    done = true;
    tried = { ...tried, [`${metalId} ${reagentId}`]: o.reacts };
  }

  function reset() {
    done = false;
  }

  /** @param {MetalId} mid @param {ReagentId} rid */
  function cell(mid, rid) {
    const v = tried[`${mid} ${rid}`];
    return v === undefined ? '' : v ? '✓' : '–';
  }

  /** @param {MetalId} mid @param {ReagentId} rid */
  function cellLabel(mid, rid) {
    const v = tried[`${mid} ${rid}`];
    const name = `${metal(mid).name} với ${reagent(rid).label}`;
    return v === undefined
      ? `${name}: chưa làm`
      : v
        ? `${name}: có phản ứng`
        : `${name}: không phản ứng`;
  }

  const tone = $derived(!done ? 'info' : o.reacts ? 'ok' : /** @type {const} */ ('warn'));
  const note = $derived(
    done
      ? `${o.seen} ${o.why}`
      : `Chuẩn bị: ${m.name} và ${r.label.toLowerCase()}${r.heated ? ' (đun nóng kim loại)' : ''}. Bấm “Tiến hành” để quan sát.`,
  );
  const pieceColor = $derived(
    done && o.residue ? o.residue : done && o.reacts && o.sign === 'none' ? '#94a3b8' : m.color,
  );
</script>

<div class="space-y-4">
  <div class="space-y-3">
    <SegmentedControl
      label="Kim loại"
      options={METAL_OPTIONS}
      bind:value={metalId}
      onchange={reset}
    />
    <SegmentedControl
      label="Cho kim loại tác dụng với"
      options={REAGENT_OPTIONS}
      bind:value={reagentId}
      onchange={reset}
    />
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,14rem)_1fr]">
    <svg
      viewBox="0 0 200 250"
      class="mx-auto block h-auto w-full max-w-56"
      role="img"
      aria-label={isGasJar
        ? `Bình đựng khí ${r.label.toLowerCase()}, muôi sắt chứa ${m.name}. ${done ? o.seen : 'Chưa tiến hành.'}`
        : `Ống nghiệm chứa ${r.label.toLowerCase()} và mẩu ${m.name}. ${done ? o.seen : 'Chưa tiến hành.'}`}
    >
      {#if isGasJar}
        <!-- gas jar -->
        <rect
          x="48"
          y="70"
          width="104"
          height="160"
          rx="10"
          fill={reagentId === 'Cl2' ? '#ecfccb' : '#f8fafc'}
          stroke="#334155"
          stroke-width="3"
        />
        <rect x="40" y="62" width="120" height="10" rx="3" fill="#64748b" />
        <!-- deflagrating spoon -->
        <line x1="100" y1="20" x2="100" y2="150" stroke="#334155" stroke-width="3" />
        <path d="M84 150 Q100 170 116 150 Z" fill="#475569" />
        <ellipse cx="100" cy="148" rx="11" ry="6" fill={pieceColor} stroke="#1e293b" />
        {#if done && o.sign === 'flame'}
          <path
            d="M100 104 C88 124 86 140 100 146 C114 140 112 124 100 104 Z"
            fill={o.flameColor}
            stroke="#f97316"
            class="flame"
          />
          {#each [0, 1, 2] as i (i)}
            <circle
              cx={74 + i * 26}
              cy={190 - (i % 2) * 14}
              r="9"
              fill={reagentId === 'Cl2' && o.residue ? o.residue : '#e5e7eb'}
              opacity="0.7"
              class="smoke"
            />
          {/each}
        {/if}
      {:else}
        <!-- test tube -->
        <path d="M72 110 L128 110 L128 210 A28 28 0 0 1 72 210 Z" fill={liquid} opacity="0.9" />
        <rect
          x={metalId === 'Na' && reagentId === 'H2O' && done ? 88 : 86}
          y={metalId === 'Na' ? 104 : 206}
          width="28"
          height="18"
          rx="3"
          fill={m.color}
          stroke="#1e293b"
        />
        {#if done && o.sign === 'coat'}
          <rect
            x={84}
            y={204}
            width="32"
            height="22"
            rx="4"
            fill="none"
            stroke={o.deposit}
            stroke-width="5"
            stroke-dasharray="3 2"
          />
        {/if}
        {#if done && o.sign === 'gas'}
          {#each BUBBLES as b, i (i)}
            <circle
              cx={b.x}
              cy={metalId === 'Na' ? b.y - 70 : b.y}
              r={b.r}
              fill="none"
              stroke="#0f172a"
              class="bubble"
              style:animation-delay="{(i % 3) * 0.4}s"
            />
          {/each}
        {/if}
        <path
          d="M68 80 L68 210 A32 32 0 0 0 132 210 L132 80"
          fill="none"
          stroke="#334155"
          stroke-width="3"
        />
        <line x1="62" x2="74" y1="80" y2="80" stroke="#334155" stroke-width="3" />
        <line x1="126" x2="138" y1="80" y2="80" stroke="#334155" stroke-width="3" />
      {/if}
    </svg>

    <div class="space-y-3">
      <p class="text-sm text-slate-600">{r.group}</p>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} disabled={done} onclick={run}>
          Tiến hành
        </button>
        <button type="button" class={button.quiet} disabled={!done} onclick={reset}>Làm lại</button>
      </div>
      <div class="min-h-12 rounded-xl bg-slate-50 p-3 text-base">
        {#if done && o.equation}
          <p class="mb-1 text-sm font-semibold text-slate-600">
            Phương trình hoá học{o.heated ? ' (đun nóng, t°)' : ''}
          </p>
          <EquationLine text={o.equation} />
        {:else if done}
          <p class="text-sm text-slate-700">Không có phản ứng hoá học xảy ra.</p>
        {:else}
          <p class="text-sm text-slate-500">Phương trình sẽ hiện ở đây khi có phản ứng.</p>
        {/if}
      </div>
    </div>
  </div>

  <FeedbackNote {tone} text={note} />

  <p id="ket-qua" class="text-sm font-semibold text-slate-700">
    Bảng kết quả: đã làm {count}/{total} thí nghiệm (✓ có phản ứng, – không phản ứng)
  </p>
  <div class="overflow-x-auto">
    <table
      aria-labelledby="ket-qua"
      class="w-full min-w-[22rem] border-collapse text-center text-sm"
    >
      <thead>
        <tr>
          <th scope="col" class="border border-slate-200 bg-slate-50 p-1">Kim loại</th>
          {#each REAGENTS as x (x.id)}
            <th scope="col" class="border border-slate-200 bg-slate-50 p-1 font-semibold"
              >{x.label}</th
            >
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each METALS as row (row.id)}
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">{row.id}</th>
            {#each REAGENTS as col (col.id)}
              <td
                class="border border-slate-200 p-1 font-semibold {tried[`${row.id} ${col.id}`]
                  ? 'text-emerald-700'
                  : 'text-slate-500'} {row.id === metalId && col.id === reagentId
                  ? 'bg-indigo-50'
                  : ''}"
                aria-label={cellLabel(row.id, col.id)}
              >
                {cell(row.id, col.id)}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .bubble {
    animation: rise 1.2s ease-in infinite;
  }
  .flame {
    transform-origin: 100px 146px;
    animation: flicker 0.5s ease-in-out infinite alternate;
  }
  .smoke {
    animation: drift 2s ease-out infinite;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-40px);
      opacity: 0;
    }
  }
  @keyframes flicker {
    from {
      transform: scaleY(0.9);
    }
    to {
      transform: scaleY(1.1);
    }
  }
  @keyframes drift {
    from {
      transform: translateY(0);
      opacity: 0.8;
    }
    to {
      transform: translateY(-30px);
      opacity: 0.2;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bubble,
    .flame,
    .smoke {
      animation: none;
    }
  }
</style>
