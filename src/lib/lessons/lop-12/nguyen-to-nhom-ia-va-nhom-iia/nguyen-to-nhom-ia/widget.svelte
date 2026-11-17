<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { CATIONS, GUESSES, SAMPLES, UNKNOWNS, flameOf, judge, sample } from './engine.js';

  /** @typedef {import('./engine.js').Sample} Sample */

  const MODES = [
    { value: 'thu', label: 'Thử mẫu muối' },
    { value: 'doan', label: 'Nhận biết mẫu lạ' },
  ];

  let mode = $state('thu');
  /** The sample on the wire in the try mode. @type {string | null} */
  let onWire = $state(null);
  let cobalt = $state(false);
  /** Index into UNKNOWNS of the unknown sample now on the wire. */
  let unknownAt = $state(0);
  let dipped = $state(false);
  let lookedThrough = $state(false);
  /** @type {{ ok: boolean, final: boolean, text: string } | null} */
  let verdict = $state(null);
  let right = $state(0);
  let done = $state(0);
  /** Salts already put in the flame in the try mode. @type {string[]} */
  let seen = $state([]);

  const current = $derived(
    mode === 'thu' ? (onWire ? sample(onWire) : null) : dipped ? sample(UNKNOWNS[unknownAt]) : null,
  );
  const flame = $derived(flameOf(current, cobalt));

  /** @param {string} id */
  function dip(id) {
    onWire = id;
    if (!seen.includes(id)) seen = [...seen, id];
  }

  function clean() {
    onWire = null;
  }

  /** @param {string | number} next */
  function switchMode(next) {
    mode = String(next);
    cobalt = false;
    onWire = null;
    dipped = false;
    lookedThrough = false;
    verdict = null;
  }

  function toggleCobalt() {
    cobalt = !cobalt;
    if (cobalt && dipped) lookedThrough = true;
  }

  function dipUnknown() {
    dipped = true;
    if (cobalt) lookedThrough = true;
  }

  /** @param {string} id */
  function guess(id) {
    if (!dipped || verdict?.final) return;
    const s = sample(UNKNOWNS[unknownAt]);
    const v = judge(s, id, lookedThrough);
    verdict = v;
    if (v.final) {
      done += 1;
      if (v.ok) right += 1;
    }
  }

  function nextUnknown() {
    if (unknownAt === UNKNOWNS.length - 1) {
      right = 0;
      done = 0;
    }
    unknownAt = (unknownAt + 1) % UNKNOWNS.length;
    dipped = false;
    lookedThrough = false;
    cobalt = false;
    verdict = null;
  }

  const note = $derived.by(() => {
    if (mode === 'doan') {
      if (verdict)
        return {
          tone: verdict.ok ? /** @type {const} */ ('ok') : /** @type {const} */ ('warn'),
          text: verdict.text,
        };
      if (!dipped)
        return {
          tone: /** @type {const} */ ('info'),
          text: `Mẫu lạ số ${unknownAt + 1}: nhúng dây vào mẫu rồi đưa vào ngọn lửa.`,
        };
      return {
        tone: /** @type {const} */ ('info'),
        text: `Em ${cobalt ? 'nhìn qua kính cobalt và ' : ''}thấy ${flame.text}. Mẫu chứa ion nào?`,
      };
    }
    if (!current)
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Dây sạch: ngọn lửa đèn khí gần như không màu. Chọn một muối để nhúng dây.',
      };
    const ions = current.cations.map((c) => `$\\mathrm{${c}^{+}}$`).join(' và ');
    const hidden =
      current.cations.length === 2 && !cobalt
        ? ' Màu vàng rất sáng của $\\mathrm{Na^+}$ che khuất màu tím nhạt của $\\mathrm{K^+}$: thử nhìn qua kính cobalt.'
        : '';
    return {
      tone: /** @type {const} */ ('info'),
      text: `Muối chứa ${ions}: ${cobalt ? 'nhìn qua kính cobalt, ' : ''}em thấy ${flame.text}.${hidden}`,
    };
  });

  /** Flame outline: a teardrop above the burner mouth at (100, 200). */
  const FLAME = 'M 100 60 C 128 110, 132 150, 118 185 Q 100 205, 82 185 C 68 150, 72 110, 100 60 Z';
  const CORE =
    'M 100 130 C 110 150, 112 170, 106 186 Q 100 194, 94 186 C 88 170, 90 150, 100 130 Z';
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={switchMode} />

  <div class="grid gap-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start">
    <svg
      viewBox="0 0 200 280"
      class="mx-auto w-full max-w-[14rem]"
      role="img"
      aria-label={`Đèn khí, ${flame.text}${cobalt ? ', đang nhìn qua kính cobalt' : ''}.`}
    >
      <rect x="0" y="0" width="200" height="280" rx="16" fill="#0f172a" />
      <path
        d={FLAME}
        fill={flame.hex}
        opacity="0.9"
        class="flicker"
        style="transition: fill 0.4s"
      />
      <path d={CORE} fill="#bfdbfe" opacity="0.7" />
      <!-- burner -->
      <rect x="86" y="196" width="28" height="56" fill="#94a3b8" />
      <rect x="62" y="250" width="76" height="14" rx="4" fill="#64748b" />
      <!-- wire with a loop -->
      {#if current}
        <line x1="190" y1="104" x2="112" y2="150" stroke="#cbd5e1" stroke-width="3" />
        <circle cx="108" cy="152" r="5" fill="none" stroke="#e2e8f0" stroke-width="2.5" />
        <circle cx="108" cy="152" r="3" fill="#f8fafc" />
      {/if}
      {#if cobalt}
        <rect x="20" y="40" width="160" height="160" rx="10" fill="#1d4ed8" opacity="0.45" />
        <text x="100" y="58" text-anchor="middle" font-size="11" fill="#dbeafe">kính cobalt</text>
      {/if}
    </svg>

    <div class="space-y-3">
      {#if mode === 'thu'}
        <div class="flex flex-wrap gap-2" role="group" aria-label="Nhúng dây vào muối">
          {#each SAMPLES as s (s.id)}
            <button
              type="button"
              class={onWire === s.id ? button.primary : button.quiet}
              aria-pressed={onWire === s.id}
              onclick={() => dip(s.id)}
            >
              {#if s.cations.length === 2}
                <span><ChemFormula formula="NaCl" /> + <ChemFormula formula="KCl" /></span>
              {:else}
                <ChemFormula formula={s.label} />
              {/if}
            </button>
          {/each}
        </div>
        <div class="flex flex-wrap gap-2">
          <button type="button" class={button.quiet} disabled={!onWire} onclick={clean}>
            Rửa dây bằng dung dịch HCl
          </button>
          <button
            type="button"
            class={cobalt ? button.primary : button.secondary}
            aria-pressed={cobalt}
            onclick={toggleCobalt}>Nhìn qua kính cobalt</button
          >
        </div>
        <p class="text-sm text-slate-600" aria-live="polite">
          Đã thử {seen.length}/{SAMPLES.length} mẫu.
        </p>
      {:else}
        <p class="text-sm text-slate-600">
          Mẫu lạ {unknownAt + 1}/{UNKNOWNS.length} · Đúng {right}/{done}
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" class={button.primary} disabled={dipped} onclick={dipUnknown}>
            Đưa mẫu vào lửa
          </button>
          <button
            type="button"
            class={cobalt ? button.primary : button.secondary}
            aria-pressed={cobalt}
            onclick={toggleCobalt}>Nhìn qua kính cobalt</button
          >
        </div>
        <div class="grid grid-cols-2 gap-2" role="group" aria-label="Mẫu chứa ion nào?">
          {#each GUESSES as g (g.id)}
            <button
              type="button"
              class={button.quiet}
              disabled={!dipped || verdict?.final}
              onclick={() => guess(g.id)}
            >
              {#each g.ions as ion, k (ion)}{#if k > 0}<span class="mx-1">và</span>{/if}<ChemFormula
                  formula={CATIONS[ion].ion}
                />{/each}
            </button>
          {/each}
        </div>
        {#if verdict?.final}
          <button type="button" class={button.primary} onclick={nextUnknown}>
            {unknownAt === UNKNOWNS.length - 1 ? 'Làm lại từ đầu' : 'Mẫu tiếp theo'}
          </button>
        {/if}
      {/if}

      <ul class="grid grid-cols-3 gap-2 text-center text-xs" aria-label="Bảng màu ngọn lửa">
        {#each Object.values(CATIONS) as c (c.id)}
          <li class="rounded-lg border border-slate-200 p-2">
            <span
              class="mx-auto mb-1 block h-4 w-4 rounded-full"
              style="background: {c.hex}"
              aria-hidden="true"
            ></span>
            <ChemFormula formula={c.ion} />: {c.colour}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<style>
  .flicker {
    transform-origin: 100px 200px;
    animation: flicker 1.6s ease-in-out infinite alternate;
  }
  @keyframes flicker {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(0.96, 1.04);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .flicker {
      animation: none;
    }
  }
</style>
