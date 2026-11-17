/**
 * Generated drill skills for the chapter review: the mass of a metal that
 * dissolved in dilute HCl from the volume of hydrogen, the molar mass of an
 * unknown metal of valence II, the metal deposited on a bar dipped into a
 * salt solution from the change in the bar's mass, and the metal obtained
 * by reducing an oxide with a given yield. Amounts are drawn so every answer
 * is a short exact decimal.
 */
import { pick } from '#lib/core/drill.js';
import { numTex, tidy } from '#lib/core/number-format.js';

/** Molar volume of a gas at standard conditions (đkc: 25 °C, 1 bar), L/mol. */
export const MOLAR_VOLUME = 24.79;

/** Metals that dissolve in dilute HCl, with their molar mass and charge. */
const ACID_METALS = [
  { id: 'Mg', name: 'magnesium', molar: 24, charge: 2 },
  { id: 'Zn', name: 'zinc', molar: 65, charge: 2 },
  { id: 'Fe', name: 'iron', molar: 56, charge: 2 },
  { id: 'Al', name: 'aluminium', molar: 27, charge: 3 },
];

/** "2Al + 6HCl → 2AlCl3 + 3H2" in TeX. @param {(typeof ACID_METALS)[number]} m */
const acidTex = (m) =>
  m.charge === 3
    ? '2\\mathrm{Al} + 6\\mathrm{HCl} \\longrightarrow 2\\mathrm{AlCl_3} + 3\\mathrm{H_2}'
    : `\\mathrm{${m.id}} + 2\\mathrm{HCl} \\longrightarrow \\mathrm{${m.id}Cl_2} + \\mathrm{H_2}`;

