<script>
  import { condensedParts } from './engine.js';

  /**
   * A condensed structural formula with real subscripts. Screen readers get the
   * plain text, since they read a chain of <sub> elements one piece at a time.
   * @type {{ text: string }}
   */
  let { text } = $props();
</script>

<span class="whitespace-nowrap"
  ><span class="sr-only">{text}</span><span aria-hidden="true"
    >{#each condensedParts(text) as p, i (i)}{#if p.sub}<sub>{p.text}</sub
        >{:else}{p.text}{/if}{/each}</span
  ></span
>
