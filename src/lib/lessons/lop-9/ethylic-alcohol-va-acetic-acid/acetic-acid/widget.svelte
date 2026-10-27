<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { MOLAR_MASS, esterYield, esterify } from './engine.js';

  /** @typedef {import('./engine.js').Piece} Piece */

  /** @type {Piece | null} */
  let acidCut = $state(null);
  /** @type {Piece | null} */
  let alcoholCut = $state(null);
  let joined = $state(false);

  let acidCmol = $state(20);
  let alcoholCmol = $state(30);
  let yieldPercent = $state(60);

  const result = $derived(acidCut && alcoholCut ? esterify(acidCut, alcoholCut) : null);
  const calc = $derived(esterYield(acidCmol, alcoholCmol, yieldPercent));

  /**
   * @param {'acid' | 'alcohol'} who
   * @param {Piece} piece
   */
  function cut(who, piece) {
    joined = false;
    if (who === 'acid') acidCut = acidCut === piece ? null : piece;
    else alcoholCut = alcoholCut === piece ? null : piece;
  }

  function reset() {
    acidCut = null;
    alcoholCut = null;
    joined = false;
  }

  const LEAVING_NAMES = /** @type {Record<string, string>} */ ({
    H2O: 'H₂O (nước)',
    H2: 'H₂',
    H2O2: 'H₂O₂',
  });

  const tone = $derived(
    !joined || !result ? 'info' : result.status === 'ester' ? 'ok' : /** @type {const} */ ('warn'),
  );
  const note = $derived.by(() => {
    if (!acidCut || !alcoholCut)
      return 'Bấm vào một chỗ cắt (✂) trên phân tử acetic acid và một chỗ cắt trên phân tử ethylic alcohol: phần bị tách ra của hai phân tử phải ghép lại được thành nước.';
    if (!joined || !result)
      return `Acid tách nhóm –${acidCut}, alcohol tách –${alcoholCut}. Bấm “Ghép” để xem kết quả.`;
    if (result.status === 'ester')
      return 'Đúng! Nhóm –OH của acid kết hợp với nguyên tử H của nhóm –OH trong alcohol tạo thành nước; phần còn lại nối với nhau qua nguyên tử O, tạo ethyl acetate CH₃COOC₂H₅.';
    if (result.status === 'swapped')
      return 'Hai phần tách ra vẫn tạo được nước và ester có cùng công thức, nhưng thí nghiệm dùng nguyên tử oxygen đánh dấu cho thấy: acid mới là chất tách nhóm –OH, còn alcohol tách nguyên tử H. Hãy thử cắt lại.';
    return `Hai phần tách ra ghép thành ${LEAVING_NAMES[result.leaving]}, không phải nước. Trong phản ứng ester hoá, chất tách ra luôn là nước.`;
  });

  const cutClass = (/** @type {boolean} */ on) =>
    `inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 border-dashed text-lg transition ${
      on
        ? 'border-rose-500 bg-rose-50 text-rose-700'
        : 'border-slate-300 text-slate-500 hover:bg-slate-100'
    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`;
  const chip = 'rounded-lg px-2 py-1 font-semibold';
  const gone = 'opacity-40 line-through decoration-rose-500';
</script>

