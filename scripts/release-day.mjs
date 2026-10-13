// Used by the daily GitHub Actions run. Prints "due=true" when any piece
// becomes public today (Pacific/Honolulu), so the workflow knows to redeploy.
import fs from 'node:fs';
import { loadReleases, todayIn } from './releases.mjs';
const today = todayIn();
const due = loadReleases().filter(p => p.releasedAt === today && p.hold === false).map(p => p.id);
console.log(`today=${today} due=${due.join(',') || 'none'}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `due=${due.length > 0}\ntoday=${today}\n`);
