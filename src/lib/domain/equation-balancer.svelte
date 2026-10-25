<script>
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import ChemFormula from './chem-formula.svelte';
  import { balance, isBalanced, parseEquation, tally } from './equation.js';

  /**
   * Balance a chemical equation by hand: − / + buttons (or ↑/↓ on a
   * focused coefficient) set each coefficient, and a table counts the atoms
   * of every element (and the charge, for ions) on both sides, turning green
   * when they match. "Cân bằng giúp em" fills in the answer from the matrix
   * engine; it also explains equations that cannot be balanced.
   *
   * - `equation` (bindable): the equation as typed, e.g. "Fe + O2 -> Fe3O4".
   *   Coefficients written in it are the starting values.
   * - `editable`: show a text box to type another equation.
   * - `solver`: show the "Cân bằng giúp em" button.
   * - `max`: largest coefficient the buttons reach.
   * - `onbalanced`: called with the coefficients when the equation balances.
   *
   * @type {{
   *   equation?: string;
   *   editable?: boolean;
   *   solver?: boolean;
   *   max?: number;
   *   label?: string;
   *   onbalanced?: (coefficients: number[]) => void;
   * }}
   */
  let {
    equation = $bindable('Fe + O2 -> Fe3O4'),
    editable = false,
    solver = true,
    max = 20,
    label = 'Cân bằng phương trình hoá học',
    onbalanced,
  } = $props();

  const inputId = $props.id();
  let draft = $derived(equation);

  const parsed = $derived.by(() => {
    try {
      return { ok: /** @type {const} */ (true), eq: parseEquation(equation) };
    } catch (e) {
      return {
        ok: /** @type {const} */ (false),
        message: e instanceof Error ? e.message : String(e),
      };
    }
  });
  const species = $derived(parsed.ok ? [...parsed.eq.reactants, ...parsed.eq.products] : []);
  const nLeft = $derived(parsed.ok ? parsed.eq.reactants.length : 0);
  let coefficients = $derived(species.map((s) => s.coefficient ?? 1));
  /** @type {string | null} */
  let solverNote = $state(null);

  const rows = $derived(parsed.ok ? tally(parsed.eq, coefficients) : []);
  const done = $derived(parsed.ok && isBalanced(parsed.eq, coefficients));
  const status = $derived.by(() => {
    if (!parsed.ok) return parsed.message;
    if (solverNote) return solverNote;
    if (done) return 'Đã cân bằng: số nguyên tử mỗi nguyên tố ở hai vế bằng nhau.';
    const off = rows
      .filter((r) => r.left !== r.right)
      .map((r) => (r.symbol === 'charge' ? 'điện tích' : r.symbol));
    return `Chưa cân bằng: ${off.join(', ')} ở hai vế còn khác nhau.`;
  });

  /** @param {number} i @param {number} value */
  function setCoefficient(i, value) {
    const next = Math.max(1, Math.min(max, value));
    if (next === coefficients[i]) return;
    coefficients = coefficients.map((c, k) => (k === i ? next : c));
    solverNote = null;
    if (parsed.ok && isBalanced(parsed.eq, coefficients)) onbalanced?.(coefficients);
  }

  function solve() {
    if (!parsed.ok) return;
    const result = balance(parsed.eq);
    if (result.ok) {
      coefficients = result.coefficients;
      solverNote = null;
      onbalanced?.(coefficients);
    } else {
      solverNote = result.message;
    }
  }

  function reset() {
    coefficients = species.map(() => 1);
    solverNote = null;
  }

  /** @param {SubmitEvent} e */
  function submit(e) {
    e.preventDefault();
    equation = draft.trim();
    solverNote = null;
  }

  /** @param {KeyboardEvent} e @param {number} i */
  function onkeydown(e, i) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') setCoefficient(i, coefficients[i] + 1);
    else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') setCoefficient(i, coefficients[i] - 1);
    else return;
    e.preventDefault();
  }

  const step = `inline-flex size-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

<div class="space-y-4" role="group" aria-label={label}>
  {#if editable}
    <form class="flex flex-wrap items-end gap-2" onsubmit={submit}>
      <div class="min-w-0 flex-1 basis-64">
        <label for={inputId} class="mb-1 block text-sm font-semibold text-slate-700">
          Phương trình (gõ -> cho mũi tên, ^ cho điện tích: Fe^3+)
        </label>
        <input
          id={inputId}
          class={textInput}
          bind:value={draft}
          autocomplete="off"
          spellcheck="false"
        />
      </div>
      <button type="submit" class={button.secondary}>Dùng phương trình này</button>
    </form>
  {/if}

  {#if parsed.ok}
    <div class="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-lg">
      {#each species as s, i (i)}
        {#if i === nLeft}<span class="px-1 text-2xl text-slate-500" aria-hidden="true">→</span><span
            class="sr-only">tạo thành</span
          >{:else if i > 0}<span class="text-slate-500">+</span>{/if}
        <span class="inline-flex items-center gap-1 rounded-xl bg-slate-50 px-2 py-1">
          <button
            type="button"
            class={step}
            aria-label="Giảm hệ số của {s.formula}"
            disabled={coefficients[i] <= 1}
            onclick={() => setCoefficient(i, coefficients[i] - 1)}>−</button
          >
          <span
            class="min-w-7 rounded-md text-center font-bold text-indigo-700 tabular-nums {focusRing}"
            role="spinbutton"
            tabindex="0"
            aria-label="Hệ số của {s.formula}"
            aria-valuemin={1}
            aria-valuemax={max}
            aria-valuenow={coefficients[i]}
            onkeydown={(e) => onkeydown(e, i)}>{coefficients[i]}</span
          >
          <button
            type="button"
            class={step}
            aria-label="Tăng hệ số của {s.formula}"
            disabled={coefficients[i] >= max}
            onclick={() => setCoefficient(i, coefficients[i] + 1)}>+</button
          >
          <ChemFormula formula={s.formula} class="ml-1 font-semibold" />
        </span>
      {/each}
    </div>

    <div class="overflow-x-auto">
      <table class="mx-auto min-w-64 text-center text-sm tabular-nums">
        <caption class="mb-1 font-semibold text-slate-700">Đếm nguyên tử ở hai vế</caption>
        <thead>
          <tr class="border-b border-slate-300 text-slate-600">
            <th scope="col" class="px-3 py-1">Nguyên tố</th>
            <th scope="col" class="px-3 py-1">Vế trái</th>
            <th scope="col" class="px-3 py-1">Vế phải</th>
            <th scope="col" class="px-3 py-1"><span class="sr-only">Khớp</span></th>
          </tr>
        </thead>
        <tbody>
          {#each rows as r (r.symbol)}
            {@const ok = r.left === r.right}
            <tr class="border-b border-slate-100 {ok ? 'text-emerald-700' : 'text-rose-700'}">
              <th scope="row" class="px-3 py-1 font-semibold">
                {r.symbol === 'charge' ? 'Điện tích' : r.symbol}
              </th>
              <td class="px-3 py-1">{r.left}</td>
              <td class="px-3 py-1">{r.right}</td>
              <td class="px-3 py-1">{ok ? '✓' : '✗'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  <p
    class="rounded-xl px-4 py-3 text-sm font-semibold {done
      ? 'bg-emerald-50 text-emerald-800'
      : parsed.ok && !solverNote
        ? 'bg-slate-100 text-slate-700'
        : 'bg-amber-50 text-amber-900'}"
    aria-live="polite"
  >
    {status}
  </p>

  {#if parsed.ok}
    <div class="flex flex-wrap gap-2">
      {#if solver}
        <button type="button" class={button.quiet} onclick={solve}>Cân bằng giúp em</button>
      {/if}
      <button type="button" class={button.quiet} onclick={reset}>Đặt lại hệ số 1</button>
    </div>
  {/if}
</div>
