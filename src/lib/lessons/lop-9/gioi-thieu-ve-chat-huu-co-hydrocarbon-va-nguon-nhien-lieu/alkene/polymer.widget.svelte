<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { fmt } from '#lib/core/number-format.js';
  import ChemText from '../_shared/chem-text.svelte';
  import { chainMass } from './engine.js';

  const POOL = 6;
  /** number of ethylene molecules already joined into the chain */
  let joined = $state(0);

  const left = $derived(POOL - joined);
  const UNIT = 52;
  const x0 = $derived(180 - (joined * UNIT) / 2);

  const note = $derived(
    joined === 0
      ? 'Sáu phân tử ethylene, mỗi phân tử có một liên kết đôi C=C. Bấm “Nối thêm một phân tử” để bắt đầu trùng hợp.'
      : joined === 1
        ? 'Liên kết đôi của phân tử đầu tiên mở ra thành liên kết đơn, để lại hai “tay” ở hai đầu sẵn sàng nối tiếp.'
        : `Mạch có ${joined} mắt xích –CH₂–CH₂–, phân tử khối ${fmt(chainMass(joined))} amu. Mỗi phân tử ethylene mở một liên kết trong liên kết đôi rồi nối với mắt xích bên cạnh. ${left === 0 ? 'Trong thực tế, n lên tới hàng nghìn đến hàng chục nghìn, tạo polyethylene (PE).' : ''}`,
  );
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-2">
    {#each Array.from({ length: left }, (_, i) => i) as i (i)}
      <span class="rounded-lg border border-sky-300 bg-sky-50 px-2 py-1 text-sm"
        ><ChemText text="CH2=CH2" /></span
      >
    {/each}
    {#if left === 0}
      <span class="text-sm text-slate-500">Đã dùng hết ethylene.</span>
    {/if}
  </div>

  <svg
    viewBox="0 0 360 90"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label={joined === 0
      ? 'Chưa có mạch polymer.'
      : `Mạch polyethylene gồm ${joined} mắt xích CH₂–CH₂ nối bằng liên kết đơn.`}
  >
    {#if joined > 0}
      <line
        x1={x0 - 10}
        y1="45"
        x2={x0 + joined * UNIT + 10}
        y2="45"
        stroke="#64748b"
        stroke-width="3"
      />
      {#each Array.from({ length: joined * 2 }, (_, i) => i) as i (i)}
        {@const cx = x0 + 13 + i * (UNIT / 2)}
        <line x1={cx} y1="45" x2={cx} y2="20" stroke="#64748b" stroke-width="2" />
        <line x1={cx} y1="45" x2={cx} y2="70" stroke="#64748b" stroke-width="2" />
        <circle {cx} cy="16" r="6" fill="#f8fafc" stroke="#0f172a" />
        <circle {cx} cy="74" r="6" fill="#f8fafc" stroke="#0f172a" />
        <circle {cx} cy="45" r="10" fill="#334155" />
        <text x={cx} y="49" text-anchor="middle" font-size="11" font-weight="700" fill="#fff"
          >C</text
        >
      {/each}
      <text x={x0 - 14} y="40" text-anchor="end" font-size="12" fill="#334155">…</text>
    {:else}
      <text x="180" y="50" text-anchor="middle" font-size="13" fill="#64748b"
        >Mạch polymer sẽ mọc ở đây</text
      >
    {/if}
  </svg>

  <p class="text-center text-lg font-medium">
    <ChemText text={joined === 0 ? 'nCH2=CH2 → (–CH2–CH2–)n' : `(–CH2–CH2–)${joined}`} />
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={left === 0} onclick={() => (joined += 1)}
      >Nối thêm một phân tử</button
    >
    <button type="button" class={button.quiet} disabled={joined === 0} onclick={() => (joined = 0)}
      >Làm lại</button
    >
  </div>

  <FeedbackNote tone={joined === POOL ? 'ok' : 'info'} text={note} />
</div>
