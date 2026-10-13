import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { loadReleases, isReleased, isSpecificLongForm, slugOf } from '../scripts/releases.mjs';

function build(date, releasesFile) {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'mjb-'));
  let cwd = process.cwd();
  if (releasesFile) {
    cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'mjb-src-'));
    fs.cpSync('scripts', path.join(cwd, 'scripts'), { recursive: true });
    fs.cpSync('public', path.join(cwd, 'public'), { recursive: true });
    fs.mkdirSync(path.join(cwd, 'data'));
    fs.writeFileSync(path.join(cwd, 'data/releases.json'), JSON.stringify(releasesFile));
  }
  execFileSync('node', ['scripts/build.mjs'], { cwd, env: { ...process.env, OUT_DIR: out, RELEASE_DATE: date }, stdio: 'pipe' });
  return out;
}
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

test('releases.json is valid and today nothing is released', () => {
  const pieces = loadReleases();
  assert.ok(pieces.length >= 6);
  for (const p of pieces) assert.equal(isReleased(p, '2026-10-13'), false, p.id);
});

test('the build never publishes the archive or any unreleased piece', () => {
  const out = build('2026-10-13');
  const files = walk(out).map(f => path.relative(out, f)).sort();
  assert.deepEqual(files, ['404.html', 'index.html', 'robots.txt', 'sitemap.xml', 'style.css']);
  const all = files.map(f => fs.readFileSync(path.join(out, f), 'utf8')).join('\n');
  assert.doesNotMatch(all, /archive|MJBIZCON_|catalog\.json/);
  for (const p of loadReleases()) {
    assert.ok(!all.includes(p.title), `title of ${p.id} leaked`);
    assert.ok(!all.includes(slugOf(p.id)), `slug of ${p.id} leaked`);
  }
});

test('a released piece gets a page with every link; held and future pieces do not', () => {
  const src = 'https://rn-selected-work.vercel.app/sources/x/';
  const mk = (id, releasedAt, hold) => ({ id, title: `Title ${id}`, releasedAt, hold, postUrls: [`https://www.linkedin.com/posts/${id}`], longFormUrl: `https://example.org/a/${id}`, sourcePageUrl: src + id });
  const out = build('2026-10-13', { pieces: [mk('t/a1', '2026-10-01', false), mk('t/b2', '2026-10-13', false), mk('t/c3', '2026-10-14', false), mk('t/d4', '2026-10-01', true)] });
  const a = fs.readFileSync(path.join(out, 'pieces/a1.html'), 'utf8');
  const b = fs.readFileSync(path.join(out, 'pieces/b2.html'), 'utf8');
  assert.match(a, /linkedin\.com\/posts\/t\/a1/);
  assert.match(a, /example\.org\/a\/t\/a1/);
  assert.match(a, /sources\/x\/t\/a1/);
  assert.match(a, /href="\/"/);
  assert.match(a, /rel="next" href="\/pieces\/b2"/);
  assert.match(b, /rel="prev" href="\/pieces\/a1"/);
  assert.ok(!fs.existsSync(path.join(out, 'pieces/c3.html')));
  assert.ok(!fs.existsSync(path.join(out, 'pieces/d4.html')));
  const idx = fs.readFileSync(path.join(out, 'index.html'), 'utf8') + fs.readFileSync(path.join(out, 'sitemap.xml'), 'utf8');
  assert.ok(!idx.includes('c3') && !idx.includes('d4'));
  assert.ok(idx.includes('/pieces/a1') && idx.includes('/pieces/b2'));
});

test('the build refuses a released piece whose long-form is a home or subscribe page', () => {
  assert.equal(isSpecificLongForm('https://polymath-rn-collins.beehiiv.com/subscribe'), false);
  assert.equal(isSpecificLongForm('https://www.fatnugsmag.com/'), false);
  assert.throws(() => build('2026-10-13', { pieces: [{ id: 't/z', title: 'Z', releasedAt: '2026-10-01', hold: false, postUrls: [], longFormUrl: 'https://polymath-rn-collins.beehiiv.com/subscribe', sourcePageUrl: 'https://rn-selected-work.vercel.app/sources/x/z' }] }));
});

test('public page text has no em or en dashes and no exclamation points', () => {
  const out = build('2026-10-13');
  for (const f of walk(out).filter(f => f.endsWith('.html'))) {
    const text = fs.readFileSync(f, 'utf8').replace(/<[^>]+>/g, ' ');
    assert.doesNotMatch(text, /[–—!]/, f);
  }
});
