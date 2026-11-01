<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationBalancer from '#lib/domain/equation-balancer.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { REACTIONS, bookText, halfElectrons, halfTex, scheme } from '../_shared/redox.js';

  let at = $state(0);
  let balanced = $state(false);
  let hinted = $state(false);
  let unaided = $state(0);
  /** @type {string[]} */
  let done = $state([]);

  const r = $derived(REACTIONS[at]);

  function onbalanced() {
    if (balanced) return;
    balanced = true;
    if (!done.includes(r.id)) {
      done = [...done, r.id];
      if (!hinted) unaided += 1;
    }
  }

  function next() {
    at = (at + 1) % REACTIONS.length;
    balanced = false;
    hinted = false;
  }
</script>

<div class="space-y-4">
  <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm text-indigo-900">
    <p class="font-semibold">Phản ứng {at + 1}/{REACTIONS.length}</p>
    {#if r.condition}<p>Điều kiện: {r.condition}.</p>{/if}
  </div>

  {#if !balanced}
    {#key r.id}
      <EquationBalancer equation={scheme(r)} solver={false} {onbalanced} />
    {/key}
  {/if}

  {#if hinted || balanced}
    <ul class="space-y-1 rounded-xl bg-slate-50 p-3">
      <li class="flex flex-wrap items-baseline gap-x-2">
        <span class="text-sm font-semibold text-amber-900">
          Chất khử <ChemFormula formula={r.reducer} />:
        </span>
        <LiveRichText text={`$${halfTex(r.lose, 'lose', halfElectrons(r.lose))}$`} />
        <span class="font-bold text-amber-900">× {r.lose.times}</span>
      </li>
      <li class="flex flex-wrap items-baseline gap-x-2">
        <span class="text-sm font-semibold text-sky-900">
          Chất oxi hoá <ChemFormula formula={r.oxidant} />:
        </span>
        <LiveRichText text={`$${halfTex(r.gain, 'gain', halfElectrons(r.gain))}$`} />
        <span class="font-bold text-sky-900">× {r.gain.times}</span>
      </li>
    </ul>
  {/if}

  {#if balanced}
    <p class="rounded-xl bg-emerald-50 p-3 text-center text-lg">
      <EquationLine text={bookText(r)} />
    </p>
    <FeedbackNote tone="ok" text="Chính xác: hai vế đã khớp, electron nhường bằng electron nhận." />
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    {#if balanced}
      <button type="button" class={button.primary} onclick={next}>Phản ứng tiếp theo</button>
    {:else}
      <button
        type="button"
        class={button.secondary}
        disabled={hinted}
        onclick={() => (hinted = true)}>Gợi ý thăng bằng electron</button
      >
      <button type="button" class={button.quiet} onclick={next}>Bỏ qua</button>
    {/if}
    <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
      Đã cân bằng {done.length}/{REACTIONS.length} phản ứng, {unaided} phản ứng không cần gợi ý.
    </p>
  </div>
</div>
