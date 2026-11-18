<!-- Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again. -->
<script>
  import Ruler from './ruler.svelte';

  /**
   * A named segment lying on a centimetre ruler: its two ends, named, above
   * the marks `from` and `to`.
   * @type {{ name: string, from: number, to: number }}
   */
  let { name, from, to } = $props();

  /** Ruler marks, in SVG units per centimetre. */
  const UNIT = 26;
  const RULER_X = 20;
  const RULER_CM = 12;

  const ends = $derived.by(() => {
    const [p, q] = [...name];
    return [
      { x: RULER_X + from * UNIT, name: p },
      { x: RULER_X + to * UNIT, name: q },
    ];
  });
</script>

<svg
  viewBox="0 0 382 110"
  class="mx-auto block w-full max-w-md select-none"
  role="img"
  aria-label="Đoạn thẳng {name} đặt trên thước: đầu {ends[0].name} ở vạch {from}, đầu {ends[1]
    .name} ở vạch {to}."
>
  <Ruler x={RULER_X} y={60} cm={RULER_CM} unit={UNIT} fontSize={18} />
  <line x1={ends[0].x} y1="48" x2={ends[1].x} y2="48" stroke="#3730a3" stroke-width="4" />
  {#each ends as d (d.name)}
    <circle cx={d.x} cy="48" r="5" fill="#1e293b" />
    <line x1={d.x} y1="48" x2={d.x} y2="60" stroke="#1e293b" stroke-dasharray="3 3" />
    <text x={d.x} y="34" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b"
      >{d.name}</text
    >
  {/each}
</svg>
