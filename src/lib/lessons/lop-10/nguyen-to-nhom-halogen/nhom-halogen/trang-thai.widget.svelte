<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { intText } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { HALOGENS, stateAt, statesLine } from './engine.js';

  let temperature = $state(25);

  /** Where the small molecules sit in each state, in a 60 by 60 box. */
  const DOTS = {
    rắn: [10, 24, 38, 52].flatMap((y) => [10, 24, 38, 52].map((x) => [x, y])),
    lỏng: [
      [8, 34],
      [21, 30],
      [35, 36],
      [50, 31],
      [13, 44],
      [28, 46],
      [43, 43],
      [54, 48],
      [8, 54],
      [21, 55],
      [36, 54],
      [49, 56],
    ],
    khí: [
      [12, 12],
      [44, 9],
      [30, 28],
      [9, 42],
      [51, 37],
      [28, 52],
    ],
  };
</script>

<div class="space-y-3">
  <SliderField
    label="Nhiệt độ"
    min={-230}
    max={200}
    unit="°C"
    format={(v) => intText(v)}
    bind:value={temperature}
  />
  <ul class="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {#each HALOGENS as h (h.formula)}
      {@const state = stateAt(h, temperature)}
      <li class="rounded-xl border border-slate-200 p-3 text-center text-sm">
        <p class="font-semibold"><ChemFormula formula={h.formula} /> ({h.name})</p>
        <svg
          viewBox="0 0 60 60"
          class="mx-auto my-2 block h-20 w-20 rounded-lg border border-slate-300 bg-slate-50"
          role="img"
          aria-label="{h.name} ở thể {state}"
        >
          {#each DOTS[state] as [x, y], i (i)}
            <circle cx={x} cy={y} r="4" fill={h.color} stroke="#334155" stroke-width="0.5" />
          {/each}
        </svg>
        <p>Thể <strong>{state}</strong></p>
        <p class="text-xs text-slate-600 tabular-nums">
          Nóng chảy {intText(h.melt)} °C, sôi {intText(h.boil)} °C
        </p>
      </li>
    {/each}
  </ul>
  <FeedbackNote tone="info" text={statesLine(temperature)} />
</div>
