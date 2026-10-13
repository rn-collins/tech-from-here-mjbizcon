import fs from 'node:fs';

export const TZ = 'Pacific/Honolulu';

export function todayIn(tz = TZ, now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

export function loadReleases(file = 'data/releases.json') {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(data.pieces)) throw new Error('releases.json: pieces must be an array');
  const seen = new Set();
  for (const p of data.pieces) {
    if (!p.id || typeof p.id !== 'string') throw new Error('releases.json: every piece needs an id');
    if (seen.has(p.id)) throw new Error(`releases.json: duplicate id ${p.id}`);
    seen.add(p.id);
    if (typeof p.hold !== 'boolean') throw new Error(`releases.json: ${p.id} hold must be true or false`);
    if (p.releasedAt && !/^\d{4}-\d{2}-\d{2}$/.test(p.releasedAt)) throw new Error(`releases.json: ${p.id} releasedAt must be YYYY-MM-DD or empty`);
    if (!Array.isArray(p.postUrls)) throw new Error(`releases.json: ${p.id} postUrls must be an array`);
  }
  return data.pieces;
}

export function isReleased(p, today = todayIn()) {
  return Boolean(p.releasedAt) && p.releasedAt <= today && p.hold === false;
}

// A long-form link must be the specific piece, never a home or subscribe page.
export function isSpecificLongForm(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return false;
    if (u.pathname === '/' || u.pathname === '') return false;
    if (/subscribe/i.test(u.pathname)) return false;
    return true;
  } catch { return false; }
}

export function checkReleasedLinks(p) {
  const problems = [];
  if (!isSpecificLongForm(p.longFormUrl || '')) problems.push('longFormUrl must be the specific article, not a home or subscribe page');
  if (!/^https:\/\/rn-selected-work\.vercel\.app\/sources\/.+/.test(p.sourcePageUrl || '')) problems.push('sourcePageUrl must be an rn-selected-work /sources page');
  for (const u of p.postUrls) { try { new URL(u); } catch { problems.push(`bad post URL ${u}`); } }
  return problems;
}

export function slugOf(id) {
  return id.split('/').pop().replace(/[^a-z0-9-]/gi, '-').toLowerCase();
}
