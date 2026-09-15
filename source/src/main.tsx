import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {Portfolio, CaseStudy} from '../app/portfolio';
import {projects} from '../app/project-data';
import '../app/globals.css';
const slug = location.pathname.match(/\/projects\/([^/]+)/)?.[1];
const project=projects.find(p=>p.slug===slug);
if(project) document.title=project.name+' — Riya Singh';
hydrateRoot(document.getElementById('root')!,project?<CaseStudy project={project}/>:<Portfolio/>);
