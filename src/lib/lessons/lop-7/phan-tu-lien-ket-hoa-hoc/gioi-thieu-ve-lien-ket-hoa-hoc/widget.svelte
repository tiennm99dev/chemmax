<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import { element } from '#lib/domain/elements.js';
  import { prettyFormula } from '#lib/domain/formula.js';
  import { atomColor } from '#lib/domain/molecule.js';
  import {
    COVALENT,
    IONIC_PAIRS,
    MAX_PAIRS,
    canShareMore,
    covalentMessage,
    covalentState,
    ionicElectrons,
    ionicMessage,
    ionicState,
    loneSpots,
    sharedSpots,
  } from './engine.js';

  let mode = $state('ion');

  /* Ionic bond: move electrons from the metal atom to the non-metal atom. */
  let pairId = $state('nacl');
  let moved = $state(0);
  const pair = $derived(IONIC_PAIRS.find((p) => p.id === pairId) ?? IONIC_PAIRS[0]);
  const ion = $derived(ionicState(pair, moved));
  const GEO = { metal: { cx: 92, cy: 100 }, nonmetal: { cx: 268, cy: 100 }, r0: 22, dr: 15 };
  const dots = $derived(ionicElectrons(pair, moved, GEO));
  const ionText = $derived(ionicMessage(pair, moved));
  const shellsOf = (/** @type {number[]} */ s) => s.map((_, k) => GEO.r0 + k * GEO.dr);

  /** @param {string | number} id */
  function pickPair(id) {
    pairId = String(id);
    moved = 0;
  }

  /* Covalent bond: choose how many electron pairs each bond shares. */
  let molId = $state('h2o');
  const mol = $derived(COVALENT.find((m) => m.id === molId) ?? COVALENT[0]);
  /** @type {number[]} */
  let pairs = $state([0, 0]);
  const cov = $derived(covalentState(mol, pairs));
  const covText = $derived(covalentMessage(mol, pairs));

  /** @param {string | number} id */
  function pickMolecule(id) {
    molId = String(id);
    const m = COVALENT.find((x) => x.id === molId) ?? COVALENT[0];
    pairs = m.bonds.map(() => 0);
  }

  /** @param {number} k @param {number} delta */
  function share(k, delta) {
    if (delta > 0 && !canShareMore(mol, pairs, k)) return;
    pairs[k] = Math.max(0, Math.min(MAX_PAIRS, pairs[k] + delta));
  }

  const drawing = $derived.by(() => {
    const lone = mol.atoms.flatMap((a, i) => {
      const angles = mol.bonds
        .filter((b) => b.a === i || b.b === i)
        .map((b) => {
          const o = mol.atoms[b.a === i ? b.b : b.a];
          return Math.atan2(o.y - a.y, o.x - a.x);
        });
      return loneSpots(a, angles, cov.atoms[i].lone, 36);
    });
    const shared = mol.bonds.flatMap((b, k) =>
      sharedSpots(mol.atoms[b.a], mol.atoms[b.b], pairs[k], 13),
    );
    return { lone, shared };
  });

  const STATUS = { thieu: 'text-amber-800', du: 'text-emerald-700', thua: 'text-rose-700' };
  const step = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại liên kết"
    options={[
      { value: 'ion', label: 'Liên kết ion' },
      { value: 'cht', label: 'Liên kết cộng hoá trị' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'ion'}
    <SegmentedControl
      label="Cặp nguyên tử"
      options={IONIC_PAIRS.map((p) => ({ value: p.id, label: p.product }))}
      value={pairId}
      onchange={pickPair}
    />
    <svg
      viewBox="0 0 360 215"
      class="mx-auto block w-full max-w-md select-none"
      role="img"
      aria-label="Nguyên tử {ion.metal.symbol} với các lớp electron {ion.metal.shells.join(
        ', ',
      )} và {ion.nonmetal.symbol} với các lớp electron {ion.nonmetal.shells.join(', ')}"
    >
      {#each [{ c: GEO.metal, p: ion.metal }, { c: GEO.nonmetal, p: ion.nonmetal }] as side, s (s)}
        {#each shellsOf(side.p.shells) as r, k (k)}
          <circle cx={side.c.cx} cy={side.c.cy} {r} fill="none" stroke="#cbd5e1" />
        {/each}
        <circle cx={side.c.cx} cy={side.c.cy} r="13" fill="#fecaca" stroke="#be123c" />
        <text
          x={side.c.cx}
          y={side.c.cy + 4}
          text-anchor="middle"
          font-size="10"
          font-weight="700"
          fill="#881337">+{side.p.z}</text
        >
        <text
          x={side.c.cx}
          y="200"
          text-anchor="middle"
          font-size="16"
          font-weight="700"
          fill={side.p.charge > 0 ? '#be123c' : side.p.charge < 0 ? '#0369a1' : '#0f172a'}
          >{side.p.symbol}
          <tspan font-size="12" font-weight="400" fill="#475569">({side.p.shells.join(', ')})</tspan
          ></text
        >
      {/each}
      {#each dots as d (d.id)}
        <circle
          class="electron"
          r="4.5"
          cx="0"
          cy="0"
          style:transform="translate({d.x}px, {d.y}px)"
          fill={d.moved ? '#f59e0b' : '#0284c7'}
          stroke={d.moved ? '#92400e' : 'none'}
        />
      {/each}
      {#if ion.done}
        <text x="180" y="104" text-anchor="middle" font-size="12" fill="#334155">⟵ hút nhau ⟶</text>
      {/if}
    </svg>
    <p class="text-sm text-slate-700" aria-live="polite">{ionText}</p>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        disabled={ion.done}
        onclick={() => (moved = Math.min(pair.transfer, moved + 1))}
        >Chuyển 1 electron sang {element(pair.nonmetal)?.symbol}</button
      >
      <button type="button" class={button.quiet} disabled={moved === 0} onclick={() => (moved = 0)}
        >Làm lại</button
      >
    </div>
  {:else}
    <SegmentedControl
      label="Phân tử"
      options={COVALENT.map((m) => ({ value: m.id, label: prettyFormula(m.formula) }))}
      value={molId}
      onchange={pickMolecule}
    />
    <svg
      viewBox="0 0 360 220"
      class="mx-auto block w-full max-w-md select-none"
      role="img"
      aria-label="Phân tử {mol.name}: {mol.bonds
        .map(
          (b, k) =>
            `${mol.atoms[b.a].el} và ${mol.atoms[b.b].el} dùng chung ${pairs[k]} cặp electron`,
        )
        .join('; ')}"
    >
      {#each mol.bonds as b, k (k)}
        {#if pairs[k] > 0}
          <line
            x1={mol.atoms[b.a].x}
            y1={mol.atoms[b.a].y}
            x2={mol.atoms[b.b].x}
            y2={mol.atoms[b.b].y}
            stroke="#c7d2fe"
            stroke-width={8 + 10 * pairs[k]}
            stroke-linecap="round"
          />
        {/if}
      {/each}
      {#each mol.atoms as a, i (i)}
        <circle
          cx={a.x}
          cy={a.y}
          r="24"
          fill={atomColor(a.el)}
          stroke={cov.atoms[i].status === 'du' ? '#059669' : '#0f172a'}
          stroke-width={cov.atoms[i].status === 'du' ? 3 : 1.5}
        />
        <text
          x={a.x}
          y={a.y + 5}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill={a.el === 'H' ? '#0f172a' : '#fff'}>{a.el}</text
        >
      {/each}
      {#each drawing.lone as d, i (i)}
        <circle cx={d.x} cy={d.y} r="4" fill="#0284c7" />
      {/each}
      {#each drawing.shared as d, i (i)}
        <circle cx={d.x} cy={d.y} r="4" fill="#f59e0b" stroke="#92400e" />
      {/each}
    </svg>

    <div class="grid gap-2 sm:grid-cols-2">
      {#each mol.bonds as b, k (k)}
        {@const p = mol.atoms[b.a].el}
        {@const q = mol.atoms[b.b].el}
        <div class="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2">
          <span class="text-sm">
            <span class="font-semibold">{p} – {q}</span>:
            <span class="tabular-nums">{pairs[k]}</span> cặp dùng chung
          </span>
          <span class="flex gap-1">
            <button
              type="button"
              class={step}
              aria-label="Bớt một cặp electron dùng chung giữa {p} và {q}"
              disabled={pairs[k] === 0}
              onclick={() => share(k, -1)}>−</button
            >
            <button
              type="button"
              class={step}
              aria-label="Thêm một cặp electron dùng chung giữa {p} và {q}"
              disabled={!canShareMore(mol, pairs, k)}
              onclick={() => share(k, 1)}>+</button
            >
          </span>
        </div>
      {/each}
    </div>

    <ul class="flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {#each cov.atoms as a, i (i)}
        <li class={STATUS[a.status]}>
          Nguyên tử {i + 1} ({a.el}): {a.count}/{a.full} electron
        </li>
      {/each}
    </ul>
    <p
      class="text-sm {cov.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}"
      aria-live="polite"
    >
      {covText}
    </p>
    <p class="text-xs text-slate-500">
      Chấm xanh: electron riêng của mỗi nguyên tử; chấm vàng: electron dùng chung. Phân tử đang xét:
      <ChemFormula formula={mol.formula} />.
    </p>
  {/if}
</div>

<style>
  .electron {
    transition: transform 0.8s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .electron {
      transition: none;
    }
  }
</style>
