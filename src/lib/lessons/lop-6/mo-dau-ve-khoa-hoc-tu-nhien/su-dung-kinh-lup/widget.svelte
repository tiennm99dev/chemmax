<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    FOCAL,
    MAX_DISTANCE,
    MIN_DISTANCE,
    STATE_TEXT,
    apparentMagnification,
    blur,
    inverted,
    viewState,
  } from './engine.js';

  let distance = $state(1);

  const now = $derived(viewState(distance));
  const zoom = $derived(apparentMagnification(distance));
  const blurPx = $derived(blur(distance));
  const flip = $derived(inverted(distance));
  /** The ant is drawn 14 units long: 14 px when seen with the naked eye at 25 cm. */
  const scale = $derived(zoom);

  // Side view: 1 cm of lens height is 16 px above the table.
  const TABLE = 196;
  const lensY = $derived(TABLE - distance * 16);
  const filterId = $props.id();
</script>

<div class="space-y-4">
  <SliderField
    label="Khoảng cách từ kính lúp đến vật"
    bind:value={distance}
    min={MIN_DISTANCE}
    max={MAX_DISTANCE}
    step={0.05}
    format={(v) => `${formatNumber(v, 2)} cm`}
  />

  <div class="grid grid-cols-[7rem_1fr] items-center gap-3 sm:grid-cols-[9rem_1fr]">
    <svg
      viewBox="0 0 140 210"
      class="w-full"
      role="img"
      aria-label="Hình nhìn ngang: kính lúp cách vật {formatNumber(distance, 2)} cm"
    >
      <!-- eye, not to scale -->
      <g transform="translate(70 14)">
        <path d="M-18 0 Q0 -12 18 0 Q0 12 -18 0 Z" fill="#fff" stroke="#334155" stroke-width="2" />
        <circle r="5" fill="#334155" />
      </g>
      <text x="70" y="38" text-anchor="middle" font-size="9" fill="#64748b"
        >mắt (cách kính 10 cm)</text
      >
      <line x1="70" y1="44" x2="70" y2={lensY - 6} stroke="#cbd5e1" stroke-dasharray="3 3" />
      <!-- lens with handle -->
      <ellipse cx="70" cy={lensY} rx="34" ry="6" fill="#bae6fd" stroke="#0369a1" stroke-width="2" />
      <rect x="104" y={lensY - 3} width="32" height="6" rx="3" fill="#92400e" />
      <!-- focal mark -->
      <line
        x1="8"
        y1={TABLE - FOCAL * 16}
        x2="24"
        y2={TABLE - FOCAL * 16}
        stroke="#f97316"
        stroke-width="2"
      />
      <text x="8" y={TABLE - FOCAL * 16 - 4} font-size="9" fill="#c2410c">tiêu điểm</text>
      <!-- distance arrow -->
      <line x1="40" y1={lensY + 6} x2="40" y2={TABLE - 4} stroke="#4f46e5" stroke-width="1.5" />
      <text x="34" y={(lensY + TABLE) / 2 + 3} text-anchor="end" font-size="10" fill="#4338ca"
        >{formatNumber(distance, 1)}</text
      >
      <!-- object on table -->
      <rect x="0" y={TABLE} width="140" height="14" fill="#e2e8f0" />
      <ellipse cx="70" cy={TABLE - 2} rx="6" ry="2.5" fill="#1f2937" />
    </svg>

    <svg
      viewBox="0 0 200 200"
      class="mx-auto block w-full max-w-60"
      role="img"
      aria-label="Ảnh con kiến nhìn qua kính lúp: {now === 'ro-net'
        ? 'rõ nét'
        : 'bị mờ'}, to gấp khoảng {formatNumber(zoom, 1)} lần{flip ? ', lộn ngược' : ''}"
    >
      <defs>
        <clipPath id="{filterId}-o-kinh"><circle cx="100" cy="100" r="92" /></clipPath>
        <filter id="{filterId}-mo" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={blurPx} />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="96" fill="#0369a1" />
      <g clip-path="url(#{filterId}-o-kinh)">
        <rect width="200" height="200" fill="#f8fafc" />
        <g filter="url(#{filterId}-mo)">
          <!-- paper texture lines -->
          {#each { length: 9 } as _, i (i)}
            <line
              x1="0"
              x2="200"
              y1={100 + (i - 4) * 9 * scale}
              y2={100 + (i - 4) * 9 * scale}
              stroke="#cbd5e1"
              stroke-width={Math.max(0.5, 0.4 * scale)}
            />
          {/each}
          <g transform="translate(100 100) scale({scale * (flip ? -1 : 1)}) rotate(-90)">
            <!-- an ant, about 14 units long -->
            <g stroke="#1f2937" stroke-width="0.6" fill="none" stroke-linecap="round">
              <path d="M-1 -1 l-3 -3 M1 -1 l3 -3 M-1 0 l-4 0 M1 0 l4 0 M-1 1 l-3 3 M1 1 l3 3" />
              <path d="M-0.5 -5.5 l-2 -3 M0.5 -5.5 l2 -3" />
            </g>
            <ellipse cx="0" cy="-4.5" rx="1.4" ry="1.3" fill="#1f2937" />
            <ellipse cx="0" cy="0" rx="1.1" ry="1.8" fill="#374151" />
            <ellipse cx="0" cy="4.5" rx="2" ry="2.8" fill="#1f2937" />
            <circle cx="-0.6" cy="-4.9" r="0.3" fill="#f8fafc" />
            <circle cx="0.6" cy="-4.9" r="0.3" fill="#f8fafc" />
          </g>
        </g>
      </g>
    </svg>
  </div>

  <p
    class="rounded-xl px-4 py-3 text-sm font-semibold {now === 'ro-net'
      ? 'bg-emerald-50 text-emerald-800'
      : 'bg-amber-50 text-amber-900'}"
    aria-live="polite"
  >
    {STATE_TEXT[now]}
    <span class="block font-normal text-slate-700">
      Con kiến trông to gấp khoảng <strong class="tabular-nums">{formatNumber(zoom, 1)}</strong> lần so
      với khi nhìn bằng mắt thường.
    </span>
  </p>
</div>
