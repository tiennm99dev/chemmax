<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { MATERIALS, PRODUCTS, T_MAX, T_MIN, fire, glowColor } from './engine.js';

  /** @type {string[]} */
  let load = $state([]);
  let temperature = $state(1000);
  let result = $state(/** @type {import('./engine.js').Firing | null} */ (null));
  /** @type {string[]} */
  let found = $state([]);

  const loadedNames = $derived(
    MATERIALS.filter((m) => load.includes(m.id)).map((m) => m.name.toLowerCase()),
  );
  const productName = $derived(
    result?.product ? (PRODUCTS.find((p) => p.id === result?.product)?.name ?? '') : '',
  );
  const label = $derived(
    `Lò nung ở ${formatNumber(temperature)} °C, ` +
      (load.length ? `trong lò có ${loadedNames.join(', ')}.` : 'lò còn trống.') +
      (result ? (productName ? ` Ra lò: ${productName}.` : ' Ra lò: chưa được sản phẩm.') : ''),
  );

  /** @param {string} id */
  function toggle(id) {
    load = load.includes(id) ? load.filter((x) => x !== id) : [...load, id];
    result = null;
  }

  function burn() {
    result = fire(load, temperature);
    const p = result.product;
    if (p && !found.includes(p)) found = [...found, p];
  }

  function emptyKiln() {
    load = [];
    result = null;
  }
</script>

<div class="space-y-3">
  <div role="group" aria-label="Nguyên liệu cho vào lò" class="flex flex-wrap gap-1.5">
    {#each MATERIALS as m (m.id)}
      {@const on = load.includes(m.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 py-1.5 text-left text-sm {focusRing} {on
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
        aria-pressed={on}
        onclick={() => toggle(m.id)}
      >
        <span class="font-semibold">{m.name}</span>
        <span class="block text-xs text-slate-600"><LiveRichText text={m.formula} /></span>
      </button>
    {/each}
  </div>

  <SliderField
    label="Nhiệt độ lò"
    bind:value={temperature}
    min={T_MIN}
    max={T_MAX}
    step={50}
    format={(v) => `${formatNumber(v)} °C`}
    oninput={() => (result = null)}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={burn}>Nung</button>
    <button type="button" class={button.quiet} onclick={emptyKiln} disabled={load.length === 0}
      >Dỡ lò</button
    >
  </div>

  <svg viewBox="0 0 320 150" class="mx-auto w-full max-w-md" role="img" aria-label={label}>
    <rect x="40" y="20" width="240" height="110" rx="14" fill="#57534e" />
    <rect x="58" y="36" width="204" height="78" rx="8" fill={glowColor(temperature)} />
    <rect x="40" y="126" width="240" height="10" fill="#292524" />
    {#if result?.product}
      <text x="160" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#1c1917"
        >{productName}</text
      >
    {:else if load.length}
      <text x="160" y="80" text-anchor="middle" font-size="11" fill="#1c1917"
        >{loadedNames.join(' + ')}</text
      >
    {:else}
      <text x="160" y="80" text-anchor="middle" font-size="11" fill="#fafaf9">lò trống</text>
    {/if}
    <text x="160" y="14" text-anchor="middle" font-size="11" fill="#334155"
      >{formatNumber(temperature)} °C</text
    >
  </svg>

  <FeedbackNote
    tone={result ? result.tone : 'info'}
    text={result
      ? result.text
      : 'Chọn nguyên liệu, chỉnh nhiệt độ rồi bấm "Nung". Hãy tìm công thức và nhiệt độ cho cả năm sản phẩm.'}
  />

  <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-800">
      Đã tạo được {found.length}/{PRODUCTS.length} sản phẩm
    </p>
    <ul class="mt-1 flex flex-wrap gap-1.5">
      {#each PRODUCTS as p (p.id)}
        <li
          class="rounded-full px-3 py-1 text-xs font-semibold {found.includes(p.id)
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-slate-100 text-slate-500'}"
        >
          {found.includes(p.id) ? '✓ ' : ''}{p.name}
        </li>
      {/each}
    </ul>
  </div>
</div>
