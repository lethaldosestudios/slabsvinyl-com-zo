# Slabs Vinyl Supply — Design System v2.0
### Updated April 2026 · All confirmed changes applied

> **What changed in v2:** Ink updated to `#141313`, contrast tokens recalibrated, two-column receipt spec layout finalized, vinyl hover bug corrected (slides out, not in), `border-radius: 0` enforced everywhere, card interaction locked to Option A (image → PDP only, no buy buttons in grid), filter strip redesigned as printed form, action hierarchy formalized.

---

## 1. Color System — Updated

### Core Change: Ink → `#141313`

The ink color has been updated from `#1A1816` to `#141313` (true near-black, slightly cooler). All semantic text tokens and dark mode backgrounds have been recalibrated against this.

### Contrast Fixes (Light Mode on `#F6F6F0` paper)

| Token | Old Hex | New Hex | Ratio on Paper | Status |
|---|---|---|---|---|
| `--color-text` | `#28231C` | `#141313` | 17.5:1 | ✅ AAA |
| `--color-text-muted` | `#6B6257` | `#4E4843` | 6.2:1 | ✅ AA |
| `--color-text-faint` | `#A09589` | `#6B6257` | 4.6:1 | ✅ AA (large/14px+) |
| `--color-amber` as text | `#CD9121` | **Restricted to dark bg only** | 2.9:1 | ❌ Removed from light text |

**Amber rule:** `#CD9121` is only used as text on dark surfaces. On light backgrounds, use `--color-forest` (`#204F41`) for prices and accents.

### Full CSS Variables — v2

```css
:root, [data-theme="light"] {
  --color-paper:    #F6F6F0;
  --color-cream:    #EFEEEA;
  --color-sleeve:   #CEC6B9;
  --color-forest:   #204F41;
  --color-amber:    #CD9121;
  --color-plum:     #322B55;
  --color-wax:      #9A181A;
  --color-caramel:  #B28B58;
  --color-ink:      #141313;

  --color-bg:             var(--color-paper);
  --color-surface:        var(--color-cream);
  --color-surface-muted:  var(--color-sleeve);
  --color-primary:        var(--color-forest);
  --color-accent:         var(--color-amber);   /* Use on dark bg only */

  --color-text:           #141313;
  --color-text-muted:     #4E4843;
  --color-text-faint:     #6B6257;

  --color-border:         rgba(20, 19, 19, 0.12);
  --color-divider:        rgba(20, 19, 19, 0.08);
  --color-error:          var(--color-wax);
  --color-price:          var(--color-forest);
}

[data-theme="dark"] {
  --color-bg:             #141313;
  --color-surface:        #242120;
  --color-surface-muted:  #323030;
  --color-primary:        #3D8468;
  --color-accent:         #E8A830;

  --color-text:           #EFEEEA;
  --color-text-muted:     #A09589;
  --color-text-faint:     #6B6257;

  --color-border:         rgba(239, 238, 234, 0.10);
  --color-divider:        rgba(239, 238, 234, 0.07);
  --color-error:          #C4332A;
  --color-price:          #E8A830;
}
```

---

## 2. Border Radius — Removed Everywhere

**Rule: `border-radius: 0` on all components.** No exceptions.

The only exception: the vinyl disc uses `border-radius: 50%`. Nothing else.

---

## 3. Product Card — Two-Column Spec Layout

```
┌─────────────────────────────────────┐
│           [ ALBUM ART ]             │
│      [ vinyl slides out on hover ]  │
├──────────────┬──────────────────────┤
│ 001          │  MARVIN GAYE         │
│ SOUL         │  WHAT'S GOING ON     │
│              │  TAMLA · 1971        │
│              │  T 310L              │
└──────────────┴──────────────────────┘
```

---

## 4. Vinyl Hover — Corrected

Sleeve (`z-index: 2`) sits in front of vinyl disc (`z-index: 1`). Disc starts tucked behind sleeve at `translateX(0%)` and slides **right** on hover to `translateX(55%)`. Parent uses `overflow: visible`.

---

## 5. Filter Strip — Printed Form Style

Single-row horizontal strip. `border: 1px solid`, height 36px, all items separated by 1px dividers. Font: Funnel Display, 11px, uppercase, letter-spacing 0.08em.

---

## 6. Action Hierarchy

| Level | Style | Use Case |
|---|---|---|
| Primary | Solid forest bg, cream text | "Grab it" on PDP |
| Secondary | 1px border, no fill | Secondary PDP actions |
| Tertiary | Arrow text link | "View all →" |
| Quaternary | Underline text link | Editorial, sonic lineage |

---

## 7. Status Labels — Text Only, No Pills

Font: Funnel Display, 10px, weight 600, letter-spacing 0.10em, uppercase. No background, no border.
- New → `text-slabs-text-muted`
- Gone → `text-wax`
- Last Copy → `text-caramel`

---

## 8. PDP Spec Block — Two-Column Ledger Format

`grid-template-columns: 120px 1fr`. Font: Funnel Display, 11px, uppercase, letter-spacing 0.05em, line-height 1.8.

---

## 9. Dark Mode — Updated Depth Scale

| Layer | Token | Hex | Use |
|---|---|---|---|
| Base | `--color-bg` | `#141313` | Page background |
| Surface | `--color-surface` | `#242120` | Cards, panels |
| Surface Muted | `--color-surface-muted` | `#323030` | Nested elements |
| Border | `--color-border` | `rgba(239,238,234,0.10)` | All dividers |

---

## 10. What Stays Unchanged

- Typography system — Instrument Serif / Funnel Display / Funnel Sans
- Palette hex values — only `--color-ink` changed
- Spacing scale — 4px base unit
- Motion — `cubic-bezier(0.25, 0.1, 0.25, 1)`, same durations
- Grid — 4 col desktop / 2 col tablet / 1 col mobile; 1280px max content width
- Iconography — Lucide, 1.5px stroke, always `--color-text-muted`

---

*Design System v2.0 — April 2026*
