<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    LAYERS,
    MAX_COLOR,
    MAX_TURBIDITY,
    START_COLOR,
    START_ORDER,
    START_TURBIDITY,
    cloudiness,
    kindOf,
    moveLayer,
    pour,
  } from './engine.js';

  /** Fill of each kind of layer in the bottle drawing. */
  const FILL = { cat: '#fde68a', than: '#1f2937', soi: '#a8a29e', bong: '#f8fafc' };
  const LAYER_H = 26;
  /** Top of the beaker under the bottle. */
  const top = 70 + LAYERS.length * LAYER_H;

  let order = $state([...START_ORDER]);
  /** @type {string[]} */
  let removed = $state([]);
  let alum = $state(false);
  let chlorine = $state(false);
  let result = $state(/** @type {import('./engine.js').FilterResult | null} */ (null));

  const inBottle = $derived(order.filter((id) => !removed.includes(id)));
  /** @param {string} id */
  const nameOf = (id) => LAYERS.find((l) => l.id === id)?.name ?? id;

  const water = $derived(result ?? { turbidity: START_TURBIDITY, color: START_COLOR });
  const label = $derived(
    `Chai lọc, từ trên xuống: ${inBottle.length ? inBottle.map(nameOf).join(', ') : 'không có lớp nào'}. ` +
      (result
        ? `Nước lọc có độ đục ${formatNumber(result.turbidity, 1)} NTU, độ màu ${formatNumber(result.color, 0)} TCU.`
        : 'Chưa đổ nước.'),
  );
  const verdict = $derived.by(() => {
    if (!result) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Sắp xếp các lớp, chọn có dùng phèn và chlorine hay không, rồi bấm "Đổ nước đục".',
      };
    }
    if (result.safe) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đạt: độ đục ${formatNumber(result.turbidity, 1)} NTU (giới hạn ${MAX_TURBIDITY} NTU), độ màu ${formatNumber(result.color, 0)} TCU (giới hạn ${MAX_COLOR} TCU) và đã khử trùng.`,
      };
    }
    const why = [];
    if (result.turbidity > MAX_TURBIDITY)
      why.push(`còn đục ${formatNumber(result.turbidity, 1)} NTU`);
    if (result.color > MAX_COLOR) why.push(`còn màu ${formatNumber(result.color, 0)} TCU`);
    if (result.germs) why.push('chưa diệt khuẩn');
    return { tone: /** @type {const} */ ('warn'), text: `Chưa đạt: ${why.join(', ')}.` };
  });

  /** @type {HTMLOListElement | undefined} */
  let list = $state();
  let moved = $state('');

  /**
   * Move a layer and keep keyboard focus on the arrow that was pressed (or the
   * other arrow once the layer reaches the top or the bottom), since the keyed
   * list moves the button in the DOM and the browser drops its focus.
   * @param {string} id @param {-1 | 1} step
   */
  async function move(id, step) {
    order = moveLayer(order, id, step);
    result = null;
    moved = `Lớp ${nameOf(id).toLowerCase()} giờ ở vị trí thứ ${order.indexOf(id) + 1} từ trên xuống.`;
    await tick();
    /** @param {number} s */
    const at = (s) =>
      list?.querySelector(`button[data-layer="${id}"][data-step="${s}"]:not(:disabled)`);
    const target = at(step) ?? at(-step);
    if (target instanceof HTMLButtonElement) target.focus();
  }

  /** @param {string} id */
  function toggle(id) {
    removed = removed.includes(id) ? removed.filter((x) => x !== id) : [...removed, id];
    result = null;
  }

  function run() {
    result = pour({ order: inBottle, alum, chlorine });
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
    <ol bind:this={list} class="space-y-1.5" aria-label="Các lớp trong chai, từ trên xuống">
      {#each order as id, i (id)}
        {@const off = removed.includes(id)}
        <li
          class="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-1.5 text-sm {off
            ? 'opacity-60'
            : ''}"
        >
          <span
            class="h-5 w-5 shrink-0 rounded border border-slate-400"
            style="background: {FILL[kindOf(id)]}"
            aria-hidden="true"
          ></span>
          <span class="min-w-0 flex-1 font-semibold text-slate-800"
            >{nameOf(id)}{off ? ' (đã bỏ ra)' : ''}</span
          >
          <button
            type="button"
            class="min-h-11 min-w-11 rounded-lg border border-slate-300 bg-white {focusRing} disabled:opacity-40"
            aria-label="Đưa lớp {nameOf(id).toLowerCase()} (thứ {i + 1} từ trên) lên trên"
            data-layer={id}
            data-step="-1"
            disabled={i === 0}
            onclick={() => move(id, -1)}>↑</button
          >
          <button
            type="button"
            class="min-h-11 min-w-11 rounded-lg border border-slate-300 bg-white {focusRing} disabled:opacity-40"
            aria-label="Đưa lớp {nameOf(id).toLowerCase()} (thứ {i + 1} từ trên) xuống dưới"
            data-layer={id}
            data-step="1"
            disabled={i === order.length - 1}
            onclick={() => move(id, 1)}>↓</button
          >
          <button
            type="button"
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-2 text-xs {focusRing}"
            aria-label="{off ? 'Thêm' : 'Bỏ'} lớp {nameOf(id).toLowerCase()} (thứ {i + 1} từ trên)"
            onclick={() => toggle(id)}>{off ? 'Thêm' : 'Bỏ'}</button
          >
        </li>
      {/each}
    </ol>
    <p class="sr-only" aria-live="polite">{moved}</p>

    <svg
      viewBox="0 0 160 {60 + LAYERS.length * LAYER_H + 90}"
      class="mx-auto w-full max-w-[13rem]"
      role="img"
      aria-label={label}
    >
      <rect x="30" y="10" width="100" height="40" rx="6" fill="#a16207" fill-opacity="0.55" />
      <text x="80" y="34" text-anchor="middle" font-size="10" fill="#1c1917">nước sông đục</text>
      <rect
        x="30"
        y="54"
        width="100"
        height={LAYERS.length * LAYER_H + 4}
        fill="none"
        stroke="#64748b"
        stroke-width="2"
      />
      {#each inBottle as id, i (id)}
        <rect
          x="32"
          y={56 + i * LAYER_H}
          width="96"
          height={LAYER_H}
          fill={FILL[kindOf(id)]}
          stroke="#cbd5e1"
        />
        <text
          x="80"
          y={56 + i * LAYER_H + 17}
          text-anchor="middle"
          font-size="10"
          fill={kindOf(id) === 'than' ? '#f8fafc' : '#1e293b'}>{nameOf(id)}</text
        >
      {/each}
      {#each [44, 64, 80, 96, 116] as x (x)}
        <circle cx={x} cy={58 + LAYERS.length * LAYER_H} r="2" fill="#64748b" />
      {/each}
      <path
        d="M 45 {top} L 45 {top + 70} Q 45 {top + 76} 51 {top + 76} L 109 {top + 76} Q 115 {top +
          76} 115 {top + 70} L 115 {top}"
        fill="none"
        stroke="#475569"
        stroke-width="2"
      />
      {#if result}
        <rect x="47" y={top + 24} width="66" height="50" fill="#bfdbfe" fill-opacity="0.6" />
        <rect
          x="47"
          y={top + 24}
          width="66"
          height="50"
          fill="#92400e"
          fill-opacity={cloudiness(water.turbidity)}
        />
        <rect
          x="47"
          y={top + 24}
          width="66"
          height="50"
          fill="#ca8a04"
          fill-opacity={Math.min(0.5, water.color / 120)}
        />
      {/if}
      <text x="80" y={top + 90} text-anchor="middle" font-size="10" fill="#334155"
        >cốc hứng nước lọc</text
      >
    </svg>
  </div>

  <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-800">
    <label class="flex min-h-11 items-center gap-2">
      <input
        type="checkbox"
        class="h-5 w-5 {focusRing}"
        bind:checked={alum}
        onchange={() => (result = null)}
      />
      Cho phèn, khuấy, để lắng trước khi lọc
    </label>
    <label class="flex min-h-11 items-center gap-2">
      <input
        type="checkbox"
        class="h-5 w-5 {focusRing}"
        bind:checked={chlorine}
        onchange={() => (result = null)}
      />
      Khử trùng nước lọc bằng chlorine
    </label>
  </div>

  <button type="button" class={button.primary} onclick={run}>Đổ nước đục</button>

  {#if result}
    <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
      <p class="font-semibold text-slate-800">
        Độ đục: {START_TURBIDITY} → {formatNumber(result.turbidity, 1)} NTU · Độ màu: {START_COLOR} →
        {formatNumber(result.color, 0)} TCU
      </p>
      <ul class="mt-1 list-disc space-y-0.5 pl-5 text-slate-700">
        {#each result.notes as note, i (i)}
          <li><LiveRichText text={note} /></li>
        {/each}
      </ul>
    </div>
  {/if}

  <FeedbackNote tone={verdict.tone} text={verdict.text} />
</div>
