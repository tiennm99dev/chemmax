// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/**
 * Plain kid text with its fractions found, so they can be drawn stacked as the
 * primary books print them: `3/8` and a mixed number `2 3/4` (whole, a space,
 * then a proper fraction). A slash between letters (km/giờ), a bracket
 * ((3 × 2)/(8 × 2)), a decimal comma or a run of slashes (a date 2/9/1945) is
 * left as text.
 */

/**
 * @typedef {{ kind: 'text'; text: string }
 *   | { kind: 'frac'; n: number; d: number; whole?: number; text: string }} FractionPart
 */

const FRACTION = /(?<![\p{L}\p{N},./])(?:(\d+) )?(\d+)\/(\d+)(?![\p{L}\p{N}/]|[,.]\d)/gu;

/**
 * Splits a plain string into text and fraction parts; joining every part's
 * `text` gives the string back.
 * @param {string} text
 * @returns {FractionPart[]}
 */
export function fractionParts(text) {
  /** @type {FractionPart[]} */
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(FRACTION)) {
    const [whole, w, n, d] = m;
    const num = Number(n);
    const den = Number(d);
    if (den === 0) continue;
    let start = m.index;
    let wholeValue;
    if (w !== undefined && num < den) wholeValue = Number(w);
    else if (w !== undefined) start += w.length + 1;
    if (start > last) parts.push({ kind: 'text', text: text.slice(last, start) });
    parts.push({
      kind: 'frac',
      n: num,
      d: den,
      ...(wholeValue === undefined ? {} : { whole: wholeValue }),
      text: text.slice(start, m.index + whole.length),
    });
    last = m.index + whole.length;
  }
  if (last < text.length) parts.push({ kind: 'text', text: text.slice(last) });
  return parts;
}
