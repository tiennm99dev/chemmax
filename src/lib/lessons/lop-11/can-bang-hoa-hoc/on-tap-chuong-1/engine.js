/**
 * Predicting where an equilibrium shifts: each reaction records what Le
 * Chatelier's principle needs (the sign of the forward enthalpy, moles of gas
 * on each side, the species and their state), and the expected direction of
 * every case is worked out from that rather than written by hand.
 */

/** @typedef {'thuan' | 'nghich' | 'khong'} Shift */

/**
 * @typedef {object} Species
 * @property {string} tex
 * @property {'left' | 'right'} side
 * @property {boolean} [solid]
 */

/**
 * @typedef {object} Reaction
 * @property {string} id
 * @property {string} tex
 * @property {boolean} exothermic forward direction releases heat
 * @property {number} gasLeft
 * @property {number} gasRight
 * @property {Species[]} species
 */

/** @type {Reaction[]} */
export const REACTIONS = [
  {
    id: 'nh3',
    tex: '\\mathrm{N_2(g)} + \\mathrm{3H_2(g)} \\rightleftharpoons \\mathrm{2NH_3(g)}',
    exothermic: true,
    gasLeft: 4,
    gasRight: 2,
    species: [
      { tex: '\\mathrm{N_2}', side: 'left' },
      { tex: '\\mathrm{NH_3}', side: 'right' },
    ],
  },
  {
    id: 'so3',
    tex: '\\mathrm{2SO_2(g)} + \\mathrm{O_2(g)} \\rightleftharpoons \\mathrm{2SO_3(g)}',
    exothermic: true,
    gasLeft: 3,
    gasRight: 2,
    species: [
      { tex: '\\mathrm{O_2}', side: 'left' },
      { tex: '\\mathrm{SO_3}', side: 'right' },
    ],
  },
  {
    id: 'no2',
    tex: '\\mathrm{2NO_2(g)} \\rightleftharpoons \\mathrm{N_2O_4(g)}',
    exothermic: true,
    gasLeft: 2,
    gasRight: 1,
    species: [
      { tex: '\\mathrm{NO_2}', side: 'left' },
      { tex: '\\mathrm{N_2O_4}', side: 'right' },
    ],
  },
  {
    id: 'hi',
    tex: '\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons \\mathrm{2HI(g)}',
    exothermic: true,
    gasLeft: 2,
    gasRight: 2,
    species: [
      { tex: '\\mathrm{H_2}', side: 'left' },
      { tex: '\\mathrm{HI}', side: 'right' },
    ],
  },
  {
    id: 'caco3',
    tex: '\\mathrm{CaCO_3(s)} \\rightleftharpoons \\mathrm{CaO(s)} + \\mathrm{CO_2(g)}',
    exothermic: false,
    gasLeft: 0,
    gasRight: 1,
    species: [
      { tex: '\\mathrm{CaCO_3}', side: 'left', solid: true },
      { tex: '\\mathrm{CO_2}', side: 'right' },
    ],
  },
  {
    id: 'co',
    tex: '\\mathrm{C(s)} + \\mathrm{CO_2(g)} \\rightleftharpoons \\mathrm{2CO(g)}',
    exothermic: false,
    gasLeft: 1,
    gasRight: 2,
    species: [
      { tex: '\\mathrm{CO_2}', side: 'left' },
      { tex: '\\mathrm{CO}', side: 'right' },
    ],
  },
];

/**
 * @typedef {{ kind: 'heat' | 'cool' | 'compress' | 'expand' | 'catalyst' }
 *   | { kind: 'add' | 'remove', species: Species }} Stress
 */

/**
 * Direction a reaction shifts under a stress, by Le Chatelier's principle.
 * @param {Reaction} reaction
 * @param {Stress} stress
 * @returns {Shift}
 */
export function shiftOf(reaction, stress) {
  switch (stress.kind) {
    case 'heat':
      return reaction.exothermic ? 'nghich' : 'thuan';
    case 'cool':
      return reaction.exothermic ? 'thuan' : 'nghich';
    case 'compress':
    case 'expand': {
      if (reaction.gasLeft === reaction.gasRight) return 'khong';
      const fewerOnRight = reaction.gasRight < reaction.gasLeft;
      return (stress.kind === 'compress') === fewerOnRight ? 'thuan' : 'nghich';
    }
    case 'catalyst':
      return 'khong';
    case 'add':
      if (stress.species.solid) return 'khong';
      return stress.species.side === 'left' ? 'thuan' : 'nghich';
    case 'remove':
      if (stress.species.solid) return 'khong';
      return stress.species.side === 'left' ? 'nghich' : 'thuan';
  }
}

/**
 * The stress as a sentence for the question.
 * @param {Stress} stress
 */
