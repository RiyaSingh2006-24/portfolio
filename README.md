# Riya Singh — GitHub Pages portfolio

Live: https://riyasingh2006-24.github.io/portfolio/

A standalone, pre-rendered React portfolio hosted directly on GitHub Pages. Includes project filtering, case studies, animated 3D hero, motion controls, and the updated resume.

## Rebuild

The editable source is in `source/`. From that folder, run `npm install`, then `npm run build`. The preparation script copies the deployed resume and blueprint from the parent directory into `public/`. Copy the resulting `source/dist/` files to the root of the `gh-pages` branch and commit to deploy.

Vite compiles the interactive application; React server rendering creates the initial HTML for the homepage and every project route. No embedded external website, application server, or login is required.
