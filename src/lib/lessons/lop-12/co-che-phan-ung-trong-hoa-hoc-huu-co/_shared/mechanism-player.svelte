<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import MechanismScene from './mechanism-scene.svelte';
  import { askFeedback } from './player.js';

  /**
   * Steps through a mechanism frame by frame. A frame may ask the learner to
   * predict what happens next (where the electrons go, which side the
   * nucleophile attacks); the next frame opens only once the prediction is
   * right, and every answer gets its reason. Remount it (`{#key}`) to start
   * another mechanism.
   *
   * @type {{
   *   frames: import('./player.js').Frame[];
   *   width?: number;
   *   height?: number;
   * }}
   */
  let { frames, width = 360, height = 200 } = $props();

  let index = $state(0);
  /** @type {Set<number>} */
  let solved = $state(new Set());
  /** @type {number | null} */
  let picked = $state(null);

  const frame = $derived(frames[index]);
  const blocked = $derived(Boolean(frame.ask) && !solved.has(index));
  const feedback = $derived(frame.ask && picked !== null ? askFeedback(frame.ask, picked) : null);

  /** @param {number} to */
  function go(to) {
    index = to;
    picked = null;
  }

  /** @param {number} option */
  function choose(option) {
    picked = option;
    if (frame.ask && option === frame.ask.answer) solved = new Set([...solved, index]);
  }
</script>

<div class="space-y-3">
  <p class="text-sm font-semibold text-slate-600">
    Bước {index + 1}/{frames.length}
  </p>
  <MechanismScene scene={frame.scene} {width} {height} />

  <div class="rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-900" aria-live="polite">
    <LiveRichText text={frame.caption} />
  </div>

  {#if frame.ask}
    <fieldset class="space-y-2 rounded-xl border border-slate-200 p-3">
      <legend class="px-1 text-sm font-semibold text-slate-700">
        <LiveRichText text={frame.ask.prompt} />
      </legend>
      <div class="flex flex-wrap gap-2">
        {#each frame.ask.options as option, i (i)}
          <button
            type="button"
            class={picked === i
              ? i === frame.ask.answer
                ? button.primary
                : button.secondary
              : button.quiet}
            aria-pressed={picked === i}
            onclick={() => choose(i)}
          >
            <LiveRichText text={option} />
          </button>
        {/each}
      </div>
      {#if feedback}
        <FeedbackNote tone={feedback.tone} text={feedback.text} />
      {/if}
    </fieldset>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} disabled={index === 0} onclick={() => go(index - 1)}>
      Bước trước
    </button>
    {#if index < frames.length - 1}
      <button type="button" class={button.primary} disabled={blocked} onclick={() => go(index + 1)}>
        Bước tiếp
      </button>
    {:else}
      <button type="button" class={button.secondary} onclick={() => go(0)}>Xem lại từ đầu</button>
    {/if}
  </div>
  {#if blocked}
    <p class="text-xs text-slate-500">Trả lời đúng câu dự đoán để mở bước tiếp theo.</p>
  {/if}
</div>
