// Synced from tiennm99dev/mathmax by scripts/sync-core.sh. Do not edit it here; change it in mathmax and sync again.
import { describe, it, expect } from 'vitest';
import { htmlText, richText, spokenUnits, texHtml, texText } from './tex-text.js';
import { spokenMath } from './speech-text.js';
import { renderRichText } from './render-content.server.js';

describe('texText', () => {
  it.each([
    ['\\sqrt{144}', 'căn bậc hai của 144'],
    ['\\sqrt{a+b}', 'căn bậc hai của (a+b)'],
    ['\\sqrt[3]{8}', 'căn bậc ba của 8'],
    ['\\sqrt[5]{8}', 'căn bậc 5 của 8'],
    ['10\\times', '10×'],
    ['-1', 'âm 1'],
    ['-37{,}7', 'âm 37,7'],
    ['x = -2', 'x= âm 2'],
    ['3 - (-2)', '3 trừ (âm 2)'],
    ['x - 1', 'x trừ 1'],
    ['\\frac{3}{4}', '3/4'],
    ['\\dfrac{-3}{x+1}', '(âm 3)/(x+1)'],
    ['x^2 + y^{3}', 'x mũ 2 +y mũ 3'],
    ['2^{10}', '2 mũ 10'],
    ['10^{-3}', '10 mũ trừ 3'],
    ['\\mathrm{SO_4^{2-}}', 'SO₄²⁻'],
    ['a^{x+1}', 'a mũ (x+1)'],
    ['H_2O', 'H₂O'],
    ['90^\\circ', '90°'],
    ['3{,}5', '3,5'],
    ['1\\,234', '1234'],
    ['1\u202f000\\text{ J}', '1000 J'],
    ['x \\, y', 'x y'],
    ['K_C', 'K C'],
    ['K_C = \\frac{1}{2}', 'K C =1/2'],
    ['\\mathrm{O{-}H}', 'O–H'],
    ['\\mathrm{CH_3{-}CH_2{-}OH}', 'CH₃–CH₂–OH'],
    ['5\\text{ cm}', '5 xăng-ti-mét'],
    ['12\\text{ cm}^2', '12 xăng-ti-mét vuông'],
    ['\\widehat{ABC} = 60^\\circ', 'góc ABC=60°'],
    ['x \\in \\mathbb{N}', 'x∈ℕ'],
    ['a \\ne b', 'a khác b'],
    ['a \\le b', 'a nhỏ hơn hoặc bằng b'],
    ['a \\ge b', 'a lớn hơn hoặc bằng b'],
    ['\\mathcal{P}', 'P'],
    ['\\mathcal{P}(E) = \\frac{1}{2}', 'P(E)=1/2'],
    ['A \\rightleftharpoons B', 'A⇌B'],
    ['A \\xrightleftharpoons{t^\\circ} B', 'A ⇌ (t°) B'],
    ['A \\xrightleftharpoons[xt]{t^\\circ} B', 'A ⇌ (t°, xt) B'],
    ['A \\xrightarrow{t^\\circ} B', 'A → (t°) B'],
    ['A \\xrightarrow{} B', 'A → B'],
    ['a \\not= b', 'a khác b'],
    ['\\left( \\frac{1}{2} \\right)^2', '(1/2) mũ 2'],
    ['25\\%', '25%'],
    ['A \\cap B = \\emptyset', 'A∩B=∅'],
    ['\\sin x', 'sin x'],
    ['3 + \\square = 5', '3+ ô trống =5'],
    ['\\Box - 2', 'ô trống trừ 2'],
    ['\\frac{1}{6x^2}', '1/(6x mũ 2)'],
    ['\\frac{5}{2\\pi}', '5/(2π)'],
    ['\\frac{6x^2}{3}', '6x mũ 2 /3'],
    ['\\frac{AB}{CD}', 'AB/CD'],
    ['\\frac{1}{x^2}', '1/x mũ 2'],
    ['\\frac{3}{4,5}', '3/4,5'],
    ['\\frac{1}{\\frac{2}{3}}', '1/(2/3)'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });

  it('keeps options that differ only in their formula distinct', () => {
    const names = ['\\sqrt{144}', '144', '-144'].map(texText);
    expect(new Set(names).size).toBe(3);
  });
});

describe('texText mixed numbers', () => {
  it.each([
    ['2\\dfrac{3}{4}', '2 và 3/4'],
    ['2\\,\\dfrac{3}{4}', '2 và 3/4'],
    ['\\sqrt{1\\dfrac{9}{16}}', 'căn bậc hai của (1 và 9/16)'],
    ['2\\dfrac{x}{3}', '2x/3'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });
});

describe('texText integrals', () => {
  it.each([
    ['\\int_0^2 x^2\\,\\mathrm{d}x', 'tích phân từ 0 đến 2 của x mũ 2 dx'],
    ['\\int_{a}^{b} f(x)\\,\\mathrm{d}x', 'tích phân từ a đến b của f(x) dx'],
    ['\\int_a^b f(x)\\,dx', 'tích phân từ a đến b của f(x) dx'],
    ['\\int\\limits_1^{e} \\ln x\\,dx', 'tích phân từ 1 đến e của ln x dx'],
    ['\\int_{-1}^{2} x\\,dx', 'tích phân từ âm 1 đến 2 của x dx'],
    ['\\int x^2\\,dx', 'nguyên hàm của x mũ 2 dx'],
    ['F(x)\\Big|_a^b', 'F(x) lấy cận từ a đến b'],
    ['F(x)\\bigg|_{0}^{1}', 'F(x) lấy cận từ 0 đến 1'],
    ['\\left. x^2 \\right|_0^2', 'x mũ 2 lấy cận từ 0 đến 2'],
    ['x^2|_a^b', 'x mũ 2 lấy cận từ a đến b'],
    ['|x|', '|x|'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });
});

describe('texText exponents', () => {
  it.each([
    ['x^{n-1}', 'x mũ (n trừ 1)'],
    ['a^{n+1}', 'a mũ (n+1)'],
    ['a^{m+n}', 'a mũ (m+n)'],
    ['e^{-x}', 'e mũ (trừ x)'],
    ['C_n^k', 'C n mũ k'],
    ['x^2', 'x mũ 2'],
    ['x^{+2}', 'x mũ 2'],
    ['x^{-2}', 'x mũ trừ 2'],
    ['10^{-3}', '10 mũ trừ 3'],
    ['x^{2n}', 'x mũ 2n'],
    ['\\mathrm{SO_4^{2-}}', 'SO₄²⁻'],
    ['\\mathrm{Fe^{3+}}', 'Fe³⁺'],
    ['90^\\circ', '90°'],
    ["f'(x)", 'f′(x)'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });
});

describe('texText negated relations and brackets', () => {
  it.each([
    ['A \\not\\subset B', 'A⊄B'],
    ['A \\not\\subseteq B', 'A⊈B'],
    ['a \\not\\parallel b', 'a∦b'],
    ['a \\not\\equiv b', 'a≢b'],
    ['a \\not< b', 'a≮b'],
    ['a \\not\\in A', 'a∉A'],
    ['\\frac{1}{(x-2)(x+3)}', '1/((x trừ 2)(x+3))'],
    ['\\frac{(x-2)(x+3)}{x-2}', '((x trừ 2)(x+3))/(x trừ 2)'],
    ['\\frac{(x+1)}{2}', '(x+1)/2'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });
});

describe('texText units, vectors and nuclides', () => {
  it.each([
    ['1\\,350\\ \\mathrm{cm^3}', '1350 xăng-ti-mét khối'],
    ['450\\ \\mathrm{cm}^3', '450 xăng-ti-mét khối'],
    ['12\\text{ cm}^2', '12 xăng-ti-mét vuông'],
    ['\\vec{B}', 'vectơ B'],
    ['\\overrightarrow{AB}', 'vectơ AB'],
    ['\\vec{F}_{12}', 'vectơ F₁₂'],
    ['\\odot', 'vòng tròn có chấm'],
    ['\\otimes', 'vòng tròn có dấu chéo'],
    ['{}^{14}_{7}\\mathrm{N}', 'N, A bằng 14, Z bằng 7'],
    ['{}^{0}_{-1}e', 'e, A bằng 0, Z bằng âm 1'],
    ['{}^{223}\\mathrm{Ra}', 'Ra, A bằng 223'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });

  it('reads a cubic centimetre in plain text the way the voice does', () => {
    expect(spokenUnits(richText('600 – 800 cm³'))).toBe('600 – 800 xăng-ti-mét khối');
  });
});

describe('texText annotations over and under', () => {
  it.each([
    ['CH_3{-}\\overset{+}{C}H{-}CH_3', 'CH₃–C⁺H–CH₃'],
    ['\\overset{\\ominus}{O}', 'O⁻'],
    ['\\overset{+5}{\\mathrm{N}}', 'N (số oxi hoá +5)'],
    ['\\overset{-2}{\\mathrm{O}}', 'O (số oxi hoá âm 2)'],
    ['\\overset{0}{\\mathrm{Fe}}', 'Fe (số oxi hoá 0)'],
    ['A \\overset{t^\\circ}{\\longrightarrow} B', 'A ⟶ (t°) B'],
    ['\\underset{\\text{glucose}}{\\mathrm{C_6H_{12}O_6}}', 'C₆H₁₂O₆ (glucose)'],
    ['\\overset{\\frown}{AB}', 'cung AB'],
    ['Cl^{\\bullet}', 'Cl•'],
    ['\\overset{\\bullet}{\\mathrm{Cl}}', 'Cl•'],
    ['CH_3{-}\\overset{\\overset{O}{\\|}}{C}{-}CH_3', 'CH₃–C(=O)–CH₃'],
    ['\\stackrel{\\text{xt}}{X}', 'X (xt)'],
  ])('%s → %s', (tex, text) => {
    expect(texText(tex)).toBe(text);
  });

  it('speaks a carbocation and a radical like any ion charge', () => {
    expect(spokenMath(texText('\\overset{+}{C}H_3'))).toBe(spokenMath(texText('C^+H_3')));
    expect(spokenMath(texText('Cl^{\\bullet}'))).toBe('Cl•');
  });
});

describe('texHtml', () => {
  it('puts escaped text before the hidden drawing', () => {
    expect(texHtml('<b>x</b>', 'a<b')).toBe(
      '<span class="tex"><span class="sr-only">a&lt;b</span><span aria-hidden="true"><b>x</b></span></span>',
    );
  });

  it('prefers an explicit label', () => {
    expect(texHtml('k', 'x', 'nhãn')).toContain('<span class="sr-only">nhãn</span>');
  });
});

describe('htmlText', () => {
  it('reads rendered rich text the way a screen reader names it', () => {
    expect(htmlText(renderRichText('Số $\\sqrt{144}$ & $-1$'))).toBe(
      'Số căn bậc hai của 144 & âm 1',
    );
  });

  it('skips nested hidden markup and decodes entities', () => {
    expect(htmlText('a <span aria-hidden="true"><span>b</span>c</span> d &lt;e&gt;')).toBe(
      'a d <e>',
    );
  });
});

describe('richText', () => {
  it('speaks the formulas of rich text and keeps its words', () => {
    expect(richText('Hằng số $K_C$ chỉ phụ thuộc nhiệt độ.')).toBe(
      'Hằng số K C chỉ phụ thuộc nhiệt độ.',
    );
    expect(richText('Liên kết $\\mathrm{O{-}H}$ phân cực')).toBe('Liên kết O–H phân cực');
    expect(richText('Không có công thức')).toBe('Không có công thức');
  });
});
