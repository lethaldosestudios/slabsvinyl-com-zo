# SLABS — SECTION PROMPT 03: NEW ARRIVALS
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **New Arrivals** section for the slabsvinyl.com home page.

---

## What to Build

Product grid section showing the 8 most recently added records. Introduces the catalog aesthetic after the hero. Uses the reusable `<CatalogEntry />` card component — see **`prompts/00-catalog-entry.md`** for the full component spec.

---

## Section Layout

- `bg-paper` (`#F6F6F0`)
- Padding: `py-[clamp(4rem,8vw,8rem)]`
- Max width: 1280px centered, gutters `clamp(1.5rem,5vw,5rem)`

---

## Section Header (left-aligned)

**Overline**
- Text: `"NEW ARRIVALS"`
- Font: `font-display`, `text-ui-over` (10px), `font-weight: 600`, uppercase, `tracking-[0.12em]`
- Color: `text-slabs-text-faint`
- `mb-3`

**Heading**
- Text: `"Just dropped."`
- Font: `font-serif` italic, `text-display-sm`, `font-weight: 400`
- Color: `text-slabs-text`
- `mb-10`

---

## Product Grid

- Desktop: 4 columns / Tablet ≤1024px: 2 columns / Mobile ≤640px: 1 column
- `gap-4`
- Render 8 `<CatalogEntry />` cards using the mock data in `prompts/00-catalog-entry.md`

---

## CatalogEntry Reference

This section renders `<CatalogEntry />` cards. **Do not redefine the component here.** Refer to `prompts/00-catalog-entry.md` for:

- Full card structure and ASCII layout diagram
- Image container and overflow rules
- Vinyl disc CSS animation
- Spec block typography and grid
- Card container hover and sold-out states
- Full `CatalogEntryProps` interface
- Mock data (8 records)

---

## Section Footer

Right-aligned, `mt-8`:
- Link: `"View all new arrivals"` + `→`
- Font: `font-display`, 12px, uppercase, `tracking-[0.06em]`, `text-slabs-text-muted`
- Hover: `text-slabs-text`, gap to arrow widens to 10px

---

## Do Not

- No buy button anywhere on the card or in this section
- No price on the card — price lives on PDP only
- No overlay or tooltip on the album art
- No centered spec text — always left-aligned
- No colored card backgrounds on any state
