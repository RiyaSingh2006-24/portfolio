import React from 'react';
import {renderToString} from 'react-dom/server';
import {Portfolio,CaseStudy} from '../app/portfolio';
import {projects} from '../app/project-data';
export function render(slug?:string){const project=projects.find(p=>p.slug===slug);return renderToString(project?<CaseStudy project={project}/>:<Portfolio/>)}
export {projects};
