<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { arrowView, dragView, viewPoint } from '#lib/geom-engine/solid.js';
  import { PLACE_LABELS, ionName, latticeIons, neighbourText, neighbours } from './engine.js';

  /** How a drag or an arrow turns the view: the near side follows it. */
  const TURN = { yawRate: 0.6, pitchRate: 0.6 };

  /** @typedef {import('./engine.js').Place} Place */

  const W = 340;
  const SPACING = 62;
  const ions = latticeIons();
  const placeOptions = /** @type {Place[]} */ (['tam', 'mat', 'canh', 'dinh']).map((value) => ({
    value,
    label: PLACE_LABELS[value],
  }));

  let view = $state({ yaw: 28, pitch: 24 });
  let selected = $state(ions.findIndex((i) => i.place === 'tam'));
  let place = $state(/** @type {Place} */ ('tam'));
  /** @type {{ x: number, y: number } | null} */
  let press = null;
  /** The last press turned the view, so its click must not also select an ion. */
  let turned = false;

  const ion = $derived(ions[selected]);
  const near = $derived(neighbours(ion, ions));
  const drawn = $derived(
    ions
      .map((p, i) => {
        const v = viewPoint({ x: p.x * SPACING, y: p.y * SPACING, z: p.z * SPACING }, view);
        return { i, p, x: W / 2 + v.x, y: W / 2 + v.y, depth: v.depth };
      })
      .sort((a, b) => a.depth - b.depth),
  );
  const at = $derived(Object.fromEntries(drawn.map((d) => [d.i, d])));
  const edges = $derived(
    ions.flatMap((p, i) =>
      neighbours(p, ions)
        .map((q) => ions.indexOf(q))
        .filter((j) => j > i)
        .map((j) => ({ i, j, lit: i === selected || j === selected })),
    ),
  );

  /** @param {Place | string | number} next */
  function choosePlace(next) {
    selected = ions.findIndex((p) => p.place === next);
  }

  /** @param {number} i */
  function pick(i) {
    selected = i;
    place = ions[i].place;
  }

  /** @param {PointerEvent} e */
  function down(e) {
    press = { x: e.clientX, y: e.clientY };
    turned = false;
  }

  /** @param {PointerEvent} e */
  function moveView(e) {
    if (!press) return;
    if (e.buttons === 0) {
      press = null;
      return;
    }
    const dx = e.clientX - press.x;
    const dy = e.clientY - press.y;
    if (!turned && Math.hypot(dx, dy) < 4) return;
    if (!turned) {
      turned = true;
      // Redrawing moves the circles in the DOM, which would drop a pointer held on one.
      /** @type {SVGSVGElement} */ (e.currentTarget).setPointerCapture(e.pointerId);
    }
    press.x = e.clientX;
    press.y = e.clientY;
    view = dragView(view, dx, dy, TURN);
  }

  /** @param {KeyboardEvent} e */
  function key(e) {
    const next = arrowView(view, e.key, e.shiftKey, TURN);
    if (!next) return;
    e.preventDefault();
    view = next;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chọn vị trí của ion trong khối"
    options={placeOptions}
    bind:value={place}
    onchange={choosePlace}
  />

  <svg
    viewBox="0 0 {W} {W}"
    class="mx-auto block w-full max-w-sm rounded-xl bg-slate-50 select-none {focusRing}"
    style:touch-action="none"
    role="slider"
    aria-valuemin="-180"
    aria-valuemax="180"
    aria-valuenow={Math.round(view.yaw)}
    aria-valuetext="Đã xoay {Math.round(view.yaw)} độ"
    tabindex="0"
    aria-label="Mô hình tinh thể NaCl. Kéo hoặc dùng phím mũi tên để xoay. Ion đang chọn: {ionName(
      ion.kind,
    )}, có {near.length} ion trái dấu gần nhất trong khối."
    onpointerdown={down}
    onpointermove={moveView}
    onpointerup={() => (press = null)}
    onpointercancel={() => (press = null)}
    onkeydown={key}
  >
    {#each edges as edge (`${edge.i}-${edge.j}`)}
      <line
        x1={at[edge.i].x}
        y1={at[edge.i].y}
        x2={at[edge.j].x}
        y2={at[edge.j].y}
        stroke={edge.lit ? '#d97706' : '#cbd5e1'}
        stroke-width={edge.lit ? 3.5 : 1.5}
      />
    {/each}
    {#each drawn as d (d.i)}
      {@const lit = near.includes(d.p)}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <circle
        cx={d.x}
        cy={d.y}
        r={d.p.kind === 'Cl' ? 19 : 11}
        fill={d.p.kind === 'Cl' ? '#34d399' : '#818cf8'}
        stroke={d.i === selected ? '#0f172a' : lit ? '#d97706' : '#475569'}
        stroke-width={d.i === selected || lit ? 3.5 : 1}
        role="button"
        tabindex="-1"
        aria-label="Ion {ionName(d.p.kind)}"
        style="cursor:pointer; outline:none"
        onclick={() => {
          if (!turned) pick(d.i);
        }}
      />
    {/each}
  </svg>

  <div class="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
    <span class="flex items-center gap-2">
      <span class="inline-block size-4 rounded-full bg-indigo-400"></span>Ion Na⁺
    </span>
    <span class="flex items-center gap-2">
      <span class="inline-block size-5 rounded-full bg-emerald-400"></span>Ion Cl⁻
    </span>
  </div>

  <FeedbackNote tone="info" text={neighbourText(ion, ions)} />
</div>
