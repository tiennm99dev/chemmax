<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import MoleculeViewer from '#lib/domain/molecule-viewer.svelte';
  import { atomColor } from '#lib/domain/molecule.js';
  import { element } from '#lib/domain/elements.js';
  import {
    KIT,
    MAX_EACH,
    TARGETS,
    classify,
    formulaOf,
    knownMolecule,
    massBreakdown,
    matchesTarget,
    present,
    targetHint,
    totalAtoms,
  } from './engine.js';

  /** @type {Record<string, number>} */
  let counts = $state({ H: 0, C: 0, N: 0, O: 0, S: 0, Cl: 0 });
  let goal = $state(0);

  const formula = $derived(formulaOf(counts));
  const kind = $derived(classify(counts));
  const mass = $derived(massBreakdown(counts));
  const known = $derived(knownMolecule(counts));
  const atoms = $derived(present(counts).flatMap(([s, n]) => Array.from({ length: n }, () => s)));
  const target = $derived(TARGETS[goal]);
  const solved = $derived(matchesTarget(target, counts));
  const hint = $derived(targetHint(target, counts));

  /** @param {string} symbol @param {number} delta */
  function change(symbol, delta) {
    counts[symbol] = Math.max(0, Math.min(MAX_EACH, counts[symbol] + delta));
  }

  function clear() {
    for (const s of KIT) counts[s] = 0;
  }

  function nextGoal() {
    goal = (goal + 1) % TARGETS.length;
    clear();
  }

  const massText = $derived(
    mass.terms.length === 0
      ? ''
      : `${mass.terms.map((t) => `${t.n} × ${formatNumber(t.mass)}`).join(' + ')} = ${formatNumber(mass.total)} amu`,
  );

  const kindText = $derived(
    kind === null
      ? 'Chưa có nguyên tử nào.'
      : kind === 'don-chat'
        ? `Đơn chất: mọi nguyên tử đều thuộc một nguyên tố (${present(counts)[0][0]}).`
        : `Hợp chất: được tạo nên từ ${present(counts).length} nguyên tố (${present(counts)
            .map(([s]) => s)
            .join(', ')}).`,
  );

  /** Balls laid out in rows when the kit has no shape for the counts. */
  const COLS = 6;
  const pile = $derived(
    atoms.map((s, i) => ({
      s,
      x: 40 + (i % COLS) * 56,
      y: 36 + Math.floor(i / COLS) * 56,
    })),
  );
  const pileHeight = $derived(Math.max(1, Math.ceil(atoms.length / COLS)) * 56 + 16);

  const step = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-2 sm:grid-cols-2">
    {#each KIT as s (s)}
      <div class="flex items-center justify-between gap-1 rounded-xl bg-slate-50 px-2 py-2">
        <span class="flex items-center gap-2">
          <svg viewBox="0 0 28 28" class="size-7 shrink-0" aria-hidden="true">
            <circle
              cx="14"
              cy="14"
              r="12"
              fill={atomColor(s)}
              stroke="#0f172a"
              stroke-width="1.5"
            />
          </svg>
          <span class="text-sm leading-tight">
            <span class="font-semibold">{s}</span>
            <span class="block text-xs text-slate-500">{element(s)?.name}</span>
          </span>
        </span>
        <span class="flex items-center gap-1">
          <button
            type="button"
            class={step}
            aria-label="Bớt một nguyên tử {s}"
            disabled={counts[s] <= 0}
            onclick={() => change(s, -1)}>−</button
          >
          <span class="w-5 text-center font-bold tabular-nums">
            <span class="sr-only">Số nguyên tử {s}:</span>{counts[s]}
          </span>
          <button
            type="button"
            class={step}
            aria-label="Thêm một nguyên tử {s}"
            disabled={counts[s] >= MAX_EACH}
            onclick={() => change(s, 1)}>+</button
          >
        </span>
      </div>
    {/each}
  </div>

  <div class="rounded-xl border border-slate-200 bg-white p-2">
    {#if known}
      {#key known.formula}
        <MoleculeViewer molecule={known.shape} details={false} size={320} />
      {/key}
      <p class="text-center text-sm text-slate-600">
        Các nguyên tử đã liên kết thành phân tử {known.name}. Kéo nút tròn trên vòng để xoay mô
        hình.
      </p>
    {:else if atoms.length}
      <svg
        viewBox="0 0 360 {pileHeight}"
        class="mx-auto block w-full max-w-sm"
        role="img"
        aria-label="Các nguyên tử chưa liên kết: {atoms.join(', ')}"
      >
        {#each pile as b, i (i)}
          <circle
            cx={b.x}
            cy={b.y}
            r="22"
            fill={atomColor(b.s)}
            stroke="#0f172a"
            stroke-width="1.5"
          />
          <text
            x={b.x}
            y={b.y + 5}
            text-anchor="middle"
            font-size="14"
            font-weight="700"
            fill={b.s === 'H' || b.s === 'S' ? '#0f172a' : '#fff'}>{b.s}</text
          >
        {/each}
      </svg>
      <p class="text-center text-sm text-slate-600">
        Bộ lắp chưa có mô hình cho nhóm nguyên tử này; công thức và khối lượng vẫn tính được.
      </p>
    {:else}
      <p class="py-8 text-center text-sm text-slate-500">
        Bấm + để lấy quả cầu nguyên tử đặt lên bàn lắp.
      </p>
    {/if}
  </div>

  <dl
    class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-4 text-sm"
    aria-live="polite"
  >
    <dt class="text-slate-500">Công thức</dt>
    <dd class="font-semibold">
      {#if formula}<ChemFormula {formula} /> ({totalAtoms(counts)} nguyên tử){:else}—{/if}
    </dd>
    <dt class="text-slate-500">Loại chất</dt>
    <dd class={kind === 'don-chat' ? 'text-sky-800' : kind === 'hop-chat' ? 'text-violet-800' : ''}>
      {kindText}
    </dd>
    <dt class="text-slate-500">Khối lượng phân tử</dt>
    <dd class="tabular-nums">{massText || '—'}</dd>
  </dl>

  <div class="space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
    <p class="text-sm font-semibold text-indigo-900">
      Thử thách {goal + 1}/{TARGETS.length}: {target.task}.
    </p>
    <p
      class="text-sm {solved ? 'font-semibold text-emerald-800' : 'text-indigo-900'}"
      aria-live="polite"
    >
      {#if solved}
        Chính xác: <ChemFormula {formula} />, khối lượng phân tử {formatNumber(mass.total)} amu, là
        {kind === 'don-chat' ? 'đơn chất' : 'hợp chất'}.
      {:else}
        {hint}
      {/if}
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.secondary} onclick={nextGoal}>Thử thách khác</button>
      <button type="button" class={button.quiet} onclick={clear}>Dọn bàn lắp</button>
    </div>
  </div>
</div>
