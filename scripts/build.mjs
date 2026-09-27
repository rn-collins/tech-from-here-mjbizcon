import fs from 'node:fs'; import path from 'node:path';
fs.rmSync('dist',{recursive:true,force:true}); fs.cpSync('public','dist',{recursive:true});
const root='archive'; const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name); if(e.isDirectory()) walk(p); else if(e.name.endsWith('.md')) files.push({name:e.name,path:p.replaceAll('\\','/'),bytes:fs.statSync(p).size});}}
walk(root); fs.mkdirSync('dist/archive',{recursive:true}); fs.cpSync(root,'dist/archive',{recursive:true});
fs.writeFileSync('dist/catalog.json',JSON.stringify({project:'Tech From Here: MJBizCon',generated:new Date().toISOString(),count:files.length,files},null,2));
