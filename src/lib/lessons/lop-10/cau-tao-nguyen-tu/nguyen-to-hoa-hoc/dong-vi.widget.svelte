<script>
  import Tex from '#lib/components/tex.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import AtomModel from '#lib/domain/atom-model.svelte';
  import { ISOTOPE_SETS, notationTex, particles } from './engine.js';

  const ELEMENT_OPTIONS = ISOTOPE_SETS.map((s, i) => ({ value: i, label: s.name }));
  let which = $state(0);
  let pickedA = $state(1);

  const set = $derived(ISOTOPE_SETS[Number(which)]);
  const isotope = $derived(set.isotopes.find((i) => i.a === Number(pickedA)) ?? set.isotopes[0]);
  const count = $derived(particles(set.z, isotope.a));
  const isotopeOptions = $derived(
    set.isotopes.map((i) => ({
      value: i.a,
      label: `${set.symbol}-${i.a}${i.name ? ` (${i.name})` : ''}`,
    })),
  );

  /** @param {string | number} value */
  function pickElement(value) {
    pickedA = ISOTOPE_SETS[Number(value)].isotopes[0].a;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nguyên tố"
    options={ELEMENT_OPTIONS}
    bind:value={which}
    onchange={pickElement}
  />
  <SegmentedControl label="Đồng vị" options={isotopeOptions} bind:value={pickedA} />

  <div class="grid gap-4 sm:grid-cols-[1fr_15rem] sm:items-center">
    <AtomModel z={set.z} massNumber={isotope.a} configuration={false} caption={false} size={260} />
    <div class="space-y-3">
      <p class="text-center text-3xl">
        <Tex math={notationTex(set.symbol, set.z, isotope.a)} />
      </p>
      <dl
        class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-3 text-sm"
        aria-live="polite"
      >
        <dt class="text-slate-500">Số proton</dt>
        <dd class="font-semibold text-rose-700 tabular-nums">Z = {count.protons}</dd>
        <dt class="text-slate-500">Số electron</dt>
        <dd class="font-semibold text-sky-700 tabular-nums">{count.electrons}</dd>
        <dt class="text-slate-500">Số neutron</dt>
        <dd class="font-semibold tabular-nums">
          N = A − Z = {isotope.a} − {set.z} = {count.neutrons}
        </dd>
      </dl>
    </div>
  </div>

  <table class="w-full text-sm">
    <caption class="mb-1 text-left font-semibold text-slate-700">
      Các đồng vị của {set.name}
    </caption>
    <thead>
      <tr class="text-left text-slate-500">
        <th class="py-1 font-medium">Đồng vị</th>
        <th class="py-1 font-medium">Z</th>
        <th class="py-1 font-medium">N</th>
        <th class="py-1 font-medium">A</th>
      </tr>
    </thead>
    <tbody>
      {#each set.isotopes as i (i.a)}
        <tr class={i.a === isotope.a ? 'bg-indigo-50 font-semibold' : ''}>
          <td class="py-1">{set.symbol}-{i.a}</td>
          <td class="py-1 text-rose-700">{set.z}</td>
          <td class="py-1">{i.a - set.z}</td>
          <td class="py-1">{i.a}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <p class="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900" aria-live="polite">
    Mọi đồng vị của {set.name} đều có {set.z} proton (cùng số hiệu nguyên tử Z = {set.z}), nên cùng
    là một nguyên tố; chúng chỉ khác nhau về số neutron, do đó khác số khối A.
  </p>
</div>
