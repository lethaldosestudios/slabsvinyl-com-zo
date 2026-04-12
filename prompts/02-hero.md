# SLABS — SECTION PROMPT 02: HERO
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Home Hero** section for slabsvinyl.com.

---

## What to Build

Full-viewport hero. No photo, no background image. Pure type and wordmark asset on warm off-white.

---

## Layout

- `min-h-screen`, `bg-paper`
- Content: vertically and horizontally centered, stacked column
- `pt-[60px]` to clear the fixed nav

---

## Content Stack

### 1 — Wordmark
- `<img>` → `/public/assets/wordmark-slabs-fuzzy.jpg`
- Width: `clamp(280px, 40vw, 560px)`, `mb-10`

### 2 — Tagline
- `"Deep archive. New condition. No filler."`
- `font-display`, `text-ui-h5`, `text-slabs-text-muted`, `tracking-[0.04em]`, `mb-10`

### 3 — CTA Pair
- **Shop:** `border border-slabs-text`, no fill → `/shop`
- **Dig the Crates:** `border border-slabs-border` → `/crate`
- Both: `font-display`, 12px, uppercase, `tracking-[0.08em]`, `px-8 py-3`

---

## Load Animation

| Element | Delay | Duration | Motion |
|---|---|---|---|
| Wordmark | 0ms | 600ms | opacity + scale 1.01→1 |
| Tagline | 400ms | 400ms | opacity + translateY 8px→0 |
| CTAs | 700ms | 400ms | opacity + translateY 8px→0 |

---

## Scroll Chevron
- Lucide `ChevronDown`, centered at bottom, `text-slabs-text-faint`
- Loop translateY 0→6px→0, 2000ms, fades out after 60px scroll

---

## Do Not
- No background image, gradient, or photo
- Both CTAs ghost style only — no solid fills
