<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { intText } from '#lib/core/number-format.js';
  import { chemUnicode } from '../_shared/chem-text.js';
  import { FRACTIONS, MAX_C, MIN_C, boilingPoint, carbonSpan, fractionIndex } from './engine.js';

  let n = $state(8);

  const bp = $derived(boilingPoint(n));
  const index = $derived(fractionIndex(bp));
  const f = $derived(FRACTIONS[index]);
  const formula = $derived(chemUnicode(`${n === 1 ? 'C' : `C${n}`}H${2 * n + 2}`));
  const spans = FRACTIONS.map((_, i) => carbonSpan(i));

  /** tray rows, top of the column first */
  const TOP = 30;
  const ROW = 34;
  const trayY = (/** @type {number} */ i) => TOP + i * ROW;

  const note = $derived(
    `${formula} sôi ở khoảng ${intText(bp)} °C. Hơi của nó bay lên trong tháp, nơi nhiệt độ giảm dần từ dưới lên, và ${
      index === FRACTIONS.length - 1
        ? 'không bay hơi ở nhiệt độ đun, nên ở lại đáy tháp'
        : index === 0
          ? 'vẫn ở thể khí khi tới đỉnh tháp'
          : 'ngưng tụ thành chất lỏng ở khay có nhiệt độ thấp hơn nhiệt độ sôi của nó'
    }: phân đoạn ${f.name.toLowerCase()} (${f.range}). Công dụng: ${f.use}.`,
  );
</script>

<div class="space-y-4">
  <SliderField
    label="Số nguyên tử carbon của hydrocarbon (alkane mạch thẳng)"
    bind:value={n}
    min={MIN_C}
    max={MAX_C}
    format={(v) => `${v} (${chemUnicode(`${v === 1 ? 'C' : `C${v}`}H${2 * v + 2}`)})`}
  />

  <svg
    viewBox="0 0 360 260"
    class="mx-auto block w-full max-w-[30rem] select-none"
    role="img"
    aria-label="Tháp chưng cất dầu mỏ với {FRACTIONS.length} phân đoạn, nóng nhất ở đáy. {formula} được thu ở phân đoạn {f.name}."
  >
    <!-- column -->
    <rect
      x="70"
      y={TOP - 18}
      width="90"
      height={FRACTIONS.length * ROW + 18}
      rx="14"
      fill="#f1f5f9"
      stroke="#334155"
      stroke-width="2.5"
    />
    <!-- heater -->
    <rect x="20" y="236" width="50" height="16" rx="4" fill="#fecaca" stroke="#b91c1c" />
    <text x="45" y="248" text-anchor="middle" font-size="10" fill="#7f1d1d">dầu thô</text>
    <line x1="70" y1="244" x2="76" y2="232" stroke="#b91c1c" stroke-width="2" />
    <text x="166" y="14" font-size="10" fill="#475569">↑ càng lên cao càng nguội</text>
    <text x="64" y="14" text-anchor="end" font-size="9" fill="#475569">t° sôi, °C</text>
    {#each FRACTIONS as fr, i (fr.id)}
      {@const y = trayY(i)}
      {@const on = i === index}
      <line x1="70" y1={y + 14} x2="160" y2={y + 14} stroke="#94a3b8" stroke-width="1.5" />
      <!-- outlet pipe and product -->
      <line x1="160" y1={y + 8} x2="196" y2={y + 8} stroke="#475569" stroke-width="3" />
      <rect
        x="198"
        y={y - 4}
        width="156"
        height="26"
        rx="6"
        fill={on ? fr.colour : '#ffffff'}
        stroke={on ? '#4f46e5' : '#cbd5e1'}
        stroke-width={on ? 3 : 1.5}
      />
      <text
        x="206"
        y={y + 8}
        font-size="11"
        font-weight="700"
        fill={on && i >= 4 ? '#fff' : '#0f172a'}>{fr.name}</text
      >
      <text x="206" y={y + 19} font-size="9" fill={on && i >= 4 ? '#f8fafc' : '#475569'}
        >C{spans[i].from}–C{spans[i].to}</text
      >
      <text x="64" y={y + 12} text-anchor="end" font-size="9" fill="#475569"
        >{i === FRACTIONS.length - 1 ? '> 450' : `< ${fr.upTo}`}</text
      >
    {/each}
    <!-- the hydrocarbon -->
    <circle cx="115" cy={trayY(index) + 6} r="9" fill="#4f46e5" class="dot" />
    <text
      x="115"
      y={trayY(index) + 9}
      text-anchor="middle"
      font-size="8"
      fill="#fff"
      font-weight="700">C{n}</text
    >
  </svg>

  <FeedbackNote tone="info" text={note} />
</div>

<style>
  .dot {
    transition: cy 0.4s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .dot {
      transition: none;
    }
  }
</style>
