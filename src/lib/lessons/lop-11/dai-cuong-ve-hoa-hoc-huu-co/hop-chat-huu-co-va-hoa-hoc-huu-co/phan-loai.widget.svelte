<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { prettyFormula } from '#lib/domain/formula.js';

  const BINS = [
    { id: 'hydrocarbon', label: 'Hydrocarbon' },
    { id: 'dan-xuat', label: 'Dẫn xuất của hydrocarbon' },
    { id: 'vo-co', label: 'Không phải hợp chất hữu cơ' },
  ];

  const HYDRO = 'Chỉ gồm hai nguyên tố C và H.';
  const CARD_DATA = [
    { formula: 'CH4', bin: 'hydrocarbon', why: HYDRO },
    { formula: 'C2H4', bin: 'hydrocarbon', why: HYDRO },
    { formula: 'C2H2', bin: 'hydrocarbon', why: HYDRO },
    { formula: 'C6H6', bin: 'hydrocarbon', why: HYDRO },
    { formula: 'CH3Cl', bin: 'dan-xuat', why: 'Có thêm chlorine: dẫn xuất halogen.' },
    { formula: 'C2H5OH', bin: 'dan-xuat', why: 'Có thêm oxygen, nhóm –OH: alcohol.' },
    { formula: 'CH3COOH', bin: 'dan-xuat', why: 'Có nhóm –COOH: carboxylic acid.' },
    { formula: 'CH3NH2', bin: 'dan-xuat', why: 'Có thêm nitrogen, nhóm –NH₂: amine.' },
    { formula: 'C6H12O6', bin: 'dan-xuat', why: 'Glucose có thêm oxygen, ngoài C và H.' },
    { formula: 'CO2', bin: 'vo-co', why: 'Oxide của carbon được xếp vào hợp chất vô cơ.' },
    { formula: 'CaCO3', bin: 'vo-co', why: 'Muối carbonate được xếp vào hợp chất vô cơ.' },
    { formula: 'NaCN', bin: 'vo-co', why: 'Muối cyanide được xếp vào hợp chất vô cơ.' },
  ];

  const CARDS = shuffled(
    CARD_DATA.map((c) => ({
      id: c.formula,
      label: prettyFormula(c.formula),
      bin: c.bin,
      why: c.why,
    })),
    11,
  );
</script>

<CardSorter cards={CARDS} bins={BINS} label="Phân loại các hợp chất của carbon" hintOnWrong />
