# Copilot Instructions — Slabs Vinyl Supply

This workspace is a headless Shopify storefront for **slabsvinyl.com** built with Next.js 13, Tailwind CSS v3, and TypeScript.

Project-specific naming conventions, metafield definitions, env vars, and file paths are documented in `docs/slabs-project-conventions.md`.

## Key Rules

- Use only design tokens defined in `tailwind.config.js` — no hardcoded hex values, no default Tailwind color names
- `border-radius: 0` on all components — only exception is the vinyl disc (`rounded-full`)
- Fonts: `font-serif` (Instrument Serif), `font-display` (Funnel Display), `font-sans` (Funnel Sans) — no other fonts
- Amber (`#CD9121`) is valid on dark surfaces only — use `text-dark-accent` (`#E8A830`) on dark, `text-forest` (`#204F41`) on light
- No buy buttons or interactive overlays on product grid cards — "Grab it" lives on PDP only
- All components saved to `/src/components/[ComponentName].tsx` as default named exports
- Shopify Storefront API queries live in `/lib/shopify.ts`
- Env vars follow conventions in `docs/slabs-project-conventions.md`
