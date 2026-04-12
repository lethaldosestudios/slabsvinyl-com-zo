# SLABS — SECTION PROMPT 01: NAVIGATION
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Site Navigation** component for slabsvinyl.com.

---

## What to Build

A sticky site header with a desktop nav bar and a full-screen mobile overlay. Two states: transparent (over hero) and filled (after scroll). React component with Tailwind CSS using only the tokens in the master config.

---

## Desktop Nav

### Structure (left to right)
```
[Wordmark]    [Shop] [Collections] [Crate] [Journal] [About]    [Search icon] [Cart icon + count]
```

### Measurements
- Height: 60px fixed
- Max width: 1280px centered, gutters `clamp(1.5rem, 5vw, 5rem)`
- Position: `fixed`, `top: 0`, `z-index: 50`, full width

### Wordmark
- Text: "SLABS"
- Font: `font-serif` (Instrument Serif), italic, 28px, `font-weight: 400`
- Color: `text-slabs-text` in filled state / `text-cream` in transparent state
- Links to: `/`

### Nav Links
- Font: `font-display`, `text-ui-nav` (14px), `font-weight: 400`, `tracking-[0.01em]`
- Color: `text-slabs-text-muted` filled / `text-cream/80` transparent
- Hover: 2px underline slides in from left, 160ms, color `forest`
- Active page: same 2px underline, persistent
- Links: Shop `/shop`, Collections `/collections`, Crate `/crate`, Journal `/journal`, About `/about`

### Icons (right side)
- Search: Lucide `Search`, 20px, stroke 1.5px
- Cart: Lucide `ShoppingBag`, 20px, stroke 1.5px
- Cart badge: small square (not rounded), `bg-amber`, `text-ink`, `font-sans`, 10px bold

### Scroll Behavior
- Default: transparent, no border
- After 80px scroll: `bg-slabs-surface`, `border-bottom: 1px solid slabs-border`
- Transition: `background 180ms cubic-bezier(0.25,0.1,0.25,1)`

---

## Mobile Nav

### Full-Screen Overlay
- Background: `bg-ink`
- Close: Lucide `X`, top-right
- Links: `font-serif` italic, 36px, staggered fade-in + slide-up 12px

### Bottom Bar (persistent, mobile only)
- `fixed bottom-0`, `bg-ink`, height 56px
- Four icons: Shop (Disc), Crate (Archive), Search, Cart
- Each: icon 20px + label 9px uppercase

---

## Component Props

```ts
interface NavProps {
  cartCount: number;
  currentPath: string;
  transparent?: boolean;
}
```

---

## Do Not
- No mega-menu or dropdowns
- No backdrop-filter blur
- No rounded cart badge
- No colors outside Tailwind config
