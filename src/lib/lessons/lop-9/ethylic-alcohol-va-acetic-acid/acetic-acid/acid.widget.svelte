<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { button } from '#lib/core/ui.js';
  import { REAGENTS } from './engine.js';

  let picked = $state(REAGENTS[1].id);
  let added = $state(false);

  const r = $derived(REAGENTS.find((x) => x.id === picked) ?? REAGENTS[0]);
  const liquid = $derived(added ? r.liquid : (r.before ?? '#f1f5f9'));

  /** @param {string} id */
  function choose(id) {
    picked = id;
    added = false;
  }

  const BUBBLES = Array.from({ length: 7 }, (_, i) => ({
    x: 84 + ((i * 13) % 32),
    y: 205 - ((i * 19) % 60),
    r: 2.5 + (i % 3),
  }));

  const tone = $derived(!added ? 'info' : r.reacts ? 'ok' : /** @type {const} */ ('warn'));
  const note = $derived(
    added
      ? `${r.sign} ${r.rule}`
      : `Ống nghiệm chứa ${r.name.charAt(0).toLowerCase()}${r.name.slice(1)}. Bấm “Nhỏ acetic acid” và quan sát.`,
  );
</script>

<div class="space-y-4">
  <div
    class="flex flex-wrap gap-2"
    role="group"
    aria-label="Chọn chất cho tác dụng với acetic acid"
  >
    {#each REAGENTS as x (x.id)}
      <button
        type="button"
        class={picked === x.id ? button.primary : button.quiet}
        aria-pressed={picked === x.id}
        onclick={() => choose(x.id)}
      >
        {x.name}
      </button>
    {/each}
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,12rem)_1fr]">
    <svg
      viewBox="0 0 200 250"
      class="mx-auto block h-auto w-full max-w-48"
      role="img"
      aria-label="Ống nghiệm chứa {r.name}{added ? ` sau khi nhỏ acetic acid: ${r.sign}` : ''}"
    >
      <path d="M72 110 L128 110 L128 210 A28 28 0 0 1 72 210 Z" fill={liquid} />
      {#if r.id === 'litmus'}
        <rect x="94" y="40" width="12" height="150" rx="2" fill={added ? '#dc2626' : '#7c3aed'} />
      {:else if r.solid && !(added && r.reacts)}
        <ellipse cx="100" cy="225" rx="20" ry="7" fill={r.solid} />
      {:else if r.solid && added && r.reacts}
        <ellipse cx="100" cy="228" rx="9" ry="3" fill={r.solid} opacity="0.7" />
      {/if}
      {#if added && r.gas}
        {#each BUBBLES as b, i (i)}
          <circle
            cx={b.x}
            cy={b.y}
            r={b.r}
            fill="none"
            stroke="#0f172a"
            class="bubble"
            style:animation-delay="{(i % 4) * 0.25}s"
          />
        {/each}
      {/if}
      <path
        d="M68 50 L68 210 A32 32 0 0 0 132 210 L132 50"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      {#if added}
        <text x="100" y="30" font-size="12" fill="#334155" text-anchor="middle">+ CH₃COOH</text>
      {/if}
    </svg>

    <div class="space-y-3">
      <p class="text-sm text-slate-600">Loại chất: <strong>{r.kind}</strong></p>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.primary}
          disabled={added}
          onclick={() => (added = true)}
        >
          Nhỏ acetic acid
        </button>
        <button
          type="button"
          class={button.quiet}
          disabled={!added}
          onclick={() => (added = false)}
        >
          Làm lại
        </button>
      </div>
      {#if added && r.equation}
        <div class="rounded-xl bg-slate-50 p-3 text-base">
          <EquationLine text={r.equation} />
        </div>
      {/if}
    </div>
  </div>

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .bubble {
    animation: rise 1.1s ease-in infinite;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-60px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bubble {
      animation: none;
    }
  }
</style>
