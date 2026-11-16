<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import Tex from '#lib/components/tex.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CATHODE_ORDER, ELECTROLYTES, discharge, plain } from '../_shared/electrochem.js';

  /** The electrolytes in a fixed mixed order: molten and solution cases alternate. */
  const ORDER = [
    'cuso4-dd',
    'nacl-nc',
    'nacl-dd',
    'agno3-dd',
    'al2o3-nc',
    'na2so4-dd',
    'cucl2-dd',
    'mgcl2-nc',
    'nano3-dd',
  ];
  const ITEMS = ORDER.map((id) => {
    const e = ELECTROLYTES.find((x) => x.id === id);
    if (!e) throw new Error(id);
    return e;
  });

  let index = $state(0);
  /** @type {string | null} */
  let cathodePick = $state(null);
  /** @type {string | null} */
  let anodePick = $state(null);
  let score = $state(0);
  let answered = $state(0);

  const e = $derived(ITEMS[index]);
  const d = $derived(discharge(e));
  const cationProduct = $derived(
    CATHODE_ORDER.find((s) => s.id === e.cation)?.product ?? d.cathode.chosen.product,
  );
  /** Cathode choices: the metal of the cation, or hydrogen from water. */
  const cathodeOptions = $derived([cationProduct, 'H_2']);
  const ANODE_OPTIONS = ['Cl_2', 'O_2'];

  const done = $derived(cathodePick !== null && anodePick !== null);
  const cathodeOk = $derived(cathodePick === d.cathode.chosen.product);
  const anodeOk = $derived(anodePick === d.anode.chosen.product);

  /** @param {'cathode' | 'anode'} side @param {string} value */
  function choose(side, value) {
    if (side === 'cathode') {
      if (cathodePick !== null) return;
      cathodePick = value;
    } else {
      if (anodePick !== null) return;
      anodePick = value;
    }
    if (cathodePick !== null && anodePick !== null) {
      answered += 1;
      if (cathodeOk && anodeOk) score += 1;
    }
  }

  function next() {
    index = (index + 1) % ITEMS.length;
    cathodePick = null;
    anodePick = null;
  }

  const feedback = $derived.by(() => {
    if (!done) return 'Chọn sản phẩm thu được ở cathode và ở anode.';
    const verdict =
      cathodeOk && anodeOk ? 'Đúng cả hai điện cực!' : 'Chưa đúng, xem lại thứ tự điện phân.';
    return `${verdict} Cathode: ${d.cathode.why} Anode: ${d.anode.why}`;
  });

  const CHOICE = `inline-flex min-h-11 min-w-16 items-center justify-center rounded-lg border-2 px-4 py-2 font-semibold transition ${focusRing}`;

  /** @param {string} pick @param {string} value @param {boolean} ok @param {string} right */
  function tone(pick, value, ok, right) {
    if (pick === null) return `${CHOICE} border-slate-300 bg-white hover:bg-slate-100`;
    if (value === right) return `${CHOICE} border-emerald-500 bg-emerald-50 text-emerald-900`;
    if (value === pick && !ok) return `${CHOICE} border-rose-500 bg-rose-50 text-rose-900`;
    return `${CHOICE} border-slate-200 bg-white text-slate-400`;
  }
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-600">
    Câu {index + 1}/{ITEMS.length} · Đúng {score}/{answered}
  </p>
  <div class="rounded-xl bg-slate-50 p-3">
    <p class="font-semibold">
      Điện phân {e.medium === 'molten' ? '' : 'dung dịch '}<Tex math={`\\mathrm{${e.tex}}`} />
      {e.medium === 'molten' ? 'nóng chảy' : ''} với điện cực trơ{e.id === 'nacl-dd'
        ? ', có màng ngăn'
        : ''}.
    </p>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    {#each [{ side: /** @type {const} */ ('cathode'), title: 'Cathode (−) thu được', options: cathodeOptions, pick: cathodePick, ok: cathodeOk, right: d.cathode.chosen.product }, { side: /** @type {const} */ ('anode'), title: 'Anode (+) thu được', options: ANODE_OPTIONS, pick: anodePick, ok: anodeOk, right: d.anode.chosen.product }] as col (col.side)}
      <fieldset class="rounded-xl border border-slate-200 p-3">
        <legend class="px-1 text-sm font-semibold">{col.title}</legend>
        <div class="flex flex-wrap gap-2">
          {#each col.options as value (value)}
            <button
              type="button"
              class={tone(/** @type {string} */ (col.pick), value, col.ok, col.right)}
              aria-pressed={col.pick === value}
              aria-label={`${col.title} ${plain(value)}`}
              aria-disabled={col.pick !== null}
              onclick={() => choose(col.side, value)}
            >
              <Tex math={`\\mathrm{${value}}`} />
            </button>
          {/each}
        </div>
        {#if col.pick !== null}
          <p class="mt-2 overflow-x-auto text-sm">
            <Tex math={col.side === 'cathode' ? d.cathode.chosen.half : d.anode.chosen.half} />
          </p>
        {/if}
      </fieldset>
    {/each}
  </div>

  {#if done}
    <div class="overflow-x-auto rounded-xl border border-slate-200 p-3 text-sm">
      <Tex math={e.overall} display />
    </div>
  {/if}

  <p
    class="rounded-xl px-4 py-3 text-sm font-semibold {done && cathodeOk && anodeOk
      ? 'bg-emerald-50 text-emerald-800'
      : done
        ? 'bg-amber-50 text-amber-900'
        : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    <LiveRichText text={feedback} />
  </p>

  <button type="button" class={button.primary} disabled={!done} onclick={next}>
    Chất điện phân tiếp theo
  </button>
</div>
