<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { FRACTIONS, MAX_CARBON, alkane, boilingPoint, fractionOf, formulaTex } from './engine.js';

  /** y of each draw-off tray on the column, top to bottom. */
  const TRAY_Y = [38, 88, 138, 188, 250];
  const uid = $props.id();

  let carbons = $state(8);
  /** @type {string | null} */
  let guess = $state(null);
  /** @type {Set<number>} */
  let solved = $state(new Set());

  const formula = $derived(alkane(carbons));
  const bp = $derived(boilingPoint(carbons));
  const right = $derived(fractionOf(bp));
  const correct = $derived(guess === right.id);
  const rightIndex = $derived(FRACTIONS.findIndex((f) => f.id === right.id));
  const tex = $derived(formulaTex(carbons, 2 * carbons + 2));

  const feedback = $derived.by(() => {
    if (guess === null) {
      return {
        tone: /** @type {const} */ ('info'),
        text: `${tex} sôi ở ${formatNumber(bp)} °C. Bấm vào cửa ra nơi chất này được lấy ra.`,
      };
    }
    if (correct) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đúng. ${tex} sôi ở ${formatNumber(bp)} °C: hơi của nó bay lên đến vùng ${right.range} thì ngưng tụ và ra ở phân đoạn ${right.name.toLowerCase()}.`,
      };
    }
    const wrong = FRACTIONS.find((f) => f.id === guess) ?? FRACTIONS[0];
    const hotter = FRACTIONS.indexOf(wrong) > rightIndex;
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Chưa đúng. Phân đoạn ${wrong.name.toLowerCase()} gồm các chất sôi ${wrong.range}, còn ${tex} sôi ở ${formatNumber(bp)} °C. ${hotter ? 'Hơi của nó còn bay lên cao hơn, nơi nguội hơn, mới ngưng tụ.' : 'Nó ngưng tụ ở vùng nóng hơn, thấp hơn trong tháp.'}`,
    };
  });

  /** @param {string} id */
  function pick(id) {
    if (correct) return;
    guess = id;
    if (id === right.id) solved = new Set([...solved, carbons]);
  }

  function change() {
    guess = null;
  }

  const label = $derived(
    `Tháp chưng cất: dầu thô đun nóng vào ở đáy, hơi bay lên, càng lên cao càng nguội. Năm cửa ra từ trên xuống: ${FRACTIONS.map((f) => `${f.name} (${f.range})`).join(', ')}.` +
      (correct ? ` ${prettyFormula(formula)} đã ra ở cửa ${right.name}.` : ''),
  );
</script>

<div class="space-y-3">
  <SliderField
    label="Số nguyên tử carbon của alkane mạch thẳng"
    bind:value={carbons}
    min={1}
    max={MAX_CARBON}
    step={1}
    format={(v) => `${v} (${prettyFormula(alkane(Math.round(v)))})`}
    oninput={change}
  />

  <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
    <svg
      viewBox="0 0 220 290"
      class="w-full max-w-xs justify-self-center"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id="{uid}-heat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#dbeafe" />
          <stop offset="0.6" stop-color="#fed7aa" />
          <stop offset="1" stop-color="#fca5a5" />
        </linearGradient>
      </defs>
      <rect
        x="70"
        y="16"
        width="70"
        height="254"
        rx="18"
        fill="url(#{uid}-heat)"
        stroke="#475569"
        stroke-width="2"
      />
      {#each TRAY_Y.slice(0, 4) as y (y)}
        <line x1="72" x2="138" y1={y + 22} y2={y + 22} stroke="#94a3b8" stroke-dasharray="4 3" />
      {/each}
      {#each FRACTIONS as f, i (f.id)}
        <line
          x1="140"
          x2="168"
          y1={TRAY_Y[i]}
          y2={TRAY_Y[i]}
          stroke={correct && i === rightIndex ? '#059669' : '#475569'}
          stroke-width={correct && i === rightIndex ? 4 : 2}
        />
        <text x="172" y={TRAY_Y[i] + 4} font-size="10" fill="#334155">{i + 1}</text>
      {/each}
      <text x="66" y="34" text-anchor="end" font-size="10" fill="#1e3a8a">nguội</text>
      <text x="66" y="262" text-anchor="end" font-size="10" fill="#b91c1c">nóng</text>
      <path d="M 10 232 L 70 232" stroke="#78350f" stroke-width="4" />
      <path d="M 62 226 L 70 232 L 62 238" fill="none" stroke="#78350f" stroke-width="2" />
      <text x="8" y="224" font-size="10" fill="#78350f">dầu thô</text>
      <text x="8" y="250" font-size="10" fill="#78350f">~ 400 °C</text>
      {#if correct}
        <circle cx="105" cy={TRAY_Y[rightIndex]} r="9" fill="#059669" />
        <text x="105" y={TRAY_Y[rightIndex] + 3} text-anchor="middle" font-size="8" fill="white"
          >C{carbons}</text
        >
      {/if}
    </svg>

    <div class="flex flex-col gap-1.5" role="group" aria-label="Chọn cửa ra">
      {#each FRACTIONS as f, i (f.id)}
        {@const state =
          guess === f.id ? (correct ? 'ok' : 'bad') : correct && i === rightIndex ? 'ok' : 'idle'}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 py-1.5 text-left text-sm {state === 'ok'
            ? 'border-emerald-600 bg-emerald-50'
            : state === 'bad'
              ? 'border-amber-500 bg-amber-50'
              : 'border-slate-300 bg-white hover:bg-slate-50'} {focusRing}"
          aria-pressed={guess === f.id}
          onclick={() => pick(f.id)}
        >
          <span class="font-semibold">{i + 1}. {f.name}</span>
          <span class="block text-xs text-slate-600">sôi {f.range}</span>
        </button>
      {/each}
    </div>
  </div>

  <p class="text-sm text-slate-700">
    Phân tử đang xét: <ChemFormula {formula} />, sôi ở {formatNumber(bp)} °C. Đã xếp đúng {solved.size}
    phân tử.
  </p>
  <FeedbackNote tone={feedback.tone} text={feedback.text} />
</div>
