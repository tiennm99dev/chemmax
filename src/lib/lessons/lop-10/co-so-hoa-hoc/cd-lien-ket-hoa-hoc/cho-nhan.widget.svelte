<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { DONOR_CASES } from './engine.js';

  let at = $state(0);
  /** @type {string | null} */
  let picked = $state(null);
  /** @type {HTMLElement | undefined} */
  let root = $state();

  const item = $derived(DONOR_CASES[at]);
  const right = $derived(picked === item.donor);
  const pickedPartner = $derived(item.partners.find((p) => p.id === picked));

  async function next() {
    at = (at + 1) % DONOR_CASES.length;
    picked = null;
    await tick();
    root?.querySelector('button')?.focus();
  }
</script>

<div class="space-y-3" bind:this={root}>
  <p class="text-sm font-semibold text-slate-700">
    {at + 1}/{DONOR_CASES.length}. {item.title}
  </p>
  <p class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-center">
    <LiveRichText text={`$${item.tex}$`} />
  </p>
  <p class="text-sm text-slate-700">Bên nào cho cặp electron dùng chung?</p>
  <div class="grid gap-2 sm:grid-cols-2">
    {#each item.partners as p (p.id)}
      <button
        type="button"
        class={picked === p.id ? button.primary : button.secondary}
        aria-pressed={picked === p.id}
        onclick={() => (picked = p.id)}
      >
        <LiveRichText text={p.label} />
      </button>
    {/each}
  </div>
  {#if pickedPartner}
    <FeedbackNote
      tone={right ? 'ok' : 'warn'}
      text={right ? `${pickedPartner.why} ${item.result}` : `Chưa đúng. ${pickedPartner.why}`}
    />
  {/if}
  {#if right}
    <button type="button" class={button.quiet} onclick={next}>Trường hợp tiếp theo</button>
  {/if}
</div>
