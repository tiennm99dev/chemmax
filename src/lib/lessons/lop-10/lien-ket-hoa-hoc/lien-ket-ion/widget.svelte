<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import AtomModel from '#lib/domain/atom-model.svelte';
  import { atomShells } from '#lib/domain/atom.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import {
    PAIRS,
    atomsAfter,
    halfReactions,
    nobleWith,
    speciesFormula,
    totalTransfers,
    transferNote,
  } from './engine.js';

  let formula = $state('NaCl');
  let done = $state(0);

  const pair = $derived(PAIRS.find((p) => p.formula === formula) ?? PAIRS[0]);
  const total = $derived(totalTransfers(pair));
  const after = $derived(atomsAfter(pair, done));
  const finished = $derived(done === total);
  const options = PAIRS.map((p) => ({ value: p.formula, label: prettyFormula(p.formula) }));
</script>

{#snippet particle(/** @type {{ z: number, electrons: number, charge: number }} */ a)}
  {@const shells = atomShells(a.z, a.charge)}
  {@const noble = nobleWith(a.electrons)}
  <li class="w-36 text-center sm:w-44">
    <AtomModel z={a.z} electrons={a.electrons} caption={false} size={176} />
    <p class="text-lg font-bold"><ChemFormula formula={speciesFormula(a.z, a.charge)} /></p>
    <p class="text-xs text-slate-600">
      {shells.join(', ')} electron theo lớp{noble ? `, giống ${noble}` : ''}
    </p>
  </li>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Chọn hợp chất"
    {options}
    bind:value={formula}
    onchange={() => (done = 0)}
  />

  <ul class="flex flex-wrap items-start justify-center gap-3">
    {#each after.metals as a, i (i)}{@render particle(a)}{/each}
    {#each after.nonmetals as a, i (i)}{@render particle(a)}{/each}
  </ul>

  <div class="relative h-4 rounded-full bg-slate-100" aria-hidden="true">
    {#key done}
      {#if done > 0}
        <span class="flight absolute top-0.5 size-3 rounded-full bg-amber-500"></span>
      {/if}
    {/key}
  </div>

  <FeedbackNote tone={finished ? 'ok' : 'info'} text={transferNote(pair, done)} />

  {#if finished}
    <ul class="space-y-1 rounded-xl bg-slate-50 p-4 text-lg">
      {#each halfReactions(pair) as r, i (i)}
        <li>
          {#each r.left as part, k (k)}{#if k > 0}<span class="mx-1">+</span
              >{/if}{#if part.endsWith('e')}{part}{:else}<ChemFormula formula={part} />{/if}{/each}
          <span class="mx-2">→</span>
          {#each r.right as part, k (k)}{#if k > 0}<span class="mx-1">+</span
              >{/if}{#if part.endsWith('e')}{part}{:else}<ChemFormula formula={part} />{/if}{/each}
        </li>
      {/each}
    </ul>
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.primary} disabled={finished} onclick={() => (done += 1)}
      >Chuyển 1 electron</button
    >
    <button type="button" class={button.quiet} disabled={done === 0} onclick={() => (done = 0)}
      >Làm lại</button
    >
    <p class="text-sm text-slate-600 tabular-nums" aria-live="polite">
      Đã chuyển {done}/{total} electron.
    </p>
  </div>
</div>

<style>
  .flight {
    animation: flight 0.7s ease-in-out forwards;
  }
  @keyframes flight {
    from {
      left: 0;
    }
    to {
      left: calc(100% - 0.75rem);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .flight {
      animation: none;
      left: calc(100% - 0.75rem);
    }
  }
</style>
