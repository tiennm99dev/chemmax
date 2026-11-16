<script>
  import Tex from '#lib/components/tex.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { polymerTex } from '../_shared/polymers.js';
  import { FEEDS, METHOD_NAMES, M_WATER, feed, join } from './engine.js';

  /** @typedef {import('../_shared/polymers.js').Method} Method */

  let feedId = $state(/** @type {string} */ ('ethylene'));
  let method = $state(/** @type {Method} */ ('trung-hop'));
  let units = $state(3);

  const f = $derived(feed(feedId));
  const o = $derived(join(feedId, method, units));
  const kinds = $derived(f.molecules.length);

  const feedOptions = FEEDS.map((x) => ({ value: x.id, label: x.label }));
  const methodOptions = Object.entries(METHOD_NAMES).map(([value, label]) => ({ value, label }));

  const CHIP = [
    'border-teal-500 bg-teal-50 text-teal-900',
    'border-amber-500 bg-amber-50 text-amber-900',
  ];

  /** @param {number} v */
  const mass = (v) => formatNumber(v, 1);
</script>

<div class="space-y-4">
  <div class="space-y-3">
    <SegmentedControl label="Monomer" options={feedOptions} bind:value={feedId} />
    <div class="flex flex-wrap items-end gap-4">
      <SegmentedControl label="Phương pháp" options={methodOptions} bind:value={method} />
      <Stepper label="Số mắt xích" bind:value={units} min={1} max={4} />
    </div>
  </div>

  <div class="rounded-xl bg-slate-50 p-3">
    <p class="mb-2 text-sm font-semibold text-slate-700">
      Trước phản ứng: {o.before.length} phân tử monomer
    </p>
    <ul class="flex flex-wrap gap-2" aria-label="Các phân tử monomer riêng rẽ">
      {#each o.before as m, i (i)}
        <li class="rounded-lg border-2 px-2 py-1 text-sm font-semibold {CHIP[i % kinds]}">{m}</li>
      {/each}
    </ul>

    <p class="my-2 text-center text-xl text-slate-500" aria-hidden="true">↓</p>

    {#if o.ok && o.polymer}
      <p class="mb-2 text-sm font-semibold text-slate-700">
        Sau phản ứng: một mạch {o.units} mắt xích{o.water > 0
          ? ` và ${o.water} phân tử nước tách ra`
          : ''}
      </p>
      <ol
        class="flex flex-wrap items-center gap-y-2 rounded-lg border-2 border-indigo-400 bg-white p-2"
        aria-label="Mạch polymer gồm {o.before.length} gốc monomer nối liên tiếp"
      >
        {#each o.chain as m, i (i)}
          <li class="flex items-center">
            <span class="text-slate-500" aria-hidden="true">–</span>
            <span class="rounded-md border px-1.5 py-0.5 text-xs font-semibold {CHIP[i % kinds]}"
              >{m}</span
            >
          </li>
        {/each}
        <li class="text-slate-500" aria-hidden="true">–</li>
      </ol>
      {#if o.water > 0}
        <ul class="mt-2 flex flex-wrap gap-1" aria-label="{o.water} phân tử nước tách ra">
          {#each Array.from({ length: o.water }, (_, i) => i) as i (i)}
            <li class="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">
              H₂O
            </li>
          {/each}
        </ul>
      {/if}
      <p class="mt-3 text-sm">
        Polymer tạo thành: <Tex math={polymerTex(o.polymer)} />
      </p>
    {:else}
      <p
        class="rounded-lg border-2 border-dashed border-rose-300 bg-white p-3 text-sm text-rose-800"
      >
        Không tạo được mạch polymer bằng phản ứng {METHOD_NAMES[method]}: các phân tử vẫn đứng riêng
        rẽ.
      </p>
    {/if}
  </div>

  {#if o.ok && o.polymer}
    <div class="overflow-x-auto rounded-xl border border-slate-200 p-3 text-sm">
      <Tex math={o.equation} display />
    </div>
    <dl class="grid gap-x-4 gap-y-1 rounded-xl border border-slate-200 p-3 text-sm sm:grid-cols-3">
      <div>
        <dt class="inline font-semibold">Monomer đưa vào:</dt>
        <dd class="inline tabular-nums">{mass(o.monomerMass)}</dd>
      </div>
      <div>
        <dt class="inline font-semibold">Mạch polymer:</dt>
        <dd class="inline tabular-nums">{mass(o.chainMass)}</dd>
      </div>
      <div>
        <dt class="inline font-semibold">Nước tách ra:</dt>
        <dd class="inline tabular-nums">{mass(o.water * M_WATER)}</dd>
      </div>
    </dl>
    <p class="text-xs text-slate-600">
      Các số trên là tổng phân tử khối, bỏ qua hai đầu mạch như cách viết phương trình trong SGK. Số
      mắt xích trong một phân tử polymer thật là hệ số polymer hoá <i>n</i>, thường lên tới hàng
      nghìn.
    </p>
  {/if}

  <FeedbackNote tone={o.ok ? 'ok' : 'warn'} text={o.message} />
</div>
