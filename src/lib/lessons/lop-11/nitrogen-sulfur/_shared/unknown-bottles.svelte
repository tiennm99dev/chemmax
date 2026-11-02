<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import TestTube from '#lib/domain/test-tube.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import ChemFormula from '#lib/domain/chem-formula.svelte';

  /**
   * @typedef {{ liquid: string, precipitate?: string | null, amount?: number,
   *   strip?: string | null, note: string, equation?: string | null }} TubeLook
   * @typedef {{ id: string, formula: string, target: boolean }} Bottle
   */

  /**
   * Unlabelled bottles to identify: the learner pours a reagent into a tube
   * from each one, watches what happens, marks the bottles holding the wanted
   * ion and checks. Reagents in `reagents` are poured in order: a reagent
   * whose `needs` was not poured first stays locked.
   *
   * @type {{
   *   deal: (seed: number) => Bottle[];
   *   reagents: Array<{ id: string, formula: string, label: string, needs?: string }>;
   *   look: (bottle: Bottle, poured: string[]) => TubeLook;
   *   question: string;
   *   done: string;
   * }}
   */
  let { deal, reagents, look, question, done } = $props();

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  let seed = $state(1);
  const bottles = $derived(deal(seed));
  /** @type {Record<string, string[]>} */
  let poured = $state({});
  /** @type {Record<string, boolean>} */
  let marked = $state({});
  /** @type {boolean | null} */
  let verdict = $state(null);

  /** @param {string} id */
  const pouredIn = (id) => poured[id] ?? [];

  /**
   * @param {string} bottle
   * @param {{ id: string, needs?: string }} reagent
   */
  const canPour = (bottle, reagent) =>
    !pouredIn(bottle).includes(reagent.id) &&
    (!reagent.needs || pouredIn(bottle).includes(reagent.needs));

  /**
   * @param {string} bottle
   * @param {string} reagent
   */
  function pour(bottle, reagent) {
    poured = { ...poured, [bottle]: [...pouredIn(bottle), reagent] };
    verdict = null;
  }

  /** @param {string} id */
  function toggle(id) {
    marked = { ...marked, [id]: !marked[id] };
    verdict = null;
  }

  function check() {
    verdict = bottles.every((b) => Boolean(marked[b.id]) === b.target);
  }

  function newRound() {
    seed += 1;
    poured = {};
    marked = {};
    verdict = null;
  }

  const allTested = $derived(bottles.every((b) => pouredIn(b.id).length > 0));
  const note = $derived.by(
    /** @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */ () => {
      if (verdict === true) return { tone: 'ok', text: done };
      if (verdict === false) {
        return {
          tone: 'warn',
          text: allTested
            ? 'Chưa đúng. Đọc lại dấu hiệu ở từng ống rồi chọn lại.'
            : 'Chưa đúng. Hãy thử thuốc thử với cả những lọ chưa thử.',
        };
      }
      return { tone: 'info', text: question };
    },
  );
</script>

<div class="space-y-4">
  <ul class="grid grid-cols-2 gap-3 md:grid-cols-4">
    {#each bottles as b, i (b.id)}
      {@const seen = look(b, pouredIn(b.id))}
      <li class="space-y-2 rounded-xl border border-slate-200 p-2 text-center">
        <div class="font-bold">
          Lọ {LETTERS[i]}
          {#if verdict !== null}
            <span class="block text-sm font-semibold text-slate-600"
              ><ChemFormula formula={b.formula} /></span
            >
          {/if}
        </div>
        <TestTube
          liquid={seen.liquid}
          precipitate={seen.precipitate ?? null}
          amount={seen.amount ?? 0}
          drip={pouredIn(b.id).length}
          label="Ống thử của lọ {LETTERS[i]}: {seen.note}"
        />
        {#if seen.strip}
          <div class="mx-auto h-2 w-12 rounded" style:background-color={seen.strip}></div>
        {/if}
        <p class="min-h-16 text-xs text-slate-700">{seen.note}</p>
        {#if seen.equation}
          <p class="overflow-x-auto text-xs"><EquationLine text={seen.equation} /></p>
        {/if}
        <div class="flex flex-col gap-1">
          {#each reagents as r (r.id)}
            <button
              type="button"
              class={button.secondary}
              disabled={!canPour(b.id, r)}
              onclick={() => pour(b.id, r.id)}
              aria-label="{r.label} vào ống của lọ {LETTERS[i]}"
            >
              <span>+ <ChemFormula formula={r.formula} /></span>
            </button>
          {/each}
        </div>
        <label class="flex min-h-11 cursor-pointer items-center justify-center gap-2 text-sm">
          <input
            type="checkbox"
            class="h-5 w-5"
            checked={Boolean(marked[b.id])}
            onchange={() => toggle(b.id)}
          />
          Có ion cần tìm
        </label>
      </li>
    {/each}
  </ul>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={check}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={newRound}>Bộ lọ mới</button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
