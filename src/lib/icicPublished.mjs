import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Only published files committed to the Astro repository are used.
// No direct database access, private tables, or live draft queries.
export function readPublishedEditions() {
  const root=join(process.cwd(),'public','icic-published');
  if(!existsSync(root)) return [];
  const editions=[];
  for(const dir of readdirSync(root,{withFileTypes:true})) {
    if(!dir.isDirectory() || !/^\d{4}$/.test(dir.name)) continue;
    const year=Number(dir.name);
    if(year<2027 || year>2200) continue;
    function read(section) {
      const file=join(root,dir.name,section+'.json');
      if(!existsSync(file)) return null;
      const data=JSON.parse(readFileSync(file,'utf8'));
      if(Number(data.year)!==year) {
        throw Error('Wrong ICIC publication year in '+file);
      }
      return data;
    }
    const programme=read('programme');
    const posters=read('posters');
    if(programme || posters) editions.push({year,programme,posters});
  }
  return editions.sort((a,b)=>b.year-a.year);
}
