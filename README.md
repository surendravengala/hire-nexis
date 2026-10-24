# Hire Nexis — Premium Staffing & Recruitment Website

A production-ready, frontend-only corporate website for **Hire Nexis**, built with React, Vite, React Router, CSS3, Lucide React, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Tech stack

- React (functional components + hooks)
- Vite
- React Router DOM
- CSS3 design system
- Lucide React icons
- Framer Motion animations

No backend, database, or authentication is included.

## Project structure

```
src/
  assets/          # logo and image assets
  components/      # Header, Footer, shared UI
  config/
    siteData.js    # company details, nav, services, contact, images
  pages/           # route-level pages
  styles/          # global, header, footer, page styles
  App.jsx
  main.jsx
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/contract-staffing` | Contract Staffing |
| `/services/permanent-staffing` | Permanent Staffing |
| `/services/c2h-staffing` | C2H Staffing |
| `/services/rpo` | RPO |
| `/clients` | Our Clients |
| `/contact` | Contact Us |
| `*` | 404 |

## Customizing content

### Contact details, social links, and company copy

Edit `src/config/siteData.js`:

- `siteConfig.contact` — email, phone, address
- `siteConfig.social` — LinkedIn / X links
- `services`, `industries`, `faqs`, `values`, etc.

### Logo

Replace the logo treatment in `Header.jsx` / `Footer.jsx`, or swap `src/assets/logo/logo.svg` and import it where needed. Update `public/favicon.svg` for the browser icon.

### Images

Image URLs live in `images` inside `siteData.js`. Replace with local files under `src/assets/images/` or your own CDN URLs. Current photos are Unsplash placeholders (replaceable).

### Client logos

Update `clientPlaceholders` in `siteData.js` with real assets when available. Do not present placeholders as actual clients.

### Contact form

The form validates on the client and uses a **mock submission** (no email delivery). To go live, connect a service such as Formspree, Netlify Forms, or your own API endpoint in `src/pages/Contact.jsx`.

## SPA hosting / refresh on nested routes

Because this is a single-page app, the host must rewrite unknown paths to `index.html` so routes like `/services/rpo` work on refresh.

- **Vercel** — `vercel.json` is included
- **Netlify** — `netlify.toml` and `public/_redirects` are included

### Deploy to Vercel

1. Push the repo to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Framework preset: Vite (build `npm run build`, output `dist`)
4. Deploy — SPA rewrites are already configured

### Deploy to Netlify

1. Import the repo in Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy — redirects are already configured

## Accessibility & motion

- Semantic landmarks, labeled forms, keyboard navigation, and focus styles are implemented
- Framer Motion respects `prefers-reduced-motion`

## Design notes

Brand colors are defined as CSS variables in `src/styles/global.css`:

- White `#FEFEFE`
- Forest green `#1B4332`
- Light green `#D8E8DE`
- Soft background `#F5F8F5`
- Dark text `#18231D`
- Secondary text `#66736B`
- Borders `#E3EAE5`

Typography: **Fraunces** (headings) and **Manrope** (body).
