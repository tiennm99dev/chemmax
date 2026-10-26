<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import AtomModel from '#lib/domain/atom-model.svelte';
  import {
    MAX_ELECTRONS,
    MAX_NEUTRONS,
    MAX_PROTONS,
    TARGETS,
    describeAtom,
    matchesTarget,
    targetHint,
  } from './engine.js';

  let protons = $state(1);
  let neutrons = $state(0);
  let electrons = $state(1);
  let goal = $state(0);

  const atom = $derived(describeAtom(protons, neutrons, electrons));
  const target = $derived(TARGETS[goal]);
  const solved = $derived(matchesTarget(target, protons, neutrons, electrons));
  const hint = $derived(targetHint(target, protons, neutrons, electrons));

  const PARTS = /** @type {const} */ ([
    { key: 'protons', name: 'Proton', place: 'hạt nhân', sign: '+1', color: 'text-rose-700' },
    { key: 'neutrons', name: 'Neutron', place: 'hạt nhân', sign: '0', color: 'text-slate-700' },
    { key: 'electrons', name: 'Electron', place: 'lớp vỏ', sign: '−1', color: 'text-sky-700' },
  ]);

  /** @typedef {'protons' | 'neutrons' | 'electrons'} Part */
  /** @param {Part} key */
  const get = (key) => (key === 'protons' ? protons : key === 'neutrons' ? neutrons : electrons);
  /** @param {Part} key */
  const min = (key) => (key === 'protons' ? 1 : 0);
  /** @param {Part} key */
  const max = (key) =>
    key === 'protons' ? MAX_PROTONS : key === 'neutrons' ? MAX_NEUTRONS : MAX_ELECTRONS;

  /** @param {Part} key @param {number} delta */
  function change(key, delta) {
    const next = Math.max(min(key), Math.min(max(key), get(key) + delta));
    if (key === 'protons') protons = next;
    else if (key === 'neutrons') neutrons = next;
    else electrons = next;
  }

  function nextGoal() {
    goal = (goal + 1) % TARGETS.length;
  }

  const chargeText = $derived(
    atom.neutral
      ? 'tổng bằng 0: nguyên tử trung hoà về điện'
      : `tổng ${atom.charge > 0 ? '+' : '−'}${Math.abs(atom.charge)}: số proton khác số electron, đây không còn là nguyên tử trung hoà`,
  );

  const step = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

<div class="space-y-4">
  <div class="grid gap-4 sm:grid-cols-[1fr_15rem] sm:items-center">
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
          <span class="text-sm leading-tight">
            <span class="font-semibold {part.color}">{part.name}</span>
            <span class="text-slate-500">({part.sign})</span>
            <span class="block text-xs text-slate-500">ở {part.place}</span>
          </span>
          <span class="flex items-center gap-1">
            <button
              type="button"
              class={step}
              aria-label="Bớt một {part.name.toLowerCase()}"
              disabled={get(part.key) <= min(part.key)}
              onclick={() => change(part.key, -1)}>−</button
            >
            <span class="w-7 text-center font-bold tabular-nums">
              <span class="sr-only">{part.name}:</span>{get(part.key)}
            </span>
            <button
              type="button"
              class={step}
              aria-label="Thêm một {part.name.toLowerCase()}"
              disabled={get(part.key) >= max(part.key)}
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
    <dd class="font-semibold">
      <span class="capitalize">{atom.name ?? '—'}</span>
      {#if atom.symbol}({atom.symbol}), vì hạt nhân có {protons} proton{/if}
    </dd>
    <dt class="text-slate-500">Điện tích</dt>
    <dd>
      Hạt nhân +{protons}, lớp vỏ −{electrons};
      <span class="font-semibold {atom.neutral ? 'text-emerald-700' : 'text-amber-800'}"
        >{chargeText}</span
      >
    </dd>
    <dt class="text-slate-500">Lớp electron</dt>
    <dd class="tabular-nums">
      {#if atom.shells.length}
        {atom.shells.length} lớp ({atom.shells.join(', ')}); lớp ngoài cùng có {atom.outer} electron
      {:else}
        chưa có electron
      {/if}
    </dd>
    <dt class="text-slate-500">Khối lượng</dt>
    <dd class="tabular-nums">
      ≈ {protons} + {neutrons} = {atom.nucleusAmu} amu (tính cả electron: {formatNumber(
        atom.massAmu,
        5,
      )} amu)
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
        ? `Chính xác: ${target.protons} proton, ${target.neutrons} neutron, ${target.electrons} electron. Đó là nguyên tử ${atom.name} (${atom.symbol}).`
        : hint}
    </p>
    <button type="button" class={button.secondary} onclick={nextGoal}>Thử thách khác</button>
  </div>
</div>
