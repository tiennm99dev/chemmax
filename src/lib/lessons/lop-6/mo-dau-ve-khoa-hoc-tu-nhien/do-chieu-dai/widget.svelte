<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import { parseNumber } from '#lib/units-engine/format.js';
  import { clientToSvg } from '#lib/utils/svg.js';
  import { RULERS, THINGS, aligned, apparentEnd, fmt, judge, marks } from './engine.js';

  const W = 360;
  const X0 = 24;

  const THING_OPTIONS = THINGS.map((t) => ({ value: t.id, label: t.name }));
  const RULER_OPTIONS = RULERS.map((r) => ({ value: r.id, label: r.name }));
  const EYES = [
    { value: 'trai', label: 'Nhìn chếch trái' },
    { value: 'vuong', label: 'Nhìn vuông góc' },
    { value: 'phai', label: 'Nhìn chếch phải' },
  ];

  let thingId = $state(THINGS[0].id);
  let rulerId = $state(RULERS[2].id);
  let eye = $state('trai');
  let offset = $state(-1.5);
  let typed = $state('');
  /** @type {{ ok: boolean, messages: string[] } | null} */
  let result = $state(null);

  const thing = $derived(THINGS.find((t) => t.id === thingId) ?? THINGS[0]);
  const ruler = $derived(RULERS.find((r) => r.id === rulerId) ?? RULERS[0]);
  const eyeKind = $derived(/** @type {import('./engine.js').Eye} */ (eye));

  /** px per cm in the main view: the object fills about 85% of the width. */
  const px = $derived((W - 2 * X0) / (thing.length * 1.15));
  const rulerX = $derived(X0 + offset * px);

  /** Smallest visible mark level in the main view. */
  const mainMarks = $derived.by(() => {
    const all = marks(ruler, -rulerX / px, (W - rulerX) / px);
    const tickPx = ruler.dcnn * px;
    const halfPx = (ruler.dcnn * ruler.labelEvery * px) / 2;
    return all.filter(
      (m) => m.kind === 'label' || (m.kind === 'half' && halfPx >= 4) || tickPx >= 4,
    );
  });
  /** Print every n-th label so numbers do not overlap. */
  const labelStride = $derived.by(() => {
    const gap = ruler.dcnn * ruler.labelEvery * px;
    return [1, 2, 5, 10, 20].find((n) => n * gap >= 22) ?? 50;
  });

  const seen = $derived(apparentEnd(thing.length, offset, eyeKind, ruler));
  const onRuler = $derived(seen >= 0 && seen <= ruler.ghd);
  const INSET_K = $derived(340 / (20 * ruler.dcnn));
  const insetMarks = $derived(marks(ruler, seen - 11 * ruler.dcnn, seen + 11 * ruler.dcnn));

  /** @param {number} o */
  function setOffset(o) {
    const limit = thing.length * 0.3 + 2;
    let next = Math.max(-limit, Math.min(limit, o));
    next = Math.abs(next) * px < 5 ? 0 : Math.round(next * 20) / 20;
    offset = next + 0;
    result = null;
  }

  /** @type {SVGSVGElement | undefined} */
  let svg = $state();
  /** @type {{ id: number, x: number, start: number } | null} */
  let drag = null;
  let focused = $state(false);

  /** @param {PointerEvent} e */
  function down(e) {
    if (!svg) return;
    /** @type {Element} */ (e.currentTarget).setPointerCapture(e.pointerId);
    drag = { id: e.pointerId, x: clientToSvg(svg, e.clientX, e.clientY, W, 130).x, start: offset };
  }
  /** @param {PointerEvent} e */
  function move(e) {
    if (!drag || drag.id !== e.pointerId || !svg) return;
    const x = clientToSvg(svg, e.clientX, e.clientY, W, 130).x;
    setOffset(drag.start + (x - drag.x) / px);
  }
  function up() {
    drag = null;
  }
  /** @param {KeyboardEvent} e */
  function key(e) {
    const step = ruler.dcnn * (e.shiftKey ? 10 : 1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setOffset(offset - step);
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setOffset(offset + step);
    else if (e.key === 'Home') setOffset(0);
    else return;
    e.preventDefault();
  }

  function record() {
    result = judge({ thing, ruler, offset, eye: eyeKind, value: parseNumber(typed) });
  }

  /** @param {string} id */
  function chooseThing(id) {
    thingId = id;
    offset = -1.5;
    typed = '';
    result = null;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Vật cần đo"
    options={THING_OPTIONS}
    value={thingId}
    onchange={(v) => chooseThing(String(v))}
  />
  <SegmentedControl
    label="Chọn thước"
    options={RULER_OPTIONS}
    bind:value={rulerId}
    onchange={() => (result = null)}
  />
  <p class="text-sm text-slate-600">
    {ruler.name}: GHĐ <strong>{fmt(ruler.ghd)} cm</strong>, ĐCNN
    <strong>{fmt(ruler.dcnn)} cm</strong>{ruler.dcnn === 0.1 ? ' (1 mm)' : ''}.
  </p>

  <svg bind:this={svg} viewBox="0 0 {W} 130" class="block w-full touch-none select-none">
    <!-- the object -->
    <rect
      x={X0}
      y="18"
      width={thing.length * px}
      height="28"
      rx="4"
      fill="#fde68a"
      stroke="#b45309"
    />
    <text x={X0 + 6} y="37" font-size="12" fill="#78350f">{thing.name}</text>
    <line x1={X0} y1="10" x2={X0} y2="50" stroke="#b45309" stroke-dasharray="3 2" />

    <!-- the ruler: drag it or use the arrow keys -->
    <g
      role="slider"
      tabindex="0"
      aria-label="Thước, kéo để đặt vạch số 0"
      aria-valuemin={-10}
      aria-valuemax={10}
      aria-valuenow={offset}
      aria-valuetext={aligned(offset)
        ? 'Vạch số 0 ngang bằng đầu vật'
        : `Vạch số 0 lệch ${fmt(Math.abs(offset))} cm so với đầu vật`}
      class="cursor-grab outline-none"
      onfocus={() => (focused = true)}
      onblur={() => (focused = false)}
      onpointerdown={down}
      onpointermove={move}
      onpointerup={up}
      onpointercancel={up}
      onkeydown={key}
    >
      <rect
        x={rulerX}
        y="52"
        width={ruler.ghd * px}
        height="40"
        fill={ruler.id === 'thuoc-day' ? '#fef9c3' : '#e0f2fe'}
        stroke={focused ? '#4f46e5' : '#0369a1'}
        stroke-width={focused ? 3 : 1}
      />
      {#each mainMarks as m (m.value)}
        {@const x = rulerX + m.value * px}
        <line
          x1={x}
          x2={x}
          y1="52"
          y2={52 + (m.kind === 'label' ? 16 : m.kind === 'half' ? 11 : 6)}
          stroke="#0f172a"
          stroke-width={m.kind === 'label' ? 1.2 : 0.6}
        />
        {#if m.kind === 'label' && Math.round(m.value / (ruler.dcnn * ruler.labelEvery)) % labelStride === 0}
          <text {x} y="82" font-size="10" text-anchor="middle" fill="#0f172a">{fmt(m.value)}</text>
        {/if}
      {/each}
    </g>
    <text x={W - 4} y="124" font-size="10" text-anchor="end" fill="#64748b">
      Kéo thước hoặc dùng phím ← →
    </text>
  </svg>

  <SegmentedControl
    label="Cách đặt mắt khi đọc"
    options={EYES}
    bind:value={eye}
    onchange={() => (result = null)}
  />

  <div class="rounded-xl border border-slate-200 bg-white p-2">
    <p class="px-2 text-xs font-semibold text-slate-600">Phóng to chỗ đầu kia của vật</p>
    <svg
      viewBox="0 0 360 100"
      class="block w-full"
      role="img"
      aria-label={onRuler
        ? 'Hình phóng to đầu kia của vật đặt trên thước'
        : 'Đầu kia của vật nằm ngoài thước'}
    >
      {#if onRuler}
        <rect
          x="0"
          y="40"
          width="360"
          height="50"
          fill={ruler.id === 'thuoc-day' ? '#fef9c3' : '#e0f2fe'}
        />
        {#each insetMarks as m (m.value)}
          {@const x = 180 + (m.value - seen) * INSET_K}
          <line
            x1={x}
            x2={x}
            y1="40"
            y2={40 + (m.kind === 'label' ? 24 : m.kind === 'half' ? 17 : 10)}
            stroke="#0f172a"
            stroke-width={m.kind === 'label' ? 1.6 : 1}
          />
          {#if m.kind === 'label'}
            <text {x} y="82" font-size="13" text-anchor="middle" fill="#0f172a">{fmt(m.value)}</text
            >
          {/if}
        {/each}
        <rect x="0" y="8" width="180" height="30" fill="#fde68a" stroke="#b45309" />
        <line
          x1="180"
          y1="4"
          x2="180"
          y2="92"
          stroke="#dc2626"
          stroke-width="1.5"
          stroke-dasharray="4 3"
        />
        {#if eye !== 'vuong'}
          <text x="356" y="24" font-size="11" text-anchor="end" fill="#b91c1c">mắt nhìn chếch!</text
          >
        {/if}
      {:else}
        <text x="180" y="55" font-size="13" text-anchor="middle" fill="#b91c1c">
          Đầu kia của vật nằm ngoài thước
        </text>
      {/if}
    </svg>
  </div>

  <form
    class="flex flex-wrap items-end gap-2"
    onsubmit={(e) => {
      e.preventDefault();
      record();
    }}
  >
    <label class="min-w-0 flex-1">
      <span class="mb-1 block text-sm font-semibold text-slate-700">Kết quả đo (cm)</span>
      <input class={textInput} inputmode="decimal" bind:value={typed} placeholder="ví dụ 12,5" />
    </label>
    <button type="submit" class={button.primary}>Ghi kết quả</button>
  </form>

  <div
    class="rounded-xl px-4 py-3 text-sm {result?.ok
      ? 'bg-emerald-50 text-emerald-900'
      : result
        ? 'bg-amber-50 text-amber-900'
        : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    {#if result}
      <ul class="list-disc space-y-1 pl-5">
        {#each result.messages as msg, i (i)}
          <li>{msg}</li>
        {/each}
      </ul>
    {:else}
      Chọn thước phù hợp, kéo thước cho vạch số 0 ngang bằng đầu vật, đặt mắt đúng cách rồi đọc và
      ghi kết quả.
    {/if}
  </div>
</div>
