// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Accessible text for TeX. Rendered TeX is shown to the eye only; screen
 * readers get a spoken form of the same source instead, such as
 * `căn bậc hai của 144`, `10×` or `âm 1`. The browser computes a radio's,
 * button's or textbox label's name from that text, so options that differ only
 * in their formula keep distinct names, and the read-aloud button speaks it too.
 *
 * KaTeX stays `output: 'html'` with this text beside it, on purpose. MathML is
 * not restored: name-from-content over MathML reads `√144` as `144`, and TalkBack
 * and stock NVDA have no MathML speech.
 *
 * `texText` turns TeX source into that text; `texHtml` wraps KaTeX markup
 * with it; `richText` speaks rich text with `$...$` formulas; `htmlText` reads the text back out of rendered rich text, for an
 * `aria-label` that has to name an item.
 */

import { richParts } from './rich-parts.js';

/** @type {Record<string, string>} */
const SYMBOLS = {
  times: '×',
  cdot: '·',
  div: ':',
  pm: '±',
  mp: '∓',
  le: '≤',
  leq: '≤',
  leqslant: '≤',
  ge: '≥',
  geq: '≥',
  geqslant: '≥',
  ne: '≠',
  neq: '≠',
  lt: '<',
  gt: '>',
  approx: '≈',
  equiv: '≡',
  sim: '∼',
  backsim: '∽',
  cong: '≅',
  infty: '∞',
  in: '∈',
  notin: '∉',
  ni: '∋',
  subset: '⊂',
  subseteq: '⊆',
  supset: '⊃',
  supseteq: '⊇',
  cup: '∪',
  cap: '∩',
  setminus: '∖',
  emptyset: '∅',
  varnothing: '∅',
  forall: '∀',
  exists: '∃',
  neg: '¬',
  land: '∧',
  lor: '∨',
  Rightarrow: '⇒',
  Leftarrow: '⇐',
  Leftrightarrow: '⇔',
  iff: '⇔',
  implies: '⇒',
  rightarrow: '→',
  to: '→',
  leftarrow: '←',
  leftrightarrow: '↔',
  longrightarrow: '⟶',
  rightleftharpoons: '⇌',
  uparrow: '↑',
  downarrow: '↓',
  angle: '∠',
  triangle: '△',
  perp: '⊥',
  parallel: '∥',
  nparallel: '∦',
  circ: '°',
  degree: '°',
  prime: '′',
  ldots: '…',
  dots: '…',
  cdots: '⋯',
  vdots: '⋮',
  mid: '|',
  vert: '|',
  lvert: '|',
  rvert: '|',
  Vert: '‖',
  langle: '⟨',
  rangle: '⟩',
  lfloor: '⌊',
  rfloor: '⌋',
  lceil: '⌈',
  rceil: '⌉',
  colon: ':',
  backslash: '\\',
  sum: '∑',
  prod: '∏',
  int: '∫',
  partial: '∂',
  nabla: '∇',
  bullet: '•',
  odot: '⊙',
  otimes: '⊗',
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  epsilon: 'ε',
  varepsilon: 'ε',
  zeta: 'ζ',
  eta: 'η',
  theta: 'θ',
  vartheta: 'θ',
  iota: 'ι',
  kappa: 'κ',
  lambda: 'λ',
  mu: 'μ',
  nu: 'ν',
  xi: 'ξ',
  pi: 'π',
  rho: 'ρ',
  sigma: 'σ',
  tau: 'τ',
  upsilon: 'υ',
  phi: 'φ',
  varphi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  omega: 'ω',
  Gamma: 'Γ',
  Delta: 'Δ',
  Theta: 'Θ',
  Lambda: 'Λ',
  Xi: 'Ξ',
  Pi: 'Π',
  Sigma: 'Σ',
  Phi: 'Φ',
  Psi: 'Ψ',
  Omega: 'Ω',
  '%': '%',
  $: '$',
  '#': '#',
  '&': '&',
  _: '_',
  '{': '{',
  '}': '}',
  '|': '‖',
  ',': ' ',
  ';': ' ',
  ':': ' ',
  '>': ' ',
  ' ': ' ',
  quad: ' ',
  qquad: ' ',
  enspace: ' ',
  '!': '',
  square: ' ô trống ',
  Box: ' ô trống ',
  boxempty: ' ô trống ',
};

