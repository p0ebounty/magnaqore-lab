# MagnaQore Lab

A bilingual (EN/RU) marketing website for MagnaQore, an AI implementation and transformation company, built as a fast single-page app with React 19, TypeScript and Vite.

## Overview

The site presents MagnaQore's "AI Operating System" offer to two audiences: enterprise clients and prospective channel partners. It is a static, content-driven SPA with no backend: all copy lives in JSON locale files and a typed data module, so content can be updated without touching component code.

### Features

- **Five routed pages**
  - `/` – landing page: hero, market shift, problem/solution narrative, interactive "iceberg" pillar diagram, value proposition, AI system preview, key success factors, proof of work, team and call to action
  - `/ai-operating-system` – deep dive into the AI OS pillars, portfolio, delivery model and competitive advantage
  - `/partnership` – partnership framework, commercial model and revenue scenarios
  - `/clients` – client-facing pitch with an embedded explainer video (switches with the selected language), ROI figures, delivery journey, engagement terms and team
  - `/case-studies` – case studies with external proof links, embedded video testimonials and team credentials
- **Internationalization**: English and Russian via `i18next` / `react-i18next`, one namespace per page; the language is detected from `localStorage` or the browser and switched from a floating language button
- **SEO**: per-page `<title>`, description, Open Graph and Twitter Card tags via `react-helmet-async`, plus a static `robots.txt` and `sitemap.xml`
- **Interactive UI**: custom spring-physics cursor with click ripples (desktop only), magnetic buttons, spotlight cards, scroll-reveal animations (`IntersectionObserver`), animated SVG diagrams, team member modals
- **Contact flow**: a global contact modal (React Context) with an email link, and "book a call" CTAs pointing to an external scheduling page
- **Responsive navigation**: mobile menu with ARIA attributes (`aria-expanded`, `aria-controls`); privacy-friendly YouTube embeds (`youtube-nocookie.com`)

## How it works

```
index.html
  └─ src/main.tsx            HelmetProvider + i18n bootstrap
       └─ App.tsx            BrowserRouter, ScrollToTop, ContactProvider
            └─ Layout        header/nav, footer, cursor, contact modal, language switcher
                 └─ pages/*  route components, rendered from locale JSON + data/content.ts
```

- **Content**: page copy is stored in `src/locales/{en,ru}/<namespace>.json`; case studies, team profiles and credential links are stored in `src/data/content.ts`.
- **Styling**: CSS Modules per component/page, plus global design tokens (`src/styles/variables.css`) and shared animations (`src/styles/animations.css`).
- **Routing**: client-side routing with React Router; the hosting config rewrites all paths to `index.html`.

## Tech stack

| Area | Tools |
|---|---|
| Framework | React 19, TypeScript 5.9 |
| Build | Vite 8, `@vitejs/plugin-react` |
| Routing | React Router 7 |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| SEO | react-helmet-async |
| Icons | lucide-react |
| Styling | CSS Modules, CSS custom properties |
| Linting | ESLint 9, typescript-eslint, react-hooks, react-refresh |
| Hosting | Vercel (`vercel.json`) or Netlify (`public/_redirects`) |

## Repository structure

```
.
├── public/                  static assets, robots.txt, sitemap.xml, Netlify _redirects
├── scripts/
│   └── gen-landing-locales.mjs   generates src/locales/{en,ru}/landing.json
├── src/
│   ├── assets/              logo, hero and team images
│   ├── components/
│   │   ├── landing/         landing-page sections and SVG diagrams
│   │   ├── team/            team grid + profile modal
│   │   └── *.tsx            Layout, SEO, ContactModal, LanguageSwitcher, CustomCursor, ...
│   ├── context/             ContactContext (global contact modal state)
│   ├── data/content.ts      case studies, team profiles, credential links
│   ├── hooks/useReveal.ts   scroll-reveal hook
│   ├── i18n/config.ts       i18next setup (EN/RU, namespaces, detection)
│   ├── locales/{en,ru}/     translation JSON per page
│   ├── pages/               route components + CSS Modules
│   └── styles/              design tokens and animations
├── index.html
├── vercel.json
└── vite.config.ts
```

## Getting started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite 8)
- npm

### Install and run

```bash
npm install
npm run dev        # start the dev server with HMR
npm run build      # type-check (tsc -b) and build to dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint
```

### Environment variables

None. The site is fully static and does not read any environment variables.

### Editing content

- Page text: edit `src/locales/en/*.json` and `src/locales/ru/*.json` (keep keys in sync across languages).
- Case studies, team and credential links: edit `src/data/content.ts`.
- `node scripts/gen-landing-locales.mjs` regenerates both `landing.json` files from the data inside the script. It **overwrites** them, so run it only if the script is the source of truth for your changes.

## Deployment

The output in `dist/` is a static SPA and can be served by any static host.

- **Vercel**: `vercel.json` rewrites every route to `/index.html`.
- **Netlify**: `public/_redirects` (`/* /index.html 200`) does the same.

Before deploying under your own domain, update the site URL in:

- `public/robots.txt` and `public/sitemap.xml` (e.g. `https://example.com`)
- the default `url` prop in `src/components/SEO.tsx`

The contact email, booking link and embedded video IDs are hard-coded in `src/components/ContactModal.tsx`, `src/components/Layout.tsx`, `src/pages/Clients.tsx` and `src/pages/CaseStudies.tsx`. Replace them with your own values.

## Notes

- There is no backend. The original contact form in `ContactModal.tsx` is commented out, and the modal shows an email link instead.
- The language choice is cached in `localStorage`.
- The custom cursor is disabled on touch devices (`pointer: coarse`).