<div class="space-y-5">
  <div class="space-y-3">
    <div class="flex flex-wrap items-center gap-1" role="group" aria-label="Phân tử acetic acid">
      <span class="w-full text-sm font-semibold text-slate-600 sm:w-40">Acetic acid</span>
      <span class="{chip} bg-sky-100 text-sky-900">CH₃–C(=O)</span>
      <button
        type="button"
        class={cutClass(acidCut === 'OH')}
        aria-pressed={acidCut === 'OH'}
        aria-label="Cắt giữa C và O: acid tách nhóm OH"
        onclick={() => cut('acid', 'OH')}>✂</button
      >
      <span class="{chip} bg-sky-100 text-sky-900"
        ><span class={acidCut === 'OH' ? gone : ''}>–O</span></span
      >
      <button
        type="button"
        class={cutClass(acidCut === 'H')}
        aria-pressed={acidCut === 'H'}
        aria-label="Cắt giữa O và H: acid tách nguyên tử H"
        onclick={() => cut('acid', 'H')}>✂</button
      >
      <span class="{chip} bg-sky-100 text-sky-900"><span class={acidCut ? gone : ''}>–H</span></span
      >
    </div>

    <div
      class="flex flex-wrap items-center gap-1"
      role="group"
      aria-label="Phân tử ethylic alcohol"
    >
      <span class="w-full text-sm font-semibold text-slate-600 sm:w-40">Ethylic alcohol</span>
      <span class="{chip} bg-emerald-100 text-emerald-900"
        ><span class={alcoholCut ? gone : ''}>H–</span></span
      >
      <button
        type="button"
        class={cutClass(alcoholCut === 'H')}
        aria-pressed={alcoholCut === 'H'}
        aria-label="Cắt giữa H và O: alcohol tách nguyên tử H"
        onclick={() => cut('alcohol', 'H')}>✂</button
      >
      <span class="{chip} bg-emerald-100 text-emerald-900"
        ><span class={alcoholCut === 'OH' ? gone : ''}>O–</span></span
      >
      <button
        type="button"
        class={cutClass(alcoholCut === 'OH')}
        aria-pressed={alcoholCut === 'OH'}
        aria-label="Cắt giữa O và C: alcohol tách nhóm OH"
        onclick={() => cut('alcohol', 'OH')}>✂</button
      >
      <span class="{chip} bg-emerald-100 text-emerald-900">CH₂–CH₃</span>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        disabled={!acidCut || !alcoholCut || joined}
        onclick={() => (joined = true)}>Ghép</button
      >
      <button type="button" class={button.quiet} disabled={!acidCut && !alcoholCut} onclick={reset}
        >Làm lại</button
      >
    </div>
  </div>

  {#if joined && result}
    <div class="join space-y-2 rounded-xl bg-slate-50 p-3">
      {#if result.status === 'no-water'}
        <p class="text-lg">
          Phần tách ra: <span class="font-semibold text-rose-700"
            >{LEAVING_NAMES[result.leaving]}</span
          >
        </p>
      {:else}
        <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold">
          <span
            ><span class="text-sky-800">CH₃–C(=O)–</span><span
              class={result.status === 'ester' ? 'text-emerald-800' : 'text-sky-800'}>O</span
            ><span class="text-emerald-800">–CH₂–CH₃</span></span
          >
          <span>+</span>
          {#if result.status === 'ester'}
            <span
              ><span class="text-emerald-800">H</span><span class="text-sky-800">–O–H</span></span
            >
          {:else}
            <span
              ><span class="text-sky-800">H</span><span class="text-emerald-800">–O–H</span></span
            >
          {/if}
        </p>
        {#if result.status === 'ester'}
          <p class="text-base"><EquationLine text="CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O" /></p>
          <p class="text-sm text-slate-600">
            Điều kiện: H₂SO₄ đặc, đun nóng. Sản phẩm ethyl acetate là chất lỏng có mùi thơm, ít tan
            trong nước. Phản ứng thuận nghịch (⇌) nên không bao giờ đạt hiệu suất 100%.
          </p>
        {/if}
      {/if}
    </div>
  {/if}

  <FeedbackNote {tone} text={note} />

  <div class="space-y-3 rounded-xl border border-slate-200 p-3">
    <p class="text-sm font-semibold text-slate-700">Tính khối lượng ester thu được</p>
    <div class="grid gap-3 sm:grid-cols-3">
      <SliderField
        label="Acetic acid"
        bind:value={acidCmol}
        min={5}
        max={50}
        step={5}
        unit="mol"
        format={(v) => formatNumber(v / 100, 2)}
      />
      <SliderField
        label="Ethylic alcohol"
        bind:value={alcoholCmol}
        min={5}
        max={50}
        step={5}
        unit="mol"
        format={(v) => formatNumber(v / 100, 2)}
      />
      <SliderField
        label="Hiệu suất"
        bind:value={yieldPercent}
        min={10}
        max={100}
        step={5}
        unit="%"
      />
    </div>
    <p class="text-sm text-slate-700" aria-live="polite">
      Tỉ lệ mol 1 : 1, nên {calc.limiting === 'acid' && acidCmol !== alcoholCmol
        ? 'acetic acid hết trước'
        : calc.limiting === 'alcohol'
          ? 'ethylic alcohol hết trước'
          : 'hai chất vừa đủ'}: theo lí thuyết thu được {formatNumber(calc.theoreticalMol, 2)} mol ester.
      Với hiệu suất {yieldPercent}%: n = {formatNumber(calc.molEster, 4)} mol, m = {formatNumber(
        calc.molEster,
        4,
      )} × {MOLAR_MASS.ester} = <strong>{formatNumber(calc.massEster, 2)} g</strong> ethyl acetate.
    </p>
  </div>
</div>

<style>
  .join {
    animation: pop 0.5s ease-out both;
  }
  @keyframes pop {
    from {
      transform: scale(0.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .join {
      animation: none;
    }
  }
</style>
