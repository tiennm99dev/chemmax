<script>
  import { button } from '#lib/core/ui.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed } from '#lib/core/number-format.js';
  import { hiEquilibrium } from './engine.js';

  const MOST_ROWS = 5;

  let h2 = $state(1);
  let i2 = $state(1);
  let hi = $state(0);
  /** @type {Array<{ id: number, h2: number, i2: number, hi: number, eH2: number, eI2: number, eHi: number, k: number }>} */
  let rows = $state.raw([]);
  let next = 1;

  const canReact = $derived(hiEquilibrium(h2, i2, hi) !== null);
  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (!canReact) {
        return {
          tone: 'warn',
          text: 'Với nồng độ này, không có đủ chất để phản ứng theo chiều nào: cần cả $\\mathrm{H_2}$ và $\\mathrm{I_2}$, hoặc cần có $\\mathrm{HI}$.',
        };
      }
      if (new Set(rows.map((r) => `${r.h2};${r.i2};${r.hi}`)).size < 2) {
        return {
          tone: 'info',
          text: 'Chọn nồng độ ban đầu rồi bấm “Cho phản ứng”. Làm ít nhất hai lần với các nồng độ khác hẳn nhau.',
        };
      }
      return {
        tone: 'ok',
        text: 'Nồng độ lúc cân bằng khác nhau, nhưng $K_C$ luôn như nhau: $K_C$ không phụ thuộc nồng độ ban đầu, chỉ phụ thuộc nhiệt độ và bản chất phản ứng.',
      };
    },
  );

  function run() {
    const eq = hiEquilibrium(h2, i2, hi);
    if (!eq) return;
    rows = [
      {
        id: next++,
        h2,
        i2,
        hi,
        eH2: eq.h2,
        eI2: eq.i2,
        eHi: eq.hi,
        k: (eq.hi * eq.hi) / (eq.h2 * eq.i2),
      },
      ...rows,
    ].slice(0, MOST_ROWS);
  }

  /** @param {number} v */
  const conc = (v) => formatFixed(v, 3);
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
  <p class="font-semibold">Thí nghiệm ảo: H₂(g) + I₂(g) ⇌ 2HI(g) ở 445 °C</p>
  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField label="[H₂] ban đầu" bind:value={h2} min={0} max={1} step={0.1} unit="M" />
    <SliderField label="[I₂] ban đầu" bind:value={i2} min={0} max={1} step={0.1} unit="M" />
    <SliderField label="[HI] ban đầu" bind:value={hi} min={0} max={1} step={0.1} unit="M" />
  </div>
  <button type="button" class={button.primary} disabled={!canReact} onclick={run}>
    Cho phản ứng
  </button>
  {#if rows.length > 0}
    <div class="overflow-x-auto">
      <table class="w-full min-w-96 text-sm tabular-nums">
        <caption class="sr-only">Nồng độ lúc cân bằng và giá trị hằng số cân bằng</caption>
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-1 pr-2">Ban đầu (H₂; I₂; HI)</th>
            <th class="py-1 pr-2">[H₂]</th>
            <th class="py-1 pr-2">[I₂]</th>
            <th class="py-1 pr-2">[HI]</th>
            <th class="py-1">K<sub>C</sub></th>
          </tr>
        </thead>
        <tbody>
          {#each rows as r (r.id)}
            <tr class="border-b border-slate-100">
              <td class="py-1 pr-2">{conc(r.h2)}; {conc(r.i2)}; {conc(r.hi)}</td>
              <td class="py-1 pr-2">{conc(r.eH2)}</td>
              <td class="py-1 pr-2">{conc(r.eI2)}</td>
              <td class="py-1 pr-2">{conc(r.eHi)}</td>
              <td class="py-1 font-semibold">{Math.round(r.k)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
  <FeedbackNote tone={note.tone} text={note.text} />
</div>
