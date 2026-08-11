# Nextgen Dev Portfolio — Template

A dark, motion-heavy Next.js portfolio template for software engineers. Built for resale — every piece of content lives in one file, and colors/fonts are theme tokens.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (all animation)
- Lenis (buttery smooth scroll)
- Fully generated, seeded avatar + project cover art (SVG, no external images/licenses needed)

## Quick start
```bash
npm install
npm run dev
```

## Customize (this is all a buyer needs to touch)

### 1. Content — `src/lib/config.ts`
Everything text-based lives here: name, role, bio, social links, skills list, projects, work experience. Change the `avatarSeed` string to instantly generate a new unique avatar (or change any project's `seed` for new cover art).

### 2. Colors & fonts — `src/app/globals.css`
The `:root` block at the top has every color token (`--bg`, `--accent`, `--accent-2`, `--accent-3`, etc.) and the `--gradient`. Swap those hex values to reskin the whole site instantly. Fonts are wired in `src/app/layout.tsx` via `next/font/google` — swap `Space_Grotesk`/`Inter`/`JetBrains_Mono` for any Google Font.

### 3. Sections — `src/components/`
Each section (Hero, About, Projects, SkillsMarquee, Experience, Contact, Footer, Nav) is an isolated component. Reorder, remove, or duplicate sections directly in `src/app/page.tsx`.

## Notes for resale
- No real photos or third-party brand assets are used — the avatar and project art are procedurally generated SVGs, safe to redistribute.
- All animations are CSS/Framer Motion based — no paid libraries.
- Mobile responsive; cursor FX and marquee auto-disable on touch devices.

## Deploy
```bash
npm run build
npm start
```
Or deploy directly to Netlify.
