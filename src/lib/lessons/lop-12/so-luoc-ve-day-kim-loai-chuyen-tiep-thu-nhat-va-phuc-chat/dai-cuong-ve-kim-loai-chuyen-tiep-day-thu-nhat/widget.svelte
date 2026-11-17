<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import Tex from '#lib/components/tex.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import {
    METALS,
    colouredByD,
    ionTex,
    ionValence,
    metal,
    oxText,
    valenceOf,
    valenceTex,
  } from '../_shared/transition.js';
  import { formulaTex } from '../_shared/complexes.js';
  import { CHALLENGES, judgeD } from './engine.js';

  const MODES = [
    { value: 'kham-pha', label: 'Khám phá dãy Sc – Cu' },
    { value: 'thu-thach', label: 'Đếm electron 3d' },
  ];

  let mode = $state('kham-pha');
  let symbol = $state('Fe');
  let ox = $state(3);

  const m = $derived(metal(symbol));
  const atom = $derived(valenceOf(m.z));
  const cur = $derived(m.states.find((s) => s.ox === ox) ?? m.states[0]);
  const ion = $derived(ionValence(m.z, cur.ox));

  /** @param {string} s */
  function chooseMetal(s) {
    symbol = s;
    const next = metal(s);
    ox = next.usual[0];
  }

  const exploreNote = $derived.by(() => {
    const fromS = atom.s - ion.s;
    const fromD = cur.ox - fromS;
    const lose =
      fromD > 0
        ? `nhường ${fromS} electron 4s rồi ${fromD} electron 3d`
        : `nhường ${fromS} electron 4s`;
    const where =
      cur.form === 'rắn'
        ? `là chất rắn màu ${cur.colour}`
        : cur.colour === 'không màu'
          ? 'trong dung dịch không màu'
          : `trong dung dịch có màu ${cur.colour}`;
    const plain = cur.species === `${symbol}^${cur.ox === 1 ? '' : cur.ox}+`;
    const colourless =
      cur.form === 'dd' && plain && !colouredByD(ion.d)
        ? ' Ion có phân lớp 3d trống hoặc bão hoà nên không màu.'
        : '';
    return `Ở số oxi hoá ${oxText(cur.ox)}, nguyên tử ${symbol} đã ${lose}: còn $${valenceTex(ion)}$. Ví dụ ${cur.form === 'dd' ? 'ion' : 'hợp chất'} $${formulaTex(cur.species)}$ ${where}.${colourless}`;
  });

  // Challenge
  let round = $state(0);
  let guess = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let right = $state(0);
  let done = $state(0);
  const task = $derived(CHALLENGES[round % CHALLENGES.length]);
  const taskMetal = $derived(metal(task[0]));

  function check() {
    if (verdict) return;
    verdict = judgeD(task[0], task[1], guess);
    done += 1;
    if (verdict.ok) right += 1;
  }

  function next() {
    if ((round + 1) % CHALLENGES.length === 0) {
      right = 0;
      done = 0;
    }
    round += 1;
    guess = 0;
    verdict = null;
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} />

  {#if mode === 'kham-pha'}
    <div class="grid grid-cols-5 gap-1.5 sm:grid-cols-9" role="group" aria-label="Chọn nguyên tố">
      {#each METALS as el (el.symbol)}
        <button
          type="button"
          class="flex min-h-12 flex-col items-center justify-center rounded-lg border-2 text-sm font-bold transition {focusRing} {symbol ===
          el.symbol
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'}"
          aria-pressed={symbol === el.symbol}
          aria-label="{el.name} ({el.symbol}), Z = {el.z}"
          onclick={() => chooseMetal(el.symbol)}
        >
          <span class="text-[10px] font-normal text-slate-500" aria-hidden="true">{el.z}</span>
          <span aria-hidden="true">{el.symbol}</span>
        </button>
      {/each}
    </div>

    <div class="grid gap-4 sm:grid-cols-[1fr_auto]">
      <div class="space-y-2 rounded-xl border border-slate-200 p-3 text-sm">
        <p class="font-semibold text-slate-800">
          {m.symbol} – {m.name} (Z = {m.z})
        </p>
        <p>Cấu hình electron: <Tex math={valenceTex(atom)} /></p>
        <p class="text-slate-600">
          Nhiệt độ nóng chảy {formatNumber(m.melting)} °C · khối lượng riêng {formatNumber(
            m.density,
            2,
          )} g/cm³
        </p>
        <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Chọn số oxi hoá">
          <span class="text-slate-600">Số oxi hoá:</span>
          {#each m.states as s (s.ox)}
            <button
              type="button"
              class="{cur.ox === s.ox ? button.primary : button.quiet} {m.usual.includes(s.ox)
                ? 'font-extrabold'
                : ''}"
              aria-pressed={cur.ox === s.ox}
              aria-label="Số oxi hoá {oxText(s.ox)}{m.usual.includes(s.ox) ? ', thường gặp' : ''}"
              onclick={() => (ox = s.ox)}>{oxText(s.ox)}</button
            >
          {/each}
        </div>
        <p class="text-xs text-slate-500">Số in đậm: số oxi hoá thường gặp.</p>
        <p>
          Cấu hình <Tex math={cur.ox === 0 ? m.symbol : `\\mathrm{${ionTex(m.symbol, cur.ox)}}`} />
          (kiểu ion): <Tex math={valenceTex(ion)} />
        </p>
      </div>
      <div class="flex flex-col items-center gap-1 text-sm">
        {#if cur.form === 'dd'}
          <TestTube
            liquid={cur.hex}
            label={`Dung dịch chứa ${prettyFormula(cur.species)}, màu ${cur.colour}`}
          />
        {:else}
          <svg viewBox="0 0 80 80" class="w-20" role="img" aria-label="Chất rắn màu {cur.colour}">
            <ellipse cx="40" cy="62" rx="34" ry="10" fill="#e2e8f0" />
            <path d="M14 60 Q40 18 66 60 Z" fill={cur.hex} stroke="#64748b" />
          </svg>
        {/if}
        <ChemFormula formula={cur.species} class="font-semibold" />
        <span class="text-slate-600">{cur.colour}</span>
      </div>
    </div>

    <FeedbackNote tone="info" text={exploreNote} />
  {:else}
    <div class="space-y-3 rounded-xl border border-slate-200 p-3 text-sm">
      <p class="text-slate-600">
        Câu {(round % CHALLENGES.length) + 1}/{CHALLENGES.length} · Đúng {right}/{done}
      </p>
      <p class="text-base">
        Nguyên tử {taskMetal.symbol} (Z = {taskMetal.z}): <Tex
          math={valenceTex(valenceOf(taskMetal.z))}
        />. Ion <Tex math={`\\mathrm{${ionTex(task[0], task[1])}}`} /> còn bao nhiêu electron 3d?
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <Stepper label="Số electron 3d" bind:value={guess} min={0} max={10} />
        <button type="button" class={button.primary} disabled={!!verdict} onclick={check}>
          Kiểm tra
        </button>
        {#if verdict}
          <button type="button" class={button.secondary} onclick={next}>
            {(round + 1) % CHALLENGES.length === 0 ? 'Làm lại từ đầu' : 'Ion tiếp theo'}
          </button>
        {/if}
      </div>
    </div>
    <FeedbackNote
      tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
      text={verdict?.text ??
        'Khi tạo ion, nguyên tử kim loại chuyển tiếp nhường electron 4s trước rồi mới đến electron 3d.'}
    />
  {/if}
</div>
