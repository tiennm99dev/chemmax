<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import {
    COLUMN_LENGTH,
    MAX_MINUTES,
    PIGMENTS,
    SOLVENTS,
    TUBE_MINUTES,
    bandHalfWidth,
    bandPosition,
    elutedShare,
    runSummary,
    tubeContents,
  } from './engine.js';

  const BOX = { x: 30, width: 56, top: 34, bottom: 214 };
  const OPTIONS = SOLVENTS.map((s) => ({ value: s.id, label: s.label }));

  let solventId = $state(SOLVENTS[1].id);
  let minutes = $state(0);

  const solvent = $derived(SOLVENTS.find((s) => s.id === solventId) ?? SOLVENTS[0]);
  const tubes = $derived(tubeContents(solvent, minutes));
  const summary = $derived(runSummary(solvent));

  /** @param {number} position */
  const sy = (position) => BOX.top + (position / COLUMN_LENGTH) * (BOX.bottom - BOX.top);

  const bands = $derived(
    PIGMENTS.map((pigment, i) => {
      const center = bandPosition(solvent.shares[i], minutes);
      const half = bandHalfWidth(minutes);
      return {
        pigment,
        from: sy(Math.max(0, center - half)),
        to: sy(Math.min(COLUMN_LENGTH, center + half)),
        out: elutedShare(solvent.shares[i], minutes),
        visible: center - half < COLUMN_LENGTH,
      };
    }),
  );

  const stuckNames = $derived(summary.stuck.map((i) => PIGMENTS[i].name).join(' và '));

  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (minutes === 0) {
        return {
          tone: 'info',
          text: 'Mẫu mới nằm ở đầu cột. Kéo thời gian để dung môi chảy qua cột.',
        };
      }
      if (minutes < MAX_MINUTES) {
        return {
          tone: 'info',
          text: `Chất bị hấp phụ yếu đi nhanh hơn: ${PIGMENTS[0].name} dẫn đầu, ${PIGMENTS[2].name} đi sau cùng. Kéo đến phút ${MAX_MINUTES} để xem kết quả.`,
        };
      }
      if (summary.mixed) {
        return {
          tone: 'warn',
          text: 'Dung môi này đẩy các chất đi quá nhanh, chúng ra gần như cùng lúc nên lẫn vào nhau trong một ống. Hãy thử dung môi kém mạnh hơn.',
        };
      }
      if (summary.stuck.length > 0) {
        return {
          tone: 'warn',
          text: `Sau ${MAX_MINUTES} phút ${stuckNames} vẫn còn trên cột: dung môi này quá yếu. Hãy thử dung môi mạnh hơn.`,
        };
      }
      return {
        tone: 'ok',
        text: 'Ba chất ra khỏi cột ở ba thời điểm khác nhau, mỗi ống hứng chỉ chứa một chất. Đuổi dung môi sẽ thu được từng chất riêng.',
      };
    },
  );

  /** @param {number} n */
  const bandLabel = (n) => formatNumber(n * 100, 0);

  /** @param {number[]} tube */
  function tubeLabel(tube) {
    const names = PIGMENTS.flatMap((p, i) => (tube[i] > 0.02 ? [p.name] : []));
    return names.length ? names.join(', ') : 'trống';
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Dung môi chảy qua cột" options={OPTIONS} bind:value={solventId} />
  <SliderField
    label="Thời gian chảy"
    bind:value={minutes}
    min={0}
    max={MAX_MINUTES}
    step={1}
    unit="phút"
  />

  <div class="grid gap-4 md:grid-cols-[auto_1fr]">
    <svg
      viewBox="0 0 116 240"
      class="mx-auto block h-64 w-auto"
      role="img"
      aria-label="Cột sắc kí sau {minutes} phút. {bands
        .map((b) =>
          b.visible
            ? `${b.pigment.name} ở ${formatNumber(((b.from + b.to) / 2 - BOX.top) * (100 / (BOX.bottom - BOX.top)), 0)} phần trăm chiều dài cột`
            : `${b.pigment.name} đã ra khỏi cột`,
        )
        .join(', ')}."
    >
      <text x={BOX.x + BOX.width / 2} y="16" text-anchor="middle" font-size="11" fill="#475569"
        >Dung môi ↓</text
      >
      <rect
        x={BOX.x}
        y={BOX.top}
        width={BOX.width}
        height={BOX.bottom - BOX.top}
        rx="4"
        fill="#f1f5f9"
        stroke="#475569"
        stroke-width="1.5"
      />
      {#each bands as b (b.pigment.id)}
        {#if b.visible}
          <rect
            x={BOX.x + 2}
            y={b.from}
            width={BOX.width - 4}
            height={Math.max(1, b.to - b.from)}
            fill={b.pigment.color}
            fill-opacity="0.75"
          />
        {/if}
      {/each}
      <path
        d="M {BOX.x + 20} {BOX.bottom} L {BOX.x + 28} {BOX.bottom + 12} L {BOX.x +
          36} {BOX.bottom} Z"
        fill="#475569"
      />
    </svg>

    <div class="min-w-0 space-y-3">
      <ul class="space-y-1 text-sm text-slate-700">
        {#each bands as b (b.pigment.id)}
          <li class="flex items-center gap-2">
            <span
              class="inline-block h-3 w-3 rounded-sm"
              style:background-color={b.pigment.color}
              aria-hidden="true"
            ></span>
            {b.pigment.name}: đã ra khỏi cột {bandLabel(b.out)} %
          </li>
        {/each}
      </ul>

      <div>
        <p class="mb-1 text-sm font-semibold text-slate-700">
          Các ống hứng, mỗi ống {TUBE_MINUTES} phút
        </p>
        <ol class="grid grid-cols-5 gap-1 sm:grid-cols-8">
          {#each tubes as tube, i (i)}
            {@const start = i * TUBE_MINUTES}
            <li
              class="flex h-14 flex-col justify-end overflow-hidden rounded-b-lg border border-slate-300 bg-white"
              aria-label="Ống từ phút {start} đến phút {start + TUBE_MINUTES}: {tubeLabel(tube)}"
            >
              {#each PIGMENTS as p, k (p.id)}
                <span
                  class="block"
                  style:background-color={p.color}
                  style:height="{Math.min(100, tube[k] * 100)}%"
                  aria-hidden="true"
                ></span>
              {/each}
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
