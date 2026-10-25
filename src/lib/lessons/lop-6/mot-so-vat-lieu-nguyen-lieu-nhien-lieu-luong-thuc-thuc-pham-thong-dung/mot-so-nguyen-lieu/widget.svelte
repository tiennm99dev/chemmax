<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CHAINS, canOpen, chain, judge } from './engine.js';

  /** @typedef {{ open: boolean[], right: boolean[], texts: string[] }} Progress */

  /** @returns {Record<string, Progress>} */
  function fresh() {
    return Object.fromEntries(
      CHAINS.map((c) => [c.id, { open: c.steps.map(() => false), right: [], texts: [] }]),
    );
  }

  let chainId = $state(CHAINS[0].id);
  let progress = $state(fresh());
  /** @type {number | null} step whose question is showing */
  let asking = $state(null);
  let message = $state('Bấm vào mũi tên đầu tiên để xem nguyên liệu được biến đổi thế nào.');

  const c = $derived(chain(chainId));
  const p = $derived(progress[chainId]);
  const allOpen = $derived(p.open.every(Boolean));
  const total = $derived(CHAINS.reduce((n, x) => n + x.steps.length, 0));
  const opened = $derived(
    Object.values(progress).reduce((n, x) => n + x.open.filter(Boolean).length, 0),
  );
  const correct = $derived(
    Object.values(progress).reduce((n, x) => n + x.right.filter(Boolean).length, 0),
  );

  const OPTIONS = CHAINS.map((x) => ({ value: x.id, label: x.label }));

  /** @param {string | number} v */
  function chooseChain(v) {
    chainId = String(v);
    asking = null;
    message = `${chain(chainId).source}. Bấm vào mũi tên để xem từng bước.`;
  }

  /** @param {number} i */
  function arrow(i) {
    if (!canOpen(p.open, i)) {
      message = 'Hãy mở bước trước đó trước.';
      return;
    }
    if (p.open[i]) {
      message = p.texts[i];
      asking = null;
      return;
    }
    asking = i;
    message = `Dự đoán: ${c.steps[i].question}`;
  }

  /** @param {number} i @param {number} choice */
  function answer(i, choice) {
    const r = judge(chainId, i, choice);
    const cur = progress[chainId];
    const open = [...cur.open];
    const right = [...cur.right];
    const texts = [...cur.texts];
    open[i] = true;
    right[i] = r.ok;
    texts[i] = r.text;
    progress = { ...progress, [chainId]: { open, right, texts } };
    asking = null;
    message = r.text;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn nguyên liệu"
    options={OPTIONS}
    value={chainId}
    onchange={chooseChain}
  />

  <p class="text-sm text-slate-600">Nguồn: {c.source}.</p>

  <ol class="flex flex-col items-stretch gap-1" aria-label="Sơ đồ {c.label}">
    {#each c.nodes as node, i (node)}
      <li
        class="rounded-xl border-2 px-4 py-3 text-center font-bold {i === 0 || p.open[i - 1]
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-dashed border-slate-300 bg-white text-slate-400'}"
      >
        {i === 0 || p.open[i - 1] ? node : '?'}
      </li>
      {#if i < c.steps.length}
        {@const can = canOpen(p.open, i)}
        <li class="flex flex-col items-center">
          <button
            type="button"
            class="flex min-h-11 w-full max-w-sm items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition {focusRing} {p
              .open[i]
              ? p.right[i]
                ? 'bg-emerald-50 text-emerald-800'
                : 'bg-amber-50 text-amber-800'
              : can
                ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                : 'bg-slate-50 text-slate-400'}"
            aria-expanded={asking === i || p.open[i]}
            aria-label={p.open[i]
              ? `Bước ${i + 1}: ${c.steps[i].process}. Bấm để đọc lại.`
              : can
                ? `Mở bước ${i + 1}: từ ${node} sang chất tiếp theo`
                : `Bước ${i + 1} đang khoá, mở bước trước trước`}
            onclick={() => arrow(i)}
          >
            <span aria-hidden="true" class="text-xl">↓</span>
            {p.open[i] ? c.steps[i].process : can ? 'Bấm để mở bước này' : 'Đang khoá'}
          </button>
          {#if asking === i}
            <div
              class="mt-2 w-full max-w-sm space-y-2 rounded-xl bg-white p-3 ring-1 ring-slate-200"
            >
              <p class="text-sm font-semibold text-slate-800">{c.steps[i].question}</p>
              {#each c.steps[i].options as opt, k (opt)}
                <button
                  type="button"
                  class="{button.quiet} w-full text-left"
                  onclick={() => answer(i, k)}
                >
                  {opt}
                </button>
              {/each}
            </div>
          {/if}
        </li>
      {/if}
    {/each}
  </ol>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  {#if allOpen}
    <p class="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
      <span class="font-semibold">Ứng dụng:</span>
      {c.use}
    </p>
  {/if}

  <div class="flex flex-wrap items-center gap-3 text-sm text-slate-700">
    <span>Đã mở {opened}/{total} bước, dự đoán đúng {correct}.</span>
    <button
      type="button"
      class={button.quiet}
      disabled={opened === 0}
      onclick={() => {
        progress = fresh();
        asking = null;
        message = 'Đã đóng lại mọi bước. Bấm vào mũi tên đầu tiên để bắt đầu.';
      }}
    >
      Làm lại
    </button>
  </div>
</div>
