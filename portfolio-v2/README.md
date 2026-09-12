# Riya Singh — Portfolio

An interactive portfolio bringing together cybersecurity engineering, full-stack development and freelance client websites.

## Highlights

- Animated 3D hero with pause control and reduced-motion support.
- Separate cybersecurity, full-stack/frontend and freelance project galleries.
- Category and skill filters, mobile navigation and expandable case studies.
- WebShield: authorized assessment, analyst validation, evidence, remediation and retesting. Includes live demo and repository links.
- PrivacyGuard: local-first network and identity exposure monitoring, SQLite history, PDF reporting and Windows packaging.
- Dedicated skills, experience, resume, LinkedIn and GitHub links.

## Run locally

Requires Node.js 22.13 or newer and pnpm 11.25.0.

```sh
cd portfolio-v2
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by the development server.

```sh
pnpm build
pnpm start
```

The predev/prebuild scripts restore the original PDF and blueprint from the base64 source files in `assets/`. This keeps those assets reproducible through a text-only source upload. They are not fetched from external URLs.

## Stack and source

React, TypeScript, Vinext/Vite, Tailwind CSS, Radix UI and Lucide icons.

- `app/portfolio.tsx`: homepage, navigation and case study components.
- `app/project-data.ts`: project descriptions, technologies and external links.
- `app/globals.css`: styling, responsive layouts and animation.
- `app/projects/[slug]/page.tsx`: project detail routes.

This folder contains the updated portfolio. The repository's original project is preserved at the root. This source upload does not enable GitHub Pages or change the private hosted site's audience. Deployment-specific identifiers and credentials are excluded.

## Validation

The deployed source passed its production build and TypeScript checks. Browser-based mobile and desktop QA was not completed because browser access was blocked.