/** Commands whose one argument is shown as it is. */
const KEEP_ARG = new Set([
  'mathrm',
  'mathcal',
  'mathscr',
  'mathfrak',
  'mathbf',
  'mathit',
  'mathsf',
  'mathtt',
  'boldsymbol',
  'bm',
  'operatorname',
  'boxed',
  'cancel',
  'bcancel',
  'xcancel',
  'underline',
  'underbrace',
  'overbrace',
  'mathop',
  'mathbin',
  'mathrel',
  'mathord',
]);

/** Commands whose one argument is text, read literally. */
const TEXT_ARG = new Set([
  'text',
  'textrm',
  'textbf',
  'textit',
  'textsf',
  'texttt',
  'mbox',
  'textnormal',
]);

/** Commands dropped with no output and no argument. */
const DROP = new Set([
  'left',
  'right',
  'big',
  'Big',
  'bigg',
  'Bigg',
  'bigl',
  'bigr',
  'Bigl',
  'Bigr',
  'biggl',
  'biggr',
  'middle',
  'displaystyle',
  'textstyle',
  'scriptstyle',
  'limits',
  'nolimits',
  'nonumber',
  'notag',
  'hline',
  'strut',
]);

/** Commands dropped together with their one argument. */
const DROP_ARG = new Set(['phantom', 'hphantom', 'vphantom', 'color', 'label', 'tag']);

/** Long arrows that carry their conditions above and below. */
const LONG_ARROWS = /** @type {Record<string, string>} */ ({
  xrightarrow: '→',
  xleftarrow: '←',
  xleftrightarrow: '↔',
  xrightleftharpoons: '⇌',
});

/** @type {Record<string, string>} */
const BLACKBOARD = { N: 'ℕ', Z: 'ℤ', Q: 'ℚ', R: 'ℝ', C: 'ℂ', P: 'ℙ' };

/** @type {Record<string, string>} */
const ACCENTS = {
  bar: '̄',
  overline: '̅',
  hat: '̂',
  tilde: '̃',
  widetilde: '̃',
  dot: '̇',
  ddot: '̈',
};

const SUPER = /** @type {Record<string, string>} */ ({
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
  '+': '⁺',
  '−': '⁻',
  '(': '⁽',
  ')': '⁾',
  n: 'ⁿ',
  i: 'ⁱ',
});

const SUB = /** @type {Record<string, string>} */ ({
  0: '₀',
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
  8: '₈',
  9: '₉',
  '+': '₊',
  '−': '₋',
  '(': '₍',
  ')': '₎',
});

/**
 * Text for a group that may need brackets after `/` or `√`: one number or
 * name stays bare, anything with an operator gets brackets.
 * @param {string} s
 */
function atom(s) {
  return /^[\p{L}\p{N}.,′²³]*$/u.test(s) || wrapped(s) ? s : `(${s})`;
}

/**
 * Whether the whole string sits inside one matched pair of brackets: true for
 * `(x+1)`, false for `(x−2)(x+3)`, whose first bracket closes early.
 * @param {string} s
 */
function wrapped(s) {
  if (!s.startsWith('(') || !s.endsWith(')')) return false;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')' && --depth === 0) return i === s.length - 1;
  }
  return false;
}

/**
 * A bound or a number standing after a word (`từ −1`, `bằng −1`), where the
 * sign rule of `spokenWords` cannot see it: a leading minus becomes `âm`.
 * @param {string} s
 */
const signedWord = (s) => s.replace(/^−(?=\s*\d)/, 'âm ');

/** Relations that `\not` turns into their own crossed-out sign. */
const NEGATED = /** @type {Record<string, string>} */ ({
  '=': '≠',
  '∈': '∉',
  '⊂': '⊄',
  '⊆': '⊈',
  '⊃': '⊅',
  '⊇': '⊉',
  '∥': '∦',
  '≡': '≢',
  '∼': '≁',
  '<': '≮',
  '>': '≯',
});