/** @type {import('#lib/core/drill.js').Skill} */
export const acidMassSkill = {
  id: 'kim-loai-tac-dung-acid',
  label: 'Kim loại tác dụng với dung dịch acid',
  make(rand) {
    const m = pick(rand, ACID_METALS);
    // Moles of metal in tenths, so the hydrogen comes out in whole twentieths.
    const nM = pick(rand, m.charge === 3 ? [0.1, 0.2, 0.3] : [0.1, 0.15, 0.2, 0.25, 0.3]);
    const nH2 = tidy((nM * m.charge) / 2);
    const V = tidy(nH2 * MOLAR_VOLUME);
    const answer = tidy(nM * m.molar);
    return {
      prompt: `Hoà tan hết một lượng ${m.id} trong dung dịch HCl dư, thu được $${numTex(V)}$ L khí $\\mathrm{H_2}$ (đkc). Tính khối lượng ${m.id} đã phản ứng (g).`,
      answer,
      unit: 'g',
      hints: [`$n_{\\mathrm{H_2}} = \\dfrac{V}{24{,}79}$.`, `Viết phương trình: $${acidTex(m)}$.`],
      steps: [
        `$n_{\\mathrm{H_2}} = \\dfrac{${numTex(V)}}{24{,}79} = ${numTex(nH2)}$ mol.`,
        `$${acidTex(m)}$, nên $n_{\\mathrm{${m.id}}} = ${m.charge === 3 ? `\\dfrac{2}{3} \\cdot ${numTex(nH2)}` : numTex(nH2)} = ${numTex(nM)}$ mol.`,
        `$m = ${numTex(nM)} \\cdot ${m.molar} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** @type {import('#lib/core/drill.js').Skill} */
export const unknownMetalSkill = {
  id: 'xac-dinh-kim-loai',
  label: 'Xác định kim loại',
  make(rand) {
    const m = pick(
      rand,
      ACID_METALS.filter((x) => x.charge === 2),
    );
    const n = pick(rand, [0.1, 0.15, 0.2, 0.25, 0.3]);
    const mass = tidy(n * m.molar);
    const V = tidy(n * MOLAR_VOLUME);
    return {
      prompt: `Hoà tan hoàn toàn $${numTex(mass)}$ g kim loại M (hoá trị II) trong dung dịch $\\mathrm{H_2SO_4}$ loãng dư, thu được $${numTex(V)}$ L khí $\\mathrm{H_2}$ (đkc). Tính khối lượng mol của M (g/mol).`,
      answer: m.molar,
      unit: 'g/mol',
      hints: [
        '$\\mathrm{M} + \\mathrm{H_2SO_4} \\longrightarrow \\mathrm{MSO_4} + \\mathrm{H_2}$: số mol M bằng số mol $\\mathrm{H_2}$.',
        '$M = \\dfrac{m}{n}$.',
      ],
      steps: [
        `$n_{\\mathrm{M}} = n_{\\mathrm{H_2}} = \\dfrac{${numTex(V)}}{24{,}79} = ${numTex(n)}$ mol.`,
        `$M = \\dfrac{${numTex(mass)}}{${numTex(n)}} = ${m.molar}$ g/mol: M là ${m.name} (${m.id}).`,
      ],
    };
  },
};

/**
 * A bar of one metal in the salt of another, with how the bar's mass changes
 * per mole of the bar's metal that dissolves.
 */
const BARS = [
  {
    barId: 'Fe',
    depId: 'Cu',
    salt: 'CuSO_4',
    eq: '\\mathrm{Fe} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{FeSO_4} + \\mathrm{Cu}',
    perMol: '64 - 56 = 8',
    change: 8,
    gained: 64,
    ratio: 1,
    moles: [0.05, 0.1, 0.15, 0.2, 0.25],
  },
  {
    barId: 'Zn',
    depId: 'Cu',
    salt: 'CuSO_4',
    eq: '\\mathrm{Zn} + \\mathrm{CuSO_4} \\longrightarrow \\mathrm{ZnSO_4} + \\mathrm{Cu}',
    perMol: '65 - 64 = 1',
    change: -1,
    gained: 64,
    ratio: 1,
    moles: [0.1, 0.2, 0.3, 0.4, 0.5],
  },
  {
    barId: 'Cu',
    depId: 'Ag',
    salt: 'AgNO_3',
    eq: '\\mathrm{Cu} + 2\\mathrm{AgNO_3} \\longrightarrow \\mathrm{Cu(NO_3)_2} + 2\\mathrm{Ag}',
    perMol: '2 \\cdot 108 - 64 = 152',
    change: 152,
    gained: 108,
    ratio: 2,
    moles: [0.01, 0.02, 0.05, 0.1],
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const barSkill = {
  id: 'thanh-kim-loai',
  label: 'Thanh kim loại nhúng vào dung dịch muối',
  make(rand) {
    const b = pick(rand, BARS);
    const n = pick(rand, b.moles);
    const delta = tidy(n * Math.abs(b.change));
    const nDep = tidy(n * b.ratio);
    const answer = tidy(nDep * b.gained);
    const grew = b.change > 0;
    return {
      prompt: `Nhúng một thanh ${b.barId} vào dung dịch $\\mathrm{${b.salt}}$. Sau một thời gian lấy thanh ra, rửa nhẹ, làm khô, thấy khối lượng thanh ${grew ? 'tăng' : 'giảm'} $${numTex(delta)}$ g so với ban đầu. Tính khối lượng ${b.depId} đã bám vào thanh (g), coi toàn bộ kim loại sinh ra đều bám vào thanh.`,
      answer,
      unit: 'g',
      hints: [
        `Viết phương trình: $${b.eq}$.`,
        `Mỗi mol ${b.barId} tan ra, khối lượng thanh ${grew ? 'tăng' : 'giảm'} $${b.perMol}$ g.`,
      ],
      steps: [
        `$${b.eq}$; cứ 1 mol ${b.barId} phản ứng, thanh ${grew ? 'tăng' : 'giảm'} $${b.perMol}$ g.`,
        `$n_{\\mathrm{${b.barId}}} = \\dfrac{${numTex(delta)}}{${Math.abs(b.change)}} = ${numTex(n)}$ mol${b.ratio === 1 ? '' : `, $n_{\\mathrm{${b.depId}}} = 2 \\cdot ${numTex(n)} = ${numTex(nDep)}$ mol`}.`,
        `$m_{\\mathrm{${b.depId}}} = ${numTex(nDep)} \\cdot ${b.gained} = ${numTex(answer)}$ g.`,
      ],
    };
  },
};

/** Oxides reduced at high temperature, as in the book's nhiệt luyện. */
const OXIDES = [
  {
    oxide: 'Fe_2O_3',
    molar: 160,
    metal: 'Fe',
    atoms: 2,
    metalMolar: 56,
    eq: '\\mathrm{Fe_2O_3} + 3\\mathrm{CO} \\xrightarrow{t^\\circ} 2\\mathrm{Fe} + 3\\mathrm{CO_2}',
    reducer: 'CO',
  },
  {
    oxide: 'CuO',
    molar: 80,
    metal: 'Cu',
    atoms: 1,
    metalMolar: 64,
    eq: '\\mathrm{CuO} + \\mathrm{H_2} \\xrightarrow{t^\\circ} \\mathrm{Cu} + \\mathrm{H_2O}',
    reducer: 'H_2',
  },
];

/** @type {import('#lib/core/drill.js').Skill} */
export const reductionSkill = {
  id: 'nhiet-luyen',
  label: 'Tách kim loại bằng phương pháp nhiệt luyện',
  make(rand) {
    const o = pick(rand, OXIDES);
    const n = pick(rand, [0.1, 0.2, 0.25, 0.3, 0.5]);
    const yieldPct = pick(rand, [100, 90, 80, 75]);
    const mass = tidy(n * o.molar);
    const nMetal = tidy(n * o.atoms);
    const full = tidy(nMetal * o.metalMolar);
    const answer = tidy((full * yieldPct) / 100);
    return {
      prompt: `Khử $${numTex(mass)}$ g $\\mathrm{${o.oxide}}$ bằng khí $\\mathrm{${o.reducer}}$ dư ở nhiệt độ cao${yieldPct === 100 ? ', phản ứng xảy ra hoàn toàn' : ` với hiệu suất $${yieldPct}\\%$`}. Tính khối lượng ${o.metal} thu được (g).`,
      answer,
      unit: 'g',
      hints: [
        `Viết phương trình: $${o.eq}$.`,
        yieldPct === 100
          ? `$n_{\\mathrm{${o.metal}}} = ${o.atoms === 1 ? '' : `${o.atoms} \\cdot `}n_{\\mathrm{${o.oxide}}}$.`
          : 'Tính khối lượng kim loại theo lí thuyết rồi nhân với hiệu suất.',
      ],
      steps: [
        `$n_{\\mathrm{${o.oxide}}} = \\dfrac{${numTex(mass)}}{${o.molar}} = ${numTex(n)}$ mol.`,
        `$${o.eq}$, nên $n_{\\mathrm{${o.metal}}} = ${numTex(nMetal)}$ mol, $m = ${numTex(nMetal)} \\cdot ${o.metalMolar} = ${numTex(full)}$ g${yieldPct === 100 ? '' : ' (lí thuyết)'}.`,
        ...(yieldPct === 100
          ? []
          : [
              `Với hiệu suất $${yieldPct}\\%$: $m = ${numTex(full)} \\cdot ${yieldPct}\\% = ${numTex(answer)}$ g.`,
            ]),
      ],
    };
  },
};

export const REVIEW_SKILLS = [acidMassSkill, unknownMetalSkill, barSkill, reductionSkill];
