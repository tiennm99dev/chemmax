<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import {
    FIRST,
    MAX_INDEX,
    MAX_VALENCE,
    ROMAN,
    evaluate,
    feedback,
    lowestIndexes,
    partnersOf,
  } from './engine.js';

  let first = $state('Al');
  let second = $state('O');
  let a = $state(1);
  let b = $state(1);
  let x = $state(1);
  let y = $state(1);
  let showHint = $state(false);

  const partners = $derived(partnersOf(first));
  const result = $derived(evaluate({ first, second, a, b, x, y }));
  const message = $derived(feedback(result, a, b));
  const valenceOptions = Array.from({ length: MAX_VALENCE }, (_, i) => ({
    value: i + 1,
    label: ROMAN[i + 1],
  }));
  const hintText = $derived.by(() => {
    if (result.status === 'valence-a' || result.status === 'valence-b') {
      return 'Trước hết chọn đúng hoá trị theo bảng hoá trị.';
    }
    const [hx, hy] = lowestIndexes(a, b);
    return `Theo quy tắc hoá trị: x : y = b : a = ${ROMAN[b]} : ${ROMAN[a]} = ${b} : ${a}, tối giản thành ${hx} : ${hy}.`;
  });

  function onFirstChange() {
    if (!partnersOf(first).some((p) => p.id === second)) second = partnersOf(first)[0].id;
    showHint = false;
  }

  /** @param {'x' | 'y'} which @param {number} delta */
  function bump(which, delta) {
    if (which === 'x') x = Math.max(1, Math.min(MAX_INDEX, x + delta));
    else y = Math.max(1, Math.min(MAX_INDEX, y + delta));
  }

  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 ${focusRing}`;
  const step = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
  const tone = $derived(
    result.status === 'ok'
      ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
      : 'border-amber-300 bg-amber-50 text-amber-900',
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <div class="space-y-2 rounded-xl bg-slate-50 p-3">
      <label class="block text-sm font-semibold text-slate-700">
        Nguyên tố A
        <select class={select} bind:value={first} onchange={onFirstChange}>
          {#each FIRST as p (p.id)}
            <option value={p.id}>{p.symbol} – {p.name}</option>
          {/each}
        </select>
      </label>
      <SegmentedControl label="Hoá trị a của A" options={valenceOptions} bind:value={a} />
    </div>
    <div class="space-y-2 rounded-xl bg-slate-50 p-3">
      <label class="block text-sm font-semibold text-slate-700">
        Nguyên tố hoặc nhóm nguyên tử B
        <select class={select} bind:value={second} onchange={() => (showHint = false)}>
          {#each partners as p (p.id)}
            <option value={p.id}>{p.symbol} – {p.name}</option>
          {/each}
        </select>
      </label>
      <SegmentedControl label="Hoá trị b của B" options={valenceOptions} bind:value={b} />
    </div>
  </div>

  <div class="flex flex-wrap items-center justify-center gap-4 rounded-xl bg-slate-50 p-3">
    {#each [{ k: /** @type {const} */ ('x'), v: x, of: result.A.symbol }, { k: /** @type {const} */ ('y'), v: y, of: result.B.symbol }] as idx (idx.k)}
      <div class="flex items-center gap-1">
        <span class="mr-1 text-sm text-slate-600">Chỉ số {idx.k} của {idx.of}</span>
        <button
          type="button"
          class={step}
          aria-label="Giảm chỉ số {idx.k}"
          disabled={idx.v <= 1}
          onclick={() => bump(idx.k, -1)}>−</button
        >
        <span class="w-6 text-center text-lg font-bold tabular-nums">{idx.v}</span>
        <button
          type="button"
          class={step}
          aria-label="Tăng chỉ số {idx.k}"
          disabled={idx.v >= MAX_INDEX}
          onclick={() => bump(idx.k, 1)}>+</button
        >
      </div>
    {/each}
  </div>

  <div class="space-y-3 rounded-xl border p-4 {tone}">
    <p class="text-center text-3xl font-bold">
      <ChemFormula formula={result.formula} />
    </p>
    <p class="text-center text-sm tabular-nums">
      a · x = {ROMAN[a]} × {x} = {result.rule.left}; b · y = {ROMAN[b]} × {y} = {result.rule.right}
    </p>
    <p class="text-sm" aria-live="polite">{message}</p>
    {#if result.status === 'ok' && result.mass !== null}
      <div class="space-y-2 text-sm">
        <p class="tabular-nums">
          Khối lượng phân tử: {result.percents
            .map((p) => `${p.count} × ${formatNumber(p.mass / p.count)}`)
            .join(' + ')} = {formatNumber(result.mass)} amu
        </p>
        <ul class="space-y-1">
          {#each result.percents as p (p.symbol)}
            <li>
              <div class="flex justify-between tabular-nums">
                <span
                  >%{p.symbol} = {formatNumber(p.mass)} : {formatNumber(result.mass)} × 100%</span
                >
                <span class="font-semibold">≈ {formatNumber(p.percent, 2)}%</span>
              </div>
              <div class="h-2 rounded bg-white" aria-hidden="true">
                <div class="h-2 rounded bg-emerald-500" style:width="{p.percent}%"></div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>

  <div class="space-y-2">
    <button type="button" class={button.quiet} onclick={() => (showHint = !showHint)}
      >{showHint ? 'Ẩn gợi ý' : 'Gợi ý'}</button
    >
    {#if showHint}
      <p class="text-sm text-slate-700">{hintText}</p>
    {/if}
  </div>
</div>
