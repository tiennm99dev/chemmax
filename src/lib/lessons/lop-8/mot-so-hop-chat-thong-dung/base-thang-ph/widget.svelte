<script>
  import PhScale from '#lib/domain/ph-scale.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, card, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { litmus, phenolphthalein, universalColor } from '#lib/domain/ph.js';
  import { SAMPLES, judge } from './engine.js';

  let guess = $state(7);
  /** @type {string | null} */
  let current = $state(SAMPLES[0].name);
  /** @type {string[]} */
  let placed = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Chọn một dung dịch, kéo vạch trên thang pH đến chỗ em nghĩ là pH của nó, rồi bấm “Đặt vào thang”.',
  });

  const sample = $derived(SAMPLES.find((s) => s.name === current) ?? null);
  const waiting = $derived(SAMPLES.filter((s) => !placed.includes(s.name)));
  const onScale = $derived(
    SAMPLES.filter((s) => placed.includes(s.name)).sort((a, b) => a.ph - b.ph),
  );

  function place() {
    if (!sample) return;
    const v = judge(sample, guess);
    if (v.ok) {
      placed = [...placed, sample.name];
      const next = SAMPLES.find((s) => !placed.includes(s.name));
      current = next ? next.name : null;
      note = {
        tone: 'ok',
        text: `Đúng! ${v.text}${next ? '' : ' Em đã xếp xong mọi dung dịch.'}`,
      };
    } else {
      note = { tone: 'warn', text: v.text };
    }
  }

  function reset() {
    placed = [];
    current = SAMPLES[0].name;
    guess = 7;
    note = { tone: 'info', text: 'Đã làm lại từ đầu. Chọn một dung dịch để đặt.' };
  }
</script>

<div class="space-y-4">
  <div class="{card} p-3">
    <p class="mb-2 text-sm font-semibold text-slate-700">Dung dịch chưa đặt ({waiting.length})</p>
    {#if waiting.length === 0}
      <p class="text-sm text-slate-500">Đã đặt hết. Bấm “Làm lại” để chơi lại.</p>
    {:else}
      <ul class="flex flex-wrap gap-2">
        {#each waiting as s (s.name)}
          <li>
            <button
              type="button"
              aria-pressed={current === s.name}
              class="min-h-11 rounded-lg border px-3 py-2 text-sm font-medium {focusRing} {current ===
              s.name
                ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
              onclick={() => (current = s.name)}
            >
              {s.name}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <PhScale
    bind:ph={guess}
    substances={false}
    step={0.1}
    label="Vị trí đặt dung dịch trên thang pH"
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={!sample} onclick={place}>
      Đặt {sample ? sample.name.toLowerCase() : ''} vào thang
    </button>
    <button type="button" class={button.quiet} disabled={placed.length === 0} onclick={reset}>
      Làm lại
    </button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if onScale.length}
    <div class="{card} overflow-x-auto p-3">
      <table class="w-full text-left text-sm">
        <caption class="mb-2 text-left font-semibold text-slate-700">
          Các dung dịch đã đặt, xếp theo pH tăng dần
        </caption>
        <thead class="text-slate-500">
          <tr>
            <th class="py-1 pr-2 font-medium">Dung dịch</th>
            <th class="py-1 pr-2 font-medium">pH</th>
            <th class="py-1 pr-2 font-medium">Quỳ tím</th>
            <th class="py-1 font-medium">Phenolphthalein</th>
          </tr>
        </thead>
        <tbody>
          {#each onScale as s (s.name)}
            {@const paper = litmus(s.ph)}
            {@const phth = phenolphthalein(s.ph)}
            <tr class="border-t border-slate-100">
              <td class="py-1.5 pr-2">{s.name}</td>
              <td class="py-1.5 pr-2">
                <span
                  class="inline-block rounded px-2 py-0.5 font-semibold text-white tabular-nums"
                  style:background-color={universalColor(s.ph)}
                  style:text-shadow="0 1px 2px rgb(0 0 0 / 0.5)">{formatNumber(s.ph, 2)}</span
                >
              </td>
              <td class="py-1.5 pr-2">
                <span class="flex items-center gap-1.5">
                  <span
                    class="inline-block h-3 w-6 rounded-sm border border-black/10"
                    style:background-color={paper.color}
                  ></span>
                  {paper.name}
                </span>
              </td>
              <td class="py-1.5">
                <span class="flex items-center gap-1.5">
                  <span
                    class="inline-block h-3 w-6 rounded-sm border border-black/20"
                    style:background-color={phth.color}
                  ></span>
                  {phth.name}
                </span>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