export function stressText(stress) {
  switch (stress.kind) {
    case 'heat':
      return 'Tăng nhiệt độ của hệ.';
    case 'cool':
      return 'Giảm nhiệt độ của hệ.';
    case 'compress':
      return 'Nén hệ để tăng áp suất.';
    case 'expand':
      return 'Tăng thể tích bình để giảm áp suất.';
    case 'catalyst':
      return 'Thêm chất xúc tác.';
    case 'add':
      return `Thêm $${stress.species.tex}$ vào hệ.`;
    case 'remove':
      return `Lấy bớt $${stress.species.tex}$ ra khỏi hệ.`;
  }
}

/** @type {Record<Shift, string>} */
const SHIFT_NAMES = {
  thuan: 'chiều thuận',
  nghich: 'chiều nghịch',
  khong: 'không chuyển dịch',
};

/**
 * Why the equilibrium answers the stress as it does.
 * @param {Reaction} reaction
 * @param {Stress} stress
 */
export function whyText(reaction, stress) {
  const shift = shiftOf(reaction, stress);
  const name = SHIFT_NAMES[shift];
  switch (stress.kind) {
    case 'heat':
      return `Chiều thuận ${reaction.exothermic ? 'toả nhiệt' : 'thu nhiệt'}. Tăng nhiệt độ thì cân bằng chuyển dịch theo chiều thu nhiệt, là ${name}.`;
    case 'cool':
      return `Chiều thuận ${reaction.exothermic ? 'toả nhiệt' : 'thu nhiệt'}. Giảm nhiệt độ thì cân bằng chuyển dịch theo chiều toả nhiệt, là ${name}.`;
    case 'compress':
    case 'expand': {
      const gases = `Vế trái có $${reaction.gasLeft}$ mol khí, vế phải có $${reaction.gasRight}$ mol khí.`;
      if (shift === 'khong')
        return `${gases} Số mol khí hai vế bằng nhau nên áp suất không làm chuyển dịch cân bằng.`;
      return stress.kind === 'compress'
        ? `${gases} Tăng áp suất thì cân bằng chuyển dịch theo chiều giảm số mol khí, là ${name}.`
        : `${gases} Giảm áp suất thì cân bằng chuyển dịch theo chiều tăng số mol khí, là ${name}.`;
    }
    case 'catalyst':
      return 'Chất xúc tác làm tăng tốc độ cả hai chiều như nhau nên không làm chuyển dịch cân bằng.';
    case 'add':
      if (stress.species.solid)
        return 'Chất rắn không có trong biểu thức $K_C$, nên thêm chất rắn không làm chuyển dịch cân bằng.';
      return `Thêm $${stress.species.tex}$ thì cân bằng chuyển dịch theo chiều làm giảm chất đó, là ${name}.`;
    case 'remove':
      if (stress.species.solid)
        return 'Chất rắn không có trong biểu thức $K_C$, nên bớt chất rắn không làm chuyển dịch cân bằng.';
      return `Lấy bớt $${stress.species.tex}$ thì cân bằng chuyển dịch theo chiều tạo lại chất đó, là ${name}.`;
  }
}

/** @typedef {{ id: string, reaction: Reaction, stress: Stress, shift: Shift, text: string, why: string }} ShiftCase */

/**
 * Every question: each reaction under each stress.
 * @returns {ShiftCase[]}
 */
export function allCases() {
  /** @type {ShiftCase[]} */
  const cases = [];
  for (const reaction of REACTIONS) {
    /** @type {Stress[]} */
    const stresses = [
      { kind: 'heat' },
      { kind: 'cool' },
      { kind: 'compress' },
      { kind: 'expand' },
      { kind: 'catalyst' },
      ...reaction.species.flatMap((species) => [
        /** @type {Stress} */ ({ kind: 'add', species }),
        /** @type {Stress} */ ({ kind: 'remove', species }),
      ]),
    ];
    stresses.forEach((stress, i) => {
      cases.push({
        id: `${reaction.id}-${i}`,
        reaction,
        stress,
        shift: shiftOf(reaction, stress),
        text: stressText(stress),
        why: whyText(reaction, stress),
      });
    });
  }
  return cases;
}

/** A round has this many questions. */
export const ROUND_SIZE = 8;

/**
 * A round holding each of the three answers, from the shuffled cases.
 * @param {ShiftCase[]} shuffled
 * @returns {ShiftCase[]}
 */
export function roundFrom(shuffled) {
  const nothing = shuffled.filter((c) => c.shift === 'khong').slice(0, 2);
  const rest = shuffled.filter((c) => c.shift !== 'khong').slice(0, ROUND_SIZE - nothing.length);
  return shuffled.filter((c) => nothing.includes(c) || rest.includes(c));
}
