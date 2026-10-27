<script>
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { terms } from './reaction.js';

  /** @typedef {import('./reaction.js').Term} Term */

  /**
   * A chemical equation with real subscripts, from book-style text such as
   * "Fe + 2HCl → FeCl2 + H2↑". Screen readers hear the Unicode form.
   * @type {{ text: string }}
   */
  let { text } = $props();

  const eq = $derived(terms(text));
  const spoken = $derived(
    [eq.left, eq.right]
      .map((side) =>
        side
          .map(
            (t) => `${t.coefficient > 1 ? t.coefficient : ''}${prettyFormula(t.formula)}${t.mark}`,
          )
          .join(' + '),
      )
      .join(` ${eq.arrow} `),
  );
</script>

{#snippet side(/** @type {Term[]} */ list)}
  {#each list as t, i (i)}{#if i > 0}<span class="mx-1">+</span>{/if}<span
      >{t.coefficient > 1 ? t.coefficient : ''}<ChemFormula formula={t.formula} />{t.mark}</span
    >{/each}
{/snippet}

<span
  class="inline-flex flex-wrap items-baseline gap-y-1 font-medium"
  role="img"
  aria-label={spoken}
>
  <span aria-hidden="true" class="contents">
    {@render side(eq.left)}<span class="mx-2">{eq.arrow}</span>{@render side(eq.right)}
  </span>
</span>
