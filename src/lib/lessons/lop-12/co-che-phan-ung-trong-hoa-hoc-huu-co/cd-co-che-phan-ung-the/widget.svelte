<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import MechanismPlayer from '../_shared/mechanism-player.svelte';
  import { RADICAL_FRAMES, SE_FRAMES, SN1_FRAMES, SN2_FRAMES, rateFactor } from './engine.js';

  const MECHANISMS = [
    { value: 'sn2', label: 'SN2' },
    { value: 'sn1', label: 'SN1' },
    { value: 'sr', label: 'Thế gốc tự do' },
    { value: 'se', label: 'Thế vào vòng thơm' },
  ];
  const FRAMES = { sn2: SN2_FRAMES, sn1: SN1_FRAMES, sr: RADICAL_FRAMES, se: SE_FRAMES };
  const TIMES = [1, 2, 3].map((n) => ({ value: n, label: `×${n}` }));

  let mechanism = $state('sn2');
  let rx = $state(1);
  let nu = $state(1);

  const frames = $derived(FRAMES[/** @type {keyof typeof FRAMES} */ (mechanism)]);
  const nucleophilic = $derived(mechanism === 'sn1' || mechanism === 'sn2');
  const substrate = $derived(mechanism === 'sn1' ? '(CH_3)_3CBr' : 'CH_3Br');

  const rateText = $derived.by(() => {
    if (mechanism !== 'sn1' && mechanism !== 'sn2') return '';
    const n1 = rateFactor('sn1', rx, nu);
    const n2 = rateFactor('sn2', rx, nu);
    const law =
      mechanism === 'sn2'
        ? `$v = k[\\mathrm{${substrate}}][\\mathrm{OH^-}]$`
        : `$v = k[\\mathrm{${substrate}}]$`;
    const n = mechanism === 'sn2' ? n2 : n1;
    const verdict = n === 1 ? 'tốc độ không đổi' : `tốc độ tăng $${n}$ lần`;
    const why =
      mechanism === 'sn1' && nu > 1
        ? ' Tăng $[\\mathrm{OH^-}]$ không làm nhanh hơn vì $\\mathrm{OH^-}$ chỉ vào ở giai đoạn nhanh.'
        : '';
    return `${law}: ${verdict}.${why}`;
  });
</script>

<div class="space-y-3">
  <SegmentedControl label="Cơ chế" options={MECHANISMS} bind:value={mechanism} />

  {#key mechanism}
    <MechanismPlayer {frames} />
  {/key}

  {#if nucleophilic}
    <div class="space-y-2 rounded-xl border border-slate-200 p-3">
      <p class="text-sm font-semibold text-slate-700">So sánh tốc độ khi đổi nồng độ</p>
      <div class="flex flex-wrap gap-3">
        <SegmentedControl label="Nồng độ dẫn xuất halogen" options={TIMES} bind:value={rx} />
        <SegmentedControl label="Nồng độ OH⁻" options={TIMES} bind:value={nu} />
      </div>
      <p class="text-sm text-slate-800" aria-live="polite">
        <LiveRichText text={rateText} />
      </p>
    </div>
  {/if}
</div>
