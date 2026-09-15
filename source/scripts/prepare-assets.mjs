import {copyFileSync,mkdirSync} from 'node:fs';
mkdirSync('public',{recursive:true});
for(const f of ['Riya-Singh-Resume.pdf','privacyguard-blueprint.png','favicon.svg'])copyFileSync('../'+f,'public/'+f);
