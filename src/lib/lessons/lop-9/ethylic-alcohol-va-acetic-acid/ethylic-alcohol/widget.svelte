<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { ETHANOL_DENSITY, TASKS, alcoholDegree, mixtureKind, recipe } from './engine.js';

  let mode = $state(/** @type {string | number} */ ('free'));
  let taskIndex = $state(/** @type {string | number} */ (0));
  let ethanol = $state(30);
  let water = $state(70);

  const task = $derived(TASKS[Number(taskIndex)]);
  const total = $derived(ethanol + water);
  const degree = $derived(alcoholDegree(ethanol, water));
  const mass = $derived(ethanol * ETHANOL_DENSITY);
  const target = $derived(recipe(task.degree, task.volume));

  const MODES = [
    { value: 'free', label: 'Tự pha' },
    { value: 'task', label: 'Pha theo yêu cầu' },
  ];
  const TASK_OPTIONS = TASKS.map((t, i) => ({ value: i, label: `${t.volume} mL ${t.degree}°` }));

  const MARKS = [
    { d: 5, text: 'Bia' },
    { d: 12, text: 'Rượu vang' },
    { d: 40, text: 'Rượu mạnh' },
    { d: 70, text: 'Cồn sát khuẩn' },
    { d: 96, text: 'Cồn 96°' },
  ];

  // beaker: inner bottom y = 230, 1000 mL fills 180 px
  const level = $derived(230 - (Math.min(total, 1000) / 1000) * 180);
  // gauge: 0° at y = 230, 100° at y = 30
  const gaugeY = (/** @type {number} */ d) => 230 - d * 2;

  /** @param {number} v */
  const ml = (v) => `${formatNumber(v, 1)} mL`;
  /** @param {number} d */
  const deg = (d) => `${formatNumber(d, 1)}°`;

  function startTask() {
    ethanol = 0;
    water = 0;
  }

  const solved = $derived(mode === 'task' && ethanol === target.ethanol && water === target.water);
  const tone = $derived(
    solved ? 'ok' : mode === 'task' && total > 0 ? /** @type {const} */ ('warn') : 'info',
  );
  const note = $derived.by(() => {
    if (mode === 'free') {
      if (total === 0)
        return 'Kéo hai thanh trượt để rót ethylic alcohol nguyên chất và nước vào cốc.';
      return `Độ cồn = ${ml(ethanol)} : ${ml(total)} × 100 = ${deg(degree)}: cứ 100 mL hỗn hợp có ${formatNumber(degree, 1)} mL ethylic alcohol nguyên chất. Đây là ${mixtureKind(Math.round(degree))}.`;
    }
    const goal = `Cần ${task.volume} mL ${task.use} ${task.degree}°.`;
    if (total === 0)
      return `${goal} Hãy tính thể tích ethylic alcohol nguyên chất cần lấy rồi rót cho đúng.`;
    if (solved)
      return `Đúng! ${ml(ethanol)} ethylic alcohol + ${ml(water)} nước = ${ml(total)} hỗn hợp ${task.degree}°, vì ${task.degree} × ${task.volume} : 100 = ${formatNumber(target.ethanol)}.`;
    if (total !== task.volume)
      return `${goal} Hỗn hợp đang có ${ml(total)}, độ cồn ${deg(degree)}: tổng thể tích chưa đúng.`;
    return `${goal} Thể tích đã đúng nhưng độ cồn đang là ${deg(degree)}: ${degree < task.degree ? 'cần thêm ethylic alcohol, bớt nước' : 'cần bớt ethylic alcohol, thêm nước'}.`;
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={startTask} />
    {#if mode === 'task'}
      <SegmentedControl
        label="Yêu cầu"
        options={TASK_OPTIONS}
        bind:value={taskIndex}
        onchange={startTask}
      />
    {/if}
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-[minmax(0,17rem)_1fr]">
    <svg
      viewBox="0 0 280 250"
      class="mx-auto block h-auto w-full max-w-72"
      role="img"
      aria-label="Cốc chứa {ml(total)} hỗn hợp, độ cồn {deg(
        degree,
      )}. Thang độ cồn có các mốc bia, rượu vang, rượu mạnh, cồn sát khuẩn và cồn 96 độ."
    >
      <!-- beaker -->
      {#if total > 0}
        <rect
          x="22"
          y={level}
          width="96"
          height={230 - level}
          fill="rgb({Math.round(191 - degree * 0.9)}, {Math.round(219 - degree * 0.5)}, 254)"
          opacity="0.85"
        />
      {/if}
      <path d="M18 40 L18 234 L122 234 L122 40" fill="none" stroke="#334155" stroke-width="3" />
      {#each [200, 400, 600, 800, 1000] as v (v)}
        <line
          x1="18"
          x2="30"
          y1={230 - v * 0.18}
          y2={230 - v * 0.18}
          stroke="#64748b"
          stroke-width="1.5"
        />
        <text x="34" y={234 - v * 0.18} font-size="10" fill="#475569">{v}</text>
      {/each}
      <text x="70" y="248" font-size="11" fill="#334155" text-anchor="middle">mL</text>

      <!-- alcohol-content gauge -->
      <line
        x1="160"
        x2="160"
        y1="30"
        y2="230"
        stroke="#94a3b8"
        stroke-width="6"
        stroke-linecap="round"
      />
      <line
        x1="160"
        x2="160"
        y1={gaugeY(degree)}
        y2="230"
        stroke="#4f46e5"
        stroke-width="6"
        stroke-linecap="round"
      />
      {#each MARKS as m (m.d)}
        <line x1="154" x2="166" y1={gaugeY(m.d)} y2={gaugeY(m.d)} stroke="#334155" />
        <text x="172" y={gaugeY(m.d) + 4} font-size="10" fill="#334155">{m.text}</text>
      {/each}
      <text x="160" y="20" font-size="12" font-weight="600" fill="#4338ca" text-anchor="middle"
        >{deg(degree)}</text
      >
    </svg>

    <div class="space-y-3">
      <SliderField
        label="Ethylic alcohol nguyên chất"
        bind:value={ethanol}
        min={0}
        max={500}
        step={5}
        unit="mL"
      />
      <SliderField label="Nước" bind:value={water} min={0} max={500} step={5} unit="mL" />
      <table class="w-full border-collapse text-left text-sm">
        <caption class="sr-only">Kết quả pha</caption>
        <tbody>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">Thể tích hỗn hợp</th>
            <td class="border border-slate-200 p-1 tabular-nums">{ml(total)}</td>
          </tr>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">Độ cồn</th>
            <td class="border border-slate-200 p-1 tabular-nums">{deg(degree)}</td>
          </tr>
          <tr>
            <th scope="row" class="border border-slate-200 bg-slate-50 p-1">
              Khối lượng ethylic alcohol ({formatNumber(ETHANOL_DENSITY, 3)} g/mL)
            </th>
            <td class="border border-slate-200 p-1 tabular-nums">{formatNumber(mass, 1)} g</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <FeedbackNote {tone} text={note} />
  <p class="text-xs text-slate-500">
    Khi trộn ethylic alcohol với nước, thể tích hỗn hợp thực tế hơi nhỏ hơn tổng hai thể tích; ở đây
    ta bỏ qua sự co thể tích này, như trong các bài tập.
  </p>
</div>
