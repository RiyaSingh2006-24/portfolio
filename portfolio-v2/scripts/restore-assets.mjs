import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const root = new URL('../', import.meta.url);
mkdirSync(new URL('public/', root), { recursive: true });
for (const name of ['Riya-Singh-Resume.pdf', 'privacyguard-blueprint.png']) {
  const data = readFileSync(new URL(`assets/${name}.base64`, root), 'utf8');
  writeFileSync(new URL(`public/${name}`, root), Buffer.from(data.trim(), 'base64'));
}
console.log('Resume and PrivacyGuard blueprint restored.');
