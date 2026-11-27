// Post-build guard: fails the build if the output would break the CSP,
// load third-party code, link to a missing page, or lose basic SEO tags.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const errors = [];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = walk(DIST).filter((f) => f.endsWith('.html'));
if (pages.length === 0) errors.push('no HTML pages in dist/');

const resolves = (url) => {
  const path = decodeURIComponent(url.split(/[?#]/)[0]);
  const target = join(DIST, path);
  return path.endsWith('/') ? existsSync(join(target, 'index.html')) : existsSync(target);
};

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file);
  const fail = (msg) => errors.push(`${page}: ${msg}`);

  // CSP: script-src 'self', style-src 'self' (JSON-LD data blocks are not executed)
  for (const tag of html.match(/<script\b[^>]*>/g) ?? []) {
    if (!/\bsrc=/.test(tag) && !/type="application\/ld\+json"/.test(tag)) fail(`inline script ${tag}`);
  }
  if (/<style\b/.test(html)) fail('inline <style>');
  if (/\sstyle="/.test(html)) fail('inline style attribute');
  if (/\son[a-z]+="/.test(html)) fail('inline event handler');

  // No third-party resources
  for (const [, url] of html.matchAll(/\ssrc="([^"]+)"/g)) {
    if (/^(https?:)?\/\//.test(url)) fail(`external src ${url}`);
  }
  for (const tag of html.match(/<link\b[^>]*>/g) ?? []) {
    const href = tag.match(/href="([^"]+)"/)?.[1] ?? '';
    if (/rel="(stylesheet|preload|icon|apple-touch-icon)"/.test(tag) && /^(https?:)?\/\//.test(href)) fail(`external ${tag}`);
  }

  // Internal links and assets must exist
  for (const [, url] of html.matchAll(/\s(?:href|src)="(\/[^"/][^"]*|\/)"/g)) {
    if (!resolves(url)) fail(`broken link ${url}`);
  }

  // Basic SEO
  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail('needs exactly one <h1>');
  for (const re of [/<title>[^<]{10,}<\/title>/, /<meta name="description" content="[^"]{50,}"/, /<link rel="canonical" href="https:\/\/workelana\.com\//]) {
    if (!re.test(html)) fail(`missing ${re.source}`);
  }
}

if (errors.length) {
  console.error(`check-dist: ${errors.length} problem(s)\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`check-dist: ${pages.length} pages OK`);
