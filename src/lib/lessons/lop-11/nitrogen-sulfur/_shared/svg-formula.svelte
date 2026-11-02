<script>
  import { formulaParts, prettyFormula } from '#lib/domain/formula.js';

  /**
   * A chemical formula drawn as SVG text, with real subscripts and
   * superscripts. Screen readers hear the Unicode form.
   *
   * @type {{ formula: string, x: number, y: number, size?: number, fill?: string }}
   */
  let { formula, x, y, size = 14, fill = '#1e293b' } = $props();

  const small = $derived(size * 0.72);
  const shift = { sub: 0.28, sup: -0.38, normal: 0 };

  /** Each part with the baseline step that takes it from the last one. */
  const parts = $derived.by(() => {
    let at = 0;
    return formulaParts(formula).map((p) => {
      const to = shift[p.kind] * size;
      const dy = to - at;
      at = to;
      return { ...p, dy };
    });
  });
</script>

<text
  {x}
  {y}
  {fill}
  font-size={size}
  font-weight="700"
  text-anchor="middle"
  aria-label={prettyFormula(formula)}
>
  {#each parts as p, i (i)}<tspan dy={p.dy} font-size={p.kind === 'normal' ? size : small}
      >{p.text}</tspan
    >{/each}
</text>