/** Arrow glyphs that can carry a condition written over or under them. */
const ARROW_GLYPHS = /^[→⟶⇌←⟵↔⟷⇀↽⇒⇐⇔]$/;

/**
 * An exponent body that has a Unicode superscript form read as one token: a
 * signed number (`−2`), a lone `n` or `i`, an ion charge (`2−`, `+`) or a
 * bracketed derivative order (`(4)`). Anything else stays `^(…)`.
 * @param {string} body
 */
const oneToken = (body) => /^[+−]?\d+$|^[ni]$|^\d*[+−]$|^\([\dn]+\)$/.test(body);

/**
 * Text for a denominator: like `atom`, but a product that starts with a
 * number (`6x²`, `2π`) is bracketed too, so `1/(6x²)` is not heard as
 * `1/6 · x²`. Names made of letters only (`AB`, `x`) stay bare.
 * @param {string} s
 */
function denominator(s) {
  const bare = atom(s);
  return bare === s && /\p{N}[.,\p{N}]*[\p{L}′]/u.test(s) ? `(${s})` : bare;
}

/**
 * Maps every character through `table`, or returns null when one is missing.
 * @param {string} s
 * @param {Record<string, string>} table
 */
function mapAll(s, table) {
  let out = '';
  for (const ch of s) {
    if (!(ch in table)) return null;
    out += table[ch];
  }
  return out;
}

/** The narrow no-break space that groups digits in widget numbers (1 000). */
const GROUP_SPACE = '\u202f';

/** A small recursive reader over TeX source. */
class Reader {
  /** @param {string} src */
  constructor(src) {
    this.src = src;
    this.i = 0;
    /** What `read` had written before the command it is reading now. */
    this.before = '';
  }

  skipSpace() {
    while (this.i < this.src.length && /\s/.test(this.src[this.i])) this.i++;
  }

  /** The raw source of the next `{...}` group, or of one token. */
  rawArg() {
    this.skipSpace();
    const s = this.src;
    if (s[this.i] === '{') {
      let depth = 0;
      const start = this.i + 1;
      for (; this.i < s.length; this.i++) {
        if (s[this.i] === '\\') {
          this.i++;
          continue;
        }
        if (s[this.i] === '{') depth++;
        else if (s[this.i] === '}' && --depth === 0) {
          this.i++;
          return s.slice(start, this.i - 1);
        }
      }
      return s.slice(start);
    }
    if (s[this.i] === '\\') {
      const m = /^\\([A-Za-z]+|.)/.exec(s.slice(this.i));
      const token = m ? m[0] : '\\';
      this.i += token.length;
      return token;
    }
    return s[this.i++] ?? '';
  }

  /** The raw source of an optional `[...]` argument, or null. */
  optArg() {
    this.skipSpace();
    if (this.src[this.i] !== '[') return null;
    const end = this.src.indexOf(']', this.i);
    if (end === -1) return null;
    const out = this.src.slice(this.i + 1, end);
    this.i = end + 1;
    return out;
  }

  /**
   * After a `|`: an evaluation bar `|_a^b` reads `lấy cận từ a đến b`. Null,
   * reading nothing, unless both bounds follow.
   */
  evaluationBar() {
    const start = this.i;
    const marks = this.limits();
    if (marks?.lower && marks.upper) return ` lấy cận từ ${marks.lower} đến ${marks.upper} `;
    this.i = start;
    return null;
  }

  /**
   * Reads the `_{a}` and `^{b}` that follow, in either order.
   * @returns {{ lower: string; upper: string } | null} null when neither is there
   */
  limits() {
    /** @type {Record<string, string>} */
    const got = {};
    for (let k = 0; k < 2; k++) {
      this.skipSpace();
      const mark = this.src[this.i];
      if ((mark !== '_' && mark !== '^') || mark in got) break;
      this.i++;
      got[mark] = signedWord(this.arg());
    }
    if (!('_' in got) && !('^' in got)) return null;
    return { lower: got._ ?? '', upper: got['^'] ?? '' };
  }

