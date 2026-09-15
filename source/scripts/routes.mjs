import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {render,projects} from '../.render/server.js';
const template=readFileSync('dist/index.html','utf8');
function page(slug){return template.replace('<div id="root"></div>','<div id="root">'+render(slug)+'</div>')}
writeFileSync('dist/index.html',page());
for(const project of projects){mkdirSync('dist/projects/'+project.slug,{recursive:true});writeFileSync('dist/projects/'+project.slug+'/index.html',page(project.slug).replace('<title>Riya Singh — Developer & Security Portfolio</title>','<title>'+project.name+' — Riya Singh</title>'));}
writeFileSync('dist/.nojekyll','');
