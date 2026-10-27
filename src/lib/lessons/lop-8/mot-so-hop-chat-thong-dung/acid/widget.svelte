<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import { ACIDS, MAX_DROPS, TARGETS, observe, target } from './engine.js';

  /** @type {import('./engine.js').AcidId} */
  let acid = $state('HCl');
  /** @type {import('./engine.js').TargetId} */
  let targetId = $state('zn');
  let drops = $state(0);

  const t = $derived(target(targetId));
  const tube = $derived(observe(acid, targetId, drops));

  const ACID_OPTIONS = ACIDS.map((a) => ({ value: a.id, label: a.label }));
  const TARGET_OPTIONS = TARGETS.map((x) => ({ value: x.id, label: x.label }));

  /** Bubble positions inside the tube, drawn from the bottom up. */
  const BUBBLES = Array.from({ length: 9 }, (_, i) => ({
    x: 84 + ((i * 37) % 32),
    y: 214 - ((i * 13) % 40),
    r: 2 + (i % 3),
  }));

  const tone = $derived(
    drops === 0
      ? 'info'
      : tube.equation || t.form === 'paper'
        ? 'ok'
        : /** @type {const} */ ('warn'),
  );
</script>

<div class="space-y-4">
  <div class="grid gap-3 md:grid-cols-[auto_1fr]">
    <SegmentedControl
      label="Acid trong ống nhỏ giọt"
      options={ACID_OPTIONS}
      bind:value={acid}
      onchange={() => (drops = 0)}
    />
    <SegmentedControl
      label="Trong ống nghiệm có"
      options={TARGET_OPTIONS}
      bind:value={targetId}
      onchange={() => (drops = 0)}
    />
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,14rem)_1fr]">
    <svg
      viewBox="0 0 200 250"
      class="mx-auto block h-auto w-full max-w-56"
      role="img"
      aria-label="Ống nghiệm chứa {t.label}, đã nhỏ {drops} giọt acid. {tube.observation}"
    >
      <!-- dropper -->
      <rect x="88" y="4" width="24" height="26" rx="8" fill="#334155" />
      <path d="M92 30 L108 30 L102 58 L98 58 Z" fill="#e2e8f0" stroke="#64748b" />
      {#key drops}
        {#if drops > 0}
          <circle cx="100" cy="68" r="3.5" fill="#bae6fd" stroke="#0284c7" class="drop" />
        {/if}
      {/key}
      <!-- liquid -->
      {#if t.form !== 'paper'}
        <path
          d="M72 {t.form === 'solution' ? 130 : 170} L128 {t.form === 'solution'
            ? 130
            : 170} L128 214 A28 28 0 0 1 72 214 Z"
          fill={tube.liquid}
          opacity="0.9"
        />
      {/if}
      {#if t.form === 'metal' && tube.solidLeft > 0}
        <rect
          x={100 - 16 * tube.solidLeft}
          y={226 - 22 * tube.solidLeft}
          width={32 * tube.solidLeft}
          height={22 * tube.solidLeft}
          rx="3"
          fill={t.color}
          stroke="#1e293b"
        />
      {/if}
      {#if t.form === 'solid' && tube.solidLeft > 0}
        <ellipse
          cx="100"
          cy="232"
          rx={22 * tube.solidLeft}
          ry={8 * tube.solidLeft}
          fill={t.color}
          stroke="#0369a1"
        />
      {/if}
      {#if t.form === 'paper'}
        <rect x="88" y="120" width="24" height="96" rx="2" fill={tube.paper} stroke="#1e293b" />
      {/if}
      {#each BUBBLES.slice(0, tube.bubbles) as b, i (i)}
        <circle
          cx={b.x}
          cy={b.y}
          r={b.r}
          fill="none"
          stroke="#0f172a"
          stroke-width="1"
          class="bubble"
          style:animation-delay="{(i % 3) * 0.4}s"
        />
      {/each}
      <!-- tube glass -->
      <path
        d="M68 92 L68 214 A32 32 0 0 0 132 214 L132 92"
        fill="none"
        stroke="#334155"
        stroke-width="3"
      />
      <line x1="62" x2="74" y1="92" y2="92" stroke="#334155" stroke-width="3" />
      <line x1="126" x2="138" y1="92" y2="92" stroke="#334155" stroke-width="3" />
    </svg>

    <div class="space-y-3">
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.primary}
          disabled={drops >= MAX_DROPS}
          onclick={() => (drops += 1)}
        >
          Nhỏ 1 giọt acid
        </button>
        <button
          type="button"
          class={button.quiet}
          disabled={drops === 0}
          onclick={() => (drops = 0)}
        >
          Làm lại
        </button>
      </div>
      <p class="text-sm text-slate-600 tabular-nums">Đã nhỏ: {drops} giọt</p>
      <div class="min-h-12 rounded-xl bg-slate-50 p-3 text-base">
        {#if tube.equation}
          <p class="mb-1 text-sm font-semibold text-slate-600">Phương trình hoá học</p>
          <EquationLine text={tube.equation} />
        {:else if drops > 0 && t.form === 'paper'}
          <p class="text-sm text-slate-700">
            Acid làm quỳ tím hoá đỏ: đây là dấu hiệu nhận biết dung dịch acid.
          </p>
        {:else if drops > 0}
          <p class="text-sm text-slate-700">Không có phản ứng hoá học xảy ra.</p>
        {:else}
          <p class="text-sm text-slate-500">Phương trình sẽ hiện ở đây khi có phản ứng.</p>
        {/if}
      </div>
    </div>
  </div>

  <FeedbackNote {tone} text={tube.observation} />
</div>

<style>
  .bubble {
    animation: rise 1.2s ease-in infinite;
  }
  .drop {
    animation: fall 0.6s ease-in 1;
  }
  @keyframes rise {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-40px);
      opacity: 0;
    }
  }
  @keyframes fall {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .bubble,
    .drop {
      animation: none;
    }
  }
</style>
