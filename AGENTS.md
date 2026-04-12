# AGENTS.md — Slabs Vinyl Supply
## slabsvinyl.com · Frontend Build Repo

Read this file before every task. These rules are non-negotiable.

---

## Repo Structure

```
slabsvinyl-com/
├── design-system/
│   ├── slabs-design-system-v2.md     ← Source of truth for all components
│   └── typography-design-system.md  ← Font system and type scale
├── prompts/
│   ├── slabs-master-build-prompt.md ← Full design system in prompt form
│   └── 01-nav.md → 08-footer.md    ← Section build specs
├── src/
│   ├── app/                          ← Next.js App Router pages
│   ├── components/                   ← Output all components here
│   └── styles/globals.css
├── public/assets/                    ← Wordmark, album art, images
├── tailwind.config.js                ← All design tokens — use only these
└── AGENTS.md
```

---

## Before Every Task

1. Read `/design-system/slabs-design-system-v2.md` in full
2. Read `/design-system/typography-design-system.md` in full
3. Read the section prompt specified in the task

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v3 — tokens in `tailwind.config.js`
- **Fonts:** Google Fonts — Instrument Serif, Funnel Display, Funnel Sans
- **Icons:** Lucide React (already installed)
- **Language:** TypeScript — all components `.tsx`
- **No new dependencies** without explicit approval

---

## Typography Rules

| Font | Tailwind class | Use |
|---|---|---|
| Instrument Serif | `font-serif` | Headings, hero, display — 24px minimum |
| Funnel Display | `font-display` | Nav, labels, overlines, UI chrome |
| Funnel Sans | `font-sans` | Body copy, paragraphs, captions |

- Never use Instrument Serif below 24px
- Funnel Display labels and overlines: always uppercase, always `tracking-[0.08em]` or higher
- Never use Inter, Roboto, Arial, or system fonts

---

## Color Rules

- Use only tokens defined in `tailwind.config.js`
- **Amber (`#CD9121`) on dark surfaces only** — never on light backgrounds
- Light mode prices and accents: `text-forest` (`#204F41`)
- Dark mode prices and accents: `text-dark-accent` (`#E8A830`)
- No hardcoded hex values in components

---

## Hard Design Rules

- `border-radius: 0` on everything — cards, buttons, inputs, badges, modals, drawers
- **Only exception:** vinyl disc uses `rounded-full` — nothing else
- No drop shadows on cards except subtle hover state: `shadow-[0_4px_16px_rgba(20,19,19,0.08)]`
- No gradients on UI elements — gradients only on album art overlays
- No backdrop blur — solid fills only

---

## Product Card Rules

- Image `<a>` links to `/products/[slug]` — the only interactive element on the card
- No buy button, price, badge, or overlay in the product grid
- Vinyl disc: `z-index: 1`, sleeve: `z-index: 2`, parent: `overflow: visible`
- Disc slides **right** on hover: `translateX(0%)` → `translateX(55%)`
- Spec block: two-column grid, 56px left / 1fr right, all lines same size/weight

---

## Button Hierarchy

| Level | Class | Style |
|---|---|---|
| Primary | `.btn-primary` | `bg-forest text-cream` — PDP only |
| Secondary | `.btn-ghost` | `border border-slabs-border` no fill |
| Tertiary | `.link-arrow` | Text + `→`, no border |
| Quaternary | `.link-underline` | Underline only |

---

## Status Labels

- "New", "Gone", "Low" — plain text only
- No pill, no badge, no background, no border
- Font: `font-display`, 10px, uppercase, `tracking-[0.10em]`

---

## Output Rules

- Save all components to `/src/components/[ComponentName].tsx`
- Export as default named component
- Props interface defined at top of file
- Use Tailwind utility classes — no inline styles, no CSS modules
- No `style={{}}` attributes
- Mobile-first responsive — `sm:`, `md:`, `lg:` breakpoints

---

*slabsvinyl.com · Design System v2.0 · April 2026*