  /**
   * A nuclide written with prescripts on an empty group, `{}^{14}_{7}\mathrm{N}`:
   * `N, A bằng 14, Z bằng 7`. Null, reading nothing, when no prescript and
   * symbol follow.
   */
  nuclide() {
    const start = this.i;
    const marks = this.limits();
    this.skipSpace();
    const rest = this.src.slice(this.i);
    let symbol = '';
    const command = /^\\(mathrm|text|textrm)\s*\{([^{}]*)\}/.exec(rest);
    const letter = /^(?:[A-Z][a-z]?|[a-z])/.exec(rest);
    if (command) symbol = command[2].trim();
    else if (letter) symbol = letter[0];
    if (!marks || !symbol) {
      this.i = start;
      return null;
    }
    this.i += (command ?? letter)?.[0].length ?? 0;
    const parts = [symbol];
    if (marks.upper) parts.push(`A bằng ${marks.upper}`);
    if (marks.lower) parts.push(`Z bằng ${marks.lower}`);
    return parts.join(', ');
  }

  /** Text of the next argument. */
  arg() {
    return linearText(this.rawArg());
  }

  /** @returns {string} */
  read() {
    let out = '';
    const s = this.src;
    while (this.i < s.length) {
      const ch = s[this.i];
      if (ch === '\\') {
        this.before = out;
        out += this.command();
      } else if (ch === '{') {
        const raw = this.rawArg();
        const nuclide = raw.trim() === '' ? this.nuclide() : null;
        // `{-}` is a bond or hyphen (\mathrm{O{-}H}), never a minus sign.
        out += nuclide ?? (raw.trim() === '-' ? '–' : linearText(raw));
      } else if (ch === '|') {
        this.i++;
        out += this.evaluationBar() ?? '|';
      } else if (ch === '}') {
        this.i++;
      } else if (ch === '^') {
        this.i++;
        out += this.script(this.rawArg(), true);
      } else if (ch === '_') {
        this.i++;
        out += this.script(this.rawArg(), false);
      } else if (ch === '&') {
        this.i++;
        out += ' ';
      } else if (ch === '~') {
        this.i++;
        out += ' ';
      } else if (ch === GROUP_SPACE) {
        this.i++;
        if (!(/\d/.test(s[this.i - 2] ?? '') && /\d/.test(s[this.i] ?? ''))) out += ' ';
      } else if (/\s/.test(ch)) {
        this.i++;
      } else if (ch === '-') {
        this.i++;
        out += '−';
      } else if (ch === "'") {
        this.i++;
        out += '′';
      } else {
        this.i++;
        out += ch;
      }
    }
    return out;
  }

  /**
   * @param {string} raw
   * @param {boolean} up
   */
  script(raw, up) {
    const body = linearText(raw);
    if (up && (body === '°' || body === '∘')) return '°';
    if (up && /^′+$/.test(body)) return body;
    if (up && body === '•') return body;
    const mapped = up && !oneToken(body) ? null : mapAll(body, up ? SUPER : SUB);
    if (mapped !== null) return mapped;
    // A subscript with no Unicode form is a label (K_C, v_{tb}): read it after
    // its base, never as an underscore.
    return up ? `^${atom(body)}` : ` ${atom(body)} `;
  }

  /**
   * `\overset{a}{b}`, `\stackrel{a}{b}` (`over`) or `\underset{a}{b}`: the
   * base with its annotation read, not dropped.
   * @param {boolean} over
   */
  annotated(over) {
    const raw = this.rawArg().trim();
    const note = linearText(raw);
    const base = this.arg();
    if (!note) return base;
    if (ARROW_GLYPHS.test(base)) return ` ${base} (${note}) `;
    if (over) {
      if (raw === '\\frown') return `cung ${base}`;
      if (/^(\+|-|−|\\oplus)$/.test(raw)) return `${base}⁺`;
      if (/^(−|\\ominus)$/.test(raw) || raw === '-') return `${base}⁻`;
      if (raw === '\\bullet' || raw === '\\cdot') return `${base}•`;
      if (/^[+−]?\d+$/.test(note)) return `${base} (số oxi hoá ${signedWord(note)})`;
      // A double bond drawn as O over `\|`, itself set over the carbon.
      if (base === '‖' || base === '=') return `=${note}`;
      if (note.startsWith('=')) return `${base}(${note})`;
    }
    return `${base} (${note})`;
  }

