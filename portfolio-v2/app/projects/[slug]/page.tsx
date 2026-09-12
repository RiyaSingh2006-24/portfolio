import { notFound } from 'next/navigation';
import { projects } from '../../project-data';
import { CaseStudy } from '../../portfolio';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const p=projects.find(p=>p.slug===slug);
  return {title:p?`${p.name} — Riya Singh`:'Project not found — Riya Singh',description:p?.summary};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const project=projects.find(p=>p.slug===slug);
  if(!project) notFound();
  return <CaseStudy project={project}/>;
}
