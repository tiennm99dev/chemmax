<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import SafetySign from './safety-sign.svelte';
  import { KIND_ORDER, SCENARIOS, SIGNS, SIGN_KINDS, judgeAction, judgeSign } from './engine.js';

  const MODES = [
    { value: 'tinh-huong', label: 'Tình huống' },
    { value: 'bien-bao', label: 'Biển báo' },
  ];
  let mode = $state('tinh-huong');

  // Situations: pick a spot in the lab, then choose what to do.
  let spot = $state(0);
  /** @type {Record<string, number>} */
  let chosen = $state({});
  const scenario = $derived(SCENARIOS[spot]);
  const verdict = $derived(
    chosen[scenario.id] === undefined ? null : judgeAction(scenario, chosen[scenario.id]),
  );
  const safeCount = $derived(
    SCENARIOS.filter((s) => chosen[s.id] !== undefined && s.actions[chosen[s.id]].safe).length,
  );

  // Signs: name the kind of each sign from its shape and colour.
  let signIndex = $state(0);
  /** @type {Record<string, import('./engine.js').SignKind>} */
  let named = $state({});
  const sign = $derived(SIGNS[signIndex]);
  const signVerdict = $derived(named[sign.id] ? judgeSign(sign, named[sign.id]) : null);
  const signScore = $derived(SIGNS.filter((s) => named[s.id] === s.kind).length);

  /** @param {number} i */
  function choose(i) {
    chosen = { ...chosen, [scenario.id]: i };
  }

  /** @param {import('./engine.js').SignKind} kind */
  function name(kind) {
    named = { ...named, [sign.id]: kind };
  }

  const spotClass = `min-h-11 rounded-lg border px-3 py-2 text-left text-sm ${focusRing}`;
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} />

  {#if mode === 'tinh-huong'}
    <div
      class="grid gap-2 grid-cols-2 sm:grid-cols-4"
      role="group"
      aria-label="Các vị trí trong phòng thực hành"
    >
      {#each SCENARIOS as s, i (s.id)}
        {@const pick = chosen[s.id]}
        <button
          type="button"
          class="{spotClass} {i === spot
            ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-800'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}"
          aria-pressed={i === spot}
          onclick={() => (spot = i)}
        >
          {s.where}
          {#if pick !== undefined}
            <span
              class="ml-1 font-bold {s.actions[pick].safe ? 'text-emerald-700' : 'text-rose-700'}"
              aria-label={s.actions[pick].safe ? 'đã chọn đúng' : 'đã chọn sai'}
              >{s.actions[pick].safe ? '✓' : '✗'}</span
            >
          {/if}
        </button>
      {/each}
    </div>

    <div class="rounded-xl border border-slate-200 bg-white p-4">
      <p class="font-semibold text-slate-800">{scenario.situation}</p>
      <p class="mt-1 text-sm text-slate-600">Em sẽ làm gì?</p>
      <div class="mt-3 space-y-2">
        {#each scenario.actions as action, i (i)}
          {@const picked = chosen[scenario.id] === i}
          <button
            type="button"
            class="block w-full {spotClass} {picked
              ? action.safe
                ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                : 'border-rose-600 bg-rose-50 text-rose-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            aria-pressed={picked}
            onclick={() => choose(i)}
          >
            {action.text}
          </button>
        {/each}
      </div>
    </div>

    <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700" aria-live="polite">
      {verdict ? verdict.text : 'Chọn một hành động để xem nó có an toàn không.'}
    </p>
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm font-semibold tabular-nums text-slate-700">
        Chọn an toàn: {safeCount}/{SCENARIOS.length}
      </span>
      <button
        type="button"
        class={button.quiet}
        onclick={() => (spot = (spot + 1) % SCENARIOS.length)}>Tình huống tiếp</button
      >
    </div>
  {:else}
    <div class="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
      <div class="mx-auto">
        <SafetySign
          kind={sign.kind}
          picture={sign.picture}
          label="Biển báo số {signIndex + 1}"
          size={140}
        />
      </div>
      <div class="space-y-2">
        <p class="text-sm font-semibold text-slate-700">
          Biển số {signIndex + 1}/{SIGNS.length} thuộc loại nào?
        </p>
        <div class="grid gap-2 sm:grid-cols-2">
          {#each KIND_ORDER as kind (kind)}
            {@const picked = named[sign.id] === kind}
            <button
              type="button"
              class="{spotClass} {picked
                ? kind === sign.kind
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                  : 'border-rose-600 bg-rose-50 text-rose-900'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
              aria-pressed={picked}
              onclick={() => name(kind)}
            >
              {SIGN_KINDS[kind].name}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700" aria-live="polite">
      {signVerdict ? signVerdict.text : 'Nhìn hình dạng và màu sắc của biển để chọn loại.'}
    </p>
    <div class="flex flex-wrap items-center gap-2">
      <span class="text-sm font-semibold tabular-nums text-slate-700">
        Nhận đúng: {signScore}/{SIGNS.length}
      </span>
      <button
        type="button"
        class={button.quiet}
        onclick={() => (signIndex = (signIndex - 1 + SIGNS.length) % SIGNS.length)}
        >Biển trước</button
      >
      <button
        type="button"
        class={button.primary}
        onclick={() => (signIndex = (signIndex + 1) % SIGNS.length)}>Biển tiếp</button
      >
    </div>
  {/if}
</div>
