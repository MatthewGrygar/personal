# Matthew Grygar — Personal Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design

- **Primary color**: Amber Smoke `#F2E0D0`
- **Secondary color**: Blue Mirage `#6E88B0`
- **Typography**: Cormorant Garamond (display) + DM Sans (body) + DM Mono (labels)
- Elegant, animated slide-per-section layout with a persistent side navigation rail
- Czech/English bilingual support

## Sections

1. **Hero** — Name, rotating role titles, photo, signature, stats
2. **About** — Value pillars, toolbox, current role
3. **Experience** — Interactive tabbed timeline (Trask, OX Point, NAKIT)
4. **Projects** — Filterable project cards
5. **Skills** — Skill groups, strengths, testimonials, future goals
6. **Contact** — Email/LinkedIn links + contact form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (GitHub Pages)

This is a Next.js app — deploy to **Vercel** (recommended) or any Node-capable host.

For GitHub Pages with static export, add to `next.config.mjs`:
```js
output: 'export'
```

Then push and configure GitHub Pages to use the `out/` directory.

## Customization

- Edit `/src/data/site.ts` for all content (bilingual EN/CS)
- Replace `/public/profile.png` with your photo
- Replace `/public/signature.png` with your signature
- Replace `/public/cv.pdf` with your CV
- Update `email` and `linkedin` in `site.ts`
