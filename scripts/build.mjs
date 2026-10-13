// Builds the public gallery. The only input that decides what is public is
// data/releases.json. The research archive in archive/ is internal and is
// never copied into dist.
import fs from 'node:fs';
import path from 'node:path';
import { loadReleases, isReleased, todayIn, checkReleasedLinks, slugOf } from './releases.mjs';

const SITE = 'https://tech-from-here-mjbizcon.vercel.app';
const out = process.env.OUT_DIR || 'dist';
const today = process.env.RELEASE_DATE || todayIn();

const pieces = loadReleases();
const released = pieces.filter(p => isReleased(p, today))
  .sort((a, b) => a.releasedAt.localeCompare(b.releasedAt) || a.id.localeCompare(b.id));

const errors = [];
for (const p of released) for (const e of checkReleasedLinks(p)) errors.push(`${p.id}: ${e}`);
if (errors.length) { console.error('Released pieces are missing required links:\n' + errors.join('\n')); process.exit(1); }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return 'link'; } };

function page({ title, description, body, canonical }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}">${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ''}<link rel="stylesheet" href="/style.css"></head><body>${body}<footer>RN Collins, Tech From Here</footer></body></html>\n`;
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync('public/style.css', path.join(out, 'style.css'));

const header = `<header><p class="kicker">TECH FROM HERE / MJBIZCON / NEVADA</p><h1>The technology is already governing the plant.</h1><p class="lede">An RN investigation into the tags, tests, interfaces, rules, rooms and records that turn cannabis into a regulated technical system.</p></header>`;

const cards = released.map(p => `<a class="card" href="/pieces/${slugOf(p.id)}"><b>${esc(p.title)}</b><small>Released ${esc(p.releasedAt)}</small></a>`).join('');
const indexBody = `${header}<main><section><p class="eyebrow">GALLERY</p><h2>Released pieces</h2>${released.length ? `<div class="grid">${cards}</div>` : '<p>Nothing released yet. Pieces appear here on the day they are published.</p>'}</section></main>`;
fs.writeFileSync(path.join(out, 'index.html'), page({ title: 'Tech From Here: MJBizCon', description: 'A source-led investigation of the technologies governing Nevada cannabis.', body: indexBody, canonical: SITE + '/' }));

if (released.length) fs.mkdirSync(path.join(out, 'pieces'), { recursive: true });
released.forEach((p, i) => {
  const prev = released[i - 1], next = released[i + 1];
  const posts = p.postUrls.map(u => `<li><a href="${esc(u)}">Post on ${esc(hostOf(u))}</a></li>`).join('');
  const body = `<header><p class="kicker"><a href="/">TECH FROM HERE / MJBIZCON</a></p><h1>${esc(p.title)}</h1><p class="lede">Released ${esc(p.releasedAt)}</p></header><main><section><h2>Read and follow</h2><ul class="links">${posts}<li><a href="${esc(p.longFormUrl)}">Read the full article</a></li><li><a href="${esc(p.sourcePageUrl)}">Sources for this piece</a></li></ul></section><nav class="pager">${prev ? `<a rel="prev" href="/pieces/${slugOf(prev.id)}">Previous: ${esc(prev.title)}</a>` : ''}<a href="/">Gallery index</a>${next ? `<a rel="next" href="/pieces/${slugOf(next.id)}">Next: ${esc(next.title)}</a>` : ''}</nav></main>`;
  fs.writeFileSync(path.join(out, 'pieces', `${slugOf(p.id)}.html`), page({ title: p.title, description: p.title, body, canonical: `${SITE}/pieces/${slugOf(p.id)}` }));
});

fs.writeFileSync(path.join(out, '404.html'), page({ title: 'Not found', description: 'Page not found.', body: `<header><p class="kicker">TECH FROM HERE / MJBIZCON</p><h1>Not found</h1><p class="lede">This page is not public. <a href="/">Go to the gallery index</a>.</p></header>` }));

const urls = [SITE + '/', ...released.map(p => `${SITE}/pieces/${slugOf(p.id)}`)];
fs.writeFileSync(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`Built ${released.length} released of ${pieces.length} pieces for ${today} (Pacific/Honolulu) into ${out}`);
