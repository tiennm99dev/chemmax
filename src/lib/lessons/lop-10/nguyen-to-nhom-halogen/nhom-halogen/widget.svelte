<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import ChemFormula from '#lib/domain/chem-formula.svelte';
  import EquationLine from '#lib/domain/equation-line.svelte';
  import TestTube from '../_shared/test-tube.svelte';
  import {
    PAIRS,
    SALT_COLOR,
    WATERS,
    mix,
    pairKey,
    predictionReply,
    starchColor,
    starchReply,
  } from './engine.js';

  const WATER_OPTIONS = WATERS.map((w) => ({ value: w.formula, label: `Nước ${w.name}` }));
  const SUMMARY =
    'Em đã thử đủ các cặp: $\\mathrm{Cl_2}$ đẩy được $\\mathrm{Br_2}$ và $\\mathrm{I_2}$, $\\mathrm{Br_2}$ chỉ đẩy được $\\mathrm{I_2}$, còn $\\mathrm{I_2}$ không đẩy được chất nào. Vậy tính oxi hoá giảm dần: $\\mathrm{Cl_2} > \\mathrm{Br_2} > \\mathrm{I_2}$.';
  const SALT_OPTIONS = WATERS.map((w) => ({ value: w.salt, label: w.salt }));

  let water = $state('Cl2');
  let salt = $state('NaBr');
  /** @type {boolean | null} */
  let predicted = $state(null);
  let starch = $state(false);
  /** @type {Record<string, boolean>} */
  let tried = $state({});

  const source = $derived(WATERS.find((w) => w.formula === water) ?? WATERS[0]);
  const mixture = $derived(mix(water, salt));
  const mixed = $derived(predicted !== null);
  const reply = $derived(predicted === null ? null : predictionReply(mixture, predicted));
  const tubeColor = $derived(!mixed ? SALT_COLOR : starch ? starchColor(mixture) : mixture.color);
  const tubeLabel = $derived(
    !mixed
      ? `Ống dung dịch ${salt} không màu, chưa nhỏ nước ${source.name}`
      : `Ống sau khi nhỏ nước ${source.name} vào dung dịch ${salt}: màu ${starch && mixture.hasIodine ? 'xanh tím' : mixture.colorName}`,
  );
  const triedCount = $derived(Object.keys(tried).length);
  const finished = $derived(triedCount === PAIRS.length);

  function reset() {
    predicted = null;
    starch = false;
  }

  /** @param {boolean} expected */
  function predict(expected) {
    if (mixed) return;
    predicted = expected;
    tried = { ...tried, [pairKey(water, salt)]: mixture.reacts };
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nhỏ từ ống nhỏ giọt"
    options={WATER_OPTIONS}
    value={water}
    onchange={(choice) => {
      water = String(choice);
      reset();
    }}
  />
  <SegmentedControl
    label="Vào ống nghiệm chứa dung dịch"
    options={SALT_OPTIONS}
    value={salt}
    onchange={(choice) => {
      salt = String(choice);
      reset();
    }}
  />

  <div class="grid grid-cols-3 items-start gap-2 text-center text-sm text-slate-700">
    <div>
      <TestTube liquid={source.water} label="Nước {source.name} màu {source.waterName}" />
      <p>Nước {source.name}<br />({source.waterName})</p>
    </div>
    <div>
      <TestTube liquid={SALT_COLOR} label="Dung dịch {salt} không màu" />
      <p>Dung dịch <ChemFormula formula={salt} /><br />(không màu)</p>
    </div>
    <div>
      <TestTube liquid={tubeColor} label={tubeLabel} drip={mixed ? 1 : 0} />
      <p class="font-semibold">
        {#if mixed}Sau khi trộn<br />({starch && mixture.hasIodine
            ? 'xanh tím'
            : mixture.colorName}){:else}Chưa trộn<br />&nbsp;{/if}
      </p>
    </div>
  </div>

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">
      Dự đoán trước khi trộn: nước {source.name} có đẩy được halogen ra khỏi <ChemFormula
        formula={salt}
      /> không?
    </p>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={predicted === true ? button.primary : button.secondary}
        aria-pressed={predicted === true}
        onclick={() => predict(true)}>Có phản ứng</button
      >
      <button
        type="button"
        class={predicted === false ? button.primary : button.secondary}
        aria-pressed={predicted === false}
        onclick={() => predict(false)}>Không phản ứng</button
      >
      <button
        type="button"
        class={button.quiet}
        disabled={!mixed}
        aria-pressed={starch}
        onclick={() => (starch = !starch)}>{starch ? 'Bỏ hồ tinh bột' : 'Thêm hồ tinh bột'}</button
      >
    </div>
  </div>

  {#if reply}
    <FeedbackNote tone={reply.tone} text={reply.text} />
    {#if mixture.equation}
      <p class="rounded-xl bg-emerald-50 p-3 text-center text-lg">
        <EquationLine text={mixture.equation} />
      </p>
    {/if}
    {#if starch}
      <FeedbackNote tone="info" text={starchReply(mixture, water)} />
    {/if}
  {:else}
    <FeedbackNote tone="info" text="Chọn một cặp chất, rồi dự đoán để trộn hai dung dịch." />
  {/if}

  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-center text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">
        Kết quả đã thử: {triedCount}/{PAIRS.length} cặp
      </caption>
      <thead>
        <tr>
          <th scope="col" class="border border-slate-300 p-2">Nhỏ vào</th>
          {#each WATERS as w (w.salt)}
            <th scope="col" class="border border-slate-300 p-2"><ChemFormula formula={w.salt} /></th
            >
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each WATERS as w (w.formula)}
          <tr>
            <th scope="row" class="border border-slate-300 p-2"
              ><ChemFormula formula={w.formula} /></th
            >
            {#each WATERS as s (s.salt)}
              {@const result = tried[pairKey(w.formula, s.salt)]}
              <td
                class="border border-slate-300 p-2 {result === true
                  ? 'bg-emerald-50 font-semibold text-emerald-800'
                  : 'text-slate-600'}"
              >
                {result === undefined ? '?' : result ? 'có' : 'không'}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  {#if finished}
    <FeedbackNote tone="ok" text={SUMMARY} />
  {/if}
</div>
