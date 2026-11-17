import { describe, expect, it } from 'vitest';
import { TARGETS, describe as describeBuild, judge, partsOf, targetName } from './engine.js';
import { nameComplex } from '../_shared/complex-data.js';

describe('complex names', () => {
  it('names the complexes of the lesson the IUPAC way', () => {
    /** @type {Array<[string, Record<string, number>, string, string, number]>} */
    const cases = [
      ['Ag1', { NH3: 2 }, 'diamminesilver(I)', '[Ag(NH3)2]^+', 2],
      ['Cu2', { NH3: 4 }, 'tetraamminecopper(II)', '[Cu(NH3)4]^2+', 4],
      ['Fe2', { CN: 6 }, 'hexacyanidoferrate(II)', '[Fe(CN)6]^4-', 6],
      ['Zn2', { OH: 4 }, 'tetrahydroxidozincate(II)', '[Zn(OH)4]^2-', 4],
      ['Pt2', { Cl: 2, NH3: 2 }, 'diamminedichloridoplatinum(II)', '[PtCl2(NH3)2]', 4],
      ['Co3', { Cl: 2, en: 2 }, 'dichloridobis(ethylenediamine)cobalt(III)', '[CoCl2(en)2]^+', 6],
      ['Cr3', { C2O4: 3 }, 'trioxalatochromate(III)', '[Cr(C2O4)3]^3-', 6],
      ['Cu2', { NH3: 4, H2O: 2 }, 'tetraamminediaquacopper(II)', '[Cu(NH3)4(H2O)2]^2+', 6],
      ['Ni2', { en: 3 }, 'tris(ethylenediamine)nickel(II)', '[Ni(en)3]^2+', 6],
      ['Pt2', { Cl: 2, en: 1 }, 'dichlorido(ethylenediamine)platinum(II)', '[PtCl2(en)]', 4],
      ['Co3', { NH3: 6 }, 'hexaamminecobalt(III)', '[Co(NH3)6]^3+', 6],
    ];
    const bad = [];
    for (const [c, counts, name, formula, cn] of cases) {
      const n = nameComplex(c, partsOf(counts));
      if (n.name !== name || n.formula !== formula || n.cn !== cn)
        bad.push([n.name, n.formula, n.cn]);
    }
    expect(bad).toEqual([]);
  });

  it('refuses an empty or overfull coordination sphere', () => {
    expect(describeBuild('Cu2', {}).ok).toBe(false);
    expect(describeBuild('Co3', { en: 4 }).ok).toBe(false);
    const ok = describeBuild('Co3', { en: 3 });
    expect(ok.ok).toBe(true);
    expect(ok.text).toContain('bát diện');
  });
});

describe('build from a name', () => {
  it('accepts every target built right and flags the first mistake', () => {
    const bad = [];
    for (const t of TARGETS) {
      const counts = Object.fromEntries(t.parts.map((p) => [p.ligand, p.count]));
      if (!judge(t, t.centre, counts).ok) bad.push(targetName(t));
    }
    expect(bad).toEqual([]);
    const cu = TARGETS[1];
    expect(judge(cu, 'Zn2', { NH3: 4 }).ok).toBe(false);
    expect(judge(cu, 'Cu2', { NH3: 6 }).text).toContain('tiền tố');
    expect(judge(TARGETS[7], 'Fe2', { F: 6 }).text).toContain('(III)');
    expect(judge(cu, 'Cu2', { NH3: 4, H2O: 2 }).text).toContain('aqua');
  });
});
