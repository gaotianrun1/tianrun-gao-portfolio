# Tianrun Gao — Academic Portfolio

Personal academic website for Tianrun Gao, focused on AI for science, complex physical
systems, engineering simulation, publications, and curriculum vitae.

## Website structure

- `/` — research positioning, research interests, and featured publications
- `/about` — profile, research experience, education, skills, and honors
- `/work` — complete publication list
- `/cv` — browser preview and PDF download

The site is built with Next.js, TypeScript, and Once UI. Content is data-driven so that
research updates remain consistent across pages.

## Updating content

Most public-facing information lives in:

- `src/resources/content.tsx` — biography, research interests, experience, publications,
  social links, and page descriptions
- `src/resources/once-ui.config.ts` — routes, site URL, theme, and visual settings
- `public/images/publications/` — publication thumbnails
- `public/files/CV of Tianrun Gao.pdf` — downloadable CV
- `public/images/cv/` — CV preview pages

Publication records are the single source of truth for both the full publication list and
the featured homepage cards. Add `featured` metadata to a publication only when it should
appear on the homepage.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

Before publishing, verify:

- the homepage at desktop and mobile widths;
- navigation labels and keyboard focus;
- publication links and images;
- CV preview and PDF download;
- canonical metadata and the 1200 × 630 social card.

## Content conventions

- Use sentence case for headings and paper metadata.
- Use en dashes for date ranges and `Present` for ongoing roles.
- Write degree status as “Master’s Student”.
- Keep research-interest labels concise enough to wrap cleanly on mobile.
- Give icon-only controls an accessible name.
- Keep one primary `h1` on each page.

## Deployment

The production project is connected to Vercel. Updates to the `main` branch are deployed
through the existing Vercel project configuration.

The Once UI attribution in the footer is retained in accordance with the template license.
