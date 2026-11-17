<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { rng } from '#lib/core/drill.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { button } from '#lib/core/ui.js';
  import { SEA, seedElectrons, stepElectrons } from './engine.js';

  const PAD = 20;
  const COLS = 8;
  const ROWS = 4;
  const GAP = SEA.width / COLS;

  let electrons = $state(seedElectrons(28, rng(18)));
  let voltage = $state(false);
  let pushed = $state(false);
  const still = reducedMotion();
  const arrowId = $props.id();

  $effect(() => {
    if (still) return;
    const on = voltage;
    return frameLoop((dt) => {
      electrons = stepElectrons(electrons, dt, on);
    });
  });

  const ions = $derived(
    Array.from({ length: ROWS }, (_, r) =>
      Array.from({ length: COLS }, (_, c) => ({
        key: `${r}-${c}`,
        x: GAP / 2 + c * GAP + (pushed && r < 2 ? GAP / 2 : 0),
        y: GAP / 2 + r * GAP,
      })),
    ).flat(),
  );

  const note = $derived.by(() => {
    if (pushed)
      return 'Hai lớp ion trên đã trượt đi nửa khoảng cách, nhưng biển electron vẫn bao quanh và hút mọi ion dương: tinh thể không bị vỡ. Đó là lí do kim loại dẻo, dễ dát mỏng, kéo sợi.';
    if (voltage)
      return 'Khi có hiệu điện thế, các electron tự do vẫn chuyển động hỗn loạn nhưng cùng trôi về phía cực dương: trong kim loại xuất hiện dòng điện.';
    return 'Các ion dương nằm ở nút mạng; electron hoá trị tách khỏi nguyên tử, chuyển động tự do trong toàn mạng. Lực hút tĩnh điện giữa các electron tự do và các ion dương tạo nên liên kết kim loại.';
  });
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={voltage ? button.primary : button.quiet}
      aria-pressed={voltage}
      onclick={() => (voltage = !voltage)}>Nối với nguồn điện</button
    >
    <button
      type="button"
      class={pushed ? button.primary : button.quiet}
      aria-pressed={pushed}
      onclick={() => (pushed = !pushed)}>Tác dụng lực lên lớp trên</button
    >
  </div>

  <svg
    viewBox="0 0 {SEA.width + 2 * PAD} {SEA.height + 2 * PAD}"
    class="w-full max-w-xl rounded-xl bg-slate-50"
    role="img"
    aria-label="Biển electron: {ROWS *
      COLS} ion dương ở nút mạng và {electrons.length} electron tự do{voltage
      ? ' trôi về cực dương bên phải'
      : ' chuyển động hỗn loạn'}{pushed ? '; hai lớp ion trên đã trượt sang phải' : ''}."
  >
    {#if voltage}
      <text x="6" y={PAD + SEA.height / 2 + 5} font-size="16" font-weight="700" fill="#4f46e5"
        >−</text
      >
      <text
        x={SEA.width + 2 * PAD - 16}
        y={PAD + SEA.height / 2 + 5}
        font-size="16"
        font-weight="700"
        fill="#dc2626">+</text
      >
    {/if}
    <g transform="translate({PAD} {PAD})">
      <rect width={SEA.width} height={SEA.height} fill="#fef3c7" opacity="0.5" />
      {#each ions as ion (ion.key)}
        <g class={still ? '' : 'slide'} style="transform: translate({ion.x}px, {ion.y}px)">
          <circle r="13" fill="#94a3b8" stroke="#475569" />
          <text y="5" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">+</text>
        </g>
      {/each}
      {#each electrons as e, i (i)}
        <circle cx={e.x} cy={e.y} r="3.5" fill="#f59e0b" />
      {/each}
      {#if voltage && still}
        <path
          d="M 100 {SEA.height / 2} L 220 {SEA.height / 2}"
          stroke="#b45309"
          stroke-width="3"
          marker-end="url(#{arrowId})"
        />
        <defs>
          <marker id={arrowId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 Z" fill="#b45309" />
          </marker>
        </defs>
      {/if}
    </g>
  </svg>

  <FeedbackNote tone="info" text={note} />
</div>

<style>
  .slide {
    transition: transform 0.6s ease;
  }
</style>
