<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import PeriodicTable from '#lib/domain/periodic-table.svelte';
  import { cellColor } from '#lib/domain/periodic-table.js';
  import { formatMass } from '#lib/domain/elements.js';
  import {
    CHALLENGES,
    HIGHLIGHTS,
    KIND_LABELS,
    checkPick,
    explainPlace,
    placeOf,
  } from './engine.js';

  const MODES = [
    { value: 'explore', label: 'Khám phá' },
    { value: 'find', label: 'Thử thách tìm ô' },
  ];

  const uid = $props.id();
  /** @type {string | number} */
  let mode = $state('explore');
  /** @type {number | null} */
  let selected = $state(11);
  let highlightValue = $state('none');
  let goal = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);

  const highlight = $derived(
    mode === 'explore' ? (HIGHLIGHTS.find((h) => h.value === highlightValue)?.test ?? null) : null,
  );
  const info = $derived(selected === null ? null : placeOf(selected));
  const lines = $derived(selected === null ? [] : explainPlace(selected));
  const challenge = $derived(CHALLENGES[goal]);

  /** @param {number} z */
  function onselect(z) {
    if (mode === 'find') verdict = checkPick(challenge, z);
  }

  function nextGoal() {
    goal = (goal + 1) % CHALLENGES.length;
    verdict = null;
  }

  function changeMode() {
    verdict = null;
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap items-end gap-4">
    <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={changeMode} />
    {#if mode === 'explore'}
      <div class="min-w-0">
        <label for="{uid}-hl" class="mb-1 block text-sm font-semibold text-slate-700"
          >Làm nổi bật</label
        >
        <select
          id="{uid}-hl"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 {focusRing}"
          bind:value={highlightValue}
        >
          {#each HIGHLIGHTS as h (h.value)}
            <option value={h.value}>{h.label}</option>
          {/each}
        </select>
      </div>
    {/if}
  </div>

  {#if mode === 'find'}
    <div class="space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <p class="text-sm font-semibold text-indigo-900">
        Thử thách {goal + 1}/{CHALLENGES.length}: {challenge.task}, rồi bấm vào ô đó.
      </p>
      <p
        class="text-sm {verdict?.ok
          ? 'font-semibold text-emerald-800'
          : verdict
            ? 'text-amber-900'
            : 'text-indigo-900'}"
        aria-live="polite"
      >
        {verdict?.text ?? 'Bấm một ô trên bảng (hoặc Tab vào bảng rồi dùng phím mũi tên).'}
      </p>
      <button type="button" class={button.secondary} onclick={nextGoal}>Thử thách khác</button>
    </div>
  {/if}

  <PeriodicTable
    bind:selected
    colorBy="metal"
    controls={false}
    details={false}
    {highlight}
    {onselect}
    label="Bảng tuần hoàn: kim loại, phi kim, khí hiếm"
  />

  {#if mode === 'explore'}
    <div class="rounded-xl bg-slate-50 p-4" aria-live="polite">
      {#if info}
        <div class="flex flex-wrap items-start gap-4">
          <div
            class="flex w-24 shrink-0 flex-col items-center rounded-lg border-2 border-slate-700 px-1 py-2 text-slate-900"
            style:background-color={cellColor(info.el, 'metal')}
          >
            <span class="text-xs tabular-nums">{info.el.z}</span>
            <span class="text-3xl leading-tight font-bold">{info.el.symbol}</span>
            <span class="text-xs capitalize">{info.el.name}</span>
            <span class="text-xs tabular-nums">{formatMass(info.el)}</span>
          </div>
          <div class="min-w-0 flex-1 space-y-1 text-sm">
            <p class="font-semibold">
              <span class="capitalize">{info.el.name}</span>{#if info.el.viName}
                ({info.el.viName}){/if}: {KIND_LABELS[info.kind]}
            </p>
            <ul class="list-disc space-y-0.5 pl-5">
              {#each lines as line (line)}
                <li>{line}</li>
              {/each}
            </ul>
            <p class="text-xs text-slate-500">
              Trong ô: số hiệu nguyên tử (trên), kí hiệu hoá học, tên nguyên tố, khối lượng nguyên
              tử (amu).
            </p>
          </div>
        </div>
      {:else}
        <p class="text-sm text-slate-600">Chọn một nguyên tố để xem ô của nó.</p>
      {/if}
    </div>
  {/if}
</div>
