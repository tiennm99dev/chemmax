<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { BURN_FROM, FERTILISERS, NPK_MIX, advice, applied, grow } from './engine.js';

  /** @type {'don' | 'npk'} */
  let mode = $state('don');
  let urea = $state(0);
  let superP = $state(0);
  let kcl = $state(0);
  let npk = $state(0);

  const MODES = [
    { value: 'don', label: 'Phân đơn' },
    { value: 'npk', label: 'Phân NPK trộn sẵn' },
  ];
  const [U, S, K] = FERTILISERS;

  const add = $derived(applied(mode, { urea, super: superP, kcl }, npk));
  const field = $derived(grow(add));
  const percent = $derived(Math.round(field.growth * 100));
  const tone = $derived(
    field.burning || field.limiting || field.pollution !== 'thấp'
      ? 'warn'
      : /** @type {const} */ ('ok'),
  );

  /** Leaf colour: yellow when nitrogen is short, scorched when burnt, green otherwise. */
  const leaf = $derived(
    field.burning
      ? '#a16207'
      : field.ratio.N < 0.7
        ? '#facc15'
        : field.ratio.N < 1
          ? '#a3e635'
          : '#16a34a',
  );
  const height = $derived(20 + 70 * field.growth);
  const algae = $derived({ thấp: 0.1, 'trung bình': 0.45, cao: 0.85 }[field.pollution]);

  const BARS = /** @type {Array<{ key: 'N' | 'P' | 'K', label: string }>} */ ([
    { key: 'N', label: 'Nitrogen (N)' },
    { key: 'P', label: 'Phosphorus (P)' },
    { key: 'K', label: 'Potassium (K)' },
  ]);
  const SCALE = 2.4;
  const kg = (/** @type {number} */ v) => formatNumber(v, 2);
</script>

<div class="space-y-4">
  <SegmentedControl label="Loại phân bón" options={MODES} bind:value={mode} />

  <div class="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
    <div class="space-y-3">
      {#if mode === 'don'}
        <SliderField
          label="{U.name} (46,7% N)"
          bind:value={urea}
          min={0}
          max={U.max}
          step={0.5}
          unit="kg"
        />
        <SliderField
          label="{S.name} (26,5% P)"
          bind:value={superP}
          min={0}
          max={S.max}
          step={0.5}
          unit="kg"
        />
        <SliderField
          label="{K.name} (52,3% K)"
          bind:value={kcl}
          min={0}
          max={K.max}
          step={0.5}
          unit="kg"
        />
      {:else}
        <SliderField
          label="Phân NPK trộn sẵn"
          bind:value={npk}
          min={0}
          max={NPK_MIX.max}
          step={0.5}
          unit="kg"
        />
        <p class="text-sm text-slate-600">
          Mỗi kg phân trộn sẵn (urea : superphosphate kép : KCl = 2 : 1 : 1) có {kg(NPK_MIX.N)} kg N,
          {kg(NPK_MIX.P)} kg P và {kg(NPK_MIX.K)} kg K: tỉ lệ ba nguyên tố cố định.
        </p>
      {/if}
      <p class="text-sm text-slate-600">
        Ruộng lúa 1 sào (360 m²). Đất sẵn có khoảng một phần tư lượng N, P, K cây cần.
      </p>

      <div class="space-y-2" role="group" aria-label="Mức đáp ứng nhu cầu dinh dưỡng của cây">
        {#each BARS as b (b.key)}
          {@const r = field.ratio[b.key]}
          <div>
            <div class="flex justify-between text-sm">
              <span class="font-semibold text-slate-700">{b.label}</span>
              <span class="tabular-nums">
                {Math.round(r * 100)}% nhu cầu (bón thêm {kg(add[b.key])} kg)
              </span>
            </div>
            <div class="relative h-3 rounded-full bg-slate-100">
              <div
                class="h-3 rounded-full {r < 1
                  ? 'bg-amber-400'
                  : r > BURN_FROM
                    ? 'bg-rose-500'
                    : 'bg-emerald-500'}"
                style:width="{Math.min(100, (r / SCALE) * 100)}%"
              ></div>
              <div
                class="absolute top-[-3px] h-[18px] w-0.5 bg-slate-700"
                style:left="{(1 / SCALE) * 100}%"
                aria-hidden="true"
              ></div>
              <div
                class="absolute top-[-3px] h-[18px] w-0.5 bg-rose-700"
                style:left="{(BURN_FROM / SCALE) * 100}%"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        {/each}
        <p class="text-xs text-slate-500">
          Vạch đen: vừa đủ nhu cầu; vạch đỏ: bắt đầu thừa gây hại.
        </p>
      </div>
    </div>

    <div class="space-y-2">
      <svg
        viewBox="0 0 240 160"
        class="block h-auto w-full"
        role="img"
        aria-label="Ruộng lúa: năng suất {percent}% so với ruộng bón đủ; ô nhiễm nguồn nước mức {field.pollution}"
      >
        <rect x="0" y="0" width="240" height="160" fill="#f0f9ff" />
        <rect x="0" y="118" width="160" height="42" fill="#a16207" opacity="0.55" />
        {#each [20, 50, 80, 110, 140] as x (x)}
          {#each [-6, 0, 6] as dx (dx)}
            <line
              x1={x + dx / 2}
              y1="120"
              x2={x + dx}
              y2={120 - height}
              stroke={leaf}
              stroke-width="3"
              stroke-linecap="round"
            />
          {/each}
          {#if field.growth > 0.6 && !field.burning}
            <ellipse cx={x + 6} cy={122 - height} rx="3" ry="7" fill="#eab308" />
          {/if}
        {/each}
        <!-- pond receiving run-off -->
        <path d="M160 160 L160 128 Q200 116 240 128 L240 160 Z" fill="#38bdf8" />
        <path d="M160 160 L160 128 Q200 116 240 128 L240 160 Z" fill="#4d7c0f" opacity={algae} />
        <text x="200" y="152" text-anchor="middle" font-size="10" fill="#0f172a">Ao, hồ</text>
      </svg>
      <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm" aria-live="polite">
        <dt class="text-slate-500">Năng suất</dt>
        <dd class="font-semibold tabular-nums">{percent}% so với ruộng bón đủ</dd>
        <dt class="text-slate-500">Phân thừa trôi ra</dt>
        <dd class="tabular-nums">{kg(field.runoff)} kg N, P, K</dd>
        <dt class="text-slate-500">Ô nhiễm nước</dt>
        <dd class="font-semibold">{field.pollution}</dd>
      </dl>
    </div>
  </div>

  <FeedbackNote {tone} text={advice(field)} />
  <p class="text-xs text-slate-500">
    Mô hình đơn giản, số liệu chỉ để minh hoạ cách nghĩ; lượng phân thực tế theo hướng dẫn cho từng
    loại cây và loại đất.
  </p>
</div>
