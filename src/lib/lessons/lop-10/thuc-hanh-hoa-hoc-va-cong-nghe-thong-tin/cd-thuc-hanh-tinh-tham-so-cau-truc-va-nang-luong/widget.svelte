<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { MINUS, formatFixed } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { PARAMS, PARAM_KINDS, relativeError, worstRow } from './engine.js';

  const KIND_OPTIONS = Object.entries(PARAM_KINDS).map(([value, k]) => ({
    value,
    label: k.label,
  }));

  let kindKey = $state('length');
  /** @type {string | null} */
  let guess = $state(null);

  const kindId = $derived(/** @type {import('./engine.js').ParamKind} */ (kindKey));
  const kind = $derived(PARAM_KINDS[kindId]);
  const rows = $derived(PARAMS[kindId]);
  const worst = $derived(worstRow(rows));
  const scaleTop = $derived(Math.max(...rows.map(relativeError), 0.1));

  /** @param {number} v */
  const value = (v) => {
    const text = formatFixed(Math.abs(v), kind.digits);
    return v < 0 ? `${MINUS}${text}` : text;
  };
  const pct = (/** @type {number} */ v) => formatFixed(v, 2);

  const feedback = $derived.by(() => {
    if (guess === null) {
      return `Đọc cột ${kind.label.toLowerCase()} rồi đoán: phân tử nào có sai số tương đối lớn nhất? Chọn nút ở đầu dòng.`;
    }
    const picked = rows.find((r) => r.id === guess);
    if (!picked) return '';
    if (picked.id !== worst.id) {
      return `Sai số của phân tử này là ${pct(relativeError(picked))}%. Vẫn còn phân tử lệch nhiều hơn, hãy thử lại.`;
    }
    return kindId === 'heat'
      ? `Đúng: sai số lên đến ${pct(relativeError(picked))}%. AM1 dự đoán hình học tốt hơn nhiều so với nhiệt tạo thành của các phân tử rất nhỏ.`
      : `Đúng: sai số lớn nhất là ${pct(relativeError(picked))}%, vẫn khá nhỏ. Phương pháp bán kinh nghiệm cho hình học khá sát thực nghiệm.`;
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tham số so sánh"
    options={KIND_OPTIONS}
    bind:value={kindKey}
    onchange={() => (guess = null)}
  />

  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] text-sm">
      <caption class="pb-2 text-left text-xs text-slate-600">
        {kind.label} ({kind.unit}): tính bằng AM1 và đo bằng thực nghiệm.
      </caption>
      <thead>
        <tr class="text-left text-slate-600">
          <th class="py-1 pr-2 font-semibold">Phân tử</th>
          <th class="py-1 pr-2 text-right font-semibold">AM1</th>
          <th class="py-1 pr-2 text-right font-semibold">Thực nghiệm</th>
          <th class="py-1 font-semibold">Sai số</th>
        </tr>
      </thead>
      <tbody class="tabular-nums">
        {#each rows as row (row.id)}
          {@const err = relativeError(row)}
          <tr class="border-t border-slate-200">
            <td class="py-1 pr-2">
              <button
                type="button"
                class="min-h-11 w-full rounded-lg border px-2 text-left {focusRing} {guess ===
                row.id
                  ? row.id === worst.id
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-amber-500 bg-amber-50'
                  : 'border-slate-300 bg-white'}"
                aria-pressed={guess === row.id}
                onclick={() => (guess = row.id)}
              >
                <ChemFormula formula={row.formula} class="font-semibold" />
                <span class="block text-xs text-slate-600">{row.what}</span>
              </button>
            </td>
            <td class="py-1 pr-2 text-right">{value(row.calc)}</td>
            <td class="py-1 pr-2 text-right">{value(row.exp)}</td>
            <td class="py-1">
              <span class="block text-xs">{pct(err)}%</span>
              <span class="block h-2 w-16 rounded bg-slate-100" aria-hidden="true">
                <span
                  class="block h-2 rounded bg-indigo-500"
                  style:width="{(err / scaleTop) * 100}%"
                ></span>
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote
    tone={guess === null ? 'info' : guess === worst.id ? 'ok' : 'warn'}
    text={feedback}
  />
</div>
