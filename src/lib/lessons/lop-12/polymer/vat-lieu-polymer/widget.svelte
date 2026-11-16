<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { polymer } from '../_shared/polymers.js';

  /** The six resin codes printed on recyclable plastics. */
  const CODES = [
    {
      no: 1,
      abbr: 'PET',
      bin: 'pet',
      why: 'Số 1 là poly(ethylene terephthalate): chai nước, chai nước ngọt.',
    },
    {
      no: 2,
      abbr: 'HDPE',
      bin: 'pe',
      why: 'HDPE là polyethylene tỉ trọng cao: can, chai đựng sữa, chất tẩy rửa.',
    },
    { no: 3, abbr: 'PVC', bin: 'pvc', why: 'Số 3 là poly(vinyl chloride): ống nước, vỏ dây điện.' },
    {
      no: 4,
      abbr: 'LDPE',
      bin: 'pe',
      why: 'LDPE là polyethylene tỉ trọng thấp: túi, màng bọc thực phẩm.',
    },
    { no: 5, abbr: 'PP', bin: 'pp', why: 'Số 5 là polypropylene: hộp đựng thực phẩm, nắp chai.' },
    { no: 6, abbr: 'PS', bin: 'ps', why: 'Số 6 là polystyrene: hộp xốp, cốc dùng một lần.' },
  ];

  const BIN_IDS = ['pe', 'pp', 'pvc', 'ps', 'pet'];

  const BINS = BIN_IDS.map((id) => {
    const p = polymer(id);
    return { id, label: `${p.abbr}: ${p.name}` };
  });

  /** @param {string} id */
  const monomerCard = (id) => {
    const p = polymer(id);
    const tex = p.monomers.map((m) => `$\\mathrm{${m.tex}}$`).join(' và ');
    return {
      id: `monomer-${id}`,
      label: `Monomer ${tex}`,
      bin: id,
      why: `${p.abbr} được tổng hợp từ ${p.monomers.map((m) => m.name).join(' và ')}.`,
    };
  };

  const CARDS = shuffled(
    [
      ...CODES.map((c) => ({
        id: `code-${c.no}`,
        label: `Ký hiệu tái chế số ${c.no} (${c.abbr})`,
        bin: c.bin,
        why: c.why,
      })),
      ...BIN_IDS.map(monomerCard),
    ],
    12,
  );

  /** @param {string} id */
  const codeOf = (id) => CODES.find((c) => `code-${c.no}` === id);
</script>

{#snippet face(/** @type {import('#lib/core/card-sorter.js').SortCard} */ c)}
  {@const code = codeOf(c.id)}
  {#if code}
    <span class="flex items-center gap-2">
      <svg viewBox="0 0 40 38" class="h-9 w-9 shrink-0" aria-hidden="true">
        <path
          d="M20 3 L37 33 L3 33 Z"
          fill="none"
          stroke="#047857"
          stroke-width="3"
          stroke-linejoin="round"
          stroke-dasharray="26 4"
        />
        <text x="20" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46"
          >{code.no}</text
        >
      </svg>
      <span class="sr-only">Ký hiệu tái chế số {code.no},</span>
      <span class="font-bold tracking-wide">{code.abbr}</span>
    </span>
  {:else}
    <LiveRichText text={c.label} />
  {/if}
{/snippet}

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Đặt mỗi ký hiệu tái chế và mỗi monomer vào thùng của chất dẻo tương ứng.
  </p>
  <CardSorter
    cards={CARDS}
    bins={BINS}
    {face}
    hintOnWrong
    label="Phân loại ký hiệu tái chế và monomer theo chất dẻo"
  />
</div>
