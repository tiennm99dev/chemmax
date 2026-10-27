<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FOODS, iodineColor, score } from './engine.js';

  let pickedId = $state(FOODS[0].id);
  /** @type {boolean | null} */
  let guess = $state(null);
  /** @type {Record<string, boolean>} */
  let predictions = $state({});

  const food = $derived(FOODS.find((f) => f.id === pickedId) ?? FOODS[0]);
  const tested = $derived(predictions[food.id] !== undefined);
  const tally = $derived(score(predictions));

  /** @param {string} id */
  function pick(id) {
    pickedId = id;
    guess = null;
  }

  function drop() {
    if (guess === null) return;
    predictions = { ...predictions, [food.id]: guess };
  }

  function resetAll() {
    predictions = {};
    guess = null;
  }

  const tone = $derived.by(() => {
    if (!tested) return 'info';
    return predictions[food.id] === food.starch ? 'ok' : /** @type {const} */ ('warn');
  });
  const note = $derived.by(() => {
    if (!tested)
      return guess === null
        ? `Mẫu: ${food.name}. Hãy dự đoán mẫu này có tinh bột hay không, rồi nhỏ dung dịch iodine.`
        : `Em dự đoán: ${guess ? 'có' : 'không có'} tinh bột. Bấm “Nhỏ iodine” để kiểm tra.`;
    const seen = food.starch
      ? 'Chỗ nhỏ iodine chuyển màu xanh tím: mẫu có tinh bột.'
      : 'Giọt iodine vẫn giữ màu vàng nâu: mẫu không có tinh bột.';
    const verdict = predictions[food.id] === food.starch ? 'Dự đoán đúng!' : 'Dự đoán chưa đúng.';
    return `${verdict} ${seen} ${food.why}`;
  });
</script>

<div class="space-y-4">
  <div
    class="grid grid-cols-2 gap-2 sm:grid-cols-3"
    role="group"
    aria-label="Chọn mẫu thực phẩm, vật liệu"
  >
    {#each FOODS as f (f.id)}
      {@const done = predictions[f.id] !== undefined}
      <button
        type="button"
        class="flex min-h-11 items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-semibold transition {focusRing} {pickedId ===
        f.id
          ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
        aria-pressed={pickedId === f.id}
        onclick={() => pick(f.id)}
      >
        <span
          class="inline-block size-4 shrink-0 rounded-full border border-slate-400"
          style:background={done ? iodineColor(f) : f.color}
          aria-hidden="true"
        ></span>
        <span>{f.name}{done ? (f.starch ? ' (xanh tím)' : ' (vàng nâu)') : ''}</span>
      </button>
    {/each}
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,11rem)_1fr]">
    <svg
      viewBox="0 0 200 150"
      class="mx-auto block h-auto w-full max-w-44"
      role="img"
      aria-label="{food.name} trên đĩa{tested
        ? food.starch
          ? ', chỗ nhỏ iodine có màu xanh tím'
          : ', giọt iodine màu vàng nâu'
        : ''}"
    >
      <ellipse cx="100" cy="110" rx="90" ry="34" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2" />
      <ellipse
        cx="100"
        cy="100"
        rx="56"
        ry="22"
        fill={food.color}
        stroke="#cbd5e1"
        stroke-width="2"
      />
      {#if tested}
        <ellipse
          class="spot"
          cx="100"
          cy="98"
          rx="20"
          ry="9"
          fill={iodineColor(food)}
          opacity="0.85"
        />
      {/if}
      <path
        d="M92 10 L108 10 L108 46 L100 58 L92 46 Z"
        fill="#78350f"
        opacity={tested ? 0.35 : 0.9}
      />
    </svg>

    <div class="space-y-3">
      <div class="flex flex-wrap gap-2" role="group" aria-label="Dự đoán">
        <button
          type="button"
          class={guess === true ? button.primary : button.quiet}
          aria-pressed={guess === true}
          disabled={tested}
          onclick={() => (guess = true)}>Có tinh bột</button
        >
        <button
          type="button"
          class={guess === false ? button.primary : button.quiet}
          aria-pressed={guess === false}
          disabled={tested}
          onclick={() => (guess = false)}>Không có tinh bột</button
        >
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.secondary}
          disabled={tested || guess === null}
          onclick={drop}
        >
          Nhỏ iodine
        </button>
        <button type="button" class={button.quiet} disabled={tally.done === 0} onclick={resetAll}>
          Làm lại tất cả
        </button>
      </div>
      <p class="text-sm text-slate-600" aria-live="polite">
        Đã thử {tally.done}/{tally.total} mẫu, dự đoán đúng <strong>{tally.right}</strong>.
      </p>
    </div>
  </div>

  <FeedbackNote {tone} text={note} />
</div>

<style>
  .spot {
    animation: spread 0.6s ease-out both;
    transform-origin: 100px 98px;
  }
  @keyframes spread {
    from {
      transform: scale(0.2);
    }
    to {
      transform: scale(1);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .spot {
      animation: none;
    }
  }
</style>
