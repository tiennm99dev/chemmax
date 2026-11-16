<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    ISLANDS,
    KIND_NAMES,
    MAP,
    OUTLINE_POINTS,
    QUESTIONS,
    SITES,
    judge,
    project,
  } from './engine.js';

  /** Marker colour per kind. @type {Record<import('./engine.js').Kind, string>} */
  const COLOR = {
    'mo-dau': '#7c2d12',
    'mo-khi': '#0891b2',
    'loc-dau': '#7c3aed',
    'dung-khi': '#16a34a',
  };
  const KINDS = /** @type {import('./engine.js').Kind[]} */ (Object.keys(KIND_NAMES));
  const MODES = [
    { value: 'xem', label: 'Khám phá' },
    { value: 'do', label: 'Đố tìm trên bản đồ' },
  ];
  const MARKERS = SITES.map((s) => ({ ...s, ...project(s.lon, s.lat) }));

  let mode = $state('xem');
  let selected = $state('bach-ho');
  let qi = $state(0);
  /** @type {string | null} */
  let picked = $state(null);
  let tries = $state(0);
  let score = $state(0);

  const site = $derived(SITES.find((s) => s.id === selected) ?? SITES[0]);
  const question = $derived(QUESTIONS[qi]);
  const verdict = $derived(picked === null ? null : judge(question, picked));
  const finished = $derived(qi === QUESTIONS.length - 1 && verdict?.right === true);

  /** @param {string} id */
  function choose(id) {
    selected = id;
    if (mode !== 'do' || verdict?.right) return;
    picked = id;
    tries += 1;
    if (id === question.answer && tries === 1) score += 1;
  }

  function next() {
    if (qi < QUESTIONS.length - 1) qi += 1;
    else {
      qi = 0;
      score = 0;
    }
    picked = null;
    tries = 0;
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function key(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      choose(id);
    }
  }

  /** Which marker to ring: the selected site, or in the quiz the right answer once found. */
  const ringed = $derived(mode === 'do' ? (verdict?.right ? question.answer : picked) : selected);
</script>

<div class="space-y-3">
  <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} hideLabel />

  {#if mode === 'do'}
    <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm">
      <p class="font-semibold text-indigo-900">Câu {qi + 1}/{QUESTIONS.length}: tìm trên bản đồ</p>
      <p class="mt-1 text-slate-800"><LiveRichText text={question.prompt} /></p>
    </div>
  {/if}

  <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
    <svg
      viewBox="0 0 {MAP.width} {MAP.height}"
      class="w-full rounded-xl border border-slate-200 bg-sky-50"
      role="img"
      aria-label="Sơ đồ các mỏ dầu khí, nhà máy lọc dầu và nhà máy dùng khí của Việt Nam (không theo tỉ lệ). Chọn địa điểm trong danh sách bên cạnh để xem thông tin."
    >
      <polygon points={OUTLINE_POINTS} fill="#fef3c7" stroke="#a16207" stroke-width="1" />
      {#each ISLANDS as island (island.name)}
        {#if island.r > 0}
          <circle
            cx={island.x}
            cy={island.y}
            r={island.r}
            fill="#fef3c7"
            stroke="#a16207"
            stroke-width="0.8"
          />
        {:else}
          <g fill="#a16207">
            <circle cx={island.x - 4} cy={island.y} r="1.5" />
            <circle cx={island.x + 3} cy={island.y - 3} r="1.5" />
            <circle cx={island.x + 2} cy={island.y + 4} r="1.5" />
          </g>
          <text
            x={island.anchor === 'end' ? island.x + 12 : island.x}
            y={island.y + 15}
            text-anchor={island.anchor}
            font-size="8"
            fill="#713f12">{island.name}</text
          >
        {/if}
      {/each}
      <text
        x={project(111, 13).x}
        y={project(111, 13).y}
        text-anchor="middle"
        font-size="11"
        fill="#0369a1"
        font-style="italic">Biển Đông</text
      >
      {#each MARKERS as m (m.id)}
        <g
          role="button"
          tabindex="-1"
          aria-label={m.name}
          class="cursor-pointer"
          onclick={() => choose(m.id)}
          onkeydown={(e) => key(e, m.id)}
        >
          <circle cx={m.x} cy={m.y} r="11" fill="transparent" />
          {#if m.kind === 'loc-dau' || m.kind === 'dung-khi'}
            <rect
              x={m.x - 4.5}
              y={m.y - 4.5}
              width="9"
              height="9"
              fill={COLOR[m.kind]}
              stroke="white"
            />
          {:else}
            <circle cx={m.x} cy={m.y} r="5" fill={COLOR[m.kind]} stroke="white" />
          {/if}
          {#if ringed === m.id}
            <circle cx={m.x} cy={m.y} r="9" fill="none" stroke="#dc2626" stroke-width="2" />
          {/if}
        </g>
      {/each}
    </svg>

    <div class="space-y-2">
      {#each KINDS as kind (kind)}
        <fieldset>
          <legend class="mb-1 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span class="inline-block h-2.5 w-2.5 rounded-full" style:background={COLOR[kind]}
            ></span>
            {KIND_NAMES[kind]}
          </legend>
          <div class="flex flex-wrap gap-1.5">
            {#each SITES.filter((s) => s.kind === kind) as s (s.id)}
              <button
                type="button"
                class="min-h-11 rounded-lg border px-2.5 text-left text-sm {ringed === s.id
                  ? 'border-rose-600 bg-rose-50 font-semibold'
                  : 'border-slate-300 bg-white'} {focusRing}"
                aria-pressed={mode === 'xem' ? selected === s.id : picked === s.id}
                onclick={() => choose(s.id)}>{s.name}</button
              >
            {/each}
          </div>
        </fieldset>
      {/each}
    </div>
  </div>

  {#if mode === 'xem'}
    <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm" aria-live="polite">
      <p class="font-semibold text-slate-900">{site.name}</p>
      <p class="text-xs text-slate-500">{KIND_NAMES[site.kind]} · {site.place}</p>
      <p class="mt-1 text-slate-700"><LiveRichText text={site.facts} /></p>
    </div>
  {:else}
    <FeedbackNote
      tone={verdict === null ? 'info' : verdict.right ? 'ok' : 'warn'}
      text={verdict === null
        ? 'Bấm vào một điểm trên bản đồ hoặc một tên trong danh sách.'
        : verdict.text}
    />
    {#if verdict?.right}
      <div class="flex flex-wrap items-center gap-3">
        <button type="button" class={button.primary} onclick={next}
          >{finished ? 'Chơi lại' : 'Câu tiếp theo'}</button
        >
        {#if finished}
          <p class="text-sm font-semibold text-slate-700" aria-live="polite">
            Đúng ngay lần đầu {score}/{QUESTIONS.length} câu.
          </p>
        {/if}
      </div>
    {/if}
  {/if}
</div>