  command() {
    const m = /^\\([A-Za-z]+|.)/.exec(this.src.slice(this.i));
    if (!m) {
      this.i++;
      return '';
    }
    this.i += m[0].length;
    const name = m[1];
    if (name === '\\') return '; ';
    // A thin space between digits groups a number (1\,000): read it whole.
    if (
      name === ',' &&
      /\d$/.test(this.src.slice(0, this.i - 2)) &&
      /^\d/.test(this.src.slice(this.i))
    ) {
      return '';
    }
    if (TEXT_ARG.has(name)) return this.rawArg().replace(/\\([%$#&_{}])/g, '$1');
    if (KEEP_ARG.has(name)) return this.arg();
    if (name === 'not') {
      const next = this.arg();
      return NEGATED[next] ?? ` không ${next}`;
    }
    if (name === 'int') {
      this.skipSpace();
      const limits = /^\\(no)?limits(?![A-Za-z])/.exec(this.src.slice(this.i));
      if (limits) this.i += limits[0].length;
      const marks = this.limits();
      return marks ? ` tích phân từ ${marks.lower} đến ${marks.upper} của ` : ' nguyên hàm của ';
    }
    if (DROP.has(name)) {
      if (name === 'left' || name === 'right' || name.startsWith('big') || name.startsWith('Big')) {
        this.skipSpace();
        if (this.src[this.i] === '.') this.i++;
      }
      return '';
    }
    if (DROP_ARG.has(name)) {
      this.rawArg();
      return '';
    }
    if (name === 'frac' || name === 'dfrac' || name === 'tfrac' || name === 'cfrac') {
      const a = this.arg();
      const b = this.arg();
      // A digit run right before a fraction of plain digits is a mixed number:
      // 2\dfrac{3}{4} is `2 và 3/4`, never 23/4.
      if (
        name !== 'cfrac' &&
        /\d\s*$/.test(this.before ?? '') &&
        /^\d+$/.test(a) &&
        /^\d+$/.test(b)
      ) {
        return ` và ${a}/${b}`;
      }
      return `${atom(a)}/${denominator(b)}`;
    }
    if (name === 'sqrt') {
      const index = this.optArg();
      const body = atom(this.arg());
      if (index === null) return `√${body}`;
      const n = linearText(index);
      if (n === '3') return `∛${body}`;
      if (n === '4') return `∜${body}`;
      return `${mapAll(n, SUPER) ?? n}√${body}`;
    }
    if (name === 'mathbb') {
      const body = this.arg();
      return mapAll(body, BLACKBOARD) ?? body;
    }
    if (name in LONG_ARROWS) {
      const below = this.optArg();
      const above = this.arg();
      const conditions = [above, below === null ? '' : linearText(below)].filter(Boolean);
      const arrow = LONG_ARROWS[name];
      return conditions.length ? ` ${arrow} (${conditions.join(', ')}) ` : ` ${arrow} `;
    }
    if (name === 'widehat') return `góc ${this.arg()}`;
    if (name === 'vec' || name === 'overrightarrow') return ` vectơ ${this.arg()}`;
    if (name in ACCENTS) {
      const body = this.arg();
      return [...body].map((c) => c + ACCENTS[name]).join('');
    }
    if (name === 'textcolor' || name === 'colorbox') {
      this.rawArg();
      return this.arg();
    }
    if (name === 'overset' || name === 'underset' || name === 'stackrel') {
      return this.annotated(name !== 'underset');
    }
    if (name === 'begin' || name === 'end') {
      const env = this.rawArg();
      if (name === 'begin' && /^(array|tabular)$/.test(env)) this.rawArg();
      if (/cases/.test(env)) return name === 'begin' ? '{ ' : ' }';
      return ' ';
    }
    if (name === 'hspace' || name === 'kern' || name === 'mkern' || name === 'hskip') {
      this.rawArg();
      return ' ';
    }
    if (name in SYMBOLS) return SYMBOLS[name];
    // Operator names (sin, log, lim, max, ...) and anything unknown: the name.
    return name.length === 1 ? name : ` ${name} `;
  }
}

/**
 * A linear Unicode form of TeX source, kept for the steps above: its `√` and
 * `²` tell `atom` where brackets are needed.
 * @param {string} tex
 * @returns {string}
 */
function linearText(tex) {
  return new Reader(tex).read().replace(/\s+/g, ' ').trim();
}

/** Superscript characters back to what they stand for. */
const UNSUPER = /** @type {Record<string, string>} */ (
  Object.fromEntries(Object.entries(SUPER).map(([plain, up]) => [up, plain]))
);

/** @param {string} s */
const unsuper = (s) => [...s].map((c) => UNSUPER[c] ?? c).join('');

const SUPER_ROOT = /([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ]+)√/g;
// An exponent: a charge such as the ²⁻ of SO₄²⁻ ends in a sign and stays as it is.
const SUPER_POWER = /([⁺⁻]?)([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ]+)(?![⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ])/g;

/** @type {Record<string, string>} */
const SPOKEN = {
  '√': ' căn bậc hai của ',
  '∛': ' căn bậc ba của ',
  '∜': ' căn bậc bốn của ',
  '≤': ' nhỏ hơn hoặc bằng ',
  '≥': ' lớn hơn hoặc bằng ',
  '≠': ' khác ',
  '−': ' trừ ',
  '⊙': ' vòng tròn có chấm ',
  '⊗': ' vòng tròn có dấu chéo ',
};

// A minus sign at the start or after an opening bracket, a relation or another
// sign, followed by a number, is the sign of a negative number: `âm`.
const NEGATIVE = /(^|[([{=<>≤≥≠≈∼,;:+−×·/±∓∈])(\s*)−(?=\s*\d)/g;

// Units a voice spells letter by letter, as the words a child reads; `²`/`³`
// may still be superscripts or, in TeX, the `²` a power has become.
const UNITS = [
  [/(?<![\p{L}_])cm(?:²|\^2)(?![\p{L}\p{N}])/gu, 'xăng-ti-mét vuông'],
  [/(?<![\p{L}_])cm(?:³|\^3)(?![\p{L}\p{N}])/gu, 'xăng-ti-mét khối'],
  [/(?<![\p{L}_])cm(?![\p{L}\p{N}²³])/gu, 'xăng-ti-mét'],
];

/**
 * Unit symbols read as words: `cm²` → `xăng-ti-mét vuông`, `cm` →
 * `xăng-ti-mét`.
 * @param {string} text
 */
export function spokenUnits(text) {
  return UNITS.reduce((out, [re, word]) => out.replace(re, String(word)), text);
}

/**
 * Math signs a screen reader skips or reads in English, as Vietnamese words.
 * @param {string} linear
 */
function spokenWords(linear) {
  return spokenUnits(linear)
    .replace(NEGATIVE, (_, before) => `${before} âm `)
    .replace(SUPER_ROOT, (_, n) => ` căn bậc ${unsuper(n)} của `)
    .replace(
      SUPER_POWER,
      (_, sign, power) => ` mũ ${sign === '⁻' ? `${SPOKEN['−']}` : ''}${unsuper(power)} `,
    )
    .replace(/\^/g, ' mũ ')
    .replace(/[√∛∜≤≥≠−⊙⊗]/g, (c) => SPOKEN[c])
    .replace(/\s+/g, ' ')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')')
    .trim();
}

/**
 * The spoken form of TeX source for screen readers and read-aloud:
 * `\sqrt{144}` → `căn bậc hai của 144`, `\frac{3}{4}` → `3/4`, `x^2` → `x mũ 2`,
 * `-1` → `âm 1`, `x - 1` → `x trừ 1`, `5\text{ cm}^2` → `5 xăng-ti-mét vuông`, `a \le b` → `a nhỏ hơn hoặc bằng b`, `10\times` → `10×`,
 * `90^\circ` → `90°`, `3{,}5` → `3,5`, `\widehat{ABC}` → `góc ABC`,
 * `\frac{1}{6x^2}` → `1/(6x mũ 2)`, `\mathcal{P}` → `P`,
 * `\xrightleftharpoons[b]{a}` → `⇌ (a, b)`, `\square` → `ô trống` (a blank to
 * fill), `2\dfrac{3}{4}` → `2 và 3/4`, `x^{n-1}` → `x mũ (n trừ 1)`,
 * `\int_0^2` → `tích phân từ 0 đến 2 của`, `F(x)\Big|_a^b` → `F(x) lấy cận từ
 * a đến b`, `\vec{B}` → `vectơ B`, `{}^{14}_{7}\mathrm{N}` → `N, A bằng 14, Z
 * bằng 7`, `\overset{+5}{N}` → `N (số oxi hoá +5)`. Spacing commands become spaces; layout-only commands (`\left`,
 * `\displaystyle`) are dropped.
 * @param {string} tex
 * @returns {string}
 */
export function texText(tex) {
  return spokenWords(linearText(tex));
}

/**
 * The spoken form of rich text (plain text with `$...$` TeX): each formula
 * becomes its `texText`, so an `aria-label` built from a card or hint reads
 * `K C` rather than raw `K_C`.
 * @param {string} text
 * @returns {string}
 */
export function richText(text) {
  return richParts(text)
    .map((p) => (p.kind === 'tex' ? texText(p.tex) : p.text))
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

/** @type {Record<string, string>} */
const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** @param {string} s */
const escape = (s) => s.replace(/[&<>"']/g, (c) => ENTITIES[c]);

/** How `katex.renderToString` opens a display formula. */
const DISPLAY_OPEN = '<span class="katex-display"><span class="katex">';

/**
 * KaTeX markup with its accessible text: the text in a visually hidden span
 * that screen readers and accessible-name computation read, and the drawing
 * hidden from them. `label` overrides the text derived from the source.
 *
 * A display formula keeps its `.katex-display` box outside the hidden part,
 * with the text inside it: that box scrolls when the formula is too wide and
 * then takes a tab stop, and a focusable box must not sit inside
 * `aria-hidden`.
 * @param {string} katexHtml output of `katex.renderToString`
 * @param {string} tex the source it was rendered from
 * @param {string} [label]
 */
export function texHtml(katexHtml, tex, label) {
  const spoken = `<span class="sr-only">${escape(label ?? texText(tex))}</span>`;
  if (katexHtml.startsWith(DISPLAY_OPEN)) {
    // The rest still closes `.katex` and `.katex-display`.
    const rest = katexHtml.slice(DISPLAY_OPEN.length);
    return `<span class="tex"><span class="katex-display">${spoken}<span class="katex" aria-hidden="true">${rest}</span>`;
  }
  return `<span class="tex">${spoken}<span aria-hidden="true">${katexHtml}</span></span>`;
}

/** @type {Record<string, string>} */
const DECODE = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: ' ' };

/**
 * Plain text of rendered rich text as a screen reader hears it: elements
 * marked `aria-hidden="true"` are skipped, tags dropped, entities decoded,
 * spaces collapsed. For `aria-label`s that quote an item.
 * @param {string} html
 * @returns {string}
 */
export function htmlText(html) {
  let out = '';
  let i = 0;
  while (i < html.length) {
    const open = html.indexOf('<', i);
    if (open === -1) {
      out += html.slice(i);
      break;
    }
    out += html.slice(i, open);
    const close = html.indexOf('>', open);
    if (close === -1) break;
    const tag = html.slice(open, close + 1);
    i = close + 1;
    const name = /^<([a-zA-Z][\w-]*)/.exec(tag)?.[1];
    if (name && /\saria-hidden="true"/.test(tag) && !tag.endsWith('/>')) {
      // Skip to the matching close tag of the same name.
      let depth = 1;
      const re = new RegExp(`<(/?)${name}(?=[\\s>/])[^>]*?(/?)>`, 'g');
      re.lastIndex = i;
      for (let m = re.exec(html); m; m = re.exec(html)) {
        if (m[2] === '/') continue;
        depth += m[1] === '/' ? -1 : 1;
        if (depth === 0) {
          i = re.lastIndex;
          break;
        }
      }
      if (depth !== 0) break;
    }
  }
  return out
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (_, e) => DECODE[e])
    .replace(/\s+/g, ' ')
    .trim();
}
