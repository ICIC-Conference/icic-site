
const fs=require('fs');
const path=require('path');

const root=process.cwd();
const dataFile=path.join(root,'src','data','homepage.ts');
const libFile=path.join(root,'src','lib','icicHomepage.mjs');

if(!fs.existsSync(dataFile)){
  throw Error('Run this patch in the ICIC Astro website repository.');
}
if(fs.existsSync(libFile)){
  throw Error('Published homepage integration already installed.');
}

const library=String.raw`
import { existsSync,readFileSync } from 'node:fs';
import { join } from 'node:path';

const activePath=join(
  process.cwd(),
  'public',
  'icic-published',
  'active-website.json'
);

function activePublication(){
  if(!existsSync(activePath))return null;

  const data=JSON.parse(
    readFileSync(activePath,'utf8')
  );

  if(
    !Number.isInteger(data.year)||
    data.year<2027||
    data.year>2200||
    !data.content||
    typeof data.content!=='object'||
    Array.isArray(data.content)
  ){
    throw Error('Invalid active ICIC website publication');
  }

  return data;
}

export function getActiveWebsiteYear(){
  return activePublication()?.year||null;
}

function validUrl(value,fallback=''){
  if(typeof value!=='string')return fallback;

  const v=value.trim();

  if(
    /^https:\/\/[^\s<>"']+$/i.test(v)||
    /^\/(?!\/)[^\s<>"']+$/.test(v)
  )return v;

  return fallback;
}

function record(value){
  return value&&typeof value==='object'&&
    !Array.isArray(value)?value:{};
}

function list(value){
  return Array.isArray(value)?value:[];
}

function groupDocuments(items){
  const groups=new Map();

  for(const item of list(items)){
    if(!item||typeof item!=='object')continue;

    const group=String(item.group||'General').trim();
    const label=String(item.label||'').trim();
    const href=validUrl(item.href);

    if(!label||!href)continue;

    if(!groups.has(group))groups.set(group,[]);

    groups.get(group).push({
      label,
      href,
      external:href.startsWith('https://')
    });
  }

  return Array.from(groups,([group,items])=>({
    group,items
  }));
}

export function getActiveHomepage(fallback){
  const publication=activePublication();
  if(!publication)return fallback;

  const content=record(publication.content);
  const hero=record(content.hero);
  const theme=record(content.theme);
  const video=record(content.video);
  const programme=record(content.conferenceProgram);
  const footer=record(content.footer);

  const oral=record(content.oralPresentationsPage);
  const poster=record(content.posterPresentationsPage);

  const image=(v,f='')=>validUrl(v,f);

  const safeKeynotes=list(content.keynote)
    .filter(k=>k&&typeof k==='object')
    .map(k=>({
      ...k,
      image:image(k.image)
    }));

  const safeSponsors=list(content.sponsors)
    .filter(s=>s&&typeof s==='object')
    .map(s=>({
      ...s,
      image:image(s.image),
      href:validUrl(s.href)
    }))
    .filter(s=>s.image&&s.href);

  const videoUrl=validUrl(video.url);
  const videoAllowed=
    /^https:\/\/(www\.)?youtube\.com\/embed\//i
      .test(videoUrl)||
    /^https:\/\/www\.youtube-nocookie\.com\/embed\//i
      .test(videoUrl);

  const programmeUrl=validUrl(programme.url);

  return {
    ...fallback,

    // The old 2026 schedules must not appear on the new
    // active homepage. The published programme remains
    // independently available in the conference catalogue.
    scheduleDisplayOn:false,
    speakerScheduleDisplayOn:false,

    hero:{
      ...fallback.hero,
      ...hero,
      image:image(hero.image,fallback.hero.image)
    },

    theme:{
      ...fallback.theme,
      ...theme
    },

    video:{
      displayOn:!!video.displayOn&&videoAllowed,
      url:videoAllowed?videoUrl:''
    },

    conferenceProgram:{
      displayOn:!!programme.displayOn&&!!programmeUrl,
      url:programmeUrl
    },

    keynote:safeKeynotes,
    sponsors:safeSponsors,

    importantDates:list(content.importantDates)
      .filter(x=>x&&x.label&&x.value),

    documents:groupDocuments(content.documents),

    footer:{
      ...fallback.footer,
      ...footer
    },

    oralPresentationsPage:{
      ...fallback.oralPresentationsPage,
      ...oral
    },

    posterPresentationsPage:{
      ...fallback.posterPresentationsPage,
      ...poster,
      categories:list(poster.categories)
    }
  };
}
`;

