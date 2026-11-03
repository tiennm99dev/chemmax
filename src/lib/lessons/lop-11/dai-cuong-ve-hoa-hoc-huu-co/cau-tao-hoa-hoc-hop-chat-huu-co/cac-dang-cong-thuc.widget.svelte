<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import CondensedText from './condensed-text.svelte';
  import { FORMS, hydrogensOf } from './engine.js';

  const STEP = 44;
  const OPTIONS = FORMS.map((f) => ({ value: f.id, label: f.name }));
  const WAYS = [
    { value: 'full', label: 'Đầy đủ' },
    { value: 'condensed', label: 'Thu gọn' },
    { value: 'skeleton', label: 'Khung phân tử' },
  ];
  const WAY_NOTES = {
    full: 'Viết ra mọi nguyên tử và mọi liên kết. Rõ ràng nhưng dài.',
    condensed:
      'Các nguyên tử gắn với cùng một carbon được viết thành một nhóm, liên kết với H được lược đi.',
    skeleton:
      'Mỗi đầu đoạn thẳng và mỗi điểm gấp khúc là một nguyên tử carbon. Không viết C và H gắn với C, nhưng phải viết các nguyên tử khác.',
  };

  let formId = $state(FORMS[0].id);
  let way = $state(/** @type {keyof typeof WAY_NOTES} */ ('full'));

  const form = $derived(FORMS.find((f) => f.id === formId) ?? FORMS[0]);
  const hydrogens = $derived(hydrogensOf(form));

  /** Fits grid points into the drawing box. */
  const frame = $derived.by(() => {
    const points =
      way === 'skeleton'
        ? form.skeleton
        : /** @type {[number, number][]} */ ([...form.atoms, ...hydrogens].map((a) => [a.x, a.y]));
    const xs = points.map((p) => p[0]);
    const ys = points.map((p) => p[1]);
    return {
      minX: Math.min(...xs),
      minY: Math.min(...ys),
      w: (Math.max(...xs) - Math.min(...xs)) * STEP + 2 * STEP,
      h: (Math.max(...ys) - Math.min(...ys)) * STEP + 2 * STEP,
    };
  });

  /** @param {number} x */
  const px = (x) => (x - frame.minX + 1) * STEP;
  /** @param {number} y */
  const py = (y) => (y - frame.minY + 1) * STEP;

  /**
   * Line offsets for a bond of one or two strokes.
   * @param {number} order
   */
  const offsets = (order) => (order === 2 ? [-3, 3] : [0]);
</script>

<div class="space-y-3">
  <SegmentedControl label="Chất" options={OPTIONS} bind:value={formId} />
  <SegmentedControl label="Cách viết công thức cấu tạo" options={WAYS} bind:value={way} />

  {#if way === 'condensed'}
    <p class="rounded-lg bg-slate-50 p-6 text-center text-xl">
      <CondensedText text={form.condensed} />
    </p>
  {:else}
    <svg
      viewBox="0 0 {frame.w} {frame.h}"
      class="mx-auto block max-h-64 w-full max-w-sm"
      role="img"
      aria-label="Công thức cấu tạo {way === 'full'
        ? 'đầy đủ'
        : 'dạng khung phân tử'} của {form.name}, thu gọn là {form.condensed}."
    >
      {#if way === 'full'}
        {#each form.bonds as [a, b, order], i (i)}
          {@const horizontal = form.atoms[a].y === form.atoms[b].y}
          {#each offsets(order) as d (d)}
            <line
              x1={px(form.atoms[a].x) + (horizontal ? 0 : d)}
              y1={py(form.atoms[a].y) + (horizontal ? d : 0)}
              x2={px(form.atoms[b].x) + (horizontal ? 0 : d)}
              y2={py(form.atoms[b].y) + (horizontal ? d : 0)}
              stroke="#475569"
              stroke-width="1.8"
            />
          {/each}
        {/each}
        {#each hydrogens as h, i (i)}
          <line
            x1={px(form.atoms[h.on].x)}
            y1={py(form.atoms[h.on].y)}
            x2={px(h.x)}
            y2={py(h.y)}
            stroke="#475569"
            stroke-width="1.8"
          />
        {/each}
        {#each form.atoms as a, i (i)}
          <circle cx={px(a.x)} cy={py(a.y)} r="11" fill="#fff" />
          <text
            x={px(a.x)}
            y={py(a.y) + 6}
            text-anchor="middle"
            font-size="17"
            font-weight="700"
            fill={a.el === 'O' ? '#dc2626' : '#1e293b'}>{a.el}</text
          >
        {/each}
        {#each hydrogens as h, i (i)}
          <circle cx={px(h.x)} cy={py(h.y)} r="10" fill="#fff" />
          <text x={px(h.x)} y={py(h.y) + 6} text-anchor="middle" font-size="17" fill="#475569"
            >H</text
          >
        {/each}
      {:else}
        {#each form.bonds as [a, b, order], i (i)}
          {#each offsets(order) as d (d)}
            <line
              x1={px(form.skeleton[a][0])}
              y1={py(form.skeleton[a][1]) + d}
              x2={px(form.skeleton[b][0])}
              y2={py(form.skeleton[b][1]) + d}
              stroke="#1e293b"
              stroke-width="2.4"
            />
          {/each}
        {/each}
        {#each form.atoms as a, i (i)}
          {#if a.el === 'O'}
            <circle cx={px(form.skeleton[i][0])} cy={py(form.skeleton[i][1])} r="14" fill="#fff" />
            <text
              x={px(form.skeleton[i][0])}
              y={py(form.skeleton[i][1]) + 6}
              text-anchor="middle"
              font-size="17"
              font-weight="700"
              fill="#dc2626">OH</text
            >
          {/if}
        {/each}
      {/if}
    </svg>
  {/if}

  <p class="text-sm text-slate-700" aria-live="polite">
    Công thức phân tử <ChemFormula formula={form.formula} class="font-semibold" />. {WAY_NOTES[way]}
  </p>
</div>
