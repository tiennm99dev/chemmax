// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
/// <reference types="node" />
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { grades } from '#lib/curriculum/index.js';
import { KID_MAX_GRADE } from './band.js';

/**
 * The band theme's contract with each site: core (app.css) reads only the
 * custom properties of the site-owned `src/lib/site/decor.css`, whose art lives
 * in `src/lib/site/decor/`. These checks hold the art to the drawing rules and
 * the byte budget, so decoration stays light, static and free of text.
 */

const root = new URL('../../../', import.meta.url);
const siteDir = new URL('src/lib/site/', root);
const decorDir = new URL('decor/', siteDir);
const decorCss = readFileSync(new URL('decor.css', siteDir), 'utf8');
const svgFiles = readdirSync(decorDir).filter((f) => f.endsWith('.svg'));
const svgs = svgFiles.map((name) => ({
  name,
  bytes: statSync(new URL(name, decorDir)).size,
  text: readFileSync(new URL(name, decorDir), 'utf8'),
}));

const KB = 1024;
const ALLOWED = new Set([
  'svg',
  'g',
  'path',
  'circle',
  'ellipse',
  'rect',
  'line',
  'polyline',
  'polygon',
]);

/** @param {string} name */
const defines = (name) => new RegExp(`${name}\\s*:`).test(decorCss);

describe('site decoration contract', () => {
  it('defines the line art and the subject colours', () => {
    for (const name of ['--tile-line', '--spot-line', '--subject-tint', '--subject-ink']) {
      expect(defines(name), name).toBe(true);
    }
  });

  it('defines kid art when the curriculum has tiểu học grades', () => {
    if (!grades().some((g) => g.grade <= KID_MAX_GRADE)) return;
    expect(defines('--tile-kid'), '--tile-kid').toBe(true);
    expect(defines('--spot-kid'), '--spot-kid').toBe(true);
  });

  it('points every url() at a file in decor/', () => {
    const urls = [...decorCss.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map((m) => m[1]);
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) {
      expect(url, url).toMatch(/^\.\/decor\/[\w-]+\.svg$/);
      expect(existsSync(new URL(url, siteDir)), url).toBe(true);
    }
  });
});

describe('decoration art', () => {
  it('stays within the byte budget', () => {
    for (const { name, bytes } of svgs) {
      if (name.startsWith('tile-')) expect(bytes, name).toBeLessThanOrEqual(6 * KB);
      else if (name.startsWith('spot-')) expect(bytes, name).toBeLessThanOrEqual(3 * KB);
      else throw new Error(`${name}: decoration files are named tile-* or spot-*`);
    }
    const total = svgs.reduce((n, s) => n + s.bytes, 0);
    expect(total).toBeLessThanOrEqual(24 * KB);
  });

  it('uses only plain shapes, with a viewBox and no text, links or metadata', () => {
    for (const { name, text } of svgs) {
      const tags = [...text.matchAll(/<\s*([A-Za-z][\w:-]*)/g)].map((m) => m[1]);
      for (const tag of tags) expect(ALLOWED.has(tag), `${name}: <${tag}>`).toBe(true);
      expect(text, name).toMatch(/<svg[^>]*\sviewBox="/);
      expect(text.replace('http://www.w3.org/2000/svg', ''), name).not.toMatch(/https?:|href/);
      expect(text, name).not.toMatch(/<!--|<\?|\sid=|\sclass=|\sstyle=/);
      expect(text, `${name}: coordinates use at most one decimal`).not.toMatch(/\d\.\d{2}/);
    }
  });
});

describe('theme CSS in app.css', () => {
  const css = readFileSync(new URL('src/app.css', root), 'utf8');
  const theme = css.slice(css.indexOf('/* Age-band theme.'));

  it('stays within 3 KB', () => {
    expect(css).toContain('/* Age-band theme.');
    expect(new TextEncoder().encode(theme).length).toBeLessThanOrEqual(3 * KB);
  });

  it('carries no subject-specific art or colour', () => {
    expect(theme).not.toMatch(/url\(/);
    expect(theme).not.toMatch(/--(tile|spot)-(line|kid)\s*:|--subject-(tint|ink)\s*:/);
  });

  it('hides decoration in print and forced colours, and never animates it', () => {
    expect(theme).toMatch(/@media print\s*{[^}]*\.decor-layer/);
    expect(theme).toMatch(/@media \(forced-colors: active\)\s*{[^}]*\.decor-layer/);
    expect(theme).not.toMatch(/animation|transition/);
  });
});