const pages=[
  'src/pages/index.astro',
  'src/pages/oral-presentations.astro',
  'src/pages/poster-presentations.astro',
  'src/layouts/MainLayout.astro'
];

const originalImport=
  'import homepageData from "../data/homepage";';

const replacementImport=
  'import baseHomepageData from "../data/homepage";\n'+
  'import { getActiveHomepage, getActiveWebsiteYear } '+
  'from "../lib/icicHomepage.mjs";\n'+
  'const homepageData=getActiveHomepage(baseHomepageData);';

const edits={};

function replace(code,before,after,filename){
  if(!code.includes(before)){
    throw Error(
      'Expected code not found in '+filename+
      ': '+before.slice(0,80)
    );
  }
  return code.replace(before,after);
}

for(const relative of pages){
  const file=path.join(root,relative);

  if(!fs.existsSync(file)){
    throw Error('Missing Astro page: '+relative);
  }

  let code=fs.readFileSync(file,'utf8');

  code=replace(
    code,originalImport,replacementImport,relative
  );

  if(relative==='src/pages/index.astro'){
    code=replace(
      code,
      '<MainLayout title="ICIC 2026">',
      '<MainLayout title={`ICIC ${getActiveWebsiteYear()||2026}`}>',
      relative
    );

    const anchor=
      "const base = import.meta.env.BASE_URL.replace(/\\/$/, '');";

    code=replace(
      code,
      anchor,
      anchor+"\n"+
      "const assetUrl=u=>/^https:\\/\\//i.test(u)"+
      "?u:`${base}${u}`;",
      relative
    );

    for(const [before,after] of [
      [
        'src={`${base}${hero.image}`}',
        'src={assetUrl(hero.image)}'
      ],
      [
        'src={`${base}${k.image}`}',
        'src={assetUrl(k.image)}'
      ],
      [
        'src={`${base}${sponsor.image}`}',
        'src={assetUrl(sponsor.image)}'
      ],
      [
        'href={`${base}${conferenceProgram.url}`}',
        'href={assetUrl(conferenceProgram.url)}'
      ],
      [
        'href={doc.external ? doc.href : `${base}${doc.href}`}',
        'href={assetUrl(doc.href)}'
      ]
    ]){
      code=replace(code,before,after,relative);
    }
  }

  if(
    relative==='src/pages/oral-presentations.astro'||
    relative==='src/pages/poster-presentations.astro'
  ){
    const anchor=
      "const base = import.meta.env.BASE_URL.replace(/\\/$/, '');";

    code=replace(
      code,
      anchor,
      anchor+"\n"+
      "const assetUrl=u=>/^https:\\/\\//i.test(u)"+
      "?u:`${base}${u}`;",
      relative
    );

    code=replace(
      code,
      'href={`${base}${conferenceProgram.url}`}',
      'href={assetUrl(conferenceProgram.url)}',
      relative
    );
  }

  if(relative==='src/layouts/MainLayout.astro'){
    code=replace(
      code,
      'const pageTitle = title === "ICIC 2026" ? title : `${title} | ICIC 2026`;',
      'const siteLabel=`ICIC ${getActiveWebsiteYear()||2026}`;\n'+
      'const pageTitle = title === siteLabel ? title : `${title} | ${siteLabel}`;',
      relative
    );

    code=replace(
      code,
      '<meta property="og:site_name" content="ICIC 2026" />',
      '<meta property="og:site_name" content={siteLabel} />',
      relative
    );
  }

  edits[file]=code;
}

// No writes until all four page patches have validated.
fs.mkdirSync(path.dirname(libFile),{recursive:true});
fs.writeFileSync(libFile,library);

for(const [file,code] of Object.entries(edits)){
  fs.writeFileSync(file,code);
}

console.log(
  'ICIC active-website support installed in Astro.'
);
