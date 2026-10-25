<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import AtomModel from '#lib/domain/atom-model.svelte';
  import { PARTICLES, identify } from '#lib/domain/atom.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import { TARGETS, matchesTarget, targetHint } from './engine.js';

  const MAX = 20;
  let protons = $state(1);
  let neutrons = $state(0);
  let electrons = $state(1);
  let goal = $state(0);

  const atom = $derived(identify(protons, neutrons, electrons));
  const target = $derived(TARGETS[goal]);
  const solved = $derived(matchesTarget(target, protons, neutrons, electrons));
  const hint = $derived(targetHint(target, protons, neutrons, electrons));
  const charge = $derived(protons - electrons);
  const neutral = $derived(charge === 0);
  const electronShare = $derived(
    atom.massAmu > 0 ? ((electrons * PARTICLES.electron.massAmu) / atom.massAmu) * 100 : 0,
  );

  const PARTS = /** @type {const} */ ([
    { key: 'protons', name: 'Proton', sign: '+1', color: 'text-rose-700' },
    { key: 'neutrons', name: 'Neutron', sign: '0', color: 'text-slate-700' },
    { key: 'electrons', name: 'Electron', sign: '−1', color: 'text-sky-700' },
  ]);

  /** @param {'protons' | 'neutrons' | 'electrons'} key */
  const get = (key) => (key === 'protons' ? protons : key === 'neutrons' ? neutrons : electrons);
  /** @param {'protons' | 'neutrons' | 'electrons'} key @param {number} delta */
  function change(key, delta) {
    const min = key === 'protons' ? 1 : 0;
    const next = Math.max(min, Math.min(MAX, get(key) + delta));
    if (key === 'protons') protons = next;
    else if (key === 'neutrons') neutrons = next;
    else electrons = next;
  }

  function nextGoal() {
    goal = (goal + 1) % TARGETS.length;
  }

  const step = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-4 sm:grid-cols-[1fr_14rem] sm:items-center">
    <AtomModel
      z={protons}
      massNumber={protons + neutrons}
      {electrons}
      configuration={false}
      size={300}
    />
    <div class="space-y-2">
      {#each PARTS as part (part.key)}
        <div class="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2">
          <span class="text-sm">
            <span class="font-semibold {part.color}">{part.name}</span>
            <span class="text-slate-500">({part.sign})</span>
          </span>
          <span class="flex items-center gap-1">
            <button
              type="button"
              class={step}
              aria-label="Bớt một {part.name.toLowerCase()}"
              disabled={get(part.key) <= (part.key === 'protons' ? 1 : 0)}
              onclick={() => change(part.key, -1)}>−</button
            >
            <span class="w-7 text-center font-bold tabular-nums" aria-live="polite">
              <span class="sr-only">{part.name}:</span>{get(part.key)}
            </span>
            <button
              type="button"
              class={step}
              aria-label="Thêm một {part.name.toLowerCase()}"
              disabled={get(part.key) >= MAX}
              onclick={() => change(part.key, 1)}>+</button
            >
          </span>
        </div>
      {/each}
    </div>
  </div>

  <dl
    class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-4 text-sm"
    aria-live="polite"
  >
    <dt class="text-slate-500">Nguyên tử của</dt>
    <dd class="font-semibold capitalize">{atom.element?.name ?? '—'}</dd>
    <dt class="text-slate-500">Điện tích</dt>
    <dd>
      Hạt nhân +{protons}, vỏ −{electrons}:
      {#if neutral}
        <span class="font-semibold text-emerald-700">trung hoà điện</span>
      {:else}
        <span class="font-semibold text-amber-800">
          tổng {charge > 0 ? '+' : '−'}{Math.abs(charge)}, không còn là nguyên tử trung hoà
        </span>
      {/if}
    </dd>
    <dt class="text-slate-500">Khối lượng</dt>
    <dd class="tabular-nums">
      ≈ {formatNumber(atom.massAmu, 4)} amu; electron chỉ chiếm {formatNumber(electronShare, 3)}%
    </dd>
  </dl>

  <div class="space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
    <p class="text-sm font-semibold text-indigo-900">
      Thử thách {goal + 1}/{TARGETS.length}: {target.task}.
    </p>
    <p
      class="text-sm {solved ? 'font-semibold text-emerald-800' : 'text-indigo-900'}"
      aria-live="polite"
    >
      {solved
        ? `Chính xác: ${target.protons} proton, ${target.neutrons} neutron, ${target.electrons} electron.`
        : hint}
    </p>
    <button type="button" class={button.secondary} onclick={nextGoal}>Thử thách khác</button>
  </div>
</div>
