# slabsvinyl-com

Frontend build repo for **slabsvinyl.com** — Slabs Vinyl Supply.

> Deep archive of new-condition, factory-sealed vinyl records.

---

## Repo Structure

```
slabsvinyl-com/
├── design-system/
│   ├── slabs-design-system-v2.md     ← Color, components, motion, grid — source of truth
│   └── typography-design-system.md  ← Font system, type scale, hierarchy rules
├── prompts/
│   ├── 00-master-build-prompt.md    ← Prepend to every section prompt
│   ├── 01-nav.md
│   ├── 02-hero.md
│   ├── 03-new-arrivals.md
│   ├── 04-from-the-crates.md
│   ├── 05-collections.md
│   ├── 06-sonic-lineage.md
│   ├── 07-about-trust.md
│   └── 08-footer.md
├── src/
│   ├── app/                          ← Next.js app router pages
│   ├── components/                   ← React components (builder output goes here)
│   └── styles/                       ← Global CSS, Tailwind base
├── public/
│   └── assets/                       ← Wordmark, images, fonts
├── tailwind.config.js
├── .gitignore
└── README.md
```

## How to Use With an AI Builder (Jules, v0, Gemini, Stitch)

1. Open `prompts/00-master-build-prompt.md` — copy the full contents
2. Paste it as the **first block** of your builder prompt
3. Below it, paste the contents of the section prompt you want built (e.g. `01-nav.md`)
4. The builder reads the master config first, then executes the section spec

## Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v3 (custom token config)
- **Fonts:** Google Fonts — Instrument Serif, Funnel Display, Funnel Sans
- **Icons:** Lucide React
- **Commerce backend:** Shopify Storefront API

## Design System Version
v2.0 · April 2026 · see `design-system/slabs-design-system-v2.md`
