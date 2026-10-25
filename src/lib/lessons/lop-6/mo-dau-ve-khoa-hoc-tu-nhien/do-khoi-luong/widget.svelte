<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { parseNumber } from '#lib/units-engine/format.js';
  import {
    CONTAINERS,
    DIAL,
    DIAL_THINGS,
    SAMPLES,
    SCREW_STEP,
    apparent,
    dialMarks,
    digitalStart,
    display,
    gramsText,
    judgeDial,
    judgeDigital,
    needle,
    pressTare,
  } from './engine.js';

  const MODES = [
    { value: 'dong-ho', label: 'Cân đồng hồ' },
    { value: 'dien-tu', label: 'Cân điện tử' },
  ];
  const EYES = [
    { value: 'trai', label: 'Nhìn chếch trái' },
    { value: 'vuong', label: 'Nhìn vuông góc' },
    { value: 'phai', label: 'Nhìn chếch phải' },
  ];
  const THING_OPTIONS = DIAL_THINGS.map((t) => ({ value: t.id, label: t.name }));
  const CONTAINER_OPTIONS = [
    { value: 'none', label: 'Chưa đặt' },
    ...CONTAINERS.map((c) => ({ value: c.id, label: c.name })),
  ];
  const SAMPLE_OPTIONS = [
    { value: 'none', label: 'Chưa cho' },
    ...SAMPLES.map((c) => ({ value: c.id, label: c.name })),
  ];

  let mode = $state('dong-ho');

  // ---- dial scale ----
  let thingId = $state(DIAL_THINGS[0].id);
  let onPan = $state(false);
  let zeroError = $state(100);
  let eye = $state('trai');
  let typedKg = $state('');
  /** @type {{ ok: boolean, messages: string[] } | null} */
  let dialResult = $state(null);

  const thing = $derived(DIAL_THINGS.find((t) => t.id === thingId) ?? DIAL_THINGS[0]);
  const eyeKind = $derived(/** @type {import('./engine.js').Eye} */ (eye));
  const pointing = $derived(needle(onPan ? thing.mass : 0, zeroError));
  const seen = $derived(apparent(pointing, eyeKind));
  const overGhd = $derived(onPan && thing.mass + zeroError > DIAL.ghd);

  const CX = 180;
  const CY = 150;
  const R = 92;
  const SWEEP = 330;
  /** @param {number} grams */
  const angle = (grams) => ((grams / DIAL.ghd) * SWEEP * Math.PI) / 180;
  /** @param {number} grams @param {number} r */
  const at = (grams, r) => ({
    x: CX + r * Math.sin(angle(grams)),
    y: CY - r * Math.cos(angle(grams)),
  });
  const ALL_MARKS = dialMarks(0, DIAL.ghd);
  const tip = $derived(at(pointing, R - 6));

  const INSET_K = 340 / 14;
  const insetMarks = $derived(dialMarks(seen - 7 * DIAL.dcnn, seen + 7 * DIAL.dcnn));

  /** @param {number} dir */
  function turnScrew(dir) {
    zeroError = Math.max(-200, Math.min(200, zeroError + dir * SCREW_STEP));
    dialResult = null;
  }
  function togglePan() {
    onPan = !onPan;
    dialResult = null;
  }
  /** @param {string | number} id */
  function chooseThing(id) {
    thingId = String(id);
    onPan = false;
    typedKg = '';
    dialResult = null;
  }
  function recordDial() {
    if (!onPan) {
      dialResult = { ok: false, messages: ['Hãy đặt vật lên đĩa cân rồi mới đọc kết quả.'] };
      return;
    }
    dialResult = judgeDial({ thing, zeroError, eye: eyeKind, kilograms: parseNumber(typedKg) });
  }

  const zeroText = $derived(
    zeroError === 0
      ? 'Kim chỉ đúng vạch số 0.'
      : `Kim lệch ${formatNumber(Math.abs(zeroError))} g ${zeroError > 0 ? 'quá' : 'trước'} vạch số 0.`,
  );

  // ---- electronic scale ----
  let digital = $state(digitalStart());
  let containerId = $state('none');
  let sampleId = $state('none');
  let typedG = $state('');
  /** @type {{ ok: boolean, messages: string[] } | null} */
  let digitalResult = $state(null);

  const screen = $derived(display(digital));
  const screenText = $derived(screen.over ? 'O-Ld' : gramsText(screen.tenths));

  /** @param {string | number} id */
  function chooseContainer(id) {
    containerId = String(id);
    digital = { ...digital, container: CONTAINERS.find((c) => c.id === id) ?? null };
    digitalResult = null;
  }
  /** @param {string | number} id */
  function chooseSample(id) {
    sampleId = String(id);
    digital = { ...digital, sample: SAMPLES.find((c) => c.id === id) ?? null };
    digitalResult = null;
  }
  function tare() {
    digital = pressTare(digital);
    digitalResult = null;
  }
  function restart() {
    digital = digitalStart();
    containerId = 'none';
    sampleId = 'none';
    typedG = '';
    digitalResult = null;
  }
  function recordDigital() {
    digitalResult = judgeDigital(digital, parseNumber(typedG));
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Loại cân" options={MODES} bind:value={mode} />

  {#if mode === 'dong-ho'}
    <p class="text-sm text-slate-600">
      Cân đồng hồ: GHĐ <strong>{formatNumber(DIAL.ghd / 1000)} kg</strong>, ĐCNN
      <strong>{DIAL.dcnn} g</strong>.
    </p>
    <SegmentedControl
      label="Vật cần cân"
      options={THING_OPTIONS}
      value={thingId}
      onchange={chooseThing}
    />

    <svg
      viewBox="0 0 360 280"
      class="block w-full"
      role="img"
      aria-label="Cân đồng hồ: {onPan ? `${thing.name} trên đĩa cân` : 'đĩa cân trống'}. {zeroText}"
    >
      <!-- pan and object -->
      <rect x="100" y="34" width="160" height="8" rx="3" fill="#94a3b8" />
      <rect x="170" y="42" width="20" height="14" fill="#64748b" />
      {#if onPan}
        <rect x="120" y="6" width="120" height="28" rx="8" fill="#fde68a" stroke="#b45309" />
        <text x="180" y="25" font-size="12" text-anchor="middle" fill="#78350f">{thing.name}</text>
      {/if}
      <!-- body and dial -->
      <rect x="70" y="56" width="220" height="218" rx="22" fill="#e2e8f0" stroke="#475569" />
      <circle cx={CX} cy={CY} r={R + 4} fill="#fff" stroke="#334155" stroke-width="2" />
      {#each ALL_MARKS as m (m.value)}
        {@const a = at(m.value, R)}
        {@const b = at(m.value, R - (m.kind === 'label' ? 12 : m.kind === 'half' ? 8 : 5))}
        <line
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="#0f172a"
          stroke-width={m.kind === 'label' ? 1.4 : 0.7}
        />
        {#if m.kind === 'label'}
          {@const p = at(m.value, R - 22)}
          <text x={p.x} y={p.y + 3} font-size="9" text-anchor="middle" fill="#0f172a"
            >{formatNumber(m.value / 1000)}</text
          >
        {/if}
      {/each}
      <text x={CX} y={CY + 30} font-size="10" text-anchor="middle" fill="#475569">kg</text>
      <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#dc2626" stroke-width="2.5" />
      <circle cx={CX} cy={CY} r="5" fill="#dc2626" />
      <!-- adjusting screw -->
      <circle cx="250" cy="260" r="7" fill="#cbd5e1" stroke="#334155" />
      <line x1="245" y1="260" x2="255" y2="260" stroke="#334155" stroke-width="2" />
      <text x="238" y="264" font-size="10" text-anchor="end" fill="#334155">ốc điều chỉnh</text>
    </svg>

    <div class="flex flex-wrap items-center gap-2">
      <button
        type="button"
        class={button.quiet}
        disabled={onPan}
        onclick={() => turnScrew(-1)}
        aria-label="Vặn ốc cho kim lùi {SCREW_STEP} gam">⟲ Vặn ốc (kim lùi)</button
      >
      <button
        type="button"
        class={button.quiet}
        disabled={onPan}
        onclick={() => turnScrew(1)}
        aria-label="Vặn ốc cho kim tiến {SCREW_STEP} gam">⟳ Vặn ốc (kim tiến)</button
      >
      <button type="button" class={button.secondary} onclick={togglePan}>
        {onPan ? 'Lấy vật ra' : 'Đặt vật lên đĩa'}
      </button>
    </div>
    <p class="text-sm text-slate-600">
      {#if onPan}
        Muốn vặn ốc điều chỉnh, hãy lấy vật ra: chỉ chỉnh kim khi đĩa cân còn trống.
      {:else}
        Đĩa cân trống. {zeroText}
      {/if}
    </p>

    <SegmentedControl
      label="Cách đặt mắt khi đọc"
      options={EYES}
      bind:value={eye}
      onchange={() => (dialResult = null)}
    />

    <div class="rounded-xl border border-slate-200 bg-white p-2">
      <p class="px-2 text-xs font-semibold text-slate-600">Phóng to chỗ đầu kim cân</p>
      <svg
        viewBox="0 0 360 90"
        class="block w-full"
        role="img"
        aria-label={overGhd ? 'Kim chỉ quá vạch cuối của cân' : 'Hình phóng to đầu kim trên mặt số'}
      >
        <rect x="0" y="10" width="360" height="72" fill="#f8fafc" />
        {#each insetMarks as m (m.value)}
          {@const x = 180 + ((m.value - seen) / DIAL.dcnn) * INSET_K}
          <line
            x1={x}
            x2={x}
            y1="10"
            y2={10 + (m.kind === 'label' ? 26 : m.kind === 'half' ? 18 : 11)}
            stroke="#0f172a"
            stroke-width={m.kind === 'label' ? 1.6 : 1}
          />
          {#if m.kind === 'label'}
            <text {x} y="56" font-size="13" text-anchor="middle" fill="#0f172a"
              >{formatNumber(m.value / 1000)}</text
            >
          {/if}
        {/each}
        <line x1="180" y1="4" x2="180" y2="40" stroke="#dc2626" stroke-width="3" />
        {#if overGhd}
          <text x="356" y="76" font-size="11" text-anchor="end" fill="#b91c1c"
            >kim chạm vạch cuối!</text
          >
        {:else if eye !== 'vuong'}
          <text x="356" y="76" font-size="11" text-anchor="end" fill="#b91c1c">mắt nhìn chếch!</text
          >
        {/if}
      </svg>
    </div>

    <form
      class="flex flex-wrap items-end gap-2"
      onsubmit={(e) => {
        e.preventDefault();
        recordDial();
      }}
    >
      <label class="min-w-0 flex-1">
        <span class="mb-1 block text-sm font-semibold text-slate-700">Khối lượng (kg)</span>
        <input
          class={textInput}
          inputmode="decimal"
          bind:value={typedKg}
          placeholder="ví dụ 1,25"
        />
      </label>
      <button type="submit" class={button.primary}>Ghi kết quả</button>
    </form>

    <div
      class="rounded-xl px-4 py-3 text-sm {dialResult?.ok
        ? 'bg-emerald-50 text-emerald-900'
        : dialResult
          ? 'bg-amber-50 text-amber-900'
          : 'bg-slate-100 text-slate-700'}"
      aria-live="polite"
    >
      {#if dialResult}
        <ul class="list-disc space-y-1 pl-5">
          {#each dialResult.messages as msg, i (i)}
            <li>{msg}</li>
          {/each}
        </ul>
      {:else}
        Vặn ốc cho kim chỉ đúng vạch 0 khi đĩa trống, đặt vật lên đĩa, nhìn vuông góc với mặt số rồi
        đọc vạch chia gần nhất với đầu kim.
      {/if}
    </div>
  {:else}
    <p class="text-sm text-slate-600">
      Cân điện tử: GHĐ <strong>500 g</strong>, ĐCNN <strong>0,1 g</strong>. Cần cân riêng khối lượng
      của mẫu chất.
    </p>

    <svg
      viewBox="0 0 360 170"
      class="block w-full"
      role="img"
      aria-label="Cân điện tử, màn hình chỉ {screenText}{screen.over ? ', quá tải' : ' gam'}"
    >
      {#if digital.container}
        <rect
          x="130"
          y={digital.container.id === 'coc' ? 8 : 52}
          width="100"
          height={digital.container.id === 'coc' ? 50 : 6}
          rx="4"
          fill={digital.container.id === 'coc' ? '#e0f2fe' : '#f1f5f9'}
          stroke="#0369a1"
        />
        {#if digital.sample}
          <rect
            x="140"
            y={digital.container.id === 'coc' ? 34 : 40}
            width="80"
            height={digital.container.id === 'coc' ? 22 : 12}
            rx="5"
            fill={digital.sample.id === 'muoi' ? '#f8fafc' : '#fef3c7'}
            stroke="#94a3b8"
          />
          <text
            x="180"
            y={digital.container.id === 'coc' ? 49 : 50}
            font-size="10"
            text-anchor="middle"
            fill="#334155">{digital.sample.name}</text
          >
        {/if}
      {:else if digital.sample}
        <rect x="140" y="44" width="80" height="14" rx="5" fill="#fecaca" stroke="#b91c1c" />
      {/if}
      <rect x="110" y="58" width="140" height="8" rx="3" fill="#94a3b8" />
      <rect x="60" y="66" width="240" height="96" rx="14" fill="#334155" />
      <rect x="110" y="80" width="140" height="40" rx="6" fill="#bbf7d0" />
      <text
        x="240"
        y="110"
        font-size="26"
        text-anchor="end"
        font-family="ui-monospace, monospace"
        fill="#14532d">{screenText}</text
      >
      <text x="246" y="140" font-size="11" text-anchor="end" fill="#e2e8f0">g</text>
      <text x="120" y="146" font-size="10" fill="#e2e8f0">TARE</text>
    </svg>

    <SegmentedControl
      label="Vật chứa trên đĩa cân"
      options={CONTAINER_OPTIONS}
      value={containerId}
      onchange={chooseContainer}
    />
    <SegmentedControl
      label="Mẫu chất cho vào"
      options={SAMPLE_OPTIONS}
      value={sampleId}
      onchange={chooseSample}
    />
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.secondary} onclick={tare}>Trừ bì (TARE)</button>
      <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
    </div>

    <form
      class="flex flex-wrap items-end gap-2"
      onsubmit={(e) => {
        e.preventDefault();
        recordDigital();
      }}
    >
      <label class="min-w-0 flex-1">
        <span class="mb-1 block text-sm font-semibold text-slate-700"
          >Khối lượng của mẫu chất (g)</span
        >
        <input class={textInput} inputmode="decimal" bind:value={typedG} placeholder="ví dụ 25,4" />
      </label>
      <button type="submit" class={button.primary}>Ghi kết quả</button>
    </form>

    <div
      class="rounded-xl px-4 py-3 text-sm {digitalResult?.ok
        ? 'bg-emerald-50 text-emerald-900'
        : digitalResult
          ? 'bg-amber-50 text-amber-900'
          : 'bg-slate-100 text-slate-700'}"
      aria-live="polite"
    >
      {#if digitalResult}
        <ul class="list-disc space-y-1 pl-5">
          {#each digitalResult.messages as msg, i (i)}
            <li>{msg}</li>
          {/each}
        </ul>
      {:else}
        Màn hình đang chỉ {screenText} g. Đặt vật chứa lên đĩa, bấm "Trừ bì" cho màn hình về 0,0 rồi mới
        cho mẫu chất vào và đọc số.
      {/if}
    </div>
  {/if}
</div>
