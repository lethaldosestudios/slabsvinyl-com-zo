# Typography Design System
### Instrument Serif · Funnel Display · Funnel Sans

---

## Overview

| Font | Role | Source |
|------|------|--------|
| **Instrument Serif** | Headings & Hero text | Google Fonts |
| **Funnel Display** | Subheadings, Labels & Nav | Google Fonts |
| **Funnel Sans** | Body Copy & UI text | Google Fonts |

---

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Funnel+Display:wght@300..800&family=Funnel+Sans:wght@300..800&display=swap" rel="stylesheet">
```

```css
--font-serif:   'Instrument Serif', Georgia, serif;
--font-display: 'Funnel Display', 'Helvetica Neue', sans-serif;
--font-body:    'Funnel Sans', 'Helvetica Neue', sans-serif;
```

---

## Fluid Type Scale

```css
--text-xs:    clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);
--text-sm:    clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);
--text-base:  clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
--text-lg:    clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);
--text-xl:    clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);
--text-2xl:   clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);
--text-3xl:   clamp(2.5rem,   1rem    + 4vw,    5rem);
--text-hero:  clamp(3rem,     0.5rem  + 7vw,    8rem);
```

---

## The Three Zones

```
ZONE 1 — DISPLAY (Instrument Serif)
  Sizes: 24px → 128px
  Rule: Serif only. Never in UI chrome or body copy.

ZONE 2 — UI CHROME (Funnel Display)
  Sizes: 11px → 20px
  Rule: Navigation, labels, subheadings. Never in paragraphs.

ZONE 3 — CONTENT (Funnel Sans)
  Sizes: 12px → 18px
  Rule: All paragraph text, helper text, UI form elements.
```

---

*Typography Design System — April 2026*
