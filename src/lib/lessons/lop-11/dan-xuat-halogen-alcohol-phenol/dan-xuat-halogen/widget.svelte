<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { HALIDES, betaCarbons, carbonOrder, eliminate, substitute } from './engine.js';

  /** @typedef {{ key: string, route: string, text: string, name: string, kind: 'main' | 'minor' | 'only' }} Found */

  const HALIDE_OPTIONS = HALIDES.map((h) => ({ value: h.id, label: h.name }));
  const ROUTE_OPTIONS = [
    { value: 'sub', label: 'NaOH, H₂O, t° (thế)' },
    { value: 'elim', label: 'KOH, C₂H₅OH, t° (tách)' },
  ];
  const KIND_TEXT = { main: 'sản phẩm chính', minor: 'sản phẩm phụ', only: 'sản phẩm duy nhất' };
  const ORDER = ['0', 'I', 'II', 'III', 'IV'];

  let halideId = $state(HALIDES[2].id);
  let route = $state('sub');
  let from = $state(/** @type {number | null} */ (null));
  let found = $state(/** @type {Found[]} */ ([]));

  const halide = $derived(HALIDES.find((h) => h.id === halideId) ?? HALIDES[0]);
  const betas = $derived(betaCarbons(halide));
  const sub = $derived(substitute(halide));
  const elim = $derived(route === 'elim' && from !== null ? eliminate(halide, from) : null);

  /** @param {import('./engine.js').Carbon} c */
  const carbonText = (c) =>
    `C${c.h === 0 ? '' : c.h === 1 ? 'H' : `H${c.h}`}${c.branch ? `(${c.branch})` : ''}`;

  /** @param {Found} f */
  function remember(f) {
    if (!found.some((g) => g.key === f.key)) found = [...found, f];
  }

  let seenSub = $state(true);
  const shown = $derived(
    seenSub
      ? [
          {
            key: `sub:${sub.name}`,
            route: 'Thế',
            text: sub.text,
            name: sub.name,
            kind: /** @type {'only'} */ ('only'),
          },
          ...found,
        ]
      : found,
  );

  function resetHalide() {
    from = null;
    found = [];
    seenSub = route === 'sub';
  }

  /** @param {string | number} value */
  function changeRoute(value) {
    from = null;
    if (value === 'sub') seenSub = true;
  }

  /** @param {number} i */
  function pick(i) {
    from = i;
    const p = eliminate(halide, i);
    remember({ key: `elim:${p.name}`, route: 'Tách', text: p.text, name: p.name, kind: p.kind });
  }

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (route === 'sub') {
        return {
          tone: 'ok',
          text: `Trong dung dịch NaOH loãng, đun nóng, nhóm OH thay thế nguyên tử ${halide.x}: phản ứng thế tạo alcohol ${sub.name}. Mạch carbon giữ nguyên, không có liên kết đôi.`,
        };
      }
      if (from === null || !elim) {
        return {
          tone: 'info',
          text: `Trong KOH/ethanol, đun nóng, ${halide.x} tách ra cùng một H ở carbon bên cạnh. Bấm vào một carbon bên cạnh carbon mang ${halide.x} để tách H ở đó.`,
        };
      }
      const order = ORDER[carbonOrder(halide.chain, from)];
      if (elim.kind === 'only') {
        return {
          tone: 'ok',
          text: `Tách H ở carbon nào bên cạnh cũng cho cùng một chất: ${elim.name}.`,
        };
      }
      if (elim.kind === 'main') {
        return {
          tone: 'ok',
          text: `H tách ở carbon bậc ${order}, bậc cao hơn. Theo quy tắc Zaitsev đây là sản phẩm chính: ${elim.name}.`,
        };
      }
      return {
        tone: 'warn',
        text: `H tách ở carbon bậc ${order}, bậc thấp hơn, nên ${elim.name} chỉ là sản phẩm phụ. Thử tách H ở carbon bên cạnh còn lại.`,
      };
    },
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Dẫn xuất halogen"
    options={HALIDE_OPTIONS}
    bind:value={halideId}
    onchange={resetHalide}
  />
  <SegmentedControl
    label="Điều kiện phản ứng"
    options={ROUTE_OPTIONS}
    bind:value={route}
    onchange={changeRoute}
  />

  <div class="rounded-xl bg-slate-50 px-2 py-4">
    <div class="flex flex-wrap items-end justify-center gap-y-3 text-lg">
      {#each halide.chain as c, i (i)}
        {#if i > 0}
          {@const isNewDouble =
            elim !== null && from !== null && i - 1 === Math.min(from, halide.at)}
          <span
            class="mb-3 px-1 font-bold {isNewDouble ? 'text-emerald-700' : 'text-slate-500'}"
            aria-hidden="true">{isNewDouble ? '=' : '–'}</span
          >
        {/if}
        <div class="flex flex-col items-center gap-1">
          <span class="h-7 text-base font-bold" aria-hidden="true">
            {#if i === halide.at}
              {#if route === 'sub'}
                <span class="pop inline-block rounded bg-sky-100 px-2 text-sky-800"
                  >−{halide.x} +OH</span
                >
              {:else}
                <span class="inline-block rounded bg-rose-100 px-2 text-rose-800"
                  >{from === null ? halide.x : `−${halide.x}`}</span
                >
              {/if}
            {:else if route === 'elim' && from === i}
              <span class="pop inline-block rounded bg-amber-100 px-2 text-amber-800">−H</span>
            {/if}
          </span>
          {#if route === 'elim' && betas.includes(i)}
            <button
              type="button"
              class="min-h-12 min-w-14 rounded-lg border-2 px-2 py-1 font-semibold {from === i
                ? 'border-amber-600 bg-amber-50'
                : 'border-indigo-400 bg-white hover:bg-indigo-50'} {focusRing}"
              aria-pressed={from === i}
              aria-label="Tách H ở carbon số {i + 1}, {prettyFormula(
                carbonText(c),
              )}, carbon bậc {ORDER[carbonOrder(halide.chain, i)]}"
              onclick={() => pick(i)}
            >
              <ChemFormula formula={carbonText(c)} />
            </button>
          {:else}
            <span
              class="min-h-12 rounded-lg px-2 py-2 font-semibold {i === halide.at
                ? 'bg-rose-50 text-rose-900'
                : 'text-slate-700'}"
            >
              <ChemFormula formula={carbonText(c)} />
            </span>
          {/if}
          <span class="text-xs text-slate-600">bậc {ORDER[carbonOrder(halide.chain, i)]}</span>
        </div>
      {/each}
    </div>
  </div>

  {#if route === 'sub'}
    <div class="space-y-1 rounded-xl border border-sky-200 p-3">
      <p class="text-sm font-semibold text-sky-800">Phản ứng thế (NaOH, H₂O, t°)</p>
      <p class="text-lg"><EquationLine text={sub.equation} /></p>
    </div>
  {:else if elim}
    <div class="space-y-1 rounded-xl border border-amber-200 p-3">
      <p class="text-sm font-semibold text-amber-800">
        Phản ứng tách (KOH, C₂H₅OH, t°): {KIND_TEXT[elim.kind]}
      </p>
      <p class="text-lg"><EquationLine text={elim.equation} /></p>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if shown.length > 0}
    <div class="flex flex-wrap items-center gap-2">
      <ul class="flex-1 space-y-1 text-sm" aria-label="Các sản phẩm đã tạo từ {halide.name}">
        {#each shown as f (f.key)}
          <li>
            <span class="font-semibold">{f.route}:</span>
            <ChemFormula formula={f.text} />, {f.name}
            <span class="font-semibold {f.kind === 'minor' ? 'text-amber-700' : 'text-emerald-700'}"
              >({KIND_TEXT[f.kind]})</span
            >
          </li>
        {/each}
      </ul>
      <button type="button" class={button.quiet} onclick={resetHalide}>Làm lại</button>
    </div>
  {/if}
</div>

<style>
  .pop {
    animation: pop 0.4s ease-out;
  }
  @keyframes pop {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .pop {
      animation: none;
    }
  }
</style>
