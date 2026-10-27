<script>
  import { chemRuns, chemUnicode } from './chem-text.js';

  /**
   * Chemical text with real subscripts: an equation or a condensed
   * structural formula such as "CH2=CH2 + Br2 → BrCH2–CH2Br". Screen readers
   * hear the Unicode form.
   * @type {{ text: string, class?: string }}
   */
  let { text, class: klass = '' } = $props();

  const runs = $derived(chemRuns(text));
</script>

<span class={klass}
  ><span class="sr-only">{chemUnicode(text)}</span><span aria-hidden="true"
    >{#each runs as r, i (i)}{#if r.sub}<sub>{r.text}</sub>{:else}{r.text}{/if}{/each}</span
  ></span
>
