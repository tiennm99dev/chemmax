<script>
  import { formulaParts, prettyFormula } from './formula.js';

  /**
   * A chemical formula with real subscripts and superscripts: "Fe2(SO4)3",
   * "SO4^2-", "CuSO4·5H2O". Screen readers get the Unicode form as label.
   * Text that does not parse is shown as typed.
   *
   * @type {{ formula: string, class?: string }}
   */
  let { formula, class: klass = '' } = $props();

  const parsed = $derived.by(() => {
    try {
      return { parts: formulaParts(formula), label: prettyFormula(formula) };
    } catch {
      return { parts: [{ text: formula, kind: /** @type {const} */ ('normal') }], label: formula };
    }
  });
</script>

<span class="whitespace-nowrap {klass}"
  ><span class="sr-only">{parsed.label}</span><span aria-hidden="true"
    >{#each parsed.parts as p, i (i)}{#if p.kind === 'sub'}<sub>{p.text}</sub
        >{:else if p.kind === 'sup'}<sup>{p.text}</sup>{:else}{p.text}{/if}{/each}</span
  ></span
>
